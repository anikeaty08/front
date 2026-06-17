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



        let currentTerm = 24;

        // Helper to convert digits to Persian
        function toPersianDigits(n) {
            const farsiDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
            return n.toString().replace(/\d/g, x => farsiDigits[x]);
        }

        function setTerm(months) {
            currentTerm = months;
            
            // Update UI buttons
            [12, 24, 36].forEach(m => {
                const btn = document.getElementById(`term${m}`);
                if (m === months) {
                    btn.className = "flex-1 py-2 rounded-lg bg-white shadow-sm text-xs font-medium text-zinc-900 border border-zinc-200/50 transition-all";
                } else {
                    btn.className = "flex-1 py-2 rounded-lg text-xs font-medium transition-all text-zinc-500 hover:text-zinc-900";
                }
            });

            updateCalculator();
        }

        function updateCalculator() {
            // Get selected model price
            const modelPrice = parseInt(document.querySelector('input[name="model"]:checked').value);
            
            // Get selected storage price
            const storagePrice = parseInt(document.querySelector('input[name="storage"]:checked').value);
            
            // Get down payment
            const downPaymentInput = document.getElementById('downPayment');
            const downPayment = parseInt(downPaymentInput.value);
            
            // Update Slider UI (Track fill)
            // In RTL, we want the bar to fill from right to left. 
            // The input range is forced LTR via CSS for math consistency.
            // We set width of the activeTrack which is anchored right-0.
            const percentage = (downPayment / downPaymentInput.max) * 100;
            document.getElementById('activeTrack').style.width = `${percentage}%`;
            document.getElementById('downPaymentValue').innerText = `${toPersianDigits(downPayment)} دلار`;

            // Calculation
            const totalPrice = modelPrice + storagePrice;
            const financedAmount = totalPrice - downPayment;
            
            const monthlyPayment = financedAmount / currentTerm;

            // Render
            document.getElementById('monthlyPrice').innerText = toPersianDigits(monthlyPayment.toFixed(2));
            document.getElementById('totalPrice').innerText = `${toPersianDigits(totalPrice)} دلار`;
        }

        // Initialize
        updateCalculator();
    
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
      

<main className="w-full max-w-md bg-white h-screen sm:h-auto sm:min-h-screen sm:my-8 sm:rounded-[2rem] sm:shadow-2xl sm:border sm:border-zinc-200 relative overflow-hidden flex flex-col">

<header className="flex items-center justify-between px-6 pt-6 pb-2 z-20">
<div className="flex items-center gap-2">
<span className="font-bold text-lg tracking-tight">آئورا.</span>
</div>
<button className="p-2 rounded-full hover:bg-zinc-100 transition-colors text-zinc-500">
<span className="iconify" data-icon="lucide:menu" data-strokeWidth="1.5" data-width="20"></span>
</button>
</header>

<div className="flex-1 overflow-y-auto no-scrollbar pb-32">

<section className="px-6 pt-4 pb-8 flex flex-col items-center">
<div className="w-full aspect-[4/3] bg-gradient-to-tr from-zinc-100 to-zinc-50 rounded-3xl flex items-center justify-center relative overflow-hidden border border-zinc-100">

<div className="w-40 h-64 bg-zinc-900 rounded-[2.5rem] shadow-2xl relative border-[4px] border-zinc-800 transform rotate-[5deg] hover:rotate-0 transition-transform duration-500 ease-out z-10">
<div className="absolute inset-0 bg-gradient-to-bl from-zinc-800 to-black rounded-[2.2rem] opacity-90"></div>

<div className="bg-gradient-to-b from-zinc-700/50 to-transparent opacity-20 rounded-2xl absolute top-4 right-4 bottom-4 left-4"></div>
</div>

<div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
<div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"></div>
</div>
<div className="mt-8 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 mb-4">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
<span className="text-xs font-medium text-zinc-600 tracking-tight">تایید صلاحیت فوری</span>
</div>
<h1 className="text-3xl font-semibold tracking-tight text-zinc-900 mb-2">دنیای خود را ارتقا دهید.</h1>
<p className="text-sm text-zinc-500 max-w-[280px] mx-auto leading-relaxed">
                        مدل مورد نظر خود را انتخاب کنید و با اقساط منعطف و بدون بهره پرداخت کنید.
                    </p>
</div>
</section>

<section className="px-6 space-y-8" id="calculator">

<div>
<label className="text-xs font-medium text-zinc-400 uppercase tracking-wider mb-3 block">انتخاب مدل</label>
<div className="grid grid-cols-1 gap-3">
<label className="cursor-pointer group relative">
<input checked="" className="custom-radio sr-only" name="model" onchange="updateCalculator()" type="radio" value="999"/>
<div className="flex items-center justify-between p-4 rounded-xl border border-zinc-200 bg-white hover:border-zinc-300 transition-all">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-zinc-100 flex items-center justify-center text-zinc-900">
<span className="iconify" data-icon="lucide:smartphone" data-strokeWidth="1.5" data-width="20"></span>
</div>
<div className="flex flex-col text-right">
<span className="text-sm font-medium text-zinc-900">آئورا پرو ۱۵</span>
<span className="text-xs text-zinc-500">طراحی تیتانیوم</span>
</div>
</div>
<span className="text-sm font-medium text-zinc-900">۹۹۹ دلار</span>
</div>
</label>
<label className="cursor-pointer group relative">
<input className="custom-radio sr-only" name="model" onchange="updateCalculator()" type="radio" value="1199"/>
<div className="flex items-center justify-between p-4 rounded-xl border border-zinc-200 bg-white hover:border-zinc-300 transition-all">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-zinc-100 flex items-center justify-center text-zinc-900">
<span className="iconify" data-icon="lucide:maximize" data-strokeWidth="1.5" data-width="20"></span>
</div>
<div className="flex flex-col text-right">
<span className="text-sm font-medium text-zinc-900">آئورا مکس</span>
<span className="text-xs text-zinc-500">بزرگترین صفحه نمایش</span>
</div>
</div>
<span className="text-sm font-medium text-zinc-900">۱۱۹۹ دلار</span>
</div>
</label>
</div>
</div>

<div>
<label className="text-xs font-medium text-zinc-400 uppercase tracking-wider mb-3 block">حافظه داخلی</label>
<div className="grid grid-cols-3 gap-3">
<label className="cursor-pointer w-full">
<input checked="" className="storage-radio sr-only" name="storage" onchange="updateCalculator()" type="radio" value="0"/>
<div className="py-3 text-center rounded-lg border border-zinc-200 text-xs font-medium text-zinc-500 transition-all hover:bg-zinc-50" dir="ltr">128 GB</div>
</label>
<label className="cursor-pointer w-full">
<input className="storage-radio sr-only" name="storage" onchange="updateCalculator()" type="radio" value="100"/>
<div className="py-3 text-center rounded-lg border border-zinc-200 text-xs font-medium text-zinc-500 transition-all hover:bg-zinc-50" dir="ltr">256 GB</div>
</label>
<label className="cursor-pointer w-full">
<input className="storage-radio sr-only" name="storage" onchange="updateCalculator()" type="radio" value="200"/>
<div className="py-3 text-center rounded-lg border border-zinc-200 text-xs font-medium text-zinc-500 transition-all hover:bg-zinc-50" dir="ltr">512 GB</div>
</label>
</div>
</div>

<div>
<div className="flex justify-between items-center mb-4">
<label className="text-xs font-medium text-zinc-400 uppercase tracking-wider">پیش پرداخت</label>
<span className="text-sm font-medium text-zinc-900 bg-zinc-100 px-2 py-1 rounded-md tabular-nums" id="downPaymentValue">۰ دلار</span>
</div>
<div className="relative h-6 flex items-center">

<div className="absolute w-full h-0.5 bg-zinc-100 rounded-full"></div>

<div className="absolute h-0.5 bg-zinc-900 rounded-full w-0 right-0" id="activeTrack" style={{width: '0%'}}></div>

<input className="relative w-full z-10" id="downPayment" max="500" min="0" oninput="updateCalculator()" step="50" type="range" value="0"/>
</div>
<div className="flex justify-between mt-2 text-xs text-zinc-400">
<span>۰ دلار</span>
<span>۵۰۰ دلار</span>
</div>
</div>

<div className="pb-6">
<label className="text-xs font-medium text-zinc-400 uppercase tracking-wider mb-3 block">مدت بازپرداخت</label>
<div className="bg-zinc-100 p-1 rounded-xl flex gap-1">
<button className="flex-1 py-2 rounded-lg text-xs font-medium transition-all text-zinc-500 hover:text-zinc-900" id="term12" onclick="setTerm(12)">۱۲ ماهه</button>
<button className="flex-1 py-2 rounded-lg bg-white shadow-sm text-xs font-medium text-zinc-900 border border-zinc-200/50 transition-all" id="term24" onclick="setTerm(24)">۲۴ ماهه</button>
<button className="flex-1 py-2 rounded-lg text-xs font-medium transition-all text-zinc-500 hover:text-zinc-900" id="term36" onclick="setTerm(36)">۳۶ ماهه</button>
</div>
</div>
</section>
</div>

<div className="absolute bottom-0 w-full glass-nav border-t border-zinc-200 px-6 py-4 z-30">
<div className="flex items-end justify-between mb-4">
<div className="flex flex-col">
<span className="text-xs text-zinc-500 mb-1">قسط ماهیانه</span>
<div className="flex items-baseline gap-1">
<span className="text-3xl font-medium tracking-tight text-zinc-900" id="monthlyPrice">۴۱.۶۳</span>
<span className="text-sm text-zinc-400 font-normal">دلار</span>
</div>
</div>
<div className="text-left flex flex-col items-end">
<span className="text-xs text-zinc-400 mb-1">قیمت نهایی</span>
<span className="text-sm font-medium text-zinc-700" id="totalPrice">۹۹۹ دلار</span>
</div>
</div>
<button className="w-full bg-zinc-900 hover:bg-zinc-800 text-white font-medium py-3.5 rounded-xl transition-all active:scale-[0.98] flex items-center justify-center gap-2 group">
<span>ادامه دهید</span>

<span className="iconify group-hover:-translate-x-0.5 transition-transform" data-icon="lucide:arrow-left" data-strokeWidth="2" data-width="16"></span>
</button>
</div>
</main>


    </>
  );
}
