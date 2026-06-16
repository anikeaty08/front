import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    (function () {
      const ctx = document.getElementById('engagementChart');
      if (!ctx || window.__rsChartInitialized) return;
      window.__rsChartInitialized = true;

      const data = {
        labels: ['C1', 'C2', 'C3', 'C4', 'C5', 'C6'],
        datasets: [
          {
            label: 'Campaign',
            data: [3.2, 3.8, 4.1, 4.4, 4.0, 4.6],
            borderColor: 'rgba(56,189,248,1)',
            backgroundColor: 'rgba(56,189,248,0.15)',
            tension: 0.35,
            fill: true,
            borderWidth: 2,
            pointRadius: 0,
          },
          {
            label: 'Industry benchmark',
            data: [1.8, 1.8, 1.8, 1.8, 1.8, 1.8],
            borderColor: 'rgba(148,163,184,0.8)',
            borderDash: [6, 4],
            tension: 0,
            fill: false,
            borderWidth: 1.5,
            pointRadius: 0,
          },
        ],
      };

      new Chart(ctx, {
        type: 'line',
        data,
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: {
              display: false,
            },
            y: {
              display: false,
              beginAtZero: true,
            },
          },
          plugins: {
            legend: {
              display: false,
            },
            tooltip: {
              enabled: true,
              backgroundColor: 'rgba(15,23,42,0.9)',
              borderColor: 'rgba(148,163,184,0.4)',
              borderWidth: 1,
              padding: 8,
              displayColors: false,
              callbacks: {
                label: function (ctx) {
                  return ctx.dataset.label + ': ' + ctx.formattedValue + '%';
                },
              },
            },
          },
          elements: {
            line: {
              borderJoinStyle: 'round',
            },
          },
        },
      });
    })();
  


    // Cursor ring
    const c = document.getElementById('cursor');
    window.addEventListener('pointermove', (e)=>{ c.style.left = e.clientX + 'px'; c.style.top = e.clientY + 'px'; });

    // Mobile nav
    const sheet = document.getElementById('mobileNav');
    document.getElementById('menuBtn').addEventListener('click', ()=>{ sheet.style.opacity = 1; sheet.style.pointerEvents = 'auto'; });
    document.getElementById('closeSheet').addEventListener('click', ()=>{ sheet.style.opacity = 0; sheet.style.pointerEvents = 'none'; });
    sheet.addEventListener('click', (e)=>{ if(e.target === sheet){ sheet.style.opacity = 0; sheet.style.pointerEvents = 'none'; }});
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="" id="wrapper">

<div className="gradient-blur" style={{}}>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
</div>
<style className="">
    .gradient-blur {
      position: fixed;
      z-index: 5;
      inset: 0 0 auto 0;
      height: 12%;
      pointer-events: none;
    }

    .gradient-blur>div,
    .gradient-blur::before,
    .gradient-blur::after {
      position: absolute;
      inset: 0;
    }

    .gradient-blur::before {
      content: "";
      z-index: 1;
      backdrop-filter: blur(0.5px);
      mask: linear-gradient(to top,
          rgba(0, 0, 0, 0) 0%,
          rgba(0, 0, 0, 1) 12.5%,
          rgba(0, 0, 0, 1) 25%,
          rgba(0, 0, 0, 0) 37.5%);
    }

    .gradient-blur>div:nth-of-type(1) {
      z-index: 2;
      backdrop-filter: blur(1px);
      mask: linear-gradient(to top,
          rgba(0, 0, 0, 0) 12.5%,
          rgba(0, 0, 0, 1) 25%,
          rgba(0, 0, 0, 1) 37.5%,
          rgba(0, 0, 0, 0) 50%);
    }

    .gradient-blur>div:nth-of-type(2) {
      z-index: 3;
      backdrop-filter: blur(2px);
      mask: linear-gradient(to top,
          rgba(0, 0, 0, 0) 25%,
          rgba(0, 0, 0, 1) 37.5%,
          rgba(0, 0, 0, 1) 50%,
          rgba(0, 0, 0, 0) 62.5%);
    }

    .gradient-blur>div:nth-of-type(3) {
      z-index: 4;
      backdrop-filter: blur(4px);
      mask: linear-gradient(to top,
          rgba(0, 0, 0, 0) 37.5%,
          rgba(0, 0, 0, 1) 50%,
          rgba(0, 0, 0, 1) 62.5%,
          rgba(0, 0, 0, 0) 75%);
    }

    .gradient-blur>div:nth-of-type(4) {
      z-index: 5;
      backdrop-filter: blur(8px);
      mask: linear-gradient(to top,
          rgba(0, 0, 0, 0) 50%,
          rgba(0, 0, 0, 1) 62.5%,
          rgba(0, 0, 0, 1) 75%,
          rgba(0, 0, 0, 0) 87.5%);
    }

    .gradient-blur>div:nth-of-type(5) {
      z-index: 6;
      backdrop-filter: blur(16px);
      mask: linear-gradient(to top,
          rgba(0, 0, 0, 0) 62.5%,
          rgba(0, 0, 0, 1) 75%,
          rgba(0, 0, 0, 1) 87.5%,
          rgba(0, 0, 0, 0) 100%);
    }

    .gradient-blur>div:nth-of-type(6) {
      z-index: 7;
      backdrop-filter: blur(32px);
      mask: linear-gradient(to top,
          rgba(0, 0, 0, 0) 75%,
          rgba(0, 0, 0, 1) 87.5%,
          rgba(0, 0, 0, 1) 100%);
    }

    .gradient-blur::after {
      content: "";
      z-index: 8;
      backdrop-filter: blur(64px);
      mask: linear-gradient(to top,
          rgba(0, 0, 0, 0) 87.5%,
          rgba(0, 0, 0, 1) 100%);
    }
  </style>
</div>

<div className="cursor-ring hidden md:block" id="cursor" style={{left: '233.008px', top: '0.841141px'}}></div>

<header className="fixed z-40 top-0 right-0 left-0">
<div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
<a className="font-extrabold tracking-tight text-xl" href="#top">Rhythm<span className="text-white/60">Style</span></a>
<nav className="hidden md:flex items-center gap-8 text-sm text-white/70">
<a className="transition hover:text-white" href="#work">Our Work</a>
<a className="transition hover:text-white" href="#services">Services</a>
<a className="transition hover:text-white" href="#about">Company</a>
<a className="inline-flex items-center gap-2 rounded-full px-4 py-2 font-medium transition bg-white text-black hover:bg-white/90" href="#contact">Get in touch</a>
</nav>
<button className="md:hidden inline-flex items-center gap-2 px-3 py-2 rounded-lg border transition border-white/15 hover:border-white/30" id="menuBtn">Menu</button>
</div>
</header>


<section className="min-h-[110svh] flex md:items-center bg-center bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/034b9f3f-b048-459b-ab38-978a5c95e847_3840w.webp)] bg-cover pt-24 relative items-end" id="top" style={{maskImage: 'linear-gradient(180deg, transparent, black 0%, black 75%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 0%, black 75%, transparent)'}}>
<div className="grid md:grid-cols-12 gap-8 w-full max-w-7xl mr-auto ml-auto pr-6 pb-16 pl-6 gap-x-8 gap-y-8">
<div className="md:col-span-10">
<h1 className="hero-word md:text-8xl leading-[0.95] text-5xl font-extrabold tracking-tight">
<span className="block">We <span className="stroke-ghost">Are</span></span>
<span className="block">Match Makers</span>
</h1>
<p className="mt-6 max-w-2xl text-lg text-white/70">We connect the right talent to the right brands at the right time to create unforgettable, measurable experiences.</p>
<div className="mt-8 flex items-center gap-4 flex-wrap">
<a className="rounded-full px-5 py-3 font-medium transition bg-white text-black hover:bg-white/90" href="#work">See our work</a>
<a className="rounded-full px-5 py-3 border transition border-white/20 hover:border-white/40" href="#contact">Get started</a>
</div>
</div>

</div>

<div className="absolute left-6 md:left-10 bottom-10 glass rounded-2xl px-4 py-3 text-sm flex items-center gap-3 floating" style={{}}>
<div className="size-2 rounded-full bg-emerald-400"></div>
      Talent network: <span className="font-semibold">100+ agencies</span>
</div>
</section>

<section aria-label="Partner brands" className="md:py-24 pt-16 pb-16">
<div className="mx-auto max-w-7xl px-6">
<p className="text-sm mb-6 text-white/50">Partnering with the world's leading brands</p>
</div>
<div className="overflow-hidden brand-row">
<div className="flex animate-[marquee_25s_linear_infinite] will-change-transform pt-4 pr-6 pb-4 pl-6 gap-x-16 gap-y-16 items-center">

<div className="brand-item h-10 px-8 py-2 rounded-lg font-semibold text-sm whitespace-nowrap bg-white/10">Toyota</div>
<div className="brand-item h-10 px-8 py-2 rounded-lg font-semibold text-sm whitespace-nowrap bg-white/10">Logitech</div>
<div className="brand-item h-10 px-8 py-2 rounded-lg font-semibold text-sm whitespace-nowrap bg-white/10">Campbell's</div>
<div className="brand-item whitespace-nowrap text-sm font-semibold h-10 rounded-lg pt-2 pr-8 pb-2 pl-8 bg-white/10">KFC</div>
<div className="brand-item h-10 px-8 py-2 rounded-lg font-semibold text-sm whitespace-nowrap bg-white/10">Ford</div>
<div className="brand-item h-10 px-8 py-2 rounded-lg font-semibold text-sm whitespace-nowrap bg-white/10">Starbucks</div>
<div className="brand-item whitespace-nowrap text-sm font-semibold h-10 rounded-lg pt-2 pr-8 pb-2 pl-8 bg-white/10">Capital One</div>

<div className="brand-item h-10 px-8 py-2 rounded-lg font-semibold text-sm whitespace-nowrap bg-white/10">Toyota</div>
<div className="brand-item h-10 px-8 py-2 rounded-lg font-semibold text-sm whitespace-nowrap bg-white/10">Logitech</div>
<div className="brand-item h-10 px-8 py-2 rounded-lg font-semibold text-sm whitespace-nowrap bg-white/10">Campbell's</div>
<div className="brand-item h-10 px-8 py-2 rounded-lg font-semibold text-sm whitespace-nowrap bg-white/10">KFC</div>
<div className="brand-item h-10 px-8 py-2 rounded-lg font-semibold text-sm whitespace-nowrap bg-white/10">Ford</div>
<div className="brand-item h-10 px-8 py-2 rounded-lg font-semibold text-sm whitespace-nowrap bg-white/10">Starbucks</div>
<div className="brand-item h-10 px-8 py-2 rounded-lg font-semibold text-sm whitespace-nowrap bg-white/10">Capital One</div>
</div>
</div>
</section>

<section className="pin-section md:py-36 pt-24 pb-24" id="work">
<div className="mx-auto max-w-7xl px-6 grid md:grid-cols-12 gap-10 items-start">
<div className="md:col-span-6 md:sticky md:top-28">
<h2 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">Previous <span className="stroke-ghost">Work</span></h2>
<p className="mt-4 max-w-lg text-white/70">From athletes and celebrities to social media stars, we select authentic voices to partner with your brand.</p>
<a className="mt-6 inline-flex rounded-full px-5 py-3 font-medium transition bg-white text-black hover:bg-white/90" href="#">See all case studies</a>
</div>
<div className="md:col-span-6 flex flex-col gap-8">

<article className="group glass rounded-3xl overflow-hidden transition duration-300 hover:border-white/20">
<div className="relative overflow-hidden">
<img alt="Case 1" className="w-full h-64 object-cover group-hover:scale-105 transition duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/56e071db-3aa9-4abd-b73a-7bb1624e222f_1600w.webp" style={{}}/>
<div className="bg-gradient-to-t to-transparent absolute top-0 right-0 bottom-0 left-0 from-black/60"></div>
</div>
<div className="p-6">
<h3 className="text-2xl font-bold">Mariah Carey × Kay Jewelers</h3>
<p className="mt-2 text-white/70">#jewelry</p>
</div>
</article>

<article className="group glass rounded-3xl overflow-hidden transition duration-300 hover:border-white/20">
<div className="relative overflow-hidden">
<img alt="Case 2" className="w-full h-64 object-cover group-hover:scale-105 transition duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b9595e1f-a52f-45fa-89de-29a379b787d8_1600w.webp" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t to-transparent from-black/60"></div>
</div>
<div className="p-6">
<h3 className="text-2xl font-bold">Kalen Allen × Starbucks</h3>
<p className="mt-2 text-white/70">#foodandbev</p>
</div>
</article>

<article className="group glass rounded-3xl overflow-hidden transition duration-300 hover:border-white/20">
<div className="relative overflow-hidden">
<img alt="Case 3" className="w-full h-64 object-cover group-hover:scale-105 transition duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8debad0f-fc57-4505-85e1-b9427e6dba7f_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t to-transparent from-black/60"></div>
</div>
<div className="p-6">
<h3 className="text-2xl font-bold">HappyKelli × Outshine</h3>
<p className="mt-2 text-white/70">#foodandbev</p>
</div>
</article>
</div>
</div>
</section>

<section className="py-24 md:py-36" id="services">
<div className="mx-auto max-w-7xl px-6">
<div className="flex items-end justify-between gap-10 flex-wrap">
<h2 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight max-w-2xl">A <span className="stroke-ghost">Talent-First</span> approach to full service</h2>
<a className="rounded-full px-5 py-3 border transition border-white/20 hover:border-white/40" href="#">See our services</a>
</div>
<div className="grid grid-auto-fit gap-6 mt-10">

<div className="glass rounded-3xl p-6 transition duration-300 hover:border-white/20">
<h3 className="text-xl font-semibold">1. Strategy &amp; Ideation</h3>
<p className="mt-2 text-white/70">Audience research, concepting, and creative roadmaps that align brand with culture.</p>
</div>
<div className="glass rounded-3xl p-6 transition duration-300 hover:border-white/20">
<h3 className="text-xl font-semibold">2. Creator Discovery</h3>
<p className="mt-2 text-white/70">Shortlisting the right creators using fit, authenticity, and brand safety signals.</p>
</div>
<div className="glass rounded-3xl p-6 transition duration-300 hover:border-white/20">
<h3 className="text-xl font-semibold">3. Creator Management</h3>
<p className="mt-2 text-white/70">Contracts, briefings, and approvals: we handle the messy bits.</p>
</div>
<div className="glass rounded-3xl p-6 transition duration-300 hover:border-white/20">
<h3 className="text-xl font-semibold">4. Content Production</h3>
<p className="mt-2 text-white/70">End-to-end shoots &amp; remote UGC; vertical, square, horizontal — ready for distribution.</p>
</div>
<div className="glass rounded-3xl p-6 transition duration-300 hover:border-white/20">
<h3 className="text-xl font-semibold">5. Content Distribution</h3>
<p className="mt-2 text-white/70">Paid &amp; organic orchestration across social, retail media and OOH.</p>
</div>
<div className="glass rounded-3xl p-6 transition duration-300 hover:border-white/20">
<h3 className="text-xl font-semibold">6. Advanced Measurement</h3>
<p className="mt-2 text-white/70">Lift studies, MMM inputs, and real-time dashboards to prove impact.</p>
</div>
<div className="glass rounded-3xl p-6 transition duration-300 hover:border-white/20">
<h3 className="text-xl font-semibold">7. Experiential</h3>
<p className="mt-2 text-white/70">From pop-ups to stunts — make it tangible and shareable IRL.</p>
</div>
<div className="glass rounded-3xl p-6 transition duration-300 hover:border-white/20">
<h3 className="text-xl font-semibold">8. Partnerships</h3>
<p className="mt-2 text-white/70">We co-create with platforms, publishers, and communities.</p>
</div>
<div className="glass rounded-3xl p-6 transition duration-300 hover:border-white/20">
<h3 className="text-xl font-semibold">9. Consultation</h3>
<p className="mt-2 text-white/70">In-house workshops &amp; fractional leadership for modern influence.</p>
</div>
</div>
</div>
</section><section className="md:py-32 border-y pt-24 pb-24 border-white/10">
<div className="mx-auto max-w-7xl px-6">
<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
<div className="max-w-2xl">
<p className="uppercase tracking-widest text-xs text-white/50">Impact</p>
<h2 className="mt-2 text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">Campaign results that <span className="stroke-ghost">scale</span></h2>
<p className="mt-4 max-w-xl text-white/70">We design every collaboration to move real metrics—reach, engagement, and revenue—so you can confidently invest in influence.</p>
</div>
<div className="grid grid-cols-2 gap-4 md:gap-6 md:w-80">
<div className="glass rounded-2xl px-4 py-4">
<p className="text-xs uppercase tracking-wide text-white/50">Average lift</p>
<p className="mt-2 text-3xl font-extrabold tracking-tight">+38%</p>
<p className="mt-1 text-xs text-white/60">Brand awareness across hero campaigns.</p>
</div>
<div className="glass rounded-2xl px-4 py-4">
<p className="text-xs uppercase tracking-wide text-white/50">Creator content</p>
<p className="mt-2 text-3xl font-extrabold tracking-tight">4.6x</p>
<p className="mt-1 text-xs text-white/60">Higher engagement than brand-only assets.</p>
</div>
</div>
</div>
<div className="mt-10 grid gap-8 lg:grid-cols-3">
<div className="glass rounded-3xl p-6 lg:col-span-2 flex flex-col md:flex-row gap-8">
<div className="flex-1">
<div className="flex items-center justify-between gap-4">
<div className="">
<p className="text-xs uppercase tracking-wide text-white/50">Performance snapshot</p>
<h3 className="mt-2 text-xl font-semibold tracking-tight">Cross-platform creator campaign</h3>
</div>
<div className="hidden md:flex items-center gap-2 text-xs text-white/60">
<span className="inline-flex h-2 w-2 rounded-full bg-emerald-400"></span>
              Live benchmark
            </div>
</div>
<p className="mt-3 text-sm text-white/65">Aggregate performance across a recent 8-week campaign spanning TikTok, YouTube, and Instagram with 24 mid-tier creators.</p>
<div className="mt-6 grid grid-cols-2 gap-4">
<div className="rounded-2xl border px-4 py-4 bg-white/5 border-white/10">
<p className="text-xs uppercase tracking-wide text-white/50">Total reach</p>
<p className="mt-2 text-2xl font-semibold tracking-tight">42.3M</p>
<p className="mt-1 text-xs text-white/60">Unique impressions across platforms.</p>
</div>
<div className="rounded-2xl border px-4 py-4 bg-white/5 border-white/10">
<p className="text-xs uppercase tracking-wide text-white/50">ROAS</p>
<p className="mt-2 text-2xl font-semibold tracking-tight">3.9x</p>
<p className="mt-1 text-xs text-white/60">Incremental revenue attributed to creator spend.</p>
</div>
</div>
</div>
<div className="md:w-72 lg:w-80">
<div className="rounded-2xl border px-4 py-3 flex items-center justify-between bg-black/40 border-white/10">
<div className="flex items-center gap-2">
<span className="inline-flex h-2 w-2 rounded-full bg-sky-400"></span>
<p className="text-xs text-white/70">Engagement rate vs. benchmark</p>
</div>
<p className="text-xs text-white/50">Last 6 campaigns</p>
</div>
<div className="mt-4 rounded-2xl border px-4 py-4 bg-black/40 border-white/10">
<canvas className="w-full h-40 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/19023d8d-673a-4584-bc7c-4999a7987bbb_800w.webp)] bg-cover bg-center" height="320" id="engagementChart" style={{display: 'block', boxSizing: 'border-box', height: '160px', width: '286px'}} width="572"></canvas>
</div>
</div>
</div>
<div className="space-y-4">
<div className="glass rounded-3xl p-5">
<p className="text-xs uppercase tracking-wide text-white/50">Time to launch</p>
<p className="mt-2 text-3xl font-extrabold tracking-tight">21 days</p>
<p className="mt-2 text-sm text-white/70">Average time from brief to first post going live with vetted creators.</p>
</div>
<div className="glass rounded-3xl p-5">
<p className="text-xs uppercase tracking-wide text-white/50">Creator retention</p>
<div className="mt-2 flex items-baseline justify-between gap-4">
<p className="text-3xl font-extrabold tracking-tight">82%</p>
<p className="text-xs text-white/60">of creators choose to work with our clients again within 6 months.</p>
</div>
</div>
</div>
</div>
</div>


</section>

<section className="py-24 md:py-36 border-y border-white/10" id="about">
<div className="mx-auto max-w-7xl px-6 grid md:grid-cols-12 gap-10 items-center">
<div className="md:col-span-5">
<p className="uppercase tracking-widest text-xs text-white/50">About</p>
<h2 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight mt-2">With the world's leading brands</h2>
<p className="mt-4 text-white/70">100+ direct connections to celebrity talent agencies, premium influencer representation companies, mid-tier and micro-creator networks.</p>
</div>
<div className="md:col-span-7 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">

<div className="glass rounded-xl p-4 flex items-center justify-center text-xs font-semibold transition bg-white/5 hover:bg-white/10">Toyota</div>
<div className="glass rounded-xl p-4 flex items-center justify-center text-xs font-semibold transition bg-white/5 hover:bg-white/10">Logitech</div>
<div className="glass rounded-xl p-4 flex items-center justify-center text-xs font-semibold transition bg-white/5 hover:bg-white/10">Campbell's</div>
<div className="glass rounded-xl p-4 flex items-center justify-center text-xs font-semibold transition bg-white/5 hover:bg-white/10">Lincoln</div>
<div className="glass rounded-xl p-4 flex items-center justify-center text-xs font-semibold transition bg-white/5 hover:bg-white/10">KFC</div>
<div className="glass rounded-xl p-4 flex items-center justify-center text-xs font-semibold transition bg-white/5 hover:bg-white/10">Ford</div>
<div className="glass rounded-xl p-4 flex items-center justify-center text-xs font-semibold transition bg-white/5 hover:bg-white/10">Wendy's</div>
<div className="glass rounded-xl p-4 flex items-center justify-center text-xs font-semibold transition bg-white/5 hover:bg-white/10">Starbucks</div>
<div className="glass rounded-xl p-4 flex items-center justify-center text-xs font-semibold transition bg-white/5 hover:bg-white/10">Capital One</div>
<div className="glass rounded-xl p-4 flex items-center justify-center text-xs font-semibold transition bg-white/5 hover:bg-white/10">+ more</div>
</div>
</div>
</section><section className="py-24 md:py-36">
<div className="mx-auto max-w-7xl px-6 grid gap-10 lg:grid-cols-12 items-start">
<div className="lg:col-span-5 space-y-4">
<p className="uppercase tracking-widest text-xs text-white/50">Why brands stay</p>
<h2 className="text-3xl md:text-4xl font-extrabold leading-tight tracking-tight">A studio built for modern influence</h2>
<p className="text-white/70 text-sm md:text-base">Rhythm-Style Studio pairs brand strategy with deep creator relationships. We sit between talent, social, and media teams so campaigns feel seamless for you and authentic for creators.</p>
<dl className="grid grid-cols-2 gap-4 text-sm mt-4">
<div className="glass rounded-2xl p-4">
<dt className="text-xs uppercase tracking-wide text-white/50">Verticals</dt>
<dd className="mt-1 text-white/80">CPG, QSR, retail, finance, auto, entertainment.</dd>
</div>
<div className="glass rounded-2xl p-4">
<dt className="text-xs uppercase tracking-wide text-white/50">Creator tiers</dt>
<dd className="mt-1 text-white/80">Celebrities, athletes, macro, mid-tier &amp; micro.</dd>
</div>
</dl>
<div className="mt-4 flex flex-wrap gap-3 text-xs text-white/60">
<span className="inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1 bg-white/5">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
          Brand-safe vetting
        </span>
<span className="inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1 bg-white/5">
<span className="h-1.5 w-1.5 rounded-full bg-sky-400"></span>
          Creator-first briefs
        </span>
<span className="inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1 bg-white/5">
<span className="h-1.5 w-1.5 rounded-full bg-violet-400"></span>
          Measurement that matters
        </span>
</div>
</div>
<div className="lg:col-span-7 grid gap-5 md:grid-cols-2">
<div className="glass rounded-3xl p-6 flex flex-col justify-between">
<div>
<p className="text-xs uppercase tracking-wide text-white/50">How we work</p>
<h3 className="mt-2 text-lg font-semibold tracking-tight">Embedded partner, not a one-off vendor</h3>
<p className="mt-3 text-sm text-white/70">We plug into your existing brand, media, and PR teams, sharing creator POV early so your launches land with culture — not after media is already bought.</p>
</div>
<ul className="mt-4 space-y-2 text-sm text-white/70">
<li className="flex items-start gap-2">
<span className="mt-1 h-1.5 w-1.5 rounded-full bg-white/60"></span>
            Quarterly creator landscape reviews
          </li>
<li className="flex items-start gap-2">
<span className="mt-1 h-1.5 w-1.5 rounded-full bg-white/60"></span>
            Always-on talent sourcing bench
          </li>
<li className="flex items-start gap-2">
<span className="mt-1 h-1.5 w-1.5 rounded-full bg-white/60"></span>
            Shared dashboards &amp; live reporting
          </li>
</ul>
</div>
<div className="space-y-5">
<div className="glass rounded-3xl p-6">
<p className="text-xs uppercase tracking-wide text-white/50">For brand teams</p>
<h3 className="mt-2 text-lg font-semibold tracking-tight">Your influence control center</h3>
<p className="mt-3 text-sm text-white/70">We help CMOs, brand leads, and social teams move from “one-off influencer posts” to a repeatable influence engine.</p>
<div className="mt-4 grid grid-cols-2 gap-3 text-xs text-white/65">
<div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-3">
<p className="text-[10px] uppercase tracking-wide text-white/50">Ops load</p>
<p className="mt-1 text-base font-semibold tracking-tight">-60%</p>
<p className="mt-1">Average reduction in internal coordination.</p>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-3">
<p className="text-[10px] uppercase tracking-wide text-white/50">Creator fit</p>
<p className="mt-1 text-base font-semibold tracking-tight">95%</p>
<p className="mt-1">Of matches approved in first round.</p>
</div>
</div>
</div>
<div className="glass rounded-3xl p-5 flex items-center justify-between gap-4">
<div>
<p className="text-xs uppercase tracking-wide text-white/50">Next step</p>
<p className="mt-2 text-sm text-white/80">Share a brief or challenge and we’ll return with a creator-led POV in under a week.</p>
</div>
<a className="shrink-0 inline-flex items-center rounded-full border border-white/20 bg-white text-black px-4 py-2 text-xs font-medium hover:bg-white/90 transition" href="#contact">
            Book intro call
          </a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-36" id="contact">
<div className="mx-auto max-w-3xl px-6 text-center">
<h2 className="text-5xl md:text-6xl font-extrabold tracking-tight">Say <span className="stroke-ghost">Hello</span></h2>
<p className="mt-4 text-white/70">Let's find your perfect match.</p>
<form className="mt-8 glass rounded-3xl p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-4">
<input className="rounded-xl border px-4 py-3 outline-none focus:border-white/30 transition bg-white/5 border-white/10" placeholder="Name"/>
<input className="rounded-xl border px-4 py-3 outline-none focus:border-white/30 transition bg-white/5 border-white/10" placeholder="Email"/>
<input className="rounded-xl border px-4 py-3 outline-none focus:border-white/30 transition md:col-span-2 bg-white/5 border-white/10" placeholder="Company"/>
<textarea className="rounded-xl border px-4 py-3 outline-none focus:border-white/30 transition md:col-span-2 bg-white/5 border-white/10" placeholder="Tell us about your project…" rows="4"></textarea>
<button className="justify-self-center md:justify-self-end rounded-full px-6 py-3 font-medium transition md:col-span-2 bg-white text-black hover:bg-white/90" type="button">Get Started</button>
</form>
<p className="text-xs mt-6 text-white/50">* Demo form — wire server-side to receive submissions.</p>
</div>
</section>

<footer className="py-10 border-t border-white/10">
<div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-sm text-white/60">© 2025 RhythmStyle — Demo inspired by Rhythm Influence.</p>
<div className="flex items-center gap-4 text-sm">
<a className="transition text-white/70 hover:text-white" href="#">Instagram</a>
<a className="transition text-white/70 hover:text-white" href="#">LinkedIn</a>
<a className="transition text-white/70 hover:text-white" href="#">Privacy</a>
</div>
</div>
</footer>


    </>
  );
}
