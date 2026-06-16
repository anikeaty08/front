import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = { theme: { extend: { colors: { brand: { 50: '#f0f9ff', 100: '#e0f2fe', 900: '#003366' } } } } }



      // Initialize Icons
      lucide.createIcons();

      // Calculator Logic
      function calculateBudget() {
          const sqm = parseInt(document.getElementById('sqm').value);
          const rooms = parseInt(document.getElementById('rooms').value);
          const baths = parseInt(document.getElementById('baths').value);
          const kitchen = document.getElementById('kitchen').checked;

          // Update SQM label
          document.getElementById('sqmValue').innerText = sqm;

          // Styling checkbox
          const checkbox = document.getElementById('kitchen');
          const toggleBg = document.querySelector('.toggle-bg');
          if(checkbox.checked) {
              toggleBg.classList.replace('bg-slate-200', 'bg-brand-900');
          } else {
              toggleBg.classList.replace('bg-brand-900', 'bg-slate-200');
          }

          // Calculation Logic (Approximate market values)
          let basePrice = sqm * 400; // Base construction per m2
          basePrice += rooms * 1200; // Extra per room complexity
          basePrice += baths * 3500; // Extra per bath complexity
          if (kitchen) basePrice += 7000; // Kitchen cost

          // Format Price
          const formattedPrice = new Intl.NumberFormat('de-DE').format(basePrice);
          document.getElementById('priceDisplay').innerText = formattedPrice + "€";

          // Calculate Time (Rough logic: base 2 weeks + 1 week per 15sqm + bathrooms)
          let weeks = 3 + Math.floor(sqm / 25) + (baths * 0.5);
          if(kitchen) weeks += 1;
          weeks = Math.round(weeks);

          document.getElementById('timeDisplay').innerText = `${weeks}-${weeks+2} Semanas`;
      }

      // FAQ Accordion Logic
      function toggleFaq(button) {
          const content = button.nextElementSibling;
          const icon = button.querySelector('svg');

          // Toggle Logic
          if (content.style.maxHeight) {
              // Close
              content.style.maxHeight = null;
              icon.style.transform = 'rotate(0deg)';
              content.style.opacity = '0';
          } else {
              // Open
              content.style.maxHeight = content.scrollHeight + "px";
              icon.style.transform = 'rotate(180deg)';
              content.style.opacity = '1';
          }
      }

      // Run once on load
      calculateBudget();

      // Smooth Scroll for Anchors
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
          anchor.addEventListener('click', function (e) {
              e.preventDefault();
              document.querySelector(this.getAttribute('href')).scrollIntoView({
                  behavior: 'smooth'
              });
          });
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}>
<div className="spline-container absolute top-0 left-0 w-full h-full -z-10">
<iframe frameborder="0" height="100%" src="https://my.spline.design/herolightcopy-HWuYMA6IdNGk0VGuyvrItNGB" width="100%"></iframe>
</div>
</div>

<nav className="fixed w-full z-50 top-0 bg-white/80 backdrop-blur-md border-b border-slate-200/60">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-brand-900 rounded-lg flex items-center justify-center text-white">
<svg className="lucide lucide-layout-template w-4 h-4" data-lucide="layout-template" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="7" rx="1" width="18" x="3" y="3"></rect>
<rect height="7" rx="1" width="9" x="3" y="14"></rect>
<rect height="7" rx="1" width="5" x="16" y="14"></rect>
</svg>
</div>
<span className="font-semibold text-slate-900 tracking-tight text-sm uppercase">
            LeadMachine Pro
          </span>
</div>
<div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-500">
<a className="hover:text-brand-900 transition-colors" href="#ventajas">
            Ventajas
          </a>
<a className="hover:text-brand-900 transition-colors" href="#calculadora">
            Calculadora
          </a>
<a className="hover:text-brand-900 transition-colors" href="#testimonios">
            Testimonios
          </a>
<a className="hover:text-brand-900 transition-colors" href="#faq">FAQ</a>
</div>
<a className="hidden md:flex items-center gap-2 hover:bg-slate-200 transition-all text-xs font-medium text-slate-900 bg-slate-100 rounded-full pt-2 pr-4 pb-2 pl-4" href="#calculadora">
          Presupuesto Online
          <svg className="lucide lucide-arrow-right w-3 h-3" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
</nav>

<section className="md:pt-40 md:pb-32 overflow-hidden pt-32 pb-20 relative">
<div className="absolute inset-0 -z-10 h-full w-full bg-white bg-grid [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
<div className="absolute top-0 right-0 -z-10 opacity-30 translate-x-1/3 -translate-y-1/3 w-[800px] h-[800px] bg-brand-900/10 blur-[100px] rounded-full"></div>
<div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
<div className="max-w-xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-100 text-brand-900 text-xs font-medium mb-6 fade-in-up">
<svg className="lucide lucide-award w-3 h-3" data-lucide="award" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
<circle cx="12" cy="8" r="6"></circle>
</svg>
<span className="">+15 años de experiencia / +300 reformas</span>
</div>
<h1 className="text-4xl md:text-6xl font-semibold text-slate-900 tracking-tight leading-[1.1] mb-6 fade-in-up delay-100">
            Reforma tu vivienda con
            <span className="text-brand-900">garantías reales</span>
            y seguimiento semanal.
          </h1>
<p className="text-lg text-slate-500 mb-8 leading-relaxed fade-in-up delay-200">
            Obtén tu presupuesto orientativo o reserva una visita gratuita en
            menos de 1 minuto. Sin sorpresas ni letra pequeña.
          </p>
<div className="flex flex-col sm:flex-row gap-4 fade-in-up delay-300">
<a className="inline-flex justify-center items-center px-6 py-3.5 bg-brand-900 hover:bg-slate-800 text-white text-sm font-medium rounded-lg transition-all shadow-lg shadow-brand-900/20" href="#calculadora">
              Obtener presupuesto orientativo
            </a>
<a className="inline-flex justify-center items-center px-6 py-3.5 bg-white border border-slate-200 hover:border-slate-300 text-slate-700 text-sm font-medium rounded-lg transition-all" href="#visita">
              Reservar visita gratuita
            </a>
</div>
</div>
<div className="relative fade-in-up delay-300">
<div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-50">
<img alt="Reforma moderna" className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity duration-700" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=2000&amp;q=80"/>
<div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur px-4 py-3 rounded-lg border border-slate-100 shadow-sm flex items-center gap-3">
<div className="bg-green-100 text-green-700 p-1.5 rounded-full">
<svg className="lucide lucide-check w-4 h-4" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<div>
<p className="text-xs font-semibold text-slate-900">
                  Entregado a tiempo
                </p>
<p className="text-[10px] text-slate-500">
                  Proyecto Calle Velázquez
                </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-y border-slate-100" id="ventajas">
<div className="max-w-6xl mx-auto px-6">
<div className="mb-16 md:text-center max-w-2xl mx-auto">
<h2 className="text-2xl md:text-3xl font-semibold text-slate-900 tracking-tight mb-4">
            Por qué elegirnos
          </h2>
<p className="text-slate-500">
            Un enfoque radicalmente transparente en un sector tradicionalmente
            opaco.
          </p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="bg-white p-6 rounded-xl border border-slate-200/60 shadow-sm hover:shadow-md transition-shadow">
<div className="w-10 h-10 bg-blue-50 text-brand-900 rounded-lg flex items-center justify-center mb-4">
<svg className="lucide lucide-hard-hat w-5 h-5" data-lucide="hard-hat" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5"></path>
<path d="M14 6a6 6 0 0 1 6 6v3"></path>
<path d="M4 15v-3a6 6 0 0 1 6-6"></path>
<rect height="4" rx="1" width="20" x="2" y="15"></rect>
</svg>
</div>
<h3 className="text-base font-semibold text-slate-900 mb-2">
              Profesionalidad
            </h3>
<p className="text-sm text-slate-500 leading-relaxed">
              Equipo técnico propio con riguroso control de calidad y
              cumplimiento normativo.
            </p>
</div>

<div className="bg-white p-6 rounded-xl border border-slate-200/60 shadow-sm hover:shadow-md transition-shadow">
<div className="w-10 h-10 bg-blue-50 text-brand-900 rounded-lg flex items-center justify-center mb-4">
<svg className="lucide lucide-clipboard-list w-5 h-5" data-lucide="clipboard-list" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="4" rx="1" ry="1" width="8" x="8" y="2"></rect>
<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
<path d="M12 11h4"></path>
<path d="M12 16h4"></path>
<path d="M8 11h.01"></path>
<path d="M8 16h.01"></path>
</svg>
</div>
<h3 className="text-base font-semibold text-slate-900 mb-2">
              Seguimiento Real
            </h3>
<p className="text-sm text-slate-500 leading-relaxed">
              Recibe informes semanales con fotos y vídeos del avance de tu
              obra.
            </p>
</div>

<div className="bg-white p-6 rounded-xl border border-slate-200/60 shadow-sm hover:shadow-md transition-shadow">
<div className="w-10 h-10 bg-blue-50 text-brand-900 rounded-lg flex items-center justify-center mb-4">
<svg className="lucide lucide-calendar-clock w-5 h-5" data-lucide="calendar-clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 14v2.2l1.6 1"></path>
<path d="M16 2v4"></path>
<path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"></path>
<path d="M3 10h5"></path>
<path d="M8 2v4"></path>
<circle cx="16" cy="16" r="6"></circle>
</svg>
</div>
<h3 className="text-base font-semibold text-slate-900 mb-2">
              Plazos Garantizados
            </h3>
<p className="text-sm text-slate-500 leading-relaxed">
              Compromiso firmado ante notario en cada proyecto. Si nos
              retrasamos, pagamos.
            </p>
</div>

<div className="bg-white p-6 rounded-xl border border-slate-200/60 shadow-sm hover:shadow-md transition-shadow">
<div className="w-10 h-10 bg-blue-50 text-brand-900 rounded-lg flex items-center justify-center mb-4">
<svg className="lucide lucide-message-square w-5 h-5" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
</svg>
</div>
<h3 className="text-base font-semibold text-slate-900 mb-2">
              Transparencia Total
            </h3>
<p className="text-sm text-slate-500 leading-relaxed">
              Canal directo con el jefe de obra. Sin intermediarios ni teléfonos
              rotos.
            </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative" id="calculadora">
<div className="max-w-4xl mx-auto px-6">
<div className="text-center mb-12">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-4">
            Calcula tu presupuesto orientativo
          </h2>
<p className="text-slate-500">
            Obtén una estimación de precio y plazo en tiempo real.
          </p>
</div>
<div className="bg-white border border-slate-200 rounded-2xl shadow-xl p-6 md:p-10">
<form className="grid md:grid-cols-2 gap-10" id="calcForm" oninput="calculateBudget()">
<div className="space-y-6">

<div className="">
<label className="flex justify-between text-sm font-medium text-slate-700 mb-3">
<span>Superficie</span>
<span className="text-brand-900 font-semibold">
<span id="sqmValue">80</span>
                    m²
                  </span>
</label>
<input className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer" id="sqm" max="300" min="30" type="range" value="80"/>
</div>

<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-slate-500 mb-2 uppercase tracking-wide">
                    Habitaciones
                  </label>
<div className="relative">
<select className="w-full appearance-none bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-lg focus:ring-brand-900 focus:border-brand-900 block p-2.5" id="rooms">
<option value="1">1</option>
<option value="2">2</option>
<option selected="" value="3">3</option>
<option value="4">4</option>
<option value="5">5+</option>
</select>
<svg className="lucide lucide-chevron-down absolute right-3 top-3 w-4 h-4 text-slate-400 pointer-events-none" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</div>
</div>
<div className="">
<label className="block text-xs font-medium text-slate-500 mb-2 uppercase tracking-wide">
                    Baños
                  </label>
<div className="relative">
<select className="w-full appearance-none bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-lg focus:ring-brand-900 focus:border-brand-900 block p-2.5" id="baths">
<option value="1">1</option>
<option selected="" value="2">2</option>
<option value="3">3</option>
<option value="4">4+</option>
</select>
<svg className="lucide lucide-chevron-down absolute right-3 top-3 w-4 h-4 text-slate-400 pointer-events-none" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</div>
</div>
</div>

<div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg border border-slate-100">
<div className="">
<span className="text-sm font-medium text-slate-900 block">
                    ¿Incluye Cocina?
                  </span>
<span className="text-xs text-slate-500">
                    Reforma integral de cocina
                  </span>
</div>
<label className="flex items-center cursor-pointer relative" htmlFor="kitchen">
<input className="sr-only" id="kitchen" type="checkbox"/>
<div className="w-11 h-6 bg-slate-200 rounded-full border border-slate-300 transition toggle-bg"></div>
<span className="ml-3 text-sm font-medium text-slate-900"></span>
</label>
</div>

<div>
<label className="block text-xs font-medium text-slate-500 mb-2 uppercase tracking-wide">
                  Código Postal o Zona
                </label>
<input className="bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-lg focus:ring-brand-900 focus:border-brand-900 block w-full p-2.5 outline-none transition-colors" placeholder="Ej. Centro, Madrid" type="text"/>
</div>
</div>

<div className="flex flex-col justify-between p-8 overflow-hidden relative text-white bg-slate-900 rounded-xl shadow-2xl">
<div className="absolute top-0 right-0 -mt-8 -mr-8 w-40 h-40 rounded-full pointer-events-none bg-white/10 blur-2xl"></div>
<div className="relative z-10">
<h4 className="mb-6 text-xs font-semibold tracking-wider uppercase text-slate-400">
                  Estimación Aproximada
                </h4>
<div className="mb-8">
<span className="block mb-1 text-sm text-slate-200">
                    Inversión estimada
                  </span>
<div className="text-4xl font-semibold tracking-tighter text-white md:text-5xl" id="priceDisplay">
                    42.600€
                  </div>
<span className="block mt-2 text-xs text-slate-500">
                    *Varía según calidades finales
                  </span>
</div>
<div>
<span className="block mb-1 text-sm text-slate-200">
                    Duración estimada
                  </span>
<div className="flex items-center gap-2 text-xl font-medium tracking-tight text-white">
<svg className="w-5 h-5 text-slate-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<polyline points="12 6 12 12 16 14"></polyline>
</svg>
<span id="timeDisplay">7-9 Semanas</span>
</div>
</div>
</div>
<button className="flex relative z-10 justify-center items-center gap-2 px-4 py-3 mt-8 w-full font-medium text-slate-900 bg-white rounded-lg transition-colors shadow-lg hover:bg-slate-50 group shadow-black/5" type="button">
                Solicitar presupuesto detallado
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
</div>
</form>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="testimonios">
<div className="max-w-6xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-2xl md:text-3xl font-semibold text-slate-900 tracking-tight mb-6">
              Resultados que hablan por sí mismos
            </h2>
<p className="text-slate-500 mb-8 leading-relaxed">
              Trabajamos por tramos con informes semanales y total
              transparencia. Sin sorpresas, sin retrasos, sin letra pequeña.
              Nuestros clientes valoran la tranquilidad durante el proceso.
            </p>
<div className="space-y-6">

<div className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm">
<div className="flex gap-1 text-yellow-500 mb-2">
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
</svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
</svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
</svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
</svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
</svg>
</div>
<p className="text-slate-700 text-sm mb-3">
                  "Increíble ver cómo cumplieron cada plazo. El informe semanal
                  me daba mucha paz mental."
                </p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-600">
                    CR
                  </div>
<div>
<p className="text-xs font-semibold text-slate-900">
                      Carlos Rodríguez
                    </p>
<p className="text-[10px] text-slate-400">
                      Reforma Integral en Valencia
                    </p>
</div>
</div>
</div>

<div className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm">
<div className="flex gap-1 text-yellow-500 mb-2">
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
</svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
</svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
</svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
</svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
</svg>
</div>
<p className="text-slate-700 text-sm mb-3">
                  "La calculadora de la web fue muy precisa con el precio final.
                  Equipo 100% profesional."
                </p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-brand-100 flex items-center justify-center text-xs font-bold text-brand-900">
                    MG
                  </div>
<div>
<p className="text-xs font-semibold text-slate-900">
                      Marta García
                    </p>
<p className="text-[10px] text-slate-400">
                      Reforma Cocina y Baños
                    </p>
</div>
</div>
</div>
</div>
</div>

<div className="relative group cursor-ew-resize">
<div className="absolute top-4 left-4 z-10 bg-black/50 text-white text-xs px-2 py-1 rounded backdrop-blur-sm font-medium">
              ANTES
            </div>
<div className="absolute top-4 right-4 z-10 bg-white/90 text-brand-900 text-xs px-2 py-1 rounded backdrop-blur-sm font-medium shadow-sm">
              DESPUÉS
            </div>
<div className="aspect-[4/3] rounded-2xl overflow-hidden relative shadow-2xl">
<img alt="After" className="absolute inset-0 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 w-[50%] overflow-hidden border-r-2 border-white bg-slate-200" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&amp', backgroundSize: 'cover', backgroundPosition: 'left center'}}></div>
<div className="absolute inset-y-0 left-[50%] -ml-4 flex items-center justify-center w-8 h-8 rounded-full bg-white shadow-lg top-1/2 -mt-4">
<svg className="lucide lucide-move-horizontal w-4 h-4 text-slate-900" data-lucide="move-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m18 8 4 4-4 4"></path>
<path d="M2 12h20"></path>
<path d="m6 8-4 4 4 4"></path>
</svg>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-b border-slate-100" id="faq">
<div className="max-w-3xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-4">
            Preguntas Frecuentes
          </h2>
<p className="text-slate-500">
            Todo lo que necesitas saber antes de empezar tu reforma.
          </p>
</div>
<div className="space-y-4">

<div className="border border-slate-200 rounded-xl bg-white overflow-hidden transition-all hover:border-slate-300">
<button className="w-full flex items-center justify-between p-5 text-left focus:outline-none" onclick="toggleFaq(this)">
<span className="font-semibold text-slate-900 text-sm md:text-base pr-4">
                ¿Ofrecéis presupuestos gratuitos?
              </span>
<svg className="lucide lucide-chevron-down w-5 h-5 text-slate-400 transition-transform duration-300" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</button>
<div className="max-h-0 overflow-hidden faq-content bg-slate-50/50">
<div className="p-5 pt-0 text-sm text-slate-500 leading-relaxed border-t border-slate-100/50">
                Sí, todos nuestros presupuestos son completamente gratuitos y
                sin compromiso. Visitamos tu hogar, evaluamos el proyecto y te
                entregamos un presupuesto detallado con todos los costes
                incluidos.
              </div>
</div>
</div>

<div className="border border-slate-200 rounded-xl bg-white overflow-hidden transition-all hover:border-slate-300">
<button className="w-full flex items-center justify-between p-5 text-left focus:outline-none" onclick="toggleFaq(this)">
<span className="font-semibold text-slate-900 text-sm md:text-base pr-4">
                ¿Cuánto tiempo suele durar una reforma?
              </span>
<svg className="lucide lucide-chevron-down w-5 h-5 text-slate-400 transition-transform duration-300" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</button>
<div className="max-h-0 overflow-hidden faq-content bg-slate-50/50">
<div className="p-5 pt-0 text-sm text-slate-500 leading-relaxed border-t border-slate-100/50">
                El tiempo varía según el tipo de proyecto. Una reforma de baño
                puede llevar 2-4 semanas, una cocina 3-6 semanas, y proyectos
                completos pueden durar varios meses. Te proporcionaremos un
                calendario detallado antes de comenzar.
              </div>
</div>
</div>

<div className="border border-slate-200 rounded-xl bg-white overflow-hidden transition-all hover:border-slate-300">
<button className="w-full flex items-center justify-between p-5 text-left focus:outline-none" onclick="toggleFaq(this)">
<span className="font-semibold text-slate-900 text-sm md:text-base pr-4">
                ¿Tenéis seguros y licencias?
              </span>
<svg className="lucide lucide-chevron-down w-5 h-5 text-slate-400 transition-transform duration-300" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</button>
<div className="max-h-0 overflow-hidden faq-content bg-slate-50/50">
<div className="p-5 pt-0 text-sm text-slate-500 leading-relaxed border-t border-slate-100/50">
                Absolutamente. Contamos con todos los seguros necesarios,
                licencias profesionales y cumplimos con todas las normativas
                vigentes. Tu tranquilidad es nuestra prioridad.
              </div>
</div>
</div>

<div className="border border-slate-200 rounded-xl bg-white overflow-hidden transition-all hover:border-slate-300">
<button className="w-full flex items-center justify-between p-5 text-left focus:outline-none" onclick="toggleFaq(this)">
<span className="font-semibold text-slate-900 text-sm md:text-base pr-4">
                ¿Qué garantías ofrecéis?
              </span>
<svg className="lucide lucide-chevron-down w-5 h-5 text-slate-400 transition-transform duration-300" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</button>
<div className="max-h-0 overflow-hidden faq-content bg-slate-50/50">
<div className="p-5 pt-0 text-sm text-slate-500 leading-relaxed border-t border-slate-100/50">
                Ofrecemos garantía completa en todos nuestros trabajos. Los
                materiales tienen garantía del fabricante y nuestra mano de obra
                está garantizada por 2 años. Además, realizamos revisiones
                post-entrega.
              </div>
</div>
</div>

<div className="border border-slate-200 rounded-xl bg-white overflow-hidden transition-all hover:border-slate-300">
<button className="w-full flex items-center justify-between p-5 text-left focus:outline-none" onclick="toggleFaq(this)">
<span className="font-semibold text-slate-900 text-sm md:text-base pr-4">
                ¿Puedo seguir viviendo en mi casa durante la reforma?
              </span>
<svg className="lucide lucide-chevron-down w-5 h-5 text-slate-400 transition-transform duration-300" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</button>
<div className="max-h-0 overflow-hidden faq-content bg-slate-50/50">
<div className="p-5 pt-0 text-sm text-slate-500 leading-relaxed border-t border-slate-100/50">
                Depende del tipo de reforma. En muchos casos sí es posible,
                especialmente en reformas parciales. Nos esforzamos por
                minimizar las molestias, manteniendo el espacio limpio y
                trabajando en horarios convenientes.
              </div>
</div>
</div>

<div className="border border-slate-200 rounded-xl bg-white overflow-hidden transition-all hover:border-slate-300">
<button className="w-full flex items-center justify-between p-5 text-left focus:outline-none" onclick="toggleFaq(this)">
<span className="font-semibold text-slate-900 text-sm md:text-base pr-4">
                ¿Cómo se realiza el pago?
              </span>
<svg className="lucide lucide-chevron-down w-5 h-5 text-slate-400 transition-transform duration-300" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</button>
<div className="max-h-0 overflow-hidden faq-content bg-slate-50/50">
<div className="p-5 pt-0 text-sm text-slate-500 leading-relaxed border-t border-slate-100/50">
                Normalmente trabajamos con un sistema de pagos fraccionados: un
                anticipo al inicio, pagos intermedios según avance de obra, y el
                pago final al completar el proyecto. Todo queda especificado en
                el contrato.
              </div>
</div>
</div>

<div className="border border-slate-200 rounded-xl bg-white overflow-hidden transition-all hover:border-slate-300">
<button className="w-full flex items-center justify-between p-5 text-left focus:outline-none" onclick="toggleFaq(this)">
<span className="font-semibold text-slate-900 text-sm md:text-base pr-4">
                ¿Proporcionáis los materiales?
              </span>
<svg className="lucide lucide-chevron-down w-5 h-5 text-slate-400 transition-transform duration-300" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</button>
<div className="max-h-0 overflow-hidden faq-content bg-slate-50/50">
<div className="p-5 pt-0 text-sm text-slate-500 leading-relaxed border-t border-slate-100/50">
                Sí, nos encargamos de todo. Trabajamos con proveedores de
                confianza para obtener materiales de calidad al mejor precio.
                También puedes aportar tus propios materiales si lo prefieres.
              </div>
</div>
</div>

<div className="border border-slate-200 rounded-xl bg-white overflow-hidden transition-all hover:border-slate-300">
<button className="w-full flex items-center justify-between p-5 text-left focus:outline-none" onclick="toggleFaq(this)">
<span className="font-semibold text-slate-900 text-sm md:text-base pr-4">
                ¿Qué zona geográfica cubrís?
              </span>
<svg className="lucide lucide-chevron-down w-5 h-5 text-slate-400 transition-transform duration-300" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</button>
<div className="max-h-0 overflow-hidden faq-content bg-slate-50/50">
<div className="p-5 pt-0 text-sm text-slate-500 leading-relaxed border-t border-slate-100/50">
                Trabajamos principalmente en Madrid y alrededores, Barcelona,
                Valencia y sus áreas metropolitanas. Para proyectos especiales,
                podemos desplazarnos a otras zonas. Consúltanos tu ubicación.
              </div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white border-slate-100 border-b pt-24 pb-24">
<div className="max-w-5xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-8">

<a className="group flex flex-col p-8 rounded-2xl bg-white border border-slate-200 hover:border-brand-900/30 hover:shadow-xl hover:shadow-brand-900/5 transition-all duration-300" href="#calculadora">
<div className="w-12 h-12 bg-blue-50 text-brand-900 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-calculator w-6 h-6" data-lucide="calculator" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="20" rx="2" width="16" x="4" y="2"></rect>
<line x1="8" x2="16" y1="6" y2="6"></line>
<line x1="16" x2="16" y1="14" y2="18"></line>
<path d="M16 10h.01"></path>
<path d="M12 10h.01"></path>
<path d="M8 10h.01"></path>
<path d="M12 14h.01"></path>
<path d="M8 14h.01"></path>
<path d="M12 18h.01"></path>
<path d="M8 18h.01"></path>
</svg>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">
              Obtener presupuesto orientativo
            </h3>
<p className="text-sm text-slate-500 mb-8 flex-grow">
              Calcula el coste de tu reforma en segundos basado en nuestros
              datos de mercado actuales.
            </p>
<div className="flex items-center text-brand-900 font-medium text-sm">
              Comenzar ahora
              <svg className="lucide lucide-arrow-right w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</div>
</a>

<a className="group flex flex-col p-8 rounded-2xl bg-slate-900 text-white hover:bg-slate-800 hover:shadow-xl transition-all duration-300" href="#visita">
<div className="w-12 h-12 bg-white/10 text-white rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-calendar-check w-6 h-6" data-lucide="calendar-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M8 2v4"></path>
<path d="M16 2v4"></path>
<rect height="18" rx="2" width="18" x="3" y="4"></rect>
<path d="M3 10h18"></path>
<path d="m9 16 2 2 4-4"></path>
</svg>
</div>
<h3 className="text-xl font-semibold text-white mb-2">
              Reservar visita gratuita
            </h3>
<p className="text-sm text-slate-400 mb-8 flex-grow">
              Un técnico visitará tu vivienda para valorar el estado y darte una
              propuesta firme.
            </p>
<div className="flex items-center text-white font-medium text-sm">
              Agendar cita
              <svg className="lucide lucide-arrow-right w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</div>
</a>
</div>
</div>
</section>

<section className="py-16 bg-slate-50">
<div className="max-w-4xl mx-auto px-6 text-center">
<div className="inline-flex flex-col md:flex-row items-center gap-6 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm mx-auto">
<div className="w-12 h-12 bg-red-50 text-red-600 rounded-lg flex-shrink-0 flex items-center justify-center">
<svg className="lucide lucide-file-text w-6 h-6" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
<path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
<path d="M10 9H8"></path>
<path d="M16 13H8"></path>
<path d="M16 17H8"></path>
</svg>
</div>
<div className="text-left">
<h4 className="text-base font-semibold text-slate-900">
              Descarga nuestra presentación corporativa
            </h4>
<p className="text-xs text-slate-500">
              Conoce el detalle de cómo trabajamos, garantías y equipo.
            </p>
</div>
<button className="w-full md:w-auto px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-2">
<svg className="lucide lucide-download w-3 h-3" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 15V3"></path>
<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10 5 5 5-5"></path>
</svg>
            Descargar Dossier PDF
          </button>
</div>
</div>
</section>

<section className="bg-white pt-12 pb-12">
<div className="max-w-2xl mx-auto px-6 text-center">
<h3 className="text-lg font-semibold text-slate-900 mb-2">
          ¿Tienes dudas específicas?
        </h3>
<p className="text-sm text-slate-500 mb-6">
          Nuestro asistente virtual puede resolver preguntas sobre licencias,
          tiempos y materiales.
        </p>
<button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-slate-200 hover:border-brand-900 text-slate-600 hover:text-brand-900 transition-all text-sm font-medium bg-white">
<svg className="lucide lucide-bot w-4 h-4" data-lucide="bot" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 8V4H8"></path>
<rect height="12" rx="2" width="16" x="4" y="8"></rect>
<path d="M2 14h2"></path>
<path d="M20 14h2"></path>
<path d="M15 13v2"></path>
<path d="M9 13v2"></path>
</svg>
          Iniciar asistente virtual
        </button>
</div>
</section>

<footer className="bg-slate-900 text-slate-400 py-16 text-sm">
<div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-12">
<div className="col-span-1 md:col-span-1">
<div className="flex items-center gap-2 text-white mb-6">
<svg className="lucide lucide-layout-template w-5 h-5" data-lucide="layout-template" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="7" rx="1" width="18" x="3" y="3"></rect>
<rect height="7" rx="1" width="9" x="3" y="14"></rect>
<rect height="7" rx="1" width="5" x="16" y="14"></rect>
</svg>
<span className="font-semibold tracking-tight uppercase">
              LeadMachine Pro
            </span>
</div>
<p className="mb-6 leading-relaxed">
            Reformas integrales con metodología, transparencia y garantías
            firmadas.
          </p>
<div className="flex gap-4">
<a className="hover:text-white transition-colors" href="#">
<svg className="lucide lucide-instagram w-5 h-5" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect>
<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
<line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
</svg>
</a>
<a className="hover:text-white transition-colors" href="#">
<svg className="lucide lucide-linkedin w-5 h-5" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
<rect height="12" width="4" x="2" y="9"></rect>
<circle cx="4" cy="4" r="2"></circle>
</svg>
</a>
<a className="hover:text-white transition-colors" href="#">
<svg className="lucide lucide-facebook w-5 h-5" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
</svg>
</a>
</div>
</div>
<div>
<h4 className="text-white font-medium mb-4">Empresa</h4>
<ul className="space-y-3">
<li>
<a className="hover:text-white transition-colors" href="#">
                Sobre nosotros
              </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                Proyectos realizados
              </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                Garantías
              </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                Trabaja con nosotros
              </a>
</li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Contacto</h4>
<ul className="space-y-3">
<li className="flex items-center gap-2">
<svg className="lucide lucide-phone w-4 h-4" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>
</svg>
              900 123 456
            </li>
<li className="flex items-center gap-2">
<svg className="lucide lucide-mail w-4 h-4" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
<rect height="16" rx="2" width="20" x="2" y="4"></rect>
</svg>
              hola@leadmachine.pro
            </li>
<li className="flex items-center gap-2">
<svg className="lucide lucide-map-pin w-4 h-4" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
<circle cx="12" cy="10" r="3"></circle>
</svg>
              Calle Innovación 4, Madrid
            </li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Legal</h4>
<ul className="space-y-3">
<li>
<a className="hover:text-white transition-colors" href="#">
                Política de Privacidad
              </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                Política de Cookies
              </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                Aviso Legal
              </a>
</li>
</ul>
</div>
</div>
<div className="max-w-6xl mx-auto px-6 mt-16 pt-8 border-t border-slate-800 text-xs text-center md:text-left flex flex-col md:flex-row justify-between items-center">
<p>© 2023 LeadMachine Pro Reformas. Todos los derechos reservados.</p>
</div>
</footer>

<div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-slate-200 md:hidden z-50 flex gap-3 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
<a className="flex-1 bg-white border border-slate-300 text-slate-700 font-medium py-3 rounded-lg text-center text-xs flex items-center justify-center gap-2" href="#visita">
<svg className="lucide lucide-message-circle w-4 h-4" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path>
</svg>
        WhatsApp
      </a>
<a className="flex-1 bg-brand-900 text-white font-medium py-3 rounded-lg text-center text-xs shadow-lg shadow-brand-900/20" href="#calculadora">
        Calcular Presupuesto
      </a>
</div>



    </>
  );
}
