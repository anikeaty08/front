import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        function openModal(modalId) {
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.classList.remove('hidden');
                document.body.classList.add('modal-open');
            }
        }

        function closeModal(modalId) {
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.classList.add('hidden');
                document.body.classList.remove('modal-open');
            }
        }

        // Close on escape key
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape') {
                const modals = document.querySelectorAll('[role="dialog"]');
                modals.forEach(modal => {
                    if (!modal.classList.contains('hidden')) {
                        modal.classList.add('hidden');
                        document.body.classList.remove('modal-open');
                    }
                });
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-40 glass-nav">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white">
<span className="iconify" data-icon="lucide:hammer" data-width="18" strokeWidth="1.5"></span>
</div>
<span className="text-lg font-semibold tracking-tight text-slate-900">СтройТим</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#services">Услуги</a>
<a className="hover:text-slate-900 transition-colors" href="#portfolio">Кейсы</a>
<a className="hover:text-slate-900 transition-colors" href="#advantages">Преимущества</a>
</div>
<div className="hidden md:flex items-center gap-4">
<a className="text-slate-400 hover:text-[#2AABEE] transition-colors" href="https://t.me/sstroitim" target="_blank" title="Telegram">
<span className="iconify" data-icon="fa6-brands:telegram" data-width="20"></span>
</a>
<a className="text-slate-400 hover:text-[#0077FF] transition-colors" href="https://vk.com/stroi102tim" target="_blank" title="ВКонтакте">
<span className="iconify" data-icon="fa6-brands:vk" data-width="20"></span>
</a>
<a className="text-slate-400 hover:text-[#25D366] transition-colors" href="https://wa.me/79170436845" target="_blank" title="WhatsApp">
<span className="iconify" data-icon="fa6-brands:whatsapp" data-width="20"></span>
</a>
<a className="flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 shadow-sm hover:shadow-md ml-2" href="#contact">
                    Рассчитать смету
                    <span className="iconify" data-icon="lucide:arrow-right" data-width="14" strokeWidth="1.5"></span>
</a>
</div>

<button className="md:hidden text-slate-900">
<span className="iconify" data-icon="lucide:menu" data-width="24" strokeWidth="1.5"></span>
</button>
</div>
</nav>

<header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 pointer-events-none">
<div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl opacity-60 mix-blend-multiply animate-pulse"></div>
<div className="absolute top-40 right-1/4 w-96 h-96 bg-slate-200/50 rounded-full blur-3xl opacity-60 mix-blend-multiply"></div>
</div>
<div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-200 bg-white/50 backdrop-blur-sm mb-8">
<span className="flex h-2 w-2 rounded-full bg-green-500"></span>
<span className="text-xs font-medium text-slate-600 tracking-wide uppercase">Свободные бригады доступны</span>
</div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-slate-900 mb-6 leading-[1.1]">
                Ремонт квартир <br className="hidden md:block"/> и строительство
            </h1>
<p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
                Создаем пространства для жизни. Честные цены, высокое качество и прозрачные условия работы по договору.
            </p>
<div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12 text-sm font-medium text-slate-700">
<div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-slate-100 shadow-sm">
<span className="text-lg">🤝</span> <span>Честные цены</span>
</div>
<div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-slate-100 shadow-sm">
<span className="text-lg">👍</span> <span>Высокое качество</span>
</div>
<div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-slate-100 shadow-sm">
<span className="text-lg">📄</span> <span>Договор, гарантия</span>
</div>
</div>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-3.5 bg-slate-900 text-white rounded-lg font-medium hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/10 flex items-center justify-center gap-2" href="tel:+79170436845">
<span className="iconify" data-icon="lucide:phone-call" data-width="18" strokeWidth="1.5"></span>
                    Позвонить
                </a>
<a className="w-full sm:w-auto px-8 py-3.5 bg-white text-slate-900 border border-slate-200 rounded-lg font-medium hover:bg-slate-50 transition-all flex items-center justify-center gap-2 group" href="#portfolio">
                    Смотреть кейсы
                    <span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-width="18" strokeWidth="1.5"></span>
</a>
</div>
</div>
</header>

<section className="py-20 border-y border-slate-200 bg-white" id="advantages">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
<div className="group">
<div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<span className="iconify text-slate-900" data-icon="lucide:file-check" data-width="24" strokeWidth="1.5"></span>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2 tracking-tight">Прозрачная смета</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Фиксируем стоимость в договоре. Никаких скрытых платежей или внезапных доплат.
                    </p>
</div>
<div className="group">
<div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<span className="iconify text-slate-900" data-icon="lucide:shield-check" data-width="24" strokeWidth="1.5"></span>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2 tracking-tight">Гарантия 2 года</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Мы уверены в качестве наших работ. Предоставляем официальную гарантию.
                    </p>
</div>
<div className="group">
<div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<span className="iconify text-slate-900" data-icon="lucide:clock" data-width="24" strokeWidth="1.5"></span>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2 tracking-tight">Соблюдение сроков</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Платим штраф за каждый день просрочки. Ценим ваше время.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="portfolio">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">Наши последние проекты</h2>
<p className="text-slate-500 max-w-xl">
                        Нажмите на карточку, чтобы посмотреть подробности проекта.
                    </p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg hover:border-slate-300 transition-all duration-300 cursor-pointer flex flex-col h-full" onclick="openModal('modal-1')">
<div className="h-64 overflow-hidden relative">
<img alt="Интерьер 1" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors duration-300"></div>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-medium text-slate-900 border border-slate-100 shadow-sm">
                            65 м²
                        </div>
<div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white text-slate-900 px-3 py-1.5 rounded-lg text-xs font-medium shadow-sm flex items-center gap-1">
                            Подробнее <span className="iconify" data-icon="lucide:maximize-2" data-width="12"></span>
</div>
</div>
<div className="p-6 flex-1 flex flex-col">
<div className="mb-4">
<span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded mb-3 inline-block">Капитальный ремонт</span>
<h3 className="text-lg font-semibold text-slate-900 tracking-tight">ЖК "Сердце Столицы"</h3>
<p className="text-sm text-slate-500 mt-2 line-clamp-2">Полная перепланировка, замена коммуникаций, чистовая отделка по дизайн-проекту.</p>
</div>
<div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
<span>Срок: 3.5 месяца</span>
<span className="flex items-center gap-1">
<span className="iconify" data-icon="lucide:map-pin" data-width="12"></span> Уфа, Центр
                            </span>
</div>
</div>
</div>

<div className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg hover:border-slate-300 transition-all duration-300 cursor-pointer flex flex-col h-full" onclick="openModal('modal-2')">
<div className="h-64 overflow-hidden relative">
<img alt="Интерьер 2" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors duration-300"></div>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-medium text-slate-900 border border-slate-100 shadow-sm">
                            42 м²
                        </div>
<div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white text-slate-900 px-3 py-1.5 rounded-lg text-xs font-medium shadow-sm flex items-center gap-1">
                            Подробнее <span className="iconify" data-icon="lucide:maximize-2" data-width="12"></span>
</div>
</div>
<div className="p-6 flex-1 flex flex-col">
<div className="mb-4">
<span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded mb-3 inline-block">Дизайнерский ремонт</span>
<h3 className="text-lg font-semibold text-slate-900 tracking-tight">Студия в стиле Лофт</h3>
<p className="text-sm text-slate-500 mt-2 line-clamp-2">Реализация сложного дизайн-проекта с декоративной штукатуркой и трековым освещением.</p>
</div>
<div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
<span>Срок: 2 месяца</span>
<span className="flex items-center gap-1">
<span className="iconify" data-icon="lucide:map-pin" data-width="12"></span> Уфа, Зеленая роща
                            </span>
</div>
</div>
</div>

<div className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg hover:border-slate-300 transition-all duration-300 cursor-pointer flex flex-col h-full" onclick="openModal('modal-3')">
<div className="h-64 overflow-hidden relative">
<img alt="Интерьер 3" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1556912172-45b7abe8d7e1?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors duration-300"></div>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-medium text-slate-900 border border-slate-100 shadow-sm">
                            90 м²
                        </div>
<div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white text-slate-900 px-3 py-1.5 rounded-lg text-xs font-medium shadow-sm flex items-center gap-1">
                            Подробнее <span className="iconify" data-icon="lucide:maximize-2" data-width="12"></span>
</div>
</div>
<div className="p-6 flex-1 flex flex-col">
<div className="mb-4">
<span className="text-xs font-medium text-amber-600 bg-amber-50 px-2 py-1 rounded mb-3 inline-block">Вторичное жилье</span>
<h3 className="text-lg font-semibold text-slate-900 tracking-tight">Трехкомнатная квартира</h3>
<p className="text-sm text-slate-500 mt-2 line-clamp-2">Демонтаж старой отделки, выравнивание полов, новая электрика и сантехника.</p>
</div>
<div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
<span>Срок: 5 месяцев</span>
<span className="flex items-center gap-1">
<span className="iconify" data-icon="lucide:map-pin" data-width="12"></span> Уфа, Проспект
                            </span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-slate-200">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-16 text-center">Как мы работаем</h2>
<div className="relative">
<div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-slate-100 -z-10"></div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
<div className="relative bg-white pt-4">
<div className="w-10 h-10 bg-slate-900 text-white rounded-lg flex items-center justify-center text-sm font-bold mb-6 shadow-md shadow-slate-900/20">01</div>
<h4 className="text-lg font-medium text-slate-900 mb-2">Заявка и замер</h4>
<p className="text-sm text-slate-500">Вы оставляете заявку, наш инженер приезжает, делает замеры и обсуждает детали.</p>
</div>
<div className="relative bg-white pt-4">
<div className="w-10 h-10 bg-white text-slate-900 border border-slate-200 rounded-lg flex items-center justify-center text-sm font-bold mb-6">02</div>
<h4 className="text-lg font-medium text-slate-900 mb-2">Смета и договор</h4>
<p className="text-sm text-slate-500">Составляем подробную смету. Если вас всё устраивает — подписываем договор.</p>
</div>
<div className="relative bg-white pt-4">
<div className="w-10 h-10 bg-white text-slate-900 border border-slate-200 rounded-lg flex items-center justify-center text-sm font-bold mb-6">03</div>
<h4 className="text-lg font-medium text-slate-900 mb-2">Ремонт</h4>
<p className="text-sm text-slate-500">Закупаем материалы, выполняем работы. Вы получаете фотоотчеты каждую неделю.</p>
</div>
<div className="relative bg-white pt-4">
<div className="w-10 h-10 bg-white text-slate-900 border border-slate-200 rounded-lg flex items-center justify-center text-sm font-bold mb-6">04</div>
<h4 className="text-lg font-medium text-slate-900 mb-2">Сдача объекта</h4>
<p className="text-sm text-slate-500">Финальная уборка, проверка качества, подписание акта приемки и гарантия.</p>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-slate-950 text-slate-300 py-20 relative overflow-hidden" id="contact">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-6">Готовы обсудить ваш проект?</h2>
<p className="text-slate-400 mb-8 max-w-md">
                        Оставьте заявку на бесплатную консультацию. Мы свяжемся с вами в течение 15 минут.
                    </p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0">
<span className="iconify text-white" data-icon="lucide:phone" data-width="20" strokeWidth="1.5"></span>
</div>
<div>
<p className="text-xs text-slate-500 font-medium uppercase tracking-wider mb-1">Телефон</p>
<a className="text-lg text-white hover:text-blue-400 transition-colors font-medium" href="tel:+79170436845">+7 (917) 043-68-45</a>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0">
<span className="iconify text-white" data-icon="lucide:message-square" data-width="20" strokeWidth="1.5"></span>
</div>
<div className="flex flex-col gap-2">
<p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Соцсети и мессенджеры</p>
<div className="flex flex-wrap gap-3">
<a className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#2AABEE]/10 text-[#2AABEE] border border-[#2AABEE]/20 hover:bg-[#2AABEE]/20 transition-colors text-sm font-medium" href="https://t.me/sstroitim" target="_blank">
<span className="iconify" data-icon="fa6-brands:telegram" data-width="16"></span> Telegram
                                    </a>
<a className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/20 hover:bg-[#25D366]/20 transition-colors text-sm font-medium" href="https://wa.me/79170436845" target="_blank">
<span className="iconify" data-icon="fa6-brands:whatsapp" data-width="16"></span> WhatsApp
                                    </a>
<a className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#0077FF]/10 text-[#0077FF] border border-[#0077FF]/20 hover:bg-[#0077FF]/20 transition-colors text-sm font-medium" href="https://vk.com/stroi102tim" target="_blank">
<span className="iconify" data-icon="fa6-brands:vk" data-width="16"></span> ВКонтакте
                                    </a>
</div>
</div>
</div>
</div>
</div>

<div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 md:p-8">
<form className="space-y-4">
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-xs font-medium text-slate-400 ml-1" htmlFor="name">Имя</label>
<input className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-slate-600 focus:ring-1 focus:ring-slate-600 transition-all" id="name" placeholder="Ваше имя" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-slate-400 ml-1" htmlFor="phone">Телефон</label>
<input className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-slate-600 focus:ring-1 focus:ring-slate-600 transition-all" id="phone" placeholder="+7 (___) ___-__-__" type="tel"/>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-slate-400 ml-1" htmlFor="type">Тип объекта</label>
<div className="relative">
<select className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-slate-600 focus:ring-1 focus:ring-slate-600 appearance-none transition-all cursor-pointer" id="type">
<option>Квартира в новостройке</option>
<option>Вторичное жилье</option>
<option>Частный дом</option>
<option>Коммерческое помещение</option>
</select>
<div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
<span className="iconify text-slate-500" data-icon="lucide:chevron-down" data-width="16" strokeWidth="1.5"></span>
</div>
</div>
</div>
<div className="pt-2">
<button className="w-full bg-white text-slate-950 font-medium py-3 rounded-lg hover:bg-slate-200 transition-colors flex items-center justify-center gap-2" type="button">
<span>Отправить заявку</span>
<span className="iconify" data-icon="lucide:send" data-width="16" strokeWidth="1.5"></span>
</button>
</div>
<p className="text-[10px] text-slate-600 text-center mt-3">
                            Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности.
                        </p>
</form>
</div>
</div>
<div className="mt-20 pt-8 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-600">
<div className="flex items-center gap-2">
<span className="iconify" data-icon="lucide:hammer" data-width="14" strokeWidth="1.5"></span>
<span>© 2023 СтройТим. Все права защищены.</span>
</div>
<div className="flex gap-6">
<a className="hover:text-slate-400 transition-colors" href="#">Политика конфиденциальности</a>
</div>
</div>
</div>
</footer>

<a className="fixed md:hidden bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full shadow-xl shadow-green-500/30 flex items-center justify-center text-white hover:scale-105 transition-transform active:scale-95" href="https://wa.me/79170436845" target="_blank">
<span className="iconify" data-icon="fa6-brands:whatsapp" data-width="28"></span>
</a>


<div aria-labelledby="modal-title" aria-modal="true" className="fixed inset-0 z-[60] hidden" id="modal-1" role="dialog">

<div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity modal-overlay" onclick="closeModal('modal-1')"></div>
<div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
<div className="relative transform overflow-hidden rounded-2xl bg-white text-left shadow-2xl transition-all sm:my-8 sm:w-full sm:max-w-3xl border border-slate-100">

<button className="absolute right-4 top-4 z-10 p-2 rounded-full bg-white/80 hover:bg-slate-100 text-slate-500 transition-colors" onclick="closeModal('modal-1')" type="button">
<span className="iconify" data-icon="lucide:x" data-width="20"></span>
</button>

<div className="flex flex-col md:flex-row h-full">

<div className="w-full md:w-1/2 bg-slate-100">
<img alt="Detail" className="w-full h-64 md:h-full object-cover" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>

<div className="w-full md:w-1/2 p-8 max-h-[80vh] overflow-y-auto">
<div className="mb-6">
<span className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-2 block">Капитальный ремонт</span>
<h3 className="text-2xl font-bold text-slate-900 tracking-tight mb-2">ЖК "Сердце Столицы"</h3>
<div className="flex gap-4 text-xs text-slate-500 font-medium mb-4">
<span className="flex items-center gap-1"><span className="iconify" data-icon="lucide:ruler" data-width="14"></span> 65 м²</span>
<span className="flex items-center gap-1"><span className="iconify" data-icon="lucide:calendar" data-width="14"></span> 3.5 месяца</span>
</div>
<p className="text-sm text-slate-600 leading-relaxed mb-6">
                                Полная перепланировка пространства. Мы объединили кухню с гостиной, создав просторную общую зону. Была выполнена полная замена электрики и водоснабжения.
                            </p>
</div>
<div className="space-y-4">
<h4 className="text-sm font-semibold text-slate-900 border-b border-slate-100 pb-2">Выполненные работы</h4>
<ul className="space-y-2 text-sm text-slate-600">
<li className="flex items-start gap-2">
<span className="iconify text-green-500 mt-0.5" data-icon="lucide:check-circle-2" data-width="16"></span>
<span>Демонтаж и возведение перегородок</span>
</li>
<li className="flex items-start gap-2">
<span className="iconify text-green-500 mt-0.5" data-icon="lucide:check-circle-2" data-width="16"></span>
<span>Шумоизоляция стен и потолка</span>
</li>
<li className="flex items-start gap-2">
<span className="iconify text-green-500 mt-0.5" data-icon="lucide:check-circle-2" data-width="16"></span>
<span>Укладка инженерной доски</span>
</li>
<li className="flex items-start gap-2">
<span className="iconify text-green-500 mt-0.5" data-icon="lucide:check-circle-2" data-width="16"></span>
<span>Монтаж скрытых дверей</span>
</li>
</ul>
</div>
<div className="mt-8 pt-6 border-t border-slate-100">
<a className="block w-full bg-slate-900 text-white text-center py-3 rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors" href="#contact" onclick="closeModal('modal-1')">
                                Хочу такой же ремонт
                            </a>
</div>
</div>
</div>
</div>
</div>
</div>

<div aria-labelledby="modal-title" aria-modal="true" className="fixed inset-0 z-[60] hidden" id="modal-2" role="dialog">
<div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity modal-overlay" onclick="closeModal('modal-2')"></div>
<div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
<div className="relative transform overflow-hidden rounded-2xl bg-white text-left shadow-2xl transition-all sm:my-8 sm:w-full sm:max-w-3xl border border-slate-100">
<button className="absolute right-4 top-4 z-10 p-2 rounded-full bg-white/80 hover:bg-slate-100 text-slate-500 transition-colors" onclick="closeModal('modal-2')" type="button">
<span className="iconify" data-icon="lucide:x" data-width="20"></span>
</button>
<div className="flex flex-col md:flex-row h-full">
<div className="w-full md:w-1/2 bg-slate-100">
<img alt="Detail" className="w-full h-64 md:h-full object-cover" src="https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="w-full md:w-1/2 p-8 max-h-[80vh] overflow-y-auto">
<div className="mb-6">
<span className="text-xs font-semibold text-emerald-600 uppercase tracking-wider mb-2 block">Дизайнерский ремонт</span>
<h3 className="text-2xl font-bold text-slate-900 tracking-tight mb-2">Студия в стиле Лофт</h3>
<div className="flex gap-4 text-xs text-slate-500 font-medium mb-4">
<span className="flex items-center gap-1"><span className="iconify" data-icon="lucide:ruler" data-width="14"></span> 42 м²</span>
<span className="flex items-center gap-1"><span className="iconify" data-icon="lucide:calendar" data-width="14"></span> 2 месяца</span>
</div>
<p className="text-sm text-slate-600 leading-relaxed mb-6">
                                Реализация смелого проекта для молодого специалиста. Использованы элементы открытого бетона, декоративная штукатурка под микроцемент и трековые системы освещения.
                            </p>
</div>
<div className="space-y-4">
<h4 className="text-sm font-semibold text-slate-900 border-b border-slate-100 pb-2">Выполненные работы</h4>
<ul className="space-y-2 text-sm text-slate-600">
<li className="flex items-start gap-2">
<span className="iconify text-green-500 mt-0.5" data-icon="lucide:check-circle-2" data-width="16"></span>
<span>Нанесение декоративной штукатурки</span>
</li>
<li className="flex items-start gap-2">
<span className="iconify text-green-500 mt-0.5" data-icon="lucide:check-circle-2" data-width="16"></span>
<span>Зонирование рейками</span>
</li>
<li className="flex items-start gap-2">
<span className="iconify text-green-500 mt-0.5" data-icon="lucide:check-circle-2" data-width="16"></span>
<span>Монтаж электрокарнизов</span>
</li>
</ul>
</div>
<div className="mt-8 pt-6 border-t border-slate-100">
<a className="block w-full bg-slate-900 text-white text-center py-3 rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors" href="#contact" onclick="closeModal('modal-2')">
                                Хочу такой же ремонт
                            </a>
</div>
</div>
</div>
</div>
</div>
</div>

<div aria-labelledby="modal-title" aria-modal="true" className="fixed inset-0 z-[60] hidden" id="modal-3" role="dialog">
<div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity modal-overlay" onclick="closeModal('modal-3')"></div>
<div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
<div className="relative transform overflow-hidden rounded-2xl bg-white text-left shadow-2xl transition-all sm:my-8 sm:w-full sm:max-w-3xl border border-slate-100">
<button className="absolute right-4 top-4 z-10 p-2 rounded-full bg-white/80 hover:bg-slate-100 text-slate-500 transition-colors" onclick="closeModal('modal-3')" type="button">
<span className="iconify" data-icon="lucide:x" data-width="20"></span>
</button>
<div className="flex flex-col md:flex-row h-full">
<div className="w-full md:w-1/2 bg-slate-100">
<img alt="Detail" className="w-full h-64 md:h-full object-cover" src="https://images.unsplash.com/photo-1556912172-45b7abe8d7e1?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="w-full md:w-1/2 p-8 max-h-[80vh] overflow-y-auto">
<div className="mb-6">
<span className="text-xs font-semibold text-amber-600 uppercase tracking-wider mb-2 block">Вторичное жилье</span>
<h3 className="text-2xl font-bold text-slate-900 tracking-tight mb-2">Трехкомнатная квартира</h3>
<p className="text-sm text-slate-600 leading-relaxed mb-6">
                                Сложный ремонт во вторичном жилье. Был произведен полный демонтаж до основания. Восстановлена геометрия стен, заменены все окна и радиаторы отопления.
                            </p>
</div>
<div className="space-y-4">
<h4 className="text-sm font-semibold text-slate-900 border-b border-slate-100 pb-2">Выполненные работы</h4>
<ul className="space-y-2 text-sm text-slate-600">
<li className="flex items-start gap-2">
<span className="iconify text-green-500 mt-0.5" data-icon="lucide:check-circle-2" data-width="16"></span>
<span>Полная замена стяжки пола</span>
</li>
<li className="flex items-start gap-2">
<span className="iconify text-green-500 mt-0.5" data-icon="lucide:check-circle-2" data-width="16"></span>
<span>Разводка электрики по ГОСТ</span>
</li>
<li className="flex items-start gap-2">
<span className="iconify text-green-500 mt-0.5" data-icon="lucide:check-circle-2" data-width="16"></span>
<span>Облицовка плиткой санузлов</span>
</li>
</ul>
</div>
<div className="mt-8 pt-6 border-t border-slate-100">
<a className="block w-full bg-slate-900 text-white text-center py-3 rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors" href="#contact" onclick="closeModal('modal-3')">
                                Хочу такой же ремонт
                            </a>
</div>
</div>
</div>
</div>
</div>
</div>



    </>
  );
}
