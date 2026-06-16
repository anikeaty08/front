import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        lucide.createIcons({
            attrs: {
                'stroke-width': 1.5
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 inset-x-0 z-50 bg-[#fafaf9]/80 backdrop-blur-md border-b border-slate-200/50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-20">

<div className="flex-shrink-0 flex items-center">
<a className="flex items-center" href="#">
<img alt="Namulis Logo" className="h-10 sm:h-12 w-auto object-contain" src="logo.png"/>
</a>
</div>

<nav className="hidden md:flex space-x-8">
<a className="text-base font-normal text-slate-600 hover:text-cyan-500 transition-colors" href="#video">VIDEO</a>
<a className="text-base font-normal text-slate-600 hover:text-cyan-500 transition-colors" href="#naryste">NARYSTĖ</a>
<a className="text-base font-normal text-slate-600 hover:text-cyan-500 transition-colors" href="#parduotuve">PARDUOTUVĖ</a>
<a className="text-base font-normal text-slate-600 hover:text-cyan-500 transition-colors" href="#apie">APIE</a>
</nav>

<div className="hidden md:flex items-center">
<a className="inline-flex items-center justify-center px-5 py-2.5 border border-transparent rounded-full shadow-sm text-base font-normal text-white bg-cyan-500 hover:bg-cyan-600 transition-colors" href="#">
                        Pradėti
                    </a>
</div>

<div className="flex items-center md:hidden">
<button className="text-slate-500 hover:text-slate-700 p-2" type="button">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</div>
</div>
</header>

<section className="relative pt-36 pb-24 lg:pt-52 lg:pb-36 overflow-hidden">

<div className="absolute top-0 inset-x-0 h-full overflow-hidden -z-10 pointer-events-none flex justify-center">
<div className="w-full max-w-7xl relative">
<div className="absolute -top-24 -left-24 w-96 h-96 bg-cyan-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
<div className="absolute top-12 -right-24 w-96 h-96 bg-lime-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
<div className="absolute -bottom-24 left-1/2 w-96 h-96 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
</div>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
<h1 className="sm:text-5xl lg:text-7xl leading-[1.1] text-4xl font-medium text-slate-900 tracking-tight max-w-4xl mr-auto ml-auto">
                Vieta, kur vakarai <br className="hidden sm:block"/>
<span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-lime-500">tampa ramesni</span>
</h1>
<p className="mt-8 text-xl sm:text-2xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                Istorijos, video, pasakos ir žaidimai vienoje vietoje — kad vaikui būtų lengviau nurimti, o jums — būti kartu.
            </p>
<p className="mt-5 text-base font-normal text-slate-500">
                Ne triukšmui. Ne skubėjimui. Tik tiek, kiek vaikui reikia nurimti.
            </p>
<div className="mt-12 flex justify-center gap-4">
<a className="inline-flex items-center justify-center hover:bg-cyan-600 transition-colors text-lg font-normal text-white bg-cyan-500 border-transparent border rounded-full pt-4 pr-8 pb-4 pl-8 shadow-sm" href="#">
                    Pradėti nemokamai
                </a>
</div>
</div>
</section>

<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10">
<div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8 sm:p-10">
<div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-x-0 lg:divide-x divide-slate-100">
<div className="flex flex-col items-center text-center lg:px-4">
<div className="h-12 w-12 rounded-full bg-lime-50 flex items-center justify-center text-lime-500 mb-4">
<i className="w-6 h-6" data-lucide="shield-check"></i>
</div>
<span className="text-sm sm:text-base font-normal text-slate-700">Jokių reklamų ar netinkamų vaizdų</span>
</div>
<div className="flex flex-col items-center text-center lg:px-4">
<div className="h-12 w-12 rounded-full bg-cyan-50 flex items-center justify-center text-cyan-500 mb-4">
<i className="w-6 h-6" data-lucide="credit-card"></i>
</div>
<span className="text-sm sm:text-base font-normal text-slate-700">Vienkartinis mokėjimas — ne prenumerata</span>
</div>
<div className="flex flex-col items-center text-center lg:px-4">
<div className="h-12 w-12 rounded-full bg-orange-50 flex items-center justify-center text-orange-500 mb-4">
<i className="w-6 h-6" data-lucide="users"></i>
</div>
<span className="text-sm sm:text-base font-normal text-slate-700">Sukurta su vaikų raidos specialistais</span>
</div>
<div className="flex flex-col items-center text-center lg:px-4">
<div className="h-12 w-12 rounded-full bg-amber-50 flex items-center justify-center text-amber-500 mb-4">
<i className="w-6 h-6" data-lucide="gift"></i>
</div>
<span className="text-sm sm:text-base font-normal text-slate-700">Dalis turinio prieinama nemokamai</span>
</div>
</div>
</div>
</div>

<section className="py-24 sm:py-32 overflow-hidden" id="apie">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<span className="text-sm font-medium tracking-wider text-cyan-500 uppercase">Kas yra Namulis?</span>
<h2 className="mt-4 text-3xl sm:text-4xl font-medium tracking-tight text-slate-900">Smagi erdvė jūsų vakarams</h2>
<p className="mt-6 text-xl text-slate-600 leading-relaxed">
                        Namulis — tai jauki erdvė šeimai, kur vakaro turinys surinktas į vieną vietą. Čia rasite video, pasakas, daineles ir idėjas, kurios padeda vakarą pasitikti ramiau.
                    </p>
</div>
<div className="grid gap-8">

<div className="flex gap-5">
<div className="flex-shrink-0 mt-1">
<div className="h-14 w-14 rounded-2xl bg-cyan-50 border border-cyan-100 flex items-center justify-center text-cyan-500">
<i className="w-7 h-7" data-lucide="moon"></i>
</div>
</div>
<div>
<h3 className="text-lg font-medium text-slate-900 tracking-tight">Ramus turinys</h3>
<p className="mt-2 text-base text-slate-600 leading-relaxed">Kruopščiai atrinkta, kad neperstimuliuotų vaikų prieš miegą.</p>
</div>
</div>

<div className="flex gap-5">
<div className="flex-shrink-0 mt-1">
<div className="h-14 w-14 rounded-2xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-500">
<i className="w-7 h-7" data-lucide="home"></i>
</div>
</div>
<div>
<h3 className="text-lg font-medium text-slate-900 tracking-tight">Viskas šeimai</h3>
<p className="mt-2 text-base text-slate-600 leading-relaxed">Pasakos, dainelės ir žaidimai struktūruotai vienoje vietoje.</p>
</div>
</div>

<div className="flex gap-5">
<div className="flex-shrink-0 mt-1">
<div className="h-14 w-14 rounded-2xl bg-lime-50 border border-lime-100 flex items-center justify-center text-lime-500">
<i className="w-7 h-7" data-lucide="star"></i>
</div>
</div>
<div>
<h3 className="text-lg font-medium text-slate-900 tracking-tight">Dalis prieinama nemokamai</h3>
<p className="mt-2 text-base text-slate-600 leading-relaxed">Išbandykite ir atraskite mėgstamiausius vaikų ritualus.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-slate-100" id="video">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
<div>
<span className="text-sm font-medium tracking-wider text-cyan-500 uppercase">Video biblioteka</span>
<h2 className="mt-4 text-3xl sm:text-4xl font-medium tracking-tight text-slate-900">Pirmam vakarui</h2>
<p className="mt-5 text-lg text-slate-600 max-w-xl">
                        Kartais užtenka vieno ramaus video, kad namuose įsivyrautų ramybė.
                    </p>
</div>
<a className="inline-flex items-center gap-2 text-base font-normal text-cyan-500 hover:text-cyan-600" href="#">
                    Visi video
                    <i className="w-5 h-5" data-lucide="arrow-right"></i>
</a>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

<div className="group cursor-pointer flex flex-col">
<div className="relative w-full aspect-video rounded-[2rem] bg-slate-100 overflow-hidden mb-5 border border-slate-200/60">
<div className="absolute inset-0 bg-cyan-900/0 group-hover:bg-cyan-900/5 transition-colors"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-16 h-16 rounded-full bg-white/90 shadow-sm backdrop-blur-sm flex items-center justify-center text-cyan-500 group-hover:scale-105 transition-transform duration-300">
<i className="w-8 h-8 ml-1" data-lucide="play"></i>
</div>
</div>
</div>
<div className="px-2">
<div className="flex items-center gap-3 mb-3">
<span className="text-sm font-normal text-slate-500">Žaidimas</span>
<span className="w-1 h-1 rounded-full bg-slate-300"></span>
<span className="text-sm font-normal text-lime-600 bg-lime-50 px-2.5 py-0.5 rounded-lg">Nemokamas</span>
<span className="w-1 h-1 rounded-full bg-slate-300"></span>
<span className="text-sm font-normal text-slate-500">1:39</span>
</div>
<h3 className="text-xl font-medium tracking-tight text-slate-900 mb-1 group-hover:text-cyan-500 transition-colors">Užsakomų sapnų pasaka</h3>
<p className="text-base text-slate-500 font-normal">Vakaro mokslai</p>
</div>
</div>

<div className="group cursor-pointer flex flex-col">
<div className="relative w-full aspect-video rounded-[2rem] bg-slate-100 overflow-hidden mb-5 border border-slate-200/60">
<div className="absolute inset-0 bg-cyan-900/0 group-hover:bg-cyan-900/5 transition-colors"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-16 h-16 rounded-full bg-white/90 shadow-sm backdrop-blur-sm flex items-center justify-center text-cyan-500 group-hover:scale-105 transition-transform duration-300">
<i className="w-8 h-8 ml-1" data-lucide="play"></i>
</div>
</div>
</div>
<div className="px-2">
<div className="flex items-center gap-3 mb-3">
<span className="text-sm font-normal text-slate-500">Pasaka</span>
<span className="w-1 h-1 rounded-full bg-slate-300"></span>
<span className="text-sm font-normal text-lime-600 bg-lime-50 px-2.5 py-0.5 rounded-lg">Nemokamas</span>
<span className="w-1 h-1 rounded-full bg-slate-300"></span>
<span className="text-sm font-normal text-slate-500">4:54</span>
</div>
<h3 className="text-xl font-medium tracking-tight text-slate-900 mb-1 group-hover:text-cyan-500 transition-colors">Žvaigždžių lopšinė</h3>
<p className="text-base text-slate-500 font-normal">Prieš miegą</p>
</div>
</div>

<div className="group cursor-pointer flex flex-col">
<div className="relative w-full aspect-video rounded-[2rem] bg-slate-100 overflow-hidden mb-5 border border-slate-200/60">
<div className="absolute inset-0 bg-cyan-900/0 group-hover:bg-cyan-900/5 transition-colors"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-16 h-16 rounded-full bg-white/90 shadow-sm backdrop-blur-sm flex items-center justify-center text-slate-400 group-hover:text-cyan-500 group-hover:scale-105 transition-all duration-300">
<i className="w-7 h-7" data-lucide="lock"></i>
</div>
</div>
</div>
<div className="px-2">
<div className="flex items-center gap-3 mb-3">
<span className="text-sm font-normal text-slate-500">Veikla</span>
<span className="w-1 h-1 rounded-full bg-slate-300"></span>
<span className="text-sm font-normal text-slate-500">3:26</span>
</div>
<h3 className="text-xl font-medium tracking-tight text-slate-900 mb-1 group-hover:text-cyan-500 transition-colors">Gyvatės daina</h3>
<p className="text-base text-slate-500 font-normal">Edukacija</p>
</div>
</div>

<div className="group cursor-pointer flex flex-col">
<div className="relative w-full aspect-video rounded-[2rem] bg-slate-100 overflow-hidden mb-5 border border-slate-200/60">
<div className="absolute inset-0 bg-cyan-900/0 group-hover:bg-cyan-900/5 transition-colors"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-16 h-16 rounded-full bg-white/90 shadow-sm backdrop-blur-sm flex items-center justify-center text-slate-400 group-hover:text-cyan-500 group-hover:scale-105 transition-all duration-300">
<i className="w-7 h-7" data-lucide="lock"></i>
</div>
</div>
</div>
<div className="px-2">
<div className="flex items-center gap-3 mb-3">
<span className="text-sm font-normal text-slate-500">Knyga</span>
<span className="w-1 h-1 rounded-full bg-slate-300"></span>
<span className="text-sm font-normal text-slate-500">5:12</span>
</div>
<h3 className="text-xl font-medium tracking-tight text-slate-900 mb-1 group-hover:text-cyan-500 transition-colors">Lietuva širdelėj</h3>
<p className="text-base text-slate-500 font-normal">Vakaro skaitiniai</p>
</div>
</div>

<div className="group cursor-pointer flex flex-col">
<div className="relative w-full aspect-video rounded-[2rem] bg-slate-100 overflow-hidden mb-5 border border-slate-200/60">
<div className="absolute inset-0 bg-cyan-900/0 group-hover:bg-cyan-900/5 transition-colors"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-16 h-16 rounded-full bg-white/90 shadow-sm backdrop-blur-sm flex items-center justify-center text-slate-400 group-hover:text-cyan-500 group-hover:scale-105 transition-all duration-300">
<i className="w-7 h-7" data-lucide="lock"></i>
</div>
</div>
</div>
<div className="px-2">
<div className="flex items-center gap-3 mb-3">
<span className="text-sm font-normal text-slate-500">Žaidimas</span>
<span className="w-1 h-1 rounded-full bg-slate-300"></span>
<span className="text-sm font-normal text-slate-500">2:45</span>
</div>
<h3 className="text-xl font-medium tracking-tight text-slate-900 mb-1 group-hover:text-cyan-500 transition-colors">Plauname rankas</h3>
<p className="text-base text-slate-500 font-normal">Vakaro ritualai</p>
</div>
</div>

<div className="group cursor-pointer flex flex-col">
<div className="relative w-full aspect-video rounded-[2rem] bg-slate-100 overflow-hidden mb-5 border border-slate-200/60">
<div className="absolute inset-0 bg-cyan-900/0 group-hover:bg-cyan-900/5 transition-colors"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-16 h-16 rounded-full bg-white/90 shadow-sm backdrop-blur-sm flex items-center justify-center text-slate-400 group-hover:text-cyan-500 group-hover:scale-105 transition-all duration-300">
<i className="w-7 h-7" data-lucide="lock"></i>
</div>
</div>
</div>
<div className="px-2">
<div className="flex items-center gap-3 mb-3">
<span className="text-sm font-normal text-slate-500">Pasaka</span>
<span className="w-1 h-1 rounded-full bg-slate-300"></span>
<span className="text-sm font-normal text-slate-500">4:10</span>
</div>
<h3 className="text-xl font-medium tracking-tight text-slate-900 mb-1 group-hover:text-cyan-500 transition-colors">Pelėnas ir peliukas</h3>
<p className="text-base text-slate-500 font-normal">Prieš miegą</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 sm:py-32">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<span className="text-sm font-medium tracking-wider text-cyan-500 uppercase">Sistema, kuri slypi už kiekvieno vakaro</span>
<h2 className="mt-4 text-3xl sm:text-4xl font-medium tracking-tight text-slate-900">Ne ekranas. Sistema.</h2>
<p className="mt-5 text-lg text-slate-600">
                    Tai, ką matote kaip video ar pasaką, iš tikrųjų yra apgalvota vaiko vystymosi metodika — sukurta tam, kad padėtų vaikui nurimti ir augti.
                </p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="bg-cyan-50/50 rounded-[2rem] p-8 border border-cyan-100/50 flex flex-col">
<div className="h-14 w-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-cyan-500 mb-6">
<i className="w-7 h-7" data-lucide="leaf"></i>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-3 tracking-tight">Ramybės metodika</h3>
<p className="text-base text-slate-600 leading-relaxed">
                        Lėtas tempas, mažiau dirgiklių, aiški pabaiga. Vaikas ne stimuliuojamas — jis nuraminamas.
                    </p>
</div>

<div className="bg-amber-50/50 rounded-[2rem] p-8 border border-amber-100/50 flex flex-col">
<div className="h-14 w-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-amber-500 mb-6">
<i className="w-7 h-7" data-lucide="gamepad-2"></i>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-3 tracking-tight">Žaidimo metodika</h3>
<p className="text-base text-slate-600 leading-relaxed">
                        Vaikas mokosi per veiklą ir patirtį, o ne per spaudimą ar taisykles.
                    </p>
</div>

<div className="bg-orange-50/50 rounded-[2rem] p-8 border border-orange-100/50 flex flex-col">
<div className="h-14 w-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-orange-500 mb-6">
<i className="w-7 h-7" data-lucide="wand-2"></i>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-3 tracking-tight">Vaizduotės metodika</h3>
<p className="text-base text-slate-600 leading-relaxed">
                        Istorijos padeda kurti vidinį pasaulį, kuris mažina nerimą ir stiprina savijautą.
                    </p>
</div>

<div className="bg-lime-50/50 rounded-[2rem] p-8 border border-lime-100/50 flex flex-col">
<div className="h-14 w-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-lime-500 mb-6">
<i className="w-7 h-7" data-lucide="user"></i>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-3 tracking-tight">Tapatulis</h3>
<p className="text-base text-slate-600 leading-relaxed">
                        Per pasakas ir kūno pažinimo žaidimus vaikas mokosi pats sau padėti atgauti balansą po visos dienos.
                    </p>
</div>
</div>
<div className="mt-14 text-center">
<a className="inline-flex items-center gap-2 text-base font-normal text-slate-600 hover:text-cyan-500 transition-colors" href="#">
                    Skaityti daugiau apie metodiką
                    <i className="w-5 h-5" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-slate-100" id="parduotuve">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<span className="text-sm font-medium tracking-wider text-cyan-500 uppercase">Maži dalykai, kurie lieka</span>
<h2 className="mt-4 text-3xl sm:text-4xl font-medium tracking-tight text-slate-900">Ne tik ekranui — bet ir kūrybai</h2>
<p className="mt-5 text-lg text-slate-600">
                    Be video bibliotekos Namulyje rasite ir kitų dalykų šeimai — knygas, žaislus ir rinkinius.
                </p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-10">

<div className="group flex flex-col items-center text-center">
<div className="w-full aspect-square rounded-[2.5rem] bg-orange-50 mb-8 flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-2 border border-orange-100/50">
<i className="w-14 h-14 text-orange-300" data-lucide="book"></i>
</div>
<h3 className="text-2xl font-medium tracking-tight text-slate-900 mb-3">Knygos</h3>
<p className="text-base text-slate-600 mb-5 px-6">
                        Kai video tampa pažįstamas, vaikas nori daugiau. Tada atsiranda knyga.
                    </p>
<a className="text-base font-normal text-orange-500 hover:text-orange-600 flex items-center gap-1.5" href="#">
                        Peržiūrėti <i className="w-5 h-5" data-lucide="arrow-right"></i>
</a>
</div>

<div className="group flex flex-col items-center text-center">
<div className="w-full aspect-square rounded-[2.5rem] bg-cyan-50 mb-8 flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-2 border border-cyan-100/50">
<i className="w-14 h-14 text-cyan-300" data-lucide="ghost"></i>
</div>
<h3 className="text-2xl font-medium tracking-tight text-slate-900 mb-3">Žaislai</h3>
<p className="text-base text-slate-600 mb-5 px-6">
                        Kai istorijos išeina iš ekrano, jos tampa žaidimu. Smalsioms rankutėms.
                    </p>
<a className="text-base font-normal text-cyan-500 hover:text-cyan-600 flex items-center gap-1.5" href="#">
                        Atrasti <i className="w-5 h-5" data-lucide="arrow-right"></i>
</a>
</div>

<div className="group flex flex-col items-center text-center">
<div className="w-full aspect-square rounded-[2.5rem] bg-lime-50 mb-8 flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-2 border border-lime-100/50">
<i className="w-14 h-14 text-lime-300" data-lucide="box"></i>
</div>
<h3 className="text-2xl font-medium tracking-tight text-slate-900 mb-3">Rinkiniai</h3>
<p className="text-base text-slate-600 mb-5 px-6">
                        Kortelės, ir kūrybinės priemonės, kurios lengvai įsilieja į vaikų dieną.
                    </p>
<a className="text-base font-normal text-lime-500 hover:text-lime-600 flex items-center gap-1.5" href="#">
                        Peržiūrėti <i className="w-5 h-5" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8" id="naryste">
<div className="max-w-6xl mx-auto bg-slate-900 rounded-[3rem] overflow-hidden shadow-xl">
<div className="grid grid-cols-1 lg:grid-cols-2">
<div className="p-12 sm:p-16 lg:p-24 flex flex-col justify-center">
<span className="text-sm font-medium tracking-wider text-cyan-400 uppercase">Narystė</span>
<h2 className="mt-4 text-3xl sm:text-4xl font-medium tracking-tight text-white mb-6">Viskas vienoje vietoje</h2>
<p className="text-lg text-slate-300 leading-relaxed mb-12">
                        Narystė suteikia prieigą prie visos premium bibliotekos. Tai paprastas būdas turėti smagų turinį po ranka, be papildomo ieškojimo.
                    </p>
<div className="space-y-10">
<div className="flex gap-5">
<div className="mt-1 flex-shrink-0 text-cyan-400">
<i className="w-7 h-7" data-lucide="play-circle"></i>
</div>
<div>
<h4 className="text-lg font-medium text-white tracking-tight">Visi video</h4>
<p className="text-base text-slate-400 mt-1">Prieiga prie visų pasakų, dainelių ir istorijų be jokių apribojimų.</p>
<a className="text-sm font-normal text-cyan-400 hover:text-cyan-300 mt-3 inline-block" href="#">Žiūrėti biblioteką →</a>
</div>
</div>
<div className="flex gap-5">
<div className="mt-1 flex-shrink-0 text-lime-400">
<i className="w-7 h-7" data-lucide="wallet"></i>
</div>
<div>
<h4 className="text-lg font-medium text-white tracking-tight">Vienkartinis mokėjimas</h4>
<p className="text-base text-slate-400 mt-1">Jokių nuolatinių prenumeratų ir paslėptų mokesčių. Įsigyjate visam laikui.</p>
<a className="text-sm font-normal text-lime-400 hover:text-lime-300 mt-3 inline-block" href="#">Kainodara →</a>
</div>
</div>
<div className="flex gap-5">
<div className="mt-1 flex-shrink-0 text-amber-400">
<i className="w-7 h-7" data-lucide="refresh-ccw"></i>
</div>
<div>
<h4 className="text-lg font-medium text-white tracking-tight">Su atnaujinimais</h4>
<p className="text-base text-slate-400 mt-1">Biblioteka automatiškai pasipildo naujais kūriniais, jums nieko papildomai nekainuojant.</p>
<a className="text-sm font-normal text-amber-400 hover:text-amber-300 mt-3 inline-block" href="#">Palyginti planus →</a>
</div>
</div>
</div>
</div>
<div className="bg-cyan-500 p-12 sm:p-16 lg:p-24 flex flex-col justify-center items-center text-center relative overflow-hidden">
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-50"></div>
<div className="relative z-10 w-full">
<div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-white/20 mb-10 backdrop-blur-sm">
<i className="w-12 h-12 text-white" data-lucide="star"></i>
</div>
<h3 className="text-3xl font-medium tracking-tight text-white mb-5">Atraskite ramesnius vakarus</h3>
<p className="text-cyan-50 mb-10 text-base max-w-xs mx-auto">Viena investicija į ilgalaikę ramybę ir vaiko tobulėjimą.</p>
<a className="block w-full py-4 px-8 bg-white text-cyan-900 rounded-full font-medium shadow-lg hover:bg-slate-50 transition-colors" href="#">
                            Rinktis narystę
                        </a>
<p className="mt-5 text-sm text-cyan-100">Saugus apmokėjimas. Vienkartinis mokestis.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 sm:py-32 px-4 text-center">
<div className="max-w-4xl mx-auto">
<i className="w-12 h-12 text-cyan-200 mb-10 mx-auto block" data-lucide="quote"></i>
<p className="text-2xl sm:text-3xl lg:text-4xl font-normal text-slate-700 leading-relaxed tracking-tight">
                Kai vaikai užmiega, namuose atsiranda tyla.<br className="hidden sm:block"/>
<span className="text-slate-400">Kartais užtenka visai nedaug. Trumpo pokalbio. Švelnaus prisilietimo. Buvimo kartu.</span>
</p>
</div>
</section>

<section className="py-24 bg-white border-t border-slate-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row gap-16 items-center">
<div className="w-full md:w-1/2 flex justify-center">
<div className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-[3.5rem] bg-orange-50 flex items-center justify-center rotate-3 border-[6px] border-white shadow-sm overflow-hidden">
<i className="w-24 h-24 text-orange-200 -rotate-3" data-lucide="user"></i>
</div>
</div>
<div className="w-full md:w-1/2">
<span className="text-sm font-medium tracking-wider text-orange-500 uppercase">Namulį kuria</span>
<h2 className="mt-4 text-3xl sm:text-4xl font-medium tracking-tight text-slate-900 mb-8">Sukurta su mamos meile</h2>
<p className="text-lg text-slate-600 mb-10 leading-relaxed">
                        Ilona — mama, kūrėja ir vizionierė, tikinti, kad vaikystė turi būti lėta, smagi ir magiška.
                    </p>
<ul className="space-y-6">
<li className="flex items-start gap-4">
<i className="w-7 h-7 text-orange-400 shrink-0 mt-0.5" data-lucide="check-circle"></i>
<div>
<strong className="text-base font-medium text-slate-900 block">Edukacinė vertė</strong>
<span className="text-base text-slate-600">Kiekvienas video kurtas tariantis su vaikų raidos specialistais.</span>
</div>
</li>
<li className="flex items-start gap-4">
<i className="w-7 h-7 text-orange-400 shrink-0 mt-0.5" data-lucide="check-circle"></i>
<div>
<strong className="text-base font-medium text-slate-900 block">Saugus turinys</strong>
<span className="text-base text-slate-600">Jokių iššokančių reklamų ar netinkamų vaizdų.</span>
</div>
</li>
<li className="flex items-start gap-4">
<i className="w-7 h-7 text-orange-400 shrink-0 mt-0.5" data-lucide="check-circle"></i>
<div>
<strong className="text-base font-medium text-slate-900 block">Sukurta vaikams</strong>
<span className="text-base text-slate-600">Nuo pirmos natos iki paskutinio kadro — su mamos rūpesčiu.</span>
</div>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 sm:py-32 bg-slate-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<span className="text-sm font-medium tracking-wider text-cyan-500 uppercase">Atsiliepimai</span>
<h2 className="mt-4 text-3xl sm:text-4xl font-medium tracking-tight text-slate-900">Ką sako šeimos?</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100 flex flex-col h-full">
<i className="w-8 h-8 text-cyan-200 mb-8" data-lucide="message-square-heart"></i>
<p className="text-base text-slate-700 leading-relaxed mb-10 flex-grow">
                        "Vakarai pasikeitė nuo pirmo video. Dukra pati prašo — mama, paleisk tą su mėnuliu. Ir aš žinau, kad po 5 minučių ji bus rami."
                    </p>
<div>
<p className="text-base font-medium text-slate-900">Jurgita</p>
<p className="text-sm text-slate-500">Mama, dukrai 3 m.</p>
</div>
</div>

<div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100 flex flex-col h-full">
<i className="w-8 h-8 text-cyan-200 mb-8" data-lucide="message-square-heart"></i>
<p className="text-base text-slate-700 leading-relaxed mb-10 flex-grow">
                        "Pagaliau turinys, kuris neskatina bėgioti po kambarį. Sūnus žiūri ramiai, o mes turime 15 minučių sau. Tai daugiau nei žaislas."
                    </p>
<div>
<p className="text-base font-medium text-slate-900">Tomas</p>
<p className="text-sm text-slate-500">Tėvas, sūnui 5 m.</p>
</div>
</div>

<div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100 flex flex-col h-full">
<i className="w-8 h-8 text-cyan-200 mb-8" data-lucide="message-square-heart"></i>
<p className="text-base text-slate-700 leading-relaxed mb-10 flex-grow">
                        "Naudoju kaip vakaro ritualą darželyje. Vaikai nurimsta per kelias minutes. Rekomenduoju visoms kolegėms ir tėvams."
                    </p>
<div>
<p className="text-base font-medium text-slate-900">Rasa</p>
<p className="text-sm text-slate-500">Auklėtoja</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-4 sm:px-6 lg:px-8">
<div className="max-w-4xl mx-auto bg-gradient-to-br from-cyan-100 to-lime-50 rounded-[3.5rem] p-12 sm:p-24 text-center border border-white shadow-sm">
<h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-slate-900 mb-5">Pradėkite nuo vieno vakaro</h2>
<p className="text-lg text-slate-600 mb-12 max-w-lg mx-auto">
                Kartais pakanka vienos istorijos, kad vakaras pasikeistų. Žiūrėkite nemokamus video, o vėliau atrakinkite visą biblioteką.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-5">
<a className="w-full sm:w-auto px-10 py-4 border border-transparent rounded-full shadow-sm text-base font-normal text-white bg-cyan-500 hover:bg-cyan-600 transition-colors" href="#">
                    Žiūrėti nemokamai
                </a>
<a className="w-full sm:w-auto px-10 py-4 border border-slate-300 rounded-full text-base font-normal text-slate-700 bg-white hover:bg-slate-50 transition-colors" href="#">
                    Atrakinti biblioteką
                </a>
</div>
</div>
</section>

<section className="pb-24 px-4 sm:px-6 lg:px-8">
<div className="max-w-7xl mx-auto bg-lime-50 rounded-[2.5rem] p-10 sm:p-16 flex flex-col md:flex-row items-center justify-between gap-10 border border-lime-100/50">
<div className="md:w-2/3">
<span className="text-sm font-medium tracking-wider text-lime-600 uppercase">Darželiams ir ugdymo įstaigoms</span>
<h3 className="mt-3 text-2xl font-medium tracking-tight text-slate-900">Nes vaikas auga ne vienas.</h3>
<p className="mt-4 text-base text-slate-600 max-w-xl leading-relaxed">
                    Kai ta pati sistema gyvena ir namuose, ir darželyje — jis jaučiasi suprastas ir saugus visame savo pasaulyje.
                </p>
</div>
<div className="md:w-1/3 flex md:justify-end w-full">
<a className="w-full md:w-auto inline-flex items-center justify-center px-8 py-4 border border-lime-200 rounded-full text-base font-normal text-lime-800 bg-white hover:bg-lime-50 transition-colors shadow-sm whitespace-nowrap" href="#">
                    Gauti pasiūlymą darželiui
                </a>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-200 pt-20 pb-10 mt-auto">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">

<div className="lg:col-span-1 flex flex-col items-start">
<a className="mb-6 block" href="#">
<img alt="Namulis Logo" className="h-8 w-auto object-contain" src="logo.png"/>
</a>
<p className="text-base text-slate-500 leading-relaxed pr-4">
                        Smagūs video, knygos ir žaislai mažiesiems. Viskas ramesniems vakarams.
                    </p>
</div>

<div>
<h4 className="text-base font-medium text-slate-900 mb-5">Nuorodos</h4>
<ul className="space-y-4">
<li><a className="text-base text-slate-500 hover:text-cyan-500 transition-colors" href="#">Pradžia</a></li>
<li><a className="text-base text-slate-500 hover:text-cyan-500 transition-colors" href="#video">Video</a></li>
<li><a className="text-base text-slate-500 hover:text-cyan-500 transition-colors" href="#naryste">Narystė</a></li>
</ul>
</div>

<div>
<h4 className="text-base font-medium text-slate-900 mb-5">Papildomai</h4>
<ul className="space-y-4">
<li><a className="text-base text-slate-500 hover:text-cyan-500 transition-colors" href="#">Mokymai</a></li>
<li><a className="text-base text-slate-500 hover:text-cyan-500 transition-colors" href="#">Veiklos</a></li>
<li><a className="text-base text-slate-500 hover:text-cyan-500 transition-colors" href="#">Metodikos</a></li>
</ul>
</div>

<div>
<h4 className="text-base font-medium text-slate-900 mb-5">Gaukite 3 nemokamus video išbandymui</h4>
<p className="text-sm text-slate-500 mb-5">Kas savaitę atsiunčiame ramybės idėjų.</p>
<form className="flex flex-col sm:flex-row gap-3">
<input className="w-full px-5 py-3 border border-slate-200 rounded-full text-base focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 bg-slate-50 placeholder-slate-400" placeholder="El. paštas" type="email"/>
<button className="px-8 py-3 bg-cyan-600 text-white rounded-full text-base font-normal hover:bg-cyan-700 transition-colors whitespace-nowrap" type="submit">
                            Gauti
                        </button>
</form>
</div>
</div>
<div className="border-t border-slate-100 pt-10 flex flex-col md:flex-row items-center justify-between gap-5">
<p className="text-sm text-slate-400">
                    © 2024 Namulis.lt — Magija vaikams ir tėvams
                </p>
<div className="flex items-center gap-8">
<a className="text-sm text-slate-400 hover:text-slate-600 transition-colors" href="#">Privatumo politika</a>
<a className="text-sm text-slate-400 hover:text-slate-600 transition-colors" href="#">Sąlygos</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
