import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      // Initialize Lucide icons with custom stroke width
      lucide.createIcons({
          attrs: {
              'stroke-width': 1.5
          }
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="bg-glow top-[-100px] left-[-100px]"></div>
<div className="bg-glow bottom-[200px] right-[-150px] opacity-50"></div>

<div className="w-full max-w-[400px] relative z-10 flex flex-col h-[100dvh] overflow-y-auto hide-scrollbar pb-24">

<div className="flex justify-between items-center px-6 pt-4 pb-2 text-sm font-medium">
<span>9:41</span>
<div className="flex gap-2 items-center">
<i className="w-4 h-4" data-lucide="signal"></i>
<i className="w-4 h-4" data-lucide="wifi"></i>
<i className="w-5 h-5" data-lucide="battery-full"></i>
</div>
</div>

<header className="flex justify-between items-center px-5 mt-2">
<div className="w-10 h-10 rounded-full overflow-hidden border border-white/10 ring-2 ring-transparent hover:ring-purple-500/50 transition-all cursor-pointer">
<img alt="User Avatar" className="w-full h-full object-cover" src="https://i.pravatar.cc/150?u=a042581f4e29026704d"/>
</div>
<div className="text-2xl font-semibold italic tracking-tight flex items-center gap-1 cursor-pointer">
          Finzy
        </div>
<button className="relative w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/5 hover:bg-white/10 transition-colors">
<i className="w-5 h-5 text-gray-300" data-lucide="bell"></i>
<span className="absolute top-2.5 right-3 w-2 h-2 bg-purple-500 rounded-full border border-[#0a0a0c]"></span>
</button>
</header>
<main className="flex-1 px-5 mt-6 flex flex-col gap-6">

<section className="bg-white/5 backdrop-blur-md rounded-3xl p-6 border border-white/10 relative overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.4)]">

<div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/20 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none"></div>
<div className="flex items-center gap-2 text-gray-400 mb-2">
<span className="text-base font-normal">Общий баланс</span>
<button>
<i className="w-4 h-4 hover:text-white transition-colors" data-lucide="eye"></i>
</button>
</div>
<div className="flex justify-between items-end mb-2">
<div className="text-4xl font-semibold tracking-tight">198 213 ₽</div>

<div className="flex bg-black/40 rounded-full p-1 border border-white/5">
<button className="px-3 py-1 rounded-full bg-purple-600 text-sm font-medium text-white shadow-sm">
                ₽
              </button>
<button className="px-3 py-1 rounded-full text-gray-400 hover:text-white text-sm font-normal transition-colors">
                $
              </button>
<button className="px-3 py-1 rounded-full text-gray-400 hover:text-white text-sm font-normal transition-colors">
                USDT
              </button>
</div>
</div>
<div className="text-base text-gray-400">≈ 2 140 USDT</div>
</section>

<section className="grid grid-cols-4 gap-2 mt-2">

<button className="flex flex-col items-center gap-3 group">
<div className="w-14 h-14 rounded-2xl bg-purple-600 flex items-center justify-center shadow-[0_4px_12px_rgba(139,92,246,0.3)] group-hover:scale-105 transition-transform">
<i className="w-6 h-6 text-white" data-lucide="send"></i>
</div>
<div className="flex flex-col items-center">
<span className="text-base font-medium text-gray-100">Отправить</span>
<span className="text-xs text-gray-500 mt-0.5">Переводы</span>
</div>
</button>

<button className="flex flex-col items-center gap-3 group">
<div className="w-14 h-14 rounded-2xl bg-purple-600 flex items-center justify-center shadow-[0_4px_12px_rgba(139,92,246,0.3)] group-hover:scale-105 transition-transform">
<i className="w-6 h-6 text-white" data-lucide="download"></i>
</div>
<div className="flex flex-col items-center">
<span className="text-base font-medium text-gray-100">Получить</span>
<span className="text-xs text-gray-500 mt-0.5">Реквизиты и QR</span>
</div>
</button>

<button className="flex flex-col items-center gap-3 group">
<div className="w-14 h-14 rounded-2xl bg-purple-600 flex items-center justify-center shadow-[0_4px_12px_rgba(139,92,246,0.3)] group-hover:scale-105 transition-transform">
<i className="w-6 h-6 text-white" data-lucide="scan-line"></i>
</div>
<div className="flex flex-col items-center">
<span className="text-base font-medium text-gray-100">Оплатить</span>
<span className="text-xs text-gray-500 mt-0.5">QR и счета</span>
</div>
</button>

<button className="flex flex-col items-center gap-3 group">
<div className="w-14 h-14 rounded-2xl bg-purple-600 flex items-center justify-center shadow-[0_4px_12px_rgba(139,92,246,0.3)] group-hover:scale-105 transition-transform">
<i className="w-6 h-6 text-white" data-lucide="arrow-right-left"></i>
</div>
<div className="flex flex-col items-center">
<span className="text-base font-medium text-gray-100">Обмен</span>
<span className="text-xs text-gray-500 mt-0.5">Фиат и крипто</span>
</div>
</button>
</section>

<section className="mt-4">
<div className="flex justify-between items-end mb-4">
<h2 className="text-xl font-semibold tracking-tight text-white">
              Карты
            </h2>
<a className="text-sm font-medium text-purple-500 hover:text-purple-400 flex items-center gap-0.5" href="#">
              Все карты
              <i className="w-4 h-4" data-lucide="chevron-right"></i>
</a>
</div>
<div className="flex gap-4 overflow-x-auto hide-scrollbar pb-2 -mx-5 px-5 snap-x">

<div className="w-64 shrink-0 h-40 bg-gradient-to-br from-violet-700 via-indigo-900 to-slate-900 rounded-2xl p-5 relative overflow-hidden shadow-lg snap-center flex flex-col justify-between border border-white/10">

<div className="absolute -top-10 -right-10 w-32 h-32 bg-purple-500/30 rounded-full blur-2xl"></div>
<div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-500/20 rounded-full blur-xl"></div>
<div className="flex justify-between items-start relative z-10">
<span className="text-xl font-semibold italic">Finzy</span>
<span className="bg-white/10 backdrop-blur-md px-2 py-1 rounded-md text-xs text-white border border-white/10">
                  ₽ карта
                </span>
</div>
<div className="relative z-10">
<div className="flex items-center gap-2 mb-2 text-gray-300">
<span className="tracking-widest text-lg mt-1">····</span>
<span className="text-base">4545</span>
</div>
<div className="flex justify-between items-end">
<span className="text-xl font-semibold tracking-tight text-white">
                    12 345 ₽
                  </span>

<div className="flex">
<div className="w-6 h-6 bg-red-500/80 rounded-full relative z-10 mix-blend-screen"></div>
<div className="w-6 h-6 bg-yellow-500/80 rounded-full -ml-2 relative z-0 mix-blend-screen"></div>
</div>
</div>
</div>
</div>

<div className="w-64 shrink-0 h-40 bg-gradient-to-br from-[#0a2e28] via-[#0f443b] to-[#041a16] rounded-2xl p-5 relative overflow-hidden shadow-lg snap-center flex flex-col justify-between border border-white/10">
<div className="absolute -top-5 -right-5 w-28 h-28 bg-emerald-500/20 rounded-full blur-2xl"></div>
<div className="flex justify-between items-start relative z-10">
<span className="text-xl font-semibold italic text-gray-200">
                  Finzy
                </span>
<span className="bg-white/5 backdrop-blur-md px-2 py-1 rounded-md text-xs text-gray-300 border border-white/10">
                  USD карта
                </span>
</div>
<div className="relative z-10">
<div className="flex items-center gap-2 mb-2 text-gray-400">
<span className="tracking-widest text-lg mt-1">····</span>
<span className="text-base">3459</span>
</div>
<div className="flex justify-between items-end">
<span className="text-xl font-semibold tracking-tight text-gray-100">
                    1 200 $
                  </span>

<span className="text-xl font-bold italic tracking-tighter text-white/90">
                    VISA
                  </span>
</div>
</div>
</div>
</div>
</section>

<section className="mt-4 mb-6">
<div className="flex justify-between items-end mb-4">
<h2 className="text-xl font-semibold tracking-tight text-white">
              Активы
            </h2>
<a className="text-sm font-medium text-purple-500 hover:text-purple-400 flex items-center gap-0.5" href="#">
              Все активы
              <i className="w-4 h-4" data-lucide="chevron-right"></i>
</a>
</div>

<div className="flex gap-1 bg-white/5 p-1 rounded-full mb-5 border border-white/5 w-fit">
<button className="px-5 py-1.5 rounded-full bg-purple-600 text-sm font-medium text-white shadow-sm">
              Все
            </button>
<button className="px-5 py-1.5 rounded-full text-gray-400 hover:text-white text-sm font-normal transition-colors">
              Крипто
            </button>
<button className="px-5 py-1.5 rounded-full text-gray-400 hover:text-white text-sm font-normal transition-colors">
              Фиат
            </button>
</div>

<div className="flex flex-col gap-5">

<div className="flex items-center justify-between group cursor-pointer">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-teal-500 flex items-center justify-center">
<i className="w-6 h-6 text-white" data-lucide="circle-dollar-sign"></i>
</div>
<div>
<h3 className="text-base font-medium text-gray-100">USDT</h3>
<p className="text-sm text-gray-500">Tether</p>
</div>
</div>
<div className="flex items-center gap-4 text-right">
<div>
<p className="text-base font-medium text-white">5 540.00</p>
<p className="text-sm text-gray-500">≈ 5 540 $</p>
</div>
<div className="flex flex-col items-end gap-1 w-20">
<span className="text-sm font-medium text-emerald-500">
                    +1.25%
                  </span>

<svg className="w-14 h-6" fill="none" viewbox="0 0 60 20" xmlns="http://www.w3.org/2000/svg">
<path d="M2 15L15 8L25 12L40 4L58 8" stroke="#10b981" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</div>
</div>
</div>

<div className="flex items-center justify-between group cursor-pointer">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center">
<i className="w-6 h-6 text-white" data-lucide="bitcoin"></i>
</div>
<div>
<h3 className="text-base font-medium text-gray-100">BTC</h3>
<p className="text-sm text-gray-500">Bitcoin</p>
</div>
</div>
<div className="flex items-center gap-4 text-right">
<div>
<p className="text-base font-medium text-white">0.02415</p>
<p className="text-sm text-gray-500">≈ 1 487 $</p>
</div>
<div className="flex flex-col items-end gap-1 w-20">
<span className="text-sm font-medium text-emerald-500">
                    +0.72%
                  </span>

<svg className="w-14 h-6" fill="none" viewbox="0 0 60 20" xmlns="http://www.w3.org/2000/svg">
<path d="M2 18L12 10L22 14L38 2L58 6" stroke="#10b981" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</div>
</div>
</div>

<div className="flex items-center justify-between group cursor-pointer">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">
<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M12 2L3 11l9 4 9-4-9-9z"></path>
<path d="M12 22l-9-9 9-4 9 4-9 9z"></path>
</svg>
</div>
<div>
<h3 className="text-base font-medium text-gray-100">ETH</h3>
<p className="text-sm text-gray-500">Ethereum</p>
</div>
</div>
<div className="flex items-center gap-4 text-right">
<div>
<p className="text-base font-medium text-white">0.80</p>
<p className="text-sm text-gray-500">≈ 1 280 $</p>
</div>
<div className="flex flex-col items-end gap-1 w-20">
<span className="text-sm font-medium text-rose-500">-0.18%</span>

<svg className="w-14 h-6" fill="none" viewbox="0 0 60 20" xmlns="http://www.w3.org/2000/svg">
<path d="M2 2L15 10L25 6L40 16L58 12" stroke="#ef4444" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>

</svg>
</div>
</div>
</div>
</div>
</section>
</main>

<nav className="absolute bottom-0 left-0 w-full bg-[#0a0a0c]/90 backdrop-blur-xl border-t border-white/10 px-6 pt-3 pb-8 z-50">
<div className="flex justify-between items-center relative">
<button className="flex flex-col items-center gap-1 w-16">
<i className="w-6 h-6 text-purple-500 fill-purple-500/20" data-lucide="home"></i>
<span className="text-xs font-medium text-purple-500">Главная</span>
</button>
<button className="flex flex-col items-center gap-1 w-16">
<i className="w-6 h-6 text-gray-500 hover:text-gray-300 transition-colors" data-lucide="send"></i>
<span className="text-xs font-normal text-gray-500">Платежи</span>
</button>

<div className="relative flex justify-center w-16">
<button className="w-14 h-14 bg-purple-600 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(139,92,246,0.4)] hover:scale-105 transition-transform">
<i className="w-6 h-6 text-white" data-lucide="qr-code"></i>
</button>
</div>
<button className="flex flex-col items-center gap-1 w-16">
<i className="w-6 h-6 text-gray-500 hover:text-gray-300 transition-colors" data-lucide="arrow-right-left"></i>
<span className="text-xs font-normal text-gray-500">Обмен</span>
</button>
<button className="flex flex-col items-center gap-1 w-16">
<i className="w-6 h-6 text-gray-500 hover:text-gray-300 transition-colors" data-lucide="clock"></i>
<span className="text-xs font-normal text-gray-500">История</span>
</button>
</div>
</nav>
</div>


    </>
  );
}
