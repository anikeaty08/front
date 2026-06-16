import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Manrope', 'sans-serif'],
},
colors: {
premium: {
DEFAULT: '#D4C5B9', // Main Accent
hover: '#A89B90',   // Darker Beige
light: '#EBE3DD'
},
taupe: '#A89B90',       // Secondary Accent
offwhite: '#FEFDFB',    // Page BG
surface: '#F9F7F5',     // Block BG
dark: '#1A1A1A',        // Main Text
grey: {
light: '#E8E8E8',   // Borders
mid: '#999999',     // Secondary Text
dark: '#7F7F7F'     // Light Text
},
success: '#6B9E64',
error: '#C54E4E'
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Router Functionality
        function router(path) {
            // Remove slash if present to match ID format
            const cleanPath = path === '/' ? 'home' : path.replace('/', '');
            
            // Hide all sections
            document.querySelectorAll('.page-section').forEach(section => {
                section.classList.remove('active');
                setTimeout(() => {
                    if(!section.classList.contains('active')) section.style.display = 'none';
                }, 400); // Match CSS transition duration
            });

            // Show target section
            const target = document.getElementById(`page-${cleanPath}`);
            if (target) {
                target.style.display = 'block';
                // Small delay to allow display:block to apply before opacity transition
                setTimeout(() => {
                    target.classList.add('active');
                }, 10);
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }

        // Mobile Menu Toggle
        function toggleMobileMenu() {
            const menu = document.getElementById('mobileMenu');
            if (menu.classList.contains('hidden')) {
                menu.classList.remove('hidden');
                menu.classList.add('flex');
                document.body.style.overflow = 'hidden'; // Prevent scrolling
            } else {
                menu.classList.add('hidden');
                menu.classList.remove('flex');
                document.body.style.overflow = '';
            }
        }

        // Parallax Effect
        document.addEventListener('mousemove', (e) => {
            const items = document.querySelectorAll('.parallax-item');
            items.forEach(item => {
                const speed = item.getAttribute('data-speed');
                const x = (window.innerWidth - e.pageX * speed) / 100;
                const y = (window.innerHeight - e.pageY * speed) / 100;
                item.style.transform = `translateX(${x}px) translateY(${y}px)`;
            });
        });
        
        // Magnetic Button Effect
        const magneticBtns = document.querySelectorAll('.magnetic-btn');
        magneticBtns.forEach(btn => {
            btn.addEventListener('mousemove', (e) => {
                const position = btn.getBoundingClientRect();
                const x = e.pageX - position.left - position.width / 2;
                const y = e.pageY - position.top - position.height / 2;
                
                btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
            });
            
            btn.addEventListener('mouseleave', () => {
                btn.style.transform = 'translate(0px, 0px)';
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed w-full top-0 z-50 bg-[#FEFDFB]/95 backdrop-blur-md border-b border-grey-light">
<div className="flex h-20 max-w-[1400px] mr-auto ml-auto pr-6 items-center justify-between">

<a className="flex items-center gap-3 group cursor-pointer" href="#" onclick="router('/')">
<div className="w-2 h-8 bg-premium group-hover:bg-premium-hover transition-colors"></div>
<div className="flex items-center gap-3">
<img alt="BAZIKO logo" className="w-8 h-8 object-contain" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9b231e0e-3915-4023-8bf1-06641ea8e493_320w.png" style={{width: '2.56rem', height: '2.56rem'}}/>
<div className="flex flex-col">
<span className="text-dark leading-none text-xl font-semibold tracking-tight">BAZIKO</span>
<span className="text-[10px] font-medium text-taupe tracking-[0.2em] uppercase mt-0.5">Premium</span>
</div>
</div>
</a>

<nav className="hidden xl:flex items-center gap-6 text-xs font-medium uppercase tracking-widest text-grey-dark">
<a className="hover:text-premium-hover transition-colors" href="#" onclick="router('/')">Главная</a>
<a className="hover:text-premium-hover transition-colors" href="#" onclick="router('/zhenskiye-rubashki')">Женщинам</a>
<a className="hover:text-premium-hover transition-colors" href="#" onclick="router('/muzhskiye-rubashki')">Мужчинам</a>
<a className="hover:text-premium-hover transition-colors" href="#" onclick="router('/individualnyy-poshiv-rubashek')">Ателье</a>
<a className="hover:text-premium-hover transition-colors" href="#" onclick="router('/optovyy-poshiv-odezhdy-bishkek')">Опт</a>
<a className="hover:text-premium-hover transition-colors" href="#" onclick="router('/protsess-raboty')">Процесс</a>
<a className="hover:text-premium-hover transition-colors" href="#" onclick="router('/kontakty')">Контакты</a>
</nav>

<div className="flex items-center gap-4">
<button className="xl:hidden text-dark p-2" onclick="toggleMobileMenu()">
<iconify-icon height="24" icon="lucide:menu" width="24"></iconify-icon>
</button>
<a className="hidden md:flex items-center gap-2 px-6 py-3 bg-premium text-dark text-xs font-bold tracking-wider hover:bg-premium-hover hover:text-offwhite transition-all" href="https://wa.me/996700000000">
                    СВЯЗАТЬСЯ
                </a>
</div>
</div>

<div className="fixed inset-0 bg-offwhite z-50 hidden flex-col pt-24 px-6 gap-6 overflow-y-auto" id="mobileMenu">
<button className="absolute top-6 right-6 text-dark" onclick="toggleMobileMenu()"><iconify-icon height="24" icon="lucide:x" width="24"></iconify-icon></button>
<a className="text-xl font-light border-b border-grey-light pb-4" href="#" onclick="router('/'); toggleMobileMenu()">Главная</a>
<a className="text-xl font-light border-b border-grey-light pb-4" href="#" onclick="router('/zhenskiye-rubashki'); toggleMobileMenu()">Женские рубашки</a>
<a className="text-xl font-light border-b border-grey-light pb-4" href="#" onclick="router('/muzhskiye-rubashki'); toggleMobileMenu()">Мужские рубашки</a>
<a className="text-xl font-light border-b border-grey-light pb-4" href="#" onclick="router('/individualnyy-poshiv-rubashek'); toggleMobileMenu()">Индивидуальный пошив</a>
<a className="text-xl font-light border-b border-grey-light pb-4" href="#" onclick="router('/poshiv-po-lekalám-klienta'); toggleMobileMenu()">По лекалам (B2B)</a>
<a className="text-xl font-light border-b border-grey-light pb-4" href="#" onclick="router('/optovyy-poshiv-odezhdy-bishkek'); toggleMobileMenu()">Оптовый пошив</a>
<a className="text-xl font-light border-b border-grey-light pb-4" href="#" onclick="router('/protsess-raboty'); toggleMobileMenu()">Процесс</a>
<a className="text-xl font-light border-b border-grey-light pb-4" href="#" onclick="router('/o-nas'); toggleMobileMenu()">О нас</a>
<a className="text-xl font-light border-b border-grey-light pb-4" href="#" onclick="router('/blog'); toggleMobileMenu()">Блог</a>
<a className="text-xl font-light border-b border-grey-light pb-4" href="#" onclick="router('/kontakty'); toggleMobileMenu()">Контакты</a>
</div>
</header>

<main className="pt-20 min-h-screen">

<div className="page-section active" id="page-home">

<section className="overflow-hidden w-full h-screen relative" id="hero-section">

<img alt="Baziko Premium Fashion" className="object-top w-full h-full object-cover z-10 absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/17c60e6b-c3ce-4b24-9535-d6f786574fe0_3840w.jpg"/>

<div className="flex flex-col z-30 text-center bg-black/40 pr-6 pl-6 absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<div className="bg-white/10 z-30 border-white/20 border rounded-full mb-8 pt-1.5 pr-4 pb-1.5 pl-4 backdrop-blur-md">
<span className="text-[10px] uppercase font-bold text-white tracking-[0.2em] font-montserrat">Since 2010</span>
</div>
<h1 className="mb-6 font-montserrat text-7xl font-extrabold uppercase tracking-tighter text-white drop-shadow-2xl md:text-8xl">
        Baziko Premium
    </h1>
<p className="mb-12 max-w-4xl font-manrope text-xl font-medium leading-relaxed text-white/90 drop-shadow-lg md:text-2xl">
        Премиальные коллекции в ритме вашего бизнеса. Полный цикл производства одежды от идеи до партии.
    </p>
<a className="group flex items-center gap-3 transition-all duration-300 hover:bg-white/20 hover:border-white/40 bg-white/10 border-white/20 border rounded-sm pt-5 pr-10 pb-5 pl-10 relative backdrop-blur-md" href="#production-types">
<span className="uppercase text-xs font-bold text-white tracking-[0.2em] font-montserrat">Смотреть каталог</span>
<svg className="lucide lucide-arrow-right text-white transition-transform duration-300 group-hover:translate-x-1" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>

<div className="z-20 flex flex-col text-center w-full pr-6 pb-16 pl-6 absolute bottom-0 left-0 items-center justify-end">

<p className="md:text-lg antialiased text-base font-medium text-white tracking-wide font-manrope max-w-2xl mb-8 drop-shadow-md"></p>

<a className="group relative flex items-center gap-3 px-8 py-4 bg-transparent border border-white text-white rounded-sm transition-all duration-300 hover:bg-white hover:text-dark" href="#production-types">
<span className="text-xs font-bold uppercase tracking-widest">Посмотреть каталог</span>

<svg className="lucide lucide-arrow-right transition-transform duration-300 group-hover:-translate-x-1 group-hover:-rotate-12" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
</section>

<section className="w-full relative bg-dark overflow-hidden" id="video-gallery">

<div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">

<div className="hidden md:block group aspect-[9/16] overflow-hidden cursor-pointer bg-zinc-900 w-full border-white/10 border-r relative">

<div className="hidden md:flex flex-col pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<video autoplay="" className="hidden md:block w-full h-full object-cover z-20 absolute top-0 right-0 bottom-0 left-0" loop="" muted="" playsinline="" src="https://pub-b2098c594208457a9a738e4773a4f74e.r2.dev/Fashion_model_in_elegant_casual_style__blue_oversized_shirt%2C_beige_midi_skirt%2C_sunglasses._She_poses_seed3512116558.mp4"></video>
</div>

<div className="flex z-20 w-full pt-8 pr-8 pb-8 pl-8 absolute bottom-0 left-0 items-end justify-between">
<div className="">
<span className="block text-[10px] uppercase font-medium text-white/60 tracking-widest mb-2"></span>
<h3 className="hidden md:block text-2xl font-light italic text-white tracking-wide font-serif"></h3>
</div>
<span className="text-xs font-bold text-white/80 border border-white/20 px-2 py-1 rounded backdrop-blur-sm">00:45</span>
</div>
</div>

<div className="hidden md:block group aspect-[9/16] overflow-hidden cursor-pointer bg-zinc-800 w-full border-white/10 border-r relative">

<img alt="Manufacturing Process" className="transition-transform duration-300 ease-out group-hover:scale-105 group-hover:opacity-100 opacity-80 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="hidden md:block absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60 opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
<div className="hidden md:flex flex-col pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<video autoplay="" className="hidden md:block w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" loop="" muted="" playsinline="" src="https://pub-e8a0f4ba0f00465f983485516cedfb04.r2.dev/Woman_in_green_dress_gracefully_walks_from_left_side_towards___seated_man%2C_embraces_him_warmly._Both_seed1442053222.mp4"></video>
</div>
<div className="flex z-20 w-full pt-8 pr-8 pb-8 pl-8 absolute bottom-0 left-0 items-end justify-between">
<div className="">
<span className="block text-[10px] uppercase font-medium text-white/60 tracking-widest mb-2"></span>
<h3 className="text-2xl font-light italic text-white tracking-wide font-serif"></h3>
</div>
</div>
</div>

<div className="group relative w-full aspect-[9/16] bg-zinc-900 overflow-hidden cursor-pointer">

<img alt="Lookbook 2024" className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0220fa5c-a2c1-4438-b157-e54a8b232534_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60 opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
<div className="flex flex-col pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<video autoplay="" className="w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" loop="" muted="" playsinline="" src="https://pub-50958590c68b4cbeb89ccde57ab7b9e5.r2.dev/Fashion_model_in_elegant_casual_style__blue_oversized_shirt%2C_beige_midi_skirt%2C_sunglasses._She_poses_seed333857552.mp4"></video>
</div>
<div className="flex z-20 w-full pt-8 pr-8 pb-8 pl-8 absolute bottom-0 left-0 items-end justify-between">
<div className="">
<span className="block text-[10px] uppercase font-medium text-white/60 tracking-widest mb-2"></span>
<h3 className="text-2xl font-light italic text-white tracking-wide font-serif"></h3>
</div>
</div>
</div>
</div>
</section>

<section className="w-full bg-[#F5F5F5] text-[#1A1A1A] font-sans" id="services-excellence">

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-full border-[#D1D1D1] border-t border-l mr-auto ml-auto">

<div className="lg:col-span-1 lg:row-span-2 border-r border-b border-[#D1D1D1] relative group h-[500px] lg:h-auto overflow-hidden">
<img alt="Lab Assistant Perfect Fit" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ba81c016-5855-4ea0-8c45-fc4f9909b0c2_800w.jpg"/>
<div className="bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<h3 className="text-white text-3xl font-semibold uppercase tracking-tight leading-tight font-oswald">100% ГАРАНТИЯ ИДЕАЛЬНОЙ ПОСАДКИ</h3>
</div>
</div>

<div className="lg:col-span-2 md:p-12 flex flex-col group overflow-hidden text-white bg-[#4A3728] border-[#D1D1D1] border-r border-b pt-8 pr-8 pb-8 pl-8 relative justify-between">

<div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-white/10 transition-colors duration-700"></div>
<div className="relative z-10">
<div className="flex items-center gap-2 mb-6 text-white">
<div className="w-2 h-2 bg-white rounded-full"></div>
<span className="text-xs font-mono uppercase tracking-widest">ИННОВАЦИИ</span>
</div>
<h3 className="text-2xl md:text-3xl font-semibold uppercase tracking-tight mb-6 font-oswald text-white">ТЕХНОЛОГИЧЕСКОЕ ПРЕВОСХОДСТВО</h3>
<p className="text-white font-light text-lg leading-relaxed max-w-md">
          150+ автоматизированных станков. Точность до 0,1 мм. Минимизация человеческого фактора для стабильного премиум-качества.
        </p>
</div>
<div className="relative z-10 mt-12 flex justify-end">
<iconify-icon className="text-white/40 group-hover:text-white group-hover:rotate-90 transition-all duration-500" height="32" icon="lucide:cpu" width="32"></iconify-icon>
</div>
</div>

<div className="lg:col-span-1 border-r border-b border-[#D1D1D1] p-8 md:p-12 flex flex-col bg-[#F5F5F5] hover:bg-white transition-colors duration-500 group">
<span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#1A1A1A]/40 mb-auto group-hover:text-[#1A1A1A] transition-colors">01 / КАТЕГОРИИ</span>
<div className="mt-8">
<h3 className="text-xl font-semibold uppercase tracking-[0.1em] mb-4 font-oswald">УСЛУГИ: МУЖСКАЯ ОДЕЖДА</h3>
<p className="text-[#1A1A1A]/70 font-light text-sm leading-relaxed">
          Рубашки премиум-класса, casual-группы и классический пошив с инженерной точностью.
        </p>
</div>
<div className="mt-8 pt-8 border-t border-[#D1D1D1] group-hover:border-[#1A1A1A] transition-colors">
<iconify-icon className="text-[#1A1A1A]" height="20" icon="lucide:shirt" width="20"></iconify-icon>
</div>
</div>

<div className="lg:col-span-1 border-r border-b border-[#D1D1D1] relative group h-[300px] lg:h-auto overflow-hidden">
<img alt="Precision Seam Detail" className="transition-transform duration-1000 group-hover:scale-110 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0220fa5c-a2c1-4438-b157-e54a8b232534_800w.jpg"/>
<div className="group-hover:bg-transparent transition-colors duration-500 bg-[#1A1A1A]/10 absolute top-0 right-0 bottom-0 left-0"></div>
</div>

<div className="lg:col-span-1 border-r border-b border-[#D1D1D1] p-8 md:p-12 flex flex-col bg-[#F5F5F5] hover:bg-white transition-colors duration-500 group">
<span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#1A1A1A]/40 mb-auto group-hover:text-[#1A1A1A] transition-colors">02 / КАТЕГОРИИ</span>
<div className="mt-8">
<h3 className="text-xl font-semibold uppercase tracking-[0.1em] mb-4 font-oswald">УСЛУГИ: ЖЕНСКАЯ ОДЕЖДА</h3>
<p className="text-[#1A1A1A]/70 font-light text-sm leading-relaxed">
          Сложные ткани, премиальный трикотаж и блузы. От 400 единиц на модель.
        </p>
</div>
<div className="mt-8 pt-8 border-t border-[#D1D1D1] group-hover:border-[#1A1A1A] transition-colors">
<iconify-icon className="text-[#1A1A1A]" height="20" icon="lucide:scissors" width="20"></iconify-icon>
</div>
</div>

<div className="lg:col-span-1 md:p-12 flex flex-col hover:bg-[#4A3728] hover:text-white transition-colors duration-500 group cursor-default bg-[#F5F5F5] border-[#D1D1D1] border-r border-b pt-8 pr-8 pb-8 pl-8 items-center justify-center">
<div className="text-center">
<span className="block text-xs font-mono uppercase tracking-widest opacity-60 mb-2">МИНИМАЛЬНЫЙ ЗАКАЗ</span>
<h3 className="text-4xl font-semibold uppercase tracking-tight font-oswald mb-2">400-500</h3>
<span className="block text-sm font-medium uppercase tracking-[0.2em]">ШТ / НА МОДЕЛЬ</span>
</div>
</div>

<div className="lg:col-span-4 border-r border-b border-[#D1D1D1] p-8 md:p-16 bg-[#F5F5F5] hover:bg-white transition-colors duration-500 relative overflow-hidden group">
<div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-[#D1D1D1]/10 to-transparent pointer-events-none"></div>
<div className="flex flex-col md:flex-row md:items-center justify-between gap-12 relative z-10">
<div className="md:w-1/3">
<h3 className="text-3xl md:text-4xl font-semibold uppercase tracking-tight font-oswald mb-2">ПРОИЗВОДСТВЕННЫЕ МОЩНОСТИ</h3>
<div className="h-1 w-20 bg-[#1A1A1A] mt-4 group-hover:w-full transition-all duration-700 ease-out"></div>
</div>
<div className="md:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="">
<h4 className="text-lg font-semibold uppercase tracking-wide mb-2">ОБЪЕМ</h4>
<p className="text-[#1A1A1A]/70 font-light text-sm leading-relaxed">40 000 единиц в месяц — мощности для крупного ритейла.</p>
</div>
<div className="">
<h4 className="text-lg font-semibold uppercase tracking-wide mb-2">СКОРОСТЬ</h4>
<p className="text-[#1A1A1A]/70 font-light text-sm leading-relaxed">7 дней на стандартные партии благодаря оптимизированным процессам.</p>
</div>
<div className="">
<h4 className="text-lg font-semibold uppercase tracking-wide mb-2">ЭКСПОРТ</h4>
<p className="text-[#1A1A1A]/70 font-light text-sm leading-relaxed">Полный пакет документов (ЕАЭС) и логистическая поддержка.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-grey-light pt-32 pb-32 bg-[#FEFDFB] relative overflow-hidden" id="production-types">
<div className="max-w-[1400px] mx-auto px-6 relative z-10">

<div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
<div className="max-w-2xl">
<span className="text-premium text-xs font-bold tracking-[0.2em] uppercase mb-4 block font-manrope">Ассортимент</span>
<h2 className="text-5xl md:text-7xl font-light text-dark leading-none tracking-[0.05em] font-oswald uppercase">
                    Что мы шьем
                </h2>
</div>
<div className="max-w-sm text-left md:text-right">
<p className="text-grey-dark text-base font-light tracking-wide font-manrope leading-relaxed">
                    Производственные возможности и ассортимент для оптовых заказов BAZIKO PREMIUM.
                </p>
</div>
</div>

<div className="flex flex-col lg:flex-row h-[700px] gap-0 border border-grey-light bg-white">

<div className="group relative flex-1 hover:flex-[2] border-b lg:border-b-0 lg:border-r border-grey-light last:border-0 overflow-hidden cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]">

<div className="absolute inset-0 z-0">
<img alt="Women's Collection" className="w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-1000 ease-out scale-110 group-hover:scale-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f5102adb-a0f6-4f63-9278-bb77331d9751_800w.jpg"/>
<div className="absolute inset-0 bg-dark/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
</div>

<div className="absolute inset-0 flex flex-col justify-end p-8 transition-all duration-500 group-hover:opacity-0 bg-surface group-hover:bg-transparent">
<span className="text-6xl font-oswald font-light text-grey-light/50 absolute top-6 right-6">01</span>
<h3 className="text-2xl font-oswald font-normal text-dark uppercase tracking-wide lg:-rotate-90 lg:origin-bottom-left lg:translate-x-8 lg:-translate-y-8 whitespace-nowrap">
                        Женская коллекция
                    </h3>
</div>

<div className="absolute inset-0 z-10 p-10 flex flex-col justify-end opacity-0 group-hover:opacity-100 translate-y-8 group-hover:translate-y-0 transition-all duration-700 delay-100">
<div className="border-l-2 border-premium pl-6 backdrop-blur-md bg-dark/10 p-6 max-w-lg">
<span className="text-premium text-xs font-bold tracking-[0.2em] uppercase mb-2 block font-manrope">01 / BAZIKO WOMAN</span>
<h3 className="text-4xl font-oswald font-medium text-white uppercase tracking-tight mb-4">Рубашки и Блузки</h3>
<p className="text-white/90 text-sm font-manrope font-light leading-relaxed max-w-sm">
                            Сложный крой, премиальный хлопок и шелк. Разработка лекал любой сложности. От 500 единиц.
                        </p>
</div>
</div>
</div>

<div className="group relative flex-1 hover:flex-[2] border-b lg:border-b-0 lg:border-r border-grey-light last:border-0 overflow-hidden cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]">

<div className="absolute inset-0 z-0">
<img alt="Men's Collection" className="w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-1000 ease-out scale-110 group-hover:scale-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1e17a529-f60c-49be-8487-d9a6d6d07de6_800w.png"/>
<div className="absolute inset-0 bg-dark/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
</div>
<div className="absolute inset-0 flex flex-col justify-end p-8 transition-all duration-500 group-hover:opacity-0 bg-surface group-hover:bg-transparent">
<span className="text-6xl font-oswald font-light text-grey-light/50 absolute top-6 right-6">02</span>
<h3 className="text-2xl font-oswald font-normal text-dark uppercase tracking-wide lg:-rotate-90 lg:origin-bottom-left lg:translate-x-8 lg:-translate-y-8 whitespace-nowrap">
                        Мужская коллекция
                    </h3>
</div>
<div className="absolute inset-0 z-10 p-10 flex flex-col justify-end opacity-0 group-hover:opacity-100 translate-y-8 group-hover:translate-y-0 transition-all duration-700 delay-100">
<div className="border-l-2 border-premium pl-6 backdrop-blur-md bg-dark/10 p-6 max-w-lg">
<span className="text-premium text-xs font-bold tracking-[0.2em] uppercase mb-2 block font-manrope">02 / BAZIKO MAN</span>
<h3 className="text-4xl font-oswald font-medium text-white uppercase tracking-tight mb-4">Мужские сорочки</h3>
<p className="text-white/90 text-sm font-manrope font-light leading-relaxed max-w-sm">
                            Классика и casual. Идеальная посадка воротника и манжет. Технология Non-Iron.
                        </p>
</div>
</div>
</div>

<div className="group relative flex-1 hover:flex-[2] border-b lg:border-b-0 lg:border-r border-grey-light last:border-0 overflow-hidden cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]">

<div className="absolute inset-0 z-0">
<img alt="Kids Collection" className="w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-1000 ease-out scale-110 group-hover:scale-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ed72aa6d-906a-40a9-8cb5-aa76a6bc5e9d_800w.jpg"/>
<div className="absolute inset-0 bg-dark/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
</div>
<div className="absolute inset-0 flex flex-col justify-end p-8 transition-all duration-500 group-hover:opacity-0 bg-surface group-hover:bg-transparent">
<span className="text-6xl font-oswald font-light text-grey-light/50 absolute top-6 right-6">03</span>
<h3 className="text-2xl font-oswald font-normal text-dark uppercase tracking-wide lg:-rotate-90 lg:origin-bottom-left lg:translate-x-8 lg:-translate-y-8 whitespace-nowrap">
                        Детская одежда
                    </h3>
</div>
<div className="absolute inset-0 z-10 p-10 flex flex-col justify-end opacity-0 group-hover:opacity-100 translate-y-8 group-hover:translate-y-0 transition-all duration-700 delay-100">
<div className="border-l-2 border-premium pl-6 backdrop-blur-md bg-dark/10 p-6 max-w-lg">
<span className="text-premium text-xs font-bold tracking-[0.2em] uppercase mb-2 block font-manrope">03 / BAZIKO KIDS</span>
<h3 className="text-4xl font-oswald font-medium text-white uppercase tracking-tight mb-4">Детские рубашки</h3>
<p className="text-white/90 text-sm font-manrope font-light leading-relaxed max-w-sm">
                            Натуральные гипоаллергенные ткани. Прочные швы. Школьная форма и праздничные модели.
                        </p>
</div>
</div>
</div>

<div className="group relative flex-1 hover:flex-[2] border-b lg:border-b-0 lg:border-r border-grey-light last:border-0 overflow-hidden cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]">
<div className="absolute inset-0 z-0">
<img alt="Dresses" className="w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-1000 ease-out scale-110 group-hover:scale-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8ac61966-f86a-4e76-aa7d-321aa2573b0a_800w.jpg"/>
<div className="absolute inset-0 bg-dark/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
</div>
<div className="absolute inset-0 flex flex-col justify-end p-8 transition-all duration-500 group-hover:opacity-0 bg-surface group-hover:bg-transparent">
<span className="text-6xl font-oswald font-light text-grey-light/50 absolute top-6 right-6">04</span>
<h3 className="text-2xl font-oswald font-normal text-dark uppercase tracking-wide lg:-rotate-90 lg:origin-bottom-left lg:translate-x-8 lg:-translate-y-8 whitespace-nowrap">
                        Платья и Блузки
                    </h3>
</div>
<div className="absolute inset-0 z-10 p-10 flex flex-col justify-end opacity-0 group-hover:opacity-100 translate-y-8 group-hover:translate-y-0 transition-all duration-700 delay-100">
<div className="border-l-2 border-premium pl-6 backdrop-blur-md bg-dark/10 p-6 max-w-lg">
<span className="text-premium text-xs font-bold tracking-[0.2em] uppercase mb-2 block font-manrope">04 / BAZIKO ATELIER</span>
<h3 className="text-4xl font-oswald font-medium text-white uppercase tracking-tight mb-4">Индивидуальные заказы</h3>
<p className="text-white/90 text-sm font-manrope font-light leading-relaxed max-w-sm">
                            Работа по вашим эскизам. Помощь в подборе тканей. Эксклюзивное качество пошива.
                        </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden z-10 bg-white w-full mt-32 pt-20 pb-20 relative" id="perspective-gallery">
<style>
        @keyframes mobileCarouselSpin {
            0% { transform: rotateY(0deg); }
            100% { transform: rotateY(-360deg); }
        }
        .mobile-carousel-container:hover .mobile-carousel-track,
        .mobile-carousel-container:active .mobile-carousel-track {
            animation-play-state: paused;
        }
        .mobile-carousel-track {
            animation: mobileCarouselSpin 20s linear infinite;
        }
    </style>
<div className="max-w-[1400px] mr-auto ml-auto pr-6 pl-6">

<div className="text-center mb-12">
<span className="text-xs font-semibold tracking-[0.3em] text-dark/40 uppercase font-manrope">BAZIKO PREMIUM</span>
</div>

<div className="hidden lg:flex justify-center items-center gap-6 h-[600px] w-full" style={{perspective: '1200px'}}>

<div className="group relative w-1/3 h-full bg-grey-light transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] transform preserve-3d cursor-pointer hover:z-20 shadow-2xl hover:[transform:rotateY(0deg)_scale(1.05)]" style={{transform: 'rotateY(20deg) scale(0.95)'}}>
<img alt="Fashion Texture" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="group-hover:bg-dark/10 transition-colors duration-700 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ba4c0113-9263-49f6-8bac-0e8260854083_800w.jpg)] bg-cover bg-center absolute top-0 right-0 bottom-0 left-0"></div>
<button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-dark text-xs font-light tracking-widest px-8 py-3 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-700 scale-90 group-hover:scale-100 font-manrope">
                     В ГАЛЕРЕЮ
                 </button>
</div>

<div className="group relative w-1/3 h-full bg-grey-light transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] transform preserve-3d cursor-pointer hover:z-20 shadow-2xl hover:[transform:rotateY(0deg)_scale(1.05)]" style={{transform: 'rotateY(20deg) scale(0.95)'}}>
<img alt="Industrial Minimal" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0220fa5c-a2c1-4438-b157-e54a8b232534_800w.jpg"/>
<div className="group-hover:bg-dark/10 transition-colors duration-700 absolute top-0 right-0 bottom-0 left-0"></div>
<button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-dark text-xs font-light tracking-widest px-8 py-3 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-700 scale-90 group-hover:scale-100 font-manrope">
                     В ГАЛЕРЕЮ
                 </button>
</div>

<div className="group relative w-1/3 h-full bg-grey-light transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] transform preserve-3d cursor-pointer hover:z-20 shadow-2xl hover:[transform:rotateY(0deg)_scale(1.05)]" style={{transform: 'rotateY(20deg) scale(0.95)'}}>
<img alt="Fashion Details" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1537832816519-689ad163238b?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="group-hover:bg-dark/10 transition-colors duration-700 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ba81c016-5855-4ea0-8c45-fc4f9909b0c2_800w.jpg)] bg-cover bg-center absolute top-0 right-0 bottom-0 left-0"></div>
<button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-dark text-xs font-light tracking-widest px-8 py-3 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-700 scale-90 group-hover:scale-100 font-manrope">
                     В ГАЛЕРЕЮ
                 </button>
</div>
</div>

<div className="lg:hidden mobile-carousel-container relative w-full h-[450px] flex items-center justify-center overflow-hidden touch-pan-y" style={{perspective: '1200px', WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)', maskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)'}}>
<div className="mobile-carousel-track relative w-[260px] h-[360px]" style={{transformStyle: 'preserve-3d', animation: 'mobileCarouselSpin 16s linear infinite'}}>

<div className="absolute inset-0 rounded-sm shadow-2xl overflow-hidden bg-grey-light backface-visible group" style={{transformStyle: 'preserve-3d'}}>
<img alt="Fashion Texture" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/15 via-transparent to-black/45"></div>
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300 bg-dark/10"></div>
<button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/95 backdrop-blur text-dark text-[10px] font-semibold tracking-widest px-6 py-3 rounded shadow-lg font-manrope whitespace-nowrap opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300">
                        В ГАЛЕРЕЮ
                    </button>
</div>

<div className="absolute inset-0 rounded-sm shadow-2xl overflow-hidden bg-grey-light backface-visible group" style={{transformStyle: 'preserve-3d'}}>
<img alt="Industrial Minimal" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1504198458649-3128b932f49e?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/15 via-transparent to-black/45"></div>
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300 bg-dark/10"></div>
<button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/95 backdrop-blur text-dark text-[10px] font-semibold tracking-widest px-6 py-3 rounded shadow-lg font-manrope whitespace-nowrap opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300">
                        В ГАЛЕРЕЮ
                    </button>
</div>

<div className="absolute inset-0 rounded-sm shadow-2xl overflow-hidden bg-grey-light backface-visible group" style={{transformStyle: 'preserve-3d'}}>
<img alt="Fashion Details" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1537832816519-689ad163238b?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/15 via-transparent to-black/45"></div>
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300 bg-dark/10"></div>
<button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/95 backdrop-blur text-dark text-[10px] font-semibold tracking-widest px-6 py-3 rounded shadow-lg font-manrope whitespace-nowrap opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300">
                        В ГАЛЕРЕЮ
                    </button>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-grey-light pt-24 pb-24" id="process-timeline">
<div className="max-w-[1200px] mr-auto ml-auto pr-6 pl-6">

<div className="text-center mb-16 md:mb-24">
<h2 className="md:text-5xl text-dark text-4xl font-light tracking-tight mb-4">7 шагов к идеальному
                заказу</h2>
<p className="text-grey-dark text-lg font-light tracking-wide">Путь от первой встречи до готового изделия</p>
</div>

<div className="relative mb-20">

<div className="hidden lg:block z-0 bg-gradient-to-r from-premium via-[#C9B5AA] to-taupe opacity-30 w-full h-[3px] rounded-sm absolute top-[45px] left-0">
</div>

<div className="flex flex-col lg:flex-row justify-between relative z-10 gap-8 lg:gap-0">

</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-dark -mt-8 border-t border-l">

<div className="group relative bg-white border-r border-b border-dark h-full overflow-hidden cursor-pointer">

<div className="absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-105">
<img alt="Consultation" className="w-full h-full object-cover grayscale opacity-90 transition-all duration-500 group-hover:grayscale-0" src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-dark/30 transition-opacity duration-500 group-hover:opacity-0">
</div>
</div>

<div className="absolute inset-0 z-10 flex flex-col justify-end p-6 md:p-8 transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-4">
<div className="flex items-center gap-3 mb-2">
<span className="font-space-mono text-[10px] font-semibold uppercase tracking-widest text-white/80">( 01 / 07 )</span>
<div className="h-px w-8 bg-white/60"></div>
</div>
<h3 className="font-oswald text-4xl md:text-5xl font-medium uppercase leading-[0.9] tracking-tighter text-white">
                        Консультация</h3>
<div className="mt-4 flex items-center gap-2 text-white/80">
<iconify-icon height="16" icon="lucide:arrow-up-right" width="16"></iconify-icon>
<span className="text-[10px] font-space-mono uppercase tracking-widest">Подробнее</span>
</div>
</div>

<div className="relative z-20 h-full bg-white p-6 md:p-8 flex flex-col opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out">
<div className="flex justify-between items-start border-b border-dark pb-4 mb-8">
<span className="font-space-mono text-[10px] font-semibold uppercase tracking-widest text-dark/60">( 01 / 07 )</span>
<span className="font-space-mono text-[10px] font-semibold uppercase tracking-widest text-dark">30-60 МИНУТ</span>
</div>
<h3 className="font-oswald text-4xl md:text-5xl font-medium uppercase leading-[0.9] tracking-tighter mb-6 text-dark text-premium transition-colors">
                        Консультация</h3>
<p className="font-manrope text-sm leading-relaxed text-grey-dark mb-10 flex-grow max-w-xs">Первый шаг —
                        это диалог. Мы встречаемся онлайн или в студии, чтобы понять ваши потребности.</p>
<div className="mt-auto pt-6 border-t border-dashed border-dark/30">
<ul className="space-y-2 font-space-mono text-[10px] uppercase tracking-wide text-dark">
<li className="flex items-center gap-3">
<span className="text-premium font-semibold text-sm">+</span> Образ жизни и стиль
                            </li>
<li className="flex items-center gap-3">
<span className="text-premium font-semibold text-sm">+</span> Предпочтения по цвету
                            </li>
</ul>
</div>
</div>
</div>

<div className="group relative bg-white border-r border-b border-dark p-6 md:p-8 flex flex-col h-full hover:bg-[#fafafa] transition-colors duration-300">
<div className="flex justify-between items-start border-b border-dark pb-4 mb-8">
<span className="font-space-mono text-[10px] font-bold uppercase tracking-widest text-dark/60">( 02 / 07 )</span>
<span className="font-space-mono text-[10px] font-bold uppercase tracking-widest text-dark">1-2 ДНЯ</span>
</div>
<h3 className="font-oswald text-4xl md:text-5xl font-medium uppercase leading-[0.9] tracking-tighter mb-6 text-dark group-hover:text-premium transition-colors">
                    ВыборТкани</h3>
<p className="font-manrope text-sm leading-relaxed text-grey-dark mb-10 flex-grow max-w-xs">Тактильный выбор
                    из каталога премиальных тканей Италии и Турции.</p>
<div className="mt-auto pt-6 border-t border-dashed border-dark/30">
<ul className="space-y-2 font-space-mono text-[10px] uppercase tracking-wide text-dark">
<li className="flex items-center gap-3"><span className="text-premium font-bold text-sm">+</span> Хлопок
                            100% (Egyptian)</li>
<li className="flex items-center gap-3"><span className="text-premium font-bold text-sm">+</span> Лён
                            100% для лета</li>
</ul>
</div>
</div>

<div className="group relative bg-white border-r border-b border-dark h-full overflow-hidden cursor-pointer">

<div className="absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-105">
<img alt="Снятие Мерок" className="w-full h-full object-cover grayscale opacity-90 transition-all duration-500 group-hover:grayscale-0" src="https://images.unsplash.com/photo-1629946832022-c327f74956e0?w=2160&amp;q=80"/>
<div className="absolute inset-0 bg-dark/30 transition-opacity duration-500 group-hover:opacity-0">
</div>
</div>

<div className="absolute inset-0 z-10 flex flex-col justify-end p-6 md:p-8 transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-4">
<div className="flex items-center gap-3 mb-2">
<span className="font-space-mono text-[10px] font-semibold uppercase tracking-widest text-white/80">( 03 / 07 )</span>
<div className="h-px w-8 bg-white/60"></div>
</div>
<h3 className="font-oswald text-4xl md:text-5xl font-medium uppercase leading-[0.9] tracking-tighter text-white">
                        СнятиеМерок</h3>
<div className="mt-4 flex items-center gap-2 text-white/80">
<iconify-icon height="16" icon="lucide:arrow-up-right" width="16"></iconify-icon>
<span className="text-[10px] font-space-mono uppercase tracking-widest">Подробнее</span>
</div>
</div>

<div className="relative z-20 h-full bg-white p-6 md:p-8 flex flex-col opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out">
<div className="flex justify-between items-start border-b border-dark pb-4 mb-8">
<span className="font-space-mono text-[10px] font-semibold uppercase tracking-widest text-dark/60">( 03 / 07 )</span>
<span className="font-space-mono text-[10px] font-semibold uppercase tracking-widest text-dark">2-3 ДНЯ</span>
</div>
<h3 className="font-oswald text-4xl md:text-5xl font-medium uppercase leading-[0.9] tracking-tighter mb-6 text-dark group-hover:text-premium transition-colors">
                        СнятиеМерок</h3>
<p className="font-manrope text-sm leading-relaxed text-grey-dark mb-10 flex-grow max-w-xs">
                        Профессиональный портной снимает более 15 параметров для идеальной посадки.</p>
<div className="mt-auto pt-6 border-t border-dashed border-dark/30">
<ul className="space-y-2 font-space-mono text-[10px] uppercase tracking-wide text-dark">
<li className="flex items-center gap-3"><span className="text-premium font-bold text-sm">+</span>
                                Учет осанки</li>
<li className="flex items-center gap-3"><span className="text-premium font-bold text-sm">+</span>
                                Обхваты и длины</li>
</ul>
</div>
</div>
</div>

<div className="group relative bg-white border-r border-b border-dark p-6 md:p-8 flex flex-col h-full hover:bg-[#fafafa] transition-colors duration-300">
<div className="flex justify-between items-start border-b border-dark pb-4 mb-8">
<span className="font-space-mono text-[10px] font-bold uppercase tracking-widest text-dark/60">( 04 / 07 )</span>
<span className="font-space-mono text-[10px] font-bold uppercase tracking-widest text-dark">2-3 ДНЯ</span>
</div>
<h3 className="font-oswald text-4xl md:text-5xl font-medium uppercase leading-[0.9] tracking-tighter mb-6 text-dark group-hover:text-premium transition-colors">
                    ДизайнПроекта</h3>
<p className="font-manrope text-sm leading-relaxed text-grey-dark mb-10 flex-grow max-w-xs">Создание
                    технической спецификации и выбор визуальных деталей.</p>
<div className="mt-auto pt-6 border-t border-dashed border-dark/30">
<ul className="space-y-2 font-space-mono text-[10px] uppercase tracking-wide text-dark">
<li className="flex items-center gap-3"><span className="text-premium font-bold text-sm">+</span> Форма
                            воротника</li>
<li className="flex items-center gap-3"><span className="text-premium font-bold text-sm">+</span>
                            Манжеты и пуговицы</li>
</ul>
</div>
</div>

<div className="group relative bg-white border-r border-b border-dark h-full overflow-hidden cursor-pointer">

<div className="absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-105">
<img alt="Fitting Mockup" className="w-full h-full object-cover grayscale opacity-90 transition-all duration-500 group-hover:grayscale-0" src="https://images.unsplash.com/photo-1640906152676-dace6710d24b?w=2160&amp;q=80"/>
<div className="absolute inset-0 bg-dark/30 transition-opacity duration-500 group-hover:opacity-0">
</div>
</div>

<div className="absolute inset-0 z-10 flex flex-col justify-end p-6 md:p-8 transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-4">
<div className="flex items-center gap-3 mb-2">
<span className="font-space-mono text-[10px] font-semibold uppercase tracking-widest text-white/80">( 05 / 07 )</span>
<div className="h-px w-8 bg-white/60"></div>
</div>
<h3 className="font-oswald text-4xl md:text-5xl font-medium uppercase leading-[0.9] tracking-tighter text-white">
                        ПримеркаМакета</h3>
<div className="mt-4 flex items-center gap-2 text-white/80">
<iconify-icon height="16" icon="lucide:arrow-up-right" width="16"></iconify-icon>
<span className="text-[10px] font-space-mono uppercase tracking-widest">Подробнее</span>
</div>
</div>

<div className="relative z-20 h-full bg-white p-6 md:p-8 flex flex-col opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out">
<div className="flex justify-between items-start border-b border-dark pb-4 mb-8">
<span className="font-space-mono text-[10px] font-semibold uppercase tracking-widest text-dark/60">( 05 / 07 )</span>
<span className="font-space-mono text-[10px] font-semibold uppercase tracking-widest text-dark">5-7 ДНЕЙ</span>
</div>
<h3 className="font-oswald text-4xl md:text-5xl font-medium uppercase leading-[0.9] tracking-tighter mb-6 text-dark group-hover:text-premium transition-colors">
                        ПримеркаМакета</h3>
<p className="font-manrope text-sm leading-relaxed text-grey-dark mb-10 flex-grow max-w-xs">Пошив
                        чернового
                        макета (toile) для проверки лекал на вашей фигуре.</p>
<div className="mt-auto pt-6 border-t border-dashed border-dark/30">
<ul className="space-y-2 font-space-mono text-[10px] uppercase tracking-wide text-dark">
<li className="flex items-center gap-3"><span className="text-premium font-bold text-sm">+</span>
                                Оценка
                                комфорта</li>
<li className="flex items-center gap-3"><span className="text-premium font-bold text-sm">+</span>
                                Визуальная проверка</li>
</ul>
</div>
</div>
</div>

<div className="group relative bg-white border-r border-b border-dark p-6 md:p-8 flex flex-col h-full hover:bg-[#fafafa] transition-colors duration-300">
<div className="flex justify-between items-start border-b border-dark pb-4 mb-8">
<span className="font-space-mono text-[10px] font-bold uppercase tracking-widest text-dark/60">( 06 / 07 )</span>
<span className="font-space-mono text-[10px] font-bold uppercase tracking-widest text-dark">3-5 ДНЕЙ</span>
</div>
<h3 className="font-oswald text-4xl md:text-5xl font-medium uppercase leading-[0.9] tracking-tighter mb-6 text-dark group-hover:text-premium transition-colors">
                    КоррекцииЛекал</h3>
<p className="font-manrope text-sm leading-relaxed text-grey-dark mb-10 flex-grow max-w-xs">Внесение
                    изменений в лекала и конструкцию после примерки.</p>
<div className="mt-auto pt-6 border-t border-dashed border-dark/30">
<ul className="space-y-2 font-space-mono text-[10px] uppercase tracking-wide text-dark">
<li className="flex items-center gap-3"><span className="text-premium font-bold text-sm">+</span> Точная
                            подгонка</li>
<li className="flex items-center gap-3"><span className="text-premium font-bold text-sm">+</span>
                            Повторная проверка</li>
</ul>
</div>
</div>

<div className="group relative bg-white border-r border-b border-dark h-full overflow-hidden cursor-pointer">

<div className="z-0 transition-transform duration-700 group-hover:scale-105 absolute top-0 right-0 bottom-0 left-0">
<img alt="Shipping" className="w-full h-full object-cover grayscale opacity-90 transition-all duration-500 group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/55ca9304-ac13-4bfc-b92f-7042beb9d1ac_800w.jpg"/>
<div className="absolute inset-0 bg-dark/30 transition-opacity duration-500 group-hover:opacity-0">
</div>
</div>

<div className="absolute inset-0 z-10 flex flex-col justify-end p-6 md:p-8 transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-4">
<div className="flex items-center gap-3 mb-2">
<span className="font-space-mono text-[10px] font-semibold uppercase tracking-widest text-white/80">( 07 / 07 )</span>
<div className="h-px w-8 bg-white/60"></div>
</div>
<h3 className="font-oswald text-4xl md:text-5xl font-medium uppercase leading-[0.9] tracking-tighter text-white">
                        Отправка</h3>
<div className="mt-4 flex items-center gap-2 text-white/80">
<iconify-icon height="16" icon="lucide:arrow-up-right" width="16"></iconify-icon>
<span className="text-[10px] font-space-mono uppercase tracking-widest">Подробнее</span>
</div>
</div>

<div className="z-20 md:p-8 flex flex-col group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out bg-white opacity-0 h-full pt-6 pr-6 pb-6 pl-6 relative translate-y-8">
<div className="flex border-dark z-20 border-b mb-8 pb-4 items-start justify-between">
<span className="text-[10px] uppercase text-dark/60 font-semibold tracking-widest font-space-mono">( 07 / 07 )</span>
<span className="text-[10px] uppercase text-dark font-semibold tracking-widest font-space-mono">1-2 ДНЯ</span>
</div>
<h3 className="font-oswald text-4xl md:text-5xl font-medium uppercase leading-[0.9] tracking-tighter mb-6 text-dark group-hover:text-premium transition-colors">
                        Отправка</h3>
<p className="leading-relaxed text-grey-dark flex-grow text-sm font-manrope max-w-xs mb-10">
                        Финальная подготовка, упаковка в фирменный кейс и передача курьеру.</p>
<div className="mt-auto pt-6 border-t border-dashed border-dark/30">
<ul className="space-y-2 font-space-mono text-[10px] uppercase tracking-wide text-dark">
<li className="flex items-center gap-3"><span className="text-premium font-bold text-sm">+</span>
                                Фирменная упаковка</li>
<li className="flex items-center gap-3"><span className="text-premium font-bold text-sm">+</span>
                                Инструкции по уходу</li>
</ul>
</div>
</div>
</div>

<div className="group relative bg-white border-r border-b border-dark p-6 md:p-8 flex flex-col h-full lg:col-span-2">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-dark pb-4 mb-8 gap-4">
<div className="flex items-center gap-4">
<span className="font-space-mono text-[10px] font-semibold uppercase tracking-widest text-dark/60">( + )</span>
<span className="font-space-mono text-[10px] font-semibold uppercase tracking-widest text-dark">РАСЧЕТ СТОИМОСТИ</span>
</div>
<div className="flex items-center gap-2 text-premium">
<iconify-icon height="16" icon="lucide:calculator" width="16"></iconify-icon>
<span className="font-space-mono text-[10px] font-semibold uppercase tracking-widest">Индивидуально</span>
</div>
</div>
<div className="flex flex-col lg:flex-row gap-8 lg:gap-12 h-full">
<div className="lg:w-1/2 flex flex-col justify-center">
<h3 className="font-oswald text-4xl md:text-5xl font-medium uppercase leading-[0.9] tracking-tighter mb-6 text-dark">
                            Узнайте стоимость <span className="text-grey-dark">Вашего проекта</span>
</h3>
<p className="font-manrope text-sm leading-relaxed text-grey-dark max-w-md">
                            Заполните форму, и мы свяжемся с вами для детального расчета стоимости и сроков пошива.
                            Консультация бесплатна.
                        </p>
</div>
<div className="lg:w-1/2">
<form className="flex flex-col gap-4 h-full justify-center">
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="group/input">
<label className="font-space-mono text-[10px] uppercase tracking-widest text-dark/60 mb-2 block group-focus-within/input:text-dark transition-colors">Ваше имя</label>
<input className="w-full bg-white border border-dark p-3 text-sm font-manrope placeholder:text-dark/20 focus:outline-none focus:ring-1 focus:ring-dark focus:border-dark transition-all" placeholder="Иван Петров" type="text"/>
</div>
<div className="group/input">
<label className="font-space-mono text-[10px] uppercase tracking-widest text-dark/60 mb-2 block group-focus-within/input:text-dark transition-colors">Телефон</label>
<input className="w-full bg-white border border-dark p-3 text-sm font-manrope placeholder:text-dark/20 focus:outline-none focus:ring-1 focus:ring-dark focus:border-dark transition-all" placeholder="+7 (___) ___-__-__" type="tel"/>
</div>
</div>
<button className="w-full bg-dark text-white font-space-mono text-xs font-bold uppercase tracking-widest py-4 hover:bg-premium hover:text-dark transition-all duration-300 mt-2 flex items-center justify-center gap-3 group/btn" type="button">
<span className="">Рассчитать стоимость</span>
<iconify-icon className="group-hover/btn:translate-x-1 transition-transform" height="16" icon="lucide:arrow-right" width="16"></iconify-icon>
</button>
<p className="text-[10px] text-grey-dark text-center mt-2 font-manrope">Нажимая кнопку, вы
                                соглашаетесь с политикой конфиденциальности</p>
</form>
</div>
</div>
</div>
</div>

<div className="border-grey-light border-t mt-48 pt-32 pb-24">
<div className="flex flex-col md:flex-row gap-12 md:gap-24">

<div className="md:w-1/3">
<h2 className="text-3xl md:text-4xl font-light text-dark mb-6 tracking-tight leading-[1.1]">Часто
                задаваемые вопросы
                <span className="text-grey-dark text-2xl md:text-3xl italic font-serif">для селлеров и оптовиков</span>
</h2>
<p className="text-sm text-grey-dark leading-relaxed">Ответы на популярные вопросы о производстве,
                сроках и условиях сотрудничества для B2B клиентов.</p>
</div>

<div className="md:w-2/3">
<div className="space-y-0 divide-y divide-grey-light border-y border-grey-light">

<div className="group relative py-8 cursor-pointer overflow-hidden">

<div className="absolute right-0 top-1/2 -translate-y-1/2 w-64 h-32 opacity-0 translate-x-12 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 ease-out pointer-events-none z-0 hidden lg:block">
<img alt="Production" className="w-full h-full object-cover grayscale brightness-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c6a5fd74-35d9-49ee-b1ef-f840d0fca109_800w.png"/>
</div>
<div className="relative z-10 pr-0 lg:pr-72">
<h3 className="text-lg font-medium text-dark mb-2 group-hover:text-premium transition-colors pr-8">
                            Какой минимальный оптовый заказ и можно ли делать микс размеров?</h3>
<p className="text-sm text-grey-dark leading-relaxed h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-300 overflow-hidden">
                            Минимальный оптовый заказ — от 30–50 единиц в партии (в зависимости от модели).
                            Внутри партии можно делать микс размеров и цветов, при этом минимальный тираж на
                            один размер/цвет оговаривается индивидуально (например, от 5 единиц на размер).
                        </p>
</div>

<div className="absolute top-8 right-0 text-dark/30 group-hover:text-premium transition-colors lg:hidden">
<iconify-icon height="20" icon="lucide:chevron-down" width="20"></iconify-icon>
</div>
</div>

<div className="group relative py-8 cursor-pointer overflow-hidden">
<div className="absolute right-0 top-1/2 -translate-y-1/2 w-64 h-32 opacity-0 translate-x-12 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 ease-out pointer-events-none z-0 hidden lg:block">
<img alt="Deadlines" className="w-full h-full object-cover grayscale brightness-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9ad90f07-6bfa-46e6-9230-6eb675dabf60_800w.png"/>
</div>
<div className="relative z-10 pr-0 lg:pr-72">
<h3 className="text-lg font-medium text-dark mb-2 group-hover:text-premium transition-colors pr-8">
                            Какой срок производства оптовой партии и можно ли его ускорить?</h3>
<p className="text-sm text-grey-dark leading-relaxed h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-300 overflow-hidden">
                            Стандартный срок производства после утверждения образца и предоплаты — от 10 до 21
                            дня в зависимости от объёма заказа и сложности модели. Срочное производство возможно
                            по договорённости — при этом применяется надбавка к стоимости.
                        </p>
</div>
<div className="absolute top-8 right-0 text-dark/30 group-hover:text-premium transition-colors lg:hidden">
<iconify-icon height="20" icon="lucide:chevron-down" width="20"></iconify-icon>
</div>
</div>

<div className="group relative py-8 cursor-pointer overflow-hidden">
<div className="absolute right-0 top-1/2 -translate-y-1/2 w-64 h-32 opacity-0 translate-x-12 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 ease-out pointer-events-none z-0 hidden lg:block">
<img alt="Label" className="w-full h-full object-cover grayscale brightness-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/12acf0b8-8b5c-4b5f-bc9c-3b9c215fdc4a_800w.png"/>
</div>
<div className="relative z-10 pr-0 lg:pr-72">
<h3 className="text-lg font-medium text-dark mb-2 group-hover:text-premium transition-colors pr-8">
                            Можете ли вы использовать наш бренд (Private Label)?</h3>
<div className="text-sm text-grey-dark leading-relaxed h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-300 overflow-hidden">
                            Да, мы специализируемся на производстве под брендом заказчика (White Label / Private
                            Label). Мы пришиваем ваши бирки, составники и упаковываем товар в вашу фирменную
                            упаковку, чтобы он был полностью готов к продаже на маркетплейсах или в бутиках.
                        </div>
</div>
<div className="absolute top-8 right-0 text-dark/30 group-hover:text-premium transition-colors lg:hidden">
<iconify-icon height="20" icon="lucide:chevron-down" width="20"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative w-full bg-dark overflow-clip" id="categories-gallery">

<div className="w-full relative">

<div className="sticky top-0 z-10 w-full h-screen bg-[#FEFDFB] flex flex-col md:flex-row border-b border-dark/10 overflow-hidden">

<div className="md:w-1/2 md:h-full flex flex-col md:p-12 lg:p-16 md:border-b-0 md:border-r border-dark w-full h-1/2 border-b pt-6 pr-6 pb-6 pl-6 relative justify-between">

<div className="flex justify-between items-start w-full">
<div className="flex flex-col gap-2">
<span className="font-space-mono text-[10px] uppercase tracking-widest text-grey-dark">( 01 — 03 )</span>
<h3 className="font-oswald text-xl font-medium uppercase tracking-tight text-dark">BAZIKO PREMIUM</h3>
</div>
<span className="font-space-mono text-[10px] uppercase tracking-widest text-dark border border-dark px-3 py-1 rounded-full">New Season</span>
</div>

<div className="flex flex-col gap-6 md:pt-0 mt-auto mb-auto pt-8 gap-x-6 gap-y-6">
<h2 className="relative z-10 w-full break-words font-oswald text-5xl font-medium uppercase leading-[0.85] tracking-tighter text-dark md:text-6xl lg:text-7xl xl:text-8xl">
        Женская <span className="text-premium">Коллекция</span>
</h2>
<p className="font-manrope text-base md:text-lg text-grey-dark max-w-md font-light leading-relaxed">
        Искусство создания женской одежды. От элегантных блуз до сложных конструктивных решений. Премиальные ткани и безупречная посадка.
    </p>

<div className="flex gap-8 border-dark/10 w-full max-w-md border-t pt-4 gap-x-8 gap-y-8 items-center -mt-6 relative z-20">
<a className="group flex w-full items-center justify-between" href="#">
<span className="font-space-mono text-xs font-bold uppercase tracking-widest text-dark transition-colors group-hover:text-premium">Смотреть каталог</span>
<div className="flex h-10 w-10 items-center justify-center rounded-full border border-dark transition-all duration-300 group-hover:bg-dark group-hover:text-white">
<svg className="lucide lucide-arrow-right transition-transform duration-300 group-hover:-rotate-45" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</div>
</a>
</div>


<button className="group flex items-center gap-4 w-full md:w-auto justify-between md:justify-start mt-2">
</button>
</div>

<div className="flex md:pt-8 border-dark/10 md:mt-0 w-full border-t mt-auto pt-6 items-center justify-between hidden"></div>
</div>

<div className="w-full md:w-1/2 h-1/2 md:h-full relative overflow-hidden group bg-grey-light">
<img alt="Womens Collection" className="transition-transform duration-1000 group-hover:scale-105 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f5102adb-a0f6-4f63-9278-bb77331d9751_1600w.jpg"/>

<div className="absolute bottom-6 left-6 right-6 flex justify-between items-end opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
<div className="bg-white/95 backdrop-blur-sm p-4 border border-dark/10 max-w-xs shadow-lg">
<p className="font-manrope text-xs text-dark leading-relaxed">
<span className="font-bold block mb-1 tracking-widest uppercase text-[10px]">Ткани</span>
                            Шелк, Египетский хлопок, Вискоза. Разработка лекал по эскизам.
                        </p>
</div>
</div>
</div>
</div>

<div className="sticky top-0 z-20 w-full h-screen bg-[#F5F5F5] flex flex-col md:flex-row border-t border-b border-dark overflow-hidden shadow-2xl shadow-black/5">

<div className="md:w-1/2 md:h-full flex flex-col md:p-12 lg:p-16 md:border-b-0 md:border-r border-dark w-full h-1/2 border-b pt-6 pr-6 pb-6 pl-6 relative justify-between">

<div className="flex justify-between items-start w-full">
<div className="flex flex-col gap-2 min-w-0">
<span className="font-space-mono text-[10px] uppercase tracking-widest text-grey-dark whitespace-nowrap">( 02 — 03 )</span>
<h3 className="font-oswald text-xl font-medium uppercase tracking-tight text-dark break-words">BAZIKO PREMIUM</h3>
</div>
</div>

<div className="flex flex-col gap-6 mt-auto mb-auto pt-8 md:pt-0 min-w-0">
<h2 className="font-oswald text-5xl md:text-7xl lg:text-8xl font-medium uppercase leading-[0.85] tracking-tighter text-dark break-words">
                        Мужская <span className="text-[#857262]">Линия</span>
</h2>
<p className="font-manrope text-base md:text-lg text-grey-dark max-w-md font-light leading-relaxed break-words">
                        Строгая классика и современный casual. Сорочки, которые подчеркивают статус. Идеальная геометрия лекал и долговечность в каждой строчке.
                    </p>
</div>

<div className="flex items-center justify-between w-full pt-6 md:pt-8 border-t border-dark/10 mt-auto md:mt-0 gap-4 min-w-0">
<span className="font-space-mono text-[10px] uppercase tracking-widest text-grey-dark hidden md:block whitespace-nowrap">Сделано в Бишкеке</span>
<button className="group flex items-center gap-4 w-full md:w-auto justify-between md:justify-start min-w-0">
<span className="font-space-mono text-xs font-bold uppercase tracking-widest text-dark group-hover:text-[#857262] transition-colors break-words">Смотреть каталог</span>
<div className="w-10 h-10 rounded-full border border-dark flex items-center justify-center group-hover:bg-[#857262] group-hover:border-[#857262] group-hover:text-white transition-all-300 shrink-0">
<iconify-icon className="transition-transform duration-300 group-hover:rotate-0 rotate-0" height="20" icon="lucide:arrow-right" width="20"></iconify-icon>
</div>
</button>
</div>
</div>

<div className="w-full md:w-1/2 h-1/2 md:h-full relative overflow-hidden group bg-grey-light">
<img alt="Mens Collection" className="transition-transform duration-1000 group-hover:scale-105 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/12acf0b8-8b5c-4b5f-bc9c-3b9c215fdc4a_1600w.png"/>
<div className="absolute bottom-6 left-6 right-6 flex justify-between items-end opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
<div className="bg-white/95 backdrop-blur-sm p-4 border border-dark/10 max-w-xs shadow-lg">
<p className="font-manrope text-xs text-dark leading-relaxed">
<span className="font-bold block mb-1 tracking-widest uppercase text-[10px]">Технологии</span>
                            Non-Iron, Проклеенные швы, Усиленные воротники.
                        </p>
</div>
</div>
</div>
</div>

<div className="sticky top-0 z-30 w-full h-screen bg-[#EBE3DD] flex flex-col md:flex-row border-t border-dark overflow-hidden shadow-2xl shadow-black/10">

<div className="md:w-1/2 md:h-full flex flex-col md:p-12 lg:p-16 md:border-b-0 md:border-r border-dark w-full h-1/2 border-b pt-6 pr-6 pb-6 pl-6 relative justify-between">

<div className="flex justify-between items-start w-full min-w-0 gap-4">
<div className="flex flex-col gap-2 min-w-0">
<span className="font-space-mono text-[10px] uppercase tracking-widest text-grey-dark whitespace-nowrap">( 03 — 03 )</span>
<h3 className="font-oswald text-xl font-medium uppercase tracking-tight text-dark break-words">BAZIKO PREMIUM</h3>
</div>
</div>

<div className="flex flex-col gap-6 mt-auto mb-auto pt-8 md:pt-0 min-w-0">
<h2 className="font-oswald text-5xl md:text-7xl lg:text-8xl font-medium uppercase leading-[0.85] tracking-tighter text-dark break-words max-w-full">
                        Детская <span className="text-white drop-shadow-sm">Одежда</span>
</h2>
<p className="font-manrope text-base md:text-lg text-grey-dark max-w-md font-light leading-relaxed break-words">
                        Безопасные материалы и комфорт для активных движений. Школьная форма и повседневный стиль, которые нравятся детям и родителям.
                    </p>
</div>

<div className="flex items-center justify-between w-full pt-6 md:pt-8 border-t border-dark/10 mt-auto md:mt-0 gap-4 min-w-0">
<span className="font-space-mono text-[10px] uppercase tracking-widest text-grey-dark hidden md:block whitespace-nowrap">Сделано в Бишкеке</span>
<button className="group flex items-center gap-4 w-full md:w-auto justify-between md:justify-start min-w-0">
<span className="font-space-mono text-xs font-bold uppercase tracking-widest text-dark group-hover:text-white transition-colors break-words">Смотреть каталог</span>
<div className="w-10 h-10 rounded-full border border-dark flex items-center justify-center group-hover:bg-dark group-hover:text-white transition-all duration-300 shrink-0">
<iconify-icon className="transition-transform duration-300 group-hover:rotate-0 rotate-0" height="20" icon="lucide:arrow-right" width="20"></iconify-icon>
</div>
</button>
</div>
</div>

<div className="w-full md:w-1/2 h-1/2 md:h-full relative overflow-hidden group bg-grey-light">
<img alt="Kids Collection" className="transition-transform duration-1000 group-hover:scale-105 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ed72aa6d-906a-40a9-8cb5-aa76a6bc5e9d_1600w.jpg"/>
<div className="absolute bottom-6 left-6 right-6 flex justify-between items-end opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
<div className="bg-white/95 backdrop-blur-sm p-4 border border-dark/10 max-w-xs shadow-lg">
<p className="font-manrope text-xs text-dark leading-relaxed">
<span className="font-bold block mb-1 tracking-widest uppercase text-[10px]">Материалы</span>
                            Гипоаллергенный хлопок, Soft-touch трикотаж. Прочные швы.
                        </p>
</div>
</div>
</div>
</div>
</div>
</section>
</div> 

<div className="page-section" id="page-zhenskiye-rubashki">
<div className="pt-40 pb-20 text-center"><h1 className="text-4xl">Женские рубашки</h1><p className="mt-4 text-grey-dark">Каталог в разработке...</p></div>
</div>
<div className="page-section" id="page-muzhskiye-rubashki">
<div className="pt-40 pb-20 text-center"><h1 className="text-4xl">Мужские рубашки</h1><p className="mt-4 text-grey-dark">Каталог в разработке...</p></div>
</div>
<div className="page-section" id="page-individualnyy-poshiv-rubashek">
<div className="pt-40 pb-20 text-center"><h1 className="text-4xl">Ателье</h1><p className="mt-4 text-grey-dark">Страница ателье...</p></div>
</div>
<div className="page-section" id="page-optovyy-poshiv-odezhdy-bishkek">
<div className="pt-40 pb-20 text-center"><h1 className="text-4xl">Оптовый пошив</h1><p className="mt-4 text-grey-dark">Информация для оптовиков...</p></div>
</div>
<div className="page-section" id="page-protsess-raboty">
<div className="pt-40 pb-20 text-center"><h1 className="text-4xl">Процесс работы</h1><p className="mt-4 text-grey-dark">Описание этапов...</p></div>
</div>
<div className="page-section" id="page-kontakty">
<div className="pt-40 pb-20 text-center"><h1 className="text-4xl">Контакты</h1><p className="mt-4 text-grey-dark">Наши контакты...</p></div>
</div>
</main>

<footer className="bg-[#857262] text-white border-white/10 border-t pt-20 pb-10">
<div className="max-w-[1400px] mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">

<div className="flex flex-col items-start">
<a className="flex items-center gap-3 mb-8 group cursor-pointer" href="#" onclick="router('/')">
<div className="w-2 h-8 bg-white group-hover:bg-white/80 transition-colors"></div>
<div className="flex flex-col">
<span className="text-xl font-semibold tracking-tight text-white leading-none">BAZILO</span>
<span className="text-[10px] font-medium text-white/70 tracking-[0.2em] uppercase mt-0.5">Premium</span>
</div>
</a>
<p className="text-white/80 text-sm leading-relaxed mb-8 max-w-xs">
                        Премиальное швейное производство полного цикла в Бишкеке. Создаем одежду, которая продает сама себя.
                    </p>
<div className="flex gap-4">
</div>
</div>

<div className="">
<h4 className="text-xs font-bold uppercase tracking-widest text-white/60 mb-8">Меню</h4>
<ul className="space-y-4 text-sm font-medium">
<li className=""><a className="text-white hover:text-white/70 transition-colors" href="#" onclick="router('/')">Главная</a></li>
<li className=""><a className="text-white hover:text-white/70 transition-colors" href="#" onclick="router('/zhenskiye-rubashki')">Женская коллекция</a></li>
</ul>
</div>

<div className="">
<h4 className="text-xs font-bold uppercase tracking-widest text-white/60 mb-8">Контакты</h4>
<ul className="space-y-6 text-sm">
<li className="">
<span className="block text-xs text-white/60 mb-1">Адрес производства</span>
<span className="text-white">Кыргызстан, г. Бишкек, ул. Абдыкадырова 101 
bazikokg@gmail.com</span>
</li>
<li className="">
<span className="block text-xs text-white/60 mb-1">Отдел продаж</span>
<a className="block hover:text-white/80 transition-colors text-xl text-white tracking-wide font-oswald" href="/tel:+996998154550">+996 (998) 154-550	
</a>
</li>
</ul>
</div>

<div className="relative h-64 lg:h-auto rounded-lg overflow-hidden group">
<img alt="Bazilo Workshop" className="group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 object-top opacity-70 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/12acf0b8-8b5c-4b5f-bc9c-3b9c215fdc4a_800w.png"/>
<div className="flex flex-col bg-gradient-to-t from-[#857262] via-[#857262]/80 to-transparent pt-12 pr-6 pb-6 pl-6 absolute bottom-0 right-0 left-0 h-2/3 justify-end">
<span className="text-[10px] font-bold uppercase tracking-widest text-white/70 mb-1">Backstage</span>
<p className="text-sm text-white font-medium">Посмотрите, как создается качество</p>
</div>
</div>
</div>

<div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-white/50 uppercase tracking-widest">
<p>© 2026 Bazilo Premium Tailoring. Все права защищены.</p>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
