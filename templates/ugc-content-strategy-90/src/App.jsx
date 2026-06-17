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
      

<header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="text-gray-900 font-medium tracking-tighter text-lg uppercase flex items-center gap-2">
<iconify-icon icon="solar:record-circle-linear" strokeWidth="1.5"></iconify-icon>
                N E E R
            </div>
<button className="text-xs font-medium border border-gray-200 text-gray-600 rounded-full px-4 py-1.5 hover:bg-gray-50 transition-colors flex items-center gap-2">
<iconify-icon icon="solar:download-linear" strokeWidth="1.5"></iconify-icon>
                Export Brief
            </button>
</div>
</header>
<main className="md:py-32 max-w-6xl mr-auto ml-auto pt-20 pr-6 pb-20 pl-6 space-y-32">

<section className="space-y-12">
<div className="space-y-4 max-w-3xl">
<h1 className="text-3xl md:text-5xl font-medium tracking-tight text-gray-900">NEER UGC Content Strategy</h1>
<h2 className="text-xl md:text-2xl font-normal text-gray-500 tracking-tight">March–April Event Content Engine</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="col-span-1 md:col-span-2 border border-gray-200 rounded-2xl p-8 bg-white flex flex-col justify-center">
<p className="text-base text-gray-600 mb-6 leading-relaxed">
                        NEER’s marketing advantage will come from <span className="text-gray-900 font-medium">real community footage</span>, not staged content. UGC creators will capture <span className="text-gray-900 font-medium">natural social interactions</span>, demonstrating the real outcomes of attending NEER events.
                    </p>
<p className="text-base text-gray-600 leading-relaxed">
                        Across March and April, this content will build a <span className="text-gray-900 font-medium">bank of authentic community footage</span>, which can later be compiled into multiple hero advertisements for the app launch.
                    </p>
</div>
<div className="col-span-1 space-y-6">
<div className="border border-gray-200 rounded-2xl p-6 bg-white flex flex-col gap-2">
<span className="text-xs text-gray-400 uppercase tracking-widest font-medium">Budget</span>
<div className="text-2xl font-medium text-gray-900 tracking-tight">£1,600</div>
</div>
<div className="border border-gray-200 rounded-2xl p-6 bg-white flex flex-col gap-3">
<span className="text-xs text-gray-400 uppercase tracking-widest font-medium">Goal</span>
<p className="text-sm text-gray-600">Build an authentic content library that compounds into multiple hero ads for the NEER app launch.</p>
</div>
</div>
</div>
<div className="space-y-6 border-t border-gray-100 pt-12">
<h3 className="text-lg text-gray-900 font-medium tracking-tight">Core User Intents</h3>
<p className="text-sm text-gray-500">Each event is mapped to a core user intent:</p>
<div className="flex flex-wrap gap-3">
<div className="flex items-center gap-2 border border-gray-200 rounded-full px-4 py-2 text-sm text-gray-600 bg-gray-50/50">
<iconify-icon icon="solar:heart-linear" strokeWidth="1.5"></iconify-icon> Romance
                    </div>
<div className="flex items-center gap-2 border border-gray-200 rounded-full px-4 py-2 text-sm text-gray-600 bg-gray-50/50">
<iconify-icon icon="solar:users-group-two-rounded-linear" strokeWidth="1.5"></iconify-icon> Friendship
                    </div>
<div className="flex items-center gap-2 border border-gray-200 rounded-full px-4 py-2 text-sm text-gray-600 bg-gray-50/50">
<iconify-icon icon="solar:briefcase-linear" strokeWidth="1.5"></iconify-icon> Business
                    </div>
<div className="flex items-center gap-2 border border-gray-200 rounded-full px-4 py-2 text-sm text-gray-600 bg-gray-50/50">
<iconify-icon icon="solar:palette-linear" strokeWidth="1.5"></iconify-icon> Culture / Creativity
                    </div>
<div className="flex items-center gap-2 border border-gray-200 rounded-full px-4 py-2 text-sm text-gray-600 bg-gray-50/50">
<iconify-icon icon="solar:leaf-linear" strokeWidth="1.5"></iconify-icon> Wellness / Lifestyle
                    </div>
</div>
</div>
</section>

<section className="space-y-12 border-t border-gray-100 pt-20">
<div className="max-w-2xl space-y-4">
<h2 className="text-2xl md:text-3xl font-medium tracking-tight text-gray-900">Hooks &amp; Viral Trends</h2>
<h3 className="text-lg font-normal text-gray-500">UGC Creative Direction</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
<div className="space-y-6 text-sm leading-relaxed">
<p>A key strategic focus of the UGC programme is leveraging <span className="text-gray-900 font-medium">relatable behavioural moments</span> that reflect how people actually feel before attending social events.</p>
<p>One of the strongest narrative formats we will push across multiple creators is the <span className="text-gray-900 font-medium">“I nearly stayed home tonight” trend</span>.</p>
<p>This hook captures the exact psychological moment NEER is solving: the hesitation people feel before attending something new, followed by the positive social payoff of meeting new people.</p>
</div>
<div className="space-y-6 text-sm leading-relaxed">
<div className="p-6 border border-gray-200 rounded-xl bg-gray-50/50">
<p className="mb-4">This format is particularly effective because it creates <span className="text-gray-900 font-medium">tension → discovery → reward</span>, which performs extremely well in short-form social content.</p>
<p>Creators should structure videos to follow this emotional arc.</p>
</div>
</div>
</div>

<div className="space-y-6">
<h3 className="text-xl font-medium tracking-tight text-gray-900">Core Viral Hook</h3>
<p className="text-sm font-medium text-gray-900 px-4 py-2 bg-gray-100 rounded-md inline-block mb-4">“I nearly stayed home tonight…”</p>
<p className="text-sm text-gray-500 mb-4">Example structure:</p>
<div className="flex flex-col md:flex-row gap-4">
<div className="flex-1 border border-gray-200 rounded-xl p-6 relative bg-white">
<div className="text-xs font-medium text-gray-400 mb-3 uppercase tracking-widest flex items-center gap-2">
<iconify-icon className="text-lg" icon="solar:home-linear" strokeWidth="1.5"></iconify-icon> Step 1
                        </div>
<p className="text-sm text-gray-700">Creator getting ready / leaving the house</p>
</div>
<div className="flex-1 border border-gray-200 rounded-xl p-6 relative bg-white">
<div className="text-xs font-medium text-gray-400 mb-3 uppercase tracking-widest flex items-center gap-2">
<iconify-icon className="text-lg" icon="solar:text-field-linear" strokeWidth="1.5"></iconify-icon> Step 2
                        </div>
<p className="text-sm text-gray-700">Text overlay:<br/><span className="italic text-gray-500 mt-1 block">“I nearly stayed home tonight…”</span></p>
</div>
<div className="flex-1 border border-gray-200 rounded-xl p-6 relative bg-white">
<div className="text-xs font-medium text-gray-400 mb-3 uppercase tracking-widest flex items-center gap-2">
<iconify-icon className="text-lg" icon="solar:video-frame-linear" strokeWidth="1.5"></iconify-icon> Step 3
                        </div>
<p className="text-sm text-gray-700 mb-2">Cut to the event atmosphere:</p>
<ul className="text-sm text-gray-500 space-y-1">
<li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-gray-300"></div> people talking</li>
<li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-gray-300"></div> laughter</li>
<li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-gray-300"></div> activity moments</li>
</ul>
</div>
<div className="flex-1 border border-gray-200 rounded-xl p-6 relative bg-white">
<div className="text-xs font-medium text-gray-400 mb-3 uppercase tracking-widest flex items-center gap-2">
<iconify-icon className="text-lg" icon="solar:text-field-focus-linear" strokeWidth="1.5"></iconify-icon> Step 4
                        </div>
<p className="text-sm text-gray-700">Closing text:<br/><span className="italic text-gray-500 mt-1 block">“Very glad I didn’t.”</span></p>
</div>
</div>
<p className="text-sm text-gray-500 mt-4">This format should be repeated across multiple events to build recognisable content patterns.</p>
</div>
</section>

<section className="space-y-10 border-t border-gray-100 pt-20">
<div className="space-y-2">
<h2 className="text-2xl font-medium tracking-tight text-gray-900">Secondary Hook Variations</h2>
<p className="text-sm text-gray-500">Creators should test multiple variations of this format depending on the event intent.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="border border-gray-200 rounded-xl p-6 hover:border-gray-300 transition-colors bg-white">
<div className="flex items-center gap-3 mb-4">
<div className="p-2 bg-gray-50 rounded-lg border border-gray-100">
<iconify-icon className="text-xl text-gray-700" icon="solar:shield-user-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h4 className="text-sm font-medium text-gray-900">Social Confidence Hook</h4>
</div>
<p className="text-sm text-gray-900 font-medium mb-4">“I nearly stayed home tonight because I didn’t know anyone here.”</p>
<div className="text-xs text-gray-500 space-y-2 mb-4">
<p>Cut to:</p>
<ul className="space-y-1 pl-2">
<li>• introductions</li>
<li>• people chatting</li>
<li>• shared activity</li>
</ul>
</div>
<div className="pt-4 border-t border-gray-100">
<p className="text-xs text-gray-400 uppercase tracking-wide mb-1">Ending line:</p>
<p className="text-sm text-gray-600">“Turns out everyone came alone.”</p>
</div>
</div>

<div className="border border-gray-200 rounded-xl p-6 hover:border-gray-300 transition-colors bg-white">
<div className="flex items-center gap-3 mb-4">
<div className="p-2 bg-gray-50 rounded-lg border border-gray-100">
<iconify-icon className="text-xl text-gray-700" icon="solar:users-group-rounded-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h4 className="text-sm font-medium text-gray-900">Friendship Hook</h4>
</div>
<p className="text-sm text-gray-900 font-medium mb-4">“I nearly stayed home tonight but this is how adults actually make friends.”</p>
<div className="text-xs text-gray-500 space-y-2 mb-4">
<p>Clips showing:</p>
<ul className="space-y-1 pl-2">
<li>• group conversations</li>
<li>• people exchanging numbers</li>
<li>• post-event drinks or hangouts.</li>
</ul>
</div>
</div>

<div className="border border-gray-200 rounded-xl p-6 hover:border-gray-300 transition-colors bg-white">
<div className="flex items-center gap-3 mb-4">
<div className="p-2 bg-gray-50 rounded-lg border border-gray-100">
<iconify-icon className="text-xl text-gray-700" icon="solar:hearts-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h4 className="text-sm font-medium text-gray-900">Romance Angle</h4>
</div>
<p className="text-sm text-gray-900 font-medium mb-4">“I nearly stayed home tonight… imagine missing this.”</p>
<div className="text-xs text-gray-500 space-y-2 mb-4">
<p>Show:</p>
<ul className="space-y-1 pl-2">
<li>• people meeting</li>
<li>• relaxed conversation</li>
<li>• subtle flirtation.</li>
</ul>
</div>
</div>

<div className="border border-gray-200 rounded-xl p-6 hover:border-gray-300 transition-colors bg-white">
<div className="flex items-center gap-3 mb-4">
<div className="p-2 bg-gray-50 rounded-lg border border-gray-100">
<iconify-icon className="text-xl text-gray-700" icon="solar:buildings-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h4 className="text-sm font-medium text-gray-900">London Culture Hook</h4>
</div>
<p className="text-sm text-gray-900 font-medium mb-4">“I nearly stayed home tonight but London needed this.”</p>
<div className="text-xs text-gray-500 space-y-2 mb-4">
<p>Clips highlighting:</p>
<ul className="space-y-1 pl-2">
<li>• interesting people</li>
<li>• creative environments</li>
<li>• unique event experiences.</li>
</ul>
</div>
</div>

<div className="border border-gray-200 rounded-xl p-6 hover:border-gray-300 transition-colors bg-white">
<div className="flex items-center gap-3 mb-4">
<div className="p-2 bg-gray-50 rounded-lg border border-gray-100">
<iconify-icon className="text-xl text-gray-700" icon="solar:globus-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h4 className="text-sm font-medium text-gray-900">Community Hook</h4>
</div>
<p className="text-sm text-gray-900 font-medium mb-4">“I nearly stayed home tonight and I would’ve missed meeting these people.”</p>
<div className="text-xs text-gray-500 space-y-2 mb-4">
<p>Ending with:</p>
<ul className="space-y-1 pl-2">
<li>• laughter</li>
<li>• group interactions</li>
<li>• testimonial snippets.</li>
</ul>
</div>
</div>
</div>
</section>

<section className="space-y-12 border-t border-gray-100 pt-20">
<div className="max-w-2xl space-y-4">
<h2 className="text-2xl font-medium tracking-tight text-gray-900">Creator Video Structure</h2>
<p className="text-sm text-gray-500">To maximise performance, creators should follow a clear narrative structure.</p>
</div>
<div className="max-w-3xl ml-4 border-l border-gray-200 space-y-12 pb-4">

<div className="relative pl-8">
<div className="absolute -left-[5px] top-1.5 w-[9px] h-[9px] rounded-full bg-white border-2 border-gray-300"></div>
<div className="text-xs font-medium text-gray-400 mb-1 uppercase tracking-widest">1️⃣ The Hesitation</div>
<div className="bg-gray-50/50 border border-gray-200 rounded-xl p-5 mt-3">
<p className="text-sm font-medium text-gray-900 mb-3">Opening moment: “I nearly stayed home tonight…”</p>
<p className="text-xs text-gray-500 mb-2">Visuals:</p>
<ul className="text-sm text-gray-600 space-y-1">
<li className="flex items-center gap-2"><iconify-icon className="text-gray-400" icon="solar:check-circle-linear"></iconify-icon> getting ready</li>
<li className="flex items-center gap-2"><iconify-icon className="text-gray-400" icon="solar:check-circle-linear"></iconify-icon> leaving the house</li>
<li className="flex items-center gap-2"><iconify-icon className="text-gray-400" icon="solar:check-circle-linear"></iconify-icon> arriving at the venue.</li>
</ul>
</div>
</div>

<div className="relative pl-8">
<div className="absolute -left-[5px] top-1.5 w-[9px] h-[9px] rounded-full bg-white border-2 border-gray-300"></div>
<div className="text-xs font-medium text-gray-400 mb-1 uppercase tracking-widest">2️⃣ The Discovery</div>
<div className="bg-gray-50/50 border border-gray-200 rounded-xl p-5 mt-3">
<p className="text-sm font-medium text-gray-900 mb-3">Cut to the event starting.</p>
<p className="text-xs text-gray-500 mb-2">Visuals:</p>
<ul className="text-sm text-gray-600 space-y-1">
<li className="flex items-center gap-2"><iconify-icon className="text-gray-400" icon="solar:check-circle-linear"></iconify-icon> first interactions</li>
<li className="flex items-center gap-2"><iconify-icon className="text-gray-400" icon="solar:check-circle-linear"></iconify-icon> people arriving</li>
<li className="flex items-center gap-2"><iconify-icon className="text-gray-400" icon="solar:check-circle-linear"></iconify-icon> activities beginning.</li>
</ul>
</div>
</div>

<div className="relative pl-8">
<div className="absolute -left-[5px] top-1.5 w-[9px] h-[9px] rounded-full bg-white border-2 border-gray-300"></div>
<div className="text-xs font-medium text-gray-400 mb-1 uppercase tracking-widest">3️⃣ The Connection</div>
<div className="bg-gray-50/50 border border-gray-200 rounded-xl p-5 mt-3">
<p className="text-xs text-gray-500 mb-2">Clips of:</p>
<ul className="text-sm text-gray-600 space-y-1">
<li className="flex items-center gap-2"><iconify-icon className="text-gray-400" icon="solar:check-circle-linear"></iconify-icon> conversations</li>
<li className="flex items-center gap-2"><iconify-icon className="text-gray-400" icon="solar:check-circle-linear"></iconify-icon> shared experiences</li>
<li className="flex items-center gap-2"><iconify-icon className="text-gray-400" icon="solar:check-circle-linear"></iconify-icon> people bonding.</li>
</ul>
</div>
</div>

<div className="relative pl-8">
<div className="absolute -left-[5px] top-1.5 w-[9px] h-[9px] rounded-full bg-white border-2 border-gray-300"></div>
<div className="text-xs font-medium text-gray-400 mb-1 uppercase tracking-widest">4️⃣ The Payoff</div>
<div className="bg-gray-50/50 border border-gray-200 rounded-xl p-5 mt-3">
<p className="text-xs text-gray-500 mb-2">Closing line such as:</p>
<p className="text-sm font-medium text-gray-900">“Very glad I didn’t come home tonight.”</p>
<p className="text-xs text-gray-400 my-2">or</p>
<p className="text-sm font-medium text-gray-900">“Everyone here came alone.”</p>
</div>
</div>
</div>
</section>

<section className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-gray-100 pt-20">

<div className="space-y-6">
<h2 className="text-xl font-medium tracking-tight text-gray-900">Creator Filming Guidance</h2>
<div className="space-y-4">
<p className="text-sm text-gray-500">Creators should capture:</p>
<ul className="text-sm text-gray-700 space-y-2">
<li className="flex items-start gap-2"><iconify-icon className="mt-0.5 text-gray-400" icon="solar:record-minimalistic-linear"></iconify-icon> arrival moments</li>
<li className="flex items-start gap-2"><iconify-icon className="mt-0.5 text-gray-400" icon="solar:record-minimalistic-linear"></iconify-icon> first introductions</li>
<li className="flex items-start gap-2"><iconify-icon className="mt-0.5 text-gray-400" icon="solar:record-minimalistic-linear"></iconify-icon> event activities</li>
</ul>
</div>
<div className="p-4 border border-gray-200 rounded-lg bg-gray-50/50">
<p className="text-xs text-gray-500 mb-2 uppercase tracking-wide font-medium">All clips should be:</p>
<ul className="text-sm text-gray-900 font-medium space-y-1">
<li>• vertical</li>
<li>• authentic and unstaged</li>
<li>• suitable for Reels / TikTok / paid media.</li>
</ul>
</div>
</div>

<div className="space-y-6">
<h2 className="text-xl font-medium tracking-tight text-gray-900">Why This Trend Works</h2>
<p className="text-sm text-gray-500 leading-relaxed">This narrative works particularly well because it:</p>
<ul className="text-sm text-gray-700 space-y-3">
<li className="flex items-center gap-3">
<div className="w-1.5 h-1.5 rounded-full bg-gray-900"></div> mirrors real behaviour
                    </li>
<li className="flex items-center gap-3">
<div className="w-1.5 h-1.5 rounded-full bg-gray-900"></div> highlights the emotional payoff of attending events
                    </li>
<li className="flex items-center gap-3">
<div className="w-1.5 h-1.5 rounded-full bg-gray-900"></div> creates curiosity and relatability
                    </li>
</ul>
<p className="text-sm text-gray-500 leading-relaxed pt-2">
                    The repeated use of this hook across events helps create a recognisable storytelling pattern, increasing the likelihood of viral traction while reinforcing NEER’s brand positioning.
                </p>
</div>
</section>

<section className="space-y-10 border-t border-gray-100 pt-20">
<h2 className="text-2xl font-medium tracking-tight text-gray-900">Monthly UGC Structure</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="border border-gray-200 rounded-2xl p-8 bg-white">
<h3 className="text-xl font-medium text-gray-900 mb-6 flex items-center justify-between">
                        March
                        <span className="text-sm font-normal text-gray-500 bg-gray-100 rounded-full pt-1 pr-3 pb-1 pl-3">Budget: £1,600</span>
</h3>
<div className="space-y-6">
<div>
<p className="text-xs text-gray-400 uppercase tracking-widest font-medium mb-2">Target</p>
<ul className="text-sm text-gray-700 space-y-1">
<li>• 6–8 UGC videos</li>
<li>• ~£200–£300 per creator</li>
</ul>
</div>
<div>
<p className="text-xs text-gray-400 uppercase tracking-widest font-medium mb-2">Focus</p>
<p className="text-sm text-gray-900 font-medium">Build early proof of community interaction.</p>
</div>
</div>
</div>

<div className="border border-gray-200 rounded-2xl p-8 bg-white">
<h3 className="text-xl font-medium text-gray-900 mb-6 flex items-center justify-between">
                        April
                        <span className="text-sm font-normal text-gray-500 bg-gray-100 rounded-full pt-1 pr-3 pb-1 pl-3">Budget: £1,600</span>
</h3>
<div className="space-y-6">
<div className="">
<p className="text-xs text-gray-400 uppercase tracking-widest font-medium mb-2">Target</p>
<ul className="text-sm text-gray-700 space-y-1">
<li>• 6–8 UGC videos</li>
<li>• 1–2 per event</li>
</ul>
</div>
<div>
<p className="text-xs text-gray-400 uppercase tracking-widest font-medium mb-2">Focus</p>
<p className="text-sm text-gray-900 font-medium">Scale content capturing multiple types of connections.</p>
</div>
</div>
</div>
</div>
</section>

<section className="space-y-10 border-t border-gray-100 pt-20">
<div className="max-w-2xl space-y-4">
<h2 className="text-2xl font-medium tracking-tight text-gray-900">UGC Strategy Framework</h2>
<p className="text-sm text-gray-500">Each event will follow the same creative structure. Creators capture:</p>
</div>

<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
<div className="border border-gray-100 bg-gray-50/30 rounded-lg p-4 text-center space-y-2">
<div className="w-6 h-6 rounded-full bg-white border border-gray-200 text-xs flex items-center justify-center mx-auto text-gray-900 font-medium">1</div>
<p className="text-xs text-gray-600">Arrival &amp; anticipation</p>
</div>
<div className="border border-gray-100 bg-gray-50/30 rounded-lg p-4 text-center space-y-2">
<div className="w-6 h-6 rounded-full bg-white border border-gray-200 text-xs flex items-center justify-center mx-auto text-gray-900 font-medium">2</div>
<p className="text-xs text-gray-600">First interactions / introductions</p>
</div>
<div className="border border-gray-100 bg-gray-50/30 rounded-lg p-4 text-center space-y-2">
<div className="w-6 h-6 rounded-full bg-white border border-gray-200 text-xs flex items-center justify-center mx-auto text-gray-900 font-medium">3</div>
<p className="text-xs text-gray-600">Event activity moments</p>
</div>
<div className="border border-gray-100 bg-gray-50/30 rounded-lg p-4 text-center space-y-2">
<div className="w-6 h-6 rounded-full bg-white border border-gray-200 text-xs flex items-center justify-center mx-auto text-gray-900 font-medium">4</div>
<p className="text-xs text-gray-600">Genuine conversations</p>
</div>
<div className="border border-gray-100 bg-gray-50/30 rounded-lg p-4 text-center space-y-2">
<div className="w-6 h-6 rounded-full bg-white border border-gray-200 text-xs flex items-center justify-center mx-auto text-gray-900 font-medium">5</div>
<p className="text-xs text-gray-600">Quick testimonial clips</p>
</div>
<div className="border border-gray-100 bg-gray-50/30 rounded-lg p-4 text-center space-y-2">
<div className="w-6 h-6 rounded-full bg-white border border-gray-200 text-xs flex items-center justify-center mx-auto text-gray-900 font-medium">6</div>
<p className="text-xs text-gray-600">Atmosphere &amp; environment</p>
</div>
</div>
<div className="flex flex-col md:flex-row gap-6 items-start md:items-center bg-gray-50 rounded-xl p-6 border border-gray-200">
<div className="p-3 bg-white border border-gray-200 rounded-lg shrink-0">
<iconify-icon className="text-2xl text-gray-900" icon="solar:smartphone-rotate-2-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-gray-900 mb-1">All footage must be vertical short-form suitable for:</p>
<p className="text-sm text-gray-500">• Instagram Reels • TikTok • Paid ads • App launch hero videos</p>
</div>
</div>
</section>

<section className="border-gray-100 border-t pt-20 space-y-8">
<h2 className="text-2xl font-medium tracking-tight text-gray-900">Event UGC Plan</h2>
<div className="border border-gray-200 rounded-xl overflow-hidden bg-white">
<div className="overflow-x-auto table-scroll">
<table className="w-full text-left text-sm whitespace-nowrap md:whitespace-normal">
<thead className="bg-gray-50 border-b border-gray-200 text-xs uppercase tracking-wide font-medium text-gray-500">
<tr className="">
<th className="font-medium pt-4 pr-6 pb-4 pl-6">Event</th>
<th className="px-6 py-4 font-medium">Core Intent</th>
<th className="px-6 py-4 font-medium">Target Creator Type</th>
<th className="px-6 py-4 font-medium">Hook Angle</th>
<th className="px-6 py-4 font-medium">UGC Deliverables</th>
<th className="px-6 py-4 font-medium text-right">Budget</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-100 text-gray-600">
<tr className="hover:bg-gray-50/50 transition-colors">
<td className="font-medium text-gray-900 pt-4 pr-6 pb-4 pl-6">Motivational Women Panel</td>
<td className="px-6 py-4">Business / Ambition</td>
<td className="px-6 py-4">Female founders, career creators</td>
<td className="px-6 py-4">“Women you need in your circle”</td>
<td className="px-6 py-4 text-xs">1 panel reaction video + 1 networking video</td>
<td className="px-6 py-4 text-right">£200</td>
</tr>
<tr className="hover:bg-gray-50/50 transition-colors">
<td className="px-6 py-4 font-medium text-gray-900">Run Club</td>
<td className="px-6 py-4">Friendship / Wellness</td>
<td className="px-6 py-4">Fitness &amp; lifestyle creators</td>
<td className="px-6 py-4">“Making friends while running in London”</td>
<td className="px-6 py-4 text-xs">1 POV run video + 1 post-run social clip</td>
<td className="px-6 py-4 text-right">£150</td>
</tr>
<tr className="hover:bg-gray-50/50 transition-colors">
<td className="px-6 py-4 font-medium text-gray-900">Stories In The Room (Film Screening)</td>
<td className="px-6 py-4">Culture / Creativity</td>
<td className="px-6 py-4">Film &amp; arts creators</td>
<td className="px-6 py-4">“Private film nights with interesting people”</td>
<td className="px-6 py-4 text-xs">1 cinematic recap + 1 testimonial clip</td>
<td className="px-6 py-4 text-right">£200</td>
</tr>
<tr className="hover:bg-gray-50/50 transition-colors">
<td className="px-6 py-4 font-medium text-gray-900">Easter Brunch</td>
<td className="px-6 py-4">Romance / Friendship</td>
<td className="px-6 py-4">Lifestyle &amp; social creators</td>
<td className="px-6 py-4">“Meeting new people over brunch”</td>
<td className="px-6 py-4 text-xs">1 brunch vibe reel + 1 interaction clip</td>
<td className="px-6 py-4 text-right">£150</td>
</tr>
<tr className="hover:bg-gray-50/50 transition-colors">
<td className="px-6 py-4 font-medium text-gray-900">App Launch Party</td>
<td className="px-6 py-4">All intents</td>
<td className="px-6 py-4">Social nightlife creators</td>
<td className="px-6 py-4">“Everyone here met through NEER”</td>
<td className="px-6 py-4 text-xs">1 event hype video + 1 testimonial reel</td>
<td className="px-6 py-4 text-right">£300</td>
</tr>
<tr className="hover:bg-gray-50/50 transition-colors">
<td className="px-6 py-4 font-medium text-gray-900">Open Mic Night</td>
<td className="px-6 py-4">Creativity / Culture</td>
<td className="px-6 py-4">Music &amp; arts creators</td>
<td className="px-6 py-4">“Where creatives meet their crowd”</td>
<td className="px-6 py-4 text-xs">1 performance clip + 1 social vibe reel</td>
<td className="px-6 py-4 text-right">£150</td>
</tr>
<tr className="hover:bg-gray-50/50 transition-colors">
<td className="px-6 py-4 font-medium text-gray-900">Run Club (After Event)</td>
<td className="px-6 py-4">Friendship / Community</td>
<td className="px-6 py-4">Fitness creators</td>
<td className="px-6 py-4">“Running club that actually becomes a social circle”</td>
<td className="px-6 py-4 text-xs">1 run POV + 1 coffee hangout clip</td>
<td className="px-6 py-4 text-right">£100</td>
</tr>
<tr className="hover:bg-gray-50/50 transition-colors">
<td className="px-6 py-4 font-medium text-gray-900">Sports Panel</td>
<td className="px-6 py-4">Business / Networking</td>
<td className="px-6 py-4">Sports business creators</td>
<td className="px-6 py-4">“Where sports professionals meet off the pitch”</td>
<td className="px-6 py-4 text-xs">1 panel moment + 1 networking reel</td>
<td className="px-6 py-4 text-right">£150</td>
</tr>
<tr className="hover:bg-gray-50/50 transition-colors">
<td className="px-6 py-4 font-medium text-gray-900">Wine &amp; Pottery</td>
<td className="px-6 py-4">Romance / Friendship</td>
<td className="px-6 py-4">Date-night lifestyle creators</td>
<td className="px-6 py-4">“Best first date idea in London”</td>
<td className="px-6 py-4 text-xs">1 pottery POV + 1 date vibe clip</td>
<td className="px-6 py-4 text-right">£200</td>
</tr>
</tbody>
</table>
</div>
</div>
</section>

<section className="grid grid-cols-1 lg:grid-cols-2 gap-12 border-t border-gray-100 pt-20">

<div className="space-y-6">
<h2 className="text-xl font-medium tracking-tight text-gray-900">Creator Brief Structure</h2>
<p className="text-sm text-gray-500">Every creator receives the same brief.</p>
<div className="border border-gray-200 rounded-xl p-6 bg-white shadow-sm">
<p className="text-sm font-medium text-gray-900 mb-4">Capture moments:</p>
<ul className="text-sm text-gray-600 space-y-3">
<li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div> Arriving to event</li>
<li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div> Meeting someone new</li>
<li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div> Activity happening</li>
</ul>
</div>
</div>

<div className="space-y-6">
<h2 className="text-xl font-medium tracking-tight text-gray-900">Video Types</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="border border-gray-200 rounded-lg p-5 bg-white">
<div className="text-xs font-medium text-gray-400 mb-2">1️⃣ POV Experience</div>
<p className="text-sm text-gray-900">“Come with me to a NEER event.”</p>
</div>
<div className="border border-gray-200 rounded-lg p-5 bg-white">
<div className="text-xs font-medium text-gray-400 mb-2">2️⃣ Social Proof</div>
<p className="text-sm text-gray-900">“Everyone here came alone and left with friends.”</p>
</div>
<div className="border border-gray-200 rounded-lg p-5 bg-white">
<div className="text-xs font-medium text-gray-400 mb-2">3️⃣ Atmosphere Reel</div>
<p className="text-sm text-gray-900">Music, laughter, movement, environment.</p>
</div>
<div className="border border-gray-200 rounded-lg p-5 bg-white">
<div className="text-xs font-medium text-gray-400 mb-2">4️⃣ Testimonial Clips</div>
<p className="text-sm text-gray-900">“What kind of people come to NEER?”</p>
</div>
</div>
</div>
</section>

<section className="grid grid-cols-1 lg:grid-cols-2 gap-6 border-t border-gray-100 pt-20">

<div className="border border-gray-200 rounded-2xl p-8 bg-white flex flex-col justify-between">
<div>
<h2 className="text-xl font-medium tracking-tight text-gray-900 mb-2">Content Output</h2>
<p className="text-sm text-gray-500 mb-8">Across March and April we aim to produce:</p>
<div className="text-3xl font-medium text-gray-900 tracking-tight mb-8">12–16 <span className="text-xl text-gray-400 font-normal">high-quality UGC videos</span></div>
</div>
<div>
<p className="text-sm text-gray-900 font-medium mb-3">This will build a strong content bank including:</p>
<div className="flex flex-wrap gap-2">
<span className="text-xs border border-gray-200 bg-gray-50 text-gray-600 px-3 py-1.5 rounded-md">• social proof</span>
<span className="text-xs border border-gray-200 bg-gray-50 text-gray-600 px-3 py-1.5 rounded-md">• atmosphere</span>
<span className="text-xs border border-gray-200 bg-gray-50 text-gray-600 px-3 py-1.5 rounded-md">• testimonials</span>
<span className="text-xs border border-gray-200 bg-gray-50 text-gray-600 px-3 py-1.5 rounded-md">• lifestyle POV content</span>
</div>
</div>
</div>

<div className="border border-gray-200 rounded-2xl p-8 bg-white flex flex-col justify-between">
<div>
<h2 className="text-xl font-medium tracking-tight text-gray-900 mb-4">Compounding Effect</h2>
<p className="text-sm text-gray-600 mb-4 leading-relaxed">The real value of this content is <span className="font-medium text-gray-900">not individual posts</span>. It is the <span className="font-medium text-gray-900">launch content library</span>.</p>
<p className="text-sm text-gray-600 mb-6">By the time the app launches, we will have a bank of:</p>
<ul className="text-sm text-gray-700 space-y-2 mb-8">
<li>• real community interactions</li>
<li>• real friendships forming</li>
<li>• real conversations happening</li>
</ul>
</div>
<div className="p-4 bg-gray-50 border border-gray-200 rounded-xl">
<p className="text-sm text-gray-900 font-medium">This allows us to create <span className="italic font-normal">multiple hero advertisements</span> for the NEER launch campaign.</p>
</div>
</div>
</section>

<section className="border-t border-gray-100 pt-32 pb-12 flex flex-col items-center text-center space-y-8">
<div className="max-w-xl space-y-4">
<p className="text-sm text-gray-600 leading-relaxed">
                    If you want, I can also quickly create <span className="font-medium text-gray-900">one final section that would elevate this document even more</span>:
                </p>
<h3 className="text-xl font-medium text-gray-900 tracking-tight">“UGC Creator Archetypes”</h3>
<p className="text-sm text-gray-500 leading-relaxed">
                    This would define <span className="font-medium text-gray-700">exact creator types we should hire</span> (social connector, London lifestyle dater, fitness socialiser, cultural curator, etc.), which would make the strategy look <span className="font-medium text-gray-900">extremely data-driven and polished.</span>
</p>
</div>

<button className="bg-gradient-to-r from-rose-500 to-orange-400 text-white text-sm font-medium px-8 py-3 rounded-full shadow-sm hover:opacity-90 transition-opacity flex items-center gap-2">
                Generate Creator Archetypes
                <iconify-icon icon="solar:arrow-right-linear" strokeWidth="2"></iconify-icon>
</button>
</section>
</main>

    </>
  );
}
