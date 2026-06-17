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



        // Form Handling
        const form = document.getElementById('waitlistForm');
        const btnText = document.getElementById('btnText');
        const btnSpinner = document.getElementById('btnSpinner');
        const submitBtn = document.getElementById('submitBtn');
        const successMsg = document.getElementById('successMsg');
        const emailInput = document.getElementById('emailInput');

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            if(!emailInput.value) return;

            // Loading state
            btnText.classList.add('hidden');
            btnSpinner.classList.remove('hidden');
            submitBtn.classList.add('opacity-80', 'cursor-not-allowed');

            // Simulate API call
            setTimeout(() => {
                // Success state
                successMsg.classList.remove('opacity-0', 'pointer-events-none');
                successMsg.classList.add('opacity-100');
            }, 1000);
        });

        // Scroll Reveal Animation
        const revealElements = document.querySelectorAll('.reveal-up');
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    revealObserver.unobserve(entry.target);
                }
            });
        }, { rootMargin: "0px 0px -100px 0px" });

        revealElements.forEach(el => revealObserver.observe(el));

        // Nav styling on scroll
        const nav = document.querySelector('nav');
        window.addEventListener('scroll', () => {
            if(window.scrollY > 50) {
                nav.classList.add('shadow-[0_2px_10px_rgb(0,0,0,0.03)]');
            } else {
                nav.classList.remove('shadow-[0_2px_10px_rgb(0,0,0,0.03)]');
            }
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
      

<nav className="fixed top-0 w-full z-50 border-b border-black/5 bg-[#F9F9F8]/80 backdrop-blur-md transition-all duration-300">
<div className="max-w-[75rem] mx-auto px-6 h-[4.5rem] flex items-center justify-between">
<a className="font-display text-xl font-medium tracking-tighter text-[#111111] flex items-center gap-2" href="#">
                BACHS
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-normal text-[#666666]">
<a className="hover:text-[#111111] transition-colors" href="#features">Features</a>
<a className="hover:text-[#111111] transition-colors" href="#how-it-works">How it works</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:inline-flex items-center justify-center h-10 px-5 rounded-full bg-[#111111] text-white text-sm font-normal hover:bg-[#333333] transition-colors shadow-sm" href="#waitlist">
                    Get Early Access
                </a>
<button className="md:hidden text-[#111111] text-2xl">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</nav>
<main>

<section className="relative pt-[10rem] pb-[6rem] lg:pt-[12rem] lg:pb-[8rem] px-6">
<div className="glow-bg top-[10%] left-[50%] -translate-x-[50%]"></div>
<div className="max-w-[75rem] mx-auto grid lg:grid-cols-[1fr_0.8fr] gap-12 lg:gap-8 items-center">
<div className="flex flex-col gap-8 reveal-up">
<h1 className="font-display text-[2.5rem] md:text-[4rem] lg:text-[4.5rem] leading-[1.1] font-medium tracking-tighter text-[#111111]">
                        The financial layer for internet businesses built from Africa.
                    </h1>
<p className="text-base md:text-lg text-[#666666] leading-relaxed max-w-[35rem] font-normal">
                        Global checkout, subscriptions, usage billing, stablecoin payments, tax handling, and fast settlement — in one platform. Built for African founders selling to the world.
                    </p>
<div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
<a className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-[#111111] text-white text-base font-normal hover:bg-[#333333] shadow-sm transition-colors w-full sm:w-auto" href="#waitlist">
                            Join the Waitlist
                        </a>
<a className="inline-flex items-center justify-center h-12 px-6 rounded-full border border-black/10 text-[#111111] text-base font-normal hover:bg-black/5 transition-colors w-full sm:w-auto gap-2 group" href="#how-it-works">
                            See how it works 
                            <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
<p className="text-xs text-[#666666] font-normal tracking-wide flex items-center gap-2">
<iconify-icon className="text-[#111111] text-base" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
                        No card required. Built for SaaS, APIs, and digital products.
                    </p>
</div>
<div className="relative w-full max-w-[32rem] mx-auto lg:ml-auto reveal-up" style={{transitionDelay: '0.1s'}}>

<div className="absolute inset-0 bg-gradient-to-br from-[#EAEAEA] to-[#F3F3F1] rounded-xl transform translate-x-2 translate-y-2 border border-black/5"></div>
<div className="relative bg-white border border-black/5 rounded-xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
<div className="flex items-center px-4 py-3 border-b border-black/5 bg-[#F9F9F8]">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-black/10"></div>
<div className="w-2.5 h-2.5 rounded-full bg-black/10"></div>
<div className="w-2.5 h-2.5 rounded-full bg-black/10"></div>
</div>
<span className="ml-4 text-xs font-mono text-[#666666]">checkout.js</span>
</div>
<div className="p-6 overflow-x-auto text-sm font-mono leading-relaxed text-[#111111]">
<pre className="m-0"><code className="language-js"><span className="token-keyword">import</span> Bachs <span className="token-keyword">from</span> <span className="token-string">'@bachs/sdk'</span>

<span className="token-keyword">const</span> b <span className="token-keyword">=</span> <span className="token-keyword">new</span> Bachs({ key: process.env.BACHS_KEY })

<span className="token-keyword">const</span> session <span className="token-keyword">=</span> <span className="token-keyword">await</span> b.checkout.<span className="token-variable">create</span>({
  product: <span className="token-string">'prod_pro_monthly'</span>,
  billing: <span className="token-string">'subscription'</span>,
  tax: <span className="token-string">'auto'</span>,        <span className="token-comment">// VAT handled globally</span>
  crypto: <span className="token-keyword">true</span>,      <span className="token-comment">// Accept USDT/USDC</span>
  settlement: <span className="token-string">'NGN'</span>  <span className="token-comment">// You receive Naira</span>
})

<span className="token-comment">// That's it.</span></code></pre>
</div>
</div>
</div>
</div>
</section>

<div className="w-full overflow-hidden border-y border-black/5 bg-white py-4 reveal-up">
<div className="animate-marquee flex gap-12 items-center text-xs font-normal tracking-widest uppercase text-[#888888]">
<span>Accept payments globally</span>
<span className="w-1.5 h-1.5 rounded-full bg-black/10"></span>
<span>Cards &amp; Mobile Money</span>
<span className="w-1.5 h-1.5 rounded-full bg-black/10"></span>
<span>Stablecoin native</span>
<span className="w-1.5 h-1.5 rounded-full bg-black/10"></span>
<span>Settle in NGN, GHS, KES, ZAR, USD</span>
<span className="w-1.5 h-1.5 rounded-full bg-black/10"></span>
<span>Accept payments globally</span>
<span className="w-1.5 h-1.5 rounded-full bg-black/10"></span>
<span>Cards &amp; Mobile Money</span>
<span className="w-1.5 h-1.5 rounded-full bg-black/10"></span>
<span>Stablecoin native</span>
<span className="w-1.5 h-1.5 rounded-full bg-black/10"></span>
<span>Settle in NGN, GHS, KES, ZAR, USD</span>
<span className="w-1.5 h-1.5 rounded-full bg-black/10"></span>
</div>
</div>

<section className="py-[6rem] px-6 bg-white border-b border-black/5">
<div className="max-w-[50rem] mx-auto text-center reveal-up">
<h2 className="font-display text-[2rem] md:text-[3rem] leading-tight font-medium tracking-tight mb-6 text-[#111111]">
                    You're building for the world. <br className="hidden md:block"/>
                    Your payment infrastructure <span className="text-[#8C62EA]">wasn't.</span>
</h2>
<p className="text-base text-[#666666] leading-relaxed font-normal">
                    Traditional gateways are great for local merchants. They were not built for SaaS founders selling subscriptions to customers in Amsterdam, Toronto, or Lagos at the same time. Bachs was.
                </p>
</div>
</section>

<section className="py-[8rem] px-6 bg-[#F9F9F8]" id="how-it-works">
<div className="max-w-[75rem] mx-auto">
<div className="mb-16 reveal-up">
<h2 className="font-display text-[2rem] md:text-[2.5rem] font-medium tracking-tight text-[#111111] mb-4">
                        Get up and running in an afternoon.
                    </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative reveal-up">

<div className="hidden md:block absolute top-[2.5rem] left-0 w-full h-px bg-gradient-to-r from-transparent via-black/10 to-transparent"></div>

<div className="relative pt-6 md:pt-12">
<div className="absolute top-0 left-0 text-[3rem] font-display font-medium text-black/5 leading-none">01</div>
<div className="w-2.5 h-2.5 rounded-full bg-[#111111] absolute top-[2.2rem] left-0 hidden md:block ring-4 ring-[#F9F9F8]"></div>
<h3 className="font-display text-lg font-medium text-[#111111] mb-3 mt-4 tracking-tight">Create your account</h3>
<p className="text-sm text-[#666666] leading-relaxed font-normal">Sign up, verify your business, and get your API keys. No US entity required. No lengthy compliance forms.</p>
</div>
<div className="relative pt-6 md:pt-12">
<div className="absolute top-0 left-0 text-[3rem] font-display font-medium text-black/5 leading-none">02</div>
<div className="w-2.5 h-2.5 rounded-full bg-[#5D72E9] absolute top-[2.2rem] left-0 hidden md:block ring-4 ring-[#F9F9F8]"></div>
<h3 className="font-display text-lg font-medium text-[#111111] mb-3 mt-4 tracking-tight">Add Bachs to your product</h3>
<p className="text-sm text-[#666666] leading-relaxed font-normal">Install the SDK (Node.js, Python, or Go) or use the REST API. Create a checkout session in 3 lines of code.</p>
</div>
<div className="relative pt-6 md:pt-12">
<div className="absolute top-0 left-0 text-[3rem] font-display font-medium text-black/5 leading-none">03</div>
<div className="w-2.5 h-2.5 rounded-full bg-[#8C62EA] absolute top-[2.2rem] left-0 hidden md:block ring-4 ring-[#F9F9F8]"></div>
<h3 className="font-display text-lg font-medium text-[#111111] mb-3 mt-4 tracking-tight">Your customer checks out</h3>
<p className="text-sm text-[#666666] leading-relaxed font-normal">They see a globally optimised checkout — cards, mobile money, bank transfer, or stablecoin. Bachs handles everything including VAT calculation.</p>
</div>
<div className="relative pt-6 md:pt-12">
<div className="absolute top-0 left-0 text-[3rem] font-display font-medium text-black/5 leading-none">04</div>
<div className="w-2.5 h-2.5 rounded-full bg-[#2E907B] absolute top-[2.2rem] left-0 hidden md:block ring-4 ring-[#F9F9F8]"></div>
<h3 className="font-display text-lg font-medium text-[#111111] mb-3 mt-4 tracking-tight">You get paid</h3>
<p className="text-sm text-[#666666] leading-relaxed font-normal">Bachs settles to your local currency — NGN, GHS, KES, or USD. Fast. No manual withdrawal flows.</p>
</div>
</div>
</div>
</section>

<section className="py-[8rem] px-6 bg-white border-y border-black/5" id="features">
<div className="max-w-[75rem] mx-auto">
<div className="mb-16 reveal-up">
<h2 className="font-display text-[2rem] md:text-[2.5rem] font-medium tracking-tight text-[#111111] mb-4">
                        Everything your internet business needs to get paid.
                    </h2>
<p className="text-base text-[#666666] font-normal">Six products in one platform. No 8-fintech stack required.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-black/5 rounded-xl overflow-hidden reveal-up border border-black/5 shadow-sm">

<div className="bg-white p-8 hover:bg-[#F9F9F8] transition-colors relative group overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-[#5D72E9] opacity-0 group-hover:opacity-100 transition-opacity"></div>
<iconify-icon className="text-[2rem] text-[#5D72E9] mb-6" icon="solar:global-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="font-display text-lg font-medium tracking-tight text-[#111111] mb-3">Global Checkout</h3>
<p className="text-sm text-[#666666] leading-relaxed font-normal">Accept payments from any customer, anywhere. Cards, mobile money, bank transfers, and stablecoin. One checkout session that intelligently routes.</p>
</div>

<div className="bg-white p-8 hover:bg-[#F9F9F8] transition-colors relative group overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-[#8C62EA] opacity-0 group-hover:opacity-100 transition-opacity"></div>
<iconify-icon className="text-[2rem] text-[#8C62EA] mb-6" icon="solar:refresh-circle-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="font-display text-lg font-medium tracking-tight text-[#111111] mb-3">Subscription Engine</h3>
<p className="text-sm text-[#666666] leading-relaxed font-normal">Full subscription lifecycle — free trials, plan upgrades, downgrades, pauses, cancellations, and automatic proration. Built for software.</p>
</div>

<div className="bg-white p-8 hover:bg-[#F9F9F8] transition-colors relative group overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-[#2E907B] opacity-0 group-hover:opacity-100 transition-opacity"></div>
<iconify-icon className="text-[2rem] text-[#2E907B] mb-6" icon="solar:chart-square-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="font-display text-lg font-medium tracking-tight text-[#111111] mb-3">Usage Billing</h3>
<p className="text-sm text-[#666666] leading-relaxed font-normal">Meter your product by API calls, tokens, seats, requests, or any custom unit. We aggregate, rate, and generate invoices automatically.</p>
</div>

<div className="bg-white p-8 hover:bg-[#F9F9F8] transition-colors relative group overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-[#E08A3B] opacity-0 group-hover:opacity-100 transition-opacity"></div>
<iconify-icon className="text-[2rem] text-[#E08A3B] mb-6" icon="solar:wallet-money-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="font-display text-lg font-medium tracking-tight text-[#111111] mb-3">Stablecoin Checkout</h3>
<p className="text-sm text-[#666666] leading-relaxed font-normal">Accept USDT and USDC natively in your checkout — as a first-class payment method. You receive local currency automatically.</p>
</div>

<div className="bg-white p-8 hover:bg-[#F9F9F8] transition-colors relative group overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-[#D45454] opacity-0 group-hover:opacity-100 transition-opacity"></div>
<iconify-icon className="text-[2rem] text-[#D45454] mb-6" icon="solar:document-text-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="font-display text-lg font-medium tracking-tight text-[#111111] mb-3">Tax — MOR or Assist</h3>
<p className="text-sm text-[#666666] leading-relaxed font-normal">Merchant of Record mode: Bachs handles all VAT/GST globally. Tax Assist mode: you stay the seller, Bachs calculates obligations.</p>
</div>

<div className="bg-white p-8 hover:bg-[#F9F9F8] transition-colors relative group overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-[#111111] opacity-0 group-hover:opacity-100 transition-opacity"></div>
<iconify-icon className="text-[2rem] text-[#111111] mb-6" icon="solar:bank-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="font-display text-lg font-medium tracking-tight text-[#111111] mb-3">African Settlement</h3>
<p className="text-sm text-[#666666] leading-relaxed font-normal">Bachs settles to your local African bank account in NGN, GHS, KES, or ZAR. Fast and cheap via invisible stablecoin rails.</p>
</div>
</div>
<p className="text-sm text-[#666666] mt-8 text-center font-normal reveal-up">
                    And more: smart dunning, hosted customer portal, developer dashboard, and full API access.
                </p>
</div>
</section>

<section className="py-[8rem] px-6 bg-[#F9F9F8]">
<div className="max-w-[75rem] mx-auto">
<div className="mb-16 text-center max-w-[40rem] mx-auto reveal-up">
<h2 className="font-display text-[2rem] md:text-[2.5rem] font-medium tracking-tight text-[#111111] mb-4">
                        One checkout. Every customer. Every currency.
                    </h2>
<p className="text-base text-[#666666] leading-relaxed font-normal">
                        The Bachs checkout detects your customer's location, surfaces the right payment methods, calculates VAT automatically, and handles the transaction.
                    </p>
</div>
<div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-20 items-center">

<div className="relative reveal-up">
<div className="absolute -inset-1 bg-gradient-to-b from-black/5 to-transparent rounded-2xl blur opacity-50"></div>
<div className="relative bg-white border border-black/10 rounded-2xl overflow-hidden flex flex-col shadow-[0_20px_40px_rgb(0,0,0,0.06)] h-[38rem]">

<div className="h-12 bg-[#F9F9F8] border-b border-black/5 flex items-center px-4 shrink-0">
<div className="flex gap-2 w-16">
<div className="w-3 h-3 rounded-full bg-[#E46060]"></div>
<div className="w-3 h-3 rounded-full bg-[#F5B14B]"></div>
<div className="w-3 h-3 rounded-full bg-[#58C27D]"></div>
</div>
<div className="flex-1 flex justify-center">
<div className="bg-black/5 border border-black/5 rounded-md px-4 py-1.5 flex items-center gap-2 max-w-[16rem] w-full text-center text-[0.65rem] font-mono text-[#666666]">
<iconify-icon icon="solar:lock-keyhole-linear" strokeWidth="1.5"></iconify-icon>
                                        checkout.bachs.dev/c/sess_9x2...
                                    </div>
</div>
<div className="w-16"></div>
</div>

<div className="flex-1 bg-white p-6 sm:p-10 flex flex-col overflow-y-auto">
<div className="mb-8">
<div className="w-10 h-10 rounded bg-[#F9F9F8] border border-black/10 flex items-center justify-center text-[#111111] font-display font-medium mb-4 text-sm">BK</div>
<h4 className="text-[#111111] text-lg font-medium tracking-tight mb-1">BuilderKit Pro</h4>
<p className="text-[#666666] text-sm font-normal">Monthly subscription</p>
<div className="text-[2rem] font-medium text-[#111111] tracking-tight mt-2">$49.00 <span className="text-base text-[#666666] font-normal">/ month</span></div>
</div>
<div className="space-y-3 flex-1">
<div className="text-xs font-medium text-[#888888] uppercase tracking-wider mb-2">Payment Method</div>

<label className="flex items-center justify-between p-4 rounded-xl border border-black/10 bg-[#F9F9F8] cursor-pointer hover:border-black/20 transition-colors">
<div className="flex items-center gap-3">
<div className="w-5 h-5 rounded-full border border-black/20 bg-white"></div>
<span className="text-sm font-medium text-[#111111]">Card</span>
</div>
<div className="flex gap-1">
<div className="w-6 h-4 bg-white border border-black/5 rounded flex items-center justify-center text-[0.5rem] text-[#666]">VISA</div>
<div className="w-6 h-4 bg-white border border-black/5 rounded flex items-center justify-center text-[0.5rem] text-[#666]">MC</div>
</div>
</label>

<label className="flex items-center justify-between p-4 rounded-xl border border-[#111111] bg-black/5 cursor-pointer relative overflow-hidden">
<div className="flex items-center gap-3 relative">
<div className="w-5 h-5 rounded-full border-[5px] border-[#111111] bg-white shadow-sm"></div>
<span className="text-sm font-medium text-[#111111]">Stablecoin</span>
</div>
<div className="flex gap-1 relative">
<div className="px-2 py-0.5 border border-black/10 bg-white text-[#111111] rounded text-[0.6rem] font-medium shadow-sm">USDC</div>
<div className="px-2 py-0.5 border border-black/5 bg-white text-[#666666] rounded text-[0.6rem] font-normal shadow-sm">USDT</div>
</div>
</label>

<label className="flex items-center justify-between p-4 rounded-xl border border-black/10 bg-[#F9F9F8] cursor-pointer hover:border-black/20 transition-colors">
<div className="flex items-center gap-3">
<div className="w-5 h-5 rounded-full border border-black/20 bg-white"></div>
<span className="text-sm font-medium text-[#111111]">Mobile Money</span>
</div>
</label>
</div>
<div className="mt-8 border-t border-black/5 pt-6">
<div className="flex justify-between text-sm mb-2 text-[#666666] font-normal">
<span>Subtotal</span>
<span>$49.00</span>
</div>
<div className="flex justify-between text-sm mb-4 text-[#666666] font-normal">
<span>VAT (20% UK)</span>
<span>$9.80</span>
</div>
<div className="flex justify-between font-medium text-[#111111] text-base mb-6">
<span>Total</span>
<span>$58.80</span>
</div>
<button className="w-full h-12 bg-[#111111] text-white font-medium rounded-lg text-sm hover:bg-[#333333] transition-colors flex items-center justify-center gap-2 shadow-sm">
                                        Subscribe · $58.80
                                    </button>
<div className="mt-4 flex items-center justify-center gap-1.5 text-[0.65rem] text-[#888888] font-normal">
<iconify-icon icon="solar:lock-password-linear" strokeWidth="1.5"></iconify-icon>
                                        Secured by Bachs · VAT handled automatically
                                    </div>
</div>
</div>
</div>
</div>

<div className="flex flex-col gap-10 reveal-up" style={{transitionDelay: '0.2s'}}>
<div>
<h4 className="font-display text-lg font-medium tracking-tight text-[#111111] mb-2 flex items-center gap-2">
                                Any customer, anywhere
                            </h4>
<p className="text-sm text-[#666666] leading-relaxed font-normal">Card, mobile money, bank transfer, or stablecoin. One checkout handles all of them seamlessly.</p>
</div>
<div>
<h4 className="font-display text-lg font-medium tracking-tight text-[#111111] mb-2 flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-[#111111]"></span>
                                Crypto as a first-class citizen
                            </h4>
<p className="text-sm text-[#666666] leading-relaxed font-normal">USDT and USDC natively supported. No external wallet redirect. It feels exactly like a standard checkout.</p>
</div>
<div>
<h4 className="font-display text-lg font-medium tracking-tight text-[#111111] mb-2 flex items-center gap-2">
                                VAT calculated automatically
                            </h4>
<p className="text-sm text-[#666666] leading-relaxed font-normal">Based on the customer's location. In MOR mode, Bachs files it. You do absolutely nothing.</p>
</div>
<div>
<h4 className="font-display text-lg font-medium tracking-tight text-[#111111] mb-2 flex items-center gap-2">
                                Settlement to your account
                            </h4>
<p className="text-sm text-[#666666] leading-relaxed font-normal">Your customer pays in USD. You receive NGN. Fast, via stablecoin rails. Completely invisible to you.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-[8rem] px-6 bg-white border-t border-black/5">
<div className="max-w-[75rem] mx-auto">
<div className="mb-12 text-center reveal-up">
<h2 className="font-display text-[2rem] md:text-[2.5rem] font-medium tracking-tight text-[#111111]">
                        Built for founders who are tired of working around their tools.
                    </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 reveal-up">

<div className="bg-[#F9F9F8] rounded-xl p-8 border border-black/5 flex flex-col hover:border-black/10 transition-colors">
<div className="flex items-center gap-4 mb-6">
<div className="w-10 h-10 rounded-full bg-blue-50 text-[#5D72E9] border border-blue-100 flex items-center justify-center font-display font-medium text-sm">T</div>
<div>
<div className="text-[#111111] font-medium text-sm">Tunde — Lagos</div>
<div className="text-xs text-[#666666] font-normal">B2B SaaS Founder</div>
</div>
</div>
<div className="flex-1 space-y-4">
<p className="text-sm text-[#666666] leading-relaxed font-normal"><strong className="text-[#111111] font-medium block mb-1">Building:</strong> AI tool for marketing teams. 200 users, 60% outside Nigeria.</p>
<p className="text-sm text-[#666666] leading-relaxed font-normal"><strong className="text-[#111111] font-medium block mb-1">The problem:</strong> US LLC verification failing for Stripe. Losing 40% of signups at payment step.</p>
<p className="text-sm leading-relaxed text-[#111111] bg-black/5 border-l-2 border-[#111111] p-3 rounded-r-md mt-4 font-normal">
<strong>With Bachs:</strong> One checkout that accepts cards globally. Zero infrastructure headache.
                            </p>
</div>
</div>

<div className="bg-[#F9F9F8] rounded-xl p-8 border border-black/5 flex flex-col hover:border-black/10 transition-colors">
<div className="flex items-center gap-4 mb-6">
<div className="w-10 h-10 rounded-full bg-purple-50 text-[#8C62EA] border border-purple-100 flex items-center justify-center font-display font-medium text-sm">C</div>
<div>
<div className="text-[#111111] font-medium text-sm">Chiamaka — Nairobi</div>
<div className="text-xs text-[#666666] font-normal">API Developer</div>
</div>
</div>
<div className="flex-1 space-y-4">
<p className="text-sm text-[#666666] leading-relaxed font-normal"><strong className="text-[#111111] font-medium block mb-1">Building:</strong> Data enrichment API. Charges per 1,000 records.</p>
<p className="text-sm text-[#666666] leading-relaxed font-normal"><strong className="text-[#111111] font-medium block mb-1">The problem:</strong> Invoices manually in spreadsheets. Enterprise clients demand proper VAT invoices.</p>
<p className="text-sm leading-relaxed text-[#111111] bg-black/5 border-l-2 border-[#111111] p-3 rounded-r-md mt-4 font-normal">
<strong>With Bachs:</strong> Usage billing engine, automatic invoices with VAT, via simple API.
                            </p>
</div>
</div>

<div className="bg-[#F9F9F8] rounded-xl p-8 border border-black/5 flex flex-col hover:border-black/10 transition-colors">
<div className="flex items-center gap-4 mb-6">
<div className="w-10 h-10 rounded-full bg-emerald-50 text-[#2E907B] border border-emerald-100 flex items-center justify-center font-display font-medium text-sm">K</div>
<div>
<div className="text-[#111111] font-medium text-sm">Kojo — Accra</div>
<div className="text-xs text-[#666666] font-normal">Marketplace Operator</div>
</div>
</div>
<div className="flex-1 space-y-4">
<p className="text-sm text-[#666666] leading-relaxed font-normal"><strong className="text-[#111111] font-medium block mb-1">Building:</strong> Digital course marketplace. 150 creators globally.</p>
<p className="text-sm text-[#666666] leading-relaxed font-normal"><strong className="text-[#111111] font-medium block mb-1">The problem:</strong> Pays creators manually every Friday. No split payment infra to handle international USD.</p>
<p className="text-sm leading-relaxed text-[#111111] bg-black/5 border-l-2 border-[#111111] p-3 rounded-r-md mt-4 font-normal">
<strong>With Bachs:</strong> Split payments, automated creator payouts globally. No manual Fridays.
                            </p>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-[10rem] px-6 overflow-hidden bg-[#F9F9F8]" id="waitlist">
<div className="glow-bg top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-[50vw] h-[50vw] opacity-80"></div>
<div className="relative z-10 max-w-[40rem] mx-auto text-center bg-white/80 backdrop-blur-xl border border-black/5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-10 md:p-16 rounded-3xl reveal-up">
<h2 className="font-display text-[2.5rem] md:text-[3rem] font-medium tracking-tighter text-[#111111] mb-4">
                    Be among the first to build on Bachs.
                </h2>
<p className="text-base text-[#666666] mb-10 leading-relaxed max-w-[32rem] mx-auto font-normal">
                    We're opening early access to a small group of African founders building internet businesses. Get notified when we're ready for you.
                </p>
<form className="flex flex-col sm:flex-row gap-3 max-w-[30rem] mx-auto mb-4 relative" id="waitlistForm">
<input className="flex-1 h-14 bg-[#F9F9F8] border border-black/10 rounded-full px-6 text-[#111111] text-base outline-none focus:border-[#111111] transition-colors shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]" id="emailInput" placeholder="your@email.com" required="" type="email"/>
<button className="h-14 px-8 bg-[#111111] text-white font-medium rounded-full hover:bg-[#333333] transition-colors whitespace-nowrap flex items-center justify-center min-w-[140px] shadow-sm" id="submitBtn" type="submit">
<span id="btnText">Get Early Access</span>
<svg className="hidden animate-spin h-5 w-5 text-white" fill="none" id="btnSpinner" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" fill="currentColor"></path></svg>
</button>

<div className="absolute inset-0 bg-white border border-[#2E907B] rounded-full flex items-center justify-center text-[#2E907B] text-sm font-medium opacity-0 pointer-events-none transition-opacity duration-300 shadow-sm" id="successMsg">
<iconify-icon className="text-lg mr-2" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> You're on the list. We'll be in touch.
                    </div>
</form>
<p className="text-xs text-[#888888] mb-12 font-normal">No spam. Just a heads-up when we launch. Unsubscribe anytime.</p>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left border-t border-black/5 pt-8">
<div className="text-xs text-[#666666] leading-relaxed font-normal">
<span className="block text-[#111111] font-medium mb-1">Proven Team</span>
                        Built by the team behind SyncGram — processing real volume across markets.
                    </div>
<div className="text-xs text-[#666666] leading-relaxed font-normal">
<span className="block text-[#111111] font-medium mb-1">Global Reach</span>
                        Accept payments from 150+ countries. Settle locally.
                    </div>
<div className="text-xs text-[#666666] leading-relaxed font-normal">
<span className="block text-[#111111] font-medium mb-1">Trusted by Builders</span>
                        Used by SaaS founders across Nigeria, Kenya, and Ghana.
                    </div>
</div>
</div>
</section>
</main>

<footer className="bg-white border-t border-black/5 pt-12 pb-8 px-6">
<div className="max-w-[75rem] mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-8">
<div>
<a className="font-display text-2xl font-medium tracking-tighter text-[#111111] block mb-2" href="#">BACHS</a>
<p className="text-sm text-[#666666] max-w-xs font-normal">The financial layer for internet businesses built from Africa.</p>
</div>
<div className="flex items-center gap-6 text-sm text-[#666666] font-normal">
<a className="hover:text-[#111111] transition-colors" href="mailto:bolu@bachs.dev">bolu@bachs.dev</a>
<a className="hover:text-[#111111] transition-colors" href="#">Twitter / X</a>
</div>
</div>
<div className="max-w-[75rem] mx-auto border-t border-black/5 pt-8 text-xs text-[#888888] font-normal">
            © 2025 Bachs. All rights reserved.
        </div>
</footer>



    </>
  );
}
