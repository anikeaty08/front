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
black: '#0a0a0a',
dark: '#121212',
red: '#DC2626', // Signal Red
redHover: '#EF4444',
surface: '#171717',
border: '#262626'
}
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
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
      

<nav className="fixed top-0 w-full z-50 backdrop-blur-md border-b border-brand-border/50 bg-brand-black/80 h-16 flex items-center">
<div className="max-w-6xl mx-auto w-full px-6 flex justify-between items-center">
<a className="text-xl tracking-tighter font-semibold text-white flex items-center gap-2" href="#">
<span className="iconify text-brand-red" data-icon="lucide:wrench" data-width="20"></span>
                wirholens.de
            </a>
<a className="hidden md:block text-sm font-medium text-gray-400 hover:text-white transition-colors" href="#anfrage">
                Reparatur starten
            </a>
</div>
</nav>

<header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 border-b border-brand-border overflow-hidden">

<div className="absolute inset-0 tech-grid pointer-events-none z-0"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-brand-red/10 rounded-full blur-[120px] pointer-events-none z-0"></div>
<div className="max-w-4xl mx-auto relative z-10 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-border bg-brand-surface/50 backdrop-blur-sm mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-red opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-brand-red"></span>
</span>
<span className="text-xs font-medium text-gray-400 tracking-wide uppercase">System Status: Online</span>
</div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-white tracking-tight leading-[1.1] mb-6">
                Display Schrott? Daten weg? <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500">Wir retten dein digitales Leben.</span>
</h1>
<p className="text-lg md:text-xl text-gray-400 font-light mb-10 max-w-2xl mx-auto leading-relaxed">
                Professionelle Reparatur für Smartphones, Tablets, PCs und Konsolen. Schnell, sicher und zu fairen Festpreisen.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="group bg-brand-red hover:bg-brand-redHover text-white px-8 py-3.5 rounded-lg font-medium transition-all duration-300 shadow-[0_0_20px_-5px_rgba(220,38,38,0.5)] hover:shadow-[0_0_30px_-5px_rgba(220,38,38,0.7)] flex items-center gap-2" href="#anfrage">
                    Jetzt Reparatur-Anfrage starten
                    <span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-width="18"></span>
</a>
<a className="text-gray-400 hover:text-white font-medium px-6 py-3 transition-colors flex items-center gap-2" href="#kompetenzen">
                    Services ansehen
                    <span className="iconify" data-icon="lucide:chevron-down" data-width="16"></span>
</a>
</div>
</div>
</header>

<div className="bg-brand-surface border-b border-brand-border py-3">
<div className="max-w-6xl mx-auto px-6 flex justify-center items-center gap-2 text-sm md:text-base">
<span className="text-brand-red flex gap-0.5">
<span className="iconify" data-icon="lucide:star" data-width="16" style={{fill: 'currentColor'}}></span>
<span className="iconify" data-icon="lucide:star" data-width="16" style={{fill: 'currentColor'}}></span>
<span className="iconify" data-icon="lucide:star" data-width="16" style={{fill: 'currentColor'}}></span>
<span className="iconify" data-icon="lucide:star" data-width="16" style={{fill: 'currentColor'}}></span>
<span className="iconify" data-icon="lucide:star" data-width="16" style={{fill: 'currentColor'}}></span>
</span>
<span className="text-gray-300 font-medium">Exzellent:</span>
<span className="text-gray-500">5.0 Sterne bei über 160 Google-Bewertungen</span>
</div>
</div>

<section className="py-20 px-6">
<div className="max-w-6xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">

<div className="space-y-4 group">
<div className="w-12 h-12 rounded-lg bg-brand-surface border border-brand-border flex items-center justify-center text-brand-red group-hover:border-brand-red/30 transition-colors">
<span className="iconify" data-icon="lucide:award" data-width="24"></span>
</div>
<h3 className="text-xl font-semibold text-white tracking-tight">Höchste Qualität</h3>
<p className="text-gray-400 leading-relaxed text-sm">
                        Wir verbauen nur erstklassige Ersatzteile für maximale Langlebigkeit. Keine Billigware, sondern Komponenten, auf die du dich verlassen kannst.
                    </p>
</div>

<div className="space-y-4 group">
<div className="w-12 h-12 rounded-lg bg-brand-surface border border-brand-border flex items-center justify-center text-brand-red group-hover:border-brand-red/30 transition-colors">
<span className="iconify" data-icon="lucide:scan-search" data-width="24"></span>
</div>
<h3 className="text-xl font-semibold text-white tracking-tight">Absolute Transparenz</h3>
<p className="text-gray-400 leading-relaxed text-sm">
                        Kostenloser Check &amp; unverbindliches Angebot. Wir schrauben erst, wenn du das Go gibst. Du entscheidest erst nach der Diagnose.
                    </p>
</div>

<div className="space-y-4 group">
<div className="w-12 h-12 rounded-lg bg-brand-surface border border-brand-border flex items-center justify-center text-brand-red group-hover:border-brand-red/30 transition-colors">
<span className="iconify" data-icon="lucide:shield-check" data-width="24"></span>
</div>
<h3 className="text-xl font-semibold text-white tracking-tight">Datensicherheit</h3>
<p className="text-gray-400 leading-relaxed text-sm">
                        Deine privaten Daten bleiben privat. Wir reparieren mit Diskretion und Sorgfalt. Dein digitales Leben ist bei uns sicher.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 bg-brand-dark/50 border-y border-brand-border" id="kompetenzen">
<div className="max-w-6xl mx-auto">
<div className="mb-12">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">9 Kompetenzen. <span className="text-gray-600">Eine Mission.</span></h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

<div className="bg-brand-surface/40 hover:bg-brand-surface/80 border border-brand-border hover:border-brand-red/30 p-6 rounded-xl transition-all duration-300 flex items-start gap-4 group">
<span className="iconify text-gray-500 group-hover:text-brand-red transition-colors mt-1" data-icon="lucide:smartphone" data-width="24"></span>
<div>
<h4 className="text-white font-medium mb-1">Smartphone-Reparatur</h4>
<p className="text-xs text-gray-500">Display, Kamera, Housing</p>
</div>
</div>
<div className="bg-brand-surface/40 hover:bg-brand-surface/80 border border-brand-border hover:border-brand-red/30 p-6 rounded-xl transition-all duration-300 flex items-start gap-4 group">
<span className="iconify text-gray-500 group-hover:text-brand-red transition-colors mt-1" data-icon="lucide:tablet" data-width="24"></span>
<div>
<h4 className="text-white font-medium mb-1">Tablet &amp; iPad Service</h4>
<p className="text-xs text-gray-500">Für alle gängigen Modelle</p>
</div>
</div>
<div className="bg-brand-surface/40 hover:bg-brand-surface/80 border border-brand-border hover:border-brand-red/30 p-6 rounded-xl transition-all duration-300 flex items-start gap-4 group">
<span className="iconify text-gray-500 group-hover:text-brand-red transition-colors mt-1" data-icon="lucide:laptop" data-width="24"></span>
<div>
<h4 className="text-white font-medium mb-1">PC &amp; Laptop Rettung</h4>
<p className="text-xs text-gray-500">Hardware &amp; Performance</p>
</div>
</div>
<div className="bg-brand-surface/40 hover:bg-brand-surface/80 border border-brand-border hover:border-brand-red/30 p-6 rounded-xl transition-all duration-300 flex items-start gap-4 group">
<span className="iconify text-gray-500 group-hover:text-brand-red transition-colors mt-1" data-icon="lucide:apple" data-width="24"></span>
<div>
<h4 className="text-white font-medium mb-1">Apple MacBook Profis</h4>
<p className="text-xs text-gray-500">Spezialisierte Reparaturen</p>
</div>
</div>
<div className="bg-brand-surface/40 hover:bg-brand-surface/80 border border-brand-border hover:border-brand-red/30 p-6 rounded-xl transition-all duration-300 flex items-start gap-4 group">
<span className="iconify text-gray-500 group-hover:text-brand-red transition-colors mt-1" data-icon="lucide:gamepad-2" data-width="24"></span>
<div>
<h4 className="text-white font-medium mb-1">Spielekonsolen</h4>
<p className="text-xs text-gray-500">PS5, Xbox, Switch &amp; Co.</p>
</div>
</div>
<div className="bg-brand-surface/40 hover:bg-brand-surface/80 border border-brand-border hover:border-brand-red/30 p-6 rounded-xl transition-all duration-300 flex items-start gap-4 group">
<span className="iconify text-gray-500 group-hover:text-brand-red transition-colors mt-1" data-icon="lucide:joystick" data-width="24"></span>
<div>
<h4 className="text-white font-medium mb-1">Controller-Instandsetzung</h4>
<p className="text-xs text-gray-500">Drift-Fix &amp; Tasten-Tausch</p>
</div>
</div>
<div className="bg-brand-surface/40 hover:bg-brand-surface/80 border border-brand-border hover:border-brand-red/30 p-6 rounded-xl transition-all duration-300 flex items-start gap-4 group">
<span className="iconify text-gray-500 group-hover:text-brand-red transition-colors mt-1" data-icon="lucide:hard-drive" data-width="24"></span>
<div>
<h4 className="text-white font-medium mb-1">Datenrettung &amp; Backup</h4>
<p className="text-xs text-gray-500">Wenn nichts mehr geht</p>
</div>
</div>
<div className="bg-brand-surface/40 hover:bg-brand-surface/80 border border-brand-border hover:border-brand-red/30 p-6 rounded-xl transition-all duration-300 flex items-start gap-4 group">
<span className="iconify text-gray-500 group-hover:text-brand-red transition-colors mt-1" data-icon="lucide:battery-charging" data-width="24"></span>
<div>
<h4 className="text-white font-medium mb-1">Akku- &amp; Ladeport</h4>
<p className="text-xs text-gray-500">Volle Power zurück</p>
</div>
</div>
<div className="bg-brand-surface/40 hover:bg-brand-surface/80 border border-brand-border hover:border-brand-red/30 p-6 rounded-xl transition-all duration-300 flex items-start gap-4 group">
<span className="iconify text-gray-500 group-hover:text-brand-red transition-colors mt-1" data-icon="lucide:cpu" data-width="24"></span>
<div>
<h4 className="text-white font-medium mb-1">Software- &amp; System</h4>
<p className="text-xs text-gray-500">Viren, Updates, Installation</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative overflow-hidden" id="anfrage">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-red/5 rounded-full blur-[100px] pointer-events-none z-0"></div>
<div className="max-w-4xl mx-auto relative z-10">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-6">In 3 Schritten zur Reparatur.</h2>
<div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16 text-left md:text-center">
<div className="flex-1">
<span className="text-brand-red font-mono text-sm mb-2 block">01</span>
<p className="text-gray-300 text-sm">Anfrage unverbindlich über das Formular unten ausfüllen.</p>
</div>
<div className="flex-1">
<span className="text-brand-red font-mono text-sm mb-2 block">02</span>
<p className="text-gray-300 text-sm">Gerät im Laden vorbeibringen oder sicher per Post einsenden.</p>
</div>
<div className="flex-1">
<span className="text-brand-red font-mono text-sm mb-2 block">03</span>
<p className="text-gray-300 text-sm">Diagnose erhalten, Preis bestätigen, Gerät repariert zurückerhalten.</p>
</div>
</div>
</div>

<div className="w-full bg-brand-black border border-brand-border rounded-2xl glow-red overflow-hidden relative">

<div className="bg-brand-surface/50 border-b border-brand-border px-6 py-4 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<span className="text-xs text-gray-500 font-mono">anfrage_modul.exe</span>
</div>

<div className="p-8 md:p-12 min-h-[500px] flex flex-col items-center justify-center bg-brand-dark/30">
<div className="text-center space-y-4">
<div className="w-16 h-16 bg-brand-surface rounded-full flex items-center justify-center mx-auto border border-brand-border animate-pulse">
<span className="iconify text-brand-red" data-icon="lucide:settings-2" data-width="32"></span>
</div>
<h3 className="text-2xl font-semibold text-white tracking-tight">Deine Reparatur-Anfrage</h3>
<p className="text-gray-500 text-sm max-w-sm mx-auto">
                            Hier wird das externe Buchungssystem geladen. Bitte warten Sie einen Moment oder aktivieren Sie JavaScript.
                        </p>

<div className="mt-8 p-4 border border-dashed border-gray-800 rounded w-full max-w-md mx-auto h-32 flex items-center justify-center text-gray-700 text-xs">
                            [ iFrame Bereich: Hier Booking-Tool einbetten ]
                        </div>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-brand-border bg-brand-black py-12 px-6 text-sm">
<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-1 md:col-span-2">
<a className="text-lg tracking-tighter font-semibold text-white flex items-center gap-2 mb-4" href="#">
<span className="iconify text-brand-red" data-icon="lucide:wrench" data-width="18"></span>
                    wirholens.de
                </a>
<p className="text-gray-500 max-w-xs">
                    Ihr zuverlässiger Partner für Technik-Reparaturen. Schnell, transparent und professionell. Wir retten, was Ihnen wichtig ist.
                </p>
</div>
<div>
<h4 className="text-white font-medium mb-4">Kontakt</h4>
<ul className="space-y-2 text-gray-500">
<li className="flex items-center gap-2 hover:text-brand-red transition-colors cursor-pointer">
<span className="iconify" data-icon="lucide:phone" data-width="14"></span>
                        0123 456 789
                    </li>
<li className="flex items-center gap-2 hover:text-brand-red transition-colors cursor-pointer">
<span className="iconify" data-icon="lucide:mail" data-width="14"></span>
                        hallo@wirholens.de
                    </li>
<li className="flex items-start gap-2 mt-2">
<span className="iconify mt-1" data-icon="lucide:map-pin" data-width="14"></span>
<span>Musterstraße 12<br/>10115 Berlin</span>
</li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Öffnungszeiten</h4>
<ul className="space-y-2 text-gray-500">
<li className="flex justify-between max-w-[140px]">
<span>Mo - Fr</span>
<span className="text-gray-300">10:00 - 19:00</span>
</li>
<li className="flex justify-between max-w-[140px]">
<span>Sa</span>
<span className="text-gray-300">10:00 - 16:00</span>
</li>
</ul>
</div>
</div>
<div className="max-w-6xl mx-auto pt-8 border-t border-brand-border flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
<p>© 2023 wirholens.de. Alle Rechte vorbehalten.</p>
<div className="flex gap-6">
<a className="hover:text-gray-400 transition-colors" href="#">Impressum</a>
<a className="hover:text-gray-400 transition-colors" href="#">Datenschutz</a>
<a className="hover:text-gray-400 transition-colors" href="#">AGB</a>
</div>
</div>
</footer>

    </>
  );
}
