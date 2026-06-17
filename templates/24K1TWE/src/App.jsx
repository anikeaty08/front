import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const originalAddEventListener = document.addEventListener;
    const originalWindowAddEventListener = window.addEventListener;
    
    document.addEventListener = function(event, callback, options) {
      if (event === 'DOMContentLoaded') {
        setTimeout(() => {
          try { callback(new Event('DOMContentLoaded')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalAddEventListener.call(document, event, callback, options);
      }
    };
    
    window.addEventListener = function(event, callback, options) {
      if (event === 'load') {
        setTimeout(() => {
          try { callback(new Event('load')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalWindowAddEventListener.call(window, event, callback, options);
      }
    };
    
    let onloadHandler = null;
    try {
      Object.defineProperty(window, 'onload', {
        set: function(fn) {
          onloadHandler = fn;
          setTimeout(() => {
            try { if (typeof fn === 'function') fn(); } catch (e) { console.error(e); }
          }, 0);
        },
        get: function() { return onloadHandler; },
        configurable: true
      });
    } catch (e) {}
    try {
      
      // Lucide
      window.addEventListener('DOMContentLoaded', () => {
        if (window.lucide) lucide.createIcons();
      });

      // Year
      document.getElementById('year').textContent = new Date().getFullYear();

      // Impact counters
      const counters = document.querySelectorAll('.counter');
      const easeOut = t => 1 - Math.pow(1 - t, 3);

      const runCounter = (el) => {
        const target = +el.getAttribute('data-target');
        const duration = 1800;
        const start = performance.now();

        const tick = (now) => {
          const p = Math.min(1, (now - start)/duration);
          const val = Math.floor(easeOut(p) * target);
          el.textContent = val.toLocaleString();
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      };

      const io = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            runCounter(entry.target);
            io.unobserve(entry.target);
          }
        });
      }, { threshold: 0.3 });

      counters.forEach(c => io.observe(c));
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      

<div className="texture fixed inset-0"></div>

<header className="sticky top-0 z-50 backdrop-blur-xl">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between py-4">
<a className="flex items-center gap-3" href="#">
<div className="h-9 w-9 rounded-lg surface grid place-items-center bevel">
<i className="h-5 w-5" data-lucide="recycle" style={{color: 'var(--accent)'}}></i>
</div>
<span className="text-[20px] tracking-tight font-semibold">CircularForge</span>
</a>
<nav className="hidden md:flex items-center gap-8 text-[14px]">
<a className="text-[14px] text-[color:var(--muted)] hover:text-[color:var(--text)]" href="#how">How it Works</a>
<a className="text-[14px] text-[color:var(--muted)] hover:text-[color:var(--text)]" href="#businesses">For Businesses</a>
<a className="text-[14px] text-[color:var(--muted)] hover:text-[color:var(--text)]" href="#designers">For Designers</a>
<a className="text-[14px] text-[color:var(--muted)] hover:text-[color:var(--text)]" href="#about">About</a>
</nav>
<div className="flex items-center gap-3">
<a className="btn-primary rounded-md px-4 py-2 text-[14px] font-medium bevel" href="#">Login</a>
<a className="btn-outline rounded-md px-4 py-2 text-[14px] font-medium border bevel hidden sm:inline-flex" href="#">Sign Up</a>
</div>
</div>
</div>
</header>

<section className="relative pt-10 sm:pt-14 pb-12 sm:pb-16">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 hero-grid items-stretch">

<div className="flex flex-col justify-between">
<div className="surface rounded-2xl p-6 sm:p-8 h-full">
<div className="max-w-2xl">
<h1 className="text-[40px] sm:text-[52px] leading-[1.05] tracking-tight font-semibold">
                Where Industrial Waste Finds New Purpose
              </h1>
<p className="mt-4 text-[16px] sm:text-[18px] text-[color:var(--muted)]">
                The B2B marketplace for upcycling industrial materials into innovative, eco-designed products.
              </p>
<div className="mt-8 flex flex-col sm:flex-row gap-3">
<a className="btn-primary rounded-md px-5 py-3 text-[15px] font-medium inline-flex items-center justify-center gap-2 bevel" href="#">
<i className="h-4 w-4" data-lucide="rocket" style={{color: '#0d1b16'}}></i>
                  Post a Design Challenge
                </a>
<a className="btn-outline rounded-md px-5 py-3 text-[15px] font-medium inline-flex items-center justify-center gap-2 border bevel" href="#">
<i className="h-4 w-4" data-lucide="pen-tool" style={{color: 'var(--accent)'}}></i>
                  Apply to Be a Designer
                </a>
</div>
<div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
<div className="surface rounded-lg p-3 flex items-center gap-2">
<i className="h-4 w-4" data-lucide="check-circle" style={{color: 'var(--accent)'}}></i>
<span className="text-[13px] text-[colorvar(--muted)]">Verified suppliers</span>
</div>
<div className="surface rounded-lg p-3 flex items-center gap-2">
<i className="h-4 w-4" data-lucide="shield" style={{color: 'var(--accent)'}}></i>
<span className="text-[13px] text-[color:var(--muted)]">Secure contracts</span>
</div>
<div className="surface rounded-lg p-3 flex items-center gap-2">
<i className="h-4 w-4" data-lucide="leaf" style={{color: 'var(--accent)'}}></i>
<span className="text-[13px] text-[color:var(--muted)]">Circular by design</span>
</div>
<div className="surface rounded-lg p-3 flex items-center gap-2">
<i className="h-4 w-4" data-lucide="clock" style={{color: 'var(--accent)'}}></i>
<span className="text-[13px] text-[color:var(--muted)]">Faster delivery</span>
</div>
</div>
</div>
</div>
</div>

<div className="grid grid-rows-6 gap-4">
<div className="row-span-4 surface rounded-2xl p-0 overflow-hidden relative ring-gradient">
<div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&amp;w=1800&amp;auto=format&amp;fit=crop')] bg-cover bg-center"></div>

<div className="relative h-full w-full grid place-items-center">
<svg className="w-full h-full" viewbox="0 0 600 400">
<defs>
<lineargradient id="g1" x1="0" x2="1" y1="0" y2="1">
<stop offset="0%" stop-color="rgba(57,255,20,0.7)"></stop>
<stop offset="100%" stop-color="rgba(57,255,20,0.1)"></stop>
</lineargradient>
<filter id="glow">
<fegaussianblur result="b" stddeviation="2.5"></fegaussianblur>
<femerge><femergenode in="b"></femergenode><femergenode in="SourceGraphic"></femergenode></femerge>
</filter>
</defs>
<g transform="translate(300,200)">

<circle fill="none" filter="url(#glow)" r="140" stroke="url(#g1)" strokeWidth="2.2"></circle>
<circle fill="none" filter="url(#glow)" r="100" stroke="rgba(57,255,20,0.55)" stroke-dasharray="6 10" strokeWidth="1.8"></circle>
<circle fill="none" filter="url(#glow)" r="60" stroke="rgba(57,255,20,0.45)" stroke-dasharray="2 8" strokeWidth="1.4"></circle>

<g fill="none" filter="url(#glow)" stroke="rgba(57,255,20,0.8)" strokeWidth="1.6">
<path d="M-180,0 C-120,-120,120,-120,180,0"></path>
<polygon fill="rgba(57,255,20,0.8)" points="180,0 170,-5 170,5"></polygon>
<path d="M-160,40 C-80,140,80,140,160,40"></path>
<polygon fill="rgba(57,255,20,0.8)" points="160,40 150,35 150,45"></polygon>
</g>
</g>
</svg>
</div>

<div className="absolute top-4 left-4 surface rounded-full px-3 py-1.5 flex items-center gap-2">
<i className="h-4 w-4" data-lucide="sparkles" style={{color: 'var(--accent)'}}></i>
<span className="text-[12px] text-[color:var(--muted)]">Transformation Engine</span>
</div>
</div>
<div className="row-span-2 grid grid-cols-2 gap-4">
<div className="surface rounded-2xl p-5 flex items-center gap-4">
<div className="h-10 w-10 rounded-lg grid place-items-center" style={{background: 'rgba(57, 255, 20, 0.1)', border: '1px solid rgba(57,255,20,0.25)'}}>
<i className="h-5 w-5" data-lucide="factory" style={{color: 'var(--accent)'}}></i>
</div>
<div>
<p className="text-[13px] text-[color:var(--muted)]">Material streams</p>
<p className="text-[16px] font-medium">Steel, plastics, textiles</p>
</div>
</div>
<div className="surface rounded-2xl p-5 flex items-center gap-4">
<div className="h-10 w-10 rounded-lg grid place-items-center" style={{background: 'rgba(57, 255, 20, 0.1)', border: '1px solid rgba(57,255,20,0.25)'}}>
<i className="h-5 w-5" data-lucide="users" style={{color: 'var(--accent)'}}></i>
</div>
<div>
<p className="text-[13px] text-[color:var(--muted)]">Network</p>
<p className="text-[16px] font-medium">Vetted eco-designers</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 sm:py-16" id="how">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-6">

<div className="surface rounded-2xl p-6 sm:p-8">
<div className="flex items-center justify-between">
<h2 className="text-[28px] tracking-tight font-semibold">How it Works — Businesses</h2>
<i className="h-5 w-5" data-lucide="building-2" style={{color: 'var(--accent)'}}></i>
</div>
<div className="mt-6 space-y-5">
<div className="flex gap-4">
<div className="relative">
<div className="h-9 w-9 rounded-md grid place-items-center border" style={{borderColor: 'var(--accent)'}}>
<span className="text-[13px]" style={{color: 'var(--accent)'}}>1</span>
</div>
</div>
<div>
<p className="text-[16px] font-medium">Post a Design Challenge</p>
<p className="text-[14px] text-[color:var(--muted)]">Define goals, materials, budget, and ESG priorities.</p>
</div>
</div>
<div className="flex gap-4">
<div className="relative">
<div className="h-9 w-9 rounded-md grid place-items-center border" style={{borderColor: 'var(--accent)'}}>
<span className="text-[13px]" style={{color: 'var(--accent)'}}>2</span>
</div>
</div>
<div>
<p className="text-[16px] font-medium">Match with Vetted Designers</p>
<p className="text-[14px] text-[color:var(--muted)]">Shortlist talent using sustainability credentials and portfolio.</p>
</div>
</div>
<div className="flex gap-4">
<div className="relative">
<div className="h-9 w-9 rounded-md grid place-items-center border" style={{borderColor: 'var(--accent)'}}>
<span className="text-[13px]" style={{color: 'var(--accent)'}}>3</span>
</div>
</div>
<div>
<p className="text-[16px] font-medium">Launch &amp; Manage Securely</p>
<p className="text-[14px] text-[color:var(--muted)]">Contracts, milestones, and payments managed in one place.</p>
</div>
</div>
</div>
</div>

<div className="surface rounded-2xl p-6 sm:p-8">
<div className="flex items-center justify-between">
<h2 className="text-[28px] tracking-tight font-semibold">How it Works — Designers</h2>
<i className="h-5 w-5" data-lucide="pen-tool" style={{color: 'var(--accent)'}}></i>
</div>
<div className="mt-6 space-y-5">
<div className="flex gap-4">
<div className="relative">
<div className="h-9 w-9 rounded-md grid place-items-center border" style={{borderColor: 'var(--accent)'}}>
<span className="text-[13px]" style={{color: 'var(--accent)'}}>1</span>
</div>
</div>
<div>
<p className="text-[16px] font-medium">Apply &amp; Get Verified</p>
<p className="text-[14px] text-[color:var(--muted)]">Showcase projects and sustainability expertise for approval.</p>
</div>
</div>
<div className="flex gap-4">
<div className="relative">
<div className="h-9 w-9 rounded-md grid place-items-center border" style={{borderColor: 'var(--accent)'}}>
<span className="text-[13px]" style={{color: 'var(--accent)'}}>2</span>
</div>
</div>
<div>
<p className="text-[16px] font-medium">Discover Challenges</p>
<p className="text-[14px] text-[color:var(--muted)]">Get matched to briefs that fit your material expertise.</p>
</div>
</div>
<div className="flex gap-4">
<div className="relative">
<div className="h-9 w-9 rounded-md grid place-items-center border" style={{borderColor: 'var(--accent)'}}>
<span className="text-[13px]" style={{color: 'var(--accent)'}}>3</span>
</div>
</div>
<div>
<p className="text-[16px] font-medium">Deliver &amp; Get Paid</p>
<p className="text-[14px] text-[color:var(--muted)]">Milestone-based payments with escrow for peace of mind.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-8 sm:py-12" id="businesses">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex items-end justify-between mb-6">
<h3 className="text-[26px] tracking-tight font-semibold">For Businesses</h3>
<a className="accent-link text-[14px] inline-flex items-center gap-1" href="#">
            Explore how it works
            <i className="h-4 w-4" data-lucide="arrow-right" style={{color: 'var(--accent)'}}></i>
</a>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
<div className="surface rounded-2xl p-6 lg:col-span-3">
<div className="flex items-center gap-3">
<i className="h-5 w-5" data-lucide="target" style={{color: 'var(--accent)'}}></i>
<h4 className="text-[20px] font-semibold tracking-tight">Meet ESG Goals</h4>
</div>
<p className="mt-2 text-[14px] text-[color:var(--muted)]">
              Track carbon, diversion rates, and compliance. Export audit-ready reports.
            </p>
<div className="mt-4 h-28 rounded-xl overflow-hidden relative">
<img alt="ESG" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0" style={{background: 'linear-gradient(180deg, rgba(0,0,0,0.1), rgba(13,27,22,0.65))'}}></div>
</div>
</div>
<div className="surface rounded-2xl p-6 lg:col-span-2">
<div className="flex items-center gap-3">
<i className="h-5 w-5" data-lucide="lightbulb" style={{color: 'var(--accent)'}}></i>
<h4 className="text-[20px] font-semibold tracking-tight">Unlock Innovation</h4>
</div>
<p className="mt-2 text-[14px] text-[color:var(--muted)]">
              Turn by-products into market-ready concepts with circular design sprints.
            </p>
</div>
<div className="surface rounded-2xl p-6 lg:col-span-1">
<div className="flex items-center gap-3">
<i className="h-5 w-5" data-lucide="badge-check" style={{color: 'var(--accent)'}}></i>
<h4 className="text-[18px] font-semibold tracking-tight">Access Vetted Talent</h4>
</div>
<p className="mt-2 text-[13px] text-[color:var(--muted)]">Expertise matched to your materials.</p>
</div>
<div className="surface rounded-2xl p-6 lg:col-span-2">
<div className="flex items-center gap-3">
<i className="h-5 w-5" data-lucide="lock" style={{color: 'var(--accent)'}}></i>
<h4 className="text-[20px] font-semibold tracking-tight">Secure Project Management</h4>
</div>
<p className="mt-2 text-[14px] text-[color:var(--muted)]">
              NDAs, IP, and escrow baked in. Milestone tracking and approvals.
            </p>
</div>
</div>
</div>
</section>

<section className="py-8 sm:py-12" id="designers">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex items-end justify-between mb-6">
<h3 className="text-[26px] tracking-tight font-semibold">For Designers</h3>
<a className="accent-link text-[14px] inline-flex items-center gap-1" href="#">
            Browse challenges
            <i className="h-4 w-4" data-lucide="arrow-right" style={{color: 'var(--accent)'}}></i>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
<div className="surface rounded-2xl p-6 lg:col-span-2">
<div className="flex items-center gap-3">
<i className="h-5 w-5" data-lucide="compass" style={{color: 'var(--accent)'}}></i>
<h4 className="text-[20px] font-semibold tracking-tight">Find Meaningful Projects</h4>
</div>
<p className="mt-2 text-[14px] text-[color:var(--muted)]">
              Work on briefs that drive real-world impact and circular outcomes.
            </p>
</div>
<div className="surface rounded-2xl p-6 lg:col-span-2">
<div className="flex items-center gap-3">
<i className="h-5 w-5" data-lucide="wallet" style={{color: 'var(--accent)'}}></i>
<h4 className="text-[20px] font-semibold tracking-tight">Guaranteed Secure Payments</h4>
</div>
<p className="mt-2 text-[14px] text-[color:var(--muted)]">
              Milestone-based escrow with instant payouts on approval.
            </p>
</div>
<div className="surface rounded-2xl p-6 lg:col-span-2">
<div className="flex items-center gap-3">
<i className="h-5 w-5" data-lucide="folder-kanban" style={{color: 'var(--accent)'}}></i>
<h4 className="text-[20px] font-semibold tracking-tight">Build Your Portfolio</h4>
</div>
<p className="mt-2 text-[14px] text-[color:var(--muted)]">
              Showcase verified outcomes with measurable environmental impact.
            </p>
</div>
<div className="surface rounded-2xl p-0 overflow-hidden lg:col-span-3 relative">
<img alt="" className="w-full h-48 object-cover" src="https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="p-6">
<div className="flex items-center gap-3">
<i className="h-5 w-5" data-lucide="workflow" style={{color: 'var(--accent)'}}></i>
<h4 className="text-[20px] font-semibold tracking-tight">Collaborate Seamlessly</h4>
</div>
<p className="mt-2 text-[14px] text-[color:var(--muted)]">Comments, versioning, and approvals in one place.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 sm:py-16">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex items-end justify-between mb-6">
<h3 className="text-[26px] tracking-tight font-semibold">Our Impact</h3>
<span className="text-[13px] text-[color:var(--muted)]">Updated weekly</span>
</div>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
<div className="surface rounded-2xl p-6 metric">
<p className="text-[13px] text-[color:var(--muted)]">Tons of Waste Diverted</p>
<p className="text-[36px] tracking-tight font-semibold mt-2"><span className="counter" data-target="18450">0</span>+</p>
<p className="text-[12px] text-[color:var(--muted)] mt-1">Aggregated across verified projects</p>
</div>
<div className="surface rounded-2xl p-6 metric">
<p className="text-[13px] text-[color:var(--muted)]">Successful Projects Launched</p>
<p className="text-[36px] tracking-tight font-semibold mt-2"><span className="counter" data-target="1260">0</span></p>
<p className="text-[12px] text-[color:var(--muted)] mt-1">From pilot to full-scale rollout</p>
</div>
<div className="surface rounded-2xl p-6 metric">
<p className="text-[13px] text-[color:var(--muted)]">Registered Eco-Designers</p>
<p className="text-[36px] tracking-tight font-semibold mt-2"><span className="counter" data-target="5400">0</span>+</p>
<p className="text-[12px] text-[color:var(--muted)] mt-1">Vetted and verified globally</p>
</div>
</div>

<div className="mt-10 surface rounded-2xl px-5 sm:px-8 py-6">
<div className="flex items-center gap-3 mb-4">
<i className="h-5 w-5" data-lucide="handshake" style={{color: 'var(--accent)'}}></i>
<p className="text-[14px] text-[color:var(--muted)]">Trusted by forward-thinking teams</p>
</div>
<div className="grid grid-cols-2 sm:grid-cols-5 gap-6 sm:gap-10">
<div className="logo-fade text-[16px] font-medium">EcoFab Industries</div>
<div className="logo-fade text-[16px] font-medium">Nordic Materials</div>
<div className="logo-fade text-[16px] font-medium">GreenArc Labs</div>
<div className="logo-fade text-[16px] font-medium">Revolve Co.</div>
<div className="logo-fade text-[16px] font-medium">Atlas Circular</div>
</div>
</div>
</div>
</section>

<section className="py-12 sm:py-16">
<div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
<div className="surface rounded-3xl px-6 sm:px-10 py-10 sm:py-14 text-center relative overflow-hidden">
<div className="absolute -top-20 -left-10 h-60 w-60 rounded-full" style={{background: 'radial-gradient(closest-side, rgba(57,255,20,0.18), transparent)'}}></div>
<div className="absolute -bottom-24 -right-6 h-72 w-72 rounded-full" style={{background: 'radial-gradient(closest-side, rgba(57,255,20,0.12), transparent)'}}></div>
<h3 className="text-[30px] sm:text-[36px] tracking-tight font-semibold">Ready to Transform Your Industry?</h3>
<p className="mt-3 text-[15px] text-[color:var(--muted)]">Connect with the world’s leading eco-designers and turn waste into value.</p>
<div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center">
<a className="btn-primary rounded-md px-5 py-3 text-[15px] font-medium inline-flex items-center justify-center gap-2 bevel" href="#">
<i className="h-4 w-4" data-lucide="rocket" style={{color: '#0d1b16'}}></i>
              Post a Design Challenge
            </a>
<a className="btn-outline rounded-md px-5 py-3 text-[15px] font-medium inline-flex items-center justify-center gap-2 border bevel" href="#">
<i className="h-4 w-4" data-lucide="pen-tool" style={{color: 'var(--accent)'}}></i>
              Apply to Be a Designer
            </a>
</div>
</div>
</div>
</section>

<footer id="about className=" pb-12"="" pt-10="">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 sm:grid-cols-4 gap-8">
<div>
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-lg surface grid place-items-center bevel">
<i className="h-5 w-5" data-lucide="recycle" style={{color: 'var(--accent)'}}></i>
</div>
<span className="text-[18px] tracking-tight font-semibold">CircularForge</span>
</div>
<p className="mt-3 text-[13px] text-[color:var(--muted)]">
              A marketplace dedicated to turning industrial waste into high-value, eco-designed products.
            </p>
<div className="mt-4 flex items-center gap-3">
<a aria-label="Twitter" className="surface rounded-md p-2 hover:opacity-90" href="#">
<i className="h-4 w-4" data-lucide="twitter" style={{color: 'var(--accent)'}}></i>
</a>
<a aria-label="LinkedIn" className="surface rounded-md p-2 hover:opacity-90" href="#">
<i className="h-4 w-4" data-lucide="linkedin" style={{color: 'var(--accent)'}}></i>
</a>
<a aria-label="Mail" className="surface rounded-md p-2 hover:opacity-90" href="#">
<i className="h-4 w-4" data-lucide="mail" style={{color: 'var(--accent)'}}></i>
</a>
</div>
</div>
<div>
<p className="text-[13px] text-[color:var(--muted)] mb-3">Company</p>
<ul className="space-y-2 text-[14px]">
<li><a className="accent-link" href="#">About</a></li>
<li><a className="accent-link" href="#">Careers</a></li>
<li><a className="accent-link" href="#">Press</a></li>
</ul>
</div>
<div>
<p className="text-[13px] text-[color:var(--muted)] mb-3">Resources</p>
<ul className="space-y-2 text-[14px]">
<li><a className="accent-link" href="#">Sustainability Report</a></li>
<li><a className="accent-link" href="#">Guides</a></li>
<li><a className="accent-link" href="#">Help Center</a></li>
</ul>
</div>
<div>
<p className="text-[13px] text-[color:var(--muted)] mb-3">Contact</p>
<ul className="space-y-2 text-[14px]">
<li><a className="accent-link" href="#">hello@circularforge.com</a></li>
<li><a className="accent-link" href="#">Partnerships</a></li>
<li><a className="accent-link" href="#">Security</a></li>
</ul>
</div>
</div>
<div className="mt-10 pt-6 border-t" style={{borderColor: 'var(--stroke)'}}>
<p className="text-[12px] text-[color:var(--muted)]">© <span id="year"></span> CircularForge. All rights reserved.</p>
</div>
</div>
</footer>


    </>
  );
}
