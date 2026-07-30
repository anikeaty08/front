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
      
    document.addEventListener('DOMContentLoaded', () => {
      lucide.createIcons();

      /* Tabs */
      const tabs = document.querySelectorAll('.tab');
      const highlight = document.getElementById('segHighlight');
      const sections = {
        packs: document.getElementById('packsOptions'),
        bogo:  document.getElementById('bogoOptions'),
        mix:   document.getElementById('mixOptions')
      };
      const qtyWrapper = document.getElementById('qtyWrapper');
      const actionBtn  = document.getElementById('actionBtn');
      const labels = { packs:'Add bundle', bogo:'Add promo', mix:'Add mix' };
      let current = 'packs';

      tabs.forEach((btn,idx)=>{
        btn.addEventListener('click',()=>{
          if(btn.dataset.tab===current) return;
          setActiveTab(btn.dataset.tab, idx);
        });
      });

      function setActiveTab(tab, idx=0){
        current = tab;
        tabs.forEach(b=>{
          const active = b.dataset.tab===tab;
          b.setAttribute('aria-selected',active);
          b.classList.toggle('text-[#009CA3]',!active);
          b.classList.toggle('text-gray-900',active);
        });
        highlight.style.transform = `translateX(${idx*100}%)`;
        for(const key in sections){
          sections[key].classList.toggle('hidden',key!==tab);
        }
        qtyWrapper.classList.toggle('hidden',tab!=='packs');
        actionBtn.textContent = labels[tab];
      }
      setActiveTab('packs',0);

      /* Quantity */
      const qtyInput=document.getElementById('qtyInput');
      document.getElementById('plusQty').onclick=()=>updateQty(1);
      document.getElementById('minusQty').onclick=()=>updateQty(-1);
      function updateQty(delta){
        let v=parseInt(qtyInput.value||1,10);
        v=Math.max(1,Math.min(99,v+delta));
        qtyInput.value=v;
      }

      /* Toast */
      const toastWrapper=document.getElementById('toast').firstElementChild;
      let toastTimeout;
      function showToast(msg){
        toastWrapper.querySelector('span').textContent=msg;
        toastWrapper.classList.remove('opacity-0','scale-95');
        clearTimeout(toastTimeout);
        toastTimeout=setTimeout(()=>toastWrapper.classList.add('opacity-0','scale-95'),3000);
      }

      /* Product card interactions */
      document.querySelectorAll('.addChip').forEach(btn=>{
        btn.addEventListener('click',(e)=>{
          e.stopPropagation();
          const card=btn.closest('.productCard');
          const isSelected=card.classList.toggle('ring-2');
          btn.innerHTML=isSelected?'<i data-lucide="check" class="w-4 h-4"></i>':'<i data-lucide="plus" class="w-4 h-4"></i>';
          lucide.createIcons({icons:['check','plus']});
          showToast(isSelected?'Added to cart!':'Removed');
        });
      });
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
      

<div className="fixed top-4 inset-x-0 flex justify-center pointer-events-none" id="toast">
<div className="flex gap-2 items-center bg-[#009CA3] text-white px-4 py-3 rounded-lg shadow-lg opacity-0 scale-95 transition-all duration-300">
<i className="w-5 h-5" data-lucide="check-circle"></i>
<span className="text-sm">Added to cart!</span>
</div>
</div>

<section aria-label="SmartOfferSwitcher" className="w-full max-w-sm bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col gap-6 px-6 py-8">

<div className="relative flex bg-gray-100 rounded-lg p-1 text-[14px] font-[500]" id="tablist" role="tablist">
<span className="absolute top-1 bottom-1 left-1 w-1/3 rounded-md bg-white shadow transition-all duration-300" id="segHighlight"></span>
<button aria-selected="true" className="tab relative z-10 flex-1 py-2 rounded-md text-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#009CA3]" data-tab="packs" role="tab">
        Discount Packs
      </button>
<button aria-selected="false" className="tab relative z-10 flex-1 py-2 rounded-md text-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#009CA3]" data-tab="bogo" role="tab">
        BOGO
      </button>
<button aria-selected="false" className="tab relative z-10 flex-1 py-2 rounded-md text-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#009CA3]" data-tab="mix" role="tab">
        Mix & Match
      </button>
</div>

<div className="border-t border-gray-100"></div>

<div className="flex flex-col gap-5" id="step1">
<h2 className="text-[20px] leading-[24px] font-[600] tracking-tight">Step 1</h2>

<fieldset className="flex flex-col gap-4" id="packsOptions">
<label className="flex items-center justify-between gap-3 p-3 border rounded-lg cursor-pointer transition hover:shadow-sm">
<div className="flex items-center gap-3">
<input className="accent-[#009CA3] focus:ring-0" name="packs" type="radio" value="2pack" />
<span>2-Pack</span>
</div>
<span className="text-gray-500 text-sm">-5 %</span>
</label>
<label className="flex items-center justify-between gap-3 p-3 border rounded-lg cursor-pointer transition hover:shadow-sm">
<div className="flex items-center gap-3">
<input className="accent-[#009CA3] focus:ring-0" name="packs" type="radio" value="3pack" />
<span>3-Pack</span>
</div>
<span className="text-gray-500 text-sm">-10 %</span>
</label>
</fieldset>

<fieldset className="hidden flex flex-col gap-4" id="bogoOptions">
<label className="flex items-center justify-between gap-3 p-3 border rounded-lg cursor-pointer transition hover:shadow-sm">
<div className="flex items-center gap-3">
<input className="accent-[#009CA3] focus:ring-0" name="bogo" type="radio" value="b1g1" />
<span>B1G1 Free</span>
</div>
<i className="w-4 h-4 text-gray-400" data-lucide="percent"></i>
</label>
<label className="flex items-center justify-between gap-3 p-3 border rounded-lg cursor-pointer transition hover:shadow-sm">
<div className="flex items-center gap-3">
<input className="accent-[#009CA3] focus:ring-0" name="bogo" type="radio" value="b1g150" />
<span>B1G1 50 % Off</span>
</div>
<i className="w-4 h-4 text-gray-400" data-lucide="percent"></i>
</label>
<label className="flex items-center justify-between gap-3 p-3 border rounded-lg cursor-pointer transition hover:shadow-sm">
<div className="flex items-center gap-3">
<input className="accent-[#009CA3] focus:ring-0" name="bogo" type="radio" value="b2g1" />
<span>B2G1 Free</span>
</div>
<i className="w-4 h-4 text-gray-400" data-lucide="percent"></i>
</label>
</fieldset>

<div className="hidden" id="mixOptions">
<div className="grid grid-cols-2 gap-4 sm:grid-cols-3">

<div className="productCard relative cursor-pointer bg-white border rounded-xl overflow-hidden transition shadow-sm hover:shadow-md focus-within:ring-2 focus-within:ring-[#009CA3]">
<img alt="Choco Cookies" className="w-full aspect-square object-cover" src="https://picsum.photos/300?1" />
<div className="p-3 flex flex-col gap-1">
<span className="text-sm font-[500] truncate">Choco Cookies</span>
<span className="text-xs text-gray-500">20 EGP</span>
</div>
<button className="addChip absolute bottom-2 right-2 w-8 h-8 rounded-full bg-[#009CA3] text-white flex items-center justify-center transition hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">
<i className="w-4 h-4" data-lucide="plus"></i>
</button>
</div>
<div className="productCard relative cursor-pointer bg-white border rounded-xl overflow-hidden transition shadow-sm hover:shadow-md focus-within:ring-2 focus-within:ring-[#009CA3]">
<img alt="Vanilla Wafers" className="w-full aspect-square object-cover" src="https://picsum.photos/300?2" />
<div className="p-3 flex flex-col gap-1">
<span className="text-sm font-[500] truncate">Vanilla Wafers</span>
<span className="text-xs text-gray-500">18 EGP</span>
</div>
<button className="addChip absolute bottom-2 right-2 w-8 h-8 rounded-full bg-[#009CA3] text-white flex items-center justify-center transition hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">
<i className="w-4 h-4" data-lucide="plus"></i>
</button>
</div>
<div className="productCard relative cursor-pointer bg-white border rounded-xl overflow-hidden transition shadow-sm hover:shadow-md focus-within:ring-2 focus-within:ring-[#009CA3]">
<img alt="Strawberry Bites" className="w-full aspect-square object-cover" src="https://picsum.photos/300?3" />
<div className="p-3 flex flex-col gap-1">
<span className="text-sm font-[500] truncate">Strawberry Bites</span>
<span className="text-xs text-gray-500">22 EGP</span>
</div>
<button className="addChip absolute bottom-2 right-2 w-8 h-8 rounded-full bg-[#009CA3] text-white flex items-center justify-center transition hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">
<i className="w-4 h-4" data-lucide="plus"></i>
</button>
</div>
</div>
</div>
</div>

<div className="border-t border-gray-100"></div>

<div className="flex flex-col gap-5" id="qtyWrapper">
<h2 className="text-[20px] leading-[24px] font-[600] tracking-tight">Step 2</h2>
<div className="flex items-center gap-5">
<button aria-label="Decrease quantity" className="w-9 h-9 flex items-center justify-center border rounded-full hover:bg-gray-100 active:scale-95 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#009CA3]" id="minusQty">
<i className="w-4 h-4" data-lucide="minus"></i>
</button>
<input className="w-12 text-center border rounded-md py-1 focus:outline-none focus:ring-2 focus:ring-[#009CA3]" id="qtyInput" type="text" value="1" />
<button aria-label="Increase quantity" className="w-9 h-9 flex items-center justify-center border rounded-full hover:bg-gray-100 active:scale-95 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#009CA3]" id="plusQty">
<i className="w-4 h-4" data-lucide="plus"></i>
</button>
</div>
</div>

<button className="h-11 w-full bg-[#009CA3] text-white rounded-lg font-[500] hover:bg-[#03868c] active:scale-95 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#009CA3]" id="actionBtn">
      Add bundle
    </button>
</section>


    </>
  );
}
