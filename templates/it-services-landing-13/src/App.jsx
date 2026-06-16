import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    const mobileBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const iconMenu = document.getElementById('iconMenu');
    const iconClose = document.getElementById('iconClose');
    mobileBtn?.addEventListener('click', () => {
      const isOpen = mobileMenu.style.maxHeight && mobileMenu.style.maxHeight !== '0px';
      if (isOpen) {
        mobileMenu.style.maxHeight = '0px';
        iconMenu.classList.remove('hidden');
        iconClose.classList.add('hidden');
      } else {
        mobileMenu.style.maxHeight = mobileMenu.scrollHeight + 'px';
        iconMenu.classList.add('hidden');
        iconClose.classList.remove('hidden');
      }
    });

    document.getElementById('year').textContent = new Date().getFullYear();

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('opacity-0', 'translate-y-4');
          entry.target.classList.add('opacity-100', 'translate-y-0');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('section').forEach(section => {
      section.classList.add('opacity-0', 'translate-y-4', 'transition-all', 'duration-700');
      observer.observe(section);
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900">

<header className="sticky top-0 z-50 border-b border-slate-800/70 bg-slate-950/85 backdrop-blur">
<div className="max-w-6xl mx-auto flex items-center justify-between gap-4 py-4 px-4 sm:px-6 lg:px-8">

<a className="inline-flex items-center gap-3 group" href="#top">
<div className="relative">
<div className="h-9 w-9 rounded-xl bg-gradient-to-br from-cyan-500 via-sky-500 to-emerald-400 flex items-center justify-center shadow-lg shadow-cyan-500/30">
<span className="text-base font-semibold tracking-tight text-slate-950 select-none">Gb</span>
</div>
<div className="absolute inset-0 rounded-xl bg-cyan-400/40 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
</div>
<div className="flex flex-col leading-none">
<span className="text-sm font-semibold tracking-tight text-slate-50">Gbyte LLC</span>
<span className="text-xs font-normal text-slate-400">IT Solutions · RGV</span>
</div>
</a>

<nav className="hidden md:flex items-center gap-6 text-sm">
<a className="text-slate-300 hover:text-cyan-400 transition-colors" href="#services">Services</a>
<a className="text-slate-300 hover:text-cyan-400 transition-colors" href="#about">About</a>
<a className="text-slate-300 hover:text-cyan-400 transition-colors" href="#contact">Contact</a>
</nav>

<div className="flex items-center gap-3">
<a className="hidden sm:inline-flex items-center gap-2 rounded-full border border-slate-800/80 bg-slate-900/70 px-3 py-1.5 text-xs font-medium text-slate-200 hover:border-cyan-400/60 hover:text-cyan-100 hover:bg-slate-900 transition-colors" href="tel:+19566318859">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.11 4.2 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.94.37 1.86.72 2.73a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.35-1.35a2 2 0 0 1 2.11-.45c.87.35 1.79.6 2.73.72A2 2 0 0 1 22 16.92z"></path>
</svg>
<span>Call Now</span>
</a>
<button className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-full border border-slate-800 bg-slate-900/80 text-slate-200 hover:border-cyan-400 transition-colors" id="mobileMenuBtn">
<svg className="h-4 w-4" fill="none" id="iconMenu" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<line x1="4" x2="20" y1="6" y2="6"></line>
<line x1="4" x2="20" y1="12" y2="12"></line>
<line x1="4" x2="20" y1="18" y2="18"></line>
</svg>
<svg className="h-4 w-4 hidden" fill="none" id="iconClose" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<line x1="18" x2="6" y1="6" y2="18"></line>
<line x1="6" x2="18" y1="6" y2="18"></line>
</svg>
</button>
</div>
</div>

<div className="md:hidden max-h-0 overflow-hidden transition-all duration-300 border-t border-slate-800/70 bg-slate-950/95" id="mobileMenu">
<nav className="flex flex-col gap-2 px-4 sm:px-6 pb-4 pt-3 text-sm">
<a className="text-slate-200 hover:text-cyan-400 transition-colors" href="#services">Services</a>
<a className="text-slate-200 hover:text-cyan-400 transition-colors" href="#about">About</a>
<a className="text-slate-200 hover:text-cyan-400 transition-colors" href="#contact">Contact</a>
<a className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-800 bg-slate-900 px-4 py-2 text-xs font-medium text-slate-50 mt-2 hover:border-cyan-400 hover:text-cyan-100 transition-colors" href="tel:+19566318859">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.11 4.2 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.94.37 1.86.72 2.73a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.35-1.35a2 2 0 0 1 2.11-.45c.87.35 1.79.6 2.73.72A2 2 0 0 1 22 16.92z"></path>
</svg>
<span>Call (956) 631-8859</span>
</a>
</nav>
</div>
</header>

<main className="flex-1" id="top">

<section className="relative overflow-hidden">

<div className="pointer-events-none absolute inset-0">
<div className="absolute -top-40 -left-24 h-64 w-64 rounded-full bg-cyan-500/20 blur-3xl"></div>
<div className="absolute top-40 -right-10 h-64 w-64 rounded-full bg-emerald-500/20 blur-3xl"></div>
</div>
<div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-18 lg:py-22">
<div className="grid lg:grid-cols-[minmax(0,3fr)_minmax(0,2.2fr)] gap-10 lg:gap-14 items-center">

<div className="space-y-6 sm:space-y-7">
<div className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/70 px-3 py-1.5 text-[0.7rem] sm:text-xs text-slate-300">
<span className="relative flex h-1.5 w-1.5">
<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/60"></span>
<span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
</span>
<span className="font-medium tracking-tight">Serving the entire Rio Grande Valley</span>
</div>
<div className="space-y-3">
<h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-50">
                  Your IT partner for the modern business.
                </h1>
<p className="text-base sm:text-lg text-slate-300 max-w-xl">
                  Gbyte LLC is an Information Technology company dedicated to your business needs. We serve the entire Rio Grande Valley with a full range of IT solutions.
                </p>
</div>
<div className="grid gap-3 sm:flex sm:flex-row sm:items-center sm:gap-4">
<a className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-500 px-5 py-2.5 text-xs sm:text-sm font-medium text-slate-950 shadow-lg shadow-cyan-500/30 hover:bg-cyan-400 transition-colors" href="#contact">
<span>Request a consultation</span>
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="M12 5l7 7-7 7"></path>
</svg>
</a>
<a className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2 text-xs sm:text-sm font-medium text-slate-100 hover:border-cyan-400 hover:text-cyan-100 transition-colors" href="tel:+19566318859">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.11 4.2 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.94.37 1.86.72 2.73a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.35-1.35a2 2 0 0 1 2.11-.45c.87.35 1.79.6 2.73.72A2 2 0 0 1 22 16.92z"></path>
</svg>
<span>(956) 631-8859</span>
</a>
</div>

<div className="flex flex-wrap items-center gap-3 pt-1">
<div className="flex -space-x-2">
<div className="h-7 w-7 rounded-full bg-slate-800 border border-slate-700"></div>
<div className="h-7 w-7 rounded-full bg-slate-800 border border-slate-700"></div>
<div className="h-7 w-7 rounded-full bg-slate-800 border border-slate-700"></div>
</div>
<p className="text-xs sm:text-sm text-slate-400">
                  Trusted by businesses across healthcare, legal, and finance in the RGV.
                </p>
</div>
</div>

<div className="relative">
<div className="relative rounded-3xl border border-slate-800/80 bg-gradient-to-br from-slate-900/80 via-slate-900/90 to-slate-950/90 p-4 sm:p-5 lg:p-6 shadow-2xl shadow-slate-950/70 overflow-hidden">

<div className="pointer-events-none absolute -top-36 right-0 h-64 w-64 rounded-full bg-cyan-500/15 blur-3xl"></div>
<div className="relative space-y-4 sm:space-y-5">

<div className="flex items-center justify-between gap-2">
<div className="flex items-center gap-2">
<span className="h-2 w-2 rounded-full bg-emerald-400"></span>
<span className="text-xs font-medium text-slate-200 tracking-tight">
                        Live systems overview
                      </span>
</div>
<span className="text-[0.65rem] text-slate-400">Gbyte Dashboard</span>
</div>

<div className="grid grid-cols-3 gap-3">
<div className="rounded-2xl border border-slate-800 bg-slate-900/90 p-3">
<div className="flex items-center justify-between">
<span className="text-[0.65rem] text-slate-400">Tickets</span>
<svg className="h-3.5 w-3.5 text-cyan-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M9 12l2 2 4-4"></path>
<rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect>
</svg>
</div>
<p className="mt-1 text-lg font-semibold tracking-tight text-slate-50">98%</p>
<p className="text-[0.65rem] text-slate-400">Resolved within SLA</p>
</div>
<div className="rounded-2xl border border-slate-800 bg-slate-900/90 p-3">
<div className="flex items-center justify-between">
<span className="text-[0.65rem] text-slate-400">Backups</span>
<svg className="h-3.5 w-3.5 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 12a9 9 0 0 1 9-9"></path>
<path d="M3 3v4h4"></path>
<path d="M21 12a9 9 0 0 1-9 9"></path>
<path d="M21 21v-4h-4"></path>
</svg>
</div>
<p className="mt-1 text-lg font-semibold tracking-tight text-slate-50">24/7</p>
<p className="text-[0.65rem] text-slate-400">Monitored &amp; verified</p>
</div>
<div className="rounded-2xl border border-slate-800 bg-slate-900/90 p-3">
<div className="flex items-center justify-between">
<span className="text-[0.65rem] text-slate-400">Network</span>
<svg className="h-3.5 w-3.5 text-sky-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="3"></circle>
<path d="M12 2v4"></path>
<path d="M12 18v4"></path>
<path d="m4.93 4.93 2.83 2.83"></path>
<path d="m16.24 16.24 2.83 2.83"></path>
<path d="M2 12h4"></path>
<path d="M18 12h4"></path>
<path d="m4.93 19.07 2.83-2.83"></path>
<path d="m16.24 7.76 2.83-2.83"></path>
</svg>
</div>
<p className="mt-1 text-lg font-semibold tracking-tight text-slate-50">99.9%</p>
<p className="text-[0.65rem] text-slate-400">Uptime target</p>
</div>
</div>

<div className="space-y-3">
<p className="text-[0.7rem] text-slate-400">Recent activity</p>
<div className="space-y-2">
<div className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-900/80 px-3 py-2">
<div className="flex items-center gap-2">
<div className="h-5 w-5 rounded-full bg-emerald-500/15 flex items-center justify-center">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
</div>
<div>
<p className="text-xs text-slate-100">Server patching completed</p>
<p className="text-[0.65rem] text-slate-400">All systems up-to-date</p>
</div>
</div>
<span className="text-[0.65rem] text-slate-400">Today</span>
</div>
<div className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-900/80 px-3 py-2">
<div className="flex items-center gap-2">
<div className="h-5 w-5 rounded-full bg-cyan-500/15 flex items-center justify-center">
<span className="h-1.5 w-1.5 rounded-full bg-cyan-400"></span>
</div>
<div>
<p className="text-xs text-slate-100">New workstation deployed</p>
<p className="text-[0.65rem] text-slate-400">Secure configuration applied</p>
</div>
</div>
<span className="text-[0.65rem] text-slate-400">2 hrs ago</span>
</div>
<div className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-900/80 px-3 py-2">
<div className="flex items-center gap-2">
<div className="h-5 w-5 rounded-full bg-amber-500/15 flex items-center justify-center">
<span className="h-1.5 w-1.5 rounded-full bg-amber-400"></span>
</div>
<div>
<p className="text-xs text-slate-100">Backup tested</p>
<p className="text-[0.65rem] text-slate-400">Recovery verified</p>
</div>
</div>
<span className="text-[0.65rem] text-slate-400">Yesterday</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative border-t border-slate-800/80 bg-slate-950/60" id="services">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-700/60 to-transparent"></div>
</div>
<div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 sm:gap-6">
<div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-50">
                Comprehensive IT services for your business.
              </h2>
<p className="mt-2 text-base text-slate-300 max-w-2xl">
                We provide turnkey solutions for small and medium businesses in the Rio Grande Valley, so you can focus on running your business—not your technology.
              </p>
</div>
<div className="flex items-center gap-2 text-xs text-slate-400">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
<span>On‑site and remote support available</span>
</div>
</div>
<div className="mt-8 grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">

<article className="group rounded-2xl border border-slate-800 bg-slate-950/70 p-4 sm:p-5 hover:border-cyan-500/60 hover:bg-slate-900/90 transition-all duration-300">
<div className="flex items-center justify-between gap-3">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-xl bg-cyan-500/15 flex items-center justify-center text-cyan-400">
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="14" rx="2" ry="2" width="20" x="2" y="7"></rect>
<path d="M12 7V3"></path>
<path d="M8 3h8"></path>
</svg>
</div>
<h3 className="text-base sm:text-lg font-semibold tracking-tight text-slate-50">
                    Managed IT &amp; Support
                  </h3>
</div>
<span className="text-[0.65rem] text-slate-400 group-hover:text-cyan-300 transition-colors">Proactive</span>
</div>
<p className="mt-3 text-sm sm:text-base text-slate-300">
                Keep your systems running smoothly with ongoing maintenance, monitoring, and remote support tailored to your business.
              </p>
<ul className="mt-3 space-y-1.5 text-xs sm:text-sm text-slate-400">
<li className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-cyan-400/70"></span>
                  Helpdesk &amp; remote assistance
                </li>
<li className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-cyan-400/70"></span>
                  Server &amp; workstation maintenance
                </li>
</ul>
</article>

<article className="group rounded-2xl border border-slate-800 bg-slate-950/70 p-4 sm:p-5 hover:border-cyan-500/60 hover:bg-slate-900/90 transition-all duration-300">
<div className="flex items-center justify-between gap-3">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-xl bg-emerald-500/15 flex items-center justify-center text-emerald-400">
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 7v10a2 2 0 0 0 2 2h14"></path>
<path d="M7 7V5a2 2 0 0 1 2-2h8l3 3v6"></path>
<path d="M7 10h4"></path>
<path d="M7 14h3"></path>
</svg>
</div>
<h3 className="text-base sm:text-lg font-semibold tracking-tight text-slate-50">
                    Network &amp; Infrastructure
                  </h3>
</div>
<span className="text-[0.65rem] text-slate-400 group-hover:text-emerald-300 transition-colors">Reliable</span>
</div>
<p className="mt-3 text-sm sm:text-base text-slate-300">
                Design, deployment, and management of secure networks that keep your team connected and productive.
              </p>
<ul className="mt-3 space-y-1.5 text-xs sm:text-sm text-slate-400">
<li className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400/70"></span>
                  Wired &amp; wireless networks
                </li>
<li className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400/70"></span>
                  Firewalls &amp; VPN solutions
                </li>
</ul>
</article>

<article className="group rounded-2xl border border-slate-800 bg-slate-950/70 p-4 sm:p-5 hover:border-cyan-500/60 hover:bg-slate-900/90 transition-all duration-300">
<div className="flex items-center justify-between gap-3">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-xl bg-sky-500/15 flex items-center justify-center text-sky-400">
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="16" rx="2" ry="2" width="18" x="3" y="4"></rect>
<path d="M3 10h18"></path>
<path d="M7 16h0"></path>
<path d="M11 16h0"></path>
</svg>
</div>
<h3 className="text-base sm:text-lg font-semibold tracking-tight text-slate-50">
                    Backup &amp; Data Protection
                  </h3>
</div>
<span className="text-[0.65rem] text-slate-400 group-hover:text-sky-300 transition-colors">Secure</span>
</div>
<p className="mt-3 text-sm sm:text-base text-slate-300">
                Protect your critical data and ensure business continuity with robust backup and recovery solutions.
              </p>
<ul className="mt-3 space-y-1.5 text-xs sm:text-sm text-slate-400">
<li className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-sky-400/70"></span>
                  Local &amp; cloud backups
                </li>
<li className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-sky-400/70"></span>
                  Disaster recovery planning
                </li>
</ul>
</article>

<article className="group rounded-2xl border border-slate-800 bg-slate-950/70 p-4 sm:p-5 hover:border-cyan-500/60 hover:bg-slate-900/90 transition-all duration-300">
<div className="flex items-center justify-between gap-3">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-xl bg-fuchsia-500/15 flex items-center justify-center text-fuchsia-400">
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 12a5 5 0 1 0-5-5"></path>
<path d="M12 12a5 5 0 1 1-5 5"></path>
<path d="M12 12 8.5 8.5"></path>
</svg>
</div>
<h3 className="text-base sm:text-lg font-semibold tracking-tight text-slate-50">
                    Cybersecurity &amp; Compliance
                  </h3>
</div>
<span className="text-[0.65rem] text-slate-400 group-hover:text-fuchsia-300 transition-colors">Protected</span>
</div>
<p className="mt-3 text-sm sm:text-base text-slate-300">
                Safeguard your business from threats with layered security, best practices, and compliance‑focused solutions.
              </p>
<ul className="mt-3 space-y-1.5 text-xs sm:text-sm text-slate-400">
<li className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-fuchsia-400/70"></span>
                  Antivirus &amp; endpoint protection
                </li>
<li className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-fuchsia-400/70"></span>
                  Security assessments
                </li>
</ul>
</article>

<article className="group rounded-2xl border border-slate-800 bg-slate-950/70 p-4 sm:p-5 hover:border-cyan-500/60 hover:bg-slate-900/90 transition-all duration-300">
<div className="flex items-center justify-between gap-3">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-xl bg-amber-500/15 flex items-center justify-center text-amber-400">
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M10 13a5 5 0 0 0 7.54.54l3-3A5 5 0 0 0 14.5 5.05L13 3.5"></path>
<path d="M14 11a5 5 0 0 0-7.54-.54l-3 3A5 5 0 0 0 9.5 20.95L11 22.5"></path>
</svg>
</div>
<h3 className="text-base sm:text-lg font-semibold tracking-tight text-slate-50">
                    IT Consulting &amp; Strategy
                  </h3>
</div>
<span className="text-[0.65rem] text-slate-400 group-hover:text-amber-300 transition-colors">Strategic</span>
</div>
<p className="mt-3 text-sm sm:text-base text-slate-300">
                Align your technology roadmap with your business goals using practical, experience‑driven guidance.
              </p>
<ul className="mt-3 space-y-1.5 text-xs sm:text-sm text-slate-400">
<li className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-amber-400/70"></span>
                  Infrastructure planning
                </li>
<li className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-amber-400/70"></span>
                  Technology budgeting
                </li>
</ul>
</article>

<article className="group rounded-2xl border border-slate-800 bg-slate-950/70 p-4 sm:p-5 hover:border-cyan-500/60 hover:bg-slate-900/90 transition-all duration-300">
<div className="flex items-center justify-between gap-3">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-xl bg-indigo-500/15 flex items-center justify-center text-indigo-400">
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M10 20v-6a2 2 0 0 1 2-2h10"></path>
<path d="M14 4h8v4h-8z"></path>
<path d="M2 20h4"></path>
<path d="M2 4h4"></path>
<path d="M4 4v16"></path>
</svg>
</div>
<h3 className="text-base sm:text-lg font-semibold tracking-tight text-slate-50">
                    On‑Site Services
                  </h3>
</div>
<span className="text-[0.65rem] text-slate-400 group-hover:text-indigo-300 transition-colors">Local</span>
</div>
<p className="mt-3 text-sm sm:text-base text-slate-300">
                When you need hands‑on support, we come to you—serving businesses across the Rio Grande Valley.
              </p>
<ul className="mt-3 space-y-1.5 text-xs sm:text-sm text-slate-400">
<li className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-indigo-400/70"></span>
                  Installations &amp; upgrades
                </li>
<li className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-indigo-400/70"></span>
                  Troubleshooting on‑site
                </li>
</ul>
</article>
</div>
</div>
</section>

<section className="relative border-t border-slate-800/80 bg-slate-950" id="about">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-700/60 to-transparent"></div>
</div>
<div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
<div className="grid lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] gap-10 lg:gap-14 items-start">
<div className="space-y-4 sm:space-y-5">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-50">
                Local expertise backed by years of experience.
              </h2>
<p className="text-base sm:text-lg text-slate-300">
                Gbyte LLC is an Information Technology company based in the Rio Grande Valley. We understand the unique needs of local businesses and provide practical, reliable solutions that help you stay secure, efficient, and competitive.
              </p>
<p className="text-sm sm:text-base text-slate-300">
                From small offices to multi‑site environments, we design, implement, and support technology that simply works. Our goal is to be your long‑term IT partner—not just a vendor.
              </p>
<div className="grid gap-4 sm:grid-cols-3">
<div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-3">
<p className="text-xs text-slate-400">Experience</p>
<p className="mt-1 text-lg font-semibold tracking-tight text-slate-50">Years</p>
<p className="text-[0.7rem] text-slate-400">Working with businesses across the RGV.</p>
</div>
<div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-3">
<p className="text-xs text-slate-400">Focus</p>
<p className="mt-1 text-lg font-semibold tracking-tight text-slate-50">Business IT</p>
<p className="text-[0.7rem] text-slate-400">Solutions built for real‑world operations.</p>
</div>
<div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-3">
<p className="text-xs text-slate-400">Coverage</p>
<p className="mt-1 text-lg font-semibold tracking-tight text-slate-50">RGV</p>
<p className="text-[0.7rem] text-slate-400">Serving the entire Rio Grande Valley region.</p>
</div>
</div>
</div>

<div className="space-y-4 sm:space-y-5">
<div className="flex items-center gap-2 text-xs text-slate-400">
<span className="h-1.5 w-1.5 rounded-full bg-cyan-400"></span>
<span>How we work with you</span>
</div>
<ol className="relative border-l border-slate-800/80 pl-4 space-y-4 sm:space-y-5">
<li className="relative">
<div className="absolute -left-2 top-1 h-3 w-3 rounded-full border border-slate-900 bg-cyan-400 shadow shadow-cyan-500/40"></div>
<h3 className="text-sm sm:text-base font-semibold tracking-tight text-slate-50">
                    1. Discover your needs
                  </h3>
<p className="mt-1 text-xs sm:text-sm text-slate-300">
                    We start by understanding how your business operates, the systems you rely on, and the challenges you’re facing.
                  </p>
</li>
<li className="relative">
<div className="absolute -left-2 top-1 h-3 w-3 rounded-full border border-slate-900 bg-emerald-400 shadow shadow-emerald-500/40"></div>
<h3 className="text-sm sm:text-base font-semibold tracking-tight text-slate-50">
                    2. Design the right solution
                  </h3>
<p className="mt-1 text-xs sm:text-sm text-slate-300">
                    We develop a clear, practical plan—whether it’s a one‑time project or an ongoing managed service.
                  </p>
</li>
<li className="relative">
<div className="absolute -left-2 top-1 h-3 w-3 rounded-full border border-slate-900 bg-sky-400 shadow shadow-sky-500/40"></div>
<h3 className="text-sm sm:text-base font-semibold tracking-tight text-slate-50">
                    3. Implement &amp; support
                  </h3>
<p className="mt-1 text-xs sm:text-sm text-slate-300">
                    We deploy, monitor, and support your systems—keeping you informed and your business running smoothly.
                  </p>
</li>
</ol>
<div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4 flex items-start gap-3">
<div className="mt-1 h-7 w-7 rounded-full bg-slate-900 flex items-center justify-center text-cyan-400">
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M8 21h8"></path>
<path d="M12 17v4"></path>
<path d="M7 4v9a5 5 0 0 0 10 0V4"></path>
<path d="M5 4h14"></path>
</svg>
</div>
<div>
<p className="text-sm sm:text-base text-slate-200">
                    We speak your language.
                  </p>
<p className="mt-1 text-xs sm:text-sm text-slate-400">
                    No jargon, just clear communication, honest advice, and dependable service you can count on.
                  </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative border-y border-slate-800/80 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent"></div>
</div>
<div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
<div className="rounded-3xl border border-slate-700/70 bg-slate-950/80 px-4 py-5 sm:px-6 sm:py-6 lg:px-8 lg:py-7 flex flex-col md:flex-row md:items-center md:justify-between gap-4 sm:gap-5">
<div>
<p className="text-xs sm:text-sm font-medium tracking-tight text-cyan-300 uppercase">
                Ready to get started?
              </p>
<h3 className="mt-1 text-lg sm:text-xl font-semibold tracking-tight text-slate-50">
                Let’s talk about your IT needs.
              </h3>
<p className="mt-1 text-sm sm:text-base text-slate-300">
                Whether you need a complete IT partner or help with a specific project, we’re here to help.
              </p>
</div>
<div className="flex flex-wrap items-center gap-3">
<a className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-500 px-4 py-2 text-xs sm:text-sm font-medium text-slate-950 shadow-md shadow-cyan-500/30 hover:bg-cyan-400 transition-colors" href="#contact">
<span>Schedule a call</span>
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="M12 5l7 7-7 7"></path>
</svg>
</a>
<a className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-700 bg-slate-950 px-4 py-2 text-xs sm:text-sm font-medium text-slate-100 hover:border-cyan-400 hover:text-cyan-100 transition-colors" href="mailto:info@gbytellc.com">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 4h16c1.1 0 2 .9 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2z"></path>
<path d="m22 6-10 7L2 6"></path>
</svg>
<span>info@gbytellc.com</span>
</a>
</div>
</div>
</div>
</section>

<section className="relative bg-slate-950" id="contact">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-700/60 to-transparent"></div>
<div className="absolute -bottom-32 left-1/3 h-64 w-64 rounded-full bg-cyan-500/15 blur-3xl"></div>
</div>
<div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
<div className="grid lg:grid-cols-[minmax(0,3fr)_minmax(0,2.2fr)] gap-10 lg:gap-14 items-start">
<div className="space-y-4 sm:space-y-5">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-50">
                Contact Gbyte LLC
              </h2>
<p className="text-base sm:text-lg text-slate-300">
                Tell us a bit about your business and IT needs, and we’ll follow up to schedule a conversation.
              </p>

<div className="space-y-3 sm:space-y-4">
<div className="flex items-start gap-3">
<div className="mt-0.5 h-7 w-7 rounded-full bg-slate-900 flex items-center justify-center text-cyan-400">
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.11 4.2 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.94.37 1.86.72 2.73a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.35-1.35a2 2 0 0 1 2.11-.45c.87.35 1.79.6 2.73.72A2 2 0 0 1 22 16.92z"></path>
</svg>
</div>
<div>
<p className="text-xs sm:text-sm font-medium text-slate-200">Phone</p>
<a className="mt-1 inline-flex text-sm sm:text-base text-slate-300 hover:text-cyan-300 transition-colors" href="tel:+19566318859">
                      (956) 631-8859
                    </a>
</div>
</div>
<div className="flex items-start gap-3">
<div className="mt-0.5 h-7 w-7 rounded-full bg-slate-900 flex items-center justify-center text-cyan-400">
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 4h16c1.1 0 2 .9 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2z"></path>
<path d="m22 6-10 7L2 6"></path>
</svg>
</div>
<div>
<p className="text-xs sm:text-sm font-medium text-slate-200">Email</p>
<a className="mt-1 inline-flex text-sm sm:text-base text-slate-300 hover:text-cyan-300 transition-colors" href="mailto:info@gbytellc.com">
                      info@gbytellc.com
                    </a>
</div>
</div>
<div className="flex items-start gap-3">
<div className="mt-0.5 h-7 w-7 rounded-full bg-slate-900 flex items-center justify-center text-cyan-400">
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0Z"></path>
<circle cx="12" cy="10" r="3"></circle>
</svg>
</div>
<div>
<p className="text-xs sm:text-sm font-medium text-slate-200">Service Area</p>
<p className="mt-1 text-sm sm:text-base text-slate-300">
                      Serving businesses across the Rio Grande Valley and surrounding areas.
                    </p>
</div>
</div>
</div>
</div>

<div className="rounded-3xl border border-slate-800 bg-slate-950/80 p-4 sm:p-5 lg:p-6 shadow-lg shadow-slate-950/70">
<form className="space-y-4 sm:space-y-5">
<div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
<div>
<label className="block text-xs sm:text-sm font-medium text-slate-200 mb-1.5">Name</label>
<input className="w-full rounded-2xl border border-slate-800 bg-slate-950/80 px-3 py-2 text-xs sm:text-sm text-slate-100 placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/30 transition-all" placeholder="Your name" type="text"/>
</div>
<div>
<label className="block text-xs sm:text-sm font-medium text-slate-200 mb-1.5">Company</label>
<input className="w-full rounded-2xl border border-slate-800 bg-slate-950/80 px-3 py-2 text-xs sm:text-sm text-slate-100 placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/30 transition-all" placeholder="Your company" type="text"/>
</div>
</div>
<div>
<label className="block text-xs sm:text-sm font-medium text-slate-200 mb-1.5">Email</label>
<input className="w-full rounded-2xl border border-slate-800 bg-slate-950/80 px-3 py-2 text-xs sm:text-sm text-slate-100 placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/30 transition-all" placeholder="you@example.com" type="email"/>
</div>
<div>
<label className="block text-xs sm:text-sm font-medium text-slate-200 mb-1.5">Phone</label>
<input className="w-full rounded-2xl border border-slate-800 bg-slate-950/80 px-3 py-2 text-xs sm:text-sm text-slate-100 placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/30 transition-all" placeholder="(956) 555‑1234" type="tel"/>
</div>
<div>
<label className="block text-xs sm:text-sm font-medium text-slate-200 mb-1.5">How can we help?</label>
<textarea className="w-full rounded-2xl border border-slate-800 bg-slate-950/80 px-3 py-2 text-xs sm:text-sm text-slate-100 placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/30 transition-all" placeholder="Tell us about your IT needs, challenges, or upcoming projects." rows="4"></textarea>
</div>
<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
<button className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-500 px-5 py-2.5 text-xs sm:text-sm font-medium text-slate-950 shadow-md shadow-cyan-500/30 hover:bg-cyan-400 transition-colors" type="submit">
<span>Send message</span>
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 2 11 13"></path>
<path d="M22 2 15 22 11 13 2 9 22 2z"></path>
</svg>
</button>
<p className="text-[0.65rem] sm:text-xs text-slate-500">
                    By submitting, you agree to be contacted regarding your inquiry.
                  </p>
</div>
</form>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-slate-800/80 bg-slate-950">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
<div className="flex items-center gap-2 text-xs text-slate-400">
<span className="font-semibold tracking-tight text-slate-200">Gbyte LLC</span>
<span className="h-1 w-1 rounded-full bg-slate-600"></span>
<span>IT Solutions for the Rio Grande Valley</span>
</div>
<div className="flex flex-wrap items-center gap-4 text-[0.7rem] sm:text-xs text-slate-500">
<span>© <span id="year"></span> Gbyte LLC. All rights reserved.</span>
<span className="hidden sm:inline h-1 w-1 rounded-full bg-slate-700"></span>
<span>Serving the entire Rio Grande Valley.</span>
</div>
</div>
</div>
</footer>
</div>



    </>
  );
}
