import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
serif: ['"Playfair Display"', 'serif'],
sans: ['"Inter"', 'sans-serif'],
},
colors: {
agro: {
primary: '#164e38', // Deep green
secondary: '#F5F2EA', // Beige
accent: '#D4B886', // Wheat
dark: '#2D2A26', // Charcoal text
surface: '#EBE8DF', // Slightly darker beige
light: '#FAF9F6', // Off-white
}
},
letterSpacing: {
tight: '-0.025em',
tighter: '-0.05em',
},
animation: {
'fade-in': 'fadeIn 0.8s ease-out forwards',
'slide-up': 'slideUp 0.8s ease-out forwards',
},
keyframes: {
fadeIn: {
'0%': { opacity: '0' },
'100%': { opacity: '1' },
},
slideUp: {
'0%': { transform: 'translateY(20px)', opacity: '0' },
'100%': { transform: 'translateY(0)', opacity: '1' },
}
}
}
}
}



{
"@context": "https://schema.org",
"@type": "Organization",
"name": "BOHEMIA VITAE Jindřichův Hradec, a.s.",
"legalName": "BOHEMIA VITAE Jindřichův Hradec, a.s.",
"url": "https://www.bohemiavitae.cz",
"logo": "",
"contactPoint": {
"@type": "ContactPoint",
"telephone": "+420 384 324 780",
"contactType": "customer service",
"areaServed": "CZ",
"availableLanguage": "Czech"
},
"address": {
"@type": "PostalAddress",
"streetAddress": "Jarošov nad Nežárkou 239",
"addressLocality": "Jarošov nad Nežárkou",
"postalCode": "378 41",
"addressCountry": "CZ"
}
}



        // --- Data for Cards (Czech) ---
        const services = [
            // Row 1
            {
                id: 1,
                title: "Rostlinná výroba",
                subtitle: "Obiloviny a krmiva",
                icon: "wheat",
                image: "/assets/focus-1.jpg",
                desc: "Základem naší produkce je pěstování obilovin, řepky a kukuřice na více než 3 500 hektarech. Používáme moderní technologie precizního zemědělství, které šetří životní prostředí a zvyšují efektivitu.",
                points: ["3 500 ha orné půdy", "Vlastní osiva", "Udržitelná péče o půdu"]
            },
            {
                id: 2,
                title: "Chov drůbeže",
                subtitle: "Vejce a brojleři",
                icon: "egg",
                image: "/assets/focus-2.jpg",
                desc: "Produkujeme kvalitní česká vejce a drůbeží maso. Naše chovy podléhají přísným veterinárním kontrolám a drůbež je krmena směsmi z naší vlastní výrobny.",
                points: ["Denní produkce čerstvých vajec", "Vlastní krmné směsi", "Přísné hygienické normy"]
            },
            {
                id: 3,
                title: "Chov prasat",
                subtitle: "Jatečné maso",
                icon: "piggy-bank", 
                image: "/assets/focus-3.jpg",
                desc: "Zaměřujeme se na výkrm prasat s důrazem na kvalitu masa (masnatost). Spolupracujeme s regionálními jatkami a zásobujeme i vlastní podnikovou prodejnu.",
                points: ["Genetika s vysokou masnatostí", "Welfare zvířat", "Lokální distribuce"]
            },
            {
                id: 4,
                title: "Podniková prodejna",
                subtitle: "Přímý prodej",
                icon: "store",
                image: "/assets/focus-4.jpg",
                desc: "Zkracujeme cestu k zákazníkovi. V Jindřichově Hradci nabízíme kompletní sortiment našich produktů zaručené čerstvosti.",
                points: ["Čerstvá vejce a maso", "Sezónní produkty", "Nízká uhlíková stopa"]
            },
            // Row 2
            {
                id: 5,
                title: "Živočišná výroba",
                subtitle: "Živočišné produkty",
                icon: "milk", 
                image: "/assets/focus-5.jpg",
                desc: "Kromě drůbeže a prasat se věnujeme i chovu skotu. Zajišťujeme produkci mléka a masa v souladu s nejvyššími standardy.",
                points: ["Produkce mléka", "Chov skotu na maso", "Moderní stáje"]
            },
            {
                id: 6,
                title: "Skladování",
                subtitle: "Sila a uskladnění",
                icon: "warehouse",
                image: "/assets/focus-6.jpg",
                desc: "Disponujeme posklizňovými linkami a skladovacími kapacitami, které nám umožňují uchovat kvalitu zrna po celý rok.",
                points: ["Kapacita 20 000+ tun", "Laboratorní kontrola", "Čištění a sušení"]
            },
            {
                id: 7,
                title: "Logistika",
                subtitle: "Distribuce a doprava",
                icon: "truck",
                image: "/assets/focus-7.jpg",
                desc: "Vlastní autodoprava zajišťuje flexibilní distribuci krmiv, zvířat i rostlinných komodit k našim partnerům.",
                points: ["Specializované vozy", "Rozvoz krmiv", "Svoz komodit z pole"]
            },
            {
                id: 8,
                title: "Servis a technika",
                subtitle: "Údržba a stroje",
                icon: "settings",
                image: "/assets/focus-8.jpg",
                desc: "Naše servisní středisko se stará o údržbu zemědělské techniky a zajišťuje plynulý chod všech operací.",
                points: ["Opravy traktorů", "Svářečské práce", "Prodej náhradních dílů"]
            }
        ];

        // --- Init & Grid Rendering ---
        const container = document.getElementById('cards-grid');
        
        // Render grid items
        services.forEach((service, index) => {
            const card = document.createElement('div');
            // Classes for card style
            card.className = `group bg-agro-light p-6 rounded-xl border border-agro-dark/5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col items-start gap-4 h-full relative overflow-hidden`;
            
            // Accessibility
            card.setAttribute('role', 'button');
            card.setAttribute('aria-expanded', 'false');
            card.setAttribute('aria-controls', 'expand-panel');
            card.setAttribute('tabindex', '0');
            card.id = `card-${service.id}`;
            
            card.innerHTML = `
                <div class="p-3 bg-white rounded-lg text-agro-primary group-hover:bg-agro-primary group-hover:text-white transition-colors duration-300 shadow-sm border border-agro-dark/5">
                    <i data-lucide="${service.icon}" class="w-6 h-6" stroke-width="1.5"></i>
                </div>
                <div>
                    <h3 class="font-serif text-lg text-agro-dark font-medium group-hover:text-agro-primary transition-colors tracking-tight">${service.title}</h3>
                    <p class="text-sm text-agro-dark/60 mt-1 font-light">${service.subtitle}</p>
                </div>
                <div class="mt-auto pt-2 flex items-center text-xs font-semibold uppercase tracking-wider text-agro-accent group-hover:text-agro-primary transition-colors">
                    Zobrazit detail
                </div>
            `;
            
            // Click Logic
            card.onclick = () => handleCardClick(service.id);
            // Keyboard Logic
            card.onkeydown = (e) => {
                if(e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleCardClick(service.id);
                }
            };
            
            container.appendChild(card);
        });

        // --- Panel Logic ---
        let activeCardId = null;

        function handleCardClick(id) {
            const panel = document.getElementById('expand-panel');
            const contentWrapper = document.getElementById('panel-content-wrapper');
            const panelImage = document.getElementById('panel-image');
            
            // If clicking same card, scroll to panel
            if (activeCardId === id && panel.style.maxHeight !== '0px') {
                panel.scrollIntoView({ behavior: 'smooth', block: 'center' });
                return;
            }

            // Logic to swap content
            const service = services.find(s => s.id === id);
            
            // If panel is closed
            if (!activeCardId || panel.style.maxHeight === '0px') {
                populatePanel(service);
                openPanel();
                activeCardId = id;
            } else {
                // Panel is open, different card -> Animate Out, Swap, Animate In
                contentWrapper.style.opacity = '0';
                contentWrapper.style.transform = 'translateX(20px)';
                panelImage.style.opacity = '0';
                panelImage.style.transform = 'translateX(-20px)';
                
                setTimeout(() => {
                    populatePanel(service);
                    // Fade back in
                    contentWrapper.style.opacity = '1';
                    contentWrapper.style.transform = 'translateX(0)';
                    panelImage.style.opacity = '1';
                    panelImage.style.transform = 'translateX(0)';
                }, 300); // Wait for fade out
                
                activeCardId = id;
                // Ensure visibility
                setTimeout(() => {
                    panel.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }, 300);
            }
        }

        function populatePanel(service) {
            document.getElementById('panel-image').src = service.image;
            document.getElementById('panel-title').innerText = service.title;
            document.getElementById('panel-subtitle').innerText = service.subtitle;
            document.getElementById('panel-desc').innerText = service.desc;
            
            // Icon
            const iconWrap = document.getElementById('panel-icon-wrap');
            iconWrap.innerHTML = `<i data-lucide="${service.icon}" class="w-5 h-5" stroke-width="1.5"></i>`;
            lucide.createIcons();

            // Points
            const list = document.getElementById('panel-points');
            list.innerHTML = service.points.map(p => `
                <li class="flex items-start gap-3">
                    <span class="w-1.5 h-1.5 bg-agro-primary rounded-full mt-2 flex-shrink-0"></span>${p}
                </li>
            `).join('');
        }

        function openPanel() {
            const panel = document.getElementById('expand-panel');
            const contentWrapper = document.getElementById('panel-content-wrapper');
            const panelImage = document.getElementById('panel-image');
            
            panel.classList.remove('opacity-0');
            panel.classList.add('opacity-100');
            panel.style.maxHeight = "1000px"; // approximate max height

            // Trigger internal animations
            setTimeout(() => {
                contentWrapper.style.opacity = '1';
                contentWrapper.style.transform = 'translateX(0)';
                panelImage.style.opacity = '1';
                panelImage.style.transform = 'translateX(0)';
            }, 100);

            setTimeout(() => {
                panel.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, 300);
        }

        function closePanel() {
            const panel = document.getElementById('expand-panel');
            const contentWrapper = document.getElementById('panel-content-wrapper');
            const panelImage = document.getElementById('panel-image');

            // Reset animations
            contentWrapper.style.opacity = '0';
            contentWrapper.style.transform = 'translateX(20px)';
            panelImage.style.opacity = '0';
            panelImage.style.transform = 'translateX(-20px)';
            
            panel.style.maxHeight = "0px";
            panel.classList.remove('opacity-100');
            panel.classList.add('opacity-0');
            
            activeCardId = null;
        }

        function submitForm() {
            const btn = document.querySelector('#contactForm button');
            const originalText = btn.innerText;
            btn.innerText = 'Odesláno';
            btn.classList.add('bg-agro-dark');
            alert('Děkujeme za vaši zprávu. Budeme vás kontaktovat.');
            setTimeout(() => {
                btn.innerText = originalText;
                btn.classList.remove('bg-agro-dark');
                document.getElementById('contactForm').reset();
            }, 2000);
        }

        // --- Scroll Reveal ---
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('reveal-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        document.addEventListener('DOMContentLoaded', () => {
            lucide.createIcons();
            document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));
        });

        // Close panel on Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') closePanel();
        });

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 w-full z-50 transition-all duration-300 border-b border-white/10" id="header" style={{backgroundColor: 'rgba(245, 242, 234, 0.95)', backdropFilter: 'blur(12px)'}}>
<div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">

<a className="flex flex-col group" href="#">
<span className="font-serif text-lg md:text-xl tracking-tight text-agro-primary font-medium uppercase leading-none group-hover:opacity-80 transition-opacity">
                    BOHEMIA VITAE
                </span>
<span className="text-xs tracking-widest text-agro-dark/60 mt-0.5 uppercase">Jindřichův Hradec, a.s.</span>
</a>

<nav className="hidden lg:flex items-center gap-8">
<a className="text-xs uppercase tracking-widest font-medium hover:text-agro-primary transition-colors" href="#about">O společnosti</a>
<a className="text-xs uppercase tracking-widest font-medium hover:text-agro-primary transition-colors" href="#company-focus">Činnost</a>
<a className="text-xs uppercase tracking-widest font-medium hover:text-agro-primary transition-colors" href="#shop">Prodejna</a>
<a className="text-xs uppercase tracking-widest font-medium hover:text-agro-primary transition-colors" href="#facilities">Provozy</a>
<a className="px-5 py-2 bg-agro-primary text-white text-xs uppercase tracking-widest font-medium rounded-full hover:bg-agro-primary/90 hover:scale-[1.02] transition-all duration-300 shadow-lg shadow-agro-primary/20" href="#contact">
                    Kontakt
                </a>
</nav>

<button aria-label="Menu" className="lg:hidden text-agro-dark p-2" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')">
<i data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>

<div className="hidden bg-agro-secondary border-t border-agro-dark/10 p-6 absolute w-full lg:hidden shadow-xl animate-fade-in" id="mobile-menu">
<div className="flex flex-col gap-6 items-center text-center">
<a className="text-lg font-serif text-agro-dark" href="#about" onclick="document.getElementById('mobile-menu').classList.add('hidden')">O společnosti</a>
<a className="text-lg font-serif text-agro-dark" href="#company-focus" onclick="document.getElementById('mobile-menu').classList.add('hidden')">Činnost</a>
<a className="text-lg font-serif text-agro-dark" href="#shop" onclick="document.getElementById('mobile-menu').classList.add('hidden')">Prodejna</a>
<a className="text-lg font-serif text-agro-dark" href="#facilities" onclick="document.getElementById('mobile-menu').classList.add('hidden')">Provozy</a>
<a className="text-lg font-serif text-agro-primary font-medium" href="#contact" onclick="document.getElementById('mobile-menu').classList.add('hidden')">Kontakt</a>
</div>
</div>
</header>

<section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20" id="hero">

<div className="absolute inset-0 z-0 bg-fixed bg-cover bg-center" style={{backgroundImage: 'url(\'/assets/hero.jpg\')'}}>

<div className="w-full h-full bg-agro-primary/20 backdrop-blur-sm"></div>
</div>

<div className="absolute inset-0 z-10 bg-gradient-to-b from-black/40 via-black/20 to-black/70"></div>

<div className="relative z-20 text-center max-w-5xl px-6 opacity-0 animate-slide-up" style={{animationDelay: '0.1s'}}>
<div className="inline-flex items-center justify-center py-1 px-4 border border-white/30 rounded-full bg-white/10 backdrop-blur-md mb-8">
<span className="text-white text-xs tracking-[0.2em] uppercase font-medium">Tradice od roku 1993</span>
</div>
<h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white font-medium leading-tight tracking-tight mb-6 drop-shadow-xl">
                Zemědělství s tradicí<br/>a odpovědností
            </h1>
<p className="text-white/90 text-lg md:text-xl font-light max-w-2xl mx-auto mb-12 leading-relaxed tracking-wide">
                BOHEMIA VITAE Jindřichův Hradec, a.s. — komplexní rostlinná a živočišná výroba pečující o krajinu jižních Čech.
            </p>
<a className="group inline-flex items-center gap-3 bg-white text-agro-primary px-8 py-4 rounded-full text-sm font-medium tracking-widest uppercase hover:bg-agro-surface transition-all duration-300 transform hover:-translate-y-1 shadow-2xl" href="#contact">
                Kontaktovat nás
                <i className="w-4 h-4 transition-transform group-hover:translate-y-1" data-lucide="arrow-down" strokeWidth="1.5"></i>
</a>
</div>
</section>

<section className="py-24 md:py-32 px-4 md:px-6 bg-agro-secondary" id="about">
<div className="max-w-7xl mx-auto">
<div className="reveal-on-scroll">
<div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">

<div className="w-full lg:w-5/12 relative group">
<div className="aspect-[4/5] overflow-hidden rounded-2xl shadow-xl">
<img alt="Sídlo společnosti" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" loading="lazy" src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&amp;q=80"/>
</div>

<div className="absolute -bottom-6 -right-6 w-32 h-32 bg-agro-accent/20 rounded-full -z-10 blur-2xl"></div>
</div>

<div className="w-full lg:w-7/12 pt-4">
<span className="text-agro-primary text-xs font-bold tracking-widest uppercase mb-4 block">O společnosti</span>
<h2 className="font-serif text-3xl md:text-5xl text-agro-dark leading-tight tracking-tight mb-8">
                            Stabilita a kvalita v každém kroku
                        </h2>
<div className="space-y-6 text-agro-dark/80 leading-relaxed font-light text-lg">
<p>
                                Společnost  byla založena v roce 1993 a od té doby se stala jedním z klíčových pilířů zemědělské produkce v regionu. Hospodaříme s respektem k půdě a životnímu prostředí.
                            </p>
<p>
                                Naše činnost zahrnuje komplexní cyklus od pěstování plodin až po živočišnou výrobu. Provozujeme vlastní výrobnu krmných směsí, drůbežárny, výkrmny prasat a podnikovou prodejnu, čímž zajišťujeme maximální kontrolu nad kvalitou finálních produktů.
                            </p>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 border-t border-agro-dark/10 pt-8">
<div>
<span className="block text-3xl font-serif text-agro-primary mb-1">30+</span>
<span className="text-xs uppercase tracking-widest text-agro-dark/60">Let tradice</span>
</div>
<div>
<span className="block text-3xl font-serif text-agro-primary mb-1">4</span>
<span className="text-xs uppercase tracking-widest text-agro-dark/60">Hlavní provozy</span>
</div>
<div>
<span className="block text-3xl font-serif text-agro-primary mb-1">100%</span>
<span className="text-xs uppercase tracking-widest text-agro-dark/60">Vlastní krmiva</span>
</div>
<div>
<span className="block text-3xl font-serif text-agro-primary mb-1">24h</span>
<span className="text-xs uppercase tracking-widest text-agro-dark/60">Čerstvost</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white px-4 md:px-6 border-y border-agro-dark/5" id="company-focus">
<div className="max-w-7xl mx-auto">

<div className="text-center mb-16 reveal-on-scroll">
<span className="text-agro-primary text-xs font-bold tracking-widest uppercase mb-3 block">Portfolio</span>
<h2 className="font-serif text-3xl md:text-5xl text-agro-dark mb-4 tracking-tight">Naše činnost</h2>
<p className="text-agro-dark/60 max-w-2xl mx-auto text-lg font-light">
                    Komplexní portfolio služeb a produktů zajišťující stabilitu a kvalitu.
                </p>
</div>

<div className="card-grid mb-8 w-full" id="cards-grid">

</div>

<div aria-live="polite" className="w-full bg-agro-secondary rounded-xl overflow-hidden shadow-2xl transition-all duration-700 ease-in-out opacity-0 max-h-0 border border-agro-dark/5" id="expand-panel">
<div className="flex flex-col lg:flex-row h-full relative">

<button aria-label="Zavřít" className="absolute top-4 right-4 z-20 p-2 bg-white/80 rounded-full hover:bg-white transition-colors text-agro-dark shadow-sm" onclick="closePanel()">
<i className="w-5 h-5" data-lucide="x" strokeWidth="1.5"></i>
</button>

<div className="lg:w-1/2 relative min-h-[300px] lg:min-h-[500px] overflow-hidden">
<img alt="Detail" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 transform translate-x-[-20px] opacity-0" id="panel-image" src="https://images.unsplash.com/photo-1761839257946-4616bcfafec7?w=1600&amp;q=80" style={{transition: 'transform 0.8s ease-out, opacity 0.8s ease'}}/>
</div>

<div className="lg:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-agro-secondary">
<div className="transform translate-x-[20px] opacity-0 transition-all duration-500 delay-100" id="panel-content-wrapper">
<div className="flex items-center gap-3 text-agro-primary mb-6">
<span id="panel-icon-wrap"></span>
<span className="text-xs font-bold tracking-widest uppercase text-agro-accent" id="panel-subtitle"></span>
</div>
<h3 className="font-serif text-3xl md:text-4xl text-agro-dark mb-6 tracking-tight" id="panel-title"></h3>
<p className="text-agro-dark/70 leading-relaxed text-lg font-light mb-8" id="panel-desc"></p>
<ul className="space-y-3 mb-10 text-sm font-medium text-agro-dark/80" id="panel-points">

</ul>
<div>
<a className="inline-flex items-center justify-center px-8 py-3 bg-agro-primary text-white text-xs uppercase tracking-widest font-medium rounded-lg hover:bg-agro-primary/90 transition-all" href="#contact">
                                    Kontaktovat
                                </a>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-4 md:px-6 bg-agro-light overflow-hidden" id="shop">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col lg:flex-row items-center gap-16 reveal-on-scroll">
<div className="lg:w-1/2 space-y-8">
<span className="text-agro-primary text-xs font-bold tracking-widest uppercase">Čerstvost přímo od nás</span>
<h2 className="font-serif text-4xl text-agro-dark tracking-tight">Podniková prodejna</h2>
<p className="text-agro-dark/70 text-lg leading-relaxed font-light">
                        Navštivte naši podnikovou prodejnu v Jindřichově Hradci. Nabízíme denně čerstvá vejce z našeho chovu, drůbež, vepřové maso a sezónní produkty rostlinné výroby. Zkracujeme cestu z farmy přímo na váš stůl.
                    </p>
<ul className="space-y-2 text-agro-dark/80">
<li className="flex items-center gap-3"><i className="w-4 h-4 text-agro-primary" data-lucide="check"></i> Čerstvá vejce a drůbež</li>
<li className="flex items-center gap-3"><i className="w-4 h-4 text-agro-primary" data-lucide="check"></i> Vepřové maso z vlastního chovu</li>
<li className="flex items-center gap-3"><i className="w-4 h-4 text-agro-primary" data-lucide="check"></i> Krmné směsi pro drobnochovatele</li>
</ul>
<div className="pt-4">
<a className="inline-flex items-center text-sm font-medium text-agro-primary hover:text-agro-accent transition-colors border-b border-agro-primary pb-1" href="#contact">
                            Zobrazit otevírací dobu <i className="w-4 h-4 ml-2" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</div>
<div className="lg:w-1/2 relative group w-full">
<div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl relative">
<img alt="Podniková prodejna" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1560493676-04071c5f467b?w=1600&amp;q=80"/>
<div className="absolute inset-0 bg-agro-primary/10 mix-blend-multiply"></div>
</div>

<div className="absolute -bottom-6 left-6 md:left-10 bg-white p-6 rounded-lg shadow-xl border border-agro-secondary max-w-[200px]">
<p className="text-xs uppercase tracking-widest text-agro-dark/50 mb-1">Jindřichův Hradec</p>
<p className="font-serif text-lg text-agro-primary">Otevřeno Po-Pá</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white px-4 md:px-6" id="facilities">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 reveal-on-scroll">
<div>
<span className="text-agro-primary text-xs font-bold tracking-widest uppercase mb-3 block">Lokality</span>
<h2 className="font-serif text-3xl md:text-4xl text-agro-dark tracking-tight">Naše provozy</h2>
</div>
<p className="hidden md:block text-agro-dark/50 text-sm max-w-xs text-right">
                    Moderní infrastruktura a technologie v celém regionu.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="md:col-span-2 relative group overflow-hidden rounded-xl shadow-sm cursor-default h-[300px] md:h-[400px] reveal-on-scroll">
<img alt="Jarošov nad Nežárkou" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1594771804886-a933bb2d609b?w=1600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div className="absolute bottom-6 left-6 text-white">
<p className="text-xs uppercase tracking-widest opacity-80 mb-1">Sídlo &amp; Výroba</p>
<h3 className="font-serif text-2xl">Jarošov nad Nežárkou</h3>
</div>
</div>

<div className="relative group overflow-hidden rounded-xl shadow-sm h-[300px] md:h-[400px] reveal-on-scroll" style={{transitionDelay: '100ms'}}>
<img alt="Jindřichův Hradec" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1586771107445-d3ca888129ff?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors"></div>
<div className="absolute bottom-6 left-6 text-white">
<p className="text-xs uppercase tracking-widest opacity-80 mb-1">Drůbežárna</p>
<h3 className="font-serif text-xl">Jindřichův Hradec</h3>
</div>
</div>

<div className="relative group overflow-hidden rounded-xl shadow-sm h-[250px] reveal-on-scroll" style={{transitionDelay: '200ms'}}>
<img alt="Stráž nad Nežárkou" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1499529112087-3cb3b73cec95?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors"></div>
<div className="absolute bottom-6 left-6 text-white">
<h3 className="font-serif text-lg">Stráž nad Nežárkou</h3>
</div>
</div>
<div className="md:col-span-2 relative group overflow-hidden rounded-xl shadow-sm h-[250px] reveal-on-scroll" style={{transitionDelay: '300ms'}}>
<img alt="Kardašova Řečice" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="/assets/facility-4.jpg"/>
<div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors"></div>
<div className="absolute bottom-6 left-6 text-white">
<p className="text-xs uppercase tracking-widest opacity-80 mb-1">Skladování</p>
<h3 className="font-serif text-lg">Kardašova Řečice</h3>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-agro-secondary border-t border-agro-dark/5 px-4 md:px-6" id="contact">
<div className="max-w-7xl mx-auto">
<h2 className="font-serif text-4xl text-agro-dark mb-12 text-center reveal-on-scroll">Kontakt</h2>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 bg-white rounded-2xl overflow-hidden shadow-xl reveal-on-scroll">

<div className="p-8 md:p-12">
<h3 className="text-xl font-medium text-agro-dark mb-6">Napište nám</h3>
<form className="space-y-5" id="contactForm" onsubmit="event.preventDefault(); submitForm();">
<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
<div className="space-y-1">
<label className="text-xs uppercase tracking-wider text-agro-dark/60 font-semibold" htmlFor="name">Jméno *</label>
<input className="w-full bg-agro-light border border-agro-dark/10 rounded-md px-4 py-3 text-agro-dark focus:outline-none focus:ring-1 focus:ring-agro-primary focus:border-agro-primary transition-all text-sm" id="name" placeholder="Jan Novák" required="" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs uppercase tracking-wider text-agro-dark/60 font-semibold" htmlFor="phone">Telefon *</label>
<input className="w-full bg-agro-light border border-agro-dark/10 rounded-md px-4 py-3 text-agro-dark focus:outline-none focus:ring-1 focus:ring-agro-primary focus:border-agro-primary transition-all text-sm" id="phone" placeholder="+420 777 123 456" required="" type="tel"/>
</div>
</div>
<div className="space-y-1">
<label className="text-xs uppercase tracking-wider text-agro-dark/60 font-semibold" htmlFor="email">E-mail *</label>
<input className="w-full bg-agro-light border border-agro-dark/10 rounded-md px-4 py-3 text-agro-dark focus:outline-none focus:ring-1 focus:ring-agro-primary focus:border-agro-primary transition-all text-sm" id="email" placeholder="jan@firma.cz" required="" type="email"/>
</div>
<div className="space-y-1">
<label className="text-xs uppercase tracking-wider text-agro-dark/60 font-semibold" htmlFor="message">Poznámka</label>
<textarea className="w-full bg-agro-light border border-agro-dark/10 rounded-md px-4 py-3 text-agro-dark focus:outline-none focus:ring-1 focus:ring-agro-primary focus:border-agro-primary transition-all resize-none text-sm" id="message" placeholder="Váš dotaz..." rows="4"></textarea>
</div>
<div className="flex items-start gap-3 pt-2">
<input className="mt-1 accent-agro-primary" id="gdpr" required="" type="checkbox"/>
<label className="text-xs text-agro-dark/60 leading-tight" htmlFor="gdpr">
                                Souhlasím se zpracováním osobních údajů pro účely vyřízení poptávky.
                            </label>
</div>
<button className="w-full bg-agro-primary text-white font-medium py-4 rounded-md hover:bg-agro-primary/90 transition-all hover:shadow-lg text-sm tracking-wide uppercase" type="submit">
                            Odeslat
                        </button>
</form>
</div>

<div className="relative w-full h-full min-h-[450px] bg-agro-surface flex flex-col">

<div className="flex-grow relative w-full h-1/2 lg:h-2/3 overflow-hidden group">
<iframe allowfullscreen="" className="absolute inset-0 transition-transform duration-700 group-hover:scale-105" height="100%" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2613.682613146435!2d15.06830531568205!3d49.19630597938368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4773229b3a32f6e9%3A0x400af0f6615a1a0!2sJaro%C5%A1ov%20nad%20Ne%C5%BE%C3%A1rkou%20239%2C%20378%2041%20Jaro%C5%A1ov%20nad%20Ne%C5%BE%C3%A1rkou!5e0!3m2!1scs!2scz!4v1625680000000!5m2!1scs!2scz" style={{border: '0', filter: 'grayscale(20%) contrast(90%)'}} width="100%"></iframe>
</div>

<div className="bg-agro-primary text-white p-8 lg:h-auto">
<h4 className="font-serif text-lg mb-4">Důležité kontakty</h4>
<ul className="space-y-3 text-sm font-light opacity-90">
<li className="flex items-start gap-3">
<i className="w-4 h-4 mt-1 flex-shrink-0 text-agro-accent" data-lucide="map-pin"></i>
<span>Jarošov nad Nežárkou 239,378 41 Jarošov nad Nežárkou</span>
</li>
<li className="flex items-center gap-3">
<i className="w-4 h-4 flex-shrink-0 text-agro-accent" data-lucide="phone"></i>
<a className="hover:text-agro-accent transition-colors" href="tel:+420384324780">+420 384 324 780 (Kancelář)</a>
</li>
<li className="flex items-center gap-3">
<i className="w-4 h-4 flex-shrink-0 text-agro-accent" data-lucide="mail"></i>
<a className="hover:text-agro-accent transition-colors" href="mailto:info@bohemiavitae.cz">info@bohemiavitae.cz</a>
</li>
<li className="flex items-center gap-3 pt-2 border-t border-white/10">
<i className="w-4 h-4 flex-shrink-0 text-agro-accent" data-lucide="user"></i>
<span>Pavel Jílek: +420 727 878 406</span>
</li>
</ul>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-agro-dark text-white/70 py-16 px-6 border-t border-white/5" id="footer">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 text-sm">

<div className="md:col-span-1">
<h3 className="font-serif text-2xl text-white tracking-tight mb-2">BOHEMIA VITAE</h3>
<p className="text-xs uppercase tracking-widest opacity-50 mb-4">Jindřichův Hradec, a.s.</p>
<p className="text-xs leading-relaxed opacity-60">
                    Společnost zapsaná v obchodním rejstříku.
                    IČ: 48201987  DIČ: CZ48201987
                </p>
</div>

<div>
<h4 className="text-white font-medium mb-4">Menu</h4>
<ul className="space-y-2">
<li><a className="hover:text-agro-accent transition-colors" href="#about">O společnosti</a></li>
<li><a className="hover:text-agro-accent transition-colors" href="#company-focus">Činnost</a></li>
<li><a className="hover:text-agro-accent transition-colors" href="#shop">Prodejna</a></li>
<li><a className="hover:text-agro-accent transition-colors" href="#facilities">Provozy</a></li>
</ul>
</div>

<div className="md:col-span-2">
<h4 className="text-white font-medium mb-4">Další provozy</h4>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs opacity-80">
<p>Novodvorská 202, 377 01 Jindřichův Hradec</p>
<p>Stráž nad Nežárkou, 378 02</p>
<p>Lásenice 32, 378 01</p>
<p>Kardašova Řečice, 378 21</p>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs opacity-40">
<p>© 2024 BOHEMIA VITAE Jindřichův Hradec, a.s. Všechna práva vyhrazena.</p>
<p>Ochrana osobních údajů</p>
</div>
</footer>



    </>
  );
}
