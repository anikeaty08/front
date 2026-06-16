import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
  


        // Reveal Animation on Scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal-on-scroll').forEach(el => {
            observer.observe(el);
        });

        // Mobile Menu Toggle
        const menuBtn = document.getElementById('mobile-menu-btn');
        const closeBtn = document.getElementById('close-menu');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileLinks = document.querySelectorAll('.mobile-link');

        function toggleMenu() {
            mobileMenu.classList.toggle('translate-x-full');
            document.body.classList.toggle('overflow-hidden');
        }

        menuBtn.addEventListener('click', toggleMenu);
        closeBtn.addEventListener('click', toggleMenu);
        
        mobileLinks.forEach(link => {
            link.addEventListener('click', toggleMenu);
        });

        // Navbar Scroll Effect
        window.addEventListener('scroll', () => {
            const nav = document.getElementById('navbar');
            if (window.scrollY > 50) {
                nav.classList.add('shadow-sm', 'bg-[#F8F5F1]/95');
            } else {
                nav.classList.remove('shadow-sm', 'bg-[#F8F5F1]/80');
            }
        });

        // Before/After Slider Logic
        function slide(event, element) {
            const rect = element.getBoundingClientRect();
            let x = event.clientX || event.touches[0].clientX;
            let position = ((x - rect.left) / rect.width) * 100;
            position = Math.max(0, Math.min(100, position));

            const beforeImg = element.querySelector('.before-img');
            const handle = element.querySelector('.resize-handle');
            
            beforeImg.style.width = `${position}%`;
            handle.style.left = `${position}%`;
        }

        // Service Accordion Logic
        function toggleService(element) {
            const content = element.querySelector('.service-content');
            const icon = element.querySelector('.icon-plus');
            
            // Toggle current
            const isOpen = content.classList.contains('open');
            
            // Close all others
            document.querySelectorAll('.service-content').forEach(el => {
                el.classList.remove('open');
                // Check if element exists before accessing classList to avoid errors
                const iconEl = el.parentElement.querySelector('.icon-plus');
                if(iconEl) iconEl.classList.remove('rotate-45');
                el.parentElement.classList.remove('shadow-md');
            });

            if (!isOpen) {
                content.classList.add('open');
                icon.classList.add('rotate-45');
                element.classList.add('shadow-md');
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10 saturate-50 brightness-50 mix-blend-overlay blur-xl opacity-80" data-alpha-mask="83" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 83%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 83%, transparent)'}}><div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="ILgOO23w4wEyPQOKyLO4"></div>

</div></div>

<nav className="fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur-md border-b border-stone-200/50" id="navbar">
<div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

<a className="flex flex-col items-center leading-none group" href="#">
<span className="font-serif text-2xl md:text-3xl tracking-tight text-stone-900 relative z-10">Rene</span>
<span className="font-sans text-[10px] tracking-[0.3em] text-stone-500 uppercase ml-1">for Hairs</span>
</a>
<div className="hidden lg:flex items-center gap-8 text-sm font-medium tracking-wide text-stone-600">
<a className="hover:text-stone-900 transition-colors" href="#services">Leistungen</a>
<a className="hover:text-stone-900 transition-colors" href="#gallery">Galerie</a>
<a className="hover:text-stone-900 transition-colors" href="#before-after">Vorher/Nachher</a>
<a className="hover:text-stone-900 transition-colors" href="#locations">Standorte</a>
<a className="hover:text-stone-900 transition-colors" href="#about">Über Rene</a>
<a className="hover:text-stone-900 transition-colors" href="#contact">Kontakt</a>
</div>
<div className="flex items-center gap-4">

<button className="text-xs font-medium border border-stone-300 rounded-full px-3 py-1 hover:bg-stone-200 transition-colors flex items-center gap-2">
<span>DE</span>
<iconify-icon icon="solar:globe-linear" strokeWidth="1.5" width="14"></iconify-icon>
</button>
<a className="hidden md:flex items-center gap-2 bg-[#1A4D2E] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-[#143d24] transition-all shadow-lg shadow-green-900/10" href="#booking">
<span>Termin buchen</span>
<iconify-icon icon="solar:calendar-add-linear" strokeWidth="1.5" width="18"></iconify-icon>
</a>
<button className="lg:hidden" id="mobile-menu-btn">
<iconify-icon className="text-stone-800" icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<div className="fixed inset-0 bg-[#F8F5F1] z-40 transform translate-x-full transition-transform duration-300 flex flex-col items-center justify-center space-y-6" id="mobile-menu">
<a className="text-2xl font-serif text-stone-800 mobile-link" href="#services">Leistungen</a>
<a className="text-2xl font-serif text-stone-800 mobile-link" href="#gallery">Galerie</a>
<a className="text-2xl font-serif text-stone-800 mobile-link" href="#before-after">Vorher/Nachher</a>
<a className="text-2xl font-serif text-stone-800 mobile-link" href="#locations">Standorte</a>
<a className="text-2xl font-serif text-stone-800 mobile-link" href="#about">Über Rene</a>
<a className="text-2xl font-serif text-stone-800 mobile-link" href="#contact">Kontakt</a>
<a className="mt-8 bg-[#1A4D2E] text-white px-8 py-3 rounded-full text-lg font-medium shadow-xl" href="#booking">
            Termin buchen
        </a>
<button className="absolute top-6 right-6" id="close-menu">
<iconify-icon className="text-stone-800" icon="solar:close-circle-linear" strokeWidth="1.5" width="32"></iconify-icon>
</button>
</div>

<section className="md:pt-48 md:pb-32 overflow-hidden pt-32 pb-20 relative">

<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-stone-200/40 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-stone-300/20 rounded-full blur-[120px] translate-y-1/4 -translate-x-1/4 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
<div className="reveal-on-scroll z-10 relative">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-stone-200 mb-8 shadow-sm">
<span className="w-1.5 h-1.5 rounded-full bg-[#1A4D2E]"></span>
<span className="text-xs font-medium uppercase tracking-wider text-stone-500">5 Standorte</span>
</div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight text-stone-900 mb-6 leading-[1.1]">
        Dein Look. <br/>
<span className="italic font-serif text-stone-500">Perfekt geschnitten.</span>
</h1>
<h2 className="text-2xl italic text-stone-600 font-serif mb-6">Stil beginnt beim Detail.</h2>
<p className="text-lg md:text-xl text-stone-600 mb-10 max-w-md leading-normal">
        Rene for Hairs steht für präzise Herrenhaarschnitte, moderne Fades, Bartpflege, klassische Rasur und
        Styling-Beratung. Für Männer, die Wert auf Qualität, saubere Konturen und ein starkes Auftreten legen.
    </p>
<div className="flex flex-wrap items-center gap-4">
<a className="bg-stone-900 text-white px-8 py-4 rounded-full text-base font-medium hover:bg-stone-800 transition-all flex items-center gap-2 shadow-xl shadow-stone-900/10" href="#booking">
<span>Termin buchen</span>
<iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="20"></iconify-icon>
</a>
<a className="px-8 py-4 rounded-full text-base font-medium text-stone-700 hover:bg-stone-100 transition-all border border-stone-200 bg-white/50 backdrop-blur-sm" href="#services">
            Leistungen ansehen
        </a>
</div>
<div className="mt-12 flex items-center gap-4">
<div className="flex -space-x-4">
<img alt="Client" className="w-12 h-12 rounded-full border-2 border-[#F8F5F1] object-cover grayscale" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;w=100&amp;h=100"/>
<img alt="Client" className="w-12 h-12 rounded-full border-2 border-[#F8F5F1] object-cover grayscale" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&amp;fit=crop&amp;w=100&amp;h=100"/>
<img alt="Client" className="w-12 h-12 rounded-full border-2 border-[#F8F5F1] object-cover grayscale" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=100&amp;h=100"/>
</div>
<div>
<div className="flex items-center text-stone-800 gap-0.5">
<iconify-icon className="text-yellow-500" icon="solar:star-bold" width="16"></iconify-icon>
<span className="font-semibold text-sm ml-1">4,9</span>
</div>
<p className="text-xs font-medium text-stone-500 mt-0.5">Vertrauen von über 3.000 Kunden</p>
</div>
</div>
</div>

<div className="relative h-[600px] hidden lg:block reveal-on-scroll">

<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full overflow-hidden shadow-2xl border-[8px] border-white z-20">
<div className="grid grid-cols-2 grid-rows-2 w-full h-full">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
<img className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>

<div className="absolute inset-0 flex items-center justify-center">
<div className="w-32 h-32 bg-white/90 backdrop-blur rounded-full flex items-center justify-center border border-stone-200">
<div className="text-center">
<span className="font-serif text-2xl text-stone-900 block">Rene</span>
<span className="text-[8px] tracking-widest uppercase text-stone-500">Est. 2018</span>
</div>
</div>
</div>
</div>

<div className="absolute top-10 right-10 w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg animate-pulse z-10">
<img className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="absolute bottom-20 left-0 w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-lg z-10">
<img className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 bg-white">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16 reveal-on-scroll">
<span className="text-xs font-medium tracking-widest text-stone-500 uppercase mb-3 block">Philosophie</span>
<h2 className="text-3xl md:text-5xl font-serif text-stone-900 tracking-tight">Mehr als nur ein Haarschnitt.</h2>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="p-8 rounded-3xl bg-[#F8F5F1] hover:shadow-lg transition-all reveal-on-scroll">
<div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6 text-stone-800 shadow-sm">
<iconify-icon icon="solar:scissors-square-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-serif text-stone-900 mb-3">Präzision statt Zufall</h3>
<p className="text-stone-600 text-sm">Jeder Schnitt folgt einer klaren Struktur. Keine Experimente, sondern Handwerk auf höchstem Niveau für perfekte Ergebnisse.</p>
</div>

<div className="p-8 rounded-3xl bg-[#F8F5F1] hover:shadow-lg transition-all reveal-on-scroll">
<div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6 text-stone-800 shadow-sm">
<iconify-icon icon="solar:chat-round-check-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-serif text-stone-900 mb-3">Beratung, die wirklich passt</h3>
<p className="text-stone-600 text-sm">Wir analysieren Gesichtsform und Haarstruktur. Du bekommst nicht irgendeinen Trend, sondern den Look, der zu dir passt.</p>
</div>

<div className="p-8 rounded-3xl bg-[#F8F5F1] hover:shadow-lg transition-all reveal-on-scroll">
<div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6 text-stone-800 shadow-sm">
<iconify-icon icon="solar:user-check-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-serif text-stone-900 mb-3">Saubere Konturen, sauberes Auftreten</h3>
<p className="text-stone-600 text-sm">Ein gepflegter Nacken und scharfe Linien machen den Unterschied. Wir achten auf Details, die andere übersehen.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#F8F5F1]" id="services">
<div className="max-w-4xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 reveal-on-scroll">
<div>
<span className="text-xs font-medium tracking-widest text-stone-500 uppercase mb-2 block">Angebot</span>
<h2 className="text-3xl md:text-5xl font-serif text-stone-900 tracking-tight">Unsere Signature Leistungen</h2>
</div>
<p className="mt-4 md:mt-0 max-w-xs text-stone-500 text-sm text-right">Tippe, um Details zu sehen und echte Ergebnisse zu entdecken.</p>
</div>
<div className="space-y-4">

<div className="group bg-white rounded-2xl overflow-hidden hover:shadow-md transition-all duration-300 reveal-on-scroll cursor-pointer" onclick="toggleService(this)">
<div className="p-6 flex items-center justify-between">
<div className="flex items-center gap-4">
<iconify-icon className="text-stone-400 group-hover:text-stone-900 transition-colors" icon="solar:scissors-linear" strokeWidth="1.5" width="24"></iconify-icon>
<h3 className="text-xl font-serif text-stone-900">Herrenhaarschnitt &amp; Styling</h3>
</div>
<iconify-icon className="text-stone-400 transition-transform duration-300 icon-plus" icon="solar:add-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div className="service-content">
<div className="service-inner px-6 pb-6 pt-0 border-t border-transparent">
<p className="text-stone-600 mb-6 text-sm leading-relaxed pl-10">
                                Individuelle Beratung, präziser Schnitt und Styling passend zu Gesicht und Haarstruktur. Wir nehmen uns Zeit für die perfekte Form.
                            </p>
</div>
</div>
</div>

<div className="group bg-white rounded-2xl overflow-hidden hover:shadow-md transition-all duration-300 reveal-on-scroll cursor-pointer" onclick="toggleService(this)">
<div className="p-6 flex items-center justify-between">
<div className="flex items-center gap-4">
<iconify-icon className="text-stone-400 group-hover:text-stone-900 transition-colors" icon="solar:magic-stick-3-linear" strokeWidth="1.5" width="24"></iconify-icon>
<h3 className="text-xl font-serif text-stone-900">Skin Fade &amp; Taper Fade</h3>
</div>
<iconify-icon className="text-stone-400 transition-transform duration-300 icon-plus" icon="solar:add-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div className="service-content">
<div className="service-inner px-6 pb-6 pt-0">
<p className="text-stone-600 mb-6 text-sm leading-relaxed pl-10">
                                Saubere Übergänge, perfekte Konturen und ein Finish, das lange sitzt. Unser Spezialgebiet für einen modernen Look.
                            </p>
</div>
</div>
</div>

<div className="group bg-white rounded-2xl overflow-hidden hover:shadow-md transition-all duration-300 reveal-on-scroll cursor-pointer" onclick="toggleService(this)">
<div className="p-6 flex items-center justify-between">
<div className="flex items-center gap-4">
<iconify-icon className="text-stone-400 group-hover:text-stone-900 transition-colors" icon="solar:face-scan-square-linear" strokeWidth="1.5" width="24"></iconify-icon>
<h3 className="text-xl font-serif text-stone-900">Bartpflege &amp; Konturen</h3>
</div>
<iconify-icon className="text-stone-400 transition-transform duration-300 icon-plus" icon="solar:add-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div className="service-content">
<div className="service-inner px-6 pb-6 pt-0">
<p className="text-stone-600 mb-6 text-sm leading-relaxed pl-10">
                                Form, Symmetrie und klare Linien für einen gepflegten Look. Inklusive Pflegeprodukten für weiches Barthaar.
                            </p>
</div>
</div>
</div>

<div className="group bg-white rounded-2xl overflow-hidden hover:shadow-md transition-all duration-300 reveal-on-scroll cursor-pointer" onclick="toggleService(this)">
<div className="p-6 flex items-center justify-between">
<div className="flex items-center gap-4">
<iconify-icon className="text-stone-400 group-hover:text-stone-900 transition-colors" icon="solar:towel-linear" strokeWidth="1.5" width="24"></iconify-icon>
<h3 className="text-xl font-serif text-stone-900">Klassische Rasur (Hot Towel)</h3>
</div>
<iconify-icon className="text-stone-400 transition-transform duration-300 icon-plus" icon="solar:add-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div className="service-content">
<div className="service-inner px-6 pb-6 pt-0">
<p className="text-stone-600 mb-6 text-sm leading-relaxed pl-10">
                                Traditionelle Rasur mit warmem Handtuch, entspannend und hochwertig. Das ultimative Wellness-Erlebnis für den Mann.
                            </p>
</div>
</div>
</div>

<div className="group bg-white rounded-2xl overflow-hidden hover:shadow-md transition-all duration-300 reveal-on-scroll cursor-pointer" onclick="toggleService(this)">
<div className="p-6 flex items-center justify-between">
<div className="flex items-center gap-4">
<iconify-icon className="text-stone-400 group-hover:text-stone-900 transition-colors" icon="solar:bath-linear" strokeWidth="1.5" width="24"></iconify-icon>
<h3 className="text-xl font-serif text-stone-900">Haarwäsche &amp; Kopfhautpflege</h3>
</div>
<iconify-icon className="text-stone-400 transition-transform duration-300 icon-plus" icon="solar:add-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div className="service-content">
<div className="service-inner px-6 pb-6 pt-0">
<p className="text-stone-600 mb-6 text-sm leading-relaxed pl-10">
                                Sauberer Look, gepflegte Kopfhaut und ein frisches Gefühl durch vitalisierende Produkte.
                            </p>
</div>
</div>
</div>

<div className="group bg-white rounded-2xl overflow-hidden hover:shadow-md transition-all duration-300 reveal-on-scroll cursor-pointer" onclick="toggleService(this)">
<div className="p-6 flex items-center justify-between">
<div className="flex items-center gap-4">
<iconify-icon className="text-stone-400 group-hover:text-stone-900 transition-colors" icon="solar:stopwatch-linear" strokeWidth="1.5" width="24"></iconify-icon>
<h3 className="text-xl font-serif text-stone-900">Express Service</h3>
</div>
<iconify-icon className="text-stone-400 transition-transform duration-300 icon-plus" icon="solar:add-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div className="service-content">
<div className="service-inner px-6 pb-6 pt-0">
<p className="text-stone-600 mb-6 text-sm leading-relaxed pl-10">
                                Schnell, sauber, hochwertig. Perfekt für Alltag und Business, wenn die Zeit knapp ist, aber der Look sitzen muss.
                            </p>
</div>
</div>
</div>
</div>
<div className="mt-12 text-center reveal-on-scroll">
<a className="inline-flex items-center gap-2 text-stone-900 border-b border-stone-900 pb-1 hover:text-stone-600 hover:border-stone-600 transition-all font-medium" href="#">
<span>Beratung via WhatsApp</span>
<iconify-icon icon="solar:chat-round-line-linear" strokeWidth="1.5" width="18"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-20 px-6 bg-white">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16 reveal-on-scroll">
<h2 className="text-3xl md:text-4xl font-serif text-stone-900 tracking-tight">So läuft dein Termin ab.</h2>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-6">

<div className="text-center reveal-on-scroll group">
<div className="w-16 h-16 mx-auto rounded-full border border-stone-200 flex items-center justify-center mb-4 group-hover:border-stone-900 transition-colors">
<span className="font-serif text-xl">01</span>
</div>
<h3 className="font-medium text-stone-900 mb-2">Beratung</h3>
</div>

<div className="text-center reveal-on-scroll group">
<div className="w-16 h-16 mx-auto rounded-full border border-stone-200 flex items-center justify-center mb-4 group-hover:border-stone-900 transition-colors">
<span className="font-serif text-xl">02</span>
</div>
<h3 className="font-medium text-stone-900 mb-2">Schnitt &amp; Technik</h3>
</div>

<div className="text-center reveal-on-scroll group">
<div className="w-16 h-16 mx-auto rounded-full border border-stone-200 flex items-center justify-center mb-4 group-hover:border-stone-900 transition-colors">
<span className="font-serif text-xl">03</span>
</div>
<h3 className="font-medium text-stone-900 mb-2">Styling &amp; Finish</h3>
</div>

<div className="text-center reveal-on-scroll group">
<div className="w-16 h-16 mx-auto rounded-full border border-stone-200 flex items-center justify-center mb-4 group-hover:border-stone-900 transition-colors">
<span className="font-serif text-xl">04</span>
</div>
<h3 className="font-medium text-stone-900 mb-2">Konturen Check</h3>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#F8F5F1]" id="before-after">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16 reveal-on-scroll">
<h2 className="text-4xl md:text-5xl font-serif text-stone-900 mb-4 tracking-tight">Vorher &amp; Nachher</h2>
<p className="text-stone-500">Slide, um die Transformation zu sehen.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="relative h-[450px] rounded-2xl overflow-hidden shadow-lg reveal-on-scroll comparison-container group">
<div className="before-after-slider w-full h-full" onmousemove="slide(event, this)" ontouchmove="slide(event, this)">
<div className="after-img" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1593702295094-aea8c5c13d73?auto=format&amp'}}></div>
<div className="before-img" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1504198458649-3128b932f49e?auto=format&amp', width: '50%'}}></div>
<div className="resize-handle" style={{left: '50%'}}>
<div className="resize-circle">
<iconify-icon icon="solar:arrows-left-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
</div>
</div>
<div className="absolute bottom-6 left-0 right-0 text-center pointer-events-none">
<span className="bg-white/90 backdrop-blur px-4 py-2 rounded-full text-xs font-medium text-stone-900">Fade Transformation</span>
</div>
</div>

<div className="relative h-[450px] rounded-2xl overflow-hidden shadow-lg reveal-on-scroll comparison-container group">
<div className="before-after-slider w-full h-full" onmousemove="slide(event, this)" ontouchmove="slide(event, this)">
<div className="after-img" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&amp'}}></div>
<div className="before-img" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&amp', width: '50%'}}></div>
<div className="resize-handle" style={{left: '50%'}}>
<div className="resize-circle">
<iconify-icon icon="solar:arrows-left-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
</div>
</div>
<div className="absolute bottom-6 left-0 right-0 text-center pointer-events-none">
<span className="bg-white/90 backdrop-blur px-4 py-2 rounded-full text-xs font-medium text-stone-900">Bart Konturen</span>
</div>
</div>

<div className="relative h-[450px] rounded-2xl overflow-hidden shadow-lg reveal-on-scroll comparison-container group">
<div className="before-after-slider w-full h-full" onmousemove="slide(event, this)" ontouchmove="slide(event, this)">
<div className="after-img" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1512864084360-7c0c4d0a0845?auto=format&amp'}}></div>
<div className="before-img" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1493106819301-6794543f764b?auto=format&amp', width: '50%'}}></div>
<div className="resize-handle" style={{left: '50%'}}>
<div className="resize-circle">
<iconify-icon icon="solar:arrows-left-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
</div>
</div>
<div className="absolute bottom-6 left-0 right-0 text-center pointer-events-none">
<span className="bg-white/90 backdrop-blur px-4 py-2 rounded-full text-xs font-medium text-stone-900">Styling &amp; Finish</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white" id="gallery">
<div className="max-w-7xl mx-auto">
<div className="mb-12 reveal-on-scroll">
<h2 className="text-3xl md:text-5xl font-serif text-stone-900 tracking-tight">Looks, die wirken.</h2>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<div className="aspect-[3/4] rounded-xl overflow-hidden relative group cursor-pointer reveal-on-scroll">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
<span className="text-white text-sm font-medium">Modern Fade</span>
</div>
</div>
<div className="aspect-[3/4] rounded-xl overflow-hidden relative group cursor-pointer reveal-on-scroll">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
<span className="text-white text-sm font-medium">Business Cut</span>
</div>
</div>
<div className="aspect-[3/4] rounded-xl overflow-hidden relative group cursor-pointer reveal-on-scroll">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
<span className="text-white text-sm font-medium">Textured Crop</span>
</div>
</div>
<div className="aspect-[3/4] rounded-xl overflow-hidden relative group cursor-pointer reveal-on-scroll">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1517832207067-4db24a2ae47c?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
<span className="text-white text-sm font-medium">Classic Sidepart</span>
</div>
</div>
<div className="aspect-[3/4] rounded-xl overflow-hidden relative group cursor-pointer reveal-on-scroll">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1589710751893-f9a6770ad71b?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
<span className="text-white text-sm font-medium">Bart gepflegt</span>
</div>
</div>
<div className="aspect-[3/4] rounded-xl overflow-hidden relative group cursor-pointer reveal-on-scroll">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
<span className="text-white text-sm font-medium">Fresh Lineup</span>
</div>
</div>
<div className="aspect-[3/4] rounded-xl overflow-hidden relative group cursor-pointer reveal-on-scroll">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
<span className="text-white text-sm font-medium">Curly Hair</span>
</div>
</div>
<div className="aspect-[3/4] rounded-xl overflow-hidden relative group cursor-pointer reveal-on-scroll">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
<span className="text-white text-sm font-medium">Long Hair Men</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 bg-[#F8F5F1]">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16 reveal-on-scroll">
<h2 className="text-3xl font-serif text-stone-900">Für Männer, die mehr erwarten.</h2>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
<div className="bg-white p-6 rounded-2xl text-center reveal-on-scroll">
<h3 className="font-serif text-lg mb-2">Business &amp; Alltag</h3>
</div>
<div className="bg-white p-6 rounded-2xl text-center reveal-on-scroll">
<h3 className="font-serif text-lg mb-2">Hochzeiten &amp; Events</h3>
</div>
<div className="bg-white p-6 rounded-2xl text-center reveal-on-scroll">
<h3 className="font-serif text-lg mb-2">Jugendliche &amp; Trends</h3>
</div>
<div className="bg-white p-6 rounded-2xl text-center reveal-on-scroll">
<h3 className="font-serif text-lg mb-2">Klassische Styles</h3>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white overflow-hidden" id="about">
<div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
<div className="reveal-on-scroll">
<h2 className="text-4xl md:text-5xl font-serif text-stone-900 mb-6 tracking-tight">Rene. <br/><span className="italic text-stone-500">Stil beginnt mit Vertrauen.</span></h2>
<p className="text-stone-600 mb-8 leading-relaxed">
                    Rene steht für moderne Herrenlooks, klassische Präzision und einen Anspruch, der bei Details beginnt. Jede Beratung ist ehrlich, jede Empfehlung individuell, jeder Schnitt auf den Punkt. 
                </p>
<button className="flex items-center gap-2 text-stone-900 font-medium border border-stone-300 rounded-full px-6 py-3 hover:bg-stone-900 hover:text-white transition-all">
<span>Über Rene</span>
<iconify-icon icon="solar:user-linear" strokeWidth="1.5" width="18"></iconify-icon>
</button>
</div>
<div className="relative reveal-on-scroll">
<div className="aspect-[4/5] rounded-3xl overflow-hidden">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>

<div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl max-w-xs hidden md:block">
<p className="font-serif text-lg italic">„Ein Haarschnitt ist keine Dienstleistung, sondern Handwerk.“</p>
<p className="text-xs text-stone-500 mt-2 uppercase tracking-widest">— Rene</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#F8F5F1]">
<div className="max-w-7xl mx-auto">
<h2 className="text-3xl font-serif text-stone-900 mb-12 text-center reveal-on-scroll">Was unsere Kunden sagen</h2>
<div className="flex gap-6 overflow-x-auto hide-scroll pb-8 snap-x-mandatory">

<div className="min-w-[300px] md:min-w-[350px] bg-white p-8 rounded-2xl snap-center shadow-sm">
<div className="flex text-yellow-500 mb-4 gap-1">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-stone-600 italic mb-4">„Der beste Fade, den ich je hatte. Absolut präzise Arbeit.“</p>
<p className="text-xs font-semibold text-stone-900 uppercase">Markus S.</p>
</div>

<div className="min-w-[300px] md:min-w-[350px] bg-white p-8 rounded-2xl snap-center shadow-sm">
<div className="flex text-yellow-500 mb-4 gap-1">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-stone-600 italic mb-4">„Bartkonturen auf einem anderen Level. Ich komme definitiv wieder.“</p>
<p className="text-xs font-semibold text-stone-900 uppercase">Thomas Weber</p>
</div>

<div className="min-w-[300px] md:min-w-[350px] bg-white p-8 rounded-2xl snap-center shadow-sm">
<div className="flex text-yellow-500 mb-4 gap-1">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-stone-600 italic mb-4">„Sehr sauber, sehr professionell, top Atmosphäre.“</p>
<p className="text-xs font-semibold text-stone-900 uppercase">Lukas M.</p>
</div>

<div className="min-w-[300px] md:min-w-[350px] bg-white p-8 rounded-2xl snap-center shadow-sm">
<div className="flex text-yellow-500 mb-4 gap-1">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-stone-600 italic mb-4">„Man fühlt sich direkt hochwertiger nach dem Besuch.“</p>
<p className="text-xs font-semibold text-stone-900 uppercase">Jan K.</p>
</div>

<div className="min-w-[300px] md:min-w-[350px] bg-white p-8 rounded-2xl snap-center shadow-sm">
<div className="flex text-yellow-500 mb-4 gap-1">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-stone-600 italic mb-4">„Beratung war ehrlich und passend. Endlich ein Friseur, der zuhört.“</p>
<p className="text-xs font-semibold text-stone-900 uppercase">David P.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white border-t border-stone-100" id="locations">
<div className="max-w-7xl mx-auto">
<div className="mb-12 reveal-on-scroll">
<span className="text-xs font-medium tracking-widest text-stone-500 uppercase mb-2 block">In Deiner Nähe</span>
<h2 className="text-4xl md:text-5xl font-serif text-stone-900 tracking-tight">Unsere Standorte</h2>
</div>
<div className="grid md:grid-cols-5 gap-6 reveal-on-scroll">

<div className="group">
<div className="aspect-[4/5] rounded-xl overflow-hidden mb-4 relative">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1542282811-943ef1a977c3?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
</div>
<h3 className="font-serif text-lg text-stone-900">Innenstadt</h3>
<p className="text-xs text-stone-500 mt-1 mb-3">Marktplatz 1, City</p>
<button className="text-xs font-medium border-b border-stone-300 hover:border-stone-900 pb-0.5 transition-colors">Auf Karte ansehen</button>
</div>

<div className="group">
<div className="aspect-[4/5] rounded-xl overflow-hidden mb-4 relative">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
</div>
<h3 className="font-serif text-lg text-stone-900">West</h3>
<p className="text-xs text-stone-500 mt-1 mb-3">Lindenstraße 45</p>
<button className="text-xs font-medium border-b border-stone-300 hover:border-stone-900 pb-0.5 transition-colors">Auf Karte ansehen</button>
</div>

<div className="group">
<div className="aspect-[4/5] rounded-xl overflow-hidden mb-4 relative">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1444419988131-046ed4e5ffd6?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
</div>
<h3 className="font-serif text-lg text-stone-900">Süd</h3>
<p className="text-xs text-stone-500 mt-1 mb-3">Hafenviertel 2</p>
<button className="text-xs font-medium border-b border-stone-300 hover:border-stone-900 pb-0.5 transition-colors">Auf Karte ansehen</button>
</div>

<div className="group">
<div className="aspect-[4/5] rounded-xl overflow-hidden mb-4 relative">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1473187983305-f615310e7daa?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
</div>
<h3 className="font-serif text-lg text-stone-900">Nord</h3>
<p className="text-xs text-stone-500 mt-1 mb-3">Nordpark Allee</p>
<button className="text-xs font-medium border-b border-stone-300 hover:border-stone-900 pb-0.5 transition-colors">Auf Karte ansehen</button>
</div>

<div className="group">
<div className="aspect-[4/5] rounded-xl overflow-hidden mb-4 relative">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1455849318743-b2233052fcff?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
</div>
<h3 className="font-serif text-lg text-stone-900">Center</h3>
<p className="text-xs text-stone-500 mt-1 mb-3">Hauptbahnhof Mall</p>
<button className="text-xs font-medium border-b border-stone-300 hover:border-stone-900 pb-0.5 transition-colors">Auf Karte ansehen</button>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 bg-[#F8F5F1]">
<div className="max-w-3xl mx-auto">
<div className="text-center mb-12 reveal-on-scroll">
<h2 className="text-3xl font-serif text-stone-900">Häufige Fragen</h2>
</div>
<div className="space-y-4">
<details className="group bg-white rounded-xl p-6 open:shadow-md transition-all cursor-pointer">
<summary className="flex items-center justify-between font-medium text-stone-900 list-none">
<span>Wie lange dauert ein Termin?</span>
<iconify-icon className="group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<p className="text-stone-600 mt-4 text-sm">Je nach Service zwischen 30 und 60 Minuten. Für eine Komplettpflege planen wir gerne etwas mehr Zeit ein, um das beste Ergebnis zu erzielen.</p>
</details>
<details className="group bg-white rounded-xl p-6 open:shadow-md transition-all cursor-pointer">
<summary className="flex items-center justify-between font-medium text-stone-900 list-none">
<span>Brauche ich einen Termin oder geht spontan?</span>
<iconify-icon className="group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<p className="text-stone-600 mt-4 text-sm">Wir empfehlen dringend einen Termin, um Wartezeiten zu vermeiden. Spontanbesuche sind möglich, aber oft mit Wartezeit verbunden.</p>
</details>
<details className="group bg-white rounded-xl p-6 open:shadow-md transition-all cursor-pointer">
<summary className="flex items-center justify-between font-medium text-stone-900 list-none">
<span>Welche Frisur passt zu meiner Kopfform?</span>
<iconify-icon className="group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<p className="text-stone-600 mt-4 text-sm">Das klären wir in der Beratung. Wir analysieren deine Gesichtsform und Struktur und schlagen dir passende Schnitte vor.</p>
</details>
<details className="group bg-white rounded-xl p-6 open:shadow-md transition-all cursor-pointer">
<summary className="flex items-center justify-between font-medium text-stone-900 list-none">
<span>Macht ihr auch lange Haare bei Männern?</span>
<iconify-icon className="group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<p className="text-stone-600 mt-4 text-sm">Absolut. Ob kurz, mittel oder lang – wir beherrschen alle Techniken für Männerhaar.</p>
</details>
<details className="group bg-white rounded-xl p-6 open:shadow-md transition-all cursor-pointer">
<summary className="flex items-center justify-between font-medium text-stone-900 list-none">
<span>Was, wenn ich unsicher bin, was mir steht?</span>
<iconify-icon className="group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<p className="text-stone-600 mt-4 text-sm">Keine Sorge. Unsere Beratung ist Teil des Services. Wir finden gemeinsam den Look, mit dem du dich wohlfühlst.</p>
</details>
</div>
</div>
</section>

<section className="py-24 px-6 bg-stone-900 text-white relative overflow-hidden" id="booking">
<div className="absolute top-0 right-0 w-[400px] h-[400px] bg-stone-700/30 rounded-full blur-[100px]"></div>
<div className="max-w-4xl mx-auto text-center relative z-10">
<h2 className="text-4xl md:text-6xl font-serif mb-6 tracking-tight">Bereit für deinen besten Look?</h2>
<p className="text-stone-400 text-lg mb-10 max-w-xl mx-auto">Buche deinen Termin in weniger als 30 Sekunden und erlebe, wie ein sauberer Schnitt dein Auftreten verändert.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto bg-[#1A4D2E] text-white px-10 py-4 rounded-full text-lg font-medium hover:bg-[#143d24] transition-all shadow-lg flex items-center justify-center gap-2" href="#">
<span>Termin buchen</span>
<iconify-icon icon="solar:calendar-add-linear" strokeWidth="1.5" width="20"></iconify-icon>
</a>
<a className="w-full sm:w-auto bg-transparent border border-stone-600 text-white px-10 py-4 rounded-full text-lg font-medium hover:bg-white hover:text-stone-900 transition-all" href="#contact">
                    Kontakt
                </a>
</div>
</div>
</section>

<footer className="bg-stone-900 text-white pt-20 pb-10 border-t border-stone-800/50" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start mb-16">
<div className="max-w-sm mb-10 md:mb-0">
<div className="mb-6 flex flex-col">
<span className="font-serif text-3xl">Rene</span>
<span className="font-sans text-[10px] tracking-[0.3em] uppercase text-stone-500">for Hairs</span>
</div>
<p className="text-stone-400 mb-8">Premium Herrenfriseur. Präzision, Stil und Beratung auf höchstem Niveau.</p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full border border-stone-700 flex items-center justify-center hover:bg-white hover:text-stone-900 transition-colors" href="#">
<iconify-icon icon="solar:camera-linear" strokeWidth="1.5" width="20"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full border border-stone-700 flex items-center justify-center hover:bg-white hover:text-stone-900 transition-colors" href="#">
<iconify-icon icon="solar:bell-linear" strokeWidth="1.5" width="20"></iconify-icon>
</a>
</div>
</div>
<div className="grid grid-cols-2 gap-16">
<div>
<h4 className="font-serif text-lg mb-4">Navigation</h4>
<ul className="space-y-3 text-stone-400 text-sm">
<li><a className="hover:text-white transition-colors" href="#services">Leistungen</a></li>
<li><a className="hover:text-white transition-colors" href="#gallery">Galerie</a></li>
<li><a className="hover:text-white transition-colors" href="#locations">Standorte</a></li>
<li><a className="hover:text-white transition-colors" href="#about">Über Rene</a></li>
</ul>
</div>
<div>
<h4 className="font-serif text-lg mb-4">Kontakt</h4>
<ul className="space-y-3 text-stone-400 text-sm">
<li className="flex items-center gap-2"><iconify-icon icon="solar:phone-linear"></iconify-icon> +49 30 1234567</li>
<li className="flex items-center gap-2"><iconify-icon icon="solar:chat-round-line-linear"></iconify-icon> WhatsApp Support</li>
<li className="flex items-center gap-2"><iconify-icon icon="solar:letter-linear"></iconify-icon> kontakt@reneforhairs.de</li>
<li className="mt-4 text-stone-500">Mo-Fr: 10 - 20 Uhr<br/>Sa: 09 - 18 Uhr</li>
</ul>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-stone-800">
<p className="text-stone-500 text-sm mb-4 md:mb-0">© 2024 Rene for Hairs. All rights reserved.</p>
<div className="flex gap-6 text-sm text-stone-500">
<a className="hover:text-white" href="#">Impressum</a>
<a className="hover:text-white" href="#">Datenschutz</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
