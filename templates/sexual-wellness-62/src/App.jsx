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
      
<div className="min-h-screen flex flex-col">

<div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">

<section className="relative rounded-3xl bg-purple-800/70 shadow-xl border border-white/10 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-purple-700/70 via-purple-800/80 to-purple-900/90 pointer-events-none"></div>
<div className="relative flex flex-col lg:flex-row gap-8 lg:gap-10 px-4 sm:px-8 lg:px-12 py-8 sm:py-10 lg:py-12">

<div className="flex-1 flex flex-col gap-6">
<div className="inline-flex items-center gap-2 rounded-full bg-purple-900/70 border border-purple-300/30 px-3 sm:px-4 py-1">
<span className="inline-flex h-2 w-2 rounded-full bg-emerald-400"></span>
<p className="text-xs sm:text-sm font-medium tracking-tight text-emerald-100">
                New Service · Sexual wellness program
              </p>
</div>
<div className="space-y-3">
<h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-white">
                Reclaim confidence in your sexual wellness.
              </h1>
<p className="text-base sm:text-lg text-purple-100/90 max-w-xl leading-relaxed">
                Discreet, judgment‑free support to improve desire, performance, and intimacy—with licensed clinicians and science‑backed care tailored to you.
              </p>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="space-y-3 rounded-2xl bg-purple-900/60 border border-purple-300/20 p-4 sm:p-5">
<h2 className="text-sm sm:text-base font-medium tracking-tight text-white">
                  What you can get support with
                </h2>
<ul className="space-y-2">
<li className="flex items-start gap-3">
<span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-200">
<i className="w-3.5 h-3.5" data-lucide="heart" strokeWidth="1.5"></i>
</span>
<p className="text-sm sm:text-base text-purple-100">
                      Low desire, arousal, or difficulty reaching orgasm
                    </p>
</li>
<li className="flex items-start gap-3">
<span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-200">
<i className="w-3.5 h-3.5" data-lucide="sparkles" strokeWidth="1.5"></i>
</span>
<p className="text-sm sm:text-base text-purple-100">
                      Performance anxiety and confidence in the bedroom
                    </p>
</li>
<li className="flex items-start gap-3">
<span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-200">
<i className="w-3.5 h-3.5" data-lucide="infinity" strokeWidth="1.5"></i>
</span>
<p className="text-sm sm:text-base text-purple-100">
                      Pain during sex, hormonal shifts, and relationship stress
                    </p>
</li>
</ul>
</div>
<div className="space-y-3 rounded-2xl bg-purple-900/60 border border-purple-300/20 p-4 sm:p-5">
<h2 className="text-sm sm:text-base font-medium tracking-tight text-white">
                  How the program works
                </h2>
<ul className="space-y-2">
<li className="flex items-start gap-3">
<span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-200">
<i className="w-3.5 h-3.5" data-lucide="messages-square" strokeWidth="1.5"></i>
</span>
<p className="text-sm sm:text-base text-purple-100">
                      Private video visit with a licensed sexual wellness provider
                    </p>
</li>
<li className="flex items-start gap-3">
<span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-200">
<i className="w-3.5 h-3.5" data-lucide="stethoscope" strokeWidth="1.5"></i>
</span>
<p className="text-sm sm:text-base text-purple-100">
                      Personalized treatment plan, therapy tools, and medication when appropriate
                    </p>
</li>
<li className="flex items-start gap-3">
<span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-200">
<i className="w-3.5 h-3.5" data-lucide="shield-check" strokeWidth="1.5"></i>
</span>
<p className="text-sm sm:text-base text-purple-100">
                      Ongoing, discreet messaging with your care team for real‑time support
                    </p>
</li>
</ul>
</div>
</div>

<div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
<div className="inline-flex items-center gap-2 rounded-full bg-purple-950/80 border border-purple-300/20 px-3 py-1.5">
<i className="w-4 h-4 text-purple-100" data-lucide="lock" strokeWidth="1.5"></i>
<p className="text-xs sm:text-sm text-purple-100">
                  100% confidential · Clinically guided care · Available in select states
                </p>
</div>
</div>
</div>

<div className="w-full lg:w-80 xl:w-96 flex flex-col gap-4">

<div className="relative rounded-3xl overflow-hidden border border-purple-200/30 bg-purple-900/70 shadow-lg">
<div className="aspect-[4/3] sm:aspect-[5/4] bg-gradient-to-br from-purple-500 via-pink-400 to-red-400">
<div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
<p className="text-sm sm:text-base font-medium tracking-tight text-white">
                    Feel connected to your body, your pleasure, and your partner again.
                  </p>
<p className="mt-1 text-xs sm:text-sm text-purple-100/90 max-w-xs">
                    Our team combines medical expertise with trauma‑informed, affirming care.
                  </p>
</div>
</div>
</div>

<div className="rounded-3xl bg-purple-900/80 border border-purple-200/30 shadow-lg p-4 sm:p-5 space-y-4">
<div className="flex items-center gap-3">
<div className="h-12 w-12 rounded-full bg-gradient-to-br from-purple-300 to-pink-300 border border-white/40"></div>
<div>
<p className="text-sm sm:text-base font-medium tracking-tight text-white">
                    Lead Sexual Wellness Clinician
                  </p>
<p className="text-xs sm:text-sm text-purple-100/80">
                    Board‑certified, 10+ years of experience in intimacy and hormones.
                  </p>
</div>
</div>
<div className="grid grid-cols-2 gap-3 text-xs sm:text-sm">
<div className="rounded-2xl bg-purple-950/80 border border-purple-200/30 p-3 space-y-1.5">
<p className="text-xs font-medium tracking-tight text-purple-100 uppercase">
                    Avg. patient rating
                  </p>
<div className="flex items-center gap-1.5">
<span className="text-base font-semibold text-white">4.9</span>
<div className="flex items-center gap-0.5 text-amber-300">
<i className="w-3.5 h-3.5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-3.5 h-3.5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-3.5 h-3.5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-3.5 h-3.5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-3.5 h-3.5" data-lucide="star-half" strokeWidth="1.5"></i>
</div>
</div>
<p className="text-xs text-purple-100/80">
                    From over 2,000 virtual visits.
                  </p>
</div>
<div className="rounded-2xl bg-purple-950/80 border border-purple-200/30 p-3 space-y-1.5">
<p className="text-xs font-medium tracking-tight text-purple-100 uppercase">
                    Time to first plan
                  </p>
<p className="text-base font-semibold text-white">
                    Under 48 hours
                  </p>
<p className="text-xs text-purple-100/80">
                    Many patients receive initial guidance within one day.
                  </p>
</div>
</div>
<button className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-emerald-400 hover:bg-emerald-300 text-sm sm:text-base font-medium tracking-tight text-purple-950 transition-colors py-2.5">
<i className="w-4 h-4" data-lucide="calendar-clock" strokeWidth="1.5"></i>
                Book a private consultation
              </button>
<p className="text-[0.7rem] sm:text-xs text-purple-100/80 text-center">
                No in‑person exams required. You can pause or cancel at any time.
              </p>
</div>
</div>
</div>
</section>

<section className="mt-8 sm:mt-10 lg:mt-12 space-y-6">
<div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
<div>
<h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-white">
              Choose the support that fits you best.
            </h2>
<p className="text-sm sm:text-base text-purple-100/90 max-w-xl mt-1">
              All plans include secure messaging with your clinician, personalized recommendations, and ongoing check‑ins.
            </p>
</div>
<div className="inline-flex items-center gap-2 rounded-full bg-purple-900/70 border border-purple-300/30 px-3 py-1.5">
<i className="w-4 h-4 text-emerald-300" data-lucide="sparkles" strokeWidth="1.5"></i>
<p className="text-xs sm:text-sm text-purple-100">
              Sexual wellness plans are separate from weight loss programs.
            </p>
</div>
</div>
<div className="grid gap-4 lg:gap-6 grid-cols-1 lg:grid-cols-3">

<article className="flex flex-col rounded-3xl bg-purple-900/80 border border-purple-200/30 p-4 sm:p-5 lg:p-6 shadow-lg">
<div className="flex items-center justify-between gap-3">
<p className="text-sm sm:text-base font-medium tracking-tight text-white">
                Foundations Visit
              </p>
<span className="inline-flex items-center rounded-full bg-purple-950/80 px-2.5 py-1">
<p className="text-xs text-purple-100">Best for first‑timers</p>
</span>
</div>
<p className="mt-2 text-sm sm:text-base text-purple-100/90">
              One‑time deep‑dive visit to understand your history and build a clear action plan.
            </p>
<div className="mt-4 flex items-baseline gap-1">
<p className="text-2xl font-semibold tracking-tight text-white">
                $129
              </p>
<p className="text-xs sm:text-sm text-purple-100/80">
                single visit
              </p>
</div>
<ul className="mt-4 space-y-2 text-sm sm:text-base text-purple-100">
<li className="flex items-start gap-2.5">
<i className="w-4 h-4 text-emerald-300" data-lucide="check" strokeWidth="1.5"></i>
<span>60‑minute private video visit with a clinician.</span>
</li>
<li className="flex items-start gap-2.5">
<i className="w-4 h-4 text-emerald-300" data-lucide="check" strokeWidth="1.5"></i>
<span>Action plan covering desire, arousal, and relationship goals.</span>
</li>
<li className="flex items-start gap-2.5">
<i className="w-4 h-4 text-emerald-300" data-lucide="check" strokeWidth="1.5"></i>
<span>Follow‑up note summarizing key recommendations.</span>
</li>
</ul>
<button className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-white text-purple-900 hover:bg-purple-100 text-sm sm:text-base font-medium tracking-tight py-2.5 transition-colors">
              Get started with a visit
              <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
</article>

<article className="flex flex-col rounded-3xl bg-purple-900/90 border-2 border-emerald-300/80 p-4 sm:p-5 lg:p-6 shadow-xl relative overflow-hidden">
<div className="absolute inset-x-6 -top-5 flex justify-center">
<div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-400 text-purple-950 px-3 py-1 shadow-md">
<i className="w-3.5 h-3.5" data-lucide="sparkles" strokeWidth="1.5"></i>
<p className="text-xs font-medium tracking-tight">
                  Most popular
                </p>
</div>
</div>
<div className="pt-2">
<div className="flex items-center justify-between gap-3">
<p className="text-sm sm:text-base font-medium tracking-tight text-white">
                  Ongoing Sexual Wellness
                </p>
<span className="inline-flex items-center rounded-full bg-purple-950/80 px-2.5 py-1">
<p className="text-xs text-emerald-200">Includes medication review</p>
</span>
</div>
<p className="mt-2 text-sm sm:text-base text-purple-100/90">
                Monthly support for those who want to work on desire, performance, and intimacy over time.
              </p>
<div className="mt-4 flex items-baseline gap-1">
<p className="text-2xl font-semibold tracking-tight text-white">
                  $89
                </p>
<p className="text-xs sm:text-sm text-purple-100/80">
                  per month
                </p>
</div>
<ul className="mt-4 space-y-2 text-sm sm:text-base text-purple-100">
<li className="flex items-start gap-2.5">
<i className="w-4 h-4 text-emerald-300" data-lucide="check" strokeWidth="1.5"></i>
<span>Initial visit plus short video or audio check‑ins every month.</span>
</li>
<li className="flex items-start gap-2.5">
<i className="w-4 h-4 text-emerald-300" data-lucide="check" strokeWidth="1.5"></i>
<span>Secure messaging for questions about desire, medications, or side effects.</span>
</li>
<li className="flex items-start gap-2.5">
<i className="w-4 h-4 text-emerald-300" data-lucide="check" strokeWidth="1.5"></i>
<span>Access to guided exercises and intimacy‑building tools.</span>
</li>
<li className="flex items-start gap-2.5">
<i className="w-4 h-4 text-emerald-300" data-lucide="check" strokeWidth="1.5"></i>
<span>Medication options reviewed by your clinician when appropriate.</span>
</li>
</ul>
<button className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-emerald-400 hover:bg-emerald-300 text-sm sm:text-base font-medium tracking-tight text-purple-950 py-2.5 transition-colors w-full">
                Start my sexual wellness plan
                <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
</div>
</article>

<article className="flex flex-col rounded-3xl bg-purple-900/80 border border-purple-200/30 p-4 sm:p-5 lg:p-6 shadow-lg">
<div className="flex items-center justify-between gap-3">
<p className="text-sm sm:text-base font-medium tracking-tight text-white">
                Couples &amp; Connection
              </p>
<span className="inline-flex items-center rounded-full bg-purple-950/80 px-2.5 py-1">
<p className="text-xs text-purple-100">For partners</p>
</span>
</div>
<p className="mt-2 text-sm sm:text-base text-purple-100/90">
              Focused support for couples who want to feel more aligned, intimate, and understood.
            </p>
<div className="mt-4 flex items-baseline gap-1">
<p className="text-2xl font-semibold tracking-tight text-white">
                $169
              </p>
<p className="text-xs sm:text-sm text-purple-100/80">
                per session
              </p>
</div>
<ul className="mt-4 space-y-2 text-sm sm:text-base text-purple-100">
<li className="flex items-start gap-2.5">
<i className="w-4 h-4 text-emerald-300" data-lucide="check" strokeWidth="1.5"></i>
<span>Joint sessions with both partners and your clinician.</span>
</li>
<li className="flex items-start gap-2.5">
<i className="w-4 h-4 text-emerald-300" data-lucide="check" strokeWidth="1.5"></i>
<span>Communication tools to talk about desire, boundaries, and fantasies safely.</span>
</li>
<li className="flex items-start gap-2.5">
<i className="w-4 h-4 text-emerald-300" data-lucide="check" strokeWidth="1.5"></i>
<span>Homework exercises to reconnect outside of sessions.</span>
</li>
</ul>
<button className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-white text-purple-900 hover:bg-purple-100 text-sm sm:text-base font-medium tracking-tight py-2.5 transition-colors">
              Explore couples sessions
              <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
</article>
</div>
</section>

<section className="mt-8 sm:mt-10 lg:mt-12 space-y-4">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">

<div className="rounded-3xl bg-purple-900/80 border border-purple-200/30 p-4 sm:p-5 space-y-3">
<div className="inline-flex items-center gap-2 rounded-full bg-purple-950/90 px-3 py-1.5">
<i className="w-4 h-4 text-emerald-300" data-lucide="scales" strokeWidth="1.5"></i>
<p className="text-xs sm:text-sm text-purple-100">
                How this differs from weight loss care
              </p>
</div>
<p className="text-sm sm:text-base text-purple-100/90">
              Our sexual wellness program focuses on pleasure, intimacy, and comfort—not numbers on a scale.
            </p>
<ul className="space-y-2 text-xs sm:text-sm text-purple-100">
<li className="flex items-start gap-2.5">
<i className="w-3.5 h-3.5 text-purple-200" data-lucide="minus" strokeWidth="1.5"></i>
<span>No weigh‑ins or calorie tracking.</span>
</li>
<li className="flex items-start gap-2.5">
<i className="w-3.5 h-3.5 text-emerald-300" data-lucide="plus" strokeWidth="1.5"></i>
<span>Emphasis on body neutrality, self‑compassion, and curiosity.</span>
</li>
<li className="flex items-start gap-2.5">
<i className="w-3.5 h-3.5 text-emerald-300" data-lucide="plus" strokeWidth="1.5"></i>
<span>Education about hormones, stress, and relationships.</span>
</li>
</ul>
</div>

<div className="rounded-3xl bg-purple-900/80 border border-purple-200/30 p-4 sm:p-5 space-y-3">
<div className="inline-flex items-center gap-2 rounded-full bg-purple-950/90 px-3 py-1.5">
<i className="w-4 h-4 text-emerald-300" data-lucide="shield" strokeWidth="1.5"></i>
<p className="text-xs sm:text-sm text-purple-100">
                Safe, clinically guided care
              </p>
</div>
<p className="text-sm sm:text-base text-purple-100/90">
              Your care is grounded in sexual medicine guidelines and delivered by licensed experts.
            </p>
<ul className="space-y-2 text-xs sm:text-sm text-purple-100">
<li className="flex items-start gap-2.5">
<i className="w-3.5 h-3.5 text-emerald-300" data-lucide="check" strokeWidth="1.5"></i>
<span>Evidence‑based treatments for desire and arousal concerns.</span>
</li>
<li className="flex items-start gap-2.5">
<i className="w-3.5 h-3.5 text-emerald-300" data-lucide="check" strokeWidth="1.5"></i>
<span>Care plans that consider mood, trauma history, and medical conditions.</span>
</li>
<li className="flex items-start gap-2.5">
<i className="w-3.5 h-3.5 text-emerald-300" data-lucide="check" strokeWidth="1.5"></i>
<span>Medication only when clinically appropriate—never required.</span>
</li>
</ul>
</div>

<div className="rounded-3xl bg-purple-900/80 border border-purple-200/30 p-4 sm:p-5 space-y-3">
<div className="inline-flex items-center gap-2 rounded-full bg-purple-950/90 px-3 py-1.5">
<i className="w-4 h-4 text-emerald-300" data-lucide="hand-heart" strokeWidth="1.5"></i>
<p className="text-xs sm:text-sm text-purple-100">
                Inclusive, shame‑free space
              </p>
</div>
<p className="text-sm sm:text-base text-purple-100/90">
              Sexual wellness looks different for everyone. We meet you exactly where you are.
            </p>
<ul className="space-y-2 text-xs sm:text-sm text-purple-100">
<li className="flex items-start gap-2.5">
<i className="w-3.5 h-3.5 text-emerald-300" data-lucide="check" strokeWidth="1.5"></i>
<span>Support for individuals and couples of all genders and orientations.</span>
</li>
<li className="flex items-start gap-2.5">
<i className="w-3.5 h-3.5 text-emerald-300" data-lucide="check" strokeWidth="1.5"></i>
<span>No pressure to be sexually active; celibacy and asexual identities respected.</span>
</li>
<li className="flex items-start gap-2.5">
<i className="w-3.5 h-3.5 text-emerald-300" data-lucide="lock" strokeWidth="1.5"></i>
<span>Private, secure visits—your information stays between you and your care team.</span>
</li>
</ul>
</div>
</div>
</section>

<section className="mt-8 sm:mt-10 lg:mt-12 space-y-6">
<div className="text-center">
<h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-white">
            Real people, real intimacy wins.
          </h2>
<p className="mt-1 text-sm sm:text-base text-purple-100/90 max-w-2xl mx-auto">
            Names and details changed to protect privacy—but every story is real.
          </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">

<article className="rounded-3xl bg-purple-900/80 border border-purple-200/30 p-4 sm:p-5 space-y-3 flex flex-col">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-full bg-gradient-to-br from-purple-300 to-pink-300 border border-white/40"></div>
<div>
<p className="text-sm sm:text-base font-medium tracking-tight text-white">
                  “I stopped feeling broken.”
                </p>
<p className="text-xs sm:text-sm text-purple-100/80">
                  Age 34 · Individual care
                </p>
</div>
</div>
<p className="text-sm sm:text-base text-purple-100/90 leading-relaxed">
              After years of low desire, I thought something was wrong with me. My clinician helped me understand how stress, trauma, and hormones all played a role—and that there was nothing to be ashamed of. Now intimacy feels like a choice, not a chore.
            </p>
</article>

<article className="rounded-3xl bg-purple-900/80 border border-purple-200/30 overflow-hidden flex flex-col">
<div className="relative">
<div className="aspect-video bg-gradient-to-br from-purple-400 via-pink-400 to-red-400">
<div className="absolute inset-0 bg-black/30"></div>
<button className="absolute inset-0 flex items-center justify-center">
<span className="inline-flex items-center justify-center rounded-full bg-white/90 hover:bg-white text-purple-900 w-14 h-14 transition-colors">
<i className="w-5 h-5" data-lucide="play" strokeWidth="1.5"></i>
</span>
</button>
</div>
</div>
<div className="p-4 sm:p-5 space-y-2">
<p className="text-sm sm:text-base font-medium tracking-tight text-white">
                “We talk about sex without fighting now.”
              </p>
<p className="text-xs sm:text-sm text-purple-100/80">
                Age 41 &amp; 43 · Couple’s care
              </p>
<p className="text-sm sm:text-base text-purple-100/90 leading-relaxed">
                We used to shut down or argue every time intimacy came up. Having a neutral, knowledgeable person guide us made it feel safe to say what we really needed.
              </p>
</div>
</article>

<article className="rounded-3xl bg-purple-900/80 border border-purple-200/30 p-4 sm:p-5 space-y-3 flex flex-col">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-full bg-gradient-to-br from-purple-300 to-emerald-300 border border-white/40"></div>
<div>
<p className="text-sm sm:text-base font-medium tracking-tight text-white">
                  “Intimacy doesn’t feel scary anymore.”
                </p>
<p className="text-xs sm:text-sm text-purple-100/80">
                  Age 29 · Trauma‑informed track
                </p>
</div>
</div>
<p className="text-sm sm:text-base text-purple-100/90 leading-relaxed">
              My provider always asked for consent before discussing anything sensitive and moved at my pace. We focused on feeling safe in my own body first, which changed everything.
            </p>
</article>
</div>
</section>

<section className="mt-8 sm:mt-10 lg:mt-12">
<div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 rounded-full bg-purple-900/80 border border-purple-200/30 px-4 sm:px-6 py-3">
<div className="inline-flex items-center gap-2">
<i className="w-4 h-4 text-emerald-300" data-lucide="message-circle" strokeWidth="1.5"></i>
<p className="text-xs sm:text-sm text-purple-100">
              Unlimited secure messaging
            </p>
</div>
<span className="h-4 w-px bg-purple-400/40 hidden sm:inline-flex"></span>
<div className="inline-flex items-center gap-2">
<i className="w-4 h-4 text-emerald-300" data-lucide="shield-check" strokeWidth="1.5"></i>
<p className="text-xs sm:text-sm text-purple-100">
              Compliant virtual care
            </p>
</div>
<span className="h-4 w-px bg-purple-400/40 hidden sm:inline-flex"></span>
<div className="inline-flex items-center gap-2">
<i className="w-4 h-4 text-emerald-300" data-lucide="file-text" strokeWidth="1.5"></i>
<p className="text-xs sm:text-sm text-purple-100">
              Transparent, upfront pricing
            </p>
</div>
<span className="h-4 w-px bg-purple-400/40 hidden sm:inline-flex"></span>
<div className="inline-flex items-center gap-2">
<i className="w-4 h-4 text-emerald-300" data-lucide="badge-check" strokeWidth="1.5"></i>
<p className="text-xs sm:text-sm text-purple-100">
              Licensed clinicians only
            </p>
</div>
</div>

<div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-3xl bg-purple-950/90 border border-purple-200/30 px-4 sm:px-6 py-4 sm:py-5">
<div className="space-y-1">
<p className="text-sm sm:text-base font-medium tracking-tight text-white">
              Ready to explore sexual wellness on your terms?
            </p>
<p className="text-xs sm:text-sm text-purple-100/90">
              Answer a few private questions to see if our program is right for you. No commitment, no judgment.
            </p>
</div>
<button className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-400 hover:bg-emerald-300 text-sm sm:text-base font-medium tracking-tight text-purple-950 px-5 py-2.5 transition-colors">
            Take a 2‑minute intake quiz
            <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
</div>
<p className="mt-3 text-[0.7rem] sm:text-xs text-purple-100/80 text-center max-w-2xl mx-auto">
          This service is for educational and wellness support and is not a substitute for in‑person emergency care. Medication is only prescribed when clinically appropriate after a thorough evaluation.
        </p>
</section>

<section className="mt-10 sm:mt-12 lg:mt-16">
<div className="rounded-3xl bg-neutral-900/90 border border-white/10 shadow-2xl px-4 sm:px-8 lg:px-10 py-8 sm:py-10 lg:py-12 relative overflow-hidden">

<div className="pointer-events-none absolute inset-0 opacity-60">
<div className="absolute -top-24 -right-10 h-64 w-64 rounded-full bg-emerald-400/20 blur-3xl"></div>
<div className="absolute -bottom-24 -left-10 h-64 w-64 rounded-full bg-neutral-500/30 blur-3xl"></div>
</div>
<div className="relative grid grid-cols-1 lg:grid-cols-[1.1fr_minmax(0,1.05fr)] gap-8 lg:gap-10 items-center">

<div className="space-y-6">
<div className="inline-flex items-center gap-2 rounded-full bg-neutral-900/90 border border-white/15 px-3 sm:px-4 py-1.5 backdrop-blur">
<span className="inline-flex h-2 w-2 rounded-full bg-emerald-300"></span>
<p className="text-xs sm:text-sm font-medium tracking-tight text-neutral-50">
                  New · Clinical‑grade skincare
                </p>
</div>
<div className="space-y-3">
<h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-neutral-50">
                  High‑signal skin care.
                  <span className="text-emerald-300">Zero guesswork.</span>
</h2>
<p className="text-base sm:text-lg text-neutral-100/90 max-w-xl leading-relaxed">
                  Dermatology‑designed routines, prescription options, and real‑time guidance—built around your actual skin, not trends.
                </p>
</div>

<div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
<div className="rounded-2xl bg-neutral-900/90 border border-white/10 px-3 py-2.5 flex flex-col gap-0.5">
<p className="text-[0.65rem] sm:text-xs text-neutral-300 uppercase tracking-tight">
                    Time to plan
                  </p>
<p className="text-sm sm:text-base font-semibold tracking-tight text-neutral-50">
                    &lt; 48h
                  </p>
</div>
<div className="rounded-2xl bg-neutral-900/90 border border-white/10 px-3 py-2.5 flex flex-col gap-0.5">
<p className="text-[0.65rem] sm:text-xs text-neutral-300 uppercase tracking-tight">
                    Avg. rating
                  </p>
<div className="flex items-center gap-1.5">
<p className="text-sm sm:text-base font-semibold tracking-tight text-neutral-50">
                      4.9
                    </p>
<i className="w-3.5 h-3.5 text-amber-300 fill-current" data-lucide="star" strokeWidth="1.5"></i>
</div>
</div>
<div className="rounded-2xl bg-neutral-900/90 border border-white/10 px-3 py-2.5 flex flex-col gap-0.5">
<p className="text-[0.65rem] sm:text-xs text-neutral-300 uppercase tracking-tight">
                    Focus areas
                  </p>
<p className="text-sm sm:text-base font-semibold tracking-tight text-neutral-50">
                    Acne · Tone
                  </p>
</div>
<div className="rounded-2xl bg-neutral-900/90 border border-white/10 px-3 py-2.5 flex flex-col gap-0.5">
<p className="text-[0.65rem] sm:text-xs text-neutral-300 uppercase tracking-tight">
                    Support
                  </p>
<p className="text-sm sm:text-base font-semibold tracking-tight text-neutral-50">
                    Ongoing chat
                  </p>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
<div className="rounded-2xl bg-neutral-900/80 border border-white/10 p-3 sm:p-4 space-y-2">
<div className="inline-flex items-center gap-1.5 rounded-full bg-neutral-800/80 px-2 py-1">
<i className="w-3.5 h-3.5 text-emerald-300" data-lucide="sparkles" strokeWidth="1.5"></i>
<p className="text-[0.7rem] sm:text-xs text-neutral-100">
                      Acne &amp; texture
                    </p>
</div>
<p className="text-xs sm:text-sm text-neutral-100/90">
                    Breakout‑safe regimens that protect your barrier while clearing congestion.
                  </p>
</div>
<div className="rounded-2xl bg-neutral-900/80 border border-white/10 p-3 sm:p-4 space-y-2">
<div className="inline-flex items-center gap-1.5 rounded-full bg-neutral-800/80 px-2 py-1">
<i className="w-3.5 h-3.5 text-emerald-300" data-lucide="droplets" strokeWidth="1.5"></i>
<p className="text-[0.7rem] sm:text-xs text-neutral-100">
                      Tone &amp; glow
                    </p>
</div>
<p className="text-xs sm:text-sm text-neutral-100/90">
                    Brightening plans for dark spots, dullness, and uneven tone—with SPF habits built in.
                  </p>
</div>
<div className="rounded-2xl bg-neutral-900/80 border border-white/10 p-3 sm:p-4 space-y-2">
<div className="inline-flex items-center gap-1.5 rounded-full bg-neutral-800/80 px-2 py-1">
<i className="w-3.5 h-3.5 text-emerald-300" data-lucide="leaf" strokeWidth="1.5"></i>
<p className="text-[0.7rem] sm:text-xs text-neutral-100">
                      Sensitive &amp; barrier
                    </p>
</div>
<p className="text-xs sm:text-sm text-neutral-100/90">
                    Minimal, barrier‑repair protocols with slow, guided re‑introduction of actives.
                  </p>
</div>
</div>
<div className="flex flex-wrap items-center gap-4">
<button className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-400 hover:bg-emerald-300 text-sm sm:text-base font-medium tracking-tight text-neutral-900 px-5 py-2.5 transition-colors shadow-lg shadow-emerald-500/20">
                  Start my skin consultation
                  <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
<div className="flex items-center gap-2 text-xs sm:text-sm text-neutral-100/80">
<i className="w-4 h-4 text-emerald-300" data-lucide="camera" strokeWidth="1.5"></i>
<p>Upload 3 photos · No makeup required.</p>
</div>
</div>
</div>

<div className="space-y-4 lg:space-y-5">

<div className="relative rounded-3xl bg-gradient-to-br from-neutral-800/90 via-neutral-900/95 to-neutral-900/95 border border-white/10 overflow-hidden shadow-[0_24px_80px_rgba(0,0,0,0.55)]">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(209,250,229,0.16),transparent_55%),radial-gradient(circle_at_bottom_left,rgba(45,212,191,0.18),transparent_60%)]"></div>
<div className="relative flex flex-col gap-4 sm:gap-5 p-4 sm:p-5">

<div className="flex flex-wrap items-center gap-2">
<div className="inline-flex items-center gap-1.5 rounded-full bg-neutral-900/80 border border-white/15 px-2.5 py-1">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-300"></span>
<p className="text-[0.7rem] sm:text-xs text-neutral-100">
                        AM barrier‑safe
                      </p>
</div>
<div className="inline-flex items-center gap-1.5 rounded-full bg-neutral-900/80 border border-white/15 px-2.5 py-1">
<span className="h-1.5 w-1.5 rounded-full bg-sky-300"></span>
<p className="text-[0.7rem] sm:text-xs text-neutral-100">
                        PM resurfacing
                      </p>
</div>
<div className="inline-flex items-center gap-1.5 rounded-full bg-neutral-900/80 border border-white/15 px-2.5 py-1">
<i className="w-3.5 h-3.5 text-emerald-300" data-lucide="file-plus-2" strokeWidth="1.5"></i>
<p className="text-[0.7rem] sm:text-xs text-neutral-100">
                        Derm‑reviewed
                      </p>
</div>
</div>

<div className="grid grid-cols-[1.1fr_minmax(0,1.15fr)] gap-4 items-center">
<div className="flex justify-center">
<div className="relative h-28 w-20 sm:h-32 sm:w-24 rounded-3xl bg-gradient-to-b from-emerald-400 via-emerald-500 to-emerald-700 border border-white/40 shadow-xl shadow-emerald-500/50">
<div className="absolute inset-x-3 top-2 h-3 rounded-full bg-white/70"></div>
<div className="absolute inset-x-4 top-7 h-1.5 rounded-full bg-white/40"></div>
<div className="absolute inset-x-4 top-10 h-1 rounded-full bg-white/20"></div>
<div className="absolute inset-x-4 bottom-3 h-7 rounded-2xl bg-neutral-950/40 border border-white/20"></div>
</div>
</div>
<div className="space-y-3">
<div className="flex items-center justify-between gap-2">
<p className="text-sm sm:text-base font-medium tracking-tight text-neutral-50">
                          Clarity Routine · Example
                        </p>
<span className="inline-flex items-center gap-1.5 rounded-full bg-neutral-900/80 border border-emerald-300/60 px-2.5 py-1">
<i className="w-3.5 h-3.5 text-emerald-300" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<p className="text-[0.7rem] sm:text-xs text-neutral-100">
                            Active‑safe
                          </p>
</span>
</div>
<div className="space-y-1.5">
<div className="flex items-center justify-between text-[0.7rem] sm:text-xs text-neutral-200/90">
<p>Gentle gel cleanse</p>
<p className="text-neutral-400">·</p>
<p>Niacinamide + buffer</p>
<p className="text-neutral-400">·</p>
<p>SPF 50</p>
</div>
<div className="relative h-1.5 rounded-full bg-neutral-800 overflow-hidden">
<div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-emerald-400 via-emerald-300 to-emerald-500"></div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-2 gap-3 text-[0.7rem] sm:text-xs">
<div className="flex items-center justify-between rounded-2xl bg-neutral-900/80 border border-white/10 px-3 py-2">
<div className="flex items-center gap-1.5">
<i className="w-3.5 h-3.5 text-emerald-300" data-lucide="camera" strokeWidth="1.5"></i>
<p className="text-neutral-200">
                          Photo tracking
                        </p>
</div>
<p className="text-neutral-400">
                        Weekly
                      </p>
</div>
<div className="flex items-center justify-between rounded-2xl bg-neutral-900/80 border border-white/10 px-3 py-2">
<div className="flex items-center gap-1.5">
<i className="w-3.5 h-3.5 text-emerald-300" data-lucide="message-circle" strokeWidth="1.5"></i>
<p className="text-neutral-200">
                          Check‑ins
                        </p>
</div>
<p className="text-neutral-400">
                        As needed
                      </p>
</div>
</div>
</div>
</div>

<div className="rounded-3xl bg-neutral-900/95 border border-white/10 p-4 sm:p-5 space-y-3">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-full bg-gradient-to-br from-neutral-200 to-emerald-200 border border-white/50"></div>
<div className="flex-1">
<p className="text-sm sm:text-base font-medium tracking-tight text-neutral-50">
                      Dermatology‑led care
                    </p>
<p className="text-[0.7rem] sm:text-xs text-neutral-300/90">
                      Every plan is reviewed against clinical guidelines before it reaches you.
                    </p>
</div>
</div>
<div className="flex flex-wrap items-center gap-2">
<div className="inline-flex items-center gap-1.5 rounded-full bg-neutral-950/90 border border-white/10 px-2.5 py-1.5">
<i className="w-3.5 h-3.5 text-emerald-300" data-lucide="shield-check" strokeWidth="1.5"></i>
<p className="text-[0.7rem] sm:text-xs text-neutral-100">
                      Evidence‑based actives
                    </p>
</div>
<div className="inline-flex items-center gap-1.5 rounded-full bg-neutral-950/90 border border-white/10 px-2.5 py-1.5">
<i className="w-3.5 h-3.5 text-emerald-300" data-lucide="droplet" strokeWidth="1.5"></i>
<p className="text-[0.7rem] sm:text-xs text-neutral-100">
                      Fragrance‑conscious options
                    </p>
</div>
<div className="inline-flex items-center gap-1.5 rounded-full bg-neutral-950/90 border border-white/10 px-2.5 py-1.5">
<i className="w-3.5 h-3.5 text-emerald-300" data-lucide="file-lock-2" strokeWidth="1.5"></i>
<p className="text-[0.7rem] sm:text-xs text-neutral-100">
                      Secure photo storage
                    </p>
</div>
</div>
</div>
</div>
</div>

<div className="mt-8 sm:mt-10">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">

<article className="flex flex-col rounded-3xl bg-neutral-900/95 border border-white/10 p-4 sm:p-5 shadow-lg">
<p className="text-sm sm:text-base font-medium tracking-tight text-neutral-50">
                  Clarity Acne System
                </p>
<p className="mt-1 text-xs sm:text-sm text-neutral-300/90">
                  Calm breakouts without stripping your barrier.
                </p>
<div className="mt-4 rounded-2xl bg-neutral-950/90 border border-white/10 flex items-center justify-center py-6">
<div className="h-20 sm:h-24 w-10 sm:w-12 rounded-full bg-gradient-to-b from-emerald-400 via-emerald-500 to-emerald-700 border border-white/40 shadow-lg shadow-emerald-500/40"></div>
</div>
<div className="mt-4 flex items-baseline gap-1">
<p className="text-xl font-semibold tracking-tight text-neutral-50">
                    From $59
                  </p>
<p className="text-xs sm:text-sm text-neutral-300/80">
                    per month
                  </p>
</div>
<ul className="mt-3 space-y-1.5 text-xs sm:text-sm text-neutral-100">
<li className="flex items-start gap-2">
<i className="w-3.5 h-3.5 text-emerald-300" data-lucide="check" strokeWidth="1.5"></i>
<span>Prescription and non‑prescription options.</span>
</li>
<li className="flex items-start gap-2">
<i className="w-3.5 h-3.5 text-emerald-300" data-lucide="check" strokeWidth="1.5"></i>
<span>Simplified steps that work with your existing routine.</span>
</li>
</ul>
<button className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-neutral-50 text-neutral-900 hover:bg-neutral-200 text-sm sm:text-base font-medium tracking-tight py-2.5 transition-colors">
                  Get started
                  <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
</article>

<article className="flex flex-col rounded-3xl bg-neutral-900/95 border border-emerald-300/80 p-4 sm:p-5 shadow-xl relative overflow-hidden">
<div className="absolute inset-x-4 -top-4 flex justify-center">
<div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-400 text-neutral-900 px-3 py-1 shadow-md">
<i className="w-3.5 h-3.5" data-lucide="sparkles" strokeWidth="1.5"></i>
<p className="text-xs font-medium tracking-tight">
                      Most selected
                    </p>
</div>
</div>
<div className="pt-2">
<p className="text-sm sm:text-base font-medium tracking-tight text-neutral-50">
                    Radiance Even‑Tone System
                  </p>
<p className="mt-1 text-xs sm:text-sm text-neutral-300/90">
                    Fade dark spots and boost luminosity with gentle brightening.
                  </p>
<div className="mt-4 rounded-2xl bg-neutral-950/90 border border-white/10 flex items-center justify-center py-6">
<div className="flex items-end gap-4">
<div className="h-18 sm:h-20 w-9 sm:w-10 rounded-full bg-gradient-to-b from-emerald-300 to-emerald-500 border border-white/40"></div>
<div className="h-14 sm:h-16 w-8 sm:w-9 rounded-xl bg-gradient-to-b from-neutral-100 to-neutral-300 border border-white/40"></div>
</div>
</div>
<div className="mt-4 flex items-baseline gap-1">
<p className="text-xl font-semibold tracking-tight text-neutral-50">
                      From $79
                    </p>
<p className="text-xs sm:text-sm text-neutral-300/80">
                      per month
                    </p>
</div>
<ul className="mt-3 space-y-1.5 text-xs sm:text-sm text-neutral-100">
<li className="flex items-start gap-2">
<i className="w-3.5 h-3.5 text-emerald-300" data-lucide="check" strokeWidth="1.5"></i>
<span>Niacinamide, azelaic, or retinoid‑based plans, tuned to tolerance.</span>
</li>
<li className="flex items-start gap-2">
<i className="w-3.5 h-3.5 text-emerald-300" data-lucide="check" strokeWidth="1.5"></i>
<span>Seasonal adjustments for sun and climate changes.</span>
</li>
</ul>
<button className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-emerald-400 hover:bg-emerald-300 text-sm sm:text-base font-medium tracking-tight text-neutral-900 py-2.5 transition-colors w-full">
                    Design my brightening plan
                    <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
</div>
</article>

<article className="flex flex-col rounded-3xl bg-neutral-900/95 border border-white/10 p-4 sm:p-5 shadow-lg">
<p className="text-sm sm:text-base font-medium tracking-tight text-neutral-50">
                  Barrier Repair Protocol
                </p>
<p className="mt-1 text-xs sm:text-sm text-neutral-300/90">
                  Reset irritated, over‑treated, or reactive skin.
                </p>
<div className="mt-4 rounded-2xl bg-neutral-950/90 border border-white/10 flex items-center justify-center py-6">
<div className="h-18 sm:h-20 w-9 sm:w-10 rounded-full bg-gradient-to-b from-neutral-200 to-emerald-200 border border-white/40"></div>
</div>
<div className="mt-4 flex items-baseline gap-1">
<p className="text-xl font-semibold tracking-tight text-neutral-50">
                    From $69
                  </p>
<p className="text-xs sm:text-sm text-neutral-300/80">
                    per month
                  </p>
</div>
<ul className="mt-3 space-y-1.5 text-xs sm:text-sm text-neutral-100">
<li className="flex items-start gap-2">
<i className="w-3.5 h-3.5 text-emerald-300" data-lucide="check" strokeWidth="1.5"></i>
<span>Low‑step, barrier‑supportive ingredients only.</span>
</li>
<li className="flex items-start gap-2">
<i className="w-3.5 h-3.5 text-emerald-300" data-lucide="check" strokeWidth="1.5"></i>
<span>Gradual re‑introduction of actives when your skin is ready.</span>
</li>
</ul>
<button className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-neutral-50 text-neutral-900 hover:bg-neutral-200 text-sm sm:text-base font-medium tracking-tight py-2.5 transition-colors">
                  Repair my barrier
                  <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
</article>
</div>
</div>

<div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4 rounded-full bg-neutral-900/95 border border-white/10 px-4 sm:px-6 py-3">
<div className="inline-flex items-center gap-2">
<i className="w-4 h-4 text-emerald-300" data-lucide="message-circle" strokeWidth="1.5"></i>
<p className="text-xs sm:text-sm text-neutral-100">
                Unlimited provider messaging
              </p>
</div>
<span className="hidden sm:inline-flex h-4 w-px bg-neutral-500/60"></span>
<div className="inline-flex items-center gap-2">
<i className="w-4 h-4 text-emerald-300" data-lucide="shield-check" strokeWidth="1.5"></i>
<p className="text-xs sm:text-sm text-neutral-100">
                Dermatology‑led protocols
              </p>
</div>
<span className="hidden sm:inline-flex h-4 w-px bg-neutral-500/60"></span>
<div className="inline-flex items-center gap-2">
<i className="w-4 h-4 text-emerald-300" data-lucide="file-lock-2" strokeWidth="1.5"></i>
<p className="text-xs sm:text-sm text-neutral-100">
                Private photo storage
              </p>
</div>
<span className="hidden sm:inline-flex h-4 w-px bg-neutral-500/60"></span>
<div className="inline-flex items-center gap-2">
<i className="w-4 h-4 text-emerald-300" data-lucide="circle-off" strokeWidth="1.5"></i>
<p className="text-xs sm:text-sm text-neutral-100">
                No surprise subscriptions
              </p>
</div>
</div>

<div className="mt-8 sm:mt-10">
<div className="text-center mb-4 sm:mb-5">
<h3 className="text-lg sm:text-xl font-semibold tracking-tight text-neutral-50">
                Real people, real skin transformations.
              </h3>
<p className="mt-1 text-sm sm:text-base text-neutral-200/90 max-w-2xl mx-auto">
                Photos shared with consent. Results vary, but consistent, gentle routines win every time.
              </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.1fr)] gap-4 lg:gap-6 items-stretch">
<article className="rounded-3xl bg-neutral-900/95 border border-white/10 p-4 sm:p-5 flex flex-col gap-3">
<div className="flex items-center gap-3">
<div className="h-12 w-12 rounded-full bg-gradient-to-br from-neutral-200 to-emerald-200 border border-white/60"></div>
<div>
<p className="text-sm sm:text-base font-medium tracking-tight text-neutral-50">
                      “My acne finally feels under control.”
                    </p>
<p className="text-xs sm:text-sm text-neutral-200/80">
                      Age 27 · Clarity Acne System
                    </p>
</div>
</div>
<p className="text-sm sm:text-base text-neutral-100/90 leading-relaxed">
                  I had tried every over‑the‑counter product I could find. Having a dermatologist simplify my routine—and explain why—made all the difference.
                </p>
</article>
<article className="rounded-3xl bg-neutral-900/95 border border-white/10 overflow-hidden flex flex-col">
<div className="relative">
<div className="aspect-[16/9] bg-gradient-to-r from-neutral-700 via-neutral-600 to-emerald-500">
<div className="absolute inset-0 bg-black/30"></div>
<button className="absolute inset-0 flex items-center justify-center">
<span className="inline-flex items-center justify-center rounded-full bg-neutral-50/90 hover:bg-neutral-50 text-neutral-900 w-14 h-14 transition-colors">
<i className="w-5 h-5" data-lucide="play" strokeWidth="1.5"></i>
</span>
</button>
</div>
</div>
<div className="p-4 sm:p-5 space-y-2">
<p className="text-sm sm:text-base font-medium tracking-tight text-neutral-50">
                    “My melasma patches faded more than I expected.”
                  </p>
<p className="text-xs sm:text-sm text-neutral-200/80">
                    Age 39 · Radiance Even‑Tone System
                  </p>
<p className="text-sm sm:text-base text-neutral-100/90 leading-relaxed">
                    Slow, guided adjustments and side‑by‑side photos helped me actually see my progress.
                  </p>
</div>
</article>
</div>
<p className="mt-3 text-[0.7rem] sm:text-xs text-neutral-300/80 text-center max-w-2xl mx-auto">
              Treatment options, including prescription medications, are only used when clinically appropriate after a full remote evaluation. Example routines, not guaranteed outcomes.
            </p>
</div>
</div>
</section>
</div>
</div>


    </>
  );
}
