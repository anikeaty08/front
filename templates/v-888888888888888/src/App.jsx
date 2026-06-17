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



      const sendButton = document.getElementById('sendButton');
      const sendForm = document.getElementById('sendForm');
      const closeSendForm = document.getElementById('closeSendForm');

      const swapButton = document.getElementById('swapButton');
      const swapForm = document.getElementById('swapForm');
      const closeSwapForm = document.getElementById('closeSwapForm');

      const sopAmountInput = document.getElementById('sopAmount');
      const solReceiveInput = document.getElementById('solReceive');
      const confirmSwap = document.getElementById('confirmSwap');
      const swapError = document.getElementById('swapError');

      const depositInfo = document.getElementById('depositInfo');
      const closeDepositInfo = document.getElementById('closeDepositInfo');
      const depositButtonTop = document.getElementById('depositButtonTop');
      const depositButtonBottom = document.getElementById('depositButtonBottom');

      const RATE_SOP_TO_SOL = 0.55 / 100; // 100 SOP = 0.55 SOL

      if (sendButton && sendForm) {
        sendButton.addEventListener('click', () => {
          sendForm.classList.remove('hidden');
          if (swapForm) swapForm.classList.add('hidden');
          if (depositInfo) depositInfo.classList.add('hidden');
        });
      }

      if (closeSendForm && sendForm) {
        closeSendForm.addEventListener('click', () => {
          sendForm.classList.add('hidden');
        });
      }

      if (swapButton && swapForm) {
        swapButton.addEventListener('click', () => {
          swapForm.classList.remove('hidden');
          if (sendForm) sendForm.classList.add('hidden');
          if (depositInfo) depositInfo.classList.add('hidden');
        });
      }

      if (closeSwapForm && swapForm) {
        closeSwapForm.addEventListener('click', () => {
          swapForm.classList.add('hidden');
        });
      }

      if (sopAmountInput && solReceiveInput) {
        sopAmountInput.addEventListener('input', () => {
          const value = parseFloat(sopAmountInput.value || '0');
          const sol = value * RATE_SOP_TO_SOL;
          if (!isNaN(sol)) {
            solReceiveInput.value = sol.toFixed(6);
          } else {
            solReceiveInput.value = '';
          }
          if (swapError) {
            swapError.classList.add('hidden');
          }
        });
      }

      if (confirmSwap && solReceiveInput && sopAmountInput && swapError) {
        confirmSwap.addEventListener('click', () => {
          const sopVal = sopAmountInput.value.trim();
          const solVal = solReceiveInput.value.trim();
          if (sopVal !== '' || solVal !== '') {
            swapError.classList.remove('hidden');
            return;
          }
          swapError.classList.add('hidden');
        });
      }

      function openDepositInfo() {
        if (depositInfo) {
          depositInfo.classList.remove('hidden');
        }
        if (sendForm) sendForm.classList.add('hidden');
        if (swapForm) swapForm.classList.add('hidden');
      }

      if (depositButtonTop) {
        depositButtonTop.addEventListener('click', openDepositInfo);
      }

      if (depositButtonBottom) {
        depositButtonBottom.addEventListener('click', openDepositInfo);
      }

      if (closeDepositInfo && depositInfo) {
        closeDepositInfo.addEventListener('click', () => {
          depositInfo.classList.add('hidden');
        });
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
      
<div className="w-full max-w-md mx-auto px-6 py-8">

<div className="bg-slate-900/80 border border-slate-800 rounded-3xl shadow-xl backdrop-blur-lg overflow-hidden">

<div className="flex items-center justify-between px-6 pt-6">
<div className="flex flex-col gap-1">
<span className="text-xs font-medium text-slate-400 uppercase tracking-[0.2em]">
              Total Balance
            </span>
<div className="flex items-baseline gap-2">
<span className="text-3xl font-semibold tracking-tight">
                0
              </span>
<span className="text-sm font-medium text-slate-400">
                USDT
              </span>
</div>
</div>

<div className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/80 px-3 py-1">
<span className="inline-flex h-2 w-2 rounded-full bg-emerald-400"></span>
<span className="text-xs font-medium text-slate-300">
              Connected
            </span>
</div>
</div>

<div className="mt-6 px-4">
<div className="grid grid-cols-3 gap-2 bg-slate-900/60 border border-slate-800 rounded-2xl p-1">

<button className="flex flex-col items-center justify-center gap-1 rounded-xl py-2.5 text-xs font-medium text-slate-200 hover:bg-slate-800/80 transition-colors" id="sendButton" type="button">
<div className="flex items-center justify-center h-8 w-8 rounded-full bg-slate-800">
<iconify-icon className="text-slate-100" icon="solar:arrow-up-linear" style={{fontSize: '1.1rem', strokeWidth: '1.5'}}></iconify-icon>
</div>
<span>Send</span>
</button>

<button className="flex flex-col items-center justify-center gap-1 rounded-xl py-2.5 text-xs font-medium text-slate-200 bg-slate-100 text-slate-950 shadow-sm" id="depositButtonTop" type="button">
<div className="flex items-center justify-center h-8 w-8 rounded-full bg-slate-900/90">
<iconify-icon className="text-slate-100" icon="solar:arrow-down-linear" style={{fontSize: '1.1rem', strokeWidth: '1.5'}}></iconify-icon>
</div>
<span>Deposit</span>
</button>

<button className="flex flex-col gap-1 hover:bg-slate-800/80 transition-colors text-xs font-medium text-slate-200 rounded-xl pt-2.5 pb-2.5 gap-x-1 gap-y-1 items-center justify-center" id="swapButton" type="button">
<div className="flex items-center justify-center h-8 w-8 rounded-full bg-slate-800">
<iconify-icon className="text-slate-100" icon="solar:refresh-linear" style={{fontSize: '1.1rem', strokeWidth: '1.5'}}></iconify-icon>
</div>
<span>Swap</span>
</button>
</div>

<div className="mt-4 rounded-2xl border border-slate-800 bg-slate-900/80 px-4 py-4 space-y-3 hidden" id="sendForm">
<div className="flex items-center justify-between">
<span className="text-xs font-semibold tracking-tight text-slate-100">
                Send SOL
              </span>
<button className="text-[0.7rem] font-medium text-slate-400 hover:text-slate-200 transition-colors" id="closeSendForm" type="button">
                Close
              </button>
</div>
<div className="flex flex-col gap-1.5">
<label className="text-xs font-medium text-slate-400">
                Solana address
              </label>
<input className="w-full rounded-xl bg-slate-950/60 border border-slate-800 text-sm font-medium text-slate-100 placeholder:text-slate-500 px-3 py-2 focus:outline-none focus:border-slate-500 focus:ring-0" id="solAddress" placeholder="Enter Solana wallet address" type="text"/>
</div>
<div className="flex flex-col gap-1.5">
<label className="text-xs font-medium text-slate-400">
                Amount (SOL)
              </label>
<input className="w-full rounded-xl bg-slate-950/60 border border-slate-800 text-sm font-medium text-slate-100 placeholder:text-slate-500 px-3 py-2 focus:outline-none focus:border-slate-500 focus:ring-0" id="solAmount" min="0" placeholder="0.000" step="0.0001" type="number"/>
</div>
<button className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-slate-100 text-slate-950 text-sm font-semibold px-3 py-2 shadow-sm hover:bg-slate-200 transition-colors" id="withdrawButton" type="button">
<iconify-icon icon="solar:arrow-up-linear" style={{fontSize: '1rem', strokeWidth: '1.5'}}></iconify-icon>
<span>Withdraw</span>
</button>
</div>

<div className="mt-4 rounded-2xl border border-slate-800 bg-slate-900/80 px-4 py-4 space-y-3" id="swapForm">
<div className="flex items-center justify-between">
<span className="text-xs font-semibold tracking-tight text-slate-100">
                Swap SOP → SOL
              </span>
<button className="text-[0.7rem] font-medium text-slate-400 hover:text-slate-200 transition-colors" id="closeSwapForm" type="button">
                Close
              </button>
</div>
<div className="flex flex-col gap-1.5">
<label className="text-xs font-medium text-slate-400">
                From (SOP)
              </label>
<input className="placeholder:text-slate-500 focus:outline-none focus:border-slate-500 focus:ring-0 text-sm font-medium text-slate-100 bg-slate-950/60 w-full border-slate-800 border rounded-xl pt-2 pr-3 pb-2 pl-3" id="sopAmount" min="0" placeholder="0.000" step="0.0001" type="number"/>
</div>
<div className="flex flex-col gap-1.5">
<label className="text-xs font-medium text-slate-400 flex items-center justify-between">
<span className="">To (SOL)</span>
<span className="text-[0.7rem] font-medium text-slate-500">
                  100 SOP = 0.55 SOL
                </span>
</label>
<input className="w-full rounded-xl bg-slate-950/60 border border-slate-800 text-sm font-medium text-slate-100 placeholder:text-slate-500 px-3 py-2 focus:outline-none focus:border-slate-500 focus:ring-0" id="solReceive" placeholder="0.000" readonly="" type="text"/>
</div>

<div className="text-xs font-medium text-rose-200 bg-rose-500/10 border-rose-500/40 border rounded-xl pt-2 pr-3 pb-2 pl-3" id="swapError">fee: 0.002 SOL</div>
<button className="inline-flex gap-2 hover:bg-slate-200 transition-colors text-sm font-semibold text-slate-950 bg-slate-100 w-full rounded-xl pt-2 pr-3 pb-2 pl-3 shadow-sm gap-x-2 gap-y-2 items-center justify-center" id="confirmSwap" type="button">
<iconify-icon className="" icon="solar:refresh-linear" style={{fontSize: '1rem', strokeWidth: '1.5'}}></iconify-icon>
<span>Swap</span>
</button>
</div>

<div className="mt-4 rounded-2xl border border-slate-800 bg-slate-900/80 px-4 py-3 space-y-2 hidden" id="depositInfo">
<div className="flex items-center justify-between">
<span className="text-xs font-semibold tracking-tight text-slate-100">
                Deposit SOL
              </span>
<button className="text-[0.7rem] font-medium text-slate-400 hover:text-slate-200 transition-colors" id="closeDepositInfo" type="button">
                Close
              </button>
</div>
<p className="text-sm font-medium text-slate-300">
              Minimum 0.05 SOL Solana
            </p>
<div className="flex flex-col gap-1">
<span className="text-xs font-medium text-slate-400">
                Deposit address (Solana)
              </span>
<div className="w-full rounded-xl bg-slate-950/60 border border-slate-800 px-3 py-2 text-xs font-medium text-slate-100 break-all">
                7pF6JKgTpGjiqQr8Qea77sAKVqKM8y8S4R4f3hpDRniz
              </div>
</div>
</div>
</div>

<div className="mt-6 px-6 pb-6">
<div className="flex items-center justify-between mb-3">
<span className="text-xs font-medium text-slate-400 tracking-[0.18em] uppercase">
              Assets
            </span>
<button className="text-[0.7rem] font-medium text-slate-400 hover:text-slate-200 transition-colors">
              View all
            </button>
</div>
<div className="space-y-2.5">

<button className="w-full flex items-center justify-between rounded-2xl bg-slate-900/70 border border-slate-800 px-3.5 py-3 hover:border-slate-700 hover:bg-slate-900 transition-colors">
<div className="flex items-center gap-3">
<div className="flex bg-center text-xs font-semibold text-slate-950 tracking-tight bg-gradient-to-br from-sky-500 to-sky-300 w-8 h-8 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e4ecf682-c14a-46a4-82fd-6bfffbff7848_320w.png)] bg-cover rounded-full items-center justify-center"></div>
<div className="flex flex-col items-start">
<div className="flex items-center gap-1.5">
<span className="text-sm font-semibold tracking-tight">
                      SOL
                    </span>
<span className="text-[0.7rem] font-medium text-slate-400">
                      Solana
                    </span>
</div>
<span className="text-sm font-medium text-slate-200">
                    0.000
                  </span>
</div>
</div>
<div className="flex flex-col items-end gap-0.5">
<span className="text-xs font-medium text-slate-400">
                  ≈ 0.00 USDT
                </span>
<span className="text-[0.65rem] font-medium text-emerald-400/80">
                  • 0% portfolio
                </span>
</div>
</button>

<button className="w-full flex items-center justify-between rounded-2xl bg-slate-900/40 border border-slate-900 px-3.5 py-3 hover:border-slate-700 hover:bg-slate-900/70 transition-colors">
<div className="flex items-center gap-3">
<div className="flex text-xs font-semibold text-slate-950 tracking-tight bg-gradient-to-br from-fuchsia-500 to-amber-400 w-8 h-8 rounded-full items-center justify-center"></div>
<div className="flex flex-col items-start">
<div className="flex items-center gap-1.5">
<span className="text-sm font-semibold tracking-tight">
                      SOP
                    </span>
<span className="text-[0.7rem] font-medium text-slate-400">
                      SOP Token
                    </span>
</div>
<span className="text-sm font-medium text-slate-200">100</span>
</div>
</div>
<div className="flex flex-col items-end gap-0.5">
<span className="text-xs font-medium text-slate-400">
                  ≈ 0.00 USDT
                </span>
<span className="text-[0.65rem] font-medium text-emerald-400/80">
                  • 100% portfolio
                </span>
</div>
</button>
</div>

<div className="border-dashed flex gap-3 bg-slate-900/40 border-slate-800 border rounded-2xl mt-5 pt-3 pr-4 pb-3 pl-4 gap-x-3 gap-y-3 items-center justify-between">
<button className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 text-slate-950 text-xs font-semibold px-3 py-1.5 shadow-sm" id="depositButtonBottom" type="button">
<iconify-icon className="" icon="solar:arrow-down-linear" style={{fontSize: '1rem', strokeWidth: '1.5'}}></iconify-icon>
<span className="">Deposit</span>
</button>
</div>
</div>
</div>

<div className="mt-4 flex items-center justify-center">
<span className="text-[0.7rem] font-semibold tracking-[0.25em] text-slate-500 uppercase">
          SV
        </span>
</div>
</div>


    </>
  );
}
