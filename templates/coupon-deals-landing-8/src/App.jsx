import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        function copyCode(code, btn) {
            navigator.clipboard.writeText(code).then(() => {
                const toast = document.getElementById('toast');
                const toastText = document.getElementById('toastText');
                toastText.textContent = `"${code}" kopierad till urklipp!`;
                toast.classList.remove('opacity-0', 'translate-y-4', 'pointer-events-none');
                toast.classList.add('opacity-100', 'translate-y-0');
                setTimeout(() => {
                    toast.classList.add('opacity-0', 'translate-y-4', 'pointer-events-none');
                    toast.classList.remove('opacity-100', 'translate-y-0');
                }, 2500);
            });
        }

        function setActiveTab(btn) {
            document.querySelectorAll('.tab-btn').forEach(b => {
                b.classList.remove('bg-neutral-900', 'text-white');
                b.classList.add('text-neutral-500');
            });
            btn.classList.add('bg-neutral-900', 'text-white');
            btn.classList.remove('text-neutral-500');
        }

        function toggleAbout() {
            const extra = document.getElementById('aboutExtra');
            const extra2 = document.getElementById('aboutExtra2');
            const toggle = document.getElementById('aboutToggle');
            const isHidden = extra.classList.contains('hidden');
            extra.classList.toggle('hidden');
            extra2.classList.toggle('hidden');
            toggle.innerHTML = isHidden
                ? 'Visa mindre <iconify-icon icon="solar:alt-arrow-up-linear" width="14" height="14"></iconify-icon>'
                : 'Läs mer <iconify-icon icon="solar:alt-arrow-down-linear" width="14" height="14"></iconify-icon>';
        }

        function toggleFaq(btn) {
            const item = btn.closest('.faq-item');
            const answer = item.querySelector('.faq-answer');
            const icon = item.querySelector('.faq-icon');
            const isHidden = answer.classList.contains('hidden');

            // Close all others
            document.querySelectorAll('.faq-item').forEach(faq => {
                faq.querySelector('.faq-answer').classList.add('hidden');
                faq.querySelector('.faq-icon').style.transform = 'rotate(0deg)';
            });

            if (isHidden) {
                answer.classList.remove('hidden');
                icon.style.transform = 'rotate(180deg)';
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="bg-white border-b border-neutral-200/80 sticky top-0 z-50 backdrop-blur-xl bg-white/80">
<div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
<a className="text-lg font-semibold tracking-tight text-neutral-900" href="#">sparado</a>
<nav className="hidden md:flex items-center gap-6 text-sm text-neutral-500">
<a className="hover:text-neutral-900 transition-colors" href="#">Butiker</a>
<a className="hover:text-neutral-900 transition-colors" href="#">Kategorier</a>
<a className="hover:text-neutral-900 transition-colors" href="#">Populärt</a>
</nav>
<div className="flex items-center gap-3">
<div className="hidden sm:flex items-center gap-2 bg-neutral-100 rounded-lg px-3 py-1.5 text-sm text-neutral-400 w-52">
<iconify-icon height="16" icon="solar:magnifer-linear" width="16"></iconify-icon>
<span>Sök butik eller kod...</span>
</div>
<button className="md:hidden text-neutral-600">
<iconify-icon height="22" icon="solar:hamburger-menu-linear" width="22"></iconify-icon>
</button>
</div>
</div>
</header>

<div className="max-w-6xl mx-auto px-4 sm:px-6 py-3">
<nav className="flex items-center gap-1.5 text-xs text-neutral-400">
<a className="hover:text-neutral-600 transition-colors" href="#">Hem</a>
<iconify-icon height="12" icon="solar:alt-arrow-right-linear" width="12"></iconify-icon>
<a className="hover:text-neutral-600 transition-colors" href="#">Butiker</a>
<iconify-icon height="12" icon="solar:alt-arrow-right-linear" width="12"></iconify-icon>
<a className="hover:text-neutral-600 transition-colors" href="#">Mode</a>
<iconify-icon height="12" icon="solar:alt-arrow-right-linear" width="12"></iconify-icon>
<span className="text-neutral-600">Zalando</span>
</nav>
</div>
<main className="max-w-6xl mx-auto px-4 sm:px-6 pb-20">

<div className="bg-white rounded-2xl border border-neutral-200/80 p-6 sm:p-8 mb-6">
<div className="flex flex-col sm:flex-row gap-6 items-start">

<div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-orange-500/20">
<span className="text-white font-semibold text-2xl sm:text-3xl tracking-tight">Z</span>
</div>
<div className="flex-1 min-w-0">
<div className="flex flex-wrap items-center gap-3 mb-2">
<h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">Zalando</h1>
<span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-700 text-xs font-medium px-2.5 py-1 rounded-full">
<iconify-icon height="14" icon="solar:verified-check-bold" width="14"></iconify-icon>
                            Verifierad
                        </span>
</div>
<p className="text-sm text-neutral-500 mb-4 max-w-2xl leading-relaxed">Europas ledande onlineplattform för mode och livsstil. Hitta de bästa rabattkoderna och erbjudandena för Zalando – uppdaterade dagligen.</p>
<div className="flex flex-wrap items-center gap-4 text-sm">
<div className="flex items-center gap-1.5">
<div className="flex items-center gap-0.5 text-amber-400">
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-line-duotone" style={{color: '#d4d4d4'}} width="16"></iconify-icon>
</div>
<span className="text-neutral-600 font-medium">4.2</span>
<span className="text-neutral-400">(1 284 omdömen)</span>
</div>
<a className="flex items-center gap-1 text-neutral-500 hover:text-neutral-700 transition-colors" href="#">
<iconify-icon height="15" icon="solar:link-round-linear" width="15"></iconify-icon>
                            zalando.se
                        </a>
</div>
</div>
<a className="hidden lg:inline-flex items-center gap-2 bg-neutral-900 text-white text-sm font-medium px-5 py-2.5 rounded-xl hover:bg-neutral-800 transition-colors flex-shrink-0" href="#">
                    Besök butiken
                    <iconify-icon height="16" icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</a>
</div>

<div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 pt-6 border-t border-neutral-100">
<div>
<div className="text-2xl font-semibold tracking-tight text-neutral-900">23</div>
<div className="text-xs text-neutral-400 mt-0.5">Aktiva rabattkoder</div>
</div>
<div>
<div className="text-2xl font-semibold tracking-tight text-neutral-900">25%</div>
<div className="text-xs text-neutral-400 mt-0.5">Bästa rabatten</div>
</div>
<div>
<div className="text-2xl font-semibold tracking-tight text-neutral-900">87%</div>
<div className="text-xs text-neutral-400 mt-0.5">Framgångsfrekvens</div>
</div>
<div>
<div className="text-2xl font-semibold tracking-tight text-emerald-600">Idag</div>
<div className="text-xs text-neutral-400 mt-0.5">Senast verifierad</div>
</div>
</div>
</div>

<div className="bg-gradient-to-r from-violet-600 to-indigo-600 rounded-2xl p-6 sm:p-8 mb-6 text-white relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.1),transparent)]"></div>
<div className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
<div>
<div className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-sm text-xs font-medium px-3 py-1 rounded-full mb-3">
<iconify-icon height="14" icon="solar:fire-bold" width="14"></iconify-icon>
                        Bästa erbjudandet just nu
                    </div>
<h2 className="text-xl sm:text-2xl font-semibold tracking-tight mb-1.5">25% rabatt på hela sortimentet</h2>
<p className="text-white/70 text-sm">Gäller för nya kunder. Minsta order 499 kr. Giltig t.o.m. 30 juni.</p>
</div>
<button className="flex-shrink-0 bg-white text-neutral-900 text-sm font-semibold px-6 py-3 rounded-xl hover:bg-neutral-100 transition-colors flex items-center gap-2 group" onclick="copyCode('ZALNEW25', this)">
<span className="font-mono tracking-wide">ZALNEW25</span>
<iconify-icon className="text-neutral-400 group-hover:text-neutral-600 transition-colors" height="16" icon="solar:copy-linear" width="16"></iconify-icon>
</button>
</div>
</div>
<div className="flex flex-col lg:flex-row gap-6">

<div className="flex-1 min-w-0">

<div className="flex items-center gap-1 bg-white border border-neutral-200/80 rounded-xl p-1 mb-6" id="filterTabs">
<button className="tab-btn active-tab px-4 py-2 text-sm font-medium rounded-lg transition-all bg-neutral-900 text-white" onclick="setActiveTab(this)">
                        Alla (23)
                    </button>
<button className="tab-btn px-4 py-2 text-sm font-medium rounded-lg transition-all text-neutral-500 hover:text-neutral-700" onclick="setActiveTab(this)">
                        Koder (15)
                    </button>
<button className="tab-btn px-4 py-2 text-sm font-medium rounded-lg transition-all text-neutral-500 hover:text-neutral-700" onclick="setActiveTab(this)">
                        Erbjudanden (8)
                    </button>
</div>

<div className="space-y-3" id="couponList">

<div className="bg-white rounded-xl border border-neutral-200/80 hover:border-neutral-300 transition-all group">
<div className="p-5 flex flex-col sm:flex-row gap-4">
<div className="w-16 h-16 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center flex-shrink-0">
<span className="text-orange-600 font-semibold text-lg">25%</span>
</div>
<div className="flex-1 min-w-0">
<div className="flex flex-wrap items-center gap-2 mb-1.5">
<h3 className="text-sm font-semibold text-neutral-900">25% rabatt på hela sortimentet</h3>
<span className="text-xs bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full font-medium">Verifierad</span>
</div>
<p className="text-xs text-neutral-400 mb-3 leading-relaxed">Gäller nya kunder. Minsta orderbelopp 499 kr. Kan ej kombineras med andra erbjudanden.</p>
<div className="flex flex-wrap items-center gap-3 text-xs text-neutral-400">
<span className="flex items-center gap-1">
<iconify-icon height="13" icon="solar:clock-circle-linear" width="13"></iconify-icon>
                                        Giltig t.o.m. 30 jun
                                    </span>
<span className="flex items-center gap-1">
<iconify-icon height="13" icon="solar:users-group-rounded-linear" width="13"></iconify-icon>
                                        Använd 842 gånger
                                    </span>
<span className="flex items-center gap-1 text-emerald-600">
<iconify-icon height="13" icon="solar:check-circle-linear" width="13"></iconify-icon>
                                        92% lyckas
                                    </span>
</div>
</div>
<div className="flex-shrink-0 self-center">
<button className="relative w-36 h-11 rounded-xl border-2 border-dashed border-neutral-200 hover:border-neutral-400 transition-all flex items-center justify-center gap-2 text-sm font-medium text-neutral-700 group-hover:border-neutral-300 bg-neutral-50/50" onclick="copyCode('ZALNEW25', this)">
<span className="font-mono text-xs tracking-wider">ZALNEW25</span>
<iconify-icon className="text-neutral-400" height="14" icon="solar:copy-linear" width="14"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-neutral-200/80 hover:border-neutral-300 transition-all group">
<div className="p-5 flex flex-col sm:flex-row gap-4">
<div className="w-16 h-16 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center flex-shrink-0">
<span className="text-blue-600 font-semibold text-lg">15%</span>
</div>
<div className="flex-1 min-w-0">
<div className="flex flex-wrap items-center gap-2 mb-1.5">
<h3 className="text-sm font-semibold text-neutral-900">15% rabatt på skor &amp; accessoarer</h3>
<span className="text-xs bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full font-medium">Verifierad</span>
</div>
<p className="text-xs text-neutral-400 mb-3 leading-relaxed">Gäller hela skosortimentet samt väskor och accessoarer. Ingen minimigräns.</p>
<div className="flex flex-wrap items-center gap-3 text-xs text-neutral-400">
<span className="flex items-center gap-1">
<iconify-icon height="13" icon="solar:clock-circle-linear" width="13"></iconify-icon>
                                        Giltig t.o.m. 25 jun
                                    </span>
<span className="flex items-center gap-1">
<iconify-icon height="13" icon="solar:users-group-rounded-linear" width="13"></iconify-icon>
                                        Använd 523 gånger
                                    </span>
<span className="flex items-center gap-1 text-emerald-600">
<iconify-icon height="13" icon="solar:check-circle-linear" width="13"></iconify-icon>
                                        88% lyckas
                                    </span>
</div>
</div>
<div className="flex-shrink-0 self-center">
<button className="relative w-36 h-11 rounded-xl border-2 border-dashed border-neutral-200 hover:border-neutral-400 transition-all flex items-center justify-center gap-2 text-sm font-medium text-neutral-700 group-hover:border-neutral-300 bg-neutral-50/50" onclick="copyCode('ZALSKO15', this)">
<span className="font-mono text-xs tracking-wider">ZALSKO15</span>
<iconify-icon className="text-neutral-400" height="14" icon="solar:copy-linear" width="14"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-neutral-200/80 hover:border-neutral-300 transition-all group">
<div className="p-5 flex flex-col sm:flex-row gap-4">
<div className="w-16 h-16 rounded-xl bg-rose-50 border border-rose-100 flex items-center justify-center flex-shrink-0">
<span className="text-rose-600 font-semibold text-lg">50%</span>
</div>
<div className="flex-1 min-w-0">
<div className="flex flex-wrap items-center gap-2 mb-1.5">
<h3 className="text-sm font-semibold text-neutral-900">Upp till 50% på outlet-sortimentet</h3>
<span className="text-xs bg-amber-50 text-amber-700 px-2 py-0.5 rounded-full font-medium">Erbjudande</span>
</div>
<p className="text-xs text-neutral-400 mb-3 leading-relaxed">Ingen kod behövs. Rabatten aktiveras automatiskt. Gäller utvalda produkter i Zalandos outlet.</p>
<div className="flex flex-wrap items-center gap-3 text-xs text-neutral-400">
<span className="flex items-center gap-1">
<iconify-icon height="13" icon="solar:clock-circle-linear" width="13"></iconify-icon>
                                        Löpande erbjudande
                                    </span>
<span className="flex items-center gap-1">
<iconify-icon height="13" icon="solar:users-group-rounded-linear" width="13"></iconify-icon>
                                        Använd 2 104 gånger
                                    </span>
</div>
</div>
<div className="flex-shrink-0 self-center">
<a className="w-36 h-11 rounded-xl bg-neutral-900 hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2 text-sm font-medium text-white" href="#">
                                    Visa deal
                                    <iconify-icon height="14" icon="solar:arrow-right-linear" width="14"></iconify-icon>
</a>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-neutral-200/80 hover:border-neutral-300 transition-all group">
<div className="p-5 flex flex-col sm:flex-row gap-4">
<div className="w-16 h-16 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center flex-shrink-0">
<span className="text-emerald-600 font-semibold text-sm">Gratis</span>
</div>
<div className="flex-1 min-w-0">
<div className="flex flex-wrap items-center gap-2 mb-1.5">
<h3 className="text-sm font-semibold text-neutral-900">Fri frakt på alla ordrar över 249 kr</h3>
<span className="text-xs bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full font-medium">Verifierad</span>
</div>
<p className="text-xs text-neutral-400 mb-3 leading-relaxed">Standardfrakt gratis vid köp över 249 kr. Gäller alla kunder.</p>
<div className="flex flex-wrap items-center gap-3 text-xs text-neutral-400">
<span className="flex items-center gap-1">
<iconify-icon height="13" icon="solar:clock-circle-linear" width="13"></iconify-icon>
                                        Löpande erbjudande
                                    </span>
<span className="flex items-center gap-1">
<iconify-icon height="13" icon="solar:users-group-rounded-linear" width="13"></iconify-icon>
                                        Använd 3 412 gånger
                                    </span>
<span className="flex items-center gap-1 text-emerald-600">
<iconify-icon height="13" icon="solar:check-circle-linear" width="13"></iconify-icon>
                                        98% lyckas
                                    </span>
</div>
</div>
<div className="flex-shrink-0 self-center">
<a className="w-36 h-11 rounded-xl bg-neutral-900 hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2 text-sm font-medium text-white" href="#">
                                    Visa deal
                                    <iconify-icon height="14" icon="solar:arrow-right-linear" width="14"></iconify-icon>
</a>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-neutral-200/80 hover:border-neutral-300 transition-all group">
<div className="p-5 flex flex-col sm:flex-row gap-4">
<div className="w-16 h-16 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center flex-shrink-0">
<span className="text-purple-600 font-semibold text-lg">10%</span>
</div>
<div className="flex-1 min-w-0">
<div className="flex flex-wrap items-center gap-2 mb-1.5">
<h3 className="text-sm font-semibold text-neutral-900">10% extra rabatt via Zalando-appen</h3>
<span className="text-xs bg-neutral-100 text-neutral-500 px-2 py-0.5 rounded-full font-medium">Ej verifierad</span>
</div>
<p className="text-xs text-neutral-400 mb-3 leading-relaxed">Ladda ner Zalandos app och få 10% rabatt på din första order via appen.</p>
<div className="flex flex-wrap items-center gap-3 text-xs text-neutral-400">
<span className="flex items-center gap-1">
<iconify-icon height="13" icon="solar:clock-circle-linear" width="13"></iconify-icon>
                                        Giltig t.o.m. 31 jul
                                    </span>
<span className="flex items-center gap-1">
<iconify-icon height="13" icon="solar:users-group-rounded-linear" width="13"></iconify-icon>
                                        Använd 156 gånger
                                    </span>
<span className="flex items-center gap-1 text-amber-500">
<iconify-icon height="13" icon="solar:check-circle-linear" width="13"></iconify-icon>
                                        64% lyckas
                                    </span>
</div>
</div>
<div className="flex-shrink-0 self-center">
<button className="relative w-36 h-11 rounded-xl border-2 border-dashed border-neutral-200 hover:border-neutral-400 transition-all flex items-center justify-center gap-2 text-sm font-medium text-neutral-700 group-hover:border-neutral-300 bg-neutral-50/50" onclick="copyCode('ZALAPP10', this)">
<span className="font-mono text-xs tracking-wider">ZALAPP10</span>
<iconify-icon className="text-neutral-400" height="14" icon="solar:copy-linear" width="14"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-neutral-200/80 hover:border-neutral-300 transition-all group">
<div className="p-5 flex flex-col sm:flex-row gap-4">
<div className="w-16 h-16 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center flex-shrink-0">
<span className="text-teal-600 font-semibold text-lg">20%</span>
</div>
<div className="flex-1 min-w-0">
<div className="flex flex-wrap items-center gap-2 mb-1.5">
<h3 className="text-sm font-semibold text-neutral-900">20% studentrabatt med Student Beans</h3>
<span className="text-xs bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full font-medium">Verifierad</span>
</div>
<p className="text-xs text-neutral-400 mb-3 leading-relaxed">Verifiera din studentstatus via Student Beans och få 20% på ditt köp.</p>
<div className="flex flex-wrap items-center gap-3 text-xs text-neutral-400">
<span className="flex items-center gap-1">
<iconify-icon height="13" icon="solar:clock-circle-linear" width="13"></iconify-icon>
                                        Löpande erbjudande
                                    </span>
<span className="flex items-center gap-1">
<iconify-icon height="13" icon="solar:users-group-rounded-linear" width="13"></iconify-icon>
                                        Använd 1 893 gånger
                                    </span>
<span className="flex items-center gap-1 text-emerald-600">
<iconify-icon height="13" icon="solar:check-circle-linear" width="13"></iconify-icon>
                                        95% lyckas
                                    </span>
</div>
</div>
<div className="flex-shrink-0 self-center">
<a className="w-36 h-11 rounded-xl bg-neutral-900 hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2 text-sm font-medium text-white" href="#">
                                    Visa deal
                                    <iconify-icon height="14" icon="solar:arrow-right-linear" width="14"></iconify-icon>
</a>
</div>
</div>
</div>
</div>

<div className="mt-6 text-center">
<button className="inline-flex items-center gap-2 text-sm font-medium text-neutral-500 hover:text-neutral-700 transition-colors px-6 py-3 rounded-xl border border-neutral-200 hover:border-neutral-300 bg-white">
                        Visa fler rabattkoder
                        <iconify-icon height="16" icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</button>
</div>

<div className="mt-10">
<h2 className="text-lg font-semibold tracking-tight mb-4">Om Zalando</h2>
<div className="bg-white rounded-xl border border-neutral-200/80 p-6">
<div className="text-sm text-neutral-500 leading-relaxed space-y-3" id="aboutText">
<p>Zalando grundades 2008 i Berlin och har sedan dess vuxit till att bli Europas ledande onlineplattform för mode och livsstil. Med över 50 miljoner aktiva kunder i 25 marknader erbjuder Zalando ett omfattande sortiment av kläder, skor, accessoarer och skönhetsprodukter från över 7 000 varumärken.</p>
<p className="hidden" id="aboutExtra">På Zalando hittar du allt från exklusiva designermärken till prisvärda vardagsmärken. Butiken erbjuder gratis leverans och returer inom 100 dagar, vilket gör det enkelt att shoppa online. Zalando har också en växande hållbarhetsavdelning med produkter som uppfyller strikta miljö- och sociala standarder.</p>
<p className="hidden" id="aboutExtra2">Vi uppdaterar våra Zalando-rabattkoder dagligen för att säkerställa att du alltid har tillgång till de bästa erbjudandena. Tips: Kombinera rabattkoder med Zalandos outlet-sektion för maximal besparing!</p>
</div>
<button className="mt-3 text-sm font-medium text-neutral-900 hover:text-neutral-600 transition-colors flex items-center gap-1" id="aboutToggle" onclick="toggleAbout()">
                            Läs mer
                            <iconify-icon height="14" icon="solar:alt-arrow-down-linear" width="14"></iconify-icon>
</button>
</div>
</div>

<div className="mt-8">
<h2 className="text-lg font-semibold tracking-tight mb-4">Spartips för Zalando</h2>
<div className="grid gap-3 sm:grid-cols-2">
<div className="bg-white rounded-xl border border-neutral-200/80 p-5">
<div className="w-9 h-9 rounded-lg bg-violet-50 flex items-center justify-center mb-3">
<iconify-icon height="18" icon="solar:bell-linear" style={{color: '#7c3aed'}} width="18"></iconify-icon>
</div>
<h3 className="text-sm font-semibold mb-1">Bevaka prissänkningar</h3>
<p className="text-xs text-neutral-400 leading-relaxed">Lägg produkter i önskelistan så får du notiser när priset sjunker.</p>
</div>
<div className="bg-white rounded-xl border border-neutral-200/80 p-5">
<div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center mb-3">
<iconify-icon height="18" icon="solar:smartphone-linear" style={{color: '#2563eb'}} width="18"></iconify-icon>
</div>
<h3 className="text-sm font-semibold mb-1">Handla via appen</h3>
<p className="text-xs text-neutral-400 leading-relaxed">App-exklusiva erbjudanden dyker ofta upp med extra rabatter.</p>
</div>
<div className="bg-white rounded-xl border border-neutral-200/80 p-5">
<div className="w-9 h-9 rounded-lg bg-amber-50 flex items-center justify-center mb-3">
<iconify-icon height="18" icon="solar:tag-linear" style={{color: '#d97706'}} width="18"></iconify-icon>
</div>
<h3 className="text-sm font-semibold mb-1">Kolla Outlet</h3>
<p className="text-xs text-neutral-400 leading-relaxed">Zalandos outlet har upp till 70% rabatt på tusentals produkter.</p>
</div>
<div className="bg-white rounded-xl border border-neutral-200/80 p-5">
<div className="w-9 h-9 rounded-lg bg-emerald-50 flex items-center justify-center mb-3">
<iconify-icon height="18" icon="solar:letter-linear" style={{color: '#059669'}} width="18"></iconify-icon>
</div>
<h3 className="text-sm font-semibold mb-1">Nyhetsbrev = rabatt</h3>
<p className="text-xs text-neutral-400 leading-relaxed">Registrera dig för nyhetsbrevet och få ofta en välkomstrabatt.</p>
</div>
</div>
</div>

<div className="mt-10">
<h2 className="text-lg font-semibold tracking-tight mb-4">Vanliga frågor</h2>
<div className="bg-white rounded-xl border border-neutral-200/80 divide-y divide-neutral-100">
<div className="faq-item">
<button className="w-full flex items-center justify-between p-5 text-left" onclick="toggleFaq(this)">
<span className="text-sm font-medium text-neutral-900">Hur använder jag en rabattkod på Zalando?</span>
<iconify-icon className="text-neutral-400 transition-transform faq-icon" height="16" icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</button>
<div className="faq-answer hidden px-5 pb-5 -mt-2">
<p className="text-xs text-neutral-400 leading-relaxed">Lägg varor i varukorgen och gå till kassan. I betalningssteget finns ett fält märkt "Rabattkod" eller "Kampanjkod". Klistra in din kod och klicka på "Tillämpa". Rabatten dras automatiskt från totalbeloppet.</p>
</div>
</div>
<div className="faq-item">
<button className="w-full flex items-center justify-between p-5 text-left" onclick="toggleFaq(this)">
<span className="text-sm font-medium text-neutral-900">Kan jag kombinera flera rabattkoder?</span>
<iconify-icon className="text-neutral-400 transition-transform faq-icon" height="16" icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</button>
<div className="faq-answer hidden px-5 pb-5 -mt-2">
<p className="text-xs text-neutral-400 leading-relaxed">Tyvärr tillåter Zalando i regel bara en rabattkod per order. Däremot kan du ofta kombinera en kod med pågående kampanjer och outlet-priser.</p>
</div>
</div>
<div className="faq-item">
<button className="w-full flex items-center justify-between p-5 text-left" onclick="toggleFaq(this)">
<span className="text-sm font-medium text-neutral-900">Varför fungerar inte min rabattkod?</span>
<iconify-icon className="text-neutral-400 transition-transform faq-icon" height="16" icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</button>
<div className="faq-answer hidden px-5 pb-5 -mt-2">
<p className="text-xs text-neutral-400 leading-relaxed">Kontrollera att koden inte har gått ut, att du uppfyller eventuella minimibelopp, och att koden gäller för de produkter du har i varukorgen. Vissa koder gäller bara nya kunder.</p>
</div>
</div>
<div className="faq-item">
<button className="w-full flex items-center justify-between p-5 text-left" onclick="toggleFaq(this)">
<span className="text-sm font-medium text-neutral-900">Hur ofta publiceras nya rabattkoder?</span>
<iconify-icon className="text-neutral-400 transition-transform faq-icon" height="16" icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</button>
<div className="faq-answer hidden px-5 pb-5 -mt-2">
<p className="text-xs text-neutral-400 leading-relaxed">Vi uppdaterar Zalandos rabattkoder dagligen. De bästa erbjudandena brukar komma i samband med stora kampanjer som Black Friday, sommarrea och mellandagsrea.</p>
</div>
</div>
</div>
</div>
</div>

<div className="w-full lg:w-80 flex-shrink-0 space-y-6">

<div className="bg-white rounded-xl border border-neutral-200/80 p-6">
<div className="w-10 h-10 rounded-xl bg-violet-100 flex items-center justify-center mb-4">
<iconify-icon height="20" icon="solar:bell-bing-linear" style={{color: '#7c3aed'}} width="20"></iconify-icon>
</div>
<h3 className="text-sm font-semibold mb-1">Missa inga rabatter</h3>
<p className="text-xs text-neutral-400 mb-4 leading-relaxed">Få nya rabattkoder för Zalando direkt i din inkorg.</p>
<div className="space-y-2">
<input className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-neutral-200 focus:outline-none focus:border-neutral-400 focus:ring-2 focus:ring-neutral-100 transition-all placeholder:text-neutral-300" placeholder="Din e-postadress" type="email"/>
<button className="w-full bg-neutral-900 text-white text-sm font-medium px-4 py-2.5 rounded-lg hover:bg-neutral-800 transition-colors">
                            Prenumerera
                        </button>
</div>
<p className="text-xs text-neutral-300 mt-3">Ingen spam. Avsluta när du vill.</p>
</div>

<div className="bg-white rounded-xl border border-neutral-200/80 p-6">
<h3 className="text-sm font-semibold mb-4">Liknande butiker</h3>
<div className="space-y-3">
<a className="flex items-center gap-3 group" href="#">
<div className="w-10 h-10 rounded-lg bg-neutral-900 flex items-center justify-center flex-shrink-0">
<span className="text-white text-xs font-semibold">H&amp;M</span>
</div>
<div className="flex-1 min-w-0">
<div className="text-sm font-medium text-neutral-900 group-hover:text-neutral-600 transition-colors">H&amp;M</div>
<div className="text-xs text-neutral-400">18 rabattkoder</div>
</div>
<iconify-icon className="text-neutral-300 group-hover:text-neutral-500 transition-colors" height="16" icon="solar:alt-arrow-right-linear" width="16"></iconify-icon>
</a>
<a className="flex items-center gap-3 group" href="#">
<div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center flex-shrink-0">
<span className="text-white text-xs font-semibold tracking-tight">ASOS</span>
</div>
<div className="flex-1 min-w-0">
<div className="text-sm font-medium text-neutral-900 group-hover:text-neutral-600 transition-colors">ASOS</div>
<div className="text-xs text-neutral-400">12 rabattkoder</div>
</div>
<iconify-icon className="text-neutral-300 group-hover:text-neutral-500 transition-colors" height="16" icon="solar:alt-arrow-right-linear" width="16"></iconify-icon>
</a>
<a className="flex items-center gap-3 group" href="#">
<div className="w-10 h-10 rounded-lg bg-rose-500 flex items-center justify-center flex-shrink-0">
<span className="text-white text-xs font-semibold tracking-tight">NA-KD</span>
</div>
<div className="flex-1 min-w-0">
<div className="text-sm font-medium text-neutral-900 group-hover:text-neutral-600 transition-colors">NA-KD</div>
<div className="text-xs text-neutral-400">9 rabattkoder</div>
</div>
<iconify-icon className="text-neutral-300 group-hover:text-neutral-500 transition-colors" height="16" icon="solar:alt-arrow-right-linear" width="16"></iconify-icon>
</a>
<a className="flex items-center gap-3 group" href="#">
<div className="w-10 h-10 rounded-lg bg-emerald-600 flex items-center justify-center flex-shrink-0">
<span className="text-white text-xs font-semibold tracking-tight">Boozt</span>
</div>
<div className="flex-1 min-w-0">
<div className="text-sm font-medium text-neutral-900 group-hover:text-neutral-600 transition-colors">Boozt</div>
<div className="text-xs text-neutral-400">14 rabattkoder</div>
</div>
<iconify-icon className="text-neutral-300 group-hover:text-neutral-500 transition-colors" height="16" icon="solar:alt-arrow-right-linear" width="16"></iconify-icon>
</a>
<a className="flex items-center gap-3 group" href="#">
<div className="w-10 h-10 rounded-lg bg-amber-500 flex items-center justify-center flex-shrink-0">
<span className="text-white text-xs font-semibold tracking-tight">Ellos</span>
</div>
<div className="flex-1 min-w-0">
<div className="text-sm font-medium text-neutral-900 group-hover:text-neutral-600 transition-colors">Ellos</div>
<div className="text-xs text-neutral-400">7 rabattkoder</div>
</div>
<iconify-icon className="text-neutral-300 group-hover:text-neutral-500 transition-colors" height="16" icon="solar:alt-arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
<a className="mt-4 flex items-center justify-center gap-1 text-xs font-medium text-neutral-500 hover:text-neutral-700 transition-colors pt-4 border-t border-neutral-100" href="#">
                        Visa alla modebutiker
                        <iconify-icon height="12" icon="solar:arrow-right-linear" width="12"></iconify-icon>
</a>
</div>

<div className="bg-white rounded-xl border border-neutral-200/80 p-6">
<h3 className="text-sm font-semibold mb-4">Populära kategorier</h3>
<div className="flex flex-wrap gap-2">
<a className="text-xs bg-neutral-100 hover:bg-neutral-200 text-neutral-600 px-3 py-1.5 rounded-lg transition-colors" href="#">Mode</a>
<a className="text-xs bg-neutral-100 hover:bg-neutral-200 text-neutral-600 px-3 py-1.5 rounded-lg transition-colors" href="#">Elektronik</a>
<a className="text-xs bg-neutral-100 hover:bg-neutral-200 text-neutral-600 px-3 py-1.5 rounded-lg transition-colors" href="#">Skönhet</a>
<a className="text-xs bg-neutral-100 hover:bg-neutral-200 text-neutral-600 px-3 py-1.5 rounded-lg transition-colors" href="#">Sport</a>
<a className="text-xs bg-neutral-100 hover:bg-neutral-200 text-neutral-600 px-3 py-1.5 rounded-lg transition-colors" href="#">Hem &amp; Trädgård</a>
<a className="text-xs bg-neutral-100 hover:bg-neutral-200 text-neutral-600 px-3 py-1.5 rounded-lg transition-colors" href="#">Mat &amp; Dryck</a>
<a className="text-xs bg-neutral-100 hover:bg-neutral-200 text-neutral-600 px-3 py-1.5 rounded-lg transition-colors" href="#">Resor</a>
<a className="text-xs bg-neutral-100 hover:bg-neutral-200 text-neutral-600 px-3 py-1.5 rounded-lg transition-colors" href="#">Barn</a>
</div>
</div>

<div className="bg-white rounded-xl border border-neutral-200/80 p-6">
<h3 className="text-sm font-semibold mb-4">Senaste aktivitet</h3>
<div className="space-y-4">
<div className="flex items-start gap-3">
<div className="w-2 h-2 rounded-full bg-emerald-400 mt-1.5 flex-shrink-0"></div>
<div>
<p className="text-xs text-neutral-600"><span className="font-medium">ZALNEW25</span> användes framgångsrikt</p>
<p className="text-xs text-neutral-300 mt-0.5">3 min sedan</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="w-2 h-2 rounded-full bg-emerald-400 mt-1.5 flex-shrink-0"></div>
<div>
<p className="text-xs text-neutral-600"><span className="font-medium">ZALSKO15</span> verifierad</p>
<p className="text-xs text-neutral-300 mt-0.5">12 min sedan</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="w-2 h-2 rounded-full bg-blue-400 mt-1.5 flex-shrink-0"></div>
<div>
<p className="text-xs text-neutral-600">Ny kod tillagd: <span className="font-medium">ZALAPP10</span></p>
<p className="text-xs text-neutral-300 mt-0.5">1 timme sedan</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="w-2 h-2 rounded-full bg-red-400 mt-1.5 flex-shrink-0"></div>
<div>
<p className="text-xs text-neutral-600"><span className="font-medium">ZALVIP30</span> utgången – borttagen</p>
<p className="text-xs text-neutral-300 mt-0.5">3 timmar sedan</p>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

<footer className="border-t border-neutral-200/80 bg-white mt-10">
<div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
<div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
<div>
<span className="text-base font-semibold tracking-tight text-neutral-900">sparado</span>
<p className="text-xs text-neutral-400 mt-2 leading-relaxed">Sveriges smartaste sajt för rabattkoder och erbjudanden.</p>
</div>
<div>
<h4 className="text-xs font-semibold text-neutral-900 uppercase tracking-wider mb-3">Utforska</h4>
<div className="space-y-2">
<a className="block text-xs text-neutral-400 hover:text-neutral-600 transition-colors" href="#">Alla butiker</a>
<a className="block text-xs text-neutral-400 hover:text-neutral-600 transition-colors" href="#">Kategorier</a>
<a className="block text-xs text-neutral-400 hover:text-neutral-600 transition-colors" href="#">Populära koder</a>
<a className="block text-xs text-neutral-400 hover:text-neutral-600 transition-colors" href="#">Blogg</a>
</div>
</div>
<div>
<h4 className="text-xs font-semibold text-neutral-900 uppercase tracking-wider mb-3">Företag</h4>
<div className="space-y-2">
<a className="block text-xs text-neutral-400 hover:text-neutral-600 transition-colors" href="#">Om oss</a>
<a className="block text-xs text-neutral-400 hover:text-neutral-600 transition-colors" href="#">Kontakt</a>
<a className="block text-xs text-neutral-400 hover:text-neutral-600 transition-colors" href="#">Annonsera</a>
</div>
</div>
<div>
<h4 className="text-xs font-semibold text-neutral-900 uppercase tracking-wider mb-3">Juridik</h4>
<div className="space-y-2">
<a className="block text-xs text-neutral-400 hover:text-neutral-600 transition-colors" href="#">Integritetspolicy</a>
<a className="block text-xs text-neutral-400 hover:text-neutral-600 transition-colors" href="#">Villkor</a>
<a className="block text-xs text-neutral-400 hover:text-neutral-600 transition-colors" href="#">Cookies</a>
</div>
</div>
</div>
<div className="mt-8 pt-6 border-t border-neutral-100 text-xs text-neutral-300 text-center">
                © 2025 Sparado. Alla rättigheter förbehållna.
            </div>
</div>
</footer>

<div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-neutral-900 text-white text-sm font-medium px-5 py-3 rounded-xl shadow-2xl flex items-center gap-2 transition-all duration-300 opacity-0 translate-y-4 pointer-events-none" id="toast">
<iconify-icon height="18" icon="solar:check-circle-bold" style={{color: '#34d399'}} width="18"></iconify-icon>
<span id="toastText">Kod kopierad!</span>
</div>


    </>
  );
}
