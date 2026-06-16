import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('reveal-active');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            const revealElements = document.querySelectorAll('.reveal-item');
            revealElements.forEach(el => observer.observe(el));
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed top-0 z-50 w-full bg-black text-white">
<div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-6 text-[10px] font-medium uppercase tracking-widest md:px-12">
<div className="flex items-center gap-4">
<span className="font-serif-display italic text-lg tracking-normal">The Bootcamp</span>
<span className="opacity-30">|</span>
<span>HYPE</span>
</div>
<span>Cohort 01 — Mar 2026</span>
</div>
</div>

<nav className="pointer-events-none fixed top-10 z-40 w-full px-6 pt-6 md:px-12">
<div className="pointer-events-auto flex items-start justify-between">
<div className="hidden md:block">

</div>
<a className="group flex items-center gap-2 rounded-full border border-stone-200 bg-white/80 px-6 py-2.5 text-xs font-semibold uppercase tracking-wide text-stone-900 shadow-sm backdrop-blur-md transition-all hover:border-purple-200 hover:bg-white hover:shadow-md hover:scale-105" href="#pricing">
                Apply Now
                <svg className="transition-transform group-hover:translate-x-0.5" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</nav>

<header className="relative w-full pt-32 pb-24 md:pt-48 md:pb-32">
<div className="mx-auto max-w-7xl px-6 md:px-12">

<div className="relative mb-24 h-[400px] w-full md:h-[500px] reveal-item">

<div className="absolute -right-4 -top-12 z-20 flex h-24 w-24 rotate-12 items-center justify-center rounded-full bg-white p-2 shadow-xl md:right-24 md:top-0">
<div className="flex h-full w-full items-center justify-center rounded-full border border-dashed border-purple-300 bg-purple-50 text-center text-[10px] font-bold leading-tight text-purple-600 uppercase tracking-widest">
                        Cohort<br/>01
                    </div>
</div>

<div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center gap-4 md:gap-8">
<div className="relative h-48 w-40 -rotate-6 overflow-hidden rounded-2xl shadow-2xl transition-transform hover:z-10 hover:scale-110 md:h-72 md:w-56">
<img alt="Founder speaking" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-purple-900/10 mix-blend-overlay"></div>
</div>
<div className="relative z-10 h-64 w-56 rotate-2 overflow-hidden rounded-2xl shadow-2xl transition-transform hover:scale-110 md:h-96 md:w-80">
<img alt="Podcast recording" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1478737270239-2f02b77ac6d5?w=800&amp;q=80"/>
</div>
<div className="relative h-48 w-40 rotate-6 overflow-hidden rounded-2xl shadow-2xl transition-transform hover:z-10 hover:scale-110 md:h-72 md:w-56">
<img alt="Interview" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-purple-900/10 mix-blend-overlay"></div>
</div>
</div>
</div>

<div className="relative z-10 flex flex-col items-center text-center">
<h1 className="font-serif-display text-[5rem] leading-[0.85] tracking-tight text-stone-900 md:text-[9rem] lg:text-[11rem] reveal-item delay-100">
                    The <span className="font-sans-display tracking-tighter font-bold">BOOTCAMP</span>
</h1>
<div className="mt-8 flex max-w-2xl flex-col items-center gap-6 reveal-item delay-200">
<p className="font-sans-display text-2xl font-medium tracking-tight text-purple-600 md:text-3xl">
                        Build Your Story. Own Your Narrative.
                    </p>
<p className="text-base text-stone-500 md:text-lg">
                        The Narrative Development Sprint for Founders.
                    </p>
</div>
<div className="mt-12 max-w-2xl text-center text-sm leading-relaxed text-stone-600 md:text-base reveal-item delay-300">
<p className="mb-6">
                        The founders who win aren't just building great products. They're the ones who can fire up and lead their team and the whole market wherever their vision is telling them. They have no doubt about why it matters and why they're the right person to build it.
                    </p>
<p className="mb-8">
                        The Bootcamp is here to help you articulate your vision, demonstrate product-founder fit, and show up with confidence whether you're pitching investors, talking to press, or posting on socials.
                    </p>
<p className="font-medium text-stone-900">
                        This is not a course. It's a narrative development sprint.
                    </p>
<p className="mt-2 text-xs uppercase tracking-widest text-stone-400">Cohort 1 begins March 10, 2026</p>
</div>
<div className="mt-10 reveal-item delay-400">
<a className="inline-flex h-14 items-center justify-center rounded-full bg-stone-900 px-10 text-sm font-semibold text-white transition-transform hover:scale-105 hover:bg-black hover:shadow-lg" href="#pricing">
                        Apply Now
                    </a>
</div>
</div>
</div>
</header>

<section className="w-full bg-stone-50 py-24 md:py-32">
<div className="mx-auto max-w-7xl px-6 md:px-12">
<div className="grid gap-16 lg:grid-cols-2">
<div className="reveal-item">
<h2 className="font-serif-display text-5xl leading-none text-stone-900 md:text-6xl">
                        Your Tech is Revolutionary. <span className="block text-purple-600 italic">Your Story is… Invisible?</span>
</h2>
</div>
<div className="space-y-8 reveal-item delay-100">
<ul className="space-y-6">
<li className="flex items-start gap-4">
<div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-stone-200 text-stone-500">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><line x1="18" x2="6" y1="6" y2="18"></line><line x1="6" x2="18" y1="6" y2="18"></line></svg>
</div>
<p className="text-stone-600">Investors keep asking, "Why you?" and your answer feels thin.</p>
</li>
<li className="flex items-start gap-4">
<div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-stone-200 text-stone-500">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><line x1="18" x2="6" y1="6" y2="18"></line><line x1="6" x2="18" y1="6" y2="18"></line></svg>
</div>
<p className="text-stone-600">You’re avoiding the media because you're afraid you’ll mess up.</p>
</li>
<li className="flex items-start gap-4">
<div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-stone-200 text-stone-500">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><line x1="18" x2="6" y1="6" y2="18"></line><line x1="6" x2="18" y1="6" y2="18"></line></svg>
</div>
<p className="text-stone-600">Your socials are dead because you don’t know what to say.</p>
</li>
<li className="flex items-start gap-4">
<div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-stone-200 text-stone-500">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><line x1="18" x2="6" y1="6" y2="18"></line><line x1="6" x2="18" y1="6" y2="18"></line></svg>
</div>
<p className="text-stone-600">You’re watching other founders get featured, quoted, and invited on podcasts while you stay invisible.</p>
</li>
<li className="flex items-start gap-4">
<div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-stone-200 text-stone-500">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><line x1="18" x2="6" y1="6" y2="18"></line><line x1="6" x2="18" y1="6" y2="18"></line></svg>
</div>
<p className="text-stone-600">You’re using AI to draft content but ending up with generic slop that doesn't sound like you. Worse, it just doesn't mean anything.</p>
</li>
<li className="flex items-start gap-4">
<div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-stone-200 text-stone-500">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><line x1="18" x2="6" y1="6" y2="18"></line><line x1="6" x2="18" y1="6" y2="18"></line></svg>
</div>
<p className="text-stone-600">The idea of "building a personal brand" is just overwhelming.</p>
</li>
</ul>
<div className="border-l-2 border-purple-600 pl-6 pt-2">
<p className="text-lg font-medium text-stone-900">It doesn't have to be this way.</p>
<p className="mt-2 text-stone-600">The Bootcamp gives you a locked narrative you can reuse for all kinds of purposes across investor meetings, interviews, and socials. You stop reinventing the wheel every time you need to explain yourself and you become consistent with your messaging.</p>
</div>
</div>
</div>
</div>
</section>

<section className="w-full py-24 md:py-32">
<div className="mx-auto max-w-7xl px-6 md:px-12">
<div className="mb-16 text-center reveal-item">
<h2 className="text-5xl md:text-7xl">
<span className="font-serif-display font-normal text-stone-900">WHAT</span> <span className="font-sans-display font-bold text-purple-600 tracking-tight">YOU GET</span>
</h2>
<p className="mt-6 text-stone-500">You'll Leave With a Story You Can Actually Use. Most programs end with a certificate. Ours ends with a narrative you can deploy immediately.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 reveal-item delay-200">

<div className="group relative flex flex-col border border-stone-200 bg-white p-10 transition-colors hover:bg-stone-50 md:border-r-0 md:border-b-0">
<h3 className="font-sans-display text-2xl font-semibold text-stone-900">A Locked Narrative Framework</h3>
<p className="mt-4 text-sm leading-relaxed text-stone-500">Your key messages, content pillars, and talking points. No more improvising.</p>
<div className="mt-8 flex justify-end opacity-0 transition-opacity group-hover:opacity-100">
<svg className="text-purple-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><line x1="9" x2="9" y1="3" y2="21"></line></svg>
</div>
</div>

<div className="group relative flex flex-col border border-stone-200 bg-white p-10 transition-colors hover:bg-stone-50 md:border-b-0">
<h3 className="font-sans-display text-2xl font-semibold text-stone-900">Confidence Under Pressure</h3>
<p className="mt-4 text-sm leading-relaxed text-stone-500">You’ll be able to articulate your story in a real interview situation without stumbling.</p>
<div className="mt-8 flex justify-end opacity-0 transition-opacity group-hover:opacity-100">
<svg className="text-purple-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
</div>
</div>

<div className="group relative flex flex-col border border-stone-200 bg-white p-10 transition-colors hover:bg-stone-50 md:border-r-0">
<h3 className="font-sans-display text-2xl font-semibold text-stone-900">A Recorded Narrative Interview</h3>
<p className="mt-4 text-sm leading-relaxed text-stone-500">A real conversation that stress-tests your messaging with feedback from our team.</p>
<div className="mt-8 flex justify-end opacity-0 transition-opacity group-hover:opacity-100">
<svg className="text-purple-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M23 7l-7 5 7 5V7z"></path><rect height="14" rx="2" ry="2" width="15" x="1" y="5"></rect></svg>
</div>
</div>

<div className="group relative flex flex-col border border-stone-200 bg-white p-10 transition-colors hover:bg-stone-50">
<h3 className="font-sans-display text-2xl font-semibold text-stone-900">2–5 Ready-to-Post Clips</h3>
<p className="mt-4 text-sm leading-relaxed text-stone-500">Professionally edited, aligned with your narrative, usable immediately on LinkedIn, X, or wherever your audience lives.</p>
<div className="mt-8 flex justify-end opacity-0 transition-opacity group-hover:opacity-100">
<svg className="text-purple-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
</div>
</div>
</div>
</div>
</section>

<section className="relative w-full overflow-hidden bg-stone-50 py-24 md:py-32">
<div className="mx-auto max-w-7xl px-6 md:px-12">
<div className="mb-20 text-center reveal-item">
<h2 className="text-5xl md:text-7xl">
<span className="font-sans-display font-bold text-purple-600 tracking-tight">HOW IT</span> <span className="font-serif-display font-normal text-stone-900 italic">WORKS</span>
</h2>
<p className="mt-6 text-stone-500">4 Weeks - A Narrative You'll Continue Building Forever.</p>
</div>
<div className="relative mx-auto max-w-4xl space-y-16 before:absolute before:left-[27px] before:top-4 before:h-full before:w-[2px] before:bg-stone-200 md:before:left-1/2 md:before:-ml-[1px]">

<div className="relative flex flex-col items-start gap-8 md:flex-row md:justify-between reveal-item delay-100">
<div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-4 border-white bg-purple-600 text-lg font-bold text-white shadow-lg md:absolute md:left-1/2 md:-ml-7 z-10">1</div>
<div className="md:w-[45%] md:text-right md:pr-8">
<span className="mb-2 block text-xs font-bold uppercase tracking-widest text-purple-600">Week 1</span>
<h3 className="font-serif-display text-3xl text-stone-900">Narrative Foundation</h3>
</div>
<div className="md:w-[45%] md:pl-8 pt-2">
<div className="space-y-6">
<div>
<h4 className="font-sans-display font-semibold text-stone-900">Session 1: Kickoff &amp; Storytelling (Group)</h4>
<p className="mt-1 text-sm text-stone-500">Why "why" matters more than "what." Foundations of personal branding and storytelling.</p>
</div>
<div>
<h4 className="font-sans-display font-semibold text-stone-900">Session 2: Narrative Discovery (1:1)</h4>
<p className="mt-1 text-sm text-stone-500">A deep dive into your story, vision, and key messages. We work with you to surface the narrative that's already there.</p>
</div>
</div>
</div>
</div>

<div className="relative flex flex-col items-start gap-8 md:flex-row md:justify-between reveal-item delay-200">
<div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-4 border-white bg-white text-lg font-bold text-stone-900 shadow-sm ring-1 ring-stone-200 md:absolute md:left-1/2 md:-ml-7 z-10">2</div>
<div className="md:w-[45%] md:order-2 md:pl-8">
<span className="mb-2 block text-xs font-bold uppercase tracking-widest text-purple-600">Week 2</span>
<h3 className="font-serif-display text-3xl text-stone-900">Media Training</h3>
</div>
<div className="md:w-[45%] md:order-1 md:text-right md:pr-8 pt-2">
<div className="space-y-6">
<div>
<h4 className="font-sans-display font-semibold text-stone-900">Session 3: Media Training 101 (Group)</h4>
<p className="mt-1 text-sm text-stone-500">How to do well in an interview. Bridging techniques, soundbites, body language, and on-camera confidence.</p>
</div>
<div>
<h4 className="font-sans-display font-semibold text-stone-900">Session 4: Mock Interview (1:1)</h4>
<p className="mt-1 text-sm text-stone-500">A simulated interview with real-time feedback. We find the gaps in your story and help you close them.</p>
</div>
</div>
</div>
</div>

<div className="relative flex flex-col items-start gap-8 md:flex-row md:justify-between reveal-item delay-300">
<div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-4 border-white bg-white text-lg font-bold text-stone-900 shadow-sm ring-1 ring-stone-200 md:absolute md:left-1/2 md:-ml-7 z-10">3</div>
<div className="md:w-[45%] md:text-right md:pr-8">
<span className="mb-2 block text-xs font-bold uppercase tracking-widest text-purple-600">Week 3</span>
<h3 className="font-serif-display text-3xl text-stone-900">Content &amp; Narrative</h3>
</div>
<div className="md:w-[45%] md:pl-8 pt-2">
<div className="space-y-6">
<div>
<h4 className="font-sans-display font-semibold text-stone-900">Session 5: Founder Content (Group)</h4>
<p className="mt-1 text-sm text-stone-500">How to uncover and tell your story. Using AI as an accelerator, not a replacement.</p>
</div>
<div>
<h4 className="font-sans-display font-semibold text-stone-900">Session 6: Framework Workshop (Group)</h4>
<p className="mt-1 text-sm text-stone-500">We walk you through your personalized narrative framework, answer all the questions, and help you make it a living document.</p>
</div>
</div>
</div>
</div>

<div className="relative flex flex-col items-start gap-8 md:flex-row md:justify-between reveal-item delay-400">
<div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-4 border-white bg-white text-lg font-bold text-stone-900 shadow-sm ring-1 ring-stone-200 md:absolute md:left-1/2 md:-ml-7 z-10">4</div>
<div className="md:w-[45%] md:order-2 md:pl-8">
<span className="mb-2 block text-xs font-bold uppercase tracking-widest text-purple-600">Week 4</span>
<h3 className="font-serif-display text-3xl text-stone-900">The Interview</h3>
</div>
<div className="md:w-[45%] md:order-1 md:text-right md:pr-8 pt-2">
<div className="space-y-6">
<div>
<h4 className="font-sans-display font-semibold text-stone-900">Session 7: The Interview Recording (1:1)</h4>
<p className="mt-1 text-sm text-stone-500">This is where you put everything into practice. A real recorded conversation that stress-tests your narrative.</p>
</div>
<div>
<h4 className="font-sans-display font-semibold text-stone-900">Session 8: Post-Interview Debrief (Group)</h4>
<p className="mt-1 text-sm text-stone-500">What worked, what to refine, performance feedback.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="w-full py-24 md:py-32">
<div className="mx-auto max-w-7xl px-6 md:px-12">
<div className="grid gap-12 lg:grid-cols-2">

<div className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm md:p-12 reveal-item">
<div className="mb-8 flex items-center gap-4">
<div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-600">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
</div>
<h3 className="font-serif-display text-2xl text-stone-900">This Is For You If…</h3>
</div>
<ul className="space-y-4 text-sm text-stone-600">
<li className="flex items-start gap-3"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-500"></span>You're an early-stage founder (Seed to Series A) in crypto, AI, or fintech.</li>
<li className="flex items-start gap-3"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-500"></span>You're preparing to raise or launch, and you need to articulate your story clearly.</li>
<li className="flex items-start gap-3"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-500"></span>You want specific direction, not generic advice.</li>
<li className="flex items-start gap-3"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-500"></span>You're tired of winging it.</li>
<li className="flex items-start gap-3"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-500"></span>You understand that visibility matters, but you don't have time to figure it out on your own.</li>
</ul>
</div>

<div className="rounded-3xl border border-stone-200 bg-stone-50 p-8 shadow-inner md:p-12 reveal-item delay-100">
<div className="mb-8 flex items-center gap-4">
<div className="flex h-10 w-10 items-center justify-center rounded-full bg-stone-200 text-stone-500">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><line x1="18" x2="6" y1="6" y2="18"></line><line x1="6" x2="18" y1="6" y2="18"></line></svg>
</div>
<h3 className="font-serif-display text-2xl text-stone-900">This Is NOT For You If…</h3>
</div>
<ul className="space-y-4 text-sm text-stone-600">
<li className="flex items-start gap-3"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-stone-400"></span>You're looking for a "get followers quick" scheme.</li>
<li className="flex items-start gap-3"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-stone-400"></span>Don’t know what you're building. We will help you articulate it, but you need to have it first.</li>
<li className="flex items-start gap-3"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-stone-400"></span>You're not willing to put in the work. The Bootcamp requires active participation in interactive sessions.</li>
</ul>
</div>
</div>
</div>
</section>

<section className="w-full bg-stone-900 py-24 text-white md:py-32" id="pricing">
<div className="mx-auto max-w-7xl px-6 md:px-12">
<div className="mb-20 text-center reveal-item">
<h2 className="font-serif-display text-5xl md:text-6xl">Choose Your Path</h2>
</div>
<div className="grid gap-8 lg:grid-cols-2 lg:gap-12">

<div className="relative flex flex-col rounded-2xl border border-stone-700 bg-stone-800/50 p-8 backdrop-blur-sm transition-transform hover:-translate-y-1 md:p-12 reveal-item delay-100">
<div className="absolute -right-2 -top-2 rounded-lg bg-purple-600 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-lg">Limited Availability</div>
<h3 className="mb-2 text-sm font-bold uppercase tracking-widest text-purple-400">Early Bird</h3>
<div className="mb-6 flex items-baseline gap-1">
<span className="font-serif-display text-5xl">$1,200</span>
</div>
<p className="mb-8 text-sm text-stone-400">First 5 spots only.</p>
<ul className="mb-8 space-y-4 text-sm text-stone-300">
<li className="flex gap-3"><svg className="shrink-0 text-purple-500" fill="none" height="20" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="20"><polyline points="20 6 9 17 4 12"></polyline></svg> Full program access (4 weeks)</li>
<li className="flex gap-3"><svg className="shrink-0 text-purple-500" fill="none" height="20" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="20"><polyline points="20 6 9 17 4 12"></polyline></svg> Group sessions &amp; 1:1 coaching</li>
<li className="flex gap-3"><svg className="shrink-0 text-purple-500" fill="none" height="20" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="20"><polyline points="20 6 9 17 4 12"></polyline></svg> Narrative framework development</li>
<li className="flex gap-3"><svg className="shrink-0 text-purple-500" fill="none" height="20" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="20"><polyline points="20 6 9 17 4 12"></polyline></svg> Interview recording &amp; 2–5 edited clips</li>
</ul>
<button className="mt-auto w-full rounded-full bg-white py-4 text-sm font-bold text-black transition-colors hover:bg-purple-100">Secure Early Bird</button>
</div>

<div className="flex flex-col rounded-2xl border border-stone-800 bg-stone-900 p-8 transition-transform hover:-translate-y-1 md:p-12 reveal-item delay-200">
<h3 className="mb-2 text-sm font-bold uppercase tracking-widest text-stone-500">Standard</h3>
<div className="mb-6 flex items-baseline gap-1">
<span className="font-serif-display text-5xl">$1,500</span>
</div>
<p className="mb-8 text-sm text-stone-400">After the early bird sells out.</p>
<ul className="mb-8 space-y-4 text-sm text-stone-300">
<li className="flex gap-3"><svg className="shrink-0 text-stone-500" fill="none" height="20" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="20"><polyline points="20 6 9 17 4 12"></polyline></svg> Full program access (4 weeks)</li>
<li className="flex gap-3"><svg className="shrink-0 text-stone-500" fill="none" height="20" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="20"><polyline points="20 6 9 17 4 12"></polyline></svg> Group sessions &amp; 1:1 coaching</li>
<li className="flex gap-3"><svg className="shrink-0 text-stone-500" fill="none" height="20" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="20"><polyline points="20 6 9 17 4 12"></polyline></svg> Narrative framework development</li>
<li className="flex gap-3"><svg className="shrink-0 text-stone-500" fill="none" height="20" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="20"><polyline points="20 6 9 17 4 12"></polyline></svg> Interview recording &amp; 2–5 edited clips</li>
</ul>
<button className="mt-auto w-full rounded-full border border-stone-700 bg-transparent py-4 text-sm font-bold text-white transition-colors hover:bg-stone-800">Join Waitlist</button>
</div>
</div>

<div className="mt-12 rounded-2xl border border-purple-500/30 bg-purple-900/10 p-8 text-center md:p-12 reveal-item delay-300">
<h3 className="mb-4 font-serif-display text-3xl italic">Scholarship Opportunities</h3>
<p className="mx-auto max-w-2xl text-stone-400">3 spots available. For founders building great things who may not have the budget for the full program right now. We will reimburse 80% of the cost.</p>
<div className="mt-6 flex flex-col items-center justify-center gap-4 md:flex-row">
<span className="text-xs uppercase tracking-widest text-purple-400">Deadline: February 27, 2026</span>
<a className="group flex items-center gap-2 border-b border-purple-400 pb-0.5 text-sm font-medium text-purple-300 hover:text-white" href="#">
                        Apply for Scholarship
                        <svg className="transition-transform group-hover:translate-x-1" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><line x1="5" x2="19" y1="12" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
</a>
</div>
</div>
</div>
</section>

<section className="w-full py-24 md:py-32">
<div className="mx-auto max-w-7xl px-6 md:px-12">
<div className="mb-16 reveal-item">
<h2 className="font-serif-display text-5xl text-stone-900">Your Instructors</h2>
<p className="mt-4 max-w-2xl text-stone-500">The Bootcamp is led by the Hype PR team, who have worked with 50+ crypto and AI projects including notable industry leaders.</p>
</div>
<div className="grid gap-12 md:grid-cols-2">
<div className="flex flex-col gap-6 md:flex-row reveal-item delay-100">
<img alt="Anastasia" className="h-24 w-24 rounded-full object-cover grayscale transition-all hover:grayscale-0" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&amp;q=80"/>
<div>
<h3 className="font-serif-display text-2xl text-stone-900">Anastasia Lowenthal</h3>
<p className="text-xs font-bold uppercase tracking-widest text-purple-600">Head of Hype PR</p>
<p className="mt-4 text-sm leading-relaxed text-stone-600">Throughout her career in crypto, she supported 50+ clients, turning their ideas into stories people want to read.</p>
</div>
</div>
<div className="flex flex-col gap-6 md:flex-row reveal-item delay-200">
<img alt="Sasha" className="h-24 w-24 rounded-full object-cover grayscale transition-all hover:grayscale-0" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&amp;q=80"/>
<div>
<h3 className="font-serif-display text-2xl text-stone-900">Sasha Barrie</h3>
<p className="text-xs font-bold uppercase tracking-widest text-purple-600">Leads Founder Comms</p>
<p className="mt-4 text-sm leading-relaxed text-stone-600">Former IP lawyer and documentary filmmaker, she helps founders tap into their story, find their voice, and turn it into content that resonates.</p>
</div>
</div>
</div>
</div>
</section>

<section className="w-full bg-stone-50 py-24 md:py-32">
<div className="mx-auto max-w-3xl px-6 md:px-12">
<h2 className="mb-12 font-serif-display text-4xl text-stone-900 reveal-item">FAQ</h2>
<div className="space-y-8 reveal-item delay-100">
<div className="border-b border-stone-200 pb-6">
<h3 className="mb-2 font-sans-display font-semibold text-stone-900">Who is this for?</h3>
<p className="text-sm leading-relaxed text-stone-600">Early-stage founders in crypto, AI, and fintech. Especially relevant if you're preparing to raise or launch. The program is also open to C-suite and investors who want to develop visibility.</p>
</div>
<div className="border-b border-stone-200 pb-6">
<h3 className="mb-2 font-sans-display font-semibold text-stone-900">Who is this NOT for?</h3>
<p className="text-sm leading-relaxed text-stone-600">Anyone looking for shortcuts. This is for builders who are serious about the long game.</p>
</div>
<div className="border-b border-stone-200 pb-6">
<h3 className="mb-2 font-sans-display font-semibold text-stone-900">How is this different from a course?</h3>
<p className="text-sm leading-relaxed text-stone-600">Courses give you information. The Bootcamp is very hands-on. It gives you a narrative developed with you and stress-tested. Think of it as a storytelling sprint.</p>
</div>
<div className="border-b border-stone-200 pb-6">
<h3 className="mb-2 font-sans-display font-semibold text-stone-900">How much time is required per week?</h3>
<p className="text-sm leading-relaxed text-stone-600">The format is designed for busy founders. Expect 1.5 hours per week for group sessions, plus 1-1.5 hours for your 1:1s. Total of approximately 2 - 2.5 hours per week.</p>
</div>
<div className="border-b border-stone-200 pb-6">
<h3 className="mb-2 font-sans-display font-semibold text-stone-900">Tell me more about the interview and clips.</h3>
<p className="text-sm leading-relaxed text-stone-600">In Week 4, you'll record a narrative interview, a real conversation that puts your messaging to the test. We produce and deliver 2–5 edited short-form clips aligned with your narrative, optimized for social media. This isn't a practice run, it's content you can post immediately.</p>
</div>
<div className="border-b border-stone-200 pb-6">
<h3 className="mb-2 font-sans-display font-semibold text-stone-900">I'm raising from institutional investors. Is this relevant?</h3>
<p className="text-sm leading-relaxed text-stone-600">Yes. Your narrative is what bridges the gap between your vision and their understanding. The Bootcamp helps you articulate product-founder fit in a way that resonates — whether you're talking to crypto-native or traditional VCs.</p>
</div>
</div>
</div>
</section>

<footer className="w-full bg-white pb-24 pt-24">
<div className="mx-auto max-w-7xl px-6 text-center md:px-12 reveal-item">
<h2 className="mb-6 font-serif-display text-5xl text-stone-900 md:text-7xl">
                Your product is great. <br/>
<span className="italic text-purple-600">Your story should be too.</span>
</h2>
<p className="mx-auto mb-12 max-w-2xl text-lg text-stone-500">
                The founders who get funded, quoted, and followed aren't just building a product - they're a story to come with it. That's what the Bootcamp gives you.
            </p>
<div className="flex flex-col items-center justify-center gap-6 md:flex-row">
<a className="group flex h-14 w-full items-center justify-center gap-2 rounded-full bg-stone-900 px-10 text-sm font-semibold text-white transition-all hover:scale-105 hover:shadow-xl md:w-auto" href="#pricing">
                    Apply Now
                    <svg className="transition-transform group-hover:translate-x-1" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><line x1="5" x2="19" y1="12" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
</a>
<a className="group flex h-14 w-full items-center justify-center gap-2 rounded-full border border-stone-200 bg-white px-10 text-sm font-semibold text-stone-900 transition-colors hover:border-purple-200 hover:bg-purple-50 hover:text-purple-700 md:w-auto" href="#">
                    Apply for Scholarship
                </a>
</div>
<div className="mt-12 text-xs uppercase tracking-widest text-stone-400">
                Cohort 1 begins March 2, 2026. Spots are limited.
            </div>
</div>
</footer>


    </>
  );
}
