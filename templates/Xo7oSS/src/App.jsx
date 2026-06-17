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
      
<div className="relative rounded-[36px] shadow-xl border-[7px] border-[#202331] bg-[#1a1d27] w-[390px] h-[820px] flex flex-col overflow-hidden">
<div className="iphone-notch"></div>
<div className="flex justify-between items-center w-full px-6 pt-7 pb-2 text-white text-xs z-20">
<span>9:41</span>
<div className="flex gap-1.5">
<svg fill="none" height="10" width="16"><path d="M2 8C4 6 12 6 14 8" stroke="white" strokeLinecap="round" strokeWidth="1.6"></path></svg>
<svg fill="none" height="12" width="12"><rect height="6" rx="1.5" stroke="white" width="10" x="1" y="3"></rect><rect fill="white" height="2" rx="0.5" width="1" x="11" y="5"></rect></svg>
<svg fill="none" height="8" width="14"><rect fill="white" height="4" rx="2" width="14" x="0" y="2"></rect></svg>
</div>
</div>
<div className="flex items-center justify-between w-full px-5 py-3">
<button>
<svg fill="none" height="22" width="22"><path d="M15 6l-6 5 6 5" stroke="#fff" strokeLinecap="round" strokeWidth="2.1"></path></svg>
</button>
<h1 className="text-white text-lg font-semibold tracking-tight">Transactions</h1>
<div className="w-6"></div>
</div>
<div className="relative my-4 mx-auto w-[340px] h-[190px] rounded-[22px] bg-linear-card shadow-xl">
<div className="absolute top-0 left-0 w-full h-full rounded-[22px] border border-[#282b37] pointer-events-none"></div>
<div className="absolute right-5 top-4 bg-white bg-opacity-90 rounded-full px-2.5 py-1 text-xs text-[#23253e] font-semibold flex items-center gap-2 shadow-sm">
<svg fill="none" height="22" viewbox="0 0 32 32" width="22"><circle cx="16" cy="16" fill="#f7931a" r="16"></circle><path d="M21 13a2.75 2.75 0 0 0-2.5-2V9a1 1 0 1 0-2 0v2H15V9a1 1 0 0 0-2 0v2.06A2.75 2.75 0 0 0 10 13.6c0 1.4 1.1 2.5 2.5 2.7V18h6v-1.8a2.7 2.7 0 0 0 2.5-2.7z" fill="#fff"></path></svg>
        BTC Wallet
      </div>
<div className="px-7 pt-8">
<div className="font-medium text-sm text-[#c3c9d9]">Total Balance</div>
<div className="text-white text-[2rem] font-semibold mt-1 flex items-baseline gap-2">
          ₿ 0.6524
          <span className="text-xs font-normal text-[#a1a6b8]">≈ $44,250</span>
</div>
</div>
<div className="flex justify-between items-end w-full px-7 pb-7">
<div>
<div className="text-[#707897] text-xs">Wallet ID</div>
<div className="font-mono text-sm text-gray-200 tracking-wide">bc1q...z8yd</div>
</div>
<div className="text-xs font-semibold text-[#fff] bg-[#4e5cf3] bg-opacity-90 px-3 py-1 rounded-xl shadow-sm">Main</div>
</div>
</div>
<div className="flex-1 w-full bg-[#181a20] rounded-t-2xl px-5 pt-6 pb-8 overflow-y-auto">
<div className="mb-2 text-[#afb5c3] font-semibold text-xs">Today</div>
<div className="flex items-center justify-between mb-5">
<div className="flex items-center gap-3">
<div className="bg-[#3a41b5] rounded-xl w-11 h-11 flex items-center justify-center shadow-sm">
<svg fill="none" height="20" width="20"><path d="M7 13.5l3-3 3 3" stroke="#c4c8f6" strokeLinecap="round" strokeWidth="2"></path></svg>
</div>
<div>
<div className="text-[#e7eaf0] font-semibold text-sm">Sent BTC</div>
<div className="text-[11px] text-[#8389a6] font-medium">To: 1HeLLo...8HH</div>
</div>
</div>
<div className="font-semibold text-base text-[#f76e6e]">-₿0.0200</div>
</div>
<hr className="mb-3 border-[#262638]"/>
<div className="flex items-center justify-between mb-5">
<div className="flex items-center gap-3">
<div className="bg-[#30cfaa] rounded-xl w-11 h-11 flex items-center justify-center shadow-sm">
<svg fill="none" height="20" width="20"><path d="M13 8.5l-3 3-3-3" stroke="#e6f6f2" strokeLinecap="round" strokeWidth="2"></path></svg>
</div>
<div>
<div className="text-[#e7eaf0] font-semibold text-sm">Received BTC</div>
<div className="text-[11px] text-[#8389a6] font-medium">From: 3J98t...7Po</div>
</div>
</div>
<div className="font-semibold text-base text-[#52e997]">+₿0.0055</div>
</div>
<hr className="mb-3 border-[#262638]"/>
<div className="flex items-center justify-between mb-5">
<div className="flex items-center gap-3">
<div className="bg-[#4951f5] rounded-xl w-11 h-11 flex items-center justify-center shadow-sm">
<svg fill="none" height="20" width="20"><path d="M4.5 10h11M13.5 7l2 3-2 3" stroke="#d9dbfb" strokeLinecap="round" strokeWidth="2"></path></svg>
</div>
<div>
<div className="text-[#e7eaf0] font-semibold text-sm">Exchanged</div>
<div className="text-[11px] text-[#8389a6] font-medium">BTC ⇄ ETH</div>
</div>
</div>
<div className="font-semibold text-base text-[#8094ff]">-₿0.0300</div>
</div>
<hr className="mb-4 border-[#262638]"/>
<div className="mb-2 text-[#afb5c3] font-semibold text-xs">Yesterday</div>
<div className="flex items-center justify-between mb-5">
<div className="flex items-center gap-3">
<div className="bg-[#6475df] rounded-xl w-11 h-11 flex items-center justify-center shadow-sm">
<svg fill="none" height="20" width="20"><path d="M7 13.5l3-3 3 3" stroke="#ebedf9" strokeLinecap="round" strokeWidth="2"></path></svg>
</div>
<div>
<div className="text-[#e7eaf0] font-semibold text-sm">Sent BTC</div>
<div className="text-[11px] text-[#8389a6] font-medium">To: bc1q...0x5</div>
</div>
</div>
<div className="font-semibold text-base text-[#f76e6e]">-₿0.0050</div>
</div>
<hr className="mb-3 border-[#262638]"/>
<div className="flex items-center justify-between mb-2">
<div className="flex items-center gap-3">
<div className="bg-[#efb56e] rounded-xl w-11 h-11 flex items-center justify-center shadow-sm">
<svg fill="none" height="20" width="20"><circle cx="10" cy="10" r="8" stroke="#fffbe2" strokeWidth="2"></circle><path d="M10 6v4l3 2" stroke="#fffbe2" strokeLinecap="round" strokeWidth="2"></path></svg>
</div>
<div>
<div className="text-[#e7eaf0] font-semibold text-sm">Mining Reward</div>
<div className="text-[11px] text-[#8389a6] font-medium">Block #842001</div>
</div>
</div>
<div className="font-semibold text-base text-[#ffd676]">+₿0.0125</div>
</div>
</div>
<div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-24 h-1.5 bg-[#242644] rounded-full opacity-80"></div>
</div>

    </>
  );
}
