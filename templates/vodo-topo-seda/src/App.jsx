import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Initialize Lucide Icons
        lucide.createIcons();

        // Mobile menu logic
        (function() {
            var mobileMenuOpen = false;
            var mobileMenu = document.getElementById('mobile-menu');
            var menuToggle = document.getElementById('mobile-menu-toggle');
            var iconOpen = document.getElementById('hamburger-icon-open');
            var iconClose = document.getElementById('hamburger-icon-close');
            var menuLinks = document.querySelectorAll('.mobile-menu-link');

            function openMobileMenu() {
                mobileMenuOpen = true;
                mobileMenu.classList.add('menu-open');
                iconOpen.style.display = 'none';
                iconClose.style.display = 'block';
            }

            function closeMobileMenu() {
                mobileMenuOpen = false;
                mobileMenu.classList.remove('menu-open');
                iconOpen.style.display = 'block';
                iconClose.style.display = 'none';
            }

            function toggleMobileMenu() {
                if (mobileMenuOpen) {
                    closeMobileMenu();
                } else {
                    openMobileMenu();
                }
            }

            menuToggle.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                toggleMobileMenu();
            });

            menuLinks.forEach(function(link) {
                link.addEventListener('click', function() {
                    closeMobileMenu();
                });
            });

            document.addEventListener('click', function(e) {
                if (!mobileMenuOpen) return;
                if (!mobileMenu.contains(e.target) && !menuToggle.contains(e.target)) {
                    closeMobileMenu();
                }
            });
        })();

        // Mobile sticky bar logic
        (function() {
            var stickyBar = document.getElementById('mobile-sticky-bar');
            var heroSection = document.getElementById('hero-section');
            
            function checkScroll() {
                if (!heroSection || !stickyBar) return;
                var heroBottom = heroSection.getBoundingClientRect().bottom;
                if (heroBottom <= 0) {
                    stickyBar.classList.add('visible');
                } else {
                    stickyBar.classList.remove('visible');
                }
            }

            window.addEventListener('scroll', checkScroll, { passive: true });
            window.addEventListener('resize', checkScroll, { passive: true });
            checkScroll();
        })();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-40 bg-white/80 backdrop-blur-xl border-b border-slate-200/80 transition-all duration-300">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">
<div className="flex items-center">
<a className="flex flex-col group" href="#">
<span className="leading-none group-hover:text-blue-600 transition-colors text-lg font-semibold text-slate-900 tracking-tighter">
                            Vodo-Topo Šeda
                        </span>
<span className="uppercase text-xs font-medium text-slate-500 tracking-wider mt-1">
                            Kyjov a okolí
                        </span>
</a>
</div>
<div className="hidden md:flex items-center space-x-8 text-[15px] font-medium text-slate-600">
<a className="hover:text-slate-900 transition-colors" href="#sluzby">Služby</a>
<a className="hover:text-slate-900 transition-colors" href="#o-nas">O nás</a>
<a className="hover:text-slate-900 transition-colors" href="#kontakt">Kontakt</a>
</div>
<div className="hidden md:flex items-center">
<a className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 text-white text-sm font-medium rounded-lg hover:bg-slate-800 transition-all shadow-sm ring-1 ring-slate-900 group" href="tel:777733460">
<i className="w-4 h-4 text-slate-300 group-hover:text-white transition-colors" data-lucide="phone"></i>
<span>777 733 460</span>
</a>
</div>
<div className="flex md:hidden">
<button className="p-2 text-slate-600 hover:bg-slate-50 hover:text-slate-900 rounded-lg transition-colors focus:outline-none" id="mobile-menu-toggle" type="button">
<span id="hamburger-icon-open">
<i className="w-6 h-6" data-lucide="menu"></i>
</span>
<span id="hamburger-icon-close" style={{display: 'none'}}>
<i className="w-6 h-6" data-lucide="x"></i>
</span>
</button>
</div>
</div>
</div>

<div className="md:hidden bg-white w-full border-t border-slate-100" id="mobile-menu">
<div className="px-4 py-4 space-y-1">
<a className="mobile-menu-link block px-4 py-3 text-lg font-medium text-slate-600 hover:text-blue-600 hover:bg-slate-50 rounded-lg" href="#sluzby">Služby</a>
<a className="mobile-menu-link block px-4 py-3 text-lg font-medium text-slate-600 hover:text-blue-600 hover:bg-slate-50 rounded-lg" href="#o-nas">O nás</a>
<a className="mobile-menu-link block px-4 py-3 text-lg font-medium text-slate-600 hover:text-blue-600 hover:bg-slate-50 rounded-lg" href="#kontakt">Kontakt</a>
</div>
</div>
</nav>

<section className="pt-32 pb-20 lg:pt-48 lg:pb-32 relative overflow-hidden" id="hero-section">

<div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
<div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-[120px] pointer-events-none"></div>
<div className="absolute bottom-0 left-0 translate-y-24 -translate-x-24 w-[600px] h-[600px] bg-cyan-50/50 rounded-full blur-[120px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-600 text-xs font-medium mb-8 shadow-sm hover:border-blue-200 hover:text-blue-600 transition-colors cursor-default">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
                Individuální přístup a spolehlivost
            </div>
<h1 className="text-4xl sm:text-5xl md:text-7xl font-semibold text-slate-900 tracking-tight mb-6 leading-[1.1]">
                Instalatérské práce<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">v Kyjově a okolí</span>
</h1>
<p className="text-lg md:text-xl text-slate-500 font-normal max-w-2xl mx-auto mb-10 leading-relaxed">
                Kompletní vodoinstalatérské a topenářské služby. Od drobných oprav kapajících kohoutků po kompletní rekonstrukce koupelen. Férově a kvalitně.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto inline-flex justify-center items-center gap-2.5 px-8 py-3.5 bg-slate-900 text-white font-medium rounded-xl hover:bg-slate-800 hover:-translate-y-0.5 transition-all shadow-lg shadow-slate-900/10 group" href="tel:777733460">
<i className="w-5 h-5 group-hover:scale-110 transition-transform" data-lucide="phone"></i>
<span className="">Zavolat: 777 733 460</span>
</a>
<a className="w-full sm:w-auto inline-flex justify-center items-center gap-2.5 px-8 py-3.5 bg-white text-slate-700 border border-slate-200 font-medium rounded-xl hover:bg-slate-50 hover:border-slate-300 hover:text-slate-900 transition-all shadow-sm" href="#sluzby">
<span className="">Moje služby</span>
<i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>

<div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 mt-12 md:mt-16 text-slate-500 text-sm font-medium">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-blue-500" data-lucide="map-pin"></i>
                    Kyjov a okolí
                </div>
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-blue-500" data-lucide="shield-check"></i>
                    Záruka kvality
                </div>
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-blue-500" data-lucide="clock"></i>
                    Rychlá reakce
                </div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-200">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="text-center mb-16 max-w-2xl mx-auto">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-4">Proč si vybrat mě?</h2>
<p className="text-lg text-slate-500">Stavím na důvěře, kvalitě a osobním přístupu ke každému zákazníkovi.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300">
<div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
<i className="w-6 h-6" data-lucide="user"></i>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-3 tracking-tight">Osobní přístup</h3>
<p className="text-slate-500 leading-relaxed">
                        Jednáte přímo se mnou. Zaručuji jasnou komunikaci, dodržení termínů a řešení na míru vašim potřebám bez prostředníků.
                    </p>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300">
<div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
<i className="w-6 h-6" data-lucide="map"></i>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-3 tracking-tight">Lokální firma</h3>
<p className="text-slate-500 leading-relaxed">
                        Působím v Kyjově a blízkém okolí. Díky tomu jsem flexibilní, rychle dostupný a neúčtuji zbytečně vysoké cestovní náklady.
                    </p>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300">
<div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
<i className="w-6 h-6" data-lucide="award"></i>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-3 tracking-tight">Kvalita a poctivost</h3>
<p className="text-slate-500 leading-relaxed">
                        Používám ověřené materiály a postupy. Cena je vždy předem jasná, žádné skryté poplatky. Za svou prací si stojím.
                    </p>
</div>
</div>
</div>
</section>

<section className="bg-white border-slate-200 border-t pt-24 pb-24" id="sluzby">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="mb-16 md:text-center max-w-3xl mx-auto">
<span className="uppercase block text-sm font-medium text-blue-600 tracking-wider mb-2">Co nabízím</span>
<h2 className="md:text-4xl text-3xl font-semibold text-slate-900 tracking-tight mb-4">Moje služby</h2>
<p className="text-lg text-slate-500">Kompletní servis pro vaši domácnost i firmu. Poradíme si s každým problémem.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group p-8 rounded-2xl border border-slate-200 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-900/5 transition-all duration-300 bg-slate-50/50 hover:bg-white">
<div className="w-12 h-12 rounded-xl bg-white border border-slate-200 text-slate-700 flex items-center justify-center mb-6 group-hover:text-blue-600 group-hover:border-blue-100 group-hover:bg-blue-50 transition-colors">
<i className="w-6 h-6" data-lucide="wrench"></i>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">Opravy a údržba</h3>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-slate-600 text-base">
<i className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" data-lucide="check"></i>
<span>Opravy kohoutků a baterií</span>
</li>
<li className="flex items-start gap-3 text-slate-600 text-base">
<i className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" data-lucide="check"></i>
<span>Opravy WC splachovačů</span>
</li>
<li className="flex items-start gap-3 text-slate-600 text-base">
<i className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" data-lucide="check"></i>
<span>Výměny ventilů a těsnění</span>
</li>
</ul>
</div>

<div className="group p-8 rounded-2xl border border-slate-200 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-900/5 transition-all duration-300 bg-slate-50/50 hover:bg-white">
<div className="w-12 h-12 rounded-xl bg-white border border-slate-200 text-slate-700 flex items-center justify-center mb-6 group-hover:text-blue-600 group-hover:border-blue-100 group-hover:bg-blue-50 transition-colors">
<i className="w-6 h-6" data-lucide="bath"></i>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">Sanitární technika</h3>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-slate-600 text-base">
<i className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" data-lucide="check"></i>
<span>Montáž van a sprchových koutů</span>
</li>
<li className="flex items-start gap-3 text-slate-600 text-base">
<i className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" data-lucide="check"></i>
<span>Instalace umyvadel a dřezů</span>
</li>
<li className="flex items-start gap-3 text-slate-600 text-base">
<i className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" data-lucide="check"></i>
<span>Usazení a připojení WC</span>
</li>
</ul>
</div>

<div className="group p-8 rounded-2xl border border-slate-200 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-900/5 transition-all duration-300 bg-slate-50/50 hover:bg-white">
<div className="w-12 h-12 rounded-xl bg-white border border-slate-200 text-slate-700 flex items-center justify-center mb-6 group-hover:text-blue-600 group-hover:border-blue-100 group-hover:bg-blue-50 transition-colors">
<i className="w-6 h-6" data-lucide="flame"></i>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">Topenářské práce</h3>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-slate-600 text-base">
<i className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" data-lucide="check"></i>
<span>Montáž a výměna radiátorů</span>
</li>
<li className="flex items-start gap-3 text-slate-600 text-base">
<i className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" data-lucide="check"></i>
<span>Instalace bojlerů</span>
</li>
<li className="flex items-start gap-3 text-slate-600 text-base">
<i className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" data-lucide="check"></i>
<span>Opravy topných systémů</span>
</li>
</ul>
</div>

<div className="group p-8 rounded-2xl border border-slate-200 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-900/5 transition-all duration-300 bg-slate-50/50 hover:bg-white">
<div className="w-12 h-12 rounded-xl bg-white border border-slate-200 text-slate-700 flex items-center justify-center mb-6 group-hover:text-blue-600 group-hover:border-blue-100 group-hover:bg-blue-50 transition-colors">
<i className="w-6 h-6" data-lucide="bell-ring"></i>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">Havarijní servis</h3>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-slate-600 text-base">
<i className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" data-lucide="check"></i>
<span>Prasklé vodovodní potrubí</span>
</li>
<li className="flex items-start gap-3 text-slate-600 text-base">
<i className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" data-lucide="check"></i>
<span>Ucpané odpady</span>
</li>
<li className="flex items-start gap-3 text-slate-600 text-base">
<i className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" data-lucide="check"></i>
<span>Rychlý výjezd k haváriím</span>
</li>
</ul>
</div>

<div className="group p-8 rounded-2xl border border-slate-200 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-900/5 transition-all duration-300 bg-slate-50/50 hover:bg-white">
<div className="w-12 h-12 rounded-xl bg-white border border-slate-200 text-slate-700 flex items-center justify-center mb-6 group-hover:text-blue-600 group-hover:border-blue-100 group-hover:bg-blue-50 transition-colors">
<i className="w-6 h-6" data-lucide="plug"></i>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">Zapojení spotřebičů</h3>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-slate-600 text-base">
<i className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" data-lucide="check"></i>
<span>Odborné zapojení praček</span>
</li>
<li className="flex items-start gap-3 text-slate-600 text-base">
<i className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" data-lucide="check"></i>
<span>Zapojení myček nádobí</span>
</li>
<li className="flex items-start gap-3 text-slate-600 text-base">
<i className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" data-lucide="check"></i>
<span>Úprava přívodů vody a odpadů</span>
</li>
</ul>
</div>

<div className="group p-8 rounded-2xl border border-slate-200 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-900/5 transition-all duration-300 bg-slate-50/50 hover:bg-white">
<div className="w-12 h-12 rounded-xl bg-white border border-slate-200 text-slate-700 flex items-center justify-center mb-6 group-hover:text-blue-600 group-hover:border-blue-100 group-hover:bg-blue-50 transition-colors">
<i className="w-6 h-6" data-lucide="clipboard-check"></i>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">Revize a kontroly</h3>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-slate-600 text-base">
<i className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" data-lucide="check"></i>
<span>Preventivní prohlídky rozvodů</span>
</li>
<li className="flex items-start gap-3 text-slate-600 text-base">
<i className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" data-lucide="check"></i>
<span>Kontrola těsnosti spojů</span>
</li>
<li className="flex items-start gap-3 text-slate-600 text-base">
<i className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" data-lucide="check"></i>
<span>Poradenství a konzultace</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-200 relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-50"></div>
<div className="max-w-5xl mx-auto px-4 relative z-10 text-center">
<h2 className="md:text-5xl text-3xl font-semibold text-slate-900 tracking-tight mb-6">Máte zájem o naše služby?
Pojďme to probrat.</h2>
<p className="text-xl text-slate-500 mb-12 font-normal max-w-2xl mx-auto">
                Neváhejte mě kontaktovat. Rád s vámi proberu váš projekt a navrhnu optimální řešení.
            </p>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
<a className="group relative bg-white border border-slate-200 rounded-2xl p-8 flex flex-col items-center justify-center transition-all duration-300 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-100 hover:-translate-y-1" href="tel:777733460">
<div className="w-14 h-14 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
<i className="w-6 h-6" data-lucide="phone"></i>
</div>
<span className="text-sm font-semibold tracking-wide text-slate-400 uppercase mb-2">Zavolejte mi</span>
<span className="text-2xl font-semibold text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors">777 733 460</span>
</a>
<a className="group relative bg-white border border-slate-200 rounded-2xl p-8 flex flex-col items-center justify-center transition-all duration-300 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-100 hover:-translate-y-1" href="mailto:to.mas.seda@post.cz">
<div className="w-14 h-14 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
<i className="w-6 h-6" data-lucide="mail"></i>
</div>
<span className="text-sm font-semibold tracking-wide text-slate-400 uppercase mb-2">Napište mi</span>
<span className="text-2xl font-semibold text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors break-all">to.mas.seda@post.cz</span>
</a>
</div>
</div>
</section>

<section className="bg-white border-t border-slate-200 py-24" id="o-nas">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="relative">
<div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-100 rounded-full blur-xl z-0 opacity-60"></div>
<div className="relative z-10 bg-white p-10 rounded-2xl border border-slate-200 shadow-sm">
<i className="w-12 h-12 text-slate-100 absolute top-8 right-8 rotate-12" data-lucide="quote"></i>
<h3 className="text-2xl font-semibold text-slate-900 mb-6">O mě</h3>
<p className="leading-relaxed text-lg font-normal text-slate-600 mb-6">Jmenuji se <span className="font-medium text-slate-900">Tomáš Šeda</span> a jsem instalatér působící v Kyjově a okolí.</p>
<p className="leading-relaxed text-lg font-normal text-slate-600 mb-8">
                            V oboru uplatňuji důraz na precizní provedení každé zakázky. Mým cílem je spokojený zákazník, který se na mě s důvěrou obrátí znovu. Nabízím poctivé řemeslo za férovou cenu.
                        </p>
<div className="flex items-center gap-4 pt-6 border-t border-slate-100">
<div className="">
<p className="text-slate-900 font-medium text-sm">Tomáš Šeda</p>
<p className="text-slate-500 text-xs">Majitel</p>
</div>
</div>
</div>
</div>
<div className="">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-8">Hodnoty, na kterých stavím</h2>
<div className="space-y-8">
<div className="flex gap-5">
<div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
<i className="w-6 h-6" data-lucide="check-circle"></i>
</div>
<div className="">
<h4 className="font-medium text-slate-900 text-lg mb-1">Kvalita práce</h4>
<p className="text-slate-500 leading-relaxed text-base">Důraz na precizní provedení a funkčnost. Používám pouze ověřené a kvalitní materiály.</p>
</div>
</div>
<div className="flex gap-5">
<div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
<i className="w-6 h-6" data-lucide="clock"></i>
</div>
<div className="">
<h4 className="font-medium text-slate-900 text-lg mb-1">Spolehlivost</h4>
<p className="text-slate-500 leading-relaxed text-base">Platí to, na čem se domluvíme. Dodržuji dohodnuté termíny i cenové nabídky.</p>
</div>
</div>
<div className="flex gap-5">
<div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
<i className="w-6 h-6" data-lucide="thumbs-up"></i>
</div>
<div className="">
<h4 className="font-medium text-slate-900 text-lg mb-1">Férovost</h4>
<p className="text-slate-500 leading-relaxed text-base">Jasné ceny a slušné jednání. Žádné nepříjemné překvapení při placení.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-slate-50 border-t border-slate-200 py-24" id="kontakt">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
<div className="">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-3">Kontaktujte mne</h2>
<p className="text-lg text-slate-500 mb-10">Máte dotaz nebo zájem o služby? Zavolejte nebo napište.</p>
<div className="space-y-6">
<a className="flex items-center gap-5 p-5 rounded-2xl border border-slate-100 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-50 transition-all group bg-white" href="tel:777733460">
<div className="w-12 h-12 bg-white text-blue-600 rounded-xl flex items-center justify-center border border-slate-100 shadow-sm group-hover:bg-blue-600 group-hover:text-white group-hover:border-transparent transition-all duration-300">
<i className="w-5 h-5" data-lucide="phone"></i>
</div>
<div>
<p className="text-xs text-slate-400 mb-1 uppercase tracking-wider font-semibold">Telefon</p>
<p className="text-xl font-medium text-slate-900 group-hover:text-blue-600 transition-colors">777 733 460</p>
</div>
</a>
<a className="flex items-center gap-5 p-5 rounded-2xl border border-slate-100 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-50 transition-all group bg-white" href="mailto:to.mas.seda@post.cz">
<div className="w-12 h-12 bg-white text-blue-600 rounded-xl flex items-center justify-center border border-slate-100 shadow-sm group-hover:bg-blue-600 group-hover:text-white group-hover:border-transparent transition-all duration-300">
<i className="w-5 h-5" data-lucide="mail"></i>
</div>
<div>
<p className="text-xs text-slate-400 mb-1 uppercase tracking-wider font-semibold">E-mail</p>
<p className="text-lg font-medium text-slate-900 group-hover:text-blue-600 transition-colors">to.mas.seda@post.cz</p>
</div>
</a>
</div>
<div className="mt-12 p-8 bg-white rounded-2xl border border-slate-200 shadow-sm">
<h3 className="font-medium text-slate-900 mb-6 flex items-center gap-2 text-lg">
<i className="w-5 h-5 text-blue-500" data-lucide="info"></i>
                            Fakturační údaje
                        </h3>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8 text-sm text-slate-600">
<div className="">
<p className="mb-1 text-slate-400 text-xs uppercase tracking-wider font-medium">Název</p>
<p className="font-medium text-slate-900 text-base">Vodo-Topo Šeda</p>
</div>
<div className="">
<p className="mb-1 text-slate-400 text-xs uppercase tracking-wider font-medium">Majitel</p>
<p className="font-medium text-slate-900 text-base">Tomáš Šeda</p>
</div>
<div>
<p className="mb-1 text-slate-400 text-xs uppercase tracking-wider font-medium">Sídlo</p>
<p className="font-medium text-slate-900 text-base">Kyjov a okolí</p>
</div>
</div>
</div>
</div>
<div className="h-[400px] lg:h-auto bg-slate-100 rounded-2xl overflow-hidden relative border border-slate-200 shadow-inner">
<iframe allowfullscreen="" className="absolute inset-0" height="100%" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://maps.google.com/maps?q=Kyjov,+Czech+Republic&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed" style={{border: '0'}} width="100%"></iframe>
<div className="absolute bottom-6 left-6 right-6 bg-white p-4 rounded-xl border border-slate-200 shadow-lg max-w-xs">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
<i className="w-5 h-5" data-lucide="map-pin"></i>
</div>
<div>
<p className="font-medium text-slate-900 text-sm">Oblast působnosti</p>
<p className="text-xs text-slate-500 mt-0.5">Kyjov a okolí (cca 20km)</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-white text-slate-500 py-16 border-t border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-center gap-8">
<div className="">
<a className="flex flex-col group text-center md:text-left" href="#">
<span className="leading-none text-xl font-semibold text-slate-900 tracking-tight">
                            Vodo-Topo Šeda
                        </span>
<span className="text-sm font-normal text-slate-500 mt-2">
                            Profesionální instalatérské služby
                        </span>
</a>
</div>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center hover:bg-white hover:text-blue-600 hover:border-blue-200 hover:shadow-md transition-all border border-slate-200" href="mailto:to.mas.seda@post.cz">
<i className="w-5 h-5" data-lucide="mail"></i>
</a>
</div>
</div>
<div className="mt-12 pt-8 border-t border-slate-200 text-center text-sm text-slate-400">
<p className="">© 2026 Vodo-Topo Šeda. Všechna práva vyhrazena.</p>
</div>
</div>
</footer>

<div className="fixed bottom-0 left-0 w-full z-50 md:hidden bg-white/80 backdrop-blur-md border-t border-slate-200 p-4 pb-8 flex gap-3" id="mobile-sticky-bar">
<a className="flex-1 bg-slate-900 text-white font-medium py-3.5 px-4 rounded-xl shadow-lg flex items-center justify-center gap-2 active:scale-95 transition-transform" href="tel:777733460">
<i className="w-5 h-5" data-lucide="phone"></i>
            Zavolat
        </a>
<a className="w-14 bg-white text-slate-900 border border-slate-200 rounded-xl shadow-sm flex items-center justify-center active:scale-95 transition-transform" href="mailto:to.mas.seda@post.cz">
<i className="w-6 h-6" data-lucide="mail"></i>
</a>
</div>


    </>
  );
}
