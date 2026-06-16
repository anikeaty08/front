import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
    document.addEventListener('DOMContentLoaded', () => {
      if (window.lucide) lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
    });

    function clamp(val,min,max){ return Math.min(max, Math.max(min, Number(val)||0)); }

    // Mode switch
    const tabTrade = document.getElementById('tabTrade');
    const tabStrategies = document.getElementById('tabStrategies');
    const tabSlider = document.getElementById('tabSlider');
    const tradeMode = document.getElementById('tradeMode');
    const strategiesMode = document.getElementById('strategiesMode');
    const gridSetup = document.getElementById('gridSetup');

    function showMode(mode){
      if(mode==='trade'){
        tradeMode.classList.remove('hidden');
        strategiesMode.classList.add('hidden');
        gridSetup.classList.add('hidden');
        tabTrade.classList.remove('text-neutral-400');
        tabStrategies.classList.add('text-neutral-400');
        tabSlider.style.left = '0.25rem';
      }else{
        tradeMode.classList.add('hidden');
        strategiesMode.classList.remove('hidden');
        tabTrade.classList.add('text-neutral-400');
        tabStrategies.classList.remove('text-neutral-400');
        tabSlider.style.left = 'calc(50% + 4px - 0.25rem)';
      }
    }
    tabTrade.addEventListener('click', ()=>showMode('trade'));
    tabStrategies.addEventListener('click', ()=>showMode('strategies'));

    // Order type tabs
    const orderMarket = document.getElementById('orderMarket');
    const orderLimit = document.getElementById('orderLimit');
    const orderPro = document.getElementById('orderPro');
    const orderTypeSlider = document.getElementById('orderTypeSlider');
    function setOrderType(which){
      const positions = { market:'0.25rem', limit:'calc(33.333% + 4px - 0.25rem)', pro:'calc(66.666% + 4px - 0.25rem)' };
      orderTypeSlider.style.left = positions[which];
      [orderMarket, orderLimit, orderPro].forEach(el=>el.classList.add('text-neutral-400'));
      ({market:orderMarket, limit:orderLimit, pro:orderPro}[which]).classList.remove('text-neutral-400');
    }
    orderMarket.addEventListener('click', ()=>setOrderType('market'));
    orderLimit.addEventListener('click', ()=>setOrderType('limit'));
    orderPro.addEventListener('click', ()=>setOrderType('pro'));

    // Buy/Sell toggle
    const longBtn = document.getElementById('longBtn');
    const shortBtn = document.getElementById('shortBtn');
    const sideSlider = document.getElementById('sideSlider');
    let isLong = true;
    function setSide(long){
      isLong = long;
      if(long){
        sideSlider.style.left = '0.25rem';
        longBtn.classList.remove('text-neutral-400');
        shortBtn.classList.add('text-neutral-400');
        sideSlider.style.background = 'rgba(52,211,153,0.18)';
      }else{
        sideSlider.style.left = 'calc(50% + 4px - 0.25rem)';
        longBtn.classList.add('text-neutral-400');
        shortBtn.classList.remove('text-neutral-400');
        sideSlider.style.background = 'rgba(255,90,95,0.20)';
      }
    }
    longBtn.addEventListener('click', ()=>setSide(true));
    shortBtn.addEventListener('click', ()=>setSide(false));

    // Size slider + input sync
    const sizeSlider = document.getElementById('sizeSlider');
    const sizeInput = document.getElementById('sizeInput');
    sizeSlider.addEventListener('input', e => { sizeInput.value = e.target.value; });
    sizeInput.addEventListener('input', e => { sizeSlider.value = clamp(e.target.value, 0, 100); });

    // Asset dropdown
    const assetBtn = document.getElementById('assetBtn');
    const assetMenu = document.getElementById('assetMenu');
    assetBtn.addEventListener('click', (e)=>{ e.stopPropagation(); assetMenu.classList.toggle('hidden'); });
    document.querySelectorAll('#assetMenu [data-asset]').forEach(opt=>{
      opt.addEventListener('click', ()=>{
        assetBtn.querySelector('span.text-[12px]').textContent = opt.dataset.asset;
        assetMenu.classList.add('hidden');
      });
    });
    document.addEventListener('click', ()=>assetMenu.classList.add('hidden'));

    // Reduce-only toggle
    const reduceToggle = document.getElementById('reduceToggle');
    const reduceKnob = document.getElementById('reduceKnob');
    let reduceOnly = false;
    function setReduce(v){
      reduceOnly = v;
      reduceKnob.style.transform = v ? 'translate(14px, -50%)' : 'translate(0, -50%)';
      reduceToggle.querySelector('span').classList.toggle('bg-emerald-400/30', v);
      reduceToggle.querySelector('span').classList.toggle('ring-emerald-300/40', v);
    }
    reduceToggle.addEventListener('click', ()=>setReduce(!reduceOnly));

    // TP/SL expandable toggle
    const tpSlToggle = document.getElementById('tpSlToggle');
    const tpSlKnob = document.getElementById('tpSlKnob');
    const tpSlFields = document.getElementById('tpSlFields');
    let tpSlOn = false;
    tpSlToggle.addEventListener('click', ()=>{
      tpSlOn = !tpSlOn;
      tpSlKnob.style.transform = tpSlOn ? 'translate(14px, -50%)' : 'translate(0, -50%)';
      tpSlToggle.querySelector('span').classList.toggle('bg-emerald-400/30', tpSlOn);
      tpSlToggle.querySelector('span').classList.toggle('ring-emerald-300/40', tpSlOn);
      tpSlFields.classList.toggle('hidden', !tpSlOn);
    });

    const tpInput = document.getElementById('tpInput');
    const slInput = document.getElementById('slInput');
    [tpInput, slInput].forEach(el => el && el.addEventListener('input', ()=>{}));

    // Leverage modal flow
    const levModal = document.getElementById('levModal');
    const leverageOpen = document.getElementById('leverageOpen');
    const gridLevOpen = document.getElementById('gridLevOpen');
    const levClose = document.getElementById('levClose');
    const levConfirm = document.getElementById('levConfirm');
    const levSlider = document.getElementById('levSlider');
    const levValue = document.getElementById('levValue');
    const leverageLabel = document.getElementById('leverageLabel');
    const gridLevLabel = document.getElementById('gridLevLabel');
    let levTarget = 'trade';
    function openLev(target='trade'){
      levTarget = target;
      levModal.classList.remove('hidden');
    }
    function closeLev(){ levModal.classList.add('hidden'); }
    function setLev(val){
      levSlider.value = val;
      levValue.textContent = val+'x';
    }
    leverageOpen.addEventListener('click', ()=>openLev('trade'));
    gridLevOpen && gridLevOpen.addEventListener('click', ()=>openLev('grid'));
    levClose.addEventListener('click', closeLev);
    levSlider.addEventListener('input', e => setLev(e.target.value));
    document.querySelectorAll('[data-lev]').forEach(btn=>{
      btn.addEventListener('click', ()=>setLev(btn.dataset.lev));
    });
    levConfirm.addEventListener('click', ()=>{
      const v = levSlider.value+'x';
      if(levTarget==='trade'){ leverageLabel.textContent = v; } else { gridLevLabel.textContent = v; }
      closeLev();
    });

    // Strategies → Grid Setup open
    const botButtons = document.querySelectorAll('.botBtn');
    const gridTitle = document.getElementById('gridTitle');
    const gridBack = document.getElementById('gridBack');
    botButtons.forEach(b=>{
      b.addEventListener('click', ()=>{
        const name = b.getAttribute('data-bot') || 'Grid';
        gridTitle.textContent = name;
        document.getElementById('strategiesMode').classList.add('hidden');
        document.getElementById('gridSetup').classList.remove('hidden');
      });
    });
    gridBack.addEventListener('click', ()=>{
      document.getElementById('gridSetup').classList.add('hidden');
      document.getElementById('strategiesMode').classList.remove('hidden');
    });

    // Grid side toggle
    const gridSideSlider = document.getElementById('gridSideSlider');
    const gridLong = document.getElementById('gridLong');
    const gridNeutral = document.getElementById('gridNeutral');
    const gridShort = document.getElementById('gridShort');
    function setGridSide(which){
      const positions = { long: '0.25rem', neutral: 'calc(33.333% + 4px - 0.25rem)', short: 'calc(66.666% + 4px - 0.25rem)' };
      gridSideSlider.style.left = positions[which];
      [gridLong, gridNeutral, gridShort].forEach(el=>el.classList.add('text-neutral-400'));
      ({long:gridLong, neutral:gridNeutral, short:gridShort}[which]).classList.remove('text-neutral-400');
    }
    gridLong.addEventListener('click', ()=>setGridSide('long'));
    gridNeutral.addEventListener('click', ()=>setGridSide('neutral'));
    gridShort.addEventListener('click', ()=>setGridSide('short'));

    // Double range sync
    const lowerPrice = document.getElementById('lowerPrice');
    const upperPrice = document.getElementById('upperPrice');
    const rangeLow = document.getElementById('rangeLow');
    const rangeHigh = document.getElementById('rangeHigh');
    function syncLow(v){ 
      const lv = Math.min(Number(v), Number(rangeHigh.value)-10);
      rangeLow.value = lv; lowerPrice.value = lv; 
    }
    function syncHigh(v){ 
      const hv = Math.max(Number(v), Number(rangeLow.value)+10);
      rangeHigh.value = hv; upperPrice.value = hv; 
    }
    rangeLow.addEventListener('input', e=>syncLow(e.target.value));
    rangeHigh.addEventListener('input', e=>syncHigh(e.target.value));
    lowerPrice.addEventListener('input', e=>syncLow(e.target.value));
    upperPrice.addEventListener('input', e=>syncHigh(e.target.value));

    // Grid qty sync
    const gridQty = document.getElementById('gridQty');
    const gridQtyInput = document.getElementById('gridQtyInput');
    gridQty.addEventListener('input', e=> gridQtyInput.value = e.target.value);
    gridQtyInput.addEventListener('input', e=> gridQty.value = clamp(e.target.value, 2, 500));

    // Margin sync
    const marginSlider = document.getElementById('marginSlider');
    const marginInput = document.getElementById('marginInput');
    marginSlider.addEventListener('input', e=> marginInput.value = e.target.value);
    marginInput.addEventListener('input', e=> marginSlider.value = clamp(e.target.value, 0, 1000));

    // Start toggles
    const startInstant = document.getElementById('startInstant');
    const startPrice = document.getElementById('startPrice');
    startInstant.addEventListener('click', ()=>{
      startInstant.classList.add('bg-gradient-to-b','from-white/15','to-white/5');
      startPrice.classList.remove('bg-gradient-to-b','from-white/15','to-white/5'); startPrice.classList.add('text-neutral-400');
      startInstant.classList.remove('text-neutral-400');
    });
    startPrice.addEventListener('click', ()=>{
      startPrice.classList.add('bg-gradient-to-b','from-white/15','to-white/5');
      startInstant.classList.remove('bg-gradient-to-b','from-white/15','to-white/5'); startInstant.classList.add('text-neutral-400');
      startPrice.classList.remove('text-neutral-400');
    });

    // Mode toggles Arithmetic/Geometric
    const modeArithmetic = document.getElementById('modeArithmetic');
    const modeGeometric = document.getElementById('modeGeometric');
    modeArithmetic.addEventListener('click', ()=>{
      modeArithmetic.classList.add('bg-gradient-to-b','from-white/15','to-white/5'); modeArithmetic.classList.remove('text-neutral-400');
      modeGeometric.classList.remove('bg-gradient-to-b','from-white/15','to-white/5'); modeGeometric.classList.add('text-neutral-400');
    });
    modeGeometric.addEventListener('click', ()=>{
      modeGeometric.classList.add('bg-gradient-to-b','from-white/15','to-white/5'); modeGeometric.classList.remove('text-neutral-400');
      modeArithmetic.classList.remove('bg-gradient-to-b','from-white/15','to-white/5'); modeArithmetic.classList.add('text-neutral-400');
    });

    // Reserved margin toggle
    const reservedToggle = document.getElementById('reservedToggle');
    const reservedKnob = document.getElementById('reservedKnob');
    let reserved = false;
    reservedToggle.addEventListener('click', ()=>{
      reserved = !reserved;
      reservedKnob.style.transform = reserved ? 'translate(18px, -50%)' : 'translate(0, -50%)';
      reservedToggle.querySelector('span').classList.toggle('bg-emerald-400/30', reserved);
      reservedToggle.querySelector('span').classList.toggle('ring-emerald-300/40', reserved);
    });

    // Deposit tabs
    const depPerps = document.getElementById('depPerps');
    const depSpot = document.getElementById('depSpot');
    const depWithdraw = document.getElementById('depWithdraw');
    const depSlider = document.getElementById('depSlider');
    function setDepTab(which){
      const positions = { perps:'0.25rem', spot:'calc(33.333% + 4px - 0.25rem)', withdraw:'calc(66.666% + 4px - 0.25rem)' };
      depSlider.style.left = positions[which];
      [depPerps, depSpot, depWithdraw].forEach(el=>el.classList.add('text-neutral-400'));
      ({perps:depPerps, spot:depSpot, withdraw:depWithdraw}[which]).classList.remove('text-neutral-400');
    }
    depPerps.addEventListener('click', ()=>setDepTab('perps'));
    depSpot.addEventListener('click', ()=>setDepTab('spot'));
    depWithdraw.addEventListener('click', ()=>setDepTab('withdraw'));

    // Placeholder actions
    document.getElementById('startBot').addEventListener('click', ()=>{
      alert('Grid bot started (demo).');
    });

    // Defaults
    showMode('trade');
    setOrderType('market');
    setSide(true);
    setReduce(false);
    setLev(20);
    setGridSide('long');
    setDepTab('perps');
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<main className="mx-auto w-full max-w-[419px] px-3 py-4 sm:px-4 sm:py-5">
<section className="relative rounded-2xl bg-[rgba(8,10,14,0.72)] ring-1 ring-white/10 backdrop-blur-xl shadow-[0_10px_40px_-12px_rgba(0,0,0,0.6)] overflow-hidden">

<header className="relative px-3 py-2.5 sm:px-4 sm:py-3">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="h-6 w-6 rounded-md bg-gradient-to-br from-emerald-400/40 to-emerald-300/20 ring-1 ring-white/15 flex items-center justify-center">
<i className="w-4 h-4 text-emerald-200" data-lucide="sparkles"></i>
</div>
<h1 className="text-[16px] sm:text-[17px] font-semibold tracking-tight">Nimbus — Panel</h1>
</div>
<div className="flex items-center gap-1.5">


<button className="group inline-flex items-center gap-1.5 rounded-md bg-white/5 hover:bg-white/10 active:bg-white/15 transition-all px-2 py-1.5 ring-1 ring-white/10" id="leverageOpen">
<i className="w-4 h-4 text-emerald-300" data-lucide="gauge"></i>
<span className="text-[12px] font-medium tracking-tight"><span id="leverageLabel" style={{fontFamily: '\'Geist Mono\', ui-monospace, SFMono-Regular, Menlo, monospace', fontVariantNumeric: 'tabular-nums', fontWeight: '500'}}>20x</span></span>
</button>
</div>
</div>

<div className="mt-2">
<div className="relative grid grid-cols-2 rounded-md ring-1 ring-white/10 bg-white/5 p-1">
<button className="group relative z-10 text-center py-1.5 text-[12px] font-semibold tracking-tight" id="tabTrade">Trade</button>
<button className="group relative z-10 text-center py-1.5 text-[12px] font-semibold tracking-tight text-neutral-400" id="tabStrategies">Strategies</button>
<div className="absolute top-1 bottom-1 left-1 w-[calc(50%-4px)] rounded-md bg-white/10 backdrop-blur-md shadow-[inset_0_0_0_1px_rgba(255,255,255,0.10)] transition-all duration-200 ease-out" id="tabSlider"></div>
</div>
</div>
</header>

<div className="px-3 pb-3 sm:px-4 sm:pb-4">

<div className="divide-y divide-white/10" id="tradeMode">

<div className="py-2">
<div className="grid grid-cols-2 gap-2">

<div className="rounded-md bg-white/5 ring-1 ring-white/10 p-1">
<div className="relative grid grid-cols-3">
<button className="relative z-10 py-1.5 text-[12px] font-medium" id="orderMarket">Market</button>
<button className="relative z-10 py-1.5 text-[12px] font-medium text-neutral-400" id="orderLimit">Limit</button>
<button className="relative z-10 py-1.5 text-[12px] font-medium text-neutral-400" id="orderPro">Pro</button>
<div className="absolute top-1 bottom-1 left-1 w-[calc(33.333%-8px)] rounded-md bg-white/10 transition-all duration-200" id="orderTypeSlider"></div>
</div>
</div>

<div className="rounded-md bg-white/5 ring-1 ring-white/10 p-1">
<div className="grid grid-cols-2 relative">
<button className="relative z-10 py-1.5 text-[12px] font-medium" id="longBtn">Buy / Long</button>
<button className="relative z-10 py-1.5 text-[12px] font-medium text-neutral-400" id="shortBtn">Sell / Short</button>
<div className="absolute top-1 bottom-1 left-1 w-[calc(50%-8px)] rounded-md bg-emerald-400/15 shadow-[inset_0_0_0_1px_rgba(110,231,183,0.30)] transition-all duration-200 ease-out" id="sideSlider"></div>
</div>
</div>
</div>
</div>

<div className="py-2">
<div className="flex items-center justify-between">
<div className="text-[11px] text-neutral-400">
                Avail: <span className="text-emerald-200" style={{fontFamily: '\'Geist Mono\', ui-monospace', fontVariantNumeric: 'tabular-nums', fontWeight: '600'}}>196.73</span>
</div>
<div className="text-[11px] text-neutral-400">
                Pos: <span className="text-neutral-100" style={{fontFamily: '\'Geist Mono\', ui-monospace', fontVariantNumeric: 'tabular-nums', fontWeight: '600'}}>0.0000 ETH</span>
</div>
</div>
<div className="mt-1.5 flex items-center gap-2">

<div className="relative">
<button className="inline-flex items-center gap-1.5 rounded-md ring-1 ring-white/10 bg-[#0b0f14]/70 hover:bg-white/10 transition px-2 py-1.5" id="assetBtn">
<i className="w-4 h-4 text-neutral-300" data-lucide="coins"></i>
<span className="text-[12px] font-medium">ETH</span>
<i className="w-3.5 h-3.5 text-neutral-400" data-lucide="chevron-down"></i>
</button>
<div className="hidden absolute z-20 mt-1 w-[160px] rounded-md bg-[rgba(10,12,16,0.95)] ring-1 ring-white/10 shadow-lg p-1" id="assetMenu">
<button className="w-full text-left px-2 py-1.5 rounded-[6px] hover:bg-white/10 text-[12px]" data-asset="ETH">ETH</button>
<button className="w-full text-left px-2 py-1.5 rounded-[6px] hover:bg-white/10 text-[12px]" data-asset="BTC">BTC</button>
<button className="w-full text-left px-2 py-1.5 rounded-[6px] hover:bg-white/10 text-[12px]" data-asset="SOL">SOL</button>
</div>
</div>

<div className="flex-1">
<input id="sizeSlider" max="100" min="0" step="1" type="range" value="0"/>
</div>
<div className="w-[104px]">
<div className="flex items-center gap-1.5 rounded-md ring-1 ring-white/10 bg-[#0b0f14]/70 px-2 py-1.5">
<input className="w-full bg-transparent outline-none text-[12px] placeholder-neutral-500" id="sizeInput" max="100" min="0" step="1" style={{fontFamily: '\'Geist Mono\', ui-monospace', fontVariantNumeric: 'tabular-nums', fontWeight: '600'}} type="number" value="0"/>
<span className="text-[11px] text-neutral-400">%</span>
</div>
</div>
</div>
</div>

<div className="py-2">
<div className="flex items-center justify-between">

<button className="group inline-flex items-center gap-2 rounded-md px-2 py-1.5 ring-1 ring-white/10 bg-white/5 hover:bg-white/10 transition" id="reduceToggle">
<span className="relative inline-flex h-4 w-7 items-center rounded-full bg-white/10 ring-1 ring-white/10">
<span className="absolute left-0.5 top-1/2 -translate-y-1/2 h-3 w-3 rounded-full bg-neutral-300 transition-transform" id="reduceKnob"></span>
</span>
<span className="text-[12px] font-medium">Reduce Only</span>
</button>

<button className="group inline-flex items-center gap-2 rounded-md px-2 py-1.5 ring-1 ring-white/10 bg-white/5 hover:bg-white/10 transition" id="tpSlToggle">
<span className="relative inline-flex h-4 w-7 items-center rounded-full bg-white/10 ring-1 ring-white/10">
<span className="absolute left-0.5 top-1/2 -translate-y-1/2 h-3 w-3 rounded-full bg-neutral-300 transition-transform" id="tpSlKnob"></span>
</span>
<span className="text-[12px] font-medium">Take Profit / Stop Loss</span>
</button>
</div>

<div className="hidden mt-2 grid grid-cols-2 gap-2" id="tpSlFields">
<div className="rounded-md ring-1 ring-white/10 bg-[#0b0f14]/70 p-2">
<div className="flex items-center justify-between">
<span className="text-[11px] uppercase tracking-[0.02em] text-neutral-400">TP Price</span>
<button className="inline-flex items-center gap-1 text-[11px] text-emerald-300/95" id="tpTypeBtn">
                    Gain %
                    <i className="w-3.5 h-3.5" data-lucide="chevron-down"></i>
</button>
</div>
<input className="mt-1 w-full bg-transparent outline-none text-[12px] placeholder-neutral-600" id="tpInput" placeholder="e.g. 28750" style={{fontFamily: '\'Geist Mono\', ui-monospace', fontVariantNumeric: 'tabular-nums', fontWeight: '600'}} type="number"/>
</div>
<div className="rounded-md ring-1 ring-white/10 bg-[#0b0f14]/70 p-2">
<div className="flex items-center justify-between">
<span className="text-[11px] uppercase tracking-[0.02em] text-neutral-400">SL Price</span>
<button className="inline-flex items-center gap-1 text-[11px] text-red-300/95" id="slTypeBtn">
                    Loss %
                    <i className="w-3.5 h-3.5" data-lucide="chevron-down"></i>
</button>
</div>
<input className="mt-1 w-full bg-transparent outline-none text-[12px] placeholder-neutral-600" id="slInput" placeholder="e.g. 25200" style={{fontFamily: '\'Geist Mono\', ui-monospace', fontVariantNumeric: 'tabular-nums', fontWeight: '600'}} type="number"/>
</div>
</div>
</div>

<div className="py-2">
<button className="w-full group relative inline-flex items-center justify-center overflow-hidden rounded-lg px-3 py-2 text-[13px] font-semibold tracking-tight text-black opacity-60 cursor-not-allowed ring-1 ring-white/10" disabled="" id="placeOrder" style={{background: 'linear-gradient(180deg,#6EE7B7,#2CE39D)'}}>
<span className="relative z-10">Place Order</span>
</button>

<div className="mt-2 grid grid-cols-2 gap-x-3 gap-y-1 text-[11px]">
<div className="text-neutral-400">Liquidation Price</div>
<div className="text-neutral-100" style={{fontFamily: '\'Geist Mono\', ui-monospace', fontVariantNumeric: 'tabular-nums', fontWeight: '600'}}>N/A</div>
<div className="text-neutral-400">Order Value</div>
<div className="text-emerald-200" style={{fontFamily: '\'Geist Mono\', ui-monospace', fontVariantNumeric: 'tabular-nums', fontWeight: '600'}}>N/A</div>
<div className="text-neutral-400">Margin Required</div>
<div className="text-neutral-100" style={{fontFamily: '\'Geist Mono\', ui-monospace', fontVariantNumeric: 'tabular-nums', fontWeight: '600'}}>N/A</div>
<div className="text-neutral-400">Slippage</div>
<div className="text-neutral-100" style={{fontFamily: '\'Geist Mono\', ui-monospace', fontVariantNumeric: 'tabular-nums', fontWeight: '600'}}>Est 0% / Max 8.00%</div>
<div className="text-neutral-400">Fees</div>
<div className="text-neutral-100" style={{fontFamily: '\'Geist Mono\', ui-monospace', fontVariantNumeric: 'tabular-nums', fontWeight: '600'}}>0.0432% / 0.0144%</div>
</div>
</div>

<div className="py-2">

<div className="relative grid grid-cols-3 rounded-md ring-1 ring-white/10 bg-white/5 p-1">
<button className="relative z-10 py-1.5 text-[12px] font-medium" id="depPerps">Perps</button>
<button className="relative z-10 py-1.5 text-[12px] font-medium text-neutral-400" id="depSpot">Spot</button>
<button className="relative z-10 py-1.5 text-[12px] font-medium text-neutral-400" id="depWithdraw">Withdraw</button>
<div className="absolute top-1 bottom-1 left-1 w-[calc(33.333%-8px)] rounded-md bg-white/10 transition-all duration-200" id="depSlider"></div>
</div>

<div className="mt-2 flex items-center justify-between">
<div className="text-[12px] text-neutral-300">Account Equity</div>
<button className="inline-flex items-center gap-2 rounded-md px-2.5 py-1.5 text-[12px] font-medium text-black" style={{background: 'linear-gradient(180deg,#6EE7B7,#2CE39D)', boxShadow: '0 8px 20px -12px rgba(110,231,183,0.45)'}}>
<i className="w-4 h-4" data-lucide="download"></i>
                Deposit
              </button>
</div>

<div className="mt-1 grid grid-cols-2 gap-2">
<div className="flex items-center justify-between rounded-sm px-1.5 py-1 bg-white/0">
<div className="text-[11px] uppercase text-neutral-400">Spot</div>
<div className="text-[12px] text-neutral-100" style={{fontFamily: '\'Geist Mono\', ui-monospace', fontVariantNumeric: 'tabular-nums', fontWeight: '600'}}>$0.00</div>
</div>
<div className="flex items-center justify-between rounded-sm px-1.5 py-1 bg-white/0">
<div className="text-[11px] uppercase text-neutral-400">Perps</div>
<div className="text-[12px] text-emerald-200" style={{fontFamily: '\'Geist Mono\', ui-monospace', fontVariantNumeric: 'tabular-nums', fontWeight: '600'}}>$196.73</div>
</div>
</div>

<div className="mt-1 grid grid-cols-2 gap-x-3 gap-y-1 text-[11px]">
<div className="text-neutral-400">Balance</div>
<div className="text-neutral-100" style={{fontFamily: '\'Geist Mono\', ui-monospace', fontVariantNumeric: 'tabular-nums', fontWeight: '600'}}>$196.73</div>
<div className="text-neutral-400">Unrealized PNL</div>
<div className="text-neutral-100" style={{fontFamily: '\'Geist Mono\', ui-monospace', fontVariantNumeric: 'tabular-nums', fontWeight: '600'}}>$0.00</div>
<div className="text-neutral-400">Cross Margin Ratio</div>
<div className="text-neutral-100" style={{fontFamily: '\'Geist Mono\', ui-monospace', fontVariantNumeric: 'tabular-nums', fontWeight: '600'}}>0.00%</div>
<div className="text-neutral-400">Maintenance Margin</div>
<div className="text-neutral-100" style={{fontFamily: '\'Geist Mono\', ui-monospace', fontVariantNumeric: 'tabular-nums', fontWeight: '600'}}>$0.00</div>
<div className="text-neutral-400 col-span-1">Cross Account Leverage</div>
<div className="text-neutral-100 col-span-1" style={{fontFamily: '\'Geist Mono\', ui-monospace', fontVariantNumeric: 'tabular-nums', fontWeight: '600'}}>0.00x</div>
</div>
</div>
</div>

<div className="hidden space-y-3" id="strategiesMode">
<div className="rounded-lg bg-white/5 ring-1 ring-white/10 p-2.5 backdrop-blur-md">
<div className="flex items-center justify-between">
<h3 className="text-[12px] font-medium uppercase tracking-[0.02em] text-neutral-200">Pre-built Bots</h3>
<i className="w-4 h-4 text-emerald-300" data-lucide="bot"></i>
</div>
<div className="mt-2 grid grid-cols-2 gap-2">
<button className="botBtn group rounded-md bg-[#0b0f14]/70 ring-1 ring-white/10 p-2 hover:ring-emerald-300/40 transition" data-bot="Futures Grid">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-emerald-300" data-lucide="grid"></i>
<span className="text-[12px] font-medium tracking-tight">Futures Grid</span>
</div>
</button>
<button className="botBtn group rounded-md bg-[#0b0f14]/70 ring-1 ring-white/10 p-2 hover:ring-emerald-300/40 transition" data-bot="Spot Grid">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-emerald-300" data-lucide="grid-3x3"></i>
<span className="text-[12px] font-medium tracking-tight">Spot Grid</span>
</div>
</button>
<button className="botBtn group rounded-md bg-[#0b0f14]/70 ring-1 ring-white/10 p-2 hover:ring-emerald-300/40 transition" data-bot="Futures DCA">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-emerald-300" data-lucide="repeat"></i>
<span className="text-[12px] font-medium tracking-tight">Futures DCA</span>
</div>
</button>
<button className="botBtn group rounded-md bg-[#0b0f14]/70 ring-1 ring-white/10 p-2 hover:ring-emerald-300/40 transition" data-bot="Spot DCA">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-emerald-300" data-lucide="cycle"></i>
<span className="text-[12px] font-medium tracking-tight">Spot DCA</span>
</div>
</button>
<button className="botBtn group rounded-md bg-[#0b0f14]/70 ring-1 ring-white/10 p-2 hover:ring-emerald-300/40 transition" data-bot="Flywheel">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-emerald-300" data-lucide="wind"></i>
<span className="text-[12px] font-medium tracking-tight">Flywheel</span>
</div>
</button>
<button className="botBtn group rounded-md bg-[#0b0f14]/70 ring-1 ring-white/10 p-2 hover:ring-emerald-300/40 transition" data-bot="Smart Arbitrage">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-emerald-300" data-lucide="split"></i>
<span className="text-[12px] font-medium tracking-tight">Smart Arbitrage</span>
</div>
</button>
<button className="botBtn group rounded-md bg-[#0b0f14]/70 ring-1 ring-white/10 p-2 hover:ring-emerald-300/40 transition" data-bot="Recurring Buy">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-emerald-300" data-lucide="calendar-clock"></i>
<span className="text-[12px] font-medium tracking-tight">Recurring Buy</span>
</div>
</button>
<button className="botBtn group rounded-md bg-[#0b0f14]/70 ring-1 ring-white/10 p-2 hover:ring-emerald-300/40 transition" data-bot="TradingView Signal">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-emerald-300" data-lucide="signal-high"></i>
<span className="text-[12px] font-medium tracking-tight">TradingView Signal</span>
</div>
</button>
</div>
</div>
<div className="rounded-lg bg-white/5 ring-1 ring-white/10 p-2.5 backdrop-blur-md space-y-2">
<div className="flex items-center justify-between">
<h3 className="text-[12px] font-medium uppercase tracking-[0.02em] text-neutral-200">Customized</h3>
<button className="inline-flex items-center gap-1.5 rounded-md px-2 py-1.5 ring-1 ring-white/10 bg-white/5 hover:bg-white/10 transition">
<i className="w-4 h-4 text-emerald-300" data-lucide="plus"></i>
<span className="text-[12px] font-medium">Create Custom</span>
</button>
</div>
<p className="text-[12px] text-neutral-300 leading-5">
              This section will save bot settings, or customized bots using indicators to trigger buy or sell, or detect sideways conditions.
            </p>
<div className="rounded-md bg-[#0b0f14]/70 ring-1 ring-white/10 p-2 flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-neutral-300" data-lucide="bookmark"></i>
<div className="text-left">
<div className="text-[12px] font-medium tracking-tight">Saved example</div>
<div className="text-[11px] text-neutral-400">Indicators • Entry/Exit rules</div>
</div>
</div>
<span className="text-[11px] text-neutral-400" style={{fontFamily: '\'Geist Mono\', ui-monospace', fontVariantNumeric: 'tabular-nums', fontWeight: '500'}}>Draft</span>
</div>
</div>
</div>

<div className="hidden" id="gridSetup">
<div className="rounded-lg bg-white/5 ring-1 ring-white/10 p-2.5 backdrop-blur-md space-y-2.5">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<button className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition" id="gridBack">
<i className="w-4 h-4" data-lucide="arrow-left"></i>
</button>
<h3 className="text-[14px] font-semibold tracking-tight" id="gridTitle">Futures Grid</h3>
</div>
<button className="inline-flex items-center gap-1.5 rounded-md px-2 py-1.5 ring-1 ring-white/10 bg-white/5 hover:bg-white/10 transition" id="gridLevOpen">
<i className="w-4 h-4 text-emerald-300" data-lucide="gauge"></i>
<span className="text-[12px] font-medium"><span id="gridLevLabel" style={{fontFamily: '\'Geist Mono\', ui-monospace', fontVariantNumeric: 'tabular-nums', fontWeight: '500'}}>10x</span></span>
</button>
</div>
<div className="rounded-md ring-1 ring-white/10 bg-[#0b0f14]/70 p-1">
<div className="grid grid-cols-3 relative">
<button className="relative z-10 py-1.5 text-[12px] font-medium" id="gridLong">Long</button>
<button className="relative z-10 py-1.5 text-[12px] font-medium text-neutral-400" id="gridNeutral">Neutral</button>
<button className="relative z-10 py-1.5 text-[12px] font-medium text-neutral-400" id="gridShort">Short</button>
<div className="absolute top-1 bottom-1 left-1 w-[calc(33.333%-8px)] rounded-md bg-white/10 transition-all duration-200" id="gridSideSlider"></div>
</div>
</div>
<div className="rounded-md ring-1 ring-white/10 bg-[#0b0f14]/70 p-2 space-y-2">
<div className="flex items-center justify-between">
<span className="text-[12px] font-medium uppercase tracking-[0.02em] text-neutral-200">Price Range</span>
<button className="inline-flex items-center gap-1 text-[11px] text-neutral-400">
<i className="w-3.5 h-3.5" data-lucide="help-circle"></i>
<span>sync chart</span>
</button>
</div>
<div className="flex items-center gap-2">
<div className="flex-1 rounded-md ring-1 ring-white/10 bg-white/5 px-2 py-1.5">
<label className="text-[10px] uppercase text-neutral-500">Lower</label>
<input className="w-full bg-transparent outline-none text-[12px]" id="lowerPrice" style={{fontFamily: '\'Geist Mono\', ui-monospace', fontVariantNumeric: 'tabular-nums', fontWeight: '500'}} type="number" value="52000"/>
</div>
<div className="flex-1 rounded-md ring-1 ring-white/10 bg-white/5 px-2 py-1.5">
<label className="text-[10px] uppercase text-neutral-500">Upper</label>
<input className="w-full bg-transparent outline-none text-[12px]" id="upperPrice" style={{fontFamily: '\'Geist Mono\', ui-monospace', fontVariantNumeric: 'tabular-nums', fontWeight: '500'}} type="number" value="60000"/>
</div>
</div>
<div className="relative pt-2">
<input className="absolute inset-x-0 -top-1" id="rangeLow" max="65000" min="40000" step="10" type="range" value="52000"/>
<input id="rangeHigh" max="65000" min="40000" step="10" type="range" value="60000"/>
</div>
</div>
<div className="rounded-md ring-1 ring-white/10 bg-[#0b0f14]/70 p-2 space-y-2">
<div className="flex items-center justify-between">
<span className="text-[12px] font-medium uppercase tracking-[0.02em] text-neutral-200">Grid Quantity</span>
<span className="text-[12px] text-neutral-400">2–500</span>
</div>
<div className="flex items-center gap-2">
<input className="flex-1" id="gridQty" max="500" min="2" step="1" type="range" value="25"/>
<div className="w-[86px] rounded-md ring-1 ring-white/10 bg-white/5 px-2 py-1.5">
<input className="w-full bg-transparent outline-none text-[12px]" id="gridQtyInput" max="500" min="2" step="1" style={{fontFamily: '\'Geist Mono\', ui-monospace', fontVariantNumeric: 'tabular-nums', fontWeight: '500'}} type="number" value="25"/>
</div>
</div>
</div>
<div className="rounded-md ring-1 ring-white/10 bg-[#0b0f14]/70 p-2 space-y-2">
<div className="flex items-center justify-between">
<span className="text-[12px] font-medium uppercase tracking-[0.02em] text-neutral-200">Invested Margin</span>
<span className="text-[12px] text-neutral-400">USDT</span>
</div>
<div className="flex items-center gap-2">
<input className="flex-1" id="marginSlider" max="1000" min="0" step="10" type="range" value="250"/>
<div className="w-[110px] rounded-md ring-1 ring-white/10 bg-white/5 px-2 py-1.5">
<input className="w-full bg-transparent outline-none text-[12px]" id="marginInput" max="1000" min="0" step="10" style={{fontFamily: '\'Geist Mono\', ui-monospace', fontVariantNumeric: 'tabular-nums', fontWeight: '500'}} type="number" value="250"/>
</div>
</div>
<div className="flex items-center justify-between">
<div className="text-[12px] text-neutral-400">Balance: <span style={{fontFamily: '\'Geist Mono\', ui-monospace', fontVariantNumeric: 'tabular-nums', fontWeight: '500'}}>196.73</span> USDT</div>
<button className="inline-flex items-center gap-1.5 rounded-md px-2 py-1.5 ring-1 ring-white/10 bg-white/5 hover:bg-white/10 transition">
<i className="w-4 h-4 text-emerald-300" data-lucide="download"></i>
<span className="text-[12px] font-medium">Deposit</span>
</button>
</div>
</div>
<div className="grid grid-cols-2 gap-2">
<div className="rounded-md ring-1 ring-white/10 bg-[#0b0f14]/70 p-2">
<div className="text-[11px] uppercase text-neutral-400">Start</div>
<div className="mt-1 grid grid-cols-2 rounded-md bg-white/5 ring-1 ring-white/10 p-1">
<button className="py-1.5 text-[12px] font-medium rounded bg-gradient-to-b from-white/15 to-white/5" id="startInstant">Instant</button>
<button className="py-1.5 text-[12px] font-medium text-neutral-400 rounded" id="startPrice">Price (P0)</button>
</div>
</div>
<div className="rounded-md ring-1 ring-white/10 bg-[#0b0f14]/70 p-2">
<div className="text-[11px] uppercase text-neutral-400">Grid Mode</div>
<div className="mt-1 grid grid-cols-2 rounded-md bg-white/5 ring-1 ring-white/10 p-1">
<button className="py-1.5 text-[12px] font-medium rounded bg-gradient-to-b from-white/15 to-white/5" id="modeArithmetic">Arithmetic</button>
<button className="py-1.5 text-[12px] font-medium text-neutral-400 rounded" id="modeGeometric">Geometric</button>
</div>
</div>
</div>
<div className="grid grid-cols-2 gap-2">
<div className="rounded-md ring-1 ring-white/10 bg-[#0b0f14]/70 p-2">
<div className="flex items-center justify-between">
<span className="text-[11px] uppercase tracking-[0.02em] text-neutral-400">TP</span>
<span className="text-[11px] text-neutral-500">optional</span>
</div>
<input className="mt-1 w-full bg-transparent outline-none text-[12px]" id="gridTp" placeholder="%" style={{fontFamily: '\'Geist Mono\', ui-monospace', fontVariantNumeric: 'tabular-nums', fontWeight: '500'}} type="number"/>
</div>
<div className="rounded-md ring-1 ring-white/10 bg-[#0b0f14]/70 p-2">
<div className="flex items-center justify-between">
<span className="text-[11px] uppercase tracking-[0.02em] text-neutral-400">SL</span>
<span className="text-[11px] text-neutral-500">optional</span>
</div>
<input className="mt-1 w-full bg-transparent outline-none text-[12px]" id="gridSl" placeholder="%" style={{fontFamily: '\'Geist Mono\', ui-monospace', fontVariantNumeric: 'tabular-nums', fontWeight: '500'}} type="number"/>
</div>
</div>
<div className="rounded-md ring-1 ring-white/10 bg-[#0b0f14]/70 p-2" id="reservedMarginRow">
<button className="flex items-center justify-between w-full" id="reservedToggle">
<span className="text-[12px] font-medium">Reserved Margin</span>
<span className="relative inline-flex h-5 w-9 items-center rounded-full bg-white/10 ring-1 ring-white/10">
<span className="absolute left-0.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 rounded-full bg-neutral-300 transition-transform" id="reservedKnob"></span>
</span>
</button>
</div>
<button className="w-full group relative inline-flex items-center justify-center overflow-hidden rounded-lg px-3.5 py-2.5 text-[13px] font-semibold tracking-tight text-black" id="startBot" style={{background: 'linear-gradient(180deg,#6EE7B7,#2CE39D)', boxShadow: '0 12px 30px -10px rgba(110,231,183,0.55)'}}>
<i className="w-4 h-4 mr-2" data-lucide="play"></i>
<span className="relative z-10">Start Bot</span>
</button>
</div>
</div>
</div>
</section>
</main>

<div className="hidden fixed inset-0 z-50" id="levModal">
<div className="absolute inset-0 bg-black/70"></div>
<div className="absolute inset-0 flex items-end sm:items-center justify-center p-4">
<div className="w-full max-w-[420px] translate-y-2 sm:translate-y-0 rounded-2xl bg-[rgba(8,10,14,0.88)] backdrop-blur-2xl ring-1 ring-white/10 shadow-[0_30px_120px_-20px_rgba(0,0,0,0.6)] p-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-emerald-300" data-lucide="gauge"></i>
<h4 className="text-[15px] font-semibold tracking-tight">Adjust Leverage</h4>
</div>
<button className="h-8 w-8 rounded-md bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition flex items-center justify-center" id="levClose">
<i className="w-4 h-4" data-lucide="x"></i>
</button>
</div>
<div className="mt-2.5 rounded-xl bg-white/5 ring-1 ring-white/10 p-3">
<div className="flex items-center justify-between">
<span className="text-[12px] text-neutral-300">Cross</span>
<span className="text-[14px] text-emerald-200" id="levValue" style={{fontFamily: '\'Geist Mono\', ui-monospace', fontVariantNumeric: 'tabular-nums', fontWeight: '600'}}>20x</span>
</div>
<div className="mt-2">
<input id="levSlider" max="125" min="1" step="1" type="range" value="20"/>
</div>
<div className="mt-2 grid grid-cols-5 gap-1.5">
<button className="px-2 py-1.5 text-[12px] rounded-md bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition" data-lev="5">5x</button>
<button className="px-2 py-1.5 text-[12px] rounded-md bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition" data-lev="10">10x</button>
<button className="px-2 py-1.5 text-[12px] rounded-md bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition" data-lev="20">20x</button>
<button className="px-2 py-1.5 text-[12px] rounded-md bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition" data-lev="50">50x</button>
<button className="px-2 py-1.5 text-[12px] rounded-md bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition" data-lev="100">100x</button>
</div>
</div>
<div className="mt-2.5 flex items-center justify-between">
<div className="text-[12px] text-neutral-400">Higher leverage increases liquidation risk.</div>
<button className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-[12px] font-semibold text-black" id="levConfirm" style={{background: 'linear-gradient(180deg,#6EE7B7,#2CE39D)', boxShadow: '0 10px 25px -10px rgba(110,231,183,0.55)'}}>
<i className="w-4 h-4" data-lucide="check"></i>
            Confirm
          </button>
</div>
</div>
</div>
</div>


    </>
  );
}
