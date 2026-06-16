import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        function toggleFaq(button) {
            var content = button.nextElementSibling;
            var icon = button.querySelector('iconify-icon');
            document.querySelectorAll('.accordion-content').forEach(function(el) {
                if (el !== content) {
                    el.classList.remove('open');
                    var otherIcon = el.previousElementSibling.querySelector('iconify-icon');
                    if (otherIcon) otherIcon.style.transform = 'rotate(0deg)';
                }
            });
            content.classList.toggle('open');
            icon.style.transform = content.classList.contains('open') ? 'rotate(180deg)' : 'rotate(0deg)';
        }

        // Intersection Observer for scroll animations and counters
        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                threshold: 0.1,
                rootMargin: "0px 0px -50px 0px"
            };

            const animateCounters = (counters) => {
                counters.forEach(counter => {
                    const updateCount = () => {
                        const target = +counter.getAttribute('data-target');
                        const count = +counter.innerText;
                        const speed = 200;
                        const inc = target / speed;

                        if (count < target) {
                            counter.innerText = Math.ceil(count + inc);
                            setTimeout(updateCount, 15);
                        } else {
                            counter.innerText = target;
                        }
                    };
                    updateCount();
                    counter.classList.remove('counter-value');
                });
            };

            const fadeObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        
                        const counters = entry.target.querySelectorAll('.counter-value');
                        if(counters.length > 0) {
                            animateCounters(counters);
                        } else if (entry.target.classList.contains('counter-value')) {
                             animateCounters([entry.target]);
                        }
                        
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.js-fade-up').forEach(el => {
                fadeObserver.observe(el);
            });
        });
    


        hbspt.forms.create({
            portalId: "47448125",
            formId: "cad870f9-a4e0-4abe-8c6a-ee6aad4ee16d",
            region: "na1",
            target: "#hubspot-form-wrapper"
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 inset-x-0 z-50 bg-[#0B1020]/80 backdrop-blur-md border-b border-white/10 h-20">
<div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
<a className="block shrink-0" href="https://blueprintt.co/">
<img alt="Blueprintt" className="h-6" src="https://blueprintt.co/wp-content/uploads/2025/01/logo-header-light.svg"/>
</a>
<nav className="hidden lg:flex items-center gap-8">
<a className="text-sm font-semibold tracking-tight text-white/70 hover:text-white transition-colors" href="#por-que">Por qué</a>
<a className="text-sm font-semibold tracking-tight text-white/70 hover:text-white transition-colors" href="#quien-asiste">Quién asiste</a>
<a className="text-sm font-semibold tracking-tight text-white/70 hover:text-white transition-colors" href="#experiencia">Experiencia</a>
<a className="text-sm font-semibold tracking-tight text-white/70 hover:text-white transition-colors" href="#faq">FAQ</a>
</nav>
<a className="hidden md:inline-flex items-center justify-center bg-[#2563EB] hover:bg-[#5A8BFF] text-white text-sm font-semibold py-2.5 px-6 rounded-[14px] transition-all duration-300 shadow-[0_0_15px_rgba(37,99,235,0.2)] hover:shadow-[0_0_20px_rgba(90,139,255,0.4)]" href="#registro">
                Recibir la agenda en primicia
            </a>
</div>
</header>

<div className="md:hidden fixed bottom-6 inset-x-6 z-50">
</div>

<section className="relative min-h-screen flex flex-col justify-center pt-32 pb-24 overflow-hidden bg-[#0F1424]">
<div className="absolute inset-0 z-0 overflow-hidden">
<img alt="" className="w-full h-full object-cover blur-[10px] scale-110 opacity-40" src="https://blueprintt.co/wp-content/uploads/2025/11/PMO-2025-410A2182.png"/>
<div className="absolute inset-0 bg-gradient-to-b from-[#0F1424]/80 via-[#0F1424]/70 to-[#0F1424] mix-blend-multiply">
</div>
</div>
<div className="absolute inset-0 opacity-[0.04] z-0" style={{backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '32px 32px'}}></div>
<div className="absolute top-1/4 -left-64 w-[500px] h-[500px] bg-[#2563EB] rounded-full blur-[120px] opacity-20 z-0">
</div>
<div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#5A8BFF] rounded-full blur-[150px] opacity-10 z-0">
</div>
<div className="relative z-10 max-w-5xl mx-auto px-6 flex flex-col items-center text-center">
<img alt="PMO Summit" className="md:h-20 fade-in-up h-16 object-cover mb-10" src="https://paginas.blueprintt.co/wp-content/uploads/2026/03/Group-1321314987.png?w=800&amp;q=80"/>
<span className="text-xs font-semibold tracking-[0.12em] uppercase text-[#5A8BFF] mb-4 fade-in-up delay-100">PMO Summit</span>
<h1 className="md:text-5xl lg:text-6xl leading-[1.1] fade-in-up delay-100 text-4xl font-semibold text-white tracking-tight max-w-4xl mb-6">PMO Summit Andean America</h1>
<h2 className="text-xl md:text-2xl font-semibold text-white/90 mb-5 tracking-tight fade-in-up delay-200 max-w-3xl">
                El encuentro de líderes en gestión de proyectos de la región
            </h2>
<p className="text-base md:text-lg text-[#F7FAFF]/70 max-w-2xl mb-10 fade-in-up delay-200 leading-relaxed">
                La primera edición del congreso que reúne a líderes de PMO, Project Managers y ejecutivos de
                transformación para discutir el futuro de la gestión de proyectos en América Latina.
            </p>
<div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2 mb-12 fade-in-up delay-300">
<span className="flex h-2 w-2 rounded-full bg-[#5A8BFF] animate-pulse"></span>
<span className="text-xs md:text-sm font-semibold text-white/90">Edición 2026 • Sede y fecha por confirmar</span>
</div>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto fade-in-up delay-300">
<a className="w-full sm:w-auto inline-flex justify-center items-center bg-[#2563EB] hover:bg-[#5A8BFF] text-white text-base font-semibold py-4 px-8 rounded-[16px] transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(90,139,255,0.5)] hover:-translate-y-0.5" href="#registro">
                    Recibir la agenda en primicia
                </a>
<a className="w-full sm:w-auto inline-flex justify-center items-center bg-[#0B1020]/50 backdrop-blur-md border border-white/20 hover:bg-white/10 text-white text-base font-semibold py-4 px-8 rounded-[16px] transition-all duration-300" href="#registro">
                    Unirme a la lista prioritaria
                </a>
</div>
<div className="flex items-center gap-2 text-xs text-white/50 mt-8 fade-in-up delay-300">
<iconify-icon className="text-sm" icon="solar:lock-password-linear"></iconify-icon>
<span>Datos protegidos. Sin compromiso de compra.</span>
</div>
</div>
</section>

<section className="overflow-hidden text-[#0B1220] bg-white border-[#0F1424]/5 border-t pt-16 pb-16">
<div className="max-w-7xl mx-auto px-6 mb-10 text-center">
<h2 className="text-xl md:text-2xl font-semibold tracking-tight">Empresas que ya estuvieron con nosotros</h2>
<p className="text-sm text-[#475569] max-w-2xl mx-auto mt-3 leading-relaxed">
                Líderes de organizaciones globales ya participan en nuestras conferencias en Brasil. Ahora llevamos esta
                experiencia a la región Andina.
            </p>
</div>
<div className="overflow-hidden flex w-full pt-4 pb-4 relative">
<div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none">
</div>
<div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none">
</div>
<div className="marquee-container">
<div className="flex items-center gap-12 md:gap-20 shrink-0 pr-12 md:pr-20">
<img alt="BASF" className="w-[150px] md:w-[254px] h-[45px] md:h-[76px] object-contain" src="https://paginas.blueprintt.co/wp-content/uploads/2026/03/logo-empresas-participantes-BASF-1.webp"/>
<img alt="Logo 2" className="w-[150px] md:w-[254px] h-[45px] md:h-[76px] object-contain" src="https://paginas.blueprintt.co/wp-content/uploads/2026/03/144.png.webp"/>
<img alt="Logo 3" className="w-[150px] md:w-[254px] h-[45px] md:h-[76px] object-contain" src="https://paginas.blueprintt.co/wp-content/uploads/2026/03/141.png.webp"/>
<img alt="Vale" className="w-[150px] md:w-[254px] h-[45px] md:h-[76px] object-contain" src="https://paginas.blueprintt.co/wp-content/uploads/2026/03/logo-empresas-participantes-VALE-1.webp"/>
<img alt="Logo 5" className="w-[150px] md:w-[254px] h-[45px] md:h-[76px] object-contain" src="https://paginas.blueprintt.co/wp-content/uploads/2026/03/143.png.webp"/>
<img alt="Logo 6" className="w-[150px] md:w-[254px] h-[45px] md:h-[76px] object-contain" src="https://paginas.blueprintt.co/wp-content/uploads/2026/03/142.png.webp"/>
</div>
<div className="flex items-center gap-12 md:gap-20 shrink-0 pr-12 md:pr-20">
<img alt="BASF" className="w-[150px] md:w-[254px] h-[45px] md:h-[76px] object-contain" src="https://paginas.blueprintt.co/wp-content/uploads/2026/03/logo-empresas-participantes-BASF-1.webp"/>
<img alt="Logo 2" className="w-[150px] md:w-[254px] h-[45px] md:h-[76px] object-contain" src="https://paginas.blueprintt.co/wp-content/uploads/2026/03/144.png.webp"/>
<img alt="Logo 3" className="w-[150px] md:w-[254px] h-[45px] md:h-[76px] object-contain" src="https://paginas.blueprintt.co/wp-content/uploads/2026/03/141.png.webp"/>
<img alt="Vale" className="w-[150px] md:w-[254px] h-[45px] md:h-[76px] object-contain" src="https://paginas.blueprintt.co/wp-content/uploads/2026/03/logo-empresas-participantes-VALE-1.webp"/>
<img alt="Logo 5" className="w-[150px] md:w-[254px] h-[45px] md:h-[76px] object-contain" src="https://paginas.blueprintt.co/wp-content/uploads/2026/03/143.png.webp"/>
<img alt="Logo 6" className="w-[150px] md:w-[254px] h-[45px] md:h-[76px] object-contain" src="https://paginas.blueprintt.co/wp-content/uploads/2026/03/142.png.webp"/>
</div>
</div>
</div>
<p className="text-xs text-[#475569]/60 text-center mt-8 px-6">Selección de empresas participantes en ediciones
            anteriores en Brasil.</p>
</section>

<section className="relative bg-white text-[#0B1220] py-24 md:py-32" id="por-que">
<div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'radial-gradient(#0B1220 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>
<div className="relative z-10 max-w-7xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-5 text-[#0B1020]">
                    Los desafíos que están redefiniendo el rol de los PMO en la región
                </h2>
<p className="text-base md:text-lg text-[#475569] leading-relaxed">
                    Conversaciones estratégicas sobre lo que ya está impactando la ejecución, la gobernanza y el valor
                    del portafolio.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="group bg-[#F7FAFF] rounded-[16px] p-8 border border-[#0F1424]/5 hover:border-[#2563EB]/30 hover:shadow-[0_8px_30px_rgba(37,99,235,0.06)] hover:-translate-y-1 transition-all duration-300">
<iconify-icon className="text-3xl text-[#2563EB] mb-5 group-hover:scale-110 transition-transform duration-300" icon="solar:rocket-linear"></iconify-icon>
<h3 className="text-lg font-semibold tracking-tight mb-3">Transformación digital con ejecución real</h3>
<p className="text-sm text-[#475569] leading-relaxed">Cómo convertir estrategia en entregables medibles,
                        sin perder control ni velocidad.</p>
</div>
<div className="group bg-[#F7FAFF] rounded-[16px] p-8 border border-[#0F1424]/5 hover:border-[#2563EB]/30 hover:shadow-[0_8px_30px_rgba(37,99,235,0.06)] hover:-translate-y-1 transition-all duration-300">
<iconify-icon className="text-3xl text-[#2563EB] mb-5 group-hover:scale-110 transition-transform duration-300" icon="solar:cpu-linear"></iconify-icon>
<h3 className="text-lg font-semibold tracking-tight mb-3">Inteligencia artificial aplicada a proyectos
                    </h3>
<p className="text-sm text-[#475569] leading-relaxed">De automatización a decisiones. IA como ventaja
                        operativa y predictiva en PMO.</p>
</div>
<div className="group bg-[#F7FAFF] rounded-[16px] p-8 border border-[#0F1424]/5 hover:border-[#2563EB]/30 hover:shadow-[0_8px_30px_rgba(37,99,235,0.06)] hover:-translate-y-1 transition-all duration-300">
<iconify-icon className="text-3xl text-[#2563EB] mb-5 group-hover:scale-110 transition-transform duration-300" icon="solar:chart-2-linear"></iconify-icon>
<h3 className="text-lg font-semibold tracking-tight mb-3">Gobernanza y priorización compleja</h3>
<p className="text-sm text-[#475569] leading-relaxed">Criterios claros para decidir, cortar y proteger
                        estrictamente lo que genera valor.</p>
</div>
<div className="group bg-[#F7FAFF] rounded-[16px] p-8 border border-[#0F1424]/5 hover:border-[#2563EB]/30 hover:shadow-[0_8px_30px_rgba(37,99,235,0.06)] hover:-translate-y-1 transition-all duration-300">
<iconify-icon className="text-3xl text-[#2563EB] mb-5 group-hover:scale-110 transition-transform duration-300" icon="solar:shield-warning-linear"></iconify-icon>
<h3 className="text-lg font-semibold tracking-tight mb-3">Cambios regulatorios y riesgo</h3>
<p className="text-sm text-[#475569] leading-relaxed">Cómo estructurar riesgo, compliance y trazabilidad
                        sin agregar burocracia.</p>
</div>
<div className="group bg-[#F7FAFF] rounded-[16px] p-8 border border-[#0F1424]/5 hover:border-[#2563EB]/30 hover:shadow-[0_8px_30px_rgba(37,99,235,0.06)] hover:-translate-y-1 transition-all duration-300">
<iconify-icon className="text-3xl text-[#2563EB] mb-5 group-hover:scale-110 transition-transform duration-300" icon="solar:buildings-2-linear"></iconify-icon>
<h3 className="text-lg font-semibold tracking-tight mb-3">Infraestructura, energía y minería</h3>
<p className="text-sm text-[#475569] leading-relaxed">Programas críticos bajo presión que exigen
                        coordinación, cadencia y accountability.</p>
</div>
<div className="group bg-[#F7FAFF] rounded-[16px] p-8 border border-[#0F1424]/5 hover:border-[#2563EB]/30 hover:shadow-[0_8px_30px_rgba(37,99,235,0.06)] hover:-translate-y-1 transition-all duration-300">
<iconify-icon className="text-3xl text-[#2563EB] mb-5 group-hover:scale-110 transition-transform duration-300" icon="solar:star-fall-linear"></iconify-icon>
<h3 className="text-lg font-semibold tracking-tight mb-3">PMO estratégica y generación de valor</h3>
<p className="text-sm text-[#475569] leading-relaxed">Posicionar el PMO como motor de performance
                        ejecutiva, no como área operativa.</p>
</div>
</div>
</div>
</section>

<section className="bg-white py-24 md:py-32 border-t border-[#0F1424]/5 relative">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

<div className="relative w-full aspect-[4/5] lg:aspect-[4/4.5] rounded-[32px] overflow-hidden shadow-[0_20px_40px_rgba(11,16,32,0.06)] js-fade-up order-1 lg:order-none bg-[#F8FAFC] lg:sticky lg:top-28 z-10">
<img alt="PMO Summit Latin America" className="w-full h-full object-cover animate-subtle-pan" src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>

<div className="absolute inset-0 bg-gradient-to-tr from-[#0B1020]/20 to-transparent mix-blend-multiply pointer-events-none"></div>
</div>

<div className="flex flex-col gap-10 order-2 lg:order-none">
<div className="space-y-6">
<h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-[#0B1020] leading-[1.15] js-fade-up" style={{transitionDelay: '100ms'}}>
                            El escenario que consolidó al PMO en Brasil y conectó esta conversación con el mundo
                        </h2>
<div className="space-y-5 text-base text-[#475569] leading-relaxed">
<p className="js-fade-up" style={{transitionDelay: '200ms'}}>
                                Con una trayectoria construida en Brasil, PMO Summit se ha consolidado como un encuentro de referencia para líderes que entienden que la gestión de proyectos ya no ocupa un rol periférico dentro de las organizaciones. Aquí, el PMO gana visibilidad, voz y relevancia estratégica.
                            </p>
<p className="js-fade-up" style={{transitionDelay: '300ms'}}>
                                Al reunir ejecutivos de grandes empresas, especialistas reconocidos y referentes internacionales, el evento ha creado con el tiempo un espacio excepcional: un entorno donde la experiencia brasileña se encuentra con visiones globales, donde las prácticas probadas dialogan con las tendencias emergentes y donde el futuro del área se debate con profundidad, aplicación y contexto.
                            </p>
<p className="js-fade-up" style={{transitionDelay: '400ms'}}>
                                Esa trayectoria es lo que hace tan singular a PMO Summit. No se trata solo de contar con grandes ponentes o reunir nombres destacados. Se trata de construir, edición tras edición, una comunidad de líderes que ayuda a reposicionar al PMO como motor de transformación, influencia organizacional y generación de valor.
                            </p>
</div>
</div>

<ul className="space-y-4 pt-6 border-t border-[#0F1424]/5">
<li className="flex items-start gap-3 js-fade-up" style={{transitionDelay: '500ms'}}>
<iconify-icon className="text-xl text-[#2563EB] shrink-0 mt-0.5" icon="solar:verified-check-linear"></iconify-icon>
<span className="text-base text-[#0B1020] font-medium">Trayectoria consolidada en Brasil</span>
</li>
<li className="flex items-start gap-3 js-fade-up" style={{transitionDelay: '550ms'}}>
<iconify-icon className="text-xl text-[#2563EB] shrink-0 mt-0.5" icon="solar:verified-check-linear"></iconify-icon>
<span className="text-base text-[#0B1020] font-medium">Presencia de líderes y ponentes de alcance global</span>
</li>
<li className="flex items-start gap-3 js-fade-up" style={{transitionDelay: '600ms'}}>
<iconify-icon className="text-xl text-[#2563EB] shrink-0 mt-0.5" icon="solar:verified-check-linear"></iconify-icon>
<span className="text-base text-[#0B1020] font-medium">Conexión entre práctica local y visión internacional</span>
</li>
<li className="flex items-start gap-3 js-fade-up" style={{transitionDelay: '650ms'}}>
<iconify-icon className="text-xl text-[#2563EB] shrink-0 mt-0.5" icon="solar:verified-check-linear"></iconify-icon>
<span className="text-base text-[#0B1020] font-medium">Contenido estratégico con aplicación real</span>
</li>
<li className="flex items-start gap-3 js-fade-up" style={{transitionDelay: '700ms'}}>
<iconify-icon className="text-xl text-[#2563EB] shrink-0 mt-0.5" icon="solar:verified-check-linear"></iconify-icon>
<span className="text-base text-[#0B1020] font-medium">Networking calificado entre pares y decisores</span>
</li>
</ul>

<div className="grid grid-cols-2 gap-x-6 gap-y-8 pt-8 border-t border-[#0F1424]/5 js-fade-up" style={{transitionDelay: '800ms'}}>
<div>
<div className="flex items-baseline gap-0.5">
<span className="text-2xl md:text-3xl font-semibold text-[#2563EB]">+</span>
<span className="text-4xl md:text-5xl font-semibold tracking-tight text-[#0B1020] counter-value" data-target="10">0</span>
<span className="text-2xl md:text-3xl font-semibold text-[#0B1020]">K</span>
</div>
<p className="text-sm font-medium text-[#475569] mt-2">Líderes conectados</p>
</div>
<div>
<div className="flex items-baseline gap-0.5">
<span className="text-2xl md:text-3xl font-semibold text-[#2563EB]">+</span>
<span className="text-4xl md:text-5xl font-semibold tracking-tight text-[#0B1020] counter-value" data-target="50">0</span>
</div>
<p className="text-sm font-medium text-[#475569] mt-2">Líderes de grandes industrias</p>
</div>
<div>
<div className="flex items-baseline gap-0.5">
<span className="text-2xl md:text-3xl font-semibold text-[#2563EB]">+</span>
<span className="text-4xl md:text-5xl font-semibold tracking-tight text-[#0B1020] counter-value" data-target="100">0</span>
<span className="text-2xl md:text-3xl font-semibold text-[#0B1020]">K</span>
</div>
<p className="text-sm font-medium text-[#475569] mt-2">Ejecutivos impactados</p>
</div>
<div>
<div className="flex items-baseline gap-0.5">
<span className="text-2xl md:text-3xl font-semibold text-[#2563EB]">+</span>
<span className="text-4xl md:text-5xl font-semibold tracking-tight text-[#0B1020] counter-value" data-target="50">0</span>
</div>
<p className="text-sm font-medium text-[#475569] mt-2">Conferencias por año</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#F7FAFF] text-[#0B1220] py-24 md:py-32">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#0B1020] mb-4">¿Qué hace única a esta
                    conferencia?</h2>
<p className="text-base text-[#475569] max-w-2xl leading-relaxed">Conocimiento accionable, conexiones
                    relevantes y un entorno exclusivo para transform desafíos en resultados tangibles.</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
<div className="lg:col-span-7 flex flex-col gap-4">
<div className="group flex gap-5 bg-white p-6 rounded-[16px] border border-[#0F1424]/5 hover:border-[#2563EB]/20 transition-colors">
<div className="shrink-0 pt-1"><iconify-icon className="text-2xl text-[#2563EB] group-hover:rotate-6 transition-transform" icon="solar:verified-check-linear"></iconify-icon>
</div>
<div>
<h4 className="text-base font-semibold tracking-tight mb-1 text-[#0B1020]">Imparcialidad y
                                credibilidad garantizadas</h4>
<p className="text-sm text-[#475569] leading-relaxed">Blueprintt no vende consultorías ni
                                soluciones. Contenido imparcial y enfocado cien por ciento en prácticas reales.</p>
</div>
</div>
<div className="group flex gap-5 bg-white p-6 rounded-[16px] border border-[#0F1424]/5 hover:border-[#2563EB]/20 transition-colors">
<div className="shrink-0 pt-1"><iconify-icon className="text-2xl text-[#2563EB] group-hover:rotate-6 transition-transform" icon="solar:clipboard-list-linear"></iconify-icon>
</div>
<div>
<h4 className="text-base font-semibold tracking-tight mb-1 text-[#0B1020]">Programa estratégico
                                alineado a necesidades</h4>
<p className="text-sm text-[#475569] leading-relaxed">Programa construido meticulosamente con
                                insights directos del mercado y de líderes en activo.</p>
</div>
</div>
<div className="group flex gap-5 bg-white p-6 rounded-[16px] border border-[#0F1424]/5 hover:border-[#2563EB]/20 transition-colors">
<div className="shrink-0 pt-1"><iconify-icon className="text-2xl text-[#2563EB] group-hover:rotate-6 transition-transform" icon="solar:lightbulb-bolt-linear"></iconify-icon>
</div>
<div>
<h4 className="text-base font-semibold tracking-tight mb-1 text-[#0B1020]">Foco en conocimiento
                                accionable</h4>
<p className="text-sm text-[#475569] leading-relaxed">Sesiones libres de discursos comerciales,
                                priorizando metodologías, casos de estudio y tácticas aplicables.</p>
</div>
</div>
<div className="group flex gap-5 bg-white p-6 rounded-[16px] border border-[#0F1424]/5 hover:border-[#2563EB]/20 transition-colors">
<div className="shrink-0 pt-1"><iconify-icon className="text-2xl text-[#2563EB] group-hover:rotate-6 transition-transform" icon="solar:users-group-two-rounded-linear"></iconify-icon>
</div>
<div>
<h4 className="text-base font-semibold tracking-tight mb-1 text-[#0B1020]">Entorno exclusivo
                                para alto valor</h4>
<p className="text-sm text-[#475569] leading-relaxed">Cupos limitados y un público rigurosamente
                                calificado para asegurar networking de nivel ejecutivo.</p>
</div>
</div>
<div className="group flex gap-5 bg-white p-6 rounded-[16px] border border-[#0F1424]/5 hover:border-[#2563EB]/20 transition-colors">
<div className="shrink-0 pt-1"><iconify-icon className="text-2xl text-[#2563EB] group-hover:rotate-6 transition-transform" icon="solar:microphone-3-linear"></iconify-icon>
</div>
<div>
<h4 className="text-base font-semibold tracking-tight mb-1 text-[#0B1020]">Interacción directa y
                                micrófono abierto</h4>
<p className="text-sm text-[#475569] leading-relaxed">Formatos dinámicos e interactivos
                                diseñados para validar estrategias con pares y acelerar decisiones.</p>
</div>
</div>
</div>
<div className="lg:col-span-5 relative lg:sticky lg:top-32">
<div className="bg-[#0B1020] text-white rounded-[24px] p-8 md:p-10 shadow-[0_20px_40px_rgba(11,16,32,0.15)] overflow-hidden relative">
<div className="absolute -top-20 -right-20 w-48 h-48 bg-[#2563EB] rounded-full blur-[60px] opacity-40">
</div>
<div className="absolute -bottom-20 -left-20 w-48 h-48 bg-[#5A8BFF] rounded-full blur-[60px] opacity-20">
</div>
<div className="relative z-10">
<iconify-icon className="text-4xl text-[#5A8BFF] mb-6" icon="solar:global-linear"></iconify-icon>
<h3 className="text-2xl font-semibold tracking-tight mb-4 leading-snug">Amplía tu networking más
                                allá del evento.</h3>
<p className="text-sm text-white/70 leading-relaxed mb-8">Conéctate con líderes que están
                                definiendo los estándares de ejecución estratégica en la región andina.</p>
<a className="inline-flex w-full justify-center items-center bg-white/10 hover:bg-white/20 border border-white/10 text-white text-sm font-semibold py-3.5 px-6 rounded-[14px] transition-all duration-300" href="#registro">
                                Asegurar mi lugar en la lista
                            </a>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#0B1020] py-24 md:py-32 overflow-hidden border-y border-white/10" id="experiencia">
<div className="max-w-7xl mx-auto px-6 mb-12 md:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
<div className="max-w-2xl">
<h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white mb-4">Así se vive un
                    evento Blueprintt</h2>
<p className="text-base text-[#F7FAFF]/70 leading-relaxed">Ambiente premium, conversaciones profundas y
                    conexiones que no pasan en eventos masivos.</p>
</div>
</div>
<div className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar pb-8 px-6 md:px-12 gap-6" style={{scrollPaddingLeft: '24px'}}>
<div className="relative w-[280px] md:w-[400px] shrink-0 aspect-[4/3] rounded-[16px] overflow-hidden snap-start group border border-white/10">
<img alt="Networking" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://blueprintt.co/wp-content/uploads/2025/11/PMO-2025-DSC01539.png?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0B1020]/90 via-[#0B1020]/20 to-transparent"></div>
<div className="absolute bottom-0 inset-x-0 p-6">
<h4 className="text-base font-semibold text-white tracking-tight">Networking curado</h4>
</div>
</div>
<div className="relative w-[280px] md:w-[400px] shrink-0 aspect-[4/3] rounded-[16px] overflow-hidden snap-start group border border-white/10">
<img alt="Sesiones" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://blueprintt.co/wp-content/uploads/2025/11/PMO-2025-410A3711.png?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0B1020]/90 via-[#0B1020]/20 to-transparent"></div>
<div className="absolute bottom-0 inset-x-0 p-6">
<h4 className="text-base font-semibold text-white tracking-tight">Sesiones estratégicas</h4>
</div>
</div>
<div className="relative w-[280px] md:w-[400px] shrink-0 aspect-[4/3] rounded-[16px] overflow-hidden snap-start group border border-white/10">
<img alt="Interacción" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://blueprintt.co/wp-content/uploads/2025/11/PMO-2025-410A4336.png?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0B1020]/90 via-[#0B1020]/20 to-transparent"></div>
<div className="absolute bottom-0 inset-x-0 p-6">
<h4 className="text-base font-semibold text-white tracking-tight">Interacción y micrófono abierto</h4>
</div>
</div>
<div className="relative w-[280px] md:w-[400px] shrink-0 aspect-[4/3] rounded-[16px] overflow-hidden snap-start group border border-white/10">
<img alt="Experiencia" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://blueprintt.co/wp-content/uploads/2025/11/PMO-2025-IMG_3163.png?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0B1020]/90 via-[#0B1020]/20 to-transparent"></div>
<div className="absolute bottom-0 inset-x-0 p-6">
<h4 className="text-base font-semibold text-white tracking-tight">Experiencia inmersiva</h4>
</div>
</div>
<div className="relative w-[280px] md:w-[400px] shrink-0 aspect-[4/3] rounded-[16px] overflow-hidden snap-start group border border-white/10">
<img alt="Conexiones" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0B1020]/90 via-[#0B1020]/20 to-transparent"></div>
<div className="absolute bottom-0 inset-x-0 p-6">
<h4 className="text-base font-semibold text-white tracking-tight">Conexiones post-evento</h4>
</div>
</div>
</div>
</section>

<section className="bg-white text-[#0B1220] py-24 md:py-32" id="quien-asiste">
<div className="max-w-5xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-[#0B1020] mb-5">
                    Conéctate con pares que están definiendo el futuro de la ejecución
                </h2>
<p className="text-base md:text-lg text-[#475569] leading-relaxed max-w-3xl mx-auto">
                    Ejecutivos, líderes y especialistas de grandes organizaciones, unidos por el objetivo de elevar el
                    nivel del PMO, validar estrategias y construir conexiones para el siguiente salto.
                </p>
</div>
<div className="grid md:grid-cols-2 gap-8 md:gap-12 bg-[#F7FAFF] rounded-[24px] p-8 md:p-12 border border-[#0F1424]/5">
<div>
<h3 className="text-sm font-semibold tracking-[0.12em] uppercase text-[#475569] mb-6">Perfiles
                        habituales</h3>
<ul className="space-y-4">
<li className="flex items-start gap-3"><iconify-icon className="text-[#22C55E] text-xl shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon><span className="text-base font-semibold text-[#0B1020]">Directores de PMO</span>
</li>
<li className="flex items-start gap-3"><iconify-icon className="text-[#22C55E] text-xl shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon><span className="text-base font-semibold text-[#0B1020]">Heads de Proyectos</span>
</li>
<li className="flex items-start gap-3"><iconify-icon className="text-[#22C55E] text-xl shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon><span className="text-base font-semibold text-[#0B1020]">Program Managers</span>
</li>
<li className="flex items-start gap-3"><iconify-icon className="text-[#22C55E] text-xl shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon><span className="text-base font-semibold text-[#0B1020]">Ejecutivos de Transformación</span>
</li>
<li className="flex items-start gap-3"><iconify-icon className="text-[#22C55E] text-xl shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon><span className="text-base font-semibold text-[#0B1020]">Líderes de Innovación</span>
</li>
<li className="flex items-start gap-3"><iconify-icon className="text-[#22C55E] text-xl shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon><span className="text-base font-semibold text-[#0B1020]">Líderes de Tecnología y Operaciones</span>
</li>
</ul>
</div>
<div>
<h3 className="text-sm font-semibold tracking-[0.12em] uppercase text-[#475569] mb-6">Áreas
                        representadas</h3>
<ul className="space-y-4">
<li className="flex items-start gap-3"><iconify-icon className="text-[#22C55E] text-xl shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon><span className="text-base font-semibold text-[#0B1020]">PMO / Portafolio / Programas</span>
</li>
<li className="flex items-start gap-3"><iconify-icon className="text-[#22C55E] text-xl shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon><span className="text-base font-semibold text-[#0B1020]">Transformación Digital</span>
</li>
<li className="flex items-start gap-3"><iconify-icon className="text-[#22C55E] text-xl shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon><span className="text-base font-semibold text-[#0B1020]">Gobernanza y Compliance</span>
</li>
<li className="flex items-start gap-3"><iconify-icon className="text-[#22C55E] text-xl shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon><span className="text-base font-semibold text-[#0B1020]">Operaciones y Performance</span>
</li>
<li className="flex items-start gap-3"><iconify-icon className="text-[#22C55E] text-xl shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon><span className="text-base font-semibold text-[#0B1020]">Estrategia y Planeación</span>
</li>
<li className="flex items-start gap-3"><iconify-icon className="text-[#22C55E] text-xl shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon><span className="text-base font-semibold text-[#0B1020]">Data y Business Intelligence</span>
</li>
</ul>
</div>
</div>
<div className="mt-12 text-center">
<a className="inline-flex justify-center items-center bg-[#2563EB] hover:bg-[#5A8BFF] text-white text-base font-semibold py-4 px-10 rounded-[16px] transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.2)] hover:shadow-[0_0_30px_rgba(90,139,255,0.4)]" href="#registro">
                    Quiero estar en la lista prioritaria
                </a>
</div>
</div>
</section>

<section className="bg-[#0F1424] text-white py-24 md:py-32" id="faq">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
<div className="lg:col-span-4 lg:sticky lg:top-32 text-center lg:text-left mb-4 lg:mb-0">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Preguntas frecuentes</h2>
<p className="text-base text-white/60 leading-relaxed max-w-lg mx-auto lg:mx-0">
                        Encuentra respuestas rápidas sobre la participación, los formatos y los próximos pasos del
                        evento.
                    </p>
</div>
<div className="lg:col-span-8 space-y-4">
<div className="border border-white/10 rounded-[16px] bg-[#0B1020] overflow-hidden">
<button className="faq-btn w-full flex items-center justify-between p-6 text-left focus:outline-none" onclick="toggleFaq(this)">
<span className="text-base font-semibold pr-4">¿Necesito ser parte de un PMO para participar?</span>
<iconify-icon className="text-xl text-white/50 transition-transform duration-300 shrink-0" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="accordion-content">
<div className="accordion-inner">
<p className="px-6 pb-6 text-sm text-white/60 leading-relaxed">No necesariamente. Es para
                                    líderes de proyectos, programas, portafolio y transformación. Si influyes en la
                                    ejecución estratégica y toma de decisiones, este encuentro es para ti.</p>
</div>
</div>
</div>
<div className="border border-white/10 rounded-[16px] bg-[#0B1020] overflow-hidden">
<button className="faq-btn w-full flex items-center justify-between p-6 text-left focus:outline-none" onclick="toggleFaq(this)">
<span className="text-base font-semibold pr-4">¿Cuándo y dónde será el PMO Summit América Andina?</span>
<iconify-icon className="text-xl text-white/50 transition-transform duration-300 shrink-0" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="accordion-content">
<div className="accordion-inner">
<p className="px-6 pb-6 text-sm text-white/60 leading-relaxed">Estamos finalizando detalles
                                    de sede y fecha en la región. Al registrarte en la lista prioritaria, recibirás la
                                    confirmación directamente en tu correo antes de cualquier divulgación pública.</p>
</div>
</div>
</div>
<div className="border border-white/10 rounded-[16px] bg-[#0B1020] overflow-hidden">
<button className="faq-btn w-full flex items-center justify-between p-6 text-left focus:outline-none" onclick="toggleFaq(this)">
<span className="text-base font-semibold pr-4">¿Cuándo tendré la agenda completa?</span>
<iconify-icon className="text-xl text-white/50 transition-transform duration-300 shrink-0" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="accordion-content">
<div className="accordion-inner">
<p className="px-6 pb-6 text-sm text-white/60 leading-relaxed">La programación se publicará
                                    por etapas conforme confirmemos ponentes. La lista prioritaria recibe la agenda en
                                    primicia antes que el público general.</p>
</div>
</div>
</div>
<div className="border border-white/10 rounded-[16px] bg-[#0B1020] overflow-hidden">
<button className="faq-btn w-full flex items-center justify-between p-6 text-left focus:outline-none" onclick="toggleFaq(this)">
<span className="text-base font-semibold pr-4">¿El evento será presencial, virtual o híbrido?</span>
<iconify-icon className="text-xl text-white/50 transition-transform duration-300 shrink-0" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="accordion-content">
<div className="accordion-inner">
<p className="px-6 pb-6 text-sm text-white/60 leading-relaxed">Estamos definiendo los
                                    formatos definitivos para asegurar la mejor experiencia. Te avisaremos primero para
                                    que elijas la modalidad ideal para ti.</p>
</div>
</div>
</div>
<div className="border border-white/10 rounded-[16px] bg-[#0B1020] overflow-hidden">
<button className="faq-btn w-full flex items-center justify-between p-6 text-left focus:outline-none" onclick="toggleFaq(this)">
<span className="text-base font-semibold pr-4">¿Cómo funciona la lista prioritaria?</span>
<iconify-icon className="text-xl text-white/50 transition-transform duration-300 shrink-0" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="accordion-content">
<div className="accordion-inner">
<p className="px-6 pb-6 text-sm text-white/60 leading-relaxed">Al dejar tus datos (sin
                                    compromiso), recibes novedades, fechas clave, condiciones de precio iniciales y la
                                    agenda mucho antes del lanzamiento oficial al mercado.</p>
</div>
</div>
</div>
<div className="border border-white/10 rounded-[16px] bg-[#0B1020] overflow-hidden">
<button className="faq-btn w-full flex items-center justify-between p-6 text-left focus:outline-none" onclick="toggleFaq(this)">
<span className="text-base font-semibold pr-4">¿Puedo participar con mi equipo?</span>
<iconify-icon className="text-xl text-white/50 transition-transform duration-300 shrink-0" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="accordion-content">
<div className="accordion-inner">
<p className="px-6 pb-6 text-sm text-white/60 leading-relaxed">Sí. Tendremos condiciones
                                    especiales para grupos corporativos cuando abramos las inscripciones oficiales.</p>
</div>
</div>
</div>
<div className="border border-white/10 rounded-[16px] bg-[#0B1020] overflow-hidden">
<button className="faq-btn w-full flex items-center justify-between p-6 text-left focus:outline-none" onclick="toggleFaq(this)">
<span className="text-base font-semibold pr-4">¿Blueprintt vende consultoría o soluciones durante el evento?</span>
<iconify-icon className="text-xl text-white/50 transition-transform duration-300 shrink-0" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="accordion-content">
<div className="accordion-inner">
<p className="px-6 pb-6 text-sm text-white/60 leading-relaxed">No. Nuestro modelo es
                                    puramente de conferencias B2B. El foco es contenido imparcial y prácticas
                                    aplicables, sin sesgos comerciales.</p>
</div>
</div>
</div>
<div className="border border-white/10 rounded-[16px] bg-[#0B1020] overflow-hidden">
<button className="faq-btn w-full flex items-center justify-between p-6 text-left focus:outline-none" onclick="toggleFaq(this)">
<span className="text-base font-semibold pr-4">¿Habrá certificado o documentación para aprobación interna?</span>
<iconify-icon className="text-xl text-white/50 transition-transform duration-300 shrink-0" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="accordion-content">
<div className="accordion-inner">
<p className="px-6 pb-6 text-sm text-white/60 leading-relaxed">Sí. Una vez definamos la
                                    agenda, compartiremos un dossier completo con información para justificar la
                                    inversión y apoyar la aprobación interna con tus directivos.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="md:py-32 scroll-mt-10 text-[#0B1220] bg-[#F7FAFF] border-[#0F1424]/10 border-t pt-24 pb-24" id="registro">
<div className="max-w-3xl mx-auto px-6">
<div className="text-center mb-10">
<h2 className="md:text-4xl lg:text-5xl text-3xl font-semibold text-[#0B1020] tracking-tight mb-4">
                    Recibe la agenda en primicia
                </h2>
<p className="text-base md:text-lg text-[#475569] leading-relaxed max-w-2xl mx-auto">
                    Regístrate sin costo para entrar en la lista prioritaria y recibir primero la fecha, la sede,
                    condiciones iniciales preferenciales y la agenda por etapas.
                </p>
</div>
<div className="bg-white rounded-[24px] shadow-[0_20px_40px_rgba(11,16,32,0.06)] border border-[#0F1424]/5 p-6 md:p-12 mx-auto max-w-[480px]">
<div className="flex items-center gap-2 text-xs font-semibold text-[#22C55E] mb-6 bg-[#22C55E]/10 px-3 py-1.5 rounded-md w-fit">
<iconify-icon icon="solar:shield-check-linear"></iconify-icon>
                    Registro seguro
                </div>
<div className="hbspt-form" data-hs-forms-root="true" id="hubspot-form-wrapper"><iframe className="hs-form-iframe" height="408" id="hs-form-iframe-0" scrolling="no" style={{position: 'static', border: 'medium', display: 'block', overflow: 'hidden', width: '100%', height: '408px'}} title="Form 0" width="100%"></iframe></div>
</div>
</div>
</section>

<footer className="md:py-16 bg-[#0B1020] border-white/10 border-t pt-12 pb-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col justify-center items-center gap-6 md:gap-8">
<a className="block shrink-0" href="https://blueprintt.co/">
<img alt="Blueprintt" className="h-6 opacity-80 hover:opacity-100 transition-opacity" src="https://blueprintt.co/wp-content/uploads/2025/01/logo-header-light.svg"/>
</a>
<div className="flex flex-wrap justify-center items-center gap-6 text-sm font-semibold text-white/50">
<a className="hover:text-white transition-colors" href="#">Términos y Condiciones</a>
<a className="hover:text-white transition-colors" href="#">Política de Privacidad</a>
</div>
<p className="text-sm font-semibold text-white/50 text-center">© 2026 Blueprintt. Todos los derechos reservados.
            </p>
</div>
</footer>






    </>
  );
}
