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
      

<nav className="border-b border-zinc-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-lg font-semibold tracking-tighter text-zinc-900" href="#">VERSO</a>
<div className="hidden md:flex gap-8 text-sm font-medium text-zinc-500">
<a className="hover:text-zinc-900 transition-colors" href="#">Methodology</a>
<a className="text-zinc-900" href="#">Campaigns</a>
<a className="hover:text-zinc-900 transition-colors" href="#">Case Studies</a>
</div>
<a className="text-sm font-medium bg-zinc-900 text-white px-4 py-2 rounded-full hover:bg-zinc-800 transition-colors" href="#">
                Get AI Score
            </a>
</div>
</nav>

<header className="pt-24 pb-16 px-6 max-w-7xl mx-auto text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-200 bg-zinc-50 text-xs font-medium text-zinc-600 mb-8">
<span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            Productized SaaS PR
        </div>
<h1 className="text-5xl md:text-7xl font-semibold text-zinc-900 tracking-tight mb-6">
            B2B SaaS PR<br className="hidden md:block"/> Campaigns &amp; Pricing
        </h1>
<p className="text-lg md:text-xl text-zinc-500 max-w-2xl mx-auto leading-relaxed">
            Three productized digital PR campaigns built for one thing: making your SaaS the obvious choice in search, in AI overviews, and in your buyer’s short list.
        </p>
</header>

<section className="px-6 pb-20 max-w-4xl mx-auto text-center">
<div className="bg-zinc-50 border border-zinc-100 rounded-2xl p-8 md:p-12">
<h2 className="text-2xl font-semibold text-zinc-900 tracking-tight mb-4">Choose Your Level of Authority</h2>
<p className="text-zinc-500 mb-8 max-w-xl mx-auto">
                You don’t need a hundred random tactics. You need the right PR campaign for where your SaaS is today.
            </p>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
<div className="space-y-2">
<div className="flex items-center gap-2 text-zinc-900 font-medium text-sm">
<iconify-icon icon="lucide:rocket" strokeWidth="1.5" width="18"></iconify-icon>
                        Launchpad
                    </div>
<p className="text-xs text-zinc-500 leading-relaxed">For your first serious authority push.</p>
</div>
<div className="space-y-2">
<div className="flex items-center gap-2 text-zinc-900 font-medium text-sm">
<iconify-icon icon="lucide:cpu" strokeWidth="1.5" width="18"></iconify-icon>
                        Authority Engine
                    </div>
<p className="text-xs text-zinc-500 leading-relaxed">For established SaaS ready to compete on hard keywords.</p>
</div>
<div className="space-y-2">
<div className="flex items-center gap-2 text-zinc-900 font-medium text-sm">
<iconify-icon icon="lucide:crown" strokeWidth="1.5" width="18"></iconify-icon>
                        Category Kingmaker
                    </div>
<p className="text-xs text-zinc-500 leading-relaxed">For funded teams who want to own the narrative.</p>
</div>
</div>
<div className="mt-8 pt-8 border-t border-zinc-200">
<p className="text-sm text-zinc-400 font-medium">All built specifically for B2B SaaS in the AI search era. All purchased online. No sales calls required.</p>
</div>
</div>
</section>

<section className="px-6 pb-32 max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start">

<div className="group border border-zinc-200 rounded-2xl p-6 md:p-8 hover:border-zinc-300 transition-all bg-white">
<div className="flex items-center gap-2 text-zinc-400 mb-4">
<iconify-icon icon="lucide:rocket" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-sm font-medium uppercase tracking-wider">Level 1</span>
</div>
<h3 className="text-2xl font-semibold text-zinc-900 tracking-tight mb-2">Launchpad</h3>
<p className="text-sm text-zinc-500 mb-6 h-10">Best for early-stage SaaS doing their first real authority play.</p>
<div className="mb-8">
<span className="text-3xl font-semibold text-zinc-900 tracking-tight">$8,500</span>
<span className="text-zinc-400 text-sm font-medium block mt-1">one-time investment</span>
</div>
<a className="block w-full py-3 px-4 bg-zinc-100 hover:bg-zinc-200 text-zinc-900 text-center text-sm font-medium rounded-lg transition-colors mb-8" href="#">
                    Start Launchpad
                </a>
<ul className="space-y-4">
<li className="flex gap-3 text-sm text-zinc-600">
<iconify-icon className="text-zinc-900 shrink-0 mt-0.5" icon="lucide:check" strokeWidth="1.5" width="16"></iconify-icon>
<span>1 targeted digital PR campaign built around a single theme or launch.</span>
</li>
<li className="flex gap-3 text-sm text-zinc-600">
<iconify-icon className="text-zinc-900 shrink-0 mt-0.5" icon="lucide:check" strokeWidth="1.5" width="16"></iconify-icon>
<span>Designed to earn <strong>5+ high-authority placements</strong> in relevant media.</span>
</li>
<li className="flex gap-3 text-sm text-zinc-600">
<iconify-icon className="text-zinc-900 shrink-0 mt-0.5" icon="lucide:check" strokeWidth="1.5" width="16"></iconify-icon>
<span>Ideal for putting your brand on the map and getting your first serious coverage.</span>
</li>
<li className="flex gap-3 text-sm text-zinc-600">
<iconify-icon className="text-zinc-900 shrink-0 mt-0.5" icon="lucide:check" strokeWidth="1.5" width="16"></iconify-icon>
<span>Includes: angle development, outreach, coverage report, and action plan.</span>
</li>
</ul>
</div>

<div className="relative border border-zinc-900 rounded-2xl p-6 md:p-8 bg-zinc-900 text-white shadow-2xl md:-mt-4 lg:-mt-8">
<div className="absolute top-0 right-0 bg-white text-zinc-900 text-xs font-semibold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                    Flagship
                </div>
<div className="flex items-center gap-2 text-zinc-400 mb-4">
<iconify-icon className="text-white" icon="lucide:cpu" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-sm font-medium uppercase tracking-wider">Level 2</span>
</div>
<h3 className="text-2xl font-semibold text-white tracking-tight mb-2">Authority Engine</h3>
<p className="text-sm text-zinc-400 mb-6 h-10">Best for SaaS stuck on page 2–3 needing a serious authority jump.</p>
<div className="mb-8">
<span className="text-3xl font-semibold text-white tracking-tight">$14,500</span>
<span className="text-zinc-400 text-sm font-medium block mt-1">one-time investment</span>
</div>
<a className="block w-full py-3 px-4 bg-white hover:bg-zinc-100 text-zinc-900 text-center text-sm font-medium rounded-lg transition-colors mb-8" href="#">
                    View Authority Engine
                </a>
<ul className="space-y-4">
<li className="flex gap-3 text-sm text-zinc-300">
<iconify-icon className="text-white shrink-0 mt-0.5" icon="lucide:check" strokeWidth="1.5" width="16"></iconify-icon>
<span>1 national-level digital PR campaign.</span>
</li>
<li className="flex gap-3 text-sm text-zinc-300">
<iconify-icon className="text-white shrink-0 mt-0.5" icon="lucide:check" strokeWidth="1.5" width="16"></iconify-icon>
<span>Designed to earn <strong>10+ authority placements</strong> across relevant media.</span>
</li>
<li className="flex gap-3 text-sm text-zinc-300">
<iconify-icon className="text-white shrink-0 mt-0.5" icon="lucide:check" strokeWidth="1.5" width="16"></iconify-icon>
<span>Includes strategic angle doc, coverage report, and authority SEO add-ons.</span>
</li>
<li className="flex gap-3 text-sm text-zinc-300">
<iconify-icon className="text-white shrink-0 mt-0.5" icon="lucide:check" strokeWidth="1.5" width="16"></iconify-icon>
<span>Built to move the needle in both AI overviews and traditional search.</span>
</li>
</ul>
</div>

<div className="group border border-zinc-200 rounded-2xl p-6 md:p-8 hover:border-zinc-300 transition-all bg-white">
<div className="flex items-center gap-2 text-zinc-400 mb-4">
<iconify-icon icon="lucide:crown" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-sm font-medium uppercase tracking-wider">Level 3</span>
</div>
<h3 className="text-2xl font-semibold text-zinc-900 tracking-tight mb-2">Category Kingmaker</h3>
<p className="text-sm text-zinc-500 mb-6 h-10">Best for funded SaaS ready to define the category narrative.</p>
<div className="mb-8">
<span className="text-3xl font-semibold text-zinc-900 tracking-tight">$22,500</span>
<span className="text-zinc-400 text-sm font-medium block mt-1">one-time investment</span>
</div>
<a className="block w-full py-3 px-4 bg-zinc-100 hover:bg-zinc-200 text-zinc-900 text-center text-sm font-medium rounded-lg transition-colors mb-8" href="#">
                    Talk to Us
                </a>
<ul className="space-y-4">
<li className="flex gap-3 text-sm text-zinc-600">
<iconify-icon className="text-zinc-900 shrink-0 mt-0.5" icon="lucide:check" strokeWidth="1.5" width="16"></iconify-icon>
<span>1 flagship, “headline” digital PR campaign to create a category-defining moment.</span>
</li>
<li className="flex gap-3 text-sm text-zinc-600">
<iconify-icon className="text-zinc-900 shrink-0 mt-0.5" icon="lucide:check" strokeWidth="1.5" width="16"></iconify-icon>
<span>Designed to earn <strong>20+ authority placements</strong> and broad distribution.</span>
</li>
<li className="flex gap-3 text-sm text-zinc-600">
<iconify-icon className="text-zinc-900 shrink-0 mt-0.5" icon="lucide:check" strokeWidth="1.5" width="16"></iconify-icon>
<span>Includes deeper link support, brand mentions, and strategic authority report.</span>
</li>
<li className="flex gap-3 text-sm text-zinc-600">
<iconify-icon className="text-zinc-900 shrink-0 mt-0.5" icon="lucide:check" strokeWidth="1.5" width="16"></iconify-icon>
<span>Perfect tentpole campaign around funding, major launches, or category pivots.</span>
</li>
</ul>
</div>
</div>
</section>

<section className="bg-zinc-50 py-24 border-y border-zinc-200">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-zinc-900 tracking-tight mb-4">At a Glance</h2>
<p className="text-zinc-500">Which campaign matches your current growth stage?</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12">

<div className="space-y-6">
<h4 className="text-lg font-semibold text-zinc-900 border-b border-zinc-200 pb-4">Choose Launchpad if...</h4>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<iconify-icon className="text-zinc-400 mt-1 shrink-0" icon="lucide:arrow-right" width="16"></iconify-icon>
<span className="text-sm text-zinc-600">You’ve never run a serious PR campaign and want to stop being invisible.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-zinc-400 mt-1 shrink-0" icon="lucide:arrow-right" width="16"></iconify-icon>
<span className="text-sm text-zinc-600">You’re about to launch a new feature, category, or big update.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-zinc-400 mt-1 shrink-0" icon="lucide:arrow-right" width="16"></iconify-icon>
<span className="text-sm text-zinc-600">You want media logos and links you can finally put on the homepage and decks.</span>
</li>
</ul>
</div>

<div className="space-y-6">
<h4 className="text-lg font-semibold text-zinc-900 border-b border-zinc-200 pb-4">Choose Authority Engine if...</h4>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<iconify-icon className="text-zinc-900 mt-1 shrink-0" icon="lucide:arrow-right" width="16"></iconify-icon>
<span className="text-sm text-zinc-900 font-medium">You’re already shipping content but stuck in the mid-pack.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-zinc-900 mt-1 shrink-0" icon="lucide:arrow-right" width="16"></iconify-icon>
<span className="text-sm text-zinc-900 font-medium">Your competitors are starting to outrank and out-shout you.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-zinc-900 mt-1 shrink-0" icon="lucide:arrow-right" width="16"></iconify-icon>
<span className="text-sm text-zinc-900 font-medium">You want a single, high-impact campaign that elevates rankings and trust.</span>
</li>
</ul>
</div>

<div className="space-y-6">
<h4 className="text-lg font-semibold text-zinc-900 border-b border-zinc-200 pb-4">Choose Kingmaker if...</h4>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<iconify-icon className="text-zinc-400 mt-1 shrink-0" icon="lucide:arrow-right" width="16"></iconify-icon>
<span className="text-sm text-zinc-600">You’re funded and expected to own the category.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-zinc-400 mt-1 shrink-0" icon="lucide:arrow-right" width="16"></iconify-icon>
<span className="text-sm text-zinc-600">You’re planning a big announcement (funding, rebrand, new category, major report).</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-zinc-400 mt-1 shrink-0" icon="lucide:arrow-right" width="16"></iconify-icon>
<span className="text-sm text-zinc-600">You want PR, links, and narrative that your board and leadership will actually notice.</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl md:text-4xl font-semibold text-zinc-900 tracking-tight mb-6">Why Productized?</h2>
<p className="text-lg text-zinc-500 mb-8 leading-relaxed">
                    Every campaign is designed to be a clear, one-off decision that either makes sense now—or doesn’t.
                </p>
<div className="space-y-8">
<div>
<h4 className="text-zinc-900 font-medium mb-3 flex items-center gap-2">
<iconify-icon className="text-zinc-400" icon="lucide:x-circle" strokeWidth="1.5" width="18"></iconify-icon>
                            The Traditional Agency Way
                        </h4>
<ul className="text-sm text-zinc-500 space-y-2 pl-7">
<li>Endless calls and discovery phases.</li>
<li>Vague custom proposals with hidden fees.</li>
<li>Retainers that never quite end.</li>
</ul>
</div>
<div>
<h4 className="text-zinc-900 font-medium mb-3 flex items-center gap-2">
<iconify-icon className="text-emerald-600" icon="lucide:check-circle-2" strokeWidth="1.5" width="18"></iconify-icon>
                            The Verso Way
                        </h4>
<ul className="text-sm text-zinc-600 space-y-2 pl-7">
<li><strong className="text-zinc-900 font-medium">Fixed scope.</strong> You know exactly what you’re buying.</li>
<li><strong className="text-zinc-900 font-medium">Fixed pricing.</strong> You know exactly what you’re paying.</li>
<li><strong className="text-zinc-900 font-medium">Self-serve.</strong> You buy online, on your schedule.</li>
<li><strong className="text-zinc-900 font-medium">B2B SaaS only.</strong> No random local clients diluting the playbook.</li>
</ul>
</div>
</div>
</div>
<div className="bg-zinc-100 rounded-3xl p-8 lg:p-12 border border-zinc-200/50 flex flex-col justify-center items-center text-center">
<div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6">
<iconify-icon className="text-zinc-900" icon="lucide:file-check" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-zinc-900 mb-2">Simplicity by Design</h3>
<p className="text-sm text-zinc-500 max-w-xs mx-auto">
                    We removed the friction so you can focus on shipping product while we handle the authority.
                </p>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-zinc-200">
<div className="max-w-4xl mx-auto text-center">
<h2 className="text-3xl font-semibold text-zinc-900 tracking-tight mb-6">Still Not Sure?</h2>
<p className="text-lg text-zinc-500 mb-10 max-w-2xl mx-auto">
                If you’re not sure which campaign fits, start with the Authority Engine for impact, or get a diagnostic first.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-4 bg-zinc-900 text-white rounded-xl font-medium hover:bg-zinc-800 transition-all flex items-center justify-center gap-2" href="#">
                    View Authority Engine
                    <iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="16"></iconify-icon>
</a>
<a className="w-full sm:w-auto px-8 py-4 bg-white border border-zinc-200 text-zinc-600 rounded-xl font-medium hover:bg-zinc-50 hover:border-zinc-300 transition-all" href="#">
                    Get Your AI Search Authority Score
                </a>
</div>
</div>
</section>

<footer className="bg-white border-t border-zinc-100 py-12 px-6">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<span className="text-sm font-semibold tracking-tight text-zinc-900">VERSO</span>
<p className="text-xs text-zinc-400">© 2024 Verso SaaS PR. All rights reserved.</p>
</div>
</footer>

    </>
  );
}
