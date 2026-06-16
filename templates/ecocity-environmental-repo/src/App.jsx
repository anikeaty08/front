import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<main className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl shadow-slate-200 overflow-hidden flex flex-col lg:grid lg:grid-cols-12 min-h-[700px]">

<div className="lg:col-span-5 bg-slate-900 text-white relative flex flex-col justify-between p-8 lg:p-12 overflow-hidden">

<div className="absolute inset-0 pattern-grid opacity-30 pointer-events-none"></div>
<div className="absolute inset-0 glow-effect pointer-events-none"></div>

<div className="relative z-10">
<div className="flex items-center gap-2 mb-8 text-emerald-400">
<iconify-icon icon="lucide:leaf" strokeWidth="1.5" width="24"></iconify-icon>
<span className="font-semibold tracking-tight text-white">EcoCity</span>
</div>
<h1 className="text-3xl lg:text-4xl font-semibold tracking-tight mb-6 leading-tight">
                    Сделаем город <br/>
<span className="text-emerald-400">чище вместе.</span>
</h1>
<p className="text-slate-400 text-sm leading-relaxed max-w-sm mb-8">
                    Ваша заявка анонимна. Мы анализируем данные, чтобы выявлять источники загрязнения и передавать отчеты в экологические службы города.
                </p>

<div className="flex flex-col gap-4">
<div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
<div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400">
<iconify-icon icon="lucide:activity" width="20"></iconify-icon>
</div>
<div>
<div className="text-xs text-slate-400">Статус системы</div>
<div className="text-sm font-medium text-white">Мониторинг активен</div>
</div>
</div>
<div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
<div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400">
<iconify-icon icon="lucide:shield-check" width="20"></iconify-icon>
</div>
<div>
<div className="text-xs text-slate-400">Безопасность</div>
<div className="text-sm font-medium text-white">Данные зашифрованы</div>
</div>
</div>
</div>
</div>

<div className="relative z-10 mt-10 lg:mt-0 flex gap-6 text-xs text-slate-500">
<a className="hover:text-emerald-400 transition-colors" href="#">Правила сервиса</a>
<a className="hover:text-emerald-400 transition-colors" href="#">Политика конфиденциальности</a>
</div>
</div>

<div className="lg:col-span-7 bg-white p-8 lg:p-12 overflow-y-auto max-h-[90vh] lg:max-h-full">
<form action="#" className="space-y-8" onsubmit="event.preventDefault();">

<section>
<label className="block text-sm font-medium text-slate-900 mb-4">
                        1. Источник загрязнения
                    </label>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
<label className="cursor-pointer group">
<input className="peer sr-only" name="source" type="radio" value="car"/>
<div className="h-full p-4 rounded-xl border border-slate-200 hover:border-emerald-200 hover:bg-slate-50 transition-all-custom flex flex-col items-center justify-center gap-2 text-center relative">
<iconify-icon className="text-slate-400 group-hover:text-emerald-500 transition-colors" icon="lucide:car-front" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-xs font-medium">Транспорт</span>
<iconify-icon className="check-icon opacity-0 absolute top-2 right-2 text-emerald-600 transition-all-custom scale-75" icon="lucide:check-circle-2" width="16"></iconify-icon>
</div>
</label>
<label className="cursor-pointer group">
<input className="peer sr-only" name="source" type="radio" value="factory"/>
<div className="h-full p-4 rounded-xl border border-slate-200 hover:border-emerald-200 hover:bg-slate-50 transition-all-custom flex flex-col items-center justify-center gap-2 text-center relative">
<iconify-icon className="text-slate-400 group-hover:text-emerald-500 transition-colors" icon="lucide:factory" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-xs font-medium">Предприятие</span>
<iconify-icon className="check-icon opacity-0 absolute top-2 right-2 text-emerald-600 transition-all-custom scale-75" icon="lucide:check-circle-2" width="16"></iconify-icon>
</div>
</label>
<label className="cursor-pointer group">
<input className="peer sr-only" name="source" type="radio" value="waste"/>
<div className="h-full p-4 rounded-xl border border-slate-200 hover:border-emerald-200 hover:bg-slate-50 transition-all-custom flex flex-col items-center justify-center gap-2 text-center relative">
<iconify-icon className="text-slate-400 group-hover:text-emerald-500 transition-colors" icon="lucide:trash-2" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-xs font-medium">Свалка / Мусор</span>
<iconify-icon className="check-icon opacity-0 absolute top-2 right-2 text-emerald-600 transition-all-custom scale-75" icon="lucide:check-circle-2" width="16"></iconify-icon>
</div>
</label>
</div>
</section>

<section>
<label className="block text-sm font-medium text-slate-900 mb-4">
                        2. Характер загрязнения
                    </label>
<div className="flex flex-wrap gap-2">
<label className="cursor-pointer">
<input className="peer sr-only" name="obs" type="checkbox" value="smoke"/>
<div className="px-4 py-2 rounded-lg border border-slate-200 hover:bg-slate-50 transition-all-custom flex items-center gap-2 select-none text-slate-600">
<iconify-icon icon="lucide:cloud-fog" strokeWidth="1.5" width="16"></iconify-icon>
<span className="text-xs font-medium">Черный дым</span>
</div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="obs" type="checkbox" value="smell"/>
<div className="px-4 py-2 rounded-lg border border-slate-200 hover:bg-slate-50 transition-all-custom flex items-center gap-2 select-none text-slate-600">
<iconify-icon icon="lucide:wind" strokeWidth="1.5" width="16"></iconify-icon>
<span className="text-xs font-medium">Химический запах</span>
</div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="obs" type="checkbox" value="dust"/>
<div className="px-4 py-2 rounded-lg border border-slate-200 hover:bg-slate-50 transition-all-custom flex items-center gap-2 select-none text-slate-600">
<iconify-icon icon="lucide:haze" strokeWidth="1.5" width="16"></iconify-icon>
<span className="text-xs font-medium">Пыль / Сажа</span>
</div>
</label>
</div>
</section>

<section>
<label className="block text-sm font-medium text-slate-900 mb-4">
                        3. Местоположение
                    </label>
<div className="relative w-full h-40 rounded-xl overflow-hidden border border-slate-200 group">

<div className="absolute inset-0 map-bg flex items-center justify-center">
<div className="flex flex-col items-center text-slate-400 gap-1">
<iconify-icon icon="lucide:map" strokeWidth="1" width="24"></iconify-icon>
<span className="text-[10px]">Интерактивная карта</span>
</div>
</div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full">
<iconify-icon className="text-emerald-600 drop-shadow-md" icon="lucide:map-pin" width="28"></iconify-icon>
</div>
<div className="absolute bottom-3 left-3 right-3">
<div className="bg-white p-1 rounded-lg shadow-sm border border-slate-100 flex items-center">
<div className="pl-2 text-slate-400">
<iconify-icon icon="lucide:search" width="14"></iconify-icon>
</div>
<input className="w-full text-xs border-0 focus:ring-0 text-slate-700 placeholder:text-slate-400 py-2 px-2 rounded-md bg-transparent" placeholder="Укажите адрес..." type="text"/>
</div>
</div>
</div>
</section>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<section>
<label className="block text-sm font-medium text-slate-900 mb-4">
                            4. Фото (опционально)
                        </label>
<div className="border border-dashed border-slate-300 rounded-xl p-4 transition-all hover:border-emerald-400 hover:bg-slate-50 cursor-pointer flex flex-col items-center justify-center text-center h-32 relative group">
<input className="absolute inset-0 opacity-0 cursor-pointer z-10" type="file"/>
<div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center text-slate-400 group-hover:text-emerald-500 group-hover:bg-emerald-50 transition-colors mb-2">
<iconify-icon icon="lucide:upload" width="16"></iconify-icon>
</div>
<span className="text-xs text-slate-500">Нажмите для загрузки</span>
</div>
</section>

<section>
<label className="block text-sm font-medium text-slate-900 mb-4">
                            5. Контакт
                        </label>
<div className="flex flex-col justify-between h-32">
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
<iconify-icon icon="lucide:phone" width="14"></iconify-icon>
</div>
<input className="w-full pl-9 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 text-sm" placeholder="+7" type="tel"/>
</div>
<p className="text-[10px] text-slate-400 leading-tight mt-auto">
<iconify-icon className="inline mb-0.5 mr-0.5" icon="lucide:lock" width="10"></iconify-icon>
                                Используем только для отчета.
                            </p>
</div>
</section>
</div>

<div className="pt-4 border-t border-slate-100">
<button className="w-full bg-slate-900 hover:bg-emerald-600 text-white font-medium py-3.5 px-6 rounded-xl shadow-lg shadow-slate-900/10 hover:shadow-emerald-600/20 active:scale-[0.99] transition-all flex items-center justify-center gap-2 group" type="submit">
<span>Отправить отчет</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform text-white/70 group-hover:text-white" icon="lucide:arrow-right" width="16"></iconify-icon>
</button>
</div>
</form>
</div>
</main>

    </>
  );
}
