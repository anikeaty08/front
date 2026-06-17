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

    /* ---------- Intro fade-up */
    document.querySelectorAll('#marketplaceScreen > section, header')
      .forEach((el, i) => {
        el.classList.add('opacity-0', 'translate-y-4', 'transition', 'duration-500');
        setTimeout(() => el.classList.remove('opacity-0', 'translate-y-4'), 200 + i * 120);
      });

    /* ---------- DOM */
    const mpScreen  = document.getElementById('marketplaceScreen');
    const puScreen  = document.getElementById('purchaseScreen');
    const wlScreen  = document.getElementById('walletScreen');

    const backBtn   = document.getElementById('backBtn');
    const walletBack= document.getElementById('walletBack');
    const walletBtn = document.getElementById('walletBtn');

    const confirmBtn  = document.getElementById('confirmBtn');
    const titleEl     = document.getElementById('purchaseTitle');
    const priceEl     = document.getElementById('purchasePrice');
    const imgEl       = document.getElementById('purchaseImg');

    const headerBalance = document.getElementById('headerBalance');
    const walletBalance = document.getElementById('walletBalance');

    let dropChart, spendChart;

    /* ---------- Helper slide */
    function slide(from, to) {
      from.style.transform = 'translateX(-100%)';
      to.style.transform   = 'translateX(0%)';
    }
    function slideBack(toHide, target=mpScreen) {
      toHide.style.transform = 'translateX(100%)';
      target.style.transform = 'translateX(0%)';
    }

    /* ---------- Purchase flow */
    const colorMap={
      emerald:{bg:'bg-emerald-600 hover:bg-emerald-500',ring:'focus-visible:ring-emerald-400/50',
               palette:['#34d399','#10b981','#059669','#047857','#065f46']},
      purple :{bg:'bg-purple-600 hover:bg-purple-500',ring:'focus-visible:ring-purple-400/50',
               palette:['#c084fc','#a855f7','#9333ea','#7e22ce','#6b21a8']},
      amber  :{bg:'bg-amber-500 hover:bg-amber-400', ring:'focus-visible:ring-amber-400/50',
               palette:['#fcd34d','#fbbf24','#f59e0b','#d97706','#b45309']}
    };

    document.querySelectorAll('.buy-crate').forEach(btn=>{
      btn.addEventListener('click',()=>{
        const {crate, price, color, img}=btn.dataset;
        titleEl.textContent = crate;
        priceEl.textContent = price;
        imgEl.src           = img;
        confirmBtn.className = `w-full py-3 rounded-lg text-center text-sm font-medium tracking-tight transition ${colorMap[color].bg} focus:outline-none ${colorMap[color].ring}`;

        const ctx=document.getElementById('dropChart').getContext('2d');
        const rar=['Common','Uncommon','Rare','Epic','Legendary'];
        const data=[40,30,20,9,1];
        dropChart && dropChart.destroy();
        dropChart=new Chart(ctx,{type:'bar',
          data:{labels:rar,datasets:[{data,backgroundColor:colorMap[color].palette}]},
          options:{responsive:true,plugins:{legend:{display:false}},
          scales:{y:{ticks:{color:'#a1a1aa'},grid:{color:'#27272a'}},
                  x:{ticks:{color:'#a1a1aa'},grid:{display:false}}}}
        });

        slide(mpScreen,puScreen);
      });
    });

    backBtn.addEventListener('click',()=>slideBack(puScreen));
    confirmBtn.addEventListener('click',()=>{
      confirmBtn.disabled=true;
      confirmBtn.textContent='Processing...';
      setTimeout(()=>{
        confirmBtn.textContent='Purchased ✔';
        // subtract price (demo)
        headerBalance.textContent=(parseFloat(headerBalance.textContent)-1).toFixed(2);
        walletBalance.innerHTML=headerBalance.textContent+'&nbsp;<span class="text-xl font-medium text-neutral-400">TON</span>';
        setTimeout(()=>{confirmBtn.disabled=false;confirmBtn.textContent='Confirm Purchase';backBtn.click();},1500);
      },1500);
    });

    /* ---------- Wallet flow */
    walletBtn.addEventListener('click',()=>{
      // on first open, build spending chart
      if(!spendChart){
        const ctx=document.getElementById('spendChart').getContext('2d');
        spendChart=new Chart(ctx,{type:'doughnut',
          data:{labels:['Chests','Gas','Fees','Other'],
                datasets:[{data:[65,15,10,10],backgroundColor:['#6d28d9','#059669','#eab308','#52525b']}]},
          options:{plugins:{legend:{labels:{color:'#a1a1aa',font:{size:12}}}},cutout:'60%'}});
      }
      slide(mpScreen,wlScreen);
    });
    walletBack.addEventListener('click',()=>slideBack(wlScreen));

  
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
      

<header className="pt-4 pb-3 px-5 border-b border-white/5 backdrop-blur-sm flex items-center justify-between gap-4 transition duration-500">
<div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
<span className="text-base font-semibold tracking-tight select-none">Prize Marketplace</span>

<div className="flex items-center gap-3">
<img alt="User avatar" className="w-10 h-10 object-cover rounded-full" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div>
<p className="text-sm tracking-tight font-medium">@cryptopepe</p>
<p className="text-xs text-neutral-400">Lvl 12 </p>
</div>
</div>
</div>

<button aria-label="Wallet balance" className="group relative hover:shadow-md transition focus:outline-none focus-visible:ring focus-visible:ring-emerald-500/50 rounded-full" id="walletBtn">
<div className="px-4 py-2 rounded-full bg-gradient-to-tr from-emerald-500/30 to-emerald-500/10 border border-emerald-400/40 flex items-center gap-2">
<svg className="lucide w-4 h-4 stroke-emerald-300" data-lucide="wallet"></svg>
<span className="text-sm font-semibold tracking-tight" id="headerBalance">19.74</span>
<span className="text-[11px] text-neutral-400">TON</span>
</div>
<span className="absolute -right-2 -top-2 bg-emerald-500 text-neutral-900 text-[10px] px-1.5 py-[1px] rounded-full">+</span>
</button>
</header>

<main className="flex-1 overflow-hidden relative">

<div className="absolute inset-0 overflow-y-auto will-change-transform transition-transform duration-500 translate-x-0" id="marketplaceScreen">

<section className="px-5 pt-6">
<h2 className="mb-4 text-lg font-semibold tracking-tight">Live Opens</h2>
<div className="flex gap-6 overflow-x-auto scrollbar-thin scrollbar-thumb-neutral-700 pb-2">

<template id="liveAvatar"></template>
<div className="flex-shrink-0 flex flex-col items-center gap-1">
<div className="relative">
<img alt="" className="w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<img alt="" className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full border-2 border-neutral-900" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
</div>
<span className="text-xs text-neutral-400">mario</span>
</div>
<div className="flex-shrink-0 flex flex-col items-center gap-1">
<div className="relative">
<img alt="" className="w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<img alt="" className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full border-2 border-neutral-900" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
</div>
<span className="text-xs text-neutral-400">lana</span>
</div>
<div className="flex-shrink-0 flex flex-col items-center gap-1">
<div className="relative">
<img alt="" className="w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
<img alt="" className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full border-2 border-neutral-900" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
</div>
<span className="text-xs text-neutral-400">pepe</span>
</div>
</div>
<div className="mt-5 border-t border-white/5"></div>
</section>

<section className="px-5 pt-6 space-y-6">
<h2 className="text-lg font-semibold tracking-tight">Available Chests</h2>
<div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

<div className="relative rounded-2xl overflow-hidden bg-emerald-900/30 border border-emerald-500/30 group">
<img alt="" className="w-full h-40 opacity-90 group-hover:scale-105 transition object-cover" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<ul className="flex items-center gap-1 px-3 py-2 bg-emerald-800/40 backdrop-blur-sm">
<li className="flex-1 h-8"><img alt="" className="h-full w-full object-cover rounded" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/></li>
<li className="flex-1 h-8"><img alt="" className="h-full w-full object-cover rounded" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/></li>
<li className="flex-1 h-8"><img alt="" className="h-full w-full object-cover rounded" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/></li>
</ul>
<div className="p-4 space-y-3">
<h3 className="text-base font-semibold tracking-tight">1 TON Chest</h3>
<div className="flex gap-2">
<button className="buy-crate flex-1 hover:bg-emerald-500 transition focus:outline-none focus-visible:ring focus-visible:ring-emerald-400/50 text-sm font-medium tracking-tight bg-emerald-600/90 rounded-lg pt-2 pb-2" data-color="emerald" data-crate="1 TON Chest" data-img="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80" data-price="1 TON">
                  Buy Crate
                </button>
<button className="px-3 py-2 rounded-lg bg-emerald-700 hover:bg-emerald-600 transition flex items-center justify-center focus:outline-none focus-visible:ring focus-visible:ring-emerald-400/50">
<svg className="lucide w-4 h-4" data-lucide="zap"></svg>
</button>
</div>
</div>
</div>

<div className="relative rounded-2xl overflow-hidden bg-purple-900/30 border border-purple-500/30 group">
<img alt="" className="w-full h-40 object-cover opacity-90 group-hover:scale-105 transition" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
<ul className="flex items-center gap-1 px-3 py-2 bg-purple-800/40 backdrop-blur-sm">
<li className="flex-1 h-8"><img alt="" className="h-full w-full object-cover rounded" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/></li>
<li className="flex-1 h-8"><img alt="" className="h-full w-full object-cover rounded" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/></li>
<li className="flex-1 h-8"><img alt="" className="h-full w-full object-cover rounded" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/></li>
</ul>
<div className="p-4 space-y-3">
<h3 className="text-base font-semibold tracking-tight">10 TON Chest</h3>
<div className="flex gap-2">
<button className="buy-crate flex-1 py-2 rounded-lg bg-purple-600/90 hover:bg-purple-500 transition text-sm font-medium tracking-tight focus:outline-none focus-visible:ring focus-visible:ring-purple-400/50" data-color="purple" data-crate="10 TON Chest" data-img="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80" data-price="10 TON">
                  Buy Crate
                </button>
<button className="px-3 py-2 rounded-lg bg-purple-700 hover:bg-purple-600 transition flex items-center justify-center focus:outline-none focus-visible:ring focus-visible:ring-purple-400/50">
<svg className="lucide w-4 h-4" data-lucide="zap"></svg>
</button>
</div>
</div>
</div>

<div className="relative rounded-2xl overflow-hidden bg-yellow-900/20 border border-amber-400/40 group">
<img alt="" className="w-full h-40 object-cover opacity-90 group-hover:scale-105 transition" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<ul className="flex items-center gap-1 px-3 py-2 bg-yellow-800/40 backdrop-blur-sm">
<li className="flex-1 h-8"><img alt="" className="h-full w-full object-cover rounded" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/></li>
<li className="flex-1 h-8"><img alt="" className="h-full w-full object-cover rounded" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/></li>
<li className="flex-1 h-8"><img alt="" className="h-full w-full object-cover rounded" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/></li>
</ul>
<div className="p-4 space-y-3">
<h3 className="text-base font-semibold tracking-tight">100 TON Chest</h3>
<div className="flex gap-2">
<button className="buy-crate flex-1 py-2 rounded-lg bg-amber-500/90 hover:bg-amber-400 transition text-sm font-medium tracking-tight focus:outline-none focus-visible:ring focus-visible:ring-amber-400/50" data-color="amber" data-crate="100 TON Chest" data-img="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80" data-price="100 TON">
                  Buy Crate
                </button>
<button className="px-3 py-2 rounded-lg bg-amber-600 hover:bg-amber-500 transition flex items-center justify-center focus:outline-none focus-visible:ring focus-visible:ring-amber-400/50">
<svg className="lucide w-4 h-4" data-lucide="zap"></svg>
</button>
</div>
</div>
</div>
</div>
</section>
<div className="h-20"></div>
</div>

<div className="absolute inset-0 overflow-y-auto px-6 py-8 translate-x-full transition-transform duration-500" id="purchaseScreen">
<button className="mb-6 flex items-center gap-2 text-sm font-medium tracking-tight hover:text-neutral-300 transition focus:outline-none focus-visible:ring focus-visible:ring-neutral-500/50" id="backBtn">
<svg className="lucide w-4 h-4" data-lucide="arrow-left"></svg> Back to Marketplace
      </button>
<div className="mx-auto max-w-md w-full rounded-3xl border border-white/5 bg-neutral-800/60 backdrop-blur-md p-6 space-y-6 shadow-xl" id="purchaseCard">
<div className="overflow-hidden rounded-2xl border border-white/10">
<img alt="" className="w-full h-48 object-cover" id="purchaseImg" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
</div>
<div className="space-y-2">
<h2 className="text-xl font-semibold tracking-tight" id="purchaseTitle">1 TON Chest</h2>
<p className="text-sm text-neutral-400">Confirm your purchase to receive one random prize from this chest.</p>
</div>
<div className="h-[180px]"><canvas id="dropChart"></canvas></div>
<div className="flex items-baseline justify-between pt-2">
<span className="text-sm text-neutral-400">Price</span>
<span className="text-lg font-semibold tracking-tight" id="purchasePrice">1 TON</span>
</div>
<button className="w-full py-3 rounded-lg text-center text-sm font-medium tracking-tight transition bg-emerald-600 hover:bg-emerald-500 focus:outline-none focus-visible:ring-emerald-400/50" id="confirmBtn">
          Confirm Purchase
        </button>
</div>
<div className="h-24"></div>
</div>

<div className="absolute inset-0 overflow-y-auto px-6 py-8 translate-x-full transition-transform duration-500" id="walletScreen">
<button className="mb-6 flex items-center gap-2 text-sm font-medium tracking-tight hover:text-neutral-300 transition focus:outline-none focus-visible:ring focus-visible:ring-neutral-500/50" id="walletBack">
<svg className="lucide w-4 h-4" data-lucide="arrow-left"></svg> Back to Marketplace
      </button>
<div className="mx-auto max-w-md w-full space-y-8">

<div className="rounded-3xl bg-neutral-800/60 border border-white/5 backdrop-blur-md p-6 flex flex-col gap-4">
<div className="flex items-center justify-between">
<h2 className="text-lg font-semibold tracking-tight">Wallet Balance</h2>
<svg className="lucide w-6 h-6 text-emerald-400" data-lucide="wallet"></svg>
</div>
<p className="text-4xl font-semibold tracking-tight text-emerald-300" id="walletBalance">19.74 <span className="text-xl font-medium text-neutral-400">TON</span></p>
<button className="self-start px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 transition text-sm font-medium tracking-tight focus:outline-none focus-visible:ring focus-visible:ring-emerald-400/50">
            Deposit TON
          </button>
</div>

<div className="rounded-3xl bg-neutral-800/60 border border-white/5 backdrop-blur-md p-6 space-y-4">
<h3 className="text-lg font-semibold tracking-tight">Recent Activity</h3>
<ul className="space-y-4">

<li className="flex items-start gap-3">
<div className="p-2 rounded-md bg-emerald-700/40">
<svg className="lucide w-4 h-4 text-emerald-300" data-lucide="gift"></svg>
</div>
<div className="flex-1">
<p className="text-sm font-medium tracking-tight">Claimed prize from 1 TON Chest</p>
<p className="text-xs text-neutral-400">3 min ago</p>
</div>
<span className="text-sm font-medium tracking-tight text-emerald-300">+0.5</span>
</li>
<li className="flex items-start gap-3">
<div className="p-2 rounded-md bg-amber-700/40">
<svg className="lucide w-4 h-4 text-amber-300" data-lucide="upload"></svg>
</div>
<div className="flex-1">
<p className="text-sm font-medium tracking-tight">Deposit</p>
<p className="text-xs text-neutral-400">1 h ago</p>
</div>
<span className="text-sm font-medium tracking-tight text-amber-300">+20</span>
</li>
<li className="flex items-start gap-3">
<div className="p-2 rounded-md bg-purple-700/40">
<svg className="lucide w-4 h-4 text-purple-300" data-lucide="shopping-bag"></svg>
</div>
<div className="flex-1">
<p className="text-sm font-medium tracking-tight">Bought 10 TON Chest</p>
<p className="text-xs text-neutral-400">2 h ago</p>
</div>
<span className="text-sm font-medium tracking-tight text-purple-300">-10</span>
</li>
</ul>
</div>

<div className="rounded-3xl bg-neutral-800/60 border border-white/5 backdrop-blur-md p-6">
<h3 className="mb-4 text-lg font-semibold tracking-tight">Spending Breakdown</h3>
<canvas height="220" id="spendChart"></canvas>
</div>
</div>
<div className="h-24"></div>
</div>
</main>




    </>
  );
}
