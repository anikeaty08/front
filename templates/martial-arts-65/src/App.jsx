import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      document.addEventListener('DOMContentLoaded', () => {
        // Reveal animations: make all faded sections visible smoothly
        const show = (el) => {
          el.style.opacity = '1';
          el.style.transform = 'none';
        };
        const els = document.querySelectorAll('[data-anim]');
        if ('IntersectionObserver' in window) {
          const io = new IntersectionObserver((entries) => {
            entries.forEach((e) => {
              if (e.isIntersecting) {
                show(e.target);
                io.unobserve(e.target);
              }
            });
          }, { rootMargin: '0px 0px -10% 0px', threshold: 0.1 });
          els.forEach((el) => io.observe(el));
        } else {
          els.forEach(show);
        }
        // Ensure header isn't washed out
        document.querySelectorAll('header [data-anim]').forEach(show);

        // Mobile menu toggle (fixes broken button)
        window.toggleMobileMenu = () => {
          const m = document.getElementById('mobileMenu');
          if (!m) return;
          m.classList.toggle('hidden');
        };

        // Scroll progress
        const sp = document.getElementById('scrollProgress');
        const onScroll = () => {
          const h = document.documentElement;
          const scrolled = (h.scrollTop) / (h.scrollHeight - h.clientHeight) * 100;
          if (sp) sp.style.width = scrolled + '%';
        };
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });

        // Year in footer
        const y = document.getElementById('year');
        if (y) y.textContent = new Date().getFullYear();

        // Lucide icons (consistent 1.5 stroke)
        if (window.lucide && typeof window.lucide.createIcons === 'function') {
          window.lucide.createIcons({ attrs: { 'stroke-width': 1.5 }});
        }

        // Counters
        const animateCounter = (el, to, prefix = '', duration = 1200) => {
          if (!el) return;
          const startTime = performance.now();
          const step = (now) => {
            const p = Math.min((now - startTime) / duration, 1);
            const eased = 0.5 - Math.cos(p * Math.PI) / 2;
            const val = Math.floor(to * eased);
            el.textContent = prefix + val.toLocaleString();
            if (p < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        };
        animateCounter(document.getElementById('mrrCounter'), 6420, '$');
        animateCounter(document.getElementById('membersCounter'), 118, '');

        // Live alerts (populate empty blocks to avoid "ugly" emptiness)
        const renderAlerts = (containerId) => {
          const box = document.getElementById(containerId);
          if (!box) return;
          const items = [
            { icon: 'user-plus', text: 'New signup: Maya K. (Family Plan)' },
            { icon: 'credit-card', text: 'Payment received: $59.00 • Standard' },
            { icon: 'badge-dollar-sign', text: 'Payout scheduled for Friday' }
          ];
          items.forEach((a, i) => {
            const row = document.createElement('div');
            row.className = 'flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-2';
            row.style.opacity = '0';
            row.style.transform = 'translateY(6px)';
            row.innerHTML = `
              <div class="h-6 w-6 rounded-md bg-emerald-500/15 ring-1 ring-emerald-400/25 flex items-center justify-center">
                <i data-lucide="${a.icon}" class="h-3.5 w-3.5 text-emerald-300"></i>
              </div>
              <span class="text-xs text-zinc-200 tracking-tight" style="font-family:Inter,ui-sans-serif,system-ui"> ${a.text} </span>
            `;
            box.appendChild(row);
            setTimeout(() => {
              row.style.transition = 'opacity .35s ease, transform .35s ease';
              row.style.opacity = '1';
              row.style.transform = 'translateY(0)';
              if (window.lucide) window.lucide.createIcons({ attrs: { 'stroke-width': 1.5 }});
            }, 150 + i * 250);
          });
        };
        renderAlerts('liveAlerts');
        renderAlerts('testimonialAlerts');
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div id="scrollProgress" style={{position: 'fixed', top: '0', left: '0', height: '2px', width: '0%', zIndex: '100', background: 'linear-gradient(90deg,#6366f1,#06b6d4)', transition: 'width .25s ease'}}></div>

<div className="pointer-events-none fixed inset-0 -z-10">
<div className="absolute inset-0" style={{background: 'radial-gradient(600px 300px at 15% 10%, rgba(99,102,241,.18), transparent 60%), radial-gradient(500px 250px at 85% 25%, rgba(56,189,248,.18), transparent 55%), radial-gradient(400px 220px at 65% 80%, rgba(34,197,94,.10), transparent 60%)'}}></div>
<div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(9,9,11,0)_0%,rgba(9,9,11,0.75)_40%,rgba(9,9,11,1)_100%)]"></div>
<div className="absolute inset-0 opacity-50" style={{backgroundImage: 'url(\'data:image/svg+xml', svg xmlns=%22http: '//www.w3.org/2000/svg%22 width=%2248%22 height=%2248%22 viewBox=%220 0 48 48%22&gt'}}></div>
</div>

<header className="sticky top-0 z-40">
<div className="mx-auto max-w-7xl px-5">
<div className="mt-4 mb-4 flex items-center justify-between rounded-xl border border-white/10 bg-zinc-900/40 px-4 py-3 backdrop-blur" data-anim="fade" data-delay="0" style={{opacity: '.15', transform: 'translateY(12px)', transition: 'all .6s cubic-bezier(.25,1,.5,1)', animationFillMode: 'both'}}>
<a className="flex items-center gap-2" href="#">
<span className="text-sm text-white tracking-tight font-geist">Clubware</span>
</a>
<nav className="hidden items-center gap-7 md:flex">
<a className="text-sm text-zinc-300 hover:text-white transition-colors font-geist tracking-tight" data-anim="fade" data-delay="100" href="#features" style={{opacity: '.15', transform: 'translateY(10px)', transition: 'all .5s cubic-bezier(.25,1,.5,1)', animationFillMode: 'both'}}>Features</a>
<a className="text-sm text-zinc-300 hover:text-white transition-colors font-geist tracking-tight" data-anim="fade" data-delay="200" href="#pricing" style={{opacity: '.15', transform: 'translateY(10px)', transition: 'all .5s cubic-bezier(.25,1,.5,1)', animationFillMode: 'both'}}>Pricing</a>
<a className="text-sm text-zinc-300 hover:text-white transition-colors font-geist tracking-tight" data-anim="fade" data-delay="300" href="#testimonial" style={{opacity: '.15', transform: 'translateY(10px)', transition: 'all .5s cubic-bezier(.25,1,.5,1)', animationFillMode: 'both'}}>Testimonial</a>
</nav>
<div className="flex items-center gap-3">
<a aria-label="Book a Free Demo" className="inline-flex items-center gap-2 tracking-tight font-geist" data-anim="fade" data-delay="400" href="https://calendly.com/arthur-auffray/clubware-demo" style={{-Green: '#1BFD9C', fontSize: '14px', padding: '.55rem .8rem', letterSpacing: '.04em', borderRadius: '.55rem', border: '2px solid var(--green)', background: 'linear-gradient(to right,rgba(27,253,156,.1) 1%,transparent 40%,transparent 60%,rgba(27,253,156,.1) 100%)', color: 'var(--green)', boxShadow: 'inset 0 0 10px rgba(27,253,156,.35),0 0 9px 3px rgba(27,253,156,.08)'}}>Book a Free Demo</a>
<button aria-label="Open Menu" className="md:hidden p-2 text-zinc-300" onclick="toggleMobileMenu()">
<i className="h-5 w-5" data-lucide="menu"></i>
</button>
</div>
</div>

<div className="hidden rounded-xl border border-white/10 bg-zinc-900/40 backdrop-blur mb-4 p-4" id="mobileMenu">
<nav className="space-y-3">
<a className="block text-sm text-zinc-300 hover:text-white transition-colors font-geist tracking-tight" href="#features">Features</a>
<a className="block text-sm text-zinc-300 hover:text-white transition-colors font-geist tracking-tight" href="#pricing">Pricing</a>
<a className="block text-sm text-zinc-300 hover:text-white transition-colors font-geist tracking-tight" href="#testimonial">Testimonial</a>
<hr className="border-white/10"/>
<a className="block text-sm text-emerald-300 hover:text-emerald-200 transition-colors font-geist tracking-tight" href="https://calendly.com/arthur-auffray/clubware-demo">Book a Free Demo</a>
</nav>
</div>
</div>
</header>

<section className="relative">
<div className="mx-auto max-w-7xl px-5 pt-8 pb-16 md:pb-24">
<div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
<div>
<p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-zinc-900/40 px-3 py-1 text-[11px] text-zinc-300 font-geist tracking-tight" data-anim="fade" data-delay="0" style={{opacity: '.2', transform: 'translateY(10px)', transition: 'all .55s cubic-bezier(.25,1,.5,1)', animationFillMode: 'both'}}>
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span> New: QR code onboarding and auto-renewal
            </p>
<h1 className="mt-4 text-4xl md:text-5xl tracking-tight text-white font-bricolage font-light" data-anim="fade" data-delay="120" style={{opacity: '.2', transform: 'translateY(8px)', transition: 'all .6s cubic-bezier(.25,1,.5,1)', animationFillMode: 'both'}}>
              The All-in-One Platform to Manage and Grow Your <span className="rotate-sync text-white">Martial Arts Club.</span>
</h1>
<p className="mt-4 max-w-xl text-base text-zinc-400 font-geist tracking-tight" data-anim="fade" data-delay="240" style={{opacity: '.2', transform: 'translateY(8px)', transition: 'all .6s cubic-bezier(.25,1,.5,1)', animationFillMode: 'both'}}>
              Stop chasing late payments and drowning in admin. Clubware automates your member billing and onboarding so you can get back on the mat.
            </p>
<div className="mt-6 flex flex-col gap-3 sm:flex-row" data-anim="fade" data-delay="360" style={{opacity: '.2', transform: 'translateY(8px)', transition: 'all .6s cubic-bezier(.25,1,.5,1)', animationFillMode: 'both'}}>
<a className="inline-flex items-center justify-center gap-2 font-geist tracking-tight" href="https://calendly.com/arthur-auffray/clubware-demo" style={{-Green: '#1BFD9C', fontSize: '15px', padding: '.75em 2.1em', letterSpacing: '.06em', borderRadius: '.6em', border: '2px solid var(--green)', background: 'linear-gradient(to right,rgba(27,253,156,.1) 1%,transparent 40%,transparent 60%,rgba(27,253,156,.1) 100%)', color: 'var(--green)', boxShadow: 'inset 0 0 10px rgba(27,253,156,.35),0 0 9px 3px rgba(27,253,156,.08)'}}>
<i className="h-4 w-4" data-lucide="calendar-check-2"></i>
                Book Your Free Demo
              </a>
<span className="text-sm text-zinc-500 self-center sm:self-auto font-geist tracking-tight">Built for any <span className="rotate-sync text-zinc-300">Martial Arts Club.</span></span>
</div>
<div className="mt-8 grid grid-cols-2 gap-6 max-w-sm">
<div className="rounded-lg border border-white/10 bg-zinc-900/50 p-3">
<div className="text-xs text-zinc-400 font-geist tracking-tight">MRR</div>
<div className="mt-1 text-2xl text-white tracking-tight font-bricolage font-light"><span id="mrrCounter">$0</span></div>
</div>
<div className="rounded-lg border border-white/10 bg-zinc-900/50 p-3">
<div className="text-xs text-zinc-400 font-geist tracking-tight">Active Members</div>
<div className="mt-1 text-2xl text-white tracking-tight font-bricolage font-light"><span id="membersCounter">0</span></div>
</div>
</div>
</div>

<div className="relative" data-anim="right" data-delay="180" style={{opacity: '.2', transform: 'translateX(24px)', transition: 'all .75s cubic-bezier(.25,1,.5,1)', animationFillMode: 'both'}}>
<div className="absolute -inset-1 rounded-[28px] bg-gradient-to-b from-emerald-400/15 via-cyan-400/10 to-indigo-400/10 blur-xl opacity-50"></div>
<div className="relative rounded-[28px] border border-white/10 bg-zinc-900/40 p-5 backdrop-blur-md shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)]">
<div className="grid grid-cols-1 gap-4 md:grid-cols-2">

<div className="mx-auto w-full max-w-[320px]">
<div className="relative mx-auto rounded-[2rem] border border-white/10 bg-zinc-950/80 p-3 shadow-2xl" style={{width: '100%', aspectRatio: '9/19'}}>
<div className="absolute inset-3 rounded-[1.6rem] border border-white/10 bg-zinc-900/70 p-4 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)]">

<div className="flex items-center justify-between">
<div className="inline-flex items-center gap-2 rounded-lg bg-emerald-600/20 px-2.5 py-1 ring-1 ring-emerald-400/30">
<i className="h-4 w-4 text-emerald-300" data-lucide="scan-line"></i>
<span className="text-[10px] text-emerald-200 font-geist tracking-tight">QR Onboarding</span>
</div>
<span className="text-[10px] text-zinc-400 font-geist tracking-tight">2 min setup</span>
</div>

<div className="mt-3 grid grid-cols-2 gap-3">
<div className="col-span-1 rounded-xl border border-white/10 bg-white p-2 flex items-center justify-center shadow">
<img alt="QR" className="h-28 w-28 object-contain" src="https://api.qrserver.com/v1/create-qr-code/?data=https%3A%2F%2Fclubware.app%2Fjoin&amp;size=140x140&amp;margin=0"/>
</div>
<div className="col-span-1">
<p className="text-sm text-white font-geist tracking-tight">Scan to Join</p>
<p className="mt-1 text-[11px] text-zinc-300/90 leading-5 font-geist tracking-tight">Parents or students add details, sign your waiver, and add a payment method.</p>
<div className="mt-2 inline-flex items-center gap-1 rounded-md bg-white text-zinc-900 px-2.5 py-1.5 text-[11px] ring-1 ring-white/60 shadow-sm">
<i className="h-3.5 w-3.5" data-lucide="credit-card"></i>
                            Secure checkout
                          </div>
</div>
</div>

<div className="mt-4 rounded-xl border border-white/10 bg-zinc-900/70 p-3 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)]">
<div className="text-[11px] text-zinc-300 font-geist tracking-tight">Your Custom Plans</div>
<div className="mt-2 grid grid-cols-3 gap-2">
<div className="rounded-lg border border-white/10 bg-white/[0.03] p-2 text-center shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)]">
<div className="text-[11px] text-zinc-300 font-geist tracking-tight">Basic</div>
<div className="text-sm text-white font-geist tracking-tight">$39</div>
</div>
<div className="rounded-lg border border-white/10 bg-white/[0.03] p-2 text-center shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)]">
<div className="text-[11px] text-zinc-300 font-geist tracking-tight">Standard</div>
<div className="text-sm text-white font-geist tracking-tight">$59</div>
</div>
<div className="rounded-lg border border-white/10 bg-white/[0.03] p-2 text-center shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)]">
<div className="text-[11px] text-zinc-300 font-geist tracking-tight">Family</div>
<div className="text-sm text-white font-geist tracking-tight">$79</div>
</div>
</div>
</div>
<div className="absolute left-1/2 -translate-x-1/2 bottom-2 h-1.5 w-16 rounded-full bg-white/10"></div>
</div>
</div>
</div>

<div className="flex flex-col gap-4">

<div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-md shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)]">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="h-7 w-7 rounded-md bg-emerald-500/15 ring-1 ring-emerald-400/25 flex items-center justify-center">
<i className="h-4 w-4 text-emerald-300" data-lucide="grid-2x2"></i>
</div>
<span className="text-sm text-white font-geist tracking-tight">Live Alerts</span>
</div>
<span className="text-[10px] text-zinc-400 font-geist tracking-tight">Realtime</span>
</div>
<div className="mt-3 space-y-2" id="liveAlerts">

</div>
</div>

<div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-md shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)]">
<div className="flex items-center justify-between">
<span className="text-sm text-white font-geist tracking-tight">Balance</span>
<span className="text-[10px] text-zinc-400 font-geist tracking-tight">Payouts weekly</span>
</div>
<div className="mt-2 text-3xl md:text-4xl text-white tracking-tight font-bricolage font-light">$8,942</div>
<div className="mt-3 grid grid-cols-2 gap-2">
<div className="rounded-xl border border-emerald-400/20 bg-emerald-500/10 p-3">
<div className="text-[11px] text-emerald-300 font-geist tracking-tight">Successful</div>
<div className="mt-1 text-sm text-white font-geist tracking-tight leading-tight">
<span className="text-lg font-light font-bricolage tracking-tight">34</span><br/>payments
                        </div>
</div>
<div className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
<div className="text-[11px] text-zinc-300 font-geist tracking-tight">Retries</div>
<div className="mt-1 text-sm text-white font-geist tracking-tight leading-tight">
<span className="text-lg font-light font-bricolage tracking-tight">2</span><br/>scheduled
                        </div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative border-t border-white/10">
<div className="mx-auto max-w-7xl px-5 py-16 md:py-20">
<div className="max-w-3xl" data-delay="0" dataanim="fade" style={{opacity: '.2', transform: 'translateY(10px)', transition: 'all .6s cubic-bezier(.25,1,.5,1)', animationFillMode: 'both'}}>
<h2 className="text-3xl md:text-4xl tracking-tight text-white font-bricolage font-light">Spend Less Time on Admin, More Time Coaching.</h2>
</div>
<div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
<div className="rounded-2xl border border-white/10 bg-zinc-900/40 p-6" data-anim="left" data-delay="100" style={{opacity: '.2', transform: 'translateX(-24px)', transition: 'all .7s cubic-bezier(.25,1,.5,1)', animationFillMode: 'both'}}>
<div className="flex items-center gap-2">
<div className="h-10 w-10 rounded-md bg-emerald-500/15 ring-1 ring-emerald-400/20 flex items-center justify-center">
<i className="h-5 w-5 text-emerald-300" data-lucide="dollar-sign"></i>
</div>
<h3 className="text-lg text-white font-geist tracking-tight">Chasing Payments</h3>
</div>
<p className="mt-2 text-sm text-zinc-400 font-geist tracking-tight">Manually sending reminders, tracking bank transfers, and dealing with late payments every term is a drain on your time.</p>
</div>
<div className="rounded-2xl border border-white/10 bg-zinc-900/40 p-6" data-anim="right" data-delay="150" style={{opacity: '.2', transform: 'translateX(24px)', transition: 'all .7s cubic-bezier(.25,1,.5,1)', animationFillMode: 'both'}}>
<div className="flex items-center gap-2">
<div className="h-10 w-10 rounded-md bg-cyan-500/15 ring-1 ring-cyan-400/20 flex items-center justify-center">
<i className="h-5 w-5 text-cyan-300" data-lucide="file-pen-line"></i>
</div>
<h3 className="text-lg text-white font-geist tracking-tight">Manual Onboarding</h3>
</div>
<p className="mt-2 text-sm text-zinc-400 font-geist tracking-tight">Paper forms get lost, handwriting is hard to read, and waivers are a hassle to manage and store.</p>
</div>
<div className="rounded-2xl border border-white/10 bg-zinc-900/40 p-6" data-anim="left" data-delay="200" style={{opacity: '.2', transform: 'translateX(-24px)', transition: 'all .7s cubic-bezier(.25,1,.5,1)', animationFillMode: 'both'}}>
<div className="flex items-center gap-2">
<div className="h-10 w-10 rounded-md bg-violet-500/15 ring-1 ring-violet-400/20 flex items-center justify-center">
<i className="h-5 w-5 text-violet-300" data-lucide="user-x-2"></i>
</div>
<h3 className="text-lg text-white font-geist tracking-tight">Low Member Retention</h3>
</div>
<p className="mt-2 text-sm text-zinc-400 font-geist tracking-tight">When members pay manually each term, it's easy for them to drop off. There's no momentum carrying them into the next term.</p>
</div>
<div className="rounded-2xl border border-white/10 bg-zinc-900/40 p-6" data-anim="right" data-delay="250" style={{opacity: '.2', transform: 'translateX(24px)', transition: 'all .7s cubic-bezier(.25,1,.5,1)', animationFillMode: 'both'}}>
<div className="flex items-center gap-2">
<div className="h-10 w-10 rounded-md bg-amber-500/15 ring-1 ring-amber-400/20 flex items-center justify-center">
<i className="h-5 w-5 text-amber-300" data-lucide="circle-help"></i>
</div>
<h3 className="text-lg text-white font-geist tracking-tight">No Financial Clarity</h3>
</div>
<p className="mt-2 text-sm text-zinc-400 font-geist tracking-tight">Guessing your monthly revenue and club growth based on confusing bank statements makes it impossible to plan for the future.</p>
</div>
</div>
</div>
</section>

<section className="relative border-t border-white/10" id="features">
<div className="mx-auto max-w-7xl px-5 py-16 md:py-20">
<div className="mb-10 flex items-end justify-between">
<div data-anim="fade" data-delay="0" style={{opacity: '.2', transform: 'translateY(10px)', transition: 'all .6s cubic-bezier(.25,1,.5,1)', animationFillMode: 'both'}}>
<h2 className="text-3xl md:text-4xl tracking-tight text-white font-bricolage font-light">Everything You Need to Run a Modern Dojo.</h2>
<p className="mt-2 max-w-2xl text-zinc-400 font-geist tracking-tight">Automated billing, instant onboarding, real-time insights, and tools designed for coaches.</p>
</div>
<span className="hidden md:inline-flex text-sm text-zinc-400 font-geist tracking-tight rotate-sync" data-anim="fade" data-delay="120" style={{opacity: '.2', transform: 'translateY(10px)', transition: 'all .6s cubic-bezier(.25,1,.5,1)', animationFillMode: 'both'}}>Martial Arts Club.</span>
</div>
<div className="grid grid-cols-1 gap-6 md:grid-cols-3">
<div className="rounded-2xl border border-white/10 bg-zinc-900/40 p-6 hover:bg-zinc-900/60 transition" data-anim="fade" data-delay="0" style={{opacity: '.2', transform: 'translateY(12px)', transition: 'all .65s cubic-bezier(.25,1,.5,1)', animationFillMode: 'both'}}>
<div className="flex h-10 w-10 items-center justify-center rounded-md bg-emerald-500/20 ring-1 ring-emerald-300/30">
<i className="h-5 w-5 text-emerald-300" data-lucide="receipt-text"></i>
</div>
<h3 className="mt-4 text-lg text-white font-geist tracking-tight">Automated Recurring Billing</h3>
<p className="mt-2 text-sm text-zinc-400 font-geist tracking-tight">Set up monthly or term subscriptions in minutes. Charges run on schedule, boosting cash flow and retention. Powered by Stripe for bank‑grade security.</p>
</div>
<div className="rounded-2xl border border-white/10 bg-zinc-900/40 p-6 hover:bg-zinc-900/60 transition" data-anim="fade" data-delay="100" style={{opacity: '.2', transform: 'translateY(12px)', transition: 'all .65s cubic-bezier(.25,1,.5,1)', animationFillMode: 'both'}}>
<div className="flex h-10 w-10 items-center justify-center rounded-md bg-cyan-500/20 ring-1 ring-cyan-300/30">
<i className="h-5 w-5 text-cyan-300" data-lucide="qr-code"></i>
</div>
<h3 className="mt-4 text-lg text-white font-geist tracking-tight">Instant QR Code Onboarding</h3>
<p className="mt-2 text-sm text-zinc-400 font-geist tracking-tight">New students scan, fill details, sign your digital agreement, and add payment in under two minutes. No more paperwork.</p>
</div>
<div className="rounded-2xl border border-white/10 bg-zinc-900/40 p-6 hover:bg-zinc-900/60 transition" data-anim="fade" data-delay="200" style={{opacity: '.2', transform: 'translateY(12px)', transition: 'all .65s cubic-bezier(.25,1,.5,1)', animationFillMode: 'both'}}>
<div className="flex h-10 w-10 items-center justify-center rounded-md bg-indigo-500/20 ring-1 ring-indigo-300/30">
<i className="h-5 w-5 text-indigo-300" data-lucide="layout-dashboard"></i>
</div>
<h3 className="mt-4 text-lg text-white font-geist tracking-tight">Central Admin Dashboard</h3>
<p className="mt-2 text-sm text-zinc-400 font-geist tracking-tight">View MRR, active subscriptions, new members, and balance at a glance. Make decisions with real data.</p>
</div>
</div>
<div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
<div className="rounded-2xl border border-white/10 bg-zinc-900/40 p-6 hover:bg-zinc-900/60 transition" data-anim="fade" data-delay="0" style={{opacity: '.2', transform: 'translateY(12px)', transition: 'all .65s cubic-bezier(.25,1,.5,1)', animationFillMode: 'both'}}>
<div className="flex h-10 w-10 items-center justify-center rounded-md bg-violet-500/20 ring-1 ring-violet-300/30">
<svg className="text-violet-300" fill="none" height="20" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="20">
<path d="M3 8h18v3H3z"></path>
<path d="M3 11l6 5m12-5-6 5"></path>
<path d="M9 16l3-2 3 2-3 2-3-2z"></path>
</svg>
</div>
<h3 className="mt-4 text-lg text-white font-geist tracking-tight">Designed for Martial Arts</h3>
<p className="mt-2 text-sm text-zinc-400 font-geist tracking-tight">Track belt ranks and grades in each member profile. Perfect for Judo, BJJ, Karate, and more.</p>
</div>
<div className="rounded-2xl border border-white/10 bg-zinc-900/40 p-6 hover:bg-zinc-900/60 transition" data-anim="fade" data-delay="100" style={{opacity: '.2', transform: 'translateY(12px)', transition: 'all .65s cubic-bezier(.25,1,.5,1)', animationFillMode: 'both'}}>
<div className="flex h-10 w-10 items-center justify-center rounded-md bg-rose-500/20 ring-1 ring-rose-300/30">
<i className="h-5 w-5 text-rose-300" data-lucide="shirt"></i>
</div>
<h3 className="mt-4 text-lg text-white font-geist tracking-tight">One-Off Product Sales</h3>
<p className="mt-2 text-sm text-zinc-400 font-geist tracking-tight">Sell (Gis), merch, or event registrations as one-time purchases, charged to the card on file.</p>
</div>
<div className="rounded-2xl border border-white/10 bg-zinc-900/40 p-6 hover:bg-zinc-900/60 transition" data-anim="fade" data-delay="200" style={{opacity: '.2', transform: 'translateY(12px)', transition: 'all .65s cubic-bezier(.25,1,.5,1)', animationFillMode: 'both'}}>
<div className="flex h-10 w-10 items-center justify-center rounded-md bg-cyan-500/20 ring-1 ring-cyan-300/30">
<div className="relative">
<i className="h-5 w-5 text-cyan-300" data-lucide="smartphone"></i>
<i className="h-3 w-3 text-cyan-300 absolute -right-1 -top-1" data-lucide="bell"></i>
</div>
</div>
<h3 className="mt-4 text-lg text-white font-geist tracking-tight">PWA &amp; Push Notifications</h3>
<p className="mt-2 text-sm text-zinc-400 font-geist tracking-tight">Manage your club from any device—no app store needed. Get alerts for new signups, payments, and payouts.</p>
</div>
</div>
</div>
</section>

<section className="relative border-t border-white/10" id="testimonial">
<div className="relative">
<div className="absolute inset-0" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1597484662257-9403b1a7c1c2?q=80&amp', backgroundSize: 'cover', backgroundPosition: 'center', filter: 'blur(2px)', opacity: '.5'}}></div>
<div className="absolute inset-0 bg-zinc-950/70"></div>
<div className="relative mx-auto max-w-6xl px-5 py-16 md:py-24">
<div className="max-w-3xl">
<h3 className="text-2xl md:text-3xl tracking-tight text-white font-bricolage font-light" data-anim="fade" data-delay="0" style={{opacity: '.2', transform: 'translateY(8px)', transition: 'all .6s cubic-bezier(.25,1,.5,1)', animationFillMode: 'both'}}>
              "Clubware has been an absolutely incredible game-changer for our dojo."
            </h3>
<p className="mt-4 text-zinc-300 font-geist tracking-tight" data-anim="fade" data-delay="120" style={{opacity: '.2', transform: 'translateY(8px)', transition: 'all .6s cubic-bezier(.25,1,.5,1)', animationFillMode: 'both'}}>
              "Before Clubware, I was spending at least 5 hours a month on admin and chasing late payments. Now, it's completely automated. Our member retention has significantly increased because the seamless auto-renewal process makes it so easy for parents. It just works."
            </p>
<div className="mt-4 text-sm text-zinc-400 font-geist tracking-tight" data-anim="fade" data-delay="220" style={{opacity: '.2', transform: 'translateY(8px)', transition: 'all .6s cubic-bezier(.25,1,.5,1)', animationFillMode: 'both'}}>
              — Simon Greenhill, Head Coach • North Shore Judo
            </div>
</div>

<div className="mt-10 max-w-md rounded-xl border border-white/10 bg-zinc-900/50 p-4 backdrop-blur" data-anim="fade" data-delay="300" style={{opacity: '.2', transform: 'translateY(8px)', transition: 'all .6s cubic-bezier(.25,1,.5,1)', animationFillMode: 'both'}}>
<div className="flex items-center justify-between">
<span className="text-sm text-white font-geist tracking-tight">Live Alerts</span>
<span className="text-[10px] text-zinc-400 font-geist tracking-tight">As they happen</span>
</div>
<div className="mt-3 space-y-2" id="testimonialAlerts">

</div>
</div>
</div>
</div>
</section>

<section className="relative border-t border-white/10" id="pricing">
<div className="mx-auto max-w-7xl px-5 py-16 md:py-20">
<div className="grid grid-cols-1 gap-8 md:grid-cols-2">
<div data-anim="left" data-delay="0" style={{opacity: '.2', transform: 'translateX(-24px)', transition: 'all .7s cubic-bezier(.25,1,.5,1)', animationFillMode: 'both'}}>
<h2 className="text-3xl md:text-4xl tracking-tight text-white font-bricolage font-light">Simple, Transparent, Pay-As-You-Grow Pricing.</h2>
<p className="mt-4 text-2xl text-white font-bricolage tracking-tight font-light">We only make money when you do.</p>
<p className="mt-3 text-sm text-zinc-400 font-geist tracking-tight">This single fee includes all payment processing and platform costs. What you see is what you get.</p>
<ul className="mt-6 space-y-2 text-sm">
<li className="flex items-center gap-2 text-zinc-200 font-geist tracking-tight">
<i className="h-4 w-4 text-emerald-400" data-lucide="check"></i>
                No setup fees.
              </li>
<li className="flex items-center gap-2 text-zinc-200 font-geist tracking-tight">
<i className="h-4 w-4 text-emerald-400" data-lucide="check"></i>
                No monthly subscriptions.
              </li>
<li className="flex items-center gap-2 text-zinc-200 font-geist tracking-tight">
<i className="h-4 w-4 text-emerald-400" data-lucide="check"></i>
                No surprises.
              </li>
</ul>
</div>
<div className="rounded-2xl border border-white/10 bg-zinc-900/40 p-8" data-anim="right" data-delay="100" style={{opacity: '.2', transform: 'translateX(24px)', transition: 'all .7s cubic-bezier(.25,1,.5,1)', animationFillMode: 'both'}}>
<div className="flex items-baseline gap-2">
<div className="text-5xl text-white tracking-tight font-bricolage font-light">10%</div>
<div className="text-zinc-400 font-geist tracking-tight">per transaction</div>
</div>
<div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
<a className="inline-flex items-center justify-center gap-2 font-geist tracking-tight" href="https://calendly.com/arthur-auffray/clubware-demo" style={{-Green: '#1BFD9C', fontSize: '15px', padding: '.8em 2.1em', letterSpacing: '.06em', borderRadius: '.6em', border: '2px solid var(--green)', background: 'linear-gradient(to right,rgba(27,253,156,.1) 1%,transparent 40%,transparent 60%,rgba(27,253,156,.1) 100%)', color: 'var(--green)', boxShadow: 'inset 0 0 10px rgba(27,253,156,.35),0 0 9px 3px rgba(27,253,156,.08)'}}>
                Book a Free Demo
              </a>
<a className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/5 px-6 py-3 text-sm text-white ring-1 ring-white/10 transition hover:bg-white/10 hover:ring-white/30 font-geist tracking-tight" href="#features">
                See how it works
              </a>
</div>
<p className="mt-4 text-xs text-zinc-500 font-geist tracking-tight">Includes card processing fees, secure vaulting, and all platform features.</p>
</div>
</div>
</div>
</section>

<section className="relative border-t border-white/10">
<div className="mx-auto max-w-7xl px-5 py-16 md:py-20">
<div className="text-center" data-anim="fade" data-delay="0" style={{opacity: '.2', transform: 'translateY(10px)', transition: 'all .6s cubic-bezier(.25,1,.5,1)', animationFillMode: 'both'}}>
<h2 className="text-3xl md:text-4xl tracking-tight text-white font-bricolage font-light">Ready to Modernize Your Club?</h2>
<p className="mt-3 max-w-2xl mx-auto text-zinc-400 font-geist tracking-tight">See exactly how Clubware can save you time and increase your revenue. Book a free, no‑obligation 15‑minute demo with our founder.</p>
<div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
<a className="inline-flex items-center justify-center gap-2 font-geist tracking-tight" href="https://calendly.com/arthur-auffray/clubware-demo" style={{-Green: '#1BFD9C', fontSize: '15px', padding: '.85em 2.4em', letterSpacing: '.06em', borderRadius: '.6em', border: '2px solid var(--green)', background: 'linear-gradient(to right,rgba(27,253,156,.1) 1%,transparent 40%,transparent 60%,rgba(27,253,156,.1) 100%)', color: 'var(--green)', boxShadow: 'inset 0 0 10px rgba(27,253,156,.35),0 0 9px 3px rgba(27,253,156,.08)'}}>
              Book Your Free Demo Now
            </a>
<span className="self-center text-sm text-zinc-500 font-geist tracking-tight">Built for any <span className="rotate-sync text-zinc-300">Martial Arts Club.</span></span>
</div>
</div>
</div>
</section>

<footer className="relative border-t border-white/10 bg-zinc-950/50 backdrop-blur">
<div className="mx-auto max-w-7xl px-5 py-12">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
<div>
<div className="text-lg text-white tracking-tight font-geist">Clubware</div>
<p className="mt-2 text-sm text-zinc-400 font-geist tracking-tight max-w-xs">Automated billing and onboarding for clubs and studios.</p>
</div>
<div>
<h4 className="text-sm text-white font-geist tracking-tight mb-3">Company</h4>
<ul className="space-y-2 text-sm text-zinc-400">
<li><a className="hover:text-white transition-colors font-geist tracking-tight" href="mailto:contact@clubware.app">Contact</a></li>
<li><a className="hover:text-white transition-colors font-geist tracking-tight" href="https://calendly.com/arthur-auffray/clubware-demo">Book a Demo</a></li>
<li><a className=":text-white transition-colors font-geist tracking-tight" href="#testimonial">Testimonials</a></li>
</ul>
</div>
<div>
<h4 className="text-sm text-white font-geist tracking-tight mb-3">Product</h4>
<ul className="space-y-2 text-sm text-zinc-400">
<li><a className="hover:text-white transition-colors font-geist tracking-tight" href="#features">Features</a></li>
<li><a className="hover:text-white transition-colors font-geist tracking-tight" href="#pricing">Pricing</a></li>
<li><a className="hover:text-white transition-colors font-geist tracking-tight" href="#">Status</a></li>
</ul>
</div>
<div>
<h4 className="text-sm text-white font-geist tracking-tight mb-3">Legal</h4>
<ul className="space-y-2 text-sm text-zinc-400">
<li><a className="hover:text-white transition-colors font-geist tracking-tight" href="#">Privacy</a></li>
<li><a className="hover:text-white transition-colors font-geist tracking-tight" href="#">Terms</a></li>
<li><a className="hover:text-white transition-colors font-geist tracking-tight" href="#">Cookies</a></li>
</ul>
</div>
</div>
<div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6">
<span className="text-xs text-zinc-500 font-geist tracking-tight">© <span id="year"></span> Clubware. All rights reserved.</span>
<div className="flex items-center gap-4 text-zinc-400">
<a className="text-xs hover:text-white transition-colors font-geist tracking-tight" href="#">Twitter</a>
<a className="text-xs hover:text-white transition-colors font-geist tracking-tight" href="#">Instagram</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
