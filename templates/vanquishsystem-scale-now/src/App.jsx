import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
nunito: ['Nunito', 'sans-serif'],
},
colors: {
cream: {
50: '#FDFBF9',
100: '#F7F5F2',
200: '#EAE5DC',
},
sky: {
100: '#Dbeafe',
}
},
animation: {
'fade-in': 'fadeIn 1s ease-out forwards',
'slide-up': 'slideUp 1s ease-out forwards',
'blob': 'blob 7s infinite',
'float': 'float 6s ease-in-out infinite',
'glow': 'glow 3s ease-in-out infinite alternate',
},
keyframes: {
fadeIn: {
'0%': { opacity: '0' },
'100%': { opacity: '1' },
},
slideUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
},
blob: {
'0%': { transform: 'translate(0px, 0px) scale(1)' },
'33%': { transform: 'translate(30px, -50px) scale(1.1)' },
'66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
'100%': { transform: 'translate(0px, 0px) scale(1)' }
},
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' }
},
glow: {
'0%': { boxShadow: '0 0 20px rgba(59, 130, 246, 0.2)' },
'100%': { boxShadow: '0 0 50px rgba(59, 130, 246, 0.6)' }
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener("DOMContentLoaded", function() {
            
            // 1. Scroll Animations (Intersection Observer)
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const revealObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.remove('opacity-0', 'translate-y-8');
                        entry.target.classList.add('opacity-100', 'translate-y-0');
                        observer.unobserve(entry.target);
                    }
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
<img alt="Sky Background" className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-multiply transition-transform duration-1000 scale-105" id="bg-sky" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bfd2f4cf-65ed-4b1a-86d1-a1710619267b_1600w.png"/>
<div className="absolute inset-0 bg-gradient-to-b from-[#A6CBE8]/20 via-[#BFD9EF]/40 to-[#EAE3D6]"></div>

<div className="absolute top-20 left-10 md:left-20 w-48 md:w-72 h-48 md:h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-[80px] md:blur-[100px] opacity-60 animate-blob"></div>
<div className="absolute top-40 right-10 md:right-20 w-48 md:w-72 h-48 md:h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-[80px] md:blur-[100px] opacity-60 animate-blob animation-delay-2000"></div>
<div className="absolute -bottom-8 left-1/2 w-48 md:w-72 h-48 md:h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-[80px] md:blur-[100px] opacity-60 animate-blob animation-delay-4000"></div>
<img alt="cloud" className="parallax-cloud absolute top-[20%] -left-[10%] w-[80%] md:w-[50%] opacity-40 mix-blend-screen blur-xl pointer-events-none transition-transform duration-300 ease-out" data-speed="1.5" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<img alt="cloud" className="parallax-cloud absolute top-[30%] -right-[10%] w-[80%] md:w-[50%] opacity-40 mix-blend-screen blur-xl pointer-events-none transition-transform duration-300 ease-out" data-speed="-1.5" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>

<div className="relative z-10 flex flex-col min-h-screen">

<nav className="w-full px-4 py-4 md:px-12 md:py-6 flex items-center justify-between max-w-7xl mx-auto animate-fade-in relative z-50">
<div className="flex items-center gap-3 group cursor-pointer">

</div>
<div className="hidden md:flex items-center gap-8 text-base font-normal text-slate-700 bg-white/30 backdrop-blur-md px-6 py-2.5 rounded-full border border-white/50 shadow-sm hover:shadow-md transition-all duration-300">
<a className="relative group hover:text-blue-900 transition-colors py-1" href="#solucion">
                    Solución
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full rounded-full"></span>
</a>
<a className="relative group hover:text-blue-900 transition-colors py-1" href="#metodologia">
                    Metodología
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full rounded-full"></span>
</a>
<a className="relative group hover:text-blue-900 transition-colors py-1" href="#diferencia">
                    Enfoque
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full rounded-full"></span>
</a>
<a className="relative group hover:text-blue-900 transition-colors py-1" href="#modelo">
                    Modelo de Trabajo
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full rounded-full"></span>
</a>
</div>
<div className="">
<button className="relative overflow-hidden group hover:shadow-[0_0_20px_rgba(0,0,0,0.3)] hover:-translate-y-0.5 transition-all cursor-pointer text-sm md:text-base font-normal text-white bg-[#1A1A1A] rounded-full pt-2 pr-4 pb-2 pl-4 md:pt-2.5 md:pr-6 md:pb-2.5 md:pl-6 flex items-center gap-2" onclick="window.location.href='https://koalendar.com/e/reunirse-con-vanquishsystem'" role="button">
<span className="absolute inset-0 bg-gradient-to-r from-blue-600/50 to-purple-600/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
<span className="relative z-10">Agendar Auditoría</span>
<iconify-icon className="text-base md:text-lg relative z-10 transform group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
<div className="absolute inset-0 bg-black/50 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0"></div>
</button>
</div>
</nav>

<main className="flex-grow flex flex-col items-center pt-8 pb-16 md:pt-12 md:pb-20 px-4 md:px-6 w-full max-w-7xl mx-auto relative">

<div className="text-center max-w-4xl mx-auto mb-12 md:mb-16 animate-slide-up relative z-10" style={{animationDelay: '0.1s'}}>
<div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-white/40 border border-white/60 backdrop-blur-md mb-6 md:mb-8 text-xs md:text-sm font-medium text-slate-700 shadow-sm animate-float">
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
                    Sistemas automatizados para empresas de alto valor
                </div>
<h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-[#1A1A1A] tracking-tight font-nunito mb-6 md:mb-8 leading-tight hover:scale-[1.02] transition-transform duration-500 cursor-default drop-shadow-sm">Sistemas de captación.<br/>Inteligencia comercial.</h1>
<p className="text-base sm:text-lg md:text-xl font-normal text-slate-700 font-sans max-w-3xl mx-auto mb-8 md:mb-10 leading-relaxed bg-white/20 backdrop-blur-sm rounded-2xl p-4 border border-white/30">
                    Ayudamos a <b>empresas de reformas, inmobiliarias y servicios locales</b> a automatizar procesos. Filtramos el ruido para que solo obtengas leads cualificados que de verdad se convierten en clientes rentables.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 w-full px-4 sm:px-0">
<button className="relative overflow-hidden group text-base md:text-lg font-normal text-white bg-[#1A1A1A] w-full sm:w-auto rounded-full py-3 px-6 md:py-3.5 md:px-8 shadow-lg hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] hover:-translate-y-1 transition-all flex items-center justify-center gap-2">
<span className="absolute inset-0 bg-gradient-to-r from-blue-600/40 to-indigo-600/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
<span className="relative z-10">Agendar Sesión Estratégica</span>
<div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0"></div>
</button>
<button className="group bg-white/60 backdrop-blur-md border border-white/80 text-[#1A1A1A] text-base md:text-lg font-normal py-3 px-6 md:py-3.5 md:px-8 rounded-full hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all w-full sm:w-auto flex items-center justify-center gap-2">
                        Ver Metodología
                        <iconify-icon className="text-xl group-hover:animate-bounce" icon="solar:round-alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>

<div className="w-full max-w-[1300px] bg-[#FDFBF9]/95 backdrop-blur-xl rounded-[24px] md:rounded-t-[32px] md:rounded-b-none shadow-2xl border border-white/80 overflow-hidden flex flex-col md:flex-row relative animate-slide-up group/dash transition-all duration-700 hover:shadow-[0_40px_100px_-20px_rgba(59,130,246,0.25)]" style={{animationDelay: '0.3s'}}>

<div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-50 group-hover/dash:opacity-100 transition-opacity duration-500"></div>

<aside className="hidden md:flex flex-col w-64 border-r border-slate-200/60 p-6 bg-white/40 backdrop-blur-md transition-colors duration-500 relative z-10">
<div className="flex items-center gap-3 mb-8 px-2">
<span className="text-xl font-semibold text-slate-900 tracking-tight font-nunito group-hover/dash:text-blue-700 transition-colors">vanquishsystem</span>
<div className="ml-auto cursor-pointer hover:bg-slate-200/50 p-1.5 rounded-md transition-colors">
<iconify-icon className="text-xl text-slate-400" icon="solar:alt-arrow-left-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<nav className="space-y-1 mb-8 dash-nav relative">
<a className="dash-link active flex items-center gap-3 px-3 py-2.5 rounded-lg bg-[#EAE5DC]/80 shadow-sm text-blue-900 font-medium text-base transition-all hover:translate-x-1 relative overflow-hidden" href="#">
<div className="absolute inset-0 bg-gradient-to-r from-white/40 to-transparent"></div>
<iconify-icon className="text-xl relative z-10" icon="solar:home-angle-linear" strokeWidth="1.5"></iconify-icon>
<span className="relative z-10">Visión General</span>
</a>
<a className="dash-link flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-white/60 hover:shadow-sm transition-all hover:translate-x-1 font-normal text-base" href="#">
<iconify-icon className="text-xl" icon="solar:users-group-rounded-linear" strokeWidth="1.5"></iconify-icon>
                            Proyectos &amp; Captación
                        </a>
<a className="dash-link flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-white/60 hover:shadow-sm transition-all hover:translate-x-1 font-normal text-base" href="#">
<iconify-icon className="text-xl" icon="solar:git-branch-linear" strokeWidth="1.5"></iconify-icon>
                            Leads Cualificados
                        </a>
<a className="dash-link flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-white/60 hover:shadow-sm transition-all hover:translate-x-1 font-normal text-base" href="#">
<iconify-icon className="text-xl" icon="solar:server-square-linear" strokeWidth="1.5"></iconify-icon>
                            Infraestructura IA
                        </a>
</nav>
<div className="mt-auto relative">
<p className="px-3 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Automatizaciones</p>
<nav className="space-y-1 dash-nav">
<a className="dash-link flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-500 hover:text-blue-600 hover:bg-blue-50/50 hover:shadow-sm transition-all hover:translate-x-1 font-normal text-base group/sub" href="#">
<iconify-icon className="text-xl group-hover/sub:animate-pulse" icon="solar:inbox-linear" strokeWidth="1.5"></iconify-icon>
                                Seguimiento 24/7
                            </a>
<a className="dash-link flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-500 hover:text-purple-600 hover:bg-purple-50/50 hover:shadow-sm transition-all hover:translate-x-1 font-normal text-base group/sub" href="#">
<iconify-icon className="text-xl group-hover/sub:scale-110 transition-transform" icon="solar:document-text-linear" strokeWidth="1.5"></iconify-icon>
                                Marketing Omnicanal
                            </a>
<a className="dash-link flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-500 hover:text-green-600 hover:bg-green-50/50 hover:shadow-sm transition-all hover:translate-x-1 font-normal text-base group/sub" href="#">
<iconify-icon className="text-xl group-hover/sub:rotate-12 transition-transform" icon="solar:database-linear" strokeWidth="1.5"></iconify-icon>
                                CRM Comercial
                            </a>
</nav>
</div>
</aside>

<div className="flex-1 p-4 md:p-8 md:max-h-none overflow-y-auto bg-transparent max-h-[80vh] relative z-10">

<header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 md:mb-8">
<div className="group cursor-default">
<h2 className="text-xl md:text-2xl font-semibold tracking-tight text-slate-900 font-nunito group-hover:text-blue-600 transition-colors flex items-center gap-2">
                                Estado del Negocio
                                <iconify-icon className="text-lg text-slate-300 group-hover:text-blue-400 transition-colors opacity-0 group-hover:opacity-100 hidden md:block" icon="solar:info-circle-linear"></iconify-icon>
</h2>
<p className="text-sm md:text-base text-slate-500 mt-0.5 font-normal">Operaciones y proyectos activos</p>
</div>
<div className="flex items-center gap-4 cursor-pointer hover:bg-white/80 hover:shadow-sm p-2 rounded-xl border border-transparent hover:border-slate-200 transition-all self-start md:self-auto">

<div className="flex items-center gap-3 pl-0 md:pl-4 md:border-l border-slate-200">
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span>
</span>
<span className="font-mono text-sm md:text-base font-normal text-slate-700">Sistemas Óptimos</span>
</div>
</div>
</header>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6 md:mb-8 relative">

<div className="group bg-white/60 backdrop-blur-sm p-4 md:p-5 rounded-xl border border-white hover:border-blue-300 hover:shadow-[0_8px_30px_rgba(59,130,246,0.12)] hover:-translate-y-1 transition-all duration-300 cursor-pointer relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="flex items-center gap-2 text-slate-500 mb-4 md:mb-6 group-hover:text-blue-600 transition-colors relative z-10">
<div className="p-1.5 bg-white rounded-md shadow-sm border border-slate-100 group-hover:scale-110 group-hover:shadow-md transition-transform">
<iconify-icon className="text-lg text-slate-700 group-hover:text-blue-600" icon="solar:cpu-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-xs md:text-sm font-medium">Agentes IA Activos</span>
</div>
<div className="flex items-end justify-between relative z-10">
<span className="text-xl md:text-2xl font-semibold text-slate-900 tracking-tight font-nunito group-hover:text-blue-900 transition-colors">Operativos</span>
</div>
</div>

<div className="group bg-white/60 backdrop-blur-sm p-4 md:p-5 rounded-xl border border-white hover:border-purple-300 hover:shadow-[0_8px_30px_rgba(168,85,247,0.12)] hover:-translate-y-1 transition-all duration-300 cursor-pointer relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="flex items-center gap-2 text-slate-500 mb-4 md:mb-6 group-hover:text-purple-600 transition-colors relative z-10">
<div className="p-1.5 bg-white rounded-md shadow-sm border border-slate-100 group-hover:scale-110 group-hover:shadow-md transition-transform">
<iconify-icon className="text-lg text-slate-700 group-hover:text-purple-600" icon="solar:filter-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-xs md:text-sm font-medium">Filtro de Clientes</span>
</div>
<div className="flex items-end justify-between relative z-10">
<span className="text-2xl md:text-4xl font-semibold text-slate-900 tracking-tight font-nunito group-hover:text-purple-900 transition-colors">Estable</span>
</div>
</div>

<div className="group bg-white/60 backdrop-blur-sm p-4 md:p-5 rounded-xl border border-white hover:border-orange-300 hover:shadow-[0_8px_30px_rgba(249,115,22,0.12)] hover:-translate-y-1 transition-all duration-300 cursor-pointer relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="flex items-center gap-2 text-slate-500 mb-4 md:mb-6 group-hover:text-orange-600 transition-colors relative z-10">
<div className="p-1.5 bg-white rounded-md shadow-sm border border-slate-100 group-hover:scale-110 group-hover:shadow-md transition-transform">
<iconify-icon className="text-lg text-slate-700 group-hover:text-orange-600" icon="solar:layers-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-xs md:text-sm font-medium">Procesos IA</span>
</div>
<div className="flex items-end justify-between relative z-10">
<span className="text-2xl md:text-4xl font-semibold tracking-tight font-nunito text-slate-900 counter group-hover:text-orange-900 transition-colors" data-target="100">Activos</span>
</div>
</div>

<div className="group bg-white/60 backdrop-blur-sm p-4 md:p-5 rounded-xl border border-white hover:border-green-300 hover:shadow-[0_8px_30px_rgba(34,197,94,0.12)] hover:-translate-y-1 transition-all duration-300 cursor-pointer relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="flex items-center gap-2 text-slate-500 mb-4 md:mb-6 group-hover:text-green-600 transition-colors relative z-10">
<div className="p-1.5 bg-white rounded-md shadow-sm border border-slate-100 group-hover:scale-110 group-hover:shadow-md transition-transform">
<iconify-icon className="text-lg text-slate-700 group-hover:text-green-600" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-xs md:text-sm font-medium">Sincronización</span>
</div>
<div className="flex items-end justify-between relative z-10">
<span className="text-xl md:text-xl font-semibold text-slate-900 tracking-tight font-nunito group-hover:text-green-900 transition-colors">100% Sincronizado</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">

<div className="lg:col-span-2 bg-white/80 backdrop-blur-sm border border-white rounded-xl p-5 md:p-6 shadow-sm hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:border-blue-100 transition-all group cursor-crosshair relative overflow-hidden">
<div className="absolute right-0 top-0 w-64 h-64 bg-blue-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-200/50 transition-colors duration-700 pointer-events-none"></div>
<div className="flex items-center justify-between mb-6 md:mb-8 relative z-10">
<h3 className="font-medium text-sm md:text-base text-slate-900 group-hover:text-blue-700 transition-colors">Estabilidad del Flujo de Captación</h3>
</div>
<div className="flex flex-wrap items-center gap-4 text-xs md:text-sm font-medium mb-6 relative z-10">
<div className="flex items-center gap-1.5 hover:opacity-80 transition-opacity">
<span className="w-2 h-2 rounded-full bg-slate-800 shadow-[0_0_5px_rgba(30,41,59,0.5)]"></span>
<span className="text-slate-600">Volumen Bruto</span>
</div>
<div className="flex items-center gap-1.5 hover:opacity-80 transition-opacity">
<span className="w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_5px_rgba(96,165,250,0.8)]"></span>
<span className="text-slate-500">Filtrado IA (Intención)</span>
</div>
</div>

<div className="h-32 md:h-48 w-full flex items-end justify-between gap-1 md:gap-4 px-1 md:px-2 chart-container relative z-10">
<div className="w-full bg-slate-200/60 rounded-t-sm chart-bar transition-all duration-1000 ease-out hover:bg-blue-300 hover:shadow-[0_0_15px_rgba(96,165,250,0.5)] hover:scale-y-105 origin-bottom" data-height="30%" style={{height: '0%'}}></div>
<div className="w-full bg-slate-200/60 rounded-t-sm chart-bar transition-all duration-1000 ease-out hover:bg-blue-300 hover:shadow-[0_0_15px_rgba(96,165,250,0.5)] hover:scale-y-105 origin-bottom delay-75" data-height="65%" style={{height: '0%'}}></div>
<div className="w-full bg-slate-200/60 rounded-t-sm chart-bar transition-all duration-1000 ease-out hover:bg-blue-300 hover:shadow-[0_0_15px_rgba(96,165,250,0.5)] hover:scale-y-105 origin-bottom delay-100" data-height="45%" style={{height: '0%'}}></div>
<div className="w-full bg-slate-200/60 rounded-t-sm chart-bar transition-all duration-1000 ease-out hover:bg-blue-300 hover:shadow-[0_0_15px_rgba(96,165,250,0.5)] hover:scale-y-105 origin-bottom delay-150" data-height="55%" style={{height: '0%'}}></div>
<div className="w-full bg-blue-200/80 rounded-t-sm chart-bar transition-all duration-1000 ease-out hover:bg-blue-400 hover:shadow-[0_0_15px_rgba(96,165,250,0.6)] hover:scale-y-105 origin-bottom delay-200" data-height="75%" style={{height: '0%'}}></div>
<div className="w-full bg-blue-500/80 rounded-t-sm chart-bar transition-all duration-1000 ease-out hover:bg-blue-600 hover:shadow-[0_0_15px_rgba(37,99,235,0.7)] hover:scale-y-105 origin-bottom delay-300" data-height="85%" style={{height: '0%'}}></div>
<div className="w-full bg-slate-800 rounded-t-sm chart-bar transition-all duration-1000 ease-out hover:bg-blue-700 hover:shadow-[0_0_15px_rgba(29,78,216,0.8)] hover:scale-y-105 origin-bottom delay-400" data-height="90%" style={{height: '0%'}}></div>
<div className="w-full bg-slate-900 rounded-t-sm chart-bar transition-all duration-1000 ease-out hover:bg-blue-800 hover:shadow-[0_0_20px_rgba(30,64,175,0.9)] hover:scale-y-105 origin-bottom delay-500" data-height="95%" style={{height: '0%'}}></div>
</div>
</div>

<div className="grid grid-cols-2 gap-3 md:gap-4">
<div className="group bg-white/80 backdrop-blur-sm p-3 md:p-4 rounded-xl shadow-sm border border-white flex flex-col items-start justify-center gap-2 md:gap-3 hover:bg-blue-50/80 hover:border-blue-200 hover:shadow-md transition-all cursor-pointer hover:-translate-y-1">
<div className="p-1.5 md:p-2 bg-slate-50 border border-slate-100 group-hover:bg-blue-100 group-hover:border-blue-200 rounded-lg transition-all group-hover:scale-110 duration-300 shadow-sm">
<iconify-icon className="text-lg md:text-xl text-slate-700 group-hover:text-blue-600" icon="solar:magnifer-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-[10px] md:text-xs font-medium text-slate-700 group-hover:text-blue-900">Auditar Leads</span>
</div>
<div className="group bg-white/80 backdrop-blur-sm p-3 md:p-4 rounded-xl shadow-sm border border-white flex flex-col items-start justify-center gap-2 md:gap-3 hover:bg-purple-50/80 hover:border-purple-200 hover:shadow-md transition-all cursor-pointer hover:-translate-y-1">
<div className="p-1.5 md:p-2 bg-slate-50 border border-slate-100 group-hover:bg-purple-100 group-hover:border-purple-200 rounded-lg transition-all group-hover:scale-110 duration-300 shadow-sm">
<iconify-icon className="text-lg md:text-xl text-slate-700 group-hover:text-purple-600" icon="solar:magic-stick-3-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-[10px] md:text-xs font-medium text-slate-700 group-hover:text-purple-900">Filtro Clientes</span>
</div>
<div className="group bg-white/80 backdrop-blur-sm p-3 md:p-4 rounded-xl shadow-sm border border-white flex flex-col items-start justify-center gap-2 md:gap-3 hover:bg-orange-50/80 hover:border-orange-200 hover:shadow-md transition-all cursor-pointer hover:-translate-y-1">
<div className="p-1.5 md:p-2 bg-slate-50 border border-slate-100 group-hover:bg-orange-100 group-hover:border-orange-200 rounded-lg transition-all group-hover:scale-110 duration-300 shadow-sm">
<iconify-icon className="text-lg md:text-xl text-slate-700 group-hover:text-orange-600" icon="solar:branching-paths-down-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-[10px] md:text-xs font-medium text-slate-700 group-hover:text-orange-900">Flujo Captación</span>
</div>
<div className="group bg-white/80 backdrop-blur-sm p-3 md:p-4 rounded-xl shadow-sm border border-white flex flex-col items-start justify-center gap-2 md:gap-3 hover:bg-green-50/80 hover:border-green-200 hover:shadow-md transition-all cursor-pointer hover:-translate-y-1">
<div className="p-1.5 md:p-2 bg-slate-50 border border-slate-100 group-hover:bg-green-100 group-hover:border-green-200 rounded-lg transition-all group-hover:scale-110 duration-300 shadow-sm">
<iconify-icon className="text-lg md:text-xl text-slate-700 group-hover:text-green-600" icon="solar:chart-square-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-[10px] md:text-xs font-medium text-slate-700 group-hover:text-green-900">Verificar Proyecto</span>
</div>
</div>
</div>
</div>
</div>
</main>

<section className="w-full max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24 relative z-10 perspective-[1000px]">
<div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 animate-on-scroll transition-all duration-700 ease-out opacity-0 translate-y-8">
<span className="inline-block py-1 px-3 rounded-full bg-white/40 border border-white/60 text-[10px] md:text-xs font-semibold tracking-widest text-slate-700 uppercase mb-3 md:mb-4 font-sans shadow-sm backdrop-blur-sm">El problema del sector</span>
<h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-[#1A1A1A] tracking-tight font-nunito mb-4 md:mb-6 drop-shadow-sm">Horas perdidas en curiosos y visitas inútiles</h2>
<p className="text-lg md:text-xl text-slate-700 font-normal font-sans bg-white/20 p-4 rounded-2xl border border-white/30 backdrop-blur-sm shadow-sm">La mayoría de empresas pierden tiempo en prospectos no cualificados. Nosotros construimos sistemas que filtran leads automáticamente para que no colapses al escalar tus proyectos.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 transform-style-3d tilt-container">

<div className="tilt-card bg-white/80 backdrop-blur-md rounded-[24px] md:rounded-[32px] p-6 md:p-8 border border-white/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(59,130,246,0.15)] hover:-translate-y-2 hover:border-blue-200 transition-all duration-500 group animate-on-scroll opacity-0 translate-y-8 cursor-pointer relative overflow-hidden" style={{transitionDelay: '100ms'}}>
<div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
<div className="w-12 h-12 md:w-14 md:h-14 bg-white shadow-sm group-hover:bg-blue-100 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all duration-300 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6 text-slate-900 border border-slate-100 group-hover:border-blue-200 relative z-10">
<iconify-icon className="text-2xl md:text-3xl group-hover:text-blue-600 group-hover:animate-pulse" icon="solar:ghost-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl md:text-2xl font-semibold tracking-tight text-[#1A1A1A] font-nunito mb-2 md:mb-3 relative z-10 group-hover:text-blue-900 transition-colors">Visitas sin sentido</h3>
<p className="text-base md:text-lg leading-relaxed text-slate-600 font-normal font-sans relative z-10 group-hover:text-slate-800 transition-colors">Presupuestos y visitas a puerta fría que traen curiosos pero no clientes reales, consumiendo el tiempo de tu equipo sin generar cierres rentables.</p>
</div>

<div className="tilt-card bg-white/80 backdrop-blur-md rounded-[24px] md:rounded-[32px] p-6 md:p-8 border border-white/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(168,85,247,0.15)] hover:-translate-y-2 hover:border-purple-200 transition-all duration-500 group animate-on-scroll opacity-0 translate-y-8 cursor-pointer relative overflow-hidden" style={{transitionDelay: '200ms'}}>
<div className="absolute inset-0 bg-gradient-to-br from-purple-50/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
<div className="w-12 h-12 md:w-14 md:h-14 bg-white shadow-sm group-hover:bg-purple-100 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all duration-300 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6 text-slate-900 border border-slate-100 group-hover:border-purple-200 relative z-10">
<iconify-icon className="text-2xl md:text-3xl group-hover:text-purple-600 group-hover:animate-[spin_3s_linear_infinite]" icon="solar:stopwatch-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl md:text-2xl font-semibold tracking-tight text-[#1A1A1A] font-nunito mb-2 md:mb-3 relative z-10 group-hover:text-purple-900 transition-colors">Cuellos de Botella</h3>
<p className="text-base md:text-lg leading-relaxed text-slate-600 font-normal font-sans relative z-10 group-hover:text-slate-800 transition-colors">Dependencia excesiva del trabajo manual o boca a boca. El seguimiento recae sobre ti, impidiendo escalar el número de obras, proyectos o ventas.</p>
</div>

<div className="tilt-card bg-white/80 backdrop-blur-md rounded-[24px] md:rounded-[32px] p-6 md:p-8 border border-white/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(34,197,94,0.15)] hover:-translate-y-2 hover:border-green-200 transition-all duration-500 group animate-on-scroll opacity-0 translate-y-8 cursor-pointer relative overflow-hidden" style={{transitionDelay: '300ms'}}>
<div className="absolute inset-0 bg-gradient-to-br from-green-50/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
<div className="w-12 h-12 md:w-14 md:h-14 bg-white shadow-sm group-hover:bg-green-100 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(34,197,94,0.3)] transition-all duration-300 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6 text-slate-900 border border-slate-100 group-hover:border-green-200 relative z-10">
<iconify-icon className="text-2xl md:text-3xl group-hover:text-green-600 group-hover:animate-bounce" icon="solar:smart-speaker-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl md:text-2xl font-semibold tracking-tight text-[#1A1A1A] font-nunito mb-2 md:mb-3 relative z-10 group-hover:text-green-900 transition-colors">IA Superficial</h3>
<p className="text-base md:text-lg leading-relaxed text-slate-600 font-normal font-sans relative z-10 group-hover:text-slate-800 transition-colors">Usar ChatGPT para redactar correos no es aprovechar la IA. La verdadera inteligencia opera en los cimientos de tu negocio, calificando prospectos 24/7.</p>
</div>
</div>
</section>

<section className="w-full max-w-7xl mx-auto px-4 md:px-12 py-16 md:py-24 relative z-10" id="solucion">

<div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24 mb-20 md:mb-32">
<div className="w-full lg:w-[55%] relative group animate-on-scroll transition-all duration-700 ease-out opacity-0 translate-y-8 order-2 lg:order-1">

<div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 blur-[40px] md:blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity duration-700 rounded-full"></div>
<div className="absolute inset-0 bg-gradient-to-br from-[#9AC1EB] via-[#C5DFF7] to-[#EFE6D8] rounded-[32px] md:rounded-[40px] transform rotate-1 transition-all duration-700 group-hover:rotate-0 group-hover:scale-105 group-hover:shadow-2xl"></div>
<div className="p-6 md:p-12 transition-all duration-500 hover:scale-[1.01] bg-gradient-to-br from-[#9AC1EB] via-[#C5DFF7] to-[#EFE6D8] rounded-[24px] md:rounded-3xl relative shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] overflow-hidden">
<div className="absolute inset-0 bg-white/30 blur-2xl transform group-hover:translate-x-full transition-transform duration-1000"></div>
<div className="bg-white/90 backdrop-blur-xl max-w-lg border-white border rounded-2xl mx-auto shadow-2xl overflow-hidden font-sans relative z-10 group-hover:shadow-[0_20px_50px_rgba(59,130,246,0.2)] transition-shadow">
<div className="border-b border-slate-100 p-4 md:p-6 flex justify-between items-center group/header cursor-default bg-white">
<h3 className="font-semibold text-lg md:text-xl tracking-tight text-slate-900 font-nunito group-hover/header:text-blue-600 transition-colors">Arquitectura de Operaciones</h3>
<iconify-icon className="text-lg md:text-xl text-slate-400 group-hover/header:animate-spin group-hover/header:text-blue-500" icon="solar:settings-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="bg-slate-50/80 p-4 md:p-6 space-y-3 md:space-y-4">

<div className="group/item bg-white p-3 md:p-4 rounded-xl border border-slate-100 shadow-sm flex items-center gap-3 md:gap-4 hover:shadow-lg hover:border-blue-200 transition-all cursor-pointer hover:-translate-y-1 relative overflow-hidden">
<div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0 group-hover/item:scale-110 group-hover/item:bg-blue-100 group-hover/item:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all">
<iconify-icon className="text-lg md:text-xl" icon="solar:database-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="relative z-10">
<div className="font-semibold text-sm md:text-base text-slate-900 group-hover/item:text-blue-900 transition-colors">Normalización de Datos</div>
<div className="text-xs md:text-sm text-slate-500 font-normal">CRM Comercial estructurado</div>
</div>
<div className="ml-auto text-green-500 opacity-0 group-hover/item:opacity-100 transition-opacity scale-50 group-hover/item:scale-100 relative z-10">
<iconify-icon className="text-lg md:text-xl drop-shadow-[0_0_5px_rgba(34,197,94,0.5)]" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>

<div className="group/item bg-white p-3 md:p-4 rounded-xl border border-slate-100 shadow-sm flex items-center gap-3 md:gap-4 hover:shadow-lg hover:border-purple-200 transition-all cursor-pointer hover:-translate-y-1 relative overflow-hidden">
<div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-purple-50 flex items-center justify-center text-purple-600 shrink-0 group-hover/item:scale-110 group-hover/item:bg-purple-100 group-hover/item:shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all">
<iconify-icon className="text-lg md:text-xl" icon="solar:magic-stick-3-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="relative z-10">
<div className="font-semibold text-sm md:text-base text-slate-900 group-hover/item:text-purple-900 transition-colors">Entrenamiento Agente IA</div>
<div className="text-xs md:text-sm text-slate-500 font-normal">Asistente de cualificación</div>
</div>
<div className="ml-auto text-green-500 opacity-0 group-hover/item:opacity-100 transition-opacity scale-50 group-hover/item:scale-100 relative z-10">
<iconify-icon className="text-lg md:text-xl drop-shadow-[0_0_5px_rgba(34,197,94,0.5)]" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>

<div className="group/item bg-white p-3 md:p-4 rounded-xl border border-slate-100 shadow-sm flex items-center gap-3 md:gap-4 hover:shadow-lg hover:border-orange-200 transition-all cursor-pointer hover:-translate-y-1 relative overflow-hidden">
<div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-orange-50 flex items-center justify-center text-orange-600 shrink-0 group-hover/item:scale-110 group-hover/item:bg-orange-100 group-hover/item:shadow-[0_0_15px_rgba(249,115,22,0.3)] transition-all">
<iconify-icon className="text-lg md:text-xl" icon="solar:branching-paths-down-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="relative z-10">
<div className="font-semibold text-sm md:text-base text-slate-900 group-hover/item:text-orange-900 transition-colors">Automatización Nurturing</div>
<div className="text-xs md:text-sm text-slate-500 font-normal">Seguimiento de clientes</div>
</div>
<div className="ml-auto relative z-10">
<span className="flex h-2 w-2 relative group-hover/item:scale-150 transition-transform">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500 shadow-[0_0_5px_rgba(249,115,22,0.8)]"></span>
</span>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="w-full lg:w-[45%] animate-on-scroll transition-all duration-700 ease-out opacity-0 translate-y-8 order-1 lg:order-2" style={{transitionDelay: '200ms'}}>
<span className="inline-block py-1 px-3 rounded-full bg-white/40 border border-white/60 text-[10px] md:text-xs font-semibold tracking-widest text-slate-700 uppercase mb-3 md:mb-4 font-sans shadow-sm backdrop-blur-sm">Nuestra Solución</span>
<h2 className="text-3xl sm:text-4xl lg:text-5xl leading-[1.15] font-medium text-[#1A1A1A] tracking-tight font-nunito mb-4 md:mb-6 drop-shadow-sm">Captación de alto nivel + Filtrado Inteligente</h2>
<p className="leading-relaxed text-lg md:text-xl font-normal text-slate-700 font-sans mb-8 md:mb-10 bg-white/20 p-4 rounded-2xl border border-white/30 backdrop-blur-sm shadow-sm">
                        Unimos la visión estratégica del negocio con la potencia operativa de la Inteligencia Artificial. Creamos infraestructuras que captan, educan y filtran clientes de forma predecible.
                    </p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
<div className="group flex items-center gap-3 px-4 py-3 md:px-6 md:py-4 rounded-2xl border border-white/80 bg-white/60 backdrop-blur-sm hover:bg-white hover:shadow-[0_10px_30px_rgba(59,130,246,0.15)] hover:border-blue-200 hover:-translate-y-1 transition-all cursor-default relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<iconify-icon className="text-lg md:text-xl text-slate-800 group-hover:text-blue-600 transition-colors group-hover:scale-125 group-hover:drop-shadow-[0_0_5px_rgba(59,130,246,0.5)] duration-300 relative z-10" icon="solar:target-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm md:text-base font-medium text-slate-700 group-hover:text-blue-900 relative z-10 transition-colors">Captación</span>
</div>
<div className="group flex items-center gap-3 px-4 py-3 md:px-6 md:py-4 rounded-2xl border border-white/80 bg-white/60 backdrop-blur-sm hover:bg-white hover:shadow-[0_10px_30px_rgba(168,85,247,0.15)] hover:border-purple-200 hover:-translate-y-1 transition-all cursor-default relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-purple-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<iconify-icon className="text-lg md:text-xl text-slate-800 group-hover:text-purple-600 transition-colors group-hover:scale-125 group-hover:drop-shadow-[0_0_5px_rgba(168,85,247,0.5)] duration-300 relative z-10" icon="solar:cpu-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm md:text-base font-medium text-slate-700 group-hover:text-purple-900 relative z-10 transition-colors">Automatización</span>
</div>
<div className="group flex items-center gap-3 px-4 py-3 md:px-6 md:py-4 rounded-2xl border border-white/80 bg-white/60 backdrop-blur-sm hover:bg-white hover:shadow-[0_10px_30px_rgba(249,115,22,0.15)] hover:border-orange-200 hover:-translate-y-1 transition-all cursor-default relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-orange-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<iconify-icon className="text-lg md:text-xl text-slate-800 group-hover:text-orange-600 transition-colors group-hover:scale-125 group-hover:drop-shadow-[0_0_5px_rgba(249,115,22,0.5)] duration-300 relative z-10" icon="solar:filter-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm md:text-base font-medium text-slate-700 group-hover:text-orange-900 relative z-10 transition-colors">Filtrado</span>
</div>
<div className="group flex items-center gap-3 px-4 py-3 md:px-6 md:py-4 rounded-2xl border border-white/80 bg-white/60 backdrop-blur-sm hover:bg-white hover:shadow-[0_10px_30px_rgba(34,197,94,0.15)] hover:border-green-200 hover:-translate-y-1 transition-all cursor-default relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-green-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<iconify-icon className="text-lg md:text-xl text-slate-800 group-hover:text-green-600 transition-colors group-hover:scale-125 group-hover:drop-shadow-[0_0_5px_rgba(34,197,94,0.5)] duration-300 relative z-10" icon="solar:graph-up-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm md:text-base font-medium text-slate-700 group-hover:text-green-900 relative z-10 transition-colors">Cierres</span>
</div>
</div>
</div>
</div>

<div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-24" id="metodologia">
<div className="w-full lg:w-[45%] animate-on-scroll transition-all duration-700 ease-out opacity-0 translate-y-8">
<span className="inline-block py-1 px-3 rounded-full bg-white/40 border border-white/60 text-[10px] md:text-xs font-semibold tracking-widest text-slate-700 uppercase mb-3 md:mb-4 font-sans shadow-sm backdrop-blur-sm">Metodología</span>
<h2 className="text-3xl sm:text-4xl lg:text-5xl leading-[1.15] font-medium text-[#1A1A1A] tracking-tight font-nunito mb-4 md:mb-6 drop-shadow-sm">Proceso enfocado en la rentabilidad, no en el volumen</h2>
<p className="text-lg md:text-xl text-slate-700 font-normal mb-8 md:mb-10 leading-relaxed font-sans bg-white/20 p-4 rounded-2xl border border-white/30 backdrop-blur-sm shadow-sm">
                        No improvisamos. Aplicamos ingeniería inversa a tus objetivos de facturación para construir un sistema de captación y venta que opere como un reloj suizo.
                    </p>
<ul className="space-y-4 md:space-y-6 mb-8 md:mb-10">
<li className="group flex items-start gap-3 md:gap-4 p-3 md:p-4 -mx-2 md:-mx-4 rounded-2xl hover:bg-white/60 hover:shadow-md hover:border-white border border-transparent transition-all cursor-default relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#1A1A1A] text-white flex items-center justify-center font-semibold text-sm md:text-base shrink-0 group-hover:scale-110 group-hover:bg-blue-600 group-hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all duration-300 relative z-10">1</div>
<div className="relative z-10">
<h4 className="font-semibold text-slate-900 text-lg md:text-xl tracking-tight font-nunito mb-1 group-hover:text-blue-900 transition-colors">Auditoría Estratégica</h4>
<p className="text-slate-600 text-base md:text-lg font-normal">Análisis profundo de tu modelo, posicionamiento digital y cuellos de botella comerciales.</p>
</div>
</li>
<li className="group flex items-start gap-3 md:gap-4 p-3 md:p-4 -mx-2 md:-mx-4 rounded-2xl hover:bg-white/60 hover:shadow-md hover:border-white border border-transparent transition-all cursor-default relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#1A1A1A] text-white flex items-center justify-center font-semibold text-sm md:text-base shrink-0 group-hover:scale-110 group-hover:bg-blue-600 group-hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all duration-300 relative z-10">2</div>
<div className="relative z-10">
<h4 className="font-semibold text-slate-900 text-lg md:text-xl tracking-tight font-nunito mb-1 group-hover:text-blue-900 transition-colors">Arquitectura de Sistemas</h4>
<p className="text-slate-600 text-base md:text-lg font-normal">Diseño del ecosistema tecnológico (CRM, IA, flujos de captación y nutrición de prospectos).</p>
</div>
</li>
<li className="group flex items-start gap-3 md:gap-4 p-3 md:p-4 -mx-2 md:-mx-4 rounded-2xl hover:bg-white/60 hover:shadow-md hover:border-white border border-transparent transition-all cursor-default relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#1A1A1A] text-white flex items-center justify-center font-semibold text-sm md:text-base shrink-0 group-hover:scale-110 group-hover:bg-blue-600 group-hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all duration-300 relative z-10">3</div>
<div className="relative z-10">
<h4 className="font-semibold text-slate-900 text-lg md:text-xl tracking-tight font-nunito mb-1 group-hover:text-blue-900 transition-colors">Despliegue y Optimización</h4>
<p className="text-slate-600 text-base md:text-lg font-normal">Implementación controlada, filtrado iterativo y mejora continua de la tasa de conversión a cierres.</p>
</div>
</li>
</ul>
</div>
<div className="w-full lg:w-[55%] relative group animate-on-scroll transition-all duration-700 ease-out opacity-0 translate-y-8" style={{transitionDelay: '200ms'}}>
<div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 blur-[40px] md:blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity duration-700 rounded-full"></div>
<div className="absolute inset-0 bg-gradient-to-br from-[#9AC1EB] via-[#C5DFF7] to-[#EFE6D8] rounded-[32px] md:rounded-[40px] transform -rotate-1 transition-all duration-700 group-hover:rotate-0 group-hover:scale-105 group-hover:shadow-2xl"></div>
<div className="p-6 md:p-12 transition-all duration-500 hover:scale-[1.01] bg-gradient-to-br from-[#9AC1EB] via-[#C5DFF7] to-[#EFE6D8] rounded-[24px] md:rounded-3xl relative shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] overflow-hidden">
<div className="absolute inset-0 bg-white/30 blur-2xl transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
<div className="font-sans bg-white/90 backdrop-blur-xl border border-white max-w-lg rounded-2xl mx-auto p-6 md:p-8 shadow-2xl relative z-10 progress-container group-hover:shadow-[0_20px_50px_rgba(59,130,246,0.2)] transition-shadow">
<h3 className="font-semibold text-lg md:text-xl tracking-tight text-slate-900 mb-6 md:mb-8 font-nunito flex items-center justify-between">
                                Estado de Implementación
                                <div className="p-1.5 md:p-2 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors">
<iconify-icon className="text-lg md:text-xl text-blue-600 group-hover:scale-110 group-hover:drop-shadow-[0_0_5px_rgba(37,99,235,0.5)] transition-all" icon="solar:chart-2-linear" strokeWidth="1.5"></iconify-icon>
</div>
</h3>
<div className="space-y-4 md:space-y-6">
<div className="flex flex-col gap-1.5 md:gap-2 group/prog cursor-pointer">
<div className="flex justify-between text-sm md:text-base font-semibold">
<span className="text-slate-900 group-hover/prog:text-green-700 transition-colors">Fase 1: Auditoría</span>
<span className="text-green-600 group-hover/prog:scale-110 group-hover/prog:drop-shadow-[0_0_5px_rgba(34,197,94,0.5)] transition-all text-xs md:text-sm flex items-center">Completado</span>
</div>
<div className="h-1.5 md:h-2 w-full bg-slate-100 rounded-full overflow-hidden shadow-inner">
<div className="h-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.6)] transition-all duration-[1500ms] ease-out w-0 progress-bar" data-width="100%"></div>
</div>
</div>
<div className="flex flex-col gap-1.5 md:gap-2 group/prog cursor-pointer">
<div className="flex justify-between text-sm md:text-base font-semibold">
<span className="text-slate-900 group-hover/prog:text-green-700 transition-colors">Fase 2: Arquitectura</span>
<span className="text-green-600 group-hover/prog:scale-110 group-hover/prog:drop-shadow-[0_0_5px_rgba(34,197,94,0.5)] transition-all text-xs md:text-sm flex items-center">Completado</span>
</div>
<div className="h-1.5 md:h-2 w-full bg-slate-100 rounded-full overflow-hidden shadow-inner">
<div className="h-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.6)] transition-all duration-[1500ms] ease-out w-0 progress-bar delay-300" data-width="100%"></div>
</div>
</div>
<div className="flex flex-col gap-1.5 md:gap-2 group/prog cursor-pointer">
<div className="flex justify-between text-sm md:text-base font-semibold">
<span className="text-slate-900 group-hover/prog:text-blue-700 transition-colors">Fase 3: Despliegue</span>
<span className="text-blue-600 group-hover/prog:scale-105 group-hover/prog:drop-shadow-[0_0_5px_rgba(37,99,235,0.5)] transition-all flex items-center gap-1 text-xs md:text-sm">
<iconify-icon className="animate-spin" icon="solar:refresh-linear" strokeWidth="1.5"></iconify-icon> En progreso
                                        </span>
</div>
<div className="h-1.5 md:h-2 w-full bg-slate-100 rounded-full overflow-hidden shadow-inner">
<div className="h-full bg-blue-500 shadow-[0_0_10px_rgba(37,99,235,0.6)] transition-all duration-[1500ms] ease-out w-0 progress-bar delay-700 relative overflow-hidden" data-width="60%">
<div className="absolute inset-0 bg-white/40 w-full animate-[translateX_2s_infinite]"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="md:px-12 z-10 w-full max-w-7xl mx-auto py-16 md:py-24 px-4 relative" id="diferencia">
<div className="text-center max-w-3xl mx-auto mb-12 md:mb-20 animate-on-scroll transition-all duration-700 ease-out opacity-0 translate-y-8">
<span className="inline-block py-1 px-3 rounded-full bg-white/40 border border-white/60 text-[10px] md:text-xs font-semibold tracking-widest text-slate-700 uppercase mb-3 md:mb-4 font-sans shadow-sm backdrop-blur-sm">Enfoque</span>
<h2 className="text-4xl md:text-5xl lg:text-6xl leading-[1.1] font-medium text-[#1A1A1A] tracking-tight font-nunito mb-4 md:mb-6 drop-shadow-sm">Autoridad, control y proyectos rentables</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
<div className="group bg-white/60 backdrop-blur-md rounded-[24px] md:rounded-[32px] p-6 md:p-10 flex flex-col items-start gap-3 md:gap-4 hover:shadow-[0_20px_50px_rgba(59,130,246,0.15)] transition-all duration-500 hover:-translate-y-2 hover:bg-white animate-on-scroll opacity-0 translate-y-8 cursor-pointer border border-white/80 hover:border-blue-200 relative overflow-hidden" style={{transitionDelay: '100ms'}}>
<div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white flex items-center justify-center mb-2 md:mb-4 shadow-sm text-slate-800 border border-slate-100 group-hover:scale-110 group-hover:bg-blue-50 transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] group-hover:border-blue-200 relative z-10">
<iconify-icon className="text-xl md:text-2xl group-hover:text-blue-600 group-hover:rotate-12 transition-all" icon="solar:pie-chart-2-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h4 className="text-lg md:text-xl font-semibold tracking-tight text-slate-900 font-nunito group-hover:text-blue-900 transition-colors relative z-10">Visión de Negocio</h4>
<p className="text-base md:text-lg leading-relaxed text-slate-600 font-normal group-hover:text-slate-700 relative z-10">No perseguimos leads basura. Todo esfuerzo de marketing o integración tecnológica debe impactar directamente en ventas firmadas y facturación cobrada.</p>
</div>
<div className="group bg-white/60 backdrop-blur-md rounded-[24px] md:rounded-[32px] p-6 md:p-10 flex flex-col items-start gap-3 md:gap-4 hover:shadow-[0_20px_50px_rgba(168,85,247,0.15)] transition-all duration-500 hover:-translate-y-2 hover:bg-white animate-on-scroll opacity-0 translate-y-8 cursor-pointer border border-white/80 hover:border-purple-200 relative overflow-hidden" style={{transitionDelay: '200ms'}}>
<div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white flex items-center justify-center mb-2 md:mb-4 shadow-sm text-slate-800 border border-slate-100 group-hover:scale-110 group-hover:bg-purple-50 transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] group-hover:border-purple-200 relative z-10">
<iconify-icon className="text-xl md:text-2xl group-hover:text-purple-600 group-hover:-rotate-12 transition-all" icon="solar:server-square-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h4 className="text-lg md:text-xl font-semibold tracking-tight text-slate-900 font-nunito group-hover:text-purple-900 transition-colors relative z-10">Tecnología como Palanca</h4>
<p className="text-base md:text-lg leading-relaxed text-slate-600 font-normal group-hover:text-slate-700 relative z-10">No implementamos IA por moda. Seleccionamos las herramientas exactas que automatizan el seguimiento y aceleran el cierre de operaciones.</p>
</div>
<div className="group bg-white/60 backdrop-blur-md rounded-[24px] md:rounded-[32px] p-6 md:p-10 flex flex-col items-start gap-3 md:gap-4 hover:shadow-[0_20px_50px_rgba(34,197,94,0.15)] transition-all duration-500 hover:-translate-y-2 hover:bg-white animate-on-scroll opacity-0 translate-y-8 cursor-pointer border border-white/80 hover:border-green-200 relative overflow-hidden" style={{transitionDelay: '300ms'}}>
<div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white flex items-center justify-center mb-2 md:mb-4 shadow-sm text-slate-800 border border-slate-100 group-hover:scale-110 group-hover:bg-green-50 transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(34,197,94,0.3)] group-hover:border-green-200 relative z-10">
<iconify-icon className="text-xl md:text-2xl group-hover:text-green-600 group-hover:scale-110 transition-all" icon="solar:user-check-rounded-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h4 className="text-lg md:text-xl font-semibold tracking-tight text-slate-900 font-nunito group-hover:text-green-900 transition-colors relative z-10">Soberanía Total</h4>
<p className="text-base md:text-lg leading-relaxed text-slate-600 font-normal group-hover:text-slate-700 relative z-10">Construimos sistemas de los que eres dueño. Embudos en tus propias plataformas, garantizando control absoluto sin depender de terceros.</p>
</div>
</div>
</section>

<section className="w-full relative py-16 md:py-24 z-10 bg-white/40 backdrop-blur-lg border-t border-b border-white/60 overflow-hidden shadow-sm">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-blue-200/40 to-purple-200/40 blur-[100px] rounded-full pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6 text-center mb-12 md:mb-16 relative z-10 animate-on-scroll transition-all duration-700 ease-out opacity-0 translate-y-8">
<h2 className="text-3xl md:text-4xl lg:text-5xl leading-[1.15] font-medium text-[#1A1A1A] tracking-tight font-nunito drop-shadow-sm hover:scale-[1.02] transition-transform duration-500 cursor-default">
                    Alineación estratégica pura.
                </h2>
<p className="text-lg md:text-xl text-slate-600 font-normal mt-4 md:mt-6">Sabemos exactamente a qué negocios aportamos valor y a cuáles no.</p>
</div>
<div className="max-w-6xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 relative z-10">

<div className="group bg-white p-6 md:p-12 rounded-[24px] md:rounded-[32px] shadow-sm border border-slate-100 flex flex-col gap-4 md:gap-6 animate-on-scroll transition-all duration-700 ease-out opacity-0 translate-y-8 hover:shadow-[0_20px_50px_rgba(34,197,94,0.1)] hover:-translate-y-2 hover:border-green-300 cursor-default relative overflow-hidden" style={{transitionDelay: '100ms'}}>
<div className="absolute inset-0 bg-gradient-to-br from-green-50/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="flex items-center gap-3 text-green-700 font-semibold tracking-widest text-sm md:text-base uppercase relative z-10">
<iconify-icon className="text-xl md:text-2xl group-hover:scale-125 group-hover:drop-shadow-[0_0_8px_rgba(34,197,94,0.6)] transition-all duration-300" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                        Es para tu negocio si:
                    </div>
<ul className="space-y-3 md:space-y-4 relative z-10">
<li className="flex items-start gap-3 text-base md:text-lg font-normal text-slate-700 group-hover:translate-x-1 transition-transform">
<span className="text-green-500 shrink-0 mt-0.5 drop-shadow-[0_0_2px_rgba(34,197,94,0.5)]">•</span>
                            Eres una empresa de reformas, inmobiliaria o agencia consolidada buscando escalar.
                        </li>
<li className="flex items-start gap-3 text-base md:text-lg font-normal text-slate-700 group-hover:translate-x-1 transition-transform delay-75">
<span className="text-green-500 shrink-0 mt-0.5 drop-shadow-[0_0_2px_rgba(34,197,94,0.5)]">•</span>
                            Tu modelo de negocio y zona de actuación ya han sido validados por el mercado.
                        </li>
<li className="flex items-start gap-3 text-base md:text-lg font-normal text-slate-700 group-hover:translate-x-1 transition-transform delay-100">
<span className="text-green-500 shrink-0 mt-0.5 drop-shadow-[0_0_2px_rgba(34,197,94,0.5)]">•</span>
                            Eres un Gerente que valora su tiempo y busca delegar en sistemas el filtrado inicial.
                        </li>
</ul>
</div>

<div className="group bg-white p-6 md:p-12 rounded-[24px] md:rounded-[32px] shadow-sm border border-slate-100 flex flex-col gap-4 md:gap-6 animate-on-scroll transition-all duration-700 ease-out opacity-0 translate-y-8 hover:shadow-[0_20px_50px_rgba(239,68,68,0.1)] hover:-translate-y-2 hover:border-red-300 cursor-default relative overflow-hidden" style={{transitionDelay: '200ms'}}>
<div className="absolute inset-0 bg-gradient-to-br from-red-50/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="flex items-center gap-3 text-red-700 font-semibold tracking-widest text-sm md:text-base uppercase relative z-10">
<iconify-icon className="text-xl md:text-2xl group-hover:scale-125 group-hover:drop-shadow-[0_0_8px_rgba(239,68,68,0.6)] transition-all duration-300" icon="solar:close-circle-linear" strokeWidth="1.5"></iconify-icon>
                        NO es para ti si:
                    </div>
<ul className="space-y-3 md:space-y-4 relative z-10">
<li className="flex items-start gap-3 text-base md:text-lg font-normal text-slate-700 group-hover:translate-x-1 transition-transform">
<span className="text-red-500 shrink-0 mt-0.5 drop-shadow-[0_0_2px_rgba(239,68,68,0.5)]">•</span>
                            Buscas leads baratos de curiosos que piden presupuesto y nunca contratan.
                        </li>
<li className="flex items-start gap-3 text-base md:text-lg font-normal text-slate-700 group-hover:translate-x-1 transition-transform delay-75">
<span className="text-red-500 shrink-0 mt-0.5 drop-shadow-[0_0_2px_rgba(239,68,68,0.5)]">•</span>
                            Eres un autónomo recién empezando sin presupuesto de marketing o inversión.
                        </li>
<li className="flex items-start gap-3 text-base md:text-lg font-normal text-slate-700 group-hover:translate-x-1 transition-transform delay-100">
<span className="text-red-500 shrink-0 mt-0.5 drop-shadow-[0_0_2px_rgba(239,68,68,0.5)]">•</span>
                            Quieres depender eternamente de portales genéricos (Habitissimo, Idealista, etc).
                        </li>
</ul>
</div>
</div>
</section>

<section className="overflow-hidden bg-transparent w-full z-10 pt-16 md:pt-24 pb-0 relative">
<div className="max-w-7xl mx-auto px-4 relative z-10">
<div className="text-center max-w-3xl mx-auto mb-6 md:mb-8 relative z-20 animate-on-scroll transition-all duration-700 ease-out opacity-0 translate-y-8">
<span className="inline-block py-1 px-3 rounded-full bg-white/40 border border-white/60 text-[10px] md:text-xs font-semibold tracking-widest text-slate-700 uppercase mb-3 md:mb-4 font-sans shadow-sm backdrop-blur-sm">Infraestructura</span>
<h2 className="text-3xl md:text-4xl lg:text-5xl leading-[1.15] font-medium text-[#1A1A1A] tracking-tight font-nunito mb-4 md:mb-6 drop-shadow-sm">Orquestamos la tecnología líder</h2>
</div>
<div className="relative w-full max-w-5xl mx-auto h-[300px] md:h-[400px] flex items-center justify-center overflow-hidden mb-8 md:mb-12 select-none animate-on-scroll transition-all duration-700 ease-out opacity-0 translate-y-8 group" style={{transitionDelay: '200ms'}}>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 md:w-64 h-48 md:h-64 bg-blue-300/30 rounded-full blur-[60px] md:blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none"></div>
<div className="absolute top-0 left-0 right-0 h-[38%] bg-gradient-to-b from-[#ABCDE9] via-[#ABCDE9]/90 to-transparent z-10 backdrop-blur-[2px] pointer-events-none transition-colors"></div>
<div className="absolute bottom-0 left-0 right-0 h-[38%] bg-gradient-to-t from-[#ABCDE9] via-[#ABCDE9]/90 to-transparent z-10 backdrop-blur-[2px] pointer-events-none transition-colors"></div>
<div className="flex flex-col items-center gap-6 md:gap-8 animate-wheel hover-pause will-change-transform cursor-pointer relative z-0">
<div className="text-4xl md:text-5xl lg:text-7xl font-semibold font-nunito text-[#1A1A1A]/80 tracking-tight opacity-20 blur-[1px] hover:opacity-100 hover:text-blue-900 hover:blur-none hover:scale-110 hover:drop-shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all duration-300">OpenAI</div>
<div className="text-4xl md:text-5xl lg:text-7xl font-semibold font-nunito text-[#1A1A1A]/80 tracking-tight opacity-40 hover:opacity-100 hover:text-purple-900 hover:scale-110 hover:drop-shadow-[0_0_15px_rgba(168,85,247,0.5)] transition-all duration-300">Make</div>
<div className="text-4xl md:text-5xl lg:text-7xl font-semibold font-nunito text-[#1A1A1A]/90 tracking-tight hover:scale-110 hover:text-orange-600 hover:drop-shadow-[0_0_15px_rgba(249,115,22,0.5)] transition-all duration-300">HubSpot</div>
<div className="text-4xl md:text-5xl lg:text-7xl font-semibold font-nunito text-[#1A1A1A]/80 tracking-tight opacity-40 hover:opacity-100 hover:text-blue-600 hover:scale-110 hover:drop-shadow-[0_0_15px_rgba(37,99,235,0.5)] transition-all duration-300">Meta Ads</div>
<div className="text-4xl md:text-5xl lg:text-7xl font-semibold font-nunito text-[#1A1A1A]/80 tracking-tight opacity-20 blur-[1px] hover:opacity-100 hover:text-orange-900 hover:blur-none hover:scale-110 hover:drop-shadow-[0_0_15px_rgba(234,88,12,0.5)] transition-all duration-300">Anthropic</div>
<div className="text-4xl md:text-5xl lg:text-7xl font-semibold font-nunito text-[#1A1A1A]/80 tracking-tight opacity-20 blur-[1px] hover:opacity-100 hover:text-orange-500 hover:blur-none hover:scale-110 hover:drop-shadow-[0_0_15px_rgba(249,115,22,0.5)] transition-all duration-300">Zapier</div>

<div className="text-4xl md:text-5xl lg:text-7xl font-semibold font-nunito text-[#1A1A1A]/80 tracking-tight opacity-20 blur-[1px] hover:opacity-100 hover:text-blue-900 hover:blur-none hover:scale-110 hover:drop-shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all duration-300">OpenAI</div>
<div className="text-4xl md:text-5xl lg:text-7xl font-semibold font-nunito text-[#1A1A1A]/80 tracking-tight opacity-40 hover:opacity-100 hover:text-purple-900 hover:scale-110 hover:drop-shadow-[0_0_15px_rgba(168,85,247,0.5)] transition-all duration-300">Make</div>
<div className="text-4xl md:text-5xl lg:text-7xl font-semibold font-nunito text-[#1A1A1A]/90 tracking-tight hover:scale-110 hover:text-orange-600 hover:drop-shadow-[0_0_15px_rgba(249,115,22,0.5)] transition-all duration-300">HubSpot</div>
<div className="text-4xl md:text-5xl lg:text-7xl font-semibold font-nunito text-[#1A1A1A]/80 tracking-tight opacity-40 hover:opacity-100 hover:text-blue-600 hover:scale-110 hover:drop-shadow-[0_0_15px_rgba(37,99,235,0.5)] transition-all duration-300">Meta Ads</div>
<div className="text-4xl md:text-5xl lg:text-7xl font-semibold font-nunito text-[#1A1A1A]/80 tracking-tight opacity-20 blur-[1px] hover:opacity-100 hover:text-orange-900 hover:blur-none hover:scale-110 hover:drop-shadow-[0_0_15px_rgba(234,88,12,0.5)] transition-all duration-300">Anthropic</div>
<div className="text-4xl md:text-5xl lg:text-7xl font-semibold font-nunito text-[#1A1A1A]/80 tracking-tight opacity-20 blur-[1px] hover:opacity-100 hover:text-orange-500 hover:blur-none hover:scale-110 hover:drop-shadow-[0_0_15px_rgba(249,115,22,0.5)] transition-all duration-300">Zapier</div>
</div>
</div>
</div>
</section>

<section className="w-full z-10 bg-transparent pt-8 md:pt-12 pb-16 md:pb-24 relative" id="modelo">
<div className="max-w-7xl mx-auto px-4 md:px-6">
<div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 animate-on-scroll transition-all duration-700 ease-out opacity-0 translate-y-8">
<span className="inline-block py-1 px-3 rounded-full bg-white/40 border border-white/60 text-[10px] md:text-xs font-semibold tracking-widest text-slate-700 uppercase mb-4 md:mb-5 font-sans shadow-sm backdrop-blur-sm">Modelo de Trabajo</span>
<h2 className="text-4xl md:text-5xl lg:text-6xl leading-[1.1] font-medium text-[#1A1A1A] tracking-tight font-nunito mb-4 md:mb-6 hover:scale-[1.02] transition-transform duration-500 drop-shadow-sm">Un único ecosistema comercial a tu medida</h2>
<p className="text-lg md:text-xl leading-relaxed text-slate-700 font-normal font-sans max-w-2xl mx-auto bg-white/20 p-4 rounded-2xl border border-white/30 backdrop-blur-sm shadow-sm">
                        No empaquetamos servicios genéricos. Analizamos tu negocio y diseñamos un motor de captación y filtrado completamente adaptado a tus objetivos.
                    </p>
</div>

<div className="group max-w-xl mx-auto bg-white/80 backdrop-blur-xl rounded-[24px] md:rounded-[32px] p-6 md:p-12 border-2 border-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] flex flex-col relative animate-on-scroll transition-all duration-700 ease-out opacity-0 translate-y-8 hover:shadow-[0_0_40px_rgba(59,130,246,0.3)] hover:border-blue-200 hover:-translate-y-2" style={{transitionDelay: '200ms'}}>

<div className="absolute top-0 right-0 w-48 md:w-64 h-48 md:h-64 bg-blue-400/20 rounded-full blur-[60px] md:blur-[80px] pointer-events-none group-hover:bg-blue-400/30 transition-colors duration-700"></div>
<div className="absolute inset-0 bg-gradient-to-r from-blue-50/20 to-purple-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none rounded-[24px] md:rounded-[32px]"></div>
<div className="flex items-center justify-center gap-2 md:gap-3 mb-4 group-hover:scale-105 transition-transform relative z-10">
<iconify-icon className="text-2xl md:text-3xl text-yellow-500 drop-shadow-[0_0_8px_rgba(234,179,8,0.5)]" icon="solar:crown-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-2xl md:text-3xl font-medium tracking-tight text-slate-900 font-nunito">Partner Estratégico</h3>
</div>
<div className="text-center mb-6 md:mb-8 relative z-10">
<div className="text-3xl md:text-4xl lg:text-5xl font-semibold font-nunito text-[#1A1A1A] tracking-tight mb-2 group-hover:text-blue-900 transition-colors">Presupuesto a medida</div>
<p className="text-sm md:text-base text-slate-500 font-normal leading-relaxed">Tras auditoría técnica de viabilidad.</p>
</div>
<ul className="space-y-3 md:space-y-4 mb-8 md:mb-10 flex-1 px-2 md:px-4 relative z-10">
<li className="flex items-start gap-3 text-base md:text-lg font-normal text-slate-800 hover:translate-x-2 transition-transform cursor-default">
<iconify-icon className="text-xl md:text-2xl text-blue-600 shrink-0 mt-0.5 drop-shadow-[0_0_3px_rgba(37,99,235,0.4)]" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                            Auditoría profunda de negocio y activos digitales.
                        </li>
<li className="flex items-start gap-3 text-base md:text-lg font-normal text-slate-800 hover:translate-x-2 transition-transform cursor-default">
<iconify-icon className="text-xl md:text-2xl text-blue-600 shrink-0 mt-0.5 drop-shadow-[0_0_3px_rgba(37,99,235,0.4)]" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                            Diseño de Arquitectura de Captación y Ventas.
                        </li>
<li className="flex items-start gap-3 text-base md:text-lg font-normal text-slate-800 hover:translate-x-2 transition-transform cursor-default">
<iconify-icon className="text-xl md:text-2xl text-blue-600 shrink-0 mt-0.5 drop-shadow-[0_0_3px_rgba(37,99,235,0.4)]" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                            Integración de Agentes IA para filtrar prospectos.
                        </li>
</ul>
<button className="relative overflow-hidden hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:-translate-y-1 transition-all flex text-base md:text-lg font-medium text-white bg-[#1A1A1A] w-full rounded-full pt-3 pb-3 md:pt-4 md:pb-4 shadow-lg gap-x-2 items-center justify-center group/btn z-10 border border-slate-800 hover:border-blue-500">
<span className="absolute inset-0 bg-gradient-to-r from-blue-600/40 to-purple-600/40 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></span>
<span className="relative z-10">Solicitar Auditoría</span>
<iconify-icon className="text-lg md:text-xl relative z-10 group-hover/btn:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
<div className="absolute inset-0 bg-black translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 ease-in-out z-0"></div>
</button>
</div>
</div>
</section>

<section className="w-full z-10 bg-white/30 backdrop-blur-md pt-16 pb-16 md:pt-24 md:pb-32 relative border-t border-white/60 shadow-inner px-4">
<div className="max-w-4xl mx-auto">
<div className="text-center mb-12 md:mb-16 animate-on-scroll transition-all duration-700 ease-out opacity-0 translate-y-8">
<h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-[#1A1A1A] tracking-tight font-nunito mb-3 md:mb-4 drop-shadow-sm">Preguntas Frecuentes</h2>
<p className="text-lg md:text-xl text-slate-700 font-normal">Claridad absoluta desde el primer contacto.</p>
</div>
<div className="space-y-3 md:space-y-4">

<div className="faq-item group bg-white/80 backdrop-blur-sm p-5 md:p-8 rounded-[20px] md:rounded-[24px] shadow-sm border border-white animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out cursor-pointer hover:shadow-[0_10px_30px_rgba(59,130,246,0.1)] hover:border-blue-200" style={{transitionDelay: '100ms'}}>
<div className="flex justify-between items-center gap-4">
<h4 className="text-lg md:text-2xl font-semibold tracking-tight text-slate-900 font-nunito group-hover:text-blue-700 transition-colors">¿Garantizáis un número exacto de ventas o proyectos?</h4>
<iconify-icon className="faq-icon text-xl md:text-2xl text-slate-400 transition-transform duration-300 group-hover:text-blue-500 group-hover:drop-shadow-[0_0_5px_rgba(59,130,246,0.5)] shrink-0" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="faq-content grid grid-rows-[0fr] opacity-50 transition-all duration-500 ease-in-out">
<div className="overflow-hidden">
<p className="text-base md:text-lg leading-relaxed text-slate-600 font-normal pt-3 md:pt-4">No vendemos humo. Garantizamos la correcta ejecución técnica de sistemas que filtran prospectos automáticamente. Tu capacidad de cierre, presupuesto de obra o calidad del servicio siguen siendo la clave final.</p>
</div>
</div>
</div>

<div className="faq-item group bg-white/80 backdrop-blur-sm p-5 md:p-8 rounded-[20px] md:rounded-[24px] shadow-sm border border-white animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out cursor-pointer hover:shadow-[0_10px_30px_rgba(59,130,246,0.1)] hover:border-blue-200" style={{transitionDelay: '200ms'}}>
<div className="flex justify-between items-center gap-4">
<h4 className="text-lg md:text-2xl font-semibold tracking-tight text-slate-900 font-nunito group-hover:text-blue-700 transition-colors">¿Cuánto se tarda en ver un retorno de inversión?</h4>
<iconify-icon className="faq-icon text-xl md:text-2xl text-slate-400 transition-transform duration-300 group-hover:text-blue-500 group-hover:drop-shadow-[0_0_5px_rgba(59,130,246,0.5)] shrink-0" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="faq-content grid grid-rows-[0fr] opacity-50 transition-all duration-500 ease-in-out">
<div className="overflow-hidden">
<p className="text-base md:text-lg leading-relaxed text-slate-600 font-normal pt-3 md:pt-4">Depende del ciclo de venta en tu sector. Nuestro enfoque construye tracción sólida para captar clientes rentables a medio y largo plazo, huyendo de picos efímeros de leads que no contestan.</p>
</div>
</div>
</div>

<div className="faq-item group bg-white/80 backdrop-blur-sm p-5 md:p-8 rounded-[20px] md:rounded-[24px] shadow-sm border border-white animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out cursor-pointer hover:shadow-[0_10px_30px_rgba(59,130,246,0.1)] hover:border-blue-200" style={{transitionDelay: '300ms'}}>
<div className="flex justify-between items-center gap-4">
<h4 className="text-lg md:text-2xl font-semibold tracking-tight text-slate-900 font-nunito group-hover:text-blue-700 transition-colors">¿Qué tecnología de IA utilizáis?</h4>
<iconify-icon className="faq-icon text-xl md:text-2xl text-slate-400 transition-transform duration-300 group-hover:text-blue-500 group-hover:drop-shadow-[0_0_5px_rgba(59,130,246,0.5)] shrink-0" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="faq-content grid grid-rows-[0fr] opacity-50 transition-all duration-500 ease-in-out">
<div className="overflow-hidden">
<p className="text-base md:text-lg leading-relaxed text-slate-600 font-normal pt-3 md:pt-4">Somos tecnológicamente agnósticos. Evaluamos tus necesidades y utilizamos los modelos (OpenAI, Anthropic) y automatizadores (Make, Zapier, integraciones de CRM) que ofrezcan la mayor eficiencia para tus operaciones.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="w-full max-w-7xl z-10 mx-auto pt-8 pb-8 px-4 md:pt-12 md:pb-12 md:px-6 relative">
<div className="group/foot bg-white/60 backdrop-blur-xl rounded-[32px] md:rounded-[40px] p-6 md:p-12 lg:p-16 shadow-[0_8px_30px_rgba(0,0,0,0.05)] border border-white/80 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out hover:shadow-[0_20px_50px_rgba(59,130,246,0.15)] hover:border-blue-100 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 to-purple-50/30 opacity-0 group-hover/foot:opacity-100 transition-opacity duration-1000"></div>
<div className="flex flex-col lg:flex-row gap-10 md:gap-12 lg:gap-24 mb-12 md:mb-16 justify-between relative z-10">
<div className="max-w-sm">
<div className="flex items-center gap-3 mb-4 md:mb-6 group-hover/foot:scale-105 transition-transform origin-left">
<div className="w-8 h-8 md:w-9 md:h-9 bg-black rounded flex items-center justify-center shrink-0 hover:rotate-12 transition-transform cursor-pointer shadow-[0_0_15px_rgba(0,0,0,0.3)]">
<div className="relative w-4 h-5 md:w-5 md:h-6 flex flex-col justify-between">
<div className="w-full h-1 md:h-1.5 border-t-[1.5px] border-l-[1.5px] border-r-[1.5px] border-white"></div>
<span className="font-serif text-white text-lg md:text-xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 leading-none tracking-tighter">V</span>
<div className="w-full h-1 md:h-1.5 border-b-[1.5px] border-l-[1.5px] border-r-[1.5px] border-white"></div>
</div>
</div>
<span className="text-xl md:text-2xl font-semibold text-[#1A1A1A] tracking-tight font-nunito group-hover/foot:text-blue-900 transition-colors">vanquishsystem</span>
</div>
<p className="text-base md:text-lg leading-relaxed text-slate-600 font-normal font-sans mb-6 md:mb-8">
                            Ayudamos a empresas de alto valor a automatizar procesos para obtener leads que de verdad pagan y proyectos que generan ganancias reales.
                        </p>
<div className="flex gap-4 items-center justify-left">
<a className="text-slate-900 hover:text-blue-600 hover:-translate-y-1 hover:drop-shadow-[0_0_8px_rgba(37,99,235,0.5)] transition-all" href="#">
<iconify-icon className="text-2xl md:text-3xl" icon="solar:link-circle-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="text-slate-900 hover:text-blue-400 hover:-translate-y-1 hover:drop-shadow-[0_0_8px_rgba(96,165,250,0.5)] transition-all" href="#">
<iconify-icon className="text-2xl md:text-3xl" icon="solar:letter-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>
<div className="flex flex-row flex-wrap gap-8 sm:gap-12 lg:gap-24">
<div className="flex flex-col gap-3 md:gap-4">
<h4 className="text-[10px] md:text-xs font-semibold tracking-widest text-[#1A1A1A] uppercase mb-1 font-nunito">Agencia</h4>
<a className="text-sm md:text-base text-slate-600 hover:text-blue-600 hover:translate-x-1 transition-all font-sans font-normal" href="#solucion">Solución</a>
<a className="text-sm md:text-base text-slate-600 hover:text-blue-600 hover:translate-x-1 transition-all font-sans font-normal" href="#metodologia">Metodología</a>
<a className="text-sm md:text-base text-slate-600 hover:text-blue-600 hover:translate-x-1 transition-all font-sans font-normal" href="#diferencia">Enfoque</a>
</div>
<div className="flex flex-col gap-3 md:gap-4">
<h4 className="text-[10px] md:text-xs font-semibold tracking-widest text-[#1A1A1A] uppercase mb-1 font-nunito">Contacto</h4>
<a className="text-sm md:text-base text-slate-600 hover:text-blue-600 hover:translate-x-1 transition-all font-sans font-normal" href="#">Auditoría Gratuita</a>
<a className="text-sm md:text-base text-slate-600 hover:text-blue-600 hover:translate-x-1 transition-all font-sans font-normal" href="#">Términos Legales</a>
<a className="text-sm md:text-base text-slate-600 hover:text-blue-600 hover:translate-x-1 transition-all font-sans font-normal" href="#">Privacidad</a>
</div>
</div>
</div>
<div className="w-full h-px bg-slate-900/10 mb-6 md:mb-8 relative z-10"></div>
<div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 md:gap-4 text-xs md:text-sm text-slate-500 font-sans font-normal relative z-10">
<div>
                        © 2024 vanquishsystem. Todos los derechos reservados.
                    </div>
<div className="font-medium">
                        Construido para negocios que escalan.
                    </div>
</div>
</div>
</footer>
</div>


    </>
  );
}
