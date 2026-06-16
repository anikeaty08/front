import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // --- Navigation Toggle ---
        const menuBtn = document.getElementById('menu-btn');
        const closeMenuBtn = document.getElementById('close-menu-btn');
        const navOverlay = document.getElementById('nav-overlay');

        function toggleMenu() {
            const isOpen = navOverlay.classList.contains('open');
            if (isOpen) {
                navOverlay.classList.remove('open');
                document.body.style.overflow = '';
            } else {
                navOverlay.classList.add('open');
                document.body.style.overflow = 'hidden';
            }
        }

        menuBtn.addEventListener('click', toggleMenu);
        closeMenuBtn.addEventListener('click', toggleMenu);

        // --- Reveal Animation ---
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.reveal-element').forEach((el) => {
            observer.observe(el);
        });

        // --- Gallery Filter Logic ---
        const filterBtns = document.querySelectorAll('.filter-btn');
        const galleryItems = document.querySelectorAll('.gallery-item');

        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Update active state
                filterBtns.forEach(b => {
                    b.classList.remove('bg-black', 'text-white');
                    b.classList.add('bg-white', 'text-gray-600', 'border', 'border-gray-200');
                });
                btn.classList.remove('bg-white', 'text-gray-600', 'border', 'border-gray-200');
                btn.classList.add('bg-black', 'text-white');

                const filterValue = btn.getAttribute('data-filter');

                galleryItems.forEach(item => {
                    if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                        item.style.display = 'block';
                        // Small animation reset
                        item.classList.remove('visible');
                        setTimeout(() => item.classList.add('visible'), 50);
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-6">
<div className="glass-panel flex gap-4 rounded-full p-2 pl-6 shadow-sm items-center justify-between max-w-5xl w-full">
<a className="text-lg font-medium text-black tracking-tight" href="#">Miprint<span className="text-neutral-400" style={{}}>.de</span></a>

<div className="hidden md:flex gap-8 items-center">
<a className="hover:text-black transition-colors text-sm font-medium text-neutral-600" href="#leistungen" style={{}}>Leistungen</a>
<a className="text-sm font-medium text-neutral-600 hover:text-black transition-colors" href="#referenzen" style={{}}>Referenzen</a>
<a className="text-sm font-medium text-neutral-600 hover:text-black transition-colors" href="#team" style={{}}>Über uns</a>
</div>
<div className="flex gap-2">
<a className="hover:scale-105 transition-transform active:scale-95 hidden sm:block text-sm font-medium text-white bg-[#111] rounded-full pt-2.5 pr-5 pb-2.5 pl-5" href="#kontakt">Anfrage
  starten</a>
<button className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-neutral-50 transition-colors border border-neutral-100 md:hidden" id="menu-btn" style={{}}>
<iconify-icon icon="solar:hamburger-menu-linear" width="20"></iconify-icon>
</button>
</div>
</div>
</nav>

<div className="fixed inset-0 bg-[#F8F9FB] z-[60] flex flex-col opacity-0 invisible" id="nav-overlay">
<div className="absolute top-6 right-6">
<button className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg" id="close-menu-btn">
<iconify-icon icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
</div>
<div className="flex-1 flex items-center justify-center">
<div className="flex flex-col items-center gap-6">
<a className="text-3xl font-medium tracking-tight text-neutral-900" href="#werbetechnik" onclick="toggleMenu()" style={{}}>Werbetechnik</a>
<a className="text-3xl font-medium tracking-tight text-neutral-900" href="#textil" onclick="toggleMenu()" style={{}}>Textildruck</a>
<a className="text-3xl font-medium tracking-tight text-neutral-900" href="#print" onclick="toggleMenu()" style={{}}>Printmedien</a>
<a className="text-3xl font-medium tracking-tight text-neutral-900" href="#kontakt" onclick="toggleMenu()" style={{}}>Kontakt</a>
</div>
</div>
</div>

<header className="md:px-12 lg:px-24 min-h-screen flex flex-col w-full max-w-[1600px] mr-auto ml-auto pt-40 pr-6 pb-24 pl-6 relative justify-center">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-16 items-center">
<div className="reveal-element">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-200 bg-white mb-8" style={{}}>
<span className="w-2 h-2 rounded-full bg-green-500" style={{}}></span>
<span className="uppercase text-xs font-medium text-neutral-500 tracking-wide" style={{}}>Singen und Umgebung</span>
</div>
<h1 className="text-6xl md:text-7xl lg:text-[88px] leading-[0.95] tracking-tight text-[#111] mb-8 font-medium">
                    Sichtbarkeit <br/>
<span className="text-neutral-300">die haften bleibt.</span>
</h1>
<p className="text-lg md:text-xl text-neutral-600 font-light max-w-lg mb-12 leading-relaxed" style={{}}>
                    Ihr Partner für ganzheitliche Werbetechnik. Von der Fahrzeugflotte bis zur Visitenkarte – wir bringen Ihre Marke präzise auf jeden Untergrund.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="flex items-center justify-center gap-3 hover:bg-neutral-800 transition-colors text-base font-medium text-white bg-[#111] rounded-full pt-4 pr-8 pb-4 pl-8" href="#werbetechnik">
                        Unsere Leistungen
                        <iconify-icon className="" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>
</div>
</div>

<div className="grid grid-cols-2 gap-4 reveal-element" style={{}}>

<a className="group bg-white p-6 rounded-3xl border border-neutral-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 aspect-square flex flex-col justify-between" href="#werbetechnik" style={{}}>
<div className="w-12 h-12 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600" style={{}}>
<iconify-icon className="" icon="solar:sticker-smile-circle-linear" width="24"></iconify-icon>
</div>
<div className="">
<h3 className="text-lg font-medium mb-1">Werbetechnik</h3>
<p className="text-sm text-neutral-500" style={{}}>Folierung, Schilder &amp; Licht</p>
</div>
</a>

<a className="group bg-white p-6 rounded-3xl border border-neutral-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 aspect-square flex flex-col justify-between" href="#textil" style={{}}>
<div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
<iconify-icon icon="solar:t-shirt-linear" width="24"></iconify-icon>
</div>
<div className="">
<h3 className="text-lg font-medium mb-1">Textildruck</h3>
<p className="text-sm text-neutral-500" style={{}}>Stickerei &amp; Corporate Fashion</p>
</div>
</a>

<a className="group bg-white p-6 rounded-3xl border border-neutral-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 aspect-square flex flex-col justify-between" href="#print" style={{}}>
<div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center text-orange-600" style={{}}>
<iconify-icon icon="solar:printer-linear" width="24"></iconify-icon>
</div>
<div className="">
<h3 className="text-lg font-medium mb-1">Printmedien</h3>
<p className="text-sm text-neutral-500" style={{}}>Flyer, Poster &amp; Stationery</p>
</div>
</a>

<a className="group bg-white p-6 rounded-3xl border border-neutral-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 aspect-square flex flex-col justify-between" href="#stempel" style={{}}>
<div className="w-12 h-12 rounded-full bg-cyan-50 flex items-center justify-center text-cyan-600">
<iconify-icon icon="solar:stamp-linear" width="24"></iconify-icon>
</div>
<div className="">
<h3 className="text-lg font-medium mb-1">Werbeartikel</h3>
<p className="text-sm text-neutral-500" style={{}}>Stempel &amp; Give-aways</p>
</div>
</a>
</div>
</div>
</header>

<section className="py-32 bg-white rounded-t-[40px] relative z-10" id="werbetechnik">
<div className="md:px-12 lg:px-24 max-w-[1600px] mr-auto ml-auto pr-6 pl-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
<div className="reveal-element">
<div className="text-indigo-600 text-sm font-medium tracking-wider uppercase mb-4" style={{}}>Säule I</div>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-8 leading-[1.1]">
                        Großes Format.<br/>
<span className="text-neutral-400" style={{}}>Perfekte Umsetzung.</span>
</h2>
<p className="text-lg text-neutral-600 font-light leading-relaxed mb-8" style={{}}>
                        Wir verwandeln Fahrzeuge in mobile Visitenkarten und Fassaden in Werbeträger. Mit Hochleistungsfolien und modernster Plott-Technik garantieren wir Langlebigkeit und Brillanz.
                    </p>
<ul className="space-y-4 mb-10">
<li className="flex items-center gap-4 text-neutral-800" style={{}}>
<iconify-icon className="text-indigo-600" icon="solar:check-circle-linear" style={{}} width="20"></iconify-icon>
                            Fahrzeugvollverklebung (Car Wrapping)
                        </li>
<li className="flex items-center gap-4 text-neutral-800" style={{}}>
<iconify-icon className="text-indigo-600" icon="solar:check-circle-linear" style={{}} width="20"></iconify-icon>
                            Schaufensterbeklebung &amp; Sichtschutz
                        </li>
<li className="flex items-center gap-4 text-neutral-800" style={{}}>
<iconify-icon className="text-indigo-600" icon="solar:check-circle-linear" style={{}} width="20"></iconify-icon>
                            Aluminiumverbund-Schilder
                        </li>
<li className="flex items-center gap-4 text-neutral-800" style={{}}>
<iconify-icon className="text-indigo-600" icon="solar:check-circle-linear" style={{}} width="20"></iconify-icon>
                            Leuchtkästen &amp; LED-Displays
                        </li>
</ul>
</div>
<div className="relative h-[600px] rounded-[32px] overflow-hidden reveal-element">
<img alt="Fahrzeugfolierung" className="hover:scale-105 transition-transform duration-700 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute bottom-6 left-6 glass-panel py-3 px-5 rounded-full">
<span className="text-sm font-medium">Premium Car Wrapping</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#F8F9FB]" id="textil">
<div className="md:px-12 lg:px-24 max-w-[1600px] mr-auto ml-auto pr-6 pl-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

<div className="order-2 lg:order-1 relative h-[600px] rounded-[32px] overflow-hidden reveal-element">
<img alt="Stickerei" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1542282088-fe8426682b8f?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-6 right-6 glass-panel py-3 px-5 rounded-full">
<span className="text-sm font-medium">Hochwertige Bestickung</span>
</div>
</div>
<div className="order-1 lg:order-2 reveal-element">
<div className="text-blue-600 text-sm font-medium tracking-wider uppercase mb-4">Säule II</div>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-8 leading-[1.1]">
                        Textilien mit<br/>
<span className="text-neutral-400" style={{}}>Charakter.</span>
</h2>
<p className="text-lg text-neutral-600 font-light leading-relaxed mb-8" style={{}}>
                        Einheitliche Arbeitskleidung stärkt das Teamgefühl und den professionellen Auftritt. Wir veredeln Textilien mit Verfahren, die auch nach vielen Wäschen beeindrucken.
                    </p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
<div className="bg-white p-5 rounded-2xl border border-neutral-100" style={{}}>
<iconify-icon className="text-blue-600 mb-3" icon="solar:needle-thread-linear" width="28"></iconify-icon>
<h4 className="font-medium mb-1">Stickerei</h4>
<p className="text-sm text-neutral-500" style={{}}>Edelste Form der Veredelung, extrem haltbar.</p>
</div>
<div className="bg-white p-5 rounded-2xl border border-neutral-100" style={{}}>
<iconify-icon className="text-blue-600 mb-3" icon="solar:fire-linear" width="28"></iconify-icon>
<h4 className="font-medium mb-1">Flex- &amp; Flockdruck</h4>
<p className="text-sm text-neutral-500" style={{}}>Ideal für klare Motive und kleine Auflagen.</p>
</div>
<div className="bg-white p-5 rounded-2xl border border-neutral-100" style={{}}>
<iconify-icon className="text-blue-600 mb-3" icon="solar:palette-linear" width="28"></iconify-icon>
<h4 className="font-medium mb-1">Digitaltransfer</h4>
<p className="text-sm text-neutral-500" style={{}}>Für fotorealistische Motive und Verläufe.</p>
</div>
<div className="bg-white p-5 rounded-2xl border border-neutral-100" style={{}}>
<iconify-icon className="text-blue-600 mb-3" icon="solar:user-hand-up-linear" width="28"></iconify-icon>
<h4 className="font-medium mb-1">Workwear</h4>
<p className="text-sm text-neutral-500" style={{}}>Robuste Kleidung für Handwerk &amp; Industrie.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-white" id="print">
<div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24">
<div className="text-center max-w-2xl mx-auto mb-16 reveal-element">
<div className="text-orange-600 text-sm font-medium tracking-wider uppercase mb-4" style={{}}>Säule III</div>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6">Klassischer Druck.</h2>
<p className="text-lg text-neutral-600 font-light" style={{}}>
                    Haptik entscheidet. Wir sorgen dafür, dass Ihre Geschäftspapiere und Werbemittel qualitativ überzeugen.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 reveal-element">
<div className="group relative aspect-[4/5] bg-neutral-50 rounded-2xl overflow-hidden border border-neutral-100" style={{}}>
<img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1586075010923-2dd4570fb338?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<div className="absolute bottom-6 left-6 text-white">
<h3 className="text-xl font-medium">Geschäftsausstattung</h3>
<p className="text-sm text-white/80 mt-1">Visitenkarten &amp; Briefpapier</p>
</div>
</div>
<div className="group relative aspect-[4/5] bg-neutral-50 rounded-2xl overflow-hidden border border-neutral-100 md:mt-12" style={{}}>
<img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<div className="absolute bottom-6 left-6 text-white">
<h3 className="text-xl font-medium">Werbedruck</h3>
<p className="text-sm text-white/80 mt-1">Flyer, Folder &amp; Broschüren</p>
</div>
</div>
<div className="group relative aspect-[4/5] bg-neutral-50 rounded-2xl overflow-hidden border border-neutral-100" style={{}}>
<img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<div className="absolute bottom-6 left-6 text-white">
<h3 className="text-xl font-medium">Großformat</h3>
<p className="text-sm text-white/80 mt-1">Poster, Planen &amp; Banner</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#111] text-white overflow-hidden relative" id="stempel">

<div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-neutral-800/20 to-transparent pointer-events-none" style={{}}></div>
<div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="reveal-element">
<div className="text-cyan-400 text-sm font-medium tracking-wider uppercase mb-4">Säule IV</div>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6">
                        Der letzte Schliff.
                    </h2>
<p className="text-lg text-neutral-400 font-light leading-relaxed mb-10 max-w-md" style={{}}>
                        Von individuellen Stempeln für Ihr Büro bis hin zu Streuartikeln, die bei Ihren Kunden in Erinnerung bleiben.
                    </p>
<div className="flex flex-col gap-6">
<div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
<iconify-icon className="text-cyan-400 mt-1" icon="solar:stamp-linear" width="32"></iconify-icon>
<div className="">
<h4 className="text-lg font-medium">Stempeltechnik</h4>
<p className="text-sm text-neutral-400 mt-1" style={{}}>Holzstempel, Selbstfärber (Trodat/Colop) und Datumstempel. Individuell gefertigt.</p>
</div>
</div>
<div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
<iconify-icon className="text-cyan-400 mt-1" icon="solar:gift-linear" width="32"></iconify-icon>
<div className="">
<h4 className="text-lg font-medium">Werbeartikel</h4>
<p className="text-sm text-neutral-400 mt-1" style={{}}>Kugelschreiber, Tassen, Schlüsselbänder und mehr mit Ihrem Logo.</p>
</div>
</div>
</div>
</div>
<div className="grid grid-cols-2 gap-4 reveal-element">
<img className="rounded-2xl opacity-80 hover:opacity-100 transition-opacity" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<img className="rounded-2xl opacity-80 hover:opacity-100 transition-opacity translate-y-8" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#F8F9FB]" id="referenzen">
<div className="md:px-12 lg:px-24 max-w-[1600px] mr-auto ml-auto pr-6 pl-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 reveal-element">
<div className="">
<h2 className="text-4xl font-medium tracking-tight mb-4">Ausgewählte Projekte</h2>
<p className="text-neutral-500 font-light" style={{}}>Echte Ergebnisse aus unserer Werkstatt.</p>
</div>

<div className="flex gap-2 mt-6 md:mt-0 overflow-x-auto pb-2 scrollbar-hide">
<button className="filter-btn active px-4 py-2 rounded-full bg-black text-white text-sm font-medium whitespace-nowrap" data-filter="all">Alle</button>
<button className="filter-btn px-4 py-2 rounded-full bg-white border border-neutral-200 text-neutral-600 text-sm font-medium hover:bg-neutral-50 whitespace-nowrap" data-filter="vehicle" style={{}}>Fahrzeuge</button>
<button className="filter-btn px-4 py-2 rounded-full bg-white border border-neutral-200 text-neutral-600 text-sm font-medium hover:bg-neutral-50 whitespace-nowrap" data-filter="signage" style={{}}>Werbeanlagen</button>
<button className="filter-btn px-4 py-2 rounded-full bg-white border border-neutral-200 text-neutral-600 text-sm font-medium hover:bg-neutral-50 whitespace-nowrap" data-filter="print" style={{}}>Print &amp; Textil</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="gallery-grid">

<div className="gallery-item group relative aspect-square rounded-2xl overflow-hidden cursor-pointer reveal-element" data-category="vehicle">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&amp;w=800"/>
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
<span className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium">Flottenbeschriftung</span>
</div>
</div>

<div className="gallery-item group relative aspect-square rounded-2xl overflow-hidden cursor-pointer reveal-element" data-category="signage">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
<span className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium">Leuchtreklame</span>
</div>
</div>

<div className="gallery-item group relative aspect-square rounded-2xl overflow-hidden cursor-pointer reveal-element" data-category="print">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
<span className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium">Hoodie Stickerei</span>
</div>
</div>

<div className="gallery-item group relative aspect-square rounded-2xl overflow-hidden cursor-pointer reveal-element" data-category="vehicle">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
<span className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium">Car Wrapping Matte</span>
</div>
</div>

<div className="gallery-item group relative aspect-square rounded-2xl overflow-hidden cursor-pointer reveal-element" data-category="print">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
<span className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium">Visitenkarten Veredelung</span>
</div>
</div>

<div className="gallery-item group relative aspect-square rounded-2xl overflow-hidden cursor-pointer reveal-element" data-category="signage">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
<span className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium">Schaufenster Design</span>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white border-neutral-100 border-b pt-24 pb-24" id="team">
<div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24 mb-24">
<h2 className="text-3xl font-medium mb-12 text-center reveal-element">Das Team hinter Ihrer Marke</h2>
<div className="flex flex-wrap justify-center gap-12 reveal-element">
<div className="text-center">
<div className="w-24 h-24 rounded-full bg-neutral-200 mx-auto mb-4 overflow-hidden" style={{}}>
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&amp;w=200"/>
</div>
<h4 className="text-lg font-medium" style={{}}>Szkop</h4>
<p className="text-sm text-neutral-500" style={{}}>Geschäftsführung</p>
</div>
<div className="text-center">
<div className="w-24 h-24 rounded-full bg-neutral-200 mx-auto mb-4 overflow-hidden" style={{}}>
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&amp;w=200"/>
</div>
<h4 className="text-lg font-medium" style={{}}>Schneider</h4>
<p className="text-sm text-neutral-500" style={{}}>Grafikdesign</p>
</div>
<div className="text-center">
<div className="w-24 h-24 rounded-full bg-neutral-200 mx-auto mb-4 overflow-hidden" style={{}}>
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&amp;w=200"/>
</div>
<h4 className="text-lg font-medium" style={{}}>Harry</h4>
<p className="text-sm text-neutral-500" style={{}}>Montage &amp; Folierung</p>
</div>
</div>
</div>
</section>
<section className="py-32 bg-white rounded-t-[40px] shadow-2xl relative z-20 -mt-10" id="kontakt">
<div className="md:px-12 max-w-6xl mr-auto ml-auto pr-6 pl-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

<div className="reveal-element">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-8">Lassen Sie uns starten.</h2>
<p className="text-lg text-neutral-600 font-light mb-12" style={{}}>
                        Erzählen Sie uns von Ihrem Vorhaben. Wir erstellen Ihnen ein unverbindliches Angebot.
                    </p>
<div className="space-y-8">
<div className="flex gap-4">
<div className="w-12 h-12 bg-[#F8F9FB] rounded-full flex items-center justify-center shrink-0">
<iconify-icon className="text-black" icon="solar:map-point-linear" width="24"></iconify-icon>
</div>
<div className="">
<h4 className="font-medium text-lg mb-1">Standort</h4>
<p className="font-light text-neutral-500" style={{}}>Singen</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-12 h-12 bg-[#F8F9FB] rounded-full flex items-center justify-center shrink-0">
<iconify-icon className="text-black" icon="solar:clock-circle-linear" width="24"></iconify-icon>
</div>
<div className="">
<h4 className="font-medium text-lg mb-1">Öffnungszeiten</h4>
<p className="text-neutral-500 font-light" style={{}}>Mo - Fr: 08:00 - 17:00 Uhr<br/>Sa: Nach Vereinbarung</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-12 h-12 bg-[#F8F9FB] rounded-full flex items-center justify-center shrink-0">
<iconify-icon className="text-black" icon="solar:phone-linear" width="24"></iconify-icon>
</div>
<div className="">
<h4 className="font-medium text-lg mb-1">Kontakt</h4>
<p className="font-light text-neutral-500" style={{}}>+49 (0) 6205 123456<br/></p>
</div>
</div>
</div>
</div>

<div className="md:p-10 reveal-element bg-[#F8F9FB] rounded-[32px] pt-8 pr-8 pb-8 pl-8">
<form className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-sm font-medium text-neutral-700" style={{}}>Vorname</label>
<input className="w-full bg-white border border-neutral-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-1 focus:ring-black transition-all" placeholder="Max" style={{}} type="text"/>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-neutral-700" style={{}}>Nachname</label>
<input className="w-full bg-white border border-neutral-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-1 focus:ring-black transition-all" placeholder="Mustermann" style={{}} type="text"/>
</div>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-neutral-700" style={{}}>E-Mail Adresse</label>
<input className="w-full bg-white border border-neutral-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-1 focus:ring-black transition-all" placeholder="max@beispiel.de" style={{}} type="email"/>
</div>
<div className="space-y-3">
<label className="text-sm font-medium text-neutral-700" style={{}}>Worum geht es?</label>
<div className="flex flex-wrap gap-3">
<label className="cursor-pointer">
<input className="hidden custom-checkbox" type="checkbox"/>
<div className="px-4 py-2 rounded-full border border-neutral-200 bg-white text-sm text-neutral-600 hover:border-neutral-400 transition-colors" style={{}}>Fahrzeug</div>
</label>
<label className="cursor-pointer">
<input className="hidden custom-checkbox" type="checkbox"/>
<div className="px-4 py-2 rounded-full border border-neutral-200 bg-white text-sm text-neutral-600 hover:border-neutral-400 transition-colors" style={{}}>Schilder</div>
</label>
<label className="cursor-pointer">
<input className="hidden custom-checkbox" type="checkbox"/>
<div className="px-4 py-2 rounded-full border border-neutral-200 bg-white text-sm text-neutral-600 hover:border-neutral-400 transition-colors" style={{}}>Textil</div>
</label>
<label className="cursor-pointer">
<input className="hidden custom-checkbox" type="checkbox"/>
<div className="px-4 py-2 rounded-full border border-neutral-200 bg-white text-sm text-neutral-600 hover:border-neutral-400 transition-colors" style={{}}>Print</div>
</label>
</div>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-neutral-700" style={{}}>Nachricht</label>
<textarea className="w-full bg-white border border-neutral-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-1 focus:ring-black transition-all resize-none" placeholder="Beschreiben Sie Ihr Projekt..." rows="4" style={{}}></textarea>
</div>

<div className="border-2 border-dashed border-neutral-300 rounded-xl p-6 text-center hover:border-neutral-400 transition-colors cursor-pointer bg-white/50 group" style={{}}>
<iconify-icon className="text-neutral-400 mb-2 group-hover:text-black transition-colors" icon="solar:upload-minimalistic-linear" style={{}} width="32"></iconify-icon>
<p className="text-sm text-neutral-500 font-medium" style={{}}>Datei hier ablegen oder klicken</p>
<p className="text-xs text-neutral-400 mt-1" style={{}}>PDF, JPG, PNG bis 10MB</p>
<input className="hidden" type="file"/>
</div>
<button className="w-full bg-[#111] text-white py-4 rounded-xl font-medium hover:scale-[1.02] transition-transform active:scale-[0.98]" type="button">
                            Anfrage absenden
                        </button>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-white pt-24 pb-12 px-6 md:px-12">
<div className="max-w-[1600px] mx-auto">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
<div className="col-span-1 md:col-span-2">
<h3 className="text-2xl font-medium tracking-tight mb-6" style={{}}>Singen</h3>
<p className="font-light text-neutral-500 max-w-sm mb-8" style={{}}>Ihr Experte für Sichtbarkeit in der Landkreis Konstanz. Qualität, die man sieht und fühlt.</p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center hover:bg-black hover:text-white transition-colors" href="#" style={{}}>
<iconify-icon icon="solar:camera-linear"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center hover:bg-black hover:text-white transition-colors" href="#" style={{}}>
<iconify-icon icon="brandico:facebook-rect" width="16"></iconify-icon>
</a>
</div>
</div>
<div className="">
<h4 className="font-medium mb-6">Leistungen</h4>
<ul className="space-y-4 text-neutral-500 font-light" style={{}}>
<li className=""><a className="hover:text-black transition-colors" href="#werbetechnik">Fahrzeugbeschriftung</a></li>
<li className=""><a className="hover:text-black transition-colors" href="#werbetechnik">Leuchtreklame</a></li>
<li className=""><a className="hover:text-black transition-colors" href="#textil">Stickerei</a></li>
<li className=""><a className="hover:text-black transition-colors" href="#print">Printmedien</a></li>
</ul>
</div>
<div className="">
<h4 className="font-medium mb-6">Rechtliches</h4>
<ul className="space-y-4 text-neutral-500 font-light" style={{}}>
<li className=""><a className="hover:text-black transition-colors" href="#">Impressum</a></li>
<li><a className="hover:text-black transition-colors" href="#">Datenschutzerklärung</a></li>
<li className=""><a className="hover:text-black transition-colors" href="#">AGB</a></li>
</ul>
</div>
</div>
<div className="border-t border-neutral-100 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-neutral-400 font-light" style={{}}>
<p className="" style={{}}>© 2026 Singen. Alle Rechte vorbehalten.</p>
<p className="" style={{}}>Made in Singen.</p>
</div>
</div>
</footer>


    </>
  );
}
