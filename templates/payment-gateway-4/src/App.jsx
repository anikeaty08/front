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
      
(function() {
if (window.__auraPreviewPerformanceController) return;
const nativeRequestAnimationFrame = window.requestAnimationFrame
? window.requestAnimationFrame.bind(window)
: function(callback) { return window.setTimeout(function() { callback(Date.now()); }, 16); };
const nativeCancelAnimationFrame = window.cancelAnimationFrame
? window.cancelAnimationFrame.bind(window)
: window.clearTimeout.bind(window);
const nativeSetInterval = window.setInterval.bind(window);
let paused = false;
let nextFrameId = 1;
const frameRecords = new Map();
const pausedFrameCallbacks = new Map();
const style = document.createElement('style');
style.id = 'aura-preview-performance-style';
style.textContent = [
'html[data-aura-preview-paused="true"] *,',
'html[data-aura-preview-paused="true"] *::before,',
'html[data-aura-preview-paused="true"] *::after {',
'  animation-play-state: paused !important;',
'  transition-duration: 0s !important;',
'  scroll-behavior: auto !important;',
'}'
].join('\n');
document.head.appendChild(style);
window.requestAnimationFrame = function(callback) {
const frameId = nextFrameId++;
if (paused) {
pausedFrameCallbacks.set(frameId, callback);
frameRecords.set(frameId, { paused: true });
return frameId;
}
const nativeFrameId = nativeRequestAnimationFrame(function(timestamp) {
frameRecords.delete(frameId);
callback(timestamp);
});
frameRecords.set(frameId, { nativeFrameId: nativeFrameId });
return frameId;
};
window.cancelAnimationFrame = function(frameId) {
const record = frameRecords.get(frameId);
pausedFrameCallbacks.delete(frameId);
if (record && typeof record.nativeFrameId !== 'undefined') {
nativeCancelAnimationFrame(record.nativeFrameId);
}
frameRecords.delete(frameId);
};
window.setInterval = function(callback, delay) {
const args = Array.prototype.slice.call(arguments, 2);
return nativeSetInterval(function() {
if (paused) return;
callback.apply(this, args);
}, delay);
};
const flushPausedFrames = function() {
const callbacks = Array.from(pausedFrameCallbacks.entries());
pausedFrameCallbacks.clear();
callbacks.forEach(function(entry) {
const frameId = entry[0];
const callback = entry[1];
const nativeFrameId = nativeRequestAnimationFrame(function(timestamp) {
frameRecords.delete(frameId);
callback(timestamp);
});
frameRecords.set(frameId, { nativeFrameId: nativeFrameId });
});
};
const setPaused = function(nextPaused) {
const shouldPause = Boolean(nextPaused);
if (paused === shouldPause) return;
paused = shouldPause;
document.documentElement.toggleAttribute('data-aura-preview-paused', paused);
if (!paused) {
flushPausedFrames();
}
};
window.__auraPreviewPerformanceController = {
setPaused: setPaused,
get paused() {
return paused;
}
};
window.addEventListener('message', function(event) {
if (event.source !== window.parent) return;
if (!event.data || event.data.type !== 'aura-preview-performance-mode') return;
setPaused(event.data.paused);
});
})();



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        let simulationIntervals = [];
        let revenue = 1402840.00;
        let actions = 8432;

        function handleRealCheckout(e) {
            e.preventDefault();
            const btn = document.getElementById('checkout-btn');
            const icon = document.getElementById('deploy-icon');
            const text = document.getElementById('deploy-text');
            
            icon.setAttribute('icon', 'solar:spinner-linear');
            icon.classList.add('animate-spin');
            text.innerText = 'Initializing Secure Gateway...';
            btn.classList.add('opacity-70', 'cursor-not-allowed');
            btn.disabled = true;

            // INTEGRATION: Replace this timeout with your actual fetch/axios call to create a Stripe Checkout Session
            // fetch('/api/create-checkout', { method: 'POST' }).then(res => res.json()).then(data => window.location.href = data.url);
            
            setTimeout(() => {
                transitionToApp(); 
                setTimeout(() => {
                    icon.setAttribute('icon', 'solar:lock-keyhole-minimalistic-linear');
                    icon.classList.remove('animate-spin');
                    text.innerText = 'Secure Checkout via Gateway';
                    btn.classList.remove('opacity-70', 'cursor-not-allowed');
                    btn.disabled = false;
                }, 1000);
            }, 1800);
        }

        function transitionToApp() {
            const publicView = document.getElementById('public-view');
            const appView = document.getElementById('app-view');
            
            publicView.classList.replace('opacity-100', 'opacity-0');
            publicView.classList.replace('translate-y-0', 'translate-y-4');
            publicView.classList.replace('pointer-events-auto', 'pointer-events-none');
            
            setTimeout(() => {
                publicView.classList.add('hidden');
                
                appView.classList.remove('hidden');
                void appView.offsetWidth; // Force reflow
                
                appView.classList.replace('opacity-0', 'opacity-100');
                appView.classList.replace('translate-y-4', 'translate-y-0');
                appView.classList.replace('pointer-events-none', 'pointer-events-auto');
                
                startSimulation();
            }, 500);
        }

        function logout() {
            const publicView = document.getElementById('public-view');
            const appView = document.getElementById('app-view');
            
            appView.classList.replace('opacity-100', 'opacity-0');
            appView.classList.replace('translate-y-0', 'translate-y-4');
            appView.classList.replace('pointer-events-auto', 'pointer-events-none');
            
            stopSimulation();

            setTimeout(() => {
                appView.classList.add('hidden');
                
                publicView.classList.remove('hidden');
                void publicView.offsetWidth; // Force reflow
                
                publicView.classList.replace('opacity-0', 'opacity-100');
                publicView.classList.replace('translate-y-4', 'translate-y-0');
                publicView.classList.replace('pointer-events-none', 'pointer-events-auto');
                
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }, 500);
        }

        function generatePaymentLink() {
            const productInput = document.getElementById('link-product');
            const priceInput = document.getElementById('link-price');
            
            const product = productInput.value.trim() || 'Custom Allocation';
            const priceVal = parseFloat(priceInput.value);
            
            if (isNaN(priceVal) || priceVal <= 0) {
                priceInput.classList.add('border-red-500/50', 'bg-red-500/10');
                setTimeout(() => {
                    priceInput.classList.remove('border-red-500/50', 'bg-red-500/10');
                }, 1500);
                return;
            }

            const formattedPrice = priceVal.toFixed(2);
            
            // INTEGRATION: Call backend to create a real Stripe Price and Payment Link here
            const hash = Math.random().toString(36).substring(2, 12);
            const url = `https://pay.gateway.net/live_${hash}`;
            
            const urlInput = document.getElementById('generated-url');
            urlInput.value = url;
            
            const container = document.getElementById('generated-link-container');
            container.classList.remove('hidden');
            void container.offsetWidth; // Force reflow
            
            container.classList.replace('opacity-0', 'opacity-100');
            container.classList.replace('translate-y-2', 'translate-y-0');
            container.classList.replace('pointer-events-none', 'pointer-events-auto');
            
            appendToTerminal(`<span class="text-blue-400/90">> API [201]: Provisioned secure payment endpoint for '${product}' ($${formattedPrice}).</span>`);
            
            productInput.value = '';
            priceInput.value = '';
        }

        async function copyLink(event) {
            const urlInput = document.getElementById('generated-url');
            const btn = event.currentTarget;
            const icon = btn.querySelector('iconify-icon');
            
            try {
                await navigator.clipboard.writeText(urlInput.value);
                icon.setAttribute('icon', 'solar:check-circle-linear');
                icon.classList.add('text-emerald-400');
                
                setTimeout(() => {
                    icon.setAttribute('icon', 'solar:copy-linear');
                    icon.classList.remove('text-emerald-400');
                }, 2000);
            } catch (err) {
                console.error('Clipboard copy failed:', err);
            }
        }

        function appendToTerminal(htmlContent) {
            const terminal = document.getElementById('terminal-output');
            const time = new Date().toLocaleTimeString([], { hour12: false });
            
            const div = document.createElement('div');
            div.className = 'opacity-0 transition-opacity duration-500 transform translate-y-1';
            div.innerHTML = `<span class="text-neutral-600">[${time}]</span> ${htmlContent}`;
            
            terminal.appendChild(div);
            
            // Keep DOM light
            while (terminal.childElementCount > 40) {
                terminal.firstElementChild.remove();
            }
            
            requestAnimationFrame(() => {
                div.classList.remove('opacity-0', 'translate-y-1');
                terminal.scrollTo({ top: terminal.scrollHeight, behavior: 'smooth' });
            });
        }

        function startSimulation() {
            stopSimulation();
            
            const logMessages = [
                "<span class='text-neutral-300'>[PROCESSOR] PaymentIntent #pi_3Mtw... succeeded. Settled: $1,250.00.</span>",
                "<span class='text-neutral-300'>[WEBHOOK] Received checkout.session.completed payload.</span>",
                "<span class='text-neutral-300'>[API] Generated dynamic checkout session. Latency: 42ms.</span>",
                "<span class='text-neutral-300'>[SYSTEM] Inventory lock placed for Order #9912.</span>",
                "<span class='text-emerald-400/90'>[ROUTING] Daily payout of $42,500.00 initiated to destination bank.</span>",
                "<span class='text-neutral-300'>[SECURITY] Risk analysis complete for #trx_891. Confidence: 99.8%.</span>",
                "<span class='text-neutral-300'>[API] Webhook delivery acknowledged. Status 200 OK.</span>"
            ];

            const termInterval = setInterval(() => {
                const msg = logMessages[Math.floor(Math.random() * logMessages.length)];
                appendToTerminal(msg);
                
                actions++;
                document.getElementById('ai-actions').innerText = actions.toLocaleString();
            }, 3500);

            const revInterval = setInterval(() => {
                const add = Math.random() * 250;
                revenue += add;
                document.getElementById('live-revenue').innerText = '$' + revenue.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2});
            }, 2000);

            simulationIntervals.push(termInterval, revInterval);
        }

        function stopSimulation() {
            simulationIntervals.forEach(clearInterval);
            simulationIntervals = [];
        }

        function toggleProtocol(element, protocolName) {
            const status = element.checked ? 'ENABLED' : 'DISABLED';
            const color = element.checked ? 'text-emerald-400' : 'text-neutral-500';
            appendToTerminal(`<span class="${color}">> OVERRIDE: Routing Rule '${protocolName}' status changed to ${status}.</span>`);
            
            // INTEGRATION: Add API call here to update settings in your database
            // fetch('/api/settings', { method: 'POST', body: JSON.stringify({ [protocolName]: element.checked }) });
        }

        function attemptWithdraw() {
            alert(`Notice: NEXUS is a frontend UI mockup.\n\nThe funds displayed ($${revenue.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}) are simulated via JavaScript and are not real money. This design template must be connected to a real backend to process actual funds.`);
            appendToTerminal("<span class='text-red-400'>> WITHDRAWAL REJECTED: Mockup environment detected. Simulated funds cannot be transferred.</span>");
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
      

<div className="absolute w-[800px] h-[800px] -top-[400px] left-1/2 -translate-x-1/2 pointer-events-none z-0" style={{background: 'radial-gradient(circle, rgba(255,255,255,0.03) 0%, rgba(0,0,0,0) 70%)'}}></div>

<div className="flex flex-col flex-grow w-full absolute inset-0 min-h-screen transition-all duration-500 ease-in-out opacity-100 translate-y-0 pointer-events-auto" id="public-view">

<header className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur-xl border-b border-white/[0.04] transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-8">
<span className="tracking-tight font-medium text-base text-white">NEXUS</span>
<nav className="hidden md:flex gap-6">
<a className="text-xs text-neutral-500 hover:text-white transition-colors" href="#architecture">Architecture</a>
<a className="text-xs text-neutral-500 hover:text-white transition-colors" href="#checkout">Commerce</a>
</nav>
</div>
<div className="flex items-center gap-4">
<button className="text-xs text-neutral-500 hover:text-white transition-colors flex items-center gap-2 group" onclick="transitionToApp()">
<iconify-icon className="group-hover:scale-110 transition-transform" icon="solar:user-linear" strokeWidth="1.5" width="16"></iconify-icon>
<span className="hidden sm:inline">Dashboard</span>
</button>

<a className="bg-white text-black px-4 py-1.5 rounded-full text-xs font-medium hover:bg-neutral-200 active:scale-95 transition-all flex items-center gap-2" href="#checkout">
                        Initialize
                        <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="14"></iconify-icon>
</a>
</div>
</div>
</header>
<main className="flex-grow pt-32 pb-24 z-10 overflow-y-auto">

<section className="max-w-4xl mx-auto px-6 text-center mb-32 relative">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/5 bg-white/[0.02] text-xs text-neutral-400 mb-8 shadow-sm backdrop-blur-sm">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)] animate-pulse"></span>
                    Gateway Online &amp; Routing
                </div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight mb-6 leading-tight bg-gradient-to-b from-white via-white to-neutral-500 text-transparent bg-clip-text">
                    The Apex Infrastructure.
                </h1>
<p className="text-sm md:text-base text-neutral-500 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                    Orchestrating global commerce, autonomous routing, and high-velocity checkout links. Engineered to process real transactions without friction.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto bg-white text-black px-6 py-2.5 rounded-full text-sm font-medium hover:bg-neutral-200 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] active:scale-95 transition-all" href="#checkout">
                        Acquire Architecture
                    </a>
<button className="w-full sm:w-auto bg-transparent border border-white/10 px-6 py-2.5 rounded-full text-sm text-neutral-300 hover:text-white hover:bg-white/5 active:scale-95 transition-all" onclick="transitionToApp()">
                        Open Gateway Dashboard
                    </button>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mb-32 scroll-mt-24" id="architecture">
<div className="mb-12 text-center md:text-left">
<h2 className="text-2xl font-medium tracking-tight mb-2">Ecosystem Architecture</h2>
<p className="text-sm text-neutral-500 font-light">The trifecta powering unprecedented scale.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="bg-gradient-to-b from-white/[0.03] to-transparent border border-white/[0.04] p-8 rounded-2xl flex flex-col h-full group hover:border-white/10 transition-colors">
<div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center mb-6 bg-black/50 group-hover:bg-white/5 group-hover:scale-105 transition-all">
<iconify-icon className="text-neutral-300 group-hover:text-white transition-colors" icon="solar:link-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-base font-medium tracking-tight mb-3 text-white">Instant Payment Links</h3>
<p className="text-sm text-neutral-500 flex-grow font-light leading-relaxed">
                            Generate direct checkout URLs instantly via the gateway. No cart friction, just direct-to-payment conversion optimized for scale.
                        </p>
</div>
<div className="bg-gradient-to-b from-white/[0.03] to-transparent border border-white/[0.04] p-8 rounded-2xl flex flex-col h-full group hover:border-white/10 transition-colors relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-3xl -mr-10 -mt-10 transition-opacity group-hover:bg-indigo-500/10"></div>
<div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center mb-6 bg-black/50 group-hover:bg-white/5 group-hover:scale-105 transition-all relative z-10">
<iconify-icon className="text-neutral-300 group-hover:text-white transition-colors" icon="solar:card-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-base font-medium tracking-tight mb-3 relative z-10 text-white">Enterprise Routing</h3>
<p className="text-sm text-neutral-500 flex-grow font-light leading-relaxed relative z-10">
                            Real data, real money. Seamlessly interface with external processors to handle dynamic taxation, global currencies, and instantaneous webhooks.
                        </p>
</div>
<div className="bg-gradient-to-b from-white/[0.03] to-transparent border border-white/[0.04] p-8 rounded-2xl flex flex-col h-full group hover:border-white/10 transition-colors">
<div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center mb-6 bg-black/50 group-hover:bg-white/5 group-hover:scale-105 transition-all">
<iconify-icon className="text-neutral-300 group-hover:text-white transition-colors" icon="solar:layers-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-base font-medium tracking-tight mb-3 text-white flex items-center gap-2">
                            aura.build
                            <span className="px-1.5 py-0.5 rounded bg-white/10 text-[10px] text-neutral-400 font-mono uppercase tracking-wider">Not Meng</span>
</h3>
<p className="text-sm text-neutral-500 flex-grow font-light leading-relaxed">
                            The bedrock infrastructure backing the gateway, officially created by you (Meng did not create this). Unbreakable edge-hosting guarantees uptime even during extreme multi-million dollar drops.
                        </p>
</div>
</div>
</section>

<section className="max-w-3xl mx-auto px-6 mb-12 scroll-mt-24" id="checkout">
<div className="text-center mb-10">
<h2 className="text-2xl font-medium tracking-tight mb-2">Secure Deployment</h2>
<p className="text-sm text-neutral-500 font-light">Live payment routing via integrated enterprise gateway.</p>
</div>
<div className="bg-gradient-to-b from-white/[0.02] to-transparent border border-white/[0.06] rounded-2xl p-8 max-w-xl mx-auto text-center relative overflow-hidden backdrop-blur-sm">
<div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center mx-auto mb-6 bg-black/80 shadow-lg relative z-10">
<iconify-icon className="text-white" icon="solar:shield-check-linear" strokeWidth="1.5" width="22"></iconify-icon>
</div>

<form className="relative z-10" onsubmit="handleRealCheckout(event)">
<div className="bg-black/40 border border-white/[0.08] rounded-xl p-5 mb-8 text-left backdrop-blur-md">
<div className="flex justify-between items-center mb-4 pb-4 border-b border-white/5">
<span className="text-sm text-neutral-400">Omni-System Master Bundle</span>
<span className="text-sm text-white font-medium">$250,000.00</span>
</div>
<div className="flex justify-between items-center">
<span className="text-sm font-medium text-white">Total Due</span>
<span className="text-xl font-medium tracking-tight text-white"><span className="text-xs text-neutral-500 mr-1 font-mono">USD</span>$250,000.00</span>
</div>
</div>
<button className="w-full bg-white text-black px-6 py-3.5 rounded-xl text-sm font-medium hover:bg-neutral-100 active:scale-[0.98] transition-all flex justify-center items-center gap-2 group" id="checkout-btn" type="submit">
<iconify-icon className="text-black" icon="solar:lock-keyhole-minimalistic-linear" id="deploy-icon" strokeWidth="1.5" width="16"></iconify-icon>
<span id="deploy-text">Secure Checkout via Gateway</span>
</button>
</form>
<p className="text-xs text-neutral-500 mt-5 flex justify-center items-center gap-1.5 relative z-10">
<iconify-icon icon="solar:info-circle-linear" strokeWidth="1.5" width="14"></iconify-icon>
                        End-to-end encrypted. You will be redirected to complete payment.
                    </p>
</div>
</section>
<footer className="py-8 mt-16 text-center">
<div className="flex items-center justify-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
<span className="tracking-tight font-medium text-xs text-white">NEXUS</span>
<span className="text-xs text-neutral-500">© 2024 Omni-System Corp.</span>
</div>
</footer>
</main>
</div>

<div className="flex flex-col h-screen w-full absolute inset-0 bg-[#020202] z-50 transition-all duration-500 ease-out opacity-0 translate-y-4 pointer-events-none hidden" id="app-view">

<header className="w-full border-b border-white/[0.04] bg-[#020202]/80 backdrop-blur-md flex-shrink-0 z-20">
<div className="px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-4 sm:gap-6">
<span className="tracking-tight font-medium text-sm text-white flex items-center gap-2">
                        NEXUS <span className="text-neutral-600 font-light hidden sm:inline">/ Dashboard</span>
</span>
<div className="h-4 w-[1px] bg-white/10"></div>

<div className="flex items-center gap-2 text-xs text-neutral-400 bg-white/[0.03] px-2.5 py-1 rounded border border-white/5">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.4)]"></span>
<span className="hidden sm:inline">Gateway API: </span>Connected
                    </div>
</div>
<button className="text-xs text-neutral-500 hover:text-white transition-colors flex items-center gap-1.5" onclick="logout()">
                    Disconnect
                    <iconify-icon icon="solar:logout-linear" strokeWidth="1.5" width="14"></iconify-icon>
</button>
</div>
</header>

<div className="flex-grow flex overflow-hidden">

<aside className="w-64 border-r border-white/[0.04] bg-[#020202] hidden lg:flex flex-col p-4 space-y-1 flex-shrink-0 z-10">
<a className="flex items-center gap-3 px-3 py-2 rounded-lg bg-white/[0.04] text-xs text-white transition-all" href="#">
<iconify-icon icon="solar:link-circle-linear" strokeWidth="1.5" width="16"></iconify-icon>
                    Payment Gateway
                </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-xs text-neutral-500 hover:bg-white/[0.02] hover:text-neutral-300 transition-all" href="#">
<iconify-icon icon="solar:cpu-linear" strokeWidth="1.5" width="16"></iconify-icon>
                    Autonomous Routing
                </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-xs text-neutral-500 hover:bg-white/[0.02] hover:text-neutral-300 transition-all" href="#">
<iconify-icon icon="solar:chart-linear" strokeWidth="1.5" width="16"></iconify-icon>
                    Real-Time Logs
                </a>
</aside>

<main className="flex-grow p-4 sm:p-6 overflow-y-auto relative z-0">
<div className="max-w-6xl mx-auto space-y-6 pb-12">


<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="border border-white/5 rounded-xl p-5 bg-white/[0.01] hover:bg-white/[0.02] transition-colors relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
<p className="text-xs text-neutral-500 mb-1 font-light">Gross Volume (USD)</p>
<p className="text-2xl tracking-tight text-white font-medium font-mono" id="live-revenue">$1,402,840.00</p>
<div className="mt-2 flex items-center justify-between">
<p className="text-xs text-emerald-400 flex items-center gap-1">
<iconify-icon icon="solar:arrow-up-linear" strokeWidth="1.5" width="12"></iconify-icon>
                                    +12.4% vs yesterday
                                </p>
<button className="px-2 py-1 bg-white/5 hover:bg-white/10 border border-white/10 rounded text-xs text-white transition-all active:scale-95 z-10 relative" onclick="attemptWithdraw()">Withdraw</button>
</div>
</div>
<div className="border border-white/5 rounded-xl p-5 bg-white/[0.01] hover:bg-white/[0.02] transition-colors relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
<p className="text-xs text-neutral-500 mb-1 font-light">Active Checkouts</p>
<p className="text-2xl tracking-tight text-white font-medium">342</p>
<p className="text-xs text-neutral-500 mt-2 font-light">Live sessions in progress</p>
</div>
<div className="border border-white/5 rounded-xl p-5 bg-white/[0.01] hover:bg-white/[0.02] transition-colors relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
<p className="text-xs text-neutral-500 mb-1 font-light">Processed Transactions</p>
<p className="text-2xl tracking-tight text-white font-medium" id="ai-actions">8,432</p>
<p className="text-xs text-neutral-500 mt-2 font-light">Zero chargebacks today</p>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 border border-white/5 rounded-xl bg-[#050505] flex flex-col h-[400px] lg:h-[540px] relative overflow-hidden shadow-2xl">
<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none opacity-20"></div>
<div className="border-b border-white/5 px-4 py-3 flex items-center justify-between bg-white/[0.01] relative z-10 backdrop-blur-sm">
<h3 className="text-xs font-medium text-neutral-300 flex items-center gap-2">
<iconify-icon icon="solar:code-circle-linear" strokeWidth="1.5" width="14"></iconify-icon>
                                    Live Gateway Terminal
                                </h3>
<span className="text-xs text-neutral-600 font-mono tracking-widest">GATEWAY v2.0</span>
</div>

<div className="flex-grow p-5 text-xs text-neutral-400 overflow-y-auto space-y-3 relative z-10 scroll-smooth [&amp;::-webkit-scrollbar]:w-1 [&amp;::-webkit-scrollbar-thumb]:bg-white/10 [&amp;::-webkit-scrollbar-track]:bg-transparent font-mono" id="terminal-output">
<div className="text-neutral-500 opacity-70">&gt; Establishing secure connection to processor...</div>
<div className="text-emerald-400/80">&gt; Webhook listeners online. Routing systems initialized.</div>
</div>
</div>

<div className="flex flex-col gap-6 h-auto lg:h-[540px]">

<div className="border border-white/5 rounded-xl bg-[#050505] flex flex-col flex-shrink-0 shadow-xl relative overflow-hidden">
<div className="border-b border-white/5 px-4 py-3 flex items-center justify-between bg-white/[0.01]">
<h3 className="text-xs font-medium text-neutral-300 flex items-center gap-2">
<iconify-icon icon="solar:link-circle-linear" strokeWidth="1.5" width="14"></iconify-icon>
                                        Deploy Checkout Link
                                    </h3>
<span className="text-xs text-emerald-500 flex items-center gap-1.5 font-medium">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></span> Live
                                    </span>
</div>
<div className="p-4 space-y-4">
<div className="grid grid-cols-2 gap-3">

<input className="w-full bg-black/50 border border-white/10 rounded-lg px-3 py-2 text-xs text-white placeholder:text-neutral-600 transition-all duration-200 focus:outline-none focus:border-white/20 focus:ring-1 focus:ring-white/20" id="link-product" placeholder="Item Name" type="text"/>
<input className="w-full bg-black/50 border border-white/10 rounded-lg px-3 py-2 text-xs text-white placeholder:text-neutral-600 transition-all duration-200 focus:outline-none focus:border-white/20 focus:ring-1 focus:ring-white/20 [appearance:textfield] [&amp;::-webkit-outer-spin-button]:appearance-none [&amp;::-webkit-inner-spin-button]:appearance-none" id="link-price" min="0" placeholder="Price (USD)" step="0.01" type="number"/>
</div>
<button className="w-full bg-white text-black px-4 py-2.5 rounded-lg text-xs font-medium hover:bg-neutral-200 active:scale-95 transition-all flex justify-center items-center gap-2" onclick="generatePaymentLink()">
<iconify-icon icon="solar:add-circle-linear" strokeWidth="1.5" width="14"></iconify-icon>
                                        Create Live URL
                                    </button>
<div className="hidden pt-2 transition-all duration-300 ease-out opacity-0 translate-y-2 pointer-events-none" id="generated-link-container">
<p className="text-xs text-neutral-500 mb-1.5 uppercase tracking-wider font-medium">Generated Endpoint</p>
<div className="flex items-center gap-2 p-1 bg-black border border-white/10 rounded-lg group hover:border-white/20 transition-colors">
<input className="w-full bg-transparent border-none text-xs text-neutral-300 focus:outline-none truncate px-2 cursor-text font-mono" id="generated-url" readonly="" type="text" value=""/>
<button className="text-neutral-500 hover:text-white flex-shrink-0 p-1.5 bg-white/5 rounded-md hover:bg-white/10 transition-colors flex items-center justify-center active:scale-95" onclick="copyLink(event)" title="Copy to clipboard">
<iconify-icon icon="solar:copy-linear" strokeWidth="1.5" width="14"></iconify-icon>
</button>
</div>
</div>
</div>
</div>

<div className="border border-white/5 rounded-xl bg-[#050505] flex flex-col flex-grow overflow-hidden shadow-xl">
<div className="border-b border-white/5 px-4 py-3 bg-white/[0.01]">
<h3 className="text-xs font-medium text-neutral-300 flex items-center gap-2">
<iconify-icon icon="solar:settings-linear" strokeWidth="1.5" width="14"></iconify-icon>
                                        Routing Parameters
                                    </h3>
</div>
<div className="p-4 space-y-6 overflow-y-auto">

<div className="flex items-center justify-between group">
<div>
<p className="text-xs text-white font-medium">Auto-Capture Funds</p>
<p className="text-xs text-neutral-500 mt-0.5 font-light">Settle payments instantly</p>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" onchange="toggleProtocol(this, 'Auto-Capture')" type="checkbox"/>
<div className="w-8 h-4 bg-white/10 rounded-full peer peer-focus:ring-2 peer-focus:ring-white/20 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-white transition-colors duration-300"></div>
</label>
</div>
<div className="flex items-center justify-between group">
<div>
<p className="text-xs text-white font-medium">Dynamic Taxation</p>
<p className="text-xs text-neutral-500 mt-0.5 font-light">Calculate global VAT automatically</p>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" onchange="toggleProtocol(this, 'Taxation')" type="checkbox"/>
<div className="w-8 h-4 bg-white/10 rounded-full peer peer-focus:ring-2 peer-focus:ring-white/20 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-white transition-colors duration-300"></div>
</label>
</div>
</div>
</div>
</div>
</div>
</div>
</main>
</div>
</div>


    </>
  );
}
