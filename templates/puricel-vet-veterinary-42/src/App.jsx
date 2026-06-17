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
      

<nav className="fixed top-0 left-0 right-0 bg-[#0ea5e9] shadow-md z-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">
<a className="flex items-center gap-3" href="#">
<div className="flex items-center justify-center text-[#0ea5e9] bg-white p-2 rounded-xl shadow-sm gap-1">
<iconify-icon icon="lucide:dog" width="24"></iconify-icon>
<iconify-icon icon="lucide:cat" width="24"></iconify-icon>
</div>
<span className="font-medium text-white tracking-tight hidden sm:block text-xl">
              Puricel Vet
            </span>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-white/90 hover:text-white transition-colors" href="#servicii">
              Servicii
            </a>
<a className="text-sm font-medium text-white/90 hover:text-white transition-colors" href="#echipa">
              Echipa noastră
            </a>
<a className="text-sm font-medium text-white/90 hover:text-white transition-colors" href="#galerie">
              Galerie
            </a>
<a className="text-sm font-medium text-white/90 hover:text-white transition-colors" href="#contact">
              Contact
            </a>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:flex items-center gap-2 text-sm font-medium text-white/90 hover:text-white transition-colors" href="tel:0745183636">
<iconify-icon icon="lucide:phone" width="18"></iconify-icon>
              0745 18 36 36
            </a>
<a className="bg-white hover:bg-slate-50 text-[#0ea5e9] text-sm font-medium px-5 py-2 rounded-lg transition-colors shadow-sm" href="#programare">
              Programare
            </a>
</div>
</div>
</div>
</nav>

<section className="lg:pt-32 lg:pb-24 overflow-hidden pt-24 pb-16">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-12 items-center">
<div className="order-2 lg:order-1">
<div className="inline-flex items-center gap-2 bg-[#E5CCDA]/20 text-[#7A4B65] text-xs font-normal px-3 py-1.5 rounded-full mb-6">
<iconify-icon icon="solar:heart-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
              Pasiune pentru animale din 2015
            </div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium text-slate-900 tracking-tight leading-tight mb-6 font-sans">
              Medic de familie pentru
              <span className="text-[#93627E]">animalul tău</span>
</h1>
<p className="text-lg text-slate-600 mb-8 max-w-xl leading-relaxed">
              La Puricel Vet nu vei găsi orice medic, ci un medic de familie
              pentru animalul tău, aparatură de ultimă generație și o echipă
              dedicată care îi tratează ca și cum ar fi ai noștri.
            </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center gap-2 bg-[#E5CCDA] hover:bg-[#CFAAC0] text-slate-900 font-normal px-6 py-3 rounded-xl transition-colors" href="#programare">
<iconify-icon icon="solar:calendar-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
                Programează o vizită
              </a>
<a className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-700 font-normal px-6 py-3 rounded-xl border border-slate-200 transition-colors" href="#servicii">
                Serviciile noastre
                <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</a>
</div>
<div className="flex items-center gap-8 mt-10 pt-10 border-t border-slate-100">
<div>
<div className="text-2xl font-medium text-slate-900 tracking-tight font-sans">
                  8+
                </div>
<div className="text-sm text-slate-500">ani experiență</div>
</div>
<div>
<div className="text-2xl font-medium text-slate-900 tracking-tight font-sans">
                  Modern
                </div>
<div className="text-sm text-slate-500">aparatură de top</div>
</div>
</div>
</div>
<div className="order-1 lg:order-2 relative">
<div className="relative">
<img alt="Câine fericit" className="rounded-3xl shadow-2xl shadow-[#E5CCDA]/40 w-full object-cover aspect-[4/5]" src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&amp;h=700&amp;fit=crop"/>
<div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl">
<div className="flex items-center gap-3">
<div className="w-12 h-12 bg-[#E5CCDA]/40 rounded-xl flex items-center justify-center text-[#93627E]">
<iconify-icon icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<div className="">
<div className="text-sm font-normal text-slate-900">
                      Cabinet Certificat
                    </div>
<div className="text-xs text-slate-500">
                      Servicii la standarde înalte
                    </div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>


<section className="py-16 lg:py-24 bg-white" id="servicii">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl sm:text-4xl font-medium text-slate-900 tracking-tight mb-4 font-sans">
            Serviciile noastre
          </h2>
<p className="text-slate-600">
            Oferim îngrijire veterinară completă folosind cele mai noi
            tehnologii și proceduri pentru prietenii tăi necuvântători.
          </p>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="group p-6 bg-slate-50 hover:bg-[#E5CCDA]/20 rounded-2xl transition-colors cursor-pointer">
<div className="w-12 h-12 bg-white group-hover:bg-[#E5CCDA]/40 rounded-xl flex items-center justify-center mb-4 transition-colors text-[#93627E]">
<iconify-icon icon="solar:syringe-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-lg font-normal text-slate-900 mb-2">Vaccinare</h3>
<p className="text-sm text-slate-600">
              Programe complete de vaccinare pentru câini și pisici conform
              celor mai noi recomandări.
            </p>
</div>
<div className="group p-6 bg-slate-50 hover:bg-[#E5CCDA]/20 rounded-2xl transition-colors cursor-pointer">
<div className="w-12 h-12 bg-white group-hover:bg-[#E5CCDA]/40 rounded-xl flex items-center justify-center mb-4 transition-colors text-[#93627E]">
<iconify-icon icon="solar:scanner-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-lg font-normal text-slate-900 mb-2">Diagnostic</h3>
<p className="text-sm text-slate-600">
              RTG, ecografie și analize de laborator pentru un diagnostic rapid
              și precis.
            </p>
</div>
<div className="group p-6 bg-slate-50 hover:bg-[#E5CCDA]/20 rounded-2xl transition-colors cursor-pointer">
<div className="w-12 h-12 bg-white group-hover:bg-[#E5CCDA]/40 rounded-xl flex items-center justify-center mb-4 transition-colors text-[#93627E]">
<iconify-icon icon="solar:scissors-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-lg font-normal text-slate-900 mb-2">Chirurgie</h3>
<p className="text-sm text-slate-600">
              Chirurgie pe țesuturi moi și ortopedică într-o sală de operație
              modernă.
            </p>
</div>
<div className="group p-6 bg-slate-50 hover:bg-[#E5CCDA]/20 rounded-2xl transition-colors cursor-pointer">
<div className="w-12 h-12 bg-white group-hover:bg-[#E5CCDA]/40 rounded-xl flex items-center justify-center mb-4 transition-colors text-[#93627E]">
<iconify-icon icon="solar:smile-circle-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-lg font-normal text-slate-900 mb-2">
              Stomatologie
            </h3>
<p className="text-sm text-slate-600">
              Igienă dentară, tratamente și extracții sub anestezie sigură.
            </p>
</div>
<div className="group p-6 bg-slate-50 hover:bg-[#E5CCDA]/20 rounded-2xl transition-colors cursor-pointer">
<div className="w-12 h-12 bg-white group-hover:bg-[#E5CCDA]/40 rounded-xl flex items-center justify-center mb-4 transition-colors text-[#93627E]">
<iconify-icon icon="solar:bone-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-lg font-normal text-slate-900 mb-2">Ortopedie</h3>
<p className="text-sm text-slate-600">
              Tratamentul fracturilor și afecțiunilor aparatului locomotor.
            </p>
</div>
<div className="group p-6 bg-slate-50 hover:bg-[#E5CCDA]/20 rounded-2xl transition-colors cursor-pointer">
<div className="w-12 h-12 bg-white group-hover:bg-[#E5CCDA]/40 rounded-xl flex items-center justify-center mb-4 transition-colors text-[#93627E]">
<iconify-icon icon="solar:tag-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-lg font-normal text-slate-900 mb-2">Microcipare</h3>
<p className="text-sm text-slate-600">
              Microcipuri de identificare și înregistrare în baza națională de
              date.
            </p>
</div>
<div className="group p-6 bg-slate-50 hover:bg-[#E5CCDA]/20 rounded-2xl transition-colors cursor-pointer">
<div className="w-12 h-12 bg-white group-hover:bg-[#E5CCDA]/40 rounded-xl flex items-center justify-center mb-4 transition-colors text-[#93627E]">
<iconify-icon icon="solar:document-text-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-lg font-normal text-slate-900 mb-2">Pașapoarte</h3>
<p className="text-sm text-slate-600">
              Eliberarea documentelor de călătorie internațională pentru animale
              de companie.
            </p>
</div>
<div className="group p-6 bg-slate-50 hover:bg-[#E5CCDA]/20 rounded-2xl transition-colors cursor-pointer">
<div className="w-12 h-12 bg-white group-hover:bg-[#E5CCDA]/40 rounded-xl flex items-center justify-center mb-4 transition-colors text-[#93627E]">
<iconify-icon icon="solar:heart-pulse-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-lg font-normal text-slate-900 mb-2">Prevenție</h3>
<p className="text-sm text-slate-600">
              Controale regulate și consiliere pentru sănătatea optimă a
              animalului tău.
            </p>
</div>
</div>
</div>
</section>

<section className="py-16 lg:py-24 bg-slate-50" id="echipa">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl sm:text-4xl font-medium text-slate-900 tracking-tight mb-4 font-sans">
            Echipa noastră
          </h2>
<p className="text-slate-600">
            Medic de familie pentru animalul tău. Ne dorim ca fiecare animăluț
            care ne calcă pragul să fie tratat cu aceeași dragoste pe care le-o
            purtăm propriilor noștri prieteni necuvântători.
          </p>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
<div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
<img alt="Medic Veterinar" className="w-full h-64 object-cover object-top" src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&amp;h=400&amp;fit=crop&amp;crop=face"/>
<div className="p-6">
<h3 className="text-lg font-normal text-slate-900 mb-1">
                Medic Specialist
              </h3>
<p className="text-[#93627E] text-sm font-normal mb-3">
                Fondator &amp; Medic Principal
              </p>
<p className="text-sm text-slate-600 mb-4">
                Specializare în chirurgie țesuturi moi și medicină internă.
                Empatie și profesionalism.
              </p>
<div className="flex gap-2">
<span className="text-xs bg-[#E5CCDA]/20 text-[#7A4B65] px-2 py-1 rounded-md">
                  Chirurgie
                </span>
<span className="text-xs bg-[#E5CCDA]/20 text-[#7A4B65] px-2 py-1 rounded-md">
                  Medicină Internă
                </span>
</div>
</div>
</div>
<div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
<img alt="Medic Veterinar Chirurg" className="w-full h-64 object-cover object-top" src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&amp;h=400&amp;fit=crop&amp;crop=face"/>
<div className="p-6">
<h3 className="text-lg font-normal text-slate-900 mb-1">
                Medic Chirurg
              </h3>
<p className="text-[#93627E] text-sm font-normal mb-3">
                Chirurgie &amp; Ortopedie
              </p>
<p className="text-sm text-slate-600 mb-4">
                Experiență aprofundată în diagnosticare imagistică,
                traumatologie și intervenții complexe.
              </p>
<div className="flex gap-2">
<span className="text-xs bg-[#E5CCDA]/20 text-[#7A4B65] px-2 py-1 rounded-md">
                  Ortopedie
                </span>
<span className="text-xs bg-[#E5CCDA]/20 text-[#7A4B65] px-2 py-1 rounded-md">
                  Ecografie
                </span>
</div>
</div>
</div>
<div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
<img alt="Medic Veterinar Stomatolog" className="object-top cursor-pointer w-full h-64 object-cover" onclick="window.location.href='https://vetmed.arizona.edu/sites/default/files/styles/az_large/public/2025-03/VetMed_Home_WhyVetMed.jpg.webp?itok=DXvfCR0A'" role="button" src="https://vetmed.arizona.edu/sites/default/files/styles/az_large/public/2025-03/VetMed_Home_WhyVetMed.jpg.webp?itok=DXvfCR0A"/>
<div className="p-6">
<h3 className="text-lg font-normal text-slate-900 mb-1">
                Medic Stomatolog
              </h3>
<p className="text-[#93627E] text-sm font-normal mb-3">
                Stomatologie Veterinară
              </p>
<p className="text-sm text-slate-600 mb-4">
                Pasionată de igiena dentară și proceduri preventive pentru o
                viață sănătoasă și fără dureri.
              </p>
<div className="flex gap-2">
<span className="text-xs bg-[#E5CCDA]/20 text-[#7A4B65] px-2 py-1 rounded-md">
                  Stomatologie
                </span>
<span className="text-xs bg-[#E5CCDA]/20 text-[#7A4B65] px-2 py-1 rounded-md">
                  Prevenție
                </span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 lg:py-24 bg-white" id="galerie">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl sm:text-4xl font-medium text-slate-900 tracking-tight mb-4 font-sans">
            Pacienții noștri
          </h2>
<p className="text-slate-600">
            Animăluțe fericite și sănătoase sunt cea mai mare recompensă a
            noastră.
          </p>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
<div className="aspect-square rounded-2xl overflow-hidden">
<img alt="Câine" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=400&amp;h=400&amp;fit=crop"/>
</div>
<div className="aspect-square rounded-2xl overflow-hidden">
<img alt="Pisică" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&amp;h=400&amp;fit=crop"/>
</div>
<div className="aspect-square rounded-2xl overflow-hidden">
<img alt="Câine" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=400&amp;h=400&amp;fit=crop"/>
</div>
<div className="aspect-square rounded-2xl overflow-hidden">
<img alt="Pisică" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" src="https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=400&amp;h=400&amp;fit=crop"/>
</div>
<div className="aspect-square rounded-2xl overflow-hidden">
<img alt="Câine" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" src="https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?w=400&amp;h=400&amp;fit=crop"/>
</div>
<div className="aspect-square rounded-2xl overflow-hidden">
<img alt="Pisică" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" src="https://images.unsplash.com/photo-1495360010541-f48722b34f7d?w=400&amp;h=400&amp;fit=crop"/>
</div>
<div className="aspect-square rounded-2xl overflow-hidden">
<img alt="Câine" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" src="https://images.unsplash.com/photo-1534361960057-19889db9621e?w=400&amp;h=400&amp;fit=crop"/>
</div>
<div className="aspect-square rounded-2xl overflow-hidden">
<img alt="Pisică" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" src="https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=400&amp;h=400&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="py-16 lg:py-24 bg-gradient-to-br from-[#E5CCDA] to-[#CFAAC0]" id="programare">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-12 gap-x-12 gap-y-12 items-center">
<div className="text-slate-900">
<h2 className="text-3xl sm:text-4xl font-medium tracking-tight mb-4 font-sans">
              Programare online
            </h2>
<p className="text-slate-700 mb-8 text-lg">
              Completează formularul scurt și te vom contacta în curând pentru
              confirmarea programării.
            </p>
<div className="space-y-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-white/60 rounded-lg flex items-center justify-center">
<iconify-icon icon="solar:clock-circle-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<div>
<div className="font-normal">Program de lucru</div>
<div className="text-sm text-slate-700">
                    Luni-Vineri: 09:00 - 19:00
                    <br/>
                    Sâmbătă: 09:00 - 14:00
                  </div>
</div>
</div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-white/60 rounded-lg flex items-center justify-center">
<iconify-icon icon="solar:phone-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<div>
<div className="font-normal">Telefon Urgențe / Programări</div>
<div className="text-slate-700 text-sm">0745 18 36 36</div>
</div>
</div>
</div>
</div>
<div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl">
<form className="space-y-5">
<div className="grid sm:grid-cols-2 gap-4">
<div>
<label className="block text-sm font-normal text-slate-700 mb-2">
                    Numele tău
                  </label>
<input className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#93627E] focus:ring-2 focus:ring-[#E5CCDA]/50 outline-none transition-all text-sm" placeholder="Ion Popescu" type="text"/>
</div>
<div>
<label className="block text-sm font-normal text-slate-700 mb-2">
                    Telefon
                  </label>
<input className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#93627E] focus:ring-2 focus:ring-[#E5CCDA]/50 outline-none transition-all text-sm" placeholder="07XX XXX XXX" type="tel"/>
</div>
</div>
<div>
<label className="block text-sm font-normal text-slate-700 mb-2">
                  E-mail
                </label>
<input className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#93627E] focus:ring-2 focus:ring-[#E5CCDA]/50 outline-none transition-all text-sm" placeholder="adresa@email.ro" type="email"/>
</div>
<div className="grid sm:grid-cols-2 gap-4">
<div>
<label className="block text-sm font-normal text-slate-700 mb-2">
                    Animal de companie
                  </label>
<div className="relative flex items-center">
<select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#93627E] focus:ring-2 focus:ring-[#E5CCDA]/50 outline-none transition-all text-sm appearance-none bg-white">
<option>Câine</option>
<option>Pisică</option>
<option>Altul</option>
</select>
<div className="absolute right-4 pointer-events-none text-slate-500">
<iconify-icon icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</div>
</div>
</div>
<div>
<label className="block text-sm font-normal text-slate-700 mb-2">
                    Data preferată
                  </label>
<input className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#93627E] focus:ring-2 focus:ring-[#E5CCDA]/50 outline-none transition-all text-sm" type="date"/>
</div>
</div>
<div>
<label className="block text-sm font-normal text-slate-700 mb-2">
                  Motivul vizitei
                </label>
<textarea className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#93627E] focus:ring-2 focus:ring-[#E5CCDA]/50 outline-none transition-all text-sm resize-none" placeholder="Descrie pe scurt motivul..." rows="3"></textarea>
</div>
<button className="w-full bg-[#E5CCDA] hover:bg-[#CFAAC0] text-slate-900 font-normal py-3 px-6 rounded-xl transition-colors flex items-center justify-center gap-2" type="button">
<iconify-icon icon="solar:plain-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                Trimite cererea
              </button>
</form>
</div>
</div>
</div>
</section>

<section className="lg:py-24 bg-slate-50 pt-16 pb-16" id="contact">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-12">
<div>
<h2 className="text-3xl sm:text-4xl font-medium text-slate-900 tracking-tight mb-4 font-sans">
              Informații contact
            </h2>
<p className="text-slate-600 mb-8">
              Cabinetul nostru este situat într-o zonă accesibilă din București,
              cu posibilități de parcare în apropiere.
            </p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="w-12 h-12 bg-[#E5CCDA]/40 text-[#93627E] rounded-xl flex items-center justify-center flex-shrink-0">
<iconify-icon icon="solar:map-point-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<div>
<h3 className="font-normal text-slate-900 mb-1">Adresă</h3>
<p className="text-slate-600">
                    Bulevardul Constructorilor 20, București 060511
                  </p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-12 h-12 bg-[#E5CCDA]/40 text-[#93627E] rounded-xl flex items-center justify-center flex-shrink-0">
<iconify-icon icon="solar:phone-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<div>
<h3 className="font-normal text-slate-900 mb-1">Telefon</h3>
<p className="text-slate-600">0745 183 636</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-12 h-12 bg-[#E5CCDA]/40 text-[#93627E] rounded-xl flex items-center justify-center flex-shrink-0">
<iconify-icon icon="solar:letter-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<div>
<h3 className="font-normal text-slate-900 mb-1">E-mail</h3>
<p className="text-slate-600">office@puricelvet.ro</p>
</div>
</div>
</div>
</div>
<div className="rounded-2xl overflow-hidden h-80 lg:h-auto shadow-sm">
<iframe allowfullscreen="" className="rounded-2xl" height="100%" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.406336306052!2d26.0357663!3d44.4453535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b201c1615d6c8b%3A0xc3192025110c436b!2sBulevardul%20Constructorilor%2020%2C%20Bucure%C8%99ti%20060511!5e0!3m2!1sen!2sro!4v1700000000000!5m2!1sen!2sro" style={{border: '0', minHeight: '320px'}} width="100%"></iframe>
</div>
</div>
</div>
</section>

<footer className="bg-slate-900 text-white py-12">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
<div>
<div className="flex items-center gap-2 mb-4">
<div className="flex items-center justify-center text-white bg-white/10 p-2 rounded-xl gap-1">
<iconify-icon icon="lucide:dog" width="24"></iconify-icon>
<iconify-icon icon="lucide:cat" width="24"></iconify-icon>
</div>
<span className="font-medium tracking-tight">Puricel Vet</span>
</div>
<p className="text-slate-400 text-sm leading-relaxed">
              Medic de familie pentru animalul tău. Oferim servicii veterinare
              profesioniste la cele mai înalte standarde.
            </p>
</div>
<div>
<h4 className="font-normal mb-4">Servicii principale</h4>
<ul className="space-y-2 text-sm text-slate-400">
<li>
<a className="hover:text-white transition-colors" href="#servicii">
                  Vaccinare și diagnostic
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#servicii">
                  Chirurgie generală
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#servicii">
                  Stomatologie
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#servicii">
                  Pașapoarte &amp; microcipare
                </a>
</li>
</ul>
</div>
<div>
<h4 className="font-normal mb-4">Navigare rapidă</h4>
<ul className="space-y-2 text-sm text-slate-400">
<li>
<a className="hover:text-white transition-colors" href="#echipa">
                  Echipa noastră
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#galerie">
                  Galerie
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#contact">
                  Informații contact
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#programare">
                  Programare vizită
                </a>
</li>
</ul>
</div>
<div>
<h4 className="font-normal mb-4">Rețele de socializare</h4>
<div className="flex gap-3">
<a className="w-10 h-10 bg-slate-800 hover:bg-[#E5CCDA] hover:text-slate-900 rounded-lg flex items-center justify-center transition-colors" href="#">
<iconify-icon icon="solar:global-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</a>
<a className="w-10 h-10 bg-slate-800 hover:bg-[#E5CCDA] hover:text-slate-900 rounded-lg flex items-center justify-center transition-colors" href="#">
<iconify-icon icon="solar:camera-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</a>
</div>
</div>
</div>
<div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
<p className="text-sm text-slate-400">
            © 2024 Puricel Vet. Toate drepturile rezervate.
          </p>
<div className="flex gap-6 text-sm text-slate-400">
<a className="hover:text-white transition-colors" href="#">
              Politica de confidențialitate
            </a>
<a className="hover:text-white transition-colors" href="#">
              Termeni și condiții
            </a>
</div>
</div>
</div>
</footer>

    </>
  );
}
