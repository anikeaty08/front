import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-40"></div>
<div className="fixed top-0 left-0 right-0 h-96 bg-gradient-to-b from-rose-50/50 to-transparent -z-10"></div>

<header className="w-full max-w-3xl mx-auto px-6 py-8 flex justify-center sm:justify-start">
<div className="text-xs font-semibold tracking-tighter text-zinc-400 uppercase letter-spacing-widest">
            T &amp; Y
        </div>
</header>
<main className="w-full max-w-2xl mx-auto px-6 pb-24 flex flex-col gap-20">

<section className="flex flex-col items-center sm:items-start text-center sm:text-left mt-12 sm:mt-20 gap-6 animate-fade-in">
<div className="inline-flex items-center justify-center p-3 bg-white rounded-2xl shadow-sm ring-1 ring-zinc-200/60 text-rose-400 mb-2">
<iconify-icon height="28" icon="solar:heart-angle-linear" width="28"></iconify-icon>
</div>
<h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-zinc-900 leading-tight">
                Привет, <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-pink-500">моя радость</span>.
            </h1>
<p className="text-base sm:text-lg text-zinc-500 font-normal max-w-lg leading-relaxed">
                Я сделал эту небольшую страничку просто для того, чтобы напомнить тебе одну очень важную вещь, о которой я думаю каждый день.
            </p>
</section>

<section className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm ring-1 ring-zinc-100 flex flex-col gap-5">
<div className="flex justify-between items-end">
<div className="flex items-center gap-2">
<iconify-icon className="text-zinc-400" icon="solar:graph-up-linear"></iconify-icon>
<span className="text-sm font-medium text-zinc-700 tracking-tight">Уровень моей любви к тебе</span>
</div>
<span className="text-xs font-medium text-rose-500 bg-rose-50 px-2 py-1 rounded-full">Бесконечность %</span>
</div>

<div className="h-2 w-full bg-zinc-100 rounded-full overflow-hidden relative">
<div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-rose-300 via-pink-400 to-rose-500 rounded-full"></div>
</div>
<p className="text-xs text-zinc-400 text-right mt-1">Шкала сломалась, потому что не может измерить такие объемы.</p>
</section>

<section className="flex flex-col gap-6">
<h2 className="text-2xl font-medium tracking-tight text-zinc-900 px-2">Почему именно ты?</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

<div className="group bg-white p-6 rounded-3xl shadow-sm ring-1 ring-zinc-200/60 flex flex-col gap-4 hover:shadow-md hover:ring-rose-200 transition-all duration-300">
<div className="h-10 w-10 rounded-full bg-rose-50 flex items-center justify-center text-rose-500 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:smile-circle-linear" width="22"></iconify-icon>
</div>
<div>
<h3 className="text-base font-medium tracking-tight text-zinc-900 mb-1">Твоя улыбка</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Она способна осветить самый хмурый мой день. Когда ты улыбаешься, я забываю обо всех проблемах.</p>
</div>
</div>

<div className="group bg-white p-6 rounded-3xl shadow-sm ring-1 ring-zinc-200/60 flex flex-col gap-4 hover:shadow-md hover:ring-rose-200 transition-all duration-300">
<div className="h-10 w-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-500 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:sun-2-linear" width="22"></iconify-icon>
</div>
<div>
<h3 className="text-base font-medium tracking-tight text-zinc-900 mb-1">Твое тепло</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Рядом с тобой я чувствую себя по-настоящему дома. Твои объятия — моё самое безопасное место.</p>
</div>
</div>

<div className="group bg-white p-6 rounded-3xl shadow-sm ring-1 ring-zinc-200/60 flex flex-col gap-4 hover:shadow-md hover:ring-rose-200 transition-all duration-300">
<div className="h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-500 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:star-fall-linear" width="22"></iconify-icon>
</div>
<div>
<h3 className="text-base font-medium tracking-tight text-zinc-900 mb-1">Твои глаза</h3>
<p className="text-sm text-zinc-500 leading-relaxed">В них можно утонуть. Я готов смотреть в них часами и каждый раз находить что-то новое.</p>
</div>
</div>

<div className="group bg-white p-6 rounded-3xl shadow-sm ring-1 ring-zinc-200/60 flex flex-col gap-4 hover:shadow-md hover:ring-rose-200 transition-all duration-300">
<div className="h-10 w-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-500 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:infinity-linear" width="22"></iconify-icon>
</div>
<div>
<h3 className="text-base font-medium tracking-tight text-zinc-900 mb-1">Просто ты</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Я люблю каждую твою черту, каждую привычку. Ты идеальна для меня во всем.</p>
</div>
</div>
</div>
</section>

<section className="relative bg-zinc-900 rounded-[2rem] p-8 sm:p-12 shadow-lg overflow-hidden mt-8">

<div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-rose-500/20 rounded-full blur-3xl"></div>
<div className="relative z-10 flex flex-col items-center text-center gap-8">
<iconify-icon className="text-zinc-600" icon="solar:quote-left-linear" width="36"></iconify-icon>
<p className="text-lg sm:text-xl font-normal text-zinc-300 leading-relaxed tracking-tight max-w-lg">
                    Я никогда не думал, что можно привязаться к человеку так сильно. Ты — лучшее, что случалось в моей жизни. Спасибо тебе за то, что ты есть у меня.
                </p>
<div className="flex flex-col items-center gap-3">
<div className="h-px w-12 bg-zinc-700"></div>
<span className="text-xs font-medium text-zinc-400 uppercase tracking-widest">Я очень тебя люблю</span>
</div>
</div>
</section>
</main>
<footer className="mt-auto py-8 text-center">
<p className="text-xs text-zinc-400 font-normal">
            Создано с <iconify-icon className="text-rose-400 translate-y-[2px]" icon="solar:heart-bold" inline=""></iconify-icon> только для тебя.
        </p>
</footer>

    </>
  );
}
