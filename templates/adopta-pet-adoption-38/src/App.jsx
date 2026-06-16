import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      function navigate(pageId) {
          // Hide all pages and remove animations
          document.querySelectorAll('.page-section').forEach(el => {
              el.classList.add('hidden');
              el.classList.remove('block');
          });

          // Show target page and restart animation for its children
          const target = document.getElementById('page-' + pageId);
          if (target) {
              target.classList.remove('hidden');
              target.classList.add('block');

              // Optional: Re-trigger animation class if needed for child elements
              const animatedEls = target.querySelectorAll('.animate-sequence');
              animatedEls.forEach(el => {
                  el.style.animation = 'none';
                  el.offsetHeight; // trigger reflow
                  el.style.animation = null;
              });
          }

          // Update navigation links active state
          document.querySelectorAll('.nav-link').forEach(link => {
              if (link.dataset.target === pageId) {
                  link.classList.add('text-black');
                  link.classList.remove('text-stone-500');
              } else {
                  link.classList.remove('text-black');
                  link.classList.add('text-stone-500');
              }
          });

          // Scroll to top
          window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="w-full px-6 py-4 flex justify-between items-center z-50 sticky top-0 backdrop-blur-xl border-b animate-sequence bg-neutral-50/80 border-black/5" style={{animationDelay: '0s'}}>
<div className="flex items-center gap-2 cursor-pointer" onclick="navigate('home')">
<iconify-icon className="text-2xl text-black" icon="solar:cat-linear" strokeWidth="1.5"></iconify-icon>
<div className="font-heading font-semibold tracking-tighter text-xl uppercase">
          ADOPTA
        </div>
</div>
<nav className="hidden md:flex items-center gap-8 text-sm font-medium">
<button className="nav-link transition-colors text-black hover:text-black" data-target="home" onclick="navigate('home')">
          Inicio
        </button>
<button className="nav-link text-neutral-500 transition-colors hover:text-black" data-target="pets" onclick="navigate('pets')">
          Mascotas
        </button>
<button className="nav-link text-neutral-500 transition-colors hover:text-black" data-target="shelters" onclick="navigate('shelters')">
          Refugios
        </button>
<button className="nav-link text-neutral-500 transition-colors hover:text-black" data-target="report" onclick="navigate('report')">
          Reportar
        </button>
<a className="text-neutral-500 transition-colors hover:text-black" href="#">
          Nosotros
        </a>
</nav>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium transition-colors text-neutral-600 hover:text-black" href="#">
          Iniciar sesión
        </a>
<button className="px-5 py-2.5 rounded-full text-sm font-medium transition-colors shadow-lg bg-black text-white hover:bg-neutral-800 shadow-black/20">
          Dar en adopción
        </button>
</div>
</header>

<div className="page-section block" id="page-home">

<main className="flex flex-col lg:flex-row items-center justify-center px-6 lg:px-12 py-12 lg:py-16 w-full max-w-7xl mx-auto relative gap-12 lg:gap-8">

<div className="w-full lg:w-1/2 flex flex-col gap-8 z-10 pt-8 lg:pt-0">
<div className="flex flex-col gap-5">
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border shadow-sm w-fit animate-sequence bg-white border-black/5" style={{animationDelay: '0.1s'}}>
<span className="relative flex h-2.5 w-2.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-teal-400"></span>
<span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-teal-500"></span>
</span>
<span className="text-xs font-medium text-neutral-600">
                Más de 50 refugios verificados en El Salvador
              </span>
</div>
<h1 className="font-heading font-semibold text-5xl lg:text-6xl tracking-tight leading-tight text-balance animate-sequence" style={{animationDelay: '0.2s'}}>
              Un nuevo amigo te espera para cambiar tu vida.
            </h1>
<p className="text-lg lg:text-xl text-neutral-500 max-w-md leading-relaxed animate-sequence" style={{animationDelay: '0.3s'}}>
              Conectamos mascotas rescatadas con hogares llenos de amor.
              Encuentra a tu compañero ideal de forma simple, segura y
              transparente.
            </p>
</div>

<div className="backdrop-blur-2xl p-3 rounded-3xl shadow-lg border w-full max-w-lg animate-sequence bg-white/70 border-white/60" style={{animationDelay: '0.4s'}}>
<div className="flex flex-col md:flex-row gap-3">
<div className="flex-1 transition-colors rounded-2xl px-4 py-3 cursor-pointer border flex items-center justify-between group bg-neutral-50 hover:bg-neutral-100 border-black/5">
<div className="flex flex-col gap-0.5">
<span className="text-xs font-medium uppercase tracking-wider text-neutral-400">
                    Especie
                  </span>
<span className="text-sm font-medium text-neutral-800">
                    Perro o Gato
                  </span>
</div>
<iconify-icon className="group-hover:text-black transition-colors text-neutral-400" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="flex-1 transition-colors rounded-2xl px-4 py-3 cursor-pointer border flex items-center justify-between group bg-neutral-50 hover:bg-neutral-100 border-black/5">
<div className="flex flex-col gap-0.5">
<span className="text-xs font-medium uppercase tracking-wider text-neutral-400">
                    Tamaño
                  </span>
<span className="text-sm font-medium text-neutral-800">
                    Cualquiera
                  </span>
</div>
<iconify-icon className="group-hover:text-black transition-colors text-neutral-400" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</div>
<button className="h-full md:h-auto rounded-2xl px-6 py-4 md:py-0 flex items-center justify-center transition-colors shadow-lg group bg-black text-white hover:bg-neutral-800 shadow-black/20" onclick="navigate('pets')">
<iconify-icon className="text-xl group-hover:scale-110 transition-transform" icon="solar:magnifer-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
<div className="flex items-center gap-6 animate-sequence" style={{animationDelay: '0.5s'}}>
<div className="flex -space-x-3">
<img alt="User" className="w-10 h-10 rounded-full border-2 object-cover border-neutral-50" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
<img alt="User" className="w-10 h-10 rounded-full border-2 object-cover border-neutral-50" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
<img alt="User" className="w-10 h-10 rounded-full border-2 object-cover border-neutral-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
<div className="w-10 h-10 rounded-full border-2 flex items-center justify-center text-xs font-medium border-neutral-50 bg-neutral-200 text-neutral-600">
                +2k
              </div>
</div>
<div className="text-sm text-neutral-500">
              Familias felices creadas
              <br/>
              este año.
            </div>
</div>
</div>

<div className="w-full lg:w-1/2 relative min-h-[500px] flex items-center justify-center animate-sequence" style={{animationDelay: '0.3s'}}>
<div className="relative w-full max-w-md aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-lg border z-10 group border-black/5 bg-neutral-200">
<img alt="Perrito rescatado sonriendo" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t via-transparent to-transparent from-black/60"></div>
<div className="absolute bottom-0 left-0 w-full p-8 flex flex-col gap-2 text-white">
<div className="flex justify-between items-end">
<div>
<h2 className="font-heading font-semibold text-3xl tracking-tight">
                    Canelo
                  </h2>
<p className="text-base flex items-center gap-1 mt-1 text-white/80">
<iconify-icon icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon>
                    San Salvador, Refugio Esperanza
                  </p>
</div>
<div className="backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-medium border bg-white/20 border-white/30">
                  2 años
                </div>
</div>
</div>
</div>
<div className="absolute top-10 -right-4 lg:-right-12 backdrop-blur-xl p-3 rounded-3xl shadow-lg border w-56 flex flex-col gap-3 z-20 animate-sequence rotate-3 hover:rotate-0 transition-transform duration-300 bg-white/80 border-white/60" style={{animationDelay: '0.6s'}}>
<img alt="Gatito" className="w-full h-32 object-cover rounded-2xl" src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
<div className="px-2 pb-1">
<h3 className="font-heading font-semibold text-base tracking-tight text-neutral-900">
                Luna
              </h3>
<p className="text-xs text-neutral-500 mt-0.5">
                Gata • Cachorra • Hembra
              </p>
<button className="w-full mt-3 text-xs font-medium py-2 rounded-xl transition-colors bg-neutral-100 hover:bg-neutral-200 text-neutral-800">
                Ver perfil
              </button>
</div>
</div>
<div className="absolute bottom-20 -left-6 lg:-left-16 backdrop-blur-2xl p-4 rounded-2xl shadow-lg border flex items-center gap-4 z-20 animate-sequence -rotate-2 hover:rotate-0 transition-transform duration-300 bg-white/90 border-black/5" style={{animationDelay: '0.7s'}}>
<div className="w-12 h-12 rounded-full flex items-center justify-center bg-neutral-100 text-black">
<iconify-icon className="text-2xl" icon="solar:heart-angle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<p className="text-xs text-neutral-500 font-medium">Estado</p>
<p className="text-sm font-semibold font-heading tracking-tight text-neutral-900">
                ¡Listo para adoptar!
              </p>
</div>
</div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr to-transparent rounded-full blur-3xl -z-10 from-neutral-200/40"></div>
</div>
</main>

<section className="w-full max-w-7xl mx-auto px-6 py-24 animate-sequence" style={{animationDelay: '0.8s'}}>
<div className="flex justify-between items-end mb-10">
<h2 className="font-heading font-semibold text-3xl md:text-4xl tracking-tight text-neutral-900">
            Nuevos en
            <br/>
            búsqueda de hogar
          </h2>
<button className="text-sm font-medium text-neutral-500 flex items-center gap-1 transition-colors hover:text-black" onclick="navigate('pets')">
            Ver todos
            <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group rounded-3xl p-3 border shadow-sm hover:shadow-lg transition-all bg-white border-black/5 hover:shadow-black/5">
<div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-4 bg-neutral-100">
<img alt="Beagle" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute top-3 right-3 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-medium bg-white/90 text-neutral-700">
                Macho
              </div>
</div>
<div className="px-2 pb-2">
<div className="flex justify-between items-start mb-1">
<h3 className="font-heading font-semibold text-xl tracking-tight text-neutral-900">
                  Toby
                </h3>
<span className="text-xs font-medium text-neutral-500 px-2 py-1 rounded-full border bg-neutral-50 border-black/5">
                  1 año
                </span>
</div>
<p className="text-xs text-neutral-500 mb-4 flex items-center gap-1">
<iconify-icon icon="solar:map-point-linear"></iconify-icon>
                Santa Tecla
              </p>
<button className="w-full py-2.5 text-sm font-medium rounded-xl transition-colors border bg-neutral-50 hover:bg-black hover:text-white text-neutral-800 border-black/5">
                Conocer a Toby
              </button>
</div>
</div>

<div className="group rounded-3xl p-3 border shadow-sm hover:shadow-lg transition-all bg-white border-black/5 hover:shadow-black/5">
<div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-4 bg-neutral-100">
<img alt="Gato naranja" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute top-3 right-3 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-medium bg-white/90 text-neutral-700">
                Macho
              </div>
</div>
<div className="px-2 pb-2">
<div className="flex justify-between items-start mb-1">
<h3 className="font-heading font-semibold text-xl tracking-tight text-neutral-900">
                  Milo
                </h3>
<span className="text-xs font-medium text-neutral-500 px-2 py-1 rounded-full border bg-neutral-50 border-black/5">
                  3 meses
                </span>
</div>
<p className="text-xs text-neutral-500 mb-4 flex items-center gap-1">
<iconify-icon icon="solar:map-point-linear"></iconify-icon>
                San Salvador
              </p>
<button className="w-full py-2.5 text-sm font-medium rounded-xl transition-colors border bg-neutral-50 hover:bg-black hover:text-white text-neutral-800 border-black/5">
                Conocer a Milo
              </button>
</div>
</div>

<div className="group rounded-3xl p-3 border shadow-sm hover:shadow-lg transition-all hidden md:block bg-white border-black/5 hover:shadow-black/5">
<div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-4 bg-neutral-100">
<img alt="Perro mestizo" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute top-3 right-3 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-medium bg-white/90 text-neutral-700">
                Hembra
              </div>
</div>
<div className="px-2 pb-2">
<div className="flex justify-between items-start mb-1">
<h3 className="font-heading font-semibold text-xl tracking-tight text-neutral-900">
                  Kira
                </h3>
<span className="text-xs font-medium text-neutral-500 px-2 py-1 rounded-full border bg-neutral-50 border-black/5">
                  4 años
                </span>
</div>
<p className="text-xs text-neutral-500 mb-4 flex items-center gap-1">
<iconify-icon icon="solar:map-point-linear"></iconify-icon>
                Antiguo Cuscatlán
              </p>
<button className="w-full py-2.5 text-sm font-medium rounded-xl transition-colors border bg-neutral-50 hover:bg-black hover:text-white text-neutral-800 border-black/5">
                Conocer a Kira
              </button>
</div>
</div>

<div className="group rounded-3xl p-3 border shadow-sm hover:shadow-lg transition-all hidden lg:block bg-white border-black/5 hover:shadow-black/5">
<div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-4 bg-neutral-100">
<img alt="Gata siamés" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1529778459854-e852929e000c?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute top-3 right-3 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-medium bg-white/90 text-neutral-700">
                Hembra
              </div>
</div>
<div className="px-2 pb-2">
<div className="flex justify-between items-start mb-1">
<h3 className="font-heading font-semibold text-xl tracking-tight text-neutral-900">
                  Cleo
                </h3>
<span className="text-xs font-medium text-neutral-500 px-2 py-1 rounded-full border bg-neutral-50 border-black/5">
                  1.5 años
                </span>
</div>
<p className="text-xs text-neutral-500 mb-4 flex items-center gap-1">
<iconify-icon icon="solar:map-point-linear"></iconify-icon>
                Soyapango
              </p>
<button className="w-full py-2.5 text-sm font-medium rounded-xl transition-colors border bg-neutral-50 hover:bg-black hover:text-white text-neutral-800 border-black/5">
                Conocer a Cleo
              </button>
</div>
</div>
</div>
</section>

<section className="w-full border-t border-black/5 bg-white">
<div className="max-w-7xl mx-auto px-6 py-24">
<div className="text-center mb-16">
<h2 className="font-heading font-semibold text-3xl md:text-4xl tracking-tight text-neutral-900">
              Adoptar es simple
            </h2>
<p className="text-base text-neutral-500 mt-4 max-w-lg mx-auto leading-relaxed">
              Nuestro proceso está diseñado para ser seguro, transparente y
              pensando siempre en el bienestar de las mascotas.
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">

<div className="hidden md:block absolute top-10 left-[16%] right-[16%] h-px -z-10 bg-neutral-200"></div>

<div className="flex flex-col items-center text-center gap-4">
<div className="w-20 h-20 rounded-3xl border flex items-center justify-center shadow-sm relative bg-neutral-50 border-black/5 text-black">
<iconify-icon className="text-3xl" icon="solar:magnifer-linear" strokeWidth="1.5"></iconify-icon>
<div className="absolute -top-2 -right-2 w-6 h-6 rounded-full text-xs font-medium flex items-center justify-center bg-black text-white">
                  1
                </div>
</div>
<div>
<h3 className="font-heading font-semibold text-xl tracking-tight text-neutral-900">
                  Busca
                </h3>
<p className="text-sm text-neutral-500 mt-2 max-w-xs">
                  Encuentra a tu compañero ideal utilizando nuestros filtros de
                  especie, tamaño o ubicación.
                </p>
</div>
</div>

<div className="flex flex-col items-center text-center gap-4">
<div className="w-20 h-20 rounded-3xl border flex items-center justify-center shadow-sm relative bg-neutral-50 border-black/5 text-black">
<iconify-icon className="text-3xl" icon="solar:chat-round-line-linear" strokeWidth="1.5"></iconify-icon>
<div className="absolute -top-2 -right-2 w-6 h-6 rounded-full text-xs font-medium flex items-center justify-center bg-black text-white">
                  2
                </div>
</div>
<div>
<h3 className="font-heading font-semibold text-xl tracking-tight text-neutral-900">
                  Conecta
                </h3>
<p className="text-sm text-neutral-500 mt-2 max-w-xs">
                  Habla directamente con el refugio verificado para conocer más
                  sobre la mascota y agendar una visita.
                </p>
</div>
</div>

<div className="flex flex-col items-center text-center gap-4">
<div className="w-20 h-20 rounded-3xl border flex items-center justify-center shadow-sm relative bg-neutral-50 border-black/5 text-black">
<iconify-icon className="text-3xl" icon="solar:home-smile-linear" strokeWidth="1.5"></iconify-icon>
<div className="absolute -top-2 -right-2 w-6 h-6 rounded-full text-xs font-medium flex items-center justify-center bg-black text-white">
                  3
                </div>
</div>
<div>
<h3 className="font-heading font-semibold text-xl tracking-tight text-neutral-900">
                  Adopta
                </h3>
<p className="text-sm text-neutral-500 mt-2 max-w-xs">
                  Completa el proceso de adopción, firma el compromiso y dale la
                  bienvenida a tu nuevo mejor amigo.
                </p>
</div>
</div>
</div>
</div>
</section>
</div>

<div className="page-section hidden w-full max-w-7xl mx-auto px-6 py-12" id="page-pets">
<h1 className="font-heading font-semibold text-4xl tracking-tight mb-8 text-neutral-900">
        Encuentra a tu compañero
      </h1>
<div className="flex flex-col lg:flex-row gap-8">

<aside className="w-full lg:w-64 flex flex-col gap-8 shrink-0">

<div>
<h4 className="text-xs font-semibold uppercase tracking-wider mb-4 text-neutral-900">
              Especie
            </h4>
<div className="flex flex-col gap-3">
<label className="flex items-center gap-3 cursor-pointer group relative">
<input checked="" className="peer sr-only" type="checkbox"/>
<div className="w-5 h-5 rounded border flex items-center justify-center peer-checked:bg-black peer-checked:border-black transition-colors shadow-sm border-black/20 bg-white">
<iconify-icon className="opacity-0 peer-checked:opacity-100 text-xs text-white" icon="solar:check-linear" strokeWidth="2"></iconify-icon>
</div>
<span className="text-sm peer-checked:text-neutral-900 peer-checked:font-medium transition-colors text-neutral-600">
                  Perros
                </span>
</label>
<label className="flex items-center gap-3 cursor-pointer group relative">
<input checked="" className="peer sr-only" type="checkbox"/>
<div className="w-5 h-5 rounded border flex items-center justify-center peer-checked:bg-black peer-checked:border-black transition-colors shadow-sm border-black/20 bg-white">
<iconify-icon className="opacity-0 peer-checked:opacity-100 text-xs text-white" icon="solar:check-linear" strokeWidth="2"></iconify-icon>
</div>
<span className="text-sm peer-checked:text-neutral-900 peer-checked:font-medium transition-colors text-neutral-600">
                  Gatos
                </span>
</label>
</div>
</div>

<div>
<h4 className="text-xs font-semibold uppercase tracking-wider mb-4 text-neutral-900">
              Tamaño
            </h4>
<div className="flex flex-col gap-3">
<label className="flex items-center gap-3 cursor-pointer group relative">
<input className="peer sr-only" type="checkbox"/>
<div className="w-5 h-5 rounded border flex items-center justify-center peer-checked:bg-black peer-checked:border-black transition-colors shadow-sm border-black/20 bg-white">
<iconify-icon className="opacity-0 peer-checked:opacity-100 text-xs text-white" icon="solar:check-linear" strokeWidth="2"></iconify-icon>
</div>
<span className="text-sm peer-checked:text-neutral-900 peer-checked:font-medium transition-colors text-neutral-600">
                  Pequeño
                </span>
</label>
<label className="flex items-center gap-3 cursor-pointer group relative">
<input className="peer sr-only" type="checkbox"/>
<div className="w-5 h-5 rounded border flex items-center justify-center peer-checked:bg-black peer-checked:border-black transition-colors shadow-sm border-black/20 bg-white">
<iconify-icon className="opacity-0 peer-checked:opacity-100 text-xs text-white" icon="solar:check-linear" strokeWidth="2"></iconify-icon>
</div>
<span className="text-sm peer-checked:text-neutral-900 peer-checked:font-medium transition-colors text-neutral-600">
                  Mediano
                </span>
</label>
<label className="flex items-center gap-3 cursor-pointer group relative">
<input className="peer sr-only" type="checkbox"/>
<div className="w-5 h-5 rounded border flex items-center justify-center peer-checked:bg-black peer-checked:border-black transition-colors shadow-sm border-black/20 bg-white">
<iconify-icon className="opacity-0 peer-checked:opacity-100 text-xs text-white" icon="solar:check-linear" strokeWidth="2"></iconify-icon>
</div>
<span className="text-sm peer-checked:text-neutral-900 peer-checked:font-medium transition-colors text-neutral-600">
                  Grande
                </span>
</label>
</div>
</div>
</aside>

<div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group rounded-3xl p-3 border shadow-sm hover:shadow-lg transition-all bg-white border-black/5 hover:shadow-black/5">
<div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-4 bg-neutral-100">
<img alt="Beagle" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute top-3 right-3 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-medium bg-white/90 text-neutral-700">
                Macho
              </div>
</div>
<div className="px-2 pb-2">
<div className="flex justify-between items-start mb-1">
<h3 className="font-heading font-semibold text-xl tracking-tight text-neutral-900">
                  Toby
                </h3>
<span className="text-xs font-medium text-neutral-500 px-2 py-1 rounded-full border bg-neutral-50 border-black/5">
                  1 año
                </span>
</div>
<p className="text-xs text-neutral-500 mb-4 flex items-center gap-1">
<iconify-icon icon="solar:map-point-linear"></iconify-icon>
                Santa Tecla
              </p>
<button className="w-full py-2.5 text-sm font-medium rounded-xl transition-colors border bg-neutral-50 hover:bg-black hover:text-white text-neutral-800 border-black/5">
                Conocer a Toby
              </button>
</div>
</div>
<div className="group rounded-3xl p-3 border shadow-sm hover:shadow-lg transition-all bg-white border-black/5 hover:shadow-black/5">
<div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-4 bg-neutral-100">
<img alt="Gato naranja" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute top-3 right-3 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-medium bg-white/90 text-neutral-700">
                Macho
              </div>
</div>
<div className="px-2 pb-2">
<div className="flex justify-between items-start mb-1">
<h3 className="font-heading font-semibold text-xl tracking-tight text-neutral-900">
                  Milo
                </h3>
<span className="text-xs font-medium text-neutral-500 px-2 py-1 rounded-full border bg-neutral-50 border-black/5">
                  3 meses
                </span>
</div>
<p className="text-xs text-neutral-500 mb-4 flex items-center gap-1">
<iconify-icon icon="solar:map-point-linear"></iconify-icon>
                San Salvador
              </p>
<button className="w-full py-2.5 text-sm font-medium rounded-xl transition-colors border bg-neutral-50 hover:bg-black hover:text-white text-neutral-800 border-black/5">
                Conocer a Milo
              </button>
</div>
</div>
<div className="group rounded-3xl p-3 border shadow-sm hover:shadow-lg transition-all bg-white border-black/5 hover:shadow-black/5">
<div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-4 bg-neutral-100">
<img alt="Perro" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute top-3 right-3 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-medium bg-white/90 text-neutral-700">
                Hembra
              </div>
</div>
<div className="px-2 pb-2">
<div className="flex justify-between items-start mb-1">
<h3 className="font-heading font-semibold text-xl tracking-tight text-neutral-900">
                  Kira
                </h3>
<span className="text-xs font-medium text-neutral-500 px-2 py-1 rounded-full border bg-neutral-50 border-black/5">
                  4 años
                </span>
</div>
<p className="text-xs text-neutral-500 mb-4 flex items-center gap-1">
<iconify-icon icon="solar:map-point-linear"></iconify-icon>
                Antiguo Cuscatlán
              </p>
<button className="w-full py-2.5 text-sm font-medium rounded-xl transition-colors border bg-neutral-50 hover:bg-black hover:text-white text-neutral-800 border-black/5">
                Conocer a Kira
              </button>
</div>
</div>
</div>
</div>
</div>

<div className="page-section hidden w-full max-w-7xl mx-auto px-6 py-12" id="page-shelters">
<div className="mb-10">
<h1 className="font-heading font-semibold text-4xl tracking-tight mb-3 text-neutral-900">
          Refugios Aliados
        </h1>
<p className="text-base text-neutral-500 max-w-xl">
          Conoce a las organizaciones verificadas que trabajan todos los días
          para darles una segunda oportunidad a las mascotas en El Salvador.
        </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="p-6 rounded-3xl border shadow-sm hover:shadow-md transition-shadow flex flex-col gap-5 bg-white border-black/5">
<div className="w-14 h-14 rounded-2xl border flex items-center justify-center shadow-sm bg-neutral-50 border-black/5 text-neutral-800">
<iconify-icon className="text-2xl" icon="solar:home-smile-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h3 className="font-heading font-semibold text-xl tracking-tight mb-1 text-neutral-900">
              Refugio Esperanza
            </h3>
<p className="text-sm text-neutral-500 flex items-center gap-1">
<iconify-icon icon="solar:map-point-linear"></iconify-icon>
              San Salvador
            </p>
</div>
<div className="flex gap-2">
<span className="text-xs font-medium px-3 py-1.5 rounded-full border flex items-center gap-1 text-neutral-600 bg-neutral-50 border-black/5">
<iconify-icon icon="solar:cat-linear"></iconify-icon>
              45 Mascotas
            </span>
<span className="text-xs font-medium px-3 py-1.5 rounded-full border flex items-center gap-1 text-teal-600 bg-teal-50 border-teal-100">
<iconify-icon icon="solar:check-circle-linear"></iconify-icon>
              Verificado
            </span>
</div>
<button className="mt-2 w-full py-2.5 text-sm font-medium rounded-xl transition-colors border bg-neutral-50 hover:bg-neutral-100 text-neutral-800 border-black/5">
            Ver perfil del refugio
          </button>
</div>

<div className="p-6 rounded-3xl border shadow-sm hover:shadow-md transition-shadow flex flex-col gap-5 bg-white border-black/5">
<div className="w-14 h-14 rounded-2xl border flex items-center justify-center shadow-sm bg-neutral-50 border-black/5 text-neutral-800">
<iconify-icon className="text-2xl" icon="solar:home-smile-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h3 className="font-heading font-semibold text-xl tracking-tight mb-1 text-neutral-900">
              Huellas Felices
            </h3>
<p className="text-sm text-neutral-500 flex items-center gap-1">
<iconify-icon icon="solar:map-point-linear"></iconify-icon>
              Santa Tecla
            </p>
</div>
<div className="flex gap-2">
<span className="text-xs font-medium px-3 py-1.5 rounded-full border flex items-center gap-1 text-neutral-600 bg-neutral-50 border-black/5">
<iconify-icon icon="solar:cat-linear"></iconify-icon>
              28 Mascotas
            </span>
<span className="text-xs font-medium px-3 py-1.5 rounded-full border flex items-center gap-1 text-teal-600 bg-teal-50 border-teal-100">
<iconify-icon icon="solar:check-circle-linear"></iconify-icon>
              Verificado
            </span>
</div>
<button className="mt-2 w-full py-2.5 text-sm font-medium rounded-xl transition-colors border bg-neutral-50 hover:bg-neutral-100 text-neutral-800 border-black/5">
            Ver perfil del refugio
          </button>
</div>

<div className="p-6 rounded-3xl border shadow-sm hover:shadow-md transition-shadow flex flex-col gap-5 bg-white border-black/5">
<div className="w-14 h-14 rounded-2xl border flex items-center justify-center shadow-sm bg-neutral-50 border-black/5 text-neutral-800">
<iconify-icon className="text-2xl" icon="solar:home-smile-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h3 className="font-heading font-semibold text-xl tracking-tight mb-1 text-neutral-900">
              Amigos de 4 Patas
            </h3>
<p className="text-sm text-neutral-500 flex items-center gap-1">
<iconify-icon icon="solar:map-point-linear"></iconify-icon>
              Antiguo Cuscatlán
            </p>
</div>
<div className="flex gap-2">
<span className="text-xs font-medium px-3 py-1.5 rounded-full border flex items-center gap-1 text-neutral-600 bg-neutral-50 border-black/5">
<iconify-icon icon="solar:cat-linear"></iconify-icon>
              12 Mascotas
            </span>
<span className="text-xs font-medium px-3 py-1.5 rounded-full border flex items-center gap-1 text-teal-600 bg-teal-50 border-teal-100">
<iconify-icon icon="solar:check-circle-linear"></iconify-icon>
              Verificado
            </span>
</div>
<button className="mt-2 w-full py-2.5 text-sm font-medium rounded-xl transition-colors border bg-neutral-50 hover:bg-neutral-100 text-neutral-800 border-black/5">
            Ver perfil del refugio
          </button>
</div>
</div>
</div>

<div className="page-section hidden w-full max-w-7xl mx-auto px-6 py-12" id="page-report">
<div className="mb-10 text-center">
<h1 className="font-heading font-semibold text-4xl tracking-tight mb-3 text-neutral-900">
          Ayuda a un Animal
        </h1>
<p className="text-base text-neutral-500 max-w-2xl mx-auto">
          Selecciona el tipo de reporte que deseas realizar. Juntos podemos
          hacer la diferencia en la vida de los animalitos que más lo necesitan.
        </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

<div className="p-8 rounded-[2.5rem] border shadow-sm bg-white border-black/5 flex flex-col gap-6">
<div className="flex items-center gap-4 border-b border-black/5 pb-6">
<div className="w-14 h-14 rounded-2xl border flex items-center justify-center shadow-sm bg-neutral-50 border-black/5 text-neutral-800">
<iconify-icon className="text-2xl" icon="solar:camera-add-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h2 className="font-heading font-semibold text-2xl tracking-tight text-neutral-900">
                Mascota Callejera
              </h2>
<p className="text-sm text-neutral-500">
                ¿Encontraste a un peludito en la calle?
              </p>
</div>
</div>
<form className="flex flex-col gap-4">
<div className="flex flex-col gap-1.5">
<label className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                Foto del animalito
              </label>
<div className="border-2 border-dashed border-neutral-200 rounded-2xl p-6 flex flex-col items-center justify-center gap-2 text-neutral-500 hover:bg-neutral-50 hover:border-neutral-300 transition-colors cursor-pointer">
<iconify-icon className="text-3xl" icon="solar:gallery-add-linear"></iconify-icon>
<span className="text-sm font-medium">Sube una o más fotos</span>
</div>
</div>
<div className="flex flex-col gap-1.5">
<label className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                Ubicación aproximada
              </label>
<input className="w-full px-4 py-3 rounded-xl border border-black/10 text-sm focus:outline-none focus:ring-2 focus:ring-black/5 bg-neutral-50" placeholder="Ej. Parque Cuscatlán, San Salvador" type="text"/>
</div>
<div className="flex flex-col gap-1.5">
<label className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                Descripción / Detalles
              </label>
<textarea className="w-full px-4 py-3 rounded-xl border border-black/10 text-sm focus:outline-none focus:ring-2 focus:ring-black/5 bg-neutral-50 resize-none" placeholder="Describe el estado de la mascota, comportamiento, etc." rows="3"></textarea>
</div>
<button className="w-full py-3 mt-2 text-sm font-medium rounded-xl transition-colors shadow-lg bg-black text-white hover:bg-neutral-800 shadow-black/20" type="button">
              Reportar Mascota
            </button>
</form>
</div>

<div className="p-8 rounded-[2.5rem] border shadow-sm bg-white border-black/5 flex flex-col gap-6">
<div className="flex items-center gap-4 border-b border-black/5 pb-6">
<div className="w-14 h-14 rounded-2xl border flex items-center justify-center shadow-sm bg-red-50 border-red-100 text-red-600">
<iconify-icon className="text-2xl" icon="solar:shield-warning-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h2 className="font-heading font-semibold text-2xl tracking-tight text-neutral-900">
                Denuncia Anónima
              </h2>
<p className="text-sm text-neutral-500">
                Reporta casos de maltrato o abandono
              </p>
</div>
</div>
<form className="flex flex-col gap-4">
<div className="p-4 rounded-xl bg-red-50 text-red-800 text-sm flex items-start gap-3 border border-red-100">
<iconify-icon className="text-xl shrink-0 mt-0.5" icon="solar:info-circle-linear"></iconify-icon>
<p>
                Tu identidad está 100% protegida. Esta información será
                compartida únicamente con las autoridades pertinentes y
                organizaciones de rescate.
              </p>
</div>
<div className="flex flex-col gap-1.5">
<label className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                Tipo de maltrato
              </label>
<select className="w-full px-4 py-3 rounded-xl border border-black/10 text-sm focus:outline-none focus:ring-2 focus:ring-black/5 bg-neutral-50 text-neutral-700">
<option>Abandono</option>
<option>Violencia física</option>
<option>Desnutrición severa</option>
<option>Criadero clandestino</option>
<option>Otro</option>
</select>
</div>
<div className="flex flex-col gap-1.5">
<label className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                Ubicación exacta
              </label>
<input className="w-full px-4 py-3 rounded-xl border border-black/10 text-sm focus:outline-none focus:ring-2 focus:ring-black/5 bg-neutral-50" placeholder="Dirección completa o punto de referencia" type="text"/>
</div>
<div className="flex flex-col gap-1.5">
<label className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                Descripción de los hechos
              </label>
<textarea className="w-full px-4 py-3 rounded-xl border border-black/10 text-sm focus:outline-none focus:ring-2 focus:ring-black/5 bg-neutral-50 resize-none" placeholder="Brinda todos los detalles posibles de la situación..." rows="3"></textarea>
</div>
<button className="w-full py-3 mt-2 text-sm font-medium rounded-xl transition-colors shadow-lg bg-red-600 text-white hover:bg-red-700 shadow-red-600/20" type="button">
              Enviar Denuncia Anónima
            </button>
</form>
</div>
</div>
</div>

<footer className="w-full border-t mt-auto bg-white border-black/5">
<div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<iconify-icon className="text-2xl text-neutral-400" icon="solar:cat-linear" strokeWidth="1.5"></iconify-icon>
<div className="font-heading font-semibold tracking-tighter text-xl uppercase text-neutral-400">
            ADOPTA
          </div>
</div>
<div className="text-xs font-medium text-neutral-400">
          © 2024 Adopta SV. Todos los derechos reservados.
        </div>
</div>
</footer>



    </>
  );
}
