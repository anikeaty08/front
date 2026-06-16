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
      

<nav className="fixed top-0 inset-x-0 z-50 p-4 pointer-events-none mix-blend-difference text-white">
<div className="max-w-7xl mx-auto flex justify-between items-center pointer-events-auto">
<a className="text-3xl font-bold tracking-tighter uppercase border-2 border-white px-3 py-1 hover:bg-white hover:text-black transition-colors" href="#">
                ZOO<span className="hidden sm:inline">PARK</span>
</a>
<div className="flex gap-4">
<button className="bg-[#ccff00] text-black px-6 py-3 text-sm font-semibold uppercase tracking-tight border-2 border-transparent hover:border-white hover:scale-105 transition-all shadow-[4px_4px_0px_0px_white] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]">
                    Купить Билет
                </button>
</div>
</div>
</nav>

<header className="relative min-h-screen bg-[#18181b] flex flex-col justify-center items-center overflow-hidden pt-20">

<div className="absolute top-1/4 left-10 w-64 h-64 rounded-full bg-purple-600 blur-[100px] opacity-60 animate-pulse"></div>
<div className="absolute bottom-1/4 right-10 w-80 h-80 rounded-full bg-[#ccff00] blur-[100px] opacity-40 animate-pulse" style={{animationDelay: '1s'}}></div>

<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>

<div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
<div className="inline-flex items-center gap-2 px-4 py-2 border border-[#ccff00] text-[#ccff00] rounded-full mb-6 bg-[#ccff00]/10 backdrop-blur-sm">
<iconify-icon icon="lucide:megaphone" width="16"></iconify-icon>
<span className="text-xs font-bold uppercase tracking-widest">Сезон открыт</span>
</div>
<h1 className="text-7xl md:text-9xl font-black uppercase tracking-tighter text-white leading-[0.85] mb-8">
                Дикая <br/>
<span className="text-[#ccff00]">Энергия</span> <br/>
<span className="text-stroke-white hover:text-white transition-colors duration-500 cursor-default">Природы</span>
</h1>
<p className="text-zinc-400 text-lg md:text-xl font-medium max-w-lg mx-auto leading-relaxed mb-10">
                Почувствуй ритм джунглей в центре города. Более 500 видов животных, интерактивные зоны и незабываемые впечатления.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="group relative px-8 py-4 bg-[#ccff00] text-black text-lg font-bold uppercase tracking-tight overflow-hidden hover:rotate-2 transition-transform" href="#tickets">
<span className="relative z-10 flex items-center gap-2">
                        Запланировать визит
                        <iconify-icon icon="lucide:arrow-right" width="20"></iconify-icon>
</span>
<div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
</a>
<a className="px-8 py-4 border-2 border-white text-white text-lg font-bold uppercase tracking-tight hover:bg-white hover:text-black transition-colors" href="#animals">
                    Смотреть карту
                </a>
</div>
</div>

<div className="absolute top-[20%] right-[5%] hidden lg:block rotate-12 hover:rotate-0 transition-transform duration-500 z-20">
<img alt="Lion" className="w-64 h-64 object-cover border-4 border-[#ccff00] shadow-[8px_8px_0px_0px_#ccff00]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="absolute bottom-[15%] left-[5%] hidden lg:block -rotate-6 hover:rotate-0 transition-transform duration-500 z-20">
<img alt="Tiger" className="w-56 h-56 object-cover border-4 border-purple-500 shadow-[-8px_8px_0px_0px_#a855f7]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
</header>

<div className="bg-[#ccff00] py-6 border-y-4 border-black -rotate-1 scale-105 z-30 relative shadow-xl">
<div className="marquee-container">
<div className="marquee-content text-4xl md:text-5xl font-black uppercase tracking-tighter text-black flex items-center gap-12">
<span>Львы</span> <iconify-icon icon="lucide:paw-print" width="32"></iconify-icon>
<span>Тигры</span> <iconify-icon icon="lucide:paw-print" width="32"></iconify-icon>
<span>Слоны</span> <iconify-icon icon="lucide:paw-print" width="32"></iconify-icon>
<span>Жирафы</span> <iconify-icon icon="lucide:paw-print" width="32"></iconify-icon>
<span>Зебры</span> <iconify-icon icon="lucide:paw-print" width="32"></iconify-icon>
<span>Львы</span> <iconify-icon icon="lucide:paw-print" width="32"></iconify-icon>
<span>Тигры</span> <iconify-icon icon="lucide:paw-print" width="32"></iconify-icon>
<span>Слоны</span> <iconify-icon icon="lucide:paw-print" width="32"></iconify-icon>
</div>
</div>
</div>

<section className="py-24 px-4 bg-white relative" id="animals">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none text-black">
                    Наши <br/><span className="text-stroke">Звезды</span>
</h2>
<p className="text-xl font-medium max-w-sm text-right md:text-left leading-tight">
                    Уникальная коллекция редких видов со всего земного шара в естественной среде обитания.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[300px]">

<div className="group relative md:col-span-2 row-span-2 border-4 border-black bg-black overflow-hidden">
<img alt="Tiger" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 p-6 flex flex-col justify-end">
<span className="bg-[#ccff00] text-black px-3 py-1 font-bold uppercase tracking-widest text-xs w-max mb-2">Хищники</span>
<h3 className="text-5xl font-bold text-white uppercase tracking-tighter">Амурский Тигр</h3>
</div>
</div>

<div className="group relative border-4 border-black bg-[#ff4d00] flex flex-col justify-between p-6 transition-transform hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_black]">
<iconify-icon className="text-black" icon="lucide:ticket" width="48"></iconify-icon>
<div>
<h3 className="text-2xl font-black uppercase leading-none mb-1">Кормление</h3>
<p className="font-bold text-sm leading-tight opacity-80">12:00 — Жирафы</p>
</div>
</div>

<div className="group relative border-4 border-black bg-black overflow-hidden">
<img alt="Parrot" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="absolute top-4 right-4 bg-white text-black p-2 rounded-full">
<iconify-icon icon="lucide:arrow-up-right" width="20"></iconify-icon>
</div>
<div className="absolute bottom-4 left-4">
<h3 className="text-white text-xl font-bold uppercase bg-black px-2 inline-block">Тропики</h3>
</div>
</div>

<div className="group relative row-span-2 border-4 border-black bg-zinc-100 overflow-hidden">
<img alt="Giraffe" className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
<h3 className="text-3xl font-bold text-white uppercase tracking-tighter">Саванна</h3>
</div>
</div>

<div className="group relative border-4 border-black bg-[#ccff00] flex items-center justify-center p-6 text-center hover:bg-black hover:text-[#ccff00] transition-colors duration-300">
<div>
<div className="text-6xl font-black">500+</div>
<div className="text-sm font-bold uppercase tracking-widest mt-2">Видов</div>
</div>
</div>

<div className="group relative border-4 border-black bg-purple-600 overflow-hidden">
<div className="absolute inset-0 flex items-center justify-center">
<iconify-icon className="text-white opacity-50 rotate-12 group-hover:rotate-0 transition-transform duration-300" icon="lucide:camera" width="64"></iconify-icon>
</div>
<div className="absolute bottom-0 left-0 w-full p-4 bg-black text-white text-center font-bold uppercase">Фотозоны</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#18181b] text-white relative overflow-hidden border-t-4 border-white">

<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'repeating-linear-gradient(45deg, #ccff00 0, #ccff00 2px, transparent 0, transparent 50%)', backgroundSize: '20px 20px'}}></div>
<div className="max-w-6xl mx-auto px-4 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter text-[#ccff00] mb-8">
                    Время <br/> Работы
                </h2>
<div className="space-y-6">
<div className="flex items-center gap-6 p-6 border border-zinc-700 bg-zinc-900/50 hover:border-[#ccff00] transition-colors">
<div className="bg-white text-black p-3 rounded-none shadow-[4px_4px_0px_0px_#ccff00]">
<iconify-icon icon="lucide:sun" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-bold uppercase text-zinc-300">Будние дни</h3>
<p className="text-3xl font-black text-white">10:00 — 20:00</p>
</div>
</div>
<div className="flex items-center gap-6 p-6 border border-zinc-700 bg-zinc-900/50 hover:border-[#ccff00] transition-colors">
<div className="bg-white text-black p-3 rounded-none shadow-[4px_4px_0px_0px_#ccff00]">
<iconify-icon icon="lucide:moon" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-bold uppercase text-zinc-300">Выходные</h3>
<p className="text-3xl font-black text-white">09:00 — 22:00</p>
</div>
</div>
</div>
</div>
<div className="relative">
<div className="absolute inset-0 bg-gradient-to-tr from-[#ccff00] to-purple-500 blur-[80px] opacity-20"></div>
<img alt="Cat" className="relative z-10 w-full grayscale contrast-125 border-4 border-white shadow-[12px_12px_0px_0px_rgba(255,255,255,0.2)] hover:grayscale-0 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute -bottom-8 -left-8 bg-[#ff4d00] text-black w-40 h-40 flex items-center justify-center rounded-full animate-bounce z-20 border-4 border-black">
<p className="text-center font-black uppercase leading-tight rotate-[-10deg]">Дети<br/>до 5 лет<br/>Бесплатно</p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#ccff00] px-4" id="tickets">
<div className="max-w-3xl mx-auto bg-white border-4 border-black p-8 md:p-12 shadow-[20px_20px_0px_0px_black] relative">
<div className="absolute -top-6 -right-6 bg-black text-white px-6 py-2 rotate-3 font-bold uppercase tracking-widest border-2 border-white shadow-lg">
                Лучшая цена
            </div>
<h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter mb-2 text-center">Купить Билет</h2>
<p className="text-center text-zinc-500 font-bold uppercase tracking-wide mb-10">Пропусти очередь и проходи сразу</p>
<form className="space-y-6" onsubmit="event.preventDefault();">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="group">
<label className="block text-xs font-bold uppercase mb-2 ml-1">Дата</label>
<div className="relative">
<input className="w-full bg-zinc-100 border-2 border-black p-4 font-bold focus:outline-none focus:ring-4 focus:ring-[#ccff00] transition-shadow" type="date"/>
</div>
</div>
<div className="group">
<label className="block text-xs font-bold uppercase mb-2 ml-1">Тип Билета</label>
<div className="relative">
<select className="w-full bg-zinc-100 border-2 border-black p-4 font-bold appearance-none cursor-pointer focus:outline-none focus:ring-4 focus:ring-[#ccff00] transition-shadow">
<option>Взрослый — 800₽</option>
<option>Детский — 400₽</option>
<option>Льготный — 300₽</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" icon="lucide:chevron-down"></iconify-icon>
</div>
</div>
</div>
<div className="py-4">
<div className="flex justify-between items-center mb-4">
<label className="text-xs font-bold uppercase">Количество персон</label>
<span className="text-2xl font-black bg-black text-[#ccff00] px-3 py-1" id="count-display">1</span>
</div>
<input className="w-full h-4 bg-zinc-200 rounded-none appearance-none cursor-pointer border-2 border-black accent-black" max="10" min="1" oninput="document.getElementById('count-display').innerText = this.value" type="range" value="1"/>
</div>
<div className="flex items-center gap-3">
<div className="relative flex items-center">
<input className="peer h-6 w-6 appearance-none border-2 border-black bg-white checked:bg-black transition-colors cursor-pointer" id="agree" type="checkbox"/>
<iconify-icon className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[#ccff00] opacity-0 peer-checked:opacity-100 pointer-events-none" icon="lucide:check"></iconify-icon>
</div>
<label className="text-sm font-bold uppercase cursor-pointer select-none" htmlFor="agree">Согласен с правилами посещения</label>
</div>
<button className="w-full bg-black text-white text-xl font-bold uppercase py-5 hover:bg-[#ff4d00] hover:text-black transition-colors border-2 border-transparent hover:border-black mt-4">
                    Перейти к оплате
                </button>
</form>
</div>
</section>

<footer className="bg-black text-white pt-20 pb-10 px-4 border-t-8 border-[#ccff00] overflow-hidden">
<div className="max-w-7xl mx-auto relative">

<div className="absolute -top-10 right-0 opacity-10 pointer-events-none select-none">
<span className="text-[15rem] leading-none font-black tracking-tighter text-[#ccff00]">ZOO</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10 mb-16">
<div className="col-span-1 md:col-span-2">
<h3 className="text-3xl font-bold uppercase tracking-tight mb-6">Остались вопросы?</h3>
<p className="text-zinc-400 mb-6 max-w-sm">Подпишитесь на наши новости, чтобы первыми узнавать о новых животных и мероприятиях.</p>
<div className="flex gap-2">
<input className="bg-zinc-900 border border-zinc-700 px-4 py-3 w-full focus:outline-none focus:border-[#ccff00] text-white placeholder-zinc-600" placeholder="Ваш email" type="email"/>
<button className="bg-[#ccff00] text-black px-6 font-bold uppercase hover:bg-white transition-colors">OK</button>
</div>
</div>
<div>
<h4 className="text-[#ccff00] font-bold uppercase tracking-widest mb-6 text-sm">Карта Сайта</h4>
<ul className="space-y-3 font-medium text-zinc-400">
<li><a className="hover:text-white transition-colors" href="#">Главная</a></li>
<li><a className="hover:text-white transition-colors" href="#animals">Животные</a></li>
<li><a className="hover:text-white transition-colors" href="#tickets">Билеты</a></li>
<li><a className="hover:text-white transition-colors" href="#">Контакты</a></li>
</ul>
</div>
<div>
<h4 className="text-[#ccff00] font-bold uppercase tracking-widest mb-6 text-sm">Соцсети</h4>
<div className="flex gap-4">
<a className="w-12 h-12 border border-zinc-700 flex items-center justify-center hover:bg-[#ccff00] hover:text-black hover:border-[#ccff00] transition-all" href="#"><iconify-icon icon="lucide:instagram" width="20"></iconify-icon></a>
<a className="w-12 h-12 border border-zinc-700 flex items-center justify-center hover:bg-[#ccff00] hover:text-black hover:border-[#ccff00] transition-all" href="#"><iconify-icon icon="lucide:facebook" width="20"></iconify-icon></a>
<a className="w-12 h-12 border border-zinc-700 flex items-center justify-center hover:bg-[#ccff00] hover:text-black hover:border-[#ccff00] transition-all" href="#"><iconify-icon icon="lucide:twitter" width="20"></iconify-icon></a>
</div>
</div>
</div>
<div className="border-t border-zinc-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs font-mono text-zinc-500 uppercase tracking-widest">
<p>© 2023 City Zoo. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-white" href="#">Privacy</a>
<a className="hover:text-white" href="#">Terms</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
