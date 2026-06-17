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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      

<div className="bg-black text-white text-xs font-medium py-2 text-center tracking-wide">
<span className="opacity-90">Pranojmë pacientë të rinj në Tiranë.</span>
<a className="underline ml-2 text-[#3B82F6] hover:text-white transition-colors duration-300" href="#book">Rezervo tani →</a>
</div>

<nav className="sticky top-0 z-50 w-full backdrop-blur-xl bg-white/80 border-b border-gray-200/50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">

<div className="flex-shrink-0 flex items-center gap-2">
<div className="w-8 h-8 bg-[#3B82F6] rounded-lg flex items-center justify-center text-white">
<iconify-icon icon="solar:medical-kit-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<a className="text-lg font-bold tracking-tight text-gray-900 leading-none" href="#">
                        Dental <span className="text-gray-500 font-medium">Clinic</span>
</a>
</div>

<div className="hidden md:flex items-center space-x-8">
<a className="text-sm font-medium text-gray-600 hover:text-black transition-colors" href="#services">Shërbimet</a>
<a className="text-sm font-medium text-gray-600 hover:text-black transition-colors" href="#team">Ekipi</a>
<a className="text-sm font-medium text-gray-600 hover:text-black transition-colors" href="#membership">Pako Kujdesi</a>
<a className="text-sm font-medium text-gray-600 hover:text-black transition-colors" href="#fees">Tarifat</a>
<a className="group relative inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white transition-all duration-200 bg-[#3B82F6] border border-transparent rounded-full hover:bg-[#2563EB] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#3B82F6]" href="#contact">
<span className="">Rezervo Konsultë</span>
<iconify-icon className="ml-1 transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>

<div className="md:hidden flex items-center">
<button className="text-gray-600 hover:text-black focus:outline-none p-2">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</div>
</nav>

<section className="relative pt-16 pb-20 lg:pt-24 lg:pb-28 overflow-hidden bg-white">

<div className="absolute inset-0 z-0 bg-grid-pattern pointer-events-none"></div>
<div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
<div className="animate-blob-1 absolute -top-[10%] -right-[5%] w-[40rem] h-[40rem] rounded-full bg-[#3B82F6]/5 blur-3xl mix-blend-multiply"></div>
<div className="animate-blob-2 absolute -bottom-[10%] -left-[10%] w-[45rem] h-[45rem] rounded-full bg-blue-100/40 blur-3xl mix-blend-multiply"></div>
<div className="animate-blob-3 absolute top-[20%] left-[15%] w-[35rem] h-[35rem] rounded-full bg-indigo-50/50 blur-3xl mix-blend-multiply"></div>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="flex flex-col lg:flex-row lg:gap-20 gap-x-12 gap-y-12 items-center">
<div className="w-full lg:w-1/2 text-center lg:text-left">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/60 backdrop-blur-md border border-gray-200 text-xs font-medium text-gray-600 mb-6 shadow-sm">
<iconify-icon className="text-[#2563EB]" icon="solar:star-linear"></iconify-icon>
                        ⭐ 4.9 vlerësim nga pacientët tanë
                    </div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6 leading-[1.1]">
                        Kujdes Modern për <span className="relative whitespace-nowrap">
<span className="relative z-10">Dhëmbët Tuaj.</span>
<span className="absolute bottom-1 left-0 w-full h-3 bg-[#3B82F6]/30 -z-10 rotate-1"></span>
</span>
</h1>
<p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                        Trajtime dentare moderne me fokus në komoditet, cilësi dhe rezultate afatgjata për pacientët tanë. Ne ofrojmë gjithçka nga kontrollet rutinë tek ndërhyrjet komplekse.
                    </p>
<div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
<a className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white transition-all duration-200 bg-[#3B82F6] border border-transparent rounded-lg hover:shadow-lg hover:shadow-[#3B82F6]/30 hover:-translate-y-0.5 hover:bg-[#2563EB]" href="#contact">
                            Rezervo Konsultë
                        </a>
<a className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-gray-900 transition-all duration-200 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-lg hover:bg-white hover:border-gray-300" href="#services">
<iconify-icon className="mr-2" icon="solar:clipboard-list-linear" width="20"></iconify-icon>
                            Shiko Trajtimet
                        </a>
</div>

<div className="mt-10 pt-8 border-t border-gray-200/60 flex flex-wrap justify-center lg:justify-start gap-8 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
<div className="flex items-center gap-2">
<iconify-icon icon="solar:shield-check-linear" width="20"></iconify-icon>
<span className="text-sm font-semibold">Teknologji Moderne</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon icon="solar:medal-star-linear" width="20"></iconify-icon>
<span className="text-sm font-semibold">Përvojë Profesionale</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon icon="solar:heart-angle-linear" width="20"></iconify-icon>
<span className="text-sm font-semibold">Kujdes i Personalizuar</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon icon="solar:verified-check-linear" width="20"></iconify-icon>
<span className="text-sm font-semibold">Rezultate të Garantuara</span>
</div>
</div>
</div>
<div className="w-full lg:w-1/2 relative">
<div className="aspect-[4/3] overflow-hidden group bg-gray-100 rounded-2xl relative shadow-2xl ring-1 ring-black/5">
<img alt="High end modern dental clinic" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&amp;fit=crop&amp;q=80&amp;w=2160"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"></div>
<div className="transition-transform duration-500 group-hover:-translate-y-2 bg-white/95 max-w-xs border-white/50 border rounded-xl pt-4 pr-4 pb-4 pl-4 absolute bottom-6 left-6 shadow-lg backdrop-blur-md">
<div className="flex items-start gap-3">
<div className="p-2 bg-[#3B82F6]/10 rounded-lg text-[#2563EB]">
<iconify-icon icon="solar:buildings-linear" width="24"></iconify-icon>
</div>
<div className="">
<p className="text-sm font-semibold tracking-tight text-gray-900">AURA Stomatology Group</p>
<p className="text-xs text-gray-500 mt-1">Modern Dentistry For Your Smile. Est. 2012</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-gray-50 border-y border-gray-200" id="services">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">Shërbime të Plota Dentare</h2>
<p className="text-gray-600">Nga higjiena rutinë tek restaurimet komplekse, ekipi ynë ofron një gamë të plotë trajtimesh në një ambient të qetë dhe profesional.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl hover:shadow-gray-200/50 hover:border-[#3B82F6] transition-all duration-300">
<div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#3B82F6] group-hover:text-white transition-colors duration-300">
<iconify-icon className="text-gray-900 group-hover:text-white transition-colors" icon="solar:screws-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-gray-900 mb-3 tracking-tight">Implante Dentare</h3>
<p className="text-sm text-gray-600 leading-relaxed mb-4">Zgjidhje e përhershme për dhëmbët që mungojnë, duke rikthyer plotësisht funksionin dhe estetikën e buzëqeshjes suaj.</p>
<a className="inline-flex items-center text-sm font-medium text-gray-900 hover:text-[#2563EB]" href="#">Mëso më shumë <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon></a>
</div>

<div className="group bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl hover:shadow-gray-200/50 hover:border-[#3B82F6] transition-all duration-300">
<div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#3B82F6] group-hover:text-white transition-colors duration-300">
<iconify-icon className="text-gray-900 group-hover:text-white transition-colors" icon="solar:star-shine-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-gray-900 mb-3 tracking-tight">Zbardhje Dhëmbësh</h3>
<p className="text-sm text-gray-600 leading-relaxed mb-4">Trajtime zbardhuese profesionale dhe të sigurta për të ndriçuar buzëqeshjen dhe për të rritur vetëbesimin tuaj.</p>
<a className="inline-flex items-center text-sm font-medium text-gray-900 hover:text-[#2563EB]" href="#">Shiko opsionet <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon></a>
</div>

<div className="group bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl hover:shadow-gray-200/50 hover:border-[#3B82F6] transition-all duration-300">
<div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#3B82F6] group-hover:text-white transition-colors duration-300">
<iconify-icon className="text-gray-900 group-hover:text-white transition-colors" icon="solar:sort-vertical-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-gray-900 mb-3 tracking-tight">Ortodonci</h3>
<p className="text-sm text-gray-600 leading-relaxed mb-4">Zgjidhje ortodontike moderne dhe diskrete për të drejtuar dhëmbët tuaj dhe për të përmirësuar kafshimin.</p>
<a className="inline-flex items-center text-sm font-medium text-gray-900 hover:text-[#2563EB]" href="#">Shiko rezultatet <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon></a>
</div>

<div className="group bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl hover:shadow-gray-200/50 hover:border-[#3B82F6] transition-all duration-300">
<div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#3B82F6] group-hover:text-white transition-colors duration-300">
<iconify-icon className="text-gray-900 group-hover:text-white transition-colors" icon="solar:cosmetic-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-gray-900 mb-3 tracking-tight">Stomatologji Estetike</h3>
<p className="text-sm text-gray-600 leading-relaxed mb-4">Transformoni buzëqeshjen tuaj me fasa porcelani, kompozit dhe rregullime estetike të personalizuara.</p>
<a className="inline-flex items-center text-sm font-medium text-gray-900 hover:text-[#2563EB]" href="#">Lexo më shumë <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon></a>
</div>

<div className="group bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl hover:shadow-gray-200/50 hover:border-[#3B82F6] transition-all duration-300">
<div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#3B82F6] group-hover:text-white transition-colors duration-300">
<iconify-icon className="text-gray-900 group-hover:text-white transition-colors" icon="solar:shield-plus-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-gray-900 mb-3 tracking-tight">Kontroll dhe Pastrim</h3>
<p className="text-sm text-gray-600 leading-relaxed mb-4">Kujdes parandalues i avancuar për të mbajtur dhëmbët dhe mishrat e dhëmbëve gjithmonë të shëndetshëm.</p>
<a className="inline-flex items-center text-sm font-medium text-gray-900 hover:text-[#2563EB]" href="#">Rezervo vizitë <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon></a>
</div>

<div className="group bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl hover:shadow-gray-200/50 hover:border-[#3B82F6] transition-all duration-300">
<div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#3B82F6] group-hover:text-white transition-colors duration-300">
<iconify-icon className="text-gray-900 group-hover:text-white transition-colors" icon="solar:medical-kit-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-gray-900 mb-3 tracking-tight">Trajtim Urgjent</h3>
<p className="text-sm text-gray-600 leading-relaxed mb-4">Takime të shpejta dhe brenda ditës për dhimbje dhëmbi, thyerje dhe shqetësime të tjera urgjente dentare.</p>
<a className="inline-flex items-center text-sm font-medium text-gray-900 hover:text-[#2563EB]" href="#">Merr ndihmë <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon></a>
</div>
</div>
</div>
</section>

<section className="overflow-hidden text-white bg-[#0a0a0a] pt-20 pb-20 relative" id="membership">
<div className="animate-blob-1 absolute top-0 right-0 w-[500px] h-[500px] bg-[#3B82F6] rounded-full blur-[120px] opacity-10 pointer-events-none"></div>
<div className="animate-blob-2 absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-500 rounded-full blur-[120px] opacity-[0.05] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="flex flex-col lg:flex-row items-center justify-between gap-12">
<div className="lg:w-1/2">
<div className="inline-block px-3 py-1 rounded-full border border-[#3B82F6]/30 bg-[#3B82F6]/10 text-[#3B82F6] text-xs font-semibold tracking-wide mb-6">
                        PAKO KUJDESI
                    </div>
<h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">Kujdes dentar i përballueshëm me plane mujore.</h2>
<p className="text-gray-400 text-lg mb-8 max-w-md">
                        Bashkohuni me Planin tonë të Kujdesit për të mbuluar koston e trajtimeve rutinë dhe për të shijuar përfitime ekskluzive si pacient.
                    </p>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3">
<iconify-icon className="text-[#3B82F6]" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="text-gray-300">Kontrolle dhe vizita higjiene të përfshira</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-[#3B82F6]" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="text-gray-300">Zbritje në trajtime të tjera</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-[#3B82F6]" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="text-gray-300">Mbështetje prioritare për urgjenca</span>
</li>
</ul>
<a className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white transition-all duration-200 bg-[#3B82F6] rounded-lg hover:bg-white hover:text-black" href="#">
                        Shiko Planet e Kujdesit
                    </a>
</div>
<div className="lg:w-5/12">
<div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-300">
<div className="absolute -top-4 -right-4 bg-[#3B82F6] text-white text-xs font-bold px-3 py-1 rounded-full">REKOMANDOHET</div>
<h3 className="text-xl font-semibold mb-2">Plan i Plotë</h3>
<div className="flex mb-6 gap-x-1 gap-y-1 items-baseline">
<span className="text-3xl font-bold text-white">5,500 L</span>
<span className="text-gray-500">/ muaj</span>
</div>
<div className="h-px w-full bg-white/10 mb-6"></div>
<p className="text-sm text-gray-400 mb-6">Perfekt për ruajtjen e shëndetit optimal oral me kujdes profesional të rregullt dhe pa kosto të fshehura.</p>
<button className="w-full py-2.5 rounded-lg border border-white/20 hover:bg-white hover:text-black transition-all duration-200 font-medium text-sm">
                            Krahaso Planet
                        </button>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="relative w-full rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5">
<img alt="Happy patient at dental clinic" className="sm:h-[400px] lg:h-[500px] hover:scale-105 transition-transform duration-700 w-full h-[350px] object-cover" src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&amp;fit=crop&amp;q=80&amp;w=1600"/>
</div>
<div className="">
<iconify-icon className="text-[#3B82F6] mb-6" icon="solar:quote-up-linear" width="48"></iconify-icon>
<h3 className="text-2xl font-bold tracking-tight text-gray-900 mb-6">
                        "Jam paciente në Dental Clinic prej vitesh. Kujdesi i vazhdueshëm dhe profesional nga ekipi me përvojë e bën çdo vizitë pa stres dhe shumë komode."
                    </h3>
<div className="flex items-center gap-4">
<div className="">
<p className="font-semibold text-gray-900">Ermira Hoxha</p>
<p className="text-sm text-gray-500">Paciente që nga 2018</p>
</div>
<div className="h-8 w-px bg-gray-200"></div>
<div className="flex text-[#3B82F6]">
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon className="" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
</div>
</div>
<div className="mt-8">
<a className="text-sm font-semibold text-[#3B82F6] hover:text-[#1D4ED8] transition-colors flex items-center gap-1" href="#">
                            Lexo më shumë vlerësime në Google <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-gray-50" id="contact">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
<div className="grid grid-cols-1 lg:grid-cols-2">
<div className="p-8 lg:p-12">
<h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-2">Na Kontaktoni</h2>
<p className="text-gray-600 mb-8">Plotësoni formularin më poshtë ose na telefononi për të rezervuar konsultën tuaj.</p>
<form className="space-y-6">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div className="">
<label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="name">Emri i Plotë</label>
<input className="block w-full rounded-lg border-gray-300 bg-gray-50 focus:border-[#3B82F6] focus:ring-[#3B82F6] sm:text-sm py-3 px-4 outline-none transition-all" id="name" placeholder="Agim Duka" type="text"/>
</div>
<div className="">
<label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="phone">Numri i Telefonit</label>
<input className="block w-full rounded-lg border-gray-300 bg-gray-50 focus:border-[#3B82F6] focus:ring-[#3B82F6] sm:text-sm py-3 px-4 outline-none transition-all" id="phone" placeholder="+355 69 000 0000" type="tel"/>
</div>
</div>
<div className="">
<label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="email">Adresa e Email-it</label>
<input className="block w-full rounded-lg border-gray-300 bg-gray-50 focus:border-[#3B82F6] focus:ring-[#3B82F6] sm:text-sm py-3 px-4 outline-none transition-all" id="email" placeholder="agim@shembull.com" type="email"/>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-3">Shërbimi i Dëshiruar</label>
<div className="flex flex-wrap gap-4">
<label className="inline-flex items-center cursor-pointer">
<input className="custom-checkbox" type="checkbox"/>
<span className="ml-2 text-sm text-gray-600">Kontroll</span>
</label>
<label className="inline-flex items-center cursor-pointer">
<input className="custom-checkbox" type="checkbox"/>
<span className="ml-2 text-sm text-gray-600">Zbardhje</span>
</label>
<label className="inline-flex items-center cursor-pointer">
<input className="custom-checkbox" type="checkbox"/>
<span className="ml-2 text-sm text-gray-600">Urgjencë</span>
</label>
<label className="inline-flex items-center cursor-pointer">
<input className="custom-checkbox" type="checkbox"/>
<span className="ml-2 text-sm text-gray-600">Tjetër</span>
</label>
</div>
</div>
<button className="w-full inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white transition-all duration-200 bg-[#3B82F6] rounded-lg hover:shadow-lg hover:bg-[#2563EB]" type="submit">
                                Dërgo Mesazhin
                            </button>
</form>
</div>
<div className="bg-gray-100 relative min-h-[400px]">

<div className="absolute inset-0 bg-gray-300">
<iframe allowfullscreen="" className="" height="100%" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47913.626388481236!2d19.779777838612185!3d41.33230554157147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1350310470fac5db%3A0x40092af10653720!2sTirana%2C%20Albania!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s" style={{border: '0', filter: 'grayscale(100%)'}} width="100%"></iframe>
</div>
<div className="absolute bottom-6 left-6 right-6 bg-white p-6 rounded-xl shadow-lg border border-gray-100">
<h4 className="font-bold text-gray-900 mb-2">Na Vizitoni</h4>
<div className="flex items-start gap-3 mb-3">
<iconify-icon className="text-gray-500 mt-1" icon="solar:map-point-linear" width="18"></iconify-icon>
<p className="text-sm text-gray-600">Rruga Sami Frashëri,<br/>Tiranë, Shqipëri</p>
</div>
<div className="flex items-center gap-3 mb-3">
<iconify-icon className="text-gray-500" icon="solar:clock-circle-linear" width="18"></iconify-icon>
<p className="text-sm text-gray-600">E Hënë – E Premte 09:00 – 18:00</p>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-gray-500" icon="solar:phone-linear" width="18"></iconify-icon>
<a className="text-sm font-medium text-gray-900 hover:text-[#3B82F6]" href="tel:+355690000000">+355 69 XXX XXXX</a>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-[#0a0a0a] text-gray-400 py-12 border-t border-white/10">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-1 md:col-span-1">
<div className="flex items-center gap-2 mb-4">
<div className="w-6 h-6 bg-[#3B82F6] rounded flex items-center justify-center text-white">
<iconify-icon icon="solar:medical-kit-linear" width="14"></iconify-icon>
</div>
<span className="text-white font-bold tracking-tight">Dental Clinic</span>
</div>
<p className="text-sm leading-relaxed mb-6">Klinikë dentare në Tiranë që ofron shërbime të plota të stomatologjisë së përgjithshme dhe estetike me standarde evropiane.</p>
</div>
<div className="">
<h4 className="text-white font-semibold mb-4">Linqe të Shpejta</h4>
<ul className="space-y-2 text-sm">
<li className=""><a className="hover:text-[#3B82F6] transition-colors" href="#">Kreu</a></li>
<li className=""><a className="hover:text-[#3B82F6] transition-colors" href="#">Rreth Nesh</a></li>
<li className=""><a className="hover:text-[#3B82F6] transition-colors" href="#">Ekipi Ynë</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-semibold mb-4">Shërbimet</h4>
<ul className="space-y-2 text-sm">
<li><a className="hover:text-[#3B82F6] transition-colors" href="#services">Stomatologji Estetike</a></li>
<li><a className="hover:text-[#3B82F6] transition-colors" href="#services">Implante Dentare</a></li>
<li><a className="hover:text-[#3B82F6] transition-colors" href="#services">Zbardhje Dhëmbësh</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-semibold mb-4">Kontakt</h4>
<div className="flex gap-4 mb-4">
<a className="text-gray-400 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:facebook-linear" width="24"></iconify-icon>
</a>
<a className="text-gray-400 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:instagram-linear" width="24"></iconify-icon>
</a>
</div>
<p className="text-xs">
                        Urgjencë? Na telefononi menjëherë.<br/>
<span className="text-white font-medium">+355 69 XXX XXXX</span>
</p>
</div>
</div>
<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
<p>© 2025 Dental Clinic. Të gjitha të drejtat e rezervuara.</p>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">Politika e Privatësisë</a>
<a className="hover:text-white transition-colors" href="#">Kushtet e Shërbimit</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
