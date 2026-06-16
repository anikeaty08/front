import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
brand: {
black: '#0a0a0a',
gray: '#888888',
light: '#fafafa',
border: '#eaeaea'
}
}
}
}
}



        // --- DATA & CONFIG ---
        const products = [
            { id: "A", name_bg: "True Wireless Слушалки Pro", price: 29.99 },
            { id: "B", name_bg: "Комплект Кабел и Адаптер", price: 19.99 },
            { id: "C", name_bg: "MagSafe Battery Pack", price: 34.99 },
            { id: "D", name_bg: "7-в-1 Пакет Аксесоари", price: 49.99 },
            { id: "E", name_bg: "Протектори & MagSafe Кейс", price: 14.99 }
        ];

        const translations = {
            "BG": {
                orderTitle: "Завършете поръчката",
                btnText: "Изпрати поръчка"
            },
            "EN": {
                orderTitle: "Complete Order",
                btnText: "Submit Order"
            },
            "DE": {
                orderTitle: "Bestellung abschließen",
                btnText: "Bestellung absenden"
            }
        };

        // --- INTERACTION LOGIC ---

        // 1. Prefill Product from Catalogue
        function selectProduct(productName) {
            const select = document.getElementById('product-select');
            // Find option containing the name (since values have prices appended in select for UI)
            // Simplified for this demo: values match exactly in select logic below
            // Actually, in HTML I set values to match name exactly, so direct assignment works.
            select.value = productName;
            
            const orderSection = document.getElementById('order');
            orderSection.scrollIntoView({ behavior: 'smooth' });
        }

        // 2. Quantity Stepper
        function adjustQty(amount) {
            const input = document.getElementById('quantity');
            let val = parseInt(input.value);
            val = Math.max(1, Math.min(10, val + amount));
            input.value = val;
        }

        // 3. Toggle Address Fields
        function toggleAddressFields(show) {
            const el = document.getElementById('address-fields');
            const requiredFields = el.querySelectorAll('input');
            
            if(show) {
                el.classList.remove('hidden');
                requiredFields.forEach(i => i.setAttribute('required', 'true'));
            } else {
                el.classList.add('hidden');
                requiredFields.forEach(i => i.removeAttribute('required'));
            }
        }

        // 4. Localization Stub (Client-Side)
        function initLocalization() {
            // Mock detection logic
            // In real app: check ipapi or navigator.language
            const userLang = navigator.language.slice(0, 2).toUpperCase();
            const supported = ['BG', 'EN', 'DE'];
            const detected = supported.includes(userLang) ? userLang : 'BG';
            
            // Only switch if not BG (Default) and is supported
            if (detected !== 'BG' && translations[detected]) {
                document.querySelector('#lang-switch span').innerText = detected;
                // Example of text swapping
                document.querySelector('#order h2').innerText = translations[detected].orderTitle;
                document.querySelector('#checkout-form button[type="submit"] span').innerText = translations[detected].btnText;
                document.getElementById('currency').value = 'EUR'; // Standardize EUR for EU
            }
        }

        // 5. Form Submission & Webhook Mock
        document.getElementById('checkout-form').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic Validation
            if(!this.checkValidity()) {
                // Trigger browser validation UI
                this.reportValidity();
                return;
            }

            // Prepare Payload
            const formData = {
                product: document.getElementById('product-select').value,
                quantity: document.getElementById('quantity').value,
                customer: {
                    name: document.getElementById('name').value,
                    email: document.getElementById('email').value,
                    phone: document.getElementById('phone').value,
                    country: document.getElementById('country').value
                },
                shipping: {
                    method: document.querySelector('input[name="shipping"]:checked').value,
                    address: document.getElementById('address').value || 'Econt Office'
                },
                notes: document.getElementById('notes').value,
                timestamp: new Date().toISOString()
            };

            console.log("Order Payload:", JSON.stringify(formData, null, 2));

            // UI Feedback
            this.classList.add('hidden');
            document.getElementById('success-message').classList.remove('hidden');
            document.getElementById('success-message').scrollIntoView({ behavior: 'smooth' });

            // Mock Async Call
            // fetch('https://hooks.zapier.com/hooks/catch/placeholder', { method: 'POST', body: JSON.stringify(formData) })
        });

        // Initialize
        document.addEventListener('DOMContentLoaded', () => {
            initLocalization();
        });

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 glass-panel border-b border-slate-100">
<nav className="fixed top-0 w-full z-50 glass-panel border-b border-slate-100">
<nav className="fixed top-0 w-full z-50 glass-panel border-b border-slate-100">
<div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
<div className="text-sm font-semibold tracking-tight uppercase flex items-center gap-2"> Gochex <div className="flex items-center gap-1 ml-2 text-xs text-slate-500"> Аксесоари </div>
</div>
<div className="hidden sm:flex gap-6 text-xs font-medium text-slate-500 relative">
<div className="group relative"> <a className="hover:text-slate-900 transition-colors" href="#catalogue">Каталог</a>
<div className="absolute top-full left-0 mt-2 w-48 bg-white border border-slate-200 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-opacity z-50">
<a className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100" href="#catalogue">Всички
                        продукти</a> <a className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100" href="#category1">Слушалки</a> <a className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100" href="#category2">Кабели и
                        адаптери</a> <a className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100" href="#category3">MagSafe батерии</a> </div>
</div> <a className="hover:text-slate-900 transition-colors" href="#why">Защо нас</a> <a className="hover:text-slate-900 transition-colors" href="#order">Поръчка</a>
</div>
</div>
</nav>
</nav>
</nav>

<section className="relative flex flex-col text-center max-w-6xl mx-auto pt-32 pb-16 px-6 items-center overflow-hidden" id="hero">

<div className="absolute inset-0">
<img alt="Hero Background" className="w-full h-full object-cover" src="https://via.placeholder.com/1600x900"/>
<div className="absolute inset-0 bg-black/50"></div>
</div>

<div className="relative z-10 flex flex-col items-center text-white">
<div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-[10px] font-medium mb-6 uppercase tracking-wider">
<span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
      Нови Продукти
    </div>
<h1 className="sm:text-5xl md:text-6xl leading-[1.2] font-semibold tracking-tight max-w-3xl mb-6">
      Gochex — Премиум аксесоари за Apple устройства
    </h1>
<h2 className="text-sm sm:text-lg font-normal leading-relaxed max-w-2xl mb-8 text-white/90">
      Качествени аксесоари, бърза доставка в Европа и лесна поръчка без количка.
    </h2>

<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
<a className="inline-flex justify-center items-center gap-2 bg-blue-600 text-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-blue-700 transition-all hover:scale-[1.02]" href="#catalogue">
        Разгледай
        <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
<a className="inline-flex justify-center items-center gap-2 bg-white text-blue-800 border border-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-white/90 transition-all" href="#order">
        Поръчай
      </a>
</div>
</div>
</section>

<div className="bg-slate-50 border-y border-slate-100 py-3 overflow-hidden">
<div className="flex justify-center gap-8 md:gap-16 items-center whitespace-nowrap min-w-full animate-marquee px-4">
<span className="text-xs font-medium text-slate-600 flex items-center gap-2">
<iconify-icon icon="solar:box-linear" width="16"></iconify-icon>
                Бърза доставка: До офис на Еконт — до 2 работни дни
            </span>
<span className="text-xs font-medium text-slate-600 flex items-center gap-2">
<iconify-icon icon="solar:shield-check-linear" width="16"></iconify-icon>
                Лесно връщане: 14-дневен срок за връщане
            </span>
</div>
</div>

<section className="py-12 max-w-6xl mx-auto px-6" id="trust">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="flex flex-col items-center text-center p-6 rounded-2xl border border-slate-100 bg-slate-50/50">
<iconify-icon className="mb-3 text-slate-800" icon="solar:rocket-2-linear" width="32"></iconify-icon>
<h3 className="text-sm font-semibold text-slate-900 mb-1">Бърза доставка</h3>
<p className="text-xs text-slate-500">Еконт – 2 работни дни</p>
</div>
<div className="flex flex-col items-center text-center p-6 rounded-2xl border border-slate-100 bg-slate-50/50">
<iconify-icon className="mb-3 text-slate-800" icon="solar:refresh-square-linear" width="32"></iconify-icon>
<h3 className="text-sm font-semibold text-slate-900 mb-1">14-дневно връщане</h3>
<p className="text-xs text-slate-500">Безпроблемна замяна или връщане</p>
</div>
<div className="flex flex-col items-center text-center p-6 rounded-2xl border border-slate-100 bg-slate-50/50">
<iconify-icon className="mb-3 text-slate-800" icon="solar:tag-price-linear" width="32"></iconify-icon>
<h3 className="text-sm font-semibold text-slate-900 mb-1">Достъпни цени</h3>
<p className="text-xs text-slate-500">Най-добро съотношение в Европа</p>
</div>
</div>
</section>

<section className="py-16 max-w-6xl mx-auto px-6" id="catalogue">
<div className="flex items-center justify-between mb-10">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">Каталог</h2>
<span className="text-xs font-medium text-slate-500 bg-slate-100 px-2 py-1 rounded">5 Категории</span>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

<article className="group relative flex flex-col p-6 bg-white border border-slate-200 rounded-3xl hover:shadow-lg transition-all duration-300">
<div className="aspect-square bg-slate-50 rounded-2xl mb-6 flex items-center justify-center overflow-hidden">
<iconify-icon className="text-slate-300 group-hover:scale-110 transition-transform duration-500" icon="solar:headphones-round-sound-linear" width="64"></iconify-icon>
</div>
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-semibold text-slate-900 tracking-tight">True Wireless Слушалки Pro</h3>
<span className="text-sm font-semibold text-slate-900">€29.99</span>
</div>
<p className="text-xs text-slate-500 mb-4 line-clamp-2">Кристален звук с активно шумопотискане и дълъг живот на батерията.</p>
<ul className="space-y-1 mb-6 text-xs text-slate-600">
<li className="flex items-center gap-1.5"><iconify-icon icon="solar:check-read-linear"></iconify-icon> 24ч батерия с кутията</li>
<li className="flex items-center gap-1.5"><iconify-icon icon="solar:check-read-linear"></iconify-icon> Активно шумопотискане</li>
<li className="flex items-center gap-1.5"><iconify-icon icon="solar:check-read-linear"></iconify-icon> Водоустойчивост IPX4</li>
</ul>
<div className="mt-auto">
<div className="flex items-center gap-2 text-[10px] text-amber-600 bg-amber-50 px-2 py-1 rounded w-fit mb-3">
<iconify-icon icon="solar:clock-circle-linear"></iconify-icon>
                        Ограничени бройки — 12 налични
                    </div>
<button className="w-full bg-slate-900 text-white py-2.5 rounded-xl text-sm font-medium hover:bg-slate-800 transition-colors flex justify-center items-center gap-2" onclick="selectProduct('True Wireless Слушалки Pro')">
                        Поръчай
                        <iconify-icon icon="solar:bag-linear"></iconify-icon>
</button>
</div>
</article>

<article className="group relative flex flex-col p-6 bg-white border border-slate-200 rounded-3xl hover:shadow-lg transition-all duration-300">
<div className="aspect-square bg-slate-50 rounded-2xl mb-6 flex items-center justify-center overflow-hidden">
<iconify-icon className="text-slate-300 group-hover:scale-110 transition-transform duration-500" icon="solar:plug-circle-linear" width="64"></iconify-icon>
</div>
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-semibold text-slate-900 tracking-tight">Комплект Кабел и Адаптер</h3>
<span className="text-sm font-semibold text-slate-900">€19.99</span>
</div>
<p className="text-xs text-slate-500 mb-4 line-clamp-2">Бързо зареждане за всички ваши устройства с усилена оплетка.</p>
<ul className="space-y-1 mb-6 text-xs text-slate-600">
<li className="flex items-center gap-1.5"><iconify-icon icon="solar:check-read-linear"></iconify-icon> 20W PD Бързо зареждане</li>
<li className="flex items-center gap-1.5"><iconify-icon icon="solar:check-read-linear"></iconify-icon> Подсилен найлонов кабел</li>
<li className="flex items-center gap-1.5"><iconify-icon icon="solar:check-read-linear"></iconify-icon> MFi Сертифициран чип</li>
</ul>
<div className="mt-auto">
<div className="flex items-center gap-2 text-[10px] text-emerald-600 bg-emerald-50 px-2 py-1 rounded w-fit mb-3">
<iconify-icon icon="solar:box-minimalistic-linear"></iconify-icon>
                        На склад
                    </div>
<button className="w-full bg-slate-900 text-white py-2.5 rounded-xl text-sm font-medium hover:bg-slate-800 transition-colors flex justify-center items-center gap-2" onclick="selectProduct('Комплект Кабел и Адаптер')">
                        Поръчай
                        <iconify-icon icon="solar:bag-linear"></iconify-icon>
</button>
</div>
</article>

<article className="group relative flex flex-col p-6 bg-white border border-slate-200 rounded-3xl hover:shadow-lg transition-all duration-300">
<div className="aspect-square bg-slate-50 rounded-2xl mb-6 flex items-center justify-center overflow-hidden">
<iconify-icon className="text-slate-300 group-hover:scale-110 transition-transform duration-500" icon="solar:battery-charge-linear" width="64"></iconify-icon>
</div>
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-semibold text-slate-900 tracking-tight">MagSafe Battery Pack</h3>
<span className="text-sm font-semibold text-slate-900">€34.99</span>
</div>
<p className="text-xs text-slate-500 mb-4 line-clamp-2">Магнитна батерия, която се прикрепя мигновено.</p>
<ul className="space-y-1 mb-6 text-xs text-slate-600">
<li className="flex items-center gap-1.5"><iconify-icon icon="solar:check-read-linear"></iconify-icon> Силно магнитно захващане</li>
<li className="flex items-center gap-1.5"><iconify-icon icon="solar:check-read-linear"></iconify-icon> Тънък и лек дизайн</li>
<li className="flex items-center gap-1.5"><iconify-icon icon="solar:check-read-linear"></iconify-icon> 5000mAh капацитет</li>
</ul>
<div className="mt-auto">
<div className="flex items-center gap-2 text-[10px] text-amber-600 bg-amber-50 px-2 py-1 rounded w-fit mb-3">
<iconify-icon icon="solar:fire-linear"></iconify-icon>
                        Само 4 налични
                    </div>
<button className="w-full bg-slate-900 text-white py-2.5 rounded-xl text-sm font-medium hover:bg-slate-800 transition-colors flex justify-center items-center gap-2" onclick="selectProduct('MagSafe Battery Pack')">
                        Поръчай
                        <iconify-icon icon="solar:bag-linear"></iconify-icon>
</button>
</div>
</article>

<article className="group relative flex flex-col p-6 bg-white border border-slate-200 rounded-3xl hover:shadow-lg transition-all duration-300">
<div className="aspect-square bg-slate-50 rounded-2xl mb-6 flex items-center justify-center overflow-hidden">
<iconify-icon className="text-slate-300 group-hover:scale-110 transition-transform duration-500" icon="solar:devices-linear" width="64"></iconify-icon>
</div>
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-semibold text-slate-900 tracking-tight">7-в-1 Пакет Аксесоари</h3>
<span className="text-sm font-semibold text-slate-900">€49.99</span>
</div>
<p className="text-xs text-slate-500 mb-4 line-clamp-2">Всичко необходимо за вашия нов iPhone в една кутия.</p>
<ul className="space-y-1 mb-6 text-xs text-slate-600">
<li className="flex items-center gap-1.5"><iconify-icon icon="solar:check-read-linear"></iconify-icon> Кейс, Протектор, Зарядно</li>
<li className="flex items-center gap-1.5"><iconify-icon icon="solar:check-read-linear"></iconify-icon> Кабел, MagSafe портфейл</li>
<li className="flex items-center gap-1.5"><iconify-icon icon="solar:check-read-linear"></iconify-icon> Стойка за кола</li>
</ul>
<div className="mt-auto">
<div className="flex items-center gap-2 text-[10px] text-emerald-600 bg-emerald-50 px-2 py-1 rounded w-fit mb-3">
<iconify-icon icon="solar:box-minimalistic-linear"></iconify-icon>
                        На склад
                    </div>
<button className="w-full bg-slate-900 text-white py-2.5 rounded-xl text-sm font-medium hover:bg-slate-800 transition-colors flex justify-center items-center gap-2" onclick="selectProduct('7-в-1 Пакет Аксесоари')">
                        Поръчай
                        <iconify-icon icon="solar:bag-linear"></iconify-icon>
</button>
</div>
</article>

<article className="group relative flex flex-col p-6 bg-white border border-slate-200 rounded-3xl hover:shadow-lg transition-all duration-300">
<div className="aspect-square bg-slate-50 rounded-2xl mb-6 flex items-center justify-center overflow-hidden">
<iconify-icon className="text-slate-300 group-hover:scale-110 transition-transform duration-500" icon="solar:smartphone-linear" width="64"></iconify-icon>
</div>
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-semibold text-slate-900 tracking-tight">Протектори &amp; MagSafe Кейс</h3>
<span className="text-sm font-semibold text-slate-900">€14.99</span>
</div>
<p className="text-xs text-slate-500 mb-4 line-clamp-2">Ултра-тънка защита, която не скрива дизайна на телефона.</p>
<ul className="space-y-1 mb-6 text-xs text-slate-600">
<li className="flex items-center gap-1.5"><iconify-icon icon="solar:check-read-linear"></iconify-icon> 9H Стъклен протектор</li>
<li className="flex items-center gap-1.5"><iconify-icon icon="solar:check-read-linear"></iconify-icon> Прозрачен MagSafe гръб</li>
<li className="flex items-center gap-1.5"><iconify-icon icon="solar:check-read-linear"></iconify-icon> Anti-Yellowing покритие</li>
</ul>
<div className="mt-auto">
<div className="flex items-center gap-2 text-[10px] text-emerald-600 bg-emerald-50 px-2 py-1 rounded w-fit mb-3">
<iconify-icon icon="solar:box-minimalistic-linear"></iconify-icon>
                        На склад
                    </div>
<button className="w-full bg-slate-900 text-white py-2.5 rounded-xl text-sm font-medium hover:bg-slate-800 transition-colors flex justify-center items-center gap-2" onclick="selectProduct('Протектори &amp; MagSafe Кейс')">
                        Поръчай
                        <iconify-icon icon="solar:bag-linear"></iconify-icon>
</button>
</div>
</article>
</div>
</section>

<section className="py-16 bg-slate-50 border-y border-slate-100" id="why">
<div className="max-w-6xl mx-auto px-6">
<h2 className="text-2xl font-semibold tracking-tight text-slate-900 mb-10 text-center">Защо Gochex Accessories?</h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="flex flex-col gap-3">
<div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-900">
<iconify-icon icon="solar:wallet-money-linear"></iconify-icon>
</div>
<h4 className="text-sm font-medium text-slate-900">Достъпни цени</h4>
<p className="text-xs text-slate-500 leading-relaxed">Директен внос без излишни надценки и посредници.</p>
</div>
<div className="flex flex-col gap-3">
<div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-900">
<iconify-icon icon="solar:star-fall-linear"></iconify-icon>
</div>
<h4 className="text-sm font-medium text-slate-900">Кураторска селекция</h4>
<p className="text-xs text-slate-500 leading-relaxed">Само продукти, които ние самите използваме всеки ден.</p>
</div>
<div className="flex flex-col gap-3">
<div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-900">
<iconify-icon icon="solar:cart-large-2-linear"></iconify-icon>
</div>
<h4 className="text-sm font-medium text-slate-900">Без кошница</h4>
<p className="text-xs text-slate-500 leading-relaxed">Ултра бърза форма за поръчка за максимално удобство.</p>
</div>
<div className="flex flex-col gap-3">
<div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-900">
<iconify-icon icon="solar:users-group-rounded-linear"></iconify-icon>
</div>
<h4 className="text-sm font-medium text-slate-900">Общностна марка</h4>
<p className="text-xs text-slate-500 leading-relaxed">Хиляди доволни клиенти в социалните мрежи.</p>
</div>
</div>
</div>
</section>

<section className="py-16 max-w-6xl mx-auto px-6" id="community">
<div className="flex flex-col items-center mb-10">
<h2 className="text-2xl font-semibold tracking-tight text-slate-900 mb-6">Доверете се на общността</h2>
<div className="flex gap-4 sticky top-20 z-10 bg-white/80 backdrop-blur rounded-full px-4 py-2 border border-slate-100 shadow-sm">
<a className="text-slate-500 hover:text-[#E1306C] transition-colors" href="#"><iconify-icon icon="logos:instagram-icon" width="20"></iconify-icon></a>
<a className="text-slate-500 hover:text-black transition-colors" href="#"><iconify-icon icon="logos:tiktok-icon" width="20"></iconify-icon></a>
<a className="text-slate-500 hover:text-[#FF0000] transition-colors" href="#"><iconify-icon icon="logos:youtube-icon" width="20"></iconify-icon></a>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 relative">
<iconify-icon className="absolute top-6 right-6 text-slate-200 text-3xl" icon="solar:quote-up-linear"></iconify-icon>
<p className="text-sm text-slate-700 italic mb-4">"Най-накрая кейс, който не пожълтява след месец. Доставката беше супер бърза!"</p>
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-500">И</div>
<span className="text-xs font-medium text-slate-900">Иван Петров</span>
</div>
</div>
<div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 relative">
<iconify-icon className="absolute top-6 right-6 text-slate-200 text-3xl" icon="solar:quote-up-linear"></iconify-icon>
<p className="text-sm text-slate-700 italic mb-4">"Батерията спасява положението всеки път, когато пътувам. Препоръчвам горещо."</p>
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-500">М</div>
<span className="text-xs font-medium text-slate-900">Мария Димитрова</span>
</div>
</div>
</div>
<div className="text-center mt-8">
<button className="text-xs font-medium text-slate-500 hover:text-slate-900 underline decoration-slate-300 underline-offset-4" title="Споделете с #Gochex">Последвайте и споделете</button>
</div>
</section>

<section className="py-16 bg-slate-900 text-white" id="order">
<div className="max-w-2xl mx-auto px-6">
<div className="text-center mb-10">
<h2 className="text-3xl font-semibold tracking-tight mb-2">Complete Order</h2>
<p className="text-slate-400 text-sm">Без регистрация. Попълнете и изпратете.</p>
</div>
<form className="space-y-5" id="checkout-form" novalidate="">

<div className="bg-white/5 p-6 rounded-2xl border border-white/10">
<label className="block text-xs font-medium text-slate-300 mb-2 uppercase tracking-wide" htmlFor="product-select">Изберете продукт</label>
<div className="relative">
<select className="w-full bg-slate-800 border border-slate-700 text-white text-sm rounded-lg px-4 py-3 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" id="product-select">
<option disabled="" selected="" value="">Изберете от списъка...</option>
<option value="True Wireless Слушалки Pro">True Wireless Слушалки Pro - €29.99</option>
<option value="Комплект Кабел и Адаптер">Комплект Кабел и Адаптер - €19.99</option>
<option value="MagSafe Battery Pack">MagSafe Battery Pack - €34.99</option>
<option value="7-в-1 Пакет Аксесоари">7-в-1 Пакет Аксесоари - €49.99</option>
<option value="Протектори &amp; MagSafe Кейс">Протектори &amp; MagSafe Кейс - €14.99</option>
</select>
<iconify-icon className="absolute right-4 top-3.5 pointer-events-none text-slate-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<div className="mt-4">
<label className="block text-xs font-medium text-slate-300 mb-2 uppercase tracking-wide" htmlFor="quantity">Количество</label>
<div className="flex items-center gap-4">
<button className="w-8 h-8 rounded bg-slate-700 hover:bg-slate-600 flex items-center justify-center text-white text-lg" onclick="adjustQty(-1)" type="button">-</button>
<input className="bg-transparent text-center w-12 text-white font-medium focus:outline-none" id="quantity" max="10" min="1" readonly="" type="number" value="1"/>
<button className="w-8 h-8 rounded bg-slate-700 hover:bg-slate-600 flex items-center justify-center text-white text-lg" onclick="adjustQty(1)" type="button">+</button>
</div>
</div>
</div>

<div className="space-y-4">
<div>
<label className="block text-xs font-medium text-slate-400 mb-1" htmlFor="name">Име и фамилия</label>
<input className="w-full bg-transparent border-b border-slate-700 py-2 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors placeholder-slate-600" id="name" placeholder="Иван Иванов" required="" type="text"/>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-slate-400 mb-1" htmlFor="email">Имейл</label>
<input className="w-full bg-transparent border-b border-slate-700 py-2 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors placeholder-slate-600" id="email" placeholder="ivan@example.com" required="" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-400 mb-1" htmlFor="phone">Телефон</label>
<input className="w-full bg-transparent border-b border-slate-700 py-2 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors placeholder-slate-600" id="phone" placeholder="+359 88 123 4567" required="" type="tel"/>
</div>
</div>
</div>

<div className="pt-4">
<label className="block text-xs font-medium text-slate-400 mb-3 uppercase">Метод на доставка</label>
<div className="grid grid-cols-2 gap-4">
<label className="cursor-pointer border border-slate-700 rounded-lg p-3 flex items-start gap-3 hover:bg-slate-800 transition-colors has-[:checked]:border-blue-500 has-[:checked]:bg-blue-900/10">
<input checked="" className="mt-0.5 accent-blue-500" name="shipping" onchange="toggleAddressFields(false)" type="radio" value="econt"/>
<div>
<span className="block text-sm font-medium text-white">До офис на Еконт</span>
<span className="block text-xs text-slate-400 mt-1">~ 2 дни</span>
</div>
</label>
<label className="cursor-pointer border border-slate-700 rounded-lg p-3 flex items-start gap-3 hover:bg-slate-800 transition-colors has-[:checked]:border-blue-500 has-[:checked]:bg-blue-900/10">
<input className="mt-0.5 accent-blue-500" name="shipping" onchange="toggleAddressFields(true)" type="radio" value="address"/>
<div>
<span className="block text-sm font-medium text-white">Куриер до адрес</span>
<span className="block text-xs text-slate-400 mt-1">~ 3 дни</span>
</div>
</label>
</div>
</div>

<div className="hidden space-y-4 pt-2 border-t border-slate-800 mt-4" id="address-fields">
<div>
<label className="block text-xs font-medium text-slate-400 mb-1" htmlFor="address">Адрес за доставка</label>
<input className="w-full bg-transparent border-b border-slate-700 py-2 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors" id="address" placeholder="Ул. Примерна 12, ап. 4" type="text"/>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-slate-400 mb-1" htmlFor="city">Град</label>
<input className="w-full bg-transparent border-b border-slate-700 py-2 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors" id="city" placeholder="София" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-400 mb-1" htmlFor="zip">Пощенски код</label>
<input className="w-full bg-transparent border-b border-slate-700 py-2 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors" id="zip" placeholder="1000" type="text"/>
</div>
</div>
</div>

<input id="country" type="hidden" value="Bulgaria"/>
<input id="currency" type="hidden" value="EUR"/>
<div className="pt-4">
<label className="block text-xs font-medium text-slate-400 mb-1" htmlFor="notes">Бележки (опционално)</label>
<textarea className="w-full bg-transparent border-b border-slate-700 py-2 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors placeholder-slate-600" id="notes" rows="2"></textarea>
</div>

<button className="w-full bg-white text-slate-900 font-semibold py-4 rounded-xl mt-6 hover:bg-slate-200 transition-colors flex justify-center items-center gap-2 group" type="submit">
<span>Submit Order</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<p className="text-[10px] text-center text-slate-500 mt-4">
                    Натискайки бутона, се съгласявате с общите условия. Плащане при доставка (Наложен платеж).
                </p>
</form>

<div className="hidden text-center py-10 bg-green-900/20 border border-green-800 rounded-2xl mt-10" id="success-message">
<div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
<iconify-icon icon="solar:check-circle-bold" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-2">Благодарим ви!</h3>
<p className="text-sm text-slate-300 mb-4">Поръчката е приета успешно.</p>
<p className="text-xs text-slate-400">Ще получите потвърждение на имейл с детайли и номер на поръчката.</p>
</div>
</div>
</section>

<section className="py-16 max-w-4xl mx-auto px-6" id="faq">
<h2 className="text-2xl font-semibold tracking-tight text-slate-900 mb-8 text-center">Често задавани въпроси</h2>
<div className="space-y-6">
<details className="group border-b border-slate-100 pb-4">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none text-sm text-slate-900">
<span>Колко време отнема доставката?</span>
<span className="transition group-open:rotate-180"><iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon></span>
</summary>
<div className="text-slate-500 text-xs mt-3 group-open:animate-fadeIn leading-relaxed">
                    Стандартната доставка до офис на Еконт отнема 1-2 работни дни. За адрес може да отнеме до 3 работни дни.
                </div>
</details>
<details className="group border-b border-slate-100 pb-4">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none text-sm text-slate-900">
<span>Как става плащането?</span>
<span className="transition group-open:rotate-180"><iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon></span>
</summary>
<div className="text-slate-500 text-xs mt-3 group-open:animate-fadeIn leading-relaxed">
                    Предлагаме опция "Наложен платеж" – плащате на куриера при получаване на стоката, след като я прегледате.
                </div>
</details>
<details className="group border-b border-slate-100 pb-4">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none text-sm text-slate-900">
<span>Съвместими ли са аксесоарите с iPhone 15/16?</span>
<span className="transition group-open:rotate-180"><iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon></span>
</summary>
<div className="text-slate-500 text-xs mt-3 group-open:animate-fadeIn leading-relaxed">
                    Да, всички наши MagSafe аксесоари и кабели са напълно съвместими с последните модели на Apple.
                </div>
</details>
</div>
</section>

<footer className="py-10 border-t border-slate-100 bg-slate-50 text-center" id="footer">
<div className="max-w-6xl mx-auto px-6 flex flex-col items-center">
<div className="text-sm font-semibold uppercase tracking-tight mb-4 flex items-center gap-2">
<iconify-icon icon="solar:shield-star-linear" width="16"></iconify-icon>
                Gochex Accessories
            </div>
<div className="flex gap-6 text-xs text-slate-500 mb-6">
<a className="hover:text-slate-900" href="#">Instagram</a>
<a className="hover:text-slate-900" href="#">TikTok</a>
<a className="hover:text-slate-900" href="#">Email: support@gochex.eu</a>
</div>
<p className="text-[10px] text-slate-400 mb-2">Доставяме до: България, Гърция, Румъния, Германия, Франция и др.</p>
<p className="text-[10px] text-slate-400">© 2023 Gochex Accessories. All rights reserved.</p>
</div>
</footer>



    </>
  );
}
