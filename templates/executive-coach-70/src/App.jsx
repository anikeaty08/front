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
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-sm font-semibold tracking-tighter uppercase text-zinc-900" href="#">
                Zalina Bugova
            </a>
<a className="hidden sm:inline-flex items-center justify-center bg-zinc-900 text-white text-xs font-medium px-4 py-2 rounded hover:bg-zinc-800 transition-colors" href="#contact">
                Book Connection Call
            </a>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-40 md:pb-32 px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
<div className="order-2 md:order-1 max-w-2xl">
<h1 className="text-4xl md:text-6xl font-medium tracking-tight leading-[1.1] mb-6 text-zinc-900">
                You Deliver Strong Results.<br/>
                Yet Someone Else Gets Promoted.
            </h1>
<p className="text-lg text-zinc-600 font-light leading-relaxed mb-8 max-w-lg">
                I help Senior Managers reposition for Director roles —
                using what I learned from 20 years at J&amp;J making those
                promotion decisions myself.
            </p>
<a className="inline-flex items-center gap-2 bg-zinc-900 text-white px-6 py-3.5 rounded text-sm font-medium hover:bg-zinc-800 transition-colors" href="#contact">
                Book Free Connection Call
                <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
</div>
<div className="order-1 md:order-2 relative aspect-[4/5] md:aspect-square overflow-hidden rounded-sm bg-zinc-100">

<img alt="Executive Portrait" className="absolute inset-0 w-full h-full object-cover grayscale opacity-90 contrast-125" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
</section>

<section className="bg-zinc-50 py-24 px-6 border-y border-zinc-100">
<div className="max-w-3xl mx-auto">
<h2 className="text-xs font-semibold tracking-widest uppercase text-zinc-500 mb-8">Why You’re Not Getting Promoted</h2>
<p className="text-xl md:text-2xl font-light text-zinc-900 mb-12 leading-relaxed">
                You deliver strong results. Your performance reviews are excellent.
                Yet when Director roles open, someone else gets chosen.
            </p>
<div className="space-y-6 mb-12">
<p className="text-sm font-medium text-zinc-900 uppercase tracking-wide">Here’s what’s actually happening:</p>
<ul className="space-y-4">
<li className="flex items-start gap-4">
<iconify-icon className="text-zinc-400 mt-1 shrink-0 text-lg" icon="solar:arrow-right-linear"></iconify-icon>
<span className="text-zinc-700 font-light text-lg">You’re visible for execution, not strategic impact</span>
</li>
<li className="flex items-start gap-4">
<iconify-icon className="text-zinc-400 mt-1 shrink-0 text-lg" icon="solar:arrow-right-linear"></iconify-icon>
<span className="text-zinc-700 font-light text-lg">You’re working on 10 projects, not the right 2-3</span>
</li>
<li className="flex items-start gap-4">
<iconify-icon className="text-zinc-400 mt-1 shrink-0 text-lg" icon="solar:arrow-right-linear"></iconify-icon>
<span className="text-zinc-700 font-light text-lg">You’re solving your manager’s problems, not leadership’s</span>
</li>
<li className="flex items-start gap-4">
<iconify-icon className="text-zinc-400 mt-1 shrink-0 text-lg" icon="solar:arrow-right-linear"></iconify-icon>
<span className="text-zinc-700 font-light text-lg">Proving your value instead of positioning it</span>
</li>
</ul>
</div>
<p className="text-2xl font-medium tracking-tight text-zinc-900">
                The gap isn’t capability. It’s positioning.
            </p>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">MY 5-STEP APPROACH</h2>
<p className="text-zinc-600 font-light text-lg max-w-2xl">Strategy based on 20 years corporate experience and making promotion decisions myself.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">

<div className="p-6 border border-zinc-200 rounded-sm bg-white hover:border-zinc-300 transition-colors">
<span className="block text-xs font-semibold text-zinc-400 mb-4">01</span>
<h3 className="text-sm font-semibold tracking-wide uppercase mb-3">Clarity</h3>
<p className="text-sm text-zinc-600 font-light leading-relaxed">Know what makes you unique and what’s blocking you</p>
</div>

<div className="p-6 border border-zinc-200 rounded-sm bg-white hover:border-zinc-300 transition-colors">
<span className="block text-xs font-semibold text-zinc-400 mb-4">02</span>
<h3 className="text-sm font-semibold tracking-wide uppercase mb-3">Focus</h3>
<p className="text-sm text-zinc-600 font-light leading-relaxed">Choose the right 2-3 strategic initiatives</p>
</div>

<div className="p-6 border border-zinc-200 rounded-sm bg-white hover:border-zinc-300 transition-colors">
<span className="block text-xs font-semibold text-zinc-400 mb-4">03</span>
<h3 className="text-sm font-semibold tracking-wide uppercase mb-3">Leadership</h3>
<p className="text-sm text-zinc-600 font-light leading-relaxed">Lead through people, multiply impact</p>
</div>

<div className="p-6 border border-zinc-200 rounded-sm bg-white hover:border-zinc-300 transition-colors">
<span className="block text-xs font-semibold text-zinc-400 mb-4">04</span>
<h3 className="text-sm font-semibold tracking-wide uppercase mb-3">Visibility</h3>
<p className="text-sm text-zinc-600 font-light leading-relaxed">Build relationships with decision-makers</p>
</div>

<div className="p-6 border border-zinc-200 rounded-sm bg-white hover:border-zinc-300 transition-colors">
<span className="block text-xs font-semibold text-zinc-400 mb-4">05</span>
<h3 className="text-sm font-semibold tracking-wide uppercase mb-3">Positioning</h3>
<p className="text-sm text-zinc-600 font-light leading-relaxed">Communicate at Director level</p>
</div>
</div>
<div className="mt-12 pt-8 border-t border-zinc-100">
<p className="text-xl text-zinc-900 font-medium tracking-tight">This is how question marks disappear.</p>
</div>
</section>

<section className="bg-zinc-900 text-white py-24 px-6">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
<div>
<h2 className="text-xs font-medium tracking-widest uppercase text-zinc-400 mb-8">About Me</h2>
<div className="space-y-8 text-lg font-light leading-relaxed text-zinc-300">
<p className="text-white font-normal text-xl">
                        CFO for 33 countries by age of 33, Strategic Lead of a Billion-dollar company in business unit head-quarters.
                    </p>
<p>
                        I mentored dozens of talented managers and helped them advance in career and drive strategic impacts.
                    </p>
<p>
                        And over time, I realized that helping talented people rise brought me
                        more fulfillment than any financial result I delivered.
                        Watching them understand their uniqueness, make bold decisions, focus on what matters and
                        Getting top recognitions and promotions - made me truly fulfilled and happy.
                    </p>
<p>
                        So I left corporate to do this full-time.
                    </p>
<p className="text-white font-normal">
                        Because when leaders grow, everything grows.
                    </p>
</div>
</div>
<div className="relative h-full min-h-[400px]">
<img alt="Zalina Bugova" className="w-full h-full object-cover rounded-sm opacity-90" src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</section>

<section className="py-24 border-b border-zinc-100 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 mb-12">
<h2 className="text-3xl font-medium tracking-tight text-zinc-900">WHAT CLIENTS &amp; COLLEAGUES SAY</h2>
</div>

<div className="flex overflow-x-auto hide-scroll snap-x snap-mandatory px-6 gap-6 pb-8 max-w-[1400px] mx-auto">

<div className="snap-start shrink-0 w-full md:w-[450px] bg-white border border-zinc-200 p-8 flex flex-col justify-between rounded-sm">
<blockquote className="text-lg font-light text-zinc-700 mb-8 leading-relaxed">
                    “Zalina played a pivotal role in my journey to becoming a Director.
                    Thanks to her guidance, I was given countless opportunities to grow —
                    not only as a professional but as a person.”
                </blockquote>
<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-zinc-100 rounded-full overflow-hidden">
<img alt="" className="w-full h-full object-cover" src="https://ui-avatars.com/api/?name=Ayushi+M&amp;background=f4f4f5&amp;color=52525b"/>
</div>
<div>
<div className="text-sm font-semibold text-zinc-900">Ayushi M.</div>
<div className="text-xs text-zinc-500">Global Finance Director, J&amp;J</div>
</div>
</div>
</div>

<div className="snap-start shrink-0 w-full md:w-[450px] bg-white border border-zinc-200 p-8 flex flex-col justify-between rounded-sm">
<blockquote className="text-lg font-light text-zinc-700 mb-8 leading-relaxed">
                    “Under Zalina’s leadership, we not only achieved our goals but also
                    evolved into better human beings. She teaches through example, leading
                    with integrity and empathy, and always challenges us to reach our full
                    potential.”
                </blockquote>
<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-zinc-100 rounded-full overflow-hidden">
<img alt="" className="w-full h-full object-cover" src="https://ui-avatars.com/api/?name=Caio+P&amp;background=f4f4f5&amp;color=52525b"/>
</div>
<div>
<div className="text-sm font-semibold text-zinc-900">Caio P.</div>
<div className="text-xs text-zinc-500">Senior Finance Manager, Johnson &amp; Johnson</div>
</div>
</div>
</div>

<div className="snap-start shrink-0 w-full md:w-[450px] bg-white border border-zinc-200 p-8 flex flex-col justify-between rounded-sm">
<blockquote className="text-lg font-light text-zinc-700 mb-8 leading-relaxed">
                    “Zalina, you are such an inspiration to me! I remember our days together at WLI and a lot of those powerful conversations helped me shape the professional I am today. You’ve been instrumental in my development and growth.”
                </blockquote>
<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-zinc-100 rounded-full overflow-hidden">
<img alt="" className="w-full h-full object-cover" src="https://ui-avatars.com/api/?name=Maria+Paula&amp;background=f4f4f5&amp;color=52525b"/>
</div>
<div>
<div className="text-sm font-semibold text-zinc-900">Maria Paula C</div>
<div className="text-xs text-zinc-500">Legal Director, Kenvue</div>
</div>
</div>
</div>

<div className="snap-start shrink-0 w-full md:w-[450px] bg-white border border-zinc-200 p-8 flex flex-col justify-between rounded-sm">
<blockquote className="text-lg font-light text-zinc-700 mb-8 leading-relaxed">
                    “Zalina is one of the best people and professionals I’ve ever worked with.
                    Always challenging us to be better, contributing to the growth of the
                    business, the organization, and the teams — always with strong ethics.”
                </blockquote>
<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-zinc-100 rounded-full overflow-hidden">
<img alt="" className="w-full h-full object-cover" src="https://ui-avatars.com/api/?name=Pedro+G&amp;background=f4f4f5&amp;color=52525b"/>
</div>
<div>
<div className="text-sm font-semibold text-zinc-900">Pedro G.</div>
<div className="text-xs text-zinc-500">CFO Brazil, Kimberly-Clark</div>
</div>
</div>
</div>

<div className="snap-start shrink-0 w-full md:w-[450px] bg-white border border-zinc-200 p-8 flex flex-col justify-between rounded-sm">
<blockquote className="text-lg font-light text-zinc-700 mb-8 leading-relaxed">
                    “She fought for visibility, for opportunity, and for rooms where emerging
                    leaders could step into their own power. Leadership is not only about
                    driving results — it’s about elevating people. And that’s exactly what
                    she did.”
                </blockquote>
<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-zinc-100 rounded-full overflow-hidden">
<img alt="" className="w-full h-full object-cover" src="https://ui-avatars.com/api/?name=Carmen+Cecilia&amp;background=f4f4f5&amp;color=52525b"/>
</div>
<div>
<div className="text-sm font-semibold text-zinc-900">Carmen Cecilia Galán</div>
<div className="text-xs text-zinc-500">Finance Director, Johnson &amp; Johnson</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-zinc-50" id="services">
<div className="max-w-7xl mx-auto">
<h2 className="text-3xl font-medium tracking-tight mb-16">THREE WAYS TO WORK TOGETHER</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="flex flex-col bg-white p-8 border border-zinc-200 rounded-sm">
<h3 className="text-sm font-semibold tracking-wide uppercase mb-4 text-zinc-900">Director Positioning Diagnostic</h3>
<p className="text-zinc-600 font-light text-sm leading-relaxed mb-8 flex-grow">
                        Single intensive session to diagnose what’s blocking your
                        promotion and create your strategic roadmap.
                    </p>
<div className="pt-6 border-t border-zinc-100">
<p className="text-xs text-zinc-400 font-medium uppercase mb-2">Best for:</p>
<p className="text-sm text-zinc-800">Senior Managers who need clarity before committing to a longer engagement.</p>
</div>
</div>

<div className="flex flex-col bg-white p-8 border border-zinc-200 rounded-sm">
<h3 className="text-sm font-semibold tracking-wide uppercase mb-4 text-zinc-900">Strategic Roadmap Sprint</h3>
<p className="text-zinc-600 font-light text-sm leading-relaxed mb-8 flex-grow">
                        Focused engagement to shift from tactical execution to
                        strategic impact.
                    </p>
<div className="pt-6 border-t border-zinc-100">
<p className="text-xs text-zinc-400 font-medium uppercase mb-2">Best for:</p>
<p className="text-sm text-zinc-800">Senior Managers who get feedback to “be more strategic” but don’t know what that means or how to do it.</p>
</div>
</div>

<div className="flex flex-col bg-white p-8 border border-zinc-200 rounded-sm ring-1 ring-zinc-200 shadow-sm">
<h3 className="text-sm font-semibold tracking-wide uppercase mb-4 text-zinc-900">Director Transition Program</h3>
<p className="text-zinc-600 font-light text-sm leading-relaxed mb-8 flex-grow">
                        Comprehensive support for complete transition from Senior
                        Manager to Director positioning.
                    </p>
<div className="pt-6 border-t border-zinc-100">
<p className="text-xs text-zinc-400 font-medium uppercase mb-2">Best for:</p>
<p className="text-sm text-zinc-800">High-performing Senior Managers ready to invest in strategic career acceleration with expert guidance and accountability.</p>
</div>
</div>
</div>
<div className="mt-16 text-center">
<p className="text-zinc-500 text-sm mb-6">All programs are customized to your specific situation and goals.</p>
<a className="inline-flex items-center gap-2 border border-zinc-200 bg-white text-zinc-900 px-6 py-3 rounded text-sm font-medium hover:border-zinc-900 transition-colors" href="#contact">
                    Book Strategy Call to Discuss
                </a>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-3xl mx-auto">
<h2 className="text-3xl font-medium tracking-tight mb-8">WHAT HAPPENS ON THE STRATEGY CALL</h2>
<p className="text-lg text-zinc-600 font-light mb-12">This is not a sales pitch. It’s strategic guidance.</p>
<div className="space-y-6 mb-12">
<p className="text-sm font-semibold uppercase tracking-wide text-zinc-900">On our 30-minute call:</p>
<ul className="space-y-4">
<li className="flex items-start gap-4">
<iconify-icon className="text-zinc-900 mt-1 shrink-0 text-lg" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-zinc-700 font-light">You’ll share your current situation and goals</span>
</li>
<li className="flex items-start gap-4">
<iconify-icon className="text-zinc-900 mt-1 shrink-0 text-lg" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-zinc-700 font-light">I’ll give you my honest assessment of what’s blocking you</span>
</li>
<li className="flex items-start gap-4">
<iconify-icon className="text-zinc-900 mt-1 shrink-0 text-lg" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-zinc-700 font-light">We’ll discuss if and how I can help</span>
</li>
</ul>
</div>
<p className="text-lg font-medium text-zinc-900 mb-8">
            You’ll leave with clarity on your situation — whether we work together or not.
        </p>
<a className="inline-flex items-center gap-2 bg-zinc-900 text-white px-6 py-3 rounded text-sm font-medium hover:bg-zinc-800 transition-colors" href="#contact">
            Book Your Strategy Call
        </a>
</section>

<section className="py-24 px-6 bg-zinc-50 border-t border-zinc-100">
<div className="max-w-2xl mx-auto">
<h2 className="text-xl font-medium tracking-tight mb-12">COMMON QUESTIONS</h2>
<div className="space-y-4">

<details className="group bg-white border border-zinc-200 rounded-sm overflow-hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer select-none">
<span className="text-sm font-medium text-zinc-900">How long until I see results?</span>
<iconify-icon className="text-zinc-400 transition-transform group-open:rotate-45" icon="solar:add-linear" width="20"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-sm font-light text-zinc-600 leading-relaxed">
                        ...
                    </div>
</details>

<details className="group bg-white border border-zinc-200 rounded-sm overflow-hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer select-none">
<span className="text-sm font-medium text-zinc-900">What if I don’t get promoted?</span>
<iconify-icon className="text-zinc-400 transition-transform group-open:rotate-45" icon="solar:add-linear" width="20"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-sm font-light text-zinc-600 leading-relaxed">
                        ...
                    </div>
</details>

<details className="group bg-white border border-zinc-200 rounded-sm overflow-hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer select-none">
<span className="text-sm font-medium text-zinc-900">Why work with an external strategist when I have mentors at work?</span>
<iconify-icon className="text-zinc-400 transition-transform group-open:rotate-45" icon="solar:add-linear" width="20"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-sm font-light text-zinc-600 leading-relaxed">
                        ...
                    </div>
</details>

<details className="group bg-white border border-zinc-200 rounded-sm overflow-hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer select-none">
<span className="text-sm font-medium text-zinc-900">How is this different from other career coaches?</span>
<iconify-icon className="text-zinc-400 transition-transform group-open:rotate-45" icon="solar:add-linear" width="20"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-sm font-light text-zinc-600 leading-relaxed">
                        ...
                    </div>
</details>

<details className="group bg-white border border-zinc-200 rounded-sm overflow-hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer select-none">
<span className="text-sm font-medium text-zinc-900">Can I really afford this investment?</span>
<iconify-icon className="text-zinc-400 transition-transform group-open:rotate-45" icon="solar:add-linear" width="20"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-sm font-light text-zinc-600 leading-relaxed">
                        ...
                    </div>
</details>

<details className="group bg-white border border-zinc-200 rounded-sm overflow-hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer select-none">
<span className="text-sm font-medium text-zinc-900">What’s the investment?</span>
<iconify-icon className="text-zinc-400 transition-transform group-open:rotate-45" icon="solar:add-linear" width="20"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-sm font-light text-zinc-600 leading-relaxed">
                        ...
                    </div>
</details>

<details className="group bg-white border border-zinc-200 rounded-sm overflow-hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer select-none">
<span className="text-sm font-medium text-zinc-900">How do I know if this is right for me?</span>
<iconify-icon className="text-zinc-400 transition-transform group-open:rotate-45" icon="solar:add-linear" width="20"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-sm font-light text-zinc-600 leading-relaxed">
                        ...
                    </div>
</details>
</div>
</div>
</section>

<section className="py-32 px-6 text-center" id="contact">
<div className="max-w-2xl mx-auto">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-8 text-zinc-900">
                READY TO POSITION FOR DIRECTOR?
            </h2>
<p className="text-lg text-zinc-600 font-light mb-12 max-w-lg mx-auto leading-relaxed">
                Book a free 30-minute strategy call.<br/>
                No pitch. Just honest assessment of your situation and
                whether I can help.
            </p>
<a className="inline-flex items-center gap-2 bg-zinc-900 text-white px-8 py-4 rounded text-base font-medium hover:bg-zinc-800 transition-colors" href="#">
                Book Free Strategy Call
            </a>
</div>
</section>

<footer className="py-12 border-t border-zinc-100 text-center">
<p className="text-xs text-zinc-400 font-medium tracking-tight uppercase">
            © Zalina Bugova
        </p>
</footer>

    </>
  );
}
