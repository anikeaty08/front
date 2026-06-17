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
      

<nav className="sticky top-0 z-50 bg-slate-50/80 backdrop-blur-md border-b border-slate-200/60">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="text-xl font-semibold tracking-tighter uppercase text-slate-900">
                Nowa
            </div>
<a className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-slate-900 rounded-full hover:bg-slate-800 transition-colors" href="#early-access">
                Get Free Parent Toolkit + 41% OFF
            </a>
</div>
</nav>

<section className="pt-24 pb-16 px-6">
<div className="max-w-4xl mx-auto text-center">
<h1 className="text-5xl md:text-6xl font-semibold tracking-tighter text-slate-900 mb-6 leading-tight">
                The pet you loved.<br/>Reinvented for your child.
            </h1>
<p className="text-lg text-slate-500 mb-10 max-w-2xl mx-auto leading-relaxed">
                Meet Nowa — the first interactive virtual pet that turns brushing teeth, tidying up, and bedtime into missions kids <em className="not-italic text-slate-900 font-medium">want</em> to complete.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm font-medium text-slate-600 mb-16">
<span className="flex items-center gap-2"><iconify-icon className="text-slate-900 text-lg" icon="solar:check-circle-linear"></iconify-icon> Real conversations that adapt</span>
<span className="flex items-center gap-2"><iconify-icon className="text-slate-900 text-lg" icon="solar:check-circle-linear"></iconify-icon> Missions that get them off the couch</span>
<span className="flex items-center gap-2"><iconify-icon className="text-slate-900 text-lg" icon="solar:check-circle-linear"></iconify-icon> See every step of their growth</span>
</div>

<div className="relative w-full max-w-4xl mx-auto aspect-video rounded-3xl bg-slate-900 overflow-hidden shadow-2xl ring-1 ring-slate-900/10 flex flex-col justify-between p-8 border border-slate-800">
<div className="flex justify-between items-start w-full">
<div className="flex items-center gap-3 text-slate-400 font-medium text-sm">
<iconify-icon className="text-xl" icon="solar:gameboy-linear"></iconify-icon>
                        1996
                    </div>
<div className="flex items-center gap-3 text-white font-medium text-sm bg-white/10 px-4 py-1.5 rounded-full border border-white/10 backdrop-blur-sm">
                        2026 AI Era
                        <iconify-icon className="text-xl" icon="solar:magic-stick-3-linear"></iconify-icon>
</div>
</div>
<div className="text-center">
<iconify-icon className="text-6xl text-white/80 hover:text-white cursor-pointer transition-colors mb-4" icon="solar:play-circle-linear"></iconify-icon>
<p className="text-slate-300 text-sm font-medium tracking-wide uppercase">Watch the Transformation</p>
</div>
<div className="w-full flex items-center justify-between text-xs text-slate-400 font-medium tracking-wide">
<span>100% Safety Guarantee</span>
<span>Parental App Connected</span>
</div>
</div>

<div className="mt-24 max-w-3xl mx-auto">
<h2 className="text-2xl font-semibold tracking-tight text-slate-900 mb-4">Level up the pet. Level up the kid.</h2>
<p className="text-base text-slate-500 mb-10 leading-relaxed">
                    Nowa works exactly like the games they already love — except real life is the controller. Brush teeth → +XP. Tidy the room → +XP. Show kindness → rare bonus XP. Every action earns their pet new powers, new evolutions, and rarer species to unlock. They're not doing chores. They're building a champion.
                </p>
<div className="flex flex-wrap items-center justify-center gap-3 text-sm font-medium text-slate-700">
<span className="px-4 py-2 bg-white border border-slate-200 rounded-lg shadow-sm">Virtual pet game</span>
<iconify-icon className="text-slate-300" icon="solar:add-circle-linear"></iconify-icon>
<span className="px-4 py-2 bg-white border border-slate-200 rounded-lg shadow-sm">Talk &amp; response</span>
<iconify-icon className="text-slate-300" icon="solar:add-circle-linear"></iconify-icon>
<span className="px-4 py-2 bg-white border border-slate-200 rounded-lg shadow-sm">Habit tracker</span>
<iconify-icon className="text-slate-300" icon="solar:add-circle-linear"></iconify-icon>
<span className="px-4 py-2 bg-white border border-slate-200 rounded-lg shadow-sm">Care &amp; Growth</span>
<iconify-icon className="text-slate-900 rotate-90" icon="solar:reorder-linear"></iconify-icon>
<span className="px-5 py-2 bg-slate-900 text-white rounded-lg shadow-sm tracking-tight">NOWA</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-slate-200/60">
<div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-6">
                    Empower them to lead.<br/>Empower yourself to lay back.
                </h2>
<p className="text-base text-slate-500 leading-relaxed mb-8">
                    Nurture the pet by real-life actions. Nowa doesn't nag. He motivates, acting as a friend who needs help. Kids complete missions to help their virtual pet grow and evolve, making habit-building feel like play, not punishment.
                </p>
<div className="flex items-center gap-4 text-sm font-medium text-slate-900">
<iconify-icon className="text-xl" icon="solar:arrow-right-linear"></iconify-icon>
                    Try the interactive demo
                </div>
</div>

<div className="relative max-w-sm mx-auto w-full bg-slate-50 rounded-[2.5rem] border border-slate-200 shadow-xl overflow-hidden ring-1 ring-slate-900/5 aspect-[4/5] flex flex-col p-8 text-center">
<div className="absolute top-4 left-1/2 -translate-x-1/2 w-16 h-1.5 bg-slate-200 rounded-full"></div>
<div className="flex-1 flex flex-col items-center justify-center">
<div className="w-16 h-16 bg-white rounded-2xl border border-slate-200 shadow-sm flex items-center justify-center mb-6">
<iconify-icon className="text-3xl text-slate-900" icon="solar:cat-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-2">The Gratitude Whisper</h3>
<p className="text-sm text-slate-500 mb-10 max-w-[200px] mx-auto">"Tell me 3 things you're grateful for today."</p>
<button className="relative group w-20 h-20 rounded-full bg-slate-900 text-white flex items-center justify-center shadow-md hover:bg-slate-800 transition-all">
<div className="absolute inset-0 rounded-full border-2 border-slate-900 scale-110 opacity-0 group-hover:opacity-20 group-hover:animate-ping transition-all duration-700"></div>
<iconify-icon className="text-3xl" icon="solar:microphone-2-linear"></iconify-icon>
</button>
<span className="text-xs text-slate-400 mt-4 font-medium uppercase tracking-widest">Hold to speak</span>
</div>
</div>
</div>
</section>

<section className="py-12 bg-slate-50 px-6">
<div className="max-w-4xl mx-auto bg-slate-100 rounded-3xl p-8 border border-slate-200 text-center flex flex-col items-center">
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-2">Join the inner circle of early adopters.</h3>
<p className="text-sm text-slate-500 mb-6">Subscribe for new updates &amp; be the first to test Nowa with a special discount.</p>
<form className="flex w-full max-w-md gap-2">
<input className="flex-1 px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-300 transition-all" placeholder="Enter Email Address" required="" type="email"/>
<button className="px-6 py-2.5 bg-slate-900 text-white text-sm font-medium rounded-xl hover:bg-slate-800 transition-colors whitespace-nowrap" type="submit">
                    Secure Discount
                </button>
</form>
</div>
</section>

<section className="py-24 px-6 border-t border-slate-200/60">
<div className="max-w-6xl mx-auto text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-6">
                The habit sticks. The novelty never ends.
            </h2>
<p className="text-base text-slate-500 max-w-2xl mx-auto leading-relaxed">
                Most sticker charts fail because the reward is static. With Nowa, the pets grow with your child. Do missions and collect pets like a professional hunter. Build a 14-day streak? Watch it transform. No two pets are alike.
            </p>
</div>
<div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">

<div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col items-center text-center">
<div className="w-24 h-24 bg-slate-50 rounded-full flex items-center justify-center mb-4 border border-slate-100">
<iconify-icon className="text-4xl text-slate-700" icon="solar:ghost-linear"></iconify-icon>
</div>
<span className="text-xs font-medium px-2 py-1 bg-slate-100 text-slate-600 rounded-md mb-2">Stage 1: Seed</span>
<p className="text-sm text-slate-500">Starts small, learns basics.</p>
</div>
<div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col items-center text-center relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 to-transparent"></div>
<div className="w-24 h-24 bg-slate-50 rounded-full flex items-center justify-center mb-4 border border-slate-100 relative z-10">
<iconify-icon className="text-4xl text-slate-800" icon="solar:emoji-funny-circle-linear"></iconify-icon>
</div>
<span className="text-xs font-medium px-2 py-1 bg-slate-900 text-white rounded-md mb-2 relative z-10">Stage 2: Evolved</span>
<p className="text-sm text-slate-500 relative z-10">Gains unique traits based on habits.</p>
</div>
<div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col items-center text-center">
<div className="w-24 h-24 bg-slate-50 rounded-full flex items-center justify-center mb-4 border border-slate-100">
<iconify-icon className="text-4xl text-slate-900" icon="solar:star-fall-2-linear"></iconify-icon>
</div>
<span className="text-xs font-medium px-2 py-1 border border-slate-200 text-slate-900 rounded-md mb-2">Kickstarter Exclusive</span>
<p className="text-sm text-slate-500">Rare legendary species.</p>
</div>
</div>

<div className="max-w-5xl mx-auto bg-slate-900 rounded-[2rem] p-10 md:p-16 text-white relative overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-10 -mt-10"></div>
<div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
<div>
<h3 className="text-2xl font-semibold tracking-tight mb-4">Every habit streak unlocks a surprise.</h3>
<p className="text-sm text-slate-400 leading-relaxed mb-8">
                        Every time your child completes a habit streak, a new content pack unlocks in the Knowledge Constellation. Always something worth looking forward to.
                    </p>
<div className="flex flex-col gap-4">
<div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/10">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
<iconify-icon className="text-xl" icon="solar:test-tube-linear"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium">Science Packs</h4>
<div className="w-full bg-white/10 h-1.5 rounded-full mt-2"><div className="bg-white w-3/4 h-1.5 rounded-full"></div></div>
</div>
</div>
<div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/10 opacity-50">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
<iconify-icon className="text-xl" icon="solar:shield-linear"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium">History Epics <span className="text-xs ml-2 text-slate-400 font-normal">Locked</span></h4>
<div className="w-full bg-white/10 h-1.5 rounded-full mt-2"><div className="bg-white/30 w-1/4 h-1.5 rounded-full"></div></div>
</div>
</div>
</div>
</div>
<div className="bg-white text-slate-900 p-8 rounded-2xl border border-slate-200">
<div className="flex items-start gap-4 mb-4">
<iconify-icon className="text-2xl text-slate-900 flex-shrink-0 mt-1" icon="solar:verified-check-linear"></iconify-icon>
<p className="text-sm font-medium leading-relaxed italic">
                            "Every story, song, and podcast in Nowa's library is vetted by child development experts — no algorithms, no ads, no content your child shouldn't see."
                        </p>
</div>
<div className="flex items-center gap-3 pl-10">
<div className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center">
<span className="text-xs font-semibold">SC</span>
</div>
<div>
<p className="text-xs font-semibold text-slate-900">Dr. Sarah Chen</p>
<p className="text-xs text-slate-500">PhD Educational Psychology</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white px-6">
<div className="max-w-6xl mx-auto text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-6">
                Your Peace of Mind is Our Priority
            </h2>
<p className="text-base text-slate-500 max-w-2xl mx-auto leading-relaxed">
                Our Parent App is your mission control, giving you complete transparency and turning Nowa into a bridge for real-world family connection.
            </p>
</div>

<div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">

<div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-200 flex flex-col justify-between">
<div>
<div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center mb-6">
<iconify-icon className="text-2xl text-slate-900" icon="solar:shield-keyhole-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-3">Safe &amp; Private</h3>
<p className="text-sm text-slate-500 leading-relaxed">No open internet. No data selling. Full parental control. Closed ecosystem designed with child safety as the top priority.</p>
</div>
<div className="mt-8 flex items-center gap-2">
<span className="px-3 py-1 bg-white border border-slate-200 text-xs font-medium rounded-full text-slate-600">COPPA-compliant</span>
</div>
</div>

<div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-200 flex flex-col justify-between">
<div>
<div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center mb-6">
<iconify-icon className="text-2xl text-slate-900" icon="solar:checklist-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-3">Mission Control</h3>
<p className="text-sm text-slate-500 leading-relaxed">Drag-and-drop routine builder. Set morning, homework, and bedtime missions in seconds – all customized to your child.</p>
</div>
<div className="mt-8 bg-white border border-slate-200 rounded-xl p-3 flex flex-col gap-2">
<div className="flex items-center gap-3 text-sm font-medium text-slate-700 bg-slate-50 px-3 py-2 rounded-lg border border-slate-100">
<iconify-icon icon="solar:sun-linear"></iconify-icon> Morning Routine
                    </div>
<div className="flex items-center gap-3 text-sm font-medium text-slate-700 bg-slate-50 px-3 py-2 rounded-lg border border-slate-100">
<iconify-icon icon="solar:book-linear"></iconify-icon> Homework
                    </div>
</div>
</div>

<div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-200 flex flex-col justify-between">
<div>
<div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center mb-6">
<iconify-icon className="text-2xl text-slate-900" icon="solar:users-group-two-rounded-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-3">Bonding Rewards</h3>
<p className="text-sm text-slate-500 leading-relaxed">Instead of screen time, suggest family activities. Build stronger parent-child connections through shared goals.</p>
</div>
<div className="mt-8 p-4 bg-white border border-slate-200 rounded-xl text-xs font-medium text-slate-700 flex items-start gap-3">
<iconify-icon className="text-lg mt-0.5" icon="solar:bell-linear"></iconify-icon>
<p><strong>Goal Met!</strong> Suggestion: A 'No-Phone' Saturday Hike. Nowa will provide the 'Mission Instructions'.</p>
</div>
</div>

<div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-200 flex flex-col justify-between">
<div>
<div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center mb-6">
<iconify-icon className="text-2xl text-slate-900" icon="solar:chart-square-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-3">Growth Insights</h3>
<p className="text-sm text-slate-500 leading-relaxed">Track habit consistency and emotional milestones. Get expert-backed suggestions tailored to your child's unique journey.</p>
</div>
<div className="mt-8 flex items-end gap-2 h-16 border-b border-slate-200 pb-2">
<div className="w-1/5 bg-slate-200 h-1/3 rounded-t-sm"></div>
<div className="w-1/5 bg-slate-300 h-1/2 rounded-t-sm"></div>
<div className="w-1/5 bg-slate-400 h-2/3 rounded-t-sm"></div>
<div className="w-1/5 bg-slate-600 h-4/5 rounded-t-sm"></div>
<div className="w-1/5 bg-slate-900 h-full rounded-t-sm relative">
<span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-semibold text-slate-900">100%</span>
</div>
</div>
</div>
</div>

<div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="p-8 border border-slate-200 rounded-2xl bg-white text-sm text-slate-600 leading-relaxed">
                "My son used to fight me for 20 minutes every morning about his shoes. Now, he's racing to get them on because he wants to tell his Nowa pet he's ready for the 'School Mission.' It's a game-changer."
                <div className="mt-6 font-medium text-slate-900 flex items-center gap-2">
                    Mark <span className="text-xs text-slate-400 font-normal px-2 py-0.5 border border-slate-200 rounded-md">Dad of 7yo (Beta Tester)</span>
</div>
</div>
<div className="p-8 border border-slate-200 rounded-2xl bg-white text-sm text-slate-600 leading-relaxed">
                "The data dashboard actually showed me that my daughter was feeling anxious about her math homework before she even told me. It gave us a bridge to talk."
                <div className="mt-6 font-medium text-slate-900 flex items-center gap-2">
                    Elena <span className="text-xs text-slate-400 font-normal px-2 py-0.5 border border-slate-200 rounded-md">Mom of 8yo (Beta Tester)</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-200/60 px-6">
<div className="max-w-3xl mx-auto">
<h2 className="text-2xl font-semibold tracking-tight text-slate-900 mb-10 text-center">Frequently Asked Questions</h2>
<div className="flex flex-col border-t border-slate-200">
<details className="group border-b border-slate-200 py-5 cursor-pointer">
<summary className="flex items-center justify-between font-medium text-slate-900 outline-none select-none">
                        What age is Nowa designed for?
                        <iconify-icon className="transition-transform group-open:-rotate-180 text-slate-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="mt-4 text-slate-500 text-sm leading-relaxed pr-8">
                        Nowa is designed for children ages 6-9, the critical years when habits are forming and kids are developing independence. The content, interactions, and pet designs are all tailored to this age group's cognitive and emotional development stage.
                    </div>
</details>
<details className="group border-b border-slate-200 py-5 cursor-pointer">
<summary className="flex items-center justify-between font-medium text-slate-900 outline-none select-none">
                        How does Nowa help build habits without nagging?
                        <iconify-icon className="transition-transform group-open:-rotate-180 text-slate-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="mt-4 text-slate-500 text-sm leading-relaxed pr-8">
                        Instead of parents repeating instructions, Nowa turns daily routines into a pet-raising game. Kids complete missions (like brushing teeth or tidying up) to help their virtual pet grow. The pet celebrates their wins and encourages them, making habit-building feel like play.
                    </div>
</details>
<details className="group border-b border-slate-200 py-5 cursor-pointer">
<summary className="flex items-center justify-between font-medium text-slate-900 outline-none select-none">
                        Is Nowa a replacement for parenting?
                        <iconify-icon className="transition-transform group-open:-rotate-180 text-slate-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="mt-4 text-slate-500 text-sm leading-relaxed pr-8">
                        Not even close. Nowa is a tool that works *with* you—amplifying your parenting, not replacing it. It handles the gentle daily encouragement, so you can focus on what matters most: quality time and connection.
                    </div>
</details>
<details className="group border-b border-slate-200 py-5 cursor-pointer">
<summary className="flex items-center justify-between font-medium text-slate-900 outline-none select-none">
                        Is my child's data safe?
                        <iconify-icon className="transition-transform group-open:-rotate-180 text-slate-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="mt-4 text-slate-500 text-sm leading-relaxed pr-8">
                        Absolutely. Nowa operates in a closed ecosystem with no open internet access. We don't sell data, show ads, or use algorithms that could expose children to inappropriate content. All data is encrypted and stored securely.
                    </div>
</details>
<details className="group border-b border-slate-200 py-5 cursor-pointer">
<summary className="flex items-center justify-between font-medium text-slate-900 outline-none select-none">
                        How does the Parent App work?
                        <iconify-icon className="transition-transform group-open:-rotate-180 text-slate-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="mt-4 text-slate-500 text-sm leading-relaxed pr-8">
                        The Parent App is your mission control center. You can set custom routines, track your child's progress, get insights into their emotional state, and receive suggestions for family bonding activities.
                    </div>
</details>
<details className="group border-b border-slate-200 py-5 cursor-pointer">
<summary className="flex items-center justify-between font-medium text-slate-900 outline-none select-none">
                        Can multiple children use one Nowa device?
                        <iconify-icon className="transition-transform group-open:-rotate-180 text-slate-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="mt-4 text-slate-500 text-sm leading-relaxed pr-8">
                        Each Nowa device supports one child profile to ensure personalized growth tracking. With the Parent App, you only need one account to monitor multiple child profiles. For families with multiple children, we recommend one device per child.
                    </div>
</details>
<details className="group border-b border-slate-200 py-5 cursor-pointer">
<summary className="flex items-center justify-between font-medium text-slate-900 outline-none select-none">
                        What happens if my child misses a day?
                        <iconify-icon className="transition-transform group-open:-rotate-180 text-slate-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="mt-4 text-slate-500 text-sm leading-relaxed pr-8">
                        No problem! Missing a day won't 'kill' the pet or reset progress. The pet might be a bit sad, but it will encourage your child to get back on track. Streaks are fun motivators, not pressure points.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white" id="early-access">
<div className="max-w-5xl mx-auto bg-slate-900 rounded-[2.5rem] p-10 md:p-20 text-center text-white shadow-2xl relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent_50%)]"></div>
<div className="relative z-10">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tighter mb-6">
                    Join the inner circle of early adopters.
                </h2>
<p className="text-lg text-slate-400 mb-10 max-w-xl mx-auto">
                    Be the first to meet Nowa &amp; get up to <strong className="text-white font-semibold">41% OFF</strong> on launch!
                </p>
<form className="flex flex-col sm:flex-row w-full max-w-lg mx-auto gap-3 mb-10">
<input className="flex-1 px-5 py-3.5 rounded-xl border border-white/20 bg-white/5 text-white placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-white/30 transition-all" placeholder="Enter Email Address" required="" type="email"/>
<button className="px-8 py-3.5 bg-white text-slate-900 text-sm font-semibold tracking-wide rounded-xl hover:bg-slate-100 transition-colors whitespace-nowrap" type="submit">
                        Secure My Discount
                    </button>
</form>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-xs font-medium text-slate-400">
<span className="flex items-center gap-1.5"><iconify-icon className="text-base" icon="solar:gift-linear"></iconify-icon> Exclusive Habit Toolkit</span>
<span className="hidden sm:inline text-slate-600">•</span>
<span className="flex items-center gap-1.5"><iconify-icon className="text-base" icon="solar:gift-linear"></iconify-icon> 41% OFF Pricing</span>
<span className="hidden sm:inline text-slate-600">•</span>
<span className="flex items-center gap-1.5"><iconify-icon className="text-base" icon="solar:gift-linear"></iconify-icon> Exclusive Pet Species (First 500)</span>
</div>
</div>
</div>
</section>
<footer className="py-10 border-t border-slate-200/60 bg-slate-50 text-center">
<div className="max-w-6xl mx-auto px-6">
<div className="text-xl font-semibold tracking-tighter uppercase text-slate-900 mb-4">
                Nowa
            </div>
<p className="text-sm font-medium text-slate-500 mb-8">Give them a companion. Give yourself the peace.</p>
<p className="text-xs text-slate-400">© 2024 Nowa. All rights reserved.</p>
</div>
</footer>

    </>
  );
}
