import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // Icons
      lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });

      // Year
      document.getElementById('year').textContent = new Date().getFullYear();

      // Copy email
      const copyBtn = document.getElementById('copyEmail');
      if (copyBtn) {
        copyBtn.addEventListener('click', async () => {
          const email = 'careers@mark-ai.com';
          try {
            await navigator.clipboard.writeText(email);
            copyBtn.innerHTML = '<i data-lucide="check" class="h-4 w-4"></i>Copied';
            lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
            setTimeout(() => {
              copyBtn.innerHTML = '<i data-lucide="copy" class="h-4 w-4"></i>Copy address';
              lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
            }, 2000);
          } catch {
            window.prompt('Copy email address:', email);
          }
        });
      }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-[#0B0D12]/70">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">
<a className="inline-flex items-center gap-2 group" href="/">
<div className="h-7 w-7 rounded-md bg-white/5 ring-1 ring-white/10 grid place-content-center">
<span className="text-xs font-semibold tracking-tight">M</span>
</div>
<span className="text-base font-semibold tracking-tight">MARK</span>
</a>
<nav className="hidden md:flex items-center gap-8">
<a className="text-sm text-white/70 hover:text-white transition-colors" href="/product">Product</a>
<a className="text-sm text-white/70 hover:text-white transition-colors" href="/solutions">Solutions</a>
<a className="text-sm text-white/70 hover:text-white transition-colors" href="/pricing">Pricing</a>
<a className="text-sm text-white/70 hover:text-white transition-colors" href="/docs">Docs</a>
<a className="text-sm text-white/70 hover:text-white transition-colors" href="/company">Company</a>
<span className="inline-flex items-center rounded-full border border-white/10 px-3 py-1.5 text-sm text-white/80 bg-white/[0.03]">Careers</span>
</nav>
<div className="flex items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-md bg-white text-[#0B0D12] px-3.5 py-2 text-sm font-medium hover:bg-white/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition" href="#roles">
<i className="h-4 w-4" data-lucide="briefcase"></i>
              Open roles
            </a>
<button aria-label="Open menu" className="md:hidden inline-flex items-center justify-center rounded-md border border-white/10 bg-white/[0.03] p-2 hover:bg-white/[0.06] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
<i className="h-5 w-5" data-lucide="menu"></i>
</button>
</div>
</div>
</div>
<div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
</header>

<section className="relative overflow-hidden">
<div className="absolute inset-0 -z-10">
<div className="absolute inset-0 opacity-[0.15]" style={{background: 'radial-gradient(1200px 600px at 50% -200px, #7C7CFF 0%, transparent 60%), radial-gradient(800px 400px at 90% 10%, #1EE0A1 0%, transparent 50%)'}}></div>
<div className="absolute inset-0" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&amp', backgroundSize: 'cover', backgroundPosition: 'center', opacity: '0.07'}}></div>
</div>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 pb-16">
<div className="grid lg:grid-cols-12 gap-10 items-center">
<div className="lg:col-span-7">
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/70 mb-4">
<i className="h-3.5 w-3.5" data-lucide="sparkles"></i>
              We’re hiring across multiple teams
            </div>
<h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white">Build the future with Mark AI</h1>
<p className="mt-5 text-base sm:text-lg text-white/70 max-w-2xl">
              [Replace with your existing hero copy from the current careers page. Keep message consistent; we’ve elevated the presentation.]
            </p>
<div className="mt-8 flex flex-col sm:flex-row gap-3">
<a className="inline-flex items-center justify-center gap-2 rounded-md bg-white text-[#0B0D12] px-4 py-2.5 text-sm font-medium hover:bg-white/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition" href="#roles">
<i className="h-4 w-4" data-lucide="briefcase"></i>
                See open roles
              </a>
<a className="inline-flex items-center justify-center gap-2 rounded-md border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm font-medium text-white hover:border-white/20 hover:bg-white/[0.06] transition" href="#culture">
<i className="h-4 w-4" data-lucide="heart"></i>
                Explore our culture
              </a>
</div>
<div className="mt-8 flex items-center gap-6 text-white/60">
<div className="flex items-center gap-2">
<i className="h-4 w-4" data-lucide="globe"></i>
<span className="text-sm">[Remote / Location per your current page]</span>
</div>
<div className="flex items-center gap-2">
<i className="h-4 w-4" data-lucide="clock"></i>
<span className="text-sm">[Hiring timeline / Start date]</span>
</div>
</div>
</div>
<div className="lg:col-span-5">
<div className="rounded-xl border border-white/10 bg-white/[0.04] p-5 sm:p-6">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-lg bg-white/[0.06] ring-1 ring-white/10 grid place-content-center">
<i className="h-5 w-5" data-lucide="user-plus"></i>
</div>
<div>
<p className="text-sm text-white/70">Apply directly</p>
<p className="text-base font-medium tracking-tight text-white">careers@mark-ai.com</p>
</div>
</div>
<div className="mt-4 text-sm text-white/70">
                [Replace with your application instructions from the current page.]
              </div>
<div className="mt-4 flex items-center gap-2">
<a className="inline-flex items-center gap-2 rounded-md bg-white text-[#0B0D12] px-3.5 py-2 text-sm font-medium hover:bg-white/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition" href="mailto:careers@mark-ai.com?subject=Application%20-%20[Role]">
<i className="h-4 w-4" data-lucide="send"></i>
                  Email your resume
                </a>
<button className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.03] px-3.5 py-2 text-sm font-medium hover:border-white/20 hover:bg-white/[0.06] transition" id="copyEmail">
<i className="h-4 w-4" data-lucide="copy"></i>
                  Copy address
                </button>
</div>
<p className="mt-3 text-xs text-white/50">We read every application. No recruiters please.</p>
</div>
</div>
</div>
</div>
<div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
</section>

<section className="py-14 sm:py-20" id="mission">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid md:grid-cols-12 gap-10">
<div className="md:col-span-7">
<h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white">Our mission</h2>
<p className="mt-4 text-base text-white/70 max-w-2xl">
              [Replace with the mission or overview text from your current careers page. Keep wording the same; design only is updated.]
            </p>
</div>
<div className="md:col-span-5">
<div className="rounded-lg border border-white/10 bg-white/[0.03] p-5">
<div className="flex items-start gap-3">
<div className="h-9 w-9 rounded-md bg-white/[0.06] ring-1 ring-white/10 grid place-content-center">
<i className="h-4.5 w-4.5" data-lucide="target"></i>
</div>
<div>
<p className="text-sm font-medium text-white tracking-tight">Impact</p>
<p className="mt-1 text-sm text-white/70">[Insert your “why now” / impact statement.]</p>
</div>
</div>
<div className="mt-4 flex items-start gap-3">
<div className="h-9 w-9 rounded-md bg-white/[0.06] ring-1 ring-white/10 grid place-content-center">
<i className="h-4.5 w-4.5" data-lucide="shield-check"></i>
</div>
<div>
<p className="text-sm font-medium text-white tracking-tight">Values</p>
<p className="mt-1 text-sm text-white/70">[Insert value highlights exactly as listed on current page.]</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-14 sm:py-20" id="benefits">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex items-end justify-between gap-6">
<div>
<h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white">Benefits &amp; perks</h2>
<p className="mt-3 text-white/70">[Replace with the same benefits list from your current page.]</p>
</div>
</div>
<div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

<div className="rounded-lg border border-white/10 bg-white/[0.03] p-5 hover:bg-white/[0.05] transition">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-md bg-white/[0.06] ring-1 ring-white/10 grid place-content-center">
<i className="h-4.5 w-4.5" data-lucide="home"></i>
</div>
<p className="text-sm font-medium text-white tracking-tight">[Remote-first / Hybrid]</p>
</div>
<p className="mt-2 text-sm text-white/70">[Exact benefit description from current page.]</p>
</div>
<div className="rounded-lg border border-white/10 bg-white/[0.03] p-5 hover:bg-white/[0.05] transition">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-md bg-white/[0.06] ring-1 ring-white/10 grid place-content-center">
<i className="h-4.5 w-4.5" data-lucide="heart-pulse"></i>
</div>
<p className="text-sm font-medium text-white tracking-tight">[Health &amp; wellness]</p>
</div>
<p className="mt-2 text-sm text-white/70">[Exact benefit description from current page.]</p>
</div>
<div className="rounded-lg border border-white/10 bg-white/[0.03] p-5 hover:bg-white/[0.05] transition">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-md bg-white/[0.06] ring-1 ring-white/10 grid place-content-center">
<i className="h-4.5 w-4.5" data-lucide="book-open"></i>
</div>
<p className="text-sm font-medium text-white tracking-tight">[Learning budget]</p>
</div>
<p className="mt-2 text-sm text-white/70">[Exact benefit description from current page.]</p>
</div>
<div className="rounded-lg border border-white/10 bg-white/[0.03] p-5 hover:bg-white/[0.05] transition">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-md bg-white/[0.06] ring-1 ring-white/10 grid place-content-center">
<i className="h-4.5 w-4.5" data-lucide="plane"></i>
</div>
<p className="text-sm font-medium text-white tracking-tight">[Time off]</p>
</div>
<p className="mt-2 text-sm text-white/70">[Exact benefit description from current page.]</p>
</div>
<div className="rounded-lg border border-white/10 bg-white/[0.03] p-5 hover:bg-white/[0.05] transition">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-md bg-white/[0.06] ring-1 ring-white/10 grid place-content-center">
<i className="h-4.5 w-4.5" data-lucide="coins"></i>
</div>
<p className="text-sm font-medium text-white tracking-tight">[Compensation / Equity]</p>
</div>
<p className="mt-2 text-sm text-white/70">[Exact benefit description from current page.]</p>
</div>
<div className="rounded-lg border border-white/10 bg-white/[0.03] p-5 hover:bg-white/[0.05] transition">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-md bg-white/[0.06] ring-1 ring-white/10 grid place-content-center">
<i className="h-4.5 w-4.5" data-lucide="laptop"></i>
</div>
<p className="text-sm font-medium text-white tracking-tight">[Tools &amp; setup]</p>
</div>
<p className="mt-2 text-sm text-white/70">[Exact benefit description from current page.]</p>
</div>
</div>
</div>
</section>

<section className="py-14 sm:py-20" id="roles">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex items-end justify-between gap-6">
<div>
<h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white">Open roles</h2>
<p className="mt-3 text-white/70">[Use the exact openings and descriptions from your current page.]</p>
</div>
<a className="hidden sm:inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.03] px-3.5 py-2 text-sm font-medium hover:border-white/20 hover:bg-white/[0.06] transition" href="mailto:careers@mark-ai.com?subject=General%20Application">
<i className="h-4 w-4" data-lucide="inbox"></i>
            Send a general application
          </a>
</div>
<div className="mt-8 space-y-4">

<div className="rounded-lg border border-white/10 bg-white/[0.03] p-5 hover:bg-white/[0.05] transition">
<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
<div className="min-w-0">
<div className="flex items-center gap-2">
<span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-2 py-0.5 text-xs text-white/70">
<i className="h-3.5 w-3.5" data-lucide="git-branch"></i>
                    [Team]
                  </span>
</div>
<h3 className="mt-2 text-lg sm:text-xl font-semibold tracking-tight text-white truncate">[Job Title]</h3>
<div className="mt-1 flex flex-wrap items-center gap-3 text-sm text-white/60">
<span className="inline-flex items-center gap-1">
<i className="h-4 w-4" data-lucide="map-pin"></i>
                    [Location]
                  </span>
<span className="inline-flex items-center gap-1">
<i className="h-4 w-4" data-lucide="badge-check"></i>
                    [Employment type]
                  </span>
</div>
</div>
<div className="flex items-center gap-2 shrink-0">
<a className="inline-flex items-center gap-2 rounded-md bg-white text-[#0B0D12] px-3.5 py-2 text-sm font-medium hover:bg-white/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition" href="mailto:careers@mark-ai.com?subject=Application%20-%20[Job%20Title]">
<i className="h-4 w-4" data-lucide="send"></i>
                  Apply
                </a>
<details className="group">
<summary className="list-none inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.03] px-3.5 py-2 text-sm font-medium hover:border-white/20 hover:bg-white/[0.06] transition cursor-pointer">
<i className="h-4 w-4 group-open:rotate-180 transition-transform" data-lucide="chevron-down"></i>
                    Details
                  </summary>
<div className="mt-3 text-sm text-white/70 max-w-3xl">
<p>[Paste the exact role description, requirements, and responsibilities here from your current page.]</p>
</div>
</details>
</div>
</div>
</div>

<div className="rounded-lg border border-white/10 bg-white/[0.03] p-5 hover:bg-white/[0.05] transition">
<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
<div className="min-w-0">
<span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-2 py-0.5 text-xs text-white/70">
<i className="h-3.5 w-3.5" data-lucide="layout"></i>
                  [Team]
                </span>
<h3 className="mt-2 text-lg sm:text-xl font-semibold tracking-tight text-white truncate">[Job Title]</h3>
<div className="mt-1 flex flex-wrap items-center gap-3 text-sm text-white/60">
<span className="inline-flex items-center gap-1">
<i className="h-4 w-4" data-lucide="map-pin"></i>
                    [Location]
                  </span>
<span className="inline-flex items-center gap-1">
<i className="h-4 w-4" data-lucide="badge-check"></i>
                    [Employment type]
                  </span>
</div>
</div>
<div className="flex items-center gap-2 shrink-0">
<a className="inline-flex items-center gap-2 rounded-md bg-white text-[#0B0D12] px-3.5 py-2 text-sm font-medium hover:bg-white/90 transition" href="mailto:careers@mark-ai.com?subject=Application%20-%20[Job%20Title]">
<i className="h-4 w-4" data-lucide="send"></i>
                  Apply
                </a>
<details className="group">
<summary className="list-none inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.03] px-3.5 py-2 text-sm font-medium hover:border-white/20 hover:bg-white/[0.06] transition cursor-pointer">
<i className="h-4 w-4 group-open:rotate-180 transition-transform" data-lucide="chevron-down"></i>
                    Details
                  </summary>
<div className="mt-3 text-sm text-white/70 max-w-3xl">
<p>[Paste exact role content here.]</p>
</div>
</details>
</div>
</div>
</div>


</div>
</div>
</section>

<section className="py-14 sm:py-20" id="culture">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex items-end justify-between gap-6">
<div>
<h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white">Life at Mark AI</h2>
<p className="mt-3 text-white/70">[Replace with your culture text from the current page.]</p>
</div>
</div>
<div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
<div className="relative rounded-lg overflow-hidden border border-white/10">
<img alt="Team collaboration" className="h-56 w-full object-cover" src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="relative rounded-lg overflow-hidden border border-white/10">
<img alt="Team culture" className="h-56 w-full object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
</div>
<div className="relative rounded-lg overflow-hidden border border-white/10">
<img alt="Workplace" className="h-56 w-full object-cover" src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="py-14 sm:py-20" id="process">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white">How we hire</h2>
<p className="mt-3 text-white/70">[Replace with your exact steps if listed on the current page.]</p>
<div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
<div className="rounded-lg border border-white/10 bg-white/[0.03] p-5">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-md bg-white/[0.06] ring-1 ring-white/10 grid place-content-center">
<i className="h-4.5 w-4.5" data-lucide="phone"></i>
</div>
<p className="text-sm font-medium text-white tracking-tight">Intro chat</p>
</div>
<p className="mt-2 text-sm text-white/70">[Screening or recruiter call details.]</p>
</div>
<div className="rounded-lg border border-white/10 bg-white/[0.03] p-5">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-md bg-white/[0.06] ring-1 ring-white/10 grid place-content-center">
<i className="h-4.5 w-4.5" data-lucide="code-2"></i>
</div>
<p className="text-sm font-medium text-white tracking-tight">Skills deep-dive</p>
</div>
<p className="mt-2 text-sm text-white/70">[Technical/role-specific interview.]</p>
</div>
<div className="rounded-lg border border-white/10 bg-white/[0.03] p-5">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-md bg-white/[0.06] ring-1 ring-white/10 grid place-content-center">
<i className="h-4.5 w-4.5" data-lucide="users"></i>
</div>
<p className="text-sm font-medium text-white tracking-tight">Team collaboration</p>
</div>
<p className="mt-2 text-sm text-white/70">[Panel or take-home overview.]</p>
</div>
<div className="rounded-lg border border-white/10 bg-white/[0.03] p-5">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-md bg-white/[0.06] ring-1 ring-white/10 grid place-content-center">
<i className="h-4.5 w-4.5" data-lucide="check-circle-2"></i>
</div>
<p className="text-sm font-medium text-white tracking-tight">Offer</p>
</div>
<p className="mt-2 text-sm text-white/70">[Decision + references / timeline.]</p>
</div>
</div>
</div>
</section>

<section className="py-14 sm:py-20" id="faq">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white">FAQ</h2>
<p className="mt-3 text-white/70">[If you have FAQs on your current careers page, paste them below.]</p>
<div className="mt-8 divide-y divide-white/10 rounded-lg border border-white/10 bg-white/[0.03]">
<details className="group p-5">
<summary className="list-none flex items-center justify-between cursor-pointer">
<span className="text-sm font-medium text-white tracking-tight">[Do you support remote work?]</span>
<i className="h-4 w-4 transition-transform group-open:rotate-180" data-lucide="chevron-down"></i>
</summary>
<p className="mt-3 text-sm text-white/70">[Paste exact answer from your current page.]</p>
</details>
<details className="group p-5">
<summary className="list-none flex items-center justify-between cursor-pointer">
<span className="text-sm font-medium text-white tracking-tight">[What’s your interview process?]</span>
<i className="h-4 w-4 transition-transform group-open:rotate-180" data-lucide="chevron-down"></i>
</summary>
<p className="mt-3 text-sm text-white/70">[Paste exact answer from your current page.]</p>
</details>
<details className="group p-5">
<summary className="list-none flex items-center justify-between cursor-pointer">
<span className="text-sm font-medium text-white tracking-tight">[Do you offer visa sponsorship?]</span>
<i className="h-4 w-4 transition-transform group-open:rotate-180" data-lucide="chevron-down"></i>
</summary>
<p className="mt-3 text-sm text-white/70">[Paste exact answer from your current page.]</p>
</details>
</div>
</div>
</section>

<footer className="pt-12 pb-16">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 border-t border-white/10 pt-8">
<div>
<div className="inline-flex items-center gap-2 group">
<div className="h-7 w-7 rounded-md bg-white/5 ring-1 ring-white/10 grid place-content-center">
<span className="text-xs font-semibold tracking-tight">M</span>
</div>
<span className="text-base font-semibold tracking-tight">MARK</span>
</div>
<p className="mt-3 text-sm text-white/60 max-w-xs">[Replace with your short company blurb from the careers page if present.]</p>
</div>
<div>
<p className="text-sm font-medium text-white tracking-tight">Company</p>
<ul className="mt-3 space-y-2 text-sm text-white/70">
<li><a className="hover:text-white" href="/about">About</a></li>
<li><a className="hover:text-white" href="/careers">Careers</a></li>
<li><a className="hover:text-white" href="/blog">Blog</a></li>
</ul>
</div>
<div>
<p className="text-sm font-medium text-white tracking-tight">Resources</p>
<ul className="mt-3 space-y-2 text-sm text-white/70">
<li><a className="hover:text-white" href="/docs">Docs</a></li>
<li><a className="hover:text-white" href="/security">Security</a></li>
<li><a className="hover:text-white" href="/support">Support</a></li>
</ul>
</div>
<div>
<p className="text-sm font-medium text-white tracking-tight">Contact</p>
<ul className="mt-3 space-y-2 text-sm text-white/70">
<li><a className="hover:text-white" href="mailto:careers@mark-ai.com">careers@mark-ai.com</a></li>
<li><a className="hover:text-white" href="/contact">Contact form</a></li>
</ul>
</div>
</div>
<div className="mt-8 flex items-center justify-between text-xs text-white/50">
<p>© <span id="year"></span> Mark AI. All rights reserved.</p>
<div className="flex items-center gap-4">
<a className="hover:text-white" href="/privacy">Privacy</a>
<a className="hover:text-white" href="/terms">Terms</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
