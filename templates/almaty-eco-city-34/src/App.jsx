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
      

<nav className="fixed top-0 w-full z-50 transition-all duration-300 px-6 py-6">
<div className="max-w-7xl mx-auto glass rounded-full px-6 py-4 flex justify-between items-center">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-[#D8F3DC] flex items-center justify-center text-[#1B4332]">
<span className="iconify" data-icon="lucide:leaf" data-strokeWidth="2.5" data-width="18"></span>
</div>
<span className="text-white font-semibold tracking-tight text-lg">ALMATY<span className="opacity-50 font-normal">ECO</span></span>
</div>
<div className="hidden md:flex gap-8 text-sm font-medium text-white/70">
<a className="hover:text-white transition-colors" href="#">Мониторинг</a>
<a className="hover:text-white transition-colors" href="#">Карта Эко-зон</a>
<a className="hover:text-white transition-colors" href="#">Стандарты</a>
<a className="hover:text-white transition-colors" href="#">Инициативы</a>
</div>
<div className="flex gap-4">
<button className="hidden md:flex items-center gap-2 text-sm font-medium hover:text-white transition-colors">
<span>RU</span>
<span className="iconify" data-icon="lucide:chevron-down" data-width="14"></span>
</button>
<button className="bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-colors">
<span className="iconify" data-icon="lucide:user" data-width="20"></span>
</button>
</div>
</div>
</nav>

<header className="relative w-full min-h-screen flex flex-col justify-center items-center pt-24 pb-12 px-6 overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Горы Алматы" className="w-full h-full object-cover opacity-60" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-[#0D241B]/30 via-[#0D241B]/80 to-[#0D241B]"></div>
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
</div>
<div className="relative z-10 w-full max-w-4xl text-center space-y-8 mt-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D8F3DC]/10 border border-[#D8F3DC]/20 text-[#D8F3DC] text-xs font-medium tracking-wide uppercase">
<span className="w-2 h-2 rounded-full bg-[#D8F3DC] animate-pulse"></span>
                Индекс Качества Воздуха: 42 (Хорошо)
            </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold text-white tracking-tighter leading-[0.9]">
                Алматы: <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#D8F3DC] to-white/50">Дыши Свободно.</span>
</h1>
<p className="text-lg md:text-xl text-white/60 max-w-xl mx-auto font-light leading-relaxed">
                Единая цифровая платформа для мониторинга городской экологии, проверки стандартов транспорта и защиты окружающей среды.
            </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
<button className="group relative px-8 py-4 bg-[#D8F3DC] text-[#1B4332] rounded-full font-semibold text-sm transition-all hover:shadow-[0_0_40px_-10px_rgba(216,243,220,0.5)] hover:scale-105 active:scale-95 flex items-center gap-2">
                    Проверить Эко-класс
                    <span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-width="18"></span>
</button>
<button className="px-8 py-4 glass text-white rounded-full font-semibold text-sm transition-all hover:bg-white/10 hover:border-white/20 active:scale-95 flex items-center gap-2">
<span className="iconify" data-icon="lucide:alert-triangle" data-width="18"></span>
                    Сообщить о нарушении
                </button>
</div>
</div>

<div className="relative z-20 mt-20 w-full max-w-5xl mx-auto">
<div className="glass-card rounded-3xl p-1 md:p-2">
<div className="bg-[#1B4332]/40 rounded-[20px] border border-white/5 p-6 md:p-10">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
<div>
<h3 className="text-2xl font-semibold text-white tracking-tight flex items-center gap-3">
<span className="iconify text-[#D8F3DC]" data-icon="lucide:calculator" data-width="24"></span>
                                Эко-Калькулятор
                            </h3>
<p className="text-white/40 text-sm mt-1">Мгновенная проверка выбросов и соответствия.</p>
</div>

<div className="bg-black/20 p-1 rounded-xl flex gap-1">
<button className="px-4 py-2 bg-[#D8F3DC] text-[#1B4332] rounded-lg text-xs font-semibold shadow-lg transition-all">
                                Автоматически (Госномер)
                            </button>
<button className="px-4 py-2 text-white/60 hover:text-white rounded-lg text-xs font-medium transition-all">
                                Ручной поиск
                            </button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
<div className="md:col-span-4 space-y-2">
<label className="text-xs font-medium text-white/50 ml-1">Госномер авто</label>
<div className="relative group">
<span className="absolute left-4 top-3.5 text-white/30">
<span className="iconify" data-icon="lucide:car-front" data-width="20"></span>
</span>
<input className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 pl-12 pr-4 text-white placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-[#D8F3DC]/50 focus:border-[#D8F3DC] transition-all font-mono tracking-widest uppercase" placeholder="123 ABC 02" type="text"/>
</div>
</div>
<div className="md:col-span-5 space-y-2">
<label className="text-xs font-medium text-white/50 ml-1">ИИН Владельца (Необязательно)</label>
<div className="relative group">
<span className="absolute left-4 top-3.5 text-white/30">
<span className="iconify" data-icon="lucide:fingerprint" data-width="20"></span>
</span>
<input className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 pl-12 pr-4 text-white placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-[#D8F3DC]/50 focus:border-[#D8F3DC] transition-all font-mono tracking-wide" placeholder="Введите 12-значный код" type="text"/>
</div>
</div>
<div className="md:col-span-3">
<button className="w-full py-3.5 bg-white text-[#1B4332] rounded-2xl font-semibold text-sm hover:bg-[#D8F3DC] transition-colors flex justify-center items-center gap-2">
                                Проверить статус
                                <span className="iconify" data-icon="lucide:search" data-width="18"></span>
</button>
</div>
</div>
</div>
</div>
</div>
</header>

<section className="py-24 max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
<div>
<span className="text-[#D8F3DC] text-xs font-bold tracking-widest uppercase mb-2 block">Наши достижения</span>
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">Наше влияние в цифрах</h2>
</div>
<p className="text-white/40 text-sm max-w-xs text-right hidden md:block">Статистика в реальном времени отслеживает путь Алматы к нулевым выбросам.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 h-auto lg:h-[420px]">

<div className="md:col-span-2 glass-strong rounded-[32px] p-8 relative overflow-hidden group flex flex-col justify-between border border-white/5 hover:border-[#D8F3DC]/30 transition-all duration-500">
<div className="relative z-10">
<div className="flex items-center gap-2 mb-2">
<span className="w-2 h-2 rounded-full bg-[#D8F3DC]"></span>
<span className="text-xs font-medium text-[#D8F3DC] uppercase tracking-wider">Ключевой показатель</span>
</div>
<h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight mt-2">Снижение на 15%</h3>
<p className="text-white/60 mt-2 text-lg">Общих выбросов города (2024)</p>
</div>

<div className="absolute right-0 bottom-0 w-full h-48 pointer-events-none">
<svg className="w-full h-full opacity-60 group-hover:opacity-80 transition-opacity duration-700" viewbox="0 0 400 150">
<defs>
<lineargradient id="grad1" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" style={{stopColor: '#D8F3DC', stopOpacity: '0'}}></stop>
<stop offset="100%" style={{stopColor: '#D8F3DC', stopOpacity: '0.3'}}></stop>
</lineargradient>
</defs>

<path d="M0,150 C50,140 100,100 150,90 C200,80 250,110 300,60 C350,10 400,20 400,20 V150 H0 Z" fill="url(#grad1)"></path>
<path d="M0,150 C50,140 100,100 150,90 C200,80 250,110 300,60 C350,10 400,20 400,20" fill="none" stroke="#D8F3DC" strokeWidth="3"></path>
</svg>
</div>
<div className="relative z-10 mt-auto flex items-center gap-4 text-sm text-white/40">
<span className="flex items-center gap-1"><span className="iconify" data-icon="lucide:trending-up"></span> Год к году</span>
<span className="w-1 h-1 bg-white/20 rounded-full"></span>
<span>Проверено Управлением Экологии</span>
</div>
</div>

<div className="glass-strong rounded-[32px] p-8 flex flex-col justify-center items-center text-center relative overflow-hidden group hover:bg-[#1B4332]/50 transition-colors">
<div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#D8F3DC] to-[#1B4332] flex items-center justify-center mb-6 shadow-lg shadow-[#D8F3DC]/20 group-hover:scale-110 transition-transform duration-500">
<span className="iconify text-[#0D241B]" data-icon="lucide:users" data-width="32"></span>
</div>
<h3 className="text-3xl font-bold text-white mb-2">5,000+</h3>
<p className="text-white/60 text-sm font-medium">Граждан получили эко-льготы и субсидии</p>
<div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
</div>

<div className="glass-strong rounded-[32px] p-8 flex flex-col justify-center items-center text-center relative overflow-hidden group hover:bg-[#1B4332]/50 transition-colors">

<div className="relative w-20 h-20 mb-4 group-hover:-translate-y-2 transition-transform duration-500">
<span className="iconify absolute inset-0 text-[#153228] blur-md translate-y-4 opacity-60" data-icon="lucide:leaf" data-width="80"></span>
<span className="iconify absolute inset-0 text-[#D8F3DC] drop-shadow-[0_15px_15px_rgba(0,0,0,0.5)]" data-icon="lucide:leaf" data-width="80"></span>
</div>
<h3 className="text-3xl font-bold text-white mb-2">10,000</h3>
<p className="text-white/60 text-sm font-medium">Деревьев высажено в Медеуском районе</p>
</div>

<div className="md:col-span-2 bg-[#D8F3DC] rounded-[32px] p-8 relative overflow-hidden flex flex-col sm:flex-row items-center justify-between gap-6 group">
<div className="text-[#0D241B] z-10 space-y-2 text-center sm:text-left">
<div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
<span className="iconify" data-icon="lucide:zap" data-width="20"></span>
<span className="text-xs font-bold uppercase tracking-wider">Электрическое будущее</span>
</div>
<h3 className="text-4xl font-bold tracking-tight">2,500+ Электрокаров</h3>
<p className="text-[#1B4332]/80 font-medium">Активно используются на дорогах города с доступом к бесплатной парковке.</p>
</div>
<div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 border-[#1B4332]/10 flex items-center justify-center relative z-10 bg-[#D8F3DC]">
<span className="iconify text-[#1B4332] group-hover:scale-110 transition-transform duration-300" data-icon="lucide:plug-zap" data-width="48"></span>
</div>

<div className="absolute right-0 top-0 w-64 h-full bg-gradient-to-l from-white/40 to-transparent skew-x-12 opacity-50"></div>
</div>
</div>
</section>

<section className="py-20 border-t border-white/5">
<div className="max-w-7xl mx-auto pl-6">
<div className="flex justify-between items-end pr-6 mb-10">
<div>
<h2 className="text-3xl font-semibold text-white tracking-tight">Эко-Инициативы</h2>
<p className="text-white/50 mt-2 text-sm">Обновления трансформации Алматы в реальном времени.</p>
</div>
<div className="flex gap-2">
<button className="p-3 rounded-full border border-white/10 hover:bg-white/5 transition-colors text-white">
<span className="iconify" data-icon="lucide:arrow-left" data-width="20"></span>
</button>
<button className="p-3 rounded-full border border-white/10 hover:bg-white/5 transition-colors text-white">
<span className="iconify" data-icon="lucide:arrow-right" data-width="20"></span>
</button>
</div>
</div>
<div className="flex gap-6 overflow-x-auto pb-8 no-scrollbar pr-6 snap-x snap-mandatory">

<article className="min-w-[300px] md:min-w-[400px] h-[450px] rounded-[32px] relative overflow-hidden group snap-center cursor-pointer">
<img alt="Лес" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&amp;w=2560&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8">
<span className="inline-block px-3 py-1 bg-[#D8F3DC] text-[#1B4332] text-xs font-bold rounded-full mb-3">Озеленение</span>
<h3 className="text-2xl font-bold text-white mb-2 leading-tight">10,000 Новых деревьев в Медеуском районе</h3>
<p className="text-white/70 text-sm line-clamp-2">Акимат запускает масштабную кампанию по высадке деревьев для восстановления «лёгких» города.</p>
</div>
</article>

<article className="min-w-[300px] md:min-w-[400px] h-[450px] rounded-[32px] relative overflow-hidden group snap-center cursor-pointer">
<img alt="Зарядка электромобиля" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&amp;w=2672&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8">
<span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md text-white border border-white/20 text-xs font-bold rounded-full mb-3">Инфраструктура</span>
<h3 className="text-2xl font-bold text-white mb-2 leading-tight">50 Новых станций быстрой зарядки</h3>
<p className="text-white/70 text-sm line-clamp-2">Расширение сети электрозаправок для поддержки перехода на транспорт с нулевыми выбросами в "золотом квадрате".</p>
</div>
</article>

<article className="min-w-[300px] md:min-w-[400px] h-[450px] rounded-[32px] relative overflow-hidden group snap-center cursor-pointer">
<img alt="Велосипед" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8">
<span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md text-white border border-white/20 text-xs font-bold rounded-full mb-3">Мобильность</span>
<h3 className="text-2xl font-bold text-white mb-2 leading-tight">Расширение сети велодорожек</h3>
<p className="text-white/70 text-sm line-clamp-2">Соединение пригородов с центром города защищенными зелеными полосами.</p>
</div>
</article>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-20">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

<div className="bg-[#153228] rounded-[32px] p-8 md:p-10 border border-white/5 relative overflow-hidden">

<div className="absolute top-0 right-0 w-64 h-64 bg-[#D8F3DC]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
<div className="relative z-10">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-6">Сообщить о нарушении</h2>
<div className="space-y-6">
<div>
<label className="text-xs font-medium text-white/50 mb-2 block uppercase tracking-wider">Тип проблемы</label>
<div className="grid grid-cols-3 gap-3">
<button className="bg-[#1B4332] border-2 border-[#D8F3DC] text-white py-3 rounded-xl text-sm font-medium flex flex-col items-center justify-center gap-2">
<span className="iconify" data-icon="lucide:car" data-width="20"></span>
                                    Выхлоп авто
                                </button>
<button className="bg-transparent border border-white/10 hover:bg-white/5 text-white/60 py-3 rounded-xl text-sm font-medium flex flex-col items-center justify-center gap-2 transition-all">
<span className="iconify" data-icon="lucide:flame" data-width="20"></span>
                                    Сжигание
                                </button>
<button className="bg-transparent border border-white/10 hover:bg-white/5 text-white/60 py-3 rounded-xl text-sm font-medium flex flex-col items-center justify-center gap-2 transition-all">
<span className="iconify" data-icon="lucide:factory" data-width="20"></span>
                                    Завод
                                </button>
</div>
</div>
<div>
<label className="text-xs font-medium text-white/50 mb-2 block uppercase tracking-wider">Доказательства</label>
<div className="border-2 border-dashed border-white/10 rounded-2xl h-32 flex flex-col items-center justify-center text-white/40 hover:border-[#D8F3DC]/50 hover:bg-white/5 transition-all cursor-pointer">
<span className="iconify mb-2" data-icon="lucide:upload-cloud" data-width="24"></span>
<span className="text-xs">Перетащите фото/видео или <span className="text-[#D8F3DC] underline">обзор</span></span>
</div>
</div>
<div>
<label className="text-xs font-medium text-white/50 mb-2 block uppercase tracking-wider">Местоположение</label>
<div className="bg-[#0f281e] rounded-2xl h-40 w-full relative overflow-hidden border border-white/10">

<div className="absolute inset-0 opacity-40 grayscale" style={{backgroundImage: 'url(\'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Map_of_Almaty.png/640px-Map_of_Almaty.png\')', backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
<div className="absolute inset-0 flex items-center justify-center">
<span className="relative flex h-8 w-8">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D8F3DC] opacity-75"></span>
<span className="relative inline-flex rounded-full h-8 w-8 bg-[#D8F3DC] border-4 border-[#1B4332] items-center justify-center text-[#1B4332]">
<span className="iconify" data-icon="lucide:map-pin" data-width="16"></span>
</span>
</span>
</div>
</div>
</div>
<button className="w-full py-4 bg-[#D8F3DC] text-[#1B4332] rounded-xl font-semibold hover:brightness-110 transition-all flex items-center justify-center gap-2 mt-4">
                            Отправить отчет
                            <span className="iconify" data-icon="lucide:send" data-width="18"></span>
</button>
</div>
</div>
</div>

<div className="space-y-6">

<div className="bg-gradient-to-br from-[#1B4332] to-[#0D241B] border border-white/10 rounded-[32px] p-8 relative overflow-hidden group hover:border-white/20 transition-all">
<div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="iconify w-32 h-32" data-icon="lucide:shield-check"></span>
</div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-6">
<span className="iconify text-[#D8F3DC]" data-icon="lucide:map" data-width="24"></span>
</div>
<h3 className="text-2xl font-semibold text-white mb-2">Зоны Низких Выбросов (LEZ)</h3>
<p className="text-white/60 mb-6 text-sm leading-relaxed">Просмотр границ экологических зон в Алматы. Транспортные средства ниже стандарта Евро-4 ограничены с 7:00 до 21:00 в Центральной зоне.</p>
<a className="inline-flex items-center text-[#D8F3DC] font-medium text-sm hover:underline underline-offset-4" href="#">
                            Интерактивная карта <span className="iconify ml-1" data-icon="lucide:arrow-right" data-width="14"></span>
</a>
</div>
</div>

<div className="glass border border-white/10 rounded-[32px] p-8 flex flex-col justify-between">
<div>
<div className="flex justify-between items-start mb-4">
<div className="w-12 h-12 rounded-full bg-[#D8F3DC] flex items-center justify-center">
<span className="iconify text-[#1B4332]" data-icon="lucide:zap" data-width="24"></span>
</div>
<span className="px-3 py-1 bg-white/5 rounded-full text-xs font-medium text-white/70 border border-white/10">Социальные льготы</span>
</div>
<h3 className="text-xl font-semibold text-white mb-2">Льготы для электромобилей</h3>
<p className="text-white/60 text-sm">Бесплатная парковка во всех городских зонах, налоговые льготы и доступ к автобусным полосам для зарегистрированных электрокаров.</p>
</div>
<button className="mt-6 w-full py-3 rounded-xl border border-white/20 text-white font-medium hover:bg-white hover:text-[#1B4332] transition-all">
                        Зарегистрировать авто
                    </button>
</div>
</div>
</div>
</section>

<section className="max-w-4xl mx-auto px-6 py-20">
<h2 className="text-3xl font-semibold text-white text-center mb-12 tracking-tight">Частые вопросы</h2>
<div className="space-y-4">

<details className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden open:bg-white/10 transition-all">
<summary className="flex justify-between items-center p-6 cursor-pointer list-none">
<span className="font-medium text-white text-lg">Каковы штрафы за въезд в LEZ на несоответствующем авто?</span>
<span className="iconify text-white/50 group-open:rotate-180 transition-transform" data-icon="lucide:chevron-down" data-width="20"></span>
</summary>
<div className="px-6 pb-6 text-white/60 leading-relaxed text-sm">
                    Штрафы рассчитываются на основе МРП (Месячный Расчетный Показатель). Первое нарушение — 5 МРП, повторные нарушения в течение года увеличиваются до 10 МРП. Камеры автоматически фиксируют все точки въезда.
                </div>
</details>

<details className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden open:bg-white/10 transition-all">
<summary className="flex justify-between items-center p-6 cursor-pointer list-none">
<span className="font-medium text-white text-lg">Как проверить Евро-стандарт моего автомобиля?</span>
<span className="iconify text-white/50 group-open:rotate-180 transition-transform" data-icon="lucide:chevron-down" data-width="20"></span>
</summary>
<div className="px-6 pb-6 text-white/60 leading-relaxed text-sm">
                    Вы можете использовать Эко-Калькулятор выше, введя госномер. Либо проверьте свидетельство о регистрации ТС (поле V.9). Если данные отсутствуют, обратитесь в специализированный центр техосмотра, указанный в разделе «Мониторинг».
                </div>
</details>

<details className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden open:bg-white/10 transition-all">
<summary className="flex justify-between items-center p-6 cursor-pointer list-none">
<span className="font-medium text-white text-lg">Можно ли сообщить о промышленном дыме анонимно?</span>
<span className="iconify text-white/50 group-open:rotate-180 transition-transform" data-icon="lucide:chevron-down" data-width="20"></span>
</summary>
<div className="px-6 pb-6 text-white/60 leading-relaxed text-sm">
                    Да. Хотя вход через Digital ID помогает нам отслеживать решение проблемы, вы можете отправить отчет анонимно. Однако анонимные сообщения не могут быть использованы для возбуждения административного производства, только для инициирования проверки.
                </div>
</details>
</div>
</section>

<footer className="border-t border-white/5 bg-[#0a1c15] pt-20 pb-10 px-6 mt-12">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
<div className="space-y-6 max-w-sm">
<div className="flex items-center gap-2">
<span className="text-white font-bold text-2xl tracking-tight">ALMATY<span className="text-[#D8F3DC]">ECO</span></span>
</div>
<p className="text-white/40 text-sm">Официальный портал мониторинга экологии Акимата города Алматы. Посвящен чистому и зеленому будущему.</p>
<div className="flex gap-4">
<a className="text-white/60 hover:text-[#D8F3DC] transition-colors" href="#"><span className="iconify" data-icon="lucide:instagram" data-width="20"></span></a>
<a className="text-white/60 hover:text-[#D8F3DC] transition-colors" href="#"><span className="iconify" data-icon="lucide:twitter" data-width="20"></span></a>
<a className="text-white/60 hover:text-[#D8F3DC] transition-colors" href="#"><span className="iconify" data-icon="lucide:facebook" data-width="20"></span></a>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-12 w-full md:w-auto">
<div>
<h4 className="text-white font-semibold mb-4">Платформа</h4>
<ul className="space-y-3 text-sm text-white/50">
<li><a className="hover:text-white transition-colors" href="#">Карта мониторинга</a></li>
<li><a className="hover:text-white transition-colors" href="#">Эко-Калькулятор</a></li>
<li><a className="hover:text-white transition-colors" href="#">Отправить отчет</a></li>
<li><a className="hover:text-white transition-colors" href="#">Open Data API</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-semibold mb-4">Государство</h4>
<ul className="space-y-3 text-sm text-white/50">
<li><a className="hover:text-white transition-colors" href="#">Акимат города</a></li>
<li><a className="hover:text-white transition-colors" href="#">Управление Экологии</a></li>
<li><a className="hover:text-white transition-colors" href="#">Законодательство</a></li>
<li><a className="hover:text-white transition-colors" href="#">Контакты</a></li>
</ul>
</div>
<div className="col-span-2 md:col-span-1">
<div className="bg-white/5 p-4 rounded-xl border border-white/5 text-center">
<span className="block text-xs text-white/40 mb-2">Горячая линия экологии</span>
<span className="block text-xl font-bold text-[#D8F3DC]">1308</span>
</div>
</div>
</div>
</div>
<div className="border-t border-white/5 mt-20 pt-8 text-center text-xs text-white/20">
            © 2023 Акимат города Алматы. Все права защищены.
        </div>
</footer>

    </>
  );
}
