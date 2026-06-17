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



      // Set year
      document.getElementById('y').textContent = new Date().getFullYear();

      // Initialize lucide icons with stroke width 1.5
      window.addEventListener('DOMContentLoaded', () => {
        if (window.lucide) {
          window.lucide.createIcons({
            attrs: { 'stroke-width': 1.5 }
          });
        }
      });
    
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
      

<header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/30 border-b border-white/10">
<div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-md bg-white/5 border border-white/10 grid place-items-center">
<span className="text-white tracking-tight font-semibold" style={{fontFamily: '\'Plus Jakarta Sans\', Inter, ui-sans-serif', letterSpacing: '-0.02em'}}>MC</span>
</div>
<span className="text-sm text-white/60">The Master Case</span>
</div>
<nav className="hidden md:flex items-center gap-6 text-sm text-white/60">
<a className="hover:text-white transition-colors" href="#why">Why</a>
<a className="hover:text-white transition-colors" href="#recognition">Recognition</a>
<a className="hover:text-white transition-colors" href="#testimonials">Testimonials</a>
</nav>
<a className="inline-flex items-center gap-2 rounded-md bg-[#FFD700] text-black text-sm px-4 py-2.5 font-medium hover:bg-[#e6c200] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FFD700]" href="#cta">
<i className="h-4 w-4" data-lucide="bolt"></i>
          Join the Challenge
        </a>
</div>
</header>

<section className="relative overflow-hidden">

<div className="absolute inset-0">
<img alt="Abstract AI background" className="h-full w-full object-cover opacity-25" src="https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-[radial-gradient(1000px_600px_at_10%_-10%,rgba(255,215,0,0.15),transparent_60%),radial-gradient(800px_400px_at_90%_110%,rgba(255,255,255,0.06),transparent_60%)]"></div>
<div className="absolute inset-0 bg-gradient-to-b from-black via-black/60 to-black"></div>
</div>
<div className="relative mx-auto max-w-6xl px-6 pt-20 pb-24 md:pt-28 md:pb-32">
<div className="max-w-3xl">
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/60">
<i className="h-3.5 w-3.5" data-lucide="globe-2"></i>
            Global cohort • Ages under 30
          </div>
<h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight" style={{fontFamily: '\'Plus Jakarta Sans\', Inter, ui-sans-serif'}}>
            Join the Elite. Beat the Algorithm.
          </h1>
<p className="mt-5 text-base md:text-lg text-white/70 max-w-2xl" style={{fontFamily: 'Inter, ui-sans-serif'}}>
            The international challenge where rising leaders prove they can think, build, and lead in the AI economy. Selective. Rigorous. Career-defining.
          </p>
<div className="mt-8 flex flex-col sm:flex-row items-start gap-4">
<a className="inline-flex items-center gap-2 rounded-md bg-[#FFD700] text-black text-sm px-5 py-3.5 font-medium hover:bg-[#e6c200] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FFD700]" href="#cta">
<i className="h-4 w-4" data-lucide="rocket"></i>
              Join the Challenge
            </a>
<a className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 text-white text-sm px-5 py-3.5 font-medium hover:border-white/25 hover:bg-white/[0.08] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/40" href="#why">
<i className="h-4 w-4" data-lucide="chevron-down"></i>
              Learn more
            </a>
</div>
</div>

<div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6">
<div className="rounded-lg border border-white/10 bg-white/[0.04] p-5">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-md bg-white/5 border border-white/10 grid place-items-center">
<i className="h-4.5 w-4.5 text-[#FFD700]" data-lucide="trophy"></i>
</div>
<div className="text-sm">
<div className="font-medium text-white/90" style={{fontFamily: '\'Plus Jakarta Sans\', Inter, ui-sans-serif'}}>Global Prestige</div>
<div className="text-white/60">Top 1% earn champion status</div>
</div>
</div>
</div>
<div className="rounded-lg border border-white/10 bg-white/[0.04] p-5">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-md bg-white/5 border border-white/10 grid place-items-center">
<i className="h-4.5 w-4.5 text-[#FFD700]" data-lucide="target"></i>
</div>
<div className="text-sm">
<div className="font-medium text-white/90" style={{fontFamily: '\'Plus Jakarta Sans\', Inter, ui-sans-serif'}}>Real-World Rigor</div>
<div className="text-white/60">Case sprints with live data</div>
</div>
</div>
</div>
<div className="rounded-lg border border-white/10 bg-white/[0.04] p-5">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-md bg-white/5 border border-white/10 grid place-items-center">
<i className="h-4.5 w-4.5 text-[#FFD700]" data-lucide="shield-check"></i>
</div>
<div className="text-sm">
<div className="font-medium text-white/90" style={{fontFamily: '\'Plus Jakarta Sans\', Inter, ui-sans-serif'}}>Selective Cohort</div>
<div className="text-white/60">Ambitious talents under 30</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative border-t border-white/10" id="why">
<div className="absolute inset-0 pointer-events-none bg-[radial-gradient(500px_300px_at_50%_0%,rgba(255,215,0,0.08),transparent_60%)]"></div>
<div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
<div className="max-w-3xl">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight" style={{fontFamily: '\'Plus Jakarta Sans\', Inter, ui-sans-serif'}}>Why The Master Case</h2>
<p className="mt-4 text-white/70" style={{fontFamily: 'Inter, ui-sans-serif'}}>
            The Master Case is the career-defining challenge to prove your skills in the AI economy.
          </p>
</div>

<div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
<div className="rounded-lg border border-white/10 bg-white/[0.04] p-5 hover:bg-white/[0.06] transition-colors">
<div className="flex items-start gap-3">
<div className="h-10 w-10 rounded-lg border border-[#FFD700]/30 bg-[#FFD700]/5 grid place-items-center">
<i className="h-5 w-5 text-[#FFD700]" data-lucide="brain"></i>
</div>
<div>
<div className="font-medium text-white/90" style={{fontFamily: '\'Plus Jakarta Sans\', Inter, ui-sans-serif'}}>Strategic AI Integration</div>
<p className="text-sm text-white/60 mt-1">Architect AI to create compounding advantage.</p>
</div>
</div>
</div>
<div className="rounded-lg border border-white/10 bg-white/[0.04] p-5 hover:bg-white/[0.06] transition-colors">
<div className="flex items-start gap-3">
<div className="h-10 w-10 rounded-lg border border-[#FFD700]/30 bg-[#FFD700]/5 grid place-items-center">
<i className="h-5 w-5 text-[#FFD700]" data-lucide="line-chart"></i>
</div>
<div>
<div className="font-medium text-white/90" style={{fontFamily: '\'Plus Jakarta Sans\', Inter, ui-sans-serif'}}>Data-Driven Decision Making</div>
<p className="text-sm text-white/60 mt-1">Translate data into decisive, timely action.</p>
</div>
</div>
</div>
<div className="rounded-lg border border-white/10 bg-white/[0.04] p-5 hover:bg-white/[0.06] transition-colors">
<div className="flex items-start gap-3">
<div className="h-10 w-10 rounded-lg border border-[#FFD700]/30 bg-[#FFD700]/5 grid place-items-center">
<i className="h-5 w-5 text-[#FFD700]" data-lucide="globe-2"></i>
</div>
<div>
<div className="font-medium text-white/90" style={{fontFamily: '\'Plus Jakarta Sans\', Inter, ui-sans-serif'}}>Cross-Cultural Leadership</div>
<p className="text-sm text-white/60 mt-1">Lead diverse teams with global fluency.</p>
</div>
</div>
</div>
<div className="rounded-lg border border-white/10 bg-white/[0.04] p-5 hover:bg-white/[0.06] transition-colors">
<div className="flex items-start gap-3">
<div className="h-10 w-10 rounded-lg border border-[#FFD700]/30 bg-[#FFD700]/5 grid place-items-center">
<i className="h-5 w-5 text-[#FFD700]" data-lucide="layers"></i>
</div>
<div>
<div className="font-medium text-white/90" style={{fontFamily: '\'Plus Jakarta Sans\', Inter, ui-sans-serif'}}>Systems Thinking</div>
<p className="text-sm text-white/60 mt-1">Solve root causes at organizational scale.</p>
</div>
</div>
</div>
<div className="rounded-lg border border-white/10 bg-white/[0.04] p-5 hover:bg-white/[0.06] transition-colors">
<div className="flex items-start gap-3">
<div className="h-10 w-10 rounded-lg border border-[#FFD700]/30 bg-[#FFD700]/5 grid place-items-center">
<i className="h-5 w-5 text-[#FFD700]" data-lucide="lightbulb"></i>
</div>
<div>
<div className="font-medium text-white/90" style={{fontFamily: '\'Plus Jakarta Sans\', Inter, ui-sans-serif'}}>Innovation Management</div>
<p className="text-sm text-white/60 mt-1">Ship bold ideas with operational discipline.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative border-t border-white/10" id="recognition">
<div className="absolute inset-0 pointer-events-none bg-[radial-gradient(600px_400px_at_10%_20%,rgba(255,215,0,0.06),transparent_60%)]"></div>
<div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
<div className="max-w-3xl">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight" style={{fontFamily: '\'Plus Jakarta Sans\', Inter, ui-sans-serif'}}>Global Recognition</h2>
<p className="mt-4 text-white/70" style={{fontFamily: 'Inter, ui-sans-serif'}}>Earn distinctions that signal excellence to top employers, investors, and peers.</p>
</div>
<div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="rounded-xl border border-white/10 bg-white/[0.04] p-6 hover:bg-white/[0.06] transition-colors">
<div className="flex items-start gap-4">
<div className="relative h-12 w-12 rounded-full bg-[#FFD700]/10 border border-[#FFD700]/50 grid place-items-center">
<i className="h-5.5 w-5.5 text-[#FFD700]" data-lucide="medal"></i>
<span className="absolute -bottom-1 -right-1 text-[10px] px-1.5 py-0.5 rounded border border-[#FFD700]/40 bg-[#FFD700]/15 text-[#FFD700]">Top 1%</span>
</div>
<div>
<div className="font-semibold text-white/90 tracking-tight" style={{fontFamily: '\'Plus Jakarta Sans\', Inter, ui-sans-serif'}}>Global Champion</div>
<p className="text-sm text-white/65 mt-1" style={{fontFamily: 'Inter, ui-sans-serif'}}>Reserved for the top 1% of performers across all cases and evaluations.</p>
</div>
</div>
</div>

<div className="rounded-xl border border-white/10 bg-white/[0.04] p-6 hover:bg-white/[0.06] transition-colors">
<div className="flex items-start gap-4">
<div className="h-12 w-12 rounded-full bg-white/5 border border-white/20 grid place-items-center">
<i className="h-5.5 w-5.5 text-white/80" data-lucide="award"></i>
</div>
<div>
<div className="font-semibold text-white/90 tracking-tight" style={{fontFamily: '\'Plus Jakarta Sans\', Inter, ui-sans-serif'}}>Distinguished Finalist</div>
<p className="text-sm text-white/65 mt-1" style={{fontFamily: 'Inter, ui-sans-serif'}}>Recognized among the top 10% for sustained excellence and impact.</p>
</div>
</div>
</div>

<div className="rounded-xl border border-white/10 bg-white/[0.04] p-6 hover:bg-white/[0.06] transition-colors">
<div className="flex items-start gap-4">
<div className="h-12 w-12 rounded-full bg-white/5 border border-white/20 grid place-items-center">
<i className="h-5.5 w-5.5 text-white/80" data-lucide="shield"></i>
</div>
<div>
<div className="font-semibold text-white/90 tracking-tight" style={{fontFamily: '\'Plus Jakarta Sans\', Inter, ui-sans-serif'}}>Elite Talent</div>
<p className="text-sm text-white/65 mt-1" style={{fontFamily: 'Inter, ui-sans-serif'}}>Completion with merit, signaling high potential and readiness to lead.</p>
</div>
</div>
</div>
</div>

<div className="mt-10 border-t border-white/10"></div>
<div className="mt-6 text-xs text-white/50" style={{fontFamily: 'Inter, ui-sans-serif'}}>Digital credentials and shareable badges provided upon verification.</div>
</div>
</section>

<section className="relative border-t border-white/10" id="testimonials">
<div className="absolute inset-0 pointer-events-none bg-[radial-gradient(700px_500px_at_80%_0%,rgba(255,255,255,0.05),transparent_60%)]"></div>
<div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
<div className="max-w-3xl">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight" style={{fontFamily: '\'Plus Jakarta Sans\', Inter, ui-sans-serif'}}>What Participants Say</h2>
<p className="mt-4 text-white/70" style={{fontFamily: 'Inter, ui-sans-serif'}}>Real stories from rising leaders who took on The Master Case.</p>
</div>
<div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="rounded-xl border border-white/10 bg-white/[0.04] p-6 hover:bg-white/[0.06] transition-colors">
<div className="flex items-center gap-3">
<img alt="Elena Rodriguez" className="h-10 w-10 rounded-full object-cover ring-1 ring-white/10" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm font-medium text-white/90" style={{fontFamily: '\'Plus Jakarta Sans\', Inter, ui-sans-serif'}}>Elena Rodriguez</div>
<div className="text-xs text-white/60" style={{fontFamily: 'Inter, ui-sans-serif'}}>Strategy Analyst, Madrid</div>
</div>
</div>
<p className="mt-4 text-sm text-white/70" style={{fontFamily: 'Inter, ui-sans-serif'}}>
              The closest thing to a real boardroom sprint. It pushed me to integrate AI strategy with hard business constraints—and deliver.
            </p>
</div>

<div className="rounded-xl border border-white/10 bg-white/[0.04] p-6 hover:bg-white/[0.06] transition-colors">
<div className="flex items-center gap-3">
<img alt="Chen Wei" className="h-10 w-10 rounded-full object-cover ring-1 ring-white/10" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div>
<div className="text-sm font-medium text-white/90" style={{fontFamily: '\'Plus Jakarta Sans\', Inter, ui-sans-serif'}}>Chen Wei</div>
<div className="text-xs text-white/60" style={{fontFamily: 'Inter, ui-sans-serif'}}>ML Engineer, Singapore</div>
</div>
</div>
<p className="mt-4 text-sm text-white/70" style={{fontFamily: 'Inter, ui-sans-serif'}}>
              I learned to justify models to executives, not just tune metrics. The recognition opened doors I didn’t expect.
            </p>
</div>

<div className="rounded-xl border border-white/10 bg-white/[0.04] p-6 hover:bg-white/[0.06] transition-colors">
<div className="flex items-center gap-3">
<img alt="Samuel Jones" className="h-10 w-10 rounded-full object-cover ring-1 ring-white/10" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm font-medium text-white/90" style={{fontFamily: '\'Plus Jakarta Sans\', Inter, ui-sans-serif'}}>Samuel Jones</div>
<div className="text-xs text-white/60" style={{fontFamily: 'Inter, ui-sans-serif'}}>Product Lead, London</div>
</div>
</div>
<p className="mt-4 text-sm text-white/70" style={{fontFamily: 'Inter, ui-sans-serif'}}>
              Systems thinking meets execution. It sharpened how I frame problems and drive alignment across teams.
            </p>
</div>
</div>
</div>
</section>

<section className="relative border-t border-white/10" id="cta">
<div className="absolute inset-0 pointer-events-none bg-[radial-gradient(700px_500px_at_50%_0%,rgba(255,215,0,0.08),transparent_60%)]"></div>
<div className="mx-auto max-w-6xl px-6 py-20 md:py-24 text-center">
<h3 className="text-3xl md:text-4xl font-semibold tracking-tight" style={{fontFamily: '\'Plus Jakarta Sans\', Inter, ui-sans-serif'}}>Ready to compete at the highest level?</h3>
<p className="mt-4 text-white/70 max-w-2xl mx-auto" style={{fontFamily: 'Inter, ui-sans-serif'}}>Apply now to join a global cohort of elite under-30 talents shaping the future of the AI economy.</p>
<div className="mt-8">
<a className="inline-flex items-center gap-2 rounded-md bg-[#FFD700] text-black text-sm px-6 py-4 font-medium hover:bg-[#e6c200] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FFD700]" href="#">
<i className="h-5 w-5" data-lucide="zap"></i>
            Join the Challenge Now
          </a>
</div>
<div className="mt-6 text-xs text-white/50" style={{fontFamily: 'Inter, ui-sans-serif'}}>Limited seats • Cohort admissions on a rolling basis</div>
</div>
</section>

<footer className="border-t border-white/10">
<div className="mx-auto max-w-6xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-md bg-white/5 border border-white/10 grid place-items-center">
<span className="text-white tracking-tight font-semibold text-sm" style={{fontFamily: '\'Plus Jakarta Sans\', Inter, ui-sans-serif', letterSpacing: '-0.02em'}}>MC</span>
</div>
<span className="text-xs text-white/50">© <span id="y">2025</span> The Master Case</span>
</div>
<div className="text-xs text-white/50 flex items-center gap-4">
<a className="hover:text-white/80" href="#">Privacy</a>
<span className="text-white/20">|</span>
<a className="hover:text-white/80" href="#">Terms</a>
<span className="text-white/20">|</span>
<a className="hover:text-white/80" href="#">Contact</a>
</div>
</div>
</footer>




    </>
  );
}
