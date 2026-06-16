import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
        try {
          const ctx = document.getElementById('volumeChart');
          if (ctx) {
            new Chart(ctx, {
              type: 'line',
              data: {
                labels: ['W1','W2','W3','W4','W5','W6','W7','W8','W9','W10','W11','W12'],
                datasets: [{
                  data: [5, 6, 6.5, 7, 7.2, 7.6, 8, 8.2, 8.5, 8.4, 8.8, 9.2],
                  backgroundColor: 'rgba(14, 165, 233, 0.12)',
                  borderColor: 'rgba(14, 165, 233, 0.8)',
                  borderWidth: 2,
                  fill: true,
                  tension: 0.4,
                  pointRadius: 0,
                  pointHoverRadius: 5
                }]
              },
              options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                  x: { display: false, grid: { display: false } },
                  y: { display: false, grid: { display: false }, suggestedMin: 4, suggestedMax: 10 }
                },
                plugins: {
                  legend: { display: false },
                  tooltip: { enabled: false }
                }
              }
            });
          }
        } catch (e) { console.log('Chart init error', e); }
      


        document.addEventListener('DOMContentLoaded', function () {
          try { lucide.createIcons(); } catch (e) { console.log('Lucide icons failed to initialize'); }
        });
      
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="absolute top-0 w-full -z-10 h-[900px] blur-3xl bg-cover bg-center opacity-80" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&amp'}}></div>

<header className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 mt-8">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="sm:text-2xl text-xl text-black tracking-tight font-playfair font-medium" style={{fontFamily: '"Playfair Display", serif'}}>TROPIX SWIM CLUB</span>
</div>
<nav className="hidden md:flex items-center gap-6 text-sm text-neutral-700">
<a className="hover:text-black transition-colors font-medium font-geist" href="#programs" style={{}}>Programs</a>
<a className="hover:text-black transition-colors font-medium font-geist" href="#schedule" style={{}}>Schedule</a>
<a className="hover:text-black transition-colors font-medium font-geist" href="#meets" style={{}}>Documents</a>
</nav>
<div className="flex items-center gap-3">
<a className="hidden md:inline-flex items-center justify-center h-10 ring-1 ring-black/10 hover:bg-neutral-800 transition text-sm font-medium text-white font-geist bg-neutral-900 rounded-full pr-5 pl-5" href="#join" style={{}}>
            Join now
          </a>
<button aria-label="Open menu" className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg ring-1 ring-black/15 bg-black text-white hover:bg-neutral-800 transition">
<svg className="lucide lucide-menu w-5 h-5" data-lucide="menu" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>
</div>
</div>
</header>

<section className="w-full max-w-7xl sm:px-6 md:px-10 mt-12 mr-auto ml-auto pr-4 pl-4">
<h1 className="max-w-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-4xl font-medium text-black tracking-tight font-playfair" style={{fontFamily: '"Playfair Display", serif'}}>Swim better. Swim together.</h1>
<p className="max-w-2xl sm:text-xl text-base text-black font-geist mt-4" style={{}}>
        Tropix Swim Club brings athletes of all ages into a supportive, high‑performance pathway—from first strokes to national podiums. Expert coaches, clear progress, and a team that feels like family.
      </p>

<div className="flex flex-wrap gap-2.5 mt-8">
</div>

<div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-8">
<a className="inline-flex items-center justify-center hover:bg-neutral-800 transition ring-1 ring-neutral-900/10 text-base font-medium text-white font-geist bg-neutral-900 rounded-full pt-3 pr-6 pb-3 pl-6" href="#join" style={{}}>Book Your Splash Today<svg className="lucide lucide-arrow-right ml-2 w-[18px] h-[18px]" data-lucide="arrow-right" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></a>
<a className="inline-flex items-center justify-center hover:bg-neutral-100 transition ring-1 ring-neutral-200 text-base font-medium text-neutral-900 font-geist bg-white rounded-full pt-3 pr-6 pb-3 pl-6" href="#schedule" style={{}}>View Schedule<svg className="lucide lucide-clock ml-2 w-[18px] h-[18px]" data-lucide="clock" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg></a>
</div>
</section>

<section className="sm:p-8 max-w-7xl bg-neutral-50 rounded-3xl mt-20 mb-24 mx-auto p-6 relative" id="programs">

<div className="absolute inset-0 opacity-10 pointer-events-none">
<div className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
<div className="absolute top-3/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
<div className="absolute top-0 bottom-0 left-1/3 w-px bg-gradient-to-b from-transparent via-neutral-300 to-transparent"></div>
<div className="absolute top-0 bottom-0 right-1/3 w-px bg-gradient-to-b from-transparent via-neutral-300 to-transparent"></div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 items-start relative z-10">

<div className="flex flex-col min-h-full justify-between">
<div className="">
<span className="text-sm font-normal text-neutral-500 font-geist" style={{}}>Programs &amp; highlights</span>
<h2 className="text-[40px] sm:text-6xl lg:text-7xl leading-[0.95] font-medium text-neutral-900 tracking-tight font-playfair mt-2" style={{fontFamily: '"Playfair Display", serif'}}>
              Pathways for every swimmer.
            </h2><h2 className="text-[40px] sm:text-6xl lg:text-7xl leading-[0.95] font-medium text-neutral-900 tracking-tight font-playfair mt-2" style={{fontFamily: '"Playfair Display", serif'}}>Results that matter.</h2>

<div className="mt-8 relative">
<div className="absolute inset-0 flex items-center">
<div className="w-full h-px bg-gradient-to-r from-neutral-200 via-neutral-300 to-neutral-200"></div>
</div>
<div className="hidden sm:grid grid-cols-3 gap-6 relative text-neutral-700 bg-neutral-50 pr-4 pl-4">
<div className="flex items-center gap-2">
</div>
</div>
</div>
</div>
<div className="w-full mt-15">
<p className="max-w-sm text-3xl text-neutral-600 tracking-normal font-geist mt-1" style={{}}>Our results are measured in more than seconds shaved off a lap time; they're measured in the confidence you'll carry for a lifetime.</p>
</div>
</div>

<div className="grid grid-cols-2 gap-4 relative">
<div className="flex flex-col gap-4">

<div className="relative overflow-hidden lg:rounded-3xl hover:border-neutral-400/50 transition-all min-h-[280px] flex flex-col bg-neutral-800/60 rounded-2xl shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] backdrop-blur-lg w-64 h-[360px]">
<style>
    @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@400;600&display=swap');
  </style>
<div className="relative z-10 lg:p-8 flex flex-col h-full bg-[url(https://images.unsplash.com/photo-1606874711241-2e1d6496ac42?w=800&amp;q=80)] bg-cover pt-6 pr-6 pb-6 pl-6 justify-between">
<div className="flex mb-6 items-start justify-between">
</div>
<div className="text-center">
</div>
</div>
</div>

<article className="relative overflow-hidden aspect-[4/3] bg-cover bg-center border border-neutral-200 rounded-2xl" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1519315901367-f34ff9154487?q=80&amp'}}>
<div className="absolute top-3 left-3">
</div>
<div className="absolute top-3 right-3">
</div>
<div className="absolute bottom-3 left-3 right-3">
</div>
</article>
</div>
<div className="flex flex-col gap-4">

<article className="relative overflow-hidden sm:rounded-3xl col-span-2 md:col-span-3 lg:col-span-4 min-h-[220px] sm:min-h-[280px] md:min-h-[500px] flex flex-col w-full max-w-lg bg-zinc-950 bg-[url(https://images.unsplash.com/photo-1528912599607-dc5f96f6c1d8?w=800&amp;q=80)] bg-cover border-zinc-900 border rounded-2xl pt-5 pr-5 pb-5 pl-5 scale-100">
<div className="flex items-center justify-between text-zinc-300">
</div>
</article>

</div>
</div>
</div>
</section>

<section className="relative z-10 max-w-7xl mx-auto sm:px-6 lg:px-8 px-4 pt-8 pb-20">



</section>

<section className="relative z-10 max-w-7xl mx-auto sm:px-6 lg:px-8 px-4 pt-8 pb-20" id="squads">
<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
<div className="">
<p className="text-sm font-medium text-black/50 font-geist" style={{}}>What sets us apart</p>
<h2 className="sm:text-4xl md:text-5xl text-3xl text-black tracking-tight font-playfair font-medium" style={{fontFamily: '"Playfair Display", serif'}}>A clear pathway, world‑class culture</h2>
<p className="sm:text-lg text-base text-neutral-600 mt-4 max-w-[85ch] font-geist" style={{}}>
            From juniors to masters, every swimmer knows their next step. We combine technique, training, and community to unlock potential.
          </p>
</div>
</div>
<div className="grid gap-6 md:grid-cols-3">

<div className="group relative overflow-hidden md:col-span-2 md:row-span-2 bg-white border border-neutral-200 rounded-2xl">
<div className="relative overflow-hidden">
<img alt="Pool lanes" className="aspect-video w-full object-cover" src="https://images.unsplash.com/photo-1530549387789-4c1017266635?w=2560&amp;q=80"/>
</div>
<div className="p-6">
<div className="flex items-center gap-2">
</div>
<h3 className="text-2xl sm:text-5xl text-neutral-900 mt-3 tracking-tight font-playfair font-medium" style={{}}>From first strokes to finals night</h3>
<p className="text-sm sm:text-base text-neutral-600 mt-2 font-geist" style={{}}>
              Squads are structured to match ability and ambition, with regular assessments, movement opportunities, and clear goals.
            </p>
<div className="mt-5 flex flex-wrap items-center gap-3">
</div>
</div>
</div>

<div className="group bg-white border border-neutral-200 rounded-2xl p-6">
<div className="bg-neutral-50 border border-neutral-200 rounded-xl p-6">
<div className="flex items-center justify-between">
<h3 className="text-xl font-semibold tracking-tight text-neutral-900 font-geist" style={{}}>Expert coaches</h3>
<span className="inline-flex items-center text-xs font-medium text-neutral-700 bg-neutral-100 border border-neutral-200 rounded-full px-3 py-1 font-geist" style={{}}>ACCREDITED</span>
</div>
<p className="mt-2 text-sm text-neutral-600 font-geist" style={{}}>Certified staff with proven success across all levels.</p>
<div className="mt-4 rounded-lg overflow-hidden border border-neutral-200">
<img alt="Coach with swimmers" className="aspect-video w-full object-cover" src="https://images.unsplash.com/photo-1536542469342-c301a284a36c?w=800&amp;q=80"/>
</div>
</div>
</div>

<div className="group bg-white border border-neutral-200 rounded-2xl p-6">
<div className="bg-neutral-50 border border-neutral-200 rounded-xl p-6">
<div className="flex items-center justify-between">
<h3 className="text-xl font-semibold tracking-tight text-neutral-900 font-geist" style={{}}>Great facilities</h3>
<span className="inline-flex items-center text-xs font-medium text-neutral-700 bg-neutral-100 border border-neutral-200 rounded-full px-3 py-1 font-geist" style={{}}>LANE SPACE</span>
</div>
<p className="text-sm text-neutral-600 font-geist mt-2" style={{}}>Indoor lanes year‑round</p>
<div className="mt-4 rounded-lg overflow-hidden border border-neutral-200">
<img alt="Indoor pool" className="aspect-video w-full object-cover" src="https://images.unsplash.com/photo-1606874711241-2e1d6496ac42?w=800&amp;q=80"/>
</div>
</div>
</div>

<div className="group bg-white border border-neutral-200 rounded-2xl p-6">
<div className="bg-neutral-50 border border-neutral-200 rounded-xl p-6">
<h3 className="text-lg font-semibold tracking-tight text-neutral-900 flex items-center gap-2 font-geist" style={{}}>
              Community &amp; volunteering
              <span className="ml-2 inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-2 py-1 text-xs font-medium text-emerald-700 font-geist" style={{}}>TOGETHER</span>
</h3>
<p className="text-sm text-neutral-600 font-geist mt-2" style={{}}>Family‑run socials and a supportive parent network.</p>
<div className="mt-4 rounded-lg overflow-hidden border border-neutral-200">
<img alt="Team huddle" className="aspect-video w-full object-cover" src="https://images.unsplash.com/photo-1613002864777-3964f53925d1?w=800&amp;q=80"/>
</div>
</div>
</div>

<div className="group bg-white border border-neutral-200 rounded-2xl p-6">
<div className="bg-neutral-50 border border-neutral-200 rounded-xl p-6">
<h3 className="text-lg font-semibold tracking-tight text-neutral-900 flex items-center gap-2 font-geist" style={{}}>
              Safe Sport &amp; welfare
            </h3>
<p className="mt-2 text-sm text-neutral-600 font-geist" style={{}}>Clear reporting lines, trained welfare officers, and respect.</p>
<div className="mt-4 rounded-lg overflow-hidden border border-neutral-200">
<img alt="Lifeguard tower" className="aspect-video w-full object-cover" src="https://images.unsplash.com/photo-1519315901367-f34ff9154487?w=800&amp;q=80"/>
</div>
</div>
</div>

<div className="group bg-white border border-neutral-200 rounded-2xl p-6" id="meets">
<div className="bg-neutral-50 border border-neutral-200 rounded-xl p-6">
<h3 className="flex items-center gap-2 text-lg font-semibold text-neutral-900 tracking-tight font-geist" style={{}}>Collaborative Approach</h3>
<p className="mt-2 text-sm text-neutral-600 font-geist" style={{}}>Club time trials, league races, and destination camps.</p>
<div className="mt-4 rounded-lg overflow-hidden border border-neutral-200">
<img alt="Swim meet" className="aspect-video w-full object-cover" src="https://images.unsplash.com/photo-1651614158095-b98b6c1da74b?w=800&amp;q=80"/>
</div>
</div>
</div>
</div>
</section>

<section className="sm:px-6 lg:px-8 max-w-7xl border-t border-neutral-200 mt-12 mx-auto pt-16 px-4" id="pricing">
<div className="grid grid-cols-1 gap-8">
<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
<div className="">
<p className="text-sm font-medium text-neutral-600 font-geist" style={{}}>Membership</p>
<h3 className="text-3xl sm:text-4xl md:text-5xl text-neutral-900 mt-2 tracking-tight font-playfair font-medium" style={{fontFamily: '"Playfair Display", serif'}}>Plans for every lane</h3>
<p className="sm:text-base text-sm text-neutral-600 mt-4 max-w-[80ch] font-geist" style={{}}>
              Transparent fees, flexible movement between squads, and discounts for families.
            </p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">

<div className="relative rounded-2xl border border-neutral-200 bg-white p-8 hover:shadow-lg hover:border-neutral-300 transition">
<div className="flex items-center justify-between">
<h4 className="text-lg font-semibold tracking-tight text-neutral-900 font-geist" style={{fontFamily: '"Playfair Display", serif'}}>Junior Dolphins</h4>
<span className="inline-flex items-center gap-1 rounded-full border border-neutral-200 bg-neutral-100 px-3 py-1 text-xs text-neutral-700 font-geist" style={{}}>
<svg className="lucide lucide-rocket w-3.5 h-3.5" data-lucide="rocket" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
                Start here
              </span>
</div>
<div className="mt-6">
<div className="flex items-baseline gap-2">
<span className="text-4xl sm:text-5xl text-neutral-900 tracking-tight font-playfair font-medium" style={{}}>$45</span>
<span className="text-neutral-600 text-sm font-geist" style={{}}>per month</span>
</div>
<p className="text-sm text-neutral-600 mt-2 font-geist" style={{}}>2 sessions/week • Skills &amp; fun</p>
</div>
<ul className="mt-6 space-y-3 text-sm text-neutral-700">
<li className="flex items-start gap-3 font-geist" style={{}}>
<svg className="lucide lucide-check w-4 h-4 text-emerald-600 mt-0.5" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                Small group ratios
              </li>
<li className="flex items-start gap-3 font-geist" style={{}}>
<svg className="lucide lucide-check w-4 h-4 text-emerald-600 mt-0.5" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                Certified instructors
              </li>
<li className="flex items-start gap-3 font-geist" style={{}}>
<svg className="lucide lucide-check w-4 h-4 text-emerald-600 mt-0.5" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                Progress reports
              </li>
</ul>
<a className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-neutral-100 hover:bg-neutral-200 border border-neutral-200 text-neutral-900 text-sm font-medium px-4 py-3 transition font-geist" href="#join" style={{}}>
              Join Junior
            </a>
</div>

<div className="relative rounded-2xl border-2 border-emerald-200 bg-gradient-to-b from-emerald-50 to-white p-8 shadow-lg shadow-emerald-100/50">
<div className="absolute -top-3 left-8 inline-flex items-center rounded-full bg-emerald-600 text-white text-xs font-medium px-3 py-1 ring-2 ring-white font-geist" style={{}}>
              Most popular
            </div>
<div className="flex items-center justify-between">
<h4 className="text-lg font-semibold tracking-tight text-neutral-900 font-geist" style={{fontFamily: '"Playfair Display", serif'}}>Competitive</h4>
<span className="inline-flex items-center gap-1 rounded-full border border-emerald-300 bg-emerald-100 px-3 py-1 text-xs text-emerald-800 font-geist" style={{}}>
<svg className="lucide lucide-gauge w-3.5 h-3.5" data-lucide="gauge" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m12 14 4-4"></path><path d="M3.34 19a10 10 0 1 1 17.32 0"></path></svg>
                More water time
              </span>
</div>
<div className="mt-6">
<div className="flex items-baseline gap-2">
<span className="text-4xl sm:text-5xl text-neutral-900 tracking-tight font-playfair font-medium" style={{}}>$85</span>
<span className="text-neutral-600 text-sm font-geist" style={{}}>per month</span>
</div>
<p className="text-sm text-neutral-600 mt-2 font-geist" style={{}}>3–6 sessions/week • Meet support</p>
</div>
<ul className="mt-6 space-y-3 text-sm text-neutral-700">
<li className="flex items-start gap-3 font-geist" style={{}}>
<svg className="lucide lucide-check w-4 h-4 text-emerald-600 mt-0.5" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                Periodized season plans
              </li>
<li className="flex items-start gap-3 font-geist" style={{}}>
<svg className="lucide lucide-check w-4 h-4 text-emerald-600 mt-0.5" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                Video analysis + feedback
              </li>
<li className="flex items-start gap-3 font-geist" style={{}}>
<svg className="lucide lucide-check w-4 h-4 text-emerald-600 mt-0.5" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                Championship pathways
              </li>
</ul>
<a className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 text-white hover:bg-emerald-700 text-sm font-medium px-4 py-3 transition ring-1 ring-emerald-600 font-geist" href="#join" style={{}}>
              Book Competitive
              <svg className="lucide lucide-calendar w-4 h-4" data-lucide="calendar" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
</a>
</div>

<div className="relative rounded-2xl border border-neutral-200 bg-white p-8 hover:shadow-lg hover:border-neutral-300 transition">
<div className="flex items-center justify-between">
<h4 className="text-lg font-semibold tracking-tight text-neutral-900 font-geist" style={{fontFamily: '"Playfair Display", serif'}}>Masters</h4>
<span className="inline-flex items-center gap-1 rounded-full border border-neutral-200 bg-neutral-100 px-3 py-1 text-xs text-neutral-700 font-geist" style={{}}>
<svg className="lucide lucide-handshake w-3.5 h-3.5" data-lucide="handshake" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m11 17 2 2a1 1 0 1 0 3-3"></path><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"></path><path d="m21 3 1 11h-2"></path><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"></path><path d="M3 4h8"></path></svg>
                Community
              </span>
</div>
<div className="mt-6">
<div className="flex items-baseline gap-2">
<span className="text-4xl sm:text-5xl text-neutral-900 tracking-tight font-playfair font-medium" style={{}}>$55</span>
<span className="text-neutral-600 text-sm font-geist" style={{}}>per month</span>
</div>
<p className="text-sm text-neutral-600 mt-2 font-geist" style={{}}>2–4 sessions/week • Fitness focus</p>
</div>
<ul className="mt-6 space-y-3 text-sm text-neutral-700">
<li className="flex items-start gap-3 font-geist" style={{}}>
<svg className="lucide lucide-check w-4 h-4 text-emerald-600 mt-0.5" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                Structured sets &amp; drills
              </li>
<li className="flex items-start gap-3 font-geist" style={{}}>
<svg className="lucide lucide-check w-4 h-4 text-emerald-600 mt-0.5" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                Beginner‑friendly lanes
              </li>
<li className="flex items-start gap-3 font-geist" style={{}}>
<svg className="lucide lucide-check w-4 h-4 text-emerald-600 mt-0.5" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                Social events
              </li>
</ul>
<a className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-neutral-100 hover:bg-neutral-200 border border-neutral-200 text-neutral-900 text-sm font-medium px-4 py-3 transition font-geist" href="#join" style={{}}>
              Join Masters
            </a>
</div>
</div>
<div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8 text-sm">
<div className="text-neutral-600">
<div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1.5 text-xs text-neutral-700 mb-3 font-geist" style={{}}>
<span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
              Included
            </div>
<p className="font-geist" style={{}}>All plans include meet entry support, coach communication, and movement assessments.</p>
</div>
<div className="text-neutral-600">
<div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1.5 text-xs text-neutral-700 mb-3 font-geist" style={{}}>
<span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
              Flexible
            </div>
<p className="font-geist" style={{}}>Pause during off‑season. Adjust squads as needs change.</p>
</div>
<div className="text-neutral-600">
<div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1.5 text-xs text-neutral-700 mb-3 font-geist" style={{}}>
<span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
              Family
            </div>
<p className="font-geist" style={{}}>Sibling discounts and volunteer credits available.</p>
</div>
</div>
</div>
</section>

<footer className="w-full max-w-7xl mt-24 mb-24 mx-auto pt-12 px-8" id="join">
<div className="relative bg-neutral-50">
<div className="grid grid-cols-1 lg:grid-cols-4 gap-8 border-b border-neutral-200 pb-12">
<div className="lg:col-span-2">
<div className="flex items-center gap-2 mb-4">
<h3 className="text-2xl sm:text-3xl text-neutral-900 tracking-tight font-playfair font-medium" style={{fontFamily: '"Playfair Display", serif'}}>Tropix Swim Club</h3>
</div>
<p className="sm:text-xl leading-relaxed max-w-2xl text-lg text-neutral-700 font-geist" style={{}}>A positive, performance‑minded home for swimmers. Book with us to find your lane.</p>
</div>

<div className="">
<h4 className="text-neutral-900 font-semibold mb-4 font-geist" style={{}}>Programs</h4>
<ul className="space-y-2 text-sm text-neutral-600">
<li className=""><a className="hover:text-emerald-600 transition font-geist" href="#programs" style={{}}>Learn to Swim</a></li>
<li className=""><a className="hover:text-emerald-600 transition font-geist" href="#programs" style={{}}>Age Group</a></li>
<li className=""></li>
<li className=""><a className="hover:text-emerald-600 transition font-geist" href="#programs" style={{}}>Masters</a></li>
<li className=""></li>
</ul>
</div>

<div className="">
<h4 className="text-neutral-900 font-semibold mb-4 font-geist" style={{}}>Club</h4>
<ul className="space-y-2 text-sm text-neutral-600">
<li className=""><a className="hover:text-emerald-600 transition font-geist" href="#schedule" style={{}}>Schedule</a></li>
<li className=""><a className="hover:text-emerald-600 transition font-geist" href="#squads" style={{}}>Coaches &amp; Squads</a></li>
<li className=""><a className="hover:text-emerald-600 transition font-geist" href="#pricing" style={{}}>Membership</a></li>
<li className=""><a className="hover:text-emerald-600 transition font-geist" href="#join" style={{}}>About Us</a></li>
</ul>
</div>
</div>

<div className="mt-8 rounded-2xl border border-neutral-200 bg-white p-5 sm:p-6 md:p-8">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
<div className="space-y-4">
<h4 className="text-xl sm:text-2xl text-neutral-900 tracking-tight font-playfair font-medium" style={{}}>Book a free trial session</h4>
<ul className="text-sm text-neutral-700 space-y-3">
<li className="flex items-start gap-2 font-geist" style={{}}>
<svg className="lucide lucide-check w-4 h-4 text-emerald-600 mt-0.5" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                  Senior coaches on deck
                </li>
<li className="flex items-start gap-2 font-geist" style={{}}>
<svg className="lucide lucide-check w-4 h-4 text-emerald-600 mt-0.5" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                  All abilities welcome
                </li>
<li className="flex items-start gap-2 font-geist" style={{}}>
<svg className="lucide lucide-check w-4 h-4 text-emerald-600 mt-0.5" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                  Quick response within 24h
                </li>
</ul>
<div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 pt-2 text-sm">
<a className="inline-flex items-center gap-2 hover:text-emerald-600 transition text-neutral-700 font-geist" href="mailto:hello@tropix.club" style={{}}>tropixswimclub@gmail.com<svg className="lucide lucide-mail w-4 h-4" data-lucide="mail" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg></a>
<span className="text-neutral-400 hidden sm:inline font-geist" style={{}}>•</span>
<a className="inline-flex items-center gap-2 text-neutral-700 hover:text-emerald-600 transition font-geist" href="tel:+1-555-TROPIX" style={{}}>
<svg className="lucide lucide-phone w-4 h-4" data-lucide="phone" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
                  +1 (555) TROPIX
                </a>
</div>
</div>
<form className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="">
<label className="block text-xs font-medium text-neutral-700 mb-2 font-geist" style={{}}>Swimmer name</label>
<input className="w-full placeholder-neutral-500 outline-none focus:ring-2 focus:ring-emerald-400/60 focus:border-emerald-300 transition text-sm text-neutral-900 bg-white border border-neutral-200 rounded-xl px-3 py-2.5" placeholder="Full name" required="" type="text"/>
</div>
<div className="">
<label className="block text-xs font-medium text-neutral-700 mb-2 font-geist" style={{}}>Parent/Guardian email</label>
<input className="w-full placeholder-neutral-500 outline-none focus:ring-2 focus:ring-emerald-400/60 focus:border-emerald-300 transition text-sm text-neutral-900 bg-white border border-neutral-200 rounded-xl px-3 py-2.5" placeholder="you@example.com" required="" type="email"/>
</div>
<div className="">
<label className="block text-xs font-medium text-neutral-700 mb-2 font-geist" style={{}}>Swimmer age</label>
<input className="w-full placeholder-neutral-500 outline-none focus:ring-2 focus:ring-emerald-400/60 focus:border-emerald-300 transition text-sm text-neutral-900 bg-white border border-neutral-200 rounded-xl px-3 py-2.5" max="80" min="4" placeholder="e.g., 11" type="number"/>
</div>
<div className="">
<label className="block text-xs font-medium text-neutral-700 mb-2 font-geist" style={{}}>Interested squad</label>
<select className="w-full appearance-none outline-none focus:ring-2 focus:ring-emerald-400/60 focus:border-emerald-300 transition text-sm text-neutral-900 bg-white border border-neutral-200 rounded-xl px-3 py-2.5">
<option className="bg-white font-geist" style={{}}>Learn to Swim</option>
<option className="bg-white font-geist" style={{}}>Age Group</option>
<option className="bg-white font-geist" style={{}}>Performance</option>
<option className="bg-white font-geist" style={{}}>Masters</option>
<option className="bg-white font-geist" style={{}}>Not sure yet</option>
</select>
</div>
<div className="sm:col-span-2">
<label className="block text-xs font-medium text-neutral-700 mb-2 font-geist" style={{}}>Notes</label>
<textarea className="w-full placeholder-neutral-500 outline-none focus:ring-2 focus:ring-emerald-400/60 focus:border-emerald-300 transition text-sm text-neutral-900 bg-white border border-neutral-200 rounded-xl px-3 py-2.5" placeholder="Goals, recent experience, preferred times…" rows="3"></textarea>
</div>
<div className="sm:col-span-2 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
<p className="text-xs text-neutral-600 font-geist" style={{}}>We’ll follow up with available slots and next steps.</p>
<button className="inline-flex gap-2 ring-1 ring-emerald-300 hover:bg-emerald-300 transition text-sm font-medium text-white font-geist bg-emerald-500 rounded-xl pt-2.5 pr-4 pb-2.5 pl-4 items-center" style={{}} type="submit">Contact Us<svg className="lucide lucide-send w-4 h-4" data-lucide="send" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg></button>
</div>
</form>
</div>

<div className="flex flex-col lg:flex-row lg:items-center gap-4 border-t border-neutral-200 mt-8 pt-6 justify-between">
<div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
<p className="text-neutral-500 text-sm font-geist" style={{}}>© 2025 Tropix Swim Club. All rights reserved.</p>
<div className="flex items-center gap-4 text-neutral-500 text-sm">
<span className="hidden sm:inline text-neutral-300 font-geist" style={{}}>•</span>
</div>
</div>
<div className="flex items-center gap-4">
<a aria-label="Twitter" className="text-neutral-500 hover:text-emerald-600 transition" href="#">
<svg className="lucide lucide-twitter w-[20px] h-[20px]" data-icon-replaced="true" data-lucide="twitter" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5px', width: '20px', height: '20px', color: 'rgb(5, 150, 105)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a aria-label="Instagram" className="text-neutral-500 hover:text-emerald-600 transition" href="#">
<svg className="lucide lucide-instagram w-5 h-5" data-lucide="instagram" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
<a aria-label="LinkedIn" className="text-neutral-500 hover:text-emerald-600 transition" href="#">
<svg className="lucide lucide-facebook lucide-linkedin w-[20px] h-[20px]" data-icon-replaced="true" data-lucide="facebook" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px', color: 'rgb(5, 150, 105)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
</a>
</div>
</div>
</div>
</div>

</footer>

    </>
  );
}
