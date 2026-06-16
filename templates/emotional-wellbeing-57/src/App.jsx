import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
brand: {
bg: '#FDFBF8',
card: '#FFFFFF',
tint: '#F7F3EE',
headline: '#170000',
body: '#665948',
accent: '#C7772D',
deep: '#3C2E25',
}
},
spacing: {
'128': '32rem',
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.animationPlayState = 'running';
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });

            document.querySelectorAll('.fade-in-up').forEach(el => {
                el.style.animationPlayState = 'paused';
                observer.observe(el);
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 bg-brand-bg/80 backdrop-blur-md border-b border-brand-body/5 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="text-2xl font-serif font-medium tracking-tight text-brand-headline flex items-center gap-2 group" href="#">
                Hestia
            </a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-brand-body">
<a className="hover:text-brand-accent transition-colors" href="#features">Why Hestia</a>
<a className="hover:text-brand-accent transition-colors" href="#how-it-works">How It Works</a>
<a className="hover:text-brand-accent transition-colors" href="#faq">FAQ</a>
</div>

<div className="hidden md:flex items-center gap-4">
<a className="bg-brand-headline text-brand-bg px-5 py-2.5 rounded-full text-sm font-medium hover:bg-brand-accent transition-colors duration-300 ease-out" href="#waitlist">
                    Join Waitlist
                </a>
</div>

<button aria-label="Open Menu" className="md:hidden text-brand-headline">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</nav>

<section className="pt-32 pb-20 md:pt-48 md:pb-32 px-6 max-w-7xl mx-auto text-center relative overflow-hidden">
<div className="fade-in-up">
<span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-tint text-brand-deep text-xs uppercase tracking-widest font-medium mb-8 border border-brand-deep/5">
                Emotional Wellbeing + Relationships
            </span>
<h1 className="text-5xl md:text-7xl font-serif font-medium leading-[1.1] tracking-tight text-brand-headline max-w-4xl mx-auto mb-8">
                Care for your inner world <span className="italic text-brand-accent">and</span> your people, in one place.
            </h1>
<p className="text-lg md:text-xl text-brand-body leading-relaxed max-w-2xl mx-auto mb-10">
                Hestia helps you track moods, capture real moments, and remember what matters with thoughtful reminders and AI-assisted insights.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
<a className="w-full sm:w-auto px-8 py-3.5 bg-brand-accent text-white rounded-full font-medium hover:bg-brand-deep transition-all duration-300 shadow-lg shadow-brand-accent/20" href="#waitlist">
                    Join Waitlist
                </a>
<a className="w-full sm:w-auto px-8 py-3.5 bg-brand-card text-brand-headline border border-brand-body/20 rounded-full font-medium hover:border-brand-accent hover:text-brand-accent transition-all duration-300" href="#how-it-works">
                    See How It Works
                </a>
</div>
<p className="text-xs text-brand-body/70 flex items-center justify-center gap-1.5">
<iconify-icon className="text-brand-accent" icon="solar:shield-check-linear"></iconify-icon>
                Private by default. Built for real life, not performative productivity.
            </p>
</div>
</section>

<div className="w-full border-y border-brand-body/5 bg-brand-tint/30">
<div className="max-w-7xl mx-auto px-6 py-8">
<div className="flex flex-wrap justify-center gap-x-12 gap-y-6 text-sm text-brand-deep/80 font-medium">
<div className="flex items-center gap-2">
<iconify-icon className="text-brand-accent text-lg" icon="solar:smile-circle-linear"></iconify-icon>
<span>Mood check-ins that take less than a minute</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-brand-accent text-lg" icon="solar:microphone-3-linear"></iconify-icon>
<span>Notes with voice and photo support</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-brand-accent text-lg" icon="solar:magic-stick-3-linear"></iconify-icon>
<span>AI suggestions from your own context</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-brand-accent text-lg" icon="solar:users-group-rounded-linear"></iconify-icon>
<span>Relationship reminders that actually feel human</span>
</div>
</div>
</div>
</div>

<section className="py-24 px-6 max-w-7xl mx-auto" id="problem">
<div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

<div className="fade-in-up">
<h2 className="text-3xl md:text-4xl font-serif font-medium tracking-tight mb-8 text-brand-headline">
                    Most tools split your life into silos.
                </h2>
<ul className="space-y-6">
<li className="flex gap-4 items-start opacity-70 group hover:opacity-100 transition-opacity">
<div className="mt-1 min-w-[20px] text-brand-body">
<iconify-icon icon="solar:close-circle-linear" width="20"></iconify-icon>
</div>
<p className="text-lg">Your mood tracker does not know your relationships.</p>
</li>
<li className="flex gap-4 items-start opacity-70 group hover:opacity-100 transition-opacity">
<div className="mt-1 min-w-[20px] text-brand-body">
<iconify-icon icon="solar:close-circle-linear" width="20"></iconify-icon>
</div>
<p className="text-lg">Your notes app does not help you follow through.</p>
</li>
<li className="flex gap-4 items-start opacity-70 group hover:opacity-100 transition-opacity">
<div className="mt-1 min-w-[20px] text-brand-body">
<iconify-icon icon="solar:close-circle-linear" width="20"></iconify-icon>
</div>
<p className="text-lg">Your calendar does not understand emotional context.</p>
</li>
</ul>
</div>

<div className="relative bg-brand-deep rounded-3xl p-8 md:p-12 text-brand-tint fade-in-up delay-200 shadow-2xl shadow-brand-deep/20">
<div className="absolute -top-6 -right-6 text-brand-accent opacity-20">
<iconify-icon icon="solar:stars-minimalistic-linear" width="120"></iconify-icon>
</div>
<h2 className="text-3xl md:text-4xl font-serif font-medium tracking-tight mb-8 text-white">
                    Hestia connects the dots.
                </h2>
<ul className="space-y-6">
<li className="flex gap-4 items-start">
<div className="mt-1 min-w-[20px] text-brand-accent">
<iconify-icon icon="solar:check-circle-linear" width="20"></iconify-icon>
</div>
<p className="text-lg text-brand-tint/90">Reflect on how you feel.</p>
</li>
<li className="flex gap-4 items-start">
<div className="mt-1 min-w-[20px] text-brand-accent">
<iconify-icon icon="solar:check-circle-linear" width="20"></iconify-icon>
</div>
<p className="text-lg text-brand-tint/90">Log moments with people that matter.</p>
</li>
<li className="flex gap-4 items-start">
<div className="mt-1 min-w-[20px] text-brand-accent">
<iconify-icon icon="solar:check-circle-linear" width="20"></iconify-icon>
</div>
<p className="text-lg text-brand-tint/90">Turn memories into meaningful follow-ups.</p>
</li>
</ul>
</div>
</div>
</section>

<section className="py-24 bg-brand-tint/30 px-6" id="features">
<div className="max-w-7xl mx-auto">
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group bg-brand-card p-8 rounded-2xl border border-brand-body/10 hover:border-brand-accent/30 hover:shadow-xl hover:shadow-brand-deep/5 transition-all duration-300 ease-out fade-in-up">
<div className="w-12 h-12 rounded-full bg-brand-tint flex items-center justify-center text-brand-accent mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:graph-up-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium mb-3">Mood Timeline</h3>
<p className="text-brand-body leading-relaxed">Track emotional patterns over time with simple check-ins and clear weekly summaries.</p>
</div>

<div className="group bg-brand-card p-8 rounded-2xl border border-brand-body/10 hover:border-brand-accent/30 hover:shadow-xl hover:shadow-brand-deep/5 transition-all duration-300 ease-out fade-in-up delay-100">
<div className="w-12 h-12 rounded-full bg-brand-tint flex items-center justify-center text-brand-accent mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:notebook-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium mb-3">Reflection Notes</h3>
<p className="text-brand-body leading-relaxed">Capture thoughts quickly with text, voice, or photo so moments are not lost.</p>
</div>

<div className="group bg-brand-card p-8 rounded-2xl border border-brand-body/10 hover:border-brand-accent/30 hover:shadow-xl hover:shadow-brand-deep/5 transition-all duration-300 ease-out fade-in-up delay-200">
<div className="w-12 h-12 rounded-full bg-brand-tint flex items-center justify-center text-brand-accent mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:heart-angle-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium mb-3">Relationship Logs</h3>
<p className="text-brand-body leading-relaxed">Keep a living record of conversations, context, and interactions for each person.</p>
</div>

<div className="group bg-brand-card p-8 rounded-2xl border border-brand-body/10 hover:border-brand-accent/30 hover:shadow-xl hover:shadow-brand-deep/5 transition-all duration-300 ease-out fade-in-up">
<div className="w-12 h-12 rounded-full bg-brand-tint flex items-center justify-center text-brand-accent mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:bell-bing-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium mb-3">Smart Reminders</h3>
<p className="text-brand-body leading-relaxed">Set birthdays, anniversaries, and custom reminders tied to real relationships.</p>
</div>

<div className="group bg-brand-card p-8 rounded-2xl border border-brand-body/10 hover:border-brand-accent/30 hover:shadow-xl hover:shadow-brand-deep/5 transition-all duration-300 ease-out fade-in-up delay-100">
<div className="w-12 h-12 rounded-full bg-brand-tint flex items-center justify-center text-brand-accent mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:magic-stick-3-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium mb-3">AI Suggestions</h3>
<p className="text-brand-body leading-relaxed">Get actionable reminder and event suggestions based on your notes and audio.</p>
</div>

<div className="group bg-brand-card p-8 rounded-2xl border border-brand-body/10 hover:border-brand-accent/30 hover:shadow-xl hover:shadow-brand-deep/5 transition-all duration-300 ease-out fade-in-up delay-200">
<div className="w-12 h-12 rounded-full bg-brand-tint flex items-center justify-center text-brand-accent mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:calendar-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium mb-3">Unified Calendar View</h3>
<p className="text-brand-body leading-relaxed">See upcoming relationship events and personal commitments in one calm view.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto" id="how-it-works">
<div className="grid md:grid-cols-3 gap-12 relative">

<div className="hidden md:block absolute top-8 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-body/20 to-transparent z-0"></div>

<div className="relative z-10 text-center md:text-left fade-in-up">
<div className="w-16 h-16 mx-auto md:mx-0 bg-brand-bg border-2 border-brand-accent rounded-full flex items-center justify-center text-xl font-serif font-medium text-brand-headline mb-6 shadow-sm">
                    1
                </div>
<h3 className="text-2xl font-serif font-medium mb-3">Check in</h3>
<p className="text-brand-body">Log your mood and capture what is on your mind.</p>
</div>

<div className="relative z-10 text-center md:text-left fade-in-up delay-100">
<div className="w-16 h-16 mx-auto md:mx-0 bg-brand-bg border-2 border-brand-accent rounded-full flex items-center justify-center text-xl font-serif font-medium text-brand-headline mb-6 shadow-sm">
                    2
                </div>
<h3 className="text-2xl font-serif font-medium mb-3">Connect context</h3>
<p className="text-brand-body">Attach reflections to people, moments, and upcoming events.</p>
</div>

<div className="relative z-10 text-center md:text-left fade-in-up delay-200">
<div className="w-16 h-16 mx-auto md:mx-0 bg-brand-bg border-2 border-brand-accent rounded-full flex items-center justify-center text-xl font-serif font-medium text-brand-headline mb-6 shadow-sm">
                    3
                </div>
<h3 className="text-2xl font-serif font-medium mb-3">Follow through</h3>
<p className="text-brand-body">Let Hestia suggest and schedule reminders so care becomes consistent.</p>
</div>
</div>
</section>

<section className="py-24 bg-brand-deep text-brand-tint px-6">
<div className="max-w-7xl mx-auto">
<h2 className="text-3xl font-serif font-medium text-white mb-16 text-center tracking-tight">Early users say</h2>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm fade-in-up">
<div className="text-brand-accent mb-6">
<iconify-icon icon="solar:quote-up-square-linear" width="32"></iconify-icon>
</div>
<p className="text-lg leading-relaxed mb-6 font-light">“Hestia helped me notice patterns in how I felt before hard weeks, and plan better.”</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-brand-accent/20 flex items-center justify-center text-brand-accent text-xs font-bold">MR</div>
<div>
<p className="font-medium text-white text-sm">Maya R.</p>
<p className="text-xs text-white/60">Early Beta User</p>
</div>
</div>
</div>

<div className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm fade-in-up delay-100">
<div className="text-brand-accent mb-6">
<iconify-icon icon="solar:quote-up-square-linear" width="32"></iconify-icon>
</div>
<p className="text-lg leading-relaxed mb-6 font-light">“I finally have one place for mood, memories, and relationship follow-ups.”</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-brand-accent/20 flex items-center justify-center text-brand-accent text-xs font-bold">JT</div>
<div>
<p className="font-medium text-white text-sm">Jordan T.</p>
<p className="text-xs text-white/60">Early Beta User</p>
</div>
</div>
</div>

<div className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm fade-in-up delay-200">
<div className="text-brand-accent mb-6">
<iconify-icon icon="solar:quote-up-square-linear" width="32"></iconify-icon>
</div>
<p className="text-lg leading-relaxed mb-6 font-light">“The reminder suggestions feel surprisingly thoughtful, not robotic.”</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-brand-accent/20 flex items-center justify-center text-brand-accent text-xs font-bold">AP</div>
<div>
<p className="font-medium text-white text-sm">Alex P.</p>
<p className="text-xs text-white/60">Early Beta User</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-4xl mx-auto text-center">
<div className="fade-in-up">
<h2 className="text-4xl md:text-5xl font-serif font-medium tracking-tight mb-6 text-brand-headline">
                Build a steadier inner life and stronger relationships.
            </h2>
<p className="text-lg text-brand-body mb-10 max-w-2xl mx-auto">
                Join the Hestia waitlist and be first to access the app.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
<a className="w-full sm:w-auto px-8 py-3.5 bg-brand-accent text-white rounded-full font-medium hover:bg-brand-deep transition-all duration-300 shadow-lg shadow-brand-accent/20" href="#waitlist">
                    Join Waitlist
                </a>
<a className="w-full sm:w-auto px-8 py-3.5 bg-brand-bg text-brand-headline border border-brand-body/20 rounded-full font-medium hover:border-brand-accent hover:text-brand-accent transition-all duration-300" href="#how-it-works">
                    See How It Works
                </a>
</div>
</div>
</section>

<section className="pb-24 px-6" id="waitlist">
<div className="max-w-md mx-auto bg-white p-8 rounded-3xl shadow-xl shadow-brand-body/5 border border-brand-body/10 fade-in-up">
<form className="space-y-4">
<div>
<label className="block text-sm font-medium text-brand-headline mb-2" htmlFor="email">Email</label>
<input className="w-full px-4 py-3 rounded-xl border border-brand-body/20 text-brand-headline placeholder-brand-body/40 bg-brand-bg focus:border-brand-accent transition-colors" id="email" placeholder="you@company.com" type="email"/>
</div>
<button className="w-full py-3.5 bg-brand-headline text-white rounded-xl font-medium hover:bg-brand-accent transition-colors duration-300 flex items-center justify-center gap-2" type="submit">
                    Get Early Access
                    <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
<p className="text-xs text-brand-body/60 text-center mt-4">
                    By joining, you agree to receive product updates. Unsubscribe anytime.
                </p>
</form>
</div>
</section>

<section className="py-24 bg-brand-tint/30 px-6 border-t border-brand-body/5" id="faq">
<div className="max-w-3xl mx-auto">
<h2 className="text-3xl font-serif font-medium text-brand-headline mb-12 text-center tracking-tight">FAQ</h2>
<div className="space-y-4">

<details className="group bg-brand-card rounded-2xl border border-brand-body/10 open:border-brand-accent/30 transition-all">
<summary className="flex items-center justify-between p-6 cursor-pointer font-medium text-brand-headline hover:text-brand-accent transition-colors">
                        Is Hestia a therapy app?
                        <iconify-icon className="text-brand-body transition-transform group-open:rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-brand-body leading-relaxed">
                        No. Hestia is a self-reflection and relationship support tool. It does not replace licensed mental health care.
                    </div>
</details>

<details className="group bg-brand-card rounded-2xl border border-brand-body/10 open:border-brand-accent/30 transition-all">
<summary className="flex items-center justify-between p-6 cursor-pointer font-medium text-brand-headline hover:text-brand-accent transition-colors">
                        What can I log in Hestia?
                        <iconify-icon className="text-brand-body transition-transform group-open:rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-brand-body leading-relaxed">
                        Moods, personal reflections, voice notes, photos, interaction notes, reminders, and events.
                    </div>
</details>

<details className="group bg-brand-card rounded-2xl border border-brand-body/10 open:border-brand-accent/30 transition-all">
<summary className="flex items-center justify-between p-6 cursor-pointer font-medium text-brand-headline hover:text-brand-accent transition-colors">
                        How does AI work in Hestia?
                        <iconify-icon className="text-brand-body transition-transform group-open:rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-brand-body leading-relaxed">
                        AI helps summarize notes and suggest reminders/events based on what you captured. You stay in control before anything is saved.
                    </div>
</details>

<details className="group bg-brand-card rounded-2xl border border-brand-body/10 open:border-brand-accent/30 transition-all">
<summary className="flex items-center justify-between p-6 cursor-pointer font-medium text-brand-headline hover:text-brand-accent transition-colors">
                        Is my data private?
                        <iconify-icon className="text-brand-body transition-transform group-open:rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-brand-body leading-relaxed">
                        Hestia is designed with privacy in mind, and your personal context is not public.
                    </div>
</details>

<details className="group bg-brand-card rounded-2xl border border-brand-body/10 open:border-brand-accent/30 transition-all">
<summary className="flex items-center justify-between p-6 cursor-pointer font-medium text-brand-headline hover:text-brand-accent transition-colors">
                        Which platforms are supported?
                        <iconify-icon className="text-brand-body transition-transform group-open:rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-brand-body leading-relaxed">
                        iOS and Android. Web companion experiences are planned.
                    </div>
</details>
</div>
</div>
</section>

<footer className="bg-brand-bg pt-20 pb-10 border-t border-brand-body/5">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 mb-16">
<div>
<h2 className="text-2xl font-serif font-medium text-brand-headline mb-4">Hestia</h2>
<p className="text-brand-body max-w-xs">Wellness, stability, and warmth for your emotional world.</p>
</div>
<div className="flex gap-8 text-sm text-brand-headline font-medium">
<a className="hover:text-brand-accent transition-colors" href="#">Privacy</a>
<a className="hover:text-brand-accent transition-colors" href="#">Terms</a>
<a className="hover:text-brand-accent transition-colors" href="mailto:hello@hestia.app">Contact</a>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-brand-body/5 text-xs text-brand-body/60">
<p>© 2026 Hestia. All rights reserved.</p>
<a className="mt-2 md:mt-0 hover:text-brand-accent transition-colors" href="mailto:hello@hestia.app">hello@hestia.app</a>
</div>
</div>
</footer>



    </>
  );
}
