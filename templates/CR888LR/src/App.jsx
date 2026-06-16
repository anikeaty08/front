import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
      // Init lucide icons
      luc.createIcons();

      // Mobile menu toggle
      const btn = document.getElementById('mobileMenuBtn');
      const menu = documentElementById('mobileMenu');
      btn?.addEventListener('click', () => {
        menu.classList.toggle('hidden');
           // Fake form submit note
      function fakeSubmit() {
        const note = document.getElementById('formNote');
        ifnote) return;
        note.textContent = 'Thanks! We’ll be in touch shortly.';
        note.classList.remove('text-slate400');
        note.classList.add('text-emerald-400');
        setTimeout(() => {
          note.textContent = '';
         .classList.remove('text-emerald-400');
          note.classList.add('text-slate-400');
        }, 4000);
 }

      // Footer year
      document.getElementById('year').textContent = new Date().getFullYear();

      // Chart
      const ctx = document.getElementById('opsChart').getContext('2d');
      const gradient = ctx.createLinearGradient0, 0, 0, 240);
      gradient.addColorStop(0, 'rgba(99,102,241,.45)');
      gradient.addColorStop(1, 'rgba(99,102,241,0.02)');
      new Chart(ctx {
        type: 'line',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May 'Jun', 'Jul', 'Aug'],
          datasets: [
            {
              label 'Uptime %',
              data: [99.1, 99.3, 99.7, 99.9,99.95, 99.96, 99.98, 99.99],
              borderColor: 'rgba(99,,241,1)',
              backgroundColor: gradient,
              fill: true,
              tension: 0.35,
              borderWidth:2,
              pointRadius: 0
            },
            {
              label: 'Cost idx',
              data: [100, 98, 96, 95, 94, 93, 92, 90],
              borderColor: 'rgba(16,185,129,0.9)',
              backgroundColor: 'transparent',
              tension: 0.35,
              borderDash: [4,4],
              borderWidth: 2,
              pointRadius: 0
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { display: false } },
          scales: {
            x: {
              grid: { color: 'rgba(255,255,255,0.05)' },
              ticks: { color: 'rgba(203,213,225,0.8)', font: { family: 'Inter' } }
            },
            y: {
              grid: { color: 'rgba(255,255,255,0.05)' },
              ticks: { color: 'rgba(203,213,225,0.8)', font: { family: 'Inter' } }
            }
          }
        }
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      <div className="aura-background-component fixed top-0 w-full h-screen -z-10"><div className="spline-container absolute top-0 left-0 w-full h-full -z-10"><iframe frameborder="0" height="100%" src="https://my.spline.design/3dglassherobg-xhxFCKvVSQv5b7qPD9xIZ5yC" width="100%"></iframe></div></div>

<div className="fixed inset-0 -z-10">
<div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" style={{}}></div>
<img alt="" className="absolute inset-0 w-full h-full object-cover opacity-20" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/8f3c8090-9d8c-424b-b28b-784049d2b6c8_800w.jpg"/>
<div className="absolute inset-0 bg-[radial-gradient(1200px_400px_at_50%_-10%,rgba(99,102,241,0.18),transparent)]"></div>
<div className="absolute inset-0 bg-[radial-gradient(800px_300px_at_10%_20%,rgba(236,72,153,0.12),transparent)]"></div>
</div>

<header className="relative">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">
<a className="flex items-center space-x-2" href="#">
<span className="text-2xl font-medium tracking-tight">
<span className="text-slate-200" style={{}}>orange</span><span className="text-orange-400">bench</span>
</span>
</a>
<nav className="hidden md:flex items-center space-x-8">
<a className="transition font-normal text-slate-300 hover:text-white" href="#" style={{}}>Home</a>
<a className="transition font-normal text-slate-300 hover:text-white" href="#about" style={{}}>About</a>
<a className="transition font-normal text-slate-300 hover:text-white" href="#services" style={{}}>Services</a>
<a className="transition font-normal text-slate-300 hover:text-white" href="#contact" style={{}}>Contact</a>
<a className="inline-flex items-center rounded-full backdrop-blur px-4 py-2 text-sm font-medium transition bg-white/10 text-white hover:bg-white/20" href="#lead">
<svg className="mr-2 w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="circle-arrow-left" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '16px', height: '16px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M16 12H8"></path><path d="m12 8-4 4 4 4"></path></svg>
              Get Started
            </a>
</nav>
<button className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10" id="mobileMenuBtn">
<i className="w-5 h-5" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>
</div>

<div className="md:hidden hidden" id="mobileMenu">
<div className="px-4 pb-4 space-y-2">
<a className="block px-3 py-2 rounded-lg bg-white/5 text-slate-200" href="#" style={{}}>Home</a>
<a className="block px-3 py-2 rounded-lg bg-white/5 text-slate-200" href="#about" style={{}}>About</a>
<a className="block px-3 py-2 rounded-lg bg-white/5 text-slate-200" href="#services" style={{}}>Services</a>
<a className="block px-3 py-2 rounded-lg bg-white/5 text-slate-200" href="#contact" style={{}}>Contact</a>
</div>
</div>
</header>

<section className="relative sm:pt-20 pt-16">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
<div className="relative">
<div className="inline-flex items-center space-x-2 rounded-full border px-3 py-1 text-xs border-white/10 bg-white/5 text-slate-300" style={{}}>
<i className="w-3.5 h-3.5 text-emerald-400" data-lucide="shield-check" strokeWidth="1.5"></i>
<span className="font-medium">ISO-aligned practices</span>
</div>
<h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl tracking-tight font-semibold text-white">
            Reliable IT Solutions for Small &amp; Medium Businesses in Indianapolis
          </h1>
<p className="mt-5 text-base sm:text-lg leading-relaxed max-w-2xl text-slate-300" style={{}}>
            Maximize uptime, reduce IT headaches, and empower your team with expert support and cloud solutions.
          </p>
<div className="mt-8 grid sm:grid-cols-3 gap-4">
<div className="flex items-center space-x-3 rounded-xl border px-4 py-3 bg-white/5 border-white/10">
<i className="w-5 h-5 text-sky-400" data-lucide="cloud" strokeWidth="1.5" style={{}}></i>
<span className="text-sm font-medium text-slate-200" style={{}}>Cloud-first</span>
</div>
<div className="flex items-center space-x-3 rounded-xl border px-4 py-3 bg-white/5 border-white/10">
<i className="w-5 h-5 text-indigo-400" data-lucide="server" strokeWidth="1.5" style={{}}></i>
<span className="text-sm font-medium text-slate-200" style={{}}>Managed Ops</span>
</div>
<div className="flex items-center space-x-3 rounded-xl border px-4 py-3 bg-white/5 border-white/10">
<i className="w-5 h-5 text-emerald-400" data-lucide="lock" strokeWidth="1.5"></i>
<span className="text-sm font-medium text-slate-200" style={{}}>Zero-trust</span>
</div>
</div>
<div className="mt-10 flex items-center space-x-4">
<a className="inline-flex items-center rounded-lg px-5 py-3 text-sm font-medium transition bg-white text-slate-900 hover:bg-slate-100" href="#lead" style={{}}>
<i className="w-4 h-4 mr-2" data-lucide="flashlight" strokeWidth="1.5"></i>
              Schedule Your Free Consultation
            </a>
<a className="inline-flex items-center text-sm text-slate-300 hover:text-white" href="#services" style={{}}>
<i className="w-4 h-4 mr-2" data-lucide="play-circle" strokeWidth="1.5"></i>
              Explore services
            </a>
</div>
</div>

<div className="relative">
<div className="aspect-[4/3] overflow-hidden border rounded-2xl border-white/10">
<img alt="Small business team collaborating in an office" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2834e6e0-db44-4c9f-b6b1-0413fe287ad7_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-tr to-transparent from-slate-950/30 via-slate-900/0" style={{}}></div>
<div className="absolute inset-0 pointer-events-none">
<div className="absolute top-6 left-6 rounded-xl backdrop-blur border px-3 py-2 shadow-sm bg-white/10 border-white/10">
<div className="flex items-center space-x-2 text-slate-200" style={{}}>
<i className="w-4 h-4 text-sky-400" data-lucide="cloud" strokeWidth="1.5" style={{}}></i>
<span className="text-xs">Cloud Sync</span>
</div>
</div>
<div className="absolute top-1/2 -translate-y-1/2 left-8 rounded-xl backdrop-blur border px-3 py-2 shadow-sm bg-white/10 border-white/10">
<div className="flex items-center space-x-2 text-slate-200" style={{}}>
<i className="w-4 h-4 text-indigo-400" data-lucide="network" strokeWidth="1.5" style={{}}></i>
<span className="text-xs">Secure Network</span>
</div>
</div>
<div className="absolute bottom-8 right-8 rounded-xl backdrop-blur border px-3 py-2 shadow-sm bg-white/10 border-white/10">
<div className="flex items-center space-x-2 text-slate-200" style={{}}>
<i className="w-4 h-4 text-emerald-400" data-lucide="shield-check" strokeWidth="1.5"></i>
<span className="text-xs">Compliance</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative mt-14">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="border rounded-2xl backdrop-blur bg-white/5 border-white/10">
<div className="sm:px-10 sm:py-8 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-[#fe990b]/20 to-[#f9893e]/5 pt-6 pr-6 pb-6 pl-6 scale-100">
<p className="sm:text-sm text-xs text-slate-300 text-center mb-6" style={{}}>Trusted by modern teams</p>
<div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6 items-center">
<div className="flex items-center justify-center space-x-2 text-slate-300" style={{}}>
<i className="w-5 h-5 text-sky-400" data-lucide="cloud" style={{}}></i>
<span className="font-medium">Nimbus</span>
</div>
<div className="flex items-center justify-center space-x-2 text-slate-300" style={{}}>
<i className="w-5 h-5 text-indigo-400" data-lucide="server-cog" style={{}}></i>
<span className="font-medium">CoreGrid</span>
</div>
<div className="flex items-center justify-center space-x-2 text-slate-300" style={{}}>
<i className="w-5 h-5 text-emerald-400" data-lucide="cable"></i>
<span className="font-medium">Linkly</span>
</div>
<div className="flex items-center justify-center space-x-2 text-slate-300" style={{}}>
<i className="w-5 h-5 text-rose-400" data-lucide="database"></i>
<span className="font-medium">Dataforge</span>
</div>
<div className="flex items-center justify-center space-x-2 text-slate-300" style={{}}>
<i className="w-5 h-5 text-amber-300" data-lucide="scan-line"></i>
<span className="font-medium">Shieldon</span>
</div>
<div className="flex space-x-2 items-center justify-center text-slate-300" style={{}}>
<i className="w-5 h-5 text-fuchsia-400" data-lucide="life-buoy"></i>
<span className="font-medium">AtlasOps</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative sm:py-24 pt-16 pb-16" id="about">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
<div className="relative">
<h2 className="text-3xl sm:text-4xl tracking-tight font-semibold text-white">IT That Works for Your Business, Not Against It</h2>
<p className="mt-4 leading-relaxed text-slate-300" style={{}}>
            Orange Bench provides tailored IT services designed to keep your systems running smoothly. From cloud solutions to 24/7 monitoring, we make sure technology supports your growth, not slows it down.
          </p>
<ul className="mt-6 space-y-3 text-slate-200" style={{}}>
<li className="flex items-start"><i className="w-5 h-5 mr-2 mt-0.5 text-emerald-400" data-lucide="check-circle" strokeWidth="1.5"></i> Proactive monitoring to prevent downtime</li>
<li className="flex items-start"><i className="w-5 h-5 mr-2 mt-0.5 text-emerald-400" data-lucide="check-circle" strokeWidth="1.5"></i> Cost-effective IT solutions tailored for SMBs</li>
<li className="flex items-start"><i className="w-5 h-5 mr-2 mt-0.5 text-emerald-400" data-lucide="check-circle" strokeWidth="1.5"></i> 24/7 support from certified professionals</li>
</ul>
<div className="mt-8 flex items-center space-x-4">
<a className="inline-flex items-center rounded-lg bg-orange-500 px-5 py-3 text-sm font-medium transition text-slate-900 hover:bg-orange-400" href="#lead" style={{}}>
<i className="w-4 h-4 mr-2" data-lucide="map" strokeWidth="1.5"></i>
              Get Your Customized IT Plan
            </a>
</div>
</div>
<div className="relative">
<div className="aspect-[4/3] rounded-2xl overflow-hidden border border-white/10">
<img alt="Team at work" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/a00168df-f4f3-45b4-860f-696b31190dc8_1600w.jpg"/>
</div>
<div className="absolute -bottom-6 -left-6 hidden sm:block">
</div>
</div>
</div>
</section>

<section className="relative py-16 sm:py-24" id="services">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
<div className="">
<h2 className="text-3xl sm:text-4xl tracking-tight font-semibold">Our Expertise Covers Every Aspect of IT</h2>
<p className="mt-3 text-slate-300" style={{}}>Whether you need cloud migration, network setup, or helpdesk support, Orange Bench has you covered. Our team ensures your IT environment is secure, efficient, and scalable.</p>
</div>
<a className="inline-flex items-center rounded-lg px-4 py-2 text-sm font-medium bg-white/10 hover:bg-white/20" href="#">
<i className="w-4 h-4 mr-2" data-lucide="library" strokeWidth="1.5"></i>
            Learn More About Our Services
          </a>
</div>
<div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="sm:p-12 overflow-hidden bg-[conic-gradient(from_180deg,var(--tw-gradient-stops))] via-orange-500/30 from-amber-400/30 to-amber-400/30 border-white/10 border rounded-3xl px-1 py-1">
<div className="flex items-center justify-between">
<div className="flex items-center space-x-3">
<div className="w-10 h-10 flex bg-sky-500/15 border-sky-500/20 border rounded-lg items-center justify-center" style={{}}>
<svg className="w-[20px] h-[20px]" data-icon-replaced="true" data-lucide="cog" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '20px', height: '20px', color: 'rgb(211, 146, 54)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path className="" d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"></path><path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path><path d="M12 2v2"></path><path d="M12 22v-2"></path><path d="m17 20.66-1-1.73"></path><path d="M11 10.27 7 3.34"></path><path d="m20.66 17-1.73-1"></path><path d="m3.34 7 1.73 1"></path><path d="M14 12h8"></path><path d="M2 12h2"></path><path d="m20.66 7-1.73 1"></path><path d="m3.34 17 1.73-1"></path><path d="m17 3.34-1 1.73"></path><path d="m11 13.73-4 6.93"></path></svg>
</div>
<h3 className="text-lg tracking-tight font-semibold">Cloud Services</h3>
</div>
<i className="w-4 h-4 group-hover:text-white text-slate-400" data-lucide="arrow-up-right" strokeWidth="1.5" style={{}}></i>
</div>
<p className="mt-3 text-sm text-slate-300" style={{}}>Move to secure, scalable cloud systems.</p>
</div>

<div className="sm:p-12 overflow-hidden bg-[conic-gradient(from_180deg,var(--tw-gradient-stops))] via-orange-500/30 from-amber-400/30 to-amber-400/30 border-white/10 border rounded-3xl pt-4 pr-4 pb-4 pl-4">
<div className="flex items-center justify-between">
<div className="flex items-center space-x-3">
<div className="w-10 h-10 flex bg-indigo-500/15 border-indigo-500/20 border rounded-lg items-center justify-center" style={{}}>
<svg className="w-[20px] h-[20px]" data-icon-replaced="true" data-lucide="badge-alert" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '20px', height: '20px', color: 'rgb(211, 146, 54)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path className="" d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><line x1="12" x2="12" y1="8" y2="12"></line><line x1="12" x2="12.01" y1="16" y2="16"></line></svg>
</div>
<h3 className="text-lg tracking-tight font-semibold">Network &amp; Infrastructure</h3>
</div>
<i className="w-4 h-4 group-hover:text-white text-slate-400" data-lucide="arrow-up-right" strokeWidth="1.5" style={{}}></i>
</div>
<p className="text-sm mt-3 text-slate-300" style={{}}>Build a reliable and efficient IT backbone.</p>
</div>

<div className="sm:p-12 overflow-hidden bg-[conic-gradient(from_180deg,var(--tw-gradient-stops))] via-orange-500/30 from-amber-400/30 to-amber-400/30 border-white/10 border rounded-3xl pt-8 pr-8 pb-8 pl-8">
<div className="flex items-center justify-between">
<div className="flex items-center space-x-3">
<div className="w-10 h-10 flex bg-slate-900/15 border-emerald-500/20 border rounded-lg items-center justify-center">
<svg className="w-[20px] h-[20px]" data-icon-replaced="true" data-lucide="eclipse" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '20px', height: '20px', color: 'rgb(211, 146, 54)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><circle className="" cx="12" cy="12" r="10"></circle><path className="" d="M12 2a7 7 0 1 0 10 10"></path></svg>
</div>
<h3 className="text-lg tracking-tight font-semibold">Helpdesk Support</h3>
</div>
<i className="w-4 h-4 group-hover:text-white text-slate-400" data-lucide="arrow-up-right" strokeWidth="1.5" style={{}}></i>
</div>
<p className="mt-3 text-sm text-slate-300" style={{}}>Rapid responses for your team when issues arise.</p>
</div>
</div>
</div>
</section>

<section className="relative py-16 sm:py-24">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
<div className="">
<h2 className="text-3xl sm:text-4xl tracking-tight font-semibold">Trusted by Businesses Like Yours</h2>
<p className="mt-3 text-slate-300" style={{}}>See how we’ve helped local businesses streamline their IT, reduce downtime, and increase productivity. Our clients trust us for reliable, proactive solutions.</p>
</div>
<a className="inline-flex items-center rounded-lg px-4 py-2 text-sm font-medium bg-white/10 hover:bg-white/20" href="#">
<i className="w-4 h-4 mr-2" data-lucide="book-open-text" strokeWidth="1.5"></i>
            Read More Success Stories
          </a>
</div>
<div className="mt-10 grid md:grid-cols-3 gap-6">
<div className="sm:p-12 overflow-hidden bg-[conic-gradient(from_180deg,var(--tw-gradient-stops))] via-orange-500/30 from-amber-400/30 to-amber-400/30 border-white/10 border rounded-3xl pt-8 pr-8 pb-8 pl-8">
<i className="w-5 h-5 mb-3 text-slate-400" data-lucide="quote" strokeWidth="1.5" style={{}}></i>
<p className="italic text-slate-200" style={{}}>“Orange Bench transformed our IT systems — we’ve never had fewer interruptions.”</p>
</div>
<div className="sm:p-12 overflow-hidden bg-[conic-gradient(from_180deg,var(--tw-gradient-stops))] via-orange-500/30 from-amber-400/30 to-amber-400/30 border-white/10 border rounded-3xl pt-8 pr-8 pb-8 pl-8">
<i className="w-5 h-5 mb-3 text-slate-400" data-lucide="quote" strokeWidth="1.5" style={{}}></i>
<p className="italic text-slate-200" style={{}}>“Professional, responsive, and knowledgeable — the team really cares.”</p>
</div>
<div className="sm:p-12 overflow-hidden bg-[conic-gradient(from_180deg,var(--tw-gradient-stops))] via-orange-500/30 from-amber-400/30 to-amber-400/30 border-white/10 border rounded-3xl pt-8 pr-8 pb-8 pl-8">
<i className="w-5 h-5 mb-3 text-slate-400" data-lucide="quote" strokeWidth="1.5" style={{}}></i>
<p className="italic text-slate-200" style={{}}>“Cloud migration was seamless. Highly recommend their services.”</p>
</div>
</div>
</div>
</section>


<section className="relative sm:py-24 pt-16 pb-16" id="lead">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="sm:p-12 overflow-hidden bg-[conic-gradient(from_180deg,var(--tw-gradient-stops))] via-orange-500/30 from-amber-400/30 to-amber-400/30 border-white/10 border rounded-3xl pt-8 pr-8 pb-8 pl-8" style={{}}>
<div className="grid lg:grid-cols-2 gap-10 items-start">
<div className="">
<div className="inline-flex items-center space-x-2 rounded-full border px-3 py-1 text-xs bg-white/5 border-white/10 text-slate-300" style={{}}>
<i className="w-3.5 h-3.5 text-orange-400" data-lucide="rocket" strokeWidth="1.5"></i>
<span className="font-medium">Kickoff in days</span>
</div>
<h3 className="mt-4 text-3xl sm:text-4xl tracking-tight font-semibold">Take Control of Your IT Today</h3>
<p className="mt-3 text-slate-300" style={{}}>Book a free consultation and discover how Orange Bench can make technology work for your business.</p>
</div>
<div className="rounded-2xl backdrop-blur border p-6 sm:p-8 bg-white/5 border-white/10">
<form className="space-y-4" onsubmit="event.preventDefault(); fakeSubmit();">
<div className="grid sm:grid-cols-2 gap-4">
<div className="">
<label className="block text-xs mb-1 text-slate-300" style={{}}>Name*</label>
<input className="w-full placeholder-slate-400 border focus:border-white/20 rounded-lg px-3 py-2 outline-none bg-white/5 text-white border-white/10" placeholder="Your full name" required="" style={{}} type="text"/>
</div>
<div className="">
<label className="block text-xs mb-1 text-slate-300" style={{}}>Company</label>
<input className="w-full placeholder-slate-400 border focus:border-white/20 rounded-lg px-3 py-2 outline-none bg-white/5 text-white border-white/10" placeholder="Company name" style={{}} type="text"/>
</div>
</div>
<div className="">
<label className="block text-xs mb-1 text-slate-300" style={{}}>Email*</label>
<input className="w-full placeholder-slate-400 border focus:border-white/20 rounded-lg px-3 py-2 outline-none bg-white/5 text-white border-white/10" placeholder="you@company.com" required="" style={{}} type="email"/>
</div>
<div className="">
<label className="block text-xs mb-1 text-slate-300" style={{}}>IT Needs / Message</label>
<textarea className="w-full placeholder-slate-400 border focus:border-white/20 rounded-lg px-3 py-2 outline-none bg-white/5 text-white border-white/10" placeholder="Tell us about your goals, challenges, and timelines..." rows="4" style={{}}></textarea>
</div>
<button className="w-full inline-flex items-center justify-center rounded-lg px-4 py-2.5 font-medium transition bg-white text-slate-900 hover:bg-slate-100" style={{}}>
<i className="w-4 h-4 mr-2" data-lucide="calendar-check" strokeWidth="1.5"></i>
                  Book Your Free Consultation
                </button>
<p className="text-xs text-center text-slate-400" id="formNote" style={{}}></p>
</form>
</div>
</div>
</div>
</div>
</section>

<footer className="relative border-t border-white/10">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

<div className="flex flex-wrap gap-3 mb-8 items-center">
<span className="text-xs mr-2 text-slate-400" style={{}}>Certifications &amp; Local Partnerships:</span>
<span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs bg-white/5 border-white/10 text-slate-300" style={{}}>
<i className="w-3.5 h-3.5 text-emerald-400" data-lucide="shield-check" strokeWidth="1.5"></i> Microsoft Partner
          </span>
<span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs bg-white/5 border-white/10 text-slate-300" style={{}}>
<i className="w-3.5 h-3.5 text-sky-400" data-lucide="badge-check" strokeWidth="1.5" style={{}}></i> CompTIA Security+
          </span>
<span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs bg-white/5 border-white/10 text-slate-300" style={{}}>
<i className="w-3.5 h-3.5 text-amber-300" data-lucide="building-2" strokeWidth="1.5"></i> Indy Chamber
          </span>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
<div className="">
<div className="flex items-center space-x-2">
<span className="text-lg tracking-tight font-medium"><span className="text-slate-200" style={{}}>orange</span><span className="text-orange-400">bench</span></span>
</div>
<p className="mt-3 text-sm text-slate-400" style={{}}>Secure, reliable, and human IT for modern teams.</p>
</div>
<div className="">
<div className="text-sm font-medium mb-3">Company</div>
<ul className="space-y-2 text-sm text-slate-300" style={{}}>
<li><a className="hover:text-white" href="#about">About</a></li>
<li><a className="hover:text-white" href="#">Careers</a></li>
<li><a className="hover:text-white" href="#">Press</a></li>
</ul>
</div>
<div>
<div className="text-sm font-medium mb-3">Services</div>
<ul className="space-y-2 text-sm text-slate-300" style={{}}>
<li><a className="hover:text-white" href="#services">Cloud</a></li>
<li><a className="hover:text-white" href="#services">Security</a></li>
<li><a className="hover:text-white" href="#services">Support</a></li>
</ul>
</div>
<div id="contact">
<div className="text-sm font-medium mb-3">Contact</div>
<ul className="space-y-2 text-sm text-slate-300" style={{}}>
<li className="flex items-center"><i className="w-4 h-4 mr-2" data-lucide="phone"></i> (555) 555‑0199</li>
<li className="flex items-center"><i className="w-4 h-4 mr-2" data-lucide="mail"></i> hello@orangebench.io</li>
<li className="flex items-center"><i className="w-4 h-4 mr-2" data-lucide="map-pin"></i> Indianapolis, IN</li>
</ul>
</div>
</div>
<div className="mt- flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500" style={{}}>
<p>© <span id="year"> OrangeBench. All rights reserved.</span></p>
<div className="flex items-center space-x-4 mt-2 sm:mt0">
<a #"="" className="hover:text-slate-300Privacy&lt;/a&gt; &lt;a href=" href="#" style={{}}>Terms</a>
<a classhover:text-slate-"="" href="#">Status</a>
<a className="inline-flex items-center hover:text-slate-300" href="#" style={{}}><i className="w-4 h-4 mr-1.5" data-lucidetwitter"="" strokeWidth="1.5"></i>Twitter</a><i className="w-4 h-4 mr-1.5" data-lucide="linkedin" stroke-width1.5"=""></i>LinkedIn
            </div>
</div>
</div>
</footer>





    </>
  );
}
