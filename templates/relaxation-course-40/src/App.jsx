import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        lucide.createIcons();
        
        // Mobile menu toggle
        const menuBtn = document.getElementById('menuBtn');
        const mobileNav = document.getElementById('mobileNav');
        if (menuBtn && mobileNav) {
            let open = false;
            menuBtn.addEventListener('click', () => {
                open = !open;
                mobileNav.classList.toggle('hidden', !open);
                menuBtn.innerHTML = open ? '<i data-lucide="x" class="h-5 w-5 text-white/90"></i>' : '<i data-lucide="menu" class="h-5 w-5 text-white/90"></i>';
                lucide.createIcons();
            });
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<header className="relative flex flex-col" style={{minHeight: '120vh'}}>
<div className="absolute inset-0">
<img alt="Entspannung" className="w-full h-full object-cover" src="https://www.samira-redeker.de/wp-content/uploads/2025/10/lab8NWzve19MGgftIhB5-mj.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/80"></div>
</div>
<nav className="relative z-10">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">

<a className="flex items-center gap-2" href="#">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-md ring-1 backdrop-blur" style={{backgroundColor: 'rgba(52, 150, 164, 0.2)', borderColor: 'rgba(52, 150, 164, 0.3)'}}>
<i className="h-4 w-4" data-lucide="compass" style={{color: '#3496A4', strokeWidth: '1.5'}}></i>
</span>
<span className="uppercase text-lg font-semibold tracking-tighter">RS</span>
</a>

<div className="hidden md:flex items-center gap-2">
<a className="px-3 py-1.5 rounded-full ring-1 text-sm font-medium text-white/90 hover:bg-white/10 transition font-geist" href="#" style={{backgroundColor: 'rgba(52, 150, 164, 0.15)', borderColor: 'rgba(52, 150, 164, 0.2)'}}>Über den Kurs</a>
<a className="px-3 py-1.5 rounded-full bg-white/5 ring-1 ring-white/15 text-sm font-medium text-white/70 hover:text-white/90 hover:bg-white/10 transition font-geist" href="#">Methode</a>
<a className="px-3 py-1.5 rounded-full bg-white/5 ring-1 ring-white/15 text-sm font-medium text-white/70 hover:text-white/90 hover:bg-white/10 transition font-geist" href="#">Kontakt</a>
</div>

<div className="hidden md:flex items-center gap-3">
<a className="text-sm font-medium text-white/80 hover:text-white transition font-geist" href="#">Anmelden</a>
<a className="inline-flex items-center gap-2 rounded-full text-white px-4 py-2 text-sm font-semibold hover:opacity-90 transition font-geist" href="#" style={{backgroundColor: '#3496A4'}}>
                            Jetzt starten
                        </a>
</div>

<button aria-label="Open menu" className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md bg-white/10 ring-1 ring-white/15 hover:bg-white/15 transition" id="menuBtn">
<i className="h-5 w-5 text-white/90" data-lucide="menu"></i>
</button>
</div>

<div className="md:hidden hidden border-t border-white/10 mt-2 pt-2 pb-3" id="mobileNav">
<div className="grid gap-2">
<a className="px-3 py-2 rounded-lg bg-white/5 ring-1 ring-white/10 text-sm font-medium text-white/90 font-geist" href="#">Über den Kurs</a>
<a className="px-3 py-2 rounded-lg bg-white/5 ring-1 ring-white/10 text-sm font-medium text-white/80 font-geist" href="#">Methode</a>
<a className="px-3 py-2 rounded-lg bg-white/5 ring-1 ring-white/10 text-sm font-medium text-white/80 font-geist" href="#">Kontakt</a>
<div className="flex items-center justify-between gap-2 pt-2">
<a className="text-sm font-medium text-white/80 font-geist" href="#">Anmelden</a>
<a className="inline-flex items-center gap-2 rounded-full text-white px-4 py-2 text-sm font-semibold transition font-geist" href="#" style={{backgroundColor: '#3496A4'}}>
                                Jetzt starten
                            </a>
</div>
</div>
</div>
</div>
</nav>

<section className="relative z-10 flex-1 flex items-center">
<div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12 text-center w-full">
<div className="inline-flex items-center gap-2 rounded-full px-3 py-1 ring-1 backdrop-blur" style={{backgroundColor: 'rgba(52, 150, 164, 0.2)', borderColor: 'rgba(52, 150, 164, 0.3)'}}>
<i className="h-4 w-4" data-lucide="brain" style={{color: '#6CAEBF', strokeWidth: '1.5'}}></i>
<span className="text-xs font-medium text-white/80 font-geist">Wissenschaftlich fundiert</span>
</div>
<h1 className="mt-6 text-4xl sm:text-5xl lg:text-7xl text-white font-light tracking-tighter">
                    Endlich abschalten. Aber richtig.
                </h1>
<p className="mx-auto mt-4 max-w-3xl text-base sm:text-lg text-white/80 font-geist">
                    Sie nehmen sich eine Auszeit, aber der Kopf rattert weiter im Manager-Modus? Dieser Kurs ist Ihre Anleitung, um den Reset-Knopf zu finden. Lernen Sie die Technik, um in wenigen Minuten von Anspannung zu echter Erholung zu wechseln.
                </p>
<div className="flex gap-3 mt-8 items-center justify-center">
<a className="inline-flex items-center gap-2 rounded-full text-white px-5 py-3 text-sm sm:text-base font-semibold hover:opacity-90 transition font-geist" href="#" style={{backgroundColor: '#3496A4'}}>
                        Jetzt starten
                    </a>
<a className="inline-flex items-center gap-2 sm:text-base hover:bg-white/15 ring-1 transition text-sm font-medium text-white font-geist bg-white/10 rounded-full pt-3 pr-5 pb-3 pl-5 backdrop-blur" href="#" style={{borderColor: 'rgba(173, 211, 215, 0.3)'}}>
                        Mehr erfahren
                    </a>
</div>

<div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 max-w-4xl mx-auto">
<div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-4 backdrop-blur">
<div className="flex gap-3 items-start">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-lg ring-1" style={{backgroundColor: 'rgba(52, 150, 164, 0.15)', borderColor: 'rgba(52, 150, 164, 0.2)'}}>
<i className="h-4 w-4" data-lucide="users" style={{color: '#6CAEBF', strokeWidth: '1.5'}}></i>
</span>
<div>
<p className="text-lg font-semibold tracking-tight" style={{color: '#3496A4'}}>2.500+</p>
<p className="text-xs text-white/70 font-geist">Teilnehmer</p>
</div>
</div>
</div>
<div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-4 backdrop-blur">
<div className="flex gap-3 items-start">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-lg ring-1" style={{backgroundColor: 'rgba(52, 150, 164, 0.15)', borderColor: 'rgba(52, 150, 164, 0.2)'}}>
<i className="h-4 w-4" data-lucide="check-circle" style={{color: '#6CAEBF', strokeWidth: '1.5'}}></i>
</span>
<div>
<p className="text-lg font-semibold tracking-tight" style={{color: '#3496A4'}}>95%</p>
<p className="text-xs text-white/70 font-geist">Zufriedenheit</p>
</div>
</div>
</div>
<div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-4 backdrop-blur">
<div className="flex gap-3 items-start">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-lg ring-1" style={{backgroundColor: 'rgba(52, 150, 164, 0.15)', borderColor: 'rgba(52, 150, 164, 0.2)'}}>
<i className="h-4 w-4" data-lucide="clock" style={{color: '#6CAEBF', strokeWidth: '1.5'}}></i>
</span>
<div>
<p className="text-lg font-semibold tracking-tight" style={{color: '#3496A4'}}>5 Min</p>
<p className="text-xs text-white/70 font-geist">Täglich</p>
</div>
</div>
</div>
<div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-4 backdrop-blur">
<div className="flex gap-3 items-start">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-lg ring-1" style={{backgroundColor: 'rgba(52, 150, 164, 0.15)', borderColor: 'rgba(52, 150, 164, 0.2)'}}>
<i className="h-4 w-4" data-lucide="calendar" style={{color: '#6CAEBF', strokeWidth: '1.5'}}></i>
</span>
<div>
<p className="text-lg font-semibold tracking-tight" style={{color: '#3496A4'}}>4 Wochen</p>
<p className="text-xs text-white/70 font-geist">Kursdauer</p>
</div>
</div>
</div>
</div>
<div className="mt-8 flex items-center justify-center gap-2 text-xs text-white/60">
<i className="h-3 w-3" data-lucide="lock"></i>
<span className="uppercase tracking-wider font-geist">Ihre Privatsphäre ist geschützt</span>
</div>
</div>
</section>
</header>


    </>
  );
}
