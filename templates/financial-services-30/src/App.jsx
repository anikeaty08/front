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
      

<header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4 pointer-events-none">
<nav className="pointer-events-auto glass-nav rounded-full pl-6 pr-2 py-2 flex items-center justify-between gap-10 w-full max-w-4xl transition-all duration-300">
<a className="group flex items-center gap-2 shrink-0" href="#">
<iconify-icon className="text-white opacity-80 group-hover:opacity-100 transition-opacity" icon="solar:graph-new-up-linear" width="18"></iconify-icon>
<span className="font-montserrat text-xs tracking-tight font-normal text-white/80 group-hover:text-white transition-colors">
                    Velocity Lines
                </span>
</a>
<a className="text-xs px-5 py-2.5 rounded-full transition-all duration-300 flex items-center gap-2 font-montserrat font-normal bg-white text-black hover:bg-neutral-200 shrink-0" href="https://calendly.com/eric-thevelocitylines/30min" rel="noopener noreferrer" target="_blank">
                Schedule a Call
                <iconify-icon icon="solar:arrow-right-linear" width="14"></iconify-icon>
</a>
</nav>
</header>
<main className="max-w-6xl mx-auto pt-32 px-4 md:px-6 pb-24">

<section className="md:p-20 overflow-hidden text-center border-white/5 rounded-[2rem] mb-8 relative">
<div className="absolute inset-0 bg-grid pointer-events-none opacity-40"></div>
<div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">

<div className="animate-fade-up inline-flex gap-2 text-xs uppercase font-normal text-neutral-300 tracking-widest bg-white/[0.03] border-white/10 border rounded-full mb-10 px-4 py-1.5 items-center">
                    Designed for B2B financial services
                    <span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-40"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-400 opacity-80"></span>
</span>
</div>

<h1 className="animate-fade-up delay-100 text-5xl md:text-6xl lg:text-7xl leading-none font-normal text-white tracking-tight font-serif mb-8">
                    Predictable Meetings with <br className="hidden md:block"/>
<span className="text-neutral-400">
                        Qualified Prospects.
                    </span>
</h1>

<p className="animate-fade-up delay-200 text-base md:text-lg text-neutral-400 leading-relaxed max-w-xl mx-auto mb-12 font-light">
                    Velocity Lines builds Deal Origination systems that book qualified meetings with decision-makers.
                </p>

<div className="animate-fade-up delay-300 w-full max-w-3xl mx-auto mb-12 relative group">
<div className="aspect-video rounded-2xl bg-black border border-white/10 relative overflow-hidden ring-1 ring-white/5 shadow-2xl">
<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="" className="absolute inset-0 w-full h-full grayscale hover:grayscale-0 transition-all duration-700" frameborder="0" src="https://www.youtube.com/embed/d5LSXYYPfV4?rel=0&amp;modestbranding=1" srcdoc="&lt;style&gt;*{padding:0;margin:0;overflow:hidden}html,body{height:100%;background:#000}img{position:absolute;width:100%;top:0;bottom:0;margin:auto;object-fit:cover}.play{position:absolute;width:64px;height:64px;left:50%;top:50%;transform:translate(-50%,-50%);background:rgba(0,0,0,0.6);border-radius:50%;display:flex;align-items:center;justify-content:center;border:1px solid rgba(255,255,255,0.15);transition:all 0.3s ease;box-shadow:0 10px 30px rgba(0,0,0,0.5)}.play:hover{background:rgba(255,255,255,0.1);transform:translate(-50%,-50%) scale(1.05);border-color:rgba(255,255,255,0.3)}svg{width:24px;height:24px;fill:#fff;margin-left:4px}&lt;/style&gt;&lt;a href='https://www.youtube.com/embed/d5LSXYYPfV4?autoplay=1&amp;rel=0&amp;modestbranding=1'&gt;&lt;img src='https://i.ytimg.com/vi/d5LSXYYPfV4/maxresdefault.jpg' alt='Velocity Lines VSL'&gt;&lt;div className='play'&gt;&lt;svg viewBox='0 0 24 24'&gt;&lt;path d='M8 5v14l11-7z'/&gt;&lt;/svg&gt;&lt;/div&gt;&lt;/a&gt;" title="Velocity Lines Deal Origination System">
</iframe>
</div>
</div>

<div className="animate-fade-up delay-500 flex flex-col sm:flex-row gap-4 w-full justify-center">
<a className="px-8 py-3.5 rounded-full text-sm font-normal bg-white text-black hover:bg-neutral-200 transition-all duration-300 flex items-center justify-center gap-2" href="https://calendly.com/eric-thevelocitylines/30min" rel="noopener noreferrer" target="_blank">
                        Schedule a Call
                    </a>
<a className="px-8 py-3.5 rounded-full text-sm font-normal border border-white/10 text-white hover:bg-white/5 transition-all flex items-center justify-center gap-2" href="#system">
<iconify-icon icon="solar:layers-minimalistic-linear" width="16"></iconify-icon>
                        See How it Works
                    </a>
</div>
</div>
</section>

<section className="mb-32 text-center px-4 mt-20">
<p className="text-xs uppercase tracking-widest text-neutral-500 font-normal mb-8">Best fit for</p>
<div className="flex flex-wrap justify-center items-center gap-3 md:gap-6 max-w-4xl mx-auto">
<span className="px-4 py-2 rounded-full border border-white/[0.06] bg-white/[0.01] text-xs text-neutral-400">Private Equity</span>
<span className="px-4 py-2 rounded-full border border-white/[0.06] bg-white/[0.01] text-xs text-neutral-400">Venture Capital</span>
<span className="px-4 py-2 rounded-full border border-white/[0.06] bg-white/[0.01] text-xs text-neutral-400">Capital raising</span>
<span className="px-4 py-2 rounded-full border border-white/[0.06] bg-white/[0.01] text-xs text-neutral-400">M&amp;A advisory</span>
<span className="px-4 py-2 rounded-full border border-white/[0.06] bg-white/[0.01] text-xs text-neutral-400">Tax consulting</span>
<span className="px-4 py-2 rounded-full border border-white/[0.06] bg-white/[0.01] text-xs text-neutral-400">Fractional CFO</span>
<span className="px-4 py-2 rounded-full border border-white/[0.06] bg-white/[0.01] text-xs text-neutral-400">Alternative lending</span>
</div>
</section>

<section className="mb-32">
<div className="max-w-5xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-8 px-4">
<h2 className="text-3xl font-serif text-white tracking-tight font-normal">Recent Results</h2>
<p className="text-xs text-neutral-500 mt-2 md:mt-0 font-light">(System installed for a mandate-driven advisory firm)</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="glass-card p-8 rounded-2xl relative overflow-hidden group">
<div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-10 transition-opacity duration-500 text-white">
<iconify-icon icon="solar:pen-new-square-linear" width="64"></iconify-icon>
</div>
<h3 className="text-5xl font-serif text-white mb-3 tracking-tight font-normal">5</h3>
<p className="text-sm font-normal text-neutral-200 mb-1">Mandates Signed</p>
<p className="text-xs text-neutral-500 font-light">Directly from outbound campaigns</p>
</div>
<div className="glass-card p-8 rounded-2xl relative overflow-hidden group">
<div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-10 transition-opacity duration-500 text-white">
<iconify-icon icon="solar:wallet-money-linear" width="64"></iconify-icon>
</div>
<h3 className="text-5xl font-serif text-white mb-3 tracking-tight font-normal">$140k</h3>
<p className="text-sm font-normal text-neutral-200 mb-1">New Revenue Generated</p>
<p className="text-xs text-neutral-500 font-light">Upfront fees collected</p>
</div>
<div className="glass-card p-8 rounded-2xl relative overflow-hidden group">
<div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-10 transition-opacity duration-500 text-white">
<iconify-icon icon="solar:chart-2-linear" width="64"></iconify-icon>
</div>
<h3 className="text-5xl font-serif text-white mb-3 tracking-tight font-normal">$500k+</h3>
<p className="text-sm font-normal text-neutral-200 mb-1">Pipeline Created</p>
<p className="text-xs text-neutral-500 font-light">Qualified opportunities active</p>
</div>
</div>
</div>
</section>

<section className="mb-32">
<div className="max-w-5xl mx-auto px-4">
<div className="text-center mb-12">
<h2 className="text-3xl font-serif text-white tracking-tight mb-3 font-normal">Which email would your prospect answer?</h2>
<p className="text-xs text-neutral-500 uppercase tracking-widest font-normal">Other Agencies vs Velocity Lines</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="glass-card p-8 rounded-2xl flex flex-col border-red-500/20 bg-red-500/[0.03]">
<div className="flex items-center gap-3 mb-8">
<iconify-icon className="text-red-400" icon="solar:close-circle-linear" width="18"></iconify-icon>
<h3 className="text-red-400 font-normal text-sm">Others: Generic</h3>
</div>
<div className="flex-grow space-y-4 text-xs md:text-sm text-neutral-400 font-light bg-red-500/[0.02] border border-red-500/10 p-6 rounded-xl">
<p><span className="text-red-400/70">Subject:</span> Capital for {{Company Name}}</p>
<hr className="border-red-500/10 my-4"/>
<p>Hi {{First Name}},</p>
<p>We help companies like {{Company Name}} raise growth capital through our investor and lender network.</p>
<p>Are you open to exploring capital options this quarter? If so, what size raise are you considering?</p>
<p>We support both debt and equity across multiple sectors.</p>
<p>Worth a quick call this week?</p>
</div>
</div>

<div className="glass-card p-8 rounded-2xl border-white/15 bg-white/[0.03] flex flex-col">
<div className="flex items-center gap-3 mb-8">
<iconify-icon className="text-white" icon="solar:check-circle-linear" width="18"></iconify-icon>
<h3 className="text-white font-normal text-sm">Velocity Lines: Precise</h3>
</div>
<div className="flex-grow space-y-4 text-xs md:text-sm text-neutral-300 font-light bg-black/40 border border-white/10 p-6 rounded-xl">
<p><span className="text-neutral-500">Subject:</span> Debt financing for {{Company name}}</p>
<hr className="border-white/10 my-4"/>
<p>{{First name}}, congrats on the $30M Series B raise.</p>
<p>Quick one, is {{Company Name}} funding growth entirely with equity?</p>
<p>At your revenue stage, non-dilutive capital from direct lenders can be 5–10x cheaper than another equity round.</p>
<p>We recently helped a FinTech company raise $20M in debt without diluting the cap table.</p>
<p>Open to a quick 15 to see what options are available for {{company name}}?</p>
</div>
</div>
</div>
</div>
</section>

<section className="mb-32" id="system">
<div className="max-w-4xl mx-auto px-4">
<div className="text-center mb-16">
<h2 className="text-3xl font-serif text-white tracking-tight mb-3 font-normal">The Velocity Lines System</h2>
<p className="text-neutral-400 text-sm font-light">A simple 5-stage rollout. System deployed in 2–3 weeks.</p>
</div>
<div className="space-y-4 relative before:absolute before:inset-y-8 before:left-[43px] md:before:left-[43px] before:w-[1px] before:bg-white/[0.08]">

<div className="glass-card p-6 rounded-2xl flex gap-6 items-start relative z-10">
<div className="text-2xl font-serif text-neutral-600 w-10 shrink-0 text-center bg-black py-1 tracking-tight">01</div>
<div className="pt-1.5">
<h3 className="text-white font-normal text-base mb-2 tracking-tight">Discovery</h3>
<p className="text-sm text-neutral-400 font-light leading-relaxed">Define your ICP and refine positioning to stand out in the market.</p>
</div>
</div>

<div className="glass-card p-6 rounded-2xl flex gap-6 items-start relative z-10">
<div className="text-2xl font-serif text-neutral-600 w-10 shrink-0 text-center bg-black py-1 tracking-tight">02</div>
<div className="pt-1.5">
<h3 className="text-white font-normal text-base mb-2 tracking-tight">Deal Origination Strategy</h3>
<p className="text-sm text-neutral-400 font-light leading-relaxed">Segment-based outreach using up-to-date buying triggers and intent signals.</p>
</div>
</div>

<div className="glass-card p-6 rounded-2xl flex gap-6 items-start relative z-10">
<div className="text-2xl font-serif text-neutral-600 w-10 shrink-0 text-center bg-black py-1 tracking-tight">03</div>
<div className="pt-1.5">
<h3 className="text-white font-normal text-base mb-2 tracking-tight">Omni-channel buildout</h3>
<p className="text-sm text-neutral-400 font-light leading-relaxed">Deploy infrastructure: inboxes/domains, deliverability, lists, sequences, sales assets, LinkedIn lead magnets, tracking.</p>
</div>
</div>

<div className="glass-card p-6 rounded-2xl flex gap-6 items-start relative z-10 border-white/20 bg-white/[0.03]">
<div className="text-2xl font-serif text-white w-10 shrink-0 text-center bg-black py-1 tracking-tight">04</div>
<div className="pt-1.5">
<h3 className="text-white font-normal text-base mb-2 tracking-tight">Launch</h3>
<p className="text-sm text-neutral-400 font-light leading-relaxed">Email-first campaigns go live with precision targeting and qualification rules in place.</p>
</div>
</div>

<div className="glass-card p-6 rounded-2xl flex gap-6 items-start relative z-10">
<div className="text-2xl font-serif text-neutral-600 w-10 shrink-0 text-center bg-black py-1 tracking-tight">05</div>
<div className="pt-1.5">
<h3 className="text-white font-normal text-base mb-2 tracking-tight">Optimize</h3>
<p className="text-sm text-neutral-400 font-light leading-relaxed">Weekly iteration based on reply quality, booked calls, and conversion data.</p>
</div>
</div>
</div>
</div>
</section>

<section className="mb-32 px-4">
<div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="glass-card p-10 rounded-2xl flex flex-col justify-between">
<div>
<h3 className="text-2xl font-serif text-white tracking-tight mb-8 font-normal">Our Commitment</h3>
<ul className="space-y-4 text-sm text-neutral-400 font-light">
<li className="flex items-start gap-3">
<iconify-icon className="text-white shrink-0 mt-0.5" icon="solar:check-read-linear" width="18"></iconify-icon>
<span>Clear deliverables. Transparent reporting.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-white shrink-0 mt-0.5" icon="solar:check-read-linear" width="18"></iconify-icon>
<span>No hidden fees.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-white shrink-0 mt-0.5" icon="solar:check-read-linear" width="18"></iconify-icon>
<span>Built to create a repeatable Deal Origination asset, not a short-term spike.</span>
</li>
</ul>
</div>
</div>

<div className="glass-card p-10 rounded-2xl flex flex-col justify-between relative overflow-hidden">
<div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.02] text-white text-xs font-normal mb-8">
<span className="w-1.5 h-1.5 rounded-full bg-white opacity-80"></span>
                            Limited Availability
                        </div>
<h3 className="text-2xl font-serif text-white tracking-tight mb-4 font-normal">Execution Quality</h3>
<p className="text-sm text-neutral-400 font-light mb-8 leading-relaxed">
                            We take on a small number of partners per quarter to ensure operational excellence and direct focus on your campaigns.
                        </p>
</div>
<div className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/10">
<iconify-icon className="text-neutral-400" icon="solar:users-group-two-rounded-linear" width="20"></iconify-icon>
<p className="text-white font-normal text-sm">
                            Currently accepting 3 new clients this quarter
                        </p>
</div>
</div>
</div>
</section>

<section className="mb-32">
<div className="max-w-3xl mx-auto px-4">
<div className="text-center mb-12">
<h2 className="text-3xl font-serif text-white tracking-tight font-normal">FAQ</h2>
</div>
<div className="space-y-2">
<details className="glass-card rounded-xl group cursor-pointer transition-all duration-300">
<summary className="flex items-center justify-between p-6 text-white font-normal select-none">
<span className="text-sm md:text-base pr-4">Who is this best for?</span>
<span className="transition-transform duration-300 group-open:-rotate-180 text-neutral-500 shrink-0">
<iconify-icon icon="solar:alt-arrow-down-linear" width="18"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-neutral-400 font-light leading-relaxed">
                            B2B firms selling financial or business-critical services. Strong fit when you have a defined buyer and a high-value offer.
                        </div>
</details>
<details className="glass-card rounded-xl group cursor-pointer transition-all duration-300">
<summary className="flex items-center justify-between p-6 text-white font-normal select-none">
<span className="text-sm md:text-base pr-4">How long does it take to launch?</span>
<span className="transition-transform duration-300 group-open:-rotate-180 text-neutral-500 shrink-0">
<iconify-icon icon="solar:alt-arrow-down-linear" width="18"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-neutral-400 font-light leading-relaxed">
                            Build takes ~2–3 weeks. After launch, we iterate weekly to improve quality and volume.
                        </div>
</details>
<details className="glass-card rounded-xl group cursor-pointer transition-all duration-300">
<summary className="flex items-center justify-between p-6 text-white font-normal select-none">
<span className="text-sm md:text-base pr-4">Are these templates or generic lists?</span>
<span className="transition-transform duration-300 group-open:-rotate-180 text-neutral-500 shrink-0">
<iconify-icon icon="solar:alt-arrow-down-linear" width="18"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-neutral-400 font-light leading-relaxed">
                            No. Targeting and campaigns are built per firm. It is an exclusive system for your business.
                        </div>
</details>
<details className="glass-card rounded-xl group cursor-pointer transition-all duration-300">
<summary className="flex items-center justify-between p-6 text-white font-normal select-none">
<span className="text-sm md:text-base pr-4">Which channels do you use?</span>
<span className="transition-transform duration-300 group-open:-rotate-180 text-neutral-500 shrink-0">
<iconify-icon icon="solar:alt-arrow-down-linear" width="18"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-neutral-400 font-light leading-relaxed">
                            Email-first. LinkedIn can be added when useful.
                        </div>
</details>
<details className="glass-card rounded-xl group cursor-pointer transition-all duration-300">
<summary className="flex items-center justify-between p-6 text-white font-normal select-none">
<span className="text-sm md:text-base pr-4">How much of my time is required?</span>
<span className="transition-transform duration-300 group-open:-rotate-180 text-neutral-500 shrink-0">
<iconify-icon icon="solar:alt-arrow-down-linear" width="18"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-neutral-400 font-light leading-relaxed">
                            One kickoff + weekly review + feedback on lead quality.
                        </div>
</details>
<details className="glass-card rounded-xl group cursor-pointer transition-all duration-300">
<summary className="flex items-center justify-between p-6 text-white font-normal select-none">
<span className="text-sm md:text-base pr-4">What is the pricing?</span>
<span className="transition-transform duration-300 group-open:-rotate-180 text-neutral-500 shrink-0">
<iconify-icon icon="solar:alt-arrow-down-linear" width="18"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-neutral-400 font-light leading-relaxed">
                            Based on scope and volume (segments, campaigns, support level). Discussed during the strategy call.
                        </div>
</details>
</div>
</div>
</section>

<section className="text-center px-4 max-w-2xl mx-auto">
<h2 className="text-3xl font-serif text-white tracking-tight mb-4 font-normal">Ready to build your engine?</h2>
<p className="text-neutral-400 font-light mb-8 text-sm">Stop relying on referrals. Let's engineer a predictable outbound system for your firm.</p>
<a className="inline-flex px-8 py-3.5 rounded-full text-sm font-normal bg-white text-black hover:bg-neutral-200 transition-all duration-300 items-center justify-center gap-2" href="https://calendly.com/eric-thevelocitylines/30min" rel="noopener noreferrer" target="_blank">
                Schedule a Call
                <iconify-icon icon="solar:calendar-linear" width="16"></iconify-icon>
</a>
</section>
</main>

<footer className="border-t border-white/10 bg-black py-8 text-center mt-12">
<p className="text-xs text-neutral-600 font-light">© 2024 Velocity Lines. All rights reserved.</p>
</footer>

    </>
  );
}
