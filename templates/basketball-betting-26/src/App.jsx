import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        const modal = document.getElementById('momo-checkout');
        const planNameEl = document.getElementById('checkout-plan-name');
        const amountEl = document.getElementById('checkout-amount');
        const payBtn = document.getElementById('pay-btn');

        // Note: You should replace this test key with your real LIVE PUBLIC KEY from your Paystack Dashboard
        const PAYSTACK_PUBLIC_KEY = 'pk_test_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx';

        function openCheckout(planName, amount) {
            planNameEl.textContent = planName;
            amountEl.textContent = amount;
            modal.classList.remove('hidden');
            modal.classList.add('flex');
            document.body.style.overflow = 'hidden';
        }

        function closeCheckout() {
            modal.classList.add('hidden');
            modal.classList.remove('flex');
            document.body.style.overflow = '';
            
            // Reset button state
            payBtn.innerHTML = 'Proceed to Payment <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>';
            payBtn.disabled = false;
            payBtn.className = "w-full mt-2 inline-flex items-center justify-center rounded-lg text-sm font-medium transition-all bg-emerald-500 text-zinc-950 hover:bg-emerald-400 h-11 px-4 py-2 shadow-[0_0_15px_rgba(16,185,129,0.15)] hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] gap-2";
            document.getElementById('momo-form').reset();
        }

        function processPayment(e) {
            e.preventDefault();
            
            const email = document.getElementById('email-address').value;
            const phone = document.getElementById('mobile-number').value;
            // Get amount and convert to pesewas (Paystack expects the lowest currency unit)
            const amountInGHS = parseFloat(document.getElementById('checkout-amount').textContent);
            const amountInPesewas = amountInGHS * 100;

            // UI State: Loading the gateway
            payBtn.disabled = true;
            payBtn.innerHTML = '<iconify-icon icon="solar:spinner-linear" class="animate-spin mr-2 text-lg"></iconify-icon> Connecting to Gateway...';
            payBtn.classList.remove('bg-emerald-500', 'hover:bg-emerald-400', 'text-zinc-950', 'shadow-[0_0_15px_rgba(16,185,129,0.15)]');
            payBtn.classList.add('bg-zinc-800', 'text-zinc-300', 'cursor-not-allowed');

            // Initialize Paystack Inline Payment Checkout
            let handler = PaystackPop.setup({
                key: PAYSTACK_PUBLIC_KEY, 
                email: email,
                amount: amountInPesewas,
                currency: 'GHS',
                // Generating a random reference for this transaction
                ref: 'BBE_' + Math.floor((Math.random() * 1000000000) + 1),
                metadata: {
                    custom_fields: [
                        {
                            display_name: "Mobile Number",
                            variable_name: "mobile_number",
                            value: phone
                        }
                    ]
                },
                callback: function(response) {
                    // This function fires after the user successfully completes the MoMo prompt on their phone
                    closeCheckout();
                    alert("Payment authorized successfully! Reference: " + response.reference);
                    // Here you would typically make a fetch() call to your backend to verify the transaction
                },
                onClose: function() {
                    // This function fires if the user closes the Paystack popup without completing payment
                    payBtn.disabled = false;
                    payBtn.innerHTML = 'Proceed to Payment <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>';
                    payBtn.classList.remove('bg-zinc-800', 'text-zinc-300', 'cursor-not-allowed');
                    payBtn.classList.add('bg-emerald-500', 'hover:bg-emerald-400', 'text-zinc-950', 'shadow-[0_0_15px_rgba(16,185,129,0.15)]');
                }
            });

            // Launch the actual Paystack Mobile Money interface
            handler.openIframe();
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="sticky top-0 z-50 border-b border-zinc-800/60 bg-[#09090b]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
<div className="flex items-center gap-1.5 text-zinc-100 font-semibold tracking-tighter text-xl">
<iconify-icon icon="solar:basketball-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
               BBE.
            </div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="hover:text-zinc-100 transition-colors" href="#predictions">Predictions</a>
<a className="hover:text-zinc-100 transition-colors" href="#stats">Track Record</a>
<a className="hover:text-zinc-100 transition-colors" href="#pricing">Premium</a>
</div>
<div>
<a className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 bg-zinc-100 text-zinc-900 hover:bg-zinc-200 h-9 px-4 py-2" href="#pricing">
                    Join VIP
                </a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-24 overflow-hidden">

<div className="absolute -top-[10%] left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
<div className="inline-flex items-center rounded-full border border-zinc-800/80 bg-zinc-900/50 px-3 py-1 text-xs font-medium text-zinc-300 backdrop-blur-sm mb-8">
<span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500 mr-2 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>
                Playoffs Model Activated
            </div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tighter text-zinc-100 mb-6 max-w-4xl mx-auto leading-tight">
                Data-driven basketball <br/> picks for the edge.
            </h1>
<p className="text-base md:text-lg text-zinc-400 max-w-2xl mx-auto mb-10">
                Stop guessing. We analyze thousands of data points, player matchups, and historical trends to provide the highest value betting predictions.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto inline-flex items-center justify-center rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 bg-emerald-500 text-zinc-950 hover:bg-emerald-400 h-11 px-8 py-2 shadow-[0_0_20px_rgba(16,185,129,0.2)] hover:shadow-[0_0_30px_rgba(16,185,129,0.4)]" href="#pricing">
                    Unlock Premium Picks
                </a>
<a className="w-full sm:w-auto inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 border border-zinc-800 bg-transparent hover:bg-zinc-900 text-zinc-100 h-11 px-8 py-2" href="#predictions">
                    View Today's Slate
                </a>
</div>
</div>
</section>

<section className="border-y border-zinc-800/50 bg-zinc-900/20 py-12" id="stats">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-zinc-800/50">
<div className="flex flex-col items-center">
<div className="text-3xl font-semibold tracking-tighter text-zinc-100">68.4%</div>
<div className="text-xs text-zinc-500 mt-1 uppercase tracking-wider font-medium">Model Win Rate</div>
</div>
<div className="flex flex-col items-center">
<div className="text-3xl font-semibold tracking-tighter text-zinc-100">+142</div>
<div className="text-xs text-zinc-500 mt-1 uppercase tracking-wider font-medium">Units Profit</div>
</div>
<div className="flex flex-col items-center">
<div className="text-3xl font-semibold tracking-tighter text-zinc-100">11.2%</div>
<div className="text-xs text-zinc-500 mt-1 uppercase tracking-wider font-medium">Average ROI</div>
</div>
<div className="flex flex-col items-center">
<div className="text-3xl font-semibold tracking-tighter text-zinc-100">3.2k</div>
<div className="text-xs text-zinc-500 mt-1 uppercase tracking-wider font-medium">Active VIPs</div>
</div>
</div>
</div>
</section>

<section className="py-24" id="predictions">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="mb-12">
<h2 className="text-2xl font-semibold tracking-tighter text-zinc-100 mb-2">Tonight's Action</h2>
<p className="text-sm text-zinc-400">Algorithmic projections for upcoming matchups.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6 flex flex-col hover:border-zinc-700 transition-colors">
<div className="flex justify-between items-center mb-6">
<span className="inline-flex items-center rounded-full bg-zinc-800 px-2.5 py-0.5 text-xs font-medium text-zinc-300">Free Play</span>
<span className="text-xs text-zinc-500 flex items-center gap-1">
<iconify-icon icon="solar:clock-circle-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
                            7:30 PM EST
                        </span>
</div>
<div className="flex justify-between items-center mb-8">
<div className="flex flex-col items-center gap-2">
<div className="w-14 h-14 rounded-full border border-zinc-800 bg-zinc-950 flex items-center justify-center text-zinc-300 font-semibold tracking-tight">BOS</div>
</div>
<div className="text-xs font-medium text-zinc-600">vs</div>
<div className="flex flex-col items-center gap-2">
<div className="w-14 h-14 rounded-full border border-zinc-800 bg-zinc-950 flex items-center justify-center text-zinc-300 font-semibold tracking-tight">NYK</div>
</div>
</div>
<div className="mt-auto border-t border-zinc-800/50 pt-5">
<div className="flex justify-between items-center mb-2">
<span className="text-xs text-zinc-500">Pick</span>
<span className="text-sm font-semibold text-zinc-100 bg-zinc-800 px-2 py-1 rounded">BOS -4.5</span>
</div>
<div className="flex justify-between items-center">
<span className="text-xs text-zinc-500">Edge</span>
<div className="flex gap-1">
<div className="w-1.5 h-3 rounded-sm bg-emerald-500"></div>
<div className="w-1.5 h-3 rounded-sm bg-emerald-500"></div>
<div className="w-1.5 h-3 rounded-sm bg-zinc-800"></div>
</div>
</div>
</div>
</div>

<div className="rounded-2xl border border-emerald-900/30 bg-zinc-900/30 p-6 flex flex-col relative overflow-hidden group">
<div className="absolute inset-0 backdrop-blur-[6px] bg-[#09090b]/70 z-10 flex flex-col items-center justify-center p-6 text-center transition-all group-hover:bg-[#09090b]/80">
<div className="w-10 h-10 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-3">
<iconify-icon icon="solar:lock-keyhole-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-zinc-100 mb-1">VIP Player Prop</h3>
<p className="text-xs text-zinc-400 mb-4 max-w-[200px]">High value mismatch detected by our projections.</p>
<a className="inline-flex items-center text-xs font-medium text-emerald-400 hover:text-emerald-300" href="#pricing">
                            Unlock Pick <iconify-icon className="ml-1" icon="solar:arrow-right-linear" width="14"></iconify-icon>
</a>
</div>
<div className="opacity-40 pointer-events-none blur-[2px]">
<div className="flex justify-between items-center mb-6">
<span className="inline-flex items-center rounded-full bg-emerald-500/20 px-2.5 py-0.5 text-xs font-medium text-emerald-400">Premium</span>
<span className="text-xs text-zinc-500">8:00 PM EST</span>
</div>
<div className="flex justify-between items-center mb-8">
<div className="w-14 h-14 rounded-full border border-zinc-800 bg-zinc-950"></div>
<div className="text-xs font-medium text-zinc-600">@</div>
<div className="w-14 h-14 rounded-full border border-zinc-800 bg-zinc-950"></div>
</div>
<div className="mt-auto border-t border-zinc-800/50 pt-5">
<div className="flex justify-between items-center mb-2">
<span className="text-xs text-zinc-500">Pick</span>
<div className="h-6 w-20 bg-zinc-800 rounded"></div>
</div>
</div>
</div>
</div>

<div className="rounded-2xl border border-amber-900/30 bg-zinc-900/30 p-6 flex flex-col relative overflow-hidden hidden md:flex group">
<div className="absolute inset-0 backdrop-blur-[6px] bg-[#09090b]/70 z-10 flex flex-col items-center justify-center p-6 text-center transition-all group-hover:bg-[#09090b]/80">
<div className="w-10 h-10 rounded-full bg-amber-500/10 text-amber-500 flex items-center justify-center mb-3">
<iconify-icon icon="solar:star-fall-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-zinc-100 mb-1">Max Bet Alert</h3>
<p className="text-xs text-zinc-400 mb-4 max-w-[200px]">Highest confidence play of the week.</p>
<a className="inline-flex items-center text-xs font-medium text-amber-400 hover:text-amber-300" href="#pricing">
                            Unlock Pick <iconify-icon className="ml-1" icon="solar:arrow-right-linear" width="14"></iconify-icon>
</a>
</div>
<div className="opacity-40 pointer-events-none blur-[2px]">
<div className="flex justify-between items-center mb-6">
<span className="inline-flex items-center rounded-full bg-amber-500/20 px-2.5 py-0.5 text-xs font-medium text-amber-400">5 Unit Play</span>
</div>
<div className="h-16 w-full bg-zinc-800/50 rounded-xl mb-6"></div>
<div className="mt-auto border-t border-zinc-800/50 pt-5">
<div className="h-6 w-full bg-zinc-800/50 rounded"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900/20 border-y border-zinc-800/50" id="pricing">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-zinc-100 mb-4">Gain the ultimate advantage.</h2>
<p className="text-sm md:text-base text-zinc-400">Join our syndicate of profitable bettors. Get instant access to our proprietary model's top plays every single day.</p>
</div>

<div className="flex justify-center mb-10">
<div className="relative flex items-center p-1 bg-zinc-900/80 border border-zinc-800 rounded-full w-fit">
<button className="relative w-28 rounded-full py-1.5 text-xs font-medium text-zinc-100 bg-zinc-800 shadow-sm border border-zinc-700/50">Monthly</button>
<button className="relative w-32 rounded-full py-1.5 text-xs font-medium text-zinc-500 hover:text-zinc-300 transition-colors">Season Pass</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">

<div className="rounded-3xl border border-zinc-800 bg-[#09090b] p-8 flex flex-col hover:border-zinc-700 transition-colors">
<h3 className="text-lg font-medium text-zinc-100 mb-2">Pro Access</h3>
<p className="text-sm text-zinc-400 mb-6">Essential daily picks to build your bankroll steadily over time.</p>
<div className="mb-6 flex items-baseline text-zinc-100">
<span className="text-2xl font-semibold text-zinc-500 mr-1.5">GH₵</span>
<span className="text-4xl font-semibold tracking-tighter">149</span>
<span className="text-sm text-zinc-500 ml-1">/mo</span>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-start gap-3 text-sm text-zinc-300">
<iconify-icon className="text-emerald-500 mt-0.5 shrink-0" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                            3-5 Model Plays Daily
                        </li>
<li className="flex items-start gap-3 text-sm text-zinc-300">
<iconify-icon className="text-emerald-500 mt-0.5 shrink-0" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                            Spreads &amp; Totals Analysis
                        </li>
<li className="flex items-start gap-3 text-sm text-zinc-300">
<iconify-icon className="text-emerald-500 mt-0.5 shrink-0" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                            Bankroll Management Guide
                        </li>
<li className="flex items-start gap-3 text-sm text-zinc-600">
<iconify-icon className="mt-0.5 shrink-0" icon="solar:close-circle-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                            VIP Discord Community
                        </li>
</ul>
<button className="w-full inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-800 text-zinc-100 h-10 px-4 py-2" onclick="openCheckout('Pro Access', 149)">
                        Get Pro Access
                    </button>
</div>

<div className="rounded-3xl border border-emerald-500/30 bg-[#09090b] p-8 flex flex-col relative overflow-hidden">
<div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 bg-emerald-500/10 blur-3xl rounded-full pointer-events-none"></div>
<div className="inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-[10px] uppercase tracking-wider font-semibold text-emerald-400 mb-4 w-fit">Syndicate Level</div>
<h3 className="text-lg font-medium text-zinc-100 mb-2">VIP Mastermind</h3>
<p className="text-sm text-zinc-400 mb-6">Full institutional access including props, live alerts, and community.</p>
<div className="mb-6 flex items-baseline text-zinc-100">
<span className="text-2xl font-semibold text-zinc-500 mr-1.5">GH₵</span>
<span className="text-4xl font-semibold tracking-tighter">299</span>
<span className="text-sm text-zinc-500 ml-1">/mo</span>
</div>
<ul className="space-y-4 mb-8 flex-1 relative z-10">
<li className="flex items-start gap-3 text-sm text-zinc-300">
<iconify-icon className="text-emerald-500 mt-0.5 shrink-0" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                            Everything in Pro Access
                        </li>
<li className="flex items-start gap-3 text-sm text-zinc-300">
<iconify-icon className="text-emerald-500 mt-0.5 shrink-0" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                            High-Value Player Props
                        </li>
<li className="flex items-start gap-3 text-sm text-zinc-300">
<iconify-icon className="text-emerald-500 mt-0.5 shrink-0" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                            Private VIP Discord Access
                        </li>
<li className="flex items-start gap-3 text-sm text-zinc-300">
<iconify-icon className="text-emerald-500 mt-0.5 shrink-0" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                            Direct Analyst Messaging
                        </li>
</ul>
<button className="w-full inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors bg-emerald-500 text-zinc-950 hover:bg-emerald-400 h-10 px-4 py-2 relative z-10" onclick="openCheckout('VIP Mastermind', 299)">
                        Join VIP Mastermind
                    </button>
</div>
</div>
</div>
</section>

<section className="py-24">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12">
<div>
<div className="w-10 h-10 rounded-lg border border-zinc-800 bg-zinc-900/50 flex items-center justify-center text-zinc-100 mb-5">
<iconify-icon icon="solar:cpu-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-zinc-100 mb-2">Algorithmic Edge</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Our proprietary model simulates every game thousands of times to identify discrepancies in sportsbook lines before they adjust.</p>
</div>
<div>
<div className="w-10 h-10 rounded-lg border border-zinc-800 bg-zinc-900/50 flex items-center justify-center text-zinc-100 mb-5">
<iconify-icon icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-zinc-100 mb-2">Transparent Tracking</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Every pick is recorded and verified via third-party. We don't delete losses. View our complete historical spreadsheet anytime.</p>
</div>
<div>
<div className="w-10 h-10 rounded-lg border border-zinc-800 bg-zinc-900/50 flex items-center justify-center text-zinc-100 mb-5">
<iconify-icon icon="solar:bell-bing-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-zinc-100 mb-2">Instant Alerts</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Get picks delivered straight to your device via Discord the absolute moment they are released to beat line movement.</p>
</div>
</div>
</div>
</section>

<footer className="border-t border-zinc-800/50 bg-[#09090b] pt-16 pb-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
<div className="max-w-xs">
<div className="flex items-center gap-1.5 text-zinc-100 font-semibold tracking-tighter text-xl mb-4">
<iconify-icon icon="solar:basketball-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
                       BBE.
                    </div>
<p className="text-xs text-zinc-500 leading-relaxed">Empowering modern sports bettors with institutional-grade data, analysis, and execution strategies.</p>
</div>
<div className="flex gap-16">
<div>
<h4 className="text-xs font-semibold text-zinc-100 mb-4 uppercase tracking-wider">Platform</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-emerald-400 transition-colors" href="#">Today's Picks</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Results Tracker</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Pricing Options</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-zinc-100 mb-4 uppercase tracking-wider">Legal</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-zinc-300 transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-zinc-300 transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-zinc-300 transition-colors" href="#">Refund Policy</a></li>
</ul>
</div>
</div>
</div>
<div className="pt-8 border-t border-zinc-800/50 flex flex-col items-center text-center gap-4">
<p className="text-[10px] text-zinc-600 max-w-4xl leading-relaxed">
                    Disclaimer: BBE is not a sportsbook or gambling site. We provide data, analysis, and predictions for informational and entertainment purposes only. Sports betting involves substantial risk and is not suitable for everyone. Results may vary. Please gamble responsibly. If you or someone you know has a gambling problem, call 1-800-GAMBLER.
                </p>
<p className="text-xs text-zinc-500">© 2024 BBALL EDGE. All rights reserved.</p>
</div>
</div>
</footer>

<div className="fixed inset-0 z-[100] hidden items-center justify-center px-4" id="momo-checkout">

<div className="absolute inset-0 bg-[#09090b]/80 backdrop-blur-sm transition-opacity" onclick="closeCheckout()"></div>

<div className="relative w-full max-w-sm rounded-2xl border border-zinc-800 bg-[#09090b] shadow-2xl overflow-hidden">

<div className="border-b border-zinc-800/60 bg-zinc-900/30 px-5 py-4 flex items-center justify-between">
<div className="flex items-center gap-2 text-zinc-100">
<div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500">
<iconify-icon icon="solar:shield-keyhole-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</div>
<span className="text-sm font-semibold tracking-tight">Secure Checkout</span>
</div>
<button className="text-zinc-500 hover:text-zinc-300 transition-colors focus:outline-none" onclick="closeCheckout()">
<iconify-icon icon="solar:close-circle-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</button>
</div>

<div className="p-5">
<div className="mb-5 flex justify-between items-end">
<div>
<p className="text-xs text-zinc-500 mb-1" id="checkout-plan-name">Pro Access</p>
<p className="text-sm font-medium text-zinc-200">Total Amount</p>
</div>
<div className="text-right">
<span className="text-2xl font-semibold tracking-tighter text-zinc-100">GH₵<span id="checkout-amount">149</span></span>
</div>
</div>
<form className="space-y-4" id="momo-form" onsubmit="processPayment(event)">

<div>
<label className="block text-xs font-medium text-zinc-400 mb-1.5">Email Address</label>
<div className="relative">
<iconify-icon className="absolute left-3 top-3 text-zinc-500" icon="solar:letter-linear" width="16"></iconify-icon>
<input className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg pl-9 pr-3 py-2.5 text-sm text-zinc-100 placeholder-zinc-700 focus:outline-none focus:ring-1 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-colors" id="email-address" placeholder="you@example.com" required="" type="email"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-zinc-400 mb-1.5">Mobile Number (Optional)</label>
<div className="relative">
<span className="absolute left-3 top-2.5 text-zinc-500 text-sm">+233</span>
<input className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg pl-12 pr-3 py-2.5 text-sm text-zinc-100 placeholder-zinc-700 focus:outline-none focus:ring-1 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-colors" id="mobile-number" pattern="[0-9]{9,10}" placeholder="24 123 4567" type="tel"/>
</div>
</div>
<button className="w-full mt-2 inline-flex items-center justify-center rounded-lg text-sm font-medium transition-all bg-emerald-500 text-zinc-950 hover:bg-emerald-400 h-11 px-4 py-2 shadow-[0_0_15px_rgba(16,185,129,0.15)] hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] gap-2" id="pay-btn" type="submit">
                        Proceed to Payment
                        <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</form>
<p className="text-[10px] text-center text-zinc-600 mt-5 flex items-center justify-center gap-1.5">
<iconify-icon icon="solar:lock-password-linear" width="12"></iconify-icon>
                    Powered securely by Paystack
                </p>
</div>
</div>
</div>



    </>
  );
}
