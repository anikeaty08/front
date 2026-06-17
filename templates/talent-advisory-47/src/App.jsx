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



        lucide.createIcons();
    
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
      
<main className="max-w-7xl mx-auto px-6 py-24 space-y-32 md:space-y-48">

<section className="space-y-16">
<h2 className="text-xl md:text-2xl font-semibold tracking-tight text-center uppercase text-white">
                RECOMMENDED BY OVER 120 PEOPLE ON LINKEDIN
            </h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="p-8 rounded-3xl bg-[#151518] border border-white/5 flex flex-col justify-between">
<div className="space-y-6">
<i className="w-8 h-8 text-blue-500/50" data-lucide="quote" strokeWidth="1.5"></i>
<p className="text-lg text-zinc-400 leading-relaxed">
                            Ian was very professional and a great asset. He worked with both myself and my future employer to negotiate a fair outcome that everyone was pleased with. I would highly recommend working with Ian and his team to anyone and won't hesitate to use them in the future.
                        </p>
</div>
<div className="mt-8 pt-6 border-t border-white/5">
<p className="text-base font-semibold text-white">CEO</p>
<p className="text-base text-zinc-500">Satcoms</p>
</div>
</div>

<div className="p-8 rounded-3xl bg-[#151518] border border-white/5 flex flex-col justify-between">
<div className="space-y-6">
<i className="w-8 h-8 text-blue-500/50" data-lucide="quote" strokeWidth="1.5"></i>
<p className="text-lg text-zinc-400 leading-relaxed">
                            I have been working with Ian for several years and he comes across very professional. He's is very supportive and customer oriented and he adds a lot of value in the recruiting process and have placed several key individuals in the company.
                        </p>
</div>
<div className="mt-8 pt-6 border-t border-white/5">
<p className="text-base font-semibold text-white">Investor / Advisor, CFO</p>
<p className="text-base text-zinc-500">Satcoms</p>
</div>
</div>

<div className="p-8 rounded-3xl bg-[#151518] border border-white/5 flex flex-col justify-between">
<div className="space-y-6">
<i className="w-8 h-8 text-blue-500/50" data-lucide="quote" strokeWidth="1.5"></i>
<p className="text-lg text-zinc-400 leading-relaxed">
                            Ian and I have been working together for some time now, and our partnership has been a tremendous asset to our growing company. As we continue to expand, I count on his expertise in the space sector and his quick turnaround and lovely attention.
                        </p>
</div>
<div className="mt-8 pt-6 border-t border-white/5">
<p className="text-base font-semibold text-white">People &amp; Culture Leader</p>
<p className="text-base text-zinc-500">(Space Start-up)</p>
</div>
</div>
</div>
</section>

<section className="space-y-16">
<div className="text-center space-y-4">
<p className="text-sm font-semibold tracking-widest text-blue-500 uppercase">
                    Two Decades Shaping Workforce Strategy
                </p>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white max-w-3xl mx-auto">
                    Global Talent Advisory &amp; Recruitment Solutions
                </h2>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="p-8 md:p-10 rounded-3xl bg-[#151518] border border-white/5 flex flex-col h-full group transition-colors hover:border-white/10">
<span className="text-3xl font-light text-zinc-600 mb-6">1.</span>
<h3 className="text-xl font-semibold text-white mb-4 uppercase tracking-wide">
                        Talent Advisory - Retainer Based
                    </h3>
<p className="text-lg text-zinc-400 mb-8 pb-8 border-b border-white/5">
                        Ongoing, senior‑level support to help you make confident people decisions.
                    </p>
<ul className="space-y-4 mb-8 flex-grow">
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-blue-500 shrink-0 mt-1" data-lucide="check" strokeWidth="1.5"></i>
<span className="text-lg text-zinc-300">Hiring strategy and workforce planning</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-blue-500 shrink-0 mt-1" data-lucide="check" strokeWidth="1.5"></i>
<span className="text-lg text-zinc-300">Role design and prioritisation</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-blue-500 shrink-0 mt-1" data-lucide="check" strokeWidth="1.5"></i>
<span className="text-lg text-zinc-300">Market insight (salary, availability, skills)</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-blue-500 shrink-0 mt-1" data-lucide="check" strokeWidth="1.5"></i>
<span className="text-lg text-zinc-300">Interview structure and decision support</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-blue-500 shrink-0 mt-1" data-lucide="check" strokeWidth="1.5"></i>
<span className="text-lg text-zinc-300">Founder and leadership coaching on hiring</span>
</li>
</ul>
<p className="text-lg text-zinc-400 italic mb-8">
                        Think of me as your on‑demand Head of Talent — without the full‑time cost.
                    </p>
<a className="inline-flex items-center gap-2 text-base font-semibold text-blue-500 hover:text-blue-400 transition-colors mt-auto w-fit" href="#">
                        EXPLORE <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>

<div className="p-8 md:p-10 rounded-3xl bg-[#151518] border border-white/5 flex flex-col h-full group transition-colors hover:border-white/10">
<span className="text-3xl font-light text-zinc-600 mb-6">2.</span>
<h3 className="text-xl font-semibold text-white mb-4 uppercase tracking-wide">
                        Flexible Recruitment Support
                    </h3>
<p className="text-lg text-zinc-400 mb-8 pb-8 border-b border-white/5">
                        When you do need to hire, I can step in — without locking you into agency fees.
                    </p>
<ul className="space-y-4 mb-8 flex-grow">
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-blue-500 shrink-0 mt-1" data-lucide="check" strokeWidth="1.5"></i>
<span className="text-lg text-zinc-300">Role kick‑off and job scoping</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-blue-500 shrink-0 mt-1" data-lucide="check" strokeWidth="1.5"></i>
<span className="text-lg text-zinc-300">Candidate sourcing (light‑touch, targeted)</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-blue-500 shrink-0 mt-1" data-lucide="check" strokeWidth="1.5"></i>
<span className="text-lg text-zinc-300">CV screening and shortlisting</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-blue-500 shrink-0 mt-1" data-lucide="check" strokeWidth="1.5"></i>
<span className="text-lg text-zinc-300">Interview support and feedback</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-blue-500 shrink-0 mt-1" data-lucide="check" strokeWidth="1.5"></i>
<span className="text-lg text-zinc-300">Offer strategy and close support</span>
</li>
</ul>
<p className="text-lg text-zinc-400 italic mb-8">
                        Support scales up or down month‑to‑month, depending on your needs.
                    </p>
<a className="inline-flex items-center gap-2 text-base font-semibold text-blue-500 hover:text-blue-400 transition-colors mt-auto w-fit" href="#">
                        EXPLORE <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>

<div className="p-8 md:p-10 rounded-3xl bg-[#151518] border border-white/5 flex flex-col h-full group transition-colors hover:border-white/10">
<span className="text-3xl font-light text-zinc-600 mb-6">3.</span>
<h3 className="text-xl font-semibold text-white mb-4 uppercase tracking-wide">
                        Talent Playbooks
                    </h3>
<p className="text-lg text-zinc-400 mb-8 pb-8 border-b border-white/5">
                        Practical, repeatable hiring and people frameworks you can actually use.
                    </p>
<ul className="space-y-4 mb-8 flex-grow">
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-blue-500 shrink-0 mt-1" data-lucide="check" strokeWidth="1.5"></i>
<span className="text-lg text-zinc-300">Hiring process design</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-blue-500 shrink-0 mt-1" data-lucide="check" strokeWidth="1.5"></i>
<span className="text-lg text-zinc-300">Interview frameworks and scorecards</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-blue-500 shrink-0 mt-1" data-lucide="check" strokeWidth="1.5"></i>
<span className="text-lg text-zinc-300">Role clarity and competency mapping</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-blue-500 shrink-0 mt-1" data-lucide="check" strokeWidth="1.5"></i>
<span className="text-lg text-zinc-300">Founder-led hiring playbooks</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-blue-500 shrink-0 mt-1" data-lucide="check" strokeWidth="1.5"></i>
<span className="text-lg text-zinc-300">Onboarding and early-tenure success plans</span>
</li>
</ul>
<p className="text-lg text-zinc-400 italic mb-8">
                        Built once, refined as you grow, and reused every time you hire.
                    </p>
<a className="inline-flex items-center gap-2 text-base font-semibold text-blue-500 hover:text-blue-400 transition-colors mt-auto w-fit" href="#">
                        EXPLORE <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</div>
</section>

<section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-stretch pt-12 border-t border-white/5">
<div className="lg:col-span-8 flex flex-col justify-center space-y-8 pr-0 lg:pr-12">
<p className="text-sm font-semibold tracking-widest text-zinc-500 uppercase">
                    About Me
                </p>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white leading-tight">
                    Helping Leaders Build Teams They Love
                </h2>
<div className="space-y-6 text-lg text-zinc-400">
<p>
                        25 years' experience shaping workforce strategy across the global telecom and space markets.
                    </p>
<p>
                        I've been fortunate enough to have worked with organisations such as the European Space Agency and EUSPA through to dozens of Space start-ups all over the world.
                    </p>
<p>
                        I've supported organisations in scaling from 10 FTEs pre-revenue to 300+ FTEs with multi-hundred-million revenue streams.
                    </p>
</div>
<div className="pt-4">
<a className="inline-flex h-12 items-center justify-center rounded-full bg-blue-500 px-8 text-base font-semibold text-white hover:bg-blue-400 transition-colors w-fit" href="#">
                        MEET IAN
                    </a>
</div>
</div>

<div className="lg:col-span-4 flex">
<div className="w-full rounded-3xl bg-gradient-to-br from-[#1c1c21] to-[#121215] border border-white/10 p-10 flex flex-col justify-between relative overflow-hidden group">
<div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
<i className="w-32 h-32 text-blue-500" data-lucide="book-open" strokeWidth="1"></i>
</div>
<div className="relative z-10 space-y-6">
<p className="text-xs font-semibold tracking-widest text-blue-500 uppercase">
                            Info Box
                        </p>
<div>
<p className="text-sm font-semibold tracking-wider text-zinc-400 uppercase mb-2">
                                TALENT MATTERS
                            </p>
<h3 className="text-2xl font-semibold tracking-tight text-white leading-snug">
                                Why Talent Playbooks are essential for consistent hiring
                            </h3>
</div>
</div>
<a className="relative z-10 inline-flex items-center gap-2 text-base font-semibold text-white group-hover:text-blue-400 transition-colors mt-12 w-fit" href="#">
                        READ NOW <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</div>
</section>

<section className="pt-12 pb-24 border-t border-white/5 text-center flex flex-col items-center justify-center space-y-8">
<div className="space-y-3">
<p className="text-sm font-semibold tracking-widest text-zinc-500 uppercase">
                    TALENT MATTERS
                </p>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
                    Recent articles relating to Talent
                </h2>
</div>
<a className="inline-flex h-12 items-center justify-center rounded-full border border-zinc-700 bg-transparent px-8 text-base font-semibold text-white hover:bg-zinc-800 transition-colors" href="#">
                READ MORE
            </a>
</section>
</main>


    </>
  );
}
