import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
display: ['Plus Jakarta Sans', 'sans-serif'],
}
}
}
}



        // --- TRANSLATION LOGIC ---
        const translations = {
            en: {
                nav_platform: "Platform",
                nav_agents: "AI Agents",
                nav_work: "Work",
                nav_articles: "Articles",
                nav_login: "Log in",
                nav_contact: "Contact Now",
                hero_badge: "100+ Systems Deployed",
                hero_title_1: "Intelligent",
                hero_title_2: "Automations",
                hero_title_3: "that scale revenue.",
                hero_desc: "We fuse high-conversion design with AI Chatbot Agents and social automations. Stop chasing leads—let your digital ecosystem generate them 24/7.",
                hero_cta: "Start Transformation",
                hero_trust: "Trusted by next-gen brands.",
                card1_title: "Multi-Channel Conversion Flow",
                card2_title: "Generative Content Engine",
                stats_desc: "Active AI Agents handling customer inquiries daily.",
                services_title: 'At our agency, we don\'t do templates. Every project <span class="text-zinc-400">starts from data and ends with impact.</span>',
                services_desc: "Strategically combining website design, AI agents, and social automations tailored to your brand.",
                service_mockup_text: "Conversion +230%",
                acc_1_title: "Strategic AI Integration",
                acc_1_desc: "We don't just build websites; we build engines. We integrate custom Chatbot Assistants that capture leads, answer queries, and book appointments 24/7 directly on your site.",
                acc_2_title: "Social Automation Loops",
                acc_2_desc: "Strategic content design paired with DM automation. When a user comments 'GROWTH' on your post, our system instantly engages, qualifies, and converts them.",
                acc_3_title: "Audioreactive Content",
                acc_3_desc: "Stop the scroll with generative audiovisuals. We create brand-specific, audioreactive visuals that synchronize with trending audio to maximize retention.",
                acc_4_title: "Conversion-First Web Design",
                acc_4_desc: "Aesthetics meet analytics. We design interfaces that guide user behavior, optimized for speed, SEO, and maximizing the lifetime value of every visitor.",
                work_title: "Selected<br>Work",
                work_subtitle: "PROJECT ARCHIVE",
                proj_1_cat: "AI FASHION GROWTH",
                view_case: "View Case Study",
                proj_1_desc: "A full-funnel marketing strategy boosted by a custom AI styling assistant.",
                proj_2_cat: "SAAS AUTOMATION",
                proj_2_desc: "Product launch campaign integrated with automated webinar funnels.",
                testimonial_trust: "Trusted by 100+ business",
                testimonial_quote: '"Our sales skyrocketed within months. Their data-driven approach, creativity, and clear communication exceeded expectations. The AI chatbot alone handles 40% of our workload."',
                stats_box_title: "Success Stories",
                stats_box_desc: "Real results from real automations.",
                stat_1: "Successful Campaigns",
                stat_2: "Long-term Partners",
                footer_cta: "Let's automate<br>your growth.",
                footer_btn: "Book a Free Strategy Call",
                ft_home: "Home",
                ft_about: "About Us",
                ft_services: "Services",
                ft_work: "Work",
                ft_privacy: "Privacy Policy",
                ft_terms: "Terms of Service"
            },
            es: {
                nav_platform: "Plataforma",
                nav_agents: "Agentes IA",
                nav_work: "Proyectos",
                nav_articles: "Artículos",
                nav_login: "Entrar",
                nav_contact: "Contactar",
                hero_badge: "100+ Sistemas Desplegados",
                hero_title_1: "Automatización",
                hero_title_2: "Inteligente",
                hero_title_3: "que escala ingresos.",
                hero_desc: "Fusionamos diseño de alta conversión con Agentes de IA y automatización social. Deja de perseguir leads—deja que tu ecosistema digital los genere 24/7.",
                hero_cta: "Iniciar Transformación",
                hero_trust: "Confianza de marcas next-gen.",
                card1_title: "Flujo de Conversión Multicanal",
                card2_title: "Motor de Contenido Generativo",
                stats_desc: "Agentes IA activos gestionando consultas diariamente.",
                services_title: 'En nuestra agencia, no usamos plantillas. Cada proyecto <span class="text-zinc-400">comienza con datos y termina con impacto.</span>',
                services_desc: "Combinamos estratégicamente diseño web, agentes de IA y automatizaciones sociales a medida para tu marca.",
                service_mockup_text: "Conversión +230%",
                acc_1_title: "Integración Estratégica de IA",
                acc_1_desc: "No solo construimos sitios web; construimos motores. Integramos Asistentes Chatbot personalizados que capturan leads, responden consultas y reservan citas 24/7.",
                acc_2_title: "Bucles de Automatización Social",
                acc_2_desc: "Diseño de contenido estratégico emparejado con automatización de DMs. Cuando un usuario comenta 'CRECIMIENTO', nuestro sistema interactúa, califica y convierte al instante.",
                acc_3_title: "Contenido Audioreactivo",
                acc_3_desc: "Detén el scroll con visuales generativos. Creamos visuales audioreactivos específicos de la marca que se sincronizan con audios en tendencia para maximizar la retención.",
                acc_4_title: "Diseño Web de Conversión",
                acc_4_desc: "Estética y análisis unidos. Diseñamos interfaces que guían el comportamiento del usuario, optimizadas para velocidad, SEO y maximizar el valor de vida de cada visitante.",
                work_title: "Trabajos<br>Seleccionados",
                work_subtitle: "ARCHIVO DE PROYECTOS",
                proj_1_cat: "CRECIMIENTO IA MODA",
                view_case: "Ver Caso de Estudio",
                proj_1_desc: "Estrategia de marketing full-funnel impulsada por un asistente de estilismo con IA.",
                proj_2_cat: "AUTOMATIZACIÓN SAAS",
                proj_2_desc: "Campaña de lanzamiento de producto integrada con embudos de webinar automatizados.",
                testimonial_trust: "Confianza de 100+ empresas",
                testimonial_quote: '"Nuestras ventas se dispararon en meses. Su enfoque basado en datos, creatividad y comunicación clara superaron las expectativas. El chatbot de IA maneja el 40% de nuestra carga de trabajo."',
                stats_box_title: "Casos de Éxito",
                stats_box_desc: "Resultados reales de automatizaciones reales.",
                stat_1: "Campañas Exitosas",
                stat_2: "Partners a largo plazo",
                footer_cta: "Automaticemos<br>tu crecimiento.",
                footer_btn: "Agendar Llamada Estratégica",
                ft_home: "Inicio",
                ft_about: "Sobre Nosotros",
                ft_services: "Servicios",
                ft_work: "Trabajos",
                ft_privacy: "Política de Privacidad",
                ft_terms: "Términos de Servicio"
            }
        };

        let currentLang = 'es';

        function toggleLanguage() {
            currentLang = currentLang === 'es' ? 'en' : 'es';
            document.getElementById('lang-indicator').innerText = currentLang.toUpperCase();
            document.documentElement.lang = currentLang;
            
            const elements = document.querySelectorAll('[data-i18n]');
            elements.forEach(el => {
                const key = el.getAttribute('data-i18n');
                if (translations[currentLang][key]) {
                    el.innerHTML = translations[currentLang][key];
                }
            });
        }

        // --- THEME LOGIC ---
        function toggleTheme() {
            document.documentElement.classList.toggle('dark');
        }

        // --- STARS & METEOR GENERATOR ---
        function createStars() {
            const container = document.getElementById('star-field');
            const starCount = 50;
            const meteorCount = 8;
            
            // Create static twinkling stars
            for(let i=0; i<starCount; i++) {
                const star = document.createElement('div');
                star.classList.add('star');
                star.style.left = Math.random() * 100 + '%';
                star.style.top = Math.random() * 100 + '%';
                star.style.width = (Math.random() * 2 + 1) + 'px';
                star.style.height = star.style.width;
                star.style.setProperty('--duration', (Math.random() * 3 + 2) + 's');
                container.appendChild(star);
            }

            // Create falling meteors
            for(let i=0; i<meteorCount; i++) {
                const meteor = document.createElement('div');
                meteor.classList.add('meteor');
                meteor.style.left = (Math.random() * 100) + '%';
                meteor.style.top = (Math.random() * 50) + '%'; // Start from upper half
                meteor.style.animationDuration = (Math.random() * 2 + 3) + 's';
                meteor.style.animationDelay = (Math.random() * 10) + 's';
                container.appendChild(meteor);
            }
        }
        createStars();

        // --- CAROUSEL LOGIC ---
        let currentSlide = 1;
        const totalSlides = 2;
        let slideInterval;

        function showSlide(slideNum) {
            currentSlide = slideNum;
            const slide1 = document.getElementById('slide-1');
            const slide2 = document.getElementById('slide-2');
            const dot1 = document.getElementById('dot-1');
            const dot2 = document.getElementById('dot-2');
            
            // Reset opacity
            slide1.style.opacity = '0';
            slide2.style.opacity = '0';
            slide1.style.pointerEvents = 'none';
            slide2.style.pointerEvents = 'none';

            // Reset dots
            dot1.classList.remove('bg-zinc-800', 'dark:bg-white', 'scale-125');
            dot1.classList.add('bg-zinc-300', 'dark:bg-zinc-600');
            dot2.classList.remove('bg-zinc-800', 'dark:bg-white', 'scale-125');
            dot2.classList.add('bg-zinc-300', 'dark:bg-zinc-600');

            if(slideNum === 1) {
                slide1.style.opacity = '1';
                slide1.style.pointerEvents = 'auto';
                dot1.classList.remove('bg-zinc-300', 'dark:bg-zinc-600');
                dot1.classList.add('bg-zinc-800', 'dark:bg-white', 'scale-125');
            } else {
                slide2.style.opacity = '1';
                slide2.style.pointerEvents = 'auto';
                dot2.classList.remove('bg-zinc-300', 'dark:bg-zinc-600');
                dot2.classList.add('bg-zinc-800', 'dark:bg-white', 'scale-125');
            }
        }

        function nextSlide() {
            let next = currentSlide + 1;
            if (next > totalSlides) next = 1;
            showSlide(next);
        }

        // Initialize Carousel
        showSlide(1);
        slideInterval = setInterval(nextSlide, 8000); // Change every 8 seconds

        // Pause on hover
        const carousel = document.querySelector('.relative.h-\\[500px\\]');
        if(carousel) {
            carousel.addEventListener('mouseenter', () => clearInterval(slideInterval));
            carousel.addEventListener('mouseleave', () => slideInterval = setInterval(nextSlide, 8000));
        }

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<svg style={{position: 'absolute', width: '0', height: '0'}}>
<filter id="goo">
<fegaussianblur in="SourceGraphic" result="blur" stddeviation="10"></fegaussianblur>
<fecolormatrix in="blur" mode="matrix" result="goo" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"></fecolormatrix>
<fecomposite in="SourceGraphic" in2="goo" operator="atop"></fecomposite>
</filter>
</svg>

<div className="star-field" id="star-field">

<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-zinc-50/80 dark:to-zinc-950/80 z-10 transition-colors duration-300"></div>
</div>

<nav className="fixed top-0 w-full z-50 bg-white/70 dark:bg-zinc-950/70 backdrop-blur-md border-b border-zinc-200 dark:border-white/5 supports-[backdrop-filter]:bg-white/60 transition-colors duration-300">
<div className="max-w-[1440px] mx-auto px-6 py-5 flex justify-between items-center">

<a className="text-xl tracking-tight font-semibold flex items-center gap-2 group text-zinc-900 dark:text-white transition-colors" href="#">
<div className="w-5 h-5 bg-zinc-900 dark:bg-white rounded-full group-hover:scale-110 transition-transform duration-300"></div>
                Evolve AI
                <div className="word-cycler text-zinc-500 dark:text-zinc-400 font-normal">
<span>Studios</span>
<span>Systems</span>
</div>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-600 dark:text-zinc-400">
<a className="hover:text-black dark:hover:text-white transition-colors" data-i18n="nav_platform" href="#">Plataforma</a>
<a className="hover:text-black dark:hover:text-white transition-colors" data-i18n="nav_agents" href="#">Agentes IA</a>
<a className="hover:text-black dark:hover:text-white transition-colors" data-i18n="nav_work" href="#">Proyectos</a>
<a className="hover:text-black dark:hover:text-white transition-colors" data-i18n="nav_articles" href="#">Artículos</a>
</div>
<div className="flex items-center gap-4">

<button aria-label="Toggle Theme" className="p-2 text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white transition-colors rounded-full hover:bg-zinc-100 dark:hover:bg-white/10" onclick="toggleTheme()">
<iconify-icon className="hidden dark:block text-lg" icon="solar:sun-fog-linear"></iconify-icon>
<iconify-icon className="block dark:hidden text-lg" icon="solar:moon-linear"></iconify-icon>
</button>

<button className="text-xs font-mono border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 px-2 py-1 rounded hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors" onclick="toggleLanguage()">
<span id="lang-indicator">ES</span>
</button>
<a className="hidden md:block text-sm font-medium text-zinc-600 dark:text-zinc-300 hover:text-orange-600 dark:hover:text-orange-400 transition-colors" data-i18n="nav_login" href="#">Entrar</a>
<button className="flex items-center gap-2 text-sm font-medium bg-zinc-900 dark:bg-white text-white dark:text-zinc-950 px-5 py-2.5 rounded-full hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all hover:pr-6 group shadow-lg shadow-zinc-200 dark:shadow-none">
<span data-i18n="nav_contact">Contactar</span>
<iconify-icon className="text-lg transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</nav>

<section className="md:pt-40 md:pb-24 grid lg:grid-cols-2 lg:gap-20 max-w-[1440px] z-10 mr-auto ml-auto pt-32 pr-6 pb-16 pl-6 relative gap-x-12 gap-y-12 items-center">
<div className="max-w-2xl reveal-up">
<div className="flex gap-2 mb-8 items-center">
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-zinc-200 dark:border-white/10 bg-white/50 dark:bg-white/5 text-xs font-medium text-zinc-600 dark:text-zinc-300 backdrop-blur-sm shadow-sm dark:shadow-none transition-colors">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
</span>
<span data-i18n="hero_badge">100+ Sistemas Desplegados</span>
</span>
</div>
<h1 className="md:text-7xl lg:text-[5rem] leading-[0.95] text-balance dark:text-white text-5xl font-medium text-zinc-900 tracking-tight mb-8 transition-colors">
<span className="" data-i18n="hero_title_1">Automatización</span> <br/>
<span className="text-gradient" data-i18n="hero_title_2">Inteligente</span> <br/>
<span data-i18n="hero_title_3">que escala ingresos.</span>
</h1>
<p className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-lg mb-10 font-light text-balance transition-colors" data-i18n="hero_desc">
                Fusionamos diseño de alta conversión con Agentes de IA y automatización social. Deja de perseguir leads—deja que tu ecosistema digital los genere 24/7.
            </p>
<div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
<button className="flex items-center gap-3 bg-zinc-900 dark:bg-white text-white dark:text-zinc-950 pl-8 pr-2 py-2 rounded-full text-lg font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all group w-full sm:w-auto justify-between sm:justify-start shadow-xl shadow-zinc-200 dark:shadow-zinc-900/50">
<span data-i18n="hero_cta">Iniciar Transformación</span>
<span className="bg-white dark:bg-black text-black dark:text-white rounded-full p-2 group-hover:rotate-45 transition-transform duration-300 flex items-center justify-center">
<iconify-icon className="text-xl" icon="solar:arrow-right-up-linear"></iconify-icon>
</span>
</button>
<p className="text-sm text-zinc-500 dark:text-zinc-500 px-4 transition-colors" data-i18n="hero_trust">Confianza de marcas next-gen.</p>
</div>
</div>

<div className="md:h-[600px] overflow-hidden reveal-up delay-200 dark:border-white/10 dark:bg-zinc-900/40 dark:shadow-black/50 bg-white/50 w-full h-[500px] border-zinc-200 border rounded-2xl relative shadow-2xl backdrop-blur-md transition-all duration-300">

<div className="slide absolute inset-0 transition-opacity duration-700 ease-in-out opacity-100 flex flex-col items-center justify-center p-8" id="slide-1" style={{opacity: '1', pointerEvents: 'auto'}}>

<div className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none transition-opacity" style={{backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)', backgroundSize: '20px 20px', color: 'inherit'}}></div>

<div className="relative z-10 w-full max-w-md h-full flex flex-col justify-between py-8">

<div className="flex justify-center gap-8 md:gap-12">
<div className="flex flex-col items-center gap-2 animate-bounce" style={{animationDuration: '3s'}}>
<div className="w-12 h-12 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 flex items-center justify-center text-white shadow-lg shadow-purple-500/20">
<iconify-icon className="text-2xl" icon="solar:instagram-linear"></iconify-icon>
</div>
<span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 dark:text-zinc-400">IG</span>
</div>
<div className="flex flex-col items-center gap-2 animate-bounce" style={{animationDuration: '3.5s', animationDelay: '0.2s'}}>
<div className="w-12 h-12 rounded-full bg-black dark:bg-white dark:text-black text-white flex items-center justify-center shadow-lg shadow-zinc-500/20 transition-colors">
<iconify-icon className="text-xl" icon="simple-icons:tiktok"></iconify-icon>
</div>
<span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 dark:text-zinc-400">TT</span>
</div>
<div className="flex flex-col items-center gap-2 animate-bounce" style={{animationDuration: '3.2s', animationDelay: '0.1s'}}>
<div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
<iconify-icon className="text-2xl" icon="solar:linkedin-linear"></iconify-icon>
</div>
<span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 dark:text-zinc-400">IN</span>
</div>
</div>

<div className="flex-1 w-full relative my-4">
<svg className="text-zinc-300 dark:text-zinc-700 absolute top-0 right-0 bottom-0 left-0 w-full h-full transition-colors" preserveaspectratio="none">
<path className="flow-line" d="M80,0 C80,50 220,50 220,100" fill="none" stroke="currentColor" strokeWidth="2" style={{animationDuration: '1.5s'}}></path>
<path className="flow-line" d="M220,0 C220,50 220,50 220,100" fill="none" stroke="currentColor" strokeWidth="2" style={{animationDuration: '1.2s'}}></path>
<path className="flow-line" d="M360,0 C360,50 220,50 220,100" fill="none" stroke="currentColor" strokeWidth="2" style={{animationDuration: '1.8s'}}></path>
</svg>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-orange-500 text-white text-[10px] px-2 py-0.5 rounded-full shadow-lg shadow-orange-500/50 font-medium animate-pulse">
                            LEAD
                        </div>
</div>

<div className="relative flex items-end justify-center gap-4 h-40 w-full">

<div className="relative w-64 h-40 group hover:scale-105 transition-transform duration-500">

<div className="absolute top-4 left-1/2 -translate-x-1/2 w-56 h-36 bg-zinc-800 rounded-t-xl border-t border-x border-zinc-700 overflow-hidden shadow-xl">
<div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-4 bg-zinc-900 rounded-b-lg z-20"></div> 

<div className="w-full h-full bg-zinc-900 p-4 pt-8 flex flex-col gap-2 opacity-90">
<div className="w-full h-24 bg-zinc-800 rounded flex items-center justify-center">
<div className="w-8 h-8 rounded-full bg-orange-500 animate-ping opacity-20 absolute"></div>
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center text-white text-xs font-bold">AI</div>
</div>
<div className="w-full h-2 bg-zinc-800 rounded-full animate-pulse"></div>
<div className="w-2/3 h-2 bg-zinc-800 rounded-full animate-pulse delay-100"></div>
</div>
</div>

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-3 bg-zinc-300 dark:bg-zinc-700 rounded-b-lg shadow-2xl transition-colors">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-1 bg-zinc-400/50 rounded-b-sm"></div>
</div>
</div>

<div className="absolute bottom-0 right-4 w-16 h-32 bg-zinc-900 border-[3px] border-zinc-700 rounded-2xl shadow-xl overflow-hidden hover:scale-105 transition-transform duration-500 delay-100">

<div className="absolute top-2 left-1/2 -translate-x-1/2 w-5 h-1.5 bg-black rounded-full z-20"></div>

<div className="w-full h-full bg-zinc-800 p-2 pt-6 flex flex-col gap-1.5">
<div className="w-full aspect-square bg-zinc-700 rounded-lg"></div>
<div className="w-full h-1 bg-zinc-700 rounded-full"></div>
<div className="w-full h-1 bg-zinc-700 rounded-full"></div>
<div className="mt-auto w-full h-6 bg-orange-600 rounded-lg flex items-center justify-center">
<iconify-icon className="text-white text-[10px]" icon="solar:cart-large-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-6 left-6 right-6">
<div className="backdrop-blur-xl bg-white/70 dark:bg-black/60 border border-zinc-200 dark:border-white/20 p-4 rounded-xl flex justify-between items-center shadow-lg dark:shadow-none transition-colors">
<div className="flex items-center gap-3">
<iconify-icon className="text-orange-500 text-xl" icon="solar:route-linear"></iconify-icon>
<span className="text-sm font-semibold tracking-tight text-zinc-900 dark:text-white transition-colors" data-i18n="card1_title">Flujo de Conversión Multicanal</span>
</div>
<div className="flex items-center gap-1.5">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
<span className="text-xs text-zinc-600 dark:text-zinc-400 font-mono transition-colors">LIVE</span>
</div>
</div>
</div>
</div>

<div className="slide absolute inset-0 transition-opacity duration-700 ease-in-out opacity-0" id="slide-2" style={{opacity: '0', pointerEvents: 'none'}}>
<div className="absolute inset-0 z-0 bg-gradient-to-b from-zinc-100 to-zinc-200 dark:from-zinc-900 dark:to-black transition-colors"></div>

<div className="fluid-container relative z-10">
<div className="fluid-blob w-48 h-48 md:w-64 md:h-64"></div>
</div>

<div className="absolute inset-0 z-20 flex flex-col items-center justify-center pointer-events-none">

<div className="w-[300px] h-[300px] border border-zinc-400/20 dark:border-white/10 rounded-full absolute animate-[spin_10s_linear_infinite] opacity-40 border-dashed transition-colors"></div>
<div className="w-[340px] h-[340px] border border-zinc-400/10 dark:border-white/5 rounded-full absolute animate-[spin_15s_linear_infinite_reverse] opacity-40 transition-colors"></div>

<div className="absolute bottom-32 flex items-end gap-1.5 h-12">
<div className="equalizer-bar" style={{animationDelay: '0.1s', height: '20px'}}></div>
<div className="equalizer-bar" style={{animationDelay: '0.3s', height: '35px'}}></div>
<div className="equalizer-bar" style={{animationDelay: '0.2s', height: '15px'}}></div>
<div className="equalizer-bar" style={{animationDelay: '0.5s', height: '40px'}}></div>
<div className="equalizer-bar" style={{animationDelay: '0.1s', height: '25px'}}></div>
<div className="equalizer-bar" style={{animationDelay: '0.4s', height: '30px'}}></div>
<div className="equalizer-bar" style={{animationDelay: '0.2s', height: '15px'}}></div>
</div>
</div>

<div className="absolute bottom-6 left-6 right-6 z-30">
<div className="backdrop-blur-xl bg-white/70 dark:bg-black/60 border border-zinc-200 dark:border-white/20 p-4 rounded-xl flex justify-between items-center text-zinc-900 dark:text-white shadow-lg dark:shadow-none transition-colors">
<div className="flex items-center gap-3">
<iconify-icon className="text-orange-500 text-xl" icon="solar:soundwave-square-linear"></iconify-icon>
<span className="text-sm font-semibold tracking-tight" data-i18n="card2_title">Motor de Contenido Generativo</span>
</div>
<div className="flex gap-1">
<div className="w-1 h-3 bg-orange-500 animate-pulse"></div>
<div className="w-1 h-3 bg-orange-500 animate-pulse delay-75"></div>
<div className="w-1 h-3 bg-orange-500 animate-pulse delay-150"></div>
</div>
</div>
</div>
</div>

<div className="absolute top-6 right-6 z-40 flex gap-2">
<button className="w-2 h-2 rounded-full bg-zinc-400 transition-all duration-300 hover:scale-125 bg-zinc-800 dark:bg-white scale-125" id="dot-1" onclick="showSlide(1)"></button>
<button className="w-2 h-2 rounded-full bg-zinc-300 dark:bg-zinc-600 transition-all duration-300 hover:scale-125" id="dot-2" onclick="showSlide(2)"></button>
</div>
</div>
</section>

<section className="border-y border-zinc-200 dark:border-white/5 bg-white/50 dark:bg-white/5 backdrop-blur-sm relative z-10 transition-colors">
<div className="max-w-[1440px] mx-auto px-6 py-12 md:py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
<div className="reveal-up">
<h3 className="text-6xl md:text-7xl font-medium tracking-tighter mb-2 text-zinc-900 dark:text-white transition-colors">693</h3>
<div className="flex items-start gap-2 text-zinc-500 dark:text-zinc-400 transition-colors">
<iconify-icon className="text-xl mt-1 text-orange-600" icon="solar:smart-vacuum-cleaner-linear"></iconify-icon>
<p className="text-sm font-medium max-w-[160px] leading-snug" data-i18n="stats_desc">Agentes IA activos gestionando consultas diariamente.</p>
</div>
</div>
<div className="md:col-span-2 flex flex-col justify-center reveal-up delay-100">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500 text-zinc-900 dark:text-white">
<div className="text-xl font-bold tracking-tighter flex items-center gap-2"><div className="w-4 h-4 bg-current rounded-sm"></div>ACME Corp</div>
<div className="text-xl font-semibold tracking-wide italic flex items-center gap-2">Stark<span className="font-light">Ind.</span></div>
<div className="text-xl font-bold flex items-center gap-2"><div className="w-4 h-4 border-2 border-current rounded-full"></div> Globex</div>
<div className="text-xl font-medium tracking-tight flex items-center gap-2">Soylent</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white dark:bg-zinc-950/80 relative z-10 transition-colors">
<div className="max-w-[1440px] mx-auto px-6 grid lg:grid-cols-12 gap-16">
<div className="lg:col-span-5">
<h3 className="text-3xl md:text-4xl font-medium tracking-tight mb-6 text-zinc-900 dark:text-white transition-colors" data-i18n="services_title">
                    En nuestra agencia, no usamos plantillas. Cada proyecto <span className="text-zinc-400">comienza con datos y termina con impacto.</span>
</h3>
<p className="text-lg text-zinc-500 dark:text-zinc-400 mb-8 transition-colors" data-i18n="services_desc">
                    Combinamos estratégicamente diseño web, agentes de IA y automatizaciones sociales a medida para tu marca.
                </p>
<div className="relative aspect-square w-full rounded-lg overflow-hidden shadow-2xl bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-white/10 p-8 group transition-colors">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/5 dark:to-white/5 transition-colors"></div>
<div className="w-full h-full bg-zinc-100 dark:bg-zinc-800 rounded flex items-center justify-center relative overflow-hidden transition-colors">
<img className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="bg-white/90 dark:bg-black/80 backdrop-blur px-6 py-3 rounded-full shadow-lg flex items-center gap-3 border border-white/20 transition-colors">
<span className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
<span className="text-sm font-semibold tracking-tight text-zinc-900 dark:text-white transition-colors" data-i18n="service_mockup_text">Conversión +230%</span>
</div>
</div>
</div>
</div>
</div>
<div className="lg:col-span-7 flex flex-col justify-center">

<details className="group border-t border-zinc-200 dark:border-white/10 transition-colors" open="">
<summary className="flex justify-between items-center py-8 cursor-pointer list-none hover:text-orange-600 dark:hover:text-orange-400 transition-colors">
<div className="flex items-center gap-6">
<span className="text-xs font-mono text-zinc-400">(01)</span>
<span className="text-2xl font-medium tracking-tight text-zinc-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors" data-i18n="acc_1_title">Integración Estratégica de IA</span>
</div>
<iconify-icon className="text-xl text-zinc-400 group-open:block hidden" icon="solar:minimize-linear"></iconify-icon>
<iconify-icon className="text-xl text-zinc-400 group-open:hidden block" icon="solar:add-circle-linear"></iconify-icon>
</summary>
<div className="pl-14 pb-8 pr-8">
<p className="text-lg text-zinc-600 dark:text-zinc-400 mb-4 transition-colors" data-i18n="acc_1_desc">
                            No solo construimos sitios web; construimos motores. Integramos Asistentes Chatbot personalizados que capturan leads, responden consultas y reservan citas 24/7.
                        </p>
</div>
</details>

<details className="group border-t border-zinc-200 dark:border-white/10 transition-colors">
<summary className="flex justify-between items-center py-8 cursor-pointer list-none hover:text-orange-600 dark:hover:text-orange-400 transition-colors">
<div className="flex items-center gap-6">
<span className="text-xs font-mono text-zinc-400">(02)</span>
<span className="text-2xl font-medium tracking-tight text-zinc-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors" data-i18n="acc_2_title">Bucles de Automatización Social</span>
</div>
<iconify-icon className="text-xl text-zinc-400 group-open:block hidden" icon="solar:minimize-linear"></iconify-icon>
<iconify-icon className="text-xl text-zinc-400 group-open:hidden block" icon="solar:add-circle-linear"></iconify-icon>
</summary>
<div className="pl-14 pb-8 pr-8">
<p className="text-lg text-zinc-600 dark:text-zinc-400 mb-4 transition-colors" data-i18n="acc_2_desc">
                            Diseño de contenido estratégico emparejado con automatización de DMs. Cuando un usuario comenta "CRECIMIENTO", nuestro sistema interactúa, califica y convierte al instante.
                        </p>
</div>
</details>

<details className="group border-t border-zinc-200 dark:border-white/10 transition-colors">
<summary className="flex justify-between items-center py-8 cursor-pointer list-none hover:text-orange-600 dark:hover:text-orange-400 transition-colors">
<div className="flex items-center gap-6">
<span className="text-xs font-mono text-zinc-400">(03)</span>
<span className="text-2xl font-medium tracking-tight text-zinc-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors" data-i18n="acc_3_title">Contenido Audioreactivo</span>
</div>
<iconify-icon className="text-xl text-zinc-400 group-open:block hidden" icon="solar:minimize-linear"></iconify-icon>
<iconify-icon className="text-xl text-zinc-400 group-open:hidden block" icon="solar:add-circle-linear"></iconify-icon>
</summary>
<div className="pl-14 pb-8 pr-8">
<p className="text-lg text-zinc-600 dark:text-zinc-400 mb-4 transition-colors" data-i18n="acc_3_desc">
                            Detén el scroll con visuales generativos. Creamos visuales audioreactivos específicos de la marca que se sincronizan con audios en tendencia para maximizar la retención.
                        </p>
</div>
</details>

<details className="group border-y border-zinc-200 dark:border-white/10 transition-colors">
<summary className="flex justify-between items-center py-8 cursor-pointer list-none hover:text-orange-600 dark:hover:text-orange-400 transition-colors">
<div className="flex items-center gap-6">
<span className="text-xs font-mono text-zinc-400">(04)</span>
<span className="text-2xl font-medium tracking-tight text-zinc-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors" data-i18n="acc_4_title">Diseño Web de Conversión</span>
</div>
<iconify-icon className="text-xl text-zinc-400 group-open:block hidden" icon="solar:minimize-linear"></iconify-icon>
<iconify-icon className="text-xl text-zinc-400 group-open:hidden block" icon="solar:add-circle-linear"></iconify-icon>
</summary>
<div className="pl-14 pb-8 pr-8">
<p className="text-lg text-zinc-600 dark:text-zinc-400 mb-4 transition-colors" data-i18n="acc_4_desc">
                            Estética y análisis unidos. Diseñamos interfaces que guían el comportamiento del usuario, optimizadas para velocidad, SEO y maximizar el valor de vida de cada visitante.
                        </p>
</div>
</details>
</div>
</div>
</section>

<section className="py-24 max-w-[1440px] mx-auto px-6 relative z-10">
<div className="flex justify-between items-end mb-16">
<h2 className="text-5xl font-medium tracking-tight max-w-xs leading-none text-zinc-900 dark:text-white transition-colors" data-i18n="work_title">TrabajosSeleccionados</h2>
<div className="text-right hidden md:block">
<p className="text-sm font-medium text-zinc-400 mb-1" data-i18n="work_subtitle">ARCHIVO DE PROYECTOS</p>
<p className="text-3xl font-medium text-zinc-300 dark:text-zinc-600 transition-colors">2024 — 2025</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24">

<div className="group cursor-pointer">
<div className="flex items-center justify-between text-xs font-medium text-zinc-500 dark:text-zinc-400 mb-4 border-b border-zinc-200 dark:border-white/10 pb-2 transition-colors">
<span>PROJECT 01</span>
<span data-i18n="proj_1_cat">CRECIMIENTO IA MODA</span>
</div>
<div className="overflow-hidden rounded-lg mb-6 relative">
<img className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 text-white font-medium" data-i18n="view_case">Ver Caso de Estudio</div>
</div>
</div>
<h3 className="text-2xl font-medium mb-2 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors text-zinc-900 dark:text-white">Dalal Aesthetics</h3>
<p className="text-lg text-zinc-500 dark:text-zinc-400 transition-colors" data-i18n="proj_1_desc">Estrategia de marketing full-funnel impulsada por un asistente de estilismo con IA.</p>
</div>

<div className="group cursor-pointer md:mt-32">
<div className="flex items-center justify-between text-xs font-medium text-zinc-500 dark:text-zinc-400 mb-4 border-b border-zinc-200 dark:border-white/10 pb-2 transition-colors">
<span>PROJECT 02</span>
<span data-i18n="proj_2_cat">AUTOMATIZACIÓN SAAS</span>
</div>
<div className="grid grid-cols-2 gap-4 mb-6">
<div className="overflow-hidden rounded-lg">
<img className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="overflow-hidden rounded-lg">
<img className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<h3 className="text-2xl font-medium mb-2 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors text-zinc-900 dark:text-white">TechFlow Systems</h3>
<p className="text-lg text-zinc-500 dark:text-zinc-400 transition-colors" data-i18n="proj_2_desc">Campaña de lanzamiento de producto integrada con embudos de webinar automatizados.</p>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50 dark:bg-white/5 border-t border-zinc-200 dark:border-white/5 relative z-10 transition-colors">
<div className="max-w-[1440px] mx-auto px-6 grid lg:grid-cols-3 gap-8">

<div className="lg:col-span-1 relative h-[500px] rounded-xl overflow-hidden group shadow-lg">
<img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale hover:grayscale-0" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8 text-white">
<p className="font-medium text-lg mb-1">Cameron Williamson</p>
<p className="text-sm opacity-70">CEO, Techno Cardo</p>
</div>
</div>

<div className="bg-white dark:bg-zinc-900 p-10 rounded-xl border border-zinc-200 dark:border-white/10 flex flex-col justify-between shadow-lg dark:shadow-none transition-colors">
<div className="">
<div className="flex items-center gap-3 mb-6">
<div className="flex -space-x-3">
<img alt="" className="w-10 h-10 rounded-full border-2 border-white dark:border-zinc-800" src="https://i.pravatar.cc/100?img=1"/>
<img alt="" className="w-10 h-10 rounded-full border-2 border-white dark:border-zinc-800" src="https://i.pravatar.cc/100?img=2"/>
<img alt="" className="w-10 h-10 rounded-full border-2 border-white dark:border-zinc-800" src="https://i.pravatar.cc/100?img=3"/>
</div>
<span className="text-sm font-medium text-zinc-500 dark:text-zinc-400 transition-colors" data-i18n="testimonial_trust">Confianza de 100+ empresas</span>
</div>
<div className="flex gap-1 text-orange-500 mb-4">
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-300 transition-colors" data-i18n="testimonial_quote">
                        "Nuestras ventas se dispararon en meses. Su enfoque basado en datos, creatividad y comunicación clara superaron las expectativas. El chatbot de IA maneja el 40% de nuestra carga de trabajo."
                    </p>
</div>
<div className="flex items-center gap-4 mt-8 pt-8 border-t border-zinc-100 dark:border-white/10 transition-colors">
<img className="w-12 h-12 rounded-full" src="https://i.pravatar.cc/100?img=5"/>
<div>
<p className="font-medium text-zinc-900 dark:text-white transition-colors">Jenny Wilson</p>
<p className="text-sm text-zinc-500 dark:text-zinc-400 transition-colors">CMO, TechFlow</p>
</div>
</div>
</div>

<div className="bg-zinc-100 dark:bg-zinc-800/50 p-10 rounded-xl flex flex-col justify-center border border-transparent dark:border-white/5 shadow-inner transition-colors">
<h3 className="text-3xl font-medium mb-2 text-zinc-900 dark:text-white transition-colors" data-i18n="stats_box_title">Casos de Éxito</h3>
<p className="text-zinc-500 dark:text-zinc-400 mb-12 transition-colors" data-i18n="stats_box_desc">Resultados reales de automatizaciones reales.</p>
<div className="grid grid-cols-2 gap-8">
<div>
<p className="text-4xl font-medium tracking-tight mb-1 text-zinc-900 dark:text-white transition-colors">35+</p>
<p className="text-xs font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-wider transition-colors" data-i18n="stat_1">Campañas Exitosas</p>
</div>
<div>
<p className="text-4xl font-medium tracking-tight mb-1 text-zinc-900 dark:text-white transition-colors">20+</p>
<p className="text-xs font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-wider transition-colors" data-i18n="stat_2">Partners a largo plazo</p>
</div>
</div>
<div className="mt-auto pt-10">
<p className="text-xs text-zinc-400">Case Study: Growth for a Beauty Brand</p>
</div>
</div>
</div>
</section>

<footer className="bg-zinc-900 dark:bg-black text-white py-20 border-t border-white/10 relative z-10 transition-colors">
<div className="max-w-[1440px] mx-auto px-6">
<div className="grid md:grid-cols-4 gap-12 mb-20 border-b border-white/10 pb-20">
<div className="col-span-2">
<h2 className="text-5xl md:text-7xl font-medium tracking-tight mb-8" data-i18n="footer_cta">Automaticemos<br/>tu crecimiento.</h2>
<button className="bg-white text-black px-8 py-4 rounded-full text-lg font-medium hover:bg-orange-500 hover:text-white transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(249,115,22,0.5)]" data-i18n="footer_btn">
                        Agendar Llamada Estratégica
                    </button>
</div>
<div className="md:col-start-4">
<div className="grid grid-cols-2 gap-8 text-sm text-zinc-400">
<ul className="space-y-4">
<li><a className="hover:text-white transition-colors" data-i18n="ft_home" href="#">Inicio</a></li>
<li><a className="hover:text-white transition-colors" data-i18n="ft_about" href="#">Sobre Nosotros</a></li>
<li><a className="hover:text-white transition-colors" data-i18n="ft_services" href="#">Servicios</a></li>
<li><a className="hover:text-white transition-colors" data-i18n="ft_work" href="#">Trabajos</a></li>
</ul>
<ul className="space-y-4">
<li><a className="hover:text-white transition-colors" href="#">Twitter</a></li>
<li><a className="hover:text-white transition-colors" href="#">Instagram</a></li>
<li><a className="hover:text-white transition-colors" href="#">LinkedIn</a></li>
<li><a className="hover:text-white transition-colors" href="#">Email</a></li>
</ul>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center text-xs text-zinc-500">
<p>© 2025 Evolve AI Systems. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-white" data-i18n="ft_privacy" href="#">Política de Privacidad</a>
<a className="hover:text-white" data-i18n="ft_terms" href="#">Términos de Servicio</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
