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
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          const bars = entry.target.querySelectorAll('.bar-fill');
          bars.forEach(bar => {
            bar.style.width = bar.getAttribute('data-width');
          });
        }
      });
    }, { threshold: 0.12 });
    reveals.forEach(el => observer.observe(el));

    const analyticsCard = document.getElementById('analytics-card');
    if (analyticsCard) {
      const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.bar-fill').forEach(bar => {
              bar.style.width = bar.getAttribute('data-width');
            });
          }
        });
      }, { threshold: 0.3 });
      cardObserver.observe(analyticsCard);
    }
  
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
      

<nav className="fixed top-0 left-0 w-full z-50 border-b border-black/5 nav-blur" style={{background: 'rgba(249,249,248,0.80)'}}>
<div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-md flex items-center justify-center" style={{background: 'rgba(0,0,0,0.07)'}}>
<iconify-icon height="13" icon="solar:diploma-linear" style={{color: '#111', fontSize: '13px'}} width="13"></iconify-icon>
</div>
<span className="text-sm font-semibold text-gray-900 tracking-tight">GradyAI</span>
</div>
<div className="hidden md:flex items-center gap-7 text-xs text-gray-400 font-normal">
<a className="hover:text-gray-700 transition-colors duration-200" href="#workflow">How It Works</a>
<a className="hover:text-gray-700 transition-colors duration-200" href="#features">Features</a>
<a className="hover:text-gray-700 transition-colors duration-200" href="#testimonials">Testimonials</a>
<a className="hover:text-gray-700 transition-colors duration-200" href="#trust">Security</a>
</div>
<div className="flex items-center gap-3">
<a className="hidden sm:block text-xs text-gray-400 hover:text-gray-700 transition-colors duration-200" href="#">Sign in</a>
<a className="text-xs font-medium text-white bg-gray-900 px-3.5 py-1.5 rounded-full hover:bg-gray-800 transition-all duration-200" href="#demo">Book a Demo</a>
</div>
</div>
</nav>

<section className="hero-bg relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-20 overflow-hidden">
<div className="dot-grid absolute inset-0 opacity-100 pointer-events-none"></div>
<div className="glow-orb absolute pointer-events-none" style={{width: '700px', height: '500px', top: '-100px', left: '50%', transform: 'translateX(-50%)'}}></div>
<div className="glow-orb-2 absolute pointer-events-none" style={{width: '500px', height: '400px', bottom: '0', right: '-100px'}}></div>
<div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center">
<div className="animate-fade-up mb-8">
<span className="inline-flex items-center gap-2 text-xs text-gray-400 border border-black/8 bg-white px-3.5 py-1.5 rounded-full shadow-sm">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 pulse-dot inline-block"></span>
          340+ faculty across 28 universities
        </span>
</div>
<h1 className="font-serif font-medium text-gradient tracking-tight leading-none mb-6 animate-fade-up delay-100" style={{fontSize: 'clamp(2.6rem,6.5vw,4.8rem)', lineHeight: '1.06', fontFamily: '\'Lora\', Georgia, serif'}}>
        Grade smarter.<br/>Stay in control.
      </h1>
<p className="text-sm text-gray-400 leading-relaxed max-w-md mb-10 animate-fade-up delay-200">
        GradyAI drafts rubric-aligned scores and feedback for every submission. You review, edit, and approve — nothing reaches students without your sign-off.
      </p>
<div className="flex flex-col sm:flex-row items-center gap-3 animate-fade-up delay-300">
<a className="flex items-center gap-2 text-sm font-medium text-white bg-gray-900 px-6 py-2.5 rounded-full hover:bg-gray-800 transition-all duration-200 shadow-sm" href="#demo">
          Book a Demo
          <iconify-icon height="14" icon="solar:arrow-right-linear" style={{fontSize: '14px'}} width="14"></iconify-icon>
</a>
<a className="text-xs text-gray-400 hover:text-gray-600 transition-colors duration-200" href="#workflow">
          See how it works ↓
        </a>
</div>
<div className="mt-20 w-full max-w-lg animate-fade-up delay-400 animate-float">
<div className="rounded-2xl overflow-hidden border border-black/8 shadow-xl bg-white">
<div className="flex items-center justify-between px-4 py-3 border-b border-black/6" style={{background: '#fafafa'}}>
<div className="flex items-center gap-2">
<div className="flex gap-1">
<span className="w-2 h-2 rounded-full bg-black/10"></span>
<span className="w-2 h-2 rounded-full bg-black/10"></span>
<span className="w-2 h-2 rounded-full bg-black/10"></span>
</div>
<span className="text-xs text-gray-400">GradyAI · PHIL 302</span>
</div>
<span className="text-xs text-emerald-600 font-medium">68 graded</span>
</div>
<div className="p-4 space-y-3">
<div className="flex items-center justify-between rounded-lg px-3 py-2.5 border border-black/5" style={{background: '#f9f9f8'}}>
<div className="flex items-center gap-2.5">
<div className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium" style={{background: '#e5e7eb', color: '#6b7280'}}>MC</div>
<span className="text-xs text-gray-500">Maya Chen</span>
</div>
<div className="flex items-center gap-2">
<span className="text-xs text-gray-300">Draft</span>
<span className="text-sm font-semibold text-gray-800">78<span className="text-gray-300 font-normal text-xs">/100</span></span>
<button className="text-xs text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full hover:bg-emerald-100 transition-colors">Approve</button>
</div>
</div>
<div className="flex items-center justify-between rounded-lg px-3 py-2.5 border border-black/5" style={{background: '#f9f9f8'}}>
<div className="flex items-center gap-2.5">
<div className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium" style={{background: '#e5e7eb', color: '#6b7280'}}>JL</div>
<span className="text-xs text-gray-500">James Lee</span>
</div>
<div className="flex items-center gap-2">
<span className="text-xs text-gray-300">Draft</span>
<span className="text-sm font-semibold text-gray-800">84<span className="text-gray-300 font-normal text-xs">/100</span></span>
<button className="text-xs text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full hover:bg-emerald-100 transition-colors">Approve</button>
</div>
</div>
<div className="flex items-center justify-between rounded-lg px-3 py-2.5 border border-black/5" style={{background: '#fafafa'}}>
<div className="flex items-center gap-2.5">
<div className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium" style={{background: '#f3f4f6', color: '#9ca3af'}}>SR</div>
<span className="text-xs text-gray-400">Sara Ramirez</span>
</div>
<div className="flex items-center gap-2">
<span className="text-xs text-gray-300">Analyzing…</span>
<div className="w-12 h-1 rounded-full bg-gray-100 overflow-hidden">
<div className="h-full rounded-full bg-indigo-400/60" style={{width: '65%'}}></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<div className="section-divider overflow-hidden py-3.5" style={{background: '#f3f3f2'}}>
<div className="flex animate-marquee whitespace-nowrap" style={{width: 'max-content'}}>
<div className="flex items-center gap-12 px-6">
<span className="text-xs text-gray-400 font-medium tracking-wide">University of Edinburgh</span>
<span className="text-gray-300">·</span>
<span className="text-xs text-gray-400 font-medium tracking-wide">McGill University</span>
<span className="text-gray-300">·</span>
<span className="text-xs text-gray-400 font-medium tracking-wide">Yale University</span>
<span className="text-gray-300">·</span>
<span className="text-xs text-gray-400 font-medium tracking-wide">University of Michigan</span>
<span className="text-gray-300">·</span>
<span className="text-xs text-gray-400 font-medium tracking-wide">Leiden University</span>
<span className="text-gray-300">·</span>
<span className="text-xs text-gray-400 font-medium tracking-wide">Georgetown University</span>
<span className="text-gray-300">·</span>
<span className="text-xs text-gray-400 font-medium tracking-wide">University of Toronto</span>
<span className="text-gray-300">·</span>
<span className="text-xs text-gray-400 font-medium tracking-wide">Oxford Continuing Ed</span>
<span className="text-gray-300">·</span>
</div>
<div aria-hidden="true" className="flex items-center gap-12 px-6">
<span className="text-xs text-gray-400 font-medium tracking-wide">University of Edinburgh</span>
<span className="text-gray-300">·</span>
<span className="text-xs text-gray-400 font-medium tracking-wide">McGill University</span>
<span className="text-gray-300">·</span>
<span className="text-xs text-gray-400 font-medium tracking-wide">Yale University</span>
<span className="text-gray-300">·</span>
<span className="text-xs text-gray-400 font-medium tracking-wide">University of Michigan</span>
<span className="text-gray-300">·</span>
<span className="text-xs text-gray-400 font-medium tracking-wide">Leiden University</span>
<span className="text-gray-300">·</span>
<span className="text-xs text-gray-400 font-medium tracking-wide">Georgetown University</span>
<span className="text-gray-300">·</span>
<span className="text-xs text-gray-400 font-medium tracking-wide">University of Toronto</span>
<span className="text-gray-300">·</span>
<span className="text-xs text-gray-400 font-medium tracking-wide">Oxford Continuing Ed</span>
<span className="text-gray-300">·</span>
</div>
</div>
</div>

<section className="py-16 px-6 section-divider bg-white">
<div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 reveal">
<div className="text-center">
<p className="text-3xl font-semibold tracking-tight stat-num text-gray-900">4.2<span className="text-lg text-gray-300">h</span></p>
<p className="text-xs text-gray-400 mt-1">saved per assignment cycle</p>
</div>
<div className="text-center">
<p className="text-3xl font-semibold tracking-tight stat-num text-gray-900">340<span className="text-lg text-gray-300">+</span></p>
<p className="text-xs text-gray-400 mt-1">faculty members</p>
</div>
<div className="text-center">
<p className="text-3xl font-semibold tracking-tight stat-num text-gray-900">98<span className="text-lg text-gray-300">%</span></p>
<p className="text-xs text-gray-400 mt-1">approve rate unchanged</p>
</div>
<div className="text-center">
<p className="text-3xl font-semibold tracking-tight stat-num text-gray-900">28</p>
<p className="text-xs text-gray-400 mt-1">universities piloted</p>
</div>
</div>
</section>

<section className="py-20 px-6 section-divider relative overflow-hidden" id="workflow" style={{background: '#f9f9f8'}}>
<div className="dot-grid absolute inset-0 opacity-60 pointer-events-none"></div>
<div className="max-w-5xl mx-auto relative z-10">
<div className="max-w-md mb-14 reveal">
<p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">How It Works</p>
<h2 className="font-serif font-medium tracking-tight leading-tight text-gradient" style={{fontSize: 'clamp(1.5rem,3vw,2rem)', fontFamily: '\'Lora\', Georgia, serif'}}>
          Three steps. Your rubric.<br/>Your final call.
        </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="reveal reveal-delay-1 card-light rounded-2xl p-6">
<div className="flex items-center justify-between mb-6">
<span className="text-xs font-semibold text-gray-300 uppercase tracking-widest">01</span>
<iconify-icon height="18" icon="solar:upload-minimalistic-linear" style={{color: '#9ca3af', fontSize: '18px'}} width="18"></iconify-icon>
</div>
<div className="rounded-xl p-3.5 mb-5 border border-black/5" style={{background: '#f9f9f8'}}>
<div className="space-y-2">
<div className="flex items-center gap-2">
<iconify-icon height="13" icon="solar:file-text-linear" style={{color: '#9ca3af', fontSize: '13px'}} width="13"></iconify-icon>
<span className="text-xs text-gray-400 flex-1 truncate">PHIL302_submissions.zip</span>
<span className="text-xs text-emerald-600 font-medium">Done</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon height="13" icon="solar:file-text-linear" style={{color: '#9ca3af', fontSize: '13px'}} width="13"></iconify-icon>
<span className="text-xs text-gray-400 flex-1 truncate">HIST201_submissions.zip</span>
<div className="flex items-center gap-1">
<div className="w-10 h-1 rounded-full overflow-hidden bg-gray-100">
<div className="h-full rounded-full bg-indigo-400" style={{width: '60%'}}></div>
</div>
</div>
</div>
</div>
</div>
<h3 className="text-sm font-semibold text-gray-700 mb-1.5">Upload assignments</h3>
<p className="text-xs text-gray-400 leading-relaxed">Bulk-upload PDFs, DOCX, or connect Canvas, Blackboard, or Moodle directly.</p>
</div>

<div className="reveal reveal-delay-2 card-light rounded-2xl p-6">
<div className="flex items-center justify-between mb-6">
<span className="text-xs font-semibold text-gray-300 uppercase tracking-widest">02</span>
<iconify-icon height="18" icon="solar:checklist-minimalistic-linear" style={{color: '#9ca3af', fontSize: '18px'}} width="18"></iconify-icon>
</div>
<div className="rounded-xl p-3.5 mb-5 border border-black/5 space-y-1.5" style={{background: '#f9f9f8'}}>
<div className="flex items-center justify-between">
<span className="text-xs text-gray-500">Thesis &amp; Argument</span>
<span className="text-xs text-gray-300">30 pts</span>
</div>
<div className="flex items-center justify-between">
<span className="text-xs text-gray-500">Source Integration</span>
<span className="text-xs text-gray-300">25 pts</span>
</div>
<div className="flex items-center justify-between">
<span className="text-xs text-gray-500">Critical Analysis</span>
<span className="text-xs text-gray-300">25 pts</span>
</div>
<div className="flex items-center justify-between">
<span className="text-xs text-gray-500">Academic Style</span>
<span className="text-xs text-gray-300">20 pts</span>
</div>
</div>
<h3 className="text-sm font-semibold text-gray-700 mb-1.5">Apply your rubric</h3>
<p className="text-xs text-gray-400 leading-relaxed">Import your existing rubric or build one. Every score traces back to a specific criterion.</p>
</div>

<div className="reveal reveal-delay-3 card-light rounded-2xl p-6">
<div className="flex items-center justify-between mb-6">
<span className="text-xs font-semibold text-gray-300 uppercase tracking-widest">03</span>
<iconify-icon height="18" icon="solar:check-square-linear" style={{color: '#9ca3af', fontSize: '18px'}} width="18"></iconify-icon>
</div>
<div className="rounded-xl p-3.5 mb-5 border border-black/5" style={{background: '#f9f9f8'}}>
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-medium text-gray-500">Maya Chen · PHIL 302</span>
<span className="text-sm font-semibold text-gray-700">78/100</span>
</div>
<p className="text-xs text-gray-400 leading-snug mb-3">Strong Williams analysis. Needs deeper engagement with Pogge's institutional critique.</p>
<div className="flex gap-1.5">
<button className="flex-1 text-xs font-medium py-1.5 rounded-lg transition-opacity hover:opacity-80 bg-gray-900 text-white">Approve</button>
<button className="text-xs font-medium px-3 py-1.5 rounded-lg border border-black/8 text-gray-400 hover:border-black/15 hover:text-gray-600 transition-colors">Edit</button>
</div>
</div>
<h3 className="text-sm font-semibold text-gray-700 mb-1.5">Review &amp; approve</h3>
<p className="text-xs text-gray-400 leading-relaxed">Nothing reaches students without your explicit approval. You stay in the loop, always.</p>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 section-divider bg-white" id="features">
<div className="max-w-5xl mx-auto">
<div className="max-w-md mb-14 reveal">
<p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">Features</p>
<h2 className="font-serif font-medium tracking-tight leading-tight text-gradient" style={{fontSize: 'clamp(1.5rem,3vw,2rem)', fontFamily: '\'Lora\', Georgia, serif'}}>
          Built around your<br/>evaluative judgment.
        </h2>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="reveal reveal-delay-1 card-light rounded-2xl p-6">
<div className="w-8 h-8 rounded-xl flex items-center justify-center mb-5" style={{background: '#f3f4f6'}}>
<iconify-icon height="16" icon="solar:checklist-minimalistic-linear" style={{color: '#6b7280', fontSize: '16px'}} width="16"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-gray-700 mb-1.5 tracking-tight">Rubric-based grading</h3>
<p className="text-xs text-gray-400 leading-relaxed">Evaluates every submission against your exact criteria — not abstract AI benchmarks. Scores are traceable to rubric elements and student text.</p>
</div>
<div className="reveal reveal-delay-2 card-light rounded-2xl p-6">
<div className="w-8 h-8 rounded-xl flex items-center justify-center mb-5" style={{background: '#f3f4f6'}}>
<iconify-icon height="16" icon="solar:chart-2-linear" style={{color: '#6b7280', fontSize: '16px'}} width="16"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-gray-700 mb-1.5 tracking-tight">Section-wide consistency</h3>
<p className="text-xs text-gray-400 leading-relaxed">Eliminate inter-TA variance. Every student across every section is evaluated with the same rubric-anchored rigor.</p>
</div>
<div className="reveal reveal-delay-3 card-light rounded-2xl p-6">
<div className="w-8 h-8 rounded-xl flex items-center justify-center mb-5" style={{background: '#f3f4f6'}}>
<iconify-icon height="16" icon="solar:chat-round-linear" style={{color: '#6b7280', fontSize: '16px'}} width="16"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-gray-700 mb-1.5 tracking-tight">Detailed feedback drafts</h3>
<p className="text-xs text-gray-400 leading-relaxed">Comments reference the student's actual arguments — not boilerplate. Fully editable before delivery, always.</p>
</div>
<div className="reveal reveal-delay-4 card-light rounded-2xl p-6">
<div className="w-8 h-8 rounded-xl flex items-center justify-center mb-5" style={{background: '#f3f4f6'}}>
<iconify-icon height="16" icon="solar:shield-warning-linear" style={{color: '#6b7280', fontSize: '16px'}} width="16"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-gray-700 mb-1.5 tracking-tight">Academic integrity flags</h3>
<p className="text-xs text-gray-400 leading-relaxed">Unusual stylistic shifts, citation anomalies, and structural irregularities are flagged for your attention. The determination remains yours.</p>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 section-divider relative overflow-hidden" style={{background: '#f9f9f8'}}>
<div className="dot-grid absolute inset-0 opacity-60 pointer-events-none"></div>
<div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-14 items-center relative z-10">
<div className="flex-1 max-w-sm reveal">
<p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">Analytics</p>
<h2 className="font-serif font-medium tracking-tight leading-tight mb-4 text-gradient" style={{fontSize: 'clamp(1.5rem,3vw,2rem)', fontFamily: '\'Lora\', Georgia, serif'}}>
          Understand how your class is performing.
        </h2>
<p className="text-xs text-gray-400 leading-relaxed mb-6">Surface patterns across your cohort — adapt your instruction, not just your gradebook.</p>
<div className="space-y-3">
<div className="flex items-start gap-3">
<iconify-icon height="14" icon="solar:chart-2-linear" style={{color: '#9ca3af', fontSize: '14px', marginTop: '2px'}} width="14"></iconify-icon>
<p className="text-xs text-gray-400 leading-relaxed">Grade distribution per criterion, visualised per assignment.</p>
</div>
<div className="flex items-start gap-3">
<iconify-icon height="14" icon="solar:pie-chart-2-linear" style={{color: '#9ca3af', fontSize: '14px', marginTop: '2px'}} width="14"></iconify-icon>
<p className="text-xs text-gray-400 leading-relaxed">Identify which learning objectives students consistently miss.</p>
</div>
<div className="flex items-start gap-3">
<iconify-icon height="14" icon="solar:graph-up-linear" style={{color: '#9ca3af', fontSize: '14px', marginTop: '2px'}} width="14"></iconify-icon>
<p className="text-xs text-gray-400 leading-relaxed">Track semester-over-semester trends in competency development.</p>
</div>
</div>
</div>

<div className="flex-1 w-full max-w-md reveal reveal-delay-2">
<div className="card-light rounded-2xl overflow-hidden" id="analytics-card">
<div className="px-5 py-4 border-b border-black/5 flex items-center justify-between" style={{background: '#fafafa'}}>
<div>
<p className="text-xs font-semibold text-gray-600">PHIL 302 · Essay 2</p>
<p className="text-xs text-gray-400 mt-0.5">68 students · Fall 2024</p>
</div>
<span className="text-xs text-gray-400 border border-black/8 px-2.5 py-1 rounded-full bg-white">Live</span>
</div>
<div className="p-5 space-y-5">
<div>
<p className="text-xs text-gray-300 uppercase tracking-widest font-semibold mb-3">Grade distribution</p>
<div className="space-y-2.5">
<div className="flex items-center gap-2.5">
<span className="text-xs text-gray-400 w-5 text-right flex-shrink-0">A</span>
<div className="flex-1 rounded-full h-3 overflow-hidden bg-gray-100">
<div className="bar-fill h-3 rounded-full bg-gray-800" data-width="22%"></div>
</div>
<span className="text-xs text-gray-400 w-7 flex-shrink-0">22%</span>
</div>
<div className="flex items-center gap-2.5">
<span className="text-xs text-gray-400 w-5 text-right flex-shrink-0">B</span>
<div className="flex-1 rounded-full h-3 overflow-hidden bg-gray-100">
<div className="bar-fill h-3 rounded-full bg-gray-800" data-width="47%"></div>
</div>
<span className="text-xs text-gray-400 w-7 flex-shrink-0">47%</span>
</div>
<div className="flex items-center gap-2.5">
<span className="text-xs text-gray-400 w-5 text-right flex-shrink-0">C</span>
<div className="flex-1 rounded-full h-3 overflow-hidden bg-gray-100">
<div className="bar-fill h-3 rounded-full bg-gray-400" data-width="24%"></div>
</div>
<span className="text-xs text-gray-400 w-7 flex-shrink-0">24%</span>
</div>
<div className="flex items-center gap-2.5">
<span className="text-xs text-gray-400 w-5 text-right flex-shrink-0">D/F</span>
<div className="flex-1 rounded-full h-3 overflow-hidden bg-gray-100">
<div className="bar-fill h-3 rounded-full bg-red-300" data-width="7%"></div>
</div>
<span className="text-xs text-gray-400 w-7 flex-shrink-0">7%</span>
</div>
</div>
</div>
<div className="border-t border-black/5 pt-4">
<p className="text-xs text-gray-300 uppercase tracking-widest font-semibold mb-3">Weakest criteria</p>
<div className="space-y-2">
<div className="flex items-center gap-3 rounded-lg p-2.5 border border-amber-200 bg-amber-50">
<iconify-icon height="13" icon="solar:danger-triangle-linear" style={{color: '#d97706', fontSize: '13px'}} width="13"></iconify-icon>
<span className="text-xs text-gray-600 flex-1">Source Engagement</span>
<span className="text-xs font-semibold text-amber-600">68.8%</span>
</div>
<div className="flex items-center gap-3 rounded-lg p-2.5 border border-red-200 bg-red-50">
<iconify-icon height="13" icon="solar:danger-triangle-linear" style={{color: '#dc2626', fontSize: '13px'}} width="13"></iconify-icon>
<span className="text-xs text-gray-600 flex-1">Concluding Argument</span>
<span className="text-xs font-semibold text-red-500">66.5%</span>
</div>
</div>
</div>
<div className="border-t border-black/5 pt-4 grid grid-cols-3 gap-2 text-center">
<div>
<p className="text-base font-semibold tracking-tight text-gray-700">74.3</p>
<p className="text-xs text-gray-400 mt-0.5">Average</p>
</div>
<div className="border-x border-black/5">
<p className="text-base font-semibold tracking-tight text-gray-700">9.4</p>
<p className="text-xs text-gray-400 mt-0.5">Std. Dev</p>
</div>
<div>
<p className="text-base font-semibold tracking-tight text-emerald-600">68/68</p>
<p className="text-xs text-gray-400 mt-0.5">Graded</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 section-divider bg-white" id="testimonials">
<div className="max-w-5xl mx-auto">
<div className="max-w-md mb-14 reveal">
<p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">Testimonials</p>
<h2 className="font-serif font-medium tracking-tight leading-tight text-gradient" style={{fontSize: 'clamp(1.5rem,3vw,2rem)', fontFamily: '\'Lora\', Georgia, serif'}}>
          From faculty who use it<br/>every semester.
        </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="reveal reveal-delay-1 card-light rounded-2xl p-6 flex flex-col">
<div className="flex items-center gap-1 mb-5">
<iconify-icon height="12" icon="solar:star-bold" style={{color: '#f59e0b', fontSize: '12px'}} width="12"></iconify-icon>
<iconify-icon height="12" icon="solar:star-bold" style={{color: '#f59e0b', fontSize: '12px'}} width="12"></iconify-icon>
<iconify-icon height="12" icon="solar:star-bold" style={{color: '#f59e0b', fontSize: '12px'}} width="12"></iconify-icon>
<iconify-icon height="12" icon="solar:star-bold" style={{color: '#f59e0b', fontSize: '12px'}} width="12"></iconify-icon>
<iconify-icon height="12" icon="solar:star-bold" style={{color: '#f59e0b', fontSize: '12px'}} width="12"></iconify-icon>
</div>
<p className="text-xs text-gray-400 leading-relaxed flex-1 mb-5">"I still read every essay. I just don't spend four hours writing the same structural note 34 times."</p>
<div className="flex items-center gap-2.5 pt-4 border-t border-black/6">
<div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold flex-shrink-0" style={{background: '#f3f4f6', color: '#6b7280'}}>DR</div>
<div>
<p className="text-xs font-semibold text-gray-600">Dr. Rebecca Holloway</p>
<p className="text-xs text-gray-400">Philosophy · University of Edinburgh</p>
</div>
</div>
</div>
<div className="reveal reveal-delay-2 card-light rounded-2xl p-6 flex flex-col">
<div className="flex items-center gap-1 mb-5">
<iconify-icon height="12" icon="solar:star-bold" style={{color: '#f59e0b', fontSize: '12px'}} width="12"></iconify-icon>
<iconify-icon height="12" icon="solar:star-bold" style={{color: '#f59e0b', fontSize: '12px'}} width="12"></iconify-icon>
<iconify-icon height="12" icon="solar:star-bold" style={{color: '#f59e0b', fontSize: '12px'}} width="12"></iconify-icon>
<iconify-icon height="12" icon="solar:star-bold" style={{color: '#f59e0b', fontSize: '12px'}} width="12"></iconify-icon>
<iconify-icon height="12" icon="solar:star-bold" style={{color: '#f59e0b', fontSize: '12px'}} width="12"></iconify-icon>
</div>
<p className="text-xs text-gray-400 leading-relaxed flex-1 mb-5">"The grade distribution variance across our six sections used to be a constant point of contention. GradyAI fixed that."</p>
<div className="flex items-center gap-2.5 pt-4 border-t border-black/6">
<div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold flex-shrink-0" style={{background: '#f3f4f6', color: '#6b7280'}}>JM</div>
<div>
<p className="text-xs font-semibold text-gray-600">Prof. James Moreau</p>
<p className="text-xs text-gray-400">Writing Director · McGill University</p>
</div>
</div>
</div>
<div className="reveal reveal-delay-3 card-light rounded-2xl p-6 flex flex-col">
<div className="flex items-center gap-1 mb-5">
<iconify-icon height="12" icon="solar:star-bold" style={{color: '#f59e0b', fontSize: '12px'}} width="12"></iconify-icon>
<iconify-icon height="12" icon="solar:star-bold" style={{color: '#f59e0b', fontSize: '12px'}} width="12"></iconify-icon>
<iconify-icon height="12" icon="solar:star-bold" style={{color: '#f59e0b', fontSize: '12px'}} width="12"></iconify-icon>
<iconify-icon height="12" icon="solar:star-bold" style={{color: '#f59e0b', fontSize: '12px'}} width="12"></iconify-icon>
<iconify-icon height="12" icon="solar:star-bold" style={{color: '#f59e0b', fontSize: '12px'}} width="12"></iconify-icon>
</div>
<p className="text-xs text-gray-400 leading-relaxed flex-1 mb-5">"The comments reference the student's actual arguments. It's more like having a diligent research assistant than an AI grader."</p>
<div className="flex items-center gap-2.5 pt-4 border-t border-black/6">
<div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold flex-shrink-0" style={{background: '#f3f4f6', color: '#6b7280'}}>SA</div>
<div>
<p className="text-xs font-semibold text-gray-600">Dr. Sonia Abramowitz</p>
<p className="text-xs text-gray-400">History · Yale University</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 section-divider relative overflow-hidden" id="trust" style={{background: '#f9f9f8'}}>
<div className="dot-grid absolute inset-0 opacity-60 pointer-events-none"></div>
<div className="max-w-5xl mx-auto relative z-10">
<div className="max-w-md mb-14 reveal">
<p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">Security</p>
<h2 className="font-serif font-medium tracking-tight leading-tight text-gradient" style={{fontSize: 'clamp(1.5rem,3vw,2rem)', fontFamily: '\'Lora\', Georgia, serif'}}>
          Designed for institutional<br/>compliance.
        </h2>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
<div className="reveal reveal-delay-1 card-light rounded-2xl p-6">
<iconify-icon height="18" icon="solar:lock-keyhole-linear" style={{color: '#9ca3af', fontSize: '18px', marginBottom: '16px', display: 'block'}} width="18"></iconify-icon>
<h3 className="text-sm font-semibold text-gray-700 mb-1.5">FERPA Compliance</h3>
<p className="text-xs text-gray-400 leading-relaxed">Student data is never used to train third-party models. Your institution retains full data ownership.</p>
</div>
<div className="reveal reveal-delay-2 card-light rounded-2xl p-6">
<iconify-icon height="18" icon="solar:eye-linear" style={{color: '#9ca3af', fontSize: '18px', marginBottom: '16px', display: 'block'}} width="18"></iconify-icon>
<h3 className="text-sm font-semibold text-gray-700 mb-1.5">Transparent Scoring</h3>
<p className="text-xs text-gray-400 leading-relaxed">Every score includes a rationale linked to a specific rubric criterion and a passage in the student's text.</p>
</div>
<div className="reveal reveal-delay-3 card-light rounded-2xl p-6">
<iconify-icon height="18" icon="solar:user-check-linear" style={{color: '#9ca3af', fontSize: '18px', marginBottom: '16px', display: 'block'}} width="18"></iconify-icon>
<h3 className="text-sm font-semibold text-gray-700 mb-1.5">Instructor Oversight</h3>
<p className="text-xs text-gray-400 leading-relaxed">Draft mode by default. Nothing is visible to students until you explicitly approve and release.</p>
</div>
<div className="reveal reveal-delay-1 card-light rounded-2xl p-6">
<iconify-icon height="18" icon="solar:server-linear" style={{color: '#9ca3af', fontSize: '18px', marginBottom: '16px', display: 'block'}} width="18"></iconify-icon>
<h3 className="text-sm font-semibold text-gray-700 mb-1.5">Data Residency</h3>
<p className="text-xs text-gray-400 leading-relaxed">US, EU, and Canadian data residency options. SOC 2 Type II certified infrastructure.</p>
</div>
<div className="reveal reveal-delay-2 card-light rounded-2xl p-6">
<iconify-icon height="18" icon="solar:diploma-linear" style={{color: '#9ca3af', fontSize: '18px', marginBottom: '16px', display: 'block'}} width="18"></iconify-icon>
<h3 className="text-sm font-semibold text-gray-700 mb-1.5">Institutional SSO</h3>
<p className="text-xs text-gray-400 leading-relaxed">SAML 2.0 and OAuth. Supports Shibboleth, Azure AD, and Google Workspace for Education.</p>
</div>
<div className="reveal reveal-delay-3 card-light rounded-2xl p-6">
<iconify-icon height="18" icon="solar:document-text-linear" style={{color: '#9ca3af', fontSize: '18px', marginBottom: '16px', display: 'block'}} width="18"></iconify-icon>
<h3 className="text-sm font-semibold text-gray-700 mb-1.5">Audit Logs</h3>
<p className="text-xs text-gray-400 leading-relaxed">Every grading action is timestamped and attributed. Full audit trail available on request.</p>
</div>
</div>
</div>
</section>

<section className="py-28 px-6 section-divider relative overflow-hidden bg-white" id="demo">
<div className="dot-grid absolute inset-0 opacity-100 pointer-events-none"></div>
<div className="glow-orb absolute pointer-events-none" style={{width: '600px', height: '400px', top: '50%', left: '50%', transform: 'translate(-50%,-50%)'}}></div>
<div className="relative z-10 max-w-xl mx-auto text-center reveal">
<p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-5">Get Started</p>
<h2 className="font-serif font-medium tracking-tight leading-tight mb-5 text-gradient" style={{fontSize: 'clamp(1.8rem,4vw,2.8rem)', fontFamily: '\'Lora\', Georgia, serif'}}>
        Reclaim your time.<br/>Stay in control.
      </h2>
<p className="text-xs text-gray-400 leading-relaxed mb-10 max-w-sm mx-auto">
        Join 340+ faculty who have reclaimed their weekends without compromising the quality of feedback their students receive.
      </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-3">
<button className="flex items-center gap-2 bg-gray-900 text-white text-xs font-medium px-6 py-2.5 rounded-full hover:bg-gray-800 transition-colors shadow-sm">
<iconify-icon height="14" icon="solar:calendar-linear" style={{fontSize: '14px'}} width="14"></iconify-icon>
          Book a Demo
        </button>
<button className="flex items-center gap-2 text-xs font-medium px-5 py-2.5 rounded-full border border-black/10 text-gray-400 hover:border-black/20 hover:text-gray-600 transition-colors">
          Download Faculty Overview
          <iconify-icon height="14" icon="solar:download-linear" style={{fontSize: '14px'}} width="14"></iconify-icon>
</button>
</div>
<p className="text-xs text-gray-300 mt-6">No commitment required · Institutional pricing available · Pilot programmes for 5+ faculty</p>
</div>
</section>

<footer className="section-divider px-6 py-10" style={{background: '#f3f3f2'}}>
<div className="max-w-5xl mx-auto">
<div className="flex flex-col md:flex-row items-start justify-between gap-8">
<div className="max-w-xs">
<div className="flex items-center gap-2 mb-3">
<div className="w-5 h-5 rounded flex items-center justify-center flex-shrink-0" style={{background: 'rgba(0,0,0,0.08)'}}>
<iconify-icon height="10" icon="solar:diploma-linear" style={{color: '#111', fontSize: '10px'}} width="10"></iconify-icon>
</div>
<span className="text-xs font-semibold tracking-tight text-gray-600">GradyAI</span>
</div>
<p className="text-xs text-gray-400 leading-relaxed">AI grading assistance built for university faculty. Rubric-first. Professor-controlled.</p>
</div>
<div className="grid grid-cols-3 gap-10 text-xs">
<div>
<p className="font-semibold text-gray-300 mb-3 uppercase tracking-widest" style={{fontSize: '0.6rem'}}>Product</p>
<div className="space-y-2 text-gray-400">
<a className="block hover:text-gray-700 transition-colors" href="#">Features</a>
<a className="block hover:text-gray-700 transition-colors" href="#">How It Works</a>
<a className="block hover:text-gray-700 transition-colors" href="#">Pricing</a>
<a className="block hover:text-gray-700 transition-colors" href="#">Integrations</a>
</div>
</div>
<div>
<p className="font-semibold text-gray-300 mb-3 uppercase tracking-widest" style={{fontSize: '0.6rem'}}>Institution</p>
<div className="space-y-2 text-gray-400">
<a className="block hover:text-gray-700 transition-colors" href="#">For Departments</a>
<a className="block hover:text-gray-700 transition-colors" href="#">Security</a>
<a className="block hover:text-gray-700 transition-colors" href="#">Pilot Programme</a>
<a className="block hover:text-gray-700 transition-colors" href="#">Book a Demo</a>
</div>
</div>
<div>
<p className="font-semibold text-gray-300 mb-3 uppercase tracking-widest" style={{fontSize: '0.6rem'}}>Company</p>
<div className="space-y-2 text-gray-400">
<a className="block hover:text-gray-700 transition-colors" href="#">About</a>
<a className="block hover:text-gray-700 transition-colors" href="#">Research</a>
<a className="block hover:text-gray-700 transition-colors" href="#">Privacy</a>
<a className="block hover:text-gray-700 transition-colors" href="#">Terms</a>
</div>
</div>
</div>
</div>
<div className="mt-8 pt-6 border-t border-black/6 flex flex-col sm:flex-row items-center justify-between gap-2">
<p className="text-xs text-gray-400">© 2025 GradyAI, Inc.</p>
<p className="text-xs text-gray-400">Made for professors, by people who respect what you do.</p>
</div>
</div>
</footer>


    </>
  );
}
