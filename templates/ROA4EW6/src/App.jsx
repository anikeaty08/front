import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
    lucide.createIcons();

    const ctx = document.getElementById('callsChart');
    if (ctx) {
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт'],
          datasets: [{
            label: 'Вызовы',
            data: [12, 19, 7, 14, 10],
            backgroundColor: '#2563EB',
            borderRadius: 4
          }]
        },
        options: {
          plugins: { legend: { display: false } },
          scales: {
            y: { beginAtZero: true, ticks: { stepSize: 5 } }
          }
        }
      });
    }
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="min-h-screen flex flex-col">

<header className="flex items-center justify-between px-6 py-4 bg-white shadow-sm">
<h1 className="text-2xl tracking-tight font-semibold">BankOS</h1>
<div className="flex items-center gap-4">
<span className="text-sm text-gray-500">Оператор:</span>
<div className="flex items-center gap-2">
<img alt="" className="w-8 h-8 rounded-full object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<span className="font-medium">Анна Л.</span>
</div>
</div>
</header>

<main className="flex-1 grid lg:grid-cols-3 gap-6 p-6" x-data="">

<section className="lg:col-span-1 space-y-6">

<div className="bg-white rounded-xl shadow-sm p-5 flex flex-col gap-4" x-data="{show:true}" x-show="show" x-transition.duration.600ms="">
<div className="flex items-center gap-4">
<img alt="" className="w-20 h-20 rounded-lg object-cover" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<div>
<h2 className="text-lg font-semibold tracking-tight">Иван Петров</h2>
<p className="text-sm text-gray-500 mt-1">Клиент с 2018</p>
</div>
</div>
<div className="grid grid-cols-2 gap-4 text-sm">
<div>
<p className="text-gray-500">Тип счёта</p>
<p className="font-medium mt-1">Premium</p>
</div>
<div>
<p className="text-gray-500">Баланс</p>
<p className="font-medium mt-1">₽ 1 254 300</p>
</div>
<div className="col-span-2">
<p className="text-gray-500">Последние операции</p>
<ul className="mt-1 space-y-1">
<li className="flex justify-between"><span>Перевод</span><span>-₽ 5 000</span></li>
<li className="flex justify-between"><span>Пополнение</span><span>+₽ 30 000</span></li>
</ul>
</div>
</div>
</div>

<div className="bg-white rounded-xl shadow-sm p-5 space-y-4" x-data="{running:true,seconds:0}" x-init="setInterval(()=&gt;running?seconds++:null,1000)" x-show.transition.opacity.duration.700ms="">
<div className="flex items-center gap-3">
<div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
<span className="text-sm text-gray-600">Вызов активен</span>
</div>
<div className="flex items-center gap-2">
<lucide-phone-call className="w-5 h-5 stroke-1.5 text-gray-600"></lucide-phone-call>
<h3 className="text-2xl font-semibold tracking-tight" x-text="'0'+Math.floor(seconds/60)+':'+String(seconds%60).padStart(2,'0')"></h3>
</div>
<p className="text-sm text-gray-500">+7 (900) 123-45-67</p>

<div className="flex gap-3">
<button @click="running=false" className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-red-600 text-white hover:bg-red-500 transition">
<lucide-phone-off className="w-4 h-4 stroke-1.5"></lucide-phone-off>
              Завершить
            </button>
<button @click="running=!running" className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 text-gray-700 transition">
<lucide-pause className="w-4 h-4 stroke-1.5"></lucide-pause>
<span x-text="running?'Пауза':'Продолжить'"></span>
</button>
</div>
<div className="flex gap-3">
<button className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 transition">
<lucide-mic-off className="w-4 h-4 stroke-1.5"></lucide-mic-off>
              Мут
            </button>
<button className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 transition">
<lucide-share-2 className="w-4 h-4 stroke-1.5"></lucide-share-2>
              Перевести
            </button>
</div>
</div>
</section>

<section className="lg:col-span-1 flex flex-col gap-6">

<div className="bg-white rounded-xl shadow-sm p-5 flex-1 overflow-auto" x-data="{tab:'script'}">
<div className="flex gap-4 border-b border-gray-100 mb-4">
<button :className="{'text-gray-900 border-b-2 border-blue-600':tab==='script', 'text-gray-500':tab!=='script'}" @click="tab='script'" className="py-2 font-medium transition">Скрипт</button>
<button :className="{'text-gray-900 border-b-2 border-blue-600':tab==='notes', 'text-gray-500':tab!=='notes'}" @click="tab='notes'" className="py-2 font-medium transition">Заметки</button>
</div>

<div className="space-y-3" x-show="tab==='script'">
<p className="text-sm"><span className="font-medium">1.</span> Поздороваться и подтвердить личность клиента.</p>
<p className="text-sm"><span className="font-medium">2.</span> Уточнить цель обращения.</p>
<p className="text-sm"><span className="font-medium">3.</span> Предложить актуальные услуги.</p>
</div>

<div className="h-full" x-show="tab==='notes'" x-transition.opacity.duration.300ms="">
<textarea className="w-full h-56 resize-none focus:outline-none text-sm" placeholder="Введите заметку сюда..."></textarea>
</div>
</div>
</section>

<section className="lg:col-span-1 space-y-6">

<div className="bg-white rounded-xl shadow-sm p-5" x-show="true" x-transition.duration.600ms="">
<h3 className="text-lg font-semibold tracking-tight mb-4">Статистика вызовов</h3>
<div>
<canvas height="180" id="callsChart"></canvas>
</div>
</div>

<div className="bg-white rounded-xl shadow-sm p-5 flex-1 overflow-auto">
<h3 className="text-lg font-semibold tracking-tight mb-4">История клиента</h3>
<ul className="space-y-3 text-sm">
<li className="flex justify-between">
<span>15 мая</span><span>Запрос баланса</span>
</li>
<li className="flex justify-between">
<span>10 мая</span><span>Перевод средств</span>
</li>
<li className="flex justify-between">
<span>1 мая</span><span>Изменение пакета</span>
</li>
</ul>
</div>
</section>
</main>
</div>


    </>
  );
}
