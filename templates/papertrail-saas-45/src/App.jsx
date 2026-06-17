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
      

<nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-[#FFFFFF]/90 backdrop-blur-md border border-[#E4E0F5] rounded-full px-6 py-3 flex items-center gap-8 shadow-sm bento-card" style={{animationDelay: '0.1s'}}>
<a className="text-base font-medium tracking-tight text-[#0D0D1A] flex items-center gap-2" href="#">
<div className="w-6 h-6 rounded-md bg-[#7C3AED] text-[#FFFFFF] flex items-center justify-center">
<iconify-icon icon="solar:documents-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
            PAPERTRAIL
        </a>
<div className="hidden md:flex items-center gap-6 text-sm">
<a className="hover:text-[#0D0D1A] transition-colors" href="#features">Features</a>
<a className="hover:text-[#0D0D1A] transition-colors" href="#pricing">Pricing</a>
</div>
<a className="bg-[#0D0D1A] text-[#FFFFFF] px-4 py-2 rounded-full text-sm font-medium hover:bg-[#7C3AED] transition-colors" href="#waitlist">
            Get on the list
        </a>
</nav>

<main className="max-w-[1600px] mx-auto mt-24 grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">


<section className="lg:col-span-2 bg-[#FFFFFF] rounded-[2rem] border border-[#E4E0F5] p-8 md:p-12 lg:p-16 flex flex-col justify-center overflow-hidden relative bento-card shadow-sm" style={{animationDelay: '0.2s'}}>
<div className="flex flex-wrap gap-2 mb-8">
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F5F3FF] text-[#7C3AED] text-xs font-medium border border-[#E4E0F5]">
<iconify-icon icon="solar:passport-linear" style={{strokeWidth: '1.5'}}></iconify-icon> Passport
                </span>
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F5F3FF] text-[#7C3AED] text-xs font-medium border border-[#E4E0F5]">
<iconify-icon icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}}></iconify-icon> Insurance
                </span>
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F5F3FF] text-[#7C3AED] text-xs font-medium border border-[#E4E0F5]">
<iconify-icon icon="solar:card-linear" style={{strokeWidth: '1.5'}}></iconify-icon> Visas &amp; Cards
                </span>
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F0EEFF] text-[#6B6080] text-xs font-medium border border-[#E4E0F5]">
                    Closed Beta
                </span>
</div>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-[#0D0D1A] leading-[1.1] max-w-3xl">
                Never let a document expire again.
            </h1>
<p className="mt-6 text-lg md:text-xl text-[#6B6080] max-w-2xl leading-relaxed">
                Passports, insurance, licenses, visas, plus the bills and supplier emails that pile up in your inbox. Add them once. We’ll remind you before the date, by email, push, or your calendar.
            </p>
<div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
<a className="w-full sm:w-auto bg-[#7C3AED] text-[#FFFFFF] px-8 py-4 rounded-full text-base font-medium hover:bg-[#6D28D9] transition-colors flex items-center justify-center gap-2" href="#waitlist">
                    Get on the list <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
<a className="w-full sm:w-auto text-[#0D0D1A] px-8 py-4 rounded-full text-base font-medium hover:bg-[#F5F3FF] transition-colors flex items-center justify-center" href="#features">
                    See how it works ↓
                </a>
</div>
</section>

<section className="lg:col-span-1 bg-[#F5F3FF] rounded-[2rem] border border-[#E4E0F5] p-6 md:p-8 flex flex-col items-center justify-center relative overflow-hidden bento-card shadow-sm" style={{animationDelay: '0.3s'}}>

<div className="absolute top-0 right-0 w-64 h-64 bg-[#7C3AED]/10 blur-3xl rounded-full mix-blend-multiply"></div>
<div className="w-full bg-[#FFFFFF] rounded-2xl border border-[#E4E0F5] shadow-sm overflow-hidden z-10 flex flex-col">
<div className="p-4 border-b border-[#F0EEFF] flex items-center justify-between bg-[#F8F7FF]">
<span className="text-sm font-medium text-[#0D0D1A]">Your Dashboard</span>
<iconify-icon className="text-lg text-[#6B6080]" icon="solar:bell-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="p-2 flex flex-col gap-1">

<div className="flex items-center justify-between p-3 rounded-xl hover:bg-[#F8F7FF] transition-colors">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-[#F5F3FF] text-[#7C3AED] flex items-center justify-center">
<iconify-icon className="text-xl" icon="solar:passport-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-sm font-medium text-[#0D0D1A]">Passport</span>
<span className="text-xs text-[#9080B0]">UK • HM Passport Office</span>
</div>
</div>
<span className="px-2.5 py-1 rounded-md bg-[#10B981]/10 text-[#10B981] text-xs font-medium">Valid</span>
</div>

<div className="flex items-center justify-between p-3 rounded-xl hover:bg-[#F8F7FF] transition-colors">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-[#FFFBEB] text-[#F59E0B] flex items-center justify-center">
<iconify-icon className="text-xl" icon="solar:car-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-sm font-medium text-[#0D0D1A]">Car Insurance</span>
<span className="text-xs text-[#9080B0]">Aviva</span>
</div>
</div>
<span className="px-2.5 py-1 rounded-md bg-[#F59E0B]/10 text-[#F59E0B] text-xs font-medium">28 days</span>
</div>

<div className="flex items-center justify-between p-3 rounded-xl hover:bg-[#F8F7FF] transition-colors">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-[#FEF2F2] text-[#EF4444] flex items-center justify-center">
<iconify-icon className="text-xl" icon="solar:card-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-sm font-medium text-[#0D0D1A]">Debit Card</span>
<span className="text-xs text-[#9080B0]">Monzo</span>
</div>
</div>
<span className="px-2.5 py-1 rounded-md bg-[#EF4444]/10 text-[#EF4444] text-xs font-medium">Expired</span>
</div>
</div>
</div>
<div className="mt-8 text-center">
<p className="text-sm text-[#6B6080]">Glance, tweak, confirm. Less mental load.</p>
</div>
</section>


<section className="lg:col-span-1 bg-[#FFFFFF] rounded-[2rem] border border-[#E4E0F5] p-8 flex flex-col gap-6 bento-card shadow-sm" style={{animationDelay: '0.4s'}}>
<h3 className="text-xl font-medium tracking-tight text-[#0D0D1A] mb-2">People who stopped worrying</h3>
<div className="flex flex-col gap-4 overflow-y-auto max-h-[400px] pr-2">

<div className="p-4 rounded-2xl bg-[#F8F7FF] border border-[#E4E0F5]">
<div className="flex gap-1 text-[#F59E0B] mb-2 text-sm">
<iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-[#0D0D1A] mb-3 leading-relaxed">“Caught my car insurance before it lapsed. I had no idea it was that close.”</p>
<p className="text-xs text-[#9080B0] font-medium">— Tunde, Lagos</p>
</div>

<div className="p-4 rounded-2xl bg-[#F8F7FF] border border-[#E4E0F5]">
<div className="flex gap-1 text-[#F59E0B] mb-2 text-sm">
<iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-[#0D0D1A] mb-3 leading-relaxed">“First time I renewed my passport early. Felt oddly grown-up.”</p>
<p className="text-xs text-[#9080B0] font-medium">— Amara, Accra</p>
</div>

<div className="p-4 rounded-2xl bg-[#F8F7FF] border border-[#E4E0F5]">
<div className="flex gap-1 text-[#F59E0B] mb-2 text-sm">
<iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-[#0D0D1A] mb-3 leading-relaxed">“Six documents, one place. I’m not juggling spreadsheets anymore.”</p>
<p className="text-xs text-[#9080B0] font-medium">— Kefilwe, Johannesburg</p>
</div>
</div>
</section>

<section className="lg:col-span-2 bg-[#FFFFFF] rounded-[2rem] border border-[#E4E0F5] p-8 md:p-12 bento-card shadow-sm" style={{animationDelay: '0.5s'}}>
<div className="max-w-2xl mb-10">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-[#0D0D1A]">You’ve got better things to do.<br/>PaperTrail fills the gap.</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">

<div>
<h4 className="text-base font-medium text-[#0D0D1A] flex items-center gap-2 mb-2">
<iconify-icon className="text-[#EF4444]" icon="solar:danger-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                        Oops, your car insurance ran out
                    </h4>
<p className="text-sm text-[#6B6080] leading-relaxed">It ended weeks ago. No one sent you a big red alert. So now you’re driving and quietly hoping nothing happens.</p>
</div>

<div>
<h4 className="text-base font-medium text-[#0D0D1A] flex items-center gap-2 mb-2">
<iconify-icon className="text-[#3B82F6]" icon="solar:plane-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                        Passport was "fine". Airline disagreed.
                    </h4>
<p className="text-sm text-[#6B6080] leading-relaxed">You had months left on the calendar. They had a rule you didn’t know about. Suddenly your holiday plan wobbles.</p>
</div>

<div>
<h4 className="text-base font-medium text-[#0D0D1A] flex items-center gap-2 mb-2">
<iconify-icon className="text-[#F59E0B]" icon="solar:wallet-money-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                        Card declined. Queue behind you.
                    </h4>
<p className="text-sm text-[#6B6080] leading-relaxed">The new card is still in the mail. The old one picked today to retire. The beep at the till is louder than it should be.</p>
</div>

<div>
<h4 className="text-base font-medium text-[#0D0D1A] flex items-center gap-2 mb-2">
<iconify-icon className="text-[#7C3AED]" icon="solar:letter-opened-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                        Another bill email. "I'll do it later."
                    </h4>
<p className="text-sm text-[#6B6080] leading-relaxed">The PDFs stack up. You meant to pay or switch on time. Then the deadline waved as it drove past.</p>
</div>
</div>
<div className="mt-10 p-6 rounded-2xl bg-[#F8F7FF] border border-[#E4E0F5]">
<p className="text-base font-medium text-[#0D0D1A]">PaperTrail exists for exactly that gap. You add the document once, and we keep the dates on your radar.</p>
</div>
</section>


<section className="lg:col-span-2 bg-[#0D0D1A] rounded-[2rem] border border-[#2A2040] p-8 md:p-12 bento-card shadow-sm text-[#F2F0FF]" id="features" style={{animationDelay: '0.6s'}}>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-[#FFFFFF] mb-2">Three steps. Less last-minute panic.</h2>
<p className="text-lg text-[#9080B0] mb-12">Designed for how messy renewals actually are.</p>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">

<div className="hidden md:block absolute top-8 left-10 right-10 h-[1px] bg-[#2A2040] z-0"></div>

<div className="relative z-10">
<div className="w-16 h-16 rounded-2xl bg-[#1C1728] border border-[#2A2040] flex items-center justify-center text-2xl font-medium text-[#7C3AED] mb-6">01</div>
<h4 className="text-xl font-medium text-[#FFFFFF] mb-3">Get it into PaperTrail</h4>
<p className="text-sm text-[#9080B0] leading-relaxed">Snap a photo, forward a bill or supplier email to The Drop, or import a CSV if you’re migrating a list.</p>
</div>

<div className="relative z-10">
<div className="w-16 h-16 rounded-2xl bg-[#1C1728] border border-[#2A2040] flex items-center justify-center text-2xl font-medium text-[#7C3AED] mb-6">02</div>
<h4 className="text-xl font-medium text-[#FFFFFF] mb-3">Glance, tweak, confirm</h4>
<p className="text-sm text-[#9080B0] leading-relaxed">We pull out the expiry, type, and issuer. You sanity-check it and tap done. No retyping walls of text.</p>
</div>

<div className="relative z-10">
<div className="w-16 h-16 rounded-2xl bg-[#1C1728] border border-[#2A2040] flex items-center justify-center text-2xl font-medium text-[#7C3AED] mb-6">03</div>
<h4 className="text-xl font-medium text-[#FFFFFF] mb-3">We nudge you on your terms</h4>
<p className="text-sm text-[#9080B0] leading-relaxed">Pick email, push, or calendar (or mix them). Optional: track renewal steps when it’s more than one trip to the counter.</p>
</div>
</div>
</section>

<section className="lg:col-span-1 bg-[#7C3AED] rounded-[2rem] p-8 flex flex-col justify-between relative overflow-hidden bento-card shadow-sm" style={{animationDelay: '0.7s'}}>

<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#FFFFFF 1px, transparent 1px)', backgroundSize: '16px 16px'}}></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-xl bg-[#FFFFFF]/10 backdrop-blur-sm border border-[#FFFFFF]/20 flex items-center justify-center text-[#FFFFFF] mb-6">
<iconify-icon className="text-2xl" icon="solar:mailbox-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-2xl font-medium tracking-tight text-[#FFFFFF] mb-3">The Drop</h3>
<p className="text-sm text-[#F5F3FF]/80 leading-relaxed">
                    Forward supplier PDFs, renewal letters, and 'your contract is ending' emails to your private address. We stage what we found; you confirm and we'll remind you.
                </p>
</div>
<div className="mt-8 relative z-10 bg-[#FFFFFF]/10 backdrop-blur-md rounded-xl p-4 border border-[#FFFFFF]/20">
<p className="text-xs text-[#F5F3FF] font-medium opacity-70 mb-2">Forward to:</p>
<div className="flex items-center justify-between">
<p className="text-sm text-[#FFFFFF] truncate">me.1x8a@drop.papertrail.app</p>
<iconify-icon className="text-[#FFFFFF] cursor-pointer hover:opacity-70 transition-opacity" icon="solar:copy-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
</section>


<section className="lg:col-span-1 bg-[#FFFFFF] rounded-[2rem] border border-[#E4E0F5] p-8 flex flex-col bento-card shadow-sm" style={{animationDelay: '0.8s'}}>
<h3 className="text-xl font-medium tracking-tight text-[#0D0D1A] mb-2">If it expires, it counts.</h3>
<p className="text-sm text-[#6B6080] mb-6">Passports to energy bills. One home for the dates.</p>
<div className="flex-1 overflow-y-auto pr-2 flex flex-col gap-3 max-h-[360px]">

<div className="flex items-center justify-between p-3 rounded-xl border border-[#F0EEFF] bg-[#F8F7FF]">
<span className="text-sm font-medium text-[#0D0D1A]">Travel Insurance</span>
<span className="px-2 py-1 rounded-md bg-[#EF4444]/10 text-[#EF4444] text-[10px] uppercase tracking-wider font-semibold">Expires Soon</span>
</div>
<div className="flex items-center justify-between p-3 rounded-xl border border-[#F0EEFF] bg-[#FFFFFF]">
<span className="text-sm font-medium text-[#0D0D1A]">Gym Membership</span>
<span className="px-2 py-1 rounded-md bg-[#F59E0B]/10 text-[#F59E0B] text-[10px] uppercase tracking-wider font-semibold">14 Days Left</span>
</div>
<div className="flex items-center justify-between p-3 rounded-xl border border-[#F0EEFF] bg-[#FFFFFF]">
<span className="text-sm font-medium text-[#0D0D1A]">Driver's License</span>
<span className="px-2 py-1 rounded-md bg-[#10B981]/10 text-[#10B981] text-[10px] uppercase tracking-wider font-semibold">Valid</span>
</div>
<div className="flex items-center justify-between p-3 rounded-xl border border-[#F0EEFF] bg-[#FFFFFF]">
<span className="text-sm font-medium text-[#0D0D1A]">Utility Bill</span>
<span className="px-2 py-1 rounded-md bg-[#F59E0B]/10 text-[#F59E0B] text-[10px] uppercase tracking-wider font-semibold">Due Soon</span>
</div>
<div className="flex items-center justify-between p-3 rounded-xl border border-[#F0EEFF] bg-[#FFFFFF]">
<span className="text-sm font-medium text-[#0D0D1A]">Residence Permit</span>
<span className="px-2 py-1 rounded-md bg-[#3B82F6]/10 text-[#3B82F6] text-[10px] uppercase tracking-wider font-semibold">90 Days Left</span>
</div>
</div>
</section>

<section className="lg:col-span-2 bg-[#FFFFFF] rounded-[2rem] border border-[#E4E0F5] p-8 md:p-12 bento-card shadow-sm" style={{animationDelay: '0.9s'}}>
<div className="mb-10">
<h2 className="text-3xl font-medium tracking-tight text-[#0D0D1A]">Less mental load. Same paperwork.</h2>
<p className="text-base text-[#6B6080] mt-2">One place to see what’s due before it costs you.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">

<div className="flex gap-4">
<div className="w-10 h-10 rounded-xl bg-[#F5F3FF] text-[#7C3AED] flex-shrink-0 flex items-center justify-center mt-1">
<iconify-icon className="text-xl" icon="solar:scanner-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<h4 className="text-base font-medium text-[#0D0D1A] mb-1">Scan, don't retype</h4>
<p className="text-sm text-[#6B6080] leading-relaxed">Point the camera at a card or page. We read the dates and labels so you're not doing data entry at midnight.</p>
</div>
</div>

<div className="flex gap-4">
<div className="w-10 h-10 rounded-xl bg-[#F5F3FF] text-[#7C3AED] flex-shrink-0 flex items-center justify-center mt-1">
<iconify-icon className="text-xl" icon="solar:calendar-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<h4 className="text-base font-medium text-[#0D0D1A] mb-1">Calendar sync</h4>
<p className="text-sm text-[#6B6080] leading-relaxed">Push expiry dates to Google, Outlook, or Apple Calendar so renewals show up where you already live.</p>
</div>
</div>

<div className="flex gap-4">
<div className="w-10 h-10 rounded-xl bg-[#F5F3FF] text-[#7C3AED] flex-shrink-0 flex items-center justify-center mt-1">
<iconify-icon className="text-xl" icon="solar:share-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<h4 className="text-base font-medium text-[#0D0D1A] mb-1">Share without the group chat</h4>
<p className="text-sm text-[#6B6080] leading-relaxed">Send a time-limited link when someone needs the file. Add a password or a watermark on images.</p>
</div>
</div>

<div className="flex gap-4">
<div className="w-10 h-10 rounded-xl bg-[#F5F3FF] text-[#7C3AED] flex-shrink-0 flex items-center justify-center mt-1">
<iconify-icon className="text-xl" icon="solar:checklist-minimalistic-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<h4 className="text-base font-medium text-[#0D0D1A] mb-1">Multi-step renewals</h4>
<p className="text-sm text-[#6B6080] leading-relaxed">Passport-style workflows: appointments, forms, pickup. Lay them out, reorder, and tick through.</p>
</div>
</div>
</div>
</section>


<section className="lg:col-span-2 bg-[#FFFFFF] rounded-[2rem] border border-[#E4E0F5] p-8 md:p-12 bento-card shadow-sm flex flex-col md:flex-row gap-12" id="pricing" style={{animationDelay: '1.0s'}}>
<div className="flex-1">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-[#0D0D1A] mb-4">One plan. Try it free first.</h2>
<p className="text-base text-[#6B6080] mb-8">7 days free, no card to start. Cancel anytime.</p>
<div className="flex items-end gap-2 mb-8">
<span className="text-5xl font-medium tracking-tight text-[#0D0D1A]">$3.99</span>
<span className="text-base text-[#6B6080] mb-2">/month</span>
</div>

<label className="inline-flex items-center cursor-pointer gap-3 p-2 rounded-xl bg-[#F8F7FF] border border-[#E4E0F5] w-max">
<span className="text-sm font-medium text-[#6B6080] px-2">Monthly</span>
<div className="relative">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="w-10 h-6 bg-[#E4E0F5] rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-[#FFFFFF] after:border-[#E4E0F5] after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#7C3AED]"></div>
</div>
<span className="text-sm font-medium text-[#0D0D1A] px-2">Annual <span className="text-[#10B981] ml-1 text-xs bg-[#10B981]/10 px-2 py-0.5 rounded-md">$40/yr</span></span>
</label>
</div>
<div className="flex-1 bg-[#F8F7FF] rounded-2xl p-6 border border-[#E4E0F5]">
<h4 className="text-sm font-medium text-[#0D0D1A] mb-4 uppercase tracking-wider">PaperTrail Premium Includes</h4>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-sm text-[#6B6080]">
<iconify-icon className="text-[#10B981] text-lg mt-0.5 flex-shrink-0" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon> Unlimited documents &amp; tracking
                    </li>
<li className="flex items-start gap-3 text-sm text-[#6B6080]">
<iconify-icon className="text-[#10B981] text-lg mt-0.5 flex-shrink-0" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon> Camera capture (skip the typing)
                    </li>
<li className="flex items-start gap-3 text-sm text-[#6B6080]">
<iconify-icon className="text-[#10B981] text-lg mt-0.5 flex-shrink-0" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon> Email, push, &amp; calendar reminders
                    </li>
<li className="flex items-start gap-3 text-sm text-[#6B6080]">
<iconify-icon className="text-[#10B981] text-lg mt-0.5 flex-shrink-0" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon> Secure, time-limited share links
                    </li>
<li className="flex items-start gap-3 text-sm text-[#6B6080]">
<iconify-icon className="text-[#10B981] text-lg mt-0.5 flex-shrink-0" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon> The Drop (forward supplier emails)
                    </li>
</ul>
</div>
</section>

<section className="lg:col-span-1 bg-[#F8F7FF] rounded-[2rem] border border-[#E4E0F5] p-8 flex flex-col justify-center text-center bento-card shadow-sm relative overflow-hidden" id="waitlist" style={{animationDelay: '1.1s'}}>

<div className="absolute -top-20 -left-20 w-48 h-48 bg-[#7C3AED]/10 blur-3xl rounded-full"></div>
<div className="relative z-10">
<div className="w-12 h-12 mx-auto rounded-full bg-[#FFFFFF] border border-[#E4E0F5] flex items-center justify-center text-[#7C3AED] mb-4 shadow-sm">
<iconify-icon className="text-xl" icon="solar:lock-keyhole-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-2xl font-medium tracking-tight text-[#0D0D1A] mb-2">Want early access?</h3>
<p className="text-sm text-[#6B6080] mb-6 leading-relaxed">Closed beta for now. We’re not onboarding everyone yet. Leave your email — we’ll nudge you when the trial opens.</p>
<form className="flex flex-col gap-3">
<input className="w-full bg-[#FFFFFF] border border-[#E4E0F5] rounded-xl px-4 py-3 text-sm text-[#0D0D1A] placeholder-[#9080B0] focus:outline-none focus:ring-2 focus:ring-[#7C3AED] focus:border-transparent transition-shadow" placeholder="Email address" required="" type="email"/>
<button className="w-full bg-[#0D0D1A] text-[#FFFFFF] rounded-xl px-4 py-3 text-sm font-medium hover:bg-[#7C3AED] transition-colors" type="button">
                        Save my spot
                    </button>
<p className="text-xs text-[#9080B0] mt-2">One email. No spam. Just a heads up.</p>
</form>
</div>
</section>


<section className="lg:col-span-1 bg-[#FFFFFF] rounded-[2rem] border border-[#E4E0F5] p-8 bento-card shadow-sm flex flex-col" style={{animationDelay: '1.2s'}}>
<h3 className="text-xl font-medium tracking-tight text-[#0D0D1A] mb-6">Straight answers.</h3>
<div className="flex-1 flex flex-col gap-4 overflow-y-auto max-h-[300px] pr-2">
<div className="pb-3 border-b border-[#F0EEFF]">
<h4 className="text-sm font-medium text-[#0D0D1A] mb-1">What is The Drop?</h4>
<p className="text-xs text-[#6B6080]">A private email address to forward supplier bills and PDFs directly into your dashboard.</p>
</div>
<div className="pb-3 border-b border-[#F0EEFF]">
<h4 className="text-sm font-medium text-[#0D0D1A] mb-1">Is my data safe?</h4>
<p className="text-xs text-[#6B6080]">Yes. We use industry-standard encryption and never store full card numbers.</p>
</div>
<div className="pb-3 border-b border-[#F0EEFF]">
<h4 className="text-sm font-medium text-[#0D0D1A] mb-1">Can I cancel anytime?</h4>
<p className="text-xs text-[#6B6080]">Absolutely. No lock-in contracts, cancel with one click in your settings.</p>
</div>
<div className="pb-3 border-b border-[#F0EEFF] last:border-0">
<h4 className="text-sm font-medium text-[#0D0D1A]">Does it work in my country?</h4>
</div>
</div>
</section>

<section className="lg:col-span-2 bg-[#F5F3FF] rounded-[2rem] border border-[#E4E0F5] p-8 md:p-12 bento-card shadow-sm flex flex-col justify-between" style={{animationDelay: '1.3s'}}>
<div className="text-center md:text-left flex flex-col md:flex-row items-center md:items-start justify-between gap-8 mb-16">
<div className="max-w-md">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-[#0D0D1A] mb-4">Your passport won't renew itself.</h2>
<p className="text-base text-[#6B6080] mb-8">Add the ID, the policy, or the bill you keep meaning to deal with. We’ll nudge you while there’s still time to act.</p>
<a className="inline-flex bg-[#7C3AED] text-[#FFFFFF] px-6 py-3 rounded-full text-sm font-medium hover:bg-[#6D28D9] transition-colors" href="#waitlist">
                        Get on the list
                    </a>
</div>

<div className="hidden md:flex flex-col gap-[-10px] relative">
<div className="w-32 h-20 rounded-xl bg-[#FFFFFF] border border-[#E4E0F5] shadow-sm transform rotate-6 absolute top-0 right-0 z-10 flex items-center justify-center text-[#7C3AED]">
<iconify-icon className="text-2xl" icon="solar:passport-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="w-32 h-20 rounded-xl bg-[#F8F7FF] border border-[#E4E0F5] shadow-sm transform -rotate-3 mt-10 right-4 relative z-20 flex items-center justify-center text-[#10B981]">
<iconify-icon className="text-2xl" icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
</div>

<footer className="pt-8 border-t border-[#E4E0F5] flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2 text-[#0D0D1A] font-medium tracking-tight text-sm">
<div className="w-5 h-5 rounded bg-[#0D0D1A] text-[#FFFFFF] flex items-center justify-center text-[10px]">
<iconify-icon icon="solar:documents-linear"></iconify-icon>
</div>
                    PAPERTRAIL
                </div>
<div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm text-[#6B6080]">
<a className="hover:text-[#0D0D1A] transition-colors" href="#features">Features</a>
<a className="hover:text-[#0D0D1A] transition-colors" href="#pricing">Pricing</a>
<a className="hover:text-[#0D0D1A] transition-colors" href="#">Privacy</a>
<a className="hover:text-[#0D0D1A] transition-colors" href="#">Terms</a>
<a className="hover:text-[#0D0D1A] transition-colors flex items-center gap-1" href="#">
<iconify-icon icon="solar:letter-linear" style={{strokeWidth: '1.5'}}></iconify-icon> X / Twitter
                    </a>
</div>
</footer>
<p className="text-xs text-center md:text-left text-[#9080B0] mt-6">© 2026 PaperTrail. Built for people who’d rather not think about paperwork twice.</p>
</section>
</main>

    </>
  );
}
