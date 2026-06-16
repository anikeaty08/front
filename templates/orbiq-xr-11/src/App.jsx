import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    // Lucide icons
    document.addEventListener('DOMContentLoaded', () => {
      if (window.lucide) window.lucide.createIcons();
    });

    // Mini chart
    (() => {
      const ctx = document.getElementById('engagementChart');
      if (!ctx) return;
      const gradient = ctx.getContext('2d').createLinearGradient(0, 0, 0, 120);
      gradient.addColorStop(0, 'rgba(251, 191, 36, 0.5)');
      gradient.addColorStop(1, 'rgba(251, 191, 36, 0.02)');
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
          datasets: [{
            data: [18, 20, 22, 19, 25, 28, 27],
            tension: 0.35,
            borderColor: '#FBBF24',
            backgroundColor: gradient,
            pointRadius: 0,
            fill: true
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { display: false }, tooltip: { enabled: false } },
          scales: {
            x: { display: false, grid: { display: false } },
            y: { display: false, grid: { display: false } }
          }
        }
      });
    })();
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="pointer-events-none fixed inset-0 opacity-60">
<div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-amber-400/10 blur-3xl"></div>
<div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl"></div>
</div>

<div className="mx-auto max-w-7xl px-4 sm:px-6">

<header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60 bg-neutral-950/50">
<div className="flex items-center justify-between py-4">
<div className="flex items-center gap-3">
<span className="text-lg font-thin tracking-tight">Orbiq XR</span>
</div>
<nav className="hidden md:flex items-center gap-7 text-sm text-neutral-300">
<a className="hover:text-white transition" href="#">Home</a>
<a className="hover:text-white transition" href="#">Platform</a>
<a className="hover:text-white transition" href="#">Solutions</a>
<a className="hover:text-white transition" href="#">Pricing</a>
<a className="hover:text-white transition" href="#">Resources</a>
<a className="hover:text-white transition" href="#">Contact</a>
</nav>
<div className="flex items-center gap-3">
<button className="hidden sm:inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-neutral-200 ring-1 ring-white/10 hover:bg-white/5 transition">
<svg className="lucide lucide-play h-4 w-4" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
            Watch demo
          </button>
<button className="inline-flex gap-2 hover:bg-amber-200 transition text-sm font-semibold text-neutral-900 bg-gradient-to-br from-lime-400 to-lime-600 rounded-lg px-4 py-2 gap-x-2 gap-y-2 items-center">
<svg className="lucide lucide-calendar h-4 w-4" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
            Book a demo
          </button>
<button className="md:hidden inline-flex items-center justify-center rounded-lg h-9 w-9 ring-1 ring-white/10 hover:bg-white/5">
<svg className="lucide lucide-menu h-5 w-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</div>
</header>

<main className="relative mt-6 md:mt-10">
<section className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-stretch">

<div className="md:col-span-6 lg:col-span-7">
<div className="relative rounded-2xl bg-gradient-to-b from-neutral-900/60 to-neutral-900/40 ring-1 ring-white/10 p-6 sm:p-8 md:p-10">
<h1 className="sm:text-5xl lg:text-6xl leading-tight text-4xl font-light tracking-tight">Spatial Computing &amp; Digital AI Products</h1>
<p className="sm:text-lg text-base font-light text-neutral-300 max-w-xl mt-4">
              Build, deploy, and scale immersive apps with enterprise-grade headsets and an SDK that teams actually enjoy using.
            </p>

<div className="mt-6 flex flex-wrap gap-3">
<div className="flex items-center gap-2 rounded-xl bg-white/5 px-3 py-2 ring-1 ring-white/10">
<svg className="lucide lucide-zap w-[16px] h-[16px] text-lime-500" data-icon-replaced="true" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
<span className="text-sm font-light">Latency <span className="text-white/80">11ms</span></span>
</div>
<div className="flex items-center gap-2 rounded-xl bg-white/5 px-3 py-2 ring-1 ring-white/10">
<svg className="lucide lucide-shield-check h-4 w-4 text-emerald-300" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-sm font-light">SOC2-ready</span>
</div>
<div className="flex items-center gap-2 rounded-xl bg-white/5 px-3 py-2 ring-1 ring-white/10">
<svg className="lucide lucide-users h-4 w-4 text-sky-300" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<span className="text-sm font-light">2,800+ teams</span>
</div>
</div>

<div className="mt-7 flex flex-wrap items-center gap-3">
<button className="inline-flex hover:bg-amber-200 transition text-sm font-semibold text-neutral-900 bg-gradient-to-br from-lime-400 to-lime-600 rounded-xl px-5 py-3 gap-x-2 gap-y-2 items-center">
<svg className="lucide lucide-rocket h-4 w-4" data-lucide="rocket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
                Start free trial
              </button>
<button className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium text-neutral-200 ring-1 ring-white/10 hover:bg-white/5 transition">
<svg className="lucide lucide-play-circle h-5 w-5" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></svg>
                Watch success stories
              </button>
</div>

<div className="mt-8 flex gap-4 flex-col sm:flex-row">
<div className="relative flex-1 rounded-xl bg-neutral-900 ring-1 ring-white/10 overflow-hidden">
<img alt="Case study preview" className="opacity-90 w-full h-40 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/bbf57660-89ac-43f7-b438-c8a34177cdbe_800w.webp"/>
<div className="absolute top-2 left-2 inline-flex items-center gap-1 rounded-md bg-black/60 px-2 py-1 text-xs ring-1 ring-white/10">
<svg className="lucide lucide-message-square h-3.5 w-3.5" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg>
                  Case study
                </div>
<div className="p-4">
<p className="text-sm font-medium">“Onboarding dropped from weeks to days.”</p>
<p className="text-xs text-neutral-400">Ops Lead, Logistics</p>
</div>

</div>

<div className="w-full sm:w-56 rounded-xl bg-neutral-900 ring-1 ring-white/10 p-4">
<h3 className="text-sm font-medium tracking-tight">Engagement</h3>
<p className="mt-1 text-xs text-neutral-400">Session depth last 7 days</p>
<div className="bg-center bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/a5b35d50-a7de-4702-9aa9-43abf49981c4_800w.webp)] bg-cover rounded-lg mt-3 pt-2 pr-2 pb-2 pl-2">
<div className="relative h-24">
<div className="h-full w-full">
<div className="h-full w-full"></div>
</div>
</div>
</div>
<div className="mt-2 flex items-center justify-between text-xs">
<span className="text-neutral-400">Avg min</span>
<span className="font-medium text-emerald-300">+18%</span>
</div>
</div>
</div>
<p className="mt-8 text-xs text-neutral-500">© 2025 Orbiq Labs, Inc.</p>
</div>
</div>

<div className="md:col-span-6 lg:col-span-5">
<div className="relative h-[520px] sm:h-[560px] md:h-full rounded-2xl overflow-hidden ring-1 ring-white/10 bg-gradient-to-b from-neutral-900/60 to-neutral-900/40">

<img alt="Person using a VR headset" className="absolute inset-0 h-full w-full object-cover object-center opacity-[0.92]" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<div className="bg-center bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/c25d8f2d-1614-49d4-a6f4-d0ed32bf4178_1600w.jpg)] bg-cover absolute top-0 right-0 bottom-0 left-0"></div>

<div className="absolute right-4 top-4 bottom-4 flex w-56 sm:w-64 flex-col gap-4">
<div className="flex-1 rounded-xl overflow-hidden ring-1 ring-white/10 bg-neutral-900/50 backdrop-blur">
<div className="relative h-full">
<img alt="Remote learning" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
<div className="bg-center bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/1c675587-4e18-4781-a159-6ce0bfd62a8f_800w.webp)] bg-cover absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute left-3 bottom-3 right-3">
<div className="inline-flex items-center gap-1.5 text-xs text-white/80 mb-1">
<svg className="lucide lucide-message-square h-3.5 w-3.5" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg>
                      Use case
                    </div>
<p className="text-lg font-semibold tracking-tight">Remote Learning</p>
<p className="text-xs text-white/70">Virtual classrooms at scale</p>
</div>
</div>
</div>
<div className="flex-1 rounded-xl overflow-hidden ring-1 ring-white/10 bg-neutral-900/50 backdrop-blur">
<div className="relative h-full">
<img alt="Immersive training" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="bg-center bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/0e6d81c2-cf3e-4584-8882-0f6b81574c76_800w.webp)] bg-cover absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute left-3 bottom-3 right-3">
<div className="inline-flex items-center gap-1.5 text-xs text-white/80 mb-1">
<svg className="lucide lucide-message-square h-3.5 w-3.5" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg>
                      Use case
                    </div>
<p className="text-lg font-semibold tracking-tight">Immersive Training</p>
<p className="text-xs text-white/70">Hands-on simulations</p>
</div>
</div>
</div>
<div className="hidden sm:block flex-1 rounded-xl overflow-hidden ring-1 ring-white/10 bg-neutral-900/50 backdrop-blur">
<div className="relative h-full">
<img alt="Field collaboration" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<div className="bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/32116f58-3ebe-4337-9a81-b5d0b7b8a4a6_800w.webp)] bg-cover bg-center absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute left-3 bottom-3 right-3">
<div className="inline-flex items-center gap-1.5 text-xs text-white/80 mb-1">
<svg className="lucide lucide-message-square h-3.5 w-3.5" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg>
                      Use case
                    </div>
<p className="text-lg font-semibold tracking-tight">Field Collaboration</p>
<p className="text-xs text-white/70">Co-presence for teams</p>
</div>
</div>
</div>
</div>

<div className="absolute left-5 bottom-5 flex items-center gap-3 rounded-xl bg-black/50 px-3 py-2 ring-1 ring-white/10 backdrop-blur">
<svg className="lucide lucide-headset text-slate-50 w-[20px] h-[20px]" data-icon-replaced="true" data-lucide="headset" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z"></path><path d="M21 16v2a4 4 0 0 1-4 4h-5"></path></svg>
<div className="">
<p className="text-sm font-medium leading-none">Orbiq One</p>
<p className="text-xs text-neutral-300">Pro-grade XR headset</p>
</div>
</div>
</div>
</div>
</section>

<section className="mt-10 md:mt-14">
</section>

<section className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="rounded-2xl bg-neutral-900/40 ring-1 ring-white/10 p-6">
<div className="flex items-center justify-between">
<h3 className="text-xl font-thin tracking-tight">SDK &amp; APIs</h3>
<svg className="lucide lucide-code-2 w-[20px] h-[20px]" data-icon-replaced="true" data-lucide="code-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path></svg>
</div>
<p className="text-sm font-light text-neutral-300 mt-2">Drop-in components for input, anchors, passthrough, and multiplayer—designed to feel native.</p>
<a className="inline-flex items-center gap-1 hover:text-amber-200 text-sm text-lime-400 mt-4" href="#">
            Explore docs <svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="rounded-2xl bg-neutral-900/40 ring-1 ring-white/10 p-6">
<div className="flex items-center justify-between">
<h3 className="text-xl font-thin tracking-tight">Device Fleet</h3>
<svg className="lucide lucide-boxes w-[20px] h-[20px]" data-icon-replaced="true" data-lucide="boxes" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z"></path><path d="m7 16.5-4.74-2.85"></path><path d="m7 16.5 5-3"></path><path d="M7 16.5v5.17"></path><path d="M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z"></path><path d="m17 16.5-5-3"></path><path d="m17 16.5 4.74-2.85"></path><path d="M17 16.5v5.17"></path><path d="M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z"></path><path d="M12 8 7.26 5.15"></path><path d="m12 8 4.74-2.85"></path><path d="M12 13.5V8"></path></svg>
</div>
<p className="text-sm font-thin text-neutral-300 mt-2">Provision, update, and secure thousands of headsets with one dashboard.</p>
<a className="inline-flex items-center gap-1 hover:text-amber-200 text-sm text-lime-400 mt-4" href="#">
            View console <svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="bg-neutral-900/40 ring-white/10 ring-1 rounded-2xl pt-6 pr-6 pb-6 pl-6">
<div className="flex items-center justify-between">
<h3 className="text-xl font-thin tracking-tight">Global Support</h3><svg className="lucide lucide-activity" data-icon-replaced="true" data-icon-set="lucide" data-lucide="activity" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
</div>
<p className="text-sm font-thin text-neutral-300 mt-2">White-glove onboarding, 24/7 incident help, and architecture reviews.</p>
<a className="inline-flex items-center gap-1 hover:text-amber-200 text-sm text-lime-400 mt-4" href="#">
            Talk to an expert <svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</section>

<footer className="mt-12 md:mt-16 mb-8 text-center text-sm text-neutral-500">
        Built for teams shipping the future of spatial computing.
      </footer>
</main>
</div>





    </>
  );
}
