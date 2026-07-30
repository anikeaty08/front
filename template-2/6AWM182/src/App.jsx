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
      
    const $ = id => document.getElementById(id);
    const fmtNum = (v,d=0)=>Number(v).toLocaleString(undefined,{minimumFractionDigits:d,maximumFractionDigits:d});
    const fmtUsd = v=>'$'+fmtNum(v,2);
    const fmtPct = v=>(v>=0?'+':'')+fmtNum(v,2)+'%';

    /* Chart setup */
    const ctx = $('priceChart').getContext('2d');
    const priceData = {
      labels: [],
      datasets: [{
        data: [],
        borderColor: '#f97316',
        backgroundColor: 'rgba(249,115,22,0.08)',
        borderWidth: 2,
        tension: .35,
        pointRadius: 0
      }]
    };
    const priceChart = new Chart(ctx, {
      type: 'line',
      data: priceData,
      options: {
        scales: {
          y: {ticks:{color:'#f3f4f6'},grid:{color:'rgba(255,255,255,0.05)'}},
          x: {ticks:{color:'#9ca3af'},grid:{display:false}}
        },
        plugins:{legend:{display:false}},
        responsive:true,
        maintainAspectRatio:false
      }
    });

    /* Fetch data */
    const API='https://api.coingecko.com/api/v3/coins/bitcoin?localization=false&tickers=false&community_data=false&developer_data=false&sparkline=false';

    async function fetchMetrics() {
      try {
        const res = await fetch(API);
        const d   = await res.json();
        const m   = d.market_data;

        $('btcPrice').textContent = fmtUsd(m.current_price.usd);
        $('marketCap').textContent = fmtUsd(m.market_cap.usd);
        $('volume24h').textContent = fmtUsd(m.total_volume.usd);
        $('change24h').textContent = fmtPct(m.price_change_percentage_24h);
        $('supply').textContent = fmtNum(d.circulating_supply);

        const ts = new Date().toLocaleTimeString();
        priceData.labels.push(ts);
        priceData.datasets[0].data.push(m.current_price.usd);
        if (priceData.labels.length > 50) {
          priceData.labels.shift();
          priceData.datasets[0].data.shift();
        }
        priceChart.update();
      } catch (err) {
        console.error(err);
      }
    }

    fetchMetrics();
    setInterval(fetchMetrics, 30000);
  
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
      

<section className="relative isolate overflow-hidden">

<img alt="" className="absolute inset-0 -z-30 h-full w-full object-cover opacity-30" src="https://lemonchiffon-hornet-823603.hostingersite.com/lunarcrush-imgs/background.jpg?w=1080&q=80" />

<div className="pointer-events-none absolute inset-0 -z-20 opacity-50" style={{background: `hsla(209,100%,47%,0.1)`, backgroundImage: `radial-gradient(white 5%,transparent 0)`, backgroundSize: `16px 16px`}}></div>

<div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-radial from-black/60 via-black/40 to-gray-900"></div>
<div className="mx-auto max-w-6xl px-6 py-16 sm:py-24 md:py-32">

<div className="flex items-center justify-between">
<div className="flex items-center gap-4">
<img alt="Bitcoin logo" className="h-[140px] w-[140px] object-cover" src="https://lemonchiffon-hornet-823603.hostingersite.com/lunarcrush-imgs/bitcoin-avatar.png?w=1080&q=80" />
<div className="flex flex-col">
<span className="text-4xl sm:text-5xl font-medium tracking-tight text-slate-50">Bitcoin</span>
<span className="text-3xl font-normal tracking-tight text-gray-500">BTC</span>
</div>
</div>
<span className="text-lg font-medium text-slate-50">LunarCrush</span>
</div>

<h1 className="mt-12 text-6xl font-semibold tracking-tight sm:text-7xl md:text-9xl" id="btcPrice">$105,206.00</h1>

<div className="mt-12 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-12">
<div className="flex items-center justify-between border-b border-white/10 pb-4">
<span className="text-xl font-normal text-gray-400">Market Cap</span>
<span className="text-xl font-normal" id="marketCap">$2,090,390,084,144.00</span>
</div>
<div className="flex items-center justify-between border-b border-white/10 pb-4">
<span className="text-xl font-normal text-gray-400">24h Volume</span>
<span className="text-xl font-normal" id="volume24h">$53,889,944,282.00</span>
</div>
<div className="flex items-center justify-between border-b border-white/10 pb-4">
<span className="text-xl font-normal text-gray-400">24h Change</span>
<span className="text-xl font-normal" id="change24h">-1.47%</span>
</div>
<div className="flex items-center justify-between border-b border-white/10 pb-4">
<span className="text-xl font-normal text-gray-400">Circulating Supply</span>
<span className="text-xl font-normal" id="supply">NaN</span>
</div>
</div>

<div className="mt-16 h-64">
<canvas className="w-full h-full" id="priceChart"></canvas>
</div>
</div>
</section>




    </>
  );
}
