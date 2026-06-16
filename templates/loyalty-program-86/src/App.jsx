import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // Initialize icons with 1.5 stroke width
      function refreshIcons() {
        if (window.lucide && typeof window.lucide.createIcons === 'function') {
          window.lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
        }
      }
      document.addEventListener('DOMContentLoaded', refreshIcons);

      // Modal helpers
      const openSignUp = document.getElementById('openSignUp');
      const openLearnMore = document.getElementById('openLearnMore');
      const signUpModal = document.getElementById('signUpModal');
      const learnMoreModal = document.getElementById('learnMoreModal');

      function openModal(el) {
        el.classList.remove('hidden');
        document.body.classList.add('overflow-hidden');
        refreshIcons();
      }
      function closeModalById(id) {
        const el = document.getElementById(id);
        if (!el) return;
        el.classList.add('hidden');
        document.body.classList.remove('overflow-hidden');
      }

      openSignUp.addEventListener('click', () => openModal(signUpModal));
      openLearnMore.addEventListener('click', () => openModal(learnMoreModal));

      document.querySelectorAll('[data-close-modal]').forEach(btn => {
        btn.addEventListener('click', () => {
          const id = btn.getAttribute('data-close-modal');
          closeModalById(id);
        });
      });

      // Click outside to close
      [signUpModal, learnMoreModal].forEach(modal => {
        modal.addEventListener('click', (e) => {
          if (e.target === modal.firstElementChild) {
            // overlay clicked
            modal.classList.add('hidden');
            document.body.classList.remove('overflow-hidden');
          }
        });
      });

      // Sign up form logic
      const signUpForm = document.getElementById('signUpForm');
      const formError = document.getElementById('formError');
      const signUpSuccess = document.getElementById('signUpSuccess');

      signUpForm.addEventListener('submit', (e) => {
        e.preventDefault();
        formError.classList.add('hidden');

        const pwd = document.getElementById('password').value.trim();
        const confirm = document.getElementById('confirmPassword').value.trim();
        const terms = document.getElementById('terms').checked;

        if (pwd !== confirm) {
          formError.textContent = 'Passwords do not match. Please try again.';
          formError.classList.remove('hidden');
          return;
        }
        if (!terms) {
          formError.textContent = 'Please agree to the Terms & Conditions to continue.';
          formError.classList.remove('hidden');
          return;
        }

        // Simulate success state
        signUpForm.classList.add('hidden');
        signUpSuccess.classList.remove('hidden');
        refreshIcons();
      });

      // Escape key to close any open modal
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          [signUpModal, learnMoreModal].forEach(m => m.classList.add('hidden'));
          document.body.classList.remove('overflow-hidden');
        }
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<main className="w-full max-w-sm">
<section className="relative w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
<div className="flex items-center gap-3 px-5 pt-5">
<div className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-900">
<span className="text-[13px] font-semibold tracking-tight">LP</span>
</div>
<div className="flex-1">
<h1 className="text-[22px] leading-tight tracking-tight text-slate-900 font-semibold">Loyalty Program</h1>
<p className="text-sm text-slate-600">Unlock member-only rates, perks, and rewards.</p>
</div>
</div>
<div className="px-5 py-4">
<div className="grid grid-cols-1 gap-3">
<button className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-sky-600 px-4 py-3.5 text-sm font-medium text-white shadow-sm ring-1 ring-inset ring-sky-600/20 transition-colors hover:bg-sky-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500" id="openSignUp">
<i className="h-5 w-5" data-lucide="user-plus"></i>
<span>Sign Up</span>
</button>
<button className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-4 py-3.5 text-sm font-medium text-slate-900 shadow-sm ring-1 ring-inset ring-slate-200 transition-colors hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500" id="openLearnMore">
<i className="h-5 w-5" data-lucide="info"></i>
<span>Learn More</span>
</button>
</div>
</div>
<div className="mt-2 border-t border-slate-200 px-5 py-3">
<div className="flex items-center gap-2 text-[13px] text-slate-600">
<i className="h-4 w-4" data-lucide="shield-check"></i>
<span>Your data is protected and encrypted.</span>
</div>
</div>
</section>
</main>

<div aria-labelledby="signUpTitle" aria-modal="true" className="fixed inset-0 z-50 hidden" id="signUpModal" role="dialog">
<div className="absolute inset-0 bg-slate-900/40"></div>
<div className="relative z-10 flex min-h-full items-end sm:items-center justify-center p-4">
<div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white shadow-2xl">
<div className="flex items-start justify-between px-5 pt-5">
<div>
<h2 className="text-[22px] leading-tight tracking-tight text-slate-900 font-semibold" id="signUpTitle">Become a Member</h2>
<p className="mt-1 text-sm text-slate-600">Create your free account in a few easy steps and start saving on every stay.</p>
</div>
<button aria-label="Close" className="ml-3 inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500" data-close-modal="signUpModal">
<i className="h-5 w-5" data-lucide="x"></i>
</button>
</div>
<div className="px-5 pb-5">

<form className="mt-4 space-y-4" id="signUpForm">
<div>
<label className="mb-1 block text-sm font-medium text-slate-700" htmlFor="fullName">Full Name</label>
<input className="block w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/20" id="fullName" name="fullName" placeholder="e.g., Jordan Lee" required="" type="text"/>
</div>
<div>
<label className="mb-1 block text-sm font-medium text-slate-700" htmlFor="email">Email Address</label>
<input className="block w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/20" id="email" name="email" placeholder="you@example.com" required="" type="email"/>
</div>
<div>
<label className="mb-1 block text-sm font-medium text-slate-700" htmlFor="mobile">Mobile Number</label>
<input className="block w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/20" id="mobile" inputmode="tel" name="mobile" placeholder="(555) 000-0000" required="" type="tel"/>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
<div>
<label className="mb-1 block text-sm font-medium text-slate-700" htmlFor="password">Create Password</label>
<input className="block w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/20" id="password" minlength="6" name="password" placeholder="Minimum 6 characters" required="" type="password"/>
</div>
<div>
<label className="mb-1 block text-sm font-medium text-slate-700" htmlFor="confirmPassword">Confirm Password</label>
<input className="block w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/20" id="confirmPassword" minlength="6" name="confirmPassword" placeholder="Re-enter password" required="" type="password"/>
</div>
</div>
<div className="pt-1">
<label className="group relative flex cursor-pointer select-none items-start gap-3">
<input className="peer sr-only" id="terms" required="" type="checkbox"/>
<span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded border border-slate-300 bg-white transition-colors peer-checked:border-sky-600 peer-checked:bg-sky-600">
<i className="h-3.5 w-3.5 text-white opacity-0 transition-opacity peer-checked:opacity-100" data-lucide="check"></i>
</span>
<span className="text-sm text-slate-700">
                    I agree to the
                    <a className="underline decoration-slate-300 underline-offset-4 hover:text-slate-900" href="#">Terms &amp; Conditions</a>
</span>
</label>
</div>
<div className="flex items-center gap-3 pt-1">
<button className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-sky-600 px-4 py-3 text-sm font-medium text-white shadow-sm ring-1 ring-inset ring-sky-600/20 transition-colors hover:bg-sky-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500" id="joinNowBtn" type="submit">
<i className="h-5 w-5" data-lucide="sparkles"></i>
<span>Join Now</span>
</button>
</div>
<p className="hidden text-sm text-rose-600" id="formError">Passwords do not match. Please try again.</p>
</form>

<div className="hidden mt-2 rounded-xl border border-sky-100 bg-sky-50 p-4" id="signUpSuccess">
<div className="flex items-start gap-3">
<div className="flex h-9 w-9 items-center justify-center rounded-lg bg-sky-600">
<i className="h-5 w-5 text-white" data-lucide="check-circle-2"></i>
</div>
<div>
<p className="text-[15px] leading-snug text-slate-900 font-medium">Welcome! You’re now part of our Loyalty Program.</p>
<p className="mt-1 text-sm text-slate-600">Enjoy exclusive member-only benefits on your next booking.</p>
</div>
</div>
<div className="mt-4 flex justify-end">
<button className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-3.5 py-2 text-sm font-medium text-slate-900 shadow-sm transition-colors hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500" data-close-modal="signUpModal">
<i className="h-4 w-4" data-lucide="check"></i>
<span>Done</span>
</button>
</div>
</div>
</div>
</div>
</div>
</div>

<div aria-labelledbylearnmoretitle"="" aria-modal="true" className="fixed inset-0 z-50 hidden" id="learnMoreModal" role="dialog">
<div className="absolute inset-0 bg-slate-900/40"></div>
<div className="relative z-10 flex min-h-full items-end sm:items-center justify-center p-4">
<div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white shadow-2xl">
<div className="flex items-start justify-between px-5 pt-5">
<div>
<h2 className="text-[22px] leading-tight tracking-tight text-slate-900 font-semibold" id="learnMoreTitle">How the Loyalty Program Works</h2>
</div>
<button aria-label="Close" className="ml-3 inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500" data-close-modal="learnMoreModal">
<i className="h-5 w-5" data-lucide="x"></i>
</button>
</div>
<div className="px-5 pb-5">
<div className="mt-3 space-y-3">

<div className="rounded-xl border border-slate-200 bg-white p-4">
<div className="flex items-start gap-3">
<div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-900 text-white">
<span className="text-sm font-medium">1</span>
</div>
<div>
<p className="text-[15px] font-medium text-slate-900">Sign Up for Free</p>
<p className="mt-1 text-sm text-slate-600">Create your account in seconds and get instant access to member-only rates and offers.</p>
</div>
</div>
</div>

<div className="rounded-xl border border-slate-200 bg-white p-4">
<div className="flex items-start gap-3">
<div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-900 text-white">
<span className="text-sm font-medium">2</span>
</div>
<div>
<p className="text-[15px] font-medium text-slate-900">Earn Points With Every Stay</p>
<p className="mt-1 text-sm text-slate-600">Book directly through our website or app to collect points on every reservation.</p>
</div>
</div>
</div>

<div className="rounded-xl border border-slate-200 bg-white p-4">
<div className="flex items-start gap-3">
<div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-900 text-white">
<span className="text-sm font-medium">3</span>
</div>
<div>
<p className="text-[15px] font-medium text-slate-900">Redeem Points for Rewards</p>
<p className="mt-1 text-sm text-slate-600">Use your points for free nights, dining credits, or indulgent spa experiences.</p>
</div>
</div>
</div>

<div className="rounded-xl border border-slate-200 bg-white p-4">
<div className="flex items-center gap-2">
<i className="h-5 w-5 text-sky-600" data-lucide="sparkles"></i>
<p className="text-[15px] font-medium text-slate-900">Enjoy Exclusive Member Benefits</p>
</div>
<ul className="mt-3 space-y-2">
<li className="flex items-start gap-2">
<i className="mt-0.5 h-4 w-4 text-sky-600" data-lucide="badge-percent"></i>
<span className="text-sm text-slate-700">Save up to 30% on bookings</span>
</li>
<li className="flex items-start gap-2">
<i className="mt-0.5 h-4 w-4 text-sky-600" data-lucide="arrow-big-up"></i>
<span className="text-sm text-slate-700">Free room upgrades (subject to availability)</span>
</li>
<li className="flex items-start gap-2">
<i className="mt-0.5 h-4 w-4 text-sky-600" data-lucide="clock"></i>
<span className="text-sm text-slate-700">Early check-in and late checkout privileges</span>
</li>
<li className="flex items-start gap-2">
<i className="mt-0.5 h-4 w-4 text-sky-600" data-lucide="ticket-percent"></i>
<span className="text-sm text-slate-700">Access to exclusive promotions and limited-time deals</span>
</li>
<li className="flex items-start gap-2">
<i className="mt-0.5 h-4 w-4 text-sky-600" data-lucide="headphones"></i>
<span className="text-sm text-slate-700">Priority support for bookings and stay preferences</span>
</li>
</ul>
</div>

<div className="rounded-xl border border-slate-200 bg-white p-4">
<div className="flex items-start gap-3">
<div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-900 text-white">
<span className="text-sm font-medium">5</span>
</div>
<div>
<p className="text-[15px] font-medium text-slate-900">Keep Climbing</p>
<p className="mt-1 text-sm text-slate-600">The more you stay, the more you earn — unlocking higher tiers with added privileges and experiences.</p>
</div>
</div>
</div>
</div>
<div className="mt-4 flex justify-end">
<button className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-3.5 py-2 text-sm font-medium text-slate-900 shadow-sm transition-colors hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500" data-close-modal="learnMoreModal">
<i className="h-4 w-4" data-lucide="arrow-left"></i>
<span>Back</span>
</button>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
