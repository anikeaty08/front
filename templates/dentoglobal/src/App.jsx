import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        const menuBtn = document.getElementById('menu-toggle');
        const mobileMenu = document.getElementById('mobile-menu');
        const closeBtn = document.getElementById('menu-close');
        const links = document.querySelectorAll('.mobile-link');

        function toggleMenu() {
            const isClosed = mobileMenu.classList.contains('translate-x-full');
            if (isClosed) {
                mobileMenu.classList.remove('translate-x-full');
            } else {
                mobileMenu.classList.add('translate-x-full');
            }
        }

        menuBtn.addEventListener('click', toggleMenu);
        closeBtn.addEventListener('click', toggleMenu);

        // Close menu when a link is clicked
        links.forEach(link => {
            link.addEventListener('click', toggleMenu);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed w-full z-50 top-0 left-0 border-b border-[#0F4C5C]/5 bg-[#FAFAF8]/95 backdrop-blur-md transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center relative z-50">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 rounded-full bg-[#0F4C5C] text-white flex items-center justify-center">
<iconify-icon icon="solar:heart-pulse-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<span className="uppercase text-lg font-semibold text-[#0F4C5C] tracking-widest font-['Cormorant_Garamond']">DENTOGLOBAL</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#2B2B2B]/80">
<a className="hover:text-[#0F4C5C] transition-colors" href="#kultur">Kultur</a>
<a className="hover:text-[#0F4C5C] transition-colors" href="#vorteile">Vorteile</a>
<a className="hover:text-[#0F4C5C] transition-colors" href="#stimmen">Teamstimmen</a>
</div>
<a className="hidden md:flex items-center gap-2 bg-[#0F4C5C] text-white px-5 py-2.5 rounded-full text-xs font-medium tracking-wide hover:bg-[#0F4C5C]/90 transition-all hover:shadow-lg hover:shadow-[#0F4C5C]/20" href="#bewerben">
<span className="">Jetzt Bewerben</span>
<iconify-icon className="" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>

<button className="md:hidden text-[#0F4C5C] p-2 hover:bg-[#0F4C5C]/5 rounded-full transition-colors focus:outline-none" id="menu-toggle">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>

<div className="fixed inset-0 bg-white z-40 transform translate-x-full transition-transform duration-300 ease-in-out md:hidden flex flex-col pt-28 px-6 pb-6 shadow-2xl" id="mobile-menu">
<button className="absolute top-6 right-6 text-[#0F4C5C] p-2 hover:bg-[#0F4C5C]/5 rounded-full transition-colors" id="menu-close">
<iconify-icon icon="solar:close-circle-linear" width="32"></iconify-icon>
</button>
<div className="flex flex-col gap-6 text-xl font-['Cormorant_Garamond'] font-medium text-[#0F4C5C]">
<a className="mobile-link py-3 border-b border-[#0F4C5C]/10 flex justify-between items-center group" href="#kultur">
                    Über uns
                    <iconify-icon className="opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 duration-300" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="mobile-link py-3 border-b border-[#0F4C5C]/10 flex justify-between items-center group" href="#vorteile">
                    Ihre Vorteile
                    <iconify-icon className="opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 duration-300" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="mobile-link py-3 border-b border-[#0F4C5C]/10 flex justify-between items-center group" href="#stimmen">
                    Team Erfahrungen
                    <iconify-icon className="opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 duration-300" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="mt-auto mb-8">
<a className="mobile-link w-full bg-[#0F4C5C] text-white py-4 rounded-xl flex items-center justify-center gap-2 text-sm font-sans font-medium tracking-wide shadow-lg shadow-[#0F4C5C]/20" href="#bewerben">
<span>Jetzt Bewerben</span>
<iconify-icon icon="solar:file-send-linear" width="18"></iconify-icon>
</a>
<div className="mt-6 flex justify-center gap-6 text-[#0F4C5C]/60">
<a className="hover:text-[#0F4C5C]" href="#"><iconify-icon icon="solar:phone-calling-linear" width="24"></iconify-icon></a>
<a className="hover:text-[#0F4C5C]" href="#"><iconify-icon icon="solar:chat-round-dots-linear" width="24"></iconify-icon></a>
<a className="hover:text-[#0F4C5C]" href="#"><iconify-icon icon="solar:map-point-linear" width="24"></iconify-icon></a>
</div>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 overflow-hidden">

<div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-b from-[#C9A24D]/5 to-transparent pointer-events-none"></div>
<div className="absolute -left-20 top-40 w-96 h-96 bg-[#0F4C5C]/5 rounded-full blur-3xl pointer-events-none"></div>
<div className="max-w-4xl mx-auto text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#0F4C5C]/20 bg-white/50 backdrop-blur-sm mb-6">
<iconify-icon className="text-[#C9A24D]" icon="solar:star-linear" width="14"></iconify-icon>
<span className="text-xs tracking-wide uppercase font-medium text-[#0F4C5C]">Top Arbeitgeber 2024</span>
</div>
<h1 className="font-['Cormorant_Garamond'] text-5xl md:text-7xl lg:text-8xl leading-[1.1] font-medium tracking-tight text-[#0F4C5C] mb-6">
                Leidenschaft. Präzision. <br/>
<span className="italic text-[#C9A24D]">Wertschätzung</span> im Job.
            </h1>
<p className="text-lg md:text-xl text-[#2B2B2B]/70 max-w-2xl mx-auto leading-relaxed mb-10 font-light">
                Wir suchen Zahnmedizinische Fachangestellte (m/w/d), die mehr erwarten. Werden Sie Teil unseres exklusiven Teams, in dem Ihr Talent zählt und Ihre Work-Life-Balance respektiert wird.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto bg-[#0F4C5C] text-white h-12 px-8 rounded-full flex items-center justify-center gap-2 text-sm font-medium tracking-wide hover:shadow-xl hover:shadow-[#0F4C5C]/20 transition-all transform hover:-translate-y-0.5" href="#bewerben">
                    Stellenangebote ansehen
                    <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
<a className="w-full sm:w-auto h-12 px-8 rounded-full border border-[#0F4C5C]/20 text-[#0F4C5C] flex items-center justify-center gap-2 text-sm font-medium hover:bg-[#0F4C5C]/5 transition-all" href="#kultur">
<iconify-icon icon="solar:users-group-rounded-linear" width="18"></iconify-icon>
                    Team kennenlernen
                </a>
</div>

<div className="mt-16 pt-8 border-t border-[#0F4C5C]/10 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
<div className="flex flex-col items-center gap-2">
<iconify-icon className="text-[#C9A24D]" icon="solar:wallet-money-linear" width="24"></iconify-icon>
<span className="text-xs text-[#2B2B2B]/60 font-medium">Top Gehalt</span>
</div>
<div className="flex flex-col items-center gap-2">
<iconify-icon className="text-[#C9A24D]" icon="solar:clock-circle-linear" width="24"></iconify-icon>
<span className="text-xs text-[#2B2B2B]/60 font-medium">Flexible Zeiten</span>
</div>
<div className="flex flex-col items-center gap-2">
<iconify-icon className="text-[#C9A24D]" icon="solar:diploma-linear" width="24"></iconify-icon>
<span className="text-xs text-[#2B2B2B]/60 font-medium">Bezahlte Fortbildung</span>
</div>
<div className="flex flex-col items-center gap-2">
<iconify-icon className="text-[#C9A24D]" icon="solar:heart-angle-linear" width="24"></iconify-icon>
<span className="text-xs text-[#2B2B2B]/60 font-medium">Familiäres Klima</span>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 bg-white border-y border-[#0F4C5C]/5" id="kultur">
<div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
<div className="relative group">

<div className="aspect-[3/4] rounded-2xl overflow-hidden bg-[#FAFAF8] border border-[#0F4C5C]/10 relative">
<div className="absolute inset-0 bg-gradient-to-tr from-[#0F4C5C]/10 to-transparent"></div>
<div className="absolute inset-0 flex items-center justify-center text-[#0F4C5C]/20">

<iconify-icon icon="solar:users-group-two-rounded-linear" strokeWidth="0.5" width="120"></iconify-icon>
</div>
<div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur p-4 rounded-xl border border-[#0F4C5C]/10 shadow-sm">
<p className="font-['Cormorant_Garamond'] text-[#0F4C5C] text-lg italic">"Ein glückliches Team sorgt für glückliche Patienten. Das ist unsere Philosophie."</p>
</div>
</div>

<div className="absolute -inset-4 border border-[#C9A24D]/30 rounded-[20px] -z-10 translate-x-2 translate-y-2"></div>
</div>
<div className="">
<span className="text-[#C9A24D] text-xs font-semibold tracking-widest uppercase mb-2 block">Unsere Kultur</span>
<h2 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl font-medium text-[#0F4C5C] mb-6 tracking-tight">Arbeiten auf Augenhöhe</h2>
<div className="space-y-6 text-[#2B2B2B]/80 font-light leading-relaxed">
<p className="">
                        Dr. Harshit Lohani und das gesamte Team legen größten Wert auf ein harmonisches Miteinander. Bei uns sind Sie keine Nummer, sondern ein geschätztes Mitglied der "Dental Healthcare" Familie. Wir glauben daran, dass Spitzenmedizin nur in einer entspannten, angstfreien Atmosphäre entstehen kann – für Patienten und Mitarbeiter gleichermaßen.
                    </p>
<p className="">
                        Unsere Praxis steht für modernste Ausstattung, strukturierte Abläufe und genügend Zeit für die Behandlung. Kein Fließband, kein Stress – sondern Fokus auf Qualität.
                    </p>
</div>
<div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-[#0F4C5C]/10 flex items-center justify-center text-[#0F4C5C]">
<iconify-icon icon="solar:check-circle-linear" width="14"></iconify-icon>
</div>
<span className="text-sm">Strukturierte Einarbeitung</span>
</div>
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-[#0F4C5C]/10 flex items-center justify-center text-[#0F4C5C]">
<iconify-icon icon="solar:check-circle-linear" width="14"></iconify-icon>
</div>
<span className="text-sm">Digitales Arbeiten</span>
</div>
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-[#0F4C5C]/10 flex items-center justify-center text-[#0F4C5C]">
<iconify-icon icon="solar:check-circle-linear" width="14"></iconify-icon>
</div>
<span className="text-sm">Regelmäßige Feedbackgespräche</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#FAFAF8]" id="vorteile">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl font-medium text-[#0F4C5C] tracking-tight mb-4">Ihre exklusiven Vorteile</h2>
<p className="text-[#2B2B2B]/60 max-w-xl mx-auto">Wir investieren in das Wohlbefinden unserer Mitarbeiter.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white p-8 rounded-2xl border border-[#0F4C5C]/5 hover:border-[#C9A24D]/30 transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] group">
<div className="w-12 h-12 bg-[#0F4C5C]/5 rounded-xl flex items-center justify-center text-[#0F4C5C] mb-6 group-hover:bg-[#0F4C5C] group-hover:text-white transition-colors">
<iconify-icon icon="solar:wallet-linear" width="24"></iconify-icon>
</div>
<h3 className="font-['Cormorant_Garamond'] text-2xl font-medium text-[#0F4C5C] mb-2">Überdurchschnittliches Gehalt</h3>
<p className="text-sm text-[#2B2B2B]/70 leading-relaxed mb-4">
                        Leistung soll sich lohnen. Wir bieten ein Gehalt weit über dem Tarif, zuzüglich attraktiver Bonuszahlungen und Weihnachtsgeld.
                    </p>
</div>

<div className="bg-white p-8 rounded-2xl border border-[#0F4C5C]/5 hover:border-[#C9A24D]/30 transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] group">
<div className="w-12 h-12 bg-[#0F4C5C]/5 rounded-xl flex items-center justify-center text-[#0F4C5C] mb-6 group-hover:bg-[#0F4C5C] group-hover:text-white transition-colors">
<iconify-icon icon="solar:calendar-linear" width="24"></iconify-icon>
</div>
<h3 className="font-['Cormorant_Garamond'] text-2xl font-medium text-[#0F4C5C] mb-2">Work-Life-Balance</h3>
<p className="text-sm text-[#2B2B2B]/70 leading-relaxed mb-4">
                        Geregelte Arbeitszeiten, keine Überstunden und 30 Tage Urlaub. Ihre Freizeit gehört Ihnen.
                    </p>
</div>

<div className="bg-white p-8 rounded-2xl border border-[#0F4C5C]/5 hover:border-[#C9A24D]/30 transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] group">
<div className="w-12 h-12 bg-[#0F4C5C]/5 rounded-xl flex items-center justify-center text-[#0F4C5C] mb-6 group-hover:bg-[#0F4C5C] group-hover:text-white transition-colors">
<iconify-icon icon="solar:diploma-linear" width="24"></iconify-icon>
</div>
<h3 className="font-['Cormorant_Garamond'] text-2xl font-medium text-[#0F4C5C] mb-2">Karriere &amp; Fortbildung</h3>
<p className="text-sm text-[#2B2B2B]/70 leading-relaxed mb-4">
                        Wir übernehmen die Kosten für Ihre Fortbildungen (z.B. ZMP, ZMV) und fördern Ihre individuelle Entwicklung.
                    </p>
</div>

<div className="bg-white p-8 rounded-2xl border border-[#0F4C5C]/5 hover:border-[#C9A24D]/30 transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] group">
<div className="w-12 h-12 bg-[#0F4C5C]/5 rounded-xl flex items-center justify-center text-[#0F4C5C] mb-6 group-hover:bg-[#0F4C5C] group-hover:text-white transition-colors">
<iconify-icon icon="solar:monitor-camera-linear" width="24"></iconify-icon>
</div>
<h3 className="font-['Cormorant_Garamond'] text-2xl font-medium text-[#0F4C5C] mb-2">High-Tech Ausstattung</h3>
<p className="text-sm text-[#2B2B2B]/70 leading-relaxed mb-4">
                        Arbeiten Sie mit modernster Technik in klimatisierten Räumen. Digitale Workflows erleichtern Ihren Alltag.
                    </p>
</div>

<div className="bg-white p-8 rounded-2xl border border-[#0F4C5C]/5 hover:border-[#C9A24D]/30 transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] group">
<div className="w-12 h-12 bg-[#0F4C5C]/5 rounded-xl flex items-center justify-center text-[#0F4C5C] mb-6 group-hover:bg-[#0F4C5C] group-hover:text-white transition-colors">
<iconify-icon icon="solar:wineglass-linear" width="24"></iconify-icon>
</div>
<h3 className="font-['Cormorant_Garamond'] text-2xl font-medium text-[#0F4C5C] mb-2">Team Events</h3>
<p className="text-sm text-[#2B2B2B]/70 leading-relaxed mb-4">
                        Gemeinsame Ausflüge, Abendessen und Feiern stärken unseren Zusammenhalt. Spaß gehört dazu!
                    </p>
</div>

<div className="bg-[#0F4C5C] p-8 rounded-2xl flex flex-col justify-center items-center text-center">
<h3 className="font-['Cormorant_Garamond'] text-2xl font-medium text-white mb-2">Interessiert?</h3>
<p className="text-sm text-white/70 leading-relaxed mb-6">
                        Lassen Sie uns unverbindlich sprechen.
                    </p>
<a className="bg-[#C9A24D] text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-[#b08d41] transition w-full" href="#bewerben">In 60 Sekunden bewerben</a>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative bg-white overflow-hidden" id="stimmen">

<div className="absolute right-0 top-0 w-64 h-64 bg-[#C9A24D]/5 rounded-bl-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
<div>
<span className="text-[#C9A24D] text-xs font-semibold tracking-widest uppercase mb-2 block">Teamstimmen</span>
<h2 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl font-medium text-[#0F4C5C] tracking-tight">Warum wir gerne hier arbeiten</h2>
</div>
<div className="flex gap-1 text-[#C9A24D]">
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
</div>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-[#FAFAF8] p-6 rounded-xl border-t-2 border-[#C9A24D] shadow-sm">
<div className="mb-4 text-[#C9A24D] flex gap-1 text-xs">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-[#2B2B2B]/80 font-light italic mb-4">"Endlich eine Praxis, in der meine Arbeit wirklich wertgeschätzt wird. Das Klima ist super entspannt und der Chef hört einem zu."</p>
<p className="text-xs font-semibold text-[#0F4C5C] uppercase tracking-wide">Sarah K., ZFA</p>
</div>

<div className="bg-[#FAFAF8] p-6 rounded-xl border-t-2 border-[#C9A24D] shadow-sm">
<div className="mb-4 text-[#C9A24D] flex gap-1 text-xs">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-[#2B2B2B]/80 font-light italic mb-4">"Die modernen Geräte machen den Alltag viel leichter. Und durch die Fortbildungsförderung konnte ich mich zur ZMP weiterentwickeln."</p>
<p className="text-xs font-semibold text-[#0F4C5C] uppercase tracking-wide">Lisa M., ZMP</p>
</div>

<div className="bg-[#FAFAF8] p-6 rounded-xl border-t-2 border-[#C9A24D] shadow-sm">
<div className="mb-4 text-[#C9A24D] flex gap-1 text-xs">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-[#2B2B2B]/80 font-light italic mb-4">"Ich bin als Azubi gekommen und geblieben. Die Unterstützung im Team ist einmalig, man wird nie allein gelassen."</p>
<p className="text-xs font-semibold text-[#0F4C5C] uppercase tracking-wide">Julia W., ZMV</p>
</div>
</div>
</div>
</section>

<section className="py-16 px-6 bg-[#0F4C5C] text-white">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
<div className="md:w-1/2">
<h2 className="font-['Cormorant_Garamond'] text-3xl md:text-4xl font-medium mb-4">Wir wachsen gemeinsam</h2>
<p className="text-white/70 font-light mb-6">Wir glauben an Qualität, Ruhe und Professionalität. Wenn Sie diese Werte teilen, sind Sie bei uns genau richtig.</p>
<div className="flex flex-wrap gap-4">
<div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">
<iconify-icon className="text-[#C9A24D]" icon="solar:star-linear"></iconify-icon>
<span className="text-xs font-medium">Premium Praxis</span>
</div>
<div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">
<iconify-icon className="text-[#C9A24D]" icon="solar:users-group-rounded-linear"></iconify-icon>
<span className="text-xs font-medium">Starkes Team</span>
</div>
</div>
</div>
<div className="md:w-1/3 w-full bg-[#C9A24D] h-1 rounded-full opacity-20 md:hidden"></div>
<div className="md:w-1/2 text-right">
<p className="text-2xl font-['Cormorant_Garamond'] italic opacity-80">"Karriere mit Biss und Herz"</p>
</div>
</div>
</section>

<section className="bg-[#FAFAF8] pt-24 pr-6 pb-24 pl-6" id="bewerben">
<div className="max-w-5xl mx-auto bg-white rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(15,76,92,0.1)] border border-[#0F4C5C]/5">
<div className="grid md:grid-cols-2">

<div className="p-8 md:p-12">
<span className="text-[#C9A24D] text-xs font-semibold tracking-widest uppercase mb-2 block">Bewerbung</span>
<h2 className="font-['Cormorant_Garamond'] text-3xl md:text-4xl font-medium text-[#0F4C5C] mb-2">Starten Sie Ihre Karriere</h2>
<p className="text-sm text-[#2B2B2B]/60 mb-8">Einfach Formular ausfüllen. Wir melden uns innerhalb von 24h bei Ihnen.</p>
<form className="space-y-4">
<div className="">
<input className="w-full bg-[#FAFAF8] border-b border-[#0F4C5C]/20 px-4 py-3 text-sm text-[#0F4C5C] placeholder-[#0F4C5C]/40 transition focus:border-[#0F4C5C] focus:bg-[#0F4C5C]/5" placeholder="Vor- und Nachname" type="text"/>
</div>
<div className="">
<input className="w-full bg-[#FAFAF8] border-b border-[#0F4C5C]/20 px-4 py-3 text-sm text-[#0F4C5C] placeholder-[#0F4C5C]/40 transition focus:border-[#0F4C5C] focus:bg-[#0F4C5C]/5" placeholder="Telefonnummer" type="tel"/>
</div>

<div className="relative">
<select className="w-full bg-[#FAFAF8] border-b border-[#0F4C5C]/20 px-4 py-3 text-sm text-[#0F4C5C] appearance-none cursor-pointer focus:bg-[#0F4C5C]/5">
<option>Stelle wählen...</option>
<option>ZFA - Stuhlassistenz</option>
<option>ZMP - Prophylaxe</option>
<option>ZMV - Verwaltung</option>
<option>Ausbildung zur ZFA</option>
<option>Initiativbewerbung</option>
</select>
<iconify-icon className="absolute right-4 top-3.5 text-[#0F4C5C]/50 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<div className="">
<input className="w-full bg-[#FAFAF8] border-b border-[#0F4C5C]/20 px-4 py-3 text-sm text-[#0F4C5C] placeholder-[#0F4C5C]/40 transition focus:border-[#0F4C5C] focus:bg-[#0F4C5C]/5" placeholder="Berufserfahrung (in Jahren)" type="text"/>
</div>
<button className="w-full bg-[#0F4C5C] text-white h-12 rounded-lg text-sm font-medium tracking-wide mt-4 hover:bg-[#0a3540] transition shadow-lg shadow-[#0F4C5C]/20 flex items-center justify-center gap-2" type="button">
                            Bewerbung absenden
                            <iconify-icon icon="solar:plain-linear" width="18"></iconify-icon>
</button>
</form>
<p className="mt-6 text-xs text-center text-[#2B2B2B]/40">Kein Lebenslauf zur Hand? Kein Problem, wir lernen uns erst einmal kennen.</p>
</div>

<div className="bg-[#0F4C5C]/5 p-8 md:p-12 flex flex-col justify-between border-l border-[#0F4C5C]/5">
<div className="">
<h3 className="font-['Cormorant_Garamond'] text-2xl font-medium text-[#0F4C5C] mb-6">Kontakt Personalabteilung</h3>
<div className="space-y-6">
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#C9A24D] shadow-sm shrink-0">
<iconify-icon icon="solar:map-point-linear" width="20"></iconify-icon>
</div>
<div className="">
<p className="text-sm font-semibold text-[#0F4C5C] uppercase tracking-wide mb-1">Standort</p>
<p className="text-sm text-[#2B2B2B]/70">DENTOGLOBAL UG (haftungsbeschränkt) 
 Haberfeld 21, 14532 Kleinmachnow</p>
</div>
</div>
<div className="flex gap-4 gap-x-4 gap-y-4">
<div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#C9A24D] shadow-sm shrink-0">
<iconify-icon icon="solar:phone-calling-linear" width="20"></iconify-icon>
</div>
<div className="">
<p className="text-sm font-semibold text-[#0F4C5C] uppercase tracking-wide mb-1">Ansprechpartner</p>
<p className="text-sm text-[#2B2B2B]/70">Telefon: + 49 170 2344382</p>
<p className="text-sm text-[#2B2B2B]/70">us@dentoglobal.de</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#C9A24D] shadow-sm shrink-0">
<iconify-icon icon="solar:chat-round-check-linear" width="20"></iconify-icon>
</div>
<div className="">
<p className="text-sm font-semibold text-[#0F4C5C] uppercase tracking-wide mb-1">Schneller Prozess</p>
<p className="text-sm text-[#2B2B2B]/70">1. Kurzbewerbung senden</p>
<p className="text-sm text-[#2B2B2B]/70">2. Telefonat oder Kennenlernen</p>
<p className="text-sm text-[#2B2B2B]/70">3. Probetag &amp; Vertrag</p>
</div>
</div>
</div>
</div>

<div className="mt-8 h-32 w-full bg-white rounded-xl border border-[#0F4C5C]/10 flex items-center justify-center text-[#0F4C5C]/30 text-xs uppercase tracking-widest">
<iconify-icon className="mr-2" icon="solar:map-linear" width="24"></iconify-icon> Google Maps
                    </div>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-[#0F4C5C]/10 pt-16 pb-8 px-6">
<div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 mb-12">
<div className="md:col-span-1">
<a className="block text-2xl font-semibold text-[#0F4C5C] font-['Cormorant_Garamond'] mb-4" href="#">DENTOGLOBAL</a>
<p className="text-sm text-[#2B2B2B]/60 leading-relaxed mb-6">
                    Exzellente Zahnmedizin braucht exzellentes Personal. Werden Sie Teil unserer Erfolgsgeschichte.
                </p>
<div className="flex gap-4">
<a className="text-[#0F4C5C] hover:text-[#C9A24D] transition" href="#"><iconify-icon icon="solar:facebook-linear" width="20"></iconify-icon></a>
<a className="text-[#0F4C5C] hover:text-[#C9A24D] transition" href="#"><iconify-icon icon="solar:instagram-linear" width="20"></iconify-icon></a>
<a className="text-[#0F4C5C] hover:text-[#C9A24D] transition" href="#"><iconify-icon icon="solar:linkedin-linear" width="20"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="text-xs font-semibold uppercase tracking-widest text-[#0F4C5C] mb-6">Menü</h4>
<ul className="space-y-3 text-sm text-[#2B2B2B]/70">
<li><a className="hover:text-[#C9A24D] transition" href="#">Startseite</a></li>
<li><a className="hover:text-[#C9A24D] transition" href="#kultur">Praxiskultur</a></li>
<li><a className="hover:text-[#C9A24D] transition" href="#vorteile">Benefits</a></li>
<li><a className="hover:text-[#C9A24D] transition" href="#bewerben">Jetzt bewerben</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold uppercase tracking-widest text-[#0F4C5C] mb-6">Offene Stellen</h4>
<ul className="space-y-3 text-sm text-[#2B2B2B]/70">
<li>ZFA (Stuhlassistenz)</li>
<li>ZMP (Prophylaxe)</li>
<li>ZMV (Verwaltung)</li>
<li>Auszubildende</li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold uppercase tracking-widest text-[#0F4C5C] mb-6">Fragen?</h4>
<p className="text-sm text-[#2B2B2B]/70 mb-4">Rufen Sie uns gerne unkompliziert an.</p>
<a className="inline-flex items-center gap-2 text-[#0F4C5C] font-medium text-sm hover:underline" href="tel:+490000000000">
<iconify-icon icon="solar:phone-calling-linear"></iconify-icon>
                    +49 30 123456
                </a>
</div>
</div>
<div className="max-w-7xl mx-auto border-t border-[#0F4C5C]/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#2B2B2B]/40">
<p>© 2024 The Dental Healthcare. Alle Rechte vorbehalten.</p>
<div className="flex gap-4">
<a className="hover:text-[#0F4C5C]" href="#">Impressum</a>
<a className="hover:text-[#0F4C5C]" href="#">Datenschutz</a>
</div>
</div>
</footer>

<div className="fixed bottom-6 right-6 md:hidden z-40">
<a className="w-14 h-14 bg-[#C9A24D] rounded-full text-white shadow-lg shadow-[#C9A24D]/40 flex items-center justify-center animate-bounce" href="tel:+490000000000">
<iconify-icon icon="solar:phone-calling-bold" width="24"></iconify-icon>
</a>
</div>



    </>
  );
}
