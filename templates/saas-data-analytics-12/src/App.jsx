import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        lucide.createIcons({
            strokeWidth: 1.5
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="max-w-[1400px] w-full mx-auto">
<div className="text-white/90 text-sm font-medium mb-3 ml-2 md:ml-4 tracking-wide">Таблица результатов</div>
</div>

<div className="flex flex-col md:flex-row h-[calc(100vh-100px)] max-w-[1400px] w-full mx-auto bg-white rounded-xl shadow-2xl overflow-hidden relative">

<aside className="w-full md:w-[72px] bg-[#0A1128] flex md:flex-col items-center justify-between py-4 md:py-6 px-6 md:px-0 flex-shrink-0 z-20">

<div className="w-8 h-8 bg-white rounded-lg shadow-sm"></div>

<div className="flex md:flex-col gap-6 md:gap-8 items-center text-slate-400">
<i className="w-5 h-5 hover:text-white cursor-pointer transition-colors" data-lucide="help-circle"></i>
<i className="w-5 h-5 hover:text-white cursor-pointer transition-colors" data-lucide="sun"></i>
<i className="w-5 h-5 hover:text-white cursor-pointer transition-colors" data-lucide="message-square"></i>
<div className="w-8 h-8 bg-white rounded-full mt-0 md:mt-2 shadow-sm"></div>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0 bg-white relative z-10">

<header className="px-6 py-6 md:px-8 border-b border-slate-100 flex flex-col gap-8 flex-shrink-0">
<div className="flex items-center gap-4">
<h1 className="text-2xl font-medium text-slate-900 tracking-tight">Какое-то название расчёта</h1>
<span className="px-2.5 py-0.5 rounded-[6px] text-xs font-medium border border-green-300 text-green-600 bg-green-50/50 leading-tight">Выполнен</span>
</div>
<div className="flex flex-col gap-4">
<div className="text-base text-slate-900 font-medium">Период расчёта метрик 26.06.2023 11:20 – 08.07.2023 12:20</div>
<div className="w-full md:w-80 relative">
<input className="w-full border border-slate-200 rounded-lg px-3.5 py-2 text-sm placeholder-slate-400 text-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-300 focus:border-slate-300 transition-all shadow-sm bg-white" placeholder="Поиск по названию" type="text"/>
</div>
</div>
</header>

<div className="flex-1 overflow-auto bg-white">
<table className="w-full text-sm text-left whitespace-nowrap">
<thead className="sticky top-0 bg-white z-10">
<tr className="text-slate-600 font-medium border-b border-slate-100 bg-white">
<th className="py-3 px-6 md:px-8 font-medium relative w-[350px]">
                                Метрики и срезы
                                <div className="absolute right-0 top-3 bottom-3 w-[1px] bg-slate-100"></div>
</th>
<th className="py-3 px-6 font-medium text-right relative min-w-[180px]">
<div className="flex items-center justify-end gap-1.5">
                                    Контрольная группа <i className="w-3.5 h-3.5 text-blue-500 transform rotate-45" data-lucide="pin"></i>
</div>
<div className="absolute right-0 top-3 bottom-3 w-[1px] bg-slate-100"></div>
</th>
<th className="py-3 px-6 font-medium text-right relative min-w-[180px]">
                                Тестовая группа
                                <div className="absolute right-0 top-3 bottom-3 w-[1px] bg-slate-100"></div>
</th>
<th className="py-3 px-6 font-medium text-right relative min-w-[180px]">
                                Тестовая группа
                                <div className="absolute right-0 top-3 bottom-3 w-[1px] bg-slate-100"></div>
</th>
<th className="py-3 px-6 md:px-8 font-medium text-right min-w-[180px]">
                                Тестовая группа
                            </th>
</tr>
</thead>
<tbody className="text-slate-700">

<tr className="bg-slate-50/70 border-b border-slate-50">
<td className="py-2.5 px-6 md:px-8 text-slate-500 text-xs font-medium tracking-wide" colspan="5">Название группы метрик</td>
</tr>

<tr className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
<td className="py-3.5 px-6 md:px-8">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-slate-400 cursor-pointer" data-lucide="chevron-down"></i>
<i className="w-3.5 h-3.5 fill-slate-300 text-slate-300" data-lucide="star"></i>
<span className="text-slate-800">Количество покупок</span>
</div>
</td>
<td className="py-3.5 px-6 text-right">1 667,45</td>
<td className="py-3.5 px-6 text-right"><div className="flex justify-end gap-2.5"><span>1 489,45</span><span className="text-red-500 w-12 text-right">-0,95%</span></div></td>
<td className="py-3.5 px-6 text-right"><div className="flex justify-end gap-2.5"><span>1 489,45</span><span className="text-red-500 w-12 text-right">-0,95%</span></div></td>
<td className="py-3.5 px-6 md:px-8 text-right"><div className="flex justify-end gap-2.5"><span>1 489,45</span><span className="text-red-500 w-12 text-right">-0,95%</span></div></td>
</tr>

<tr className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
<td className="py-3.5 px-6 md:px-8">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-slate-400 cursor-pointer" data-lucide="chevron-up"></i>
<div className="w-3.5 h-3.5"></div> 
<span className="text-slate-800">Revenue</span>
</div>
</td>
<td className="py-3.5 px-6 text-right">544 489,45</td>
<td className="py-3.5 px-6 text-right"><div className="flex justify-end gap-2.5"><span>537 381,14</span><span className="text-red-500 w-12 text-right">-0,29%</span></div></td>
<td className="py-3.5 px-6 text-right"><div className="flex justify-end gap-2.5"><span>537 381,14</span><span className="text-red-500 w-12 text-right">-0,95%</span></div></td>
<td className="py-3.5 px-6 md:px-8 text-right"><div className="flex justify-end gap-2.5"><span>537 381,14</span><span className="text-red-500 w-12 text-right">-0,95%</span></div></td>
</tr>

<tr className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
<td className="py-3.5 px-6 md:px-8">
<div className="flex items-center gap-2 pl-7">
<i className="w-4 h-4 text-slate-400 cursor-pointer" data-lucide="chevron-up"></i>
<span className="text-slate-800">Платформа приложения</span>
</div>
</td>
<td colspan="4"></td>
</tr>

<tr className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
<td className="py-3.5 px-6 md:px-8">
<div className="flex items-center gap-2 pl-14">
<span className="text-slate-800">iOS</span>
</div>
</td>
<td className="py-3.5 px-6 text-right">343 385,13</td>
<td className="py-3.5 px-6 text-right"><div className="flex justify-end gap-2.5"><span>337 141,10</span><span className="text-red-500 w-12 text-right">-0,29%</span></div></td>
<td className="py-3.5 px-6 text-right"><div className="flex justify-end gap-2.5"><span>394 735,94</span><span className="text-green-500 w-12 text-right">+1,04%</span></div></td>
<td className="py-3.5 px-6 md:px-8 text-right"><div className="flex justify-end gap-2.5"><span>337 141,10</span><span className="text-red-500 w-12 text-right">-0,29%</span></div></td>
</tr>

<tr className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
<td className="py-3.5 px-6 md:px-8">
<div className="flex items-center gap-2 pl-14">
<span className="text-slate-800">Android</span>
</div>
</td>
<td className="py-3.5 px-6 text-right">204 104,32</td>
<td className="py-3.5 px-6 text-right"><div className="flex justify-end gap-2.5"><span>200 240,04</span><span className="text-red-500 w-12 text-right">-0,51%</span></div></td>
<td className="py-3.5 px-6 text-right"><div className="flex justify-end gap-2.5"><span>194 645,06</span><span className="text-red-500 w-12 text-right">-0,83%</span></div></td>
<td className="py-3.5 px-6 md:px-8 text-right"><div className="flex justify-end gap-2.5"><span>200 240,04</span><span className="text-red-500 w-12 text-right">-0,29%</span></div></td>
</tr>

<tr className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
<td className="py-3.5 px-6 md:px-8">
<div className="flex items-center gap-2 pl-7">
<i className="w-4 h-4 text-slate-400 cursor-pointer" data-lucide="chevron-down"></i>
<span className="text-slate-800">Регион</span>
</div>
</td>
<td colspan="4"></td>
</tr>

<tr className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
<td className="py-3.5 px-6 md:px-8">
<div className="flex items-center gap-2 pl-7">
<i className="w-4 h-4 text-slate-400 cursor-pointer" data-lucide="chevron-down"></i>
<span className="text-slate-800">Подписка</span>
</div>
</td>
<td colspan="4"></td>
</tr>

<tr className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
<td className="py-3.5 px-6 md:px-8">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-slate-400 cursor-pointer" data-lucide="chevron-down"></i>
<div className="w-3.5 h-3.5"></div>
<span className="text-slate-800">Средний чек</span>
</div>
</td>
<td className="py-3.5 px-6 text-right">3 049,00</td>
<td className="py-3.5 px-6 text-right"><div className="flex justify-end gap-2.5"><span>5 489,45</span><span className="text-green-500 w-12 text-right">+1,94%</span></div></td>
<td className="py-3.5 px-6 text-right"><div className="flex justify-end gap-2.5"><span>5 489,45</span><span className="text-green-500 w-12 text-right">+1,94%</span></div></td>
<td className="py-3.5 px-6 md:px-8 text-right"><div className="flex justify-end gap-2.5"><span>5 489,45</span><span className="text-green-500 w-12 text-right">+1,94%</span></div></td>
</tr>

<tr className="bg-slate-50/70 border-b border-slate-50">
<td className="py-2.5 px-6 md:px-8 text-slate-500 text-xs font-medium tracking-wide" colspan="5">Название группы метрик</td>
</tr>

<tr className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
<td className="py-3.5 px-6 md:px-8">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-slate-400 cursor-pointer" data-lucide="chevron-down"></i>
<div className="w-3.5 h-3.5"></div>
<span className="text-slate-800">Доля сессий с покупкой</span>
</div>
</td>
<td className="py-3.5 px-6 text-right">0,11</td>
<td className="py-3.5 px-6 text-right"><div className="flex justify-end gap-2.5"><span>0,121</span><span className="text-green-500 w-12 text-right">+1,23%</span></div></td>
<td className="py-3.5 px-6 text-right"><div className="flex justify-end gap-2.5"><span>0,123</span><span className="text-green-500 w-12 text-right">+1,24%</span></div></td>
<td className="py-3.5 px-6 md:px-8 text-right"><div className="flex justify-end gap-2.5"><span>0,117</span><span className="text-green-500 w-12 text-right">+1,11%</span></div></td>
</tr>

<tr className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
<td className="py-3.5 px-6 md:px-8">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-slate-400 cursor-pointer" data-lucide="chevron-up"></i>
<div className="w-3.5 h-3.5"></div>
<span className="text-slate-800">Количество сессий</span>
</div>
</td>
<td className="py-3.5 px-6 text-right">36 669,78</td>
<td className="py-3.5 px-6 text-right"><div className="flex justify-end gap-2.5"><span>31 669,78</span><span className="text-red-500 w-12 text-right">-9,99%</span></div></td>
<td className="py-3.5 px-6 text-right"><div className="flex justify-end gap-2.5"><span>31 669,78</span><span className="text-red-500 w-12 text-right">-9,99%</span></div></td>
<td className="py-3.5 px-6 md:px-8 text-right"><div className="flex justify-end gap-2.5"><span>31 669,78</span><span className="text-red-500 w-12 text-right">-9,99%</span></div></td>
</tr>

<tr className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
<td className="py-3.5 px-6 md:px-8">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-slate-400 cursor-pointer" data-lucide="chevron-down"></i>
<div className="w-3.5 h-3.5"></div>
<span className="text-slate-800">Товаров на пользователя</span>
</div>
</td>
<td className="py-3.5 px-6 text-right">4,2</td>
<td className="py-3.5 px-6 text-right"><div className="flex justify-end gap-2.5"><span>6,45</span><span className="text-green-500 w-12 text-right">+6,99%</span></div></td>
<td className="py-3.5 px-6 text-right"><div className="flex justify-end gap-2.5"><span>3,41</span><span className="text-red-500 w-12 text-right">-1,23%</span></div></td>
<td className="py-3.5 px-6 md:px-8 text-right"><div className="flex justify-end gap-2.5"><span>4,22</span><span className="text-green-500 w-12 text-right">+0,1%</span></div></td>
</tr>
</tbody>
</table>
</div>

<footer className="px-6 py-4 md:px-8 border-t border-slate-100 flex flex-wrap items-center gap-4 bg-white mt-auto z-10 flex-shrink-0">
<button className="px-4 py-2 bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 rounded-lg text-sm text-slate-700 font-medium transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-100">
                    Вернуться к списку
                </button>
<button className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-400 font-medium flex items-center gap-2 cursor-not-allowed">
<i className="w-4 h-4" data-lucide="edit-2"></i>
                    Редактировать
                </button>
</footer>
</main>
</div>


    </>
  );
}
