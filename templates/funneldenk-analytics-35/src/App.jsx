import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    // Screen switcher for demo
    const buttons = document.querySelectorAll('.screen-btn');
    const screens = document.querySelectorAll('.screen');

    function showScreen(id) {
      screens.forEach(s => {
        if (s.id === 'screen-' + id) {
          s.classList.remove('hidden');
        } else {
          s.classList.add('hidden');
        }
      });
      buttons.forEach(b => {
        if (b.dataset.screen === id) {
          b.classList.add('bg-slate-900','text-slate-50');
          b.classList.remove('border-transparent');
        } else {
          b.classList.remove('bg-slate-900','text-slate-50');
        }
      });
    }

    buttons.forEach(btn => {
      btn.addEventListener('click', () => showScreen(btn.dataset.screen));
    });

    // Back buttons and clickable insight cards
    document.querySelectorAll('[data-screen]').forEach(el => {
      if (!el.classList.contains('screen-btn')) {
        el.addEventListener('click', () => showScreen(el.dataset.screen));
      }
    });

    document.querySelectorAll('[data-screen-target]').forEach(card => {
      card.addEventListener('click', () => {
        showScreen(card.dataset.screenTarget);
      });
    });

    // Default screen
    showScreen('dashboard');

    // Copy script button
    const copyBtn = document.getElementById('copy-script');
    if (copyBtn) {
      copyBtn.addEventListener('click', async () => {
        const code = document.getElementById('script-code').innerText;
        try {
          await navigator.clipboard.writeText(code);
          copyBtn.classList.add('bg-emerald-600');
          copyBtn.classList.remove('bg-slate-800');
          copyBtn.querySelector('span').textContent = 'Copied';
          setTimeout(() => {
            copyBtn.classList.remove('bg-emerald-600');
            copyBtn.classList.add('bg-slate-800');
            copyBtn.querySelector('span').textContent = 'Copy script';
          }, 1800);
        } catch (e) {
          console.warn('Copy failed', e);
        }
      });
    }
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="min-h-screen flex flex-col">

<header className="border-b border-slate-200 bg-white/80 backdrop-blur">
<div className="mx-auto max-w-6xl flex items-center justify-between gap-4 py-4 px-4 md:px-6">
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-lg bg-indigo-600 flex items-center justify-center">
<span className="text-xs font-semibold tracking-tight text-white">FD</span>
</div>
<div className="flex flex-col">
<span className="text-base md:text-lg font-semibold tracking-tight text-slate-900">FunnelDenk</span>
<span className="text-xs md:text-sm text-slate-500">Privacy-first website insights</span>
</div>
</div>

<nav className="flex items-center gap-2 text-xs md:text-sm">
<button className="screen-btn rounded-full border border-transparent px-3 py-1.5 md:px-4 md:py-2 text-slate-600 hover:text-slate-900 hover:bg-slate-50" data-screen="dashboard">Dashboard</button>
<button className="screen-btn rounded-full border border-transparent px-3 py-1.5 md:px-4 md:py-2 text-slate-600 hover:text-slate-900 hover:bg-slate-50" data-screen="insight-detail">Insight detail</button>
<button className="screen-btn rounded-full border border-transparent px-3 py-1.5 md:px-4 md:py-2 text-slate-600 hover:text-slate-900 hover:bg-slate-50" data-screen="weekly-summary">Weekly summary</button>
<button className="screen-btn rounded-full border border-transparent px-3 py-1.5 md:px-4 md:py-2 text-slate-600 hover:text-slate-900 hover:bg-slate-50" data-screen="add-website">Add website</button>
<button className="screen-btn rounded-full border border-transparent px-3 py-1.5 md:px-4 md:py-2 text-slate-600 hover:text-slate-900 hover:bg-slate-50" data-screen="script-install">Install script</button>
</nav>
</div>
</header>
<main className="flex-1">
<div className="mx-auto max-w-6xl py-6 md:py-10 px-4 md:px-6 space-y-8 md:space-y-10">

<section className="screen space-y-8 md:space-y-10" id="screen-dashboard">

<div className="flex flex-col gap-3 md:flex-row md:items-baseline md:justify-between">
<div>
<div className="flex items-center gap-2 text-xs md:text-sm text-slate-500">
<span className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-slate-50 px-2 py-1">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  Connected
                </span>
<span className="text-slate-400">•</span>
<span>mywebsite.com</span>
</div>
<div className="mt-2">
<h1 className="text-lg md:text-2xl font-semibold tracking-tight text-slate-900">Overview</h1>
<p className="mt-1 text-sm md:text-base text-slate-500">Insights for the last 7 days</p>
</div>
</div>
<div className="flex items-center gap-3 text-xs md:text-sm text-slate-500">
<button className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1.5 hover:bg-slate-50">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
<span>Site health: steady</span>
</button>
</div>
</div>

<div className="grid gap-4 md:gap-5 md:grid-cols-3">

<div className="rounded-2xl border border-slate-200 bg-white shadow-sm/50 shadow-slate-900/5 p-4 md:p-5 flex flex-col gap-3">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="h-7 w-7 rounded-full bg-indigo-50 flex items-center justify-center">
<iconify-icon icon="solar:chart-square-linear" style={{fontSize: '1.1rem', color: '#4f46e5', strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="text-xs md:text-sm font-medium text-slate-700">Total visits</span>
</div>
<span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-1 text-xs text-emerald-700">
<iconify-icon icon="solar:arrow-up-linear" style={{fontSize: '0.9rem', strokeWidth: '1.5'}}></iconify-icon>
<span>+12%</span>
</span>
</div>
<div>
<p className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">3,420</p>
<p className="mt-1 text-xs md:text-sm text-slate-500">A gentle increase compared to the previous week.</p>
</div>
</div>

<div className="rounded-2xl border border-slate-200 bg-white shadow-sm/50 shadow-slate-900/5 p-4 md:p-5 flex flex-col gap-3">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="h-7 w-7 rounded-full bg-indigo-50 flex items-center justify-center">
<iconify-icon icon="solar:heart-pulse-2-linear" style={{fontSize: '1.1rem', color: '#4f46e5', strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="text-xs md:text-sm font-medium text-slate-700">Engagement health</span>
</div>
<span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-2 py-1 text-xs text-amber-800">
<span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
<span>Medium</span>
</span>
</div>
<div>
<p className="text-sm md:text-base text-slate-600">Visitors skim most pages but a smaller group reads in depth.</p>
<p className="mt-1 text-xs md:text-sm text-slate-500">Improving key page clarity could raise this to high.</p>
</div>
</div>

<div className="rounded-2xl border border-slate-200 bg-white shadow-sm/50 shadow-slate-900/5 p-4 md:p-5 flex flex-col gap-3">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="h-7 w-7 rounded-full bg-indigo-50 flex items-center justify-center">
<iconify-icon icon="solar:device-mobile-linear" style={{fontSize: '1.1rem', color: '#4f46e5', strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="text-xs md:text-sm font-medium text-slate-700">Primary device</span>
</div>
</div>
<div>
<p className="text-lg md:text-xl font-semibold tracking-tight text-slate-900">Mobile • 67%</p>
<p className="mt-1 text-xs md:text-sm text-slate-500">Most visitors experience your site on smaller screens.</p>
</div>
</div>
</div>

<section className="space-y-4 md:space-y-5">
<div className="flex flex-col gap-1">
<h2 className="text-base md:text-lg font-semibold tracking-tight text-slate-900">What’s happening on your site</h2>
<p className="text-sm md:text-base text-slate-500">Plain-language observations based on the last 7 days.</p>
</div>
<div className="space-y-3 md:space-y-4">

<article className="group rounded-2xl border border-slate-200 bg-white shadow-sm/50 shadow-slate-900/5 p-4 md:p-5 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-md/60 cursor-pointer" data-screen-target="insight-detail">
<div className="flex items-start justify-between gap-3">
<div className="space-y-1.5">
<div className="flex items-center gap-2">
<span className="text-sm md:text-base font-medium text-slate-900">Mobile visitors stop reading near the pricing section</span>
<span className="inline-flex items-center rounded-full bg-rose-50 px-2 py-0.5 text-[0.7rem] md:text-xs font-medium text-rose-700 border border-rose-100">High</span>
</div>
<p className="text-xs md:text-sm text-slate-600">Mobile visitors frequently reach your pricing section but fewer continue to the final call to action.</p>
<p className="text-xs md:text-sm text-slate-500">Consider moving the main button closer to where pricing is first explained.</p>
</div>
<iconify-icon className="mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-150" icon="solar:alt-arrow-right-linear" style={{fontSize: '1.1rem', color: '#9ca3af', strokeWidth: '1.5'}}></iconify-icon>
</div>
</article>

<article className="group rounded-2xl border border-slate-200 bg-white shadow-sm/50 shadow-slate-900/5 p-4 md:p-5 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-md/60 cursor-pointer" data-screen-target="insight-detail">
<div className="flex items-start justify-between gap-3">
<div className="space-y-1.5">
<div className="flex items-center gap-2">
<span className="text-sm md:text-base font-medium text-slate-900">Homepage visitors often stop after the hero section</span>
<span className="inline-flex items-center rounded-full bg-amber-50 px-2 py-0.5 text-[0.7rem] md:text-xs font-medium text-amber-800 border border-amber-100">Medium</span>
</div>
<p className="text-xs md:text-sm text-slate-600">Many visitors read the opening message but do not explore the rest of the page content.</p>
<p className="text-xs md:text-sm text-slate-500">You might test a clearer next step just below your main message.</p>
</div>
<iconify-icon className="mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-150" icon="solar:alt-arrow-right-linear" style={{fontSize: '1.1rem', color: '#9ca3af', strokeWidth: '1.5'}}></iconify-icon>
</div>
</article>

<article className="group rounded-2xl border border-slate-200 bg-white shadow-sm/50 shadow-slate-900/5 p-4 md:p-5 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-md/60 cursor-pointer" data-screen-target="insight-detail">
<div className="flex items-start justify-between gap-3">
<div className="space-y-1.5">
<div className="flex items-center gap-2">
<span className="text-sm md:text-base font-medium text-slate-900">Returning visitors often head straight to your pricing</span>
<span className="inline-flex items-center rounded-full bg-sky-50 px-2 py-0.5 text-[0.7rem] md:text-xs font-medium text-sky-800 border border-sky-100">Info</span>
</div>
<p className="text-xs md:text-sm text-slate-600">People who have been to your site before now spend more time comparing plans.</p>
<p className="text-xs md:text-sm text-slate-500">It may help to highlight plan differences in a short, clear sentence.</p>
</div>
<iconify-icon className="mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-150" icon="solar:alt-arrow-right-linear" style={{fontSize: '1.1rem', color: '#9ca3af', strokeWidth: '1.5'}}></iconify-icon>
</div>
</article>

<article className="group rounded-2xl border border-slate-200 bg-white shadow-sm/50 shadow-slate-900/5 p-4 md:p-5 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-md/60 cursor-pointer" data-screen-target="insight-detail">
<div className="flex items-start justify-between gap-3">
<div className="space-y-1.5">
<div className="flex items-center gap-2">
<span className="text-sm md:text-base font-medium text-slate-900">Visitors from social posts skim faster than others</span>
<span className="inline-flex items-center rounded-full bg-amber-50 px-2 py-0.5 text-[0.7rem] md:text-xs font-medium text-amber-800 border border-amber-100">Medium</span>
</div>
<p className="text-xs md:text-sm text-slate-600">People arriving from social links scroll quickly and often miss deeper explanations.</p>
<p className="text-xs md:text-sm text-slate-500">You could add a brief summary near the top that works even for quick readers.</p>
</div>
<iconify-icon className="mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-150" icon="solar:alt-arrow-right-linear" style={{fontSize: '1.1rem', color: '#9ca3af', strokeWidth: '1.5'}}></iconify-icon>
</div>
</article>
</div>
</section>

<section className="space-y-4 md:space-y-5">
<div className="flex flex-col gap-1">
<h2 className="text-base md:text-lg font-semibold tracking-tight text-slate-900">What you can improve next</h2>
<p className="text-sm md:text-base text-slate-500">A few gentle suggestions based on this week’s patterns.</p>
</div>
<div className="rounded-2xl border border-slate-200 bg-white shadow-sm/50 shadow-slate-900/5 p-4 md:p-5 space-y-3 md:space-y-3.5">

<div className="flex items-start gap-3">
<div className="mt-1 h-4 w-4 rounded border border-indigo-200 bg-indigo-50 flex items-center justify-center">
<span className="block h-2 w-2 rounded-sm bg-indigo-500"></span>
</div>
<div>
<p className="text-xs md:text-sm font-medium text-slate-900">Bring your main call to action closer to pricing on mobile.</p>
<p className="text-xs md:text-sm text-slate-500">Helps visitors act while the details are still fresh.</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="mt-1 h-4 w-4 rounded border border-slate-200 bg-slate-50"></div>
<div>
<p className="text-xs md:text-sm font-medium text-slate-900">Add a short “what happens next” note under your hero button.</p>
<p className="text-xs md:text-sm text-slate-500">Reduces hesitation for first-time visitors who are unsure about the next step.</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="mt-1 h-4 w-4 rounded border border-slate-200 bg-slate-50"></div>
<div>
<p className="text-xs md:text-sm font-medium text-slate-900">Clarify the difference between your main plans in one sentence.</p>
<p className="text-xs md:text-sm text-slate-500">Helps returning visitors make a quicker, more confident choice.</p>
</div>
</div>
</div>
</section>
</section>

<section className="screen hidden space-y-8 md:space-y-10" id="screen-insight-detail">

<div className="space-y-3">
<button className="inline-flex items-center gap-1.5 text-xs md:text-sm text-slate-500 hover:text-slate-700" data-screen="dashboard">
<iconify-icon icon="solar:alt-arrow-left-linear" style={{fontSize: '1rem', strokeWidth: '1.5'}}></iconify-icon>
<span>Back to insights</span>
</button>
<div className="space-y-1">
<h1 className="text-lg md:text-2xl font-semibold tracking-tight text-slate-900">Mobile visitors stop reading near the pricing section</h1>
<p className="text-sm md:text-base text-slate-500">Understanding why this happens and what you can gently adjust.</p>
</div>
</div>

<section className="rounded-2xl border border-indigo-100 bg-indigo-50/60 shadow-sm/50 shadow-slate-900/5 p-4 md:p-5">
<p className="text-sm md:text-base text-slate-800">
              Over the last 7 days, many mobile visitors reached your pricing section but fewer continued to the final call to action.
              This suggests that the step from “reading” to “acting” could be made smoother on smaller screens.
            </p>
</section>

<div className="grid gap-6 md:gap-8 md:grid-cols-2">

<section className="space-y-3 md:space-y-4">
<div>
<h2 className="text-base md:text-lg font-semibold tracking-tight text-slate-900">Why this might be happening</h2>
</div>
<div className="space-y-2.5 md:space-y-3">
<p className="text-sm md:text-base text-slate-600">
                  On mobile, your pricing details and primary button are separated by several scrolls, which can make it easy for people to pause and leave before taking the next step.
                </p>
<p className="text-sm md:text-base text-slate-600">
                  Visitors who reach pricing have already invested some attention, but they may still be comparing options or unsure what happens after clicking.
                </p>
<p className="text-sm md:text-base text-slate-600">
                  A small amount of friction at this point (extra text, layout shifts, or unclear copy) is often enough for visitors to postpone their decision.
                </p>
</div>
</section>

<section className="space-y-3 md:space-y-4">
<div>
<h2 className="text-base md:text-lg font-semibold tracking-tight text-slate-900">What we noticed</h2>
</div>
<div className="space-y-2.5">
<div className="flex items-start gap-2.5">
<span className="mt-1 h-1.5 w-1.5 rounded-full bg-indigo-500"></span>
<p className="text-sm md:text-base text-slate-600">
                    A clear majority of mobile visitors who see the pricing section do not interact with elements further down the page.
                  </p>
</div>
<div className="flex items-start gap-2.5">
<span className="mt-1 h-1.5 w-1.5 rounded-full bg-indigo-500"></span>
<p className="text-sm md:text-base text-slate-600">
                    People who do continue past pricing often do so quickly, suggesting that they already understand the options.
                  </p>
</div>
<div className="flex items-start gap-2.5">
<span className="mt-1 h-1.5 w-1.5 rounded-full bg-indigo-500"></span>
<p className="text-sm md:text-base text-slate-600">
                    Desktop visitors follow a smoother path from pricing to your main call to action, hinting that the layout works better on larger screens.
                  </p>
</div>
<div className="flex items-start gap-2.5">
<span className="mt-1 h-1.5 w-1.5 rounded-full bg-indigo-500"></span>
<p className="text-sm md:text-base text-slate-600">
                    This pattern has been consistent across several days, not just a single spike.
                  </p>
</div>
</div>
</section>
</div>

<section className="space-y-3 md:space-y-4">
<div className="flex items-center gap-2">
<h2 className="text-base md:text-lg font-semibold tracking-tight text-slate-900">What you can try</h2>
<span className="inline-flex items-center rounded-full bg-emerald-50 px-2 py-0.5 text-[0.7rem] md:text-xs font-medium text-emerald-700 border border-emerald-100">Gentle suggestions</span>
</div>
<div className="rounded-2xl border border-slate-200 bg-white shadow-sm/50 shadow-slate-900/5 p-4 md:p-5 space-y-3">
<div className="flex items-start gap-3">
<div className="mt-1 h-4 w-4 rounded border border-indigo-200 bg-indigo-50 flex items-center justify-center">
<span className="block h-2 w-2 rounded-sm bg-indigo-500"></span>
</div>
<div>
<p className="text-sm md:text-base font-medium text-slate-900">Move your main button closer to where pricing is first explained.</p>
<p className="text-xs md:text-sm text-slate-500">This keeps the next step visible at the moment visitors are most engaged.</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="mt-1 h-4 w-4 rounded border border-slate-200 bg-slate-50"></div>
<div>
<p className="text-sm md:text-base font-medium text-slate-900">Add a short “what happens after I click?” line near the button.</p>
<p className="text-xs md:text-sm text-slate-500">Clarifying the outcome can reduce hesitation for people who are undecided.</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="mt-1 h-4 w-4 rounded border border-slate-200 bg-slate-50"></div>
<div>
<p className="text-sm md:text-base font-medium text-slate-900">Check that pricing and key details are easy to read on a small screen.</p>
<p className="text-xs md:text-sm text-slate-500">Simple spacing and clear headings often make mobile decisions feel lighter.</p>
</div>
</div>
</div>
</section>

<footer className="border-t border-slate-200 pt-4">
<p className="text-xs md:text-sm text-slate-500">
              These insights are based on aggregated, anonymous behavior patterns. FunnelDenk does not use cookies, store personal data, or track individual people.
            </p>
</footer>
</section>

<section className="screen hidden space-y-8 md:space-y-10" id="screen-weekly-summary">

<div className="flex flex-col gap-3 md:flex-row md:items-baseline md:justify-between">
<div>
<h1 className="text-lg md:text-2xl font-semibold tracking-tight text-slate-900">Weekly Summary</h1>
<p className="text-sm md:text-base text-slate-500">Last 7 days overview</p>
</div>
<div className="flex items-center gap-3 text-xs md:text-sm text-slate-500">
<span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1.5">
<iconify-icon icon="solar:calendar-linear" style={{fontSize: '1rem', strokeWidth: '1.5'}}></iconify-icon>
<span>Jan 10 – Jan 16</span>
</span>
</div>
</div>

<section className="rounded-2xl border border-slate-200 bg-white shadow-sm/50 shadow-slate-900/5 p-4 md:p-5">
<p className="text-sm md:text-base text-slate-700">
              Traffic increased gently this week, mainly from mobile visitors, while overall engagement stayed steady.
              People who arrived from social posts skimmed quickly, but visitors who came directly to your site spent more time with pricing and product details.
            </p>
</section>

<div className="grid gap-6 md:grid-cols-2">

<section className="space-y-3 md:space-y-4">
<div className="flex items-center gap-2">
<h2 className="text-base md:text-lg font-semibold tracking-tight text-slate-900">What improved</h2>
<span className="inline-flex items-center rounded-full bg-emerald-50 px-2 py-0.5 text-[0.7rem] md:text-xs font-medium text-emerald-700 border border-emerald-100">Positive shifts</span>
</div>
<div className="rounded-2xl border border-emerald-100 bg-emerald-50/60 p-4 md:p-5 space-y-3">
<div className="flex items-start gap-2.5">
<iconify-icon className="mt-0.5" icon="solar:check-circle-linear" style={{fontSize: '1.1rem', color: '#047857', strokeWidth: '1.5'}}></iconify-icon>
<p className="text-sm md:text-base text-slate-700">
                    More visitors discovered your site through direct links and saved bookmarks.
                  </p>
</div>
<div className="flex items-start gap-2.5">
<iconify-icon className="mt-0.5" icon="solar:check-circle-linear" style={{fontSize: '1.1rem', color: '#047857', strokeWidth: '1.5'}}></iconify-icon>
<p className="text-sm md:text-base text-slate-700">
                    Mobile visitors spent slightly longer on your main product page.
                  </p>
</div>
<div className="flex items-start gap-2.5">
<iconify-icon className="mt-0.5" icon="solar:check-circle-linear" style={{fontSize: '1.1rem', color: '#047857', strokeWidth: '1.5'}}></iconify-icon>
<p className="text-sm md:text-base text-slate-700">
                    Returning visitors reached your pricing section more often than last week.
                  </p>
</div>
</div>
</section>

<section className="space-y-3 md:space-y-4">
<div className="flex items-center gap-2">
<h2 className="text-base md:text-lg font-semibold tracking-tight text-slate-900">What declined</h2>
<span className="inline-flex items-center rounded-full bg-slate-50 px-2 py-0.5 text-[0.7rem] md:text-xs font-medium text-slate-600 border border-slate-200">Worth noting</span>
</div>
<div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 md:p-5 space-y-3">
<div className="flex items-start gap-2.5">
<iconify-icon className="mt-0.5" icon="solar:minus-circle-linear" style={{fontSize: '1.1rem', color: '#6b7280', strokeWidth: '1.5'}}></iconify-icon>
<p className="text-sm md:text-base text-slate-700">
                    Fewer visitors scrolled through the full length of your homepage.
                  </p>
</div>
<div className="flex items-start gap-2.5">
<iconify-icon className="mt-0.5" icon="solar:minus-circle-linear" style={{fontSize: '1.1rem', color: '#6b7280', strokeWidth: '1.5'}}></iconify-icon>
<p className="text-sm md:text-base text-slate-700">
                    Social traffic grew slightly but tended to leave after reading only the first section.
                  </p>
</div>
<div className="flex items-start gap-2.5">
<iconify-icon className="mt-0.5" icon="solar:minus-circle-linear" style={{fontSize: '1.1rem', color: '#6b7280', strokeWidth: '1.5'}}></iconify-icon>
<p className="text-sm md:text-base text-slate-700">
                    Desktop activity was stable, with little change in deeper page views.
                  </p>
</div>
</div>
</section>
</div>

<section className="space-y-3 md:space-y-4">
<div className="flex items-center gap-2">
<h2 className="text-base md:text-lg font-semibold tracking-tight text-slate-900">What to focus on next</h2>
</div>
<div className="rounded-2xl border border-indigo-200 bg-indigo-50/70 shadow-sm/50 shadow-slate-900/5 p-4 md:p-5 flex flex-col md:flex-row md:items-start md:justify-between gap-4">
<div className="flex items-start gap-3">
<div className="mt-0.5 h-7 w-7 rounded-full bg-indigo-600 flex items-center justify-center">
<iconify-icon icon="solar:target-linear" style={{fontSize: '1.1rem', color: '#eef2ff', strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="space-y-1.5">
<p className="text-sm md:text-base font-medium text-slate-900">
                    Refine the first screen of your homepage for quick, mobile reading.
                  </p>
<p className="text-xs md:text-sm text-slate-700">
                    This week’s patterns show that many visitors decide whether to continue within the first few moments. A clearer main message, a visible next step, and a brief “who this is for” note near the top can help turn more of those quick visits into deeper interest.
                  </p>
</div>
</div>
</div>
</section>

<footer className="border-t border-slate-200 pt-4">
<p className="text-xs md:text-sm text-slate-500">
              All summaries are based on aggregated, anonymous patterns only. FunnelDenk does not use cookies, store personal data, or track individual people across sites.
            </p>
</footer>
</section>

<section className="screen hidden space-y-8 md:space-y-10" id="screen-add-website">

<div className="space-y-2">
<h1 className="text-lg md:text-2xl font-semibold tracking-tight text-slate-900">Add your website</h1>
<p className="text-sm md:text-base text-slate-500">We’ll start generating insights once your site is connected.</p>
</div>

<section className="rounded-2xl border border-slate-200 bg-white shadow-sm/50 shadow-slate-900/5 p-4 md:p-5">
<p className="text-sm md:text-base text-slate-700">
              FunnelDenk looks at anonymous activity across your pages to understand what is working and what feels confusing.
              It does not collect personal details, use cookies, or follow individual people. You get calm, privacy-friendly insights instead of raw tracking data.
            </p>
</section>

<section className="max-w-xl space-y-5">
<form className="space-y-4 md:space-y-5">
<div className="space-y-1.5">
<label className="block text-xs md:text-sm font-medium text-slate-800" htmlFor="site-name">Website name</label>
<input className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 md:px-4 md:py-2.5 text-sm md:text-base text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/70 focus:border-indigo-500/70" id="site-name" placeholder="e.g. My Product Landing Page" type="text"/>
<p className="text-xs md:text-sm text-slate-500">This is just for you. It won’t be shown to your visitors.</p>
</div>
<div className="space-y-1.5">
<label className="block text-xs md:text-sm font-medium text-slate-800" htmlFor="site-url">Website URL</label>
<input className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 md:px-4 md:py-2.5 text-sm md:text-base text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/70 focus:border-indigo-500/70" id="site-url" placeholder="https://mywebsite.com" type="url"/>
<p className="text-xs md:text-sm text-slate-500">Use the version visitors see, including https.</p>
</div>
<div className="pt-1">
<button className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-4 py-2.5 md:px-5 md:py-2.5 text-sm md:text-base font-medium text-white shadow-sm shadow-indigo-600/40 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500/70 focus:ring-offset-1 focus:ring-offset-slate-50" type="button">
                  Add website
                </button>
</div>
</form>
</section>

<footer className="border-t border-slate-200 pt-4">
<p className="text-xs md:text-sm text-slate-500">
              No cookies. No personal data. No user tracking. FunnelDenk works only with anonymous, aggregated information.
            </p>
</footer>
</section>

<section className="screen hidden space-y-8 md:space-y-10" id="screen-script-install">

<div className="space-y-2">
<h1 className="text-lg md:text-2xl font-semibold tracking-tight text-slate-900">Install FunnelDenk on your website</h1>
<p className="text-sm md:text-base text-slate-500">Add one small script to start receiving insights.</p>
</div>

<section className="grid gap-6 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
<div className="space-y-4 md:space-y-5">
<h2 className="text-base md:text-lg font-semibold tracking-tight text-slate-900">Quick steps</h2>
<ol className="space-y-3 md:space-y-3.5 text-sm md:text-base text-slate-700">
<li className="flex items-start gap-3">
<span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-indigo-600 text-xs font-medium text-white">1</span>
<span>Copy the script below.</span>
</li>
<li className="flex items-start gap-3">
<span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-indigo-600 text-xs font-medium text-white">2</span>
<span>Paste it into your site’s template just before the closing <code className="rounded bg-slate-100 px-1 text-xs"> &lt;/head&gt;</code> tag.</span>
</li>
<li className="flex items-start gap-3">
<span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-indigo-600 text-xs font-medium text-white">3</span>
<span>Publish or save your changes, then visit your site in a new browser tab.</span>
</li>
</ol>
</div>

<div className="space-y-3 md:space-y-4">
<h2 className="text-base md:text-lg font-semibold tracking-tight text-slate-900">Connection status</h2>

<div className="rounded-2xl border border-slate-200 bg-white shadow-sm/50 shadow-slate-900/5 p-4 md:p-5 flex items-start gap-3" id="status-waiting">
<div className="mt-0.5 h-7 w-7 rounded-full bg-slate-100 flex items-center justify-center">
<span className="h-2 w-2 rounded-full bg-amber-400"></span>
</div>
<div className="space-y-1">
<p className="text-sm md:text-base font-medium text-slate-900">Waiting for activity from your website…</p>
<p className="text-xs md:text-sm text-slate-600">
                    Once the script is installed and someone visits your site, this will update automatically.
                  </p>
</div>
</div>

<div className="hidden rounded-2xl border border-emerald-100 bg-emerald-50/70 shadow-sm/50 shadow-slate-900/5 p-4 md:p-5 flex items-start gap-3" id="status-receiving">
<div className="mt-0.5 h-7 w-7 rounded-full bg-emerald-600 flex items-center justify-center">
<span className="h-2 w-2 rounded-full bg-emerald-50"></span>
</div>
<div className="space-y-1">
<p className="text-sm md:text-base font-medium text-slate-900">We’re receiving data from your site.</p>
<p className="text-xs md:text-sm text-slate-700">
                    You’ll start seeing early insights within a short time as anonymous patterns emerge.
                  </p>
</div>
</div>

<div className="hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-sm/50 shadow-slate-900/5 p-4 md:p-5 flex items-start gap-3" id="status-no-activity">
<div className="mt-0.5 h-7 w-7 rounded-full bg-slate-200 flex items-center justify-center">
<span className="h-2 w-2 rounded-full bg-slate-400"></span>
</div>
<div className="space-y-1">
<p className="text-sm md:text-base font-medium text-slate-900">We haven’t detected activity yet.</p>
<p className="text-xs md:text-sm text-slate-600">
                    You might check that the script is placed before <code className="rounded bg-slate-100 px-1 text-[0.65rem] md:text-xs">&lt;/head&gt;</code> on the pages you want to measure.
                  </p>
</div>
</div>
</div>
</section>

<section className="space-y-3 md:space-y-4">
<div className="flex items-center justify-between gap-3">
<h2 className="text-base md:text-lg font-semibold tracking-tight text-slate-900">Your script</h2>
</div>
<div className="rounded-2xl border border-slate-200 bg-slate-950 text-slate-50 p-4 md:p-5 shadow-sm/50 shadow-slate-900/30">
<div className="flex items-center justify-between gap-3 mb-3">
<p className="text-xs md:text-sm text-slate-300">Copy and paste this snippet into your site.</p>
<button className="inline-flex items-center gap-1.5 rounded-lg bg-slate-800 px-3 py-1.5 text-xs md:text-sm font-medium text-slate-50 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500/70" id="copy-script" type="button">
<iconify-icon icon="solar:copy-linear" style={{fontSize: '1rem', strokeWidth: '1.5'}}></iconify-icon>
<span>Copy script</span>
</button>
</div>
<pre className="overflow-x-auto text-xs md:text-sm leading-relaxed"><code id="script-code">&lt;script async src="https://cdn.funneldenk.com/script.js" data-site="mywebsite.com"&gt;&lt;/script&gt;</code></pre>
</div>
</section>

<section className="space-y-2">
<h2 className="text-base md:text-lg font-semibold tracking-tight text-slate-900">What happens next</h2>
<p className="text-sm md:text-base text-slate-600 max-w-2xl">
              After the script is installed and visitors start arriving, FunnelDenk quietly observes anonymous patterns across your pages.
              Within a short time, you’ll see clear, plain-language insights on your dashboard—no complex charts or technical setup required.
            </p>
</section>
</section>
</div>
</main>
</div>


    </>
  );
}
