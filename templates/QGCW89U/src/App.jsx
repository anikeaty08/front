import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
    window.addEventListener('DOMContentLoaded', () => {
      lucide.createIcons({ attrs: { strokeWidth: 1.5 } });
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<header className="relative">

<div className="pointer-events-none absolute inset-0 -z-10">
<div className="h-full w-full bg-gradient-to-b from-slate-50 to-white"></div>
<div className="absolute inset-0 opacity-60">
<div className="absolute right-[-10%] top-[-15%] h-[40rem] w-[40rem] rounded-full blur-3xl" style={{background: 'radial-gradient(closest-side, rgba(59,130,246,0.08), transparent 70%)'}}></div>
<div className="absolute left-[-20%] bottom-[-20%] h-[36rem] w-[36rem] rounded-full blur-3xl" style={{background: 'radial-gradient(closest-side, rgba(16,185,129,0.06), transparent 70%)'}}></div>
</div>
</div>

<div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 sm:px-8">
<div className="flex items-center gap-3">
<div className="flex h-9 w-9 items-center justify-center rounded-md border border-slate-200 bg-white shadow-sm">
<span className="text-sm font-semibold tracking-tight text-slate-900">AC</span>
</div>
<div className="hidden sm:block">
<span className="text-sm font-medium text-slate-600">Advisory Collective</span>
</div>
</div>
<div className="hidden items-center gap-6 sm:flex">
<div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs text-slate-600 shadow-sm">
<i className="h-4 w-4 text-slate-500" data-lucide="car"></i>
<span>Automotive Specialists</span>
</div>
</div>
</div>
</header>

<main className="mx-auto max-w-7xl px-6 pb-20 pt-6 sm:px-8 sm:pb-28">
<div className="grid items-center gap-x-16 gap-y-14 md:grid-cols-2">

<div>
<div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs text-slate-600 shadow-sm">
<i className="h-4 w-4 text-slate-500" data-lucide="target"></i>
<span>Strategy &amp; transformation for OEMs and Tier‑1 suppliers</span>
</div>
<h1 className="text-4xl leading-tight tracking-tight sm:text-5xl md:text-6xl font-semibold text-slate-900">
          Clarity and execution for automotive C‑suite leaders
        </h1>
<p className="mt-5 max-w-2xl text-base sm:text-lg text-slate-600">
          We help executives align strategy, operations, and technology—accelerating margin growth and program delivery across complex, global vehicle portfolios.
        </p>
<div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
<a className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-sm outline-none ring-1 ring-slate-900/10 transition hover:bg-slate-800 hover:ring-slate-900/20 focus-visible:ring-2 focus-visible:ring-slate-900" href="#book">
            Book a Strategy Call
            <i className="ml-2 h-[18px] w-[18px]" data-lucide="arrow-right"></i>
</a>
<div className="flex items-center gap-3 text-sm text-slate-600">
<div className="h-6 w-px bg-slate-200 sm:hidden"></div>
<div className="hidden h-5 w-px bg-slate-200 sm:block"></div>
<span>No obligation • 30 minutes</span>
</div>
</div>

<div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
<div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
<i className="h-5 w-5 text-slate-500" data-lucide="line-chart"></i>
<span className="text-sm text-slate-600">Operational excellence</span>
</div>
<div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
<i className="h-5 w-5 text-slate-500" data-lucide="shield-check"></i>
<span className="text-sm text-slate-600">Risk‑aware governance</span>
</div>
<div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
<i className="h-5 w-5 text-slate-500" data-lucide="gauge"></i>
<span className="text-sm text-slate-600">Faster program launches</span>
</div>
</div>
</div>

<div className="relative">
<div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
<div className="mb-4 flex items-center justify-between">
<p className="text-sm font-medium text-slate-700">Your Founding Partners</p>
<div className="flex items-center gap-2 text-xs text-slate-500">
<i className="h-4 w-4" data-lucide="calendar"></i>
<span>Avg. 15+ yrs</span>
</div>
</div>
<div className="grid grid-cols-2 gap-4">

<figure className="group">
<div className="overflow-hidden rounded-xl border border-slate-200 bg-slate-100">
<img alt="Founder portrait" className="h-56 w-full object-cover transition duration-500 group-hover:scale-[1.02]" src="https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
<figcaption className="mt-3">
<div className="flex items-center justify-between">
<p className="text-sm font-medium text-slate-800">Ariana Patel</p>
<i className="h-4 w-4 text-slate-500" data-lucide="badge-check"></i>
</div>
<p className="text-xs text-slate-600">Co‑Founder • Ex‑OEM Strategy</p>
</figcaption>
</figure>

<figure className="group">
<div className="overflow-hidden rounded-xl border border-slate-200 bg-slate-100">
<img alt="Founder portrait" className="h-56 w-full object-cover transition duration-500 group-hover:scale-[1.02]" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
</div>
<figcaption className="mt-3">
<div className="flex items-center justify-between">
<p className="text-sm font-medium text-slate-800">Marcus Nguyen</p>
<i className="h-4 w-4 text-slate-500" data-lucide="badge-check"></i>
</div>
<p className="text-xs text-slate-600">Co‑Founder • Tier‑1 Ops &amp; PMO</p>
</figcaption>
</figure>
</div>
<div className="mt-5 flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
<div className="flex items-center gap-3">
<i className="h-5 w-5 text-slate-500" data-lucide="briefcase"></i>
<p className="text-sm text-slate-700">Programs across EV, ADAS, and interiors</p>
</div>
<div className="hidden text-xs text-slate-500 sm:block">North America • Europe • APAC</div>
</div>
</div>
</div>
</div>
</main>

<div className="mx-auto max-w-7xl px-6 pb-14 sm:px-8">
<div className="flex flex-col items-start justify-between gap-4 rounded-xl border border-slate-200 bg-white px-5 py-4 shadow-sm sm:flex-row sm:items-center">
<p className="text-xs text-slate-600">
        We work with executive teams under strict confidentiality. References available upon request.
      </p>
<a className="inline-flex items-center gap-2 text-xs font-medium text-slate-700 hover:text-slate-900" href="#book">
<i className="h-4 w-4" data-lucide="phone"></i>
<span>Speak with a partner</span>
</a>
</div>
</div>




    </>
  );
}
