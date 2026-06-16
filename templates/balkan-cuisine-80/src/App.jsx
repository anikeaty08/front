import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
tailwind.config = {
theme: {
extend: {
colors: {
charcoal: '#0f0c09',
ember: '#C8783A',
wine: '#8B1A1A',
cream: '#F2EAD9',
surface: '#1C1612',
gold: '#E8C88A',
},
fontFamily: {
serif: ['"Playfair Display"', 'serif'],
sans: ['"Inter"', 'sans-serif'],
},
boxShadow: {
'glow': '0 0 20px rgba(200, 120, 58, 0.15)',
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // 1. Scroll Animations (Fade Up)
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.fade-up').forEach((el) => {
            observer.observe(el);
        });

        // 2. Sticky Navbar Background Logic
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('bg-charcoal', 'border-ember/40', 'shadow-lg');
                navbar.classList.remove('bg-gradient-to-b', 'border-transparent');
            } else {
                navbar.classList.remove('bg-charcoal', 'border-ember/40', 'shadow-lg');
                navbar.classList.add('bg-gradient-to-b', 'border-transparent');
            }
        });

        // 3. Mobile Menu Toggle
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileLinks = document.querySelectorAll('.mobile-link');
        let isMenuOpen = false;

        function toggleMenu() {
            isMenuOpen = !isMenuOpen;
            if (isMenuOpen) {
                mobileMenu.classList.remove('hidden');
                // Small timeout to allow the block display to render before transitioning opacity
                setTimeout(() => {
                    mobileMenu.classList.remove('opacity-0');
                    mobileMenu.classList.add('opacity-100');
                }, 10);
                document.body.style.overflow = 'hidden';
                mobileMenuBtn.innerHTML = '<iconify-icon icon="solar:close-circle-linear" class="text-2xl text-ember"></iconify-icon>';
            } else {
                mobileMenu.classList.add('opacity-0');
                mobileMenu.classList.remove('opacity-100');
                document.body.style.overflow = 'auto';
                mobileMenuBtn.innerHTML = '<iconify-icon icon="solar:hamburger-menu-linear" class="text-2xl"></iconify-icon>';
                // Hide element fully after animation ends
                setTimeout(() => {
                    if (!isMenuOpen) mobileMenu.classList.add('hidden');
                }, 300);
            }
        }

        mobileMenuBtn.addEventListener('click', toggleMenu);
        mobileLinks.forEach(link => {
            link.addEventListener('click', toggleMenu);
        });

        // 4. Menu Tab Filtering
        const tabs = document.querySelectorAll('.menu-tab');
        const items = document.querySelectorAll('.menu-item');

        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                // Remove active styling from all tabs
                tabs.forEach(t => {
                    t.classList.remove('bg-ember', 'text-charcoal');
                    t.classList.add('text-cream/70');
                });
                // Add active styling to clicked tab
                tab.classList.add('bg-ember', 'text-charcoal');
                tab.classList.remove('text-cream/70');

                const target = tab.getAttribute('data-target');

                // Hide all, show targeted
                items.forEach(item => {
                    if (item.classList.contains(target)) {
                        item.classList.remove('hidden');
                        // Small trick to trigger animation
                        item.style.opacity = '0';
                        setTimeout(() => { item.style.transition = 'opacity 0.4s ease'; item.style.opacity = '1'; }, 50);
                    } else {
                        item.classList.add('hidden');
                    }
                });
            });
        });

        // 5. Form Handling
        const form = document.getElementById('reservation-form');
        const successMsg = document.getElementById('form-success');

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            form.style.opacity = '0';
            setTimeout(() => {
                form.classList.add('hidden');
                successMsg.classList.remove('hidden');
                successMsg.style.display = 'flex';
                // Reset opacity for potential reuse
                form.style.opacity = '1';
            }, 300);
        });

        function resetForm() {
            form.reset();
            successMsg.classList.add('hidden');
            successMsg.style.display = 'none';
            form.classList.remove('hidden');
        }

        // 6. Cookie Banner Logic
        const cookieBanner = document.getElementById('cookie-banner');
        function dismissCookies() {
            cookieBanner.classList.remove('translate-y-0', 'opacity-100');
            cookieBanner.classList.add('translate-y-10', 'opacity-0');
            setTimeout(() => {
                cookieBanner.style.display = 'none';
            }, 500);
        }

        // Initialize today's date in date picker
        const dateInput = document.querySelector('input[type="date"]');
        if(dateInput) {
            dateInput.min = new Date().toISOString().split("T")[0];
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed z-50 transition-all duration-300 w-full border-b top-0" id="navbar">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex items-center justify-between h-20">

<a className="flex items-center gap-2 group" href="#">
<iconify-icon className="text-ember text-2xl group-hover:scale-110 transition-transform" icon="solar:fire-linear"></iconify-icon>
<span className="font-serif font-medium text-xl tracking-tight text-cream">Moosacher Paradies</span>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-cream/80 hover:text-ember transition-colors" href="#speisekarte">Speisekarte</a>
<a className="text-sm font-medium text-cream/80 hover:text-ember transition-colors" href="#restaurant">Restaurant</a>
<a className="text-sm font-medium text-cream/80 hover:text-ember transition-colors" href="#ambiente">Galerie</a>
<a className="text-sm font-medium text-cream/80 hover:text-ember transition-colors" href="#kontakt">Kontakt</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden md:inline-flex items-center justify-center bg-ember text-charcoal font-semibold text-sm px-6 py-2.5 rounded-full hover:bg-gold transition-colors shadow-glow" href="#reservierung">
                        Reservieren
                    </a>
<button className="md:hidden text-cream p-2" id="mobile-menu-btn">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</nav>

<div className="fixed z-40 hidden flex-col transition-opacity duration-300 opacity-0 top-0 right-0 bottom-0 left-0 items-center justify-center bg-charcoal/98 backdrop-blur-md" id="mobile-menu">
<div className="flex flex-col gap-8 items-center">
<a className="mobile-link text-cream hover:text-ember transition-colors text-3xl tracking-tight font-serif" href="#speisekarte">Speisekarte</a>
<a className="mobile-link font-serif text-3xl tracking-tight text-cream hover:text-ember transition-colors" href="#restaurant">Restaurant</a>
<a className="mobile-link font-serif text-3xl tracking-tight text-cream hover:text-ember transition-colors" href="#ambiente">Galerie</a>
<a className="mobile-link font-serif text-3xl tracking-tight text-cream hover:text-ember transition-colors" href="#kontakt">Kontakt</a>
<a className="mobile-link mt-4 bg-ember text-charcoal font-medium text-lg px-8 py-3 rounded-full" href="#reservierung">Tisch reservieren</a>
</div>
</div>

<section className="min-h-screen flex overflow-hidden pt-20 relative items-center justify-center">

<div className="z-0 absolute top-0 right-0 bottom-0 left-0">
<img alt="Balkan Grill" className="object-center opacity-60 w-full h-full object-cover" src="https://www.moosacherparadies.de/app/uploads/slider/cache/ed0487524881b0bc9d028e8c3ae33b90/DSC01722_5-scaled.jpg?w=800&amp;q=80"/>

<div className="bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="bg-gradient-to-r from-charcoal/80 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="lg:px-8 flex flex-col w-full h-full max-w-7xl mr-auto ml-auto pt-12 pr-6 pb-24 pl-6 relative items-start justify-center">
<span className="fade-up inline-block text-ember font-medium tracking-wide uppercase text-xs mb-4 visible">Mehrfach ausgezeichnet in Bayern</span>
<h1 className="fade-up font-serif font-medium text-5xl md:text-6xl lg:text-7xl tracking-tight text-cream max-w-4xl leading-tight mb-6 visible">
                Balkan-Küche im<br/>Münchner Norden
            </h1>
<p className="fade-up text-lg md:text-xl text-cream/80 max-w-2xl mb-10 font-light visible">
                Traditionelle Aromen, glühende Holzkohle und echte Gastfreundschaft. Erleben Sie das vielfach prämierte Lokal des Jahres.
            </p>
<div className="fade-up flex flex-col sm:flex-row gap-4 visible">
<a className="inline-flex items-center justify-center bg-ember text-charcoal font-semibold text-sm px-8 py-3.5 rounded-full hover:bg-gold transition-colors" href="#reservierung">
                    Tisch reservieren
                </a>
<a className="inline-flex items-center justify-center border border-cream/30 text-cream font-semibold text-sm px-8 py-3.5 rounded-full hover:bg-cream hover:text-charcoal transition-colors" href="#speisekarte">
                    Speisekarte ansehen
                </a>
</div>
</div>

<div className="fade-up absolute bottom-8 left-6 lg:left-8 z-10 visible">
<div className="bg-surface/40 backdrop-blur-md border border-white/10 rounded-2xl p-4 flex items-center gap-4 shadow-lg">
<div className="flex items-center justify-center w-10 h-10 bg-white/10 rounded-full">
<iconify-icon className="text-gold text-xl" icon="solar:star-fall-linear"></iconify-icon>
</div>
<div>
<div className="flex items-center gap-1 text-gold mb-0.5">
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<span className="text-cream font-medium text-sm ml-1">4.8</span>
</div>
<span className="text-xs text-cream/60">Über 14.000 Google-Bewertungen</span>
</div>
</div>
</div>

<a className="absolute bottom-8 right-6 lg:right-8 z-10 animate-bounce text-cream/50 hover:text-ember transition-colors" href="#restaurant">
<iconify-icon className="text-2xl" icon="solar:alt-arrow-down-linear"></iconify-icon>
</a>
</section>

<section className="pt-24 pb-24 relative" id="restaurant">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="fade-up relative order-2 lg:order-1">
<div className="absolute -inset-4 border border-ember/20 rounded-3xl transform -rotate-2"></div>
<img alt="Restaurant Atmosphäre" className="w-full h-[600px] object-cover rounded-2xl relative shadow-2xl" src="https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute -bottom-6 -right-6 bg-surface p-6 rounded-2xl border border-ember/20 shadow-xl">
<iconify-icon className="text-4xl text-ember mb-2" icon="solar:medal-star-linear"></iconify-icon>
<div className="font-serif text-lg tracking-tight">Lokal des Jahres</div>
<div className="text-xs text-cream/60 uppercase tracking-widest mt-1">Bayern</div>
</div>
</div>

<div className="fade-up order-1 lg:order-2">
<h2 className="font-serif font-medium text-3xl md:text-5xl tracking-tight text-cream mb-6 leading-tight">
                        Mehr als ein Restaurant — <br/><span className="text-ember italic font-light">eine Geschichte.</span>
</h2>
<p className="text-cream/70 text-lg mb-6 leading-relaxed font-light">
                        Der Name ist kein Zufall. Das Moosacher Paradies steht für authentische Balkanküche, herzliche Gastfreundschaft und über Jahre gewachsene Tradition.
                    </p>
<p className="text-cream/70 text-lg mb-12 leading-relaxed font-light">
                        Inhaber Asmir Husejdić und sein Team bringen die Aromen des Balkans direkt nach München — täglich frisch, mit Leidenschaft zubereitet, nach Originalrezeptur. Ein Ort, an dem man als Gast kommt und als Freund geht.
                    </p>

<div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8 border-t border-cream/10">
<div className="">
<div className="text-ember font-medium text-sm mb-1 uppercase tracking-wider">Qualität</div>
<div className="font-serif text-xl tracking-tight">Mehrfach ausgezeichnet</div>
</div>
<div>
<div className="text-ember font-medium text-sm mb-1 uppercase tracking-wider">Vertrauen</div>
<div className="font-serif text-xl tracking-tight">14.000+ Reviews</div>
</div>
<div>
<div className="text-ember font-medium text-sm mb-1 uppercase tracking-wider">Tradition</div>
<div className="font-serif text-xl tracking-tight">Seit Jahren etabliert</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden pt-24 pb-24 relative" id="speisekarte">

<div className="absolute inset-0 opacity-5" style={{backgroundImage: 'radial-gradient(#C8783A 1px, transparent 1px)', backgroundSize: '32px 32px'}}></div>
<div className="lg:px-8 z-10 max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">
<div className="fade-up text-center mb-16">
<span className="inline-flex items-center gap-2 text-ember text-sm uppercase tracking-widest font-medium mb-4">
<iconify-icon icon="solar:fire-linear"></iconify-icon> Vom Grill direkt auf Ihren Tisch
                </span>
<h2 className="font-serif font-medium text-4xl md:text-5xl tracking-tight text-cream mb-4">Unsere Spezialitäten</h2>
<p className="text-cream/60 max-w-2xl mx-auto font-light">Traditionelle Balkanspezialitäten — nach Originalrezeptur, ohne Kompromisse. <br/>Schweinefleischfreie Optionen verfügbar.</p>
</div>

<div className="fade-up flex overflow-x-auto hide-scrollbar gap-2 mb-12 justify-start md:justify-center border-b border-cream/10 pb-4">
<button className="menu-tab active px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap bg-ember text-charcoal transition-all" data-target="balkan">Balkan-Grill</button>
<button className="menu-tab px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap text-cream/70 hover:text-cream hover:bg-white/5 transition-all" data-target="schnitzel">Schnitzel</button>
<button className="menu-tab px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap text-cream/70 hover:text-cream hover:bg-white/5 transition-all" data-target="fruehstueck">Frühstück</button>
<button className="menu-tab px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap text-cream/70 hover:text-cream hover:bg-white/5 transition-all" data-target="pizza">Pizza</button>
<button className="menu-tab px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap text-cream/70 hover:text-cream hover:bg-white/5 transition-all" data-target="desserts">Desserts</button>
</div>

<div className="fade-up grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="menu-grid">

<div className="menu-item balkan bg-charcoal rounded-2xl p-6 border border-ember/20 hover:border-ember/50 hover:-translate-y-1 transition-all duration-300 relative group">
<span className="absolute top-4 left-4 bg-surface text-cream/50 text-xs px-2 py-1 rounded border border-white/5">101</span>
<div className="mt-8 flex justify-between items-start gap-4 mb-2">
<h3 className="font-serif text-lg tracking-tight leading-snug">Cevapcici im Fladenbrot</h3>
<span className="text-ember font-medium whitespace-nowrap">€ 9,50</span>
</div>
<p className="text-sm text-cream/60 font-light">(10 St.) — nach eigenem Rezept, dazu Ajvar, Schmand und Zwiebeln</p>
</div>
<div className="menu-item balkan bg-charcoal rounded-2xl p-6 border border-ember/20 hover:border-ember/50 hover:-translate-y-1 transition-all duration-300 relative group">
<span className="absolute top-4 left-4 bg-surface text-cream/50 text-xs px-2 py-1 rounded border border-white/5">103</span>
<div className="mt-8 flex justify-between items-start gap-4 mb-2">
<h3 className="font-serif text-lg tracking-tight leading-snug">Cevapcici mit Pommes</h3>
<span className="text-ember font-medium whitespace-nowrap">€ 9,50</span>
</div>
<p className="text-sm text-cream/60 font-light">(10 St.) — dazu Djuvecreis, Ajvar und Zwiebeln</p>
</div>
<div className="menu-item balkan bg-charcoal rounded-2xl p-6 border border-ember/20 hover:border-ember/50 hover:-translate-y-1 transition-all duration-300 relative group">
<span className="absolute top-4 left-4 bg-surface text-cream/50 text-xs px-2 py-1 rounded border border-white/5">104</span>
<div className="mt-8 flex justify-between items-start gap-4 mb-2">
<h3 className="font-serif text-lg tracking-tight leading-snug">Raznjici (2 Spieße)</h3>
<span className="text-ember font-medium whitespace-nowrap">€ 14,50</span>
</div>
<p className="text-sm text-cream/60 font-light">Kalbfleisch, dazu Djuvecreis, Pommes Frites, Ajvar und Zwiebeln</p>
</div>
<div className="menu-item balkan bg-charcoal rounded-2xl p-6 border border-ember/20 hover:border-ember/50 hover:-translate-y-1 transition-all duration-300 relative group">
<span className="absolute top-4 left-4 bg-surface text-cream/50 text-xs px-2 py-1 rounded border border-white/5">105</span>
<div className="mt-8 flex justify-between items-start gap-4 mb-2">
<h3 className="font-serif text-lg tracking-tight leading-snug">Pljeskavica (Hacksteak)</h3>
<span className="text-ember font-medium whitespace-nowrap">€ 9,50</span>
</div>
<p className="text-sm text-cream/60 font-light">Mit Zwiebeln, Pommes Frites, Djuvecreis und Ajvar</p>
</div>
<div className="menu-item balkan bg-charcoal rounded-2xl p-6 border border-ember/40 shadow-glow hover:-translate-y-1 transition-all duration-300 relative group">
<span className="absolute -top-3 right-4 bg-ember text-charcoal text-[10px] uppercase tracking-wider font-semibold px-3 py-1 rounded-full">Hausempfehlung</span>
<div className="mt-4 flex justify-between items-start gap-4 mb-2">
<h3 className="font-serif text-lg tracking-tight leading-snug text-gold">Balkan Grillteller „Moosacher Paradies"</h3>
<span className="text-ember font-medium whitespace-nowrap">€ 18,00</span>
</div>
<p className="text-sm text-cream/60 font-light">Ohne Schwein — verschiedene Fleischsorten vom Grill mit Djuvecreis, Pommes Frites und Zwiebeln</p>
</div>
<div className="menu-item balkan bg-charcoal rounded-2xl p-6 border border-ember/20 hover:border-ember/50 hover:-translate-y-1 transition-all duration-300 relative group">
<span className="absolute -top-3 right-4 bg-surface border border-white/10 text-cream/80 text-[10px] uppercase tracking-wider font-medium px-3 py-1 rounded-full">Für Gruppen</span>
<div className="mt-4 flex justify-between items-start gap-4 mb-2">
<h3 className="font-serif text-lg tracking-tight leading-snug">Premium Platte (6 Pers.)</h3>
<span className="text-ember font-medium whitespace-nowrap">€ 99,00</span>
</div>
<p className="text-sm text-cream/60 font-light">Pute &amp; Kalb, Curryreis, Djuvecreis, Pommes</p>
</div>

<div className="menu-item schnitzel hidden bg-charcoal rounded-2xl p-6 border border-ember/20 hover:border-ember/50 hover:-translate-y-1 transition-all duration-300 relative">
<span className="absolute top-4 left-4 bg-surface text-cream/50 text-xs px-2 py-1 rounded border border-white/5">151</span>
<div className="mt-8 flex justify-between items-start gap-4 mb-2">
<h3 className="font-serif text-lg tracking-tight leading-snug">Moosacher Schnitzel</h3>
<span className="text-ember font-medium whitespace-nowrap">€ 13,90</span>
</div>
<p className="text-sm text-cream/60 font-light">In Butter gebacken, mit Senf gebeizt, dazu Bratkartoffeln</p>
</div>
<div className="menu-item schnitzel hidden bg-charcoal rounded-2xl p-6 border border-ember/20 hover:border-ember/50 hover:-translate-y-1 transition-all duration-300 relative">
<span className="absolute top-4 left-4 bg-surface text-cream/50 text-xs px-2 py-1 rounded border border-white/5">161</span>
<div className="mt-8 flex justify-between items-start gap-4 mb-2">
<h3 className="font-serif text-lg tracking-tight leading-snug text-gold">Original Wiener Schnitzel</h3>
<span className="text-ember font-medium whitespace-nowrap">€ 15,90</span>
</div>
<p className="text-sm text-cream/60 font-light">Vom Kalb, original zubereitet mit Bratkartoffeln</p>
</div>
<div className="menu-item schnitzel hidden bg-charcoal rounded-2xl p-6 border border-ember/20 hover:border-ember/50 hover:-translate-y-1 transition-all duration-300 relative">
<span className="absolute top-4 left-4 bg-surface text-cream/50 text-xs px-2 py-1 rounded border border-white/5">156</span>
<div className="mt-8 flex justify-between items-start gap-4 mb-2">
<h3 className="font-serif text-lg tracking-tight leading-snug">König Ludwig Rolle</h3>
<span className="text-ember font-medium whitespace-nowrap">€ 15,90</span>
</div>
<p className="text-sm text-cream/60 font-light">Schnitzel mit Frischkäse, Schinken, gerollt, paniert, Weinremouladensauce, Bratkartoffeln</p>
</div>

<div className="menu-item fruehstueck hidden bg-charcoal rounded-2xl p-6 border border-ember/20 hover:border-ember/50 hover:-translate-y-1 transition-all duration-300 relative">
<div className="flex justify-between items-start gap-4 mb-2">
<h3 className="font-serif text-lg tracking-tight leading-snug text-gold">Frühstück „Moosacher Paradies"</h3>
</div>
<p className="text-sm text-cream/60 font-light mb-2">Für 2 Personen — Teigbällchen, Eier nach Wahl, geräucherte Rinderwurst, Frischkäse, Käse, Marmelade, inkl. 2 Kaffee/Tee</p>
</div>
<div className="menu-item fruehstueck hidden bg-charcoal rounded-2xl p-6 border border-ember/20 hover:border-ember/50 hover:-translate-y-1 transition-all duration-300 relative">
<div className="flex justify-between items-start gap-4 mb-2">
<h3 className="font-serif text-lg tracking-tight leading-snug">Brotzeitteller</h3>
<span className="text-ember font-medium whitespace-nowrap">€ 12,90</span>
</div>
<p className="text-sm text-cream/60 font-light">Käse, Schinken, Butter, gekochtes Ei, frisches Brot</p>
</div>

<div className="menu-item pizza hidden bg-charcoal rounded-2xl p-6 border border-ember/20 hover:border-ember/50 hover:-translate-y-1 transition-all duration-300 relative">
<span className="absolute top-4 left-4 bg-surface text-cream/50 text-xs px-2 py-1 rounded border border-white/5">212</span>
<div className="mt-8 flex justify-between items-start gap-4 mb-2">
<h3 className="font-serif text-lg tracking-tight leading-snug">Pizza Moosacher Paradies</h3>
<span className="text-ember font-medium whitespace-nowrap">€ 14,90</span>
</div>
<p className="text-sm text-cream/60 font-light">Belegt mit gegrilltem Baby Calamari</p>
</div>
<div className="menu-item pizza hidden bg-charcoal rounded-2xl p-6 border border-ember/20 hover:border-ember/50 hover:-translate-y-1 transition-all duration-300 relative">
<span className="absolute top-4 left-4 bg-surface text-cream/50 text-xs px-2 py-1 rounded border border-white/5">213</span>
<div className="mt-8 flex justify-between items-start gap-4 mb-2">
<h3 className="font-serif text-lg tracking-tight leading-snug">Sarajevska Lepinja / Somun</h3>
<span className="text-ember font-medium whitespace-nowrap">€ 2,50</span>
</div>
<p className="text-sm text-cream/60 font-light">Hausgemachtes Fladenbrot frisch aus dem Holzofen</p>
</div>

<div className="menu-item desserts hidden bg-charcoal rounded-2xl p-6 border border-ember/20 hover:border-ember/50 hover:-translate-y-1 transition-all duration-300 relative">
<span className="absolute top-4 left-4 bg-surface text-cream/50 text-xs px-2 py-1 rounded border border-white/5">281</span>
<div className="mt-8 flex justify-between items-start gap-4 mb-2">
<h3 className="font-serif text-lg tracking-tight leading-snug">Heiße Liebe</h3>
<span className="text-ember font-medium whitespace-nowrap">€ 4,90</span>
</div>
<p className="text-sm text-cream/60 font-light">Bourbon-Vanilleeis mit heißer Himbeersauce und Schlagsahne</p>
</div>
<div className="menu-item desserts hidden bg-charcoal rounded-2xl p-6 border border-ember/20 hover:border-ember/50 hover:-translate-y-1 transition-all duration-300 relative">
<span className="absolute top-4 left-4 bg-surface text-cream/50 text-xs px-2 py-1 rounded border border-white/5">284</span>
<div className="mt-8 flex justify-between items-start gap-4 mb-2">
<h3 className="font-serif text-lg tracking-tight leading-snug text-gold">Kaiserschmarrn aus der Pfanne</h3>
<span className="text-ember font-medium whitespace-nowrap">€ 7,90</span>
</div>
<p className="text-sm text-cream/60 font-light">Mit Apfelmus und Rosinen, traditionell zubereitet</p>
</div>
</div>
<div className="fade-up mt-12 text-center">
<a className="inline-flex items-center gap-2 text-sm text-cream/70 hover:text-ember transition-colors border-b border-transparent hover:border-ember pb-1" href="#">
                    Vollständige Speisekarte ansehen <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
<p className="text-xs text-cream/40 mt-6 font-light">Bei Fragen zu Allergenen wenden Sie sich bitte an unser Personal.</p>
</div>
</div>
</section>

<section className="text-charcoal pt-24 pb-24 relative" id="ambiente">
<div className="lg:px-8 max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="fade-up text-center max-w-3xl mr-auto mb-16 ml-auto">
<h2 className="font-serif font-medium text-4xl md:text-5xl tracking-tight mb-4">Genießen Sie einen Abend, den Sie nicht vergessen werden.</h2>
</div>

<div className="fade-up masonry-grid">

<div className="masonry-item relative group overflow-hidden rounded-2xl">
<img alt="Restaurant Interior" className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-charcoal/20 group-hover:bg-charcoal/10 transition-colors duration-500"></div>
</div>

<div className="masonry-item relative group overflow-hidden rounded-2xl">
<img alt="Balkan Food" className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1554679665-f5537f187268?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent"></div>
<div className="absolute bottom-6 left-6 right-6">
<div className="bg-surface/90 backdrop-blur border border-white/10 p-4 rounded-xl text-center">
<span className="text-cream font-serif text-lg tracking-tight">Gemütlich · Herzlich · Authentisch</span>
</div>
</div>
</div>

<div className="masonry-item relative group overflow-hidden rounded-2xl">
<img alt="Fine Dining Prep" className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>

<div className="masonry-item relative group overflow-hidden rounded-2xl">
<img alt="Wine Pour" className="w-full h-[300px] object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1525610553991-2bede1a236e2?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>

<div className="masonry-item relative group overflow-hidden rounded-2xl">
<img alt="Grill Detail" className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<div className="fade-up mt-10 text-center">
<p className="text-sm font-medium opacity-70">Besuchen Sie uns in der Franz-Mader-Straße 11, 80992 München</p>
</div>
</div>
</section>

<section className="border-white/5 border-t pt-24 pb-24">
<div className="max-w-7xl mx-auto px-6 lg:px-8">

<div className="fade-up flex flex-col items-center justify-center text-center mb-20">
<iconify-icon className="text-5xl text-gold mb-4" icon="solar:cup-star-linear"></iconify-icon>
<h3 className="font-serif text-3xl md:text-4xl tracking-tight text-cream mb-2">Lokal des Jahres</h3>
<p className="text-ember uppercase tracking-widest text-sm font-medium">Bayern / Oberbayern</p>
</div>

<div className="fade-up masonry-grid text-cream">
<div className="masonry-item bg-surface p-8 rounded-2xl border border-white/5">
<div className="flex text-gold mb-4 gap-1">
<iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="font-light text-lg leading-relaxed mb-6">"Das Essen war hervorragend — besonders die Balkan-Spezialitäten. Das Fleisch saftig und perfekt gewürzt."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-xs">G</div>
<span className="text-sm text-cream/60">Google Bewertung</span>
</div>
</div>
<div className="masonry-item bg-surface/50 p-8 rounded-2xl border border-white/5">
<div className="flex text-gold mb-4 gap-1">
<iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="font-light text-lg leading-relaxed mb-6">"Große Portionen, faire Preise. Die Cevapcici im Fladenbrot sind der Wahnsinn!"</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-xs">A</div>
<span className="text-sm text-cream/60">Google Bewertung</span>
</div>
</div>
<div className="masonry-item bg-surface p-8 rounded-2xl border border-white/5">
<div className="flex text-gold mb-4 gap-1">
<iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="font-light text-lg leading-relaxed mb-6">"Wenn ich Heimweh habe, fahre ich gerne ins Paradies. Beste Küche der Welt."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-xs">M</div>
<span className="text-sm text-cream/60">Google Bewertung</span>
</div>
</div>
<div className="masonry-item bg-surface/50 p-8 rounded-2xl border border-white/5">
<div className="flex text-gold mb-4 gap-1">
<iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="font-light text-lg leading-relaxed mb-6">"Man hat das Gefühl, in Kroatien zu sein. Fleisch auf jeden Fall probieren!"</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-xs">S</div>
<span className="text-sm text-cream/60">Google Bewertung</span>
</div>
</div>
</div>
<div className="fade-up mt-16 text-center">
<div className="inline-flex flex-col items-center">
<div className="text-4xl font-serif text-gold mb-1">4.8</div>
<div className="flex text-gold mb-2 gap-1 text-sm">
<iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<span className="text-sm text-cream/60 uppercase tracking-widest">Über 14.000 Bewertungen</span>
</div>
</div>
</div>
</section>

<section className="border-white/5 border-t pt-24 pb-24 relative" id="kontakt">
<div className="absolute -top-24" id="reservierung"></div> 
<div className="lg:px-8 max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-24">

<div className="fade-up lg:col-span-2">
<div className="mb-10">
<span className="font-serif text-3xl tracking-tight text-cream block mb-2">Moosacher Paradies</span>
<div className="h-1 w-12 bg-ember rounded-full"></div>
</div>
<ul className="space-y-6 mb-10">
<li className="flex items-start gap-4">
<iconify-icon className="text-ember text-xl mt-1" icon="solar:map-point-linear"></iconify-icon>
<div className="">
<h4 className="font-medium text-cream mb-1">Adresse</h4>
<p className="text-cream/60 font-light text-sm leading-relaxed">Franz-Mader-Straße 11<br/>80992 München</p>
</div>
</li>
<li className="flex items-start gap-4">
<iconify-icon className="text-ember text-xl mt-1" icon="solar:clock-circle-linear"></iconify-icon>
<div className="">
<h4 className="font-medium text-cream mb-1">Öffnungszeiten</h4>
<p className="text-cream/60 font-light text-sm leading-relaxed">Montag – Sonntag<br/>10:00 – 00:00 Uhr</p>
</div>
</li>
<li className="flex items-start gap-4">
<iconify-icon className="text-ember text-xl mt-1" icon="solar:phone-calling-linear"></iconify-icon>
<div>
<h4 className="font-medium text-cream mb-1">Telefon</h4>
<p className="text-cream/60 font-light text-sm">089 21597735</p>
</div>
</li>
</ul>
<div className="flex items-center gap-4">
<a className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-cream hover:bg-ember hover:text-charcoal hover:border-ember transition-all" href="#">
<iconify-icon icon="solar:map-linear"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-cream hover:bg-ember hover:text-charcoal hover:border-ember transition-all" href="#">
<svg aria-hidden="true" className="w-4 h-4" fill="currentColor" viewbox="0 0 24 24"><path clip-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" fill-rule="evenodd"></path></svg>
</a>
</div>

<div className="mt-10 w-full h-48 bg-charcoal rounded-xl border border-white/5 relative overflow-hidden group flex items-center justify-center">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&amp;w=800&amp;auto=format&amp;fit=crop')] opacity-30 object-cover grayscale mix-blend-overlay"></div>
<a className="relative z-10 bg-surface/80 backdrop-blur px-4 py-2 rounded border border-white/10 text-sm font-medium flex items-center gap-2 group-hover:bg-ember group-hover:text-charcoal transition-colors" href="#">
                            Auf Google Maps öffnen <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>

<div className="fade-up lg:col-span-3 bg-charcoal p-8 md:p-10 rounded-3xl border border-white/5 relative overflow-hidden">

<div className="absolute inset-0 bg-charcoal z-20 hidden flex-col items-center justify-center text-center p-8" id="form-success">
<div className="w-16 h-16 bg-ember/20 rounded-full flex items-center justify-center text-ember mb-6">
<iconify-icon className="text-3xl" icon="solar:check-circle-linear"></iconify-icon>
</div>
<h3 className="font-serif text-3xl text-cream mb-2">Vielen Dank!</h3>
<p className="text-cream/60 font-light">Ihre Anfrage wurde erfolgreich übermittelt. Wir melden uns in Kürze zur Bestätigung bei Ihnen.</p>
<button className="mt-8 border border-white/20 px-6 py-2 rounded-full text-sm hover:bg-white/5 transition-colors" onclick="resetForm()">Neue Reservierung</button>
</div>
<h3 className="font-serif text-2xl tracking-tight text-cream mb-8">Tisch reservieren</h3>
<form className="space-y-5" id="reservation-form">
<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
<div>
<label className="block text-xs uppercase tracking-widest text-cream/50 mb-2">Name</label>
<input className="w-full bg-surface border border-white/10 rounded-xl px-4 py-3 text-cream focus:outline-none focus:border-ember/50 transition-colors placeholder:text-cream/20 text-sm" placeholder="Max Mustermann" required="" type="text"/>
</div>
<div>
<label className="block text-xs uppercase tracking-widest text-cream/50 mb-2">Telefon / E-Mail</label>
<input className="w-full bg-surface border border-white/10 rounded-xl px-4 py-3 text-cream focus:outline-none focus:border-ember/50 transition-colors placeholder:text-cream/20 text-sm" placeholder="Für Rückfragen" required="" type="text"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-5">
<div>
<label className="block text-xs uppercase tracking-widest text-cream/50 mb-2">Datum</label>
<input className="w-full bg-surface border border-white/10 rounded-xl px-4 py-3 text-cream focus:outline-none focus:border-ember/50 transition-colors text-sm" min="2026-04-13" required="" type="date"/>
</div>
<div>
<label className="block text-xs uppercase tracking-widest text-cream/50 mb-2">Uhrzeit</label>
<select className="w-full bg-surface border border-white/10 rounded-xl px-4 py-3 text-cream focus:outline-none focus:border-ember/50 transition-colors text-sm" required="">
<option disabled="" selected="" value="">Wählen...</option>
<option value="17:00">17:00</option>
<option value="17:30">17:30</option>
<option value="18:00">18:00</option>
<option value="18:30">18:30</option>
<option value="19:00">19:00</option>
<option value="19:30">19:30</option>
<option value="20:00">20:00</option>
<option value="20:30">20:30</option>
<option value="21:00">21:00</option>
</select>
</div>
<div>
<label className="block text-xs uppercase tracking-widest text-cream/50 mb-2">Personen</label>
<select className="w-full bg-surface border border-white/10 rounded-xl px-4 py-3 text-cream focus:outline-none focus:border-ember/50 transition-colors text-sm" required="">
<option value="1">1 Person</option>
<option selected="" value="2">2 Personen</option>
<option value="3">3 Personen</option>
<option value="4">4 Personen</option>
<option value="5">5 Personen</option>
<option value="6">6 Personen</option>
<option value="group">7+ (Größere Gruppe)</option>
</select>
</div>
</div>
<div>
<label className="block text-xs uppercase tracking-widest text-cream/50 mb-2">Anlass (Optional)</label>
<div className="flex flex-wrap gap-2">
<label className="cursor-pointer">
<input className="peer sr-only" name="anlass" type="radio"/>
<span className="inline-block px-4 py-2 rounded-full border border-white/10 text-xs text-cream/70 peer-checked:bg-white/10 peer-checked:text-cream peer-checked:border-white/30 transition-colors">Geburtstag</span>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="anlass" type="radio"/>
<span className="inline-block px-4 py-2 rounded-full border border-white/10 text-xs text-cream/70 peer-checked:bg-white/10 peer-checked:text-cream peer-checked:border-white/30 transition-colors">Firmenessen</span>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="anlass" type="radio"/>
<span className="inline-block px-4 py-2 rounded-full border border-white/10 text-xs text-cream/70 peer-checked:bg-white/10 peer-checked:text-cream peer-checked:border-white/30 transition-colors">Familienfeier</span>
</label>
</div>
</div>
<div className="">
<label className="block text-xs uppercase tracking-widest text-cream/50 mb-2">Sonderwünsche</label>
<textarea className="w-full bg-surface border border-white/10 rounded-xl px-4 py-3 text-cream focus:outline-none focus:border-ember/50 transition-colors text-sm placeholder:text-cream/20 resize-none" placeholder="Allergien, Hochstuhl benötigt..." rows="3"></textarea>
</div>
<button className="w-full bg-ember text-charcoal font-semibold py-4 rounded-xl hover:bg-gold transition-colors mt-2 shadow-glow flex items-center justify-center gap-2" type="submit">
                            Anfrage senden <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
<p className="text-[10px] text-cream/30 text-center mt-4">Mit dem Absenden erklären Sie sich mit unseren Datenschutzbestimmungen einverstanden.</p>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-[#0a0806] pt-16 pb-8 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
<div className="md:col-span-2">
<a className="flex items-center gap-2 mb-4" href="#">
<iconify-icon className="text-ember text-xl" icon="solar:fire-linear"></iconify-icon>
<span className="font-serif font-medium text-lg tracking-tight text-cream block">Moosacher Paradies</span>
</a>
<p className="text-cream/50 text-sm font-light max-w-xs">Authentische Balkan-Küche im Münchner Norden. Mehrfach prämiert als Lokal des Jahres in Bayern.</p>
</div>
<div className="">
<h5 className="text-cream font-medium mb-4 text-sm">Navigation</h5>
<ul className="space-y-2">
<li><a className="text-cream/50 hover:text-ember text-sm transition-colors" href="#">Startseite</a></li>
<li><a className="text-cream/50 hover:text-ember text-sm transition-colors" href="#speisekarte">Speisekarte</a></li>
<li><a className="text-cream/50 hover:text-ember text-sm transition-colors" href="#restaurant">Über uns</a></li>
</ul>
</div>
<div className="">
<h5 className="text-cream font-medium mb-4 text-sm">Rechtliches</h5>
<ul className="space-y-2">
<li><a className="text-cream/50 hover:text-cream text-sm transition-colors" href="#">Impressum</a></li>
<li><a className="text-cream/50 hover:text-cream text-sm transition-colors" href="#">Datenschutz</a></li>
</ul>
<div className="mt-6">
<h5 className="text-cream/50 text-xs uppercase tracking-widest mb-3">Folgen Sie uns</h5>
<div className="flex gap-4">
<a className="text-cream/50 hover:text-ember transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:global-linear"></iconify-icon></a>
<a className="text-cream/50 hover:text-ember transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:camera-linear"></iconify-icon></a>
</div>
</div>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-cream/40 font-light">
<p>© 2026 Moosacher Paradies · Alle Rechte vorbehalten.</p>
<p>Inhaber: Asmir Husejdić · Franz-Mader-Straße 11, 80992 München</p>
</div>
</div>
</footer>

<div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-8 md:max-w-sm bg-surface border border-white/10 rounded-2xl p-5 shadow-2xl z-50 transition-all duration-500 transform translate-y-0 opacity-100" id="cookie-banner">
<div className="flex items-start justify-between gap-4">
<div>
<p className="text-sm text-cream/80 font-light mb-3">Wir nutzen Cookies, um Ihr Erlebnis zu verbessern. <a className="text-ember hover:underline" href="#">Mehr erfahren</a></p>
<div className="flex gap-3">
<button className="bg-white/10 hover:bg-white/20 text-cream text-xs px-4 py-2 rounded-full transition-colors" onclick="dismissCookies()">Ablehnen</button>
<button className="bg-ember text-charcoal font-medium text-xs px-4 py-2 rounded-full hover:bg-gold transition-colors" onclick="dismissCookies()">Akzeptieren</button>
</div>
</div>
<button className="text-cream/40 hover:text-cream" onclick="dismissCookies()">
<iconify-icon className="text-xl" icon="solar:close-circle-linear"></iconify-icon>
</button>
</div>
</div>



    </>
  );
}
