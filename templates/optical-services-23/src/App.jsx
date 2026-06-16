import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            const mobileMenuBtn = document.getElementById('mobile-menu-btn');
            const mobileMenu = document.getElementById('mobile-menu');
            
            if (mobileMenuBtn && mobileMenu) {
                mobileMenuBtn.addEventListener('click', () => {
                    mobileMenu.classList.toggle('hidden');
                    mobileMenu.classList.toggle('flex');
                });
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="sticky top-0 z-50 w-full pt-4 pb-4 bg-[#f8f9fa]/80 backdrop-blur-md">
<header className="w-full max-w-[1400px] mx-auto px-4 lg:px-8 flex flex-col gap-4">

<div className="flex items-center justify-between gap-4 w-full">

<a className="bg-[#1b2033] text-white px-5 py-3 rounded-2xl flex items-center gap-3 hover:bg-[#151928] transition-colors shrink-0 shadow-sm group" href="#">
<svg className="h-5 w-auto group-hover:scale-105 transition-transform" fill="none" viewbox="0 0 40 20" xmlns="http://www.w3.org/2000/svg">
<path d="M16 18C11 18 7 14 7 10C7 6 11 2 16 2C20 2 23 5 23 9H7" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.5"></path>
<path d="M26 2C31 2 35 6 35 10C35 14 31 18 26 18C22 18 19 15 19 11" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.5"></path>
<circle cx="21" cy="11" fill="#a33a36" r="3.5"></circle>
</svg>
<div className="flex flex-col text-left">
<span className="text-xs leading-[1.1] font-medium tracking-[0.1em] text-white">EKSPERT</span>
<span className="text-xs leading-[1.1] font-medium tracking-[0.1em] text-white">OPTYK</span>
</div>
</a>

<div className="hidden lg:flex flex-1 bg-white rounded-2xl items-center justify-between pl-6 pr-2 py-2 shadow-sm border border-gray-200/60">
<p className="text-sm text-gray-500">
                        Patrzeć <span className="font-medium text-slate-900">bliżej</span>, planować <span className="font-medium text-slate-900">dalej</span>, działać <span className="font-medium text-slate-900">wspólnie!</span>
</p>
<div className="flex items-center gap-6">
<nav className="flex items-center gap-5 text-sm font-normal text-gray-500">
<a className="hover:text-slate-900 transition-colors" href="#">Dla Klientów</a>
<span className="text-gray-200">|</span>
<a className="hover:text-slate-900 transition-colors" href="#">Dla Optyków</a>
</nav>
<a className="border border-gray-200 hover:border-gray-300 hover:bg-gray-50 text-slate-900 rounded-xl pr-4 pl-1.5 py-1.5 text-sm font-medium flex items-center gap-2.5 transition-all group" href="#">
<div className="bg-[#1b2033] rounded-lg p-1.5 flex items-center justify-center text-white group-hover:scale-105 transition-transform">
<iconify-icon height="18" icon="solar:fingerprint-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</div>
                            EKSPERT Link
                        </a>
</div>
</div>

<button className="lg:hidden bg-white border border-gray-200/60 p-3 rounded-2xl text-slate-900 shadow-sm flex items-center justify-center hover:bg-gray-50 transition-colors" id="mobile-menu-btn">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</button>
</div>

<div className="hidden lg:hidden bg-white rounded-2xl shadow-lg border border-gray-200/60 p-5 flex-col gap-3 w-full" id="mobile-menu">
<nav className="flex flex-col gap-3 w-full">
<a className="w-full border border-gray-200 bg-white hover:bg-gray-50 text-slate-900 rounded-xl px-4 py-3.5 text-lg font-medium flex items-center justify-center transition-all" href="#">Dla Klientów</a>
<a className="w-full border border-gray-200 bg-white hover:bg-gray-50 text-slate-900 rounded-xl px-4 py-3.5 text-lg font-medium flex items-center justify-center transition-all" href="#">Dla Optyków</a>
<a className="w-full border border-gray-200 bg-gray-50 hover:bg-gray-100 text-slate-900 rounded-xl px-4 py-3.5 text-lg font-medium flex items-center justify-center gap-3 transition-all" href="#">
<div className="bg-[#1b2033] rounded-lg p-2 flex items-center justify-center text-white">
<iconify-icon height="20" icon="solar:fingerprint-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
                        EKSPERT Link
                    </a>
</nav>
</div>
</header>
</div>
<main className="w-full flex flex-col">

<section className="max-w-[1400px] w-full mx-auto px-4 lg:px-8 mt-2 lg:mt-6">
<div className="relative w-full rounded-[2.5rem] overflow-hidden flex flex-col justify-end p-8 lg:p-16 shadow-sm group min-h-[500px] lg:min-h-[600px] bg-slate-900">

<img alt="Spotkanie Biznesowe" className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-50 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#1b2033] via-[#1b2033]/80 to-[#a33a36]/40"></div>

<div className="relative z-10 w-full max-w-5xl">
<h1 className="text-4xl lg:text-6xl font-medium text-white tracking-tight leading-[1.1] mb-10">
                        Dołącz do Naszej Sieci<br/> Sukcesu!
                    </h1>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 border-t border-white/20 pt-8">
<p className="text-white text-lg lg:text-xl font-normal leading-relaxed">
                            Nasza <span className="font-medium text-red-200">Struktura Zakupowa</span> z pasją łączy siły z <span className="font-medium text-red-200">wiodącymi Partnerami handlowymi</span>, aby wspólnie tworzyć przyszłość pełną możliwości.
                        </p>
<p className="text-white/80 text-lg lg:text-xl font-normal leading-relaxed">
                            Nawiązujemy współpracę z Partnerami, którzy pragną nie tylko oferować produkty, ale również <span className="font-medium text-white">budować długofalowe relacje</span> oparte na wzajemnych korzyściach i zaufaniu.
                        </p>
</div>
</div>
</div>
</section>

<section className="max-w-[1000px] w-full mx-auto px-4 lg:px-8 mt-16 lg:mt-24 mb-16 lg:mb-24 text-center">
<h2 className="text-2xl lg:text-4xl font-normal text-slate-900 tracking-tight leading-relaxed">
                Jeśli dysponujesz ofertą, która <span className="font-medium text-[#a33a36]">wyróżnia się na rynku</span> i chcesz podzielić się nią z szerokim gronem klientów, jesteśmy gotowi do rozmowy. Wspólnie możemy odkrywać nowe ścieżki rozwoju.
            </h2>
</section>

<section className="max-w-[1400px] w-full mx-auto px-4 lg:px-8 pb-24">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">

<div className="lg:col-span-7 bg-white rounded-[2.5rem] p-8 lg:p-12 border border-gray-100 shadow-sm flex flex-col order-2 lg:order-1">
<h3 className="text-3xl lg:text-4xl font-medium text-slate-900 tracking-tight mb-8">
                        Razem budujmy lepszą przyszłość!
                    </h3>
<form className="flex flex-col gap-6 w-full">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div className="flex flex-col gap-2">
<label className="text-sm font-medium text-slate-900">Imię i nazwisko <span className="text-[#E31E24]">*</span></label>
<input className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-base focus:outline-none focus:ring-1 focus:ring-slate-900 focus:border-slate-900 transition-all placeholder-gray-400" placeholder="Twoje imię i nazwisko" type="text"/>
</div>
<div className="flex flex-col gap-2">
<label className="text-sm font-medium text-slate-900">Firma <span className="text-[#E31E24]">*</span></label>
<input className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-base focus:outline-none focus:ring-1 focus:ring-slate-900 focus:border-slate-900 transition-all placeholder-gray-400" placeholder="Nazwa firmy" type="text"/>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div className="flex flex-col gap-2">
<label className="text-sm font-medium text-slate-900">Adres email <span className="text-[#E31E24]">*</span></label>
<input className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-base focus:outline-none focus:ring-1 focus:ring-slate-900 focus:border-slate-900 transition-all placeholder-gray-400" placeholder="Twój adres email" type="email"/>
</div>
<div className="flex flex-col gap-2">
<label className="text-sm font-medium text-slate-900">Telefon <span className="text-[#E31E24]">*</span></label>
<input className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-base focus:outline-none focus:ring-1 focus:ring-slate-900 focus:border-slate-900 transition-all placeholder-gray-400" placeholder="Twój numer telefonu" type="tel"/>
</div>
</div>
<div className="flex flex-col gap-2">
<label className="text-sm font-medium text-slate-900">Wiadomość <span className="text-[#E31E24]">*</span></label>
<textarea className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-base focus:outline-none focus:ring-1 focus:ring-slate-900 focus:border-slate-900 transition-all placeholder-gray-400 resize-none" placeholder="Napisz, w czym możemy pomóc..." rows="5"></textarea>
</div>
<div className="mt-4">
<button className="bg-[#1b2033] hover:bg-[#151928] text-white font-medium text-base px-6 py-3.5 rounded-full transition-all w-fit flex items-center justify-center gap-2.5 group shadow-sm" type="button">
                                Wyślij zapytanie
                                <iconify-icon className="group-hover:translate-x-1 transition-transform" height="20" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</button>
</div>
</form>
</div>

<div className="lg:col-span-5 rounded-[2.5rem] overflow-hidden relative min-h-[350px] lg:min-h-full group shadow-sm order-1 lg:order-2">
<img alt="Współpraca" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-tr from-[#1b2033]/90 via-[#1b2033]/40 to-transparent"></div>
<div className="absolute bottom-8 left-8 right-8">
<div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl">
<div className="flex items-center gap-3 mb-2">
<svg className="h-4 w-auto" fill="none" viewbox="0 0 40 20" xmlns="http://www.w3.org/2000/svg">
<path d="M16 18C11 18 7 14 7 10C7 6 11 2 16 2C20 2 23 5 23 9H7" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.5"></path>
<path d="M26 2C31 2 35 6 35 10C35 14 31 18 26 18C22 18 19 15 19 11" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.5"></path>
<circle cx="21" cy="11" fill="#a33a36" r="3.5"></circle>
</svg>
</div>
<p className="text-white/90 text-sm font-medium leading-relaxed">
                                Ponad dekada doświadczenia w budowaniu silnych partnerstw B2B na rynku optycznym.
                            </p>
</div>
</div>
</div>
</div>
</section>
</main>


    </>
  );
}
