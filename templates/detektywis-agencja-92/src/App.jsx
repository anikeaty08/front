import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
brand: {
dark: '#0F0F12',
light: '#F0EDE8',
blue: '#1E3A5F',
blueDark: '#0D1A2B',
gold: '#C9A84C',
gray: '#1A1A1E',
border: '#2A2A30'
}
},
fontFamily: {
serif: ['"Cormorant Garamond"', 'serif'],
sans: ['"Outfit"', 'sans-serif'],
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="grain-overlay"></div>


<header className="fixed w-full top-0 z-40 bg-brand-dark/90 backdrop-blur-md border-b border-brand-border">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="font-serif tracking-[0.2em] text-xl font-medium" href="#">V E R I T A S</a>
<nav className="hidden md:flex gap-8 text-sm text-gray-400">
<a className="hover:text-brand-light transition-colors" href="#uslugi">Usługi</a>
<a className="hover:text-brand-light transition-colors" href="#o-nas">O nas</a>
<a className="hover:text-brand-light transition-colors" href="#proces">Proces</a>
<a className="hover:text-brand-light transition-colors" href="#kontakt">Kontakt</a>
</nav>
<div className="flex items-center gap-4">
<a className="hidden md:flex items-center gap-2 text-sm text-brand-gold hover:text-white transition-colors" href="#akademia">
                    Akademia <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="1.2em"></iconify-icon>
</a>
<button className="md:hidden text-2xl text-brand-light">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</header>

<section className="relative min-h-screen flex items-center pt-20 overflow-hidden">

<div className="absolute top-1/4 -right-1/4 w-[50vw] h-[50vw] bg-brand-blue/10 rounded-full blur-[120px] pointer-events-none"></div>
<div className="absolute bottom-0 -left-1/4 w-[40vw] h-[40vw] bg-brand-gold/5 rounded-full blur-[100px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
<div className="max-w-3xl">
<div className="flex items-center gap-3 mb-6">
<div className="w-8 h-[1px] bg-brand-gold"></div>
<span className="text-xs tracking-widest uppercase text-brand-gold font-medium">Licencjonowana Agencja</span>
</div>
<h1 className="font-serif text-5xl md:text-7xl tracking-tight font-medium leading-[1.1] mb-8">
                    Dyskrecja.<br/>Skuteczność.<br/>
<span className="text-brand-light/40">Dowody.</span>
</h1>
<p className="text-lg text-gray-400 mb-10 max-w-xl font-light leading-relaxed">
                    Dostarczamy bezsporne fakty tam, gdzie inni widzą tylko domysły. Profesjonalny wywiad, obserwacja i analiza dla biznesu oraz klientów indywidualnych.
                </p>
<div className="flex flex-wrap gap-4">
<a className="bg-brand-gold text-brand-dark px-8 py-3.5 text-sm font-medium hover:bg-white transition-colors flex items-center gap-2" href="#kontakt">
                        Skontaktuj się <iconify-icon icon="solar:arrow-right-up-linear" width="1.2em"></iconify-icon>
</a>
<a className="border border-brand-border text-brand-light px-8 py-3.5 text-sm font-medium hover:border-brand-light transition-colors" href="#uslugi">
                        Zobacz usługi
                    </a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-brand-gray relative" id="uslugi">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div>
<h2 className="font-serif text-4xl tracking-tight font-medium mb-4">Obszary Działania</h2>
<p className="text-sm text-gray-400 max-w-md">Nasze usługi są ściśle dopasowane do specyfiki sprawy, zapewniając maksymalną efektywność i bezpieczeństwo.</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-brand-border">

<div className="bg-brand-gray p-10 group hover:bg-brand-dark transition-colors duration-300 relative overflow-hidden">
<div className="absolute inset-0 border-b-2 border-brand-gold transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
<iconify-icon className="text-3xl text-brand-gold mb-6 block" icon="solar:eye-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="font-serif text-xl tracking-tight font-medium mb-3 group-hover:text-brand-gold transition-colors">Obserwacja</h3>
<p className="text-sm text-gray-500 leading-relaxed">Dyskretne dokumentowanie aktywności osób, miejsc i pojazdów. Dostarczamy rzetelny materiał foto/wideo.</p>
</div>

<div className="bg-brand-gray p-10 group hover:bg-brand-dark transition-colors duration-300 relative overflow-hidden">
<div className="absolute inset-0 border-b-2 border-brand-gold transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
<iconify-icon className="text-3xl text-brand-gold mb-6 block" icon="solar:buildings-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="font-serif text-xl tracking-tight font-medium mb-3 group-hover:text-brand-gold transition-colors">Wywiad Gospodarczy</h3>
<p className="text-sm text-gray-500 leading-relaxed">Weryfikacja kontrahentów, badanie powiązań kapitałowych, analiza wiarygodności finansowej.</p>
</div>

<div className="bg-brand-gray p-10 group hover:bg-brand-dark transition-colors duration-300 relative overflow-hidden">
<div className="absolute inset-0 border-b-2 border-brand-gold transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
<iconify-icon className="text-3xl text-brand-gold mb-6 block" icon="solar:users-group-two-rounded-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="font-serif text-xl tracking-tight font-medium mb-3 group-hover:text-brand-gold transition-colors">Sprawy Rodzinne</h3>
<p className="text-sm text-gray-500 leading-relaxed">Gromadzenie dowodów w sprawach rozwodowych, ustalanie źródeł dochodu, weryfikacja opieki nad dziećmi.</p>
</div>

<div className="bg-brand-gray p-10 group hover:bg-brand-dark transition-colors duration-300 relative overflow-hidden">
<div className="absolute inset-0 border-b-2 border-brand-gold transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
<iconify-icon className="text-3xl text-brand-gold mb-6 block" icon="solar:global-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="font-serif text-xl tracking-tight font-medium mb-3 group-hover:text-brand-gold transition-colors">Biały Wywiad (OSINT)</h3>
<p className="text-sm text-gray-500 leading-relaxed">Zaawansowane poszukiwanie i analiza informacji w otwartych źródłach, darknecie i rejestrach publicznych.</p>
</div>

<div className="bg-brand-gray p-10 group hover:bg-brand-dark transition-colors duration-300 relative overflow-hidden">
<div className="absolute inset-0 border-b-2 border-brand-gold transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
<iconify-icon className="text-3xl text-brand-gold mb-6 block" icon="solar:user-check-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="font-serif text-xl tracking-tight font-medium mb-3 group-hover:text-brand-gold transition-colors">Weryfikacja Pracowników</h3>
<p className="text-sm text-gray-500 leading-relaxed">Sprawdzanie przeszłości zawodowej (background screening), wykrywanie nielojalności i kradzieży.</p>
</div>

<div className="bg-brand-gray p-10 group hover:bg-brand-dark transition-colors duration-300 relative overflow-hidden">
<div className="absolute inset-0 border-b-2 border-brand-gold transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
<iconify-icon className="text-3xl text-brand-gold mb-6 block" icon="solar:lock-keyhole-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="font-serif text-xl tracking-tight font-medium mb-3 group-hover:text-brand-gold transition-colors">TCSM / Anty podsłuch</h3>
<p className="text-sm text-gray-500 leading-relaxed">Fizyczne i elektroniczne przeszukiwanie pomieszczeń, biur i pojazdów pod kątem urządzeń inwigilacyjnych.</p>
</div>
</div>
</div>
</section>

<section className="py-20 border-y border-brand-border bg-brand-dark">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center md:text-left">
<div>
<div className="font-serif text-4xl md:text-5xl text-brand-gold font-medium tracking-tight mb-2">15+</div>
<div className="text-xs text-gray-400 uppercase tracking-widest">Lat doświadczenia</div>
</div>
<div>
<div className="font-serif text-4xl md:text-5xl text-brand-gold font-medium tracking-tight mb-2">800+</div>
<div className="text-xs text-gray-400 uppercase tracking-widest">Zakończonych spraw</div>
</div>
<div>
<div className="font-serif text-4xl md:text-5xl text-brand-gold font-medium tracking-tight mb-2">100%</div>
<div className="text-xs text-gray-400 uppercase tracking-widest">Dyskrecji</div>
</div>
<div>
<div className="flex items-center justify-center md:justify-start gap-3 h-full">
<iconify-icon className="text-3xl text-brand-border" icon="solar:shield-check-linear" strokeWidth="1"></iconify-icon>
<div className="text-xs text-gray-400 text-left">
                            Wpis do rejestru MSWiA<br/>
                            Licencja nr 0001234
                        </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24" id="o-nas">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div className="relative">
<div className="aspect-[3/4] bg-brand-gray border border-brand-border relative z-10 p-6 flex flex-col justify-end">

<div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 to-transparent z-10"></div>
<div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjMGYwZjEyIiBmaWxsLW9wYWNpdHk9IjEiLz4KPHBhdGggZD0iTTAgMGg0djRIMG00IDRoNHY0SDR6IiBmaWxsPSIjMWExYTFlIiBmaWxsLW9wYWNpdHk9IjEiLz4KPC9zdmc+')]"></div>
<div className="relative z-20">
<h3 className="font-serif text-2xl tracking-tight">K. W.</h3>
<p className="text-xs text-brand-gold mt-1 uppercase tracking-widest">Główny Detektyw / Założyciel</p>
</div>
</div>

<div className="absolute -bottom-6 -right-6 w-full h-full border border-brand-border/50 z-0"></div>
</div>
<div>
<h2 className="font-serif text-4xl tracking-tight font-medium mb-6">Doświadczenie, któremu możesz zaufać.</h2>
<p className="text-sm text-gray-400 leading-relaxed mb-6">
                        Agencja VERITAS powstała z myślą o klientach wymagających najwyższych standardów operacyjnych. Nasz zespół tworzą licencjonowani detektywi, byli funkcjonariusze służb państwowych oraz analitycy z wieloletnim stażem.
                    </p>
<p className="text-sm text-gray-400 leading-relaxed mb-8">
                        Działamy w granicach prawa, ale nieszablonowo. Zdobyte przez nas dowody są pełnowartościowym materiałem w postępowaniach sądowych. Gwarantujemy całkowitą poufność na każdym etapie współpracy.
                    </p>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-sm">
<iconify-icon className="text-brand-gold" icon="solar:check-circle-linear"></iconify-icon> Zezwolenie MSWiA
                        </li>
<li className="flex items-center gap-3 text-sm">
<iconify-icon className="text-brand-gold" icon="solar:check-circle-linear"></iconify-icon> Polisa OC działalności
                        </li>
<li className="flex items-center gap-3 text-sm">
<iconify-icon className="text-brand-gold" icon="solar:check-circle-linear"></iconify-icon> Członek stowarzyszeń detektywistycznych
                        </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-brand-gray border-y border-brand-border overflow-hidden" id="proces">
<div className="max-w-7xl mx-auto px-6">
<h2 className="font-serif text-4xl tracking-tight font-medium mb-16 text-center">Jak pracujemy</h2>
<div className="relative">

<div className="hidden md:block absolute top-6 left-0 w-full border-t border-dashed border-gray-700 z-0"></div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-10 relative z-10">

<div className="bg-brand-dark border border-brand-border p-6 pt-10 relative">
<div className="absolute -top-6 left-6 w-12 h-12 bg-brand-gold text-brand-dark flex items-center justify-center font-serif text-xl font-medium">01</div>
<h3 className="font-serif text-xl tracking-tight mb-2">Konsultacja</h3>
<p className="text-xs text-gray-400 leading-relaxed">Bezpłatne, dyskretne spotkanie lub rozmowa telefoniczna w celu omówienia problemu.</p>
</div>

<div className="bg-brand-dark border border-brand-border p-6 pt-10 relative">
<div className="absolute -top-6 left-6 w-12 h-12 bg-brand-dark border border-brand-border text-brand-light flex items-center justify-center font-serif text-xl font-medium">02</div>
<h3 className="font-serif text-xl tracking-tight mb-2">Analiza</h3>
<p className="text-xs text-gray-400 leading-relaxed">Wstępne sprawdzenie, ocena ryzyka, dobór metod operacyjnych i wycena działań.</p>
</div>

<div className="bg-brand-dark border border-brand-border p-6 pt-10 relative">
<div className="absolute -top-6 left-6 w-12 h-12 bg-brand-dark border border-brand-border text-brand-light flex items-center justify-center font-serif text-xl font-medium">03</div>
<h3 className="font-serif text-xl tracking-tight mb-2">Realizacja</h3>
<p className="text-xs text-gray-400 leading-relaxed">Aktywne działania w terenie i analityczne, raportowanie na bieżąco o postępach.</p>
</div>

<div className="bg-brand-dark border border-brand-border p-6 pt-10 relative">
<div className="absolute -top-6 left-6 w-12 h-12 bg-brand-dark border border-brand-border text-brand-light flex items-center justify-center font-serif text-xl font-medium">04</div>
<h3 className="font-serif text-xl tracking-tight mb-2">Raport</h3>
<p className="text-xs text-gray-400 leading-relaxed">Przekazanie szczegółowego raportu pisemnego wraz z pełnym materiałem dowodowym.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24">
<div className="max-w-7xl mx-auto px-6">
<h2 className="font-serif text-4xl tracking-tight font-medium mb-16 text-center">Sprawdzeni w działaniu</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="p-8 border border-brand-border bg-brand-dark/50">
<iconify-icon className="text-3xl text-brand-border mb-4" icon="solar:quote-left-linear"></iconify-icon>
<p className="text-sm text-gray-300 italic mb-6">"Pełen profesjonalizm i niesamowita skuteczność. Raport, który otrzymałem, rozwiał wszelkie wątpliwości i był kluczowy w sądzie."</p>
<div className="text-xs font-medium uppercase tracking-wider text-brand-gold">— Klient Indywidualny</div>
</div>
<div className="p-8 border border-brand-border bg-brand-dark/50">
<iconify-icon className="text-3xl text-brand-border mb-4" icon="solar:quote-left-linear"></iconify-icon>
<p className="text-sm text-gray-300 italic mb-6">"Zleciliśmy wywiad przed dużą fuzją. Agencja dotarła do informacji, których nie znaleźli prawnicy. Pieniądze zainwestowane w usługę zwróciły się stukrotnie."</p>
<div className="text-xs font-medium uppercase tracking-wider text-brand-gold">— Zarząd Spółki S.A.</div>
</div>
<div className="p-8 border border-brand-border bg-brand-dark/50">
<iconify-icon className="text-3xl text-brand-border mb-4" icon="solar:quote-left-linear"></iconify-icon>
<p className="text-sm text-gray-300 italic mb-6">"Dyskrecja na najwyższym poziomie. Przez cały czas trwania obserwacji czułam, że moja sprawa jest w dobrych rękach."</p>
<div className="text-xs font-medium uppercase tracking-wider text-brand-gold">— Klientka Indywidualna</div>
</div>
</div>
</div>
</section>

<section className="bg-brand-blue py-16 border-y border-[#2a4a75]">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
<div>
<h2 className="font-serif text-3xl tracking-tight font-medium mb-2 text-white">Potrzebujesz pomocy?</h2>
<p className="text-sm text-[#8ba3c7]">Pierwsza konsultacja jest bezpłatna i w pełni poufna.</p>
</div>
<a className="bg-brand-gold text-brand-dark px-8 py-4 text-sm font-medium hover:bg-white transition-colors flex items-center gap-2 whitespace-nowrap" href="#kontakt">
                Rozpocznij współpracę
            </a>
</div>
</section>

<section className="py-24 bg-brand-dark" id="kontakt">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
<div>
<h2 className="font-serif text-4xl tracking-tight font-medium mb-6">Napisz do nas</h2>
<p className="text-sm text-gray-400 mb-10">Używamy bezpiecznych serwerów. Twoja wiadomość jest szyfrowana. Możesz podać pseudonim, jeśli wymagasz anonimowości na tym etapie.</p>
<form className="space-y-6">
<div className="grid grid-cols-2 gap-6">
<div>
<input className="w-full bg-transparent border-b border-gray-700 focus:border-brand-gold outline-none py-3 text-sm transition-colors placeholder-gray-600" placeholder="Imię / Pseudonim" type="text"/>
</div>
<div>
<input className="w-full bg-transparent border-b border-gray-700 focus:border-brand-gold outline-none py-3 text-sm transition-colors placeholder-gray-600" placeholder="Telefon" type="tel"/>
</div>
</div>
<div>
<input className="w-full bg-transparent border-b border-gray-700 focus:border-brand-gold outline-none py-3 text-sm transition-colors placeholder-gray-600" placeholder="Adres Email" type="email"/>
</div>
<div>
<select className="w-full bg-brand-dark border-b border-gray-700 focus:border-brand-gold outline-none py-3 text-sm transition-colors text-gray-400 appearance-none cursor-pointer">
<option value="">Wybierz temat...</option>
<option value="rodzinne">Sprawy rodzinne</option>
<option value="biznes">Wywiad gospodarczy</option>
<option value="osint">OSINT / Weryfikacja</option>
<option value="inne">Inne</option>
</select>
</div>
<div>
<textarea className="w-full bg-transparent border-b border-gray-700 focus:border-brand-gold outline-none py-3 text-sm transition-colors placeholder-gray-600 resize-none" placeholder="Krótki opis sytuacji..." rows="4"></textarea>
</div>
<div className="flex items-start gap-3 mt-4">
<input className="custom-checkbox mt-1" id="rodo" type="checkbox"/>
<label className="text-xs text-gray-500 leading-tight cursor-pointer" htmlFor="rodo">
                            Wyrażam zgodę na przetwarzanie moich danych osobowych w celu udzielenia odpowiedzi na zapytanie kontaktowe zgodnie z <a className="text-gray-300 underline" href="#">Polityką Prywatności</a>.
                        </label>
</div>
<button className="bg-brand-light text-brand-dark px-8 py-3.5 text-sm font-medium hover:bg-brand-gold transition-colors mt-4 w-full md:w-auto" type="submit">
                        Wyślij wiadomość
                    </button>
</form>
</div>
<div className="flex flex-col">
<div className="bg-brand-gray border border-brand-border p-8 mb-8">
<h3 className="font-serif text-2xl tracking-tight mb-6">Dane kontaktowe</h3>
<div className="space-y-4">
<div className="flex items-center gap-4 text-sm">
<iconify-icon className="text-brand-gold text-xl" icon="solar:phone-linear"></iconify-icon>
<span className="font-medium">+48 500 000 000</span>
</div>
<div className="flex items-center gap-4 text-sm">
<iconify-icon className="text-brand-gold text-xl" icon="solar:letter-linear"></iconify-icon>
<span>kontakt@veritas-agencja.pl</span>
</div>
<div className="flex items-center gap-4 text-sm">
<iconify-icon className="text-brand-gold text-xl" icon="solar:map-point-linear"></iconify-icon>
<span>ul. Złota 59, 00-120 Warszawa</span>
</div>
<div className="flex items-center gap-4 text-sm text-gray-500 pt-2">
<iconify-icon className="text-brand-border text-xl" icon="solar:clock-circle-linear"></iconify-icon>
<span>Dostępność: 24/7 dla spraw pilnych</span>
</div>
</div>
</div>

<div className="flex-grow bg-brand-border relative min-h-[200px] flex items-center justify-center overflow-hidden grayscale opacity-50">
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPjxwaGF0IGQ9Ik0wIDEwaDQwdk0wIDIwaDQwdk0wIDMwaDQwdk0xMCAwaHY0ME0yMCAwaHY0ME0zMCAwaHY0MCIgc3Ryb2tlPSIjM2QzZDRiIiBzdHJva2Utd2lkdGg9IjAuNSIvPjwvc3ZnPg==')]"></div>
<span className="text-xs tracking-widest uppercase text-gray-400 relative z-10 bg-brand-dark px-3 py-1 border border-brand-border">Mapa / Lokalizacja</span>
</div>
</div>
</div>
</section>

<div className="w-full h-px bg-gradient-to-r from-transparent via-brand-border to-transparent my-10" id="akademia"></div>

<div className="bg-brand-blueDark relative overflow-hidden pb-24">

<div className="border-b border-white/5 bg-[#0a1422]/80 backdrop-blur sticky top-0 z-30">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="font-serif tracking-[0.2em] text-sm text-white/50">V E R I T A S</span>
<span className="w-px h-4 bg-white/20"></span>
<span className="font-serif tracking-tight text-lg font-medium text-brand-light">AKADEMIA</span>
</div>
<div className="flex items-center gap-6">
<a className="text-xs uppercase tracking-widest text-white/70 hover:text-white transition-colors" href="#kursy">Katalog</a>
<div className="flex items-center gap-3">
<button className="text-white/70 hover:text-white"><iconify-icon className="text-xl" icon="solar:cart-large-minimalistic-linear"></iconify-icon></button>
<button className="text-xs border border-white/20 px-4 py-1.5 hover:bg-white/5 transition-colors">Logowanie</button>
</div>
</div>
</div>
</div>

<div className="max-w-7xl mx-auto px-6 pt-20 pb-16 text-center">
<span className="text-xs border border-brand-gold/30 text-brand-gold px-3 py-1 rounded-full mb-6 inline-block bg-brand-gold/5">Platforma E-learningowa</span>
<h2 className="font-serif text-4xl md:text-5xl tracking-tight font-medium mb-4 text-white">Zdobądź wiedzę. Rozwiń kompetencje.</h2>
<p className="text-sm text-[#8ba3c7] max-w-2xl mx-auto mb-10">Praktyczne kursy i szkolenia z zakresu detektywistyki, wywiadu jawnego (OSINT) oraz bezpieczeństwa biznesu, prowadzone przez ekspertów z branży.</p>
<div className="flex justify-center gap-8 border-t border-white/10 pt-8 max-w-3xl mx-auto">
<div className="text-center">
<div className="text-2xl text-white mb-1"><iconify-icon icon="solar:laptop-minimalistic-linear"></iconify-icon></div>
<div className="text-xs text-white/60 uppercase tracking-widest">Kursy Online</div>
</div>
<div className="text-center">
<div className="text-2xl text-white mb-1"><iconify-icon icon="solar:users-group-rounded-linear"></iconify-icon></div>
<div className="text-xs text-white/60 uppercase tracking-widest">Stacjonarne</div>
</div>
<div className="text-center">
<div className="text-2xl text-white mb-1"><iconify-icon icon="solar:diploma-linear"></iconify-icon></div>
<div className="text-xs text-white/60 uppercase tracking-widest">Certyfikaty</div>
</div>
</div>
</div>

<div className="max-w-7xl mx-auto px-6 mb-24" id="kursy">
<div className="flex justify-between items-end mb-8 border-b border-white/10 pb-4">
<h3 className="font-serif text-2xl tracking-tight text-white">Dostępne szkolenia</h3>
<div className="flex gap-2">
<select className="bg-transparent border border-white/20 text-xs text-white/70 py-1.5 px-3 outline-none">
<option className="bg-brand-blueDark">Wszystkie kategorie</option>
<option className="bg-brand-blueDark">OSINT</option>
<option className="bg-brand-blueDark">Prawo</option>
<option className="bg-brand-blueDark">Technika operacyjna</option>
</select>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-[#0f1b2d] border border-white/10 group flex flex-col hover:border-brand-gold/50 transition-colors">
<div className="aspect-video bg-[#152336] relative overflow-hidden flex items-center justify-center">
<iconify-icon className="text-5xl text-white/10" icon="solar:global-linear"></iconify-icon>
<div className="absolute top-3 left-3 bg-brand-gold text-brand-dark text-[10px] font-medium px-2 py-0.5 uppercase tracking-wider">Bestseller</div>
<div className="absolute bottom-3 right-3 bg-black/50 backdrop-blur text-white text-[10px] px-2 py-0.5 flex items-center gap-1">
<iconify-icon icon="solar:clock-circle-linear"></iconify-icon> 8h wideo
                        </div>
</div>
<div className="p-5 flex-grow flex flex-col">
<div className="flex gap-2 mb-3">
<span className="text-[10px] border border-white/20 text-white/60 px-2 py-0.5 rounded-full">Online</span>
<span className="text-[10px] border border-white/20 text-white/60 px-2 py-0.5 rounded-full">Dla początkujących</span>
</div>
<h4 className="font-serif text-lg text-white leading-snug mb-2 group-hover:text-brand-gold transition-colors">Podstawy Białego Wywiadu (OSINT)</h4>
<p className="text-xs text-[#8ba3c7] line-clamp-2 mb-4 flex-grow">Zdobądź umiejętności wyszukiwania i weryfikacji informacji w otwartych źródłach niezbędne w pracy analityka.</p>
<div className="flex items-center justify-between mt-auto pt-4 border-t border-white/10">
<span className="font-serif text-xl text-brand-gold">499 zł</span>
<button className="text-xs text-white hover:text-brand-gold flex items-center gap-1 transition-colors">Zobacz kurs <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></button>
</div>
</div>
</div>

<div className="bg-[#0f1b2d] border border-white/10 group flex flex-col hover:border-brand-gold/50 transition-colors">
<div className="aspect-video bg-[#152336] relative overflow-hidden flex items-center justify-center">
<iconify-icon className="text-5xl text-white/10" icon="solar:documents-linear"></iconify-icon>
<div className="absolute bottom-3 right-3 bg-black/50 backdrop-blur text-white text-[10px] px-2 py-0.5 flex items-center gap-1">
<iconify-icon icon="solar:calendar-linear"></iconify-icon> 2 Dni
                        </div>
</div>
<div className="p-5 flex-grow flex flex-col">
<div className="flex gap-2 mb-3">
<span className="text-[10px] border border-brand-gold/50 text-brand-gold px-2 py-0.5 rounded-full">Stacjonarne</span>
<span className="text-[10px] border border-white/20 text-white/60 px-2 py-0.5 rounded-full">Zaawansowany</span>
</div>
<h4 className="font-serif text-lg text-white leading-snug mb-2 group-hover:text-brand-gold transition-colors">Praktyka Obserwacji Terenowej</h4>
<p className="text-xs text-[#8ba3c7] line-clamp-2 mb-4 flex-grow">Szkolenie praktyczne w terenie z wykorzystaniem środków łączności i kamuflażu operacyjnego. Warszawa.</p>
<div className="flex items-center justify-between mt-auto pt-4 border-t border-white/10">
<span className="font-serif text-xl text-brand-gold">2400 zł</span>
<button className="text-xs text-white hover:text-brand-gold flex items-center gap-1 transition-colors">Zobacz kurs <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></button>
</div>
</div>
</div>

<div className="bg-[#0f1b2d] border border-white/10 group flex flex-col hover:border-brand-gold/50 transition-colors">
<div className="aspect-video bg-[#152336] relative overflow-hidden flex items-center justify-center">
<iconify-icon className="text-5xl text-white/10" icon="solar:scale-linear"></iconify-icon>
<div className="absolute bottom-3 right-3 bg-black/50 backdrop-blur text-white text-[10px] px-2 py-0.5 flex items-center gap-1">
<iconify-icon icon="solar:clock-circle-linear"></iconify-icon> 4h wideo
                        </div>
</div>
<div className="p-5 flex-grow flex flex-col">
<div className="flex gap-2 mb-3">
<span className="text-[10px] border border-white/20 text-white/60 px-2 py-0.5 rounded-full">Online</span>
<span className="text-[10px] border border-white/20 text-white/60 px-2 py-0.5 rounded-full">Prawo</span>
</div>
<h4 className="font-serif text-lg text-white leading-snug mb-2 group-hover:text-brand-gold transition-colors">Aspekty Prawne Usług Detektywistycznych</h4>
<p className="text-xs text-[#8ba3c7] line-clamp-2 mb-4 flex-grow">Granice prawa, RODO w pracy operacyjnej, przygotowanie sprawozdania na potrzeby postępowania sądowego.</p>
<div className="flex items-center justify-between mt-auto pt-4 border-t border-white/10">
<span className="font-serif text-xl text-brand-gold">299 zł</span>
<button className="text-xs text-white hover:text-brand-gold flex items-center gap-1 transition-colors">Zobacz kurs <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></button>
</div>
</div>
</div>
</div>
</div>

<div className="max-w-7xl mx-auto px-6 mb-24">
<div className="bg-[#0A1422] border border-white/5 flex flex-col lg:flex-row">
<div className="lg:w-2/3 p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-white/5">
<span className="text-[10px] uppercase tracking-widest text-brand-gold mb-2 block">Podgląd modułu kursu</span>
<h3 className="font-serif text-3xl text-white tracking-tight mb-6">Program Szkolenia: OSINT Masterclass</h3>

<div className="space-y-2">

<div className="border border-white/10 bg-white/[0.02]">
<button className="w-full text-left px-5 py-4 flex justify-between items-center text-sm text-white hover:bg-white/5 transition-colors cursor-pointer" onclick="this.nextElementSibling.classList.toggle('active'); this.querySelector('.icon').classList.toggle('rotate-180')">
<span className="font-medium">Moduł 1: Architektura poszukiwań i OPSEC</span>
<iconify-icon className="icon transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="accordion-content active"> 
<div className="accordion-inner px-5 pb-4 text-xs text-[#8ba3c7] space-y-2">
<div className="flex justify-between py-1 border-t border-white/5 pt-3">
<span className="flex items-center gap-2"><iconify-icon icon="solar:play-circle-linear"></iconify-icon> Podstawy operacyjnego bezpieczeństwa w sieci</span>
<span>15:20</span>
</div>
<div className="flex justify-between py-1">
<span className="flex items-center gap-2"><iconify-icon icon="solar:play-circle-linear"></iconify-icon> Konfiguracja środowiska wirtualnego (VM)</span>
<span>24:10</span>
</div>
<div className="flex justify-between py-1">
<span className="flex items-center gap-2"><iconify-icon icon="solar:file-text-linear"></iconify-icon> Materiały PDF i lista narzędzi</span>
<span></span>
</div>
</div>
</div>
</div>

<div className="border border-white/10 bg-white/[0.02]">
<button className="w-full text-left px-5 py-4 flex justify-between items-center text-sm text-white hover:bg-white/5 transition-colors cursor-pointer" onclick="this.nextElementSibling.classList.toggle('active'); this.querySelector('.icon').classList.toggle('rotate-180')">
<span className="font-medium">Moduł 2: Zaawansowane zapytania (Google Dorks)</span>
<iconify-icon className="icon transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="accordion-content">
<div className="accordion-inner px-5 pb-4 text-xs text-[#8ba3c7] space-y-2 pt-2 border-t border-white/5 mt-2">
                                    Treść modułu niedostępna w podglądzie.
                                </div>
</div>
</div>
</div>
</div>
<div className="lg:w-1/3 p-8 bg-[#0C1828]">
<div className="text-center mb-6">
<span className="font-serif text-3xl text-white block mb-2">999 zł</span>
<button className="w-full bg-brand-gold text-brand-dark py-3 text-sm font-medium hover:bg-white transition-colors mb-2">Dodaj do koszyka</button>
<span className="text-[10px] text-white/40">Płatność obsługuje Przelewy24 / Stripe</span>
</div>
<div className="space-y-4">
<h4 className="text-xs uppercase tracking-widest text-white/60 border-b border-white/10 pb-2">Co zyskasz</h4>
<ul className="text-xs text-[#8ba3c7] space-y-3">
<li className="flex gap-2"><iconify-icon className="text-brand-gold text-base shrink-0" icon="solar:check-read-linear"></iconify-icon> 12 godzin nagrań wideo w jakości 4K</li>
<li className="flex gap-2"><iconify-icon className="text-brand-gold text-base shrink-0" icon="solar:check-read-linear"></iconify-icon> Dożywotni dostęp do aktualizacji</li>
<li className="flex gap-2"><iconify-icon className="text-brand-gold text-base shrink-0" icon="solar:check-read-linear"></iconify-icon> Dostęp do zamkniętej grupy wsparcia</li>
<li className="flex gap-2"><iconify-icon className="text-brand-gold text-base shrink-0" icon="solar:check-read-linear"></iconify-icon> Imienny certyfikat ukończenia</li>
</ul>
</div>
</div>
</div>
</div>

<div className="max-w-7xl mx-auto px-6">
<div className="border-t border-white/10 pt-16">
<h3 className="font-serif text-xl text-white/50 tracking-tight mb-8 text-center md:text-left">Panel Studenta (Podgląd)</h3>
<div className="grid grid-cols-1 md:grid-cols-4 gap-6">

<div className="hidden md:block space-y-2">
<div className="bg-white/5 text-sm text-white px-4 py-2 border-l-2 border-brand-gold">Moje Kursy</div>
<div className="text-sm text-white/50 px-4 py-2 hover:text-white cursor-pointer">Certyfikaty</div>
<div className="text-sm text-white/50 px-4 py-2 hover:text-white cursor-pointer">Historia zamówień</div>
<div className="text-sm text-white/50 px-4 py-2 hover:text-white cursor-pointer">Ustawienia konta</div>
</div>

<div className="md:col-span-3 bg-[#0f1b2d] border border-white/10 p-6">
<div className="flex justify-between items-center mb-6">
<h4 className="text-sm font-medium text-white">W trakcie nauki</h4>
</div>
<div className="flex flex-col md:flex-row gap-6 items-center border border-white/5 p-4 bg-white/[0.01]">
<div className="w-24 h-16 bg-[#152336] flex items-center justify-center shrink-0">
<iconify-icon className="text-2xl text-white/20" icon="solar:global-linear"></iconify-icon>
</div>
<div className="flex-grow w-full">
<h5 className="text-sm text-white mb-1">Podstawy Białego Wywiadu (OSINT)</h5>
<div className="text-xs text-white/50 mb-3">Moduł 2: Zaawansowane zapytania</div>

<div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
<div className="bg-brand-gold w-[45%] h-full rounded-full"></div>
</div>
<div className="text-[10px] text-white/40 mt-1 text-right">Ukończono 45%</div>
</div>
<button className="bg-white/10 hover:bg-white/20 text-white text-xs px-4 py-2 transition-colors whitespace-nowrap shrink-0 border border-white/5">
                                Kontynuuj <iconify-icon className="inline align-text-bottom" icon="solar:play-bold"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</div>
</div>

<footer className="bg-[#09090a] border-t border-brand-border py-12">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
<div className="col-span-1 md:col-span-2">
<div className="font-serif tracking-[0.2em] text-lg font-medium text-brand-light mb-4">V E R I T A S</div>
<p className="text-xs text-gray-500 max-w-sm mb-6 leading-relaxed">
                        Licencjonowana Agencja Detektywistyczna &amp; Platforma Szkoleniowa. Zapewniamy rozwiązania z zakresu bezpieczeństwa, wywiadu oraz edukacji operacyjnej dla biznesu i klientów prywatnych.
                    </p>
<div className="flex gap-4">
<a className="text-gray-500 hover:text-brand-gold transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:link-circle-linear"></iconify-icon></a>
<a className="text-gray-500 hover:text-brand-gold transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:shield-warning-linear"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="text-sm text-brand-light font-medium mb-4">Agencja</h4>
<ul className="text-xs text-gray-500 space-y-2">
<li><a className="hover:text-brand-light transition-colors" href="#uslugi">Usługi detektywistyczne</a></li>
<li><a className="hover:text-brand-light transition-colors" href="#o-nas">O nas / Licencje</a></li>
<li><a className="hover:text-brand-light transition-colors" href="#proces">Proces współpracy</a></li>
<li><a className="hover:text-brand-light transition-colors" href="#kontakt">Kontakt i wycena</a></li>
</ul>
</div>
<div>
<h4 className="text-sm text-brand-light font-medium mb-4">Akademia</h4>
<ul className="text-xs text-gray-500 space-y-2">
<li><a className="hover:text-brand-light transition-colors" href="#kursy">Katalog kursów</a></li>
<li><a className="hover:text-brand-light transition-colors" href="#">Logowanie do panelu</a></li>
<li><a className="hover:text-brand-light transition-colors" href="#">Regulamin sklepu</a></li>
<li><a className="hover:text-brand-light transition-colors" href="#">Polityka zwrotów</a></li>
</ul>
</div>
</div>
<div className="border-t border-brand-border pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-gray-600">
<div>© 2023 VERITAS Agencja Detektywistyczna. Wszelkie prawa zastrzeżone.</div>
<div className="flex gap-4">
<a className="hover:text-gray-400" href="#">Polityka Prywatności</a>
<a className="hover:text-gray-400" href="#">Cookies / RODO</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
