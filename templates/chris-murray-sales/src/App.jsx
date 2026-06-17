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
      

<div className="fixed top-0 w-full h-screen bg-cover bg-center -z-10" style={{backgroundImage: 'url(\'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/14f40dea-bfc2-4fea-9f86-798fbef967be_3840w.webp\')', maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}></div>

<div className="fixed inset-0 -z-20 opacity-[0.45]" style={{backgroundImage: 'linear-gradient(to right, rgba(255, 255, 255, 0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.06) 1px, transparent 1px)', backgroundSize: '56px 56px', maskImage: 'radial-gradient(1200px 600px at 18% 24%, #000 60%, transparent 100%)', WebkitMaskImage: 'radial-gradient(1200px 600px at 18% 24%, #000 60%, transparent 100%)'}}></div>

<div className="pointer-events-none fixed inset-0 -z-10">
<div className="absolute -top-24 -left-24 h-[520px] w-[520px] rounded-full blur-3xl opacity-40" style={{background: 'radial-gradient(60% 60% at 50% 50%, rgba(59,130,246,.4), rgba(59,130,246,0) 65%)'}}></div>
<div className="absolute bottom-0 right-0 h-[420px] w-[520px] rounded-full blur-3xl opacity-35" style={{background: 'radial-gradient(60% 60% at 50% 50%, rgba(16,185,129,.35), rgba(16,185,129,0) 65%)'}}></div>
</div>
<header className="md:px-10 md:pt-16 max-w-7xl mr-auto ml-auto pt-10 pr-6 pl-6">

<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="text-lg font-medium tracking-tight text-white">1st Sales Training</span>
</div>
<div className="hidden sm:flex items-center gap-6 text-sm">
<a className="border-gradient before:rounded-2xl inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-sm transition-colors [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0)] hover:bg-white/10" href="#book">
<iconify-icon className="text-base" icon="solar:calendar-linear"></iconify-icon>
<span className="tracking-tight">Book Call</span>
</a>
</div>
</div>
<section className="flex flex-col items-center text-center md:mt-24 mt-12">

<div className="flex flex-col w-full max-w-4xl items-center">
<div className="border-gradient before:rounded-2xl inline-flex items-center gap-2 rounded-2xl px-2.5 py-1.5 bg-white/[0.03] [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0)]">
<div className="h-6 w-6 grid place-items-center rounded-xl bg-sky-500/20 text-sky-400">
<iconify-icon className="text-sm" icon="solar:user-linear"></iconify-icon>
</div>
<span className="text-xs text-zinc-200">Led Personally by Chris</span>
</div>
<h1 className="leading-[1.05] sm:text-6xl md:text-7xl text-5xl font-medium text-white tracking-tight mt-8 max-w-4xl">
                    Work Directly with Chris Murray to Improve
                    <span className="text-transparent bg-clip-text block mt-1 pb-2" style={{backgroundImage: 'linear-gradient(180deg, #fff, rgba(255,255,255,0.5))'}}>Sales Performance</span>
</h1>
<p className="sm:text-lg leading-relaxed text-base text-zinc-300 max-w-2xl mt-6 mr-auto ml-auto">Practical sales training focused on real conversations, better questioning, and stronger positioning delivered personally by Chris.</p>

<div className="mt-8 flex flex-wrap justify-center gap-3">
<div className="border-gradient before:rounded-2xl bg-white/[0.02] inline-flex hover:bg-white/[0.08] transition-colors rounded-2xl pt-2 pr-4 pb-2 pl-4 gap-2 items-center [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0)]">
<iconify-icon className="text-base text-zinc-100" icon="solar:chat-round-check-linear"></iconify-icon>
<span className="text-sm text-zinc-200">Clear questioning</span>
</div>
<div className="border-gradient before:rounded-2xl bg-white/[0.02] inline-flex hover:bg-white/[0.08] transition-colors rounded-2xl pt-2 pr-4 pb-2 pl-4 gap-2 items-center [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0)]">
<iconify-icon className="text-base text-zinc-100" icon="solar:shield-user-linear"></iconify-icon>
<span className="text-sm text-zinc-200">Strong positioning</span>
</div>
<div className="border-gradient before:rounded-2xl bg-white/[0.02] inline-flex hover:bg-white/[0.08] transition-colors rounded-2xl pt-2 pr-4 pb-2 pl-4 gap-2 items-center [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0)]">
<iconify-icon className="text-base text-zinc-100" icon="solar:users-group-two-rounded-linear"></iconify-icon>
<span className="text-sm text-zinc-200">Controlled conversations</span>
</div>
</div>

<div className="mt-14 w-full max-w-3xl flex flex-col items-center">
<div className="border-gradient before:rounded-3xl w-full rounded-3xl overflow-hidden aspect-video bg-[#0a0a0b]/60 relative flex items-center justify-center [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0.05)] shadow-2xl group cursor-pointer">
<div className="absolute inset-0 bg-gradient-to-tr from-sky-500/10 to-transparent"></div>
<div className="h-16 w-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center transition-transform group-hover:scale-110 border border-white/20">
<iconify-icon className="text-3xl text-white ml-1" icon="solar:play-linear"></iconify-icon>
</div>
</div>
</div>

<div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
<a className="border-gradient before:rounded-2xl group inline-flex items-center justify-center gap-2 rounded-2xl bg-zinc-100 text-zinc-900 hover:bg-white px-6 py-3.5 text-sm font-medium tracking-tight transition-all hover:-translate-y-0.5 shadow-lg shadow-white/10" href="#book">
<iconify-icon className="text-base" icon="solar:calendar-linear"></iconify-icon>
<span>Book a Call with Chris</span>
</a>
</div>

<div className="mt-16 h-px w-full max-w-2xl mx-auto bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

<div className="mt-12 grid grid-cols-3 gap-6 max-w-lg w-full mx-auto">
<div className="border-gradient before:rounded-3xl overflow-hidden bg-white/[0.02] aspect-[16/12] [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0.05)] rounded-3xl p-4 relative flex flex-col items-center justify-center text-center">
<div className="text-xs uppercase tracking-wider text-zinc-400 font-medium">Delivery</div>
<div className="mt-2 text-lg font-medium tracking-tight text-white leading-tight">100%<br/>Personal</div>
</div>
<div className="border-gradient before:rounded-3xl overflow-hidden bg-white/[0.02] aspect-[16/12] [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0.05)] rounded-3xl p-4 relative flex flex-col items-center justify-center text-center">
<div className="text-xs uppercase tracking-wider text-zinc-400 font-medium">Focus</div>
<div className="mt-2 text-lg font-medium tracking-tight text-white leading-tight">Practical<br/>Skills</div>
</div>
<div className="border-gradient before:rounded-3xl overflow-hidden bg-white/[0.02] aspect-[16/12] [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0.05)] rounded-3xl p-4 relative flex flex-col items-center justify-center text-center">
<div className="text-xs uppercase tracking-wider text-zinc-400 font-medium">Format</div>
<div className="mt-2 text-lg font-medium tracking-tight text-white leading-tight">Applied<br/>Workshops</div>
</div>
</div>
</div>
</section>
</header>

<section className="md:px-10 md:pt-32 max-w-6xl mr-auto ml-auto pt-20 pr-6 pl-6" id="problems">
<div className="flex flex-col items-center text-center mb-12">
<div className="border-gradient before:rounded-full inline-flex items-center gap-2 rounded-full px-3 py-1.5 bg-white/[0.03] [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0)] mb-6">
<iconify-icon className="text-red-400" icon="solar:danger-triangle-linear"></iconify-icon>
<span className="text-sm text-red-200">The Execution Gap</span>
</div>
<h2 className="md:text-4xl text-3xl font-medium text-white tracking-tight">Common Problems We Fix</h2>
<p className="md:text-lg text-base text-zinc-300 mt-5 max-w-2xl">Sales teams often struggle with the same critical execution gaps. Chris targets these specific areas to drive immediate improvement in live conversations.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="border-gradient before:rounded-3xl rounded-3xl p-6 md:p-8 bg-white/[0.02] [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0.05)] flex gap-5">
<div className="flex-shrink-0 mt-1 h-12 w-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-300">
<iconify-icon className="text-2xl" icon="solar:magnifer-linear"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-medium tracking-tight text-white mb-2">Weak Discovery</h3>
<p className="text-sm text-zinc-300 leading-relaxed">Asking superficial checklist questions instead of uncovering real business impact, pain points, and urgency.</p>
</div>
</div>

<div className="border-gradient before:rounded-3xl rounded-3xl p-6 md:p-8 bg-white/[0.02] [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0.05)] flex gap-5">
<div className="flex-shrink-0 mt-1 h-12 w-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-300">
<iconify-icon className="text-2xl" icon="solar:sort-vertical-linear"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-medium tracking-tight text-white mb-2">Value Drop-Off</h3>
<p className="text-sm text-zinc-300 leading-relaxed">Failing to connect the proposed solution back to the prospect's core problems, making it feel like a nice-to-have commodity.</p>
</div>
</div>

<div className="border-gradient before:rounded-3xl rounded-3xl p-6 md:p-8 bg-white/[0.02] [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0.05)] flex gap-5">
<div className="flex-shrink-0 mt-1 h-12 w-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-300">
<iconify-icon className="text-2xl" icon="solar:shield-cross-linear"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-medium tracking-tight text-white mb-2">Caving on Objections</h3>
<p className="text-sm text-zinc-300 leading-relaxed">Discounting too early or crumbling under pushback instead of holding firm and reframing the conversation around outcomes.</p>
</div>
</div>

<div className="border-gradient before:rounded-3xl rounded-3xl p-6 md:p-8 bg-white/[0.02] [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0.05)] flex gap-5">
<div className="flex-shrink-0 mt-1 h-12 w-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-300">
<iconify-icon className="text-2xl" icon="solar:ghost-linear"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-medium tracking-tight text-white mb-2">Losing Deal Control</h3>
<p className="text-sm text-zinc-300 leading-relaxed">Allowing prospects to dictate the timeline and next steps, resulting in stalled deals, endless follow-ups, and eventual ghosting.</p>
</div>
</div>
</div>
</section>

<section className="md:px-10 md:pt-32 max-w-6xl mr-auto ml-auto pt-24 pr-6 pl-6" id="approach">

<div className="flex justify-center">
<div className="border-gradient before:rounded-full inline-flex items-center gap-2 rounded-full px-3 py-1.5 bg-white/[0.03] [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0)]">
<iconify-icon className="text-sky-400" icon="solar:target-linear"></iconify-icon>
<span className="text-sm text-sky-200">The Solution</span>
</div>
</div>

<h2 className="md:text-5xl text-4xl font-medium text-white tracking-tight text-center mt-6">
            Most sales challenges are not about effort.
            <span className="block text-zinc-300 mt-2">They’re about execution.</span>
</h2>
<p className="md:text-lg text-base text-zinc-300 text-center max-w-2xl mt-6 mr-auto ml-auto">Conversations lose structure. Value isn’t positioned clearly. Confidence drops under pressure. Chris focuses on improving how you sell, not just what you say.</p>
<div className="flex justify-center mt-8">
<a className="border-gradient before:rounded-2xl group inline-flex hover:bg-white/10 transition-all hover:-translate-y-0.5 text-sm font-medium text-white tracking-tight rounded-2xl pt-3 pr-5 pb-3 pl-5 bg-white/[0.05] [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0)] gap-2 items-center justify-center" href="#book">
<iconify-icon className="text-base" icon="solar:phone-calling-linear"></iconify-icon>
<span>Speak with Chris</span>
</a>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 md:gap-8 mt-14 gap-6">

<section className="border-gradient before:rounded-3xl group overflow-hidden rounded-3xl p-6 md:p-8 relative bg-white/[0.02] [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0.05)]">
<div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 via-transparent to-transparent pointer-events-none"></div>
<div className="-right-24 -top-24 bg-sky-500/15 w-72 h-72 rounded-full absolute blur-3xl"></div>

<div className="border-gradient before:rounded-2xl rounded-2xl p-5 bg-[#0a0a0b]/80 backdrop-blur-sm [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0)]">
<div className="flex items-center gap-2 text-zinc-200 text-sm mb-4">
<iconify-icon className="h-5 w-5 text-sky-400" icon="solar:chart-linear"></iconify-icon>
<span className="font-medium">Skill Execution Metrics</span>
</div>
<div className="space-y-3">
<div className="border-gradient before:rounded-xl rounded-xl p-4 bg-white/[0.03] [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0)]">
<div className="flex items-center gap-3">
<div className="h-6 w-6 rounded-full ring-1 ring-white/20 bg-sky-500/20 flex items-center justify-center">
<iconify-icon className="text-xs text-sky-300" icon="solar:chat-round-check-linear"></iconify-icon>
</div>
<div className="flex-1">
<div className="flex items-center justify-between">
<p className="text-sm font-medium text-zinc-100">Questioning Clarity</p>
</div>
<div className="mt-2 h-2 w-full rounded-full bg-white/10 overflow-hidden">
<div className="h-full rounded-full bg-gradient-to-r from-sky-400 to-blue-500" style={{width: '75%'}}></div>
</div>
</div>
</div>
<p className="mt-2 text-xs text-zinc-400">Structuring the discovery phase</p>
</div>
<div className="border-gradient before:rounded-xl rounded-xl p-4 bg-white/[0.03] [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0)]">
<div className="flex items-center gap-3">
<div className="h-6 w-6 rounded-full ring-1 ring-white/20 bg-emerald-500/20 flex items-center justify-center">
<iconify-icon className="text-xs text-emerald-300" icon="solar:shield-check-linear"></iconify-icon>
</div>
<div className="flex-1">
<div className="flex items-center justify-between">
<p className="text-sm font-medium text-zinc-100">Value Positioning</p>
</div>
<div className="mt-2 h-2 w-full rounded-full bg-white/10 overflow-hidden">
<div className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-teal-500" style={{width: '60%'}}></div>
</div>
</div>
</div>
<p className="mt-2 text-xs text-zinc-400">Communicating impact clearly</p>
</div>
</div>
<div className="mt-5 flex items-center justify-between">
<button className="border-gradient before:rounded-full inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium text-sky-200 hover:bg-sky-500/20 transition bg-white/[0.03] [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0)]">
<iconify-icon className="text-sm" icon="solar:radar-linear"></iconify-icon>
                            Direct Feedback
                        </button>
<div className="flex items-center gap-2 text-xs text-zinc-400">
<iconify-icon className="text-sm text-emerald-400" icon="solar:pulse-linear"></iconify-icon>
                            Active Coaching
                        </div>
</div>
</div>
<h3 className="mt-6 text-2xl font-medium tracking-tight text-white">Practical Sales Skills &amp; Coaching</h3>
<p className="mt-2 text-sm text-zinc-300 leading-relaxed">
                    Clear questioning. Strong positioning. Controlled conversations. Receive direct feedback on behaviour and technique.
                </p>
</section>

<section className="border-gradient before:rounded-3xl group relative overflow-hidden rounded-3xl p-6 md:p-8 bg-white/[0.02] [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0.05)]">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-transparent pointer-events-none"></div>
<div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-indigo-500/15 blur-3xl"></div>
<div className="border-gradient before:rounded-2xl rounded-2xl p-5 bg-[#0a0a0b]/80 backdrop-blur-sm [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0)]">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2 text-zinc-200 text-sm">
<iconify-icon className="h-5 w-5 text-indigo-400" icon="solar:users-group-two-rounded-linear"></iconify-icon>
<span className="font-medium">Applied Workshops</span>
</div>
<div className="flex items-center gap-2">
<span className="text-xs text-zinc-400 font-medium">Live</span>
<iconify-icon className="text-sm text-zinc-500" icon="solar:restart-linear"></iconify-icon>
</div>
</div>
<div className="overflow-hidden h-40 border-gradient before:rounded-xl rounded-xl mt-4 bg-white/[0.02]">
<ul className="relative" id="client-list">
<li className="flex pt-3 pr-4 pb-3 pl-4 items-center justify-between border-b border-white/5">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full ring-1 ring-white/20 bg-white/5 flex items-center justify-center">
<iconify-icon className="text-sm text-amber-400" icon="solar:phone-calling-linear"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-zinc-100">Discovery Calls</p>
<p className="text-xs text-zinc-400 mt-0.5">Real Scenarios</p>
</div>
</div>
<iconify-icon className="text-base text-amber-400" icon="solar:star-linear"></iconify-icon>
</li>
<li className="flex items-center justify-between px-4 py-3 border-b border-white/5">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full ring-1 ring-white/20 bg-white/5 flex items-center justify-center">
<iconify-icon className="text-sm text-emerald-400" icon="solar:shield-warning-linear"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-zinc-100">Objection Handling</p>
<p className="text-xs text-zinc-400 mt-0.5">Roleplay &amp; Practice</p>
</div>
</div>
<iconify-icon className="text-base text-emerald-400" icon="solar:shield-check-linear"></iconify-icon>
</li>
<li className="flex items-center justify-between px-4 py-3">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full ring-1 ring-white/20 bg-white/5 flex items-center justify-center">
<iconify-icon className="text-sm text-sky-400" icon="solar:hand-money-linear"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-zinc-100">Closing &amp; Negotiation</p>
<p className="text-xs text-zinc-400 mt-0.5">Live Execution</p>
</div>
</div>
<iconify-icon className="text-base text-sky-400" icon="solar:verified-check-linear"></iconify-icon>
</li>
</ul>
</div>
<div className="mt-5 flex items-center gap-2 text-xs text-zinc-400">
<iconify-icon className="text-sm" icon="solar:settings-linear"></iconify-icon>
                        Built around real selling situations
                    </div>
</div>
<h3 className="mt-6 text-2xl font-medium tracking-tight text-white">Team Workshops &amp; Development</h3>
<p className="mt-2 text-sm text-zinc-300 leading-relaxed">
                    Applied sessions built around real selling situations. Strengthen day-to-day execution, not theory.
                </p>
</section>

<section className="border-gradient before:rounded-3xl group relative overflow-hidden rounded-3xl p-6 md:p-8 bg-white/[0.02] [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0.05)]">
<div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-transparent pointer-events-none"></div>
<div className="absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-emerald-500/15 blur-3xl"></div>
<div className="border-gradient before:rounded-2xl rounded-2xl p-5 bg-[#0a0a0b]/80 backdrop-blur-sm [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0)]">
<div className="flex items-center gap-2 text-zinc-200 text-sm">
<iconify-icon className="h-5 w-5 text-emerald-400" icon="solar:medal-star-linear"></iconify-icon>
<span className="font-medium">The Difference</span>
</div>
<div className="mt-4 grid grid-cols-4 gap-3">
<div className="border-gradient before:rounded-xl flex flex-col items-center gap-2 rounded-xl p-3 bg-white/[0.03] [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0)]">
<iconify-icon className="text-xl text-zinc-300" icon="solar:user-hand-up-linear"></iconify-icon>
<span className="text-xs text-zinc-300 text-center font-medium">Personal</span>
</div>
<div className="border-gradient before:rounded-xl flex flex-col items-center gap-2 rounded-xl p-3 bg-white/[0.03] [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0)]">
<iconify-icon className="text-xl text-zinc-300" icon="solar:hammer-linear"></iconify-icon>
<span className="text-xs text-zinc-300 text-center font-medium">Practical</span>
</div>
<div className="border-gradient before:rounded-xl flex flex-col items-center gap-2 rounded-xl p-3 bg-white/[0.03] [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0)]">
<iconify-icon className="text-xl text-zinc-300" icon="solar:eye-scan-linear"></iconify-icon>
<span className="text-xs text-zinc-300 text-center font-medium">Behaviour</span>
</div>
<div className="border-gradient before:rounded-xl flex flex-col items-center gap-2 rounded-xl p-3 bg-white/[0.03] [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0)]">
<iconify-icon className="text-xl text-zinc-300" icon="solar:magnifer-zoom-in-linear"></iconify-icon>
<span className="text-xs text-zinc-300 text-center font-medium">Focus</span>
</div>
</div>
<div className="mt-5 flex items-center justify-between">
<div className="flex items-center text-xs text-zinc-300 font-medium">
                            You work with Chris — not a hierarchy.
                        </div>
<div className="inline-flex items-center gap-2 text-xs text-zinc-400">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
                            No hand-offs
                        </div>
</div>
</div>
<h3 className="mt-6 text-2xl font-medium tracking-tight text-white">Why Chris</h3>
<p className="text-sm text-zinc-300 mt-2 leading-relaxed">Led personally by Chris. No outsourced trainers. Practical over theoretical, every technique must work in live sales conversations. Performance improves by refining how conversations are handled.</p>
</section>

<section className="border-gradient before:rounded-3xl group relative overflow-hidden rounded-3xl p-6 md:p-8 bg-white/[0.02] [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0.05)]">
<div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-transparent pointer-events-none"></div>
<div className="absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-amber-500/15 blur-3xl"></div>
<div className="border-gradient before:rounded-2xl rounded-2xl p-5 relative overflow-hidden bg-[#0a0a0b]/80 backdrop-blur-sm [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0)]">
<div className="flex items-center justify-between text-zinc-200 text-sm">
<div className="flex items-center gap-2">
<iconify-icon className="h-5 w-5 text-amber-400" icon="solar:route-linear"></iconify-icon>
<span className="font-medium">The Framework</span>
</div>
</div>
<div className="mt-5 grid grid-cols-3 gap-4">
<div className="border-gradient before:rounded-xl relative rounded-xl p-4 bg-white/[0.03] [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0)]">
<div className="flex items-center gap-2 text-sm font-medium text-zinc-100 mb-2">
<iconify-icon className="text-base text-amber-400" icon="solar:stethoscope-linear"></iconify-icon>
                                1. Diagnose
                            </div>
<p className="text-xs text-zinc-400 leading-relaxed">Identify where conversations break down.</p>
</div>
<div className="border-gradient before:rounded-xl relative rounded-xl p-4 bg-white/[0.03] [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0)]">
<div className="flex items-center gap-2 text-sm font-medium text-zinc-100 mb-2">
<iconify-icon className="text-base text-sky-400" icon="solar:hammer-linear"></iconify-icon>
                                2. Develop
                            </div>
<p className="text-xs text-zinc-400 leading-relaxed">Structured training on practical, usable skills.</p>
</div>
<div className="border-gradient before:rounded-xl relative rounded-xl p-4 bg-white/[0.03] [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0)]">
<div className="flex items-center gap-2 text-sm font-medium text-zinc-100 mb-2">
<iconify-icon className="text-base text-emerald-400" icon="solar:verified-check-linear"></iconify-icon>
                                3. Execute
                            </div>
<p className="text-xs text-zinc-400 leading-relaxed">Live practice, roleplay, and direct feedback.</p>
</div>
</div>
</div>
<h3 className="mt-6 text-2xl font-medium tracking-tight text-white">Structured Process</h3>
<p className="mt-2 text-sm text-zinc-300 leading-relaxed">
                    A clear framework for identifying gaps, developing skills, and executing under pressure.
                </p>
</section>
</div>
</section>

<section className="max-w-4xl mx-auto md:px-10 md:py-32 py-20 px-6 text-center mt-12" id="book">
<div className="border-gradient before:rounded-3xl relative overflow-hidden rounded-3xl p-10 md:p-16 bg-white/[0.02] [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0.05)] flex flex-col items-center">

<div className="absolute inset-0 bg-gradient-to-b from-sky-500/10 to-transparent pointer-events-none"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-md h-64 bg-sky-500/20 rounded-full blur-3xl pointer-events-none"></div>
<div className="border-gradient before:rounded-2xl inline-flex items-center gap-2 rounded-2xl px-4 py-2 bg-white/[0.03] [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0)] mb-8 z-10">
<iconify-icon className="text-sky-400 text-sm" icon="solar:calendar-linear"></iconify-icon>
<span className="text-sm font-medium text-sky-200">Next Steps</span>
</div>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-5 z-10">Ready to improve?</h2>
<p className="text-lg text-zinc-300 max-w-lg mb-10 z-10">Book a quick discovery call to discuss your team's current sales challenges and see if Chris's training approach is the right fit.</p>
<a className="z-10 border-gradient before:rounded-2xl group inline-flex items-center justify-center gap-2 rounded-2xl bg-zinc-100 text-zinc-900 hover:bg-white px-8 py-4 text-base font-medium tracking-tight transition-all hover:-translate-y-0.5 shadow-[0_0_20px_rgba(255,255,255,0.1)]" href="https://calendly.com/" rel="noopener noreferrer" target="_blank">
<iconify-icon className="text-xl" icon="solar:calendar-add-linear"></iconify-icon>
<span>Book via Calendly</span>
</a>
</div>
</section>

<footer className="border-t border-white/10 py-10 mt-12">
<div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-400">
<span>© 2024 1st Sales Training. All rights reserved.</span>
<span>Led personally by Chris Murray</span>
</div>
</footer>

    </>
  );
}
