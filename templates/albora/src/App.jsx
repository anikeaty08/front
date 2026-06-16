import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      // Diagnostic Flow logic 
      function openDiagnosticFlow() {
          document.getElementById('diagnostic-modal').classList.remove('hidden');
          setTimeout(() => { document.getElementById('diagnostic-modal').classList.add('open'); }, 10);
          document.body.style.overflow = 'hidden';
      }
      function closeDiagnosticFlow() {
          document.getElementById('diagnostic-modal').classList.remove('open');
          setTimeout(() => { document.getElementById('diagnostic-modal').classList.add('hidden'); }, 500);
          document.body.style.overflow = '';
      }
    


      let currentTStep = 0; 
      const totalTSteps = 6;

      function openTalentFlow() {
          const modal = document.getElementById('talent-modal');
          modal.classList.remove('hidden');
          setTimeout(() => { modal.classList.add('open'); }, 10);
          document.body.style.overflow = 'hidden';
          
          if(currentTStep === 0) {
              updateTalentUI();
          }
      }

      function closeTalentFlow() {
          const modal = document.getElementById('talent-modal');
          modal.classList.remove('open');
          setTimeout(() => {
              modal.classList.add('hidden');
              document.body.style.overflow = '';
              currentTStep = 0;
              updateTalentUI();
          }, 500);
      }

      function updateTalentUI() {
          document.querySelectorAll('.talent-step').forEach(panel => {
              panel.classList.remove('active');
              if (parseInt(panel.dataset.tStep) === currentTStep) {
                  panel.classList.add('active');
              }
          });

          const nextBtn = document.getElementById('t-next-btn');
          const prevBtn = document.getElementById('t-prev-btn');
          const indicator = document.getElementById('talent-step-indicator');
          const progressBar = document.getElementById('talent-progress-bar');
          const footer = document.getElementById('talent-modal-footer');

          if (currentTStep === 0 || currentTStep > totalTSteps) {
              footer.style.display = 'none';
              indicator.style.opacity = '0';
              progressBar.style.width = currentTStep === 0 ? '0%' : '100%';
          } else {
              footer.style.display = 'flex';
              indicator.style.opacity = '1';
              indicator.innerText = `Paso ${currentTStep} de ${totalTSteps}`;
              progressBar.style.width = `${(currentTStep / totalTSteps) * 100}%`;
          }

          if (currentTStep === 1) {
              prevBtn.classList.add('opacity-0', 'pointer-events-none');
          } else {
              prevBtn.classList.remove('opacity-0', 'pointer-events-none');
          }

          if (currentTStep === totalTSteps) {
              nextBtn.innerText = 'Enviar Perfil';
          } else {
              nextBtn.innerText = 'Siguiente';
          }

          validateTalentStep();
          
          const container = document.getElementById('talent-steps-container');
          if(container) container.scrollTo({ top: 0, behavior: 'smooth' });
      }

      function nextTalentStep() {
          if (currentTStep <= totalTSteps) {
              currentTStep++;
              updateTalentUI();
          }
      }

      function prevTalentStep() {
          if (currentTStep > 0) {
              currentTStep--;
              updateTalentUI();
          }
      }

      function validateTalentStep() {
          const nextBtn = document.getElementById('t-next-btn');
          if(!nextBtn) return;
          nextBtn.disabled = true;

          const activePanel = document.querySelector(`.talent-step[data-t-step="${currentTStep}"]`);
          if(!activePanel) return;

          if (currentTStep === 1 || currentTStep === 3 || currentTStep === 4) {
              if (activePanel.querySelector('input[type="radio"]:checked')) nextBtn.disabled = false;
          } else if (currentTStep === 2) {
              enableTalentNextMulti();
          } else if (currentTStep === 5) {
              enableTalentNextText();
          } else if (currentTStep === 6) {
              enableTalentContact();
          }
      }

      function enableTalentNext() { 
          const btn = document.getElementById('t-next-btn');
          if(btn) btn.disabled = false; 
      }
      
      function enableTalentNextMulti() {
          const checked = document.querySelectorAll(`.talent-step[data-t-step="${currentTStep}"] input[type="checkbox"]:checked`);
          document.getElementById('t-next-btn').disabled = checked.length === 0;
      }

      function enableTalentNextText() {
          const text = document.getElementById('t_presentation').value.trim();
          document.getElementById('t-next-btn').disabled = text.length < 10;
      }

      function enableTalentContact() {
          const name = document.getElementById('t_name').value.trim();
          const email = document.getElementById('t_email').value.trim();
          const location = document.getElementById('t_location').value.trim();
          const linkedin = document.getElementById('t_linkedin').value.trim();
          const consent = document.getElementById('t_consent').checked;

          const isValid = name !== '' && email.includes('@') && location !== '' && linkedin !== '' && consent;
          document.getElementById('t-next-btn').disabled = !isValid;
      }

      document.querySelectorAll('.talent-option').forEach(label => {
          label.addEventListener('click', function() {
              const radio = this.querySelector('input[type="radio"]');
              const name = radio.name;
              
              document.querySelectorAll(`input[name="${name}"]`).forEach(input => {
                  input.closest('.talent-option').classList.remove('selected', 'bg-stone-100', 'border-stone-100');
              });

              if(radio.checked) {
                  this.classList.add('selected', 'bg-stone-100', 'border-stone-100');
              }
          });
      });

      document.querySelectorAll('.talent-option-multi').forEach(label => {
          label.addEventListener('change', function() {
              const checkbox = this.querySelector('input[type="checkbox"]');
              if(checkbox.checked) {
                  this.classList.add('selected', 'bg-stone-100', 'border-stone-100');
              } else {
                  this.classList.remove('selected', 'bg-stone-100', 'border-stone-100');
              }
          });
      });

      document.getElementById('t_consent').addEventListener('change', function() {
          if(this.checked) this.closest('label').classList.add('selected');
          else this.closest('label').classList.remove('selected');
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 w-full z-40 mix-blend-difference text-stone-100 px-6 md:px-12 py-6 flex justify-between items-center pointer-events-none">
<div className="tracking-[0.25em] text-xs uppercase pointer-events-auto cursor-pointer font-sans">
        A L B O R A
      </div>
<nav className="hidden md:flex gap-8 text-xs font-medium tracking-wide uppercase pointer-events-auto">
<a className="hover:opacity-60 transition-opacity font-sans" href="#about">
          Estudio
        </a>
<a className="hover:opacity-60 transition-opacity font-sans" href="#areas">
          Áreas
        </a>
<a className="hover:opacity-60 transition-opacity font-sans" href="#work">
          Iniciativas
        </a>
</nav>
<div className="pointer-events-auto">
<button className="text-xs tracking-wide uppercase border-b border-stone-100 pb-1 hover:opacity-60 transition-opacity font-sans" onclick="openDiagnosticFlow()">
          Contacto
        </button>
</div>
</header>
<main className="flex-grow">

<section className="min-h-screen flex flex-col justify-end pt-32 pb-12 px-6 md:px-12 relative">
<div className="max-w-7xl mx-auto w-full flex flex-col gap-16 md:gap-24">
<div className="flex flex-col gap-6 md:gap-8 max-w-5xl">
<span className="text-xs tracking-[0.2em] uppercase text-stone-400 font-sans">
              Laboratorio de Innovación Social
            </span>
<h1 className="text-6xl md:text-8xl lg:text-9xl leading-[0.9] text-stone-50 font-sans font-medium tracking-tight">
              Creemos nuevos
              <br className="hidden md:block"/>
              comienzos.
            </h1>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end border-t border-stone-800 pt-12">
<div className="md:col-span-6 lg:col-span-7">
<h2 className="text-2xl md:text-4xl tracking-tight leading-snug text-stone-200 max-w-2xl font-medium font-sans">
                Diseñamos y lanzamos soluciones para retos sociales complejos.
              </h2>
</div>
<div className="md:col-span-6 lg:col-span-5 flex flex-col gap-8">
<p className="text-base md:text-lg text-stone-400 leading-relaxed font-sans">
                Colaboramos con empresas, entidades, instituciones y
                emprendedores para transformar problemas estructurales en
                pilotos reales, medibles y con vocación de escalado.
              </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="group inline-flex items-center justify-between gap-4 bg-stone-100 text-stone-900 px-6 py-4 rounded-full text-sm hover:bg-stone-300 transition-colors w-fit font-sans" onclick="openDiagnosticFlow()">
                  Explorar una colaboración
                  <iconify-icon className="text-lg group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
<a className="group inline-flex items-center justify-center gap-2 border border-stone-700 bg-transparent text-stone-200 px-6 py-4 rounded-full text-sm hover:border-stone-500 transition-colors w-fit font-sans" href="#contact">
                  Conoce el proceso
                </a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-40 px-6 md:px-12 bg-[#0F0F0F] border-y border-stone-800 text-stone-50" id="about">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
<div className="md:col-span-4 flex flex-col gap-4">
<span className="text-xs uppercase tracking-[0.2em] text-stone-500 font-sans">
              01 — El Estudio
            </span>
</div>
<div className="md:col-span-8 flex flex-col gap-12">
<h3 className="text-3xl md:text-5xl lg:text-6xl tracking-tight leading-tight font-medium font-sans">
              Albora es un laboratorio que no solo piensa, sino que hace.
              <span className="text-stone-500 font-medium font-sans">
                Diseñamos desde la empatía y lanzamos a la realidad.
              </span>
</h3>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-12 border-t border-stone-800">
<div className="flex flex-col gap-3">
<iconify-icon className="text-3xl text-stone-500" icon="solar:user-hands-linear" strokeWidth="1.5"></iconify-icon>
<h4 className="text-lg tracking-tight font-sans">
                  Diseño centrado en las personas
                </h4>
<p className="text-sm text-stone-400 font-sans">
                  Comprendemos las necesidades reales de los usuarios para crear
                  soluciones con sentido y pertinencia.
                </p>
</div>
<div className="flex flex-col gap-3">
<iconify-icon className="text-3xl text-stone-500" icon="solar:rocket-linear" strokeWidth="1.5"></iconify-icon>
<h4 className="text-lg tracking-tight font-sans">Pilotos Reales</h4>
<p className="text-sm text-stone-400 font-sans">
                  Pasamos de la teoría a la práctica rápidamente, testeando en
                  entornos reales para aprender y adaptar.
                </p>
</div>
<div className="flex flex-col gap-3">
<iconify-icon className="text-3xl text-stone-500" icon="solar:ruler-angular-linear" strokeWidth="1.5"></iconify-icon>
<h4 className="text-lg tracking-tight font-sans">
                  Prototipado Ágil
                </h4>
<p className="text-sm text-stone-400 font-sans">
                  Construimos versiones tempranas de nuestras soluciones para
                  minimizar riesgos y maximizar el impacto.
                </p>
</div>
<div className="flex flex-col gap-3">
<iconify-icon className="text-3xl text-stone-500" icon="solar:chart-square-linear" strokeWidth="1.5"></iconify-icon>
<h4 className="text-lg tracking-tight font-sans">
                  Medición de Impacto
                </h4>
<p className="text-sm text-stone-400 font-sans">
                  Definimos métricas claras desde el inicio para asegurar que
                  cada iniciativa genere un cambio estructural medible.
                </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-40 px-6 md:px-12" id="areas">
<div className="max-w-7xl mx-auto flex flex-col gap-16">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
<div className="flex flex-col gap-4">
<span className="text-xs uppercase tracking-[0.2em] text-stone-500 font-sans">
                02 — Áreas de Acción
              </span>
<h2 className="text-4xl md:text-6xl font-medium font-sans tracking-tight text-stone-50">
                Retos que abordamos
              </h2>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
<div className="group border border-stone-800 p-8 h-80 flex flex-col justify-between hover:bg-[#111111] transition-colors duration-500 cursor-default">
<iconify-icon className="text-4xl text-stone-600 group-hover:text-stone-100 transition-colors" icon="solar:home-smile-linear" strokeWidth="1.5"></iconify-icon>
<div className="flex flex-col gap-2 transform group-hover:-translate-y-2 transition-transform duration-500">
<h3 className="text-2xl tracking-tight font-medium font-sans text-stone-50">
                  Vivienda y Autonomía
                </h3>
<div className="h-[1px] w-0 bg-stone-100 group-hover:w-full transition-all duration-500"></div>
</div>
</div>
<div className="group border border-stone-800 p-8 h-80 flex flex-col justify-between hover:bg-[#111111] transition-colors duration-500 cursor-default">
<iconify-icon className="text-4xl text-stone-600 group-hover:text-stone-100 transition-colors" icon="solar:wallet-money-linear" strokeWidth="1.5"></iconify-icon>
<div className="flex flex-col gap-2 transform group-hover:-translate-y-2 transition-transform duration-500">
<h3 className="text-2xl tracking-tight font-medium font-sans text-stone-50">
                  Oportunidades Económicas
                </h3>
<div className="h-[1px] w-0 bg-stone-100 group-hover:w-full transition-all duration-500"></div>
</div>
</div>
<div className="group border border-stone-800 p-8 h-80 flex flex-col justify-between hover:bg-[#111111] transition-colors duration-500 cursor-default">
<iconify-icon className="text-4xl text-stone-600 group-hover:text-stone-100 transition-colors" icon="solar:users-group-two-rounded-linear" strokeWidth="1.5"></iconify-icon>
<div className="flex flex-col gap-2 transform group-hover:-translate-y-2 transition-transform duration-500">
<h3 className="text-2xl tracking-tight font-medium font-sans text-stone-50">
                  Diversidad e Inclusión
                </h3>
<div className="h-[1px] w-0 bg-stone-100 group-hover:w-full transition-all duration-500"></div>
</div>
</div>
<div className="group border border-stone-800 p-8 h-80 flex flex-col justify-between hover:bg-[#111111] transition-colors duration-500 cursor-default">
<iconify-icon className="text-4xl text-stone-600 group-hover:text-stone-100 transition-colors" icon="solar:leaf-linear" strokeWidth="1.5"></iconify-icon>
<div className="flex flex-col gap-2 transform group-hover:-translate-y-2 transition-transform duration-500">
<h3 className="text-2xl tracking-tight font-medium font-sans text-stone-50">
                  Regeneración Comunitaria
                </h3>
<div className="h-[1px] w-0 bg-stone-100 group-hover:w-full transition-all duration-500"></div>
</div>
</div>
<div className="group border border-stone-800 p-8 h-80 flex flex-col justify-between hover:bg-[#111111] transition-colors duration-500 cursor-default sm:col-span-2 lg:col-span-1">
<iconify-icon className="text-4xl text-stone-600 group-hover:text-stone-100 transition-colors" icon="solar:lightbulb-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
<div className="flex flex-col gap-2 transform group-hover:-translate-y-2 transition-transform duration-500">
<h3 className="text-2xl tracking-tight font-medium font-sans text-stone-50">
                  Innovación Social
                </h3>
<div className="h-[1px] w-0 bg-stone-100 group-hover:w-full transition-all duration-500"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 bg-[#0A0A0A]">
<div className="max-w-7xl mx-auto flex flex-col gap-16">
<span className="text-xs uppercase tracking-[0.2em] text-stone-500 font-sans">
            03 — Metodología
          </span>
<div className="flex flex-col">
<div className="group border-t border-stone-800 py-12 flex flex-col md:flex-row gap-8 justify-between items-start cursor-default hover:px-6 transition-all duration-500 -mx-6 px-6 md:mx-0 md:px-0">
<div className="flex items-center gap-8 md:w-1/2">
<span className="text-sm text-stone-600 font-sans">01</span>
<h3 className="text-3xl md:text-5xl tracking-tight group-hover:translate-x-4 transition-transform duration-500 font-medium font-sans text-stone-50">
                  Entender el reto
                </h3>
</div>
<p className="text-stone-400 md:w-1/3 text-base font-sans">
                Inmersión profunda en el contexto, identificando barreras
                sistémicas y necesidades humanas reales.
              </p>
</div>
<div className="group border-t border-stone-800 py-12 flex flex-col md:flex-row gap-8 justify-between items-start cursor-default hover:px-6 transition-all duration-500 -mx-6 px-6 md:mx-0 md:px-0">
<div className="flex items-center gap-8 md:w-1/2">
<span className="text-sm text-stone-600 font-sans">02</span>
<h3 className="text-3xl md:text-5xl tracking-tight group-hover:translate-x-4 transition-transform duration-500 font-medium font-sans text-stone-50">
                  Diseñar la solución
                </h3>
</div>
<p className="text-stone-400 md:w-1/3 text-base font-sans">
                Co-creación de modelos de intervención, estructurando propuestas
                viables y sostenibles.
              </p>
</div>
<div className="group border-t border-stone-800 py-12 flex flex-col md:flex-row gap-8 justify-between items-start cursor-default hover:px-6 transition-all duration-500 -mx-6 px-6 md:mx-0 md:px-0">
<div className="flex items-center gap-8 md:w-1/2">
<span className="text-sm text-stone-600 font-sans">03</span>
<h3 className="text-3xl md:text-5xl tracking-tight group-hover:translate-x-4 transition-transform duration-500 font-medium font-sans text-stone-50">
                  Lanzar un piloto
                </h3>
</div>
<p className="text-stone-400 md:w-1/3 text-base font-sans">
                Ejecución ágil en entornos controlados para validar hipótesis de
                impacto y viabilidad operativa.
              </p>
</div>
<div className="group border-t border-stone-800 py-12 flex flex-col md:flex-row gap-8 justify-between items-start cursor-default hover:px-6 transition-all duration-500 -mx-6 px-6 md:mx-0 md:px-0 border-b">
<div className="flex items-center gap-8 md:w-1/2">
<span className="text-sm text-stone-600 font-sans">04</span>
<h3 className="text-3xl md:text-5xl tracking-tight group-hover:translate-x-4 transition-transform duration-500 font-medium font-sans text-stone-50">
                  Medir y evolucionar
                </h3>
</div>
<p className="text-stone-400 md:w-1/3 text-base font-sans">
                Análisis de resultados, iteración constante y preparación del
                modelo para su escalabilidad.
              </p>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-40 px-6 md:px-12" id="work">
<div className="max-w-7xl mx-auto flex flex-col gap-16">
<div className="flex flex-col gap-4">
<span className="text-xs uppercase tracking-[0.2em] text-stone-500 font-sans">
              04 — Trabajo
            </span>
<h2 className="text-4xl md:text-6xl font-medium font-sans tracking-tight text-stone-50">
              Iniciativas en curso
            </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="flex flex-col gap-6 group cursor-pointer">
<div className="bg-stone-900 aspect-[4/5] w-full overflow-hidden flex items-center justify-center relative border border-stone-800">
<div className="absolute inset-0 bg-stone-950/40 group-hover:bg-transparent transition-colors duration-500"></div>
<span className="text-stone-50 text-xs tracking-widest uppercase font-sans z-10 opacity-60 group-hover:opacity-100 transition-opacity">
                  Proyecto 01
                </span>
</div>
<div className="flex flex-col gap-2">
<h3 className="text-2xl tracking-tight font-medium font-sans text-stone-50">
                  Escuela de Oficios
                </h3>
<p className="text-sm text-stone-400 font-sans">
                  Formación acelerada y conexión laboral para colectivos
                  vulnerables.
                </p>
</div>
</div>
<div className="flex flex-col gap-6 group cursor-pointer md:mt-16">
<div className="bg-stone-900 aspect-[4/5] w-full overflow-hidden flex items-center justify-center relative border border-stone-800">
<div className="absolute inset-0 bg-stone-950/40 group-hover:bg-transparent transition-colors duration-500"></div>
<span className="text-stone-50 text-xs tracking-widest uppercase font-sans z-10 opacity-60 group-hover:opacity-100 transition-opacity">
                  Proyecto 02
                </span>
</div>
<div className="flex flex-col gap-2">
<h3 className="text-2xl tracking-tight font-medium font-sans text-stone-50">
                  Plataforma de Vivienda Social
                </h3>
<p className="text-sm text-stone-400 font-sans">
                  Nuevos modelos de acceso a vivienda digna y sostenible.
                </p>
</div>
</div>
<div className="flex flex-col gap-6 group cursor-pointer md:mt-32">
<div className="bg-stone-900 aspect-[4/5] w-full overflow-hidden flex items-center justify-center relative border border-stone-800">
<div className="absolute inset-0 bg-stone-950/40 group-hover:bg-transparent transition-colors duration-500"></div>
<span className="text-stone-50 text-xs tracking-widest uppercase font-sans z-10 opacity-60 group-hover:opacity-100 transition-opacity">
                  Proyecto 03
                </span>
</div>
<div className="flex flex-col gap-2">
<h3 className="text-2xl tracking-tight font-medium font-sans text-stone-50">
                  Diversidad Organizacional
                </h3>
<p className="text-sm text-stone-400 font-sans">
                  Rediseño de procesos internos para fomentar la inclusión en
                  corporaciones.
                </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 border-t border-stone-800 bg-[#0F0F0F]" id="contact">
<div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-16">
<div className="flex flex-col gap-4 items-center">
<span className="text-xs uppercase tracking-[0.2em] text-stone-500 font-sans">
              05 — Colaboración
            </span>
<h2 className="text-3xl md:text-5xl tracking-tight font-medium font-sans text-stone-50">
              Comencemos un proyecto
            </h2>
<p className="text-stone-400 mt-4 font-sans text-lg">
              Nuestro proceso para evaluar y estructurar nuevas colaboraciones.
            </p>
</div>
<div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 w-full font-medium text-sm md:text-base text-stone-300">
<div className="px-6 py-4 border border-stone-800 rounded-full bg-[#161616] w-full md:w-auto text-center font-sans">
              Diagnóstico
            </div>
<iconify-icon className="text-2xl text-stone-600 rotate-90 md:rotate-0" icon="solar:arrow-right-linear"></iconify-icon>
<div className="px-6 py-4 border border-stone-800 rounded-full bg-[#161616] w-full md:w-auto text-center font-sans">
              Evaluación Conjunta
            </div>
<iconify-icon className="text-2xl text-stone-600 rotate-90 md:rotate-0" icon="solar:arrow-right-linear"></iconify-icon>
<div className="px-6 py-4 border border-stone-800 rounded-full bg-[#161616] w-full md:w-auto text-center font-sans">
              Propuesta
            </div>
<iconify-icon className="text-2xl text-stone-600 rotate-90 md:rotate-0" icon="solar:arrow-right-linear"></iconify-icon>
<div className="px-6 py-4 bg-stone-100 text-stone-900 rounded-full w-full md:w-auto text-center font-sans">
              Piloto
            </div>
</div>
<button className="group inline-flex items-center gap-4 bg-stone-100 text-stone-900 px-8 py-5 rounded-full text-base hover:bg-stone-300 transition-colors mt-8 font-sans shadow-lg shadow-stone-100/5" onclick="openDiagnosticFlow()">
            Solicitar sesión de diagnóstico
            <iconify-icon className="text-xl group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</section>

<section className="py-12 px-4 md:px-8 bg-[#0A0A0A]">
<div className="max-w-7xl mx-auto bg-[#111111] border border-stone-800 text-stone-50 rounded-3xl p-12 md:p-24 flex flex-col items-center text-center gap-8 relative overflow-hidden">
<div className="absolute -top-24 -right-24 w-64 h-64 bg-stone-800 rounded-full blur-3xl opacity-20 pointer-events-none"></div>
<div className="absolute -bottom-24 -left-24 w-64 h-64 bg-stone-800 rounded-full blur-3xl opacity-20 pointer-events-none"></div>
<h2 className="text-3xl md:text-5xl tracking-tight relative z-10 font-medium font-sans">
            Red de Talento Albora
          </h2>
<p className="text-stone-400 max-w-xl relative z-10 font-sans">
            Buscamos expertos en diseño, investigación, operaciones y medición
            de impacto para colaborar en proyectos específicos de innovación
            social.
          </p>
<button className="group inline-flex items-center gap-3 border border-stone-700 bg-transparent text-stone-200 px-6 py-3 rounded-full text-sm hover:bg-stone-100 hover:text-stone-900 transition-colors mt-4 relative z-10 font-sans" onclick="openTalentFlow()">
            Unirme a la red
          </button>
</div>
</section>

<section className="py-32 md:py-48 px-6 md:px-12 flex items-center justify-center text-center bg-[#0A0A0A]">
<p className="text-3xl md:text-6xl lg:text-7xl leading-[1.1] max-w-5xl text-stone-50 font-medium font-sans tracking-tight">
          Creemos que transformar barreras estructurales exige más que ideas;
          <span className="text-stone-500 font-medium font-sans tracking-tight">
            exige diseñar y construir nuevos comienzos.
          </span>
</p>
</section>
</main>

<footer className="border-t border-stone-800 py-12 px-6 md:px-12 bg-[#0A0A0A]">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-medium tracking-widest uppercase text-stone-500">
<div className="font-sans">© 2024 ALBORA STUDIO</div>
<div className="flex gap-8">
<a className="hover:text-stone-50 transition-colors font-sans" href="#">
            LinkedIn
          </a>
<a className="hover:text-stone-50 transition-colors font-sans" href="#">
            Twitter
          </a>
<a className="hover:text-stone-50 transition-colors font-sans" href="#">
            Legal
          </a>
</div>
</div>
</footer>

<div className="fixed inset-0 z-50 hidden items-center justify-center p-4 sm:p-6 md:p-12" id="diagnostic-modal">
<div className="modal-backdrop absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0 transition-opacity duration-500 cursor-pointer" onclick="closeDiagnosticFlow()"></div>
<div className="modal-content relative w-full max-w-3xl bg-[#0F0F0F] rounded-3xl shadow-2xl flex flex-col h-full max-h-[85vh] overflow-hidden transform scale-95 opacity-0 transition-all duration-500 border border-stone-800">

<div className="flex-shrink-0">
<div className="flex justify-between items-center px-8 py-6 border-b border-stone-800">
<div className="text-xs uppercase tracking-[0.2em] font-medium text-stone-500" id="step-indicator">
              Paso 1 de 7
            </div>
<button className="text-stone-500 hover:text-stone-50 transition-colors flex items-center justify-center p-1 rounded-full hover:bg-stone-800/50" onclick="closeDiagnosticFlow()">
<iconify-icon className="text-2xl" icon="solar:close-circle-linear"></iconify-icon>
</button>
</div>
<div className="h-1 w-full bg-stone-800 relative overflow-hidden">
<div className="absolute top-0 left-0 h-full bg-stone-100 transition-all duration-500 ease-out" id="progress-bar" style={{width: '0%'}}></div>
</div>
</div>

<div className="steps-container flex-grow overflow-y-auto px-8 py-10 md:px-16 md:py-12 relative text-stone-50">
<div className="step-panel active text-center" data-step="1">
<h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-8">
              ¿Qué tipo de organización eres?
            </h2>
<select className="w-full bg-[#161616] border border-stone-800 rounded-xl p-5 text-base text-stone-200 focus:outline-none focus:border-stone-500 transition-colors" onchange="document.getElementById('next-btn').disabled = false">
<option disabled="" selected="" value="">Selecciona...</option>
<option value="Empresa">Empresa</option>
</select>
</div>
<div className="step-panel items-center justify-center text-center h-full min-h-[50vh]" data-step="8">
<h2 className="text-3xl font-medium">Gracias</h2>
</div>
</div>

<div className="flex-shrink-0 p-6 md:px-8 border-t border-stone-800 bg-[#0F0F0F] flex justify-between items-center">
<button className="text-sm font-medium text-stone-500 opacity-0 pointer-events-none">Volver</button>
<button className="bg-stone-100 text-stone-900 px-8 py-3.5 rounded-full text-sm font-medium hover:bg-stone-300 transition-colors" disabled="" id="next-btn" onclick="closeDiagnosticFlow()">Siguiente</button>
</div>
</div>
</div>

<div className="fixed inset-0 z-50 hidden items-center justify-center p-4 sm:p-6 md:p-12 font-sans" id="talent-modal">
<div className="modal-backdrop absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0 transition-opacity duration-500 cursor-pointer" onclick="closeTalentFlow()"></div>
<div className="modal-content relative w-full max-w-3xl bg-[#0F0F0F] rounded-3xl shadow-2xl flex flex-col h-full max-h-[85vh] overflow-hidden transform scale-95 opacity-0 transition-all duration-500 border border-stone-800">

<div className="flex-shrink-0" id="talent-header">
<div className="flex justify-between items-center px-8 py-6 border-b border-stone-800">
<div className="text-xs uppercase tracking-[0.2em] font-medium text-stone-500 transition-opacity duration-300" id="talent-step-indicator">
              Introducción
            </div>
<button className="text-stone-500 hover:text-stone-50 transition-colors flex items-center justify-center p-1 rounded-full hover:bg-stone-800/50" onclick="closeTalentFlow()">
<iconify-icon className="text-2xl" icon="solar:close-circle-linear"></iconify-icon>
</button>
</div>
<div className="h-1 w-full bg-stone-800 relative overflow-hidden">
<div className="absolute top-0 left-0 h-full bg-stone-100 transition-all duration-500 ease-out" id="talent-progress-bar" style={{width: '0%'}}></div>
</div>
</div>

<div className="steps-container flex-grow overflow-y-auto px-6 py-10 md:px-12 md:py-12 relative text-stone-50" id="talent-steps-container">

<div className="talent-step active h-full justify-center" data-t-step="0">
<div className="flex flex-col items-center justify-center text-center gap-8 min-h-[40vh]">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight leading-tight text-stone-50">
                     Forma parte de la <br className="hidden sm:block"/>red de talento Albora
                 </h2>
<p className="text-stone-400 max-w-xl text-base md:text-lg">
                     Albora reúne perfiles estratégicos, creativos y técnicos que quieren colaborar en el diseño y lanzamiento de soluciones con impacto social.
                 </p>
<button className="bg-stone-100 text-stone-900 px-8 py-4 rounded-full text-sm font-medium hover:bg-stone-300 transition-colors mt-4" onclick="nextTalentStep()">
                     Empezar
                 </button>
</div>
</div>

<div className="talent-step w-full" data-t-step="1">
<div className="flex flex-col gap-8">
<div className="flex flex-col gap-2 text-center md:text-left">
<h2 className="text-2xl md:text-3xl font-medium tracking-tight text-stone-50">¿Cómo te defines profesionalmente?</h2>
<p className="text-stone-500 text-sm">Selecciona el área donde aportas mayor valor.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
<label className="talent-option flex items-center p-4 rounded-xl border border-stone-800 cursor-pointer hover:bg-[#161616] transition-all group">
<input className="hidden" name="t_profile" onchange="enableTalentNext()" type="radio" value="Diseño de producto o servicio"/>
<span className="text-sm font-medium text-stone-300 group-[.selected]:text-stone-900 transition-colors">Diseño de producto o servicio</span>
</label>
<label className="talent-option flex items-center p-4 rounded-xl border border-stone-800 cursor-pointer hover:bg-[#161616] transition-all group">
<input className="hidden" name="t_profile" onchange="enableTalentNext()" type="radio" value="Investigación / UX research"/>
<span className="text-sm font-medium text-stone-300 group-[.selected]:text-stone-900 transition-colors">Investigación / UX research</span>
</label>
<label className="talent-option flex items-center p-4 rounded-xl border border-stone-800 cursor-pointer hover:bg-[#161616] transition-all group">
<input className="hidden" name="t_profile" onchange="enableTalentNext()" type="radio" value="Estrategia e innovación"/>
<span className="text-sm font-medium text-stone-300 group-[.selected]:text-stone-900 transition-colors">Estrategia e innovación</span>
</label>
<label className="talent-option flex items-center p-4 rounded-xl border border-stone-800 cursor-pointer hover:bg-[#161616] transition-all group">
<input className="hidden" name="t_profile" onchange="enableTalentNext()" type="radio" value="Impacto social"/>
<span className="text-sm font-medium text-stone-300 group-[.selected]:text-stone-900 transition-colors">Impacto social / teoría de cambio</span>
</label>
<label className="talent-option flex items-center p-4 rounded-xl border border-stone-800 cursor-pointer hover:bg-[#161616] transition-all group">
<input className="hidden" name="t_profile" onchange="enableTalentNext()" type="radio" value="Tecnología / desarrollo"/>
<span className="text-sm font-medium text-stone-300 group-[.selected]:text-stone-900 transition-colors">Tecnología / desarrollo</span>
</label>
<label className="talent-option flex items-center p-4 rounded-xl border border-stone-800 cursor-pointer hover:bg-[#161616] transition-all group">
<input className="hidden" name="t_profile" onchange="enableTalentNext()" type="radio" value="Comunicación / narrativa"/>
<span className="text-sm font-medium text-stone-300 group-[.selected]:text-stone-900 transition-colors">Comunicación / narrativa</span>
</label>
</div>
</div>
</div>

<div className="talent-step w-full" data-t-step="2">
<div className="flex flex-col gap-8">
<div className="flex flex-col gap-2 text-center md:text-left">
<h2 className="text-2xl md:text-3xl font-medium tracking-tight text-stone-50">¿En qué tipo de retos has trabajado?</h2>
<p className="text-stone-500 text-sm">Puedes seleccionar varias opciones.</p>
</div>
<div className="flex flex-wrap gap-2 md:gap-3">
<label className="talent-option-multi flex items-center px-5 py-3 rounded-full border border-stone-800 cursor-pointer hover:border-stone-500 transition-all group">
<input className="hidden" name="t_challenge" onchange="enableTalentNextMulti()" type="checkbox" value="Vivienda"/>
<span className="text-sm font-medium text-stone-300 group-[.selected]:text-stone-900 transition-colors">Vivienda</span>
</label>
<label className="talent-option-multi flex items-center px-5 py-3 rounded-full border border-stone-800 cursor-pointer hover:border-stone-500 transition-all group">
<input className="hidden" name="t_challenge" onchange="enableTalentNextMulti()" type="checkbox" value="Educación"/>
<span className="text-sm font-medium text-stone-300 group-[.selected]:text-stone-900 transition-colors">Educación</span>
</label>
<label className="talent-option-multi flex items-center px-5 py-3 rounded-full border border-stone-800 cursor-pointer hover:border-stone-500 transition-all group">
<input className="hidden" name="t_challenge" onchange="enableTalentNextMulti()" type="checkbox" value="Empleo"/>
<span className="text-sm font-medium text-stone-300 group-[.selected]:text-stone-900 transition-colors">Empleo</span>
</label>
<label className="talent-option-multi flex items-center px-5 py-3 rounded-full border border-stone-800 cursor-pointer hover:border-stone-500 transition-all group">
<input className="hidden" name="t_challenge" onchange="enableTalentNextMulti()" type="checkbox" value="Diversidad e inclusión"/>
<span className="text-sm font-medium text-stone-300 group-[.selected]:text-stone-900 transition-colors">Diversidad e inclusión</span>
</label>
<label className="talent-option-multi flex items-center px-5 py-3 rounded-full border border-stone-800 cursor-pointer hover:border-stone-500 transition-all group">
<input className="hidden" name="t_challenge" onchange="enableTalentNextMulti()" type="checkbox" value="Sector público"/>
<span className="text-sm font-medium text-stone-300 group-[.selected]:text-stone-900 transition-colors">Sector público</span>
</label>
<label className="talent-option-multi flex items-center px-5 py-3 rounded-full border border-stone-800 cursor-pointer hover:border-stone-500 transition-all group">
<input className="hidden" name="t_challenge" onchange="enableTalentNextMulti()" type="checkbox" value="Tercer sector"/>
<span className="text-sm font-medium text-stone-300 group-[.selected]:text-stone-900 transition-colors">Tercer sector</span>
</label>
<label className="talent-option-multi flex items-center px-5 py-3 rounded-full border border-stone-800 cursor-pointer hover:border-stone-500 transition-all group">
<input className="hidden" name="t_challenge" onchange="enableTalentNextMulti()" type="checkbox" value="Innovación social"/>
<span className="text-sm font-medium text-stone-300 group-[.selected]:text-stone-900 transition-colors">Innovación social</span>
</label>
</div>
</div>
</div>

<div className="talent-step w-full" data-t-step="3">
<div className="flex flex-col gap-8">
<div className="flex flex-col gap-2 text-center md:text-left">
<h2 className="text-2xl md:text-3xl font-medium tracking-tight text-stone-50">¿Qué te interesa de Albora?</h2>
<p className="text-stone-500 text-sm">Selecciona tu motivación principal.</p>
</div>
<div className="flex flex-col gap-3">
<label className="talent-option flex items-center justify-between p-5 rounded-xl border border-stone-800 cursor-pointer hover:bg-[#161616] transition-all group">
<span className="text-sm font-medium text-stone-300 group-[.selected]:text-stone-900 transition-colors">Colaborar en proyectos concretos</span>
<input className="hidden" name="t_motivation" onchange="enableTalentNext()" type="radio" value="Colaborar en proyectos"/>
<div className="w-5 h-5 rounded-full border border-stone-600 flex items-center justify-center group-[.selected]:border-stone-900 transition-colors">
<div className="w-2 h-2 rounded-full bg-stone-900 opacity-0 group-[.selected]:opacity-100 transition-opacity"></div>
</div>
</label>
<label className="talent-option flex items-center justify-between p-5 rounded-xl border border-stone-800 cursor-pointer hover:bg-[#161616] transition-all group">
<span className="text-sm font-medium text-stone-300 group-[.selected]:text-stone-900 transition-colors">Formar parte de una red con propósito</span>
<input className="hidden" name="t_motivation" onchange="enableTalentNext()" type="radio" value="Red con propósito"/>
<div className="w-5 h-5 rounded-full border border-stone-600 flex items-center justify-center group-[.selected]:border-stone-900 transition-colors">
<div className="w-2 h-2 rounded-full bg-stone-900 opacity-0 group-[.selected]:opacity-100 transition-opacity"></div>
</div>
</label>
<label className="talent-option flex items-center justify-between p-5 rounded-xl border border-stone-800 cursor-pointer hover:bg-[#161616] transition-all group">
<span className="text-sm font-medium text-stone-300 group-[.selected]:text-stone-900 transition-colors">Aportar expertise como advisor</span>
<input className="hidden" name="t_motivation" onchange="enableTalentNext()" type="radio" value="Advisor"/>
<div className="w-5 h-5 rounded-full border border-stone-600 flex items-center justify-center group-[.selected]:border-stone-900 transition-colors">
<div className="w-2 h-2 rounded-full bg-stone-900 opacity-0 group-[.selected]:opacity-100 transition-opacity"></div>
</div>
</label>
</div>
</div>
</div>

<div className="talent-step w-full" data-t-step="4">
<div className="flex flex-col gap-8">
<div className="flex flex-col gap-2 text-center md:text-left">
<h2 className="text-2xl md:text-3xl font-medium tracking-tight text-stone-50">¿Qué tipo de colaboración encaja contigo ahora?</h2>
</div>
<div className="flex flex-col gap-3">
<label className="talent-option flex items-center justify-between p-5 rounded-xl border border-stone-800 cursor-pointer hover:bg-[#161616] transition-all group">
<span className="text-sm font-medium text-stone-300 group-[.selected]:text-stone-900 transition-colors">Freelance por proyecto</span>
<input className="hidden" name="t_availability" onchange="enableTalentNext()" type="radio" value="Freelance"/>
<div className="w-5 h-5 rounded-full border border-stone-600 flex items-center justify-center group-[.selected]:border-stone-900 transition-colors">
<div className="w-2 h-2 rounded-full bg-stone-900 opacity-0 group-[.selected]:opacity-100 transition-opacity"></div>
</div>
</label>
<label className="talent-option flex items-center justify-between p-5 rounded-xl border border-stone-800 cursor-pointer hover:bg-[#161616] transition-all group">
<span className="text-sm font-medium text-stone-300 group-[.selected]:text-stone-900 transition-colors">Colaboración recurrente</span>
<input className="hidden" name="t_availability" onchange="enableTalentNext()" type="radio" value="Recurrente"/>
<div className="w-5 h-5 rounded-full border border-stone-600 flex items-center justify-center group-[.selected]:border-stone-900 transition-colors">
<div className="w-2 h-2 rounded-full bg-stone-900 opacity-0 group-[.selected]:opacity-100 transition-opacity"></div>
</div>
</label>
<label className="talent-option flex items-center justify-between p-5 rounded-xl border border-stone-800 cursor-pointer hover:bg-[#161616] transition-all group">
<span className="text-sm font-medium text-stone-300 group-[.selected]:text-stone-900 transition-colors">Aún no lo sé, pero quiero estar cerca</span>
<input className="hidden" name="t_availability" onchange="enableTalentNext()" type="radio" value="No lo se"/>
<div className="w-5 h-5 rounded-full border border-stone-600 flex items-center justify-center group-[.selected]:border-stone-900 transition-colors">
<div className="w-2 h-2 rounded-full bg-stone-900 opacity-0 group-[.selected]:opacity-100 transition-opacity"></div>
</div>
</label>
</div>
</div>
</div>

<div className="talent-step w-full h-full flex flex-col" data-t-step="5">
<div className="flex flex-col gap-6 flex-grow">
<div className="flex flex-col gap-2 text-center md:text-left">
<h2 className="text-2xl md:text-3xl font-medium tracking-tight text-stone-50">Cuéntanos sobre ti</h2>
<p className="text-stone-500 text-sm">Un breve párrafo nos ayuda a entender tu perfil más allá de las etiquetas.</p>
</div>
<textarea className="w-full bg-[#161616] border border-stone-800 rounded-xl p-5 text-base text-stone-200 flex-grow min-h-[150px] focus:outline-none focus:border-stone-500 focus:ring-1 focus:ring-stone-500 transition-all resize-none placeholder-stone-600" id="t_presentation" oninput="enableTalentNextText()" placeholder="Tu experiencia, tipo de proyectos en los que has trabajado y qué valor crees que podrías aportar a Albora..."></textarea>
</div>
</div>

<div className="talent-step w-full" data-t-step="6">
<div className="flex flex-col gap-8">
<div className="flex flex-col gap-2 text-center md:text-left">
<h2 className="text-2xl md:text-3xl font-medium tracking-tight text-stone-50">Tus datos</h2>
<p className="text-stone-500 text-sm">Para mantenernos en contacto cuando surja una oportunidad.</p>
</div>
<div className="flex flex-col gap-6">
<div className="flex flex-col gap-2">
<label className="text-xs uppercase tracking-widest text-stone-500 font-medium">Nombre completo *</label>
<input className="w-full bg-transparent border-b border-stone-700 py-2 text-base text-stone-50 focus:outline-none focus:border-stone-300 transition-colors" id="t_name" oninput="enableTalentContact()" type="text"/>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="flex flex-col gap-2">
<label className="text-xs uppercase tracking-widest text-stone-500 font-medium">Email *</label>
<input className="w-full bg-transparent border-b border-stone-700 py-2 text-base text-stone-50 focus:outline-none focus:border-stone-300 transition-colors" id="t_email" oninput="enableTalentContact()" type="email"/>
</div>
<div className="flex flex-col gap-2">
<label className="text-xs uppercase tracking-widest text-stone-500 font-medium">Ciudad / País *</label>
<input className="w-full bg-transparent border-b border-stone-700 py-2 text-base text-stone-50 focus:outline-none focus:border-stone-300 transition-colors" id="t_location" oninput="enableTalentContact()" type="text"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="flex flex-col gap-2">
<label className="text-xs uppercase tracking-widest text-stone-500 font-medium">LinkedIn *</label>
<input className="w-full bg-transparent border-b border-stone-700 py-2 text-base text-stone-50 focus:outline-none focus:border-stone-300 transition-colors placeholder-stone-600" id="t_linkedin" oninput="enableTalentContact()" placeholder="https://linkedin.com/in/..." type="url"/>
</div>
<div className="flex flex-col gap-2">
<label className="text-xs uppercase tracking-widest text-stone-500 font-medium">Portfolio <span className="text-stone-600 normal-case">(opcional)</span></label>
<input className="w-full bg-transparent border-b border-stone-700 py-2 text-base text-stone-50 focus:outline-none focus:border-stone-300 transition-colors placeholder-stone-600" placeholder="https://" type="url"/>
</div>
</div>
<label className="flex items-start gap-4 mt-4 cursor-pointer group">
<input className="hidden" id="t_consent" onchange="enableTalentContact()" type="checkbox"/>
<div className="w-5 h-5 mt-0.5 flex-shrink-0 rounded border border-stone-600 flex items-center justify-center group-[.selected]:border-stone-100 group-[.selected]:bg-stone-100 transition-colors">
<iconify-icon className="text-stone-900 text-sm opacity-0 group-[.selected]:opacity-100 transition-opacity" icon="solar:check-read-linear"></iconify-icon>
</div>
<span className="text-sm text-stone-400 leading-relaxed">
                              Acepto que Albora utilice esta información para futuras colaboraciones.
                          </span>
</label>
</div>
</div>
</div>

<div className="talent-step h-full justify-center text-center" data-t-step="7">
<div className="flex flex-col items-center justify-center gap-6 min-h-[40vh]">
<iconify-icon className="text-5xl text-stone-50" icon="solar:stars-linear"></iconify-icon>
<h2 className="text-3xl font-medium tracking-tight text-stone-50">Gracias por sumarte a Albora</h2>
<p className="text-stone-400 max-w-lg text-base leading-relaxed">
                      Revisaremos tu perfil y lo incorporaremos a nuestra red de talento para futuros retos, colaboraciones y oportunidades.
                  </p>
<button className="mt-4 bg-stone-100 text-stone-900 px-8 py-4 rounded-full text-sm font-medium hover:bg-stone-300 transition-colors" onclick="closeTalentFlow()">
                      Volver a la web
                  </button>
</div>
</div>
</div>

<div className="flex-shrink-0 hidden p-6 md:px-8 border-t border-stone-800 bg-[#0F0F0F] justify-between items-center" id="talent-modal-footer">
<button className="text-sm font-medium text-stone-500 hover:text-stone-50 transition-colors" id="t-prev-btn" onclick="prevTalentStep()">Volver</button>
<button className="bg-stone-100 text-stone-900 px-8 py-3.5 rounded-full text-sm font-medium disabled:opacity-30 disabled:cursor-not-allowed transition-all" disabled="" id="t-next-btn" onclick="nextTalentStep()">Siguiente</button>
</div>
</div>
</div>




    </>
  );
}
