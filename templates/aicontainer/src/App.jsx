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
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: { sans: ['Inter', 'sans-serif'] },
fontSize: { xs: '0.75rem', sm: '0.875rem', base: '1rem', lg: '1.125rem', xl: '1.25rem', '2xl': '1.5rem', '3xl': '1.875rem', '4xl': '2.25rem' },
colors: {
primary: '#0f172a', // Slate 900
accent: '#2563eb',  // Blue 600
}
}
}
}



        // --- 1. LOCALIZATION ---
        const i18n = {
            en: {
                nav_features: "Features",
                nav_pricing: "Pricing",
                nav_login: "Log In",
                hero_title: "Global Container Turnover Platform",
                hero_sub: "Containers become visible, deals become instant. Direct connection between Russia and China.",
                role_owner: "Container Owner",
                role_shipper: "Cargo Shipper",
                cta_owner: "Register as Owner",
                cta_shipper: "Register as Shipper",
                stat_users: "Active Members",
                stat_containers: "Containers",
                stat_response: "Avg Response",
                stat_saving: "Est. Savings",
                dash_overview: "Overview",
                dash_fleet: "My Containers",
                dash_requests: "My Requests",
                dash_offers: "Active Offers",
                dash_add_cont: "Add Container",
                dash_create_req: "Create Request",
                status_avail: "Available",
                status_reserved: "Reserved",
                status_transit: "In Transit",
                lbl_origin: "Origin",
                lbl_dest: "Destination",
                lbl_type: "Type",
                lbl_price: "Price",
                lbl_date: "Dates",
                monetization_title: "Transparent Pricing",
                plan_free: "Starter",
                plan_pro: "Pro Business",
                btn_connect: "Connect",
                btn_logout: "Log Out"
            },
            ru: {
                nav_features: "Возможности",
                nav_pricing: "Тарифы",
                nav_login: "Войти",
                hero_title: "Международная платформа оборота контейнеров",
                hero_sub: "Контейнеры становятся видимыми, сделки — быстрыми. Прямая связь Россия — Китай.",
                role_owner: "Владелец контейнеров",
                role_shipper: "Грузовладелец",
                cta_owner: "Я Владелец",
                cta_shipper: "Я Грузовладелец",
                stat_users: "Участников",
                stat_containers: "Контейнеров",
                stat_response: "Ср. ответ",
                stat_saving: "Экономия",
                dash_overview: "Сводка",
                dash_fleet: "Мои контейнеры",
                dash_requests: "Мои заявки",
                dash_offers: "Предложения",
                dash_add_cont: "Добавить контейнер",
                dash_create_req: "Создать заявку",
                status_avail: "Доступен",
                status_reserved: "Зарезервирован",
                status_transit: "В пути",
                lbl_origin: "Подача",
                lbl_dest: "Возврат",
                lbl_type: "Тип",
                lbl_price: "Ставка",
                lbl_date: "Даты",
                monetization_title: "Прозрачные тарифы",
                plan_free: "Старт",
                plan_pro: "Pro Бизнес",
                btn_connect: "Откликнуться",
                btn_logout: "Выйти"
            },
            zh: {
                nav_features: "功能",
                nav_pricing: "定价",
                nav_login: "登录",
                hero_title: "全球集装箱周转平台",
                hero_sub: "集装箱可见，交易即时。连接俄罗斯与中国。",
                role_owner: "集装箱车主",
                role_shipper: "货主",
                cta_owner: "我是车主",
                cta_shipper: "我是货主",
                stat_users: "活跃用户",
                stat_containers: "集装箱数",
                stat_response: "平均响应",
                stat_saving: "预计节省",
                dash_overview: "概览",
                dash_fleet: "我的集装箱",
                dash_requests: "我的需求",
                dash_offers: "活跃报价",
                dash_add_cont: "添加集装箱",
                dash_create_req: "创建需求",
                status_avail: "可用",
                status_reserved: "已预订",
                status_transit: "运输中",
                lbl_origin: "起运地",
                lbl_dest: "目的地",
                lbl_type: "类型",
                lbl_price: "价格",
                lbl_date: "日期",
                monetization_title: "透明定价",
                plan_free: "入门版",
                plan_pro: "专业版",
                btn_connect: "连接",
                btn_logout: "登出"
            }
        };

        // --- 2. MOCK DATA ---
        let state = {
            lang: 'ru', // 'ru', 'en', 'zh'
            view: 'landing', // 'landing', 'login', 'owner_dash', 'shipper_dash'
            role: null,
            containers: [
                { id: 'CX-2931', type: '40HC', location: 'Shanghai (CNSHA)', dest: 'Moscow (RUMOW)', status: 'available', dates: '20 Oct - 20 Nov', price: '$2,100' },
                { id: 'CX-9942', type: '20DC', location: 'Ningbo (CNNGB)', dest: 'Novosibirsk (RUNVZ)', status: 'reserved', dates: '22 Oct - 30 Nov', price: '$1,850' },
                { id: 'CX-1102', type: '40HC', location: 'Shenzhen (CNSZX)', dest: 'Yekaterinburg (RUSVX)', status: 'available', dates: '25 Oct - 15 Dec', price: '$2,300' },
            ],
            requests: [
                { id: 'RQ-8821', type: '40HC', origin: 'Qingdao', dest: 'Moscow', quantity: 5, date: '25.10.2023', status: 'searching' },
                { id: 'RQ-1299', type: '20DC', origin: 'Guangzhou', dest: 'St. Petersburg', quantity: 2, date: '01.11.2023', status: 'negotiating' },
            ]
        };

        // --- 3. FUNCTIONS ---
        function setLang(lang) {
            state.lang = lang;
            render();
        }

        function setView(view, role = null) {
            state.view = view;
            if(role) state.role = role;
            render();
        }

        function t(key) {
            return i18n[state.lang][key] || key;
        }

        function render() {
            // Update Text Content
            document.querySelectorAll('[data-i18n]').forEach(el => {
                const key = el.getAttribute('data-i18n');
                el.innerText = t(key);
            });

            // View Switching logic
            document.getElementById('view-landing').classList.add('hidden');
            document.getElementById('view-login').classList.add('hidden');
            document.getElementById('view-dashboard').classList.add('hidden');

            if (state.view === 'landing') document.getElementById('view-landing').classList.remove('hidden');
            else if (state.view === 'login') document.getElementById('view-login').classList.remove('hidden');
            else {
                document.getElementById('view-dashboard').classList.remove('hidden');
                renderDashboard();
            }
            
            // Lang Switcher UI
            document.querySelectorAll('.lang-btn').forEach(btn => {
                btn.classList.remove('text-blue-600', 'font-semibold');
                if(btn.dataset.lang === state.lang) btn.classList.add('text-blue-600', 'font-semibold');
            });
        }

        function renderDashboard() {
            const isOwner = state.role === 'owner';
            const dashTitle = isOwner ? t('dash_fleet') : t('dash_requests');
            document.getElementById('dash-title').innerText = dashTitle;
            
            // Toggle Action Button
            const actionBtn = document.getElementById('dash-action-btn');
            actionBtn.innerText = isOwner ? t('dash_add_cont') : t('dash_create_req');
            
            // Render Table
            const tbody = document.getElementById('dash-table-body');
            tbody.innerHTML = '';
            
            const data = isOwner ? state.containers : state.requests;

            data.forEach(item => {
                let rowHTML = '';
                if(isOwner) {
                    rowHTML = `
                        <td class="py-3 px-4 font-mono text-xs text-slate-600">${item.id}</td>
                        <td class="py-3 px-4 text-sm">${item.type}</td>
                        <td class="py-3 px-4 text-sm text-slate-600">${item.location} → ${item.dest}</td>
                        <td class="py-3 px-4 text-sm text-slate-500">${item.dates}</td>
                        <td class="py-3 px-4 text-xs font-semibold ${item.status === 'available' ? 'text-green-600' : 'text-amber-600'}">
                            <span class="px-2 py-1 rounded-full ${item.status === 'available' ? 'bg-green-50' : 'bg-amber-50'} border ${item.status === 'available' ? 'border-green-100' : 'border-amber-100'}">
                                ${t(item.status === 'available' ? 'status_avail' : 'status_reserved')}
                            </span>
                        </td>
                    `;
                } else {
                    rowHTML = `
                        <td class="py-3 px-4 font-mono text-xs text-slate-600">${item.id}</td>
                        <td class="py-3 px-4 text-sm text-slate-800">${item.origin} → ${item.dest}</td>
                        <td class="py-3 px-4 text-sm">${item.quantity} x ${item.type}</td>
                        <td class="py-3 px-4 text-sm text-slate-500">${item.date}</td>
                        <td class="py-3 px-4">
                            <span class="flex items-center gap-1 text-xs text-blue-600 font-medium">
                                <iconify-icon icon="lucide:clock" width="14"></iconify-icon> 45m SLA
                            </span>
                        </td>
                    `;
                }
                const row = document.createElement('tr');
                row.className = "border-b border-slate-100 hover:bg-slate-50 transition-colors";
                row.innerHTML = rowHTML;
                tbody.appendChild(row);
            });
        }
    


        // Init Logic
        document.addEventListener('DOMContentLoaded', () => {
            setLang('ru'); // Default to Russian as per context of request
            render();
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
      <div className="fixed top-0 w-full h-screen -z-10 bg-cover bg-center" data-alpha-mask="80" style={{backgroundImage: 'url("https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f1ff097d-da2a-40db-af71-801c465a5e15_3840w.png")', maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}></div>




<header className="sticky top-0 z-50 backdrop-blur-md border-b bg-black/80 border-orange-800">
<div className="sm:px-6 flex h-14 max-w-7xl mr-auto ml-auto pr-4 pl-4 items-center justify-between">
<div className="flex items-center gap-2 cursor-pointer" onclick="setView('landing')">
<div className="w-8 h-8 rounded-lg flex items-center justify-center bg-orange-100 text-black">
<svg className="w-[20px] h-[20px]" data-icon-replaced="true" data-icon-set="lucide" data-lucide="container" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px', color: 'rgb(240, 156, 10)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M22 7.7c0-.6-.4-1.2-.8-1.5l-6.3-3.9a1.72 1.72 0 0 0-1.7 0l-10.3 6c-.5.2-.9.8-.9 1.4v6.6c0 .5.4 1.2.8 1.5l6.3 3.9a1.72 1.72 0 0 0 1.7 0l10.3-6c.5-.3.9-1 .9-1.5Z"></path><path d="M10 21.9V14L2.1 9.1"></path><path d="m10 14 11.9-6.9"></path><path d="M14 19.8v-8.1"></path><path d="M18 17.5V9.4"></path></svg>
</div>
<span className="font-semibold text-orange-100 tracking-tight" style={{}}>AI Container</span>
</div>
<div className="hidden md:flex items-center gap-6 text-sm text-orange-500 font-medium">
<a className="transition-colors hover:text-orange-100" data-i18n="nav_features" href="#">Возможности</a>
<a className="transition-colors hover:text-orange-100" data-i18n="nav_pricing" href="#pricing">Тарифы</a>
</div>
<div className="flex items-center gap-4">

<div className="flex items-center gap-2 text-xs font-medium border-r pr-4 text-orange-600 border-orange-800">
<button className="lang-btn transition hover:text-orange-300" data-lang="en" onclick="setLang('en')">EN</button>
<button className="lang-btn transition hover:text-orange-300 text-blue-600 font-semibold" data-lang="ru" onclick="setLang('ru')">RU</button>
<button className="lang-btn transition hover:text-orange-300" data-lang="zh" onclick="setLang('zh')">CN</button>
</div>
<button className="text-sm font-medium text-orange-400 hover:text-orange-100" data-i18n="nav_login" id="nav-login-btn" onclick="setView('login')">Войти</button>
</div>
</div>
</header>

<main className="flex-grow fade-in" id="view-landing">

<section className="border-orange-900 border-b pt-20 pb-24">
<div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-medium mb-6 bg-orange-950 border-orange-800 text-orange-400">
<span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
                    MVP v1.0 Live: RU ↔ CN
                </div>
<h1 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6 max-w-4xl mx-auto leading-tight text-orange-100" data-i18n="hero_title">Международная платформа оборота контейнеров</h1>
<p className="text-lg text-orange-500 mb-10 max-w-2xl mx-auto leading-relaxed" data-i18n="hero_sub">Контейнеры становятся видимыми, сделки — быстрыми. Прямая связь Россия — Китай.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto px-6 py-3 rounded-lg text-sm font-medium transition-all flex items-center justify-center gap-2 bg-orange-100 text-black hover:bg-orange-200" onclick="setView('login')">
<span data-i18n="cta_owner">Я Владелец</span>
<svg className="" data-icon-set="lucide" data-lucide="arrow-right" height="16" style={{}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
<button className="w-full sm:w-auto px-6 py-3 border rounded-lg text-sm font-medium transition-all bg-black text-orange-100 border-orange-800 hover:bg-orange-950" onclick="setView('login')">
<span data-i18n="cta_shipper">Я Грузовладелец</span>
</button>
</div>
</div>
</section>

<section className="bg-black bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7bafd813-a095-40c8-835f-448058c4458c_3840w.webp)] bg-cover bg-center pt-12 pb-12">
<div className="max-w-7xl mx-auto px-4 sm:px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-y py-8 border-orange-900">
<div className="text-center">
<div className="text-3xl font-semibold tracking-tight mb-1 text-orange-100">1,204</div>
<div className="text-xs font-medium text-orange-500 uppercase tracking-wide" data-i18n="stat_users">Участников</div>
</div>
<div className="text-center">
<div className="text-3xl font-semibold tracking-tight mb-1 text-orange-100">8,500+</div>
<div className="text-xs font-medium text-orange-500 uppercase tracking-wide" data-i18n="stat_containers">Контейнеров</div>
</div>
<div className="text-center">
<div className="text-3xl font-semibold tracking-tight mb-1 text-orange-100">18m</div>
<div className="text-xs font-medium text-orange-500 uppercase tracking-wide" data-i18n="stat_response">Ср. ответ</div>
</div>
<div className="text-center">
<div className="text-3xl font-semibold tracking-tight mb-1 text-orange-100">15%</div>
<div className="text-xs font-medium text-orange-500 uppercase tracking-wide" data-i18n="stat_saving">Экономия</div>
</div>
</div>
</div>
</section>

<section className="py-24">
<div className="max-w-7xl mx-auto px-4 sm:px-6">
<div className="grid md:grid-cols-3 gap-12">

<div className="group">
<div className="w-10 h-10 border rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform bg-orange-950 border-orange-900 text-orange-400">
<svg className="" data-icon-set="lucide" data-lucide="file-plus" height="20" style={{}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5M9 15h6m-3 3v-6"></path></g></svg>
</div>
<h3 className="text-lg font-semibold mb-2 text-orange-100">1. Request</h3>
<p className="text-sm text-orange-500 leading-relaxed">Shipper creates a structured request (Location, Dates, Type, Return Place).</p>
</div>

<div className="group">
<div className="w-10 h-10 border rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform bg-orange-950 border-orange-900 text-orange-400">
<svg className="" data-icon-set="lucide" data-lucide="arrow-right-left" height="20" style={{}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m16 3l4 4l-4 4m4-4H4m4 14l-4-4l4-4m-4 4h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-lg font-semibold mb-2 text-orange-100">2. Match</h3>
<p className="text-sm text-orange-500 leading-relaxed">Owners see demands matching their fleet's return flow. Automated matching suggestions.</p>
</div>

<div className="group">
<div className="w-10 h-10 border rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform bg-orange-950 border-orange-900 text-orange-400">
<svg className="" data-icon-set="lucide" data-lucide="shield-check" height="20" style={{}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12l2 2l4-4"></path></g></svg>
</div>
<h3 className="text-lg font-semibold mb-2 text-orange-100">3. Deal</h3>
<p className="text-sm text-orange-500 leading-relaxed">Confirm terms, sign digitally. SLA monitoring and payment security included.</p>
</div>
</div>
</div>
</section>

<section className="py-24 border-t bg-orange-950 border-orange-800" id="pricing">
<div className="max-w-7xl mx-auto px-4 sm:px-6">
<div className="text-center mb-12">
<h2 className="text-2xl font-semibold tracking-tight text-orange-100" data-i18n="monetization_title">Прозрачные тарифы</h2>
</div>
<div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">

<div className="p-6 rounded-xl border shadow-sm bg-black border-orange-800">
<div className="text-sm font-medium text-orange-500 mb-2" data-i18n="plan_free">Старт</div>
<div className="text-3xl font-semibold mb-4 text-orange-100">0 <span className="text-sm font-normal text-orange-600">/ mo</span></div>
<ul className="space-y-3 mb-6 text-sm text-orange-400">
<li className="flex gap-2"><svg className="text-amber-500" data-icon-set="lucide" data-lucide="check" height="21" style={{}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Access to database</li>
<li className="flex gap-2"><svg className="text-amber-500" data-icon-set="lucide" data-lucide="check" height="21" style={{}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Basic search filters</li>
<li className="flex gap-2"><svg className="text-amber-500" data-icon-set="lucide" data-lucide="check" height="21" style={{}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> 2.5% Success Fee</li>
</ul>
<button className="w-full py-2 rounded-md text-sm font-medium transition bg-orange-900 text-orange-100 hover:bg-orange-800">Start Free</button>
</div>

<div className="p-6 rounded-xl border shadow-md ring-1 relative bg-black border-yellow-800 ring-yellow-900">
<div className="absolute top-0 right-0 text-[10px] uppercase font-bold px-2 py-1 rounded-bl-lg rounded-tr-lg bg-yellow-400 text-black">Recommended</div>
<div className="text-sm font-medium mb-2 text-yellow-400" data-i18n="role_owner">Владелец контейнеров</div>
<div className="text-3xl font-semibold mb-4 text-orange-100">$499 <span className="text-sm font-normal text-orange-600">/ mo</span></div>
<ul className="space-y-3 mb-6 text-sm text-orange-400">
<li className="flex gap-2"><svg className="text-yellow-500" data-icon-set="lucide" data-lucide="check" height="21" style={{}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> 1.5% Success Fee</li>
<li className="flex gap-2"><svg className="text-yellow-500" data-icon-set="lucide" data-lucide="check" height="21" style={{}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Priority listing</li>
<li className="flex gap-2"><svg className="text-yellow-500" data-icon-set="lucide" data-lucide="check" height="21" style={{}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> API Access</li>
</ul>
<button className="w-full py-2 rounded-md text-sm font-medium transition bg-orange-100 text-black hover:bg-orange-200">Get PRO</button>
</div>

<div className="p-6 rounded-xl border shadow-sm bg-black border-orange-800">
<div className="text-sm font-medium text-orange-500 mb-2" data-i18n="role_shipper">Грузовладелец</div>
<div className="text-3xl font-semibold mb-4 text-orange-100">$299 <span className="text-sm font-normal text-orange-600">/ mo</span></div>
<ul className="space-y-3 mb-6 text-sm text-orange-400">
<li className="flex gap-2"><svg className="text-amber-500" data-icon-set="lucide" data-lucide="check" height="21" style={{}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> SLA Guarantee</li>
<li className="flex gap-2"><svg className="text-amber-500" data-icon-set="lucide" data-lucide="check" height="21" style={{}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Dedicated Support</li>
<li className="flex gap-2"><svg className="text-amber-500" data-icon-set="lucide" data-lucide="check" height="21" style={{}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Financial Guarantee</li>
</ul>
<button className="w-full py-2 rounded-md text-sm font-medium transition bg-orange-900 text-orange-100 hover:bg-orange-800">Get PRO</button>
</div>
</div>
</div>
</section>
</main>

<div className="hidden flex-grow flex items-center justify-center fade-in bg-orange-950" id="view-login">
<div className="w-full max-w-md p-8 rounded-xl border shadow-lg bg-black border-orange-800">
<div className="text-center mb-8">
<h2 className="text-2xl font-semibold tracking-tight text-orange-100" data-i18n="nav_login">Войти</h2>
<p className="text-sm text-orange-500 mt-2">Enter your work email to continue</p>
</div>
<div className="space-y-4">
<div>
<label className="block text-xs font-medium mb-1 text-orange-300">Email</label>
<input className="w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-900 focus:border-transparent border-orange-700" placeholder="name@company.com" type="email"/>
</div>
<div className="grid grid-cols-2 gap-4 pt-2">
<button className="px-4 py-2 text-sm font-medium rounded-lg transition bg-orange-100 text-black hover:bg-orange-200" onclick="setView('dashboard', 'owner')">
<span data-i18n="role_owner">Владелец контейнеров</span>
</button>
<button className="px-4 py-2 border text-sm font-medium rounded-lg transition bg-black border-orange-700 text-orange-300 hover:bg-orange-950" onclick="setView('dashboard', 'shipper')">
<span data-i18n="role_shipper">Грузовладелец</span>
</button>
</div>
</div>
<div className="mt-6 text-center">
<p className="text-xs text-orange-600">By continuing, you agree to our Terms of Service.</p>
</div>
</div>
</div>

<div className="hidden flex-grow fade-in bg-orange-950" id="view-dashboard">
<div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">

<div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
<div>
<h1 className="text-2xl font-semibold tracking-tight text-orange-100" id="dash-title">Dashboard</h1>
<p className="text-sm text-orange-500 mt-1">Manage your logistics operations.</p>
</div>
<div className="flex items-center gap-3">
<button className="p-2 text-orange-500 border rounded-md hover:text-orange-100 bg-black border-orange-800">
<svg className="" data-icon-set="lucide" data-lucide="bell" height="1em" style={{}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0m-10.47-5.674A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
<button className="px-4 py-2 text-sm font-medium rounded-md shadow-sm flex items-center gap-2 bg-green-400 text-black hover:bg-green-300" id="dash-action-btn" style={{}}>
<svg className="" data-icon-set="lucide" data-lucide="plus" height="1em" style={{}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7v14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Add
                    </button>
<button className="px-4 py-2 text-sm font-medium text-orange-400 hover:text-orange-100" data-i18n="btn_logout" onclick="setView('landing')">Выйти</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
<div className="p-4 rounded-lg border shadow-sm bg-black border-orange-800">
<div className="text-xs font-medium text-orange-500 mb-1" data-i18n="dash_offers">Предложения</div>
<div className="text-2xl font-semibold text-orange-100">12</div>
</div>
<div className="p-4 rounded-lg border shadow-sm bg-black border-orange-800">
<div className="text-xs font-medium text-orange-500 mb-1">Pending Actions</div>
<div className="text-2xl font-semibold text-amber-400">3</div>
</div>
<div className="p-4 rounded-lg border shadow-sm bg-black border-orange-800">
<div className="text-xs font-medium text-orange-500 mb-1">Total Volume</div>
<div className="text-2xl font-semibold text-orange-100">450 TEU</div>
</div>
<div className="p-4 rounded-lg border shadow-sm flex items-center justify-between bg-black border-orange-800">
<div>
<div className="text-xs font-medium text-orange-500 mb-1">Wallet</div>
<div className="text-2xl font-semibold text-orange-100">$1.2k</div>
</div>
<div className="text-xs px-2 py-1 rounded bg-amber-950 text-amber-300">Safe</div>
</div>
</div>

<div className="rounded-lg border shadow-sm overflow-hidden bg-black border-orange-800">
<div className="p-4 border-b flex items-center gap-4 border-orange-800 bg-orange-950/50">

<div className="relative flex-1 max-w-xs">
<svg className="absolute left-3 top-2.5 text-orange-600" data-icon-set="lucide" data-lucide="search" height="1em" style={{}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m21 21l-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></g></svg>
<input className="w-full pl-9 pr-3 py-2 text-sm border rounded-md focus:outline-none focus:border-green-500 border-orange-700" placeholder="Search ID, Location..." style={{}} type="text"/>
</div>
<button className="px-3 py-2 border rounded-md text-sm font-medium flex items-center gap-2 border-orange-700 text-orange-300 bg-black hover:bg-orange-950">
<svg className="" data-icon-set="lucide" data-lucide="filter" height="1em" style={{}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M22 3H2l8 9.46V19l4 2v-8.54z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Filter
                    </button>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="border-b text-xs font-semibold text-orange-500 uppercase tracking-wider bg-orange-950 border-orange-800">
<th className="py-3 px-4">ID</th>
<th className="py-3 px-4" data-i18n="lbl_type">Тип</th>
<th className="py-3 px-4" data-i18n="lbl_origin">Подача</th>
<th className="py-3 px-4" data-i18n="lbl_date">Даты</th>
<th className="py-3 px-4">Status / Action</th>
</tr>
</thead>
<tbody className="divide-y divide-orange-900" id="dash-table-body">

</tbody>
</table>
</div>
</div>
</div>
</div>

<footer className="border-t py-12 mt-auto bg-black border-orange-800">
<div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded flex items-center justify-center bg-orange-100 text-black">
<svg className="" data-icon-replaced="true" data-icon-set="lucide" data-lucide="box" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(239, 119, 6)'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path></svg>
</div>
<span className="text-sm font-semibold text-orange-100 tracking-tight" style={{}}>AI Container</span>
</div>
<div className="text-xs text-orange-600" style={{}}>© 2026 Ai Container Logistics SaaS. All rights reserved.</div>
<div className="flex gap-4 text-xs text-orange-500">
<a className="hover:text-orange-100" href="#">Privacy</a>
<a className="hover:text-orange-100" href="#">Terms</a>
<a className="hover:text-orange-100" href="#">SLA</a>
</div>
</div>
</footer>


    </>
  );
}
