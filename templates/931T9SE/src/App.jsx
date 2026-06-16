import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    lucide.createIcons({ attrs: { "stroke-width": 1.5, stroke: "currentColor" } });

    const methods = document.querySelectorAll('.method-btn');
    const amounts = document.querySelectorAll('.amount-btn');
    const payBtn = document.getElementById('payBtn');

    let selectedMethod = null;
    let selectedAmount = null;

    methods.forEach(btn => {
      btn.addEventListener('click', () => {
        methods.forEach(b => b.classList.remove('ring-2', 'ring-slate-900'));
        btn.classList.add('ring-2', 'ring-slate-900');
        selectedMethod = btn.dataset.method;
        togglePay();
      });
    });

    amounts.forEach(btn => {
      btn.addEventListener('click', () => {
        amounts.forEach(b => b.classList.remove('ring-2', 'ring-slate-900'));
        btn.classList.add('ring-2', 'ring-slate-900');
        selectedAmount = btn.dataset.amount;
        togglePay();
      });
    });

    function togglePay() {
      payBtn.disabled = !(selectedMethod && selectedAmount);
    }

    payBtn.addEventListener('click', () => {
      alert(`Processing ${selectedMethod} payment of $${selectedAmount}...`);
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="w-full max-w-xs bg-white shadow-xl rounded-2xl overflow-hidden ring-1 ring-slate-200 animate-[fadeIn_0.8s_ease-out]" id="card">

<div className="flex items-center justify-between px-4 py-2 bg-slate-50 border-b border-slate-200">
<div className="flex items-center gap-2 text-sm">
<i className="w-4 h-4 text-slate-600" data-lucide="mail"></i>
<span className="font-medium text-slate-800">john.doe@example.com</span>
</div>
<button className="text-xs font-medium text-slate-600 hover:text-slate-900 underline">
        Change
      </button>
</div>

<div className="relative group">
<img alt="Sky with Clouds" className="w-full h-36 object-cover transition duration-300 group-hover:scale-105" src="https://images.unsplash.com/photo-1506812574058-fc75fa93fead?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition duration-300"></div>

<div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex items-center justify-center w-24 h-24 rounded-full bg-white shadow-md ring-1 ring-slate-200">
<i className="w-12 h-12 text-slate-900" data-lucide="plane"></i>
</div>
</div>

<div className="pt-16 px-6 pb-6 space-y-4 text-center">
<div>
<h1 className="text-xl font-semibold tracking-tight">CommunityAviation.ai</h1>
<p className="mt-1 text-sm text-slate-600">
          The best and only AI for general aviation giving you live weather and flight planning
        </p>
<div className="mt-3 flex items-center justify-center gap-4 text-xs text-slate-600">
<div className="flex items-center gap-1">
<i className="w-4 h-4" data-lucide="users"></i>
<span className="font-medium text-slate-800">3,128</span>
</div>
<div className="flex items-center gap-1">
<i className="w-4 h-4 text-yellow-500" data-lucide="star"></i>
<span className="font-medium text-slate-800">4.8</span>
<span>(512)</span>
</div>
</div>
</div>
<div className="flex items-center justify-center gap-2 text-sm text-slate-600">
<span>Price/prompt:</span>
<span className="font-medium text-slate-800">$0.01 – $0.10</span>
</div>

<div className="pt-2">
<h2 className="text-sm font-medium tracking-tight mb-2">Payment Method</h2>
<div className="grid grid-cols-4 gap-2" id="methods">
<button className="method-btn flex flex-col items-center justify-center gap-1 p-2 border border-slate-200 rounded-lg hover:border-slate-400 transition" data-method="card">
<i className="w-5 h-5" data-lucide="credit-card"></i>
<span className="text-xs">Card</span>
</button>
<button className="method-btn flex flex-col items-center justify-center gap-1 p-2 border border-slate-200 rounded-lg hover:border-slate-400 transition" data-method="apple">
<svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewbox="0 0 448 512">
<path d="M350.5 129.4c-26.4 31.3-56.9 42.2-88.2 36.7-3-29 8.4-58.4 29.5-81.8 21.6-23.9 51.9-36.8 83.3-35 3.1 28.5-7.9 57.1-24.6 80.1zM448 368c-3.9 8.7-7.5 16.9-11.5 24.7-21.5 41.6-48.4 82.1-86.6 91.4-37 9.1-49.1-24.4-91.3-24.4-42 0-54.9 24.4-91.7 24.4-37 0-62.9-38.5-85-79C55.5 345.2 24.6 254.5 63.6 184.3 91.8 135.6 136 111.7 181 108c34.4-2.8 56.7 19.3 91.9 19.3 34.7 0 55.9-19.3 91.9-19.3 39 0 76.5 21.9 104.3 59.9-3.3 2.1-65 38.5-65 114.7 0 90 80 120.7 84.9 125.9z"></path>
</svg>
<span className="text-xs">Apple Pay</span>
</button>
<button className="method-btn flex flex-col items-center justify-center gap-1 p-2 border border-slate-200 rounded-lg hover:border-slate-400 transition" data-method="telegram">
<i className="w-5 h-5" data-lucide="send"></i>
<span className="text-xs">Stars</span>
</button>
<button className="method-btn flex flex-col items-center justify-center gap-1 p-2 border border-slate-200 rounded-lg hover:border-slate-400 transition" data-method="crypto">
<i className="w-5 h-5" data-lucide="bitcoin"></i>
<span className="text-xs">Crypto</span>
</button>
</div>
</div>

<div className="pt-4">
<h2 className="text-sm font-medium tracking-tight mb-2">Amount</h2>
<div className="flex gap-3" id="amounts">
<button className="amount-btn flex-1 py-2 border border-slate-200 rounded-lg text-sm hover:border-slate-400 transition" data-amount="5">
            $5
          </button>
<button className="amount-btn flex-1 py-2 border border-slate-200 rounded-lg text-sm hover:border-slate-400 transition" data-amount="10">
            $10
          </button>
<button className="amount-btn flex-1 py-2 border border-slate-200 rounded-lg text-sm hover:border-slate-400 transition" data-amount="50">
            $50
          </button>
</div>
</div>

<button className="w-full mt-4 py-3 bg-slate-900 text-white text-sm font-medium rounded-lg disabled:opacity-40 disabled:pointer-events-none transition hover:bg-slate-800" id="payBtn">
        Pay
      </button>
<p className="text-center text-xs text-slate-500">payment via AirPT</p>
</div>
</div>


    </>
  );
}
