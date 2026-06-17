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



    document.getElementById('year').textContent = new Date().getFullYear();
  
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
      
<div className="flex-1 flex flex-col">

<header className="w-full sticky top-0 z-30 bg-white/95 backdrop-blur border-b border-[#d9e4ee]">
<div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">

<a className="inline-flex items-center gap-3" href="/">
<div className="inline-flex items-center justify-center h-9 w-9 rounded-full bg-[#003663]">
<span className="text-sm font-semibold tracking-tight text-white">mb</span>
</div>
<span className="text-lg sm:text-xl font-semibold tracking-tight text-[#003663] uppercase">
            Moneyboat
          </span>
</a>

<nav className="hidden md:flex items-center gap-6 text-sm sm:text-base text-[#003663]">
<div className="relative">
<button className="inline-flex items-center gap-1 hover:text-[#00a9e0]">
<span>Products</span>
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</button>
</div>
<div className="relative">
<button className="inline-flex items-center gap-1 hover:text-[#00a9e0]">
<span>About Us</span>
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</button>
</div>
<a className="hover:text-[#00a9e0]" href="#faq">FAQ</a>
<a className="hover:text-[#00a9e0]" href="#help">Help</a>
</nav>

<div className="flex items-center gap-3">
<a className="hidden sm:inline-flex items-center justify-center rounded-full border border-[#c2d6e6] bg-white px-4 py-2 text-sm sm:text-base font-medium text-[#003663] hover:bg-[#f3f8fc]" href="https://apply.moneyboat.co.uk">
            Log in
          </a>
<a className="inline-flex items-center justify-center rounded-full bg-[#f7931d] text-white px-4 sm:px-5 py-2 sm:py-2.5 text-sm sm:text-base font-semibold tracking-tight hover:bg-[#e88410]" href="https://apply.moneyboat.co.uk">
            Apply now
          </a>
</div>
</div>
</header>

<main className="w-full">

<section className="w-full border-b border-[#d9e4ee] bg-white">
<div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
<div className="rounded-3xl bg-[#00a9e0] px-6 sm:px-10 py-10 sm:py-14 lg:py-16 flex items-center justify-center">
<h1 className="max-w-3xl text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white text-center">
              We’ve helped thousands of UK customers access short term loans when life doesn’t go to plan.
            </h1>
</div>
</div>
</section>

<section className="w-full border-b border-[#d9e4ee] bg-[#f5f7f8]">
<div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 lg:pb-20">
<div className="grid gap-6 lg:grid-cols-2">

<div className="rounded-3xl bg-[#003663] p-6 sm:p-8 flex items-center justify-center">
<div className="w-full max-w-xs sm:max-w-sm bg-white rounded-3xl p-4 sm:p-5 shadow-lg">
<div className="flex items-center justify-between mb-3">
<span className="text-sm sm:text-base font-semibold tracking-tight text-[#003663]">Moneyboat app</span>
<svg className="h-4 w-4 text-[#00a9e0]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="M12 8v4l2 2"></path>
</svg>
</div>
<div className="rounded-2xl border border-[#d9e4ee] bg-[#f5f7f8] p-3 mb-4">
<p className="text-xs sm:text-sm text-[#003663]">Representative example</p>
<p className="mt-1 text-base sm:text-lg font-semibold tracking-tight text-[#003663]">
                    939.2% Representative APR
                  </p>
<p className="mt-1 text-xs sm:text-sm text-[#4a6b8a]">
                    Borrow £400 for 4 months. Total repayable £626.08 in 4 equal payments of £156.52. Interest: £226.08.
                  </p>
</div>
<div className="space-y-3">
<div className="flex items-center justify-between text-xs sm:text-sm text-[#003663]">
<span>Loan amount</span>
<span className="font-medium">£800</span>
</div>
<div>
<div className="h-2 rounded-full bg-[#d9e4ee] overflow-hidden">
<div className="h-full w-2/3 bg-[#00a9e0]"></div>
</div>
<div className="flex justify-between mt-1 text-[0.65rem] sm:text-xs text-[#4a6b8a]">
<span>£200</span>
<span>£1,500</span>
</div>
</div>
</div>
<div className="mt-4 rounded-2xl bg-[#00a9e0] px-4 py-3 text-white">
<p className="text-xs sm:text-sm">Estimated monthly repayment</p>
<p className="mt-1 text-base sm:text-lg font-semibold tracking-tight">£210.23</p>
<p className="mt-2 text-[0.65rem] sm:text-xs text-[#e0f6ff]">
                    This is an example only. Your exact rate and repayment schedule will depend on your circumstances.
                  </p>
</div>
</div>
</div>

<div className="rounded-3xl bg-[#003663] text-white p-7 sm:p-9 flex flex-col justify-between min-h-[18rem]">
<div className="space-y-3">
<p className="text-xs sm:text-sm text-[#b8e5ff]">Moneyboat short term loans</p>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
                  Borrow between £200 and £1,500 with clear repayments and no hidden fees.
                </h2>
</div>
<div className="mt-6 flex flex-wrap items-center gap-3 text-xs sm:text-sm">
<span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 border border-white/20">
                  No application fees
                </span>
<span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 border border-white/20">
                  Direct lender, not a broker
                </span>
<span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 border border-white/20">
                  FCA authorised &amp; regulated
                </span>
</div>
</div>
</div>
</div>
</section>

<section className="w-full border-b border-[#d9e4ee] bg-white" id="how-it-works">
<div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
<div className="max-w-3xl mb-10 sm:mb-12">
<h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-[#003663]">
              How Moneyboat short term loans work
            </h2>
<p className="mt-3 text-base sm:text-lg text-[#003663]">
              Apply online in minutes, get a quick decision and, if approved, receive funds directly to your UK bank account.
            </p>
</div>
<div className="grid gap-6 md:grid-cols-3">

<div className="rounded-3xl border border-[#d9e4ee] bg-[#f5f7f8] p-5 sm:p-6 flex flex-col gap-4">
<div className="inline-flex items-center justify-center h-9 w-9 rounded-full bg-[#00a9e0] text-white text-sm font-medium">
                1
              </div>
<div className="space-y-2">
<h3 className="text-base sm:text-lg font-semibold tracking-tight text-[#003663]">Tell us what you need</h3>
<p className="text-sm sm:text-base text-[#003663]">
                  Choose how much you would like to borrow and for how long, then share some basic personal and affordability details.
                </p>
</div>
<p className="mt-auto text-xs sm:text-sm text-[#4a6b8a]">
                100% online application with no paperwork or application fees.
              </p>
</div>

<div className="rounded-3xl border border-[#d9e4ee] bg-[#f5f7f8] p-5 sm:p-6 flex flex-col gap-4">
<div className="inline-flex items-center justify-center h-9 w-9 rounded-full bg-[#f7931d] text-white text-sm font-medium">
                2
              </div>
<div className="space-y-2">
<h3 className="text-base sm:text-lg font-semibold tracking-tight text-[#003663]">Get a quick decision</h3>
<p className="text-sm sm:text-base text-[#003663]">
                  We complete affordability and credit checks and let you know if we can help, along with your loan terms.
                </p>
</div>
<p className="mt-auto text-xs sm:text-sm text-[#4a6b8a]">
                We only lend where we believe repayments will be manageable.
              </p>
</div>

<div className="rounded-3xl border border-[#d9e4ee] bg-[#f5f7f8] p-5 sm:p-6 flex flex-col gap-4">
<div className="inline-flex items-center justify-center h-9 w-9 rounded-full bg-[#003663] text-white text-sm font-medium">
                3
              </div>
<div className="space-y-2">
<h3 className="text-base sm:text-lg font-semibold tracking-tight text-[#003663]">Funds sent, repay over time</h3>
<p className="text-sm sm:text-base text-[#003663]">
                  If you’re approved and sign your agreement, we aim to send funds the same day. Repay over 2 to 6 months in agreed instalments.
                </p>
</div>
<p className="mt-auto text-xs sm:text-sm text-[#4a6b8a]">
                No early repayment fees if you want to clear your balance sooner.
              </p>
</div>
</div>
</div>
</section>

<section className="w-full border-b border-[#d9e4ee] bg-[#f5f7f8]" id="eligibility">
<div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">

<div>
<h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-[#003663]">
              Who can apply for a Moneyboat loan?
            </h2>
<p className="mt-3 text-base sm:text-lg text-[#003663]">
              Our loans are designed for UK adults who need short term help with cash flow – not a long term borrowing solution.
            </p>
<div className="mt-5 space-y-3 sm:space-y-4">
<div className="flex gap-3">
<div className="mt-1">
<svg className="h-4 w-4 text-[#00a9e0]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 7 10 17l-5-5"></path>
</svg>
</div>
<p className="text-sm sm:text-base text-[#003663]">
                  You are at least 18 years old and a UK resident.
                </p>
</div>
<div className="flex gap-3">
<div className="mt-1">
<svg className="h-4 w-4 text-[#00a9e0]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 7 10 17l-5-5"></path>
</svg>
</div>
<p className="text-sm sm:text-base text-[#003663]">
                  You receive a regular income paid into a UK bank account.
                </p>
</div>
<div className="flex gap-3">
<div className="mt-1">
<svg className="h-4 w-4 text-[#00a9e0]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 7 10 17l-5-5"></path>
</svg>
</div>
<p className="text-sm sm:text-base text-[#003663]">
                  You can afford repayments without falling behind on other commitments.
                </p>
</div>
<div className="flex gap-3">
<div className="mt-1">
<svg className="h-4 w-4 text-[#00a9e0]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 7 10 17l-5-5"></path>
</svg>
</div>
<p className="text-sm sm:text-base text-[#003663]">
                  You agree to a credit and affordability check as part of your application.
                </p>
</div>
</div>
<p className="mt-4 text-[0.65rem] sm:text-xs text-[#4a6b8a]">
              Meeting these criteria does not guarantee approval. We review every application carefully and always lend responsibly.
            </p>
</div>

<div className="rounded-3xl bg-white border border-[#d9e4ee] p-6 sm:p-7 lg:p-8 space-y-5 sm:space-y-6">
<div className="flex items-start gap-3">
<div className="inline-flex items-center justify-center h-9 w-9 rounded-full bg-[#fff4d9]">
<svg className="h-4 w-4 text-[#f7931d]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="M12 16v-4"></path>
<path d="M12 8h.01"></path>
</svg>
</div>
<div>
<p className="text-sm sm:text-base font-semibold tracking-tight text-[#003663]">
                  We lend responsibly
                </p>
<p className="mt-1 text-xs sm:text-sm text-[#003663]">
                  Short term loans are not suitable for long term financial difficulties or ongoing borrowing.
                </p>
</div>
</div>
<p className="text-sm sm:text-base text-[#003663]">
              Late repayments can cause serious money problems. Only apply if you are confident you can afford the repayments in full and on time.
            </p>
<div className="space-y-2">
<p className="text-xs sm:text-sm font-medium text-[#003663]">If you’re struggling with debt:</p>
<ul className="space-y-1 text-xs sm:text-sm text-[#003663] list-disc pl-4">
<li>Contact us as soon as possible to discuss your options.</li>
<li>Speak to free, independent organisations such as StepChange, National Debtline or Citizens Advice.</li>
<li>Visit <span className="underline decoration-[#c2d6e6]">moneyhelper.org.uk</span> for impartial guidance.</li>
</ul>
</div>
<div className="rounded-2xl bg-[#f5f7f8] border border-[#d9e4ee] p-3 sm:p-4">
<p className="text-[0.65rem] sm:text-xs text-[#4a6b8a]">
                Moneyboat is a trading name of Evergreen Finance London Limited, authorised and regulated by the Financial Conduct Authority (FCA). Please read our full terms and conditions before applying.
              </p>
</div>
</div>
</div>
</section>

<section className="w-full border-b border-[#d9e4ee] bg-white" id="faq">
<div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 sm:mb-12">
<div className="max-w-2xl">
<h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-[#003663]">
                Moneyboat short term loan FAQs
              </h2>
<p className="mt-3 text-base sm:text-lg text-[#003663]">
                Answers to common questions about our loans and how we work.
              </p>
</div>
<p className="text-xs sm:text-sm text-[#4a6b8a]" id="help">
              This information does not replace our full terms and conditions. Please review all details before applying.
            </p>
</div>
<div className="grid lg:grid-cols-2 gap-4 sm:gap-5">
<div className="rounded-3xl border border-[#d9e4ee] bg-[#f5f7f8] p-4 sm:p-5 space-y-2">
<p className="text-sm sm:text-base font-medium text-[#003663]">
                How much can I borrow with Moneyboat?
              </p>
<p className="text-xs sm:text-sm text-[#003663]">
                New customers can usually borrow between £200 and £800, subject to affordability and credit checks. Returning customers with a good repayment history may be able to borrow up to £1,500.
              </p>
</div>
<div className="rounded-3xl border border-[#d9e4ee] bg-[#f5f7f8] p-4 sm:p-5 space-y-2">
<p className="text-sm sm:text-base font-medium text-[#003663]">
                How quickly will I receive the funds?
              </p>
<p className="text-xs sm:text-sm text-[#003663]">
                Once we’ve approved your application and you’ve signed your loan agreement, we aim to send funds to your UK bank account on the same day. Exact timings depend on your bank.
              </p>
</div>
<div className="rounded-3xl border border-[#d9e4ee] bg-[#f5f7f8] p-4 sm:p-5 space-y-2">
<p className="text-sm sm:text-base font-medium text-[#003663]">
                Will applying affect my credit score?
              </p>
<p className="text-xs sm:text-sm text-[#003663]">
                We carry out credit checks as part of your application, which may leave a footprint on your credit file. Missing or making late repayments can impact your credit score and future access to credit.
              </p>
</div>
<div className="rounded-3xl border border-[#d9e4ee] bg-[#f5f7f8] p-4 sm:p-5 space-y-2">
<p className="text-sm sm:text-base font-medium text-[#003663]">
                Can I repay my loan early?
              </p>
<p className="text-xs sm:text-sm text-[#003663]">
                Yes. You can repay your Moneyboat loan early in full or in part. We do not charge early settlement fees, and repaying early may reduce the total amount of interest you pay.
              </p>
</div>
</div>
<div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-between gap-4">
<p className="text-xs sm:text-sm text-[#003663]">
              Need more detail? View our full FAQs or contact our UK-based customer support team.
            </p>
<div className="flex flex-wrap gap-3">
<a className="inline-flex items-center gap-2 text-xs sm:text-sm text-[#00a9e0] hover:text-[#003663]" href="https://www.moneyboat.co.uk/faqs">
                View all FAQs
                <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
<a className="inline-flex items-center gap-2 text-xs sm:text-sm text-[#003663] hover:text-[#00a9e0]" href="https://www.moneyboat.co.uk/contact">
                Contact support
              </a>
</div>
</div>
</div>
</section>

<section className="w-full bg-[#f5f7f8]">
<div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
<div className="rounded-3xl bg-[#003663] text-white p-6 sm:p-8 lg:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
<div className="space-y-3 sm:space-y-4 max-w-xl">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
                Ready to see if a Moneyboat loan could help?
              </h2>
<p className="text-base sm:text-lg text-[#b8e5ff]">
                Apply online in minutes, get a quick decision and, if approved, receive funds directly to your UK bank account with clear, short term repayments.
              </p>
<p className="text-[0.65rem] sm:text-xs text-[#d1e6f5]">
                Late repayment can cause serious money problems. For help, visit <span className="underline decoration-[#c2d6e6]">moneyhelper.org.uk</span>.
              </p>
</div>
<div className="space-y-3 w-full max-w-xs md:max-w-sm">
<a className="inline-flex w-full items-center justify-center rounded-full bg-[#f7931d] text-white px-5 py-2.5 sm:py-3 text-sm sm:text-base font-semibold tracking-tight hover:bg-[#e88410]" href="https://apply.moneyboat.co.uk">
                Start your application
              </a>
<p className="text-[0.65rem] sm:text-xs text-[#d1e6f5] text-center">
                Applying is free. We’ll assess affordability and creditworthiness before offering any loan.
              </p>
</div>
</div>
</div>
</section>
</main>

<footer className="w-full border-t border-[#d9e4ee] bg-white">
<div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-8 sm:py-10 space-y-6">
<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
<div className="inline-flex items-center gap-3">
<div className="inline-flex items-center justify-center rounded-full bg-[#003663] h-9 w-9">
<span className="text-sm font-semibold tracking-tight text-white">mb</span>
</div>
<span className="text-base sm:text-lg font-semibold tracking-tight text-[#003663] uppercase">Moneyboat</span>
</div>
<div className="flex flex-wrap gap-4 text-xs sm:text-sm text-[#003663]">
<a className="hover:text-[#00a9e0]" href="https://www.moneyboat.co.uk/terms">Terms &amp; Conditions</a>
<a className="hover:text-[#00a9e0]" href="https://www.moneyboat.co.uk/privacy-policy">Privacy policy</a>
<a className="hover:text-[#00a9e0]" href="https://www.moneyboat.co.uk/contact">Contact</a>
</div>
</div>
<div className="space-y-2">
<p className="text-[0.65rem] sm:text-xs text-[#4a6b8a]">
            Moneyboat is a trading name of Evergreen Finance London Limited, registered in England and Wales (company number). Authorised and regulated by the Financial Conduct Authority (FCA reference number). Registered address: [Insert official registered address].
          </p>
<p className="text-[0.65rem] sm:text-xs text-[#7b94ad]">
            Short term loans are not suitable for long term borrowing or if you are in financial difficulty. Only borrow what you can afford to repay. Missing payments may affect your credit rating and make it harder or more expensive to obtain credit in the future.
          </p>
</div>
<p className="text-[0.65rem] sm:text-xs text-[#a9b9c9]">
          © <span id="year"></span> Moneyboat. All rights reserved.
        </p>
</div>
</footer>
</div>


    </>
  );
}
