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
      

<nav className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/90 backdrop-blur-md">
<div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-6 lg:px-12">

<a className="text-xl font-semibold tracking-tighter text-[#0B0B0C]" href="#">
                SuperXHealth
            </a>

<div className="hidden items-center gap-8 md:flex">
<a className="text-sm font-medium text-gray-600 transition hover:text-[#0B0B0C]" href="#">How it Works</a>
<a className="text-sm font-medium text-gray-600 transition hover:text-[#0B0B0C]" href="#">What’s Included</a>
<a className="text-sm font-medium text-gray-600 transition hover:text-[#0B0B0C]" href="#">Membership</a>
<a className="text-sm font-medium text-gray-600 transition hover:text-[#0B0B0C]" href="#">Lab Tests</a>
<a className="text-sm font-medium text-gray-600 transition hover:text-[#0B0B0C]" href="#">Reviews</a>
<a className="text-sm font-medium text-gray-600 transition hover:text-[#0B0B0C]" href="#">Login</a>
<a className="rounded-full bg-[#FF7A30] px-6 py-2.5 text-sm font-medium text-white transition hover:bg-[#e06520] hover:shadow-lg hover:shadow-orange-500/20" href="#">
                    Start Testing
                </a>
</div>

<button className="flex md:hidden text-[#0B0B0C]">
<span className="iconify" data-icon="lucide:menu" data-width="24"></span>
</button>
</div>
</nav>

<section className="relative mx-auto flex min-h-[85vh] max-w-[1440px] flex-col items-center justify-center px-6 pt-20 text-center lg:px-12">

<div className="absolute left-1/2 top-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-50/50 blur-[120px]"></div>
<h1 className="mx-auto max-w-4xl text-5xl font-semibold leading-[1.1] tracking-tighter text-[#0B0B0C] md:text-7xl lg:text-8xl">
            Know your body.<br/>
<span className="text-gray-400">Change your life.</span>
</h1>
<p className="mt-8 max-w-xl text-lg text-gray-500 md:text-xl font-normal">
            One test. 100+ biomarkers. Zero guesswork.
        </p>
<div className="mt-10 flex flex-col gap-4 sm:flex-row">
<a className="flex items-center justify-center rounded-full bg-[#FF7A30] px-8 py-4 text-base font-medium text-white transition hover:bg-[#e06520] hover:shadow-xl hover:shadow-orange-500/20" href="#">
                Start Testing
            </a>
<a className="flex items-center justify-center rounded-full border border-gray-200 bg-white px-8 py-4 text-base font-medium text-[#0B0B0C] transition hover:border-gray-300 hover:bg-gray-50" href="#">
                See What’s Inside
            </a>
</div>

<div className="mt-20 w-full max-w-3xl animate-fade-in-up opacity-90">
<div className="relative mx-auto aspect-[16/9] overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)]">

<div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-transparent to-gray-50/50">
<svg className="h-full w-full" preserveaspectratio="none" viewbox="0 0 800 300">
<defs>
<lineargradient id="blueGradient" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" style={{stopColor: '#3C8AFF', stopOpacity: '0.2'}}></stop>
<stop offset="100%" style={{stopColor: '#3C8AFF', stopOpacity: '0'}}></stop>
</lineargradient>
</defs>
<path d="M0,250 C150,250 200,100 400,120 C600,140 650,50 800,80 V300 H0 Z" fill="url(#blueGradient)"></path>
<path d="M0,250 C150,250 200,100 400,120 C600,140 650,50 800,80" fill="none" stroke="#3C8AFF" strokeWidth="2"></path>

<circle cx="400" cy="120" fill="white" r="4" stroke="#3C8AFF" strokeWidth="2"></circle>
<circle cx="680" cy="70" fill="white" r="4" stroke="#3C8AFF" strokeWidth="2"></circle>
</svg>

<div className="absolute right-12 top-12 rounded-xl border border-gray-100 bg-white/90 p-4 shadow-sm backdrop-blur-sm">
<div className="flex items-center gap-3">
<span className="iconify text-[#3C8AFF]" data-icon="lucide:activity" data-width="20"></span>
<div>
<div className="text-xs font-medium text-gray-400">Biological Age</div>
<div className="text-lg font-semibold text-[#0B0B0C] tracking-tight">24.5 Years</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-[1440px] px-6 py-24 lg:px-12">
<div className="grid grid-cols-1 gap-8 md:grid-cols-3">

<div className="group flex flex-col items-start gap-4 rounded-2xl border border-transparent p-6 transition-all hover:border-gray-100 hover:bg-gray-50">
<div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-[#0B0B0C] group-hover:bg-white group-hover:shadow-sm">
<span className="iconify" data-icon="lucide:clock" data-width="24"></span>
</div>
<div>
<h3 className="text-lg font-medium text-[#0B0B0C]">No wait times</h3>
<p className="mt-2 text-gray-500 text-sm">In and out in under 15 minutes.</p>
</div>
</div>

<div className="group flex flex-col items-start gap-4 rounded-2xl border border-transparent p-6 transition-all hover:border-gray-100 hover:bg-gray-50">
<div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-[#0B0B0C] group-hover:bg-white group-hover:shadow-sm">
<span className="iconify" data-icon="lucide:zap" data-width="24"></span>
</div>
<div>
<h3 className="text-lg font-medium text-[#0B0B0C]">Fast results</h3>
<p className="mt-2 text-gray-500 text-sm">Your full health report in 5 days.</p>
</div>
</div>

<div className="group flex flex-col items-start gap-4 rounded-2xl border border-transparent p-6 transition-all hover:border-gray-100 hover:bg-gray-50">
<div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-[#0B0B0C] group-hover:bg-white group-hover:shadow-sm">
<span className="iconify" data-icon="lucide:map-pin" data-width="24"></span>
</div>
<div>
<h3 className="text-lg font-medium text-[#0B0B0C]">Simple + convenient</h3>
<p className="mt-2 text-gray-500 text-sm">2,000+ partner labs nationwide.</p>
</div>
</div>
</div>
</section>

<section className="bg-[#F5F6FA] py-32">
<div className="mx-auto max-w-[1440px] px-6 lg:px-12">
<div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">

<div>
<h2 className="text-4xl font-semibold leading-tight tracking-tight text-[#0B0B0C] lg:text-5xl">
                        100+ biomarkers. <br/>
                        One simple blood draw.
                    </h2>
<p className="mt-6 text-lg text-gray-500">
                        From heart health to hormones, we detect early signs of 1,000+ conditions.
                    </p>
<a className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-[#3C8AFF] hover:text-blue-500" href="#">
                        Explore all biomarkers 
                        <span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
</div>

<div className="relative flex items-center justify-center">
<div className="relative h-[400px] w-[200px] overflow-hidden rounded-[3rem] bg-white shadow-2xl ring-1 ring-gray-900/5">
<div className="absolute bottom-0 h-3/4 w-full bg-gradient-to-t from-[#3C8AFF] to-[#3C8AFF]/20 opacity-80"></div>

<div className="absolute bottom-10 left-1/2 h-4 w-4 -translate-x-1/2 rounded-full bg-white/40 blur-[1px]"></div>
<div className="absolute bottom-20 left-1/3 h-2 w-2 rounded-full bg-white/30 blur-[1px]"></div>

<div className="absolute right-4 top-4 h-32 w-4 rounded-full bg-white/40 blur-md"></div>
</div>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-[1440px] px-6 py-32 lg:px-12">
<div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
<div className="lg:col-span-1">
<h2 className="text-3xl font-semibold tracking-tight text-[#0B0B0C]">Your SuperX Score</h2>
<p className="mt-4 text-gray-500">Track your biomarker trends and biological age over time to see exactly how your lifestyle changes impact your longevity.</p>
<div className="mt-8 space-y-4">
<div className="flex items-start gap-3">
<div className="mt-1 h-2 w-2 rounded-full bg-[#3C8AFF]"></div>
<p className="text-sm text-gray-600">Scores optimized for longevity</p>
</div>
<div className="flex items-start gap-3">
<div className="mt-1 h-2 w-2 rounded-full bg-[#3C8AFF]"></div>
<p className="text-sm text-gray-600">Actionable trend analysis</p>
</div>
</div>
</div>
<div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm lg:col-span-2">
<div className="mb-8 flex items-end justify-between">
<div>
<div className="text-sm font-medium text-gray-400">Current Score</div>
<div className="text-4xl font-semibold tracking-tight text-[#0B0B0C]">92<span className="text-lg text-gray-400">/100</span></div>
</div>
<div className="text-right">
<div className="flex items-center gap-1 text-sm font-medium text-green-600">
<span className="iconify" data-icon="lucide:trending-up"></span>
                            +4.2%
                        </div>
<div className="text-xs text-gray-400">vs last test</div>
</div>
</div>

<div className="flex h-64 items-end gap-2 sm:gap-4">
<div className="group relative h-[40%] w-full rounded-t-sm bg-gray-100 transition-all hover:bg-[#3C8AFF]/20"></div>
<div className="group relative h-[55%] w-full rounded-t-sm bg-gray-100 transition-all hover:bg-[#3C8AFF]/20"></div>
<div className="group relative h-[45%] w-full rounded-t-sm bg-gray-100 transition-all hover:bg-[#3C8AFF]/20"></div>
<div className="group relative h-[60%] w-full rounded-t-sm bg-gray-100 transition-all hover:bg-[#3C8AFF]/20"></div>
<div className="group relative h-[75%] w-full rounded-t-sm bg-gray-100 transition-all hover:bg-[#3C8AFF]/20"></div>
<div className="group relative h-[85%] w-full rounded-t-sm bg-[#3C8AFF] shadow-[0_0_20px_rgba(60,138,255,0.3)]"></div>
</div>
<div className="mt-4 flex justify-between text-xs font-medium text-gray-400">
<span>JAN</span><span>FEB</span><span>MAR</span><span>APR</span><span>MAY</span><span>JUN</span>
</div>
</div>
</div>
</section>

<section className="bg-[#F5F6FA] py-32">
<div className="mx-auto flex max-w-4xl flex-col items-center px-6 text-center">
<span className="mb-8 inline-block rounded-full bg-white px-3 py-1 text-xs font-medium uppercase tracking-wider text-[#3C8AFF] shadow-sm">Real Results</span>
<h3 className="text-3xl font-medium leading-tight tracking-tight text-[#0B0B0C] md:text-5xl">
                “SuperXHealth gave me clarity. Not vague advice. Actual data about my body.”
            </h3>
<div className="mt-12 flex flex-wrap justify-center gap-4">

<div className="flex -space-x-3 overflow-hidden">
<div className="h-10 w-10 rounded-full border-2 border-white bg-gray-300"></div>
<div className="h-10 w-10 rounded-full border-2 border-white bg-gray-400"></div>
<div className="h-10 w-10 rounded-full border-2 border-white bg-gray-500"></div>
<div className="h-10 w-10 rounded-full border-2 border-white bg-gray-600"></div>
<div className="h-10 w-10 rounded-full border-2 border-white bg-gray-700"></div>
</div>
<div className="flex items-center text-sm font-medium text-gray-600">
<span className="mr-2 hidden sm:inline">Used by leaders like</span>
<span className="font-semibold text-[#0B0B0C]">@mytechceo, @emmyxtech &amp; Quentin Johnston</span>
</div>
</div>
<a className="mt-10 inline-flex items-center text-sm font-medium text-[#0B0B0C] underline decoration-gray-300 underline-offset-4 hover:decoration-[#0B0B0C] transition" href="#">
                Read Reviews
            </a>
</div>
</section>

<section className="bg-[#0B0B0C] py-24 text-white">
<div className="mx-auto max-w-[1440px] px-6 lg:px-12">
<div className="grid grid-cols-1 gap-12 md:grid-cols-3">
<div className="border-l border-gray-800 pl-6">
<div className="text-5xl font-semibold tracking-tighter text-[#3C8AFF]">63%</div>
<p className="mt-2 text-lg font-medium">discover early signs of diabetes</p>
</div>
<div className="border-l border-gray-800 pl-6">
<div className="text-5xl font-semibold tracking-tighter text-[#3C8AFF]">44%</div>
<p className="mt-2 text-lg font-medium">uncover elevated heart risk</p>
</div>
<div className="border-l border-gray-800 pl-6">
<div className="text-5xl font-semibold tracking-tighter text-[#3C8AFF]">70%</div>
<p className="mt-2 text-lg font-medium">slow their rate of aging</p>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-[1440px] px-6 py-32 lg:px-12">
<h2 className="mb-16 text-center text-3xl font-semibold tracking-tight text-[#0B0B0C] lg:text-4xl">How it works</h2>
<div className="grid grid-cols-1 gap-8 md:grid-cols-3">

<div className="relative rounded-2xl bg-[#F5F6FA] p-8">
<span className="mb-6 block text-xs font-semibold uppercase tracking-wider text-gray-400">Step 01</span>
<h3 className="mb-3 text-xl font-semibold text-[#0B0B0C]">Test your whole body</h3>
<p className="text-gray-500">Get a comprehensive blood draw at a lab or at home.</p>
<span className="iconify absolute bottom-8 right-8 text-gray-300" data-icon="lucide:flask-conical" data-width="40"></span>
</div>

<div className="relative rounded-2xl bg-[#F5F6FA] p-8">
<span className="mb-6 block text-xs font-semibold uppercase tracking-wider text-gray-400">Step 02</span>
<h3 className="mb-3 text-xl font-semibold text-[#0B0B0C]">An actionable plan</h3>
<p className="text-gray-500">Easy-to-understand results plus personalized diet, lifestyle, and supplement recommendations.</p>
<span className="iconify absolute bottom-8 right-8 text-gray-300" data-icon="lucide:file-text" data-width="40"></span>
</div>

<div className="relative rounded-2xl bg-[#F5F6FA] p-8">
<span className="mb-6 block text-xs font-semibold uppercase tracking-wider text-gray-400">Step 03</span>
<h3 className="mb-3 text-xl font-semibold text-[#0B0B0C]">A connected ecosystem</h3>
<p className="text-gray-500">Book diagnostics and order curated supplements anytime.</p>
<span className="iconify absolute bottom-8 right-8 text-gray-300" data-icon="lucide:repeat" data-width="40"></span>
</div>
</div>
</section>

<section className="overflow-hidden border-y border-gray-100 bg-white py-20">
<div className="mb-12 text-center">
<h2 className="text-2xl font-semibold tracking-tight text-[#0B0B0C]">SuperXHealth is changing thousands of lives</h2>
</div>

<div className="flex w-full gap-6 overflow-x-auto px-6 pb-6 md:justify-center">

<div className="w-[300px] flex-shrink-0 rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-full bg-gray-200"></div>
<div className="text-sm font-medium">@avnibarman_</div>
</div>
<p className="mt-4 text-sm text-gray-600">"Finally understand why I was feeling tired all the time. Iron levels fixed."</p>
</div>

<div className="w-[300px] flex-shrink-0 rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-full bg-gray-200"></div>
<div className="text-sm font-medium">@stefarmstead</div>
</div>
<p className="mt-4 text-sm text-gray-600">"The data visualization is incredible. My doctor was impressed."</p>
</div>

<div className="w-[300px] flex-shrink-0 rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-full bg-gray-200"></div>
<div className="text-sm font-medium">SoulCycle Instructor</div>
</div>
<p className="mt-4 text-sm text-gray-600">"Optimizing my recovery with actual blood biomarkers changed my performance."</p>
</div>

<div className="w-[300px] flex-shrink-0 rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-full bg-gray-200"></div>
<div className="text-sm font-medium">@emmyxtech</div>
</div>
<p className="mt-4 text-sm text-gray-600">"Tech for your body. The most seamless medical experience I've had."</p>
</div>
</div>
</section>

<section className="bg-[#0B0B0C] py-32 text-white">
<div className="mx-auto max-w-[1440px] px-6 lg:px-12">
<div className="flex flex-col gap-16 lg:flex-row">
<div className="lg:w-1/3">
<h2 className="text-4xl font-semibold tracking-tight">What’s included in your membership</h2>
<div className="mt-8">
<a className="inline-flex items-center justify-center rounded-full bg-[#FF7A30] px-8 py-4 text-base font-medium text-white transition hover:bg-[#e06520]" href="#">
                            Join Today
                        </a>
</div>
</div>
<div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:w-2/3">

<div className="flex gap-4">
<div className="mt-1 text-[#3C8AFF]"><span className="iconify" data-icon="lucide:database"></span></div>
<div>
<h4 className="font-medium">All your data in one place</h4>
<p className="mt-1 text-sm text-gray-400">Centralized health record.</p>
</div>
</div>

<div className="flex gap-4">
<div className="mt-1 text-[#3C8AFF]"><span className="iconify" data-icon="lucide:activity"></span></div>
<div>
<h4 className="font-medium">100+ labs + your biological age</h4>
<p className="mt-1 text-sm text-gray-400">Comprehensive baseline.</p>
</div>
</div>

<div className="flex gap-4">
<div className="mt-1 text-[#3C8AFF]"><span className="iconify" data-icon="lucide:upload-cloud"></span></div>
<div>
<h4 className="font-medium">Upload past lab results</h4>
<p className="mt-1 text-sm text-gray-400">See historical trends instantly.</p>
</div>
</div>

<div className="flex gap-4">
<div className="mt-1 text-[#3C8AFF]"><span className="iconify" data-icon="lucide:file-heart"></span></div>
<div>
<h4 className="font-medium">Personalized health plan</h4>
<p className="mt-1 text-sm text-gray-400">Diet and supplement protocols.</p>
</div>
</div>

<div className="flex gap-4">
<div className="mt-1 text-[#3C8AFF]"><span className="iconify" data-icon="lucide:message-square"></span></div>
<div>
<h4 className="font-medium">Unlimited concierge messaging</h4>
<p className="mt-1 text-sm text-gray-400">Ask questions anytime.</p>
</div>
</div>

<div className="flex gap-4">
<div className="mt-1 text-[#3C8AFF]"><span className="iconify" data-icon="lucide:plus-circle"></span></div>
<div>
<h4 className="font-medium">Add-on tests anytime</h4>
<p className="mt-1 text-sm text-gray-400">Dive deeper when needed.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#F5F6FA] py-32">
<div className="mx-auto max-w-[1440px] px-6 lg:px-12">
<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">

<div className="col-span-1 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm md:col-span-2 lg:col-span-2">
<div className="flex items-center justify-between">
<h3 className="font-medium text-[#0B0B0C]">Lipoprotein(a)</h3>
<span className="rounded-full bg-red-50 px-2 py-1 text-xs font-medium text-red-600">High Risk</span>
</div>
<div className="mt-6 flex items-baseline gap-2">
<span className="text-3xl font-semibold tracking-tight text-[#0B0B0C]">142</span>
<span className="text-sm text-gray-500">nmol/L</span>
</div>

<div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-gray-100">
<div className="h-full w-1/3 rounded-full bg-green-400"></div>
</div>
<div className="mt-2 flex justify-between text-xs text-gray-400">
<span>Optimal &lt; 75</span>
<span>Current 142</span>
</div>
</div>

<div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
<h3 className="font-medium text-[#0B0B0C]">HbA1c</h3>
<div className="mt-4 flex items-center justify-center">
<div className="relative flex h-24 w-24 items-center justify-center rounded-full border-4 border-green-500 bg-green-50">
<span className="text-xl font-semibold text-green-700">5.1%</span>
</div>
</div>
<p className="mt-4 text-center text-xs text-gray-500">Optimal Range</p>
</div>

<div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-transparent p-6 text-center transition hover:border-[#3C8AFF] hover:bg-blue-50/50">
<div className="mb-4 rounded-full bg-white p-3 shadow-sm">
<span className="iconify text-[#3C8AFF]" data-icon="lucide:upload" data-width="24"></span>
</div>
<h3 className="font-medium text-[#0B0B0C]">Upload Results</h3>
<p className="mt-1 text-xs text-gray-500">Import from other labs</p>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-[1440px] px-6 py-24 lg:px-12">
<h2 className="mb-12 text-2xl font-semibold tracking-tight text-[#0B0B0C]">Deep dive diagnostics</h2>
<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

<div className="group cursor-pointer rounded-2xl border border-gray-100 bg-white p-6 transition hover:shadow-lg">
<div className="mb-6 flex aspect-square items-center justify-center rounded-xl bg-gray-50 text-gray-300">
<span className="iconify" data-icon="lucide:dna" data-width="48"></span>
</div>
<h3 className="font-medium text-[#0B0B0C]">DNA Health</h3>
<p className="mt-1 text-sm text-gray-500">Genomic predispositions.</p>
</div>

<div className="group cursor-pointer rounded-2xl border border-gray-100 bg-white p-6 transition hover:shadow-lg">
<div className="mb-6 flex aspect-square items-center justify-center rounded-xl bg-gray-50 text-gray-300">
<span className="iconify" data-icon="lucide:bug" data-width="48"></span>
</div>
<h3 className="font-medium text-[#0B0B0C]">Gut Microbiome</h3>
<p className="mt-1 text-sm text-gray-500">Digestive health analysis.</p>
</div>

<div className="group cursor-pointer rounded-2xl border border-gray-100 bg-white p-6 transition hover:shadow-lg">
<div className="mb-6 flex aspect-square items-center justify-center rounded-xl bg-gray-50 text-gray-300">
<span className="iconify" data-icon="lucide:shield-alert" data-width="48"></span>
</div>
<h3 className="font-medium text-[#0B0B0C]">Environmental Toxins</h3>
<p className="mt-1 text-sm text-gray-500">Heavy metals &amp; mold.</p>
</div>

<div className="group cursor-pointer rounded-2xl border border-gray-100 bg-white p-6 transition hover:shadow-lg">
<div className="mb-6 flex aspect-square items-center justify-center rounded-xl bg-gray-50 text-gray-300">
<span className="iconify" data-icon="lucide:microscope" data-width="48"></span>
</div>
<h3 className="font-medium text-[#0B0B0C]">Cancer Screens</h3>
<p className="mt-1 text-sm text-gray-500">Advanced early detection.</p>
</div>
</div>
</section>

<section className="bg-[#F5F6FA] py-24">
<div className="mx-auto max-w-[1440px] px-6 text-center lg:px-12">
<h2 className="mb-16 text-3xl font-semibold tracking-tight text-[#0B0B0C]">Developed by world-class medical professionals</h2>
<div className="flex flex-wrap justify-center gap-12">
<div className="flex flex-col items-center gap-4">
<div className="h-24 w-24 rounded-full bg-gray-300"></div> 
<div className="text-center">
<h4 className="font-semibold text-[#0B0B0C]">Dr. Anant Vinjamoori</h4>
<p className="text-xs text-gray-500">Chief Medical Officer</p>
</div>
</div>
<div className="flex flex-col items-center gap-4">
<div className="h-24 w-24 rounded-full bg-gray-300"></div>
<div className="text-center">
<h4 className="font-semibold text-[#0B0B0C]">Dr. Leigh Erin Connealy</h4>
<p className="text-xs text-gray-500">Integrative Medicine</p>
</div>
</div>
<div className="flex flex-col items-center gap-4">
<div className="h-24 w-24 rounded-full bg-gray-300"></div>
<div className="text-center">
<h4 className="font-semibold text-[#0B0B0C]">Dr. Abe Malkin</h4>
<p className="text-xs text-gray-500">Concierge Medicine</p>
</div>
</div>
<div className="flex flex-col items-center gap-4">
<div className="h-24 w-24 rounded-full bg-gray-300"></div>
<div className="text-center">
<h4 className="font-semibold text-[#0B0B0C]">Dr. Robert Lufkin</h4>
<p className="text-xs text-gray-500">Longevity Expert</p>
</div>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-[1440px] px-6 py-32 lg:px-12">
<div className="mx-auto max-w-4xl text-center">
<h2 className="text-4xl font-semibold leading-tight tracking-tight text-[#0B0B0C]">
                What usually costs <span className="text-gray-400 line-through">₹15,000</span> is now <span className="text-[#3C8AFF]">₹199/month</span>.
            </h2>
<div className="mt-12 rounded-3xl border border-gray-200 bg-white p-10 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)]">
<div className="flex flex-col items-center justify-center gap-2">
<span className="text-5xl font-semibold tracking-tighter text-[#0B0B0C]">₹17<span className="text-lg font-medium text-gray-500">/mo</span></span>
<span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">Billed Annually</span>
</div>
<p className="mt-6 text-gray-600">Includes one annual 100+ biomarker draw.</p>
<div className="mt-8">
<a className="inline-block w-full max-w-xs rounded-full bg-[#FF7A30] px-8 py-4 text-center text-base font-medium text-white transition hover:bg-[#e06520] hover:shadow-lg hover:shadow-orange-500/20" href="#">
                        Start Testing
                    </a>
</div>
<div className="mt-8 flex flex-col items-center gap-2 text-xs text-gray-400">
<div className="flex gap-4">
<span className="flex items-center gap-1"><span className="iconify" data-icon="lucide:check" data-width="14"></span> Cancel anytime</span>
<span className="flex items-center gap-1"><span className="iconify" data-icon="lucide:check" data-width="14"></span> HSA/FSA eligible</span>
<span className="flex items-center gap-1"><span className="iconify" data-icon="lucide:check" data-width="14"></span> Results in 5 days</span>
</div>
<div className="mt-4 flex gap-3 text-gray-300">
<span className="iconify" data-icon="lucide:credit-card" data-width="24"></span>
</div>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-3xl px-6 py-24">
<h2 className="mb-12 text-2xl font-semibold tracking-tight text-[#0B0B0C]">Frequently Asked Questions</h2>
<div className="divide-y divide-gray-100">

<details className="group py-6">
<summary className="flex cursor-pointer items-center justify-between font-medium text-[#0B0B0C]">
                    How do I prepare for a blood draw?
                    <span className="transition group-open:rotate-180">
<span className="iconify" data-icon="lucide:chevron-down"></span>
</span>
</summary>
<p className="mt-4 text-sm text-gray-500">You will need to fast for 8-12 hours before your appointment. Drink plenty of water to stay hydrated.</p>
</details>

<details className="group py-6">
<summary className="flex cursor-pointer items-center justify-between font-medium text-[#0B0B0C]">
                    What should I expect during the test?
                    <span className="transition group-open:rotate-180">
<span className="iconify" data-icon="lucide:chevron-down"></span>
</span>
</summary>
<p className="mt-4 text-sm text-gray-500">The process is quick and professional, typically taking under 15 minutes at one of our partner labs.</p>
</details>

<details className="group py-6">
<summary className="flex cursor-pointer items-center justify-between font-medium text-[#0B0B0C]">
                    How fast are results?
                    <span className="transition group-open:rotate-180">
<span className="iconify" data-icon="lucide:chevron-down"></span>
</span>
</summary>
<p className="mt-4 text-sm text-gray-500">Most results are available in your dashboard within 5 business days after your lab visit.</p>
</details>

<details className="group py-6">
<summary className="flex cursor-pointer items-center justify-between font-medium text-[#0B0B0C]">
                    Does SuperXHealth replace my doctor?
                    <span className="transition group-open:rotate-180">
<span className="iconify" data-icon="lucide:chevron-down"></span>
</span>
</summary>
<p className="mt-4 text-sm text-gray-500">No, we complement your primary care by providing deep data and lifestyle insights. We recommend sharing your report with your doctor.</p>
</details>

<details className="group py-6">
<summary className="flex cursor-pointer items-center justify-between font-medium text-[#0B0B0C]">
                    Can I get more than one test per year?
                    <span className="transition group-open:rotate-180">
<span className="iconify" data-icon="lucide:chevron-down"></span>
</span>
</summary>
<p className="mt-4 text-sm text-gray-500">Yes, members can purchase additional test panels at any time at exclusive member pricing.</p>
</details>
</div>
<div className="mt-12 text-center">
<a className="text-sm font-medium text-[#0B0B0C] underline decoration-gray-300 underline-offset-4 hover:decoration-[#0B0B0C]" href="#">Read more FAQs</a>
</div>
</section>

<footer className="border-t border-gray-100 bg-white pt-24 pb-12">
<div className="mx-auto max-w-[1440px] px-6 lg:px-12">
<div className="grid grid-cols-2 gap-12 md:grid-cols-4 lg:grid-cols-5">
<div className="col-span-2 lg:col-span-2">
<a className="text-xl font-semibold tracking-tighter text-[#0B0B0C]" href="#">SuperXHealth</a>
<p className="mt-4 max-w-xs text-sm text-gray-500">Empowering you with data to live a longer, healthier life.</p>
</div>
<div className="flex flex-col gap-4">
<h4 className="text-sm font-semibold text-[#0B0B0C]">Company</h4>
<a className="text-sm text-gray-500 hover:text-[#3C8AFF]" href="#">About</a>
<a className="text-sm text-gray-500 hover:text-[#3C8AFF]" href="#">Contact</a>
<a className="text-sm text-gray-500 hover:text-[#3C8AFF]" href="#">Join the Team</a>
<a className="text-sm text-gray-500 hover:text-[#3C8AFF]" href="#">SuperX Labs</a>
</div>
<div className="flex flex-col gap-4">
<h4 className="text-sm font-semibold text-[#0B0B0C]">Product</h4>
<a className="text-sm text-gray-500 hover:text-[#3C8AFF]" href="#">How it Works</a>
<a className="text-sm text-gray-500 hover:text-[#3C8AFF]" href="#">What’s Included</a>
<a className="text-sm text-gray-500 hover:text-[#3C8AFF]" href="#">Membership</a>
<a className="text-sm text-gray-500 hover:text-[#3C8AFF]" href="#">Lab Tests</a>
<a className="text-sm text-gray-500 hover:text-[#3C8AFF]" href="#">Reviews</a>
</div>
<div className="flex flex-col gap-4">
<h4 className="text-sm font-semibold text-[#0B0B0C]">Resources</h4>
<a className="text-sm text-gray-500 hover:text-[#3C8AFF]" href="#">Biomarker Guides</a>
<a className="text-sm text-gray-500 hover:text-[#3C8AFF]" href="#">Longevity Library</a>
<a className="text-sm text-gray-500 hover:text-[#3C8AFF]" href="#">For Organizations</a>
<a className="text-sm text-gray-500 hover:text-[#3C8AFF]" href="#">For Creators</a>
</div>
</div>
<div className="mt-24 flex flex-col items-center justify-between gap-6 border-t border-gray-100 pt-8 sm:flex-row">
<div className="text-xs text-gray-400">© 2025 SuperXHealth, Inc. All rights reserved.</div>
<div className="flex gap-6 text-xs text-gray-500">
<a className="hover:text-[#0B0B0C]" href="#">Terms</a>
<a className="hover:text-[#0B0B0C]" href="#">Privacy</a>
</div>
<div className="flex gap-4">
<a className="text-gray-400 hover:text-[#0B0B0C]" href="#"><span className="iconify" data-icon="lucide:twitter" data-width="18"></span></a>
<a className="text-gray-400 hover:text-[#0B0B0C]" href="#"><span className="iconify" data-icon="lucide:instagram" data-width="18"></span></a>
<a className="text-gray-400 hover:text-[#0B0B0C]" href="#"><span className="iconify" data-icon="lucide:linkedin" data-width="18"></span></a>
</div>
</div>
</div>
</footer>

    </>
  );
}
