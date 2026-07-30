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
      

<header className="fixed top-0 left-0 w-full z-50 backdrop-blur-sm bg-[#FFFDFA]/80 border-b border-[#E8E8E8]">
<div className="mx-auto max-w-7xl px-6 flex items-center justify-between h-16">
<a className="flex items-center gap-2" href="/">
<img alt="Haven" className="h-10 w-auto sm:h-12" src="https://neompzltxilcimodyvpd.supabase.co/storage/v1/object/public/flou//logohaven.png" />
<span className="sr-only">Haven</span>
</a>
<nav className="hidden sm:flex gap-8 text-sm font-medium">
<a className="hover:text-black transition-colors" href="#">Product</a>
<a className="hover:text-black transition-colors" href="#">Pricing</a>
<a className="hover:text-black transition-colors" href="#">Resources</a>
<a className="hover:text-black transition-colors" href="#">Blog</a>
</nav>
<a className="inline-flex items-center justify-center px-5 py-2 rounded-md bg-black text-white text-sm font-semibold hover:bg-[#202020] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black transition-colors" href="#contact">
        Contact Sales
      </a>
</div>
</header>
<main className="pt-24 sm:pt-32">

<section className="relative mx-auto max-w-4xl px-6 text-center space-y-6 animate-fadeInUp overflow-hidden">

<div className="absolute inset-0 pointer-events-none" style={{backgroundImage: `repeating-linear-gradient(to bottom,#E8E8E8 0,#E8E8E8 1px,transparent 1px,transparent 42px)`, opacity: `.5`}}></div>
<h1 className="relative text-4xl sm:text-5xl font-semibold tracking-tight">Integrations: connect Haven to the tools you already use</h1>
<p className="relative text-base sm:text-lg text-[#202020]/80">
        We work with almost everything out there. Here are some of the most popular integrations among our customers.
      </p>

<form className="relative mx-auto max-w-md flex flex-col sm:flex-row gap-3 justify-center" id="contact">
<input className="w-full bg-white/75 border border-[#E8E8E8] rounded-md px-4 py-3 text-base focus:ring-2 focus:ring-black/20 focus:outline-none placeholder:text-[#838383]" placeholder="Your best email" required type="email" />
<button className="flex-none inline-flex items-center justify-center px-6 py-3 bg-black text-white text-sm font-semibold rounded-md hover:bg-[#202020] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black transition-colors" type="submit">
          Contact Sales
        </button>
</form>
</section>

<section className="mx-auto max-w-7xl px-6 mt-24 sm:mt-32">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

<a className="group border border-[#E8E8E8] rounded-lg bg-[#FBFCFD] p-6 flex items-start justify-between hover:border-black transition-colors animate-fadeInUp" href="partners/banks.html" style={{animationDelay: `.05s`}}>
<div className="space-y-2">
<h3 className="text-lg font-medium">Banks</h3>
<ul className="text-sm text-[#838383] space-y-1">
<li>Santander</li>
<li>Chase</li>
<li>HSBC</li>
<li>Bank of America</li>
<li>Barclays</li>
</ul>
</div>
<i className="ph-bold ph-arrow-right self-center group-hover:translate-x-1 transition-transform"></i>
</a>

<a className="group border border-[#E8E8E8] rounded-lg bg-[#FBFCFD] p-6 flex items-start justify-between hover:border-black transition-colors animate-fadeInUp" href="partners/automation.html" style={{animationDelay: `.1s`}}>
<div className="space-y-2">
<h3 className="text-lg font-medium">API Automation</h3>
<ul className="text-sm text-[#838383] space-y-1">
<li>Zapier</li>
<li>Make.com</li>
<li>n8n</li>
<li>Pipedream</li>
<li>Tray.io</li>
</ul>
</div>
<i className="ph-bold ph-arrow-right self-center group-hover:translate-x-1 transition-transform"></i>
</a>

<a className="group border border-[#E8E8E8] rounded-lg bg-[#FBFCFD] p-6 flex items-start justify-between hover:border-black transition-colors animate-fadeInUp" href="partners/captable.html" style={{animationDelay: `.15s`}}>
<div className="space-y-2">
<h3 className="text-lg font-medium">Cap Table</h3>
<ul className="text-sm text-[#838383] space-y-1">
<li>Carta</li>
<li>SeedLegals</li>
<li>Pulley</li>
<li>Astella</li>
<li>Capshare</li>
</ul>
</div>
<i className="ph-bold ph-arrow-right self-center group-hover:translate-x-1 transition-transform"></i>
</a>

<a className="group border border-[#E8E8E8] rounded-lg bg-[#FBFCFD] p-6 flex items-start justify-between hover:border-black transition-colors animate-fadeInUp" href="partners/creditcards.html" style={{animationDelay: `.2s`}}>
<div className="space-y-2">
<h3 className="text-lg font-medium">Credit Cards</h3>
<ul className="text-sm text-[#838383] space-y-1">
<li>Visa</li>
<li>Mastercard</li>
<li>American Express</li>
<li>Discover</li>
<li>UnionPay</li>
</ul>
</div>
<i className="ph-bold ph-arrow-right self-center group-hover:translate-x-1 transition-transform"></i>
</a>

<a className="group border border-[#E8E8E8] rounded-lg bg-[#FBFCFD] p-6 flex items-start justify-between hover:border-black transition-colors animate-fadeInUp" href="partners/crypto.html" style={{animationDelay: `.25s`}}>
<div className="space-y-2">
<h3 className="text-lg font-medium">Crypto</h3>
<ul className="text-sm text-[#838383] space-y-1">
<li>Binance</li>
<li>Coinbase</li>
<li>Kraken</li>
<li>Gemini</li>
<li>Bitstamp</li>
</ul>
</div>
<i className="ph-bold ph-arrow-right self-center group-hover:translate-x-1 transition-transform"></i>
</a>

<a className="group border border-[#E8E8E8] rounded-lg bg-[#FBFCFD] p-6 flex items-start justify-between hover:border-black transition-colors animate-fadeInUp" href="partners/accountspayable.html" style={{animationDelay: `.3s`}}>
<div className="space-y-2">
<h3 className="text-lg font-medium">Accounts Payable</h3>
<ul className="text-sm text-[#838383] space-y-1">
<li>Bill.com</li>
<li>QuickBooks</li>
<li>ContaAzul</li>
<li>Omie</li>
<li>Tipalti</li>
</ul>
</div>
<i className="ph-bold ph-arrow-right self-center group-hover:translate-x-1 transition-transform"></i>
</a>

<a className="group border border-[#E8E8E8] rounded-lg bg-[#FBFCFD] p-6 flex items-start justify-between hover:border-black transition-colors animate-fadeInUp" href="partners/inventory.html" style={{animationDelay: `.35s`}}>
<div className="space-y-2">
<h3 className="text-lg font-medium">Inventory</h3>
<ul className="text-sm text-[#838383] space-y-1">
<li>Bling</li>
<li>Tiny ERP</li>
<li>Odoo</li>
<li>Zoho Inventory</li>
<li>TradeGecko</li>
</ul>
</div>
<i className="ph-bold ph-arrow-right self-center group-hover:translate-x-1 transition-transform"></i>
</a>

<a className="group border border-[#E8E8E8] rounded-lg bg-[#FBFCFD] p-6 flex items-start justify-between hover:border-black transition-colors animate-fadeInUp" href="partners/payroll.html" style={{animationDelay: `.4s`}}>
<div className="space-y-2">
<h3 className="text-lg font-medium">Payroll</h3>
<ul className="text-sm text-[#838383] space-y-1">
<li>Gusto</li>
<li>ADP</li>
<li>Deel</li>
<li>Rippling</li>
<li>Zenefits</li>
</ul>
</div>
<i className="ph-bold ph-arrow-right self-center group-hover:translate-x-1 transition-transform"></i>
</a>

<a className="group border border-[#E8E8E8] rounded-lg bg-[#FBFCFD] p-6 flex items-start justify-between hover:border-black transition-colors animate-fadeInUp" href="partners/transfer.html" style={{animationDelay: `.45s`}}>
<div className="space-y-2">
<h3 className="text-lg font-medium">Money Transfer</h3>
<ul className="text-sm text-[#838383] space-y-1">
<li>Wise</li>
<li>Remitly</li>
<li>Remessa Online</li>
<li>Payoneer</li>
<li>WorldRemit</li>
</ul>
</div>
<i className="ph-bold ph-arrow-right self-center group-hover:translate-x-1 transition-transform"></i>
</a>

<a className="group border border-[#E8E8E8] rounded-lg bg-[#FBFCFD] p-6 flex items-start justify-between hover:border-black transition-colors animate-fadeInUp" href="partners/others.html" style={{animationDelay: `.5s`}}>
<div className="space-y-2">
<h3 className="text-lg font-medium">Others</h3>
<ul className="text-sm text-[#838383] space-y-1">
<li>Slack</li>
<li>Notion</li>
<li>Linear</li>
<li>Asana</li>
<li>ClickUp</li>
</ul>
</div>
<i className="ph-bold ph-arrow-right self-center group-hover:translate-x-1 transition-transform"></i>
</a>
</div>
</section>
</main>

<footer className="mt-32 border-t border-[#E8E8E8]">
<div className="mx-auto max-w-7xl px-6 py-12 flex flex-col sm:flex-row justify-between gap-6">
<p className="text-sm text-[#838383]">© <span id="year"></span> Haven, Inc. All rights reserved.</p>
<div className="flex gap-6 text-sm">
<a className="hover:text-black" href="#">Privacy Policy</a>
<a className="hover:text-black" href="#">Terms</a>
<a className="hover:text-black" href="#">Security</a>
</div>
</div>
</footer>



    </>
  );
}
