import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Animate Amount Function
        function animateValue(id, start, end, duration) {
            const obj = document.getElementById(id);
            let startTimestamp = null;
            const step = (timestamp) => {
                if (!startTimestamp) startTimestamp = timestamp;
                const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                // Ease out expo
                const easeOut = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
                const currentVal = Math.floor(easeOut * (end - start) + start);
                obj.innerHTML = currentVal.toLocaleString();
                if (progress < 1) {
                    window.requestAnimationFrame(step);
                } else {
                    obj.innerHTML = "145,453"; // Exact target
                }
            };
            window.requestAnimationFrame(step);
        }

        // Trigger initial animation
        setTimeout(() => {
            animateValue("amount-display", 0, 145453, 2000);
        }, 300);

        // UI State Logic
        const page1 = document.getElementById('page-1');
        const page2 = document.getElementById('page-2');
        const loader = document.getElementById('loading-overlay');
        const loadingText = document.getElementById('loading-text');
        const loadingBar = document.getElementById('loading-bar');
        const loadingPct = document.getElementById('loading-pct');

        function initiateTransfer() {
            // Fade out Page 1
            page1.classList.remove('opacity-100', 'scale-100');
            page1.classList.add('opacity-0', 'scale-95');
            
            setTimeout(() => {
                page1.classList.add('hidden');
                loader.classList.remove('hidden');
                
                // Allow display flex to apply before transitioning opacity
                requestAnimationFrame(() => {
                    loader.classList.remove('opacity-0');
                    loader.classList.add('opacity-100');
                    runLoadingSequence();
                });
            }, 700);
        }

        function runLoadingSequence() {
            const steps = [
                { text: "Initializing transaction...", pct: 15, delay: 500 },
                { text: "Connecting to secure network...", pct: 40, delay: 2000 },
                { text: "Verifying routing channel...", pct: 75, delay: 4000 },
                { text: "Finalizing request...", pct: 95, delay: 6000 },
                { text: "Request failed.", pct: 100, delay: 7500 }
            ];

            steps.forEach(step => {
                setTimeout(() => {
                    loadingText.style.opacity = 0;
                    setTimeout(() => {
                        loadingText.innerText = step.text;
                        loadingText.style.opacity = 1;
                    }, 150);
                    
                    loadingBar.style.width = step.pct + '%';
                    
                    // Simple counter visual
                    let currentPct = parseInt(loadingPct.innerText);
                    let targetPct = step.pct;
                    let interval = setInterval(() => {
                        if(currentPct < targetPct) {
                            currentPct++;
                            loadingPct.innerText = currentPct + '%';
                        } else {
                            clearInterval(interval);
                        }
                    }, 20);

                }, step.delay);
            });

            // Transition to Failure Page
            setTimeout(() => {
                loader.classList.remove('opacity-100');
                loader.classList.add('opacity-0');
                
                setTimeout(() => {
                    loader.classList.add('hidden');
                    page2.classList.remove('hidden');
                    
                    requestAnimationFrame(() => {
                        page2.classList.remove('opacity-0', 'scale-95');
                        page2.classList.add('opacity-100', 'scale-100');
                    });
                }, 500);
            }, 8500); // Total loading duration
        }

        // Reset for testing
        function resetView() {
            page2.classList.remove('opacity-100', 'scale-100');
            page2.classList.add('opacity-0', 'scale-95');
            
            setTimeout(() => {
                page2.classList.add('hidden');
                page1.classList.remove('hidden');
                
                // Reset loader state
                loadingBar.style.width = '0%';
                loadingPct.innerText = '0%';
                loadingText.innerText = 'Initializing transaction...';
                
                requestAnimationFrame(() => {
                    page1.classList.remove('opacity-0', 'scale-95');
                    page1.classList.add('opacity-100', 'scale-100');
                    animateValue("amount-display", 0, 145453, 1500);
                });
            }, 700);
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="pointer-events-none fixed inset-0 z-50 opacity-[0.02] mix-blend-overlay" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E\')'}}></div>
<div className="flex h-full w-full relative z-10">

<aside className="w-16 lg:w-20 border-r border-white/5 flex flex-col items-center py-6 gap-8 bg-[#0F1115]/80 backdrop-blur-md shrink-0">

<div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#161A20] to-[#0F1115] border border-white/10 flex items-center justify-center shadow-lg group cursor-pointer">
<iconify-icon className="text-xl text-[#D4AF37] group-hover:scale-110 transition-transform duration-500" icon="solar:gem-linear"></iconify-icon>
</div>

<nav className="flex flex-col gap-6 mt-4 w-full items-center">
<button className="text-gray-500 hover:text-[#D4AF37] hover:bg-white/5 p-3 rounded-lg transition-all duration-300 relative group">
<iconify-icon className="text-2xl" icon="solar:widget-linear"></iconify-icon>
<span className="absolute left-1/2 -translate-x-1/2 -bottom-1 w-1 h-1 bg-[#D4AF37] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
</button>
<button className="text-[#D4AF37] bg-[#D4AF37]/10 p-3 rounded-lg transition-all duration-300 relative">
<iconify-icon className="text-2xl" icon="solar:transfer-horizontal-linear"></iconify-icon>
</button>
<button className="text-gray-500 hover:text-[#D4AF37] hover:bg-white/5 p-3 rounded-lg transition-all duration-300 relative">
<iconify-icon className="text-2xl" icon="solar:wallet-linear"></iconify-icon>
</button>
<button className="text-gray-500 hover:text-[#D4AF37] hover:bg-white/5 p-3 rounded-lg transition-all duration-300 relative mt-auto">
<iconify-icon className="text-2xl" icon="solar:settings-linear"></iconify-icon>
</button>
</nav>
</aside>

<main className="flex-1 flex flex-col h-full overflow-hidden bg-[#0F1115]">

<header className="h-16 border-b border-white/5 flex justify-end items-center px-6 lg:px-8 gap-5 shrink-0 bg-[#0F1115]/50 backdrop-blur-sm z-20">
<button className="text-gray-400 hover:text-white transition-colors relative">
<iconify-icon className="text-xl" icon="solar:bell-linear"></iconify-icon>
<span className="absolute top-0.5 right-0.5 w-2 h-2 bg-[#D4AF37] rounded-full border border-[#0F1115]"></span>
</button>
<div className="h-5 w-[1px] bg-white/10"></div>
<button className="flex items-center gap-2 group">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-gray-800 to-gray-700 border border-white/10 flex items-center justify-center overflow-hidden">
<iconify-icon className="text-gray-300 text-sm" icon="solar:user-rounded-linear"></iconify-icon>
</div>
</button>
</header>

<div className="flex-1 overflow-y-auto p-4 md:p-8 flex flex-col items-center justify-start relative z-10">



<div className="w-full max-w-2xl bg-[#161A20]/95 backdrop-blur-md rounded-2xl border border-white/5 shadow-[0_8px_30px_rgb(0,0,0,0.5)] flex flex-col overflow-hidden transition-all duration-700 opacity-100 scale-100" id="page-1">

<div className="px-8 py-6 border-b border-white/5 flex items-center gap-4 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D4AF37]/5 to-transparent -translate-x-full animate-[shimmer_8s_infinite] pointer-events-none" style={{animation: 'shimmer 8s infinite linear'}}></div>
<div className="flex items-center justify-center w-10 h-10 rounded-lg bg-black/40 border border-[#D4AF37]/20 text-[#D4AF37] relative">
<iconify-icon className="absolute text-xl" icon="solar:shield-check-linear"></iconify-icon>
<iconify-icon className="absolute text-[10px] top-2" icon="solar:gem-linear"></iconify-icon>
</div>
<div>
<h1 className="text-white tracking-tight font-semibold text-lg">DiamondChain Investments BW</h1>
<p className="text-xs text-gray-400 mt-0.5 tracking-wide">Secure Transaction Gateway</p>
</div>
</div>
<div className="p-8 space-y-8">

<div className="flex flex-col items-center text-center space-y-2 group">
<p className="text-xs text-gray-500 uppercase tracking-widest font-medium">Profit Transfer</p>
<div className="flex items-baseline justify-center gap-2 relative">
<span className="text-[#D4AF37]/20 absolute inset-0 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none"></span>
<span className="text-gray-400 text-2xl font-medium">P</span>
<span className="text-white text-5xl md:text-6xl tracking-tight font-semibold" id="amount-display">0</span>
<span className="text-gray-500 text-sm font-medium ml-1">BWP</span>
</div>
<div className="flex items-center gap-3 text-xs text-gray-400 mt-4 bg-black/20 py-1.5 px-3 rounded-full border border-white/5">
<span className="flex items-center gap-1.5"><iconify-icon icon="solar:calendar-linear"></iconify-icon> April 9, 2026</span>
<span className="w-1 h-1 bg-gray-600 rounded-full"></span>
<span className="font-mono text-[11px] tracking-wider text-gray-300">TRX-93847261</span>
</div>
</div>

<div className="flex flex-col md:flex-row gap-4 items-center justify-between p-5 bg-black/20 rounded-xl border border-white/5">
<div className="flex items-center gap-3 w-full md:w-auto">
<div className="w-10 h-10 rounded-full bg-gray-800 border border-white/10 flex items-center justify-center text-gray-400">
<iconify-icon className="text-lg" icon="solar:user-linear"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-xs text-gray-500">Sender (Manager)</span>
<span className="text-sm text-gray-200 font-medium">Mr. Philip</span>
</div>
</div>
<div className="hidden md:flex text-gray-600">
<iconify-icon className="text-xl" icon="solar:arrow-right-linear"></iconify-icon>
</div>
<div className="flex items-center gap-3 w-full md:w-auto md:justify-end text-left md:text-right">
<div className="flex flex-col order-2 md:order-1">
<span className="text-xs text-gray-500">Recipient</span>
<span className="text-sm text-gray-200 font-medium">Mositi Seokolo</span>
<span className="text-[11px] text-[#3A7AFE]/80">mositiseokolo@yahoo.com</span>
</div>
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 border border-white/10 flex items-center justify-center text-gray-300 order-1 md:order-2 shadow-inner">
<span className="text-sm font-medium tracking-tighter">MS</span>
</div>
</div>
</div>

<div className="space-y-3">
<h3 className="text-xs text-gray-500 uppercase tracking-widest font-medium px-1">Routing Details</h3>
<div className="bg-black/20 rounded-xl border border-white/5 p-5">
<dl className="grid grid-cols-2 gap-y-4 gap-x-6 text-sm">
<div className="flex flex-col gap-1 border-b border-white/5 pb-3 col-span-2 md:col-span-1">
<dt className="text-xs text-gray-500">Bank Institution</dt>
<dd className="text-gray-200 font-medium">FNB Botswana</dd>
</div>
<div className="flex flex-col gap-1 border-b border-white/5 pb-3 col-span-2 md:col-span-1">
<dt className="text-xs text-gray-500">Account Type</dt>
<dd className="text-gray-200 font-medium">Gold Account</dd>
</div>
<div className="flex flex-col gap-1 col-span-2 md:col-span-1">
<dt className="text-xs text-gray-500">Account Number</dt>
<dd className="text-gray-200 font-mono text-sm tracking-widest">62318593218</dd>
</div>
<div className="flex flex-col gap-1 col-span-2 md:col-span-1">
<dt className="text-xs text-gray-500">Branch Code</dt>
<dd className="text-gray-200 font-mono text-sm tracking-widest">283567</dd>
</div>
</dl>
</div>
</div>

<div className="relative bg-black/20 rounded-xl border border-white/5 overflow-hidden">
<div className="absolute top-3 right-4 flex items-center gap-1.5 text-emerald-500/90 text-xs font-medium bg-emerald-500/10 px-2 py-1 rounded-md border border-emerald-500/20">
<iconify-icon icon="solar:check-circle-linear"></iconify-icon>
                                Verified
                            </div>
<div className="p-5 border-b border-white/5 flex gap-5 items-center">
<div className="w-16 h-16 shrink-0 bg-[#E5E7EB] rounded border border-gray-300 flex items-center justify-center relative overflow-hidden shadow-inner">
<iconify-icon className="text-2xl text-gray-400" icon="solar:user-linear"></iconify-icon>
<div className="absolute inset-0 bg-black/5 mix-blend-multiply" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg viewBox=%220 0 100 100%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%221.5%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22 opacity=%220.3%22/%3E%3C/svg%3E\')'}}></div>
</div>
<div className="flex flex-col gap-2 w-full">
<div className="flex flex-col">
<span className="text-[10px] text-gray-500 uppercase tracking-wider">Full Legal Name</span>
<span className="text-sm text-gray-200 font-medium">Mositi Seokolo</span>
</div>
<div className="flex gap-6">
<div className="flex flex-col">
<span className="text-[10px] text-gray-500 uppercase tracking-wider">ID Number</span>
<span className="text-sm text-gray-200 font-mono">005720428</span>
</div>
<div className="flex flex-col">
<span className="text-[10px] text-gray-500 uppercase tracking-wider">Gender</span>
<span className="text-sm text-gray-200">Female</span>
</div>
</div>
</div>
</div>
<div className="bg-black/40 p-4 flex flex-col gap-2">
<span className="text-[10px] text-gray-500 uppercase tracking-wider px-1">Digital Signature</span>
<div className="w-full h-12 bg-[#F9FAFB] rounded flex items-center justify-center relative shadow-inner overflow-hidden border border-white/10">
<div className="absolute inset-0 opacity-[0.15]" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22n2%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%222%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n2)%22/%3E%3C/svg%3E\')'}}></div>
<svg className="w-32 h-8 text-slate-800 opacity-80 relative z-10" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 200 40">
<path d="M10 25 C 20 10, 30 35, 40 20 S 50 10, 60 25 C 70 30, 75 15, 80 20 S 95 30, 105 15 C 115 5, 120 30, 130 20 S 145 10, 155 25 C 165 35, 175 15, 190 20"></path>
</svg>
</div>
</div>
</div>

<div className="flex items-center justify-between p-4 bg-[#D4AF37]/[0.03] border border-[#D4AF37]/20 rounded-xl relative overflow-hidden group">
<div className="absolute inset-y-0 left-0 w-1 bg-[#D4AF37]/60 rounded-l-xl"></div>
<div className="flex items-center gap-3 pl-3">
<iconify-icon className="text-[#D4AF37]/70 text-lg" icon="solar:info-circle-linear"></iconify-icon>
<span className="text-sm text-gray-300 font-medium tracking-wide">Network Processing Fee</span>
</div>
<span className="text-sm font-semibold tracking-tight text-[#D4AF37]">P5,500</span>
</div>
</div>

<div className="px-8 py-5 border-t border-white/5 bg-black/20 flex items-center justify-end gap-4">
<button className="text-sm font-medium text-gray-400 hover:text-white px-4 py-2 transition-colors">
                            Cancel
                        </button>
<button className="relative overflow-hidden bg-gradient-to-b from-[#E5C354] to-[#C9A12B] text-black text-sm font-medium px-6 py-2.5 rounded-lg shadow-[0_2px_10px_rgba(212,175,55,0.2)] hover:shadow-[0_4px_15px_rgba(212,175,55,0.3)] hover:-translate-y-0.5 transition-all active:scale-[0.98] active:translate-y-0 group" onclick="initiateTransfer()">
<span className="relative z-10 flex items-center gap-2">
                                Send Payment <iconify-icon icon="solar:plain-2-linear"></iconify-icon>
</span>
<div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
</button>
</div>
</div>



<div className="hidden w-full max-w-[540px] bg-[#FDFDFD] rounded-2xl border border-gray-200 shadow-2xl flex flex-col overflow-hidden text-gray-900 transition-all duration-700 opacity-0 scale-95 mt-8 relative z-20" id="page-2">
<div className="px-8 py-6 flex items-center justify-between border-b border-gray-100">
<div className="flex items-center gap-3 text-gray-800">
<iconify-icon className="text-xl text-gray-400" icon="solar:shield-check-linear"></iconify-icon>
<span className="font-medium tracking-tight text-sm">DiamondChain Investments BW</span>
</div>
</div>
<div className="p-8 md:p-10 space-y-8 flex flex-col items-center">
<div className="flex flex-col items-center text-center space-y-3">
<div className="w-14 h-14 bg-red-50 text-red-600 rounded-full flex items-center justify-center border border-red-100 mb-2">
<iconify-icon className="text-3xl" icon="solar:close-circle-linear"></iconify-icon>
</div>
<h2 className="text-2xl font-semibold tracking-tight text-gray-900 uppercase">Payment Failed</h2>
<p className="text-sm text-gray-500">The transaction could not be completed</p>
</div>

<div className="w-full bg-gray-50 border border-gray-200 rounded-xl p-6 relative">
<div className="absolute top-0 left-0 w-full h-1 bg-red-500 rounded-t-xl opacity-80"></div>
<div className="space-y-4 text-sm text-gray-700 leading-relaxed">
<p>The transfer failed because the receiving network requires a Cross-Network High-Value Verification fee of <strong className="font-semibold text-gray-900">P5,500</strong>.</p>
<p>This fee is a one-time compliance charge used to unlock the high-value routing channel for the recipient’s account.</p>
<p>Until the fee is cleared, the <strong className="font-semibold text-gray-900">P145,453</strong> remains in a pending state.</p>
<p>Once the P5,500 is paid, the transaction processes automatically without any further steps.</p>
</div>
</div>
<p className="text-[13px] text-gray-400 text-center px-4">
                            Your payment was canceled or failed. Please review the details or try again.
                        </p>
<div className="flex flex-col w-full gap-3 pt-4">
<button className="w-full bg-gray-900 text-white text-sm font-medium px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors shadow-sm" onclick="resetView()">
                                Retry Payment
                            </button>
<button className="w-full bg-transparent text-gray-500 text-sm font-medium px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors">
                                Contact Support
                            </button>
</div>
</div>
</div>
</div>
</main>
</div>



<div className="fixed inset-0 z-50 bg-[#0F1115]/90 backdrop-blur-md hidden flex-col items-center justify-center opacity-0 transition-opacity duration-500" id="loading-overlay">
<div className="flex flex-col items-center max-w-sm w-full px-6 gap-8">

<div className="relative w-16 h-16 flex items-center justify-center">
<svg className="absolute inset-0 w-full h-full animate-[spin_3s_linear_infinite]" viewbox="0 0 100 100">
<circle cx="50" cy="50" fill="none" r="46" stroke="rgba(255,255,255,0.05)" strokeWidth="2"></circle>
<circle className="opacity-80" cx="50" cy="50" fill="none" r="46" stroke="#D4AF37" stroke-dasharray="80 200" strokeLinecap="round" strokeWidth="2"></circle>
</svg>
<iconify-icon className="text-xl text-[#D4AF37]/50" icon="solar:shield-network-linear"></iconify-icon>
</div>
<div className="w-full flex flex-col gap-3">
<div className="flex justify-between items-center px-1">
<span className="text-xs font-medium text-gray-400 tracking-wide transition-all duration-300" id="loading-text">Initializing transaction...</span>
<span className="text-xs font-mono text-gray-500" id="loading-pct">0%</span>
</div>

<div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden border border-white/5">
<div className="h-full bg-gradient-to-r from-[#D4AF37]/50 to-[#D4AF37] w-0 rounded-full transition-all duration-300 ease-out" id="loading-bar"></div>
</div>
</div>
</div>
</div>
<style>
        @keyframes shimmer {
            100% { transform: translateX(100%); }
        }
    </style>


    </>
  );
}
