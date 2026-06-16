import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



    lucide.createIcons();
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="min-h-screen">
<div className="mx-auto flex max-w-7xl flex-col lg:flex-row">

<div className="order-1 w-full bg-[#FCFCFB] px-4 py-10 sm:px-8 lg:order-2 lg:w-5/12 lg:px-12 lg:py-20">
<div className="sticky top-12 mx-auto max-w-md lg:max-w-none">

<form className="space-y-6">
<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
<div>
<label className="block text-sm font-medium text-[#001414]/80">Player's first name</label>
<input className="mt-2 block w-full rounded-xl border border-[#001414]/15 bg-white px-4 py-3 text-sm font-medium text-[#001414] placeholder-[#001414]/30 transition focus:border-[#F68265] focus:outline-none" placeholder="First name" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-[#001414]/80">Player's last name</label>
<input className="mt-2 block w-full rounded-xl border border-[#001414]/15 bg-white px-4 py-3 text-sm font-medium text-[#001414] placeholder-[#001414]/30 transition focus:border-[#F68265] focus:outline-none" placeholder="Last name" type="text"/>
</div>
</div>
<div>
<label className="block text-sm font-medium text-[#001414]/80">Parent / guardian email</label>
<p className="mt-1 text-xs font-medium text-[#001414]/50">Best email for course access + receipts</p>
<input className="mt-2 block w-full rounded-xl border border-[#001414]/15 bg-white px-4 py-3 text-sm font-medium text-[#001414] placeholder-[#001414]/30 transition focus:border-[#F68265] focus:outline-none" placeholder="parent@example.com" type="email"/>
</div>

<div className="pt-6">
<div className="flex items-end justify-between">
<h3 className="text-lg font-semibold tracking-tight text-[#001414]">Payment details</h3>
<span className="text-xs font-medium text-[#001414]/50">Secured via Stripe</span>
</div>

<div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
<label className="relative flex cursor-pointer rounded-xl border border-[#F68265] bg-[#F68265]/5 p-4 focus:outline-none">
<input checked="" className="sr-only" name="payment_method" type="radio" value="full"/>
<span className="flex flex-1">
<span className="flex flex-col">
<span className="block text-sm font-semibold text-[#001414]">Pay in full</span>
<span className="mt-1 flex items-center text-sm font-medium text-[#001414]/60">$124.25 today</span>
</span>
</span>
<i className="h-5 w-5 fill-[#F68265] text-white" data-lucide="check-circle"></i>
</label>
<label className="relative flex cursor-pointer rounded-xl border border-[#001414]/10 bg-white p-4 transition hover:bg-[#001414]/[0.02] focus:outline-none">
<input className="sr-only" name="payment_method" type="radio" value="installments"/>
<span className="flex flex-1">
<span className="flex flex-col">
<span className="block text-sm font-semibold text-[#001414]">Installments</span>
<span className="mt-1 flex items-center text-sm font-medium text-[#001414]/60">3 x $45/mo</span>
</span>
</span>
</label>
</div>

<div className="mt-4 overflow-hidden rounded-xl border border-[#001414]/15 bg-white shadow-[0_2px_10px_rgba(0,20,20,0.02)] focus-within:border-[#F68265] focus-within:ring-1 focus-within:ring-[#F68265] transition">
<div className="border-b border-[#001414]/10 px-4 py-3">
<div className="flex items-center justify-between">
<input className="w-full text-sm font-medium text-[#001414] placeholder-[#001414]/30 focus:outline-none" placeholder="Card number" type="text"/>
<div className="flex gap-1 text-[#001414]/30">
<i className="h-5 w-5" data-lucide="credit-card" strokeWidth="1.5"></i>
</div>
</div>
</div>
<div className="flex">
<div className="w-1/2 border-r border-[#001414]/10 px-4 py-3">
<input className="w-full text-sm font-medium text-[#001414] placeholder-[#001414]/30 focus:outline-none" placeholder="MM / YY" type="text"/>
</div>
<div className="w-1/2 px-4 py-3">
<input className="w-full text-sm font-medium text-[#001414] placeholder-[#001414]/30 focus:outline-none" placeholder="CVC" type="text"/>
</div>
</div>
</div>
</div>

<div className="pt-4">
<button className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#F68265] px-6 py-4 text-base font-semibold text-white shadow-lg shadow-[#F68265]/20 transition hover:opacity-90" type="submit">
                Complete Enrollment <span className="font-normal opacity-70">—</span> Get Instant Access
                <i className="h-5 w-5" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
<p className="mt-4 flex items-center justify-center gap-1.5 text-center text-xs font-medium text-[#001414]/50">
<i className="h-4 w-4" data-lucide="shield-check"></i> 
                Payment is encrypted. You'll get a receipt and login instructions within 60 seconds.
              </p>
</div>
</form>

<div className="mt-10">
<h3 className="text-lg font-semibold tracking-tight text-[#001414]">
              What She's Getting
            </h3>
<p className="text-sm font-medium text-[#001414]/60">
              Everything included, one more time.
            </p>
<ul className="mt-6 space-y-4">
<li className="flex gap-3">
<i className="mt-0.5 h-5 w-5 shrink-0 text-[#0CCCCC]" data-lucide="check-circle" strokeWidth="1.5"></i>
<span className="text-sm font-medium leading-6 text-[#001414]/80"><strong className="font-semibold text-[#001414]">Module 1:</strong> Mindset &amp; Mental Performance (4 lessons)</span>
</li>
<li className="flex gap-3">
<i className="mt-0.5 h-5 w-5 shrink-0 text-[#0CCCCC]" data-lucide="check-circle" strokeWidth="1.5"></i>
<span className="text-sm font-medium leading-6 text-[#001414]/80"><strong className="font-semibold text-[#001414]">Module 2:</strong> Becoming a Well-Rounded Athlete (5 lessons)</span>
</li>
<li className="flex gap-3">
<i className="mt-0.5 h-5 w-5 shrink-0 text-[#0CCCCC]" data-lucide="check-circle" strokeWidth="1.5"></i>
<span className="text-sm font-medium leading-6 text-[#001414]/80"><strong className="font-semibold text-[#001414]">Module 3:</strong> How to Get Recruited (3 lessons)</span>
</li>
<li className="flex gap-3">
<i className="mt-0.5 h-5 w-5 shrink-0 text-[#0CCCCC]" data-lucide="check-circle" strokeWidth="1.5"></i>
<span className="text-sm font-medium leading-6 text-[#001414]/80">15+ worksheets, templates, logs, and routine cards</span>
</li>
<li className="flex gap-3">
<i className="mt-0.5 h-5 w-5 shrink-0 text-[#0CCCCC]" data-lucide="check-circle" strokeWidth="1.5"></i>
<span className="text-sm font-medium leading-6 text-[#001414]/80">The full Recruitment Guide checklist</span>
</li>
<li className="flex gap-3">
<i className="mt-0.5 h-5 w-5 shrink-0 text-[#0CCCCC]" data-lucide="check-circle" strokeWidth="1.5"></i>
<span className="text-sm font-medium leading-6 text-[#001414]/80">Coach outreach email templates</span>
</li>
<li className="flex gap-3">
<i className="mt-0.5 h-5 w-5 shrink-0 text-[#0CCCCC]" data-lucide="check-circle" strokeWidth="1.5"></i>
<span className="text-sm font-medium leading-6 text-[#001414]/80">The Parent Guide: how to support her recruitment the right way</span>
</li>
<li className="flex gap-3">
<i className="mt-0.5 h-5 w-5 shrink-0 text-[#0CCCCC]" data-lucide="check-circle" strokeWidth="1.5"></i>
<span className="text-sm font-medium leading-6 text-[#001414]/80">The "30 Days to Game Day" planning calendar</span>
</li>
<li className="flex gap-3">
<i className="mt-0.5 h-5 w-5 shrink-0 text-[#0CCCCC]" data-lucide="check-circle" strokeWidth="1.5"></i>
<span className="text-sm font-medium leading-6 text-[#001414]/80">Lifetime access + every future update, free</span>
</li>
</ul>

<div className="mt-10 flex items-start gap-3 rounded-2xl border border-[#001414]/10 bg-white p-5 text-sm font-medium text-[#001414]/70 shadow-[0_4px_14px_rgba(0,20,20,0.03)]">
<i className="mt-0.5 h-5 w-5 shrink-0 text-[#001414]/40" data-lucide="mail" strokeWidth="1.5"></i>
<div>
<span className="mb-1 block font-semibold text-[#001414]">Questions before you enroll?</span>
                Email support@[domain] — a real human answers, usually within a few hours.
              </div>
</div>
</div>
</div>
</div>

<div className="order-2 w-full rounded-r-[2.5rem] border-r border-[#001414]/5 bg-white px-4 py-12 shadow-[4px_0_24px_rgba(0,20,20,0.02)] sm:px-8 lg:order-1 lg:w-7/12 lg:px-12 lg:py-20 xl:px-20 z-10">
<div className="mx-auto max-w-xl lg:ml-auto lg:mr-0">
<a className="mb-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-[#0CCCCC] transition-opacity hover:opacity-80" href="/">
<i className="h-4 w-4" data-lucide="arrow-left" strokeWidth="1.5"></i> 
            Back to Course
          </a>
<p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#F68265]">
            You're one step away.
          </p>
<h1 className="mt-2 text-3xl font-semibold tracking-tight text-[#001414] sm:text-4xl">
            She's about to walk onto a different court.
          </h1>
<p className="mt-4 text-base font-medium leading-7 text-[#001414]/75">
            Complete the form to lock in her spot in Volleyball SOULutions: Built to Compete and get instant access to every module, worksheet, and bonus.
          </p>
<div className="mt-5 flex items-center gap-2 text-sm font-medium text-[#001414]/60">
<i className="h-4 w-4" data-lucide="lock" strokeWidth="1.5"></i> 
            Secure checkout. Instant access.
          </div>

<div className="mt-12 border-t border-[#001414]/10 pt-10">
<h3 className="text-xs font-semibold uppercase tracking-wider text-[#001414]/50">
              Two promises before you hit enroll
            </h3>
<div className="mt-6 space-y-8">
<div className="flex gap-4">
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0CCCCC]/15 text-[#0CCCCC]">
<span className="text-sm font-semibold">1</span>
</div>
<div>
<h4 className="text-base font-semibold text-[#001414]">She gets everything today.</h4>
<p className="mt-2 text-sm font-medium leading-6 text-[#001414]/70">
                    No drip. No waiting period. The second the payment clears, she gets an email with her login and access to every module, lesson, and worksheet.
                  </p>
</div>
</div>
<div className="flex gap-4">
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0CCCCC]/15 text-[#0CCCCC]">
<span className="text-sm font-semibold">2</span>
</div>
<div>
<h4 className="text-base font-semibold text-[#001414]">Her information is safe.</h4>
<p className="mt-2 text-sm font-medium leading-6 text-[#001414]/70">
                    Checkout is secured and encrypted. We never sell or share her email. One click unsubscribes from the nurture emails any time.
                  </p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
