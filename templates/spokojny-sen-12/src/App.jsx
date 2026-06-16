import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
night: '#1B1F2A',
nightSurface: '#222738',
moon: '#F1F3F8',
moonDim: '#94A3B8',
gold: '#D6B98C',
goldHover: '#C4A87C',
teal: '#7DA6A1',
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
letterSpacing: {
tightest: '-0.02em',
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
      

<nav className="w-full py-6 px-6 md:px-12 flex justify-between items-center max-w-7xl mx-auto">
<div className="tracking-widest text-sm uppercase font-medium text-teal opacity-80">
            Nocna Regulacja
        </div>
<a className="text-gold hover:text-goldHover transition-colors duration-300 text-sm" href="#kup-teraz">
            Dostęp
        </a>
</nav>

<header className="md:py-24 grid grid-cols-1 md:grid-cols-2 bg-slate-950 w-full max-w-6xl mr-auto ml-auto pt-12 pr-6 pb-12 pl-6 gap-x-12 gap-y-12 items-center">

<div className="order-2 md:order-1 flex flex-col space-y-8 items-start">
<h1 className="md:text-5xl leading-[1.15] text-moon text-3xl font-medium tracking-tight">Audio, które pomaga Twojemu ciału wejść w tryb snu – <span className="text-teal opacity-90">bez analizowania, bez myślenia, bez wysiłku.</span></h1>
<p className="text-lg md:text-xl font-light text-moonDim leading-relaxed max-w-lg">
                Nie uczysz się spać. Pozwalasz ciału zasnąć. Wyłącz głowę i zrób miejsce na sen.
            </p>
<div className="pt-2">
<a className="inline-flex items-center justify-center hover:bg-goldHover text-night transition-all duration-300 transform hover:scale-[1.01] font-medium text-stone-50 bg-orange-700 rounded-full pt-4 pr-8 pb-4 pl-8" href="#kup-teraz">
  Zacznij dziś
</a>
<p className="mt-4 text-xs text-moonDim opacity-60 flex items-center gap-2">
<iconify-icon className="" icon="solar:shield-check-linear" width="16"></iconify-icon>
                    Bezpieczna płatność, natychmiastowy dostęp
                </p>
</div>
</div>

<div className="order-1 md:order-2 w-full aspect-square md:aspect-[4/3] bg-nightSurface rounded-2xl overflow-hidden relative group">

<div className="z-10 bg-gradient-to-b from-transparent to-[#161922]/80 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="w-full h-full flex items-center justify-center bg-[#2A3042]">
<iconify-icon className="text-teal opacity-20 w-24 h-24 text-[6rem] animate-pulse" icon="solar:moon-stars-linear" style={{animationDuration: '4s'}}></iconify-icon>
</div>

<div className="absolute bottom-4 right-4 z-20 bg-night/50 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-2">
<iconify-icon className="text-moonDim text-sm" icon="solar:volume-cross-linear"></iconify-icon>
</div>
</div>
</header>

<section className="w-full pt-20 pr-6 pb-20 pl-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl mr-auto ml-auto gap-x-16 gap-y-16 items-center">

<div className="hidden md:block w-full aspect-[4/5] bg-night rounded-xl overflow-hidden relative">
<div className="absolute inset-0 bg-gradient-to-tr from-night to-transparent opacity-80"></div>
<div className="flex opacity-30 w-full h-full items-center justify-center">

<div className="w-32 h-48 border border-moonDim/30 rounded-t-full"></div>
</div>
</div>

<div className="space-y-8">
<h2 className="text-2xl font-medium tracking-tight text-moon">Czy to brzmi znajomo?</h2>
<div className="space-y-6">
<div className="flex gap-4 items-start">
<iconify-icon className="text-teal shrink-0 mt-1 text-xl" icon="solar:check-circle-linear"></iconify-icon>
<p className="text-moonDim font-light">Funkcjonujesz normalnie w ciągu dnia, ale wieczorem nie potrafisz „wyłączyć głowy”.</p>
</div>
<div className="flex gap-4 items-start">
<iconify-icon className="text-teal shrink-0 mt-1 text-xl" icon="solar:check-circle-linear"></iconify-icon>
<p className="text-moonDim font-light">Czujesz napięcie w klatce piersiowej lub brzuchu, mimo zmęczenia.</p>
</div>
<div className="flex gap-4 items-start">
<iconify-icon className="text-teal shrink-0 mt-1 text-xl" icon="solar:check-circle-linear"></iconify-icon>
<p className="text-moonDim font-light">Długo zasypiasz lub wybudzasz się w nocy z gonitwą myśli.</p>
</div>
<div className="flex gap-4 items-start">
<iconify-icon className="text-teal shrink-0 mt-1 text-xl" icon="solar:check-circle-linear"></iconify-icon>
<p className="text-moonDim font-light">Jesteś osobą racjonalną, sceptyczną wobec skomplikowanych „technik”.</p>
</div>
</div>
</div>
</div>
</section>

<section className="text-center bg-slate-950 w-full pt-24 pr-6 pb-24 pl-6">
<div className="max-w-2xl mx-auto space-y-6">
<div className="mx-auto w-12 h-12 rounded-full border border-teal/30 flex items-center justify-center mb-6">
<iconify-icon className="text-teal text-xl" icon="solar:heart-pulse-linear"></iconify-icon>
</div>
<h2 className="text-2xl md:text-3xl font-medium tracking-tight text-moon">To nie jest Twoja wina</h2>
<p className="text-lg font-light text-moonDim">
                Twój układ nerwowy utknął w trybie działania. To reakcja fizjologiczna, nie błąd charakteru. Tutaj nie potrzebujesz analizy ani kolejnej edukacji. Potrzebujesz sygnału bezpieczeństwa.
            </p>
</div>
</section>

<section className="w-full max-w-6xl mr-auto ml-auto pt-16 pr-6 pb-16 pl-6">
<h2 className="text-moon text-2xl font-medium tracking-tight text-center mb-16">Prosty proces regulacji</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">

<div className="flex flex-col items-center text-center space-y-4 p-6 rounded-2xl hover:bg-nightSurface/50 transition-colors duration-500">
<div className="w-16 h-16 bg-nightSurface rounded-full flex items-center justify-center text-gold">
<iconify-icon className="text-3xl" icon="solar:play-circle-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-moon">1. Włączasz nagranie</h3>
<p className="text-sm font-light text-moonDim leading-relaxed">
                    Kładziesz się wygodnie. Nie musisz patrzeć w ekran. Wystarczy jeden przycisk.
                </p>
</div>

<div className="flex flex-col items-center text-center space-y-4 p-6 rounded-2xl hover:bg-nightSurface/50 transition-colors duration-500">
<div className="w-16 h-16 bg-nightSurface rounded-full flex items-center justify-center text-gold">
<iconify-icon className="text-3xl" height="30" icon="solar:headphones-round-sound-linear" style={{color: 'rgb(214, 185, 140)'}} width="30"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-moon">2. Słuchasz bez skupiania</h3>
<p className="text-sm font-light text-moonDim leading-relaxed">
                    Nie musisz się koncentrować. Głos i dźwięki prowadzą Cię automatycznie.
                </p>
</div>

<div className="flex flex-col items-center text-center space-y-4 p-6 rounded-2xl hover:bg-nightSurface/50 transition-colors duration-500">
<div className="w-16 h-16 bg-nightSurface rounded-full flex items-center justify-center text-gold">
<iconify-icon className="text-3xl" icon="solar:bed-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-moon">3. Ciało zwalnia</h3>
<p className="text-sm font-light text-moonDim leading-relaxed">
                    Oddech się pogłębia, napięcie opada. Zasypiasz naturalnie, bez walki.
                </p>
</div>
</div>
</section>

<section className="w-full pt-20 pr-6 pb-20 pl-6">
<div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

<div className="space-y-8">
<div className="space-y-2">
<h2 className="text-2xl font-medium tracking-tight text-moon">Pełny pakiet wyciszający</h2>
<p className="text-teal text-sm tracking-wide uppercase opacity-80">Natychmiastowy dostęp cyfrowy</p>
</div>
<ul className="space-y-4">
<li className="flex items-center justify-between p-4 bg-night rounded-lg border border-night/50 hover:border-teal/20 transition-colors">
<div className="flex items-center gap-3">
<iconify-icon className="text-moonDim" icon="solar:music-note-linear"></iconify-icon>
<span className="text-moon text-sm font-light">Głębokie Skanowanie Ciała</span>
</div>
<span className="text-xs text-moonDim font-mono">15 min</span>
</li>
<li className="flex items-center justify-between p-4 bg-night rounded-lg border border-night/50 hover:border-teal/20 transition-colors">
<div className="flex items-center gap-3">
<iconify-icon className="text-moonDim" icon="solar:music-note-linear"></iconify-icon>
<span className="text-moon text-sm font-light">Audio SOS: Wybudzenie w nocy</span>
</div>
<span className="text-xs text-moonDim font-mono">8 min</span>
</li>
<li className="flex items-center justify-between p-4 bg-night rounded-lg border border-night/50 hover:border-teal/20 transition-colors">
<div className="flex items-center gap-3">
<iconify-icon className="text-moonDim" icon="solar:music-note-linear"></iconify-icon>
<span className="text-moon text-sm font-light">Wieczorny Reset Układu Nerwowego</span>
</div>
<span className="text-xs text-moonDim font-mono">12 min</span>
</li>
<li className="flex items-center justify-between p-4 bg-night rounded-lg border border-night/50 hover:border-teal/20 transition-colors">
<div className="flex items-center gap-3">
<iconify-icon className="text-moonDim" icon="solar:music-note-linear"></iconify-icon>
<span className="text-moon text-sm font-light">4 nagrania tła (szum, deszcz, binaural)</span>
</div>
<span className="text-xs text-moonDim font-mono">60 min</span>
</li>
</ul>
</div>

<div className="bg-night p-8 rounded-3xl border border-moonDim/10 shadow-2xl relative">
<div className="absolute top-4 right-6 w-12 h-1 bg-nightSurface rounded-full"></div>
<div className="flex flex-col items-center space-y-8 mt-4">
<div className="w-40 h-40 rounded-full bg-gradient-to-br from-nightSurface to-[#151820] flex items-center justify-center shadow-inner border border-white/5">
<iconify-icon className="text-teal text-4xl ml-2" icon="solar:play-linear"></iconify-icon>
</div>
<div className="text-center space-y-1">
<p className="text-moon font-medium tracking-wide">Spokojna Noc</p>
<p className="text-xs text-moonDim">Ścieżka 01</p>
</div>

<div className="w-full space-y-2">
<div className="w-full h-1 bg-nightSurface rounded-full overflow-hidden">
<div className="w-1/3 h-full bg-teal rounded-full"></div>
</div>
<div className="flex justify-between text-[10px] text-moonDim font-mono opacity-50">
<span>04:20</span>
<span>15:00</span>
</div>
</div>

<div className="flex items-center gap-8 text-moonDim">
<iconify-icon className="text-xl" icon="solar:skip-previous-linear"></iconify-icon>
<iconify-icon className="text-4xl text-moon" icon="solar:pause-circle-linear"></iconify-icon>
<iconify-icon className="text-xl" icon="solar:skip-next-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="w-full py-20 px-6 max-w-6xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="p-8 rounded-2xl border border-teal/10 bg-gradient-to-br from-nightSurface/30 to-transparent">
<h3 className="text-lg font-medium text-teal mb-6 flex items-center gap-2">
<iconify-icon icon="solar:user-check-linear"></iconify-icon>
                    To jest dla Ciebie, jeśli:
                </h3>
<ul className="space-y-4 text-moonDim font-light text-sm leading-relaxed">
<li className="flex gap-3">
<span className="text-teal">•</span>
                        Szukasz praktycznego, fizycznego resetu dla ciała.
                    </li>
<li className="flex gap-3">
<span className="text-teal">•</span>
                        Jesteś zmęczony, ale pobudzony (tired but wired).
                    </li>
<li className="flex gap-3">
<span className="text-teal">•</span>
                        Chcesz zasypiać szybciej bez walki ze sobą.
                    </li>
</ul>
</div>

<div className="p-8 rounded-2xl border border-moonDim/10 opacity-70">
<h3 className="text-lg font-medium text-moonDim mb-6 flex items-center gap-2">
<iconify-icon icon="solar:user-cross-linear"></iconify-icon>
                    To NIE jest dla Ciebie, jeśli:
                </h3>
<ul className="space-y-4 text-moonDim font-light text-sm leading-relaxed">
<li className="flex gap-3">
<span>•</span>
                        Szukasz diagnozy medycznej lub terapii traumy.
                    </li>
<li className="flex gap-3">
<span>•</span>
                        Oczekujesz rozwoju duchowego czy ezoteryki.
                    </li>
<li className="flex gap-3">
<span>•</span>
                        Wierzysz, że istnieje jedna magiczna pigułka na wszystko.
                    </li>
</ul>
</div>
</div>
</section>

<section className="w-full py-24 px-6 bg-nightSurface relative overflow-hidden" id="kup-teraz">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-64 bg-teal/5 blur-[100px] rounded-full pointer-events-none"></div>
<div className="relative max-w-md mx-auto bg-night border border-moonDim/10 rounded-3xl p-10 text-center shadow-2xl">
<h3 className="text-xl font-medium text-moon mb-2">Pakiet Nocna Regulacja</h3>
<p className="text-moonDim font-light text-sm mb-8">Dostęp dożywotni do wszystkich nagrań</p>
<div className="flex items-center justify-center gap-1 mb-8">
<span className="text-4xl md:text-5xl font-medium text-moon tracking-tight">79 zł</span>
</div>
<ul className="space-y-3 mb-10 text-left pl-4 border-l border-teal/20">
<li className="text-sm text-moonDim font-light">Bez subskrypcji</li>
<li className="text-sm text-moonDim font-light">Natychmiastowy dostęp</li>
<li className="text-sm text-moonDim font-light">Słuchasz na dowolnym urządzeniu</li>
</ul>
<a className="block w-full py-4 bg-gold hover:bg-goldHover text-night font-medium rounded-xl transition-all duration-300 mb-4" href="#">
                Kup dostęp
            </a>
<p className="text-[10px] text-moonDim uppercase tracking-widest opacity-50">Jednorazowa płatność</p>
</div>
</section>

<section className="w-full py-20 px-6 max-w-3xl mx-auto">
<h2 className="text-2xl font-medium tracking-tight text-center mb-12 text-moon">Częste pytania</h2>
<div className="space-y-4">

<details className="group bg-nightSurface/30 border border-moonDim/10 rounded-xl overflow-hidden cursor-pointer transition-colors hover:bg-nightSurface/60">
<summary className="flex justify-between items-center p-6 text-moon font-medium select-none">
                    Czy to jest terapia?
                    <iconify-icon className="text-teal text-xl icon-rotate" icon="solar:add-circle-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-moonDim font-light leading-relaxed text-sm">
                    Nie. To narzędzie relaksacyjne i regulujące układ nerwowy. Nie zastępuje leczenia medycznego ani psychoterapii. Jeśli cierpisz na przewlekłą bezsenność o podłożu medycznym, skonsultuj się z lekarzem.
                </div>
</details>

<details className="group bg-nightSurface/30 border border-moonDim/10 rounded-xl overflow-hidden cursor-pointer transition-colors hover:bg-nightSurface/60">
<summary className="flex justify-between items-center p-6 text-moon font-medium select-none">
                    Czy muszę wykonywać jakieś ćwiczenia?
                    <iconify-icon className="text-teal text-xl icon-rotate" icon="solar:add-circle-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-moonDim font-light leading-relaxed text-sm">
                    Nie. Cały sens tego pakietu polega na tym, że nie musisz "robić" niczego aktywnie. Twoim zadaniem jest tylko włączyć nagranie i pozwolić ciału słuchać.
                </div>
</details>

<details className="group bg-nightSurface/30 border border-moonDim/10 rounded-xl overflow-hidden cursor-pointer transition-colors hover:bg-nightSurface/60">
<summary className="flex justify-between items-center p-6 text-moon font-medium select-none">
                    Czy mogę słuchać tego w środku nocy?
                    <iconify-icon className="text-teal text-xl icon-rotate" icon="solar:add-circle-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-moonDim font-light leading-relaxed text-sm">
                    Tak. Przygotowaliśmy specjalne nagranie "SOS" dedykowane właśnie momentom wybudzenia w nocy, które pomaga zatrzymać gonitwę myśli i wrócić do snu.
                </div>
</details>

<details className="group bg-nightSurface/30 border border-moonDim/10 rounded-xl overflow-hidden cursor-pointer transition-colors hover:bg-nightSurface/60">
<summary className="flex justify-between items-center p-6 text-moon font-medium select-none">
                    Czy to działa, gdy jestem bardzo zmęczony?
                    <iconify-icon className="text-teal text-xl icon-rotate" icon="solar:add-circle-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-moonDim font-light leading-relaxed text-sm">
                    Wtedy działa najlepiej. Kiedy jesteś "przemęczony" (overtired), Twój system nerwowy jest nadmiernie pobudzony. Audio pomaga go wyciszyć, aby zmęczenie mogło naturalnie przejść w sen.
                </div>
</details>
</div>
</section>

<footer className="w-full py-24 px-6 text-center bg-night border-t border-moonDim/5">
<div className="max-w-xl mx-auto space-y-8">
<h2 className="text-2xl md:text-3xl font-medium tracking-tight text-moon">
                Jeśli chcesz dziś zasnąć spokojniej<br/><span className="text-teal opacity-80">— ten pakiet jest gotowy.</span>
</h2>
<a className="inline-flex items-center justify-center px-10 py-4 bg-gold hover:bg-goldHover text-night font-medium rounded-full transition-all duration-300" href="#kup-teraz">
                Tak, chcę dostępu
            </a>
<div className="pt-12 text-[10px] text-moonDim/30 uppercase tracking-widest">
                © 2023 Nocna Regulacja. Wszelkie prawa zastrzeżone.
            </div>
</div>
</footer>

    </>
  );
}
