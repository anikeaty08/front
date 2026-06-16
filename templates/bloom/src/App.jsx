import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    document.addEventListener('DOMContentLoaded', () => {
      const canvas = document.getElementById('orderTrendChart');
      if (!canvas) return;

      const ctx = canvas.getContext('2d');
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, 'rgba(251, 113, 133, 0.35)');
      gradient.addColorStop(1, 'rgba(251, 113, 133, 0)');

      const dataPoints = [45, 52, 38, 65, 73, 89, 95];
      const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

      new Chart(ctx, {
        type: 'line',
        data: {
          labels,
          datasets: [{
            data: dataPoints,
            borderColor: '#FB7185',
            backgroundColor: gradient,
            borderWidth: 2,
            pointRadius: 0,
            pointHoverRadius: 3,
            cubicInterpolationMode: 'monotone',
            fill: true
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          interaction: { intersect: false, mode: 'index' },
          plugins: {
            legend: { display: false },
            tooltip: {
              enabled: true,
              backgroundColor: 'rgba(17, 24, 39, 0.8)',
              titleColor: '#E5E7EB',
              bodyColor: '#D1D5DB',
              borderColor: 'rgba(255,255,255,0.08)',
              borderWidth: 1,
              displayColors: false,
              callbacks: {
                label: ctx => ` ${ctx.parsed.y} orders`
              }
            }
          },
          scales: {
            x: {
              display: false,
              grid: { display: false },
              ticks: { display: false }
            },
            y: {
              display: false,
              grid: { display: false },
              ticks: { display: false }
            }
          }
        }
      });
    });
  


    lucide.createIcons();
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      <div className="fixed top-0 w-full -z-10 h-screen blur-3xl bg-cover bg-center" style={{backgroundImage: 'url("https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/096b31e5-a18e-4260-91c1-52e9bd3d3e13_3840w.jpg")'}}></div>
<main className="md:py-12 max-w-7xl mr-auto ml-auto pt-8 pr-6 pb-8 pl-6">
<section className="grid grid-cols-1 xl:grid-cols-3 place-items-center gap-x-12 gap-y-8">

<div className="relative">
<div className="overflow-hidden xl:bg-slate-100 bg-white w-[393px] h-[852px] rounded-[40px] relative shadow-2xl">

<div className="absolute top-3 left-1/2 -translate-x-1/2 w-[126px] h-[37px] rounded-[24px] bg-white"></div>

<div className="absolute top-2 left-6 text-sm font-medium text-neutral-900 font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>9:41</div>
<div className="absolute top-2 right-6 flex items-center gap-1">
<svg className="lucide lucide-signal w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="signal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', color: 'rgb(23, 23, 23)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 20h.01"></path><path d="M7 20v-4"></path><path d="M12 20v-8"></path><path d="M17 20V8"></path><path d="M22 4v16"></path></svg>
<svg className="lucide lucide-wifi w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="wifi" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', color: 'rgb(23, 23, 23)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h.01"></path><path d="M2 8.82a15 15 0 0 1 20 0"></path><path d="M5 12.859a10 10 0 0 1 14 0"></path><path d="M8.5 16.429a5 5 0 0 1 7 0"></path></svg>
<svg className="lucide lucide-battery w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="battery" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', color: 'rgb(23, 23, 23)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M 22 14 L 22 10"></path><rect height="12" rx="2" width="16" x="2" y="6"></rect></svg>
</div>

<div className="overflow-y-auto h-full pt-14 pb-32">
<div className="pr-6 pl-6">

<div className="flex mb-6 items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-2xl overflow-hidden">
<img alt="Profile" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/ead56339-6be7-4c71-b41d-59b8bfdb97ac_800w.webp" style={{}}/>
</div>
<div className="">
<p className="text-lg tracking-tight font-light text-neutral-800 font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>Good morning,</p>
<p className="text-lg text-neutral-500 tracking-tight font-light font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>Sarah</p>
</div>
</div>
<div className="flex items-center gap-3">
<button className="w-10 h-10 border rounded-2xl flex items-center justify-center backdrop-blur bg-black/5 border-black/5">
<svg className="lucide lucide-bell w-5 h-5 text-neutral-800" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
</button>
</div>
</div>

<div className="lg:bg-slate-50 xl:bg-slate-50 bg-black/5 border-black/5 border rounded-3xl mb-6 pt-6 pr-6 pb-6 pl-6 shadow-[rgba(50,_50,_93,_0.25)_0px_13px_27px_-5px,_rgba(0,_0,_0,_0.3)_0px_8px_16px_-8px] backdrop-blur-xl">
<div className="flex mb-4 items-center justify-between">
<div className="">
<p className="text-neutral-500 text-xs font-medium font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>Active Order</p>
<p className="text-2xl mt-1 tracking-tight text-neutral-900 font-playfair font-medium" style={{fontFamily: 'Manrope, -apple-system, system-ui, sans-serif'}}>Spring Bouquet</p>
<p className="text-neutral-500 mt-1 text-xs font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>Roses &amp; Tulips • For Anniversary</p>
</div>
<div className="flex items-center gap-2 border px-3 py-2 rounded-2xl bg-black/10 border-black/10">
<span className="w-1.5 h-1.5 rounded-full bg-rose-600"></span>
<span className="text-xs font-medium text-neutral-800 font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>En route</span>
</div>
</div>
<div className="flex gap-3 gap-x-3 gap-y-3">
<button className="flex-1 flex transition-colors xl:text-rose-400 xl:bg-rose-300/20 font-medium text-neutral-200 bg-black/20 border-black/10 border rounded-2xl pt-3 pb-3 backdrop-blur gap-x-2 gap-y-2 items-center justify-center" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>
<svg className="lucide lucide-map-pin w-[16px] h-[16px] text-neutral-900" data-icon-replaced="true" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '16px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<span className="text-sm text-neutral-800 font-geist" style={{}}>Track</span>
</button>
<button className="flex-1 flex transition-colors font-medium text-neutral-800 bg-black/5 border-black/10 border rounded-2xl pt-3 pb-3 gap-x-2 gap-y-2 items-center justify-center" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>
<svg className="lucide lucide-phone w-4 h-4" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
<span className="text-sm font-geist" style={{}}>Contact</span>
</button>
</div>
</div>

<div className="flex items-center justify-between mb-4">
<h3 className="text-base font-semibold tracking-tight text-neutral-800 font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>Popular Bouquets</h3>
<button className="text-neutral-500 text-xs font-medium font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>View all</button>
</div>
<div className="mb-8 space-y-3">

<div className="flex gap-4 xl:pl-0 xl:pt-0 xl:pb-0 xl:bg-slate-50 bg-black/5 ring-slate-600/5 ring-1 rounded-3xl pt-0 pr-4 pb-0 pl-0 shadow-[rgba(14,_63,_126,_0.04)_0px_0px_0px_1px,_rgba(42,_51,_69,_0.04)_0px_1px_1px_-0.5px,_rgba(42,_51,_70,_0.04)_0px_3px_3px_-1.5px,_rgba(42,_51,_70,_0.04)_0px_6px_6px_-3px,_rgba(14,_63,_126,_0.04)_0px_12px_12px_-6px,_rgba(14,_63,_126,_0.04)_0px_24px_24px_-12px] backdrop-blur-sm gap-x-4 gap-y-4 items-center">
<div className="overflow-hidden w-20 h-20 rounded-2xl">
<img alt="Rose Garden" className="w-full h-full object-cover" src="https://cdn.midjourney.com/254ebaf8-8457-46f3-99cc-ab991ebbaf70/0_0.png?w=800&amp;q=80" style={{}}/>
</div>
<div className="flex-1">
<p className="font-medium text-sm text-neutral-800 font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>Rose Garden</p>
<p className="text-neutral-500 text-xs font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>24 red roses • Classic elegance</p>
</div>
<div className="text-right">
<div className="flex items-center justify-end gap-1">
<svg className="lucide lucide-heart w-4 h-4 text-rose-600" data-lucide="heart" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
<span className="text-xs text-rose-600 font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>Popular</span>
</div>
<p className="text-xs mt-1 text-neutral-400 font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>$89</p>
</div>
</div>

<div className="flex gap-4 xl:pl-0 xl:pt-0 xl:pb-0 xl:bg-slate-50 bg-black/5 ring-slate-600/5 ring-1 rounded-3xl pt-0 pr-4 pb-0 pl-0 shadow-[rgba(14,_63,_126,_0.04)_0px_0px_0px_1px,_rgba(42,_51,_69,_0.04)_0px_1px_1px_-0.5px,_rgba(42,_51,_70,_0.04)_0px_3px_3px_-1.5px,_rgba(42,_51,_70,_0.04)_0px_6px_6px_-3px,_rgba(14,_63,_126,_0.04)_0px_12px_12px_-6px,_rgba(14,_63,_126,_0.04)_0px_24px_24px_-12px] backdrop-blur-sm gap-x-4 gap-y-4 items-center">
<div className="overflow-hidden w-20 h-20 rounded-2xl">
<img alt="Wildflower Mix" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/5d9d0ab4-4aae-4d05-ad8f-0389f34420c4_320w.jpg" style={{}}/>
</div>
<div className="flex-1">
<p className="font-medium text-sm text-neutral-800 font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>Wildflower Mix</p>
<p className="text-neutral-500 text-xs font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>Seasonal blooms • Rustic charm</p>
</div>
<div className="text-right">
<div className="flex items-center justify-end gap-1">
<svg className="lucide lucide-sparkles w-4 h-4 text-neutral-600" data-lucide="sparkles" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
<span className="text-xs text-neutral-600 font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>Fresh</span>
</div>
<p className="text-xs mt-1 text-neutral-400 font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>$65</p>
</div>
</div>

<div className="flex gap-4 xl:pl-0 xl:pt-0 xl:pb-0 xl:bg-slate-50 bg-black/5 ring-slate-600/5 ring-1 rounded-3xl pt-0 pr-4 pb-0 pl-0 shadow-[rgba(14,_63,_126,_0.04)_0px_0px_0px_1px,_rgba(42,_51,_69,_0.04)_0px_1px_1px_-0.5px,_rgba(42,_51,_70,_0.04)_0px_3px_3px_-1.5px,_rgba(42,_51,_70,_0.04)_0px_6px_6px_-3px,_rgba(14,_63,_126,_0.04)_0px_12px_12px_-6px,_rgba(14,_63,_126,_0.04)_0px_24px_24px_-12px] backdrop-blur-sm gap-x-4 gap-y-4 items-center">
<div className="overflow-hidden w-20 h-20 rounded-2xl">
<img alt="Orchid Elegance" className="w-full h-full object-cover" src="https://cdn.midjourney.com/2b628a26-7a6b-4738-b379-c8c75285cc76/0_0.png?w=800&amp;q=80" style={{}}/>
</div>
<div className="flex-1">
<p className="font-medium text-sm text-neutral-800 font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>Orchid Elegance</p>
<p className="text-neutral-500 text-xs font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>White orchids • Premium</p>
</div>
<div className="text-right">
<div className="flex items-center justify-end gap-1">
<svg className="lucide lucide-star w-4 h-4 text-neutral-600" data-lucide="star" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span className="text-xs text-neutral-600 font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>Premium</span>
</div>
<p className="text-xs mt-1 text-neutral-400 font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>$120</p>
</div>
</div>
</div>

<div className="flex items-center justify-between mb-4 mt-8">
<h3 className="text-base font-semibold tracking-tight text-neutral-800 font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>Recent Orders</h3>
<button className="text-neutral-500 text-xs font-medium font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>View all</button>
</div>
<div className="space-y-3 mb-8">
<div className="flex gap-4 lg:bg-slate-50 bg-black/5 rounded-3xl pt-4 pr-4 pb-4 pl-4 shadow-[rgba(14,_63,_126,_0.04)_0px_0px_0px_1px,_rgba(42,_51,_69,_0.04)_0px_1px_1px_-0.5px,_rgba(42,_51,_70,_0.04)_0px_3px_3px_-1.5px,_rgba(42,_51,_70,_0.04)_0px_6px_6px_-3px,_rgba(14,_63,_126,_0.04)_0px_12px_12px_-6px,_rgba(14,_63,_126,_0.04)_0px_24px_24px_-12px] backdrop-blur-sm gap-x-4 gap-y-4 items-center">
<div className="w-10 h-10 rounded-2xl flex items-center justify-center bg-black/10">
<svg className="lucide lucide-check-circle w-5 h-5 text-rose-600" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
</div>
<div className="flex-1">
<p className="font-medium text-sm text-neutral-800 font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>Birthday Surprise</p>
<p className="text-neutral-500 text-xs font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>Today, 2:15 PM • Lilies &amp; Carnations</p>
</div>
<div className="text-right">
<p className="font-medium text-sm text-neutral-800 font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>Delivered</p>
<p className="text-neutral-500 text-xs font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>$75</p>
</div>
</div>
<div className="flex gap-4 lg:bg-slate-50 bg-black/5 rounded-3xl pt-4 pr-4 pb-4 pl-4 shadow-[rgba(14,_63,_126,_0.04)_0px_0px_0px_1px,_rgba(42,_51,_69,_0.04)_0px_1px_1px_-0.5px,_rgba(42,_51,_70,_0.04)_0px_3px_3px_-1.5px,_rgba(42,_51,_70,_0.04)_0px_6px_6px_-3px,_rgba(14,_63,_126,_0.04)_0px_12px_12px_-6px,_rgba(14,_63,_126,_0.04)_0px_24px_24px_-12px] backdrop-blur-sm gap-x-4 gap-y-4 items-center">
<div className="w-10 h-10 rounded-2xl flex items-center justify-center bg-black/10">
<svg className="lucide lucide-package w-5 h-5 text-neutral-800" data-lucide="package" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path><path d="M12 22V12"></path><polyline points="3.29 7 12 12 20.71 7"></polyline><path d="m7.5 4.27 9 5.15"></path></svg>
</div>
<div className="flex-1">
<p className="font-medium text-sm text-neutral-800 font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>Get Well Soon</p>
<p className="text-neutral-500 text-xs font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>Yesterday, 6:30 PM • Sunflowers</p>
</div>
<div className="text-right">
<p className="font-medium text-sm text-neutral-800 font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>Shipped</p>
<p className="text-neutral-500 text-xs font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>$55</p>
</div>
</div>
<div className="flex gap-4 lg:bg-slate-50 bg-black/5 rounded-3xl pt-4 pr-4 pb-4 pl-4 shadow-[rgba(14,_63,_126,_0.04)_0px_0px_0px_1px,_rgba(42,_51,_69,_0.04)_0px_1px_1px_-0.5px,_rgba(42,_51,_70,_0.04)_0px_3px_3px_-1.5px,_rgba(42,_51,_70,_0.04)_0px_6px_6px_-3px,_rgba(14,_63,_126,_0.04)_0px_12px_12px_-6px,_rgba(14,_63,_126,_0.04)_0px_24px_24px_-12px] backdrop-blur-sm gap-x-4 gap-y-4 items-center">
<div className="w-10 h-10 rounded-2xl flex items-center justify-center bg-black/10">
<svg className="lucide lucide-calendar w-5 h-5 text-neutral-800" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
</div>
<div className="flex-1">
<p className="font-medium text-sm text-neutral-800 font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>Anniversary Special</p>
<p className="text-neutral-500 text-xs font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>Mar 1, 11:45 AM • Mixed Roses</p>
</div>
<div className="text-right">
<p className="font-medium text-sm text-neutral-800 font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>Scheduled</p>
<p className="text-neutral-500 text-xs font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>$95</p>
</div>
</div>
</div>
</div>
</div>

<div className="xl:bg-slate-50/10 xl:pt-0 xl:pb-0 bg-black/10 border-black/10 border rounded-3xl pt-0 pr-3 pb-0 pl-3 absolute right-4 bottom-8 left-4 backdrop-blur">
<div className="flex pt-2 pb-2 items-center justify-around">
<div className="flex flex-col items-center gap-1">
<div className="w-8 h-8 border rounded-2xl flex items-center justify-center backdrop-blur bg-black/20 border-black/10">
<svg className="lucide lucide-flower-2 w-4 h-4 text-neutral-200" data-lucide="flower-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1"></path><circle cx="12" cy="8" r="2"></circle><path d="M12 10v12"></path><path d="M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z"></path><path d="M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z"></path></svg>
</div>
<span className="text-xs font-medium text-neutral-800 font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>Shop</span>
</div>
<div className="flex flex-col items-center gap-1">
<svg className="lucide lucide-shopping-bag w-6 h-6 text-neutral-400" data-lucide="shopping-bag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 10a4 4 0 0 1-8 0"></path><path d="M3.103 6.034h17.794"></path><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path></svg>
<span className="text-xs text-neutral-400 font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>Orders</span>
</div>
<div className="flex flex-col items-center gap-1">
<svg className="lucide lucide-heart w-6 h-6 text-neutral-400" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
<span className="text-xs text-neutral-400 font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>Favorites</span>
</div>
<div className="flex flex-col items-center gap-1">
<svg className="lucide lucide-user w-6 h-6 text-neutral-400" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
<span className="text-xs text-neutral-400 font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>Profile</span>
</div>
</div>
</div>

<div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 rounded-full bg-gray-400"></div>
</div>
</div>

<div className="relative">
<div className="overflow-hidden rounded-[40px] relative shadow-2xl w-[393px] h-[852px] bg-white">

<div className="absolute top-3 left-1/2 -translate-x-1/2 w-[126px] h-[37px] rounded-[24px] bg-white"></div>

<div className="absolute top-2 left-6 text-sm font-medium text-neutral-900 font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>9:41</div>
<div className="absolute top-2 right-6 flex items-center gap-1">
<svg className="lucide lucide-signal w-4 h-4 text-neutral-900" data-lucide="signal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 20h.01"></path><path d="M7 20v-4"></path><path d="M12 20v-8"></path><path d="M17 20V8"></path><path d="M22 4v16"></path></svg>
<svg className="lucide lucide-wifi w-4 h-4 text-neutral-900" data-lucide="wifi" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h.01"></path><path d="M2 8.82a15 15 0 0 1 20 0"></path><path d="M5 12.859a10 10 0 0 1 14 0"></path><path d="M8.5 16.429a5 5 0 0 1 7 0"></path></svg>
<svg className="lucide lucide-battery w-4 h-4 text-neutral-900" data-lucide="battery" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M 22 14 L 22 10"></path><rect height="12" rx="2" width="16" x="2" y="6"></rect></svg>
</div>

<div className="absolute top-0 right-0 bottom-0 left-0">
<img alt="Flower background" className="w-full h-full object-cover" src="https://cdn.midjourney.com/2d44c01e-27c9-4683-8bee-601e29d2c44f/0_0.png?w=800&amp;q=80" style={{}}/>
<div className="xl:bg-white/50 bg-white/60 absolute top-0 right-0 bottom-0 left-0"></div>
</div>

<div className="z-10 flex flex-col h-full pt-14 pr-6 pl-6 relative">

<div className="flex mt-8 gap-x-2 gap-y-2 items-center justify-center">
<span className="xl:text-7xl text-2xl font-medium text-neutral-900 tracking-tight font-playfair" style={{fontFamily: 'Manrope, -apple-system, system-ui, sans-serif'}}>Bloom</span>
</div>
<div className="flex-1 flex flex-col px-4 items-end justify-center">
<div className="text-center mb-12">
<h1 className="leading-tight text-4xl tracking-tight mb-4 text-neutral-900 font-playfair font-medium" style={{fontFamily: 'Manrope, -apple-system, system-ui, sans-serif'}}>
                  Fresh flowers,
                  <span className="tracking-tight text-neutral-800 font-playfair font-medium" style={{fontFamily: 'Manrope, -apple-system, system-ui, sans-serif'}}>delivered today.</span>
</h1>
<p className="text-base leading-relaxed text-neutral-600 font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>
                  Browse, customize, and send beautiful bouquets with same-day delivery.
                </p>
</div>
</div>

<div className="space-y-4 mb-8">
<button className="xl:text-slate-50 xl:bg-rose-400 text-base font-medium text-neutral-800 font-geist bg-black/20 w-full border-black/10 border rounded-3xl pt-4 pb-4 shadow-lg backdrop-blur" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>
                Create account
              </button>
<button className="text-base font-medium text-neutral-800 font-geist bg-black/5 w-full border-black/10 border rounded-3xl pt-4 pb-4 backdrop-blur" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>
                Log in
              </button>
</div>

<p className="text-xs text-left mb-6 text-neutral-400 font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>
              By continuing, you agree to our
              <span className="text-neutral-700 font-geist" style={{}}>Terms</span> and
              <span className="text-neutral-700 font-geist" style={{}}>Privacy Policy</span>.
            </p>

<div className="w-32 h-1 rounded-full mx-auto mb-2 bg-gray-400"></div>
</div>
</div>
</div>

<div className="relative">
<div className="overflow-hidden xl:bg-slate-100 bg-white w-[393px] h-[852px] rounded-[40px] relative shadow-2xl">

<div className="absolute top-3 left-1/2 -translate-x-1/2 w-[126px] h-[37px] rounded-[24px] bg-white"></div>

<div className="absolute top-2 left-6 text-sm font-medium text-neutral-900 font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>9:41</div>
<div className="absolute top-2 right-6 flex items-center gap-1">
<svg className="lucide lucide-signal w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="signal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', color: 'rgb(23, 23, 23)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 20h.01"></path><path d="M7 20v-4"></path><path d="M12 20v-8"></path><path d="M17 20V8"></path><path d="M22 4v16"></path></svg>
<svg className="lucide lucide-wifi w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="wifi" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', color: 'rgb(23, 23, 23)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h.01"></path><path d="M2 8.82a15 15 0 0 1 20 0"></path><path d="M5 12.859a10 10 0 0 1 14 0"></path><path d="M8.5 16.429a5 5 0 0 1 7 0"></path></svg>
<svg className="lucide lucide-battery w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="battery" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', color: 'rgb(23, 23, 23)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M 22 14 L 22 10"></path><rect height="12" rx="2" width="16" x="2" y="6"></rect></svg>
</div>

<div className="overflow-y-auto h-full pt-14 pb-32">
<div className="pr-6 pl-6">

<div className="flex items-center justify-between mb-6">
<button className="w-8 h-8 border rounded-2xl flex items-center justify-center backdrop-blur border-black/10 bg-black/5">
<svg className="lucide lucide-chevron-left w-5 h-5 text-neutral-800" data-lucide="chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
</button>
<h1 className="text-base font-semibold tracking-tight text-neutral-800 font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>Rose Garden</h1>
<button className="w-8 h-8 border rounded-2xl flex items-center justify-center backdrop-blur border-black/10 bg-black/5">
<svg className="lucide lucide-heart w-5 h-5 text-neutral-800" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
</button>
</div>

<div className="lg:bg-slate-50 xl:bg-slate-50 bg-black/5 border-black/5 border rounded-3xl mb-6 pt-6 pr-6 pb-6 pl-6 shadow-[rgba(50,_50,_93,_0.25)_0px_13px_27px_-5px,_rgba(0,_0,_0,_0.3)_0px_8px_16px_-8px] backdrop-blur-xl">
<div className="flex items-center gap-3 mb-4">
<div className="w-12 h-12 rounded-3xl overflow-hidden">
<img alt="Rose Garden" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1561181286-d3fee7d55364?q=80&amp;w=240&amp;auto=format&amp;fit=crop" style={{}}/>
</div>
<div className="">
<p className="text-lg font-semibold text-neutral-800 font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>Rose Garden</p>
<div className="flex items-center gap-3 text-xs">
<div className="flex items-center gap-1 text-neutral-800">
<svg className="lucide lucide-star w-4 h-4 fill-rose-600 text-rose-600" data-lucide="star" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span className="font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>4.9</span>
</div>
<div className="text-neutral-500 font-geist" style={{}}>•</div>
<div className="flex items-center gap-1 text-neutral-600">
<svg className="lucide lucide-truck w-4 h-4" data-lucide="truck" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path><path d="M15 18H9"></path><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path><circle cx="17" cy="18" r="2"></circle><circle cx="7" cy="18" r="2"></circle></svg>
<span className="font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>Same day</span>
</div>
</div>
</div>
</div>

<div className="h-32 rounded-2xl mb-4 overflow-hidden border border-black/5 bg-black/5">
<div className="h-full">
<canvas className="w-full h-full bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/8848e4a3-fcb4-4674-9275-ccb216622917_800w.jpg)] bg-cover" height="252" id="orderTrendChart" style={{display: 'block', boxSizing: 'border-box', height: '126px', width: '293px'}} width="586"></canvas>
</div>
</div>

<div className="flex items-center justify-between">
<div className="flex rounded-2xl p-1 bg-black/10">
<button className="px-3 py-1 text-xs border rounded-xl backdrop-blur bg-black/20 border-black/10 text-neutral-200 font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>7D</button>
<button className="px-3 py-1 text-xs text-neutral-500 font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>30D</button>
<button className="px-3 py-1 text-xs text-neutral-500 font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>90D</button>
</div>
<button className="text-neutral-500 font-medium text-xs font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>Orders</button>
</div>
</div>

<div className="grid grid-cols-2 gap-4 mb-6">
<button className="flex flex-col gap-2 xl:bg-slate-50 text-neutral-800 bg-black/20 border-0 rounded-3xl pt-6 pb-6 shadow-[rgba(14,_63,_126,_0.04)_0px_0px_0px_1px,_rgba(42,_51,_69,_0.04)_0px_1px_1px_-0.5px,_rgba(42,_51,_70,_0.04)_0px_3px_3px_-1.5px,_rgba(42,_51,_70,_0.04)_0px_6px_6px_-3px,_rgba(14,_63,_126,_0.04)_0px_12px_12px_-6px,_rgba(14,_63,_126,_0.04)_0px_24px_24px_-12px] backdrop-blur gap-x-2 gap-y-2 items-center">
<svg className="lucide lucide-shopping-cart w-[24px] h-[24px] text-neutral-800" data-icon-replaced="true" data-lucide="shopping-cart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '24px', height: '24px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></svg>
<span className="text-sm font-medium text-neutral-800 font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>Add to cart</span>
</button>
<button className="flex flex-col gap-2 xl:bg-slate-50 text-neutral-800 bg-black/20 border-0 rounded-3xl pt-6 pb-6 shadow-[rgba(14,_63,_126,_0.04)_0px_0px_0px_1px,_rgba(42,_51,_69,_0.04)_0px_1px_1px_-0.5px,_rgba(42,_51,_70,_0.04)_0px_3px_3px_-1.5px,_rgba(42,_51,_70,_0.04)_0px_6px_6px_-3px,_rgba(14,_63,_126,_0.04)_0px_12px_12px_-6px,_rgba(14,_63,_126,_0.04)_0px_24px_24px_-12px] backdrop-blur gap-x-2 gap-y-2 items-center">
<svg className="lucide lucide-gift w-6 h-6 text-neutral-800" data-lucide="gift" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="4" rx="1" width="18" x="3" y="8"></rect><path d="M12 8v13"></path><path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"></path><path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"></path></svg>
<span className="font-medium text-sm text-neutral-800 font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>Send gift</span>
</button>
</div>

<div className="mb-8">
<div className="flex items-center justify-between mb-4">
<h3 className="text-base font-semibold tracking-tight text-neutral-800 font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>Details</h3>
<button className="text-neutral-500 font-medium text-xs font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>Customize</button>
</div>
<div className="space-y-3">
<div className="flex gap-4 lg:bg-slate-50 bg-black/5 rounded-3xl pt-4 pr-4 pb-4 pl-4 shadow-[rgba(14,_63,_126,_0.04)_0px_0px_0px_1px,_rgba(42,_51,_69,_0.04)_0px_1px_1px_-0.5px,_rgba(42,_51,_70,_0.04)_0px_3px_3px_-1.5px,_rgba(42,_51,_70,_0.04)_0px_6px_6px_-3px,_rgba(14,_63,_126,_0.04)_0px_12px_12px_-6px,_rgba(14,_63,_126,_0.04)_0px_24px_24px_-12px] backdrop-blur-sm gap-x-4 gap-y-4 items-center">
<div className="w-10 h-10 rounded-2xl flex items-center justify-center bg-black/10">
<svg className="lucide lucide-flower w-5 h-5 text-rose-600" data-lucide="flower" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="3"></circle><path d="M12 16.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 1 1 12 7.5a4.5 4.5 0 1 1 4.5 4.5 4.5 4.5 0 1 1-4.5 4.5"></path><path d="M12 7.5V9"></path><path d="M7.5 12H9"></path><path d="M16.5 12H15"></path><path d="M12 16.5V15"></path><path d="m8 8 1.88 1.88"></path><path d="M14.12 9.88 16 8"></path><path d="m8 16 1.88-1.88"></path><path d="M14.12 14.12 16 16"></path></svg>
</div>
<div className="flex-1">
<p className="text-sm font-medium text-neutral-800 font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>24 Premium Roses</p>
<p className="text-xs text-neutral-500 font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>Long-stem red roses • Fresh cut</p>
</div>
<div className="text-right">
<p className="text-xs font-medium text-neutral-800 font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>$89</p>
</div>
</div>
<div className="flex gap-4 lg:bg-slate-50 bg-black/5 rounded-3xl pt-4 pr-4 pb-4 pl-4 shadow-[rgba(14,_63,_126,_0.04)_0px_0px_0px_1px,_rgba(42,_51,_69,_0.04)_0px_1px_1px_-0.5px,_rgba(42,_51,_70,_0.04)_0px_3px_3px_-1.5px,_rgba(42,_51,_70,_0.04)_0px_6px_6px_-3px,_rgba(14,_63,_126,_0.04)_0px_12px_12px_-6px,_rgba(14,_63,_126,_0.04)_0px_24px_24px_-12px] backdrop-blur-sm gap-x-4 gap-y-4 items-center">
<div className="w-10 h-10 rounded-2xl flex items-center justify-center bg-black/10">
<svg className="lucide lucide-sparkles w-5 h-5 text-neutral-800" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<div className="flex-1">
<p className="font-medium text-sm text-neutral-800 font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>Premium Wrapping</p>
<p className="text-neutral-500 text-xs font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>Silk ribbon • Gift card included</p>
</div>
<div className="text-right">
<p className="font-medium text-xs text-neutral-800 font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>Free</p>
</div>
</div>
<div className="flex gap-4 lg:bg-slate-50 bg-black/5 rounded-3xl pt-4 pr-4 pb-4 pl-4 shadow-[rgba(14,_63,_126,_0.04)_0px_0px_0px_1px,_rgba(42,_51,_69,_0.04)_0px_1px_1px_-0.5px,_rgba(42,_51,_70,_0.04)_0px_3px_3px_-1.5px,_rgba(42,_51,_70,_0.04)_0px_6px_6px_-3px,_rgba(14,_63,_126,_0.04)_0px_12px_12px_-6px,_rgba(14,_63,_126,_0.04)_0px_24px_24px_-12px] backdrop-blur-sm gap-x-4 gap-y-4 items-center">
<div className="w-10 h-10 rounded-2xl flex items-center justify-center bg-black/10">
<svg className="lucide lucide-droplet w-5 h-5 text-neutral-800" data-lucide="droplet" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"></path></svg>
</div>
<div className="flex-1">
<p className="font-medium text-sm text-neutral-800 font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>Care Instructions</p>
<p className="text-neutral-500 text-xs font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>Lasts 7-10 days • Change water daily</p>
</div>
<div className="text-right">
<p className="text-xs font-medium text-neutral-700 font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>Info</p>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="xl:bg-slate-50/10 xl:pt-0 xl:pb-0 bg-black/10 border-black/10 border rounded-3xl pt-0 pr-3 pb-0 pl-3 absolute right-4 bottom-8 left-4 backdrop-blur">
<div className="flex items-center justify-around py-2">
<div className="flex flex-col items-center gap-1">
<svg className="lucide lucide-flower-2 w-6 h-6 text-neutral-400" data-lucide="flower-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1"></path><circle cx="12" cy="8" r="2"></circle><path d="M12 10v12"></path><path d="M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z"></path><path d="M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z"></path></svg>
<span className="text-xs text-neutral-400 font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>Shop</span>
</div>
<div className="flex flex-col items-center gap-1">
<svg className="lucide lucide-shopping-bag w-6 h-6 text-neutral-400" data-lucide="shopping-bag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 10a4 4 0 0 1-8 0"></path><path d="M3.103 6.034h17.794"></path><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path></svg>
<span className="text-xs text-neutral-400 font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>Orders</span>
</div>
<div className="flex flex-col items-center gap-1">
<div className="w-8 h-8 border rounded-2xl flex items-center justify-center backdrop-blur bg-black/20 border-black/10">
<svg className="lucide lucide-heart w-4 h-4 text-neutral-200 fill-neutral-200" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
</div>
<span className="text-xs font-medium text-neutral-800 font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>Favorites</span>
</div>
<div className="flex flex-col items-center gap-1">
<svg className="lucide lucide-user w-6 h-6 text-neutral-400" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
<span className="text-xs text-neutral-400 font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>Profile</span>
</div>
</div>
</div>

<div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 rounded-full bg-gray-400"></div>
</div>
</div>
</section>
</main>



    </>
  );
}
