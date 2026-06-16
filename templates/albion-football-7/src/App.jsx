import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Initialize Lucide Icons
        lucide.createIcons();

        // Simple Tab Switching Logic
        function switchTab(tabId) {
            // Hide all contents
            document.querySelectorAll('.tab-content').forEach(content => {
                content.classList.add('hidden');
                content.classList.remove('active-tab-content');
            });
            
            // Show selected content
            const selectedContent = document.getElementById(tabId);
            selectedContent.classList.remove('hidden');
            selectedContent.classList.add('active-tab-content');

            // Reset all buttons style
            const buttons = document.querySelectorAll('#methodology-tabs button');
            buttons.forEach(btn => {
                btn.classList.remove('border-[#D4AF37]/20', 'bg-[#D4AF37]/5', 'text-[#D4AF37]');
                btn.classList.add('border-transparent', 'text-[#E6DDC6]/50');
            });

            // Set active button style
            const activeBtn = event.currentTarget;
            activeBtn.classList.remove('border-transparent', 'text-[#E6DDC6]/50');
            activeBtn.classList.add('border-[#D4AF37]/20', 'bg-[#D4AF37]/5', 'text-[#D4AF37]');
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="grain-overlay"></div>

<nav className="fixed w-full z-40 top-0 transition-all duration-300 bg-[#050A14]/90 backdrop-blur-md border-b border-[#D4AF37]/10">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<div className="flex items-center gap-3 group cursor-pointer">
<div className="w-10 h-10 bg-[#3F0D16] rounded-full flex items-center justify-center border border-[#D4AF37]/30 group-hover:border-[#D4AF37] transition-colors">
<span className="font-black text-[#D4AF37] text-lg">A</span>
</div>
<span className="font-bold text-xl tracking-tight text-[#E6DDC6]">ALBION FC</span>
</div>

<div className="hidden xl:flex items-center gap-8 text-sm font-medium tracking-wide">
<a className="text-[#D4AF37]" href="#">Home</a>
<a className="text-[#E6DDC6]/70 hover:text-[#E6DDC6] transition-colors" href="#">Sports City</a>
<a className="text-[#E6DDC6]/70 hover:text-[#E6DDC6] transition-colors" href="#">Teams</a>
<a className="text-[#E6DDC6]/70 hover:text-[#E6DDC6] transition-colors" href="#">Scouting</a>
<a className="text-[#E6DDC6]/70 hover:text-[#E6DDC6] transition-colors" href="#">International</a>
<a className="text-[#E6DDC6]/70 hover:text-[#E6DDC6] transition-colors" href="#">History</a>
<a className="text-[#E6DDC6]/70 hover:text-[#E6DDC6] transition-colors" href="#">About Us</a>
<a className="text-[#E6DDC6]/70 hover:text-[#E6DDC6] transition-colors" href="#">Press</a>
<a className="text-[#D4AF37] font-semibold flex items-center gap-1 group" href="#">
                    Store <i className="w-4 h-4 group-hover:rotate-12 transition-transform" data-lucide="shopping-bag"></i>
</a>
<a className="text-[#E6DDC6]/70 hover:text-[#E6DDC6] transition-colors" href="#">Tickets</a>
<a className="px-5 py-2 border border-[#E6DDC6]/20 rounded-full hover:bg-[#E6DDC6] hover:text-[#050A14] transition-all duration-300" href="#">Contact</a>
</div>

<div className="xl:hidden text-[#E6DDC6]">
<i data-lucide="menu"></i>
</div>
</div>
</nav>

<header className="relative h-screen min-h-[800px] w-full overflow-hidden flex items-end">

<div className="absolute inset-0 z-0">
<img alt="Albion Training" className="w-full h-full object-cover opacity-90 object-center transform scale-105 animate-[pulse_10s_ease-in-out_infinite]" src="https://images.unsplash.com/photo-1510566337590-2fc1f21d0faa?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute inset-0 z-10 bg-gradient-to-t from-[#050A14] via-[#050A14]/50 to-transparent"></div>
<div className="absolute inset-0 z-10 bg-gradient-to-r from-[#050A14]/80 via-transparent to-transparent"></div>

<div className="relative z-20 max-w-7xl mx-auto px-6 pb-24 w-full">
<div className="max-w-4xl space-y-6">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 backdrop-blur-sm mb-4">
<span className="w-2 h-2 rounded-full bg-[#D4AF37]"></span>
<span className="text-xs font-semibold tracking-wider uppercase text-[#D4AF37]">Desde 1891</span>
</div>
<h1 className="text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter text-[#E6DDC6] leading-[0.9]">
                    UN CLUB <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#8B6E22]">FORMADOR</span>
</h1>
<h3 className="text-xl md:text-2xl font-light text-[#E6DDC6]/80 max-w-xl leading-relaxed">
                    Descubrí por qué somos diferentes. Pioneros del fútbol, expertos en el futuro.
                </h3>
</div>
</div>
</header>

<section className="relative py-32 bg-[#050A14] border-t border-[#E6DDC6]/5">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-4xl md:text-5xl font-black tracking-tight text-[#E6DDC6] mb-4">Metodología Pionera</h2>
<div className="h-1 w-24 bg-[#3F0D16]"></div>
</div>

<div className="grid lg:grid-cols-12 gap-12">

<div className="lg:col-span-4 flex flex-col gap-2" id="methodology-tabs">
<button className="tab-btn active text-left p-6 rounded-xl border border-[#D4AF37]/20 bg-[#D4AF37]/5 text-[#D4AF37] transition-all duration-300 hover:bg-[#D4AF37]/10" onclick="switchTab('infrastructure')">
<span className="text-xs font-bold uppercase tracking-widest opacity-70 mb-1 block">01</span>
<span className="text-2xl font-bold tracking-tight">Infraestructura</span>
</button>
<button className="tab-btn text-left p-6 rounded-xl border border-transparent text-[#E6DDC6]/50 hover:text-[#E6DDC6] transition-all duration-300 hover:bg-[#E6DDC6]/5" onclick="switchTab('development')">
<span className="text-xs font-bold uppercase tracking-widest opacity-70 mb-1 block">02</span>
<span className="text-2xl font-bold tracking-tight">Desarrollo Integral</span>
</button>
<button className="tab-btn text-left p-6 rounded-xl border border-transparent text-[#E6DDC6]/50 hover:text-[#E6DDC6] transition-all duration-300 hover:bg-[#E6DDC6]/5" onclick="switchTab('projection')">
<span className="text-xs font-bold uppercase tracking-widest opacity-70 mb-1 block">03</span>
<span className="text-2xl font-bold tracking-tight">Proyección Global</span>
</button>
</div>

<div className="lg:col-span-8 relative min-h-[500px]">

<div className="tab-content absolute inset-0 flex flex-col h-full" id="infrastructure">
<div className="relative w-full h-80 rounded-2xl overflow-hidden mb-8 group">
<img alt="Ciudad Deportiva" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#050A14] to-transparent opacity-60"></div>
<div className="absolute bottom-6 left-6">
<div className="inline-flex items-center gap-2 px-3 py-1 bg-[#3F0D16] text-[#E6DDC6] text-xs font-bold uppercase tracking-wider rounded">
                                    Ciudad Deportiva
                                </div>
</div>
</div>
<div className="space-y-6">
<p className="text-xl font-light leading-relaxed text-[#E6DDC6]/90">
<span className="text-[#D4AF37] font-medium">La Ciudad Deportiva de Albion</span> ya es una realidad en construcción: 7 of the 9 professional pitches are already finished, y el edificio principal avanza a todo ritmo dentro de un predio de 40 hectáreas y más de 5.500 m² edilicios proyectados. Un espacio diseñado para formar futbolistas en un entorno integral, moderno y con estándares de élite internacional.
                            </p>
<a className="inline-flex items-center gap-2 text-[#D4AF37] font-bold tracking-wide hover:text-[#E6DDC6] transition-colors text-lg" href="#">
                                Learn More <i className="w-5 h-5" data-lucide="arrow-right"></i>
</a>
</div>
</div>

<div className="tab-content hidden absolute inset-0 flex flex-col h-full" id="development">
<div className="relative w-full h-80 rounded-2xl overflow-hidden mb-8 group">
<img alt="Entrenamiento" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1526232761682-d26e03ac148e?q=80&amp;w=2029&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#050A14] to-transparent opacity-60"></div>
<div className="absolute bottom-6 left-6">
<div className="inline-flex items-center gap-2 px-3 py-1 bg-[#3F0D16] text-[#E6DDC6] text-xs font-bold uppercase tracking-wider rounded">
                                    Formación Humana y Deportiva
                                </div>
</div>
</div>
<div className="space-y-6">
<p className="text-xl font-light leading-relaxed text-[#E6DDC6]/90">
                                Acompañamos a cada futbolista dentro y fuera de la cancha con un seguimiento personalizado y una metodología de trabajo diseñada para potenciar al máximo sus capacidades. Desde la formación técnico-táctica, pasando por el desarrollo físico y nutricional, hasta su desempeño académico, cuentan con un equipo de profesionales que los guía y apoya todos los días.
                            </p>
<a className="inline-flex items-center gap-2 text-[#D4AF37] font-bold tracking-wide hover:text-[#E6DDC6] transition-colors text-lg" href="#">
                                Learn More <i className="w-5 h-5" data-lucide="arrow-right"></i>
</a>
</div>
</div>

<div className="tab-content hidden absolute inset-0 flex flex-col h-full" id="projection">
<div className="relative w-full h-80 rounded-2xl overflow-hidden mb-8 group">
<img alt="Competencia Internacional" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&amp;w=1886&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#050A14] to-transparent opacity-60"></div>
<div className="absolute bottom-6 left-6">
<div className="inline-flex items-center gap-2 px-3 py-1 bg-[#3F0D16] text-[#E6DDC6] text-xs font-bold uppercase tracking-wider rounded">
                                    Oportunidades Globales
                                </div>
</div>
</div>
<div className="space-y-6">
<p className="text-xl font-light leading-relaxed text-[#E6DDC6]/90">
                                Trabajamos todos los días para crear oportunidades que impulsen el crecimiento de nuestros futbolistas. Competimos internacionalmente desde las primeras categorías en torneos en América y Europa, organizamos en nuestra Ciudad Deportiva el Torneo Pioneros U16 y enviamos futbolistas a entrenar en clubes de élite mundial para potenciar su desarrollo en entornos de alto rendimiento.
                            </p>
<a className="inline-flex items-center gap-2 text-[#D4AF37] font-bold tracking-wide hover:text-[#E6DDC6] transition-colors text-lg" href="#">
                                Learn More <i className="w-5 h-5" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#080F1F]">
<div className="max-w-7xl mx-auto px-6">
<div className="flex items-end justify-between mb-12">
<h2 className="text-4xl font-black tracking-tight text-[#E6DDC6]">Noticias</h2>
<div className="flex gap-2">
<button className="w-12 h-12 rounded-full border border-[#E6DDC6]/20 flex items-center justify-center text-[#E6DDC6] hover:bg-[#3F0D16] hover:border-[#3F0D16] transition-colors">
<i data-lucide="arrow-left"></i>
</button>
<button className="w-12 h-12 rounded-full border border-[#E6DDC6]/20 flex items-center justify-center text-[#E6DDC6] hover:bg-[#3F0D16] hover:border-[#3F0D16] transition-colors">
<i data-lucide="arrow-right"></i>
</button>
</div>
</div>
<div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scrollbar-hide">

<div className="min-w-[350px] md:min-w-[400px] bg-[#050A14] border border-[#E6DDC6]/5 rounded-xl overflow-hidden snap-start group cursor-pointer hover:border-[#D4AF37]/30 transition-all">
<div className="h-64 overflow-hidden relative">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&amp;w=1936&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 bg-[#D4AF37] text-[#050A14] text-xs font-bold px-3 py-1 rounded">PRIMER EQUIPO</div>
</div>
<div className="p-8 space-y-4">
<span className="text-sm text-[#E6DDC6]/50 font-medium">24 Oct, 2023</span>
<h3 className="text-2xl font-bold text-[#E6DDC6] leading-tight group-hover:text-[#D4AF37] transition-colors">
                            Victoria clave en casa para seguir soñando
                        </h3>
<p className="text-lg text-[#E6DDC6]/70 font-light line-clamp-2">
                            El equipo demostró carácter y buen fútbol para superar a un rival directo en la tabla de posiciones.
                        </p>
<div className="pt-4">
<span className="text-[#D4AF37] font-semibold text-sm uppercase tracking-wider">Leer Nota</span>
</div>
</div>
</div>

<div className="min-w-[350px] md:min-w-[400px] bg-[#050A14] border border-[#E6DDC6]/5 rounded-xl overflow-hidden snap-start group cursor-pointer hover:border-[#D4AF37]/30 transition-all">
<div className="h-64 overflow-hidden relative">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://images.unsplash.com/photo-1551958219-acbc608c6377?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 bg-[#3F0D16] text-[#E6DDC6] text-xs font-bold px-3 py-1 rounded">FORMATIVAS</div>
</div>
<div className="p-8 space-y-4">
<span className="text-sm text-[#E6DDC6]/50 font-medium">22 Oct, 2023</span>
<h3 className="text-2xl font-bold text-[#E6DDC6] leading-tight group-hover:text-[#D4AF37] transition-colors">
                            La Sub-16 viaja a Europa para el torneo internacional
                        </h3>
<p className="text-lg text-[#E6DDC6]/70 font-light line-clamp-2">
                            Una nueva experiencia internacional para nuestros juveniles que competirán contra las mejores academias del mundo.
                        </p>
<div className="pt-4">
<span className="text-[#D4AF37] font-semibold text-sm uppercase tracking-wider">Leer Nota</span>
</div>
</div>
</div>

<div className="min-w-[350px] md:min-w-[400px] bg-[#050A14] border border-[#E6DDC6]/5 rounded-xl overflow-hidden snap-start group cursor-pointer hover:border-[#D4AF37]/30 transition-all">
<div className="h-64 overflow-hidden relative">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://images.unsplash.com/photo-1434648957308-5e6a859697e8?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 bg-[#050A14] border border-[#D4AF37] text-[#D4AF37] text-xs font-bold px-3 py-1 rounded">INSTITUCIONAL</div>
</div>
<div className="p-8 space-y-4">
<span className="text-sm text-[#E6DDC6]/50 font-medium">18 Oct, 2023</span>
<h3 className="text-2xl font-bold text-[#E6DDC6] leading-tight group-hover:text-[#D4AF37] transition-colors">
                            Avances en la fase 2 de la Ciudad Deportiva
                        </h3>
<p className="text-lg text-[#E6DDC6]/70 font-light line-clamp-2">
                            El edificio principal comienza a tomar forma con la instalación de la estructura techada.
                        </p>
<div className="pt-4">
<span className="text-[#D4AF37] font-semibold text-sm uppercase tracking-wider">Leer Nota</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-32 bg-[#3F0D16] overflow-hidden">

<div className="absolute inset-0 opacity-20 mix-blend-multiply">
<img alt="texture" className="w-full h-full object-cover" src="https://www.transparenttextures.com/patterns/stardust.png"/>
</div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid md:grid-cols-2 gap-12 items-center">
<div className="space-y-8">
<div className="space-y-2">
<span className="text-[#D4AF37] font-bold tracking-widest uppercase text-sm">Tienda Oficial</span>
<h2 className="text-5xl md:text-6xl font-black tracking-tight text-[#E6DDC6] leading-none">
                            Llevá el ADN <br/> Pionero a todos lados
                        </h2>
</div>
<p className="text-xl font-light text-[#E6DDC6]/80 max-w-md">
                        Descubrí la nueva indumentaria 2025/2026. Diseñada con tecnología de punta y respetando nuestros colores históricos.
                    </p>
<button className="group relative px-8 py-4 bg-[#D4AF37] text-[#050A14] font-bold uppercase tracking-wider overflow-hidden rounded-sm">
<div className="absolute inset-0 w-0 bg-[#E6DDC6] transition-all duration-[250ms] ease-out group-hover:w-full"></div>
<span className="relative flex items-center gap-2">
                            Ir a la Tienda <i className="w-5 h-5" data-lucide="arrow-up-right"></i>
</span>
</button>
</div>
<div className="relative h-[500px] flex items-center justify-center">

<div className="absolute inset-0 bg-[#D4AF37] rounded-full opacity-5 blur-3xl animate-pulse"></div>
<img alt="Albion Jersey" className="relative w-full h-full object-cover rounded-xl shadow-2xl rotate-3 hover:rotate-0 transition-all duration-700 border border-[#E6DDC6]/10 grayscale hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute bottom-10 right-10 bg-[#050A14]/90 backdrop-blur-md border border-[#D4AF37]/20 p-6 rounded-lg">
<div className="text-[#D4AF37] text-xs font-bold uppercase mb-1">Nueva Temporada</div>
<div className="text-[#E6DDC6] text-2xl font-bold">Kit Oficial 24/25</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#050A14]">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 text-center">
<h2 className="text-4xl md:text-5xl font-black tracking-tight text-[#E6DDC6] mb-4">Historias Pioneras</h2>
<p className="text-xl text-[#E6DDC6]/60 max-w-2xl mx-auto font-light">
                    El legado de 1891 vive en cada persona que forma parte de Albion.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">

<div className="group relative aspect-[3/4] overflow-hidden cursor-pointer bg-[#080F1F]">
<img className="w-full h-full object-cover opacity-70 group-hover:opacity-40 transition-all duration-500 group-hover:scale-105 filter sepia-[0.2]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-[#050A14] via-[#050A14]/50 to-transparent">
<h4 className="text-xl font-bold text-[#E6DDC6] mb-2 translate-y-2 group-hover:translate-y-0 transition-transform">El Capitán</h4>
<p className="text-[#D4AF37] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity delay-75">Liderazgo dentro y fuera.</p>
</div>
</div>

<div className="group relative aspect-[3/4] overflow-hidden cursor-pointer bg-[#080F1F]">
<img className="w-full h-full object-cover opacity-70 group-hover:opacity-40 transition-all duration-500 group-hover:scale-105 filter sepia-[0.2]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-[#050A14] via-[#050A14]/50 to-transparent">
<h4 className="text-xl font-bold text-[#E6DDC6] mb-2 translate-y-2 group-hover:translate-y-0 transition-transform">Nuestros Orígenes</h4>
<p className="text-[#D4AF37] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity delay-75">1891: El comienzo.</p>
</div>
</div>

<div className="group relative aspect-[3/4] overflow-hidden cursor-pointer bg-[#080F1F]">
<img className="w-full h-full object-cover opacity-70 group-hover:opacity-40 transition-all duration-500 group-hover:scale-105 filter sepia-[0.2]" src="https://images.unsplash.com/photo-1624880357913-a8539238245b?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-[#050A14] via-[#050A14]/50 to-transparent">
<h4 className="text-xl font-bold text-[#E6DDC6] mb-2 translate-y-2 group-hover:translate-y-0 transition-transform">La Hinchada</h4>
<p className="text-[#D4AF37] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity delay-75">Pasión incondicional.</p>
</div>
</div>

<div className="group relative aspect-[3/4] overflow-hidden cursor-pointer bg-[#080F1F]">
<img className="w-full h-full object-cover opacity-70 group-hover:opacity-40 transition-all duration-500 group-hover:scale-105 filter sepia-[0.2]" src="https://images.unsplash.com/photo-1552667466-07770ae110d0?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-[#050A14] via-[#050A14]/50 to-transparent">
<h4 className="text-xl font-bold text-[#E6DDC6] mb-2 translate-y-2 group-hover:translate-y-0 transition-transform">Formando Futuro</h4>
<p className="text-[#D4AF37] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity delay-75">Talento Joven.</p>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-[#030508] border-t border-[#E6DDC6]/5 pt-24 pb-12">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-20 mb-20">
<div>
<h2 className="text-4xl md:text-5xl font-black tracking-tight text-[#E6DDC6] mb-6">
                        Sumate a hacer <span className="text-[#D4AF37]">historia</span>.
                    </h2>
<p className="text-lg text-[#E6DDC6]/60 mb-8 max-w-md font-light">
                        Suscribite a nuestro newsletter y recibí las últimas novedades del Decano, información de partidos y eventos exclusivos.
                    </p>
<form className="flex flex-col sm:flex-row gap-4 max-w-md">
<input className="flex-1 bg-[#050A14] border border-[#E6DDC6]/20 text-[#E6DDC6] px-6 py-4 rounded-sm focus:outline-none focus:border-[#D4AF37] transition-colors placeholder:text-[#E6DDC6]/30" placeholder="Tu correo electrónico" type="email"/>
<button className="px-8 py-4 bg-[#3F0D16] text-[#E6DDC6] font-bold uppercase tracking-wider hover:bg-[#D4AF37] hover:text-[#050A14] transition-colors rounded-sm" type="button">
                            Suscribirse
                        </button>
</form>
</div>
<div className="grid grid-cols-2 sm:grid-cols-3 gap-12">
<div className="space-y-6">
<h4 className="text-[#E6DDC6] font-bold uppercase tracking-widest text-sm">El Club</h4>
<ul className="space-y-4 text-[#E6DDC6]/60 font-light">
<li><a className="hover:text-[#D4AF37] transition-colors" href="#">Historia</a></li>
<li><a className="hover:text-[#D4AF37] transition-colors" href="#">Autoridades</a></li>
<li><a className="hover:text-[#D4AF37] transition-colors" href="#">Ciudad Deportiva</a></li>
<li><a className="hover:text-[#D4AF37] transition-colors" href="#">Transparencia</a></li>
</ul>
</div>
<div className="space-y-6">
<h4 className="text-[#E6DDC6] font-bold uppercase tracking-widest text-sm">Fútbol</h4>
<ul className="space-y-4 text-[#E6DDC6]/60 font-light">
<li><a className="hover:text-[#D4AF37] transition-colors" href="#">Primer Equipo</a></li>
<li><a className="hover:text-[#D4AF37] transition-colors" href="#">Formativas</a></li>
<li><a className="hover:text-[#D4AF37] transition-colors" href="#">Scouting</a></li>
<li><a className="hover:text-[#D4AF37] transition-colors" href="#">Fixture</a></li>
</ul>
</div>
<div className="space-y-6">
<h4 className="text-[#E6DDC6] font-bold uppercase tracking-widest text-sm">Contacto</h4>
<ul className="space-y-4 text-[#E6DDC6]/60 font-light">
<li><a className="hover:text-[#D4AF37] transition-colors" href="#">Prensa</a></li>
<li><a className="hover:text-[#D4AF37] transition-colors" href="#">Socios</a></li>
<li><a className="hover:text-[#D4AF37] transition-colors" href="#">Tienda</a></li>
</ul>
</div>
</div>
</div>
<div className="pt-12 border-t border-[#E6DDC6]/5 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2 opacity-50">
<span className="w-6 h-6 rounded-full bg-[#3F0D16] flex items-center justify-center text-[10px] font-bold text-[#D4AF37]">A</span>
<span className="text-sm text-[#E6DDC6]">© 1891 Albion Football Club.</span>
</div>
<div className="flex items-center gap-6">
<a className="text-[#E6DDC6]/60 hover:text-[#D4AF37] transition-colors" href="#"><i className="w-5 h-5" data-lucide="instagram"></i></a>
<a className="text-[#E6DDC6]/60 hover:text-[#D4AF37] transition-colors" href="#"><i className="w-5 h-5" data-lucide="twitter"></i></a>
<a className="text-[#E6DDC6]/60 hover:text-[#D4AF37] transition-colors" href="#"><i className="w-5 h-5" data-lucide="facebook"></i></a>
<a className="text-[#E6DDC6]/60 hover:text-[#D4AF37] transition-colors" href="#"><i className="w-5 h-5" data-lucide="youtube"></i></a>
</div>
</div>
</div>
</footer>



    </>
  );
}
