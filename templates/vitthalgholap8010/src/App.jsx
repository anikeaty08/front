import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // Mobile menu toggle
      const menuBtn = document.getElementById('menuBtn');
      const closeMenu = document.getElementById('closeMenu');
      const mobileMenu = document.getElementById('mobileMenu');

      function openMobile() {
        mobileMenu.classList.remove('opacity-0','pointer-events-none','scale-95');
        mobileMenu.classList.add('opacity-100','scale-100');
      }
      function closeMobile() {
        mobileMenu.classList.add('opacity-0','pointer-events-none','scale-95');
        mobileMenu.classList.remove('opacity-100','scale-100');
      }
      if (menuBtn) menuBtn.addEventListener('click', openMobile);
      if (closeMenu) closeMenu.addEventListener('click', closeMobile);

      // Year
      document.getElementById('year').textContent = new Date().getFullYear();

      // Gentle parallax for floating shapes
      const parallaxEls = document.querySelectorAll('[data-parallax]');
      window.addEventListener('mousemove', (e) => {
        const { innerWidth: w, innerHeight: h } = window;
        const x = (e.clientX - w / 2) / w;
        const y = (e.clientY - h / 2) / h;
        parallaxEls.forEach((el, i) => {
          const factor = (i + 1) * 6;
          el.style.transform = `translate3d(${x * factor}px, ${y * factor}px, 0)`;
        });
      }, { passive: true });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="pointer-events-none fixed inset-0 -z-10">
<div className="absolute -top-32 -right-20 h-[60vh] w-[60vh] rounded-full blur-3xl bg-gradient-to-br from-amber-200/60 via-yellow-300/40 to-amber-500/30"></div>
<div className="absolute -bottom-24 -left-20 h-[55vh] w-[55vh] rounded-full blur-3xl bg-gradient-to-tr from-neutral-900/10 via-black/10 to-amber-300/20"></div>
<div className="absolute inset-0 opacity-[0.04]" style={{backgroundImage: 'radial-gradient(circle at 1px 1px, #000 1px, transparent 0)', backgroundSize: '16px 16px'}}></div>
</div>

<header className="relative z-20">
<div className="mx-auto max-w-7xl px-6 py-6 lg:px-10">
<div className="flex items-center justify-between">
<a className="group flex items-center gap-3" href="#">
<div className="grid place-items-center bg-center text-amber-300 bg-neutral-900 w-9 h-9 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/46a2461a-389a-4bef-ab69-fdcb67ba21e3_320w.jpg?w=800&amp;q=80)] bg-contain rounded-md ring-black/10 ring-1 shadow-[0_6px_28px_rgba(0,0,0,0.16)]">
<span className="text-sm font-semibold tracking-tight"></span>
</div>
<div className="flex flex-col leading-none">
<span className="text-lg font-semibold text-neutral-900 tracking-tight">METRO</span>
<span className="text-xs font-medium text-neutral-500">Land. Plots. Precision.</span>
</div>
</a>
<nav className="hidden items-center gap-8 md:flex">
<a className="text-sm font-medium text-neutral-700 hover:text-neutral-900 transition-colors" href="#featured">Featured</a>
<a className="text-sm font-medium text-neutral-700 hover:text-neutral-900 transition-colors" href="#why">Why Us</a>
<a className="text-sm font-medium text-neutral-700 hover:text-neutral-900 transition-colors" href="#map">Map</a>
<a className="text-sm font-medium text-neutral-700 hover:text-neutral-900 transition-colors" href="#testimonials">Testimonials</a>
<a className="hover:text-neutral-900 transition-colors text-sm font-medium text-neutral-700" href="#contact">Contact</a>
</nav>
<div className="flex items-center gap-3">
<a className="hidden md:inline-flex items-center gap-2 hover:scale-[1.02] active:scale-[0.99] transition-transform text-sm font-medium text-amber-200 bg-neutral-900 rounded-full ring-black/10 ring-1 pt-2.5 pr-5 pb-2.5 pl-5 shadow-[0_10px_30px_rgba(0,0,0,0.20)]" href="https://wa.me/7020278523?text=HI">
<svg className="lucide lucide-sparkles h-4 w-4" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg> Book a Consult
            </a>
<button aria-label="Open Menu" className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full ring-1 ring-black/10 bg-white shadow-sm hover:bg-neutral-50" id="menuBtn">
<svg className="lucide lucide-menu h-5 w-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</div>
</div>
</header>

<div className="fixed inset-x-4 top-4 z-40 origin-top scale-95 rounded-2xl bg-white/90 p-6 backdrop-blur-xl ring-1 ring-black/10 shadow-2xl opacity-0 pointer-events-none transition-all md:hidden" id="mobileMenu">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="grid h-8 w-8 place-items-center rounded-md bg-neutral-900 text-amber-300"><span className="text-xs font-semibold tracking-tight">LX</span></div>
<span className="text-sm font-semibold text-neutral-900 tracking-tight">LX Acres</span>
</div>
<button className="h-8 w-8 grid place-items-center rounded-full ring-1 ring-black/10 hover:bg-neutral-50" id="closeMenu">
<svg className="lucide lucide-x h-4 w-4" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
<div className="mt-4 grid gap-3">
<a className="rounded-xl px-4 py-3 text-sm font-medium text-neutral-800 hover:bg-neutral-50" href="#featured">Featured Plots</a>
<a className="rounded-xl px-4 py-3 text-sm font-medium text-neutral-800 hover:bg-neutral-50" href="#why">Why Choose Us</a>
<a className="rounded-xl px-4 py-3 text-sm font-medium text-neutral-800 hover:bg-neutral-50" href="#map">Interactive Map</a>
<a className="rounded-xl px-4 py-3 text-sm font-medium text-neutral-800 hover:bg-neutral-50" href="#testimonials">Testimonials</a>
<a className="rounded-xl px-4 py-3 text-sm font-medium text-neutral-800 hover:bg-neutral-50" href="#contact">Contact</a>
</div>
<a className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-neutral-900 px-5 py-3 text-sm font-medium text-amber-200 ring-1 ring-black/10 shadow-lg" href="#contact">
<svg className="lucide lucide-sparkles h-4 w-4" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg> Book a Consult
      </a>
</div>

<section className="relative z-10" style={{opacity: '1', transform: 'translateY(0px)', transition: '700ms cubic-bezier(0.2, 0.8, 0.2, 1)'}}>
<div className="lg:pt-20 lg:pb-16 lg:px-10 max-w-7xl mr-auto ml-auto pt-12 pr-6 pb-10 pl-6">
<div className="grid items-center gap-12 md:gap-10 lg:grid-cols-2">
<div className="relative">
<div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1.5 ring-1 ring-black/10 backdrop-blur-xl text-xs font-medium text-neutral-700 shadow-sm">
<svg className="lucide lucide-shield-check h-4 w-4 text-amber-500" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg> Trusted Premium Land Agent
            </div>
<h1 className="mt-5 text-5xl md:text-6xl font-semibold tracking-tight text-neutral-900 leading-[1.05]">
              Exceptional Land &amp; Plot Acquisitions
            </h1>
<p className="mt-5 text-lg md:text-xl text-neutral-600">
              Secure rare parcels with unmatched due diligence, discreet negotiations, and white-glove service.
            </p>
<div className="mt-8 flex flex-wrap items-center gap-3">
<a className="inline-flex items-center gap-2 hover:scale-[1.02] active:scale-[0.99] transition text-sm font-medium text-amber-200 bg-gradient-to-r from-neutral-900 to-black rounded-full ring-black/10 ring-1 pt-3 pr-6 pb-3 pl-6 shadow-[0_16px_40px_rgba(0,0,0,0.22)]" href="#featured">
<svg className="lucide lucide-map h-4 w-4" data-lucide="map" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"></path><path d="M15 5.764v15"></path><path d="M9 3.236v15"></path></svg> Explore Featured Plots
              </a>
<a className="inline-flex items-center gap-2 hover:bg-neutral-50 text-sm font-medium text-neutral-900 bg-white rounded-full ring-black/10 ring-1 pt-3 pr-6 pb-3 pl-6" href="https://wa.me/7020278523?text=HI">
<svg className="lucide lucide-message-circle h-4 w-4 text-emerald-500" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg> WhatsApp
              </a>
</div>
<div className="mt-8 grid grid-cols-3 gap-6">
<div className="rounded-2xl bg-white/70 p-5 ring-1 ring-black/10 backdrop-blur-xl shadow-[0_12px_30px_rgba(0,0,0,0.08)]">
<div className="text-2xl font-semibold tracking-tight text-neutral-900">250+</div>
<div className="text-sm text-neutral-600">Acres Closed</div>
</div>
<div className="rounded-2xl bg-white/70 p-5 ring-1 ring-black/10 backdrop-blur-xl shadow-[0_12px_30px_rgba(0,0,0,0.08)]">
<div className="text-2xl font-semibold tracking-tight text-neutral-900">92%</div>
<div className="text-sm text-neutral-600">Off-market Deals</div>
</div>
<div className="rounded-2xl bg-white/70 p-5 ring-1 ring-black/10 backdrop-blur-xl shadow-[0_12px_30px_rgba(0,0,0,0.08)]">
<div className="text-2xl font-semibold tracking-tight text-neutral-900">48h</div>
<div className="text-sm text-neutral-600">Avg. Response</div>
</div>
</div>
</div>

<div className="md:h-[520px] h-[420px] relative">

<div className="absolute inset-0 -z-10 grid place-items-center">
<div className="h-72 w-72 md:h-96 md:w-96 rounded-full" style={{background: 'radial-gradient(closest-side, rgba(250,250,250,0.9), rgba(240,240,240,0.6), rgba(255,215,128,0.2) 70%, rgba(0,0,0,0.06))', boxShadow: '0 60px 120px rgba(0,0,0,0.15), inset 0 -2px 20px rgba(0,0,0,0.06)'}}></div>
</div>

<div className="pointer-events-none">
<div className="absolute left-2 top-6 h-14 w-14 rounded-full bg-gradient-to-b from-amber-200/90 to-yellow-400/60 blur-[1px] shadow-[0_15px_40px_rgba(255,199,62,0.35)]" data-parallax="" style={{transform: 'translate3d(-0.210227px, -2.50286px, 0px)'}}></div>
</div>

<div className="relative h-full w-full grid place-items-center" style={{}}>

<div className="pointer-events-none absolute inset-0 grid place-items-center" style={{}}>
<div className="animate-[spin_18s_linear_infinite] md:h-80 md:w-80 border-dashed w-64 h-64 border-amber-300/40 border rounded-full" style={{}}></div>
</div>

<div className="relative h-64 w-64 md:h-80 md:w-80 rounded-[38%] rotate-[-8deg] bg-gradient-to-br from-emerald-400 via-green-500 to-emerald-700 shadow-[0_40px_120px_rgba(0,0,0,0.25)] ring-1 ring-black/10" style={{}}>

<div className="-inset-1 bg-center bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6d74d30c-a1b8-4366-8ea4-783b8d52c6e1_800w.jpg?w=800&amp;q=80)] bg-cover rounded-[38%] absolute"></div>

<div className="absolute bottom-1 left-1 right-1 h-6 md:h-8 rounded-[40%] bg-gradient-to-t from-emerald-700/70 via-emerald-600/30 to-transparent blur-[2px]" style={{}}></div>

<div className="absolute left-6 top-8 h-1 w-24 md:w-36 rounded-full bg-emerald-200/50" style={{}}></div>
<div className="md:w-24 bg-lime-500/50 w-16 h-1 rounded-full absolute top-14 left-10"></div>
<div className="absolute right-8 top-10 h-1 w-20 md:w-28 rounded-full bg-emerald-200/40" style={{}}></div>

<div className="absolute left-9 top-9 h-2.5 w-2.5 rounded-full bg-green-900/70 shadow-[0_2px_6px_rgba(0,0,0,0.25)]" style={{}}></div>
<div className="absolute left-16 top-16 h-3 w-3 rounded-full bg-green-900/70 shadow-[0_2px_6px_rgba(0,0,0,0.25)]" style={{}}></div>
<div className="absolute right-14 top-14 h-2.5 w-2.5 rounded-full bg-green-900/ shadow-[0_2px_6px_rgba(0,0,0,0.25)]" style={{}}></div>
<div className="absolute right-10 bottom-16 h-3 w-3 rounded-full bg-green-900/70 shadow-[0_2px_6px_rgba(0,0,0,0.25)]" style={{}}></div>

<div className="absolute -right-3 -top-3 md:-right-4 md:-top-4 z-10">
<div className="group flex items-center gap-3 rounded-xl bg-white/90 px-3 py-2 md:px-4 md:py-3 ring-1 ring-black/10 backdrop-blur-xl shadow-[0_12px_40px_rgba(0,0,0,0.18)]">
<img alt="Agent headshot" className="md:h-10 md:w-10 w-8 h-8 object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e6907717-ac27-40b1-a139-07156b27df7b_320w.jpg?w=800&amp;q=80"/>
<div className="min-w-[120px]">
<div className="flex items-center gap-2">
<p className="md:text-sm leading-none text-xs font-semibold text-neutral-900">Vitthal Gholap</p>
<span className="inline-flex items-center gap-1 text-[10px] md:text-xs font-medium text-emerald-700">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span> Available
                        </span>
</div>
<p className="mt-0.5 text-[10px] md:text-xs text-neutral-600">Principal Land Agent</p>
</div>
</div>
</div>
</div>

<div className="pointer-events-none" style={{}}>
<div className="absolute -right-2 bottom-16 h-10 w-10 rounded-xl rotate-12 bg-gradient-to-tr from-amber-100/80 to-yellow-300/60 shadow-[0_10px_30px_rgba(255,199,62,0.35)] blur-[0.5px]"></div>
<div className="absolute left-6 bottom-4 h-5 w-5 rounded-full bg-emerald-300/70 shadow-[0_8px_20px_rgba(16,185,129,0.35)]"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="md:py-20 pt-14 pb-14 relative" id="featured">
<div className="mx-auto max-w-7xl px-6 lg:px-10">
<div className="flex items-end justify-between gap-6">
<div className="">
<p className="text-xs font-semibold uppercase tracking-wider text-amber-600/80">Featured</p>
<h2 className="mt-2 text-3xl md:text-4xl font-semibold tracking-tight">Prime Land Opportunities</h2>
<p className="mt-2 text-neutral-600">Vetted plots with clear titles, strategic access, and growth potential.</p>
</div>
<a className="hidden md:inline-flex items-center gap-2 rounded-full bg-neutral-900 px-4 py-2 text-sm font-medium text-amber-200 ring-1 ring-black/10" href="#contact">Get full brochure
            <svg className="h-4 w-4 opacity-80" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</div>
<div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

<article className="group overflow-hidden rounded-2xl bg-white ring-1 ring-black/10 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
<div className="relative">
<img alt="Rolling green acres" className="transition-transform duration-500 group-hover:scale-[1.03] w-full h-48 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/57415674-fe3b-4c95-b336-82695fa30d51_800w.jpg?w=800&amp;q=80"/>
<span className="absolute left-3 top-3 rounded-full bg-white/90 px-2 py-1 text-[10px] font-medium ring-1 ring-black/10">New</span>
</div>
<div className="p-5">
<h3 className="text-lg font-semibold tracking-tight">UMRED ROADS — 12 Acres</h3>
<p className="mt-1 text-sm text-neutral-600">Water-adjacent, gentle slope, ideal for eco-retreats.</p>
<div className="mt-4 flex items-center justify-between">
<span className="text-sm font-semibold">$480k</span>
<a className="inline-flex items-center gap-1 text-sm font-medium text-amber-700 hover:text-amber-800" href="#contact">Inquire
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</div>
</div>
</article>

<article className="group overflow-hidden rounded-2xl bg-white ring-1 ring-black/10 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
<div className="relative">
<img alt="Sunlit hillside terrain" className="transition-transform duration-500 group-hover:scale-[1.03] w-full h-48 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0b003bbe-bc16-44cc-8357-6b1ff7446f10_3840w.jpg?w=800&amp;q=80"/>
<span className="absolute left-3 top-3 rounded-full bg-white/90 px-2 py-1 text-[10px] font-medium ring-1 ring-black/10">Off-market</span>
</div>
<div className="p-5">
<h3 className="text-lg font-semibold tracking-tight">DETAILS — 8.4 </h3>
<p className="mt-1 text-sm text-neutral-600">Panoramic views, utilities nearby, paved access.</p>
<div className="mt-4 flex items-center justify-between">
<span className="text-sm font-semibold">$395k</span>
<a className="inline-flex items-center gap-1 text-sm font-medium text-amber-700 hover:text-amber-800" href="#contact">Inquire
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</div>
</div>
</article>

<article className="group overflow-hidden rounded-2xl bg-white ring-1 ring-black/10 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
<div className="relative">
<img alt="Flat open field" className="transition-transform duration-500 group-hover:scale-[1.03] w-full h-48 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ca0929b8-379c-49d4-b6b9-46632aa9dd25_800w.jpg?w=800&amp;q=80"/>
<span className="absolute left-3 top-3 rounded-full bg-white/90 px-2 py-1 text-[10px] font-medium ring-1 ring-black/10">Title-ready</span>
</div>
<div className="p-5">
<h3 className="text-lg font-semibold tracking-tight">PRICE  — 15 Acres</h3>
<p className="mt-1 text-sm text-neutral-600">Flat terrain, zoning flexibility, rapid development corridor.</p>
<div className="mt-4 flex items-center justify-between">
<span className="text-sm font-semibold">$720k</span>
<a className="inline-flex items-center gap-1 text-sm font-medium text-amber-700 hover:text-amber-800" href="#contact">Inquire
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</div>
</div>
</article>
</div>
<div className="mt-8 flex items-center justify-center">
<a className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-neutral-900 ring-1 ring-black/10 hover:bg-neutral-50" href="#contact">Request full inventory
            <svg className="h-4 w-4 opacity-80" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</a>
</div>
</div>
</section>

<section className="relative py-14 md:py-20" id="why">
<div className="mx-auto max-w-7xl px-6 lg:px-10">
<div className="grid gap-6 md:grid-cols-4">
<div className="col-span-1 md:col-span-2">
<p className="text-xs font-semibold uppercase tracking-wider text-amber-600/80">Why LX Acres</p>
<h2 className="mt-2 text-3xl md:text-4xl font-semibold tracking-tight">Meticulous. Discreet. Results-driven.</h2>
<p className="mt-2 text-neutral-600">We combine rigorous due diligence with off-market reach to unlock high-conviction acquisitions.</p>
</div>
<div className="grid gap-6 sm:grid-cols-2 md:col-span-2">
<div className="rounded-2xl bg-white p-6 ring-1 ring-black/10 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
<div className="flex items-center gap-3">
<div className="grid h-9 w-9 place-items-center rounded-md bg-amber-100 text-amber-700 ring-1 ring-amber-200"><svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12 2 3 7 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z"></path></svg></div>
<p className="font-semibold">Off-market Pipeline</p>
</div>
<p className="mt-3 text-sm text-neutral-600">92% of our deals close off-market through private channels and owner relationships.</p>
</div>
<div className="rounded-2xl bg-white p-6 ring-1 ring-black/10 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
<div className="flex items-center gap-3">
<div className="grid h-9 w-9 place-items-center rounded-md bg-amber-100 text-amber-700 ring-1 ring-amber-200"><svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg></div>
<p className="font-semibold">Title &amp; Compliance</p>
</div>
<p className="mt-3 text-sm text-neutral-600">Lawyer-reviewed titles, surveys, and zoning alignment pre-validated on every listing.</p>
</div>
<div className="rounded-2xl bg-white p-6 ring-1 ring-black/10 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
<div className="flex items-center gap-3">
<div className="grid h-9 w-9 place-items-center rounded-md bg-amber-100 text-amber-700 ring-1 ring-amber-200"><svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v18h18"></path><path d="M7 12h8"></path></svg></div>
<p className="font-semibold">Negotiation Edge</p>
</div>
<p className="mt-3 text-sm text-neutral-600">Data-backed valuation and discrete positioning secure favorable terms swiftly.</p>
</div>
<div className="rounded-2xl bg-white p-6 ring-1 ring-black/10 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
<div className="flex items-center gap-3">
<div className="grid h-9 w-9 place-items-center rounded-md bg-amber-100 text-amber-700 ring-1 ring-amber-200"><svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15A1.65 1.65 0 0 0 21 13.35V10.6A1.65 1.65 0 0 0 19.4 9l-1.55-.31a1.65 1.65 0 0 1-1.23-1.14l-.45-1.49A1.65 1.65 0 0 0 13.68 4h-3.36A1.65 1.65 0 0 0 8.83 6.06l-.45 1.49A1.65 1.65 0 0 1 7.15 8.7L5.6 9A1.65 1.65 0 0 0 4 10.65v2.7A1.65 1.65 0 0 0 5.6 15l1.55.31c.56.11 1.01.52 1.23 1.14l.45 1.49A1.65 1.65 0 0 0 10.32 20h3.36a1.65 1.65 0 0 0 1.49-1.06l.45-1.49c.22-.62.67-1.03 1.23-1.14z"></path></svg></div>
<p className="font-semibold">White-glove Service</p>
</div>
<p className="mt-3 text-sm text-neutral-600">Concierge-level guidance from shortlist to close and post-acquisition setup.</p>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-14 md:py-20" id="map">
<div className="mx-auto max-w-7xl px-6 lg:px-10">
<div className="grid gap-6 md:grid-cols-2">
<div className="">
<p className="text-xs font-semibold uppercase tracking-wider text-amber-600/80">Interactive</p>
<h2 className="mt-2 text-3xl md:text-4xl font-semibold tracking-tight">Explore the Area</h2>
<p className="mt-2 text-neutral-600">Zoom and pan to view regional access, corridors, and nearby amenities.</p>
<ul className="mt-6 grid gap-3 text-sm text-neutral-700">
<li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span> Clear arterial road access</li>
<li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-amber-500"></span> Utility proximity and easements</li>
<li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-neutral-900"></span> Development-ready zoning clusters</li>
</ul>
</div>
<div className="overflow-hidden rounded-2xl ring-1 ring-black/10 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
<iframe aria-label="Map of featured area" className="h-[360px] w-full" src="https://www.openstreetmap.org/export/embed.html?bbox=-0.15%2C51.49%2C-0.05%2C51.54&amp;layer=mapnik" style={{border: '0'}} title="Interactive Map"></iframe>
</div>
</div>
</div>
</section>

<section className="relative py-14 md:py-20" id="testimonials">
<div className="mx-auto max-w-7xl px-6 lg:px-10">
<div className="text-center">
<p className="text-xs font-semibold uppercase tracking-wider text-amber-600/80">Testimonials</p>
<h2 className="mt-2 text-3xl md:text-4xl font-semibold tracking-tight">Quiet wins. Lasting outcomes.</h2>
<p className="mt-2 text-neutral-600">What discerning buyers and sellers say about working with us.</p>
</div>
<div className="mt-10 grid gap-6 md:grid-cols-3">
<figure className="rounded-2xl bg-white p-6 ring-1 ring-black/10 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
<blockquote className="text-neutral-700LX Acres sourced an off-market parcel that matched our utility corridor and budget perfectly. Closed in 21 days.&lt;/blockquote&gt; &lt;figcaption class=" flex="" gap-3"="" items-center="" mt-4="">
<img alt="Client" className="h-8 w-8 rounded-full object-cover ring-1 ring-black/10" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&amp;fit=crop&amp;w=80&amp;q=60"/>
<div>
<p className="text-sm font-semibold">M. Patel</p>
<p className="text-xs text-neutral-500">Developer, MP Ventures</p>
</div>
</blockquote></figure>
<figure className="rounded-2xl bg-white p-6 ring-1 ring-black/10 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
<blockquote className="text-neutral-700">Title work was immaculate and negotiation calm yet firm. We felt represented at every step.</blockquote>
<figcaption className="mt-4 flex items-center gap-3">
<img alt="Client" className="h-8 w-8 rounded-full object-cover ring-1 ring-black/10" src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&amp;fit=crop&amp;w=80&amp;q=60"/>
<div className="">
<p className="text-sm font-semibold">R. Lawson</p>
<p className="text-xs text-neutral-500">Private Buyer</p>
</div>
</figcaption>
</figure>
<figure className="rounded-2xl bg-white p-6 ring-1 ring-black/10 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
<blockquote className="text-neutral-700">We accessed a portfolio we didn’t know existed. Discretion and outcome were unmatched.</blockquote>
<figcaption className="mt-4 flex items-center gap-3">
<img alt="Client" className="h-8 w-8 rounded-full object-cover ring-1 ring-black/10" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&amp;fit=crop&amp;w=80&amp;q=60"/>
<div>
<p className="text-sm font-semibold">C. Duarte</p>
<p className="text-xs text-neutral-500">Family Office</p>
</div>
</figcaption>
</figure>
</div>
</div>
</section>

<section className="relative py-14 md:py-20" id="contact">
<div className="lg:px-10 max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="grid gap-8 md:grid-cols-5">
<div className="md:col-span-2">
<p className="text-xs font-semibold uppercase tracking-wider text-amber-600/80">Contact</p>
<h2 className="mt-2 text-3xl md:text-4xl font-semibold tracking-tight">Let’s discuss your criteria</h2>
<p className="mt-2 text-neutral-600">Share your parameters and timeline. We’ll tailor a shortlist from our private pipeline.</p>
<div className="mt-6 grid gap-3 text-sm">
<div className="flex gap-x-2 gap-y-2 items-center">
<div className="grid h-8 w-8 place-items-center rounded-md bg-emerald-100 text-emerald-700 ring-1 ring-emerald-200">
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07A19.5 19.5 0 0 1 3.15 9.81 19.8 19.8 0 0 1 .08 1.18 2 2 0 0 1 2.06 0h3a2 2 0 0 1 2 1.72c.12.89.3 1.76.57 2.6a2 2 0 0 1-.45 2.11L6.1 7.67a16 16 0 0 0 6.23 6.23l1.24-1.08a2 2 0 0 1 2.11-.45c.84.27 1.71.45 2.6.57A2 2 0 0 1 22 16.92z"></path></svg>
</div>
<a className="hover:underline font-medium" href="https://wa.me/8010942769" rel="noopener" target="_blank">WhatsApp: +91 8010942769</a>
</div>
<div className="flex gap-2 gap-x-2 gap-y-2 items-center">
<div className="grid h-8 w-8 place-items-center rounded-md bg-amber-100 text-amber-700 ring-1 ring-amber-200">
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4 4h16v16H4z"></path><path d="m22 6-10 7L2 6"></path></svg>
</div>
<a className="hover:underline font-medium" href="mailto:hello@lxacres.com">vitthalgholap@gmal.com</a>
</div>
</div>
</div>
<form action="#" aria-label="Contact form" className="md:col-span-3 grid gap-4 rounded-2xl bg-white p-6 ring-1 ring-black/10 shadow-[0_20px_60px_rgba(0,0,0,0.06)]" method="POST">
<div className="grid gap-4 sm:grid-cols-2">
<div className="">
<label className="text-xs font-medium text-neutral-700" htmlFor="name">Full name</label>
<input className="mt-1 w-full rounded-lg border-none bg-neutral-50 px-3 py-2 ring-1 ring-black/10 focus:ring-2 focus:ring-neutral-900" id="name" name="name" placeholder="Your name" required="" type="text"/>
</div>
<div>
<label className="text-xs font-medium text-neutral-700" htmlFor="email">Email</label>
<input className="mt-1 w-full rounded-lg border-none bg-neutral-50 px-3 py-2 ring-1 ring-black/10 focus:ring-2 focus:ring-neutral-900" id="email" name="email" placeholder="you@example.com" required="" type="email"/>
</div>
</div>
<div className="grid gap-4 sm:grid-cols-2">
<div className="">
<label className="text-xs font-medium text-neutral-700" htmlFor="budget">Target budget</label>
<input className="mt-1 w-full rounded-lg border-none bg-neutral-50 px-3 py-2 ring-1 ring-black/10 focus:ring-2 focus:ring-neutral-900" id="budget" name="budget" placeholder="$500k - $1.5M" type="text"/>
</div>
<div>
<label className="text-xs font-medium text-neutral-700" htmlFor="timeline">Timeline</label>
<select className="mt-1 w-full appearance-none rounded-lg border-none bg-neutral-50 px-3 py-2 ring-1 ring-black/10 focus:ring-2 focus:ring-neutral-900" id="timeline" name="timeline">
<option>Immediately</option>
<option>0–3 months</option>
<option>3–6 months</option>
<option>6+ months</option>
</select>
</div>
</div>
<div className="">
<label className="text-xs font-medium text-neutral-700" htmlFor="message">Notes / Criteria</label>
<textarea className="border-none focus:ring-2 focus:ring-neutral-900 bg-neutral-50 w-full rounded-lg ring-black/10 ring-1 mt-1 pt-2 pr-3 pb-2 pl-3" id="message" name="message" placeholder="Acreage, zoning, access, utilities, use case, etc." rows="4"></textarea>
</div>
<div className="flex items-center justify-between">
<label className="inline-flex items-center gap-2 text-xs text-neutral-600">
<input className="h-4 w-4 rounded border-neutral-300 text-neutral-900 focus:ring-neutral-900" type="checkbox"/>
                I agree to the privacy policy
              </label>
<button className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-medium text-amber-200 ring-1 ring-black/10 hover:scale-[1.02] active:scale-[0.99] transition" type="submit">
                Submit
                <svg className="h-4 w-4 opacity-90" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m22 2-7 20-4-9-9-4Z"></path><path d="M22 2 11 13"></path></svg>
</button>
</div>
</form>
</div>
</div>
</section>

<footer className="relative border-t border-black/5">
<div className="mx-auto max-w-7xl px-6 py-10 lg:px-10">
<div className="flex flex-col items-center justify-between gap-6 md:flex-row">
<div className="flex items-center gap-3">
<div className="grid place-items-center text-amber-300 bg-neutral-900 w-8 h-8 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/46a2461a-389a-4bef-ab69-fdcb67ba21e3_320w.jpg?w=800&amp;q=80)] bg-cover bg-center rounded-md"><span className="text-xs font-semibold"></span></div>
<div className="">
<p className="text-sm font-semibold">METRO</p>
<p className="text-xs text-neutral-500">Land. Plots. Precision.</p>
</div>
</div>
<nav className="flex items-center gap-5 text-sm">
<a className="text-neutral-600 hover:text-neutral-900" href="#featured">Featured</a>
<a className="text-neutral-600 hover:text-neutral-900" href="#why">Why Us</a>
<a className="text-neutral-600 hover:text-neutral-900" href="#map">Map</a>
<a className="text-neutral-600 hover:text-neutral-900" href="#testimonials">Testimonials</a>
<a className="text-neutral-600 hover:text-neutral-900" href="#contact">Contact</a>
</nav>
</div>
<div className="mt-6 flex flex-col items-center justify-between gap-4 border-t border-black/5 pt-6 text-xs text-neutral-500 md:flex-row">
<p className="">© <span id="year">2025</span> KS Krishna Sali. All rights reserved.</p>
<div className="flex items-center gap-4">
<a className="hover:text-neutral-800" href="#">Privacy</a>
<a className="hover:text-neutral-800" href="#">Terms</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
