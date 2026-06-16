import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      window.addEventListener('DOMContentLoaded', () => {
        lucide.createIcons();

        const playBtn = document.getElementById('playReel');
        const modal = document.getElementById('reelModal');
        const closeBtn = document.getElementById('closeReel');
        const frame = document.getElementById('reelFrame');

        function openModal() {
          frame.src = 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&rel=0&modestbranding=1';
          modal.classList.remove('hidden');
        }
        function closeModal() {
          frame.src = '';
          modal.classList.add('hidden');
        }

        playBtn.addEventListener('click', openModal);
        closeBtn.addEventListener('click', closeModal);
        modal.addEventListener('click', (e) => {
          if (e.target === modal) closeModal();
        });

        document.addEventListener('keydown', (e) => {
          if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
            closeModal();
          }
        });
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<header className="sticky top-0 z-30 bg-zinc-100/80 backdrop-blur border-b border-zinc-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6">
<div className="flex items-center justify-between h-16">
<div className="flex items-center gap-2">
<span className="inline-flex h-8 w-8 items-center justify-center text-sm text-white bg-zinc-900 rounded-full">N</span>
<span className="text-xl font-semibold tracking-tight">studio.nova</span>
</div>
<nav className="hidden md:flex items-center gap-8 text-sm">
<a className="text-zinc-700 hover:text-zinc-900 font-medium" href="#">Studio</a>
<a className="text-zinc-700 hover:text-zinc-900 font-medium" href="#">Work <span className="ml-1 text-xs text-zinc-400">28</span></a>
<a className="text-zinc-700 hover:text-zinc-900 font-medium" href="#">Journal</a>
<a className="text-zinc-700 hover:text-zinc-900 font-medium" href="#">Contact</a>
</nav>
<button className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-300/70 bg-white text-zinc-900">
<svg className="lucide lucide-menu h-4 w-4" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>
</div>
</div>
</header>
<main className="max-w-7xl sm:px-6 sm:py-10 flex flex-col gap-12 mr-auto ml-auto pt-8 pr-4 pb-8 pl-4">


<section className="relative overflow-hidden h-[58vh] md:h-[64vh] bg-zinc-200 border-zinc-300 border rounded-3xl">
<img alt="Minimal portrait" className="absolute inset-0 w-full h-full object-center object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/7648beff-407a-45e7-b48d-8359fecc957f_3840w.jpg" style={{}}/>
<div className="relative z-10 h-full flex items-center justify-center">
<div className="absolute left-8 top-8 max-w-md">
<h3 className="leading-tight text-8xl font-medium text-white tracking-tighter mb-1">Nova</h3>
<p className="text-4xl font-normal text-white/80 tracking-tighter">We create digital experiences that drive real business results through strategic design and innovative solutions.</p>
</div>
<button className="group inline-flex items-center gap-4 px-5 py-3 rounded-full bg-white/90 backdrop-blur hover:bg-white transition text-zinc-900 border border-white/70 shadow-md" id="playReel">
<span className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900 text-white">
<svg className="lucide lucide-play h-5 w-5 translate-x-[1px]" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</span>
<div className="text-left">
<p className="sm:text-xl leading-tight text-lg font-semibold tracking-tight">Watch Our Story</p>
<p className="text-xs text-zinc-600">Behind the scenes</p>
</div>
</button>
</div>
<div className="absolute right-5 top-5 flex items-center gap-2 text-xs text-white/80">
<svg className="lucide lucide-star h-4 w-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span className="font-medium">A selection of client work</span>
</div>
</section><section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">

<article className="relative overflow-hidden sm:p-5 h-64 border-zinc-700 border rounded-2xl pt-4 pr-4 pb-4 pl-4 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">
<img alt="Team" className="absolute inset-0 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/2e03c3b5-4e4d-47ef-a18c-9bcbace611b5_800w.jpg" style={{}}/>
<div className="relative z-10 h-full flex flex-col">
<div className="flex items-start justify-between">
<div className="flex items-center gap-1">
<span className="h-1.5 w-1.5 rounded-full bg-white"></span>
<span className="h-1.5 w-1.5 rounded-full bg-white/40"></span>
<span className="h-1.5 w-1.5 rounded-full bg-white/40"></span>
</div>
<span className="text-[11px] text-white/70 font-medium">01</span>
</div>
<div className="mt-auto">
<h3 className="text-[15px] sm:text-base font-semibold leading-snug tracking-tight text-white">Human‑first strategy, delivered on schedule</h3>
<p className="mt-1 text-sm text-white/80">Clear process from kickoff to launch.</p>
</div>
</div>
</article>

<article className="relative overflow-hidden sm:p-5 h-64 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] border-zinc-700 border rounded-2xl pt-4 pr-4 pb-4 pl-4">
<img alt="Systems" className="absolute inset-0 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/5e0ad476-5d44-4dca-af2d-426c34df7845_800w.jpg" style={{}}/>
<div className="relative z-10 h-full flex flex-col">
<div className="flex items-start justify-between">
<div className="flex items-center gap-1">
<span className="h-1.5 w-1.5 rounded-full bg-white"></span>
<span className="h-1.5 w-1.5 rounded-full bg-white"></span>
<span className="h-1.5 w-1.5 rounded-full bg-white/40"></span>
</div>
<span className="text-[11px] text-white/70 font-medium">02</span>
</div>
<div className="mt-auto">
<h3 className="text-[15px] sm:text-base font-semibold leading-snug tracking-tight text-white">Tailored systems for complex teams</h3>
<p className="mt-1 text-sm text-white/80">Design ops that scale with you.</p>
</div>
</div>
</article>

<article className="relative overflow-hidden sm:p-5 h-64 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] border-zinc-700 border rounded-2xl pt-4 pr-4 pb-4 pl-4">
<img alt="Charts" className="absolute inset-0 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/8830c989-0aa7-4a9b-a1fc-a81e75ddc91c_800w.jpg" style={{}}/>
<div className="relative z-10 h-full flex flex-col">
<div className="flex items-start justify-between">
<div className="flex items-center gap-1">
<span className="h-1.5 w-1.5 rounded-full bg-white"></span>
<span className="h-1.5 w-1.5 rounded-full bg-white"></span>
<span className="h-1.5 w-1.5 rounded-full bg-white"></span>
</div>
<span className="text-[11px] text-white/70 font-medium">03</span>
</div>
<div className="mt-auto">
<h3 className="text-[15px] sm:text-base font-semibold leading-snug tracking-tight text-white">Straightforward pricing. No surprises.</h3>
<p className="mt-1 text-sm text-white/80">Options that fit your runway.</p>
</div>
</div>
</article>

<article className="relative overflow-hidden sm:p-5 h-64 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] border-zinc-700 border rounded-2xl pt-4 pr-4 pb-4 pl-4">
<img alt="Results" className="absolute inset-0 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/addc481a-a84c-4d6a-ab90-ca6729fb91b9_800w.jpg" style={{}}/>
<div className="relative z-10 h-full flex flex-col">
<div className="flex items-start justify-between">
<div className="flex items-center gap-1">
<span className="h-1.5 w-1.5 rounded-full bg-white"></span>
<span className="h-1.5 w-1.5 rounded-full bg-white"></span>
<span className="h-1.5 w-1.5 rounded-full bg-white"></span>
<span className="h-1.5 w-1.5 rounded-full bg-white"></span>
</div>
<span className="text-[11px] text-white/70 font-medium">04</span>
</div>
<div className="mt-auto">
<h3 className="text-[15px] sm:text-base font-semibold leading-snug tracking-tight text-white">Proof you can track and share</h3>
<p className="mt-1 text-sm text-white/80">Outcomes tied to metrics that matter.</p>
</div>
</div>
</article>
</section>

<section className="sm:p-8 bg-white border-zinc-200 border rounded-3xl pt-6 pr-6 pb-6 pl-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 items-start">

<div className="flex flex-col justify-between min-h-full">
<div className="">
<span className="text-sm text-zinc-500 font-medium">studio.nova®</span>
<h2 className="text-[44px] sm:text-6xl lg:text-7xl leading-[0.9] font-semibold text-zinc-900 tracking-tight mt-2">Meet our creative team.</h2>

<div className="mt-8 hidden sm:grid grid-cols-3 gap-6 text-zinc-300">
<div className="flex items-center gap-2">
<svg className="lucide lucide-plus h-4 w-4" data-lucide="plus" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
<span className="text-sm font-medium">Talent</span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-plus h-4 w-4" data-lucide="plus" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
<span className="text-sm font-medium">Vision</span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-plus h-4 w-4" data-lucide="plus" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
<span className="text-sm font-medium">Impact</span>
</div>
</div>
</div>
<div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8">
<div className="">
<p className="text-sm text-zinc-900 font-semibold tracking-tight">Join our growing team</p>
<p className="mt-1 text-sm text-zinc-600">We're always looking for passionate designers and developers to join our mission.</p>
<button aria-label="View careers" className="mt-4 inline-flex items-center gap-2 h-10 px-4 rounded-full bg-zinc-900 text-white text-sm font-medium hover:bg-zinc-800 transition">
            View careers
            <span className="inline-flex h-2 w-2 rounded-full bg-white"></span>
</button>
</div>
<p className="text-base text-zinc-700 leading-relaxed sm:text-right">
          Our team brings together <span className="font-semibold">diverse expertise</span> to create exceptional digital experiences that drive real business results.
        </p>
</div>
</div>

<div className="grid grid-cols-2 gap-4 h-[320px]">

<article className="relative overflow-hidden h-[200px] bg-zinc-100 border-zinc-200 border rounded-2xl">
<img alt="Portrait of Emma Rodriguez" className="absolute inset-0 h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/8971b844-3f76-4d34-963f-0426b84c3985_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
<div className="absolute top-3 left-3">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/90 text-zinc-900 border border-white/80 shadow-sm">
<svg className="lucide lucide-plus h-3.5 w-3.5" data-lucide="plus" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</span>
</div>
<div className="absolute top-3 right-3">
<span className="px-2 py-1 rounded-md bg-black/40 backdrop-blur text-[11px] text-white/90 font-medium">Creative Director</span>
</div>
<div className="absolute bottom-3 left-3 right-3">
<p className="text-white text-lg font-semibold tracking-tight leading-tight">EmmaRodriguez</p>
</div>
</article>

<article className="relative overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 h-[200px]">
<img alt="Portrait of David Chen" className="absolute inset-0 h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/3aa0792c-4408-4b05-88bd-3d38d695f27e_800w.jpg" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
<div className="absolute top-3 left-3">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/90 text-zinc-900 border border-white/80 shadow-sm">
<svg className="lucide lucide-plus h-3.5 w-3.5" data-lucide="plus" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</span>
</div>
<div className="absolute top-3 right-3">
<span className="px-2 py-1 rounded-md bg-black/40 backdrop-blur text-[11px] text-white/90 font-medium">Lead Developer</span>
</div>
<div className="absolute bottom-3 left-3 right-3">
<p className="text-white text-lg font-semibold tracking-tight leading-tight">DavidChen</p>
</div>
</article>

<article className="relative overflow-hidden bg-zinc-100 border-zinc-200 border rounded-2xl h-[200px]">
<img alt="Portrait of Maya Johnson" className="absolute inset-0 h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/0e60f1bd-bde0-4ec4-8c23-24383a8b650a_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
<div className="absolute top-3 left-3">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/90 text-zinc-900 border border-white/80 shadow-sm">
<svg className="lucide lucide-plus h-3.5 w-3.5" data-lucide="plus" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</span>
</div>
<div className="absolute top-3 right-3">
<span className="px-2 py-1 rounded-md bg-black/40 backdrop-blur text-[11px] text-white/90 font-medium">UX Strategist</span>
</div>
<div className="absolute bottom-3 left-3 right-3">
<p className="text-white text-lg font-semibold tracking-tight leading-tight">MayaJohnson</p>
</div>
</article>

<article className="relative overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 h-[200px]">
<img alt="Portrait of Alex Thompson" className="absolute inset-0 h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/13a5581f-35ac-4b9e-ae7c-47573e09ab8e_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
<div className="absolute top-3 left-3">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/90 text-zinc-900 border border-white/80 shadow-sm">
<svg className="lucide lucide-plus h-3.5 w-3.5" data-lucide="plus" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</span>
</div>
<div className="absolute top-3 right-3">
<span className="px-2 py-1 rounded-md bg-black/40 backdrop-blur text-[11px] text-white/90 font-medium">Brand Designer</span>
</div>
<div className="absolute bottom-3 left-3 right-3">
<p className="text-white text-lg font-semibold tracking-tight leading-tight">AlexThompson</p>
</div>
</article>
</div>
</div>
</section><section className="sm:p-8 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] bg-zinc-900 border-zinc-700 border rounded-3xl pt-6 pr-6 pb-6 pl-6" id="aura-emeia8iep">
<div className="flex items-center gap-2 text-sm text-zinc-400">
<svg className="lucide lucide-star h-4 w-4" data-lucide="star" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span className="font-medium">Client Success Stories</span>
</div>
<div className="mt-2">
<h2 className="text-[44px] sm:text-6xl lg:text-7xl xl:text-8xl font-semibold tracking-tight leading-[0.9] text-white">Reviews.</h2>
<p className="mt-1 text-sm sm:text-base text-zinc-400 font-medium">Real feedback from real clients</p>
</div>
<div className="mt-6 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">

<article className="bg-zinc-800 border border-zinc-700 rounded-2xl p-5 sm:p-6 flex flex-col justify-between min-h-[420px]">
<div className="space-y-5">
<div className="flex items-end gap-2">
<span className="text-5xl sm:text-6xl font-semibold tracking-tight text-white">4.8</span>
<span className="text-zinc-400 text-base font-medium">/5</span>
</div>
<p className="text-sm text-zinc-300">We've completed <span className="font-semibold text-white">78+ successful projects</span> that drive measurable business growth.</p>
<div className="flex items-center gap-3">
<span className="text-sm font-semibold text-white">studio.nova®</span>
</div>
<div className="flex items-center gap-2">
<img alt="Client 1" className="h-7 w-7 ring-2 ring-zinc-700 object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/ccb2768f-93cf-4a28-bc1b-c1366e15fc03_320w.jpg" style={{}}/>
<img alt="Client 2" className="h-7 w-7 ring-2 ring-zinc-700 -ml-2 object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/b3738db4-e122-4f81-a199-9ae2536b9357_320w.jpg" style={{}}/>
<img alt="Client 3" className="h-7 w-7 ring-2 ring-zinc-700 -ml-2 object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/58209f8d-3aac-451a-a02c-ef7ca0a96175_320w.jpg" style={{}}/>
<span className="inline-flex items-center justify-center -ml-1 h-7 px-2 rounded-full bg-white text-zinc-900 text-xs font-medium">78+</span>
</div>
<div className="flex items-center gap-1 text-amber-500">
<svg className="lucide lucide-star h-4 w-4" data-lucide="star" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span className="text-xs text-zinc-400 font-medium">Rated by partners globally</span>
</div>
</div>
<button className="mt-6 h-11 w-full rounded-full bg-white text-zinc-900 text-sm font-medium hover:bg-zinc-100 transition">
        Share your experience
      </button>
</article>

<div className="grid grid-rows-[auto_1fr] gap-4">
<article className="bg-zinc-800 border border-zinc-700 rounded-2xl p-4 flex items-center justify-between">
<div className="flex items-center gap-3">
<img alt="Sarah Chen" className="h-9 w-9 object-cover rounded-md" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/7206b228-1279-4d12-b408-6a9e34152341_320w.jpg" style={{}}/>
<div>
<p className="text-sm font-semibold tracking-tight leading-tight text-white">Sarah Chen</p>
<p className="text-xs text-zinc-400">TechFlow Solutions</p>
</div>
</div>
<span className="text-zinc-600">
<svg className="lucide lucide-plus h-4 w-4" data-lucide="plus" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</span>
</article>
<article className="bg-zinc-800 border border-zinc-700 rounded-2xl p-5 sm:p-6 flex flex-col justify-between min-h-[420px]">
<div className="flex items-center justify-between">
<div className="flex items-center gap-1 text-amber-500">
<svg className="lucide lucide-star h-4 w-4" data-lucide="star" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4" data-lucide="star" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4" data-lucide="star" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4" data-lucide="star" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4" data-lucide="star" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<span className="text-zinc-600">
<svg className="lucide lucide-plus h-4 w-4" data-lucide="plus" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</span>
</div>
<p className="text-2xl sm:text-3xl font-semibold tracking-tight text-right leading-snug text-white">Outstanding design vision! They transformed our brand completely and our conversion rates increased by 240%.</p>
</article>
</div>

<div className="grid grid-rows-[1fr_auto] gap-4">
<article className="bg-zinc-800 border border-zinc-700 rounded-2xl p-6 flex flex-col justify-between min-h-[420px]">
<p className="text-2xl sm:text-3xl font-semibold tracking-tight text-center leading-snug text-white">Best investment we've made for our company. The team is incredibly talented and responsive.</p>
<div className="mt-6 flex items-center justify-between">
<div className="flex items-center gap-1 text-amber-500">
<svg className="lucide lucide-star h-4 w-4" data-lucide="star" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4" data-lucide="star" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4" data-lucide="star" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4" data-lucide="star" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4" data-lucide="star" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<span className="text-zinc-600">
<svg className="lucide lucide-plus h-4 w-4" data-lucide="plus" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</span>
</div>
</article>
<article className="bg-zinc-800 border border-zinc-700 rounded-2xl p-4 flex items-center gap-3">
<img alt="Marcus Johnson" className="h-9 w-9 object-cover rounded-md" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/03e7a11a-281a-4d56-b980-f5e027acbaf7_320w.jpg" style={{}}/>
<div className="">
<p className="text-sm font-semibold tracking-tight leading-tight text-white">Marcus Johnson</p>
<p className="text-xs text-zinc-400">Innovate Labs</p>
</div>
</article>
</div>

<div className="grid grid-rows-[auto_1fr] gap-4">
<article className="bg-zinc-800 border border-zinc-700 rounded-2xl p-4 flex items-center justify-between">
<div className="flex items-center gap-3">
<img alt="Maya Patel" className="h-9 w-9 object-cover rounded-md" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/05b8d217-cbbf-409b-a1ff-f4515ea6aab3_320w.jpg" style={{}}/>
<div>
<p className="text-sm font-semibold tracking-tight leading-tight text-white">Maya Patel</p>
<p className="text-xs text-zinc-400">Design Director</p>
</div>
</div>
<span className="text-zinc-600">
<svg className="lucide lucide-plus h-4 w-4" data-lucide="plus" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</span>
</article>
<article className="bg-zinc-800 border border-zinc-700 rounded-2xl p-5 sm:p-6 flex flex-col justify-between min-h-[420px]">
<div className="flex items-center justify-between">
<div className="flex items-center gap-1 text-amber-500">
<svg className="lucide lucide-star h-4 w-4" data-lucide="star" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4" data-lucide="star" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4" data-lucide="star" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4" data-lucide="star" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4" data-lucide="star" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<span className="text-zinc-600">
<svg className="lucide lucide-plus h-4 w-4" data-lucide="plus" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</span>
</div>
<p className="text-2xl sm:text-3xl font-semibold tracking-tight text-right leading-snug text-white">Revolutionary approach to design! Our user engagement improved by 180% after the rebrand.</p>
</article>
</div>
</div>
</section>
<footer className="sm:p-8 bg-white border-zinc-200 border rounded-3xl mt-10 px-6 py-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

<div className="">
<h3 className="text-4xl font-semibold text-zinc-900 tracking-tight">
        Whether you’re looking to build a stunning website, boost your brand, or drive measurable results, <span className="underline decoration-zinc-300 underline-offset-4">we’re here to help</span>.
      </h3>
<div className="mt-6 flex items-center gap-3">
<img alt="Client Success Manager" className="h-10 w-10 ring-1 ring-zinc-200 object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/0129262d-84f8-4262-b816-efd622faf4e8_320w.jpg"/>
<div className="">
<p className="text-sm font-semibold tracking-tight text-zinc-900">George Stern</p>
<p className="text-xs text-zinc-500">Head of Product</p>
</div>
</div>
<div className="mt-10 space-y-2">
<p className="text-sm text-zinc-600">(312) 123‑3445</p>
<a className="inline-flex items-center gap-3 text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-900 underline decoration-zinc-300 underline-offset-4" href="mailto:hello@studionova.com">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-zinc-900 text-white">
<svg className="lucide lucide-plus h-3.5 w-3.5" data-lucide="plus" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</span>
          hello@studionova.com
        </a>
</div>
</div>

<div className="">
<h4 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-900">Newsletter</h4>
<form action="#" className="mt-6 space-y-6" method="post">
<div className="">
<label className="sr-only" htmlFor="nl-name">Your name</label>
<input className="w-full bg-transparent border-b border-zinc- focus:border-zinc-900 outline-none py-3 text-sm text-zinc-900 placeholder-zinc-400" id="nl-name" name="name" placeholder="Your name *" type="text"/>
</div>
<div className="">
<label className="sr-only" htmlFor="nl-email">Email</label>
<input className="w-full bg-transparent border-b border-zinc-200 focus:border-zinc-900 outline-none py-3 text-sm text-zinc-900 placeholder-zinc-400" id="nl-email" name="email" placeholder="Email *" type="email"/>
</div>
<div className="flex items-center gap-4">
<button className="inline-flex items-center justify-between gap-3 px-4 py-2.5 rounded-full bg-zinc-900 text-white text-sm font-medium hover:bg-zinc-800 transition" type="submit">
            Subscribe
            <span className="inline-flex h-2 w-2 rounded-full bg-white"></span>
</button>
<p className="text-sm text-zinc-500">Get exclusive design insights and industry updates delivered to your inbox monthly.</p>
</div>
</form>
<div className="grid grid-cols-2 gap-8 mt-10">
<div className="">
<p className="text-xs text-zinc-500 font-medium">Quick Links</p>
<ul className="mt-3 space-y-2">
<li className=""><a className="text-lg font-semibold tracking-tight text-zinc-900 hover:underline underline-offset-4" href="#">About</a></li>
<li className=""><a className="text-lg font-semibold tracking-tight text-zinc-900 hover:underline underline-offset-4" href="#">Services</a></li>
<li><a className="text-lg font-semibold tracking-tight text-zinc-900 hover:underline underline-offset-4" href="#">Portfolio</a></li>
<li className=""><a className="text-lg font-semibold tracking-tight text-zinc-900 hover:underline underline-offset-4" href="#">Blog</a></li>
</ul>
</div>
<div className="">
<p className="text-xs text-zinc-500 font-medium">Connect</p>
<ul className="mt-3 space-y-2">
<li>
<a className="inline-flex items-center gap-2 text-lg font-semibold tracking-tight text-zinc-900 hover:underline underline-offset-4" href="#">
          LinkedIn
          <svg className="lucide lucide-external-link h-4 w-4" data-lucide="external-link" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
</a>
</li>
<li>
<a className="inline-flex items-center gap-2 text-lg font-semibold tracking-tight text-zinc-900 hover:underline underline-offset-4" href="#">
          Behance
          <svg className="lucide lucide-external-link h-4 w-4" data-lucide="external-link" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
</a>
</li>
<li className="">
<a className="inline-flex items-center gap-2 text-lg font-semibold tracking-tight text-zinc-900 hover:underline underline-offset-4" href="#">
          GitHub
          <svg className="lucide lucide-external-link h-4 w-4" data-lucide="external-link" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
</a>
</li>
</ul>
</div>
</div>
</div>
</div>
<div className="mt-10 pt-6 border-t border-zinc-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
<div className="flex items-center gap-2">
<span className="inline-flex h-8 w-8 items-center justify-center text-sm text-white bg-zinc-900 rounded-full">N</span>
<span className="text-sm font-semibold tracking-tight">studio.nova</span>
</div>
<p className="text-xs text-zinc-500">© <span className="font-medium">2025</span> studio.nova® — All rights reserved</p>
</div>
</footer>
</main>

<div className="fixed inset-0 z-50 hidden" id="reelModal">
<div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
<div className="relative h-full w-full flex items-center justify-center p-4">
<div className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl">
<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="" className="absolute inset-0 w-full h-full" id="reelFrame" src="" title="Case Film"></iframe>
<button className="absolute top-3 right-3 h-9 w-9 inline-flex items-center justify-center rounded-full bg-white/90 text-zinc-900 hover:bg-white" id="closeReel">
<svg className="lucide lucide-x h-5 w-5" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
</div>
</div>


    </>
  );
}
