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



        document.getElementById("year").textContent = new Date().getFullYear();
    
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
      

<nav className="fixed inset-x-0 top-0 z-50 bg-slate-950/70 backdrop-blur border-b border-white/10">
<div className="flex max-w-7xl mr-auto ml-auto pt-4 pr-6 pb-4 pl-6 items-center justify-between">
<a className="font-extrabold tracking-tight uppercase text-sm md:text-base" href="#">
<span className="text-slate-200">HABY</span><span className="text-blue-400">JOSEPH</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-200/80">
<a className="hover:text-white transition" href="#summary">Summary</a>
<a className="hover:text-white transition" href="#competencies">Leadership</a>
<a className="hover:text-white transition" href="#skills">Skills</a>
<a className="hover:text-white transition" href="#certifications">Certifications</a>
<a className="px-5 py-2 rounded-full bg-blue-500 text-slate-950 font-bold hover:bg-blue-400 transition" href="#contact">
                    Contact
                </a>
</div>
</div>
</nav>

<header className="glow pt-32 pb-20">
<div className="grid lg:grid-cols-12 gap-10 max-w-7xl mr-auto ml-auto pr-6 pl-6 gap-x-10 gap-y-10 items-center">
<div className="lg:col-span-7">
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full chip text-xs font-semibold uppercase tracking-[0.18em] text-slate-200/80">
<span className="h-2 w-2 rounded-full bg-blue-400"></span>
                    Head of Marketing • 15+ Years • Enterprise Growth &amp; Brand Governance
                </div>
<h1 className="mt-6 text-4xl md:text-6xl leading-tight font-bold">
                    Strategic Marketing &amp; Brand Leader for global, complex organizations.
                </h1>
<p className="mt-6 text-lg md:text-xl text-slate-200/75 leading-relaxed max-w-2xl">
                    Enterprise-level marketing transformation, reputation management, and integrated campaign
                    leadership—shaped in global environments including Dell, IBM, and leading consulting firms.
                </p>
<div className="mt-10 flex flex-wrap gap-4">
<a className="px-7 py-4 rounded-xl bg-blue-500 text-slate-950 font-extrabold hover:bg-blue-400 transition" href="#contact">
                        Engage for Executive Advisory
                    </a>
<a className="px-7 py-4 rounded-xl surface-2 font-bold hover:border-white/20 transition" href="#competencies">
                        View Core Leadership Competencies
                    </a>
</div>
<div className="flex flex-wrap gap-3 text-xs font-semibold text-slate-200/70 mt-10 gap-x-3 gap-y-3">
<span className="chip px-3 py-2 rounded-full">Enterprise Strategy</span>
<span className="chip px-3 py-2 rounded-full">Brand Governance</span>
<span className="chip px-3 py-2 rounded-full">Executive Stakeholders</span>
<span className="chip px-3 py-2 rounded-full">Digital + Traditional</span>
<span className="chip rounded-full pt-2 pr-3 pb-2 pl-3">Web Optimization</span>
<span className="chip rounded-full pt-2 pr-3 pb-2 pl-3">Campaigns</span><span className="chip rounded-full pt-2 pr-3 pb-2 pl-3">SEO</span><span className="chip rounded-full pt-2 pr-3 pb-2 pl-3">Blogs &amp; Web Articles</span><span className="chip rounded-full pt-2 pr-3 pb-2 pl-3">Content Managment</span>
</div>
</div>
<div className="lg:col-span-5">
<div className="surface-2 rounded-2xl p-6 md:p-8">
<div className="flex items-center gap-4">
<div className="h-14 w-14 rounded-xl bg-blue-500/15 border border-blue-400/25 flex items-center justify-center">
<i className="fa-solid fa-compass text-blue-300 text-xl"></i>
</div>
<div className="">
<p className="text-sm uppercase tracking-[0.2em] text-slate-200/60 font-semibold">Positioning
                            </p>
<p className="text-xl font-bold">Head of Marketing • Enterprise / Consulting / B2B</p>
</div>
</div>
<div className="mt-8 grid grid-cols-2 gap-4">
<div className="surface rounded-xl p-5">
<p className="text-xs uppercase tracking-[0.2em] text-slate-200/60 font-semibold">Focus</p>
<p className="mt-2 font-bold">Transformation</p>
<p className="mt-1 text-sm text-slate-200/70">Governance, operating models, and scalable growth.
                            </p>
</div>
<div className="surface rounded-xl p-5">
<p className="text-xs uppercase tracking-[0.2em] text-slate-200/60 font-semibold">Strength</p>
<p className="mt-2 font-bold">Diplomacy</p>
<p className="mt-1 text-sm text-slate-200/70">C-suite advisory and complex stakeholder
                                alignment.</p>
</div>
<div className="surface rounded-xl pt-5 pr-5 pb-5 pl-5">
<p className="text-xs uppercase tracking-[0.2em] text-slate-200/60 font-semibold">Delivery</p>
<p className="font-bold mt-2">Integrated GTM</p>
<p className="mt-1 text-sm text-slate-200/70">Digital + traditional + communications alignment.
                            </p>
</div>
<div className="surface rounded-xl p-5">
<p className="text-xs uppercase tracking-[0.2em] text-slate-200/60 font-semibold">Method</p>
<p className="mt-2 font-bold">Data-led</p>
<p className="text-sm text-slate-200/70 mt-1">Web Optimsation, SEO, Content  mangement, Insights, analytics, performance governance.</p>
</div>
</div>
</div>
</div>
</div>
</header>

<section className="pt-20 pb-20" id="summary">
<div className="mx-auto max-w-5xl px-6">
<div className="surface-2 md:p-12 rounded-2xl pt-8 pr-8 pb-8 pl-8">
<div className="flex items-center gap-4 mb-6">
<div className="h-px w-10 bg-blue-400"></div>
<p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-300">Executive Summary</p>
</div>
<p className="text-xl md:text-2xl leading-relaxed text-slate-100/90 font-light">
                    Strategic Marketing &amp; Brand Leader with 15+ years driving enterprise-level marketing transformation,
                    brand reputation management, and cross-functional stakeholder engagement for global organizations
                    including
                    <span className="font-semibold text-white">Dell</span>,
                    <span className="font-semibold text-white">IBM</span>, and leading consulting firms.
                    Proven advisor to senior executives, with a track record of shaping corporate marketing strategy,
                    safeguarding brand equity,
                    and building high-performing teams across digital, brand, and communications functions.
                    <br/><br/>
          Experienced in orchestrating integrated marketing programs, community engagement initiatives, large-scale events,
          and internal/external communication frameworks. Known for mentoring early-career talent, enabling organizational capability building,
          and maintaining high-quality standards across all marketing outputs. Adept at navigating complex, multicultural environments and aligning
          marketing operations with mission-driven organizational priorities.
                </p>
</div>
</div>
</section>

<section className="py-20" id="competencies">
<div className="mx-auto max-w-7xl px-6">
<div className="flex items-end justify-between gap-6 flex-wrap mb-10">
<div className="">
<h2 className="text-3xl md:text-4xl font-bold">Core Leadership Competencies</h2>
<p className="mt-3 text-slate-200/70 max-w-2xl">
                        Executive-level leadership across strategy, governance, stakeholder alignment, delivery
                        excellence, and measurable outcomes.
                    </p>
</div>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="surface-2 rounded-2xl p-7 card-hover">
<div className="flex items-center gap-3">
<i className="fa-solid fa-chess-king text-blue-300"></i>
<h3 className="text-xl font-bold">Enterprise Marketing Strategy</h3>
</div>
<p className="mt-3 text-slate-200/70">Enterprise roadmaps, operating models, and strategic planning tied
                        to business priorities.</p>
</div>
<div className="surface-2 rounded-2xl p-7 card-hover">
<div className="flex items-center gap-3">
<i className="fa-solid fa-shield text-blue-300"></i>
<h3 className="text-xl font-bold">Brand Governance &amp; Reputation Management</h3>
</div>
<p className="mt-3 text-slate-200/70">Brand standards, risk controls, crisis readiness, and consistency
                        across regions and teams.</p>
</div>
<div className="surface-2 rounded-2xl p-7 card-hover">
<div className="flex items-center gap-3">
<i className="fa-solid fa-handshake-angle text-blue-300"></i>
<h3 className="text-xl font-bold">Executive Advisory &amp; Stakeholder Diplomacy</h3>
</div>
<p className="mt-3 text-slate-200/70">C-suite alignment, cross-functional influence, and decision
                        enablement through clarity.</p>
</div>
<div className="surface-2 rounded-2xl p-7 card-hover">
<div className="flex items-center gap-3">
<i className="fa-solid fa-bullhorn text-blue-300"></i>
<h3 className="text-xl font-bold">Integrated Campaign Leadership (Digital + Traditional)</h3>
</div>
<p className="mt-3 text-slate-200/70">Omnichannel planning, message discipline, funnel alignment, and
                        performance governance.</p>
</div>
<div className="surface-2 rounded-2xl p-7 card-hover">
<div className="flex items-center gap-3">
<i className="fa-solid fa-people-group text-blue-300"></i>
<h3 className="text-xl font-bold">Community Engagement &amp; Partnership Ecosystems</h3>
</div>
<p className="mt-3 text-slate-200/70">Programs that build credibility, trust, and pipeline through
                        strategic partnerships.</p>
</div>
<div className="surface-2 rounded-2xl p-7 card-hover">
<div className="flex items-center gap-3">
<i className="fa-solid fa-comments text-blue-300"></i>
<h3 className="text-xl font-bold">Corporate Communications Alignment</h3>
</div>
<p className="mt-3 text-slate-200/70">Internal/external narrative alignment and executive-ready
                        messaging frameworks.</p>
</div>
<div className="surface-2 rounded-2xl p-7 card-hover">
<div className="flex items-center gap-3">
<i className="fa-solid fa-calendar-days text-blue-300"></i>
<h3 className="text-xl font-bold">Events, Conferences &amp; Professional Development Programs</h3>
</div>
<p className="mt-3 text-slate-200/70">Strategic events that elevate brand reputation and strengthen
                        professional communities.</p>
</div>
<div className="surface-2 rounded-2xl p-7 card-hover">
<div className="flex items-center gap-3">
<i className="fa-solid fa-user-group text-blue-300"></i>
<h3 className="text-xl font-bold">Team Leadership, Coaching &amp; Capacity Building</h3>
</div>
<p className="mt-3 text-slate-200/70">Mentorship, performance culture, hiring for outcomes, and scalable
                        team systems.</p>
</div>
<div className="surface-2 rounded-2xl p-7 card-hover">
<div className="flex items-center gap-3">
<i className="fa-solid fa-scale-balanced text-blue-300"></i>
<h3 className="text-xl font-bold">Budget Ownership &amp; Vendor/Agency Governance</h3>
</div>
<p className="mt-3 text-slate-200/70">Budget optimization, partner selection, SLAs, and agency
                        performance management.</p>
</div>
<div className="surface-2 rounded-2xl p-7 card-hover lg:col-span-3">
<div className="flex items-center gap-3">
<i className="fa-solid fa-chart-line text-blue-300"></i>
<h3 className="text-xl font-bold">Data-Driven Decision Making</h3>
</div>
<p className="mt-3 text-slate-200/70 max-w-4xl">
                        Translating insights into executive decisions: measurement strategy, dashboards, performance
                        reviews, and experimentation.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-20" id="skills">
<div className="mx-auto max-w-7xl px-6">
<div className="surface-2 rounded-2xl p-8 md:p-12">
<div className="flex items-center justify-between gap-6 flex-wrap">
<div className="">
<h2 className="text-3xl md:text-4xl font-bold">Technical &amp; Professional Skills</h2>
<p className="mt-3 text-slate-200/70">A modern leadership toolkit spanning governance, growth, and
                            AI-enabled execution.</p>
</div>
</div>
<div className="mt-10 flex flex-wrap gap-3">
<span className="chip px-4 py-2 rounded-full text-sm font-semibold">Brand Strategy</span>
<span className="chip px-4 py-2 rounded-full text-sm font-semibold">Stakeholder Communication</span>
<span className="chip px-4 py-2 rounded-full text-sm font-semibold">Executive Reporting</span>
<span className="chip px-4 py-2 rounded-full text-sm font-semibold">Marketing Governance</span>
<span className="chip px-4 py-2 rounded-full text-sm font-semibold">Team Leadership</span>
<span className="chip px-4 py-2 rounded-full text-sm font-semibold">Event Strategy</span>
<span className="chip px-4 py-2 rounded-full text-sm font-semibold">Community Engagement</span>
<span className="chip text-sm font-semibold rounded-full pt-2 pr-4 pb-2 pl-4" style={{}}>SEO &amp; Web Optimization</span>
<span className="chip px-4 py-2 rounded-full text-sm font-semibold">Digital Strategy</span>
<span className="chip px-4 py-2 rounded-full text-sm font-semibold">Performance Analytics</span>
<span className="chip px-4 py-2 rounded-full text-sm font-semibold">Content Strategy</span>
<span className="chip px-4 py-2 rounded-full text-sm font-semibold">Agency Management</span>
<span className="chip px-4 py-2 rounded-full text-sm font-semibold">Budget Optimization</span>
<span className="chip text-sm font-semibold text-blue-200 bg-blue-500/10 border-blue-400/30 rounded-full pt-2 pr-4 pb-2 pl-4">
            AI Tools for Marketing
          </span><span className="chip text-sm font-semibold text-blue-200 bg-blue-500/10 border-blue-400/30 rounded-full pt-2 pr-4 pb-2 pl-4" style={{}}>Email Marketing Campaigns</span>
</div>
</div>
</div>
</section>

<section className="pt-20 pb-20" id="certifications">
<div className="mx-auto max-w-7xl px-6">
<div className="flex items-end justify-between flex-wrap gap-6 mb-10">
<div className="">
<h2 className="text-3xl md:text-4xl font-bold">Certifications</h2>
<p className="mt-3 text-slate-200/70">Continuous learning focused on modern growth, AI, and performance
                        marketing.</p>
</div>
</div>
<div className="grid md:grid-cols-2 gap-6">
<div className="surface-2 rounded-2xl p-7 card-hover">
<div className="flex items-start justify-between gap-4">
<div className="">
<p className="text-xs uppercase tracking-[0.25em] text-blue-300 font-semibold">2025</p>
<h3 className="mt-2 text-xl font-bold">Generative AI Mastermind</h3>
<p className="mt-1 text-slate-200/70">Growth School</p>
</div>
<div className="h-12 w-12 rounded-xl bg-blue-500/15 border border-blue-400/25 flex items-center justify-center">
<i className="fa-solid fa-wand-magic-sparkles text-blue-300"></i>
</div>
</div>
</div>
<div className="surface-2 rounded-2xl p-7 card-hover">
<div className="flex items-start justify-between gap-4">
<div className="">
<p className="text-xs uppercase tracking-[0.25em] text-blue-300 font-semibold">2025</p>
<h3 className="mt-2 text-xl font-bold">Vibecoding: From Idea to App</h3>
<p className="mt-1 text-slate-200/70">Airtribe</p>
</div>
<div className="h-12 w-12 rounded-xl bg-blue-500/15 border border-blue-400/25 flex items-center justify-center">
<i className="fa-solid fa-code text-blue-300"></i>
</div>
</div>
</div>
<div className="surface-2 rounded-2xl p-7 card-hover">
<div className="flex items-start justify-between gap-4">
<div className="">
<p className="text-xs uppercase tracking-[0.25em] text-slate-200/60 font-semibold">SEO / Digital
                            </p>
<h3 className="mt-2 text-xl font-bold">SEO &amp; Digital Marketing Certifications</h3>
<p className="mt-1 text-slate-200/70">Industry-recognized programs</p>
</div>
<div className="h-12 w-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
<i className="fa-solid fa-magnifying-glass-chart text-slate-200/80"></i>
</div>
</div>
</div>
<div className="surface-2 rounded-2xl p-7 card-hover">
<div className="flex items-start justify-between gap-4">
<div className="">
<p className="text-xs uppercase tracking-[0.25em] text-slate-200/60 font-semibold">Performance
                            </p>
<h3 className="mt-2 text-xl font-bold">Performance Marketing &amp; Analytics Certifications</h3>
<p className="mt-1 text-slate-200/70">Measurement, attribution, optimization</p>
</div>
<div className="h-12 w-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
<i className="fa-solid fa-chart-simple text-slate-200/80"></i>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="pt-20 pb-20" id="contact">
<div className="mx-auto max-w-5xl px-6">
<div className="surface-2 md:p-12 rounded-2xl pt-8 pr-8 pb-8 pl-8">
<h2 className="text-3xl md:text-4xl font-bold">Let’s connect</h2>
<p className="text-slate-200/70 max-w-2xl mt-4">If you're looking for a marketing professional who combines strategic thinking with hands-on execution. Ready to start immediately | Open to contract, permanent, or remote-based roles</p>
<div className="mt-10 flex flex-wrap items-center gap-4">
<a className="hover:bg-slate-100 transition font-extrabold text-slate-950 bg-white rounded-xl pt-3 pr-6 pb-3 pl-6" href="/mailto:">
<i className="fa-solid fa-envelope mr-2"></i> hab.oos@gmail.com
                    </a>
</div>
<div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-sm text-slate-200/55">
<p className="">© <span className="" id="year">2026</span> Head of Marketing Portfolio</p>
<p className="">Brand Governance • Executive Advisory • Integrated Campaign Leadership</p>
</div>
</div>
</div>
</section>

    </>
  );
}
