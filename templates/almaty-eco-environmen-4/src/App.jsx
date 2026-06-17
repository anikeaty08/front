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
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/60">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center">
<iconify-icon icon="lucide:leaf" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<span className="text-lg font-bold tracking-tight text-slate-900">
            ALMATY ECO
          </span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-slate-500 hover:text-emerald-600 transition-colors" href="#news">
            Новости
          </a>
<a className="text-sm font-medium text-slate-500 hover:text-emerald-600 transition-colors" href="#complaint">
            Подать жалобу
          </a>
<a className="text-sm font-medium text-slate-500 hover:text-emerald-600 transition-colors" href="#calculator">
            Эко-калькулятор
          </a>
<a className="text-sm font-medium text-slate-500 hover:text-emerald-600 transition-colors" href="#faq">
            FAQ
          </a>
<a className="text-sm font-medium text-slate-500 hover:text-emerald-600 transition-colors" href="#contacts">
            Контакты
          </a>
</div>
<button className="md:hidden p-2 text-slate-500">
<iconify-icon icon="lucide:menu" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</nav>

<section className="pt-32 pb-16 md:pt-40 md:pb-24 px-6 overflow-hidden">
<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
<div className="space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-medium">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
            AQI: 45 (Хорошо)
          </div>
<h1 className="text-5xl md:text-6xl font-bold tracking-tight text-slate-900 text-balance leading-[1.1]">
            Чистый воздух
            <br/>
            для
            <span className="text-emerald-600">Алматы</span>
</h1>
<p className="text-lg text-slate-500 max-w-lg leading-relaxed">
            Единый портал об экологии города. Узнавайте о мероприятиях,
            оставляйте жалобы, получайте льготы и следите за качеством воздуха.
          </p>
<div className="flex flex-wrap gap-4">
<a className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-emerald-600 text-white font-medium hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-200" href="#complaint">
              Подать жалобу
            </a>
<a className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white text-slate-700 border border-gray-200 font-medium hover:bg-gray-50 hover:border-gray-300 transition-all" href="#calculator">
              Эко-калькулятор
            </a>
</div>
</div>
<div className="relative">
<div className="absolute inset-0 bg-gradient-to-tr from-emerald-100/50 to-transparent rounded-[2rem] transform rotate-3 scale-105 -z-10"></div>
<img alt="Природа Алматы" className="w-full h-[500px] object-cover rounded-[2rem] shadow-2xl shadow-gray-200/50" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
</div>
</section>

<section className="py-24 px-6 bg-slate-900 text-white relative overflow-hidden">

<div className="absolute inset-0 pointer-events-none">
<div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3"></div>
<div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3"></div>
</div>
<div className="max-w-7xl mx-auto relative z-10">
<div className="max-w-2xl mb-16">
<h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6">
            Результаты нашей работы
          </h2>
<p className="text-slate-400 text-lg leading-relaxed">
            Мы создаем экосистему для комфортной жизни в Алматы. Цифры говорят о
            реальном вкладе в чистое будущее города.
          </p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
<div className="flex items-center gap-4 mb-6">
<div className="w-14 h-14 rounded-2xl bg-blue-500/20 text-blue-400 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
<iconify-icon icon="lucide:trending-down" strokeWidth="2" width="28"></iconify-icon>
</div>
</div>
<div className="text-5xl font-bold text-white tracking-tight mb-3">
              15%
            </div>
<p className="text-sm font-medium text-slate-400">
              Снижение выбросов в 2024 году
            </p>
</div>

<div className="group p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
<div className="flex items-center gap-4 mb-6">
<div className="w-14 h-14 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
<iconify-icon icon="lucide:users" strokeWidth="2" width="28"></iconify-icon>
</div>
</div>
<div className="text-5xl font-bold text-white tracking-tight mb-3">
              5 000+
            </div>
<p className="text-sm font-medium text-slate-400">
              Граждан получили льготы
            </p>
</div>

<div className="group p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
<div className="flex items-center gap-4 mb-6">
<div className="w-14 h-14 rounded-2xl bg-green-500/20 text-green-400 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
<iconify-icon icon="lucide:trees" strokeWidth="2" width="28"></iconify-icon>
</div>
</div>
<div className="text-5xl font-bold text-white tracking-tight mb-3">
              10 000
            </div>
<p className="text-sm font-medium text-slate-400">Деревьев высажено</p>
</div>

<div className="group p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
<div className="flex items-center gap-4 mb-6">
<div className="w-14 h-14 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
<iconify-icon icon="lucide:zap" strokeWidth="2" width="28"></iconify-icon>
</div>
</div>
<div className="text-5xl font-bold text-white tracking-tight mb-3">
              2 500+
            </div>
<p className="text-sm font-medium text-slate-400">
              Электромобилей на дорогах
            </p>
</div>
</div>
</div>
</section>

<section className="py-16 px-6" id="news">
<div className="max-w-7xl mx-auto">
<div className="flex justify-between items-end mb-10">
<div>
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">
              Новости и статьи
            </h2>
<p className="text-slate-500 mt-2">
              Следите за последними новостями об экологических инициативах
            </p>
</div>
<a className="hidden md:flex items-center text-sm font-medium text-emerald-600 hover:text-emerald-700" href="#">
            Показать все
            <iconify-icon className="ml-1" icon="lucide:arrow-right" width="16"></iconify-icon>
</a>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<article className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col h-full">
<div className="h-40 bg-gray-200 relative overflow-hidden">
<img alt="News" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1577563908411-5077b6dc7624?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 left-3 bg-white/90 backdrop-blur px-2 py-1 rounded-md text-[10px] font-bold tracking-wide uppercase text-slate-700">
                Новости
              </div>
</div>
<div className="p-5 flex flex-col flex-grow">
<div className="text-xs text-slate-400 mb-2">15.12.2024</div>
<h3 className="font-semibold text-slate-900 leading-snug mb-3 group-hover:text-emerald-600 transition-colors">
                Запущена новая зона низких выбросов в центре города
              </h3>
<p className="text-sm text-slate-500 line-clamp-2 mb-4 flex-grow">
                С 1 декабря в центральных районах Алматы введена зона низких
                выбросов.
              </p>
<a className="inline-flex items-center text-xs font-medium text-emerald-600" href="#">
                Читать далее
              </a>
</div>
</article>

<article className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col h-full">
<div className="h-40 bg-gray-200 relative overflow-hidden">
<img alt="News" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 left-3 bg-white/90 backdrop-blur px-2 py-1 rounded-md text-[10px] font-bold tracking-wide uppercase text-slate-700">
                Льготы
              </div>
</div>
<div className="p-5 flex flex-col flex-grow">
<div className="text-xs text-slate-400 mb-2">10.12.2024</div>
<h3 className="font-semibold text-slate-900 leading-snug mb-3 group-hover:text-emerald-600 transition-colors">
                Программа субсидий на электромобили продлена
              </h3>
<p className="text-sm text-slate-500 line-clamp-2 mb-4 flex-grow">
                Размер субсидий увеличен для всех категорий граждан.
              </p>
<a className="inline-flex items-center text-xs font-medium text-emerald-600" href="#">
                Читать далее
              </a>
</div>
</article>

<article className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col h-full">
<div className="h-40 bg-gray-200 relative overflow-hidden">
<img alt="News" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute top-3 left-3 bg-white/90 backdrop-blur px-2 py-1 rounded-md text-[10px] font-bold tracking-wide uppercase text-slate-700">
                Отчёты
              </div>
</div>
<div className="p-5 flex flex-col flex-grow">
<div className="text-xs text-slate-400 mb-2">05.12.2024</div>
<h3 className="font-semibold text-slate-900 leading-snug mb-3 group-hover:text-emerald-600 transition-colors">
                Результаты мониторинга качества воздуха
              </h3>
<p className="text-sm text-slate-500 line-clamp-2 mb-4 flex-grow">
                Уровень загрязнения воздуха снизился на 15% по сравнению с
                прошлым годом.
              </p>
<a className="inline-flex items-center text-xs font-medium text-emerald-600" href="#">
                Читать далее
              </a>
</div>
</article>

<article className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col h-full">
<div className="h-40 bg-gray-200 relative overflow-hidden">
<img alt="News" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute top-3 left-3 bg-white/90 backdrop-blur px-2 py-1 rounded-md text-[10px] font-bold tracking-wide uppercase text-slate-700">
                Мероприятия
              </div>
</div>
<div className="p-5 flex flex-col flex-grow">
<div className="text-xs text-slate-400 mb-2">28.11.2024</div>
<h3 className="font-semibold text-slate-900 leading-snug mb-3 group-hover:text-emerald-600 transition-colors">
                Высажено 10 000 деревьев в рамках программы
              </h3>
<p className="text-sm text-slate-500 line-clamp-2 mb-4 flex-grow">
                Волонтёры и городские службы высадили деревья в разных районах.
              </p>
<a className="inline-flex items-center text-xs font-medium text-emerald-600" href="#">
                Читать далее
              </a>
</div>
</article>
</div>
<div className="mt-6 text-center md:hidden">
<a className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-white border border-gray-200 text-sm font-medium text-slate-700 w-full" href="#">
            Показать все новости
          </a>
</div>
</div>
</section>

<section className="py-16 px-6 bg-slate-50/50" id="complaint">
<div className="max-w-4xl mx-auto">
<div className="text-center mb-10">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">
            Подать жалобу на источник выбросов
          </h2>
<p className="text-slate-500 mt-2">
            Помогите нам сделать город чище. Сообщите о нарушениях экологических
            норм.
          </p>
</div>
<div className="bg-white rounded-[2rem] p-8 md:p-12 border border-gray-100 shadow-2xl shadow-emerald-900/5 relative overflow-hidden">

<div className="absolute top-0 right-0 w-64 h-64 bg-emerald-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-60 pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 opacity-60 pointer-events-none"></div>
<form className="space-y-10 relative z-10">

<div className="space-y-4">
<label className="text-sm font-semibold text-slate-900 flex items-center gap-2">
<span className="flex items-center justify-center w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 text-xs">
                  1
                </span>
                Источник загрязнения
              </label>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<label className="cursor-pointer group">
<input checked="" className="peer sr-only" name="type" type="radio"/>
<div className="h-full p-4 rounded-2xl border-2 border-gray-100 bg-white hover:border-emerald-200 hover:bg-emerald-50/30 transition-all peer-checked:border-emerald-500 peer-checked:bg-emerald-50 peer-checked:shadow-sm flex flex-col items-center justify-center gap-3 text-center">
<div className="w-10 h-10 rounded-full bg-gray-100 text-gray-500 group-hover:bg-emerald-100 group-hover:text-emerald-600 peer-checked:bg-emerald-100 peer-checked:text-emerald-600 flex items-center justify-center transition-colors">
<iconify-icon icon="lucide:car-front" width="20"></iconify-icon>
</div>
<span className="text-sm font-medium text-slate-600 peer-checked:text-slate-900">
                      Автотранспорт
                    </span>
</div>
</label>
<label className="cursor-pointer group">
<input className="peer sr-only" name="type" type="radio"/>
<div className="h-full p-4 rounded-2xl border-2 border-gray-100 bg-white hover:border-emerald-200 hover:bg-emerald-50/30 transition-all peer-checked:border-emerald-500 peer-checked:bg-emerald-50 peer-checked:shadow-sm flex flex-col items-center justify-center gap-3 text-center">
<div className="w-10 h-10 rounded-full bg-gray-100 text-gray-500 group-hover:bg-emerald-100 group-hover:text-emerald-600 peer-checked:bg-emerald-100 peer-checked:text-emerald-600 flex items-center justify-center transition-colors">
<iconify-icon icon="lucide:factory" width="20"></iconify-icon>
</div>
<span className="text-sm font-medium text-slate-600 peer-checked:text-slate-900">
                      Предприятие / Кафе
                    </span>
</div>
</label>
<label className="cursor-pointer group">
<input className="peer sr-only" name="type" type="radio"/>
<div className="h-full p-4 rounded-2xl border-2 border-gray-100 bg-white hover:border-emerald-200 hover:bg-emerald-50/30 transition-all peer-checked:border-emerald-500 peer-checked:bg-emerald-50 peer-checked:shadow-sm flex flex-col items-center justify-center gap-3 text-center">
<div className="w-10 h-10 rounded-full bg-gray-100 text-gray-500 group-hover:bg-emerald-100 group-hover:text-emerald-600 peer-checked:bg-emerald-100 peer-checked:text-emerald-600 flex items-center justify-center transition-colors">
<iconify-icon icon="lucide:alert-triangle" width="20"></iconify-icon>
</div>
<span className="text-sm font-medium text-slate-600 peer-checked:text-slate-900">
                      Другое нарушение
                    </span>
</div>
</label>
</div>
</div>

<div className="grid lg:grid-cols-2 gap-8">
<div className="space-y-6">

<div className="space-y-4">
<label className="text-sm font-semibold text-slate-900 flex items-center gap-2">
<span className="flex items-center justify-center w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 text-xs">
                      2
                    </span>
                    Что произошло?
                  </label>

<div className="flex flex-wrap gap-2">
<label className="cursor-pointer">
<input className="peer sr-only" type="checkbox"/>
<div className="px-3 py-1.5 rounded-lg bg-gray-100 text-slate-500 text-xs font-medium border border-transparent hover:bg-gray-200 peer-checked:bg-slate-800 peer-checked:text-white transition-all flex items-center gap-1.5">
<iconify-icon icon="lucide:wind" width="14"></iconify-icon>
                        Видимый дым
                      </div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" type="checkbox"/>
<div className="px-3 py-1.5 rounded-lg bg-gray-100 text-slate-500 text-xs font-medium border border-transparent hover:bg-gray-200 peer-checked:bg-slate-800 peer-checked:text-white transition-all flex items-center gap-1.5">
<iconify-icon icon="lucide:skull" width="14"></iconify-icon>
                        Едкий запах
                      </div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" type="checkbox"/>
<div className="px-3 py-1.5 rounded-lg bg-gray-100 text-slate-500 text-xs font-medium border border-transparent hover:bg-gray-200 peer-checked:bg-slate-800 peer-checked:text-white transition-all flex items-center gap-1.5">
<iconify-icon icon="lucide:trash-2" width="14"></iconify-icon>
                        Сжигание мусора
                      </div>
</label>
</div>
<textarea className="w-full rounded-2xl border-gray-200 bg-gray-50/50 p-4 text-sm text-slate-900 placeholder:text-slate-400 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all resize-none" placeholder="Опишите ситуацию, укажите номер авто или название заведения..." rows="5"></textarea>
</div>
</div>

<div className="space-y-4">
<label className="text-sm font-semibold text-slate-900 flex items-center gap-2">
<span className="flex items-center justify-center w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 text-xs">
                    3
                  </span>
                  Доказательства
                </label>
<div className="h-full min-h-[160px] border-2 border-dashed border-gray-200 rounded-2xl bg-gray-50/30 hover:bg-white hover:border-emerald-400 transition-all cursor-pointer group flex flex-col items-center justify-center p-6 text-center">
<div className="w-12 h-12 bg-white border border-gray-100 shadow-sm rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 group-hover:border-emerald-200 transition-all">
<iconify-icon className="text-slate-400 group-hover:text-emerald-600 transition-colors" icon="lucide:camera" width="24"></iconify-icon>
</div>
<p className="text-sm font-medium text-slate-700">
                    Загрузить фото/видео
                  </p>
<p className="text-xs text-slate-400 mt-1 max-w-[200px]">
                    Поддерживаются JPG, PNG, MP4 до 50 МБ
                  </p>
</div>
</div>
</div>

<div className="space-y-4">
<label className="text-sm font-semibold text-slate-900 flex items-center gap-2">
<span className="flex items-center justify-center w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 text-xs">
                  4
                </span>
                Где это случилось?
              </label>
<div className="bg-gray-50 rounded-2xl p-2 border border-gray-200">
<div className="grid md:grid-cols-3 gap-2">

<div className="md:col-span-2 h-14 md:h-auto min-h-[60px] relative rounded-xl overflow-hidden bg-slate-100 group cursor-pointer border border-slate-200">

<div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(#64748b 1px, transparent 1px)', backgroundSize: '12px 12px'}}></div>
<div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 to-transparent"></div>
<div className="absolute inset-0 flex items-center justify-center">
<span className="bg-white shadow-sm border border-gray-100 px-3 py-1.5 rounded-md text-xs font-semibold text-slate-700 flex items-center gap-2 group-hover:scale-105 group-hover:text-emerald-600 transition-all">
<iconify-icon icon="lucide:map-pin" width="14"></iconify-icon>
                        Указать на карте
                      </span>
</div>
</div>

<div className="space-y-2 p-2">
<input className="w-full h-10 rounded-lg border-gray-200 bg-white px-3 text-sm focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10 outline-none" placeholder="Адрес (улица, дом)" type="text"/>
<input className="w-full h-10 rounded-lg border-gray-200 bg-white px-3 text-sm focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10 outline-none" placeholder="+7 (___) ___-__-__" type="tel"/>
</div>
</div>
</div>
</div>

<div className="pt-2">
<button className="group relative w-full flex items-center justify-center gap-3 py-4 bg-slate-900 text-white rounded-xl font-semibold overflow-hidden transition-all hover:shadow-xl hover:shadow-slate-900/20 active:scale-[0.99]" type="button">
<div className="absolute inset-0 w-full h-full bg-gradient-to-r from-emerald-600 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<span className="relative flex items-center gap-2">
                  Отправить жалобу
                  <iconify-icon icon="lucide:send" width="18"></iconify-icon>
</span>
</button>
<p className="text-center text-xs text-slate-400 mt-4">
                Нажимая кнопку, вы соглашаетесь с политикой обработки
                персональных данных
              </p>
</div>
</form>
</div>
</div>
</section>

<section className="py-16 px-6">
<div className="max-w-6xl mx-auto">
<div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden text-white">
<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/20 blur-[100px] rounded-full pointer-events-none"></div>
<div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
<div>
<h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                Льготы и меры поддержки
              </h2>
<p className="text-slate-300 mb-8 text-lg">
                Получите доступ к программам поддержки экологичного транспорта и
                внесите свой вклад в чистоту города.
              </p>
<ul className="space-y-4 mb-10">
<li className="flex items-start gap-3">
<div className="mt-1 text-emerald-400">
<iconify-icon icon="lucide:check-circle-2" width="20"></iconify-icon>
</div>
<span className="text-slate-100">
                    Субсидии на покупку электромобилей
                  </span>
</li>
<li className="flex items-start gap-3">
<div className="mt-1 text-emerald-400">
<iconify-icon icon="lucide:check-circle-2" width="20"></iconify-icon>
</div>
<span className="text-slate-100">
                    Бесплатный въезд в зону LEZ для эко-транспорта
                  </span>
</li>
<li className="flex items-start gap-3">
<div className="mt-1 text-emerald-400">
<iconify-icon icon="lucide:check-circle-2" width="20"></iconify-icon>
</div>
<span className="text-slate-100">
                    Льготная парковка в центре города
                  </span>
</li>
</ul>
<div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
<button className="px-8 py-3 bg-emerald-500 text-white rounded-full font-semibold hover:bg-emerald-400 transition-colors shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                  Подать заявку на льготы
                </button>
<p className="text-sm text-slate-400 flex items-center gap-2">
<iconify-icon icon="lucide:users" width="16"></iconify-icon>
                  Более 5000 жителей уже воспользовались
                </p>
</div>
</div>
<div className="hidden md:flex justify-end">

<div className="relative w-80 h-80 bg-gradient-to-br from-emerald-500 to-teal-700 rounded-3xl rotate-6 shadow-2xl flex items-center justify-center border border-white/10">
<iconify-icon className="text-white/80" icon="lucide:sprout" width="120"></iconify-icon>
<div className="absolute -bottom-6 -left-6 w-full h-full bg-slate-800 rounded-3xl -z-10"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 px-6" id="calculator">
<div className="max-w-3xl mx-auto">
<div className="text-center mb-10">
<div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full mb-4">
<iconify-icon icon="lucide:calculator" width="24"></iconify-icon>
</div>
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">
            Калькулятор эко-класса автомобиля
          </h2>
<p className="text-slate-500 mt-2">
            Узнайте экологический класс вашего автомобиля и уровень выбросов.
          </p>
</div>
<div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">

<div className="flex border-b border-gray-200">
<button className="flex-1 py-4 text-sm font-medium text-emerald-600 border-b-2 border-emerald-600 bg-emerald-50/50">
              Автоматический расчёт
            </button>
<button className="flex-1 py-4 text-sm font-medium text-slate-500 hover:text-slate-700">
              Ручной расчёт
            </button>
</div>
<div className="p-8">
<div className="space-y-6">
<div className="grid sm:grid-cols-2 gap-6">
<div>
<label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
                    ГРНЗ (Номер авто)
                  </label>
<input className="w-full rounded-lg border-gray-200 bg-gray-50 h-12 px-4 text-sm focus:border-emerald-500 focus:ring-0 outline-none uppercase" placeholder="123 ABC 02" type="text"/>
</div>
<div>
<label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
                    ИИН владельца
                  </label>
<input className="w-full rounded-lg border-gray-200 bg-gray-50 h-12 px-4 text-sm focus:border-emerald-500 focus:ring-0 outline-none" placeholder="Введите ИИН" type="text"/>
</div>
</div>
<div className="p-4 bg-gray-50 rounded-xl border border-dashed border-gray-200 text-center">
<p className="text-sm text-slate-400">
                  Данные используются только для поиска информации в базе ГАИ
                </p>
</div>
<button className="w-full py-3 bg-slate-900 text-white rounded-lg font-medium hover:bg-slate-800 transition-colors">
                Рассчитать эко-класс
              </button>

<div className="mt-6 pt-6 border-t border-gray-100 hidden">
<div className="flex items-center justify-between">
<span className="text-sm font-medium text-slate-500">
                    Эко-класс:
                  </span>
<span className="text-xl font-bold text-emerald-600">Евро-5</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 px-6 bg-slate-50/50" id="faq">
<div className="max-w-3xl mx-auto">
<h2 className="text-2xl font-semibold tracking-tight text-slate-900 mb-8 text-center">
          Часто задаваемые вопросы
        </h2>
<div className="space-y-4">

<details className="group bg-white rounded-xl border border-gray-200 overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between p-6 text-slate-900 font-medium">
              Что такое зона LEZ?
              <div className="text-slate-400 transition group-open:rotate-180">
<iconify-icon icon="lucide:chevron-down" width="20"></iconify-icon>
</div>
</summary>
<div className="px-6 pb-6 text-sm text-slate-500 leading-relaxed">
              LEZ (Low Emission Zone) — это зона с низким уровнем выбросов, куда
              ограничен въезд транспортных средств, не соответствующих
              определенным экологическим стандартам.
            </div>
</details>

<details className="group bg-white rounded-xl border border-gray-200 overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between p-6 text-slate-900 font-medium">
              Как получить льготу на электромобиль?
              <div className="text-slate-400 transition group-open:rotate-180">
<iconify-icon icon="lucide:chevron-down" width="20"></iconify-icon>
</div>
</summary>
<div className="px-6 pb-6 text-sm text-slate-500 leading-relaxed">
              Вам необходимо подать заявку через раздел "Льготы" на нашем
              портале, приложив технический паспорт автомобиля и удостоверение
              личности.
            </div>
</details>

<details className="group bg-white rounded-xl border border-gray-200 overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between p-6 text-slate-900 font-medium">
              Куда жаловаться на сжигание мусора?
              <div className="text-slate-400 transition group-open:rotate-180">
<iconify-icon icon="lucide:chevron-down" width="20"></iconify-icon>
</div>
</summary>
<div className="px-6 pb-6 text-sm text-slate-500 leading-relaxed">
              Используйте форму "Подать жалобу" на главной странице. Выберите
              тип "Другое" и опишите ситуацию, желательно приложив фото или
              видео.
            </div>
</details>
</div>
<div className="mt-8 text-center">
<p className="text-sm text-slate-500">
            Не нашли ответ?
            <a className="text-emerald-600 font-medium hover:underline" href="#">
              Связаться с поддержкой
            </a>
</p>
</div>
</div>
</section>

<footer className="bg-white border-t border-gray-200 pt-16 pb-8 px-6" id="contacts">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-1">
<div className="flex items-center gap-2 mb-4">
<div className="w-6 h-6 bg-emerald-100 text-emerald-600 rounded flex items-center justify-center">
<iconify-icon icon="lucide:leaf" width="14"></iconify-icon>
</div>
<span className="text-sm font-bold text-slate-900">
                Sergek Ecology
              </span>
</div>
<p className="text-sm text-slate-500 leading-relaxed">
              Портал об экологии города Алматы. Мы следим за качеством воздуха и
              улучшаем экологическую ситуацию.
            </p>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4 text-sm">Навигация</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li>
<a className="hover:text-emerald-600 transition-colors" href="#news">
                  Новости
                </a>
</li>
<li>
<a className="hover:text-emerald-600 transition-colors" href="#complaint">
                  Подать жалобу
                </a>
</li>
<li>
<a className="hover:text-emerald-600 transition-colors" href="#calculator">
                  Эко-калькулятор
                </a>
</li>
<li>
<a className="hover:text-emerald-600 transition-colors" href="#faq">
                  FAQ
                </a>
</li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4 text-sm">
              Полезные ссылки
            </h4>
<ul className="space-y-2 text-sm text-slate-500">
<li>
<a className="hover:text-emerald-600 transition-colors" href="#">
                  Карта зоны LEZ
                </a>
</li>
<li>
<a className="hover:text-emerald-600 transition-colors" href="#">
                  Нормативные документы
                </a>
</li>
<li>
<a className="hover:text-emerald-600 transition-colors" href="#">
                  Программы поддержки
                </a>
</li>
<li>
<a className="hover:text-emerald-600 transition-colors" href="#">
                  Личный кабинет
                </a>
</li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4 text-sm">Контакты</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li className="flex items-start gap-2">
<iconify-icon className="mt-0.5 shrink-0" icon="lucide:phone" width="16"></iconify-icon>
<span>
                  +7 (727) 123-45-67
                  <br/>
<span className="text-xs text-slate-400">Пн–Пт: 9:00–18:00</span>
</span>
</li>
<li className="flex items-center gap-2">
<iconify-icon className="shrink-0" icon="lucide:mail" width="16"></iconify-icon>
<a className="hover:text-emerald-600" href="mailto:info@sergek.kz">
                  info@sergek.kz
                </a>
</li>
<li className="flex items-start gap-2">
<iconify-icon className="mt-0.5 shrink-0" icon="lucide:map-pin" width="16"></iconify-icon>
<span>г. Алматы, пр. Достык, 123</span>
</li>
</ul>
</div>
</div>
<div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-400">
            © 2024 Sergek Ecology. Все права защищены.
          </p>
<div className="flex gap-6">
<a className="text-xs text-slate-400 hover:text-slate-600" href="#">
              Политика конфиденциальности
            </a>
<a className="text-xs text-slate-400 hover:text-slate-600" href="#">
              Условия использования
            </a>
</div>
</div>
</div>
</footer>

    </>
  );
}
