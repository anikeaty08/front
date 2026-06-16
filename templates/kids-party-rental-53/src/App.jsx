import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Fredoka', 'sans-serif'],
},
colors: {
robbie: {
blue: '#38bdf8', // sky-400
darkblue: '#0284c7', // sky-600
red: '#f43f5e', // rose-500
yellow: '#facc15', // yellow-400
green: '#84cc16', // lime-500
orange: '#fb923c', // orange-400
}
}
}
}
}



        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 p-4">
<div className="max-w-7xl mx-auto bg-white/90 backdrop-blur-md border-b-4 border-sky-200 rounded-full shadow-lg px-6 py-3 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center text-white shadow-sm border-2 border-orange-400">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="castle"></i>
</div>
<span className="text-xl font-semibold tracking-tight text-sky-600">
                    Robbie's <span className="text-rose-500">Speelpaleis</span>
</span>
</div>
<div className="hidden md:flex items-center gap-8 text-lg font-medium text-slate-600">
<a className="hover:text-sky-500 transition-colors" href="#">Home</a>
<a className="hover:text-sky-500 transition-colors" href="#aanbod">Springkussens</a>
<a className="hover:text-sky-500 transition-colors" href="#over">Over Ons</a>
<a className="hover:text-sky-500 transition-colors" href="#contact">Contact</a>
</div>
<a className="bg-rose-500 hover:bg-rose-600 text-white px-6 py-2 rounded-full font-medium shadow-md transition-transform hover:scale-105 flex items-center gap-2" href="#aanbod">
<span>Reserveer Nu</span>
<i className="w-4 h-4 stroke-[1.5]" data-lucide="arrow-right"></i>
</a>
</div>
</nav>

<header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">

<div className="absolute inset-0 bg-gradient-to-b from-sky-300 via-sky-200 to-sky-50 -z-20"></div>
<div className="absolute top-20 left-10 w-32 h-32 bg-yellow-300 rounded-full blur-3xl opacity-50 -z-10"></div>
<div className="absolute bottom-20 right-10 w-64 h-64 bg-rose-300 rounded-full blur-3xl opacity-40 -z-10"></div>
<div className="max-w-7xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-6 border border-yellow-300 shadow-sm animate-bounce">
<span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                Nieuw: Het Piraten Eiland!
            </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white drop-shadow-lg mb-6 leading-tight">
                Welkom bij <br className="md:hidden"/>
<span className="text-rose-500 [text-shadow:_2px_2px_0_rgb(255_255_255)]">Robbie's</span>
<span className="text-lime-500 [text-shadow:_2px_2px_0_rgb(255_255_255)]">Speelpaleis!</span>
</h1>
<p className="text-xl md:text-2xl text-slate-700 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
                Het leukste springkussen verhuur bedrijf voor kinderfeestjes, buurtbarbecues en evenementen. Springen, glijden en plezier maken!
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto bg-lime-500 hover:bg-lime-600 text-white text-xl px-8 py-4 rounded-full font-semibold shadow-[0_6px_0_rgb(63,98,18)] transition-all hover:translate-y-1 hover:shadow-[0_2px_0_rgb(63,98,18)] flex items-center justify-center gap-2" href="#aanbod">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="party-popper"></i>
                    Bekijk Aanbod
                </a>
<a className="w-full sm:w-auto bg-white hover:bg-slate-50 text-slate-700 text-xl px-8 py-4 rounded-full font-semibold shadow-[0_6px_0_rgb(203,213,225)] border-2 border-slate-200 transition-all hover:translate-y-1 hover:shadow-[0_2px_0_rgb(203,213,225)]" href="#contact">
                    Neem Contact Op
                </a>
</div>
</div>

<div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
<svg className="relative block w-[calc(140%+1.3px)] h-16 sm:h-24 fill-sky-50" data-name="Layer 1" preserveaspectratio="none" viewbox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg">
<path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></path>
</svg>
</div>
</header>

<section className="py-12 bg-sky-50">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-lime-100 rounded-3xl p-8 text-center border-b-8 border-lime-300 transform transition hover:-translate-y-2 hover:shadow-xl group cursor-pointer">
<div className="w-20 h-20 bg-lime-500 rounded-full mx-auto mb-6 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
<i className="w-10 h-10 stroke-[1.5]" data-lucide="users"></i>
</div>
<h3 className="text-2xl font-semibold text-lime-800 mb-3 tracking-tight">Over Ons</h3>
<p className="text-lg text-lime-900/80 mb-6">Wij zorgen voor een onvergetelijke dag met de veiligste attracties.</p>
<span className="inline-block bg-lime-500 text-white px-6 py-2 rounded-full font-medium shadow-sm">Lees Meer</span>
</div>

<div className="bg-rose-100 rounded-3xl p-8 text-center border-b-8 border-rose-300 transform transition hover:-translate-y-2 hover:shadow-xl group cursor-pointer">
<div className="w-20 h-20 bg-rose-500 rounded-full mx-auto mb-6 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
<i className="w-10 h-10 stroke-[1.5]" data-lucide="cake"></i>
</div>
<h3 className="text-2xl font-semibold text-rose-800 mb-3 tracking-tight">Kinderfeestjes</h3>
<p className="text-lg text-rose-900/80 mb-6">Compleet verzorgde pakketten met springkussen en limonade.</p>
<span className="inline-block bg-rose-500 text-white px-6 py-2 rounded-full font-medium shadow-sm">Bekijk Pakketten</span>
</div>

<div className="bg-sky-100 rounded-3xl p-8 text-center border-b-8 border-sky-300 transform transition hover:-translate-y-2 hover:shadow-xl group cursor-pointer">
<div className="w-20 h-20 bg-sky-500 rounded-full mx-auto mb-6 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
<i className="w-10 h-10 stroke-[1.5]" data-lucide="clock"></i>
</div>
<h3 className="text-2xl font-semibold text-sky-800 mb-3 tracking-tight">Beschikbaarheid</h3>
<p className="text-lg text-sky-900/80 mb-6">Check direct of jouw favoriete springkussen nog vrij is.</p>
<span className="inline-block bg-sky-500 text-white px-6 py-2 rounded-full font-medium shadow-sm">Check Datum</span>
</div>
</div>
</div>
</section>

<section className="py-20 relative bg-white" id="aanbod">

<div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
<svg className="relative block w-[calc(140%+1.3px)] h-12 fill-sky-50" data-name="Layer 1" preserveaspectratio="none" viewbox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg">
<path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
</svg>
</div>
<div className="max-w-7xl mx-auto px-6 mt-10">
<div className="text-center mb-16">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-sky-600 mb-4">
                    Onze Springkussens
                </h2>
<p className="text-xl text-slate-500">Kies jouw favoriet voor urenlang speelplezier!</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="bg-white rounded-3xl overflow-hidden border-4 border-slate-100 shadow-lg hover:shadow-2xl hover:border-sky-300 transition-all group">
<div className="bg-sky-100 h-48 flex items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 bg-sky-200/50"></div>
<i className="w-24 h-24 text-sky-400 opacity-80 absolute transform -rotate-12 group-hover:scale-110 transition-transform duration-500 stroke-[1.5]" data-lucide="castle"></i>
<span className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 text-sm font-bold px-3 py-1 rounded-full">Populair</span>
</div>
<div className="p-6">
<h3 className="text-2xl font-semibold text-slate-800 mb-2 tracking-tight">Jungle Jumper</h3>
<div className="space-y-3 mb-6">
<div className="flex items-center gap-3 text-slate-600">
<i className="w-5 h-5 text-sky-500 stroke-[1.5]" data-lucide="ruler"></i>
<span className="text-lg">4 x 5 meter</span>
</div>
<div className="flex items-center gap-3 text-slate-600">
<i className="w-5 h-5 text-sky-500 stroke-[1.5]" data-lucide="users"></i>
<span className="text-lg">Tot 8 kinderen</span>
</div>
<div className="flex items-center gap-3 text-slate-600">
<i className="w-5 h-5 text-sky-500 stroke-[1.5]" data-lucide="euro"></i>
<span className="text-2xl font-bold text-rose-500">€ 85,- <span className="text-sm text-slate-400 font-medium">/dag</span></span>
</div>
</div>
<button className="w-full bg-sky-500 hover:bg-sky-600 text-white font-medium py-3 rounded-xl transition-colors shadow-[0_4px_0_rgb(14,165,233)] hover:shadow-[0_2px_0_rgb(14,165,233)] hover:translate-y-[2px]">
                            Bekijken
                        </button>
</div>
</div>

<div className="bg-white rounded-3xl overflow-hidden border-4 border-slate-100 shadow-lg hover:shadow-2xl hover:border-rose-300 transition-all group">
<div className="bg-rose-100 h-48 flex items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 bg-rose-200/50"></div>
<i className="w-24 h-24 text-rose-400 opacity-80 absolute transform rotate-6 group-hover:scale-110 transition-transform duration-500 stroke-[1.5]" data-lucide="crown"></i>
</div>
<div className="p-6">
<h3 className="text-2xl font-semibold text-slate-800 mb-2 tracking-tight">Prinsessen Kasteel</h3>
<div className="space-y-3 mb-6">
<div className="flex items-center gap-3 text-slate-600">
<i className="w-5 h-5 text-rose-500 stroke-[1.5]" data-lucide="ruler"></i>
<span className="text-lg">4 x 4 meter</span>
</div>
<div className="flex items-center gap-3 text-slate-600">
<i className="w-5 h-5 text-rose-500 stroke-[1.5]" data-lucide="users"></i>
<span className="text-lg">Tot 6 kinderen</span>
</div>
<div className="flex items-center gap-3 text-slate-600">
<i className="w-5 h-5 text-rose-500 stroke-[1.5]" data-lucide="euro"></i>
<span className="text-2xl font-bold text-rose-500">€ 95,- <span className="text-sm text-slate-400 font-medium">/dag</span></span>
</div>
</div>
<button className="w-full bg-rose-500 hover:bg-rose-600 text-white font-medium py-3 rounded-xl transition-colors shadow-[0_4px_0_rgb(225,29,72)] hover:shadow-[0_2px_0_rgb(225,29,72)] hover:translate-y-[2px]">
                            Bekijken
                        </button>
</div>
</div>

<div className="bg-white rounded-3xl overflow-hidden border-4 border-slate-100 shadow-lg hover:shadow-2xl hover:border-blue-300 transition-all group">
<div className="bg-blue-100 h-48 flex items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 bg-blue-200/50"></div>
<i className="w-24 h-24 text-blue-400 opacity-80 absolute transform -rotate-6 group-hover:scale-110 transition-transform duration-500 stroke-[1.5]" data-lucide="anchor"></i>
</div>
<div className="p-6">
<h3 className="text-2xl font-semibold text-slate-800 mb-2 tracking-tight">Piraten Boot</h3>
<div className="space-y-3 mb-6">
<div className="flex items-center gap-3 text-slate-600">
<i className="w-5 h-5 text-blue-500 stroke-[1.5]" data-lucide="ruler"></i>
<span className="text-lg">6 x 4 meter</span>
</div>
<div className="flex items-center gap-3 text-slate-600">
<i className="w-5 h-5 text-blue-500 stroke-[1.5]" data-lucide="users"></i>
<span className="text-lg">Tot 10 kinderen</span>
</div>
<div className="flex items-center gap-3 text-slate-600">
<i className="w-5 h-5 text-blue-500 stroke-[1.5]" data-lucide="euro"></i>
<span className="text-2xl font-bold text-rose-500">€ 120,- <span className="text-sm text-slate-400 font-medium">/dag</span></span>
</div>
</div>
<button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 rounded-xl transition-colors shadow-[0_4px_0_rgb(59,130,246)] hover:shadow-[0_2px_0_rgb(59,130,246)] hover:translate-y-[2px]">
                            Bekijken
                        </button>
</div>
</div>

<div className="bg-white rounded-3xl overflow-hidden border-4 border-slate-100 shadow-lg hover:shadow-2xl hover:border-lime-300 transition-all group">
<div className="bg-lime-100 h-48 flex items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 bg-lime-200/50"></div>
<i className="w-24 h-24 text-lime-400 opacity-80 absolute transform rotate-12 group-hover:scale-110 transition-transform duration-500 stroke-[1.5]" data-lucide="sun"></i>
</div>
<div className="p-6">
<h3 className="text-2xl font-semibold text-slate-800 mb-2 tracking-tight">Mini Party</h3>
<div className="space-y-3 mb-6">
<div className="flex items-center gap-3 text-slate-600">
<i className="w-5 h-5 text-lime-500 stroke-[1.5]" data-lucide="ruler"></i>
<span className="text-lg">3 x 3 meter</span>
</div>
<div className="flex items-center gap-3 text-slate-600">
<i className="w-5 h-5 text-lime-500 stroke-[1.5]" data-lucide="users"></i>
<span className="text-lg">Tot 4 kinderen</span>
</div>
<div className="flex items-center gap-3 text-slate-600">
<i className="w-5 h-5 text-lime-500 stroke-[1.5]" data-lucide="euro"></i>
<span className="text-2xl font-bold text-rose-500">€ 65,- <span className="text-sm text-slate-400 font-medium">/dag</span></span>
</div>
</div>
<button className="w-full bg-lime-500 hover:bg-lime-600 text-white font-medium py-3 rounded-xl transition-colors shadow-[0_4px_0_rgb(132,204,22)] hover:shadow-[0_2px_0_rgb(132,204,22)] hover:translate-y-[2px]">
                            Bekijken
                        </button>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-gradient-to-br from-yellow-50 to-orange-50 overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-12">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-orange-500 mb-4 flex items-center justify-center gap-3">
<i className="text-yellow-400 w-8 h-8" data-lucide="sparkles"></i>
                    Speel &amp; Plezier!
                    <i className="text-yellow-400 w-8 h-8" data-lucide="sparkles"></i>
</h2>
<p className="text-xl text-slate-600">Klimmen, Klauteren &amp; Glijden!</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

<div className="relative transform md:-rotate-2 hover:rotate-0 transition-transform duration-300">
<div className="bg-white p-3 rounded-2xl shadow-xl border-2 border-slate-100">
<div className="h-64 md:h-80 bg-sky-200 rounded-xl overflow-hidden relative">

<div className="absolute inset-0 flex items-center justify-center bg-sky-300">
<i className="w-32 h-32 text-sky-100 opacity-50 stroke-[1.5]" data-lucide="smile"></i>
</div>
</div>
<div className="mt-4 bg-lime-500 text-white text-center py-2 rounded-lg font-medium text-lg">
                            Avontuurlijke Speeltoestellen
                        </div>
</div>

<div className="absolute -top-4 left-1/2 -translate-x-1/2 w-24 h-8 bg-yellow-200/80 rotate-3 shadow-sm"></div>
</div>

<div className="relative transform md:rotate-2 hover:rotate-0 transition-transform duration-300">
<div className="bg-white p-3 rounded-2xl shadow-xl border-2 border-slate-100">
<div className="h-64 md:h-80 bg-rose-200 rounded-xl overflow-hidden relative">

<div className="absolute inset-0 flex items-center justify-center bg-rose-300">
<i className="w-32 h-32 text-rose-100 opacity-50 stroke-[1.5]" data-lucide="layout-grid"></i>
</div>
</div>
<div className="mt-4 bg-rose-500 text-white text-center py-2 rounded-lg font-medium text-lg">
                            Ravotten in de Ballenbak
                        </div>
</div>

<div className="absolute -top-4 left-1/2 -translate-x-1/2 w-24 h-8 bg-sky-200/80 -rotate-3 shadow-sm"></div>
</div>
</div>
</div>
</section>

<section className="bg-[#fffbeb] border-t-4 border-dashed border-orange-200 py-16" id="contact">
<div className="max-w-4xl mx-auto px-6 text-center">
<div className="w-24 h-24 bg-white rounded-full mx-auto flex items-center justify-center shadow-md border-4 border-orange-200 mb-6">
<i className="w-12 h-12 text-orange-400 stroke-[1.5]" data-lucide="calendar-heart"></i>
</div>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-rose-500 mb-4">
                Plan je Feestje!
            </h2>
<p className="text-xl text-slate-700 mb-8 max-w-lg mx-auto">
                Vier een onvergetelijk feestje bij Robbie's Speelpaleis. Bel ons of stuur een berichtje!
            </p>
<div className="flex flex-col md:flex-row justify-center gap-4 mb-12">
<button className="bg-orange-400 hover:bg-orange-500 text-white text-xl px-10 py-4 rounded-full font-semibold shadow-[0_6px_0_rgb(194,65,12)] transition-all hover:translate-y-1 hover:shadow-[0_2px_0_rgb(194,65,12)]">
                    Meer Informatie
                </button>
</div>

<div className="flex justify-center gap-6 text-slate-400 text-lg">
<a className="hover:text-sky-500" href="#"><i className="w-6 h-6" data-lucide="facebook"></i></a>
<a className="hover:text-rose-500" href="#"><i className="w-6 h-6" data-lucide="instagram"></i></a>
<a className="hover:text-lime-500" href="#"><i className="w-6 h-6" data-lucide="mail"></i></a>
</div>
<p className="mt-8 text-slate-400 text-base">© 2023 Robbie's Speelpaleis</p>
</div>
</section>


    </>
  );
}
