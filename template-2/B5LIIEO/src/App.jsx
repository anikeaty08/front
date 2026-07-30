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
      
    lucide.createIcons();

    /* Theme toggle */
    const toggler = document.getElementById('themeToggler');
    toggler.addEventListener('click', () => {
      document.body.classList.toggle('bg-black');
      document.body.classList.toggle('bg-white');
      document.body.classList.toggle('text-black');
      document.body.classList.toggle('text-white');
      toggler.firstElementChild.setAttribute('data-lucide',
        document.body.classList.contains('bg-black') ? 'sun' : 'moon');
      lucide.createIcons();
    });

    /* Tabs */
    document.querySelectorAll('.tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const tab = btn.dataset.tab;
        // switch buttons
        document.querySelectorAll('.tab-btn').forEach(b=>{
          b.classList.toggle('bg-white', b===btn);
          b.classList.toggle('text-black', b===btn);
          b.setAttribute('aria-selected', b===btn);
        });
        // switch panels
        document.querySelectorAll('[data-panel]').forEach(p=>{
          p.hidden = p.dataset.panel !== tab;
        });
        lucide.createIcons();
        if(tab==='dashboard' && !window.chartLoaded) initChart();
      });
    });

    /* Chart.js */
    function initChart(){
      const ctx = document.getElementById('revenueChart');
      if(!ctx) return;
      new Chart(ctx, {
        type:'line',
        data:{
          labels:['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
          datasets:[{
            label:'Revenue',
            data:[6000,7800,7200,8600,9100,9900,10300,9600,11200,11800,12700,13400],
            borderColor:'#8b5cf6',
            backgroundColor:'rgba(139,92,246,0.15)',
            tension:0.4,
            fill:true
          }]
        },
        options:{
          plugins:{legend:{display:false}},
          scales:{
            x:{grid:{display:false},ticks:{color:'#9ca3af'}},
            y:{grid:{color:'rgba(255,255,255,0.05)'},ticks:{color:'#9ca3af',callback:v=>'$'+v/1000+'k'}}
          },
          responsive:true,
          maintainAspectRatio:false
        }
      });
      window.chartLoaded = true;
    }

    /* Template color picker */
    document.querySelectorAll('.color-btn').forEach(btn=>{
      btn.addEventListener('click',()=>{
        const color = btn.dataset.color;
        document.querySelector('.template-preview').style.borderColor = color;
        document.querySelector('.template-blob').style.background = color+'33';
      });
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
      

<div className="fixed inset-0 -z-10 pointer-events-none">
<div className="absolute -top-1/2 left-1/2 w-[120vw] aspect-square rounded-full bg-violet-500/20 blur-[200px]" style={{animation: `blob-1 40s ease-in-out infinite`}}></div>
<div className="absolute bottom-0 right-0 w-[80vw] aspect-square rounded-full bg-fuchsia-600/20 blur-[160px]" style={{animation: `blob-2 40s ease-in-out infinite`}}></div>
</div>

<nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[92%] max-w-6xl backdrop-blur-lg bg-white/5 border border-white/10 rounded-full px-6 py-3 z-50 flex justify-between items-center">
<a className="flex items-center space-x-2 focus-visible:outline-2 focus-visible:outline-offset-2" href="index.html">
<i className="w-5 h-5" data-lucide="file-text"></i>
<span className="text-sm font-medium tracking-tight">InvoiceGen</span>
</a>
<div className="hidden md:flex items-center space-x-8 text-sm">
<a className="text-white focus-visible:outline-2" href="features.html">Features</a>
<a className="hover:text-white/90 focus-visible:outline-2" href="pricing.html">Pricing</a>
<a className="hover:text-white/90 focus-visible:outline-2" href="insights.html">Insights</a>
<a className="hover:text-white/90 focus-visible:outline-2" href="contact.html">FAQ</a>
</div>
<div className="flex items-center space-x-3">
<button aria-label="Toggle theme" className="p-2 rounded-full bg-white/10 hover:bg-white/15 focus-visible:outline-2" id="themeToggler">
<i className="w-4 h-4" data-lucide="sun"></i>
</button>
<a className="hidden md:inline-block text-xs font-medium hover:text-white/90 focus-visible:outline-2" href="#">Sign In</a>
<a className="px-4 py-2 bg-white text-black text-xs font-medium rounded-full shadow focus-visible:outline-2" href="#">Get Started</a>
</div>
</nav>
<header className="pt-[7rem] md:pt-[9rem] pb-24 text-center px-6 max-w-4xl mx-auto">
<h1 className="text-4xl md:text-5xl font-medium tracking-tight">Everything you need to invoice with confidence</h1>
<p className="mt-6 md:text-lg text-neutral-300">Each module is crafted to remove friction from your cash-flow.</p>
</header>

<section className="px-6 pb-32 max-w-6xl mx-auto grid lg:grid-cols-3 gap-10">
<div className="border border-white/10 rounded-lg p-8 bg-white/5 hover:bg-white/10 transition group">
<i className="w-6 h-6 text-violet-400 mb-4" data-lucide="zap"></i>
<h3 className="font-medium tracking-tight mb-2">Instant creation</h3>
<p className="text-sm text-neutral-300">Smart fields, saved items & tax logic.</p>
</div>
<div className="border border-white/10 rounded-lg p-8 bg-white/5 hover:bg-white/10 transition group">
<i className="w-6 h-6 text-violet-400 mb-4" data-lucide="credit-card"></i>
<h3 className="font-medium tracking-tight mb-2">Embedded checkout</h3>
<p className="text-sm text-neutral-300">Card, ACH & recurring billing built-in.</p>
</div>
<div className="border border-white/10 rounded-lg p-8 bg-white/5 hover:bg-white/10 transition group">
<i className="w-6 h-6 text-violet-400 mb-4" data-lucide="bell-ring"></i>
<h3 className="font-medium tracking-tight mb-2">Automated follow-ups</h3>
<p className="text-sm text-neutral-300">Friendly nudges scheduled for you.</p>
</div>
<div className="border border-white/10 rounded-lg p-8 bg-white/5 hover:bg-white/10 transition group lg:col-span-2">
<i className="w-6 h-6 text-violet-400 mb-4" data-lucide="chart-line"></i>
<h3 className="font-medium tracking-tight mb-2">Live analytics</h3>
<p className="text-sm text-neutral-300">Revenue forecasts, late-payor insights & exportable reports.</p>
</div>
<div className="border border-white/10 rounded-lg p-8 bg-white/5 hover:bg-white/10 transition group">
<i className="w-6 h-6 text-violet-400 mb-4" data-lucide="settings"></i>
<h3 className="font-medium tracking-tight mb-2">Custom workflows</h3>
<p className="text-sm text-neutral-300">Zapier & native integrations connect to your stack.</p>
</div>
</section>

<section className="px-6 pb-32 max-w-6xl mx-auto">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-center mb-12">See InvoiceGen in action</h2>

<div className="border border-white/10 rounded-xl bg-white/5">
<div className="flex gap-2 p-2 border-b border-white/10" role="tablist">
<button aria-selected="true" className="tab-btn flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-black text-sm font-medium focus-visible:outline-2" data-tab="invoice" role="tab">
<i className="w-4 h-4" data-lucide="file-plus"></i><span>Invoice builder</span>
</button>
<button aria-selected="false" className="tab-btn flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium hover:bg-white/10 focus-visible:outline-2" data-tab="dashboard" role="tab">
<i className="w-4 h-4" data-lucide="layout-dashboard"></i><span>Dashboard</span>
</button>
<button aria-selected="false" className="tab-btn flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium hover:bg-white/10 focus-visible:outline-2" data-tab="templates" role="tab">
<i className="w-4 h-4" data-lucide="palette"></i><span>Templates</span>
</button>
</div>

<div className="p-8 space-y-16">

<div data-panel="invoice">
<div className="grid md:grid-cols-2 gap-10">

<div>
<h3 className="font-medium tracking-tight mb-4">Quick invoice</h3>
<div className="space-y-4">
<div>
<label className="block text-xs mb-1" htmlFor="customer">Bill to</label>
<input className="w-full bg-white/10 border border-white/10 rounded-md px-3 py-2 text-sm placeholder:text-neutral-500 focus-visible:outline-2" id="customer" placeholder="Acme Inc." type="text" />
</div>
<div>
<label className="block text-xs mb-1" htmlFor="item">Item</label>
<input className="w-full bg-white/10 border border-white/10 rounded-md px-3 py-2 text-sm placeholder:text-neutral-500 focus-visible:outline-2" id="item" placeholder="Design work" type="text" />
</div>
<div className="flex gap-4">
<div className="flex-1">
<label className="block text-xs mb-1" htmlFor="qty">Qty</label>
<input className="w-full bg-white/10 border border-white/10 rounded-md px-3 py-2 text-sm focus-visible:outline-2" id="qty" type="number" value="1" />
</div>
<div className="flex-1">
<label className="block text-xs mb-1" htmlFor="price">Price</label>
<input className="w-full bg-white/10 border border-white/10 rounded-md px-3 py-2 text-sm focus-visible:outline-2" id="price" type="number" value="1200" />
</div>
</div>
<button className="mt-6 inline-flex items-center gap-2 px-5 py-2 bg-white text-black text-sm font-medium rounded-full shadow hover:shadow-md focus-visible:outline-2">
<i className="w-4 h-4" data-lucide="send"></i>Send invoice
                </button>
</div>
</div>

<div className="relative">
<div className="absolute inset-0 -skew-y-3 bg-violet-500/10 rounded-xl blur-[60px]"></div>
<div className="relative border border-white/10 bg-white/5 rounded-xl p-6">
<div className="flex justify-between items-center mb-6">
<h4 className="font-medium">INVOICE</h4>
<span className="text-xs">#0087</span>
</div>
<div className="text-xs space-y-2 mb-6">
<p><span className="text-neutral-400">Bill to:</span> Acme Inc.</p>
<p><span className="text-neutral-400">Date:</span> Feb 20 2024</p>
</div>
<div className="border border-white/10 rounded-lg overflow-hidden">
<div className="grid grid-cols-4 text-xs bg-white/10">
<div className="col-span-2 p-2">Item</div><div className="p-2 text-right">Qty</div><div className="p-2 text-right">Total</div>
</div>
<div className="grid grid-cols-4 text-xs">
<div className="col-span-2 p-2">Design work</div><div className="p-2 text-right">1</div><div className="p-2 text-right">$1,200</div>
</div>
</div>
<div className="text-right mt-6">
<p className="text-sm font-medium">Amount due: $1,200</p>
</div>
</div>
</div>
</div>
</div>

<div data-panel="dashboard" hidden="">
<div className="grid md:grid-cols-3 gap-8">

<div className="md:col-span-1 space-y-6">
<div className="border border-white/10 bg-white/5 rounded-lg p-6">
<p className="text-xs text-neutral-400 mb-2">Outstanding</p>
<p className="text-xl font-medium tracking-tight">$3,450</p>
</div>
<div className="border border-white/10 bg-white/5 rounded-lg p-6">
<p className="text-xs text-neutral-400 mb-2">Paid this month</p>
<p className="text-xl font-medium tracking-tight">$7,980</p>
</div>
<div className="border border-white/10 bg-white/5 rounded-lg p-6">
<p className="text-xs text-neutral-400 mb-2">Avg. days to pay</p>
<p className="text-xl font-medium tracking-tight">8 days</p>
</div>
</div>

<div className="md:col-span-2">
<div className="border border-white/10 bg-white/5 rounded-lg p-6">
<h4 className="font-medium tracking-tight mb-4">Monthly revenue</h4>
<div className="relative h-64">
<div className="h-full">
<canvas id="revenueChart"></canvas>
</div>
</div>
</div>
</div>
</div>
</div>

<div data-panel="templates" hidden="">
<div className="grid md:grid-cols-2 gap-10">

<div>
<h3 className="font-medium tracking-tight mb-4">Pick a theme</h3>
<div className="flex flex-wrap gap-4">
<button aria-label="Purple theme" className="color-btn w-8 h-8 rounded-full border-2 border-white/20 hover:scale-105 transition" data-color="#8b5cf6" style={{background: `#8b5cf6`}}></button>
<button aria-label="Emerald theme" className="color-btn w-8 h-8 rounded-full border-2 border-white/20 hover:scale-105 transition" data-color="#10b981" style={{background: `#10b981`}}></button>
<button aria-label="Amber theme" className="color-btn w-8 h-8 rounded-full border-2 border-white/20 hover:scale-105 transition" data-color="#f59e0b" style={{background: `#f59e0b`}}></button>
<button aria-label="Rose theme" className="color-btn w-8 h-8 rounded-full border-2 border-white/20 hover:scale-105 transition" data-color="#f43f5e" style={{background: `#f43f5e`}}></button>
</div>
<p className="mt-6 text-sm text-neutral-300">Colors instantly update the preview so you can fine-tune your brand.</p>
</div>

<div className="relative">
<div className="absolute inset-0 -skew-y-3 bg-violet-500/10 rounded-xl blur-[60px] template-blob"></div>
<div className="relative border border-white/10 bg-white/5 rounded-xl p-6 template-preview">
<div className="flex items-center justify-between mb-6">
<h4 className="font-medium">INVOICE</h4>
<span className="text-xs">#0142</span>
</div>
<div className="border border-white/10 rounded-lg h-32 mb-6 flex items-center justify-center text-neutral-400 text-xs">Preview area</div>
<div className="text-right">
<p className="text-sm font-medium">Amount due: $2,400</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="text-center pb-32 px-6">
<h2 className="text-3xl font-medium tracking-tight">Ready to experience it?</h2>
<a className="inline-flex mt-6 px-8 py-3 bg-white text-black font-medium rounded-full shadow-md hover:shadow-lg focus-visible:outline-2" href="pricing.html">View plans</a>
</section>
<footer className="px-6 py-16 max-w-6xl mx-auto text-sm text-neutral-400 border-t border-white/10">
<div className="flex flex-col md:flex-row md:justify-between gap-8">
<div>
<a className="flex items-center space-x-2 text-white focus-visible:outline-2" href="index.html">
<i className="w-5 h-5" data-lucide="file-text"></i>
<span className="font-medium">InvoiceGen</span>
</a>
<p className="mt-4 max-w-xs">Built remotely with ♥ for global creators.</p>
</div>
<div className="grid grid-cols-2 gap-8">
<div>
<h4 className="text-white/90 font-medium mb-2">Product</h4>
<ul className="space-y-2">
<li><a className="text-white focus-visible:outline-2" href="features.html">Features</a></li>
<li><a className="hover:text-white/80 focus-visible:outline-2" href="pricing.html">Pricing</a></li>
<li><a className="hover:text-white/80 focus-visible:outline-2" href="insights.html">Changelog</a></li>
</ul>
</div>
<div>
<h4 className="text-white/90 font-medium mb-2">Company</h4>
<ul className="space-y-2">
<li><a className="hover:text-white/80 focus-visible:outline-2" href="#">About</a></li>
<li><a className="hover:text-white/80 focus-visible:outline-2" href="#">Careers</a></li>
<li><a className="hover:text-white/80 focus-visible:outline-2" href="contact.html">Contact</a></li>
</ul>
</div>
</div>
</div>
<div className="mt-12 flex justify-between">
<span>© 2024 InvoiceGen.</span>
<div className="flex space-x-4">
<a className="hover:text-white focus-visible:outline-2" href="#"><i className="w-4 h-4" data-lucide="twitter"></i></a>
<a className="hover:text-white focus-visible:outline-2" href="#"><i className="w-4 h-4" data-lucide="linkedin"></i></a>
<a className="hover:text-white focus-visible:outline-2" href="#"><i className="w-4 h-4" data-lucide="github"></i></a>
</div>
</div>
</footer>


    </>
  );
}
