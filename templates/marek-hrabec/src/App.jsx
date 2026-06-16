import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Initialize Lucide icons
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
                            Marek Hrabec
                        </span>
<span className="uppercase text-xs font-medium text-slate-500 tracking-wider mt-1">
                            Instalatér Polešovice
                        </span>
</a>
</div>
<div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-600">
<a className="hover:text-slate-900 transition-colors" href="#sluzby">Služby</a>
<a className="hover:text-slate-900 transition-colors" href="#o-nas">O mně</a>
<a className="hover:text-slate-900 transition-colors" href="#kontakt">Kontakt</a>
</div>
<div className="hidden md:flex items-center">
<a className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 text-white text-sm font-medium rounded-lg hover:bg-slate-800 transition-all shadow-sm ring-1 ring-slate-900 group" href="tel:605280964">
<i className="w-4 h-4 text-slate-300 group-hover:text-white transition-colors" data-lucide="phone" style={{strokeWidth: '1.5'}}></i>
<span>605 280 964</span>
</a>
</div>
<div className="flex md:hidden">
<button className="p-2 text-slate-600 hover:bg-slate-50 hover:text-slate-900 rounded-lg transition-colors focus:outline-none" id="mobile-menu-toggle" type="button">
<span id="hamburger-icon-open">
<i className="w-6 h-6" data-lucide="menu" style={{strokeWidth: '1.5'}}></i>
</span>
<span id="hamburger-icon-close" style={{display: 'none'}}>
<i className="w-6 h-6" data-lucide="x" style={{strokeWidth: '1.5'}}></i>
</span>
</button>
</div>
</div>
</div>

<div className="md:hidden bg-white w-full border-t border-slate-100" id="mobile-menu">
<div className="px-4 py-4 space-y-1">
<a className="mobile-menu-link block px-4 py-3 text-lg font-medium text-slate-600 hover:text-blue-600 hover:bg-slate-50 rounded-lg" href="#sluzby">Služby</a>
<a className="mobile-menu-link block px-4 py-3 text-lg font-medium text-slate-600 hover:text-blue-600 hover:bg-slate-50 rounded-lg" href="#o-nas">O mně</a>
<a className="mobile-menu-link block px-4 py-3 text-lg font-medium text-slate-600 hover:text-blue-600 hover:bg-slate-50 rounded-lg" href="#kontakt">Kontakt</a>
</div>
</div>
</nav>

<section className="pt-32 pb-20 lg:pt-48 lg:pb-32 relative overflow-hidden" id="hero-section">
<div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
<div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-[120px] pointer-events-none"></div>
<div className="absolute bottom-0 left-0 translate-y-24 -translate-x-24 w-[600px] h-[600px] bg-cyan-50/50 rounded-full blur-[120px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-medium mb-8 shadow-sm hover:border-emerald-300 transition-colors cursor-default">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
                Přijímám nové zakázky
            </div>
<h1 className="sm:text-5xl md:text-7xl leading-[1.1] text-4xl font-semibold text-slate-900 tracking-tight mb-6">Instalatérské práce<br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">v Polešovicích a okolí</span></h1>
<p className="text-lg md:text-xl text-slate-500 font-normal max-w-2xl mx-auto mb-10 leading-relaxed">
                Postarám se o vaše rozvody vody, topení i plynu. Realizuji kompletní kotelny, podlahové vytápění, výměny kotlů i rekonstrukce koupelen. Technicky přesně a spolehlivě.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto inline-flex justify-center items-center gap-2.5 px-8 py-3.5 bg-slate-900 text-white font-medium rounded-xl hover:bg-slate-800 hover:-translate-y-0.5 transition-all shadow-lg shadow-slate-900/10 group" href="tel:605280964">
<i className="w-5 h-5 group-hover:scale-110 transition-transform" data-lucide="phone" style={{strokeWidth: '1.5'}}></i>
<span>Zavolat: 605 280 964</span>
</a>
<a className="w-full sm:w-auto inline-flex justify-center items-center gap-2.5 px-8 py-3.5 bg-white text-slate-700 border border-slate-200 font-medium rounded-xl hover:bg-slate-50 hover:border-slate-300 hover:text-slate-900 transition-all shadow-sm" href="#sluzby">
<span>Co nabízím</span>
<i className="w-4 h-4" data-lucide="arrow-right" style={{strokeWidth: '1.5'}}></i>
</a>
</div>

<div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 mt-12 md:mt-16 text-slate-500 text-sm font-medium">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-blue-500" data-lucide="map-pin" style={{strokeWidth: '1.5'}}></i>
                    Polešovice a okolí
                </div>
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-blue-500" data-lucide="shield-check" style={{strokeWidth: '1.5'}}></i>
                    Dlouholetá praxe
                </div>
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-blue-500" data-lucide="clock" style={{strokeWidth: '1.5'}}></i>
                    Technická preciznost
                </div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-200">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="text-center mb-16 max-w-2xl mx-auto">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-4">Proč si vybrat mě?</h2>
<p className="text-lg text-slate-500">Zakládám si na odbornosti, řemeslné kvalitě a férovém jednání se zákazníkem.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300">
<div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
<i className="w-6 h-6" data-lucide="user" style={{strokeWidth: '1.5'}}></i>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-3 tracking-tight">Samostatný instalatér</h3>
<p className="text-slate-500 leading-relaxed">
                        Jsem živnostník, ne velká firma. Jednáte přímo se mnou, za svou práci ručím vlastním jménem a garantuji osobní přístup.
                    </p>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300">
<div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
<i className="w-6 h-6" data-lucide="map-pin" style={{strokeWidth: '1.5'}}></i>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-3 tracking-tight">Místní působnost</h3>
<p className="text-slate-500 leading-relaxed">
                        Sídlím v Polešovicích. Znám místní prostředí, jsem rychle dostupný pro okolní obce a neúčtuji nesmyslné dopravy z daleka.
                    </p>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300">
<div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
<i className="w-6 h-6" data-lucide="award" style={{strokeWidth: '1.5'}}></i>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-3 tracking-tight">Kompletní realizace</h3>
<p className="text-slate-500 leading-relaxed">
                        Zajistím vše od hrubých rozvodů až po finální montáž sanity. Vyřeším vodu, topení i plyn v rámci jedné zakázky.
                    </p>
</div>
</div>
</div>
</section>

<section className="bg-white border-slate-200 border-t pt-24 pb-24" id="sluzby">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="mb-16 md:text-center max-w-3xl mx-auto">
<span className="uppercase block text-sm font-medium text-blue-600 tracking-wider mb-2">Moje práce</span>
<h2 className="md:text-4xl text-3xl font-semibold text-slate-900 tracking-tight mb-4">Poskytované služby</h2>
<p className="text-lg text-slate-500">Specializuji se na rodinné domy, novostavby i rekonstrukce. Provádím odborné montáže a instalace.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group p-8 rounded-2xl border border-slate-200 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-900/5 transition-all duration-300 bg-slate-50/50 hover:bg-white">
<div className="flex group-hover:text-blue-600 group-hover:border-blue-100 group-hover:bg-blue-50 transition-colors text-slate-700 bg-white w-12 h-12 border-slate-200 border rounded-xl mb-6 items-center justify-center">
<i className="w-6 h-6" data-lucide="droplets" style={{strokeWidth: '1.5'}}></i>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">Voda a rozvody</h3>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-slate-600 text-base">
<i className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" data-lucide="check-circle-2" style={{strokeWidth: '1.5'}}></i>
<span>Kompletní rozvody vody</span>
</li>
<li className="flex items-start gap-3 text-slate-600 text-base">
<i className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" data-lucide="check-circle-2" style={{strokeWidth: '1.5'}}></i>
<span>Domácí vodárny a čerpadla</span>
</li>
<li className="flex items-start gap-3 text-slate-600 text-base">
<i className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" data-lucide="check-circle-2" style={{strokeWidth: '1.5'}}></i>
<span>Filtrace a úprava vody</span>
</li>
</ul>
</div>

<div className="group p-8 rounded-2xl border border-slate-200 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-900/5 transition-all duration-300 bg-slate-50/50 hover:bg-white">
<div className="w-12 h-12 rounded-xl bg-white border border-slate-200 text-slate-700 flex items-center justify-center mb-6 group-hover:text-blue-600 group-hover:border-blue-100 group-hover:bg-blue-50 transition-colors">
<i className="w-6 h-6" data-lucide="flame" style={{strokeWidth: '1.5'}}></i>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">Topení a kotle</h3>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-slate-600 text-base">
<i className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" data-lucide="check-circle-2" style={{strokeWidth: '1.5'}}></i>
<span>Podlahové vytápění</span>
</li>
<li className="flex items-start gap-3 text-slate-600 text-base">
<i className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" data-lucide="check-circle-2" style={{strokeWidth: '1.5'}}></i>
<span>Montáž plynových kotlů</span>
</li>
<li className="flex items-start gap-3 text-slate-600 text-base">
<i className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" data-lucide="check-circle-2" style={{strokeWidth: '1.5'}}></i>
<span>Kotle na tuhá paliva</span>
</li>
</ul>
</div>

<div className="group p-8 rounded-2xl border border-slate-200 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-900/5 transition-all duration-300 bg-slate-50/50 hover:bg-white">
<div className="w-12 h-12 rounded-xl bg-white border border-slate-200 text-slate-700 flex items-center justify-center mb-6 group-hover:text-blue-600 group-hover:border-blue-100 group-hover:bg-blue-50 transition-colors">
<i className="w-6 h-6" data-lucide="bath" style={{strokeWidth: '1.5'}}></i>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">Sanita a koupelny</h3>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-slate-600 text-base">
<i className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" data-lucide="check-circle-2" style={{strokeWidth: '1.5'}}></i>
<span>Kompletní realizace koupelen</span>
</li>
<li className="flex items-start gap-3 text-slate-600 text-base">
<i className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" data-lucide="check-circle-2" style={{strokeWidth: '1.5'}}></i>
<span>Závěsné WC (Geberit)</span>
</li>
<li className="flex items-start gap-3 text-slate-600 text-base">
<i className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" data-lucide="check-circle-2" style={{strokeWidth: '1.5'}}></i>
<span>Sprchové kouty a umyvadla</span>
</li>
</ul>
</div>

<div className="group p-8 rounded-2xl border border-slate-200 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-900/5 transition-all duration-300 bg-slate-50/50 hover:bg-white">
<div className="w-12 h-12 rounded-xl bg-white border border-slate-200 text-slate-700 flex items-center justify-center mb-6 group-hover:text-blue-600 group-hover:border-blue-100 group-hover:bg-blue-50 transition-colors">
<i className="w-6 h-6" data-lucide="settings" style={{strokeWidth: '1.5'}}></i>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">Kotelny</h3>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-slate-600 text-base">
<i className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" data-lucide="check-circle-2" style={{strokeWidth: '1.5'}}></i>
<span>Rekonstrukce starých kotelen</span>
</li>
<li className="flex items-start gap-3 text-slate-600 text-base">
<i className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" data-lucide="check-circle-2" style={{strokeWidth: '1.5'}}></i>
<span>Akumulační a expanzní nádoby</span>
</li>
<li className="flex items-start gap-3 text-slate-600 text-base">
<i className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" data-lucide="check-circle-2" style={{strokeWidth: '1.5'}}></i>
<span>Rozvody mědi a oceli</span>
</li>
</ul>
</div>

<div className="group p-8 rounded-2xl border border-slate-200 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-900/5 transition-all duration-300 bg-slate-50/50 hover:bg-white">
<div className="w-12 h-12 rounded-xl bg-white border border-slate-200 text-slate-700 flex items-center justify-center mb-6 group-hover:text-blue-600 group-hover:border-blue-100 group-hover:bg-blue-50 transition-colors">
<i className="w-6 h-6" data-lucide="fuel" style={{strokeWidth: '1.5'}}></i>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">Plyn</h3>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-slate-600 text-base">
<i className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" data-lucide="check-circle-2" style={{strokeWidth: '1.5'}}></i>
<span>Domovní rozvody plynu</span>
</li>
<li className="flex items-start gap-3 text-slate-600 text-base">
<i className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" data-lucide="check-circle-2" style={{strokeWidth: '1.5'}}></i>
<span>Napojení plynových spotřebičů</span>
</li>
<li className="flex items-start gap-3 text-slate-600 text-base">
<i className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" data-lucide="check-circle-2" style={{strokeWidth: '1.5'}}></i>
<span>Instalace a výměna kotlů</span>
</li>
</ul>
</div>

<div className="group p-8 rounded-2xl border border-slate-200 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-900/5 transition-all duration-300 bg-slate-50/50 hover:bg-white">
<div className="w-12 h-12 rounded-xl bg-white border border-slate-200 text-slate-700 flex items-center justify-center mb-6 group-hover:text-blue-600 group-hover:border-blue-100 group-hover:bg-blue-50 transition-colors">
<i className="w-6 h-6" data-lucide="wrench" style={{strokeWidth: '1.5'}}></i>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">Ostatní služby</h3>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-slate-600 text-base">
<i className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" data-lucide="check-circle-2" style={{strokeWidth: '1.5'}}></i>
<span>Instalace bojlerů</span>
</li>
<li className="flex items-start gap-3 text-slate-600 text-base">
<i className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" data-lucide="check-circle-2" style={{strokeWidth: '1.5'}}></i>
<span>Napojení retenčních nádrží</span>
</li>
<li className="flex items-start gap-3 text-slate-600 text-base">
<i className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" data-lucide="check-circle-2" style={{strokeWidth: '1.5'}}></i>
<span>Venkovní vodní systémy</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-200 relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-50"></div>
<div className="max-w-5xl mx-auto px-4 relative z-10 text-center">
<h2 className="md:text-5xl text-3xl font-semibold text-slate-900 tracking-tight mb-6">Máte projekt? Pojďme to probrat.</h2>
<p className="text-xl text-slate-500 mb-12 font-normal max-w-2xl mx-auto">
                Neváhejte mě kontaktovat. Rád s vámi proberu váš projekt, ať už jde o novou koupelnu nebo kompletní kotelnu.
            </p>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
<a className="group relative bg-white border border-slate-200 rounded-2xl p-8 flex flex-col items-center justify-center transition-all duration-300 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-100 hover:-translate-y-1" href="tel:605280964">
<div className="w-14 h-14 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
<i className="w-6 h-6" data-lucide="phone" style={{strokeWidth: '1.5'}}></i>
</div>
<span className="text-sm font-semibold tracking-wide text-slate-400 uppercase mb-2">Zavolejte mi</span>
<span className="text-2xl font-semibold text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors">605 280 964</span>
</a>
<a className="group relative bg-white border border-slate-200 rounded-2xl p-8 flex flex-col items-center justify-center transition-all duration-300 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-100 hover:-translate-y-1" href="mailto:hrabec.marek@email.cz">
<div className="w-14 h-14 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
<i className="w-6 h-6" data-lucide="mail" style={{strokeWidth: '1.5'}}></i>
</div>
<span className="text-sm font-semibold tracking-wide text-slate-400 uppercase mb-2">Napište mi</span>
<span className="text-2xl font-semibold text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors break-all">hrabec.marek@email.cz</span>
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
<i className="w-12 h-12 text-slate-100 absolute top-8 right-8 rotate-12" data-lucide="quote" style={{strokeWidth: '1.5'}}></i>
<h3 className="text-2xl font-semibold text-slate-900 mb-6 tracking-tight">O mně</h3>
<p className="leading-relaxed text-lg font-normal text-slate-600 mb-6">Jmenuji se <span className="font-medium text-slate-900">Marek Hrabec</span> a jsem instalatér z Polešovic.</p>
<p className="leading-relaxed text-lg font-normal text-slate-600 mb-8">
                            V oboru uplatňuji důraz na precizní provedení každé zakázky. Provádím kompletní realizace voda-topení-plyn pro rodinné domy, rekonstrukce i novostavby. Zakládám si na individuálním přístupu a kvalitně odvedené práci.
                        </p>
<div className="flex items-center gap-4 pt-6 border-t border-slate-100">
<div className="">
<p className="text-slate-900 font-medium text-sm">Marek Hrabec</p>
<p className="text-slate-500 text-xs">Instalatér &amp; Topenář</p>
</div>
</div>
</div>
</div>
<div className="">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-8">Moje zásady práce</h2>
<div className="space-y-8">
<div className="flex gap-5">
<div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
<i className="w-6 h-6" data-lucide="check-circle-2" style={{strokeWidth: '1.5'}}></i>
</div>
<div className="">
<h4 className="font-medium text-slate-900 text-lg mb-1">Kvalitní materiály</h4>
<p className="text-slate-500 leading-relaxed text-base">Používám pouze ověřené potrubí, armatury a komponenty, které zajistí dlouhou životnost.</p>
</div>
</div>
<div className="flex gap-5">
<div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
<i className="w-6 h-6" data-lucide="clock" style={{strokeWidth: '1.5'}}></i>
</div>
<div className="">
<h4 className="font-medium text-slate-900 text-lg mb-1">Spolehlivost</h4>
<p className="text-slate-500 leading-relaxed text-base">Dodržuji domluvené termíny nástupu i dokončení prací. Komunikuji jasně a na rovinu.</p>
</div>
</div>
<div className="flex gap-5">
<div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
<i className="w-6 h-6" data-lucide="handshake" style={{strokeWidth: '1.5'}}></i>
</div>
<div className="">
<h4 className="font-medium text-slate-900 text-lg mb-1">Odbornost</h4>
<p className="text-slate-500 leading-relaxed text-base">Mám dlouholetou praxi s montáží kotlů, podlahového topení i složitých instalací v novostavbách.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white border-t border-slate-200 py-24" id="kontakt">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
<div className="">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-3">Kontaktujte mě</h2>
<p className="text-lg text-slate-500 mb-10">Máte zájem o instalatérské práce? Zavolejte mi.</p>
<div className="space-y-6">
<a className="flex items-center gap-5 p-5 rounded-2xl border border-slate-100 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-50 transition-all group bg-white" href="tel:605280964">
<div className="w-12 h-12 bg-white text-blue-600 rounded-xl flex items-center justify-center border border-slate-100 shadow-sm group-hover:bg-blue-600 group-hover:text-white group-hover:border-transparent transition-all duration-300">
<i className="w-5 h-5" data-lucide="phone" style={{strokeWidth: '1.5'}}></i>
</div>
<div>
<p className="text-xs text-slate-400 mb-1 uppercase tracking-wider font-semibold">Telefon</p>
<p className="text-xl font-medium text-slate-900 group-hover:text-blue-600 transition-colors">605 280 964</p>
</div>
</a>
<div className="flex items-center gap-5 p-5 rounded-2xl border border-slate-100 bg-slate-50/50">
<div className="w-12 h-12 bg-white text-blue-600 rounded-xl flex items-center justify-center border border-slate-100 shadow-sm">
<i className="w-5 h-5" data-lucide="clock" style={{strokeWidth: '1.5'}}></i>
</div>
<div>
<p className="text-xs text-slate-400 mb-1 uppercase tracking-wider font-semibold">Otevírací doba</p>
<p className="text-base font-medium text-slate-900">Po–Pá: 6:30 – 17:00</p>
<p className="text-sm text-slate-500">So–Ne: Zavřeno</p>
</div>
</div>
</div>
<div className="mt-12 p-8 bg-white rounded-2xl border border-slate-200 shadow-sm">
<h3 className="font-medium text-slate-900 mb-6 flex items-center gap-2 text-lg">
<i className="w-5 h-5 text-blue-500" data-lucide="info" style={{strokeWidth: '1.5'}}></i>
                            Fakturační údaje
                        </h3>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8 text-sm text-slate-600">
<div className="">
<p className="mb-1 text-slate-400 text-xs uppercase tracking-wider font-medium">Jméno</p>
<p className="font-medium text-slate-900 text-base">Marek Hrabec</p>
</div>
<div className="">
<p className="mb-1 text-slate-400 text-xs uppercase tracking-wider font-medium">Adresa</p>
<p className="font-medium text-slate-900 text-base">Polešovice 48</p>
<p className="text-slate-500">687 37 Polešovice</p>
</div>
</div>
</div>
</div>
<div className="h-[400px] lg:h-auto bg-slate-100 rounded-2xl overflow-hidden relative border border-slate-200 shadow-inner">
<iframe allowfullscreen="" className="absolute inset-0" height="100%" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://maps.google.com/maps?q=Polešovice+48&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=&amp;output=embed" style={{border: '0'}} width="100%"></iframe>
<div className="absolute bottom-6 left-6 right-6 bg-white p-4 rounded-xl border border-slate-200 shadow-lg max-w-xs">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
<i className="w-5 h-5" data-lucide="map-pin" style={{strokeWidth: '1.5'}}></i>
</div>
<div>
<p className="font-medium text-slate-900 text-sm">Oblast působnosti</p>
<p className="text-xs text-slate-500 mt-0.5">Polešovice a okolí</p>
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
                            Marek Hrabec
                        </span>
<span className="text-sm font-normal text-slate-500 mt-2">
                            Instalatér – Voda, Topení, Plyn
                        </span>
</a>
</div>
<div className="flex gap-4">
</div>
</div>
<div className="mt-12 pt-8 border-t border-slate-200 text-center text-sm text-slate-400">
<p className="">© 2026 Marek Hrabec. Všechna práva vyhrazena.</p>
</div>
</div>
</footer>

<div className="fixed bottom-0 left-0 w-full z-50 md:hidden bg-white/80 backdrop-blur-md border-t border-slate-200 p-4 pb-8 flex gap-3" id="mobile-sticky-bar">
<a className="flex-1 bg-slate-900 text-white font-medium py-3.5 px-4 rounded-xl shadow-lg flex items-center justify-center gap-2 active:scale-95 transition-transform" href="tel:605280964">
<i className="w-5 h-5" data-lucide="phone" style={{strokeWidth: '1.5'}}></i>
            Zavolat
        </a>
<a className="w-14 bg-white text-slate-900 border border-slate-200 rounded-xl shadow-sm flex items-center justify-center active:scale-95 transition-transform" href="mailto:hrabec.marek@email.cz">
<i className="w-6 h-6" data-lucide="mail" style={{strokeWidth: '1.5'}}></i>
</a>
</div>


    </>
  );
}
