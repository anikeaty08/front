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



// Configure Tailwind to include our custom 3D transform utilities
tailwind.config = {
theme: {
extend: {
// Add any custom theme extensions here if needed
}
},
plugins: [
function({ addUtilities }) {
const rotateXUtilities = {};
const rotateYUtilities = {};
const rotateZUtilities = {};
const rotateValues = [0, 5, 10, 15, 20, 30, 45, 75];
// Generate rotate-x utilities
rotateValues.forEach((value) => {
rotateXUtilities[`.rotate-x-${value}`] = {
'--tw-rotate-x': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateXUtilities[`.-rotate-x-${value}`] = {
'--tw-rotate-x': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-y utilities
rotateValues.forEach((value) => {
rotateYUtilities[`.rotate-y-${value}`] = {
'--tw-rotate-y': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateYUtilities[`.-rotate-y-${value}`] = {
'--tw-rotate-y': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-z utilities
rotateValues.forEach((value) => {
rotateZUtilities[`.rotate-z-${value}`] = {
'--tw-rotate-z': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateZUtilities[`.-rotate-z-${value}`] = {
'--tw-rotate-z': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Perspective utilities
const perspectiveUtilities = {
".perspective-none": { perspective: "none" },
".perspective-dramatic": { perspective: "100px" },
".perspective-near": { perspective: "300px" },
".perspective-normal": { perspective: "500px" },
".perspective-midrange": { perspective: "800px" },
".perspective-distant": { perspective: "1200px" },
};
// Transform style utilities
const transformStyleUtilities = {
".transform-style-preserve-3d": { "transform-style": "preserve-3d" },
".transform-style-flat": { "transform-style": "flat" },
};
addUtilities({
...rotateXUtilities,
...rotateYUtilities,
...rotateZUtilities,
...perspectiveUtilities,
...transformStyleUtilities,
});
}
]
};



        // --- 0. TRANSLATIONS ---
        const translations = {
            pl: {
                "loader.text": "WCZYTYWANIE DANYCH",
                "nav.about": "O NAS",
                "nav.services": "OFERTA",
                "nav.pricing": "CENNIK",
                "nav.contact": "KONTAKT",
                "nav.consult": "DARMOWA KONSULTACJA",
                "hero.subtitle": "AGENCJA INTERAKTYWNA",
                "hero.title": "DOŚWIADCZENIE<br>I NOWOCZESNOŚĆ",
                "hero.desc": "WebDevAI – Doświadczenie od 2010 roku. Nowoczesność od dzisiaj.",
                "hero.code": "// TWORZYMY STRONY WWW, SKLEPY I CONTENT, KTÓRE SPRZEDAJĄ.<br>// KOMPLEKSOWE WSPARCIE: OD WDROŻENIA PO OPIEKĘ.<br>// EST. 2010",
                "hero.cta": "SPRAWDŹ PAKIETY OPIEKI",
                "scroll": "PRZEWIŃ DALEJ",
                "about.label": "O NAS",
                "about.title": "15 LAT <span class='text-[#00FF9D]'>DOŚWIADCZENIA</span>",
                "about.desc": "Jesteśmy butikową agencją. Łączymy kompetencje programistyczne, graficzne i marketingowe. Działamy na rynku nieprzerwanie od 2010 roku, oferując stabilność, której brakuje freelancerom, i elastyczność, której nie mają korporacje.",
                "about.partners": "PARTNERZY TECHNOLOGICZNI: AI, CYBER_FOLKS, LH.PL, WORDPRESS, WOOCOMMERCE, SHOPER, SHOPIFY, GOOGLE WORKSPACE.",
                "about.stat1": "ROK ZAŁOŻENIA",
                "about.stat2": "SATYSFAKCJI",
                "services.title": "NASZE USŁUGI",
                "services.web.title": "STRONY WWW",
                "services.web.desc": "Responsywne strony wizytówki, Landing Page i sklepy e-commerce (WooCommerce, Shoper, Shopify). Szybkie i bezpieczne.",
                "services.care.title": "OPIEKA WWW",
                "services.care.sub": "ADMINISTRACJA & WSPARCIE",
                "services.care.desc": "Stałe wsparcie techniczne, aktualizacje i bezpieczeństwo. Nie martw się o awarie – my czuwamy.",
                "services.content.desc": "Prowadzenie profili w social media, copywriting i strategia treści. Budujemy Twój wizerunek w sieci.",
                "pricing.title": "CENNIK<br><span class='text-transparent bg-clip-text bg-gradient-to-r from-[#00FF9D] to-[#00FFF0]'>PAKIETÓW</span>",
                "pricing.basic.price": "od 350 PLN<span class='text-sm font-rajdhani text-gray-400'>/mc</span>",
                "pricing.vip.price": "od 500 PLN<span class='text-sm font-rajdhani text-gray-400'>/mc</span>",
                "pricing.social.price": "od 800 PLN<span class='text-sm font-rajdhani text-gray-400'>/mc</span>",
                "pricing.feat.updates": "Aktualizacje wtyczek",
                "pricing.feat.backups": "Kopie zapasowe",
                "pricing.feat.monitoring": "Monitoring 24/7",
                "pricing.feat.basic_plus": "Wszystko z Basic",
                "pricing.feat.hours": "2h prac programisty",
                "pricing.feat.priority": "Priorytetowe wsparcie",
                "pricing.feat.posts": "4 posty miesięcznie",
                "pricing.feat.graphics": "Profesjonalne grafiki",
                "pricing.feat.reports": "Moderacja i raporty",
                "pricing.btn": "WYBIERZ PAKIET ->",
                "pricing.footer": "WDROŻENIA STRON WWW OD 1500 PLN | SKLEPY INTERNETOWE OD 3500 PLN | AUDYT GRATIS",
                "contact.title": "SKONTAKTUJ SIĘ",
                "contact.subtitle": "FORMULARZ KONTAKTOWY // SZYFROWANY",
                "contact.name": "IMIĘ I NAZWISKO",
                "contact.scan": "SKANOWANIE...",
                "contact.email": "ADRES E-MAIL",
                "contact.msg": "TREŚĆ WIADOMOŚCI",
                "contact.btn": "WYŚLIJ",
                "footer.copy": "© 2010-2026 WebDevAI. WSZELKIE PRAWA ZASTRZEŻONE.",
                "footer.privacy": "POLITYKA PRYWATNOŚCI",
                "footer.terms": "REGULAMIN",
                "legal.privacy_content": `<p>Niniejsza Polityka Prywatności określa zasady przetwarzania i ochrony danych osobowych przekazanych przez Użytkowników w związku z korzystaniem z usług świadczonych poprzez serwis WebDevAI.</p><h3>I. Administrator Danych</h3><p>Administratorem danych osobowych zawartych w serwisie jest WebDevAI Agencja Interaktywna.</p><h3>II. Zbieranie Danych</h3><p>Serwis zbiera informacje podane dobrowolnie przez użytkownika, w tym dane z formularzy i pliki cookies.</p>`,
                "legal.terms_content": `<p>Niniejszy Regulamin określa ogólne warunki, zasady oraz sposób świadczenia usług drogą elektroniczną przez firmę WebDevAI.</p><h3>1. Postanowienia Ogólne</h3><p>Regulamin określa zasady korzystania z usług agencji interaktywnej WebDevAI.</p><h3>2. Zakres Usług</h3><ul><li>Projektowanie i wdrażanie stron WWW</li><li>Opieka techniczna</li><li>Marketing</li></ul>`
            },
            en: {
                "loader.text": "LOADING DATA",
                "nav.about": "ABOUT US",
                "nav.services": "SERVICES",
                "nav.pricing": "PRICING",
                "nav.contact": "CONTACT",
                "nav.consult": "FREE CONSULTATION",
                "hero.subtitle": "INTERACTIVE AGENCY",
                "hero.title": "EXPERIENCE<br>& MODERNITY",
                "hero.desc": "WebDevAI – Experience since 2010. Modernity starting today.",
                "hero.code": "// WE CREATE WEBSITES, STORES, AND CONTENT THAT SELL.<br>// COMPREHENSIVE SUPPORT: FROM DEPLOYMENT TO MAINTENANCE.<br>// EST. 2010",
                "hero.cta": "CHECK CARE PACKAGES",
                "scroll": "SCROLL DOWN",
                "about.label": "ABOUT US",
                "about.title": "15 YEARS OF <span class='text-[#00FF9D]'>EXPERIENCE</span>",
                "about.desc": "We are a boutique agency. We combine programming, graphic design, and marketing skills. Operating continuously since 2010, offering stability freelancers lack and flexibility corporations don't have.",
                "about.partners": "TECH PARTNERS: AI, CYBER_FOLKS, LH.PL, WORDPRESS, WOOCOMMERCE, SHOPER, SHOPIFY, GOOGLE WORKSPACE.",
                "about.stat1": "ESTABLISHED",
                "about.stat2": "SATISFACTION",
                "services.title": "OUR SERVICES",
                "services.web.title": "WEBSITES",
                "services.web.desc": "Responsive business cards, Landing Pages, and e-commerce stores (WooCommerce, Shoper, Shopify). Fast and secure.",
                "services.care.title": "WEB CARE",
                "services.care.sub": "ADMINISTRATION & SUPPORT",
                "services.care.desc": "Constant technical support, updates, and security. Don't worry about downtime – we are watching.",
                "services.content.desc": "Social media management, copywriting, and content strategy. We build your image online.",
                "pricing.title": "PRICING<br><span class='text-transparent bg-clip-text bg-gradient-to-r from-[#00FF9D] to-[#00FFF0]'>PACKAGES</span>",
                "pricing.basic.price": "from 350 PLN<span class='text-sm font-rajdhani text-gray-400'>/mo</span>",
                "pricing.vip.price": "from 500 PLN<span class='text-sm font-rajdhani text-gray-400'>/mo</span>",
                "pricing.social.price": "from 800 PLN<span class='text-sm font-rajdhani text-gray-400'>/mo</span>",
                "pricing.feat.updates": "Plugin updates",
                "pricing.feat.backups": "Backups",
                "pricing.feat.monitoring": "24/7 Monitoring",
                "pricing.feat.basic_plus": "Everything in Basic",
                "pricing.feat.hours": "2h developer work",
                "pricing.feat.priority": "Priority support",
                "pricing.feat.posts": "4 posts per month",
                "pricing.feat.graphics": "Professional graphics",
                "pricing.feat.reports": "Moderation & reports",
                "pricing.btn": "CHOOSE PACKAGE ->",
                "pricing.footer": "WEBSITE IMPLEMENTATION FROM 1500 PLN | ONLINE STORES FROM 3500 PLN | FREE AUDIT",
                "contact.title": "GET IN TOUCH",
                "contact.subtitle": "CONTACT FORM // ENCRYPTED",
                "contact.name": "FULL NAME",
                "contact.scan": "SCANNING...",
                "contact.email": "EMAIL ADDRESS",
                "contact.msg": "MESSAGE CONTENT",
                "contact.btn": "SEND",
                "footer.copy": "© 2010-2026 WebDevAI. ALL RIGHTS RESERVED.",
                "footer.privacy": "PRIVACY POLICY",
                "footer.terms": "TERMS OF SERVICE",
                "legal.privacy_content": `<p>This Privacy Policy sets out the rules for processing and protecting personal data provided by Users in connection with the use of services provided through the WebDevAI website.</p><h3>I. Data Controller</h3><p>The administrator of personal data contained in the website is WebDevAI Interactive Agency.</p><h3>II. Data Collection</h3><p>The website collects information voluntarily provided by the user, including form data and cookies.</p>`,
                "legal.terms_content": `<p>These Terms and Conditions define the general conditions, rules, and manner of providing services electronically by WebDevAI.</p><h3>1. General Provisions</h3><p>The Regulations define the rules for using the services of the WebDevAI interactive agency.</p><h3>2. Scope of Services</h3><ul><li>Design and implementation of websites</li><li>Technical support</li><li>Marketing</li></ul>`
            },
            it: {
                "loader.text": "CARICAMENTO DATI",
                "nav.about": "CHI SIAMO",
                "nav.services": "SERVIZI",
                "nav.pricing": "PREZZI",
                "nav.contact": "CONTATTI",
                "nav.consult": "CONSULENZA GRATUITA",
                "hero.subtitle": "AGENZIA INTERATTIVA",
                "hero.title": "ESPERIENZA<br>& MODERNITÀ",
                "hero.desc": "WebDevAI – Esperienza dal 2010. Modernità da oggi.",
                "hero.code": "// CREIAMO SITI WEB, NEGOZI E CONTENUTI CHE VENDONO.<br>// SUPPORTO COMPLETO: DALL'IMPLEMENTAZIONE ALLA CURA.<br>// EST. 2010",
                "hero.cta": "VEDI PACCHETTI",
                "scroll": "SCORRI GIÙ",
                "about.label": "CHI SIAMO",
                "about.title": "15 ANNI DI <span class='text-[#00FF9D]'>ESPERIENZA</span>",
                "about.desc": "Siamo un'agenzia boutique. Uniamo competenze di programmazione, grafica e marketing. Operiamo ininterrottamente dal 2010, offrendo la stabilità che manca ai freelance e la flessibilità che le grandi aziende non hanno.",
                "about.partners": "PARTNER TECNOLOGICI: AI, CYBER_FOLKS, LH.PL, WORDPRESS, WOOCOMMERCE, SHOPER, SHOPIFY, GOOGLE WORKSPACE.",
                "about.stat1": "FONDAZIONE",
                "about.stat2": "SODDISFAZIONE",
                "services.title": "I NOSTRI SERVIZI",
                "services.web.title": "SITI WEB",
                "services.web.desc": "Biglietti da visita responsive, Landing Page e negozi e-commerce (WooCommerce, Shoper, Shopify). Veloci e sicuri.",
                "services.care.title": "MANUTENZIONE",
                "services.care.sub": "AMMINISTRAZIONE E SUPPORTO",
                "services.care.desc": "Supporto tecnico costante, aggiornamenti e sicurezza. Non preoccuparti dei guasti: ci pensiamo noi.",
                "services.content.desc": "Gestione profili social media, copywriting e strategia dei contenuti. Costruiamo la tua immagine online.",
                "pricing.title": "LISTINO<br><span class='text-transparent bg-clip-text bg-gradient-to-r from-[#00FF9D] to-[#00FFF0]'>PREZZI</span>",
                "pricing.basic.price": "da 350 PLN<span class='text-sm font-rajdhani text-gray-400'>/mese</span>",
                "pricing.vip.price": "da 500 PLN<span class='text-sm font-rajdhani text-gray-400'>/mese</span>",
                "pricing.social.price": "da 800 PLN<span class='text-sm font-rajdhani text-gray-400'>/mese</span>",
                "pricing.feat.updates": "Aggiornamenti plugin",
                "pricing.feat.backups": "Backup dati",
                "pricing.feat.monitoring": "Monitoraggio 24/7",
                "pricing.feat.basic_plus": "Tutto del Basic",
                "pricing.feat.hours": "2h lavoro programmatore",
                "pricing.feat.priority": "Supporto prioritario",
                "pricing.feat.posts": "4 post al mese",
                "pricing.feat.graphics": "Grafiche professionali",
                "pricing.feat.reports": "Moderazione e report",
                "pricing.btn": "SCEGLI PACCHETTO ->",
                "pricing.footer": "SITI WEB DA 1500 PLN | NEGOZI ONLINE DA 3500 PLN | AUDIT GRATUITO",
                "contact.title": "CONTATTACI",
                "contact.subtitle": "MODULO DI CONTATTO // CRIPTATO",
                "contact.name": "NOME E COGNOME",
                "contact.scan": "SCANSIONE...",
                "contact.email": "INDIRIZZO E-MAIL",
                "contact.msg": "MESSAGGIO",
                "contact.btn": "INVIA",
                "footer.copy": "© 2010-2026 WebDevAI. TUTTI I DIRITTI RISERVATI.",
                "footer.privacy": "PRIVACY POLICY",
                "footer.terms": "TERMINI E CONDIZIONI",
                "legal.privacy_content": `<p>La presente Privacy Policy stabilisce le regole per il trattamento e la protezione dei dati personali forniti dagli Utenti in relazione all'utilizzo dei servizi forniti attraverso il sito web WebDevAI.</p><h3>I. Titolare del Trattamento</h3><p>L'amministratore dei dati personali contenuti nel sito web è WebDevAI Interactive Agency.</p><h3>II. Raccolta Dati</h3><p>Il sito web raccoglie informazioni fornite volontariamente dall'utente, inclusi i dati dei moduli e i cookie.</p>`,
                "legal.terms_content": `<p>I presenti Termini e Condizioni definiscono le condizioni generali, le regole e le modalità di fornitura dei servizi per via elettronica da parte di WebDevAI.</p><h3>1. Disposizioni Generali</h3><p>Il Regolamento definisce le regole per l'utilizzo dei servizi dell'agenzia interattiva WebDevAI.</p><h3>2. Ambito dei Servizi</h3><ul><li>Progettazione e implementazione di siti web</li><li>Supporto tecnico</li><li>Marketing</li></ul>`
            }
        };

        function setLanguage(lang) {
            // Update active button state
            document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active', 'text-[#00FF9D]'));
            document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.add('text-gray-500'));
            const activeBtn = document.getElementById(`btn-${lang}`);
            activeBtn.classList.add('active');
            activeBtn.classList.remove('text-gray-500');

            // Update DOM elements
            document.querySelectorAll('[data-i18n]').forEach(element => {
                const key = element.getAttribute('data-i18n');
                if (translations[lang][key]) {
                    element.innerHTML = translations[lang][key];
                }
            });

            // Update HTML lang attribute
            document.documentElement.lang = lang;
        }

        // Initialize with PL on load
        window.addEventListener('load', () => {
            setLanguage('pl');
            // Populate modal content initially
            document.querySelector('#privacy-content .legal-content').innerHTML = translations['pl']['legal.privacy_content'];
            document.querySelector('#terms-content .legal-content').innerHTML = translations['pl']['legal.terms_content'];
        });

        // --- 1. INITIALIZATION & LOADER ---
        window.addEventListener('load', () => {
            setTimeout(() => {
                const loader = document.getElementById('loader');
                loader.style.opacity = '0';
                setTimeout(() => {
                    loader.style.display = 'none';
                }, 1500);
            }, 1000);
        });

        // --- 2. MODAL LOGIC ---
        function toggleModal(modalID) {
            const modal = document.getElementById(modalID);
            const content = modal.querySelector('div[id$="-content"]');
            
            if (modal.classList.contains('hidden')) {
                // Open
                modal.classList.remove('hidden');
                setTimeout(() => {
                    modal.classList.remove('opacity-0');
                    content.classList.remove('translate-x-full');
                }, 10);
                document.body.style.overflow = 'hidden'; 
            } else {
                // Close
                content.classList.add('translate-x-full');
                modal.classList.add('opacity-0'); 
                setTimeout(() => {
                    modal.classList.add('hidden');
                }, 300); 
                document.body.style.overflow = ''; 
            }
        }

        // --- 3. QUANTUM PARTICLE ENGINE (CANVAS) ---
        const canvas = document.getElementById('quantum-canvas');
        const ctx = canvas.getContext('2d');
        
        let width, height;
        let particles = [];
        let mouse = { x: 0, y: 0 };

        function resize() {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        }
        window.addEventListener('resize', resize);
        resize();

        class Brick {
            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.z = Math.random() * 2 + 0.5;
                this.sizeW = (Math.random() * 20 + 10) * this.z;
                this.sizeH = (Math.random() * 10 + 5) * this.z;
                this.vx = (Math.random() - 0.5) * 0.5;
                this.vy = (Math.random() - 0.5) * 0.5;
                this.color = Math.random() > 0.9 ? '#00FF9D' : (Math.random() > 0.9 ? '#7B2CBF' : '#1a1a1a');
                this.opacity = Math.random() * 0.5 + 0.1;
            }

            update() {
                const dx = mouse.x - this.x;
                const dy = mouse.y - this.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                const maxDist = 200;

                if (distance < maxDist) {
                    const force = (maxDist - distance) / maxDist;
                    const angle = Math.atan2(dy, dx);
                    this.vx -= Math.cos(angle) * force * 0.5;
                    this.vy -= Math.sin(angle) * force * 0.5;
                }

                this.x += this.vx;
                this.y += this.vy;
                this.vx *= 0.99;
                this.vy *= 0.99;

                if (Math.abs(this.vx) < 0.1) this.vx += (Math.random() - 0.5) * 0.01;
                if (Math.abs(this.vy) < 0.1) this.vy += (Math.random() - 0.5) * 0.01;

                if (this.x < -50) this.x = width + 50;
                if (this.x > width + 50) this.x = -50;
                if (this.y < -50) this.y = height + 50;
                if (this.y > height + 50) this.y = -50;
            }

            draw() {
                ctx.save();
                ctx.translate(this.x, this.y);
                const scrollY = window.scrollY;
                ctx.translate(0, -scrollY * 0.1 * this.z);
                
                ctx.globalAlpha = this.opacity;
                ctx.fillStyle = this.color;
                
                ctx.beginPath();
                ctx.rect(0, 0, this.sizeW, this.sizeH);
                ctx.fill();
                
                if (this.color !== '#1a1a1a') {
                    ctx.strokeStyle = 'white';
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                    ctx.shadowBlur = 10;
                    ctx.shadowColor = this.color;
                }
                
                ctx.restore();
            }
        }

        for (let i = 0; i < 150; i++) {
            particles.push(new Brick());
        }

        function animate() {
            ctx.clearRect(0, 0, width, height);
            particles.forEach(p => {
                p.update();
                p.draw();
            });
            requestAnimationFrame(animate);
        }
        animate();

        // --- 4. CUSTOM CURSOR ---
        const cursorDot = document.getElementById('cursor-dot');
        const cursorRing = document.getElementById('cursor-ring');

        window.addEventListener('mousemove', (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;

            cursorDot.style.left = e.clientX + 'px';
            cursorDot.style.top = e.clientY + 'px';
            
            setTimeout(() => {
                cursorRing.style.left = e.clientX + 'px';
                cursorRing.style.top = e.clientY + 'px';
            }, 50);
        });

        // Add hover effects to everything clickable
        document.querySelectorAll('a, button, input, .group, .lang-btn').forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursorRing.style.width = '60px';
                cursorRing.style.height = '60px';
                cursorRing.style.borderColor = '#FF006E';
            });
            el.addEventListener('mouseleave', () => {
                cursorRing.style.width = '40px';
                cursorRing.style.height = '40px';
                cursorRing.style.borderColor = 'rgba(0, 255, 157, 0.5)';
            });
        });

        // --- 5. SCROLL OBSERVER ---
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('opacity-100', 'translate-y-0');
                    entry.target.classList.remove('opacity-0', 'translate-y-10');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.animate-on-scroll').forEach(el => {
            observer.observe(el);
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
      

<div id="cursor-dot"></div>
<div id="cursor-ring"></div>

<div className="fixed inset-0 bg-black z-[10000] flex justify-center items-center transition-opacity duration-[1500ms]" id="loader">
<div className="flex flex-col items-center">
<div className="font-orbitron text-6xl tracking-tighter mb-4 animate-pulse text-[#00FF9D]">WebDevAI</div>
<div className="font-code text-xs text-gray-500 tracking-[0.5em]" data-i18n="loader.text">WCZYTYWANIE DANYCH</div>
<div className="w-64 h-0.5 bg-gray-800 mt-4 overflow-hidden relative">
<div className="absolute inset-0 bg-[#00FF9D] w-full origin-left animate-[growth_2s_ease-out]"></div>
</div>
</div>
</div>

<canvas className="fixed top-0 left-0 w-full h-full -z-10 opacity-60" id="quantum-canvas"></canvas>

<nav className="fixed top-0 w-full z-50 px-8 py-6 flex justify-between items-center mix-blend-difference">
<div className="flex items-center gap-2 group cursor-none">
<iconify-icon className="text-[#00FF9D] text-2xl transition-transform group-hover:rotate-45" height="24" icon="solar:box-minimalistic-linear" width="24"></iconify-icon>
<span className="text-xl font-semibold text-white tracking-tighter font-orbitron">WebDevAI</span>
</div>
<div className="hidden md:flex gap-12 font-rajdhani font-semibold text-sm tracking-widest text-gray-400">
<a className="hover:text-[#00FF9D] transition-colors hover:scale-110 block" data-i18n="nav.about" href="#about">O NAS</a>
<a className="hover:text-[#00FF9D] transition-colors hover:scale-110 block" data-i18n="nav.services" href="#services">OFERTA</a>
<a className="hover:text-[#00FF9D] transition-colors hover:scale-110 block" data-i18n="nav.pricing" href="#pricing">CENNIK</a>
<a className="hover:text-[#00FF9D] transition-colors hover:scale-110 block" data-i18n="nav.contact" href="#contact">KONTAKT</a>
</div>
<div className="flex items-center gap-6">

<div className="flex gap-2 font-code text-xs font-bold z-50">
<button className="lang-btn hover:text-white transition-colors active" id="btn-pl" onclick="setLanguage('pl')">PL</button>
<span className="text-gray-600">|</span>
<button className="lang-btn hover:text-white transition-colors text-gray-500" id="btn-en" onclick="setLanguage('en')">EN</button>
<span className="text-gray-600">|</span>
<button className="lang-btn hover:text-white transition-colors text-gray-500" id="btn-it" onclick="setLanguage('it')">IT</button>
</div>
<div className="flex items-center gap-4">
<div className="font-code text-xs text-[#00FFF0] hidden lg:block">ONLINE</div>
<button className="bg-white/10 hover:bg-[#00FF9D] hover:text-black transition-all border border-white/20 px-6 py-2 rounded-none font-rajdhani font-semibold text-sm tracking-wider backdrop-blur-md" data-i18n="nav.consult">
                    DARMOWA KONSULTACJA
                </button>
</div>
</div>
</nav>

<section className="relative min-h-screen flex items-center justify-center perspective-1000 overflow-hidden" id="vision">
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A0A0F]/50 to-[#0A0A0F] z-0"></div>
<div className="relative z-10 text-center mix-blend-overlay preserve-3d">
<div className="font-rajdhani text-[#00FFF0] tracking-[0.5em] text-xs mb-6 opacity-0 animate-[fadeIn_1s_2s_forwards]" data-i18n="hero.subtitle">AGENCJA INTERAKTYWNA</div>
<h1 className="font-orbitron font-black text-6xl md:text-8xl tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-600 leading-[0.95] select-none glitch-hover cursor-none mb-6" data-i18n="hero.title">
                DOŚWIADCZENIE<br/>I NOWOCZESNOŚĆ
            </h1>
<p className="font-orbitron text-white text-lg md:text-xl tracking-tight mb-8" data-i18n="hero.desc">
                WebDevAI – Doświadczenie od 2010 roku. Nowoczesność od dzisiaj.
            </p>
<p className="font-code text-xs md:text-sm text-gray-500 mt-8 max-w-2xl mx-auto leading-relaxed border-l-2 border-[#7B2CBF] pl-4 text-left" data-i18n="hero.code">
                // TWORZYMY STRONY WWW, SKLEPY I CONTENT, KTÓRE SPRZEDAJĄ.<br/>
                // KOMPLEKSOWE WSPARCIE: OD WDROŻENIA PO OPIEKĘ.<br/>
                // EST. 2010
            </p>
<div className="mt-12">
<a className="inline-block bg-[#00FF9D] text-black px-8 py-4 font-rajdhani font-bold tracking-widest hover:bg-white transition-colors cursor-none" data-i18n="hero.cta" href="#pricing">SPRAWDŹ PAKIETY OPIEKI</a>
</div>
</div>

<div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
<div className="w-[1px] h-24 bg-gradient-to-b from-[#00FF9D] to-transparent"></div>
<span className="font-code text-[10px] tracking-widest" data-i18n="scroll">PRZEWIŃ DALEJ</span>
</div>
</section>

<section className="py-32 px-6 md:px-24 relative border-t border-white/5 bg-[#0A0A0F]/80 backdrop-blur-sm" id="about">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
<div className="space-y-8 animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000">
<div className="flex items-center gap-4 text-[#FF006E]">
<iconify-icon height="20" icon="solar:cpu-bolt-linear" width="20"></iconify-icon>
<span className="font-code text-xs tracking-widest" data-i18n="about.label">O NAS</span>
</div>
<h2 className="font-orbitron font-semibold text-4xl md:text-6xl leading-none tracking-tight" data-i18n="about.title">
                    15 LAT <span className="text-[#00FF9D]">DOŚWIADCZENIA</span>
</h2>
<p className="font-rajdhani font-medium text-lg text-gray-400 leading-relaxed" data-i18n="about.desc">
                    Jesteśmy butikową agencją. Łączymy kompetencje programistyczne, graficzne i marketingowe. Działamy na rynku nieprzerwanie od 2010 roku, oferując stabilność, której brakuje freelancerom, i elastyczność, której nie mają korporacje.
                </p>
<div className="text-sm font-code text-gray-500 pt-4 border-t border-white/10" data-i18n="about.partners">
                    PARTNERZY TECHNOLOGICZNI: AI, CYBER_FOLKS, LH.PL, WORDPRESS, WOOCOMMERCE, SHOPER, SHOPIFY, GOOGLE WORKSPACE.
                </div>
<div className="grid grid-cols-2 gap-4 mt-8">
<div className="p-6 border border-white/10 bg-white/5 hover:bg-white/10 transition-colors cursor-none group">
<h3 className="font-orbitron text-2xl mb-1 group-hover:text-[#00FFF0]">2010</h3>
<p className="font-code text-[10px] text-gray-500" data-i18n="about.stat1">ROK ZAŁOŻENIA</p>
</div>
<div className="p-6 border border-white/10 bg-white/5 hover:bg-white/10 transition-colors cursor-none group">
<h3 className="font-orbitron text-2xl mb-1 group-hover:text-[#7B2CBF]">100%</h3>
<p className="font-code text-[10px] text-gray-500" data-i18n="about.stat2">SATYSFAKCJI</p>
</div>
</div>
</div>
<div className="relative h-[400px] w-full perspective-1000 group animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000 delay-300">
<div className="absolute inset-0 border border-[#00FF9D]/30 bg-[#00FF9D]/5 transform rotate-y-12 rotate-x-6 transition-transform duration-700 group-hover:rotate-y-0 group-hover:rotate-x-0 flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&amp;w=2072&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-40 mix-blend-luminosity"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
<iconify-icon className="text-[#00FF9D] text-6xl relative z-10 animate-pulse" height="64" icon="solar:atom-linear" width="64"></iconify-icon>
</div>

<div className="absolute -top-10 -right-10 w-32 h-32 border border-[#FF006E]/50 rounded-full animate-[spin_10s_linear_infinite]"></div>
<div className="absolute -bottom-5 -left-5 w-24 h-24 border border-[#7B2CBF]/50 transform rotate-45"></div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden" id="services">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-[#00FF9D] to-transparent opacity-30"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<h2 className="font-orbitron font-semibold text-center text-3xl mb-20 tracking-tight animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000" data-i18n="services.title">NASZE USŁUGI</h2>

<div className="flex justify-between items-center mb-32 group animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000">
<div className="w-1/2 pr-12 text-right opacity-50 group-hover:opacity-100 transition-opacity duration-500">
<h3 className="font-orbitron text-3xl mb-2 text-white group-hover:text-[#00FFF0]" data-i18n="services.web.title">STRONY WWW</h3>
<p className="font-rajdhani text-sm uppercase tracking-wider text-[#00FFF0]">E-COMMERCE &amp; LANDING PAGES</p>
</div>
<div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-black border-2 border-[#00FF9D] rotate-45 group-hover:scale-150 group-hover:bg-[#00FF9D] transition-all duration-300 shadow-[0_0_20px_#00FF9D]"></div>
<div className="w-1/2 pl-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-x-10 group-hover:translate-x-0">
<p className="font-code text-xs text-gray-400 max-w-xs" data-i18n="services.web.desc">Responsywne strony wizytówki, Landing Page i sklepy e-commerce (WooCommerce, Shoper, Shopify). Szybkie i bezpieczne.</p>
</div>
</div>

<div className="flex justify-between items-center mb-32 group animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000">
<div className="w-1/2 pr-12 text-right opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-x-10 group-hover:translate-x-0">
<p className="font-code text-xs text-gray-400 max-w-xs ml-auto" data-i18n="services.care.desc">Stałe wsparcie techniczne, aktualizacje i bezpieczeństwo. Nie martw się o awarie – my czuwamy.</p>
</div>
<div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-black border-2 border-[#FF006E] rotate-45 group-hover:scale-150 group-hover:bg-[#FF006E] transition-all duration-300 shadow-[0_0_20px_#FF006E]"></div>
<div className="w-1/2 pl-12 opacity-50 group-hover:opacity-100 transition-opacity duration-500">
<h3 className="font-orbitron text-3xl mb-2 text-white group-hover:text-[#FF006E]" data-i18n="services.care.title">OPIEKA WWW</h3>
<p className="font-rajdhani text-sm uppercase tracking-wider text-[#FF006E]" data-i18n="services.care.sub">ADMINISTRACJA &amp; WSPARCIE</p>
</div>
</div>

<div className="flex justify-between items-center group animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000">
<div className="w-1/2 pr-12 text-right opacity-50 group-hover:opacity-100 transition-opacity duration-500">
<h3 className="font-orbitron text-3xl mb-2 text-white group-hover:text-[#7B2CBF]">CONTENT</h3>
<p className="font-rajdhani text-sm uppercase tracking-wider text-[#7B2CBF]">SOCIAL MEDIA &amp; MARKETING</p>
</div>
<div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-black border-2 border-[#7B2CBF] rotate-45 group-hover:scale-150 group-hover:bg-[#7B2CBF] transition-all duration-300 shadow-[0_0_20px_#7B2CBF]"></div>
<div className="w-1/2 pl-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-x-10 group-hover:translate-x-0">
<p className="font-code text-xs text-gray-400 max-w-xs" data-i18n="services.content.desc">Prowadzenie profili w social media, copywriting i strategia treści. Budujemy Twój wizerunek w sieci.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 bg-black relative" id="pricing">
<div className="flex justify-between items-end mb-16 max-w-[1920px] mx-auto animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000">
<h2 className="font-orbitron font-semibold text-5xl tracking-tighter" data-i18n="pricing.title">CENNIK<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FF9D] to-[#00FFF0]">PAKIETÓW</span></h2>
<div className="hidden md:flex gap-2">
<button className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all">
<iconify-icon height="20" icon="solar:widget-linear" width="20"></iconify-icon>
</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1920px] mx-auto animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000 delay-200">

<div className="group relative h-[50vh] min-h-[450px] border border-white/10 overflow-hidden cursor-none">
<div className="absolute inset-0 bg-[#0A0A0F] border-b border-[#00FF9D]/20"></div>
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&amp;w=2070&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-20 filter grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"></div>
<div className="absolute inset-0 p-8 flex flex-col justify-between">
<div>
<div className="flex items-center gap-2 mb-4">
<span className="w-2 h-2 bg-[#00FF9D] rounded-full animate-pulse"></span>
<span className="font-code text-[10px] tracking-widest text-[#00FF9D]">OPIEKA WWW BASIC</span>
</div>
<h3 className="text-4xl font-semibold tracking-tight font-orbitron mb-2" data-i18n="pricing.basic.price">od 350 PLN<span className="text-sm font-rajdhani text-gray-400">/mc</span></h3>
</div>
<ul className="font-rajdhani text-gray-300 space-y-3 mb-12">
<li className="flex items-center gap-2"><span className="text-[#00FF9D]">&gt;</span> <span data-i18n="pricing.feat.updates">Aktualizacje wtyczek</span></li>
<li className="flex items-center gap-2"><span className="text-[#00FF9D]">&gt;</span> <span data-i18n="pricing.feat.backups">Kopie zapasowe</span></li>
<li className="flex items-center gap-2"><span className="text-[#00FF9D]">&gt;</span> <span data-i18n="pricing.feat.monitoring">Monitoring 24/7</span></li>
</ul>
<div className="relative">
<div className="h-[1px] w-0 group-hover:w-full bg-[#00FF9D] transition-all duration-700 ease-out mb-4"></div>
<button className="text-sm font-code tracking-widest hover:text-[#00FF9D] transition-colors" data-i18n="pricing.btn">WYBIERZ PAKIET -&gt;</button>
</div>
</div>
</div>

<div className="group relative h-[50vh] min-h-[450px] border border-white/10 overflow-hidden cursor-none">
<div className="absolute inset-0 bg-[#0A0A0F] border-b border-[#7B2CBF]/20"></div>
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558494949-ef526b0042a0?q=80&amp;w=2072&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-20 filter grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"></div>
<div className="absolute inset-0 p-8 flex flex-col justify-between">
<div>
<div className="flex items-center gap-2 mb-4">
<span className="w-2 h-2 bg-[#7B2CBF] rounded-full animate-pulse"></span>
<span className="font-code text-[10px] tracking-widest text-[#7B2CBF]">OPIEKA WWW VIP</span>
</div>
<h3 className="font-orbitron font-semibold text-4xl mb-2 tracking-tight" data-i18n="pricing.vip.price">od 500 PLN<span className="text-sm font-rajdhani text-gray-400">/mc</span></h3>
</div>
<ul className="font-rajdhani text-gray-300 space-y-3 mb-12">
<li className="flex items-center gap-2"><span className="text-[#7B2CBF]">&gt;</span> <span data-i18n="pricing.feat.basic_plus">Wszystko z Basic</span></li>
<li className="flex items-center gap-2"><span className="text-[#7B2CBF]">&gt;</span> <span data-i18n="pricing.feat.hours">2h prac programisty</span></li>
<li className="flex items-center gap-2"><span className="text-[#7B2CBF]">&gt;</span> <span data-i18n="pricing.feat.priority">Priorytetowe wsparcie</span></li>
</ul>
<div className="relative">
<div className="h-[1px] w-0 group-hover:w-full bg-[#7B2CBF] transition-all duration-700 ease-out mb-4"></div>
<button className="text-sm font-code tracking-widest hover:text-[#7B2CBF] transition-colors" data-i18n="pricing.btn">WYBIERZ PAKIET -&gt;</button>
</div>
</div>
</div>

<div className="group relative h-[50vh] min-h-[450px] border border-white/10 overflow-hidden cursor-none">
<div className="absolute inset-0 bg-[#0A0A0F] border-b border-[#FF006E]/20"></div>
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&amp;w=1974&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-20 filter grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"></div>
<div className="absolute inset-0 p-8 flex flex-col justify-between">
<div>
<div className="flex items-center gap-2 mb-4">
<span className="w-2 h-2 bg-[#FF006E] rounded-full animate-pulse"></span>
<span className="font-code text-[10px] tracking-widest text-[#FF006E]">SOCIAL MEDIA START</span>
</div>
<h3 className="font-orbitron font-semibold text-4xl mb-2 tracking-tight" data-i18n="pricing.social.price">od 800 PLN<span className="text-sm font-rajdhani text-gray-400">/mc</span></h3>
</div>
<ul className="font-rajdhani text-gray-300 space-y-3 mb-12">
<li className="flex items-center gap-2"><span className="text-[#FF006E]">&gt;</span> <span data-i18n="pricing.feat.posts">4 posty miesięcznie</span></li>
<li className="flex items-center gap-2"><span className="text-[#FF006E]">&gt;</span> <span data-i18n="pricing.feat.graphics">Profesjonalne grafiki</span></li>
<li className="flex items-center gap-2"><span className="text-[#FF006E]">&gt;</span> <span data-i18n="pricing.feat.reports">Moderacja i raporty</span></li>
</ul>
<div className="relative">
<div className="h-[1px] w-0 group-hover:w-full bg-[#FF006E] transition-all duration-700 ease-out mb-4"></div>
<button className="text-sm font-code tracking-widest hover:text-[#FF006E] transition-colors" data-i18n="pricing.btn">WYBIERZ PAKIET -&gt;</button>
</div>
</div>
</div>
</div>
<div className="text-center mt-12 font-code text-xs text-gray-500 tracking-wider animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000 delay-300" data-i18n="pricing.footer">
            WDROŻENIA STRON WWW OD 1500 PLN | SKLEPY INTERNETOWE OD 3500 PLN | AUDYT GRATIS
        </div>
</section>

<section className="min-h-screen flex items-center justify-center relative overflow-hidden py-24" id="contact">

<div className="absolute inset-0 overflow-hidden pointer-events-none transition-all duration-1000">
<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#7B2CBF] rounded-full mix-blend-screen filter blur-[100px] opacity-20 animate-pulse"></div>
<div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#00FF9D] rounded-full mix-blend-screen filter blur-[80px] opacity-10 animate-pulse delay-1000"></div>
</div>
<div className="max-w-2xl w-full px-8 relative z-10 animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000">
<div className="text-center mb-12">
<iconify-icon className="text-[#00FF9D] mx-auto mb-6 animate-[spin_20s_linear_infinite]" height="48" icon="solar:black-hole-3-linear" width="48"></iconify-icon>
<h2 className="font-orbitron font-semibold text-5xl mb-2 tracking-tight" data-i18n="contact.title">SKONTAKTUJ SIĘ</h2>
<p className="font-code text-xs text-gray-500 tracking-widest" data-i18n="contact.subtitle">FORMULARZ KONTAKTOWY // SZYFROWANY</p>
</div>

<form action="https://formsubmit.co/office@webdevai.eu" className="space-y-12" method="POST">

<input name="_honey" style={{display: 'none'}} type="text"/>

<input name="_captcha" type="hidden" value="false"/>
<div className="relative group">
<input className="w-full bg-transparent border-b border-gray-800 py-4 text-2xl font-rajdhani text-white focus:outline-none focus:border-[#00FF9D] transition-colors peer placeholder-transparent" name="name" required="" type="text"/>
<label className="absolute left-0 top-4 text-gray-500 font-code text-xs tracking-widest transition-all peer-focus:-top-4 peer-focus:text-[#00FF9D] peer-valid:-top-4 peer-valid:text-[#00FF9D]" data-i18n="contact.name">IMIĘ I NAZWISKO</label>
<div className="absolute right-0 top-4 opacity-0 peer-focus:opacity-100 transition-opacity">
<span className="font-code text-[10px] text-[#00FF9D] animate-pulse" data-i18n="contact.scan">SKANOWANIE...</span>
</div>
</div>
<div className="relative group">
<input className="w-full bg-transparent border-b border-gray-800 py-4 text-2xl font-rajdhani text-white focus:outline-none focus:border-[#7B2CBF] transition-colors peer placeholder-transparent" name="email" required="" type="email"/>
<label className="absolute left-0 top-4 text-gray-500 font-code text-xs tracking-widest transition-all peer-focus:-top-4 peer-focus:text-[#7B2CBF] peer-valid:-top-4 peer-valid:text-[#7B2CBF]" data-i18n="contact.email">ADRES E-MAIL</label>
</div>
<div className="relative group">
<textarea className="w-full bg-transparent border-b border-gray-800 py-4 text-2xl font-rajdhani text-white focus:outline-none focus:border-[#FF006E] transition-colors peer placeholder-transparent resize-none" name="message" required="" rows="1"></textarea>
<label className="absolute left-0 top-4 text-gray-500 font-code text-xs tracking-widest transition-all peer-focus:-top-4 peer-focus:text-[#FF006E] peer-valid:-top-4 peer-valid:text-[#FF006E]" data-i18n="contact.msg">TREŚĆ WIADOMOŚCI</label>
</div>
<div className="flex justify-end pt-8">
<button className="group relative px-10 py-4 bg-transparent border border-white/20 overflow-hidden" type="submit">
<div className="transition-all duration-[250ms] ease-out group-hover:w-full bg-white w-0 absolute top-0 right-0 bottom-0 left-0"></div>
<span className="group-hover:text-black flex items-center gap-2 font-bold text-white tracking-widest font-orbitron relative">
<span data-i18n="contact.btn">WYŚLIJ</span> <iconify-icon height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</span>
</button>
</div>
</form>

</div>
</section>

<footer className="border-t border-white/10 bg-[#050507] py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
<div className="flex items-center gap-2">
<iconify-icon className="text-[#00FF9D]" height="20" icon="solar:box-minimalistic-linear" width="20"></iconify-icon>
<span className="font-orbitron font-semibold text-lg tracking-tight">WebDevAI</span>
</div>
<div className="font-code text-[10px] text-gray-600 tracking-widest text-center md:text-left">
<span data-i18n="footer.copy">© 2010-2026 WebDevAI. WSZELKIE PRAWA ZASTRZEŻONE.</span><br/>
<button className="hover:text-white transition-colors uppercase tracking-widest" data-i18n="footer.privacy" onclick="toggleModal('privacy-modal')">POLITYKA PRYWATNOŚCI</button> | 
                <button className="hover:text-white transition-colors uppercase tracking-widest" data-i18n="footer.terms" onclick="toggleModal('terms-modal')">REGULAMIN</button>
</div>
<div className="flex gap-6">
<a className="text-gray-500 hover:text-[#00FF9D] transition-colors" href="#"><iconify-icon height="20" icon="mdi:instagram" width="20"></iconify-icon></a>
<a className="text-gray-500 hover:text-[#00FFF0] transition-colors" href="#"><iconify-icon height="20" icon="mdi:twitter" width="20"></iconify-icon></a>
<a className="text-gray-500 hover:text-[#7B2CBF] transition-colors" href="#"><iconify-icon height="20" icon="mdi:linkedin" width="20"></iconify-icon></a>
</div>
</div>
</footer>

<div className="fixed inset-0 z-[100] hidden transition-opacity duration-300" id="privacy-modal">
<div className="absolute inset-0 bg-black/80 backdrop-blur-md" onclick="toggleModal('privacy-modal')"></div>
<div className="absolute right-0 top-0 h-full w-full md:w-[600px] bg-[#0A0A0F] border-l border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.8)] transform transition-transform duration-300 translate-x-full flex flex-col" id="privacy-content">
<div className="flex items-center justify-between p-8 border-b border-white/10 bg-[#0A0A0F] z-10">
<h2 className="font-orbitron text-xl text-white" data-i18n="footer.privacy">POLITYKA PRYWATNOŚCI</h2>
<button className="text-gray-500 hover:text-[#FF006E] transition-colors" onclick="toggleModal('privacy-modal')">
<iconify-icon height="32" icon="solar:close-circle-linear" width="32"></iconify-icon>
</button>
</div>
<div className="p-8 overflow-y-auto legal-content custom-scrollbar flex-1" data-i18n="legal.privacy_content">

</div>
</div>
</div>

<div className="fixed inset-0 z-[100] hidden transition-opacity duration-300" id="terms-modal">
<div className="absolute inset-0 bg-black/80 backdrop-blur-md" onclick="toggleModal('terms-modal')"></div>
<div className="absolute right-0 top-0 h-full w-full md:w-[600px] bg-[#0A0A0F] border-l border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.8)] transform transition-transform duration-300 translate-x-full flex flex-col" id="terms-content">
<div className="flex items-center justify-between p-8 border-b border-white/10 bg-[#0A0A0F] z-10">
<h2 className="font-orbitron text-xl text-white" data-i18n="footer.terms">REGULAMIN</h2>
<button className="text-gray-500 hover:text-[#00FF9D] transition-colors" onclick="toggleModal('terms-modal')">
<iconify-icon height="32" icon="solar:close-circle-linear" width="32"></iconify-icon>
</button>
</div>
<div className="p-8 overflow-y-auto legal-content custom-scrollbar flex-1" data-i18n="legal.terms_content">

</div>
</div>
</div>



    </>
  );
}
