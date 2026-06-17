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
      

<nav className="w-full py-8 px-6 md:px-12 max-w-7xl mx-auto flex justify-between items-center z-50 relative">
<div className="font-semibold tracking-[0.15em] text-xs uppercase text-corporate-900 font-montserrat" style={{}}>
            Zalina Bugova
        </div>
<a className="hidden md:inline-flex text-xs font-medium tracking-wide border-b border-transparent transition-colors pb-0.5 text-corporate-900 hover:border-corporate-900 font-montserrat" href="#book" style={{}}>
            Strategic Diagnostic
        </a>
</nav>

<section className="w-full max-w-7xl mx-auto pt-12 pb-20 px-6 md:px-12">
<div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">

<div className="lg:col-span-7 flex flex-col space-y-8 justify-center">
<h1 className="md:text-5xl lg:text-6xl leading-[1.1] text-corporate-900 text-4xl font-medium font-poppins">
                    From Relentless Execution to Strategic Leadership
                </h1>
<p className="text-lg text-corporate-500 leading-relaxed font-light max-w-xl font-montserrat" style={{}}>
                    You don’t need to work harder. You need a strategic framework that turns your talents into visible, undeniable leadership.
                </p>
<div className="pt-4 flex flex-col items-start gap-5">
<a className="hover:bg-brand-hover transition-all duration-300 text-sm font-medium text-white tracking-wide font-montserrat rounded pt-4 pr-8 pb-4 pl-8 shadow-sm" href="#book">
                        Start with a Strategic Insight Session
                    </a>
<p className="text-xs text-corporate-400 tracking-wide font-montserrat" style={{}}>
                        Clarify where you stand — and what it takes to move to the next level.
                    </p>
</div>
</div>

<div className="lg:col-span-5 w-full">
<div className="aspect-[3/4] w-full rounded overflow-hidden relative shadow-sm bg-corporate-50">
<img alt="Zalina Bugova" className="object-top hover:scale-105 transition-transform duration-700 ease-out w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7cc8f276-977b-46f6-9d81-7a47ccef57b5_1600w.jpg" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t to-transparent pointer-events-none from-corporate-900/10"></div>
</div>
</div>
</div>
</section>

<div className="w-full max-w-7xl mx-auto px-6">
<div className="h-px bg-corporate-100"></div>
</div>

<section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
<div className="grid md:grid-cols-12 gap-12 md:gap-24 items-start">

<div className="md:col-span-5 space-y-6">
<h2 className="text-3xl md:text-4xl text-corporate-900 font-medium tracking-tight font-poppins" style={{}}>
                    Where leaders typically get stuck
                </h2>
<div className="h-px w-12 bg-corporate-900"></div>
<p className="text-lg font-medium italic leading-relaxed text-corporate-800 font-montserrat" style={{}}>
                    “I know I’m capable of more — but something isn’t translating.”
                </p>
<p className="leading-relaxed text-corporate-500 font-montserrat" style={{}}>
                    You are competent. Reliable. Trusted. And yet, the path forward isn't clear.
                </p>
</div>

<div className="md:col-span-7">
<ul className="space-y-8">
<li className="flex gap-4 items-start">
<span className="mt-1 text-corporate-400 shrink-0">
<iconify-icon height="20" icon="lucide:minus" strokeWidth="1.5" width="20"></iconify-icon>
</span>
<p className="leading-relaxed text-corporate-600 font-montserrat" style={{}}>You know you’re pushing harder than you should have to — still achieving through effort and availability.</p>
</li>
<li className="flex gap-4 items-start">
<span className="mt-1 text-corporate-400 shrink-0">
<iconify-icon height="20" icon="lucide:minus" strokeWidth="1.5" width="20"></iconify-icon>
</span>
<p className="leading-relaxed text-corporate-600 font-montserrat" style={{}}>You want to operate at a more strategic level and be seen that way, but the path isn’t obvious.</p>
</li>
<li className="flex gap-4 items-start">
<span className="mt-1 text-corporate-400 shrink-0">
<iconify-icon height="20" icon="lucide:minus" strokeWidth="1.5" width="20"></iconify-icon>
</span>
<p className="leading-relaxed text-corporate-600 font-montserrat" style={{}}>You’re delivering a lot, yet executive visibility, influence, and presence don’t come naturally.</p>
</li>
<li className="flex gap-4 items-start">
<span className="mt-1 text-corporate-400 shrink-0">
<iconify-icon height="20" icon="lucide:minus" strokeWidth="1.5" width="20"></iconify-icon>
</span>
<p className="leading-relaxed text-corporate-600 font-montserrat" style={{}}>You watch others advance and can’t clearly see what’s missing for the next level to open.</p>
</li>
<li className="flex gap-4 items-start">
<span className="mt-1 text-corporate-400 shrink-0">
<iconify-icon height="20" icon="lucide:minus" strokeWidth="1.5" width="20"></iconify-icon>
</span>
<p className="leading-relaxed text-corporate-600 font-montserrat" style={{}}>You’ve reached the point where doing more of the same no longer works.</p>
</li>
</ul>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 bg-corporate-50 border-t border-corporate-100">
<div className="max-w-4xl mx-auto space-y-16">
<div className="text-center space-y-4">
<span className="uppercase tracking-widest text-xs font-semibold text-corporate-500 font-montserrat" style={{}}>The Strategic Shift</span>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-corporate-900 font-poppins" style={{}}>
                    From Effort-based Execution to Power-based Leadership
                </h2>
<p className="max-w-2xl mx-auto pt-4 leading-relaxed text-corporate-600 font-montserrat" style={{}}>
                    Senior growth is no longer about doing more. It’s about operating at a different level — in how you think, decide, and are perceived.
                </p>
</div>
<div className="rounded-lg shadow-sm border overflow-hidden bg-white border-corporate-200">
<div className="divide-y divide-corporate-100">

<div className="flex flex-col md:flex-row items-start md:items-center p-6 md:p-8 transition-colors hover:bg-corporate-50/50">
<div className="flex-1 font-medium text-corporate-500 font-montserrat" style={{}}>From expert doer</div>
<div className="px-4 py-2 md:py-0 text-brand">
<iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div className="flex-1 font-semibold text-corporate-900 font-montserrat" style={{}}>to strategic leader</div>
</div>

<div className="flex flex-col md:flex-row items-start md:items-center p-6 md:p-8 transition-colors hover:bg-corporate-50/50">
<div className="flex-1 font-medium text-corporate-500 font-montserrat" style={{}}>From waiting for recognition</div>
<div className="px-4 py-2 md:py-0 text-brand">
<iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div className="flex-1 font-semibold text-corporate-900 font-montserrat" style={{}}>to building visible impact</div>
</div>

<div className="flex flex-col md:flex-row items-start md:items-center p-6 md:p-8 transition-colors hover:bg-corporate-50/50">
<div className="flex-1 font-medium text-corporate-500 font-montserrat" style={{}}>From being relied on</div>
<div className="px-4 py-2 md:py-0 text-brand">
<iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div className="flex-1 font-semibold text-corporate-900 font-montserrat" style={{}}>to being sought after</div>
</div>

<div className="flex flex-col md:flex-row items-start md:items-center p-6 md:p-8 transition-colors hover:bg-corporate-50/50">
<div className="flex-1 font-medium text-corporate-500 font-montserrat" style={{}}>From effort-based growth</div>
<div className="px-4 py-2 md:py-0 text-brand">
<iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div className="flex-1 font-semibold text-corporate-900 font-montserrat" style={{}}>to intentional advancement</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
<div className="grid md:grid-cols-12 gap-12 items-start">
<div className="md:col-span-5 space-y-6">
<span className="uppercase tracking-widest text-xs font-semibold text-corporate-500 font-montserrat" style={{}}>Your Guide</span>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight leading-tight text-corporate-900 font-poppins" style={{}}>
                    I’m Zalina Bugova — former CFO and Global Finance Executive.
                </h2>
<div className="p-6 rounded border bg-corporate-50 border-corporate-200">
<p className="text-sm font-medium leading-relaxed text-corporate-800 font-montserrat" style={{}}>
                        I reached director level by 33 — not through endless hours, but through strategic positioning, clear strategy, and aligned action.
                    </p>
</div>
</div>
<div className="md:col-span-7 space-y-8 md:pl-8 md:border-l border-corporate-100">
<p className="leading-relaxed text-corporate-600 font-montserrat" style={{}}>
                    Over 20+ years in global corporate environments, I have:
                </p>
<div className="grid gap-6">
<div className="flex gap-4 items-start">
<iconify-icon className="text-brand shrink-0 mt-1" icon="lucide:check" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-corporate-800 font-montserrat" style={{}}>led billion-dollar market strategies</span>
</div>
<div className="flex gap-4 items-start">
<iconify-icon className="text-brand shrink-0 mt-1" icon="lucide:check" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-corporate-800 font-montserrat" style={{}}>built award-winning teams across LATAM, the US, and EMEA</span>
</div>
<div className="flex gap-4 items-start">
<iconify-icon className="text-brand shrink-0 mt-1" icon="lucide:check" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-corporate-800 font-montserrat" style={{}}>mentored 100+ professionals into accelerated advancement</span>
</div>
</div>
<div className="space-y-4 pt-4">
<p className="leading-relaxed text-corporate-600 font-montserrat" style={{}}>
                        This background allows me to see leadership transitions from inside the system — both as someone who walked the path personally and as someone who made decisions on who advances.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-corporate-900 text-white">
<div className="max-w-6xl mx-auto space-y-16">
<div className="max-w-3xl">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-6 font-poppins" style={{}}>The R.I.S.E. Leadership Method™</h2>
<p className="text-lg font-light leading-relaxed text-corporate-300 font-montserrat" style={{}}>
                    A structured leadership transition framework for the next level of role, responsibility, and leadership identity.
                </p>
</div>
<div className="grid md:grid-cols-2 border border-corporate-800 bg-corporate-900">

<div className="p-8 md:p-12 border-b md:border-b-0 md:border-r transition-colors border-corporate-800 hover:bg-corporate-800/30">
<span className="block text-brand text-4xl font-medium font-poppins mb-4">R</span>
<h3 className="text-xl font-medium mb-3 font-montserrat" style={{}}>Reality Check</h3>
<p className="text-sm leading-relaxed text-corporate-400 font-montserrat" style={{}}>
                        A clear understanding of where you truly stand today — your readiness, strengths, unique value, and what is currently limiting your growth.
                    </p>
</div>

<div className="p-8 md:p-12 border-b transition-colors border-corporate-800 hover:bg-corporate-800/30">
<span className="block text-4xl font-medium text-brand mb-4 font-poppins" style={{}}>I</span>
<h3 className="text-xl font-medium mb-3 font-montserrat" style={{}}>Intention &amp; Positioning</h3>
<p className="text-sm leading-relaxed text-corporate-400 font-montserrat" style={{}}>
                        Clarity on the next level you are aiming for and how to position yourself to be recognised and evaluated at that level.
                    </p>
</div>

<div className="p-8 md:p-12 border-b md:border-b-0 md:border-r transition-colors border-corporate-800 hover:bg-corporate-800/30">
<span className="block text-4xl font-medium text-brand mb-4 font-poppins" style={{}}>S</span>
<h3 className="text-xl font-medium mb-3 font-montserrat" style={{}}>Strategic Roadmap</h3>
<p className="text-sm leading-relaxed text-corporate-400 font-montserrat" style={{}}>
                        A focused, actionable direction that replaces overload with priorities and turns ambition into intentional progress.
                    </p>
</div>

<div className="p-8 md:p-12 transition-colors hover:bg-corporate-800/30">
<span className="block text-4xl font-medium text-brand mb-4 font-poppins" style={{}}>E</span>
<h3 className="text-xl font-medium mb-3 font-montserrat" style={{}}>Embodied Leadership</h3>
<p className="text-sm leading-relaxed text-corporate-400 font-montserrat" style={{}}>
                        The ability to operate consistently at the next level — with influence, authority, and without overworking or burning out.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 max-w-4xl mx-auto text-center" id="book">
<span className="uppercase tracking-widest text-xs font-semibold text-corporate-500 mb-6 block font-montserrat" style={{}}>How We Work Together</span>
<h2 className="md:text-4xl text-corporate-900 text-3xl font-medium tracking-tight font-poppins mb-12">
            One clear entry point
        </h2>
<div className="border rounded-lg p-8 md:p-12 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] text-left bg-white border-corporate-200">
<h3 className="text-corporate-900 text-xl font-medium font-montserrat mb-6">Every engagement begins with a Strategic Leadership Diagnostic.</h3>
<p className="mb-8 text-corporate-600 font-montserrat" style={{}}>This is a focused, high-level conversation where we:</p>
<ul className="space-y-4 mb-10">
<li className="flex gap-3 items-center text-corporate-800">
<iconify-icon className="text-brand text-xs" icon="lucide:circle-dot" strokeWidth="2" width="16"></iconify-icon>
<span className="text-sm font-montserrat" style={{}}>analyse your current leadership position</span>
</li>
<li className="flex gap-3 items-center text-corporate-800">
<iconify-icon className="text-brand text-xs" icon="lucide:circle-dot" strokeWidth="2" width="16"></iconify-icon>
<span className="text-sm font-montserrat" style={{}}>identify what is misaligned or invisible</span>
</li>
<li className="flex gap-3 items-center text-corporate-800">
<iconify-icon className="text-brand text-xs" icon="lucide:circle-dot" strokeWidth="2" width="16"></iconify-icon>
<span className="text-sm font-montserrat" style={{}}>clarify what kind of transition is realistically available to you</span>
</li>
</ul>
<div className="border-t pt-8 mt-8 border-corporate-100">
<div className="flex flex-col md:flex-row items-center gap-6 justify-between">
<div className="text-left">
<span className="block text-xs font-semibold uppercase tracking-wide mb-1 text-corporate-400 font-montserrat" style={{}}>Next Step</span>
<span className="font-medium text-corporate-900 font-montserrat" style={{}}>A private clarity conversation with Zalina Bugova</span>
</div>
<button className="w-full md:w-auto bg-brand hover:bg-brand-hover font-medium py-3 px-6 rounded transition-all shadow-sm text-sm tracking-wide whitespace-nowrap text-white font-montserrat" style={{}}>
                        Book a Strategic Leadership Diagnostic
                    </button>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-y bg-corporate-50 border-corporate-100">
<div className="max-w-7xl mx-auto">
<h2 className="text-2xl font-medium tracking-tight mb-12 text-center text-corporate-900 font-poppins" style={{}}>Real Client Results</h2>
<div className="grid md:grid-cols-3 gap-8">

<div className="flex flex-col p-8 rounded border shadow-sm bg-white border-corporate-200">
<div className="mb-6 pb-6 border-b border-corporate-50">
<span className="block text-xs font-semibold text-brand mb-2 font-montserrat" style={{}}>From Overworked Manager → to Finance Director</span>
<p className="font-medium text-lg text-corporate-900 font-montserrat" style={{}}>Ayushi</p>
<p className="text-xs text-corporate-500 mt-1 font-montserrat" style={{}}>Global Finance Director, Johnson &amp; Johnson (USA)</p>
</div>
<blockquote className="text-sm leading-relaxed italic text-corporate-600 font-montserrat" style={{}}>
                        “Working with Zalina changed the way I lead, think, and grow. I shifted from quantity to meaningful impact.”
                    </blockquote>
</div>

<div className="flex flex-col p-8 rounded border shadow-sm bg-white border-corporate-200">
<div className="mb-6 pb-6 border-b border-corporate-50">
<span className="block text-xs font-semibold text-brand mb-2 font-montserrat" style={{}}>From Executor → to Influential Leader</span>
<p className="font-medium text-lg text-corporate-900 font-montserrat" style={{}}>Caio</p>
<p className="text-xs text-corporate-500 mt-1 font-montserrat" style={{}}>Senior Finance Manager (LATAM)</p>
</div>
<blockquote className="text-sm leading-relaxed italic text-corporate-600 font-montserrat" style={{}}>
                        “Zalina combines transparency, discipline, and deep respect for individuality.”
                    </blockquote>
</div>

<div className="flex flex-col p-8 rounded border shadow-sm bg-white border-corporate-200">
<div className="mb-6 pb-6 border-b border-corporate-50">
<span className="block text-xs font-semibold text-brand mb-2 font-montserrat" style={{}}>From Doubt → to Clear Direction</span>
<p className="font-medium text-lg text-corporate-900 font-montserrat" style={{}}>José Eduardo</p>
<p className="text-xs text-corporate-500 mt-1 font-montserrat" style={{}}>Finance Manager (Brazil)</p>
</div>
<blockquote className="text-sm leading-relaxed italic text-corporate-600 font-montserrat" style={{}}>
                        “One conversation with Zalina changed the entire direction of my career. I now navigate my growth with clarity.”
                    </blockquote>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-3xl mx-auto">
<h2 className="text-2xl font-medium tracking-tight mb-12 text-corporate-900 font-poppins" style={{}}>FAQ</h2>
<div className="space-y-12">
<div>
<h3 className="font-medium text-lg mb-3 text-corporate-900 font-montserrat" style={{}}>How soon do results appear?</h3>
<p className="leading-relaxed text-corporate-600 font-montserrat" style={{}}>
                    Most clients gain clarity and traction within weeks. Role transitions typically unfold over 6–12 months.
                </p>
</div>
<div className="w-full h-px bg-corporate-100"></div>
<div>
<h3 className="font-medium text-lg mb-3 text-corporate-900 font-montserrat" style={{}}>Is this only for finance professionals?</h3>
<p className="leading-relaxed text-corporate-600 font-montserrat" style={{}}>
                    No. I work with leaders across strategy, operations, technology, marketing, and general management.
                </p>
</div>
<div className="w-full h-px bg-corporate-100"></div>
<div>
<h3 className="font-medium text-lg mb-3 text-corporate-900 font-montserrat" style={{}}>What is the investment?</h3>
<p className="leading-relaxed text-corporate-600 font-montserrat" style={{}}>
                    Details are discussed after the diagnostic, once we confirm alignment.
                </p>
</div>
</div>
</section>

<footer className="py-12 px-6 border-t border-corporate-100">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
<div className="space-y-4">
<p className="font-semibold tracking-wide text-sm uppercase text-corporate-900 font-montserrat" style={{}}>
                    Zalina Bugova
                </p>
<div className="text-xs text-corporate-500 space-y-1">
<p className="font-montserrat" style={{}}>Executive Leadership &amp; Career Strategist</p>
<p className="font-montserrat" style={{}}>Creator of the R.I.S.E. Leadership Method™</p>
<p className="pt-4 font-montserrat" style={{}}>© Zalina Bugova</p>
</div>
</div>
<div className="flex gap-6 text-xs font-medium text-corporate-600">
<a className="transition-colors hover:text-corporate-900 font-montserrat" href="#" style={{}}>LinkedIn</a>
<a className="transition-colors hover:text-corporate-900 font-montserrat" href="#" style={{}}>Email</a>
</div>
</div>
</footer>

    </>
  );
}
