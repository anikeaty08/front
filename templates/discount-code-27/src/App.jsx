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
      
<main className="w-full max-w-4xl mx-auto px-4 py-10">

<div className="bg-slate-900/80 border border-slate-800 rounded-2xl shadow-xl shadow-black/40 backdrop-blur-sm px-6 sm:px-10 py-8 sm:py-10">

<header className="mb-8 sm:mb-10">
<div className="flex items-center justify-between gap-4 mb-4">
<div>
<p className="text-xs font-medium uppercase tracking-[0.2em] text-sky-400/80 mb-2">
              Exclusive Mechanical Keyboard Savings
            </p>
<h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-50">
              🏷️ IQUNIX Keyboards Discount Code – Save 10% Anytime
            </h1>
</div>
<div className="hidden sm:flex items-center justify-center rounded-xl border border-slate-700 bg-slate-900 px-4 py-3">
<div className="flex items-center space-x-2">

<svg className="w-7 h-7 text-sky-400" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="16" rx="2" width="20" x="2" y="4"></rect>
<path d="M6 8h.01M10 8h.01M14 8h.01M18 8h.01M8 12h.01M12 12h.01M16 12h.01M7 16h10"></path>
</svg>
<div className="text-right">
<p className="text-[11px] uppercase tracking-[0.18em] text-slate-400">Today’s Best Deal</p>
<p className="text-sm font-medium text-slate-50">Save $10 Instantly</p>
</div>
</div>
</div>
</div>
<p className="text-sm sm:text-base text-slate-300 leading-relaxed">
          Looking for a verified <strong>IQUNIX Keyboards discount code</strong> that actually works? 
          Our always-active promo code gives you real savings on premium mechanical keyboards, keycaps, and desk accessories. 
          Use the exclusive coupon below at checkout to unlock an instant $10 discount on your order—no gimmicks, no expired links, just 
          reliable <strong>IQUNIX deals</strong> you can use anytime you’re ready to upgrade your setup.
        </p>
</header>

<section className="mb-8">
<div className="border border-sky-500/60 bg-sky-500/10 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
<div>
<p className="text-xs font-medium uppercase tracking-[0.2em] text-sky-300 mb-2">
              Verified IQUNIX Keyboards Discount Code
            </p>
<p className="text-base text-slate-100">
              Use this promo code at checkout to get 
              <span className="font-semibold text-sky-300">$10 OFF</span> your next IQUNIX order.
            </p>
</div>
<div className="flex flex-col items-stretch sm:items-end gap-2 w-full sm:w-auto">
<div className="flex items-center gap-2">
<code className="px-3 py-2 rounded-lg bg-slate-950/70 border border-sky-500/60 text-sky-100 text-sm font-mono tracking-[0.18em]">
                LXZ-9J2FDOX
              </code>
</div>
<button className="inline-flex items-center justify-center px-4 py-2 rounded-lg text-xs font-medium tracking-wide bg-sky-500 text-slate-950 hover:bg-sky-400 hover:text-slate-950 border border-sky-400/70 shadow-sm shadow-sky-900/40 transition-colors" type="button">
              Copy &amp; Shop IQUNIX
            </button>
<p className="text-[11px] text-slate-400">
              Works for all users · Always active · $10 instant savings
            </p>
</div>
</div>
</section>

<section className="mb-10">
<h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-50 mb-3">
          Current IQUNIX Keyboards Promo Code
        </h2>
<p className="text-sm text-slate-300 mb-4">
          Here’s the latest verified <strong>IQUNIX Keyboards coupon</strong> you can use right now. 
          We keep this table updated so you always have a working <strong>IQUNIX discount code</strong> on hand.
        </p>
<div className="overflow-hidden rounded-xl border border-slate-800 bg-slate-950/40">
<table className="w-full text-sm">
<thead className="bg-slate-900/80 border-b border-slate-800">
<tr>
<th className="text-left px-4 py-3 text-xs font-medium uppercase tracking-[0.18em] text-slate-400">Discount</th>
<th className="text-left px-4 py-3 text-xs font-medium uppercase tracking-[0.18em] text-slate-400">Code</th>
<th className="text-left px-4 py-3 text-xs font-medium uppercase tracking-[0.18em] text-slate-400">Description</th>
<th className="text-left px-4 py-3 text-xs font-medium uppercase tracking-[0.18em] text-slate-400">Availability</th>
</tr>
</thead>
<tbody>
<tr className="border-t border-slate-800/80 hover:bg-slate-900/80 transition-colors">
<td className="px-4 py-3 text-slate-100 font-medium">$10 OFF</td>
<td className="px-4 py-3">
<span className="inline-flex items-center px-2.5 py-1 rounded-md bg-slate-900 border border-sky-500/70 text-sky-100 font-mono text-xs tracking-[0.18em]">
                    LXZ-9J2FDOX
                  </span>
</td>
<td className="px-4 py-3 text-slate-200">
                  Works for all IQUNIX Keyboards customers on eligible orders.
                </td>
<td className="px-4 py-3 text-slate-300">
                  Always active – use anytime for instant savings.
                </td>
</tr>
</tbody>
</table>
</div>
</section>

<section className="mb-10">
<h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-50 mb-3">
          How to Use the IQUNIX Keyboards Discount Code
        </h2>
<p className="text-sm text-slate-300 mb-3">
          Redeeming your <strong>IQUNIX Keyboards discount code</strong> is quick and simple. 
          Just follow these steps to apply the promo code and secure your $10 savings:
        </p>
<ol className="list-decimal list-inside space-y-2 text-sm text-slate-200">
<li>
            Visit the official IQUNIX store and add your favorite mechanical keyboard, keycaps, or accessories to the cart.
          </li>
<li>
            Proceed to checkout and look for the <strong>“Discount code”</strong> or <strong>“Promo code”</strong> field.
          </li>
<li>
            Enter <code className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-700 text-[11px] font-mono tracking-[0.18em]">LXZ-9J2FDOX</code> exactly as shown.
          </li>
<li>
            Click <strong>Apply</strong> and confirm that the <strong>$10 OFF</strong> discount is reflected in your order total before paying.
          </li>
</ol>
<p className="text-sm text-slate-300 mt-3">
          That’s it—your <strong>IQUNIX deals</strong> are instantly applied, letting you enjoy premium build quality at a better price.
        </p>
</section>

<section className="mb-10">
<h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-50 mb-3">
          Why Choose IQUNIX Keyboards
        </h2>
<p className="text-sm text-slate-300 mb-3">
          IQUNIX Keyboards are known for their sleek industrial design, robust construction, and enthusiast-grade typing experience. 
          When you pair that with a verified <strong>IQUNIX promo code</strong>, you get standout performance without paying full price.
        </p>
<ul className="list-disc list-inside space-y-2 text-sm text-slate-200">
<li>
<strong>Premium build quality:</strong> Aluminum cases, high-end switches, and reliable stabilizers.
          </li>
<li>
<strong>Unique aesthetics:</strong> Clean, modern layouts and colorways to complement any desk setup.
          </li>
<li>
<strong>Comfortable typing:</strong> Thoughtful ergonomics and sound profiles tuned for daily use.
          </li>
<li>
<strong>Better value with coupons:</strong> Use our <strong>IQUNIX coupon</strong> to save $10 on your favorite board or accessory.
          </li>
</ul>
<p className="text-sm text-slate-300 mt-3">
          Whether you’re upgrading from a basic office keyboard or building a dream workstation, this verified 
          <strong>IQUNIX Keyboards discount code</strong> helps you get more for your money.
        </p>
</section>

<section className="mb-10">
<h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-50 mb-3">
          Frequently Asked Questions
        </h2>
<div className="space-y-4 text-sm text-slate-200">
<div>
<p className="font-medium text-slate-100">Is the IQUNIX Keyboards discount code always active?</p>
<p className="text-slate-300">
              Yes. The code <strong>LXZ-9J2FDOX</strong> is listed as always active, so you can use it anytime to get $10 OFF your order, as long as IQUNIX continues to honor the promotion.
            </p>
</div>
<div>
<p className="font-medium text-slate-100">Who can use this IQUNIX promo code?</p>
<p className="text-slate-300">
              The code works for all users—new and returning customers—on qualifying IQUNIX purchases unless otherwise limited by the store.
            </p>
</div>
<div>
<p className="font-medium text-slate-100">Where do I enter the IQUNIX coupon at checkout?</p>
<p className="text-slate-300">
              During checkout, look for the field labeled “Discount code” or “Promo code,” then paste 
              <strong>LXZ-9J2FDOX</strong> and click Apply to see your $10 savings.
            </p>
</div>
<div>
<p className="font-medium text-slate-100">Can I combine this deal with other IQUNIX discounts?</p>
<p className="text-slate-300">
              Most IQUNIX deals cannot be stacked, so in many cases you’ll be able to use only one promo code per order. 
              Always check the final total to confirm which discount gives you the best value.
            </p>
</div>
</div>
</section>

<section className="border-t border-slate-800 pt-6">
<p className="text-sm text-slate-300 mb-3">
          Keep this page bookmarked so you always have a verified <strong>IQUNIX Keyboards discount code</strong> ready for your next upgrade. 
          Whenever you’re shopping for a new board, keycap set, or desk accessory, simply apply 
          <code className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-700 text-[11px] font-mono tracking-[0.18em]">LXZ-9J2FDOX</code> 
          at checkout to claim your $10 savings.
        </p>
<p className="text-sm text-slate-400">
          Enjoy reliable, always-on <strong>IQUNIX deals</strong> and make every keystroke feel like an upgrade.
        </p>
</section>
</div>
</main>

    </>
  );
}
