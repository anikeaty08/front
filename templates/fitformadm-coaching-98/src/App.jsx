import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
charcoal: '#1A1A1A',
offwhite: '#F5F5F5',
gold: '#D4AF37',
goldHover: '#B5952F',
systemBlue: '#3B5998',
subtleGray: '#B0B0B0'
},
fontFamily: {
serif: ['Playfair Display', 'serif'],
sans: ['Inter', 'sans-serif'],
},
letterSpacing: {
tighter: '-0.05em',
tight: '-0.025em',
}
}
}
}



        // Preloader
        window.addEventListener('load', () => {
            const preloader = document.getElementById('preloader');
            setTimeout(() => {
                preloader.style.opacity = '0';
                setTimeout(() => {
                    preloader.style.display = 'none';
                    initObserver(); // Start animations after load
                }, 1000);
            }, 1000);
        });

        // Header Scroll Effect
        const header = document.getElementById('header');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('header-scrolled');
            } else {
                header.classList.remove('header-scrolled');
            }
        });

        // Hero Slider Logic
        const slider = document.getElementById('hero-slider');
        const leftLayer = document.getElementById('hero-left-layer');
        const divider = document.getElementById('hero-divider');

        slider.addEventListener('input', (e) => {
            const value = e.target.value;
            leftLayer.style.width = `${value}%`;
            divider.style.left = `${value}%`;
        });

        // Dignity Calculator Logic
        const dignityBtn = document.getElementById('dignity-btn');
        const dignityCount = document.getElementById('dignity-count');
        const excuseContainer = document.getElementById('excuse-container');
        const excuseText = document.getElementById('excuse-text');
        const conclusion = document.getElementById('dignity-conclusion');

        let count = 0;
        const excuses = [
            "Ой, я проспал(а)",
            "Что-то сегодня нет настроения",
            "Совсем забыл(а), извини!",
            "Давай в следующий раз, я не успеваю",
            "Перенесем на завтра?"
        ];

        dignityBtn.addEventListener('click', () => {
            if (count < 5) {
                // Increment count animation
                dignityCount.style.transform = 'translateY(-20px)';
                dignityCount.style.opacity = '0';
                
                setTimeout(() => {
                    count++;
                    dignityCount.textContent = count;
                    dignityCount.style.transform = 'translateY(0)';
                    dignityCount.style.opacity = '1';
                }, 150);

                // Show excuse
                excuseText.textContent = excuses[count - 1];
                excuseContainer.style.opacity = '1';
                excuseContainer.style.transform = 'translateX(-50%) translateY(-10px)';
                
                setTimeout(() => {
                    excuseContainer.style.opacity = '0';
                    excuseContainer.style.transform = 'translateX(-50%) translateY(0)';
                }, 1500);

                if (count === 5) {
                    dignityBtn.style.opacity = '0';
                    dignityBtn.style.pointerEvents = 'none';
                    conclusion.classList.remove('hidden');
                    // Small delay to allow display:block to apply before opacity transition
                    setTimeout(() => {
                        conclusion.style.opacity = '1';
                        conclusion.style.transform = 'translateY(0)';
                    }, 50);
                }
            }
        });

        // AI Toggle Interaction
        const aiToggle = document.getElementById('ai-toggle');
        const aiMessage = document.getElementById('ai-message');

        aiToggle.addEventListener('change', (e) => {
            if (e.target.checked) {
                aiMessage.classList.remove('opacity-50', 'translate-x-4');
                aiMessage.classList.add('opacity-100', 'translate-x-0', 'shadow-[0_0_20px_rgba(212,175,55,0.1)]');
            } else {
                aiMessage.classList.add('opacity-50', 'translate-x-4');
                aiMessage.classList.remove('opacity-100', 'translate-x-0', 'shadow-[0_0_20px_rgba(212,175,55,0.1)]');
            }
        });

        // Intersection Observer for Scroll Animations
        function initObserver() {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.15
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        // Optional: stop observing once revealed
                        // observer.unobserve(entry.target); 
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.reveal-element').forEach(el => {
                observer.observe(el);
            });
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-[100] bg-charcoal flex items-center justify-center transition-opacity duration-1000" id="preloader">
<div className="text-center">
<h1 className="font-serif text-3xl md:text-5xl text-gold tracking-tighter opacity-100 animate-pulse">FitFormAdmin</h1>
</div>
</div>

<header className="fixed top-0 left-0 w-full z-40 transition-all duration-500 py-6 px-6 md:px-12 flex justify-between items-center" id="header">
<a className="font-serif text-xl tracking-tighter text-offwhite hover:opacity-80 transition-opacity" href="#">
            FitFormAdmin
        </a>
<a className="group relative px-6 py-2 overflow-hidden border border-gold/40 text-sm tracking-wide text-offwhite transition-all duration-300 hover:border-gold" href="#manifesto">
<span className="absolute inset-0 w-full h-full bg-gold transform -translate-x-full transition-transform duration-300 ease-out group-hover:translate-x-0"></span>
<span className="relative group-hover:text-charcoal transition-colors duration-300 font-medium">Вернуть статус</span>
</a>
</header>

<section className="relative h-screen w-full overflow-hidden flex flex-col justify-center items-center">

<div className="absolute inset-0 w-full h-full">

<div className="absolute inset-0 w-full h-full bg-cover bg-center" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&amp'}}>
<div className="absolute inset-0 bg-charcoal/30"></div> 
</div>

<div className="absolute inset-0 w-1/2 h-full overflow-hidden border-r border-gold/50 bg-cover bg-center" id="hero-left-layer" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1517963879466-e025cedc96eb?q=80&amp', filter: 'grayscale(40%) blur(1px)'}}>
<div className="absolute inset-0 bg-charcoal/70"></div> 
</div>

<input className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20" id="hero-slider" max="100" min="0" type="range" value="50"/>

<div className="absolute top-0 bottom-0 w-0.5 bg-gold shadow-[0_0_15px_#D4AF37] z-10 pointer-events-none left-1/2" id="hero-divider">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full border border-gold bg-transparent flex items-center justify-center">
<iconify-icon className="text-gold text-lg" icon="solar:arrows-left-right-linear"></iconify-icon>
</div>
</div>
</div>

<div className="relative z-30 text-center max-w-4xl px-4 pointer-events-none select-none mix-blend-overlay">

</div>
<div className="absolute bottom-24 left-0 w-full z-30 pointer-events-none px-6 md:px-12 flex justify-between items-end opacity-90">
<div className="text-left reveal-element">
<span className="block text-xs uppercase tracking-widest text-subtleGray mb-2">Текущая реальность</span>
<h2 className="font-serif text-3xl md:text-5xl text-offwhite tracking-tighter">Тренер-Друг</h2>
</div>
<div className="text-right reveal-element" style={{transitionDelay: '100ms'}}>
<span className="block text-xs uppercase tracking-widest text-gold mb-2">Ваш потенциал</span>
<h2 className="font-serif text-3xl md:text-5xl text-gold tracking-tighter">Тренер-Эксперт</h2>
</div>
</div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 text-center w-full px-4 pointer-events-none">
<h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-offwhite font-semibold tracking-tighter mb-4 drop-shadow-xl">
                Хватит быть удобным. <br/> <span className="italic font-light">Пора быть уважаемым.</span>
</h1>
<p className="font-sans text-sm md:text-base text-offwhite/80 max-w-xl mx-auto tracking-wide font-light">
                FitFormAdmin — это не про экономию времени. Это про восстановление вашего профессионального статуса.
            </p>
</div>
</section>

<section className="py-24 md:py-32 bg-charcoal relative overflow-hidden flex flex-col items-center justify-center min-h-[80vh]">

<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>
<div className="container mx-auto px-6 relative z-10 text-center max-w-3xl">
<div className="reveal-element mb-12">
<p className="font-serif text-2xl md:text-3xl text-offwhite leading-relaxed">
                    Сколько раз в этом месяце вы сказали <br/> <span className="text-gold italic">«ничего страшного»</span>, когда это было не так?
                </p>
</div>
<div className="flex flex-col items-center justify-center space-y-8 reveal-element">

<div className="relative">
<span className="font-serif text-[8rem] md:text-[12rem] leading-none text-offwhite font-semibold transition-all duration-300" id="dignity-count">0</span>

<div className="absolute -top-12 left-1/2 -translate-x-1/2 w-max text-center opacity-0 transition-opacity duration-500" id="excuse-container">
<span className="text-gold font-serif italic text-xl md:text-2xl" id="excuse-text"></span>
</div>
</div>

<button className="group relative flex items-center justify-center w-20 h-20 rounded-full border border-gold/30 hover:border-gold transition-all duration-300 hover:scale-105 active:scale-95 outline-none" id="dignity-btn">
<iconify-icon className="text-3xl text-gold transition-transform duration-500 group-hover:rotate-90" icon="solar:add-linear" strokeWidth="1.5"></iconify-icon>
<span className="absolute inset-0 rounded-full bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
</button>

<div className="hidden opacity-0 transform translate-y-4 transition-all duration-1000 mt-8" id="dignity-conclusion">
<p className="text-subtleGray font-light text-base md:text-lg tracking-wide max-w-lg mx-auto">
                        Каждое «ничего страшного» — это трещина в вашем авторитете.<br/><span className="text-offwhite mt-2 block">Мы здесь, чтобы это исправить.</span>
</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-charcoal border-t border-white/5 overflow-hidden">
<div className="container mx-auto px-6 mb-12 flex justify-between items-end reveal-element">
<h2 className="font-serif text-3xl md:text-4xl text-offwhite tracking-tight">Ваш новый стандарт</h2>
<div className="hidden md:flex gap-2">
<iconify-icon className="text-2xl text-subtleGray opacity-50" icon="solar:arrow-left-linear"></iconify-icon>
<iconify-icon className="text-2xl text-gold animate-pulse" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>

<div className="flex overflow-x-auto gap-6 px-6 pb-12 snap-x mandatory no-scrollbar w-full">

<div className="snap-center shrink-0 w-[85vw] md:w-[400px] bg-[#1F1F1F] border border-white/5 p-8 flex flex-col justify-between h-[300px] hover:border-gold/30 transition-colors duration-500 group">
<div>
<div className="flex items-center gap-3 mb-6">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center border border-white/10 text-xs text-offwhite">А</div>
<div>
<p className="text-sm text-offwhite font-medium">Алина</p>
<p className="text-xs text-subtleGray">Клиентка Павла</p>
</div>
</div>
<p className="font-serif text-xl italic text-offwhite/90 leading-relaxed group-hover:text-gold transition-colors duration-500">
                        "Мой тренер наконец-то внедрил систему. Сначала было непривычно, но теперь я уважаю его время гораздо больше."
                    </p>
</div>
<div className="flex gap-1">
<span className="h-0.5 w-8 bg-gold"></span>
</div>
</div>

<div className="snap-center shrink-0 w-[85vw] md:w-[400px] bg-[#1F1F1F] border border-white/5 p-8 flex flex-col justify-between h-[300px] hover:border-gold/30 transition-colors duration-500 group">
<div>
<div className="flex items-center gap-3 mb-6">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center border border-white/10 text-xs text-offwhite">М</div>
<div>
<p className="text-sm text-offwhite font-medium">Марк</p>
<p className="text-xs text-subtleGray">Клиент Елены</p>
</div>
</div>
<p className="font-serif text-xl italic text-offwhite/90 leading-relaxed group-hover:text-gold transition-colors duration-500">
                        "Раньше я мог отменить в последнюю минуту. Теперь, когда есть четкие правила, я стал дисциплинированнее."
                    </p>
</div>
<div className="flex gap-1">
<span className="h-0.5 w-8 bg-gold"></span>
</div>
</div>

<div className="snap-center shrink-0 w-[85vw] md:w-[400px] bg-[#1F1F1F] border border-white/5 p-8 flex flex-col justify-between h-[300px] hover:border-gold/30 transition-colors duration-500 group">
<div>
<div className="flex items-center gap-3 mb-6">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center border border-white/10 text-xs text-offwhite">С</div>
<div>
<p className="text-sm text-offwhite font-medium">София</p>
<p className="text-xs text-subtleGray">Клиентка Дмитрия</p>
</div>
</div>
<p className="font-serif text-xl italic text-offwhite/90 leading-relaxed group-hover:text-gold transition-colors duration-500">
                        "Никакой неловкости с оплатой и переносами. Все четко и по-взрослому. Сразу чувствуется другой уровень сервиса."
                    </p>
</div>
<div className="flex gap-1">
<span className="h-0.5 w-8 bg-gold"></span>
</div>
</div>

<div className="snap-center shrink-0 w-[10vw]"></div>
</div>
</section>

<section className="py-24 md:py-32 bg-[#171717] relative">
<div className="container mx-auto px-6">
<div className="grid md:grid-cols-2 gap-16 items-center">

<div className="reveal-element order-2 md:order-1">
<div className="relative bg-charcoal p-8 border border-white/10 max-w-sm mx-auto shadow-2xl">

<div className="flex justify-between items-center mb-8 border-b border-white/5 pb-4">
<span className="text-xs uppercase tracking-widest text-subtleGray">Настройки клиента</span>
<iconify-icon className="text-offwhite" icon="solar:settings-linear"></iconify-icon>
</div>

<div className="flex items-center justify-between group">
<span className="text-sm text-offwhite font-medium">Политика отмены (24ч)</span>
<label className="flex items-center cursor-pointer relative" htmlFor="ai-toggle">
<input className="sr-only toggle-checkbox" id="ai-toggle" type="checkbox"/>
<div className="toggle-label w-12 h-6 bg-white/10 rounded-full shadow-inner transition-colors duration-300"></div>
<div className="dot absolute w-4 h-4 bg-offwhite rounded-full shadow left-1 top-1 transition-transform duration-300 transform group-hover:scale-110"></div>
</label>
</div>
<style>
                            #ai-toggle:checked ~ .toggle-label { background-color: #3B5998; }
                            #ai-toggle:checked ~ .dot { transform: translateX(150%); background-color: white; }
                        </style>
<p className="mt-4 text-xs text-subtleGray leading-relaxed">
                            При активации, система автоматически отправляет уведомления о штрафах, исключая личный фактор.
                        </p>
</div>
</div>

<div className="reveal-element order-1 md:order-2">
<h2 className="font-serif text-3xl md:text-5xl text-offwhite tracking-tight mb-6">
                        Пусть система будет <br/><span className="text-gold">«плохим полицейским»</span>.
                    </h2>
<p className="text-subtleGray font-light text-base md:text-lg mb-10 max-w-md">
                        Делегируйте неудобные разговоры искусственному интеллекту. Сохраните отношения, защитите доход.
                    </p>

<div className="relative pl-6 border-l border-gold/30">
<div className="bg-white/5 backdrop-blur-sm p-6 rounded-r-lg border border-white/10 opacity-50 transition-all duration-500 transform translate-x-4" id="ai-message">
<div className="flex items-center gap-2 mb-3">
<iconify-icon className="text-gold" icon="solar:bot-linear"></iconify-icon>
<span className="text-xs text-gold uppercase tracking-widest">AI Ассистент</span>
</div>
<p className="text-sm font-light text-offwhite leading-relaxed">
                                "Напоминаю о нашей политике: отмена тренировки менее чем за 24 часа оплачивается в полном объеме. Это помогает нам с уважением относиться ко времени друг друга..."
                            </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative min-h-screen flex items-center justify-center overflow-hidden py-24" id="manifesto">

<div className="absolute inset-0 z-0">

<div className="absolute inset-0 bg-cover bg-center animate-bg-zoom" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&amp'}}></div>
<div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/90 to-charcoal/80"></div>
</div>
<style>
            @keyframes bg-zoom {
                0% { transform: scale(1); }
                100% { transform: scale(1.1); }
            }
            .animate-bg-zoom {
                animation: bg-zoom 20s infinite alternate ease-in-out;
            }
        </style>
<div className="relative z-10 container mx-auto px-6 text-center">
<div className="space-y-6 md:space-y-8 font-serif text-xl md:text-3xl text-offwhite leading-relaxed max-w-4xl mx-auto">
<p className="reveal-element">Вы выбрали профессию, которая меняет жизни.</p>
<p className="reveal-element" style={{transitionDelay: '200ms'}}>Ваша экспертиза — это результат тысяч часов обучения.</p>
<p className="reveal-element" style={{transitionDelay: '400ms'}}>Ваше время — это самый ценный актив.</p>
<p className="reveal-element text-gold" style={{transitionDelay: '600ms'}}>Перестаньте быть просто услугой. Станьте событием.</p>
</div>
<div className="mt-16 reveal-element" style={{transitionDelay: '800ms'}}>
<button className="group relative px-10 py-4 bg-transparent overflow-hidden transition-all hover:shadow-[0_0_40px_rgba(212,175,55,0.3)]">
<span className="absolute inset-0 border border-gold"></span>
<span className="absolute inset-0 bg-gold transform scale-x-0 origin-left transition-transform duration-500 ease-out group-hover:scale-x-100"></span>
<span className="relative font-serif font-semibold text-lg tracking-wide text-gold group-hover:text-charcoal transition-colors duration-500 flex items-center gap-3">
                        Начать трансформацию
                        <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</span>
</button>
</div>
</div>
</section>

<footer className="bg-charcoal border-t border-white/5 py-8">
<div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="flex items-center gap-2">
<iconify-icon className="text-gold text-lg" icon="solar:crown-linear"></iconify-icon>
<span className="font-serif text-subtleGray tracking-tight">FitFormAdmin</span>
</div>
<div className="text-xs text-subtleGray font-sans tracking-wide">
                © 2026 FitFormAdmin. All Rights Reserved.
            </div>
<div className="flex gap-6 text-xs text-subtleGray">
<a className="hover:text-offwhite transition-colors" href="#">Политика конфиденциальности</a>
<a className="hover:text-offwhite transition-colors" href="#">Условия использования</a>
</div>
</div>
</footer>



    </>
  );
}
