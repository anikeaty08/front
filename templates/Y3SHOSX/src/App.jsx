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
      
    // Reveal on scroll
    const io = new IntersectionObserver(entries =>
      entries.forEach(e=>{
        if(e.isIntersecting){
          e.target.style.opacity=1;
          e.target.style.transform='translateY(0)';
        }
      }),{threshold:.15});
    document.querySelectorAll('.reveal').forEach(el=>{
      el.style.opacity=0;
      el.style.transform='translateY(40px)';
      el.style.transition='all .8s ease';
      el.style.transitionDelay=(
        el.classList.contains('delay-200')?.2:
        el.classList.contains('delay-150')?.15:
        el.classList.contains('delay-100')?.1:0
      )+'s';
      io.observe(el);
    });

    // Lucide icons
    lucide.createIcons();

    // Mobile nav
    const menuBtn=document.getElementById('mobileBtn'),
          menu=document.getElementById('mobileMenu'),
          closeBtn=document.getElementById('closeMobile');
    menuBtn.addEventListener('click',()=>menu.classList.remove('hidden'));
    closeBtn.addEventListener('click',()=>menu.classList.add('hidden'));

    // Chart
    new Chart(document.getElementById('supplyChart'),{
      type:'line',
      data:{
        labels:['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug'],
        datasets:[{
          label:'UGXC in Circulation',
          data:[20,25,30,34,42,51,65,76],
          borderColor:'#ef4444',
          backgroundColor:'rgba(239,68,68,0.2)',
          tension:.4,
          fill:true
        }]
      },
      options:{
        plugins:{legend:{display:false}},
        scales:{
          x:{grid:{color:'#1f2937'},ticks:{color:'#9ca3af'}},
          y:{grid:{color:'#1f2937'},ticks:{color:'#9ca3af'}}
        }
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
      

<header className="sticky top-0 backdrop-blur-md/60 bg-neutral-950/70 border-b border-neutral-800">
<nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
<a aria-label="UGXC home" className="flex items-center gap-3 hover:opacity-80 transition" href="#">

<svg className="shrink-0" height="32" viewbox="0 0 768 768" width="32" xmlns="http://www.w3.org/2000/svg">
<circle cx="384" cy="384" fill="#c00" r="384"></circle>
<path d="M306 192h156c30.9 0 56 25.1 56 56v272c0 92.7-75.3 168-168 168-92.8 0-168-75.3-168-168V192h124z" fill="#000"></path>
<path d="M462 384l132-72v168l-132 72V384z" fill="#000"></path>
</svg>
<span className="text-xl font-semibold tracking-tight">UGXC</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm">
<a className="hover:text-red-400 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 rounded" href="#features">Why UGXC</a>
<a className="hover:text-red-400 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 rounded" href="#stats">Stats</a>
<a className="hover:text-red-400 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 rounded" href="#faq">FAQ</a>
<a className="rounded-md border border-neutral-700 px-4 py-2 hover:border-red-400 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500" href="#">Developers</a>
</div>
<a className="hidden md:inline-flex items-center rounded-md bg-red-600 px-5 py-2 font-medium text-neutral-900 hover:bg-red-500 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500" href="#">Get UGXC</a>

<button aria-label="Open menu" className="md:hidden flex items-center justify-center w-9 h-9 border border-neutral-700 rounded-md hover:border-red-400 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500" id="mobileBtn">
<i className="w-5 h-5" data-lucide="menu"></i>
</button>
</nav>
</header>

<div className="fixed inset-0 bg-neutral-950/80 backdrop-blur-md p-6 flex-col gap-6 md:hidden hidden" id="mobileMenu">
<button aria-label="Close menu" className="mb-6 flex justify-end w-full text-neutral-400 hover:text-red-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500" id="closeMobile">
<i className="w-6 h-6" data-lucide="x"></i>
</button>
<a className="block py-2 text-lg" href="#features">Why UGXC</a>
<a className="block py-2 text-lg" href="#stats">Stats</a>
<a className="block py-2 text-lg" href="#faq">FAQ</a>
<a className="mt-4 inline-flex items-center rounded-md bg-red-600 px-5 py-2 font-medium text-neutral-900" href="#">Get UGXC</a>
</div>

<section className="relative overflow-hidden isolate pt-28" style={{backgroundImage: 'radial-gradient(600px at 50% -10%,rgba(220,38,38,0.25),transparent 70%),radial-gradient(400px at 80% 30%,rgba(220,38,38,0.15),transparent 60%)'}}>
<div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-16 items-center">
<div className="space-y-6">
<h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight reveal">
          The Ugandan Shilling,<br/> upgraded for the internet.
        </h1>
<p className="text-neutral-400 max-w-lg reveal delay-100">
          UGXC is a 1:1 asset-backed stablecoin bringing the reliability of the Ugandan Shilling to global, borderless blockchains—fast, affordable, 24/7.
        </p>
<div className="flex gap-4 reveal delay-200">
<a className="inline-flex items-center rounded-md bg-red-600 px-6 py-3 font-medium text-neutral-900 hover:bg-red-500 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500" href="#">Get UGXC</a>
<a className="inline-flex items-center gap-2 rounded-md border border-neutral-700 px-6 py-3 text-neutral-200 hover:border-red-400 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500" href="#whitepaper">
<i className="w-4 h-4" data-lucide="file-text"></i> Whitepaper
          </a>
</div>
</div>
<div className="reveal md:delay-150">
<img alt="Kampala skyline at dusk" className="rounded-xl shadow-2xl ring-1 ring-neutral-800/50" src="https://images.unsplash.com/photo-1622481794120-e287b4c49558?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
</div>
</div>
</section>

<div className="mx-auto max-w-7xl px-6"><hr className="my-24 border-neutral-800"/></div>

<section className="mx-auto max-w-7xl px-6 space-y-16" id="features">
<div className="text-center space-y-4 reveal">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Why choose UGXC</h2>
<p className="max-w-2xl mx-auto text-neutral-400">Built for businesses, traders, developers and everyday users.</p>
</div>
<div className="grid md:grid-cols-3 gap-10">
<div className="border border-neutral-800 rounded-xl p-8 hover:border-red-400 transition reveal">
<i className="w-8 h-8 text-red-500 mb-6" data-lucide="shield-check"></i>
<h3 className="text-xl font-medium mb-2 tracking-tight">Fully reserved</h3>
<p className="text-neutral-400">Every UGXC is backed 1-to-1 by cash and short-term treasury bills held at regulated financial institutions.</p>
</div>
<div className="border border-neutral-800 rounded-xl p-8 hover:border-red-400 transition reveal delay-100">
<i className="w-8 h-8 text-red-500 mb-6" data-lucide="zap"></i>
<h3 className="text-xl font-medium mb-2 tracking-tight">Instant settlement</h3>
<p className="text-neutral-400">Send UGXC around the globe in seconds on multiple blockchains with minimal fees—anytime, anywhere.</p>
</div>
<div className="border border-neutral-800 rounded-xl p-8 hover:border-red-400 transition reveal delay-200">
<i className="w-8 h-8 text-red-500 mb-6" data-lucide="code"></i>
<h3 className="text-xl font-medium mb-2 tracking-tight">Open-source &amp; composable</h3>
<p className="text-neutral-400">Integrate UGXC in a few lines of code. Build exchanges, wallets, on-ramps, paywalls and more.</p>
</div>
</div>
</section>

<div className="mx-auto max-w-7xl px-6"><hr className="my-24 border-neutral-800"/></div>

<section className="mx-auto max-w-7xl px-6 space-y-16" id="stats">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div className="space-y-6 reveal">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Transparent supply</h2>
<p className="text-neutral-400">Live issuance and redemption data updated every 30 seconds.</p>
<div className="grid grid-cols-2 gap-6 pt-4">
<div>
<p className="text-neutral-400 text-sm mb-1">Circulating UGXC</p>
<h4 className="text-2xl font-semibold tracking-tight">76,440,120</h4>
</div>
<div>
<p className="text-neutral-400 text-sm mb-1">Reserves (UGX Eq.)</p>
<h4 className="text-2xl font-semibold tracking-tight">UGX 76.4 B</h4>
</div>
</div>
</div>
<div>
<div className="rounded-xl border border-neutral-800 p-6 reveal delay-100">
<div>
<canvas height="220" id="supplyChart"></canvas>
</div>
</div>
</div>
</div>
</section>

<div className="mx-auto max-w-7xl px-6"><hr className="my-24 border-neutral-800"/></div>

<section className="mx-auto max-w-4xl px-6 mb-32 space-y-12" id="faq">
<div className="text-center reveal space-y-4">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Frequently asked questions</h2>
<p className="text-neutral-400 max-w-xl mx-auto">Everything you need to know before getting started.</p>
</div>
<div className="space-y-6">
<details className="group border border-neutral-800 rounded-xl p-6 reveal" open="">
<summary className="cursor-pointer list-none flex items-center justify-between font-medium">
          How is UGXC backed?
          <i className="w-5 h-5 group-open:rotate-180 transition" data-lucide="chevron-down"></i>
</summary>
<p className="mt-4 text-neutral-400">
          UGXC is fully backed by cash and cash-equivalent instruments held in segregated accounts with reputable Ugandan financial partners. Independent attestations are published monthly.
        </p>
</details>
<details className="group border border-neutral-800 rounded-xl p-6 reveal">
<summary className="cursor-pointer list-none flex items-center justify-between font-medium">
          Where can I trade UGXC?
          <i className="w-5 h-5 group-open:rotate-180 transition" data-lucide="chevron-down"></i>
</summary>
<p className="mt-4 text-neutral-400">
          UGXC is available on leading centralized and decentralized exchanges. Check our “Markets” page for live listings.
        </p>
</details>
<details className="group border border-neutral-800 rounded-xl p-6 reveal delay-100">
<summary className="cursor-pointer list-none flex items-center justify-between font-medium">
          Which blockchains does UGXC support?
          <i className="w-5 h-5 group-open:rotate-180 transition" data-lucide="chevron-down"></i>
</summary>
<p className="mt-4 text-neutral-400">
          At launch UGXC supports Ethereum, Solana and Polygon, with more networks on the roadmap.
        </p>
</details>
</div>
</section>

<footer className="border-t border-neutral-800 py-12 px-6 bg-neutral-950 text-neutral-400 text-sm">
<div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-3">

<svg className="shrink-0" height="24" viewbox="0 0 768 768" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="384" cy="384" fill="#c00" r="384"></circle>
<path d="M306 192h156c30.9 0 56 25.1 56 56v272c0 92.7-75.3 168-168 168-92.8 0-168-75.3-168-168V192h124z" fill="#000"></path>
<path d="M462 384l132-72v168l-132 72V384z" fill="#000"></path>
</svg>
        © 2024 UGXC Foundation Ltd.
      </div>
<div className="flex gap-4">
<a className="hover:text-red-400 transition" href="#">Privacy</a>
<a className="hover:text-red-400 transition" href="#">Terms</a>
<a className="hover:text-red-400 transition" href="#">Contact</a>
</div>
</div>
</footer>



    </>
  );
}
