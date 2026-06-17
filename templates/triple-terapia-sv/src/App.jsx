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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        lucide.createIcons();
    
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
      

<nav className="fixed top-0 inset-x-0 z-50 bg-[#eaf0ea]/80 backdrop-blur-md border-b border-[#302119]/5">
<div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
<a className="font-display font-medium text-xl tracking-tight" href="#">TRIPLE TERAPIA</a>
<div className="hidden md:flex items-center gap-8 text-base font-normal text-[#655750]">
<a className="hover:text-[#333833] transition-colors duration-300" href="#problema">El Problema</a>
<a className="hover:text-[#333833] transition-colors duration-300" href="#pilares">Los 3 Pilares</a>
<a className="hover:text-[#333833] transition-colors duration-300" href="#resultados">Resultados</a>
<a className="hover:text-[#333833] transition-colors duration-300" href="#doctor">Dr. Frankz</a>
</div>
<div className="hidden md:block">
<a className="inline-flex items-center justify-center bg-white text-[#333833] px-6 py-3 rounded-full text-base font-normal shadow-sm hover:bg-gray-50 transition-colors duration-300 gap-2" href="#evaluacion">
<i className="w-5 h-5" data-lucide="phone" strokeWidth="1.5"></i> Agenda tu cita
                </a>
</div>
<button className="md:hidden text-[#333833]">
<i className="w-6 h-6" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>
</nav>

<section className="pt-36 md:pt-52 pb-24 px-6 flex flex-col items-center justify-center text-center relative z-10">
<span className="text-[#322018]/70 uppercase tracking-widest text-xs font-medium mb-6 block font-display">MÉTODO DE TRANSFORMACIÓN CORPORAL</span>
<h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-[#333833] max-w-5xl mb-8 leading-[1.1]">No solo pierdes peso. <br/>Te remodelamos.</h1>
<p className="text-[#655750] max-w-2xl mx-auto text-lg mb-12 leading-relaxed">El único protocolo que combina control del apetito, destrucción de grasa localizada y reafirmación de piel en una secuencia unificada sin cirugía.</p>
<a className="bg-[#64734f] text-white rounded-full pl-3 pr-8 py-3 flex items-center gap-4 hover:bg-[#546140] transition-colors duration-300 w-max mx-auto" href="#evaluacion">
<span className="bg-white/20 w-10 h-10 rounded-full flex items-center justify-center">
<i className="w-5 h-5" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</span>
<span className="font-normal text-base">Agenda tu evaluación</span>
</a>
</section>

<section className="w-full h-[60vh] md:h-[90vh] relative z-0">
<img alt="Interior clínica médica" className="object-[55%_2%] w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/95b575c0-e39d-4f61-837b-58c1501ef2ac_3840w.jpg"/>
</section>

<section className="bg-[#f5f5f4] py-24 md:py-36 px-6" id="problema">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

<div className="relative w-full max-w-lg mx-auto aspect-square flex items-center justify-center">
<img alt="Evaluación" className="absolute top-0 left-0 w-32 md:w-40 aspect-square object-cover rounded-full shadow-sm" src="https://framerusercontent.com/images/xUCwhBJfZYCpMaZQtOn31ACrSj0.png"/>
<img alt="Tratamiento" className="absolute bottom-0 right-0 w-28 md:w-32 aspect-square object-cover rounded-full shadow-sm" src="https://framerusercontent.com/images/rw3yMMRnewqRdPD7gcsKoelw.png"/>
<img alt="Bienestar" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 md:w-64 aspect-square object-cover rounded-full shadow-md z-10" src="https://framerusercontent.com/images/ATY1QkNO1Ol6hCC3ShHLtQeOoxg.png"/>
</div>

<div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-lg mx-auto lg:mx-0">
<span className="text-[#322018]/70 uppercase tracking-widest text-xs font-medium mb-6 block font-display">POR QUÉ OTROS FALLAN</span>
<h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight text-[#333833] mb-8 leading-tight">Atacamos desde 3 frentes clínicos</h2>
<p className="text-[#655750] text-lg mb-12 leading-relaxed">El 99% de los tratamientos fracasan porque atacan un solo frente. Deja atrás las dietas fallidas, la grasa rebelde que no desaparece y el miedo a la flacidez. No vendemos magia. Vendemos ciencia y compromiso médico.</p>
<a className="bg-[#64734f] text-white rounded-full pl-3 pr-8 py-3 flex items-center gap-4 hover:bg-[#546140] transition-colors duration-300 w-max" href="#pilares">
<span className="bg-white/20 w-10 h-10 rounded-full flex items-center justify-center">
<i className="w-5 h-5" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</span>
<span className="font-normal text-base">Conoce el método</span>
</a>
</div>
</div>
</section>

<section className="bg-[#eaf0ea] py-24 md:py-36 px-6" id="pilares">
<div className="max-w-7xl mr-auto ml-auto">
<div className="text-center mb-20 flex flex-col items-center">
<h2 className="font-display text-5xl md:text-7xl font-medium tracking-tight text-[#333833] mb-6">Nuestros 3 Pilares</h2>
<p className="text-[#655750] text-lg max-w-xl">Metodología unificada para resultados reales y visibles desde las primeras sesiones.</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

<div className="relative h-[550px] rounded-[2rem] overflow-hidden group">
<img alt="Inyección Metabólica" className="transition-transform duration-700 group-hover:scale-105 brightness-[0.4] w-full h-full object-cover z-10 absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1956b7b0-532f-4ab7-9b55-a6f6128f59f4_1600w.jpg"/>
<div className="flex flex-col z-10 text-white text-center pt-10 pr-10 pb-10 pl-10 absolute top-0 right-0 bottom-0 left-0 items-center justify-between">
<span className="font-display uppercase tracking-widest text-xs font-medium flex items-center gap-2"><i className="w-5 h-5" data-lucide="syringe" strokeWidth="1.5"></i> Pilar 1</span>
<div className="flex flex-col items-center">
<h4 className="font-display text-3xl md:text-4xl font-medium tracking-tight mb-4">Inyección Metabólica</h4>
<p className="text-base text-white/90 mb-10 max-w-[280px] leading-relaxed">Controla el apetito y acelera la quema de grasa desde el interior de forma segura y clínicamente comprobada.</p>
<a className="inline-flex bg-white text-[#333833] px-8 py-3.5 rounded-full text-base font-normal hover:bg-gray-50 transition-colors duration-300" href="#evaluacion">Saber más</a>
</div>
</div>
</div>

<div className="relative h-[550px] rounded-[2rem] overflow-hidden group">
<img alt="Ultracavitación" className="transition-transform duration-700 group-hover:scale-105 brightness-[0.4] w-full h-full object-cover z-10 absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b155c8b1-2fb7-4f04-8c9c-b93c46a4942f_1600w.jpg"/>
<div className="flex flex-col z-10 text-white text-center pt-10 pr-10 pb-10 pl-10 absolute top-0 right-0 bottom-0 left-0 items-center justify-between">
<span className="font-display uppercase tracking-widest text-xs font-medium flex items-center gap-2"><i className="w-5 h-5" data-lucide="target" strokeWidth="1.5"></i> Pilar 2</span>
<div className="flex flex-col items-center">
<h4 className="font-display text-3xl md:text-4xl font-medium tracking-tight mb-4">Ultracavitación</h4>
<p className="text-base text-white/90 mb-10 max-w-[280px] leading-relaxed">Destrucción permanente de la grasa localizada rebelde sin necesidad de intervenciones quirúrgicas.</p>
<a className="inline-flex bg-white text-[#333833] px-8 py-3.5 rounded-full text-base font-normal hover:bg-gray-50 transition-colors duration-300" href="#evaluacion">Saber más</a>
</div>
</div>
</div>

<div className="relative h-[550px] rounded-[2rem] overflow-hidden group">
<img alt="Radiofrecuencia" className="transition-transform duration-700 group-hover:scale-105 brightness-[0.4] w-full h-full object-cover z-10 absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1a6ed13f-bdec-428d-b19e-272ca990ce6c_1600w.jpg"/>
<div className="flex flex-col z-10 text-white text-center pt-10 pr-10 pb-10 pl-10 absolute top-0 right-0 bottom-0 left-0 items-center justify-between">
<span className="font-display uppercase tracking-widest text-xs font-medium flex items-center gap-2"><i className="w-5 h-5" data-lucide="wand-2" strokeWidth="1.5"></i> Pilar 3</span>
<div className="flex flex-col items-center">
<h4 className="font-display text-3xl md:text-4xl font-medium tracking-tight mb-4">Radiofrecuencia</h4>
<p className="text-base text-white/90 mb-10 max-w-[280px] leading-relaxed">Estimulación profunda de colágeno para reafirmar la piel y prevenir la flacidez tras la pérdida de peso.</p>
<a className="inline-flex bg-white text-[#333833] px-8 py-3.5 rounded-full text-base font-normal hover:bg-gray-50 transition-colors duration-300" href="#evaluacion">Saber más</a>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#eaf0ea] pb-24 md:pb-36 px-6" id="doctor">
<div className="max-w-7xl mx-auto flex flex-col lg:flex-row rounded-[2rem] overflow-hidden shadow-sm">

<div className="bg-[#f5f5f4] flex-1 p-12 lg:p-24 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
<span className="text-[#322018]/70 uppercase tracking-widest text-xs font-medium mb-6 block font-display">TU SALUD EN MANOS EXPERTAS</span>
<h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight text-[#333833] mb-8 leading-tight max-w-lg">Dr. Frankz Casamalhuapa</h2>
<p className="text-[#655750] text-lg mb-12 max-w-lg leading-relaxed">Más de 23 años de experiencia médica clínica. Entrenado por el Dr. Wali Gauvin en Washington DC. <br/><br/><strong className="font-medium">El doctor es su propio testimonio:</strong> perdió 139 lbs y más de 5 tallas mediante esta misma metodología, demostrando que es posible lograr resultados reales: 15-50 lbs en tan solo 8 semanas.</p>
<a className="flex items-center gap-4 hover:bg-[#546140] transition-colors duration-300 text-white bg-[#64734f] w-max rounded-full mb-14 pt-3 pr-8 pb-3 pl-3" href="#resultados">
<span className="bg-white/20 w-10 h-10 rounded-full flex items-center justify-center">
<i className="w-5 h-5" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</span>
<span className="font-normal text-base">Ver testimonios</span>
</a>

<div className="flex items-center justify-center lg:justify-start -space-x-4">
<img alt="Paciente" className="w-16 h-16 rounded-full border-4 border-[#f5f5f4] object-cover relative z-40" src="https://framerusercontent.com/images/lXwtCrbGGL2JfoaxR0uw1vJEI.jpg"/>
<img alt="Paciente" className="w-16 h-16 rounded-full border-4 border-[#f5f5f4] object-cover relative z-30" src="https://framerusercontent.com/images/Sa13CHaB61Ey2NROIOj4s6McFQ.jpg"/>
<img alt="Paciente" className="w-16 h-16 rounded-full border-4 border-[#f5f5f4] object-cover relative z-20" src="https://framerusercontent.com/images/xCfx2JJuM1cAUCnlQqhLO5QYF0.jpg"/>
<img alt="Paciente" className="w-16 h-16 rounded-full border-4 border-[#f5f5f4] object-cover relative z-10" src="https://framerusercontent.com/images/T47GCpx5fT3mTTEVqVfQGXqo49w.jpg"/>
</div>
</div>

<div className="flex-1 min-h-[500px] h-auto">
<img alt="Doctor Especialista" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c298c654-9797-420d-8f0f-30baa6b89ab6_1600w.jpg"/>
</div>
</div>
</section>

<section className="bg-[#eaf0ea] pb-24 md:pb-36 px-6" id="resultados">
<div className="max-w-7xl mx-auto">
<div className="mb-12 max-w-3xl">
<span className="text-[#322018]/70 uppercase tracking-widest text-xs font-medium mb-4 block font-display">RESULTADOS</span>
<h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight text-[#333833]">Pacientes reales. Resultados reales.</h2>
</div>

<div className="border border-[#d7d1cc] bg-white/50 rounded-[2rem] p-6 md:p-8 flex flex-col md:flex-row gap-10 lg:gap-20 items-center">
<div className="w-full md:w-[450px] aspect-square md:aspect-auto md:h-[400px] overflow-hidden rounded-[1.5rem] flex-shrink-0">
<img alt="Paciente Transformada" className="w-full h-full object-cover object-[49%_37%]" src="https://framerusercontent.com/images/M2E4LnwFkiQx73Jc3LBBnwxNv0Q.jpg"/>
</div>
<div className="flex-1 py-4 md:py-12 pr-4 md:pr-16">
<div className="flex gap-1 mb-8 text-[#333833]">
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
</div>
<p className="text-[#333833] text-xl md:text-3xl font-normal leading-relaxed mb-10 tracking-tight">"Había probado todas las dietas y nada funcionaba. Con la Triple Terapia perdí 32 libras en apenas dos meses y lo mejor es que mi piel no quedó flácida gracias a la radiofrecuencia. ¡Es un cambio de vida total!"</p>
<p className="text-[#655750] text-lg font-medium">— Ana M.</p>
</div>
</div>
</div>
</section>

<section className="bg-[#eaf0ea] pb-24 md:pb-36 px-6" id="evaluacion">
<div className="max-w-7xl mx-auto relative rounded-[2.5rem] overflow-hidden py-24 md:py-32 flex flex-col items-center justify-center text-left shadow-lg border border-[#302119]/5">
<img alt="Clínica CTA" className="absolute inset-0 w-full h-full object-cover" src="https://framerusercontent.com/images/Q1iVzb3fKiFkjw3nSjmFqTTVc.jpg"/>
<div className="bg-black/60 absolute inset-0"></div>
<div className="relative z-10 w-full px-6 md:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">

<div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-lg mx-auto lg:mx-0">
<h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight text-white mb-8 leading-tight">Agenda Tu Evaluación Corporal Hoy</h2>
<p className="text-white/90 text-lg mb-12 leading-relaxed">Resultados visibles desde las primeras sesiones. No vendemos magia, vendemos ciencia clínica. Da el primer paso hacia tu transformación.</p>
<div className="hidden lg:flex items-center gap-5">
<div className="flex items-center -space-x-4">
<img alt="Paciente" className="w-14 h-14 rounded-full border-2 border-[#1a1a1a] object-cover relative z-30" src="https://framerusercontent.com/images/lXwtCrbGGL2JfoaxR0uw1vJEI.jpg"/>
<img alt="Paciente" className="w-14 h-14 rounded-full border-2 border-[#1a1a1a] object-cover relative z-20" src="https://framerusercontent.com/images/Sa13CHaB61Ey2NROIOj4s6McFQ.jpg"/>
<img alt="Paciente" className="w-14 h-14 rounded-full border-2 border-[#1a1a1a] object-cover relative z-10" src="https://framerusercontent.com/images/xCfx2JJuM1cAUCnlQqhLO5QYF0.jpg"/>
</div>
<span className="text-white/80 text-base font-normal">Únete a cientos de pacientes satisfechos</span>
</div>
</div>

<div className="w-full max-w-[480px] mx-auto lg:ml-auto lg:mr-0 bg-[#fbfaf8] rounded-[2rem] p-8 md:p-12 shadow-2xl relative">
<div className="text-center mb-10">
<h3 className="font-display text-3xl font-medium tracking-tight text-[#333833] mb-3">Reserva tu Espacio</h3>
<p className="text-[#655750] text-base">Uno de nuestros especialistas se pondrá en contacto contigo.</p>
</div>
<form className="flex flex-col gap-8 gap-x-8 gap-y-8">
<div className="">
<label className="text-xs font-medium text-[#a08059] uppercase tracking-widest mb-3 block">Nombre completo</label>
<input className="w-full bg-transparent border-0 border-b border-[#e5e5e5] px-0 pb-3 text-[#333833] text-lg focus:ring-0 focus:outline-none focus:border-[#333833] transition-colors placeholder:text-[#a3a3a3] font-normal" placeholder="Escribe tu nombre aquí" type="text"/>
</div>
<div className="">
<label className="uppercase block text-xs font-medium text-[#a08059] tracking-widest mb-3">WhatsApp</label>
<input className="focus:ring-0 focus:outline-none focus:border-[#333833] transition-colors placeholder:text-[#a3a3a3] text-lg font-normal text-[#333833] bg-transparent w-full border-[#e5e5e5] border-0 border-b pr-0 pb-3 pl-0" placeholder="+503 ..." type="tel"/>
</div>
<div className="">
<label className="text-xs font-medium text-[#a08059] uppercase tracking-widest mb-3 block">Email</label>
<input className="w-full bg-transparent border-0 border-b border-[#e5e5e5] px-0 pb-3 text-[#333833] text-lg focus:ring-0 focus:outline-none focus:border-[#333833] transition-colors placeholder:text-[#a3a3a3] font-normal" placeholder="tu@email.com" type="email"/>
</div>
<button className="uppercase hover:bg-black transition-colors text-base font-medium text-white tracking-widest bg-[#64734f] w-full rounded-full mt-2 pt-4 pb-4 shadow-sm" type="button">
                            Enviar Solicitud
                        </button>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-[#eaf0ea] border-t border-[#d7d1cc]">
<div className="max-w-7xl mx-auto px-6 py-24">
<div className="flex flex-col lg:flex-row justify-between gap-16 lg:gap-12 mb-28">

<div className="max-w-lg gap-x-4 gap-y-4">
<h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight text-[#333833] mb-8 leading-tight">Inicia tu transformación hoy</h2>
<p className="text-[#655750] text-lg mb-10 leading-relaxed max-w-md">Da el primer paso hacia una vida más saludable y un cuerpo renovado. Programa tu evaluación con el Dr. Frankz y descubre nuestro protocolo exclusivo.</p>
<a className="flex items-center gap-4 hover:bg-[#546140] transition-colors duration-300 text-white bg-[#64734f] w-max rounded-full pt-3 pr-8 pb-3 pl-3" href="#evaluacion">
<span className="bg-white/20 w-10 h-10 rounded-full flex items-center justify-center">
<i className="w-5 h-5" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</span>
<span className="font-normal text-base">Agenda tu cita</span>
</a>
</div>

<div className="flex flex-wrap lg:flex-nowrap gap-12 lg:gap-24">
<div className="flex flex-col gap-5">
<h5 className="font-display font-medium text-2xl tracking-tight text-[#333833] mb-3">Clínica</h5>
<a className="text-[#655750] hover:text-[#333833] text-lg transition-colors" href="#problema">El Problema</a>
<a className="text-[#655750] hover:text-[#333833] text-lg transition-colors" href="#pilares">La Metodología</a>
<a className="text-[#655750] hover:text-[#333833] text-lg transition-colors" href="#doctor">Dr. Frankz</a>
<a className="text-[#655750] hover:text-[#333833] text-lg transition-colors" href="#resultados">Testimonios</a>
</div>
<div className="flex flex-col gap-5">
<h5 className="font-display font-medium text-2xl tracking-tight text-[#333833] mb-3">Legal</h5>
<a className="text-[#655750] hover:text-[#333833] text-lg transition-colors" href="#">Términos Médicos</a>
<a className="text-[#655750] hover:text-[#333833] text-lg transition-colors" href="#">Privacidad</a>
<a className="text-[#655750] hover:text-[#333833] text-lg transition-colors" href="#">Consentimiento</a>
</div>
<div className="flex flex-col gap-5">
<h5 className="font-display font-medium text-2xl tracking-tight text-[#333833] mb-3">Tratamientos</h5>
<a className="text-[#655750] hover:text-[#333833] text-lg transition-colors" href="#pilares">Inyección Metabólica</a>
<a className="text-[#655750] hover:text-[#333833] text-lg transition-colors" href="#pilares">Ultracavitación</a>
<a className="text-[#655750] hover:text-[#333833] text-lg transition-colors" href="#pilares">Radiofrecuencia</a>
</div>
</div>
</div>

<div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12">
<div className="flex flex-col md:flex-row gap-8 md:gap-14 w-full lg:w-auto">
<p className="font-display font-medium text-2xl tracking-tight text-[#333833] hover:text-[#64734f] transition-colors max-w-[320px]">
                        San Salvador, El Salvador. Centro Médico Especializado.
                    </p>
<div className="flex gap-6 items-end">
<a className="w-6 h-6 flex items-center justify-center text-[#333833] hover:opacity-70 transition-opacity" href="#">
<i className="w-6 h-6" data-lucide="globe" strokeWidth="1.5"></i>
</a>
<a className="w-6 h-6 flex items-center justify-center text-[#333833] hover:opacity-70 transition-opacity" href="#">
<i className="w-6 h-6" data-lucide="camera" strokeWidth="1.5"></i>
</a>
<a className="w-6 h-6 flex items-center justify-center text-[#333833] hover:opacity-70 transition-opacity" href="#">
<i className="w-6 h-6" data-lucide="mail" strokeWidth="1.5"></i>
</a>
</div>
</div>
<div className="flex flex-col gap-3 text-2xl font-light text-[#655750] tracking-tight text-left lg:text-right w-full lg:w-auto border-t border-[#d7d1cc] lg:border-none pt-8 lg:pt-0">
<a className="hover:text-[#333833] transition-colors" href="mailto:clinica@ejemplo.sv">E: clinica@ejemplo.sv</a>
<a className="hover:text-[#333833] transition-colors" href="tel:+50370000000">T: +503 7000 0000</a>
</div>
</div>

<div className="mt-20 flex flex-col sm:flex-row justify-between items-center text-base text-[#655750] gap-4">
<p>© Triple Terapia. Todos los derechos reservados.</p>
<p>Clínica Dr. Frankz Casamalhuapa.</p>
</div>
</div>
</footer>



    </>
  );
}
