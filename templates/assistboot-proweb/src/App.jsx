import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



  lucide.createIcons();

  const form = document.getElementById('contactForm');
  const checkbox = document.getElementById('rgpd-consent');
  const submitBtn = document.getElementById('submitBtn');
  const successMessage = document.getElementById('successMessage');

  // Aktywacja przycisku po zaznaczeniu zgody
  checkbox.addEventListener('change', function () {
    if (this.checked) {
      submitBtn.disabled = false;
      submitBtn.classList.remove('bg-slate-800', 'text-slate-500', 'cursor-not-allowed');
      submitBtn.classList.add('bg-white', 'text-slate-950', 'hover:bg-indigo-50', 'cursor-pointer', 'shadow-lg', 'shadow-indigo-500/20');
    } else {
      submitBtn.disabled = true;
      submitBtn.classList.add('bg-slate-800', 'text-slate-500', 'cursor-not-allowed');
      submitBtn.classList.remove('bg-white', 'text-slate-950', 'hover:bg-indigo-50', 'cursor-pointer', 'shadow-lg', 'shadow-indigo-500/20');
    }
  });

  // Tryb 1: przekierowanie na stronę FormSubmit (najprostszy)
  // Wtedy NIE robisz preventDefault, formularz po prostu się wysyła
  // i FormSubmit wyświetla swoją stronę „Gracias”.
  // Nic więcej tu NIE dodawaj i usuń successMessage z JS.

  // ALBO tryb 2: AJAX + overlay u Ciebie (bez przekierowania):
  // odkomentuj poniższy blok i ZAKOMENTUJ atrybut action w formularzu,
  // albo ustaw action na "#" i wyślij fetch na formsubmit.co ręcznie.
  /*
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = new FormData(form);

    fetch('https://formsubmit.co/ajax/grubleswas@gmail.com', {
      method: 'POST',
      body: formData
    })
    .then(res => {
      if (res.ok) {
        successMessage.classList.remove('hidden');
      } else {
        alert('Wystąpił błąd podczas wysyłki formularza.');
      }
    })
    .catch(() => {
      alert('Wystąpił błąd podczas wysyłki formularza.');
    });
  });
  */

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-slate-950/80 backdrop-blur-md">
<div className="flex h-16 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<div className="flex items-center gap-2">
<div className="bg-indigo-600 rounded p-1">
<svg className="lucide lucide-bot w-5 h-5 text-white" data-lucide="bot" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>
</div>
<span className="text-lg font-semibold tracking-tighter text-white">Assistboot</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="hover:text-white transition-colors duration-200" href="#about">Quiénes Somos</a>
<a className="hover:text-white transition-colors duration-200" href="#testimonials">Clientes</a>
<a className="hover:bg-white/15 transition-all duration-200 text-white bg-white/10 border-white/5 border rounded-full pt-2 pr-4 pb-2 pl-4" href="#contact">
                    Contactar
                </a>
</div>
</div>
</nav>

<section className="md:pt-48 md:pb-32 overflow-hidden pt-32 pb-32 relative">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full hero-glow -z-10 pointer-events-none"></div>
<div className="text-xl tracking-tighter text-center max-w-7xl z-10 mr-auto ml-auto pr-6 pl-6 relative">
<div className="inline-flex gap-2 text-xs font-medium text-indigo-300 bg-indigo-500/10 border-indigo-500/20 border rounded-full mb-8 pt-1 pr-3 pb-1 pl-3 gap-x-2 gap-y-2 items-center">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
    Nueva generación de IA
  </div>
<h1 className="md:text-7xl leading-[1.1] text-5xl font-semibold text-white tracking-tight mb-6">Nueva generación <br className="hidden md:block"/>
<span className="gradient-text"> de asistentes de IA para tu e‑commerce.</span>
</h1>
<p className="leading-relaxed md:text-xl text-lg font-light text-slate-400 max-w-2xl mr-auto mb-10 ml-auto">Automatiza la
    atención y las ventas de tu tienda online 24/7 sin aumentar tu equipo.<br/>Resuelve hasta el 80% de las consultas repetitivas, recomienda productos y convierte más visitas en pedidos en segundos.
  </p><p className="leading-relaxed md:text-lg text-lg font-thin text-slate-400 text-left max-w-2xl mr-auto mb-10 ml-auto">1 -Más ventas:
  recomendaciones personalizadas y recuperación de carritos abandonados. <br/>
  2 -Menos costes: menos tickets manuales para tu equipo de soporte.<br/>
  3 -Implementación rápida: integración con tu tienda y canales de soporte en pocos días.
</p>
<ul className="text-slate-300 text-sm md:text-base space-y-1 max-w-2xl mx-auto mb-8 text-8eft">
</ul>
<div className="flex flex-col sm:flex-row gap-x-4 gap-y-4 items-center justify-center">
<a className="sm:w-auto hover:bg-indigo-50 transition-colors duration-200 font-medium text-slate-950 bg-white w-full rounded-full pt-3.5 pr-8 pb-3.5 pl-8 shadow-[0_0_20px_rgba(255,255,255,0.3)]" href="/#contact">
      Solicitar Demo
    </a>
<a className="sm:w-auto hover:bg-slate-800 transition-colors duration-200 font-medium text-white bg-slate-900 w-full border-slate-800 border rounded-full pt-3.5 pr-8 pb-3.5 pl-8" href="#about">Ver cómo funciona</a>
</div>

<div className="mt-20 relative max-w-4xl mx-auto">
<div className="glass-panel rounded-xl p-1 md:p-2 shadow-2xl shadow-indigo-500/10">
<div className="bg-slate-950 rounded-lg overflow-hidden border border-white/5 aspect-[16/9] flex items-center justify-center relative">

<div className="absolute top-4 left-4 flex items-center gap-2 bg-slate-900/70 border border-white/10 rounded-full px-3 py-1 text-xs text-slate-300 z-20">
<span className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-600">
<svg className="lucide lucide-bot w-3.5 h-3.5 text-white" data-lucide="bot" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>
</span>
<span>Asistente de IA en acción</span>
</div>
<div className="bg-center bg-[conic-gradient(from_180deg,var(--tw-gradient-stops))] from-white/10 to-white/0 opacity-20 mix-blend-overlay bg-[url('https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&amp;w=2000&amp;auto=format&amp;fit=crop')] bg-cover absolute top-0 right-0 bottom-0 left-0"></div>
<div className="relative z-10 w-full max-w-md p-6">

<div className="bg-center bg-[conic-gradient(from_180deg,var(--tw-gradient-stops))] from-white/10 to-white/0 opacity-20 mix-blend-overlay bg-[url('https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&amp;w=2000&amp;auto=format&amp;fit=crop')] bg-cover absolute top-0 right-0 bottom-0 left-0">
</div>
<div className="z-10 w-full max-w-md pt-6 pr-6 pb-6 pl-6 relative">
<style>
            @keyframes msgPop {
              0% {
                opacity: 0;
                transform: translateY(10px) scale(0.95);
              }

              100% {
                opacity: 1;
                transform: translateY(0) scale(1);
              }
            }

            .msg-anim {
              animation: msgPop 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards !important;
              opacity: 0;
            }
          </style>
<div className="space-y-5">

<div className="flex gap-4 msg-anim gap-x-4 gap-y-4 items-start" style={{animationDelay: '0.1s !important'}}>
<div className="flex bg-indigo-500/20 w-12 h-12 border-indigo-500/30 border rounded-full items-center justify-center shrink-0">
<svg className="lucide lucide-bot w-6 h-6 text-indigo-300" data-lucide="bot" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>
</div>
<div className="bg-slate-800/50 border border-white/5 rounded-2xl rounded-tl-none p-4 text-sm text-slate-300 shadow-sm">
                Hola, veo que estás interesado en las zapatillas deportivas. ¿Te gustaría ver los modelos en oferta con
                envío en 24h?
              </div>
</div>

<div className="flex items-start gap-4 flex-row-reverse msg-anim" style={{animationDelay: '1.2s !important'}}>
<div className="w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center shrink-0 border border-slate-600">
<svg className="lucide lucide-user w-6 h-6 text-slate-400" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
</div>
<div className="bg-indigo-600/20 border border-indigo-500/20 rounded-2xl rounded-tr-none p-4 text-sm text-indigo-100 shadow-sm">
                Sí, busco algo para running, talla 42.
              </div>
</div>

<div className="flex items-start gap-4 msg-anim" style={{animationDelay: '2.4s !important'}}>
<div className="flex bg-indigo-500/20 w-12 h-12 border-indigo-500/30 border rounded-full items-center justify-center shrink-0">
<svg className="lucide lucide-bot w-6 h-6 text-indigo-300" data-lucide="bot" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>
</div>
<div className="bg-slate-800/50 border border-white/5 rounded-2xl rounded-tl-none p-4 text-sm text-slate-300 flex flex-col gap-3 shadow-sm">
<span className="">¡Perfecto! Aquí tienes 3 opciones top ventas en talla 42.</span>
<div className="flex text-center mt-1 gap-x-2.5 gap-y-2.5">
<div className="relative w-14 h-14 rounded-lg overflow-hidden border border-white/10 group cursor-pointer hover:ring-2 hover:ring-indigo-500 transition-all">
<img alt="Zapatillas running coloridas" className="transform transition-transform duration-300 group-hover:scale-110 w-full h-full object-cover" src="https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&amp;fit=crop&amp;q=80&amp;w=150&amp;h=150"/>
</div>
<div className="relative w-14 h-14 rounded-lg overflow-hidden border border-white/10 group cursor-pointer hover:ring-2 hover:ring-indigo-500 transition-all">
<img alt="Zapatillas running azules" className="transform transition-transform duration-300 group-hover:scale-110 w-full h-full object-cover" src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&amp;fit=crop&amp;q=80&amp;w=150&amp;h=150"/>
</div>
<div className="relative w-14 h-14 rounded-lg overflow-hidden border border-white/10 group cursor-pointer hover:ring-2 hover:ring-indigo-500 transition-all">
<img alt="Zapatillas running modernas" className="transform transition-transform duration-300 group-hover:scale-110 w-full h-full object-cover" src="https://images.unsplash.com/photo-1562183241-b937e95585b6?auto=format&amp;fit=crop&amp;q=80&amp;w=150&amp;h=150"/>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div></section>

<section className="bg-slate-950 border-white/5 border-t pt-24 pb-24 relative" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div className="">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-6">
                        Automatización que <br/> <span className="text-indigo-400">escala tu negocio.</span>
</h2>
<div className="space-y-6 text-slate-400">
<p className="">
                            En Assistboot, nos dedicamos a democratizar la inteligencia artificial para pymes de e-commerce. Entendemos que la atención al cliente no duerme, pero tu equipo sí debería.
                        </p>
<p className="">
                            Nuestra tecnología se integra silenciosamente en tu tienda online, aprendiendo de tu catálogo y políticas para ofrecer respuestas precisas, gestionar devoluciones y, lo más importante, cerrar ventas cuando tú no estás presente.
                        </p>
</div>
<div className="mt-8 grid grid-cols-2 gap-4">
<div className="glass-panel p-4 rounded-xl">
<svg className="lucide lucide-clock w-6 h-6 text-indigo-400 mb-3" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
<h4 className="text-white font-medium mb-1">Disponibilidad 24/7</h4>
<p className="text-xs text-slate-500">Nunca pierdas un cliente por horario.</p>
</div>
<div className="glass-panel p-4 rounded-xl">
<svg className="lucide lucide-zap w-6 h-6 text-indigo-400 mb-3" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
<h4 className="text-white font-medium mb-1">Venta Instantánea</h4>
<p className="text-xs text-slate-500">Respuestas en milisegundos.</p>
</div>
</div>
</div>
<div className="relative">
<div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 blur-3xl rounded-full"></div>
<div className="glass-panel rounded-2xl p-1 relative z-10">
<img alt="Equipo trabajando en IA" className="rounded-xl w-full h-auto object-cover opacity-80 grayscale hover:grayscale-0 transition duration-700" src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="testimonials">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-white mb-4">Confían en Assistboot</h2>
<p className="text-slate-400 max-w-xl mr-auto ml-auto">Empresas de e‑commerce que han transformado su atención al cliente y las ventas con asistentes de IA.</p>
<p className="mt-3 text-sm text-indigo-300">
                    Más de 10.000 conversaciones atendidas al mes por asistentes de IA de Assistboot.
                </p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="glass-panel p-8 rounded-2xl hover:bg-white/5 transition duration-300 group">
<div className="flex items-center gap-4 mb-6">
<div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-white font-semibold">T</div>
<div className="">
<h4 className="text-white font-medium text-sm">TechGadgets ES</h4>
<p className="text-xs text-slate-500">Electrónica de consumo</p>
</div>
</div>
<p className="leading-relaxed group-hover:text-slate-300 transition-colors text-sm text-slate-400">"Desde que implementamos Assistboot, nuestras consultas nocturnas se resuelven solas. 
  Hemos notado un aumento del 25% en conversión durante los fines de semana y una reducción del 40% en tickets repetitivos."</p>
</div>

<div className="glass-panel p-8 rounded-2xl hover:bg-white/5 transition duration-300 group">
<div className="flex items-center gap-4 mb-6">
<div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-white font-semibold">M</div>
<div className="">
<h4 className="text-white font-medium text-sm">ModaSostenible</h4>
<p className="text-xs text-slate-500">Ropa y Accesorios</p>
</div>
</div>
<p className="leading-relaxed group-hover:text-slate-300 transition-colors text-sm text-slate-400">"El ahorro de tiempo es brutal. El bot gestiona tallas y devoluciones, permitiendo a mi equipo centrarse en marketing. 
Hemos reducido en un 50% el tiempo dedicado a atención al cliente."</p>
</div>

<div className="glass-panel p-8 rounded-2xl hover:bg-white/5 transition duration-300 group">
<div className="flex items-center gap-4 mb-6">
<div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-white font-semibold">G</div>
<div>
<h4 className="text-white font-medium text-sm">Gourmet En Casa</h4>
<p className="text-xs text-slate-500">Alimentación</p>
</div>
</div>
<p className="leading-relaxed group-hover:text-slate-300 transition-colors text-sm text-slate-400">"La implementación fue rapidísima. En dos días el bot ya conocía todo nuestro catálogo de vinos y quesos. 
Ahora el 70% de las consultas se resuelven sin intervención humana, con atención 24/7 real."</p>
</div>
</div>
</div>
</section>

<section className="bg-slate-900/50 border-white/5 border-t pt-24 pb-24 relative" id="contact">
<div className="max-w-3xl mx-auto px-6">
<div className="text-center mb-12">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-indigo-500/10 text-indigo-400 mb-6 border border-indigo-500/20">
<svg className="lucide lucide-mail w-6 h-6" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
</div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">Hablemos de tu proyecto</h2>
<p className="text-slate-400">Completa el formulario y te enviaremos una propuesta personalizada para automatizar tu e‑commerce con asistentes de IA.</p>
</div>

<div className="hidden fixed inset-0 bg-slate-950/95 flex flex-col items-center justify-center z-50 p-8 text-center" id="successMessage">
<div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center text-green-500 mb-4 border border-green-500/20">
<svg className="lucide lucide-check w-8 h-8" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<h3 className="text-2xl font-semibold text-white mb-2">¡Mensaje Enviado!</h3>
<p className="text-slate-400 text-sm max-w-sm">
        Hemos recibido tus datos correctamente. Trataremos tu información conforme a la normativa RGPD para contactarte lo antes posible.
      </p>
<button className="mt-8 text-indigo-400 text-sm font-medium hover:text-indigo-300" onclick="window.location.href='#top'">Volver al inicio</button>
</div>
<div className="glass-panel md:p-10 overflow-hidden rounded-3xl pt-8 pr-8 pb-8 pl-8 relative">
<form action="https://formsubmit.co/grubasweb@gmail.com" className="space-y-6 relative z-10" id="contactForm" method="POST">

<input name="_subject" type="hidden" value="Nueva solicitud de demo desde Assistboot"/>
<input name="_template" type="hidden" value="table"/>
<input name="_captcha" type="hidden" value="false"/>


<div className="grid md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-medium text-slate-300 uppercase tracking-wider" htmlFor="name">Nombre y Apellidos *</label>
<input className="focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all placeholder:text-slate-700 text-slate-200 bg-slate-950 w-full border-slate-800 border rounded-lg pt-3 pr-4 pb-3 pl-4" id="name" name="name" placeholder="Juan Pérez" required="" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-slate-300 uppercase tracking-wider" htmlFor="company">Empresa *</label>
<input className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-slate-200 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all placeholder:text-slate-700" id="company" name="company" placeholder="Tu E-commerce SL" required="" type="text"/>
</div>
</div>
<div className="grid md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-medium text-slate-300 uppercase tracking-wider" htmlFor="email">Email Profesional *</label>
<input className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-slate-200 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all placeholder:text-slate-700" id="email" name="email" placeholder="juan@empresa.com" required="" type="email"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-slate-300 uppercase tracking-wider" htmlFor="phone">Teléfono (Opcional)</label>
<input className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-slate-200 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all placeholder:text-slate-700" id="phone" name="phone" placeholder="+34 600 000 000" type="tel"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-slate-300 uppercase tracking-wider" htmlFor="needs">Describe tus necesidades *</label>
<textarea className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-slate-200 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all placeholder:text-slate-700" id="needs" name="needs" placeholder="Necesito automatizar las consultas sobre pedidos y devoluciones..." required="" rows="4"></textarea>
</div>

<div className="flex items-start gap-3 pt-2">
<div className="flex items-center h-5">
<input className="w-4 h-4 rounded border-slate-700 bg-slate-900 text-indigo-600 focus:ring-indigo-500 focus:ring-offset-slate-900" id="rgpd-consent" name="rgpd-consent" required="" type="checkbox"/>
</div>
<div className="text-xs text-slate-400 leading-relaxed">
<label className="font-medium text-slate-300" htmlFor="rgpd-consent">Consentimiento RGPD *</label>
<p className="mt-1">
              He leído y acepto la <a className="hover:text-indigo-300 underline underline-offset-2 text-indigo-400" href="/pdp">Política de Privacidad</a> y otorgo mi consentimiento para que Assistboot trate mis datos con el fin de contactarme y enviarme una propuesta sobre sus servicios de asistentes de IA para e‑commerce. El Responsable del Tratamiento es Assistboot S.L.
            </p>
</div>
</div>
<div className="pt-4">
<button className="w-full bg-slate-800 text-slate-500 font-medium py-4 rounded-lg cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2 group" disabled="" id="submitBtn" type="submit">
<span>Enviar solicitud</span>
<svg className="lucide lucide-arrow-right w-4 h-4 transition-transform group-hover:translate-x-1" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<p className="mt-3 text-xs text-slate-500 text-center">
            Te responderemos en menos de 24 horas con una propuesta adaptada a tu e‑commerce.
          </p>
</div>
</form>
<div className="flex flex-col md:flex-row text-sm text-slate-500 border-white/5 border-t mt-8 pt-6 items-center justify-between">
<span>grubasweb@gmail.com</span>
<span>+34 666 898 296</span>
</div>
</div>
</div>
</section>
<section className="bg-slate-950 border-t border-white/5 py-20">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-6">
                Preguntas frecuentes
            </h2>
<div className="space-y-6 text-slate-300 text-sm leading-relaxed">
<div>
<h3 className="font-medium text-white mb-1">
                        ¿Cuánto tarda la implementación de Assistboot?
                    </h3>
<p className="text-slate-400">
                        Dependiendo de la complejidad de tu e‑commerce, el asistente suele estar listo en pocos días, tras
                        conectar el catálogo y definir los flujos principales.
                    </p>
</div>
<div className="">
<h3 className="font-medium text-white mb-1">
                        ¿Con qué tipo de tiendas online funciona?
                    </h3>
<p className="text-slate-400">Trabajamos con la mayoría de plataformas de e‑commerce. Analizamos tu caso y te proponemos la mejor integración.</p>
</div>
<div className="">
<h3 className="font-medium text-white mb-1">
                        ¿En qué idiomas puede atender el asistente?
                    </h3>
<p className="text-slate-400">
                        El asistente puede trabajar en varios idiomas (por ejemplo, español e inglés) para atender a
                        clientes de diferentes mercados.
                    </p>
</div>
<div className="">
<h3 className="font-medium text-white mb-1">
                        ¿Reemplaza totalmente a mi equipo de atención al cliente?
                    </h3>
<p className="text-slate-400">
                        No. Assistboot se encarga de las consultas repetitivas y de bajo valor para liberar tiempo de tu
                        equipo, que puede centrarse en casos complejos y en tareas estratégicas.
                    </p>
</div>
<div className="">
<h3 className="font-medium text-white mb-1">
                        ¿Qué necesito para solicitar una demo?
                    </h3>
<p className="text-slate-400">
                        Solo necesitamos que completes el formulario de contacto con información básica sobre tu tienda y
                        tus objetivos. Te responderemos con una propuesta adaptada.
                    </p>
</div>
</div>
</div>
</section>

<footer className="bg-slate-950 border-t border-white/5 py-16 text-xs text-slate-500">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-12 mb-12">
<div className="">
<div className="flex items-center gap-2 mb-4">
<svg className="lucide lucide-bot w-4 h-4 text-indigo-400" data-lucide="bot" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>
<span className="text-slate-300 font-semibold tracking-tight">Assistboot</span>
</div>
<p className="max-w-sm mb-4">
                        Soluciones avanzadas de IA para la automatización de e-commerce. <br/> Madrid, España.
                    </p>
<p className="">© 2023 Assistboot. Todos los derechos reservados.</p>
</div>
<div className="bg-slate-900/50 p-6 rounded-xl border border-white/5">
<h5 className="text-slate-300 font-semibold mb-3">Información Básica sobre Protección de Datos (RGPD)</h5>
<ul className="space-y-2 list-disc list-inside">
<li className=""><strong>Responsable:</strong> Assistboot S.L.</li>
</ul>
</div>
</div>
</div>
</footer>


    </>
  );
}
