import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    document.addEventListener('DOMContentLoaded', () => {
      const canvas = document.getElementById('kyotoTempChart');
      if (!canvas) return;

      const ctx = canvas.getContext('2d');
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, 'rgba(163, 230, 53, 0.35)');   // lime-400 / emerald glow
      gradient.addColorStop(1, 'rgba(163, 230, 53, 0)');

      const dataPoints = [19, 18, 20, 22, 24, 23, 25];
      const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

      // eslint-disable-next-line no-undef
      new Chart(ctx, {
        type: 'line',
        data: {
          labels,
          datasets: [{
            data: dataPoints,
            borderColor: '#A3E635',
            backgroundColor: gradient,
            borderWidth: 2,
            pointRadius: 0,
            pointHoverRadius: 3,
            cubicInterpolationMode 'monotone',
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
                label: ctx => ` ${ctx.parsed.y}°C`
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
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      <div className="fixed top-0 w-full -z-10 h-screen blur-3xl bg-cover bg-center" style={{backgroundImage: 'url("https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/c31dd008-598b-4fc9-b5c7-9c3e1d296d38_3840w.jpg")'}}></div>

<main className="mx-auto max-w-7xl px-6 py-8 md:py-12">
<section className="grid grid-cols-1 xl:grid-cols-3 place-items-center gap-x-12 gap-y-8">

<div className="relative">
<div className="bg-black rounded-[40px] shadow-2xl overflow-hidden relative w-[393px] h-[852px]">

<div className="absolute top-3 left-1/2 -translate-x-1/2 w-[126px] h-[37px] bg-black rounded-[24px]"></div>

<div className="absolute top-2 left-6 text-neutral-100 text-sm font-medium font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>9:41</div>
<div className="absolute top-2 right-6 flex items-center gap-1">
<svg className="lucide lucide-signal w-4 h-4 text-neutral-100" data-lucide="signal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 20h.01"></path><path d="M7 20v-4"></path><path d="M12 20v-8"></path><path d="M17 20V8"></path><path d="M22 4v16"></path></svg>
<svg className="lucide lucide-wifi w-4 h-4 text-neutral-100" data-lucide="wifi" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h.01"></path><path d="M2 8.82a15 15 0 0 1 20 0"></path><path d="M5 12.859a10 10 0 0 1 14 0"></path><path d="M8.5 16.429a5 5 0 0 1 7 0"></path></svg>
<svg className="lucide lucide-battery w-4 h-4 text-neutral-100" data-lucide="battery" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M 22 14 L 22 10"></path><rect height="12" rx="2" width="16" x="2" y="6"></rect></svg>
</div>

<div className="h-full overflow-y-auto pt-14 pb-32">
<div className="px-6">

<div className="flex mb-6 items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-2xl overflow-hidden">
<img alt="Profile" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/f190adc1-8fe3-4941-8f7e-c45ca3d17dd2_320w.jpg"/>
</div>
<div className="">
<p className="text-lg tracking-tight font-light font-geist text-neutral-200" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>Good morning,</p>
<p className="text-lg text-neutral-500 tracking-tight font-light font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>Elena</p>
</div>
</div>
<div className="flex items-center gap-3">
<button className="w-10 h-10 bg-white/5 border border-white/5 rounded-2xl flex items-center justify-center backdrop-blur">
<svg className="lucide lucide-bell w-5 h-5 text-neutral-200" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
</button>
</div>
</div>

<div className="border border-white/5 bg-white/5 backdrop-blur-xl rounded-3xl mb-6 p-6">
<div className="flex items-center justify-between mb-4">
<div>
<p className="text-neutral-500 text-xs font-medium font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>Upcoming Trip</p>
<p className="text-2xl mt-1 font-geist tracking-tight text-neutral-100" style={{fontFamily: 'Manrope, -apple-system, system-ui, sans-serif'}}>Lisbon, Portugal</p>
<p className="text-neutral-500 mt-1 text-xs font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>Apr 12 — Apr 18 • 6 nights</p>
</div>
<div className="flex items-center gap-2 bg-white/10 border border-white/10 px-3 py-2 rounded-2xl">
<span className="w-1.5 h-1.5 rounded-full bg-neutral-200"></span>
<span className="text-neutral-200 text-xs font-medium font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>In 12 days</span>
</div>
</div>
<div className="flex gap-3">
<button className="flex-1 bg-white/20 border border-white/10 text-neutral-800 rounded-2xl py-3 flex items-center justify-center gap-2 font-medium transition-colors hover:bg-white/25 backdrop-blur" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>
<svg className="lucide lucide-route w-[16px] h-[16px] text-neutral-100" data-icon-replaced="true" data-lucide="route" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '16px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="6" cy="19" r="3"></circle><path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"></path><circle cx="18" cy="5" r="3"></circle></svg>
<span className="text-sm text-neutral-200 font-geist" style={{}}>Plan</span>
</button>
<button className="flex-1 border border-white/10 bg-white/5 rounded-2xl py-3 flex items-center justify-center gap-2 text-neutral-200 font-medium transition-colors hover:bg-white/10" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>
<svg className="lucide lucide-ticket w-4 h-4" data-lucide="ticket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path><path d="M13 5v2"></path><path d="M13 17v2"></path><path d="M13 11v2"></path></svg>
<span className="font-geist text-sm" style={{}}>Tickets</span>
</button>
</div>
</div>

<div className="flex items-center justify-between mb-4">
<h3 className="text-base font-semibold tracking-tight font-geist text-neutral-200" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>Popular Destinations</h3>
<button className="text-neutral-500 text-xs font-medium font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>View all</button>
</div>
<div className="space-y-3 mb-8">

<div className="border border-white/5 bg-white/5 backdrop-blur-sm flex gap-4 rounded-3xl p-4 items-center">
<div className="w-12 h-12 rounded-2xl overflow-hidden">
<img alt="Kyoto" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/cf9b06b7-79d6-4c99-b58e-7bed052feba9_320w.jpg"/>
</div>
<div className="flex-1">
<p className="font-medium font-geist text-sm text-neutral-200" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>Kyoto, Japan</p>
<p className="text-neutral-500 text-xs font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>11h flight • Cherry blossoms</p>
</div>
<div className="text-right">
<div className="flex items-center justify-end gap-1">
<svg className="lucide lucide-flame w-4 h-4 text-neutral-400" data-lucide="flame" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path></svg>
<span className="text-neutral-400 text-xs font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>Trending</span>
</div>
<p className="text-neutral-600 text-xs mt-1 font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>Avg stay $120/night</p>
</div>
</div>

<div className="border border-white/5 bg-white/5 backdrop-blur-sm flex gap-4 rounded-3xl p-4 items-center">
<div className="w-12 h-12 rounded-2xl overflow-hidden">
<img alt="Reykjavik" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/2c1561ae-13ed-4778-82a5-59cf543f566e_320w.jpg"/>
</div>
<div className="flex-1">
<p className="font-medium font-geist text-sm text-neutral-200" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>Reykjavík, Iceland</p>
<p className="text-neutral-500 text-xs font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>6h flight • Aurora season</p>
</div>
<div className="text-right">
<div className="flex items-center justify-end gap-1">
<svg className="lucide lucide-snowflake w-4 h-4 text-neutral-400" data-lucide="snowflake" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m10 20-1.25-2.5L6 18"></path><path d="M10 4 8.75 6.5 6 6"></path><path d="m14 20 1.25-2.5L18 18"></path><path d="m14 4 1.25 2.5L18 6"></path><path d="m17 21-3-6h-4"></path><path d="m17 3-3 6 1.5 3"></path><path d="M2 12h6.5L10 9"></path><path d="m20 10-1.5 2 1.5 2"></path><path d="M22 12h-6.5L14 15"></path><path d="m4 10 1.5 2L4 14"></path><path d="m7 21 3-6-1.5-3"></path><path d="m7 3 3 6h4"></path></svg>
<span className="text-neutral-400 text-xs font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>Cool</span>
</div>
<p className="text-neutral-600 text-xs mt-1 font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>Avg stay $140/night</p>
</div>
</div>

<div className="border border-white/5 bg-white/5 backdrop-blur-sm flex gap-4 rounded-3xl p-4 items-center">
<div className="w-12 h-12 rounded-2xl overflow-hidden">
<img alt="Cape Town" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/3932718f-66fe-4be1-b38d-3756e4518e10_800w.jpg"/>
</div>
<div className="flex-1">
<p className="font-medium font-geist text-sm text-neutral-200" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>Cape Town, South Africa</p>
<p className="text-neutral-500 text-xs font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>12h flight • Coastal hikes</p>
</div>
<div className="text-right">
<div className="flex items-center justify-end gap-1">
<svg className="lucide lucide-mountain w-4 h-4 text-neutral-400" data-lucide="mountain" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m8 3 4 8 5-5 5 15H2L8 3z"></path></svg>
<span className="text-neutral-400 text-xs font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>Outdoors</span>
</div>
<p className="text-neutral-600 text-xs mt-1 font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>Avg stay $110/night</p>
</div>
</div>
</div>

<div className="flex items-center justify-between mb-4 mt-8">
<h3 className="text-base font-semibold tracking-tight font-geist text-neutral-200" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>Recent Trips</h3>
<button className="text-neutral-500 text-xs font-medium font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>View all</button>
</div>
<div className="space-y-3 mb-8">
<div className="border border-white/5 bg-white/5 backdrop-blur-sm rounded-3xl p-4 flex items-center gap-4">
<div className="w-10 h-10 bg-white/10 rounded-2xl flex items-center justify-center">
<svg className="lucide lucide-plane w-5 h-5 text-neutral-200" data-lucide="plane" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"></path></svg>
</div>
<div className="flex-1">
<p className="font-medium font-geist text-sm text-neutral-200" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>Barcelona weekend</p>
<p className="text-neutral-500 text-xs font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>Today, 2:15 PM • 3 days</p>
</div>
<div className="text-right">
<p className="font-medium text-neutral-200 font-geist text-sm" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>Completed</p>
<p className="text-neutral-500 text-xs font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>Mar 3—6</p>
</div>
</div>
<div className="border border-white/5 bg-white/5 backdrop-blur-sm rounded-3xl p-4 flex items-center gap-4">
<div className="w-10 h-10 bg-white/10 rounded-2xl flex items-center justify-center">
<svg className="lucide lucide-train w-5 h-5 text-neutral-200" data-lucide="train" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="2" width="16" x="4" y="3"></rect><path d="M4 11h16"></path><path d="M12 3v8"></path><path d="m8 19-2 3"></path><path d="m18 22-2-3"></path><path d="M8 15h.01"></path><path d="M16 15h.01"></path></svg>
</div>
<div className="flex-1">
<p className="font-medium font-geist text-sm text-neutral-200" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>Swiss Alps rail</p>
<p className="text-neutral-500 text-xs font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>Yesterday, 6:30 PM • 1 day</p>
</div>
<div className="text-right">
<p className="font-medium font-geist text-sm text-neutral-200" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>Booked</p>
<p className="text-neutral-500 text-xs font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>May 10</p>
</div>
</div>
<div className="border border-white/5 bg-white/5 backdrop-blur-sm rounded-3xl p-4 flex items-center gap-4">
<div className="w-10 h-10 bg-white/10 rounded-2xl flex items-center justify-center">
<svg className="lucide lucide-sun w-5 h-5 text-neutral-200" data-lucide="sun" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>
</div>
<div className="flex-1">
<p className="font-medium font-geist text-sm text-neutral-200" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>Santorini escape</p>
<p className="text-neutral-500 text-xs font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>Mar 1, 11:45 AM • 5 days</p>
</div>
<div className="text-right">
<p className="font-medium font-geist text-sm text-neutral-200" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>Planning</p>
<p className="text-neutral-500 text-xs font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>Apr 28</p>
</div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-8 left-4 right-4 bg-white/10 backdrop-blur border border-white/10 rounded-3xl p-3">
<div className="flex items-center justify-around py-2">
<div className="flex flex-col items-center gap-1">
<div className="w-8 h-8 bg-white/20 border border-white/10 rounded-2xl flex items-center justify-center backdrop-blur">
<svg className="lucide lucide-compass w-4 h-4 text-neutral-800" data-lucide="compass" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
<span className="text-xs text-neutral-200 font-medium font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>Explore</span>
</div>
<div className="flex flex-col items-center gap-1">
<svg className="lucide lucide-briefcase w-6 h-6 text-neutral-600" data-lucide="briefcase" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></svg>
<span className="text-xs text-neutral-600 font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>Trips</span>
</div>
<div className="flex flex-col items-center gap-1">
<svg className="lucide lucide-map w-6 h-6 text-neutral-600" data-lucide="map" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"></path><path d="M15 5.764v15"></path><path d="M9 3.236v15"></path></svg>
<span className="text-xs text-neutral-600 font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>Map</span>
</div>
<div className="flex flex-col items-center gap-1">
<svg className="lucide lucide-user w-6 h-6 text-neutral-600" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
<span className="text-xs text-neutral-600 font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>Profile</span>
</div>
</div>
</div>

<div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-gray-600 rounded-full"></div>
</div>
</div>

<div className="relative">
<div className="overflow-hidden bg-black rounded-[40px] relative shadow-2xl w-[393px] h-[852px]">

<div className="absolute top-3 left-1/2 -translate-x-1/2 w-[126px] h-[37px] bg-black rounded-[24px]"></div>

<div className="absolute top-2 left-6 text-neutral-100 text-sm font-medium font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>9:41</div>
<div className="absolute top-2 right-6 flex items-center gap-1">
<svg className="lucide lucide-signal w-4 h-4 text-neutral-100" data-lucide="signal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 20h.01"></path><path d="M7 20v-4"></path><path d="M12 20v-8"></path><path d="M17 20V8"></path><path d="M22 4v16"></path></svg>
<svg className="lucide lucide-wifi w-4 h-4 text-neutral-100" data-lucide="wifi" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h.01"></path><path d="M2 8.82a15 15 0 0 1 20 0"></path><path d="M5 12.859a10 10 0 0 1 14 0"></path><path d="M8.5 16.429a5 5 0 0 1 7 0"></path></svg>
<svg className="lucide lucide-battery w-4 h-4 text-neutral-100" data-lucide="battery" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M 22 14 L 22 10"></path><rect height="12" rx="2" width="16" x="2" y="6"></rect></svg>
</div>

<div className="absolute inset-0">
<img alt="Travel background" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/eecbea61-eb25-4c62-963f-5bb121e078c7_3840w.jpg"/>
<div className="absolute inset-0 bg-black/60"></div>
</div>

<div className="z-10 flex flex-col h-full pt-14 pr-6 pl-6 relative">

<div className="flex gap-2 mt-8 items-center justify-center">
<span className="text-2xl font-geist tracking-tight text-neutral-100" style={{fontFamily: 'Manrope, -apple-system, system-ui, sans-serif'}}>Wander</span>
</div>
<div className="flex-1 flex flex-col px-4 items-end justify-center">
<div className="text-center mb-12">
<h1 className="leading-tight text-4xl tracking-tight font-geist mb-4 text-neutral-100" style={{fontFamily: 'Manrope, -apple-system, system-ui, sans-serif'}}>
                  Plan less,
                  <span className="text-neutral-200 tracking-tight font-geist" style={{fontFamily: 'Manrope, -apple-system, system-ui, sans-serif'}}>travel more.</span>
</h1>
<p className="text-neutral-400 text-base leading-relaxed font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>
                  Discover, plan, and book trips in one place—effortlessly.
                </p>
</div>
</div>

<div className="space-y-4 mb-8">
<button className="text-base font-medium text-neutral-200 font-geist bg-white/20 w-full border-white/10 border rounded-3xl py-4 shadow-lg backdrop-blur" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>
                Create account
              </button>
<button className="w-full border border-white/10 bg-white/5 rounded-3xl py-4 text-neutral-200 text-base font-medium hover:bg-white/10 backdrop-blur font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>
                Log in
              </button>
</div>

<p className="text-xs text-neutral-600 text-left mb-6 font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>
              By continuing, you agree to our
              <span className="text-neutral-300 font-geist" style={{}}>Terms</span> and
              <span className="text-neutral-300 font-geist" style={{}}>Privacy Policy</span>.
            </p>

<div className="w-32 h-1 bg-gray-600 rounded-full mx-auto mb-2"></div>
</div>
</div>
</div>

<div className="relative">
<div className="overflow-hidden bg-black rounded-[40px] relative shadow-2xl w-[393px] h-[852px]">

<div className="absolute top-3 left-1/2 -translate-x-1/2 w-[126px] h-[37px] bg-black rounded-[24px]"></div>

<div className="absolute top-2 left-6 text-neutral-100 text-sm font-medium font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>9:41</div>
<div className="absolute top-2 right-6 flex items-center gap-1">
<svg className="lucide lucide-signal w-4 h-4 text-neutral-100" data-lucide="signal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 20h.01"></path><path d="M7 20v-4"></path><path d="M12 20v-8"></path><path d="M17 20V8"></path><path d="M22 4v16"></path></svg>
<svg className="lucide lucide-wifi w-4 h-4 text-neutral-100" data-lucide="wifi" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h.01"></path><path d="M2 8.82a15 15 0 0 1 20 0"></path><path d="M5 12.859a10 10 0 0 1 14 0"></path><path d="M8.5 16.429a5 5 0 0 1 7 0"></path></svg>
<svg className="lucide lucide-battery w-4 h-4 text-neutral-100" data-lucide="battery" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M 22 14 L 22 10"></path><rect height="12" rx="2" width="16" x="2" y="6"></rect></svg>
</div>

<div className="overflow-y-auto h-full pt-14 pb-32">
<div className="pr-6 pl-6">

<div className="flex items-center justify-between mb-6">
<button className="w-8 h-8 border border-white/10 bg-white/5 rounded-2xl flex items-center justify-center backdrop-blur">
<svg className="lucide lucide-chevron-left w-5 h-5 text-neutral-200" data-lucide="chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
</button>
<h1 className="text-base font-semibold tracking-tight font-geist text-neutral-200" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>Kyoto</h1>
<button className="w-8 h-8 border border-white/10 bg-white/5 rounded-2xl flex items-center justify-center backdrop-blur">
<svg className="lucide lucide-more-horizontal w-5 h-5 text-neutral-200" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</button>
</div>

<div className="border border-white/5 bg-white/5 rounded-3xl mb-6 p-6 backdrop-blur-xl">
<div className="flex items-center gap-3 mb-4">
<div className="w-12 h-12 rounded-3xl overflow-hidden">
<img alt="Kyoto" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&amp;w=240&amp;auto=format&amp;fit=crop"/>
</div>
<div className="">
<p className="text-lg font-semibold font-geist text-neutral-200" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>Spring in Kyoto</p>
<div className="flex items-center gap-3 text-xs">
<div className="flex items-center gap-1 text-neutral-200">
<svg className="lucide lucide-sun w-4 h-4" data-lucide="sun" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>
<span className="font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>24°C</span>
</div>
<div className="text-neutral-500 font-geist" style={{}}>•</div>
<div className="flex items-center gap-1 text-neutral-400">
<svg className="lucide lucide-clock w-4 h-4" data-lucide="clock" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span className="font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>Local 9:41 AM</span>
</div>
</div>
</div>
</div>

<div className="h-32 rounded-2xl mb-4 overflow-hidden border border-white/5 bg-white/5">
<div className="h-full">
<canvas className="w-full h-full bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/61a29541-3fa3-4861-80fd-4d7bec82602d_800w.jpg)] bg-cover" height="252" id="kyotoTempChart" style={{display: 'block', boxSizing: 'border-box', height: '126px', width: '310px'}} width="620"></canvas>
</div>
</div>

<div className="flex items-center justify-between">
<div className="flex bg-white/10 rounded-2xl p-1">
<button className="px-3 py-1 text-xs bg-white/20 border border-white/10 text-neutral-800 rounded-xl font-geist backdrop-blur" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>7D</button>
<button className="px-3 py-1 text-xs text-neutral-500 font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>14D</button>
<button className="px-3 py-1 text-xs text-neutral-500 font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>30D</button>
</div>
<button className="text-neutral-500 font-medium text-xs font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>Weather</button>
</div>
</div>

<div className="grid grid-cols-2 gap-4 mb-6">
<button className="flex flex-col gap-2 text-neutral-200 bg-white/20 border-white/10 border rounded-3xl py-6 backdrop-blur gap-x-2 gap-y-2 items-center">
<svg className="lucide lucide-bed-double w-[24px] h-[24px] text-neutral-200" data-icon-replaced="true" data-lucide="bed-double" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '24px', height: '24px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8"></path><path d="M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4"></path><path d="M12 4v6"></path><path d="M2 18h20"></path></svg>
<span className="text-sm font-medium text-neutral-200 font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>Book stay</span>
</button>
<button className="bg-white/10 rounded-3xl py-6 flex flex-col items-center gap-2 border border-white/10 backdrop-blur">
<svg className="lucide lucide-navigation w-6 h-6 text-neutral-200" data-lucide="navigation" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="3 11 22 2 13 21 11 13 3 11"></polygon></svg>
<span className="text-neutral-200 font-medium font-geist text-sm" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>Directions</span>
</button>
</div>

<div className="mb-8">
<div className="flex items-center justify-between mb-4">
<h3 className="text-base font-semibold tracking-tight font-geist text-neutral-200" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>Highlights</h3>
<button className="text-neutral-500 font-medium text-xs font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>View all</button>
</div>
<div className="space-y-3">
<div className="border border-white/5 bg-white/5 backdrop-blur-sm rounded-3xl p-4 flex items-center gap-4">
<div className="w-10 h-10 rounded-2xl overflow-hidden">
<img alt="Fushimi Inari" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/98f3eb14-6a35-4562-b216-fa1b25a3aab2_800w.jpg"/>
</div>
<div className="flex-1">
<p className="text-sm font-medium text-neutral-200 font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>Fushimi Inari Shrine</p>
<p className="text-xs text-neutral-500 font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>Torii gates • 20 min</p>
</div>
<div className="text-right">
<p className="text-neutral-200 text-xs font-medium font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>Open</p>
<p className="text-neutral-600 text-xs font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>6:00—18:00</p>
</div>
</div>
<div className="border border-white/5 bg-white/5 backdrop-blur-sm rounded-3xl p-4 flex items-center gap-4">
<div className="w-10 h-10 rounded-2xl overflow-hidden">
<img alt="Arashiyama" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/97e43621-e267-49da-86f8-937c14a8ec44_320w.jpg"/>
</div>
<div className="flex-1">
<p className="font-medium font-geist text-sm text-neutral-200" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>Arashiyama Bamboo</p>
<p className="text-neutral-500 text-xs font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>Scenic walk • 30 min</p>
</div>
<div className="text-right">
<p className="font-medium font-geist text-xs text-neutral-200" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>Peak 9 AM</p>
<p className="text-neutral-600 text-xs font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>Crowds expected</p>
</div>
</div>
<div className="border border-white/5 bg-white/5 backdrop-blur-sm rounded-3xl p-4 flex items-center gap-4">
<div className="w-10 h-10 rounded-2xl overflow-hidden">
<img alt="Nishiki Market" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3ec1d336-4a01-4493-b8df-9748351c680b_320w.jpg" style={{}}/>
</div>
<div className="flex-1">
<p className="font-medium font-geist text-sm text-neutral-200" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>Nishiki Market</p>
<p className="text-neutral-500 text-xs font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>Street food • 10 min</p>
</div>
<div className="text-right">
<p className="text-neutral-300 text-xs font-medium font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>Must-try</p>
<p className="text-neutral-600 text-xs font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>Local favorites</p>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-8 left-4 right-4 bg-white/10 backdrop-blur border border-white/10 rounded-3xl p-3">
<div className="flex items-center justify-around py-2">
<div className="flex flex-col items-center gap-1">
<svg className="lucide lucide-compass w-6 h-6 text-neutral-600" data-lucide="compass" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span className="text-xs text-neutral-600 font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>Explore</span>
</div>
<div className="flex flex-col items-center gap-1">
<svg className="lucide lucide-briefcase w-6 h-6 text-neutral-600" data-lucide="briefcase" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></svg>
<span className="text-xs text-neutral-600 font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>Trips</span>
</div>
<div className="flex flex-col items-center gap-1">
<div className="w-8 h-8 bg-white/20 border border-white/10 rounded-2xl flex items-center justify-center backdrop-blur">
<svg className="lucide lucide-map w-4 h-4 text-neutral-800" data-lucide="map" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"></path><path d="M15 5.764v15"></path><path d="M9 3.236v15"></path></svg>
</div>
<span className="text-xs text-neutral-200 font-medium font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>Map</span>
</div>
<div className="flex flex-col items-center gap-1">
<svg className="lucide lucide-user w-6 h-6 text-neutral-600" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
<span className="text-xs text-neutral-600 font-geist" style={{fontFamily: 'Inter, -apple-system, system-ui, sans-serif'}}>Profile</span>
</div>
</div>
</div>

<div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-gray-600 rounded-full"></div>
</div>
</div>
</section>
</main>


    </>
  );
}
