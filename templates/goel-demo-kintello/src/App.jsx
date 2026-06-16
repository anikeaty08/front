import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Geist', 'sans-serif'],
display: ['Montserrat', 'sans-serif'],
},
colors: {
brand: {
teal: '#5eead4', // Medical Mint/Teal
dark: '#0f172a',
},
neutral: {
50: '#fafafa',
100: '#f5f5f5',
200: '#e5e5e5',
300: '#d4d4d4',
400: '#a3a3a3',
500: '#737373',
600: '#525252',
700: '#404040',
800: '#262626',
900: '#171717',
}
},
animation: {
'marquee': 'marquee 40s linear infinite',
'clip-in': 'clipIn 1.2s cubic-bezier(0.25, 1, 0.5, 1) both',
'fade-up': 'fadeUp 0.8s ease-out forwards',
'float': 'float 6s ease-in-out infinite',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
},
keyframes: {
marquee: {
'0%': { transform: 'translateX(0%)' },
'100%': { transform: 'translateX(-50%)' },
},
clipIn: {
'0%': { opacity: '0', clipPath: 'inset(0 0 100% 0)' },
'100%': { opacity: '1', clipPath: 'inset(0 0 0 0)' },
},
fadeUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
},
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' },
}
}
}
}
}



        // Simple spotlight effect for cards
        document.querySelectorAll('.glass-panel, .spotlight-card').forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                // You could apply a custom property here if using the spotlight CSS
                // card.style.setProperty('--mouse-x', `${x}px`);
                // card.style.setProperty('--mouse-y', `${y}px`);
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-stone-200/50">
<div className="max-w-[1600px] mx-auto px-6 lg:px-12 h-16 lg:h-20 flex items-center justify-between">

<a className="block group text-xl lg:text-2xl font-semibold tracking-tight font-display text-stone-800" href="#">
                Praxis<span className="text-teal-500">GÖL</span>
<span className="block text-[10px] text-stone-400 font-medium tracking-widest uppercase -mt-1">Zahnarzt in Bobingen</span>
</a>

<nav className="hidden lg:flex font-display gap-x-10 items-center">
<a className="hover:text-teal-600 transition-colors text-sm font-medium text-stone-600" href="#services">Leistungen</a>
<a className="hover:text-teal-600 transition-colors text-sm font-medium text-stone-600" href="#team">Praxis &amp; Team</a>
<a className="hover:text-teal-600 transition-colors text-sm font-medium text-stone-600" href="#kontakt">Anfahrt</a>
</nav>

<div className="flex gap-x-6 items-center">
<a className="hidden md:flex items-center gap-2 text-sm font-semibold text-stone-600 hover:text-teal-600 transition-colors" href="tel:+49823400000">
<iconify-icon icon="solar:phone-calling-linear" width="18"></iconify-icon>
<span>08234 / 123 45</span>
</a>
<a className="bg-stone-900 text-[#5eead4] hover:bg-stone-800 transition-all font-medium px-5 py-2.5 rounded-lg text-xs lg:text-sm flex items-center gap-2 group shadow-lg shadow-teal-900/10" href="#booking">
                    Termin buchen
                    <iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="solar:calendar-add-linear"></iconify-icon>
</a>
</div>
</div>
</header>

<div className="fixed grid-lines w-full h-[100vh] top-0 right-0 left-0 pointer-events-none z-0"></div>
<div className="relative z-10 flex flex-col min-h-screen pt-16 lg:pt-20">
<main className="flex-1 w-full">

<section className="lg:px-12 lg:pt-16 lg:pb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 min-h-[60vh] lg:min-h-[80vh] max-w-[1600px] mx-auto pt-10 px-6 pb-12 items-center">
<div className="animate-clip-in lg:col-span-7 space-y-8" style={{animationDelay: '0.1s'}}>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-medium bg-white border-stone-200 text-stone-500 shadow-sm">
<span className="w-2 h-2 rounded-full bg-[#5eead4] animate-pulse"></span>
                        Jetzt neue Patienten willkommen
                    </div>

<h1 className="leading-[1] lg:text-7xl xl:text-8xl text-5xl font-semibold text-stone-900 tracking-tight font-display">
                        Moderne Zahnmedizin,
                        <span className="relative inline-block text-stone-800">familiär
                        <svg className="absolute w-full h-3 -bottom-1 left-0 text-[#5eead4] -z-10" preserveaspectratio="none" viewbox="0 0 100 10"><path d="M0 5 Q 50 10 100 5" fill="none" opacity="0.4" stroke="currentColor" strokeWidth="8"></path></svg>
</span>
                        betreut.
                    </h1>
<p className="leading-relaxed lg:text-xl text-lg font-normal text-stone-500 max-w-2xl">
                        Dr. Göl kümmert sich um Ihre Zahngesundheit, während Frau Göl und ihr Team für strahlende Prophylaxe und perfekten Zahnersatz sorgen. Ihre Experten in Bobingen.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 pt-4">
<button className="glass-button cursor-pointer outline-none focus:outline-none z-30 pointer-events-auto rounded-full relative group">
<span className="button-text block select-none text-lg font-semibold text-stone-900 tracking-tight py-4 px-8 relative flex items-center gap-3">
                                Online Termin vereinbaren
                                <iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</span>
<div className="button-shine"></div>
</button>
<a className="flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-stone-300 font-semibold text-stone-700 hover:bg-stone-100 transition-colors" href="#kontakt">
<iconify-icon icon="solar:map-point-linear" width="20"></iconify-icon>
                            Anfahrt
                        </a>
</div>
<style>
                    @property --angle-1 { syntax: "<angle>"; inherits: false; initial-value: -75deg; }
                    @property --angle-2 { syntax: "<angle>"; inherits: false; initial-value: -45deg; }
                    .glass-button {
                        background: linear-gradient(-75deg, rgba(94, 234, 212, 0.1), rgba(255, 255, 255, 0.6), rgba(94, 234, 212, 0.1));
                        box-shadow: inset 0 1px 2px rgba(255, 255, 255, 0.8), 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(94, 234, 212, 0.3) inset;
                        backdrop-filter: blur(8px);
                        transition: all 400ms cubic-bezier(0.25, 1, 0.5, 1);
                    }
                    .glass-button:hover { transform: scale(0.99); background-color: rgba(255,255,255,0.8); }
                    .button-shine {
                        position: absolute; inset: 0; border-radius: 999px; width: calc(100% - 1px); height: calc(100% - 1px); top: 0.5px; left: 0.5px;
                        background: linear-gradient(var(--angle-2), rgba(255, 255, 255, 0) 0%, rgba(94, 234, 212, 0.4) 40% 50%, rgba(255, 255, 255, 0) 55%);
                        mix-blend-mode: screen; pointer-events: none; background-size: 200% 200%; background-position: 0% 50%; background-repeat: no-repeat;
                        transition: background-position 500ms, --angle-2 500ms;
                    }
                    .glass-button:hover .button-shine { background-position: 25% 50%; }
                    </style>
</div>

<div className="lg:col-span-5 flex flex-col animate-fade-up lg:mt-0 h-full mt-8 relative justify-center" style={{animationDelay: '0.3s'}}>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#5eead4] opacity-20 blur-[100px] rounded-full pointer-events-none"></div>
<div className="relative space-y-5">

<div className="glass-panel p-5 rounded-2xl flex items-center gap-5 animate-float shadow-sm hover:shadow-md transition-shadow lg:ml-0 max-w-sm mx-auto w-full border-stone-100" style={{animationDelay: '0s'}}>
<div className="w-12 h-12 rounded-full flex items-center justify-center border shrink-0 bg-teal-50 text-teal-600 border-teal-100">
<iconify-icon icon="solar:user-id-linear" width="24"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-center mb-1">
<p className="text-sm font-semibold text-stone-900">Dr. Göl</p>
<span className="text-[10px] text-stone-400 font-medium">Zahnarzt</span>
</div>
<p className="text-xs text-stone-500 truncate">Zahnerhaltung &amp; Implantologie</p>
</div>
<span className="text-[10px] px-2 py-1 rounded border font-medium bg-white text-stone-600 border-stone-100 shadow-sm">Experte</span>
</div>

<div className="glass-panel p-5 rounded-2xl flex items-center gap-5 animate-float shadow-sm hover:shadow-md transition-shadow lg:ml-8 max-w-sm mx-auto w-full border-stone-100" style={{animationDelay: '1.5s'}}>
<div className="flex shrink-0 bg-[#5eead4] w-12 h-12 border rounded-full items-center justify-center text-teal-900 border-teal-400">
<iconify-icon icon="solar:stars-linear" width="24"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-center mb-1">
<p className="text-sm font-semibold text-stone-900">Prophylaxe</p>
<span className="text-[10px] text-stone-600">Frau Göl</span>
</div>
<p className="text-xs text-stone-600 truncate">Professionelle Zahnreinigung</p>
</div>
<span className="bg-white text-[10px] px-2 py-1 rounded border border-teal-200 text-teal-700 font-medium">Sanft</span>
</div>

<div className="glass-panel p-5 rounded-2xl flex items-center gap-5 animate-float shadow-sm hover:shadow-md transition-shadow lg:-ml-4 max-w-sm mx-auto w-full border-stone-100" style={{animationDelay: '2.5s'}}>
<div className="w-12 h-12 rounded-full text-[#5eead4] flex items-center justify-center border shrink-0 bg-stone-900 border-stone-800">
<iconify-icon icon="solar:tooth-linear" width="24"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-center mb-1">
<p className="text-sm font-semibold text-stone-900">Zahnersatz</p>
<span className="text-[10px] text-stone-400">Laborqualität</span>
</div>
<p className="text-xs text-stone-500 truncate">Kronen, Brücken &amp; Prothesen</p>
</div>
<iconify-icon className="text-green-500" icon="solar:check-circle-linear"></iconify-icon>
</div>
</div>
</div>
</section>

<div className="bg-white w-full z-20 rounded-t-[40px] pt-12 pb-12 relative shadow-[0_-20px_60px_rgba(0,0,0,0.03)] border-t border-stone-100">

<section className="max-w-[1600px] mx-auto w-full mb-16 lg:mb-24 px-6 lg:px-12">
<p className="text-left text-sm font-semibold text-stone-400 uppercase tracking-widest mb-8">Unsere Schwerpunkte</p>
<div className="overflow-hidden w-full relative">
<div className="z-10 bg-gradient-to-r to-transparent w-12 lg:w-40 h-full absolute top-0 left-0 from-white"></div>
<div className="bg-gradient-to-l to-transparent w-12 lg:w-40 h-full z-10 absolute top-0 right-0 from-white"></div>
<div className="flex w-max animate-marquee hover:pause-animation">
<div className="flex items-center gap-16 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500 text-stone-800">
<div className="flex items-center gap-3 text-xl lg:text-2xl font-medium font-display"><iconify-icon icon="solar:shield-check-linear"></iconify-icon> Implantologie</div>
<div className="flex items-center gap-3 text-xl lg:text-2xl font-medium font-display"><iconify-icon icon="solar:smile-circle-linear"></iconify-icon> Ästhetik</div>
<div className="flex items-center gap-3 text-xl lg:text-2xl font-medium font-display"><iconify-icon icon="solar:users-group-two-rounded-linear"></iconify-icon> Kinderzahnheilkunde</div>
<div className="flex items-center gap-3 text-xl lg:text-2xl font-medium font-display"><iconify-icon icon="solar:stars-minimalistic-linear"></iconify-icon> Bleaching</div>
<div className="flex items-center gap-3 text-xl lg:text-2xl font-medium font-display"><iconify-icon icon="solar:bone-linear"></iconify-icon> Parodontologie</div>
<div className="flex items-center gap-3 text-xl lg:text-2xl font-medium font-display"><iconify-icon icon="solar:medical-kit-linear"></iconify-icon> Wurzelbehandlung</div>
</div>

<div className="flex items-center gap-16 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500 text-stone-800 ml-16">
<div className="flex items-center gap-3 text-xl lg:text-2xl font-medium font-display"><iconify-icon icon="solar:shield-check-linear"></iconify-icon> Implantologie</div>
<div className="flex items-center gap-3 text-xl lg:text-2xl font-medium font-display"><iconify-icon icon="solar:smile-circle-linear"></iconify-icon> Ästhetik</div>
<div className="flex items-center gap-3 text-xl lg:text-2xl font-medium font-display"><iconify-icon icon="solar:users-group-two-rounded-linear"></iconify-icon> Kinderzahnheilkunde</div>
<div className="flex items-center gap-3 text-xl lg:text-2xl font-medium font-display"><iconify-icon icon="solar:stars-minimalistic-linear"></iconify-icon> Bleaching</div>
<div className="flex items-center gap-3 text-xl lg:text-2xl font-medium font-display"><iconify-icon icon="solar:bone-linear"></iconify-icon> Parodontologie</div>
<div className="flex items-center gap-3 text-xl lg:text-2xl font-medium font-display"><iconify-icon icon="solar:medical-kit-linear"></iconify-icon> Wurzelbehandlung</div>
</div>
</div>
</div>
</section>

<section className="max-w-[1600px] mx-auto px-6 lg:px-12 animate-fade-up w-full mb-12 lg:mb-20" style={{animationDelay: '0.4s'}}>
<div className="text-center mb-12">
<h2 className="lg:text-5xl text-3xl font-semibold text-stone-900 tracking-tight font-display">
                            Wir verstehen Ihre <span className="text-stone-400">Bedürfnisse.</span>
</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">

<div className="p-8 bg-neutral-50 border border-stone-100 rounded-2xl hover:shadow-lg hover:shadow-stone-200/50 transition-all duration-300">
<div className="w-12 h-12 bg-red-50 text-red-500 rounded-xl flex items-center justify-center mb-6 border border-red-100">
<iconify-icon icon="solar:danger-circle-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-bold text-stone-900 mb-2">Akute Zahnschmerzen?</h3>
<p className="text-stone-500 text-sm leading-relaxed">Wir bieten schnelle Notfalltermine, damit Sie schnell wieder schmerzfrei lächeln können.</p>
</div>

<div className="p-8 bg-neutral-50 border border-stone-100 rounded-2xl hover:shadow-lg hover:shadow-stone-200/50 transition-all duration-300">
<div className="w-12 h-12 bg-blue-50 text-blue-500 rounded-xl flex items-center justify-center mb-6 border border-blue-100">
<iconify-icon icon="solar:heart-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-bold mb-2 text-stone-900">Angstpatient?</h3>
<p className="text-stone-500 text-sm leading-relaxed">Unser Team nimmt sich Zeit für Sie. Einfühlsame Behandlung in entspannter Atmosphäre.</p>
</div>

<div className="p-8 bg-neutral-50 border border-stone-100 rounded-2xl hover:shadow-lg hover:shadow-stone-200/50 transition-all duration-300">
<div className="w-12 h-12 bg-teal-50 text-teal-600 rounded-xl flex items-center justify-center mb-6 border border-teal-100">
<iconify-icon icon="solar:magic-stick-3-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-bold mb-2 text-stone-900">Wunsch nach Ästhetik?</h3>
<p className="text-stone-500 text-sm leading-relaxed">Von Bleaching bis zu hochwertigen Keramik-Kronen – für ein perfektes Lächeln.</p>
</div>
</div>
</section>

<section className="lg:px-12 lg:mb-20 max-w-[1600px] mr-auto mb-12 ml-auto pr-6 pl-6" id="services">
<h2 className="text-3xl lg:text-5xl font-semibold text-stone-900 tracking-tight font-display mb-10 lg:mb-12">Rundum-Versorgung in Bobingen</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 auto-rows-fr">

<div className="row-span-1 lg:row-span-2 group overflow-hidden lg:p-10 flex flex-col min-h-[500px] lg:min-h-full transition-transform hover:scale-[1.01] duration-300 bg-[#0f172a] border-stone-800 border rounded-[32px] pt-8 pr-8 pb-8 pl-8 relative justify-between">
<div className="z-20 mt-auto relative">
<div className="flex text-white bg-white/10 w-12 h-12 border-white/10 border rounded-2xl mb-6 backdrop-blur-md items-center justify-center">
<iconify-icon icon="solar:stethoscope-linear" width="24"></iconify-icon>
</div>
<h3 className="lg:text-3xl text-2xl font-bold text-white font-display mb-3">Zahnmedizin Dr. Göl</h3>
<p className="text-stone-400 mb-6 text-sm lg:text-base leading-relaxed max-w-sm">
                                    Moderne Diagnostik, zahnerhaltende Maßnahmen und hochwertige Implantologie aus einer Hand.
                                </p>
<a className="inline-flex items-center text-[#5eead4] font-medium text-sm hover:underline underline-offset-4 group/link" href="#booking">
                                    Termin vereinbaren
                                    <iconify-icon className="ml-2 group-hover/link:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="flex-1 flex w-full mt-8 mb-8 relative items-center justify-center">
<div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent rounded-2xl pointer-events-none"></div>

<div className="transform group-hover:-translate-y-2 transition-transform duration-500 bg-stone-900 w-full max-w-[280px] z-10 rounded-xl p-5 relative shadow-2xl border border-stone-800">
<div className="flex justify-between border-b border-stone-800 pb-3 mb-3">
<div className="text-[10px] text-stone-500 font-mono uppercase">Patientenakte</div>
<div className="text-[10px] text-[#5eead4] font-mono">Digital</div>
</div>
<div className="space-y-3">
<div className="flex gap-3 items-center">
<div className="w-8 h-8 rounded bg-stone-800 flex items-center justify-center text-stone-400">
<iconify-icon icon="solar:tooth-linear" width="16"></iconify-icon>
</div>
<div className="flex-1">
<div className="h-1.5 w-16 bg-stone-700 rounded mb-1.5"></div>
<div className="h-1.5 w-24 bg-stone-800 rounded"></div>
</div>
<div className="w-4 h-4 rounded-full bg-teal-500/20 text-teal-400 flex items-center justify-center text-[10px]">
<iconify-icon icon="solar:check-circle-linear"></iconify-icon>
</div>
</div>
<div className="flex gap-3 items-center">
<div className="w-8 h-8 rounded bg-stone-800 flex items-center justify-center text-stone-400">
<iconify-icon icon="solar:scanner-linear" width="16"></iconify-icon>
</div>
<div className="flex-1">
<div className="h-1.5 w-20 bg-stone-700 rounded mb-1.5"></div>
<div className="h-1.5 w-12 bg-stone-800 rounded"></div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="col-span-1 md:col-span-2 group overflow-hidden lg:p-10 min-h-[400px] flex flex-col md:flex-row transition-transform hover:scale-[1.01] duration-300 bg-teal-50 border-teal-100 border rounded-[32px] pt-8 pr-8 pb-8 pl-8 relative items-center justify-between">
<div className="relative z-20 flex flex-col h-full justify-between w-full md:w-1/2 mb-8 md:mb-0">
<div>
<div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center mb-6 text-teal-600 shadow-sm">
<iconify-icon icon="solar:waterdrops-linear" width="24"></iconify-icon>
</div>
<h3 className="lg:text-3xl text-2xl font-bold text-stone-900 font-display mb-3">Prophylaxe &amp; Erhalt</h3>
<p className="text-stone-600 text-sm lg:text-base mb-6 leading-relaxed max-w-xs">
                                        Unter der Leitung von Frau Göl sorgen wir für gesunde Zähne und Zahnfleisch. Professionelle Reinigung auf höchstem Niveau.
                                    </p>
</div>
<div className="flex gap-3">
<span className="px-3 py-1 bg-white rounded-full text-xs font-medium text-teal-700 border border-teal-100">Airflow</span>
<span className="px-3 py-1 bg-white rounded-full text-xs font-medium text-teal-700 border border-teal-100">Versiegelung</span>
</div>
</div>

<div className="relative w-full md:w-1/2 h-full min-h-[220px] flex items-center justify-end">
<div className="absolute right-[-20px] md:right-[-40px] w-[120%] md:w-[110%] group-hover:scale-105 group-hover:-rotate-1 transition-all duration-500 ease-out">
<div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-xl border border-teal-200/50 p-6">
<div className="flex items-center gap-4 mb-4">
<div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center text-teal-600">
<iconify-icon icon="solar:smile-circle-linear" width="24"></iconify-icon>
</div>
<div>
<div className="text-sm font-bold text-stone-800">Recall Service</div>
<div className="text-xs text-stone-500">Automatische Erinnerung</div>
</div>
</div>
<div className="space-y-2">
<div className="h-2 w-full bg-stone-100 rounded-full overflow-hidden">
<div className="h-full bg-[#5eead4] w-3/4"></div>
</div>
<div className="flex justify-between text-[10px] text-stone-400 font-medium">
<span>Zahngesundheit</span>
<span>Optimal</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="group relative overflow-hidden bg-white rounded-[32px] p-6 lg:p-10 flex flex-col justify-between min-h-[350px] transition-transform hover:scale-[1.01] duration-300 border border-stone-200 shadow-sm">
<div className="relative w-full h-32 mb-4 flex justify-end">
<div className="bg-stone-50 p-4 rounded-xl border border-stone-100 transform group-hover:rotate-3 transition-transform">
<iconify-icon className="text-stone-300 text-6xl" icon="solar:crown-line-linear"></iconify-icon>
</div>
</div>
<div className="mt-auto relative z-20">
<div className="w-10 h-10 rounded-xl bg-stone-100 flex items-center justify-center mb-4 text-stone-900">
<iconify-icon icon="solar:medal-ribbon-linear" width="20"></iconify-icon>
</div>
<h3 className="lg:text-2xl text-xl font-bold text-stone-900 font-display mb-2">Hochwertiger Zahnersatz</h3>
<p className="text-stone-500 text-sm mb-4 leading-relaxed">Qualität "Made in Germany". Langlebig, ästhetisch und passgenau.</p>
</div>
</div>

<div className="group relative overflow-hidden bg-sky-50 rounded-[32px] p-6 lg:p-10 flex flex-col justify-between min-h-[350px] transition-transform hover:scale-[1.01] duration-300 border border-sky-100">
<div className="relative w-full h-32 mb-4">
<div className="absolute right-0 top-2 bg-white p-3 rounded-xl shadow-sm border border-sky-100 rotate-6 group-hover:rotate-12 transition-transform">
<iconify-icon className="text-sky-400 text-4xl" icon="solar:balloon-linear"></iconify-icon>
</div>
</div>
<div className="z-20 mt-auto relative">
<div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center mb-4 text-sky-600">
<iconify-icon icon="solar:emoji-funny-circle-linear" width="20"></iconify-icon>
</div>
<h3 className="lg:text-2xl text-xl font-bold text-stone-900 font-display mb-2">Kinderzahnheilkunde</h3>
<p className="text-stone-600 text-sm mb-4 leading-relaxed">Einfühlsame Behandlung für unsere kleinen Patienten. Angstfrei zum Zahnarzt.</p>
</div>
</div>
</div>
</section>

<section className="max-w-[1600px] mx-auto px-6 lg:px-12 mt-16 lg:mt-20 mb-12 lg:mb-20" id="kontakt">
<div className="overflow-hidden min-h-[500px] lg:h-[600px] rounded-[32px] relative shadow-2xl border shadow-stone-900/10 bg-[#0f172a] border-stone-800">

<div className="opacity-10 absolute top-0 right-0 bottom-0 left-0" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)', backgroundSize: '30px 30px'}}></div>
<div className="flex flex-col lg:flex-row h-full relative z-10">

<div className="flex-1 lg:p-16 flex flex-col pt-12 pr-8 pb-8 pl-8 justify-center">
<div className="flex items-center gap-2 mb-6">
<div className="w-2 h-2 bg-[#5eead4] rounded-full animate-pulse"></div>
<span className="text-[#5eead4] font-mono text-xs uppercase tracking-wider">Bobingen Zentrum</span>
</div>
<h2 className="lg:text-5xl xl:text-6xl leading-tight text-3xl font-semibold text-white tracking-tight font-display mb-6">
                                    Hier finden Sie uns.
                                </h2>
<div className="space-y-6 mb-10 text-stone-300 font-light text-lg">
<div className="flex gap-4 items-start">
<iconify-icon className="text-2xl text-stone-500 mt-1" icon="solar:map-point-linear"></iconify-icon>
<div>
<strong className="block text-white font-medium">Zahnarztpraxis GÖL</strong>
<span>Hauptstraße 12<br/>86399 Bobingen</span>
</div>
</div>
<div className="flex gap-4 items-start">
<iconify-icon className="text-2xl text-stone-500 mt-1" icon="solar:phone-calling-linear"></iconify-icon>
<div>
<strong className="block text-white font-medium">Telefon</strong>
<a className="text-[#5eead4] hover:underline decoration-1 underline-offset-4 text-xl font-semibold" href="tel:+49823412345">08234 / 123 45</a>
</div>
</div>
</div>
<a className="group flex items-center gap-3 bg-[#5eead4] hover:bg-[#4fd1be] transition-all text-sm font-bold rounded-full px-8 py-4 w-fit shadow-lg hover:shadow-[0_0_20px_rgba(94,234,212,0.4)] text-stone-900" href="https://goo.gl/maps/placeholder" target="_blank">
<span>Auf Google Maps öffnen</span>
<iconify-icon className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" icon="solar:map-arrow-up-linear"></iconify-icon>
</a>
</div>

<div className="flex lg:w-[50%] lg:pt-24 lg:pr-16 lg:pl-0 lg:items-center lg:pb-34 pt-8 pr-4 pb-16 pl-4 relative items-end justify-center">

<div className="relative w-full max-w-md transform transition-transform hover:scale-[1.02] duration-500">
<div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-sky-500 rounded-2xl blur opacity-20"></div>
<div className="relative bg-slate-900 border border-slate-700 rounded-xl overflow-hidden shadow-2xl">

<div className="bg-slate-800 h-64 w-full relative overflow-hidden">

<div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(#94a3b8 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>

<div className="absolute top-1/2 left-0 w-full h-2 bg-slate-700 -translate-y-1/2 transform rotate-12"></div>
<div className="absolute top-0 left-1/2 h-full w-2 bg-slate-700 -translate-x-1/2"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
<div className="w-8 h-8 bg-[#5eead4] rounded-full flex items-center justify-center text-slate-900 shadow-lg animate-bounce">
<iconify-icon icon="solar:map-point-bold"></iconify-icon>
</div>
<div className="w-3 h-1.5 bg-black/50 blur-sm rounded-[50%] mt-1"></div>
</div>
</div>

<div className="p-4 bg-slate-900/95 backdrop-blur border-t border-slate-700">
<div className="flex justify-between items-center">
<div>
<p className="text-xs text-slate-400 font-mono mb-1">ZIELORT</p>
<p className="text-sm font-bold text-white">Praxis GÖL, Bobingen</p>
</div>
<div className="bg-teal-500/10 text-[#5eead4] p-2 rounded-lg">
<iconify-icon icon="solar:routing-2-linear" width="20"></iconify-icon>
</div>
</div>
<div className="mt-3 flex gap-2">
<div className="text-[10px] bg-slate-800 text-slate-300 px-2 py-1 rounded border border-slate-700">Parkplätze vorhanden</div>
<div className="text-[10px] bg-slate-800 text-slate-300 px-2 py-1 rounded border border-slate-700">Barrierefrei</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-[1600px] mx-auto px-6 lg:px-12 my-12 lg:my-20">
<div className="lg:p-20 overflow-hidden text-center bg-teal-50 rounded-[32px] pt-12 pr-8 pb-12 pl-8 relative border border-teal-100">
<div className="relative z-10 max-w-3xl mx-auto space-y-8">
<h2 className="text-3xl lg:text-5xl leading-tight font-semibold text-stone-900 tracking-tight font-display">
                                Bereit für Ihr schönstes Lächeln?
                            </h2>
<p className="text-stone-600 max-w-lg mx-auto">
                                Vereinbaren Sie jetzt Ihren Termin bei Dr. Göl &amp; Frau Göl. Wir freuen uns auf Sie.
                            </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
<a className="font-medium px-8 py-4 rounded-full transition-transform hover:scale-105 shadow-xl bg-stone-900 text-white hover:bg-stone-800 w-full sm:w-auto text-center flex justify-center items-center gap-2" href="#booking">
                                    Termin buchen
                                    <iconify-icon icon="solar:calendar-add-linear"></iconify-icon>
</a>
<a className="font-medium px-8 py-4 rounded-full transition-transform hover:scale-105 bg-white border border-stone-200 text-stone-900 hover:bg-stone-50 w-full sm:w-auto text-center flex justify-center items-center gap-2" href="tel:+49823412345">
<iconify-icon icon="solar:phone-calling-linear"></iconify-icon>
                                    08234 / 123 45
                                </a>
</div>
</div>

<div className="absolute top-0 left-0 w-full h-full opacity-40 pointer-events-none" style={{backgroundImage: 'radial-gradient(circle at 10% 20%, #5eead4 0%, transparent 20%), radial-gradient(circle at 90% 80%, #5eead4 0%, transparent 20%)', filter: 'blur(40px)'}}></div>
</div>
</section>

<footer className="max-w-[1600px] mx-auto px-6 lg:px-12 pb-8">
<div className="border rounded-3xl p-8 lg:p-12 shadow-sm bg-white border-stone-200">
<div className="flex flex-col lg:flex-row gap-10 lg:gap-16 justify-between">
<div className="lg:w-1/3 space-y-5">
<div className="flex gap-2 items-center">
<span className="text-xl font-bold tracking-tight font-display">Praxis<span className="text-teal-500">GÖL</span></span>
</div>
<p className="text-sm text-stone-500 max-w-sm leading-relaxed">
                                    Ihre Zahnarztpraxis in Bobingen. Zahnerhaltung, Zahnersatz und Prophylaxe mit Herz und Verstand.
                                </p>
</div>
<div className="flex flex-wrap gap-10 lg:gap-24 text-sm">
<div className="space-y-4">
<h3 className="text-xs uppercase font-semibold tracking-wider text-stone-400">Praxis</h3>
<ul className="space-y-3 text-stone-600">
<li><a className="hover:text-stone-900 transition-colors" href="#services">Leistungen</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#team">Unser Team</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#kontakt">Anfahrt</a></li>
</ul>
</div>
<div className="space-y-4">
<h3 className="text-xs uppercase font-semibold tracking-wider text-stone-400">Öffnungszeiten</h3>
<ul className="space-y-3 text-stone-600">
<li>Mo - Do: 08:00 - 18:00</li>
<li>Fr: 08:00 - 14:00</li>
<li><span className="text-teal-600 text-xs font-medium bg-teal-50 px-2 py-0.5 rounded">Termine nach Vereinbarung</span></li>
</ul>
</div>
<div className="space-y-4">
<h3 className="text-xs uppercase font-semibold tracking-wider text-stone-400">Rechtliches</h3>
<ul className="space-y-3 text-stone-600">
<li><a className="hover:text-stone-900 transition-colors" href="#">Impressum</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#">Datenschutz</a></li>
</ul>
</div>
</div>
</div>
<div className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 text-xs border-stone-100 text-stone-400">
<p>© 2024 Zahnarztpraxis Göl. Alle Rechte vorbehalten.</p>
<div className="flex gap-4">
<span>Design adapted for Healthcare</span>
</div>
</div>
</div>
</footer>
</div>
</main>
</div>


    </>
  );
}
