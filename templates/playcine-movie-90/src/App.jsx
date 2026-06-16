import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // Activate Lucide icons
      lucide.createIcons();

      // Subtle parallax for floating posters
      const floats = Array.from(document.querySelectorAll('.pointer-events-none .w-48, .pointer-events-none .w-52, .pointer-events-none .w-60'));
      const origins = new WeakMap();
      floats.forEach(el => origins.set(el, { x: 0, y: 0 }));

      window.addEventListener('mousemove', (e) => {
        const cx = window.innerWidth / 2;
        const cy = window.innerHeight / 2;
        const dx = (e.clientX - cx) / cx;
        const dy = (e.clientY - cy) / cy;
        floats.forEach((el, i) => {
          const depth = (i + 1) * 4;
          el.style.transform = `translate3d(${dx * depth}px, ${dy * depth}px, 0) rotate(${el.parentElement.classList.contains('rotate-3') ? 3 : el.parentElement.classList.contains('rotate-2') ? 2 : el.parentElement.classList.contains('rotate-[-2deg]') ? -2 : el.parentElement.classList.contains('rotate-[-6deg]') ? -6 : 0}deg)`;
        });
      }, { passive: true });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 -z-10">
<img alt="" className="h-full w-full object-cover opacity-80" src="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&amp;w=2400&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_20%,rgba(10,10,20,0.6),rgba(6,6,12,0.9))]"></div>

<div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl"></div>
<div className="pointer-events-none absolute -right-24 -bottom-24 h-80 w-80 rounded-full bg-sky-400/20 blur-3xl"></div>
</div>

<div className="relative mx-auto max-w-[120rem] p-3 md:p-6 lg:p-8">
<div className="relative rounded-3xl border border-indigo-500/20 bg-black/20 backdrop-blur-sm">

<div className="rounded-3xl absolute top-0 right-0 bottom-0 left-0"></div>

<header className="relative z-10 flex items-center justify-between px-5 py-4 md:px-8">
<div className="flex items-center gap-3">
<div className="relative inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-slate-100 to-slate-300 text-slate-800 shadow-sm ring-1 ring-black/5">
<svg className="lucide lucide-play h-4 w-4 translate-x-[1px]" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
<span className="absolute -inset-2 rounded-lg bg-white/0"></span>
</div>
<span className="text-lg font-semibold tracking-tight text-white">PLAYCINE</span>
</div>
<nav className="flex items-center gap-3 md:gap-4">
<a className="hidden text-sm font-medium text-slate-300 hover:text-white md:inline" href="#">Sign in</a>
<a className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-900 shadow-sm ring-1 ring-black/5 transition hover:bg-slate-100" href="#">
<svg className="lucide lucide-user-plus h-4 w-4" data-lucide="user-plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><line x1="19" x2="19" y1="8" y2="14"></line><line x1="22" x2="16" y1="11" y2="11"></line></svg>
<span className="">Join PlayCine</span>
</a>
</nav>
</header>

<section className="relative z-10 mx-auto max-w-5xl px-6 pb-16 pt-8 text-center md:pb-24 md:pt-12 lg:pt-16">
<h1 className="mx-auto max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Igniting Your Passion for Movies,<br className="hidden sm:block"/>
            Unleashing Wonder!
          </h1>
<p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-slate-300 sm:mt-5 sm:text-lg">
            Welcome to PLAYCINE, where the silver screen comes alive, offering a captivating web app
            experience that fuels your love for movies.
          </p>
<div className="flex mt-8 justify-center">
<a className="group inline-flex items-center gap-2 shadow-indigo-900/30 ring-1 ring-inset ring-white/10 transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-indigo-400 xl:my-16 text-base font-medium text-white bg-gradient-to-b from-indigo-500 to-indigo-600 rounded-full my-16 px-6 py-3 shadow-lg" href="#">
<svg className="lucide lucide-sparkles h-5 w-5 transition-transform group-hover:-rotate-6" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
              Discover PLAYCINE
              <svg className="lucide lucide-arrow-right h-5 w-5 transition-transform group-hover:translate-x-0.5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</section>

<div className="pointer-events-none absolute left-4 top-48 hidden rotate-[-6deg] md:block">
<div className="w-48 rounded-2xl bg-slate-800/50 p-1 backdrop-blur-md ring-1 ring-white/10" style={{transform: 'translate3d(-3.33333px, -3.97471px, 0px) rotate(-6deg)'}}>
<div className="relative h-64 overflow-hidden rounded-xl">
<img alt="" className="h-full w-full object-cover grayscale" src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&amp;w=900&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-tr from-red-600/60 via-transparent to-transparent mix-blend-multiply"></div>
<div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white to-transparent p-3">
<p className="text-xl font-semibold tracking-tight text-red-600">RAW</p>
<p className="text-[11px] font-medium text-slate-700/80">A Film by Wei Tran</p>
</div>
</div>
</div>
</div>
<div className="pointer-events-none absolute right-6 top-44 hidden rotate-3 md:block">
<div className="w-52 rounded-2xl bg-slate-800/50 p-1 backdrop-blur-md ring-1 ring-white/10" style={{transform: 'translate3d(-6.66667px, -7.94942px, 0px) rotate(3deg)'}}>
<div className="relative h-72 overflow-hidden rounded-xl">
<img alt="" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="absolute inset-0 bg-cyan-400/30 mix-blend-overlay"></div>
<div className="absolute bottom-2 left-2 rounded-md bg-white/90 px-2 py-1">
<span className="text-[11px] font-medium tracking-tight text-slate-900">ASCEND</span>
</div>
</div>
</div>
</div>
<div className="pointer-events-none absolute right-44 top-[28rem] hidden rotate-2 lg:block">
<div className="w-52 rounded-2xl bg-slate-800/50 p-1 backdrop-blur-md ring-1 ring-white/10" style={{transform: 'translate3d(-10px, -11.9241px, 0px) rotate(2deg)'}}>
<div className="relative h-72 overflow-hidden rounded-xl bg-white">
<img alt="" className="h-full w-full object-cover opacity-90" src="https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&amp;w=900&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-l from-orange-400/60 to-transparent mix-blend-multiply"></div>
<div className="absolute top-3 left-3">
<p className="text-xl font-semibold tracking-tight text-slate-900">AGENT</p>
<p className="text-[10px] font-medium text-slate-700">A Film by Neil Dhan</p>
</div>
</div>
</div>
</div>
<div className="pointer-events-none absolute right-24 bottom-8 hidden rotate-[-2deg] lg:block">
<div className="w-60 rounded-2xl bg-slate-800/50 p-1 backdrop-blur-md ring-1 ring-white/10" style={{transform: 'translate3d(-13.3333px, -15.8988px, 0px) rotate(-2deg)'}}>
<div className="relative h-72 overflow-hidden rounded-xl">
<img alt="" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<div className="absolute bottom-2 left-2">
<p className="rounded bg-slate-900/80 px-2 py-1 text-[11px] font-medium tracking-tight">WORLD DESTRUCTION</p>
</div>
</div>
</div>
</div>

<section className="relative z-10 -mt-4 px-4 pb-8 sm:-mt-10 sm:px-6 md:-mt-16 md:px-10 lg:-mt-24">
<div className="mx-auto max-w-6xl rounded-3xl bg-slate-900/70 p-3 shadow-2xl ring-1 ring-white/10 backdrop-blur-sm sm:p-5 md:p-6">
<div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 md:gap-4">

<article className="group relative overflow-hidden rounded-2xl bg-slate-800/70 ring-1 ring-white/10">
<img alt="Poster" className="h-48 w-full object-cover transition duration-500 group-hover:scale-[1.03]" src="https://images.unsplash.com/photo-1542204165-65bf26472b9b?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
<div className="absolute bottom-2 left-2 flex items-center gap-1">
<span className="rounded bg-white/90 px-2 py-0.5 text-[10px] font-medium text-slate-900">POISON</span>
</div>
</article>

<article className="group relative overflow-hidden rounded-2xl bg-slate-800/70 ring-1 ring-white/10">
<img alt="Poster" className="h-48 w-full object-cover transition duration-500 group-hover:scale-[1.03]" src="https://images.unsplash.com/photo-1447433819943-74a20887a81e?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<div className="absolute bottom-2 left-2 flex items-center gap-1">
<span className="rounded bg-white/90 px-2 py-0.5 text-[10px] font-medium text-slate-900">SPORT CAR</span>
</div>
</article>

<article className="group relative overflow-hidden rounded-2xl bg-slate-800/70 ring-1 ring-white/10">
<img alt="Poster" className="h-48 w-full object-cover transition duration-500 group-hover:scale-[1.03]" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
<div className="absolute bottom-2 left-2">
<span className="rounded bg-white/90 px-2 py-0.5 text-[10px] font-medium text-slate-900">MIDTOWN</span>
</div>
</article>

<article className="group relative overflow-hidden rounded-2xl bg-slate-800/70 ring-1 ring-white/10">
<img alt="Poster" className="h-48 w-full object-cover transition duration-500 group-hover:scale-[1.03]" src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<div className="absolute bottom-2 left-2">
<span className="rounded bg-white/90 px-2 py-0.5 text-[10px] font-medium text-slate-900">THE TRAIN OF LOVE</span>
</div>
</article>

<article className="group relative overflow-hidden rounded-2xl bg-slate-800/70 ring-1 ring-white/10">
<img alt="Poster" className="h-48 w-full object-cover transition duration-500 group-hover:scale-[1.03]" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent"></div>
<div className="absolute bottom-2 left-2">
<span className="rounded bg-white/90 px-2 py-0.5 text-[10px] font-medium text-slate-900">ONE NIGHT</span>
</div>
</article>

<article className="group relative overflow-hidden rounded-2xl bg-slate-800/70 ring-1 ring-white/10">
<img alt="Poster" className="h-48 w-full object-cover transition duration-500 group-hover:scale-[1.03]" src="https://images.unsplash.com/photo-1542992015-4a0b729b1385?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent"></div>
<div className="absolute bottom-2 left-2">
<span className="rounded bg-white/90 px-2 py-0.5 text-[10px] font-medium text-slate-900">LOVE ACT</span>
</div>
</article>

<article className="group relative overflow-hidden rounded-2xl bg-slate-800/70 ring-1 ring-white/10">
<img alt="Poster" className="h-48 w-full object-cover transition duration-500 group-hover:scale-[1.03]" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent"></div>
<div className="absolute bottom-2 left-2">
<span className="rounded bg-white/90 px-2 py-0.5 text-[10px] font-medium text-slate-900">RED MUSE</span>
</div>
</article>

<article className="group relative overflow-hidden rounded-2xl bg-slate-800/70 ring-1 ring-white/10">
<img alt="Poster" className="h-48 w-full object-cover transition duration-500 group-hover:scale-[1.03]" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent"></div>
<div className="absolute bottom-2 left-2">
<span className="rounded bg-white/90 px-2 py-0.5 text-[10px] font-medium text-slate-900">DEEP SEA</span>
</div>
</article>
</div>
</div>
</section>

<footer className="relative z-10 flex items-center gap-2 px-5 pb-5 text-xs text-slate-400 md:px-8">
<span>Made with</span>
<svg className="lucide lucide-heart h-3.5 w-3.5 text-violet-400" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
<span>by you</span>
</footer>
</div>
</div>


    </>
  );
}
