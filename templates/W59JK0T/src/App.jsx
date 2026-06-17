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



    lucide.createIcons();

    // Mini Pie Chart (income goal)
    if(document.getElementById('miniPie')){
      const ctx = document.getElementById('miniPie').getContext('2d');
      new Chart(ctx, {
        type:'doughnut',
        data:{
          labels:['Achieved','Remaining'],
          datasets:[{
            data:[48,24],
            backgroundColor:[
              'rgba(232, 121, 249, 1)', // fuchsia-400
              'rgba(113, 113, 122, 0.13)' // slate-500/15
            ],
            borderWidth:0,
            hoverOffset:3,
            borderRadius:100
          }]
        },
        options:{
          cutout:'76%',
          responsive:false,
          plugins:{
            legend:{display:false},
            tooltip:{
              enabled:true,
              callbacks:{
                label:function(context){
                  return context.label+": $"+context.raw+"k";
                }
              },
              backgroundColor: '#232131',
              titleFont: { family: 'Inter', weight: '600', size: 13 },
              bodyFont: { family: 'Inter', weight: '400', size: 13 },
              displayColors:true
            }
          },
          animation: {
            animateRotate: true,
            animateScale: true,
            duration: 1100,
            easing: 'easeOutQuart'
          }
        }
      });
    }

    document.getElementById("downloadHtml").addEventListener("click",()=>{
      const e=new Blob(["<!DOCTYPE html>"+document.documentElement.outerHTML],{type:"text/html"});
      const t=URL.createObjectURL(e),o=document.createElement("a");
      o.href=t, o.download="freelancer-income-planner.html", o.click(), URL.revokeObjectURL(t);
    });

    // Highcharts Pie
    Highcharts.setOptions({
      chart: { backgroundColor: "rgba(0,0,0,0)" },
      colors: [
        "#7B61FF",
        "#FFAD61",
        "#37D5D6",
        "#E847AE",
        "#9E9E9E"
      ]
    });

    Highcharts.chart('container', {
      chart: { type: 'pie', height: 210, spacing: [0, 0, 0, 0] },
      credits: { enabled: false },
      exporting: { enabled: false },
      title: { text: null },
      tooltip: {
        backgroundColor: "#18181B",
        borderColor: "#26272B",
        style: { color: "#fff", fontSize: "14px" },
        headerFormat: "",
        pointFormat: `<span style="color:{point.color}">\u25CF</span> <span class="font-semibold">{point.name}</span>: <b>{point.percentage:.1f}%</b>`
      },
      accessibility: { point: { valueSuffix: "%" } },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          borderWidth: 0,
          cursor: 'pointer',
          innerSize: '60%',
          borderRadius: 12,
          dataLabels: {
            enabled: false
          }
        }
      },
      legend: { enabled: false },
      series: [{
        enableMouseTracking: false,
        animation: { duration: 1100 },
        colorByPoint: true,
        data: [
          { name: 'Client Projects', y: 52.0 },
          { name: 'Retainers', y: 18.0 },
          { name: 'Passive Products', y: 14.0 },
          { name: 'Consulting', y: 10.0 },
          { name: 'Other', y: 6.0 }
        ]
      }]
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
      
<main className="flex-1 flex flex-col w-full">
<section className="flex-1 flex w-full pt-8 pr-4 pb-8 pl-4 items-center justify-center">
<div className="relative w-full max-w-7xl mx-auto rounded-3xl outline-gradient entrance-animate entrance-animate-delay-1 shadow-2xl">
<div className="relative rounded-[inherit] glass inner-shadow overflow-hidden">

<div className="flex entrance-animate entrance-animate-delay-2 border-white/10 border-b pt-7 pr-8 pb-7 pl-8 space-x-10 items-center justify-between">
<div className="flex items-center gap-3">
<span className="text-xl font-semibold tracking-tight">Revu</span>
</div>
<nav className="hidden md:flex gap-9 text-sm font-medium">
<a className="hover:text-fuchsia-400 transition-colors duration-150" href="#">Overview</a>
<a className="hover:text-fuchsia-400 transition-colors duration-150" href="#">Income</a>
<a className="hover:text-fuchsia-400 transition-colors duration-150" href="#">Pipeline</a>
<a className="hover:text-fuchsia-400 transition-colors duration-150" href="#">Reports</a>
</nav>
<div className="flex items-center gap-5 text-sm font-medium ml-auto">
<a className="hover:text-fuchsia-400 transition-colors duration-150" href="#">Sign Up</a>
<a className="hover:text-fuchsia-400 transition-colors duration-150" href="#">Login</a>
</div>
</div>

<div className="grid md:grid-cols-12 border-b border-white/10">

<div className="md:col-span-7 lg:col-span-8 entrance-animate entrance-animate-delay-3 flex flex-col h-full min-h-[480px] text-left pt-16 pr-8 pb-16 pl-8 items-start justify-center">
<h1 className="sm:text-6xl lg:text-7xl leading-tight text-5xl font-light tracking-tighter font-bricolage">Take Control of Your Freelance Income</h1>
<p className="max-w-lg text-lg font-normal text-white/75 mt-7">
                Take control of your financial future. Visualize your revenue streams, forecast earnings, and identify opportunities to boost your freelance business—all in one place.
              </p>
<div className="mt-11 flex flex-col sm:flex-row gap-4">
<button className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-fuchsia-600 via-purple-600 to-indigo-600 px-8 py-3 text-base font-semibold shadow-md hover:brightness-110 transition-all focus:outline-none entrance-animate entrance-animate-delay-4">
                  Get Started Free
                  <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<button className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-8 py-3 text-base font-semibold hover:bg-white/10 transition-all focus:outline-none entrance-animate entrance-animate-delay-5">
                  Explore Features
                </button>
</div>

<div className="mt-14 flex items-center entrance-animate entrance-animate-delay-5">
<div className="flex -space-x-3 avatar-group relative">
<div className="relative focus:z-10" tabindex="0">
<img alt="Devon Lane" className="h-11 w-11 rounded-full border-2 border-fuchsia-400/60 shadow-md object-cover transition-transform hover:scale-105 focus:scale-105" loading="lazy" src="https://randomuser.me/api/portraits/men/32.jpg"/>
<div className="avatar-tooltip">Devon Lane</div>
</div>
<div className="relative focus:z-10" tabindex="0">
<img alt="Leslie Alexander" className="h-11 w-11 rounded-full border-2 border-purple-400/60 shadow-md object-cover transition-transform hover:scale-105 focus:scale-105" loading="lazy" src="https://randomuser.me/api/portraits/women/45.jpg"/>
<div className="avatar-tooltip">Leslie Alexander</div>
</div>
<div className="relative focus:z-10" tabindex="0">
<img alt="Jacob Jones" className="h-11 w-11 rounded-full border-2 border-indigo-400/60 shadow-md object-cover transition-transform hover:scale-105 focus:scale-105" loading="lazy" src="https://randomuser.me/api/portraits/men/67.jpg"/>
<div className="avatar-tooltip">Jacob Jones</div>
</div>
<div className="relative focus:z-10" tabindex="0">
<div aria-label="45,000+ more users" className="h-11 w-11 rounded-full border-2 border-white/20 bg-gradient-to-br from-fuchsia-700 via-purple-700 to-indigo-700 flex items-center justify-center text-xs font-semibold text-white shadow-md select-none transition-transform hover:scale-105 focus:scale-105">
                      +45k
                    </div>
<div className="avatar-tooltip">45,000+ more</div>
</div>
</div>
<span className="ml-6 text-sm text-white/60 whitespace-nowrap">
                  Trusted by <span className="text-fuchsia-400 font-semibold">45,000+</span> freelancers worldwide
                </span>
</div>
</div>

<div className="md:col-span-5 lg:col-span-4 flex flex-col relative border-white/10 border-l pt-8 pr-0 pb-8 items-center justify-center entrance-animate entrance-animate-delay-4">
<div className="w-full max-w-2xl analytics-glow md:px-8 flex flex-col gap-8 transition-shadow duration-200 pt-0 pr-0 pb-0 pl-0 items-center">

<div className="flex flex-col items-center w-full">
<div className="relative mx-auto w-52 h-52 mb-4 flex items-center justify-center">
<div className="min-w-[320px] max-w-full mx-auto w-full h-full" id="container"></div>
</div>

<div className="w-full max-w-xs mt-5 space-y-2">
<div className="flex items-center justify-between">
<div className="flex items-center">
<div className="w-2.5 h-2.5 rounded-full" style={{background: '#7B61FF'}}></div>
<span className="ml-2 text-sm text-[#e4e4e7]">Client Projects</span>
</div>
<span className="text-sm text-[#a1a1aa]">52.0%</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center">
<div className="w-2.5 h-2.5 rounded-full" style={{background: '#FFAD61'}}></div>
<span className="ml-2 text-sm text-[#e4e4e7]">Retainers</span>
</div>
<span className="text-sm text-[#a1a1aa]">18.0%</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center">
<div className="w-2.5 h-2.5 rounded-full" style={{background: '#37D5D6'}}></div>
<span className="ml-2 text-sm text-[#e4e4e7]">Passive Products</span>
</div>
<span className="text-sm text-[#a1a1aa]">14.0%</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center">
<div className="w-2.5 h-2.5 rounded-full" style={{background: '#E847AE'}}></div>
<span className="ml-2 text-sm text-[#e4e4e7]">Consulting</span>
</div>
<span className="text-sm text-[#a1a1aa]">10.0%</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center">
<div className="w-2.5 h-2.5 rounded-full" style={{background: '#9E9E9E'}}></div>
<span className="ml-2 text-sm text-[#e4e4e7]">Other</span>
</div>
<span className="text-sm text-[#a1a1aa]">6.0%</span>
</div>
</div>
</div>
<div className="divider w-full mt-6 mb-2"></div>

<div className="w-full items-start mt-0">
<p className="text-lg font-semibold text-[#f4f4f5] tracking-tight mb-4">Breakdown by Source</p>
<div className="space-y-4">
<div>
<div className="flex justify-between text-sm mb-1">
<span className="text-[#e4e4e7]">Client Projects</span>
<span className="text-[#a1a1aa]">$33,644</span>
</div>
<div className="h-2 bg-[#232329]/60 rounded-full overflow-hidden">
<div className="h-full" style={{background: '#7B61FF', width: '52%'}}></div>
</div>
</div>
<div>
<div className="flex justify-between text-sm mb-1">
<span className="text-[#e4e4e7]">Retainers</span>
<span className="text-[#a1a1aa]">$11,646</span>
</div>
<div className="h-2 bg-[#232329]/60 rounded-full overflow-hidden">
<div className="h-full" style={{background: '#FFAD61', width: '18%'}}></div>
</div>
</div>
<div>
<div className="flex text-sm mb-1 justify-between">
<span className="text-[#e4e4e7]">Passive Products</span>
<span className="text-[#a1a1aa]">$9,058</span>
</div>
<div className="h-2 bg-[#232329]/60 rounded-full overflow-hidden">
<div className="h-full" style={{background: '#37D5D6', width: '14%'}}></div>
</div>
</div>
<div>
<div className="flex text-sm mb-1 justify-between">
<span className="text-[#e4e4e7]">Consulting</span>
<span className="text-[#a1a1aa]">$6,470</span>
</div>
<div className="h-2 bg-[#232329]/60 rounded-full overflow-hidden">
<div className="h-full" style={{background: '#E847AE', width: '10%'}}></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="col-span-full grid md:grid-cols-3 border-b border-white/10">

<article className="border-white/10 border-r pt-8 pr-8 pb-8 pl-8 flex flex-col gap-4 entrance-animate entrance-animate-delay-3">
<div className="flex items-center gap-3 mb-2">
<div className="rounded-lg bg-gradient-to-br from-blue-600 via-sky-500 to-blue-800 p-2.5 flex items-center justify-center shadow-md">
<svg className="lucide lucide-layers text-white w-6 h-6" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
</div>
<span className="text-lg font-medium text-blue-400/80 ml-1">Multiple Streams</span>
</div>
<h4 className="text-lg font-semibold leading-snug tracking-tight">Build a Sustainable Income Pipeline</h4>
<p className="text-sm text-white/70">
                Combine client work, retainers, digital products, and consulting to create reliable monthly revenue. Diversification protects your income and unlocks new growth opportunities.
              </p>
<div>
<div className="flex justify-between text-xs mb-1 text-white/60">
<span>Pipeline Strength</span>
<span className="text-blue-400 font-medium">76%</span>
</div>
<div className="h-2 bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-blue-500 via-sky-400 to-blue-300 rounded-full transition-all duration-500" style={{width: '76%'}}></div>
</div>
</div>
</article>

<article className="p-8 border-r border-white/10 flex flex-col gap-4 entrance-animate entrance-animate-delay-4">
<div className="flex items-center gap-3 mb-2">
<div className="rounded-lg bg-gradient-to-br from-fuchsia-600 via-purple-500 to-indigo-500 p-2.5 flex items-center justify-center shadow-md">
<svg className="lucide lucide-target text-white w-6 h-6" data-lucide="target" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
</div>
<span className="text-lg font-medium text-fuchsia-400/80 ml-1">2024 Goal: $72k</span>
</div>
<h4 className="text-lg font-semibold leading-snug tracking-tight">Set &amp; Achieve Your Income Goals</h4>
<p className="text-sm text-white/70">
                Forecast your yearly, monthly, or weekly targets. Stay motivated and accountable with real-time progress tracking and actionable insights to close the gap.
              </p>
<div className="flex items-center gap-4">
<div className="relative h-14 w-14 flex items-center justify-center">
<canvas height="3584" id="miniPie" style={{width: '56px', height: '56px', display: 'block', boxSizing: 'border-box'}} width="3584"></canvas>
<span className="absolute text-base font-semibold text-fuchsia-300 pointer-events-none select-none" style={{top: '50%', left: '50%', transform: 'translate(-50%,-55%)'}}>67%</span>
</div>
<div className="flex flex-col text-xs text-white/70">
<div><span className="inline-block w-2 h-2 bg-fuchsia-400 rounded-full mr-2"></span>Achieved: <span className="text-white font-semibold">$48k</span></div>
<div><span className="inline-block w-2 h-2 bg-white/30 rounded-full mr-2"></span>Remaining: <span className="text-white/60">$24k</span></div>
</div>
</div>
</article>

<article className="pt-8 pr-8 pb-8 pl-8 flex flex-col gap-4 entrance-animate entrance-animate-delay-5">
<div className="flex items-center gap-3 mb-2">
<div className="rounded-lg bg-gradient-to-br from-green-500 via-emerald-500 to-teal-600 p-2.5 flex items-center justify-center shadow-md">
<svg className="lucide lucide-file-text text-white w-6 h-6" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
</div>
<span className="text-lg font-medium text-green-400/80 ml-1">Maximize Earnings</span>
</div>
<h4 className="text-lg font-semibold leading-snug tracking-tight">Optimize Your Revenue &amp; Workflow</h4>
<p className="text-sm text-white/70">
                Identify high-value clients, streamline your process, and allocate your time for maximum payoff. Analyze which projects and strategies deliver the best ROI.
              </p>
<div className="flex gap-1 h-10 w-full max-w-[90px] items-end">
<div className="w-3 rounded bg-green-500" style={{height: '70%'}}></div>
<div className="w-3 rounded bg-green-300" style={{height: '90%'}}></div>
<div className="w-3 rounded bg-emerald-400" style={{height: '60%'}}></div>
<div className="w-3 rounded bg-teal-400" style={{height: '80%'}}></div>
<div className="w-3 rounded bg-white/20" style={{height: '45%'}}></div>
</div>
</article>
</div>
</div>
</div>
</section>
<div className="fixed bottom-6 right-6 entrance-animate entrance-animate-delay-5">
<button className="flex items-center gap-2 rounded-full bg-white text-black px-4 py-2 text-xs font-semibold shadow-lg hover:bg-gray-200 transition duration-150 focus:outline-none" id="downloadHtml">
<svg className="lucide lucide-download w-4 h-4" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
        Save HTML
      </button>
</div>
</main>





    </>
  );
}
