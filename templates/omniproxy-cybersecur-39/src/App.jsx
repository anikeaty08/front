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



        // Store your actual Stripe Payment Links here
        const stripeLinks = {
            lite: 'https://buy.stripe.com/test_lite_link_here',
            executive: 'https://buy.stripe.com/test_executive_link_here'
        };

        let currentPlan = 'lite';

        // Update selected plan visually (no button text change needed as it redirects)
        function updatePrice(plan) {
            currentPlan = plan;
        }

        document.getElementById('checkout-form').addEventListener('submit', function(e) {
            e.preventDefault();
            const btn = document.getElementById('submit-btn');
            const email = document.getElementById('email').value;
            
            // Loading state
            btn.innerHTML = '<iconify-icon icon="solar:refresh-circle-linear" class="animate-spin text-lg inline-block align-middle"></iconify-icon> Redirecting...';
            btn.style.opacity = '0.8';
            btn.disabled = true;

            // Build the final URL, prefilling the email to save the user a step
            const redirectUrl = stripeLinks[currentPlan] + '?prefilled_email=' + encodeURIComponent(email);

            // Redirect after a tiny delay for visual feedback
            setTimeout(() => {
                window.location.href = redirectUrl;
            }, 600);
        });
    
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
      

<div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] rounded-full bg-[radial-gradient(circle,#14b8a6_0%,transparent_70%)] blur-[80px] animate-orb pointer-events-none z-0"></div>

<div className="relative z-10 w-[92%] max-w-md lg:max-w-4xl bg-[#0a0c10]/60 backdrop-blur-xl px-6 py-10 sm:px-10 sm:py-12 rounded-3xl border border-[#14b8a6]/20 shadow-[0_0_50px_-12px_rgba(0,0,0,0.8)] transition-all duration-500" id="main-card">
<form className="flex flex-col lg:grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-14" id="checkout-form">

<div className="flex flex-col text-center lg:text-left">
<div className="inline-flex items-center justify-center bg-[#14b8a6]/10 text-[#14b8a6] border border-[#14b8a6]/20 px-3 py-1.5 rounded-full text-xs uppercase font-medium tracking-widest mb-8 mx-auto lg:mx-0 lg:self-start">
                    Phase 1: Encrypted Alpha
                </div>
<div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
<img alt="Omni Proxy Shield Logo" className="h-10 sm:h-12 w-auto object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e2c87a8f-8fc3-4112-9e2b-4a545db4a515_320w.png"/>
<div className="text-2xl sm:text-3xl font-semibold tracking-tighter text-white drop-shadow-[0_0_12px_rgba(20,184,166,0.3)]">
                        OMNIPROXY
                    </div>
</div>
<h1 className="text-xl sm:text-2xl font-semibold tracking-tight text-white mb-3">
                    Bypass Borders.<br className="hidden lg:block"/> Secure Your Flow.
                </h1>
<p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-8">
                    Select your proxy node tier to establish a secure perimeter.
                </p>

<div className="grid grid-cols-2 gap-3.5 mb-2">

<label className="relative cursor-pointer group">
<input checked="" className="peer sr-only" name="plan" onchange="updatePrice('lite')" type="radio" value="lite"/>
<div className="h-full bg-black/40 border border-slate-700/60 rounded-xl p-4 transition-all duration-300 peer-checked:border-[#14b8a6] peer-checked:ring-1 peer-checked:ring-[#14b8a6] peer-checked:bg-[#14b8a6]/10 hover:border-slate-500 text-left flex flex-col justify-between">
<div className="flex justify-between items-center mb-3">
<span className="text-white text-sm font-semibold tracking-tight">Lite</span>
<iconify-icon className="text-[#14b8a6] text-base opacity-0 peer-checked:opacity-100 transition-opacity" icon="solar:check-circle-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</div>
<div className="text-[#14b8a6] text-lg font-semibold tracking-tight">$1<span className="text-slate-400 text-xs font-normal"> + GST</span></div>
</div>
</label>

<label className="relative cursor-pointer group">
<input className="peer sr-only" name="plan" onchange="updatePrice('executive')" type="radio" value="executive"/>
<div className="h-full bg-black/40 border border-slate-700/60 rounded-xl p-4 transition-all duration-300 peer-checked:border-[#14b8a6] peer-checked:ring-1 peer-checked:ring-[#14b8a6] peer-checked:bg-[#14b8a6]/10 hover:border-slate-500 text-left flex flex-col justify-between">
<div className="flex justify-between items-center mb-3">
<span className="text-white text-sm font-semibold tracking-tight">Executive</span>
<iconify-icon className="text-[#14b8a6] text-base opacity-0 peer-checked:opacity-100 transition-opacity" icon="solar:check-circle-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</div>
<div className="text-[#14b8a6] text-lg font-semibold tracking-tight">$300<span className="text-slate-400 text-xs font-normal">/mo + GST</span></div>
</div>
</label>
</div>
<div className="flex items-center justify-center lg:justify-start gap-6 sm:gap-8 mt-10 text-xs text-slate-400 font-medium tracking-wide">
<div className="flex items-center gap-2">
<iconify-icon className="text-[#14b8a6] text-base" icon="solar:bolt-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
<span>Ultra Low Latency</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-[#14b8a6] text-base" icon="solar:incognito-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
<span>No-Log Policy</span>
</div>
</div>
</div>

<div className="bg-[#05070a]/50 border border-slate-700/50 rounded-2xl p-6 sm:p-8 flex flex-col justify-center gap-4 shadow-inner">
<h2 className="text-white text-sm font-semibold tracking-tight mb-2 hidden lg:block">Secure Checkout</h2>
<input className="w-full bg-black/60 border border-slate-700/60 px-4 py-3.5 rounded-xl text-slate-200 text-sm placeholder:text-slate-500 transition-all duration-300 focus:outline-none focus:border-[#14b8a6]/60 focus:ring-1 focus:ring-[#14b8a6]/60 shadow-inner" id="email" placeholder="Enter secure email address" required="" type="email"/>

<div className="w-full bg-black/40 border border-[#14b8a6]/20 rounded-xl flex flex-col items-center justify-center px-4 py-6 text-center shadow-inner">
<iconify-icon className="text-[#14b8a6] text-3xl mb-3" icon="solar:shield-check-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
<p className="text-slate-400 text-xs leading-relaxed max-w-[200px]">
                        Payment processing is handled securely. You will be redirected to Stripe to complete your transaction.
                    </p>
</div>
<button className="w-full bg-[#14b8a6] text-white px-4 py-3.5 rounded-xl text-xs sm:text-sm font-medium uppercase tracking-widest transition-all duration-300 hover:brightness-110 hover:shadow-[0_0_24px_rgba(20,184,166,0.35)] hover:-translate-y-0.5 active:translate-y-0 mt-2" id="submit-btn" type="submit">
                    Proceed to Stripe
                </button>

<div className="flex items-center justify-center gap-1.5 mt-3 text-slate-500">
<iconify-icon className="text-xs" icon="solar:lock-keyhole-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
<span className="text-xs font-medium tracking-wide">Secured by Stripe</span>
</div>
</div>
</form>
</div>


    </>
  );
}
