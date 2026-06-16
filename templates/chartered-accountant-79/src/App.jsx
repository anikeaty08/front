import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    // Mobile navigation toggle
    (function() {
      const btn = document.getElementById('navToggle');
      const menu = document.getElementById('mobileNav');
      if (btn && menu) {
        btn.addEventListener('click', function () {
          const expanded = btn.getAttribute('aria-expanded') === 'true';
          btn.setAttribute('aria-expanded', String(!expanded));
          menu.classList.toggle('hidden');
        });
      }
    })();
    // Year
    (function(){
      var y = document.getElementById('year');
      if (y) y.textContent = new Date().getFullYear();
    })();
    // Scroll reveal
    (function(){
      const els = document.querySelectorAll('[data-reveal]');
      els.forEach(el => {
        el.style.transform = 'translateY(0.5rem)';
        el.style.opacity = '0';
      });
      const io = new IntersectionObserver(entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.style.transition = 'opacity 600ms ease, transform 600ms ease';
            e.target.style.opacity = '1';
            e.target.style.transform = 'translateY(0rem)';
            io.unobserve(e.target);
          }
        });
      }, { threshold: 0.1 });
      els.forEach(el => io.observe(el));
    })();
    // Testimonials slider
    (function(){
      const track = document.getElementById('testimonialTrack');
      const prev = document.getElementById('prevTestimonial');
      const next = document.getElementById('nextTestimonial');
      if (!track) return;
      let idx = 0;
      const total = track.children.length;
      function go(i){
        idx = (i + total) % total;
        track.style.transform = 'translateX(' + (-idx * 100) + '%)';
      }
      let timer = setInterval(()=>go(idx+1), 5000);
      [prev, next].forEach(btn=>{
        if (!btn) return;
        btn.addEventListener('click', ()=>{
          clearInterval(timer);
          go(btn === next ? idx+1 : idx-1);
          timer = setInterval(()=>go(idx+1), 5000);
        });
      });
    })();
    // Back to top
    (function(){
      const btn = document.getElementById('toTop');
      if (!btn) return;
      window.addEventListener('scroll', ()=>{
        if (window.scrollY > 400) btn.classList.remove('hidden'); else btn.classList.add('hidden');
      });
      btn.addEventListener('click', ()=> window.scrollTo({ top: 0, behavior: 'smooth' }));
    })();
    // Apply body font
    document.body.style.fontFamily = "Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, 'Apple Color Emoji', 'Segoe UI Emoji'";
  


    (function() {
      const btn = document.getElementById('navToggle');
      const menu = document.getElementById('mobileNav');
      if (btn && menu) btn.onclick = () => menu.classList.toggle('hidden');
      var y = document.getElementById('year');
      if (y) y.textContent = new Date().getFullYear();
      const els = document.querySelectorAll('[data-reveal]');
      els.forEach(el => { el.style.transform='translateY(0.5rem)'; el.style.opacity='0'; });
      const io = new IntersectionObserver(es => es.forEach(e=>{
        if(e.isIntersecting){ e.target.style.transition='opacity 600ms ease, transform 600ms ease'; e.target.style.opacity='1'; e.target.style.transform='translateY(0rem)'; io.unobserve(e.target);}
      }), {threshold:0.1});
      els.forEach(el=>io.observe(el));
    })();
    document.body.style.fontFamily = "Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, 'Apple Color Emoji', 'Segoe UI Emoji'";
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="border-b border-neutral-200">
<div className="mx-auto max-w-screen-2xl">
<div className="flex items-center justify-between gap-6 px-6 py-2">
<p className="text-xs leading-relaxed">ICAI Registered | Ethical. Compliant. Precise.</p>
<div className="flex items-center gap-6">
<a className="text-xs underline-offset-4 hover:underline" href="contact.html">Contact</a>
<a className="text-xs underline-offset-4 hover:underline" href="services.html">Services</a>
</div>
</div>
</div>
</div>

<header className="border-b sticky top-0 z-50 backdrop-blur border-neutral-200 bg-white/80">
<div className="mx-auto max-w-screen-2xl">
<div className="flex items-center justify-between px-6">

<a className="block py-4" href="index.html" style={{fontFamily: '\'Libre Baskerville\', serif'}}>
<div className="text-lg font-semibold tracking-tight leading-none">RK &amp; Co.</div>
<div className="text-xs leading-none mt-1 text-neutral-700">Chartered Accountants</div>
</a>
<nav className="hidden md:flex items-stretch">
<ul className="flex items-stretch text-sm">
<li><a className="flex items-center border-l px-5 border-neutral-200 hover:border-neutral-900" href="index.html">Home</a></li>
<li><a className="flex items-center border-l px-5 border-neutral-200 hover:border-neutral-900" href="about.html">About</a></li>
<li><a className="flex items-center border-l px-5 border-neutral-200 hover:border-neutral-900" href="services.html">Services</a></li>
<li><a className="flex items-center border-l px-5 border-neutral-200 hover:border-neutral-900" href="insights.html">Insights</a></li>
<li><a className="flex items-center border-x px-5 border-neutral-200 hover:border-neutral-900" href="contact.html">Contact</a></li>
</ul>
</nav>

<div className="md:hidden">
<button aria-controls="mobileNav" aria-expanded="false" aria-label="Toggle navigation" className="border px-3 py-2 text-xs focus:outline-none border-neutral-900 hover:border-neutral-600" id="navToggle">
            Menu
          </button>
</div>
</div>
<div className="hidden border-t md:hidden border-neutral-200" id="mobileNav">
<ul className="grid grid-cols-1 text-sm">
<li><a className="block border-b px-6 py-3 border-neutral-200 hover:border-neutral-900" href="index.html">Home</a></li>
<li><a className="block border-b px-6 py-3 border-neutral-200 hover:border-neutral-900" href="about.html">About</a></li>
<li><a className="block border-b px-6 py-3 border-neutral-200 hover:border-neutral-900" href="services.html">Services</a></li>
<li><a className="block border-b px-6 py-3 border-neutral-200 hover:border-neutral-900" href="insights.html">Insights</a></li>
<li><a className="block px-6 py-3 hover:border-neutral-900" href="contact.html">Contact</a></li>
</ul>
</div>
</div>
</header>

<div className="relative">
<div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
<div className="mx-auto max-w-screen-2xl h-full opacity-70">
<div className="h-40 sm:h-60 md:h-72 lg:h-80 bg-gradient-to-tr from-neutral-100 via-white to-neutral-100"></div>
</div>
</div>
</div>

<section className="mx-auto max-w-screen-2xl px-6">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-16">
<div className="lg:col-span-8 border p-10 relative overflow-hidden border-neutral-200 bg-white" data-reveal="">
<h1 className="text-4xl tracking-tight font-semibold leading-tight" style={{fontFamily: '\'Libre Baskerville\', serif'}}>
          Chartered Accountancy Services for Businesses That Value Precision
        </h1>
<p className="mt-6 text-base leading-relaxed">
          Helping businesses with compliance, taxation, audits, and financial clarity.
        </p>
<div className="mt-8 flex flex-wrap gap-4">
<a className="border px-5 py-3 text-sm transition border-neutral-900 hover:border-neutral-600" href="contact.html">Schedule a Consultation</a>
<a className="border px-5 py-3 text-sm transition border-neutral-900 hover:border-neutral-600" href="services.html">View Our Services</a>
</div>

<div className="mt-8 grid grid-cols-3 gap-3">
<img alt="Financial documents" className="h-28 w-full object-cover border border-neutral-200" src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<img alt="Compliance and audit" className="h-28 w-full object-cover border border-neutral-200" src="https://images.unsplash.com/photo-1523875194681-bedd468c58bf?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<img alt="Accounting and analysis" className="h-28 w-full object-cover border border-neutral-200" src="https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<aside className="lg:col-span-4 border p-8 border-neutral-200 bg-white" data-reveal="">
<figure className="mb-6">
<img alt="Professional workspace" className="w-full h-40 object-cover border border-neutral-200" src="https://images.unsplash.com/photo-1523958203904-cdcb402031fd?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</figure>
<div className="flex items-start gap-4">
<iconify-icon height="20" icon="lucide:shield-check" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
<div>
<div className="text-sm font-medium">Regulatory-first Approach</div>
<p className="text-xs mt-1 leading-relaxed">Policies aligned with ICAI standards, Companies Act, Income Tax, and GST rules.</p>
</div>
</div>
<div className="mt-6 flex items-start gap-4">
<iconify-icon height="20" icon="lucide:scale" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
<div>
<div className="text-sm font-medium">Independent Assurance</div>
<p className="text-xs mt-1 leading-relaxed">Clear reporting and defensible documentation for audits and reviews.</p>
</div>
</div>
<div className="mt-6 flex items-start gap-4">
<iconify-icon height="20" icon="lucide:banknote" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
<div>
<div className="text-sm font-medium">Value, Not Noise</div>
<p className="text-xs mt-1 leading-relaxed">Structured processes for founders, SMEs, and corporates needing predictability.</p>
</div>
</div>
</aside>
</div>
</section>

<section className="mx-auto max-w-screen-2xl px-6">
<div className="border p-10 border-neutral-200 bg-white" data-reveal="">
<h2 className="text-2xl tracking-tight font-semibold" style={{fontFamily: '\'Libre Baskerville\', serif'}}>Core Services</h2>
<div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<a className="group border p-6 transition border-neutral-200 hover:border-neutral-900" href="services.html#direct-taxation">
<div className="flex items-center gap-3">
<iconify-icon height="18" icon="lucide:indian-rupee" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<div className="text-sm font-medium">Taxation &amp; GST Compliance</div>
</div>
<p className="text-xs mt-3 leading-relaxed text-neutral-700">Returns, assessments, reconciliations, and representation.</p>
</a>
<a className="group border p-6 transition border-neutral-200 hover:border-neutral-900" href="services.html#audit-assurance">
<div className="flex items-center gap-3">
<iconify-icon height="18" icon="lucide:clipboard-check" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<div className="text-sm font-medium">Audit &amp; Assurance</div>
</div>
<p className="text-xs mt-3 leading-relaxed text-neutral-700">Statutory, tax, internal, and special purpose audits.</p>
</a>
<a className="group border p-6 transition border-neutral-200 hover:border-neutral-900" href="services.html#accounting">
<div className="flex items-center gap-3">
<iconify-icon height="18" icon="lucide:files" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<div className="text-sm font-medium">Accounting &amp; Bookkeeping</div>
</div>
<p className="text-xs mt-3 leading-relaxed text-neutral-700">Books, MIS, payroll, and controls for reliable reporting.</p>
</a>
<a className="group border p-6 transition border-neutral-200 hover:border-neutral-900" href="services.html#incorporation">
<div className="flex items-center gap-3">
<iconify-icon height="18" icon="lucide:building-2" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<div className="text-sm font-medium">Company Incorporation</div>
</div>
<p className="text-xs mt-3 leading-relaxed text-neutral-700">Entity selection, registration, and post-incorporation compliance.</p>
</a>
<a className="group border p-6 transition border-neutral-200 hover:border-neutral-900" href="services.html#advisory">
<div className="flex items-center gap-3">
<iconify-icon height="18" icon="lucide:line-chart" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<div className="text-sm font-medium">Financial Advisory</div>
</div>
<p className="text-xs mt-3 leading-relaxed text-neutral-700">Capital structure, cash flow, due diligence, and valuations.</p>
</a>
<a className="group border p-6 transition border-neutral-200 hover:border-neutral-900" href="services.html#roc">
<div className="flex items-center gap-3">
<iconify-icon height="18" icon="lucide:folder-lock" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<div className="text-sm font-medium">ROC &amp; Regulatory Filings</div>
</div>
<p className="text-xs mt-3 leading-relaxed text-neutral-700">Registrar filings, XBRL, event-based and annual compliance.</p>
</a>
</div>
</div>
</section>

<section className="mx-auto max-w-screen-2xl px-6 mt-12">
<div className="border p-10 border-neutral-200 bg-white" data-reveal="">
<h2 className="text-2xl tracking-tight font-semibold" style={{fontFamily: '\'Libre Baskerville\', serif'}}>Why Choose Us</h2>
<div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
<div className="border p-6 transition border-neutral-200 hover:border-neutral-900">
<div className="text-3xl tracking-tight font-semibold" style={{fontFamily: '\'Libre Baskerville\', serif'}}>10+</div>
<div className="text-sm mt-2 font-medium">Years of Experience</div>
<p className="text-xs mt-2 leading-relaxed text-neutral-700">Cross-industry statutory and tax mandates delivered on time.</p>
</div>
<div className="border p-6 transition border-neutral-200 hover:border-neutral-900">
<div className="text-3xl tracking-tight font-semibold" style={{fontFamily: '\'Libre Baskerville\', serif'}}>200+</div>
<div className="text-sm mt-2 font-medium">Clients Served</div>
<p className="text-xs mt-2 leading-relaxed text-neutral-700">Trusted by founders, SMEs, and corporate finance teams.</p>
</div>
<div className="border p-6 transition border-neutral-200 hover:border-neutral-900">
<div className="text-3xl tracking-tight font-semibold" style={{fontFamily: '\'Libre Baskerville\', serif'}}>Regulatory</div>
<div className="text-sm mt-2 font-medium">Depth &amp; Expertise</div>
<p className="text-xs mt-2 leading-relaxed text-neutral-700">Strong command of Income Tax, GST, and Companies Act.</p>
</div>
<div className="border p-6 transition border-neutral-200 hover:border-neutral-900">
<div className="text-3xl tracking-tight font-semibold" style={{fontFamily: '\'Libre Baskerville\', serif'}}>Ethics</div>
<div className="text-sm mt-2 font-medium">Non‑negotiable</div>
<p className="text-xs mt-2 leading-relaxed text-neutral-700">Independence, confidentiality, and diligence at every step.</p>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-screen-2xl px-6 mt-12">
<div className="border p-10 border-neutral-200 bg-white" data-reveal="">
<h2 className="text-2xl tracking-tight font-semibold" style={{fontFamily: '\'Libre Baskerville\', serif'}}>Industries Served</h2>
<div className="mt-8 grid grid-cols-2 md:grid-cols-5 gap-4">
<div className="border p-6 text-center text-sm font-medium transition border-neutral-200 hover:border-neutral-900">Startups</div>
<div className="border p-6 text-center text-sm font-medium transition border-neutral-200 hover:border-neutral-900">SMEs</div>
<div className="border p-6 text-center text-sm font-medium transition border-neutral-200 hover:border-neutral-900">Corporates</div>
<div className="border p-6 text-center text-sm font-medium transition border-neutral-200 hover:border-neutral-900">Professionals</div>
<div className="border p-6 text-center text-sm font-medium transition border-neutral-200 hover:border-neutral-900">NGOs</div>
</div>
</div>
</section>

<section className="mx-auto max-w-screen-2xl px-6 mt-12">
<div className="border p-10 border-neutral-200 bg-white" data-reveal="">
<div className="flex items-end justify-between gap-6">
<div>
<h2 className="text-2xl tracking-tight font-semibold" style={{fontFamily: '\'Libre Baskerville\', serif'}}>What Clients Say</h2>
<p className="mt-3 text-base leading-relaxed">On-time delivery, clear communication, and strong documentation.</p>
</div>
<div className="hidden md:flex items-center gap-2">
<button aria-label="Previous testimonial" className="border px-3 py-2 text-xs border-neutral-900 hover:border-neutral-600" id="prevTestimonial">
<iconify-icon height="16" icon="lucide:chevron-left" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</button>
<button aria-label="Next testimonial" className="border px-3 py-2 text-xs border-neutral-900 hover:border-neutral-600" id="nextTestimonial">
<iconify-icon height="16" icon="lucide:chevron-right" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</button>
</div>
</div>
<div className="mt-8 overflow-hidden">
<div className="flex transition-transform duration-500 will-change-transform" id="testimonialTrack">

<div className="min-w-full pr-4">
<div className="border p-6 border-neutral-200">
<div className="flex items-center gap-3">
<img alt="Client portrait" className="h-12 w-12 object-cover border border-neutral-200" src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&amp;w=640&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm font-medium">Founder, SaaS Startup</div>
<div className="text-xs text-neutral-600">GST &amp; Audit</div>
</div>
</div>
<p className="text-xs mt-3 leading-relaxed text-neutral-700">They set up our GST and handled our audits with zero surprises. Super responsive and meticulous.</p>
</div>
</div>
<div className="min-w-full pr-4">
<div className="border p-6 border-neutral-200">
<div className="flex items-center gap-3">
<img alt="Client portrait" className="h-12 w-12 object-cover border border-neutral-200" src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&amp;w=640&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm font-medium">CFO, Manufacturing SME</div>
<div className="text-xs text-neutral-600">Compliance &amp; Advisory</div>
</div>
</div>
<p className="text-xs mt-3 leading-relaxed text-neutral-700">Clarity on processes, well‑documented workpapers, and realistic timelines. Highly recommended.</p>
</div>
</div>
<div className="min-w-full pr-4">
<div className="border p-6 border-neutral-200">
<div className="flex items-center gap-3">
<img alt="Client portrait" className="h-12 w-12 object-cover border border-neutral-200" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=640&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm font-medium">Promoter, Family Office</div>
<div className="text-xs text-neutral-600">Direct Tax</div>
</div>
</div>
<p className="text-xs mt-3 leading-relaxed text-neutral-700">Our tax posture is now clean and defensible. They care about detail and documentation.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-screen-2xl px-6 mt-16">
<div className="border p-10 border-neutral-200 bg-white" data-reveal="">
<div className="flex items-end justify-between gap-6">
<div>
<h2 className="text-2xl tracking-tight font-semibold" style={{fontFamily: '\'Libre Baskerville\', serif'}}>Insights &amp; Updates</h2>
<p className="mt-3 text-base leading-relaxed">Practical notes on taxes, compliance, and financial operations.</p>
</div>
<a className="hidden md:inline-flex border px-5 py-3 text-sm border-neutral-900 hover:border-neutral-600" href="insights.html">View All</a>
</div>
<div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
<article className="group border transition border-neutral-200 hover:border-neutral-900">
<img alt="GST Reconciliation" className="w-full h-36 object-cover border-b border-neutral-200" src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="p-6">
<div className="text-xs text-neutral-600">GST Updates • 12 Feb 2026</div>
<h3 className="mt-2 text-lg tracking-tight font-semibold" style={{fontFamily: '\'Libre Baskerville\', serif'}}>Annual GST Reconciliation: What to Check Before Filing</h3>
<p className="mt-3 text-xs leading-relaxed text-neutral-700">A checklist covering ITC matching, e‑invoice coverage, HSN accuracy, and documentation for assessments.</p>
<a className="mt-4 inline-block border px-4 py-2 text-xs border-neutral-900 hover:border-neutral-600" href="insights.html">Read</a>
</div>
</article>
<article className="group border transition border-neutral-200 hover:border-neutral-900">
<img alt="Advance Tax" className="w-full h-36 object-cover border-b border-neutral-200" src="https://images.unsplash.com/photo-1516245834210-c4c142787335?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="p-6">
<div className="text-xs text-neutral-600">Income Tax • 28 Jan 2026</div>
<h3 className="mt-2 text-lg tracking-tight font-semibold" style={{fontFamily: '\'Libre Baskerville\', serif'}}>Advance Tax &amp; Interest: Avoiding 234B/234C Pitfalls</h3>
<p className="mt-3 text-xs leading-relaxed text-neutral-700">Planning installments and reconciling advance tax to reduce interest exposure and notices.</p>
<a className="mt-4 inline-block border px-4 py-2 text-xs border-neutral-900 hover:border-neutral-600" href="insights.html">Read</a>
</div>
</article>
<article className="group border transition border-neutral-200 hover:border-neutral-900">
<img alt="Financial Close SOPs" className="w-full h-36 object-cover border-b border-neutral-200" src="https://images.unsplash.com/photo-1529336953121-a0fc1f0516ea?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="p-6">
<div className="text-xs text-neutral-600">Compliance • 15 Jan 2026</div>
<h3 className="mt-2 text-lg tracking-tight font-semibold" style={{fontFamily: '\'Libre Baskerville\', serif'}}>Financial Close SOPs for SMEs</h3>
<p className="mt-3 text-xs leading-relaxed text-neutral-700">Month‑end and year‑end routines, reconciliations, and controls to reduce audit adjustments.</p>
<a className="mt-4 inline-block border px-4 py-2 text-xs border-neutral-900 hover:border-neutral-600" href="insights.html">Read</a>
</div>
</article>
</div>
</div>
</section>

<footer className="border-t mt-16 border-neutral-200">
<div className="mx-auto max-w-screen-2xl px-6">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-10 py-12">
<div className="lg:col-span-4">
<div className="text-lg tracking-tight font-semibold" style={{fontFamily: '\'Libre Baskerville\', serif'}}>RK &amp; Co.</div>
<div className="text-xs mt-2">Chartered Accountants</div>
<div className="text-xs mt-4">ICAI Reg. No.: FRN 000000W</div>
</div>
<div className="lg:col-span-4">
<div className="text-sm font-medium">Address</div>
<p className="text-xs mt-2 leading-relaxed">
            101 Corporate House, Business District
            New Delhi, 110001, India
          </p>
</div>
<div className="lg:col-span-4">
<div className="text-sm font-medium">Disclaimer</div>
<p className="text-xs mt-2 leading-relaxed">
            This website is for information only and complies with ICAI guidelines. No solicitation or advertisement is intended. Engagements commence only after formal acceptance and KYC.
          </p>
</div>
</div>
<div className="border-t py-6 text-xs flex items-center justify-between border-neutral-200">
<div>© <span id="year"></span> RK &amp; Co. All rights reserved.</div>
<div className="flex items-center gap-6">
<a className="hover:underline underline-offset-4" href="about.html">About</a>
<a className="hover:underline underline-offset-4" href="services.html">Services</a>
<a className="hover:underline underline-offset-4" href="insights.html">Insights</a>
<a className="hover:underline underline-offset-4" href="contact.html">Contact</a>
</div>
</div>
</div>
<button aria-label="Back to top" className="fixed bottom-6 right-6 hidden border px-4 py-2 text-xs border-neutral-900 bg-white/90 hover:border-neutral-600" id="toTop">
<div className="flex items-center gap-2">
<iconify-icon height="16" icon="lucide:arrow-up" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
        Top
      </div>
</button>
</footer>

<div style={{position: 'fixed', left: '-9999rem', top: '-9999rem', fontFamily: '\'Libre Baskerville\',serif,\'Times New Roman\',Times'}}></div>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1" name="viewport"/>
<title>About — RK &amp; Co.</title>
<meta content="About RK &amp; Co., a Chartered Accountancy practice focused on rigorous compliance, precise reporting, and practical guidance." name="description"/>
<link href="https://fonts.googleapis.com" rel="preconnect"/>
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&amp;family=Libre+Baskerville:wght@400;700&amp;display=swap" rel="stylesheet"/>


<header className="border-b sticky top-0 z-50 backdrop-blur border-neutral-200 bg-white/80">
<div className="mx-auto max-w-screen-2xl">
<div className="flex items-center justify-between px-6">
<a className="block py-4" href="index.html" style={{fontFamily: '\'Libre Baskerville\', serif'}}>
<div className="text-lg font-semibold tracking-tight leading-none">RK &amp; Co.</div>
<div className="text-xs leading-none mt-1 text-neutral-700">Chartered Accountants</div>
</a>
<nav className="hidden md:flex items-stretch">
<ul className="flex items-stretch text-sm">
<li><a className="flex items-center border-l px-5 border-neutral-200 hover:border-neutral-900" href="index.html">Home</a></li>
<li><a aria-current="page" className="flex items-center border-l px-5 border-neutral-900" href="about.html">About</a></li>
<li><a className="flex items-center border-l px-5 border-neutral-200 hover:border-neutral-900" href="services.html">Services</a></li>
<li><a className="flex items-center border-l px-5 border-neutral-200 hover:border-neutral-900" href="insights.html">Insights</a></li>
<li><a className="flex items-center border-x px-5 border-neutral-200 hover:border-neutral-900" href="contact.html">Contact</a></li>
</ul>
</nav>
<div className="md:hidden">
<button className="border px-3 py-2 text-xs border-neutral-900 hover:border-neutral-600" id="navToggle">Menu</button>
</div>
</div>
<div className="hidden border-t md:hidden border-neutral-200" id="mobileNav">
<ul className="grid grid-cols-1 text-sm">
<li><a className="block border-b px-6 py-3 border-neutral-200" href="index.html">Home</a></li>
<li><a className="block border-b px-6 py-3 border-neutral-200" href="about.html">About</a></li>
<li><a className="block border-b px-6 py-3 border-neutral-200" href="services.html">Services</a></li>
<li><a className="block border-b px-6 py-3 border-neutral-200" href="insights.html">Insights</a></li>
<li><a className="block px-6 py-3" href="contact.html">Contact</a></li>
</ul>
</div>
</div>
</header>
<section className="mx-auto max-w-screen-2xl px-6 mt-12">
<div className="border p-10 border-neutral-200 bg-white" data-reveal="">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
<div className="lg:col-span-7">
<h1 className="text-2xl tracking-tight font-semibold" style={{fontFamily: '\'Libre Baskerville\', serif'}}>About the Firm</h1>
<p className="mt-6 text-base leading-relaxed">
            We are a Chartered Accountancy practice focused on rigorous compliance, precise reporting, and practical guidance for decision-makers. Our philosophy is straightforward: clarity over complexity, documentation over ambiguity, and ethics over expediency.
          </p>
<p className="mt-4 text-base leading-relaxed">
            We align engagements with statutory frameworks and industry controls, ensuring dependable outcomes for audits, taxation, and governance. Engagements are tightly scoped, timelines are honored, and communication is structured.
          </p>
<div className="mt-6 grid grid-cols-2 gap-4">
<div className="border p-5 transition border-neutral-200 hover:border-neutral-900">
<div className="text-sm font-medium">Integrity</div>
<p className="text-xs mt-2 leading-relaxed text-neutral-700">We uphold independence and transparency across all engagements.</p>
</div>
<div className="border p-5 transition border-neutral-200 hover:border-neutral-900">
<div className="text-sm font-medium">Compliance</div>
<p className="text-xs mt-2 leading-relaxed text-neutral-700">Processes aligned to statutory requirements and auditability.</p>
</div>
<div className="border p-5 transition border-neutral-200 hover:border-neutral-900">
<div className="text-sm font-medium">Client‑first</div>
<p className="text-xs mt-2 leading-relaxed text-neutral-700">Clarity, predictability, and on-time delivery.</p>
</div>
<div className="border p-5 transition border-neutral-200 hover:border-neutral-900">
<div className="text-sm font-medium">Confidentiality</div>
<p className="text-xs mt-2 leading-relaxed text-neutral-700">Robust protocols for data security and restricted access.</p>
</div>
</div>
</div>
<div className="lg:col-span-5">
<div className="border p-6 border-neutral-200">
<div className="grid grid-cols-3 gap-6">
<div className="col-span-1 h-full min-h-36">
<img alt="R. Kapoor portrait" className="w-full h-full object-cover border border-neutral-200" src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="col-span-2">
<div className="text-lg tracking-tight font-semibold" style={{fontFamily: '\'Libre Baskerville\', serif'}}>R. Kapoor</div>
<div className="text-sm mt-1">Partner, Chartered Accountant</div>
<ul className="mt-4 space-y-2 text-xs leading-relaxed">
<li className="flex items-start gap-2">
<iconify-icon height="16" icon="lucide:badge-check" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
<span>ICAI Membership: </span>
</li>
<li className="flex items-start gap-2">
<iconify-icon height="16" icon="lucide:calendar" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
<span>Experience: </span>
</li>
<li className="flex items-start gap-2">
<iconify-icon height="16" icon="lucide:graduation-cap" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
<span>Qualifications: </span>
</li>
</ul>
</div>
</div>
</div>

<div className="mt-6 border p-6 border-neutral-200" data-reveal="">
<div className="text-sm font-medium">Milestones</div>
<ol className="mt-4 space-y-4">
<li className="flex items-start gap-3">
<iconify-icon height="18" icon="lucide:check-circle-2" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<span className="text-xs leading-relaxed">2014 — Firm incorporated and ICAI registered</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon height="18" icon="lucide:check-circle-2" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<span className="text-xs leading-relaxed">2018 — 100+ clients across sectors</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon height="18" icon="lucide:check-circle-2" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<span className="text-xs leading-relaxed">2023 — Expansion into advisory &amp; due diligence</span>
</li>
</ol>
</div>
</div>
</div>
</div>
</section>
<footer className="border-t mt-16 border-neutral-200">
<div className="mx-auto max-w-screen-2xl px-6">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-10 py-12">
<div className="lg:col-span-4">
<div className="text-lg tracking-tight font-semibold" style={{fontFamily: '\'Libre Baskerville\', serif'}}>RK &amp; Co.</div>
<div className="text-xs mt-2">Chartered Accountants</div>
<div className="text-xs mt-4">ICAI Reg. No.: FRN 000000W</div>
</div>
<div className="lg:col-span-4">
<div className="text-sm font-medium">Address</div>
<p className="text-xs mt-2 leading-relaxed">
            101 Corporate House, Business District
            New Delhi, 110001, India
          </p>
</div>
<div className="lg:col-span-4">
<div className="text-sm font-medium">Disclaimer</div>
<p className="text-xs mt-2 leading-relaxed">
            This website is for information only and complies with ICAI guidelines. No solicitation or advertisement is intended. Engagements commence only after formal acceptance and KYC.
          </p>
</div>
</div>
<div className="border-t py-6 text-xs flex items-center justify-between border-neutral-200">
<div>© <span id="year"></span> RK &amp; Co. All rights reserved.</div>
<div className="flex items-center gap-6">
<a className="hover:underline underline-offset-4" href="about.html">About</a>
<a className="hover:underline underline-offset-4" href="services.html">Services</a>
<a className="hover:underline underline-offset-4" href="insights.html">Insights</a>
<a className="hover:underline underline-offset-4" href="contact.html">Contact</a>
</div>
</div>
</div>
</footer>

<div style={{position: 'fixed', left: '-9999rem', top: '-9999rem', fontFamily: '\'Libre Baskerville\',serif,\'Times New Roman\',Times'}}></div>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1" name="viewport"/>
<title>Services — RK &amp; Co.</title>
<meta content="Structured service lines with clear scope, eligibility, and regulatory outcomes." name="description"/>
<link href="https://fonts.googleapis.com" rel="preconnect"/>
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&amp;family=Libre+Baskerville:wght@400;700&amp;display=swap" rel="stylesheet"/>


<header className="border-b sticky top-0 z-50 backdrop-blur border-neutral-200 bg-white/80">
<div className="mx-auto max-w-screen-2xl">
<div className="flex items-center justify-between px-6">
<a className="block py-4" href="index.html" style={{fontFamily: '\'Libre Baskerville\', serif'}}>
<div className="text-lg font-semibold tracking-tight leading-none">RK &amp; Co.</div>
<div className="text-xs leading-none mt-1 text-neutral-700">Chartered Accountants</div>
</a>
<nav className="hidden md:flex items-stretch">
<ul className="flex items-stretch text-sm">
<li><a className="flex items-center border-l px-5 border-neutral-200 hover:border-neutral-900" href="index.html">Home</a></li>
<li><a className="flex items-center border-l px-5 border-neutral-200 hover:border-neutral-900" href="about.html">About</a></li>
<li><a aria-current="page" className="flex items-center border-l px-5 border-neutral-900" href="services.html">Services</a></li>
<li><a className="flex items-center border-l px-5 border-neutral-200 hover:border-neutral-900" href="insights.html">Insights</a></li>
<li><a className="flex items-center border-x px-5 border-neutral-200 hover:border-neutral-900" href="contact.html">Contact</a></li>
</ul>
</nav>
<div className="md:hidden">
<button className="border px-3 py-2 text-xs border-neutral-900 hover:border-neutral-600" id="navToggle">Menu</button>
</div>
</div>
<div className="hidden border-t md:hidden border-neutral-200" id="mobileNav">
<ul className="grid grid-cols-1 text-sm">
<li><a className="block border-b px-6 py-3 border-neutral-200" href="index.html">Home</a></li>
<li><a className="block border-b px-6 py-3 border-neutral-200" href="about.html">About</a></li>
<li><a className="block border-b px-6 py-3 border-neutral-200" href="services.html">Services</a></li>
<li><a className="block border-b px-6 py-3 border-neutral-200" href="insights.html">Insights</a></li>
<li><a className="block px-6 py-3" href="contact.html">Contact</a></li>
</ul>
</div>
</div>
</header>
<section className="mx-auto max-w-screen-2xl px-6 mt-12">
<div className="border border-neutral-200 bg-white">
<div className="p-10 border-b border-neutral-200" data-reveal="">
<h1 className="text-2xl tracking-tight font-semibold" style={{fontFamily: '\'Libre Baskerville\', serif'}}>Services</h1>
<p className="mt-4 text-base leading-relaxed">Structured service lines with clear scope, eligibility, and regulatory outcomes.</p>

<div className="mt-6 flex flex-wrap gap-3">
<button className="border px-4 py-2 text-xs border-neutral-900 hover:border-neutral-600" data-filter="all">All</button>
<button className="border px-4 py-2 text-xs border-neutral-200 hover:border-neutral-900" data-filter="tax">Taxation</button>
<button className="border px-4 py-2 text-xs border-neutral-200 hover:border-neutral-900" data-filter="audit">Audit</button>
<button className="border px-4 py-2 text-xs border-neutral-200 hover:border-neutral-900" data-filter="accounting">Accounting</button>
<button className="border px-4 py-2 text-xs border-neutral-200 hover:border-neutral-900" data-filter="roc">ROC</button>
<button className="border px-4 py-2 text-xs border-neutral-200 hover:border-neutral-900" data-filter="advisory">Advisory</button>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border-b service-row border-neutral-200" data-cat="tax" data-reveal="" id="direct-taxation">
<div className="lg:col-span-3 border-r p-6 border-neutral-200">
<div className="text-sm font-medium">Direct Taxation</div>
<p className="text-xs mt-2 leading-relaxed text-neutral-700">Corporate and individual income tax advisory and compliance.</p>
<button aria-expanded="false" className="mt-3 inline-flex items-center gap-2 text-xs underline underline-offset-4 toggle-row">
<iconify-icon height="16" icon="lucide:chevron-down" style={{strokeWidth: '1.5'}} width="16"></iconify-icon> Details
          </button>
</div>
<div className="lg:col-span-3 border-r p-6 border-neutral-200">
<div className="text-xs font-medium text-neutral-700">Who it is for</div>
<ul className="mt-2 text-xs leading-relaxed list-disc pl-5">
<li>Companies and LLPs</li>
<li>High‑earning professionals</li>
<li>Promoters &amp; family offices</li>
</ul>
</div>
<div className="lg:col-span-4 border-r p-6 border-neutral-200">
<div className="text-xs font-medium text-neutral-700">Scope</div>
<ul className="mt-2 text-xs leading-relaxed list-disc pl-5">
<li>Return filing, TDS/TCS, 26AS reconciliation</li>
<li>Assessments and representations</li>
<li>Tax planning aligned with law</li>
</ul>
</div>
<div className="lg:col-span-2 p-6">
<div className="text-xs font-medium text-neutral-700">Regulatory Value</div>
<p className="text-xs mt-2 leading-relaxed">Compliant tax posture with defensible documentation.</p>
</div>

<div className="col-span-1 lg:col-span-12 border-t p-6 hidden border-neutral-200">
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<img alt="Direct tax documentation" className="h-36 w-full object-cover border border-neutral-200" src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<img alt="Financial planning" className="h-36 w-full object-cover border border-neutral-200" src="https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<img alt="Tax compliance" className="h-36 w-full object-cover border border-neutral-200" src="https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border-b service-row border-neutral-200" data-cat="tax" data-reveal="">
<div className="lg:col-span-3 border-r p-6 border-neutral-200">
<div className="text-sm font-medium">Indirect Taxation (GST)</div>
<p className="text-xs mt-2 leading-relaxed text-neutral-700">Registrations, returns, reconciliations, and audits.</p>
<button aria-expanded="false" className="mt-3 inline-flex items-center gap-2 text-xs underline underline-offset-4 toggle-row">
<iconify-icon height="16" icon="lucide:chevron-down" style={{strokeWidth: '1.5'}} width="16"></iconify-icon> Details
          </button>
</div>
<div className="lg:col-span-3 border-r p-6 border-neutral-200">
<div className="text-xs font-medium text-neutral-700">Who it is for</div>
<ul className="mt-2 text-xs leading-relaxed list-disc pl-5">
<li>Goods and service providers</li>
<li>E‑commerce and SaaS</li>
<li>Exporters/SEZ units</li>
</ul>
</div>
<div className="lg:col-span-4 border-r p-6 border-neutral-200">
<div className="text-xs font-medium text-neutral-700">Scope</div>
<ul className="mt-2 text-xs leading-relaxed list-disc pl-5">
<li>GSTR‑1/3B filing, ITC matching, annual returns</li>
<li>E‑invoice/E‑way bill support</li>
<li>GST health checks and audits</li>
</ul>
</div>
<div className="lg:col-span-2 p-6">
<div className="text-xs font-medium text-neutral-700">Regulatory Value</div>
<p className="text-xs mt-2 leading-relaxed">Lower exposure to notices and interest/penalties.</p>
</div>
<div className="col-span-1 lg:col-span-12 border-t p-6 hidden border-neutral-200">
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<img alt="GST documentation" className="h-36 w-full object-cover border border-neutral-200" src="https://images.unsplash.com/photo-1543286386-2e659306cd6c?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<img alt="Invoices and records" className="h-36 w-full object-cover border border-neutral-200" src="https://images.unsplash.com/photo-1556742031-c6961e8560b0?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<img alt="Audit workspace" className="h-36 w-full object-cover border border-neutral-200" src="https://images.unsplash.com/photo-1523958203904-cdcb402031fd?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border-b service-row border-neutral-200" data-cat="audit" data-reveal="" id="audit-assurance">
<div className="lg:col-span-3 border-r p-6 border-neutral-200">
<div className="text-sm font-medium">Audit &amp; Assurance</div>
<p className="text-xs mt-2 leading-relaxed text-neutral-700">Independent examinations for statutory and internal control.</p>
<button aria-expanded="false" className="mt-3 inline-flex items-center gap-2 text-xs underline underline-offset-4 toggle-row">
<iconify-icon height="16" icon="lucide:chevron-down" style={{strokeWidth: '1.5'}} width="16"></iconify-icon> Details
          </button>
</div>
<div className="lg:col-span-3 border-r p-6 border-neutral-200">
<div className="text-xs font-medium text-neutral-700">Who it is for</div>
<ul className="mt-2 text-xs leading-relaxed list-disc pl-5">
<li>Companies and LLPs</li>
<li>Trusts and NGOs</li>
<li>Special purpose engagements</li>
</ul>
</div>
<div className="lg:col-span-4 border-r p-6 border-neutral-200">
<div className="text-xs font-medium text-neutral-700">Scope</div>
<ul className="mt-2 text-xs leading-relaxed list-disc pl-5">
<li>Statutory and tax audits</li>
<li>Internal, risk-based, and process audits</li>
<li>Agreed-upon procedures and reviews</li>
</ul>
</div>
<div className="lg:col-span-2 p-6">
<div className="text-xs font-medium text-neutral-700">Regulatory Value</div>
<p className="text-xs mt-2 leading-relaxed">Credible financial statements and governance confidence.</p>
</div>
<div className="col-span-1 lg:col-span-12 border-t p-6 hidden border-neutral-200">
<img alt="Audit review" className="h-40 w-full object-cover border border-neutral-200" src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border-b service-row border-neutral-200" data-cat="accounting" data-reveal="" id="accounting">
<div className="lg:col-span-3 border-r p-6 border-neutral-200">
<div className="text-sm font-medium">Accounting &amp; Payroll</div>
<p className="text-xs mt-2 leading-relaxed text-neutral-700">Books, reconciliations, payroll, and month‑end closes.</p>
<button aria-expanded="false" className="mt-3 inline-flex items-center gap-2 text-xs underline underline-offset-4 toggle-row">
<iconify-icon height="16" icon="lucide:chevron-down" style={{strokeWidth: '1.5'}} width="16"></iconify-icon> Details
          </button>
</div>
<div className="lg:col-span-3 border-r p-6 border-neutral-200">
<div className="text-xs font-medium text-neutral-700">Who it is for</div>
<ul className="mt-2 text-xs leading-relaxed list-disc pl-5">
<li>Early-stage to growth SMEs</li>
<li>VC funded entities</li>
<li>Multi-entity groups</li>
</ul>
</div>
<div className="lg:col-span-4 border-r p-6 border-neutral-200">
<div className="text-xs font-medium text-neutral-700">Scope</div>
<ul className="mt-2 text-xs leading-relaxed list-disc pl-5">
<li>GL, AR/AP, bank and ledger reconciliations</li>
<li>Payroll processing and compliance</li>
<li>MIS and management reporting</li>
</ul>
</div>
<div className="lg:col-span-2 p-6">
<div className="text-xs font-medium text-neutral-700">Regulatory Value</div>
<p className="text-xs mt-2 leading-relaxed">Accurate books to support tax and audit readiness.</p>
</div>
<div className="col-span-1 lg:col-span-12 border-t p-6 hidden border-neutral-200">
<img alt="Accounting systems" className="h-40 w-full object-cover border border-neutral-200" src="https://images.unsplash.com/photo-1516387938699-a93567ec168e?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border-b service-row border-neutral-200" data-cat="roc" data-reveal="" id="roc">
<div className="lg:col-span-3 border-r p-6 border-neutral-200">
<div className="text-sm font-medium">Company Law &amp; ROC</div>
<p className="text-xs mt-2 leading-relaxed text-neutral-700">Lifecycle compliance under Companies Act and related rules.</p>
<button aria-expanded="false" className="mt-3 inline-flex items-center gap-2 text-xs underline underline-offset-4 toggle-row">
<iconify-icon height="16" icon="lucide:chevron-down" style={{strokeWidth: '1.5'}} width="16"></iconify-icon> Details
          </button>
</div>
<div className="lg:col-span-3 border-r p-6 border-neutral-200">
<div className="text-xs font-medium text-neutral-700">Who it is for</div>
<ul className="mt-2 text-xs leading-relaxed list-disc pl-5">
<li>Private/Public companies</li>
<li>LLPs and subsidiaries</li>
<li>Boards and Company Secretaries</li>
</ul>
</div>
<div className="lg:col-span-4 border-r p-6 border-neutral-200">
<div className="text-xs font-medium text-neutral-700">Scope</div>
<ul className="mt-2 text-xs leading-relaxed list-disc pl-5">
<li>Annual filings, XBRL, event-based compliance</li>
<li>Alterations: capital, director, registered office</li>
<li>Board and AGM documentation</li>
</ul>
</div>
<div className="lg:col-span-2 p-6">
<div className="text-xs font-medium text-neutral-700">Regulatory Value</div>
<p className="text-xs mt-2 leading-relaxed">Good standing and risk reduction with MCA/ROC.</p>
</div>
<div className="col-span-1 lg:col-span-12 border-t p-6 hidden border-neutral-200">
<img alt="Corporate filings" className="h-40 w-full object-cover border border-neutral-200" src="https://images.unsplash.com/photo-1588702547919-26089e690ecc?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-0 service-row" data-cat="advisory" data-reveal="" id="advisory">
<div className="lg:col-span-3 border-r p-6 border-neutral-200">
<div className="text-sm font-medium">Advisory &amp; Consulting</div>
<p className="text-xs mt-2 leading-relaxed text-neutral-700">Transaction support, controls, and performance insights.</p>
<button aria-expanded="false" className="mt-3 inline-flex items-center gap-2 text-xs underline underline-offset-4 toggle-row">
<iconify-icon height="16" icon="lucide:chevron-down" style={{strokeWidth: '1.5'}} width="16"></iconify-icon> Details
          </button>
</div>
<div className="lg:col-span-3 border-r p-6 border-neutral-200">
<div className="text-xs font-medium text-neutral-700">Who it is for</div>
<ul className="mt-2 text-xs leading-relaxed list-disc pl-5">
<li>Founders and CFOs</li>
<li>Investor‑backed entities</li>
<li>Enterprises in transformation</li>
</ul>
</div>
<div className="lg:col-span-4 border-r p-6 border-neutral-200">
<div className="text-xs font-medium text-neutral-700">Scope</div>
<ul className="mt-2 text-xs leading-relaxed list-disc pl-5">
<li>Due diligence and valuations</li>
<li>Internal controls and SOPs</li>
<li>Board/MIS reporting frameworks</li>
</ul>
</div>
<div className="lg:col-span-2 p-6">
<div className="text-xs font-medium text-neutral-700">Regulatory Value</div>
<p className="text-xs mt-2 leading-relaxed">Better governance and audit readiness through controls.</p>
</div>
</div></div></section>
    </>
  );
}
