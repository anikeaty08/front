import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    // Initialize lucide icons
    lucide.createIcons();

    // Mobile apply button behavior
    document.getElementById('mobileApply')?.addEventListener('click', () => {
      window.location.href = 'https://example.com/apply';
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="px-6 md:px-10 py-6">
<div className="flex items-center justify-between">
<a className="text-xl md:text-2xl font-semibold tracking-tight" href="#">BETER Fellowship</a>
<nav className="hidden md:flex items-center gap-8 text-sm">
<a className="text-zinc-700 hover:text-zinc-900 transition" href="#program">Program</a>
<a className="text-zinc-700 hover:text-zinc-900 transition" href="#companies">Companies</a>
<a className="inline-flex items-center gap-1.5 text-zinc-900 hover:opacity-90 transition font-medium" href="#apply">
          Apply
          <i className="w-4 h-4" data-lucide="arrow-up-right"></i>
</a>
</nav>
<button className="md:hidden inline-flex items-center gap-1.5 text-sm font-medium rounded-full border border-zinc-200 px-3 py-2 bg-white/80 backdrop-blur hover:bg-white" id="mobileApply">
        Apply
        <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
</header>
<main className="relative">

<div className="pointer-events-none absolute inset-y-0 right-0 hidden lg:block w-1/2">
<div className="absolute right-12 top-24">
<img alt="" className="w-[420px] h-[420px] object-cover rounded-2xl shadow-sm ring-1 ring-zinc-200/70 opacity-10" src="https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
</div>

<section className="px-6 md:px-10" id="program">
<h1 className="sr-only">BETER Fellowship — Baltimore</h1>
<p className="max-w-5xl mt-20 md:mt-36 text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight font-medium text-zinc-900">
        The BETER Fellowship (Baltimore) is a 6‑month, build‑to‑placement program for rising AI talent. Fellows sprint through an intensive training phase (AI product, design, engineering) and then embed inside Baltimore tech companies to tackle real problems. Expect fast cycles, real ownership, and production‑grade mentorship—shipping usable products, prototypes, and agentic tools with clear KPIs. We back emerging builders and self‑taught experimenters who learn in public and deliver, own deliverables, and leave with a defensible portfolio and references.
      </p>

<div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-zinc-700">
<span className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/70 px-3 py-1.5 backdrop-blur">
<i className="w-4 h-4" data-lucide="clock-10"></i>
          6 months
        </span>
<span className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/70 px-3 py-1.5 backdrop-blur">
<i className="w-4 h-4" data-lucide="rocket"></i>
          Build‑to‑placement
        </span>
<span className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/70 px-3 py-1.5 backdrop-blur">
<i className="w-4 h-4" data-lucide="target"></i>
          Real KPIs &amp; production mentorship
        </span>
<span className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/70 px-3 py-1.5 backdrop-blur">
<i className="w-4 h-4" data-lucide="map-pin"></i>
          Baltimore, MD
        </span>
</div>
</section>

<div className="fixed left-6 bottom-6" id="apply">
<a className="group inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/90 px-5 py-3 text-sm font-medium shadow-sm hover:shadow-md hover:bg-white transition" href="https://example.com/apply">
        Start application
        <i className="w-4 h-4 transition-transform group-hover:translate-x-0.5" data-lucide="arrow-right"></i>
</a>
</div>

<div className="fixed right-6 bottom-6 text-sm md:text-base text-zinc-800">
      Baltimore, MD
    </div>
</main>

<footer className="px-6 md:px-10 py-10">
<div className="flex items-center justify-between text-sm text-zinc-600">
<span>© 2025 BETER Fellowship</span>
<div className="flex items-center gap-6">
<a className="hover:text-zinc-900" href="#">FAQ</a>
<a className="hover:text-zinc-900" href="#">Contact</a>
</div>
</div>
</footer>


    </>
  );
}
