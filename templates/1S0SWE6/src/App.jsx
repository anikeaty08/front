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
      
    lucide.createIcons({attr:{focusable:false,'aria-hidden':true}});
    document.getElementById('year').textContent=new Date().getFullYear();
  
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
      
<a className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 bg-[#000] text-white px-4 py-2 rounded-md z-50" href="#main">Skip to content</a>
<header className="sticky top-0 z-50 backdrop-blur bg-white/80 border-b" style={{borderColor: '#FDD7B3'}}>
<nav aria-label="Main" className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
<a className="flex items-center gap-2 font-semibold hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#000]" href="#hero">
<span aria-hidden="true" className="flex items-center justify-center w-5 h-5 rounded-full" style={{background: '#F0532D'}}>
<i className="w-3 h-3 text-white" data-lucide="sparkles"></i>
</span>
        90 Days | AI My Business
      </a>
<button aria-label="Enroll" className="inline-flex items-center gap-2 rounded-md px-5 py-3 text-sm md:text-base font-semibold text-white hover:-translate-y-0.5 hover:shadow-lg transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#000]" style={{background: '#000'}}>
        Enroll
        <i aria-hidden="true" className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</nav>
</header>
<main id="main">
<section className="relative overflow-hidden" id="hero">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute -top-32 -left-32 w-96 h-96 rounded-full blur-3xl opacity-30" style={{background: '#FF9A15'}}></div>
<div className="absolute -bottom-40 right-0 w-[28rem] h-[28rem] rounded-full blur-3xl opacity-30" style={{background: '#1054FF'}}></div>
</div>
<div className="relative max-w-6xl mx-auto px-6 py-20 md:py-32 grid md:grid-cols-2 gap-10 items-center">
<div>
<h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
            AI your business in <span style={{color: '#F0532D'}}>90 days</span>.
          </h1>
<p className="text-lg sm:text-xl mb-8 max-w-md">
            Two hands-on calls per week + 1-to-1 strategy. Replace workflows with revenue-generating automation.
          </p>
<button aria-label="Enroll Now" className="inline-flex items-center gap-3 rounded-md px-6 py-4 text-base font-semibold text-white hover:-translate-y-0.5 hover:shadow-lg transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#000]" style={{background: '#000'}}>
            Enroll Now — 90-Day Sprint
            <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
<div className="mt-6 space-y-4">
<div className="flex flex-wrap items-center gap-6">
<a className="inline-flex items-center gap-2 text-sm font-medium hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#000]" href="#">
<i className="w-4 h-4 text-[#1054FF]" data-lucide="users"></i>
                Builder Launch Waitlist
              </a>
<a className="inline-flex items-center gap-2 text-sm font-medium hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#000]" href="#">
<i className="w-4 h-4 text-[#F0532D]" data-lucide="message-circle"></i>
                Free Community
              </a>
</div>
<div className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium text-white shadow-sm" style={{background: 'linear-gradient(90deg,#1054FF 0%,#F0532D 100%)'}}>
<i className="w-3 h-3" data-lucide="shopping-bag"></i>
              Built by the operators behind a $250 M e-commerce team
            </div>
</div>
</div>
<div className="relative">
<img alt="Team collaborating with AI" className="rounded-xl shadow-lg h-72 md:h-96 w-full object-cover" src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute -inset-1 rounded-xl blur-md opacity-30" style={{background: 'linear-gradient(130deg,#F0532D 0%,#FDE7D4 100%)'}}></div>
</div>
</div>
</section>
<section className="bg-[#FFF7F2]/80 py-24" id="breakdown">
<div className="max-w-6xl mx-auto px-6">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-center mb-12">
          90 Days to AI My Business — Week-by-Week Breakdown
        </h2>
<div className="overflow-x-auto rounded-xl border">
<table className="min-w-full text-sm">
<thead className="bg-white">
<tr className="text-left">
<th className="px-5 py-4 font-medium">Week(s)</th>
<th className="px-5 py-4 font-medium">Sprint Focus</th>
<th className="px-5 py-4 font-medium">What You’ll Do</th>
</tr>
</thead>
<tbody>
<tr className="bg-white">
<td className="px-5 py-5 font-medium">Weeks 1–2</td>
<td className="px-5 py-5 flex items-center gap-2"><i className="w-4 h-4 text-[#F0532D]" data-lucide="map"></i>Kickoff + Opportunity Mapping</td>
<td className="px-5 py-5">Map highest-leverage workflows and draft your personalized AI roadmap.</td>
</tr>
<tr className="bg-[#FFF7F2]">
<td className="px-5 py-5 font-medium">Weeks 3–4</td>
<td className="px-5 py-5 flex items-center gap-2"><i className="w-4 h-4 text-[#1054FF]" data-lucide="zap"></i>Tool Setup + Workflow #1</td>
<td className="px-5 py-5">Choose your stack and build your first revenue-driving automation live with us.</td>
</tr>
<tr className="bg-white">
<td className="px-5 py-5 font-medium">Week 5</td>
<td className="px-5 py-5 flex items-center gap-2"><i className="w-4 h-4 text-[#1C664D]" data-lucide="bar-chart-3"></i>ROI Checkpoint #1</td>
<td className="px-5 py-5">Submit a 30-day check-in to measure wins and get targeted feedback.</td>
</tr>
<tr className="bg-[#FFF7F2]">
<td className="px-5 py-5 font-medium">Weeks 6–7</td>
<td className="px-5 py-5 flex items-center gap-2"><i className="w-4 h-4 text-[#F0532D]" data-lucide="repeat"></i>Iteration + Workflow #2</td>
<td className="px-5 py-5">Refine workflow #1 and launch a second automation tackling your next bottleneck.</td>
</tr>
<tr className="bg-white">
<td className="px-5 py-5 font-medium">Weeks 8–9</td>
<td className="px-5 py-5 flex items-center gap-2"><i className="w-4 h-4 text-[#1054FF]" data-lucide="link"></i>System Linking + Delegation</td>
<td className="px-5 py-5">Connect systems, assign owners, and turn wins into repeatable SOPs.</td>
</tr>
<tr className="bg-[#FFF7F2]">
<td className="px-5 py-5 font-medium">Week 10</td>
<td className="px-5 py-5 flex items-center gap-2"><i className="w-4 h-4 text-[#1C664D]" data-lucide="trending-up"></i>ROI Checkpoint #2</td>
<td className="px-5 py-5">Capture day-60 ROI data and optimize advanced setups on group call.</td>
</tr>
<tr className="bg-white">
<td className="px-5 py-5 font-medium">Weeks 11–12</td>
<td className="px-5 py-5 flex items-center gap-2"><i className="w-4 h-4 text-[#F0532D]" data-lucide="check-circle"></i>Final Optimizations</td>
<td className="px-5 py-5">Lock in two production-ready automations and document for scale.</td>
</tr>
<tr className="bg-[#FFF7F2]">
<td className="px-5 py-5 font-medium">Final Week</td>
<td className="px-5 py-5 flex items-center gap-2"><i className="w-4 h-4 text-[#1054FF]" data-lucide="megaphone"></i>Showcase + Next Steps</td>
<td className="px-5 py-5">Present your results, collect testimonials, and map your ongoing AI journey.</td>
</tr>
</tbody>
</table>
</div>
<div className="text-center mt-12">
<p className="text-lg font-medium mb-6">Ready to automate what matters most? Join our next cohort.</p>
<button aria-label="Join Cohort" className="inline-flex items-center gap-3 rounded-lg px-8 py-4 font-semibold text-white hover:-translate-y-0.5 hover:shadow-lg transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#000]" style={{background: '#000'}}>
            Apply Now
            <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</section>
<section className="max-w-6xl mx-auto px-6 py-24">
<div className="grid lg:grid-cols-2 gap-12 items-start">
<div>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">See the Impact</h2>
<p className="mt-4 text-lg max-w-md">
            You can expect to streamline operations, reclaim valuable time, and unlock new revenue opportunities within just a few months of implementation.
          </p>
<ul className="mt-8 space-y-4">
<li className="flex gap-3">
<i className="w-5 h-5 text-[#F0532D]" data-lucide="clock"></i>
<span className="text-sm">Operational hours reclaimed</span>
</li>
<li className="flex gap-3">
<i className="w-5 h-5 text-[#1054FF]" data-lucide="dollar-sign"></i>
<span className="text-sm">Net-new revenue added</span>
</li>
<li className="flex gap-3">
<i className="w-5 h-5 text-[#1C664D]" data-lucide="smile"></i>
<span className="text-sm">Happier customers &amp; employees</span>
</li>
</ul>
</div>
<div className="relative max-w-md w-full mx-auto">
<div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#F0532D]/40 via-[#FDD7B3]/40 to-[#1054FF]/40 blur-2xl -z-10"></div>
<div className="relative rounded-2xl border shadow-xl bg-white/80 backdrop-blur-lg p-8">

<div className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-lg font-semibold text-white mb-6" style={{background: 'linear-gradient(90deg,#1054FF 0%,#F0532D 100%)'}}>
              90 Days | AI My Business
            </div>

<p className="text-sm text-[#000]/80">Hands-on, team-ready cohort</p>
<div className="mt-8 flex items-end gap-2">
<span className="text-5xl font-semibold tracking-tight">$999</span>
<span className="text-sm text-[#000]/70">USD</span>
</div>
<div className="mt-4 inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium text-[#1054FF] bg-[#1054FF]/10">
<i className="w-3 h-3" data-lucide="users"></i>
              Up to 3 seats included
            </div>
<ul className="mt-8 space-y-3 text-sm">
<li className="flex gap-2"><i className="w-4 h-4 text-[#1C664D]" data-lucide="check-circle"></i>24 live group sessions (2 / week)</li>
<li className="flex gap-2"><i className="w-4 h-4 text-[#1C664D]" data-lucide="check-circle"></i>Unlimited async support</li>
<li className="flex gap-2"><i className="w-4 h-4 text-[#1C664D]" data-lucide="check-circle"></i>1-to-1 strategy calls</li>
<li className="flex gap-2"><i className="w-4 h-4 text-[#1C664D]" data-lucide="check-circle"></i><span className="font-medium">Team licence (up to 3 seats)</span></li>
</ul>
<button aria-label="Enroll Now" className="mt-10 w-full inline-flex justify-center items-center gap-2 rounded-lg px-6 py-4 font-semibold text-white hover:-translate-y-0.5 hover:shadow-lg transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#000]" style={{background: '#000'}}>
              Enroll Now
              <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</div>
</section>
</main>
<footer className="border-t bg-white">
<div className="max-w-6xl mx-auto px-6 py-12 flex flex-col items-center gap-8">
<a className="flex items-center gap-2 font-semibold hover:opacity-80" href="https://frameworkfriday.com" rel="noopener" target="_blank">
<span aria-hidden="true" className="flex items-center justify-center w-5 h-5 rounded-full" style={{background: '#F0532D'}}>
<i className="w-3 h-3 text-white" data-lucide="sparkles"></i>
</span>
        FrameworkFriday.com
      </a>
<nav aria-label="Footer" className="flex flex-wrap justify-center gap-6 text-sm">
<a className="hover:underline" href="#">Blog</a>
<a className="hover:underline" href="#">Free Community</a>
<a className="hover:underline" href="#">Builder Launch Waitlist</a>
</nav>
<p className="text-xs text-[#000]/60 text-center">© <span id="year"></span> AI My Business. All rights reserved.</p>
</div>
</footer>


    </>
  );
}
