import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      document.addEventListener('DOMContentLoaded', () => {
        if (window.lucide) {
          window.lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
        }
        const btn = document.getElementById('menuBtn');
        const nav = document.getElementById('mobileNav');
        if (btn && nav) {
          btn.addEventListener('click', () => {
            const isOpen = !nav.classList.contains('hidden');
            nav.classList.toggle('hidden');
            btn.innerHTML = isOpen
              ? '<i data-lucide="menu" class="w-5 h-5 text-white"></i>'
              : '<i data-lucide="x" class="w-5 h-5 text-white"></i>';
            if (window.lucide) window.lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
          });
        }
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      &lt;&gt;Nexus Edu — AI Advisors for Learning Pathways
<meta content="Nexus Edu brings AI advisors your LMS—guiding students, empowering educators, and connecting employers. Secure, compliant, and measurable." name="description"/>
<link href="https://fonts.googleapis.com" rel="preconnect"/>
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&amp;family=Manrope:wght@400;500;600;700&amp;display=swap" rel="stylesheet"/>


<header className="sticky top-0 z-50 border-b border-white/5 bg-black/60 backdrop-blur">
<div className="max-w-7xl mx-auto px-6">
<div className="flex items-center justify-between h-16">

<a className="flex items-center gap-3 group" href="#">
<svg className="lucide lucide-graduation-cap w-[22px] h-[22px] text-white/90" data-lucide="graduation-cap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path><path d="M22 10v6"></path><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path></svg>
<span className="text-lg font-semibold tracking-tight">Nexus Edu</span>
</a>

<nav className="hidden md:flex items-center gap-8 text-sm">
<a className="hover:text-white transition-colors font-medium text-white/80" href="#">Agents</a>
<a className="text-white/60 hover:text-white transition-colors font-medium" href="#">Solutions</a>
<a className="text-white/60 hover:text-white transition-colors font-medium" href="#">Integrations</a>
<a className="text-white/60 hover:text-white transition-colors font-medium" href="#">Pricing</a>
<a className="text-white/60 hover:text-white transition-colors font-medium" href="#">Contact</a>
</nav>

<div className="flex items-center gap-3">
<a className="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-white bg-gradient-to-l from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700 rounded-full px-4 py-2 shadow-md shadow-indigo-500/20" href="#">
              Get a Demo
              <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<button className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-colors" id="menuBtn">
<svg className="lucide lucide-menu w-5 h-5 text-white" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</div>

<div className="hidden md:hidden pb-4" id="mobileNav">
<div className="mt-2 grid gap-2">
<a className="px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white/90 text-sm font-medium" href="#">Agents</a>
<a className="px-3 py-2 rounded-lg hover:bg-white/5 border border-white/10 text-white/70 text-sm font-medium" href="#">Solutions</a>
<a className="px-3 py-2 rounded-lg hover:bg-white/5 border border-white/10 text-white/70 text-sm font-medium" href="#">Integrations</a>
<a className="px-3 py-2 rounded-lg hover:bg-white/5 border border-white/10 text-white/70 text-sm font-medium" href="#">Pricing</a>
<a className="px-3 py-2 rounded-lg hover:bg-white/5 border border-white/10 text-white/70 text-sm font-medium" href="#">Contact</a>
<a className="inline-flex items-center justify-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-400 hover:to-cyan-400 transition-colors" href="#">
              Get a Demo
              <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>
</header>

<main className="">
<section className="relative overflow-hidden">
<div className="pointer-events-none absolute inset-0 -z-10">
<div className="absolute left-1/2 -translate-x-1/2 top-0 w-[42rem] h-[42rem] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.18)_0%,transparent_60%)] blur-3xl"></div>
</div>
<div className="max-w-7xl mx-auto text-center px-6 pt-20 sm:pt-24 md:pt-28 pb-16 sm:pb-24 md:pb-28">

<div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5">
<span className="text-xs font-medium text-white/90 rounded-full bg-blue-500/20 px-2 py-0.5 border border-blue-400/30">2025</span>
<span className="text-xs font-medium text-white/70">LMS‑Native AI Suite</span>
</div>

<h1 className="mx-auto max-w-5xl text-4xl sm:text-6xl md:text-7xl leading-[1.05] font-manrope tracking-tighter">
            AI advisors for every
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">learning pathway.</span>
</h1>

<p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-white/70">
            Nexus Edu integrates directly with your LMS to guide students, empower educators, and connect employers—securely and at scale.
          </p>

<div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
<a className="inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-medium text-black bg-white hover:bg-white/90 transition-colors ring-1 ring-black/5" href="#">
              Get a Demo
              <svg className="lucide lucide-rocket w-4 h-4" data-lucide="rocket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
</a>
<a className="inline-flex items-center justify-center gap-2 hover:bg-white/10 transition-colors text-sm font-medium text-white bg-white/5 border border-white/10 rounded-xl px-5 py-3 backdrop-blur" href="#">
              How it works
              <svg className="lucide lucide-play w-4 h-4" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</a>
</div>

<div className="md:p-8 rounded-3xl mt-8">
<div className="text-center">
<p className="text-sm text-white/50">Seamless with your existing stack</p>
</div>
<div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
<div className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2">
<svg className="lucide lucide-layout-grid w-[18px] h-[18px] text-white/70" data-lucide="layout-grid" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="7" rx="1" width="7" x="3" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="14"></rect><rect height="7" rx="1" width="7" x="3" y="14"></rect></svg>
<span className="text-sm text-white/80">Canvas</span>
</div>
<div className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2">
<svg className="lucide lucide-book-open w-[18px] h-[18px] text-white/70" data-lucide="book-open" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 7v14"></path><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path></svg>
<span className="text-sm text-white/80">Moodle</span>
</div>
<div className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2">
<svg className="lucide lucide-columns-3 w-[18px] h-[18px] text-white/70" data-lucide="columns-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M9 3v18"></path><path d="M15 3v18"></path></svg>
<span className="text-sm text-white/80">Blackboard</span>
</div>
<div className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2">
<svg className="lucide lucide-users w-[18px] h-[18px] text-white/70" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<span className="text-sm text-white/80">Schoology</span>
</div>
<div className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2">
<svg className="lucide lucide-id-card w-[18px] h-[18px] text-white/70" data-lucide="id-card" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 10h2"></path><path d="M16 14h2"></path><path d="M6.17 15a3 3 0 0 1 5.66 0"></path><circle cx="9" cy="11" r="2"></circle><rect height="14" rx="2" width="20" x="2" y="5"></rect></svg>
<span className="text-sm text-white/80">PowerSchool</span>
</div>
<div className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2">
<svg className="lucide lucide-shield w-[18px] h-[18px] text-white/70" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
<span className="text-sm text-white/80">SSO (SAML/OIDC)</span>
</div>
</div>
</div>
</div>
</section>

<section className="relative sm:pt-24 md:pt-28 pb-20">
<div className="pointer-events-none absolute inset-0 -z-10">
<div className="absolute -left-1/4 -top-1/4 w-[42rem] h-[42rem] rounded-full bg-gradient-to-br from-blue-600/15 via-sky-500/10 to-transparent blur-3xl"></div>
<div className="absolute -right-1/4 -bottom-1/3 w-[40rem] h-[40rem] rounded-full bg-gradient-to-tl from-green-600/15 via-blue-500/10 to-transparent blur-3xl"></div>
</div>
<div className="max-w-7xl mx-auto px-6">
<div className="text-center">
<div className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-3 py-1.5">
<span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-indigo-600 ring-1 ring-white/20">
<svg className="lucide lucide-sparkles w-3.5 h-3.5 text-white" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</span>
<span className="text-xs font-medium text-white/80">The Advisors</span>
</div>
<h2 className="mt-6 text-4xl sm:text-6xl md:text-7xl leading-[1.06] tracking-tighter font-manrope">
              Three AI agents. One unified experience.
            </h2>
<p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg text-white/70">
              Deploy targeted advisors inside your LMS—role‑aware, privacy‑safe, and measurable from day one.
            </p>
</div>

<div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-10">

<div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
<div className="pointer-events-none absolute inset-0 opacity-[0.08]" style={{backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.9) 1px, transparent 1px)', backgroundSize: '14px 14px'}}></div>
<div className="relative flex w-10 h-10 ring-1 ring-white/20 bg-slate-50/5 rounded-full shadow-lg items-center justify-center">
<svg className="lucide lucide-compass w-5 h-5" data-lucide="compass" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
<h3 className="sm:text-3xl text-2xl font-semibold tracking-tight font-manrope mt-5 relative">Student Success Agent</h3>
<p className="relative mt-2 text-white/70 text-sm sm:text-base">For students</p>
<ul className="relative mt-4 space-y-2 text-sm text-white/75">
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-indigo-300" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Pathway and course planning</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-indigo-300" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> FAFSA and aid guidance</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-indigo-300" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Skills to jobs mapping</li>
</ul>
<div className="relative mt-5 rounded-xl border border-white/10 bg-black/30 p-4">
<div className="flex items-center gap-2 text-xs text-white/70">
<svg className="lucide lucide-message-circle w-4 h-4 text-white/60" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>
                  In‑LMS chat
                </div>
<div className="mt-3 rounded-lg bg-white/5 border border-white/10 p-3">
<div className="flex items-start gap-2">
<svg className="lucide lucide-user-round w-4 h-4 text-white/60 mt-0.5" data-lucide="user-round" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="8" r="5"></circle><path d="M20 21a8 8 0 0 0-16 0"></path></svg>
<p className="text-sm text-white/80">Which electives best support a data science pathway?</p>
</div>
<div className="mt-3 flex items-start gap-2">
<span className="inline-flex w-6 h-6 items-center justify-center rounded-full bg-indigo-600/80 ring-1 ring-white/30">
<svg className="lucide lucide-bot w-4 h-4 text-white" data-lucide="bot" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>
</span>
<p className="text-sm text-white/90">Based on your major plan and prerequisites, consider Linear Algebra next term and choose “Intro to Python” as an elective to unlock ML courses by spring.</p>
</div>
</div>
</div>
</div>

<div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
<div className="pointer-events-none absolute inset-0 opacity-[0.08]" style={{backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.9) 1px, transparent 1px)', backgroundSize: '14px 14px'}}></div>
<div className="relative flex w-10 h-10 ring-1 ring-white/20 bg-slate-50/5 rounded-full shadow-lg items-center justify-center">
<svg className="w-[20px] h-[20px]" data-icon-replaced="true" data-lucide="handshake" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(255, 255, 255)', width: '20px', height: '20px'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m11 17 2 2a1 1 0 1 0 3-3"></path><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"></path><path d="m21 3 1 11h-2"></path><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"></path><path d="M3 4h8"></path></svg>
</div>
<h3 className="sm:text-3xl text-2xl font-semibold tracking-tight font-manrope mt-5 relative" style={{}}>College to Career Agent</h3>
<p className="relative mt-2 text-white/70 text-sm sm:text-base">For teachers &amp; counselors</p>
<ul className="relative mt-4 space-y-2 text-sm text-white/75">
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-indigo-300" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Early alerts &amp; interventions</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-indigo-300" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Differentiated content suggestions</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-indigo-300" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Parent outreach drafts</li>
</ul>

<div className="relative mt-5 rounded-xl border border-white/10 bg-black/30 p-4">
<div className="flex items-center gap-2 text-xs text-white/70">
<svg className="lucide lucide-list-checks w-4 h-4 text-white/60" data-lucide="list-checks" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13 5h8"></path><path d="M13 12h8"></path><path d="M13 19h8"></path><path d="m3 17 2 2 4-4"></path><path d="m3 7 2 2 4-4"></path></svg>
                  Key features
                </div>
<div className="mt-3 space-y-3">

<div className="">
<div className="flex items-center justify-between text-xs">
<div className="flex items-center gap-2 text-white/80">
<svg className="lucide lucide-link-2 w-4 h-4 text-indigo-300" data-lucide="link-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 17H7A5 5 0 0 1 7 7h2"></path><path d="M15 7h2a5 5 0 1 1 0 10h-2"></path><line x1="8" x2="16" y1="12" y2="12"></line></svg>
<span>Curriculum Workforce Alignment</span>
</div>
<span className="text-white/60">82%</span>
</div>
<div className="mt-2 h-1.5 rounded-full bg-white/5 ring-1 ring-white/10 overflow-hidden">
<div className="h-full rounded-full bg-gradient-to-r from-indigo-400/40 to-blue-400/40" style={{width: '82%'}}></div>
</div>
</div>
<div className="h-px bg-white/10"></div>

<div className="">
<div className="flex items-center justify-between text-xs">
<div className="flex items-center gap-2 text-white/80">
<svg className="lucide lucide-clipboard-check w-4 h-4 text-indigo-300" data-lucide="clipboard-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="4" rx="1" ry="1" width="8" x="8" y="2"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><path d="m9 14 2 2 4-4"></path></svg>
<span>Student Core Competency Assessment</span>
</div>
<span className="text-white/60">76%</span>
</div>
<div className="mt-2 h-1.5 rounded-full bg-white/5 ring-1 ring-white/10 overflow-hidden">
<div className="h-full rounded-full bg-gradient-to-r from-indigo-400/40 to-blue-400/40" style={{width: '76%'}}></div>
</div>
</div>
<div className="h-px bg-white/10"></div>

<div>
<div className="flex items-center justify-between text-xs">
<div className="flex items-center gap-2 text-white/80">
<svg className="lucide lucide-scan-search w-4 h-4 text-indigo-300" data-lucide="scan-search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 7V5a2 2 0 0 1 2-2h2"></path><path d="M17 3h2a2 2 0 0 1 2 2v2"></path><path d="M21 17v2a2 2 0 0 1-2 2h-2"></path><path d="M7 21H5a2 2 0 0 1-2-2v-2"></path><circle cx="12" cy="12" r="3"></circle><path d="m16 16-1.9-1.9"></path></svg>
<span>Skills Gap Analysis</span>
</div>
<span className="text-white/60">64%</span>
</div>
<div className="mt-2 h-1.5 rounded-full bg-white/5 ring-1 ring-white/10 overflow-hidden">
<div className="h-full rounded-full bg-gradient-to-r from-indigo-400/40 to-blue400/40" style={{width: '64%'}}></div>
</div>
</div>
</div>
</div>
</div>

<div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
<div className="pointer-events-none absolute inset-0 opacity-[0.08]" style={{backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.9) 1px, transparent 1px)', backgroundSize: '14px 14px'}}></div>
<div className="relative flex w-10 h-10 ring-1 ring-white/20 bg-slate-50/5 rounded-full shadow-lg items-center justify-center">
<svg className="lucide lucide-briefcase-business w-5 h-5" data-lucide="briefcase-business" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 12h.01"></path><path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"></path><path d="M22 13a18.15 18.15 0 0 1-20 0"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></svg>
</div>
<h3 className="sm:text-3xl text-2xl font-semibold tracking-tight font-manrope mt-5 relative" style={{}}>Workforce Career Agent</h3>
<p className="relative mt-2 text-white/70 text-sm sm:text-base">For workforce partners</p>
<ul className="relative mt-4 space-y-2 text-sm text-white/75">
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-indigo-300" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Talent matching by skills</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-indigo-300" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Job &amp; internship pipelines</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-indigo-300" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Regional labor insights</li>
</ul>
<div className="relative mt-5 rounded-xl border border-white/10 bg-black/30 p-4">
<div className="flex items-center gap-2 text-xs text-white/70">
<svg className="lucide lucide-sparkle w-4 h-4 text-white/60" data-lucide="sparkle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path></svg>
                  Skills alignment
                </div>
<div className="mt-3 grid grid-cols-3 gap-2 text-[11px]">
<span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/80">Python</span>
<span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/80">CNC</span>
<span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/80">Clinical</span>
<span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/70">Welding</span>
<span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/70">CAD</span>
<span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/70">Networking</span>
</div>
</div>
</div>
</div>

<div className="mt-10 sm:mt-12 border-t border-white/10 pt-8">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="flex items-start gap-3">
<span className="inline-flex w-9 h-9 ring-1 ring-white/15 items-center justify-center bg-white/5 rounded-full">
<svg className="lucide lucide-puzzle w-[18px] h-[18px]" data-lucide="puzzle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15.39 4.39a1 1 0 0 0 1.68-.474 2.5 2.5 0 1 1 3.014 3.015 1 1 0 0 0-.474 1.68l1.683 1.682a2.414 2.414 0 0 1 0 3.414L19.61 15.39a1 1 0 0 1-1.68-.474 2.5 2.5 0 1 0-3.014 3.015 1 1 0 0 1 .474 1.68l-1.683 1.682a2.414 2.414 0 0 1-3.414 0L8.61 19.61a1 1 0 0 0-1.68.474 2.5 2.5 0 1 1-3.014-3.015 1 1 0 0 0 .474-1.68l-1.683-1.682a2.414 2.414 0 0 1 0-3.414L4.39 8.61a1 1 0 0 1 1.68.474 2.5 2.5 0 1 0 3.014-3.015 1 1 0 0 1-.474-1.68l1.683-1.682a2.414 2.414 0 0 1 3.414 0z"></path></svg>
</span>
<div>
<p className="text-sm font-medium text-white/90">LMS Embedded</p>
<p className="text-sm text-white/60 mt-1">Appears where learners already work.</p>
</div>
</div>
<div className="flex items-start gap-3">
<span className="inline-flex w-9 h-9 ring-1 ring-white/15 items-center justify-center bg-white/5 rounded-full">
<svg className="lucide lucide-lock w-[18px] h-[18px]" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
</span>
<div className="">
<p className="text-sm font-medium text-white/90">Privacy by Design</p>
<p className="text-sm text-white/60 mt-1">FERPA‑aligned data handling.</p>
</div>
</div>
<div className="flex items-start gap-3">
<span className="inline-flex w-9 h-9 ring-1 ring-white/15 items-center justify-center bg-white/5 rounded-full">
<svg className="lucide lucide-bar-chart-3 w-[18px] h-[18px]" data-lucide="bar-chart-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>
</span>
<div className="">
<p className="text-sm font-medium text-white/90">Measurable Impact</p>
<p className="text-sm text-white/60 mt-1">Engagement and outcome dashboards.</p>
</div>
</div>
<div className="flex items-start gap-3">
<span className="inline-flex w-9 h-9 ring-1 ring-white/15 items-center justify-center bg-white/5 rounded-full">
<svg className="lucide lucide-settings-2 w-[18px] h-[18px]" data-lucide="settings-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 17H5"></path><path d="M19 7h-9"></path><circle cx="17" cy="17" r="3"></circle><circle cx="7" cy="7" r="3"></circle></svg>
</span>
<div className="">
<p className="text-sm font-medium text-white/90">Admin Controls</p>
<p className="text-sm text-white/60 mt-1">Policies, prompts, and guardrails.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative sm:pt-24 md:pt-28 pb-20">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center">
<div className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-3 py-1.5">
<span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-indigo-600 ring-1 ring-white/20">
<svg className="lucide lucide-plug w-3.5 h-3.5 text-white" data-lucide="plug" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22v-5"></path><path d="M9 8V2"></path><path d="M15 8V2"></path><path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z"></path></svg>
</span>
<span className="text-xs font-medium text-white/80">Integrations</span>
</div>
<h2 className="mt-6 text-4xl sm:text-6xl md:text-7xl leading-[1.06] tracking-tighter font-manrope">
              Connect in hours. Not months.
            </h2>
<p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg text-white/70">
              Sync rosters and grades, respect permissions, and streamline sign‑on with SSO.
            </p>
</div>
<div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">

<article className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6">
<div className="flex items-start justify-between">
<div className="relative flex w-10 h-10 ring-1 ring-white/20 bg-slate-50/5 rounded-full shadow-lg items-center justify-center">
<svg className="lucide lucide-key-round w-5 h-5" data-lucide="key-round" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path><circle cx="16.5" cy="7.5" fill="currentColor" r=".5"></circle></svg>
</div>
<span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-white/5 ring-1 ring-white/10 text-white/70">1</span>
</div>
<div className="mt-4">
<h3 className="text-2xl sm:text-3xl font-semibold tracking-tight font-manrope">Connect</h3>
<p className="mt-3 text-sm sm:text-base text-white/70">Securely connect LMS, SIS, and SSO (SAML/OIDC). Select data scopes by role.</p>
</div>
<div className="mt-5 flex flex-wrap gap-2">
<span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1.5 text-xs text-white/80 ring-1 ring-white/10"><svg className="lucide lucide-shield-check w-4 h-4 text-indigo-300" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg> Least privilege</span>
<span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1.5 text-xs text-white/80 ring-1 ring-white/10"><svg className="lucide lucide-file-lock-2 w-4 h-4 text-indigo-300" data-lucide="file-lock-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v1"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><rect height="5" rx="1" width="8" x="2" y="13"></rect><path d="M8 13v-2a2 2 0 1 0-4 0v2"></path></svg> Consent</span>
</div>
</article>

<article className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6">
<div className="flex items-start justify-between">
<div className="relative flex w-10 h-10 ring-1 ring-white/20 bg-slate-50/5 rounded-full shadow-lg items-center justify-center">
<svg className="lucide lucide-bot-message-square w-5 h-5" data-lucide="bot-message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6V2H8"></path><path d="M15 11v2"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="M20 16a2 2 0 0 1-2 2H8.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 4 20.286V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2z"></path><path d="M9 11v2"></path></svg>
</div>
<span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-white/5 ring-1 ring-white/10 text-white/70">2</span>
</div>
<div className="mt-4">
<h3 className="text-2xl sm:text-3xl font-semibold tracking-tight font-manrope">Deploy</h3>
<p className="mt-3 text-sm sm:text-base text-white/70">Place advisors in courses, modules, or dashboards. Configure prompts and guardrails.</p>
</div>
<div className="mt-5 flex items-center gap-2 text-xs text-white/80">
<svg className="lucide lucide-layout-dashboard w-4 h-4 text-indigo-300" data-lucide="layout-dashboard" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="9" rx="1" width="7" x="3" y="3"></rect><rect height="5" rx="1" width="7" x="14" y="3"></rect><rect height="9" rx="1" width="7" x="14" y="12"></rect><rect height="5" rx="1" width="7" x="3" y="16"></rect></svg> Widgets
                <span className="w-px h-4 bg-white/10"></span>
<svg className="lucide lucide-message-square w-4 h-4 text-indigo-300" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg> Chat
                <span className="w-px h-4 bg-white/10"></span>
<svg className="lucide lucide-badge-check w-4 h-4 text-indigo-300" data-lucide="badge-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg> Role‑aware
              </div>
</article>

<article className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6">
<div className="flex items-start justify-between">
<div className="relative flex w-10 h-10 ring-1 ring-white/20 bg-slate-50/5 rounded-full shadow-lg items-center justify-center">
<svg className="lucide lucide-activity w-5 h-5" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
</div>
<span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-white/5 ring-1 ring-white/10 text-white/70">3</span>
</div>
<div className="mt-4">
<h3 className="text-2xl sm:text-3xl font-semibold tracking-tight font-manrope">Measure</h3>
<p className="mt-3 text-sm sm:text-base text-white/70">Track engagement, completion, and persistence. Export reports or stream to BI.</p>
</div>
<div className="mt-5 grid grid-cols-3 gap-3 text-center">
<div className="rounded-lg border border-white/10 bg-white/5 p-3">
<p className="text-lg font-semibold tracking-tight">+22%</p>
<p className="text-[11px] text-white/60 mt-1">Course completion</p>
</div>
<div className="rounded-lg border border-white/10 bg-white/5 p-3">
<p className="text-lg font-semibold tracking-tight">‑18%</p>
<p className="text-[11px] text-white/60 mt-1">D/F/W rates</p>
</div>
<div className="rounded-lg border border-white/10 bg-white/5 p-3">
<p className="text-lg font-semibold tracking-tight">+31%</p>
<p className="text-[11px] text-white/60 mt-1">Advising reach</p>
</div>
</div>
</article>
</div>

<div className="mt-10 sm:mt-12 flex flex-wrap items-center justify-center gap-2">
<span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1.5 text-xs sm:text-sm text-white/80 ring-1 ring-white/10"><svg className="lucide lucide-database w-4 h-4 text-indigo-300" data-lucide="database" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg> SIS Sync</span>
<span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1.5 text-xs sm:text-sm text-white/80 ring-1 ring-white/10"><svg className="lucide lucide-fingerprint w-4 h-4 text-indigo-300" data-lucide="fingerprint" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4"></path><path d="M14 13.12c0 2.38 0 6.38-1 8.88"></path><path d="M17.29 21.02c.12-.6.43-2.3.5-3.02"></path><path d="M2 12a10 10 0 0 1 18-6"></path><path d="M2 16h.01"></path><path d="M21.8 16c.2-2 .131-5.354 0-6"></path><path d="M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2"></path><path d="M8.65 22c.21-.66.45-1.32.57-2"></path><path d="M9 6.8a6 6 0 0 1 9 5.2v2"></path></svg> SSO</span>
<span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1.5 text-xs sm:text-sm text-white/80 ring-1 ring-white/10"><svg className="lucide lucide-server-cog w-4 h-4 text-indigo-300" data-lucide="server-cog" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m10.852 14.772-.383.923"></path><path d="M13.148 14.772a3 3 0 1 0-2.296-5.544l-.383-.923"></path><path d="m13.148 9.228.383-.923"></path><path d="m13.53 15.696-.382-.924a3 3 0 1 1-2.296-5.544"></path><path d="m14.772 10.852.923-.383"></path><path d="m14.772 13.148.923.383"></path><path d="M4.5 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-.5"></path><path d="M4.5 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-.5"></path><path d="M6 18h.01"></path><path d="M6 6h.01"></path><path d="m9.228 10.852-.923-.383"></path><path d="m9.228 13.148-.923.383"></path></svg> LTI / APIs</span>
<span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1.5 text-xs sm:text-sm text-white/80 ring-1 ring-white/10"><svg className="lucide lucide-file-text w-4 h-4 text-indigo-300" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg> AI Rubrics</span>
<span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1.5 text-xs sm:text-sm text-white/80 ring-1 ring-white/10"><svg className="lucide lucide-scan-search w-4 h-4 text-indigo-300" data-lucide="scan-search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 7V5a2 2 0 0 1 2-2h2"></path><path d="M17 3h2a2 2 0 0 1 2 2v2"></path><path d="M21 17v2a2 2 0 0 1-2 2h-2"></path><path d="M7 21H5a2 2 0 0 1-2-2v-2"></path><circle cx="12" cy="12" r="3"></circle><path d="m16 16-1.9-1.9"></path></svg> Content Alignment</span>
</div>
</div>
</section>

<section className="relative sm:pt-24 md:pt-28 pb-20">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center">
<div className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-3 py-1.5">
<span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-indigo-600 ring-1 ring-white/20">
<svg className="lucide lucide-shield-check w-3.5 h-3.5 text-white" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</span>
<span className="text-xs font-medium text-white/80">Security &amp; Compliance</span>
</div>
<h2 className="mt-6 text-4xl sm:text-6xl md:text-7xl leading-[1.06] tracking-tighter font-manrope">
              Built for education. Secure by default.
            </h2>
<p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg text-white/70">
              Data minimization, regional hosting, access controls, and detailed audit trails—so you can deploy with confidence.
            </p>
</div>
<div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="rounded-3xl border border-white/10 bg-white/5 p-6">
<div className="flex items-center gap-3">
<svg className="lucide lucide-file-lock-2 w-5 h-5" data-lucide="file-lock-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v1"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><rect height="5" rx="1" width="8" x="2" y="13"></rect><path d="M8 13v-2a2 2 0 1 0-4 0v2"></path></svg>
<h3 className="text-lg font-semibold tracking-tight">FERPA‑Aligned</h3>
</div>
<p className="mt-3 text-sm text-white/70">Student data protected with least‑privilege access and purpose limitation.</p>
</div>
<div className="rounded-3xl border border-white/10 bg-white/5 p-6">
<div className="flex items-center gap-3">
<svg className="lucide lucide-shield w-5 h-5" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
<h3 className="text-lg font-semibold tracking-tight">SOC 2 Practices</h3>
</div>
<p className="mt-3 text-sm text-white/70">Operational controls for security, availability, and confidentiality.</p>
</div>
<div className="rounded-3xl border border-white/10 bg-white/5 p-6">
<div className="flex items-center gap-3">
<svg className="lucide lucide-earth-lock w-5 h-5" data-lucide="earth-lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 3.34V5a3 3 0 0 0 3 3"></path><path d="M11 21.95V18a2 2 0 0 0-2-2 2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"></path><path d="M21.54 15H17a2 2 0 0 0-2 2v4.54"></path><path d="M12 2a10 10 0 1 0 9.54 13"></path><path d="M20 6V4a2 2 0 1 0-4 0v2"></path><rect height="5" rx="1" width="8" x="14" y="6"></rect></svg>
<h3 className="text-lg font-semibold tracking-tight">Regional Hosting</h3>
</div>
<p className="mt-3 text-sm text-white/70">Choose US/EU data residency with encryption in transit and at rest.</p>
</div>
<div className="rounded-3xl border border-white/10 bg-white/5 p-6">
<div className="flex items-center gap-3">
<svg className="lucide lucide-clipboard-list w-5 h-5" data-lucide="clipboard-list" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="4" rx="1" ry="1" width="8" x="8" y="2"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><path d="M12 11h4"></path><path d="M12 16h4"></path><path d="M8 11h.01"></path><path d="M8 16h.01"></path></svg>
<h3 className="text-lg font-semibold tracking-tight">Audit &amp; Controls</h3>
</div>
<p className="mt-3 text-sm text-white/70">Comprehensive logging, admin policies, and content safeguards.</p>
</div>
</div>

<div className="mt-12 text-center">
<a className="inline-flex items-center gap-2 text-sm font-medium text-white bg-gradient-to-l from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700 rounded-full px-5 py-3 shadow-md shadow-indigo-500/20" href="#">
              Request Access
              <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</section>
</main>

<section className="relative border-t border-white/5 pt-14 pb-8">
<div className="pointer-events-none absolute inset-0 -z-10">
<div className="absolute left-1/2 -translate-x-1/2 -top-10 w-[90vw] max-w-6xl h-56 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.35)_0%,transparent_65%)]"></div>
</div>
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-10">

<div>
<div className="flex items-center gap-3">
<svg className="lucide lucide-graduation-cap w-[22px] h-[22px] text-white/90" data-lucide="graduation-cap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path><path d="M22 10v6"></path><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path></svg>
<span className="text-xl font-semibold tracking-tight font-manrope">Nexus Edu</span>
</div>
<p className="mt-4 text-sm text-white/70">
              AI advisors that meet learners where they are—inside your LMS.
            </p>
</div>

<div>
<h4 className="text-lg sm:text-xl font-semibold tracking-tight">Product</h4>
<ul className="mt-4 space-y-2 text-sm">
<li><a className="text-white/70 hover:text-white transition-colors" href="#">Agents</a></li>
<li><a className="text-white/70 hover:text-white transition-colors" href="#">Integrations</a></li>
<li><a className="text-white/70 hover:text-white transition-colors" href="#">Security</a></li>
<li><a className="text-white/70 hover:text-white transition-colors" href="#">Pricing</a></li>
<li><a className="text-white/70 hover:text-white transition-colors" href="#">Docs</a></li>
</ul>
</div>

<div>
<h4 className="text-lg sm:text-xl font-semibold tracking-tight">Company</h4>
<ul className="mt-4 space-y-2 text-sm">
<li><a className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors" href="#"><svg className="lucide lucide-newspaper w-4 h-4 text-white/50" data-lucide="newspaper" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 18h-5"></path><path d="M18 14h-8"></path><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-4 0v-9a2 2 0 0 1 2-2h2"></path><rect height="4" rx="1" width="8" x="10" y="6"></rect></svg>Blog</a></li>
<li><a className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors" href="#"><svg className="lucide lucide-users w-4 h-4 text-white/50" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>Partners</a></li>
<li><a className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors" href="#"><svg className="lucide lucide-life-buoy w-4 h-4 text-white/50" data-lucide="life-buoy" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m4.93 4.93 4.24 4.24"></path><path d="m14.83 9.17 4.24-4.24"></path><path d="m14.83 14.83 4.24 4.24"></path><path d="m9.17 14.83-4.24 4.24"></path><circle cx="12" cy="12" r="4"></circle></svg>Support</a></li>
<li><a className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors" href="#"><svg className="lucide lucide-briefcase w-4 h-4 text-white/50" data-lucide="briefcase" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></svg>Careers</a></li>
</ul>
</div>

<div>
<h4 className="text-lg sm:text-xl font-semibold tracking-tight">Subscribe</h4>
<form action="#" className="mt-4" method="post">
<label className="sr-only" htmlFor="newsletter-email">Email address</label>
<div className="flex items-center gap-2">
<div className="relative flex-1">
<input className="w-full rounded-full bg-white/[0.04] text-white placeholder-white/50 ring-1 ring-white/15 focus:ring-2 focus:ring-violet-500/60 outline-none px-4 py-2.5 text-sm transition" id="newsletter-email" placeholder="Enter your email..." required="" type="email"/>
<span className="pointer-events-none absolute inset-0 rounded-full shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)]"></span>
</div>
<a className="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-white bg-gradient-to-l from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700 rounded-full px-4 py-2 shadow-md shadow-indigo-500/20" href="#">
                  Subscribe
                  <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<p className="mt-2 text-xs text-white/50">No spam. Unsubscribe any time.</p>
</form>
</div>
</div>

<div className="mt-10 border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
<p className="text-white/60">© 2025 Nexus Edu</p>
<div className="flex items-center gap-6">
<a className="text-white/60 hover:text-white transition-colors" href="#">Terms</a>
<span className="hidden sm:inline-block w-px h-4 bg-white/10"></span>
<a className="text-white/60 hover:text-white transition-colors" href="#">Privacy</a>
</div>
</div>
</div>
<span className="hidden md:block absolute right-6 bottom-6 h-4 w-16 rounded-full border border-white/10 bg-white/5"></span>
</section>




    </>
  );
}
