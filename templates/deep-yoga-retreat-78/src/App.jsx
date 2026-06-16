import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        function openBaliPage() {
            const page = document.getElementById('bali-program-page');
            page.classList.remove('page-hidden');
            page.classList.add('page-visible');
            document.body.style.overflow = 'hidden';
        }

        function closeBaliPage() {
            const page = document.getElementById('bali-program-page');
            page.classList.remove('page-visible');
            page.classList.add('page-hidden');
            document.body.style.overflow = 'auto';
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="gradient-mesh">
<div className="blob blob-1 rounded-full"></div>
<div className="blob blob-2 rounded-full"></div>
<div className="blob blob-3 rounded-full"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/40 bg-white/60 backdrop-blur-xl">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-lg font-semibold tracking-tight text-slate-900 flex items-center gap-2" href="#">
<span className="w-8 h-8 rounded-full bg-gradient-to-tr from-rose-400 to-orange-300 text-white flex items-center justify-center text-xs shadow-lg shadow-rose-200">D</span>
                DEEP YOGA
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
<a className="hover:text-slate-900 transition-colors" href="#about">О выезде</a>
<a className="text-slate-900 font-semibold hover:text-rose-500 transition-colors flex items-center gap-1" href="#bali">
<span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse"></span>
                    Бали 2025
                </a>
<a className="hover:text-slate-900 transition-colors" href="#program">Программа</a>
<a className="hover:text-slate-900 transition-colors" href="#prices">Стоимость</a>
</div>
<a className="text-xs font-semibold bg-slate-900 text-white px-5 py-2.5 rounded-full hover:bg-slate-800 transition-all shadow-lg shadow-slate-200" href="#booking">
                Забронировать
            </a>
</div>
</nav>

<main className="">

<header className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden px-6">
<div className="max-w-4xl mx-auto text-center relative z-10">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/50 border border-white/60 backdrop-blur-md text-xs font-medium text-slate-600 mb-8 shadow-sm">
<iconify-icon className="text-orange-400" icon="solar:sun-fog-linear"></iconify-icon>
                    Ближайший уикенд: 20-22 Сентября
                </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-slate-900 mb-6 leading-[1.1]">
                    Вдохни спокойствие. <br/>
<span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-400 via-orange-400 to-blue-400">Вернись к себе.</span>
</h1>
<p className="text-lg md:text-xl text-slate-600 font-light max-w-xl mx-auto mb-10 leading-relaxed">
                    Авторские йога-выезды в места силы. Мягкая перезагрузка тела и разума в окружении эстетики и природы.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="h-12 px-8 rounded-full bg-slate-900 text-white text-sm font-medium flex items-center hover:bg-slate-800 hover:scale-105 transition-all w-full sm:w-auto justify-center shadow-xl shadow-slate-200" href="#prices">
                        Выбрать тариф
                    </a>
<button className="h-12 px-8 rounded-full bg-white text-slate-900 border border-white/60 text-sm font-medium flex items-center gap-2 hover:bg-slate-50 transition-all w-full sm:w-auto justify-center shadow-sm hover:shadow-md group" onclick="openBaliPage()">
<iconify-icon className="group-hover:-rotate-12 transition-transform" icon="solar:plane-linear" strokeWidth="1.5" width="20"></iconify-icon>
                        Тур на Бали
                    </button>
</div>
</div>
</header>

<section className="pt-20 pr-6 pb-20 pl-6" id="about">
<div className="max-w-6xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass-card p-8 rounded-3xl transition-all duration-300 group">
<div className="w-12 h-12 rounded-2xl bg-rose-50 flex items-center justify-center text-rose-500 mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:lotus-linear" strokeWidth="1.5" width="26"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Глубокая практика</h3>
<p className="text-sm text-slate-500 font-light leading-relaxed">
                            Утренняя хатха-йога и вечерняя инь-йога. Баланс напряжения и расслабления под шум леса.
                        </p>
</div>

<div className="glass-card p-8 rounded-3xl transition-all duration-300 group">
<div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-500 mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:soundwave-linear" strokeWidth="1.5" width="26"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Звуковая терапия</h3>
<p className="text-sm text-slate-500 font-light leading-relaxed">
                            Медитации под живые звуки поющих чаш и ханга. Очищение сознания от городского шума.
                        </p>
</div>

<div className="glass-card p-8 rounded-3xl transition-all duration-300 group">
<div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center text-amber-500 mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:leaf-linear" strokeWidth="1.5" width="26"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Эстетика жизни</h3>
<p className="text-sm text-slate-500 font-light leading-relaxed">
                            Мы выбираем локации, которые вдохновляют. Современные эко-отели, здоровая еда и красивые люди.
                        </p>
</div>
</div>
</div>
</section>

<section className="py-10 px-6">
<div className="max-w-6xl mx-auto">
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[600px] md:h-[500px]">
<div className="col-span-2 row-span-2 rounded-3xl overflow-hidden relative group shadow-lg">
<img alt="Yoga" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="bg-gradient-to-t from-black/30 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="rounded-3xl overflow-hidden relative group shadow-sm">
<img alt="Nature" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="rounded-3xl overflow-hidden relative group shadow-sm">
<img alt="Detail" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="col-span-2 rounded-3xl overflow-hidden relative group shadow-sm">
<img alt="Relax" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative" id="bali">
<div className="max-w-6xl mx-auto relative z-10">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div className="">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-rose-200 bg-rose-50 text-xs font-medium text-rose-500 mb-6">
<iconify-icon icon="solar:palms-linear"></iconify-icon>
                            Главное событие зимы
                        </div>
<h2 className="text-4xl md:text-6xl font-medium text-slate-900 tracking-tight mb-2">Deep Yoga Bali</h2>
<p className="text-xl text-slate-500 font-light">10 дней в джунглях острова Бали.</p>
</div>
<div className="text-right hidden md:block">
<div className="text-3xl font-medium text-slate-900">15 - 25 Января</div>
<div className="text-sm text-slate-400">2025 год</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-6">

<div className="md:col-span-8 rounded-3xl p-8 md:p-12 flex flex-col justify-between h-[500px] relative overflow-hidden group shadow-2xl shadow-rose-900/10">
<img alt="Bali Rice Terrace" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="bg-gradient-to-t from-black/60 via-black/10 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="relative z-10 flex justify-between items-start">
<span className="bg-white/20 backdrop-blur border border-white/30 text-white px-4 py-1.5 rounded-full text-xs font-medium">Убуд, Бали</span>
<div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-white">
<iconify-icon icon="solar:star-linear" width="20"></iconify-icon>
</div>
</div>
<div className="relative z-10 max-w-lg">
<h3 className="text-3xl md:text-4xl font-medium text-white mb-4">Магия Острова Богов</h3>
<p className="text-white/90 font-light mb-8 leading-relaxed">
                                 Мы будем жить на приватной вилле среди рисовых террас. Ежедневная практика, церемонии очищения водой, подъем на вулкан и полное единение с природой.
                             </p>
<button className="bg-white text-slate-900 px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-rose-50 transition-colors flex items-center gap-2 shadow-lg" onclick="openBaliPage()">
                                 Смотреть программу тура
                                 <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</button>
</div>
</div>

<div className="md:col-span-4 bg-white p-8 rounded-3xl flex flex-col justify-center border border-slate-100 shadow-xl shadow-slate-200/50">
<span className="text-slate-400 text-xs uppercase tracking-wider font-semibold mb-2">Стоимость тура</span>
<div className="flex items-baseline gap-2 mb-6">
<span className="text-4xl font-medium text-slate-900">$1,800</span>
<span className="text-sm text-slate-400">/ все включено</span>
</div>
<ul className="space-y-4 mb-8">
<li className="text-sm text-slate-600 flex items-center gap-3"><iconify-icon className="text-emerald-400" icon="solar:check-circle-bold"></iconify-icon> Проживание (Villas)</li>
<li className="text-sm text-slate-600 flex items-center gap-3"><iconify-icon className="text-emerald-400" icon="solar:check-circle-bold"></iconify-icon> Завтраки и ужины</li>
<li className="text-sm text-slate-600 flex items-center gap-3"><iconify-icon className="text-emerald-400" icon="solar:check-circle-bold"></iconify-icon> Все экскурсии</li>
<li className="text-sm text-slate-600 flex items-center gap-3"><iconify-icon className="text-emerald-400" icon="solar:check-circle-bold"></iconify-icon> Трансфер</li>
</ul>
<button className="w-full py-3.5 rounded-xl bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 transition-all shadow-lg shadow-slate-300">
                            Занять место
                        </button>
</div>
</div>
</div>
</section>

<section className="py-24 px-6" id="prices">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-medium text-slate-900 tracking-tight mb-4">Уикенд в Подмосковье</h2>
<p className="text-slate-500 font-light">Выберите формат участия в ретрите выходного дня.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass-card p-8 rounded-3xl flex flex-col h-full bg-gradient-to-b from-white to-slate-50">
<div className="mb-8">
<h3 className="text-lg font-medium text-slate-900">Light</h3>
<div className="mt-4 flex items-baseline text-slate-900">
<span className="text-3xl font-semibold tracking-tight">18.000₽</span>
</div>
<p className="mt-4 text-xs text-slate-500 leading-relaxed">Участие во всех практиках без проживания в отеле.</p>
</div>
<a className="mt-auto w-full block text-center py-3 rounded-xl border border-slate-200 text-sm font-medium hover:bg-slate-50 transition-all" href="#booking">Выбрать</a>
</div>

<div className="p-8 rounded-3xl flex flex-col h-full bg-white border border-rose-100 shadow-2xl shadow-rose-100 relative overflow-hidden">
<div className="absolute top-0 right-0 w-24 h-24 bg-rose-100 rounded-bl-full -mr-4 -mt-4 opacity-50"></div>
<div className="mb-8 relative z-10">
<h3 className="text-lg font-medium text-rose-900">Standard</h3>
<div className="mt-4 flex items-baseline text-slate-900">
<span className="text-3xl font-semibold tracking-tight">25.000₽</span>
</div>
<p className="mt-4 text-xs text-slate-500 leading-relaxed">Все включено: проживание в номере DBL, питание, баня.</p>
</div>
<ul className="space-y-3 mb-8 flex-1 relative z-10">
<li className="flex items-center gap-3 text-sm text-slate-700"><iconify-icon className="text-rose-500" icon="solar:check-circle-linear"></iconify-icon> Полная программа</li>
<li className="flex items-center gap-3 text-sm text-slate-700"><iconify-icon className="text-rose-500" icon="solar:check-circle-linear"></iconify-icon> Питание Full Board</li>
<li className="flex items-center gap-3 text-sm text-slate-700"><iconify-icon className="text-rose-500" icon="solar:check-circle-linear"></iconify-icon> SPA-зона</li>
</ul>
<a className="w-full block text-center py-3 rounded-xl bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 transition-all shadow-lg shadow-rose-200" href="#booking">Забронировать</a>
</div>

<div className="glass-card p-8 rounded-3xl flex flex-col h-full bg-gradient-to-b from-white to-slate-50">
<div className="mb-8">
<h3 className="text-lg font-medium text-slate-900">Solo</h3>
<div className="mt-4 flex items-baseline text-slate-900">
<span className="text-3xl font-semibold tracking-tight">32.000₽</span>
</div>
<p className="mt-4 text-xs text-slate-500 leading-relaxed">Одноместное размещение для максимального уединения.</p>
</div>
<a className="mt-auto w-full block text-center py-3 rounded-xl border border-slate-200 text-sm font-medium hover:bg-slate-50 transition-all" href="#booking">Выбрать</a>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-100 pt-20 pb-10 px-6 mt-10" id="booking">
<div className="max-w-6xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-10">
<div className="max-w-lg">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-slate-900 mb-6">Создай своё намерение</h2>
<p className="text-slate-500 font-light mb-8">Оставьте заявку, и мы пришлем подробную презентацию с фотографиями номеров.</p>
<form className="flex gap-2 max-w-sm" onsubmit="event.preventDefault();">
<input className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-rose-300 focus:ring-1 focus:ring-rose-200 flex-1 placeholder:text-slate-400 transition-all" placeholder="hello@yoursite.com" type="email"/>
<button className="bg-slate-900 text-white px-6 py-3 rounded-xl text-sm font-medium hover:bg-slate-800 transition-colors shadow-lg shadow-slate-200">
<iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
</form>
</div>
<div className="flex flex-col gap-3 text-right">
<a className="text-lg font-medium text-slate-900 hover:text-rose-500 transition-colors" href="mailto:info@deepyoga.ru">info@deepyoga.ru</a>
<a className="text-lg font-medium text-slate-900 hover:text-rose-500 transition-colors" href="tel:+79990000000">+7 (999) 000-00-00</a>
<div className="flex gap-4 justify-end mt-2">
<a className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 hover:bg-rose-50 hover:text-rose-500 transition-colors" href="#"><iconify-icon icon="brandico:instagram-filled" width="18"></iconify-icon></a>
<a className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 hover:bg-blue-50 hover:text-blue-500 transition-colors" href="#"><iconify-icon icon="brandico:telegram-rect" width="18"></iconify-icon></a>
</div>
</div>
</div>
<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
<p>© 2025 Deep Yoga. Made with Love.</p>
<div className="flex gap-6">
<a className="hover:text-slate-600" href="#">Privacy Policy</a>
<a className="hover:text-slate-600" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>
</main>

<div className="page-hidden" id="bali-program-page">

<nav className="sticky top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-slate-100">
<div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
<span className="text-lg font-semibold text-slate-900">Deep Yoga Bali</span>
<button className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-slate-200 transition-colors" onclick="closeBaliPage()">
<iconify-icon icon="solar:close-circle-linear" width="20"></iconify-icon>
</button>
</div>
</nav>
<div className="max-w-4xl mx-auto px-6 py-12">

<div className="rounded-3xl overflow-hidden h-[400px] relative mb-12 shadow-2xl shadow-emerald-900/10">
<img alt="Bali Landscape" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
<div className="absolute bottom-8 left-8 text-white">
<h1 className="text-4xl md:text-5xl font-medium mb-2">Программа тура</h1>
<p className="opacity-90">10 дней трансформации в Убуде</p>
</div>
</div>

<div className="grid md:grid-cols-[1fr_300px] gap-12">

<div className="space-y-12">
<div className="border-l-2 border-slate-100 pl-8 relative pb-2">

<div className="mb-10 relative">
<span className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-emerald-100 border-2 border-emerald-500"></span>
<div className="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-1">День 1 • 15 Января</div>
<h3 className="text-xl font-medium text-slate-900 mb-3">Прибытие и круг знакомств</h3>
<p className="text-slate-600 font-light leading-relaxed mb-4">
                                Встреча в аэропорту Денпасар. Трансфер на нашу виллу в джунглях Убуда. 
                                Приветственный ужин с традиционными балийскими блюдами. Церемония открытия ретрита, постановка намерений.
                            </p>
<img alt="Villa" className="rounded-xl w-full h-48 object-cover shadow-sm" src="https://images.unsplash.com/photo-1604928141064-207cea6f571f?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>

<div className="mb-10 relative">
<span className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-white border-2 border-slate-300"></span>
<div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">День 2-4</div>
<h3 className="text-xl font-medium text-slate-900 mb-3">Погружение в практику</h3>
<p className="text-slate-600 font-light leading-relaxed">
                                07:00 — Пранаяма и медитация.<br/>
                                08:30 — Vinyasa Flow Yoga.<br/>
                                Днем: Посещение святых источников Тирта Эмпул для церемонии очищения. Прогулка по рисовым террасам Тегаллаланг.
                            </p>
</div>

<div className="mb-10 relative">
<span className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-rose-100 border-2 border-rose-400"></span>
<div className="text-xs font-bold text-rose-500 uppercase tracking-wider mb-1">День 5 • Экватор</div>
<h3 className="text-xl font-medium text-slate-900 mb-3">Восхождение на вулкан Батур</h3>
<p className="text-slate-600 font-light leading-relaxed mb-4">
                                Ночной подъем, чтобы встретить рассвет на вершине вулкана. Завтрак с видом на облака. Посещение горячих источников после спуска.
                            </p>
<img alt="Batur" className="rounded-xl w-full h-48 object-cover shadow-sm" src="https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>

<div className="mb-10 relative">
<span className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-white border-2 border-slate-300"></span>
<div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">День 6-9</div>
<h3 className="text-xl font-medium text-slate-900 mb-3">Глубина и Тишина</h3>
<p className="text-slate-600 font-light leading-relaxed">
                                Практики Yin Yoga для глубокого расслабления. Мастер-класс по балийской кулинарии. День молчания (Мауна) для внутренней работы. Поездка к водопаду Секумпул.
                            </p>
</div>

<div className="relative">
<span className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-slate-900 border-2 border-slate-900"></span>
<div className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-1">День 10 • 25 Января</div>
<h3 className="text-xl font-medium text-slate-900 mb-3">Завершение</h3>
<p className="text-slate-600 font-light leading-relaxed">
                                Финальная утренняя практика. Обмен подарками и впечатлениями. Трансфер в аэропорт или продолжение отдыха на побережье (по желанию).
                            </p>
</div>
</div>
</div>

<div className="relative">
<div className="sticky top-24 space-y-6">
<div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
<h4 className="font-medium text-slate-900 mb-4">Что включено?</h4>
<ul className="space-y-3 text-sm text-slate-600">
<li className="flex gap-2"><iconify-icon className="text-emerald-500 mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Проживание 10 ночей</li>
<li className="flex gap-2"><iconify-icon className="text-emerald-500 mt-0.5" icon="solar:check-circle-linear"></iconify-icon> 2-х разовое питание</li>
<li className="flex gap-2"><iconify-icon className="text-emerald-500 mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Все трансферы</li>
<li className="flex gap-2"><iconify-icon className="text-emerald-500 mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Входные билеты</li>
</ul>
</div>
<button className="w-full py-4 rounded-xl bg-slate-900 text-white font-medium hover:bg-slate-800 transition-shadow shadow-xl shadow-slate-200">
                            Оставить заявку на тур
                        </button>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
