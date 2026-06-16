import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Initialize Lucide Icons
        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-zinc-100">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="group flex items-center gap-1 hover:opacity-80 transition-opacity" href="#">
<span className="font-['Caveat'] text-3xl text-zinc-800 -rotate-3 mt-1">the</span>
<span className="text-xl font-bold tracking-tight text-black group-hover:text-violet-700 transition-colors">LOU LAB</span>
<i className="w-5 h-5 text-violet-700 ml-1 -translate-y-1 rotate-45" data-lucide="needle"></i>
</a>

<div className="hidden md:flex items-center gap-10">
<a className="text-sm font-medium text-zinc-500 hover:text-violet-600 transition-colors" href="#collectie">De Collectie</a>
<a className="text-sm font-medium text-zinc-500 hover:text-violet-600 transition-colors" href="#about">Over Lou</a>
<a className="text-sm font-medium text-zinc-500 hover:text-violet-600 transition-colors" href="#custom">Custom Made</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden sm:inline-flex text-xs font-semibold uppercase tracking-wider text-violet-600 bg-violet-50 px-3 py-1.5 rounded-full hover:bg-violet-100 transition-colors" href="#custom">
                    Contact
                </a>
<button className="md:hidden text-zinc-900">
<svg className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</div>
</nav>

<section className="pt-36 pb-16 md:pt-48 md:pb-32 max-w-7xl mx-auto px-6 relative overflow-hidden">

<div className="absolute top-20 right-0 w-96 h-96 bg-violet-100/50 rounded-full blur-3xl -z-10 animate-pulse"></div>
<div className="absolute bottom-0 left-0 w-72 h-72 bg-fuchsia-50/50 rounded-full blur-3xl -z-10"></div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16 items-center">
<div className="max-w-lg fade-in-up">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-50 border border-violet-100 text-violet-700 text-xs font-medium mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-violet-600"></span>
</span>
                    Nieuw in het atelier
                </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-zinc-900 leading-[1.05] mb-8">
                    Kleurrijk.<br/>
<span className="text-violet-600 font-['Caveat'] text-6xl md:text-8xl font-normal block -mt-2 ml-1">Handgemaakt.</span>
</h1>
<p className="text-lg text-zinc-500 leading-relaxed mb-10 font-light max-w-md">
                    Unieke items met een eigen karakter. Geen massaproductie, maar met liefde gemaakt in het Lab.
                </p>
<div className="flex flex-wrap gap-4">
<a className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-zinc-900 text-white text-sm font-medium hover:bg-violet-700 transition-all shadow-lg hover:shadow-violet-200" href="#collectie">
                        Bekijk de Collectie
                    </a>
<a className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-white border border-zinc-200 text-zinc-900 text-sm font-medium hover:bg-zinc-50 hover:border-zinc-300 transition-all" href="#custom">
                        Stuur een berichtje
                    </a>
</div>
</div>

<div className="relative fade-in-up delay-100">
<div className="aspect-[4/5] rounded-[2rem] overflow-hidden bg-zinc-100 relative shadow-2xl shadow-zinc-200 rotate-1 hover:rotate-0 transition-all duration-700">

<img alt="Lou Lab Patchwork Jacket" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2930bd05-8b61-46af-8b39-bfb974fe3679_1600w.jpg"/>
</div>

<div className="absolute -bottom-8 -left-8 bg-white p-5 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-white/50 backdrop-blur-sm max-w-xs hidden md:block animate-bounce" style={{animationDuration: '3s'}}>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-violet-100 flex items-center justify-center text-violet-600">
<svg className="lucide lucide-scissors w-6 h-6" data-lucide="scissors" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="6" cy="6" r="3"></circle><path d="M8.12 8.12 12 12"></path><path d="M20 4 8.12 15.88"></path><circle cx="6" cy="18" r="3"></circle><path d="M14.8 14.8 20 20"></path></svg>
</div>
<div className="">
<p className="text-sm font-bold text-zinc-900">100% Dutch Design</p>
<p className="text-xs text-zinc-400 font-medium">Van schets tot naad</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 border-t border-zinc-100 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-10">
<div className="group p-8 rounded-3xl bg-zinc-50 hover:bg-violet-50/50 transition-colors duration-500">
<div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-zinc-900 mb-6 group-hover:text-violet-600 group-hover:scale-110 transition-all">
<svg className="lucide lucide-palette w-6 h-6" data-lucide="palette" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path><circle cx="13.5" cy="6.5" fill="currentColor" r=".5"></circle><circle cx="17.5" cy="10.5" fill="currentColor" r=".5"></circle><circle cx="6.5" cy="12.5" fill="currentColor" r=".5"></circle><circle cx="8.5" cy="7.5" fill="currentColor" r=".5"></circle></svg>
</div>
<h3 className="text-lg font-semibold text-zinc-900 mb-3">Unieke Prints</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Geen dertien in een dozijn. Ik selecteer de stoffen waar je vrolijk van wordt.</p>
</div>
<div className="group p-8 rounded-3xl bg-zinc-50 hover:bg-violet-50/50 transition-colors duration-500">
<div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-zinc-900 mb-6 group-hover:text-violet-600 group-hover:scale-110 transition-all">
<svg className="lucide lucide-heart w-6 h-6" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
</div>
<h3 className="text-lg font-semibold text-zinc-900 mb-3">Met liefde gemaakt</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Slow fashion in zijn puurste vorm. Elk item gaat door mijn handen.</p>
</div>
<div className="group p-8 rounded-3xl bg-zinc-50 hover:bg-violet-50/50 transition-colors duration-500">
<div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-zinc-900 mb-6 group-hover:text-violet-600 group-hover:scale-110 transition-all">
<svg className="lucide lucide-sparkles w-6 h-6" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<h3 className="text-lg font-semibold text-zinc-900 mb-3">Custom Made</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Jouw idee, mijn uitvoering. Samen maken we iets wat perfect bij je past.</p>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mr-auto ml-auto pt-24 pr-6 pb-24 pl-6" id="collectie">
<div className="text-center mb-16 max-w-2xl mx-auto">
<span className="text-violet-600 font-medium text-sm tracking-wider uppercase mb-2 block">Portfolio</span>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-zinc-900 mb-6">De Collectie</h2>
<p className="text-zinc-500 text-lg">Een greep uit de creaties die het Lab hebben verlaten. Zie je iets leuks? Stuur me een berichtje voor beschikbaarheid of een custom verzoek.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group cursor-pointer relative">
<div className="aspect-square rounded-2xl overflow-hidden bg-zinc-100 relative">

<img alt="Fashion Item" className="group-hover:scale-110 transition-transform duration-700 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/70489a33-973a-4880-b24f-8a2681d6574b_800w.jpg"/>

<div className="group-hover:opacity-100 transition-opacity duration-300 flex bg-black/40 opacity-0 absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 text-center p-4">
<span className="inline-block px-4 py-2 bg-white rounded-full text-zinc-900 text-sm font-medium hover:bg-violet-50">Bekijk details</span>
</div>
</div>
</div>
<div className="mt-4 flex justify-between items-start">
<h3 className="group-hover:text-violet-600 transition-colors text-lg font-medium text-zinc-900">Kimono Jacket 'Bloom'</h3>
</div>
</div>

<div className="group relative cursor-pointer lg:mt-12">
<div className="aspect-[4/5] rounded-2xl overflow-hidden bg-zinc-100 relative">

<img alt="Fashion Item" className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/497dba03-ee98-4ab9-89d9-ec4c05b9591b_800w.jpg"/>
<div className="group-hover:opacity-100 transition-opacity duration-300 flex bg-black/40 opacity-0 absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
<svg className="lucide lucide-instagram text-white w-8 h-8" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</div>
</div>
</div>
<div className="mt-4">
<h3 className="text-lg font-medium text-zinc-900 group-hover:text-violet-600 transition-colors">Teddy Bodywarmer</h3>
</div>
</div>

<div className="group cursor-pointer relative">
<div className="aspect-square rounded-2xl overflow-hidden bg-zinc-100 relative">

<img alt="Fashion Item" className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bf12169c-1835-4a5d-88d8-efba02cb07fa_800w.jpg"/>
<div className="group-hover:opacity-100 transition-opacity duration-300 flex bg-black/40 opacity-0 absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<span className="inline-block text-sm font-medium text-zinc-900 bg-white rounded-full pt-2 pr-4 pb-2 pl-4">Bekijk details</span>
</div>
</div>
<div className="mt-4">
<h3 className="text-lg font-medium text-zinc-900 group-hover:text-violet-600 transition-colors">Checkerboard Shopper</h3>
</div>
</div>

<div className="group relative cursor-pointer lg:-mt-12">
<div className="aspect-[3/4] rounded-2xl overflow-hidden bg-zinc-100 relative">

<img alt="Fashion Item" className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ad246f4a-a108-4ebd-b723-3271ec8b1879_800w.jpg"/>
<div className="group-hover:opacity-100 transition-opacity duration-300 flex bg-black/40 opacity-0 absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<svg className="lucide lucide-instagram text-white w-8 h-8" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</div>
</div>
<div className="mt-4">
<h3 className="text-lg font-medium text-zinc-900 group-hover:text-violet-600 transition-colors">Maxi Dress - Floral</h3>
</div>
</div>

<div className="group relative cursor-pointer">
<div className="aspect-square rounded-2xl overflow-hidden bg-zinc-100 relative">

<img alt="Fashion Item" className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/29128e3a-d82e-416a-9787-4f65dfc86326_800w.jpg"/>
<div className="group-hover:opacity-100 transition-opacity duration-300 flex bg-black/40 opacity-0 absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<span className="inline-block px-4 py-2 bg-white rounded-full text-zinc-900 text-sm font-medium">Bekijk details</span>
</div>
</div>
<div className="mt-4">
<h3 className="text-lg font-medium text-zinc-900 group-hover:text-violet-600 transition-colors">Patchwork Pants</h3>
</div>
</div>

<div className="group cursor-pointer lg:mt-12 relative">
<div className="aspect-[4/3] rounded-2xl overflow-hidden bg-zinc-100 relative">
<img alt="Fashion Item" className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
<svg className="lucide lucide-instagram text-white w-8 h-8" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</div>
</div>
<div className="mt-4">
<h3 className="text-lg font-medium text-zinc-900 group-hover:text-violet-600 transition-colors">Accessoires Set</h3>
</div>
</div>
</div>
<div className="mt-16 text-center">
<a className="inline-flex items-center gap-2 text-violet-600 font-medium hover:text-violet-800 transition-colors" href="https://instagram.com" target="_blank">
<svg className="lucide lucide-instagram w-5 h-5" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
                Bekijk meer op Instagram
            </a>
</div>
</section>

<section className="py-24 bg-zinc-900 text-zinc-200 relative overflow-hidden" id="about">

<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-900/20 rounded-full blur-[100px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1 relative">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-4 translate-y-8">
<img alt="Detail" className="rounded-2xl opacity-80 hover:opacity-100 transition-opacity duration-500 w-full object-cover aspect-[3/4]" src="https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="space-y-4">
<img alt="Atelier" className="rounded-2xl opacity-80 hover:opacity-100 transition-opacity duration-500 w-full object-cover aspect-[3/4]" src="https://images.unsplash.com/photo-1554563836-8228303108d8?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
<div className="order-1 lg:order-2">
<div className="inline-flex items-center gap-2 text-violet-400 mb-4">
<svg className="lucide lucide-coffee w-5 h-5" data-lucide="coffee" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 2v2"></path><path d="M14 2v2"></path><path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1"></path><path d="M6 2v2"></path></svg>
<span className="text-sm font-medium uppercase tracking-widest">Behind the scenes</span>
</div>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6">Het gezicht achter<br/> <span className="font-['Caveat'] text-violet-400 font-normal">the Lou Lab</span></h2>
<p className="leading-relaxed text-lg font-light text-zinc-400 mb-6" style={{}}>Hoi! Ik ben Amber. Wat begon als een uit de hand gelopen hobby aan de keukentafel, is uitgegroeid tot mijn eigen creatieve speeltuin.</p>
<p className="text-base text-zinc-400 mb-8 leading-relaxed">
                        Ik geloof niet in 'fast fashion'. Ik geloof in kledingstukken die een verhaal vertellen. Elk stiksel, elke knoop en elke stofkeuze is bewust. Of ik nu werk aan een custom bestelling of een nieuwe mini-collectie, het doel is altijd hetzelfde: items maken waar jij (en ik!) blij van worden.
                    </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center h-12 px-6 rounded-full bg-violet-600 text-white text-sm font-medium hover:bg-violet-500 transition-colors" href="#custom">
                            Stuur me een berichtje
                        </a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-xl mx-auto px-6 text-center">
<div className="mb-8 flex justify-center">
<div className="w-16 h-16 rounded-3xl bg-violet-100 flex items-center justify-center text-violet-600 rotate-3 hover:rotate-0 transition-transform duration-300">
<svg className="lucide lucide-mail-open w-8 h-8" data-lucide="mail-open" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z"></path><path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10"></path></svg>
</div>
</div>
<h2 className="text-3xl font-semibold tracking-tight text-zinc-900 mb-4">Mis geen enkele drop</h2>
<p className="text-base text-zinc-500 mb-8">Schrijf je in voor de nieuwsbrief en krijg als eerste een seintje als er nieuwe items in de collectie komen.</p>
<form className="flex flex-col sm:flex-row gap-3">
<input className="flex-1 h-12 px-6 rounded-full bg-zinc-50 border border-zinc-200 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 transition-all placeholder:text-zinc-400" placeholder="Je e-mailadres" type="email"/>
<button className="h-12 px-8 rounded-full bg-zinc-900 text-white text-sm font-medium hover:bg-violet-600 transition-colors" type="button">
                Inschrijven
            </button>
</form>
</section>

<footer className="border-t border-zinc-100 py-16 bg-white">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
<div className="flex items-center gap-1 select-none">
<span className="font-['Caveat'] text-2xl text-zinc-400 mr-1">the</span>
<span className="text-zinc-900 font-bold tracking-tight text-lg">LOU LAB</span>
</div>
<div className="flex flex-wrap justify-center gap-8 text-sm font-medium text-zinc-500">
<a className="hover:text-violet-600 transition-colors" href="#">Algemene Voorwaarden</a>
<a className="hover:text-violet-600 transition-colors" href="#">Verzending</a>
<a className="hover:text-violet-600 transition-colors" href="#">Instagram</a>
<a className="hover:text-violet-600 transition-colors" href="#">Contact</a>
</div>
<div className="text-xs text-zinc-400">
                © 2024 Lou Lab. Handmade with love.
            </div>
</div>
</footer>


    </>
  );
}
