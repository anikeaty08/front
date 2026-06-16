import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // Initialize lucide icons with consistent stroke width
      document.addEventListener('DOMContentLoaded', function () {
        if (window.lucide) {
          window.lucide.createIcons({
            attrs: { 'stroke-width': 1.5 }
          });
        }
        // Year
        var y = document.getElementById('year');
        if (y) y.textContent = new Date().getFullYear();

        // Pricing toggle
        var toggle = document.getElementById('billing-toggle');
        var thumb = document.getElementById('billing-thumb');
        var pro = document.getElementById('pro-price');
        var scale = document.getElementById('scale-price');
        var yearly = false;

        function setBilling(y) {
          yearly = y;
          if (y) {
            thumb.style.left = 'calc(50% + 0.25rem)';
            pro.textContent = '$1,490';
            scale.textContent = '$4,490';
          } else {
            thumb.style.left = '0.25rem';
            pro.textContent = '$149';
            scale.textContent = '$449';
          }
        }
        setBilling(false);
        toggle.addEventListener('click', function () {
          setBilling(!yearly);
        });
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="w-full backdrop-blur-sm bg-white/5 text-white/80">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 text-center text-[13px]">
        New: CSV enrichment is now 2x faster. Free plan includes 50 verified contacts.
      </div>
</div>

<header className="sticky top-0 z-50 border-b border-white/[0.08] bg-[#0B0D12]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="h-16 flex items-center justify-between">
<a className="inline-flex items-center gap-2 group" href="#">
<div className="h-7 w-7 rounded-md bg-white/[0.08] border border-white/[0.12] grid place-items-center">
<span className="text-[13px] font-semibold tracking-tight">SL</span>
</div>
<span className="text-[15px] font-medium tracking-tight">SearchLeads</span>
</a>
<nav className="hidden md:flex items-center gap-8 text-[14px]">
<a className="transition text-white/70 hover:text-white" href="#features">Features</a>
<a className="transition text-white/70 hover:text-white" href="#enrich">Enrich</a>
<a className="transition text-white/70 hover:text-white" href="#integrations">Integrations</a>
<a className="transition text-white/70 hover:text-white" href="#pricing">Pricing</a>
<a className="transition text-white/70 hover:text-white" href="#security">Privacy</a>
</nav>
<div className="flex items-center gap-3">
<a className="hidden sm:inline-flex items-center gap-2 rounded-md border border-white/[0.12] px-3.5 py-2 text-[13px] transition text-white/80 hover:text-white hover:border-white/20" href="#">
<svg className="lucide lucide-log-in w-4 h-4" data-lucide="log-in" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m10 17 5-5-5-5"></path><path d="M15 12H3"></path><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path></svg>
              Sign in
            </a>
<a className="inline-flex items-center gap-2 rounded-md text-[#0B0D12] px-3.5 py-2 text-[13px] font-medium transition bg-white hover:bg-white/90" href="#">
<svg className="lucide lucide-zap w-4 h-4" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
              Start free
            </a>
</div>
</div>
</div>
</header>

<section className="relative overflow-hidden">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-green-500/10 blur-3xl"></div>
<div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl"></div>
</div>
<div className="sm:px-6 lg:px-8 sm:py-24 max-w-7xl mr-auto ml-auto pt-16 pr-4 pb-16 pl-4">
<div className="grid lg:grid-cols-2 gap-12 items-center">
<div className="">
<div className="inline-flex items-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.03] px-3 py-1 text-[12px] mb-5 text-white/70">
<svg className="lucide lucide-database w-3.5 h-3.5" data-lucide="database" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg>
              B2B Contact DB • Verified emails &amp; direct dials
            </div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white">
              Find the right buyers. Verify in seconds. Close more deals.
            </h1>
<p className="mt-5 text-[15px] leading-relaxed text-white/70">
              Search 320M+ professional contacts and 25M+ companies. Filter by title, seniority, tech stack, funding, and more.
              Export or sync to your CRM with automatic email verification.
            </p>
<div className="mt-8 flex flex-col sm:flex-row gap-3">
<a className="inline-flex items-center justify-center gap-2 rounded-md text-[#0B0D12] px-5 py-3 text-[14px] font-medium transition bg-white hover:bg-white/90" href="#">
<svg className="lucide lucide-rocket w-4.5 h-4.5" data-lucide="rocket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
                Start free — 50 credits
              </a>
<a className="inline-flex items-center justify-center gap-2 rounded-md border border-white/[0.12] bg-white/[0.03] px-5 py-3 text-[14px] transition text-white/80 hover:text-white hover:border-white/20" href="#">
<svg className="lucide lucide-calendar w-4.5 h-4.5" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
                Book a demo
              </a>
</div>
<div className="mt-6 flex items-center gap-4 text-[12px] text-white/60">
<div className="flex -space-x-2">
<img alt="" className="w-7 h-7 rounded-full border border-white/10" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<img alt="" className="w-7 h-7 rounded-full border border-white/10" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<img alt="" className="w-7 h-7 rounded-full border border-white/10" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
</div>
              Trusted by 4,000+ GTM teams
              <span className="h-3 w-px bg-white/15"></span>
<span className="inline-flex items-center gap-1.5">
<svg className="lucide lucide-shield-check w-3.5 h-3.5" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg> Privacy-first
              </span>
</div>
</div>

<div className="relative">
<div className="rounded-xl border border-white/[0.12] bg-white/[0.03] p-5 sm:p-6 shadow-2xl">
<div className="flex mb-4 items-center justify-between">
<div className="text-[13px] text-white/70">Quick search</div>
<div className="inline-flex items-center gap-2 text-[12px] text-white/60">
<svg className="lucide lucide-users w-4 h-4" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
                  320M+ contacts
                </div>
<span className="inline-flex items-center gap-1.5"><svg className="lucide lucide-sparkles w-3.5 h-3.5" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg> Enrich CSVs in bulk</span></div>
<div className="space-y-3">
<div className="relative">
<label className="sr-only">Job title</label>
<div className="flex items-center gap-2 rounded-md border border-white/[0.12] bg-[#0D1117] px-3 py-2.5 focus-within:border-white/20">
<svg className="lucide lucide-briefcase w-4.5 h-4.5 text-white/50" data-lucide="briefcase" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></svg>
<input className="w-full bg-transparent outline-none text-[14px] placeholder:text-white/40" placeholder="Job title e.g. VP Sales" type="text"/>
<button className="inline-flex items-center gap-1.5 rounded px-2 py-1 text-[12px] hover:bg-white/[0.06] text-white/70 hover:text-white">
<svg className="lucide lucide-plus w-3.5 h-3.5" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg> Add
                    </button>
</div>
</div>
<div className="grid grid-cols-2 gap-3">
<div className="flex items-center gap-2 rounded-md border border-white/[0.12] bg-[#0D1117] px-3 py-2.5 focus-within:border-white/20">
<svg className="lucide lucide-building-2 w-4.5 h-4.5 text-white/50" data-lucide="building-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path><path d="M10 6h4"></path><path d="M10 10h4"></path><path d="M10 14h4"></path><path d="M10 18h4"></path></svg>
<input className="w-full bg-transparent outline-none text-[14px] placeholder:text-white/40" placeholder="Company" type="text"/>
</div>
<div className="flex items-center gap-2 rounded-md border border-white/[0.12] bg-[#0D1117] px-3 py-2.5 focus-within:border-white/20">
<svg className="lucide lucide-map-pin w-4.5 h-4.5 text-white/50" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<input className="w-full bg-transparent outline-none text-[14px] placeholder:text-white/40" placeholder="Location" type="text"/>
</div>
</div>
<div className="grid grid-cols-2 gap-3">
<div className="flex items-center gap-2 rounded-md border border-white/[0.12] bg-[#0D1117] px-3 py-2.5">
<svg className="lucide lucide-layers w-4.5 h-4.5 text-white/50" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
<select className="w-full bg-transparent outline-none text-[14px] text-white/80">
<option className="bg-[#0D1117]" value="">Seniority</option>
<option className="bg-[#0D1117]">C-Level</option>
<option className="bg-[#0D1117]">VP</option>
<option className="bg-[#0D1117]">Director</option>
<option className="bg-[#0D1117]">Manager</option>
<option className="bg-[#0D1117]">IC</option>
</select>
</div>
<div className="flex items-center gap-2 rounded-md border border-white/[0.12] bg-[#0D1117] px-3 py-2.5">
<svg className="lucide lucide-server w-4.5 h-4.5 text-white/50" data-lucide="server" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" ry="2" width="20" x="2" y="2"></rect><rect height="8" rx="2" ry="2" width="20" x="2" y="14"></rect><line x1="6" x2="6.01" y1="6" y2="6"></line><line x1="6" x2="6.01" y1="18" y2="18"></line></svg>
<select className="w-full bg-transparent outline-none text-[14px] text-white/80">
<option className="bg-[#0D1117]" value="">Company size</option>
<option className="bg-[#0D1117]">1-10</option>
<option className="bg-[#0D1117]">11-50</option>
<option className="bg-[#0D1117]">51-200</option>
<option className="bg-[#0D1117]">201-1000</option>
<option className="bg-[#0D1117]">1000+</option>
</select>
</div>
</div>
<div className="flex items-center justify-between">
<div className="inline-flex items-center gap-2 text-[12px] text-white/60">
<svg className="lucide lucide-mail-check w-4 h-4" data-lucide="mail-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8"></path><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path><path d="m16 19 2 2 4-4"></path></svg>
                    Email verification on export
                  </div>
<button className="inline-flex items-center gap-2 rounded-md text-[#0B0D12] px-4 py-2.5 text-[13px] font-medium transition bg-white hover:bg-white/90">
<svg className="lucide lucide-search w-4.5 h-4.5" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
                    Search
                  </button>
</div>
</div>
<div className="mt-5 border-t border-white/[0.08] pt-4">
<div className="text-[12px] mb-2 text-white/60">Sample results</div>
<div className="grid sm:grid-cols-2 gap-3">

<div className="rounded-md border border-white/[0.12] bg-[#0D1117] p-3 transition hover:border-white/20">
<div className="flex items-center gap-3">
<img alt="" className="w-9 h-9 rounded-full border border-white/10" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div className="min-w-0">
<div className="text-[14px] font-medium tracking-tight">Maria Chen</div>
<div className="text-[12px] truncate text-white/60">VP Sales • HexaCloud</div>
</div>
</div>
<div className="mt-3 flex items-center justify-between text-[12px] text-white/65">
<span className="inline-flex items-center gap-1.5"><svg className="lucide lucide-mail w-3.5 h-3.5" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>Verified</span>
<span className="inline-flex items-center gap-1.5"><svg className="lucide lucide-phone w-3.5 h-3.5" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>Direct dial</span>
</div>
</div>
<div className="rounded-md border border-white/[0.12] bg-[#0D1117] p-3 transition hover:border-white/20">
<div className="flex items-center gap-3">
<img alt="" className="w-9 h-9 rounded-full border border-white/10" src="https://images.unsplash.com/photo-1546525848-3ce03ca516f6?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div className="min-w-0">
<div className="text-[14px] font-medium tracking-tight">Aiden Patel</div>
<div className="text-[12px] truncate text-white/60">Head of Marketing • DataForge</div>
</div>
</div>
<div className="mt-3 flex items-center justify-between text-[12px] text-white/65">
<span className="inline-flex items-center gap-1.5"><svg className="lucide lucide-mail w-3.5 h-3.5" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>Verified</span>
<span className="inline-flex items-center gap-1.5"><svg className="lucide lucide-building w-3.5 h-3.5" data-lucide="building" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 10h.01"></path><path d="M12 14h.01"></path><path d="M12 6h.01"></path><path d="M16 10h.01"></path><path d="M16 14h.01"></path><path d="M16 6h.01"></path><path d="M8 10h.01"></path><path d="M8 14h.01"></path><path d="M8 6h.01"></path><path d="M9 22v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"></path><rect height="20" rx="2" width="16" x="4" y="2"></rect></svg>HQ: NYC</span>
</div>
</div>
</div>
</div>
</div>

<div className="absolute -bottom-4 -left-4">
<div className="border-white/[0.12] text-[12px] border rounded-lg pt-2 pr-3 pb-2 pl-3 shadow-lg text-white/70">
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-white/[0.08]">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 text-white/50">
<div className="h-10 rounded-md border border-white/[0.12] bg-white/[0.02] grid place-items-center text-[13px] tracking-tight">SF</div>
<div className="h-10 rounded-md border border-white/[0.12] bg-white/[0.02] grid place-items-center text-[13px] tracking-tight">HB</div>
<div className="h-10 rounded-md border border-white/[0.12] bg-white/[0.02] grid place-items-center text-[13px] tracking-tight">PD</div>
<div className="h-10 rounded-md border border-white/[0.12] bg-white/[0.02] grid place-items-center text-[13px] tracking-tight">SL</div>
<div className="h-10 rounded-md border border-white/[0.12] bg-white/[0.02] grid place-items-center text-[13px] tracking-tight">OR</div>
<div className="h-10 rounded-md border border-white/[0.12] bg-white/[0.02] grid place-items-center text-[13px] tracking-tight">GH</div>
</div>
</div>
</section>

<section className="border-t border-white/[0.08]" id="features">
<div className="sm:px-6 lg:px-8 sm:py-24 max-w-7xl mr-auto ml-auto pt-16 pr-4 pb-16 pl-4">
<div className="max-w-2xl">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">All-in-one B2B contact database</h2>
<p className="mt-3 text-[15px] text-white/70">Search, verify, enrich, and sync—built for modern GTM teams that need precision and scale.</p>
</div>
<div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="rounded-lg border border-white/[0.12] bg-white/[0.03] p-5 transition hover:border-white/20">
<div className="flex items-center gap-2 text-[13px] mb-2 text-white/70">
<svg className="lucide lucide-filter w-4.5 h-4.5" data-lucide="filter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"></path></svg> Precision filters
            </div>
<h3 className="text-[18px] font-medium tracking-tight text-white">Segment by title, seniority, industry, tech stack</h3>
<p className="mt-2 text-[14px] text-white/70">Stack filters and get only the contacts that match your ICP. Save segments for one-click updates.</p>
</div>
<div className="rounded-lg border border-white/[0.12] bg-white/[0.03] p-5 transition hover:border-white/20">
<div className="flex items-center gap-2 text-[13px] mb-2 text-white/70">
<svg className="lucide lucide-mail-check w-4.5 h-4.5" data-lucide="mail-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8"></path><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path><path d="m16 19 2 2 4-4"></path></svg> Verified emails
            </div>
<h3 className="text-[18px] font-medium tracking-tight text-white">Automatic verification on export</h3>
<p className="mt-2 text-[14px] text-white/70">Reduce bounces with real-time checks and confidence scoring visible before you spend credits.</p>
</div>
<div className="rounded-lg border border-white/[0.12] bg-white/[0.03] p-5 transition hover:border-white/20">
<div className="flex items-center gap-2 text-[13px] mb-2 text-white/70">
<svg className="lucide lucide-phone w-4.5 h-4.5" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg> Direct dials
            </div>
<h3 className="text-[18px] font-medium tracking-tight text-white">Reach decision makers faster</h3>
<p className="mt-2 text-[14px] text-white/70">Access high-signal contact channels including direct dials and social profiles where available.</p>
</div>
<div className="rounded-lg border border-white/[0.12] bg-white/[0.03] p-5 transition hover:border-white/20">
<div className="flex items-center gap-2 text-[13px] mb-2 text-white/70">
<svg className="lucide lucide-upload-cloud w-4.5 h-4.5" data-lucide="upload-cloud" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 13v8"></path><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path><path d="m8 17 4-4 4 4"></path></svg> Bulk CSV enrich
            </div>
<h3 className="text-[18px] font-medium tracking-tight text-white">Turn lists into qualified pipelines</h3>
<p className="mt-2 text-[14px] text-white/70">Upload a CSV of names or domains and enrich with titles, emails, phone, company insights, and technographics.</p>
</div>
<div className="rounded-lg border border-white/[0.12] bg-white/[0.03] p-5 transition hover:border-white/20">
<div className="flex items-center gap-2 text-[13px] mb-2 text-white/70">
<svg className="lucide lucide-link w-4.5 h-4.5" data-lucide="link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg> CRM &amp; outreach sync
            </div>
<h3 className="text-[18px] font-medium tracking-tight text-white">Push to your tools with one click</h3>
<p className="mt-2 text-[14px] text-white/70">Sync to CRM and outbound platforms while de-duplicating to keep records clean.</p>
</div>
<div className="rounded-lg border border-white/[0.12] bg-white/[0.03] p-5 transition hover:border-white/20">
<div className="flex items-center gap-2 text-[13px] mb-2 text-white/70">
<svg className="lucide lucide-lock w-4.5 h-4.5" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg> Privacy-first
            </div>
<h3 className="text-[18px] font-medium tracking-tight text-white">Compliant by design</h3>
<p className="mt-2 text-[14px] text-white/70">Data governance, suppression, and removal controls baked-in for global compliance.</p>
</div>
</div>
</div>
</section>

<section className="border-white/[0.08] border-t">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pt-16 pr-4 pb-16 pl-4">
<div className="grid lg:grid-cols-2 gap-10 items-start">
<div className="">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">Enrich your lists at scale</h2>
<p className="mt-3 text-[15px] text-white/70">Drop in a CSV, choose fields, and enrich. We’ll verify emails and flag risky addresses before export.</p>
<ul className="mt-6 space-y-3 text-[14px] text-white/80">
<li className="inline-flex items-center gap-2"><svg className="lucide lucide-check w-4.5 h-4.5 text-blue-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Name, title, seniority, and department</li>
<li className="inline-flex items-center gap-2"><svg className="lucide lucide-check w-4.5 h-4.5 text-blue-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Company size, industry, HQ, and technographics</li>
<li className="inline-flex items-center gap-2"><svg className="lucide lucide-check w-4.5 h-4.5 text-blue-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Verified emails and optional direct dials</li>
<li className="inline-flex items-center gap-2"><svg className="lucide lucide-check w-4.5 h-4.5 text-blue-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Dupe prevention and do-not-contact handling</li>
</ul>
<div className="mt-7 inline-flex items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-md text-[#0B0D12] px-4 py-2.5 text-[13px] font-medium transition bg-white hover:bg-white/90" href="#">
<svg className="lucide lucide-upload w-4.5 h-4.5" data-lucide="upload" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3v12"></path><path d="m17 8-5-5-5 5"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path></svg>
                Upload CSV
              </a>
<a className="inline-flex items-center gap-2 rounded-md border border-white/[0.12] bg-white/[0.03] px-4 py-2.5 text-[13px] transition text-white/80 hover:text-white hover:border-white/20" href="#">
<svg className="lucide lucide-file-text w-4.5 h-4.5" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
                Download sample
              </a>
</div>
<div className="mt-5 text-[12px] text-white/50">Free plan includes 1 CSV enrichment up to 500 rows.</div>
</div>
<div className="rounded-xl border border-white/[0.12] bg-white/[0.03] p-5">
<div className="flex items-center justify-between mb-3">
<div className="text-[13px] text-white/70">Enrichment preview</div>
<div className="inline-flex items-center gap-2 text-[12px] text-white/60">
<svg className="lucide lucide-activity w-4 h-4" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
                Real-time checks
              </div>
</div>
<div className="rounded-md border border-white/[0.12] bg-[#0D1117] overflow-hidden">
<div className="grid grid-cols-5 gap-px">
<div className="bg-transparent px-3 py-2 text-[12px] text-white/60">Name</div>
<div className="bg-transparent px-3 py-2 text-[12px] text-white/60">Title</div>
<div className="bg-transparent px-3 py-2 text-[12px] text-white/60">Company</div>
<div className="bg-transparent px-3 py-2 text-[12px] text-white/60">Email</div>
<div className="text-[12px] bg-transparent max-w-2xl mx-9 pt-2 pr-3 pb-2 pl-3 text-white/60">Status</div>
</div>
<div className="divide-y divide-white/[0.06]">
<div className="grid grid-cols-5">
<div className="px-3 py-2 text-[13px]">Maria Chen</div>
<div className="px-3 py-2 text-[13px]">VP Sales</div>
<div className="px-3 py-2 text-[13px]">HexaCloud</div>
<div className="px-3 py-2 text-[13px]">maria@hexacloud.com</div>
<div className="text-[13px] inline-flex gap-1.5 mx-9 pt-2 pr-3 pb-2 pl-3 items-center text-blue-400"><svg className="lucide lucide-check-circle w-4 h-4" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg> Valid</div>
</div>
<div className="grid grid-cols-5">
<div className="px-3 py-2 text-[13px]">Aiden Patel</div>
<div className="px-3 py-2 text-[13px]">Head of Marketing</div>
<div className="px-3 py-2 text-[13px]">DataForge</div>
<div className="px-3 py-2 text-[13px]">a.patel@dataforge.io</div>
<div className="text-[13px] inline-flex gap-1.5 mr-9 ml-9 pt-2 pr-3 pb-2 pl-3 items-center text-yellow-300">Catch-all-Valid<svg className="lucide lucide-alert-circle w-4 h-4" data-lucide="alert-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><line x1="12" x2="12" y1="8" y2="12"></line><line x1="12" x2="12.01" y1="16" y2="16"></line></svg></div></div>
<div className="grid grid-cols-5">
<div className="px-3 py-2 text-[13px]">Leah Park</div>
<div className="px-3 py-2 text-[13px]">Director, RevOps</div>
<div className="px-3 py-2 text-[13px]">NimbusAI</div>
<div className="px-3 py-2 text-[13px]">leah@nimbus.ai</div>
<div className="px-3 py-2 text-[13px] inline-flex items-center gap-1.5 text-rose-300"><svg className="lucide lucide-x-circle w-4 h-4" data-lucide="x-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m15 9-6 6"></path><path d="m9 9 6 6"></path></svg> Risky</div>
</div>
</div>
</div>
<div className="mt-4 flex items-center justify-between">
<div className="text-[12px] text-white/60">Duplicates removed automatically</div>
<button className="inline-flex items-center gap-2 rounded-md text-[#0B0D12] px-3.5 py-2 text-[13px] font-medium transition bg-white hover:bg-white/90">
<svg className="lucide lucide-download w-4.5 h-4.5" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
                Export CSV
              </button>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-white/[0.08]" id="integrations">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
<div className="max-w-2xl">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">Works with your stack</h2>
<p className="mt-3 text-[15px] text-white/70">Send contacts where your team works and keep records fresh with two-way sync.</p>
</div>
<div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
<div className="rounded-lg border border-white/[0.12] bg-white/[0.03] p-4">
<div className="flex items-center justify-between">
<div className="inline-flex items-center gap-2 text-[14px] font-medium tracking-tight">
<span className="rounded-sm border border-white/[0.12] bg-white/[0.03] px-1.5 py-0.5 text-[12px]">SF</span>
                Salesforce
              </div>
<svg className="lucide lucide-chevron-right w-4 h-4 text-white/40" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</div>
<p className="mt-2 text-[13px] text-white/70">Push leads and companies, map fields, and de-dupe by domain.</p>
</div>
<div className="rounded-lg border border-white/[0.12] bg-white/[0.03] p-4">
<div className="flex items-center justify-between">
<div className="inline-flex items-center gap-2 text-[14px] font-medium tracking-tight">
<span className="rounded-sm border border-white/[0.12] bg-white/[0.03] px-1.5 py-0.5 text-[12px]">HB</span>
                HubSpot
              </div>
<svg className="lucide lucide-chevron-right w-4 h-4 text-white/40" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</div>
<p className="mt-2 text-[13px] text-white/70">Create contacts/companies, update properties, auto-owner assignment.</p>
</div>
<div className="rounded-lg border border-white/[0.12] bg-white/[0.03] p-4">
<div className="flex items-center justify-between">
<div className="inline-flex items-center gap-2 text-[14px] font-medium tracking-tight">
<span className="rounded-sm border border-white/[0.12] bg-white/[0.03] px-1.5 py-0.5 text-[12px]">PD</span>
                Pipedrive
              </div>
<svg className="lucide lucide-chevron-right w-4 h-4 text-white/40" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</div>
<p className="mt-2 text-[13px] text-white/70">Create people/organizations with clean labels and stages.</p>
</div>
<div className="rounded-lg border border-white/[0.12] bg-white/[0.03] p-4">
<div className="flex items-center justify-between">
<div className="inline-flex items-center gap-2 text-[14px] font-medium tracking-tight">
<span className="rounded-sm border border-white/[0.12] bg-white/[0.03] px-1.5 py-0.5 text-[12px]">SL</span>
                Salesloft
              </div>
<svg className="lucide lucide-chevron-right w-4 h-4 text-white/40" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</div>
<p className="mt-2 text-[13px] text-white/70">Add to cadences with verified email gating.</p>
</div>
<div className="rounded-lg border border-white/[0.12] bg-white/[0.03] p-4">
<div className="flex items-center justify-between">
<div className="inline-flex items-center gap-2 text-[14px] font-medium tracking-tight">
<span className="rounded-sm border border-white/[0.12] bg-white/[0.03] px-1.5 py-0.5 text-[12px]">OR</span>
                Outreach
              </div>
<svg className="lucide lucide-chevron-right w-4 h-4 text-white/40" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</div>
<p className="mt-2 text-[13px] text-white/70">Create prospects and throttle adds to avoid send spikes.</p>
</div>
<div className="rounded-lg border border-white/[0.12] bg-white/[0.03] p-4">
<div className="flex items-center justify-between">
<div className="inline-flex items-center gap-2 text-[14px] font-medium tracking-tight">
<span className="rounded-sm border border-white/[0.12] bg-white/[0.03] px-1.5 py-0.5 text-[12px]">GH</span>
                Google Sheets
              </div>
<svg className="lucide lucide-chevron-right w-4 h-4 text-white/40" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</div>
<p className="mt-2 text-[13px] text-white/70">Sync sheets or paste rows for instant enrichment.</p>
</div>
</div>
</div>
</section>

<section className="border-t border-white/[0.08]" id="pricing">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
<div className="max-w-2xl">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">Simple, usage-based pricing</h2>
<p className="mt-3 text-[15px] text-white/70">Pay for verified contacts. Switch plans anytime.</p>
</div>

<div className="mt-6 flex items-center gap-3">
<span className="text-[13px] text-white/70">Monthly</span>
<button className="relative inline-flex items-center rounded-full border border-white/[0.12] bg-white/[0.04] p-1 transition" id="billing-toggle">
<span className="w-8 text-center text-[12px] text-white/70">M</span>
<span className="w-8 text-center text-[12px] text-white/70">Y</span>
<span className="absolute left-1 top-1 h-5 w-8 rounded-full transition-all bg-white" id="billing-thumb" style={{left: '0.25rem'}}></span>
</button>
<span className="inline-flex items-center gap-1.5 text-[12px] text-blue-300">
<svg className="lucide lucide-gift w-4 h-4" data-lucide="gift" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="4" rx="1" width="18" x="3" y="8"></rect><path d="M12 8v13"></path><path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"></path><path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"></path></svg> 2 months free yearly
          </span>
</div>

<div className="mt-8 grid md:grid-cols-3 gap-6">

<div className="rounded-xl border border-white/[0.12] bg-white/[0.03] p-5 flex flex-col">
<div className="flex items-center justify-between">
<h3 className="text-[18px] font-medium tracking-tight text-white">Free</h3>
<span className="text-[12px] text-white/60">For testing</span>
</div>
<div className="mt-2 flex items-end gap-1">
<span className="text-3xl font-semibold tracking-tight text-white">$0</span>
<span className="text-[12px] text-white/60">/mo</span>
</div>
<ul className="mt-4 space-y-2 text-[14px] text-white/80">
<li className="inline-flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-blue-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> 50 credits</li>
<li className="inline-flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-blue-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Email verification</li>
<li className="inline-flex items-center gap-2"><svg className="lucide lucide-minus w-4 h-4 text-white/40" data-lucide="minus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path></svg> Direct dials limited</li>
</ul>
<a className="mt-6 inline-flex items-center justify-center gap-2 rounded-md border border-white/[0.12] px-4 py-2.5 text-[13px] font-medium text-[#0B0D12] transition bg-white hover:bg-white/90" href="#">Get started</a>
</div>

<div className="rounded-xl border border-white/[0.12] bg-white/[0.06] p-5 flex flex-col outline outline-1 outline-white/[0.06]">
<div className="flex items-center justify-between">
<h3 className="text-[18px] font-medium tracking-tight text-white">Pro</h3>
<span className="text-[12px] text-white/60">Most popular</span>
</div>
<div className="mt-2 flex items-end gap-1">
<span className="text-3xl font-semibold tracking-tight text-white" id="pro-price">$149</span>
<span className="text-[12px] text-white/60">/mo</span>
</div>
<ul className="mt-4 space-y-2 text-[14px] text-white/80">
<li className="inline-flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-blue-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> 1,500 credits</li>
<li className="inline-flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-blue-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Direct dials included</li>
<li className="inline-flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-blue-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> CSV enrich up to 50k rows</li>
<li className="inline-flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-blue-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> CRM &amp; outreach sync</li>
</ul>
<a className="mt-6 inline-flex items-center justify-center gap-2 rounded-md px-4 py-2.5 text-[13px] font-medium text-[#0B0D12] transition bg-white hover:bg-white/90" href="#">Upgrade</a>
</div>

<div className="rounded-xl border border-white/[0.12] bg-white/[0.03] p-5 flex flex-col">
<div className="flex items-center justify-between">
<h3 className="text-[18px] font-medium tracking-tight text-white">Scale</h3>
<span className="text-[12px] text-white/60">For teams</span>
</div>
<div className="mt-2 flex items-end gap-1">
<span className="text-3xl font-semibold tracking-tight text-white" id="scale-price">$449</span>
<span className="text-[12px] text-white/60">/mo</span>
</div>
<ul className="mt-4 space-y-2 text-[14px] text-white/80">
<li className="inline-flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-blue-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> 5,000 credits + overages</li>
<li className="inline-flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-blue-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Priority data refresh</li>
<li className="inline-flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-blue-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> SSO, SCIM, audit logs</li>
<li className="inline-flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-blue-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Dedicated support</li>
</ul>
<a className="mt-6 inline-flex items-center justify-center gap-2 rounded-md border border-white/[0.12] px-4 py-2.5 text-[13px] font-medium text-[#0B0D12] transition bg-white hover:bg-white/90" href="#">Contact sales</a>
</div>
</div>
<div className="mt-5 text-[12px] text-white/60">Credits only deduct on successful, verified results. Cancel anytime.</div>
</div>
</section>

<section className="border-t border-white/[0.08]">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
<div className="max-w-2xl">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">Teams ship pipeline with SearchLeads</h2>
</div>
<div className="mt-8 grid md:grid-cols-3 gap-6">
<div className="rounded-lg border border-white/[0.12] bg-white/[0.03] p-5">
<div className="text-[14px] text-white/80">“The highest verified rate we’ve seen. Our SDRs spend less time cleaning and more time booking meetings.”</div>
<div className="mt-4 flex items-center gap-3">
<img alt="" className="w-9 h-9 rounded-full border border-white/10" src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-[14px] font-medium tracking-tight">Jordan Lee</div>
<div className="text-[12px] text-white/60">Head of SDR, Northbeam</div>
</div>
</div>
</div>
<div className="rounded-lg border border-white/[0.12] bg-white/[0.03] p-5">
<div className="text-[14px] text-white/80">“CSV enrich shaved hours off our prep. Push to HubSpot works flawlessly with no dupes.”</div>
<div className="mt-4 flex items-center gap-3">
<img alt="" className="w-9 h-9 rounded-full border border-white/10" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-[14px] font-medium tracking-tight">Evelyn Diaz</div>
<div className="text-[12px] text-white/60">RevOps, Cellerate</div>
</div>
</div>
</div>
<div className="rounded-lg border border-white/[0.12] bg-white/[0.03] p-5">
<div className="text-[14px] text-white/80">“We scaled outbound to new industries with precise filters and verified direct dials.”</div>
<div className="mt-4 flex items-center gap-3">
<img alt="" className="w-9 h-9 rounded-full border border-white/10" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div className="">
<div className="text-[14px] font-medium tracking-tight">Sam Park</div>
<div className="text-[12px] text-white/60">VP Growth, Loomexa</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-white/[0.08]" id="security">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
<div className="grid md:grid-cols-2 gap-10 items-start">
<div className="">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">Privacy-first data sourcing</h2>
<p className="mt-3 text-[15px] text-white/70">We prioritize lawful, ethical sourcing and respect opt-outs. Manage suppression lists, request removal, and audit access.</p>
<ul className="mt-6 space-y-3 text-[14px] text-white/80">
<li className="inline-flex items-center gap-2"><svg className="lucide lucide-shield w-4.5 h-4.5 text-cyan-300" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg> GDPR/CCPA aligned processing</li>
<li className="inline-flex items-center gap-2"><svg className="lucide lucide-file-key-2 w-4.5 h-4.5 text-cyan-300" data-lucide="file-key-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v6"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><circle cx="4" cy="16" r="2"></circle><path d="m10 10-4.5 4.5"></path><path d="m9 11 1 1"></path></svg> DPA, SCCs, and regional hosting options</li>
<li className="inline-flex items-center gap-2"><svg className="lucide lucide-eye-off w-4.5 h-4.5 text-cyan-300" data-lucide="eye-off" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"></path><path d="M14.084 14.158a3 3 0 0 1-4.242-4.242"></path><path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"></path><path d="m2 2 20 20"></path></svg> Do-not-contact suppression and removals</li>
</ul>
</div>
<div className="rounded-xl border border-white/[0.12] bg-white/[0.03] p-5">
<div className="text-[13px] mb-3 text-white/70">Request data removal</div>
<form className="space-y-3">
<div className="flex items-center gap-2 rounded-md border border-white/[0.12] bg-[#0D1117] px-3 py-2.5">
<svg className="lucide lucide-mail w-4.5 h-4.5 text-white/50" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
<input className="w-full bg-transparent outline-none text-[14px] placeholder:text-white/40" placeholder="Your email" type="email"/>
</div>
<div className="flex items-center gap-2 rounded-md border border-white/[0.12] bg-[#0D1117] px-3 py-2.5">
<svg className="lucide lucide-message-square w-4.5 h-4.5 text-white/50" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg>
<input className="w-full bg-transparent outline-none text-[14px] placeholder:text-white/40" placeholder="Message (optional)" type="text"/>
</div>
<button className="inline-flex items-center gap-2 rounded-md text-[#0B0D12] px-4 py-2.5 text-[13px] font-medium transition bg-white hover:bg-white/90" type="button">
<svg className="lucide lucide-send w-4.5 h-4.5" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
                Submit request
              </button>
</form>
</div>
</div>
</div>
</section>

<section className="border-t border-white/[0.08]">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
<div className="rounded-2xl border border-white/[0.12] bg-gradient-to-br from-white/[0.05] to-white/[0.02] p-8 md:p-10">
<div className="grid md:grid-cols-2 gap-8 items-center">
<div className="">
<h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">Start building pipeline today</h3>
<p className="mt-2 text-[15px] text-white/70">Create a free account, get 50 credits, and try the B2B contact DB with your ICP.</p>
<div className="mt-6 inline-flex items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-md text-[#0B0D12] px-4 py-2.5 text-[13px] font-medium transition bg-white hover:bg-white/90" href="#">
<svg className="lucide lucide-user-plus w-4.5 h-4.5" data-lucide="user-plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><line x1="19" x2="19" y1="8" y2="14"></line><line x1="22" x2="16" y1="11" y2="11"></line></svg>
                  Create account
                </a>
<a className="inline-flex items-center gap-2 rounded-md border border-white/[0.12] bg-white/[0.03] px-4 py-2.5 text-[13px] transition text-white/80 hover:text-white hover:border-white/20" href="#">
<svg className="lucide lucide-play-circle w-4.5 h-4.5" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></svg>
                  Watch 2‑min demo
                </a>
</div>
</div>
<div className="">
<div className="rounded-lg border border-white/[0.12] bg-white/[0.03] p-4">
<div className="text-[13px] mb-2 text-white/70">Get product updates</div>
<div className="flex gap-2">
<div className="flex-1 flex items-center gap-2 rounded-md border border-white/[0.12] bg-[#0D1117] px-3">
<svg className="lucide lucide-mail w-4.5 h-4.5 text-white/50" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
<input className="w-full bg-transparent outline-none text-[14px] placeholder:text-white/40" placeholder="you@company.com" type="email"/>
</div>
<button className="inline-flex items-center gap-2 rounded-md text-[#0B0D12] px-4 py-2.5 text-[13px] font-medium transition bg-white hover:bg-white/90">
<svg className="lucide lucide-bell-ring w-4.5 h-4.5" data-lucide="bell-ring" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M22 8c0-2.3-.8-4.3-2-6"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path><path d="M4 2C2.8 3.7 2 5.7 2 8"></path></svg>
                    Subscribe
                  </button>
</div>
<div className="mt-2 text-[12px] text-white/60">No spam. Unsubscribe anytime.</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/[0.08]">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
<div>
<a className="inline-flex items-center gap-2 group" href="#">
<div className="h-7 w-7 rounded-md bg-white/[0.08] border border-white/[0.12] grid place-items-center">
<span className="text-[13px] font-semibold tracking-tight">SL</span>
</div>
<span className="text-[15px] font-medium tracking-tight">SearchLeads</span>
</a>
<p className="mt-3 text-[13px] text-white/60">Modern B2B contact DB for GTM teams. Search, verify, and sync your next 1,000 meetings.</p>
</div>
<div>
<div className="text-[12px] mb-3 text-white/60">Product</div>
<ul className="space-y-2 text-[14px]">
<li><a className="transition text-white/70 hover:text-white" href="#features">Features</a></li>
<li><a className="transition text-white/70 hover:text-white" href="#enrich">Enrich</a></li>
<li><a className="transition text-white/70 hover:text-white" href="#integrations">Integrations</a></li>
<li><a className="transition text-white/70 hover:text-white" href="#pricing">Pricing</a></li>
</ul>
</div>
<div>
<div className="text-[12px] mb-3 text-white/60">Company</div>
<ul className="space-y-2 text-[14px]">
<li><a className="transition text-white/70 hover:text-white" href="#">About</a></li>
<li><a className="transition text-white/70 hover:text-white" href="#">Careers</a></li>
<li><a className="transition text-white/70 hover:text-white" href="#">Blog</a></li>
<li><a className="transition text-white/70 hover:text-white" href="#">Contact</a></li>
</ul>
</div>
<div>
<div className="text-[12px] mb-3 text-white/60">Legal</div>
<ul className="space-y-2 text-[14px]">
<li><a className="transition text-white/70 hover:text-white" href="#">Privacy</a></li>
<li><a className="transition text-white/70 hover:text-white" href="#">Terms</a></li>
<li><a className="transition text-white/70 hover:text-white" href="#">DPA</a></li>
</ul>
</div>
</div>
<div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-white/[0.08] pt-6 text-[12px] text-white/60">
<div>© <span id="year">2025</span> SearchLeads, Inc. All rights reserved.</div>
<div className="inline-flex items-center gap-4">
<a className="transition inline-flex items-center gap-1.5 hover:text-white" href="#"><svg className="lucide lucide-twitter w-4 h-4" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg> X/Twitter</a>
<a className="transition inline-flex items-center gap-1.5 hover:text-white" href="#"><svg className="lucide lucide-linkedin w-4 h-4" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg> LinkedIn</a>
</div>
</div>
</div>
</footer>



  

Aura Logo
Made in Aura

Garvit Suneja

Remix
Preview
Code

    </>
  );
}
