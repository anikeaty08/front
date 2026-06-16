import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5ZM4SGXV');


window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'AW-943714999');



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            // Inicializar Lucide Icons
            lucide.createIcons();

            const menuToggle = document.getElementById('menu-toggle');
            const menuClose = document.getElementById('menu-close');
            const mobileMenu = document.getElementById('mobile-menu');
            const mobileLinks = document.querySelectorAll('.mobile-link');

            function toggleMenu() {
                mobileMenu.classList.toggle('translate-x-full');
            }

            menuToggle.addEventListener('click', toggleMenu);
            menuClose.addEventListener('click', toggleMenu);

            mobileLinks.forEach(link => {
                link.addEventListener('click', () => {
                    mobileMenu.classList.add('translate-x-full');
                });
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<noscript><iframe height="0" src="https://www.googletagmanager.com/ns.html?id=GTM-5ZM4SGXV" style={{display: 'none', visibility: 'hidden'}} width="0"></iframe></noscript>

<nav className="fixed w-full z-50 top-0 left-0 border-b border-[#0F4C5C]/5 bg-[#FAFAF8]/95 backdrop-blur-md transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center relative z-50">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 rounded-full bg-[#0F4C5C] text-white flex items-center justify-center">
<i data-lucide="bone" height="18" strokeWidth="1.5" width="18"></i>
</div>
<span className="font-['Cormorant_Garamond'] text-lg uppercase tracking-tight font-medium text-[#0F4C5C]">Dra. Jelitze Sosa</span>
</a>
<div className="hidden md:flex items-center gap-8 text-base font-normal text-[#2B2B2B]/80">
<a className="hover:text-[#0F4C5C] transition-colors" href="#about">Sobre Mí</a>
<a className="hover:text-[#0F4C5C] transition-colors" href="#services">Tratamientos</a>
<a className="hover:text-[#0F4C5C] transition-colors" href="#gallery">Instalaciones</a>
<a className="hover:text-[#0F4C5C] transition-colors" href="#reviews">Testimonios</a>
</div>
<a className="hidden md:flex items-center gap-2 bg-[#0F4C5C] text-white px-5 py-2.5 rounded-full text-sm font-normal tracking-wide hover:bg-[#0F4C5C]/90 transition-all hover:shadow-lg hover:shadow-[#0F4C5C]/20" href="https://wa.link/cf47yz" rel="noopener noreferrer" target="_blank">
<span>Agendar Cita</span>
<i data-lucide="calendar-plus" height="16" strokeWidth="1.5" width="16"></i>
</a>

<button className="md:hidden text-[#0F4C5C] p-2 hover:bg-[#0F4C5C]/5 rounded-full transition-colors focus:outline-none" id="menu-toggle">
<i data-lucide="menu" height="24" strokeWidth="1.5" width="24"></i>
</button>
</div>

<div className="fixed inset-0 bg-white z-40 transform translate-x-full transition-transform duration-300 ease-in-out md:hidden flex flex-col pt-28 px-6 pb-6 shadow-2xl" id="mobile-menu">
<button className="absolute top-6 right-6 text-[#0F4C5C] p-2 hover:bg-[#0F4C5C]/5 rounded-full transition-colors" id="menu-close">
<i data-lucide="x-circle" height="32" strokeWidth="1.5" width="32"></i>
</button>
<div className="flex flex-col gap-6 text-2xl font-['Cormorant_Garamond'] font-normal text-[#0F4C5C] tracking-tight">
<a className="mobile-link py-3 border-b border-[#0F4C5C]/10 flex justify-between items-center group" href="#about">
                    Sobre Mí 
                    <i className="opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 duration-300" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
<a className="mobile-link py-3 border-b border-[#0F4C5C]/10 flex justify-between items-center group" href="#services">
                    Tratamientos
                    <i className="opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 duration-300" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
<a className="mobile-link py-3 border-b border-[#0F4C5C]/10 flex justify-between items-center group" href="#gallery">
                    Instalaciones
                    <i className="opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 duration-300" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
<a className="mobile-link py-3 border-b border-[#0F4C5C]/10 flex justify-between items-center group" href="#reviews">
                    Testimonios
                    <i className="opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 duration-300" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
<div className="mt-auto mb-8">
<a className="mobile-link w-full bg-[#0F4C5C] text-white py-4 rounded-xl flex items-center justify-center gap-2 text-base font-sans font-normal tracking-wide shadow-lg shadow-[#0F4C5C]/20" href="https://wa.link/cf47yz" rel="noopener noreferrer" target="_blank">
<span>Agendar Cita</span>
<i data-lucide="calendar-plus" height="18" strokeWidth="1.5" width="18"></i>
</a>
<div className="mt-6 flex justify-center gap-6 text-[#0F4C5C]/60">
<a className="hover:text-[#0F4C5C]" href="https://wa.link/cf47yz"><i data-lucide="message-circle" height="26" strokeWidth="1.5" width="26"></i></a>
<a className="hover:text-[#0F4C5C]" href="#book"><i data-lucide="map-pin" height="26" strokeWidth="1.5" width="26"></i></a>
</div>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 overflow-hidden">
<div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-b from-[#C9A24D]/5 to-transparent pointer-events-none"></div>
<div className="absolute -left-20 top-40 w-96 h-96 bg-[#0F4C5C]/5 rounded-full blur-3xl pointer-events-none"></div>
<div className="max-w-4xl mx-auto text-center relative z-10">
<span className="text-[#C9A24D] text-base md:text-lg font-medium tracking-widest uppercase mb-4 block">Ortopedista y Traumatóloga en Mérida</span>
<h1 className="font-['Cormorant_Garamond'] text-5xl md:text-7xl lg:text-8xl leading-[1.1] font-normal tracking-tight text-[#0F4C5C] mb-6">
                Recupera tu movilidad. <br/>
<span className="italic text-[#C9A24D]">Mejora tu calidad</span> de vida.
            </h1>
<p className="text-xl md:text-2xl text-[#2B2B2B]/70 max-w-2xl mx-auto leading-relaxed mb-6 font-light">
                Tratamientos para dolor de rodilla, columna y articulaciones. Evaluación médica y opciones adaptadas a cada paciente.
            </p>
<a className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#0F4C5C]/20 bg-white/50 backdrop-blur-sm mb-10 hover:bg-[#0F4C5C]/5 hover:border-[#0F4C5C]/30 transition-all cursor-pointer" href="https://share.google/nqKHrGzlrkFqGRZgB" rel="noopener noreferrer" target="_blank">
<div className="flex gap-0.5 text-[#C9A24D]">
<i data-lucide="star" fill="currentColor" height="14" strokeWidth="0" width="14"></i>
<i data-lucide="star" fill="currentColor" height="14" strokeWidth="0" width="14"></i>
<i data-lucide="star" fill="currentColor" height="14" strokeWidth="0" width="14"></i>
<i data-lucide="star" fill="currentColor" height="14" strokeWidth="0" width="14"></i>
<i data-lucide="star" fill="currentColor" height="14" strokeWidth="0" width="14"></i>
</div>
<div className="w-[1px] h-3 bg-[#0F4C5C]/20 mx-1"></div>
<div className="flex items-center gap-1.5">
<i data-lucide="chrome" height="14" strokeWidth="1.5" width="14"></i>
<span className="text-sm tracking-wide font-medium text-[#0F4C5C]">5.0 en Reseñas</span>
</div>
</a>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto bg-[#0F4C5C] text-white h-12 px-8 rounded-full flex items-center justify-center gap-2 text-base font-normal tracking-wide hover:shadow-xl hover:shadow-[#0F4C5C]/20 transition-all transform hover:-translate-y-0.5" href="https://wa.link/cf47yz" rel="noopener noreferrer" target="_blank">
<i data-lucide="message-circle" height="20" strokeWidth="1.5" width="20"></i>
                    Hablar por WhatsApp
                </a>
<a className="w-full sm:w-auto h-12 px-8 rounded-full border border-[#0F4C5C]/20 text-[#0F4C5C] flex items-center justify-center gap-2 text-base font-normal hover:bg-[#0F4C5C]/5 transition-all" href="https://www.doctoralia.com.mx/jelitze-sosa-colome/ortopedista-traumatologo/yucatan" rel="noopener noreferrer" target="_blank">
<i data-lucide="calendar-plus" height="18" strokeWidth="1.5" width="18"></i>
                    Agendar en línea
                </a>
</div>

<div className="mt-16 pt-8 border-t border-[#0F4C5C]/10 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
<div className="flex flex-col items-center gap-2">
<i className="text-[#C9A24D]" data-lucide="syringe" height="24" strokeWidth="1.5" width="24"></i>
<span className="text-sm text-[#2B2B2B]/60 font-normal tracking-tight text-center">Infiltración de Rodilla</span>
</div>
<div className="flex flex-col items-center gap-2">
<i className="text-[#C9A24D]" data-lucide="zap" height="24" strokeWidth="1.5" width="24"></i>
<span className="text-sm text-[#2B2B2B]/60 font-normal tracking-tight text-center">Dolor de Ciática</span>
</div>
<div className="flex flex-col items-center gap-2">
<i className="text-[#C9A24D]" data-lucide="shield-check" height="24" strokeWidth="1.5" width="24"></i>
<span className="text-sm text-[#2B2B2B]/60 font-normal tracking-tight text-center">Diagnóstico Preciso</span>
</div>
<div className="flex flex-col items-center gap-2">
<i className="text-[#C9A24D]" data-lucide="heart-pulse" height="24" strokeWidth="1.5" width="24"></i>
<span className="text-sm text-[#2B2B2B]/60 font-normal tracking-tight text-center">Opciones No Invasivas</span>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 bg-white border-y border-[#0F4C5C]/5" id="about">
<div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
<div className="relative group">
<div className="aspect-[3/4] rounded-2xl overflow-hidden bg-[#FAFAF8] border border-[#0F4C5C]/10 relative">
<div className="absolute inset-0 bg-gradient-to-tr from-[#0F4C5C]/10 to-transparent z-10"></div>
<img alt="Dra. Jelitze Sosa Ortopedista" className="w-full h-full object-cover" src="https://pagemaker.b-cdn.net/media/122928/853x1280.jpg"/>
<div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur p-4 rounded-xl border border-[#0F4C5C]/10 shadow-sm z-20">
<p className="font-['Cormorant_Garamond'] text-[#0F4C5C] text-xl italic">"Priorizamos alternativas médicas que cuidan tu cuerpo y facilitan tu recuperación."</p>
</div>
</div>
<div className="absolute -inset-4 border border-[#C9A24D]/30 rounded-[20px] -z-10 translate-x-2 translate-y-2"></div>
</div>
<div>
<span className="text-[#C9A24D] text-sm font-medium tracking-widest uppercase mb-2 block">Conoce a tu Ortopedista</span>
<h2 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl font-normal text-[#0F4C5C] mb-6 tracking-tight">Dra. Jelitze Sosa</h2>
<div className="space-y-6 text-[#2B2B2B]/80 font-light text-lg leading-relaxed">
<p>
                        Más de una década ayudando a pacientes a recuperar su independencia y mejorar su calidad de vida. Médica Especialista en Ortopedia y Traumatología (UNAM) con Alta Especialidad en Ortopedia Pediátrica.
                    </p>
<p>
                        Te explico tu diagnóstico con palabras claras, resolvemos tus dudas sin prisa, y te acompaño paso a paso en tu tratamiento. La atención inicia a la hora acordada, respetando tu tiempo y comodidad.
                    </p>
</div>
<div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-[#0F4C5C]/10 flex items-center justify-center text-[#0F4C5C]">
<i data-lucide="check-circle" height="14" strokeWidth="1.5" width="14"></i>
</div>
<span className="text-base">Certificada por el CMO</span>
</div>
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-[#0F4C5C]/10 flex items-center justify-center text-[#0F4C5C]">
<i data-lucide="check-circle" height="14" strokeWidth="1.5" width="14"></i>
</div>
<span className="text-base">Atención sin prisas</span>
</div>
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-[#0F4C5C]/10 flex items-center justify-center text-[#0F4C5C]">
<i data-lucide="check-circle" height="14" strokeWidth="1.5" width="14"></i>
</div>
<span className="text-base">Trato humano y real</span>
</div>
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-[#0F4C5C]/10 flex items-center justify-center text-[#0F4C5C]">
<i data-lucide="check-circle" height="14" strokeWidth="1.5" width="14"></i>
</div>
<span className="text-base">Puntualidad garantizada</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#FAFAF8]" id="services">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl font-normal text-[#0F4C5C] tracking-tight mb-4">Manejo Médico y Especializado</h2>
<p className="text-lg text-[#2B2B2B]/60 max-w-xl mx-auto">Atención diseñada para preservar tu movilidad física y promover un bienestar continuo.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white p-8 rounded-2xl border border-[#0F4C5C]/5 hover:border-[#C9A24D]/30 transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] group">
<div className="w-12 h-12 bg-[#0F4C5C]/5 rounded-xl flex items-center justify-center text-[#0F4C5C] mb-6 group-hover:bg-[#0F4C5C] group-hover:text-white transition-colors">
<i data-lucide="shield-check" height="24" strokeWidth="1.5" width="24"></i>
</div>
<h3 className="font-['Cormorant_Garamond'] text-2xl font-normal text-[#0F4C5C] tracking-tight mb-2">Dolor Articular</h3>
<p className="text-base text-[#2B2B2B]/70 leading-relaxed mb-4">
                        Manejo del desgaste articular. Evaluamos tu caso para ofrecer alternativas médicas orientadas a mejorar la fuerza y función de tu cuerpo.
                    </p>
</div>

<div className="bg-white p-8 rounded-2xl border border-[#0F4C5C]/5 hover:border-[#C9A24D]/30 transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] group">
<div className="w-12 h-12 bg-[#0F4C5C]/5 rounded-xl flex items-center justify-center text-[#0F4C5C] mb-6 group-hover:bg-[#0F4C5C] group-hover:text-white transition-colors">
<i data-lucide="syringe" height="24" strokeWidth="1.5" width="24"></i>
</div>
<h3 className="font-['Cormorant_Garamond'] text-2xl font-normal text-[#0F4C5C] tracking-tight mb-2">Infiltración de Rodillas</h3>
<p className="text-base text-[#2B2B2B]/70 leading-relaxed mb-4">
                        Procedimiento en consultorio diseñado para ayudar a desinflamar y lubricar la articulación, buscando brindar alivio prolongado.
                    </p>
</div>

<div className="bg-white p-8 rounded-2xl border border-[#0F4C5C]/5 hover:border-[#C9A24D]/30 transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] group">
<div className="w-12 h-12 bg-[#0F4C5C]/5 rounded-xl flex items-center justify-center text-[#0F4C5C] mb-6 group-hover:bg-[#0F4C5C] group-hover:text-white transition-colors">
<i data-lucide="zap" height="24" strokeWidth="1.5" width="24"></i>
</div>
<h3 className="font-['Cormorant_Garamond'] text-2xl font-normal text-[#0F4C5C] tracking-tight mb-2">Manejo de Ciática</h3>
<p className="text-base text-[#2B2B2B]/70 leading-relaxed mb-4">
                        Opciones terapéuticas para reducir la tensión en tu columna, ayudando a disminuir las molestias que afectan tu descanso y rutina diaria.
                    </p>
</div>

<div className="bg-white p-8 rounded-2xl border border-[#0F4C5C]/5 hover:border-[#C9A24D]/30 transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] group">
<div className="w-12 h-12 bg-[#0F4C5C]/5 rounded-xl flex items-center justify-center text-[#0F4C5C] mb-6 group-hover:bg-[#0F4C5C] group-hover:text-white transition-colors">
<i data-lucide="heart-pulse" height="24" strokeWidth="1.5" width="24"></i>
</div>
<h3 className="font-['Cormorant_Garamond'] text-2xl font-normal text-[#0F4C5C] tracking-tight mb-2">Ortopedia Pediátrica</h3>
<p className="text-base text-[#2B2B2B]/70 leading-relaxed mb-4">
                        Evaluación preventiva mediante ultrasonido. Fundamental para revisar el desarrollo adecuado de la cadera en los primeros meses de tu bebé.
                    </p>
</div>

<div className="bg-white p-8 rounded-2xl border border-[#0F4C5C]/5 hover:border-[#C9A24D]/30 transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] group">
<div className="w-12 h-12 bg-[#0F4C5C]/5 rounded-xl flex items-center justify-center text-[#0F4C5C] mb-6 group-hover:bg-[#0F4C5C] group-hover:text-white transition-colors">
<i data-lucide="briefcase-medical" height="24" strokeWidth="1.5" width="24"></i>
</div>
<h3 className="font-['Cormorant_Garamond'] text-2xl font-normal text-[#0F4C5C] tracking-tight mb-2">Procedimientos Quirúrgicos</h3>
<p className="text-base text-[#2B2B2B]/70 leading-relaxed mb-4">
                        Cuando el caso lo requiere, empleamos técnicas modernas que buscan minimizar el impacto en los tejidos para una recuperación más amigable.
                    </p>
</div>

<div className="bg-[#0F4C5C] p-8 rounded-2xl flex flex-col justify-center items-center text-center">
<h3 className="font-['Cormorant_Garamond'] text-2xl font-normal text-white tracking-tight mb-2">¿Dudas sobre tu diagnóstico?</h3>
<p className="text-base text-white/70 leading-relaxed mb-6">
                        Agenda una consulta con la Dra. Sosa para una valoración detallada y transparente.
                    </p>
<a className="bg-[#C9A24D] text-white px-6 py-3 rounded-full text-base font-normal hover:bg-[#b08d41] transition w-full" href="https://wa.link/cf47yz" rel="noopener noreferrer" target="_blank">Consultar Ahora</a>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white border-t border-[#0F4C5C]/5" id="gallery">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<span className="text-[#C9A24D] text-sm font-medium tracking-widest uppercase mb-2 block">Nuestras Instalaciones</span>
<h2 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl font-normal text-[#0F4C5C] tracking-tight mb-4">Espacios diseñados para tu atención</h2>
<p className="text-lg text-[#2B2B2B]/60 max-w-xl mx-auto">Entornos seguros, modernos y equipados con tecnología de punta para brindarte la mejor experiencia médica.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[250px]">

<div className="md:col-span-2 md:row-span-2 rounded-2xl overflow-hidden relative group border border-[#0F4C5C]/10 shadow-sm">
<div className="absolute inset-0 bg-[#0F4C5C]/10 group-hover:bg-transparent transition-colors z-10 duration-500"></div>
<img alt="Modern Commercial Building and Office Complex" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/91ad2202-f36a-442f-b6a0-a72c5fa732e0_1600w.png"/>
</div>

<div className="rounded-2xl overflow-hidden relative group border border-[#0F4C5C]/10 shadow-sm">
<div className="absolute inset-0 bg-[#0F4C5C]/10 group-hover:bg-transparent transition-colors z-10 duration-500"></div>
<img alt="Healthcare Professional at Modern Clinical Desk" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d68c63b6-498f-4a3b-903e-554e27de3264_800w.png"/>
</div>

<div className="rounded-2xl overflow-hidden relative group border border-[#0F4C5C]/10 shadow-sm">
<div className="absolute inset-0 bg-[#0F4C5C]/10 group-hover:bg-transparent transition-colors z-10 duration-500"></div>
<img alt="Anatomical Models of Knee Joint Progression" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2e8b3708-ac0c-441e-9b82-3647fa6bef87_800w.jpg"/>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative bg-white border-t border-[#0F4C5C]/5 overflow-hidden" id="reviews">
<div className="absolute right-0 top-0 w-64 h-64 bg-[#C9A24D]/5 rounded-bl-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
<div>
<span className="text-[#C9A24D] text-sm font-medium tracking-widest uppercase mb-2 block">Opiniones Reales</span>
<h2 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl font-normal text-[#0F4C5C] tracking-tight">Experiencias de nuestros pacientes</h2>
</div>
<div className="flex gap-1 text-[#C9A24D]">
<i data-lucide="star" fill="currentColor" height="20" strokeWidth="0" width="20"></i>
<i data-lucide="star" fill="currentColor" height="20" strokeWidth="0" width="20"></i>
<i data-lucide="star" fill="currentColor" height="20" strokeWidth="0" width="20"></i>
<i data-lucide="star" fill="currentColor" height="20" strokeWidth="0" width="20"></i>
<i data-lucide="star" fill="currentColor" height="20" strokeWidth="0" width="20"></i>
</div>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-[#FAFAF8] p-6 rounded-xl border-t-2 border-[#C9A24D] shadow-sm">
<div className="mb-4 text-[#C9A24D] flex gap-1">
<i data-lucide="star" fill="currentColor" height="16" strokeWidth="0" width="16"></i>
<i data-lucide="star" fill="currentColor" height="16" strokeWidth="0" width="16"></i>
<i data-lucide="star" fill="currentColor" height="16" strokeWidth="0" width="16"></i>
<i data-lucide="star" fill="currentColor" height="16" strokeWidth="0" width="16"></i>
<i data-lucide="star" fill="currentColor" height="16" strokeWidth="0" width="16"></i>
</div>
<p className="text-base text-[#2B2B2B]/80 font-light italic mb-4">"Llevaba meses con molestias en la rodilla. Su diagnóstico y enfoque me ayudaron a retomar mis actividades poco a poco. Muy honesta."</p>
<p className="text-sm font-medium text-[#0F4C5C] uppercase tracking-wide">Roberto Martínez</p>
</div>

<div className="bg-[#FAFAF8] p-6 rounded-xl border-t-2 border-[#C9A24D] shadow-sm">
<div className="mb-4 text-[#C9A24D] flex gap-1">
<i data-lucide="star" fill="currentColor" height="16" strokeWidth="0" width="16"></i>
<i data-lucide="star" fill="currentColor" height="16" strokeWidth="0" width="16"></i>
<i data-lucide="star" fill="currentColor" height="16" strokeWidth="0" width="16"></i>
<i data-lucide="star" fill="currentColor" height="16" strokeWidth="0" width="16"></i>
<i data-lucide="star" fill="currentColor" height="16" strokeWidth="0" width="16"></i>
</div>
<p className="text-base text-[#2B2B2B]/80 font-light italic mb-4">"Había consultado por dolor en la espalda. Su atención fue distinta y precisa. Sentí mucho acompañamiento durante mi tratamiento."</p>
<p className="text-sm font-medium text-[#0F4C5C] uppercase tracking-wide">Ana Laura G.</p>
</div>

<div className="bg-[#FAFAF8] p-6 rounded-xl border-t-2 border-[#C9A24D] shadow-sm">
<div className="mb-4 text-[#C9A24D] flex gap-1">
<i data-lucide="star" fill="currentColor" height="16" strokeWidth="0" width="16"></i>
<i data-lucide="star" fill="currentColor" height="16" strokeWidth="0" width="16"></i>
<i data-lucide="star" fill="currentColor" height="16" strokeWidth="0" width="16"></i>
<i data-lucide="star" fill="currentColor" height="16" strokeWidth="0" width="16"></i>
<i data-lucide="star" fill="currentColor" height="16" strokeWidth="0" width="16"></i>
</div>
<p className="text-base text-[#2B2B2B]/80 font-light italic mb-4">"Llevé a mi bebé para revisión de cadera. El tacto y la paciencia de la Dra. te da mucha tranquilidad. Consultorio impecable."</p>
<p className="text-sm font-medium text-[#0F4C5C] uppercase tracking-wide">Carlos Pérez</p>
</div>

<div className="bg-[#FAFAF8] p-6 rounded-xl border-t-2 border-[#C9A24D] shadow-sm">
<div className="mb-4 text-[#C9A24D] flex gap-1">
<i data-lucide="star" fill="currentColor" height="16" strokeWidth="0" width="16"></i>
<i data-lucide="star" fill="currentColor" height="16" strokeWidth="0" width="16"></i>
<i data-lucide="star" fill="currentColor" height="16" strokeWidth="0" width="16"></i>
<i data-lucide="star" fill="currentColor" height="16" strokeWidth="0" width="16"></i>
<i data-lucide="star" fill="currentColor" height="16" strokeWidth="0" width="16"></i>
</div>
<p className="text-base text-[#2B2B2B]/80 font-light italic mb-4">"Excelente atención, te explica todo a detalle y explora todas las opciones de recuperación. Recomiendo ampliamente su profesionalismo."</p>
<p className="text-sm font-medium text-[#0F4C5C] uppercase tracking-wide">María Fernández</p>
</div>
</div>
</div>
</section>

<section className="py-16 px-6 bg-[#0F4C5C] text-white">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
<div className="md:w-1/2">
<h2 className="font-['Cormorant_Garamond'] text-3xl md:text-4xl font-normal tracking-tight mb-4">Tu salud por encima de todo</h2>
<p className="text-lg text-white/70 font-light mb-6">Mi práctica médica se fundamenta en la honestidad: busco siempre la mejor ruta de recuperación, evaluando de forma exhaustiva las alternativas médicas y no invasivas antes de recomendar un procedimiento mayor.</p>
<div className="flex flex-wrap gap-4">
<div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">
<i className="text-[#C9A24D]" data-lucide="shield-check" strokeWidth="1.5"></i>
<span className="text-sm font-normal">Diagnóstico Certero</span>
</div>
<div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">
<i className="text-[#C9A24D]" data-lucide="home" strokeWidth="1.5"></i>
<span className="text-sm font-normal">Acompañamiento Total</span>
</div>
</div>
</div>
<div className="md:w-1/3 w-full bg-[#C9A24D] h-1 rounded-full opacity-20 md:hidden"></div>
<div className="md:w-1/2 text-right">
<p className="text-2xl font-['Cormorant_Garamond'] italic opacity-80">"El mejor plan médico es aquel que respeta los tiempos de tu cuerpo."</p>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#FAFAF8]" id="book">
<div className="max-w-3xl mx-auto bg-white rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(15,76,92,0.1)] border border-[#0F4C5C]/5">
<div className="p-8 md:p-12 flex flex-col md:flex-row justify-between items-center gap-8">
<div className="w-full">
<span className="text-[#C9A24D] text-sm font-medium tracking-widest uppercase mb-2 block">Agendar Cita</span>
<h2 className="font-['Cormorant_Garamond'] text-3xl md:text-4xl font-normal text-[#0F4C5C] tracking-tight mb-4">Visítanos en Mérida</h2>
<p className="text-[#2B2B2B]/60 mb-6 text-base">Contáctanos para resolver tus dudas de manera directa y agenda una valoración inicial.</p>

<div className="space-y-4 mb-8">
<div className="flex items-start gap-3 text-base text-[#2B2B2B]/80">
<i className="text-[#C9A24D] mt-0.5" data-lucide="map-pin" height="20" strokeWidth="1.5" width="20"></i>
<span>Atención especializada en Mérida, Yucatán. <br/><span className="text-sm opacity-70">Haz clic en el enlace para confirmar ubicación exacta al agendar.</span></span>
</div>
<div className="flex items-center gap-3 text-base text-[#2B2B2B]/80">
<i className="text-[#C9A24D]" data-lucide="clock" height="20" strokeWidth="1.5" width="20"></i>
<span>Lunes a Viernes: 9:00 AM - 8:00 PM <br/> Sábados: 9:00 AM - 2:00 PM</span>
</div>
</div>
<a className="inline-flex items-center justify-center w-full sm:w-auto gap-2 bg-[#0F4C5C] text-white px-8 py-3 rounded-full text-base font-normal tracking-wide hover:bg-[#0F4C5C]/90 transition-all hover:shadow-lg hover:shadow-[#0F4C5C]/20" href="https://wa.link/cf47yz" rel="noopener noreferrer" target="_blank">
                        Agendar por WhatsApp
                        <i data-lucide="message-circle" height="20" strokeWidth="1.5" width="20"></i>
</a>
</div>
</div>
</div>
</section>

<footer className="bg-[#1A1A1A] text-white py-12 pb-32 md:pb-12 px-6">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2 group">
<div className="w-8 h-8 rounded-full bg-[#C9A24D] text-[#1A1A1A] flex items-center justify-center">
<i data-lucide="bone" height="18" strokeWidth="1.5" width="18"></i>
</div>
<span className="font-['Cormorant_Garamond'] text-lg uppercase tracking-tight font-medium text-white/90">Dra. Jelitze Sosa</span>
</div>
<p className="text-base text-white/50 text-center md:text-left">
                © 2024 Dra. Jelitze Sosa. Ortopedista y Traumatóloga. Todos los derechos reservados.
            </p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-[#C9A24D] hover:border-[#C9A24D] transition-colors" href="https://wa.link/cf47yz" rel="noopener noreferrer" target="_blank">
<i data-lucide="message-circle" height="22" strokeWidth="1.5" width="22"></i>
</a>
</div>
</div>
</footer>

<div className="fixed bottom-14 left-1/2 -translate-x-1/2 w-[calc(100%-3rem)] max-w-sm z-[60] md:hidden flex items-center gap-2 p-2 bg-white/90 backdrop-blur-md border border-[#0F4C5C]/10 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
<a className="flex-1 flex items-center justify-center gap-2 bg-[#0F4C5C] text-white h-12 rounded-full text-base font-normal tracking-wide hover:bg-[#0F4C5C]/90 transition-colors" href="https://www.doctoralia.com.mx/jelitze-sosa-colome/ortopedista-traumatologo/yucatan" rel="noopener noreferrer" target="_blank">
<span>Agendar Cita</span>
<i data-lucide="calendar-plus" height="18" strokeWidth="1.5" width="18"></i>
</a>
<a className="flex items-center justify-center w-12 h-12 shrink-0 bg-[#25D366]/10 text-[#25D366] rounded-full hover:bg-[#25D366]/20 transition-colors" href="https://wa.link/cf47yz" rel="noopener noreferrer" target="_blank">
<i data-lucide="message-circle" height="28" strokeWidth="1.5" width="28"></i>
</a>
</div>




    </>
  );
}
