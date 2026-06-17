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
      

<nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-slate-200 z-50">
<div className="max-w-3xl mx-auto px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-5 h-5 bg-slate-900 rounded-md flex items-center justify-center text-white text-xs font-medium">S</div>
<span className="text-sm font-medium tracking-tight text-slate-900">SAMARAONLINE24</span>
</div>
<div className="text-xs font-medium text-slate-400 tracking-tight uppercase">Спецпроект</div>
</div>
</nav>
<main className="pt-24 pb-20 px-6 max-w-3xl mx-auto">

<header className="mb-10">
<div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-xs font-medium mb-6">
<iconify-icon icon="solar:home-smile-linear"></iconify-icon>
                История №2: Семья Соколовых
            </div>
<h1 className="text-3xl sm:text-4xl md:text-5xl font-medium text-slate-900 tracking-tight mb-6 leading-[1.1]">
                Мы снимали «бабушкин вариант» за 28 тысяч. В 2025-м решились на свою трёшку по семейной ипотеке, несмотря на страх перед банками.
            </h1>
<p className="text-lg text-slate-500 leading-normal max-w-2xl mb-10">
                Максим и Елена из Самары воспитывают двух дочек. У них были скромные накопления, маткапитал и страх брать кредит на 30 лет. Рассказываем, как они победили бюрократию, посчитали бюджет и переехали в новостройку.
            </p>

<figure className="relative w-full aspect-[16/10] md:aspect-[21/9] overflow-hidden rounded-2xl border border-slate-200 shadow-sm bg-slate-100">
<img alt="Семья Соколовых в новой квартире" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb?q=80&amp;w=2550&amp;auto=format&amp;fit=crop"/>
<figcaption className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent text-white text-xs font-medium tracking-wide">
                    Максим, Елена и девочки в день приемки ключей
                </figcaption>
</figure>
</header>

<section className="mb-12">
<div className="prose prose-slate prose-lg max-w-none text-slate-600">
<p>
<span className="text-slate-900 font-medium">Меня зовут Максим, мне 33 года.</span> Мы с женой Леной и двумя дочками (3 и 6 лет) последние пять лет жили в съёмной двушке на Безымянке. Платили исправно 28 000 рублей плюс счетчики, терпели старый ремонт и вечное ощущение, что мы здесь гости. Триггером стала новость о продлении семейной ипотеки, но с новыми условиями. Мы поняли: либо сейчас, либо никогда.
                </p>
</div>
</section>

<section className="mb-16">
<div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
<div className="bg-slate-50 px-6 py-4 border-b border-slate-200 flex items-center gap-3">
<iconify-icon className="text-slate-400 text-xl" icon="solar:users-group-rounded-linear"></iconify-icon>
<h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider">Паспорт героев</h3>
</div>
<div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-12">

<div className="space-y-6">
<div>
<div className="text-xs text-slate-400 font-medium uppercase tracking-wider mb-1">Семья</div>
<div className="text-slate-900 font-medium">Максим (33), Елена (29), дочери (3 и 6 лет)</div>
<div className="text-sm text-slate-500 mt-1">Инженер и администратор салона</div>
</div>
<div>
<div className="text-xs text-slate-400 font-medium uppercase tracking-wider mb-1">Доход семьи</div>
<div className="text-slate-900 font-medium">130 000 – 145 000 ₽</div>
</div>
<div>
<div className="text-xs text-slate-400 font-medium uppercase tracking-wider mb-1">Было до покупки</div>
<div className="text-slate-900 font-medium">Аренда старой двушки</div>
<div className="text-sm text-slate-500 mt-1">28 000 ₽/мес + КУ</div>
</div>
</div>

<div className="space-y-6">
<div>
<div className="text-xs text-slate-400 font-medium uppercase tracking-wider mb-1">Стартовый капитал</div>
<div className="text-slate-900 font-medium">1 650 000 ₽</div>
<div className="text-sm text-slate-500 mt-1">960 тыс. накопления + 690 тыс. маткапитал</div>
</div>
<div>
<div className="text-xs text-slate-400 font-medium uppercase tracking-wider mb-1">Что купили</div>
<div className="text-slate-900 font-medium">Евро-трёшка, 68 м²</div>
<div className="text-sm text-slate-500 mt-1">ЖК в районе Московского шоссе</div>
</div>
<div>
<div className="text-xs text-slate-400 font-medium uppercase tracking-wider mb-1">Инструмент</div>
<div className="inline-flex items-center px-2 py-0.5 rounded bg-green-50 text-green-700 text-xs font-medium border border-green-100">
                                Семейная ипотека 6%
                            </div>
</div>
</div>
</div>
</div>
</section>

<section className="mb-16">
<h2 className="text-2xl font-medium text-slate-900 tracking-tight mb-8">Чего мы боялись больше всего</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="group p-5 rounded-xl border border-slate-200 bg-white hover:border-slate-300 transition-colors">
<div className="flex items-start gap-4">
<div className="mt-1 p-2 rounded-lg bg-orange-50 text-orange-600">
<iconify-icon icon="solar:history-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-1">«Грехи» молодости</h4>
<p className="text-sm text-slate-500">У меня была просрочка по кредитке 4 года назад. Боялись, что из-за этого банк сразу развернёт нас с ипотекой.</p>
</div>
</div>
</div>
<div className="group p-5 rounded-xl border border-slate-200 bg-white hover:border-slate-300 transition-colors">
<div className="flex items-start gap-4">
<div className="mt-1 p-2 rounded-lg bg-red-50 text-red-600">
<iconify-icon icon="solar:calendar-date-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-1">Кабала на 30 лет</h4>
<p className="text-sm text-slate-500">Цифра «30 лет» звучала как приговор. Страх потерять работу или заболеть и остаться с долгом давил сильнее всего.</p>
</div>
</div>
</div>
<div className="group p-5 rounded-xl border border-slate-200 bg-white hover:border-slate-300 transition-colors">
<div className="flex items-start gap-4">
<div className="mt-1 p-2 rounded-lg bg-slate-100 text-slate-600">
<iconify-icon icon="solar:brick-wall-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-1">Долгострой</h4>
<p className="text-sm text-slate-500">Наслушались историй про обманутых дольщиков. Было страшно вложить всё, что есть, в бетонную коробку, которую не достроят.</p>
</div>
</div>
</div>
<div className="group p-5 rounded-xl border border-slate-200 bg-white hover:border-slate-300 transition-colors">
<div className="flex items-start gap-4">
<div className="mt-1 p-2 rounded-lg bg-indigo-50 text-indigo-600">
<iconify-icon icon="solar:documents-minimalistic-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-1">Ад бюрократии</h4>
<p className="text-sm text-slate-500">Думали, что сбор справок для банка и опеки (из-за маткапитала) займет месяцы, и квартира уйдет.</p>
</div>
</div>
</div>
</div>
</section>

<section className="mb-16">
<h2 className="text-2xl font-medium text-slate-900 tracking-tight mb-6">Как мы считали деньги</h2>
<div className="prose prose-slate mb-8 text-slate-600">
<p>Мы «варились» в цифрах почти три месяца. Excel-таблица стала нашей самой открываемой вкладкой. Сначала смотрели вторичку, но ставки под 18-20% делали ежемесячный платеж неподъемным — около 80 тысяч рублей. Это больше половины нашего дохода.</p>
</div>

<div className="bg-indigo-600 rounded-2xl p-6 md:p-8 text-white shadow-lg relative overflow-hidden">
<div className="absolute top-0 right-0 opacity-10 transform translate-x-1/4 -translate-y-1/4">
<iconify-icon height="200" icon="solar:calculator-minimalistic-linear" width="200"></iconify-icon>
</div>
<div className="relative z-10">
<h3 className="text-lg font-medium opacity-90 mb-4 uppercase tracking-widest text-indigo-200">Момент истины</h3>
<p className="text-xl md:text-2xl font-medium leading-relaxed">
                        «Мы посчитали: если берем 6 млн на 30 лет под 6% (семейная ипотека), то платеж выходит <span className="text-white font-semibold underline decoration-indigo-300 underline-offset-4 decoration-2">35 900 рублей</span>. Это всего на 7 тысяч больше, чем мы платим за чужую квартиру с тараканами. Только это будет наше».
                    </p>
</div>
</div>
</section>

<section className="mb-16">
<h2 className="text-2xl font-medium text-slate-900 tracking-tight mb-8">Цифры нашей сделки</h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-slate-200 border border-slate-200 rounded-xl overflow-hidden">
<div className="bg-white p-6">
<div className="text-xs text-slate-500 uppercase tracking-wider mb-2">Цена квартиры</div>
<div className="text-xl md:text-2xl font-medium text-slate-900 tracking-tight">7.6 млн ₽</div>
</div>
<div className="bg-white p-6">
<div className="text-xs text-slate-500 uppercase tracking-wider mb-2">Первый взнос</div>
<div className="text-xl md:text-2xl font-medium text-slate-900 tracking-tight">1.6 млн ₽</div>
<div className="text-xs text-slate-400 mt-1">21%</div>
</div>
<div className="bg-white p-6">
<div className="text-xs text-slate-500 uppercase tracking-wider mb-2">Сумма кредита</div>
<div className="text-xl md:text-2xl font-medium text-slate-900 tracking-tight">6.0 млн ₽</div>
<div className="text-xs text-slate-400 mt-1">Лимит прог.</div>
</div>
<div className="bg-white p-6">
<div className="text-xs text-slate-500 uppercase tracking-wider mb-2">Платёж</div>
<div className="text-xl md:text-2xl font-medium text-indigo-600 tracking-tight">35 970 ₽</div>
<div className="text-xs text-slate-400 mt-1">на 30 лет</div>
</div>
</div>
</section>

<section className="mb-16">
<h2 className="text-2xl font-medium text-slate-900 tracking-tight mb-8">Почему в итоге выбрали этот район и этот дом</h2>
<div className="space-y-6">
<div className="flex gap-4">
<div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 border border-slate-200 font-medium text-sm">1</div>
<div>
<h4 className="text-slate-900 font-medium mb-1">Репутация застройщика</h4>
<p className="text-sm text-slate-500">Выбрали компанию, которая строит в Самаре уже 15 лет. Съездили на их сданные объекты, поговорили с жильцами во дворе. Негатива про срывы сроков не нашли.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 border border-slate-200 font-medium text-sm">2</div>
<div>
<h4 className="text-slate-900 font-medium mb-1">Локация «на вырост»</h4>
<p className="text-sm text-slate-500">Район не в центре, но до работы Максима 20 минут на машине. Школа и сад уже построены в соседнем квартале — не нужно ждать обещаний.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 border border-slate-200 font-medium text-sm">3</div>
<div>
<h4 className="text-slate-900 font-medium mb-1">Планировка с кухней-гостиной</h4>
<p className="text-sm text-slate-500">68 метров. Главное — большая кухня-гостиная (19 м²), где мы будем проводить время вместе, и две отдельные маленькие спальни. Это лучше, чем огромные коридоры в старом фонде.</p>
</div>
</div>
</div>
</section>

<section className="mb-16 border-t border-slate-200 pt-12">
<h3 className="text-xl font-medium text-slate-900 mb-4">Как изменилась жизнь после решения</h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div>
<div className="text-sm font-semibold text-green-600 mb-2 flex items-center gap-2">
<iconify-icon icon="solar:smile-circle-linear"></iconify-icon>
                        Что стало лучше
                    </div>
<p className="text-sm text-slate-600">
                        Появилось ощущение стабильности. Мы больше не боимся, что хозяйка квартиры попросит съехать через месяц. Дети выбирают обои в свои комнаты, а мы планируем кухню мечты.
                    </p>
</div>
<div>
<div className="text-sm font-semibold text-orange-500 mb-2 flex items-center gap-2">
<iconify-icon icon="solar:expressionless-circle-linear"></iconify-icon>
                        Что оказалось труднее
                    </div>
<p className="text-sm text-slate-600">
                        Платёж всё-таки ощущается, пришлось урезать расходы на развлечения и доставку еды. Плюс предстоит ремонт — это ещё один финансовый вызов, но мы решили делать его поэтапно.
                    </p>
</div>
</div>
</section>

<section className="mb-20">
<div className="bg-slate-900 rounded-2xl p-8 text-white">
<h2 className="text-2xl font-medium mb-8 tracking-tight">Советы тем, кто сейчас думает</h2>
<ul className="space-y-6">
<li className="flex items-start gap-4">
<iconify-icon className="text-indigo-400 text-xl flex-shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<div>
<span className="font-medium block mb-1">Сначала бюджет, потом мечты</span>
<span className="text-slate-400 text-sm">Определите комфортный платеж (не более 30-40% дохода) и только потом ищите квартиру под эту сумму. Не наоборот.</span>
</div>
</li>
<li className="flex items-start gap-4">
<iconify-icon className="text-indigo-400 text-xl flex-shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<div>
<span className="font-medium block mb-1">Не бойтесь срока в 30 лет</span>
<span className="text-slate-400 text-sm">Лучше взять на 30 лет с комфортным ежемесячным платежом и гасить досрочно, чем взять на 15 лет и жить впроголодь, боясь просрочки.</span>
</div>
</li>
<li className="flex items-start gap-4">
<iconify-icon className="text-indigo-400 text-xl flex-shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<div>
<span className="font-medium block mb-1">Закройте кредитки заранее</span>
<span className="text-slate-400 text-sm">За 3-6 месяцев до ипотеки погасите и закройте кредитные карты. Даже пустая кредитка влияет на то, сколько денег вам одобрит банк.</span>
</div>
</li>
<li className="flex items-start gap-4">
<iconify-icon className="text-indigo-400 text-xl flex-shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<div>
<span className="font-medium block mb-1">Маткапитал — в первый взнос</span>
<span className="text-slate-400 text-sm">Мы направили его на покупку, чтобы уменьшить тело кредита сразу. Ремонт можно делать постепенно с зарплаты.</span>
</div>
</li>
</ul>
</div>
</section>

<section className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm text-center max-w-2xl mx-auto">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50 text-indigo-600 mb-4">
<iconify-icon icon="solar:chat-round-line-linear" width="24"></iconify-icon>
</div>
<h2 className="text-xl font-medium text-slate-900 mb-2">У вас похожая ситуация?</h2>
<p className="text-slate-500 mb-8 text-sm">
                Расскажите, какой у вас доход, накопления и планы — редакция SamaraOnline24 вместе с партнёрами разберёт ваш кейс и подскажет сценарии покупки.
            </p>
<form className="space-y-4 text-left" onsubmit="event.preventDefault();">
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5 ml-1">Ваше имя</label>
<input className="w-full px-4 py-2.5 rounded-lg border border-slate-200 bg-slate-50 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all placeholder:text-slate-400" placeholder="Иван" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5 ml-1">Ваш вопрос или ситуация</label>
<textarea className="w-full px-4 py-2.5 rounded-lg border border-slate-200 bg-slate-50 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all placeholder:text-slate-400" placeholder="Например: есть 500к, хочу квартиру в центре..." rows="3"></textarea>
</div>
<button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-medium py-3 rounded-lg text-sm transition-colors flex items-center justify-center gap-2" type="submit">
<span>Отправить заявку на разбор</span>
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
<p className="text-xs text-center text-slate-400 mt-4">Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных</p>
</form>
</section>
</main>
<footer className="border-t border-slate-200 bg-white py-12">
<div className="max-w-3xl mx-auto px-6 text-center">
<div className="text-sm font-medium tracking-tight text-slate-900 mb-4">SAMARAONLINE24</div>
<p className="text-xs text-slate-400">© 2025 Спецпроект «Я покупаю квартиру». Все права защищены.</p>
</div>
</footer>

    </>
  );
}
