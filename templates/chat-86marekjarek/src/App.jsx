import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
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
      

<header className="fixed top-0 w-full z-50 glass-card border-b-0 border-zinc-800/50">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="text-zinc-50 tracking-tighter font-medium text-lg uppercase" href="#">
                    P911
                </a>
<nav className="hidden md:flex gap-6 text-sm text-zinc-400 font-normal">
<a className="hover:text-zinc-50 transition-colors" href="#model">Model</a>
<a className="hover:text-zinc-50 transition-colors" href="#osiagi">Osiągi</a>
<a className="hover:text-zinc-50 transition-colors" href="#design">Design</a>
</nav>
</div>
<div className="flex items-center gap-4 text-sm">
<a className="hidden md:block text-zinc-400 hover:text-zinc-50 transition-colors font-normal" href="#">Zaloguj</a>
<a className="bg-zinc-50 text-zinc-950 px-4 py-2 rounded-full font-medium hover:bg-zinc-200 transition-colors" href="#">
                    Konfigurator
                </a>
</div>
</div>
</header>

<main className="flex-grow pt-16">
<section className="relative w-full h-[85vh] flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0 bg-zinc-950">
<img alt="Porsche 911 Silhouette" className="w-full h-full object-cover opacity-40 object-center" src="https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&amp;fit=crop&amp;q=80&amp;w=2400"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent"></div>
</div>
<div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl mx-auto mt-20">
<span className="text-zinc-400 font-medium text-xs tracking-widest uppercase mb-4">Generacja 992</span>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tighter text-zinc-50 mb-6 leading-tight">
                    Ponadczasowa ikona.
                </h1>
<p className="text-lg md:text-xl text-zinc-400 font-light max-w-2xl mb-10 leading-relaxed">
                    Czysta dynamika, niezrównany design. Poznaj nową definicję sportowego samochodu, która od dziesięcioleci wyznacza standardy.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="bg-zinc-50 text-zinc-950 px-6 py-3 rounded-full font-medium text-sm hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2" href="#">
                        Odkryj modele
                        <iconify-icon height="18" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
<a className="glass-card text-zinc-50 px-6 py-3 rounded-full font-medium text-sm hover:bg-zinc-800 transition-colors flex items-center justify-center gap-2" href="#">
                        Jazda próbna
                    </a>
</div>
</div>
</section>

<section className="py-24 relative" id="osiagi">
<div className="max-w-6xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl font-medium tracking-tight text-zinc-50 mb-4">Inżynieria emocji.</h2>
<p className="text-zinc-400 font-light text-base max-w-xl">
                        Sześciocylindrowy silnik w układzie bokser umieszczony z tyłu. Nisko położony środek ciężkości. Doskonała trakcja.
                    </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass-card p-8 rounded-2xl flex flex-col gap-6 hover:bg-zinc-800/30 transition-colors duration-500">
<div className="h-10 w-10 rounded-full bg-zinc-800/50 flex items-center justify-center text-zinc-50">
<iconify-icon height="24" icon="solar:tachometer-fast-linear" width="24"></iconify-icon>
</div>
<div>
<p className="text-zinc-400 text-sm font-normal mb-1">Przyspieszenie 0-100 km/h</p>
<p className="text-3xl font-medium tracking-tight text-zinc-50 flex items-baseline gap-1">
                                2.7 <span className="text-base font-light text-zinc-500">s</span>
</p>
</div>
<p className="text-xs text-zinc-500 font-light mt-auto">Z pakietem Sport Chrono (wersja Turbo S).</p>
</div>

<div className="glass-card p-8 rounded-2xl flex flex-col gap-6 hover:bg-zinc-800/30 transition-colors duration-500">
<div className="h-10 w-10 rounded-full bg-zinc-800/50 flex items-center justify-center text-zinc-50">
<iconify-icon height="24" icon="solar:bolt-linear" width="24"></iconify-icon>
</div>
<div>
<p className="text-zinc-400 text-sm font-normal mb-1">Maksymalna moc</p>
<p className="text-3xl font-medium tracking-tight text-zinc-50 flex items-baseline gap-1">
                                650 <span className="text-base font-light text-zinc-500">KM</span>
</p>
</div>
<p className="text-xs text-zinc-500 font-light mt-auto">Przy 6750 obr./min.</p>
</div>

<div className="glass-card p-8 rounded-2xl flex flex-col gap-6 hover:bg-zinc-800/30 transition-colors duration-500">
<div className="h-10 w-10 rounded-full bg-zinc-800/50 flex items-center justify-center text-zinc-50">
<iconify-icon height="24" icon="solar:routing-2-linear" width="24"></iconify-icon>
</div>
<div>
<p className="text-zinc-400 text-sm font-normal mb-1">Prędkość maksymalna</p>
<p className="text-3xl font-medium tracking-tight text-zinc-50 flex items-baseline gap-1">
                                330 <span className="text-base font-light text-zinc-500">km/h</span>
</p>
</div>
<p className="text-xs text-zinc-500 font-light mt-auto">Na torze wyścigowym.</p>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-zinc-900" id="design">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1 relative rounded-2xl overflow-hidden glass-card aspect-[4/3]">
<img alt="Porsche Interior/Detail" className="absolute inset-0 w-full h-full object-cover opacity-80" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-tr from-zinc-950/80 to-transparent"></div>
</div>
<div className="order-1 lg:order-2 flex flex-col items-start">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 mb-6">
<iconify-icon className="text-zinc-400" height="14" icon="solar:pen-linear" width="14"></iconify-icon>
<span className="text-xs font-medium text-zinc-300">Język Form</span>
</div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-zinc-50 mb-6 leading-tight">
                            Kształt, który definiuje sport motorowy.
                        </h2>
<p className="text-zinc-400 font-light text-base mb-6 leading-relaxed">
                            Sylwetka 911 jest nie do pomylenia z żadną inną. Opada łagodnie ku tyłowi, tworząc charakterystyczną linię dachu. Błotniki są wyraźnie zaakcentowane, podkreślając szerokość i moc ukrytą z tyłu.
                        </p>
<ul className="flex flex-col gap-4 mb-8 w-full">
<li className="flex items-start gap-3">
<iconify-icon className="text-zinc-500 mt-0.5" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="text-sm font-normal text-zinc-300">Wydłużona maska przednia z wyraźnymi przetłoczeniami.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-zinc-500 mt-0.5" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="text-sm font-normal text-zinc-300">Ciągły pas świetlny LED z tyłu, zintegrowany z napisem PORSCHE.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-zinc-500 mt-0.5" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="text-sm font-normal text-zinc-300">Klasyczne okrągłe reflektory z technologią Matrix LED.</span>
</li>
</ul>
<a className="text-zinc-50 text-sm font-medium flex items-center gap-2 hover:text-zinc-300 transition-colors group" href="#">
                            Zobacz galerię
                            <iconify-icon className="transform group-hover:translate-x-1 transition-transform" height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden flex items-center justify-center">
<div className="absolute inset-0 z-0 bg-zinc-900/50"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-zinc-800/20 rounded-full blur-3xl z-0"></div>
<div className="relative z-10 text-center max-w-2xl px-6 flex flex-col items-center">
<h2 className="text-4xl font-semibold tracking-tight text-zinc-50 mb-4">Stwórz własne 911.</h2>
<p className="text-zinc-400 font-light text-base mb-8">
                    Wybierz kolor, felgi, wnętrze i opcje wydajności. Twój wymarzony samochód sportowy jest na wyciągnięcie ręki.
                </p>
<a className="bg-zinc-50 text-zinc-950 px-8 py-4 rounded-full font-medium text-sm hover:bg-zinc-200 transition-colors shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:shadow-[0_0_60px_rgba(255,255,255,0.15)]" href="#">
                    Uruchom Konfigurator
                </a>
</div>
</section>
</main>

<footer className="border-t border-zinc-900 bg-zinc-950 pt-16 pb-8">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
<a className="text-zinc-50 tracking-tighter font-medium text-2xl uppercase" href="#">
                    P911
                </a>
<div className="flex gap-6">
<a className="text-zinc-400 hover:text-zinc-50 transition-colors" href="#"><iconify-icon height="24" icon="solar:map-point-linear" width="24"></iconify-icon></a>
<a className="text-zinc-400 hover:text-zinc-50 transition-colors" href="#"><iconify-icon height="24" icon="solar:letter-linear" width="24"></iconify-icon></a>
<a className="text-zinc-400 hover:text-zinc-50 transition-colors" href="#"><iconify-icon height="24" icon="solar:phone-linear" width="24"></iconify-icon></a>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-zinc-900 pt-8 mb-8">
<div className="flex flex-col gap-3">
<h4 className="text-zinc-50 text-sm font-medium mb-2">Modele</h4>
<a className="text-zinc-500 hover:text-zinc-300 text-xs font-light transition-colors" href="#">911 Carrera</a>
<a className="text-zinc-500 hover:text-zinc-300 text-xs font-light transition-colors" href="#">911 Targa</a>
<a className="text-zinc-500 hover:text-zinc-300 text-xs font-light transition-colors" href="#">911 Turbo</a>
<a className="text-zinc-500 hover:text-zinc-300 text-xs font-light transition-colors" href="#">911 GT3</a>
</div>
<div className="flex flex-col gap-3">
<h4 className="text-zinc-50 text-sm font-medium mb-2">Usługi</h4>
<a className="text-zinc-500 hover:text-zinc-300 text-xs font-light transition-colors" href="#">Porsche Exclusive Manufaktur</a>
<a className="text-zinc-500 hover:text-zinc-300 text-xs font-light transition-colors" href="#">Porsche Financial Services</a>
<a className="text-zinc-500 hover:text-zinc-300 text-xs font-light transition-colors" href="#">Porsche Approved</a>
</div>
<div className="flex flex-col gap-3">
<h4 className="text-zinc-50 text-sm font-medium mb-2">Firma</h4>
<a className="text-zinc-500 hover:text-zinc-300 text-xs font-light transition-colors" href="#">O nas</a>
<a className="text-zinc-500 hover:text-zinc-300 text-xs font-light transition-colors" href="#">Kariera</a>
<a className="text-zinc-500 hover:text-zinc-300 text-xs font-light transition-colors" href="#">Kontakt</a>
</div>
<div className="flex flex-col gap-3">
<h4 className="text-zinc-50 text-sm font-medium mb-2">Prawny</h4>
<a className="text-zinc-500 hover:text-zinc-300 text-xs font-light transition-colors" href="#">Polityka prywatności</a>
<a className="text-zinc-500 hover:text-zinc-300 text-xs font-light transition-colors" href="#">Ciasteczka</a>
<a className="text-zinc-500 hover:text-zinc-300 text-xs font-light transition-colors" href="#">Warunki użytkowania</a>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-zinc-900/50">
<p className="text-zinc-600 text-xs font-light">
                    © 2024 P911 Concept. Strona demonstracyjna.
                </p>
<div className="flex items-center gap-2 mt-4 md:mt-0">
<div className="w-2 h-2 rounded-full bg-emerald-500"></div>
<span className="text-zinc-500 text-xs font-light">System operacyjny</span>
</div>
</div>
</div>
</footer>

    </>
  );
}
