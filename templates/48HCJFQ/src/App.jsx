import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const originalAddEventListener = document.addEventListener;
    const originalWindowAddEventListener = window.addEventListener;
    
    document.addEventListener = function(event, callback, options) {
      if (event === 'DOMContentLoaded') {
        setTimeout(() => {
          try { callback(new Event('DOMContentLoaded')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalAddEventListener.call(document, event, callback, options);
      }
    };
    
    window.addEventListener = function(event, callback, options) {
      if (event === 'load') {
        setTimeout(() => {
          try { callback(new Event('load')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalWindowAddEventListener.call(window, event, callback, options);
      }
    };
    
    let onloadHandler = null;
    try {
      Object.defineProperty(window, 'onload', {
        set: function(fn) {
          onloadHandler = fn;
          setTimeout(() => {
            try { if (typeof fn === 'function') fn(); } catch (e) { console.error(e); }
          }, 0);
        },
        get: function() { return onloadHandler; },
        configurable: true
      });
    } catch (e) {}
    try {
      
AOS.init({ once:true, duration:700, easing:'ease-out' });

/* Particles */
particlesJS('particles-js',{
  particles:{number:{value:45,density:{enable:true,value_area:800}},color:{value:'#0ea5e9'},shape:{type:'circle'},
  opacity:{value:.22,random:true},size:{value:3,random:true},move:{enable:true,speed:1,direction:'none',out_mode:'out'}},
  interactivity:{events:{onhover:{enable:true,mode:'repulse'},onclick:{enable:true,mode:'push'}},
  modes:{repulse:{distance:80},push:{particles_nb:4}}},retina_detect:true});

/* Feature cards */
const features=[{icon:'shield-check',title:'Cumplimiento legal',desc:'Actualizaciones automáticas con la normativa laboral y fiscal de Costa Rica.'},
{icon:'clock',title:'Procesamiento en minutos',desc:'Genera planillas con un clic y olvídate de las hojas de cálculo.'},
{icon:'credit-card',title:'Pagos integrados',desc:'Deposita salarios y aguinaldos directamente desde la plataforma.'},
{icon:'file-text',title:'Reportes detallados',desc:'Accede a informes en tiempo real para tomar mejores decisiones.'},
{icon:'users',title:'Portal de empleados',desc:'Tus colaboradores pueden revisar recibos y datos personales.'},
{icon:'life-buoy',title:'Soporte humano',desc:'Nuestro equipo está disponible por chat, mail o teléfono.'}];

const grid=document.getElementById('featuresGrid');
features.forEach((f,i)=>{
  grid.insertAdjacentHTML('beforeend',`
    <div class="group relative p-8 bg-white rounded-3xl shadow-lg border border-slate-200 overflow-hidden hover:shadow-xl transition"
         data-aos="fade-up" data-aos-delay="${50*(i+1)}">
      <div class="absolute -inset-px bg-sky-500/0 rounded-3xl group-hover:bg-sky-500/5 transition"></div>
      <div class="relative space-y-6">
        <div class="w-12 h-12 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center shadow-inner group-hover:rotate-6 transition">
          <i data-lucide="${f.icon}" class="w-6 h-6"></i>
        </div>
        <h3 class="text-lg font-semibold tracking-tight">${f.title}</h3>
        <p class="text-sm text-slate-600">${f.desc}</p>
      </div>
    </div>`);});

/* Pricing cards */
const pricing=[{name:'Esencial',tag:'',monthly:'₡0',yearly:'₡0',desc:'Para pymes que inician.',features:['Hasta 10 empleados','Portal de empleados','Soporte email'],cta:'Empieza gratis',style:''},
{name:'Profesional',tag:'Popular',monthly:'₡29 900',yearly:'₡25 400',desc:'Para empresas en crecimiento.',features:['Hasta 50 empleados','Pagos automáticos','Soporte chat'],cta:'Elegir plan',style:'border-2 border-sky-500 shadow-2xl'},
{name:'Empresarial',tag:'',monthly:'₡Consultar',yearly:'₡Consultar',desc:'Para equipos grandes.',features:['Soporte dedicado','Integraciones personalizadas','Onboarding in situ'],cta:'Contáctanos',style:''}];

const pricingGrid=document.getElementById('pricingGrid');
pricing.forEach((p,i)=>{
  const badge=p.tag?`<div class="absolute -top-3 right-6 bg-sky-500 text-white text-xs font-medium px-2 py-1 rounded">${p.tag}</div>`:'';
  pricingGrid.insertAdjacentHTML('beforeend',`
  <div class="group relative p-8 bg-white rounded-3xl ${p.style} flex flex-col gap-8 hover:shadow-xl hover:-translate-y-1 transition"
       data-aos="zoom-in" data-aos-delay="${100+(50*i)}">
    ${badge}
    <div class="space-y-2">
      <h3 class="text-lg font-semibold tracking-tight">${p.name}</h3>
      <p class="text-sm text-slate-600">${p.desc}</p>
    </div>
    <p class="text-4xl font-semibold tracking-tight"><span class="price" data-m="${p.monthly}" data-y="${p.yearly}">${p.monthly}</span><span class="text-base font-medium">/mes</span></p>
    <ul class="space-y-3 text-sm text-slate-700 flex-1">
      ${p.features.map(f=>`<li class="flex items-center gap-2"><i data-lucide="check" class="w-4 h-4 text-sky-600"></i>${f}</li>`).join('')}
    </ul>
    <a href="#" class="inline-flex items-center justify-center gap-2 ${p.name==='Empresarial'?'bg-white border border-sky-600 text-sky-600 hover:bg-sky-50':'bg-sky-600 text-white hover:bg-sky-700'} text-sm font-medium px-5 py-3 rounded-md shadow transition group-hover:-translate-y-0.5">${p.cta}</a>
  </div>`);});

/* Icons */
lucide.createIcons();

/* Chart */
const ctx=document.getElementById('savingsChart');
if(ctx){
  new Chart(ctx,{type:'line',
    data:{labels:['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'],
    datasets:[{label:'Planilla tradicional',data:[120,115,110,108,106,104,102,101,100,98,97,96],borderColor:'#94a3b8',tension:.4},
              {label:'PlanillaCR',data:[120,90,80,70,60,50,45,40,38,37,36,36],borderColor:'#0ea5e9',tension:.4}]},
    options:{plugins:{legend:{display:false}},scales:{y:{ticks:{callback:v=>v}}}}});
}

/* Counters */
document.querySelectorAll('.counter').forEach(el=>{
  const target=+el.dataset.target, inc=Math.ceil(target/100);
  const update=()=>{const cur=+el.textContent.replace(/\D/g,'');if(cur<target){el.textContent=cur+inc;requestAnimationFrame(update);}else{el.textContent=target.toLocaleString('es-CR');}};
  update();
});

/* Scroll top */
const toTop=document.getElementById('toTop');
window.addEventListener('scroll',()=>{window.scrollY>600?toTop.classList.remove('hidden'):toTop.classList.add('hidden');});
toTop.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));

/* Billing toggle */
let annual=false;
const toggle=document.getElementById('billingToggle'),thumb=document.getElementById('toggleThumb'),
labelM=document.getElementById('labelMonthly'),labelY=document.getElementById('labelYearly');
toggle.addEventListener('click',()=>{
  annual=!annual;
  thumb.style.transform=annual?'translateX(100%)':'translateX(0)';
  labelM.classList.toggle('text-slate-500',annual);
  labelY.classList.toggle('text-slate-500',!annual);
  document.querySelectorAll('.price').forEach(p=>{
    p.textContent=annual?p.dataset.y:p.dataset.m;
  });
});

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      

<div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>

<button aria-label="Ir arriba" className="hidden fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full bg-sky-600 text-white shadow-lg hover:bg-sky-700 transition" id="toTop">
<i className="w-5 h-5 mx-auto" data-lucide="chevron-up"></i>
</button>

<header className="fixed inset-x-0 top-0 z-30 backdrop-blur bg-white/80 shadow-sm border-b border-slate-200">
<nav className="max-w-7xl mx-auto px-6 lg:px-10 py-4 flex items-center justify-between">
<a className="flex items-center gap-3 group" href="#">
<span className="inline-flex justify-center items-center w-9 h-9 rounded-full bg-sky-500 text-white shadow-inner group-hover:rotate-12 transition">
<i className="w-4 h-4" data-lucide="zap"></i>
</span>
<span className="text-lg font-semibold tracking-tight">PlanillaCR</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm">
<a className="hover:text-sky-600 transition-colors" href="#features">Características</a>
<a className="hover:text-sky-600 transition-colors" href="#pricing">Precios</a>
<a className="hover:text-sky-600 transition-colors" href="#faq">FAQ</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:inline-flex items-center gap-2 text-sm text-slate-700 hover:text-sky-600 transition-colors" href="#">
        Ingresar <i className="w-4 h-4" data-lucide="log-in"></i>
</a>
<a className="inline-flex items-center justify-center gap-2 bg-sky-600 hover:bg-sky-700 text-white text-sm font-medium px-5 py-3 rounded-md shadow transition" href="#">
        Probar gratis <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</nav>
</header>
<main className="relative z-10">

<section className="relative overflow-hidden pt-32 md:pt-40 pb-28" id="hero">
<div className="absolute inset-0 -z-10" id="particles-js"></div>
<div className="max-w-5xl mx-auto px-6 text-center space-y-10" data-aos="fade-up">
<h1 className="text-4xl md:text-6xl font-semibold tracking-tight bg-gradient-to-r from-sky-500 via-cyan-500 to-indigo-500 bg-[length:200%_200%] bg-clip-text text-transparent animate-[gradientShift_8s_ease_infinite]">
        Simplifica tu <span className="whitespace-nowrap">nómina en minutos</span>
</h1>
<p className="text-lg text-slate-600 leading-relaxed mx-auto max-w-2xl">
        Automatiza cálculos, genera reportes y paga a tus colaboradores sin complicaciones ni errores.
      </p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<a className="inline-flex items-center justify-center gap-2 bg-sky-600 hover:bg-sky-700 text-white text-sm font-medium px-6 py-4 rounded-md shadow transition hover:-translate-y-0.5" href="#">
          Comienza gratis <i className="w-4 h-4" data-lucide="rocket"></i>
</a>
<a className="inline-flex items-center justify-center gap-2 border border-slate-300 hover:bg-slate-50 text-sm px-6 py-4 rounded-md transition hover:-translate-y-0.5" href="#features">
          Ver características <i className="w-4 h-4" data-lucide="chevron-down"></i>
</a>
</div>

<div className="relative max-w-6xl mx-auto mt-24">
<div className="rounded-[30px] p-[2px] bg-gradient-to-br from-sky-500/40 via-indigo-500/40 to-transparent">
<img alt="Captura de tablero PlanillaCR" className="rounded-[28px] shadow-2xl border border-slate-200" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&amp;fit=crop&amp;w=1400&amp;q=80"/>
</div>
<div className="absolute -inset-8 rounded-3xl bg-sky-500/20 blur-3xl opacity-50 -z-10"></div>
</div>
</div>

<div className="max-w-5xl mx-auto px-6 mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
<div className="space-y-1" data-aos="fade-up" data-aos-delay="50">
<p className="text-3xl font-semibold tracking-tight"><span className="counter" data-target="500">0</span>+</p>
<p className="text-sm text-slate-600">Empresas</p>
</div>
<div className="space-y-1" data-aos="fade-up" data-aos-delay="100">
<p className="text-3xl font-semibold tracking-tight"><span className="counter" data-target="25000">0</span>+</p>
<p className="text-sm text-slate-600">Colaboradores pagados</p>
</div>
<div className="space-y-1" data-aos="fade-up" data-aos-delay="150">
<p className="text-3xl font-semibold tracking-tight"><span className="counter" data-target="99">0</span>%</p>
<p className="text-sm text-slate-600">Satisfacción</p>
</div>
<div className="space-y-1" data-aos="fade-up" data-aos-delay="200">
<p className="text-3xl font-semibold tracking-tight">₡<span className="counter" data-target="1200">0</span>m</p>
<p className="text-sm text-slate-600">Procesados mensuales</p>
</div>
</div>
</section>

<section className="py-14">
<div className="max-w-6xl mx-auto px-6 flex flex-wrap justify-center gap-10 opacity-60 grayscale hover:grayscale-0 transition" data-aos="fade-up">
<img alt="Meta" className="h-8 md:h-9" src="https://upload.wikimedia.org/wikipedia/commons/3/38/Meta_Platforms_Inc._logo.svg"/>
<img alt="Google" className="h-8 md:h-9" src="https://upload.wikimedia.org/wikipedia/commons/d/db/Google_Logo.svg"/>
<img alt="Apple" className="h-8 md:h-9" src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"/>
<img alt="Microsoft" className="h-8 md:h-9" src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"/>
<img alt="Netflix" className="h-8 md:h-9" src="https://upload.wikimedia.org/wikipedia/commons/a/ac/Netflix_2015_logo.svg"/>
</div>
</section>
<div className="max-w-7xl mx-auto px-6">
<div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
</div>

<section className="relative py-28" id="features">
<div aria-hidden="true" className="absolute inset-x-0 -top-20 h-48 bg-gradient-to-b from-sky-50/50 to-white"></div>
<div className="max-w-7xl mx-auto px-6 lg:px-10 space-y-20">
<div className="text-center max-w-3xl mx-auto space-y-6" data-aos="fade-up">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Todo lo que necesitas en una sola plataforma</h2>
<p className="text-slate-600">Reducimos errores y tiempo de procesamiento para que te concentres en tu equipo.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12" id="featuresGrid"></div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-6xl mx-auto px-6 lg:px-10 grid md:grid-cols-2 gap-16 items-center">
<div className="space-y-6" data-aos="fade-right">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Ahorra tiempo y dinero</h2>
<p className="text-slate-600">Nuestro motor automático reduce en un 70 % el tiempo que tu equipo dedica a la nómina.</p>
<ul className="space-y-3 text-sm text-slate-700">
<li className="flex items-center gap-3"><i className="w-5 h-5 text-sky-600" data-lucide="check-circle"></i>Menos horas de cálculo manual</li>
<li className="flex items-center gap-3"><i className="w-5 h-5 text-sky-600" data-lucide="check-circle"></i>Menos errores fiscales</li>
<li className="flex items-center gap-3"><i className="w-5 h-5 text-sky-600" data-lucide="check-circle"></i>Mejor productividad</li>
</ul>
</div>
<div className="relative" data-aos="fade-left">
<div className="p-6 bg-white rounded-3xl shadow-lg border border-slate-200">
<h3 className="sr-only" id="chartTitle">Gráfico de ahorro</h3>
<div className="relative">
<canvas className="w-full h-64" id="savingsChart"></canvas>
</div>
</div>
</div>
</div>
</section>

<section className="py-24">
<div className="max-w-6xl mx-auto px-6 lg:px-10 space-y-20">
<div className="text-center space-y-6" data-aos="fade-up">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Historias de éxito</h2>
<p className="text-slate-600">Más de 500 empresas confían en nosotros para pagar puntualmente.</p>
</div>
<div className="grid md:grid-cols-2 gap-12">
<figure className="relative p-8 bg-white rounded-3xl shadow-lg border border-slate-200 hover:shadow-xl transition" data-aos="fade-right">
<blockquote className="text-slate-700 text-lg leading-relaxed">
            “Con PlanillaCR tardamos menos de la mitad y ya no cometemos errores. Nuestro equipo de finanzas está feliz.”
          </blockquote>
<figcaption className="mt-8 flex items-center gap-4">
<img alt="Roxana Campos" className="w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&amp;fit=crop&amp;w=64&amp;q=80"/>
<div>
<p className="font-medium">Roxana Campos</p>
<p className="text-xs text-slate-500">Gerente Financiera • Pura Vida Café</p>
</div>
</figcaption>
</figure>
<figure className="relative p-8 bg-white rounded-3xl shadow-lg border border-slate-200 hover:shadow-xl transition" data-aos="fade-left" data-aos-delay="100">
<blockquote className="text-slate-700 text-lg leading-relaxed">
            “La integración bancaria fue facilísima. Ahora invertimos ese tiempo en mejorar la experiencia de nuestros clientes.”
          </blockquote>
<figcaption className="mt-8 flex items-center gap-4">
<img alt="Daniel Rojas" className="w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&amp;fit=crop&amp;w=64&amp;q=80"/>
<div>
<p className="font-medium">Daniel Rojas</p>
<p className="text-xs text-slate-500">CEO • Jungle Tech</p>
</div>
</figcaption>
</figure>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="pricing">
<div className="max-w-6xl mx-auto px-6 lg:px-10 space-y-16">
<div className="text-center space-y-6" data-aos="fade-up">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Planes transparentes</h2>
<p className="text-slate-600">Solo paga por lo que necesitas, sin contratos largos.</p>
</div>

<div className="flex justify-center" data-aos="fade-up" data-aos-delay="50">
<button aria-label="Cambiar facturación" className="relative inline-flex items-center rounded-full p-1 bg-slate-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-600" id="billingToggle">
<span className="px-5 py-1.5 text-sm font-medium transition-colors" id="labelMonthly">Mensual</span>
<span className="px-5 py-1.5 text-sm font-medium text-slate-500 transition-colors" id="labelYearly">Anual</span>
<span className="absolute left-0.5 top-0.5 w-1/2 h-[calc(100%-4px)] bg-white rounded-full shadow transition-transform" id="toggleThumb"></span>
</button>
</div>

<div className="grid md:grid-cols-3 gap-12 pt-10" id="pricingGrid"></div>
</div>
</section>

<section className="py-24" id="faq">
<div className="max-w-5xl mx-auto px-6 lg:px-10 space-y-16">
<div className="text-center space-y-6" data-aos="fade-up">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Preguntas frecuentes</h2>
</div>
<div className="space-y-6">
<details className="group p-6 bg-white rounded-xl shadow border border-slate-200" data-aos="fade-up">
<summary className="flex items-center justify-between cursor-pointer list-none">
<span className="font-medium">¿Cuánto dura la prueba gratis?</span>
<i className="w-4 h-4 transition-transform group-open:rotate-180" data-lucide="chevron-down"></i>
</summary>
<p className="mt-4 text-sm text-slate-600">La prueba dura 30 días con acceso a todas las funcionalidades.</p>
</details>
<details className="group p-6 bg-white rounded-xl shadow border border-slate-200" data-aos="fade-up" data-aos-delay="50">
<summary className="flex items-center justify-between cursor-pointer list-none">
<span className="font-medium">¿Necesito ingresar tarjeta?</span>
<i className="w-4 h-4 transition-transform group-open:rotate-180" data-lucide="chevron-down"></i>
</summary>
<p className="mt-4 text-sm text-slate-600">No pedimos tarjeta para la prueba. Solo cuando decidas suscribirte.</p>
</details>
<details className="group p-6 bg-white rounded-xl shadow border border-slate-200" data-aos="fade-up" data-aos-delay="100">
<summary className="flex items-center justify-between cursor-pointer list-none">
<span className="font-medium">¿Puedo cancelar en cualquier momento?</span>
<i className="w-4 h-4 transition-transform group-open:rotate-180" data-lucide="chevron-down"></i>
</summary>
<p className="mt-4 text-sm text-slate-600">Sí. No existen contratos de permanencia ni penalidades.</p>
</details>
</div>
</div>
</section>

<section className="py-24">
<div className="relative max-w-6xl mx-auto px-6 lg:px-10">
<div className="absolute inset-0 bg-sky-500/20 rounded-3xl blur-3xl -z-10"></div>
<div className="p-12 md:p-20 bg-gradient-to-br from-white via-white to-slate-50 rounded-3xl shadow-2xl border border-slate-200 text-center space-y-10" data-aos="zoom-in">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Empieza a simplificar tu nómina hoy</h2>
<p className="max-w-xl mx-auto text-slate-600">Crea tu cuenta en menos de 2 minutos y descubre por qué tantas empresas nos eligen.</p>
<a className="inline-flex items-center justify-center gap-2 bg-sky-600 hover:bg-sky-700 text-white text-sm font-medium px-8 py-4 rounded-md shadow transition hover:-translate-y-0.5" href="#">
          Crear cuenta gratis <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</section>
</main>

<footer className="border-t border-slate-200 py-12 bg-white">
<div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row gap-8 justify-between">
<div className="flex flex-col gap-4">
<a className="flex items-center gap-3" href="#">
<span className="inline-flex justify-center items-center w-9 h-9 rounded-full bg-sky-500 text-white shadow-inner">
<i className="w-4 h-4" data-lucide="zap"></i>
</span>
<span className="text-lg font-semibold tracking-tight">PlanillaCR</span>
</a>
<p className="text-sm text-slate-600 max-w-xs">Software de nómina moderno para empresas en Costa Rica.</p>
</div>
<div className="grid grid-cols-2 lg:grid-cols-4 gap-10 text-sm">
<div className="space-y-3">
<p className="font-medium text-slate-800">Producto</p>
<ul className="space-y-2">
<li><a className="hover:text-sky-600" href="#features">Características</a></li>
<li><a className="hover:text-sky-600" href="#pricing">Precios</a></li>
<li><a className="hover:text-sky-600" href="#faq">FAQ</a></li>
</ul>
</div>
<div className="space-y-3">
<p className="font-medium text-slate-800">Empresa</p>
<ul className="space-y-2">
<li><a className="hover:text-sky-600" href="#">Sobre nosotros</a></li>
<li><a className="hover:text-sky-600" href="#">Blog</a></li>
<li><a className="hover:text-sky-600" href="#">Carreras</a></li>
</ul>
</div>
<div className="space-y-3">
<p className="font-medium text-slate-800">Recursos</p>
<ul className="space-y-2">
<li><a className="hover:text-sky-600" href="#">Guías</a></li>
<li><a className="hover:text-sky-600" href="#">Webinars</a></li>
<li><a className="hover:text-sky-600" href="#">Status</a></li>
</ul>
</div>
<div className="space-y-3">
<p className="font-medium text-slate-800">Legal</p>
<ul className="space-y-2">
<li><a className="hover:text-sky-600" href="#">Términos</a></li>
<li><a className="hover:text-sky-600" href="#">Privacidad</a></li>
<li><a className="hover:text-sky-600" href="#">Cookies</a></li>
</ul>
</div>
</div>
</div>
</footer>



    </>
  );
}
