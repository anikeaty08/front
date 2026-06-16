import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
primary: {
50: '#f0f9ff',
100: '#e0f2fe',
500: '#0ea5e9',
600: '#0284c7', // Steel Blue
700: '#0369a1',
900: '#0c4a6e', // Navy
},
slate: {
850: '#1e293b', // Custom dark
}
},
letterSpacing: {
tight: '-0.025em',
tighter: '-0.04em',
}
}
}
}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 w-full z-50 glass-nav border-b border-slate-200/60 transition-all duration-300" id="navbar">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-20">

<div className="flex-shrink-0 flex items-center gap-2">
<span className="iconify text-primary-600" data-height="24" data-icon="lucide:wrench" data-width="24"></span>
<a className="font-semibold text-xl tracking-tight text-slate-900" href="#">
                        PRO<span className="text-primary-600">HYDRAULIK</span>
</a>
</div>

<nav className="hidden md:flex space-x-8">
<a className="text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors" href="#about">O Firmie</a>
<a className="text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors" href="#services">Usługi</a>
<a className="text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors" href="#gallery">Realizacje</a>
<a className="text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors" href="#reviews">Opinie</a>
</nav>

<div className="flex items-center gap-4">
<a className="hidden md:inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 rounded-lg transition-colors shadow-sm shadow-primary-200" href="tel:500000000">
<span className="iconify mr-2" data-height="16" data-icon="lucide:phone" data-width="16"></span>
                        500 000 000
                    </a>

<button className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-md" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')" type="button">
<span className="iconify" data-height="24" data-icon="lucide:menu" data-width="24"></span>
</button>
</div>
</div>
</div>

<div className="hidden md:hidden bg-white border-b border-slate-200" id="mobile-menu">
<div className="px-4 pt-2 pb-6 space-y-2">
<a className="block px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-md" href="#about">O Firmie</a>
<a className="block px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-md" href="#services">Usługi</a>
<a className="block px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-md" href="#gallery">Realizacje</a>
<a className="flex w-full items-center justify-center mt-4 px-5 py-3 text-base font-medium text-white bg-primary-600 rounded-lg" href="tel:500000000">
                    Zadzwoń teraz
                </a>
</div>
</div>
</header>
<main>

<section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
<div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">

<div className="lg:col-span-6 text-center lg:text-left z-10">
<div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-medium mb-6">
<span className="flex h-2 w-2 rounded-full bg-blue-600 mr-2 animate-pulse"></span>
                            Dostępny 24/7 w Twoim mieście
                        </div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tighter text-slate-900 mb-6 leading-tight">
                            Solidne usługi <br className="hidden lg:block"/>
<span className="text-primary-600">hydrauliczne</span> bez kompromisów.
                        </h1>
<p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-light">
                            Naprawy awarii, instalacje wodno-kanalizacyjne i modernizacje łazienek. 
                            Gwarancja jakości, terminowość i czysta praca.
                        </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
<a className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-white bg-primary-600 hover:bg-primary-700 rounded-lg transition-all shadow-md shadow-primary-600/20" href="tel:500000000">
                                Wezwij hydraulika
                            </a>
<a className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 hover:border-slate-300 rounded-lg transition-all" href="#services">
                                Zobacz ofertę
                            </a>
</div>

<div className="mt-10 flex items-center justify-center lg:justify-start gap-6 text-sm text-slate-500">
<div className="flex items-center gap-2">
<span className="iconify text-primary-600" data-icon="lucide:shield-check" data-width="18"></span>
                                Gwarancja na usługi
                            </div>
<div className="flex items-center gap-2">
<span className="iconify text-primary-600" data-icon="lucide:clock" data-width="18"></span>
                                Szybki dojazd
                            </div>
</div>
</div>

<div className="lg:col-span-6 mt-12 lg:mt-0 relative">
<div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-slate-200 border border-slate-200">
<img alt="Hydraulik przy pracy naprawiający instalację" className="w-full h-[500px] object-cover object-center" src="https://images.unsplash.com/photo-1581244277943-fe4a9c777189?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>

<div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-slate-100 max-w-xs">
<div className="flex items-start gap-3">
<div className="bg-green-100 p-2 rounded-lg text-green-600">
<span className="iconify" data-icon="lucide:star" data-width="20"></span>
</div>
<div>
<p className="font-semibold text-slate-900 text-sm">Zaufany Specjalista</p>
<p className="text-xs text-slate-500 mt-1">Ponad 15 lat doświadczenia w branży.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white border-y border-slate-100 py-12">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
<div>
<p className="text-3xl font-semibold tracking-tight text-slate-900">15+</p>
<p className="text-sm text-slate-500 mt-1">Lat doświadczenia</p>
</div>
<div>
<p className="text-3xl font-semibold tracking-tight text-slate-900">24/7</p>
<p className="text-sm text-slate-500 mt-1">Pogotowie</p>
</div>
<div>
<p className="text-3xl font-semibold tracking-tight text-slate-900">1000+</p>
<p className="text-sm text-slate-500 mt-1">Naprawionych awarii</p>
</div>
<div>
<p className="text-3xl font-semibold tracking-tight text-slate-900">100%</p>
<p className="text-sm text-slate-500 mt-1">Zadowolonych klientów</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="services">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-base font-semibold text-primary-600 uppercase tracking-wide mb-2">Oferta</h2>
<h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">Kompleksowe usługi hydrauliczne</h3>
<p className="text-slate-600 text-lg font-light">
                        Od drobnych napraw po skomplikowane instalacje. Pracuję na profesjonalnym sprzęcie i sprawdzonych materiałach.
                    </p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-primary-200 transition-all group">
<div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-primary-600 mb-6 group-hover:bg-primary-600 group-hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:wrench" data-width="24"></span>
</div>
<h4 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">Usuwanie awarii</h4>
<p className="text-slate-600 text-sm leading-relaxed">
                            Szybka reakcja na pęknięte rury, cieknące krany, zapchane odpływy i inne nagłe usterki. Działam sprawnie, by zminimalizować szkody.
                        </p>
</div>

<div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-primary-200 transition-all group">
<div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-primary-600 mb-6 group-hover:bg-primary-600 group-hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:droplets" data-width="24"></span>
</div>
<h4 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">Instalacje Wodne</h4>
<p className="text-slate-600 text-sm leading-relaxed">
                            Projektowanie i montaż nowych instalacji wodno-kanalizacyjnych w domach i mieszkaniach. Modernizacja starych pionów i podejść.
                        </p>
</div>

<div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-primary-200 transition-all group">
<div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-primary-600 mb-6 group-hover:bg-primary-600 group-hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:shower-head" data-width="24"></span>
</div>
<h4 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">Biały Montaż</h4>
<p className="text-slate-600 text-sm leading-relaxed">
                            Precyzyjny montaż umywalek, toalet, kabin prysznicowych, wanien i baterii. Dbałość o estetykę i szczelność połączeń.
                        </p>
</div>

<div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-primary-200 transition-all group">
<div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-primary-600 mb-6 group-hover:bg-primary-600 group-hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:flame" data-width="24"></span>
</div>
<h4 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">Ogrzewanie</h4>
<p className="text-slate-600 text-sm leading-relaxed">
                            Serwis i montaż grzejników, ogrzewania podłogowego oraz podłączanie pieców. Odpowietrzanie i regulacja układów CO.
                        </p>
</div>

<div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-primary-200 transition-all group">
<div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-primary-600 mb-6 group-hover:bg-primary-600 group-hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:washing-machine" data-width="24"></span>
</div>
<h4 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">Podłączanie AGD</h4>
<p className="text-slate-600 text-sm leading-relaxed">
                            Profesjonalne podłączenie pralek i zmywarek z wpisem do karty gwarancyjnej. Sprawdzenie szczelności i pierwsze uruchomienie.
                        </p>
</div>

<div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-primary-200 transition-all group">
<div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-primary-600 mb-6 group-hover:bg-primary-600 group-hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:settings-2" data-width="24"></span>
</div>
<h4 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">Przeglądy Okresowe</h4>
<p className="text-slate-600 text-sm leading-relaxed">
                            Kontrola stanu technicznego instalacji, wykrywanie wycieków kamerą termowizyjną i zapobieganie poważnym awariom.
                        </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white overflow-hidden" id="about">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="lg:grid lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1 relative">
<div className="grid grid-cols-2 gap-4">
<img alt="Naprawa rury" className="rounded-xl shadow-lg object-cover h-64 w-full" src="https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<img alt="Narzędzia hydrauliczne" className="rounded-xl shadow-lg object-cover h-64 w-full mt-8" src="https://images.unsplash.com/photo-1542013936693-884638332954?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute -z-10 top-10 -left-10 w-72 h-72 bg-primary-50 rounded-full blur-3xl opacity-50"></div>
</div>
<div className="order-1 lg:order-2 mb-12 lg:mb-0">
<h2 className="text-base font-semibold text-primary-600 uppercase tracking-wide mb-2">O mnie</h2>
<h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-6">Rzetelność, na której możesz polegać.</h3>
<div className="space-y-4 text-slate-600 font-light text-lg">
<p>
                                Jako lokalny hydraulik z wieloletnim stażem, rozumiem, jak stresująca może być awaria w domu. Dlatego moją misją jest nie tylko naprawa usterki, ale zapewnienie spokoju i bezpieczeństwa moim klientom.
                            </p>
<p>
                                Stawiam na transparentność – przed przystąpieniem do pracy zawsze przedstawiam wstępną wycenę i zakres działań. Nie używam półśrodków. Moja praca ma służyć przez lata, a nie tylko do momentu wyjścia za drzwi.
                            </p>
</div>
<ul className="mt-8 space-y-3">
<li className="flex items-center text-slate-700">
<span className="iconify text-green-500 mr-3" data-icon="lucide:check-circle-2" data-width="20"></span>
                                Uprawnienia i certyfikaty branżowe
                            </li>
<li className="flex items-center text-slate-700">
<span className="iconify text-green-500 mr-3" data-icon="lucide:check-circle-2" data-width="20"></span>
                                Własne zaplecze części zamiennych
                            </li>
<li className="flex items-center text-slate-700">
<span className="iconify text-green-500 mr-3" data-icon="lucide:check-circle-2" data-width="20"></span>
                                Czystość w miejscu pracy
                            </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="gallery">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
<div className="max-w-2xl">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">Wybrane realizacje</h2>
<p className="text-slate-600 font-light">Zobacz przykłady moich ostatnich prac. Od modernizacji kotłowni po estetyczne wykończenia łazienek.</p>
</div>
<a className="text-primary-600 font-medium hover:text-primary-700 flex items-center" href="#">
                        Zobacz więcej <span className="iconify ml-1" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="relative group overflow-hidden rounded-xl border border-slate-200">
<img alt="Montaż kranu" className="w-full h-72 object-cover transition duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
<p className="text-white font-medium">Montaż armatury łazienkowej</p>
</div>
</div>
<div className="relative group overflow-hidden rounded-xl border border-slate-200">
<img alt="Instalacja rur" className="w-full h-72 object-cover transition duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1585704032915-c3400ca199e7?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
<p className="text-white font-medium">Wymiana pionów wodnych</p>
</div>
</div>
<div className="relative group overflow-hidden rounded-xl border border-slate-200">
<img alt="Kotłownia" className="w-full h-72 object-cover transition duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
<p className="text-white font-medium">Modernizacja kotłowni</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="reviews">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-center text-slate-900 mb-16">Opinie Klientów</h2>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-slate-50 p-8 rounded-xl border border-slate-100 relative">
<span className="iconify text-primary-200 absolute top-6 right-6" data-icon="lucide:quote" data-width="48"></span>
<div className="flex items-center gap-1 text-yellow-400 mb-4">
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
</div>
<p className="text-slate-700 italic mb-6">"Pan Hydraulik przyjechał w niedzielę rano do pękniętej rury. Usterka usunięta w godzinę, bardzo czysto i profesjonalnie. Polecam!"</p>
<p className="font-semibold text-slate-900 text-sm">Marek Kowalski</p>
<p className="text-xs text-slate-500">Usługa: Awaria wodna</p>
</div>

<div className="bg-slate-50 p-8 rounded-xl border border-slate-100 relative">
<span className="iconify text-primary-200 absolute top-6 right-6" data-icon="lucide:quote" data-width="48"></span>
<div className="flex items-center gap-1 text-yellow-400 mb-4">
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
</div>
<p className="text-slate-700 italic mb-6">"Kompleksowy montaż łazienki w nowym mieszkaniu. Wszystko równo, estetycznie, zgodnie z projektem. Termin dotrzymany."</p>
<p className="font-semibold text-slate-900 text-sm">Anna Nowak</p>
<p className="text-xs text-slate-500">Usługa: Biały montaż</p>
</div>

<div className="bg-slate-50 p-8 rounded-xl border border-slate-100 relative">
<span className="iconify text-primary-200 absolute top-6 right-6" data-icon="lucide:quote" data-width="48"></span>
<div className="flex items-center gap-1 text-yellow-400 mb-4">
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
</div>
<p className="text-slate-700 italic mb-6">"Świetny kontakt i fachowe doradztwo przy wymianie grzejników. Cenowo bardzo przystępnie jak na taką jakość usługi."</p>
<p className="font-semibold text-slate-900 text-sm">Piotr Wiśniewski</p>
<p className="text-xs text-slate-500">Usługa: Ogrzewanie</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white relative overflow-hidden">

<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#64748b 1px, transparent 1px)', backgroundSize: '32px 32px'}}></div>
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6">Masz problem z hydrauliką?</h2>
<p className="text-slate-300 text-lg mb-10 font-light max-w-2xl mx-auto">
                    Nie czekaj aż mała usterka stanie się dużym problemem. Zadzwoń i umów wizytę. Wycena telefoniczna gratis.
                </p>
<div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/10 inline-block w-full max-w-md">
<p className="text-sm text-slate-300 uppercase tracking-widest mb-2">Telefon kontaktowy</p>
<a className="text-4xl md:text-5xl font-bold tracking-tight text-white hover:text-primary-400 transition-colors block mb-4" href="tel:500000000">
                        500 000 000
                    </a>
<div className="flex items-center justify-center gap-2 text-green-400 text-sm font-medium">
<span className="flex h-2 w-2 rounded-full bg-green-500"></span>
                        Dzwonisz bezpośrednio do hydraulika
                    </div>
</div>
</div>
</section>
</main>

<footer className="bg-white border-t border-slate-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="md:col-span-1">
<div className="flex items-center gap-2 mb-4">
<span className="iconify text-primary-600" data-icon="lucide:wrench" data-width="24"></span>
<span className="font-semibold text-xl tracking-tight text-slate-900">PRO<span className="text-primary-600">HYDRAULIK</span></span>
</div>
<p className="text-slate-500 text-sm leading-relaxed">
                        Profesjonalne usługi hydrauliczne dla klientów indywidualnych i firm. Gwarancja jakości i rzetelności.
                    </p>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4 text-sm uppercase tracking-wide">Oferta</h4>
<ul className="space-y-2 text-sm text-slate-600">
<li><a className="hover:text-primary-600 transition-colors" href="#">Usuwanie awarii</a></li>
<li><a className="hover:text-primary-600 transition-colors" href="#">Instalacje wodne</a></li>
<li><a className="hover:text-primary-600 transition-colors" href="#">Biały montaż</a></li>
<li><a className="hover:text-primary-600 transition-colors" href="#">Ogrzewanie</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4 text-sm uppercase tracking-wide">Obszar działania</h4>
<ul className="space-y-2 text-sm text-slate-600">
<li className="flex items-center gap-2"><span className="iconify text-primary-600" data-icon="lucide:map-pin" data-width="14"></span> Warszawa</li>
<li className="flex items-center gap-2"><span className="iconify text-primary-600" data-icon="lucide:map-pin" data-width="14"></span> Piaseczno</li>
<li className="flex items-center gap-2"><span className="iconify text-primary-600" data-icon="lucide:map-pin" data-width="14"></span> Pruszków</li>
<li className="flex items-center gap-2"><span className="iconify text-primary-600" data-icon="lucide:map-pin" data-width="14"></span> Okolice</li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4 text-sm uppercase tracking-wide">Dane firmy</h4>
<ul className="space-y-2 text-sm text-slate-600">
<li>ProHydraulik Jan Kowalski</li>
<li>ul. Przykładowa 12/3</li>
<li>00-001 Miasto</li>
<li>NIP: 000-000-00-00</li>
<li className="mt-4">
<a className="text-primary-600 font-medium hover:underline" href="mailto:kontakt@prohydraulik.pl">kontakt@prohydraulik.pl</a>
</li>
</ul>
</div>
</div>
<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-400">
                    © 2023 ProHydraulik. Wszelkie prawa zastrzeżone.
                </p>
<div className="flex gap-6">
<a className="text-xs text-slate-400 hover:text-slate-600 transition-colors" href="#">Polityka Prywatności</a>
<a className="text-xs text-slate-400 hover:text-slate-600 transition-colors" href="#">Regulamin</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
