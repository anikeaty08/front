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



  !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();



        lucide.createIcons();

        // --- Multi-language Logic ---
        
        const translations = {
            en: {
                nav_solutions: "Solutions",
                nav_automation: "Automation",
                nav_projects: "Case Studies",
                nav_consulting: "Consulting",
                nav_book_call: "Book Strategy Call",
                nav_contact: "Contact",
                mob_stack: "Technology Stack",
                mob_skills: "Technical Skills",
                hero_status: "Developing and Receiving New Projects",
                hero_title_1: "Scaling Operations with",
                hero_title_2: "Intelligent Solutions",
                hero_desc: "I build bespoke business technology ecosystems. From fine-tuning LLMs and automating sales pipelines to developing custom internal dashboards and data warehousing solutions.",
                btn_explore: "Explore Solutions",
                btn_demo: "Request Demo",
                stack_title: "Technology Stack & Capabilities",
                serv_title: "Technical Services",
                serv_subtitle: "End-to-end digital infrastructure for modern businesses.",
                card_ai_title: "AI Solutions & LLM Management",
                card_ai_desc: "Implementation of cutting-edge AI. I manage Large Language Models (LLMs), build RAG pipelines for company data, and deploy autonomous agents.",
                card_auto_title: "Business Automation",
                card_auto_desc: "Streamlining workflows to reduce manual overhead across sales, marketing and IT operations.",
                card_dev_title: "Custom Development",
                card_dev_desc: "Building the interfaces your business needs. Internal tools, admin panels, and landing pages.",
                card_data_title: "Data Intelligence",
                card_data_desc: "Turning raw data into actionable insights. Services include Database Management, Warehousing, and BI Dashboards.",
                proj_section_title: "Selected Projects",
                proj_1_title: "Enterprise AI Knowledge Base",
                proj_1_desc: "Developed an internal search engine and dashboard powered by GPT-4 and Vector Databases. Allows employees to query company documentation instantly.",
                link_details: "View Details",
                proj_2_title: "Automated RevOps Pipeline",
                proj_2_desc: "Built a fully automated sales engine. Connects web forms to CRM, enriches leads via APIs, and triggers personalized marketing sequences.",
                link_workflow: "View Workflow",
                skills_title: "Technical Skills",
                skills_desc: "Comprehensive toolset for digital growth.",
                contact_title: "Ready to optimize your business?",
                contact_desc: "From automating mundane tasks to building complex AI-driven dashboards. Let's discuss how technology can serve your goals.",
                form_email: "Email Address",
                form_service: "Service Interest",
                form_details: "Project Details",
                form_btn: "Send Inquiry"
            },
            es: {
                nav_solutions: "Soluciones",
                nav_automation: "Automatización",
                nav_projects: "Casos de Estudio",
                nav_consulting: "Consultoría",
                nav_book_call: "Agendar Llamada",
                nav_contact: "Contacto",
                mob_stack: "Stack Tecnológico",
                mob_skills: "Habilidades Técnicas",
                hero_status: "Desarrollando y Recibiendo Nuevos Proyectos",
                hero_title_1: "Escalando Operaciones con",
                hero_title_2: "Soluciones Inteligentes",
                hero_desc: "Construyo ecosistemas tecnológicos a medida. Desde el ajuste de LLMs y automatización de ventas hasta dashboards internos personalizados.",
                btn_explore: "Explorar Soluciones",
                btn_demo: "Solicitar Demo",
                stack_title: "Stack Tecnológico y Capacidades",
                serv_title: "Servicios Técnicos",
                serv_subtitle: "Infraestructura digital completa para empresas modernas.",
                card_ai_title: "Soluciones de IA y Gestión LLM",
                card_ai_desc: "Implementación de IA de vanguardia. Gestiono LLMs, construyo pipelines RAG para datos corporativos y despliego agentes autónomos.",
                card_auto_title: "Automatización de Negocios",
                card_auto_desc: "Agilizando flujos de trabajo para reducir la carga manual en ventas, marketing y operaciones TI.",
                card_dev_title: "Desarrollo a Medida",
                card_dev_desc: "Construyendo las interfaces que tu negocio necesita. Herramientas internas, paneles de administración y páginas web.",
                card_data_title: "Inteligencia de Datos",
                card_data_desc: "Convirtiendo datos brutos en insights accionables. Gestión de bases de datos, almacenamiento y dashboards BI.",
                proj_section_title: "Proyectos Seleccionados",
                proj_1_title: "Base de Conocimiento IA Corporativa",
                proj_1_desc: "Motor de búsqueda interno y dashboard impulsado por GPT-4 y bases de datos vectoriales. Consultas instantáneas de documentación.",
                link_details: "Ver Detalles",
                proj_2_title: "Pipeline RevOps Automatizado",
                proj_2_desc: "Motor de ventas totalmente automatizado. Conecta formularios al CRM, enriquece leads via API y activa secuencias de marketing.",
                link_workflow: "Ver Flujo",
                skills_title: "Habilidades Técnicas",
                skills_desc: "Herramientas integrales para el crecimiento digital.",
                contact_title: "¿Listo para optimizar tu negocio?",
                contact_desc: "Desde automatizar tareas mundanas hasta construir dashboards complejos de IA. Hablemos de tus objetivos.",
                form_email: "Correo Electrónico",
                form_service: "Interés del Servicio",
                form_details: "Detalles del Proyecto",
                form_btn: "Enviar Consulta"
            },
            de: {
                nav_solutions: "Lösungen",
                nav_automation: "Automatisierung",
                nav_projects: "Fallstudien",
                nav_consulting: "Beratung",
                nav_book_call: "Strategiegespräch Buchen",
                nav_contact: "Kontakt",
                mob_stack: "Technologie-Stack",
                mob_skills: "Technische Fähigkeiten",
                hero_status: "Entwicklung und Annahme Neuer Projekte",
                hero_title_1: "Skalierung von Betriebsabläufen",
                hero_title_2: "Intelligente Lösungen",
                hero_desc: "Ich entwickle maßgeschneiderte Technologie-Ökosysteme. Von LLM-Feintuning und Vertriebsautomatisierung bis hin zu internen Dashboards.",
                btn_explore: "Lösungen Erkunden",
                btn_demo: "Demo Anfragen",
                stack_title: "Technologie-Stack & Fähigkeiten",
                serv_title: "Technische Dienstleistungen",
                serv_subtitle: "Digitale End-to-End-Infrastruktur für moderne Unternehmen.",
                card_ai_title: "KI-Lösungen & LLM-Management",
                card_ai_desc: "Implementierung modernster KI. Verwaltung von Large Language Models (LLMs), RAG-Pipelines und autonomen Agenten.",
                card_auto_title: "Geschäftsautomatisierung",
                card_auto_desc: "Optimierung von Arbeitsabläufen zur Reduzierung des manuellen Aufwands in Vertrieb, Marketing und IT.",
                card_dev_title: "Individuelle Entwicklung",
                card_dev_desc: "Erstellung der Schnittstellen, die Ihr Unternehmen benötigt. Interne Tools, Admin-Panels und Landing Pages.",
                card_data_title: "Datenintelligenz",
                card_data_desc: "Umwandlung von Rohdaten in umsetzbare Erkenntnisse. Datenbankmanagement, Data Warehousing und BI-Dashboards.",
                proj_section_title: "Ausgewählte Projekte",
                proj_1_title: "Enterprise KI-Wissensdatenbank",
                proj_1_desc: "Interne Suchmaschine und Dashboard powered by GPT-4. Ermöglicht Mitarbeitern das sofortige Abfragen von Dokumentationen.",
                link_details: "Details Anzeigen",
                proj_2_title: "Automatisierte RevOps-Pipeline",
                proj_2_desc: "Vollautomatisierte Vertriebsmaschine. Verbindet Webformulare mit CRM, reichert Leads an und löst Marketingsequenzen aus.",
                link_workflow: "Workflow Anzeigen",
                skills_title: "Technische Skills",
                skills_desc: "Umfassendes Toolset für digitales Wachstum.",
                contact_title: "Bereit, Ihr Geschäft zu optimieren?",
                contact_desc: "Von der Automatisierung alltäglicher Aufgaben bis hin zu komplexen KI-Dashboards.",
                form_email: "E-Mail-Adresse",
                form_service: "Dienstleistungsinteresse",
                form_details: "Projektdetails",
                form_btn: "Anfrage Senden"
            },
            pt: {
                nav_solutions: "Soluções",
                nav_automation: "Automação",
                nav_projects: "Estudos de Caso",
                nav_consulting: "Consultoria",
                nav_book_call: "Agendar Estratégia",
                nav_contact: "Contato",
                mob_stack: "Stack Tecnológico",
                mob_skills: "Habilidades Técnicas",
                hero_status: "Desenvolvendo e Recebendo Novos Projetos",
                hero_title_1: "Escalando Operações com",
                hero_title_2: "Soluções Inteligentes",
                hero_desc: "Crio ecossistemas tecnológicos sob medida. Do ajuste fino de LLMs e automação de vendas ao desenvolvimento de dashboards internos.",
                btn_explore: "Explorar Soluções",
                btn_demo: "Solicitar Demo",
                stack_title: "Stack Tecnológico & Capacidades",
                serv_title: "Serviços Técnicos",
                serv_subtitle: "Infraestrutura digital completa para empresas modernas.",
                card_ai_title: "Soluções de IA e Gestão de LLM",
                card_ai_desc: "Implementação de IA de ponta. Gerenciamento de LLMs, pipelines RAG e agentes autônomos para suporte e análise.",
                card_auto_title: "Automação de Negócios",
                card_auto_desc: "Otimização de fluxos de trabalho para reduzir a sobrecarga manual em vendas, marketing e TI.",
                card_dev_title: "Desenvolvimento Personalizado",
                card_dev_desc: "Construindo as interfaces que seu negócio precisa. Ferramentas internas, painéis administrativos e páginas.",
                card_data_title: "Inteligência de Dados",
                card_data_desc: "Transformando dados brutos em insights. Gestão de Banco de Dados, Data Warehousing e Dashboards de BI.",
                proj_section_title: "Projetos Selecionados",
                proj_1_title: "Base de Conhecimento IA Empresarial",
                proj_1_desc: "Mecanismo de busca interno e dashboard com GPT-4 e Bancos de Dados Vetoriais. Reduz o tempo de onboarding em 40%.",
                link_details: "Ver Detalhes",
                proj_2_title: "Pipeline RevOps Automatizado",
                proj_2_desc: "Motor de vendas totalmente automatizado. Conecta formulários ao CRM, enriquece leads via APIs e aciona marketing.",
                link_workflow: "Ver Fluxo",
                skills_title: "Habilidades Técnicas",
                skills_desc: "Conjunto abrangente de ferramentas para crescimento digital.",
                contact_title: "Pronto para otimizar seu negócio?",
                contact_desc: "Da automação de tarefas mundanas à construção de dashboards complexos de IA.",
                form_email: "Endereço de Email",
                form_service: "Interesse no Serviço",
                form_details: "Detalhes do Projeto",
                form_btn: "Enviar Consulta"
            },
            fr: {
                nav_solutions: "Solutions",
                nav_automation: "Automatisation",
                nav_projects: "Études de Cas",
                nav_consulting: "Conseil",
                nav_book_call: "Réserver un Appel",
                nav_contact: "Contact",
                mob_stack: "Stack Technologique",
                mob_skills: "Compétences Techniques",
                hero_status: "Développement et Réception de Nouveaux Projets",
                hero_title_1: "Mise à l'échelle avec des",
                hero_title_2: "Solutions Intelligentes",
                hero_desc: "Je construis des écosystèmes technologiques sur mesure. Du réglage fin des LLM et l'automatisation des ventes aux tableaux de bord internes.",
                btn_explore: "Explorer les Solutions",
                btn_demo: "Demander une Démo",
                stack_title: "Stack Technologique et Capacités",
                serv_title: "Services Techniques",
                serv_subtitle: "Infrastructure numérique complète pour les entreprises modernes.",
                card_ai_title: "Solutions IA et Gestion LLM",
                card_ai_desc: "Mise en œuvre d'IA de pointe. Gestion de grands modèles de langage (LLM), pipelines RAG et agents autonomes.",
                card_auto_title: "Automatisation Commerciale",
                card_auto_desc: "Rationalisation des flux de travail pour réduire la charge manuelle dans les ventes, le marketing et l'informatique.",
                card_dev_title: "Développement Sur Mesure",
                card_dev_desc: "Création des interfaces dont votre entreprise a besoin. Outils internes, panneaux d'administration et pages web.",
                card_data_title: "Intelligence des Données",
                card_data_desc: "Transformation des données brutes en informations exploitables. Gestion de bases de données et tableaux de bord BI.",
                proj_section_title: "Projets Sélectionnés",
                proj_1_title: "Base de Connaissances IA Entreprise",
                proj_1_desc: "Moteur de recherche interne et tableau de bord propulsés par GPT-4. Permet aux employés d'interroger la documentation instantanément.",
                link_details: "Voir Détails",
                proj_2_title: "Pipeline RevOps Automatisé",
                proj_2_desc: "Moteur de vente entièrement automatisé. Connecte les formulaires au CRM, enrichit les leads via API et déclenche le marketing.",
                link_workflow: "Voir Workflow",
                skills_title: "Compétences Techniques",
                skills_desc: "Boîte à outils complète pour la croissance numérique.",
                contact_title: "Prêt à optimiser votre entreprise ?",
                contact_desc: "De l'automatisation des tâches banales à la construction de tableaux de bord IA complexes.",
                form_email: "Adresse Email",
                form_service: "Service Intéressé",
                form_details: "Détails du Projet",
                form_btn: "Envoyer la Demande"
            }
        };

        function setLanguage(lang) {
            // Validate lang exists, fallback to en
            if (!translations[lang]) lang = 'en';
            
            // Save to localStorage
            localStorage.setItem('preferredLanguage', lang);
            
            // Set html tag lang
            document.documentElement.lang = lang;

            // Update text content
            const elements = document.querySelectorAll('[data-i18n]');
            elements.forEach(el => {
                const key = el.getAttribute('data-i18n');
                if (translations[lang][key]) {
                    el.innerText = translations[lang][key];
                }
            });

            // Close menu
            document.getElementById('lang-menu').classList.add('hidden');
        }

        function detectLanguage() {
            // 1. Check Cookie/LocalStorage
            const storedLang = localStorage.getItem('preferredLanguage');
            if (storedLang && translations[storedLang]) {
                setLanguage(storedLang);
                return;
            }

            // 2. Check Browser/System Header (navigator.language mimics the Accept-Language logic on client side)
            const browserLang = navigator.language || navigator.userLanguage; 
            const shortLang = browserLang.split('-')[0]; // e.g. 'en-US' -> 'en'

            if (translations[shortLang]) {
                setLanguage(shortLang);
            } else {
                setLanguage('en'); // Default
            }
        }

        // Dropdown Toggle Logic
        const langToggle = document.getElementById('lang-toggle');
        const langMenu = document.getElementById('lang-menu');

        langToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            langMenu.classList.toggle('hidden');
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!langToggle.contains(e.target) && !langMenu.contains(e.target)) {
                langMenu.classList.add('hidden');
            }
        });

        // Initialize Language on Load
        detectLanguage();


        // Mobile Menu Toggle Logic
        const mobileBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const menuLinks = mobileMenu.querySelectorAll('a');

        mobileBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Close menu when a link is clicked
        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10 blur-sm" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="absolute top-0 left-0 -z-10 w-full h-full" data-us-project="X0ErZR3QhPzMHfKgBbJJ"></div>
</div>

<div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
<div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-900/10 rounded-full blur-[120px] opacity-40 animate-pulse"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-900/10 rounded-full blur-[100px] opacity-30"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#050A15]/70 backdrop-blur-md">
<div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="hover:opacity-80 transition-opacity flex items-center gap-3" href="#">
<img alt="Symbol" className="h-12 object-contain border-0 rounded-full pr-2 pl-2 shadow-lg" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/11109310-ac76-4b9b-9a16-5cf8de59cb35_800w.png"/>
<img alt="BusinessTech" className="w-auto h-9 object-contain pr-3 pl-3" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6fc8d1fc-8afd-4d82-a7cc-993ed9a2a424_1600w.png"/>
</a>

<div className="hidden md:flex items-center space-x-8 text-sm font-light text-slate-300">
<a className="hover:text-white transition-colors" data-i18n="nav_solutions" href="#services">Solutions</a>
<a className="hover:text-white transition-colors" data-i18n="nav_automation" href="#automation">Automation</a>
<a className="hover:text-white transition-colors" data-i18n="nav_projects" href="#projects">Case Studies</a>
<a className="hover:text-white transition-colors" data-i18n="nav_consulting" href="#contact">Consulting</a>
</div>
<div className="flex items-center gap-4">

<div className="relative group">
<button className="flex items-center justify-center p-2 text-slate-400 hover:text-white transition-colors rounded-full hover:bg-white/5" id="lang-toggle">
<svg className="lucide lucide-globe w-5 h-5" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
</button>

<div className="hidden absolute right-0 mt-2 w-40 bg-[#0a1424] border border-white/10 rounded-lg shadow-2xl overflow-hidden z-50 py-1" id="lang-menu">
<button className="w-full text-left px-4 py-2 text-sm text-slate-300 hover:bg-white/5 hover:text-white transition-colors flex items-center justify-between" onclick="setLanguage('en')">English <span className="text-xs text-slate-500">EN</span></button>
<button className="w-full text-left px-4 py-2 text-sm text-slate-300 hover:bg-white/5 hover:text-white transition-colors flex items-center justify-between" onclick="setLanguage('es')">Español <span className="text-xs text-slate-500">ES</span></button>
<button className="w-full text-left px-4 py-2 text-sm text-slate-300 hover:bg-white/5 hover:text-white transition-colors flex items-center justify-between" onclick="setLanguage('de')">Deutsch <span className="text-xs text-slate-500">DE</span></button>
<button className="w-full text-left px-4 py-2 text-sm text-slate-300 hover:bg-white/5 hover:text-white transition-colors flex items-center justify-between" onclick="setLanguage('pt')">Português <span className="text-xs text-slate-500">PT</span></button>
<button className="w-full text-left px-4 py-2 text-sm text-slate-300 hover:bg-white/5 hover:text-white transition-colors flex items-center justify-between" onclick="setLanguage('fr')">Français <span className="text-xs text-slate-500">FR</span></button>
</div>
</div>

<a className="hidden md:flex glass-panel px-4 py-2 text-xs font-medium rounded-md hover:bg-white/10 transition-all border border-white/10 items-center gap-2 group" href="#contact">
<span data-i18n="nav_book_call">Book Strategy Call</span>
<svg className="lucide lucide-arrow-right w-3 h-3 group-hover:translate-x-0.5 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>

<button className="md:hidden text-slate-300 hover:text-white focus:outline-none" id="mobile-menu-btn">
<svg className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</div>

<div className="hidden absolute top-20 left-0 w-full bg-[#050A15]/95 backdrop-blur-xl border-b border-white/10 flex-col shadow-2xl" id="mobile-menu">
<div className="px-6 py-4 flex flex-col space-y-4">
<a className="text-sm font-medium text-slate-400 hover:text-white transition-colors block py-2 border-b border-white/5" data-i18n="mob_stack" href="#tech-stack">Technology Stack</a>
<a className="text-sm font-medium text-slate-400 hover:text-white transition-colors block py-2 border-b border-white/5" data-i18n="nav_solutions" href="#services">Technical Services</a>
<a className="text-sm font-medium text-slate-400 hover:text-white transition-colors block py-2 border-b border-white/5" data-i18n="nav_projects" href="#projects">Selected Projects</a>
<a className="text-sm font-medium text-slate-400 hover:text-white transition-colors block py-2 border-b border-white/5" data-i18n="mob_skills" href="#skills">Technical Skills</a>
<a className="text-sm font-medium text-indigo-400 hover:text-indigo-300 transition-colors block py-2" data-i18n="nav_contact" href="#contact">Contact</a>
</div>
</div>
</nav>

<section className="lg:pt-48 lg:pb-32 max-w-6xl mr-auto ml-auto pt-32 pr-6 pb-20 pl-6 relative">
<div className="flex flex-col max-w-4xl items-start">
<div className="inline-flex gap-2 text-xs font-medium text-indigo-200 bg-indigo-900/30 border-indigo-500/20 border rounded-full mb-8 pt-1 pr-3 pb-1 pl-3 gap-x-2 gap-y-2 items-center" data-i18n="hero_status">Developing and Receiving New Projects</div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight leading-[1.1] mb-6 gradient-text">
<span data-i18n="hero_title_1">Scaling Operations with</span> <br/>
<span className="text-slate-500" data-i18n="hero_title_2">Intelligent Solutions</span>
</h1>
<p className="text-lg text-slate-400 max-w-2xl font-light leading-relaxed mb-10" data-i18n="hero_desc">
                I build bespoke business technology ecosystems. From fine-tuning LLMs and automating sales pipelines to developing custom internal dashboards and data warehousing solutions.
            </p>
<div className="flex flex-wrap gap-4">
<a className="bg-[#FDFBF7] text-[#050A15] px-6 py-3 rounded-md text-sm font-medium hover:bg-white transition-colors flex items-center gap-2" href="#services">
<span data-i18n="btn_explore">Explore Solutions</span>
<svg className="lucide lucide-layers w-4 h-4" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
</a>
<a className="glass-panel px-6 py-3 rounded-md text-sm font-medium text-slate-300 hover:text-white transition-colors flex items-center gap-2" href="#contact">
<span data-i18n="btn_demo">Request Demo</span>
<svg className="lucide lucide-presentation w-4 h-4" data-lucide="presentation" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 3h20"></path><path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3"></path><path d="m7 21 5-5 5 5"></path></svg>
</a>
</div>
</div>

<div className="mt-24 border-t border-white/5 pt-12" id="tech-stack">
<p className="text-xs text-slate-500 uppercase tracking-widest mb-8 font-medium" data-i18n="stack_title">Technology Stack &amp; Capabilities</p>
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
<div className="flex items-center gap-3">
<svg className="lucide lucide-brain-circuit w-5 h-5 text-indigo-400" data-lucide="brain-circuit" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M9 13a4.5 4.5 0 0 0 3-4"></path><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path><path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path><path d="M6 18a4 4 0 0 1-1.967-.516"></path><path d="M12 13h4"></path><path d="M12 18h6a2 2 0 0 1 2 2v1"></path><path d="M12 8h8"></path><path d="M16 8V5a2 2 0 0 1 2-2"></path><circle cx="16" cy="13" r=".5"></circle><circle cx="18" cy="3" r=".5"></circle><circle cx="20" cy="21" r=".5"></circle><circle cx="20" cy="8" r=".5"></circle></svg>
<span className="text-sm text-slate-300">LLMs</span>
</div>
<div className="flex items-center gap-3">
<svg className="lucide lucide-workflow w-5 h-5 text-indigo-400" data-lucide="workflow" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" width="8" x="3" y="3"></rect><path d="M7 11v4a2 2 0 0 0 2 2h4"></path><rect height="8" rx="2" width="8" x="13" y="13"></rect></svg>
<span className="text-sm text-slate-300">Automation</span>
</div>
<div className="flex items-center gap-3">
<svg className="lucide lucide-layout-dashboard w-5 h-5 text-indigo-400" data-lucide="layout-dashboard" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="9" rx="1" width="7" x="3" y="3"></rect><rect height="5" rx="1" width="7" x="14" y="3"></rect><rect height="9" rx="1" width="7" x="14" y="12"></rect><rect height="5" rx="1" width="7" x="3" y="16"></rect></svg>
<span className="text-sm text-slate-300">Dashboards</span>
</div>
<div className="flex items-center gap-3">
<svg className="lucide lucide-database w-5 h-5 text-indigo-400" data-lucide="database" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg>
<span className="text-sm text-slate-300">SQL / Data</span>
</div>
<div className="flex items-center gap-3">
<svg className="lucide lucide-code w-5 h-5 text-indigo-400" data-lucide="code" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 18 6-6-6-6"></path><path d="m8 6-6 6 6 6"></path></svg>
<span className="text-sm text-slate-300">Web &amp; Tools</span>
</div>
<div className="flex items-center gap-3">
<svg className="lucide lucide-bot w-5 h-5 text-indigo-400" data-lucide="bot" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>
<span className="text-sm text-slate-300">Auto-Agents</span>
</div>
</div>
</div>
</section>

<section className="px-6 py-20 max-w-6xl mx-auto" id="services">
<div className="flex flex-col md:flex-row justify-between items-end mb-12">
<div className="">
<h2 className="text-3xl font-medium tracking-tight mb-2" data-i18n="serv_title">Technical Services</h2>
<p className="text-slate-400 text-sm" data-i18n="serv_subtitle">End-to-end digital infrastructure for modern businesses.</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass-panel p-8 rounded-xl col-span-1 md:col-span-2 relative overflow-hidden group">
<div className="absolute top-0 right-0 -mt-8 -mr-8 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl group-hover:bg-indigo-500/20 transition-all"></div>
<div className="flex items-center gap-4 mb-6">
<div className="p-3 rounded-lg bg-indigo-500/10 border border-indigo-500/20">
<svg className="lucide lucide-sparkles w-6 h-6 text-indigo-300" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<h3 className="text-xl font-medium" data-i18n="card_ai_title">AI Solutions &amp; LLM Management</h3>
</div>
<p className="text-slate-400 text-sm leading-relaxed max-w-md" data-i18n="card_ai_desc">
                    Implementation of cutting-edge AI. I manage Large Language Models (LLMs), build RAG pipelines for company data, and deploy autonomous agents that handle support and analysis.
                </p>
<div className="mt-8 flex gap-2 flex-wrap">
<span className="text-xs bg-white/5 px-2 py-1 rounded text-slate-300 border border-white/5">Prompt Engineering</span>
<span className="text-xs bg-white/5 px-2 py-1 rounded text-slate-300 border border-white/5">Fine-tuning</span>
<span className="text-xs bg-white/5 px-2 py-1 rounded text-slate-300 border border-white/5">Chatbots</span>
<span className="text-xs bg-white/5 px-2 py-1 rounded text-slate-300 border border-white/5">Vector DBs</span>
</div>
</div>

<div className="glass-panel p-8 rounded-xl col-span-1 relative overflow-hidden group">
<div className="absolute bottom-0 left-0 -mb-8 -ml-8 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-all"></div>
<div className="flex items-center gap-4 mb-6">
<div className="p-3 rounded-lg bg-blue-500/10 border border-blue-500/20">
<svg className="lucide lucide-cog w-6 h-6 text-blue-300" data-lucide="cog" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 10.27 7 3.34"></path><path d="m11 13.73-4 6.93"></path><path d="M12 22v-2"></path><path d="M12 2v2"></path><path d="M14 12h8"></path><path d="m17 20.66-1-1.73"></path><path d="m17 3.34-1 1.73"></path><path d="M2 12h2"></path><path d="m20.66 17-1.73-1"></path><path d="m20.66 7-1.73 1"></path><path d="m3.34 17 1.73-1"></path><path d="m3.34 7 1.73 1"></path><circle cx="12" cy="12" r="2"></circle><circle cx="12" cy="12" r="8"></circle></svg>
</div>
<h3 className="text-xl font-medium" data-i18n="card_auto_title">Business Automation</h3>
</div>
<p className="text-slate-400 text-sm leading-relaxed mb-4" data-i18n="card_auto_desc">
                    Streamlining workflows to reduce manual overhead.
                </p>
<ul className="text-xs text-slate-500 space-y-2">
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-blue-400 rounded-full"></div>Sales Pipeline</li>
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-blue-400 rounded-full"></div>Marketing Campaigns</li>
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-blue-400 rounded-full"></div>IT &amp; System Ops</li>
</ul>
</div>

<div className="glass-panel p-8 rounded-xl col-span-1 relative overflow-hidden group">
<div className="absolute top-0 left-0 -mt-4 -ml-4 w-24 h-24 bg-slate-500/10 rounded-full blur-2xl"></div>
<div className="flex items-center gap-4 mb-6">
<div className="p-3 rounded-lg bg-slate-500/10 border border-slate-500/20">
<svg className="lucide lucide-monitor-smartphone w-6 h-6 text-slate-300" data-lucide="monitor-smartphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8"></path><path d="M10 19v-3.96 3.15"></path><path d="M7 19h5"></path><rect height="10" rx="2" width="6" x="16" y="12"></rect></svg>
</div>
<h3 className="text-xl font-medium" data-i18n="card_dev_title">Custom Development</h3>
</div>
<p className="text-slate-400 text-sm leading-relaxed mb-4" data-i18n="card_dev_desc">
                    Building the interfaces your business needs to operate.
                </p>
<ul className="text-xs text-slate-500 space-y-2">
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-slate-400 rounded-full"></div>Internal Tools</li>
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-slate-400 rounded-full"></div>Control Panels / Admin</li>
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-slate-400 rounded-full"></div>Webpages &amp; Landing Pages</li>
</ul>
</div>

<div className="glass-panel p-8 rounded-xl col-span-1 md:col-span-2 relative overflow-hidden group">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 transform -skew-x-12"></div>
<div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
<div>
<div className="flex items-center gap-4 mb-4">
<div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
<svg className="lucide lucide-bar-chart-big w-6 h-6 text-emerald-300" data-lucide="bar-chart-big" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><rect height="12" rx="1" width="4" x="15" y="5"></rect><rect height="9" rx="1" width="4" x="7" y="8"></rect></svg>
</div>
<h3 className="text-xl font-medium" data-i18n="card_data_title">Data Intelligence</h3>
</div>
<p className="text-slate-400 text-sm max-w-lg mb-4" data-i18n="card_data_desc">
                            Turning raw data into actionable insights. Services include Database Management (SQL/NoSQL), Data Warehousing, and building interactive BI Dashboards for leadership.
                        </p>
<div className="flex gap-2">
<span className="text-xs bg-white/5 px-2 py-1 rounded text-slate-300 border border-white/5">Analysis</span>
<span className="text-xs bg-white/5 px-2 py-1 rounded text-slate-300 border border-white/5">Visualization</span>
<span className="text-xs bg-white/5 px-2 py-1 rounded text-slate-300 border border-white/5">ETL</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="px-6 py-20 max-w-6xl mx-auto" id="projects">
<h2 className="text-3xl font-medium tracking-tight mb-12" data-i18n="proj_section_title">Selected Projects</h2>
<div className="flex flex-col gap-12">

<div className="group grid md:grid-cols-2 gap-8 items-center">
<div className="glass-panel rounded-xl overflow-hidden aspect-video border border-white/10 relative">
<div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-[#050A15] opacity-80"></div>

<div className="absolute inset-0 flex items-center justify-center">
<div className="w-3/4 h-3/4 bg-[#0f172a] rounded-lg shadow-2xl border border-slate-700/50 p-4 flex flex-col gap-3 opacity-90 group-hover:scale-105 transition-transform duration-500">
<div className="flex items-center justify-between border-b border-white/5 pb-2">
<div className="text-[10px] text-slate-400 font-medium">AI Knowledge Base</div>
<div className="flex gap-1"><div className="w-2 h-2 rounded-full bg-green-500"></div></div>
</div>
<div className="flex-1 bg-slate-800/50 rounded p-3 text-[10px] text-slate-300 font-mono leading-relaxed">
<span className="text-indigo-400">User:</span> Analyzing Q3 sales trends...
                                <span className="text-emerald-400">AI Agent:</span> Based on the dataset, Q3 revenue increased by 22% driven by automation improvements in the Northeast region. Generating report...
                            </div>
<div className="h-2 w-1/3 bg-slate-700/50 rounded"></div>
</div>
</div>
</div>
<div>
<div className="flex items-center gap-3 mb-4">
<span className="text-xs font-medium text-indigo-300 tracking-wider uppercase">Internal Tools</span>
<div className="h-px w-8 bg-indigo-900/50"></div>
</div>
<h3 className="text-2xl font-medium mb-3 group-hover:text-indigo-300 transition-colors" data-i18n="proj_1_title">Enterprise AI Knowledge Base</h3>
<p className="text-slate-400 text-sm leading-relaxed mb-6" data-i18n="proj_1_desc">
                        Developed an internal search engine and dashboard powered by GPT-4 and Vector Databases. Allows employees to query company documentation instantly, reducing onboarding time by 40%.
                    </p>
<ul className="flex flex-wrap gap-2 mb-8 text-xs text-slate-500">
<li className="px-2 py-1 rounded bg-white/5">LLM Integration</li>
<li className="px-2 py-1 rounded bg-white/5">Retool/React</li>
<li className="px-2 py-1 rounded bg-white/5">Pinecone</li>
</ul>
<a className="text-sm font-medium text-white hover:text-indigo-300 flex items-center gap-2 transition-colors" href="#">
<span data-i18n="link_details">View Details</span> <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>

<div className="group grid md:grid-cols-2 gap-8 items-center">
<div className="md:order-2 glass-panel rounded-xl overflow-hidden aspect-video border border-white/10 relative">
<div className="absolute inset-0 bg-gradient-to-bl from-indigo-900/20 to-[#050A15] opacity-80"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-3/4 h-3/4 bg-[#0f172a] rounded-lg shadow-2xl border border-slate-700/50 p-4 flex flex-col gap-4 opacity-90 group-hover:scale-105 transition-transform duration-500">
<div className="flex gap-2 items-center">
<div className="w-6 h-6 rounded bg-blue-500/20 flex items-center justify-center"><svg className="lucide lucide-zap w-3 h-3 text-blue-400" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg></div>
<div className="w-20 h-2 bg-slate-700/50 rounded"></div>
<div className="w-6 h-6 rounded bg-slate-700/50 ml-auto"></div>
</div>
<div className="space-y-2">
<div className="flex justify-between items-center bg-slate-800/30 p-2 rounded border border-white/5">
<div className="text-[9px] text-slate-400">Lead Capture</div>
<svg className="lucide lucide-arrow-right w-3 h-3 text-slate-600" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
<div className="text-[9px] text-slate-400">CRM Entry</div>
</div>
<div className="flex justify-between items-center bg-slate-800/30 p-2 rounded border border-white/5">
<div className="text-[9px] text-slate-400">Enrich Data</div>
<svg className="lucide lucide-arrow-right w-3 h-3 text-slate-600" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
<div className="text-[9px] text-slate-400">Email Seq</div>
</div>
</div>
</div>
</div>
</div>
<div className="md:order-1">
<div className="flex items-center gap-3 mb-4">
<span className="text-xs font-medium text-indigo-300 tracking-wider uppercase">Automation Ecosystem</span>
<div className="h-px w-8 bg-indigo-900/50"></div>
</div>
<h3 className="text-2xl font-medium mb-3 group-hover:text-indigo-300 transition-colors" data-i18n="proj_2_title">Automated RevOps Pipeline</h3>
<p className="text-slate-400 text-sm leading-relaxed mb-6" data-i18n="proj_2_desc">
                        Built a fully automated sales engine. Connects web forms to CRM, enriches leads via APIs, and triggers personalized marketing sequences. Reduced manual data entry by 95%.
                    </p>
<ul className="flex flex-wrap gap-2 mb-8 text-xs text-slate-500">
<li className="px-2 py-1 rounded bg-white/5">Sales Automation</li>
<li className="px-2 py-1 rounded bg-white/5">Marketing Ops</li>
<li className="px-2 py-1 rounded bg-white/5">API Integration</li>
</ul>
<a className="text-sm font-medium text-white hover:text-indigo-300 flex items-center gap-2 transition-colors" href="#">
<span data-i18n="link_workflow">View Workflow</span> <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>
</section>

<section className="px-6 py-20 bg-[#050A15]/50 border-y border-white/5 backdrop-blur-sm" id="skills">
<div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
<div className="md:col-span-1">
<h2 className="text-xl font-medium tracking-tight mb-4" data-i18n="skills_title">Technical Skills</h2>
<p className="text-slate-400 text-sm" data-i18n="skills_desc">Comprehensive toolset for digital growth.</p>
</div>
<div className="md:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-4">

<div>
<h4 className="text-xs font-semibold text-indigo-300 uppercase tracking-wider mb-3">AI &amp; Data</h4>
<ul className="text-sm text-slate-400 space-y-2">
<li>LLMs Management</li>
<li>AI Solutions</li>
<li>Data Analysis</li>
</ul>
</div>

<div>
<h4 className="text-xs font-semibold text-indigo-300 uppercase tracking-wider mb-3">Automation</h4>
<ul className="text-sm text-slate-400 space-y-2">
<li>Sales Automations</li>
<li>Marketing Automations</li>
<li>IT Automations</li>
</ul>
</div>

<div>
<h4 className="text-xs font-semibold text-indigo-300 uppercase tracking-wider mb-3">Development</h4>
<ul className="text-sm text-slate-400 space-y-2">
<li>Control Panels / Dashboards</li>
<li>Internal Tools Dev</li>
<li>WebPages Development</li>
</ul>
</div>
</div>
</div>
</section>

<section className="px-6 py-24 max-w-4xl mx-auto text-center" id="contact">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-6" data-i18n="contact_title">Ready to optimize your business?</h2>
<p className="text-slate-400 text-sm mb-10 max-w-md mx-auto" data-i18n="contact_desc">
            From automating mundane tasks to building complex AI-driven dashboards. Let's discuss how technology can serve your goals.
        </p>
<div className="glass-panel p-8 rounded-2xl max-w-md mx-auto text-left">
<form action="https://formsubmit.co/navcol.bi@gmail.com" className="space-y-4" method="POST">
<input name="_subject" type="hidden" value="New Business Inquiry - Portfolio Site"/>
<div>
<label className="block text-xs font-medium text-slate-400 mb-1.5" data-i18n="form_email">Email Address</label>
<input className="w-full bg-[#0a192f] border border-slate-700 text-slate-200 text-sm rounded-md px-3 py-2.5 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder-slate-600" name="email" placeholder="name@company.com" required="" type="email"/>
</div>
<div className="">
<label className="block text-xs font-medium text-slate-400 mb-1.5" data-i18n="form_service">Service Interest</label>
<select className="w-full bg-[#0a192f] border border-slate-700 text-slate-200 text-sm rounded-md px-3 py-2.5 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all" name="service_interest">
<option value="AI &amp; Automation">AI &amp; Automation</option>
<option value="Data &amp; Dashboards">Data &amp; Dashboards</option>
<option value="Custom Development">Custom Development</option>
<option value="General Consulting">General Consulting</option>
</select>
</div>
<div className="">
<label className="block text-xs font-medium text-slate-400 mb-1.5" data-i18n="form_details">Project Details</label>
<textarea className="w-full bg-[#0a192f] border border-slate-700 text-slate-200 text-sm rounded-md px-3 py-2.5 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder-slate-600" name="project_details" placeholder="..." required="" rows="4"></textarea>
</div>
<button className="w-full bg-[#FDFBF7] text-[#050A15] hover:bg-white font-medium text-sm py-2.5 rounded-md mt-2 transition-colors" data-i18n="form_btn" type="submit">
                    Send Inquiry
                </button>
</form>
</div>
</section>

<footer className="border-t border-white/5 bg-[#050A15]">
<div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
<div className="text-xs text-slate-500">© 2025 Navarro Consulting Firm. All rights reserved.</div>
<div className="flex space-x-6">
<a className="text-slate-500 hover:text-indigo-300 transition-colors" href="https://www.linkedin.com/in/jmbi5182" target="_blank">
<svg className="lucide lucide-linkedin w-[16px] h-[16px]" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: 'rgb(165, 180, 252)', width: '16px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
</div>
</div>
</footer>


    </>
  );
}
