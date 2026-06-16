import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        const menuToggle = document.getElementById('menu-toggle');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileLinks = document.querySelectorAll('.mobile-link');
        const menuIcon = menuToggle.querySelector('iconify-icon');

        menuToggle.addEventListener('click', () => {
            const isHidden = mobileMenu.classList.contains('hidden');
            if (isHidden) {
                mobileMenu.classList.remove('hidden');
                menuIcon.setAttribute('icon', 'solar:close-square-linear');
            } else {
                mobileMenu.classList.add('hidden');
                menuIcon.setAttribute('icon', 'solar:hamburger-menu-linear');
            }
        });

        // Close menu when clicking a link
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                menuIcon.setAttribute('icon', 'solar:hamburger-menu-linear');
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 glass-panel border-b border-slate-200/60 transition-all duration-300">
<div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between relative">
<a className="hover:text-emerald-700 transition-colors flex items-center gap-2 text-xl font-black text-slate-900 tracking-tighter font-geist" href="#">
                Pavel Rosák
            </a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#sluzby">Služby</a>
<a className="hover:text-slate-900 transition-colors" href="#reference">Reference</a>
<div className="flex items-center gap-4 pl-6 border-l border-slate-200">
<a className="flex items-center gap-2 hover:text-slate-900 transition-colors font-semibold" href="tel:+420775654338">
<iconify-icon icon="solar:phone-calling-linear" strokeWidth="1.5" width="18"></iconify-icon>
                        775 654 338
                    </a>
<a className="px-5 py-2.5 bg-slate-900 text-white font-medium rounded-full hover:bg-slate-800 transition-all hover:shadow-lg hover:shadow-slate-200/50 active:scale-95" href="#kontakt">
                        Poptat termín
                    </a>
</div>
</div>

<button aria-label="Menu" className="md:hidden flex items-center justify-center p-2 rounded-lg text-slate-900 hover:bg-slate-100 transition-colors" id="menu-toggle">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>

<div className="hidden absolute top-full left-0 w-full bg-white border-b border-slate-200 shadow-xl md:hidden" id="mobile-menu">
<div className="flex flex-col p-6 gap-2">
<a className="mobile-link flex items-center justify-between p-4 rounded-xl hover:bg-slate-50 text-slate-900 font-semibold text-lg" href="#sluzby">
                    Služby
                    <iconify-icon className="text-slate-400" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>
<a className="mobile-link flex items-center justify-between p-4 rounded-xl hover:bg-slate-50 text-slate-900 font-semibold text-lg" href="#reference">
                    Reference
                    <iconify-icon className="text-slate-400" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>
<div className="h-px bg-slate-100 my-2"></div>
<a className="mobile-link flex items-center gap-3 p-4 text-slate-600 font-medium" href="tel:+420775654338">
<div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
<iconify-icon icon="solar:phone-calling-linear" width="18"></iconify-icon>
</div>
                    775 654 338
                </a>
<a className="mobile-link w-full mt-2 flex items-center justify-center gap-2 px-6 py-4 bg-slate-900 text-white rounded-xl font-semibold hover:bg-slate-800 active:scale-95 transition-all" href="#kontakt">
                    Poptat termín
                </a>
</div>
</div>
</nav>


<section className="min-h-[100dvh] flex flex-col justify-center md:block md:min-h-0 md:pt-48 md:pb-32 overflow-hidden pt-36 pr-6 pb-20 pl-6 relative">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-slate-100 to-transparent rounded-[100%] blur-3xl -z-10 opacity-60"></div>
<div className="z-10 text-center max-w-4xl mr-auto ml-auto relative">

<div className="inline-flex flex-wrap justify-center gap-3 mb-10">

<span className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-700 bg-emerald-50 border-emerald-100 border ring-emerald-500/20 ring-1 rounded-full pt-1.5 pr-3 pb-1.5 pl-3 shadow-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
                    Přijímám nové zakázky
                </span>

<span className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold border border-blue-100 shadow-sm ring-1 ring-blue-500/20">
<iconify-icon icon="solar:map-point-linear" strokeWidth="2" width="14"></iconify-icon>
                    Velemín a Ústecký kraj
                </span>
</div>

<h1 className="leading-[1.1] md:text-7xl text-4xl font-bold text-slate-900 tracking-tight mb-8">
                Teplo domova a<br/>
<span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-400 to-slate-600">fungující voda.</span>
</h1>
<p className="text-lg md:text-xl text-slate-500 mb-10 leading-relaxed max-w-2xl mx-auto font-normal">
                Jmenuji se <strong className="text-slate-900 font-semibold">Pavel Rosák</strong>. Žádné složité řeči, jen poctivá instalatérská práce a moderní systémy, které vydrží roky.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-slate-900 text-white rounded-xl font-semibold hover:bg-slate-800 transition-all shadow-xl shadow-slate-200/50 hover:-translate-y-0.5 group" href="#kontakt">
                    Ozvěte se mi
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5" width="18"></iconify-icon>
</a>
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white text-slate-700 border border-slate-200 rounded-xl font-semibold hover:border-slate-300 hover:bg-slate-50 transition-all shadow-sm" href="tel:+420775654338">
<iconify-icon className="" icon="solar:phone-calling-linear" strokeWidth="1.5" width="18"></iconify-icon>
                    775 654 338
                </a>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white relative">
<div className="max-w-6xl mx-auto">
<div className="mb-12 flex items-end justify-between">
<div className="">
<span className="text-emerald-600 font-semibold text-xs tracking-wider uppercase mb-3 block">Osobní garance</span>
<h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Proč spolupracovat se mnou?</h2>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-12 gap-6">

<div className="md:col-span-7 bg-slate-900 rounded-[2rem] p-8 md:p-10 flex flex-col justify-between shadow-2xl shadow-slate-200 relative overflow-hidden group">

<div className="absolute -top-24 -right-24 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl group-hover:bg-emerald-500/30 transition-colors duration-700"></div>
<div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-900 to-transparent"></div>
<div className="relative z-10 h-full flex flex-col">
<div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-emerald-400 mb-auto border border-white/5 shadow-inner">
<iconify-icon icon="solar:user-id-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div className="mt-8 md:mt-12">
<h3 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight">Jednáte přímo se mnou</h3>
<p className="text-slate-300 font-medium leading-relaxed text-lg max-w-md">Žádní manažeři ani prostředníci. Kdo s vámi zakázku domluví, ten ji také zrealizuje. Ručím za výsledek svým jménem.</p>
</div>
</div>
</div>

<div className="md:col-span-5 flex flex-col gap-6">

<div className="flex-1 bg-slate-50 rounded-[2rem] p-8 border border-slate-100 hover:border-slate-200 hover:bg-white hover:shadow-xl hover:shadow-slate-200/40 transition-all duration-300 group">
<div className="flex items-start gap-5">
<div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-blue-600 shadow-sm border border-slate-100 shrink-0 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:medal-ribbon-star-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-bold text-slate-900 mb-2">Kvalita materiálu</h3>
<p className="text-sm text-slate-500 font-medium leading-relaxed">Používám ověřené systémy (Rehau, Hansgrohe). Nešetřím na tom, co není vidět.</p>
</div>
</div>
</div>

<div className="flex-1 bg-slate-50 rounded-[2rem] p-8 border border-slate-100 hover:border-slate-200 hover:bg-white hover:shadow-xl hover:shadow-slate-200/40 transition-all duration-300 group">
<div className="flex items-start gap-5">
<div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-amber-500 shadow-sm border border-slate-100 shrink-0 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:hand-shake-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-bold text-slate-900 mb-2">Slovo chlapa platí</h3>
<p className="text-sm text-slate-500 font-medium leading-relaxed">Dohodnutá cena je konečná. Termíny dodržuji. Po práci po sobě vždy uklidím.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-6xl mx-auto border-t border-slate-100" id="sluzby">
<h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-16 text-center md:text-left">S čím vám mohu pomoci</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">

<div className="group p-8 rounded-[2rem] bg-white border border-slate-100 hover:border-slate-200 hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 hover:-translate-y-1">
<div className="w-14 h-14 rounded-2xl bg-slate-50 text-slate-900 flex items-center justify-center mb-8 group-hover:bg-slate-900 group-hover:text-white transition-colors duration-300">
<iconify-icon icon="solar:fire-square-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-3">Podlahové vytápění</h3>
<p className="text-slate-500 font-medium text-sm leading-relaxed mb-8">Kompletní realizace topení pro maximální komfort. Od návrhu po zalití.</p>
<div className="space-y-3">
<div className="flex items-center gap-3 text-sm font-semibold text-slate-700">
<iconify-icon className="text-emerald-500 flex-shrink-0" icon="solar:check-circle-bold"></iconify-icon> 
                        Systémy Rehau
                    </div>
<div className="flex items-center gap-3 text-sm font-semibold text-slate-700">
<iconify-icon className="text-emerald-500 flex-shrink-0" icon="solar:check-circle-bold"></iconify-icon> 
                        Zalití anhydritem
                    </div>
<div className="flex items-center gap-3 text-sm font-semibold text-slate-700">
<iconify-icon className="text-emerald-500 flex-shrink-0" icon="solar:check-circle-bold"></iconify-icon> 
                        Regulace teploty
                    </div>
</div>
</div>

<div className="group p-8 rounded-[2rem] bg-white border border-slate-100 hover:border-slate-200 hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 hover:-translate-y-1">
<div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
<iconify-icon icon="solar:water-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-3">Voda &amp; Čerpadla</h3>
<p className="text-slate-500 font-medium text-sm leading-relaxed mb-8">Instalace tepelných čerpadel a domovních rozvodů vody. Spolehlivě a čistě.</p>
<div className="space-y-3">
<div className="flex items-center gap-3 text-sm font-semibold text-slate-700">
<iconify-icon className="text-blue-500 flex-shrink-0" icon="solar:check-circle-bold"></iconify-icon> 
                        Tepelná čerpadla
                    </div>
<div className="flex items-center gap-3 text-sm font-semibold text-slate-700">
<iconify-icon className="text-blue-500 flex-shrink-0" icon="solar:check-circle-bold"></iconify-icon> 
                        Domovní vodárny
                    </div>
<div className="flex items-center gap-3 text-sm font-semibold text-slate-700">
<iconify-icon className="text-blue-500 flex-shrink-0" icon="solar:check-circle-bold"></iconify-icon> 
                        Úpravny vody
                    </div>
</div>
</div>

<div className="group p-8 rounded-[2rem] bg-white border border-slate-100 hover:border-slate-200 hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 hover:-translate-y-1">
<div className="w-14 h-14 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center mb-8 group-hover:bg-orange-600 group-hover:text-white transition-colors duration-300">
<iconify-icon icon="solar:bath-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-3">Kotle &amp; Koupelny</h3>
<p className="text-slate-500 font-medium text-sm leading-relaxed mb-8">Výměny plynových kotlů a kompletace koupelen. Důraz na detail a funkčnost.</p>
<div className="space-y-3">
<div className="flex items-center gap-3 text-sm font-semibold text-slate-700">
<iconify-icon className="text-orange-500 flex-shrink-0" icon="solar:check-circle-bold"></iconify-icon> 
                        Výměny kotlů
                    </div>
<div className="flex items-center gap-3 text-sm font-semibold text-slate-700">
<iconify-icon className="text-orange-500 flex-shrink-0" icon="solar:check-circle-bold"></iconify-icon> 
                        Revize plynu
                    </div>
<div className="flex items-center gap-3 text-sm font-semibold text-slate-700">
<iconify-icon className="text-orange-500 flex-shrink-0" icon="solar:check-circle-bold"></iconify-icon> 
                        Kompletace sanity
                    </div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-slate-50/50 border-t border-slate-200/60" id="reference">
<div className="max-w-6xl mx-auto">
<h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-16 text-center">Reference od zákazníků</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white p-8 rounded-[2rem] shadow-sm ring-1 ring-slate-200/60 hover:ring-slate-300 hover:shadow-md transition-all">
<div className="flex text-amber-400 mb-6 gap-1">
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
</div>
<p className="text-slate-600 mb-8 text-sm font-medium leading-relaxed">"S panem Rosákem byla radost spolupracovat. Navrhl nám podlahové topení pro celý dům, vše vysvětlil a realizace proběhla přesně v termínu."</p>
<div className="flex items-center gap-3 pt-6 border-t border-slate-50">
<div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center font-bold text-slate-400 text-xs">MD</div>
<div>
<span className="block font-bold text-slate-900 text-sm">Martin Dvořák</span>
<span className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">Novostavba Velemín</span>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-[2rem] shadow-sm ring-1 ring-slate-200/60 hover:ring-slate-300 hover:shadow-md transition-all">
<div className="flex text-amber-400 mb-6 gap-1">
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
</div>
<p className="text-slate-600 mb-8 text-sm font-medium leading-relaxed">"Volali jsme kvůli havárii vody a následně se domluvili na rekonstrukci koupelny. Oceňuji hlavně to, že co řekl, to platilo. Cena i čas."</p>
<div className="flex items-center gap-3 pt-6 border-t border-slate-50">
<div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center font-bold text-slate-400 text-xs">JK</div>
<div>
<span className="block font-bold text-slate-900 text-sm">Jana Králová</span>
<span className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">Lovosice</span>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-[2rem] shadow-sm ring-1 ring-slate-200/60 hover:ring-slate-300 hover:shadow-md transition-all">
<div className="flex text-amber-400 mb-6 gap-1">
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
</div>
<p className="text-slate-600 mb-8 text-sm font-medium leading-relaxed">"Instalace tepelného čerpadla proběhla hladce. Pan Rosák nám pomohl i s výběrem. Topíme druhou sezónu a vše funguje perfektně."</p>
<div className="flex items-center gap-3 pt-6 border-t border-slate-50">
<div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center font-bold text-slate-400 text-xs">PS</div>
<div>
<span className="block font-bold text-slate-900 text-sm">Petr Svoboda</span>
<span className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">Litoměřice</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-slate-950 relative overflow-hidden" id="kontakt">

<div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none"></div>
<div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>
<div className="max-w-4xl mx-auto text-center relative z-10">
<h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6 text-glow">
                Máte projekt? Pojďme to probrat.
            </h2>
<p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto font-medium">
                Zavolejte mi nebo napište e-mail. Rád se podívám na vaše plány a vymyslíme řešení, které bude fungovat.
            </p>
<div className="bg-white/5 backdrop-blur-xl rounded-[2.5rem] p-2 border border-white/10 max-w-3xl mx-auto shadow-2xl">
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">

<div className="bg-slate-900/50 rounded-[2rem] p-10 flex flex-col items-center justify-center border border-white/5 hover:bg-slate-800/50 hover:border-emerald-500/30 transition-all duration-300 group">
<div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:phone-calling-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="text-slate-400 text-[10px] font-bold mb-2 uppercase tracking-widest">Zavolejte mi</span>
<a className="text-2xl font-bold text-white hover:text-emerald-400 transition-colors" href="tel:+420775654338">
                            775 654 338
                        </a>
<span className="text-slate-500 font-medium text-xs mt-3 bg-slate-800/50 px-3 py-1 rounded-full">Po-Pá 8:00 - 18:00</span>
</div>

<div className="bg-slate-900/50 rounded-[2rem] p-10 flex flex-col items-center justify-center border border-white/5 hover:bg-slate-800/50 hover:border-blue-500/30 transition-all duration-300 group">
<div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:letter-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="text-slate-400 text-[10px] font-bold mb-2 uppercase tracking-widest">Napište mi</span>
<a className="text-2xl font-bold text-white hover:text-blue-400 transition-colors" href="mailto:rosipaul@seznam.cz">
                            rosipaul@seznam.cz
                        </a>
<span className="text-slate-500 font-medium text-xs mt-3 bg-slate-800/50 px-3 py-1 rounded-full">Odepisuji co nejdříve</span>
</div>
</div>
</div>
</div>
</section>

<footer className="py-12 px-6 bg-white border-t border-slate-100">
<div className="max-w-6xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-center gap-8">
<div className="flex flex-col items-center md:items-start gap-2">
<span className="font-bold text-slate-900 text-lg">Pavel Rosák</span>
<span className="text-xs font-medium text-slate-400">Poctivé řemeslo od roku 2010</span>
</div>
<div className="text-xs font-medium text-slate-400 text-center md:text-right">
<p>© 2024 Pavel Rosák. Všechna práva vyhrazena.</p>
</div>
</div>
</div>
</footer>



    </>
  );
}
