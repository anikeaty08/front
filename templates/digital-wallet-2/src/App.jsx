import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            const okBtn = document.getElementById('ok-btn');
            const popup = document.getElementById('popup');
            const overlay = document.getElementById('overlay');
            const statusText = document.getElementById('payment-status-text');
            const statusDot = document.getElementById('payment-status-dot');

            okBtn.addEventListener('click', () => {
                // Hide popup and overlay
                popup.style.opacity = '0';
                popup.style.transform = 'translate(-50%, -45%) scale(0.95)';
                popup.style.pointerEvents = 'none';
                
                overlay.style.opacity = '0';
                overlay.style.pointerEvents = 'none';
                
                // Update Screen 2 state behind
                setTimeout(() => {
                    statusText.textContent = 'Payment Failed';
                    statusText.classList.remove('text-amber-500');
                    statusText.classList.add('text-red-500');
                    
                    statusDot.classList.remove('bg-amber-500');
                    statusDot.classList.add('bg-red-500');
                }, 150);
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="px-8 py-5 border-b border-neutral-900/80 flex items-center w-full sticky top-0 bg-[#000000]/80 backdrop-blur-md z-30">
<div className="flex items-center gap-2 text-neutral-50">
<iconify-icon height="22" icon="solar:wallet-linear" width="22"></iconify-icon>
<span className="text-sm tracking-tight font-medium uppercase tracking-[0.1em]">Apple Pay Wallet</span>
</div>
</header>

<main className="flex-1 w-full max-w-7xl mx-auto p-6 md:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 relative z-10">

<div className="lg:col-span-5 flex flex-col gap-6">

<div className="wallet-card-bg rounded-3xl p-7 md:p-8 flex flex-col justify-between aspect-[1.6/1] overflow-hidden text-white relative">
<div className="wallet-card-texture"></div>
<div className="relative z-10 flex justify-between items-start">
<div>
<p className="text-xs text-neutral-400 font-medium mb-1">Wallet Balance</p>
<h2 className="text-4xl tracking-tight font-semibold">$3,200.00 <span className="text-xl text-neutral-400 font-medium tracking-normal">CAD</span></h2>
</div>
<div className="bg-white/10 backdrop-blur-sm rounded-full px-3 py-1 border border-white/10 flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.8)]"></div>
<span className="text-xs font-medium">Active</span>
</div>
</div>
<div className="relative z-10 flex justify-between items-end">
<div>
<p className="text-xs text-neutral-400 font-medium mb-1">Account Holder</p>
<p className="text-base font-medium tracking-tight">Dawson Pastion Harry</p>
</div>
<iconify-icon className="text-neutral-500" height="28" icon="solar:card-linear" width="28"></iconify-icon>
</div>
</div>

<div className="glass-panel rounded-2xl p-6">
<div className="grid grid-cols-2 gap-y-6 gap-x-4">
<div>
<p className="text-xs text-neutral-500 mb-1">Available Balance</p>
<p className="text-base font-medium text-neutral-100">$3,200.00 CAD</p>
</div>
<div>
<p className="text-xs text-neutral-500 mb-1">Currency</p>
<p className="text-base font-medium text-neutral-100">CAD</p>
</div>
<div>
<p className="text-xs text-neutral-500 mb-1">Last Updated</p>
<p className="text-base font-medium text-neutral-100">Just now</p>
</div>
</div>
</div>

<div className="glass-panel rounded-2xl p-6 mt-2">
<h3 className="text-sm font-semibold tracking-tight text-neutral-50 mb-5 flex items-center gap-2">
<iconify-icon className="text-neutral-400" height="18" icon="solar:routing-2-linear" width="18"></iconify-icon>
                    Payment Attempt
                </h3>
<div className="space-y-4">
<div className="flex justify-between items-center pb-4 border-b border-neutral-800/60">
<p className="text-sm text-neutral-500">Send To</p>
<p className="text-sm font-medium text-neutral-200">annette.trapper1987@icloud.com</p>
</div>
<div className="flex justify-between items-center pb-4 border-b border-neutral-800/60">
<p className="text-sm text-neutral-500">Amount</p>
<p className="text-sm font-medium text-neutral-200">$500.00 CAD</p>
</div>
<div className="flex justify-between items-center pt-1">
<p className="text-sm text-neutral-500">Status</p>
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-amber-500" id="payment-status-dot"></div>
<p className="text-sm font-medium text-amber-500" id="payment-status-text">Processing Failed</p>
</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-7">
<div className="glass-panel rounded-2xl p-6 md:p-8 h-full">
<h2 className="text-xl tracking-tight font-semibold text-neutral-50 mb-6">Recent Transactions</h2>
<div className="flex flex-col">

<div className="flex items-center justify-between py-4 border-b border-neutral-800/60 group hover:bg-neutral-900/30 transition-colors -mx-4 px-4 rounded-xl">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-300 group-hover:bg-neutral-800 transition-colors">
<iconify-icon height="20" icon="solar:arrow-left-down-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-neutral-100">Wallet Deposit</p>
<p className="text-xs text-neutral-500 mt-0.5">3 hours ago</p>
</div>
</div>
<p className="text-sm font-medium text-green-400">+$3,200.00 CAD</p>
</div>

<div className="flex items-center justify-between py-4 border-b border-neutral-800/60 group hover:bg-neutral-900/30 transition-colors -mx-4 px-4 rounded-xl">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-300 group-hover:bg-neutral-800 transition-colors">
<iconify-icon height="20" icon="solar:play-circle-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-neutral-100">Streaming Subscription</p>
<p className="text-xs text-neutral-500 mt-0.5">Yesterday</p>
</div>
</div>
<p className="text-sm font-medium text-neutral-300">-$12.99 CAD</p>
</div>

<div className="flex items-center justify-between py-4 group hover:bg-neutral-900/30 transition-colors -mx-4 px-4 rounded-xl">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-300 group-hover:bg-neutral-800 transition-colors">
<iconify-icon height="20" icon="solar:gas-station-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-neutral-100">Fuel Station Purchase</p>
<p className="text-xs text-neutral-500 mt-0.5">2 days ago</p>
</div>
</div>
<p className="text-sm font-medium text-neutral-300">-$64.20 CAD</p>
</div>
</div>
</div>
</div>
</main>

<div className="fixed inset-0 bg-black/60 z-40 transition-opacity duration-300" id="overlay"></div>
<div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-[380px] px-4 z-50 transition-all duration-300" id="popup">
<div className="apple-popup rounded-2xl p-6 flex flex-col items-center text-center">
<div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center mb-4 text-red-500">
<iconify-icon height="28" icon="solar:danger-circle-linear" width="28"></iconify-icon>
</div>
<h2 className="text-lg tracking-tight font-semibold text-neutral-50 mb-3">Payment Could Not Be Sent</h2>
<div className="text-sm text-neutral-400 space-y-3 mb-8 leading-relaxed">
<p>Apple Pay service notice.</p>
<p>The recipient account<br/><span className="text-neutral-200 font-medium select-all">annette.trapper1987@icloud.com</span><br/>is currently not fully activated to receive payments.</p>
<p>This wallet requires an account upgrade before it can receive transfers.</p>
<p>Please ask the recipient to activate their wallet to complete this payment.</p>
</div>
<button className="w-full bg-neutral-100 hover:bg-white text-neutral-950 py-3.5 rounded-xl text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 focus:ring-offset-[#1c1c1e]" id="ok-btn">
                OK
            </button>
</div>
</div>


    </>
  );
}
