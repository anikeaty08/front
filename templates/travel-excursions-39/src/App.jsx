import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Iconify Initialization
        lucide.createIcons();

        // View Toggle Logic
        let isAdmin = false;
        function toggleView() {
            isAdmin = !isAdmin;
            const clientView = document.getElementById('client-view');
            const adminView = document.getElementById('admin-view');
            const nav = document.getElementById('navbar');
            const btnText = document.getElementById('view-text');

            if (isAdmin) {
                clientView.style.display = 'none';
                nav.style.display = 'none';
                adminView.classList.remove('hidden');
                btnText.textContent = "Volver al Sitio";
            } else {
                clientView.style.display = 'block';
                nav.style.display = 'block';
                adminView.classList.add('hidden');
                btnText.textContent = "Ver Dashboard Admin";
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed w-full z-50 transition-all duration-300 border-b border-transparent" id="navbar">
<div className="glass border-b border-neutral-200/50">
<div className="flex h-16 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">

<a className="flex items-center gap-2 group cursor-pointer" href="#inicio">
<div className="w-8 h-8 bg-gradient-to-tr from-indigo-500 via-blue-500 to-blue-500 rounded-lg flex items-center justify-center shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform text-white">
<svg className="lucide lucide-compass w-5 h-5" data-lucide="compass" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
<span className="text-lg font-semibold tracking-tight text-neutral-900">AURA</span>
</a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-500">
<a className="transition-colors hover:text-neutral-900" href="#calendario">Calendario</a>
<a className="transition-colors hover:text-neutral-900" href="#inicio">Experiencias</a>
<a className="transition-colors hover:text-neutral-900" href="#membresia">Membresía</a>
<a className="transition-colors hover:text-neutral-900" href="#nosotros">Nosotros</a>
</div>

<div className="flex items-center gap-4">
<a className="transition-all hover:bg-neutral-800 shadow-neutral-900/10 text-xs font-medium text-white bg-neutral-900 rounded-full pt-2 pr-4 pb-2 pl-4 shadow-md" href="#calendario">
                        Ver Disponibilidad
                    </a>
</div>
</div>
</div>
</nav>

<div className="fixed bottom-6 right-6 z-[60]">
<button className="group flex items-center gap-3 border shadow-xl rounded-full pl-4 pr-2 py-2 transition-all bg-white border-neutral-200 hover:border-neutral-300" onclick="toggleView()">
<span className="text-xs font-medium text-neutral-600" id="view-text">Ver Dashboard Admin</span>
<div className="w-8 h-8 rounded-full flex items-center justify-center group-hover:bg-neutral-200 transition-colors bg-neutral-100">
<svg className="lucide lucide-refresh-cw w-4 h-4 text-emerald-600" data-lucide="refresh-cw" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path><path d="M21 3v5h-5"></path><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path><path d="M8 16H3v5"></path></svg>
</div>
</button>
</div>

<div className="transition-opacity duration-500" id="client-view">

<header className="lg:pt-48 lg:pb-32 overflow-hidden scroll-mt-20 pt-32 pb-20 relative" id="inicio">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none">
<div className="absolute top-20 left-10 w-96 h-96 rounded-full blur-3xl mix-blend-multiply animate-pulse bg-blue-200/40">
</div>
<div className="absolute top-20 right-10 w-96 h-96 rounded-full blur-3xl mix-blend-multiply animate-pulse bg-indigo-200/40" style={{animationDelay: '1s'}}></div>
<div className="absolute -bottom-32 left-1/2 w-96 h-96 rounded-full blur-3xl mix-blend-multiply animate-pulse bg-blue-200/40" style={{animationDelay: '2s'}}></div>
</div>
<div className="text-center max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border shadow-sm mb-8 bg-white border-neutral-200">
<span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></span>
<span className="text-xs font-medium tracking-wide uppercase text-neutral-600">Salidas Octubre / Noviembre</span>
</div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight mb-6 max-w-4xl mx-auto leading-[1.1] text-neutral-900">
      Únete a lo
      <span className="text-transparent bg-clip-text bg-gradient-to-r to-blue-500 from-indigo-600 via-blue-600">Inexplorado</span>
</h1>
<p className="text-lg md:text-xl text-neutral-500 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
      Excursiones de autor con cupos limitados. Selecciona tu próxima aventura de nuestro calendario exclusivo y vive
      una experiencia curada al detalle.
    </p>

<div className="max-w-4xl mx-auto rounded-2xl p-2 shadow-xl border flex flex-col md:flex-row gap-2 relative z-20 text-left bg-white shadow-indigo-100/50 border-neutral-100">

<div className="flex-1 px-4 py-3 rounded-xl transition-colors cursor-pointer group relative hover:bg-neutral-50">
<label className="block text-xs font-semibold uppercase tracking-wider mb-1 text-neutral-400">Próxima Salida</label>
<div className="flex items-center gap-2 font-medium relative text-neutral-800">
<svg className="lucide lucide-compass w-4 h-4 text-cyan-500 absolute left-0 top-1/2 -translate-y-1/2 pointer-events-none" data-lucide="compass" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"></path><circle cx="12" cy="12" r="10"></circle></svg>
<select className="w-full bg-transparent border-none outline-none pl-6 text-sm cursor-pointer truncate font-medium focus:text-indigo-600 text-neutral-700">
<option disabled="" selected="" value="">Seleccionar aventura...</option>
<option value="tulum">Cenotes Sagrados (24 Oct)</option>
<option value="amalfi">Costa Amalfitana (02 Nov)</option>
<option value="kyoto">Templos de Kyoto (15 Nov)</option>
<option value="patagonia">Patagonia Wild (10 Dic)</option>
</select>
<svg className="lucide lucide-chevron-down w-3 h-3 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-emerald-400" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>
<div className="w-px hidden md:block bg-neutral-100"></div>

<div className="flex-1 px-4 py-3 rounded-xl transition-colors cursor-pointer group relative hover:bg-neutral-50">
<label className="block text-xs font-semibold uppercase tracking-wider mb-1 text-neutral-400">Mes Programado</label>
<div className="flex items-center gap-2 font-medium relative text-neutral-800">
<svg className="lucide lucide-calendar w-4 h-4 text-cyan-500 absolute left-0 top-1/2 -translate-y-1/2 pointer-events-none" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
<select className="w-full bg-transparent border-none outline-none pl-6 text-sm cursor-pointer font-medium focus:text-indigo-600 text-neutral-700">
<option>Octubre 2024</option>
<option>Noviembre 2024</option>
<option>Diciembre 2024</option>
</select>
<svg className="lucide lucide-chevron-down w-3 h-3 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-emerald-400" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>
<div className="w-px hidden md:block bg-neutral-100"></div>

<div className="w-full md:w-48 px-4 py-3 rounded-xl transition-colors cursor-pointer group relative hover:bg-neutral-50">
<label className="block text-xs font-semibold uppercase tracking-wider mb-1 text-neutral-400">Cupos</label>
<div className="flex items-center gap-2 font-medium relative text-neutral-800">
<svg className="lucide lucide-users w-4 h-4 text-cyan-500 absolute left-0 top-1/2 -translate-y-1/2 pointer-events-none" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<select className="w-full bg-transparent border-none outline-none pl-6 text-sm cursor-pointer font-medium focus:text-indigo-600 text-neutral-700">
<option>1 Persona</option>
<option selected="">2 Personas</option>
<option>3 Personas</option>
<option>4+ Grupo</option>
</select>
</div>
</div>
<button className="rounded-xl px-8 py-3 font-medium transition-colors flex items-center justify-center gap-2 shadow-lg whitespace-nowrap bg-neutral-900 text-white hover:bg-neutral-800 shadow-neutral-900/20">
<span>Reservar Plaza</span>
</button>
</div>
</div>
</header>

<section className="py-20 scroll-mt-16 bg-white" id="calendario">
<div className="max-w-7xl mx-auto px-6">
<div className="flex justify-between items-end mb-12">
<div>
<h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-2 text-neutral-900">Calendario de Salidas</h2>
<p className="text-neutral-500 text-sm">Reserva tu lugar en nuestras próximas expediciones confirmadas.</p>
</div>
<a className="hidden md:flex items-center gap-1 text-sm font-medium text-indigo-600 hover:text-indigo-700" href="#">
                        Ver calendario completo <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group cursor-pointer">
<div className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-4">
<img alt="Tulum" className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800&amp;q=80" style={{}}/>

<div className="absolute top-4 left-4 backdrop-blur text-xs font-semibold px-3 py-1.5 rounded-md border shadow-sm flex flex-col items-center leading-none bg-white/95 text-neutral-800 border-neutral-100">
<span className="text-[10px] uppercase tracking-wider mb-0.5 text-neutral-400">OCT</span>
<span className="text-lg font-bold">24</span>
</div>

<div className="absolute bottom-4 right-4 backdrop-blur text-xs font-medium px-3 py-1.5 rounded-lg flex items-center gap-1 bg-neutral-900/80 text-white">
<span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span> 4 Cupos
                            </div>
</div>
<h3 className="text-lg font-semibold mb-1 group-hover:text-indigo-600 transition-colors text-neutral-900">Cenotes Sagrados de Tulum</h3>
<div className="flex items-center text-sm text-neutral-500 mb-3 gap-4">
<span className="flex items-center gap-1"><svg className="lucide lucide-calendar-days w-3 h-3" data-lucide="calendar-days" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path><path d="M8 14h.01"></path><path d="M12 14h.01"></path><path d="M16 14h.01"></path><path d="M8 18h.01"></path><path d="M12 18h.01"></path><path d="M16 18h.01"></path></svg> Jueves, 24 Oct</span>
<span className="flex items-center gap-1"><svg className="lucide lucide-clock w-3 h-3" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg> 08:00 AM</span>
</div>
<div className="flex items-center justify-between pt-2 border-t border-neutral-50">
<span className="text-sm text-neutral-500">Precio final <span className="font-semibold text-lg ml-1 text-neutral-900">$120</span></span>
<button className="px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors bg-indigo-50 text-indigo-600 hover:bg-indigo-100">
                                Reservar
                            </button>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-4">
<img alt="Amalfi" className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1530841377377-3ff06c0ca713?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>

<div className="absolute top-4 left-4 backdrop-blur text-xs font-semibold px-3 py-1.5 rounded-md border shadow-sm flex flex-col items-center leading-none bg-white/95 text-neutral-800 border-neutral-100">
<span className="text-[10px] uppercase tracking-wider mb-0.5 text-neutral-400">NOV</span>
<span className="text-lg font-bold">02</span>
</div>

<div className="absolute bottom-4 right-4 backdrop-blur text-xs font-medium px-3 py-1.5 rounded-lg flex items-center gap-1 bg-neutral-900/80 text-white">
<span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span> Últimos 2
                            </div>
</div>
<h3 className="text-lg font-semibold mb-1 group-hover:text-indigo-600 transition-colors text-neutral-900">Atardecer en la Costa Amalfitana</h3>
<div className="flex items-center text-sm text-neutral-500 mb-3 gap-4">
<span className="flex items-center gap-1"><svg className="lucide lucide-calendar-days w-3 h-3" data-lucide="calendar-days" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path><path d="M8 14h.01"></path><path d="M12 14h.01"></path><path d="M16 14h.01"></path><path d="M8 18h.01"></path><path d="M12 18h.01"></path><path d="M16 18h.01"></path></svg> Sábado, 02 Nov</span>
<span className="flex items-center gap-1"><svg className="lucide lucide-clock w-3 h-3" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg> 16:30 PM</span>
</div>
<div className="flex items-center justify-between pt-2 border-t border-neutral-50">
<span className="text-sm text-neutral-500">Precio final <span className="font-semibold text-lg ml-1 text-neutral-900">$250</span></span>
<button className="px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors bg-indigo-50 text-indigo-600 hover:bg-indigo-100">
                                Reservar
                            </button>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-4">
<img alt="Kyoto" className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>

<div className="absolute top-4 left-4 backdrop-blur text-xs font-semibold px-3 py-1.5 rounded-md border shadow-sm flex flex-col items-center leading-none bg-white/95 text-neutral-800 border-neutral-100">
<span className="text-[10px] uppercase tracking-wider mb-0.5 text-neutral-400">NOV</span>
<span className="text-lg font-bold">15</span>
</div>

<div className="absolute bottom-4 right-4 backdrop-blur text-xs font-medium px-3 py-1.5 rounded-lg flex items-center gap-1 bg-neutral-900/80 text-white">
<span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span> 8 Cupos
                            </div>
</div>
<h3 className="text-lg font-semibold mb-1 group-hover:text-indigo-600 transition-colors text-neutral-900">Templos Ocultos de Kyoto</h3>
<div className="flex items-center text-sm text-neutral-500 mb-3 gap-4">
<span className="flex items-center gap-1"><svg className="lucide lucide-calendar-days w-3 h-3" data-lucide="calendar-days" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path><path d="M8 14h.01"></path><path d="M12 14h.01"></path><path d="M16 14h.01"></path><path d="M8 18h.01"></path><path d="M12 18h.01"></path><path d="M16 18h.01"></path></svg> Viernes, 15 Nov</span>
<span className="flex items-center gap-1"><svg className="lucide lucide-clock w-3 h-3" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg> 09:00 AM</span>
</div>
<div className="flex items-center justify-between pt-2 border-t border-neutral-50">
<span className="text-sm text-neutral-500">Precio final <span className="font-semibold text-lg ml-1 text-neutral-900">$180</span></span>
<button className="px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors bg-indigo-50 text-indigo-600 hover:bg-indigo-100">
                                Reservar
                            </button>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 border-t scroll-mt-20 border-neutral-100" id="membresia">
<div className="max-w-4xl mx-auto px-6 text-center">
<div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 bg-indigo-50 text-indigo-600">
<svg className="lucide lucide-bell w-8 h-8" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
</div>
<h2 className="text-3xl font-medium tracking-tight mb-4 text-neutral-900">Membresía &amp; Alertas</h2>
<p className="text-neutral-500 mb-8 max-w-lg mx-auto">Nuestros grupos son reducidos y se llenan rápido. Únete a nuestra lista exclusiva para recibir ofertas y nuevas fechas antes que nadie.</p>
<div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
<input className="flex-1 border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 bg-white border-neutral-200" placeholder="tu@email.com" type="email"/>
<button className="font-medium px-6 py-3 rounded-lg text-sm transition-colors bg-neutral-900 text-white hover:bg-neutral-800">Suscribirse</button>
</div>
</div>
</section>

<footer className="border-t py-12 scroll-mt-20 bg-white border-neutral-100" id="nosotros">
<div className="max-w-7xl mx-auto px-6">

<div className="mb-10 text-center md:text-left">
<h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-neutral-900">Sobre Nosotros</h4>
<p className="text-neutral-500 text-sm max-w-2xl leading-relaxed">
                        Aura nació en 2024 con la misión de reconectar a las personas con la naturaleza y la cultura a través de viajes curados. No somos una agencia tradicional; diseñamos experiencias que transforman.
                    </p>
</div>
<div className="flex flex-col md:flex-row justify-between items-center gap-6 border-t pt-8 border-neutral-50">
<span className="text-sm text-neutral-400">© 2024 Aura Excursiones. Todos los derechos reservados.</span>
<div className="flex gap-6">
<a className="text-neutral-400 hover:text-neutral-600" href="#"><svg className="lucide lucide-instagram w-5 h-5" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg></a>
<a className="text-neutral-400 hover:text-neutral-600" href="#"><svg className="lucide lucide-facebook w-5 h-5" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
<a className="text-neutral-400 hover:text-neutral-600" href="#"><svg className="lucide lucide-mail w-5 h-5" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg></a>
</div>
</div>
</div>
</footer>
</div>

<div className="hidden min-h-screen flex flex-col md:flex-row bg-neutral-50" id="admin-view">

<aside className="w-full md:w-64 border-r flex flex-col h-screen fixed md:relative z-40 bg-white border-neutral-200">
<div className="p-6 border-b flex items-center gap-2 border-neutral-100">
<div className="w-6 h-6 rounded flex items-center justify-center bg-indigo-600 text-white">
<svg className="lucide lucide-shield w-3 h-3" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
</div>
<span className="font-semibold tracking-tight text-neutral-900">AURA <span className="font-normal text-neutral-400">Admin</span></span>
</div>
<div className="p-4 space-y-1 flex-1 overflow-y-auto">
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-indigo-600 bg-indigo-50" href="#">
<svg className="lucide lucide-layout-dashboard w-4 h-4" data-lucide="layout-dashboard" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="9" rx="1" width="7" x="3" y="3"></rect><rect height="5" rx="1" width="7" x="14" y="3"></rect><rect height="9" rx="1" width="7" x="14" y="12"></rect><rect height="5" rx="1" width="7" x="3" y="16"></rect></svg> Dashboard
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-neutral-600 hover:bg-neutral-50" href="#">
<svg className="lucide lucide-calendar-check w-4 h-4" data-lucide="calendar-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path><path d="m9 16 2 2 4-4"></path></svg> Reservas
                    <span className="ml-auto py-0.5 px-2 rounded-full text-[10px] font-bold bg-indigo-100 text-indigo-600">12</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-neutral-600 hover:bg-neutral-50" href="#">
<svg className="lucide lucide-map w-4 h-4" data-lucide="map" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"></path><path d="M15 5.764v15"></path><path d="M9 3.236v15"></path></svg> Programación
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-neutral-600 hover:bg-neutral-50" href="#">
<svg className="lucide lucide-users w-4 h-4" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg> Pasajeros
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-neutral-600 hover:bg-neutral-50" href="#">
<svg className="lucide lucide-bar-chart-2 w-4 h-4" data-lucide="bar-chart-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 21v-6"></path><path d="M12 21V3"></path><path d="M19 21V9"></path></svg> Finanzas
                </a>
</div>
<div className="p-4 border-t border-neutral-100">
<div className="flex items-center gap-3 px-3 py-2">
<img className="w-8 h-8 rounded-full border border-neutral-200" src="https://ui-avatars.com/api/?name=Admin+User&amp;background=random"/>
<div className="flex flex-col">
<span className="text-xs font-semibold text-neutral-900">Admin User</span>
<span className="text-[10px] text-neutral-400">admin@aura.com</span>
</div>
</div>
</div>
</aside>

<main className="flex-1 p-6 md:p-10 overflow-y-auto h-screen">
<header className="flex justify-between items-center mb-8">
<div>
<h1 className="text-2xl font-medium tracking-tight text-neutral-900">Dashboard de Salidas</h1>
<p className="text-sm text-neutral-500">Gestión de cupos y reservas del día.</p>
</div>
<div className="flex gap-3">
<button className="border px-4 py-2 rounded-lg text-xs font-medium flex items-center gap-2 bg-white border-neutral-200 text-neutral-600 hover:bg-neutral-50">
<svg className="lucide lucide-download w-4 h-4" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg> Lista Pasajeros
                    </button>
<button className="px-4 py-2 rounded-lg text-xs font-medium flex items-center gap-2 shadow-lg shadow-indigo-500/20 bg-indigo-600 text-white hover:bg-indigo-700">
<svg className="lucide lucide-plus w-4 h-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg> Programar Salida
                    </button>
</div>
</header>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
<div className="p-6 rounded-xl border shadow-sm bg-white border-neutral-200">
<div className="flex items-center justify-between mb-4">
<span className="text-sm font-medium text-neutral-500">Ventas Octubre</span>
<svg className="lucide lucide-dollar-sign w-4 h-4 text-indigo-500" data-lucide="dollar-sign" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="12" x2="12" y1="2" y2="22"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
</div>
<div className="text-3xl font-semibold tracking-tight text-neutral-900">$24,500</div>
<div className="mt-2 text-xs font-medium flex items-center gap-1 text-cyan-600">
<svg className="lucide lucide-trending-up w-3 h-3" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg> +12% vs Septiembre
                    </div>
</div>
<div className="p-6 rounded-xl border shadow-sm bg-white border-neutral-200">
<div className="flex items-center justify-between mb-4">
<span className="text-sm font-medium text-neutral-500">Plazas Reservadas</span>
<svg className="lucide lucide-calendar w-4 h-4 text-cyan-500" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
</div>
<div className="text-3xl font-semibold tracking-tight text-neutral-900">42</div>
<div className="mt-2 text-xs font-medium flex items-center gap-1 text-indigo-600">
<svg className="lucide lucide-users w-3 h-3" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg> 8 pendientes de pago
                    </div>
</div>
<div className="p-6 rounded-xl border shadow-sm bg-white border-neutral-200">
<div className="flex items-center justify-between mb-4">
<span className="text-sm font-medium text-neutral-500">Ocupación Grupos</span>
<svg className="lucide lucide-pie-chart w-4 h-4 text-sky-500" data-lucide="pie-chart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z"></path><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path></svg>
</div>
<div className="text-3xl font-semibold tracking-tight text-neutral-900">85%</div>
<div className="w-full rounded-full h-1.5 mt-3 bg-neutral-100">
<div className="bg-blue-500 h-1.5 rounded-full" style={{width: '85%'}}></div>
</div>
</div>
</div>

<div className="rounded-xl border shadow-sm overflow-hidden bg-white border-neutral-200">
<div className="px-6 py-4 border-b flex justify-between items-center border-neutral-100 bg-neutral-50/50">
<h3 className="text-sm font-semibold text-neutral-900">Reservas Recientes</h3>
<div className="flex items-center gap-2">
<div className="relative">
<svg className="lucide lucide-search w-3 h-3 absolute left-3 top-1/2 -translate-y-1/2 text-emerald-400" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
<input className="pl-8 pr-4 py-1.5 border rounded-md text-xs focus:outline-none focus:border-indigo-500 bg-white border-neutral-200" placeholder="Buscar pasajero..." type="text"/>
</div>
<button className="p-1.5 rounded hover:bg-neutral-100 text-neutral-400"><svg className="lucide lucide-filter w-4 h-4" data-lucide="filter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"></path></svg></button>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="border-b text-xs text-neutral-500 border-neutral-100 bg-neutral-50/30">
<th className="px-6 py-3 font-medium">Pasajero Principal</th>
<th className="px-6 py-3 font-medium">Salida Programada</th>
<th className="px-6 py-3 font-medium">Fecha Viaje</th>
<th className="px-6 py-3 font-medium">Estado Pago</th>
<th className="px-6 py-3 font-medium text-right">Total</th>
<th className="px-6 py-3 font-medium"></th>
</tr>
</thead>
<tbody className="text-sm">

<tr className="group transition-colors border-b hover:bg-neutral-50 border-neutral-50">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs bg-indigo-100 text-indigo-700">JP</div>
<div className="flex flex-col">
<span className="font-medium text-neutral-900">Juan Pérez</span>
<span className="text-xs text-neutral-500">juan@gmail.com</span>
</div>
</div>
</td>
<td className="px-6 py-4 text-neutral-600">Cenotes Sagrados (Grupo A)</td>
<td className="px-6 py-4 text-neutral-500 text-xs">24 Oct, 2024</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border bg-cyan-50 text-cyan-700 border-cyan-100">
<span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span> Confirmado
                                    </span>
</td>
<td className="px-6 py-4 text-right font-medium text-neutral-900">$240.00</td>
<td className="px-6 py-4 text-right">
<button className="transition-colors text-neutral-400 hover:text-indigo-600"><svg className="lucide lucide-more-horizontal w-4 h-4" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg></button>
</td>
</tr>

<tr className="group transition-colors border-b hover:bg-neutral-50 border-neutral-50">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs bg-blue-100 text-blue-700">ML</div>
<div className="flex flex-col">
<span className="font-medium text-neutral-900">Maria Lopez</span>
<span className="text-xs text-neutral-500">maria@outlook.com</span>
</div>
</div>
</td>
<td className="px-6 py-4 text-neutral-600">Costa Amalfitana (Grupo C)</td>
<td className="px-6 py-4 text-neutral-500 text-xs">02 Nov, 2024</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border bg-blue-50 text-blue-700 border-blue-100">
<span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> Seña Paga
                                    </span>
</td>
<td className="px-6 py-4 text-right font-medium text-neutral-900">$500.00</td>
<td className="px-6 py-4 text-right">
<button className="transition-colors text-neutral-400 hover:text-indigo-600"><svg className="lucide lucide-more-horizontal w-4 h-4" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg></button>
</td>
</tr>

<tr className="group transition-colors hover:bg-neutral-50">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs bg-cyan-100 text-cyan-700">AR</div>
<div className="flex flex-col">
<span className="font-medium text-neutral-900">Alex Rodriguez</span>
<span className="text-xs text-neutral-500">alex@tech.co</span>
</div>
</div>
</td>
<td className="px-6 py-4 text-neutral-600">Templos Kyoto (Grupo B)</td>
<td className="px-6 py-4 text-neutral-500 text-xs">15 Nov, 2024</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border bg-cyan-50 text-cyan-700 border-cyan-100">
<span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span> Confirmado
                                    </span>
</td>
<td className="px-6 py-4 text-right font-medium text-neutral-900">$360.00</td>
<td className="px-6 py-4 text-right">
<button className="transition-colors text-neutral-400 hover:text-indigo-600"><svg className="lucide lucide-more-horizontal w-4 h-4" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg></button>
</td>
</tr>
</tbody>
</table>
</div>
<div className="px-6 py-4 border-t flex justify-between items-center text-xs text-neutral-500 border-neutral-100 bg-neutral-50/50">
<span>Mostrando 3 de 128 reservas</span>
<div className="flex gap-2">
<button className="px-3 py-1 border rounded disabled:opacity-50 border-neutral-200 bg-white hover:bg-neutral-50">Anterior</button>
<button className="px-3 py-1 border rounded border-neutral-200 bg-white hover:bg-neutral-50">Siguiente</button>
</div>
</div>
</div>
</main>
</div>


    </>
  );
}
