import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
brand: {
50: '#fff1f0',
100: '#ffdfdc',
200: '#ffc4bf',
300: '#ff9e96',
400: '#ff6b60',
500: '#f93a2f',
600: '#e52014',
700: '#c2150a',
800: '#a0140b',
900: '#660b05',
}
},
boxShadow: {
'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.03)',
'glass-lg': '0 12px 48px 0 rgba(0, 0, 0, 0.04)',
'card': '0 2px 10px -2px rgba(0, 0, 0, 0.02), 0 8px 40px -4px rgba(0, 0, 0, 0.04)',
'card-hover': '0 10px 40px -4px rgba(0, 0, 0, 0.08), 0 20px 60px -8px rgba(0, 0, 0, 0.06)',
'inner-light': 'inset 0 1px 0 0 rgba(255, 255, 255, 0.8)',
},
backgroundImage: {
'mesh': 'radial-gradient(at 0% 0%, hsla(3,100%,74%,0.05) 0px, transparent 40%), radial-gradient(at 100% 0%, hsla(220,20%,50%,0.03) 0px, transparent 40%)',
'mesh-dark': 'radial-gradient(at 20% 0%, hsla(3,100%,60%,0.15) 0px, transparent 50%), radial-gradient(at 80% 100%, hsla(220,100%,60%,0.1) 0px, transparent 50%)',
}
}
}
}



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
      

<nav className="fixed top-0 z-50 w-full bg-white/80 backdrop-blur-xl border-b border-slate-200/50 transition-all duration-300 shadow-sm">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<div className="flex items-center gap-3 group cursor-pointer">
<div className="w-8 h-8 bg-gradient-to-br from-brand-500 to-brand-700 rounded-lg flex items-center justify-center shadow-inner-light shadow-sm">
<span className="text-white font-medium text-lg tracking-tighter">F</span>
</div>
<span className="text-sm font-medium tracking-tight text-slate-900 uppercase tracking-[0.15em] mt-0.5">Fincollect</span>
</div>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-slate-900 transition-colors" href="#">Úvod</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">O nás</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">Často kladené dotazy</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">Kontakt</a>
</div>

<div className="hidden lg:flex items-center gap-6">
<a className="text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors uppercase tracking-widest" href="#">Pro Klienty</a>
<a className="h-9 px-4 inline-flex items-center justify-center gap-1.5 bg-slate-900 hover:bg-slate-800 text-white rounded-md text-xs font-medium transition-all shadow-sm" href="#">
                    Pro Partnery <iconify-icon className="text-sm" icon="solar:alt-arrow-right-linear"></iconify-icon>
</a>
</div>

<button className="md:hidden p-2 text-slate-500 hover:text-slate-900 transition-colors">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</nav>

<section className="relative pt-40 pb-32 overflow-hidden bg-white">

<div className="absolute inset-0 bg-mesh pointer-events-none z-0"></div>
<div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,theme(colors.brand.50)_0%,transparent_60%)] opacity-70 z-0 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-20 items-center">

<div className="max-w-2xl">
<div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200/80 text-slate-600 text-xs font-medium mb-8 shadow-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
</span>
                        Profesionální správa pohledávek
                    </div>
<h1 className="text-5xl sm:text-6xl md:text-7xl font-medium text-slate-900 tracking-tighter leading-[1.05] mb-6 text-balance">
                        Dokážeme vyřešit <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-brand-600 to-brand-500">i Váš dluh.</span>
</h1>
<p className="text-lg sm:text-xl text-slate-500 leading-relaxed mb-10 font-normal text-balance max-w-xl">
                        Vstupujeme jako profesionální prostředník mezi věřitele a dlužníka, čímž aktivně a bezpečně uzdravujeme finanční trh.
                    </p>
<div className="flex flex-col sm:flex-row items-center gap-4">
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-7 py-3.5 rounded-lg text-sm font-medium transition-all shadow-card hover:-translate-y-0.5 group" href="#">
                            Chci se zbavit dluhu
                            <iconify-icon className="text-lg transition-transform group-hover:translate-x-1" icon="solar:alt-arrow-right-linear"></iconify-icon>
</a>
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 px-7 py-3.5 rounded-lg text-sm font-medium transition-all shadow-sm hover:-translate-y-0.5" href="#">
                            Zjistit více
                        </a>
</div>
</div>

<div className="relative hidden lg:block">

<div className="absolute inset-0 bg-gradient-to-tr from-brand-100/40 to-slate-100/40 rounded-3xl blur-2xl transform -rotate-3 scale-105"></div>

<div className="relative w-full aspect-[4/3] bg-white/90 backdrop-blur-xl rounded-2xl border border-slate-200/60 shadow-glass-lg p-8 flex flex-col">

<div className="flex justify-between items-center mb-8">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100">
<iconify-icon className="text-slate-500 text-xl" icon="solar:wallet-linear"></iconify-icon>
</div>
<div>
<div className="text-xs font-medium text-slate-500 mb-0.5">Úspěšnost vymáhání</div>
<div className="text-xl font-medium tracking-tight text-slate-900">84.2%</div>
</div>
</div>
<div className="flex gap-1.5">
<div className="w-1.5 h-1.5 rounded-full bg-slate-200"></div>
<div className="w-1.5 h-1.5 rounded-full bg-slate-200"></div>
<div className="w-1.5 h-1.5 rounded-full bg-slate-200"></div>
</div>
</div>

<div className="flex-1 flex items-end gap-3 px-2">

<div className="w-full bg-slate-50 rounded-t-md relative h-full flex items-end"><div className="w-full bg-slate-200 rounded-t-md bar-animate" style={{-TargetH: '30%'}}></div></div>
<div className="w-full bg-slate-50 rounded-t-md relative h-full flex items-end"><div className="w-full bg-slate-200 rounded-t-md bar-animate" style={{-TargetH: '45%'}}></div></div>
<div className="w-full bg-slate-50 rounded-t-md relative h-full flex items-end"><div className="w-full bg-slate-200 rounded-t-md bar-animate" style={{-TargetH: '60%'}}></div></div>
<div className="w-full bg-slate-50 rounded-t-md relative h-full flex items-end"><div className="w-full bg-brand-100 rounded-t-md bar-animate" style={{-TargetH: '55%'}}></div></div>
<div className="w-full bg-slate-50 rounded-t-md relative h-full flex items-end"><div className="w-full bg-brand-500 rounded-t-md bar-animate shadow-[0_0_15px_rgba(249,58,47,0.3)]" style={{-TargetH: '85%'}}></div></div>
<div className="w-full bg-slate-50 rounded-t-md relative h-full flex items-end"><div className="w-full bg-slate-800 rounded-t-md bar-animate" style={{-TargetH: '95%'}}></div></div>
</div>

<div className="absolute -bottom-8 -left-8 bg-white rounded-xl border border-slate-200 shadow-card p-5 max-w-[240px] flex items-start gap-4 transform transition-transform hover:-translate-y-1 duration-300">
<div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center border border-green-100 shrink-0">
<iconify-icon className="text-green-500 text-xl" icon="solar:check-circle-linear"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-slate-900 tracking-tight mb-1">Mimosoudní řešení</div>
<div className="text-xs text-slate-500 font-normal leading-relaxed">Aktivní komunikace a rychlá dohoda.</div>
</div>
</div>

<div className="absolute top-16 -right-6 bg-white rounded-xl border border-slate-200 shadow-card p-4 flex items-center gap-3 transform transition-transform hover:-translate-y-1 duration-300">
<div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center border border-slate-100">
<iconify-icon className="text-slate-600 text-lg" icon="solar:bookmark-square-linear"></iconify-icon>
</div>
<div>
<div className="text-xs font-medium text-slate-500 mb-0.5">Soudní vymáhání</div>
<div className="text-sm font-medium text-slate-900 tracking-tight">Advokátní péče</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-y border-slate-200/50">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-20 items-center">

<div className="relative order-2 lg:order-1">
<div className="absolute -inset-4 bg-gradient-to-tr from-slate-200/50 to-white rounded-[2rem] transform -rotate-2 z-0"></div>
<div className="aspect-square rounded-[1.5rem] bg-slate-200 relative overflow-hidden shadow-card border border-white/60 z-10">
<img alt="Financial consultation" className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-80" src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent"></div>
</div>

<div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-5 shadow-card border border-slate-100 z-20 flex items-center gap-4">
<div className="flex -space-x-3">
<div className="w-10 h-10 rounded-full bg-slate-100 border-2 border-white"></div>
<div className="w-10 h-10 rounded-full bg-slate-200 border-2 border-white"></div>
<div className="w-10 h-10 rounded-full bg-brand-50 border-2 border-white flex items-center justify-center text-brand-600 text-xs font-medium">+</div>
</div>
<div>
<div className="text-sm font-medium text-slate-900">Tisíce klientů</div>
<div className="text-xs text-slate-500">spokojených s výsledky</div>
</div>
</div>
</div>

<div className="order-1 lg:order-2 lg:pl-10">
<div className="flex items-center gap-3 mb-6">
<div className="h-px w-8 bg-brand-600"></div>
<span className="text-brand-600 font-medium tracking-widest uppercase text-xs">O nás</span>
</div>
<h2 className="text-4xl sm:text-5xl font-medium text-slate-900 tracking-tighter mb-8 text-balance">Jsme tu proto, abychom Vám pomohli.</h2>
<div className="space-y-6 text-lg text-slate-500 leading-relaxed font-normal mb-10">
<p>
                            Naším primárním posláním je pomoci Vám, klientům, dát do pořádku Vaši finanční situaci co nejpřijatelnější cestou pro obě strany.
                        </p>
<p>
                            Zaměřujeme se na mimosoudní a soudní vymáhání pohledávek. Spolupracujeme se zkušenou advokátní kanceláří v případech, kdy je nevyhnutelné situaci řešit soudní cestou.
                        </p>
</div>
<a className="inline-flex items-center gap-2 text-sm text-slate-900 font-medium hover:text-brand-600 transition-colors group" href="#">
                        Více o naší společnosti
                        <iconify-icon className="text-lg transition-transform group-hover:translate-x-1" icon="solar:alt-arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-32 bg-white relative">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-50/50 via-white to-white pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center max-w-2xl mx-auto mb-20">
<h2 className="text-4xl sm:text-5xl font-medium text-slate-900 tracking-tighter mb-5">Vše potřebné na jednom místě</h2>
<p className="text-lg text-slate-500 font-normal">Transparentní proces a srozumitelná komunikace jsou základem našeho úspěchu.</p>
</div>
<div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

<div className="group relative bg-white rounded-[2rem] border border-slate-200/80 shadow-card hover:shadow-card-hover transition-all duration-500 overflow-hidden flex flex-col">
<div className="p-10 pb-8 relative z-10 flex-1">
<div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-700 mb-6 group-hover:border-brand-200 group-hover:text-brand-600 transition-colors duration-300">
<iconify-icon className="text-2xl" icon="solar:question-circle-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-medium text-slate-900 mb-3 tracking-tight">Často kladené dotazy</h3>
<p className="text-base text-slate-500 leading-relaxed font-normal mb-6">
                            Odpovědi na časté otázky jsme pro Vás shromáždili na jedno místo, proto je už nemusíte zdlouhavě hledat.
                        </p>
<a className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-600 group-hover:gap-2 transition-all duration-300" href="#">
                            Zobrazit dotazy <iconify-icon className="text-base" icon="solar:alt-arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="mt-auto px-10 pb-10">
<div className="w-full bg-slate-50 rounded-xl border border-slate-100 p-4 space-y-3 relative overflow-hidden group-hover:border-brand-100 transition-colors">
<div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-slate-50 to-transparent z-10"></div>
<div className="h-2 w-3/4 bg-slate-200 rounded-full"></div>
<div className="h-2 w-1/2 bg-slate-200 rounded-full"></div>
<div className="h-2 w-5/6 bg-slate-200 rounded-full"></div>
</div>
</div>
</div>

<div className="group relative bg-white rounded-[2rem] border border-slate-200/80 shadow-card hover:shadow-card-hover transition-all duration-500 overflow-hidden flex flex-col">
<div className="p-10 pb-8 relative z-10 flex-1">
<div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-700 mb-6 group-hover:border-slate-300 group-hover:text-slate-900 transition-colors duration-300">
<iconify-icon className="text-2xl" icon="solar:book-2-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-medium text-slate-900 mb-3 tracking-tight">Slovník pojmů</h3>
<p className="text-base text-slate-500 leading-relaxed font-normal mb-6">
                            Mluvíme Vaší řečí. Připravili jsme jednoduchou pomůcku pro snazší orientaci v odborné terminologii.
                        </p>
<a className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-900 group-hover:gap-2 transition-all duration-300" href="#">
                            Otevřít slovník <iconify-icon className="text-base" icon="solar:alt-arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="mt-auto px-10 pb-10">
<div className="w-full bg-slate-50 rounded-xl border border-slate-100 p-4 flex items-center gap-3 relative group-hover:border-slate-300 transition-colors">
<iconify-icon className="text-slate-400 text-lg" icon="solar:magnifer-linear"></iconify-icon>
<div className="h-2 w-1/3 bg-slate-200 rounded-full"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-slate-950 relative overflow-hidden">

<div className="absolute inset-0 bg-mesh-dark opacity-40"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-500/10 rounded-full blur-[120px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-20 items-center">

<div>
<div className="inline-flex items-center gap-2 mb-8">
<div className="h-px w-8 bg-brand-500"></div>
<span className="text-brand-400 font-medium tracking-widest uppercase text-xs">Víte že, ...?</span>
</div>
<h2 className="text-4xl sm:text-5xl font-medium text-white tracking-tighter mb-8 text-balance">
                        Vymáhání pohledávek pomáhá rozvoji firem.
                    </h2>
<p className="text-lg text-slate-400 leading-relaxed font-normal mb-10">
                        Jako inkasní agentura se snažíme, aby se firmám vrátily zpět jejich prostředky. Firma je tak může opětovně použít pro svůj strategický růst.
                    </p>
<ul className="space-y-6">
<li className="flex items-start gap-4">
<div className="mt-0.5 w-6 h-6 rounded-full bg-brand-500/10 border border-brand-500/20 flex items-center justify-center shrink-0">
<iconify-icon className="text-sm text-brand-400" icon="solar:check-circle-linear"></iconify-icon>
</div>
<span className="text-base text-slate-300 font-normal">Otevření více pracovních míst pro odborníky</span>
</li>
<li className="flex items-start gap-4">
<div className="mt-0.5 w-6 h-6 rounded-full bg-brand-500/10 border border-brand-500/20 flex items-center justify-center shrink-0">
<iconify-icon className="text-sm text-brand-400" icon="solar:check-circle-linear"></iconify-icon>
</div>
<span className="text-base text-slate-300 font-normal">Rozvoj a investice do nových inovativních projektů</span>
</li>
<li className="flex items-start gap-4">
<div className="mt-0.5 w-6 h-6 rounded-full bg-brand-500/10 border border-brand-500/20 flex items-center justify-center shrink-0">
<iconify-icon className="text-sm text-brand-400" icon="solar:check-circle-linear"></iconify-icon>
</div>
<span className="text-base text-slate-300 font-normal">Zvýšení tržní stability a odolnosti firmy</span>
</li>
</ul>
</div>

<div className="relative w-full">

<div className="relative bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl">
<div className="absolute inset-0 bg-gradient-to-br from-brand-500/5 to-transparent rounded-3xl pointer-events-none"></div>
<div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-800 border border-slate-700/50">
<img alt="Business growth" className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-luminosity" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>

<div className="absolute bottom-6 left-6 right-6">
<div className="flex items-end gap-2 h-24 mb-4">
<div className="w-full bg-white/5 rounded-t-sm h-[30%]"></div>
<div className="w-full bg-white/10 rounded-t-sm h-[50%]"></div>
<div className="w-full bg-white/20 rounded-t-sm h-[70%]"></div>
<div className="w-full bg-brand-500/80 rounded-t-sm h-[100%] shadow-[0_0_20px_rgba(249,58,47,0.4)] relative">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-slate-900 text-xs font-medium px-2 py-1 rounded shadow-lg">+42%</div>
</div>
</div>
<div className="flex justify-between text-xs font-medium text-slate-400">
<span>Q1</span>
<span>Q2</span>
<span>Q3</span>
<span className="text-brand-400">Q4</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative">
<div className="max-w-6xl mx-auto px-6">
<div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-[2.5rem] p-12 sm:p-20 text-center relative overflow-hidden border border-slate-200/60 shadow-glass">

<div className="absolute top-0 right-0 w-64 h-64 bg-brand-50 rounded-full blur-3xl opacity-60 pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-64 h-64 bg-slate-200 rounded-full blur-3xl opacity-40 pointer-events-none"></div>
<div className="relative z-10 max-w-2xl mx-auto">
<h2 className="text-4xl sm:text-5xl font-medium text-slate-900 tracking-tighter mb-6">
                        Potřebujete pomoci s dluhem?
                    </h2>
<p className="text-lg text-slate-500 mb-10 font-normal">
                        Neodkládejte řešení Vašich dluhů na později. Náš tým specialistů je připraven Vám pomoci najít to nejlepší řešení už dnes.
                    </p>
<a className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-xl text-sm font-medium transition-all shadow-card hover:-translate-y-0.5 group" href="#">
                        Kontaktujte nás
                        <iconify-icon className="text-lg transition-transform group-hover:translate-x-1" icon="solar:alt-arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-100 pt-20 pb-12">
<div className="max-w-7xl mx-auto px-6">

<div className="grid sm:grid-cols-3 gap-12 border-b border-slate-100 pb-16 mb-12">
<div className="flex flex-col items-center sm:items-start text-center sm:text-left group cursor-default">
<div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 mb-4 group-hover:border-brand-200 group-hover:text-brand-600 transition-colors shadow-sm">
<iconify-icon className="text-xl" icon="solar:phone-linear"></iconify-icon>
</div>
<span className="text-xs font-medium text-slate-400 uppercase tracking-widest mb-1.5 block">Zavolejte nám</span>
<a className="text-lg font-medium text-slate-900 hover:text-brand-600 transition-colors tracking-tight" href="tel:295562180">295 562 180</a>
</div>
<div className="flex flex-col items-center sm:items-start text-center sm:text-left group cursor-default">
<div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 mb-4 group-hover:border-slate-300 group-hover:text-slate-900 transition-colors shadow-sm">
<iconify-icon className="text-xl" icon="solar:map-point-linear"></iconify-icon>
</div>
<span className="text-xs font-medium text-slate-400 uppercase tracking-widest mb-1.5 block">Fincollect SE</span>
<span className="text-base text-slate-600 font-normal">Londýnská 730/59,<br/> 120 00 Praha 2</span>
</div>
<div className="flex flex-col items-center sm:items-start text-center sm:text-left group cursor-default">
<div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 mb-4 group-hover:border-brand-200 group-hover:text-brand-600 transition-colors shadow-sm">
<iconify-icon className="text-xl" icon="solar:letter-linear"></iconify-icon>
</div>
<span className="text-xs font-medium text-slate-400 uppercase tracking-widest mb-1.5 block">Napište nám</span>
<a className="text-lg font-medium text-slate-900 hover:text-brand-600 transition-colors tracking-tight" href="mailto:info@fincollect.cz">info@fincollect.cz</a>
</div>
</div>

<div className="flex flex-col md:flex-row items-center justify-between gap-8">
<div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-medium text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#">Úvod</a>
<a className="hover:text-slate-900 transition-colors" href="#">O nás</a>
<a className="hover:text-slate-900 transition-colors" href="#">Často kladené dotazy</a>
<a className="hover:text-slate-900 transition-colors" href="#">Kontakt</a>
</div>
<div className="flex items-center gap-6 text-xs font-medium text-slate-400 uppercase tracking-widest">
<a className="hover:text-brand-600 transition-colors" href="#">Pro partnery</a>
<a className="hover:text-slate-900 transition-colors" href="#">Pro klienty</a>
</div>
</div>
<div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-normal">
<p>© 2019 - 2025 Fincollect SE. Všechna práva vyhrazena.</p>
<a className="hover:text-slate-600 transition-colors" href="#">Zásady ochrany osobních údajů</a>
</div>
</div>
</footer>

    </>
  );
}
