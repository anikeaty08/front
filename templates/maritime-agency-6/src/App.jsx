import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
'navlion-blue': '#051b3b',
'navlion-gold': '#D4AF37',
'navlion-bg': '#F9FAFB',
'surface': '#ffffff',
},
fontFamily: {
serif: ['"Playfair Display"', 'serif'],
sans: ['"Inter"', 'sans-serif'],
},
letterSpacing: {
'tighter': '-0.03em',
'widest': '0.15em',
},
boxShadow: {
'elevate': '0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(0, 0, 0, 0.01)',
'menu': '0 4px 20px -2px rgba(0, 0, 0, 0.1)',
}
}
}
}



        // Page Transition
        window.onload = function() {
            setTimeout(() => {
                document.getElementById('page-loader').style.opacity = '0';
                setTimeout(() => {
                    document.getElementById('page-loader').style.display = 'none';
                }, 500);
            }, 800);
        };

        // Mobile Menu Logic
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const iconMenu = document.getElementById('icon-menu');
        const iconClose = document.getElementById('icon-close');
        const mobileLinks = document.querySelectorAll('.mobile-link');

        function toggleMobileMenu() {
            mobileMenu.classList.toggle('open');
            iconMenu.classList.toggle('hidden');
            iconClose.classList.toggle('hidden');
        }

        mobileMenuBtn.addEventListener('click', toggleMobileMenu);

        // Close menu when a link is clicked
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (mobileMenu.classList.contains('open')) {
                    toggleMobileMenu();
                }
            });
        });

        // Scroll Animations & Parallax
        const observerOptions = { root: null, threshold: 0.1, rootMargin: "0px" };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

        // Parallax Logic
        window.addEventListener('scroll', () => {
            const scrolled = window.scrollY;
            const bg = document.getElementById('hero-bg');
            if(bg) {
                bg.style.transform = `translate3d(0, ${scrolled * 0.5}px, 0)`; 
            }
        });

        // Leaflet Map Initialization
        document.addEventListener('DOMContentLoaded', () => {
            const map = L.map('map', {
                center: [35.5, 9.5], 
                zoom: 7,
                scrollWheelZoom: false,
                zoomControl: false,
                attributionControl: false
            });

            L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
                maxZoom: 19
            }).addTo(map);

            const ports = [
                { name: "Rades", lat: 36.80, lng: 10.28 },
                { name: "Bizerte", lat: 37.27, lng: 9.87 },
                { name: "Sfax", lat: 34.74, lng: 10.76 },
                { name: "Sousse", lat: 35.82, lng: 10.64 },
                { name: "Gabes", lat: 33.88, lng: 10.10 },
                { name: "Zarzis", lat: 33.50, lng: 11.11 }
            ];

            const customIcon = L.divIcon({
                className: 'custom-div-icon',
                html: "<div style='background-color:#D4AF37; width:10px; height:10px; border-radius:50%; box-shadow: 0 0 0 4px rgba(212, 175, 55, 0.3);'></div>",
                iconSize: [20, 20],
                iconAnchor: [10, 10]
            });

            ports.forEach(port => {
                L.marker([port.lat, port.lng], { icon: customIcon })
                    .addTo(map)
                    .bindTooltip(`<b>${port.name}</b>`, { 
                        permanent: true, 
                        direction: 'right', 
                        className: 'bg-transparent border-none text-white font-sans text-xs uppercase tracking-widest shadow-none' 
                    });
            });
        });

        // Sticky Nav Active State Logic
        const sections = document.querySelectorAll('div[id]');
        const navLinks = document.querySelectorAll('aside nav a');

        window.addEventListener('scroll', () => {
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                if (pageYOffset >= sectionTop - 150) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('text-navlion-blue', 'font-medium');
                link.classList.add('text-gray-500');
                if (link.getAttribute('href').includes(current)) {
                    link.classList.remove('text-gray-500');
                    link.classList.add('text-navlion-blue', 'font-medium');
                }
            });
        });

        /* ----------------------------------------------------------------
           CLIENT-SIDE TRANSLATION LOGIC
        ---------------------------------------------------------------- */
        const translations = {
            en: {
                nav_services: "Services",
                nav_ports: "Ports",
                nav_contact: "Contact",
                menu_port_agency: "Port Agency",
                menu_port_agency_sub: "Customs & Clearance",
                menu_husbandry: "Husbandry",
                menu_husbandry_sub: "Crew & Provisions",
                menu_chartering: "Chartering",
                menu_chartering_sub: "Fixing & Brokerage",
                menu_logistics: "Project Logistics",
                menu_logistics_sub: "Heavy Lift Transport",
                hero_badge: "Premium Maritime Services",
                hero_title_1: "Expertise in",
                hero_title_2: "Motion.",
                hero_desc: "The premier agency partner for Tunisia. Delivering comprehensive husbandry, logistics, and port solutions with absolute precision.",
                hero_cta_1: "Explore Services",
                hero_cta_2: "Contact Us",
                qc_projects: "Projects",
                qc_operations: "Operations",
                qc_chartering: "Chartering",
                sidebar_title: "Our Capabilities",
                srv_agency_desc: "We act as your eyes and ears on the ground. From pre-arrival planning to departure, we handle all formalities with customs and port authorities to ensure a quick turnaround.",
                srv_agency_feat1: "Full customs clearance",
                srv_agency_feat2: "PDA / FDA Management",
                btn_request_pda: "Request PDA",
                srv_husbandry_desc: "Beyond the cargo, we care for the vessel and crew. We coordinate efficient crew changes, cash to master, spares delivery, and medical assistance across all Tunisian ports.",
                btn_contact_desk: "Contact Husbandry Desk",
                srv_chartering_desc: "Dry bulk cargo specialists. Our extensive network allows us to fix vessels and cargoes at competitive rates. We act as exclusive brokers for major Tunisian exporters.",
                btn_view_positions: "View Open Positions",
                srv_logistics_desc: "End-to-end management for oversized and heavy-lift cargo. We coordinate road surveys, permits, and special transport from ship to site.",
                btn_get_quote: "Get a Quote",
                ports_badge: "Coverage",
                ports_title: "Strategic Ports of Tunisia",
                ports_desc: "Operating in all 8 commercial ports with local branch offices.",
                btn_view_map: "View Map",
                map_status_title: "Network Status",
                map_status_val: "Operational",
                port_1_type: "Main Terminal",
                port_1_desc: "Tunisia's primary container port. Max Draft: 9.0m",
                port_2_type: "Oil & Cement",
                port_2_desc: "Max Draft: 11.0m | Dry Dock",
                port_3_type: "General Cargo",
                port_3_desc: "Max Draft: 10.5m | Grain Silos",
                port_4_type: "Chemical & Bulk",
                port_4_desc: "Max Draft: 12.5m | Chemical Terminals",
                btn_details: "Details →",
                contact_title: "Ready to work together?",
                contact_desc: "Reach out for a Proforma D/A or operational inquiries.",
                btn_email: "Email Agency",
                footer_desc: "Setting the standard for maritime agency in Tunisia. Trusted by global principals for transparency, efficiency, and local expertise.",
                footer_links: "Quick Links",
                footer_about: "About Us"
            },
            zh: {
                nav_services: "服务",
                nav_ports: "港口",
                nav_contact: "联系",
                menu_port_agency: "港口代理",
                menu_port_agency_sub: "海关与清关",
                menu_husbandry: "船舶服务",
                menu_husbandry_sub: "船员与补给",
                menu_chartering: "租船业务",
                menu_chartering_sub: "经纪与定租",
                menu_logistics: "项目物流",
                menu_logistics_sub: "重型运输",
                hero_badge: "优质海事服务",
                hero_title_1: "行动中的",
                hero_title_2: "专业知识",
                hero_desc: "突尼斯的首选代理合作伙伴。以绝对的精确度提供全面的船舶管理、物流和港口解决方案。",
                hero_cta_1: "探索服务",
                hero_cta_2: "联系我们",
                qc_projects: "项目",
                qc_operations: "运营",
                qc_chartering: "租船",
                sidebar_title: "我们的能力",
                srv_agency_desc: "我们是您在当地的耳目。从抵港前计划到离港，我们处理所有海关和港口当局的手续，确保快速周转。",
                srv_agency_feat1: "全面清关服务",
                srv_agency_feat2: "PDA / FDA 管理",
                btn_request_pda: "请求 PDA",
                srv_husbandry_desc: "除货物外，我们同样关心船舶和船员。我们在突尼斯所有港口协调高效的船员更换、船长现金、备件交付和医疗援助。",
                btn_contact_desk: "联系服务台",
                srv_chartering_desc: "干散货专家。我们广泛的网络使我们要能以具有竞争力的价格安排船舶和货物。我们是突尼斯主要出口商的独家经纪人。",
                btn_view_positions: "查看空缺职位",
                srv_logistics_desc: "超大和重型货物的端到端管理。我们协调道路勘测、许可证以及从船到现场的特殊运输。",
                btn_get_quote: "获取报价",
                ports_badge: "覆盖范围",
                ports_title: "突尼斯战略港口",
                ports_desc: "在所有 8 个商业港口运营，设有当地分支机构。",
                btn_view_map: "查看地图",
                map_status_title: "网络状态",
                map_status_val: "运营中",
                port_1_type: "主要码头",
                port_1_desc: "突尼斯的主要集装箱港口。最大吃水：9.0米",
                port_2_type: "石油与水泥",
                port_2_desc: "最大吃水：11.0米 | 干船坞",
                port_3_type: "普通货物",
                port_3_desc: "最大吃水：10.5米 | 谷物筒仓",
                port_4_type: "化工与散货",
                port_4_desc: "最大吃水：12.5米 | 化工码头",
                btn_details: "详情 →",
                contact_title: "准备合作了吗？",
                contact_desc: "联系我们获取形式发票 (D/A) 或业务咨询。",
                btn_email: "发送邮件",
                footer_desc: "树立突尼斯海事代理的标准。凭借透明度、效率和当地专业知识，深受全球委托人的信赖。",
                footer_links: "快速链接",
                footer_about: "关于我们"
            },
            ru: {
                nav_services: "Услуги",
                nav_ports: "Порты",
                nav_contact: "Контакты",
                menu_port_agency: "Агентирование",
                menu_port_agency_sub: "Таможня и оформление",
                menu_husbandry: "Снабжение",
                menu_husbandry_sub: "Экипаж и провизия",
                menu_chartering: "Фрахтование",
                menu_chartering_sub: "Брокерские услуги",
                menu_logistics: "Логистика",
                menu_logistics_sub: "Тяжеловесные грузы",
                hero_badge: "Морские услуги премиум-класса",
                hero_title_1: "Экспертиза в",
                hero_title_2: "Движении",
                hero_desc: "Ведущий партнер-агентство в Тунисе. Предоставление комплексных решений по обслуживанию судов, логистике и портовым операциям.",
                hero_cta_1: "Наши услуги",
                hero_cta_2: "Связаться",
                qc_projects: "Проекты",
                qc_operations: "Операции",
                qc_chartering: "Фрахтование",
                sidebar_title: "Наши возможности",
                srv_agency_desc: "Мы — ваши глаза и уши на месте. От планирования до отбытия мы улаживаем все формальности с таможней и портовыми властями.",
                srv_agency_feat1: "Полная таможенная очистка",
                srv_agency_feat2: "Управление PDA / FDA",
                btn_request_pda: "Запросить PDA",
                srv_husbandry_desc: "Помимо груза, мы заботимся о судне и экипаже. Координируем смену экипажа, доставку наличных капитану, запчасти и медпомощь во всех портах Туниса.",
                btn_contact_desk: "Связаться с отделом",
                srv_chartering_desc: "Специалисты по навалочным грузам. Наша обширная сеть позволяет фрахтовать суда по конкурентным ставкам. Эксклюзивные брокеры для экспортеров.",
                btn_view_positions: "Смотреть позиции",
                srv_logistics_desc: "Сквозное управление негабаритными и тяжеловесными грузами. Дорожные изыскания, разрешения и спецтранспорт от судна до площадки.",
                btn_get_quote: "Получить котировку",
                ports_badge: "Покрытие",
                ports_title: "Стратегические порты",
                ports_desc: "Работаем во всех 8 коммерческих портах с местными филиалами.",
                btn_view_map: "Карта",
                map_status_title: "Статус сети",
                map_status_val: "Активна",
                port_1_type: "Главный терминал",
                port_1_desc: "Основной контейнерный порт Туниса. Осадка: 9.0м",
                port_2_type: "Нефть и Цемент",
                port_2_desc: "Осадка: 11.0м | Сухой док",
                port_3_type: "Генеральные грузы",
                port_3_desc: "Осадка: 10.5м | Зерновые элеваторы",
                port_4_type: "Химия и Навал",
                port_4_desc: "Осадка: 12.5м | Хим. терминалы",
                btn_details: "Подробнее →",
                contact_title: "Готовы к сотрудничеству?",
                contact_desc: "Свяжитесь для получения проформы дисбурсментского счета.",
                btn_email: "Написать нам",
                footer_desc: "Стандарт морского агентирования в Тунисе. Доверие глобальных принципалов за прозрачность, эффективность и местный опыт.",
                footer_links: "Ссылки",
                footer_about: "О нас"
            }
        };

        function changeLanguage(lang) {
            const elements = document.querySelectorAll('[data-translate]');
            
            // Highlight active button (Desktop & Mobile)
            ['en', 'zh', 'ru'].forEach(l => {
                // Desktop Buttons
                const btn = document.getElementById(`btn-${l}`);
                if(btn) {
                     if (l === lang) {
                        btn.classList.remove('text-gray-400', 'hover:text-navlion-blue');
                        btn.classList.add('font-semibold', 'text-navlion-blue');
                    } else {
                        btn.classList.add('text-gray-400', 'hover:text-navlion-blue');
                        btn.classList.remove('font-semibold', 'text-navlion-blue');
                    }
                }
               
                // Mobile Buttons
                const btnMob = document.getElementById(`btn-${l}-mob`);
                if(btnMob) {
                    if (l === lang) {
                        btnMob.classList.remove('text-gray-400');
                        btnMob.classList.add('font-semibold', 'text-navlion-blue');
                    } else {
                        btnMob.classList.add('text-gray-400');
                        btnMob.classList.remove('font-semibold', 'text-navlion-blue');
                    }
                }
            });

            // Swap text with animation
            elements.forEach(el => {
                const key = el.getAttribute('data-translate');
                if (translations[lang] && translations[lang][key]) {
                    // Small fade effect
                    el.classList.remove('lang-fade');
                    void el.offsetWidth; // trigger reflow
                    el.classList.add('lang-fade');
                    
                    setTimeout(() => {
                        el.innerText = translations[lang][key];
                    }, 50);
                }
            });
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="page-transition flex bg-white opacity-100 items-center justify-center" id="page-loader" style={{opacity: '0', display: 'none'}}>
<span className="font-serif text-navlion-blue text-xl animate-pulse tracking-widest">NAVLION</span>
</div>

<nav className="fixed w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 transition-all duration-300" id="navbar">
<div className="flex h-20 max-w-[1400px] mr-auto ml-auto pr-6 pl-6 items-center justify-between">

<a className="text-navlion-blue text-2xl font-semibold tracking-tighter font-serif" href="/">NAVLION</a>

<div className="hidden md:flex items-center space-x-10">

<div className="relative group h-20 flex items-center">
<button className="flex items-center text-xs uppercase tracking-widest text-gray-500 hover:text-navlion-blue transition-colors focus:outline-none">
<span className="" data-translate="nav_services">Services</span>
<svg className="ml-1 w-3 h-3 text-gray-400 group-hover:text-navlion-blue transition-colors" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>

<div className="absolute left-1/2 -translate-x-1/2 top-full w-[280px] bg-white border border-gray-100 shadow-menu rounded-sm p-2 invisible opacity-0 -translate-y-2 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out">
<div className="grid gap-1">
<a className="block px-4 py-3 text-sm text-gray-600 hover:bg-gray-50 hover:text-navlion-blue rounded-sm transition-colors" href="#agency">
<span className="font-medium block text-navlion-blue" data-translate="menu_port_agency">Port Agency</span>
<span className="text-xs text-gray-400" data-translate="menu_port_agency_sub">Customs &amp; Clearance</span>
</a>
<a className="block px-4 py-3 text-sm text-gray-600 hover:bg-gray-50 hover:text-navlion-blue rounded-sm transition-colors" href="#husbandry">
<span className="font-medium block text-navlion-blue" data-translate="menu_husbandry">Husbandry</span>
<span className="text-xs text-gray-400" data-translate="menu_husbandry_sub">Crew &amp; Provisions</span>
</a>
<a className="block px-4 py-3 text-sm text-gray-600 hover:bg-gray-50 hover:text-navlion-blue rounded-sm transition-colors" href="#chartering">
<span className="font-medium block text-navlion-blue" data-translate="menu_chartering">Chartering</span>
<span className="text-xs text-gray-400" data-translate="menu_chartering_sub">Fixing &amp; Brokerage</span>
</a>
<a className="block px-4 py-3 text-sm text-gray-600 hover:bg-gray-50 hover:text-navlion-blue rounded-sm transition-colors" href="#logistics">
<span className="font-medium block text-navlion-blue" data-translate="menu_logistics">Project Logistics</span>
<span className="text-xs text-gray-400" data-translate="menu_logistics_sub">Heavy Lift Transport</span>
</a>
</div>
</div>
</div>
<a className="text-xs uppercase tracking-widest text-gray-500 hover:text-navlion-blue hover-underline transition-colors" data-translate="nav_ports" href="#ports">Ports</a>
<a className="text-xs uppercase tracking-widest text-gray-500 hover:text-navlion-blue hover-underline transition-colors" data-translate="nav_contact" href="#contact">Contact</a>
</div>

<div className="hidden md:flex items-center space-x-4 border-l border-gray-200 pl-6">
<button className="text-xs font-semibold text-navlion-blue hover:opacity-80 transition-opacity" id="btn-en" onclick="changeLanguage('en')">
                    🇬🇧 EN
                </button>
<button className="text-xs text-gray-400 hover:text-navlion-blue transition-colors" id="btn-zh" onclick="changeLanguage('zh')">
                    🇨🇳 中文
                </button>
<button className="text-xs text-gray-400 hover:text-navlion-blue transition-colors" id="btn-ru" onclick="changeLanguage('ru')">
                    🇷🇺 RU
                </button>
</div>

<button className="md:hidden text-navlion-blue p-2 focus:outline-none" id="mobile-menu-btn">

<svg className="w-6 h-6" fill="none" height="24" id="icon-menu" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="3" x2="21" y1="12" y2="12"></line><line x1="3" x2="21" y1="6" y2="6"></line><line x1="3" x2="21" y1="18" y2="18"></line></svg>

<svg className="hidden w-6 h-6" fill="none" height="24" id="icon-close" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="18" x2="6" y1="6" y2="18"></line><line x1="6" x2="18" y1="6" y2="18"></line></svg>
</button>
</div>

<div className="md:hidden bg-white border-b border-gray-100 shadow-xl absolute w-full top-20 left-0" id="mobile-menu">
<div className="flex flex-col p-6 space-y-6">
<a className="text-sm uppercase tracking-widest font-semibold text-navlion-blue mobile-link" data-translate="nav_services" href="#services">Services</a>
<div className="pl-4 border-l border-gray-100 space-y-3">
<a className="block text-sm text-gray-600 mobile-link" data-translate="menu_port_agency" href="#agency">Port Agency</a>
<a className="block text-sm text-gray-600 mobile-link" data-translate="menu_husbandry" href="#husbandry">Husbandry</a>
<a className="block text-sm text-gray-600 mobile-link" data-translate="menu_chartering" href="#chartering">Chartering</a>
<a className="block text-sm text-gray-600 mobile-link" data-translate="menu_logistics" href="#logistics">Logistics</a>
</div>
<a className="text-sm uppercase tracking-widest font-semibold text-navlion-blue mobile-link" data-translate="nav_ports" href="#ports">Ports</a>
<a className="text-sm uppercase tracking-widest font-semibold text-navlion-blue mobile-link" data-translate="nav_contact" href="#contact">Contact</a>

<div className="pt-6 border-t border-gray-100 flex items-center justify-start space-x-6">
<button className="text-xs font-semibold text-navlion-blue" id="btn-en-mob" onclick="changeLanguage('en')">🇬🇧 EN</button>
<button className="text-xs text-gray-400" id="btn-zh-mob" onclick="changeLanguage('zh')">🇨🇳 中文</button>
<button className="text-xs text-gray-400" id="btn-ru-mob" onclick="changeLanguage('ru')">🇷🇺 RU</button>
</div>
</div>
</div>
</nav>

<header className="overflow-hidden flex bg-center opacity-80 w-full h-screen bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/27368781-96fd-4698-a8b0-ddf4adf2b349_3840w.jpg)] bg-cover relative items-center justify-center">

<div className="absolute -top-[10%] left-0 w-full h-[120%] bg-cover bg-center will-change-transform" id="hero-bg" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1548685913-fe65a882d8c3?q=80&amp', zIndex: '-1', transform: 'translate3d(0px, 0px, 0px)'}}>
<div className="absolute inset-0 bg-navlion-blue/40 mix-blend-multiply"></div>
<div className="bg-gradient-to-t from-navlion-blue via-transparent to-transparent opacity-90 absolute top-0 right-0 bottom-0 left-0">
</div>
</div>
<div className="fade-up z-10 text-white text-center max-w-[1400px] mr-auto ml-auto pr-6 pl-6 relative visible">
<span className="inline-block py-1 px-3 border border-white/20 rounded-full text-[10px] uppercase tracking-widest mb-6 backdrop-blur-sm bg-white/5" data-translate="hero_badge">
            Premium Maritime Services
        </span>
<h1 className="md:text-7xl lg:text-8xl leading-tight text-5xl tracking-tight mb-8">
<span className="" data-translate="hero_title_1">Expertise in</span> <br/><span className="italic text-white/90" data-translate="hero_title_2">Motion.</span>
</h1>
<p className="md:text-xl leading-relaxed text-lg font-light text-white/80 max-w-2xl mr-auto mb-10 ml-auto" data-translate="hero_desc">
            The premier agency partner for Tunisia. Delivering comprehensive husbandry, logistics, and port solutions with absolute precision.
        </p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<a className="px-8 py-4 bg-white text-navlion-blue text-xs uppercase tracking-widest font-semibold hover:bg-navlion-gold hover:text-white transition-colors duration-300" data-translate="hero_cta_1" href="#services">
                Explore Services
            </a>
<a className="px-8 py-4 border border-white/30 text-white text-xs uppercase tracking-widest font-semibold hover:bg-white/10 transition-colors duration-300" data-translate="hero_cta_2" href="#contact">
                Contact Us
            </a>
</div>
</div>
</header>

<section className="bg-navlion-blue text-white relative z-20 border-b border-white/10">
<div className="max-w-[1400px] mx-auto px-6 py-10">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 md:divide-x divide-white/20 fade-up">

<div className="flex flex-col items-center justify-center px-4">
<h3 className="text-base font-semibold tracking-wide mb-3" data-translate="qc_projects">Projects</h3>
<a className="flex items-center text-sm text-white/70 hover:text-white hover:underline transition-all duration-200 mb-2" href="mailto:projects@navlion.tn">
<svg className="mr-2.5 opacity-90" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="2" width="20" x="2" y="4"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                        projects@navlion.tn
                    </a>
<a className="flex items-center text-sm text-white/70 hover:text-white hover:underline transition-all duration-200" href="tel:+21671000000">
<svg className="mr-2.5 opacity-90" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                        +216 71 000 000
                    </a>
</div>

<div className="flex flex-col items-center justify-center px-4">
<h3 className="text-base font-semibold tracking-wide mb-3" data-translate="qc_operations">Operations</h3>
<a className="flex items-center text-sm text-white/70 hover:text-white hover:underline transition-all duration-200 mb-2" href="mailto:operations@navlion.tn">
<svg className="mr-2.5 opacity-90" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="2" width="20" x="2" y="4"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                        operations@navlion.tn
                    </a>
<a className="flex items-center text-sm text-white/70 hover:text-white hover:underline transition-all duration-200" href="tel:+21671000000">
<svg className="mr-2.5 opacity-90" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                        +216 71 000 000
                    </a>
</div>

<div className="flex flex-col items-center justify-center px-4">
<h3 className="text-base font-semibold tracking-wide mb-3" data-translate="qc_chartering">Chartering</h3>
<a className="flex items-center text-sm text-white/70 hover:text-white hover:underline transition-all duration-200 mb-2" href="mailto:chartering@navlion.tn">
<svg className="mr-2.5 opacity-90" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="2" width="20" x="2" y="4"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                        chartering@navlion.tn
                    </a>
<a className="flex items-center text-sm text-white/70 hover:text-white hover:underline transition-all duration-200" href="tel:+21671000000">
<svg className="mr-2.5 opacity-90" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                        +216 71 000 000
                    </a>
</div>
</div>
</div>
</section>

<section className="relative bg-surface" id="services">
<div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 min-h-screen">

<aside className="hidden sticky h-[calc(100vh-5rem)] overflow-y-auto hide-scrollbar lg:block lg:col-span-3 border-gray-100 border-r pt-12 pr-8 pb-12 pl-4 top-20">
<span className="text-xs font-semibold text-gray-400 uppercase tracking-widest block mb-8" data-translate="sidebar_title">Our Capabilities</span>
<nav className="space-y-6">
<a className="group flex items-center justify-between text-sm hover:text-navlion-gold transition-colors active-link" href="#agency">
<span data-translate="menu_port_agency">Port Agency</span>
<svg className="opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 duration-300 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</a>
<a className="group flex items-center justify-between text-sm text-gray-500 hover:text-navlion-gold transition-colors" href="#husbandry">
<span data-translate="menu_husbandry">Husbandry Services</span>
<svg className="opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 duration-300 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</a>
<a className="group flex items-center justify-between text-sm text-gray-500 hover:text-navlion-gold transition-colors" href="#chartering">
<span data-translate="menu_chartering">Chartering &amp; Brokerage</span>
<svg className="opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 duration-300 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</a>
<a className="group flex items-center justify-between text-sm text-gray-500 hover:text-navlion-gold transition-colors" href="#logistics">
<span data-translate="menu_logistics">Project Logistics</span>
<svg className="opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 duration-300 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</a>
</nav>
</aside>

<div className="col-span-1 lg:col-span-9">

<div className="border-b border-gray-100 py-16 lg:py-24 px-6 lg:pl-16 group" id="agency">
<div className="lg:hidden mb-6">
<h2 className="text-xs text-navlion-gold uppercase tracking-widest font-semibold mb-2">01</h2>
<h3 className="text-navlion-blue text-3xl font-serif" data-translate="menu_port_agency">Port Agency</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start fade-up">
<div className="">
<div className="hidden lg:block w-12 h-12 mb-8 text-navlion-blue">
<svg fill="none" height="48" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg"><path d="M2 22h20"></path><path d="M22 6h-2a3 3 0 0 0-3-3H7a3 3 0 0 0-3 3H2"></path><path d="M10 22v-8h4v8"></path><rect height="4" width="8" x="8" y="6"></rect></svg>
</div>
<h3 className="hidden lg:block font-serif text-4xl text-navlion-blue mb-6 tracking-tight" data-translate="menu_port_agency">Port Agency</h3>
<p className="text-gray-500 leading-relaxed mb-6" data-translate="srv_agency_desc">
                                We act as your eyes and ears on the ground. From pre-arrival planning to departure, we handle all formalities with customs and port authorities to ensure a quick turnaround.
                            </p>
<ul className="space-y-3 mb-8">
<li className="flex items-center text-sm text-gray-600">
<span className="w-1.5 h-1.5 bg-navlion-gold rounded-full mr-3"></span>
<span data-translate="srv_agency_feat1">Full customs clearance</span>
</li>
<li className="flex items-center text-sm text-gray-600">
<span className="w-1.5 h-1.5 bg-navlion-gold rounded-full mr-3"></span>
<span data-translate="srv_agency_feat2">PDA / FDA Management</span>
</li>
</ul>
<a className="inline-flex items-center text-xs uppercase tracking-widest font-semibold text-navlion-blue hover:text-navlion-gold transition-colors" href="#">
<span data-translate="btn_request_pda">Request PDA</span> <span className="ml-2">→</span>
</a>
</div>
<div className="relative h-[300px] md:h-[400px] w-full overflow-hidden bg-gray-100 rounded-sm">
<img alt="Container Ship" className="transition-transform duration-700 hover:scale-105 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/54270d28-6936-40e3-8aa7-026994076b3d_1600w.jpg"/>
</div>
</div>
</div>

<div className="border-b border-gray-100 py-16 lg:py-24 px-6 lg:pl-16" id="husbandry">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start fade-up">
<div className="order-2 md:order-1 relative h-[300px] md:h-[400px] w-full overflow-hidden bg-gray-100 rounded-sm">
<img alt="Crew Transfer" className="transition-transform duration-700 hover:scale-105 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a77f810b-d18d-4bd9-82c0-a26426fb68ea_1600w.jpg"/>
</div>
<div className="order-1 md:order-2">
<div className="w-12 h-12 mb-8 text-navlion-blue">
<svg fill="none" height="48" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 6v6l4 2"></path></svg>
</div>
<h3 className="font-serif text-3xl md:text-4xl text-navlion-blue mb-6 tracking-tight" data-translate="menu_husbandry">Husbandry Services</h3>
<p className="text-gray-500 leading-relaxed mb-6" data-translate="srv_husbandry_desc">
                                Beyond the cargo, we care for the vessel and crew. We coordinate efficient crew changes, cash to master, spares delivery, and medical assistance across all Tunisian ports.
                            </p>
<a className="inline-flex items-center text-xs uppercase tracking-widest font-semibold text-navlion-blue hover:text-navlion-gold transition-colors" href="#">
<span data-translate="btn_contact_desk">Contact Husbandry Desk</span> <span className="ml-2">→</span>
</a>
</div>
</div>
</div>

<div className="border-b border-gray-100 py-16 lg:py-24 px-6 lg:pl-16" id="chartering">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start fade-up">
<div className="">
<div className="w-12 h-12 mb-8 text-navlion-blue">
<svg fill="none" height="48" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg"><path d="M3 6h18"></path><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
</div>
<h3 className="font-serif text-3xl md:text-4xl text-navlion-blue mb-6 tracking-tight" data-translate="menu_chartering">Chartering &amp; Shipbrokers</h3>
<p className="text-gray-500 leading-relaxed mb-6" data-translate="srv_chartering_desc">
                                Dry bulk cargo specialists. Our extensive network allows us to fix vessels and cargoes at competitive rates. We act as exclusive brokers for major Tunisian exporters.
                            </p>
<a className="inline-flex items-center text-xs uppercase tracking-widest font-semibold text-navlion-blue hover:text-navlion-gold transition-colors" href="#">
<span data-translate="btn_view_positions">View Open Positions</span> <span className="ml-2">→</span>
</a>
</div>
<div className="relative h-[300px] md:h-[400px] w-full overflow-hidden bg-gray-100 rounded-sm">
<img alt="Bulk Carrier" className="transition-transform duration-700 hover:scale-105 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bbc3d841-45e5-4b8d-929d-49db232a0e06_1600w.jpg"/>
</div>
</div>
</div>

<div className="py-16 lg:py-24 px-6 lg:pl-16" id="logistics">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start fade-up">
<div className="order-2 md:order-1 relative h-[300px] md:h-[400px] w-full overflow-hidden bg-gray-100 rounded-sm">
<img alt="Logistics" className="transition-transform duration-700 hover:scale-105 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4a5000a6-c5b0-4fd6-b180-159815288b59_1600w.jpg"/>
</div>
<div className="order-1 md:order-2">
<div className="w-12 h-12 mb-8 text-navlion-blue">
<svg fill="none" height="48" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
</div>
<h3 className="font-serif text-3xl md:text-4xl text-navlion-blue mb-6 tracking-tight" data-translate="menu_logistics">Project Logistics</h3>
<p className="text-gray-500 leading-relaxed mb-6" data-translate="srv_logistics_desc">
                                End-to-end management for oversized and heavy-lift cargo. We coordinate road surveys, permits, and special transport from ship to site.
                            </p>
<a className="inline-flex items-center text-xs uppercase tracking-widest font-semibold text-navlion-blue hover:text-navlion-gold transition-colors" href="#">
<span data-translate="btn_get_quote">Get a Quote</span> <span className="ml-2">→</span>
</a>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-navlion-blue text-white py-24 relative overflow-hidden" id="ports">

<div className="absolute top-0 right-0 opacity-10 pointer-events-none">
<svg height="600" viewbox="0 0 600 600" width="600"><circle cx="300" cy="300" fill="white" r="300"></circle></svg>
</div>
<div className="max-w-[1400px] mx-auto px-6 mb-12 flex flex-col md:flex-row md:items-end justify-between fade-up">
<div className="max-w-xl">
<span className="text-navlion-gold text-xs uppercase tracking-widest font-semibold block mb-4" data-translate="ports_badge">Coverage</span>
<h2 className="font-serif text-4xl md:text-5xl tracking-tight mb-4" data-translate="ports_title">Strategic Ports of Tunisia</h2>
<p className="text-white/60 text-sm md:text-base leading-relaxed" data-translate="ports_desc">
                    Operating in all 8 commercial ports with local branch offices.
                </p>
</div>
<div className="mt-8 md:mt-0">
<button className="border border-white/20 px-6 py-3 text-xs uppercase tracking-widest hover:bg-white hover:text-navlion-blue transition-colors duration-300" data-translate="btn_view_map" id="toggle-map">
                    View Map
                </button>
</div>
</div>

<div className="max-w-[1400px] mx-auto px-6 mb-16 h-[500px] relative fade-up delay-100">
<div className="w-full h-full bg-slate-800 rounded-sm overflow-hidden relative z-10 border border-white/10 shadow-2xl">
<div className="leaflet-container leaflet-touch leaflet-retina leaflet-fade-anim leaflet-grab leaflet-touch-drag leaflet-touch-zoom" id="map" style={{position: 'relative'}} tabindex="0"></div>
</div>
<div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur text-gray-800 p-4 rounded-sm shadow-lg z-[500] max-w-xs">
<h5 className="font-serif text-navlion-blue mb-2" data-translate="map_status_title">Network Status</h5>
<div className="flex items-center text-xs mb-1"><span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span> <span data-translate="map_status_val">Operational</span></div>
</div>
</div>

<div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="group relative h-[400px] cursor-pointer overflow-hidden rounded-sm fade-up">
<img alt="Rades" className="transition-transform duration-700 group-hover:scale-110 group-hover:grayscale-0 w-full h-full object-cover grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/211e10a3-e8cc-4bb7-ab2b-1c0225326ac4_800w.jpg"/>
<div className="transition-opacity duration-300 bg-gradient-to-t from-navlion-blue/90 via-navlion-blue/20 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-0 left-0 p-8 w-full transform transition-transform duration-500 group-hover:-translate-y-2">
<span className="text-navlion-gold uppercase block group-hover:opacity-100 transition-opacity duration-500 delay-100 text-xs tracking-widest opacity-0 mb-2" data-translate="port_1_type">Main Terminal</span>
<h3 className="font-serif text-3xl text-white mb-2 tracking-tight">Radès</h3>
<div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-500">
<p className="text-white/80 text-xs leading-relaxed mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200" data-translate="port_1_desc">
                            Tunisia's primary container port.  Max Draft: 9.0m
                        </p>
<span className="inline-flex items-center text-white text-xs border-b border-white pb-1" data-translate="btn_details">Details →</span>
</div>
</div>
</div>

<div className="group relative h-[400px] cursor-pointer overflow-hidden rounded-sm fade-up delay-75">
<img alt="Bizerte" className="transition-transform duration-700 group-hover:scale-110 group-hover:grayscale-0 w-full h-full object-cover grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d5928556-d414-4c4e-98aa-fd1d5b48a8f2_800w.jpg"/>
<div className="transition-opacity duration-300 bg-gradient-to-t from-navlion-blue/90 via-navlion-blue/20 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-0 left-0 p-8 w-full transform transition-transform duration-500 group-hover:-translate-y-2">
<span className="text-navlion-gold uppercase block group-hover:opacity-100 transition-opacity duration-500 delay-100 text-xs tracking-widest opacity-0 mb-2" data-translate="port_2_type">Oil &amp; Cement</span>
<h3 className="font-serif text-3xl text-white mb-2 tracking-tight">Bizerte</h3>
<div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-500">
<p className="text-white/80 text-xs leading-relaxed mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200" data-translate="port_2_desc">
                             Max Draft: 11.0m | Dry Dock
                        </p>
<span className="inline-flex items-center text-white text-xs border-b border-white pb-1" data-translate="btn_details">Details →</span>
</div>
</div>
</div>

<div className="group relative h-[400px] cursor-pointer overflow-hidden rounded-sm fade-up delay-150">
<img alt="Sfax" className="transition-transform duration-700 group-hover:scale-110 group-hover:grayscale-0 w-full h-full object-cover grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4054efd0-edba-4b3c-b7f1-2479c41fef80_800w.jpg"/>
<div className="transition-opacity duration-300 bg-gradient-to-t from-navlion-blue/90 via-navlion-blue/20 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="transform transition-transform duration-500 group-hover:-translate-y-2 w-full pt-8 pr-8 pb-8 pl-8 absolute bottom-0 left-0">
<span className="text-navlion-gold text-xs uppercase tracking-widest block mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100" data-translate="port_3_type">General Cargo</span>
<h3 className="font-serif text-3xl text-white mb-2 tracking-tight">Sfax</h3>
<div className="group-hover:h-auto overflow-hidden transition-all duration-500 h-0">
<p className="text-white/80 text-xs leading-relaxed mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200" data-translate="port_3_desc">
                             Max Draft: 10.5m | Grain Silos
                        </p>
<span className="inline-flex items-center text-white text-xs border-b border-white pb-1" data-translate="btn_details">Details →</span>
</div>
</div>
</div>

<div className="group relative h-[400px] cursor-pointer overflow-hidden rounded-sm fade-up delay-200">
<img alt="Gabes" className="transition-transform duration-700 group-hover:scale-110 group-hover:grayscale-0 w-full h-full object-cover grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/10d5a0a9-6820-4b24-b9f7-bf5eedcf76ea_800w.jpg"/>
<div className="transition-opacity duration-300 bg-gradient-to-t from-navlion-blue/90 via-navlion-blue/20 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="transform transition-transform duration-500 group-hover:-translate-y-2 w-full pt-8 pr-8 pb-8 pl-8 absolute bottom-0 left-0">
<span className="text-navlion-gold text-xs uppercase tracking-widest block mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100" data-translate="port_4_type">Chemical &amp; Bulk</span>
<h3 className="font-serif text-3xl text-white mb-2 tracking-tight">Gabès</h3>
<div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-500">
<p className="text-white/80 text-xs leading-relaxed mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200" data-translate="port_4_desc">
                             Max Draft: 12.5m | Chemical Terminals
                        </p>
<span className="inline-flex items-center text-white text-xs border-b border-white pb-1" data-translate="btn_details">Details →</span>
</div>
</div>
</div>
</div>
</section>

<section className="border-gray-100 border-t pt-24 pb-24" id="contact">
<div className="max-w-4xl mx-auto px-6 text-center fade-up">
<h2 className="font-serif text-4xl text-navlion-blue mb-6 tracking-tight" data-translate="contact_title">Ready to work together?</h2>
<p className="text-gray-500 mb-10" data-translate="contact_desc">Reach out for a Proforma D/A or operational inquiries.</p>
<div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
<a className="px-8 py-4 bg-navlion-blue text-white text-xs uppercase tracking-widest font-semibold hover:bg-navlion-gold transition-colors duration-300 w-full sm:w-auto" data-translate="btn_email" href="mailto:agency@navlion.tn">
                    Email Agency
                </a>
</div>
</div>
</section>

<footer className="bg-navlion-blue text-white py-16 border-t border-white/10">
<div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div>
<a className="font-serif text-2xl tracking-tighter text-white font-semibold block mb-6" href="#">NAVLION</a>
<p className="text-white/50 text-xs leading-relaxed max-w-xs mb-6" data-translate="footer_desc">
                    Setting the standard for maritime agency in Tunisia. Trusted by global principals for transparency, efficiency, and local expertise.
                </p>
<div className="flex space-x-4">
<a className="text-white/50 hover:text-white transition-colors" href="#">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
<a className="text-white/50 hover:text-white transition-colors" href="#">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
</div>
</div>

<div>
<h4 className="text-white text-xs uppercase tracking-widest font-semibold mb-6" data-translate="footer_links">Quick Links</h4>
<ul className="space-y-3">
<li><a className="text-white/50 hover:text-white text-xs transition-colors" data-translate="footer_about" href="#">About Us</a></li>
<li><a className="text-white/50 hover:text-white text-xs transition-colors" data-translate="nav_ports" href="#ports">Ports</a></li>
<li><a className="text-white/50 hover:text-white text-xs transition-colors" data-translate="nav_ports" href="useful-links.html">Usueful links</a></li>
</ul>
</div>

<div>
<h4 className="text-white text-xs uppercase tracking-widest font-semibold mb-6" data-translate="nav_services">Services</h4>
<ul className="space-y-3">
<li><a className="text-white/50 hover:text-white text-xs transition-colors" data-translate="menu_port_agency" href="#agency">Port Agency</a></li>
<li><a className="text-white/50 hover:text-white text-xs transition-colors" data-translate="menu_husbandry" href="#husbandry">Husbandry</a></li>
</ul>
</div>

<div>
<h4 className="text-white text-xs uppercase tracking-widest font-semibold mb-6" data-translate="nav_contact">Contact</h4>
<ul className="space-y-4">
<li className="flex items-start text-white/50 text-xs">
<svg className="w-4 h-4 mr-3 mt-0.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeLinecap="round" strokeLinejoin="round"></path><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round"></path></svg>
<span>Zone Portuaire de Rades,Tunis 2040, Tunisia</span>
</li>
<li className="flex items-center text-white/50 text-xs">
<svg className="w-4 h-4 mr-3 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" strokeLinecap="round" strokeLinejoin="round"></path></svg>
<span>+216 71 000 000</span>
</li>
</ul>
</div>
</div>
<div className="max-w-[1400px] mx-auto px-6 border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-white/30">
<p>© 2026 NAVLION Maritime Services. All rights reserved.</p>
<div className="flex space-x-6 mt-4 md:mt-0">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
<a className="hover:text-white transition-colors" href="#">Sitemap</a>
</div>
</div>
</footer>




    </>
  );
}
