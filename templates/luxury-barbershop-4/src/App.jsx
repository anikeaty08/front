import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 bg-neutral-950/80 backdrop-blur-md border-b border-neutral-900 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="text-neutral-100 text-2xl tracking-tighter font-medium flex items-center gap-2" href="#">
                BonitroP
            </a>

<div className="hidden md:flex items-center gap-8 text-sm">
<a className="hover:text-neutral-100 transition-colors" href="#about">За нас</a>
<a className="hover:text-neutral-100 transition-colors" href="#services">Услуги</a>
<a className="hover:text-neutral-100 transition-colors" href="#gallery">Галерия</a>
<a className="hover:text-neutral-100 transition-colors" href="#contact">Контакти</a>
<div className="flex items-center gap-2 border-l border-neutral-800 pl-8">
<span className="text-neutral-100 font-medium">BG</span>
<span className="text-neutral-700">EN</span>
</div>
</div>

<div className="flex items-center gap-4">
<a className="hidden md:inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium bg-neutral-100 text-neutral-950 rounded-lg hover:bg-white transition-colors" href="#booking">
                    Запази час
                </a>
<button className="md:hidden text-neutral-100">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<section className="relative pt-40 pb-24 md:pt-52 md:pb-32 px-6 hero-glow overflow-hidden">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
<div className="flex-1 z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs mb-8">
<span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                    Приемаме нови резервации
                </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl tracking-tighter font-medium text-neutral-100 leading-[1.1] mb-6">
                    Добре дошли в <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-100 to-neutral-500">BonitroP</span>
</h1>
<p className="text-lg md:text-xl text-neutral-500 font-light max-w-2xl mb-10 leading-relaxed">
                    Луксозен барбершоп в Пловдив. Безкомпромисно качество в мъжките подстригвания, традиционно бръснене и прецизна грижа за брада.
                </p>
<div className="flex flex-wrap items-center gap-4">
<a className="px-6 py-3 text-sm font-medium bg-neutral-100 text-neutral-950 rounded-lg hover:bg-white transition-colors flex items-center gap-2" href="#booking">
                        Запази час
                        <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="px-6 py-3 text-sm font-medium bg-transparent border border-neutral-800 text-neutral-100 rounded-lg hover:bg-neutral-900 transition-colors" href="#services">
                        Виж услуги
                    </a>
</div>
</div>
<div className="flex-1 w-full relative">
<div className="aspect-[4/5] md:aspect-square rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900 relative z-10">
<img alt="Интериор на барбершоп" className="w-full h-full object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700" src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
</div>

<div className="absolute -bottom-8 -left-8 w-64 h-64 bg-neutral-800/50 rounded-full blur-3xl -z-10"></div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-neutral-900" id="about">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div className="grid grid-cols-2 gap-4">
<img alt="Барбер" className="rounded-xl w-full aspect-square object-cover border border-neutral-800 grayscale hover:grayscale-0 transition-all duration-500 mt-8" src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<img alt="Инструменти" className="rounded-xl w-full aspect-square object-cover border border-neutral-800 grayscale hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>
<div>
<h2 className="text-xs font-medium tracking-widest text-neutral-500 uppercase mb-3">За нас / About</h2>
<h3 className="text-3xl md:text-4xl tracking-tight font-medium text-neutral-100 mb-6">Повече от просто подстригване. Ритуал.</h3>
<p className="text-base text-neutral-400 mb-6 leading-relaxed">
                        В BonitroP вярваме, че грижата за мъжа е изкуство. Създадохме пространство, където модерният стил среща класическите бръснарски традиции. Нашата мисия е да ви предоставим не просто услуга, а преживяване, което ви кара да се чувствате и изглеждате по най-добрия начин.
                    </p>
<p className="text-base text-neutral-400 mb-8 leading-relaxed">
                        От първокласните инструменти до премиум козметиката, всеки детайл е внимателно подбран за вашия комфорт.
                    </p>
<div className="flex items-center gap-8 border-t border-neutral-900 pt-8">
<div>
<div className="text-3xl font-medium text-neutral-100 mb-1 tracking-tight">5+</div>
<div className="text-xs text-neutral-500">Години опит</div>
</div>
<div>
<div className="text-3xl font-medium text-neutral-100 mb-1 tracking-tight">100%</div>
<div className="text-xs text-neutral-500">Професионализъм</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-neutral-900 bg-neutral-950/50" id="services">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div>
<h2 className="text-xs font-medium tracking-widest text-neutral-500 uppercase mb-3">Услуги / Services</h2>
<h3 className="text-3xl md:text-4xl tracking-tight font-medium text-neutral-100">Нашите Услуги</h3>
</div>
<a className="text-sm text-neutral-100 hover:text-neutral-400 transition-colors flex items-center gap-1 group" href="#booking">
                    Запази час сега 
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="p-6 md:p-8 rounded-2xl bg-neutral-900/40 border border-neutral-800/60 hover:border-neutral-700 transition-colors group flex flex-col justify-between h-full">
<div>
<div className="w-12 h-12 rounded-xl bg-neutral-800/50 flex items-center justify-center text-neutral-300 mb-6 group-hover:text-white group-hover:bg-neutral-800 transition-colors">
<iconify-icon icon="solar:scissors-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h4 className="text-xl font-medium text-neutral-100 tracking-tight mb-2">Мъжко подстригване</h4>
<p className="text-sm text-neutral-500 mb-6 line-clamp-2">Класическо или модерно подстригване, съобразено с формата на лицето и вашите предпочитания.</p>
</div>
<div className="flex items-center justify-between mt-auto pt-6 border-t border-neutral-800/50">
<span className="text-lg font-medium text-neutral-100">25 лв</span>
<a className="text-xs bg-neutral-800 text-neutral-300 px-3 py-1.5 rounded-md hover:bg-neutral-700 hover:text-white transition-colors" href="#booking">Избери</a>
</div>
</div>

<div className="p-6 md:p-8 rounded-2xl bg-neutral-900/40 border border-neutral-800/60 hover:border-neutral-700 transition-colors group flex flex-col justify-between h-full">
<div>
<div className="w-12 h-12 rounded-xl bg-neutral-800/50 flex items-center justify-center text-neutral-300 mb-6 group-hover:text-white group-hover:bg-neutral-800 transition-colors">
<iconify-icon icon="solar:magic-stick-3-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h4 className="text-xl font-medium text-neutral-100 tracking-tight mb-2">Fade</h4>
<p className="text-sm text-neutral-500 mb-6 line-clamp-2">Прецизно преливане от нула (skin fade) или според желанието, за безупречен и изчистен вид.</p>
</div>
<div className="flex items-center justify-between mt-auto pt-6 border-t border-neutral-800/50">
<span className="text-lg font-medium text-neutral-100">28 лв</span>
<a className="text-xs bg-neutral-800 text-neutral-300 px-3 py-1.5 rounded-md hover:bg-neutral-700 hover:text-white transition-colors" href="#booking">Избери</a>
</div>
</div>

<div className="p-6 md:p-8 rounded-2xl bg-neutral-900/40 border border-neutral-800/60 hover:border-neutral-700 transition-colors group flex flex-col justify-between h-full">
<div>
<div className="w-12 h-12 rounded-xl bg-neutral-800/50 flex items-center justify-center text-neutral-300 mb-6 group-hover:text-white group-hover:bg-neutral-800 transition-colors">
<iconify-icon icon="solar:user-rounded-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h4 className="text-xl font-medium text-neutral-100 tracking-tight mb-2">Подстригване + брада</h4>
<p className="text-sm text-neutral-500 mb-6 line-clamp-2">Пълен пакет за перфектна визия. Включва подстригване и оформяне на брада с гореща кърпа.</p>
</div>
<div className="flex items-center justify-between mt-auto pt-6 border-t border-neutral-800/50">
<span className="text-lg font-medium text-neutral-100">35 лв</span>
<a className="text-xs bg-neutral-800 text-neutral-300 px-3 py-1.5 rounded-md hover:bg-neutral-700 hover:text-white transition-colors" href="#booking">Избери</a>
</div>
</div>

<div className="p-6 md:p-8 rounded-2xl bg-neutral-900/40 border border-neutral-800/60 hover:border-neutral-700 transition-colors group flex flex-col justify-between h-full">
<div>
<div className="w-12 h-12 rounded-xl bg-neutral-800/50 flex items-center justify-center text-neutral-300 mb-6 group-hover:text-white group-hover:bg-neutral-800 transition-colors">
<iconify-icon icon="solar:ruler-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h4 className="text-xl font-medium text-neutral-100 tracking-tight mb-2">Оформяне на брада</h4>
<p className="text-sm text-neutral-500 mb-6 line-clamp-2">Професионално скъсяване, оформяне на контури и подхранване с висококачествени масла.</p>
</div>
<div className="flex items-center justify-between mt-auto pt-6 border-t border-neutral-800/50">
<span className="text-lg font-medium text-neutral-100">15 лв</span>
<a className="text-xs bg-neutral-800 text-neutral-300 px-3 py-1.5 rounded-md hover:bg-neutral-700 hover:text-white transition-colors" href="#booking">Избери</a>
</div>
</div>

<div className="p-6 md:p-8 rounded-2xl bg-neutral-900/40 border border-neutral-800/60 hover:border-neutral-700 transition-colors group flex flex-col justify-between h-full">
<div>
<div className="w-12 h-12 rounded-xl bg-neutral-800/50 flex items-center justify-center text-neutral-300 mb-6 group-hover:text-white group-hover:bg-neutral-800 transition-colors">
<iconify-icon icon="solar:waterdrop-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h4 className="text-xl font-medium text-neutral-100 tracking-tight mb-2">Бръснене с бръснач</h4>
<p className="text-sm text-neutral-500 mb-6 line-clamp-2">Традиционно гладко бръснене с бръснач, гореща кърпа и успокояващ афтършейв балсам.</p>
</div>
<div className="flex items-center justify-between mt-auto pt-6 border-t border-neutral-800/50">
<span className="text-lg font-medium text-neutral-100">20 лв</span>
<a className="text-xs bg-neutral-800 text-neutral-300 px-3 py-1.5 rounded-md hover:bg-neutral-700 hover:text-white transition-colors" href="#booking">Избери</a>
</div>
</div>

<div className="p-6 md:p-8 rounded-2xl bg-neutral-900/40 border border-neutral-800/60 hover:border-neutral-700 transition-colors group flex flex-col justify-between h-full">
<div>
<div className="w-12 h-12 rounded-xl bg-neutral-800/50 flex items-center justify-center text-neutral-300 mb-6 group-hover:text-white group-hover:bg-neutral-800 transition-colors">
<iconify-icon icon="solar:bath-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h4 className="text-xl font-medium text-neutral-100 tracking-tight mb-2">Измиване и стилизиране</h4>
<p className="text-sm text-neutral-500 mb-6 line-clamp-2">Освежаващо измиване на косата с масаж на скалпа и стилизиране с премиум продукти.</p>
</div>
<div className="flex items-center justify-between mt-auto pt-6 border-t border-neutral-800/50">
<span className="text-lg font-medium text-neutral-100">10 лв</span>
<a className="text-xs bg-neutral-800 text-neutral-300 px-3 py-1.5 rounded-md hover:bg-neutral-700 hover:text-white transition-colors" href="#booking">Избери</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-neutral-900 relative" id="booking">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&amp;fit=crop&amp;q=80&amp;w=2000')] bg-cover bg-center opacity-5 mix-blend-screen pointer-events-none"></div>
<div className="max-w-3xl mx-auto relative z-10">
<div className="text-center mb-12">
<h2 className="text-xs font-medium tracking-widest text-neutral-500 uppercase mb-3">Записване / Booking</h2>
<h3 className="text-3xl md:text-4xl tracking-tight font-medium text-neutral-100">Запази своя час</h3>
</div>
<form className="bg-neutral-900/80 backdrop-blur-md border border-neutral-800 rounded-2xl p-8 md:p-12 shadow-2xl">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">

<div className="flex flex-col gap-2">
<label className="text-xs font-medium text-neutral-400">Име и Фамилия</label>
<input className="bg-transparent border-b border-neutral-800 py-2 text-sm text-neutral-100 placeholder:text-neutral-700 focus:outline-none focus:border-neutral-400 transition-colors" placeholder="Иван Иванов" type="text"/>
</div>

<div className="flex flex-col gap-2">
<label className="text-xs font-medium text-neutral-400">Телефонен номер</label>
<input className="bg-transparent border-b border-neutral-800 py-2 text-sm text-neutral-100 placeholder:text-neutral-700 focus:outline-none focus:border-neutral-400 transition-colors" placeholder="089 XXXXXXX" type="tel"/>
</div>

<div className="flex flex-col gap-2 md:col-span-2">
<label className="text-xs font-medium text-neutral-400">Избери услуга</label>
<select className="bg-transparent border-b border-neutral-800 py-2 text-sm text-neutral-100 focus:outline-none focus:border-neutral-400 transition-colors appearance-none cursor-pointer">
<option className="bg-neutral-900" disabled="" selected="" value="">Избери от списъка...</option>
<option className="bg-neutral-900" value="1">Мъжко подстригване — 25 лв</option>
<option className="bg-neutral-900" value="2">Fade — 28 лв</option>
<option className="bg-neutral-900" value="3">Подстригване + брада — 35 лв</option>
<option className="bg-neutral-900" value="4">Оформяне на брада — 15 лв</option>
<option className="bg-neutral-900" value="5">Бръснене с бръснач — 20 лв</option>
<option className="bg-neutral-900" value="6">Измиване и стилизиране — 10 лв</option>
</select>
</div>

<div className="flex flex-col gap-2">
<label className="text-xs font-medium text-neutral-400">Дата</label>
<input className="bg-transparent border-b border-neutral-800 py-2 text-sm text-neutral-100 focus:outline-none focus:border-neutral-400 transition-colors [color-scheme:dark]" type="date"/>
</div>

<div className="flex flex-col gap-2">
<label className="text-xs font-medium text-neutral-400">Час</label>
<select className="bg-transparent border-b border-neutral-800 py-2 text-sm text-neutral-100 focus:outline-none focus:border-neutral-400 transition-colors appearance-none cursor-pointer">
<option className="bg-neutral-900" disabled="" selected="" value="">Избери час...</option>
<option className="bg-neutral-900" value="10:00">10:00</option>
<option className="bg-neutral-900" value="11:00">11:00</option>
<option className="bg-neutral-900" value="12:00">12:00</option>
<option className="bg-neutral-900" value="14:00">14:00</option>
<option className="bg-neutral-900" value="15:00">15:00</option>
<option className="bg-neutral-900" value="16:00">16:00</option>
<option className="bg-neutral-900" value="17:00">17:00</option>
<option className="bg-neutral-900" value="18:00">18:00</option>
</select>
</div>
</div>
<button className="w-full bg-neutral-100 text-neutral-950 font-medium py-3 rounded-lg hover:bg-white transition-colors mt-4" type="button">
                    Потвърди и запази
                </button>
<p className="text-xs text-center text-neutral-600 mt-4">Ще получите потвърждение на имейл или SMS.</p>
</form>
</div>
</section>

<section className="py-24 px-6 border-t border-neutral-900" id="gallery">
<div className="max-w-7xl mx-auto">
<div className="flex items-end justify-between mb-12">
<div>
<h2 className="text-xs font-medium tracking-widest text-neutral-500 uppercase mb-3">Галерия / Gallery</h2>
<h3 className="text-3xl md:text-4xl tracking-tight font-medium text-neutral-100">Наши работи</h3>
</div>
<a className="hidden md:inline-block text-sm text-neutral-400 hover:text-neutral-100 transition-colors" href="#">
                    Виж цялата галерия →
                </a>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
<div className="aspect-[4/5] rounded-xl overflow-hidden bg-neutral-900 border border-neutral-800">
<img alt="Подстригване 1" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="aspect-[4/5] rounded-xl overflow-hidden bg-neutral-900 border border-neutral-800 md:mt-12">
<img alt="Подстригване 2" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1593702275687-f8b402bf1fb5?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="aspect-[4/5] rounded-xl overflow-hidden bg-neutral-900 border border-neutral-800">
<img alt="Подстригване 3" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="aspect-[4/5] rounded-xl overflow-hidden bg-neutral-900 border border-neutral-800 md:mt-12">
<img alt="Подстригване 4" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
</div>
<a className="md:hidden mt-8 block text-center text-sm text-neutral-400 hover:text-neutral-100 transition-colors" href="#">
                Виж цялата галерия →
            </a>
</div>
</section>

<section className="py-24 px-6 border-t border-neutral-900 bg-neutral-950/50" id="contact">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
<div>
<h2 className="text-xs font-medium tracking-widest text-neutral-500 uppercase mb-3">Контакти / Contact</h2>
<h3 className="text-3xl md:text-4xl tracking-tight font-medium text-neutral-100 mb-10">Къде да ни намерите</h3>
<div className="space-y-8">

<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center text-neutral-400 shrink-0 border border-neutral-800">
<iconify-icon icon="solar:map-point-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-neutral-100 mb-1">Адрес</div>
<div className="text-sm text-neutral-500">гр. Пловдив<br/>ул. Куджите</div>
</div>
</div>

<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center text-neutral-400 shrink-0 border border-neutral-800">
<iconify-icon icon="solar:phone-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-neutral-100 mb-1">Телефон</div>
<a className="text-sm text-neutral-500 hover:text-neutral-300 transition-colors" href="tel:08967676767">089 676767 67</a>
</div>
</div>

<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center text-neutral-400 shrink-0 border border-neutral-800">
<iconify-icon icon="solar:letter-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-neutral-100 mb-1">Имейл</div>
<a className="text-sm text-neutral-500 hover:text-neutral-300 transition-colors" href="mailto:hello@bonitrop.bg">hello@bonitrop.bg</a>
</div>
</div>

<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center text-neutral-400 shrink-0 border border-neutral-800">
<iconify-icon icon="solar:camera-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-neutral-100 mb-1">Instagram</div>
<a className="text-sm text-neutral-500 hover:text-white transition-colors" href="#">@mitkoegej69</a>
</div>
</div>
</div>
</div>

<div className="w-full h-[400px] md:h-full bg-neutral-900 border border-neutral-800 rounded-2xl flex flex-col items-center justify-center text-neutral-600 p-6 min-h-[300px]">
<iconify-icon className="mb-4 opacity-50" icon="solar:map-linear" strokeWidth="1" width="48"></iconify-icon>
<span className="text-sm font-medium">Интерактивна карта</span>
<span className="text-xs mt-2 text-center max-w-[200px]">Тук ще бъде вградена Google карта с локацията на обекта.</span>
</div>
</div>
</section>

<footer className="py-8 border-t border-neutral-900 px-6">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
<div className="text-neutral-100 text-lg tracking-tighter font-medium">
                BonitroP
            </div>
<div className="text-xs text-neutral-600">
                © 2023 BonitroP Barbershop. Всички права запазени.
            </div>
<div className="flex gap-4 text-xs text-neutral-600">
<a className="hover:text-neutral-300 transition-colors" href="#">Политика за поверителност</a>
<a className="hover:text-neutral-300 transition-colors" href="#">Общи условия</a>
</div>
</div>
</footer>

    </>
  );
}
