import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.15
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        // Optional: stop observing once revealed
                        // observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
            revealElements.forEach(el => observer.observe(el));
            
            // Navbar blur effect on scroll
            const nav = document.querySelector('nav');
            window.addEventListener('scroll', () => {
                if (window.scrollY > 20) {
                    nav.classList.add('shadow-sm', 'bg-white/80');
                    nav.classList.remove('bg-transparent');
                } else {
                    nav.classList.remove('shadow-sm');
                }
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 z-50 w-full bg-white/80 backdrop-blur-xl border-b border-gray-100 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 cursor-pointer">
<span className="font-medium text-lg tracking-tight">Marketing &amp; ADS</span>
</div>
<a className="text-base font-normal hover:text-gray-600 transition-colors flex items-center gap-2 group" href="#presupuesto">
                Solicitá un Presupuesto
                <iconify-icon className="text-base text-[#C1D600] group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" icon="solar:arrow-right-down-linear"></iconify-icon>
</a>
</div>
</nav>

<section className="md:pt-40 flex flex-col z-10 text-center max-w-7xl mr-auto ml-auto pt-32 pr-6 pb-20 pl-6 relative items-center">

<div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] md:w-[800px] h-[400px] bg-gradient-to-tr from-blue-400/10 via-[#E5FF00]/10 to-purple-400/10 blur-[80px] -z-10 rounded-full animate-float"></div>
<div className="reveal inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/50 backdrop-blur-sm border border-gray-200 shadow-sm text-sm font-medium mb-8 active">
<span className="w-2 h-2 rounded-full bg-[#C1D600] animate-pulse"></span>
            +10 años de experiencia
        </div>
<h1 className="reveal delay-100 text-5xl md:text-7xl font-semibold tracking-tight max-w-4xl mx-auto leading-[1.1] text-gray-900 active">
            Gestión Estratégica de <br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500">Pauta Publicitaria</span>
</h1>
<p className="reveal delay-200 mt-6 text-lg md:text-xl text-gray-500 font-normal max-w-2xl mx-auto leading-relaxed active">
            Acompañamos a negocios a ordenar, escalar y crecer mediante estrategias basadas en datos y ejecución precisa en Meta Ads.
        </p>
<div className="reveal delay-300 mt-10 relative group active">
<div className="absolute -inset-1 bg-gradient-to-r from-[#C1D600] to-[#E5FF00] rounded-full blur opacity-40 group-hover:opacity-60 transition duration-500"></div>
<a className="relative inline-flex items-center justify-center px-6 py-3 text-base font-medium text-black bg-[#E5FF00] rounded-full hover:bg-[#d6ed00] transition-all transform group-hover:scale-[1.02]" href="#presupuesto">
                Empezar ahora
                <iconify-icon className="text-base ml-2 group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="reveal-scale delay-400 mt-20 w-full max-w-5xl relative rounded-2xl md:rounded-[32px] overflow-hidden bg-white aspect-video border border-gray-200 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] group cursor-pointer">
<div className="absolute inset-0 bg-gradient-to-tr from-gray-100 via-gray-50 to-blue-50/30"></div>

<div className="bg-center bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e9437b48-5355-4d2c-9675-ce3eb9389680_3840w.png)] bg-cover absolute top-0 right-0 bottom-0 left-0" style={{backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px'}}><img alt="Container background" className="w-full h-full object-cover absolute inset-0 opacity-100 brightness-105 contrast-105" data-container-bg="true" onload="if(this.parentElement) { this.parentElement.classList.remove('opacity-[0.03]'); this.parentElement.style.opacity='1'; }" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e3f2ec6e-656a-432d-ae15-72eed1b6a04f_3840w.png"/></div>

<div className="absolute bottom-6 left-6 right-6 flex items-center justify-between z-10">
<div className="flex items-center gap-4">
<button className="w-12 h-12 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-[#E5FF00] transition-all duration-300">
<iconify-icon className="text-xl text-gray-900 ml-1" height="20" icon="solar:play-linear" style={{color: 'rgb(17, 24, 39)'}} width="20"></iconify-icon>
</button>
<span className="text-gray-700 font-medium text-sm bg-white/90 px-4 py-2 rounded-full backdrop-blur-md shadow-sm">Bienvenido a Marketing &amp; ADS</span>
</div>
</div>

<div className="-translate-x-1/2 transition-transform duration-700 group-hover:scale-105 bg-gradient-to-t from-gray-200 to-transparent opacity-60 mix-blend-multiply w-[400px] h-[300px] rounded-t-full absolute bottom-0 left-1/2"></div>
</div>
</section>

<section className="border-b border-gray-100 bg-gray-50/50 py-12 px-6 overflow-hidden">
<div className="reveal flex flex-col md:flex-row gap-6 md:gap-10 hover:opacity-100 transition-opacity duration-500 opacity-60 max-w-7xl mx-auto items-center w-full overflow-hidden">
<div className="flex items-center gap-6 md:gap-10 shrink-0 z-10 px-4 md:px-0">
<p className="text-sm font-medium text-gray-500 uppercase tracking-widest text-center whitespace-nowrap">Confían en nosotros</p>
<div className="h-6 w-px bg-gray-300 hidden md:block"></div>
</div>
<div className="flex-1 w-full overflow-hidden relative" style={{WebkitMaskImage: 'linear-gradient(to right, transparent, black 40px, black calc(100% - 40px), transparent)', maskImage: 'linear-gradient(to right, transparent, black 40px, black calc(100% - 40px), transparent)'}}>
<style>
            @keyframes scroll-logos {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
            }
            .animate-scroll-logos {
                animation: scroll-logos 30s linear infinite;
            }
            .animate-scroll-logos:hover {
                animation-play-state: paused;
            }
        </style>
<div className="flex w-max animate-scroll-logos items-center">

<div className="flex items-center gap-10 md:gap-16 pr-10 md:pr-16 shrink-0">
<span className="text-xl md:text-2xl font-medium tracking-tight text-gray-900 hover:text-blue-600 transition-colors cursor-default">LUMINA</span>
<span className="text-xl md:text-2xl font-medium tracking-tight text-gray-900 hover:text-emerald-600 transition-colors cursor-default">NEXUS</span>
<span className="text-xl md:text-2xl font-medium tracking-tight text-gray-900 hover:text-purple-600 transition-colors cursor-default">VELOCITY</span>
<span className="text-xl md:text-2xl font-medium tracking-tight text-gray-900 hover:text-orange-600 transition-colors cursor-default">AURA</span>
<span className="text-xl md:text-2xl font-medium tracking-tight text-gray-900 hover:text-rose-600 transition-colors cursor-default">STRATOS</span>
<span className="text-xl md:text-2xl font-medium tracking-tight text-gray-900 hover:text-blue-600 transition-colors cursor-default">LUMINA</span>
<span className="text-xl md:text-2xl font-medium tracking-tight text-gray-900 hover:text-emerald-600 transition-colors cursor-default">NEXUS</span>
</div>

<div aria-hidden="true" className="flex items-center gap-10 md:gap-16 pr-10 md:pr-16 shrink-0">
<span className="text-xl md:text-2xl font-medium tracking-tight text-gray-900 hover:text-blue-600 transition-colors cursor-default">LUMINA</span>
<span className="text-xl md:text-2xl font-medium tracking-tight text-gray-900 hover:text-emerald-600 transition-colors cursor-default">NEXUS</span>
<span className="text-xl md:text-2xl font-medium tracking-tight text-gray-900 hover:text-purple-600 transition-colors cursor-default">VELOCITY</span>
<span className="text-xl md:text-2xl font-medium tracking-tight text-gray-900 hover:text-orange-600 transition-colors cursor-default">AURA</span>
<span className="text-xl md:text-2xl font-medium tracking-tight text-gray-900 hover:text-rose-600 transition-colors cursor-default">STRATOS</span>
<span className="text-xl md:text-2xl font-medium tracking-tight text-gray-900 hover:text-blue-600 transition-colors cursor-default">LUMINA</span>
<span className="text-xl md:text-2xl font-medium tracking-tight text-gray-900 hover:text-emerald-600 transition-colors cursor-default">NEXUS</span>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-24 bg-white border-b border-gray-100 px-6 overflow-hidden">
<div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-blue-50/50 to-transparent -z-10"></div>
<div className="max-w-3xl mx-auto text-center space-y-8">
<h2 className="reveal text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">Quiénes Somos</h2>
<p className="reveal delay-100 text-lg md:text-xl text-gray-600 leading-relaxed font-normal">
                Somos Marketing &amp; ADS, una <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-medium">agencia boutique Argentina con presencia en Latinoamérica</span>, especializada en gestión estratégica de publicidad digital. Nos involucramos activamente como partners estratégicos, con compromiso, comunicación constante y seguimiento continuo.
            </p>
<div className="reveal delay-200 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E5FF00]/10 border border-[#E5FF00]/30 text-[#8a9900] text-sm md:text-base font-medium mt-4 shadow-[0_0_15px_rgba(229,255,0,0.1)]">
<iconify-icon className="text-base" icon="solar:users-group-rounded-linear"></iconify-icon>
                Trabajamos con cupo limitado de clientes
            </div>
</div>
</section>

<section className="max-w-7xl mr-auto ml-auto pt-32 pr-6 pb-32 pl-6 relative">

<div className="blur-[100px] -z-10 animate-float w-96 h-96 rounded-full absolute top-1/4 left-0"></div>
<div className="blur-[100px] animate-float-delayed w-96 h-96 -z-10 rounded-full absolute right-0 bottom-1/4"></div>
<div className="text-center mb-24">
<h2 className="reveal text-4xl md:text-5xl font-semibold tracking-tight text-gray-900">Nuestra Metodología</h2>
<p className="reveal delay-100 mt-4 text-lg text-gray-500">Un proceso iterativo enfocado en resultados medibles.</p>
</div>
<div className="space-y-32">

<div className="grid md:grid-cols-2 gap-12 md:gap-24 items-center">
<div className="reveal-left order-2 md:order-1 relative">
<div className="absolute -left-6 top-2 w-1 h-12 bg-blue-500 rounded-r-full opacity-20"></div>
<span className="text-transparent bg-clip-text bg-gradient-to-br from-gray-200 to-gray-400 text-5xl font-semibold tracking-tight block mb-6">01.</span>
<h3 className="text-3xl font-semibold tracking-tight text-gray-900">Análisis y Estrategia</h3>
<p className="mt-4 text-lg text-gray-600 font-normal leading-relaxed">
<span className="text-gray-900 font-medium">Entender y ordenar antes de accionar.</span><br/>
                        Analizamos los datos del negocio en profundidad. Definimos estructuras claras de campañas con objetivos específicos para maximizar el retorno de inversión.
                    </p>
</div>

<div className="reveal-right order-1 md:order-2 bg-white rounded-[24px] p-8 border border-gray-100 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] relative group hover:shadow-[0_20px_40px_-15px_rgba(59,130,246,0.1)] transition-shadow duration-500">
<div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-transparent rounded-[24px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10">
<div className="flex items-center justify-between mb-8">
<div className="space-y-1">
<div className="text-sm font-medium text-gray-400">Presupuesto Mensual Total</div>
<div className="text-2xl font-semibold tracking-tight text-gray-900">$ 5.000.000</div>
</div>
<div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-500">
<iconify-icon className="text-xl" icon="solar:pie-chart-2-linear"></iconify-icon>
</div>
</div>

<div className="flex justify-center my-8 relative">
<div className="w-48 h-48 rounded-full relative shadow-inner group-hover:scale-105 transition-transform duration-700" style={{background: 'conic-gradient(from 0deg, #3b82f6 0% 30%, #f97316 30% 65%, #cbd5e1 65% 85%, #E5FF00 85% 100%)'}}>
<div className="absolute inset-10 bg-white rounded-full shadow-sm"></div>
</div>
</div>
<div className="flex flex-wrap gap-4 justify-center mt-6">
<div className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"><span className="w-3 h-3 rounded-sm bg-blue-500 shadow-sm shadow-blue-500/30"></span> Ventas 1</div>
<div className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"><span className="w-3 h-3 rounded-sm bg-orange-500 shadow-sm shadow-orange-500/30"></span> Ventas 2</div>
<div className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"><span className="w-3 h-3 rounded-sm bg-[#C1D600] shadow-sm shadow-[#C1D600]/30"></span> Remarketing</div>
</div>
</div>
</div>
</div>

<div className="grid md:grid-cols-2 md:gap-24 gap-12 items-center">

<div className="reveal-left bg-white rounded-[24px] p-8 border border-gray-100 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] relative group hover:shadow-[0_20px_40px_-15px_rgba(16,185,129,0.1)] transition-shadow duration-500">
<div className="absolute inset-0 bg-gradient-to-br from-emerald-50/30 to-transparent rounded-[24px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="grid grid-cols-2 gap-4 relative z-10">

<div className="p-4 rounded-xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow group/card">
<div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3 group-hover/card:scale-110 transition-transform">
<iconify-icon className="text-lg" icon="solar:graph-up-linear"></iconify-icon>
</div>
<div className="text-xl font-semibold tracking-tight text-gray-900">$4,207,397</div>
<div className="text-sm text-gray-500 mt-1">Inversión Meta</div>
<div className="text-xs font-medium text-emerald-500 mt-2 flex items-center gap-1"><iconify-icon className="text-xs" icon="solar:arrow-right-up-linear"></iconify-icon> 65.54%</div>
</div>
<div className="p-4 rounded-xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow group/card">
<div className="w-8 h-8 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center mb-3 group-hover/card:scale-110 transition-transform">
<iconify-icon className="text-lg" icon="solar:cart-large-2-linear"></iconify-icon>
</div>
<div className="text-xl font-semibold tracking-tight text-gray-900">572</div>
<div className="text-sm text-gray-500 mt-1">Compras</div>
<div className="text-xs font-medium text-emerald-500 mt-2 flex items-center gap-1"><iconify-icon className="text-xs" icon="solar:arrow-right-up-linear"></iconify-icon> 115.85%</div>
</div>
<div className="p-4 rounded-xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow group/card">
<div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center mb-3 group-hover/card:scale-110 transition-transform">
<iconify-icon className="text-lg" icon="solar:pulse-linear"></iconify-icon>
</div>
<div className="text-xl font-semibold tracking-tight text-gray-900">12.56</div>
<div className="text-sm text-gray-500 mt-1">ROAS</div>
<div className="text-xs font-medium text-emerald-500 mt-2 flex items-center gap-1"><iconify-icon className="text-xs" icon="solar:arrow-right-up-linear"></iconify-icon> 71.25%</div>
</div>
<div className="p-4 rounded-xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow group/card">
<div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-3 group-hover/card:scale-110 transition-transform">
<iconify-icon className="text-lg" icon="solar:mouse-circle-linear"></iconify-icon>
</div>
<div className="text-xl font-semibold tracking-tight text-gray-900">$2,886</div>
<div className="text-sm text-gray-500 mt-1">CPM Meta</div>
<div className="text-xs font-medium text-rose-500 mt-2 flex items-center gap-1"><iconify-icon className="text-xs" icon="solar:arrow-right-down-linear"></iconify-icon> 21.64%</div>
</div>
</div>
</div>
<div className="reveal-right relative">
<div className="absolute -left-6 top-2 w-1 h-12 bg-emerald-500 rounded-r-full opacity-20"></div>
<span className="text-transparent bg-clip-text bg-gradient-to-br from-gray-200 to-gray-400 text-5xl font-semibold tracking-tight block mb-6">02.</span>
<h3 className="text-3xl font-semibold tracking-tight text-gray-900">Ejecución y Optimización</h3>
<p className="mt-4 text-lg text-gray-600 font-normal leading-relaxed">
<span className="text-gray-900 font-medium">Pauta con seguimiento constante.</span><br/>
                        Implementamos la estrategia, monitoreamos diariamente y optimizamos los anuncios en función de los resultados obtenidos para escalar la inversión de forma segura.
                    </p>
</div>
</div>

<div className="grid md:grid-cols-2 gap-12 md:gap-24 items-center">
<div className="reveal-left order-2 md:order-1 relative">
<div className="absolute -left-6 top-2 w-1 h-12 bg-purple-500 rounded-r-full opacity-20"></div>
<span className="text-transparent bg-clip-text bg-gradient-to-br from-gray-200 to-gray-400 text-5xl font-semibold tracking-tight block mb-6">03.</span>
<h3 className="text-3xl font-semibold tracking-tight text-gray-900">Asesoramiento Creativo</h3>
<p className="mt-4 text-lg text-gray-600 font-normal leading-relaxed">
<span className="text-gray-900 font-medium">Decisiones basadas en datos.</span><br/>
                        Guiamos el desarrollo de piezas creativas a partir de insights obtenidos de las métricas. Qué funciona, qué no, y cómo iterar el contenido para mejorar el CTR y las conversiones.
                    </p>
</div>

<div className="reveal-right order-1 md:order-2 flex gap-4 overflow-visible relative group">
<div className="w-48 h-80 bg-white rounded-2xl flex-shrink-0 relative overflow-hidden border border-gray-100 shadow-sm transform translate-y-8 opacity-60 group-hover:-translate-y-2 transition-transform duration-700">
<div className="bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/299e3e63-b8cb-4824-9100-cafdef037d36_800w.png)] bg-cover bg-center absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="w-56 h-96 bg-white rounded-2xl flex-shrink-0 relative overflow-hidden border border-gray-100 shadow-xl z-10 group-hover:-translate-y-4 transition-transform duration-500">
<div className="bg-center bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/111fd01e-5068-40f7-817b-6a110cdc86c1_800w.png)] bg-cover absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="flex absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<div className="flex group-hover:scale-110 group-hover:bg-[#E5FF00] transition-all duration-300 bg-white/70 w-14 h-14 rounded-full shadow-lg backdrop-blur-md items-center justify-center">
<iconify-icon className="text-2xl text-gray-900 ml-1" icon="solar:play-linear"></iconify-icon>
</div>
</div>
<div className="h-1.5 overflow-hidden bg-white/40 rounded-full absolute right-4 bottom-4 left-4">
<div className="w-2/3 h-full bg-white rounded-full"></div>
</div>
</div>
<div className="w-48 h-80 bg-white rounded-2xl flex-shrink-0 relative overflow-hidden border border-gray-100 shadow-sm transform translate-y-8 opacity-60 group-hover:-translate-y-2 transition-transform duration-700 delay-100">
<div className="bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/97d1877b-06f6-48c3-a646-c779834283c5_800w.png)] bg-cover bg-center absolute top-0 right-0 bottom-0 left-0"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 bg-gray-50/30 border-y border-gray-100 relative overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-gray-200 to-transparent -z-10 hidden md:block"></div>
<div className="max-w-7xl mx-auto relative z-10">
<div className="text-center mb-20">
<h2 className="reveal text-4xl md:text-5xl font-semibold tracking-tight text-gray-900">Resultados que hablan</h2>
<p className="reveal delay-100 mt-4 text-lg text-gray-500 max-w-2xl mx-auto">Acompañamos a marcas a escalar su facturación con rentabilidad. Esto es lo que dicen quienes confían en nosotros.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="reveal delay-100 p-8 rounded-[24px] bg-white border border-gray-100 flex flex-col justify-between hover:shadow-[0_20px_40px_-15px_rgba(59,130,246,0.1)] transition-shadow duration-500 relative overflow-hidden group">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div>
<iconify-icon className="text-3xl text-blue-200 mb-6 group-hover:text-blue-400 transition-colors duration-300" icon="solar:chat-round-line-linear"></iconify-icon>
<p className="text-base text-gray-600 leading-relaxed font-normal mb-8">
                            "Desde que empezamos a trabajar con el equipo, nuestro ROAS se duplicó. Entienden perfectamente el ecosistema de Meta Ads y nos dieron la claridad que necesitábamos para escalar sin miedo a perder rentabilidad."
                        </p>
</div>
<div className="flex items-center gap-4 pt-6 border-t border-gray-100">
<div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 font-medium tracking-tight text-sm">
                            MF
                        </div>
<div>
<div className="font-medium text-gray-900 text-sm tracking-tight">Martina Fernandez</div>
<div className="text-gray-500 text-xs">Directora, Indumentaria Femenina</div>
</div>
</div>
</div>

<div className="reveal delay-200 p-8 rounded-[24px] bg-white border border-gray-100 flex flex-col justify-between hover:shadow-[0_20px_40px_-15px_rgba(229,255,0,0.2)] transition-shadow duration-500 relative overflow-hidden group">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#C1D600] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div>
<iconify-icon className="text-3xl text-[#C1D600]/40 mb-6 group-hover:text-[#C1D600] transition-colors duration-300" icon="solar:chat-round-line-linear"></iconify-icon>
<p className="text-base text-gray-600 leading-relaxed font-normal mb-8">
                            "El nivel de detalle y seguimiento es increíble. No solo configuran campañas, sino que se involucran en el negocio, dándonos feedback constante sobre los creativos y la web. Un verdadero partner estratégico."
                        </p>
</div>
<div className="flex items-center gap-4 pt-6 border-t border-gray-100">
<div className="w-10 h-10 rounded-full bg-[#E5FF00]/20 flex items-center justify-center text-[#8a9900] font-medium tracking-tight text-sm">
                            LR
                        </div>
<div>
<div className="font-medium text-gray-900 text-sm tracking-tight">Lucas Ramirez</div>
<div className="text-gray-500 text-xs">Founder, Tech Store</div>
</div>
</div>
</div>

<div className="reveal delay-300 p-8 rounded-[24px] bg-white border border-gray-100 flex flex-col justify-between hover:shadow-[0_20px_40px_-15px_rgba(139,92,246,0.1)] transition-shadow duration-500 relative overflow-hidden group">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div>
<iconify-icon className="text-3xl text-purple-200 mb-6 group-hover:text-purple-400 transition-colors duration-300" icon="solar:chat-round-line-linear"></iconify-icon>
<p className="text-base text-gray-600 leading-relaxed font-normal mb-8">
                            "Habíamos probado con varias agencias sin ver el retorno esperado. Con Marketing &amp; ADS logramos estructurar el presupuesto mensual y vimos un crecimiento constante mes a mes. Recomendados 100%."
                        </p>
</div>
<div className="flex items-center gap-4 pt-6 border-t border-gray-100">
<div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center text-purple-600 font-medium tracking-tight text-sm">
                            SV
                        </div>
<div>
<div className="font-medium text-gray-900 text-sm tracking-tight">Sofía Varela</div>
<div className="text-gray-500 text-xs">CMO, Tienda de Deco</div>
</div>
</div>
</div>
</div>

<div className="mt-24 pt-12 border-t border-gray-100 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
<div className="reveal space-y-1">
<div className="text-4xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-gray-900 to-gray-600">+50</div>
<div className="text-sm text-gray-500 font-medium">Marcas escaladas</div>
</div>
<div className="reveal delay-100 space-y-1">
<div className="text-4xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-gray-900 to-gray-600">$2M+</div>
<div className="text-sm text-gray-500 font-medium">Inversión gestionada</div>
</div>
<div className="reveal delay-200 space-y-1">
<div className="text-4xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-gray-900 to-gray-600">4.8x</div>
<div className="text-sm text-gray-500 font-medium">ROAS Promedio</div>
</div>
<div className="reveal delay-300 space-y-1">
<div className="text-4xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-gray-900 to-gray-600">95%</div>
<div className="text-sm text-gray-500 font-medium">Retención mensual</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 bg-white relative">
<div className="absolute top-0 right-0 w-96 h-96 bg-orange-50/50 rounded-full blur-[100px] -z-10"></div>
<div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-50/50 rounded-full blur-[100px] -z-10"></div>
<div className="max-w-7xl mx-auto">
<div className="text-center mb-20">
<h2 className="reveal text-4xl md:text-5xl font-semibold tracking-tight text-gray-900">Despejemos tus dudas</h2>
<p className="reveal delay-100 mt-4 text-lg text-gray-500 max-w-2xl mx-auto">Sabemos lo que implica delegar tu inversión. Estas son las inquietudes más comunes de nuestros clientes antes de empezar a trabajar juntos.</p>
</div>
<div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">

<div className="reveal delay-100 p-8 rounded-[24px] bg-white border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.02)] hover:shadow-[0_20px_40px_-15px_rgba(249,115,22,0.1)] transition-shadow duration-300 group">
<div className="flex items-start gap-4 mb-4">
<div className="mt-1 flex-shrink-0 w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center border border-orange-100 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-lg text-orange-500" icon="solar:shield-warning-linear"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-medium tracking-tight text-gray-900">"Ya probé con otras agencias y no funcionó"</h3>
</div>
</div>
<p className="text-base text-gray-600 leading-relaxed font-normal md:pl-14">
                        Entendemos la frustración. Nuestro diferencial es el involucramiento: no somos meros ejecutores de campañas, somos partners estratégicos. Analizamos todo el embudo (web, creativos, oferta) para asegurar que la pauta traiga un retorno real.
                    </p>
</div>

<div className="reveal delay-200 p-8 rounded-[24px] bg-white border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.02)] hover:shadow-[0_20px_40px_-15px_rgba(16,185,129,0.1)] transition-shadow duration-300 group">
<div className="flex items-start gap-4 mb-4">
<div className="mt-1 flex-shrink-0 w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center border border-emerald-100 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-lg text-emerald-500" icon="solar:graph-down-linear"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-medium tracking-tight text-gray-900">"Tengo miedo de perder rentabilidad al escalar"</h3>
</div>
</div>
<p className="text-base text-gray-600 leading-relaxed font-normal md:pl-14">
                        Escalar sin estructura es quemar presupuesto. Nosotros utilizamos un modelo de escalado basado en datos: definimos un ROAS objetivo y aumentamos el presupuesto solo cuando las métricas acompañan, protegiendo tu margen de ganancia.
                    </p>
</div>

<div className="reveal delay-100 p-8 rounded-[24px] bg-white border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.02)] hover:shadow-[0_20px_40px_-15px_rgba(59,130,246,0.1)] transition-shadow duration-300 group">
<div className="flex items-start gap-4 mb-4">
<div className="mt-1 flex-shrink-0 w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center border border-blue-100 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-lg text-blue-500" icon="solar:clock-circle-linear"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-medium tracking-tight text-gray-900">"¿En cuánto tiempo voy a ver resultados?"</h3>
</div>
</div>
<p className="text-base text-gray-600 leading-relaxed font-normal md:pl-14">
                        Aunque depende del estado actual de tu cuenta, por lo general los primeros indicios de mejora se ven en los primeros 15 a 30 días. Luego, trabajamos en ciclos de optimización para estabilizar y finalmente escalar las ventas.
                    </p>
</div>

<div className="reveal delay-200 p-8 rounded-[24px] bg-white border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.02)] hover:shadow-[0_20px_40px_-15px_rgba(168,85,247,0.1)] transition-shadow duration-300 group">
<div className="flex items-start gap-4 mb-4">
<div className="mt-1 flex-shrink-0 w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center border border-purple-100 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-lg text-purple-500" icon="solar:wallet-money-linear"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-medium tracking-tight text-gray-900">"¿Es necesario invertir mucho para empezar?"</h3>
</div>
</div>
<p className="text-base text-gray-600 leading-relaxed font-normal md:pl-14">
                        Solicitamos una inversión mínima mensual porque necesitamos volumen de datos para que Meta aprenda y optimice. Empezar con menos presupuesto ralentiza el proceso de prueba y error, dificultando alcanzar la rentabilidad esperada.
                    </p>
</div>
</div>
</div>
</section>

<section className="bg-gray-950 text-white pt-32 pb-24 px-6 selection:bg-[#E5FF00] selection:text-black relative overflow-hidden" id="presupuesto">

<div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[120px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 relative z-10">

<div className="reveal-left">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-8">¿Este servicio es para tu negocio?</h2>
<p className="text-lg text-gray-400 font-normal mb-12">
                    Este servicio está pensado para negocios que hoy se encuentran en alguno de estos escenarios:
                </p>
<ul className="space-y-6">
<li className="flex items-start gap-4 group">
<div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-[#E5FF00]/10 flex items-center justify-center border border-[#E5FF00]/20 group-hover:bg-[#E5FF00]/20 transition-colors">
<iconify-icon className="text-sm text-[#E5FF00]" icon="solar:check-circle-linear"></iconify-icon>
</div>
<p className="text-lg text-gray-300">Tenés un e-commerce, generás ventas y querés <strong className="text-white">escalar tus resultados</strong>.</p>
</li>
<li className="flex items-start gap-4 group">
<div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-[#E5FF00]/10 flex items-center justify-center border border-[#E5FF00]/20 group-hover:bg-[#E5FF00]/20 transition-colors">
<iconify-icon className="text-sm text-[#E5FF00]" icon="solar:check-circle-linear"></iconify-icon>
</div>
<p className="text-lg text-gray-300">Buscás tomar decisiones <strong className="text-white">basadas en datos</strong>, no en suposiciones.</p>
</li>
<li className="flex items-start gap-4 group">
<div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-[#E5FF00]/10 flex items-center justify-center border border-[#E5FF00]/20 group-hover:bg-[#E5FF00]/20 transition-colors">
<iconify-icon className="text-sm text-[#E5FF00]" icon="solar:check-circle-linear"></iconify-icon>
</div>
<p className="text-lg text-gray-300">Valorás la <strong className="text-white">transparencia y el seguimiento</strong> detallado de tu inversión.</p>
</li>
<li className="flex items-start gap-4 group">
<div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-[#E5FF00]/10 flex items-center justify-center border border-[#E5FF00]/20 group-hover:bg-[#E5FF00]/20 transition-colors">
<iconify-icon className="text-sm text-[#E5FF00]" icon="solar:check-circle-linear"></iconify-icon>
</div>
<p className="text-lg text-gray-300">Entendés que crecer es un proceso que combina <strong className="text-white">estrategia, datos y contenido</strong>.</p>
</li>
</ul>
<div className="mt-16 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors">
<h3 className="text-xl font-medium mb-2">Follow us on Instagram</h3>
<a className="text-gray-400 hover:text-[#E5FF00] transition-colors flex items-center gap-2" href="#">
                        @marketing.and.ads
                        <iconify-icon className="text-base" icon="solar:global-linear"></iconify-icon>
</a>
</div>
</div>

<div className="reveal-right delay-200 bg-gray-900/80 backdrop-blur-xl rounded-[32px] p-8 md:p-12 border border-white/5 shadow-2xl relative overflow-hidden group">

<div className="absolute -top-24 -right-24 w-64 h-64 bg-gradient-to-bl from-[#E5FF00] to-emerald-500 rounded-full mix-blend-screen filter blur-[100px] opacity-10 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none"></div>
<div className="mb-10 relative z-10">
<h3 className="text-3xl font-semibold tracking-tight text-white mb-2">Solicitá un Presupuesto</h3>
<p className="text-base text-gray-400">Completá este breve formulario. <br/>Trabajamos con negocios que invierten un mínimo de USD 500 mensuales en ADS.</p>
</div>
<form className="space-y-6 relative z-10">
<div className="grid grid-cols-2 gap-6">
<div className="space-y-2">
<label className="block text-sm font-medium text-gray-400">Nombre *</label>
<input className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-base text-white placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-[#E5FF00] focus:border-[#E5FF00] transition-all hover:border-white/20" placeholder="Tu nombre" type="text"/>
</div>
<div className="space-y-2">
<label className="block text-sm font-medium text-gray-400">Apellido *</label>
<input className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-base text-white placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-[#E5FF00] focus:border-[#E5FF00] transition-all hover:border-white/20" placeholder="Tu apellido" type="text"/>
</div>
</div>
<div className="grid grid-cols-2 gap-6">
<div className="space-y-2">
<label className="block text-sm font-medium text-gray-400">Email *</label>
<input className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-base text-white placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-[#E5FF00] focus:border-[#E5FF00] transition-all hover:border-white/20" placeholder="correo@empresa.com" type="email"/>
</div>
<div className="space-y-2">
<label className="block text-sm font-medium text-gray-400">Whatsapp *</label>
<input className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-base text-white placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-[#E5FF00] focus:border-[#E5FF00] transition-all hover:border-white/20" placeholder="+54 9..." type="tel"/>
</div>
</div>
<div className="space-y-2">
<label className="block text-sm font-medium text-gray-400">Instagram y/o Web de tu Empresa *</label>
<input className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-base text-white placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-[#E5FF00] focus:border-[#E5FF00] transition-all hover:border-white/20" placeholder="@tuempresa / tuempresa.com" type="text"/>
</div>
<div className="space-y-2">
<label className="block text-sm font-medium text-gray-400">¿Están haciendo actualmente ADS? *</label>
<div className="relative">
<select className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-base text-white appearance-none focus:outline-none focus:ring-1 focus:ring-[#E5FF00] focus:border-[#E5FF00] transition-all hover:border-white/20 cursor-pointer">
<option className="text-gray-900" disabled="" selected="" value="">Seleccionar opción</option>
<option className="text-gray-900" value="si">Sí</option>
<option className="text-gray-900" value="no">No</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-xl text-gray-500 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div className="space-y-2">
<label className="block text-sm font-medium text-gray-400">¿Qué monto invierten mensual? *</label>
<input className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-base text-white placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-[#E5FF00] focus:border-[#E5FF00] transition-all hover:border-white/20" placeholder="Ej: $1,000 USD" type="text"/>
</div>
<div className="space-y-2">
<label className="block text-sm font-medium text-gray-400">¿Cuál fue la facturación online del último mes? *</label>
<input className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-base text-white placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-[#E5FF00] focus:border-[#E5FF00] transition-all hover:border-white/20" placeholder="Ej: $10,000 USD" type="text"/>
</div>
<div className="space-y-2">
<label className="block text-sm font-medium text-gray-400">Cualquier comentario extra</label>
<textarea className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-base text-white placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-[#E5FF00] focus:border-[#E5FF00] transition-all resize-none hover:border-white/20" placeholder="Contanos más sobre tus objetivos..." rows="3"></textarea>
</div>
<button className="w-full bg-white text-gray-900 font-medium text-lg py-4 rounded-xl hover:bg-[#E5FF00] transition-colors mt-4 flex items-center justify-center gap-2 group shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(229,255,0,0.2)]" type="submit">
                        Enviar Formulario
                        <iconify-icon className="text-xl group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</form>
</div>
</div>
</section>

<footer className="bg-gray-950 text-gray-400 py-12 px-6 border-t border-white/5 relative z-10">
<div className="reveal max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
<div>
<span className="font-medium text-xl text-white block mb-4">Marketing &amp; ADS</span>
<p className="text-sm max-w-xs">Agencia especializada en crecimiento estratégico a través de pauta digital.</p>
</div>
<div className="flex flex-wrap gap-12">
<div className="space-y-3">
<h4 className="text-white font-medium text-sm">Menú del sitio</h4>
<ul className="space-y-2 text-sm">
<li><a className="hover:text-[#E5FF00] transition-colors" href="#">About</a></li>
<li><a className="hover:text-[#E5FF00] transition-colors" href="#">Services</a></li>
<li><a className="hover:text-[#E5FF00] transition-colors" href="#">Contact Us</a></li>
</ul>
</div>
<div className="space-y-3">
<h4 className="text-white font-medium text-sm">Contactos</h4>
<ul className="space-y-2 text-sm">
<li><a className="hover:text-[#E5FF00] transition-colors" href="#">Instagram</a></li>
<li><a className="hover:text-[#E5FF00] transition-colors" href="tel:+5491127038640">+54 9 11 2703-8640</a></li>
<li><a className="hover:text-[#E5FF00] transition-colors" href="mailto:hola@marketingandads.com.ar">hola@marketingandads.com.ar</a></li>
</ul>
</div>
</div>
</div>
<div className="reveal delay-100 max-w-7xl mx-auto mt-12 pt-8 border-t border-white/5 text-xs text-gray-600 flex flex-col md:flex-row justify-between items-center gap-4">
<p>© 2024. Created By Marketing &amp; ADS</p>
</div>
</footer>



    </>
  );
}
