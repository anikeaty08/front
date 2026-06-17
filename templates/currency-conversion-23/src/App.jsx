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



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
},
colors: {
background: '#050505',
surface: '#0A0A0A',
primary: '#FFFFFF',
secondary: '#A1A1AA',
border: 'rgba(255,255,255,0.08)',
accent: '#22c55e', // Green for finance/success
},
backgroundImage: {
'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
}
}
}
}



        // 1. Lenis Smooth Scroll
        const lenis = new Lenis({
            lerp: 0.1,
            smooth: true,
        });
        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        // 2. Spotlight Interaction
        document.addEventListener('mousemove', (e) => {
            document.querySelectorAll('.spotlight-card').forEach(card => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                card.style.setProperty('--mouse-x', `${x}px`);
                card.style.setProperty('--mouse-y', `${y}px`);
            });
        });

        // 3. Currency Widget Logic (Mock)
        const rates = {
            'USD': 1, 'EUR': 0.92, 'GBP': 0.79,
            'CLP': 980.50, 'JPY': 150.2, 'INR': 83.1, 'CAD': 1.35
        };

        const amountInput = document.getElementById('calc-amount');
        const fromSelect = document.getElementById('calc-from');
        const toSelect = document.getElementById('calc-to');
        const resultDisplay = document.getElementById('calc-result');
        const rateDisplay = document.getElementById('calc-rate');
        const swapBtn = document.getElementById('swap-btn');

        function updateCalc() {
            const amount = parseFloat(amountInput.value) || 0;
            const from = fromSelect.value;
            const to = toSelect.value;

            // Simple mock conversion logic
            // (In a real app, this fetches API)
            const rate = (rates[to] / rates[from]); 
            const result = amount * rate;
            
            // Format
            const formatter = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: to,
            });

            resultDisplay.textContent = formatter.format(result);
            rateDisplay.textContent = `1 ${from} = ${rate.toFixed(4)} ${to}`;
            
            // Pulse effect
            resultDisplay.classList.add('opacity-50');
            setTimeout(() => resultDisplay.classList.remove('opacity-50'), 200);
        }

        [amountInput, fromSelect, toSelect].forEach(el => el.addEventListener('input', updateCalc));
        
        swapBtn.addEventListener('click', () => {
            const temp = fromSelect.value;
            fromSelect.value = toSelect.value;
            toSelect.value = temp;
            updateCalc();
        });

        // Initialize
        updateCalc();

        // 4. Code Tabs Logic
        const tabs = document.querySelectorAll('.code-tab-btn');
        const contents = document.querySelectorAll('.code-content');

        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                // Remove active classes
                tabs.forEach(t => {
                    t.classList.remove('bg-white/10', 'border-white/10', 'text-white');
                    t.classList.add('border-transparent', 'text-gray-500');
                });
                
                // Add active to clicked
                tab.classList.remove('border-transparent', 'text-gray-500');
                tab.classList.add('bg-white/10', 'border-white/10', 'text-white');

                // Show content
                const targetId = tab.getAttribute('data-target');
                contents.forEach(c => {
                    c.classList.add('hidden');
                    if(c.id === targetId) c.classList.remove('hidden');
                });
            });
        });

        function copyCode() {
            // Mock copy action
            alert("Code copied to clipboard!");
        }
    
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
      

<div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-white/5 blur-[100px] rounded-full pointer-events-none -z-10 opacity-40"></div>

<nav className="fixed top-0 w-full z-50 glass h-16 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-full flex justify-between items-center">

<div className="flex items-center gap-8">
<a className="group flex items-center gap-2" href="#">

<span className="font-sans font-semibold text-lg tracking-tight text-white group-hover:text-white/80 transition-colors">RateRush</span>
</a>

<div className="hidden md:flex items-center gap-6">
<a className="text-sm text-secondary hover:text-white transition-colors" href="#product">Product</a>
<a className="text-sm text-secondary hover:text-white transition-colors" href="#integration">Integrations</a>
<a className="text-sm text-secondary hover:text-white transition-colors" href="#pricing">Pricing</a>
<a className="text-sm text-secondary hover:text-white transition-colors" href="#docs">Docs</a>
</div>
</div>

<div className="flex items-center gap-4">
<a className="hidden md:block text-sm text-secondary hover:text-white transition-colors" href="#">Log in</a>
<a className="bg-white text-black px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-200 transition-colors flex items-center gap-2" href="#signup">
                    Get API Key
                    <span className="iconify" data-icon="lucide:arrow-right" data-width="14"></span>
</a>

<button aria-label="Menu" className="md:hidden text-white">
<span className="iconify" data-icon="lucide:menu" data-width="20"></span>
</button>
</div>
</div>
</nav>
<main>

<section className="relative pt-40 pb-20 px-6">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 border border-white/10 bg-white/5 px-3 py-1 rounded-full mb-8 backdrop-blur-sm">
<span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
<span className="text-xs font-medium text-accent tracking-wide uppercase">v2.0 Now Live</span>
</div>
<h1 className="text-5xl md:text-6xl lg:text-[64px] font-semibold leading-[1.1] tracking-tight mb-6 text-gradient">
                        the fastest and easy to use currency converter in the world
                    </h1>
<p className="text-lg md:text-xl text-secondary mb-10 leading-relaxed max-w-lg">
                        Convert, price, reconcile, and settle across currencies in milliseconds—without headaches.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 mb-12">
<button className="h-12 px-6 rounded-lg bg-white text-black font-semibold text-sm hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
                            Get API Key
                        </button>
<button className="h-12 px-6 rounded-lg border border-white/10 text-white font-medium text-sm hover:bg-white/5 transition-colors flex items-center justify-center gap-2">
                            Read Docs
                            <span className="text-secondary" data-icon="lucide:book" data-width="14"></span>
</button>
</div>
<div className="flex items-center gap-6 text-xs font-mono text-secondary">
<div className="flex items-center gap-2">
<span className="iconify text-accent" data-icon="lucide:check" data-width="14"></span>
                            Low-latency API
                        </div>
<div className="flex items-center gap-2">
<span className="iconify text-accent" data-icon="lucide:check" data-width="14"></span>
                            Simple pricing
                        </div>
<div className="flex items-center gap-2">
<span className="iconify text-accent" data-icon="lucide:check" data-width="14"></span>
                            SDKs included
                        </div>
</div>
</div>

<div className="relative w-full max-w-md mx-auto lg:ml-auto">

<div className="absolute -inset-1 bg-gradient-to-r from-gray-700 to-gray-800 rounded-2xl blur opacity-20"></div>
<div className="relative bg-[#0A0A0A] border border-white/10 rounded-xl p-6 shadow-2xl spotlight-card" id="demo-widget">
<div className="flex justify-between items-center mb-6">
<span className="text-sm font-semibold text-white tracking-tight">Preview</span>
<div className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
<span className="text-[10px] text-secondary font-mono">LIVE_RATE</span>
</div>
</div>

<div className="space-y-4">
<div>
<label className="block text-[10px] uppercase tracking-wider text-secondary mb-1.5 font-semibold">Amount</label>
<div className="relative">
<input className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 text-white font-mono text-sm focus:outline-none focus:border-white/30 transition-colors placeholder-gray-600" id="calc-amount" type="number" value="1000"/>
</div>
</div>
<div className="grid grid-cols-[1fr,auto,1fr] gap-2 items-end">
<div>
<label className="block text-[10px] uppercase tracking-wider text-secondary mb-1.5 font-semibold">From</label>
<select className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-3 text-white font-mono text-sm focus:outline-none appearance-none cursor-pointer hover:bg-white/10 transition-colors" id="calc-from">
<option value="USD">USD</option>
<option value="EUR">EUR</option>
<option value="GBP">GBP</option>
</select>
</div>
<button className="mb-[5px] p-2 rounded-md hover:bg-white/10 text-secondary hover:text-white transition-colors" id="swap-btn">
<span className="iconify" data-icon="lucide:arrow-left-right" data-width="16"></span>
</button>
<div>
<label className="block text-[10px] uppercase tracking-wider text-secondary mb-1.5 font-semibold">To</label>
<select className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-3 text-white font-mono text-sm focus:outline-none appearance-none cursor-pointer hover:bg-white/10 transition-colors" id="calc-to">
<option value="CLP">CLP</option>
<option value="JPY">JPY</option>
<option value="INR">INR</option>
<option value="CAD">CAD</option>
</select>
</div>
</div>

<div className="mt-6 pt-6 border-t border-dashed border-white/10">
<div className="flex justify-between items-end">
<div>
<div className="text-xs text-secondary mb-1">Converted amount</div>
<div className="text-2xl font-mono font-medium text-white tracking-tight" id="calc-result">Loading...</div>
</div>
<div className="text-right">
<div className="text-[10px] text-secondary mb-1">Exchange Rate</div>
<div className="text-xs font-mono text-accent" id="calc-rate">...</div>
</div>
</div>
<div className="mt-4 flex justify-between items-center">
<div className="text-[10px] text-gray-600 font-mono" id="last-updated">Updated: Just now</div>
<div className="text-[10px] text-gray-600 font-mono">15ms latency</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 border-y border-white/5 bg-white/[0.01]">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-sm text-secondary mb-8">Trusted by teams building global finance</p>

<div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
<div className="flex items-center gap-2 font-bold text-lg text-white"><span className="iconify" data-icon="lucide:hexagon"></span> Acme Corp</div>
<div className="flex items-center gap-2 font-bold text-lg text-white"><span className="iconify" data-icon="lucide:triangle"></span> Vertex</div>
<div className="flex items-center gap-2 font-bold text-lg text-white"><span className="iconify" data-icon="lucide:circle"></span> Orbit</div>
<div className="flex items-center gap-2 font-bold text-lg text-white"><span className="iconify" data-icon="lucide:box"></span> Layers</div>
<div className="flex items-center gap-2 font-bold text-lg text-white"><span className="iconify" data-icon="lucide:zap"></span> Bolt</div>
<div className="flex items-center gap-2 font-bold text-lg text-white"><span className="iconify" data-icon="lucide:command"></span> CMD+F</div>
</div>
<p className="text-xs text-gray-600 mt-8 font-mono">Used in expense apps, ERPs, e-commerce, and billing.</p>
</div>
</section>

<section className="py-24 px-6 relative" id="product">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="spotlight-card rounded-xl p-8 bg-white/[0.02]">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-white">
<span className="iconify" data-icon="lucide:zap" data-width="20"></span>
</div>
<h3 className="text-lg font-semibold text-white mb-3 tracking-tight">Blazing fast conversions</h3>
<p className="text-sm text-secondary leading-relaxed">
                            Engineered for speed with edge-caching. Get rates in sub-20ms latency regardless of where your servers are located.
                        </p>
</div>

<div className="spotlight-card rounded-xl p-8 bg-white/[0.02]">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-white">
<span className="iconify" data-icon="lucide:code-2" data-width="20"></span>
</div>
<h3 className="text-lg font-semibold text-white mb-3 tracking-tight">Ridiculously simple API</h3>
<p className="text-sm text-secondary leading-relaxed">
                            One endpoint to rule them all. Predictable JSON responses, clear error messages, and fully typed SDKs.
                        </p>
</div>

<div className="spotlight-card rounded-xl p-8 bg-white/[0.02]">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-white">
<span className="iconify" data-icon="lucide:shield-check" data-width="20"></span>
</div>
<h3 className="text-lg font-semibold text-white mb-3 tracking-tight">Built for reliability</h3>
<p className="text-sm text-secondary leading-relaxed">
                            99.99% uptime SLA. Real-time status page and historical rate redundancy ensures you never fail a transaction.
                        </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5 bg-[#080808]" id="integration">
<div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">

<div>
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-6">Integrate in minutes</h2>
<p className="text-secondary text-lg mb-8 max-w-md">
                        Don't waste time parsing XML or scraping bank sites. Install our SDK and start converting immediately.
                    </p>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-sm text-gray-300">
<span className="flex items-center justify-center w-5 h-5 rounded-full bg-accent/10 text-accent">
<span className="iconify" data-icon="lucide:check" data-width="12"></span>
</span>
                            Type-safe responses
                        </li>
<li className="flex items-center gap-3 text-sm text-gray-300">
<span className="flex items-center justify-center w-5 h-5 rounded-full bg-accent/10 text-accent">
<span className="iconify" data-icon="lucide:check" data-width="12"></span>
</span>
                            Automatic retries
                        </li>
<li className="flex items-center gap-3 text-sm text-gray-300">
<span className="flex items-center justify-center w-5 h-5 rounded-full bg-accent/10 text-accent">
<span className="iconify" data-icon="lucide:check" data-width="12"></span>
</span>
                            Async support built-in
                        </li>
</ul>
<a className="text-white text-sm font-medium border-b border-white/30 hover:border-white pb-0.5 transition-all inline-flex items-center gap-1" href="#">
                        View full documentation
                        <span className="iconify" data-icon="lucide:arrow-up-right" data-width="12"></span>
</a>
</div>

<div className="relative">

<div className="flex items-center gap-1 mb-4 overflow-x-auto no-scrollbar">
<button className="code-tab-btn active px-4 py-1.5 rounded-full text-xs font-mono border border-white/10 bg-white/10 text-white transition-all whitespace-nowrap" data-target="tab-django">Django</button>
<button className="code-tab-btn px-4 py-1.5 rounded-full text-xs font-mono border border-transparent text-gray-500 hover:text-white transition-all whitespace-nowrap" data-target="tab-fastapi">FastAPI</button>
<button className="code-tab-btn px-4 py-1.5 rounded-full text-xs font-mono border border-transparent text-gray-500 hover:text-white transition-all whitespace-nowrap" data-target="tab-next">Next.js</button>
<button className="code-tab-btn px-4 py-1.5 rounded-full text-xs font-mono border border-transparent text-gray-500 hover:text-white transition-all whitespace-nowrap" data-target="tab-rust">Rust</button>
</div>

<div className="bg-[#0F0F0F] border border-white/10 rounded-xl overflow-hidden shadow-2xl relative min-h-[360px]">
<div className="flex items-center px-4 py-3 border-b border-white/5 bg-white/[0.02]">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<div className="ml-auto">
<button className="text-xs text-gray-500 hover:text-white transition-colors" onclick="copyCode()">
<span className="iconify" data-icon="lucide:copy" data-width="14"></span>
</button>
</div>
</div>
<div className="p-6 overflow-x-auto">

<div className="code-content block font-mono text-sm leading-relaxed" id="tab-django">
<div className="text-gray-500 select-none mb-4"># Terminal<br/>$ pip install raterush</div>
<div className="text-gray-300">
<span className="code-k">from</span> raterush <span className="code-k">import</span> RateRush<br/><br/>
                                    rr = RateRush(api_key=<span className="code-s">"rr_live_xxx"</span>)<br/><br/>
<span className="code-c"># Convert securely</span><br/>
                                    result = rr.<span className="code-f">convert</span>(<br/>
                                      amount=<span className="code-n">100</span>,<br/>
                                      from_=<span className="code-s">"USD"</span>,<br/>
                                      to=<span className="code-s">"CLP"</span><br/>
                                    )<br/><br/>
<span className="code-f">print</span>(result.amount, result.rate)
                                </div>
</div>

<div className="code-content hidden font-mono text-sm leading-relaxed" id="tab-fastapi">
<div className="text-gray-500 select-none mb-4"># Terminal<br/>$ pip install raterush fastapi</div>
<div className="text-gray-300">
<span className="code-k">from</span> fastapi <span className="code-k">import</span> FastAPI<br/>
<span className="code-k">from</span> raterush <span className="code-k">import</span> RateRush<br/><br/>
                                    app = FastAPI()<br/>
                                    rr = RateRush(api_key=<span className="code-s">"rr_live_xxx"</span>)<br/><br/>
<span className="code-k">@app.get</span>(<span className="code-s">"/convert"</span>)<br/>
<span className="code-k">def</span> <span className="code-f">convert</span>(amount: <span className="code-k">float</span>, from_: <span className="code-k">str</span>, to: <span className="code-k">str</span>):<br/>
                                      <span className="code-k">return</span> rr.<span className="code-f">convert</span>(amount=amount, from_=from_, to=to)
                                </div>
</div>

<div className="code-content hidden font-mono text-sm leading-relaxed" id="tab-next">
<div className="text-gray-500 select-none mb-4"># Terminal<br/>$ npm i @raterush/next</div>
<div className="text-gray-300">
<span className="code-k">import</span> { RateRush } <span className="code-k">from</span> <span className="code-s">"@raterush/next"</span>;<br/><br/>
<span className="code-k">const</span> rr = <span className="code-k">new</span> RateRush(process.env.RATERUSH_API_KEY!);<br/><br/>
<span className="code-k">export default async function</span> <span className="code-f">handler</span>() {<br/>
                                      <span className="code-k">const</span> { amount, rate } = <span className="code-k">await</span> rr.<span className="code-f">convert</span>({<br/>
                                        amount: <span className="code-n">100</span>,<br/>
                                        from: <span className="code-s">"USD"</span>,<br/>
                                        to: <span className="code-s">"CLP"</span><br/>
                                      });<br/>
                                    }
                                </div>
</div>

<div className="code-content hidden font-mono text-sm leading-relaxed" id="tab-rust">
<div className="text-gray-500 select-none mb-4"># Terminal<br/>$ cargo add raterush</div>
<div className="text-gray-300">
<span className="code-k">use</span> raterush::RateRush;<br/><br/>
<span className="code-k">#[tokio::main]</span><br/>
<span className="code-k">async fn</span> <span className="code-f">main</span>() {<br/>
                                      <span className="code-k">let</span> rr = RateRush::<span className="code-f">new</span>(<span className="code-s">"rr_live_xxx"</span>);<br/>
                                      <span className="code-k">let</span> res = rr.<span className="code-f">convert</span>(<span className="code-n">100.0</span>, <span className="code-s">"USD"</span>, <span className="code-s">"CLP"</span>).<span className="code-k">await</span>.unwrap();<br/>
                                      <span className="code-f">println!</span>(<span className="code-s">"{} @ {}"</span>, res.amount, res.rate);<br/>
                                    }
                                </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-4">Made for finance &amp; accounting use cases</h2>
<p className="text-secondary">Deterministic formatting. No rounding surprises.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="spotlight-card rounded-xl p-6 bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
<div className="mb-4 text-white"><span className="iconify" data-icon="lucide:receipt" data-width="24"></span></div>
<h4 className="text-sm font-semibold text-white mb-2">Expense management</h4>
<p className="text-xs text-gray-400 leading-relaxed">Automate employee reimbursements across borders instantly.</p>
</div>

<div className="spotlight-card rounded-xl p-6 bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
<div className="mb-4 text-white"><span className="iconify" data-icon="lucide:file-text" data-width="24"></span></div>
<h4 className="text-sm font-semibold text-white mb-2">Invoicing</h4>
<p className="text-xs text-gray-400 leading-relaxed">Generate multi-currency invoices with spot rates locked at creation.</p>
</div>

<div className="spotlight-card rounded-xl p-6 bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
<div className="mb-4 text-white"><span className="iconify" data-icon="lucide:scale" data-width="24"></span></div>
<h4 className="text-sm font-semibold text-white mb-2">ERP Reconciliation</h4>
<p className="text-xs text-gray-400 leading-relaxed">Sync ledger amounts with historical FX data for perfect books.</p>
</div>

<div className="spotlight-card rounded-xl p-6 bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
<div className="mb-4 text-white"><span className="iconify" data-icon="lucide:shopping-cart" data-width="24"></span></div>
<h4 className="text-sm font-semibold text-white mb-2">Localization</h4>
<p className="text-xs text-gray-400 leading-relaxed">Show local prices at checkout to increase conversion rates.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5 bg-[#080808]" id="pricing">
<div className="max-w-7xl mx-auto">
<h2 className="text-3xl font-semibold text-white text-center mb-16 tracking-tight">Simple, usage-based pricing</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">

<div className="border border-white/10 p-8 rounded-2xl bg-white/[0.01]">
<h3 className="text-sm font-semibold text-white mb-2">Free</h3>
<div className="text-3xl font-bold text-white mb-6">$0<span className="text-sm font-normal text-secondary">/mo</span></div>
<p className="text-xs text-secondary mb-6">Perfect for side projects.</p>
<button className="w-full py-2 border border-white/20 rounded-md font-medium text-sm text-white hover:bg-white/5 transition-all mb-8">Start free</button>
<ul className="space-y-3 text-sm text-secondary">
<li className="flex gap-2"><span>✓</span> Generous free tier</li>
<li className="flex gap-2"><span>✓</span> 100 requests/hour</li>
<li className="flex gap-2"><span>✓</span> 24h historical data</li>
</ul>
</div>

<div className="border border-accent p-8 rounded-2xl bg-[#0F0F0F] relative transform md:-translate-y-4 shadow-[0_0_30px_rgba(34,197,94,0.1)]">
<div className="absolute top-0 right-0 bg-accent text-black text-[10px] font-bold px-2 py-1 rounded-bl-lg uppercase">Most Popular</div>
<h3 className="text-sm font-semibold text-accent mb-2">Pro</h3>
<div className="text-3xl font-bold text-white mb-6">$49<span className="text-sm font-normal text-secondary">/mo</span></div>
<p className="text-xs text-secondary mb-6">For scaling applications.</p>
<button className="w-full py-2 bg-accent text-black rounded-md font-medium text-sm hover:bg-white transition-all mb-8">Get API Key</button>
<ul className="space-y-3 text-sm text-white">
<li className="flex gap-2"><span className="text-accent">✓</span> Higher rate limits</li>
<li className="flex gap-2"><span className="text-accent">✓</span> Full historical history</li>
<li className="flex gap-2"><span className="text-accent">✓</span> Email support</li>
<li className="flex gap-2"><span className="text-accent">✓</span> Commercial license</li>
</ul>
</div>

<div className="border border-white/10 p-8 rounded-2xl bg-white/[0.01]">
<h3 className="text-sm font-semibold text-white mb-2">Business</h3>
<div className="text-3xl font-bold text-white mb-6">$199<span className="text-sm font-normal text-secondary">/mo</span></div>
<p className="text-xs text-secondary mb-6">High volume finance.</p>
<button className="w-full py-2 border border-white/20 rounded-md font-medium text-sm text-white hover:bg-white/5 transition-all mb-8">Talk to sales</button>
<ul className="space-y-3 text-sm text-secondary">
<li className="flex gap-2"><span>✓</span> Custom throughput</li>
<li className="flex gap-2"><span>✓</span> SLA &amp; Support</li>
<li className="flex gap-2"><span>✓</span> Dedicated caching</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 px-6">
<div className="max-w-3xl mx-auto">
<h2 className="text-2xl font-semibold text-white mb-12 tracking-tight">Frequently Asked Questions</h2>
<div className="space-y-4">
<details className="group bg-white/5 border border-white/5 rounded-lg open:bg-white/[0.08] transition-colors">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-4 text-sm text-white">
                            Where do rates come from?
                            <span className="transition group-open:rotate-180">
<span className="iconify" data-icon="lucide:chevron-down" data-width="16"></span>
</span>
</summary>
<div className="text-secondary text-sm px-4 pb-4 leading-relaxed">
                            We aggregate data from over 15 reliable commercial sources and central banks to provide a blended, highly accurate mid-market rate.
                        </div>
</details>
<details className="group bg-white/5 border border-white/5 rounded-lg open:bg-white/[0.08] transition-colors">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-4 text-sm text-white">
                            How often are rates updated?
                            <span className="transition group-open:rotate-180">
<span className="iconify" data-icon="lucide:chevron-down" data-width="16"></span>
</span>
</summary>
<div className="text-secondary text-sm px-4 pb-4 leading-relaxed">
                            Rates are updated every 60 seconds for standard pairs, and every 5 minutes for exotic currencies.
                        </div>
</details>
<details className="group bg-white/5 border border-white/5 rounded-lg open:bg-white/[0.08] transition-colors">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-4 text-sm text-white">
                            How do you handle precision?
                            <span className="transition group-open:rotate-180">
<span className="iconify" data-icon="lucide:chevron-down" data-width="16"></span>
</span>
</summary>
<div className="text-secondary text-sm px-4 pb-4 leading-relaxed">
                            We support up to 6 decimal places to ensure accuracy for large volume transactions, minimizing rounding errors.
                        </div>
</details>
<details className="group bg-white/5 border border-white/5 rounded-lg open:bg-white/[0.08] transition-colors">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-4 text-sm text-white">
                            Is there a status page?
                            <span className="transition group-open:rotate-180">
<span className="iconify" data-icon="lucide:chevron-down" data-width="16"></span>
</span>
</summary>
<div className="text-secondary text-sm px-4 pb-4 leading-relaxed">
                            Yes, all systems are monitored 24/7. You can subscribe to updates at status.raterush.com.
                        </div>
</details>
</div>
</div>
</section>

<section className="py-32 px-6 border-t border-white/5 relative overflow-hidden text-center">
<div className="absolute inset-0 bg-gradient-to-t from-accent/5 to-transparent pointer-events-none"></div>
<div className="max-w-2xl mx-auto relative z-10">
<h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-6">Ship multi-currency in a day.</h2>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<button className="h-12 px-8 rounded-lg bg-white text-black font-semibold text-sm hover:bg-gray-200 transition-colors">
                        Get API Key
                    </button>
<button className="h-12 px-8 rounded-lg border border-white/10 text-white font-medium text-sm hover:bg-white/5 transition-colors">
                        Read Docs
                    </button>
</div>
</div>
</section>

<footer className="py-12 px-6 border-t border-white/10 bg-[#020202] text-sm">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
<div>
<span className="font-sans font-semibold text-white block mb-2">RateRush</span>
<p className="text-gray-500 text-xs">© 2025 RateRush Inc.</p>
</div>
<div className="flex gap-8 text-secondary">
<a className="hover:text-white transition-colors" href="#">Docs</a>
<a className="hover:text-white transition-colors" href="#">Pricing</a>
<a className="hover:text-white transition-colors flex items-center gap-2" href="#">
                        Status
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Contact</a>
</div>
</div>
</footer>
</main>



    </>
  );
}
