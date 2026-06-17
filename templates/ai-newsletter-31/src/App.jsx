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
      

<nav className="fixed top-0 left-0 right-0 z-50 bg-slate-50/80 backdrop-blur-md border-b border-slate-200/50">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="font-medium text-base text-slate-900 tracking-tighter uppercase flex items-center gap-2">
<iconify-icon className="text-emerald-600" icon="solar:programming-linear" width="20"></iconify-icon>
                STORYLINE
            </div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-normal text-slate-600 hover:text-slate-900 transition-colors" href="#pricing">Pricing</a>
<a className="inline-flex items-center justify-center bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors" href="#pricing">
                    Start Free Trial
                </a>
</div>
</div>
</nav>

<section className="pt-40 pb-24 px-6 relative overflow-hidden flex flex-col items-center text-center">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[50vh] bg-gradient-to-b from-emerald-500/15 via-teal-400/5 to-transparent -z-10 blur-3xl rounded-full"></div>
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-200/50 bg-white/80 backdrop-blur-sm shadow-sm mb-8">
<iconify-icon className="text-emerald-600" icon="solar:magic-stick-3-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
<span className="text-xs font-medium text-slate-900 tracking-tight">The AI Newsletter Generator for Daily Storytelling Emails</span>
</div>
<h1 className="text-5xl md:text-7xl font-medium text-slate-900 tracking-tight max-w-4xl leading-[1.1] mb-8">
            Turn Subscribers into Buyers with <span className="text-emerald-500">Story-Driven</span> Newsletters
        </h1>
<p className="text-lg md:text-xl text-slate-500 max-w-2xl mb-10 leading-relaxed">
            The AI newsletter generator that helps you ship fresh stories daily in your voice — not "AI voice." Every email is designed to shift beliefs, build trust, and naturally turn readers into buyers.<br/><br/>
<span className="font-medium text-slate-700">Show up daily. Build trust. Sell without selling.</span>
</p>
<div className="flex flex-col sm:flex-row items-center gap-4 mb-16">
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 text-white px-8 py-3.5 rounded-xl text-base font-medium hover:bg-emerald-500 transition-colors shadow-sm" href="#pricing">
                Start Your 14-Day Free Trial
                <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</a>
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-slate-900 border border-slate-200 px-8 py-3.5 rounded-xl text-base font-medium hover:bg-slate-50 transition-colors shadow-sm" href="#demo">
                See how it works
                <iconify-icon icon="solar:code-scan-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</a>
</div>
</section>

<section className="py-24 px-6 bg-white border-y border-slate-200" id="demo">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-12">
<span className="text-xs font-medium text-emerald-600 uppercase tracking-widest mb-3 block">How Our AI Newsletter Generator Works</span>
<h2 className="text-3xl md:text-4xl font-medium text-slate-900 tracking-tight">Watch It Write Your First Storytelling Newsletter</h2>
</div>

<div className="rounded-2xl border border-slate-200 bg-slate-50 shadow-sm overflow-hidden flex flex-col md:flex-row min-h-[600px]">

<div className="w-full md:w-64 bg-white border-r border-slate-200 p-4 flex flex-col gap-4">
<div className="h-8 w-24 bg-slate-100 rounded mb-4"></div>
<div className="space-y-2">
<div className="text-xs font-medium text-slate-400 uppercase tracking-widest mb-2">Input Insight</div>
<div className="p-3 border border-slate-200 rounded-lg bg-slate-50 text-sm text-slate-600">
                            "Most founders think they need more features, but they actually need better positioning."
                        </div>
</div>
<div className="space-y-2 mt-4">
<div className="text-xs font-medium text-slate-400 uppercase tracking-widest mb-2">Generated Angles</div>
<div className="p-3 border border-emerald-600 rounded-lg bg-emerald-50 text-emerald-700 text-sm font-medium shadow-sm flex justify-between items-center cursor-pointer relative overflow-hidden">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-600"></div>
                            The "Feature Trap" Myth
                            <iconify-icon icon="solar:check-circle-linear" width="16"></iconify-icon>
</div>
<div className="p-3 border border-transparent hover:border-slate-200 rounded-lg text-sm text-slate-600 cursor-pointer transition-colors">
                            Personal Failure Story
                        </div>
<div className="p-3 border border-transparent hover:border-slate-200 rounded-lg text-sm text-slate-600 cursor-pointer transition-colors">
                            Contrarian Take
                        </div>
</div>
</div>

<div className="flex-1 p-8 bg-slate-50 relative flex flex-col">
<div className="flex items-center justify-between mb-8 border-b border-slate-200 pb-4">
<div className="text-sm font-medium text-slate-900 flex items-center gap-2">
<span className="text-slate-400">Subject:</span> Why your product roadmap is killing your sales
                        </div>
<div className="flex gap-2">
<div className="h-8 w-8 rounded-lg border border-slate-200 bg-white flex items-center justify-center hover:bg-slate-100 transition-colors cursor-pointer">
<iconify-icon className="text-slate-500" icon="solar:copy-linear" width="16"></iconify-icon>
</div>
<div className="h-8 px-4 rounded-lg bg-slate-900 text-white text-xs font-medium flex items-center justify-center hover:bg-slate-800 transition-colors cursor-pointer">
                                Export
                            </div>
</div>
</div>
<div className="space-y-4 max-w-2xl relative">

<div className="h-4 w-3/4 bg-slate-200 rounded animate-pulse"></div>
<div className="h-4 w-full bg-slate-200 rounded animate-pulse"></div>
<div className="h-4 w-5/6 bg-slate-200 rounded animate-pulse"></div>
<div className="h-4 w-full bg-slate-200 rounded animate-pulse"></div>
<div className="h-4 w-2/3 bg-slate-200 rounded animate-pulse pt-4"></div>
<div className="mt-8 p-6 bg-white border border-slate-200 rounded-xl shadow-sm relative">
<div className="absolute -top-3 left-4 bg-white px-2 text-xs font-medium text-emerald-600 uppercase tracking-widest flex items-center gap-1">
<iconify-icon icon="solar:bolt-linear" width="14"></iconify-icon> Live Output
                            </div>
<p className="text-sm text-slate-800 leading-relaxed font-serif mt-2">
                                I used to think the answer to slow growth was writing more code.<br/><br/>
                                Every time a launch flopped, I'd open my editor. "If I just add this integration," I'd tell myself, "then they'll buy."<br/><br/>
                                It took me 3 failed products and burning through my savings to realize the hard truth: People don't buy features. They buy a better version of themselves.<br/><br/>
                                If your positioning is confusing, no amount of React components will save you.
                            </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto">
<div className="text-center mb-16">
<span className="text-xs font-medium text-slate-500 uppercase tracking-widest mb-3 block">What Makes This AI Newsletter Generator Different</span>
<h2 className="text-3xl md:text-4xl font-medium text-slate-900 tracking-tight">Same Inbox. Two Very Different Emails.</h2>
</div>
<div className="grid md:grid-cols-2 gap-8">

<div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-emerald-600"></div>
<div className="flex items-center gap-3 mb-6">
<div className="h-10 w-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600">
<iconify-icon icon="solar:star-fall-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<div>
<div className="text-xs font-medium text-emerald-600 uppercase tracking-widest">Our Approach</div>
<h3 className="text-xl font-medium text-slate-900 tracking-tight">Storytelling-First AI Generator</h3>
</div>
</div>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<iconify-icon className="text-emerald-600 shrink-0 mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
<span className="text-sm text-slate-700">Create newsletters that subscribers reply to — not just skim.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-emerald-600 shrink-0 mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
<span className="text-sm text-slate-700">Trained on story-led campaigns that turn readers into loyal customers.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-emerald-600 shrink-0 mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
<span className="text-sm text-slate-700">Built by copywriters who understand psychology — not just aesthetics.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-emerald-600 shrink-0 mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
<span className="text-sm text-slate-700">Make newsletter content in minutes with stories that actually connect.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-emerald-600 shrink-0 mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
<span className="text-sm text-slate-700">Sounds like a real human actually talking — not a corporate brochure.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-emerald-600 shrink-0 mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
<span className="text-sm text-slate-700">A $97/month investment that returns thousands. Even your accountant will smile.</span>
</li>
</ul>
</div>

<div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 opacity-80 hover:opacity-100 transition-opacity">
<div className="flex items-center gap-3 mb-6">
<div className="h-10 w-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400">
<iconify-icon icon="solar:ghost-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<div>
<div className="text-xs font-medium text-slate-400 uppercase tracking-widest">Their Approach</div>
<h3 className="text-xl font-medium text-slate-900 tracking-tight">Template-First AI Tools</h3>
</div>
</div>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<iconify-icon className="text-slate-400 shrink-0 mt-0.5" icon="solar:close-circle-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
<span className="text-sm text-slate-500">Create pretty newsletters that still get ignored (pretty ≠ compelling).</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-slate-400 shrink-0 mt-0.5" icon="solar:close-circle-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
<span className="text-sm text-slate-500">Trained on company newsletters most people ignore — so yours sounds the same.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-slate-400 shrink-0 mt-0.5" icon="solar:close-circle-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
<span className="text-sm text-slate-500">Built by designers who understand layouts — not human behavior.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-slate-400 shrink-0 mt-0.5" icon="solar:close-circle-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
<span className="text-sm text-slate-500">Spend hours making a newsletter "look perfect" while competitors are selling.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-slate-400 shrink-0 mt-0.5" icon="solar:close-circle-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
<span className="text-sm text-slate-500">"Professional templates" that make you sound exactly like everyone else.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-slate-400 shrink-0 mt-0.5" icon="solar:close-circle-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
<span className="text-sm text-slate-500">A $29/month "deal" that costs you thousands in lost sales. Congrats on saving $68.</span>
</li>
</ul>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white border-y border-slate-200">
<div className="max-w-5xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-medium text-slate-900 tracking-tight">
                    Why Most AI Newsletter Tools Slowly <span className="text-slate-400">Destroy Trust</span>
</h2>
</div>
<div className="grid md:grid-cols-5 gap-6">

<div className="md:col-span-3 bg-slate-50 rounded-3xl p-8 border border-slate-200 flex flex-col justify-center relative overflow-hidden">
<div className="absolute -right-10 -bottom-10 opacity-5">
<iconify-icon icon="solar:bug-linear" width="160"></iconify-icon>
</div>
<p className="text-lg text-slate-600 mb-6 relative z-10">
                        Most tools think the problem is <span className="font-medium text-slate-900 line-through decoration-slate-400">emails don't look good enough.</span>
</p>
<p className="text-2xl md:text-3xl font-medium text-slate-900 tracking-tight leading-snug mb-4 relative z-10">
                        The real problem is emails don't say anything worth reading.
                    </p>
<p className="text-base text-slate-500 leading-relaxed relative z-10">
                        Subscribers don't delete your emails because they're ugly. They delete them because they lack substance, story, and genuine connection.
                    </p>
</div>

<div className="md:col-span-2 bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col justify-center">
<div className="flex items-center gap-2 mb-6">
<iconify-icon className="text-slate-400" icon="solar:shield-cross-linear" width="20"></iconify-icon>
<h3 className="text-sm font-medium text-slate-900 uppercase tracking-widest">The 4 Trust Killers</h3>
</div>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<iconify-icon className="text-slate-400 shrink-0 mt-0.5" icon="solar:close-circle-linear" width="20"></iconify-icon>
<span className="text-sm text-slate-600"><strong className="text-slate-900 font-medium">Generic voice:</strong> Sound exactly like everyone else.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-slate-400 shrink-0 mt-0.5" icon="solar:close-circle-linear" width="20"></iconify-icon>
<span className="text-sm text-slate-600"><strong className="text-slate-900 font-medium">Lazy templates:</strong> Clearly written by AI bots.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-slate-400 shrink-0 mt-0.5" icon="solar:close-circle-linear" width="20"></iconify-icon>
<span className="text-sm text-slate-600"><strong className="text-slate-900 font-medium">No connection:</strong> Zero storytelling or empathy.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-slate-400 shrink-0 mt-0.5" icon="solar:close-circle-linear" width="20"></iconify-icon>
<span className="text-sm text-slate-600"><strong className="text-slate-900 font-medium">Over-selling:</strong> Pure "Buy Now" spam in pretty colors.</span>
</li>
</ul>
</div>

<div className="md:col-span-5 bg-slate-900 rounded-3xl p-8 md:p-10 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-8 mt-2 relative overflow-hidden">
<div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-emerald-900/20 to-transparent pointer-events-none"></div>
<div className="max-w-2xl relative z-10">
<h3 className="text-xl font-medium text-white tracking-tight mb-3">
                            The Expensive Truth: <span className="text-slate-400">Ignored Emails = Ignored Business</span>
</h3>
<p className="text-slate-400 text-sm md:text-base leading-relaxed mb-6">
                            When subscribers stop trusting you, they don't just ignore your emails. They ignore your launches and your offers. Boring content wrapped in a beautiful design is still just garbage.
                        </p>
<div className="inline-flex items-center gap-3 bg-slate-800/50 border border-slate-700 rounded-xl px-5 py-3 backdrop-blur-sm">
<iconify-icon className="text-emerald-500 shrink-0" icon="solar:quote-left-linear" width="24"></iconify-icon>
<span className="text-sm font-medium text-slate-200 italic">As email legend Ben Settle famously puts it: "It is better to be hated than ignored."</span>
</div>
</div>
</div>
</div>

<div className="text-center mt-12 flex flex-col items-center">
<p className="text-base text-slate-600 max-w-2xl">
                    But switching to storytelling is only half the battle. To truly convert readers into buyers, a weekly cadence isn't enough. <span className="font-medium text-slate-900">You need to become a Daily Habit.</span>
</p>
<div className="mt-6 text-emerald-600 bg-emerald-50 border border-emerald-200 rounded-full w-10 h-10 flex items-center justify-center animate-bounce">
<iconify-icon icon="solar:arrow-down-linear" width="20"></iconify-icon>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-5xl mx-auto">
<div className="text-center mb-16 max-w-3xl mx-auto">
<h2 className="text-3xl md:text-4xl font-medium text-slate-900 tracking-tight mb-6">The Weekly Newsletter Trap</h2>
<p className="text-lg text-slate-600">
                Most email “experts” say: “Just be consistent. Send one perfect newsletter per week.”<br/>
                It’s not bad advice. But it comes with a hidden cost:
            </p>
<div className="mt-6 inline-block bg-red-50 text-red-900 border border-red-200 px-6 py-3 rounded-xl text-sm font-medium tracking-tight">
                6 DAYS OF SILENCE = 6 DAYS FOR THEM TO FORGET YOU.
            </div>
</div>
<div className="grid md:grid-cols-2 gap-16 items-center">
<div>
<p className="text-base text-slate-600 mb-6">
                    As James Clear (author of Atomic Habits) proves: Habits are formed through repetition, not just intensity. Weekly emails are just "information." Daily stories are a "habit." Our tool helps you become the daily habit your customers can't live without.
                </p>
<p className="text-base text-slate-900 font-medium mb-8">
                    Here's what happens when you show up daily with authentic stories instead:
                </p>

<div className="relative border-l border-slate-200 ml-3 space-y-8">
<div className="relative pl-6">
<div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-slate-200 border-2 border-white"></div>
<h4 className="text-sm font-medium text-slate-900">Day 1: "Who's this?"</h4>
<p className="text-sm text-slate-500 mt-1">→ Cold subscriber. First impression.</p>
</div>
<div className="relative pl-6">
<div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-slate-300 border-2 border-white"></div>
<h4 className="text-sm font-medium text-slate-900">Day 7: "Oh, this person again"</h4>
<p className="text-sm text-slate-500 mt-1">→ Name recognition forming.</p>
</div>
<div className="relative pl-6">
<div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-emerald-300 border-2 border-white"></div>
<h4 className="text-sm font-medium text-slate-900">Day 14: "I actually look forward to these"</h4>
<p className="text-sm text-slate-500 mt-1">→ Habit formed. Anticipation built.</p>
</div>
<div className="relative pl-6">
<div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-emerald-500 border-2 border-white"></div>
<h4 className="text-sm font-medium text-slate-900">Day 30: "Shut up and take my money"</h4>
<p className="text-sm text-slate-500 mt-1">→ Trust converted to sale.</p>
</div>
<div className="relative pl-6">
<div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-emerald-600 border-2 border-white shadow-[0_0_8px_rgba(5,150,105,0.6)]"></div>
<h4 className="text-sm font-medium text-slate-900">Day 365: "You're the only email I never miss"</h4>
<p className="text-sm text-slate-500 mt-1">→ Ultimate loyalty. Daily ritual established.</p>
</div>
</div>
</div>
<div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-5">
<iconify-icon icon="solar:chart-square-linear" width="120"></iconify-icon>
</div>
<p className="text-lg text-slate-900 font-medium mb-6 relative z-10">You become part of their routine. Trust builds naturally. Sales feel effortless.</p>
<p className="text-base text-slate-600 mb-8 pb-8 border-b border-slate-100 relative z-10">No hype. No tricks. Just compound consistency.</p>
<h4 className="text-sm font-medium text-slate-900 uppercase tracking-widest mb-4 relative z-10">Think about it:</h4>
<div className="space-y-4 mb-8 relative z-10">
<div className="flex justify-between items-center p-4 rounded-xl bg-slate-50 border border-slate-100">
<span className="text-sm text-slate-600 flex items-center gap-2"><iconify-icon icon="solar:calendar-linear"></iconify-icon> 1 email / week</span>
<span className="text-sm font-medium text-slate-900">52 touchpoints / year</span>
</div>
<div className="flex justify-between items-center p-4 rounded-xl bg-emerald-600 text-white shadow-md shadow-emerald-600/20">
<span className="text-sm text-emerald-100 flex items-center gap-2"><iconify-icon icon="solar:calendar-minimalistic-linear"></iconify-icon> 1 email / day</span>
<span className="text-sm font-medium text-white">365 touchpoints / year</span>
</div>
</div>
<p className="text-sm font-medium text-slate-900 text-center relative z-10">Which relationship would YOU trust more?</p>
</div>
</div>
<div className="text-center mt-16 max-w-2xl mx-auto bg-slate-100 rounded-2xl p-8 border border-slate-200">
<p className="text-base text-slate-900 font-medium mb-2">But here is the hard part:</p>
<p className="text-sm text-slate-600 mb-6">How do you come up with a fresh, engaging story every single day without burning out?</p>
<p className="text-lg text-emerald-600 font-medium tracking-tight">That's exactly where we come in.</p>
</div>
</section>

<section className="py-24 px-6 bg-slate-900 text-white rounded-[2.5rem] max-w-[96%] mx-auto my-12 relative overflow-hidden">
<div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-emerald-600/10 to-transparent pointer-events-none"></div>
<div className="max-w-7xl mx-auto relative z-10">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">Daily Storytelling, Powered by AI</h2>
<p className="text-slate-400 text-lg max-w-2xl mx-auto">The features that turn the blank page into your daily competitive advantage.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="bg-slate-800/50 border border-slate-700/50 p-6 rounded-2xl backdrop-blur-sm hover:border-emerald-500/50 transition-colors">
<div className="h-10 w-10 bg-slate-800 rounded-lg flex items-center justify-center mb-4 border border-slate-700 text-emerald-400">
<iconify-icon icon="solar:rocket-linear" width="24"></iconify-icon>
</div>
<h3 className="text-base font-medium text-white mb-2 tracking-tight">Ship Stories Daily</h3>
<p className="text-sm text-slate-400 leading-relaxed">That "What do I write today?" dread? Gone. Drop in one insight and get multiple story angles. Pick one, tweak it, send in 5–10 minutes.</p>
</div>

<div className="bg-slate-800/50 border border-slate-700/50 p-6 rounded-2xl backdrop-blur-sm hover:border-emerald-500/50 transition-colors">
<div className="h-10 w-10 bg-slate-800 rounded-lg flex items-center justify-center mb-4 border border-slate-700 text-emerald-400">
<iconify-icon icon="solar:user-speak-linear" width="24"></iconify-icon>
</div>
<h3 className="text-base font-medium text-white mb-2 tracking-tight">Sound Like You</h3>
<p className="text-sm text-slate-400 leading-relaxed">No generic templates with your name pasted on. Drafts come out conversational and specific—so it still feels like you (not "AI voice").</p>
</div>

<div className="bg-slate-800/50 border border-slate-700/50 p-6 rounded-2xl backdrop-blur-sm hover:border-emerald-500/50 transition-colors">
<div className="h-10 w-10 bg-slate-800 rounded-lg flex items-center justify-center mb-4 border border-slate-700 text-emerald-400">
<iconify-icon icon="solar:cpu-bolt-linear" width="24"></iconify-icon>
</div>
<h3 className="text-base font-medium text-white mb-2 tracking-tight">Shift Quiet Beliefs</h3>
<p className="text-sm text-slate-400 leading-relaxed">People don't buy because of the beliefs running quietly in the background. Each email challenges one hidden belief—so the "yes" feels like their idea.</p>
</div>

<div className="bg-slate-800/50 border border-slate-700/50 p-6 rounded-2xl backdrop-blur-sm hover:border-emerald-500/50 transition-colors">
<div className="h-10 w-10 bg-slate-800 rounded-lg flex items-center justify-center mb-4 border border-slate-700 text-emerald-400">
<iconify-icon icon="solar:wallet-money-linear" width="24"></iconify-icon>
</div>
<h3 className="text-base font-medium text-white mb-2 tracking-tight">Sell Without Selling</h3>
<p className="text-sm text-slate-400 leading-relaxed">The awkward part? Asking for the sale. We build a natural bridge at the end—so your link feels like the obvious next step, not a push.</p>
</div>

<div className="bg-slate-800/50 border border-slate-700/50 p-6 rounded-2xl backdrop-blur-sm hover:border-emerald-500/50 transition-colors">
<div className="h-10 w-10 bg-slate-800 rounded-lg flex items-center justify-center mb-4 border border-slate-700 text-emerald-400">
<iconify-icon icon="solar:mailbox-linear" width="24"></iconify-icon>
</div>
<h3 className="text-base font-medium text-white mb-2 tracking-tight">Build Inbox Habits</h3>
<p className="text-sm text-slate-400 leading-relaxed">Weekly emails give them six days to forget you. Daily stories make you expected—welcomed—and noticed when you're gone.</p>
</div>

<div className="bg-slate-800/50 border border-slate-700/50 p-6 rounded-2xl backdrop-blur-sm hover:border-emerald-500/50 transition-colors">
<div className="h-10 w-10 bg-slate-800 rounded-lg flex items-center justify-center mb-4 border border-slate-700 text-emerald-400">
<iconify-icon icon="solar:database-linear" width="24"></iconify-icon>
</div>
<h3 className="text-base font-medium text-white mb-2 tracking-tight">Plant Inbox Trust</h3>
<p className="text-sm text-slate-400 leading-relaxed">Trust isn't built by polish. It's built by being consistently worth reading. Story after story, it compounds—until you're the first person they think of.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-medium text-slate-900 tracking-tight mb-4">Built for People Who Sell Through Trust</h2>
</div>
<div className="grid md:grid-cols-2 gap-6 mb-16">

<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow">
<div className="flex items-center gap-3 mb-4">
<iconify-icon className="text-slate-900" icon="solar:hammer-linear" width="24"></iconify-icon>
<h3 className="text-lg font-medium text-slate-900 tracking-tight">Indie Hackers &amp; Solo Founders</h3>
</div>
<p className="text-sm text-slate-500 mb-6 flex-1">You build. You sell. You do everything alone. You know you should email your list — but after launch week, you go silent for a month.</p>
<div className="bg-slate-50 p-4 rounded-xl border border-slate-100 text-sm font-medium text-slate-900">
<span className="text-emerald-600 mr-2">→</span>Daily stories keep your list warm while you build the next thing.
                </div>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow">
<div className="flex items-center gap-3 mb-4">
<iconify-icon className="text-slate-900" icon="solar:diploma-linear" width="24"></iconify-icon>
<h3 className="text-lg font-medium text-slate-900 tracking-tight">Course Creators &amp; Coaches</h3>
</div>
<p className="text-sm text-slate-500 mb-6 flex-1">Between launches, your list goes cold. Three weeks of silence, then a "BUY MY COURSE" blast. You already know that's not working.</p>
<div className="bg-slate-50 p-4 rounded-xl border border-slate-100 text-sm font-medium text-slate-900">
<span className="text-emerald-600 mr-2">→</span>Daily stories keep your list warm so every launch starts hot, not cold.
                </div>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow">
<div className="flex items-center gap-3 mb-4">
<iconify-icon className="text-slate-900" icon="solar:case-linear" width="24"></iconify-icon>
<h3 className="text-lg font-medium text-slate-900 tracking-tight">Freelancers &amp; Consultants</h3>
</div>
<p className="text-sm text-slate-500 mb-6 flex-1">Client work eats all your time. Your email list — your best asset — sits untouched for weeks. You know it's money left on the table.</p>
<div className="bg-slate-50 p-4 rounded-xl border border-slate-100 text-sm font-medium text-slate-900">
<span className="text-emerald-600 mr-2">→</span>5–10 minutes per morning. Your list stays active without stealing client hours.
                </div>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow">
<div className="flex items-center gap-3 mb-4">
<iconify-icon className="text-slate-900" icon="solar:letter-linear" width="24"></iconify-icon>
<h3 className="text-lg font-medium text-slate-900 tracking-tight">Newsletter Creators</h3>
</div>
<p className="text-sm text-slate-500 mb-6 flex-1">You've been writing for 6 months. Same angles. Same frameworks. Same feeling of "haven't I said this before?"</p>
<div className="bg-slate-50 p-4 rounded-xl border border-slate-100 text-sm font-medium text-slate-900">
<span className="text-emerald-600 mr-2">→</span>Fresh angles from your existing ideas that you genuinely didn't think of. The well never runs dry.
                </div>
</div>
</div>

<div className="max-w-2xl mx-auto bg-slate-50 border border-slate-200 rounded-2xl p-8 text-center relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-slate-300"></div>
<div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white border border-slate-200 mb-4 text-slate-400">
<iconify-icon icon="solar:stop-circle-linear" width="24"></iconify-icon>
</div>
<h4 className="text-base font-medium text-slate-900 mb-4 tracking-tight">This is NOT for you if:</h4>
<ul className="text-sm text-slate-500 space-y-2 flex flex-col items-center">
<li className="flex items-center gap-2"><iconify-icon icon="solar:close-circle-linear" width="16"></iconify-icon>You just want a pretty template to send once a month</li>
<li className="flex items-center gap-2"><iconify-icon icon="solar:close-circle-linear" width="16"></iconify-icon>You're looking for "set it and forget it" automation</li>
<li className="flex items-center gap-2"><iconify-icon icon="solar:close-circle-linear" width="16"></iconify-icon>You don't have something to sell</li>
</ul>
</div>
</section>

<section className="py-24 px-6 bg-white border-y border-slate-200">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-medium text-slate-900 tracking-tight mb-4">We Didn't Invent Storytelling.<br/><span className="text-slate-400">We Just Made It Daily.</span></h2>
</div>

<div className="max-w-3xl mx-auto text-center mb-24 relative">
<iconify-icon className="text-emerald-100 mb-6" icon="solar:quote-left-linear" width="40"></iconify-icon>
<p className="text-xl md:text-2xl font-medium text-slate-900 leading-relaxed tracking-tight mb-8">
                    "I built this because I had the exact same problem you do. I've written thousands of emails for over 100 clients. I still had mornings where the blank page won. So I built a tool that makes starting cheap — 5 minutes and you have something worth sending. I use it every morning. For my own list. To sell my own products. This isn't a tool I built for you. It's a tool I built for me — that I'm sharing with you."
                </p>
<div className="text-sm font-medium text-slate-500 uppercase tracking-widest">
                    ── Name, Founder of Storyline
                </div>
</div>

<div className="grid md:grid-cols-3 gap-6 mb-24">
<div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
<p className="text-sm text-slate-700 mb-6 leading-relaxed">"I used to stare at a blank page for an hour. Now I pick an angle and send in 10 minutes."</p>
<div className="text-xs font-medium text-slate-900 uppercase tracking-wide">── Alex P., Solo founder, SaaS</div>
</div>
<div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
<p className="text-sm text-slate-700 mb-6 leading-relaxed">"Between launches, my list went cold. Now I show up daily with stories. Last launch converted 2x."</p>
<div className="text-xs font-medium text-slate-900 uppercase tracking-wide">── Sarah K., Online coach</div>
</div>
<div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
<p className="text-sm text-slate-700 mb-6 leading-relaxed">"I was running out of things to say after 6 months. This tool finds angles I genuinely didn't think of."</p>
<div className="text-xs font-medium text-slate-900 uppercase tracking-wide">── Marc T., Newsletter writer</div>
</div>
</div>

<div className="max-w-4xl mx-auto border border-slate-200 rounded-3xl p-8 md:p-12 text-center bg-white shadow-sm">
<h3 className="text-lg font-medium text-slate-900 mb-8 tracking-tight">Every email is built on frameworks from the people who proved story-driven emails sell:</h3>
<div className="grid md:grid-cols-3 gap-8 text-left">
<div>
<div className="text-sm font-medium text-slate-900 mb-2">Ben Settle</div>
<p className="text-xs text-slate-500 leading-relaxed">Daily email methodology that built a 7-figure business from a single email list.</p>
</div>
<div>
<div className="text-sm font-medium text-slate-900 mb-2">André Chaperon</div>
<p className="text-xs text-slate-500 leading-relaxed">Story-based sequences that turn readers into loyal audiences through narrative.</p>
</div>
<div>
<div className="text-sm font-medium text-slate-900 mb-2">Eugene Schwartz</div>
<p className="text-xs text-slate-500 leading-relaxed">Desire channeling &amp; belief shifting that drives action.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto" id="pricing">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-medium text-slate-900 tracking-tight mb-4">Simple Pricing. Serious Storytelling.</h2>
<p className="text-base text-slate-500 max-w-2xl mx-auto">Every plan includes the full AI storytelling engine. Just pick the volume that fits your publishing pace.</p>
</div>
<div className="grid lg:grid-cols-3 gap-8 items-start">

<div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col h-full">
<div className="mb-8">
<h3 className="text-lg font-medium text-slate-900 tracking-tight mb-2">Starter</h3>
<p className="text-sm text-slate-500 mb-6 min-h-[40px]">Stop writer's block. Build momentum.</p>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl font-semibold text-slate-900 tracking-tight">$39</span>
<span className="text-sm text-slate-500">/month</span>
</div>
<a className="w-full inline-flex justify-center items-center py-3 px-4 rounded-xl text-sm font-medium border border-slate-200 text-slate-900 hover:bg-slate-50 transition-colors" href="#">
                        Start 7-Day Free Trial →
                    </a>
</div>
<ul className="space-y-5 flex-1 mt-4 border-t border-slate-100 pt-8">
<li className="flex items-start gap-3">
<iconify-icon className="text-slate-900 shrink-0 mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
<div>
<span className="text-sm font-medium text-slate-900 block">500 Credits / month</span>
<span className="text-xs text-slate-500 mt-1 block">Enough to publish daily for 1 brand + brainstorm ideas</span>
</div>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-slate-900 shrink-0 mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
<div>
<span className="text-sm font-medium text-slate-900 block">1 Project Workspace</span>
<span className="text-xs text-slate-500 mt-1 block">Manage voice/audience for a single brand</span>
</div>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-slate-900 shrink-0 mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
<div>
<span className="text-sm font-medium text-slate-900 block">AI Story Engine™</span>
<span className="text-xs text-slate-500 mt-1 block">Instantly generate subject lines, hooks, and outlines based on proven frameworks</span>
</div>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-slate-900 shrink-0 mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
<div>
<span className="text-sm font-medium text-slate-900 block">Smart Versioning System</span>
<span className="text-xs text-slate-500 mt-1 block">Generate 5-6 variations instantly and pick the winner</span>
</div>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-slate-900 shrink-0 mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
<div>
<span className="text-sm font-medium text-slate-900 block">Distraction-Free Editor</span>
<span className="text-xs text-slate-500 mt-1 block">Focus purely on the story, no complex widgets</span>
</div>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-slate-900 shrink-0 mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
<div>
<span className="text-sm font-medium text-slate-900 block">AI "Copy Chief" Assistant</span>
<span className="text-xs text-slate-500 mt-1 block">Chat with AI to brainstorm hooks, fix tone, check spam words</span>
</div>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-slate-900 shrink-0 mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
<div>
<span className="text-sm font-medium text-slate-900 block">Universal Compatibility</span>
<span className="text-xs text-slate-500 mt-1 block">Copy &amp; Paste into Beehiiv, Substack, Mailchimp, etc.</span>
</div>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-slate-900 shrink-0 mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
<div>
<span className="text-sm font-medium text-slate-900 block">Standard Support</span>
<span className="text-xs text-slate-500 mt-1 block">Reliable assistance via email &amp; chat</span>
</div>
</li>
</ul>
</div>

<div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 shadow-xl flex flex-col h-full relative transform lg:-translate-y-4 overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/20 blur-3xl rounded-full"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-emerald-600 text-white px-3 py-1 rounded-full text-xs font-medium tracking-wide flex items-center gap-1 shadow-lg shadow-emerald-500/30">
<iconify-icon icon="solar:star-fall-linear" width="14"></iconify-icon>
                    Most Popular
                </div>
<div className="mb-8 relative z-10">
<h3 className="text-lg font-medium text-white tracking-tight mb-2">Growth</h3>
<p className="text-sm text-slate-400 mb-6 min-h-[40px]">Write daily. Optimize engagement. Scale revenue.</p>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl font-semibold text-white tracking-tight">$89</span>
<span className="text-sm text-slate-400">/month</span>
</div>
<a className="w-full inline-flex justify-center items-center py-3 px-4 rounded-xl text-sm font-medium bg-emerald-600 text-white hover:bg-emerald-500 transition-colors shadow-sm" href="#">
                        Start 7-Day Free Trial →
                    </a>
</div>
<ul className="space-y-5 flex-1 mt-4 border-t border-slate-800 pt-8 relative z-10">
<li className="flex items-start gap-3">
<iconify-icon className="text-emerald-400 shrink-0 mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
<div>
<span className="text-sm font-medium text-white block">1,500 Credits / month</span>
<span className="text-xs text-slate-400 mt-1 block">Perfect for daily publishing + A/B testing multiple angles</span>
</div>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-emerald-400 shrink-0 mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
<div>
<span className="text-sm font-medium text-white block">3 Project Workspaces</span>
<span className="text-xs text-slate-400 mt-1 block">Manage newsletters for 3 products or brands</span>
</div>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-emerald-400 shrink-0 mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
<div>
<span className="text-sm font-medium text-white block">AI Story Engine™</span>
<span className="text-xs text-slate-400 mt-1 block">Fuel a daily habit. Never run out of fresh, unique angles</span>
</div>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-emerald-400 shrink-0 mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
<div>
<span className="text-sm font-medium text-white block">Smart Versioning System</span>
<span className="text-xs text-slate-400 mt-1 block">Generate 10+ variations per idea to A/B test and maximize CTR</span>
</div>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-emerald-400 shrink-0 mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
<div>
<span className="text-sm font-medium text-white block">AI "Copy Chief" Assistant</span>
<span className="text-xs text-slate-400 mt-1 block">Instant critiques on tone. Audit drafts for punchiness and deliverability</span>
</div>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-emerald-400 shrink-0 mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
<div>
<span className="text-sm font-medium text-white block">Universal Compatibility</span>
<span className="text-xs text-slate-400 mt-1 block">Works seamlessly with all major ESPs via copy-paste</span>
</div>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-emerald-400 shrink-0 mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
<div>
<span className="text-sm font-medium text-white block">Priority Support</span>
<span className="text-xs text-slate-400 mt-1 block">Skip the queue. Faster resolution for daily workflows</span>
</div>
</li>
</ul>
</div>

<div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col h-full">
<div className="mb-8">
<h3 className="text-lg font-medium text-slate-900 tracking-tight mb-2">Professional</h3>
<p className="text-sm text-slate-500 mb-6 min-h-[40px]">Scale your content empire. Dominate your niche.</p>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl font-semibold text-slate-900 tracking-tight">$179</span>
<span className="text-sm text-slate-500">/month</span>
</div>
<a className="w-full inline-flex justify-center items-center py-3 px-4 rounded-xl text-sm font-medium border border-slate-200 text-slate-900 hover:bg-slate-50 transition-colors" href="#">
                        Start 7-Day Free Trial →
                    </a>
</div>
<ul className="space-y-5 flex-1 mt-4 border-t border-slate-100 pt-8">
<li className="flex items-start gap-3">
<iconify-icon className="text-slate-900 shrink-0 mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
<div>
<span className="text-sm font-medium text-slate-900 block">5,000 Credits / month</span>
<span className="text-xs text-slate-500 mt-1 block">Perfect for Teams managing multiple daily newsletters</span>
</div>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-slate-900 shrink-0 mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
<div>
<span className="text-sm font-medium text-slate-900 block">5 Project Workspaces</span>
<span className="text-xs text-slate-500 mt-1 block">Manage a portfolio of brands or client newsletters</span>
</div>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-slate-900 shrink-0 mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
<div>
<span className="text-sm font-medium text-slate-900 block">AI Story Engine™</span>
<span className="text-xs text-slate-500 mt-1 block">High-volume generation logic for heavy campaigns</span>
</div>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-slate-900 shrink-0 mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
<div>
<span className="text-sm font-medium text-slate-900 block">Smart Versioning System</span>
<span className="text-xs text-slate-500 mt-1 block">Rapidly iterate ideas at scale across segments</span>
</div>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-slate-900 shrink-0 mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
<div>
<span className="text-sm font-medium text-slate-900 block">Distraction-Free Editor</span>
<span className="text-xs text-slate-500 mt-1 block">Streamlined for high-volume production</span>
</div>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-slate-900 shrink-0 mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
<div>
<span className="text-sm font-medium text-slate-900 block">AI "Copy Chief" Assistant</span>
<span className="text-xs text-slate-500 mt-1 block">Advanced brainstorming partner for complex campaigns</span>
</div>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-slate-900 shrink-0 mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
<div>
<span className="text-sm font-medium text-slate-900 block">Universal Compatibility</span>
<span className="text-xs text-slate-500 mt-1 block">Platform-agnostic. Easily switch between tech stacks</span>
</div>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-slate-900 shrink-0 mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
<div>
<span className="text-sm font-medium text-slate-900 block">Dedicated Support &amp; Early Access</span>
<span className="text-xs text-slate-500 mt-1 block">Direct access to senior team + test newest AI models early</span>
</div>
</li>
</ul>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white border-t border-slate-200">
<div className="max-w-3xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-medium text-slate-900 tracking-tight mb-4">Questions You're Probably Asking</h2>
</div>
<div className="space-y-4">

<details className="group bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden [&amp;::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between cursor-pointer p-6 font-medium text-slate-900 list-none">
                        Q1: What exactly does an AI newsletter generator do?
                        <span className="transition group-open:rotate-180 text-emerald-600">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-slate-600 space-y-3 border-t border-slate-100 pt-4">
<p>An AI newsletter generator takes your rough ideas and turns them into ready-to-send emails — complete with subject lines, story hooks, and a full narrative structure.</p>
<p>But not all AI newsletter generators are the same. Most just fill templates with generic content. Ours is built specifically for story-driven emails — the kind that get replies, build trust, and turn subscribers into buyers. You drop in one insight about your business, and the AI generates multiple story angles you can choose from. Pick one, tweak it if you want, and send. The whole process takes 5–10 minutes.</p>
<p>Think of it as having an AI newsletter writer trained on proven copywriting and storytelling frameworks — not just "write me a newsletter" prompts.</p>
</div>
</details>

<details className="group bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden [&amp;::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between cursor-pointer p-6 font-medium text-slate-900 list-none">
                        Q2: How is this different from using ChatGPT or Claude to write newsletters?
                        <span className="transition group-open:rotate-180 text-emerald-600">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-slate-600 space-y-3 border-t border-slate-100 pt-4">
<p>ChatGPT and Claude are general-purpose AI. You start with a blank prompt, spend 20 minutes trying to explain what you want, and still end up with something that sounds like every other AI-generated email on the internet.</p>
<p>We're an AI newsletter generator built specifically for one thing: story-driven emails that convert. Every email uses proven storytelling frameworks — story structure, belief shifts, psychological hooks — that general-purpose AI doesn't know how to apply.</p>
<p>The difference in practice: you'll get better newsletter content in 5 minutes with us than you'd get from ChatGPT in 2 hours. And you won't have to become a prompt engineer to get there.</p>
</div>
</details>

<details className="group bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden [&amp;::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between cursor-pointer p-6 font-medium text-slate-900 list-none">
                        Q3: How is this different from Beehiiv, Substack, or Mailchimp's built-in AI?
                        <span className="transition group-open:rotate-180 text-emerald-600">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-slate-600 space-y-3 border-t border-slate-100 pt-4">
<p>Beehiiv, Substack, and Mailchimp are email platforms — built for designing, distributing, and managing subscribers. Their AI features are bolted on as extras. They help you fill a template. They don't help you tell a story that sells.</p>
<p>We're the opposite. We don't manage your subscribers or design your layout. We write the actual newsletter content — the stories, hooks, belief shifts, and subject lines that make people read, reply, and buy.</p>
<p>Use them to SEND. Use us to WRITE. They're complementary, not competing. That's why we built Universal Export — you copy-paste directly into Beehiiv, Substack, Mailchimp, Kit, Klaviyo, or any platform you already use.</p>
</div>
</details>

<details className="group bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden [&amp;::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between cursor-pointer p-6 font-medium text-slate-900 list-none">
                        Q4: Can AI really write newsletters that sound human, not robotic?
                        <span className="transition group-open:rotate-180 text-emerald-600">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-slate-600 space-y-3 border-t border-slate-100 pt-4">
<p>Yes — if it's trained on the right material.</p>
<p>Most AI newsletter tools are trained on corporate email blasts and generic marketing content. So naturally, their output sounds like corporate email blasts and generic marketing content.</p>
<p>Our AI is trained on proven direct response copywriting and storytelling frameworks — the same principles used by professional copywriters who've generated millions in email revenue. The output is conversational, specific, and sharp. Not "Dear valued subscriber" corporate speak.</p>
<p>Will it sound exactly like you? No AI can perfectly replicate your unique voice. But every draft reads like a real person wrote it — which means your editing work is polishing, not rewriting from scratch.</p>
</div>
</details>

<details className="group bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden [&amp;::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between cursor-pointer p-6 font-medium text-slate-900 list-none">
                        Q5: Do daily emails annoy subscribers? How often should I send my newsletter?
                        <span className="transition group-open:rotate-180 text-emerald-600">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-slate-600 space-y-3 border-t border-slate-100 pt-4">
<p>Daily promotional emails? Yes, those annoy people. But daily stories that teach, entertain, and build trust? Those become a habit your subscribers look forward to.</p>
<p>Here's the math: a weekly newsletter gives you 52 touchpoints per year. A daily story gives you 365. Which relationship builds more trust?</p>
<p>The best email marketers in the world — Seth Godin, Ben Settle, Morning Brew — all send daily. Not because they're annoying, but because consistency builds trust faster than anything else.</p>
<p>Our AI newsletter generator gives you fresh story angles every single day, so you never run out of ideas or burn out trying to come up with something new. You don't have to send daily — but if you want to build trust faster and sell more, daily storytelling wins.</p>
</div>
</details>
</div>
</div>
</section>

<section className="py-32 px-6 bg-slate-900 relative overflow-hidden flex flex-col items-center text-center">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl aspect-square bg-emerald-600/15 rounded-full blur-3xl pointer-events-none"></div>
<div className="max-w-2xl relative z-10">
<h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-6">Create a Newsletter That Brings In Real Customers</h2>
<p className="text-lg text-slate-400 mb-10 leading-relaxed">
                Start with one insight. Get subject lines, hooks, and a ready-to-send story email in 5–10 minutes—so you can show up daily, build trust, and sell without sounding salesy.
            </p>
<a className="inline-flex items-center justify-center gap-2 bg-emerald-600 text-white px-8 py-4 rounded-xl text-base font-medium hover:bg-emerald-500 transition-colors shadow-lg shadow-emerald-500/20 mb-4" href="#pricing">
                Start Your 7-Day Free Trial
                <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</a>
<p className="text-xs text-slate-500 font-medium">Cancel anytime.</p>
</div>
</section>

<footer className="py-12 px-6 bg-slate-950 text-slate-500 border-t border-slate-800 text-sm text-center">
<div className="font-medium text-base text-white tracking-tighter flex items-center justify-center gap-2 mb-4 uppercase">
<iconify-icon className="text-emerald-600" icon="solar:programming-linear" width="16"></iconify-icon>
            STORYLINE
        </div>
<p>© 2024 Storyline AI. All rights reserved.</p>
</footer>

    </>
  );
}
