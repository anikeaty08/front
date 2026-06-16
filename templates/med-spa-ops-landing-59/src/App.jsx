import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
zinc: {
850: '#1f1f1f',
900: '#18181b',
950: '#09090b',
}
}
}
}
}



      lucide.createIcons({
          attrs: {
              "stroke-width": 1.5
          }
      });
    


      const observerOptions = {
          root: null,
          rootMargin: '0px',
          threshold: 0.1
      };

      const observer = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  entry.target.classList.add('visible');
                  observer.unobserve(entry.target);
              }
          });
      }, observerOptions);

      document.addEventListener('DOMContentLoaded', () => {
          document.querySelectorAll('.animate-on-scroll').forEach(el => {
              observer.observe(el);
          });
      });
    


      const menuBtn=document.getElementById('mobile-menu-btn');const closeBtn=document.getElementById('close-menu-btn');const menu=document.getElementById('mobile-menu');const links=document.querySelectorAll('.mobile-link');function toggleMenu(){menu.classList.toggle('translate-x-full');document.body.classList.toggle('overflow-hidden');}menuBtn.addEventListener('click',toggleMenu);closeBtn.addEventListener('click',toggleMenu);links.forEach(l=>l.addEventListener('click',toggleMenu));
    


      function toggleAccordion(btn) {
        const item = btn.closest('[data-accordion-item]');
        const isActive = item.classList.contains('active');
        // Close all others to ensure exclusive focus
        document.querySelectorAll('[data-accordion-item]').forEach(el => {
            if (el !== item) el.classList.remove('active');
        });
        // Toggle the clicked item
        item.classList.toggle('active');
      }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
<div className="absolute inset-0 geo-lines opacity-40"></div>
<div className="absolute bottom-[-10%] right-[-5%] w-[40vw] h-[60vh] border border-zinc-200 rounded-[3rem] -rotate-12 opacity-40"></div>
<div className="absolute top-[20%] left-[-10%] w-[30vw] h-[40vh] border border-zinc-200 rounded-[3rem] rotate-6 opacity-30"></div>
</div>

<nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-zinc-200 shadow-sm">
<div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex gap-2 items-center">
<div className="w-2 h-2 rounded-full bg-black"></div>
<div className="w-2 h-2 rounded-full bg-zinc-300"></div>
<div className="w-2 h-2 rounded-full bg-zinc-300"></div>
</div>
<div className="hidden md:flex items-center gap-10 text-xs font-medium tracking-widest uppercase text-zinc-400">
<a className="relative group text-black font-semibold" href="#">
            All
            <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-black scale-x-100 transition-transform duration-300"></span>
</a>
<a className="relative group hover:text-black transition-colors" href="#problem">
            The Problem
            <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
</a>
<a className="relative group hover:text-black transition-colors" href="#solution">
            The Ecosystem
            <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
</a>
<a className="relative group hover:text-black transition-colors" href="#results">
            Proof
            <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
</a>
<a className="relative group hover:text-black transition-colors" href="#cta">
            Strategy Session
            <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
</a>
</div>
<div className="flex items-center gap-3">
<button className="md:hidden w-10 h-10 flex items-center justify-center text-zinc-600 hover:text-black transition-colors" id="mobile-menu-btn">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
<div className="hidden md:flex items-center gap-3">
<button className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-500 hover:border-black hover:text-black transition-all">
<i className="w-4 h-4" data-lucide="arrow-left"></i>
</button>
<button className="w-10 h-10 rounded-full border border-zinc-700 flex items-center justify-center text-zinc-400 hover:border-white hover:text-white transition-all">
<i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</div>
</nav>

<section className="relative min-h-screen flex items-center pb-20 pt-24 md:pt-32">
<div className="absolute right-0 top-0 w-1/3 h-full hidden lg:block pointer-events-none">
<img className="w-full h-full object-cover opacity-[0.03] mix-blend-multiply mask-image-l" src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
</div>
<div className="max-w-[1400px] mx-auto px-6 relative z-10 w-full">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div>
<div className="mb-6">
<span className="text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-600 border border-zinc-200 bg-white px-3 py-1 rounded-full">
                Stop Missed Calls
              </span>
</div>
<h1 className="font-display md:text-7xl lg:text-[7rem] leading-[0.95] font-medium tracking-tight mb-8 animate-on-scroll text-4xl sm:text-5xl text-zinc-900">
              Where Med Spas
              <br/>
<span className="text-zinc-500 italic">Become Autonomous.</span>
</h1>
<p className="text-lg font-light leading-relaxed mb-8 max-w-xl text-zinc-600">
              Most med spas miss 120-150 calls every month. That's 35-45
              potential bookings slipping away. Oden is the complete ops system
              that captures 100% of leads and gets 5-star reviews without adding
              to your team's workload.
            </p>
<a className="group inline-flex items-center gap-3 bg-black text-white pl-6 pr-2 py-2 rounded-full font-medium text-sm hover:bg-zinc-800 transition-all transform hover:scale-105 shadow-lg shadow-zinc-200" href="#cta">
<span className="font-semibold tracking-wide">
                Get Your Strategy Session
              </span>
<div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-black group-hover:rotate-45 transition-transform">
<i className="w-4 h-4" data-lucide="arrow-right"></i>
</div>
</a>
</div>

<div className="relative group cursor-pointer">

<div className="absolute -inset-1 bg-gradient-to-r from-zinc-700 to-zinc-900 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
<div className="relative aspect-video bg-white rounded-2xl border border-zinc-200 overflow-hidden shadow-2xl flex items-center justify-center">

<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-800 via-zinc-950 to-black opacity-80"></div>
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&amp;w=2070&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-90 grayscale-[20%]"></div>

<div className="absolute inset-0 geo-lines opacity-20"></div>

<div className="relative z-10 w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 play-pulse group-hover:scale-110 transition-transform duration-300">
<div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
<i className="w-6 h-6 text-black fill-black ml-1" data-lucide="play"></i>
</div>
</div>
<div className="absolute bottom-6 left-6 z-10">
<span className="text-xs font-bold uppercase tracking-widest text-white/80 bg-black/50 px-3 py-1 rounded-md backdrop-blur-md">
                  Watch: How Oden Works
                </span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-zinc-200 bg-white">
<div className="max-w-[1400px] mx-auto px-6 py-8">
<div className="flex flex-wrap items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500 animate-on-scroll gap-6 md:gap-12 justify-center md:justify-between">
<span className="text-xl font-display font-medium tracking-widest text-zinc-400">
            LUMINA
          </span>
<span className="text-xl font-display font-medium text-zinc-400 tracking-widest">
            PURE SKIN
          </span>
<span className="text-xl font-display font-medium text-zinc-400 tracking-widest">
            AESTHETICA
          </span>
<span className="text-xl font-display font-medium text-zinc-400 tracking-widest">
            VELOUR
          </span>
<span className="text-xl font-display font-medium text-zinc-400 tracking-widest">
            NOVA MED
          </span>
</div>
</div>
</section>

<section className="py-20 md:py-32 relative bg-zinc-50" id="problem">
<div className="absolute left-0 top-1/4 w-96 h-96 bg-zinc-200/50 rounded-full blur-[100px] pointer-events-none"></div>
<div className="max-w-[1400px] mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
<div>
<span className="text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-500 block mb-4 text-zinc-900">
              Current Reality
            </span>
<h2 className="font-display md:text-6xl font-medium leading-none animate-on-scroll text-4xl sm:text-5xl text-zinc-900">
              Is Your Front Desk
              <br/>
<span className="text-zinc-600 italic">Burning Revenue?</span>
</h2>
</div>
<div className="flex items-end">
<p className="text-lg font-light border-l pl-6 text-zinc-600 border-zinc-300">
              The industry has doubled since 2018. While you're buried in
              busywork, 85% of unanswered calls move on to your competitors.
            </p>
</div>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="group relative p-8 rounded-[2rem] bg-white border border-zinc-200 hover:border-zinc-300 hover:shadow-xl transition-all duration-500 overflow-hidden animate-on-scroll">
<div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-30 transition-opacity">
<i className="w-24 h-24 text-zinc-400 rotate-12 group-hover:text-zinc-600 transition-colors" data-lucide="phone-off"></i>
</div>
<div className="relative z-10 h-full flex flex-col justify-between min-h-[240px]">
<div>
<span className="text-xs font-mono text-zinc-400 mb-4 block border-b border-zinc-100 pb-2 w-fit">
                  01 / MISSED OPPORTUNITY
                </span>
<h3 className="text-3xl font-display mb-4 leading-tight text-zinc-900">
                  150+
                  <br/>
<span className="text-zinc-500 italic">Missed Calls</span>
</h3>
</div>
<p className="text-sm text-zinc-500 leading-relaxed">
                Most med spas miss 120-150 calls monthly. About 28% could be
                clients. That's 45 bookings vanishing into thin air.
              </p>
</div>
</div>

<div className="group relative p-8 rounded-[2rem] bg-white border border-zinc-200 hover:border-zinc-300 hover:shadow-xl transition-all duration-500 overflow-hidden animate-on-scroll delay-200">
<div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-30 transition-opacity">
<i className="w-24 h-24 text-zinc-400 rotate-12 group-hover:text-zinc-600 transition-colors" data-lucide="users"></i>
</div>
<div className="relative z-10 h-full flex flex-col justify-between min-h-[240px]">
<div>
<span className="text-xs font-mono text-zinc-400 mb-4 block border-b border-zinc-100 pb-2 w-fit">
                  02 / STAFF BURNOUT
                </span>
<h3 className="text-3xl font-display text-zinc-900 mb-4 leading-tight">
                  Staff
                  <br/>
<span className="text-zinc-500 italic">Overwhelm</span>
</h3>
</div>
<p className="text-sm text-zinc-500 leading-relaxed">
                Between greeting walk-ins and answering "How much is Botox?" 50
                times, your staff has zero bandwidth for care.
              </p>
</div>
</div>

<div className="group relative p-8 rounded-[2rem] bg-white border border-zinc-200 hover:border-zinc-300 hover:shadow-xl transition-all duration-500 overflow-hidden animate-on-scroll delay-300">
<div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-30 transition-opacity">
<i className="w-24 h-24 text-zinc-400 rotate-12 group-hover:text-zinc-600 transition-colors" data-lucide="ghost"></i>
</div>
<div className="relative z-10 h-full flex flex-col justify-between min-h-[240px]">
<div>
<span className="text-xs font-mono text-zinc-400 mb-4 block border-b border-zinc-100 pb-2 w-fit">
                  03 / LEAKY FUNNEL
                </span>
<h3 className="text-3xl font-display text-zinc-900 mb-4 leading-tight">
                  Ghost
                  <br/>
<span className="text-zinc-500 italic">Leads</span>
</h3>
</div>
<p className="text-sm text-zinc-500 leading-relaxed">
                Leads go cold instantly. Without immediate follow-up, 85% of
                potential bookings move on to your competitors.
              </p>
</div>
</div>
</div>
<div className="mt-16 p-1 rounded-2xl bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 animate-on-scroll shadow-sm">
<div className="bg-white rounded-xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-start gap-4">
<div className="p-3 rounded-full bg-red-500/10 text-red-500 mt-1">
<i className="w-6 h-6" data-lucide="alert-triangle"></i>
</div>
<div>
<h3 className="text-white font-display text-xl mb-2 text-zinc-900">
                  The Cost of Doing Nothing
                </h3>
<p className="text-zinc-400 text-sm leading-relaxed max-w-xl">
                  If your clinic averages a $400 ticket and misses just 3 calls
                  a day,
                  <span className="font-bold text-red-600">
                    you are burning $36,000 every single month.
                  </span>
                  Oden plugs this revenue leak on Day 1.
                </p>
</div>
</div>
<a className="whitespace-nowrap px-6 py-3 bg-red-600 text-white rounded-full font-bold text-xs uppercase tracking-widest hover:bg-red-500 transition-colors shadow-lg shadow-red-900/20" href="#cta">
              Stop Losing Money
            </a>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-32 bg-white border-t border-zinc-200 relative overflow-hidden" id="solution">
<div className="max-w-[1400px] mx-auto px-6">
<div className="text-center mb-24">
<h2 className="font-display md:text-7xl font-medium tracking-tight mb-4 animate-on-scroll text-4xl sm:text-5xl text-zinc-900">
            The Oden
            <span className="italic text-zinc-500">Ecosystem</span>
</h2>
<p className="text-zinc-500 max-w-xl mx-auto text-zinc-600">
            Your virtual operations team that never sleeps, never complains, and
            always closes.
          </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

<div className="p-8 rounded-2xl bg-zinc-50 border border-zinc-100 hover:bg-white hover:border-zinc-200 hover:shadow-lg transition-all duration-300 group animate-on-scroll relative overflow-hidden">
<div className="w-12 h-12 rounded-full bg-white border border-zinc-200 flex items-center justify-center mb-6 text-zinc-900 group-hover:bg-zinc-900 group-hover:text-white transition-colors shadow-sm">
<i className="w-5 h-5" data-lucide="phone"></i>
</div>
<h3 className="font-display text-xl text-zinc-900 tracking-wide mb-3">
              Oden Receptionist
            </h3>
<p className="text-sm text-zinc-500 leading-relaxed">
<strong className="block mb-2 text-zinc-900 font-semibold">
                We Book $30k–$150k/mo in Treatments While You Sleep
              </strong>
              Never miss a call or text again. Instantly qualifies, answers
              every FAQ, and fills your calendar 24/7 — no salary, no days off.
            </p>
</div>

<div className="p-8 rounded-2xl bg-zinc-50 border border-zinc-100 hover:bg-white hover:border-zinc-200 hover:shadow-lg transition-all duration-300 group animate-on-scroll delay-100">
<div className="w-12 h-12 rounded-full bg-white border border-zinc-200 flex items-center justify-center mb-6 text-zinc-900 group-hover:bg-zinc-900 group-hover:text-white transition-colors shadow-sm">
<i className="w-5 h-5" data-lucide="zap"></i>
</div>
<h3 className="font-display text-xl text-zinc-900 tracking-wide mb-3">
              Lead Nurture
            </h3>
<p className="text-sm text-zinc-500 leading-relaxed">
<strong className="block mb-2 text-zinc-900 font-semibold">
                Turns Ghosted Leads into $5k–$20k Paydays
              </strong>
              Automatically follows up 5–7x with proven sequences that book the
              ones your front desk gave up on. Most owners see +28% more
              appointments in the first 30 days.
            </p>
</div>

<div className="p-8 rounded-2xl bg-zinc-50 border border-zinc-100 hover:bg-white hover:border-zinc-200 hover:shadow-lg transition-all duration-300 group animate-on-scroll delay-200">
<div className="w-12 h-12 rounded-full bg-white border border-zinc-200 flex items-center justify-center mb-6 text-zinc-900 group-hover:bg-zinc-900 group-hover:text-white transition-colors shadow-sm">
<i className="w-5 h-5" data-lucide="bar-chart-3"></i>
</div>
<h3 className="font-display text-xl text-zinc-900 tracking-wide mb-3">
              Oden CRM
            </h3>
<p className="text-sm text-zinc-500 leading-relaxed">
<strong className="block mb-2 text-zinc-900 font-semibold">
                Stop Losing $100k+ a Year in “Forgotten” Leads
              </strong>
              Every conversation auto-logged, summarized, and followed up. Zero
              leads slip. Your pipeline stays pristine and profitable.
            </p>
</div>

<div className="p-8 rounded-2xl bg-zinc-50 border border-zinc-100 hover:bg-white hover:border-zinc-200 hover:shadow-lg transition-all duration-300 group animate-on-scroll">
<div className="w-12 h-12 rounded-full bg-white border border-zinc-200 flex items-center justify-center mb-6 text-zinc-900 group-hover:bg-zinc-900 group-hover:text-white transition-colors shadow-sm">
<i className="w-5 h-5" data-lucide="star"></i>
</div>
<h3 className="font-display text-xl text-zinc-900 tracking-wide mb-3">
              Reviews Engine
            </h3>
<p className="text-sm text-zinc-500 leading-relaxed">
<strong className="block mb-2 text-zinc-900 font-semibold">
                100–300 Extra 5-Star Reviews This Year on Autopilot
              </strong>
              Requests reviews right after treatment, drafts perfect replies,
              and keeps your Google/Yelp glowing — the #1 driver of new
              high-ticket clients.
            </p>
</div>

<div className="p-8 rounded-2xl bg-zinc-50 border border-zinc-100 hover:bg-white hover:border-zinc-200 hover:shadow-lg transition-all duration-300 group animate-on-scroll delay-100">
<div className="w-12 h-12 rounded-full bg-white border border-zinc-200 flex items-center justify-center mb-6 text-zinc-900 group-hover:bg-zinc-900 group-hover:text-white transition-colors shadow-sm">
<i className="w-5 h-5" data-lucide="palette"></i>
</div>
<h3 className="font-display text-xl text-zinc-900 tracking-wide mb-3">
              Content Studio
            </h3>
<p className="text-sm text-zinc-500 leading-relaxed">
<strong className="block mb-2 text-zinc-900 font-semibold">
                Post Like a $5k/mo Marketing Agency (Takes 2 Min/Week)
              </strong>
              Spits out on-brand Reels, stories, and promos every week. Owners
              routinely get 50–200 new booked consults from this alone.
            </p>
</div>

<div className="p-8 rounded-2xl bg-zinc-50 border border-zinc-100 hover:bg-white hover:border-zinc-200 hover:shadow-lg transition-all duration-300 group animate-on-scroll delay-200">
<div className="w-12 h-12 rounded-full bg-white border border-zinc-200 flex items-center justify-center mb-6 text-zinc-900 group-hover:bg-zinc-900 group-hover:text-white transition-colors shadow-sm">
<i className="w-5 h-5" data-lucide="shield"></i>
</div>
<h3 className="font-display text-xl text-zinc-900 tracking-wide mb-3">
              Reputation Monitor
            </h3>
<p className="text-sm text-zinc-500 leading-relaxed">
<strong className="block mb-2 text-zinc-900 font-semibold">
                Kill Bad Reviews Before They Tank Your Business
              </strong>
              Watches Google/Yelp 24/7, drafts responses in your tone in
              seconds, and flags anything that could cost you six figures.
            </p>
</div>

<div className="p-8 rounded-2xl bg-zinc-50 border border-zinc-100 hover:bg-white hover:border-zinc-200 hover:shadow-lg transition-all duration-300 group animate-on-scroll">
<div className="w-12 h-12 rounded-full bg-white border border-zinc-200 flex items-center justify-center mb-6 text-zinc-900 group-hover:bg-zinc-900 group-hover:text-white transition-colors shadow-sm">
<i className="w-5 h-5" data-lucide="banknote"></i>
</div>
<h3 className="font-display text-xl text-zinc-900 tracking-wide mb-3">
              No-Show Recovery
            </h3>
<p className="text-sm text-zinc-500 leading-relaxed">
<strong className="block mb-2 text-zinc-900 font-semibold">
                Recover $8k–$40k This Year from No-Shows &amp; Cancellations
              </strong>
              Auto-collects deposits, sends reminders that actually work, and
              rebooks cancellations the same day. Empty chairs = dead money.
            </p>
</div>

<div className="p-8 rounded-2xl bg-zinc-50 border border-zinc-100 hover:bg-white hover:border-zinc-200 hover:shadow-lg transition-all duration-300 group animate-on-scroll delay-100">
<div className="w-12 h-12 rounded-full bg-white border border-zinc-200 flex items-center justify-center mb-6 text-zinc-900 group-hover:bg-zinc-900 group-hover:text-white transition-colors shadow-sm">
<i className="w-5 h-5" data-lucide="receipt"></i>
</div>
<h3 className="font-display text-xl text-zinc-900 tracking-wide mb-3">
              Accounting Copilot
            </h3>
<p className="text-sm text-zinc-500 leading-relaxed">
<strong className="block mb-2 text-zinc-900 font-semibold">
                Get Paid Faster &amp; Never Chase a Failed Card Again
              </strong>
              Instantly retries failed payments, sends polite “your card
              declined” texts, and shoots you daily cash-flow summaries.
            </p>
</div>

<div className="p-8 rounded-2xl bg-zinc-50 border border-zinc-100 hover:bg-white hover:border-zinc-200 hover:shadow-lg transition-all duration-300 group animate-on-scroll delay-200">
<div className="w-12 h-12 rounded-full bg-white border border-zinc-200 flex items-center justify-center mb-6 text-zinc-900 group-hover:bg-zinc-900 group-hover:text-white transition-colors shadow-sm">
<i className="w-5 h-5" data-lucide="smartphone"></i>
</div>
<h3 className="font-display text-xl text-zinc-900 tracking-wide mb-3">
              Command Center
            </h3>
<p className="text-sm text-zinc-500 leading-relaxed">
<strong className="block mb-2 text-zinc-900 font-semibold">
                Wake Up to “Here’s Exactly How to Make More Money Today”
              </strong>
              One morning brief on your phone: today’s revenue, biggest risks,
              and the 3 actions that move the needle most.
            </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-100 border-y border-zinc-200 relative">
<div className="absolute right-0 bottom-0 opacity-10">
<img className="w-96 h-96 object-cover mask-image-gradient" src="https://images.unsplash.com/photo-1552693673-1bf958298935?q=80&amp;w=2073&amp;auto=format&amp;fit=crop"/>
</div>
<div className="max-w-4xl mx-auto px-6 text-center">
<i className="w-12 h-12 text-zinc-300 mx-auto mb-8 fill-zinc-300" data-lucide="quote"></i>
<h3 className="font-display text-3xl md:text-5xl text-zinc-900 uppercase font-bold leading-tight mb-8">
          "I didn't build this as a tech vendor.
          <br className="hidden md:block"/>
          I built this as a clinic manager."
        </h3>
<p className="text-zinc-600 text-lg leading-relaxed max-w-2xl mx-auto mb-12 font-medium">
          I spent 3 years managing clinics just like yours. I lived the chaos of
          missed calls and ghost leads. Oden isn't a generic chatbot; it's a
          system designed to eliminate the problems that kept me up at night.
        </p>
</div>
</section>

<section className="py-24 bg-white border-b border-zinc-200" id="results">
<div className="max-w-[1400px] mx-auto px-6 relative z-10">
<div className="flex flex-col md:flex-row gap-20">
<div className="md:w-1/3">
<h2 className="font-display font-medium leading-none mb-8 animate-on-scroll text-4xl sm:text-5xl text-zinc-900">
              Undeniable
              <br/>
<span className="italic text-zinc-500 text-zinc-800">Proof.</span>
</h2>
<p className="text-zinc-500 text-zinc-600">
              Partners don't just see improvements; they see transformation.
              Numbers don't lie.
            </p>
</div>
<div className="md:w-2/3 grid grid-cols-2 gap-6 md:gap-12">
<div className="border-l animate-on-scroll delay-100 pl-4 md:pl-8 border-zinc-300">
<span className="block md:text-8xl font-display font-medium mb-2 text-4xl sm:text-5xl text-zinc-900">
                40%
              </span>
<span className="text-xs font-bold tracking-widest uppercase text-zinc-500">
                Increase in Bookings
              </span>
</div>
<div className="border-l border-zinc-300 animate-on-scroll delay-200 pl-4 md:pl-8">
<span className="block md:text-8xl font-display font-medium text-zinc-900 mb-2 text-4xl sm:text-5xl">
                300%
              </span>
<span className="text-xs font-bold tracking-widest uppercase text-zinc-500">
                More Google Reviews
              </span>
</div>
<div className="border-l border-zinc-300 animate-on-scroll delay-300 pl-4 md:pl-8">
<span className="block md:text-8xl font-display font-medium text-zinc-900 mb-2 text-4xl sm:text-5xl">
                20+
              </span>
<span className="text-xs font-bold tracking-widest uppercase text-zinc-500">
                Hours Saved Weekly
              </span>
</div>
<div className="border-l border-zinc-300 animate-on-scroll delay-100 pl-4 md:pl-8">
<span className="block md:text-8xl font-display font-medium text-zinc-900 mb-2 text-4xl sm:text-5xl">
                63%
              </span>
<span className="text-xs font-bold tracking-widest uppercase text-zinc-500">
                Fewer No-Shows
              </span>
</div>
</div>
</div>
</div>
</section>
<section className="py-24 border-t border-zinc-200 bg-zinc-50">
<div className="max-w-[1400px] mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="relative animate-on-scroll">
<div className="absolute -inset-4 bg-gradient-to-r from-emerald-100/50 to-teal-100/50 rounded-3xl blur-lg opacity-60"></div>
<div className="relative bg-white border border-zinc-200 rounded-2xl p-8 overflow-hidden shadow-xl">
<div className="flex justify-between items-center mb-8 border-b border-zinc-100 pb-4">
<div>
<h4 className="font-display text-2xl text-zinc-900">
                    Velour Aesthetics
                  </h4>
<p className="text-zinc-500 text-xs uppercase tracking-widest mt-1">
                    Partner Since 2023
                  </p>
</div>
<div className="text-right">
<p className="text-emerald-600 font-mono text-xl">+ $42,300</p>
<p className="text-zinc-400 text-[10px] uppercase tracking-widest">
                    New Revenue (45 Days)
                  </p>
</div>
</div>
<div className="space-y-4">
<div className="flex items-center justify-between p-3 bg-zinc-50 rounded-lg border border-zinc-100">
<span className="text-zinc-500 text-sm">
                    Missed Calls Recovered
                  </span>
<span className="text-zinc-900 font-mono">114</span>
</div>
<div className="flex items-center justify-between p-3 bg-zinc-50 rounded-lg border border-zinc-100">
<span className="text-zinc-500 text-sm">Auto-Booked Appts</span>
<span className="text-zinc-900 font-mono">56</span>
</div>
<div className="flex items-center justify-between p-3 bg-zinc-50 rounded-lg border border-zinc-100">
<span className="text-zinc-500 text-sm">Review Rating</span>
<div className="flex text-yellow-500 text-xs gap-1">
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
</div>
</div>
</div>
</div>
</div>
<div className="animate-on-scroll delay-100">
<span className="text-emerald-600 font-bold tracking-widest uppercase text-xs mb-4 block">
              Case Study
            </span>
<h2 className="font-display text-4xl md:text-5xl text-zinc-900 mb-6 leading-tight">
              From "Slow Season" to
              <span className="italic text-zinc-500">Waitlisted.</span>
</h2>
<p className="text-zinc-600 text-lg leading-relaxed mb-8">
              Velour was spending $3k/mo on ads but missing 40% of calls due to
              front desk overwhelm. Oden was installed on a Tuesday. By Friday,
              the "Missed Call Text Back" agent had recovered 12 leads and
              booked 4 consultations worth $8,000—covering the cost of the
              system for the entire year.
            </p>
<div className="flex flex-col gap-4 border-l-2 border-zinc-200 pl-6">
<p className="text-zinc-500 italic">
                "I was skeptical that an AI could sound human. My patients have
                no idea they're talking to Oden. It just works."
              </p>
<span className="text-zinc-900 text-xs font-bold uppercase tracking-widest">
                — Sarah J., Owner
              </span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-zinc-200 bg-white">
<div className="max-w-[1000px] mx-auto px-6">
<div className="overflow-x-auto">
<table className="min-w-[600px] w-full text-left border-collapse">
<thead>
<tr>
<th className="p-3 md:p-6 text-xs uppercase tracking-widest text-zinc-500 font-medium">
                  Feature
                </th>
<th className="p-3 md:p-6 text-xs uppercase tracking-widest text-zinc-500 font-medium text-center">
                  Marketing Agency
                </th>
<th className="p-3 md:p-6 text-xs uppercase tracking-widest text-zinc-500 font-medium text-center">
                  In-House Staff
                </th>
<th className="p-3 md:p-6 text-lg font-display uppercase text-white font-bold text-center bg-black rounded-t-xl">
                  Oden
                </th>
</tr>
</thead>
<tbody className="divide-y divide-zinc-200">
<tr>
<td className="p-3 md:p-6 font-medium text-zinc-900">
                  Deliverable
                </td>
<td className="p-3 md:p-6 text-center text-zinc-700 text-xs uppercase">
                  Cold Leads
                </td>
<td className="p-3 md:p-6 text-center text-zinc-700 text-xs uppercase">
                  Manual Work
                </td>
<td className="p-3 md:p-6 text-center text-white bg-zinc-900 font-bold">
                  Booked Appts
                </td>
</tr>
<tr>
<td className="p-3 md:p-6 font-medium text-zinc-900">
                  Availability
                </td>
<td className="p-3 md:p-6 text-center text-zinc-700 text-sm">
                  9-5 M-F
                </td>
<td className="p-3 md:p-6 text-center text-zinc-700 text-sm">
                  9-5 M-F
                </td>
<td className="p-3 md:p-6 text-center text-white bg-zinc-900 font-bold">
                  24/7/365
                </td>
</tr>
<tr>
<td className="p-3 md:p-6 font-medium text-zinc-900">
                  Cost Efficiency
                </td>
<td className="p-3 md:p-6 text-center text-zinc-600">Expensive</td>
<td className="p-3 md:p-6 text-center text-zinc-600">
                  Salary + Benefits
                </td>
<td className="p-3 md:p-6 text-center text-white bg-zinc-900 font-bold rounded-b-xl">
                  Fractional Cost
                </td>
</tr>
</tbody>
</table>
</div>
</div>
</section>

<section className="py-24 bg-zinc-100 border-t border-zinc-200 text-center relative overflow-hidden" id="faq">
<div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-multiply"></div>
<div className="max-w-3xl mx-auto px-6">
<h2 className="font-display uppercase font-bold text-center mb-16 text-3xl md:text-4xl text-zinc-900">
          Intelligence Center
        </h2>
<div className="space-y-4" id="faq-container">

<div className="group border border-zinc-200 rounded-2xl bg-white overflow-hidden transition-all hover:shadow-lg hover:border-zinc-300" data-accordion-item="">
<button className="flex items-center justify-between w-full p-6 text-left outline-none cursor-pointer" onclick="toggleAccordion(this)">
<span className="font-display text-lg uppercase tracking-wide text-zinc-900">
                How long does setup take?
              </span>
<span className="transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-[.active]:rotate-180 flex items-center justify-center">
<i className="w-5 h-5 text-zinc-400" data-lucide="chevron-down"></i>
</span>
</button>
<div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-[.active]:grid-rows-[1fr]">
<div className="overflow-hidden">
<div className="p-6 pt-0 text-sm leading-relaxed font-light text-zinc-600">
                  Our White Glove onboarding typically takes 3-5 days. We build
                  your custom AI knowledge base, integrate with your
                  EMR/Calendar, and test everything before deployment.
                </div>
</div>
</div>
</div>

<div className="group border border-zinc-200 rounded-2xl bg-white overflow-hidden transition-all hover:shadow-lg hover:border-zinc-300" data-accordion-item="">
<button className="flex items-center justify-between w-full p-6 text-left outline-none cursor-pointer" onclick="toggleAccordion(this)">
<span className="font-display text-lg uppercase tracking-wide text-zinc-900">
                Does it integrate with my EMR?
              </span>
<span className="transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-[.active]:rotate-180 flex items-center justify-center">
<i className="w-5 h-5 text-zinc-400" data-lucide="chevron-down"></i>
</span>
</button>
<div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-[.active]:grid-rows-[1fr]">
<div className="overflow-hidden">
<div className="p-6 pt-0 text-zinc-600 text-sm leading-relaxed font-light">
                  Yes. Oden integrates with most major EMR and scheduling
                  platforms used by med spas (Zenoti, Aesthetic Record, Vagaro,
                  etc). We handle the technical connections.
                </div>
</div>
</div>
</div>

<div className="group border border-zinc-200 rounded-2xl bg-white overflow-hidden transition-all hover:shadow-lg hover:border-zinc-300" data-accordion-item="">
<button className="flex items-center justify-between w-full p-6 text-left outline-none cursor-pointer" onclick="toggleAccordion(this)">
<span className="font-display text-lg uppercase text-zinc-900 tracking-wide">
                Is it HIPAA Compliant?
              </span>
<span className="transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-[.active]:rotate-180 flex items-center justify-center">
<i className="w-5 h-5 text-zinc-400" data-lucide="chevron-down"></i>
</span>
</button>
<div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-[.active]:grid-rows-[1fr]">
<div className="overflow-hidden">
<div className="p-6 pt-0 text-zinc-600 text-sm leading-relaxed font-light">
                  Absolutely. Data security and patient privacy are paramount.
                  All data is encrypted and stored in full compliance with HIPAA
                  regulations.
                </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900 border-t border-white/5 text-center">
<div className="max-w-3xl mx-auto px-6">
<div className="inline-flex items-center justify-center p-4 rounded-full bg-emerald-500/10 mb-8 border border-emerald-500/20 animate-on-scroll">
<i className="w-8 h-8 text-emerald-500" data-lucide="shield-check"></i>
</div>
<h2 className="font-display text-4xl md:text-5xl text-white mb-6 animate-on-scroll">
          The "Empty Calendar" Guarantee
        </h2>
<p className="text-zinc-400 text-lg mb-10 leading-relaxed max-w-2xl mx-auto animate-on-scroll delay-100">
          We are so confident Oden will fill your books that we put our own
          revenue on the line.
          <strong className="text-white block mt-4 text-xl">
            If we don't generate at least 20 qualified appointments in your
            first 30 days, we refund your setup fee instantly.
          </strong>
</p>
<div className="inline-flex gap-8 justify-center border-t border-white/10 pt-8 animate-on-scroll delay-200">
<div className="text-center">
<p className="text-white font-bold text-2xl">100%</p>
<p className="text-[10px] text-zinc-500 uppercase tracking-widest">
              Risk Free
            </p>
</div>
<div className="text-center">
<p className="text-white font-bold text-2xl">30 Days</p>
<p className="text-[10px] text-zinc-500 uppercase tracking-widest">
              Money Back
            </p>
</div>
</div>
</div>
</section>
<section className="py-20 md:py-32 bg-white text-black relative overflow-hidden" id="cta">
<div className="absolute bottom-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
<img className="w-full h-full object-cover mask-image-l" src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-zinc-200 via-transparent to-transparent opacity-50"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
<h2 className="font-display font-medium tracking-tight mb-4 text-black leading-[0.85] animate-on-scroll text-4xl sm:text-6xl md:text-8xl">
          Secure Your
          <br/>
<span className="italic text-zinc-500">Territory.</span>
</h2>
<p className="text-zinc-600 text-lg mb-8 max-w-xl mx-auto font-medium">
          Don't let another week pass with missed calls. Get a free Oden
          Strategy Session where we:
        </p>
<div className="flex flex-col md:flex-row justify-center gap-6 mb-12 text-sm font-bold uppercase tracking-widest text-zinc-800">
<span className="flex items-center justify-center gap-2">
<i className="w-5 h-5" data-lucide="check-circle-2"></i>
            Audit Your Operations
          </span>
<span className="flex items-center justify-center gap-2">
<i className="w-5 h-5" data-lucide="check-circle-2"></i>
            Identify AI Tools
          </span>
<span className="flex items-center justify-center gap-2">
<i className="w-5 h-5" data-lucide="check-circle-2"></i>
            Build Implementation Plan
          </span>
</div>
<form className="max-w-md mx-auto space-y-4 text-left animate-on-scroll delay-100">
<div className="bg-red-50 border border-red-100 p-4 rounded-lg mb-8 flex items-start gap-3">
<div className="mt-1">
<i className="w-5 h-5 text-red-500 fill-red-500" data-lucide="flame"></i>
</div>
<div className="text-left">
<p className="text-red-600 font-bold text-sm uppercase tracking-wider mb-1">
                Limited Availability
              </p>
<p className="text-zinc-600 text-xs leading-relaxed">
                We limit onboarding to 5 clinics per month to ensure white-glove
                service.
                <span className="font-bold text-black">
                  Only 2 spots remain for this month.
                </span>
</p>
</div>
</div>
<div className="grid gap-4 grid-cols-1 md:grid-cols-2">
<input className="w-full bg-zinc-50 border border-zinc-200 p-4 rounded-lg text-xs font-bold tracking-widest placeholder:text-zinc-400 focus:ring-1 focus:ring-black outline-none transition-all" placeholder="NAME" type="text"/>
<input className="w-full bg-zinc-50 border border-zinc-200 p-4 rounded-lg text-xs font-bold tracking-widest placeholder:text-zinc-400 focus:ring-1 focus:ring-black outline-none transition-all" placeholder="CLINIC" type="text"/>
</div>
<input className="w-full bg-zinc-50 border border-zinc-200 p-4 rounded-lg text-xs font-bold tracking-widest placeholder:text-zinc-400 focus:ring-1 focus:ring-black outline-none transition-all" placeholder="EMAIL ADDRESS" type="email"/>
<button className="w-full bg-black text-white py-5 rounded-lg font-display text-xl uppercase tracking-widest hover:bg-zinc-800 hover:scale-[1.02] transition-all flex items-center justify-center gap-3 shadow-xl" type="button">
            Claim Strategy Session + Free Audit
            <i className="w-5 h-5" data-lucide="arrow-right"></i>
</button>
</form>
<div className="mt-8 flex justify-center gap-6 text-[10px] font-bold uppercase tracking-widest text-zinc-400">
<span className="flex items-center gap-1">
<i className="w-3 h-3" data-lucide="lock"></i>
            256-Bit Secure
          </span>
<span className="flex items-center gap-1">
<i className="w-3 h-3" data-lucide="shield-check"></i>
            HIPAA Compliant
          </span>
</div>
</div>
</section>

<footer className="bg-white border-t border-zinc-200 py-12">
<div className="max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<span className="text-2xl font-display font-bold tracking-widest text-zinc-900">
          ODEN
        </span>
<div className="flex text-xs font-medium uppercase tracking-widest text-zinc-500">
<a className="hover:text-black transition-colors" href="#">Privacy</a>
<a className="ml-6 hover:text-black transition-colors" href="#">Terms</a>
<a className="ml-6 hover:text-black transition-colors" href="#">
            Contact
          </a>
</div>
<span className="text-zinc-700 text-xs">© 2024 ODEN OPS.</span>
</div>
</footer>

<div className="fixed bottom-6 right-6 z-50">
<div className="bg-white text-black p-4 rounded-2xl shadow-2xl max-w-xs cursor-pointer hover:scale-105 transition-transform origin-bottom-right hidden md:block">
<div className="flex items-start gap-3">
<div className="mt-1">
<i className="w-5 h-5" data-lucide="message-square-dashed"></i>
</div>
<div>
<span className="block font-bold text-sm mb-1">Ask Oden</span>
<p className="text-xs text-zinc-500 leading-snug">
              Have a question about automation? Ask our answer engine anything.
            </p>
</div>
</div>

<div className="absolute -bottom-2 right-6 w-4 h-4 bg-white rotate-45"></div>
</div>
<button className="absolute -bottom-14 md:static w-12 h-12 bg-zinc-800 rounded-lg flex items-center justify-center text-white border border-zinc-700 hover:bg-zinc-700 transition-colors ml-auto shadow-xl">
<i className="w-5 h-5" data-lucide="layout-grid"></i>
</button>
</div>


<div className="fixed inset-0 z-[100] bg-white/95 backdrop-blur-xl transform translate-x-full transition-transform duration-500 flex flex-col justify-center items-center gap-8 md:hidden" id="mobile-menu">
<button className="absolute top-6 right-6 p-2 text-zinc-600 hover:text-black" id="close-menu-btn">
<i className="w-8 h-8" data-lucide="x"></i>
</button>
<a className="mobile-link text-3xl font-display text-zinc-900 hover:text-zinc-500 transition-colors" href="#problem">
        The Problem
      </a>
<a className="mobile-link text-3xl font-display text-zinc-900 hover:text-zinc-500 transition-colors" href="#solution">
        The Ecosystem
      </a>
<a className="mobile-link text-3xl font-display text-zinc-900 hover:text-zinc-500 transition-colors" href="#results">
        Proof
      </a>
<a className="mobile-link text-3xl font-display text-zinc-900 hover:text-zinc-500 transition-colors" href="#cta">
        Strategy Session
      </a>
</div>



    </>
  );
}
