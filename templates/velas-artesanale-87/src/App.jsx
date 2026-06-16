import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // 1. Contador regresivo
        let totalSeconds = 3 * 3600 + 45 * 60 + 12; // 3h 45m 12s
        const countdownElement = document.getElementById('countdown');
        
        setInterval(() => {
            if (totalSeconds <= 0) return;
            totalSeconds--;
            const h = Math.floor(totalSeconds / 3600).toString().padStart(2, '0');
            const m = Math.floor((totalSeconds % 3600) / 60).toString().padStart(2, '0');
            const s = (totalSeconds % 60).toString().padStart(2, '0');
            countdownElement.textContent = `${h}:${m}:${s}`;
        }, 1000);

        // 2. Animación de revelado al hacer scroll (Intersection Observer)
        const revealElements = document.querySelectorAll('.reveal');
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    // Opcional: dejar de observar una vez que aparece
                    revealObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1, // Se activa cuando el 10% del elemento es visible
            rootMargin: "0px 0px -50px 0px"
        });

        revealElements.forEach(el => revealObserver.observe(el));

        // 3. CTA Flotante inferior (Aparece después del Hero)
        const stickyCta = document.getElementById('sticky-cta');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 600) {
                stickyCta.classList.add('show');
            } else {
                stickyCta.classList.remove('show');
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="bg-primary text-white text-xs sm:text-sm font-medium py-3 px-4 flex items-center justify-center gap-3 tracking-wide sticky top-0 z-50 shadow-md">
<div className="relative flex h-3 w-3">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
<span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
</div>
<span className="">Oferta especial termina en:</span>
<span className="font-bold tracking-widest bg-white/20 px-2 py-0.5 rounded-md backdrop-blur-sm" id="countdown">03:45:12</span>
</div>


<header className="lg:py-20 grid lg:grid-cols-2 lg:gap-20 overflow-hidden max-w-6xl mr-auto ml-auto pt-6 pr-6 pb-20 pl-6 gap-x-12 gap-y-12 items-center">
<div className="space-y-8 relative z-10 reveal is-visible">
<span className="inline-block text-xs font-semibold tracking-widest text-primary uppercase border border-primary/20 bg-primary/5 px-4 py-2 rounded-full shadow-sm">
                ¿Buscas libertad financiera desde casa?
            </span>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold tracking-tight leading-[1.15] text-balance">
                Convierte la Cera en <span className="text-gold italic font-medium pr-1 relative inline-block">
                    Oro
                    <svg className="absolute w-full h-3 -bottom-1 left-0 text-gold/40" preserveaspectratio="none" viewbox="0 0 100 10"><path className="" d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="2"></path></svg>
</span> con el Negocio de las Velas
            </h1>
<p className="text-base md:text-lg opacity-80 leading-relaxed max-w-lg text-pretty">
                Descubre el método paso a paso para crear velas de lujo que se venden como pan caliente, sin necesidad de experiencia previa ni costosas herramientas.
            </p>
<div className="pt-4 space-y-4">
<a className="btn-pulse flex items-center justify-center w-full sm:w-[90%] bg-primary text-white text-base md:text-lg font-medium py-4 px-8 rounded-2xl hover:bg-[#a66a42] hover:scale-[1.02] transition-all duration-300 shadow-xl shadow-primary/30 group" href="#precio">
                    ¡SÍ, QUIERO EMPEZAR MI NEGOCIO!
                    <iconify-icon className="ml-2 text-xl group-hover:translate-x-2 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<div className="flex items-center justify-center sm:justify-start gap-6 text-xs font-medium opacity-60 ml-2">
<span className="flex items-center gap-1.5"><iconify-icon className="text-base" icon="solar:lock-password-linear"></iconify-icon> Pago Seguro</span>
<span className="flex items-center gap-1.5"><iconify-icon className="text-base" icon="solar:bolt-linear"></iconify-icon> Acceso Instantáneo</span>
</div>
</div>
</div>
<div className="relative reveal reveal-delay-2 h-full flex items-center justify-center is-visible">

<div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-gold/10 rounded-[3rem] transform translate-x-6 translate-y-6 -z-10 floating-reverse blur-sm"></div>
<div className="absolute top-1/4 -left-10 w-32 h-32 bg-gold/20 rounded-full blur-3xl"></div>
<div className="relative w-full floating">
<img alt="Velas Artesanales de Soja" className="w-full h-auto aspect-[4/5] object-cover rounded-[2.5rem] shadow-2xl shadow-[#5c3e2e]/20 border border-white/60" src="https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>

<div className="absolute -bottom-6 -left-6 md:-left-12 glass-panel p-4 rounded-2xl shadow-xl flex items-center gap-4 hover:-translate-y-2 transition-transform duration-300 cursor-default">
<div className="flex -space-x-3">
<img alt="Avatar" className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;q=80&amp;w=100"/>
<img alt="Avatar" className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=crop&amp;q=80&amp;w=100"/>
<div className="w-10 h-10 rounded-full border-2 border-white bg-warm flex items-center justify-center text-[10px] font-semibold text-primary">+2k</div>
</div>
<div>
<div className="flex text-gold text-xs"><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon></div>
<p className="text-xs font-semibold tracking-tight mt-0.5">Alumnas activas</p>
</div>
</div>
</div>
</div>
</header>

<section className="border-y border-subtle bg-white/40 backdrop-blur-sm py-20 relative overflow-hidden">

<div className="absolute top-0 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"></div>
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-white p-6 rounded-3xl border border-subtle shadow-sm flex flex-col justify-between space-y-4 hover:-translate-y-2 hover:shadow-xl hover:border-primary/30 transition-all duration-300 cursor-default group reveal">
<div className="flex text-gold text-sm group-hover:scale-105 origin-left transition-transform"><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon></div>
<p className="text-sm opacity-80 leading-relaxed italic flex-grow">"Nunca pensé que podría hacer velas tan hermosas. Este ebook me guió paso a paso y ahora tengo mi propio negocio. ¡Las mejores $10 que he invertido!"</p>
<div className="flex items-center gap-3 pt-2">
<div className="w-8 h-8 rounded-full bg-warm text-primary flex items-center justify-center text-xs font-medium border border-subtle group-hover:bg-primary group-hover:text-white transition-colors">MG</div>
<div>
<p className="text-xs font-semibold">María García</p>
<p className="text-[10px] opacity-60 uppercase tracking-widest">Emprendedora</p>
</div>
</div>
</div>

<div className="bg-white p-6 rounded-3xl border border-subtle shadow-sm flex flex-col justify-between space-y-4 hover:-translate-y-2 hover:shadow-xl hover:border-primary/30 transition-all duration-300 cursor-default group reveal reveal-delay-1">
<div className="flex text-gold text-sm group-hover:scale-105 origin-left transition-transform"><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon></div>
<p className="text-sm opacity-80 leading-relaxed italic flex-grow">"Empecé como hobby y ahora vendo velas a mis vecinos. Las explicaciones son muy claras, incluso para alguien sin experiencia como yo."</p>
<div className="flex items-center gap-3 pt-2">
<div className="w-8 h-8 rounded-full bg-warm text-primary flex items-center justify-center text-xs font-medium border border-subtle group-hover:bg-primary group-hover:text-white transition-colors">CM</div>
<div>
<p className="text-xs font-semibold">Carolina Méndez</p>
<p className="text-[10px] opacity-60 uppercase tracking-widest">Mamá creativa</p>
</div>
</div>
</div>

<div className="bg-white p-6 rounded-3xl border border-subtle shadow-sm flex flex-col justify-between space-y-4 hover:-translate-y-2 hover:shadow-xl hover:border-primary/30 transition-all duration-300 cursor-default group reveal reveal-delay-2">
<div className="flex text-gold text-sm group-hover:scale-105 origin-left transition-transform"><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon></div>
<p className="text-sm opacity-80 leading-relaxed italic flex-grow">"La calidad del contenido es increíble. Los bonos valen oro, especialmente la guía de moldes de silicona. Mis velas quedan profesionales."</p>
<div className="flex items-center gap-3 pt-2">
<div className="w-8 h-8 rounded-full bg-warm text-primary flex items-center justify-center text-xs font-medium border border-subtle group-hover:bg-primary group-hover:text-white transition-colors">AL</div>
<div>
<p className="text-xs font-semibold">Andrea López</p>
<p className="text-[10px] opacity-60 uppercase tracking-widest">Diseñadora</p>
</div>
</div>
</div>

<div className="bg-white p-6 rounded-3xl border border-subtle shadow-sm flex flex-col justify-between space-y-4 hover:-translate-y-2 hover:shadow-xl hover:border-primary/30 transition-all duration-300 cursor-default group reveal reveal-delay-3">
<div className="flex text-gold text-sm group-hover:scale-105 origin-left transition-transform"><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon></div>
<p className="text-sm opacity-80 leading-relaxed italic flex-grow">"Buscaba un ingreso extra y encontré mi pasión. El módulo de aromaterapia cambió mi perspectiva sobre las velas aromáticas."</p>
<div className="flex items-center gap-3 pt-2">
<div className="w-8 h-8 rounded-full bg-warm text-primary flex items-center justify-center text-xs font-medium border border-subtle group-hover:bg-primary group-hover:text-white transition-colors">VR</div>
<div>
<p className="text-xs font-semibold">Valentina Ruiz</p>
<p className="text-[10px] opacity-60 uppercase tracking-widest">Estudiante</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-warm/50 relative">
<div className="max-w-4xl mx-auto px-6 relative z-10">
<h2 className="text-3xl md:text-4xl font-serif font-semibold text-center tracking-tight mb-16 reveal">Este programa es para ti si...</h2>
<div className="grid sm:grid-cols-2 gap-4 lg:gap-6">
<div className="bg-white p-8 rounded-[2rem] border border-subtle shadow-sm hover:shadow-xl hover:border-primary/20 hover:-translate-y-1 transition-all duration-300 group reveal">
<div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300 group-hover:rotate-6">
<iconify-icon className="text-3xl" icon="solar:heart-linear"></iconify-icon>
</div>
<p className="text-base font-medium opacity-90 leading-relaxed">Eres amante de las manualidades y quieres monetizar tu pasión paso a paso.</p>
</div>
<div className="bg-white p-8 rounded-[2rem] border border-subtle shadow-sm hover:shadow-xl hover:border-primary/20 hover:-translate-y-1 transition-all duration-300 group reveal reveal-delay-1">
<div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300 group-hover:-rotate-6">
<iconify-icon className="text-3xl" icon="solar:home-smile-linear"></iconify-icon>
</div>
<p className="text-base font-medium opacity-90 leading-relaxed">Eres madre y buscas un ingreso extra constante sin descuidar a tu familia.</p>
</div>
<div className="bg-white p-8 rounded-[2rem] border border-subtle shadow-sm hover:shadow-xl hover:border-primary/20 hover:-translate-y-1 transition-all duration-300 group reveal">
<div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300 group-hover:rotate-6">
<iconify-icon className="text-3xl" icon="solar:chart-square-linear"></iconify-icon>
</div>
<p className="text-base font-medium opacity-90 leading-relaxed">Quieres emprender un negocio altamente rentable con muy baja inversión inicial.</p>
</div>
<div className="bg-white p-8 rounded-[2rem] border border-subtle shadow-sm hover:shadow-xl hover:border-primary/20 hover:-translate-y-1 transition-all duration-300 group reveal reveal-delay-1">
<div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300 group-hover:-rotate-6">
<iconify-icon className="text-3xl" icon="solar:magic-stick-3-linear"></iconify-icon>
</div>
<p className="text-base font-medium opacity-90 leading-relaxed">Buscas una actividad terapéutica que además te dé beneficios económicos.</p>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-3xl mx-auto px-6">
<div className="text-center mb-16 reveal">
<h2 className="text-3xl md:text-4xl font-serif font-semibold tracking-tight mb-4">¿Qué vas a lograr?</h2>
<p className="text-base opacity-70 inline-flex items-center gap-2 bg-black/5 px-4 py-1.5 rounded-full">
<span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span> Contenido 100% Práctico
            </p>
</div>
<div className="space-y-3 reveal">
<details className="group bg-white rounded-2xl border border-subtle overflow-hidden">
<summary className="md:text-lg flex group-hover:bg-warm/50 transition-colors select-none text-base font-medium bg-white px-6 py-6 items-center justify-between">
<span className="flex items-center gap-4"><span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary text-sm font-semibold tracking-widest group-open:bg-primary group-open:text-white transition-colors">01</span> Fundamentos de elaboración</span>
<iconify-icon className="text-xl opacity-50 group-open:rotate-180 transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 pt-2 text-sm opacity-70 border-t border-subtle/50 mx-6 mt-2">
                    Aprende la ciencia detrás de las velas, tipos de ceras, temperaturas exactas y todo lo que necesitas saber antes de derretir tu primer gramo de cera.
                </div>
</details>
<details className="group bg-white rounded-2xl border border-subtle overflow-hidden">
<summary className="p-6 font-medium text-base md:text-lg flex justify-between items-center bg-white group-hover:bg-warm/50 transition-colors select-none">
<span className="flex items-center gap-4"><span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary text-sm font-semibold tracking-widest group-open:bg-primary group-open:text-white transition-colors">02</span> Herramientas esenciales</span>
<iconify-icon className="text-xl opacity-50 group-open:rotate-180 transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 pt-2 text-sm opacity-70 border-t border-subtle/50 mx-6 mt-2">
                    Conoce el equipo mínimo viable para empezar sin gastar de más. Dónde comprar y cómo elegir materiales de alta calidad.
                </div>
</details>
<details className="group bg-white rounded-2xl border border-subtle overflow-hidden">
<summary className="p-6 font-medium text-base md:text-lg flex justify-between items-center bg-white group-hover:bg-warm/50 transition-colors select-none">
<span className="flex items-center gap-4"><span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary text-sm font-semibold tracking-widest group-open:bg-primary group-open:text-white transition-colors">03</span> Técnicas para principiantes</span>
<iconify-icon className="text-xl opacity-50 group-open:rotate-180 transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 pt-2 text-sm opacity-70 border-t border-subtle/50 mx-6 mt-2">
                    Tu primera vela paso a paso. Medición, derretido seguro, preparación del pabilo y el vertido perfecto para evitar errores comunes.
                </div>
</details>
<details className="group bg-white rounded-2xl border border-subtle overflow-hidden">
<summary className="p-6 font-medium text-base md:text-lg flex justify-between items-center bg-white group-hover:bg-warm/50 transition-colors select-none">
<span className="flex items-center gap-4"><span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary text-sm font-semibold tracking-widest group-open:bg-primary group-open:text-white transition-colors">04</span> Velas aromáticas top</span>
<iconify-icon className="text-xl opacity-50 group-open:rotate-180 transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 pt-2 text-sm opacity-70 border-t border-subtle/50 mx-6 mt-2">
                    El secreto de un aroma duradero. Cálculos de fragancia, temperaturas de mezclado y cómo lograr que tu vela huela increíble incluso apagada.
                </div>
</details>
<details className="group bg-white rounded-2xl border border-subtle overflow-hidden">
<summary className="p-6 font-medium text-base md:text-lg flex justify-between items-center bg-white group-hover:bg-warm/50 transition-colors select-none">
<span className="flex items-center gap-4"><span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary text-sm font-semibold tracking-widest group-open:bg-primary group-open:text-white transition-colors">05</span> Decoración creativa</span>
<iconify-icon className="text-xl opacity-50 group-open:rotate-180 transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 pt-2 text-sm opacity-70 border-t border-subtle/50 mx-6 mt-2">
                    Uso de colorantes, técnicas de marmoleado, inclusión de elementos botánicos y diseño en capas para velas que parecen obras de arte.
                </div>
</details>
<details className="group bg-white rounded-2xl border border-subtle overflow-hidden">
<summary className="p-6 font-medium text-base md:text-lg flex justify-between items-center bg-white group-hover:bg-warm/50 transition-colors select-none">
<span className="flex items-center gap-4"><span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary text-sm font-semibold tracking-widest group-open:bg-primary group-open:text-white transition-colors">06</span> Solución de problemas</span>
<iconify-icon className="text-xl opacity-50 group-open:rotate-180 transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 pt-2 text-sm opacity-70 border-t border-subtle/50 mx-6 mt-2">
                    Guía de resolución de problemas: túneles, hundimientos, manchas blancas (frosting) y cómo rescatar materiales para no perder dinero.
                </div>
</details>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-6xl mr-auto ml-auto pr-6 pl-6">
<h2 className="text-3xl md:text-4xl font-serif font-semibold text-center tracking-tight mb-16 reveal">Regalos
            Invaluables
            <span className="block text-xl md:text-2xl opacity-60 font-medium mt-2 font-sans">(Solo si te inscribes HOY)</span>
</h2>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-warm/30 rounded-[2rem] border border-subtle overflow-hidden group hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 reveal">
<div className="aspect-video overflow-hidden relative">
<img alt="Catálogo de Ideas" className="group-hover:scale-110 transition-transform duration-700 w-full h-full object-cover" src="https://images.unsplash.com/photo-1602924300300-d8868662cd72?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<span className="font-medium text-white border-white/30 border rounded-full pt-2 pr-6 pb-2 pl-6 backdrop-blur-sm">
        Se incluye gratis hoy
    </span>
</div>
<div className="p-8 relative bg-white group-hover:-translate-y-2 transition-transform duration-300 rounded-b-[2rem]">
<div className="flex items-center justify-between mb-4">
<span className="text-xs font-semibold tracking-widest text-primary uppercase">Bono 1</span>
<span className="bg-[hsl(var(--accent))] text-white text-[10px] uppercase tracking-widest px-3 py-1 rounded-full font-medium shadow-sm animate-pulse">GRATIS</span>
</div>
<h3 className="text-xl font-serif font-semibold mb-3">Catálogo de 40 Ideas</h3>
<p className="text-sm opacity-80 leading-relaxed mb-6">Inspiración visual con los diseños que más se
                        venden
                        en el mercado actual.</p>
<div className="text-xs font-medium opacity-50 line-through">Valorado en $17.00</div>
</div>
</div>

<div className="bg-warm/30 rounded-[2rem] border border-subtle overflow-hidden group hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 reveal reveal-delay-1">
<div className="aspect-video overflow-hidden relative">
<img alt="Moldes de Silicona" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1616656447817-217835824e2e?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
<span className="text-white font-medium border border-white/30 px-6 py-2 rounded-full backdrop-blur-sm">Se incluye gratis hoy</span>
</div>
</div>
<div className="p-8 relative bg-white group-hover:-translate-y-2 transition-transform duration-300 rounded-b-[2rem]">
<div className="flex items-center justify-between mb-4">
<span className="text-xs font-semibold tracking-widest text-primary uppercase">Bono 2</span>
<span className="bg-[hsl(var(--accent))] text-white text-[10px] uppercase tracking-widest px-3 py-1 rounded-full font-medium shadow-sm animate-pulse">GRATIS</span>
</div>
<h3 className="text-xl font-serif font-semibold mb-3">Moldes de Silicona</h3>
<p className="text-sm opacity-80 leading-relaxed mb-6">Aprende a crear tus propios moldes para no
                        depender
                        nunca de las tiendas.</p>
<div className="text-xs font-medium opacity-50 line-through">Valorado en $25.00</div>
</div>
</div>

<div className="bg-warm/30 rounded-[2rem] border border-subtle overflow-hidden group hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 reveal reveal-delay-2">
<div className="aspect-video overflow-hidden relative">
<img alt="Guía de Aromaterapia" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1596433809252-260c2745fdce?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<img alt="Velas encendidas" className="" src="https://img.freepik.com/foto-gratis/angulo-alto-velas-encendidas-cuerda-conos-pino_23-2148720016.jpg?semt=ais_hybrid&amp;w=740&amp;q=80" style={{maxWidth: '400px'}}/>
</div>
<div className="p-8 relative bg-white group-hover:-translate-y-2 transition-transform duration-300 rounded-b-[2rem]">
<div className="flex items-center justify-between mb-4">
<span className="text-xs font-semibold tracking-widest text-primary uppercase">Bono 3</span>
<span className="bg-[hsl(var(--accent))] text-white text-[10px] uppercase tracking-widest px-3 py-1 rounded-full font-medium shadow-sm animate-pulse">GRATIS</span>
</div>
<h3 className="text-xl font-serif font-semibold mb-3">Guía de Aromaterapia</h3>
<p className="text-sm opacity-80 leading-relaxed mb-6">Fórmulas y mezclas de esencias infalibles para
                        crear
                        sensaciones únicas.</p>
<div className="text-xs font-medium opacity-50 line-through">Valorado en $12.00</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-5xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-serif font-semibold text-center tracking-tight mb-16 reveal">Por qué este método es diferente</h2>
<div className="grid md:grid-cols-2 gap-6 lg:gap-10">

<div className="bg-[hsl(var(--red-bg))] border border-[hsl(var(--red-border))] rounded-[2rem] p-8 md:p-10 space-y-6 hover:-translate-y-1 transition-transform duration-300 reveal">
<div className="text-sm font-semibold tracking-widest uppercase text-[hsl(var(--red-text))] mb-8 flex items-center gap-2">
<iconify-icon className="text-xl" icon="solar:close-circle-linear"></iconify-icon> Otros métodos
                </div>
<ul className="space-y-6">
<li className="flex items-start gap-4 text-[hsl(var(--red-text))] opacity-80">
<iconify-icon className="text-xl shrink-0 mt-0.5" icon="solar:close-square-linear"></iconify-icon>
<span className="text-sm md:text-base font-medium">Explicaciones confusas</span>
</li>
<li className="flex items-start gap-4 text-[hsl(var(--red-text))] opacity-80">
<iconify-icon className="text-xl shrink-0 mt-0.5" icon="solar:close-square-linear"></iconify-icon>
<span className="text-sm md:text-base font-medium">Materiales caros e innecesarios</span>
</li>
<li className="flex items-start gap-4 text-[hsl(var(--red-text))] opacity-80">
<iconify-icon className="text-xl shrink-0 mt-0.5" icon="solar:close-square-linear"></iconify-icon>
<span className="text-sm md:text-base font-medium">Velas que se hunden o no huelen</span>
</li>
<li className="flex items-start gap-4 text-[hsl(var(--red-text))] opacity-80">
<iconify-icon className="text-xl shrink-0 mt-0.5" icon="solar:close-square-linear"></iconify-icon>
<span className="text-sm md:text-base font-medium">Sin orientación de negocio</span>
</li>
</ul>
</div>

<div className="bg-[hsl(var(--green-bg))] border border-[hsl(var(--green-border))] rounded-[2rem] p-8 md:p-10 space-y-6 relative overflow-hidden shadow-xl shadow-[hsl(var(--green-bg))]/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[hsl(var(--green-bg))]/80 transition-all duration-300 group reveal reveal-delay-1">
<div className="absolute top-0 right-0 w-32 h-32 bg-white/40 rounded-full blur-3xl -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-700"></div>
<div className="text-sm font-semibold tracking-widest uppercase text-[hsl(var(--green-text))] mb-8 flex items-center gap-2 relative z-10">
<iconify-icon className="text-xl" icon="solar:check-circle-linear"></iconify-icon> Nuestra Masterclass
                </div>
<ul className="space-y-6 relative z-10">
<li className="flex items-start gap-4 text-[hsl(var(--green-text))] hover:translate-x-2 transition-transform">
<iconify-icon className="text-xl shrink-0 mt-0.5 text-[hsl(var(--primary))]" icon="solar:check-square-linear"></iconify-icon>
<span className="text-sm md:text-base font-medium">Paso a paso desde cero absoluto</span>
</li>
<li className="flex items-start gap-4 text-[hsl(var(--green-text))] hover:translate-x-2 transition-transform delay-75">
<iconify-icon className="text-xl shrink-0 mt-0.5 text-[hsl(var(--primary))]" icon="solar:check-square-linear"></iconify-icon>
<span className="text-sm md:text-base font-medium">Trucos para ahorrar en insumos</span>
</li>
<li className="flex items-start gap-4 text-[hsl(var(--green-text))] hover:translate-x-2 transition-transform delay-100">
<iconify-icon className="text-xl shrink-0 mt-0.5 text-[hsl(var(--primary))]" icon="solar:check-square-linear"></iconify-icon>
<span className="text-sm md:text-base font-medium">Acabados de lujo garantizados</span>
</li>
<li className="flex items-start gap-4 text-[hsl(var(--green-text))] hover:translate-x-2 transition-transform delay-150">
<iconify-icon className="text-xl shrink-0 mt-0.5 text-[hsl(var(--primary))]" icon="solar:check-square-linear"></iconify-icon>
<span className="text-sm md:text-base font-medium">Enfoque empresarial para ventas</span>
</li>
</ul>
</div>
</div>
</section>

<section className="py-24 bg-gradient-to-b from-transparent to-warm/80 text-center px-6 relative" id="precio">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg h-full bg-primary/5 rounded-full blur-3xl -z-10 animate-pulse"></div>
<div className="max-w-3xl mx-auto reveal">
<h2 className="text-4xl md:text-5xl font-serif font-semibold tracking-tight mb-8">Empieza HOY tu camino hacia la Libertad</h2>
<div className="mb-10 flex flex-col items-center justify-center relative">
<span className="text-xl opacity-40 line-through font-medium mb-2">$47.00 USD</span>
<div className="relative inline-flex items-start justify-center group cursor-default">
<div className="absolute -inset-4 bg-primary/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<span className="text-4xl mt-3 mr-1 text-primary relative z-10">$</span>
<span className="text-7xl md:text-8xl font-serif font-semibold text-primary tracking-tighter relative z-10">7</span>
<span className="text-2xl uppercase mt-auto mb-3 ml-2 tracking-widest font-sans font-medium opacity-60 text-primary relative z-10">USD</span>
</div>
</div>
<a className="btn-pulse inline-flex items-center justify-center w-full max-w-md bg-primary text-white text-lg font-medium py-5 px-8 rounded-2xl hover:bg-[#a66a42] hover:scale-105 transition-all duration-300 shadow-xl shadow-primary/40 mb-6 group" href="https://pay.hotmart.com/K103081177K?checkoutMode=10">
                OBTENER ACCESO INMEDIATO
                <iconify-icon className="ml-3 text-2xl group-hover:rotate-12 transition-transform" icon="solar:cart-large-2-linear"></iconify-icon>
</a>
<div className="space-y-4">
<p className="text-sm font-medium opacity-80 flex items-center justify-center gap-2">
<iconify-icon icon="solar:infinity-linear"></iconify-icon> Acceso de por vida <span className="opacity-30">•</span> Actualizaciones gratuitas
                </p>
<div className="flex items-center justify-center gap-4 opacity-50 pt-4 hover:opacity-100 transition-opacity duration-300">
<iconify-icon className="text-3xl hover:-translate-y-1 transition-transform" icon="solar:card-linear"></iconify-icon>
<iconify-icon className="text-3xl hover:-translate-y-1 transition-transform delay-75" icon="solar:wallet-linear"></iconify-icon>
<iconify-icon className="text-3xl hover:-translate-y-1 transition-transform delay-100" icon="solar:shop-linear"></iconify-icon>
</div>
</div>
</div>
</section>

<footer className="border-t border-subtle bg-white py-12 px-6 text-center text-xs opacity-60">
<div className="max-w-4xl mx-auto space-y-6">
<p>© Copyright 2026. Velas Artesanales Academy. Todos los derechos reservados.</p>
<p className="max-w-2xl mx-auto leading-relaxed">
                Este sitio no es parte del sitio web de Facebook o Facebook Inc. Además, este sitio NO está respaldado por Facebook de ninguna manera. FACEBOOK es una marca comercial de FACEBOOK, Inc.
            </p>
</div>
</footer>

<div className="fixed bottom-6 left-0 right-0 flex justify-center z-50 pointer-events-none px-4" id="sticky-cta">
<a className="pointer-events-auto flex items-center gap-3 bg-white/90 backdrop-blur-md border border-primary/20 text-primary px-6 py-3 rounded-full shadow-2xl hover:bg-primary hover:text-white transition-all duration-300 hover:scale-105" href="#precio">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
</span>
<span className="font-medium text-sm tracking-wide">¡Quiero mi descuento del 85%!</span>
</a>
</div>



    </>
  );
}
