import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Initialize Icons
        lucide.createIcons();

        // Header Scroll Effect
        const header = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 20) {
                header.classList.add('bg-white/90', 'backdrop-blur-lg', 'shadow-sm', 'py-2');
                header.classList.remove('bg-transparent', 'py-4');
            } else {
                header.classList.remove('bg-white/90', 'backdrop-blur-lg', 'shadow-sm', 'py-2');
                header.classList.add('bg-transparent', 'py-4');
            }
        });

        // Active Nav Link Highlighting
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');

        window.addEventListener('scroll', () => {
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (scrollY >= (sectionTop - 200)) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('text-[#FF8C00]');
                if (link.getAttribute('href').includes(current)) {
                    link.classList.add('text-[#FF8C00]');
                }
            });
        });

        // Custom Dropdown Logic
        const dropdownOptions = document.getElementById('dropdown-options');
        const selectText = document.getElementById('select-text');
        const serviceInput = document.getElementById('service-input');
        
        function toggleDropdown() {
            dropdownOptions.classList.toggle('hidden');
        }

        function selectOption(value) {
            selectText.textContent = value;
            selectText.classList.remove('text-gray-500');
            selectText.classList.add('text-gray-900');
            serviceInput.value = value;
            dropdownOptions.classList.add('hidden');
            
            // Dispatch event for HTML5 validation if needed
            serviceInput.dispatchEvent(new Event('change'));
        }

        // Close dropdown when clicking outside
        document.addEventListener('click', function(event) {
            const selectContainer = document.getElementById('custom-select');
            if (!selectContainer.contains(event.target)) {
                dropdownOptions.classList.add('hidden');
            }
        });

        // Form Submission Mock
        const form = document.getElementById('booking-form');
        const successMsg = document.getElementById('form-success');

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            // Basic custom validation for the hidden select
            if (!serviceInput.value) {
                alert('Пожалуйста, выберите услугу');
                dropdownOptions.classList.remove('hidden');
                return;
            }
            
            // Show success message
            successMsg.classList.remove('hidden');
            successMsg.classList.add('flex');
            form.reset();
            // reset custom dropdown visual
            selectText.textContent = 'Выберите направление';
            selectText.classList.add('text-gray-500');
            selectText.classList.remove('text-gray-900');
            serviceInput.value = '';
        });

        function resetForm() {
            successMsg.classList.add('hidden');
            successMsg.classList.remove('flex');
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed transition-all duration-300 z-50 pt-4 pb-4 top-0 right-0 left-0" id="navbar">
<div className="sm:px-6 lg:px-8 flex max-w-7xl mr-auto ml-auto pr-4 pl-4 relative items-center justify-between">

<a className="flex items-center gap-2 z-10 group" href="#">
<div className="flex flex-col -gap-1">
<span className="text-xs tracking-widest uppercase font-semibold text-neutral-500">Детский центр</span>
<span className="text-2xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#FF8C00] to-[#00BFFF]">КЕНГУРУ</span>
</div>
</a>

<nav className="hidden md:flex items-center gap-8 backdrop-blur-md px-8 py-3 rounded-[30px] shadow-sm border bg-white/80 border-white/50">
<a className="nav-link text-base font-medium hover:text-[#FF8C00] transition-colors relative text-neutral-600" href="#services">Услуги</a>
<a className="nav-link text-base font-medium hover:text-[#FF8C00] transition-colors relative text-neutral-600" href="#about">О центре</a>
<a className="nav-link text-base font-medium hover:text-[#FF8C00] transition-colors relative text-neutral-600" href="#parties">Праздники</a>
<a className="nav-link text-base font-medium hover:text-[#FF8C00] transition-colors relative text-neutral-600" href="#reviews">Отзывы</a>
<a className="nav-link text-base font-medium hover:text-[#FF8C00] transition-colors relative text-neutral-600" href="#prices">Цены</a>
<a className="nav-link text-base font-medium hover:text-[#FF8C00] transition-colors relative text-neutral-600" href="#contact">Контакты</a>
</nav>

<div className="hidden md:flex items-center gap-3 px-5 py-2.5 rounded-full shadow-sm border z-10 bg-white border-neutral-100">
<div className="w-8 h-8 rounded-full flex items-center justify-center text-[#4CAF50] bg-amber-100">
<i className="w-4 h-4" data-lucide="phone" strokeWidth="1.5"></i>
</div>
<a className="text-lg font-semibold tracking-tight hover:text-[#4CAF50] transition-colors" href="tel:+78452987998">8 (845) 298-79-98</a>
</div>
</div>
</header>

<div className="md:hidden fixed bottom-0 left-0 right-0 z-50 shadow-[0_-10px_40px_rgba(0,0,0,0.05)] border-t px-6 py-3 pb-safe bg-white border-neutral-100">
<div className="flex justify-between items-center">
<a className="mobile-nav-link flex flex-col items-center gap-1 hover:text-[#FF8C00] active:text-[#FF8C00] transition-colors text-neutral-400" href="#">
<i className="w-6 h-6" data-lucide="home" strokeWidth="1.5"></i>
<span className="text-[10px] font-medium">Главная</span>
</a>
<a className="mobile-nav-link flex flex-col items-center gap-1 hover:text-[#FF8C00] transition-colors text-neutral-400" href="#services">
<i className="w-6 h-6" data-lucide="shapes" strokeWidth="1.5"></i>
<span className="text-[10px] font-medium">Услуги</span>
</a>
<a className="mobile-nav-link flex flex-col items-center gap-1 hover:text-[#FF8C00] transition-colors text-neutral-400" href="#parties">
<i className="w-6 h-6" data-lucide="party-popper" strokeWidth="1.5"></i>
<span className="text-[10px] font-medium">Праздники</span>
</a>
<a className="flex flex-col items-center gap-1 hover:text-[#4CAF50] transition-colors text-neutral-400" href="tel:+78452987998">
<i className="w-6 h-6" data-lucide="phone" strokeWidth="1.5"></i>
<span className="text-[10px] font-medium">Звонок</span>
</a>
<a className="flex flex-col items-center gap-1 hover:text-[#00BFFF] transition-colors text-neutral-400" href="https://vk.com/kenguru_64" rel="noopener noreferrer" target="_blank">
<i className="w-6 h-6" data-lucide="smile" strokeWidth="1.5"></i>
<span className="text-[10px] font-medium">VK</span>
</a>
</div>
</div>

<section className="lg:pt-48 lg:pb-32 overflow-hidden pt-32 pb-20 relative">

<div className="absolute top-0 right-0 w-full md:w-3/4 h-[800px] bg-gradient-to-bl from-[#FFEB3B]/40 via-[#FF8C00]/20 to-transparent rounded-bl-[100px] -z-10"></div>
<div className="absolute top-40 -left-20 w-72 h-72 bg-[#00BFFF]/10 rounded-full blur-3xl -z-10"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
<div className="flex flex-col lg:flex-row lg:gap-8 gap-x-12 gap-y-12 items-center">

<div className="w-full lg:w-3/5 text-left z-10">
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur border text-[#FF8C00] font-medium text-sm mb-6 shadow-sm bg-white/80 border-cyan-200">
<span className="w-2 h-2 rounded-full bg-[#4CAF50] animate-pulse"></span>
                        Идёт набор в группы
                    </div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight mb-6 text-neutral-900">
                        Детский центр «Кенгуру» — <span className="text-[#FF8C00]">развитие</span>, праздники и забота в Саратове
                    </h1>
<p className="sm:text-xl leading-relaxed text-lg text-neutral-600 max-w-2xl mb-10">Комплексные программы для детей от 1,6 года до 12 лет. Городской летний лагерь, логопед, английский, шахматы, творчество и самые весёлые дни рождения в уютном безопасном пространстве.</p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex justify-center items-center px-8 py-4 text-lg font-medium bg-[#FF8C00] rounded-[20px] hover:bg-[#e67e00] hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(255,140,0,0.3)] transition-all duration-300 text-white" href="#contact">
                            Записаться на пробное
                        </a>
<a className="inline-flex justify-center items-center hover:bg-[#00BFFF]/5 hover:-translate-y-1 transition-all duration-300 text-lg font-medium text-[#00BFFF] bg-white border-[#00BFFF] border-2 rounded-[20px] pt-4 pr-8 pb-4 pl-8" href="#parties">
                            Рассчитать праздник
                        </a>
</div>
</div>

<div className="w-full lg:w-2/5 relative hidden md:block">

<div className="absolute -top-6 -left-10 px-6 py-4 rounded-[24px] rounded-br-none shadow-xl border z-20 animate-[bounce_3s_ease-in-out_infinite] bg-white border-neutral-100">
<p className="text-lg font-semibold text-[#00BFFF] tracking-tight">Выберите своё!</p>
</div>

<div className="absolute inset-0 bg-gradient-to-tr from-[#FFF9E6] to-[#FFEB3B]/50 rounded-full scale-90 -z-10"></div>


<div className="-bottom-8 flex text-5xl text-neutral-900 bg-[#FFD700] w-24 h-24 border-white border-4 rounded-full absolute right-10 shadow-lg rotate-12 items-center justify-center">🦘</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative bg-white" id="services">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-[#00BFFF]">Что мы предлагаем</h2>
<p className="mt-4 text-lg text-neutral-500">Бережное развитие для каждого возраста</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">

<div className="bg-[#FFF9E6] p-8 rounded-[30px] border-2 border-[#4CAF50] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full group">
<div className="w-16 h-16 rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform bg-white">
<span className="text-3xl">🧩</span>
</div>
<h3 className="text-2xl font-semibold mb-3 tracking-tight text-neutral-900">Комплексные программы</h3>
<p className="mb-6 flex-grow text-lg text-neutral-600">Развитие речи, моторики, логики и социальных навыков в игровой форме.</p>
<div className="flex flex-wrap gap-3 mt-auto">
<span className="px-4 py-1.5 text-[#4CAF50] rounded-full text-sm font-medium bg-amber-100">1,6 – 7 лет</span>
<span className="px-4 py-1.5 text-[#FF8C00] rounded-full text-sm font-medium bg-green-100">от 580 ₽/занятие</span>
</div>
</div>

<div className="bg-[#FFF9E6] p-8 rounded-[30px] border-2 border-[#FF8C00] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full group">
<div className="w-16 h-16 rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform bg-white">
<span className="text-3xl">🎨</span>
</div>
<h3 className="text-2xl font-semibold mb-3 tracking-tight text-neutral-900">Творческая мастерская</h3>
<p className="mb-6 flex-grow text-lg text-neutral-600">Раскрываем таланты: лепка, рисование, аппликация и нестандартные техники.</p>
<div className="flex flex-wrap gap-3 mt-auto">
<span className="px-4 py-1.5 text-[#4CAF50] rounded-full text-sm font-medium bg-amber-100">3,5 – 9 лет</span>
<span className="px-4 py-1.5 text-[#FF8C00] rounded-full text-sm font-medium bg-green-100">от 640 ₽/занятие</span>
</div>
</div>

<div className="bg-[#FFF9E6] p-8 rounded-[30px] border-2 border-[#00BFFF] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full group">
<div className="w-16 h-16 rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform bg-white">
<span className="text-3xl">🇬🇧</span>
</div>
<h3 className="text-2xl font-semibold mb-3 tracking-tight text-neutral-900">Английский язык</h3>
<p className="mb-6 flex-grow text-lg text-neutral-600">Погружение в языковую среду с песнями, играми и интерактивными пособиями.</p>
<div className="flex flex-wrap gap-3 mt-auto">
<span className="px-4 py-1.5 text-[#4CAF50] rounded-full text-sm font-medium bg-amber-100">4 – 12 лет</span>
<span className="px-4 py-1.5 text-[#FF8C00] rounded-full text-sm font-medium bg-green-100">от 620 ₽/занятие</span>
</div>
</div>

<div className="bg-[#FFF9E6] p-8 rounded-[30px] border-2 border-[#FFEB3B] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full group">
<div className="w-16 h-16 rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform bg-white">
<span className="text-3xl">🗣️</span>
</div>
<h3 className="text-2xl font-semibold mb-3 tracking-tight text-neutral-900">Логопед</h3>
<p className="mb-6 flex-grow text-lg text-neutral-600">Коррекция звукопроизношения, запуск речи, логопедический массаж.</p>
<div className="flex flex-wrap gap-3 mt-auto">
<span className="px-4 py-1.5 text-[#4CAF50] rounded-full text-sm font-medium bg-amber-100">2 – 7 лет</span>
<span className="px-4 py-1.5 text-[#FF8C00] rounded-full text-sm font-medium bg-green-100">от 920 ₽ индив.</span>
</div>
</div>

<div className="bg-[#FFF9E6] p-8 rounded-[30px] border-2 border-[#4CAF50] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full group">
<div className="w-16 h-16 rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform bg-white">
<span className="text-3xl">♟️</span>
</div>
<h3 className="text-2xl font-semibold mb-3 tracking-tight text-neutral-900">Шахматы</h3>
<p className="mb-6 flex-grow text-lg text-neutral-600">Тренировка памяти, логики и усидчивости через увлекательные шахматные баталии.</p>
<div className="flex flex-wrap gap-3 mt-auto">
<span className="px-4 py-1.5 text-[#4CAF50] rounded-full text-sm font-medium bg-amber-100">4,5 – 12 лет</span>
<span className="px-4 py-1.5 text-[#FF8C00] rounded-full text-sm font-medium bg-green-100">от 640 ₽/занятие</span>
</div>
</div>

<div className="bg-[#FFF9E6] p-8 rounded-[30px] border-2 border-[#00BFFF] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full group">
<div className="w-16 h-16 rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform bg-white">
<span className="text-3xl">🎉</span>
</div>
<h3 className="text-2xl font-semibold mb-3 tracking-tight text-neutral-900">Организация праздников</h3>
<p className="mb-6 flex-grow text-lg text-neutral-600">Яркие дни рождения с любимыми героями, шоу-программами и бумажной дискотекой.</p>
<div className="flex flex-wrap gap-3 mt-auto">
<span className="px-4 py-1.5 text-[#4CAF50] rounded-full text-sm font-medium bg-amber-100">любой возраст</span>
<span className="px-4 py-1.5 bg-[#FFEB3B]/50 rounded-full text-sm font-medium text-neutral-800">индив. расчёт</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#FFF9E6]" id="about">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="grid grid-cols-2 gap-4 relative">
<div className="absolute inset-0 bg-[#FF8C00] rounded-[40px] rotate-3 blur-lg opacity-20 z-0"></div>
<img alt="Педагог занимается с ребенком" className="w-full h-64 object-cover rounded-[30px] rounded-tl-[60px] shadow-lg z-10 relative mt-8" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2e4165bc-c1fc-42cf-9a76-865f36e1f087_1600w.webp"/>
<img alt="Игровая комната центра Кенгуру" className="w-full h-80 object-cover rounded-[30px] rounded-br-[60px] shadow-lg z-10 relative" src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
</div>

<div className="">
<h2 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-8 text-neutral-900">С заботой о каждом<br/>шаге развития</h2>
<p className="text-lg mb-6 leading-relaxed text-neutral-600">
                        Наши педагоги — дипломированные специалисты с опытом работы с детьми. Помещение центра площадью более 100 м² оснащено пожарно‑охранной сигнализацией, запасным выходом и соответствует всем санитарным нормам.
                    </p>
<p className="text-lg mb-10 leading-relaxed text-neutral-600">
                        Все материалы и пособия имеют сертификаты. Каждому ребёнку мы помогаем раскрыть потенциал, укрепить здоровье и получить заряд положительных эмоций.
                    </p>
<div className="flex flex-col sm:flex-row gap-4">
<div className="flex items-center gap-3 px-5 py-3 rounded-2xl border shadow-sm bg-white border-neutral-100">
<i className="w-6 h-6 text-[#4CAF50]" data-lucide="shield-check" strokeWidth="1.5"></i>
<span className="text-sm font-medium text-neutral-700">Лицензия № 64Л01</span>
</div>
<div className="flex items-center gap-3 px-5 py-3 rounded-2xl border shadow-sm bg-white border-neutral-100">
<i className="w-6 h-6 text-[#FF8C00]" data-lucide="award" strokeWidth="1.5"></i>
<span className="text-sm font-medium text-neutral-700">Член Ассоциации детских центров</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden bg-neutral-900" id="parties">

<div className="absolute inset-0">
<img alt="Детский день рождения праздник" className="w-full h-full object-cover opacity-40" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t to-transparent from-neutral-900 via-neutral-900/80"></div>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center text-white">
<span className="text-5xl mb-6 block">🥳</span>
<h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-[#FF8C00] mb-8">Дни рождения и тематические праздники</h2>
<p className="text-xl max-w-3xl mx-auto mb-16 leading-relaxed text-neutral-200">
                Уютное пространство 100 м², талантливые аниматоры, красочные костюмы и декорации, профессиональный свет, звук и шоу‑эффекты. Индивидуальный сценарий для вашего ребёнка.
            </p>

<div className="flex flex-wrap justify-center gap-6 mb-16">
<div className="backdrop-blur-md border px-6 py-4 rounded-2xl flex items-center gap-4 bg-white/10 border-white/20">
<i className="w-6 h-6 text-[#FFEB3B]" data-lucide="expand" strokeWidth="1.5"></i>
<span className="text-lg font-medium">100 м² пространства</span>
</div>
<div className="backdrop-blur-md border px-6 py-4 rounded-2xl flex items-center gap-4 bg-white/10 border-white/20">
<i className="w-6 h-6 text-[#4FC3F7]" data-lucide="users" strokeWidth="1.5"></i>
<span className="text-lg font-medium">Аниматоры в костюмах</span>
</div>
<div className="backdrop-blur-md border px-6 py-4 rounded-2xl flex items-center gap-4 bg-white/10 border-white/20">
<i className="w-6 h-6 text-[#4CAF50]" data-lucide="speaker" strokeWidth="1.5"></i>
<span className="text-lg font-medium">Свет, звук, эффекты</span>
</div>
<div className="backdrop-blur-md border px-6 py-4 rounded-2xl flex items-center gap-4 bg-white/10 border-white/20">
<i className="w-6 h-6 text-[#FF8C00]" data-lucide="scroll-text" strokeWidth="1.5"></i>
<span className="text-lg font-medium">Индивидуальный сценарий</span>
</div>
</div>
<a className="inline-flex justify-center items-center px-10 py-5 text-xl font-medium bg-[#4CAF50] rounded-[20px] hover:bg-[#43a047] hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(76,175,80,0.3)] transition-all duration-300 text-white" href="#contact">
                Забронировать день рождения
            </a>
</div>
</section>

<section className="py-24 bg-[#FFF9E6] overflow-hidden" id="reviews">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-[#00BFFF]">Мамы и папы говорят</h2>
</div>

<div className="flex overflow-x-auto gap-6 pb-12 pt-4 snap-x snap-mandatory [&amp;::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] -mx-4 px-4 sm:mx-0 sm:px-0">

<div className="min-w-[320px] max-w-[400px] flex-none snap-center p-8 rounded-[30px] border shadow-sm hover:shadow-md transition-shadow bg-white border-neutral-100">
<div className="flex gap-1 mb-4">
<i className="w-5 h-5 text-[#FFD700] fill-[#FFD700]" data-lucide="star"></i>
<i className="w-5 h-5 text-[#FFD700] fill-[#FFD700]" data-lucide="star"></i>
<i className="w-5 h-5 text-[#FFD700] fill-[#FFD700]" data-lucide="star"></i>
<i className="w-5 h-5 text-[#FFD700] fill-[#FFD700]" data-lucide="star"></i>
<i className="w-5 h-5 text-[#FFD700] fill-[#FFD700]" data-lucide="star"></i>
</div>
<p className="text-lg mb-6 leading-relaxed text-neutral-700">
                        «Ходим второй год. Логопед поставила звук "р" за 2 месяца. Ребёнок бежит в центр с утра! Очень приятная атмосфера и профессиональные педагоги.»
                    </p>
<div className="flex items-center justify-between border-t pt-4 mt-auto border-neutral-100">
<span className="font-semibold text-neutral-900">Анна, мама Макара, 5 лет</span>
<div className="flex items-center gap-1 text-[#00BFFF]">
<i className="w-4 h-4" data-lucide="smile"></i>
<span className="text-xs font-medium uppercase tracking-wider">VK</span>
</div>
</div>
</div>

<div className="min-w-[320px] max-w-[400px] flex-none snap-center p-8 rounded-[30px] border shadow-sm hover:shadow-md transition-shadow bg-white border-neutral-100">
<div className="flex gap-1 mb-4">
<i className="w-5 h-5 text-[#FFD700] fill-[#FFD700]" data-lucide="star"></i>
<i className="w-5 h-5 text-[#FFD700] fill-[#FFD700]" data-lucide="star"></i>
<i className="w-5 h-5 text-[#FFD700] fill-[#FFD700]" data-lucide="star"></i>
<i className="w-5 h-5 text-[#FFD700] fill-[#FFD700]" data-lucide="star"></i>
<i className="w-5 h-5 text-[#FFD700] fill-[#FFD700]" data-lucide="star"></i>
</div>
<p className="text-lg mb-6 leading-relaxed text-neutral-700">
                        «Отмечали 6-летие дочки. Аниматоры просто супер! Удержали внимание 10 детей на протяжении 2 часов. Пространство огромное, светло и чисто.»
                    </p>
<div className="flex items-center justify-between border-t pt-4 mt-auto border-neutral-100">
<span className="font-semibold text-neutral-900">Елена, мама Софии, 6 лет</span>
<div className="flex items-center gap-1 text-[#00BFFF]">
<i className="w-4 h-4" data-lucide="smile"></i>
<span className="text-xs font-medium uppercase tracking-wider">VK</span>
</div>
</div>
</div>

<div className="min-w-[320px] max-w-[400px] flex-none snap-center p-8 rounded-[30px] border shadow-sm hover:shadow-md transition-shadow bg-white border-neutral-100">
<div className="flex gap-1 mb-4">
<i className="w-5 h-5 text-[#FFD700] fill-[#FFD700]" data-lucide="star"></i>
<i className="w-5 h-5 text-[#FFD700] fill-[#FFD700]" data-lucide="star"></i>
<i className="w-5 h-5 text-[#FFD700] fill-[#FFD700]" data-lucide="star"></i>
<i className="w-5 h-5 text-[#FFD700] fill-[#FFD700]" data-lucide="star"></i>
<i className="w-5 h-5 text-[#FFD700] fill-[#FFD700]" data-lucide="star"></i>
</div>
<p className="text-lg mb-6 leading-relaxed text-neutral-700">
                        «Сыну очень нравятся шахматы, хотя раньше не могли усадить на месте. Отличный подход к детям, всегда встречают с улыбкой. Рекомендую!»
                    </p>
<div className="flex items-center justify-between border-t pt-4 mt-auto border-neutral-100">
<span className="font-semibold text-neutral-900">Игорь, папа Дениса, 7 лет</span>
<div className="flex items-center gap-1 text-[#00BFFF]">
<i className="w-4 h-4" data-lucide="smile"></i>
<span className="text-xs font-medium uppercase tracking-wider">VK</span>
</div>
</div>
</div>
</div>
<div className="text-center mt-4">
<a className="inline-flex items-center gap-2 text-lg font-medium text-[#00BFFF] hover:text-[#009acd] transition-colors group" href="https://vk.com/kenguru_64" rel="noopener noreferrer" target="_blank">
<i className="w-5 h-5 group-hover:translate-x-1 transition-transform" data-lucide="external-link" strokeWidth="1.5"></i>
                    Больше отзывов в нашей группе ВКонтакте
                </a>
</div>
</div>
</section>

<section className="py-24 bg-white" id="prices">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-[#4CAF50]">Стоимость занятий</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">

<div className="bg-[#FFF9E6] rounded-[30px] border-2 border-[#00BFFF] p-8 text-center flex flex-col hover:shadow-xl transition-shadow relative overflow-hidden">
<div className="absolute top-0 right-0 bg-[#00BFFF] text-xs font-semibold px-4 py-1 rounded-bl-xl text-white">Стандарт</div>
<h3 className="text-2xl font-semibold mb-2 mt-4 text-neutral-900">Разовое занятие</h3>
<p className="mb-8 text-base text-neutral-500">Удобно для знакомства</p>
<div className="mt-auto">
<span className="text-5xl font-semibold tracking-tight text-neutral-900">500 ₽</span>
</div>
</div>

<div className="bg-[#FFF9E6] rounded-[30px] border-2 border-[#FF8C00] p-8 text-center flex flex-col hover:shadow-xl transition-shadow transform md:-translate-y-4 shadow-lg relative overflow-hidden">
<div className="absolute top-0 right-0 bg-[#FF8C00] text-xs font-semibold px-4 py-1 rounded-bl-xl uppercase tracking-wider text-white">Популярно</div>
<h3 className="text-2xl font-semibold mb-2 mt-4 text-neutral-900">Абонемент<br/>на 4 занятия</h3>
<p className="text-[#4CAF50] font-medium mb-8 text-base rounded-full inline-block px-4 py-1 mx-auto mt-2 bg-amber-100">экономия 200 ₽</p>
<div className="mt-auto">
<span className="text-5xl font-semibold tracking-tight text-neutral-900">1800 ₽</span>
<span className="text-lg block mt-1 text-neutral-500">450 ₽ / занятие</span>
</div>
</div>

<div className="bg-[#FFF9E6] rounded-[30px] border-2 border-[#4CAF50] p-8 text-center flex flex-col hover:shadow-xl transition-shadow relative overflow-hidden">
<div className="absolute top-0 right-0 bg-[#4CAF50] text-xs font-semibold px-4 py-1 rounded-bl-xl text-white">Выгодно</div>
<h3 className="text-2xl font-semibold mb-2 mt-4 text-neutral-900">Абонемент<br/>на 8 занятий</h3>
<p className="text-[#4CAF50] font-medium mb-8 text-base rounded-full inline-block px-4 py-1 mx-auto mt-2 bg-amber-100">экономия 600 ₽</p>
<div className="mt-auto">
<span className="text-5xl font-semibold tracking-tight text-neutral-900">3400 ₽</span>
<span className="text-lg block mt-1 text-neutral-500">425 ₽ / занятие</span>
</div>
</div>
</div>

<div className="text-center mb-12">
<div className="inline-flex items-center gap-3 bg-[#FFF9E6] border px-6 py-4 rounded-2xl mb-4 border-cyan-200">
<i className="w-6 h-6 text-[#FF8C00]" data-lucide="gift" strokeWidth="1.5"></i>
<span className="text-lg font-medium text-neutral-800">Действуют скидки для многодетных семей и акция «Приведи друга»</span>
</div>
<p className="flex items-center justify-center gap-2 text-base text-neutral-500">
<i className="w-4 h-4" data-lucide="lock" strokeWidth="1.5"></i>
                    Цена фиксируется в <strong className="font-semibold text-neutral-700">договоре</strong>. Никаких скрытых доплат.
                </p>
</div>
<div className="text-center">
</div>
</div>
</section>

<section className="bg-[#FFF9E6] pt-24 pb-24" id="contact">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="rounded-[40px] shadow-xl overflow-hidden border bg-white border-neutral-100">
<div className="grid grid-cols-1 lg:grid-cols-2">

<div className="p-8 sm:p-12 lg:p-16 relative">

<div className="hidden absolute inset-0 z-20 flex-col items-center justify-center text-center p-8 bg-white" id="form-success">
<div className="w-20 h-20 rounded-full flex items-center justify-center mb-6 bg-amber-100">
<i className="w-10 h-10 text-[#4CAF50]" data-lucide="check"></i>
</div>
<h3 className="text-3xl font-semibold mb-4 text-neutral-900">Спасибо!</h3>
<p className="text-lg text-neutral-600">Мы получили вашу заявку и перезвоним вам в течение 30 минут.</p>
<button className="mt-8 px-6 py-3 rounded-xl font-medium transition-colors bg-neutral-100 text-neutral-700 hover:bg-neutral-200" onclick="resetForm()">Отправить еще</button>
</div>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#FF8C00] mb-8">Записаться на пробное занятие</h2>
<form className="space-y-6" id="booking-form">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

<div className="">
<label className="block text-sm font-medium mb-2 text-neutral-700">Имя ребёнка *</label>
<input className="focus:outline-none focus:ring-2 focus:ring-[#FF8C00] focus:border-transparent transition-all text-lg bg-neutral-50 w-full border-neutral-200 border rounded-2xl pt-4 pr-5 pb-4 pl-5" placeholder="Например, Маша" required="" type="text"/>
</div>

<div className="">
<label className="block text-sm font-medium mb-2 text-neutral-700">Возраст ребёнка *</label>
<input className="w-full px-5 py-4 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#FF8C00] focus:border-transparent text-lg transition-all bg-neutral-50 border-neutral-200" max="15" min="1" placeholder="Лет" required="" type="number"/>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

<div className="">
<label className="block text-sm font-medium mb-2 text-neutral-700">Имя родителя *</label>
<input className="w-full px-5 py-4 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#FF8C00] focus:border-transparent text-lg transition-all bg-neutral-50 border-neutral-200" placeholder="Как к вам обращаться" required="" type="text"/>
</div>

<div className="">
<label className="block text-sm font-medium mb-2 text-neutral-700">Телефон *</label>
<input className="w-full px-5 py-4 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#FF8C00] focus:border-transparent text-lg transition-all bg-neutral-50 border-neutral-200" pattern="[0-9\-\+\s\(\)]+" placeholder="+7 (999) 000-00-00" required="" type="tel"/>
</div>
</div>

<div className="relative" id="custom-select">
<label className="block text-sm font-medium mb-2 text-neutral-700">Услуга *</label>
<input id="service-input" required="" type="hidden"/>
<button className="w-full px-5 py-4 border rounded-2xl text-left text-lg focus:outline-none focus:ring-2 focus:ring-[#FF8C00] flex justify-between items-center transition-all text-neutral-500 bg-neutral-50 border-neutral-200" onclick="toggleDropdown()" type="button">
<span id="select-text">Выберите направление</span>
<i className="w-5 h-5 text-neutral-400" data-lucide="chevron-down"></i>
</button>
<div className="hidden absolute z-30 w-full mt-2 border rounded-2xl shadow-xl overflow-hidden bg-white border-neutral-100" id="dropdown-options">
<div className="p-2 space-y-1">
<div className="px-4 py-3 hover:bg-[#FFF9E6] rounded-xl cursor-pointer text-lg transition-colors text-neutral-700" onclick="selectOption('Комплексные программы')">Комплексные программы</div>
<div className="px-4 py-3 hover:bg-[#FFF9E6] rounded-xl cursor-pointer text-lg transition-colors text-neutral-700" onclick="selectOption('Творчество')">Творчество</div>
<div className="px-4 py-3 hover:bg-[#FFF9E6] rounded-xl cursor-pointer text-lg transition-colors text-neutral-700" onclick="selectOption('Английский')">Английский</div>
<div className="px-4 py-3 hover:bg-[#FFF9E6] rounded-xl cursor-pointer text-lg transition-colors text-neutral-700" onclick="selectOption('Логопед')">Логопед</div>
<div className="px-4 py-3 hover:bg-[#FFF9E6] rounded-xl cursor-pointer text-lg transition-colors text-neutral-700" onclick="selectOption('Шахматы')">Шахматы</div>
<div className="px-4 py-3 hover:bg-[#FFF9E6] rounded-xl cursor-pointer text-lg transition-colors text-neutral-700" onclick="selectOption('Праздник')">Праздник</div>
</div>
</div>
</div>

<div className="">
<label className="block text-sm font-medium mb-3 text-neutral-700">Удобное время для звонка</label>
<div className="flex flex-wrap gap-4">
<label className="flex items-center cursor-pointer group">
<input className="peer sr-only" type="checkbox"/>
<div className="w-6 h-6 border-2 rounded-lg peer-checked:bg-[#00BFFF] peer-checked:border-[#00BFFF] flex items-center justify-center transition-colors mr-3 border-neutral-300">
<i className="w-4 h-4 opacity-0 peer-checked:opacity-100 transition-opacity text-white" data-lucide="check" strokeWidth="3"></i>
</div>
<span className="text-base select-none text-neutral-700">Утро</span>
</label>
<label className="flex items-center cursor-pointer group">
<input className="peer sr-only" type="checkbox"/>
<div className="w-6 h-6 border-2 rounded-lg peer-checked:bg-[#00BFFF] peer-checked:border-[#00BFFF] flex items-center justify-center transition-colors mr-3 border-neutral-300">
<i className="w-4 h-4 opacity-0 peer-checked:opacity-100 transition-opacity text-white" data-lucide="check" strokeWidth="3"></i>
</div>
<span className="text-base select-none text-neutral-700">День</span>
</label>
<label className="flex items-center cursor-pointer group">
<input className="peer sr-only" type="checkbox"/>
<div className="w-6 h-6 border-2 rounded-lg peer-checked:bg-[#00BFFF] peer-checked:border-[#00BFFF] flex items-center justify-center transition-colors mr-3 border-neutral-300">
<i className="w-4 h-4 opacity-0 peer-checked:opacity-100 transition-opacity text-white" data-lucide="check" strokeWidth="3"></i>
</div>
<span className="text-base select-none text-neutral-700">Вечер</span>
</label>
<label className="flex items-center cursor-pointer group">
<input className="peer sr-only" type="checkbox"/>
<div className="w-6 h-6 border-2 rounded-lg peer-checked:bg-[#00BFFF] peer-checked:border-[#00BFFF] flex items-center justify-center transition-colors mr-3 border-neutral-300">
<i className="w-4 h-4 opacity-0 peer-checked:opacity-100 transition-opacity text-white" data-lucide="check" strokeWidth="3"></i>
</div>
<span className="text-base select-none text-neutral-700">Выходные</span>
</label>
</div>
</div>

<label className="flex items-start cursor-pointer mt-6 group">
<input className="peer sr-only" required="" type="checkbox"/>
<div className="w-6 h-6 border-2 rounded-lg peer-checked:bg-[#4CAF50] peer-checked:border-[#4CAF50] flex-shrink-0 flex items-center justify-center transition-colors mr-3 mt-0.5 border-neutral-300">
<i className="w-4 h-4 opacity-0 peer-checked:opacity-100 transition-opacity text-white" data-lucide="check" strokeWidth="3"></i>
</div>
<span className="text-sm leading-relaxed select-none text-neutral-500">
                                    Я согласен(а) на обработку персональных данных в соответствии с <a className="text-[#00BFFF] hover:underline" href="#">политикой конфиденциальности</a>
</span>
</label>
<button className="w-full py-5 text-xl font-semibold bg-[#FF8C00] rounded-[20px] hover:bg-[#e67e00] hover:-translate-y-1 hover:shadow-lg transition-all duration-300 mt-8 text-white" type="submit">
                                Отправить заявку
                            </button>
</form>
</div>

<div className="bg-[#1E3A8A] p-8 sm:p-12 lg:p-16 relative overflow-hidden flex flex-col justify-between text-white">

<div className="absolute -right-20 -top-20 w-64 h-64 rounded-full blur-3xl bg-white/5"></div>
<div className="absolute -left-20 -bottom-20 w-64 h-64 bg-[#00BFFF]/20 rounded-full blur-3xl"></div>
<div className="relative z-10 space-y-10">
<div className="">
<h3 className="text-2xl font-semibold tracking-tight text-[#FFD700] mb-6">Ждём вас в гости!</h3>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 bg-white/10">
<i className="w-5 h-5 text-[#4FC3F7]" data-lucide="map-pin"></i>
</div>
<div className="">
<p className="text-sm mb-1 text-cyan-200">Адрес</p>
<p className="text-lg font-medium">Саратов, Политехническая, д. 43/45</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 bg-white/10">
<i className="w-5 h-5 text-[#FFEB3B]" data-lucide="clock"></i>
</div>
<div className="">
<p className="text-sm mb-1 text-cyan-200">Режим работы</p>
<p className="text-lg font-medium">Ежедневно 09:00–19:00</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-full bg-[#4CAF50]/20 flex items-center justify-center flex-shrink-0">
<i className="w-5 h-5 text-[#4CAF50]" data-lucide="phone"></i>
</div>
<div className="">
<p className="text-sm mb-1 text-cyan-200">Телефон</p>
<a className="text-3xl font-semibold tracking-tight hover:text-[#4CAF50] transition-colors block" href="tel:+78452987998">8 (845) 298-79-98</a>
</div>
</div>
</div>
</div>
<div className="">
<a className="inline-flex items-center gap-3 px-6 py-4 bg-[#0077FF] rounded-[20px] font-medium hover:bg-[#005CE6] transition-colors shadow-lg shadow-[#0077FF]/20 w-full justify-center text-lg text-white" href="https://vk.com/kenguru_64" rel="noopener noreferrer" target="_blank">
<i className="w-6 h-6" data-lucide="smile"></i>
                                    ВКонтакте — @kenguru_64
                                </a>
</div>
</div>

<div className="mt-12 h-48 rounded-[20px] border flex flex-col items-center justify-center relative overflow-hidden group z-10 border-white/10 bg-neutral-800">

<div className="absolute inset-0 opacity-30 bg-[url(default)]"></div>
<i className="w-12 h-12 mb-2 text-white/50" data-lucide="map" strokeWidth="1"></i>
<span className="font-medium text-white/70">Карта проезда</span>
<div className="absolute bottom-4 px-4 py-1.5 rounded-full text-sm font-semibold shadow-sm group-hover:scale-105 transition-transform cursor-pointer bg-white text-neutral-900">
                                Открыть в навигаторе
                            </div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-[#1E3A8A] py-12 border-t border-white/10 text-cyan-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-center gap-8">

<div className="flex flex-col items-center md:items-start text-center md:text-left">
<div className="flex items-center gap-2 mb-2">
<span className="text-2xl">🦘</span>
<span className="text-xl font-semibold tracking-tight text-white">ДЕТСКИЙ ЦЕНТР КЕНГУРУ</span>
</div>
<p className="italic font-medium text-cyan-300">«Возвращаться хочется снова и снова»</p>
</div>

<div className="flex flex-col sm:flex-row items-center gap-6 text-sm font-medium text-cyan-200">
<a className="transition-colors hover:text-white" href="#">Договор оферты</a>
<span className="hidden sm:inline opacity-30">•</span>
<a className="transition-colors hover:text-white" href="#">Политика конфиденциальности</a>
</div>

<div className="flex flex-col items-center md:items-end gap-4">
<a className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#0077FF] transition-all bg-white/10 hover:text-white text-cyan-200" href="https://vk.com/kenguru_64" rel="noopener noreferrer" target="_blank">
<i className="w-5 h-5" data-lucide="smile"></i>
</a>
<p className="text-sm text-cyan-400">© Кенгуру, 2026. Саратов</p>
</div>
</div>
</div>
</footer>




    </>
  );
}
