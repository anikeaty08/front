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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      

<header className="md:px-12 flex w-full z-50 pt-8 pr-6 pb-8 pl-6 absolute top-0 items-center justify-between">
<div className="tracking-tighter font-medium uppercase text-white text-sm tracking-[0.2em]">Adventure Guide</div>
<a className="text-white text-sm font-medium border border-white/30 rounded-full px-5 py-2 hover:bg-white hover:text-[#0B3954] transition-colors duration-300" href="#booking">Забронировать</a>
</header>

<section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 pt-32 pb-20 overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Мыс Бурхан, Байкал" className="object-center w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a576fc9c-9638-4d6c-a314-39e5324a86d4_1600w.webp"/>
<div className="bg-gradient-to-b from-black/60 via-[#0B3954]/50 to-[#0B3954]/95 absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="flex flex-col md:flex-row w-full max-w-7xl z-10 mr-auto ml-auto relative gap-x-16 gap-y-16 items-end">

<div className="flex-1">
<span className="inline-block text-[#E6A817] uppercase tracking-widest text-xs font-medium mb-6 border border-[#E6A817]/30 px-3 py-1 rounded-full bg-[#E6A817]/10 backdrop-blur-sm">Активно-экскурсионный тур</span>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-white leading-[1.1] mb-6" style={{fontFamily: '\'Playfair Display\', serif'}}>
                    Байкальские предания.<br/>Листвянка – Ольхон,<br/>7 дней
                </h1>
<h2 className="text-xl md:text-2xl text-white/80 font-light tracking-tight mb-10 max-w-2xl">
                    Услышать голос озера через легенды, священные места и вековые традиции.
                </h2>
<div className="md:columns-2 gap-8 text-white/70 text-sm md:text-base leading-relaxed mb-12 max-w-3xl border-l border-[#E6A817]/50 pl-6">
<p className="md:mb-0 break-inside-avoid mb-4">Этот тур создан для тех, кто хочет не просто увидеть озеро, а услышать его голос. Вы пройдете путь от сибирской тайги до сакрального сердца Байкала, погружаясь в атмосферу древних мифов и первозданной природы.</p>
<p className="break-inside-avoid">Вы увидите легендарную скалу Шаманка, достигнете северного мыса Хобой, ощутите энергию Ступы Просветления на острове Огой и встретитесь с милыми нерпами в их естественной среде.</p>
</div>
<a className="inline-flex items-center justify-center bg-[#E6A817] text-[#0B3954] px-8 py-4 rounded-full text-sm font-medium hover:bg-white transition duration-300 shadow-lg shadow-[#E6A817]/20" href="#booking">
                    Забронировать тур
                </a>
</div>

<div className="w-full md:w-[320px] shrink-0 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6">
<h3 className="text-white text-sm font-medium mb-6 opacity-80">Что вас ожидает:</h3>
<div className="grid grid-cols-3 gap-y-6 gap-x-2">
<div className="flex flex-col items-center text-center gap-2 text-white/70">
<iconify-icon className="text-2xl text-[#E6A817]" icon="solar:museum-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-[0.65rem] uppercase tracking-wider">Тальцы</span>
</div>
<div className="flex flex-col items-center text-center gap-2 text-white/70">
<iconify-icon className="text-2xl text-[#E6A817]" icon="solar:mountain-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-[0.65rem] uppercase tracking-wider">К. Черского</span>
</div>
<div className="flex flex-col items-center text-center gap-2 text-white/70">
<iconify-icon className="text-2xl text-[#E6A817]" icon="solar:magic-stick-3-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-[0.65rem] uppercase tracking-wider">Шаманка</span>
</div>
<div className="flex flex-col items-center text-center gap-2 text-white/70">
<iconify-icon className="text-2xl text-[#E6A817]" icon="solar:waterdrop-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-[0.65rem] uppercase tracking-wider">Нерпа</span>
</div>
<div className="flex flex-col items-center text-center gap-2 text-white/70">
<iconify-icon className="text-2xl text-[#E6A817]" icon="solar:ship-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-[0.65rem] uppercase tracking-wider">Катер</span>
</div>
<div className="flex flex-col items-center text-center gap-2 text-white/70">
<iconify-icon className="text-2xl text-[#E6A817]" icon="solar:monument-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-[0.65rem] uppercase tracking-wider">Ступа Огой</span>
</div>
<div className="flex flex-col items-center text-center gap-2 text-white/70 col-span-3 mt-2 pt-4 border-t border-white/10">
<iconify-icon className="text-2xl text-[#E6A817]" icon="solar:map-point-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-[0.65rem] uppercase tracking-wider">Мыс Хобой (Край острова)</span>
</div>
</div>
</div>
</div>
</section>

<section className="md:py-32 md:px-12 bg-[#F5F4F0] pt-24 pr-6 pb-24 pl-6">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-20">
<h2 className="text-3xl md:text-5xl tracking-tight text-[#0B3954] mb-4" style={{fontFamily: '\'Playfair Display\', serif'}}>Программа тура</h2>
<p className="text-gray-500 text-sm tracking-widest uppercase">7 дней / 6 ночей</p>
</div>
<div className="flex flex-col gap-24 md:gap-32">

<div className="flex flex-col md:flex-row gap-10 md:gap-16 items-center">
<div className="w-full md:w-1/2 aspect-[4/3] rounded-3xl overflow-hidden bg-gray-200">
<img alt="Архитектурно-этнографический музей Тальцы" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/95c0af1e-5978-4069-8401-bcb566a91585_1600w.webp"/>
</div>
<div className="w-full md:w-1/2 flex flex-col justify-center">
<span className="inline-flex items-center justify-center bg-[#0B3954]/5 text-[#0B3954] font-medium text-xs tracking-widest uppercase px-4 py-1.5 rounded-full mb-6 w-max">День 1</span>
<h3 className="text-2xl md:text-3xl tracking-tight text-[#0B3954] mb-4 leading-tight" style={{fontFamily: '\'Playfair Display\', serif'}}>Встреча в Иркутске. Переезд в Листвянку.</h3>
<p className="text-gray-600 text-sm md:text-base leading-relaxed mb-8">Встреча в Иркутске. Переезд в п.Листвянка. По пути мы посетим архитектурно-этнографический музей под открытым небом «Тальцы», где познакомимся с бытом сибиряков прошлых веков. По прибытии в Листвянку — прогулка по побережью и подъем на кресельной канатной дороге на Камень Черского, откуда открывается потрясающий вид на исток Ангары и Шаман-камень. Вечером заселение в комфортабельную гостиницу и приветственный ужин.</p>
<div className="flex flex-wrap gap-6 text-xs text-gray-500 font-medium tracking-wide">
<div className="flex items-center gap-2"><iconify-icon className="text-lg text-[#E6A817]" icon="solar:cup-linear"></iconify-icon>3-разовое</div>
<div className="flex items-center gap-2"><iconify-icon className="text-lg text-[#E6A817]" icon="solar:bed-linear"></iconify-icon>Отель</div>
<div className="flex items-center gap-2"><iconify-icon className="text-lg text-[#E6A817]" icon="solar:bath-linear"></iconify-icon>Есть</div>
</div>
</div>
</div>

<div className="flex flex-col md:flex-row gap-10 md:gap-16 items-center">
<div className="w-full md:w-1/2 aspect-[4/3] rounded-3xl overflow-hidden bg-gray-200 md:order-last">
<img alt="Тажеранские степи" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/476b868a-f053-46d5-918a-64634eb7ed85_1600w.webp"/>
</div>
<div className="w-full md:w-1/2 flex flex-col justify-center">
<span className="inline-flex items-center justify-center bg-[#0B3954]/5 text-[#0B3954] font-medium text-xs tracking-widest uppercase px-4 py-1.5 rounded-full mb-6 w-max">День 2</span>
<h3 className="text-2xl md:text-3xl tracking-tight text-[#0B3954] mb-4 leading-tight" style={{fontFamily: '\'Playfair Display\', serif'}}>Дорога на Ольхон. Тажеранские степи.</h3>
<p className="text-gray-600 text-sm md:text-base leading-relaxed mb-8">Ранний завтрак и переезд на остров Ольхон. Наш путь пролегает по живописному Качугскому тракту. Мы совершим автоэкскурсию через марсианские пейзажи Тажеранских степей, остановимся у памятника Бродяге и бронзовой фигуры Орла. На обед отведаем традиционные бурятские буузы. Далее — переправа на пароме через пролив Ольхонские ворота. Прибытие в Хужир, заселение на базу отдыха.</p>
<div className="flex flex-wrap gap-6 text-xs text-gray-500 font-medium tracking-wide">
<div className="flex items-center gap-2"><iconify-icon className="text-lg text-[#E6A817]" icon="solar:cup-linear"></iconify-icon>3-разовое</div>
<div className="flex items-center gap-2"><iconify-icon className="text-lg text-[#E6A817]" icon="solar:bed-linear"></iconify-icon>Гостиница</div>
<div className="flex items-center gap-2"><iconify-icon className="text-lg text-[#E6A817]" icon="solar:bath-linear"></iconify-icon>Есть</div>
</div>
</div>
</div>

<div className="flex flex-col md:flex-row gap-10 md:gap-16 items-center">
<div className="w-full md:w-1/2 aspect-[4/3] rounded-3xl overflow-hidden bg-gray-200">
<img alt="Скала Шаманка" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5db50487-ddab-4bd6-b7a3-c84b85768235_1600w.webp"/>
</div>
<div className="w-full md:w-1/2 flex flex-col justify-center">
<span className="inline-flex items-center justify-center bg-[#0B3954]/5 text-[#0B3954] font-medium text-xs tracking-widest uppercase px-4 py-1.5 rounded-full mb-6 w-max">День 3</span>
<h3 className="text-2xl md:text-3xl tracking-tight text-[#0B3954] mb-4 leading-tight" style={{fontFamily: '\'Playfair Display\', serif'}}>Святыни Ольхона: Скала Шаманка.</h3>
<p className="text-gray-600 text-sm md:text-base leading-relaxed mb-8">Пешая неспешная прогулка к сакральному символу Байкала — мысу Бурхан. Мы увидим знаменитую двухвершинную скалу Шаманка, священные столбы Сэргэ, повязанные разноцветными лентами хадак. Гид расскажет древние легенды о духах озера. После экскурсии спустимся на Сарайский пляж с его золотым песком и реликтовыми соснами для отдыха и фотографий.</p>
<div className="flex flex-wrap gap-6 text-xs text-gray-500 font-medium tracking-wide">
<div className="flex items-center gap-2"><iconify-icon className="text-lg text-[#E6A817]" icon="solar:cup-linear"></iconify-icon>3-разовое</div>
<div className="flex items-center gap-2"><iconify-icon className="text-lg text-[#E6A817]" icon="solar:bed-linear"></iconify-icon>Гостиница</div>
<div className="flex items-center gap-2"><iconify-icon className="text-lg text-[#E6A817]" icon="solar:bath-linear"></iconify-icon>Есть</div>
</div>
</div>
</div>

<div className="flex flex-col md:flex-row gap-10 md:gap-16 items-center">
<div className="w-full md:w-1/2 aspect-[4/3] rounded-3xl overflow-hidden bg-gray-200 md:order-last">
<img alt="Мыс Хобой, УАЗ" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/09b4942f-7c8f-4bd6-82de-b333279e2b11_1600w.webp"/>
</div>
<div className="w-full md:w-1/2 flex flex-col justify-center">
<span className="inline-flex items-center justify-center bg-[#0B3954]/5 text-[#0B3954] font-medium text-xs tracking-widest uppercase px-4 py-1.5 rounded-full mb-6 w-max">День 4</span>
<h3 className="text-2xl md:text-3xl tracking-tight text-[#0B3954] mb-4 leading-tight" style={{fontFamily: '\'Playfair Display\', serif'}}>Северная точка: Мыс Хобой на УАЗ.</h3>
<p className="text-gray-600 text-sm md:text-base leading-relaxed mb-8">Настоящее байкальское сафари на колоритных автомобилях УАЗ! Мы отправляемся к самой северной точке острова — мысу Хобой. По пути остановимся у урочища Песчаное, мыса Саган-Хушун (скала Три Брата) и мыса Любви. На самом Хобое перед нами откроется бесконечная панорама открытого (Большого) Байкала. На обед водитель приготовит для нас вкуснейшую уху из свежевыловленной рыбы на костре.</p>
<div className="flex flex-wrap gap-6 text-xs text-gray-500 font-medium tracking-wide">
<div className="flex items-center gap-2"><iconify-icon className="text-lg text-[#E6A817]" icon="solar:cup-linear"></iconify-icon>Пикник/Уха</div>
<div className="flex items-center gap-2"><iconify-icon className="text-lg text-[#E6A817]" icon="solar:bed-linear"></iconify-icon>Гостиница</div>
<div className="flex items-center gap-2"><iconify-icon className="text-lg text-[#E6A817]" icon="solar:bath-linear"></iconify-icon>Есть</div>
</div>
</div>
</div>

<div className="flex flex-col md:flex-row gap-10 md:gap-16 items-center">
<div className="w-full md:w-1/2 aspect-[4/3] rounded-3xl overflow-hidden bg-gray-200">
<img alt="Отдых на Сарайском пляже" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ba204ef4-b989-4de0-8a60-72e12618c972_1600w.webp"/>
</div>
<div className="w-full md:w-1/2 flex flex-col justify-center">
<span className="inline-flex items-center justify-center bg-[#0B3954]/5 text-[#0B3954] font-medium text-xs tracking-widest uppercase px-4 py-1.5 rounded-full mb-6 w-max">День 5</span>
<h3 className="text-2xl md:text-3xl tracking-tight text-[#0B3954] mb-4 leading-tight" style={{fontFamily: '\'Playfair Display\', serif'}}>Свободный день. Энергия Ольхона.</h3>
<p className="text-gray-600 text-sm md:text-base leading-relaxed mb-8">День, полностью посвященный вашим желаниям. Вы можете неспешно гулять по поселку Хужир, заглянуть в местные сувенирные лавки или провести время на пляже, слушая шум волн. Для любителей активности доступна аренда SUP-бордов, каяков, велосипедов или организация конной прогулки. Вечером желающие могут забронировать настоящую сибирскую баню с купелью.</p>
<div className="flex flex-wrap gap-6 text-xs text-gray-500 font-medium tracking-wide">
<div className="flex items-center gap-2"><iconify-icon className="text-lg text-[#E6A817]" icon="solar:cup-linear"></iconify-icon>Завтрак/Ужин</div>
<div className="flex items-center gap-2"><iconify-icon className="text-lg text-[#E6A817]" icon="solar:bed-linear"></iconify-icon>Гостиница</div>
<div className="flex items-center gap-2"><iconify-icon className="text-lg text-[#E6A817]" icon="solar:bath-linear"></iconify-icon>Есть</div>
</div>
</div>
</div>

<div className="flex flex-col md:flex-row gap-10 md:gap-16 items-center">
<div className="w-full md:w-1/2 aspect-[4/3] rounded-3xl overflow-hidden bg-gray-200 md:order-last">
<img alt="Ступа просветления на Огое" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/02f60895-9b18-4d2d-9a2c-f513fde450dd_1600w.jpg"/>
</div>
<div className="w-full md:w-1/2 flex flex-col justify-center">
<span className="inline-flex items-center justify-center bg-[#0B3954]/5 text-[#0B3954] font-medium text-xs tracking-widest uppercase px-4 py-1.5 rounded-full mb-6 w-max">День 6</span>
<h3 className="text-2xl md:text-3xl tracking-tight text-[#0B3954] mb-4 leading-tight" style={{fontFamily: '\'Playfair Display\', serif'}}>Водная экспедиция: Огой и нерпы.</h3>
<p className="text-gray-600 text-sm md:text-base leading-relaxed mb-8">Увлекательная водная прогулка на быстроходном катере по Малому Морю. Наша главная цель — необитаемый остров Огой, где возвышается белоснежная буддийская Ступа Просветления. Мы обойдем ее по кругу, загадав сокровенное желание. Далее пройдем мимо острова Замогой, где на скалах часто греются на солнце очаровательные байкальские нерпы — эндемики озера.</p>
<div className="flex flex-wrap gap-6 text-xs text-gray-500 font-medium tracking-wide">
<div className="flex items-center gap-2"><iconify-icon className="text-lg text-[#E6A817]" icon="solar:cup-linear"></iconify-icon>3-разовое</div>
<div className="flex items-center gap-2"><iconify-icon className="text-lg text-[#E6A817]" icon="solar:bed-linear"></iconify-icon>Гостиница</div>
<div className="flex items-center gap-2"><iconify-icon className="text-lg text-[#E6A817]" icon="solar:bath-linear"></iconify-icon>Есть</div>
</div>
</div>
</div>

<div className="flex flex-col md:flex-row gap-10 md:gap-16 items-center">
<div className="w-full md:w-1/2 aspect-[4/3] rounded-3xl overflow-hidden bg-gray-200">
<img alt="Дорога домой, Иркутск" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/936d9b62-c195-41f0-9812-10e4f7215c6e_1600w.webp"/>
</div>
<div className="w-full md:w-1/2 flex flex-col justify-center">
<span className="inline-flex items-center justify-center bg-[#0B3954]/5 text-[#0B3954] font-medium text-xs tracking-widest uppercase px-4 py-1.5 rounded-full mb-6 w-max">День 7</span>
<h3 className="text-2xl md:text-3xl tracking-tight text-[#0B3954] mb-4 leading-tight" style={{fontFamily: '\'Playfair Display\', serif'}}>Завершение тура. Возвращение.</h3>
<p className="text-gray-600 text-sm md:text-base leading-relaxed mb-8">Заключительный завтрак на Байкале. Сбор вещей, прощание с озером, бросание монетки, чтобы обязательно вернуться. Выселение из гостиницы и трансфер к паромной переправе. Переезд на микроавтобусе обратно в Иркутск. Прибытие в город ориентировочно к 18:00 (аэропорт/ж-д вокзал/центр). Окончание нашей невероятной сибирской сказки.</p>
<div className="flex flex-wrap gap-6 text-xs text-gray-500 font-medium tracking-wide">
<div className="flex items-center gap-2"><iconify-icon className="text-lg text-[#E6A817]" icon="solar:cup-linear"></iconify-icon>Завтрак</div>
<div className="flex items-center gap-2"><iconify-icon className="text-lg text-[#E6A817]" icon="solar:bus-linear"></iconify-icon>Трансфер</div>
<div className="flex items-center gap-2"><iconify-icon className="text-lg text-[#E6A817]" icon="solar:map-arrow-left-linear"></iconify-icon>В пути</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 md:px-12 bg-white">
<div className="max-w-5xl mx-auto">
<h2 className="text-3xl md:text-4xl tracking-tight text-[#0B3954] mb-16 text-center" style={{fontFamily: '\'Playfair Display\', serif'}}>Условия тура</h2>
<div className="grid md:grid-cols-2 gap-12 mb-16">

<div className="bg-gray-50/50 border border-gray-100 rounded-3xl p-8 md:p-10">
<h3 className="text-lg font-medium text-[#0B3954] mb-8 flex items-center gap-3">
                        Включено в стоимость
                    </h3>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<iconify-icon className="text-xl text-[#0B3954] shrink-0 mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm text-gray-600">Все трансферы по программе (авто, УАЗ, паром)</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-xl text-[#0B3954] shrink-0 mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm text-gray-600">Сопровождение профессионального гида</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-xl text-[#0B3954] shrink-0 mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm text-gray-600">Все экскурсии и входные билеты в нац. парки</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-xl text-[#0B3954] shrink-0 mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm text-gray-600">Проживание (отель/база отдыха, 6 ночей)</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-xl text-[#0B3954] shrink-0 mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm text-gray-600">Трехразовое питание (по программе)</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-xl text-[#0B3954] shrink-0 mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm text-gray-600">Водная прогулка на катере</span>
</li>
</ul>
</div>

<div className="bg-white border border-gray-100 rounded-3xl p-8 md:p-10 shadow-[0_0_40px_-15px_rgba(0,0,0,0.05)]">
<h3 className="text-lg font-medium text-gray-400 mb-8 flex items-center gap-3">
                        Не включено
                    </h3>
<ul className="space-y-4 opacity-80">
<li className="flex items-start gap-3">
<iconify-icon className="text-xl text-gray-400 shrink-0 mt-0.5" icon="solar:minus-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm text-gray-500">Авиа и ж/д билеты до Иркутска</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-xl text-gray-400 shrink-0 mt-0.5" icon="solar:minus-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm text-gray-500">Билеты в Нерпинарий (по желанию)</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-xl text-gray-400 shrink-0 mt-0.5" icon="solar:minus-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm text-gray-500">Аренда SUP-бордов, каяков в свободный день</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-xl text-gray-400 shrink-0 mt-0.5" icon="solar:minus-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm text-gray-500">Сибирская баня на Ольхоне</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-xl text-gray-400 shrink-0 mt-0.5" icon="solar:minus-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm text-gray-500">Алкогольные напитки и сувениры</span>
</li>
</ul>
</div>
</div>

<div className="bg-[#0B3954] rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-[#E6A817]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
<div className="relative z-10 text-center md:text-left">
<p className="text-white/60 text-sm mb-2 font-medium tracking-wide">Стоимость тура</p>
<p className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-2">От 92 800 ₽ <span className="text-xl text-white/50 font-light">/ чел</span></p>
<p className="text-xs text-white/40">*Доплата за одноместное размещение: +37 150 ₽</p>
</div>
<a className="relative z-10 w-full md:w-auto text-center bg-[#E6A817] text-[#0B3954] px-8 py-4 rounded-full text-sm font-medium hover:bg-white transition duration-300" href="#booking">
                    Оставить заявку
                </a>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 bg-[#F5F4F0]">
<div className="max-w-4xl mx-auto">
<div className="flex items-center justify-between mb-12 border-b border-gray-200 pb-8">
<h2 className="text-3xl md:text-4xl tracking-tight text-[#0B3954]" style={{fontFamily: '\'Playfair Display\', serif'}}>Как добраться</h2>
<div className="flex items-center gap-2 text-[#0B3954] bg-white px-4 py-2 rounded-full shadow-sm text-sm font-medium">
<iconify-icon className="text-lg" icon="solar:map-point-linear"></iconify-icon>
                    Старт: Иркутск
                </div>
</div>
<div className="grid md:grid-cols-2 gap-6">
<div className="bg-white rounded-2xl p-8 flex gap-6 items-start">
<div className="w-12 h-12 rounded-full bg-[#F5F4F0] flex items-center justify-center shrink-0">
<iconify-icon className="text-2xl text-[#0B3954]" icon="solar:plane-linear"></iconify-icon>
</div>
<div className="">
<h4 className="text-lg font-medium text-[#0B3954] mb-2">Самолет</h4>
<p className="text-sm text-gray-500 leading-relaxed">Ежедневные прямые рейсы авиакомпаний Аэрофлот, S7 Airlines, Уральские авиалинии из Москвы. Время в пути: 5.5 - 6 часов.</p>
</div>
</div>
<div className="bg-white rounded-2xl p-8 flex gap-6 items-start">
<div className="w-12 h-12 rounded-full bg-[#F5F4F0] flex items-center justify-center shrink-0">
<iconify-icon className="text-2xl text-[#0B3954]" icon="solar:tram-linear"></iconify-icon>
</div>
<div>
<h4 className="text-lg font-medium text-[#0B3954] mb-2">Поезд</h4>
<p className="text-sm text-gray-500 leading-relaxed">По Транссибирской магистрали. Время в пути из центральной части России составляет около 3-3.5 суток. Идеально для тех, кто никуда не спешит.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 bg-white">
<div className="max-w-6xl mx-auto">
<h2 className="text-3xl md:text-4xl tracking-tight text-[#0B3954] mb-16 text-center" style={{fontFamily: '\'Playfair Display\', serif'}}>Что взять с собой</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="border border-gray-100 rounded-3xl p-8 hover:-translate-y-1 hover:shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] transition-all duration-300">
<iconify-icon className="text-3xl text-[#E6A817] mb-6 block" icon="solar:wallet-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h4 className="text-base font-medium text-[#0B3954] mb-4">Документы</h4>
<ul className="text-sm text-gray-500 space-y-2">
<li>Паспорт РФ</li>
<li>Полис ОМС</li>
<li>Наличные деньги (на Ольхоне бывают проблемы с терминалами)</li>
</ul>
</div>

<div className="border border-gray-100 rounded-3xl p-8 hover:-translate-y-1 hover:shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] transition-all duration-300">
<iconify-icon className="text-3xl text-[#E6A817] mb-6 block" icon="solar:t-shirt-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h4 className="text-base font-medium text-[#0B3954] mb-4">Одежда и обувь</h4>
<ul className="text-sm text-gray-500 space-y-2">
<li>Удобные кроссовки (2 пары)</li>
<li>Непродуваемая ветровка</li>
<li>Теплая кофта/флиска (вечером прохладно)</li>
</ul>
</div>

<div className="border border-gray-100 rounded-3xl p-8 hover:-translate-y-1 hover:shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] transition-all duration-300">
<iconify-icon className="text-3xl text-[#E6A817] mb-6 block" icon="solar:sunglasses-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h4 className="text-base font-medium text-[#0B3954] mb-4">Защита</h4>
<ul className="text-sm text-gray-500 space-y-2">
<li>Солнцезащитные очки</li>
<li>Головной убор (кепка/панама)</li>
<li>Крем от солнца (SPF 50+)</li>
</ul>
</div>

<div className="border border-gray-100 rounded-3xl p-8 hover:-translate-y-1 hover:shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] transition-all duration-300">
<iconify-icon className="text-3xl text-[#E6A817] mb-6 block" icon="solar:camera-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h4 className="text-base font-medium text-[#0B3954] mb-4">Техника</h4>
<ul className="text-sm text-gray-500 space-y-2">
<li>Фотоаппарат или хороший смартфон</li>
<li>Вместительный Powerbank</li>
<li>Запасные карты памяти</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 md:px-12 bg-[#F5F4F0]" id="booking">
<div className="max-w-5xl mx-auto">
<h2 className="text-3xl md:text-5xl tracking-tight text-[#0B3954] mb-6 text-center" style={{fontFamily: '\'Playfair Display\', serif'}}>Даты заездов 2026</h2>
<p className="text-center text-gray-500 text-sm mb-16 max-w-xl mx-auto">Летний сезон на Байкале короткий. Рекомендуем бронировать места заранее. Стоимость для всех летних дат единая — 92 800 ₽.</p>
<div className="grid md:grid-cols-3 gap-6">

<div className="bg-white rounded-3xl p-6 flex flex-col items-center text-center border border-transparent hover:border-[#E6A817]/30 transition-colors">
<span className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-2">Июнь</span>
<div className="text-2xl font-medium text-[#0B3954] mb-4">15.06 – 21.06</div>
<div className="w-full h-px bg-gray-100 mb-4"></div>
<p className="text-sm text-gray-500 mb-6">Осталось 4 места</p>
<button className="w-full bg-[#0B3954]/5 text-[#0B3954] py-3 rounded-full text-sm font-medium hover:bg-[#0B3954] hover:text-white transition-colors">Забронировать</button>
</div>

<div className="bg-white rounded-3xl p-6 flex flex-col items-center text-center border border-[#E6A817] shadow-sm relative overflow-hidden">
<div className="absolute top-4 right-[-30px] bg-[#E6A817] text-white text-[0.6rem] font-medium py-1 px-8 rotate-45 tracking-wider uppercase">Хит продаж</div>
<span className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-2">Июль</span>
<div className="text-2xl font-medium text-[#0B3954] mb-4">06.07 – 12.07</div>
<div className="w-full h-px bg-gray-100 mb-4"></div>
<p className="text-sm text-[#E6A817] font-medium mb-6">Группа набирается</p>
<button className="w-full bg-[#0B3954] text-white py-3 rounded-full text-sm font-medium hover:bg-[#E6A817] transition-colors">Забронировать</button>
</div>

<div className="bg-white rounded-3xl p-6 flex flex-col items-center text-center border border-transparent hover:border-[#E6A817]/30 transition-colors">
<span className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-2">Июль</span>
<div className="text-2xl font-medium text-[#0B3954] mb-4">20.07 – 26.07</div>
<div className="w-full h-px bg-gray-100 mb-4"></div>
<p className="text-sm text-gray-500 mb-6">Осталось 2 места</p>
<button className="w-full bg-[#0B3954]/5 text-[#0B3954] py-3 rounded-full text-sm font-medium hover:bg-[#0B3954] hover:text-white transition-colors">Забронировать</button>
</div>

<div className="bg-white rounded-3xl p-6 flex flex-col items-center text-center border border-transparent hover:border-[#E6A817]/30 transition-colors">
<span className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-2">Август</span>
<div className="text-2xl font-medium text-[#0B3954] mb-4">03.08 – 09.08</div>
<div className="w-full h-px bg-gray-100 mb-4"></div>
<p className="text-sm text-gray-500 mb-6">Мест много</p>
<button className="w-full bg-[#0B3954]/5 text-[#0B3954] py-3 rounded-full text-sm font-medium hover:bg-[#0B3954] hover:text-white transition-colors">Забронировать</button>
</div>

<div className="bg-white rounded-3xl p-6 flex flex-col items-center text-center border border-[#E6A817] shadow-sm relative overflow-hidden">
<div className="absolute top-4 right-[-30px] bg-[#E6A817] text-white text-[0.6rem] font-medium py-1 px-8 rotate-45 tracking-wider uppercase">Хит продаж</div>
<span className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-2">Август</span>
<div className="text-2xl font-medium text-[#0B3954] mb-4">17.08 – 23.08</div>
<div className="w-full h-px bg-gray-100 mb-4"></div>
<p className="text-sm text-[#E6A817] font-medium mb-6">Последние места</p>
<button className="w-full bg-[#0B3954] text-white py-3 rounded-full text-sm font-medium hover:bg-[#E6A817] transition-colors">Забронировать</button>
</div>

<div className="bg-white rounded-3xl p-6 flex flex-col items-center text-center border border-transparent hover:border-[#E6A817]/30 transition-colors">
<span className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-2">Август</span>
<div className="text-2xl font-medium text-[#0B3954] mb-4">24.08 – 30.08</div>
<div className="w-full h-px bg-gray-100 mb-4"></div>
<p className="text-sm text-gray-500 mb-6">Закрытие сезона</p>
<button className="w-full bg-[#0B3954]/5 text-[#0B3954] py-3 rounded-full text-sm font-medium hover:bg-[#0B3954] hover:text-white transition-colors">Забронировать</button>
</div>
</div>
</div>
</section>

<footer className="bg-[#0B3954] pt-20 pb-10 px-6 md:px-12 text-white">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-10 border-b border-white/10 pb-12 mb-8">
<div>
<div className="tracking-tighter font-medium uppercase text-white text-lg tracking-[0.2em] mb-4">Adventure Guide</div>
<p className="text-white/50 text-xs max-w-sm leading-relaxed">
                    Указанное время в программе ориентировочное. Программа может меняться в зависимости от погодных условий и физической подготовки группы.
                </p>
</div>
<div className="flex flex-col items-start md:items-end">
<span className="text-white/50 text-xs mb-2 uppercase tracking-widest">Бесплатный звонок по РФ</span>
<a className="text-3xl md:text-4xl font-light tracking-tight hover:text-[#E6A817] transition-colors" href="tel:88005054900">8 800 505-49-XX</a>
</div>
</div>
<div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/30">
<p>© 2026 Adventure Guide. Все права защищены.</p>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">Политика конфиденциальности</a>
<a className="hover:text-white transition-colors" href="#">Договор оферты</a>
</div>
</div>
</footer>

    </>
  );
}
