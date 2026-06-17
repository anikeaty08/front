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
      
{
"@context": "https://schema.org",
"@type": "EducationalOrganization",
"name": "Cyade Cancún",
"url": "https://www.cyadecancun.com",
"telephone": "+529980000000",
"address": {
"@type": "PostalAddress",
"streetAddress": "Calle Kuxtin 28, Fracc. Pehaltun, SM 505",
"addressLocality": "Cancún",
"addressRegion": "Q.R.",
"postalCode": "77533",
"addressCountry": "MX"
},
"geo": {
"@type": "GeoCoordinates",
"latitude": 21.1619,
"longitude": -86.8515
},
"openingHours": "Mo,Tu,We,Th,Fr 11:00-17:00 Sa 16:00-20:00"
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        window.addEventListener('scroll', function() {
          var header = document.getElementById('main-header');
          if (window.scrollY > 10) {
            header.classList.add('bg-white/90', 'backdrop-blur-md', 'border-b', 'border-[#E2E8F0]');
            header.classList.remove('bg-white');
          } else {
            header.classList.remove('bg-white/90', 'backdrop-blur-md', 'border-b', 'border-[#E2E8F0]');
            header.classList.add('bg-white');
          }
        });
      


          (function() {
            const initAccordion = () => {
              const buttons = document.querySelectorAll('.faq-button');
              buttons.forEach(button => {
                button.addEventListener('click', () => {
                  const content = button.nextElementSibling;
                  const icon = button.querySelector('.faq-icon');
                  const isExpanded = content.style.height && content.style.height !== '0px';

                  document.querySelectorAll('.faq-content').forEach(el => {
                    el.style.height = '0px';
                    el.classList.remove('opacity-100');
                    el.classList.add('opacity-0');
                  });
                  document.querySelectorAll('.faq-icon').forEach(el => {
                    el.classList.remove('rotate-180');
                  });

                  if (!isExpanded) {
                    content.style.height = content.scrollHeight + 'px';
                    content.classList.remove('opacity-0');
                    content.classList.add('opacity-100');
                    icon.classList.add('rotate-180');
                  }
                });
              });
            };

            if (document.readyState === 'loading') {
              document.addEventListener('DOMContentLoaded', initAccordion);
            } else {
              initAccordion();
            }

            if (window.IntersectionObserver) {
              const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                  if (entry.isIntersecting) {
                    entry.target.classList.remove('opacity-0', 'translate-y-6');
                    entry.target.classList.add('opacity-100', 'translate-y-0');
                    observer.unobserve(entry.target);
                  }
                });
              }, { threshold: 0.1 });
              document.querySelectorAll('#faq .scroll-animate').forEach(el => observer.observe(el));
            }
          })();
        


      (function() {
        function initObserver() {
          const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                entry.target.classList.remove('opacity-0', 'translate-y-6');
                entry.target.classList.add('opacity-100', 'translate-y-0');
                observer.unobserve(entry.target);
              }
            });
          }, { threshold: 0.1 });

          document.querySelectorAll('.scroll-animate').forEach(el => observer.observe(el));
        }

        if (document.readyState === 'loading') {
          document.addEventListener('DOMContentLoaded', initObserver);
        } else {
          initObserver();
        }
      })();
    
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
      

<a aria-label="Contactar por WhatsApp" className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300" href="https://wa.me/529981567801?text=Hola%2C%20vi%20su%20sitio%20web%20de%20Cyade%20y%20me%20gustar%C3%ADa%20informaci%C3%B3n%20general%20sobre%20los%20cursos." rel="noopener noreferrer" target="_blank">
<iconify-icon className="text-3xl" icon="solar:chat-round-dots-linear"></iconify-icon>
</a>

<header className="sticky top-0 z-50 bg-white transition-all duration-300" id="main-header">
<div className="max-w-[1200px] mx-auto px-[20px] md:px-[32px] h-[64px] md:h-[72px] flex items-center justify-between">

<div className="flex items-baseline gap-3">
<a className="lg:hidden flex items-center justify-center w-10 h-10 text-[#25D366] hover:bg-[#25D366]/10 rounded-full transition-colors" href="https://wa.me/529981567801?text=Hola%2C%20vi%20su%20sitio%20web%20de%20Cyade%20y%20me%20gustar%C3%ADa%20informaci%C3%B3n%20general%20sobre%20los%20cursos." rel="noopener noreferrer" target="_blank">
<iconify-icon className="text-[26px]" icon="lucide:message-circle"></iconify-icon>
</a>
<span className="hidden md:inline-block text-[12px] uppercase tracking-[0.15em] text-[#64748B] font-medium">
            Cancún
          </span>
</div>

<nav className="hidden lg:flex items-center gap-8 h-full">

<div className="relative group h-full flex items-center">
<button className="text-sm font-medium text-[#475569] hover:text-[#1E3A8A] transition-colors flex items-center gap-1">
              Cursos
              <iconify-icon className="text-[16px] mt-0.5 group-hover:rotate-180 transition-transform" icon="lucide:chevron-down"></iconify-icon>
</button>

<div className="absolute top-[calc(100%-10px)] left-1/2 -translate-x-1/2 w-[900px] bg-white border border-[#E2E8F0] rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:top-full transition-all duration-300 p-8 grid grid-cols-3 gap-8 pointer-events-none group-hover:pointer-events-auto z-50">

<div className="flex flex-col gap-5">
<div className="text-[#0F172A] font-semibold text-xs uppercase tracking-wider border-b border-[#E2E8F0] pb-2">
                  Terminar estudios
                </div>
<div className="flex flex-col gap-2">
<a className="group/link flex gap-3 items-start hover:bg-[#F8FAFC] p-2 -ml-2 rounded-lg transition-colors" href="#">
<iconify-icon className="text-[#1E3A8A] text-[20px] mt-0.5 shrink-0" icon="lucide:graduation-cap"></iconify-icon>
<div>
<div className="text-[#0F172A] text-sm font-semibold group-hover/link:text-[#1E3A8A] transition-colors">
                        Preparatoria CENEVAL
                      </div>
<div className="text-[#64748B] text-xs mt-0.5">
                        Certifícate en 3 meses
                      </div>
</div>
</a>
<a className="group/link flex gap-3 items-start hover:bg-[#F8FAFC] p-2 -ml-2 rounded-lg transition-colors" href="#">
<iconify-icon className="text-[#1E3A8A] text-[20px] mt-0.5 shrink-0" icon="lucide:book-open"></iconify-icon>
<div>
<div className="text-[#0F172A] text-sm font-semibold group-hover/link:text-[#1E3A8A] transition-colors">
                        Secundaria CENEVAL
                      </div>
<div className="text-[#64748B] text-xs mt-0.5">
                        Acredita tu nivel básico
                      </div>
</div>
</a>
</div>
</div>

<div className="flex flex-col gap-5">
<div className="text-[#0F172A] font-semibold text-xs uppercase tracking-wider border-b border-[#E2E8F0] pb-2">
                  Entrar a donde quieras
                </div>
<div className="flex flex-col gap-2">
<a className="group/link flex gap-3 items-start hover:bg-[#F8FAFC] p-2 -ml-2 rounded-lg transition-colors" href="#">
<iconify-icon className="text-[#D97706] text-[20px] mt-0.5 shrink-0" icon="lucide:school"></iconify-icon>
<div>
<div className="text-[#0F172A] text-sm font-semibold group-hover/link:text-[#D97706] transition-colors">
                        Ingreso a Preparatoria
                      </div>
<div className="text-[#64748B] text-xs mt-0.5">
                        Prepárate para admisión
                      </div>
</div>
</a>
<a className="group/link flex gap-3 items-start hover:bg-[#F8FAFC] p-2 -ml-2 rounded-lg transition-colors" href="#">
<iconify-icon className="text-[#D97706] text-[20px] mt-0.5 shrink-0" icon="lucide:building"></iconify-icon>
<div>
<div className="text-[#0F172A] text-sm font-semibold group-hover/link:text-[#D97706] transition-colors">
                        Ingreso a CECYTE
                      </div>
<div className="text-[#64748B] text-xs mt-0.5">
                        Examen de ubicación
                      </div>
</div>
</a>
<a className="group/link flex gap-3 items-start hover:bg-[#F8FAFC] p-2 -ml-2 rounded-lg transition-colors" href="#">
<iconify-icon className="text-[#D97706] text-[20px] mt-0.5 shrink-0" icon="lucide:library"></iconify-icon>
<div>
<div className="text-[#0F172A] text-sm font-semibold group-hover/link:text-[#D97706] transition-colors">
                        Ingreso a TEC de Cancún
                      </div>
<div className="text-[#64748B] text-xs mt-0.5">
                        Asegura tu lugar
                      </div>
</div>
</a>
<a className="group/link flex gap-3 items-start hover:bg-[#F8FAFC] p-2 -ml-2 rounded-lg transition-colors" href="#">
<iconify-icon className="text-[#D97706] text-[20px] mt-0.5 shrink-0" icon="lucide:building-2"></iconify-icon>
<div>
<div className="text-[#0F172A] text-sm font-semibold group-hover/link:text-[#D97706] transition-colors">
                        Ingreso a Universidad
                      </div>
<div className="text-[#64748B] text-xs mt-0.5">
                        Acredita el EXANI II
                      </div>
</div>
</a>
</div>
</div>

<div className="flex flex-col gap-5">
<div className="text-[#0F172A] font-semibold text-xs uppercase tracking-wider border-b border-[#E2E8F0] pb-2">
                  Apoyo académico
                </div>
<div className="flex flex-col gap-2">
<a className="group/link flex gap-3 items-start hover:bg-[#F8FAFC] p-2 -ml-2 rounded-lg transition-colors" href="#">
<iconify-icon className="text-[#475569] text-[20px] mt-0.5 shrink-0" icon="lucide:compass"></iconify-icon>
<div>
<div className="text-[#0F172A] text-sm font-semibold group-hover/link:text-[#1E3A8A] transition-colors">
                        Orientación Vocacional
                      </div>
<div className="text-[#64748B] text-xs mt-0.5">
                        Descubre tu pasión
                      </div>
</div>
</a>
<a className="group/link flex gap-3 items-start hover:bg-[#F8FAFC] p-2 -ml-2 rounded-lg transition-colors" href="#">
<iconify-icon className="text-[#475569] text-[20px] mt-0.5 shrink-0" icon="lucide:pen-tool"></iconify-icon>
<div>
<div className="text-[#0F172A] text-sm font-semibold group-hover/link:text-[#1E3A8A] transition-colors">
                        Regularización
                      </div>
<div className="text-[#64748B] text-xs mt-0.5">
                        Nivela tus conocimientos
                      </div>
</div>
</a>
<a className="group/link flex gap-3 items-start hover:bg-[#F8FAFC] p-2 -ml-2 rounded-lg transition-colors" href="#">
<iconify-icon className="text-[#475569] text-[20px] mt-0.5 shrink-0" icon="lucide:lightbulb"></iconify-icon>
<div>
<div className="text-[#0F172A] text-sm font-semibold group-hover/link:text-[#1E3A8A] transition-colors">
                        Técnicas de estudio
                      </div>
<div className="text-[#64748B] text-xs mt-0.5">
                        Mejora tu aprendizaje
                      </div>
</div>
</a>
</div>
</div>
</div>
</div>
<a className="text-sm font-medium text-[#475569] hover:text-[#1E3A8A] transition-colors" href="#nosotros">
            Nosotros
          </a>
<a className="text-sm font-medium text-[#475569] hover:text-[#1E3A8A] transition-colors" href="#egresados">
            Egresados
          </a>
<a className="text-sm font-medium text-[#475569] hover:text-[#1E3A8A] transition-colors" href="#contacto">
            Contacto
          </a>
</nav>

<div className="flex items-center gap-3 lg:gap-4">

<a className="lg:hidden flex items-center justify-center w-10 h-10 text-[#25D366] hover:bg-[#25D366]/10 rounded-full transition-colors" href="#">
<iconify-icon className="text-[26px]" icon="lucide:message-circle"></iconify-icon>
</a>

<a className="hidden lg:flex items-center justify-center px-4 py-2 border border-[#E2E8F0] text-[#0F172A] text-sm font-semibold rounded-lg hover:bg-[#F8FAFC] hover:border-[#CBD5E1] transition-all" href="#">
            Iniciar sesión
          </a>
<a className="hidden lg:flex items-center gap-2 bg-[#D97706] text-white px-5 py-2.5 rounded-lg text-sm font-semibold shadow-sm hover:shadow-md hover:bg-[#b06105] transition-all" href="https://wa.me/529981567801?text=Hola%2C%20vi%20su%20sitio%20web%20de%20Cyade%20y%20me%20gustar%C3%ADa%20informaci%C3%B3n%20general%20sobre%20los%20cursos." rel="noopener noreferrer" target="_blank">
<iconify-icon className="text-lg" icon="lucide:message-circle"></iconify-icon>
            Hablar por WhatsApp
          </a>

<button className="lg:hidden text-[#0F172A] p-1 -mr-2 flex items-center justify-center" onclick="document.getElementById('mobile-menu').classList.remove('hidden'); document.body.style.overflow='hidden';">
<iconify-icon className="text-[28px]" icon="lucide:menu"></iconify-icon>
</button>
</div>
</div>

<div className="hidden fixed inset-0 z-[60] bg-white flex flex-col h-[100dvh] overflow-hidden" id="mobile-menu">
<div className="flex items-center justify-between px-[20px] h-[64px] border-b border-[#E2E8F0] shrink-0">
<div className="font-fraunces font-semibold text-[24px] text-[#0F172A] tracking-tight flex items-baseline">
            Cyade
            <span className="text-[#D97706]">.</span>
</div>
<button className="text-[#0F172A] p-1 -mr-2 flex items-center justify-center" onclick="document.getElementById('mobile-menu').classList.add('hidden'); document.body.style.overflow='auto';">
<iconify-icon className="text-[28px]" icon="lucide:x"></iconify-icon>
</button>
</div>
<div className="flex-grow overflow-y-auto px-6 py-8 flex flex-col gap-8">
<nav className="flex flex-col gap-8">
<div>
<span className="text-[24px] font-semibold text-[#0F172A] block mb-5 border-b border-[#E2E8F0] pb-2">
                Cursos
              </span>
<div className="flex flex-col gap-5 pl-2">
<a className="text-lg text-[#475569] hover:text-[#1E3A8A]" href="#">
                  Preparatoria en 3 meses
                </a>
<a className="text-lg text-[#475569] hover:text-[#1E3A8A]" href="#">
                  Secundaria CENEVAL
                </a>
<a className="text-lg text-[#475569] hover:text-[#1E3A8A]" href="#">
                  Ingreso a Preparatoria / CECYTE
                </a>
<a className="text-lg text-[#475569] hover:text-[#1E3A8A]" href="#">
                  Ingreso a Universidad / TEC
                </a>
</div>
</div>
<a className="text-[24px] font-semibold text-[#0F172A] hover:text-[#1E3A8A]" href="#nosotros">
              Nosotros
            </a>
<a className="text-[24px] font-semibold text-[#0F172A] hover:text-[#1E3A8A]" href="#egresados">
              Egresados
            </a>
<a className="text-[24px] font-semibold text-[#0F172A] hover:text-[#1E3A8A]" href="#contacto">
              Contacto
            </a>
</nav>
<div className="mt-auto flex flex-col gap-4 pt-10">
<a className="w-full flex items-center justify-center px-4 py-3.5 border border-[#E2E8F0] text-[#0F172A] text-lg font-semibold rounded-lg hover:bg-[#F8FAFC]" href="#">
              Iniciar sesión
            </a>
<a className="w-full flex items-center justify-center gap-2 bg-[#D97706] text-white px-4 py-3.5 rounded-lg text-lg font-semibold shadow-sm hover:bg-[#b06105]" href="https://wa.me/529981567801?text=Hola%2C%20vi%20su%20sitio%20web%20de%20Cyade%20y%20me%20gustar%C3%ADa%20informaci%C3%B3n%20general%20sobre%20los%20cursos." rel="noopener noreferrer" target="_blank">
<iconify-icon className="text-xl" icon="lucide:message-circle"></iconify-icon>
              Hablar por WhatsApp
            </a>
</div>
</div>
</div>


</header>

<main className="flex-grow">
<section className="relative pt-24 pb-20 md:pt-32 md:pb-28 px-6 overflow-hidden">
<div className="absolute inset-0 bg-grid-pattern opacity-40 z-0 mask-image: linear-gradient(to bottom, white, transparent)"></div>
<div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#EFF6FF] rounded-full blur-[100px] opacity-60 z-0 pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
<div className="max-w-[1000px] mx-auto text-center relative z-10 flex flex-col items-center">

<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#D1FAE5] border border-[#059669]/20 text-[#059669] text-xs font-medium mb-8 shadow-sm">
<iconify-icon className="text-base" icon="solar:diploma-verified-linear"></iconify-icon>
            Institución Oficial SEP • Acuerdo 286
          </div>

<h1 className="font-fraunces font-semibold text-5xl md:text-6xl text-[#0F172A] tracking-tight leading-[1.1] mb-6">
            Termina tu prepa en 4 meses y supérate,
            <br className="hidden md:block"/>
            consigue un mejor trabajo o entra a la
            <span className="text-[#1E3A8A]">universidad.</span>
</h1>

<p className="text-base md:text-lg text-[#475569] max-w-2xl mx-auto mb-10">
            No pierdas años estudiando. Con clases en vivo, profesores expertos
            y nuestra metodología probada por 16 años en Cancún, te preparamos
            para aprobar tu examen y obtener tu certificado oficial a la
            primera.
          </p>

<div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
<a className="bg-[#D97706] text-white px-7 py-3.5 rounded-lg text-base font-semibold shadow-sm hover:shadow-md hover:scale-[1.02] transition-all flex items-center justify-center gap-2 w-full sm:w-auto" href="#programas">
              Descubre tu programa ideal
              <iconify-icon className="text-xl" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="border-[1.5px] border-[#0F172A] text-[#0F172A] bg-transparent px-7 py-3.5 rounded-lg text-base font-semibold hover:bg-[#0F172A] hover:text-white transition-all flex items-center justify-center w-full sm:w-auto" href="https://wa.me/529981567801?text=Hola%2C%20vi%20su%20sitio%20y%20quiero%20saber%20cu%C3%A1l%20curso%20me%20conviene.%20Mi%20nombre%20es%3A%20" rel="noopener noreferrer" target="_blank">
              Recibir asesoría gratuita
            </a>
</div>
</div>
</section>

<section className="bg-[#F8FAFC] py-12" id="nosotros">
<div className="max-w-[1200px] mx-auto px-6">
<h2 className="text-[12px] uppercase tracking-widest text-[#64748B] text-center font-medium mb-10">
            LOS NÚMEROS QUE RESPALDAN NUESTRO TRABAJO
          </h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-8 md:gap-8">
<div className="flex flex-col items-center text-center">
<span className="font-fraunces font-semibold text-[40px] md:text-[56px] text-[#0F172A] leading-none mb-2">
                16+
              </span>
<span className="text-[15px] text-[#475569]">
                Años de experiencia preparando estudiantes
              </span>
</div>
<div className="flex flex-col items-center text-center">
<span className="font-fraunces font-semibold text-[40px] md:text-[56px] text-[#0F172A] leading-none mb-2">
                1,500+
              </span>
<span className="text-[15px] text-[#475569]">
                Egresados que lograron su meta
              </span>
</div>
<div className="flex flex-col items-center text-center">
<span className="font-fraunces font-semibold text-[40px] md:text-[56px] text-[#0F172A] leading-none mb-2">
                40
              </span>
<span className="text-[15px] text-[#475569]">
                Generaciones de alumnos graduados
              </span>
</div>
<div className="flex flex-col items-center text-center">
<span className="font-fraunces font-semibold text-[40px] md:text-[56px] text-[#0F172A] leading-none mb-2">
                95%
              </span>
<span className="text-[15px] text-[#475569]">
                Tasa de aprobación en examen CENEVAL
              </span>
</div>
</div>
<div className="mt-12 pt-6 border-t border-[#E2E8F0] text-center text-[13px] text-[#64748B]">
            Nuestros egresados han sido aceptados en: UADY · UniCaribe · TEC de
            Cancún · Universidad Anáhuac · UT Cancún · La Salle · UVM
          </div>
</div>
</section>

<section className="py-24 bg-[#FFFFFF]" id="programas">
<div className="max-w-[1200px] mx-auto px-6">

<div className="text-center max-w-[640px] mx-auto mb-16 scroll-animate opacity-0 translate-y-6 transition-all duration-700 ease-out">
<span className="block uppercase text-[#1E3A8A] text-[13px] tracking-widest font-semibold mb-3">
              Nuestros Cursos
            </span>
<h2 className="font-fraunces font-semibold text-4xl md:text-[48px] text-[#0F172A] tracking-tight leading-tight mb-4">
              ¿Qué necesitas lograr en este momento?
            </h2>
<p className="text-[18px] text-[#475569]">
              Tenemos un curso exacto para tu meta. Échales un ojo y escríbenos
              para decirte cuál te conviene más.
            </p>
</div>

<div className="flex flex-col gap-8">

<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">

<div className="scroll-animate opacity-0 translate-y-6 transition-all duration-700 ease-out bg-white rounded-2xl border-2 border-[#D97706] p-8 shadow-sm flex flex-col relative overflow-hidden hover:shadow-md" style={{transitionDelay: '80ms'}}>
<div className="absolute top-6 left-6 bg-[#D97706] text-white text-xs font-semibold px-3 py-1 rounded-full">
                  Más popular
                </div>
<iconify-icon className="text-[48px] text-[#D97706] mt-10 mb-6" icon="lucide:graduation-cap"></iconify-icon>
<h3 className="font-fraunces font-semibold text-2xl text-[#0F172A] tracking-tight mb-3">
                  Preparatoria CENEVAL en 3 meses
                </h3>
<p className="text-[15px] text-[#475569] mb-6 flex-grow">
                  Termina tu bachillerato con un solo examen oficial avalado por
                  la SEP. Ideal si ya tienes secundaria y necesitas tu
                  certificado rápido para trabajar o seguir estudiando.
                </p>
<ul className="space-y-3 mb-8">
<li className="flex items-start gap-2 text-[14px] text-[#475569]">
<iconify-icon className="text-[#25D366] text-[20px] shrink-0 mt-0.5" icon="lucide:check-circle-2"></iconify-icon>
                    Certificado oficial SEP
                  </li>
<li className="flex items-start gap-2 text-[14px] text-[#475569]">
<iconify-icon className="text-[#25D366] text-[20px] shrink-0 mt-0.5" icon="lucide:check-circle-2"></iconify-icon>
                    Clases en vivo + material actualizado
                  </li>
<li className="flex items-start gap-2 text-[14px] text-[#475569]">
<iconify-icon className="text-[#25D366] text-[20px] shrink-0 mt-0.5" icon="lucide:check-circle-2"></iconify-icon>
                    Acuerdo 286 · Examen ACREDITA-BACH
                  </li>
</ul>
<div className="text-[14px] font-semibold text-[#64748B] mb-4">
                  Desde $X,XXX MXN
                </div>
<a className="bg-[#D97706] text-white px-6 py-3 rounded-lg text-[15px] font-semibold shadow-sm hover:shadow-md hover:bg-[#b06105] transition-all flex items-center justify-center gap-2 w-full sm:w-fit" href="https://wa.me/529981567801?text=Hola%2C%20me%20interesa%20el%20curso%20de%20Preparatoria%20CENEVAL%20en%203%20meses.%20%C2%BFCu%C3%A1ndo%20es%20el%20pr%C3%B3ximo%20inicio%3F" rel="noopener noreferrer" target="_blank">
                  Ver curso completo
                  <iconify-icon className="text-lg" icon="lucide:arrow-right"></iconify-icon>
</a>
</div>

<div className="scroll-animate opacity-0 translate-y-6 transition-all duration-700 ease-out bg-white rounded-2xl border border-[#E2E8F0] p-8 shadow-sm flex flex-col hover:shadow-md" style={{transitionDelay: '160ms'}}>
<iconify-icon className="text-[48px] text-[#1E3A8A] mb-6" icon="lucide:rocket"></iconify-icon>
<h3 className="font-fraunces font-semibold text-2xl text-[#0F172A] tracking-tight mb-3">
                  Ingreso a Universidad (EXANI II)
                </h3>
<p className="text-[15px] text-[#475569] mb-6 flex-grow">
                  Prepárate para el examen de admisión y asegura tu lugar en la
                  universidad de tu elección: UADY, UniCaribe, TEC de Cancún, UT
                  Cancún o cualquier otra.
                </p>
<ul className="space-y-3 mb-8">
<li className="flex items-start gap-2 text-[14px] text-[#475569]">
<iconify-icon className="text-[#25D366] text-[20px] shrink-0 mt-0.5" icon="lucide:check-circle-2"></iconify-icon>
                    Metodología probada con +20 generaciones
                  </li>
<li className="flex items-start gap-2 text-[14px] text-[#475569]">
<iconify-icon className="text-[#25D366] text-[20px] shrink-0 mt-0.5" icon="lucide:check-circle-2"></iconify-icon>
                    Simuladores de examen semanales
                  </li>
<li className="flex items-start gap-2 text-[14px] text-[#475569]">
<iconify-icon className="text-[#25D366] text-[20px] shrink-0 mt-0.5" icon="lucide:check-circle-2"></iconify-icon>
                    Clases sabatinas compatibles con prepa
                  </li>
</ul>
<a className="border-[1.5px] border-[#0F172A] text-[#0F172A] px-6 py-3 rounded-lg text-[15px] font-semibold hover:bg-[#0F172A] hover:text-white transition-all flex items-center justify-center gap-2 w-full sm:w-fit mt-auto" href="https://wa.me/529981567801?text=Hola%2C%20me%20interesa%20el%20curso%20de%20Ingreso%20a%20Universidad%20%28EXANI%20II%29.%20%C2%BFCu%C3%A1ndo%20es%20el%20pr%C3%B3ximo%20inicio%3F" rel="noopener noreferrer" target="_blank">
                  Ver curso completo
                  <iconify-icon className="text-lg" icon="lucide:arrow-right"></iconify-icon>
</a>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

<div className="scroll-animate opacity-0 translate-y-6 transition-all duration-700 ease-out bg-white rounded-xl border border-[#E2E8F0] p-6 shadow-sm flex flex-col hover:shadow-md" style={{transitionDelay: '240ms'}}>
<iconify-icon className="text-[32px] text-[#1E3A8A] mb-4" icon="lucide:book-open"></iconify-icon>
<h3 className="font-fraunces font-semibold text-xl text-[#0F172A] tracking-tight mb-2">
                  Ingreso a Preparatoria
                </h3>
<p className="text-[14px] text-[#475569] mb-6 flex-grow">
                  Para estudiantes de secundaria que quieren asegurar su lugar
                  en cualquier prepa pública o privada de Cancún.
                </p>
<ul className="space-y-2 mb-6">
<li className="flex items-center gap-2 text-[13px] text-[#64748B]">
<div className="w-1.5 h-1.5 rounded-full bg-[#1E3A8A]"></div>
                    CECYTE · COBACH · Prepas UNID · Prepas particulares
                  </li>
</ul>
<a className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#1E3A8A] hover:text-[#0F172A] transition-colors mt-auto" href="https://wa.me/529981567801?text=Hola%2C%20me%20interesa%20el%20curso%20de%20Ingreso%20a%20Preparatoria.%20%C2%BFCu%C3%A1ndo%20es%20el%20pr%C3%B3ximo%20inicio%3F" rel="noopener noreferrer" target="_blank">
                  Ver curso
                  <iconify-icon className="text-[16px]" icon="lucide:arrow-right"></iconify-icon>
</a>
</div>

<div className="scroll-animate opacity-0 translate-y-6 transition-all duration-700 ease-out bg-white rounded-xl border border-[#E2E8F0] p-6 shadow-sm flex flex-col hover:shadow-md" style={{transitionDelay: '320ms'}}>
<iconify-icon className="text-[32px] text-[#1E3A8A] mb-4" icon="lucide:building-2"></iconify-icon>
<h3 className="font-fraunces font-semibold text-xl text-[#0F172A] tracking-tight mb-2">
                  Ingreso al TEC de Cancún
                </h3>
<p className="text-[14px] text-[#475569] mb-6 flex-grow">
                  Curso especializado para el examen de admisión del Tecnológico
                  de Cancún. Enfoque integral con estructura real del examen.
                </p>
<ul className="space-y-2 mb-6">
<li className="flex items-center gap-2 text-[13px] text-[#64748B]">
<div className="w-1.5 h-1.5 rounded-full bg-[#1E3A8A]"></div>
                    Guía actualizada · Práctica con exámenes reales · Asesoría
                  </li>
</ul>
<a className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#1E3A8A] hover:text-[#0F172A] transition-colors mt-auto" href="https://wa.me/529981567801?text=Hola%2C%20me%20interesa%20el%20curso%20de%20Ingreso%20al%20TEC%20de%20Canc%C3%BAn.%20%C2%BFCu%C3%A1ndo%20es%20el%20pr%C3%B3ximo%20inicio%3F" rel="noopener noreferrer" target="_blank">
                  Ver curso
                  <iconify-icon className="text-[16px]" icon="lucide:arrow-right"></iconify-icon>
</a>
</div>

<div className="scroll-animate opacity-0 translate-y-6 transition-all duration-700 ease-out bg-white rounded-xl border border-[#E2E8F0] p-6 shadow-sm flex flex-col hover:shadow-md" style={{transitionDelay: '400ms'}}>
<iconify-icon className="text-[32px] text-[#1E3A8A] mb-4" icon="lucide:compass"></iconify-icon>
<h3 className="font-fraunces font-semibold text-xl text-[#0F172A] tracking-tight mb-2">
                  Orientación Vocacional
                </h3>
<p className="text-[14px] text-[#475569] mb-6 flex-grow">
                  ¿Todavía no sabes qué estudiar? Te ayudamos a descubrir tu
                  vocación con pruebas de personalidad, intereses y habilidades.
                </p>
<ul className="space-y-2 mb-6">
<li className="flex items-center gap-2 text-[13px] text-[#64748B]">
<div className="w-1.5 h-1.5 rounded-full bg-[#1E3A8A]"></div>
                    Pruebas psicométricas · Sesiones individuales · Reporte
                    final
                  </li>
</ul>
<a className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#1E3A8A] hover:text-[#0F172A] transition-colors mt-auto" href="https://wa.me/529981567801?text=Hola%2C%20me%20interesa%20el%20curso%20de%20Orientaci%C3%B3n%20Vocacional.%20%C2%BFCu%C3%A1ndo%20es%20el%20pr%C3%B3ximo%20inicio%3F" rel="noopener noreferrer" target="_blank">
                  Ver curso
                  <iconify-icon className="text-[16px]" icon="lucide:arrow-right"></iconify-icon>
</a>
</div>
</div>
</div>

<div className="mt-16 text-center scroll-animate opacity-0 translate-y-6 transition-all duration-700 ease-out" style={{transitionDelay: '480ms'}}>
<p className="text-[15px] text-[#475569]">
              ¿Buscas regularización, ayuda con tareas o técnicas de estudio?
              <br className="sm:hidden"/>
<a className="text-[#1E3A8A] font-semibold hover:underline inline-flex items-center gap-1 sm:ml-2" href="#">
                Ver todos los apoyos académicos
                <iconify-icon className="text-[14px]" icon="lucide:arrow-right"></iconify-icon>
</a>
</p>
</div>
</div>
</section>
<section className="py-24 bg-[#FFFFFF]" id="sobre-cyade">
<div className="max-w-[1200px] mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

<div className="relative max-w-[520px] mx-auto lg:mx-0 w-full scroll-animate opacity-0 translate-y-6 transition-all duration-700 ease-out">
<img alt="Instalaciones de la escuela Cyade Cancún y equipo de profesores expertos" className="w-full h-[560px] object-cover rounded-[24px] shadow-sm" src="https://placehold.co/520x560/E2E8F0/64748B?text=Fachada+o+Equipo+Cyade"/>
<div className="absolute -bottom-6 -right-2 sm:-right-8 bg-white shadow-lg p-[20px] rounded-[12px] border border-[#E2E8F0] z-10">
<div className="font-fraunces font-semibold text-[36px] text-[#D97706] leading-none mb-1">
                  2009
                </div>
<div className="text-[14px] text-[#475569] max-w-[130px] leading-tight">
                  Año de fundación en Cancún
                </div>
</div>
</div>

<div className="flex flex-col scroll-animate opacity-0 translate-y-6 transition-all duration-700 ease-out" style={{transitionDelay: '150ms'}}>
<span className="block uppercase text-[#1E3A8A] text-[13px] tracking-widest font-semibold mb-3">
                NUESTRA HISTORIA
              </span>
<h2 className="font-fraunces font-semibold text-3xl md:text-[40px] text-[#0F172A] tracking-tight leading-tight mb-6">
                Llevamos desde 2009 ayudando a que pases tu examen en Cancún.
              </h2>
<p className="text-[17px] text-[#475569] mb-4">
                Empezamos porque veíamos a muchos quedarse sin prepa o
                universidad por no saber cómo estudiar para el examen. En 16
                años ya pasaron por aquí más de 40 generaciones, y siempre
                renovamos nuestras guías con lo que de verdad te van a
                preguntar.
              </p>
<p className="text-[17px] text-[#475569] mb-8">
                Como respaldo para ti y tu familia, somos un centro registrado
                ante la SEP. Aquí no hay maestros improvisados; todos están
                certificados y conocen a fondo la estructura de los exámenes
                actuales.
              </p>

<div className="flex flex-wrap gap-3 mb-10">
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F8FAFC] border border-[#E2E8F0] text-[14px] text-[#475569] font-medium">
                  Fundado en 2009
                </div>
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F8FAFC] border border-[#E2E8F0] text-[14px] text-[#475569] font-medium">
                  Registrado ante SEP
                </div>
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F8FAFC] border border-[#E2E8F0] text-[14px] text-[#475569] font-medium">
                  Base en Cancún, Q. Roo
                </div>
</div>

<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
<a className="inline-flex items-center justify-center gap-2 bg-[#D97706] text-white px-7 py-3.5 rounded-lg text-base font-semibold shadow-sm hover:shadow-md hover:scale-[1.02] transition-all w-full sm:w-auto" href="https://wa.me/529981567801?text=Hola%2C%20vi%20su%20sitio%20y%20quiero%20saber%20cu%C3%A1l%20curso%20me%20conviene.%20Mi%20nombre%20es%3A%20" rel="noopener noreferrer" target="_blank">
                  Agenda una visita
                </a>
<a className="inline-flex items-center justify-center gap-2 border-[1.5px] border-[#0F172A] text-[#0F172A] bg-transparent px-7 py-3.5 rounded-lg text-base font-semibold hover:bg-[#0F172A] hover:text-white transition-all w-full sm:w-auto" href="#">
                  Conoce al equipo
                  <iconify-icon className="text-lg" icon="lucide:arrow-right"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>
<section className="py-24 bg-[#F8FAFC]" id="por-que-cyade">
<div className="max-w-[1200px] mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start relative">
<div className="lg:col-span-5 relative">
<div className="lg:sticky lg:top-32">
<span className="block uppercase text-[#1E3A8A] text-[13px] tracking-widest font-semibold mb-3">
                  CÓMO TRABAJAMOS AQUÍ
                </span>
<h2 className="font-fraunces font-semibold text-4xl lg:text-[48px] text-[#0F172A] tracking-tight leading-tight mb-6">
                  No pierdas tu tiempo ni tu dinero con cursos improvisados.
                </h2>
<p className="text-[17px] text-[#475569] mb-8">
                  En Cyade llevamos 16 años haciendo lo mismo: preparar
                  estudiantes para exámenes que sí importan. Sabemos qué viene
                  en cada examen, cómo estudiarlo y cómo acompañarte hasta que
                  lo pases.
                </p>
<a className="inline-flex items-center justify-center gap-2 bg-[#D97706] text-white px-7 py-3.5 rounded-lg text-base font-semibold shadow-sm hover:shadow-md hover:scale-[1.02] transition-all w-full sm:w-auto" href="https://wa.me/529981567801?text=Hola%2C%20vi%20su%20sitio%20y%20quiero%20saber%20cu%C3%A1l%20curso%20me%20conviene.%20Mi%20nombre%20es%3A%20" rel="noopener noreferrer" target="_blank">
                  Agenda una llamada gratis
                </a>
</div>
</div>
<div className="lg:col-span-7 flex flex-col gap-10 lg:pl-12">
<div className="flex gap-5 scroll-animate opacity-0 translate-y-6 transition-all duration-700 ease-out">
<div className="w-12 h-12 rounded-full bg-[#EFF6FF] flex items-center justify-center shrink-0">
<iconify-icon className="text-[24px] text-[#1E3A8A]" icon="lucide:users"></iconify-icon>
</div>
<div>
<h3 className="font-fraunces font-semibold text-[22px] text-[#0F172A] tracking-tight mb-2">
                    Profesores que sí enseñan
                  </h3>
<p className="text-[16px] text-[#475569]">
                    Todos nuestros maestros tienen 10+ años dando exactamente el
                    curso que imparten. Nada de sustitutos ni grabaciones
                    recicladas. Si tienes una duda, la respuesta llega en vivo.
                  </p>
</div>
</div>
<div className="flex gap-5 scroll-animate opacity-0 translate-y-6 transition-all duration-700 ease-out" style={{transitionDelay: '80ms'}}>
<div className="w-12 h-12 rounded-full bg-[#EFF6FF] flex items-center justify-center shrink-0">
<iconify-icon className="text-[24px] text-[#1E3A8A]" icon="lucide:target"></iconify-icon>
</div>
<div>
<h3 className="font-fraunces font-semibold text-[22px] text-[#0F172A] tracking-tight mb-2">
                    Material actualizado cada ciclo
                  </h3>
<p className="text-[16px] text-[#475569]">
                    Los exámenes cambian. Nuestras guías también. Trabajamos con
                    las versiones más recientes de CENEVAL, EXANI y exámenes
                    locales para que no estudies cosas obsoletas.
                  </p>
</div>
</div>
<div className="flex gap-5 scroll-animate opacity-0 translate-y-6 transition-all duration-700 ease-out" style={{transitionDelay: '160ms'}}>
<div className="w-12 h-12 rounded-full bg-[#EFF6FF] flex items-center justify-center shrink-0">
<iconify-icon className="text-[24px] text-[#1E3A8A]" icon="lucide:presentation"></iconify-icon>
</div>
<div>
<h3 className="font-fraunces font-semibold text-[22px] text-[#0F172A] tracking-tight mb-2">
                    Clases presenciales y en línea
                  </h3>
<p className="text-[16px] text-[#475569]">
                    Elige el formato que mejor se adapte a ti. Asiste a nuestras
                    instalaciones en Cancún o toma clases en línea interactuando
                    con tu profesor y compañeros en tiempo real.
                  </p>
</div>
</div>
<div className="flex gap-5 scroll-animate opacity-0 translate-y-6 transition-all duration-700 ease-out" style={{transitionDelay: '240ms'}}>
<div className="w-12 h-12 rounded-full bg-[#EFF6FF] flex items-center justify-center shrink-0">
<iconify-icon className="text-[24px] text-[#1E3A8A]" icon="lucide:shield-check"></iconify-icon>
</div>
<div>
<h3 className="font-fraunces font-semibold text-[22px] text-[#0F172A] tracking-tight mb-2">
                    Certificados oficiales SEP cuando aplica
                  </h3>
<p className="text-[16px] text-[#475569]">
                    Los cursos de CENEVAL entregan certificado oficial emitido
                    por la SEP con validez en toda la República. Sin trámites
                    extra, sin sorpresas.
                  </p>
</div>
</div>
<div className="flex gap-5 scroll-animate opacity-0 translate-y-6 transition-all duration-700 ease-out" style={{transitionDelay: '320ms'}}>
<div className="w-12 h-12 rounded-full bg-[#EFF6FF] flex items-center justify-center shrink-0">
<iconify-icon className="text-[24px] text-[#1E3A8A]" icon="lucide:trending-up"></iconify-icon>
</div>
<div>
<h3 className="font-fraunces font-semibold text-[22px] text-[#0F172A] tracking-tight mb-2">
                    Simulacros hasta que te salga
                  </h3>
<p className="text-[16px] text-[#475569]">
                    Practicas con exámenes reales antes de presentar el oficial.
                    No te lanzamos al examen a ciegas: sabrás exactamente qué
                    esperar y cómo responderlo.
                  </p>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="py-24 bg-[#FFFFFF]" id="modalidades">
<div className="max-w-[1200px] mx-auto px-6">

<div className="text-center max-w-[680px] mx-auto mb-16 scroll-animate opacity-0 translate-y-6 transition-all duration-700 ease-out">
<span className="block uppercase text-[#1E3A8A] text-[13px] tracking-widest font-semibold mb-3">
              MODALIDAD
            </span>
<h2 className="font-fraunces font-semibold text-[32px] md:text-[48px] text-[#0F172A] tracking-tight leading-tight mb-4">
              Tú decides cómo tomar tus clases.
            </h2>
<p className="text-[18px] text-[#475569]">
              En Cyade no te encasillamos. Según el curso que elijas, puedes
              tomar clases en vivo por Zoom desde casa, o presenciales en
              nuestro centro en Cancún. Las dos opciones son en vivo, con
              profesor y grupo real.
            </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-12">

<div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-[16px] p-[32px] flex flex-col scroll-animate opacity-0 translate-y-6 transition-all duration-700 ease-out">
<div className="flex items-center justify-between mb-6">
<iconify-icon className="text-[40px] text-[#1E3A8A]" icon="lucide:video"></iconify-icon>
<span className="bg-[#EFF6FF] text-[#1E3A8A] text-[12px] font-semibold px-3 py-1 rounded-full">
                  Online
                </span>
</div>
<h3 className="font-fraunces font-semibold text-[24px] text-[#0F172A] mb-4 tracking-tight">
                Clases en vivo por Zoom
              </h3>
<p className="text-[16px] text-[#475569] mb-6 flex-grow">
                Toma clases desde tu casa u oficina con el mismo profesor y
                grupo que tendrías en el aula. No son grabaciones: interactúas,
                preguntas y levantas la mano en tiempo real.
              </p>
<ul className="space-y-3 mb-8">
<li className="flex items-start gap-2 text-[16px] text-[#475569]">
<iconify-icon className="text-[#059669] text-[20px] shrink-0 mt-0.5" icon="lucide:check-circle-2"></iconify-icon>
                  Sin traslados ni tráfico de Cancún
                </li>
<li className="flex items-start gap-2 text-[16px] text-[#475569]">
<iconify-icon className="text-[#059669] text-[20px] shrink-0 mt-0.5" icon="lucide:check-circle-2"></iconify-icon>
                  Grabación disponible si faltas a una sesión
                </li>
<li className="flex items-start gap-2 text-[16px] text-[#475569]">
<iconify-icon className="text-[#059669] text-[20px] shrink-0 mt-0.5" icon="lucide:check-circle-2"></iconify-icon>
                  Misma atención personalizada que presencial
                </li>
</ul>
<div className="text-[14px] italic text-[#64748B] mt-auto">
                Ideal para quienes viven en la Riviera Maya, trabajan, o
                prefieren estudiar desde casa.
              </div>
</div>

<div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-[16px] p-[32px] flex flex-col scroll-animate opacity-0 translate-y-6 transition-all duration-700 ease-out" style={{transitionDelay: '100ms'}}>
<div className="flex items-center justify-between mb-6">
<iconify-icon className="text-[40px] text-[#D97706]" icon="lucide:building-2"></iconify-icon>
<span className="bg-[#FEF3C7] text-[#92400E] text-[12px] font-semibold px-3 py-1 rounded-full">
                  Presencial
                </span>
</div>
<h3 className="font-fraunces font-semibold text-[24px] text-[#0F172A] mb-4 tracking-tight">
                Clases presenciales en nuestro centro
              </h3>
<p className="text-[16px] text-[#475569] mb-6 flex-grow">
                Ven a nuestro centro en Supermanzana 505. Aula equipada,
                contacto directo con tu profesor y compañeros, y el ambiente de
                estudio que para muchos hace toda la diferencia.
              </p>
<ul className="space-y-3 mb-8">
<li className="flex items-start gap-2 text-[16px] text-[#475569]">
<iconify-icon className="text-[#059669] text-[20px] shrink-0 mt-0.5" icon="lucide:check-circle-2"></iconify-icon>
                  Aula climatizada, equipada y cómoda
                </li>
<li className="flex items-start gap-2 text-[16px] text-[#475569]">
<iconify-icon className="text-[#059669] text-[20px] shrink-0 mt-0.5" icon="lucide:check-circle-2"></iconify-icon>
                  Contacto directo con profesores después de clase
                </li>
<li className="flex items-start gap-2 text-[16px] text-[#475569]">
<iconify-icon className="text-[#059669] text-[20px] shrink-0 mt-0.5" icon="lucide:check-circle-2"></iconify-icon>
                  Compañeros de tu zona para estudiar juntos
                </li>
</ul>
<div className="text-[14px] italic text-[#64748B] mt-auto">
                Ideal para quienes necesitan rutina física, prefieren el
                ambiente de aula o viven cerca de Pehaltun.
              </div>
</div>
</div>

<div className="bg-[#EFF6FF] rounded-[16px] p-[32px] flex flex-col md:flex-row items-center md:items-start justify-between gap-6 scroll-animate opacity-0 translate-y-6 transition-all duration-700 ease-out" style={{transitionDelay: '200ms'}}>
<div className="flex-grow text-center md:text-left">
<h3 className="font-semibold text-[17px] text-[#0F172A] mb-2">
                ¿Cuál modalidad tiene el curso que me interesa?
              </h3>
<p className="text-[15px] text-[#475569] max-w-[480px] mx-auto md:mx-0">
                Algunos cursos se imparten en ambas modalidades, otros solo en
                una. Escríbenos por WhatsApp con el nombre del curso y te
                confirmamos al momento la modalidad disponible, los horarios y
                la próxima fecha de inicio.
              </p>
</div>
<div className="w-full md:w-auto shrink-0 flex items-center md:mt-2">
<a className="w-full md:w-auto flex items-center justify-center gap-2 bg-[#D97706] text-white px-6 py-3.5 rounded-lg text-[16px] font-semibold shadow-sm hover:shadow-md hover:bg-[#b06105] transition-all" href="https://wa.me/529981567801?text=Hola%2C%20quiero%20saber%20la%20modalidad%20y%20horarios%20del%20curso%20de%3A%20" rel="noopener noreferrer" target="_blank">
<iconify-icon className="text-xl" icon="lucide:message-circle"></iconify-icon>
                Preguntar por WhatsApp
              </a>
</div>
</div>

<div className="mt-[80px] scroll-animate opacity-0 translate-y-6 transition-all duration-700 ease-out" style={{transitionDelay: '300ms'}}>
<div className="text-center max-w-[720px] mx-auto mb-12">
<span className="block uppercase text-[#1E3A8A] text-[12px] tracking-widest font-semibold mb-3">
                CÓMO FUNCIONA
              </span>
<h3 className="font-fraunces font-semibold text-[32px] text-[#0F172A] tracking-tight leading-tight">
                No importa si vienes al salón o te conectas, el proceso es
                igual.
              </h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
<div className="flex flex-col">
<div className="font-fraunces font-semibold text-[48px] text-[#D97706] leading-none mb-3">
                  01
                </div>
<div className="w-[1px] h-6 bg-[#E2E8F0] mb-3"></div>
<h4 className="font-semibold text-[17px] text-[#0F172A] mb-2">
                  Te inscribes y recibes tu material
                </h4>
<p className="text-[15px] text-[#475569] leading-[1.65]">
                  Bienvenida, acceso a la plataforma, guía de estudio digital e
                  impresa, y horario del grupo al que te unes.
                </p>
</div>
<div className="flex flex-col">
<div className="font-fraunces font-semibold text-[48px] text-[#D97706] leading-none mb-3">
                  02
                </div>
<div className="w-[1px] h-6 bg-[#E2E8F0] mb-3"></div>
<h4 className="font-semibold text-[17px] text-[#0F172A] mb-2">
                  Entras a clases en vivo
                </h4>
<p className="text-[15px] text-[#475569] leading-[1.65]">
                  Dos o tres sesiones semanales con tu profesor —por Zoom o en
                  el aula, según tu grupo. Siempre en vivo, siempre con
                  interacción real.
                </p>
</div>
<div className="flex flex-col">
<div className="font-fraunces font-semibold text-[48px] text-[#D97706] leading-none mb-3">
                  03
                </div>
<div className="w-[1px] h-6 bg-[#E2E8F0] mb-3"></div>
<h4 className="font-semibold text-[17px] text-[#0F172A] mb-2">
                  Practicas con simuladores
                </h4>
<p className="text-[15px] text-[#475569] leading-[1.65]">
                  Cada cierto tiempo resuelves un examen de simulación con la
                  estructura real. Tu profesor te da retroalimentación
                  personalizada.
                </p>
</div>
<div className="flex flex-col">
<div className="font-fraunces font-semibold text-[48px] text-[#D97706] leading-none mb-3">
                  04
                </div>
<div className="w-[1px] h-6 bg-[#E2E8F0] mb-3"></div>
<h4 className="font-semibold text-[17px] text-[#0F172A] mb-2">
                  Presentas tu examen y festejamos
                </h4>
<p className="text-[15px] text-[#475569] leading-[1.65]">
                  Con la preparación completa, llegas listo al examen oficial.
                  Si es CENEVAL, te ayudamos incluso con el registro.
                </p>
</div>
</div>
</div>
</div>
</section>
<section className="py-24 bg-[#F8FAFC]" id="egresados">
<div className="max-w-[1200px] mx-auto px-6">
<div className="text-center max-w-[640px] mx-auto mb-16 scroll-animate opacity-0 translate-y-6 transition-all duration-700 ease-out">
<span className="block uppercase text-[#1E3A8A] text-[13px] tracking-widest font-semibold mb-3">
              LO QUE PASA CUANDO TERMINAS
            </span>
<h2 className="font-fraunces font-semibold text-4xl md:text-[40px] text-[#0F172A] tracking-tight leading-tight">
              Más de 40 generaciones ya pasaron por lo mismo que tú.
            </h2>
</div>
<div className="flex overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-3 gap-6 pb-6 -mx-6 px-6 md:mx-0 md:px-0 md:overflow-visible scroll-smooth [&amp;::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">

<div className="w-[85vw] sm:w-[400px] shrink-0 md:w-auto md:shrink snap-center scroll-animate opacity-0 translate-y-6 transition-all duration-700 ease-out bg-white border border-[#E2E8F0] rounded-2xl p-8 shadow-sm flex flex-col h-full hover:shadow-md">
<div className="flex gap-1 mb-6 text-[#D97706]">
<iconify-icon className="text-xl" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xl" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xl" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xl" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xl" icon="solar:star-bold"></iconify-icon>
</div>
<p className="font-fraunces font-medium text-[20px] text-[#0F172A] leading-relaxed mb-8 flex-grow">
                "Pude acabar la preparatoria gracias a CYADE para obtener un
                mejor trabajo. Pero la experiencia es para toda la vida."
              </p>
<div className="border-t border-[#E2E8F0] pt-6 flex items-center gap-4 mt-auto">
<div className="w-10 h-10 bg-[#E2E8F0] rounded-full shrink-0 flex items-center justify-center text-[#64748B]">
<iconify-icon className="text-xl" icon="lucide:user"></iconify-icon>
</div>
<div>

<div className="font-semibold text-[15px] text-[#0F172A] leading-tight">
                    [Nombre real — reemplazar]
                  </div>
<div className="text-[14px] text-[#64748B] mt-1 leading-none">
                    Prepa CENEVAL · 2024
                  </div>
</div>
</div>
</div>

<div className="w-[85vw] sm:w-[400px] shrink-0 md:w-auto md:shrink snap-center scroll-animate opacity-0 translate-y-6 transition-all duration-700 ease-out bg-white border border-[#E2E8F0] rounded-2xl p-8 shadow-sm flex flex-col h-full hover:shadow-md" style={{transitionDelay: '100ms'}}>
<div className="flex gap-1 mb-6 text-[#D97706]">
<iconify-icon className="text-xl" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xl" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xl" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xl" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xl" icon="solar:star-bold"></iconify-icon>
</div>
<p className="font-fraunces font-medium text-[20px] text-[#0F172A] leading-relaxed mb-8 flex-grow">
                "Excelente opción, buena inversión y muy buenos profesores.
                Además, Jeanette es espectacular. Gracias a su apoyo lo logré."
              </p>
<div className="border-t border-[#E2E8F0] pt-6 flex items-center gap-4 mt-auto">
<div className="w-10 h-10 bg-[#E2E8F0] rounded-full shrink-0 flex items-center justify-center text-[#64748B]">
<iconify-icon className="text-xl" icon="lucide:user"></iconify-icon>
</div>
<div>

<div className="font-semibold text-[15px] text-[#0F172A] leading-tight">
                    [Nombre real — reemplazar]
                  </div>
<div className="text-[14px] text-[#64748B] mt-1 leading-none">
                    Ingreso a Universidad · 2024
                  </div>
</div>
</div>
</div>

<div className="w-[85vw] sm:w-[400px] shrink-0 md:w-auto md:shrink snap-center scroll-animate opacity-0 translate-y-6 transition-all duration-700 ease-out bg-white border border-[#E2E8F0] rounded-2xl p-8 shadow-sm flex flex-col h-full hover:shadow-md" style={{transitionDelay: '200ms'}}>
<div className="flex gap-1 mb-6 text-[#D97706]">
<iconify-icon className="text-xl" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xl" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xl" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xl" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xl" icon="solar:star-bold"></iconify-icon>
</div>
<p className="font-fraunces font-medium text-[20px] text-[#0F172A] leading-relaxed mb-8 flex-grow">
                "Tomé el curso en Cyade para presentar mi examen CENEVAL y fue
                una de las mejores experiencias. Obtuve mención sobresaliente."
              </p>
<div className="border-t border-[#E2E8F0] pt-6 flex items-center gap-4 mt-auto">
<div className="w-10 h-10 bg-[#E2E8F0] rounded-full shrink-0 flex items-center justify-center text-[#64748B]">
<iconify-icon className="text-xl" icon="lucide:user"></iconify-icon>
</div>
<div>

<div className="font-semibold text-[15px] text-[#0F172A] leading-tight">
                    [Nombre real — reemplazar]
                  </div>
<div className="text-[14px] text-[#64748B] mt-1 leading-none">
                    Prepa CENEVAL · 2023
                  </div>
</div>
</div>
</div>
</div>
<div className="mt-12 text-center scroll-animate opacity-0 translate-y-6 transition-all duration-700 ease-out" style={{transitionDelay: '300ms'}}>
<a className="text-[#1E3A8A] text-[14px] font-semibold hover:text-[#0F172A] transition-colors inline-flex items-center gap-1" href="https://fb.com/cenevalcancun" rel="noopener noreferrer" target="_blank">
              Ver más reseñas en Facebook y Google
              <iconify-icon className="text-[16px]" icon="lucide:arrow-right"></iconify-icon>
</a>
</div>
</div>
</section>
<section className="py-24 bg-[#F8FAFC]" id="faq">
<div className="max-w-[1200px] mx-auto px-6">
<div className="text-center max-w-[640px] mx-auto mb-16 scroll-animate opacity-0 translate-y-6 transition-all duration-700 ease-out">
<span className="block uppercase text-[#1E3A8A] text-[13px] tracking-widest font-semibold mb-3">
              PREGUNTAS FRECUENTES
            </span>
<h2 className="font-fraunces font-semibold text-4xl md:text-[40px] text-[#0F172A] tracking-tight leading-tight mb-4">
              Lo que todos preguntan antes de inscribirse.
            </h2>
<p className="text-[18px] text-[#475569]">
              Si tu duda no está aquí, escríbenos por WhatsApp y te respondemos
              en el día.
            </p>
</div>
<div className="max-w-[800px] mx-auto flex flex-col gap-3 scroll-animate opacity-0 translate-y-6 transition-all duration-700 ease-out" id="faq-accordion" style={{transitionDelay: '100ms'}}>
<div className="bg-white border border-[#E2E8F0] rounded-xl overflow-hidden transition-all duration-300">
<button className="w-full flex items-center justify-between p-6 text-left faq-button group hover:bg-[#F8FAFC] transition-colors">
<span className="font-semibold text-[17px] text-[#0F172A]">
                  ¿El certificado de CENEVAL es oficial?
                </span>
<iconify-icon className="text-xl text-[#64748B] transition-transform duration-300 faq-icon shrink-0 ml-4" icon="lucide:chevron-down"></iconify-icon>
</button>
<div className="faq-content h-0 overflow-hidden transition-all duration-300 opacity-0">
<div className="px-6 pb-6 text-[16px] text-[#475569] leading-[1.7]">
                  Sí, totalmente. El examen ACREDITA-BACH de CENEVAL es
                  reconocido por la SEP bajo el Acuerdo 286 y tiene validez
                  oficial en toda la República Mexicana. Una vez que lo
                  apruebas, recibes tu certificado de preparatoria con el que
                  puedes trabajar, ingresar a la universidad o seguir cualquier
                  otro trámite académico.
                </div>
</div>
</div>
<div className="bg-white border border-[#E2E8F0] rounded-xl overflow-hidden transition-all duration-300">
<button className="w-full flex items-center justify-between p-6 text-left faq-button group hover:bg-[#F8FAFC] transition-colors">
<span className="font-semibold text-[17px] text-[#0F172A]">
                  ¿Cuánto tiempo dura cada curso?
                </span>
<iconify-icon className="text-xl text-[#64748B] transition-transform duration-300 faq-icon shrink-0 ml-4" icon="lucide:chevron-down"></iconify-icon>
</button>
<div className="faq-content h-0 overflow-hidden transition-all duration-300 opacity-0">
<div className="px-6 pb-6 text-[16px] text-[#475569] leading-[1.7]">
                  Depende del curso. La Prepa CENEVAL se prepara en 3 meses
                  intensivos. Los cursos de ingreso a universidad o prepa duran
                  entre 2 y 4 meses dependiendo del examen. En cada caso te
                  damos un calendario exacto al inscribirte.
                </div>
</div>
</div>
<div className="bg-white border border-[#E2E8F0] rounded-xl overflow-hidden transition-all duration-300">
<button className="w-full flex items-center justify-between p-6 text-left faq-button group hover:bg-[#F8FAFC] transition-colors">
<span className="font-semibold text-[17px] text-[#0F172A]">
                  ¿Las clases son en línea o presenciales?
                </span>
<iconify-icon className="text-xl text-[#64748B] transition-transform duration-300 faq-icon shrink-0 ml-4" icon="lucide:chevron-down"></iconify-icon>
</button>
<div className="faq-content h-0 overflow-hidden transition-all duration-300 opacity-0">
<div className="px-6 pb-6 text-[16px] text-[#475569] leading-[1.7]">
                  Ofrecemos ambas modalidades. Las clases en línea son en vivo,
                  con el mismo profesor y la misma interacción que en aula — no
                  son grabaciones. Y si prefieres presencial, nuestro centro
                  está en Supermanzana 505 en Cancún.
                </div>
</div>
</div>
<div className="bg-white border border-[#E2E8F0] rounded-xl overflow-hidden transition-all duration-300">
<button className="w-full flex items-center justify-between p-6 text-left faq-button group hover:bg-[#F8FAFC] transition-colors">
<span className="font-semibold text-[17px] text-[#0F172A]">
                  ¿Qué pasa si repruebo mi examen?
                </span>
<iconify-icon className="text-xl text-[#64748B] transition-transform duration-300 faq-icon shrink-0 ml-4" icon="lucide:chevron-down"></iconify-icon>
</button>
<div className="faq-content h-0 overflow-hidden transition-all duration-300 opacity-0">
<div className="px-6 pb-6 text-[16px] text-[#475569] leading-[1.7]">
                  Muy pocos lo reprueban cuando terminan el curso completo, pero
                  si es tu caso, te brindamos asesoría adicional para que lo
                  vuelvas a presentar. Nuestra prioridad es que lo acredites, no
                  solo que tomes el curso.
                </div>
</div>
</div>
<div className="bg-white border border-[#E2E8F0] rounded-xl overflow-hidden transition-all duration-300">
<button className="w-full flex items-center justify-between p-6 text-left faq-button group hover:bg-[#F8FAFC] transition-colors">
<span className="font-semibold text-[17px] text-[#0F172A]">
                  ¿Puedo pagar en mensualidades?
                </span>
<iconify-icon className="text-xl text-[#64748B] transition-transform duration-300 faq-icon shrink-0 ml-4" icon="lucide:chevron-down"></iconify-icon>
</button>
<div className="faq-content h-0 overflow-hidden transition-all duration-300 opacity-0">
<div className="px-6 pb-6 text-[16px] text-[#475569] leading-[1.7]">
                  Sí. Ofrecemos esquemas de pago flexibles: inscripción + pagos
                  semanales o mensuales dependiendo de la duración del curso.
                  También aceptamos transferencia, tarjeta y efectivo.
                </div>
</div>
</div>
<div className="bg-white border border-[#E2E8F0] rounded-xl overflow-hidden transition-all duration-300">
<button className="w-full flex items-center justify-between p-6 text-left faq-button group hover:bg-[#F8FAFC] transition-colors">
<span className="font-semibold text-[17px] text-[#0F172A]">
                  ¿Necesito comprar libros adicionales?
                </span>
<iconify-icon className="text-xl text-[#64748B] transition-transform duration-300 faq-icon shrink-0 ml-4" icon="lucide:chevron-down"></iconify-icon>
</button>
<div className="faq-content h-0 overflow-hidden transition-all duration-300 opacity-0">
<div className="px-6 pb-6 text-[16px] text-[#475569] leading-[1.7]">
                  No. El costo del curso incluye toda la guía de estudio, el
                  material de apoyo y los simuladores. No necesitas comprar nada
                  por fuera.
                </div>
</div>
</div>
<div className="bg-white border border-[#E2E8F0] rounded-xl overflow-hidden transition-all duration-300">
<button className="w-full flex items-center justify-between p-6 text-left faq-button group hover:bg-[#F8FAFC] transition-colors">
<span className="font-semibold text-[17px] text-[#0F172A]">
                  ¿Qué requisitos necesito para inscribirme?
                </span>
<iconify-icon className="text-xl text-[#64748B] transition-transform duration-300 faq-icon shrink-0 ml-4" icon="lucide:chevron-down"></iconify-icon>
</button>
<div className="faq-content h-0 overflow-hidden transition-all duration-300 opacity-0">
<div className="px-6 pb-6 text-[16px] text-[#475569] leading-[1.7]">
                  Depende del curso. Para Prepa CENEVAL basta con tener
                  certificado de secundaria y ser mayor de edad (o contar con
                  autorización del tutor). Para los cursos de ingreso no hay
                  requisito previo más que estar en el grado correspondiente. Te
                  explicamos el proceso completo cuando nos escribes.
                </div>
</div>
</div>
<div className="bg-white border border-[#E2E8F0] rounded-xl overflow-hidden transition-all duration-300">
<button className="w-full flex items-center justify-between p-6 text-left faq-button group hover:bg-[#F8FAFC] transition-colors">
<span className="font-semibold text-[17px] text-[#0F172A]">
                  ¿Dónde están ubicados?
                </span>
<iconify-icon className="text-xl text-[#64748B] transition-transform duration-300 faq-icon shrink-0 ml-4" icon="lucide:chevron-down"></iconify-icon>
</button>
<div className="faq-content h-0 overflow-hidden transition-all duration-300 opacity-0">
<div className="px-6 pb-6 text-[16px] text-[#475569] leading-[1.7]">
                  En Calle Kuxtin 28, Fraccionamiento Pehaltun, Supermanzana
                  505, Cancún, Quintana Roo. Atendemos de lunes a viernes de
                  11am a 5pm y sábados desde las 4pm.
                </div>
</div>
</div>
</div>
</div>

</section>

<section className="py-[120px] bg-gradient-to-r from-[#1E3A8A] to-[#1E40AF] text-white">
<div className="max-w-[800px] mx-auto px-6 text-center flex flex-col items-center">
<span className="block uppercase text-[#FED7AA] text-[13px] tracking-widest font-semibold mb-4">
            MÁNDANOS UN MENSAJE Y SAL DE DUDAS
          </span>
<h2 className="font-fraunces font-semibold text-[32px] md:text-[48px] text-white leading-[1.15] tracking-tight mb-6">
            Anímate a preguntar. Te decimos la verdad sin intentar venderte a la
            fuerza.
          </h2>
<p className="text-[18px] text-[#CBD5E1] max-w-[600px] mx-auto mb-10">
            Escríbenos por WhatsApp y te contamos qué curso te conviene, cuánto
            cuesta y cuándo inicia el próximo grupo. Te respondemos en minutos,
            de lunes a sábado.
          </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-8">
<a className="bg-[#25D366] text-white h-[56px] px-[40px] rounded-lg text-base font-semibold shadow-sm hover:shadow-md hover:scale-[1.02] transition-all flex items-center justify-center gap-3 w-full sm:w-auto" href="https://wa.me/529981567801?text=Hola%2C%20quiero%20inscribirme%20a%20Cyade.%20Mi%20nombre%20es%3A%20" rel="noopener noreferrer" target="_blank">
<iconify-icon className="text-[24px]" icon="lucide:message-circle"></iconify-icon>
              Hablar por WhatsApp ahora
            </a>
<a className="border-2 border-white text-white bg-transparent h-[56px] px-[40px] rounded-lg text-base font-semibold hover:bg-white hover:text-[#1E3A8A] transition-all flex items-center justify-center gap-2 w-full sm:w-auto" href="#programas">
              Ver todos los cursos →
            </a>
</div>
<div className="text-[14px] text-[#CBD5E1]">
            📍 Cancún, Q. Roo · ⏰ Lun-Vie 11am-5pm · Sáb 4pm en adelante
          </div>
</div>
</section>
</main>

<footer className="bg-[#0F172A] border-t border-[rgba(255,255,255,0.08)] py-[80px] px-[32px]" id="contacto">
<div className="max-w-[1200px] mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
<div className="flex flex-col">
<a className="font-fraunces font-semibold text-[32px] text-white tracking-tight flex items-baseline mb-4" href="#">
              Cyade
              <span className="text-[#D97706]">.</span>
</a>
<p className="text-[#CBD5E1] text-[15px] leading-relaxed mb-6 max-w-[280px]">
              Centro Integral de Apoyo y Desarrollo Escolar desde 2009.
            </p>
<div className="flex items-center gap-4">
<a className="text-[rgba(255,255,255,0.7)] hover:text-white transition-colors" href="#">
<iconify-icon className="text-[20px]" icon="lucide:instagram"></iconify-icon>
</a>
<a className="text-[rgba(255,255,255,0.7)] hover:text-white transition-colors" href="#">
<iconify-icon className="text-[20px]" icon="lucide:facebook"></iconify-icon>
</a>
<a className="text-[rgba(255,255,255,0.7)] hover:text-white transition-colors" href="#">
<iconify-icon className="text-[20px]" icon="bi:tiktok"></iconify-icon>
</a>
<a className="text-[rgba(255,255,255,0.7)] hover:text-white transition-colors" href="https://wa.me/529981567801?text=Hola%2C%20vi%20su%20sitio%20web%20de%20Cyade%20y%20me%20gustar%C3%ADa%20informaci%C3%B3n%20general%20sobre%20los%20cursos." rel="noopener noreferrer" target="_blank">
<iconify-icon className="text-[20px]" icon="lucide:message-circle"></iconify-icon>
</a>
</div>
</div>
<div className="flex flex-col">
<h3 className="text-[#94A3B8] text-[13px] font-semibold tracking-widest uppercase mb-6">
              CURSOS
            </h3>
<ul className="flex flex-col text-[16px] leading-[2] text-[#F1F5F9]">
<li>
<a className="hover:text-white transition-colors" href="#">
                  Preparatoria CENEVAL
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Secundaria CENEVAL
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Ingreso a Universidad
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Ingreso a Preparatoria
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Ingreso al TEC
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Orientación Vocacional
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Ver todos →
                </a>
</li>
</ul>
</div>
<div className="flex flex-col">
<h3 className="text-[#94A3B8] text-[13px] font-semibold tracking-widest uppercase mb-6">
              UBICACIÓN
            </h3>
<p className="text-[#CBD5E1] text-[15px] leading-[1.7] mb-4">
              Calle Kuxtin 28
              <br/>
              Fracc. Pehaltun, SM 505
              <br/>
              Cancún, Quintana Roo
              <br/>
              México
            </p>
<a className="text-[#FBBF24] text-[15px] font-medium hover:text-[#FDE68A] transition-colors" href="#">
              Cómo llegar →
            </a>
</div>
<div className="flex flex-col">
<h3 className="text-[#94A3B8] text-[13px] font-semibold tracking-widest uppercase mb-6">
              CONTACTO
            </h3>
<ul className="flex flex-col gap-4 text-[#CBD5E1] text-[15px]">
<li className="flex items-center gap-3">
<iconify-icon className="text-[20px] shrink-0" icon="lucide:message-circle"></iconify-icon>
                WhatsApp: +52 998 156 7801
              </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-[20px] shrink-0" icon="lucide:phone"></iconify-icon>
                Teléfono: (998) 156 7801
              </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-[20px] shrink-0" icon="lucide:mail"></iconify-icon>
                info@cyadecancun.com
              </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-[20px] shrink-0" icon="lucide:clock"></iconify-icon>
                Lun-Vie 11am-5pm · Sáb 4pm
              </li>
</ul>
</div>
</div>
<div className="border-t border-[rgba(255,255,255,0.08)] pt-[48px] flex flex-col md:flex-row items-center justify-between gap-4 text-[13px] text-[#64748B]">
<div className="text-center md:text-left">
            © 2026 Cyade Cancún · Todos los derechos reservados.
          </div>
<div className="text-center md:text-right">
<a className="hover:text-[#CBD5E1] transition-colors" href="#">
              Aviso de privacidad
            </a>
<span className="mx-2">·</span>
<a className="hover:text-[#CBD5E1] transition-colors" href="#">
              Términos y condiciones
            </a>
</div>
</div>
</div>
</footer>


    </>
  );
}
