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



      document.addEventListener('DOMContentLoaded', () => {
          const menuBtn = document.getElementById('menuBtn');
          const mobileNav = document.getElementById('mobileNav');

          if (menuBtn && mobileNav) {
              let isOpen = false;
              menuBtn.addEventListener('click', () => {
                  isOpen = !isOpen;
                  if (isOpen) {
                      mobileNav.classList.remove('hidden');
                      menuBtn.innerHTML = '<span class="iconify h-6 w-6" data-icon="lucide:x" style="stroke-width: 1.5;"></span>';
                  } else {
                      mobileNav.classList.add('hidden');
                      menuBtn.innerHTML = '<span class="iconify h-6 w-6" data-icon="lucide:menu" style="stroke-width: 1.5;"></span>';
                  }
              });
          }

          document.querySelectorAll('a[href^="#"]').forEach(anchor => {
              anchor.addEventListener('click', function (e) {
                  e.preventDefault();
                  const target = document.querySelector(this.getAttribute('href'));
                  if (target) {
                      target.scrollIntoView({ behavior: 'smooth' });
                      if (mobileNav && !mobileNav.classList.contains('hidden')) {
                          mobileNav.classList.add('hidden');
                          if(menuBtn) menuBtn.innerHTML = '<span class="iconify h-6 w-6" data-icon="lucide:menu" style="stroke-width: 1.5;"></span>';
                      }
                  }
              });
          });
      });
    
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
      

<div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
<div className="absolute top-[-20%] left-[20%] w-[60%] h-[60%] rounded-full bg-blue-600/5 blur-[120px]"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-600/5 blur-[120px]"></div>
<div className="absolute top-[40%] left-[-10%] w-[30%] h-[30%] rounded-full bg-emerald-600/5 blur-[100px]"></div>
<div className="absolute inset-0 grid-bg opacity-20 mask-image-gradient"></div>
</div>

<header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#020202]/80 backdrop-blur-xl">
<div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-b from-white/10 to-white/5 ring-1 ring-white/15 overflow-hidden group-hover:ring-white/25 transition-all">
<span className="iconify h-4 w-4 text-white relative z-10" data-icon="lucide:languages" style={{strokeWidth: '1.5'}}></span>
</div>
<span className="text-lg font-semibold tracking-tight text-white" style={{fontFamily: '\'Bricolage Grotesque\', sans-serif'}}>
            ShellTranslate
          </span>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-white/60 hover:text-white transition-colors" href="#features">
            Возможности
          </a>
<a className="text-sm font-medium text-white/60 hover:text-white transition-colors" href="#how-it-works">
            Как это работает
          </a>
<a className="text-sm font-medium text-white/60 hover:text-white transition-colors" href="#ecosystem">
            Экосистема
          </a>
<a className="text-sm font-medium text-white/60 hover:text-white transition-colors" href="#api">
            API
          </a>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:inline-flex items-center gap-2 rounded-lg bg-white text-black px-4 py-2 text-xs font-semibold hover:bg-neutral-200 transition-colors shadow-[0_0_15px_-3px_rgba(255,255,255,0.3)]" href="#">
<span>Войти</span>
<span className="iconify h-3.5 w-3.5" data-icon="lucide:arrow-right" style={{strokeWidth: '1.5'}}></span>
</a>
<button className="md:hidden text-white/70 hover:text-white" id="menuBtn">
<span className="iconify h-6 w-6" data-icon="lucide:menu" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
</div>

<div className="hidden md:hidden border-t border-white/5 bg-[#020202] px-6 py-4" id="mobileNav">
<nav className="flex flex-col gap-4">
<a className="text-sm text-white/70" href="#features">Возможности</a>
<a className="text-sm text-white/70" href="#how-it-works">
            Как это работает
          </a>
<a className="text-sm text-white/70" href="#ecosystem">Экосистема</a>
<a className="text-sm text-white/70" href="#api">API</a>
</nav>
</div>
</header>
<main className="relative z-10 pt-32 pb-20">

<section className="mx-auto max-w-7xl px-6 text-center mb-24">
<div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 ring-1 ring-white/10 backdrop-blur mb-8 animate-fade-in-up">
<span className="flex h-1.5 w-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.6)]"></span>
<span className="text-xs font-medium text-white/80 uppercase tracking-wide">
            AI Переводчик v2.0
          </span>
</div>
<h1 className="mx-auto max-w-5xl text-5xl sm:text-7xl lg:text-8xl font-semibold tracking-tighter text-white mb-8 leading-[0.9]" style={{fontFamily: '\'Bricolage Grotesque\', sans-serif'}}>
          Умный переводчик
          <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-white/80">
            для бизнеса с Китаем
          </span>
</h1>
<p className="mx-auto max-w-2xl text-lg text-white/50 leading-relaxed mb-10">
          ShellTranslate — это не просто переводчик, а инструмент для свободного
          общения. Учитываем культурный код, сленг и деловой этикет.
          <b>Полностью бесплатно.</b>
          Без подписок и скрытых платежей.
        </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20">
<a className="w-full sm:w-auto inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-white px-8 text-sm font-semibold text-black hover:bg-neutral-200 transition-all shadow-[0_0_20px_-5px_rgba(255,255,255,0.15)]" href="#">
<span className="iconify h-4 w-4" data-icon="lucide:zap" style={{strokeWidth: '2'}}></span>
<span>Начать бесплатно</span>
</a>
<a className="w-full sm:w-auto inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-white/5 px-8 text-sm font-medium text-white ring-1 ring-white/10 hover:bg-white/10 transition-all" href="https://shellproof.net" target="_blank">
<span>ShellProof Group</span>
<span className="iconify h-4 w-4" data-icon="lucide:chevron-right" style={{strokeWidth: '1.5'}}></span>
</a>
</div>

<div className="relative mx-auto max-w-6xl rounded-2xl border border-white/10 bg-[#0A0A0A] shadow-2xl shadow-blue-900/10 overflow-hidden">
<div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

<div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-white/[0.02]">
<div className="flex gap-2">
<div className="h-3 w-3 rounded-full bg-red-500/20 border border-red-500/30"></div>
<div className="h-3 w-3 rounded-full bg-yellow-500/20 border border-yellow-500/30"></div>
<div className="h-3 w-3 rounded-full bg-green-500/20 border border-green-500/30"></div>
</div>
<div className="text-xs font-mono text-white/30">
              ShellTranslate Pro — Negotiation Mode
            </div>
<div className="w-12"></div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 h-[500px] lg:h-[600px]">

<div className="hidden lg:block lg:col-span-3 border-r border-white/5 bg-black/20 p-4">
<div className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-4">
                Активные чаты
              </div>
<div className="space-y-2">
<div className="p-3 rounded-lg bg-white/5 border border-white/5 cursor-pointer">
<div className="flex items-center justify-between mb-1">
<span className="text-sm font-medium text-white">
                      Shenzhen Electronics
                    </span>
<span className="h-2 w-2 rounded-full bg-blue-500"></span>
</div>
<div className="text-xs text-white/50 truncate">
                    Manager Wang: Цена фиксирована...
                  </div>
</div>
<div className="p-3 rounded-lg hover:bg-white/5 border border-transparent hover:border-white/5 cursor-pointer transition-colors">
<div className="flex items-center justify-between mb-1">
<span className="text-sm font-medium text-white/80">
                      Guangzhou Logistics
                    </span>
</div>
<div className="text-xs text-white/40 truncate">
                    Инвойс отправлен на почту
                  </div>
</div>
</div>
</div>

<div className="lg:col-span-6 flex flex-col bg-[#050505] relative">

<div className="flex-1 p-6 space-y-6 overflow-y-auto">

<div className="flex gap-4">
<div className="h-10 w-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shrink-0">
<span className="text-xs font-bold">W</span>
</div>
<div className="flex flex-col gap-2 max-w-[85%]">
<div className="p-4 rounded-2xl rounded-tl-none bg-white/10 border border-white/5 text-sm text-white leading-relaxed">
<div className="flex items-center justify-between mb-2">
<span className="text-xs text-white/40">
                          Оригинал (Китайский)
                        </span>
<span className="iconify text-white/30" data-icon="lucide:copy"></span>
</div>
<p className="mb-2 font-serif text-white/90">
                        这个价格已经是最低了，如果你还要降价，我们很难保证交期。
                      </p>
<div className="h-px bg-white/10 my-2"></div>
<p className="text-blue-200">
                        "Эта цена уже минимальная. Если вы хотите еще дешевле,
                        нам будет сложно гарантировать сроки поставки."
                      </p>
</div>

<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/20 w-fit">
<span className="iconify text-yellow-500 h-3 w-3" data-icon="lucide:alert-triangle"></span>
<span className="text-xs text-yellow-200 font-medium">
                        Обнаружена скрытая угроза (Сроки)
                      </span>
</div>
</div>
</div>

<div className="flex gap-4 flex-row-reverse">
<div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
<span className="iconify h-5 w-5" data-icon="lucide:user"></span>
</div>
<div className="flex flex-col gap-2 max-w-[85%] w-full">
<div className="p-4 rounded-2xl rounded-tr-none bg-blue-600/10 border border-blue-500/30">
<div className="text-xs text-blue-300 mb-2">
                        Черновик ответа (Тон: Уверенный)
                      </div>
<textarea className="w-full bg-transparent text-sm text-white resize-none outline-none placeholder:text-white/20 h-20" placeholder="Введите ответ...">
Мы планируем долгосрочное сотрудничество. Давайте обсудим объем заказа...</textarea>
</div>
<div className="flex gap-2">
<button className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-white transition-colors">
                        Смягчить тон
                      </button>
<button className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-white transition-colors">
                        Добавить аргумент (Объем)
                      </button>
</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-3 border-l border-white/5 bg-black/20 p-4 flex flex-col">
<div className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-4">
                Анализ ситуации
              </div>

<div className="mb-6">
<div className="flex justify-between text-xs mb-2">
<span className="text-white/60">Давление</span>
<span className="text-red-400">Высокое (78%)</span>
</div>
<div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-orange-500 to-red-500 w-[78%]"></div>
</div>
</div>

<div className="glass-panel rounded-xl p-4 mb-4">
<div className="flex items-center gap-2 mb-2 text-blue-400">
<span className="iconify" data-icon="lucide:sparkles"></span>
<span className="text-xs font-semibold">Совет ИИ</span>
</div>
<p className="text-xs text-white/70 leading-relaxed">
                  Партнер использует тактику "Жертвы" (связка цена/сроки). Не
                  соглашайтесь сразу. Спросите, влияет ли цена на качество
                  компонентов.
                </p>
</div>

<div className="mt-auto space-y-2">
<button className="w-full flex items-center justify-center gap-2 py-2 rounded-lg bg-white text-black text-xs font-semibold hover:bg-gray-200 transition-colors">
<span className="iconify" data-icon="lucide:wand-2"></span>
                  Сгенерировать ответ
                </button>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-white/5 bg-white/[0.01] py-12 mb-24">
<div className="mx-auto max-w-7xl px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
<div className="p-6">
<div className="h-12 w-12 rounded-xl bg-blue-500/10 flex items-center justify-center mx-auto mb-4">
<span className="iconify h-6 w-6 text-blue-400" data-icon="lucide:brain"></span>
</div>
<h4 className="text-white font-medium mb-2">
                Нейросеть с контекстом
              </h4>
<p className="text-sm text-white/50">
                Мы не переводим слова отдельно. ИИ анализирует смысл
                предложения, чтобы избежать неловких ситуаций.
              </p>
</div>
<div className="p-6">
<div className="h-12 w-12 rounded-xl bg-green-500/10 flex items-center justify-center mx-auto mb-4">
<span className="iconify h-6 w-6 text-green-400" data-icon="lucide:infinity"></span>
</div>
<h4 className="text-white font-medium mb-2">Без ограничений</h4>
<p className="text-sm text-white/50">
                Никаких лимитов на количество символов или переводов.
                Пользуйтесь сервисом столько, сколько нужно.
              </p>
</div>
<div className="p-6">
<div className="h-12 w-12 rounded-xl bg-purple-500/10 flex items-center justify-center mx-auto mb-4">
<span className="iconify h-6 w-6 text-purple-400" data-icon="lucide:shield"></span>
</div>
<h4 className="text-white font-medium mb-2">Приватно и безопасно</h4>
<p className="text-sm text-white/50">
                Мы не храним историю ваших переписок и документов. Всё удаляется
                сразу после обработки.
              </p>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-6 mb-32" id="how-it-works">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1 relative">

<div className="absolute -top-10 -left-10 w-32 h-32 bg-purple-500/20 rounded-full blur-[50px]"></div>
<div className="relative glass-panel rounded-2xl p-6 border border-white/10">
<div className="flex items-center gap-3 mb-4">
<span className="h-3 w-3 rounded-full bg-red-500"></span>
<span className="h-3 w-3 rounded-full bg-yellow-500"></span>
<span className="h-3 w-3 rounded-full bg-green-500"></span>
</div>
<div className="space-y-4">

<div className="relative group">
<label className="text-[10px] uppercase tracking-wider text-white/40 mb-1 block">
                    Ваш ввод (Русский)
                  </label>
<div className="text-lg text-white font-medium border-b border-white/10 pb-2 group-hover:border-blue-500/50 transition-colors">
                    Дайте скидку, мы будем брать много.
                  </div>
</div>

<div className="flex justify-center">
<span className="iconify text-white/20 h-6 w-6" data-icon="lucide:arrow-down"></span>
</div>

<div className="bg-blue-500/5 rounded-xl p-4 border border-blue-500/10 relative overflow-hidden">
<div className="absolute top-0 left-0 w-1 h-full bg-blue-500"></div>
<div className="flex justify-between items-start mb-2">
<span className="text-[10px] uppercase tracking-wider text-blue-300">
                      Бизнес-перевод (Китайский)
                    </span>
<span className="text-[10px] bg-blue-500 text-white px-2 py-0.5 rounded-full">
                      Официально
                    </span>
</div>
<p className="text-xl text-white font-serif mb-2">
                    考虑到我们未来的长期合作和大量采购计划，希望能在这个价格上给予优惠。
                  </p>
<p className="text-xs text-white/40 font-mono">
                    Kǎolǜ dào wǒmen wèilái de chángqī hézuò...
                  </p>
<div className="mt-3 text-xs text-white/60 italic border-t border-white/5 pt-2">
<span className="text-blue-400 font-semibold">
                      Обратный перевод:
                    </span>
                    "Учитывая наше будущее долгосрочное сотрудничество и планы
                    больших закупок, надеемся на уступку в цене."
                  </div>
</div>
</div>
</div>
</div>
<div className="order-1 lg:order-2">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-medium mb-6">
<span className="iconify" data-icon="lucide:wand-2"></span>
              Интеллектуальная обработка
            </div>
<h2 className="text-4xl sm:text-5xl font-semibold text-white tracking-tight mb-6">
              Вы звучите как
              <br/>
              профессионал
            </h2>
<p className="text-lg text-white/50 mb-8 leading-relaxed">
              Не нужно быть китаистом, чтобы вести переговоры грамотно. Наш ИИ
              трансформирует простые фразы в конструкции, принятые в
              бизнес-этикете Китая (Guanxi).
            </p>

<div className="mb-8">
<h4 className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-4">
                3 варианта тональности
              </h4>
<p className="text-sm text-white/40 mb-4">
                Один текст — три разных перевода в зависимости от ситуации.
              </p>
<div className="grid grid-cols-3 gap-2">
<div className="p-3 rounded-lg bg-green-500/10 border border-green-500/20 text-center">
<span className="text-green-400 text-sm font-medium">Мягко</span>
<p className="text-[10px] text-white/40 mt-1">
                    Для сохранения отношений
                  </p>
</div>
<div className="p-3 rounded-lg bg-blue-500/20 border border-blue-500/30 text-center">
<span className="text-blue-400 text-sm font-medium">
                    Официально
                  </span>
<p className="text-[10px] text-white/40 mt-1">Для документов</p>
</div>
<div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-center">
<span className="text-red-400 text-sm font-medium">Жёстко</span>
<p className="text-[10px] text-white/40 mt-1">
                    Когда нужно надавить
                  </p>
</div>
</div>
</div>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<div className="mt-1 h-5 w-5 rounded-full bg-purple-500/20 flex items-center justify-center shrink-0">
<span className="iconify text-purple-400 h-3 w-3" data-icon="lucide:check"></span>
</div>
<div>
<span className="text-white/80">Обратный перевод</span>
<p className="text-xs text-white/40">
                    Показываем, что именно написано в китайском тексте
                  </p>
</div>
</li>
<li className="flex items-start gap-3">
<div className="mt-1 h-5 w-5 rounded-full bg-purple-500/20 flex items-center justify-center shrink-0">
<span className="iconify text-purple-400 h-3 w-3" data-icon="lucide:check"></span>
</div>
<div>
<span className="text-white/80">Пиньинь (Pinyin)</span>
<p className="text-xs text-white/40">
                    Транскрипция под каждым иероглифом
                  </p>
</div>
</li>
<li className="flex items-start gap-3">
<div className="mt-1 h-5 w-5 rounded-full bg-purple-500/20 flex items-center justify-center shrink-0">
<span className="iconify text-purple-400 h-3 w-3" data-icon="lucide:check"></span>
</div>
<div>
<span className="text-white/80">Бизнес-корректор</span>
<p className="text-xs text-white/40">
                    Исправим ошибки и перепишем в деловом стиле
                  </p>
</div>
</li>
</ul>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-6 mb-32">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-300 text-xs font-medium mb-6">
<span className="iconify" data-icon="lucide:smartphone"></span>
              Мобильная интеграция
            </div>
<h2 className="text-4xl sm:text-5xl font-semibold text-white tracking-tight mb-6">
              Перевод прямо в WeChat
            </h2>
<p className="text-lg text-white/50 mb-8 leading-relaxed">
              Используйте нашу клавиатуру или оверлей для Android, чтобы
              переводить сообщения, не выходя из мессенджера. Работает с
              голосовыми сообщениями.
            </p>
<div className="grid grid-cols-2 gap-4">
<div className="p-4 rounded-xl bg-[#0A0A0A] border border-white/10">
<span className="iconify h-8 w-8 text-white/80 mb-3" data-icon="lucide:mic"></span>
<h4 className="text-white font-medium text-sm">Голосовой ввод</h4>
<p className="text-xs text-white/40 mt-1">
                  Распознавание китайской речи с учетом диалектов.
                </p>
</div>
<div className="p-4 rounded-xl bg-[#0A0A0A] border border-white/10">
<span className="iconify h-8 w-8 text-white/80 mb-3" data-icon="lucide:image"></span>
<h4 className="text-white font-medium text-sm">Фото-перевод</h4>
<p className="text-xs text-white/40 mt-1">
                  Мгновенный перевод инвойсов и накладных.
                </p>
</div>
</div>
</div>
<div className="relative flex justify-center">

<div className="relative w-[300px] h-[600px] rounded-[3rem] border-8 border-[#1a1a1a] bg-[#020202] overflow-hidden shadow-2xl">

<div className="absolute top-0 left-0 right-0 h-8 bg-black z-20 flex justify-center">
<div className="w-32 h-6 bg-[#1a1a1a] rounded-b-xl"></div>
</div>

<div className="pt-12 px-4 pb-4 h-full bg-[#111] flex flex-col">
<div className="flex items-center gap-3 mb-6 border-b border-white/5 pb-2">
<span className="iconify text-white" data-icon="lucide:arrow-left"></span>
<span className="text-white font-medium">Supplier Zhang</span>
</div>

<div className="flex-1 space-y-4">
<div className="flex gap-2">
<div className="h-8 w-8 rounded bg-gray-600 shrink-0"></div>
<div className="relative">
<div className="bg-white text-black p-3 rounded-xl rounded-tl-none text-sm max-w-[200px]">
                        请问什么时候付款？
                      </div>

<div className="absolute -bottom-8 left-0 bg-black/90 text-white text-[10px] p-2 rounded-lg border border-green-500/50 w-[220px] shadow-lg backdrop-blur z-10 animate-pulse">
<span className="text-green-400 font-bold">Перевод:</span>
                        "Подскажите, когда будет оплата?"
                      </div>
</div>
</div>
</div>

<div className="mt-auto bg-[#1a1a1a] rounded-t-xl p-2 -mx-4 -mb-4 border-t border-white/10">
<div className="flex gap-2 mb-2 px-2 overflow-x-auto">
<span className="bg-blue-600 text-white text-[10px] px-2 py-1 rounded">
                      Завтра
                    </span>
<span className="bg-white/10 text-white text-[10px] px-2 py-1 rounded">
                      Жду инвойс
                    </span>
<span className="bg-white/10 text-white text-[10px] px-2 py-1 rounded">
                      Проблемы с банком
                    </span>
</div>
<div className="h-32 bg-black/50 rounded-lg flex items-center justify-center text-white/20 text-xs">
                    ShellTranslate Keyboard
                  </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-6 mb-32" id="features">
<div className="mb-12">
<h2 className="text-3xl font-medium tracking-tight text-white mb-2">
            Интеллект на приёме
          </h2>
<p className="text-white/50">
            Понимайте, что китайцы имеют в виду на самом деле. Система выявляет
            скрытые намерения и маркеры манипуляций.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="lg:col-span-2 group rounded-3xl bg-gradient-to-b from-white/[0.08] to-transparent border border-white/10 p-8 hover:border-white/20 transition-all">
<div className="flex items-center gap-3 mb-6">
<div className="h-10 w-10 rounded-lg bg-emerald-500/10 flex items-center justify-center">
<span className="iconify h-5 w-5 text-emerald-400" data-icon="lucide:microscope"></span>
</div>
<h3 className="text-xl font-semibold text-white">
                Рентген сообщения
              </h3>
</div>
<div className="relative bg-black/40 rounded-xl p-4 border border-white/5 mb-4">
<p className="text-sm text-white/60 mb-2 italic">
                "Мы рассмотрим ваше предложение и вернемся позже..."
              </p>
<div className="flex items-start gap-2 bg-emerald-500/10 p-3 rounded-lg border border-emerald-500/20">
<span className="iconify h-4 w-4 text-emerald-400 mt-0.5 shrink-0" data-icon="lucide:info"></span>
<p className="text-xs text-emerald-200">
<span className="font-bold">Суть:</span>
                  Вежливый отказ. Партнер тянет время. Рекомендуется предложить
                  альтернативные условия через 2 дня.
                </p>
</div>
</div>
</div>

<div className="group rounded-3xl bg-[#080808] border border-white/10 p-8 hover:border-white/20 transition-all">
<div className="h-10 w-10 rounded-lg bg-red-500/10 flex items-center justify-center mb-6">
<span className="iconify h-5 w-5 text-red-400" data-icon="lucide:siren"></span>
</div>
<h3 className="text-lg font-semibold text-white mb-2">Оценка рисков</h3>
<p className="text-sm text-white/50 mb-6">
              Светофор опасности в переписке.
            </p>
<div className="space-y-3">
<div className="flex items-center gap-3 text-xs text-white/80">
<span className="h-2 w-2 rounded-full bg-green-500 shadow-[0_0_5px_rgba(34,197,94,0.5)]"></span>
                Безопасно / Конструктив
              </div>
<div className="flex items-center gap-3 text-xs text-white/80">
<span className="h-2 w-2 rounded-full bg-yellow-500 shadow-[0_0_5px_rgba(234,179,8,0.5)]"></span>
                Уклонение от ответа
              </div>
<div className="flex items-center gap-3 text-xs text-white/80">
<span className="h-2 w-2 rounded-full bg-red-500 shadow-[0_0_5px_rgba(239,68,68,0.5)]"></span>
                Давление / Манипуляция
              </div>
</div>
</div>

<div className="group rounded-3xl bg-[#080808] border border-white/10 p-8 hover:border-white/20 transition-all">
<div className="h-10 w-10 rounded-lg bg-blue-500/10 flex items-center justify-center mb-6">
<span className="iconify h-5 w-5 text-blue-400" data-icon="lucide:sliders-horizontal"></span>
</div>
<h3 className="text-lg font-semibold text-white mb-2">
              Настройка тона
            </h3>
<div className="space-y-3 mt-4">
<div className="flex items-center justify-between px-3 py-2 rounded-lg bg-white/5 border border-white/5">
<span className="text-xs text-white/70">Дружеский</span>
<span className="iconify text-green-400" data-icon="lucide:smile"></span>
</div>
<div className="flex items-center justify-between px-3 py-2 rounded-lg bg-blue-500/20 border border-blue-500/30">
<span className="text-xs text-white font-medium">Официальный</span>
<span className="iconify text-blue-400" data-icon="lucide:briefcase"></span>
</div>
<div className="flex items-center justify-between px-3 py-2 rounded-lg bg-white/5 border border-white/5">
<span className="text-xs text-white/70">Жесткий</span>
<span className="iconify text-red-400" data-icon="lucide:gavel"></span>
</div>
</div>
</div>
</div>

<div className="mt-6 p-6 rounded-2xl bg-[#080808] border border-white/10">
<div className="flex items-center gap-3 mb-4">
<div className="h-10 w-10 rounded-lg bg-indigo-500/10 flex items-center justify-center">
<span className="iconify h-5 w-5 text-indigo-400" data-icon="lucide:message-square-reply"></span>
</div>
<h3 className="text-lg font-semibold text-white">Готовые ответы</h3>
</div>
<p className="text-sm text-white/50 mb-4">
            3 варианта реакции одним кликом.
          </p>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1.5 rounded-lg bg-green-500/10 border border-green-500/20 text-xs text-green-300">
              Согласиться (Офиц.)
            </span>
<span className="px-3 py-1.5 rounded-lg bg-yellow-500/10 border border-yellow-500/20 text-xs text-yellow-300">
              Торговаться (Мягко)
            </span>
<span className="px-3 py-1.5 rounded-lg bg-red-500/10 border border-red-500/20 text-xs text-red-300">
              Отказать (Вежливо)
            </span>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-6 mb-32">
<div className="mb-12">
<h2 className="text-3xl font-medium tracking-tight text-white mb-2">
            Спец. инструменты
          </h2>
<p className="text-white/50">
            Дополнительные возможности для эффективных переговоров.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">

<div className="group rounded-2xl bg-gradient-to-b from-white/[0.08] to-transparent border border-white/10 p-8 hover:border-white/20 transition-all">
<div className="flex items-center gap-3 mb-4">
<div className="h-10 w-10 rounded-lg bg-orange-500/10 flex items-center justify-center">
<span className="iconify h-5 w-5 text-orange-400" data-icon="lucide:percent"></span>
</div>
<h3 className="text-xl font-semibold text-white">
                Помощник по скидкам
              </h3>
</div>
<p className="text-sm text-white/60 mb-4">
              Скрипты для торга. Аргументы про объем и долгосрочность. Работа с
              возражениями.
            </p>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-xs text-white/50">
<span className="iconify text-orange-400 h-3 w-3" data-icon="lucide:check"></span>
                Готовые фразы для просьбы скидки
              </li>
<li className="flex items-center gap-2 text-xs text-white/50">
<span className="iconify text-orange-400 h-3 w-3" data-icon="lucide:check"></span>
                Ответы на "Это наша лучшая цена"
              </li>
</ul>
</div>

<div className="group rounded-2xl bg-gradient-to-b from-white/[0.08] to-transparent border border-white/10 p-8 hover:border-white/20 transition-all">
<div className="flex items-center gap-3 mb-4">
<div className="h-10 w-10 rounded-lg bg-pink-500/10 flex items-center justify-center">
<span className="iconify h-5 w-5 text-pink-400" data-icon="lucide:heart-handshake"></span>
</div>
<h3 className="text-xl font-semibold text-white">
                Культурная адаптация
              </h3>
</div>
<p className="text-sm text-white/60 mb-4">
              Правильные обращения (贵司, 贵方). Учет праздников (CNY, 11.11) и
              акцент на Guanxi.
            </p>
<div className="flex flex-wrap gap-2">
<span className="px-2 py-1 rounded bg-pink-500/10 text-[10px] text-pink-300">
                贵司
              </span>
<span className="px-2 py-1 rounded bg-pink-500/10 text-[10px] text-pink-300">
                Guanxi
              </span>
<span className="px-2 py-1 rounded bg-pink-500/10 text-[10px] text-pink-300">
                敬语
              </span>
</div>
</div>
</div>

<div className="p-6 rounded-2xl bg-[#080808] border border-white/10">
<h4 className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-4">
            Типы документов
          </h4>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5">
<span className="iconify h-5 w-5 text-blue-400" data-icon="lucide:message-circle"></span>
<span className="text-sm text-white/80">Чат / WeChat</span>
</div>
<div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5">
<span className="iconify h-5 w-5 text-green-400" data-icon="lucide:file-text"></span>
<span className="text-sm text-white/80">Договор</span>
</div>
<div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5">
<span className="iconify h-5 w-5 text-yellow-400" data-icon="lucide:receipt"></span>
<span className="text-sm text-white/80">Инвойс / PI</span>
</div>
<div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5">
<span className="iconify h-5 w-5 text-purple-400" data-icon="lucide:mail"></span>
<span className="text-sm text-white/80">Email письмо</span>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-6 mb-32">
<div className="p-8 rounded-2xl bg-gradient-to-r from-emerald-500/5 to-blue-500/5 border border-white/10">
<div className="flex items-center gap-3 mb-6">
<div className="h-10 w-10 rounded-lg bg-emerald-500/10 flex items-center justify-center">
<span className="iconify h-5 w-5 text-emerald-400" data-icon="lucide:shield-check"></span>
</div>
<h3 className="text-2xl font-semibold text-white">Гарантии перевода</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="flex items-start gap-3">
<span className="iconify text-emerald-400 h-5 w-5 mt-0.5 shrink-0" data-icon="lucide:check-circle-2"></span>
<span className="text-white/80">Не выдумываем цены, если их нет</span>
</div>
<div className="flex items-start gap-3">
<span className="iconify text-emerald-400 h-5 w-5 mt-0.5 shrink-0" data-icon="lucide:check-circle-2"></span>
<span className="text-white/80">
                Артикулы и номера счетов без изменений
              </span>
</div>
<div className="flex items-start gap-3">
<span className="iconify text-emerald-400 h-5 w-5 mt-0.5 shrink-0" data-icon="lucide:check-circle-2"></span>
<span className="text-white/80">
                Сохраняем списки и форматирование
              </span>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-6 mb-32">
<div className="mb-12">
<h2 className="text-3xl font-medium tracking-tight text-white mb-2">
            Идеально подходит для
          </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="p-6 rounded-2xl bg-[#080808] border border-white/10 hover:border-white/20 transition-all">
<div className="h-12 w-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4">
<span className="iconify h-6 w-6 text-blue-400" data-icon="lucide:shopping-cart"></span>
</div>
<h3 className="text-lg font-semibold text-white mb-2">Закупщиков</h3>
<p className="text-sm text-white/50">Поиск поставщиков и торг</p>
</div>
<div className="p-6 rounded-2xl bg-[#080808] border border-white/10 hover:border-white/20 transition-all">
<div className="h-12 w-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-4">
<span className="iconify h-6 w-6 text-purple-400" data-icon="lucide:building-2"></span>
</div>
<h3 className="text-lg font-semibold text-white mb-2">
              Владельцев бизнеса
            </h3>
<p className="text-sm text-white/50">
              Контроль и стратегические переговоры
            </p>
</div>
<div className="p-6 rounded-2xl bg-[#080808] border border-white/10 hover:border-white/20 transition-all">
<div className="h-12 w-12 rounded-xl bg-green-500/10 flex items-center justify-center mb-4">
<span className="iconify h-6 w-6 text-green-400" data-icon="lucide:truck"></span>
</div>
<h3 className="text-lg font-semibold text-white mb-2">
              Менеджеров ВЭД
            </h3>
<p className="text-sm text-white/50">Логистика и документация</p>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-6 mb-32">
<h2 className="text-2xl font-medium text-center text-white mb-10">
          Почему обычного переводчика недостаточно
        </h2>
<div className="overflow-hidden rounded-2xl border border-white/10 bg-[#080808]">
<div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">

<div className="p-8">
<div className="text-sm font-medium text-white/50 mb-4 uppercase tracking-wider">
                Обычные переводчики
              </div>
<ul className="space-y-4">
<li className="flex gap-3 text-white/60">
<span className="iconify text-red-400 h-5 w-5 shrink-0" data-icon="lucide:x-circle"></span>
                  Буквальный перевод слов
                </li>
<li className="flex gap-3 text-white/60">
<span className="iconify text-red-400 h-5 w-5 shrink-0" data-icon="lucide:x-circle"></span>
                  Не понимают контекст торга
                </li>
<li className="flex gap-3 text-white/60">
<span className="iconify text-red-400 h-5 w-5 shrink-0" data-icon="lucide:x-circle"></span>
                  Игнорируют этикет (Guanxi)
                </li>
</ul>
</div>

<div className="p-8">
<div className="text-sm font-medium text-white/50 mb-4 uppercase tracking-wider">
                Живой переводчик
              </div>
<ul className="space-y-4">
<li className="flex gap-3 text-white/80">
<span className="iconify text-yellow-400 h-5 w-5 shrink-0" data-icon="lucide:check-circle"></span>
                  Понимает контекст
                </li>
<li className="flex gap-3 text-white/80">
<span className="iconify text-red-400 h-5 w-5 shrink-0" data-icon="lucide:clock"></span>
                  Долго отвечает (сон, выходные)
                </li>
<li className="flex gap-3 text-white/80">
<span className="iconify text-red-400 h-5 w-5 shrink-0" data-icon="lucide:banknote"></span>
                  Дорого ($100+/день)
                </li>
</ul>
</div>

<div className="p-8 bg-blue-500/5 relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-20">
<span className="iconify h-24 w-24 text-blue-500" data-icon="lucide:sparkles"></span>
</div>
<div className="text-sm font-bold text-blue-400 mb-4 uppercase tracking-wider flex items-center gap-2">
                ShellTranslate
                <span className="px-2 py-0.5 rounded-full bg-blue-500 text-white text-[10px]">
                  PRO
                </span>
</div>
<ul className="space-y-4 relative z-10">
<li className="flex gap-3 text-white">
<span className="iconify text-blue-400 h-5 w-5 shrink-0" data-icon="lucide:check-circle-2"></span>
<span className="font-medium">Мгновенно 24/7</span>
</li>
<li className="flex gap-3 text-white">
<span className="iconify text-blue-400 h-5 w-5 shrink-0" data-icon="lucide:check-circle-2"></span>
<span className="font-medium">Бизнес-логика и тактика</span>
</li>
<li className="flex gap-3 text-white">
<span className="iconify text-blue-400 h-5 w-5 shrink-0" data-icon="lucide:check-circle-2"></span>
<span className="font-medium">Анализ скрытых рисков</span>
</li>
<li className="flex gap-3 text-white">
<span className="iconify text-blue-400 h-5 w-5 shrink-0" data-icon="lucide:check-circle-2"></span>
<span className="font-medium">Бесплатный старт</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="relative py-20 border-y border-white/5 bg-[#030303]" id="api">
<div className="absolute inset-0 grid-bg opacity-10"></div>
<div className="mx-auto max-w-7xl px-6 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<div>
<h2 className="text-3xl font-medium tracking-tight text-white mb-4">
                API для вашего бизнеса
              </h2>
<p className="text-white/50 mb-8">
                Интегрируйте ShellTranslate в свою ERP, CRM или маркетплейс.
                Автоматический перевод переписки с поставщиками, карточек
                товаров и инвойсов.
              </p>
<div className="flex gap-4">
<button className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-sm font-medium transition-colors border border-white/10">
                  Документация
                </button>
<button className="px-4 py-2 rounded-lg text-white/60 hover:text-white text-sm font-medium transition-colors">
                  Получить ключ
                </button>
</div>
</div>
<div className="rounded-xl bg-[#0e0e0e] border border-white/10 p-4 shadow-2xl overflow-hidden font-mono text-xs sm:text-sm">
<div className="flex items-center gap-2 mb-4 text-white/30 border-b border-white/5 pb-2">
<div className="h-2 w-2 rounded-full bg-red-500"></div>
<div className="h-2 w-2 rounded-full bg-yellow-500"></div>
<div className="h-2 w-2 rounded-full bg-green-500"></div>
<span className="ml-2">POST /v1/translate/analyze</span>
</div>
<pre className="text-blue-300">{
  <span className="text-purple-400">"text"</span>: <span className="text-green-300">"这个价格太贵了"</span>,
  <span className="text-purple-400">"context"</span>: <span className="text-green-300">"negotiation"</span>,
  <span className="text-purple-400">"target_tone"</span>: <span className="text-green-300">"polite"</span>
}
</pre>
<div className="my-2 text-white/20">// Response</div>
<pre className="text-blue-300">{
  <span className="text-purple-400">"translated"</span>: <span className="text-green-300">"Цена кажется высокой..."</span>,
  <span className="text-purple-400">"subtext"</span>: {
     <span className="text-purple-400">"intent"</span>: <span className="text-green-300">"resistance"</span>,
     <span className="text-purple-400">"risk_level"</span>: <span className="text-orange-400">"medium"</span>
  }
}
</pre>
</div>
</div>
</div>
</section>

<section className="py-24 mx-auto max-w-4xl px-6 text-center">
<h2 className="text-4xl sm:text-5xl font-semibold tracking-tighter text-white mb-6">
          Готовы к переговорам нового уровня?
        </h2>
<p className="text-lg text-white/50 mb-10 max-w-2xl mx-auto">
          Попробуйте бесплатно. Без привязки карты. Начните понимать китайских
          партнеров с полуслова уже сегодня.
        </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<button className="h-14 px-8 rounded-full bg-white text-black font-semibold text-lg hover:bg-neutral-200 transition-colors shadow-[0_0_30px_-5px_rgba(255,255,255,0.3)]">
            Запустить ShellTranslate
          </button>
</div>
</section>
</main>

<footer className="relative z-10 border-t border-white/10 bg-[#050505] pt-20 pb-10" id="contacts">
<div className="mx-auto max-w-7xl px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div className="space-y-6">
<a className="flex items-center gap-2" href="#">
<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 ring-1 ring-white/15">
<span className="iconify h-4 w-4 text-white" data-icon="lucide:languages"></span>
</div>
<span className="text-lg font-bold tracking-tight text-white" style={{fontFamily: '\'Bricolage Grotesque\', sans-serif'}}>
                ShellTranslate
              </span>
</a>
<p className="text-sm text-white/40 font-light leading-relaxed">
              Часть экосистемы
              <a className="text-white/70 hover:text-white underline decoration-white/20 underline-offset-4 transition-colors" href="https://shellproof.net" target="_blank">
                ShellProof Group
              </a>
              .
              <br/>
              Безопасность и технологии для международного бизнеса.
            </p>
<div className="flex gap-3">
<a className="h-8 w-8 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:bg-white/10 hover:text-white transition-colors" href="#">
<span className="iconify" data-icon="simple-icons:telegram"></span>
</a>
<a className="h-8 w-8 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:bg-white/10 hover:text-white transition-colors" href="#">
<span className="iconify" data-icon="simple-icons:wechat"></span>
</a>
<a className="h-8 w-8 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:bg-white/10 hover:text-white transition-colors" href="#">
<span className="iconify" data-icon="lucide:youtube"></span>
</a>
</div>
</div>

<div>
<h4 className="text-sm font-semibold text-white mb-6">Продукты</h4>
<ul className="space-y-4">
<li>
<a className="text-sm text-white/50 hover:text-white transition-colors" href="#">
                  Веб-версия
                </a>
</li>
<li>
<a className="text-sm text-white/50 hover:text-white transition-colors flex items-center gap-2" href="#">
                  Расширение Chrome
                  <span className="text-[10px] bg-white/10 px-1.5 py-0.5 rounded text-white/70">
                    Beta
                  </span>
</a>
</li>
<li>
<a className="text-sm text-white/50 hover:text-white transition-colors" href="#">
                  Android Клавиатура
                </a>
</li>
<li>
<a className="text-sm text-white/50 hover:text-white transition-colors" href="#api">
                  Business API
                </a>
</li>
</ul>
</div>

<div>
<h4 className="text-sm font-semibold text-white mb-6">Ресурсы</h4>
<ul className="space-y-4">
<li>
<a className="text-sm text-white/50 hover:text-white transition-colors" href="#">
                  Гайд по Guanxi
                </a>
</li>
<li>
<a className="text-sm text-white/50 hover:text-white transition-colors" href="#">
                  Словарь ВЭД
                </a>
</li>
<li>
<a className="text-sm text-white/50 hover:text-white transition-colors" href="#">
                  Шаблоны контрактов
                </a>
</li>
<li>
<a className="text-sm text-white/50 hover:text-white transition-colors" href="#">
                  Блог
                </a>
</li>
</ul>
</div>

<div>
<h4 className="text-sm font-semibold text-white mb-6">Контакты</h4>
<div className="space-y-4">
<a className="flex items-center gap-3 text-sm text-white/60 hover:text-white transition-colors group" href="https://t.me/shellproof" target="_blank">
<span className="iconify h-4 w-4" data-icon="lucide:send"></span>
                @shellproof
              </a>
<div className="flex items-center gap-3 text-sm text-white/60">
<span className="iconify h-4 w-4" data-icon="lucide:message-circle"></span>
                WeChat: +8613250311009
              </div>
<a className="flex items-center gap-3 text-sm text-white/60 hover:text-white transition-colors group" href="mailto:info@shelltranslate.digital">
<span className="iconify h-4 w-4" data-icon="lucide:mail"></span>
                info@shelltranslate.digital
              </a>
<div className="text-xs text-white/30 pt-4">
                Hong Kong, Kowloon,
                <br/>
                Science Museum Road 1
              </div>
</div>
</div>
</div>

<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-white/30 font-light">
            © 2025 HK SHELLPROOF SERVICE LIMITED.
            <br className="sm:hidden"/>
            All rights reserved.
          </p>
<div className="flex gap-6">
<a className="text-xs text-white/40 hover:text-white transition-colors" href="#">
              Privacy
            </a>
<a className="text-xs text-white/40 hover:text-white transition-colors" href="#">
              Terms
            </a>
<a className="text-xs text-white/40 hover:text-white transition-colors" href="#">
              Cookies
            </a>
</div>
</div>
</div>
</footer>


    </>
  );
}
