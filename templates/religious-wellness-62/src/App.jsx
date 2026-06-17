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



        document.addEventListener("DOMContentLoaded", () => {
            // General reveal animations
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.15
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.remove('opacity-0', 'translate-y-8');
                        entry.target.classList.add('opacity-100', 'translate-y-0');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.reveal').forEach((el) => {
                el.classList.add('opacity-0', 'translate-y-8', 'transition-all', 'duration-[800ms]', 'ease-out');
                observer.observe(el);
            });

            // Sticky mobile CTA logic
            const mainCta = document.getElementById('main-cta');
            const stickyCta = document.getElementById('sticky-cta');

            if (mainCta && stickyCta) {
                const stickyObserver = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        // If the main CTA in the hero section is out of the viewport, show the sticky one
                        if (!entry.isIntersecting && window.scrollY > 50) {
                            stickyCta.classList.remove('translate-y-full', 'opacity-0', 'pointer-events-none');
                            stickyCta.classList.add('translate-y-0', 'opacity-100', 'pointer-events-auto');
                        } else {
                            // If user scrolls back up and sees the main CTA, hide the sticky one
                            stickyCta.classList.add('translate-y-full', 'opacity-0', 'pointer-events-none');
                            stickyCta.classList.remove('translate-y-0', 'opacity-100', 'pointer-events-auto');
                        }
                    });
                }, { threshold: 0 });

                stickyObserver.observe(mainCta);
            }
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
      

<div className="bg-grain"></div>

<header className="absolute top-0 w-full pt-8 pb-4 z-20 flex justify-center">
<span className="font-['Unbounded'] font-semibold text-xs tracking-tighter text-[#C9963A] opacity-80">TAZKIYA</span>
</header>

<section className="min-h-screen flex flex-col overflow-hidden pt-20 pr-6 pb-16 pl-6 relative items-center justify-center">

<div className="relative w-64 h-64 md:w-80 md:h-80 mb-12 flex items-center justify-center reveal transition-all duration-[800ms] ease-out">

<div className="glow-bg"></div>

<div className="animate-float relative z-10 w-full h-full flex items-center justify-center">


<img alt="" className="z-20 opacity-90 w-full h-full object-cover relative drop-shadow-2xl" onerror="this.style.display='none'" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7a4f40d9-dc8f-4bf6-b68b-8ec8260838c8_1600w.png"/>
</div>
</div>
<div className="text-center max-w-2xl mx-auto z-10 reveal transition-all duration-[800ms] ease-out">
<h1 className="font-['Unbounded'] font-semibold text-3xl md:text-5xl lg:text-6xl tracking-tighter text-[#F0EDE8] leading-[1.1] mb-6">
                Твоё сердце заслуживает свободы
            </h1>
<p className="text-[#7A7268] text-base md:text-lg mb-10 max-w-sm mx-auto leading-relaxed">
                Tazkiya — путь очищения для тех, кто устал бороться в одиночку
            </p>
<a className="group relative inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 bg-[#C9963A] text-[#0D0B08] font-['Unbounded'] font-semibold text-sm rounded-xl overflow-hidden transition-transform duration-300 hover:scale-[1.02] active:scale-95 shadow-[0_0_30px_rgba(201,150,58,0.2)]" href="https://t.me/your_waitlist_bot" id="main-cta">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-shimmer"></div>
<span className="relative flex items-center gap-2">
                    Я хочу очистить своё сердце 
                    <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</span>
</a>
</div>

<div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-30 animate-bounce">
<iconify-icon className="text-2xl text-[#C9963A]" icon="solar:mouse-minimalistic-linear"></iconify-icon>
</div>
</section>

<div className="w-full flex justify-center opacity-30 reveal opacity-0 translate-y-8 transition-all duration-[800ms] ease-out">
<div className="w-px h-16 bg-gradient-to-b from-transparent via-[#C9963A] to-transparent"></div>
</div>

<section className="py-24 px-6 relative">
<div className="max-w-xl mx-auto text-center reveal opacity-0 translate-y-8 transition-all duration-[800ms] ease-out">
<h2 className="font-['Unbounded'] font-semibold text-2xl md:text-3xl tracking-tight text-[#F0EDE8] mb-10 leading-tight">
                Ты молишься. Ты каешься.<br/>
<span className="text-[#7A7268]">Но срывы продолжаются.</span>
</h2>
<div className="space-y-6 text-base text-[#7A7268] leading-relaxed text-left border-l-2 border-[#2A2520] pl-6 md:pl-8 ml-2 md:ml-0">
<p>Не потому что ты плохой мусульманин. А потому что сердце пустое — и нечем его заполнить.</p>
<p>Это не вопрос воли. Это вопрос того, чем живёт твоё сердце.</p>
</div>

<div className="mt-10 p-5 bg-[#1A1612]/50 border border-[#2A2520] rounded-2xl relative overflow-hidden text-left reveal opacity-0 translate-y-8 transition-all duration-[800ms] ease-out">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-[#C9963A]"></div>
<p className="text-sm md:text-base text-[#F0EDE8]">Твой мозг в этом состоянии буквально не может сопротивляться. <span className="text-[#C9963A]">Это доказано.</span></p>
</div>
<div className="grid grid-cols-2 gap-4 mt-6 reveal opacity-0 translate-y-8 transition-all duration-[800ms] ease-out">
<div className="bg-[#1A1612] border border-[#2A2520] rounded-xl p-5 text-left flex flex-col justify-between hover:border-[#2A2520]/80 transition-colors">
<span className="font-['Unbounded'] font-semibold text-2xl text-[#C9963A] mb-2 tracking-tight">70%</span>
<span className="text-xs text-[#7A7268] leading-snug">практикующих мусульман сталкиваются с этим регулярно.</span>
</div>
<div className="bg-[#1A1612] border border-[#2A2520] rounded-xl p-5 text-left flex flex-col justify-between hover:border-[#2A2520]/80 transition-colors">
<span className="font-['Unbounded'] font-semibold text-2xl text-[#C9963A] mb-2 tracking-tight">4%</span>
<span className="text-xs text-[#7A7268] leading-snug">решаются попросить помощь из страха осуждения.</span>
</div>
</div>
<p className="mt-8 text-sm text-[#7A7268] text-center font-medium">Ты не исключение. Ты не сломан.</p>
</div>
</section>

<section className="py-24 px-6 bg-[#1A1612]/30 border-y border-[#2A2520]/50 relative overflow-hidden">

<div className="absolute top-0 right-0 w-96 h-96 bg-[#C9963A] opacity-[0.02] blur-[100px] rounded-full pointer-events-none"></div>
<div className="max-w-3xl mx-auto reveal opacity-0 translate-y-8 transition-all duration-[800ms] ease-out">
<div className="text-center mb-12">
<span className="text-[#C9963A] text-xs font-medium tracking-widest uppercase mb-6 block">Ибн аль-Каййим сказал:</span>

<p className="font-['Amiri'] text-3xl md:text-4xl text-[#C9963A] mb-6 leading-relaxed opacity-90" dir="rtl">
                    القلب لا يُشفى بمحاربة الذنب، بل يُشفى حين يمتلئ بحب الله
                </p>
<h3 className="font-['Unbounded'] font-medium text-xl md:text-2xl tracking-tight text-[#F0EDE8] leading-snug">
                    «Сердце не исцеляется борьбой с грехом.<br/>
                    Оно исцеляется когда наполняется любовью к Аллаху.»
                </h3>
</div>
<div className="grid md:grid-cols-3 gap-4 mt-16 mb-12">

<div className="group bg-[#1A1612] border border-[#2A2520] rounded-2xl p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[#C9963A]/30 hover:shadow-[0_10px_40px_-15px_rgba(201,150,58,0.1)] reveal opacity-0 translate-y-8 duration-[800ms] ease-out">
<div className="w-10 h-10 rounded-full bg-[#0D0B08] border border-[#2A2520] flex items-center justify-center mb-5 group-hover:border-[#C9963A]/50 transition-colors">
<iconify-icon className="text-lg text-[#C9963A]" icon="solar:sun-2-linear"></iconify-icon>
</div>
<h4 className="font-['Unbounded'] font-medium text-sm text-[#F0EDE8] tracking-tight mb-2">Утренний завет</h4>
<p className="text-xs text-[#7A7268] leading-relaxed">Каждое утро ты ставишь намерение — осознанно, не автоматически.</p>
</div>

<div className="group bg-[#1A1612] border border-[#2A2520] rounded-2xl p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[#C9963A]/30 hover:shadow-[0_10px_40px_-15px_rgba(201,150,58,0.1)] reveal opacity-0 translate-y-8 duration-[800ms] ease-out">
<div className="w-10 h-10 rounded-full bg-[#0D0B08] border border-[#2A2520] flex items-center justify-center mb-5 group-hover:border-[#C9963A]/50 transition-colors">
<iconify-icon className="text-lg text-[#C9963A]" icon="solar:book-bookmark-linear"></iconify-icon>
</div>
<h4 className="font-['Unbounded'] font-medium text-sm text-[#F0EDE8] tracking-tight mb-2">Ежедневная подпитка</h4>
<p className="text-xs text-[#7A7268] leading-relaxed">Короткий урок из классических учёных. 3–5 минут. Питание для сердца.</p>
</div>

<div className="group bg-[#1A1612] border border-[#2A2520] rounded-2xl p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[#C9963A]/30 hover:shadow-[0_10px_40px_-15px_rgba(201,150,58,0.1)] reveal opacity-0 translate-y-8 duration-[800ms] ease-out">
<div className="w-10 h-10 rounded-full bg-[#0D0B08] border border-[#2A2520] flex items-center justify-center mb-5 group-hover:border-[#C9963A]/50 transition-colors">
<iconify-icon className="text-lg text-[#C9963A]" icon="solar:shield-warning-linear"></iconify-icon>
</div>
<h4 className="font-['Unbounded'] font-medium text-sm text-[#F0EDE8] tracking-tight mb-2">SOS в трудный момент</h4>
<p className="text-xs text-[#7A7268] leading-relaxed">Когда накрывает — приложение рядом. Один тап. Без осуждения.</p>
</div>
</div>
<div className="flex justify-center reveal opacity-0 translate-y-8 transition-all duration-[800ms] ease-out">
<a className="group relative inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 bg-[#C9963A] text-[#0D0B08] font-['Unbounded'] font-semibold text-sm rounded-xl overflow-hidden transition-transform duration-300 hover:scale-[1.02] active:scale-95 shadow-[0_0_20px_rgba(201,150,58,0.15)]" href="https://t.me/your_waitlist_bot">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-shimmer"></div>
<span className="relative flex items-center gap-2">
                        Я хочу очистить своё сердце
                    </span>
</a>
</div>
</div>
</section>

<section className="py-24 px-6">
<div className="max-w-xl mx-auto text-center reveal opacity-0 translate-y-8 transition-all duration-[800ms] ease-out">
<h2 className="font-['Unbounded'] font-semibold text-2xl md:text-3xl tracking-tight text-[#F0EDE8] mb-8">
                Никто не узнает. Даже мы.
            </h2>
<p className="text-[#7A7268] text-sm md:text-base leading-relaxed mb-12 max-w-md mx-auto">
                Tazkiya работает как личный дневник под подушкой. Всё что ты делаешь в приложении — остаётся только на твоём телефоне. Мы не знаем твоего имени. Твой путь — это тайна между тобой и Аллахом.
            </p>

<div className="flex items-center justify-center gap-3 md:gap-6">
<div className="flex flex-col items-center gap-3">
<div className="w-14 h-14 rounded-full bg-[#1A1612] border border-[#2A2520] flex items-center justify-center shadow-inner">
<iconify-icon className="text-xl text-[#F0EDE8]" icon="solar:smartphone-linear"></iconify-icon>
</div>
<span className="text-xs text-[#7A7268]">Телефон</span>
</div>
<div className="flex flex-col items-center">
<div className="w-8 flex items-center justify-center relative">
<div className="w-full h-px bg-[#2A2520] absolute"></div>
<iconify-icon className="text-[#7A7268] relative bg-[#0D0B08] px-1" icon="solar:alt-arrow-right-linear"></iconify-icon>
</div>
</div>
<div className="flex flex-col items-center gap-3 relative top-[-4px]">
<div className="w-14 h-14 rounded-full bg-[#C9963A]/10 border border-[#C9963A]/30 flex items-center justify-center">
<iconify-icon className="text-xl text-[#C9963A]" icon="solar:lock-keyhole-linear"></iconify-icon>
</div>
<span className="text-xs text-[#C9963A] font-medium tracking-tight">Замок</span>
</div>
<div className="flex flex-col items-center">
<div className="w-8 flex items-center justify-center relative">
<div className="w-full h-px bg-[#2A2520] absolute"></div>
<iconify-icon className="text-[#7A7268] relative bg-[#0D0B08] px-1" icon="solar:alt-arrow-right-linear"></iconify-icon>
</div>
</div>
<div className="flex flex-col items-center gap-3">
<div className="w-14 h-14 rounded-full bg-[#1A1612] border border-[#2A2520] flex items-center justify-center relative overflow-hidden">

<div className="absolute inset-0 flex items-center justify-center rotate-45 z-10">
<div className="w-full h-px bg-[#7A7268]/50"></div>
</div>
<iconify-icon className="text-xl text-[#7A7268] opacity-50" icon="solar:server-minimalistic-linear"></iconify-icon>
</div>
<span className="text-xs text-[#7A7268]">0 данных</span>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative">
<div className="max-w-2xl mx-auto text-center reveal opacity-0 translate-y-8 transition-all duration-[800ms] ease-out">
<h2 className="font-['Unbounded'] font-semibold text-2xl md:text-3xl tracking-tight text-[#F0EDE8] mb-6">
                Тысячи братьев уже выбрали этот путь
            </h2>
<p className="text-[#7A7268] text-sm md:text-base leading-relaxed mb-10">
                Ты не первый кто через это проходит. И не последний кто из этого выйдет. Tazkiya — это не просто приложение. Это братство тех, кто выбирает чистоту сердца.
            </p>
<div className="mb-20 inline-block">
<span className="block text-xs text-[#7A7268] uppercase tracking-widest mb-2">Уже ждут запуска:</span>
<div className="font-['Unbounded'] font-semibold text-5xl md:text-6xl tracking-tighter text-[#C9963A] drop-shadow-[0_0_20px_rgba(201,150,58,0.2)]">
                    2 847
                </div>
</div>

<div className="bg-[#1A1612] border border-[#2A2520] rounded-3xl p-8 md:p-12 text-center relative overflow-hidden reveal opacity-0 translate-y-8 transition-all duration-[800ms] ease-out">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-1 bg-[#C9963A] blur-xl opacity-50"></div>
<h3 className="font-['Unbounded'] font-semibold text-xl md:text-2xl tracking-tight text-[#F0EDE8] mb-4">
                    Сделай первый шаг к чистому сердцу
                </h3>
<p className="text-xs md:text-sm text-[#7A7268] mb-8 max-w-sm mx-auto">
                    Один тап. Анонимно. Бесплатно. Мы сообщим тебе первому когда Tazkiya будет готова.
                </p>

<a className="hidden md:inline-flex group relative items-center justify-center px-10 py-5 bg-[#C9963A] text-[#0D0B08] font-['Unbounded'] font-semibold text-sm md:text-base rounded-xl overflow-hidden transition-transform duration-300 hover:scale-[1.02] active:scale-95 shadow-[0_0_30px_rgba(201,150,58,0.2)]" href="https://t.me/your_waitlist_bot">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-shimmer"></div>
<span className="relative flex items-center gap-2">
                        Я хочу очистить своё сердце
                    </span>
</a>
</div>
</div>
</section>

<footer className="text-center pb-12 pt-6 text-[#7A7268]/50 text-xs font-medium reveal opacity-0 translate-y-8 transition-all duration-[800ms] ease-out">
        Tazkiya © 2024
    </footer>

<div className="fixed bottom-0 left-0 w-full p-4 bg-gradient-to-t from-[#0D0B08] via-[#0D0B08]/95 to-transparent z-40 md:hidden pt-12 transform translate-y-full opacity-0 pointer-events-none transition-all duration-300 ease-out" id="sticky-cta">
<a className="group relative flex items-center justify-center w-full px-6 py-4 bg-[#C9963A] text-[#0D0B08] font-['Unbounded'] font-semibold text-sm rounded-xl overflow-hidden active:scale-95 transition-transform shadow-[0_10px_40px_-10px_rgba(201,150,58,0.4)] border border-[#C9963A]/50" href="https://t.me/your_waitlist_bot">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full animate-[shimmer_3s_infinite]"></div>
<span className="relative">Я хочу очистить своё сердце</span>
</a>
</div>



    </>
  );
}
