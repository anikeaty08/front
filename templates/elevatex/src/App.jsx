import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



const app = {
    state: {
        lang: 'en',
        selectedExtension: '',
        activePage: 'home'
    },
    
    // Data definition with Feature Arrays for bullets
    phases: {
        en: {
            phase1: {
            name: "Website Creation",
            price: "€160",
            features: [
            "Clear structure for your business and content",
            "Clean, modern design tailored to your brand",
            "Fully responsive for mobile, tablet, and desktop",
            "Ready-to-use website, delivered and live"
            ]
            },
            phase2: {
            name: "Interactions & Experience",
            price: "€100 + optional €30–70 per element",
            features: [
            "Smooth animations that guide attention",
            "Polished transitions between sections",
            "Subtle interactive details for a premium feel",
            "Optional advanced visual effects if needed"
            ]
            },
            phase3: {
            name: "Systems & Integrations",
            price: "From €200",
            features: [
            "Contact forms and data handling",
            "Content management if you need to update text yourself",
            "Connections to external tools or services",
            "Basic analytics to understand visitor behavior"
            ]
            },
            optMobile: {
                name: "Dedicated Mobile Experience",
                price: "€120 – €140",
                features: ["Mobile-First Interaction Design", "Touch-Optimized Layouts", "App-like Navigation Structure", "Performance Logic for weak networks"]
            },
            optAnim: {
                name: "Additional Animations",
                price: "€20 – €90 per element",
                features: ["Complex SVG Animations", "WebGL / 3D Objects", "Custom Cursor Effects", "Interactive Data Visualization"]
            }
        },
        // Mapped structure for other languages (placeholders for brevity in this demo)
        de: { phase1: { name: "Webseite Erstellung", price: "€160", features: ["Struktur & Strategie", "Visuelles Design", "Responsives Layout", "Frontend Entwicklung"] } },
        ro: { phase1: { name: "Creare Website", price: "€160", features: ["Structură și Strategie", "Direcție Vizuală", "Adaptare Mobilă", "Frontend Gata de Producție"] } },
        id: { phase1: { name: "Pembuatan Website", price: "€160", features: ["Struktur & Strategi", "Desain Visual", "Layout Responsif", "Frontend Siap Produksi"] } }
    },

    translations: {
        en: {
            "nav.home": "Home", "nav.services": "Services", "nav.pricing": "Pricing", "nav.contact": "Get in touch",
            "common.featured": "Featured", "common.contact": "Contact Us",
            "modal.disclaimer": "Final scope and timing confirmed together.",
            "hero.title": "Refined <br> <span class='font-serif italic text-emerald-500/80 font-light pr-4'>digital</span> Presence.",
            "hero.desc": "We build premium, minimalist websites for businesses that understand the value of design. Clear scope. Realistic budgets. Uncompromising quality.",
            "home.divider": "<span class='text-zinc-600'>We don't just build sites.</span><br><span class='text-white'>We engineer <span class='text-emerald-400'>confidence</span>.</span>",
            "cta.button": "View Engagement Models",
            "project1.title": "Architectural Reform",
            "services.title": "Capabilities", "services.desc": "A modular approach to digital product creation. We strip away the unnecessary to focus on impact, performance, and longevity.",
            "services.disciplines": "Disciplines", "services.nav.strategy": "Strategy", "services.nav.interface": "Interface Design", "services.nav.development": "Development", "services.nav.optimization": "Optimization",
            "strategy.heading": "Focus on clarity and direction.", "strategy.body": "We define the foundation before any design or code begins. This includes understanding your business goals, audience, and constraints.", "strategy.item1": "Audit and insight", "strategy.item2": "Information architecture",
            "interface.heading": "Focus on visual clarity.", "interface.body": "We design clean, purpose-driven interfaces that balance aesthetics and usability. Every layout, grid, and interaction is intentional.", "interface.item1": "Visual systems and layout", "interface.item2": "Responsive design",
            "dev.heading": "Focus on structure.", "dev.body": "We build fast, reliable websites using modern technologies. Clean code, strong structure, and performance-first decisions ensure longevity.", "dev.item1": "Frontend development", "dev.item2": "Performance optimization",
            "opt.heading": "Focus on refinement.", "opt.body": "We improve and refine based on real usage. Optimization ensures your site stays fast, relevant, and effective over time.", "opt.item1": "Performance tuning", "opt.item2": "SEO fundamentals",
            "pricing.title": "Project Phases", "pricing.desc": "We work in clearly defined phases. Each phase is billed separately and builds on the previous one.",
            "phase1.name": "Website Creation", "phase1.price": "€160", "phase1.descShort": "A complete, professional website foundation.",
            "phase2.name": "Interactions", "phase2.descShort": "Animations and interaction systems.",
            "phase3.name": "Systems", "phase3.price": "From €200", "phase3.descShort": "Backend connections and business logic.",
            "opt.title": "Optional Extensions", "optMobile.name": "Dedicated Mobile Experience", "optMobile.price": "€120 – €140", "optAnim.name": "Additional Animations", "optAnim.price": "€20 – €90",
            "footer.tagline": "Building the internet, one pixel at a time.", "footer.privacy": "Privacy", "footer.terms": "Terms"
        },
        ro: { "nav.home": "Acasă", "nav.services": "Servicii", "nav.pricing": "Investiție", "hero.title": "Prezență <br> <span class='font-serif italic text-emerald-500/80 font-light pr-4'>digitală</span> Rafinată.", "pricing.title": "Etapele Proiectului" },
        de: { "nav.home": "Startseite", "nav.services": "Leistungen", "nav.pricing": "Preise", "hero.title": "Raffinierte <br> <span class='font-serif italic text-emerald-500/80 font-light pr-4'>digitale</span> Präsenz.", "pricing.title": "Projektphasen" },
        id: { "nav.home": "Beranda", "nav.services": "Layanan", "nav.pricing": "Harga", "hero.title": "Presensi <br> <span class='font-serif italic text-emerald-500/80 font-light pr-4'>digital</span> Elegan.", "pricing.title": "Fase Proyek" }
    },

    init() {
        this.detectLanguage();
        this.applyLanguage();
        this.initObserver();

        document.getElementById('lang-switcher').onclick = (e) => {
            e.stopPropagation();
            document.getElementById('lang-menu').classList.toggle('hidden');
        };
        window.onclick = () => document.getElementById('lang-menu').classList.add('hidden');
    },

    initObserver() {
        const options = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                    observer.unobserve(entry.target);
                }
            });
        }, options);
        document.querySelectorAll('.reveal-item').forEach(el => observer.observe(el));
    },


    navigateTo(targetId) {
    if (this.state.activePage === targetId) return;
    
    const current = document.getElementById(this.state.activePage);
    const next = document.getElementById(targetId);
    
    // Update Nav State safely
    document.querySelectorAll('.nav-link').forEach(btn => {
    const isActive = btn.getAttribute('onclick')?.includes(targetId);
    btn.classList.toggle('is-active', isActive);
    });
    
    current.style.opacity = '0';
    
    setTimeout(() => {
    current.classList.add('hidden');
    current.classList.remove('flex', 'block');
    
    next.classList.remove('hidden');
    if (targetId === 'home') next.classList.add('flex');
    else next.classList.add('block');
    
    void next.offsetWidth;
    next.style.opacity = '1';
    
    window.scrollTo({ top: 0 });
    this.state.activePage = targetId;
    this.initObserver();
    }, 300);
    }

    switchDiscipline(id) {
        const allIds = ['strategy', 'interface', 'development', 'optimization'];
        allIds.forEach(key => {
            const btn = document.getElementById(`btn-${key}`);
            const dot = document.getElementById(`dot-${key}`);
            const content = document.getElementById(`content-${key}`);
            
            if (key === id) {
                btn.classList.remove('text-zinc-500');
                btn.classList.add('text-white');
                dot.classList.remove('opacity-0');
                content.classList.remove('hidden');
                requestAnimationFrame(() => content.classList.remove('opacity-0', 'translate-y-8'));
            } else {
                btn.classList.add('text-zinc-500');
                btn.classList.remove('text-white');
                dot.classList.add('opacity-0');
                content.classList.add('opacity-0', 'translate-y-8');
                setTimeout(() => content.classList.add('hidden'), 500);
            }
        });
    },

    openModal(key) {
        // Get structured phase data first, fallback to basic translations
        const phases = this.phases[this.state.lang] || this.phases['en'];
        const fallbackPhases = this.phases['en'];
        
        const data = phases[key] || fallbackPhases[key];

        if (!data) return;

        this.state.selectedExtension = data.name;

        document.getElementById('modal-title').textContent = data.name;
        document.getElementById('modal-price').textContent = data.price;
        
        // Generate Features List with Animation
        const list = document.getElementById('modal-features');
        list.innerHTML = '';
        
        if (data.features && data.features.length > 0) {
            data.features.forEach((feat, index) => {
                const li = document.createElement('li');
                li.className = 'feature-item flex items-start gap-4 text-zinc-300';
                li.innerHTML = `
                    <div class="min-w-[20px] pt-1">
                        <iconify-icon icon="solar:check-circle-bold" class="text-emerald-500 text-lg drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]"></iconify-icon>
                    </div>
                    <span class="text-sm font-light leading-relaxed">${feat}</span>
                `;
                list.appendChild(li);
                
                // Staggered Animation
                setTimeout(() => {
                    li.classList.add('show');
                }, 100 + (index * 80));
            });
        }

        const modal = document.getElementById('extension-modal');
        const content = document.getElementById('modal-content');
        
        modal.classList.remove('hidden');
        void modal.offsetWidth;
        modal.classList.remove('opacity-0');
        content.classList.remove('scale-95', 'translate-y-4');
        content.classList.add('scale-100', 'translate-y-0');
    },

    closeModal() {
        const modal = document.getElementById('extension-modal');
        const content = document.getElementById('modal-content');
        
        modal.classList.add('opacity-0');
        content.classList.remove('scale-100', 'translate-y-0');
        content.classList.add('scale-95', 'translate-y-4');
        
        setTimeout(() => modal.classList.add('hidden'), 300);
    },

    handleExtensionCTA() {
        const phone = '4917684262753';
        const msg = `Hi, I am interested in "${this.state.selectedExtension}" (${this.state.lang.toUpperCase()}).`;
        window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`, '_blank');
        this.closeModal();
    },

    detectLanguage() {
        const saved = localStorage.getItem('elevatex_lang');
        const supported = ['en', 'ro', 'de', 'id'];
        if (saved && supported.includes(saved)) {
            this.state.lang = saved;
        }
    },

    setLang(lang) {
        this.state.lang = lang;
        localStorage.setItem('elevatex_lang', lang);
        this.applyLanguage();
        document.getElementById('lang-menu').classList.add('hidden');
    },

    applyLanguage() {
        const lang = this.state.lang;
        const dict = this.translations[lang] || this.translations['en'];
        const enDict = this.translations['en'];

        document.getElementById('current-lang-display').textContent = lang.toUpperCase();

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            const val = dict[key] || enDict[key];
            if (val) el.innerHTML = val;
        });
    },
    
    toggleMobileMenu() {
        const menu = document.getElementById('mobile-menu');
        if (menu.classList.contains('hidden')) {
            menu.classList.remove('hidden', 'opacity-0');
            menu.classList.add('flex');
        } else {
            menu.classList.add('opacity-0');
            setTimeout(() => {
                menu.classList.add('hidden');
                menu.classList.remove('flex');
            }, 300);
        }
    },
    
    mobileNav(target) {
        this.navigateTo(target);
        this.toggleMobileMenu();
    },
    
    handleLogoClick(e) {
        e.preventDefault();
        this.navigateTo('home');
    },
    
    scrollToContact() {
        this.navigateTo('home');
        setTimeout(() => {
            document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
        }, 100);
    }
};

document.addEventListener('DOMContentLoaded', () => {
    app.init();
});
window.addEventListener('scroll', () => {
document.querySelectorAll('.parallax-slow').forEach(el => {
const y = window.scrollY * 0.04;
el.style.transform = `translateY(${y}px)`;
});
});

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="bg-grid"></div>

<nav className="fixed top-0 w-full z-50 glass-nav transition-all duration-300">
<div className="flex h-16 max-w-6xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">

<a className="text-lg font-bold tracking-tight text-white flex items-center gap-1 group select-none" href="#" onclick="app.handleLogoClick(event)">
        Elevate<span className="group-hover:text-emerald-400 transition-colors duration-300">X</span>
</a>

<div className="hidden md:flex gap-8 text-xs font-medium text-zinc-400 gap-x-8 gap-y-8 items-center">

<button className="nav-link" data-i18n="nav.home" onclick="app.navigateTo('home')">Home</button>

<button className="nav-link hover:text-emerald-400 transition-colors" data-i18n="nav.services" onclick="app.navigateTo('services')">Services</button>

<button className="nav-link hover:text-emerald-400 transition-colors [--fx-filter:blur(10px)_liquid-glass(0,10)_saturate(1.25)_noise(0.5,1,0)]" data-i18n="nav.pricing" onclick="app.navigateTo('pricing')">Pricing</button>
</div>

<div className="flex items-center gap-4">

<div className="relative group">
<button className="text-xs text-zinc-500 hover:text-emerald-400 flex items-center gap-1 transition-colors uppercase tracking-wider py-2" id="lang-switcher">
<span id="current-lang-display">EN</span>
<iconify-icon icon="solar:alt-arrow-down-linear" width="10"></iconify-icon>
</button>
<div className="hidden absolute right-0 top-full mt-1 bg-[#0f0f11] border border-zinc-800 rounded-lg p-1 min-w-[80px] shadow-xl transform origin-top-right transition-all z-50" id="lang-menu">
<button className="w-full text-left px-3 py-1.5 text-xs text-zinc-400 hover:bg-zinc-800 hover:text-white rounded-md transition-colors" onclick="app.setLang('en')">EN</button>
<button className="w-full text-left px-3 py-1.5 text-xs text-zinc-400 hover:bg-zinc-800 hover:text-white rounded-md transition-colors" onclick="app.setLang('de')">DE</button>
<button className="w-full text-left px-3 py-1.5 text-xs text-zinc-400 hover:bg-zinc-800 hover:text-white rounded-md transition-colors" onclick="app.setLang('ro')">RO</button>
<button className="w-full text-left px-3 py-1.5 text-xs text-zinc-400 hover:bg-zinc-800 hover:text-white rounded-md transition-colors" onclick="app.setLang('id')">ID</button>
</div>
</div>


<button className="md:hidden text-white hover:text-emerald-400 transition-colors pt-1" onclick="app.toggleMobileMenu()">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
<button className="hidden md:flex items-center gap-2 bg-white text-black px-5 py-2 rounded-full text-xs font-semibold hover:bg-emerald-400 hover:text-black transition-all duration-300" onclick="app.scrollToContact()">
<span data-i18n="nav.contact">Get in touch</span>
<iconify-icon icon="solar:arrow-right-linear" width="14"></iconify-icon>
</button>
</div>
</div>
</nav>

<div className="fixed inset-0 bg-black/95 backdrop-blur-xl z-40 hidden flex-col pt-24 px-8 opacity-0 transition-opacity duration-300" id="mobile-menu">
<div className="flex flex-col gap-8 text-3xl font-light tracking-tight text-white">
<button className="text-left hover:text-emerald-400 transition-colors" data-i18n="nav.home" onclick="app.mobileNav('home')">Home</button>
<button className="text-left hover:text-emerald-400 transition-colors" data-i18n="nav.services" onclick="app.mobileNav('services')">Services</button>
<button className="text-left hover:text-emerald-400 transition-colors" data-i18n="nav.pricing" onclick="app.mobileNav('pricing')">Pricing</button>
<button className="text-left text-zinc-500 hover:text-white transition-colors" data-i18n="nav.contact" onclick="app.scrollToContact(); app.toggleMobileMenu()">Get in touch</button>
</div>
</div>

<main className="w-full">

<section className="page-content min-h-screen pt-32 pb-20 px-6 max-w-6xl mx-auto flex flex-col justify-between" id="home">
<div className="max-w-4xl reveal-item">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[10px] uppercase tracking-widest text-emerald-400 mb-6 font-semibold">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
    Available for new projects
  </div>
<h1 className="text-5xl md:text-8xl font-medium tracking-tighter text-white leading-[1.05] mb-8">
<span className="hero-line reveal-item"><span>Refined</span></span>
<span className="hero-line reveal-item">
<span className="font-serif italic text-emerald-500/80 font-light pr-4">digital</span>
</span>
<span className="hero-line reveal-item"><span>Presence.</span></span>
</h1>
<p className="text-lg md:text-xl text-zinc-400 font-light max-w-xl leading-relaxed text-balance border-l-2 border-zinc-800 pl-6 fade-up reveal-item">
    We build premium, minimalist websites for businesses that understand the value of design.
    Clear scope. Realistic budgets. Uncompromising quality.
  </p>
</div>
<div className="mt-20 md:mt-24 grid md:grid-cols-2 gap-12 reveal-item">
<div className="flex flex-col justify-end">
<h2 className="text-2xl font-light leading-snug tracking-tight mb-8" data-i18n="home.divider"><span className="text-zinc-600">We don't just build sites.</span><br/><span className="text-white">We engineer <span className="text-emerald-400">confidence</span>.</span></h2>
<button className="w-fit group flex items-center gap-2 text-white border-b border-zinc-700 pb-1 hover:border-emerald-400 hover:text-emerald-400 transition-all" onclick="app.navigateTo('pricing')">
<span className="text-sm" data-i18n="cta.button">View Engagement Models</span>
<iconify-icon className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" icon="solar:arrow-right-up-linear"></iconify-icon>
</button>
</div>

<div className="relative aspect-video bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 group cursor-pointer glow-hover transition-all duration-500 parallax-slow bg-noise">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-900/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="absolute bottom-6 left-6 z-10">
<p className="text-[10px] text-emerald-400 mb-2 uppercase tracking-widest font-bold" data-i18n="common.featured">Featured</p>
<h3 className="text-white text-xl font-medium tracking-tight" data-i18n="project1.title">Architectural Reform</h3>
</div>
<div className="absolute top-6 right-6 z-10">
<div className="w-10 h-10 rounded-full bg-black/50 border border-zinc-700 text-white flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-black group-hover:border-emerald-400 transition-all duration-300">
<iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</div>
</div>

<div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:opacity-30 group-hover:scale-105 transition-all duration-700">
<div className="w-64 h-64 border border-zinc-700 rounded-full"></div>
<div className="absolute w-48 h-48 border border-zinc-600 rounded-full"></div>
</div>
</div>
</div>
</section>

<section className="page-content hidden min-h-screen pt-32 pb-20 px-6 max-w-6xl mx-auto" id="services">
<div className="mb-20 reveal-item">
<h1 className="text-4xl md:text-6xl font-medium tracking-tighter text-white mb-6" data-i18n="services.title">Capabilities</h1>
<p className="text-zinc-400 max-w-2xl text-lg font-light leading-relaxed" data-i18n="services.desc">A modular approach to digital product creation. We strip away the unnecessary to focus on impact, performance, and longevity.</p>
</div>
<div className="grid md:grid-cols-12 gap-16 reveal-item">

<div className="md:col-span-4 flex flex-col gap-1 border-l border-zinc-800 pl-8 h-fit sticky top-32">
<span className="text-xs font-bold uppercase tracking-widest text-zinc-600 mb-6" data-i18n="services.disciplines">Disciplines</span>
<button className="service-btn text-left text-sm py-3 text-white transition-colors relative flex items-center gap-4 group" id="btn-strategy" onclick="app.switchDiscipline('strategy')">
<span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.5)] transition-all" id="dot-strategy"></span>
<span className="group-hover:text-emerald-300 transition-colors" data-i18n="services.nav.strategy">Strategy</span>
</button>
<button className="service-btn text-left text-sm py-3 text-zinc-500 hover:text-white transition-colors relative flex items-center gap-4 group" id="btn-interface" onclick="app.switchDiscipline('interface')">
<span className="w-2 h-2 rounded-full bg-emerald-400 opacity-0 transition-all" id="dot-interface"></span>
<span className="group-hover:text-emerald-300 transition-colors" data-i18n="services.nav.interface">Interface Design</span>
</button>
<button className="service-btn text-left text-sm py-3 text-zinc-500 hover:text-white transition-colors relative flex items-center gap-4 group" id="btn-development" onclick="app.switchDiscipline('development')">
<span className="w-2 h-2 rounded-full bg-emerald-400 opacity-0 transition-all" id="dot-development"></span>
<span className="group-hover:text-emerald-300 transition-colors" data-i18n="services.nav.development">Development</span>
</button>
<button className="service-btn text-left text-sm py-3 text-zinc-500 hover:text-white transition-colors relative flex items-center gap-4 group" id="btn-optimization" onclick="app.switchDiscipline('optimization')">
<span className="w-2 h-2 rounded-full bg-emerald-400 opacity-0 transition-all" id="dot-optimization"></span>
<span className="group-hover:text-emerald-300 transition-colors" data-i18n="services.nav.optimization">Optimization</span>
</button>
</div>

<div className="md:col-span-8 min-h-[400px] relative">

<div className="service-content transition-all duration-500 absolute inset-0" id="content-strategy">
<div className="w-14 h-14 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-emerald-400 mb-8 shadow-lg shadow-emerald-900/10">
<iconify-icon icon="solar:compass-linear" width="28"></iconify-icon>
</div>
<h3 className="text-3xl font-medium text-white mb-6 tracking-tight" data-i18n="strategy.heading">Focus on clarity and direction.</h3>
<p className="text-zinc-400 leading-relaxed mb-10 text-lg font-light" data-i18n="strategy.body">We define the foundation before any design or code begins. This includes understanding your business goals, audience, and constraints.</p>
<div className="space-y-4 border-t border-zinc-800 pt-8">
<div className="flex items-center gap-4 text-zinc-300">
<iconify-icon className="text-emerald-500 text-xl" icon="solar:check-circle-bold"></iconify-icon>
<span data-i18n="strategy.item1">Audit and insight</span>
</div>
<div className="flex items-center gap-4 text-zinc-300">
<iconify-icon className="text-emerald-500 text-xl" icon="solar:check-circle-bold"></iconify-icon>
<span data-i18n="strategy.item2">Information architecture</span>
</div>
</div>
</div>

<div className="service-content hidden opacity-0 translate-y-8 transition-all duration-500 absolute inset-0" id="content-interface">
<div className="w-14 h-14 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-emerald-400 mb-8 shadow-lg shadow-emerald-900/10">
<iconify-icon icon="solar:layers-minimalistic-linear" width="28"></iconify-icon>
</div>
<h3 className="text-3xl font-medium text-white mb-6 tracking-tight" data-i18n="interface.heading">Focus on visual clarity.</h3>
<p className="text-zinc-400 leading-relaxed mb-10 text-lg font-light" data-i18n="interface.body">We design clean, purpose-driven interfaces that balance aesthetics and usability. Every layout, grid, and interaction is intentional.</p>
<div className="space-y-4 border-t border-zinc-800 pt-8">
<div className="flex items-center gap-4 text-zinc-300">
<iconify-icon className="text-emerald-500 text-xl" icon="solar:check-circle-bold"></iconify-icon>
<span data-i18n="interface.item1">Visual systems and layout</span>
</div>
<div className="flex items-center gap-4 text-zinc-300">
<iconify-icon className="text-emerald-500 text-xl" icon="solar:check-circle-bold"></iconify-icon>
<span data-i18n="interface.item2">Responsive design</span>
</div>
</div>
</div>

<div className="service-content hidden opacity-0 translate-y-8 transition-all duration-500 absolute inset-0" id="content-development">
<div className="w-14 h-14 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-emerald-400 mb-8 shadow-lg shadow-emerald-900/10">
<iconify-icon icon="solar:code-circle-linear" width="28"></iconify-icon>
</div>
<h3 className="text-3xl font-medium text-white mb-6 tracking-tight" data-i18n="dev.heading">Focus on structure.</h3>
<p className="text-zinc-400 leading-relaxed mb-10 text-lg font-light" data-i18n="dev.body">We build fast, reliable websites using modern technologies. Clean code, strong structure, and performance-first decisions ensure longevity.</p>
<div className="space-y-4 border-t border-zinc-800 pt-8">
<div className="flex items-center gap-4 text-zinc-300">
<iconify-icon className="text-emerald-500 text-xl" icon="solar:check-circle-bold"></iconify-icon>
<span data-i18n="dev.item1">Frontend development</span>
</div>
<div className="flex items-center gap-4 text-zinc-300">
<iconify-icon className="text-emerald-500 text-xl" icon="solar:check-circle-bold"></iconify-icon>
<span data-i18n="dev.item2">Performance optimization</span>
</div>
</div>
</div>

<div className="service-content hidden opacity-0 translate-y-8 transition-all duration-500 absolute inset-0" id="content-optimization">
<div className="w-14 h-14 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-emerald-400 mb-8 shadow-lg shadow-emerald-900/10">
<iconify-icon icon="solar:graph-up-linear" width="28"></iconify-icon>
</div>
<h3 className="text-3xl font-medium text-white mb-6 tracking-tight" data-i18n="opt.heading">Focus on refinement.</h3>
<p className="text-zinc-400 leading-relaxed mb-10 text-lg font-light" data-i18n="opt.body">We improve and refine based on real usage. Optimization ensures your site stays fast, relevant, and effective over time.</p>
<div className="space-y-4 border-t border-zinc-800 pt-8">
<div className="flex items-center gap-4 text-zinc-300">
<iconify-icon className="text-emerald-500 text-xl" icon="solar:check-circle-bold"></iconify-icon>
<span data-i18n="opt.item1">Performance tuning</span>
</div>
<div className="flex items-center gap-4 text-zinc-300">
<iconify-icon className="text-emerald-500 text-xl" icon="solar:check-circle-bold"></iconify-icon>
<span data-i18n="opt.item2">SEO fundamentals</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="page-content hidden min-h-screen pt-32 pb-20 px-6 max-w-6xl mx-auto" id="pricing">
<div className="mb-20 reveal-item">
<h1 className="text-4xl md:text-6xl font-medium tracking-tighter text-white mb-6" data-i18n="pricing.title">Project Phases</h1>
<p className="text-zinc-400 max-w-xl text-lg font-light" data-i18n="pricing.desc">We work in clearly defined phases. Each phase is billed separately and builds on the previous one.</p>
</div>
<div className="grid md:grid-cols-3 gap-6 mb-20 reveal-item">

<div className="group p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800 hover:border-emerald-500/50 hover:bg-zinc-900/60 transition-all duration-300 cursor-pointer relative overflow-hidden" onclick="app.openModal('phase1')">
<div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl -mr-16 -mt-16 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="flex justify-between items-start mb-8 relative">
<span className="text-xs font-bold text-zinc-600 group-hover:text-emerald-400 uppercase tracking-widest transition-colors">PHASE 01</span>
<iconify-icon className="text-zinc-600 group-hover:text-emerald-400 text-xl transition-colors" icon="solar:add-circle-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2" data-i18n="phase1.name">Website Creation</h3>
<p className="text-2xl font-light text-white mb-6 group-hover:text-emerald-400 transition-colors" data-i18n="phase1.price">€160</p>
<p className="text-sm text-zinc-400 leading-relaxed font-light" data-i18n="phase1.descShort">A complete, professional website foundation.</p>
</div>

<div className="group p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800 hover:border-emerald-500/50 hover:bg-zinc-900/60 transition-all duration-300 cursor-pointer relative overflow-hidden" onclick="app.openModal('phase2')">
<div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl -mr-16 -mt-16 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="flex justify-between items-start mb-8 relative">
<span className="text-xs font-bold text-zinc-600 group-hover:text-emerald-400 uppercase tracking-widest transition-colors">PHASE 02</span>
<iconify-icon className="text-zinc-600 group-hover:text-emerald-400 text-xl transition-colors" icon="solar:add-circle-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2" data-i18n="phase2.name">Interactions</h3>
<p className="text-2xl font-light text-white mb-6 group-hover:text-emerald-400 transition-colors">€100</p>
<p className="text-sm text-zinc-400 leading-relaxed font-light" data-i18n="phase2.descShort">Animations and interaction systems.</p>
</div>

<div className="group p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800 hover:border-emerald-500/50 hover:bg-zinc-900/60 transition-all duration-300 cursor-pointer relative overflow-hidden" onclick="app.openModal('phase3')">
<div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl -mr-16 -mt-16 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="flex justify-between items-start mb-8 relative">
<span className="text-xs font-bold text-zinc-600 group-hover:text-emerald-400 uppercase tracking-widest transition-colors">PHASE 03</span>
<iconify-icon className="text-zinc-600 group-hover:text-emerald-400 text-xl transition-colors" icon="solar:add-circle-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2" data-i18n="phase3.name">Systems</h3>
<p className="text-2xl font-light text-white mb-6 group-hover:text-emerald-400 transition-colors" data-i18n="phase3.price">From €200</p>
<p className="text-sm text-zinc-400 leading-relaxed font-light" data-i18n="phase3.descShort">Backend connections and business logic.</p>
</div>
</div>
<div className="reveal-item">
<h2 className="text-sm font-bold uppercase tracking-widest text-zinc-600 mb-8" data-i18n="opt.title">Optional Extensions</h2>
<div className="space-y-4">
<div className="flex items-center justify-between p-5 border-b border-zinc-800 hover:bg-zinc-900/50 cursor-pointer transition-all duration-300 group hover:pl-6" onclick="app.openModal('optMobile')">
<div className="flex items-center gap-5">
<div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-500 group-hover:text-emerald-400 group-hover:bg-zinc-800 transition-colors">
<iconify-icon icon="solar:smartphone-linear" width="20"></iconify-icon>
</div>
<span className="text-zinc-300 group-hover:text-white transition-colors text-base" data-i18n="optMobile.name">Dedicated Mobile Experience</span>
</div>
<div className="flex items-center gap-4">
<span className="text-zinc-500 text-sm group-hover:text-emerald-400 transition-colors" data-i18n="optMobile.price">€120 – €140</span>
<iconify-icon className="text-emerald-400 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
<div className="flex items-center justify-between p-5 border-b border-zinc-800 hover:bg-zinc-900/50 cursor-pointer transition-all duration-300 group hover:pl-6" onclick="app.openModal('optAnim')">
<div className="flex items-center gap-5">
<div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-500 group-hover:text-emerald-400 group-hover:bg-zinc-800 transition-colors">
<iconify-icon icon="solar:magic-stick-linear" width="20"></iconify-icon>
</div>
<span className="text-zinc-300 group-hover:text-white transition-colors text-base" data-i18n="optAnim.name">Additional Animations</span>
</div>
<div className="flex items-center gap-4">
<span className="text-zinc-500 text-sm group-hover:text-emerald-400 transition-colors" data-i18n="optAnim.price">€20 – €90</span>
<iconify-icon className="text-emerald-400 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="page-content px-6 pb-12 pt-20 max-w-6xl mx-auto border-t border-zinc-900 mt-32" id="contact">
<div className="flex flex-col md:flex-row justify-between items-end gap-12">
<div>
<p className="text-zinc-500 text-sm mb-6" data-i18n="footer.tagline">Building the internet, one pixel at a time.</p>
<a className="text-3xl md:text-4xl text-white hover:text-emerald-400 transition-colors font-medium tracking-tight" href="mailto:hello@elevatex.studio">hello@elevatex.studio</a>
</div>
<div className="flex gap-8 text-xs font-medium text-zinc-600 uppercase tracking-widest">
<a className="hover:text-white transition-colors" data-i18n="footer.privacy" href="#">Privacy</a>
<a className="hover:text-white transition-colors" data-i18n="footer.terms" href="#">Terms</a>
</div>
</div>
</section>
</main>

<div aria-modal="true" className="fixed inset-0 z-[60] hidden transition-all duration-300 opacity-0" id="extension-modal">
<div className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-300" onclick="app.closeModal()"></div>
<div className="absolute inset-0 flex items-center justify-center p-4">
<div className="bg-[#0f0f11] border border-zinc-800 w-full max-w-lg rounded-2xl shadow-2xl transform scale-95 translate-y-4 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] overflow-hidden" id="modal-content">
<div className="p-8">
<div className="flex justify-between items-start mb-8">
<div>
<h3 className="text-2xl font-medium text-white mb-2 tracking-tight" id="modal-title">Title</h3>
<p className="text-emerald-400 font-normal text-lg" id="modal-price">Price</p>
</div>
<button className="text-zinc-500 hover:text-white transition-colors bg-zinc-900 rounded-full p-2" onclick="app.closeModal()">
<iconify-icon icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
</div>
<div className="min-h-[120px] mb-8">
<ul className="space-y-4" id="modal-features">

</ul>
</div>
<div className="flex items-center justify-between pt-6 border-t border-zinc-800">
<p className="text-xs text-zinc-500" data-i18n="modal.disclaimer">Final scope and timing confirmed together.</p>
<button className="bg-white text-black px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-emerald-400 hover:shadow-[0_0_20px_rgba(52,211,153,0.4)] transition-all duration-300 flex items-center gap-2" onclick="app.handleExtensionCTA()">
<span data-i18n="common.contact">Contact Us</span>
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
