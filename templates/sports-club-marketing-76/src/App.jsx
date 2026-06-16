import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
navy: '#00214F',
burgundy: '#A3172D',
gold: '#706438',
offwhite: '#E2E2E2', // Strictly avoiding pure white
surface: '#051630', // Very dark navy for cards
},
fontFamily: {
sans: ['Montserrat', 'sans-serif'],
},
backgroundImage: {
'gradient-brand': 'linear-gradient(135deg, #00214F 0%, #A3172D 100%)',
'gradient-border': 'linear-gradient(90deg, #00214F, #A3172D, #706438)',
'grain': 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' opacity=\'0.05\'/%3E%3C/svg%3E")',
}
}
}
}



        // Initialize Icons
        lucide.createIcons();

        // Tabs Logic
        function switchTab(tabId) {
            // Reset all contents opacity and pointer events
            document.querySelectorAll('.tab-content').forEach(content => {
                content.classList.remove('opacity-100', 'z-10');
                content.classList.add('opacity-0', 'pointer-events-none');
            });

            // Show active content
            const activeContent = document.getElementById('content-' + tabId);
            activeContent.classList.remove('opacity-0', 'pointer-events-none');
            activeContent.classList.add('opacity-100', 'z-10');

            // Reset button states
            ['infra', 'player', 'projection'].forEach(id => {
                const btn = document.getElementById('btn-' + id);
                const border = btn.querySelector('.tab-border-active');
                const icon = btn.querySelector('i');
                
                if(id === tabId) {
                    btn.classList.remove('opacity-60');
                    border.classList.remove('opacity-0');
                    icon.classList.remove('opacity-0');
                } else {
                    btn.classList.add('opacity-60');
                    border.classList.add('opacity-0');
                    icon.classList.add('opacity-0');
                }
            });
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="grain-overlay"></div>

<nav className="fixed top-0 w-full z-40 bg-navy/80 backdrop-blur-md border-b border-white/10">
<div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

<div className="flex items-center gap-3 cursor-pointer group">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-navy via-burgundy to-gold flex items-center justify-center shadow-lg border border-white/10 group-hover:scale-105 transition-transform">
<span className="font-black text-lg text-offwhite tracking-tighter">A</span>
</div>
<span className="text-xl font-black tracking-tight text-offwhite uppercase hidden sm:block">Albion FC</span>
</div>

<div className="hidden lg:flex items-center gap-8 text-sm font-medium tracking-wide">
<a className="text-offwhite/80 hover:text-gold transition-colors" href="#">Home</a>
<a className="text-offwhite/80 hover:text-gold transition-colors" href="#">Sports City</a>
<a className="text-offwhite/80 hover:text-gold transition-colors" href="#">Teams</a>
<a className="text-offwhite/80 hover:text-gold transition-colors" href="#">Scouting</a>
<a className="text-offwhite/80 hover:text-gold transition-colors" href="#">International</a>
<a className="text-offwhite/80 hover:text-gold transition-colors" href="#">History</a>
<a className="text-offwhite/80 hover:text-gold transition-colors" href="#">About Us</a>
<a className="text-offwhite/80 hover:text-gold transition-colors" href="#">Press</a>
<a className="text-offwhite/80 hover:text-gold transition-colors" href="#">Tickets</a>

<a className="relative group" href="#">
<div className="absolute -inset-0.5 bg-gradient-to-r from-burgundy via-gold to-navy rounded-full opacity-70 group-hover:opacity-100 blur-[2px] transition duration-500"></div>
<div className="relative px-5 py-2 bg-navy rounded-full flex items-center gap-2 border border-white/10">
<i className="w-4 h-4 text-gold" data-lucide="shopping-bag"></i>
<span className="font-semibold text-offwhite text-xs uppercase tracking-wider">Store</span>
</div>
</a>
</div>

<div className="lg:hidden text-offwhite">
<i className="w-6 h-6" data-lucide="menu"></i>
</div>
</div>
</nav>

<header className="relative h-screen w-full overflow-hidden flex items-center justify-center">

<div className="absolute inset-0 z-0">
<img alt="Albion Pitch" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>

<div className="absolute inset-0 bg-gradient-to-b from-navy/90 via-navy/60 to-navy/95 mix-blend-multiply"></div>
<div className="absolute inset-0 bg-gradient-brand opacity-40 mix-blend-color"></div>
</div>

<div className="relative z-10 text-center max-w-5xl px-6 mt-16 fade-in">
<h3 className="text-lg md:text-xl font-light text-gold tracking-[0.2em] mb-4 uppercase">Descubrí por qué somos diferentes</h3>
<h1 className="text-6xl md:text-8xl font-black text-offwhite tracking-tighter uppercase mb-8 leading-[0.9]">
                Un Club <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-offwhite via-gray-400 to-gray-500">Formador</span>
</h1>
<div className="flex justify-center mt-8">
<div className="w-[1px] h-24 bg-gradient-to-b from-gold to-transparent"></div>
</div>
</div>
</header>

<section className="py-24 md:py-32 px-6 relative bg-navy">
<div className="max-w-7xl mx-auto">

<div className="mb-16 border-l-2 border-burgundy pl-6">
<h2 className="text-4xl md:text-5xl font-black tracking-tight text-offwhite mb-2">Metodología Pionera</h2>
<p className="text-xl font-light text-gray-400 max-w-2xl">Excelencia en cada paso del camino.</p>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-12" x-data="{ activeTab: 'infra' }">

<div className="lg:col-span-4 flex flex-col gap-4" id="tabs-nav">
<button className="group relative p-[1px] rounded-xl transition-all duration-300" id="btn-infra" onclick="switchTab('infra')">
<div className="absolute inset-0 bg-gradient-border rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 tab-border-active"></div>
<div className="relative bg-surface p-6 rounded-[11px] border border-white/5 h-full flex items-center justify-between group-hover:bg-white/5 transition-colors">
<span className="text-xl font-bold text-offwhite tracking-tight">Infraestructura</span>
<i className="w-5 h-5 text-gold opacity-0 group-hover:opacity-100 transition-opacity" data-lucide="arrow-right"></i>
</div>
</button>
<button className="group relative p-[1px] rounded-xl transition-all duration-300 opacity-60 hover:opacity-100" id="btn-player" onclick="switchTab('player')">
<div className="absolute inset-0 bg-gradient-border rounded-xl opacity-0 transition-opacity duration-500 tab-border-active"></div>
<div className="relative bg-surface p-6 rounded-[11px] border border-white/5 h-full flex items-center justify-between group-hover:bg-white/5 transition-colors">
<span className="text-xl font-bold text-offwhite tracking-tight">Desarrollo Integral</span>
<i className="w-5 h-5 text-gold opacity-0 group-hover:opacity-100 transition-opacity" data-lucide="arrow-right"></i>
</div>
</button>
<button className="group relative p-[1px] rounded-xl transition-all duration-300 opacity-60 hover:opacity-100" id="btn-projection" onclick="switchTab('projection')">
<div className="absolute inset-0 bg-gradient-border rounded-xl opacity-0 transition-opacity duration-500 tab-border-active"></div>
<div className="relative bg-surface p-6 rounded-[11px] border border-white/5 h-full flex items-center justify-between group-hover:bg-white/5 transition-colors">
<span className="text-xl font-bold text-offwhite tracking-tight">Proyección</span>
<i className="w-5 h-5 text-gold opacity-0 group-hover:opacity-100 transition-opacity" data-lucide="arrow-right"></i>
</div>
</button>
</div>

<div className="lg:col-span-8 relative min-h-[500px]">

<div className="tab-content absolute inset-0 flex flex-col gap-8 opacity-100 transition-opacity duration-500 z-10" id="content-infra">
<div className="relative h-64 md:h-80 w-full rounded-2xl overflow-hidden group border border-white/10">
<img alt="Sports City Render" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1577223625816-7546f13df25d?q=80&amp;w=1500&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent opacity-80"></div>
</div>
<div className="space-y-6">
<p className="text-lg font-light text-gray-300 leading-relaxed">
                                La Ciudad Deportiva de Albion ya es una realidad en construcción: 7 of the 9 professional pitches are already finished, and the main building is progressing rapidly within a 40-hectare property with more than 5,500 m² of projected facilities. A space designed to develop footballers in a comprehensive, modern environment with elite international standards.
                            </p>
<button className="group flex items-center gap-3 px-8 py-3 rounded-full bg-transparent border border-burgundy hover:bg-burgundy/20 transition-all duration-300">
<span className="text-offwhite font-semibold tracking-wide">Learn More</span>
<i className="w-5 h-5 text-gold" data-lucide="arrow-right-circle"></i>
</button>
</div>
</div>

<div className="tab-content absolute inset-0 flex flex-col gap-8 opacity-0 pointer-events-none transition-opacity duration-500" id="content-player">
<div className="relative h-64 md:h-80 w-full rounded-2xl overflow-hidden group border border-white/10">
<img alt="Player Development" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1526232761682-d26e03ac148e?q=80&amp;w=1500&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent opacity-80"></div>
</div>
<div className="space-y-6">
<p className="text-lg font-light text-gray-300 leading-relaxed">
                                Acompañamos a cada futbolista dentro y fuera de la cancha con un seguimiento personalizado y una metodología de trabajo diseñada para potenciar al máximo sus capacidades. Desde la formación técnico-táctica, pasando por el desarrollo físico y nutricional, hasta su desempeño académico, cuentan con un equipo de profesionales que los guía y apoya todos los días.
                            </p>
</div>
</div>

<div className="tab-content absolute inset-0 flex flex-col gap-8 opacity-0 pointer-events-none transition-opacity duration-500" id="content-projection">
<div className="relative h-64 md:h-80 w-full rounded-2xl overflow-hidden group border border-white/10">
<img alt="International Competition" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent opacity-80"></div>
</div>
<div className="space-y-6">
<p className="text-lg font-light text-gray-300 leading-relaxed">
                                Trabajamos todos los días para crear oportunidades que impulsen el crecimiento de nuestros futbolistas. Competimos internacionalmente desde las primeras categorías en torneos en América y Europa, organizamos en nuestra Ciudad Deportiva el Torneo Pioneros U16 y enviamos futbolistas a entrenar en clubes de élite mundial para potenciar su desarrollo en entornos de alto rendimiento.
                            </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-[#020d21] relative overflow-hidden">

<div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-burgundy/10 to-transparent pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6">
<div className="flex items-end justify-between mb-12">
<h2 className="text-4xl md:text-6xl font-black tracking-tight text-offwhite">Noticias</h2>
<div className="flex gap-4">
<button className="p-3 rounded-full border border-white/10 hover:bg-white/5 transition-colors">
<i className="w-5 h-5 text-gold" data-lucide="arrow-left"></i>
</button>
<button className="p-3 rounded-full border border-white/10 hover:bg-white/5 transition-colors">
<i className="w-5 h-5 text-gold" data-lucide="arrow-right"></i>
</button>
</div>
</div>

<div className="flex gap-6 overflow-x-auto no-scrollbar pb-8 snap-x snap-mandatory">

<div className="min-w-[300px] md:min-w-[380px] snap-start">
<div className="group relative h-full bg-navy rounded-2xl overflow-hidden border border-white/5 hover:border-gold/30 transition-colors">
<div className="relative h-48 overflow-hidden">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-navy/30 group-hover:bg-transparent transition-colors"></div>
</div>
<div className="p-6 flex flex-col gap-3">
<span className="text-xs font-bold text-burgundy uppercase tracking-wider">Primer Equipo</span>
<h3 className="text-xl font-bold text-offwhite leading-tight">Victoria clave en el Parque Paladino</h3>
<p className="text-sm text-gray-400 line-clamp-2 font-light">El equipo mostró carácter y buen juego para llevarse los tres puntos ante un rival directo.</p>
<a className="mt-4 inline-flex items-center text-gold text-sm font-semibold group-hover:text-offwhite transition-colors" href="#">
                                Leer nota <i className="w-4 h-4 ml-1" data-lucide="chevron-right"></i>
</a>
</div>
</div>
</div>

<div className="min-w-[300px] md:min-w-[380px] snap-start">
<div className="group relative h-full bg-navy rounded-2xl overflow-hidden border border-white/5 hover:border-gold/30 transition-colors">
<div className="relative h-48 overflow-hidden">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://images.unsplash.com/photo-1560272564-c83b66b1ad12?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-6 flex flex-col gap-3">
<span className="text-xs font-bold text-burgundy uppercase tracking-wider">Juveniles</span>
<h3 className="text-xl font-bold text-offwhite leading-tight">La Sub-16 viaja a España</h3>
<p className="text-sm text-gray-400 line-clamp-2 font-light">Una nueva experiencia internacional para nuestras formativas en el torneo MIC Football.</p>
<a className="mt-4 inline-flex items-center text-gold text-sm font-semibold group-hover:text-offwhite transition-colors" href="#">
                                Leer nota <i className="w-4 h-4 ml-1" data-lucide="chevron-right"></i>
</a>
</div>
</div>
</div>

<div className="min-w-[300px] md:min-w-[380px] snap-start">
<div className="group relative h-full bg-navy rounded-2xl overflow-hidden border border-white/5 hover:border-gold/30 transition-colors">
<div className="relative h-48 overflow-hidden">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-6 flex flex-col gap-3">
<span className="text-xs font-bold text-burgundy uppercase tracking-wider">Institucional</span>
<h3 className="text-xl font-bold text-offwhite leading-tight">Avances en la Ciudad Deportiva</h3>
<p className="text-sm text-gray-400 line-clamp-2 font-light">Continúan las obras en el edificio principal y el gimnasio de alto rendimiento.</p>
<a className="mt-4 inline-flex items-center text-gold text-sm font-semibold group-hover:text-offwhite transition-colors" href="#">
                                Leer nota <i className="w-4 h-4 ml-1" data-lucide="chevron-right"></i>
</a>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-24 px-6 overflow-hidden">

<div className="absolute inset-0 bg-gradient-to-b from-navy via-burgundy/20 to-navy"></div>
<div className="relative max-w-7xl mx-auto text-center z-10">
<div className="mb-12">
<h3 className="text-gold text-sm font-bold uppercase tracking-[0.2em] mb-3">Tienda Oficial</h3>
<h2 className="text-4xl md:text-6xl font-black text-offwhite tracking-tight">Llevá el ADN Pionero <br/> a todos lados</h2>
</div>

<div className="relative w-full h-[500px] rounded-3xl overflow-hidden shadow-2xl group border border-white/10">

<img alt="25/26 Kit" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://images.unsplash.com/photo-1611915387288-fd8d2f5f928b?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-transparent to-transparent"></div>

<div className="absolute bottom-0 left-0 w-full p-10 flex flex-col items-center">
<div className="p-[1px] rounded-full bg-gradient-border shadow-[0_0_20px_rgba(112,100,56,0.4)] mb-6">
<a className="block px-10 py-4 bg-navy rounded-full hover:bg-white/10 transition-all duration-300" href="#">
<span className="text-offwhite font-bold tracking-widest uppercase text-sm">Visitar Store</span>
</a>
</div>
<p className="text-gray-400 text-sm tracking-wide font-light">Nueva Colección 2025/26 Disponible</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-navy px-6">
<div className="max-w-7xl mx-auto">
<h2 className="text-4xl md:text-5xl font-black text-offwhite tracking-tight mb-12 border-b border-white/10 pb-6">Historias Pioneras</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group cursor-pointer">
<div className="relative h-80 rounded-xl overflow-hidden mb-4">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="absolute inset-0 bg-navy/40 group-hover:bg-transparent transition-colors"></div>
</div>
<h3 className="text-lg font-bold text-offwhite mb-2 group-hover:text-gold transition-colors">Orígenes 1891</h3>
<p className="text-sm font-light text-gray-400">El comienzo de una pasión que transformó un país.</p>
</div>

<div className="group cursor-pointer">
<div className="relative h-80 rounded-xl overflow-hidden mb-4">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
<div className="absolute inset-0 bg-navy/40 group-hover:bg-transparent transition-colors"></div>
</div>
<h3 className="text-lg font-bold text-offwhite mb-2 group-hover:text-gold transition-colors">Leyendas del Club</h3>
<p className="text-sm font-light text-gray-400">Jugadores que dejaron su huella en nuestra historia.</p>
</div>

<div className="group cursor-pointer">
<div className="relative h-80 rounded-xl overflow-hidden mb-4">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-navy/40 group-hover:bg-transparent transition-colors"></div>
</div>
<h3 className="text-lg font-bold text-offwhite mb-2 group-hover:text-gold transition-colors">El Primer Partido</h3>
<p className="text-sm font-light text-gray-400">Crónicas del primer encuentro oficial en Uruguay.</p>
</div>

<div className="group cursor-pointer">
<div className="relative h-80 rounded-xl overflow-hidden mb-4">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-navy/40 group-hover:bg-transparent transition-colors"></div>
</div>
<h3 className="text-lg font-bold text-offwhite mb-2 group-hover:text-gold transition-colors">Futuro Pionero</h3>
<p className="text-sm font-light text-gray-400">La visión hacia el próximo centenario.</p>
</div>
</div>
</div>
</section>

<footer className="bg-[#001533] pt-20 pb-10 px-6 border-t border-white/5 relative">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
<div>
<h2 className="text-4xl md:text-5xl font-black text-offwhite tracking-tighter mb-6">Sumate a hacer historia</h2>
<p className="text-lg font-light text-gray-400">Recibí las últimas novedades, fichajes y eventos exclusivos.</p>
</div>
<div className="bg-surface p-8 rounded-2xl border border-white/5">
<form className="flex flex-col md:flex-row gap-4">
<input className="flex-1 bg-navy border border-white/10 rounded-lg px-6 py-4 text-offwhite focus:outline-none focus:border-gold/50 transition-colors placeholder-gray-600" placeholder="Tu email" type="email"/>
<button className="bg-burgundy hover:bg-burgundy/80 text-offwhite font-bold px-8 py-4 rounded-lg transition-colors" type="button">Suscribirse</button>
</form>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-6">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-navy via-burgundy to-gold flex items-center justify-center border border-white/10">
<span className="font-bold text-xs text-offwhite">A</span>
</div>
<span className="text-gray-500 text-sm">© 1891 Albion Football Club.</span>
</div>
<div className="flex gap-6">
<a className="text-gray-500 hover:text-gold transition-colors" href="#"><i className="w-5 h-5" data-lucide="instagram"></i></a>
<a className="text-gray-500 hover:text-gold transition-colors" href="#"><i className="w-5 h-5" data-lucide="twitter"></i></a>
<a className="text-gray-500 hover:text-gold transition-colors" href="#"><i className="w-5 h-5" data-lucide="facebook"></i></a>
<a className="text-gray-500 hover:text-gold transition-colors" href="#"><i className="w-5 h-5" data-lucide="youtube"></i></a>
</div>
</div>
</div>
</footer>



    </>
  );
}
