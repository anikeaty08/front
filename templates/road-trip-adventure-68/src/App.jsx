import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
accent: {
400: '#fbbf24',
500: '#f59e0b',
600: '#d97706',
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Language Toggle Logic
        function toggleLanguage() {
            const body = document.body;
            if (body.classList.contains('lang-ru')) {
                body.classList.remove('lang-ru');
                body.classList.add('lang-en');
            } else {
                body.classList.remove('lang-en');
                body.classList.add('lang-ru');
            }
        }

        // Route Tabs Logic
        function switchRoute(routeId) {
            const miamiToLa = document.getElementById('route-miami-la');
            const laToMiami = document.getElementById('route-la-miami');
            const btnMiamiLa = document.getElementById('btn-miami-la');
            const btnLaMiami = document.getElementById('btn-la-miami');

            const activeClasses = ['font-semibold', 'text-neutral-950', 'bg-accent-500', 'shadow-[0_0_15px_rgba(245,158,11,0.2)]'];
            const inactiveClasses = ['font-medium', 'text-neutral-400', 'hover:text-white'];

            if (routeId === 'miami-la') {
                // Show Miami -> LA
                miamiToLa.classList.remove('hidden');
                laToMiami.classList.add('hidden');
                
                // Style buttons
                btnMiamiLa.classList.remove(...inactiveClasses);
                btnMiamiLa.classList.add(...activeClasses);
                
                btnLaMiami.classList.remove(...activeClasses);
                btnLaMiami.classList.add(...inactiveClasses);
            } else {
                // Show LA -> Miami
                laToMiami.classList.remove('hidden');
                miamiToLa.classList.add('hidden');
                
                // Style buttons
                btnLaMiami.classList.remove(...inactiveClasses);
                btnLaMiami.classList.add(...activeClasses);
                
                btnMiamiLa.classList.remove(...activeClasses);
                btnMiamiLa.classList.add(...inactiveClasses);
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 bg-neutral-950/80 backdrop-blur-md border-b border-white/5">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="text-neutral-100 font-semibold tracking-tighter text-xs sm:text-sm uppercase leading-tight md:text-base">
                Трансконтинентальное<br className="sm:hidden"/> Путешествие
            </div>
<div className="flex items-center gap-6">
<button className="text-xs font-medium text-neutral-400 hover:text-neutral-100 transition-colors uppercase tracking-widest flex items-center gap-2" onclick="toggleLanguage()">
<iconify-icon className="text-base" icon="solar:global-linear" strokeWidth="1.5"></iconify-icon>
<span className="lang-ru">ENG</span>
<span className="lang-en">РУС</span>
</button>
<a className="hidden md:inline-flex bg-white/10 hover:bg-white/15 text-white text-xs font-medium py-2 px-4 rounded-full transition-all border border-white/10" href="#apply">
<span className="lang-ru">Занять место</span>
<span className="lang-en">Reserve spot</span>
</a>
</div>
</div>
</nav>

<section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
<div className="absolute inset-0 z-0">
<img alt="Desert Road" className="w-full h-full object-cover opacity-40" src="https://images.unsplash.com/photo-1516939884455-1445c8652f83?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-transparent"></div>
<div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-transparent to-neutral-950"></div>
</div>
<div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-accent-400 text-xs font-medium mb-8 backdrop-blur-sm">
<iconify-icon icon="solar:fire-linear" strokeWidth="1.5"></iconify-icon>
<span className="lang-ru">Осталось 4 места на сентябрь</span>
<span className="lang-en">4 spots left for September</span>
</div>
<h1 className="text-5xl md:text-7xl font-semibold text-white tracking-tighter leading-tight mb-6">
<span className="lang-ru">Настоящее<br/>дорожное приключение</span>
<span className="lang-en">The Ultimate<br/>Road Trip Experience</span>
</h1>
<p className="text-lg md:text-xl text-neutral-400 max-w-2xl mb-10 font-light">
<span className="lang-ru">10 дней через США на хиппи-басе. Забудьте о скучных турах. Только дикая природа, национальные парки, кемпинг под звездами и компания единомышленников.</span>
<span className="lang-en">10 days across the USA on a hippie bus. Forget boring tours. Only wild nature, national parks, camping under the stars, and a small group of like-minded people.</span>
</p>
<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
<a className="inline-flex justify-center items-center gap-2 bg-accent-500 hover:bg-accent-400 text-neutral-950 text-base font-semibold py-3 px-8 rounded-lg transition-all" href="#apply">
<span className="lang-ru">Присоединиться</span>
<span className="lang-en">Join the Trip</span>
<iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="inline-flex justify-center items-center gap-2 bg-white/5 hover:bg-white/10 text-white border border-white/10 text-base font-medium py-3 px-8 rounded-lg transition-all" href="#route">
<span className="lang-ru">Смотреть маршрут</span>
<span className="lang-en">View Route</span>
</a>
</div>
</div>
</section>

<section className="py-24 relative">
<div className="max-w-6xl mx-auto px-6 relative z-10">
<div className="mb-16 text-center">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tighter mb-4">
<span className="lang-ru">Больше, чем просто тур</span>
<span className="lang-en">More than just a tour</span>
</h2>
<p className="text-sm text-neutral-400">
<span className="lang-ru">Мы создали формат, в котором вы — герой собственного фильма.</span>
<span className="lang-en">We created a format where you are the hero of your own movie.</span>
</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="p-6 rounded-2xl bg-neutral-900/50 border border-white/5 hover:bg-neutral-900 transition-colors">
<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-accent-400 mb-6">
<iconify-icon className="text-xl" icon="solar:bus-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2 tracking-tight">
<span className="lang-ru">Хиппи-бас</span>
<span className="lang-en">Hippie Bus</span>
</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
<span className="lang-ru">Передвигаемся на атмосферном кастомном автобусе. Это наш дом, транспорт и место для тусовок.</span>
<span className="lang-en">Travel in an atmospheric custom bus. It's our home, transport, and hangout spot.</span>
</p>
</div>
<div className="p-6 rounded-2xl bg-neutral-900/50 border border-white/5 hover:bg-neutral-900 transition-colors">
<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-accent-400 mb-6">
<iconify-icon className="text-xl" icon="solar:users-group-rounded-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2 tracking-tight">
<span className="lang-ru">Своя банда</span>
<span className="lang-en">Small Crew</span>
</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
<span className="lang-ru">Группа до 12 человек. Без случайных зевак. Только молодые и открытые к приключениям люди.</span>
<span className="lang-en">Group up to 12 people. No random tourists. Only young and adventurous individuals.</span>
</p>
</div>
<div className="p-6 rounded-2xl bg-neutral-900/50 border border-white/5 hover:bg-neutral-900 transition-colors">
<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-accent-400 mb-6">
<iconify-icon className="text-xl" icon="solar:moon-stars-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2 tracking-tight">
<span className="lang-ru">Настоящий кемпинг</span>
<span className="lang-en">Real Camping</span>
</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
<span className="lang-ru">Спим в палатках под звездным небом, готовим на костре, встречаем рассветы в каньонах.</span>
<span className="lang-en">Sleep in tents under the stars, cook over a campfire, watch sunrises in canyons.</span>
</p>
</div>
<div className="p-6 rounded-2xl bg-neutral-900/50 border border-white/5 hover:bg-neutral-900 transition-colors">
<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-accent-400 mb-6">
<iconify-icon className="text-xl" icon="solar:wallet-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2 tracking-tight">
<span className="lang-ru">Бюджетно</span>
<span className="lang-en">Budget Friendly</span>
</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
<span className="lang-ru">Отказ от отелей делает поездку доступной, а эмоции — более глубокими и настоящими.</span>
<span className="lang-en">Skipping hotels makes the trip affordable, and emotions deeper and more genuine.</span>
</p>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-neutral-950/50" id="route">
<div className="max-w-5xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tighter mb-8 text-center">
<span className="lang-ru">Эпичный маршрут</span>
<span className="lang-en">Epic Route</span>
</h2>

<div className="flex flex-wrap justify-center gap-2 mb-12 max-w-4xl mx-auto">
<span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] sm:text-xs text-neutral-400 font-medium tracking-wide">Miami, FL</span>
<span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] sm:text-xs text-neutral-400 font-medium tracking-wide">St Augustine, FL</span>
<span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] sm:text-xs text-neutral-400 font-medium tracking-wide">New Orleans, LA</span>
<span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] sm:text-xs text-neutral-400 font-medium tracking-wide">Dallas, TX</span>
<span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] sm:text-xs text-neutral-400 font-medium tracking-wide">Great Sand Dunes NP, CO</span>
<span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] sm:text-xs text-neutral-400 font-medium tracking-wide">Messa Verde NP, CO</span>
<span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] sm:text-xs text-neutral-400 font-medium tracking-wide">Arches NP, UT</span>
<span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] sm:text-xs text-neutral-400 font-medium tracking-wide">Monument Valley NP, UT</span>
<span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] sm:text-xs text-neutral-400 font-medium tracking-wide">Las Vegas, NV</span>
<span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] sm:text-xs text-neutral-400 font-medium tracking-wide">Los Angeles, CA</span>
<span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] sm:text-xs text-neutral-400 font-medium tracking-wide">Grand Canyon NP, AZ</span>
<span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] sm:text-xs text-neutral-400 font-medium tracking-wide">Zion NP, UT</span>
</div>

<div className="flex justify-center mb-16">
<div className="inline-flex bg-white/5 border border-white/10 rounded-full p-1.5 backdrop-blur-sm">
<button className="px-5 sm:px-8 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-neutral-950 bg-accent-500 transition-all shadow-[0_0_15px_rgba(245,158,11,0.2)]" id="btn-miami-la" onclick="switchRoute('miami-la')">
<span className="lang-ru">Майами ➔ Лос-Анджелес</span>
<span className="lang-en">Miami ➔ Los Angeles</span>
</button>
<button className="px-5 sm:px-8 py-2.5 rounded-full text-xs sm:text-sm font-medium text-neutral-400 hover:text-white transition-all" id="btn-la-miami" onclick="switchRoute('la-miami')">
<span className="lang-ru">Лос-Анджелес ➔ Майами</span>
<span className="lang-en">Los Angeles ➔ Miami</span>
</button>
</div>
</div>

<div className="relative border-l border-white/10 ml-4 md:ml-0 md:pl-0 space-y-12 block" id="route-miami-la">

<div className="relative pl-8 md:pl-0 md:flex md:gap-8 items-start group">
<div className="absolute left-[-5px] md:left-[50%] md:-ml-[5px] top-1 w-2.5 h-2.5 rounded-full bg-accent-500 shadow-[0_0_10px_rgba(245,158,11,0.5)] z-10 group-hover:scale-150 transition-transform"></div>
<div className="md:w-1/2 md:text-right md:pr-8 md:pt-0">
<h4 className="text-xl font-medium text-white tracking-tight mb-4">
<span className="lang-ru">День 1</span>
<span className="lang-en">Day 1</span>
</h4>
<div className="space-y-3 text-sm text-neutral-400">
<p className="lang-ru"><span className="text-white font-medium mr-2 text-xs bg-white/10 px-2 py-0.5 rounded">2 PM</span> Встреча в Майами</p>
<p className="lang-en"><span className="text-white font-medium mr-2 text-xs bg-white/10 px-2 py-0.5 rounded">2 PM</span> Meeting in Miami</p>
<p className="lang-ru"><span className="text-white font-medium mr-2 text-xs bg-white/10 px-2 py-0.5 rounded">4 PM - 6 PM</span> Airboat in Everglades поездка на лодке по болоту, поиск аллигаторов в дикой природе</p>
<p className="lang-en"><span className="text-white font-medium mr-2 text-xs bg-white/10 px-2 py-0.5 rounded">4 PM - 6 PM</span> Airboat in Everglades swamp tour, looking for wild alligators</p>
<p className="lang-ru"><span className="text-white font-medium mr-2 text-xs bg-white/10 px-2 py-0.5 rounded">9 PM</span> Кэмпинг в тропическом лесу</p>
<p className="lang-en"><span className="text-white font-medium mr-2 text-xs bg-white/10 px-2 py-0.5 rounded">9 PM</span> Tropical forest camping</p>
</div>
</div>
<div className="hidden md:block w-px h-full bg-white/10 absolute left-1/2 top-0 bottom-0"></div>
<div className="hidden md:block md:w-1/2"></div>
</div>

<div className="relative pl-8 md:pl-0 md:flex md:gap-8 items-start md:flex-row-reverse group">
<div className="absolute left-[-5px] md:left-[50%] md:-ml-[5px] top-1 w-2.5 h-2.5 rounded-full bg-accent-500 shadow-[0_0_10px_rgba(245,158,11,0.5)] z-10 group-hover:scale-150 transition-transform"></div>
<div className="md:w-1/2 md:pl-8 md:pt-0">
<h4 className="text-xl font-medium text-white tracking-tight mb-4">
<span className="lang-ru">День 2</span>
<span className="lang-en">Day 2</span>
</h4>
<div className="space-y-3 text-sm text-neutral-400">
<p className="lang-ru"><span className="text-white font-medium mr-2 text-xs bg-white/10 px-2 py-0.5 rounded">2 PM - 5 PM</span> Blue Springs Ламантины в дикой природе в источниках с бирюзовой водой</p>
<p className="lang-en"><span className="text-white font-medium mr-2 text-xs bg-white/10 px-2 py-0.5 rounded">2 PM - 5 PM</span> Blue Springs, wild manatees in turquoise springs</p>
<p className="lang-ru"><span className="text-white font-medium mr-2 text-xs bg-white/10 px-2 py-0.5 rounded">8 PM - 11 PM</span> St Augustine самый старый город США, прогулка по городу, старинный замок</p>
<p className="lang-en"><span className="text-white font-medium mr-2 text-xs bg-white/10 px-2 py-0.5 rounded">8 PM - 11 PM</span> St Augustine, oldest US city, city walk, ancient fort</p>
<p className="lang-ru"><span className="text-accent-500 font-medium mr-2">•</span>Ночной переезд (душ)</p>
<p className="lang-en"><span className="text-accent-500 font-medium mr-2">•</span>Night drive (shower)</p>
</div>
</div>
<div className="hidden md:block w-px h-full bg-white/10 absolute left-1/2 top-0 bottom-0"></div>
<div className="hidden md:block md:w-1/2"></div>
</div>

<div className="relative pl-8 md:pl-0 md:flex md:gap-8 items-start group">
<div className="absolute left-[-5px] md:left-[50%] md:-ml-[5px] top-1 w-2.5 h-2.5 rounded-full bg-accent-500 shadow-[0_0_10px_rgba(245,158,11,0.5)] z-10 group-hover:scale-150 transition-transform"></div>
<div className="md:w-1/2 md:text-right md:pr-8 md:pt-0">
<h4 className="text-xl font-medium text-white tracking-tight mb-4">
<span className="lang-ru">День 3</span>
<span className="lang-en">Day 3</span>
</h4>
<div className="space-y-3 text-sm text-neutral-400">
<p className="lang-ru"><span className="text-white font-medium mr-2 text-xs bg-white/10 px-2 py-0.5 rounded">9 AM - 10 AM</span> Infinity Space Center космический музей в штате Миссисипи</p>
<p className="lang-en"><span className="text-white font-medium mr-2 text-xs bg-white/10 px-2 py-0.5 rounded">9 AM - 10 AM</span> Infinity Space Center in Mississippi</p>
<p className="lang-ru"><span className="text-white font-medium mr-2 text-xs bg-white/10 px-2 py-0.5 rounded">12 PM - 11 PM</span> New Orleans прогулка по городу, исторический Французский квартал, музей Вуду, поездка на ретро трамвае</p>
<p className="lang-en"><span className="text-white font-medium mr-2 text-xs bg-white/10 px-2 py-0.5 rounded">12 PM - 11 PM</span> New Orleans city walk, historic French Quarter, Voodoo museum, retro tram ride</p>
<p className="lang-ru"><span className="text-accent-500 font-medium mr-2">•</span>Ночной переезд (душ)</p>
<p className="lang-en"><span className="text-accent-500 font-medium mr-2">•</span>Night drive (shower)</p>
</div>
</div>
<div className="hidden md:block w-px h-full bg-white/10 absolute left-1/2 top-0 bottom-0"></div>
<div className="hidden md:block md:w-1/2"></div>
</div>

<div className="relative pl-8 md:pl-0 md:flex md:gap-8 items-start md:flex-row-reverse group">
<div className="absolute left-[-5px] md:left-[50%] md:-ml-[5px] top-1 w-2.5 h-2.5 rounded-full bg-accent-500 shadow-[0_0_10px_rgba(245,158,11,0.5)] z-10 group-hover:scale-150 transition-transform"></div>
<div className="md:w-1/2 md:pl-8 md:pt-0">
<h4 className="text-xl font-medium text-white tracking-tight mb-4">
<span className="lang-ru">День 4</span>
<span className="lang-en">Day 4</span>
</h4>
<div className="space-y-3 text-sm text-neutral-400">
<p className="lang-ru"><span className="text-white font-medium mr-2 text-xs bg-white/10 px-2 py-0.5 rounded">9 AM - 9 PM</span> Даллас, Форт Уорт, прогулка по городу, парад ковбоев и скота, техасское барбекю</p>
<p className="lang-en"><span className="text-white font-medium mr-2 text-xs bg-white/10 px-2 py-0.5 rounded">9 AM - 9 PM</span> Dallas, Fort Worth, city walk, cowboy parade, Texas BBQ</p>
<p className="lang-ru"><span className="text-accent-500 font-medium mr-2">•</span>Ночной переезд (душ)</p>
<p className="lang-en"><span className="text-accent-500 font-medium mr-2">•</span>Night drive (shower)</p>
</div>
</div>
<div className="hidden md:block w-px h-full bg-white/10 absolute left-1/2 top-0 bottom-0"></div>
<div className="hidden md:block md:w-1/2"></div>
</div>

<div className="relative pl-8 md:pl-0 md:flex md:gap-8 items-start group">
<div className="absolute left-[-5px] md:left-[50%] md:-ml-[5px] top-1 w-2.5 h-2.5 rounded-full bg-accent-500 shadow-[0_0_10px_rgba(245,158,11,0.5)] z-10 group-hover:scale-150 transition-transform"></div>
<div className="md:w-1/2 md:text-right md:pr-8 md:pt-0">
<h4 className="text-xl font-medium text-white tracking-tight mb-4">
<span className="lang-ru">День 5</span>
<span className="lang-en">Day 5</span>
</h4>
<div className="space-y-3 text-sm text-neutral-400">
<p className="lang-ru"><span className="text-white font-medium mr-2 text-xs bg-white/10 px-2 py-0.5 rounded">10 AM - 3 PM</span> Great Sand Dunes National Park</p>
<p className="lang-en"><span className="text-white font-medium mr-2 text-xs bg-white/10 px-2 py-0.5 rounded">10 AM - 3 PM</span> Great Sand Dunes National Park</p>
<p className="lang-ru"><span className="text-white font-medium mr-2 text-xs bg-white/10 px-2 py-0.5 rounded">6 PM - 8 PM</span> Pagossa Springs купание в горячих источниках в горах Колорадо</p>
<p className="lang-en"><span className="text-white font-medium mr-2 text-xs bg-white/10 px-2 py-0.5 rounded">6 PM - 8 PM</span> Pagosa Springs hot springs bathing in Colorado</p>
<p className="lang-ru"><span className="text-white font-medium mr-2 text-xs bg-white/10 px-2 py-0.5 rounded">10 PM</span> Кэмпинг в горном лесу</p>
<p className="lang-en"><span className="text-white font-medium mr-2 text-xs bg-white/10 px-2 py-0.5 rounded">10 PM</span> Mountain forest camping</p>
</div>
</div>
<div className="hidden md:block w-px h-full bg-white/10 absolute left-1/2 top-0 bottom-0"></div>
<div className="hidden md:block md:w-1/2"></div>
</div>

<div className="relative pl-8 md:pl-0 md:flex md:gap-8 items-start md:flex-row-reverse group">
<div className="absolute left-[-5px] md:left-[50%] md:-ml-[5px] top-1 w-2.5 h-2.5 rounded-full bg-accent-500 shadow-[0_0_10px_rgba(245,158,11,0.5)] z-10 group-hover:scale-150 transition-transform"></div>
<div className="md:w-1/2 md:pl-8 md:pt-0">
<h4 className="text-xl font-medium text-white tracking-tight mb-4">
<span className="lang-ru">День 6</span>
<span className="lang-en">Day 6</span>
</h4>
<div className="space-y-3 text-sm text-neutral-400">
<p className="lang-ru"><span className="text-white font-medium mr-2 text-xs bg-white/10 px-2 py-0.5 rounded">10 AM - 6 PM</span> Messa Verde National Park заброшенный город Индейцев в скале, хайкинг по горному плато</p>
<p className="lang-en"><span className="text-white font-medium mr-2 text-xs bg-white/10 px-2 py-0.5 rounded">10 AM - 6 PM</span> Mesa Verde National Park ancient cliff dwellings, plateau hike</p>
<p className="lang-ru"><span className="text-white font-medium mr-2 text-xs bg-white/10 px-2 py-0.5 rounded">9 PM</span> Кэмпинг в пустыне (душ)</p>
<p className="lang-en"><span className="text-white font-medium mr-2 text-xs bg-white/10 px-2 py-0.5 rounded">9 PM</span> Desert camping (shower)</p>
</div>
</div>
<div className="hidden md:block w-px h-full bg-white/10 absolute left-1/2 top-0 bottom-0"></div>
<div className="hidden md:block md:w-1/2"></div>
</div>

<div className="relative pl-8 md:pl-0 md:flex md:gap-8 items-start group">
<div className="absolute left-[-5px] md:left-[50%] md:-ml-[5px] top-1 w-2.5 h-2.5 rounded-full bg-accent-500 shadow-[0_0_10px_rgba(245,158,11,0.5)] z-10 group-hover:scale-150 transition-transform"></div>
<div className="md:w-1/2 md:text-right md:pr-8 md:pt-0">
<h4 className="text-xl font-medium text-white tracking-tight mb-4">
<span className="lang-ru">День 7</span>
<span className="lang-en">Day 7</span>
</h4>
<div className="space-y-3 text-sm text-neutral-400">
<p className="lang-ru"><span className="text-white font-medium mr-2 text-xs bg-white/10 px-2 py-0.5 rounded">10 AM - 4 PM</span> Arches National Park хайкинг к самым интересным аркам</p>
<p className="lang-en"><span className="text-white font-medium mr-2 text-xs bg-white/10 px-2 py-0.5 rounded">10 AM - 4 PM</span> Arches National Park, hiking to best arches</p>
<p className="lang-ru"><span className="text-white font-medium mr-2 text-xs bg-white/10 px-2 py-0.5 rounded">4 PM</span> Поездка вдоль реки Колорадо с отвесными скалами</p>
<p className="lang-en"><span className="text-white font-medium mr-2 text-xs bg-white/10 px-2 py-0.5 rounded">4 PM</span> Colorado River drive with sheer cliffs</p>
<p className="lang-ru"><span className="text-white font-medium mr-2 text-xs bg-white/10 px-2 py-0.5 rounded">5 PM</span> Moab прогулка по старому туристическому городу в долине пустыни</p>
<p className="lang-en"><span className="text-white font-medium mr-2 text-xs bg-white/10 px-2 py-0.5 rounded">5 PM</span> Moab historic desert tourist town walk</p>
<p className="lang-ru"><span className="text-white font-medium mr-2 text-xs bg-white/10 px-2 py-0.5 rounded">8 PM</span> Кэмпинг в пустыне с видом на монументы Долины Богов (душ)</p>
<p className="lang-en"><span className="text-white font-medium mr-2 text-xs bg-white/10 px-2 py-0.5 rounded">8 PM</span> Desert camping with Valley of the Gods monuments view (shower)</p>
</div>
</div>
<div className="hidden md:block w-px h-full bg-white/10 absolute left-1/2 top-0 bottom-0"></div>
<div className="hidden md:block md:w-1/2"></div>
</div>

<div className="relative pl-8 md:pl-0 md:flex md:gap-8 items-start md:flex-row-reverse group">
<div className="absolute left-[-5px] md:left-[50%] md:-ml-[5px] top-1 w-2.5 h-2.5 rounded-full bg-accent-500 shadow-[0_0_10px_rgba(245,158,11,0.5)] z-10 group-hover:scale-150 transition-transform"></div>
<div className="md:w-1/2 md:pl-8 md:pt-0">
<h4 className="text-xl font-medium text-white tracking-tight mb-4">
<span className="lang-ru">День 8</span>
<span className="lang-en">Day 8</span>
</h4>
<div className="space-y-3 text-sm text-neutral-400">
<p className="lang-ru"><span className="text-white font-medium mr-2 text-xs bg-white/10 px-2 py-0.5 rounded">12 PM - 2 PM</span> Monument Valley</p>
<p className="lang-en"><span className="text-white font-medium mr-2 text-xs bg-white/10 px-2 py-0.5 rounded">12 PM - 2 PM</span> Monument Valley</p>
<p className="lang-ru"><span className="text-white font-medium mr-2 text-xs bg-white/10 px-2 py-0.5 rounded">5 PM - 8 PM</span> Grand Canyon National Park</p>
<p className="lang-en"><span className="text-white font-medium mr-2 text-xs bg-white/10 px-2 py-0.5 rounded">5 PM - 8 PM</span> Grand Canyon National Park</p>
<p className="lang-ru"><span className="text-accent-500 font-medium mr-2">•</span>Кэмпинг в пустыне</p>
<p className="lang-en"><span className="text-accent-500 font-medium mr-2">•</span>Desert camping</p>
</div>
</div>
<div className="hidden md:block w-px h-full bg-white/10 absolute left-1/2 top-0 bottom-0"></div>
<div className="hidden md:block md:w-1/2"></div>
</div>

<div className="relative pl-8 md:pl-0 md:flex md:gap-8 items-start group">
<div className="absolute left-[-5px] md:left-[50%] md:-ml-[5px] top-1 w-2.5 h-2.5 rounded-full bg-accent-500 shadow-[0_0_10px_rgba(245,158,11,0.5)] z-10 group-hover:scale-150 transition-transform"></div>
<div className="md:w-1/2 md:text-right md:pr-8 md:pt-0">
<h4 className="text-xl font-medium text-white tracking-tight mb-4">
<span className="lang-ru">День 9</span>
<span className="lang-en">Day 9</span>
</h4>
<div className="space-y-3 text-sm text-neutral-400">
<p className="lang-ru"><span className="text-white font-medium mr-2 text-xs bg-white/10 px-2 py-0.5 rounded">12 PM - 6 PM</span> Zion National Park хайкинг по парку с невероятными видами (душ)</p>
<p className="lang-en"><span className="text-white font-medium mr-2 text-xs bg-white/10 px-2 py-0.5 rounded">12 PM - 6 PM</span> Zion National Park hiking with incredible views (shower)</p>
<p className="lang-ru"><span className="text-white font-medium mr-2 text-xs bg-white/10 px-2 py-0.5 rounded">10 PM - 2 AM</span> Las Vegas прогулка по центральному бульвару, шоу, казино, знакомство с ночной жизнью Города грехов</p>
<p className="lang-en"><span className="text-white font-medium mr-2 text-xs bg-white/10 px-2 py-0.5 rounded">10 PM - 2 AM</span> Las Vegas strip walk, shows, casino, Sin City nightlife</p>
<p className="lang-ru"><span className="text-accent-500 font-medium mr-2">•</span>Ночной переезд</p>
<p className="lang-en"><span className="text-accent-500 font-medium mr-2">•</span>Night drive</p>
</div>
</div>
<div className="hidden md:block w-px h-full bg-white/10 absolute left-1/2 top-0 bottom-0"></div>
<div className="hidden md:block md:w-1/2"></div>
</div>

<div className="relative pl-8 md:pl-0 md:flex md:gap-8 items-start md:flex-row-reverse group">
<div className="absolute left-[-5px] md:left-[50%] md:-ml-[5px] top-1 w-2.5 h-2.5 rounded-full bg-accent-500 shadow-[0_0_10px_rgba(245,158,11,0.5)] z-10 group-hover:scale-150 transition-transform"></div>
<div className="md:w-1/2 md:pl-8 md:pt-0">
<h4 className="text-xl font-medium text-white tracking-tight mb-4">
<span className="lang-ru">День 10</span>
<span className="lang-en">Day 10</span>
</h4>
<div className="space-y-3 text-sm text-neutral-400">
<p className="lang-ru"><span className="text-white font-medium mr-2 text-xs bg-white/10 px-2 py-0.5 rounded">9 AM</span> Прибытие на пляж Санта Моника в Лос Анджелесе</p>
<p className="lang-en"><span className="text-white font-medium mr-2 text-xs bg-white/10 px-2 py-0.5 rounded">9 AM</span> Arrival at Santa Monica beach in Los Angeles</p>
</div>
</div>
</div>
</div>

<div className="relative border-l border-white/10 ml-4 md:ml-0 md:pl-0 space-y-12 hidden" id="route-la-miami">

<div className="relative pl-8 md:pl-0 md:flex md:gap-8 items-start group">
<div className="absolute left-[-5px] md:left-[50%] md:-ml-[5px] top-1 w-2.5 h-2.5 rounded-full bg-accent-500 shadow-[0_0_10px_rgba(245,158,11,0.5)] z-10 group-hover:scale-150 transition-transform"></div>
<div className="md:w-1/2 md:text-right md:pr-8 md:pt-0">
<h4 className="text-xl font-medium text-white tracking-tight mb-4">
<span className="lang-ru">День 1</span>
<span className="lang-en">Day 1</span>
</h4>
<div className="space-y-3 text-sm text-neutral-400">
<p className="lang-ru"><span className="text-white font-medium mr-2 text-xs bg-white/10 px-2 py-0.5 rounded">5 PM</span> Отправление с пляжа Санта Моника в Лос Анджелесе</p>
<p className="lang-en"><span className="text-white font-medium mr-2 text-xs bg-white/10 px-2 py-0.5 rounded">5 PM</span> Departure from Santa Monica beach in LA</p>
<p className="lang-ru"><span className="text-white font-medium mr-2 text-xs bg-white/10 px-2 py-0.5 rounded">10 PM - 2 AM</span> Las Vegas прогулка по центральному бульвару, шоу, казино, знакомство с ночной жизнью Города грехов</p>
<p className="lang-en"><span className="text-white font-medium mr-2 text-xs bg-white/10 px-2 py-0.5 rounded">10 PM - 2 AM</span> Las Vegas strip walk, shows, casino, Sin City nightlife</p>
<p className="lang-ru"><span className="text-accent-500 font-medium mr-2">•</span>Ночной переезд (душ)</p>
<p className="lang-en"><span className="text-accent-500 font-medium mr-2">•</span>Night drive (shower)</p>
</div>
</div>
<div className="hidden md:block w-px h-full bg-white/10 absolute left-1/2 top-0 bottom-0"></div>
<div className="hidden md:block md:w-1/2"></div>
</div>

<div className="relative pl-8 md:pl-0 md:flex md:gap-8 items-start md:flex-row-reverse group">
<div className="absolute left-[-5px] md:left-[50%] md:-ml-[5px] top-1 w-2.5 h-2.5 rounded-full bg-accent-500 shadow-[0_0_10px_rgba(245,158,11,0.5)] z-10 group-hover:scale-150 transition-transform"></div>
<div className="md:w-1/2 md:pl-8 md:pt-0">
<h4 className="text-xl font-medium text-white tracking-tight mb-4">
<span className="lang-ru">День 2</span>
<span className="lang-en">Day 2</span>
</h4>
<div className="space-y-3 text-sm text-neutral-400">
<p className="lang-ru"><span className="text-white font-medium mr-2 text-xs bg-white/10 px-2 py-0.5 rounded">12 PM - 6 PM</span> Zion National Park хайкинг по парку с невероятными видами (душ)</p>
<p className="lang-en"><span className="text-white font-medium mr-2 text-xs bg-white/10 px-2 py-0.5 rounded">12 PM - 6 PM</span> Zion National Park hiking with incredible views (shower)</p>
<p className="lang-ru"><span className="text-accent-500 font-medium mr-2">•</span>Кэмпинг в пустыне</p>
<p className="lang-en"><span className="text-accent-500 font-medium mr-2">•</span>Desert camping</p>
</div>
</div>
<div className="hidden md:block w-px h-full bg-white/10 absolute left-1/2 top-0 bottom-0"></div>
<div className="hidden md:block md:w-1/2"></div>
</div>

<div className="relative pl-8 md:pl-0 md:flex md:gap-8 items-start group">
<div className="absolute left-[-5px] md:left-[50%] md:-ml-[5px] top-1 w-2.5 h-2.5 rounded-full bg-accent-500 shadow-[0_0_10px_rgba(245,158,11,0.5)] z-10 group-hover:scale-150 transition-transform"></div>
<div className="md:w-1/2 md:text-right md:pr-8 md:pt-0">
<h4 className="text-xl font-medium text-white tracking-tight mb-4">
<span className="lang-ru">День 3</span>
<span className="lang-en">Day 3</span>
</h4>
<div className="space-y-3 text-sm text-neutral-400">
<p className="lang-ru"><span className="text-white font-medium mr-2 text-xs bg-white/10 px-2 py-0.5 rounded">11 AM - 3 PM</span> Grand Canyon National Park</p>
<p className="lang-en"><span className="text-white font-medium mr-2 text-xs bg-white/10 px-2 py-0.5 rounded">11 AM - 3 PM</span> Grand Canyon National Park</p>
<p className="lang-ru"><span className="text-white font-medium mr-2 text-xs bg-white/10 px-2 py-0.5 rounded">6 PM - 7 PM</span> Monument Valley</p>
<p className="lang-en"><span className="text-white font-medium mr-2 text-xs bg-white/10 px-2 py-0.5 rounded">6 PM - 7 PM</span> Monument Valley</p>
<p className="lang-ru"><span className="text-white font-medium mr-2 text-xs bg-white/10 px-2 py-0.5 rounded">8 PM</span> Кэмпинг в пустыне с видом на монументы Долины Богов</p>
<p className="lang-en"><span className="text-white font-medium mr-2 text-xs bg-white/10 px-2 py-0.5 rounded">8 PM</span> Desert camping with Valley of the Gods monuments view</p>
</div>
</div>
<div className="hidden md:block w-px h-full bg-white/10 absolute left-1/2 top-0 bottom-0"></div>
<div className="hidden md:block md:w-1/2"></div>
</div>

<div className="relative pl-8 md:pl-0 md:flex md:gap-8 items-start md:flex-row-reverse group">
<div className="absolute left-[-5px] md:left-[50%] md:-ml-[5px] top-1 w-2.5 h-2.5 rounded-full bg-accent-500 shadow-[0_0_10px_rgba(245,158,11,0.5)] z-10 group-hover:scale-150 transition-transform"></div>
<div className="md:w-1/2 md:pl-8 md:pt-0">
<h4 className="text-xl font-medium text-white tracking-tight mb-4">
<span className="lang-ru">День 4</span>
<span className="lang-en">Day 4</span>
</h4>
<div className="space-y-3 text-sm text-neutral-400">
<p className="lang-ru"><span className="text-white font-medium mr-2 text-xs bg-white/10 px-2 py-0.5 rounded">12 PM - 5 PM</span> Arches National Park хайкинг к самым интересным аркам</p>
<p className="lang-en"><span className="text-white font-medium mr-2 text-xs bg-white/10 px-2 py-0.5 rounded">12 PM - 5 PM</span> Arches National Park hiking to best arches</p>
<p className="lang-ru"><span className="text-white font-medium mr-2 text-xs bg-white/10 px-2 py-0.5 rounded">6 PM</span> Поездка вдоль реки Колорадо с отвесными скалами</p>
<p className="lang-en"><span className="text-white font-medium mr-2 text-xs bg-white/10 px-2 py-0.5 rounded">6 PM</span> Colorado River drive with sheer cliffs</p>
<p className="lang-ru"><span className="text-white font-medium mr-2 text-xs bg-white/10 px-2 py-0.5 rounded">7 PM - 8 PM</span> Moab прогулка по старому туристическому городу в долине пустыни (душ)</p>
<p className="lang-en"><span className="text-white font-medium mr-2 text-xs bg-white/10 px-2 py-0.5 rounded">7 PM - 8 PM</span> Moab historic desert tourist town walk (shower)</p>
<p className="lang-ru"><span className="text-white font-medium mr-2 text-xs bg-white/10 px-2 py-0.5 rounded">11 PM</span> Кэмпинг в горах</p>
<p className="lang-en"><span className="text-white font-medium mr-2 text-xs bg-white/10 px-2 py-0.5 rounded">11 PM</span> Mountain camping</p>
</div>
</div>
<div className="hidden md:block w-px h-full bg-white/10 absolute left-1/2 top-0 bottom-0"></div>
<div className="hidden md:block md:w-1/2"></div>
</div>

<div className="relative pl-8 md:pl-0 md:flex md:gap-8 items-start group">
<div className="absolute left-[-5px] md:left-[50%] md:-ml-[5px] top-1 w-2.5 h-2.5 rounded-full bg-accent-500 shadow-[0_0_10px_rgba(245,158,11,0.5)] z-10 group-hover:scale-150 transition-transform"></div>
<div className="md:w-1/2 md:text-right md:pr-8 md:pt-0">
<h4 className="text-xl font-medium text-white tracking-tight mb-4">
<span className="lang-ru">День 5</span>
<span className="lang-en">Day 5</span>
</h4>
<div className="space-y-3 text-sm text-neutral-400">
<p className="lang-ru"><span className="text-white font-medium mr-2 text-xs bg-white/10 px-2 py-0.5 rounded">10 AM - 6 PM</span> Messa Verde National Park заброшенный город Индейцев в скале, хайкинг по горному плато</p>
<p className="lang-en"><span className="text-white font-medium mr-2 text-xs bg-white/10 px-2 py-0.5 rounded">10 AM - 6 PM</span> Mesa Verde National Park ancient cliff dwellings, plateau hike</p>
<p className="lang-ru"><span className="text-white font-medium mr-2 text-xs bg-white/10 px-2 py-0.5 rounded">8 PM - 10 PM</span> Pagossa Springs купание в горячих источниках в горах Колорадо</p>
<p className="lang-en"><span className="text-white font-medium mr-2 text-xs bg-white/10 px-2 py-0.5 rounded">8 PM - 10 PM</span> Pagosa Springs hot springs bathing in Colorado</p>
<p className="lang-ru"><span className="text-white font-medium mr-2 text-xs bg-white/10 px-2 py-0.5 rounded">10 PM</span> Кэмпинг в горах</p>
<p className="lang-en"><span className="text-white font-medium mr-2 text-xs bg-white/10 px-2 py-0.5 rounded">10 PM</span> Mountain camping</p>
</div>
</div>
<div className="hidden md:block w-px h-full bg-white/10 absolute left-1/2 top-0 bottom-0"></div>
<div className="hidden md:block md:w-1/2"></div>
</div>

<div className="relative pl-8 md:pl-0 md:flex md:gap-8 items-start md:flex-row-reverse group">
<div className="absolute left-[-5px] md:left-[50%] md:-ml-[5px] top-1 w-2.5 h-2.5 rounded-full bg-accent-500 shadow-[0_0_10px_rgba(245,158,11,0.5)] z-10 group-hover:scale-150 transition-transform"></div>
<div className="md:w-1/2 md:pl-8 md:pt-0">
<h4 className="text-xl font-medium text-white tracking-tight mb-4">
<span className="lang-ru">День 6</span>
<span className="lang-en">Day 6</span>
</h4>
<div className="space-y-3 text-sm text-neutral-400">
<p className="lang-ru"><span className="text-white font-medium mr-2 text-xs bg-white/10 px-2 py-0.5 rounded">1 PM - 5 PM</span> Great Sand Dunes National Park хайкинг по песчаным дюнам</p>
<p className="lang-en"><span className="text-white font-medium mr-2 text-xs bg-white/10 px-2 py-0.5 rounded">1 PM - 5 PM</span> Great Sand Dunes National Park sand dunes hiking</p>
<p className="lang-ru"><span className="text-accent-500 font-medium mr-2">•</span>Ночной переезд (душ)</p>
<p className="lang-en"><span className="text-accent-500 font-medium mr-2">•</span>Night drive (shower)</p>
</div>
</div>
<div className="hidden md:block w-px h-full bg-white/10 absolute left-1/2 top-0 bottom-0"></div>
<div className="hidden md:block md:w-1/2"></div>
</div>

<div className="relative pl-8 md:pl-0 md:flex md:gap-8 items-start group">
<div className="absolute left-[-5px] md:left-[50%] md:-ml-[5px] top-1 w-2.5 h-2.5 rounded-full bg-accent-500 shadow-[0_0_10px_rgba(245,158,11,0.5)] z-10 group-hover:scale-150 transition-transform"></div>
<div className="md:w-1/2 md:text-right md:pr-8 md:pt-0">
<h4 className="text-xl font-medium text-white tracking-tight mb-4">
<span className="lang-ru">День 7</span>
<span className="lang-en">Day 7</span>
</h4>
<div className="space-y-3 text-sm text-neutral-400">
<p className="lang-ru"><span className="text-white font-medium mr-2 text-xs bg-white/10 px-2 py-0.5 rounded">9 AM - 9 PM</span> Даллас, Форт Уорт, прогулка по городу, парад ковбоев и скота, техасское барбекю</p>
<p className="lang-en"><span className="text-white font-medium mr-2 text-xs bg-white/10 px-2 py-0.5 rounded">9 AM - 9 PM</span> Dallas, Fort Worth, city walk, cowboy parade, Texas BBQ</p>
<p className="lang-ru"><span className="text-accent-500 font-medium mr-2">•</span>Ночной переезд (душ)</p>
<p className="lang-en"><span className="text-accent-500 font-medium mr-2">•</span>Night drive (shower)</p>
</div>
</div>
<div className="hidden md:block w-px h-full bg-white/10 absolute left-1/2 top-0 bottom-0"></div>
<div className="hidden md:block md:w-1/2"></div>
</div>

<div className="relative pl-8 md:pl-0 md:flex md:gap-8 items-start md:flex-row-reverse group">
<div className="absolute left-[-5px] md:left-[50%] md:-ml-[5px] top-1 w-2.5 h-2.5 rounded-full bg-accent-500 shadow-[0_0_10px_rgba(245,158,11,0.5)] z-10 group-hover:scale-150 transition-transform"></div>
<div className="md:w-1/2 md:pl-8 md:pt-0">
<h4 className="text-xl font-medium text-white tracking-tight mb-4">
<span className="lang-ru">День 8</span>
<span className="lang-en">Day 8</span>
</h4>
<div className="space-y-3 text-sm text-neutral-400">
<p className="lang-ru"><span className="text-white font-medium mr-2 text-xs bg-white/10 px-2 py-0.5 rounded">10 AM - 8 PM</span> New Orleans прогулка по городу, исторический Французский квартал, музей Вуду, поездка на ретро трамвае</p>
<p className="lang-en"><span className="text-white font-medium mr-2 text-xs bg-white/10 px-2 py-0.5 rounded">10 AM - 8 PM</span> New Orleans city walk, historic French Quarter, Voodoo museum, retro tram ride</p>
<p className="lang-ru"><span className="text-white font-medium mr-2 text-xs bg-white/10 px-2 py-0.5 rounded">10 PM</span> Прогулка по вечернему Мобайлу, Алабама</p>
<p className="lang-en"><span className="text-white font-medium mr-2 text-xs bg-white/10 px-2 py-0.5 rounded">10 PM</span> Evening walk in Mobile, Alabama</p>
<p className="lang-ru"><span className="text-accent-500 font-medium mr-2">•</span>Ночной переезд (душ)</p>
<p className="lang-en"><span className="text-accent-500 font-medium mr-2">•</span>Night drive (shower)</p>
</div>
</div>
<div className="hidden md:block w-px h-full bg-white/10 absolute left-1/2 top-0 bottom-0"></div>
<div className="hidden md:block md:w-1/2"></div>
</div>

<div className="relative pl-8 md:pl-0 md:flex md:gap-8 items-start group">
<div className="absolute left-[-5px] md:left-[50%] md:-ml-[5px] top-1 w-2.5 h-2.5 rounded-full bg-accent-500 shadow-[0_0_10px_rgba(245,158,11,0.5)] z-10 group-hover:scale-150 transition-transform"></div>
<div className="md:w-1/2 md:text-right md:pr-8 md:pt-0">
<h4 className="text-xl font-medium text-white tracking-tight mb-4">
<span className="lang-ru">День 9</span>
<span className="lang-en">Day 9</span>
</h4>
<div className="space-y-3 text-sm text-neutral-400">
<p className="lang-ru"><span className="text-white font-medium mr-2 text-xs bg-white/10 px-2 py-0.5 rounded">10 AM - 2 PM</span> Blue Springs, Green Springs Ламантины в дикой природе в источниках с бирюзовой водой</p>
<p className="lang-en"><span className="text-white font-medium mr-2 text-xs bg-white/10 px-2 py-0.5 rounded">10 AM - 2 PM</span> Blue Springs, Green Springs wild manatees in turquoise springs</p>
<p className="lang-ru"><span className="text-white font-medium mr-2 text-xs bg-white/10 px-2 py-0.5 rounded">6 PM</span> Кэмпинг в тропическом лесу</p>
<p className="lang-en"><span className="text-white font-medium mr-2 text-xs bg-white/10 px-2 py-0.5 rounded">6 PM</span> Tropical forest camping</p>
</div>
</div>
<div className="hidden md:block w-px h-full bg-white/10 absolute left-1/2 top-0 bottom-0"></div>
<div className="hidden md:block md:w-1/2"></div>
</div>

<div className="relative pl-8 md:pl-0 md:flex md:gap-8 items-start md:flex-row-reverse group">
<div className="absolute left-[-5px] md:left-[50%] md:-ml-[5px] top-1 w-2.5 h-2.5 rounded-full bg-accent-500 shadow-[0_0_10px_rgba(245,158,11,0.5)] z-10 group-hover:scale-150 transition-transform"></div>
<div className="md:w-1/2 md:pl-8 md:pt-0">
<h4 className="text-xl font-medium text-white tracking-tight mb-4">
<span className="lang-ru">День 10</span>
<span className="lang-en">Day 10</span>
</h4>
<div className="space-y-3 text-sm text-neutral-400">
<p className="lang-ru"><span className="text-white font-medium mr-2 text-xs bg-white/10 px-2 py-0.5 rounded">2 PM - 4 PM</span> Airboat in Everglades поездка на лодке по болоту, поиск аллигаторов в дикой природе (душ)</p>
<p className="lang-en"><span className="text-white font-medium mr-2 text-xs bg-white/10 px-2 py-0.5 rounded">2 PM - 4 PM</span> Airboat in Everglades swamp tour, wild alligator spotting (shower)</p>
<p className="lang-ru"><span className="text-white font-medium mr-2 text-xs bg-white/10 px-2 py-0.5 rounded">6 PM</span> Прибытие в Майами</p>
<p className="lang-en"><span className="text-white font-medium mr-2 text-xs bg-white/10 px-2 py-0.5 rounded">6 PM</span> Arrival in Miami</p>
</div>
</div>
</div>
</div>

<div className="mt-20 text-center text-[10px] sm:text-xs text-neutral-500 max-w-2xl mx-auto border-t border-white/5 pt-8">
<span className="lang-ru">Это предварительный план маршрута и он может быть незначительно скорректирован по согласию команды, так же может быть изменен в следствии форс-мажорных обстоятельств.</span>
<span className="lang-en">This is a preliminary itinerary and may be slightly adjusted by team agreement, as well as changed due to unforeseen circumstances.</span>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5">
<div className="max-w-6xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-12 items-center">
<div>
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tighter mb-6">
<span className="lang-ru">Жизнь в автобусе</span>
<span className="lang-en">Life on the bus</span>
</h2>
<p className="text-neutral-400 text-base mb-8">
<span className="lang-ru">Наш кастомный автобус оборудован всем необходимым для диких путешествий. Это не люкс, это комфортный минимализм для настоящих искателей.</span>
<span className="lang-en">Our custom bus is equipped with everything needed for wild travels. It's not luxury, it's comfortable minimalism for true seekers.</span>
</p>
<ul className="space-y-4">
<li className="flex items-center gap-4 text-sm text-neutral-300">
<div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center text-neutral-400">
<iconify-icon icon="solar:bed-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="lang-ru">Удобные спальные полки</span>
<span className="lang-en">Comfortable sleeping bunks</span>
</li>
<li className="flex items-center gap-4 text-sm text-neutral-300">
<div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center text-neutral-400">
<iconify-icon icon="solar:cup-hot-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="lang-ru">Полевая кухня (плита, холодильник)</span>
<span className="lang-en">Camp kitchen (stove, fridge)</span>
</li>
<li className="flex items-center gap-4 text-sm text-neutral-300">
<div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center text-neutral-400">
<iconify-icon icon="solar:bolt-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="lang-ru">Розетки 110V и USB</span>
<span className="lang-en">110V outlets and USB</span>
</li>
<li className="flex items-center gap-4 text-sm text-neutral-300">
<div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center text-neutral-400">
<iconify-icon icon="solar:wind-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="lang-ru">Кондиционер во время движения</span>
<span className="lang-en">Air conditioning while driving</span>
</li>
</ul>
</div>
<div className="relative rounded-2xl overflow-hidden aspect-[4/3] border border-white/10">
<img alt="Van Life" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1527525443983-6e60c75fff46?q=80&amp;w=2570&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-neutral-950/20"></div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-gradient-to-b from-neutral-950 to-neutral-900/50">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tighter mb-4">
<span className="lang-ru">Прозрачные условия</span>
<span className="lang-en">Transparent Pricing</span>
</h2>
<p className="text-sm text-neutral-400 mb-12">
<span className="lang-ru">Никаких скрытых платежей. Вы точно знаете, за что платите.</span>
<span className="lang-en">No hidden fees. You know exactly what you pay for.</span>
</p>
<div className="bg-neutral-900/80 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-sm max-w-2xl mx-auto">
<div className="text-5xl font-semibold text-white mb-2 tracking-tighter">$1,490</div>
<div className="text-sm text-neutral-400 mb-8">
<span className="lang-ru">за 10 дней полного отрыва</span>
<span className="lang-en">for 10 days of pure adventure</span>
</div>
<div className="grid sm:grid-cols-2 gap-8 text-left border-t border-white/5 pt-8">
<div>
<div className="text-sm font-medium text-white mb-4 flex items-center gap-2">
<iconify-icon className="text-accent-500" icon="solar:check-circle-linear"></iconify-icon>
<span className="lang-ru">Включено</span>
<span className="lang-en">Included</span>
</div>
<ul className="space-y-3 text-sm text-neutral-400">
<li><span className="lang-ru">Место в автобусе и топливо</span><span className="lang-en">Seat in the bus &amp; fuel</span></li>
<li><span className="lang-ru">Оплата всех кемпингов</span><span className="lang-en">All campsite fees</span></li>
<li><span className="lang-ru">Пропуска в Национальные парки</span><span className="lang-en">National Park passes</span></li>
<li><span className="lang-ru">Палатки и базовое снаряжение</span><span className="lang-en">Tents &amp; basic gear</span></li>
<li><span className="lang-ru">Базовые продукты (завтраки)</span><span className="lang-en">Basic groceries (breakfasts)</span></li>
</ul>
</div>
<div>
<div className="text-sm font-medium text-white mb-4 flex items-center gap-2">
<iconify-icon className="text-neutral-500" icon="solar:close-circle-linear"></iconify-icon>
<span className="lang-ru">Не включено</span>
<span className="lang-en">Not included</span>
</div>
<ul className="space-y-3 text-sm text-neutral-500">
<li><span className="lang-ru">Авиаперелеты</span><span className="lang-en">Flights</span></li>
<li><span className="lang-ru">Виза в США</span><span className="lang-en">USA Visa</span></li>
<li><span className="lang-ru">Личные расходы и кафе</span><span className="lang-en">Personal expenses &amp; cafes</span></li>
<li><span className="lang-ru">Медицинская страховка</span><span className="lang-en">Medical insurance</span></li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl font-semibold text-white tracking-tighter mb-12">
<span className="lang-ru">Частые вопросы</span>
<span className="lang-en">FAQ</span>
</h2>
<div className="space-y-4">
<details className="group border border-white/5 bg-white/[0.02] rounded-xl overflow-hidden">
<summary className="flex justify-between items-center cursor-pointer p-5 text-sm font-medium text-neutral-200 hover:bg-white/[0.02] transition-colors">
<span className="lang-ru">Где мы будем мыться?</span>
<span className="lang-en">Where will we shower?</span>
<iconify-icon className="icon-plus text-neutral-500 text-lg" icon="solar:alt-arrow-down-linear"></iconify-icon>
<iconify-icon className="icon-minus text-neutral-500 text-lg" icon="solar:alt-arrow-up-linear"></iconify-icon>
</summary>
<div className="p-5 pt-0 text-sm text-neutral-400 leading-relaxed border-t border-white/5">
<span className="lang-ru">Мы останавливаемся в оборудованных кемпингах. В 80% случаев там есть горячий душ и нормальные туалеты. В диких местах используем походный душ.</span>
<span className="lang-en">We stay in equipped campsites. In 80% of cases, there are hot showers and normal toilets. In wild areas, we use a portable camp shower.</span>
</div>
</details>
<details className="group border border-white/5 bg-white/[0.02] rounded-xl overflow-hidden">
<summary className="flex justify-between items-center cursor-pointer p-5 text-sm font-medium text-neutral-200 hover:bg-white/[0.02] transition-colors">
<span className="lang-ru">Что с едой?</span>
<span className="lang-en">What about food?</span>
<iconify-icon className="icon-plus text-neutral-500 text-lg" icon="solar:alt-arrow-down-linear"></iconify-icon>
<iconify-icon className="icon-minus text-neutral-500 text-lg" icon="solar:alt-arrow-up-linear"></iconify-icon>
</summary>
<div className="p-5 pt-0 text-sm text-neutral-400 leading-relaxed border-t border-white/5">
<span className="lang-ru">Завтраки мы готовим вместе в лагере (яичница, овсянка, тосты, кофе). Днем перекусываем или заезжаем в фастфуд/дайнеры по пути. Вечером часто готовим BBQ на костре.</span>
<span className="lang-en">We cook breakfasts together at camp (eggs, oatmeal, toast, coffee). During the day, we snack or visit fast food/diners along the way. In the evening, we often BBQ on the campfire.</span>
</div>
</details>
<details className="group border border-white/5 bg-white/[0.02] rounded-xl overflow-hidden">
<summary className="flex justify-between items-center cursor-pointer p-5 text-sm font-medium text-neutral-200 hover:bg-white/[0.02] transition-colors">
<span className="lang-ru">Кому подойдет этот трип?</span>
<span className="lang-en">Who is this trip for?</span>
<iconify-icon className="icon-plus text-neutral-500 text-lg" icon="solar:alt-arrow-down-linear"></iconify-icon>
<iconify-icon className="icon-minus text-neutral-500 text-lg" icon="solar:alt-arrow-up-linear"></iconify-icon>
</summary>
<div className="p-5 pt-0 text-sm text-neutral-400 leading-relaxed border-t border-white/5">
<span className="lang-ru">Молодым людям (18-35 лет), готовым к приключениям, отсутствию отельного сервиса и командному духу. Снобам и любителям all-inclusive будет некомфортно.</span>
<span className="lang-en">Young people (18-35 y.o.) ready for adventure, lack of hotel service, and team spirit. Snobs and all-inclusive lovers will feel uncomfortable.</span>
</div>
</details>
<details className="group border border-white/5 bg-white/[0.02] rounded-xl overflow-hidden">
<summary className="flex justify-between items-center cursor-pointer p-5 text-sm font-medium text-neutral-200 hover:bg-white/[0.02] transition-colors">
<span className="lang-ru">Насколько это безопасно?</span>
<span className="lang-en">Is it safe?</span>
<iconify-icon className="icon-plus text-neutral-500 text-lg" icon="solar:alt-arrow-down-linear"></iconify-icon>
<iconify-icon className="icon-minus text-neutral-500 text-lg" icon="solar:alt-arrow-up-linear"></iconify-icon>
</summary>
<div className="p-5 pt-0 text-sm text-neutral-400 leading-relaxed border-t border-white/5">
<span className="lang-ru">Маршрут отработан годами. Водители имеют огромный опыт. Кемпинги в США безопасны и охраняются рейнджерами.</span>
<span className="lang-en">The route has been refined over years. Drivers have massive experience. US campsites are safe and guarded by rangers.</span>
</div>
</details>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 relative overflow-hidden" id="apply">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent-500/10 blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-md mx-auto px-6 relative z-10">
<div className="text-center mb-10">
<h2 className="text-3xl font-semibold text-white tracking-tighter mb-3">
<span className="lang-ru">Оставить заявку</span>
<span className="lang-en">Apply Now</span>
</h2>
<p className="text-sm text-neutral-400">
<span className="lang-ru">Заполните форму, и мы свяжемся с вами для обсуждения деталей.</span>
<span className="lang-en">Fill out the form, and we will contact you to discuss details.</span>
</p>
</div>
<form className="space-y-4" onsubmit="event.preventDefault(); alert('Form submitted!');">
<div>
<label className="block text-xs font-medium text-neutral-400 mb-1.5">
<span className="lang-ru">Имя</span>
<span className="lang-en">Name</span>
</label>
<input className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-accent-500 focus:bg-white/10 transition-colors" placeholder="John Doe" required="" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-neutral-400 mb-1.5">Email</label>
<input className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-accent-500 focus:bg-white/10 transition-colors" placeholder="john@example.com" required="" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-neutral-400 mb-1.5">
<span className="lang-ru">Телефон (WhatsApp/Telegram)</span>
<span className="lang-en">Phone (WhatsApp/Telegram)</span>
</label>
<input className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-accent-500 focus:bg-white/10 transition-colors" placeholder="+1 234 567 8900" required="" type="tel"/>
</div>

<label className="custom-checkbox flex items-start gap-3 mt-6 cursor-pointer group">
<input className="hidden" required="" type="checkbox"/>
<div className="w-4 h-4 rounded bg-white/5 border border-white/10 flex flex-shrink-0 items-center justify-center mt-0.5 transition-colors group-hover:border-white/30">
<svg className="w-2.5 h-2.5 text-neutral-950 hidden" fill="none" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<span className="text-xs text-neutral-500 leading-tight select-none">
<span className="lang-ru">Я согласен с условиями обработки персональных данных и готов к приключениям.</span>
<span className="lang-en">I agree to the privacy policy and am ready for an adventure.</span>
</span>
</label>
<button className="w-full mt-6 bg-accent-500 hover:bg-accent-400 text-neutral-950 text-sm font-semibold py-3 px-4 rounded-lg transition-all flex items-center justify-center gap-2" type="submit">
<span className="lang-ru">Отправить заявку</span>
<span className="lang-en">Submit Application</span>
<iconify-icon className="text-lg" icon="solar:plain-2-bold"></iconify-icon>
</button>
</form>
</div>
</section>

<footer className="py-12 border-t border-white/5 bg-neutral-950 relative z-10">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="text-neutral-100 font-semibold tracking-tighter text-sm uppercase">
                Трансконтинентальное<br/>Путешествие
            </div>
<div className="text-xs text-neutral-500 tracking-wide">
                © 2024 Road Trip Experience. All rights reserved.
            </div>
<div className="flex items-center gap-3">
<a className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-neutral-400 hover:text-white transition-colors border border-white/10" href="#">
<iconify-icon className="text-xl" icon="mdi:instagram"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-neutral-400 hover:text-white transition-colors border border-white/10" href="#">
<iconify-icon className="text-xl" icon="ic:baseline-telegram"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-neutral-400 hover:text-white transition-colors border border-white/10" href="#">
<iconify-icon className="text-xl" icon="mdi:youtube"></iconify-icon>
</a>
</div>
</div>
</footer>



    </>
  );
}
