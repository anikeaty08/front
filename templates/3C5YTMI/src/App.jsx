import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
      window.addEventListener("DOMContentLoaded", () => {
        // Initialize lucide with 1.5 stroke width
        lucide.createIcons({ attrs: { "stroke-width": 1.5 } });

        // Simple popover system
        const buttons = document.querySelectorAll("[data-popover-target]");
        const popovers = {};
        buttons.forEach((btn) => {
          const id = btn.getAttribute("data-popover-target");
          const pop = document.getElementById(id);
          if (!pop) return;
          popovers[id] = pop;

          btn.addEventListener("click", (e) => {
            e.stopPropagation();
            for (const key in popovers) {
              if (key !== id) popovers[key].classList.add("hidden");
            }
            pop.classList.toggle("hidden");
          });
        });

        document.addEventListener("click", () => {
          for (const key in popovers) popovers[key].classList.add("hidden");
        });
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="sticky top-0 z-40 border-b border-white/80">
<div className="max-w-7xl sm:px-6 lg:px-8 bg-white mr-auto ml-auto pr-4 pl-4">
<div className="flex items-center justify-between h-16 text-black">
<a className="flex items-center gap-2" href="#">
<span className="text-base font-bold tracking-tight text-[#ec7997]">MATES</span>
</a>
<nav className="hidden md:flex items-center gap-9 text-sm text-black">
<a className="hover:text-white transition-colors" href="#">Events</a>
<a className="hover:text-white transition-colors" href="#">Network</a>
<a className="hover:text-white transition-colors" href="#">Contact</a>
</nav>
<div className="flex items-center gap-3">
<button className="hidden sm:inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-3 py-2 text-sm text-black hover:bg-white/10 transition">
<svg className="lucide lucide-log-in h-4 w-4" data-lucide="log-in" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m10 17 5-5-5-5"></path><path d="M15 12H3"></path><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path></svg> Login
            </button>
<button className="inline-flex items-center gap-2 rounded-md px-3.5 py-2 text-sm font-medium transition hover:opacity-90" style={{backgroundColor: '#ec7997', color: '#FFFFFF'}}>
<svg className="lucide lucide-user-plus h-4 w-4" data-lucide="user-plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><line x1="19" x2="19" y1="8" y2="14"></line><line x1="22" x2="16" y1="11" y2="11"></line></svg> Sign up
            </button>
</div>
</div>
</div>
</header>

<section className="relative">
<div className="max-w-7xl sm:px-6 lg:px-8 bg-white border-white border mr-auto ml-auto pt-8 pr-4 pb-20 pl-4">
<div className="relative overflow-hidden rounded-3xl">
<img alt="DJ set with neon lights" className="absolute inset-0 h-full w-full object-cover opacity-60" src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0" style={{background: 'linear-gradient(135deg, rgba(0,0,0,0.9) 15%, rgba(236,121,151,0.45) 55%, rgba(241,203,89,0.45) 100%)'}}></div>
<div className="relative sm:px-10 sm:py-20 pt-14 pr-6 pb-6 pl-6">
<div className="max-w-2xl">
<p className="text-sm font-medium mb-2" style={{color: '#ec7997'}}>YOUR COMMUNITY IN CDMX!</p>
<h1 className="sm:text-5xl text-4xl font-semibold tracking-tight">MATES COMMUNITY MX</h1>
<p className="mt-4 text-base text-neutral-200/90 max-w-xl">
                We are a growing multicultural community of locals and internationals who come together to make new friends, explore, exchange languages and cultures, support local restaurants, cafés, bars, mezcalerías, spas - and much more!
              </p>
</div>

<div className="mt-12">
<div className="mx-auto max-w-4xl">
<div className="bg-white/20 border-white/15 border rounded-2xl pt-2 pr-2 pb-2 pl-2 backdrop-blur">
<div className="grid grid-cols-1 md:grid-cols-5 gap-2">
<div className="md:col-span-2 flex items-center bg-white/10 rounded-xl px-3.5 py-2.5 border border-white/10 focus-within:border-white/20">
<svg className="lucide lucide-search h-5 w-5 text-white/80 mr-2" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
<input className="w-full bg-transparent placeholder-white/60 outline-none text-sm" placeholder="Search by name or type" type="text"/>
</div>

<div className="relative">
<button className="w-full flex items-center justify-between rounded-xl bg-white/5 border border-white/10 px-3.5 py-2.5 text-sm hover:bg-white/10 transition" data-popover-target="date-pop">
<span className="flex items-center gap-2 text-white/90">
<svg className="lucide lucide-calendar h-4 w-4" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
                          Date
                        </span>
<svg className="lucide lucide-chevron-down h-4 w-4 text-white/70" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="hidden absolute z-30 mt-2 w-64 rounded-xl border border-white/10 bg-neutral-900/95 backdrop-blur p-3 shadow-xl" id="date-pop">
<div className="grid grid-cols-3 gap-2 text-xs">
<button className="rounded-lg bg-white/5 px-3 py-2 hover:bg-white/10">Today</button>
<button className="rounded-lg bg-white/5 px-3 py-2 hover:bg-white/10">Tomorrow</button>
<button className="rounded-lg bg-white/5 px-3 py-2 hover:bg-white/10">This week</button>
<button className="rounded-lg bg-white/5 px-3 py-2 hover:bg-white/10">Weekend</button>
<button className="rounded-lg bg-white/5 px-3 py-2 hover:bg-white/10">Next week</button>
<button className="rounded-lg bg-white/5 px-3 py-2 hover:bg-white/10">This month</button>
</div>
</div>
</div>

<div className="relative">
<button className="w-full flex items-center justify-between rounded-xl bg-white/5 border border-white/10 px-3.5 py-2.5 text-sm hover:bg-white/10 transition" data-popover-target="loc-pop">
<span className="flex items-center gap-2 text-white/90">
<svg className="lucide lucide-map-pin h-4 w-4" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
                          Location
                        </span>
<svg className="lucide lucide-chevron-down h-4 w-4 text-white/70" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="hidden absolute z-30 mt-2 w-72 rounded-xl border border-white/10 bg-neutral-900/95 backdrop-blur p-3 shadow-xl" id="loc-pop">
<div className="flex items-center gap-2 rounded-lg bg-white/5 px-3 py-2 mb-2 border border-white/10">
<svg className="lucide lucide-search h-4 w-4 text-white/70" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
<input className="w-full bg-transparent text-sm placeholder-white/60 outline-none" placeholder="Search city or venue"/>
</div>
<ul className="text-sm space-y-1">
<li><button className="w-full text-left rounded-md px-2.5 py-2 hover:bg-white/10">Downtown</button></li>
<li><button className="w-full text-left rounded-md px-2.5 py-2 hover:bg-white/10">Riverside Park</button></li>
<li><button className="w-full text-left rounded-md px-2.5 py-2 hover:bg-white/10">Civic Center</button></li>
<li><button className="w-full text-left rounded-md px-2.5 py-2 hover:bg-white/10">Warehouse District</button></li>
</ul>
</div>
</div>

<div className="relative">
<button className="w-full flex items-center justify-between rounded-xl bg-white/5 border border-white/10 px-3.5 py-2.5 text-sm hover:bg-white/10 transition" data-popover-target="type-pop">
<span className="flex items-center gap-2 text-white/90">
<svg className="lucide lucide-sparkles h-4 w-4" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
                          Type
                        </span>
<svg className="lucide lucide-chevron-down h-4 w-4 text-white/70" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="hidden absolute z-30 mt-2 w-60 rounded-xl border border-white/10 bg-neutral-900/95 backdrop-blur p-3 shadow-xl" id="type-pop">
<div className="grid grid-cols-2 gap-2 text-sm">
<button className="rounded-lg bg-white/5 px-3 py-2 hover:bg-white/10">Music</button>
<button className="rounded-lg bg-white/5 px-3 py-2 hover:bg-white/10">Art</button>
<button className="rounded-lg bg-white/5 px-3 py-2 hover:bg-white/10">Cinema</button>
<button className="rounded-lg bg-white/5 px-3 py-2 hover:bg-white/10">Sport</button>
<button className="rounded-lg bg-white/5 px-3 py-2 hover:bg-white/10">Tech</button>
<button className="rounded-lg bg-white/5 px-3 py-2 hover:bg-white/10">Food</button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

</div>
</div>
</div>
</section>

<main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-24 bg-white pt-8">
<div className="flex flex-col lg:flex-row gap-8">

<section className="lg:w-[38%] order-2 lg:order-1">
<div className="rounded-3xl overflow-hidden border border-white/10 shadow-xl">
<img alt="Lanterns at night festival" className="h-60 w-full object-cover" src="https://images.unsplash.com/photo-1640906152676-dace6710d24b?w=2160&amp;q=80&amp;auto=format&amp;fit=crop"/>
<div className="p-6">
<h2 className="text-2xl font-semibold tracking-tight text-black">MATES COMMUNITY PREMIUM PASS</h2>
<p className="mt-3 text-sm text-black/50">
                Exclusive benefits at 70+ cafes, bars, and restaurants &amp; social events in the MATES Network.
              </p>
<ul className="mt-5 space-y-2 text-sm text-black">
<li className="flex items-start gap-2">
<svg className="lucide lucide-dollar-sign mt-0.5 h-4 w-4" data-lucide="dollar-sign" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: '#ec7997'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<line x1="12" x2="12" y1="2" y2="22"></line>
<path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
</svg>
                  59 MXN/month
                </li>
<li className="flex items-start gap-2">
<svg className="lucide lucide-user-check mt-0.5 h-4 w-4" data-lucide="user-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: '#ec7997'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
<circle cx="9" cy="7" r="4"></circle>
<polyline points="16,11 18,13 22,9"></polyline>
</svg>
                  Personalized support
                </li>
<li className="flex items-start gap-2">
<svg className="lucide lucide-message-circle mt-0.5 h-4 w-4" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: '#ec7997'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"></path>
</svg>
                  Access to MATES Premium WhatsApp
                </li>
</ul>
<div className="mt-6 grid grid-cols-1 gap-3 text-sm">
<div className="flex items-center gap-2 text-black/50">
<svg className="lucide lucide-map h-4 w-4" data-lucide="map" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"></path><path d="M15 5.764v15"></path><path d="M9 3.236v15"></path></svg>
                  MEXICO CITY
                </div>
<div className="flex items-center gap-2 text-black/50">
<svg className="lucide lucide-clock-8 h-4 w-4" data-lucide="clock-8" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l-4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
                  LIMITED OFFER from JULY 20–22, 2025
                </div>
</div>
<div className="mt-6 flex items-center gap-3">
<button className="inline-flex gap-2 transition hover:opacity-90 text-md font-medium rounded-xl pt-2 pr-4 pb-2 pl-4 items-center" style={{backgroundColor: '#ec7997', color: '#FFFFFF'}}>
<svg className="lucide lucide-ticket h-4 w-4" data-lucide="ticket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path><path d="M13 5v2"></path><path d="M13 17v2"></path><path d="M13 11v2"></path></svg> GET PREMIUM PASS
                </button>
</div>
</div>
</div>
</section>

<section className="lg:w-[62%] order-1 lg:order-2">
<div className="flex items-end justify-between text-black">
<div className="">
<h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-black">New events</h2>
<p className="mt-1 mr-2 text-sm text-black/50">Fresh picks happening around you this month.</p>
</div>
<div className="relative">
<button className="text-sm text-black inline-flex items-center gap-2 rounded-lg border border-white/10 bg-black/5 px-3 py-2 hover:bg-white/10" data-popover-target="sort-pop">
<svg className="lucide lucide-ticket h-4 w-4" data-lucide="ticket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path><path d="M13 5v2"></path><path d="M13 17v2"></path><path d="M13 11v2"></path></svg> Tickets
                <svg className="lucide lucide-chevron-down h-4 w-4" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="hidden absolute right-0 mt-2 w-44 rounded-xl border border-white/10 bg-neutral-900/95 backdrop-blur p-2 shadow-xl" id="sort-pop">
<button className="w-full text-left rounded-lg px-3 py-2 text-sm hover:bg-white/10">Lowest price</button>
<button className="w-full text-left rounded-lg px-3 py-2 text-sm hover:bg-white/10">Highest rated</button>
<button className="w-full text-left rounded-lg px-3 py-2 text-sm hover:bg-white/10">Soonest</button>
</div>
</div>
</div>
<div className="mt-5 grid sm:grid-cols-2 lg:grid-cols-2 gap-4">

<article className="rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 shadow-xl">
<div className="relative">
<img alt="People at café event" className="h-40 w-full object-cover" src="https://images.unsplash.com/photo-1603228254119-e6a4d095dc59?q=80&amp;w=2671&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.1.0&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D;auto=format&amp;fit=crop"/>
<span className="absolute left-3 top-3 text-[13px] font-medium rounded-full pt-1 pr-2.5 pb-1 pl-2.5" style={{backgroundColor: '#ec7997', color: '#FFFFFF'}}>12 May</span>
</div>
<div className="pt-4 pr-4 pb-4 pl-4">
<h3 className="text-base font-semibold tracking-tight text-black">Citywide Art Festival</h3>
<p className="mt-1 text-xs text-black/50">International · Immersive · Open</p>
<div className="mt-3 flex items-center justify-between">
<span className="text-md text-bold text-[#ec7997]">$25</span>
<button className="inline-flex items-center gap-1.5 text-md text-[black] gap-2 rounded-lg border border-white/10 bg-black/5 px-3 py-2 hover:bg-white/10">
<svg className="lucide lucide-plus h-3.5 w-3.5" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg> Add
      </button>
</div>
</div>
</article>
<article className="rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 shadow-xl">
<div className="relative">
<img alt="Historical reenactment" className="h-40 w-full object-cover" src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<span className="absolute left-3 top-3 text-[13px] font-medium px-2.5 py-1 rounded-full" style={{backgroundColor: '#ec7997', color: '#FFFFFF'}}>12 May</span>
<span className="absolute right-3 top-3 text-[13px] font-medium text-black px-3 py-1 rounded-full" style={{backgroundColor: '#f1cb59'}}>Coming soon</span>
</div>
<div className="pt-4 pr-4 pb-4 pl-4">
<h3 className="text-base font-semibold tracking-tight text-black">Historical Reenactment Festival</h3>
<p className="mt-1 text-xs text-black/50">Open air · International</p>
<div className="mt-3 flex items-center justify-between">
<span className="text-md text-bold text-[#ec7997]">Free</span>
<button className="inline-flex items-center gap-1.5 text-md text-black gap-2 rounded-lg border border-white/10 bg-black/5 px-3 py-2 hover:bg-white/10">
<svg className="lucide lucide-eye h-3.5 w-3.5" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg> Details
      </button>
</div>
</div>
</article>
<article className="rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 shadow-xl">
<div className="relative">
<img alt="People at café event" className="h-40 w-full object-cover" src="https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<span className="absolute left-3 top-3 text-[13px] font-medium px-2.5 py-1 rounded-full" style={{backgroundColor: '#ec7997', color: '#FFFFFF'}}>12 May</span>
</div>
<div className="pt-4 pr-4 pb-4 pl-4">
<h3 className="text-base font-semibold tracking-tight text-black">International Immersive Open Music</h3>
<p className="mt-1 text-xs text-black/50">Indoor · Global · Networking</p>
<div className="mt-3 flex items-center justify-between">
<span className="text-md text-bold text-[#ec7997]">$39</span>
<button className="inline-flex items-center gap-1.5 text-md text-black gap-2 rounded-lg border border-white/10 bg-black/5 px-3 py-2 hover:bg-white/10">
<svg className="lucide lucide-plus h-3.5 w-3.5" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg> Add
      </button>
</div>
</div>
</article>
<article className="rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 shadow-xl">
<div className="relative">
<img alt="Theatre performance" className="h-40 w-full object-cover" src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<span className="absolute left-3 top-3 text-[13px] font-medium px-2.5 py-1 rounded-full" style={{backgroundColor: '#ec7997', color: '#FFFFFF'}}>12 May</span>
<span className="absolute right-3 top-3 text-[13px] font-medium text-black rounded-full pt-1 pr-2.5 pb-1 pl-2.5" style={{backgroundColor: '#f1cb59'}}>Save 30%</span>
</div>
<div className="pt-4 pr-4 pb-4 pl-4">
<h3 className="text-base font-semibold tracking-tight text-black">Renaissance Costume Gala</h3>
<p className="mt-1 text-xs text-black/50">Immersive · International</p>
<div className="mt-3 flex items-center justify-between">
<span className="text-md text-bold text-[#ec7997]">$49</span>
<button className="inline-flex items-center gap-1.5 text-md text-black gap-2 rounded-lg border border-white/10 bg-black/5 px-3 py-2 hover:bg-white/10">
<svg className="lucide lucide-eye h-3.5 w-3.5" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg> Details
      </button>
</div>
</div>
</article>
<article className="rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 shadow-xl">
<div className="relative">
<img alt="City street food market" className="h-40 w-full object-cover" src="https://images.unsplash.com/photo-1488459716781-31db52582fe9?q=80&amp;w=2670&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.1.0&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D;auto=format&amp;fit=crop"/>
<span className="absolute left-3 top-3 text-[13px] font-medium px-2.5 py-1 rounded-full" style={{backgroundColor: '#ec7997', color: '#FFFFFF'}}>18 May</span>
</div>
<div className="pt-4 pr-4 pb-4 pl-4">
<h3 className="text-base font-semibold tracking-tight text-black">Open-Air Street Food Market</h3>
<p className="mt-1 text-xs text-black/50">Gourmet · Family friendly</p>
<div className="mt-3 flex items-center justify-between">
<span className="text-md text-bold text-[#ec7997]">$5</span>
<button className="inline-flex items-center gap-1.5 text-md text-black gap-2 rounded-lg border border-white/10 bg-black/5 px-3 py-2 hover:bg-white/10">
<svg className="lucide lucide-plus h-3.5 w-3.5" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg> Add
      </button>
</div>
</div>
</article>
<article className="rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 shadow-xl">
<div className="relative">
<img alt="Night club stage" className="h-40 w-full object-cover" src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<span className="absolute left-3 top-3 text-[13px] font-medium px-2.5 py-1 rounded-full" style={{backgroundColor: '#ec7997', color: '#FFFFFF'}}>21 May</span>
</div>
<div className="pt-4 pr-4 pb-4 pl-4">
<h3 className="text-base font-semibold tracking-tight text-black">Neon Nights: Live DJ Series</h3>
<p className="mt-1 text-xs text-black/50">Electronic · Late show</p>
<div className="mt-3 flex items-center justify-between">
<span className="text-md text-bold text-[#ec7997]">$29</span>
<button className="inline-flex items-center gap-1.5 text-md text-black gap-2 rounded-lg border border-white/10 bg-black/5 px-3 py-2 hover:bg-white/10">
<svg className="lucide lucide-plus h-3.5 w-3.5" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg> Add
      </button>
</div>
</div>
</article>
</div>
</section>
</div>
</main>

<footer className="border-t border-white/10">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
<div className="flex flex-col sm:flex-row items-center justify-between gap-4">
<div className="text-sm text-neutral-400">© 2025 Citywide Events</div>
<div className="flex items-center gap-4 text-sm text-neutral-300">
<a className="hover:text-white" href="#">Privacy</a>
<a className="hover:text-white" href="#">Terms</a>
<a className="hover:text-white" href="#">Support</a>
</div>
</div>
</div>



</footer>
    </>
  );
}
