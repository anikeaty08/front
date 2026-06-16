import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 left-0 h-screen w-16 hidden lg:flex flex-col justify-between items-center py-8 z-50 border-r border-neutral-300 bg-[#E8E8E6]/80 backdrop-blur-sm">
<a className="writing-vertical-rl text-xs font-semibold tracking-widest uppercase rotate-180 hover:text-[#722F37] transition-colors" href="#">Renea Group</a>
<div className="flex flex-col gap-6">
<a className="w-2 h-2 rounded-full bg-neutral-400 hover:bg-[#722F37] transition-colors" href="#gallery"></a>
<a className="w-2 h-2 rounded-full bg-neutral-400 hover:bg-[#722F37] transition-colors" href="#contact"></a>
</div>
<span className="text-[10px] font-mono rotate-180">EST. 2023</span>
</nav>

<nav className="lg:hidden fixed top-0 w-full z-50 flex justify-between items-center px-6 py-4 bg-[#E8E8E6]/90 backdrop-blur-md border-b border-neutral-300">
<span className="text-sm font-bold tracking-tighter">RENEA</span>
<button><iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon></button>
</nav>

<main className="lg:pl-16 min-h-screen relative">

<header className="min-h-[80vh] flex flex-col justify-end px-6 lg:px-12 pb-12 pt-32 border-b border-neutral-300 relative overflow-hidden">

<div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>
<div className="max-w-7xl w-full mx-auto relative z-10">
<div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-12">
<div>
<div className="flex items-center gap-3 mb-6">
<span className="px-3 py-1 border border-neutral-900 rounded-full text-[10px] font-mono uppercase tracking-widest">Exhibition 01</span>
<div className="h-px w-12 bg-neutral-900"></div>
</div>
<h1 className="text-6xl md:text-8xl lg:text-9xl font-semibold tracking-tighter leading-[0.9] text-neutral-900">
                            ARCHITEKTÚRA<br/>
<span className="text-[#722F37]">CHUTI.</span>
</h1>
</div>
<div className="max-w-xs mb-2">
<p className="text-sm font-light text-neutral-600 leading-relaxed text-justify">
                            Konzultácie ako umenie. Spájame precíznu geometriu biznis stratégie s organickou krásou gastronómie. Vstúpte do galérie úspechu.
                        </p>

<a className="mt-8 group inline-flex items-center gap-4 text-xs font-bold uppercase tracking-widest" href="#contact">
<span className="relative overflow-hidden">
<span className="relative z-10 transition-colors duration-300 group-hover:text-[#722F37]">Začať prehliadku</span>
<span className="absolute bottom-0 left-0 w-full h-[1px] bg-neutral-900 origin-left transition-transform duration-300 group-hover:scale-x-0"></span>
<span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#722F37] origin-right transition-transform duration-300 scale-x-0 group-hover:scale-x-100"></span>
</span>
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#722F37] to-[#ff4d4d] flex items-center justify-center text-white btn-gradient-animate shadow-lg hover:shadow-[#722F37]/40 transition-shadow">
<iconify-icon className="group-hover:-rotate-45 transition-transform duration-300" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</a>
</div>
</div>
</div>
</header>

<section className="px-4 lg:px-8 py-16 bg-[#E8E8E6]" id="gallery">

<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8 auto-rows-[400px]">

<div className="lg:col-span-4 lg:row-span-2 group relative bg-white overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700 ease-out cursor-pointer">
<div className="absolute inset-0 bg-neutral-200 overflow-hidden">

<img alt="Strategy" className="w-full h-full object-cover hover-reveal-image grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute inset-0 p-8 flex flex-col justify-between z-10 bg-gradient-to-b from-transparent via-transparent to-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
<div className="flex justify-between items-start text-white mix-blend-difference">
<span className="font-mono text-xs">FIG. 01</span>
<iconify-icon icon="solar:maximize-square-linear" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-3xl font-medium text-white mb-2">Stratégia &amp; <br/>Analýza</h3>
<p className="text-white/80 text-xs font-light max-w-[200px]">Optimalizácia procesov s presnosťou architektonického rezu.</p>
</div>
</div>

<div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur px-4 py-2 text-xs font-bold uppercase tracking-widest border border-neutral-200 group-hover:opacity-0 transition-opacity duration-300">
                        Strategické Konzultácie
                    </div>
</div>

<div className="lg:col-span-4 bg-transparent border border-neutral-400 p-10 flex flex-col justify-center relative hover:bg-white hover:border-transparent transition-colors duration-500">
<iconify-icon className="text-[#722F37] mb-6" icon="solar:quote-up-square-linear" width="40"></iconify-icon>
<p className="text-2xl font-light text-neutral-800 leading-tight">
                        "Detail nie je maličkosť. Detail tvorí dizajn."
                    </p>
<span className="mt-6 text-xs font-mono text-neutral-400">— CHARLES EAMES</span>
</div>

<div className="lg:col-span-4 lg:row-span-1 group relative bg-neutral-900 overflow-hidden text-white cursor-pointer">
<img alt="Wine" className="w-full h-full object-cover opacity-60 hover-reveal-image" src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 p-8 flex flex-col justify-center items-center text-center z-10">
<div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500 bg-white/5 backdrop-blur-md">
<iconify-icon icon="solar:wineglass-triangle-linear" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-medium tracking-tight mb-2">Someliérstvo</h3>
<a className="inline-block mt-4 text-xs border-b border-white pb-1 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0" href="#">Zobraziť kolekciu</a>
</div>
</div>

<div className="lg:col-span-4 lg:row-span-1 group relative bg-[#722F37] overflow-hidden text-white cursor-pointer">

<div className="absolute inset-0 bg-gradient-to-br from-[#722F37] via-[#9e2a2a] to-[#ff4d4d] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
<div className="relative z-10 p-8 h-full flex flex-col justify-between">
<div className="flex justify-between items-start">
<iconify-icon className="text-white/80" icon="solar:star-fall-linear" width="32"></iconify-icon>
<span className="font-mono text-xs opacity-50">FIG. 03</span>
</div>
<div>
<h3 className="text-3xl font-medium tracking-tight mb-2">Brand Identity</h3>
<p className="text-white/70 text-sm font-light">Tvorba značky, ktorá rezonuje.</p>
</div>
</div>
</div>

<div className="lg:col-span-8 group relative bg-neutral-100 overflow-hidden border border-neutral-300 cursor-pointer">
<div className="absolute inset-0 flex">
<div className="w-1/2 h-full p-10 flex flex-col justify-center bg-white z-10 transition-transform duration-500 group-hover:-translate-x-4">
<span className="text-[#722F37] text-xs font-bold uppercase tracking-widest mb-4">Education Program</span>
<h3 className="text-4xl font-medium text-neutral-900 mb-6">Masterclass.</h3>
<div className="flex flex-col gap-3">
<div className="flex items-center gap-3 text-sm text-neutral-600">
<iconify-icon className="text-[#722F37]" icon="solar:check-circle-linear"></iconify-icon>
                                    Tréning personálu
                                </div>
<div className="flex items-center gap-3 text-sm text-neutral-600">
<iconify-icon className="text-[#722F37]" icon="solar:check-circle-linear"></iconify-icon>
                                    Manažérske zručnosti
                                </div>
</div>
</div>
<div className="w-1/2 h-full overflow-hidden relative">
<img className="absolute inset-0 w-full h-full object-cover hover-reveal-image grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</div>
</section>

<div className="py-8 bg-[#1a1a1a] text-white overflow-hidden border-y border-neutral-800">
<div className="flex animate-marquee gap-12 whitespace-nowrap">
<span className="text-sm font-mono tracking-widest uppercase flex items-center gap-4">
<span className="w-2 h-2 bg-[#722F37]"></span> CONCEPT
                </span>
<span className="text-sm font-mono tracking-widest uppercase flex items-center gap-4">
<span className="w-2 h-2 bg-[#722F37]"></span> STRATEGY
                </span>
<span className="text-sm font-mono tracking-widest uppercase flex items-center gap-4">
<span className="w-2 h-2 bg-[#722F37]"></span> DEVELOPMENT
                </span>
<span className="text-sm font-mono tracking-widest uppercase flex items-center gap-4">
<span className="w-2 h-2 bg-[#722F37]"></span> EXECUTION
                </span>
<span className="text-sm font-mono tracking-widest uppercase flex items-center gap-4">
<span className="w-2 h-2 bg-[#722F37]"></span> CONCEPT
                </span>
<span className="text-sm font-mono tracking-widest uppercase flex items-center gap-4">
<span className="w-2 h-2 bg-[#722F37]"></span> STRATEGY
                </span>
<span className="text-sm font-mono tracking-widest uppercase flex items-center gap-4">
<span className="w-2 h-2 bg-[#722F37]"></span> DEVELOPMENT
                </span>
<span className="text-sm font-mono tracking-widest uppercase flex items-center gap-4">
<span className="w-2 h-2 bg-[#722F37]"></span> EXECUTION
                </span>
</div>
</div>

<section className="min-h-screen flex items-center px-4 lg:px-12 py-20 bg-[#E8E8E6] relative" id="contact">
<div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

<div>
<h2 className="text-5xl md:text-7xl font-semibold tracking-tighter text-neutral-900 mb-12">
                        Vytvorme <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#722F37] to-[#ff4d4d]">niečo večné.</span>
</h2>
<form className="space-y-8">
<div className="group relative">
<input className="w-full bg-transparent border-b border-neutral-300 py-4 text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-[#722F37] transition-colors font-mono text-sm uppercase tracking-wide" placeholder="MENO" type="text"/>
</div>
<div className="group relative">
<input className="w-full bg-transparent border-b border-neutral-300 py-4 text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-[#722F37] transition-colors font-mono text-sm uppercase tracking-wide" placeholder="EMAIL" type="email"/>
</div>
<div className="group relative">
<textarea className="w-full bg-transparent border-b border-neutral-300 py-4 text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-[#722F37] transition-colors font-mono text-sm uppercase tracking-wide resize-none" placeholder="VÍZIA PROJEKTU" rows="1"></textarea>
</div>

<button className="w-full py-6 mt-8 bg-gradient-to-r from-[#722F37] via-[#a31621] to-[#722F37] btn-gradient-animate text-white text-sm font-bold uppercase tracking-[0.2em] hover:shadow-xl hover:shadow-red-900/20 transition-all duration-300" type="submit">
                            Odoslať Návrh
                        </button>
</form>
</div>

<div className="bg-white p-12 shadow-2xl shadow-neutral-200/50 border border-neutral-100 relative overflow-hidden group">
<div className="absolute top-0 right-0 w-32 h-32 bg-[#722F37]/5 rounded-bl-full transition-all duration-500 group-hover:scale-150 group-hover:bg-[#722F37]/10"></div>
<div className="relative z-10 space-y-12">
<div>
<span className="text-xs font-mono text-neutral-400 block mb-2">OFFICE</span>
<p className="text-xl font-medium">Bratislava, SK</p>
<p className="text-neutral-500 font-light">Staré Mesto, Palisády 33</p>
</div>
<div>
<span className="text-xs font-mono text-neutral-400 block mb-2">KONTAKT</span>
<a className="block text-xl hover:text-[#722F37] transition-colors" href="mailto:info@renea.sk">info@renea.sk</a>
<a className="block text-xl mt-1 hover:text-[#722F37] transition-colors" href="tel:+421900000000">+421 900 000 000</a>
</div>
<div className="pt-8 border-t border-neutral-100 flex gap-6">
<a className="w-10 h-10 border border-neutral-200 rounded-full flex items-center justify-center hover:bg-[#722F37] hover:text-white hover:border-[#722F37] transition-all duration-300" href="#">
<iconify-icon icon="solar:instagram-linear"></iconify-icon>
</a>
<a className="w-10 h-10 border border-neutral-200 rounded-full flex items-center justify-center hover:bg-[#722F37] hover:text-white hover:border-[#722F37] transition-all duration-300" href="#">
<iconify-icon icon="solar:linkedin-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
<footer className="absolute bottom-6 left-0 w-full px-12 flex justify-between text-[10px] font-mono text-neutral-400 uppercase">
<span>© Renea Group 2023</span>
<span>Designed by Taste</span>
</footer>
</section>
</main>

    </>
  );
}
