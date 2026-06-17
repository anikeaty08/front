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
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
brand: {
blue: '#1e40af',
dark: '#0f172a',
orange: '#fb923c',
}
},
animation: {
'float': 'float 8s ease-in-out infinite',
'float-delayed': 'float 8s ease-in-out 4s infinite',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0) scale(1)' },
'50%': { transform: 'translateY(-20px) scale(1.05)' },
}
}
}
}
}



    !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
  


        // Set Language Function
        function setLanguage(lang) {
            const body = document.body;
            // Remove existing lang classes
            body.classList.remove('lang-fr', 'lang-en', 'lang-es', 'lang-de', 'lang-cn');
            // Add new lang class
            body.classList.add('lang-' + lang);
            
            // Close dropdown
            const menu = document.querySelector('.lang-menu');
            menu.classList.remove('show');
        }

        // Dropdown Logic
        const trigger = document.getElementById('lang-trigger');
        const menu = document.querySelector('.lang-menu');
        const mobileTrigger = document.getElementById('mobile-lang-trigger');

        // Toggle menu on click
        function toggleMenu(e) {
            e.stopPropagation();
            menu.classList.toggle('show');
        }

        if(trigger) trigger.addEventListener('click', toggleMenu);
        if(mobileTrigger) mobileTrigger.addEventListener('click', (e) => {
            // Simple cycle for mobile or reuse dropdown logic? 
            // Reuse dropdown for simplicity via generic toggle
            // Or simpler: cycle languages for mobile trigger
            e.stopPropagation();
            const langs = ['fr', 'en', 'es', 'de', 'cn'];
            const current = langs.find(l => document.body.classList.contains('lang-' + l)) || 'fr';
            const nextIndex = (langs.indexOf(current) + 1) % langs.length;
            setLanguage(langs[nextIndex]);
        });

        // Close on click outside
        document.addEventListener('click', (e) => {
            if (menu && menu.classList.contains('show') && !menu.contains(e.target) && e.target !== trigger) {
                menu.classList.remove('show');
            }
        });

        // Intersection Observer for Scroll Animations
        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        observer.unobserve(entry.target); // Trigger only once
                    }
                });
            }, observerOptions);

            const revealElements = document.querySelectorAll('.reveal, .reveal-left');
            revealElements.forEach(el => observer.observe(el));
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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="yWZ2Tbe094Fsjgy9NRnD"></div>

</div></div>

<nav className="fixed w-full z-50 glass-nav transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex h-20 items-center justify-between">

<div className="flex group cursor-pointer items-center" onclick="window.location.href='https://img.sanishtech.com/u/03d1e9115449fa1b4f1f985af7b234b8.png'" role="button">
<span className="cursor-pointer flex items-center justify-center transition-opacity hover:opacity-80" role="button">
<img alt="Papillon MG" className="w-auto h-10 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</span>
<div className="text-brand-orange transition-transform duration-500 group-hover:rotate-12">

<iconify-icon height="32" icon="solar:butterfly-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
</div>

<div className="hidden md:flex gap-8 items-center">
<a className="text-sm font-medium hover:text-brand-orange transition-colors relative after:content-[''] after:absolute after:w-0 after:h-px after:bg-brand-orange after:left-0 after:-bottom-1 after:transition-all hover:after:w-full text-stone-400" href="#services">
<span className="fr-text">Expertises IA</span>
<span className="en-text">AI Solutions</span>
<span className="es-text">Soluciones IA</span>
<span className="de-text">KI-Lösungen</span>
<span className="cn-text">AI 解决方案</span>
</a>
<a className="hover:text-brand-orange transition-colors text-sm font-medium relative after:content-[''] after:absolute after:w-0 after:h-px after:bg-brand-orange after:left-0 after:-bottom-1 after:transition-all hover:after:w-full text-stone-400" href="#methodology">
<span className="fr-text">L'Agence 4.0</span>
<span className="en-text">The 4.0 Agency</span>
<span className="es-text">La Agencia 4.0</span>
<span className="de-text">Die 4.0 Agentur</span>
<span className="cn-text">4.0 代理</span>
</a>
<a className="hover:text-brand-orange transition-colors text-sm font-medium relative after:content-[''] after:absolute after:w-0 after:h-px after:bg-brand-orange after:left-0 after:-bottom-1 after:transition-all hover:after:w-full text-stone-400" href="#contact">
<span className="fr-text">Contact</span>
<span className="en-text">Contact</span>
<span className="es-text">Contacto</span>
<span className="de-text">Kontakt</span>
<span className="cn-text">联系</span>
</a>
</div>

<div className="hidden md:flex items-center gap-4">

<div className="relative group">
<button className="flex items-center gap-2 text-sm font-medium px-3 py-1.5 rounded-full border border-stone-800 bg-stone-900/50 hover:bg-stone-800 hover:text-brand-orange transition-colors text-stone-300" id="lang-trigger">

<iconify-icon className="fr-text" height="18" icon="circle-flags:fr" width="18"></iconify-icon>
<iconify-icon className="en-text" height="18" icon="circle-flags:us" width="18"></iconify-icon>
<iconify-icon className="es-text" height="18" icon="circle-flags:es" width="18"></iconify-icon>
<iconify-icon className="de-text" height="18" icon="circle-flags:de" width="18"></iconify-icon>
<iconify-icon className="cn-text" height="18" icon="circle-flags:cn" width="18"></iconify-icon>
<iconify-icon className="opacity-50" height="12" icon="solar:alt-arrow-down-linear" width="12"></iconify-icon>
</button>

<div className="lang-menu absolute right-0 mt-2 w-48 rounded-xl border border-stone-800 bg-stone-900 shadow-xl overflow-hidden z-50 py-1">
<button className="w-full text-left px-4 py-2.5 text-sm hover:bg-stone-800 flex items-center justify-between group/item transition-colors text-stone-300" onclick="setLanguage('fr')">
<div className="flex items-center gap-3">
<iconify-icon height="18" icon="circle-flags:fr" width="18"></iconify-icon>
<span>Français</span>
</div>
<iconify-icon className="fr-text text-brand-orange" height="16" icon="solar:check-read-linear" width="16"></iconify-icon>
</button>
<button className="w-full text-left px-4 py-2.5 text-sm hover:bg-stone-800 flex items-center justify-between group/item transition-colors text-stone-300" onclick="setLanguage('en')">
<div className="flex items-center gap-3">
<iconify-icon height="18" icon="circle-flags:us" width="18"></iconify-icon>
<span>English</span>
</div>
<iconify-icon className="en-text text-brand-orange" height="16" icon="solar:check-read-linear" width="16"></iconify-icon>
</button>
<button className="w-full text-left px-4 py-2.5 text-sm hover:bg-stone-800 flex items-center justify-between group/item transition-colors text-stone-300" onclick="setLanguage('es')">
<div className="flex items-center gap-3">
<iconify-icon height="18" icon="circle-flags:es" width="18"></iconify-icon>
<span>Español</span>
</div>
<iconify-icon className="es-text text-brand-orange" height="16" icon="solar:check-read-linear" width="16"></iconify-icon>
</button>
<button className="w-full text-left px-4 py-2.5 text-sm hover:bg-stone-800 flex items-center justify-between group/item transition-colors text-stone-300" onclick="setLanguage('de')">
<div className="flex items-center gap-3">
<iconify-icon height="18" icon="circle-flags:de" width="18"></iconify-icon>
<span>Deutsch</span>
</div>
<iconify-icon className="de-text text-brand-orange" height="16" icon="solar:check-read-linear" width="16"></iconify-icon>
</button>
<button className="w-full text-left px-4 py-2.5 text-sm hover:bg-stone-800 flex items-center justify-between group/item transition-colors text-stone-300" onclick="setLanguage('cn')">
<div className="flex items-center gap-3">
<iconify-icon height="18" icon="circle-flags:cn" width="18"></iconify-icon>
<span>中文</span>
</div>
<iconify-icon className="cn-text text-brand-orange" height="16" icon="solar:check-read-linear" width="16"></iconify-icon>
</button>
</div>
</div>
<a className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium transition-all duration-300 bg-brand-orange rounded-full hover:shadow-[0_0_20px_rgba(251,146,60,0.4)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-600 hover:scale-105 text-black hover:bg-white" href="#contact">
<span className="fr-text">Audit Gratuit</span>
<span className="en-text">Free Audit</span>
<span className="es-text">Auditoría Gratis</span>
<span className="de-text">Kostenloses Audit</span>
<span className="cn-text">免费审计</span>
</a>
</div>

<div className="md:hidden flex items-center gap-4">
<button className="flex items-center gap-1 text-xs font-bold text-stone-400 hover:text-brand-orange" id="mobile-lang-trigger">
<iconify-icon className="fr-text" height="20" icon="circle-flags:fr" width="20"></iconify-icon>
<iconify-icon className="en-text" height="20" icon="circle-flags:us" width="20"></iconify-icon>
<iconify-icon className="es-text" height="20" icon="circle-flags:es" width="20"></iconify-icon>
<iconify-icon className="de-text" height="20" icon="circle-flags:de" width="20"></iconify-icon>
<iconify-icon className="cn-text" height="20" icon="circle-flags:cn" width="20"></iconify-icon>
</button>
<button className="p-2 transition-colors text-stone-400 hover:text-stone-100">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</div>
</nav>

<section className="lg:pt-48 lg:pb-32 overflow-hidden hero-gradient pt-32 pb-20 relative">
<div className="lg:px-8 z-10 text-center max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">
<div className="reveal inline-flex items-center gap-2 px-3 py-1 rounded-full border text-sm font-medium mb-8 transition-colors cursor-default bg-orange-950/30 border-orange-900/50 text-orange-300 hover:bg-orange-900/50 active">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-orange-500"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
</span>
<span className="fr-text">Agence Webmarketing 4.0 &amp; Intelligence Artificielle</span>
<span className="en-text">Webmarketing 4.0 &amp; AI Agency</span>
<span className="es-text">Agencia de Marketing Web 4.0 &amp; IA</span>
<span className="de-text">Webmarketing 4.0 &amp; KI Agentur</span>
<span className="cn-text">网络营销 4.0 &amp; 人工智能代理</span>
</div>
<h1 className="reveal stagger-1 text-5xl md:text-7xl font-semibold tracking-tight mb-8 max-w-4xl mx-auto leading-[1.1] text-stone-100 active">
<span className="fr-text">Propulsez votre marque avec</span>
<span className="en-text">Propel your brand with</span>
<span className="es-text">Impulsa tu marca con</span>
<span className="de-text">Treiben Sie Ihre Marke mit</span>
<span className="cn-text">提升您的品牌，利用</span>
<br/>
<span className="text-brand-orange relative inline-block">
<span className="fr-text">la puissance de l'IA</span>
<span className="en-text">the power of AI</span>
<span className="es-text">el poder de la IA</span>
<span className="de-text">der Kraft der KI</span>
<span className="cn-text">人工智能的力量</span>
<svg className="absolute w-full h-3 -bottom-1 left-0 text-orange-500 opacity-60" fill="none" viewbox="0 0 200 9" xmlns="http://www.w3.org/2000/svg"><path d="M2.00025 6.99997C2.00025 6.99997 101.5 2.5 198 3.5" stroke="currentColor" strokeLinecap="round" strokeWidth="3"></path></svg>
</span>.
            </h1>
<p className="reveal stagger-2 text-lg md:text-xl text-stone-500 mb-10 max-w-2xl mx-auto leading-relaxed active">
<span className="fr-text">Papillon MG fusionne expertise humaine et technologies 4.0. Nous utilisons l'IA prédictive et générative pour métamorphoser votre visibilité et maximiser votre ROI.</span>
<span className="en-text">Papillon MG merges human expertise with 4.0 technologies. We use predictive and generative AI to metamorphose your visibility and maximize your ROI.</span>
<span className="es-text">Papillon MG fusiona experiencia humana con tecnologías 4.0. Utilizamos IA predictiva y generativa para metamorfosear tu visibilidad y maximizar tu ROI.</span>
<span className="de-text">Papillon MG verbindet menschliche Expertise mit 4.0 Technologien. Wir nutzen prädiktive und generative KI, um Ihre Sichtbarkeit zu metamorphosieren und Ihren ROI zu maximieren.</span>
<span className="cn-text">Papillon MG 将人类专业知识与 4.0 技术融合。我们使用预测性和生成性人工智能来彻底改变您的知名度并最大化您的投资回报率。</span>
</p>
<div className="reveal stagger-3 flex flex-col sm:flex-row gap-4 justify-center items-center active">
<a className="group w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-medium transition-all duration-300 bg-brand-orange rounded-full hover:shadow-[0_0_25px_rgba(251,146,60,0.3)] hover:-translate-y-1 text-black hover:bg-white" href="#contact">
<span className="fr-text">Lancer votre stratégie IA</span>
<span className="en-text">Launch AI Strategy</span>
<span className="es-text">Lanzar Estrategia IA</span>
<span className="de-text">KI-Strategie starten</span>
<span className="cn-text">启动 AI 策略</span>
<iconify-icon className="ml-2 transition-transform group-hover:rotate-12" height="20" icon="solar:stars-minimalistic-linear" width="20"></iconify-icon>
</a>
<a className="group w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-medium transition-all duration-300 border rounded-full text-stone-300 bg-black border-stone-800 hover:bg-stone-900 hover:border-stone-600 hover:text-white" href="#services">
<span className="fr-text">Nos solutions 4.0</span>
<span className="en-text">Our 4.0 Solutions</span>
<span className="es-text">Soluciones 4.0</span>
<span className="de-text">Unsere 4.0 Lösungen</span>
<span className="cn-text">我们的 4.0 解决方案</span>
</a>
</div>
</div>

<div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-96 h-96 rounded-full blur-[100px] pointer-events-none animate-float bg-orange-800/20"></div>
<div className="absolute top-0 right-0 translate-x-1/3 -translate-y-1/4 w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none animate-float-delayed bg-red-900/20"></div>
</section>

<section className="border-y bg-stone-950/30 border-stone-900 pt-12 pb-12">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<p className="reveal text-center text-sm font-medium mb-8 uppercase tracking-wider text-stone-600">
<span className="fr-text">Ils ont pris le virage 4.0 avec nous</span>
<span className="en-text">They took the 4.0 turn with us</span>
<span className="es-text">Tomaron el giro 4.0 con nosotros</span>
<span className="de-text">Sie haben die 4.0 Wende mit uns genommen</span>
<span className="cn-text">他们与我们一起完成了 4.0 转型</span>
</p>
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-700">

<div className="reveal stagger-1 h-8 rounded animate-pulse-slow w-32 mx-auto transition-colors bg-stone-800/50 hover:bg-stone-800"></div>
<div className="reveal stagger-2 h-8 rounded animate-pulse-slow w-24 mx-auto transition-colors bg-stone-800/50 hover:bg-stone-800"></div>
<div className="reveal stagger-3 h-8 rounded animate-pulse-slow w-28 mx-auto transition-colors bg-stone-800/50 hover:bg-stone-800"></div>
<div className="reveal stagger-4 h-8 rounded animate-pulse-slow w-36 mx-auto transition-colors bg-stone-800/50 hover:bg-stone-800"></div>
<div className="hidden lg:block reveal stagger-5 h-8 rounded animate-pulse-slow w-24 mx-auto transition-colors bg-stone-800/50 hover:bg-stone-800"></div>
</div>
</div>
</section>

<section className="bg-black pt-24 pb-24 relative" id="services">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-20">
<h2 className="reveal text-3xl md:text-4xl font-semibold tracking-tight mb-4 text-stone-100">
<span className="fr-text">Expertise Digitale Augmentée</span>
<span className="en-text">Augmented Digital Expertise</span>
<span className="es-text">Experiencia Digital Aumentada</span>
<span className="de-text">Erweiterte Digitale Expertise</span>
<span className="cn-text">增强的数字专业知识</span>
</h2>
<p className="reveal stagger-1 text-lg text-stone-500">
<span className="fr-text">Nous intégrons les derniers modèles d'IA à nos processus pour vous offrir une précision et une rapidité d'exécution inégalées.</span>
<span className="en-text">We integrate the latest AI models into our processes to offer you unmatched precision and execution speed.</span>
<span className="es-text">Integramos los últimos modelos de IA en nuestros procesos para ofrecer precisión y velocidad inigualables.</span>
<span className="de-text">Wir integrieren die neuesten KI-Modelle in unsere Prozesse für unübertroffene Präzision und Geschwindigkeit.</span>
<span className="cn-text">我们将最新的人工智能模型整合到我们的流程中，为您提供无与伦比的精度和执行速度。</span>
</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="reveal stagger-1 group p-8 rounded-2xl border shadow-sm hover-glow transition-all duration-500 hover:-translate-y-2 border-stone-900 bg-stone-950/40 hover:border-orange-900/50">
<div className="w-12 h-12 rounded-lg flex items-center justify-center text-brand-orange mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 border bg-orange-950/50 border-orange-900/20">
<iconify-icon height="24" icon="solar:magnifer-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-3 group-hover:text-brand-orange transition-colors text-stone-100">
<span className="fr-text">SEO &amp; IA Sémantique</span>
<span className="en-text">SEO &amp; Semantic AI</span>
<span className="es-text">SEO &amp; IA Semántica</span>
<span className="de-text">SEO &amp; Semantische KI</span>
<span className="cn-text">SEO &amp; 语义人工智能</span>
</h3>
<p className="text-lg text-stone-500 leading-relaxed group-hover:text-stone-400 transition-colors">
<span className="fr-text">Optimisation de contenu basée sur l'analyse sémantique par IA. Nous décryptons les algorithmes de Google pour vous.</span>
<span className="en-text">Content optimization based on AI semantic analysis. We decode Google algorithms for you.</span>
<span className="es-text">Optimización basada en análisis semántico por IA. Desciframos los algoritmos de Google.</span>
<span className="de-text">Inhaltsoptimierung basierend auf semantischer KI-Analyse. Wir entschlüsseln Google-Algorithmen.</span>
<span className="cn-text">基于人工智能语义分析的内容优化。我们为您解读 Google 算法。</span>
</p>
</div>

<div className="reveal stagger-2 group p-8 rounded-2xl border shadow-sm hover-glow transition-all duration-500 hover:-translate-y-2 border-stone-900 bg-stone-950/40 hover:border-orange-900/50">
<div className="w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 border bg-red-950/30 text-red-400 border-red-900/20">
<iconify-icon height="24" icon="solar:target-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-3 group-hover:text-brand-orange transition-colors text-stone-100">
<span className="fr-text">Ads &amp; Ciblage Prédictif</span>
<span className="en-text">Ads &amp; Predictive Targeting</span>
<span className="es-text">Anuncios &amp; Targeting Predictivo</span>
<span className="de-text">Ads &amp; Prädiktives Targeting</span>
<span className="cn-text">广告 &amp; 预测性定位</span>
</h3>
<p className="text-lg text-stone-500 leading-relaxed group-hover:text-stone-400 transition-colors">
<span className="fr-text">Campagnes Google &amp; Social Ads pilotées par la data. Maximisez vos conversions grâce au machine learning.</span>
<span className="en-text">Data-driven Google &amp; Social Ads. Maximize conversions with machine learning.</span>
<span className="es-text">Campañas Ads impulsadas por datos. Maximiza conversiones con aprendizaje automático.</span>
<span className="de-text">Datengetriebene Google &amp; Social Ads. Maximieren Sie Conversions mit Machine Learning.</span>
<span className="cn-text">数据驱动的广告。通过机器学习最大化您的转化率。</span>
</p>
</div>

<div className="reveal stagger-3 group p-8 rounded-2xl border shadow-sm hover-glow transition-all duration-500 hover:-translate-y-2 border-stone-900 bg-stone-950/40 hover:border-orange-900/50">
<div className="w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 border bg-red-950/30 text-red-400 border-red-900/20">
<iconify-icon height="24" icon="solar:share-circle-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-3 group-hover:text-brand-orange transition-colors text-stone-100">
<span className="fr-text">Smart Social Media</span>
<span className="en-text">Smart Social Media</span>
<span className="es-text">Redes Sociales Inteligentes</span>
<span className="de-text">Smart Social Media</span>
<span className="cn-text">智能社交媒体</span>
</h3>
<p className="text-lg text-stone-500 leading-relaxed group-hover:text-stone-400 transition-colors">
<span className="fr-text">Analyse des tendances en temps réel par IA pour créer des posts viraux et engager votre communauté.</span>
<span className="en-text">Real-time AI trend analysis to create viral posts and engage your community.</span>
<span className="es-text">Análisis de tendencias en tiempo real por IA para crear posts virales.</span>
<span className="de-text">Echtzeit-KI-Trendanalyse zur Erstellung viraler Posts.</span>
<span className="cn-text">实时人工智能趋势分析，创建病毒式帖子并吸引您的社区。</span>
</p>
</div>

<div className="reveal stagger-1 group p-8 rounded-2xl border shadow-sm hover-glow transition-all duration-500 hover:-translate-y-2 border-stone-900 bg-stone-950/40 hover:border-orange-900/50">
<div className="w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 border bg-orange-950/50 text-orange-400 border-orange-900/20">
<iconify-icon height="24" icon="solar:pen-new-square-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-3 group-hover:text-brand-orange transition-colors text-stone-100">
<span className="fr-text">Contenu Génératif</span>
<span className="en-text">Generative Content</span>
<span className="es-text">Contenido Generativo</span>
<span className="de-text">Generativer Inhalt</span>
<span className="cn-text">生成式内容</span>
</h3>
<p className="text-lg text-stone-500 leading-relaxed group-hover:text-stone-400 transition-colors">
<span className="fr-text">Création hybride (Humain + IA) de contenus à forte valeur ajoutée, optimisés pour la conversion.</span>
<span className="en-text">Hybrid creation (Human + AI) of high-value content, optimized for conversion.</span>
<span className="es-text">Creación híbrida (Humano + IA) de contenido de alto valor, optimizado para conversión.</span>
<span className="de-text">Hybride Erstellung (Mensch + KI) von hochwertigen Inhalten.</span>
<span className="cn-text">高价值内容的混合创作（人类 + AI），针对转化进行了优化。</span>
</p>
</div>

<div className="reveal stagger-2 group p-8 rounded-2xl border shadow-sm hover-glow transition-all duration-500 hover:-translate-y-2 border-stone-900 bg-stone-950/40 hover:border-orange-900/50">
<div className="w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 border bg-stone-900 text-stone-400 border-stone-800">
<iconify-icon height="24" icon="solar:laptop-minimalistic-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-3 group-hover:text-brand-orange transition-colors text-stone-100">
<span className="fr-text">Dev Web Intelligent</span>
<span className="en-text">Intelligent Web Dev</span>
<span className="es-text">Desarrollo Web Inteligente</span>
<span className="de-text">Intelligente Webentwicklung</span>
<span className="cn-text">智能 Web 开发</span>
</h3>
<p className="text-lg text-stone-500 leading-relaxed group-hover:text-stone-400 transition-colors">
<span className="fr-text">Sites ultra-rapides et responsives, intégrant des chatbots IA et des parcours utilisateurs personnalisés.</span>
<span className="en-text">Fast, responsive sites integrating AI chatbots and personalized user journeys.</span>
<span className="es-text">Sitios rápidos y responsive con chatbots de IA y recorridos personalizados.</span>
<span className="de-text">Schnelle, responsive Websites mit KI-Chatbots und personalisierten User Journeys.</span>
<span className="cn-text">快速、响应式的网站，集成人工智能聊天机器人和个性化用户旅程。</span>
</p>
</div>

<div className="reveal stagger-3 group p-8 rounded-2xl border shadow-sm hover-glow transition-all duration-500 hover:-translate-y-2 border-stone-900 bg-stone-950/40 hover:border-orange-900/50">
<div className="w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 border bg-orange-950/50 text-orange-400 border-orange-900/20">
<iconify-icon height="24" icon="solar:graph-up-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-3 group-hover:text-brand-orange transition-colors text-stone-100">
<span className="fr-text">Data &amp; Automation</span>
<span className="en-text">Data &amp; Automation</span>
<span className="es-text">Datos y Automatización</span>
<span className="de-text">Daten &amp; Automatisierung</span>
<span className="cn-text">数据与自动化</span>
</h3>
<p className="text-lg text-stone-500 leading-relaxed group-hover:text-stone-400 transition-colors">
<span className="fr-text">Automatisation de vos processus marketing et reporting prédictif pour anticiper votre croissance.</span>
<span className="en-text">Marketing process automation and predictive reporting to anticipate growth.</span>
<span className="es-text">Automatización de marketing y reportes predictivos para anticipar el crecimiento.</span>
<span className="de-text">Marketing-Automatisierung und prädiktives Reporting.</span>
<span className="cn-text">营销流程自动化和预测报告，以预测您的增长。</span>
</p>
</div>
</div>
</div>
</section>

<section className="py-24 overflow-hidden bg-stone-950/50" id="methodology">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex flex-col lg:flex-row items-center gap-16">
<div className="w-full lg:w-1/2 reveal-left">
<div className="relative group">

<div className="absolute inset-0 bg-gradient-to-tr rounded-3xl rotate-3 opacity-20 blur-xl transition-all duration-700 group-hover:opacity-30 group-hover:rotate-6 from-orange-400 to-red-600"></div>
<div className="relative border rounded-3xl p-8 shadow-2xl backdrop-blur-sm bg-black border-stone-800">
<div className="space-y-8">
<div className="flex items-start gap-4 group/item hover:-translate-x-[-8px] transition-transform duration-300">
<div className="flex-shrink-0 w-10 h-10 rounded-full text-brand-orange flex items-center justify-center font-bold text-lg border shadow-lg bg-orange-950/50 border-orange-900/30 shadow-orange-900/20">1</div>
<div>
<h4 className="text-lg font-semibold group-hover/item:text-brand-orange transition-colors text-stone-100">
<span className="fr-text">Audit IA (Chenille)</span>
<span className="en-text">AI Audit (Caterpillar)</span>
<span className="es-text">Auditoría IA (Oruga)</span>
<span className="de-text">KI Audit (Raupe)</span>
<span className="cn-text">AI 审计 (毛毛虫)</span>
</h4>
<p className="text-stone-500 mt-1">
<span className="fr-text">Scan complet de votre empreinte digitale par nos algorithmes.</span>
<span className="en-text">Complete scan of your digital footprint by our algorithms.</span>
<span className="es-text">Escaneo completo de tu huella digital por nuestros algoritmos.</span>
<span className="de-text">Vollständiger Scan Ihres digitalen Fußabdrucks.</span>
<span className="cn-text">通过我们的算法全面扫描您的数字足迹。</span>
</p>
</div>
</div>
<div className="w-px h-8 ml-5 bg-gradient-to-b to-transparent from-orange-900/50"></div>
<div className="flex items-start gap-4 group/item hover:-translate-x-[-8px] transition-transform duration-300">
<div className="flex-shrink-0 w-10 h-10 rounded-full text-brand-orange flex items-center justify-center font-bold text-lg border shadow-lg bg-orange-950/50 border-orange-900/30 shadow-orange-900/20">2</div>
<div>
<h4 className="text-lg font-semibold group-hover/item:text-brand-orange transition-colors text-stone-100">
<span className="fr-text">Stratégie Data (Cocon)</span>
<span className="en-text">Data Strategy (Cocoon)</span>
<span className="es-text">Estrategia de Datos (Capullo)</span>
<span className="de-text">Datenstrategie (Kokon)</span>
<span className="cn-text">数据策略 (茧)</span>
</h4>
<p className="text-stone-500 mt-1">
<span className="fr-text">Élaboration d'un plan d'action basé sur la data prédictive.</span>
<span className="en-text">Action plan development based on predictive data.</span>
<span className="es-text">Desarrollo de plan de acción basado en datos predictivos.</span>
<span className="de-text">Entwicklung eines Aktionsplans basierend auf prädiktiven Daten.</span>
<span className="cn-text">基于预测数据的行动计划制定。</span>
</p>
</div>
</div>
<div className="w-px h-8 ml-5 bg-gradient-to-b to-transparent from-orange-900/50"></div>
<div className="flex items-start gap-4 group/item hover:-translate-x-[-8px] transition-transform duration-300">
<div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg bg-gradient-to-br shadow-lg shadow-orange-500/30 from-orange-400 to-orange-600 text-black">3</div>
<div>
<h4 className="text-lg font-semibold group-hover/item:text-brand-orange transition-colors text-stone-100">
<span className="fr-text">Envol Automatisé (Papillon)</span>
<span className="en-text">Automated Flight (Butterfly)</span>
<span className="es-text">Vuelo Automatizado (Mariposa)</span>
<span className="de-text">Automatisierter Flug (Schmetterling)</span>
<span className="cn-text">自动飞行 (蝴蝶)</span>
</h4>
<p className="text-stone-500 mt-1">
<span className="fr-text">Déploiement, automatisation et optimisation continue par IA.</span>
<span className="en-text">Deployment, automation, and continuous optimization by AI.</span>
<span className="es-text">Despliegue, automatización y optimización continua por IA.</span>
<span className="de-text">Bereitstellung, Automatisierung und kontinuierliche Optimierung.</span>
<span className="cn-text">人工智能的部署、自动化和持续优化。</span>
</p>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="w-full lg:w-1/2">
<h2 className="reveal text-3xl md:text-4xl font-semibold tracking-tight mb-6 text-stone-100">
<span className="fr-text">L'effet Papillon 4.0</span>
<span className="en-text">The Butterfly Effect 4.0</span>
<span className="es-text">El Efecto Mariposa 4.0</span>
<span className="de-text">Der Schmetterlingseffekt 4.0</span>
<span className="cn-text">蝴蝶效应 4.0</span>
</h2>
<p className="reveal stagger-1 text-lg text-stone-500 mb-8 leading-relaxed">
<span className="fr-text">L'intelligence artificielle n'est pas une option, c'est le catalyseur de votre succès. Papillon MG combine la créativité humaine et la puissance de calcul pour des résultats exponentiels.</span>
<span className="en-text">Artificial intelligence is not an option, it's the catalyst for your success. Papillon MG combines human creativity and computing power for exponential results.</span>
<span className="es-text">La inteligencia artificial no es una opción, es el catalizador de tu éxito. Papillon MG combina creatividad humana y poder computacional.</span>
<span className="de-text">Künstliche Intelligenz ist keine Option, sie ist der Katalysator für Ihren Erfolg. Papillon MG kombiniert menschliche Kreativität und Rechenleistung.</span>
<span className="cn-text">人工智能不是一种选择，它是您成功的催化剂。Papillon MG 结合了人类创造力和计算能力，以获得指数级的结果。</span>
</p>
<ul className="space-y-4 mb-8">
<li className="reveal stagger-2 flex items-center gap-3 text-lg group text-stone-400">
<iconify-icon className="text-brand-orange group-hover:scale-110 transition-transform" height="24" icon="solar:check-circle-linear" width="24"></iconify-icon>
<span className="fr-text">Technologie de pointe (IA, Automation)</span>
<span className="en-text">Cutting-edge Technology (AI, Automation)</span>
<span className="es-text">Tecnología de punta (IA, Automatización)</span>
<span className="de-text">Spitzentechnologie (KI, Automatisierung)</span>
<span className="cn-text">尖端技术 (AI, 自动化)</span>
</li>
<li className="reveal stagger-3 flex items-center gap-3 text-lg group text-stone-400">
<iconify-icon className="text-brand-orange group-hover:scale-110 transition-transform" height="24" icon="solar:check-circle-linear" width="24"></iconify-icon>
<span className="fr-text">Prise de décision Data-Driven</span>
<span className="en-text">Data-Driven Decision Making</span>
<span className="es-text">Toma de decisiones basada en datos</span>
<span className="de-text">Datengetriebene Entscheidungsfindung</span>
<span className="cn-text">数据驱动的决策</span>
</li>
<li className="reveal stagger-4 flex items-center gap-3 text-lg group text-stone-400">
<iconify-icon className="text-brand-orange group-hover:scale-110 transition-transform" height="24" icon="solar:check-circle-linear" width="24"></iconify-icon>
<span className="fr-text">ROI optimisé en temps réel</span>
<span className="en-text">Real-time ROI Optimization</span>
<span className="es-text">Optimización de ROI en tiempo real</span>
<span className="de-text">Echtzeit-ROI-Optimierung</span>
<span className="cn-text">实时 ROI 优化</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 relative bg-black" id="contact">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] pointer-events-none from-orange-900/10 via-black to-black"></div>
<div className="max-w-3xl mx-auto px-6 lg:px-8 relative z-10">
<div className="text-center mb-12">
<h2 className="reveal text-3xl md:text-4xl font-semibold tracking-tight mb-4 text-stone-100">
<span className="fr-text">Parlons de votre futur 4.0</span>
<span className="en-text">Let's talk about your 4.0 future</span>
<span className="es-text">Hablemos de tu futuro 4.0</span>
<span className="de-text">Sprechen wir über Ihre 4.0 Zukunft</span>
<span className="cn-text">让我们谈谈您的 4.0 未来</span>
</h2>
<p className="reveal stagger-1 text-lg text-stone-500">
<span className="fr-text">Remplissez le formulaire ci-dessous pour une analyse gratuite de votre potentiel digital par nos experts.</span>
<span className="en-text">Fill out the form below for a free analysis of your digital potential by our experts.</span>
<span className="es-text">Complete el formulario a continuación para un análisis gratuito.</span>
<span className="de-text">Füllen Sie das Formular unten für eine kostenlose Analyse aus.</span>
<span className="cn-text">填写下面的表格以获取免费分析。</span>
</p>
</div>
<form className="space-y-6 reveal stagger-2">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="group">
<label className="block text-sm font-medium mb-2 group-focus-within:text-brand-orange transition-colors text-stone-300" htmlFor="name">
<span className="fr-text">Nom complet</span>
<span className="en-text">Full Name</span>
<span className="es-text">Nombre completo</span>
<span className="de-text">Vollständiger Name</span>
<span className="cn-text">全名</span>
</label>
<input className="block w-full rounded-lg px-4 py-3 focus:border-orange-500 focus:bg-stone-900 focus:ring-1 focus:ring-orange-500 outline-none transition-all placeholder-stone-700 border-stone-800 bg-stone-950 text-stone-100" id="name" placeholder="Jean Dupont" type="text"/>
</div>
<div className="group">
<label className="block text-sm font-medium mb-2 group-focus-within:text-brand-orange transition-colors text-stone-300" htmlFor="email">
<span className="fr-text">Email professionnel</span>
<span className="en-text">Professional Email</span>
<span className="es-text">Correo profesional</span>
<span className="de-text">Geschäftliche E-Mail</span>
<span className="cn-text">工作邮箱</span>
</label>
<input className="block w-full rounded-lg px-4 py-3 focus:border-orange-500 focus:bg-stone-900 focus:ring-1 focus:ring-orange-500 outline-none transition-all placeholder-stone-700 border-stone-800 bg-stone-950 text-stone-100" id="email" placeholder="jean@entreprise.com" type="email"/>
</div>
</div>
<div className="group">
<label className="block text-sm font-medium mb-2 group-focus-within:text-brand-orange transition-colors text-stone-300" htmlFor="service">
<span className="fr-text">Besoin principal</span>
<span className="en-text">Main Need</span>
<span className="es-text">Necesidad principal</span>
<span className="de-text">Hauptbedarf</span>
<span className="cn-text">主要需求</span>
</label>
<div className="relative">
<select className="block w-full appearance-none rounded-lg px-4 py-3 focus:border-orange-500 focus:bg-stone-900 focus:ring-1 focus:ring-orange-500 outline-none transition-all border-stone-800 bg-stone-950 text-stone-100" id="service">
<option>Transformation 4.0 &amp; Stratégie</option>
<option>SEO &amp; Contenu (IA)</option>
<option>Publicité &amp; Ciblage</option>
<option>Développement &amp; Automatisation</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-stone-500">
<iconify-icon height="20" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</div>
</div>
</div>
<div className="group cursor-pointer" onclick="window.location.href='https://img.sanishtech.com/u/03d1e9115449fa1b4f1f985af7b234b8.png'" role="button">
<label className="block text-sm font-medium mb-2 group-focus-within:text-brand-orange transition-colors text-stone-300" htmlFor="message">
<span className="fr-text">Message</span>
<span className="en-text">Message</span>
<span className="es-text">Mensaje</span>
<span className="de-text">Nachricht</span>
<span className="cn-text">信息</span>
</label>
<textarea className="block w-full rounded-lg px-4 py-3 focus:border-orange-500 focus:bg-stone-900 focus:ring-1 focus:ring-orange-500 outline-none transition-all placeholder-stone-700 border-stone-800 bg-stone-950 text-stone-100" id="message" placeholder="..." rows="4"></textarea>
</div>
<div className="pt-4">
<button className="w-full inline-flex items-center justify-center px-8 py-4 text-base font-medium transition-all duration-300 bg-brand-orange rounded-lg hover:shadow-[0_0_20px_rgba(251,146,60,0.4)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-600 hover:-translate-y-1 text-black hover:bg-white" type="button">
<span className="fr-text">Demander mon audit</span>
<span className="en-text">Request my audit</span>
<span className="es-text">Solicitar mi auditoría</span>
<span className="de-text">Audit anfordern</span>
<span className="cn-text">申请我的审计</span>
<iconify-icon className="ml-2" height="20" icon="solar:plain-3-linear" width="20"></iconify-icon>
</button>
</div>
<p className="text-center text-xs mt-4 text-stone-600">
<span className="fr-text">En envoyant ce formulaire, vous acceptez notre politique de confidentialité.</span>
<span className="en-text">By sending this form, you agree to our privacy policy.</span>
<span className="es-text">Al enviar este formulario, acepta nuestra política de privacidad.</span>
<span className="de-text">Mit dem Absenden stimmen Sie unserer Datenschutzerklärung zu.</span>
<span className="cn-text">发送此表格即表示您同意我们的隐私政策。</span>
</p>
</form>
</div>
</section>

<footer className="py-12 border-t bg-stone-100 text-stone-700 border-stone-200">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-1">
<div className="flex items-center gap-2 mb-6 group cursor-pointer">
<div className="text-brand-orange transition-transform duration-500 group-hover:rotate-12">
<iconify-icon height="24" icon="solar:butterfly-linear" width="24"></iconify-icon>
</div>
<span className="font-semibold tracking-tight text-black">PAPILLON MG</span>
</div>
<p className="text-sm leading-relaxed text-stone-600">
<span className="fr-text">Agence Webmarketing 4.0. Nous accélérons votre croissance grâce à l'IA.</span>
<span className="en-text">Webmarketing 4.0 Agency. Accelerating your growth with AI.</span>
<span className="es-text">Agencia Webmarketing 4.0. Aceleramos tu crecimiento con IA.</span>
<span className="de-text">Webmarketing 4.0 Agentur. Wir beschleunigen Ihr Wachstum mit KI.</span>
<span className="cn-text">网络营销 4.0 代理机构。我们利用人工智能加速您的增长。</span>
</p>
</div>
<div>
<h4 className="font-medium mb-4 text-black">
<span className="fr-text">Solutions IA</span>
<span className="en-text">AI Solutions</span>
<span className="es-text">Soluciones IA</span>
<span className="de-text">KI-Lösungen</span>
<span className="cn-text">AI 解决方案</span>
</h4>
<ul className="space-y-2 text-sm">
<li>
<a className="hover:text-brand-orange transition-colors hover:translate-x-1 inline-block" href="#">
<span className="fr-text">SEO Sémantique</span>
<span className="en-text">Semantic SEO</span>
<span className="es-text">SEO Semántico</span>
<span className="de-text">Semantisches SEO</span>
<span className="cn-text">语义 SEO</span>
</a>
</li>
<li>
<a className="hover:text-brand-orange transition-colors hover:translate-x-1 inline-block" href="#">
<span className="fr-text">Ads Prédictif</span>
<span className="en-text">Predictive Ads</span>
<span className="es-text">Anuncios Predictivos</span>
<span className="de-text">Prädiktive Ads</span>
<span className="cn-text">预测性广告</span>
</a>
</li>
<li>
<a className="hover:text-brand-orange transition-colors hover:translate-x-1 inline-block" href="#">
<span className="fr-text">Marketing Automation</span>
<span className="en-text">Marketing Automation</span>
<span className="es-text">Automatización</span>
<span className="de-text">Marketing Automation</span>
<span className="cn-text">营销自动化</span>
</a>
</li>
</ul>
</div>
<div>
<h4 className="font-medium mb-4 text-black">
<span className="fr-text">Agence</span>
<span className="en-text">Agency</span>
<span className="es-text">Agencia</span>
<span className="de-text">Agentur</span>
<span className="cn-text">代理</span>
</h4>
<ul className="space-y-2 text-sm">
<li>
<a className="hover:text-brand-orange transition-colors hover:translate-x-1 inline-block" href="#">
<span className="fr-text">Notre Approche</span>
<span className="en-text">Our Approach</span>
<span className="es-text">Nuestro Enfoque</span>
<span className="de-text">Unser Ansatz</span>
<span className="cn-text">我们的方法</span>
</a>
</li>
<li>
<a className="hover:text-brand-orange transition-colors hover:translate-x-1 inline-block" href="#">
<span className="fr-text">Carrières</span>
<span className="en-text">Careers</span>
<span className="es-text">Carreras</span>
<span className="de-text">Karriere</span>
<span className="cn-text">职业</span>
</a>
</li>
<li>
<a className="hover:text-brand-orange transition-colors hover:translate-x-1 inline-block" href="#">
<span className="fr-text">Blog IA &amp; Tech</span>
<span className="en-text">AI &amp; Tech Blog</span>
<span className="es-text">Blog IA &amp; Tech</span>
<span className="de-text">KI &amp; Tech Blog</span>
<span className="cn-text">AI &amp; 技术博客</span>
</a>
</li>
</ul>
</div>
<div>
<h4 className="font-medium mb-4 text-black">Contact</h4>
<ul className="space-y-2 text-sm">
<li className="flex items-center gap-2">
<iconify-icon height="16" icon="solar:letter-linear" width="16"></iconify-icon>
                            contact@papillon-mg.com
                        </li>
<li className="flex items-center gap-2">
<iconify-icon height="16" icon="solar:map-point-linear" width="16"></iconify-icon>
                            Paris, France
                        </li>
</ul>
<div className="flex gap-4 mt-6">
<a className="transition-all duration-300 hover:scale-110 text-stone-600 hover:text-black" href="#">
<iconify-icon height="22" icon="ri:linkedin-fill" width="22"></iconify-icon>
</a>
<a className="transition-all duration-300 hover:scale-110 text-stone-600 hover:text-black" href="#">
<iconify-icon height="20" icon="ri:twitter-x-fill" width="20"></iconify-icon>
</a>
<a className="transition-all duration-300 hover:scale-110 text-stone-600 hover:text-black" href="#">
<iconify-icon height="22" icon="ri:instagram-line" width="22"></iconify-icon>
</a>
</div>
</div>
</div>
<div className="pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 border-stone-200">
<p className="text-xs text-stone-500">© 2024 Papillon MG. <span className="fr-text">Tous droits réservés.</span><span className="en-text">All rights reserved.</span><span className="es-text">Reservados todos los derechos.</span><span className="de-text">Alle Rechte vorbehalten.</span><span className="cn-text">版权所有。</span></p>
<div className="flex gap-6 text-xs text-stone-500">
<a className="transition-colors hover:text-stone-700" href="#">
<span className="fr-text">Mentions Légales</span>
<span className="en-text">Legal</span>
<span className="es-text">Legal</span>
<span className="de-text">Impressum</span>
<span className="cn-text">法律声明</span>
</a>
<a className="transition-colors hover:text-stone-700" href="#">
<span className="fr-text">Confidentialité</span>
<span className="en-text">Privacy</span>
<span className="es-text">Privacidad</span>
<span className="de-text">Datenschutz</span>
<span className="cn-text">隐私</span>
</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
