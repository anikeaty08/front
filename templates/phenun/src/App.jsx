import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        lucide.createIcons();

        // Scroll Effect for Hero Section
        document.addEventListener('DOMContentLoaded', () => {
            const heroContent = document.getElementById('hero-content');
            if (!heroContent) return;

            // Check for prefers-reduced-motion
            const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            
            if (!prefersReducedMotion) {
                let ticking = false;

                const updateHeroEffect = () => {
                    const scrollY = window.scrollY;
                    const maxScroll = 450; // Pixels until effect is complete
                    
                    // Limit progress from 0 to 1
                    let progress = Math.min(scrollY / maxScroll, 1);
                    
                    // Calculate effect values
                    let opacity = 1 - progress;
                    let translateY = progress * 16;
                    let blur = progress * 2;

                    // Apply styles to the inner container to avoid layout jumps
                    heroContent.style.opacity = opacity.toFixed(3);
                    heroContent.style.transform = `translateY(${translateY.toFixed(2)}px)`;
                    heroContent.style.filter = `blur(${blur.toFixed(2)}px)`;

                    ticking = false;
                };

                window.addEventListener('scroll', () => {
                    if (!ticking) {
                        window.requestAnimationFrame(updateHeroEffect);
                        ticking = true;
                    }
                }, { passive: true });
                
                // Initialize state
                updateHeroEffect();
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed top-0 w-full h-screen bg-cover bg-center -z-10" data-alpha-mask="70" style={{backgroundImage: 'url("https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d4a35580-4dfb-4347-b487-30a77c7fa279_3840w.png")', maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 70%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 70%, transparent)'}}></div>

<header className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/80 backdrop-blur-md">
<div className="flex lg:px-8 max-w-6xl mr-auto ml-auto pt-4 pr-6 pb-4 pl-6 items-center justify-between">
<div className="flex items-center gap-2">
<span className="select-none text-xl font-medium text-[#153a6e] tracking-[0.2em]" style={{fontFamily: '\'Garet\', sans-serif'}}>Phenun</span>
</div>
<nav className="hidden md:flex items-center gap-8 text-base font-medium text-slate-600">
<a className="hover:text-slate-900 transition-colors font-sans" href="#about">Plataforma</a>
<a className="hover:text-slate-900 transition-colors font-sans" href="#how-it-works">Proceso</a>
<a className="hover:text-slate-900 transition-colors font-sans" href="#ecosystem">Ecosistema</a>
<a className="hover:text-slate-900 transition-colors font-sans" href="#security">Seguridad</a>
</nav>
<div className="flex items-center">
<a className="transition-colors hover:bg-slate-800 text-base font-medium text-white font-sans bg-[#153a6e] rounded-md pt-2.5 pr-4 pb-2.5 pl-4" href="#join">
                    Solicitar Piloto
                </a>
</div>
</div>
</header>
<main className="">

<section className="flex min-h-[85vh] flex-col overflow-hidden lg:px-8 w-full pr-6 pl-6 relative justify-center">

<div className="absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/32883a8f-31ab-428d-9f70-0800ce09da04_3840w.png)]"></div>

<div className="absolute inset-0 -z-10 bg-white/70"></div>
<div className="mx-auto max-w-5xl text-center will-change-[opacity,transform,filter]" id="hero-content" style={{filter: 'blur(0px)'}}>
<h1 className="sm:text-5xl lg:text-7xl text-balance leading-[1.1] text-4xl font-semibold text-[#153a6e] tracking-tight font-sans">
                    Inteligencia Artificial ética al servicio del neurodesarrollo.
                </h1>
<p className="mx-auto mt-12 max-w-3xl text-balance text-lg sm:text-xl leading-relaxed text-slate-600 font-sans">
                    Phenun integra datos clínicos, conductuales y madurativos para apoyar la detección precoz y la toma de decisiones, con seguridad, explicabilidad y enfoque humano.
                </p>
</div>
</section>

<section className="bg-slate-50 border-slate-100 border-t pt-24 pb-24" id="about">
<div className="mx-auto max-w-6xl px-6 lg:px-8">
<div className="mx-auto max-w-3xl text-center">
<span className="block mb-4 text-xs font-semibold tracking-wider text-[#153a6e] uppercase font-sans">SOBRE LA PLATAFORMA</span>
<h2 className="text-balance sm:text-3xl text-2xl font-semibold text-[#153a6e] tracking-tight font-sans">
                        Asistencia clínica estructurada, basada en evidencia.
                    </h2>
<p className="leading-relaxed text-lg text-slate-600 font-sans max-h-80 mt-6">
                        Phenun es una plataforma de apoyo clínico con IA diseñada para estructurar información relevante en la evaluación
                        del neurodesarrollo. Permite identificar señales tempranas, organizar datos conductuales y madurativos, y generar
                        informes interpretables que orientan la toma de decisiones profesionales.
                    </p>
</div>
</div>
</section>

<section className="bg-white border-slate-100 border-t py-24" id="how-it-works">
<div className="lg:px-8 max-w-6xl mr-auto ml-auto pr-6 pl-6">

<div className="mx-auto max-w-3xl text-center">
<span className="block mb-4 text-xs font-semibold tracking-wider text-[#153a6e] uppercase font-sans">CÓMO FUNCIONA</span>
<h2 className="text-balance sm:text-4xl text-3xl font-semibold text-[#153a6e] tracking-tight font-sans">
                        Cómo transformamos datos en decisión clínica
                    </h2>

<div className="mx-auto mt-8 mb-16 h-px w-24 bg-slate-200"></div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12 lg:gap-16">

<div className="relative z-0 flex flex-col pt-8 text-left">
<span className="leading-none -z-10 select-none text-9xl font-bold text-slate-100 tracking-tighter absolute top-0 left-0">01</span>
<h3 className="text-xl font-semibold text-slate-900 font-sans tracking-tight mb-3">Recogida estructurada de información</h3>
<p className="text-base text-slate-600 font-sans leading-relaxed">Profesionales y familias aportan datos clínicos, conductuales y madurativos mediante formularios y video.</p>
</div>

<div className="relative z-0 flex flex-col pt-8 text-left">
<span className="absolute top-0 left-0 text-9xl font-bold text-slate-100 leading-none -z-10 select-none tracking-tighter">02</span>
<h3 className="text-xl font-semibold text-slate-900 font-sans tracking-tight mb-3">Análisis con IA explicable</h3>
<p className="text-base text-slate-600 font-sans leading-relaxed">Los modelos identifican patrones relevantes y organizan la información de forma estructurada y trazable.</p>
</div>

<div className="relative z-0 flex flex-col pt-8 text-left">
<span className="absolute top-0 left-0 text-9xl font-bold text-slate-100 leading-none -z-10 select-none tracking-tighter">03</span>
<h3 className="text-xl font-semibold text-slate-900 font-sans tracking-tight mb-3">Informe clínicamente interpretable</h3>
<p className="text-base text-slate-600 font-sans leading-relaxed">La plataforma genera un informe claro que orienta decisiones profesionales y traduce resultados para familias.</p>
</div>
</div>
</div>
</section>

<section className="bg-neutral-100 border-slate-100 border-t pt-24 pb-24" id="ecosystem">
<div className="lg:px-8 max-w-6xl mr-auto ml-auto pr-6 pl-6">

<div className="mb-16 w-full">
<span className="block mb-4 text-xs font-semibold tracking-wider text-[#153a6e] uppercase font-sans">A QUIÉN ESTÁ DIRIGIDA</span>
<h2 className="text-3xl font-semibold text-[#153a6e] tracking-tight font-sans">Infraestructura para todo el ecosistema clínico</h2>
<p className="text-lg text-slate-600 font-sans mt-4">Phenun está diseñada para integrarse en entornos clínicos y conectar progresivamente con las familias en la evaluación del neurodesarrollo.</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="flex flex-col transition-all duration-300 hover:shadow-md hover:border-slate-300 bg-white h-full border-slate-200 border rounded-2xl pt-8 pr-8 pb-8 pl-8 shadow-sm">
<div className="mb-6 flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-slate-100 bg-slate-50">
<iconify-icon className="text-[#153a6e]" height="28" icon="solar:stethoscope-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight font-sans mb-3">Entornos clínicos</h3>
<p className="text-base leading-relaxed text-slate-600 font-sans flex-grow">Clínicas, hospitales y equipos de neurodesarrollo que requieren apoyo estructurado y basado en evidencia para la evaluación y toma de decisiones.</p>
</div>

<div className="flex flex-col h-full rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-md hover:border-slate-300">
<div className="mb-6 flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-slate-100 bg-slate-50">
<iconify-icon className="text-[#153a6e]" height="28" icon="solar:buildings-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="mb-3 text-xl font-semibold tracking-tight text-slate-900 font-sans">Instituciones del ecosistema</h3>
<p className="text-base leading-relaxed text-slate-600 font-sans flex-grow">Organizaciones sanitarias y educativas interesadas en integrar herramientas explicables y estandarizadas en sus procesos de evaluación.</p>
</div>

<div className="flex flex-col h-full rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-md hover:border-slate-300">
<div className="mb-6 flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-slate-100 bg-slate-50">
<iconify-icon className="text-[#153a6e]" height="28" icon="solar:users-group-two-rounded-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="mb-3 text-xl font-semibold tracking-tight text-slate-900 font-sans">Familias</h3>
<p className="text-base leading-relaxed text-slate-600 font-sans flex-grow">Padres y cuidadores que buscan comprender señales tempranas y facilitar un diálogo más claro con los profesionales.</p>
</div>

<div className="flex flex-col h-full rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-md hover:border-slate-300">
<div className="mb-6 flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-slate-100 bg-slate-50">
<iconify-icon className="text-[#153a6e]" height="28" icon="solar:book-bookmark-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="mb-3 text-xl font-semibold tracking-tight text-slate-900 font-sans">Validación e investigación</h3>
<p className="text-base leading-relaxed text-slate-600 font-sans flex-grow">Colaboraciones para evaluar el desempeño del modelo, generar evidencia clínica y avanzar en el conocimiento del neurodesarrollo.</p>
</div>
</div>
</div>
</section>

<section className="bg-slate-50 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/37c0a9ac-bc81-4350-9b3f-00b4210e8aa3_3840w.png)] bg-cover bg-center border-slate-100 border-t pt-24 pb-24" id="security">
<div className="mx-auto max-w-6xl px-6 lg:px-8">
<div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
<div className="">
<span className="block mb-4 text-xs font-semibold tracking-wider text-[#153a6e] uppercase font-sans">MARCO ÉTICO Y SEGURIDAD</span>
<h2 className="text-3xl font-semibold text-[#153a6e] tracking-tight font-sans">Diseñado con principios de ética médica y protección de datos</h2>
</div>
<div className="space-y-6">
<p className="text-lg leading-relaxed text-slate-600 font-sans">
                            Phenun no sustituye el criterio profesional. La plataforma estructura información y destaca patrones relevantes mediante modelos de IA explicable, bajo supervisión humana.
                        </p>
<div className="flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
<iconify-icon className="mt-0.5 shrink-0 text-[#153a6e]" height="26" icon="solar:shield-check-linear" strokeWidth="1.5" width="26"></iconify-icon>
<p className="text-base text-slate-700 font-sans leading-relaxed">
                                Cumple con estándares europeos de protección de datos (RGPD), cifrado y control de acceso por roles.
                            </p>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-slate-100 bg-white py-24">
<div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
<span className="block mb-4 text-xs font-semibold tracking-wider text-[#153a6e] uppercase font-sans">POR QUÉ EXISTE</span>
<h2 className="text-3xl font-semibold text-[#153a6e] tracking-tight font-sans mb-6">Cerrando la brecha entre evidencia y práctica clínica</h2>
<p className="text-xl leading-relaxed text-slate-600 font-sans">
                    Phenun surge ante una brecha entre la evidencia científica disponible y las herramientas utilizadas en la práctica real del neurodesarrollo. Nuestro objetivo es estructurar información compleja de forma rigurosa, explicable y clínicamente útil.
                </p>
</div>
</section>

<section className="bg-neutral-100 border-slate-100 border-t pt-12 pb-24">
<div className="lg:px-8 max-w-6xl mr-auto ml-auto pr-6 pl-6">
<div className="mb-16 max-w-5xl">
<span className="block mb-4 text-xs font-semibold tracking-wider text-[#153a6e] uppercase font-sans">LIDERAZGO CLÍNICO Y TECNOLÓGICO</span>
<h2 className="text-3xl font-semibold text-[#153a6e] tracking-tight font-sans">Ciencia, clínica e ingeniería aplicada al neurodesarrollo</h2>
<p className="text-lg leading-relaxed text-slate-600 font-sans mt-4 max-w-3xl">
                        Somos un equipo interdisciplinar que integra práctica clínica especializada, ciencia de datos avanzada e ingeniería en inteligencia artificial aplicada al neurodesarrollo.
                    </p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 lg:gap-12">

<div className="flex flex-col h-full">
<div className="aspect-square flex overflow-hidden shrink-0 bg-slate-50 w-full bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6c583ab4-d878-4149-a50b-baf8bdef73a5_800w.jpg)] bg-cover bg-center border-slate-200 border rounded-2xl mb-5 items-center justify-center">
</div>
<div className="flex flex-col items-center text-center mb-3">
<h3 className="text-lg font-semibold tracking-tight text-slate-900 font-sans">Dra. Magdalena Valverde Gómez</h3>
<p className="text-base text-slate-600 font-sans mt-1">Psiquiatra Infanto-Juvenil</p>
<p className="text-sm font-medium text-[#153a6e] font-sans mt-1.5">Fundadora &amp; CEO · Phenun</p>
</div>
<p className="text-sm text-slate-600 font-sans leading-relaxed text-justify">Especialista en neurodesarrollo, diagnóstico temprano del TEA e IA aplicada a salud mental.</p>
</div>

<div className="flex flex-col h-full">
<div className="aspect-square flex overflow-hidden bg-white w-full border-slate-200 border rounded-2xl mb-5 items-center justify-center shrink-0">
<img alt="Lic. Luciana Piloni" className="object-top w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/aea96a56-3658-4f62-b84b-9dbe205009e4_800w.jpg"/>
</div>
<div className="flex flex-col items-center text-center mb-3">
<h3 className="text-lg font-semibold tracking-tight text-slate-900 font-sans">Lic. Luciana Piloni</h3>
<p className="text-base text-slate-600 font-sans mt-1">Biotecnóloga</p>
<p className="text-sm font-medium text-[#153a6e] font-sans mt-1.5">Co-fundadora · Phenun</p>
</div>
<p className="text-sm text-slate-600 font-sans leading-relaxed text-justify">Especialista en análisis de datos biomédicos e IA aplicada a salud.</p>
</div>

<div className="flex flex-col h-full">
<div className="aspect-square flex overflow-hidden bg-center shrink-0 bg-slate-50 w-full bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/075a8412-b01b-464a-8380-1c985609cf8d_800w.jpg)] bg-cover border-slate-200 border rounded-2xl mb-5 items-center justify-center">
</div>
<div className="flex flex-col items-center text-center mb-3">
<h3 className="text-lg font-semibold tracking-tight text-slate-900 font-sans">Marc Ferrer Riera</h3>
<p className="text-base text-slate-600 font-sans mt-1">Ingeniería en Inteligencia Artificial</p>
<p className="text-sm font-medium text-[#153a6e] font-sans mt-1.5">Co-fundador · Phenun</p>
</div>
<p className="text-sm text-slate-600 font-sans leading-relaxed text-justify">Desarrollo de modelos predictivos y arquitectura tecnológica para sistemas clínicos.</p>
</div>
</div>
</div>
</section>

<section className="overflow-hidden border-slate-100 border-t pt-24 pb-24 relative" id="join">

<div className="absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/32883a8f-31ab-428d-9f70-0800ce09da04_3840w.png)]"></div>

<div className="absolute inset-0 -z-10 bg-white/70"></div>
<div className="mx-auto max-w-6xl px-6 lg:px-8 relative z-10">
<div className="grid gap-16 lg:grid-cols-2">
<div className="flex flex-col">
<h2 className="text-balance sm:text-4xl text-3xl font-semibold text-[#153a6e] tracking-tight font-sans">
                            Colabora con Phenun
                        </h2>
<p className="text-lg text-slate-600 font-sans mt-6">
                            Trabajamos con profesionales, instituciones, investigadores y familias interesadas en mejorar la evaluación del neurodesarrollo mediante herramientas basadas en evidencia e IA explicable.
                        </p>
</div>
<div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
<form action="https://formspree.io/f/xgoldwzw" className="space-y-8" method="POST">

<fieldset className="">
<legend className="text-base font-medium text-slate-900 mb-4 font-sans">Selecciona tu perfil</legend>
<div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
<label className="relative cursor-pointer">
<input className="peer sr-only" name="profile" type="radio" value="professional"/>
<div className="rounded-lg border border-slate-200 px-4 py-3 text-center text-base hover:bg-slate-50 peer-checked:border-[#153a6e] peer-checked:bg-blue-50/50 peer-checked:text-[#153a6e] peer-checked:ring-1 peer-checked:ring-[#153a6e] transition-all font-sans">
                                            Profesional de salud mental
                                        </div>
</label>
<label className="relative cursor-pointer">
<input className="peer sr-only" name="profile" type="radio" value="institution"/>
<div className="rounded-lg border border-slate-200 px-4 py-3 text-center text-base hover:bg-slate-50 peer-checked:border-[#153a6e] peer-checked:bg-blue-50/50 peer-checked:text-[#153a6e] peer-checked:ring-1 peer-checked:ring-[#153a6e] transition-all font-sans">
                                            Institución / Hospital
                                        </div>
</label>
<label className="relative cursor-pointer">
<input className="peer sr-only" name="profile" type="radio" value="researcher"/>
<div className="rounded-lg border border-slate-200 px-4 py-3 text-center text-base hover:bg-slate-50 peer-checked:border-[#153a6e] peer-checked:bg-blue-50/50 peer-checked:text-[#153a6e] peer-checked:ring-1 peer-checked:ring-[#153a6e] transition-all font-sans">
                                            Colaborador de investigación
                                        </div>
</label>
<label className="relative cursor-pointer">
<input className="peer sr-only" name="profile" type="radio" value="family"/>
<div className="rounded-lg border border-slate-200 px-4 py-3 text-center text-base hover:bg-slate-50 peer-checked:border-[#153a6e] peer-checked:bg-blue-50/50 peer-checked:text-[#153a6e] peer-checked:ring-1 peer-checked:ring-[#153a6e] transition-all font-sans">
                                            Familia / Cuidador
                                        </div>
</label>
</div>
</fieldset>

<fieldset className="">
<legend className="text-base font-medium text-slate-900 mb-4 font-sans">Tipo de interés</legend>
<div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
<label className="relative cursor-pointer">
<input className="peer sr-only" name="interest" type="radio" value="pilot"/>
<div className="rounded-lg border border-slate-200 px-4 py-3 text-center text-base hover:bg-slate-50 peer-checked:border-slate-900 peer-checked:bg-slate-50 peer-checked:text-slate-900 peer-checked:ring-1 peer-checked:ring-slate-900 transition-all font-sans">
                                            Participar en el piloto
                                        </div>
</label>
<label className="relative cursor-pointer">
<input className="peer sr-only" name="interest" type="radio" value="demo"/>
<div className="rounded-lg border border-slate-200 px-4 py-3 text-center text-base hover:bg-slate-50 peer-checked:border-slate-900 peer-checked:bg-slate-50 peer-checked:text-slate-900 peer-checked:ring-1 peer-checked:ring-slate-900 transition-all font-sans">
                                            Solicitar demostración
                                        </div>
</label>
<label className="relative cursor-pointer">
<input className="peer sr-only" name="interest" type="radio" value="updates"/>
<div className="rounded-lg border border-slate-200 px-4 py-3 text-center text-base hover:bg-slate-50 peer-checked:border-slate-900 peer-checked:bg-slate-50 peer-checked:text-slate-900 peer-checked:ring-1 peer-checked:ring-slate-900 transition-all font-sans">
                                            Recibir actualizaciones
                                        </div>
</label>
</div>
</fieldset>

<div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
<div className="space-y-2">
<label className="block text-base font-medium text-slate-900 font-sans" htmlFor="name">Nombre</label>
<input className="block w-full rounded-md border border-slate-200 px-4 py-2.5 text-base text-slate-900 placeholder:text-slate-400 focus:border-[#153a6e] focus:outline-none focus:ring-1 focus:ring-[#153a6e] bg-white transition-colors" id="name" name="name" placeholder="Dra. Ana Pérez" type="text"/>
</div>
<div className="space-y-2">
<label className="block text-base font-medium text-slate-900 font-sans" htmlFor="email">Correo electrónico</label>
<input className="block w-full rounded-md border border-slate-200 px-4 py-2.5 text-base text-slate-900 placeholder:text-slate-400 focus:border-[#153a6e] focus:outline-none focus:ring-1 focus:ring-[#153a6e] bg-white transition-colors" id="email" name="email" placeholder="ana.perez@hospital.org" type="email"/>
</div>
<div className="space-y-2">
<label className="block text-base font-medium text-slate-900 font-sans" htmlFor="institution">Institución / Centro</label>
<input className="block w-full rounded-md border border-slate-200 px-4 py-2.5 text-base text-slate-900 placeholder:text-slate-400 focus:border-[#153a6e] focus:outline-none focus:ring-1 focus:ring-[#153a6e] bg-white transition-colors" id="institution" name="institution" placeholder="Hospital General" type="text"/>
</div>
<div className="space-y-2">
<label className="block text-base font-medium text-slate-900 font-sans" htmlFor="role">Cargo / Relación</label>
<input className="block w-full rounded-md border border-slate-200 px-4 py-2.5 text-base text-slate-900 placeholder:text-slate-400 focus:border-[#153a6e] focus:outline-none focus:ring-1 focus:ring-[#153a6e] bg-white transition-colors" id="role" name="role" placeholder="Psiquiatra Infantil" type="text"/>
</div>
</div>
<div className="space-y-2">
<label className="block text-base font-medium text-slate-900 font-sans" htmlFor="message">Mensaje <span className="text-slate-400 font-normal font-sans">(opcional)</span></label>
<textarea className="block w-full rounded-md border border-slate-200 px-4 py-2.5 text-base text-slate-900 placeholder:text-slate-400 focus:border-[#153a6e] focus:outline-none focus:ring-1 focus:ring-[#153a6e] bg-white transition-colors resize-none" id="message" name="message" rows="3"></textarea>
</div>
<input name="_subject" type="hidden" value="Nueva solicitud — Phenun Landing"/>
<button className="transition-colors hover:bg-[#0f2a52] flex text-base font-medium text-white font-sans bg-[#153a6e] w-full rounded-lg pt-3.5 pr-4 pb-3.5 pl-4 shadow-sm gap-x-2 gap-y-2 items-center justify-center" type="submit">
                                Enviar solicitud
                                <i className="h-4 w-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
<p className="text-xs text-slate-500 text-center font-sans">
                                Al enviar, aceptas nuestra política de privacidad con respecto al manejo de los datos de contacto.
                            </p>
</form>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-white border-slate-100 border-t pt-12 pb-12">
<div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 sm:flex-row lg:px-8">
<div className="flex items-center gap-2">
<span className="select-none text-xl font-medium text-slate-400 tracking-[0.2em]" style={{fontFamily: '\'Garet\', sans-serif'}}>Phenun</span>
</div>
<p className="text-sm text-slate-500 font-sans">© 2026 Phenun. IA ética para el apoyo clínico.</p>
<div className="flex gap-6 text-sm font-medium text-slate-500">
<a className="hover:text-slate-900 transition-colors font-sans" href="#">Privacidad</a>
<a className="hover:text-slate-900 transition-colors font-sans" href="#">Términos</a>
<a className="hover:text-slate-900 transition-colors font-sans" href="#">Comité de Ética</a>
</div>
</div>
</footer>


    </>
  );
}
