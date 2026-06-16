import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      document.addEventListener("DOMContentLoaded", () => {
          // Initialize Lucide Icons
          if (typeof lucide !== 'undefined') {
              lucide.createIcons();
          }

          // GSAP Animations
          if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
              gsap.registerPlugin(ScrollTrigger);

              const textContainers = document.querySelectorAll('.reveal-text-container');
              textContainers.forEach(container => {
                  gsap.from(container, {
                      scrollTrigger: { trigger: container, start: "top 80%" },
                      y: 40, opacity: 0, duration: 1.2, ease: "power3.out"
                  });
              });

              gsap.utils.toArray('.reveal-delay-1, .reveal-delay-2').forEach((elem, i) => {
                  gsap.fromTo(elem,
                      { opacity: 0, y: 30 },
                      {
                          scrollTrigger: { trigger: elem, start: "top 85%" },
                          opacity: 1, y: 0, duration: 1, delay: i * 0.2, ease: "power2.out"
                      }
                  );
              });
          }
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 w-full max-w-[1200px] mx-auto flex justify-between pointer-events-none z-0">
<div className="w-px h-full bg-[#483C32]/[0.06] relative overflow-hidden">
<div className="absolute top-[-100px] left-0 w-full h-[100px] opacity-50 bg-gradient-to-b from-transparent to-[#7B6FD4]" style={{animation: 'beam-drop 5s infinite linear'}}></div>
</div>
<div className="hidden md:block w-px h-full bg-[#483C32]/[0.06] relative overflow-hidden">
<div className="absolute top-[-100px] left-0 w-full h-[100px] opacity-50 bg-gradient-to-b from-transparent to-[#7B6FD4]" style={{animation: 'beam-drop 8s infinite linear'}}></div>
</div>
<div className="w-px h-full bg-[#483C32]/[0.06] relative overflow-hidden">
<div className="absolute top-[-100px] left-0 w-full h-[100px] opacity-50 bg-gradient-to-b from-transparent to-[#7B6FD4]" style={{animation: 'beam-drop 6s infinite linear'}}></div>
</div>
<div className="hidden md:block w-px h-full bg-[#483C32]/[0.06] relative overflow-hidden">
<div className="absolute top-[-100px] left-0 w-full h-[100px] opacity-50 bg-gradient-to-b from-transparent to-[#7B6FD4]" style={{animation: 'beam-drop 9s infinite linear'}}></div>
</div>
<div className="w-px h-full bg-[#483C32]/[0.06] relative overflow-hidden">
<div className="absolute top-[-100px] left-0 w-full h-[100px] opacity-50 bg-gradient-to-b from-transparent to-[#7B6FD4]" style={{animation: 'beam-drop 7s infinite linear'}}></div>
</div>
</div>

<nav className="fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur-xl border-b border-[#483C32]/5 bg-[#FFFCF5]/70">
<div className="max-w-[1200px] mx-auto px-6 h-20 flex items-center justify-between">
<a className="flex items-center group" href="#">
<img alt="Casa Marú Logo" className="h-10 w-auto object-contain group-hover:opacity-80 transition-opacity duration-300" src="https://casamaru.co/wp-content/uploads/2026/03/Casa-Maru-Manizales-Ninos-bebes.png"/>
</a>
<div className="hidden xl:flex items-center gap-8">
<a className="text-sm font-medium text-[#483C32]/70 hover:text-[#7B6FD4] transition-colors tracking-tight" href="#experiencias">
            Experiencias
          </a>
<a className="text-sm font-medium text-[#483C32]/70 hover:text-[#7B6FD4] transition-colors tracking-tight" href="#salida">
            La Salida del Puerto
          </a>
<a className="text-sm font-medium text-[#483C32]/70 hover:text-[#7B6FD4] transition-colors tracking-tight" href="#instituciones">
            Para instituciones
          </a>
<a className="text-sm font-medium text-[#483C32]/70 hover:text-[#7B6FD4] transition-colors tracking-tight" href="#filosofia">
            Filosofía
          </a>
<a className="text-sm font-medium text-[#483C32]/70 hover:text-[#7B6FD4] transition-colors tracking-tight" href="#angela">
            Sobre Ángela
          </a>
</div>
<button className="bg-[#7B6FD4] text-white px-5 py-2.5 rounded-full text-sm font-medium tracking-wide shadow-lg shadow-[#7B6FD4]/20 flex items-center gap-2 hover:bg-[#6a5ec2] hover:-translate-y-0.5 transition-all duration-300">
          Reservar lugar
          <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
</div>
</nav>

<main className="relative pt-48 pb-24 overflow-hidden z-10">
<div className="max-w-[1200px] mx-auto px-6 relative">
<div className="flex justify-center mb-10">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#7B6FD4]/20 bg-white/80 backdrop-blur-md shadow-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7B6FD4] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#7B6FD4]"></span>
</span>
<span className="text-xs font-sans uppercase tracking-widest text-[#7B6FD4] font-medium">
              Manizales · Primera Infancia
            </span>
</div>
</div>
<div className="text-center max-w-5xl mx-auto mb-8">
<h1 className="font-serif font-normal text-6xl md:text-[80px] leading-[1.05] text-[#483C32] tracking-tight text-balance reveal-text-container">
            Un lugar donde los niños
            <br/>
            simplemente
            <span className="text-[#7B6FD4] italic font-light">son</span>
            niños.
          </h1>
</div>
<div className="text-center max-w-2xl mx-auto mb-14 opacity-0 reveal-delay-1">
<p className="font-sans text-xl md:text-2xl text-[#483C32]/70 leading-relaxed font-light text-balance">
            Casa Marú es un espacio de juego libre, lectura afectiva y arte para
            la primera infancia. Un hogar para explorar, para crecer, para
            pertenecer.
          </p>
</div>
<div className="flex flex-col sm:flex-row justify-center gap-4 mb-24 opacity-0 reveal-delay-2">
<button className="bg-[#7B6FD4] text-white px-8 py-3.5 rounded-full text-base font-medium tracking-wide shadow-xl shadow-[#7B6FD4]/20 transition-all duration-300 flex items-center justify-center gap-2 hover:-translate-y-1 hover:shadow-[#7B6FD4]/40">
            Conoce nuestras experiencias
            <i className="w-5 h-5" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
<button className="px-8 py-3.5 rounded-full border border-[#483C32]/10 text-[#483C32] font-medium text-base hover:bg-white transition-all duration-300 bg-white/50 backdrop-blur-sm shadow-sm hover:shadow-md">
            ¿Qué es Casa Marú?
          </button>
</div>

<div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-[32px] overflow-hidden shadow-2xl shadow-[#483C32]/10 border border-[#483C32]/5 group reveal-delay-2 bg-[#FFFCF5]">
<img alt="Interior Casa Maru" className="group-hover:scale-105 transition-transform duration-[1.5s] ease-out w-full h-full object-cover" src="https://casamaru.co/wp-content/uploads/2026/03/Casa-Maru-Manizales-ninos-juego-libre-libros-talleres.jpeg?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#483C32]/10 to-transparent pointer-events-none"></div>
</div>
</div>
</main>

<div className="w-full py-6 overflow-hidden border-y border-[#483C32]/5 bg-white marquee-container relative z-10">
<div className="flex whitespace-nowrap marquee-content">
<div className="flex gap-12 items-center pr-12">
<span className="text-[#483C32]/40 font-medium text-sm uppercase tracking-[0.2em]">
            Juego Libre
          </span>
<span className="text-[#483C32]/40 font-medium text-sm uppercase tracking-[0.2em]">
            Lectura Afectiva
          </span>
<span className="text-[#483C32]/40 font-medium text-sm uppercase tracking-[0.2em]">
            Arte
          </span>
<span className="text-[#483C32]/40 font-medium text-sm uppercase tracking-[0.2em]">
            Manizales
          </span>
<span className="text-[#483C32]/40 font-medium text-sm uppercase tracking-[0.2em]">
            Primera Infancia
          </span>
<span className="text-[#483C32]/40 font-medium text-sm uppercase tracking-[0.2em]">
            Comunidad
          </span>
<span className="text-[#483C32]/40 font-medium text-sm uppercase tracking-[0.2em]">
            Movimiento Libre
          </span>
<span className="text-[#483C32]/40 font-medium text-sm uppercase tracking-[0.2em]">
            Pikler
          </span>
<span className="text-[#483C32]/40 font-medium text-sm uppercase tracking-[0.2em]">
            Reggio Emilia
          </span>
<span className="text-[#483C32]/40 font-medium text-sm uppercase tracking-[0.2em]">
            Cuentos
          </span>
</div>
<div className="flex gap-12 items-center pr-12">
<span className="text-[#483C32]/40 font-medium text-sm uppercase tracking-[0.2em]">
            Juego Libre
          </span>
<span className="text-[#483C32]/40 font-medium text-sm uppercase tracking-[0.2em]">
            Lectura Afectiva
          </span>
<span className="text-[#483C32]/40 font-medium text-sm uppercase tracking-[0.2em]">
            Arte
          </span>
<span className="text-[#483C32]/40 font-medium text-sm uppercase tracking-[0.2em]">
            Manizales
          </span>
<span className="text-[#483C32]/40 font-medium text-sm uppercase tracking-[0.2em]">
            Primera Infancia
          </span>
<span className="text-[#483C32]/40 font-medium text-sm uppercase tracking-[0.2em]">
            Comunidad
          </span>
<span className="text-[#483C32]/40 font-medium text-sm uppercase tracking-[0.2em]">
            Movimiento Libre
          </span>
<span className="text-[#483C32]/40 font-medium text-sm uppercase tracking-[0.2em]">
            Pikler
          </span>
<span className="text-[#483C32]/40 font-medium text-sm uppercase tracking-[0.2em]">
            Reggio Emilia
          </span>
<span className="text-[#483C32]/40 font-medium text-sm uppercase tracking-[0.2em]">
            Cuentos
          </span>
</div>
</div>
</div>

<section className="bg-[#FFFCF5] z-10 pt-32 pb-32 relative">
<div className="max-w-[900px] mx-auto px-6">
<span className="text-xs font-sans font-medium uppercase tracking-widest text-[#7B6FD4] mb-6 block text-center">
          Por qué existimos
        </span>
<h2 className="font-serif font-normal text-4xl md:text-6xl text-[#483C32] text-center mb-16 leading-tight tracking-tight text-balance">
          Vivimos en un mundo que apura a los niños.
          <br/>
<span className="italic text-[#7B6FD4]">
            Casa Marú decide ir despacio.
          </span>
</h2>
<div className="space-y-8 text-xl text-[#483C32]/80 leading-relaxed font-sans font-light md:text-left text-justify">
<p>
            Los niños de hoy son monitoreados, evaluados y calificados casi
            desde que nacen. El sistema escolar mide lo que saben, lo que
            producen, lo que demuestran. Casa Marú existe para ofrecer algo
            distinto: un espacio donde lo que importa no es el resultado sino el
            proceso, no la respuesta correcta sino la pregunta genuina.
          </p>
<p>
            Creemos que leer no es un instrumento para volverse inteligente. Es
            un puente — entre el niño y sus emociones, entre la familia y sus
            historias, entre una cultura y la siguiente. Los libros son objetos
            culturales, no materiales didácticos. Y esa diferencia lo cambia
            todo.
          </p>
<p>
            Creemos que los niños no necesitan que les enseñemos a caminar, ni a
            hablar, ni a jugar. Lo que necesitan es espacio para hacerlo a su
            ritmo, con adultos que confíen en su proceso en lugar de apurarlo.
          </p>
<p>
            Y creemos que ningún niño crece bien en soledad. Por eso Casa Marú
            es, antes que nada, una comunidad. Para los niños, sí. Y también
            para los adultos que los acompañan.
          </p>
</div>
<div className="mt-20 pt-10 border-t border-[#483C32]/10 text-center">
<p className="text-[#483C32]/60 text-3xl italic font-serif tracking-tight">
            "Los libros son barcos de papel que nos llevan a viajar hacia
            adentro de nuestro corazón"
          </p>
</div>
</div>
</section>

<section className="py-32 relative z-10 bg-white">
<div className="max-w-[1200px] mx-auto px-6">
<div className="text-center mb-20">
<span className="text-xs font-sans font-medium uppercase tracking-widest text-[#7B6FD4] mb-4 block">
            Lo que nos hace distintos
          </span>
<h2 className="font-serif font-normal text-5xl text-[#483C32] tracking-tight">
            No somos un jardín. No somos un taller.
            <br/>
            Somos
            <span className="italic text-[#7B6FD4]">otra cosa.</span>
</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group relative overflow-hidden bg-white hover:bg-gray-50/50 p-8 rounded-[24px] border border-[#483C32]/5 hover:border-[#7B6FD4]/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_40px_-10px_rgba(123,111,212,0.15)]">
<div className="w-12 h-12 bg-[#FFFCF5] rounded-xl flex items-center justify-center mb-6 text-[#7B6FD4] group-hover:bg-[#7B6FD4] group-hover:text-white transition-colors duration-300">
<i className="w-6 h-6" data-lucide="home" strokeWidth="1.5"></i>
</div>
<h3 className="font-serif text-2xl text-[#483C32] mb-3 tracking-tight font-normal">
              El espacio es el mensaje
            </h3>
<p className="text-base text-[#483C32]/70 leading-relaxed font-light">
              Cada rincón fue pensado para invitar a la calma. La luz, los
              materiales naturales, la altura de las estanterías. Todo comunica:
              <span className="italic">aquí eres bienvenido, aquí eres capaz.</span>
</p>
</div>

<div className="group relative overflow-hidden bg-white hover:bg-gray-50/50 p-8 rounded-[24px] border border-[#483C32]/5 hover:border-[#7B6FD4]/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_40px_-10px_rgba(123,111,212,0.15)]">
<div className="w-12 h-12 bg-[#FFFCF5] rounded-xl flex items-center justify-center mb-6 text-[#7B6FD4] group-hover:bg-[#7B6FD4] group-hover:text-white transition-colors duration-300">
<i className="w-6 h-6" data-lucide="book-open" strokeWidth="1.5"></i>
</div>
<h3 className="font-serif text-2xl text-[#483C32] mb-3 tracking-tight font-normal">
              Los cuentos se viven
            </h3>
<p className="text-base text-[#483C32]/70 leading-relaxed font-light">
              Los libros en Casa Marú no son recursos para enseñar valores. Son
              experiencias en sí mismas — encuentros que conectan a los niños
              con su propia vida interior.
            </p>
</div>

<div className="group relative overflow-hidden bg-white hover:bg-gray-50/50 p-8 rounded-[24px] border border-[#483C32]/5 hover:border-[#7B6FD4]/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_40px_-10px_rgba(123,111,212,0.15)]">
<div className="w-12 h-12 bg-[#FFFCF5] rounded-xl flex items-center justify-center mb-6 text-[#7B6FD4] group-hover:bg-[#7B6FD4] group-hover:text-white transition-colors duration-300">
<i className="w-6 h-6" data-lucide="rocket" strokeWidth="1.5"></i>
</div>
<h3 className="font-serif text-2xl text-[#483C32] mb-3 tracking-tight font-normal">
              Juego libre
            </h3>
<p className="text-base text-[#483C32]/70 leading-relaxed font-light">
              Los niños eligen. Los adultos observamos. Sin agenda. El juego
              libre es la forma más seria de aprender que existe, y aquí tiene
              todo el espacio del mundo.
            </p>
</div>

<div className="group relative overflow-hidden bg-white hover:bg-gray-50/50 p-8 rounded-[24px] border border-[#483C32]/5 hover:border-[#7B6FD4]/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_40px_-10px_rgba(123,111,212,0.15)]">
<div className="w-12 h-12 bg-[#FFFCF5] rounded-xl flex items-center justify-center mb-6 text-[#7B6FD4] group-hover:bg-[#7B6FD4] group-hover:text-white transition-colors duration-300">
<i className="w-6 h-6" data-lucide="users" strokeWidth="1.5"></i>
</div>
<h3 className="font-serif text-2xl text-[#483C32] mb-3 tracking-tight font-normal">
              Familias reales
            </h3>
<p className="text-base text-[#483C32]/70 leading-relaxed font-light">
              Casa Marú no es un lugar donde se deja a los niños. Es un espacio
              donde las familias se encuentran, se escuchan y se sostienen. Una
              comunidad real.
            </p>
</div>
</div>
</div>
</section>

<section className="border-y border-[#483C32]/5 bg-[#FFFCF5] z-10 pt-32 pb-32 relative" id="experiencias">
<div className="max-w-[1200px] mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16">
<div>
<span className="text-xs font-sans font-medium uppercase tracking-widest text-[#7B6FD4] mb-4 block">
              Qué encontrarás aquí
            </span>
<h2 className="font-serif font-normal text-5xl md:text-6xl text-[#483C32] mb-4 tracking-tight">
              Experiencias diseñadas para
              <br/>
              los primeros años de vida.
            </h2>
<p className="text-[#483C32]/60 text-xl font-light mt-4 max-w-lg">
              Para niños de 1 a 7 años y sus familias. Grupos pequeños. Atención
              real.
            </p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-6">

<div className="md:col-span-8 rounded-[32px] bg-white border border-[#483C32]/5 p-8 md:p-12 flex flex-col md:flex-row gap-10 relative overflow-hidden group hover:shadow-[0_20px_40px_-10px_rgba(123,111,212,0.08)] transition-shadow duration-500">
<div className="flex-1 relative z-10 flex flex-col justify-between">
<div>
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#7B6FD4]/10 mb-6">
<i className="text-[#7B6FD4] w-3.5 h-3.5" data-lucide="heart" strokeWidth="1.5"></i>
<span className="text-xs font-medium uppercase tracking-wider text-[#7B6FD4]">
                    El corazón de Casa Marú
                  </span>
</div>
<h3 className="font-serif text-4xl text-[#483C32] mb-4 tracking-tight font-normal">
                  Ciclo de talleres mensuales
                </h3>
<p className="text-[#483C32]/70 text-base font-light leading-relaxed mb-8">
                  Dos veces por semana, niños de 1 a 4 años exploran el arte, el
                  sonido y los materiales en grupos de máximo 10. Sin listas de
                  cotejo, sin objetivos de producto. Solo proceso, solo
                  presencia.
                </p>
<ul className="mb-8 space-y-3">
<li className="text-sm font-medium text-[#483C32] flex items-center gap-3">
<div className="w-1.5 h-1.5 bg-[#7B6FD4] rounded-full"></div>
                    MARTES · JUEGOS SONOROS
                  </li>
<li className="text-sm font-medium text-[#483C32] flex items-center gap-3">
<div className="w-1.5 h-1.5 bg-[#7B6FD4] rounded-full"></div>
                    VIERNES · EXPLORACIÓN SENSORIAL
                  </li>
</ul>
<div className="bg-[#FFFCF5] p-5 rounded-2xl mb-8 border border-[#483C32]/5">
<p className="text-sm text-[#483C32]/70 mb-2">
                    6 talleres:
                    <span className="font-medium text-[#483C32]">$240.000</span>
</p>
<p className="text-sm text-[#483C32]/70 mb-2">
                    4 talleres:
                    <span className="font-medium text-[#483C32]">$165.000</span>
</p>
<p className="text-sm text-[#483C32]/70">
                    2 talleres:
                    <span className="font-medium text-[#483C32]">$85.000</span>
</p>
</div>
</div>
<button className="bg-[#7B6FD4] text-white px-7 py-3.5 rounded-full text-sm font-medium tracking-wide w-fit flex items-center gap-2 hover:bg-[#6a5ec2] hover:-translate-y-0.5 transition-all shadow-md shadow-[#7B6FD4]/20">
                Ver disponibilidad
                <i className="w-4 h-4" data-lucide="calendar" strokeWidth="1.5"></i>
</button>
</div>
<div className="md:w-5/12 rounded-[24px] overflow-hidden h-64 md:h-auto relative">
<img className="group-hover:scale-105 transition-transform duration-[1.5s] ease-out w-full h-full object-cover" src="https://casamaru.co/wp-content/uploads/2026/03/Casa-Maru-Manizales-ninos-juego-libre-libros-talleres-2.jpeg?w=800&amp;q=80"/>
</div>
</div>

<div className="md:col-span-4 rounded-[32px] bg-white border border-[#483C32]/5 p-8 flex flex-col justify-between group hover:shadow-[0_20px_40px_-10px_rgba(123,111,212,0.08)] transition-all duration-500">
<div>
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F2C94C]/10 mb-6">
<span className="text-xs font-medium uppercase tracking-wider text-[#483C32]">
                  Fines de Semana
                </span>
</div>
<h3 className="font-serif text-4xl text-[#483C32] mb-4 tracking-tight font-normal">
                Hora del Cuento
              </h3>
<p className="text-[#483C32]/70 text-base font-light leading-relaxed mb-8">
                Un sábado al mes, las familias se sientan en círculo a escuchar
                un cuento. Sin preguntas de comprensión. Solo el placer de una
                historia bien contada.
              </p>
<p className="text-sm font-medium text-[#483C32] mb-8 bg-[#FFFCF5] p-4 rounded-xl border border-[#483C32]/5">
                15 familias · $30.000 adulto + niño
              </p>
</div>
<button className="w-full py-3.5 rounded-full border border-[#483C32]/10 text-[#483C32] text-sm font-medium tracking-wide hover:bg-[#483C32] hover:text-white transition-colors duration-300">
              Reservar lugar
            </button>
</div>

<div className="md:col-span-4 rounded-[32px] bg-white border border-[#483C32]/5 p-8 hover:shadow-[0_20px_40px_-10px_rgba(123,111,212,0.08)] transition-all duration-500">
<span className="text-xs font-medium uppercase tracking-wider text-[#7B6FD4] mb-5 block">
              ✦ Para Papás y Mamás
            </span>
<h3 className="font-serif text-3xl text-[#483C32] mb-4 tracking-tight font-normal">
              Asesoría pedagógica
            </h3>
<p className="text-[#483C32]/70 text-base font-light leading-relaxed mb-8">
              ¿Eligiendo jardín? ¿Dudas sobre desarrollo? Una conversación
              honesta con Ángela puede cambiar la forma en que ves esta etapa.
            </p>
<a className="text-sm font-medium text-[#7B6FD4] tracking-wide hover:opacity-70 transition-opacity flex items-center gap-1.5" href="#">
              Agendar sesión
              <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>

<div className="md:col-span-8 rounded-[32px] bg-[#7B6FD4] p-8 md:p-12 text-white relative overflow-hidden flex flex-col md:flex-row items-center gap-10 shadow-2xl shadow-[#7B6FD4]/20 group" id="salida">
<div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-[100px] pointer-events-none"></div>
<div className="relative z-10 flex-1">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 mb-6 backdrop-blur-sm">
<i className="text-white w-3.5 h-3.5" data-lucide="sparkles" strokeWidth="1.5"></i>
<span className="text-xs font-medium uppercase tracking-wider text-white">
                  Programa Completo
                </span>
</div>
<h3 className="font-serif text-4xl text-white mb-5 tracking-tight font-normal">
                La Salida del Puerto
              </h3>
<p className="text-white/90 text-base font-light leading-relaxed mb-8">
                La transición al jardín no debería ser un salto al vacío. Es un
                acompañamiento de 6 semanas donde Ángela trabaja con la familia
                para que el primer día de jardín sea el comienzo de una
                aventura.
              </p>
<div className="flex flex-wrap gap-2.5 mb-8">
<span className="px-3 py-1.5 bg-white/10 border border-white/10 rounded-lg text-xs font-medium text-white/90 backdrop-blur-sm">
                  Evaluación
                </span>
<span className="px-3 py-1.5 bg-white/10 border border-white/10 rounded-lg text-xs font-medium text-white/90 backdrop-blur-sm">
                  Guía Jardín
                </span>
<span className="px-3 py-1.5 bg-white/10 border border-white/10 rounded-lg text-xs font-medium text-white/90 backdrop-blur-sm">
                  Protocolo
                </span>
</div>
<button className="text-white border-b border-white/50 pb-1 text-sm font-medium tracking-wide hover:text-[#F2C94C] hover:border-[#F2C94C] transition-colors duration-300">
                Quiero saber más
              </button>
</div>
<div className="md:w-5/12 relative z-10">
<div className="bg-white/10 border border-white/10 rounded-[24px] p-6 text-center backdrop-blur-md">
<p className="font-serif italic text-xl text-white/90 font-light leading-snug">
                  "Como zarpar bien: con raíces fijas y viento a favor."
                </p>
<div className="mt-6 pt-4 border-t border-white/10">
<p className="text-xs text-white/70 font-medium tracking-wider uppercase">
                    Solo 2 familias por mes
                  </p>
</div>
</div>
</div>
</div>

<div className="md:col-span-12 rounded-[24px] bg-white border border-[#483C32]/5 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 hover:shadow-[0_20px_40px_-10px_rgba(123,111,212,0.05)] transition-all duration-500">
<div className="flex items-center gap-5">
<div className="w-12 h-12 rounded-xl bg-[#4A7C59]/10 flex items-center justify-center text-[#4A7C59]">
<i className="w-6 h-6" data-lucide="leaf" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="font-serif text-2xl text-[#483C32] font-normal tracking-tight">
                  Juego libre para bebés
                  <span className="text-xs align-top bg-[#E8866A] text-white px-2 py-0.5 rounded-md ml-2 font-medium">
                    Próximamente
                  </span>
</h3>
<p className="text-sm text-[#483C32]/60 font-light mt-1">
                  Para bebés de 2 a 12 meses. Pedagogía Pikler.
                </p>
</div>
</div>
<div className="flex gap-3 w-full md:w-auto relative">
<input className="bg-[#FFFCF5] border border-[#483C32]/10 rounded-xl px-5 py-3 text-base text-[#483C32] w-full md:w-72 focus:outline-none focus:border-[#7B6FD4] focus:ring-1 focus:ring-[#7B6FD4] transition-all placeholder:text-[#483C32]/30" placeholder="Tu correo electrónico" type="email"/>
<button className="bg-[#483C32] text-white px-6 py-3 rounded-xl text-sm font-medium tracking-wide whitespace-nowrap hover:bg-[#7B6FD4] hover:-translate-y-0.5 transition-all duration-300 shadow-md">
                Avísame
              </button>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden bg-white" id="filosofia">
<div className="max-w-[1000px] mx-auto px-6 relative z-10">
<div className="mb-24 text-center md:text-left">
<span className="text-xs font-sans font-medium uppercase tracking-widest text-[#7B6FD4] mb-4 block">
            La Pedagogía Marú
          </span>
<h2 className="font-serif font-normal text-5xl md:text-6xl text-[#483C32] tracking-tight text-balance">
            Creemos que los niños ya saben.
            <br/>
            Nuestro trabajo es
            <span className="italic text-[#E8866A]">acompañarlos.</span>
</h2>
</div>
<div className="space-y-16">

<div className="flex flex-col md:flex-row gap-6 md:gap-16 group">
<div className="md:w-1/4">
<span className="font-mono text-7xl md:text-8xl text-[#483C32]/5 font-normal group-hover:text-[#7B6FD4] transition-colors duration-500 block leading-none">
                01
              </span>
</div>
<div className="md:w-3/4 pt-4 border-t border-[#483C32]/10">
<h3 className="font-serif text-3xl text-[#483C32] mb-4 tracking-tight font-normal">
                El niño como protagonista
              </h3>
<p className="text-xl font-light text-[#483C32]/70 leading-relaxed text-justify md:text-left">
                El niño no es un recipiente vacío que hay que llenar de
                información. Es un ser competente, curioso, lleno de preguntas y
                de lenguajes desde sus primeros meses. No necesita que le
                enseñemos a caminar — lo hará solo. No necesita que le enseñemos
                a hablar — encontrará su voz. Lo que necesita es que confiemos
                en él mientras lo hace. Le creemos. Le hacemos espacio.
              </p>
</div>
</div>

<div className="flex flex-col md:flex-row gap-6 md:gap-16 group">
<div className="md:w-1/4">
<span className="font-mono text-7xl md:text-8xl text-[#483C32]/5 font-normal group-hover:text-[#F2C94C] transition-colors duration-500 block leading-none">
                02
              </span>
</div>
<div className="md:w-3/4 pt-4 border-t border-[#483C32]/10">
<h3 className="font-serif text-3xl text-[#483C32] mb-4 tracking-tight font-normal">
                Los libros como puentes
              </h3>
<p className="text-xl font-light text-[#483C32]/70 leading-relaxed text-justify md:text-left">
                Nos han dicho que hay que leer para que los niños sean más
                inteligentes. En Casa Marú leemos para que se sientan amados. Un
                libro no es una herramienta de aprendizaje — es un objeto
                cultural, un puente entre una historia y la vida de quien la
                escucha, entre el lenguaje y la emoción, entre una familia y sus
                propias palabras. Esa diferencia lo cambia todo.
              </p>
</div>
</div>

<div className="flex flex-col md:flex-row gap-6 md:gap-16 group">
<div className="md:w-1/4">
<span className="font-mono text-7xl md:text-8xl text-[#483C32]/5 font-normal group-hover:text-[#4A7C59] transition-colors duration-500 block leading-none">
                03
              </span>
</div>
<div className="md:w-3/4 pt-4 border-t border-[#483C32]/10">
<h3 className="font-serif text-3xl text-[#483C32] mb-4 tracking-tight font-normal">
                El adulto como observador
              </h3>
<p className="text-xl font-light text-[#483C32]/70 leading-relaxed text-justify md:text-left">
                No dirigimos el juego. No mostramos cómo usar los materiales. No
                intervenimos cuando el proceso se pone difícil. Observamos,
                confiamos. Y eso es, para muchos niños, el regalo más grande que
                han recibido: un adulto que los mira sin apurarlos.
              </p>
</div>
</div>

<div className="flex flex-col md:flex-row gap-6 md:gap-16 group">
<div className="md:w-1/4">
<span className="font-mono text-7xl md:text-8xl text-[#483C32]/5 font-normal group-hover:text-[#E8866A] transition-colors duration-500 block leading-none">
                04
              </span>
</div>
<div className="md:w-3/4 pt-4 border-t border-[#483C32]/10">
<h3 className="font-serif text-3xl text-[#483C32] mb-4 tracking-tight font-normal">
                La comunidad como base
              </h3>
<p className="text-xl font-light text-[#483C32]/70 leading-relaxed text-justify md:text-left">
                Ningún niño crece bien en soledad. Y ningún padre o madre
                tampoco. Casa Marú es un espacio de encuentro — entre niños,
                entre familias, entre adultos que se acompañan en el viaje de
                criar. Aquí no hay juicio sobre el pañal ni sobre el sueño ni
                sobre la pantalla. Solo presencia y escucha.
              </p>
</div>
</div>
</div>
<div className="mt-24 p-12 bg-[#FFFCF5] rounded-[32px] text-center border border-[#483C32]/5">
<p className="font-serif text-3xl italic text-[#483C32]/80 mb-8 tracking-tight leading-snug">
            "Son los niños quienes nos enseñan un millón de universos posibles,
            que van desapareciendo a medida que nos hacemos más viejos."
          </p>
<div className="flex justify-center gap-3 flex-wrap">
<span className="px-4 py-1.5 bg-white border border-[#483C32]/10 rounded-full text-xs font-medium text-[#483C32]/60">
              Reggio Emilia
            </span>
<span className="px-4 py-1.5 bg-white border border-[#483C32]/10 rounded-full text-xs font-medium text-[#483C32]/60">
              Movimiento libre Pikler
            </span>
<span className="px-4 py-1.5 bg-white border border-[#483C32]/10 rounded-full text-xs font-medium text-[#483C32]/60">
              Crianza respetuosa
            </span>
<span className="px-4 py-1.5 bg-white border border-[#483C32]/10 rounded-full text-xs font-medium text-[#483C32]/60">
              Lectura afectiva
            </span>
</div>
</div>
</div>
</section>

<section className="text-white bg-[#3E322C] pt-32 pb-32" id="angela">
<div className="max-w-[1000px] mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
<div className="order-2 md:order-1">
<span className="text-xs font-sans font-medium uppercase tracking-widest text-white/50 mb-4 block">
            Quién está detrás
          </span>
<h2 className="text-5xl md:text-6xl font-normal font-serif mb-6 tracking-tight">
            Ángela Valencia
            <br/>
<span className="text-3xl text-white/60 mt-2 block italic">
              Pedagoga infantil, lectora.
            </span>
</h2>
<div className="space-y-4 text-white/80 text-lg font-light leading-relaxed mb-10">
<p>
              Apasionada por el lenguaje y la primera infancia. Formada en
              pedagogías activas, ha dedicado su carrera a crear espacios donde
              la palabra y el juego sean los protagonistas.
            </p>
</div>
<div className="flex flex-wrap gap-3 mb-10">
<span className="px-4 py-1.5 border border-white/20 bg-white/5 rounded-full text-xs font-medium tracking-wide">
              Pedagoga
            </span>
<span className="px-4 py-1.5 border border-white/20 bg-white/5 rounded-full text-xs font-medium tracking-wide">
              Especialista en lenguaje
            </span>
<span className="px-4 py-1.5 border border-white/20 bg-white/5 rounded-full text-xs font-medium tracking-wide">
              Formación Pikler
            </span>
</div>
<button className="bg-white text-[#3E322C] px-8 py-4 rounded-full text-sm font-medium tracking-wide hover:bg-[#FFFCF5] hover:-translate-y-0.5 transition-all duration-300 shadow-xl">
            Conocer más sobre el proyecto
          </button>
</div>
<div className="order-1 md:order-2 relative px-4 md:px-0">
<div className="w-full aspect-square rounded-[32px] overflow-hidden bg-white/5 border border-white/10 shadow-2xl">
<img className="hover:scale-105 transition-transform duration-[2s] ease-out opacity-90 w-full h-full object-cover" src="https://casamaru.co/wp-content/uploads/2026/03/Angela-valencia-pegagoga-infantil-Casa-Maru-Manizales-ninos-juego-libre-libros-talleres231.png?w=800&amp;q=80"/>
</div>
<div className="absolute -bottom-8 -left-4 md:-left-8 w-28 h-28 bg-[#7B6FD4] rounded-full flex items-center justify-center border-[6px] border-[#3E322C] shadow-xl">
<i className="text-white w-10 h-10" data-lucide="heart" strokeWidth="1.5"></i>
</div>
</div>
</div>
</section>

<section className="py-32 relative z-10 bg-[#FFFCF5]">
<div className="max-w-[1200px] mx-auto px-6">
<div className="text-center mb-20">
<span className="text-xs font-sans font-medium uppercase tracking-widest text-[#7B6FD4] mb-4 block">
            Lo que dicen las familias
          </span>
<h2 className="font-serif font-normal text-5xl text-[#483C32] tracking-tight">
            No hay mejor argumento
            <br/>
            que lo que vive un niño aquí.
          </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">

<div className="bg-white p-8 rounded-[24px] border border-[#483C32]/5 shadow-sm hover:shadow-md transition-shadow duration-300">
<div className="text-[#7B6FD4] text-4xl font-serif mb-4 leading-none">
              "
            </div>
<p className="text-base text-[#483C32]/70 font-light mb-6 leading-relaxed">
              Sentí a mi bebé tan cómodo y tranquilo como en nuestra propia
              casa. Pudo explorar con una seguridad que no había visto en ningún
              otro espacio.
            </p>
<p className="text-sm font-medium text-[#483C32]">
              Mamá de Simón,
              <span className="font-light text-[#483C32]/60">18 meses</span>
</p>
</div>

<div className="bg-white p-8 rounded-[24px] border border-[#483C32]/5 shadow-sm hover:shadow-md transition-shadow duration-300">
<div className="text-[#7B6FD4] text-4xl font-serif mb-4 leading-none">
              "
            </div>
<p className="text-base text-[#483C32]/70 font-light mb-6 leading-relaxed">
              Mi bebé está hablando mucho más desde que venimos a Casa Marú. No
              sé si es el espacio, los libros o la forma en que Ángela lo mira.
              Probablemente todo.
            </p>
<p className="text-sm font-medium text-[#483C32]">
              Mamá de Lucía,
              <span className="font-light text-[#483C32]/60">2 años</span>
</p>
</div>

<div className="bg-white p-8 rounded-[24px] border border-[#483C32]/5 shadow-sm hover:shadow-md transition-shadow duration-300">
<div className="text-[#7B6FD4] text-4xl font-serif mb-4 leading-none">
              "
            </div>
<p className="text-base text-[#483C32]/70 font-light mb-6 leading-relaxed">
              En los demás espacios los papás están en lo suyo y todo pasa muy
              rápido. Casa Marú se convirtió en comunidad también para mí.
            </p>
<p className="text-sm font-medium text-[#483C32]">
              Papá de Mateo,
              <span className="font-light text-[#483C32]/60">3 años</span>
</p>
</div>

<div className="bg-white p-8 rounded-[24px] border border-[#483C32]/5 shadow-sm hover:shadow-md transition-shadow duration-300">
<div className="text-[#7B6FD4] text-4xl font-serif mb-4 leading-none">
              "
            </div>
<p className="text-base text-[#483C32]/70 font-light mb-6 leading-relaxed">
              Me siento muy orgullosa de mi hijo. Ahora me pide que leamos
              juntos cada día. Eso no pasaba antes.
            </p>
<p className="text-sm font-medium text-[#483C32]">
              Mamá de Tomás,
              <span className="font-light text-[#483C32]/60">4 años</span>
</p>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-y border-[#483C32]/5">
<div className="text-center">
<div className="text-5xl font-serif font-normal text-[#483C32] mb-2 tracking-tight">
              500+
            </div>
<div className="text-xs uppercase font-medium text-[#483C32]/50 tracking-wider">
              Familias impactadas
            </div>
</div>
<div className="text-center">
<div className="text-5xl font-serif font-normal text-[#483C32] mb-2 tracking-tight">
              1.000+
            </div>
<div className="text-xs uppercase font-medium text-[#483C32]/50 tracking-wider">
              Niños en el espacio
            </div>
</div>
<div className="text-center">
<div className="text-5xl font-serif font-normal text-[#483C32] mb-2 tracking-tight">
              100+
            </div>
<div className="text-xs uppercase font-medium text-[#483C32]/50 tracking-wider">
              Talleres dirigidos
            </div>
</div>
<div className="text-center">
<div className="text-5xl font-serif font-normal text-[#483C32] mb-2 tracking-tight">
              2024
            </div>
<div className="text-xs uppercase font-medium text-[#483C32]/50 tracking-wider">
              Operando en Manizales
            </div>
</div>
</div>
</div>
</section>

<section className="py-32 relative z-10 bg-white" id="instituciones">
<div className="max-w-[1200px] mx-auto px-6">
<div className="text-center mb-20 max-w-3xl mx-auto">
<span className="text-xs font-sans font-medium uppercase tracking-widest text-[#7B6FD4] mb-4 block">
            Para organizaciones e instituciones
          </span>
<h2 className="font-serif font-normal text-5xl text-[#483C32] mb-6 tracking-tight">
            El conocimiento de Casa Marú,
            <br/>
            al servicio de quienes acompañan infancias.
          </h2>
<p className="text-[#483C32]/70 text-xl font-light mb-10 leading-relaxed">
            Para colegios, jardines infantiles, bibliotecas y organizaciones
            culturales. Todo lo que Ángela Valencia ha construido puede llevarse
            a su institución.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">

<div className="bg-[#FFFCF5] p-10 rounded-[32px] border border-[#483C32]/5 hover:shadow-[0_20px_40px_-10px_rgba(123,111,212,0.05)] transition-all duration-300">
<div className="w-14 h-14 rounded-2xl bg-[#7B6FD4]/10 flex items-center justify-center text-[#7B6FD4] mb-8">
<i className="w-7 h-7" data-lucide="mic" strokeWidth="1.5"></i>
</div>
<h3 className="font-serif text-3xl text-[#483C32] mb-4 tracking-tight font-normal">
              Narración Oral
            </h3>
<p className="text-base text-[#483C32]/70 font-light leading-relaxed">
              Leer en voz alta es un oficio. Ángela forma a maestros en
              herramientas concretas: manejo de la voz, ritmo, pausa y
              dispositivos artesanales como Kamishibai y Teatro de Sombras.
            </p>
</div>

<div className="bg-[#FFFCF5] p-10 rounded-[32px] border border-[#483C32]/5 hover:shadow-[0_20px_40px_-10px_rgba(123,111,212,0.05)] transition-all duration-300">
<div className="w-14 h-14 rounded-2xl bg-[#4A7C59]/10 flex items-center justify-center text-[#4A7C59] mb-8">
<i className="w-7 h-7" data-lucide="library" strokeWidth="1.5"></i>
</div>
<h3 className="font-serif text-3xl text-[#483C32] mb-4 tracking-tight font-normal">
              Curaduría de Libros
            </h3>
<p className="text-base text-[#483C32]/70 font-light leading-relaxed">
              ¿Qué hace que un libro sea bueno? Ayudamos a construir bibliotecas
              con criterio: calidad editorial, diversidad de voces y potencia
              estética más allá de los valores morales.
            </p>
</div>

<div className="bg-[#FFFCF5] p-10 rounded-[32px] border border-[#483C32]/5 hover:shadow-[0_20px_40px_-10px_rgba(123,111,212,0.05)] transition-all duration-300">
<div className="w-14 h-14 rounded-2xl bg-[#F2C94C]/10 flex items-center justify-center text-[#483C32] mb-8">
<i className="w-7 h-7 text-[#F2C94C]" data-lucide="users" strokeWidth="1.5"></i>
</div>
<h3 className="font-serif text-3xl text-[#483C32] mb-4 tracking-tight font-normal">
              Escuela de Familias
            </h3>
<p className="text-base text-[#483C32]/70 font-light leading-relaxed">
              Espacios de formación sobre crianza respetuosa, desarrollo del
              lenguaje y movimiento libre. Talleres presenciales o virtuales
              para equipos docentes o grupos de padres.
            </p>
</div>
</div>
<div className="text-center">
<button className="bg-[#7B6FD4] text-white px-10 py-4 rounded-full text-sm font-medium tracking-wide flex items-center gap-3 mx-auto shadow-lg shadow-[#7B6FD4]/20 hover:bg-[#6a5ec2] hover:-translate-y-0.5 transition-all duration-300">
            Hablemos de su institución
            <i className="w-4 h-4" data-lucide="mail" strokeWidth="1.5"></i>
</button>
<p className="text-sm text-[#483C32]/50 mt-6 font-light">
            También puede escribirnos directamente. Cada propuesta se construye
            a medida.
          </p>
</div>
</div>
</section>

<section className="overflow-hidden text-white bg-[#7B6FD4] pt-32 pb-32 relative">
<div className="absolute inset-0 overflow-hidden pointer-events-none">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-[120px]"></div>
</div>
<div className="max-w-[800px] mx-auto px-6 text-center relative z-10">
<h2 className="font-serif text-6xl md:text-7xl font-normal mb-8 tracking-tight">
          ¿Listos para explorar?
        </h2>
<p className="text-white/80 text-xl md:text-2xl mb-12 font-light leading-relaxed">
          Los cupos son limitados — no por estrategia, sino porque así funciona
          esto.
          <br className="hidden md:block"/>
          Con atención real, grupos pequeños y presencia plena.
        </p>
<div className="flex flex-col sm:flex-row gap-5 justify-center">
<button className="bg-white text-[#7B6FD4] px-10 py-4 rounded-full font-medium tracking-wide text-sm hover:bg-[#FFFCF5] hover:-translate-y-0.5 transition-all duration-300 shadow-xl shadow-black/10">
            Ver experiencias disponibles
          </button>
<button className="border border-white/30 bg-white/5 backdrop-blur-sm text-white px-10 py-4 rounded-full font-medium tracking-wide text-sm hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2">
<i className="w-4 h-4" data-lucide="message-circle" strokeWidth="1.5"></i>
            Escribirnos por WhatsApp
          </button>
</div>
<a className="inline-block mt-10 text-sm font-light text-white/60 hover:text-white transition-colors" href="#">
          También puedes seguirnos @casamaru en Instagram →
        </a>
</div>
</section>

<footer className="bg-[#3E322C] border-t border-white/5 py-20">
<div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
<div>
<img alt="Casa Marú Logo" className="h-10 w-auto object-contain mb-6 brightness-0 invert opacity-80" src="https://casamaru.co/wp-content/uploads/2026/03/Casa-Maru-Manizales-Ninos-bebes.png"/>
<p className="mb-4 text-sm font-light text-[#FFFCF5]/60 leading-relaxed">
            Ludoteca Taller
            <br/>
            Barrio Palermo, Manizales, Colombia
          </p>
<p className="text-sm font-light text-[#FFFCF5]/40">© 2026 Casa Marú</p>
</div>
<div>
<h5 className="text-[#FFFCF5] font-medium uppercase text-xs tracking-widest mb-6">
            El Espacio
          </h5>
<ul className="space-y-3 text-sm font-light text-[#FFFCF5]/60">
<li>
<a className="hover:text-[#7B6FD4] transition-colors" href="#">
                Qué es Casa Marú
              </a>
</li>
<li>
<a className="hover:text-[#7B6FD4] transition-colors" href="#">
                Nuestra filosofía
              </a>
</li>
</ul>
</div>
<div>
<h5 className="text-[#FFFCF5] font-medium uppercase text-xs tracking-widest mb-6">
            Experiencias
          </h5>
<ul className="space-y-3 text-sm font-light text-[#FFFCF5]/60">
<li>
<a className="hover:text-[#7B6FD4] transition-colors" href="#">
                Talleres mensuales
              </a>
</li>
<li>
<a className="hover:text-[#7B6FD4] transition-colors" href="#">
                Hora del Cuento
              </a>
</li>
</ul>
</div>
<div>
<h5 className="text-[#FFFCF5] font-medium uppercase text-xs tracking-widest mb-6">
            Instituciones
          </h5>
<ul className="space-y-3 text-sm font-light text-[#FFFCF5]/60">
<li>
<a className="hover:text-[#7B6FD4] transition-colors" href="#">
                Formación docente
              </a>
</li>
<li>
<a className="hover:text-[#7B6FD4] transition-colors" href="#">
                Narración oral
              </a>
</li>
</ul>
<div className="mt-8 flex gap-5 text-[#FFFCF5]/60">
<a className="hover:text-[#7B6FD4] transition-colors" href="#">
<i className="w-5 h-5" data-lucide="instagram" strokeWidth="1.5"></i>
</a>
<a className="hover:text-[#7B6FD4] transition-colors" href="#">
<i className="w-5 h-5" data-lucide="message-circle" strokeWidth="1.5"></i>
</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
