import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // Mobile nav toggle
      const menuBtn = document.getElementById('menuBtn');
      const mobileNav = document.getElementById('mobileNav');
      menuBtn?.addEventListener('click', () => {
        mobileNav.classList.toggle('hidden');
      });

      // Icons
      lucide.createIcons();

      // Year
      document.getElementById('year').textContent = new Date().getFullYear();

      // Charts
      const primary = '#0a0a0a';
      const neutral = '#d4d4d4';
      const emerald = '#10b981';

      // Mini chart in hero card
      const miniCtx = document.getElementById('miniChart');
      if (miniCtx) {
        new Chart(miniCtx, {
          type: 'line',
          data: {
            labels: Array.from({length: 12}, (_, i) => i + 1),
            datasets: [{
              data: [12,14,13,15,18,21,20,24,26,28,27,30],
              borderColor: primary,
              backgroundColor: 'rgba(10,10,10,0.08)',
              fill: true,
              tension: 0.35
            }]
          },
          options: {
            plugins: { legend: { display: false }, tooltip: { enabled: false } },
            scales: { x: { display: false }, y: { display: false } },
            elements: { point: { radius: 0 } },
            maintainAspectRatio: false
          }
        });
      }

      // Conversion chart
      const convCtx = document.getElementById('convChart');
      if (convCtx) {
        new Chart(convCtx, {
          type: 'bar',
          data: {
            labels: ['Q1','Q2','Q3','Q4'],
            datasets: [{
              label: 'CVR %',
              data: [2.8, 3.9, 4.6, 5.1],
              backgroundColor: primary
            }]
          },
          options: {
            plugins: { legend: { display: false } },
            scales: {
              x: { grid: { display: false } },
              y: { grid: { color: neutral }, ticks: { callback: v => v + '%' } }
            },
            maintainAspectRatio: false
          }
        });
      }

      // Engagement chart
      const engCtx = document.getElementById('engChart');
      if (engCtx) {
        new Chart(engCtx, {
          type: 'line',
          data: {
            labels: ['W1','W2','W3','W4','W5','W6','W7','W8'],
            datasets: [{
              label: 'Time on page',
              data: [52, 55, 54, 60, 63, 66, 65, 70],
              borderColor: emerald,
              backgroundColor: 'rgba(16,185,129,0.12)',
              fill: true,
              tension: 0.35
            }]
          },
          options: {
            plugins: { legend: { display: false } },
            scales: { x: { grid: { display: false } }, y: { grid: { color: neutral }, ticks: { callback: v => v + 's' } } },
            elements: { point: { radius: 0 } },
            maintainAspectRatio: false
          }
        });
      }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="sticky top-0 z-50 backdrop-blur bg-slate-50/70 border-b border-slate-200/60">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">
<a className="inline-flex items-center gap-3" href="#">
<span className="h-8 w-8 grid place-items-center rounded-md bg-slate-900 text-white text-sm font-medium font-geist" style={{}}>SN</span>
<span className="hidden sm:block text-sm font-medium text-slate-700 font-geist" style={{}}>Digitart</span>
</a>
<nav className="hidden md:flex items-center gap-8">
<a className="hover:text-slate-900 transition text-sm font-medium text-slate-600" href="#solution">Sobre Nós</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition font-geist" href="#cases" style={{}}>Cases</a>
<a className="hover:text-slate-900 transition text-sm font-medium text-slate-600 font-geist" href="#services" style={{}}>Contato</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition font-geist" href="#process" style={{}}>Method</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition font-geist" href="#about" style={{}}>About</a>
</nav>
<div className="flex items-center gap-3">
<a className="hidden sm:inline-flex items-center gap-2 hover:bg-slate-800 transition text-sm font-medium text-white font-geist bg-slate-900 rounded-full pt-2 pr-4 pb-2 pl-4" href="#contact" style={{}}>Fale Conosco<svg className="lucide lucide-send lucide-sparkles w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="send" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg></a>
<button aria-label="Open menu" className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border border-slate-300 hover:bg-slate-100 transition" id="menuBtn">
<svg className="lucide lucide-menu w-[20px] h-[20px]" data-icon-replaced="true" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px', color: 'rgb(23, 23, 23)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</div>
</div>

<div className="md:hidden hidden border-t border-slate-200" id="mobileNav">
<div className="mx-auto max-w-7xl px-4 py-4 space-y-3">
<a className="block text-sm font-medium text-slate-700 font-geist" href="#solution" style={{}}>Solution</a>
<a className="block text-sm font-medium text-slate-700 font-geist" href="#cases" style={{}}>Cases</a>
<a className="block text-sm font-medium text-slate-700 font-geist" href="#services" style={{}}>Services</a>
<a className="block text-sm font-medium text-slate-700 font-geist" href="#process" style={{}}>Method</a>
<a className="block text-sm font-medium text-slate-700 font-geist" href="#about" style={{}}>About</a>
<a className="block text-sm font-medium text-slate-700 font-geist" href="#pricing" style={{}}>Pricing</a>
<a className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white font-geist" href="#contact" style={{}}>
<svg className="lucide lucide-sparkles h-4 w-4" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg> Book a call
          </a>
</div>
</div>
</header>

<section className="overflow-hidden relative">
<div className="pointer-events-none absolute inset-0 -z-10">
<div className="absolute -top-24 left-1/2 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-gradient-to-br from-slate-200 to-white blur-3xl"></div>
</div>
<div className="sm:px-6 lg:px-8 lg:pt-24 lg:pb-16 grid lg:grid-cols-12 gap-8 max-w-7xl mr-auto ml-auto pt-16 pr-4 pb-10 pl-4">
<div className="lg:col-span-7">
<h1 className="sm:text-5xl lg:text-6xl text-4xl font-semibold text-slate-900 tracking-tight font-poppins" style={{transition: 'outline 0.1s ease-in-out'}}>Nós criamos sites, aplicativos e painéis<span className="relative inline-block">
<span className="absolute -inset-1 -skew-x-3 bg-gradient-to-r from-green-200 via-green-200 to-amber-200 rounded -z-10"></span>
<span className="font-semibold font-poppins pr-1 pl-1">que criam valor</span>
</span></h1>
<p className="sm:text-lg leading-relaxed text-base text-slate-600 font-geist max-w-2xl mt-6" style={{}}>Design e engenharia estratégicos para equipes que buscam impacto mensurável. Lance rápido, tenha um visual elegante e escale com confiança.</p>
<div className="mt-8 flex items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-medium text-white hover:bg-slate-800 transition font-geist" href="#contact" style={{}}>
<svg className="lucide lucide-calendar h-4 w-4" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect className="" height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
              Schedule a meeting
            </a>
<button className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-900 hover:bg-slate-100 transition font-geist" style={{}}>
<svg className="lucide lucide-play h-4 w-4" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
              See how we work
            </button>
<div className="ml-2 hidden md:flex -space-x-2">
</div>
</div>
<p className="mt-4 text-sm text-slate-500 font-geist" style={{}}>Trusted by 100+ teams worldwide</p>
</div>
<div className="lg:col-span-5">
<div className="relative overflow-hidden bg-white border-slate-200 border rounded-2xl shadow-sm">
<img alt="dashboard preview" className="aspect-[16/10] w-full object-cover" src="https://images.unsplash.com/photo-1629946832022-c327f74956e0?w=2160&amp;q=80&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="sm:py-12 lg:py-16 pt-8 pb-8" id="solution">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-10">
<div className="lg:col-span-5">
<h2 className="text-2xl sm:text-3xl tracking-tight font-semibold font-poppins" style={{}}>A visual and strategic system</h2>
<p className="mt-4 text-slate-600 font-geist" style={{}}>Built for companies that need to launch faster, stand out, and convert better—without sacrificing quality.</p>
<div className="mt-6 flex items-center gap-3">
<div className="flex -space-x-2">
<img alt="" className="h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<img alt="" className="h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<img alt="" className="h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<p className="text-sm text-slate-600 font-geist" style={{}}>Preferred partner for startups and enterprises</p>
</div>
</div>
<div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
<div className="rounded-2xl bg-white border border-slate-200 p-5 shadow-sm">
<div className="h-10 w-10 grid place-items-center rounded-lg bg-slate-900 text-white">
<svg className="lucide lucide-star h-5 w-5" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<h3 className="mt-4 text-lg tracking-tight font-semibold font-geist" style={{}}>Premium perception</h3>
<p className="mt-1 text-sm text-slate-600 font-geist" style={{}}>Communicate the real quality of your product with world-class UI.</p>
</div>
<div className="rounded-2xl bg-white border border-slate-200 p-5 shadow-sm">
<div className="h-10 w-10 grid place-items-center rounded-lg bg-slate-900 text-white">
<svg className="lucide lucide-target h-5 w-5" data-lucide="target" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
</div>
<h3 className="mt-4 text-lg tracking-tight font-semibold font-geist" style={{}}>Higher conversion</h3>
<p className="mt-1 text-sm text-slate-600 font-geist" style={{}}>Data-led flows, smart microcopy, and fast performance.</p>
</div>
<div className="rounded-2xl bg-white border border-slate-200 p-5 shadow-sm">
<div className="h-10 w-10 grid place-items-center rounded-lg bg-slate-900 text-white">
<svg className="lucide lucide-zap h-5 w-5" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<h3 className="mt-4 text-lg tracking-tight font-semibold font-geist" style={{}}>Differentiation</h3>
<p className="mt-1 text-sm text-slate-600 font-geist" style={{}}>Stand out in crowded markets with a clear, modern identity.</p>
</div>
<div className="rounded-2xl bg-white border border-slate-200 p-5 shadow-sm">
<div className="h-10 w-10 grid place-items-center rounded-lg bg-slate-900 text-white">
<svg className="lucide lucide-rocket h-5 w-5" data-lucide="rocket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
</div>
<h3 className="mt-4 text-lg tracking-tight font-semibold font-geist" style={{}}>Efficient delivery</h3>
<p className="mt-1 text-sm text-slate-600 font-geist" style={{}}>From idea to ship with a reliable, lean process.</p>
</div>
</div>
</div>
</section>

<section className="sm:py-12 lg:py-16 pt-8 pb-8" id="services">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex items-end justify-between gap-6">
<div>
<h2 className="text-2xl sm:text-3xl tracking-tight font-semibold font-poppins" style={{}}>What we do</h2>
<p className="mt-2 text-slate-600 font-geist" style={{}}>Design and engineering that meets your roadmap.</p>
</div>
<a className="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-slate-900 font-geist" href="#contact" style={{}}>
            Our capabilities <svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="mt-8 grid md:grid-cols-3 gap-4">
<div className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition">
<div className="flex items-center gap-3">
<div className="h-9 w-9 grid place-items-center rounded-md bg-slate-900 text-white">
<svg className="lucide lucide-layout h-4 w-4" data-lucide="layout" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M3 9h18"></path><path d="M9 21V9"></path></svg>
</div>
<h3 className="text-lg tracking-tight font-semibold font-geist" style={{}}>Marketing websites</h3>
</div>
<p className="mt-2 text-sm text-slate-600 font-geist" style={{}}>Positioning, copy, visual identity, and high-performance pages.</p>
</div>
<div className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition">
<div className="flex items-center gap-3">
<div className="h-9 w-9 grid place-items-center rounded-md bg-slate-900 text-white">
<svg className="lucide lucide-smartphone h-4 w-4" data-lucide="smartphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect><path d="M12 18h.01"></path></svg>
</div>
<h3 className="text-lg tracking-tight font-semibold font-geist" style={{}}>Mobile &amp; web apps</h3>
</div>
<p className="mt-2 text-sm text-slate-600 font-geist" style={{}}>From MVP to V1 with scalable design systems and clean code.</p>
</div>
<div className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition">
<div className="flex items-center gap-3">
<div className="h-9 w-9 grid place-items-center rounded-md bg-slate-900 text-white">
<svg className="lucide lucide-chart-bar h-4 w-4" data-lucide="chart-bar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M7 16h8"></path><path d="M7 11h12"></path><path d="M7 6h3"></path></svg>
</div>
<h3 className="text-lg tracking-tight font-semibold font-geist" style={{}}>Product dashboards</h3>
</div>
<p className="mt-2 text-sm text-slate-600 font-geist" style={{}}>Complex data, simplified. Accessible and reliable analytics UX.</p>
</div>
</div>
</div>
</section>

<section className="sm:py-12 lg:py-16 pt-8 pb-8" id="cases">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<h2 className="sm:text-3xl text-2xl font-semibold tracking-tight font-poppins" style={{}}>Nossos Cases</h2>
<div className="grid md:grid-cols-2 gap-6 mt-6">

<article className="rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-sm hover:shadow-md transition">
<div className="relative">
<img alt="case 1" className="w-full aspect-[16/9] object-cover" src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
</div>
<div className="flex pt-5 pr-5 pb-5 pl-5 items-center justify-between">
<div className="">
<h3 className="text-base font-semibold tracking-tight font-geist" style={{}}>Site - Marandu</h3>
<p className="text-sm text-slate-600 font-geist mt-1" style={{}}>2025</p>
</div>
<button className="grid place-items-center w-10 h-10 border-slate-300 border rounded-full">
<svg className="lucide lucide-arrow-up-right lucide-arrow-right w-[24px] h-[16px]" data-icon-replaced="true" data-lucide="arrow-up-right" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '24px', height: '16px', color: 'rgb(23, 23, 23)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</button>
</div>
</article>

<article className="rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-sm hover:shadow-md transition">
<div className="relative">
<img alt="case 2" className="w-full aspect-[16/9] object-cover" src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
</div>
<div className="p-5 flex items-center justify-between">
<div className="">
<h3 className="text-base font-semibold tracking-tight font-geist" style={{}}>Site - BRK</h3>
<p className="text-sm text-slate-600 font-geist mt-1" style={{}}>2025</p>
</div>
<button className="h-9-9 grid place-items-center w-10 h-10 border-slate-300 border rounded-full" style={{}}><svg className="lucide lucide-move-up-right lucide-arrow-right w-[24px] h-[16px]" data-icon-replaced="true" data-lucide="move-up-right" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '24px', height: '16px', color: 'rgb(23, 23, 23)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13 5H19V11"></path><path d="M19 5L5 19"></path></svg></button></div>
</article>

<article className="rounded-3xl overflow-hidden border-slate-200 bg-white shadow-sm hover:shadow-md transition">
<div className="relative">
<img alt="case 3" className="w-full aspect-[16/9] object-cover" src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
</div>
<div className="p-5 flex items-center justify-between">
<div className="">
<h3 className="text-base tracking-tight font-semibold font-geist" style={{}}>UI Academy — learning platform</h3>
<p className="text-sm text-slate-600 mt-1 font-geist" style={{}}>+3x completion rate</p>
</div>
<button className="h-9 w-9 grid place-items-center rounded-full border border-slate-300">
<svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</article>

<article className="rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-sm hover:shadow-md transition">
<div className="relative">
<img alt="case 4" className="w-full aspect-[16/9] object-cover" src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
</div>
<div className="p-5 flex items-center justify-between">
<div className="">
<h3 className="text-base tracking-tight font-semibold font-geist" style={{}}>Outfox — SaaS community hub</h3>
<p className="text-sm text-slate-600 mt-1 font-geist" style={{}}>ARR +26% after launch</p>
</div>
<button className="h-9 w-9 grid place-items-center rounded-full border border-slate-300">
<svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</article>


</div>
</div>
</section>

<section className="py-6">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="rounded-3xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
<div className="flex items-start gap-4">
<div className="h-10 w-10 grid place-items-center rounded-xl bg-slate-900 text-white">
<svg className="lucide lucide-smartphone h-5 w-5" data-lucide="smartphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect><path d="M12 18h.01"></path></svg>
</div>
<div className="">
<h3 className="text-lg tracking-tight font-semibold font-geist" style={{}}>Mobile-first by default</h3>
<p className="mt-1 text-sm text-slate-600 font-geist" style={{}}>Every project is designed for small screens from day one — because real conversions happen on the go.</p>
</div>
</div>
<span className="inline-flex h-6 items-center rounded-full bg-green-100 px-2 text-[11px] font-medium text-green-700 self-start sm:self-auto font-geist" style={{}}>EXCLUSIVE</span>
</div>
</div>
</section>

<section className="py-8 sm:py-12 lg:py-16" id="process">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex items-end justify-between">
<div>
<h2 className="text-2xl sm:text-3xl tracking-tight font-semibold font-poppins" style={{}}>A predictable method</h2>
<p className="mt-2 text-slate-600 font-geist" style={{}}>Transparent phases, weekly demos, clear deliverables.</p>
</div>
<a className="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-slate-900 font-geist" href="#contact" style={{}}>
            Get timeline <svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="mt-8 grid md:grid-cols-4 gap-4">
<div className="rounded-2xl border border-slate-200 bg-white p-5">
<div className="flex items-center gap-3">
<span className="h-8 w-8 grid place-items-center rounded-md bg-slate-900 text-white text-xs font-medium font-geist" style={{}}>1</span>
<h3 className="text-base tracking-tight font-semibold font-geist" style={{}}>Discovery</h3>
</div>
<p className="mt-2 text-sm text-slate-600 font-geist" style={{}}>Goals, KPIs, audience, competitive edge.</p>
</div>
<div className="rounded-2xl border border-slate-200 bg-white p-5">
<div className="flex items-center gap-3">
<span className="h-8 w-8 grid place-items-center rounded-md bg-slate-900 text-white text-xs font-medium font-geist" style={{}}>2</span>
<h3 className="text-base tracking-tight font-semibold font-geist" style={{}}>Design</h3>
</div>
<p className="mt-2 text-sm text-slate-600 font-geist" style={{}}>Information architecture, UI, microcopy, prototypes.</p>
</div>
<div className="rounded-2xl border border-slate-200 bg-white p-5">
<div className="flex items-center gap-3">
<span className="h-8 w-8 grid place-items-center rounded-md bg-slate-900 text-white text-xs font-medium font-geist" style={{}}>3</span>
<h3 className="text-base tracking-tight font-semibold font-geist" style={{}}>Build</h3>
</div>
<p className="mt-2 text-sm text-slate-600 font-geist" style={{}}>Accessible, fast, SEO-friendly implementation.</p>
</div>
<div className="rounded-2xl border border-slate-200 bg-white p-5">
<div className="flex items-center gap-3">
<span className="h-8 w-8 grid place-items-center rounded-md bg-slate-900 text-white text-xs font-medium font-geist" style={{}}>4</span>
<h3 className="text-base tracking-tight font-semibold font-geist" style={{}}>Launch &amp; iterate</h3>
</div>
<p className="mt-2 text-sm text-slate-600 font-geist" style={{}}>Analytics, A/B testing, and continuous improvement.</p>
</div>
</div>
</div>
</section>

<section className="py-8 sm:py-12 lg:py-16">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-3 gap-6">
<div className="lg:col-span-1">
<h2 className="text-2xl sm:text-3xl tracking-tight font-semibold font-poppins" style={{}}>Outcomes we target</h2>
<p className="mt-2 text-slate-600 font-geist" style={{}}>Less guesswork, more measurable wins.</p>
<ul className="mt-4 space-y-2 text-sm text-slate-700">
<li className="flex items-center gap-2 font-geist" style={{}}><svg className="lucide lucide-check h-4 w-4 text-emerald-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Faster time to value</li>
<li className="flex items-center gap-2 font-geist" style={{}}><svg className="lucide lucide-check h-4 w-4 text-emerald-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Improved activation and retention</li>
<li className="flex items-center gap-2 font-geist" style={{}}><svg className="lucide lucide-check h-4 w-4 text-emerald-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Clearer product story</li>
</ul>
</div>
<div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
<div className="rounded-2xl border border-slate-200 bg-white p-5">
<div className="flex items-center justify-between">
<h3 className="text-base tracking-tight font-semibold font-geist" style={{}}>Signup conversion</h3>
<span className="text-xs text-slate-500 font-geist" style={{}}>Quarterly</span>
</div>
<div className="mt-3 h-48">
<div className="h-full">
<canvas height="192" id="convChart" style={{display: 'block', boxSizing: 'border-box', height: '192px', width: '347px'}} width="347"></canvas>
</div>
</div>
</div>
<div className="rounded-2xl border border-slate-200 bg-white p-5">
<div className="flex items-center justify-between">
<h3 className="text-base tracking-tight font-semibold font-geist" style={{}}>Time on page</h3>
<span className="text-xs text-slate-500 font-geist" style={{}}>Weekly</span>
</div>
<div className="mt-3 h-48">
<div className="h-full">
<canvas height="192" id="engChart" style={{display: 'block', boxSizing: 'border-box', height: '192px', width: '347px'}} width="347"></canvas>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-8 sm:py-12 lg:py-16" id="pricing">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<h2 className="text-2xl sm:text-3xl tracking-tight font-semibold font-poppins" style={{}}>Simple plans</h2>
<p className="mt-2 text-slate-600 font-geist" style={{}}>Start small, scale as you grow.</p>
<div className="mt-8 grid md:grid-cols-3 gap-4">

<div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
<div className="flex items-center justify-between">
<h3 className="text-lg tracking-tight font-semibold font-geist" style={{}}>Launch</h3>
<svg className="lucide lucide-rocket h-5 w-5 text-neutral-900" data-lucide="rocket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
</div>
<p className="mt-2 text-sm text-slate-600 font-geist" style={{}}>One-page site or MVP validation.</p>
<p className="mt-5 text-2xl tracking-tight font-semibold font-poppins" style={{}}>$4,900</p>
<ul className="mt-4 space-y-2 text-sm text-slate-700">
<li className="flex items-center gap-2 font-geist" style={{}}><svg className="lucide lucide-check h-4 w-4 text-emerald-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> 2 weeks</li>
<li className="flex items-center gap-2 font-geist" style={{}}><svg className="lucide lucide-check h-4 w-4 text-emerald-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Copy + design + build</li>
<li className="flex items-center gap-2 font-geist" style={{}}><svg className="lucide lucide-check h-4 w-4 text-emerald-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Basic analytics</li>
</ul>
<a className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-medium text-white font-geist" href="#contact" style={{}}>Start</a>
</div>

<div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm ring-2 ring-slate-900">
<div className="flex items-center justify-between">
<h3 className="text-lg tracking-tight font-semibold font-geist" style={{}}>Growth</h3>
<span className="text-[11px] font-medium text-green-700 bg-green-100 px-2 py-1 rounded-full font-geist" style={{}}>POPULAR</span>
</div>
<p className="mt-2 text-sm text-slate-600 font-geist" style={{}}>Marketing site or app V1 with design system.</p>
<p className="mt-5 text-2xl tracking-tight font-semibold font-poppins" style={{}}>$12,900</p>
<ul className="mt-4 space-y-2 text-sm text-slate-700">
<li className="flex items-center gap-2 font-geist" style={{}}><svg className="lucide lucide-check h-4 w-4 text-emerald-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> 4–6 weeks</li>
<li className="flex items-center gap-2 font-geist" style={{}}><svg className="lucide lucide-check h-4 w-4 text-emerald-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> UX, UI, front-end</li>
<li className="flex items-center gap-2 font-geist" style={{}}><svg className="lucide lucide-check h-4 w-4 text-emerald-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> A/B experiments</li>
</ul>
<a className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-medium text-white font-geist" href="#contact" style={{}}>Choose plan</a>
</div>

<div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
<div className="flex items-center justify-between">
<h3 className="text-lg tracking-tight font-semibold font-geist" style={{}}>Partner</h3>
<svg className="lucide lucide-infinity h-5 w-5 text-neutral-900" data-lucide="infinity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 16c5 0 7-8 12-8a4 4 0 0 1 0 8c-5 0-7-8-12-8a4 4 0 1 0 0 8"></path></svg>
</div>
<p className="mt-2 text-sm text-slate-600 font-geist" style={{}}>Monthly retainer for continuous work.</p>
<p className="mt-5 text-2xl tracking-tight font-semibold font-poppins" style={{}}>From $6,000/mo</p>
<ul className="mt-4 space-y-2 text-sm text-slate-700">
<li className="flex items-center gap-2 font-geist" style={{}}><svg className="lucide lucide-check h-4 w-4 text-emerald-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Priority queue</li>
<li className="flex items-center gap-2 font-geist" style={{}}><svg className="lucide lucide-check h-4 w-4 text-emerald-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Weekly sprints</li>
<li className="flex items-center gap-2 font-geist" style={{}}><svg className="lucide lucide-check h-4 w-4 text-emerald-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Roadmap shaping</li>
</ul>
<a className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-medium text-white font-geist" href="#contact" style={{}}>Talk to us</a>
</div>
</div>
</div>
</section>

<section className="py-8 sm:py-12 lg:py-16" id="about">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8">
<div className="rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-sm">
<img alt="team" className="w-full aspect-[16/10] object-cover" src="https://images.unsplash.com/photo-1551816230-ef5deaed4a26?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="self-center">
<h2 className="text-2xl sm:text-3xl tracking-tight font-semibold font-poppins" style={{}}>Senior team, lean approach</h2>
<p className="mt-3 text-slate-600 font-geist" style={{}}>We’ve shipped dozens of products across fintech, SaaS, education, and web3. We combine sharp strategy with meticulous execution so you don’t have to choose between speed and quality.</p>
<div className="mt-6 flex items-center gap-6">
<div>
<p className="text-3xl tracking-tight font-semibold font-poppins" style={{}}>12+</p>
<p className="text-sm text-slate-600 font-geist" style={{}}>years experience</p>
</div>
<div>
<p className="text-3xl tracking-tight font-semibold font-poppins" style={{}}>100+</p>
<p className="text-sm text-slate-600 font-geist" style={{}}>projects shipped</p>
</div>
<div>
<p className="text-3xl tracking-tight font-semibold font-poppins" style={{}}>4.9/5</p>
<p className="text-sm text-slate-600 font-geist" style={{}}>client rating</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-8 sm:py-12 lg:py-16" id="contact">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="rounded-3xl border border-slate-200 bg-white shadow-sm grid lg:grid-cols-2">
<div className="p-8 sm:p-10">
<h2 className="text-2xl sm:text-3xl tracking-tight font-semibold font-poppins" style={{}}>Let’s ship something great</h2>
<p className="mt-2 text-slate-600 font-geist" style={{}}>Tell us about your goals and timeline. We’ll reply within 24 hours.</p>
<form className="mt-6 space-y-4">
<div className="">
<label className="text-sm font-medium text-slate-800 font-geist" style={{}}>Name</label>
<input className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900" placeholder="Your full name" type="text"/>
</div>
<div className="grid sm:grid-cols-2 gap-4">
<div className="">
<label className="text-sm font-medium text-slate-800 font-geist" style={{}}>Email</label>
<input className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900" placeholder="you@company.com" type="email"/>
</div>
<div className="">
<label className="text-sm font-medium text-slate-800 font-geist" style={{}}>Budget</label>
<select className="mt-2 w-full appearance-none rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900">
<option className="font-geist" style={{}}>Under $10k</option>
<option className="font-geist" style={{}}>$10k–$25k</option>
<option className="font-geist" style={{}}>$25k–$50k</option>
<option className="font-geist" style={{}}>$50k+</option>
</select>
</div>
</div>
<div className="">
<label className="text-sm font-medium text-slate-800 font-geist" style={{}}>How can we help?</label>
<textarea className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900" placeholder="A brief about your project…" rows="4"></textarea>
</div>
<button className="inline-flex gap-2 hover:bg-slate-800 text-sm font-medium text-white font-geist bg-slate-900 rounded-lg pt-2.5 pr-4 pb-2.5 pl-4 items-center" type="submit">Enviar<svg className="lucide lucide-send h-4 w-4" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg></button>
</form>
</div>
<div className="relative overflow-hidden rounded-b-3xl lg:rounded-l-none lg:rounded-r-3xl">
<img alt="gradient art" className="absolute inset-0 h-full w-full object-cover" src="https://images.unsplash.com/photo-1557683316-973673baf926?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="relative h-full w-full bg-black/20 p-8 sm:p-10 flex flex-col justify-end">
<div className="backdrop-blur-sm bg-white/70 border border-white/60 rounded-2xl p-5 max-w-sm">
<div className="flex items-center gap-3">
<img alt="Tiago" className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div className="">
<p className="text-sm font-medium text-slate-900 font-geist" style={{}}>Tiago, Founder</p>
<p className="text-xs text-slate-600 font-geist" style={{}}>Replies within a day</p>
</div>
</div>
<p className="mt-3 text-sm text-slate-800 font-geist" style={{}}>“We’ll align on outcomes, then design and build the shortest path to them.”</p>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="border-slate-200 border-t">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pt-10 pr-4 pb-10 pl-4">
<div className="grid md:grid-cols-4 gap-8">
<div className="md:col-span-2">
<div className="flex items-center gap-3">
<span className="grid place-items-center text-sm font-medium text-white font-geist bg-slate-900 w-8 h-8 rounded-md">SN</span>
<p className="text-sm font-medium text-slate-700 font-geist" style={{}}>Digitart</p>
</div>
<p className="mt-3 text-sm text-slate-600 max-w-md font-geist" style={{}}>Design and build for teams who care about craft and results.</p>
<div className="mt-4 flex items-center gap-3 text-slate-600">
<svg className="lucide lucide-map-pin h-4 w-4" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<span className="text-sm font-geist" style={{}}>Remote • Worldwide</span>
</div>
</div>
<div className="">
<h4 className="text-sm tracking-tight font-semibold font-geist" style={{}}>Company</h4>
<ul className="mt-3 space-y-2 text-sm text-slate-600">
<li className=""><a className="hover:text-slate-900 font-geist" href="#about" style={{}}>About</a></li>
<li className=""><a className="hover:text-slate-900 font-geist" href="#cases" style={{}}>Work</a></li>
<li><a className="hover:text-slate-900 font-geist" href="#process" style={{}}>Method</a></li>
<li><a className="hover:text-slate-900 font-geist" href="#pricing" style={{}}>Pricing</a></li>
</ul>
</div>
<div>
<h4 className="text-sm tracking-tight font-semibold font-geist" style={{}}>Subscribe</h4>
<p className="mt-3 text-sm text-slate-600 font-geist" style={{}}>Monthly insights on design, growth and product.</p>
<div className="mt-3 flex items-center gap-2">
<input className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900" placeholder="you@email.com" type="email"/>
<button className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-3 py-2 text-sm font-medium text-white font-geist" style={{}}>
<svg className="lucide lucide-mail h-4 w-4" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
                Join
              </button>
</div>
</div>
</div>
<div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
<p className="text-xs text-slate-500">©  Digitart. Todos os direitos reservados.<span className="font-geist" id="year">2025</span></p>
<div className="flex items-center gap-4 text-xs text-slate-500">
<a className="hover:text-slate-900 font-geist" href="#" style={{}}>Privacya&gt;
            </a><a className="hover:text-slate-900 font-geist" href="#" style={{}}>Terms</a>
<a className="hover:text-slate-900 font-geist" href="#" style={{}}>Contact</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
