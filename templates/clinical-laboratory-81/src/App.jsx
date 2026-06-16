import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Package Filtering Logic
        function filterPackages(category) {
            const cards = document.querySelectorAll('.package-card');
            const buttons = document.querySelectorAll('.filter-btn');
            
            // Update buttons state
            buttons.forEach(btn => {
                const btnCategory = btn.getAttribute('data-filter');
                if (btnCategory === category) {
                    btn.classList.add('bg-[#FF431B]', 'text-white');
                    btn.classList.remove('bg-white', 'text-[#FF431B]');
                } else {
                    btn.classList.remove('bg-[#FF431B]', 'text-white');
                    btn.classList.add('bg-white', 'text-[#FF431B]');
                }
            });

            // Filter cards
            cards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');
                
                // Reset animation
                card.classList.remove('reveal');
                card.style.opacity = '0';
                card.style.display = 'none';

                if (category === 'all' || cardCategory === category) {
                    setTimeout(() => {
                        card.style.display = 'flex';
                        // Small timeout to allow display:flex to apply before opacity transition
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'translateY(0)';
                        }, 50);
                    }, 100);
                }
            });
        }

        // Initialize scroll animations and mobile menu
        document.addEventListener('DOMContentLoaded', () => {
            const reveals = document.querySelectorAll('.reveal');

            const revealOnScroll = () => {
                const windowHeight = window.innerHeight;
                const elementVisible = 50;

                reveals.forEach((reveal) => {
                    const elementTop = reveal.getBoundingClientRect().top;
                    if (elementTop < windowHeight - elementVisible) {
                        reveal.classList.add('active');
                    }
                });
            };

            window.addEventListener('scroll', revealOnScroll);
            revealOnScroll();
            
            // Mobile menu toggle logic
            const btn = document.querySelector('[data-collapse-toggle]');
            const menu = document.getElementById('navbar-sticky');
            
            btn.addEventListener('click', () => {
                menu.classList.toggle('hidden');
                menu.classList.toggle('block');
            });

            // Trigger initial reveal
            revealOnScroll();
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed w-full z-50 top-0 start-0 border-b border-slate-100 bg-white/95 backdrop-blur-md transition-all duration-300">
<div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between px-6 py-4">
<a className="flex items-center space-x-2 group" href="#">
<div className="w-8 h-8 bg-[#FF431B] rounded-lg flex items-center justify-center text-white shadow-lg shadow-[#FF431B]/20">
<span className="iconify" data-icon="lucide:microscope" data-width="20" style={{strokeWidth: '1.5'}}></span>
</div>
<span className="self-center text-lg font-semibold whitespace-nowrap text-slate-900 tracking-tighter group-hover:opacity-80 transition-opacity">IMEDILAB</span>
</a>
<div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
<a className="hidden md:inline-flex items-center justify-center px-5 py-2 text-sm font-medium text-white transition-all bg-slate-900 border border-transparent rounded-full hover:bg-slate-800 focus:outline-none shadow-sm hover:shadow-md" href="https://wa.me/1234567890">
<span className="iconify mr-2" data-icon="lucide:calendar-clock" style={{strokeWidth: '1.5'}}></span>
                    Agendar Cita
                </a>
<button className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-slate-500 rounded-lg md:hidden hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-100" data-collapse-toggle="navbar-sticky" type="button">
<span className="sr-only">Open main menu</span>
<span className="iconify" data-icon="lucide:menu" data-width="24" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
<div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
<ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-slate-100 rounded-lg bg-slate-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent">
<li><a className="block py-2 px-3 text-slate-600 rounded hover:bg-slate-100 md:hover:bg-transparent md:hover:text-[#FF431B] md:p-0 text-sm transition-colors" href="#empresas">Empresas</a></li>
<li><a className="block py-2 px-3 text-slate-600 rounded hover:bg-slate-100 md:hover:bg-transparent md:hover:text-[#FF431B] md:p-0 text-sm transition-colors" href="#servicios">Servicios</a></li>
<li><a className="block py-2 px-3 text-slate-600 rounded hover:bg-slate-100 md:hover:bg-transparent md:hover:text-[#FF431B] md:p-0 text-sm transition-colors" href="#paquetes">Paquetes</a></li>
<li><a className="block py-2 px-3 text-slate-600 rounded hover:bg-slate-100 md:hover:bg-transparent md:hover:text-[#FF431B] md:p-0 text-sm transition-colors" href="#ubicaciones">Sucursales</a></li>
</ul>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
<div className="absolute inset-0 bg-grid -z-10 [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>

<div className="absolute top-0 right-0 -mr-20 -mt-20 w-[500px] h-[500px] bg-[#E6A93C]/10 rounded-full blur-3xl -z-10 opacity-50"></div>
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
<div className="max-w-2xl reveal">
<div className="inline-flex items-center rounded-full border border-[#FF431B]/20 bg-[#FF431B]/5 px-3 py-1 text-xs font-medium text-[#FF431B] mb-6">
<span className="flex h-1.5 w-1.5 rounded-full bg-[#FF431B] mr-2 animate-pulse"></span>
                        Laboratorio Clínico Certificado
                    </div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900 mb-6 leading-[1.1]">
                        Precisión diagnóstica en cada <span className="text-[#FF431B]">muestra.</span>
</h1>
<p className="text-lg text-slate-500 mb-8 leading-relaxed max-w-lg">
                        Tecnología de vanguardia para el análisis clínico. Resultados exactos y confidenciales para el cuidado integral de tu salud.
                    </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex justify-center items-center px-6 py-3 text-sm font-medium text-white bg-[#FF431B] rounded-lg hover:shadow-lg hover:shadow-[#FF431B]/25 transition-all duration-300" href="https://wa.me/1234567890">
                            Agendar estudio
                            <span className="iconify ml-2" data-icon="lucide:arrow-right" style={{strokeWidth: '1.5'}}></span>
</a>
<a className="inline-flex justify-center items-center px-6 py-3 text-sm font-medium text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 hover:border-slate-300 transition-all" href="#paquetes">
                            Ver paquetes
                        </a>
</div>
<div className="mt-10 flex items-center gap-4 text-sm text-slate-400">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full bg-slate-100 border-2 border-white flex items-center justify-center text-xs overflow-hidden"><img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&amp;fit=crop&amp;q=80&amp;w=100&amp;h=100"/></div>
<div className="w-8 h-8 rounded-full bg-slate-100 border-2 border-white flex items-center justify-center text-xs overflow-hidden"><img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&amp;fit=crop&amp;q=80&amp;w=100&amp;h=100"/></div>
<div className="w-8 h-8 rounded-full bg-slate-100 border-2 border-white flex items-center justify-center text-xs overflow-hidden"><img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&amp;fit=crop&amp;q=80&amp;w=100&amp;h=100"/></div>
</div>
<p>Resultados confiables 24/7</p>
</div>
</div>
<div className="relative lg:h-auto reveal delay-100">
<div className="relative rounded-2xl overflow-hidden shadow-2xl bg-slate-100 border border-slate-200 aspect-[4/3] lg:aspect-square group">

<img alt="Técnico de laboratorio analizando muestras" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1579154204601-01588f351e67?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>
<div className="absolute inset-0 bg-[#FF431B]/5"></div>
</div>

<div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100 max-w-xs hidden md:block">
<div className="flex items-center gap-3 mb-2">
<div className="w-10 h-10 bg-[#E6A93C]/10 rounded-full flex items-center justify-center text-[#E6A93C]">
<span className="iconify" data-icon="lucide:check-circle" width="20"></span>
</div>
<div>
<p className="text-sm font-semibold text-slate-900">Resultados en línea</p>
<p className="text-xs text-slate-500">Consulta segura para pacientes</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50/50 border-y border-slate-200/60" id="empresas">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 reveal">
<div className="max-w-xl">
<h2 className="text-4xl font-bold tracking-tight text-slate-900 mb-4">Soluciones Empresariales</h2>
<p className="text-lg text-slate-500">Optimizamos la salud ocupacional de su empresa con convenios a medida y atención prioritaria.</p>
</div>
<a className="inline-flex items-center text-sm font-medium text-[#FF431B] hover:text-[#E6A93C] transition-colors" href="https://wa.me/1234567890?text=Hola,%20me%20interesa%20un%20convenio%20empresarial">
                    Solicitar propuesta
                    <span className="iconify ml-1" data-icon="lucide:arrow-right" style={{strokeWidth: '1.5'}}></span>
</a>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="group bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-lg hover:border-[#E6A93C]/50 transition-all duration-300 reveal">
<div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center text-slate-600 mb-6 group-hover:bg-[#FF431B]/10 group-hover:text-[#FF431B] transition-colors">
<span className="iconify" data-icon="lucide:building-2" width="20"></span>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Convenios Corporativos</h3>
<p className="text-sm text-slate-500 mb-4">Tarifas preferenciales y facturación centralizada para el control total de sus recursos.</p>
</div>

<div className="group bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-lg hover:border-[#E6A93C]/50 transition-all duration-300 reveal delay-75">
<div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center text-slate-600 mb-6 group-hover:bg-[#FF431B]/10 group-hover:text-[#FF431B] transition-colors">
<span className="iconify" data-icon="lucide:briefcase-medical" width="20"></span>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Chequeos Ejecutivos</h3>
<p className="text-sm text-slate-500 mb-4">Perfiles de admisión y check-ups anuales diseñados para cada nivel de su organización.</p>
</div>

<div className="group bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-lg hover:border-[#E6A93C]/50 transition-all duration-300 reveal delay-150">
<div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center text-slate-600 mb-6 group-hover:bg-[#FF431B]/10 group-hover:text-[#FF431B] transition-colors">
<span className="iconify" data-icon="lucide:laptop-2" width="20"></span>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Portal de Empresas</h3>
<p className="text-sm text-slate-500 mb-4">Acceso digital inmediato a los resultados de sus colaboradores con máxima seguridad.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="servicios">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16 reveal">
<h2 className="text-4xl font-bold tracking-tight text-slate-900 mb-4">Nuestros Servicios</h2>
<p className="text-lg text-slate-500">Un ecosistema integral de diagnóstico clínico y gabinete.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="group relative bg-white p-6 rounded-xl border border-slate-200 hover:border-[#FF431B] hover:shadow-lg transition-all duration-300 reveal">
<div className="absolute top-6 right-6 text-slate-200 group-hover:text-[#FF431B]/20 transition-colors">
<span className="iconify" data-icon="lucide:flask-conical" width="48"></span>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2 mt-4 relative z-10">Análisis Clínicos</h3>
<p className="text-sm text-slate-500 relative z-10 group-hover:text-slate-600">Hematología, química sanguínea, hormonas y marcadores tumorales.</p>
</div>
<div className="group relative bg-white p-6 rounded-xl border border-slate-200 hover:border-[#FF431B] hover:shadow-lg transition-all duration-300 reveal delay-75">
<div className="absolute top-6 right-6 text-slate-200 group-hover:text-[#FF431B]/20 transition-colors">
<span className="iconify" data-icon="lucide:scan-line" width="48"></span>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2 mt-4 relative z-10">Rayos X e Imagen</h3>
<p className="text-sm text-slate-500 relative z-10 group-hover:text-slate-600">Radiografía digital de alta resolución y ultrasonidos especializados.</p>
</div>
<div className="group relative bg-white p-6 rounded-xl border border-slate-200 hover:border-[#FF431B] hover:shadow-lg transition-all duration-300 reveal delay-100">
<div className="absolute top-6 right-6 text-slate-200 group-hover:text-[#FF431B]/20 transition-colors">
<span className="iconify" data-icon="lucide:heart-pulse" width="48"></span>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2 mt-4 relative z-10">Cardiología</h3>
<p className="text-sm text-slate-500 relative z-10 group-hover:text-slate-600">Electrocardiogramas en reposo interpretados por especialistas.</p>
</div>
<div className="group relative bg-white p-6 rounded-xl border border-slate-200 hover:border-[#FF431B] hover:shadow-lg transition-all duration-300 reveal delay-150">
<div className="absolute top-6 right-6 text-slate-200 group-hover:text-[#FF431B]/20 transition-colors">
<span className="iconify" data-icon="lucide:stethoscope" width="48"></span>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2 mt-4 relative z-10">Consulta Médica</h3>
<p className="text-sm text-slate-500 relative z-10 group-hover:text-slate-600">Medicina general y preventiva para interpretación de resultados.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50/30 border-t border-slate-200" id="paquetes">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-10 reveal">
<h2 className="text-4xl font-bold tracking-tight text-slate-900 mb-4">Paquetes de Salud</h2>
<p className="text-lg text-slate-500">Prevención inteligente diseñada para cada etapa de la vida.</p>
</div>

<div className="flex justify-start md:justify-center gap-3 mb-12 overflow-x-auto pb-4 hide-scrollbar reveal">
<button className="filter-btn active whitespace-nowrap px-8 py-3 rounded-lg text-base font-semibold border-2 border-[#FF431B] bg-[#FF431B] text-white hover:bg-[#E6A93C] hover:border-[#E6A93C] hover:text-white transition-all duration-300" data-filter="all" onclick="filterPackages('all')">
                    Todos
                </button>
<button className="filter-btn whitespace-nowrap px-8 py-3 rounded-lg text-base font-semibold border-2 border-[#FF431B] bg-white text-[#FF431B] hover:bg-[#E6A93C] hover:border-[#E6A93C] hover:text-white transition-all duration-300" data-filter="hombres" onclick="filterPackages('hombres')">
                    Hombres
                </button>
<button className="filter-btn whitespace-nowrap px-8 py-3 rounded-lg text-base font-semibold border-2 border-[#FF431B] bg-white text-[#FF431B] hover:bg-[#E6A93C] hover:border-[#E6A93C] hover:text-white transition-all duration-300" data-filter="mujeres" onclick="filterPackages('mujeres')">
                    Mujeres
                </button>
<button className="filter-btn whitespace-nowrap px-8 py-3 rounded-lg text-base font-semibold border-2 border-[#FF431B] bg-white text-[#FF431B] hover:bg-[#E6A93C] hover:border-[#E6A93C] hover:text-white transition-all duration-300" data-filter="adulto-mayor" onclick="filterPackages('adulto-mayor')">
                    Adulto Mayor
                </button>
</div>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" id="packages-grid">

<div className="package-card relative p-8 bg-white border border-slate-200 rounded-xl hover:border-[#FF431B] hover:border-2 hover:shadow-lg transition-all duration-300 flex flex-col reveal group" data-category="hombres">
<div className="w-12 h-12 bg-[#FF431B]/10 rounded-lg flex items-center justify-center text-[#FF431B] mb-6">
<span className="iconify" data-icon="lucide:heart-pulse" width="24"></span>
</div>
<h3 className="text-2xl font-bold text-slate-900 mb-2">Perfil Cardíaco Agudo</h3>
<p className="text-3xl font-bold text-[#FF431B] mb-6">$1,030</p>
<div className="w-full h-px bg-slate-100 mb-6"></div>
<p className="text-sm font-semibold text-slate-900 mb-3">Incluye:</p>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex items-start text-sm text-slate-600">
<span className="iconify text-[#E6A93C] mr-2 mt-0.5 min-w-[16px]" data-icon="lucide:check"></span> Proteína C Reactiva Ultrasensible
                        </li>
<li className="flex items-start text-sm text-slate-600">
<span className="iconify text-[#E6A93C] mr-2 mt-0.5 min-w-[16px]" data-icon="lucide:check"></span> Creatín Fosfocinasa Fracción MB
                        </li>
<li className="flex items-start text-sm text-slate-600">
<span className="iconify text-[#E6A93C] mr-2 mt-0.5 min-w-[16px]" data-icon="lucide:check"></span> Troponina I
                        </li>
<li className="flex items-start text-sm text-slate-600">
<span className="iconify text-[#E6A93C] mr-2 mt-0.5 min-w-[16px]" data-icon="lucide:check"></span> Mioglobina
                        </li>
</ul>
<a className="w-full inline-flex justify-center items-center px-4 py-3 text-sm font-semibold text-white bg-[#FF431B] rounded-lg hover:bg-[#E6A93C] transition-colors" href="https://wa.me/1234567890?text=Info%20Perfil%20Cardiaco">
                        Solicitar Información
                    </a>
</div>

<div className="package-card relative p-8 bg-white border border-slate-200 rounded-xl hover:border-[#FF431B] hover:border-2 hover:shadow-lg transition-all duration-300 flex flex-col reveal delay-75 group" data-category="hombres">
<div className="w-12 h-12 bg-[#FF431B]/10 rounded-lg flex items-center justify-center text-[#FF431B] mb-6">
<span className="iconify" data-icon="lucide:brain-circuit" width="24"></span>
</div>
<h3 className="text-2xl font-bold text-slate-900 mb-2">Perfil de Estrés</h3>
<p className="text-3xl font-bold text-[#FF431B] mb-6">$997</p>
<div className="w-full h-px bg-slate-100 mb-6"></div>
<p className="text-sm font-semibold text-slate-900 mb-3">Incluye:</p>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex items-start text-sm text-slate-600">
<span className="iconify text-[#E6A93C] mr-2 mt-0.5 min-w-[16px]" data-icon="lucide:check"></span> Inmunoglobulina A en saliva
                        </li>
<li className="flex items-start text-sm text-slate-600">
<span className="iconify text-[#E6A93C] mr-2 mt-0.5 min-w-[16px]" data-icon="lucide:check"></span> Cortisol en saliva
                        </li>
<li className="flex items-start text-sm text-slate-600">
<span className="iconify text-[#E6A93C] mr-2 mt-0.5 min-w-[16px]" data-icon="lucide:check"></span> Amilasa en saliva
                        </li>
</ul>
<a className="w-full inline-flex justify-center items-center px-4 py-3 text-sm font-semibold text-white bg-[#FF431B] rounded-lg hover:bg-[#E6A93C] transition-colors" href="https://wa.me/1234567890?text=Info%20Perfil%20Estres">
                        Solicitar Información
                    </a>
</div>

<div className="package-card relative p-8 bg-white border border-slate-200 rounded-xl hover:border-[#FF431B] hover:border-2 hover:shadow-lg transition-all duration-300 flex flex-col reveal delay-100 group" data-category="hombres">
<div className="w-12 h-12 bg-[#FF431B]/10 rounded-lg flex items-center justify-center text-[#FF431B] mb-6">
<span className="iconify" data-icon="lucide:shield-plus" width="24"></span>
</div>
<h3 className="text-2xl font-bold text-slate-900 mb-2">Perfil de Dengue</h3>
<p className="text-3xl font-bold text-[#FF431B] mb-6">$465</p>
<div className="w-full h-px bg-slate-100 mb-6"></div>
<p className="text-sm font-semibold text-slate-900 mb-3">Incluye:</p>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex items-start text-sm text-slate-600">
<span className="iconify text-[#E6A93C] mr-2 mt-0.5 min-w-[16px]" data-icon="lucide:check"></span> Ag. temprano de Dengue (NS1)
                        </li>
<li className="flex items-start text-sm text-slate-600">
<span className="iconify text-[#E6A93C] mr-2 mt-0.5 min-w-[16px]" data-icon="lucide:check"></span> Ac. anti Dengue IgG
                        </li>
<li className="flex items-start text-sm text-slate-600">
<span className="iconify text-[#E6A93C] mr-2 mt-0.5 min-w-[16px]" data-icon="lucide:check"></span> Ac. anti Dengue IgM
                        </li>
</ul>
<a className="w-full inline-flex justify-center items-center px-4 py-3 text-sm font-semibold text-white bg-[#FF431B] rounded-lg hover:bg-[#E6A93C] transition-colors" href="https://wa.me/1234567890?text=Info%20Perfil%20Dengue">
                        Solicitar Información
                    </a>
</div>

<div className="package-card relative p-8 bg-white border border-slate-200 rounded-xl hover:border-[#FF431B] hover:border-2 hover:shadow-lg transition-all duration-300 flex flex-col reveal group" data-category="mujeres">
<div className="w-12 h-12 bg-[#FF431B]/10 rounded-lg flex items-center justify-center text-[#FF431B] mb-6">
<span className="iconify" data-icon="lucide:flower-2" width="24"></span>
</div>
<h3 className="text-2xl font-bold text-slate-900 mb-2">Check-up Femenino</h3>
<p className="text-3xl font-bold text-[#FF431B] mb-6">Próximamente</p>
<div className="w-full h-px bg-slate-100 mb-6"></div>
<p className="text-sm font-semibold text-slate-900 mb-3">Incluye:</p>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex items-start text-sm text-slate-600">
<span className="iconify text-[#E6A93C] mr-2 mt-0.5 min-w-[16px]" data-icon="lucide:check"></span> Perfil Hormonal
                        </li>
<li className="flex items-start text-sm text-slate-600">
<span className="iconify text-[#E6A93C] mr-2 mt-0.5 min-w-[16px]" data-icon="lucide:check"></span> Papanicolaou
                        </li>
<li className="flex items-start text-sm text-slate-600">
<span className="iconify text-[#E6A93C] mr-2 mt-0.5 min-w-[16px]" data-icon="lucide:check"></span> Mastografía (Próximamente)
                        </li>
</ul>
<a className="w-full inline-flex justify-center items-center px-4 py-3 text-sm font-semibold text-white bg-[#FF431B] rounded-lg hover:bg-[#E6A93C] transition-colors" href="https://wa.me/1234567890">
                        Consultar Disponibilidad
                    </a>
</div>

<div className="package-card relative p-8 bg-white border border-slate-200 rounded-xl hover:border-[#FF431B] hover:border-2 hover:shadow-lg transition-all duration-300 flex flex-col reveal group" data-category="adulto-mayor">
<div className="w-12 h-12 bg-[#FF431B]/10 rounded-lg flex items-center justify-center text-[#FF431B] mb-6">
<span className="iconify" data-icon="lucide:armchair" width="24"></span>
</div>
<h3 className="text-2xl font-bold text-slate-900 mb-2">Check-up Geriatría</h3>
<p className="text-3xl font-bold text-[#FF431B] mb-6">Próximamente</p>
<div className="w-full h-px bg-slate-100 mb-6"></div>
<p className="text-sm font-semibold text-slate-900 mb-3">Incluye:</p>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex items-start text-sm text-slate-600">
<span className="iconify text-[#E6A93C] mr-2 mt-0.5 min-w-[16px]" data-icon="lucide:check"></span> Química Sanguínea Completa
                        </li>
<li className="flex items-start text-sm text-slate-600">
<span className="iconify text-[#E6A93C] mr-2 mt-0.5 min-w-[16px]" data-icon="lucide:check"></span> Examen General de Orina
                        </li>
<li className="flex items-start text-sm text-slate-600">
<span className="iconify text-[#E6A93C] mr-2 mt-0.5 min-w-[16px]" data-icon="lucide:check"></span> Tele de Tórax
                        </li>
</ul>
<a className="w-full inline-flex justify-center items-center px-4 py-3 text-sm font-semibold text-white bg-[#FF431B] rounded-lg hover:bg-[#E6A93C] transition-colors" href="https://wa.me/1234567890">
                        Consultar Disponibilidad
                    </a>
</div>
</div>
</div>
</section>

<section className="py-24 overflow-hidden bg-white" id="nosotros">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1 reveal">
<div className="relative rounded-2xl overflow-hidden border border-slate-200">
<img alt="Químico trabajando" className="w-full object-cover hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>
</div>
</div>
<div className="order-1 lg:order-2 reveal">
<h2 className="text-sm font-semibold text-[#FF431B] tracking-wide uppercase mb-3">Sobre IMEDILAB</h2>
<h3 className="text-4xl font-bold tracking-tight text-slate-900 mb-6">Más que un laboratorio, somos aliados de tu salud.</h3>
<div className="space-y-6 text-slate-500">
<p>
                            En IMEDILAB, fusionamos la calidez humana con la precisión científica. Entendemos que detrás de cada muestra hay una persona esperando respuestas confiables para tomar decisiones importantes.
                        </p>
<p>
                            Nuestro equipo de especialistas trabaja con equipos de última generación, garantizando resultados exactos. La modernización no es solo una meta, es nuestro estándar diario.
                        </p>
</div>
<div className="mt-8 grid grid-cols-2 gap-4">
<div className="border-l-4 border-[#E6A93C] pl-4">
<p className="text-2xl font-bold text-slate-900">15+</p>
<p className="text-xs text-slate-500 uppercase tracking-wide">Años de experiencia</p>
</div>
<div className="border-l-4 border-[#E6A93C] pl-4">
<p className="text-2xl font-bold text-slate-900">100%</p>
<p className="text-xs text-slate-500 uppercase tracking-wide">Certificados</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-200" id="ubicaciones">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="mb-12 reveal text-center">
<h2 className="text-4xl font-bold tracking-tight text-slate-900 mb-4">Nuestras Sucursales</h2>
<p className="text-lg text-slate-500">Ubica tu sucursal más cercana en Mérida, Yucatán.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white p-8 rounded-xl border border-slate-200 hover:border-[#E6A93C] hover:shadow-lg transition-all duration-300 reveal group flex flex-col h-full">
<div className="flex items-center justify-between mb-6">
<h3 className="text-xl font-bold text-slate-900">Sucursal Itzimná</h3>
</div>
<div className="space-y-4 flex-1">
<div className="flex items-start text-slate-500">
<span className="iconify mt-1 mr-3 text-[#FF431B] shrink-0" data-icon="lucide:map-pin" width="18"></span>
<p className="text-sm">Calle 58 307 x 20c y 24, Mérida, Yucatán</p>
</div>
<div className="flex items-start text-slate-500">
<span className="iconify mt-1 mr-3 text-[#FF431B] shrink-0" data-icon="lucide:phone" width="18"></span>
<p className="text-sm">999-XXX-XXXX</p>
</div>
<div className="flex items-start text-slate-500">
<span className="iconify mt-1 mr-3 text-[#FF431B] shrink-0" data-icon="lucide:clock" width="18"></span>
<p className="text-sm">Lun-Vie: 7:00 AM - 7:00 PM</p>
</div>
</div>
<a className="mt-8 block w-full py-3 text-center text-sm font-semibold text-[#E6A93C] border border-[#E6A93C] rounded-lg hover:bg-[#E6A93C] hover:text-white transition-all" href="https://www.google.com/maps/search/?api=1&amp;query=Calle+58+307+x+20c+y+24+Merida+Yucatan" target="_blank">
                        Ver en Google Maps
                    </a>
</div>

<div className="bg-white p-8 rounded-xl border border-slate-200 hover:border-[#E6A93C] hover:shadow-lg transition-all duration-300 reveal delay-75 group flex flex-col h-full relative overflow-hidden">
<div className="absolute top-0 right-0 bg-[#FF431B] text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg uppercase">Matriz</div>
<div className="flex items-center justify-between mb-6">
<h3 className="text-xl font-bold text-slate-900">Sucursal Matriz</h3>
</div>
<div className="space-y-4 flex-1">
<div className="flex items-start text-slate-500">
<span className="iconify mt-1 mr-3 text-[#FF431B] shrink-0" data-icon="lucide:map-pin" width="18"></span>
<p className="text-sm">C. 28ᴰ 238, Itzimná 108, 97143 Mérida, Yucatán</p>
</div>
<div className="flex items-start text-slate-500">
<span className="iconify mt-1 mr-3 text-[#FF431B] shrink-0" data-icon="lucide:phone" width="18"></span>
<p className="text-sm">999-XXX-XXXX</p>
</div>
<div className="flex items-start text-slate-500">
<span className="iconify mt-1 mr-3 text-[#FF431B] shrink-0" data-icon="lucide:clock" width="18"></span>
<p className="text-sm">Lun-Vie: 7:00 AM - 7:00 PM</p>
</div>
</div>
<a className="mt-8 block w-full py-3 text-center text-sm font-semibold text-[#E6A93C] border border-[#E6A93C] rounded-lg hover:bg-[#E6A93C] hover:text-white transition-all" href="https://www.google.com/maps/search/?api=1&amp;query=C.+28D+238+Itzimna+108+Merida+Yucatan" target="_blank">
                        Ver en Google Maps
                    </a>
</div>

<div className="bg-white p-8 rounded-xl border border-slate-200 hover:border-[#E6A93C] hover:shadow-lg transition-all duration-300 reveal delay-100 group flex flex-col h-full">
<div className="flex items-center justify-between mb-6">
<h3 className="text-xl font-bold text-slate-900">Sucursal Las Américas</h3>
</div>
<div className="space-y-4 flex-1">
<div className="flex items-start text-slate-500">
<span className="iconify mt-1 mr-3 text-[#FF431B] shrink-0" data-icon="lucide:map-pin" width="18"></span>
<p className="text-sm">C. 108 134-Y 49, Fraccionamiento Las Américas 2, 97302 Mérida, Yucatán</p>
</div>
<div className="flex items-start text-slate-500">
<span className="iconify mt-1 mr-3 text-[#FF431B] shrink-0" data-icon="lucide:phone" width="18"></span>
<p className="text-sm">999-XXX-XXXX</p>
</div>
<div className="flex items-start text-slate-500">
<span className="iconify mt-1 mr-3 text-[#FF431B] shrink-0" data-icon="lucide:clock" width="18"></span>
<p className="text-sm">Lun-Vie: 7:00 AM - 7:00 PM</p>
</div>
</div>
<a className="mt-8 block w-full py-3 text-center text-sm font-semibold text-[#E6A93C] border border-[#E6A93C] rounded-lg hover:bg-[#E6A93C] hover:text-white transition-all" href="https://www.google.com/maps/search/?api=1&amp;query=C.+108+134-Y+49+Las+Americas+2+Merida+Yucatan" target="_blank">
                        Ver en Google Maps
                    </a>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden">
<div className="max-w-3xl mx-auto px-6 lg:px-8 text-center relative z-10 reveal">
<h2 className="text-4xl font-bold tracking-tight text-slate-900 mb-6">¿Dudas o cotizaciones?</h2>
<p className="text-lg text-slate-500 mb-10">Nuestro equipo está listo para atenderte. Escríbenos por WhatsApp para una respuesta inmediata.</p>
<div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
<a className="inline-flex justify-center items-center px-6 py-3 text-sm font-medium text-white bg-[#25D366] hover:bg-[#20bd5a] rounded-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5" href="https://wa.me/1234567890">
<span className="iconify mr-2" data-icon="lucide:message-circle" style={{strokeWidth: '2'}}></span>
                    Chat en WhatsApp
                </a>
</div>
<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm text-left max-w-lg mx-auto group hover:border-[#FF431B]/30 transition-colors">
<p className="text-sm font-medium text-slate-900 mb-4">O envíanos un correo</p>
<form className="space-y-4">
<div>
<input className="w-full px-4 py-3 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF431B]/20 focus:border-[#FF431B] transition-all" placeholder="Nombre completo" type="text"/>
</div>
<div>
<input className="w-full px-4 py-3 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF431B]/20 focus:border-[#FF431B] transition-all" placeholder="Correo electrónico" type="email"/>
</div>
<button className="w-full px-4 py-3 text-sm font-medium text-white bg-[#FF431B] hover:bg-[#E6A93C] rounded-lg transition-colors" type="button">Enviar mensaje</button>
</form>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-1">
<div className="flex items-center space-x-2 mb-4">
<div className="w-6 h-6 bg-[#FF431B] rounded flex items-center justify-center text-white">
<span className="iconify" data-icon="lucide:microscope" data-width="16"></span>
</div>
<span className="text-base font-semibold text-slate-900 tracking-tighter">IMEDILAB</span>
</div>
<p className="text-xs text-slate-500 leading-relaxed">
                        Comprometidos con la excelencia diagnóstica en Yucatán. Tu salud es nuestra prioridad.
                    </p>
</div>
<div>
<h5 className="text-sm font-semibold text-slate-900 mb-4">Pacientes</h5>
<ul className="space-y-2 text-xs text-slate-500">
<li><a className="hover:text-[#FF431B] transition-colors" href="#">Consultar Resultados</a></li>
<li><a className="hover:text-[#FF431B] transition-colors" href="#">Preparación para estudios</a></li>
<li><a className="hover:text-[#FF431B] transition-colors" href="#">Promociones</a></li>
</ul>
</div>
<div>
<h5 className="text-sm font-semibold text-slate-900 mb-4">Empresa</h5>
<ul className="space-y-2 text-xs text-slate-500">
<li><a className="hover:text-[#FF431B] transition-colors" href="#">Quiénes somos</a></li>
<li><a className="hover:text-[#FF431B] transition-colors" href="#">Bolsa de trabajo</a></li>
<li><a className="hover:text-[#FF431B] transition-colors" href="#">Contacto corporativo</a></li>
</ul>
</div>
<div>
<h5 className="text-sm font-semibold text-slate-900 mb-4">Legal</h5>
<ul className="space-y-2 text-xs text-slate-500">
<li>Aviso de Funcionamiento: 203301...</li>
<li><a className="underline hover:text-[#FF431B]" href="#">Aviso de Privacidad</a></li>
</ul>
</div>
</div>
<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-400">© 2023 IMEDILAB. Todos los derechos reservados.</p>
<div className="flex space-x-4">
<a className="text-slate-400 hover:text-[#E6A93C]" href="#"><span className="iconify" data-icon="lucide:facebook" width="16"></span></a>
<a className="text-slate-400 hover:text-[#E6A93C]" href="#"><span className="iconify" data-icon="lucide:instagram" width="16"></span></a>
</div>
</div>
</div>
</footer>

<a className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-3.5 rounded-full shadow-lg hover:scale-110 hover:shadow-green-500/30 transition-all duration-300 flex items-center justify-center group" href="https://wa.me/1234567890" target="_blank">
<span className="iconify" data-icon="lucide:message-circle" height="28" style={{strokeWidth: '2'}} width="28"></span>
</a>



    </>
  );
}
