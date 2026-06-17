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
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      const observer = new IntersectionObserver((entries) => { entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.remove('opacity-0'); entry.target.classList.add('reveal-active'); observer.unobserve(entry.target); } }); }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
      document.querySelectorAll('.step-panel').forEach(el => { if (el.classList.contains('opacity-0')) { observer.observe(el); } });
      window.addEventListener('scroll', () => { const scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100; const progressBar = document.getElementById('progress-bar'); if (progressBar) progressBar.style.width = scrollPercent + '%'; });
      // Smooth Scroll for Anchors
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
          anchor.addEventListener('click', function (e) {
              e.preventDefault();
              document.querySelector(this.getAttribute('href')).scrollIntoView({
                  behavior: 'smooth'
              });
          });
      });
    


      !function(){const e=document.getElementById("particles-canvas"),t=e.getContext("2d");let a=[];function n(){e.width=window.innerWidth,e.height=window.innerHeight}window.addEventListener("resize",n),n();class i{constructor(){this.reset()}reset(){this.x=Math.random()*e.width,this.y=Math.random()*e.height,this.size=1.5*Math.random()+.5,this.speedY=Math.random()*0.4+.1,this.opacity=Math.random()*.5+.1,this.color=`rgba(148, 163, 184, ${this.opacity})`}update(){this.y-=this.speedY,this.y<0&&this.reset()}draw(){t.fillStyle=this.color,t.beginPath(),t.arc(this.x,this.y,this.size,0,2*Math.PI),t.fill()}}!function(){for(let e=0;e<80;e++)a.push(new i)}();!function n(){t.clearRect(0,0,e.width,e.height),a.forEach(e=>{e.update(),e.draw()}),requestAnimationFrame(n)}();const s=document.getElementById("vertical-progress-bar");window.addEventListener("scroll",()=>{if(!s)return;const e=document.documentElement.scrollHeight-window.innerHeight,t=Math.min(window.scrollY/e,1);s.style.transform=`scaleY(${t})`})}();
    
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
      

<div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
<div className="absolute top-[-20%] left-[-20%] w-[70%] h-[70%] bg-blue-600/20 rounded-full blur-[100px] animate-float mix-blend-multiply"></div>
<div className="absolute top-[10%] right-[-10%] w-[60%] h-[60%] bg-cyan-500/20 rounded-full blur-[100px] animate-float-delayed mix-blend-multiply"></div>
<div className="absolute bottom-[-20%] left-[10%] w-[60%] h-[60%] bg-indigo-600/20 rounded-full blur-[100px] opacity-60 animate-pulse mix-blend-multiply"></div>
<canvas className="absolute inset-0 w-full h-full opacity-100 mix-blend-screen pointer-events-none" id="particles-canvas"></canvas>
<div className="absolute inset-0 flex justify-center">
<div className="w-1.5 h-full bg-slate-900/5 relative">
<div className="absolute top-0 left-0 w-full bg-gradient-to-b from-cyan-400 via-blue-600 to-indigo-700 origin-top scale-y-0 transition-transform duration-75 ease-linear h-full shadow-[0_0_30px_6px_rgba(59,130,246,0.8)]" id="vertical-progress-bar">
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-48 bg-gradient-to-t from-white via-cyan-400 to-transparent blur-xl opacity-90"></div>
</div>
</div>
</div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-slate-200/60 bg-white/80 backdrop-blur-md transition-all duration-500">
<div className="max-w-2xl mx-auto px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-6 h-6 bg-slate-900 rounded-md flex items-center justify-center text-white">
<span className="iconify" data-icon="lucide:activity" data-width="14"></span>
</div>
<span className="font-semibold text-xs tracking-tight text-slate-900">
            TRANSFORMACIÓN
          </span>
</div>
<div className="flex items-center gap-3">
<span className="text-[10px] font-medium text-slate-400 uppercase tracking-wider" id="progress-text">
            TU CAMINO
          </span>
<div className="w-24 h-1 bg-slate-100 rounded-full overflow-hidden">
<div className="h-full w-0 transition-all duration-700 ease-out rounded-full bg-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.6)]" id="progress-bar"></div>
</div>
</div>
</div>
</nav>

<main className="relative z-10 pt-32 pb-24 px-6 mx-auto min-h-screen flex flex-col max-w-3xl">
<div className="step-panel reveal-active min-h-screen flex items-center justify-center p-6 relative z-10" id="hero">
<div className="glass-strong glow-blue rounded-3xl p-8 max-w-3xl mx-auto w-full text-center space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-100 bg-blue-50/50 text-blue-700">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
<span className="text-[11px] font-medium tracking-wide uppercase">
              Paso 1 de 5 – Tu camino hasta la primera visita
            </span>
</div>
<h1 className="text-4xl sm:text-6xl font-semibold text-slate-900 leading-[0.95] tracking-tight">
            ¿Buscas una iglesia en Barcelona donde tu vida pueda ser
            <span className="text-orange-500">transformada?</span>
</h1>
<p className="text-lg text-slate-600 font-medium max-w-lg mx-auto">
            Iglesia Pentecostal Transformación – En Carrer d’Alella 33, Metro
            Fabra i Puig. Te esperamos este domingo a las 11:00.
          </p>
<div className="max-w-prose mx-auto text-slate-500 space-y-4 text-sm leading-relaxed">
<p>
              Somos una iglesia cristiana pentecostal que cree en la Unicidad de
              Dios y en el poder del nombre de Jesús. Un lugar de encuentro
              donde la fe se vive con pasión.
            </p>
<p>
              Nuestras puertas están abiertas para familias, jóvenes, personas
              nuevas en la fe o aquellos que se han alejado y desean volver a
              casa. Aquí encontrarás tu lugar.
            </p>
<p>
              Esta página está diseñada para acompañarte paso a paso hasta que
              te animes a visitarnos un domingo.
            </p>
</div>
<div className="pt-4">
<a className="bg-primary text-primary-foreground rounded-full px-6 py-3 inline-flex items-center gap-2 shadow-lg shadow-blue-900/10 transition-all hover:scale-[1.02]" href="#step-1">
<span className="font-medium tracking-tight">Empezar mi camino</span>
<span className="iconify" data-icon="lucide:arrow-down" data-width="16"></span>
</a>
</div>
</div>
</div>
<div className="step-panel py-20 border-t border-slate-100 opacity-0" id="step-1">
<div className="space-y-8 glass-card">
<div className="flex items-center gap-2 text-orange-600">
<span className="iconify" data-icon="lucide:map" data-width="18"></span>
<span className="text-xs font-semibold uppercase tracking-widest">
              Paso 1/5
            </span>
</div>
<h2 className="text-3xl font-semibold text-slate-900 tracking-tighter">
            Descubre Iglesia Pentecostal Transformación
          </h2>
<div className="prose prose-slate prose-sm text-slate-500 leading-relaxed">
<p>
              Nacimos con el propósito de ser luz en Barcelona. "Transformación"
              no es solo un nombre; es nuestra identidad. Creemos que el
              Evangelio tiene el poder de cambiar realidades, restaurar familias
              y dar nuevo sentido a cada vida.
            </p>
<p>
              Creemos firmemente que ninguna vida está demasiado rota para que
              Dios la restaure. No importa tu pasado, tu origen o tus errores;
              Dios tiene un plan perfecto para ti.
            </p>
<p>
              Cada domingo nos reunimos para adorar juntos, escuchar la Palabra
              de Dios y orar unos por otros en un ambiente de libertad.
            </p>
</div>
<div className="bg-blue-50/50 rounded-2xl p-6 border border-blue-100">
<h3 className="font-semibold text-blue-900 mb-4 text-sm">
              Lo que encontrarás si vienes un domingo:
            </h3>
<ul className="space-y-3">
<li className="flex items-start gap-3">
<span className="iconify text-orange-500 mt-0.5" data-icon="lucide:check-circle-2" data-width="16"></span>
<span className="text-sm text-slate-600">
                  Alabanza con corazón y pasión.
                </span>
</li>
<li className="flex items-start gap-3">
<span className="iconify text-orange-500 mt-0.5" data-icon="lucide:check-circle-2" data-width="16"></span>
<span className="text-sm text-slate-600">
                  Predicación bíblica y práctica para tu vida.
                </span>
</li>
<li className="flex items-start gap-3">
<span className="iconify text-orange-500 mt-0.5" data-icon="lucide:check-circle-2" data-width="16"></span>
<span className="text-sm text-slate-600">
                  Personas que oran contigo y por ti.
                </span>
</li>
<li className="flex items-start gap-3">
<span className="iconify text-orange-500 mt-0.5" data-icon="lucide:check-circle-2" data-width="16"></span>
<span className="text-sm text-slate-600">
                  Ambiente familiar donde te llaman por tu nombre.
                </span>
</li>
</ul>
</div>
<div>
<a className="group inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors" href="#step-2">
              Vale, quiero saber qué creen
              <span className="iconify ml-2 group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
</div>
</div>
</div>
<div className="step-panel py-20 border-t border-slate-100 opacity-0" id="step-2">
<div className="space-y-8 glass-card">
<div className="flex items-center gap-2 text-orange-600">
<span className="iconify" data-icon="lucide:book-open" data-width="18"></span>
<span className="text-xs font-semibold uppercase tracking-widest">
              Paso 2/5
            </span>
</div>
<h2 className="text-3xl font-semibold text-slate-900 tracking-tighter">
            Lo que creemos
          </h2>
<div className="grid gap-6">
<div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
<h3 className="font-semibold text-slate-900 mb-2">Un solo Dios</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                Creemos en un solo Dios que se ha revelado al mundo en
                Jesucristo. Jesús es el único Señor y Salvador.
              </p>
<p className="text-xs text-slate-400 mt-2 font-mono bg-slate-50 inline-block px-2 py-1 rounded">
                Deuteronomio 6:4
              </p>
</div>
<div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
<h3 className="font-semibold text-slate-900 mb-2">
                El Plan de Salvación
              </h3>
<p className="text-sm text-slate-500 leading-relaxed">
                Creemos en la importancia del arrepentimiento, el bautismo en
                agua en el nombre de Jesús y recibir el don del Espíritu Santo.
              </p>
<p className="text-xs text-slate-400 mt-2 font-mono bg-slate-50 inline-block px-2 py-1 rounded">
                Hechos 2:38
              </p>
</div>
<div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
<h3 className="font-semibold text-slate-900 mb-2">
                Vida Transformada
              </h3>
<p className="text-sm text-slate-500 leading-relaxed">
                La Biblia no es un libro antiguo, es nuestra guía diaria. Todo
                esto no es teoría; es la base de la transformación que vivimos.
              </p>
</div>
</div>
<div>
<a className="group inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors" href="#step-3">
              Quiero ver cómo es un domingo
              <span className="iconify ml-2 group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
</div>
</div>
</div>
<div className="step-panel py-20 border-t border-slate-100 opacity-0" id="step-3">
<div className="space-y-8 glass-card">
<div className="flex items-center gap-2 text-orange-600">
<span className="iconify" data-icon="lucide:calendar" data-width="18"></span>
<span className="text-xs font-semibold uppercase tracking-widest">
              Paso 3/5
            </span>
</div>
<h2 className="text-3xl font-semibold text-slate-900 tracking-tighter">
            Tu experiencia de domingo
          </h2>
<div className="prose prose-slate prose-sm text-slate-500 leading-relaxed">
<p>
              Si llegas antes de las 11:00, encontrarás un ambiente de
              expectación. Nuestro equipo de bienvenida te recibirá en la puerta
              con una sonrisa y te ayudará a encontrar el mejor asiento.
            </p>
<p>
              Disfrutamos de un tiempo de música vibrante y adoración, seguido
              de una predicación que conecta la Biblia con tu realidad actual.
              Al finalizar, siempre hay un espacio para la oración personal.
            </p>
</div>
<div className="relative pl-6 border-l-2 border-orange-200 space-y-6 my-8">
<div className="relative">
<span className="absolute -left-[29px] top-1 h-3 w-3 rounded-full border-2 border-white bg-orange-400"></span>
<p className="text-xs font-bold text-orange-600">09:30</p>
<p className="text-sm font-medium text-slate-800">
                Discipulado y grupos de crecimiento
              </p>
</div>
<div className="relative">
<span className="absolute -left-[29px] top-1 h-3 w-3 rounded-full border-2 border-white bg-orange-400"></span>
<p className="text-xs font-bold text-orange-600">10:00</p>
<p className="text-sm font-medium text-slate-800">
                Tiempo de Oración
              </p>
</div>
<div className="relative">
<span className="absolute -left-[31px] top-0 h-4 w-4 rounded-full border-2 border-white bg-blue-600 shadow-md"></span>
<p className="text-xs font-bold text-blue-600">11:00</p>
<p className="text-base font-semibold text-slate-900">
                Servicio General de Adoración
              </p>
<p className="text-xs text-slate-400 mt-1">
                El momento central de nuestra semana.
              </p>
</div>
</div>
<p className="text-sm font-medium text-slate-700 bg-slate-50 p-4 rounded-xl border border-slate-100">
            No tienes que saber nada ni hacer nada especial: solo ven como eres,
            nosotros nos encargamos del resto.
          </p>
<div>
<a className="group inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors" href="#step-4">
              Quiero saber si esto es para mí
              <span className="iconify ml-2 group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
</div>
</div>
</div>
<div className="step-panel py-20 border-t border-slate-100 opacity-0" id="step-4">
<div className="space-y-8 glass-card">
<div className="flex items-center gap-2 text-orange-600">
<span className="iconify" data-icon="lucide:users" data-width="18"></span>
<span className="text-xs font-semibold uppercase tracking-widest">
              Paso 4/5
            </span>
</div>
<h2 className="text-3xl font-semibold text-slate-900 tracking-tighter">
            Historias reales en Barcelona
          </h2>
<div className="grid gap-4">

<div className="p-5 bg-white rounded-2xl shadow-sm border border-slate-100">
<div className="flex items-center gap-3 mb-3">
<div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs">
                  J
                </div>
<div>
<p className="text-sm font-semibold text-slate-900">Javier</p>
<p className="text-[10px] text-slate-400 uppercase tracking-wide">
                    Restauración
                  </p>
</div>
</div>
<p className="text-xs text-slate-500 leading-relaxed">
                "Llegué vacío y sin propósito. En mi primera visita sentí una
                paz que no podía explicar. Hoy mi vida tiene un rumbo y una
                familia que me apoya."
              </p>
</div>

<div className="p-5 bg-white rounded-2xl shadow-sm border border-slate-100">
<div className="flex items-center gap-3 mb-3">
<div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold text-xs">
                  M
                </div>
<div>
<p className="text-sm font-semibold text-slate-900">
                    Marta y Carlos
                  </p>
<p className="text-[10px] text-slate-400 uppercase tracking-wide">
                    Familia
                  </p>
</div>
</div>
<p className="text-xs text-slate-500 leading-relaxed">
                "Nuestro matrimonio estaba pasando un momento difícil. En
                Transformación encontramos herramientas y oración que nos
                unieron de nuevo."
              </p>
</div>

<div className="p-5 bg-white rounded-2xl shadow-sm border border-slate-100">
<div className="flex items-center gap-3 mb-3">
<div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 font-bold text-xs">
                  S
                </div>
<div>
<p className="text-sm font-semibold text-slate-900">Sergio</p>
<p className="text-[10px] text-slate-400 uppercase tracking-wide">
                    Jóvenes
                  </p>
</div>
</div>
<p className="text-xs text-slate-500 leading-relaxed">
                "Buscaba identidad y amigos sanos. Aquí no soy un número, soy
                parte de algo grande."
              </p>
</div>
</div>
<div>
<a className="group inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors" href="#step-5">
              Quiero vivir mi propia historia
              <span className="iconify ml-2 group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
</div>
</div>
</div>
<div className="step-panel py-20 border-t border-slate-100 opacity-0" id="step-5">
<div className="space-y-8 glass-card">
<div className="flex items-center gap-2 text-orange-600">
<span className="iconify" data-icon="lucide:check-circle" data-width="18"></span>
<span className="text-xs font-semibold uppercase tracking-widest">
              Paso 5/5
            </span>
</div>
<h2 className="text-3xl font-semibold text-slate-900 tracking-tighter">
            Planifica tu primera visita
          </h2>
<p className="text-sm text-slate-500 leading-relaxed">
            Ya sabes quiénes somos y qué creemos. Ahora solo falta dar el paso.
            Al rellenar el formulario, alguien de nuestro equipo te escribirá
            por WhatsApp para saludarte y resolver cualquier duda. Estaremos
            orando por ti antes de que llegues.
          </p>
<div className="bg-slate-50 rounded-xl p-5 border border-slate-100">
<p className="text-xs font-semibold text-slate-700 uppercase tracking-wide mb-3">
              Qué incluye tu visita:
            </p>
<ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
<li className="flex items-center gap-2 text-xs text-slate-600">
<span className="iconify text-green-500" data-icon="lucide:check" data-width="14"></span>
                Bienvenida personal
              </li>
<li className="flex items-center gap-2 text-xs text-slate-600">
<span className="iconify text-green-500" data-icon="lucide:check" data-width="14"></span>
                Ayuda con asientos
              </li>
<li className="flex items-center gap-2 text-xs text-slate-600">
<span className="iconify text-green-500" data-icon="lucide:check" data-width="14"></span>
                Atención para niños
              </li>
<li className="flex items-center gap-2 text-xs text-slate-600">
<span className="iconify text-green-500" data-icon="lucide:check" data-width="14"></span>
                No estarás solo
              </li>
</ul>
</div>
<div className="space-y-3 pt-4">
<a className="flex items-center justify-center gap-3 w-full bg-slate-900 hover:bg-slate-800 text-white p-4 rounded-xl shadow-xl shadow-slate-900/10 transition-transform hover:scale-[1.02]" href="https://wa.me/34600000000">
<span className="font-semibold text-sm tracking-wide">
                Planificar mi primera visita este domingo
              </span>
<span className="iconify" data-icon="lucide:arrow-right-circle" data-width="18"></span>
</a>
<a className="flex items-center justify-center gap-2 w-full bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 p-3 rounded-xl font-medium text-sm transition-colors" href="https://maps.google.com/?q=Carrer+d'Alella+33+Barcelona" target="_blank">
<span className="iconify" data-icon="lucide:map-pin" data-width="16"></span>
              Ver cómo llegar
            </a>
</div>
</div>
</div>
<div className="step-panel py-16 border-t border-slate-100 opacity-0 bg-slate-50 -mx-6 px-6" id="info">
<div className="max-w-2xl mx-auto space-y-10">
<div className="text-center space-y-2">
<h3 className="font-semibold text-slate-900">
              Iglesia Pentecostal Transformación
            </h3>
<p className="text-sm text-slate-500">
              Carrer d’Alella 33, 08016 Barcelona (Metro Fabra i Puig)
            </p>
<p className="text-sm font-medium text-blue-600">
              Servicio principal: Domingo 11:00h
            </p>
</div>
<div className="space-y-3">
<details className="group bg-white rounded-xl border border-slate-200 overflow-hidden">
<summary className="flex cursor-pointer items-center justify-between p-4 font-medium text-slate-900 text-sm">
                ¿Cómo debo ir vestido?
                <span className="transition group-open:rotate-180">
<span className="iconify" data-icon="lucide:chevron-down" data-width="16"></span>
</span>
</summary>
<div className="px-4 pb-4 text-xs text-slate-500 leading-relaxed">
                Ven como te sientas cómodo. No hay código de vestimenta. Lo
                importante eres tú.
              </div>
</details>
<details className="group bg-white rounded-xl border border-slate-200 overflow-hidden">
<summary className="flex cursor-pointer items-center justify-between p-4 font-medium text-slate-900 text-sm">
                ¿Qué pasa con mis hijos?
                <span className="transition group-open:rotate-180">
<span className="iconify" data-icon="lucide:chevron-down" data-width="16"></span>
</span>
</summary>
<div className="px-4 pb-4 text-xs text-slate-500 leading-relaxed">
                Amamos a los niños. Tenemos un espacio preparado para ellos
                donde aprenderán y se divertirán seguros.
              </div>
</details>
<details className="group bg-white rounded-xl border border-slate-200 overflow-hidden">
<summary className="flex cursor-pointer items-center justify-between p-4 font-medium text-slate-900 text-sm">
                ¿Hay que pagar algo?
                <span className="transition group-open:rotate-180">
<span className="iconify" data-icon="lucide:chevron-down" data-width="16"></span>
</span>
</summary>
<div className="px-4 pb-4 text-xs text-slate-500 leading-relaxed">
                Absolutamente no. La entrada es libre y no se requiere ninguna
                donación ni inscripción.
              </div>
</details>
<details className="group bg-white rounded-xl border border-slate-200 overflow-hidden">
<summary className="flex cursor-pointer items-center justify-between p-4 font-medium text-slate-900 text-sm">
                ¿Puedo ir si nunca he ido a una iglesia?
                <span className="transition group-open:rotate-180">
<span className="iconify" data-icon="lucide:chevron-down" data-width="16"></span>
</span>
</summary>
<div className="px-4 pb-4 text-xs text-slate-500 leading-relaxed">
                ¡Por supuesto! Somos una iglesia para todos, especialmente para
                quienes buscan respuestas por primera vez.
              </div>
</details>
</div>
<div className="text-center space-y-6">
<a className="inline-flex items-center gap-2 text-green-600 bg-green-50 px-4 py-2 rounded-full border border-green-100 font-medium text-sm hover:bg-green-100 transition-colors" href="https://wa.me/34600000000">
<span className="iconify" data-icon="lucide:message-circle" data-width="16"></span>
              Escríbenos por WhatsApp
            </a>
<div className="flex justify-center gap-4 text-slate-400">
<a className="hover:text-blue-600 transition-colors" href="#">
<span className="iconify" data-icon="lucide:facebook" data-width="20"></span>
</a>
<a className="hover:text-pink-600 transition-colors" href="#">
<span className="iconify" data-icon="lucide:instagram" data-width="20"></span>
</a>
</div>
<p className="text-xs text-slate-400 max-w-xs mx-auto">
              El siguiente paso lo decides tú. Nosotros ya estamos orando por tu
              vida y por lo que Dios quiere hacer en Barcelona.
            </p>
</div>
</div>
</div>
</main>



    </>
  );
}
