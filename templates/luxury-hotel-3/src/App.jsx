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
      

<div className="fixed inset-0 pointer-events-none z-0 flex justify-between px-6 md:px-16 max-w-screen-2xl mx-auto">
<div className="w-px h-full bg-sky-400/[0.03]"></div>
<div className="w-px h-full bg-gold-400/[0.03] hidden md:block"></div>
<div className="w-px h-full bg-gold-400/[0.03] hidden lg:block"></div>
<div className="w-px h-full bg-gold-400/[0.03] hidden md:block"></div>
<div className="w-px h-full bg-sky-400/[0.03]"></div>
</div>

<nav className="fixed transition-all duration-300 md:px-16 flex text-white w-full z-50 border-sky-400/10 border-b pt-6 pr-6 pb-6 pl-6 top-0 backdrop-blur-md items-center justify-between">
<div className="flex items-center gap-12">
<button className="flex flex-col gap-1.5 group w-6">
<div className="w-full h-px bg-cream-200 group-hover:bg-gold-400 transition-all duration-300"></div>
<div className="w-full h-px bg-cream-200 group-hover:bg-gold-400 transition-all duration-300"></div>
</button>
<div className="hidden md:flex gap-10 text-xs font-normal tracking-widest uppercase text-cream-200/60">
<a className="hover:text-gold-400 transition-colors font-instrument-serif" href="#rooms" style={{}}>
            Номера
          </a>
<a className="hover:text-gold-400 transition-colors font-instrument-serif" href="#restaurant" style={{}}>
            Ресторан
          </a>
<a className="hover:text-gold-400 transition-colors font-instrument-serif" href="#club" style={{}}>
            Клуб
          </a>
<a className="hover:text-gold-400 transition-colors font-instrument-serif" href="#business" style={{}}>
            Бизнес
          </a>
</div>
</div>
<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center hidden md:block">
<a className="flex flex-col items-center" href="#">

<svg className="w-24 h-12" fill="none" viewbox="0 0 120 60" xmlns="http://www.w3.org/2000/svg">

<path d="M10 28 Q30 8, 60 18 Q70 12, 80 14 Q90 10, 110 28" fill="none" stroke="white" strokeLinecap="round" strokeWidth="1.5"></path>
<path d="M45 20 Q55 16, 65 18 Q60 22, 50 22 Q47 21, 45 20" fill="white"></path>

<text fill="white" fontFamily="'Cormorant Garamond', serif" fontSize="12" font-weight="300" letter-spacing="6" text-anchor="middle" x="60" y="42">ЧАЙКА</text>

<text fill="rgba(255,255,255,0.4)" fontFamily="Inter, sans-serif" fontSize="5" letter-spacing="2" text-anchor="middle" text-transform="uppercase" x="60" y="52">КЛУБ-ОТЕЛЬ</text>
</svg>
</a>
</div>
<div className="flex items-center gap-6">
<a className="hidden lg:flex items-center gap-2 text-xs text-cream-200/60 hover:text-gold-400 transition-colors font-instrument-serif" href="tel:+78001234567" style={{}}>
<iconify-icon icon="lucide:phone" style={{strokeWidth: '1.5'}} width="12"></iconify-icon>
          8 800 123-45-67
        </a>
<button className="bg-gold-400 text-dark-950 px-6 py-2.5 text-[10px] font-medium uppercase tracking-widest hover:bg-gold-300 transition-all font-instrument-serif" style={{}}>
          Забронировать
        </button>
</div>
</nav>

<header className="relative w-full min-h-[85vh] pt-32 pb-16 px-6 md:px-16 flex flex-col justify-end z-10">

<div className="absolute inset-0 z-0 overflow-hidden">
<img alt="Chaika Hotel" className="w-full h-full object-cover scale-105 brightness-[0.4] sepia-[0.3]" src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&amp;w=2400&amp;auto=format&amp;fit=crop" style={{filter: 'brightness(0.5) saturate(1.1)'}}/>
<div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/60 to-sky-900/20" style={{background: 'linear-gradient(to top, rgb(26, 20, 18), rgba(26, 20, 18, 0.6), rgba(62, 39, 35, 0.2))'}}></div>
<div className="absolute inset-0 bg-gradient-to-r from-dark-950/90 via-dark-950/40 to-transparent"></div>
<div className="absolute inset-0 bg-dark-900/20 mix-blend-multiply"></div>

<div className="absolute inset-0 animate-shimmer pointer-events-none"></div>

<div className="absolute top-0 right-0 bottom-0 left-0" style={{background: 'radial-gradient(ellipse at center, transparent 0%, rgba(15, 10, 6, 0.4) 100%)'}}></div>
</div>

<div className="absolute top-40 right-20 w-64 h-64 rounded-full bg-sky-400/10 blur-3xl animate-float pointer-events-none hidden lg:block"></div>
<div className="absolute bottom-40 left-20 w-48 h-48 rounded-full bg-sky-300/10 blur-3xl animate-float pointer-events-none hidden lg:block" style={{animationDelay: '-3s'}}></div>

<div className="absolute top-32 right-6 md:right-16 z-20 pointer-events-none hidden lg:block">
<div className="relative w-28 h-28 flex items-center justify-center">
<svg className="animate-spin-slow w-full h-full" viewbox="0 0 100 100">
<path d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" fill="transparent" id="circlePath"></path>
<text fill="#c9a227" fontFamily="Inter" fontSize="8.5" font-weight="400" letter-spacing="3px">
<textpath className="font-instrument-serif" href="#circlePath" startoffset="0%" style={{}}>
                EXCLUSIVE • MEMBER • PRIVILEGES •
              </textpath>
</text>
</svg>
<iconify-icon className="absolute text-gold-400" icon="lucide:crown" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</div>
</div>

<div className="relative z-10 max-w-4xl max-w-screen-2xl mx-auto w-full">

<div className="md:hidden mb-8">
<svg className="w-28 h-14" fill="none" viewbox="0 0 120 60" xmlns="http://www.w3.org/2000/svg">

<path d="M10 28 Q30 8, 60 18 Q70 12, 80 14 Q90 10, 110 28" fill="none" stroke="white" strokeLinecap="round" strokeWidth="1.5"></path>
<path d="M45 20 Q55 16, 65 18 Q60 22, 50 22 Q47 21, 45 20" fill="white"></path>

<text fill="white" fontFamily="'Cormorant Garamond', serif" fontSize="12" font-weight="300" letter-spacing="6" text-anchor="middle" x="60" y="42">ЧАЙКА</text>

<text fill="rgba(255,255,255,0.4)" fontFamily="Inter, sans-serif" fontSize="5" letter-spacing="2" text-anchor="middle" text-transform="uppercase" x="60" y="52">КЛУБ-ОТЕЛЬ</text>
</svg>
</div>
<div className="flex items-center gap-4 mb-8">
<div className="w-12 h-px bg-gradient-to-r from-sky-400 to-gold-400"></div>
<span className="text-[10px] uppercase tracking-[0.3em] text-gold-400 font-medium font-instrument-serif" style={{}}>
            Клуб-отель
          </span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-light leading-[0.95] tracking-tight text-cream-100 mb-8 font-instrument-serif" style={{transition: 'outline 0.1s ease-in-out'}}>
          Безупречный

          <span className="italic text-sky-300 font-instrument-serif" style={{transition: 'outline 0.1s ease-in-out'}}>
            сервис
          </span>
          для взыскательных гостей
        </h1>
<p className="max-w-lg text-cream-200/60 text-sm leading-relaxed mb-12 font-instrument-serif" style={{}}>
          Премиальный отель с уникальной клубной системой привилегий. Высочайшие
          стандарты гостеприимства, ресторан новой русской кухни, идеальные
          условия для бизнеса и отдыха.
        </p>

<div className="bg-dark-800/90 backdrop-blur-sm border border-gold-400/20 p-6 mb-12" style={{backgroundColor: 'rgba(42, 31, 28, 0.9)'}}>
<div className="flex flex-col md:flex-row items-center justify-between gap-4">
<div className="flex flex-wrap items-center gap-4 w-full md:w-auto">
<div className="bg-dark-700 px-5 py-3 relative group border border-gold-400/10 flex-1 md:flex-none min-w-[140px]" style={{backgroundColor: 'rgb(61, 46, 42)'}}>
<label className="text-[9px] uppercase tracking-widest text-cream-200/40 block mb-1 font-instrument-serif" style={{}}>
                  Заезд
                </label>
<span className="text-sm text-cream-100 font-instrument-serif" style={{}}>
                  Выберите дату
                </span>
<input className="absolute inset-0 opacity-0 cursor-pointer" type="date"/>
</div>
<div className="bg-dark-700 px-5 py-3 relative group border border-gold-400/10 flex-1 md:flex-none min-w-[140px]" style={{backgroundColor: 'rgb(61, 46, 42)'}}>
<label className="text-[9px] uppercase tracking-widest text-cream-200/40 block mb-1 font-instrument-serif" style={{}}>
                  Выезд
                </label>
<span className="text-sm text-cream-100 font-instrument-serif" style={{}}>
                  Выберите дату
                </span>
<input className="absolute inset-0 opacity-0 cursor-pointer" type="date"/>
</div>
<div className="bg-dark-700 px-5 py-3 border border-gold-400/10 flex-1 md:flex-none min-w-[120px]" style={{backgroundColor: 'rgb(61, 46, 42)'}}>
<label className="text-[9px] uppercase tracking-widest text-cream-200/40 block mb-1 font-instrument-serif" style={{}}>
                  Гости
                </label>
<span className="text-sm text-cream-100 font-instrument-serif" style={{}}>
                  2 гостя
                </span>
</div>
</div>
<button className="w-full md:w-auto bg-gold-400 text-dark-950 px-10 py-4 text-[10px] font-medium uppercase tracking-widest hover:bg-gold-300 transition-all flex items-center justify-center gap-3 font-instrument-serif" style={{}}>
              Проверить наличие
              <iconify-icon icon="lucide:arrow-right" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
</button>
</div>
</div>

<div className="flex gap-12 md:gap-16 pt-8 border-t border-sky-400/20">
<div>
<div className="text-3xl font-serif text-cream-100 mb-1 font-instrument-serif" style={{transition: 'outline 0.1s ease-in-out'}}>
              5★
            </div>
<div className="text-[10px] text-cream-200/40 uppercase tracking-widest font-instrument-serif" style={{}}>
              Уровень сервиса
            </div>
</div>
<div>
<div className="text-3xl font-serif text-cream-100 mb-1 font-instrument-serif" style={{transition: 'outline 0.1s ease-in-out'}}>
              48
            </div>
<div className="text-[10px] text-cream-200/40 uppercase tracking-widest font-instrument-serif" style={{}}>
              Номеров и сьютов
            </div>
</div>
<div>
<div className="text-3xl font-serif text-sky-300 mb-1 font-instrument-serif" style={{transition: 'outline 0.1s ease-in-out'}}>
              3200+
            </div>
<div className="text-[10px] text-cream-200/40 uppercase tracking-widest font-instrument-serif" style={{}}>
              Членов клуба
            </div>
</div>
</div>
</div>

<div className="absolute bottom-8 right-6 md:right-16 flex flex-col items-center gap-2 text-cream-200/40">
<span className="text-[9px] uppercase tracking-widest font-instrument-serif" style={{writingMode: 'vertical-rl'}}>
          Scroll
        </span>
<div className="w-px h-12 bg-gradient-to-b from-sky-400/50 to-transparent"></div>
</div>
</header>


<section className="py-32 px-6 md:px-16 max-w-screen-2xl mx-auto relative z-10">
<div className="grid md:grid-cols-2 gap-20 items-center">
<div>
<span className="text-[10px] uppercase tracking-[0.3em] text-gold-400 font-medium mb-6 block font-instrument-serif" style={{}}>
            О клуб-отеле
          </span>
<h2 className="text-4xl md:text-5xl font-serif text-cream-100 mb-8 tracking-tight leading-[1.1] font-light font-instrument-serif" style={{transition: 'outline 0.1s ease-in-out'}}>
            Традиции
            <br/>
            гостеприимства
            <br/>
<span className="italic text-gold-300 font-instrument-serif" style={{transition: 'outline 0.1s ease-in-out'}}>
              нового уровня
            </span>
</h2>
<div className="space-y-6 text-cream-200/60 text-sm leading-relaxed">
<p className="font-instrument-serif" style={{}}>
              Клуб-отель «Чайка» — это синтез безупречного сервиса и
              персонального подхода. Мы создали пространство, где каждый гость
              получает внимание, соответствующее его статусу и ожиданиям.
            </p>
<p className="font-instrument-serif" style={{}}>
              Наша уникальная клубная система открыта для всех гостей и
              позволяет получать эксклюзивные привилегии с первого визита. Чем
              больше вы с нами — тем больше преимуществ.
            </p>
</div>
<div className="mt-12 flex items-center gap-8">
<a className="inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-widest text-cream-100 border-b border-gold-400 pb-1 hover:text-gold-400 transition-colors font-instrument-serif" href="#club" style={{}}>
              О клубной программе
              <iconify-icon icon="lucide:arrow-right" style={{strokeWidth: '1.5'}} width="12"></iconify-icon>
</a>
</div>
</div>
<div className="relative">
<div className="aspect-[4/5] overflow-hidden">
<img className="w-full h-full object-cover brightness-75 sepia-[0.2]" src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute -bottom-8 -left-8 bg-dark-800 border border-gold-400/20 p-8 max-w-[280px]" style={{backgroundColor: 'rgb(42, 31, 28)'}}>
<div className="text-gold-400 text-4xl font-serif mb-2" style={{transition: 'outline 0.1s ease-in-out'}}>2026</div>
<p className="text-xs text-cream-200/40 leading-relaxed font-instrument-serif" style={{}}>
              Год основания клуб-отеля «Чайка» в Мариуполе
            </p>
</div>
</div>
</div>
</section>

<section className="md:px-16 max-w-screen-2xl mr-auto ml-auto pt-32 pr-6 pb-32 pl-6" id="rooms" style={{backgroundColor: '#1a1412'}}>
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div>
<span className="text-[10px] uppercase tracking-[0.3em] text-gold-400 font-medium mb-6 block font-instrument-serif" style={{}}>
            Размещение
          </span>
<h3 className="text-4xl md:text-5xl font-serif text-cream-100 tracking-tight font-light font-instrument-serif" style={{transition: 'outline 0.1s ease-in-out'}}>
            Номера и
            <span className="italic text-gold-300 font-instrument-serif" style={{transition: 'outline 0.1s ease-in-out'}}>
              сьюты
            </span>
</h3>
</div>
<a className="text-[10px] font-semibold uppercase tracking-widest text-cream-200/50 hover:text-gold-400 transition-colors border-b border-gold-400/30 pb-1 self-start md:self-auto font-instrument-serif" href="#" style={{}}>
          Все номера
        </a>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group">
<div className="relative aspect-[4/3] overflow-hidden mb-6">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 brightness-75 sepia-[0.15]" src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 to-transparent"></div>
<div className="absolute bottom-6 left-6 right-6">
<span className="text-[9px] uppercase tracking-widest text-gold-400 mb-2 block font-instrument-serif" style={{}}>
                от 12 000 ₽
              </span>
<h4 className="text-xl font-serif text-cream-100 font-instrument-serif" style={{}}>
                Superior Room
              </h4>
</div>
</div>
<div className="flex items-center gap-6 text-xs text-cream-200/50">
<span className="flex items-center gap-2 font-instrument-serif" style={{}}>
<iconify-icon icon="lucide:maximize" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
              32 м²
            </span>
<span className="flex items-center gap-2 font-instrument-serif" style={{}}>
<iconify-icon icon="lucide:users" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
              2 гостя
            </span>
</div>
</div>

<div className="group">
<div className="relative aspect-[4/3] overflow-hidden mb-6">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 brightness-75 sepia-[0.15]" src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 to-transparent"></div>
<div className="absolute bottom-6 left-6 right-6">
<span className="text-[9px] uppercase tracking-widest text-gold-400 mb-2 block font-instrument-serif" style={{}}>
                от 18 500 ₽
              </span>
<h4 className="text-xl font-serif text-cream-100 font-instrument-serif" style={{}}>
                Deluxe Suite
              </h4>
</div>
</div>
<div className="flex items-center gap-6 text-xs text-cream-200/50">
<span className="flex items-center gap-2 font-instrument-serif" style={{}}>
<iconify-icon icon="lucide:maximize" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
              55 м²
            </span>
<span className="flex items-center gap-2 font-instrument-serif" style={{}}>
<iconify-icon icon="lucide:users" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
              3 гостя
            </span>
</div>
</div>

<div className="group">
<div className="relative aspect-[4/3] overflow-hidden mb-6">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 brightness-75 sepia-[0.15]" src="https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 to-transparent"></div>
<div className="absolute bottom-6 left-6 right-6">
<span className="text-[9px] uppercase tracking-widest text-gold-400 mb-2 block font-instrument-serif" style={{}}>
                от 45 000 ₽
              </span>
<h4 className="text-xl font-serif text-cream-100 font-instrument-serif" style={{}}>
                Presidential Suite
              </h4>
</div>
</div>
<div className="flex items-center gap-6 text-xs text-cream-200/50">
<span className="flex items-center gap-2 font-instrument-serif" style={{}}>
<iconify-icon icon="lucide:maximize" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
              120 м²
            </span>
<span className="flex items-center gap-2 font-instrument-serif" style={{}}>
<iconify-icon icon="lucide:users" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
              4 гостя
            </span>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 md:px-16 relative" id="club" style={{backgroundColor: 'rgb(35, 24, 22)'}}>
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-sky-400/20 to-transparent"></div>
<div className="max-w-screen-2xl mx-auto">
<div className="text-center mb-20">
<span className="text-[10px] uppercase tracking-[0.3em] text-gold-400 font-medium mb-6 block font-instrument-serif" style={{}}>
            Клубная программа
          </span>
<h3 className="text-4xl md:text-5xl font-serif text-cream-100 tracking-tight font-light font-instrument-serif" style={{transition: 'outline 0.1s ease-in-out'}}>
            Привилегии, которые
            <span className="italic text-gold-300 font-instrument-serif" style={{transition: 'outline 0.1s ease-in-out'}}>
              вдохновляют
            </span>
</h3>
<p className="mt-6 text-cream-200/50 max-w-2xl mx-auto text-sm font-instrument-serif" style={{}}>
            Вступление в клуб бесплатно. Начните получать преимущества с первого
            визита и повышайте статус с каждым пребыванием.
          </p>
</div>

<div className="grid md:grid-cols-3 gap-6 mb-20">
<div className="bg-dark-800 border border-gold-400/10 p-10 group hover:border-gold-400/30 transition-colors" style={{backgroundColor: 'rgb(42, 31, 28)'}}>
<div className="flex items-center justify-between mb-8">
<span className="text-xs uppercase tracking-widest text-cream-200/40 font-instrument-serif" style={{}}>
                Уровень 1
              </span>
<div className="w-8 h-8 rounded-full border border-cream-200/30 flex items-center justify-center">
<div className="w-3 h-3 rounded-full bg-cream-200/50"></div>
</div>
</div>
<h4 className="text-3xl font-serif text-cream-100 mb-2 font-light font-instrument-serif" style={{transition: 'outline 0.1s ease-in-out'}}>
              Silver
            </h4>
<p className="text-xs text-cream-200/40 mb-8 font-instrument-serif" style={{}}>
              Базовый уровень • Регистрация
            </p>
<ul className="space-y-4 text-sm text-cream-200/60">
<li className="flex items-start gap-3 font-instrument-serif" style={{}}>
<iconify-icon className="text-cream-200/40 mt-0.5" icon="lucide:check" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
                Скидка 10% на проживание
              </li>
<li className="flex items-start gap-3 font-instrument-serif" style={{}}>
<iconify-icon className="text-cream-200/40 mt-0.5" icon="lucide:check" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
                Приветственный комплимент
              </li>
<li className="flex items-start gap-3 font-instrument-serif" style={{}}>
<iconify-icon className="text-cream-200/40 mt-0.5" icon="lucide:check" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
                Ранний заезд при наличии
              </li>
</ul>
</div>
<div className="bg-dark-800 border border-gold-400/40 p-10 group hover:border-gold-400/60 transition-colors relative" style={{backgroundColor: 'rgb(42, 31, 28)'}}>
<div className="absolute top-0 right-0 bg-gold-400 text-dark-950 text-[9px] uppercase tracking-widest font-semibold px-4 py-1 font-instrument-serif" style={{}}>
              Популярный
            </div>
<div className="flex items-center justify-between mb-8">
<span className="text-xs uppercase tracking-widest text-gold-400/70 font-instrument-serif" style={{}}>
                Уровень 2
              </span>
<div className="w-8 h-8 rounded-full border border-gold-400 flex items-center justify-center">
<div className="w-3 h-3 rounded-full bg-gold-400"></div>
</div>
</div>
<h4 className="text-3xl font-serif text-gold-400 mb-2 font-light font-instrument-serif" style={{transition: 'outline 0.1s ease-in-out'}}>
              Gold
            </h4>
<p className="text-xs text-cream-200/40 mb-8 font-instrument-serif" style={{}}>
              После 5 визитов
            </p>
<ul className="space-y-4 text-sm text-cream-200/60">
<li className="flex items-start gap-3 font-instrument-serif" style={{}}>
<iconify-icon className="text-gold-400 mt-0.5" icon="lucide:check" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
                Скидка 15% на проживание
              </li>
<li className="flex items-start gap-3 font-instrument-serif" style={{}}>
<iconify-icon className="text-gold-400 mt-0.5" icon="lucide:check" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
                Бесплатное повышение категории
              </li>
<li className="flex items-start gap-3 font-instrument-serif" style={{}}>
<iconify-icon className="text-gold-400 mt-0.5" icon="lucide:check" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
                Скидка 10% в ресторане
              </li>
</ul>
</div>
<div className="bg-dark-800 border border-gold-400/10 p-10 group hover:border-gold-400/30 transition-colors" style={{backgroundColor: 'rgb(42, 31, 28)'}}>
<div className="flex items-center justify-between mb-8">
<span className="text-xs uppercase tracking-widest text-cream-200/40 font-instrument-serif" style={{}}>
                Уровень 3
              </span>
<div className="w-8 h-8 rounded-full border border-cream-100 flex items-center justify-center">
<div className="w-3 h-3 rounded-full bg-cream-100"></div>
</div>
</div>
<h4 className="text-3xl font-serif text-cream-100 mb-2 font-light font-instrument-serif" style={{transition: 'outline 0.1s ease-in-out'}}>
              Platinum
            </h4>
<p className="text-xs text-cream-200/40 mb-8 font-instrument-serif" style={{}}>
              После 15 визитов
            </p>
<ul className="space-y-4 text-sm text-cream-200/60">
<li className="flex items-start gap-3 font-instrument-serif" style={{}}>
<iconify-icon className="text-cream-100 mt-0.5" icon="lucide:check" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
                Скидка 25% на всё
              </li>
<li className="flex items-start gap-3 font-instrument-serif" style={{}}>
<iconify-icon className="text-cream-100 mt-0.5" icon="lucide:check" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
                Персональный менеджер
              </li>
<li className="flex items-start gap-3 font-instrument-serif" style={{}}>
<iconify-icon className="text-cream-100 mt-0.5" icon="lucide:check" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
                Доступ к закрытым мероприятиям
              </li>
</ul>
</div>
</div>

<div className="text-center">
<button className="bg-gold-400 text-dark-950 px-12 py-4 text-[10px] font-semibold uppercase tracking-widest hover:bg-gold-300 transition-all inline-flex items-center gap-3 font-instrument-serif" style={{}}>
            Вступить в клуб бесплатно
            <iconify-icon icon="lucide:arrow-right" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
</button>
</div>
</div>
</section>

<section className="py-32 px-6 md:px-16" id="restaurant" style={{backgroundColor: 'rgb(35, 24, 22)'}}>
<div className="max-w-screen-2xl mx-auto grid md:grid-cols-2 gap-16 items-center">
<div className="order-2 md:order-1">
<span className="text-[10px] uppercase tracking-[0.3em] text-gold-400 font-medium mb-6 block font-instrument-serif" style={{}}>
            Ресторан
          </span>
<h3 className="text-4xl md:text-5xl font-serif text-cream-100 tracking-tight font-light mb-8 font-instrument-serif" style={{transition: 'outline 0.1s ease-in-out'}}>
            Новая русская
            <span className="italic text-gold-300 font-instrument-serif" style={{transition: 'outline 0.1s ease-in-out'}}>
              кухня
            </span>
</h3>
<p className="text-cream-200/60 text-sm leading-relaxed mb-8 font-instrument-serif" style={{}}>
            Наш шеф-повар создаёт авторские блюда, переосмысляя традиции русской
            гастрономии с использованием современных техник и локальных сезонных
            продуктов. Винная карта включает более 200 позиций из лучших
            виноделен мира.
          </p>
<div className="grid grid-cols-2 gap-8 mb-10 py-8 border-y border-gold-400/20">
<div>
<div className="text-2xl font-serif text-sky-300 mb-1 font-instrument-serif" style={{transition: 'outline 0.1s ease-in-out'}}>
                Завтрак
              </div>
<p className="text-xs text-cream-200/40 font-instrument-serif" style={{}}>
                07:00 — 11:00
              </p>
</div>
<div>
<div className="text-2xl font-serif text-gold-400 mb-1 font-instrument-serif" style={{transition: 'outline 0.1s ease-in-out'}}>
                Ужин
              </div>
<p className="text-xs text-cream-200/40 font-instrument-serif" style={{}}>
                18:00 — 23:00
              </p>
</div>
</div>
<a className="inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-widest text-cream-100 border-b border-gold-400 pb-1 hover:text-gold-400 transition-colors font-instrument-serif" href="#" style={{}}>
            Забронировать столик
            <iconify-icon icon="lucide:arrow-right" style={{strokeWidth: '1.5'}} width="12"></iconify-icon>
</a>
</div>
<div className="order-1 md:order-2 relative">
<div className="aspect-[4/5] overflow-hidden">
<img className="w-full h-full object-cover brightness-75 sepia-[0.2]" src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute -bottom-6 -right-6 w-32 h-32 border border-gold-400/30"></div>
</div>
</div>
</section>

<section className="py-32 px-6 md:px-16 max-w-screen-2xl mx-auto" id="business">
<div className="text-center mb-16">
<span className="text-[10px] uppercase tracking-[0.3em] text-gold-400 font-medium mb-6 block font-instrument-serif" style={{}}>
          Для бизнеса
        </span>
<h3 className="text-4xl md:text-5xl font-serif text-cream-100 tracking-tight font-light font-instrument-serif" style={{transition: 'outline 0.1s ease-in-out'}}>
          Идеальные условия
          <br/>
<span className="italic text-gold-300 font-instrument-serif" style={{transition: 'outline 0.1s ease-in-out'}}>
            для деловых встреч
          </span>
</h3>
</div>
<div className="grid md:grid-cols-4 gap-6">
<div className="bg-dark-800 border border-gold-400/10 p-8 hover:border-gold-400/30 transition-colors" style={{backgroundColor: 'rgb(42, 31, 28)'}}>
<iconify-icon className="text-gold-400 mb-6" icon="lucide:presentation" style={{strokeWidth: '1'}} width="28"></iconify-icon>
<h4 className="font-serif text-lg text-cream-100 mb-2 font-instrument-serif" style={{}}>
            Конференц-залы
          </h4>
<p className="text-xs text-cream-200/40 leading-relaxed font-instrument-serif" style={{}}>
            3 зала от 20 до 150 человек с современным оборудованием
          </p>
</div>
<div className="bg-dark-800 border border-gold-400/10 p-8 hover:border-gold-400/30 transition-colors" style={{backgroundColor: 'rgb(42, 31, 28)'}}>
<iconify-icon className="text-gold-300 mb-6" icon="lucide:wifi" style={{strokeWidth: '1'}} width="28"></iconify-icon>
<h4 className="font-serif text-lg text-cream-100 mb-2 font-instrument-serif" style={{}}>
            Высокоскоростной Wi-Fi
          </h4>
<p className="text-xs text-cream-200/40 leading-relaxed font-instrument-serif" style={{}}>
            Стабильное подключение во всех зонах отеля
          </p>
</div>
<div className="bg-dark-800 border border-gold-400/10 p-8 hover:border-gold-400/30 transition-colors" style={{backgroundColor: 'rgb(42, 31, 28)'}}>
<iconify-icon className="text-gold-400 mb-6" icon="lucide:briefcase" style={{strokeWidth: '1'}} width="28"></iconify-icon>
<h4 className="font-serif text-lg text-cream-100 mb-2 font-instrument-serif" style={{}}>
            Бизнес-центр
          </h4>
<p className="text-xs text-cream-200/40 leading-relaxed font-instrument-serif" style={{}}>
            Круглосуточный доступ к офисным услугам
          </p>
</div>
<div className="bg-dark-800 border border-gold-400/10 p-8 hover:border-gold-400/30 transition-colors" style={{backgroundColor: 'rgb(42, 31, 28)'}}>
<iconify-icon className="text-gold-300 mb-6" icon="lucide:car" style={{strokeWidth: '1'}} width="28"></iconify-icon>
<h4 className="font-serif text-lg text-cream-100 mb-2 font-instrument-serif" style={{}}>
            Трансфер
          </h4>
<p className="text-xs text-cream-200/40 leading-relaxed font-instrument-serif" style={{}}>
            Персональный трансфер для деловых гостей
          </p>
</div>
</div>
</section>

<section className="py-32 px-6 md:px-16 border-y border-gold-400/10" style={{backgroundColor: 'rgb(42, 31, 28)'}}>
<div className="max-w-4xl mx-auto text-center">
<iconify-icon className="text-gold-400/30 mb-8 mx-auto" icon="lucide:quote" style={{strokeWidth: '1'}} width="40"></iconify-icon>
<blockquote className="text-2xl md:text-3xl font-serif text-cream-100 mb-10 tracking-tight leading-relaxed font-light font-instrument-serif" style={{transition: 'outline 0.1s ease-in-out'}}>
          «Безупречный сервис и внимание к деталям. Клубная программа
          действительно работает — чувствуешь себя не просто гостем, а членом
          закрытого сообщества. Идеальное место для деловых поездок.»
        </blockquote>
<div className="flex flex-col items-center">
<span className="text-sm text-cream-100 mb-1 font-instrument-serif" style={{}}>
            Алексей Ковалёв
          </span>
<span className="text-[10px] text-cream-200/40 uppercase tracking-widest font-instrument-serif" style={{}}>
            Platinum-член клуба • CEO, Meridian Group
          </span>
</div>
</div>
</section>

<section className="py-32 px-6 md:px-16 max-w-screen-2xl mx-auto">
<div className="grid md:grid-cols-3 gap-px bg-gold-400/10">
<div className="bg-dark-950 p-12 group hover:bg-dark-900 transition-colors" style={{backgroundColor: 'rgb(26, 20, 18)'}}>
<iconify-icon className="text-gold-400/60 mb-8" icon="lucide:sparkles" style={{strokeWidth: '1'}} width="32"></iconify-icon>
<h4 className="font-serif text-2xl text-cream-100 mb-4 font-light font-instrument-serif" style={{transition: 'outline 0.1s ease-in-out'}}>
            SPA &amp; Wellness
          </h4>
<p className="text-sm text-cream-200/40 leading-relaxed mb-6 font-instrument-serif" style={{}}>
            Премиальные процедуры для восстановления сил и гармонии
          </p>
<a className="text-[10px] uppercase tracking-widest text-gold-400 hover:text-gold-300 transition-colors font-instrument-serif" href="#" style={{}}>
            Подробнее →
          </a>
</div>
<div className="bg-dark-950 p-12 group hover:bg-dark-900 transition-colors" style={{backgroundColor: 'rgb(26, 20, 18)'}}>
<iconify-icon className="text-gold-400/60 mb-8" icon="lucide:concierge-bell" style={{strokeWidth: '1'}} width="32"></iconify-icon>
<h4 className="font-serif text-2xl text-cream-100 mb-4 font-light font-instrument-serif" style={{transition: 'outline 0.1s ease-in-out'}}>
            Консьерж-сервис
          </h4>
<p className="text-sm text-cream-200/40 leading-relaxed mb-6 font-instrument-serif" style={{}}>
            Персональный ассистент для решения любых вопросов 24/7
          </p>
<a className="text-[10px] uppercase tracking-widest text-gold-400 hover:text-gold-300 transition-colors font-instrument-serif" href="#" style={{}}>
            Подробнее →
          </a>
</div>
<div className="bg-dark-950 p-12 group hover:bg-dark-900 transition-colors" style={{backgroundColor: 'rgb(26, 20, 18)'}}>
<iconify-icon className="text-gold-400/60 mb-8" icon="lucide:calendar-check" style={{strokeWidth: '1'}} width="32"></iconify-icon>
<h4 className="font-serif text-2xl text-cream-100 mb-4 font-light font-instrument-serif" style={{transition: 'outline 0.1s ease-in-out'}}>
            Мероприятия
          </h4>
<p className="text-sm text-cream-200/40 leading-relaxed mb-6 font-instrument-serif" style={{}}>
            Организация частных и корпоративных событий любого масштаба
          </p>
<a className="text-[10px] uppercase tracking-widest text-gold-400 hover:text-gold-300 transition-colors font-instrument-serif" href="#" style={{}}>
            Подробнее →
          </a>
</div>
</div>
</section>

<section className="py-20 px-6 md:px-16 max-w-screen-2xl mx-auto">
<div className="border border-gold-400/20 p-12 md:p-20 text-center relative overflow-hidden" style={{backgroundColor: 'rgb(42, 31, 28)'}}>
<div className="absolute top-0 left-0 w-32 h-32 border-l border-t border-gold-400/20"></div>
<div className="absolute bottom-0 right-0 w-32 h-32 border-r border-b border-gold-400/20"></div>
<span className="text-[10px] uppercase tracking-[0.3em] text-gold-400 font-medium mb-6 block font-instrument-serif" style={{}}>
          Станьте частью клуба
        </span>
<h3 className="text-3xl md:text-5xl font-serif text-cream-100 tracking-tight mb-6 font-light font-instrument-serif" style={{transition: 'outline 0.1s ease-in-out'}}>
          Откройте мир
          <span className="italic text-gold-300 font-instrument-serif" style={{transition: 'outline 0.1s ease-in-out'}}>
            привилегий
          </span>
</h3>
<p className="text-cream-200/50 max-w-xl mx-auto mb-10 text-sm font-instrument-serif" style={{}}>
          Бесплатная регистрация. Мгновенные преимущества. Персональный подход.
        </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<button className="bg-gold-400 text-dark-950 px-10 py-4 text-[10px] font-semibold uppercase tracking-widest hover:bg-gold-300 transition-all font-instrument-serif" style={{}}>
            Вступить в клуб
          </button>
<button className="border border-gold-400/30 text-cream-100 px-10 py-4 text-[10px] font-medium uppercase tracking-widest hover:border-gold-400/60 hover:bg-gold-400/5 transition-all font-instrument-serif" style={{}}>
            Узнать больше
          </button>
</div>
</div>
</section>

<footer className="text-white py-20 px-6 md:px-16 border-t border-gold-400/10" style={{backgroundColor: 'rgb(35, 24, 22)'}}>
<div className="max-w-screen-2xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
<div className="md:col-span-4">
<a className="inline-block mb-6" href="#">

<svg className="w-32 h-16" fill="none" viewbox="0 0 120 60" xmlns="http://www.w3.org/2000/svg">

<path d="M10 28 Q30 8, 60 18 Q70 12, 80 14 Q90 10, 110 28" fill="none" stroke="white" strokeLinecap="round" strokeWidth="1.5"></path>
<path d="M45 20 Q55 16, 65 18 Q60 22, 50 22 Q47 21, 45 20" fill="white"></path>

<text fill="white" fontFamily="'Cormorant Garamond', serif" fontSize="12" font-weight="300" letter-spacing="6" text-anchor="middle" x="60" y="42">ЧАЙКА</text>

<text fill="rgba(255,255,255,0.4)" fontFamily="Inter, sans-serif" fontSize="5" letter-spacing="2" text-anchor="middle" text-transform="uppercase" x="60" y="52">КЛУБ-ОТЕЛЬ</text>
</svg>
</a>
<p className="text-cream-200/50 text-sm leading-relaxed mb-6 max-w-xs font-instrument-serif" style={{}}>
              Премиальный клуб-отель с безупречным сервисом и уникальной
              системой привилегий для взыскательных гостей.
            </p>
<div className="flex gap-4">
<a className="w-10 h-10 border border-gold-400/20 flex items-center justify-center hover:border-gold-400 hover:text-gold-400 transition-colors text-cream-200/50" href="#">
<iconify-icon icon="lucide:instagram" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</a>
<a className="w-10 h-10 border border-gold-400/20 flex items-center justify-center hover:border-gold-400 hover:text-gold-400 transition-colors text-cream-200/50" href="#">
<iconify-icon icon="lucide:facebook" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</a>
<a className="w-10 h-10 border border-gold-400/20 flex items-center justify-center hover:border-gold-400 hover:text-gold-400 transition-colors text-cream-200/50" href="#">
<iconify-icon icon="lucide:send" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</a>
</div>
</div>
<div className="md:col-span-2">
<h5 className="text-[10px] font-semibold uppercase tracking-widest mb-6 text-gold-400 font-instrument-serif" style={{}}>
              Отель
            </h5>
<ul className="space-y-3 text-sm text-cream-200/50">
<li>
<a className="hover:text-gold-400 transition-colors font-instrument-serif" href="#rooms" style={{}}>
                  Номера
                </a>
</li>
<li>
<a className="hover:text-gold-400 transition-colors font-instrument-serif" href="#restaurant" style={{}}>
                  Ресторан
                </a>
</li>
<li>
<a className="hover:text-gold-400 transition-colors font-instrument-serif" href="#" style={{}}>
                  SPA
                </a>
</li>
</ul>
</div>
<div className="md:col-span-2">
<h5 className="text-[10px] font-semibold uppercase tracking-widest mb-6 text-gold-400 font-instrument-serif" style={{}}>
              Клуб
            </h5>
<ul className="space-y-3 text-sm text-cream-200/50">
<li>
<a className="hover:text-gold-400 transition-colors font-instrument-serif" href="#club" style={{}}>
                  О программе
                </a>
</li>
<li>
<a className="hover:text-gold-400 transition-colors font-instrument-serif" href="#" style={{}}>
                  Уровни членства
                </a>
</li>
<li>
<a className="hover:text-gold-400 transition-colors font-instrument-serif" href="#" style={{}}>
                  Привилегии
                </a>
</li>
</ul>
</div>
<div className="md:col-span-4">
<h5 className="text-[10px] font-semibold uppercase tracking-widest mb-6 text-gold-400 font-instrument-serif" style={{}}>
              Контакты
            </h5>
<div className="space-y-4 text-sm text-cream-200/50">
<p className="font-instrument-serif" style={{}}>
                г. Мариуполь, ул. Приморская, 42
              </p>
<a className="block hover:text-gold-400 transition-colors font-instrument-serif" href="tel:+78001234567" style={{}}>
                8 800 123-45-67
              </a>
<a className="block hover:text-gold-400 transition-colors font-instrument-serif" href="mailto:info@chaika-hotel.ru" style={{}}>
                info@chaika-hotel.ru
              </a>
</div>
</div>
</div>
<div className="pt-8 border-t border-gold-400/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest text-cream-200/30">
<span className="font-instrument-serif" style={{}}>
            © 2024 Клуб-отель «Чайка». Все права защищены.
          </span>
<div className="flex gap-8">
<a className="hover:text-gold-400 transition-colors font-instrument-serif" href="#" style={{}}>
              Политика конфиденциальности
            </a>
<a className="hover:text-gold-400 transition-colors font-instrument-serif" href="#" style={{}}>
              Условия использования
            </a>
</div>
</div>
</div>
</footer>

    </>
  );
}
