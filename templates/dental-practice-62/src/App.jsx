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
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

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
      

<header className="fixed top-0 left-0 right-0 z-50 w-full p-4 md:p-6">
<nav className="mx-auto max-w-7xl rounded-full backdrop-blur-xl border shadow-lg px-6 py-3 flex items-center justify-between transition-all duration-300 bg-white/80 border-white/20 shadow-slate-200/50">

<a className="flex items-center gap-2 group" href="#">
<div className="bg-emerald-500 p-1.5 rounded-lg group-hover:bg-emerald-600 transition-colors text-white">
<iconify-icon height="24" icon="solar:smile-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="text-xl font-semibold tracking-tight text-slate-900">Tjin A Lim</span>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium transition-colors text-slate-600 hover:text-emerald-600" href="#">Home</a>
<a className="text-sm font-medium transition-colors text-slate-600 hover:text-emerald-600" href="#spoed">Spoed</a>
<a className="text-sm font-medium transition-colors text-slate-600 hover:text-emerald-600" href="#team">Ons Team</a>
<a className="text-sm font-medium transition-colors text-slate-600 hover:text-emerald-600" href="#services">Diensten</a>
<a className="text-sm font-medium transition-colors text-slate-600 hover:text-emerald-600" href="#contact">Contact</a>
</div>

<a className="hidden md:inline-flex items-center gap-2 bg-emerald-500 text-sm font-medium px-5 py-2.5 rounded-full transition-all shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 hover:bg-emerald-600 text-white" href="#contact">
                Afspraak Maken
                <iconify-icon height="20" icon="solar:arrow-right-linear" strokeWidth="1.5" width="20"></iconify-icon>
</a>

<button className="md:hidden text-slate-900">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</nav>
</header>

<section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

<div className="space-y-8">
<h1 className="text-5xl lg:text-7xl font-semibold tracking-tighter leading-[1.1] text-slate-900">
                        Uw tandarts in <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r to-teal-500 from-emerald-600">Amsterdam</span> voor uitstekende mondzorg.
                    </h1>
<p className="text-lg md:text-xl text-slate-500 font-medium max-w-lg leading-relaxed">
                        Welkom op de website van Tandartspraktijk Tjin A Lim. Goede mondverzorging is belangrijk voor een stralende lach en voor uw algehele gezondheid.
                    </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex justify-center items-center gap-2 bg-emerald-500 text-base font-medium px-8 py-3.5 rounded-full transition-all shadow-xl shadow-emerald-500/20 hover:shadow-emerald-500/40 hover:-translate-y-1 hover:bg-emerald-600 text-white" href="#contact">
                            Afspraak Maken
                            <iconify-icon height="20" icon="solar:calendar-linear" strokeWidth="1.5" width="20"></iconify-icon>
</a>
<a className="inline-flex justify-center items-center gap-2 border text-base font-medium px-8 py-3.5 rounded-full transition-all bg-white hover:bg-slate-50 text-slate-700 border-slate-200 hover:border-emerald-200 hover:text-emerald-600" href="#spoed">
                            Spoed Informatie
                            <iconify-icon height="20" icon="solar:medical-kit-linear" strokeWidth="1.5" width="20"></iconify-icon>
</a>
</div>

<div className="flex items-center gap-4 pt-4">
<div className="flex -space-x-3">
<img alt="" className="w-10 h-10 rounded-full border-2 object-cover border-white" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="" className="w-10 h-10 rounded-full border-2 object-cover border-white" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="" className="w-10 h-10 rounded-full border-2 object-cover border-white" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
</div>
<div>
<div className="flex gap-0.5 text-yellow-400">
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm font-medium mt-1 text-slate-600">Aangesloten bij <span className="font-semibold text-slate-900">KNMT</span></p>
</div>
</div>
</div>

<div className="relative">
<div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl group shadow-emerald-900/10">
<img alt="Tandartspraktijk Amsterdam" className="w-full h-[600px] object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gradient-to-t via-transparent to-transparent from-emerald-950/60"></div>

<div className="absolute top-8 left-8 flex flex-col gap-3">
<span className="inline-flex items-center gap-1.5 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg bg-white/90 text-emerald-800">
<iconify-icon height="14" icon="solar:verified-check-linear" strokeWidth="1.5" width="14"></iconify-icon> Kwaliteitszorg
                            </span>
</div>

<div className="absolute bottom-8 left-8 right-8 backdrop-blur-xl p-6 rounded-2xl shadow-xl flex items-center justify-between bg-white/95">
<div>
<p className="text-xs font-bold uppercase tracking-wider mb-1 text-emerald-600">Locatie</p>
<p className="font-medium text-slate-900">Buitenveldert, Amsterdam</p>
</div>
<div className="p-3 rounded-full bg-emerald-100 text-emerald-600">
<iconify-icon height="24" icon="solar:map-point-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</div>
</div>

<div className="absolute -z-10 top-1/2 right-0 translate-x-1/3 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl bg-emerald-400/20"></div>
</div>
</div>
</div>
</section>

<section className="py-16 lg:py-24 rounded-t-[3rem] lg:rounded-t-[4rem] bg-emerald-950 text-white" id="spoed">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="mb-12">
<span className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 uppercase tracking-wider bg-emerald-900 text-emerald-200 border border-emerald-800">Belangrijke Informatie</span>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">Spoed &amp; Pijnklachten</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="bg-emerald-900/50 border border-emerald-800 rounded-3xl p-8 hover:bg-emerald-900/80 transition-all">
<div className="w-12 h-12 rounded-xl bg-emerald-500 text-white flex items-center justify-center mb-6">
<iconify-icon height="28" icon="solar:phone-calling-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-3">Tijdens Werktijden</h3>
<p className="text-emerald-100/80 leading-relaxed text-sm mb-4">
                        Voor spoed en pijnklachten kunt u bellen op maandag t/m donderdag tussen 10:00 en 12:00 uur.
                    </p>
<a className="text-white font-semibold hover:text-emerald-400 transition-colors" href="tel:0206612425">020 6612 425</a>
<div className="mt-2 text-sm text-emerald-100/60">Of mail naar: <br/><a className="hover:text-white underline decoration-emerald-500/50" href="mailto:tandartstjinalim@gmail.com">tandartstjinalim@gmail.com</a></div>
</div>

<div className="bg-emerald-900/50 border border-emerald-800 rounded-3xl p-8 hover:bg-emerald-900/80 transition-all">
<div className="w-12 h-12 rounded-xl bg-emerald-500 text-white flex items-center justify-center mb-6">
<iconify-icon height="28" icon="solar:hospital-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-3">Buiten Werktijden</h3>
<p className="text-emerald-100/80 leading-relaxed text-sm mb-4">
                        Voor spoedeisende klachten buiten werktijden kunt u contact opnemen met:
                    </p>
<ul className="space-y-3 text-sm">
<li className="flex flex-col">
<span className="font-semibold text-emerald-200">Spoeddienst OLVG</span>
<a className="hover:text-emerald-400" href="tel:09008602">0900-8602</a>
</li>
<li className="flex flex-col">
<span className="font-semibold text-emerald-200">Mondzorgpoli Slotervaart</span>
<a className="hover:text-emerald-400" href="tel:0207234848">020-7234848</a>
</li>
</ul>
</div>

<div className="bg-emerald-900/50 border border-emerald-800 rounded-3xl p-8 hover:bg-emerald-900/80 transition-all">
<div className="w-12 h-12 rounded-xl bg-emerald-500 text-white flex items-center justify-center mb-6">
<iconify-icon height="28" icon="solar:settings-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-3">Reparaties Protheses</h3>
<p className="text-emerald-100/80 leading-relaxed text-sm mb-4">
                        Voor dringende reparaties aan uw protheses kunt u contact opnemen met Mac-Intosh Dental.
                    </p>
<div className="space-y-1 text-sm">
<a className="block hover:text-emerald-400" href="tel:0294288655">Tel: 0294-288655</a>
<a className="block hover:text-emerald-400" href="tel:06630501912">Mob: 06-630501912</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-slate-50" id="services">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="text-center max-w-2xl mx-auto mb-20">
<h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-6 text-slate-900">
                    Onze <span className="text-emerald-600">Diensten</span>
</h2>
<p className="text-lg text-slate-500 font-medium">
                    Wij bieden een breed scala aan tandheelkundige oplossingen voor een gezond gebit.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group p-2 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border relative overflow-hidden bg-white hover:shadow-emerald-900/5 border-slate-100">
<div className="relative h-56 rounded-2xl overflow-hidden bg-slate-100">
<img alt="Algemene Tandheelkunde" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold shadow-sm text-slate-900">01</div>
</div>
<div className="p-6 relative">
<div className="absolute -top-10 right-6 w-12 h-12 rounded-xl flex items-center justify-center shadow-lg group-hover:bg-emerald-600 group-hover:text-white transition-colors bg-white text-emerald-600">
<iconify-icon height="24" icon="solar:medical-kit-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold mb-3 tracking-tight text-slate-900 mt-2">Algemene Tandheelkunde</h3>
<p className="leading-relaxed text-base text-slate-500">Controles, vullingen en preventieve zorg voor een gezond gebit.</p>
</div>
</div>

<div className="group p-2 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border relative overflow-hidden bg-white hover:shadow-emerald-900/5 border-slate-100">
<div className="relative h-56 rounded-2xl overflow-hidden bg-slate-100">
<img alt="Cosmetische Tandheelkunde" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold shadow-sm text-slate-900">02</div>
</div>
<div className="p-6 relative">
<div className="absolute -top-10 right-6 w-12 h-12 rounded-xl flex items-center justify-center shadow-lg group-hover:bg-emerald-600 group-hover:text-white transition-colors bg-white text-emerald-600">
<iconify-icon height="24" icon="solar:stars-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold mb-3 tracking-tight text-slate-900 mt-2">Cosmetische Zorg</h3>
<p className="leading-relaxed text-base text-slate-500">Verfraai uw glimlach met bleken, facings en esthetische correcties.</p>
</div>
</div>

<div className="group p-2 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border relative overflow-hidden bg-white hover:shadow-emerald-900/5 border-slate-100">
<div className="relative h-56 rounded-2xl overflow-hidden bg-slate-100">
<img alt="Protheses" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold shadow-sm text-slate-900">03</div>
</div>
<div className="p-6 relative">
<div className="absolute -top-10 right-6 w-12 h-12 rounded-xl flex items-center justify-center shadow-lg group-hover:bg-emerald-600 group-hover:text-white transition-colors bg-white text-emerald-600">
<iconify-icon height="24" icon="solar:smile-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold mb-3 tracking-tight text-slate-900 mt-2">Protheses</h3>
<p className="text-slate-500 leading-relaxed text-base">Volledige of gedeeltelijke protheses en reparaties.</p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white pt-24 pb-24 relative" id="team">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div className="">
<span className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 uppercase tracking-wider bg-slate-100 text-slate-600">Specialisten</span>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-4 text-slate-900">
                        Ons <span className="text-emerald-500">Team</span>
</h2>
<p className="text-lg text-slate-500 font-medium max-w-xl">
                        Ons toegewijde team staat klaar om u de beste zorg te bieden in een prettige omgeving.
                    </p>
</div>
<div className="flex gap-3">
<button className="w-12 h-12 rounded-full border flex items-center justify-center hover:bg-emerald-500 hover:border-emerald-500 transition-all border-slate-200 text-slate-400 hover:text-white">
<iconify-icon height="24" icon="solar:arrow-left-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
<button className="w-12 h-12 rounded-full border flex items-center justify-center hover:bg-emerald-500 hover:border-emerald-500 transition-all border-slate-200 text-slate-400 hover:text-white">
<iconify-icon height="24" icon="solar:arrow-right-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="lg:col-span-1 lg:-mt-12 group relative rounded-3xl overflow-hidden bg-emerald-500 shadow-xl shadow-emerald-500/20 cursor-pointer">
<div className="aspect-[4/5] w-full relative">
<img alt="Tandarts" className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-90" src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute inset-0 bg-gradient-to-t to-transparent from-emerald-900/80"></div>
</div>
<div className="absolute bottom-0 left-0 right-0 p-6 text-center text-white">
<h4 className="text-xl font-semibold">Tandarts Tjin A Lim</h4>
<p className="text-sm font-medium text-emerald-100">Tandarts</p>
</div>
</div>

<div className="group relative rounded-3xl overflow-hidden transition-colors cursor-pointer bg-emerald-50/50 hover:bg-emerald-100/50">
<div className="aspect-[4/5] w-full relative">
<img alt="Teamlid" className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>
<div className="p-4 text-center">
<h4 className="text-lg font-semibold text-slate-900">Mondhygiënist</h4>
<p className="text-sm font-medium text-emerald-600">Mondzorg</p>
</div>
</div>

<div className="group relative rounded-3xl overflow-hidden transition-colors cursor-pointer bg-emerald-50/50 hover:bg-emerald-100/50">
<div className="aspect-[4/5] w-full relative">
<img alt="Teamlid" className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>
<div className="p-4 text-center">
<h4 className="text-lg font-semibold text-slate-900">Assistent</h4>
<p className="text-sm font-medium text-emerald-600">Tandartsassistent</p>
</div>
</div>

<div className="group relative rounded-3xl overflow-hidden transition-colors cursor-pointer bg-emerald-50/50 hover:bg-emerald-100/50">
<div className="aspect-[4/5] w-full relative">
<img alt="Teamlid" className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>
<div className="p-4 text-center">
<h4 className="text-lg font-semibold text-slate-900">Praktijkmanager</h4>
<p className="text-sm font-medium text-emerald-600">Administratie</p>
</div>
</div>
</div>
</div>
</section>

<section className="pt-24 pb-10 bg-slate-50 border-t border-slate-200" id="contact">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div className="space-y-6">
<a className="flex items-center gap-2" href="#">
<div className="bg-emerald-500 p-1.5 rounded-lg text-white">
<iconify-icon height="24" icon="solar:smile-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="text-xl font-semibold tracking-tight text-slate-900">Tjin A Lim</span>
</a>
<p className="text-slate-500 font-medium leading-relaxed">
                        Van Nijenrodeweg 898 B<br/>1081BH Amsterdam
                    </p>
<div className="p-4 bg-white border border-slate-200 rounded-2xl shadow-sm">
<p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Aangesloten bij</p>
<p className="text-sm font-semibold text-slate-800">Koninklijke Nederlandse Maatschappij tot Bevordering der Tandheelkunde</p>
</div>
</div>

<div>
<h4 className="font-bold mb-6 text-slate-900">Contactgegevens</h4>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-slate-500 font-medium">
<iconify-icon className="text-emerald-500 shrink-0 mt-1" height="20" icon="solar:map-point-linear" width="20"></iconify-icon>
<span>Van Nijenrodeweg 898 B, 1081BH Amsterdam</span>
</li>
<li className="flex items-center gap-3 text-slate-500 font-medium">
<iconify-icon className="text-emerald-500 shrink-0" height="20" icon="solar:phone-calling-linear" width="20"></iconify-icon>
<a className="hover:text-emerald-600" href="tel:0206612425">020 6612 425</a>
</li>
<li className="flex items-center gap-3 text-slate-500 font-medium">
<iconify-icon className="text-emerald-500 shrink-0" height="20" icon="solar:letter-linear" width="20"></iconify-icon>
<a className="hover:text-emerald-600 break-all" href="mailto:tandartstjinalim@gmail.com">tandartstjinalim@gmail.com</a>
</li>
</ul>
</div>

<div>
<h4 className="font-bold mb-6 text-slate-900">Openingstijden</h4>
<ul className="space-y-3 text-slate-500 font-medium">
<li className="flex justify-between border-b border-slate-200 pb-2">
<span>Maandag</span>
<span className="text-slate-900">09.00 - 16.30</span>
</li>
<li className="flex justify-between border-b border-slate-200 pb-2">
<span>Dinsdag</span>
<span className="text-slate-900">09.00 - 16.30</span>
</li>
<li className="flex justify-between border-b border-slate-200 pb-2">
<span>Woensdag</span>
<span className="text-slate-900">09.00 - 16.30</span>
</li>
<li className="flex justify-between border-b border-slate-200 pb-2">
<span>Donderdag</span>
<span className="text-slate-900">09.00 - 16.30</span>
</li>
</ul>
</div>

<div>
<h4 className="font-bold mb-6 text-slate-900">Links</h4>
<ul className="space-y-3 text-slate-500 font-medium">
<li><a className="hover:text-emerald-500 transition-colors" href="#">Home</a></li>
<li><a className="hover:text-emerald-500 transition-colors" href="#spoed">Spoed &amp; Pijnklachten</a></li>
<li><a className="hover:text-emerald-500 transition-colors" href="#team">Ons Team</a></li>
<li><a className="hover:text-emerald-500 transition-colors" href="#services">Diensten</a></li>
</ul>
</div>
</div>

<div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 border-slate-200">
<p className="text-slate-500 font-medium text-sm">© 2024 Tandartspraktijk Tjin A Lim. Alle rechten voorbehouden.</p>
<div className="flex gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-emerald-600" href="#">Privacyverklaring</a>
<a className="hover:text-emerald-600" href="#">Algemene Voorwaarden</a>
</div>
</div>
</div>
</section>

    </>
  );
}
