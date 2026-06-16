import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
primary: {
50: '#eff6ff',
100: '#dbeafe',
500: '#3b82f6',
600: '#2563EB', // Specified Blue
700: '#1d4ed8',
900: '#1e3a8a',
}
}
}
}
}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
<div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
<div className="flex items-center gap-12">
<a className="group flex items-center gap-2" href="#">
<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-600 text-white shadow-md transition group-hover:bg-primary-700">
<iconify-icon icon="lucide:zap" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-lg font-bold tracking-tight text-slate-900">ServiceCall.com</span>
<span className="text-[10px] font-medium uppercase tracking-wider text-slate-500">Lead Intelligence Platform</span>
</div>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-slate-500 transition hover:text-slate-900" href="#features">Features</a>
<a className="text-sm font-medium text-slate-500 transition hover:text-slate-900" href="#integrations">Integrations</a>
<a className="text-sm font-medium text-slate-500 transition hover:text-slate-900" href="#pricing">Pricing</a>
<a className="text-sm font-medium text-slate-500 transition hover:text-slate-900" href="#data">Data Sources</a>
</div>
</div>
<div className="flex items-center gap-4">
<a className="hidden text-sm font-medium text-slate-600 hover:text-slate-900 md:block" href="#">Log in</a>
<a className="rounded-lg bg-primary-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-primary-700 focus:ring-2 focus:ring-primary-500 focus:ring-offset-2" href="#">Start Free Trial</a>
</div>
</div>
</nav>

<section className="relative overflow-hidden pt-20 pb-32">
<div className="absolute inset-0 bg-gradient-to-b from-primary-50 to-transparent -z-10"></div>
<div className="mx-auto max-w-7xl px-6 text-center">
<div className="mx-auto mb-8 inline-flex items-center gap-2 rounded-full border border-primary-100 bg-white px-3 py-1 shadow-sm">
<span className="flex h-2 w-2 rounded-full bg-primary-600"></span>
<span className="text-xs font-medium text-primary-600">Powered by 5 Critical Data Sources</span>
</div>
<h1 className="mx-auto mb-6 max-w-4xl text-5xl font-semibold tracking-tight text-slate-900 md:text-7xl">
                Know Everything About<br/>
<span className="text-slate-400">Your Leads Before You Call</span>
</h1>
<p className="mx-auto mb-12 max-w-2xl text-lg text-slate-500 leading-relaxed">
                Property value. Home equity. HVAC system age. Solar potential. Available rebates. <span className="text-slate-900 font-medium">Automatically added to every lead in your CRM.</span>
</p>

<div className="relative mx-auto max-w-5xl">

<div className="absolute -top-12 -left-12 h-64 w-64 rounded-full bg-blue-400/20 blur-3xl filter"></div>
<div className="absolute -bottom-12 -right-12 h-64 w-64 rounded-full bg-indigo-400/20 blur-3xl filter"></div>
<div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl md:p-8 text-left">

<div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 border-b border-slate-100 pb-6">
<div className="flex items-center gap-4">
<div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-slate-400">
<iconify-icon icon="lucide:user" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-semibold text-slate-900 tracking-tight">Robert Williams</h3>
<div className="flex items-center gap-2 text-sm text-slate-500">
<iconify-icon icon="lucide:map-pin" width="14"></iconify-icon>
                                    248 Pine Valley Dr, Austin TX
                                </div>
</div>
</div>
<div className="flex items-center gap-3">
<div className="flex flex-col items-end">
<span className="text-xs font-medium uppercase tracking-wider text-slate-400">Lead Score</span>
<div className="flex items-center gap-1 text-emerald-600">
<iconify-icon icon="lucide:trending-up" width="16"></iconify-icon>
<span className="text-2xl font-bold tracking-tight">92</span>
</div>
</div>
<div className="h-10 w-10 rounded-full border-4 border-emerald-500/20 p-0.5">
<div className="h-full w-full rounded-full bg-emerald-500"></div>
</div>
</div>
</div>

<div className="mb-4 text-xs font-bold uppercase tracking-wider text-slate-400">Enriched Data Insights</div>
<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">

<div className="group rounded-xl border border-slate-100 bg-slate-50/50 p-5 hover:border-emerald-200 hover:bg-emerald-50/30 transition">
<div className="mb-3 flex items-center justify-between">
<div className="flex items-center gap-2 text-emerald-600">
<iconify-icon icon="lucide:home" width="18"></iconify-icon>
<span className="text-xs font-semibold uppercase tracking-wide">Home Equity</span>
</div>
<iconify-icon className="text-emerald-500" icon="lucide:check-circle-2" width="16"></iconify-icon>
</div>
<div className="mb-1 text-2xl font-semibold text-slate-900 tracking-tight">$250K <span className="text-sm font-normal text-slate-500">est.</span></div>
<p className="mb-4 text-xs text-slate-500">Verified owner, 100% confidence</p>

<div className="flex h-12 items-end gap-1.5 border-b border-slate-200 pb-1">
<div className="w-full rounded-t bg-emerald-200/50 h-[30%]"></div>
<div className="w-full rounded-t bg-emerald-300/50 h-[50%]"></div>
<div className="w-full rounded-t bg-emerald-400/50 h-[40%]"></div>
<div className="w-full rounded-t bg-emerald-500 h-[85%] relative group">
<div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] py-0.5 px-1.5 rounded opacity-0 group-hover:opacity-100 transition">Current</div>
</div>
<div className="w-full rounded-t bg-emerald-200/50 h-[60%]"></div>
</div>
</div>

<div className="group rounded-xl border border-slate-100 bg-slate-50/50 p-5 hover:border-blue-200 hover:bg-blue-50/30 transition">
<div className="mb-3 flex items-center justify-between">
<div className="flex items-center gap-2 text-blue-600">
<iconify-icon icon="lucide:bar-chart-3" width="18"></iconify-icon>
<span className="text-xs font-semibold uppercase tracking-wide">Property Value</span>
</div>
</div>
<div className="mb-1 text-2xl font-semibold text-slate-900 tracking-tight">$485K</div>
<div className="flex items-center gap-1 text-xs font-medium text-blue-600">
<iconify-icon icon="lucide:arrow-up-right" width="12"></iconify-icon>
                                12% vs last year
                            </div>

<div className="mt-4 h-10 w-full relative">
<svg className="h-full w-full overflow-visible" preserveaspectratio="none" viewbox="0 0 100 40">
<path d="M0 35 C 20 35, 30 20, 50 25 S 70 5, 100 0" fill="none" stroke="#3b82f6" strokeWidth="2" vector-effect="non-scaling-stroke"></path>
<circle className="fill-blue-600" cx="100" cy="0" r="3"></circle>
</svg>
</div>
</div>

<div className="group rounded-xl border border-slate-100 bg-slate-50/50 p-5 hover:border-orange-200 hover:bg-orange-50/30 transition">
<div className="mb-3 flex items-center justify-between">
<div className="flex items-center gap-2 text-orange-600">
<iconify-icon icon="lucide:clipboard-list" width="18"></iconify-icon>
<span className="text-xs font-semibold uppercase tracking-wide">Permit History</span>
</div>
<span className="rounded bg-red-100 px-1.5 py-0.5 text-[10px] font-bold text-red-600 uppercase">Replace Soon</span>
</div>
<div className="mb-1 text-lg font-semibold text-slate-900">HVAC System</div>
<p className="text-sm text-slate-500 mb-4">Installed 2010 • <span className="font-medium text-orange-600">14 years old</span></p>

<div className="relative mt-2 h-1.5 w-full rounded-full bg-slate-200">
<div className="absolute left-0 h-full w-[85%] rounded-full bg-gradient-to-r from-green-400 via-yellow-400 to-red-500"></div>
<div className="absolute right-[15%] top-1/2 h-3 w-1 -translate-y-1/2 bg-slate-900"></div>
</div>
<div className="mt-1 flex justify-between text-[10px] text-slate-400">
<span>New</span>
<span>End of Life</span>
</div>
</div>

<div className="group rounded-xl border border-slate-100 bg-slate-50/50 p-5 hover:border-amber-200 hover:bg-amber-50/30 transition">
<div className="mb-3 flex items-center justify-between">
<div className="flex items-center gap-2 text-amber-500">
<iconify-icon icon="lucide:zap" width="18"></iconify-icon>
<span className="text-xs font-semibold uppercase tracking-wide">Energy Savings</span>
</div>
<iconify-icon className="text-amber-400" icon="lucide:calculator" width="16"></iconify-icon>
</div>
<div className="flex items-baseline gap-1">
<span className="text-2xl font-semibold text-slate-900 tracking-tight">$1,100</span>
<span className="text-sm text-slate-500">/year</span>
</div>
<p className="text-xs text-slate-500 mt-1">Projected savings with new HVAC</p>
<div className="mt-3 flex items-center gap-2 text-xs font-medium text-amber-600 bg-amber-50 px-2 py-1 rounded w-fit">
<iconify-icon icon="lucide:timer" width="12"></iconify-icon>
                                7-year ROI
                            </div>
</div>

<div className="col-span-1 md:col-span-2 lg:col-span-1 group rounded-xl border border-slate-100 bg-slate-50/50 p-5 hover:border-violet-200 hover:bg-violet-50/30 transition">
<div className="mb-3 flex items-center justify-between">
<div className="flex items-center gap-2 text-violet-600">
<iconify-icon icon="lucide:badge-dollar-sign" width="18"></iconify-icon>
<span className="text-xs font-semibold uppercase tracking-wide">Rebates</span>
</div>
</div>
<div className="mb-1 text-2xl font-semibold text-slate-900 tracking-tight">$5,000</div>
<p className="text-xs text-slate-500 mb-3">Total available incentives</p>
<div className="space-y-2">
<div className="flex items-center justify-between rounded bg-white p-2 text-xs shadow-sm">
<span className="font-medium text-slate-700">Federal IRA Credit</span>
<span className="font-bold text-emerald-600">+$4,500</span>
</div>
<div className="flex items-center justify-between rounded bg-white p-2 text-xs shadow-sm">
<span className="font-medium text-slate-700">Utility Rebate</span>
<span className="font-bold text-emerald-600">+$500</span>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
<button className="rounded-lg bg-primary-600 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-primary-600/20 transition hover:bg-primary-700 hover:-translate-y-0.5">
                    Start Free Trial
                </button>
<button className="group flex items-center gap-2 rounded-lg bg-white px-8 py-3 text-sm font-semibold text-slate-700 shadow-sm border border-slate-200 transition hover:bg-slate-50 hover:text-slate-900">
                    See Sample Data
                    <iconify-icon className="transition group-hover:translate-x-1" icon="lucide:arrow-right" width="16"></iconify-icon>
</button>
</div>
</div>
</section>

<section className="bg-white py-24" id="data">
<div className="mx-auto max-w-6xl px-6">
<h2 className="mb-16 text-center text-4xl font-semibold tracking-tight text-slate-900">
                The Most Comprehensive<br/>Lead Intelligence Platform
            </h2>
<div className="flex flex-wrap justify-center gap-8">

<div className="flex w-full flex-col rounded-2xl border border-slate-200 p-8 transition hover:shadow-lg md:w-[calc(33.33%-1.5rem)]">
<div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
<iconify-icon icon="lucide:home" width="28"></iconify-icon>
</div>
<h3 className="mb-2 text-xl font-semibold text-slate-900">Home Equity Data</h3>
<p className="mb-6 text-sm leading-relaxed text-slate-500">See exactly how much financial capacity each homeowner has before you pitch.</p>
<div className="mt-auto rounded-lg bg-slate-50 p-4 border border-slate-100">
<div className="text-xs font-medium text-slate-400 uppercase mb-1">Insight</div>
<div className="text-sm font-medium text-slate-800">$250K equity = prime for $15K HVAC upgrade</div>
</div>
</div>

<div className="flex w-full flex-col rounded-2xl border border-slate-200 p-8 transition hover:shadow-lg md:w-[calc(33.33%-1.5rem)]">
<div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
<iconify-icon icon="lucide:trending-up" width="28"></iconify-icon>
</div>
<h3 className="mb-2 text-xl font-semibold text-slate-900">Property Values</h3>
<p className="mb-6 text-sm leading-relaxed text-slate-500">Current value, comparables, and appreciation trends to gauge investment mindset.</p>
<div className="mt-auto rounded-lg bg-slate-50 p-4 border border-slate-100">
<div className="text-xs font-medium text-slate-400 uppercase mb-1">Insight</div>
<div className="text-sm font-medium text-slate-800">Value up 12% YoY = homeowner feels wealthy</div>
</div>
</div>

<div className="flex w-full flex-col rounded-2xl border border-slate-200 p-8 transition hover:shadow-lg md:w-[calc(33.33%-1.5rem)]">
<div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
<iconify-icon icon="lucide:file-text" width="28"></iconify-icon>
</div>
<h3 className="mb-2 text-xl font-semibold text-slate-900">Permit History</h3>
<p className="mb-6 text-sm leading-relaxed text-slate-500">Know the exact age of every major system based on historical permit records.</p>
<div className="mt-auto rounded-lg bg-slate-50 p-4 border border-slate-100">
<div className="text-xs font-medium text-slate-400 uppercase mb-1">Insight</div>
<div className="text-sm font-medium text-slate-800">HVAC 2010 (14 yrs) = urgent need</div>
</div>
</div>

<div className="flex w-full flex-col rounded-2xl border border-slate-200 p-8 transition hover:shadow-lg md:w-[calc(40%-1rem)]">
<div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
<iconify-icon icon="lucide:zap" width="28"></iconify-icon>
</div>
<h3 className="mb-2 text-xl font-semibold text-slate-900">Energy Calculations</h3>
<p className="mb-6 text-sm leading-relaxed text-slate-500">Projected savings for every upgrade type based on local utility rates and home efficiency.</p>
<div className="mt-auto rounded-lg bg-slate-50 p-4 border border-slate-100 flex items-center gap-3">
<iconify-icon className="text-blue-500" icon="lucide:calculator" width="20"></iconify-icon>
<div className="text-sm font-medium text-slate-800">$1,100/yr savings = 7-year ROI</div>
</div>
</div>

<div className="flex w-full flex-col rounded-2xl border border-slate-200 p-8 transition hover:shadow-lg md:w-[calc(40%-1rem)]">
<div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
<iconify-icon icon="lucide:gift" width="28"></iconify-icon>
</div>
<h3 className="mb-2 text-xl font-semibold text-slate-900">Rebates &amp; Incentives</h3>
<p className="mb-6 text-sm leading-relaxed text-slate-500">Automatically match properties with federal, state, and local utility rebate programs.</p>
<div className="mt-auto rounded-lg bg-slate-50 p-4 border border-slate-100 flex gap-2">
<span className="inline-flex items-center rounded bg-blue-100 px-2 py-1 text-xs font-medium text-blue-700">Federal</span>
<span className="inline-flex items-center rounded bg-purple-100 px-2 py-1 text-xs font-medium text-purple-700">State</span>
<span className="inline-flex items-center rounded bg-orange-100 px-2 py-1 text-xs font-medium text-orange-700">Utility</span>
</div>
</div>
</div>
</div>
</section>

<section className="bg-slate-50 py-20 border-y border-slate-200">
<div className="mx-auto max-w-6xl px-6">
<h2 className="mb-12 text-center text-3xl font-semibold tracking-tight text-slate-900">Data You Can Trust</h2>
<div className="grid gap-12 md:grid-cols-3">
<div className="text-center">
<div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-sm border border-slate-100 text-primary-600">
<iconify-icon icon="lucide:refresh-cw" width="32"></iconify-icon>
</div>
<h3 className="mb-2 text-lg font-semibold text-slate-900">Real-Time Updates</h3>
<p className="text-sm text-slate-500">Permit and rebate data updated daily to ensure you never miss an opportunity.</p>
</div>
<div className="text-center">
<div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-sm border border-slate-100 text-primary-600">
<iconify-icon icon="lucide:shield-check" width="32"></iconify-icon>
</div>
<h3 className="mb-2 text-lg font-semibold text-slate-900">Multi-Source Verification</h3>
<p className="text-sm text-slate-500">Cross-referenced data from property taxes, MLS, and permits for maximum confidence.</p>
</div>
<div className="text-center">
<div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-sm border border-slate-100 text-primary-600">
<iconify-icon icon="lucide:target" width="32"></iconify-icon>
</div>
<h3 className="mb-2 text-lg font-semibold text-slate-900">95%+ Accuracy</h3>
<p className="text-sm text-slate-500">The highest accuracy rates in the industry, trusted by over 2,000 contractors.</p>
</div>
</div>
</div>
</section>

<section className="bg-white py-24">
<div className="mx-auto max-w-7xl px-6">
<h2 className="mb-4 text-center text-4xl font-semibold tracking-tight text-slate-900">See the Difference Data Makes</h2>
<p className="mb-16 text-center text-lg text-slate-500">Stop guessing. Start knowing.</p>
<div className="relative grid gap-8 md:grid-cols-2">

<div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-slate-900 px-6 py-2 text-sm font-semibold text-white shadow-xl ring-4 ring-white">
                    From Guesswork to Intelligence
                </div>

<div className="flex flex-col rounded-2xl border border-slate-200 bg-slate-50 p-6 md:p-8 grayscale opacity-75">
<div className="mb-6 flex items-center justify-between">
<h3 className="text-lg font-bold text-slate-400">Without ServiceCall.com</h3>
<span className="rounded bg-slate-200 px-2 py-1 text-xs font-bold text-slate-500">GUESSWORK</span>
</div>
<div className="space-y-4 rounded-xl bg-white p-6 shadow-sm border border-slate-200">
<div className="h-6 w-1/2 rounded bg-slate-100"></div> 
<div className="h-4 w-3/4 rounded bg-slate-100"></div> 
<div className="my-6 border-t border-slate-100"></div>

<div className="space-y-3">
<div className="flex justify-between"><div className="h-4 w-24 bg-slate-100 rounded"></div><div className="h-4 w-12 bg-slate-100 rounded"></div></div>
<div className="flex justify-between"><div className="h-4 w-24 bg-slate-100 rounded"></div><div className="h-4 w-12 bg-slate-100 rounded"></div></div>
<div className="flex justify-between"><div className="h-4 w-24 bg-slate-100 rounded"></div><div className="h-4 w-12 bg-slate-100 rounded"></div></div>
</div>
</div>
<div className="mt-6 flex items-start gap-3">
<iconify-icon className="text-slate-400 mt-1" icon="lucide:message-circle" width="20"></iconify-icon>
<p className="text-sm italic text-slate-500">"Is this qualified? What's their budget? Do they need HVAC? What rebates are there?"</p>
</div>
</div>

<div className="flex flex-col rounded-2xl border border-primary-100 bg-gradient-to-b from-primary-50/50 to-white p-6 md:p-8 shadow-xl ring-1 ring-primary-100">
<div className="mb-6 flex items-center justify-between">
<h3 className="text-lg font-bold text-primary-700">With ServiceCall.com</h3>
<span className="rounded bg-primary-100 px-2 py-1 text-xs font-bold text-primary-700">INTELLIGENCE</span>
</div>
<div className="space-y-4 rounded-xl bg-white p-6 shadow-sm border border-slate-200">
<div className="flex justify-between items-center">
<div className="text-lg font-semibold text-slate-900">Robert Williams</div>
<div className="rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-bold text-emerald-700">Score: 92</div>
</div>
<div className="text-sm text-slate-500">248 Pine Valley Dr, Austin TX</div>
<div className="my-4 border-t border-slate-100"></div>

<div className="grid grid-cols-2 gap-3">
<div className="rounded bg-emerald-50 p-2 border border-emerald-100">
<div className="text-[10px] text-emerald-600 font-semibold">Equity</div>
<div className="text-sm font-bold text-slate-800">$250K</div>
</div>
<div className="rounded bg-orange-50 p-2 border border-orange-100">
<div className="text-[10px] text-orange-600 font-semibold">System Age</div>
<div className="text-sm font-bold text-slate-800">14 Years</div>
</div>
<div className="col-span-2 rounded bg-violet-50 p-2 border border-violet-100 flex justify-between items-center">
<div>
<div className="text-[10px] text-violet-600 font-semibold">Total Rebates</div>
<div className="text-sm font-bold text-slate-800">$5,000 Available</div>
</div>
<iconify-icon className="text-violet-500" icon="lucide:check-circle" width="16"></iconify-icon>
</div>
</div>
</div>
<div className="mt-6 flex items-start gap-3">
<iconify-icon className="text-primary-500 mt-1" icon="lucide:message-circle" width="20"></iconify-icon>
<p className="text-sm font-medium text-slate-700">"Perfect! High equity, 14-yr HVAC, $5K rebates available. I'll pitch the premium heat pump."</p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-gradient-to-b from-blue-50 to-white py-24 overflow-hidden">
<div className="mx-auto max-w-6xl px-6 text-center">
<h2 className="mb-16 text-4xl font-semibold tracking-tight text-slate-900">How the Data Flows</h2>
<div className="relative flex flex-col md:flex-row items-center justify-center gap-6">

<div className="relative z-10 flex flex-col items-center gap-4">
<div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-white shadow-md border border-slate-200 text-slate-400">
<iconify-icon icon="lucide:users" width="32"></iconify-icon>
</div>
<div className="font-semibold text-slate-900">Lead In CRM</div>
</div>

<iconify-icon className="hidden md:block text-slate-300" icon="lucide:arrow-right" width="24"></iconify-icon>
<iconify-icon className="md:hidden text-slate-300" icon="lucide:arrow-down" width="24"></iconify-icon>

<div className="relative z-10 flex flex-col items-center gap-4">
<div className="relative flex h-24 w-24 items-center justify-center rounded-2xl bg-primary-600 shadow-xl shadow-primary-500/30 text-white animate-pulse">
<iconify-icon icon="lucide:zap" width="40"></iconify-icon>

<div className="absolute -top-4 -right-4 h-8 w-8 rounded-full bg-white text-emerald-500 flex items-center justify-center shadow-sm border border-slate-100"><iconify-icon icon="lucide:dollar-sign" width="14"></iconify-icon></div>
<div className="absolute -bottom-4 -right-4 h-8 w-8 rounded-full bg-white text-blue-500 flex items-center justify-center shadow-sm border border-slate-100"><iconify-icon icon="lucide:home" width="14"></iconify-icon></div>
<div className="absolute -top-4 -left-4 h-8 w-8 rounded-full bg-white text-orange-500 flex items-center justify-center shadow-sm border border-slate-100"><iconify-icon icon="lucide:file-text" width="14"></iconify-icon></div>
<div className="absolute -bottom-4 -left-4 h-8 w-8 rounded-full bg-white text-violet-500 flex items-center justify-center shadow-sm border border-slate-100"><iconify-icon icon="lucide:gift" width="14"></iconify-icon></div>
</div>
<div className="font-semibold text-primary-700">Enrichment</div>
<div className="text-xs text-slate-500 bg-white px-2 py-1 rounded border border-slate-200 shadow-sm">&lt; 5 seconds</div>
</div>

<iconify-icon className="hidden md:block text-slate-300" icon="lucide:arrow-right" width="24"></iconify-icon>
<iconify-icon className="md:hidden text-slate-300" icon="lucide:arrow-down" width="24"></iconify-icon>

<div className="relative z-10 flex flex-col items-center gap-4">
<div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-white shadow-md border border-slate-200 text-emerald-500">
<iconify-icon icon="lucide:check-circle-2" width="32"></iconify-icon>
</div>
<div className="font-semibold text-slate-900">Fully Enriched Lead</div>
</div>
</div>
</div>
</section>

<section className="bg-white py-24" id="integrations">
<div className="mx-auto max-w-6xl px-6">
<h2 className="mb-16 text-center text-4xl font-semibold tracking-tight text-slate-900">Seamlessly Integrates With Your CRM</h2>
<div className="rounded-2xl border border-slate-200 bg-slate-50 p-2">

<div className="flex overflow-x-auto pb-2 md:pb-0 hide-scrollbar gap-2 mb-2 px-2">
<button className="whitespace-nowrap rounded-lg bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm ring-1 ring-slate-200">Service Titan</button>
<button className="whitespace-nowrap rounded-lg px-4 py-2 text-sm font-medium text-slate-500 hover:bg-white hover:text-slate-900 transition">Jobber</button>
<button className="whitespace-nowrap rounded-lg px-4 py-2 text-sm font-medium text-slate-500 hover:bg-white hover:text-slate-900 transition">Housecall Pro</button>
<button className="whitespace-nowrap rounded-lg px-4 py-2 text-sm font-medium text-slate-500 hover:bg-white hover:text-slate-900 transition">Contractor Plus</button>
</div>

<div className="relative overflow-hidden rounded-xl border border-slate-200 bg-white shadow-lg">

<div className="flex items-center gap-2 border-b border-slate-100 bg-slate-50 px-4 py-3">
<div className="flex gap-1.5">
<div className="h-3 w-3 rounded-full bg-red-400"></div>
<div className="h-3 w-3 rounded-full bg-yellow-400"></div>
<div className="h-3 w-3 rounded-full bg-green-400"></div>
</div>
</div>

<div className="grid grid-cols-12 h-[400px]">

<div className="col-span-2 hidden border-r border-slate-100 bg-slate-50 md:block"></div>

<div className="col-span-12 md:col-span-7 bg-white p-6">
<div className="h-4 w-32 bg-slate-200 rounded mb-4"></div>
<div className="space-y-2 mb-6">
<div className="h-3 w-full bg-slate-100 rounded"></div>
<div className="h-3 w-5/6 bg-slate-100 rounded"></div>
</div>
<div className="h-4 w-24 bg-slate-200 rounded mb-4"></div>
<div className="grid grid-cols-2 gap-4">
<div className="h-20 bg-slate-50 border border-slate-100 rounded"></div>
<div className="h-20 bg-slate-50 border border-slate-100 rounded"></div>
</div>
</div>

<div className="col-span-12 md:col-span-3 border-l border-slate-200 bg-blue-50/30 p-4 relative">
<div className="absolute top-4 right-4 animate-bounce">
<span className="rounded bg-primary-600 px-2 py-1 text-[10px] font-bold text-white shadow-sm">AUTO-SYNC</span>
</div>
<div className="mb-4 text-xs font-bold text-slate-400 uppercase tracking-wider">ServiceCall Data</div>
<div className="space-y-3">
<div className="rounded border border-blue-100 bg-white p-2 shadow-sm">
<div className="text-[10px] text-slate-500">Equity</div>
<div className="font-semibold text-slate-800">$250,000</div>
</div>
<div className="rounded border border-blue-100 bg-white p-2 shadow-sm">
<div className="text-[10px] text-slate-500">Rebates</div>
<div className="font-semibold text-slate-800">$5,000</div>
</div>
<div className="rounded border border-blue-100 bg-white p-2 shadow-sm">
<div className="text-[10px] text-slate-500">HVAC Age</div>
<div className="font-semibold text-slate-800">14 Years</div>
</div>
</div>
<div className="mt-8 text-center text-xs text-slate-400">
                                Maps to custom fields automatically.<br/>No workflow changes.
                            </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-slate-50 py-24">
<div className="mx-auto max-w-6xl px-6">
<h2 className="mb-16 text-center text-4xl font-semibold tracking-tight text-slate-900">Data-Driven Conversations for Every Trade</h2>
<div className="grid gap-8 md:grid-cols-2">

<div className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white p-6 transition hover:shadow-lg hover:-translate-y-1">
<div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
<iconify-icon icon="lucide:fan" width="24"></iconify-icon>
</div>
<h3 className="mb-2 text-xl font-semibold text-slate-900">HVAC Upgrade</h3>
<p className="mb-6 text-sm text-slate-500">"14-year-old system + $250K equity + $5K rebates = <span className="text-slate-900 font-medium">perfect premium upgrade candidate</span>"</p>
<a className="text-sm font-medium text-blue-600 hover:text-blue-700 flex items-center gap-1" href="#">
                        See HVAC Use Case <iconify-icon icon="lucide:arrow-right" width="14"></iconify-icon>
</a>
</div>

<div className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white p-6 transition hover:shadow-lg hover:-translate-y-1">
<div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
<iconify-icon icon="lucide:sun" width="24"></iconify-icon>
</div>
<h3 className="mb-2 text-xl font-semibold text-slate-900">Solar Installation</h3>
<p className="mb-6 text-sm text-slate-500">"1,450 sqft roof + excellent orientation + $10K tax credit = <span className="text-slate-900 font-medium">highly qualified solar lead</span>"</p>
<a className="text-sm font-medium text-blue-600 hover:text-blue-700 flex items-center gap-1" href="#">
                        See Solar Use Case <iconify-icon icon="lucide:arrow-right" width="14"></iconify-icon>
</a>
</div>

<div className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white p-6 transition hover:shadow-lg hover:-translate-y-1">
<div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-100 text-cyan-600">
<iconify-icon icon="lucide:droplets" width="24"></iconify-icon>
</div>
<h3 className="mb-2 text-xl font-semibold text-slate-900">Repiping Project</h3>
<p className="mb-6 text-sm text-slate-500">"High property value + recent kitchen permit + good equity = <span className="text-slate-900 font-medium">upsell opportunity for repiping</span>"</p>
<a className="text-sm font-medium text-blue-600 hover:text-blue-700 flex items-center gap-1" href="#">
                        See Plumbing Use Case <iconify-icon icon="lucide:arrow-right" width="14"></iconify-icon>
</a>
</div>

<div className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white p-6 transition hover:shadow-lg hover:-translate-y-1">
<div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-yellow-100 text-yellow-600">
<iconify-icon icon="lucide:zap-off" width="24"></iconify-icon>
</div>
<h3 className="mb-2 text-xl font-semibold text-slate-900">Panel Upgrade</h3>
<p className="mb-6 text-sm text-slate-500">"Old panel (1995) + EV interest + rebates = <span className="text-slate-900 font-medium">panel upgrade + charger install</span>"</p>
<a className="text-sm font-medium text-blue-600 hover:text-blue-700 flex items-center gap-1" href="#">
                        See Electrical Use Case <iconify-icon icon="lucide:arrow-right" width="14"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="bg-white py-24" id="pricing">
<div className="mx-auto max-w-6xl px-6">
<h2 className="mb-16 text-center text-4xl font-semibold tracking-tight text-slate-900">Choose Your Data Package</h2>
<div className="grid gap-8 md:grid-cols-3">

<div className="flex flex-col rounded-2xl border border-slate-200 p-8">
<h3 className="mb-2 text-xl font-semibold text-slate-900">Free Trial</h3>
<div className="mb-6 flex items-baseline gap-1">
<span className="text-4xl font-bold text-slate-900">$0</span>
<span className="text-slate-500">/month</span>
</div>
<p className="mb-6 text-sm text-slate-500">See the data difference risk-free.</p>
<a className="mb-8 block w-full rounded-lg border border-slate-200 bg-white px-4 py-2 text-center text-sm font-semibold text-slate-900 hover:bg-slate-50" href="#">Start Free</a>
<ul className="space-y-3 text-sm text-slate-600">
<li className="flex items-center gap-2"><iconify-icon className="text-green-500" icon="lucide:check"></iconify-icon> All 5 Data Sources</li>
<li className="flex items-center gap-2"><iconify-icon className="text-green-500" icon="lucide:check"></iconify-icon> 50 lead enrichments</li>
</ul>
</div>

<div className="relative flex flex-col rounded-2xl border-2 border-primary-600 bg-slate-50 p-8 shadow-xl">
<div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary-600 px-3 py-1 text-xs font-bold text-white uppercase tracking-wide">Most Popular</div>
<h3 className="mb-2 text-xl font-semibold text-slate-900">Starter</h3>
<div className="mb-6 flex items-baseline gap-1">
<span className="text-4xl font-bold text-slate-900">$149</span>
<span className="text-slate-500">/month</span>
</div>
<p className="mb-6 text-sm text-slate-500">Perfect for growing residential contractors.</p>
<a className="mb-8 block w-full rounded-lg bg-primary-600 px-4 py-2 text-center text-sm font-semibold text-white hover:bg-primary-700 shadow-md" href="#">Get Started</a>
<ul className="space-y-3 text-sm text-slate-600">
<li className="flex items-center gap-2"><iconify-icon className="text-green-500" icon="lucide:check"></iconify-icon> All 5 data sources</li>
<li className="flex items-center gap-2"><iconify-icon className="text-green-500" icon="lucide:check"></iconify-icon> 150 leads/month</li>
<li className="flex items-center gap-2"><iconify-icon className="text-green-500" icon="lucide:check"></iconify-icon> Real-time updates</li>
<li className="flex items-center gap-2"><iconify-icon className="text-green-500" icon="lucide:check"></iconify-icon> CRM Integration</li>
</ul>
</div>

<div className="flex flex-col rounded-2xl border border-slate-200 p-8">
<h3 className="mb-2 text-xl font-semibold text-slate-900">Pro</h3>
<div className="mb-6 flex items-baseline gap-1">
<span className="text-4xl font-bold text-slate-900">$299</span>
<span className="text-slate-500">/month</span>
</div>
<p className="mb-6 text-sm text-slate-500">For high-volume teams requiring scale.</p>
<a className="mb-8 block w-full rounded-lg border border-slate-200 bg-white px-4 py-2 text-center text-sm font-semibold text-slate-900 hover:bg-slate-50" href="#">Contact Sales</a>
<ul className="space-y-3 text-sm text-slate-600">
<li className="flex items-center gap-2"><iconify-icon className="text-green-500" icon="lucide:check"></iconify-icon> Unlimited Data Access</li>
<li className="flex items-center gap-2"><iconify-icon className="text-green-500" icon="lucide:check"></iconify-icon> Unlimited leads</li>
<li className="flex items-center gap-2"><iconify-icon className="text-green-500" icon="lucide:check"></iconify-icon> Custom data fields</li>
<li className="flex items-center gap-2"><iconify-icon className="text-slate-400" icon="lucide:clock"></iconify-icon> API access (Q2 2026)</li>
</ul>
</div>
</div>
</div>
</section>

<section className="bg-gradient-to-br from-primary-800 to-primary-900 py-24 text-center">
<div className="mx-auto max-w-4xl px-6">
<h2 className="mb-4 text-5xl font-bold tracking-tight text-white">Turn Your Leads Into Intelligence</h2>
<p className="mb-10 text-xl text-primary-200">See what 2,000+ contractors already know about their leads with ServiceCall.com</p>
<div className="flex flex-col items-center gap-4">
<a className="rounded-lg bg-white px-8 py-4 text-lg font-bold text-primary-700 shadow-xl transition hover:bg-primary-50 hover:scale-105" href="#">
                    Start Free Trial at ServiceCall.com
                </a>
<p className="text-sm font-medium text-primary-300">30 days free • No credit card • Access all 5 data sources</p>
</div>
</div>
</section>

<footer className="bg-slate-900 py-16 text-slate-400">
<div className="mx-auto max-w-7xl px-6">
<div className="grid gap-12 md:grid-cols-4">
<div className="col-span-1">
<a className="flex items-center gap-2 text-white mb-4" href="#">
<iconify-icon icon="lucide:zap" width="20"></iconify-icon>
<span className="font-bold">ServiceCall.com</span>
</a>
<p className="text-sm">Lead Intelligence Platform.</p>
</div>
<div>
<h4 className="mb-4 font-semibold text-white">Product</h4>
<ul className="space-y-2 text-sm">
<li><a className="hover:text-white" href="#">Features</a></li>
<li><a className="hover:text-white" href="#">Integrations</a></li>
<li><a className="hover:text-white" href="#">Data Accuracy</a></li>
<li><a className="hover:text-white" href="#">Pricing</a></li>
</ul>
</div>
<div>
<h4 className="mb-4 font-semibold text-white">Resources</h4>
<ul className="space-y-2 text-sm">
<li><a className="hover:text-white" href="#">Blog</a></li>
<li><a className="hover:text-white" href="#">Case Studies</a></li>
<li><a className="hover:text-white" href="#">Help Center</a></li>
<li><a className="hover:text-white" href="#">API Docs</a></li>
</ul>
</div>
<div>
<h4 className="mb-4 font-semibold text-white">Company</h4>
<ul className="space-y-2 text-sm">
<li><a className="hover:text-white" href="#">About</a></li>
<li><a className="hover:text-white" href="#">Careers</a></li>
<li><a className="hover:text-white" href="#">Legal</a></li>
<li><a className="hover:text-white" href="#">Contact</a></li>
</ul>
</div>
</div>
<div className="mt-16 border-t border-slate-800 pt-8 text-center text-sm">
                © 2026 ServiceCall.com. All rights reserved.
            </div>
</div>
</footer>

    </>
  );
}
