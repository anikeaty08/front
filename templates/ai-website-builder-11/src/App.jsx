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
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
},
colors: {
stripe: "#635BFF",
linear: "#5E6AD2"
},
animation: {
'fadeUp': 'fadeUp 0.3s ease-out forwards',
}
}
}
}



(function() {
const params = new URLSearchParams(window.location.search);
const route = params.get('route');
// 1. MOCK SERVER ROUTE: GET /billing/checkout
if (route === 'billing_checkout') {
// Wipe DOM immediately to simulate a server response (avoiding flash of main app)
document.documentElement.innerHTML = '';
const plan = params.get('plan');
const interval = params.get('interval');
// 2. SERVER-SIDE VALIDATION & LOGIC
if (!['essential', 'professional', 'studio'].includes(plan) || !['monthly', 'yearly'].includes(interval)) {
document.write(`Error: Invalid Parameters. Plan: ${plan}, Interval: ${interval}`);
window.stop();
return;
}
// 3. RENDER "CONNECTING TO STRIPE" INTERSTITIAL
// This mimics the split-second server processing time before redirecting to Stripe
document.write(`
<!DOCTYPE html>
<html>
<head><title>Redirecting...</title></head>
                    <body style="margin:0; height:100vh; display:flex; flex-direction:column; align-items:center; justify-content:center; font-family:sans-serif; background:#fff; color:#18181b;">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#635BFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="animation:spin 1s linear infinite; margin-bottom:16px;">
                            <path d="M21 12a9 9 0 1 1-6.219-8.56"></path>
                            <style>@keyframes spin { 100% { transform: rotate(360deg); } }</style>
                        </svg>
                        <h1 style="font-size:16px; font-weight:600; margin-bottom:8px;">Redirecting to safe payment...</h1>
                        <p style="font-size:13px; color:#71717a;">Please wait while we connect to Stripe.</p>
                        
                        <div style="margin-top:20px; font-family:monospace; font-size:11px; background:#f4f4f5; padding:10px; border-radius:6px; color:#52525b;">
                            SESSION: sub_mock_${Date.now()}<br>
                            PLAN: ${plan.toUpperCase()}<br>
                            INTERVAL: ${interval.toUpperCase()}
                        </div>
                    </body>
                    </html>
                `);

                // 4. SIMULATE 302 REDIRECT TO STRIPE CHECKOUT
                setTimeout(() => {
                    // In production: res.redirect(session.url)
                    // Here: We simulate the user completing payment on Stripe and returning
                    const successUrl = window.location.origin + window.location.pathname + '?session_id=cs_test_success_12345';
                    window.location.replace(successUrl);
                }, 2000);

                window.stop(); // Stop main page from loading
            }
        })();
    


        // CLIENT-SIDE LOGIC
        const Billing = {
            currentCycle: 'monthly',
            
            prices: {
                essential: { monthly: 50, yearly: 480 },
                professional: { monthly: 100, yearly: 960 },
                studio: { monthly: 150, yearly: 1440 }
            },

            openPortal: () => document.getElementById('billing-modal').classList.remove('hidden'),
            closePortal: () => document.getElementById('billing-modal').classList.add('hidden'),

            // The setCycle function now only updates the HREF attributes of the <a> tags.
            // This ensures we rely on standard HTML navigation for maximum reliability.
            setCycle: (cycle) => {
                Billing.currentCycle = cycle;
                
                // 1. Visual Toggle Updates
                const btnM = document.getElementById('btn-monthly');
                const btnY = document.getElementById('btn-yearly');
                
                if (cycle === 'monthly') {
                    btnM.classList.replace('toggle-inactive', 'toggle-active');
                    btnY.classList.replace('toggle-active', 'toggle-inactive');
                } else {
                    btnM.classList.replace('toggle-active', 'toggle-inactive');
                    btnY.classList.replace('toggle-inactive', 'toggle-active');
                }

                // 2. Price Text Updates
                ['essential', 'professional', 'studio'].forEach(plan => {
                    document.getElementById(`price-${plan}`).innerText = `€${Billing.prices[plan][cycle]}`;
                    document.getElementById(`period-${plan}`).innerText = cycle === 'monthly' ? '/mo' : '/yr';
                });

                // 3. CRITICAL: Update HREFs for reliable new-tab navigation
                // These point to the "Server Route" simulation at the top of the file
                const getUrl = (plan) => `?route=billing_checkout&plan=${plan}&interval=${cycle}`;
                
                document.getElementById('link-essential').href = getUrl('essential');
                document.getElementById('link-professional').href = getUrl('professional');
                document.getElementById('link-studio').href = getUrl('studio');
            },

            // Mock Implementation of Self Test
            runSelfTest: () => {
                console.log("[Billing] Running self-test...");
                console.log("[Billing] API: OK");
                console.log("[Billing] Webhook Secret: Configured");
                console.log("[Billing] Price IDs: Validated");
                return true;
            }
        };

        const App = {
            attemptGeneration: () => {
                const prompt = document.getElementById('prompt-input').value;
                if(prompt.length < 2) return alert("Please describe your website first.");

                document.getElementById('view-dashboard').classList.add('hidden');
                document.getElementById('view-construction').classList.remove('hidden');
                document.getElementById('view-construction').classList.add('flex');
                
                setTimeout(() => {
                    document.getElementById('view-construction').classList.add('hidden');
                    document.getElementById('view-construction').classList.remove('flex');
                    document.getElementById('view-editor').classList.remove('hidden');
                    document.getElementById('view-editor').classList.add('flex');
                    document.getElementById('generated-site-container').innerHTML = `<div class="p-10 flex items-center justify-center h-full text-zinc-400">Site Preview Area</div>`;
                    App.showToast("Ready", "Site generated successfully");
                }, 2000);
            },
            showToast: (title, desc) => {
                const toast = document.getElementById('toast');
                document.getElementById('toast-title').innerText = title;
                document.getElementById('toast-desc').innerText = desc;
                toast.classList.remove('translate-y-20', 'opacity-0');
                setTimeout(() => toast.classList.add('translate-y-20', 'opacity-0'), 3000);
            }
        };

        // Initialize and Check for Success Return
        window.addEventListener('load', () => {
             Billing.runSelfTest();

             const urlParams = new URLSearchParams(window.location.search);
             // Logic to handle return from Stripe (Success)
             if (urlParams.get('session_id')) {
                 document.getElementById('header-plan-badge').innerHTML = `<span class="w-1.5 h-1.5 rounded-full bg-[#635BFF]"></span> PRO`;
                 document.getElementById('header-plan-name').innerText = "PRO";
                 document.getElementById('billing-plan-name').innerText = "Professional Plan";
                 document.getElementById('billing-status-dot').classList.replace('bg-zinc-300', 'bg-emerald-500');
                 document.getElementById('billing-status-text').innerText = "Active";
                 document.getElementById('billing-status-text').classList.add('text-emerald-600');
                 
                 App.showToast("Payment Successful", "Subscription activated");
                 
                 // Clean URL to prevent re-triggering on refresh
                 window.history.replaceState({}, document.title, window.location.pathname);
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
      

<header className="h-14 border-b border-zinc-200 bg-white px-6 flex items-center justify-between shrink-0 z-30 relative">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-zinc-900 rounded-lg flex items-center justify-center text-white cursor-pointer" onclick="location.reload()">
<span className="iconify" data-icon="lucide:box" data-width="18"></span>
</div>
<span className="font-medium tracking-tight text-sm">DraftDock <span className="text-zinc-400 font-normal">Universal</span></span>

<button className="px-2.5 py-0.5 bg-zinc-100 border border-zinc-200 rounded-full text-[10px] font-medium text-zinc-500 uppercase tracking-wide hover:bg-zinc-200 transition cursor-pointer flex items-center gap-1.5" id="header-plan-badge" onclick="Billing.openPortal()">
<span className="w-1.5 h-1.5 rounded-full bg-zinc-400" id="header-status-dot"></span>
<span id="header-plan-name">Free Tier</span>
</button>
</div>
<div className="flex items-center gap-4">
<div className="flex items-center gap-2 text-xs font-medium text-zinc-500" id="system-status">
<span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                Engine Ready
            </div>
<button className="group flex items-center gap-2 px-3 py-1.5 rounded-md bg-white border border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50 transition text-xs font-medium text-zinc-600" onclick="Billing.openPortal()">
<span className="iconify group-hover:text-[#635BFF] transition-colors" data-icon="lucide:credit-card" data-width="14"></span>
                Billing
            </button>
<div className="w-8 h-8 rounded-full bg-zinc-900 text-white flex items-center justify-center text-xs font-medium cursor-default">
                JD
            </div>
</div>
</header>

<section className="flex-1 flex flex-col relative z-10 transition-opacity duration-300" id="view-dashboard">
<main className="flex-1 flex flex-col items-center justify-center p-6 relative overflow-hidden">
<div className="absolute inset-0 canvas-area opacity-50 pointer-events-none"></div>
<div className="w-full max-w-2xl relative z-10">
<h1 className="text-4xl md:text-5xl font-medium tracking-tight text-center mb-4 text-zinc-900">
                    What are we building?
                </h1>
<p className="text-center text-zinc-500 mb-10 text-lg font-light">
                    Describe your vision. The Engine constructs it exactly as specified.
                </p>
<div className="bg-white rounded-2xl shadow-xl border border-zinc-200 overflow-hidden group focus-within:ring-2 focus-within:ring-zinc-900/10 transition-all duration-300">
<div className="p-4">
<textarea className="w-full min-h-[120px] resize-none border-none outline-none text-lg text-zinc-800 placeholder:text-zinc-300 font-light leading-relaxed" id="prompt-input" placeholder="e.g. 'A minimal portfolio for a photographer'"></textarea>
</div>
<div className="bg-zinc-50 px-4 py-3 border-t border-zinc-100 flex items-center justify-between">
<div className="flex gap-2">
<button className="p-2 hover:bg-zinc-200 rounded-lg text-zinc-400 transition" title="Add Reference Image"><span className="iconify" data-icon="lucide:image-plus" data-width="18"></span></button>
</div>
<button className="bg-zinc-900 hover:bg-zinc-800 text-white px-5 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-transform hover:translate-y-[-1px] shadow-lg shadow-zinc-900/10" onclick="App.attemptGeneration()">
                            Construct
                            <span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</button>
</div>
</div>
<div className="mt-8 flex justify-center gap-4 text-xs text-zinc-400">
<span>Zero-Loss Intent Parsing</span>
<span>•</span>
<span className="flex items-center gap-1"><span className="iconify" data-icon="lucide:shield-check" data-width="12"></span> Stripe Secure</span>
</div>
</div>
</main>
</section>

<section className="hidden fixed inset-0 z-50 bg-zinc-950 text-zinc-400 font-mono text-sm flex flex-col items-center justify-center" id="view-construction">
<div className="w-full max-w-3xl border border-zinc-800 rounded-xl bg-zinc-900/50 overflow-hidden shadow-2xl">
<div className="p-6 h-[400px] flex items-center justify-center" id="terminal-output">Constructing...</div>
</div>
</section>

<section className="hidden h-[calc(100vh-3.5rem)] w-screen flex bg-white" id="view-editor">
<div className="flex-1 bg-[#F4F4F5] flex items-center justify-center text-zinc-400" id="generated-site-container">Editor View</div>
</section>


<div className="hidden fixed inset-0 z-[60] flex items-center justify-center bg-zinc-900/60 backdrop-blur-sm overflow-y-auto py-10" id="billing-modal">
<div className="bg-white w-full max-w-5xl rounded-2xl shadow-2xl border border-zinc-200 overflow-hidden animate-fadeUp flex flex-col md:flex-row min-h-[600px] relative pointer-events-auto">

<div className="w-full md:w-72 bg-zinc-50 border-r border-zinc-200 p-8 flex flex-col pt-12">
<h2 className="text-xl font-bold tracking-tight text-zinc-900 mb-6">Subscription</h2>
<div className="bg-white border border-zinc-200 rounded-lg p-5 shadow-sm mb-4">
<div className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-1">Current Plan</div>
<div className="text-xl font-bold text-zinc-900 mb-1" id="billing-plan-name">Free Tier</div>
<div className="flex items-center gap-1.5 text-xs font-medium text-zinc-500">
<span className="w-1.5 h-1.5 rounded-full bg-zinc-300" id="billing-status-dot"></span>
<span id="billing-status-text">Inactive</span>
</div>
</div>
<div className="mt-auto space-y-2">
<button className="w-full text-xs font-medium text-zinc-500 hover:text-zinc-900 flex items-center justify-center gap-2 py-2" onclick="Billing.closePortal()">
<span className="iconify" data-icon="lucide:arrow-left" data-width="12"></span> Return to Editor
                    </button>

<div className="text-[9px] text-zinc-300 text-center font-mono pt-4">API Status: <span className="text-emerald-500">Connected</span></div>
</div>
</div>

<div className="flex-1 p-8 bg-white relative pt-12 flex flex-col">
<div className="absolute top-0 left-0 w-full bg-blue-50 border-b border-blue-100 px-8 py-2 text-[10px] text-blue-600 font-medium flex items-center justify-center gap-2" id="secure-banner">
<span className="iconify" data-icon="lucide:lock" data-width="12"></span>
                    Secure Checkout: You will be redirected to Stripe in a new tab to complete payment.
                </div>

<div className="flex justify-center mb-8 mt-2">
<div className="bg-zinc-100 p-1 rounded-lg flex items-center relative border border-zinc-200">
<button className="toggle-btn px-4 py-1.5 rounded-md text-xs font-medium toggle-active" id="btn-monthly" onclick="Billing.setCycle('monthly')">Monthly</button>
<button className="toggle-btn px-4 py-1.5 rounded-md text-xs font-medium toggle-inactive text-zinc-500 flex items-center gap-2" id="btn-yearly" onclick="Billing.setCycle('yearly')">Yearly <span className="text-[9px] bg-emerald-100 text-emerald-700 px-1.5 py-0.5 rounded-full">-20%</span></button>
</div>
</div>
<div className="grid lg:grid-cols-3 gap-4 mt-2 h-full">

<div className="border border-zinc-200 rounded-xl p-5 flex flex-col hover:border-zinc-400 transition-colors relative group">
<h4 className="font-semibold text-zinc-900">Essential</h4>
<div className="flex items-baseline gap-0.5 mt-1 mb-4">
<span className="text-2xl font-bold" id="price-essential">€50</span>
<span className="text-xs text-zinc-500 font-medium" id="period-essential">/mo</span>
</div>
<ul className="text-xs text-zinc-500 space-y-2 mb-6">
<li className="flex items-center gap-2"><span className="iconify text-emerald-500" data-icon="lucide:check" data-width="12"></span> 10MB Media Storage</li>
<li className="flex items-center gap-2"><span className="iconify text-emerald-500" data-icon="lucide:check" data-width="12"></span> Standard Export</li>
</ul>

<a className="block text-center w-full py-2 rounded-lg text-xs font-semibold border border-zinc-200 hover:border-zinc-900 text-zinc-900 transition bg-white mt-auto cursor-pointer" href="?route=billing_checkout&amp;plan=essential&amp;interval=monthly" id="link-essential" rel="noopener noreferrer" target="_blank">
                            Subscribe
                        </a>
</div>

<div className="border border-[#635BFF]/30 bg-[#635BFF]/5 rounded-xl p-5 flex flex-col ring-1 ring-[#635BFF]/20 relative">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#635BFF] text-white px-3 py-0.5 rounded-full text-[10px] font-bold tracking-wide">RECOMMENDED</div>
<h4 className="font-semibold text-[#635BFF]">Professional</h4>
<div className="flex items-baseline gap-0.5 mt-1 mb-4">
<span className="text-2xl font-bold" id="price-professional">€100</span>
<span className="text-xs text-zinc-500 font-medium" id="period-professional">/mo</span>
</div>
<ul className="text-xs text-zinc-600 space-y-2 mb-6">
<li className="flex items-center gap-2"><span className="iconify text-[#635BFF]" data-icon="lucide:check" data-width="12"></span> 20MB Media Storage</li>
<li className="flex items-center gap-2"><span className="iconify text-[#635BFF]" data-icon="lucide:check" data-width="12"></span> Priority GPU Access</li>
</ul>

<a className="block text-center w-full py-2 rounded-lg text-xs font-semibold bg-[#635BFF] hover:bg-[#5349E0] text-white transition mt-auto shadow-md shadow-[#635BFF]/20 cursor-pointer" href="?route=billing_checkout&amp;plan=professional&amp;interval=monthly" id="link-professional" rel="noopener noreferrer" target="_blank">
                            Upgrade Now
                        </a>
</div>

<div className="border border-zinc-200 rounded-xl p-5 flex flex-col hover:border-zinc-400 transition-colors">
<h4 className="font-semibold text-zinc-900">Studio</h4>
<div className="flex items-baseline gap-0.5 mt-1 mb-4">
<span className="text-2xl font-bold" id="price-studio">€150</span>
<span className="text-xs text-zinc-500 font-medium" id="period-studio">/mo</span>
</div>
<ul className="text-xs text-zinc-500 space-y-2 mb-6">
<li className="flex items-center gap-2"><span className="iconify text-emerald-500" data-icon="lucide:check" data-width="12"></span> 50MB Media Storage</li>
<li className="flex items-center gap-2"><span className="iconify text-emerald-500" data-icon="lucide:check" data-width="12"></span> White Label Export</li>
</ul>

<a className="block text-center w-full py-2 rounded-lg text-xs font-semibold border border-zinc-200 hover:border-zinc-900 text-zinc-900 transition bg-white mt-auto cursor-pointer" href="?route=billing_checkout&amp;plan=studio&amp;interval=monthly" id="link-studio" rel="noopener noreferrer" target="_blank">
                            Subscribe
                        </a>
</div>
</div>
</div>
</div>
</div>

<div className="fixed bottom-8 left-8 bg-zinc-900 text-white px-4 py-3 rounded-lg shadow-lg transform translate-y-20 opacity-0 transition-all duration-300 flex items-center gap-3 z-[100]" id="toast">
<span className="iconify text-emerald-400" data-icon="lucide:check-circle" data-width="18"></span>
<div className="flex flex-col">
<span className="text-sm font-medium" id="toast-title">Operation Successful</span>
<span className="text-[10px] text-zinc-400" id="toast-desc">Database updated</span>
</div>
</div>


    </>
  );
}
