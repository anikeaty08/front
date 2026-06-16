import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



    document.addEventListener('DOMContentLoaded', () => {
        const animatedElements = document.querySelectorAll('.animate-fade-up');
        animatedElements.forEach((el, index) => {
            setTimeout(() => {
                el.style.opacity = '1';
            }, index * 100);
        });
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 bg-[#050505]/80 backdrop-blur-lg border-b border-white/5 transition-all duration-300">
<div className="flex h-20 max-w-7xl mx-auto px-6 items-center justify-between">
<a className="uppercase hover:text-[#C8A97E] transition-colors text-sm font-semibold text-white tracking-[0.4em]" href="#">Служба Замовника</a>
<div className="hidden md:flex items-center space-x-10 text-sm font-medium text-neutral-400">
<a className="hover:text-white transition-colors" href="#services">Послуга</a>
<a className="hover:text-white transition-colors" href="#experience">Досвід</a>
<a className="hover:text-white transition-colors" href="#pricing">Вартість</a>
</div>
<a className="hidden md:inline-flex items-center justify-center text-xs font-semibold uppercase tracking-widest border border-[#C8A97E]/50 text-[#C8A97E] px-6 py-2.5 rounded-full hover:bg-[#C8A97E] hover:text-black transition-all duration-300" href="tel:+380000000000">
        Зв'язатись
      </a>
<button className="md:hidden text-neutral-300 hover:text-white">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</nav>

<header className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
<div className="absolute inset-0 z-0">

<img alt="Luxury Architecture" className="w-full h-full object-cover opacity-40 scale-105 transform animate-[pulse_20s_ease-in-out_infinite_alternate]" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&amp;fit=crop&amp;q=80&amp;w=1600"/>
<div className="bg-gradient-to-b from-[#050505]/80 via-transparent to-[#050505] absolute inset-0"></div>
</div>
<div className="relative z-10 max-w-5xl mx-auto px-6 text-center animate-fade-up opacity-0">
<div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-8 backdrop-blur-sm">
<iconify-icon className="text-[#C8A97E]" icon="solar:star-fall-linear" width="16"></iconify-icon>
<span className="uppercase text-xs font-semibold text-neutral-300 tracking-wide">
          Професійна Служба Замовника
        </span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter text-white leading-[1.1] mb-6">
        Ваш об'єкт
        <br className="hidden md:block"/>
        під <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C8A97E] to-[#E2Cda6]">повним</span> контролем
      </h1>
<p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-10 font-light tracking-wide">
        Беру на себе всю операційну відповідальність за будівництво, ремонт або реконструкцію. Ви не витрачаєте час — ви отримуєте результат.
      </p>
<div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
<a className="w-full sm:w-auto px-8 py-4 bg-[#C8A97E] text-black text-sm font-semibold uppercase tracking-widest rounded-full hover:bg-white transition-all duration-300 flex items-center justify-center space-x-2" href="#contact">
<span>Обговорити проєкт</span>
<iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
<a className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/20 text-white text-sm font-medium uppercase tracking-widest rounded-full hover:bg-white/5 transition-all duration-300" href="#services">
          Дізнатись більше
        </a>
</div>
</div>
</header>

<section className="border-y border-white/5 bg-[#0a0a0a]">
<div className="max-w-7xl mx-auto px-6 py-12 lg:py-16">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-white/5">
<div className="text-center md:px-6 py-4 md:py-0">
<p className="text-4xl lg:text-5xl font-semibold tracking-tighter text-[#C8A97E] mb-2">21+</p>
<p className="text-xs text-neutral-500 uppercase tracking-widest font-semibold">Років досвіду</p>
</div>
<div className="text-center md:px-6 py-4 md:py-0">
<p className="text-4xl lg:text-5xl font-semibold tracking-tighter text-[#C8A97E] mb-2">100+</p>
<p className="text-xs text-neutral-500 uppercase tracking-widest font-semibold">Реалізованих об'єктів</p>
</div>
<div className="text-center md:px-6 py-4 md:py-0">
<p className="text-4xl lg:text-5xl font-semibold tracking-tighter text-[#C8A97E] mb-2">0</p>
<p className="text-xs text-neutral-500 uppercase tracking-widest font-semibold">Зірваних бюджетів</p>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 relative border-b border-white/5" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center">

<div className="relative animate-fade-up opacity-0">
<img alt="Професійний девелопер" className="w-full aspect-[4/5] object-cover rounded-2xl border border-white/10 shadow-2xl" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute -bottom-8 -right-4 md:-right-8 bg-[#0a0a0a] border-l-2 border-l-[#C8A97E] p-6 md:p-8 max-w-[90%] md:max-w-sm rounded-xl border-y border-r border-white/5 shadow-xl">
<p className="text-white text-base md:text-lg italic mb-4 leading-relaxed">"Ми працюємо виключно на стороні Замовника, захищаючи його інтереси, час, бюджет і якість результату."</p>
<span className="text-[#C8A97E] text-xs font-semibold tracking-widest uppercase">— ПРИНЦИП РОБОТИ</span>
</div>
</div>

<div className="animate-fade-up opacity-0 delay-100 pt-12 md:pt-0">
<div className="inline-flex items-center space-x-2 mb-6">
<span className="uppercase text-xs font-semibold text-[#C8A97E] tracking-widest">ХТО Я</span>
</div>
<h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white tracking-tighter mb-6 leading-tight">Професійний девелопер з <span className="text-[#C8A97E]">21-річним</span> досвідом</h2>
<div className="w-10 h-px bg-[#C8A97E]/50 mb-8"></div>
<p className="text-base text-neutral-400 mb-6 leading-relaxed">
            За 21 рік реалізував сотні об'єктів різної складності — від преміальних приватних будинків і квартир бізнес- та преміум-класу до торгових центрів, складських комплексів та об'єктів державного призначення. Досвід роботи у складних географічних умовах та з нестандартними технологічними задачами.
          </p>
<p className="text-base text-neutral-400 leading-relaxed">
            Основне завдання послуги — повністю зняти із Замовника всі операційні, організаційні та контрольні питання, пов'язані з реалізацією об'єкта.
          </p>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 relative" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16 animate-fade-up opacity-0">
<h2 className="md:text-5xl text-3xl font-semibold text-white tracking-tighter mb-4">Що входить у Службу Замовника</h2>
<p className="text-base text-neutral-400">
          Повне зняття операційного навантаження — від першого підрядника до підписання фінального акту.
        </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="group p-8 rounded-2xl bg-[#0a0a0a] border border-white/5 hover:border-[#C8A97E]/30 transition-all duration-500 flex flex-col justify-between">
<div>
<div className="w-12 h-12 rounded-full bg-[#141414] border border-white/10 flex items-center justify-center mb-6 group-hover:bg-[#C8A97E]/10 transition-colors">
<iconify-icon className="text-neutral-400 group-hover:text-[#C8A97E]" icon="solar:users-group-two-rounded-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-white mb-3">Комунікація та підбір підрядників</h3>
<p className="text-sm text-neutral-500 leading-relaxed">
              Повна комунікація з підрядниками, постачальниками та виконавцями. Організація тендерів з аналізом пропозицій за ціною, строками та якістю. Відбір надійних підрядників під задачі об'єкта.
            </p>
</div>
<div className="flex flex-wrap gap-2 mt-8">
<span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-semibold text-neutral-400 uppercase tracking-widest">Тендери</span>
<span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-semibold text-neutral-400 uppercase tracking-widest">Переговори</span>
<span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-semibold text-neutral-400 uppercase tracking-widest">Відбір</span>
</div>
</div>

<div className="group p-8 rounded-2xl bg-[#0a0a0a] border border-white/5 hover:border-[#C8A97E]/30 transition-all duration-500 flex flex-col justify-between">
<div>
<div className="w-12 h-12 rounded-full bg-[#141414] border border-white/10 flex items-center justify-center mb-6 group-hover:bg-[#C8A97E]/10 transition-colors">
<iconify-icon className="text-neutral-400 group-hover:text-[#C8A97E]" icon="solar:ruler-pen-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-white mb-3">Технічний нагляд та контроль якості</h3>
<p className="text-sm text-neutral-500 leading-relaxed">
              Жорсткий контроль відповідності робіт проєктній документації та нормативним вимогам — ДБН, ДСТУ. Профільна інженерна команда: електрика, водопостачання, вентиляція, опалення, оздоблення.
            </p>
</div>
<div className="flex flex-wrap gap-2 mt-8">
<span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-semibold text-neutral-400 uppercase tracking-widest">ДБН / ДСТУ</span>
<span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-semibold text-neutral-400 uppercase tracking-widest">Нагляд</span>
<span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-semibold text-neutral-400 uppercase tracking-widest">Інженерні системи</span>
</div>
</div>

<div className="group p-8 rounded-2xl bg-[#0a0a0a] border border-white/5 hover:border-[#C8A97E]/30 transition-all duration-500 flex flex-col justify-between">
<div>
<div className="w-12 h-12 rounded-full bg-[#141414] border border-white/10 flex items-center justify-center mb-6 group-hover:bg-[#C8A97E]/10 transition-colors">
<iconify-icon className="text-neutral-400 group-hover:text-[#C8A97E]" icon="solar:wallet-money-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-white mb-3">Фінансовий контроль та звітність</h3>
<p className="text-sm text-neutral-500 leading-relaxed">
              Оптимізація бюджету проєкту. Накопичувальні відомості, акти виконаних робіт, звірки та контроль платежів. Прозора фінансова звітність на кожному етапі реалізації.
            </p>
</div>
<div className="flex flex-wrap gap-2 mt-8">
<span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-semibold text-neutral-400 uppercase tracking-widest">Бюджет</span>
<span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-semibold text-neutral-400 uppercase tracking-widest">Акти</span>
<span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-semibold text-neutral-400 uppercase tracking-widest">Звітність</span>
</div>
</div>

<div className="group p-8 rounded-2xl bg-[#0a0a0a] border border-white/5 hover:border-[#C8A97E]/30 transition-all duration-500 flex flex-col justify-between">
<div>
<div className="w-12 h-12 rounded-full bg-[#141414] border border-white/10 flex items-center justify-center mb-6 group-hover:bg-[#C8A97E]/10 transition-colors">
<iconify-icon className="text-neutral-400 group-hover:text-[#C8A97E]" icon="solar:sitemap-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-white mb-3">Координація учасників проєкту</h3>
<p className="text-sm text-neutral-500 leading-relaxed">
              Координація взаємодії дизайнерів, архітекторів, інженерів та вузькопрофільних спеціалістів. Контроль строків виконання робіт та дотримання технологій виробництва на кожному етапі.
            </p>
</div>
<div className="flex flex-wrap gap-2 mt-8">
<span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-semibold text-neutral-400 uppercase tracking-widest">Архітектори</span>
<span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-semibold text-neutral-400 uppercase tracking-widest">Дизайнери</span>
<span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-semibold text-neutral-400 uppercase tracking-widest">Інженери</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-[#0a0a0a] border-t border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16 animate-fade-up opacity-0">
<h2 className="md:text-5xl text-3xl font-semibold text-white tracking-tighter mb-4">Що отримує Замовник</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="p-8 rounded-2xl bg-[#141414] border border-white/5 hover:bg-[#1a1a1a] transition-colors group">
<div className="text-xs text-[#C8A97E] uppercase tracking-widest font-semibold mb-4">01</div>
<div className="w-6 h-px bg-[#C8A97E]/40 mb-6 group-hover:w-12 transition-all duration-300"></div>
<h3 className="text-lg font-semibold text-white mb-3">Об'єкт у бюджеті</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Реалізація в межах затвердженого бюджету. Оптимізація витрат без втрати якості кінцевого результату.</p>
</div>
<div className="p-8 rounded-2xl bg-[#141414] border border-white/5 hover:bg-[#1a1a1a] transition-colors group">
<div className="text-xs text-[#C8A97E] uppercase tracking-widest font-semibold mb-4">02</div>
<div className="w-6 h-px bg-[#C8A97E]/40 mb-6 group-hover:w-12 transition-all duration-300"></div>
<h3 className="text-lg font-semibold text-white mb-3">Контроль строків і якості</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Системний контроль на кожному етапі будівництва. Жодних прихованих відставань та порушень технологій.</p>
</div>
<div className="p-8 rounded-2xl bg-[#141414] border border-white/5 hover:bg-[#1a1a1a] transition-colors group">
<div className="text-xs text-[#C8A97E] uppercase tracking-widest font-semibold mb-4">03</div>
<div className="w-6 h-px bg-[#C8A97E]/40 mb-6 group-hover:w-12 transition-all duration-300"></div>
<h3 className="text-lg font-semibold text-white mb-3">Фото- та відеофіксація</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Регулярна фіксація ходу робіт. Ви завжди знаєте що відбувається на об'єкті — без особистої присутності.</p>
</div>
<div className="p-8 rounded-2xl bg-[#141414] border border-white/5 hover:bg-[#1a1a1a] transition-colors group">
<div className="text-xs text-[#C8A97E] uppercase tracking-widest font-semibold mb-4">04</div>
<div className="w-6 h-px bg-[#C8A97E]/40 mb-6 group-hover:w-12 transition-all duration-300"></div>
<h3 className="text-lg font-semibold text-white mb-3">Щотижнева звітність</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Звітність по об'єкту та фінансах кожного тижня. Стисло, структуровано і по суті.</p>
</div>
<div className="p-8 rounded-2xl bg-[#141414] border border-white/5 hover:bg-[#1a1a1a] transition-colors group">
<div className="text-xs text-[#C8A97E] uppercase tracking-widest font-semibold mb-4">05</div>
<div className="w-6 h-px bg-[#C8A97E]/40 mb-6 group-hover:w-12 transition-all duration-300"></div>
<h3 className="text-lg font-semibold text-white mb-3">Повне звільнення</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Жодних дзвінків, суперечок із підрядниками та щоденного оперативного управління з вашого боку.</p>
</div>
<div className="p-8 rounded-2xl bg-[#141414] border border-white/5 hover:bg-[#1a1a1a] transition-colors group">
<div className="text-xs text-[#C8A97E] uppercase tracking-widest font-semibold mb-4">06</div>
<div className="w-6 h-px bg-[#C8A97E]/40 mb-6 group-hover:w-12 transition-all duration-300"></div>
<h3 className="text-lg font-semibold text-white mb-3">Інженерний нагляд</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Профільна команда контролює всі інженерні системи: електрику, водопостачання, вентиляцію та опалення.</p>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-gradient-to-b from-[#050505] to-[#0a0a0a] border-t border-white/5" id="experience">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
<div className="max-w-xl">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tighter text-white mb-4">
            Об'єкти будь-якої складності
          </h2>
</div>
</div>
<div className="max-w-5xl space-y-4 md:space-y-6">

<div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 p-6 md:px-8 md:py-6 rounded-2xl bg-[#0a0a0a] border border-white/5 hover:border-[#C8A97E]/30 transition-colors">
<span className="text-3xl font-light text-[#C8A97E] shrink-0">01</span>
<p className="text-base text-neutral-400 leading-relaxed">
<strong className="text-white font-semibold">Преміальні приватні будинки та квартири</strong> бізнес- та преміум-класу з високоякісним оздобленням
          </p>
</div>

<div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 p-6 md:px-8 md:py-6 rounded-2xl bg-[#0a0a0a] border border-white/5 hover:border-[#C8A97E]/30 transition-colors">
<span className="text-3xl font-light text-[#C8A97E] shrink-0">02</span>
<p className="text-base text-neutral-400 leading-relaxed">
<strong className="text-white font-semibold">Торгові центри та продуктові супермаркети</strong> — комерційна нерухомість із складною будівельною логістикою
          </p>
</div>

<div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 p-6 md:px-8 md:py-6 rounded-2xl bg-[#0a0a0a] border border-white/5 hover:border-[#C8A97E]/30 transition-colors">
<span className="text-3xl font-light text-[#C8A97E] shrink-0">03</span>
<p className="text-base text-neutral-400 leading-relaxed">
<strong className="text-white font-semibold">Складські та промислові комплекси</strong> із специфічними технічними вимогами до конструктиву та інженерії
          </p>
</div>

<div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 p-6 md:px-8 md:py-6 rounded-2xl bg-[#0a0a0a] border border-white/5 hover:border-[#C8A97E]/30 transition-colors">
<span className="text-3xl font-light text-[#C8A97E] shrink-0">04</span>
<p className="text-base text-neutral-400 leading-relaxed">
<strong className="text-white font-semibold">Об'єкти громадського та державного призначення</strong> з підвищеними нормативними вимогами
          </p>
</div>

<div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 p-6 md:px-8 md:py-6 rounded-2xl bg-[#0a0a0a] border border-white/5 hover:border-[#C8A97E]/30 transition-colors">
<span className="text-3xl font-light text-[#C8A97E] shrink-0">05</span>
<p className="text-base text-neutral-400 leading-relaxed">
<strong className="text-white font-semibold">Житлові квартали та проєкти у складних географічних умовах</strong> — нестандартні технологічні задачі
          </p>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 border-y border-white/5 bg-[#0a0a0a]" id="pricing">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tighter text-white mb-4">Прозора система ціноутворення</h2>
<p className="text-base text-neutral-400 max-w-2xl mx-auto">
          Фіксована вартість або відсоток від бюджету — залежно від типу та складності проєкту.
        </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">

<div className="bg-[#141414] p-8 lg:p-10 rounded-2xl border border-white/5 hover:border-[#C8A97E]/30 transition-all duration-300">
<span className="text-[10px] text-[#C8A97E] uppercase tracking-widest font-semibold mb-6 block">СТАНДАРТ</span>
<h3 className="text-xl font-semibold text-white mb-6">Повний менеджмент проєкту</h3>
<div className="text-4xl font-semibold text-[#C8A97E] tracking-tight mb-2">2.5–3.5%</div>
<div className="text-sm text-neutral-500 mb-8">від бюджету робіт</div>
<div className="w-8 h-px bg-[#C8A97E]/30 mb-8"></div>
<p className="text-sm text-neutral-400 mb-8 leading-relaxed">Стандартні проєкти середньої складності з чітким обсягом робіт.</p>
<div className="inline-block px-3 py-1.5 bg-[#C8A97E]/10 border border-[#C8A97E]/20 text-[10px] font-semibold text-[#C8A97E] uppercase tracking-wider rounded">МІН. 100 000 ГРН</div>
</div>

<div className="bg-[#1a1a1a] p-8 lg:p-10 rounded-2xl border-t-2 border-t-[#C8A97E] border-x border-b border-white/5 relative transform md:-translate-y-4 shadow-2xl">
<span className="text-[10px] text-[#C8A97E] uppercase tracking-widest font-semibold mb-6 block">БАЗОВИЙ</span>
<h3 className="text-xl font-semibold text-white mb-6">Фіксована вартість</h3>
<div className="flex items-baseline mb-2">
<span className="text-2xl text-[#C8A97E] font-medium mr-2">від</span>
<div className="text-4xl lg:text-5xl font-semibold text-[#C8A97E] tracking-tight">100 000</div>
</div>
<div className="text-sm text-neutral-500 mb-8">грн для стандартних проєктів</div>
<div className="w-8 h-px bg-[#C8A97E]/30 mb-8"></div>
<p className="text-sm text-neutral-400 mb-8 leading-relaxed">Чітка фіксована ціна для типових об'єктів із зрозумілим обсягом і строками виконання.</p>
</div>

<div className="bg-[#141414] p-8 lg:p-10 rounded-2xl border border-white/5 hover:border-[#C8A97E]/30 transition-all duration-300">
<span className="text-[10px] text-[#C8A97E] uppercase tracking-widest font-semibold mb-6 block">ПРЕМІУМ</span>
<h3 className="text-xl font-semibold text-white mb-6">Авторські та складні проєкти</h3>
<div className="text-4xl font-semibold text-[#C8A97E] tracking-tight mb-2">4–6%</div>
<div className="text-sm text-neutral-500 mb-8">або від 150 000 грн</div>
<div className="w-8 h-px bg-[#C8A97E]/30 mb-8"></div>
<p className="text-sm text-neutral-400 mb-8 leading-relaxed">Дизайнерські та авторські проєкти підвищеної складності. Індивідуальна оцінка залежно від обсягу задач.</p>
</div>
</div>
</div>
</section>

<section className="relative py-24 lg:py-32 overflow-hidden" id="contact">

<div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent to-[#0a0a0a]"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C8A97E] rounded-full blur-[120px] opacity-10 z-0 pointer-events-none"></div>
<div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div>
<div className="inline-flex items-center space-x-2 mb-6">
<span className="uppercase text-xs font-semibold text-[#C8A97E] tracking-widest">КОНТАКТ</span>
</div>
<h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter text-white mb-6">Обговоримо <br/>ваш проєкт</h2>
<div className="w-10 h-px bg-[#C8A97E]/50 mb-6"></div>
<p className="text-lg text-neutral-400 max-w-md leading-relaxed">
          Розкажіть про об'єкт — і ми запропонуємо оптимальне рішення під ваші задачі та бюджет.
        </p>
</div>
<div className="bg-[#0a0a0a]/80 backdrop-blur-xl p-8 md:p-10 rounded-3xl border border-white/10 shadow-2xl">
<div className="text-xs text-neutral-400 uppercase tracking-widest font-semibold mb-8">Замовнику не потрібно витрачати час на:</div>
<ul className="space-y-6 mb-10">
<li className="flex items-start space-x-4 pb-6 border-b border-white/5">
<div className="w-1.5 h-1.5 rounded-full bg-[#C8A97E] mt-2 shrink-0"></div>
<p className="text-sm text-neutral-400 leading-relaxed"><strong className="text-white font-medium">Переговори з підрядниками</strong> — це наша робота</p>
</li>
<li className="flex items-start space-x-4 pb-6 border-b border-white/5">
<div className="w-1.5 h-1.5 rounded-full bg-[#C8A97E] mt-2 shrink-0"></div>
<p className="text-sm text-neutral-400 leading-relaxed"><strong className="text-white font-medium">Постійні дзвінки та уточнення</strong> — ми тримаємо все під контролем</p>
</li>
<li className="flex items-start space-x-4 pb-6 border-b border-white/5">
<div className="w-1.5 h-1.5 rounded-full bg-[#C8A97E] mt-2 shrink-0"></div>
<p className="text-sm text-neutral-400 leading-relaxed"><strong className="text-white font-medium">Контроль закупівель і матеріалів</strong> — ведемо прозору звітність</p>
</li>
<li className="flex items-start space-x-4">
<div className="w-1.5 h-1.5 rounded-full bg-[#C8A97E] mt-2 shrink-0"></div>
<p className="text-sm text-neutral-400 leading-relaxed"><strong className="text-white font-medium">Щоденне залучення до процесу</strong> — ви отримуєте лише результат</p>
</li>
</ul>
<a className="flex items-center justify-center w-full px-8 py-4 bg-[#C8A97E] text-black text-sm font-semibold uppercase tracking-widest rounded-xl hover:bg-white transition-all duration-300" href="tel:+380000000000">
          Зв'язатись <iconify-icon className="ml-2" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
</div>
</div>
</section>

<footer className="bg-[#050505] border-t border-white/5 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="md:col-span-2">
<a className="inline-block uppercase text-sm font-semibold text-white tracking-[0.4em] mb-6" href="#">Служба Замовника</a>
<p className="text-sm text-neutral-500 max-w-sm leading-relaxed">
            Повне зняття операційного навантаження при будівництві та ремонті. Ви не витрачаєте час — ви отримуєте результат.
          </p>
</div>
<div>
<h4 className="text-xs font-semibold text-white uppercase tracking-widest mb-6">Навігація</h4>
<ul className="space-y-4 text-sm text-neutral-500">
<li><a className="hover:text-[#C8A97E] transition-colors" href="#services">Послуга</a></li>
<li><a className="hover:text-[#C8A97E] transition-colors" href="#experience">Досвід</a></li>
<li><a className="hover:text-[#C8A97E] transition-colors" href="#pricing">Вартість</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-white uppercase tracking-widest mb-6">Контакти</h4>
<ul className="space-y-4 text-sm text-neutral-500">
<li className="flex items-center space-x-3">
<iconify-icon className="shrink-0" icon="solar:phone-linear" width="18"></iconify-icon>
<a className="hover:text-[#C8A97E] transition-colors" href="tel:+380000000000">+380 00 000 00 00</a>
</li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5 text-xs text-neutral-600">
<p>© 2025 Служба Замовника. Всі права захищені.</p>
</div>
</div>
</footer>


    </>
  );
}
