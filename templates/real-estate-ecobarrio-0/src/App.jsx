import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '26578324861783804');
fbq('track', 'PageView');



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded',()=>{
            const t=document.getElementById('carousel-track'),n=document.getElementById('next-btn'),p=document.getElementById('prev-btn');
            if(t&&n&&p){
                n.addEventListener('click',()=>t.scrollBy({left:window.innerWidth<768?t.clientWidth:t.clientWidth*0.7,behavior:'smooth'}));
                p.addEventListener('click',()=>t.scrollBy({left:window.innerWidth<768?-t.clientWidth:-t.clientWidth*0.7,behavior:'smooth'}));
            }
            
            document.querySelectorAll('.faq-button').forEach(b=>{
                b.addEventListener('click',()=>{
                    const i=b.closest('.faq-item'),a=i.querySelector('.faq-answer'),c=i.querySelector('.faq-icon'),o=a.style.gridTemplateRows==='1fr';
                    document.querySelectorAll('.faq-answer').forEach(x=>x.style.gridTemplateRows='0fr');
                    document.querySelectorAll('.faq-icon').forEach(x=>{x.style.transform='rotate(0deg)';x.classList.replace('text-cyan-400','text-slate-500');});
                    document.querySelectorAll('.faq-item').forEach(x=>{x.classList.remove('border-cyan-800','bg-slate-900/50');x.classList.add('border-slate-800','bg-slate-950');});
                    if(!o){a.style.gridTemplateRows='1fr';c.style.transform='rotate(180deg)';c.classList.replace('text-slate-500','text-cyan-400');i.classList.replace('border-slate-800','border-cyan-800');i.classList.replace('bg-slate-950','bg-slate-900/50');}
                });
            });

            const m=document.getElementById('btn-mensual'),c=document.getElementById('btn-contado'),pv=document.querySelectorAll('.price-val'),pp=document.querySelectorAll('.price-period'),fi=document.querySelectorAll('.financing-item');
            const tog=(mo)=>{
                if(mo){m.classList.add('bg-cyan-200','text-black','shadow-sm');m.classList.remove('text-slate-400','bg-transparent');c.classList.remove('bg-cyan-200','text-black','shadow-sm');c.classList.add('text-slate-400','bg-transparent');pv.forEach(e=>e.textContent=e.dataset.mensual);pp.forEach(e=>e.textContent='Gs / mes');fi.forEach(e=>e.classList.remove('hidden'));}
                else{c.classList.add('bg-cyan-200','text-black','shadow-sm');c.classList.remove('text-slate-400','bg-transparent');m.classList.remove('bg-cyan-200','text-black','shadow-sm');m.classList.add('text-slate-400','bg-transparent');pv.forEach(e=>e.textContent=e.dataset.contado);pp.forEach(e=>e.textContent='Gs total');fi.forEach(e=>e.classList.add('hidden'));}
            };
            if(m&&c){m.addEventListener('click',()=>tog(true));c.addEventListener('click',()=>tog(false));}

            const se=document.getElementById('sold-counter'),pb=document.getElementById('progress-bar');
            if(se&&pb){
                const ob=new IntersectionObserver((en)=>{
                    if(en[0].isIntersecting){
                        setTimeout(()=>pb.style.width='37.5%',200);
                        let st=null;
                        const stp=(ts)=>{
                            if(!st)st=ts;
                            const pr=Math.min((ts-st)/2500,1),ep=1-Math.pow(1-pr,4);
                            se.innerText=Math.floor(ep*39);
                            if(pr<1)window.requestAnimationFrame(stp);else se.innerText=39;
                        };
                        window.requestAnimationFrame(stp);ob.unobserve(en[0].target);
                    }
                });
                ob.observe(se);
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<noscript>
<img alt="pixel" decoding="async" height="1" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" style={{display: 'none'}} width="1"/>
</noscript>
<nav className="sm:px-12 flex z-50 w-full max-w-[1440px] mr-auto ml-auto pr-6 pl-6 absolute top-6 right-0 left-0 justify-center">
<a aria-label="Inicio" className="flex items-center transition-colors hover:bg-slate-100/10 bg-center w-20 h-10 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1987990b-9faf-4b90-bdb5-551a78aa6114_320w.png)] bg-cover border-0 rounded-none mt-5 mr-0 mb-5 ml-0 pt-2 pr-6 pb-2 pl-6 relative shadow-sm backdrop-blur-xl scale-150" href="/#"></a>
</nav>
<section className="sm:px-12 lg:px-24 overflow-hidden min-h-screen flex flex-col bg-slate-950 max-w-[1440px] mx-auto pt-28 px-6 pb-16 relative items-center justify-center">
<div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/20 via-slate-950 to-slate-950 pointer-events-none"></div>
<div className="flex flex-col gap-6 z-10 text-center w-full relative items-center">
<div className="inline-flex rounded-full backdrop-blur-md border shadow-sm bg-cyan-100/5 border-cyan-100/10 px-5 py-2 relative">
<span className="text-sm sm:text-base uppercase tracking-[0.15em] font-medium text-cyan-200">Nuevo Lanzamiento: EcoBarrio Rieles de Sapucai</span>
</div>
<div className="w-full max-w-5xl mx-auto aspect-video rounded-[2rem] overflow-hidden border shadow-2xl bg-slate-900 border-slate-800">
<iframe allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" className="w-full h-full" frameborder="0" src="https://player.vimeo.com/video/1185725389?autoplay=1&amp;loop=1&amp;muted=1&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;playsinline=1" title="EcoBarrio Rieles de Sapucai"></iframe>
</div>
<div className="mt-4 mb-2">
<a className="inline-flex items-center gap-3 transition-all hover:bg-cyan-100 hover:scale-105 hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] text-lg font-normal text-black bg-cyan-200 rounded-full py-3 pl-8 pr-3 shadow-[0_0_20px_rgba(34,211,238,0.3)]" href="#contacto">
                    Reservar mi lugar
                    <span className="flex items-center justify-center w-10 h-10 rounded-full bg-black text-cyan-100">
<iconify-icon icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5px'}} width="20"></iconify-icon>
</span>
</a>
</div>
<div className="w-full max-w-5xl mx-auto flex flex-col sm:flex-row gap-4 mt-2">
<div className="flex-1 rounded-[1.5rem] backdrop-blur-xl border p-6 shadow-xl relative group transition-colors duration-300 text-left bg-slate-900/50 border-slate-800 hover:bg-slate-900">
<div className="absolute top-6 right-6 group-hover:text-cyan-400 transition-colors text-slate-600">
<iconify-icon icon="solar:leaf-linear" style={{strokeWidth: '1.5px'}} width="28"></iconify-icon>
</div>
<div className="text-[2rem] leading-none font-normal tracking-tight mb-2 text-slate-100">325.000 Gs</div>
<p className="text-base font-light leading-snug pr-8 text-slate-400">Cuota mensual base. Plan de financiación directa a 130 meses.</p>
</div>
<div className="flex-1 rounded-[1.5rem] backdrop-blur-xl border p-6 shadow-xl relative group transition-colors duration-300 text-left bg-slate-900/50 border-slate-800 hover:bg-slate-900">
<div className="absolute top-6 right-6 group-hover:text-cyan-400 transition-colors text-slate-600">
<iconify-icon icon="solar:routing-2-linear" style={{strokeWidth: '1.5px'}} width="28"></iconify-icon>
</div>
<div className="text-[2rem] leading-none font-normal tracking-tight mb-2 text-slate-100">A 2 hs</div>
<p className="text-base font-light leading-snug pr-8 text-slate-400">de Asunción. Desconéctate en un entorno natural y seguro.</p>
</div>
</div>
</div>
</section>
<section className="bg-slate-900 border-slate-800 border-t py-16 md:py-20 overflow-hidden" id="concepto">
<div className="lg:px-8 max-w-6xl mx-auto px-6 space-y-12">
<div className="max-w-4xl space-y-4">
<h2 className="md:text-5xl text-4xl font-medium tracking-tight text-slate-100">El concepto del EcoBarrio</h2>
<div className="space-y-4 text-lg md:text-xl font-light leading-snug text-slate-300">
<p>Porque comprar un terreno, no se trata solo de elegir un buen lote. También es clave elegir DÓNDE vas a comprar, quiénes van a ser tus vecinos, la calidad constructiva o el objetivo que tienen con esa construcción (vivienda, casa de descanso o alquiler turístico).</p>
<p>Por eso, desde nuestro EcoBarrio Rieles de Sapucai apuntamos a desarrollar una comunidad de vecinos que apunten a lo mismo. Un barrio que valora el silencio y la naturaleza.</p>
</div>
</div>
<div className="relative w-full group py-4">
<button aria-label="Anterior" className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center bg-black/60 hover:bg-black/90 text-white rounded-full backdrop-blur border border-slate-700 transition-colors shadow-xl" id="prev-btn">
<iconify-icon icon="solar:alt-arrow-left-linear" style={{strokeWidth: '1.5px'}} width="24"></iconify-icon>
</button>
<div className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth hide-scrollbar pb-4" id="carousel-track">
<img alt="Portico de acceso Sapucai" className="snap-center w-[85vw] md:w-[40rem] h-[60vw] md:h-[28rem] object-cover border-slate-700 border rounded-3xl shrink-0 shadow-lg" decoding="async" loading="lazy" src="https://res.cloudinary.com/dytqmjola/image/upload/f_auto,q_auto/10741a1a-87ba-4a38-b905-4ab8587bb8c3_dzpdgh"/>
<img alt="Mirador Sapucai" className="snap-center w-[85vw] md:w-[40rem] h-[60vw] md:h-[28rem] object-cover border-slate-700 border rounded-3xl shrink-0 shadow-lg" decoding="async" loading="lazy" src="https://res.cloudinary.com/dytqmjola/image/upload/q_auto/f_auto/v1776969584/IMG_4181_l6ador.heic"/>
<img alt="Letrero Sapucai" className="snap-center w-[85vw] md:w-[40rem] h-[60vw] md:h-[28rem] object-cover border-slate-700 border rounded-3xl shrink-0 shadow-lg" decoding="async" loading="lazy" src="https://res.cloudinary.com/dytqmjola/image/upload/q_auto/f_auto/v1776969574/IMG_9704_f8rkfh.jpg"/>
<img alt="Foto aerea Loteamiento Sapucai" className="snap-center w-[85vw] md:w-[40rem] h-[60vw] md:h-[28rem] object-cover border-slate-700 border rounded-3xl shrink-0 shadow-lg" decoding="async" loading="lazy" src="https://res.cloudinary.com/dytqmjola/image/upload/q_auto/f_auto/v1776969578/DJI_20260304134210_0991_D-2_yxoups.jpg"/>
<img alt="Acceso al loteamiento de Sapucai" className="snap-center w-[85vw] md:w-[40rem] h-[60vw] md:h-[28rem] object-cover border-slate-700 border rounded-3xl shrink-0 shadow-lg" decoding="async" loading="lazy" src="https://res.cloudinary.com/dytqmjola/image/upload/q_auto/f_auto/v1776969576/IMG_3805_ql6pre.jpg"/>
<img alt="Vistas desde el Mirador de Sapucai" className="snap-center w-[85vw] md:w-[40rem] h-[60vw] md:h-[28rem] object-cover border-slate-700 border rounded-3xl shrink-0 shadow-lg" decoding="async" loading="lazy" src="https://res.cloudinary.com/dytqmjola/image/upload/q_auto/f_auto/v1776969572/IMG_4001_ensjme.jpg"/>
</div>
<button aria-label="Siguiente" className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center bg-black/60 hover:bg-black/90 text-white rounded-full backdrop-blur border border-slate-700 transition-colors shadow-xl" id="next-btn">
<iconify-icon icon="solar:alt-arrow-right-linear" style={{strokeWidth: '1.5px'}} width="24"></iconify-icon>
</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="transition-colors flex flex-col md:flex-row items-start md:items-center bg-slate-950 border-slate-800 border rounded-2xl p-5 gap-4 shadow-sm hover:border-slate-700">
<div className="w-12 h-12 shrink-0 rounded-xl flex items-center justify-center border bg-slate-900 border-slate-800">
<iconify-icon className="text-cyan-300" icon="solar:shield-check-linear" style={{strokeWidth: '1.5px'}} width="24"></iconify-icon>
</div>
<span className="text-lg font-normal text-slate-200">Portón de acceso seguro</span>
</div>
<div className="transition-colors flex flex-col md:flex-row items-start md:items-center bg-slate-950 border-slate-800 border rounded-2xl p-5 gap-4 shadow-sm hover:border-slate-700">
<div className="w-12 h-12 shrink-0 rounded-xl flex items-center justify-center border bg-slate-900 border-slate-800">
<iconify-icon className="text-cyan-300" icon="solar:telescope-linear" style={{strokeWidth: '1.5px'}} width="24"></iconify-icon>
</div>
<span className="text-lg font-normal text-slate-200">Mirador panorámico</span>
</div>
<div className="transition-colors flex flex-col md:flex-row items-start md:items-center bg-slate-950 border-slate-800 border rounded-2xl p-5 gap-4 shadow-sm hover:border-slate-700">
<div className="w-12 h-12 shrink-0 rounded-xl flex items-center justify-center border bg-slate-900 border-slate-800">
<iconify-icon className="text-cyan-300" icon="solar:moon-sleep-linear" style={{strokeWidth: '1.5px'}} width="24"></iconify-icon>
</div>
<span className="text-lg font-normal text-slate-200">Área exclusiva de camping</span>
</div>
<div className="transition-colors flex flex-col md:flex-row items-start md:items-center bg-slate-950 border-slate-800 border rounded-2xl p-5 gap-4 shadow-sm hover:border-slate-700">
<div className="w-12 h-12 shrink-0 rounded-xl flex items-center justify-center border bg-slate-900 border-slate-800">
<iconify-icon className="text-cyan-300" icon="solar:signpost-2-linear" style={{strokeWidth: '1.5px'}} width="24"></iconify-icon>
</div>
<span className="text-lg font-normal text-slate-200">Zona de senderismo natural</span>
</div>
<div className="transition-colors flex flex-col md:flex-row items-start md:items-center md:col-span-2 bg-slate-950 border-slate-800 border rounded-2xl p-5 gap-4 shadow-sm hover:border-slate-700">
<div className="w-12 h-12 shrink-0 rounded-xl flex items-center justify-center border bg-slate-900 border-slate-800">
<iconify-icon className="text-cyan-300" icon="solar:cup-hot-linear" style={{strokeWidth: '1.5px'}} width="24"></iconify-icon>
</div>
<span className="text-lg font-normal text-slate-200">Puntos de encuentro y Área de tereré</span>
</div>
</div>
</div>
</section>
<section className="overflow-hidden bg-slate-950 border-slate-800 border-t py-16 md:py-20 relative">
<div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/10 via-slate-950 to-slate-950 pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-center text-slate-100 mb-4">Sé parte de los primeros</h2>
<p className="text-balance text-lg md:text-xl font-light text-slate-400 text-center max-w-2xl mb-10 leading-snug">Ya somos una comunidad en crecimiento. Aprovecha la oportunidad de elegir tu lote ideal antes de que se agoten.</p>
<div className="md:p-12 bg-black w-full border-slate-800 border rounded-3xl p-8 relative shadow-2xl">
<div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
<div className="text-center md:text-left">
<div className="text-sm uppercase tracking-widest font-normal text-cyan-300 mb-2 flex items-center justify-center md:justify-start gap-2">
<iconify-icon icon="solar:fire-linear" style={{strokeWidth: '1.5px'}} width="20"></iconify-icon> Éxito en Ventas
                        </div>
<div className="text-6xl md:text-7xl font-medium tracking-tight text-slate-100 flex items-baseline gap-2 justify-center md:justify-start">
<span id="sold-counter">39</span> <span className="text-2xl font-light text-slate-500 tracking-normal">/ 104</span>
</div>
<div className="text-base font-light text-slate-400 mt-2">Lotes ya vendidos</div>
</div>
<div className="text-center md:text-right flex flex-col items-center md:items-end">
<div className="w-14 h-14 rounded-2xl border border-slate-800 bg-slate-900 flex items-center justify-center text-cyan-200 mb-4 shadow-sm">
<iconify-icon icon="solar:ticket-sale-linear" style={{strokeWidth: '1.5px'}} width="28"></iconify-icon>
</div>
<div className="text-2xl font-normal text-slate-100 tracking-tight">65 lotes disponibles</div>
<div className="text-base font-light text-slate-500 mt-1">Fase 1 de preventa</div>
</div>
</div>
<div className="relative w-full h-4 bg-slate-900 rounded-full overflow-hidden border border-slate-800 shadow-inner">
<div className="absolute top-0 left-0 h-full bg-cyan-400 rounded-full w-0 transition-all duration-[2500ms] ease-out shadow-[0_0_15px_rgba(34,211,238,0.5)]" id="progress-bar" style={{width: '37.5%'}}>
<div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-[shimmer_2s_infinite]"></div>
</div>
</div>
<div className="mt-4 flex justify-between text-xs font-light tracking-wide text-slate-500 uppercase">
<span>Lanzamiento</span> <span>Sold Out</span>
</div>
</div>
</div>
</section>
<section className="border-t py-16 md:py-20 px-6 bg-slate-900 border-slate-800" id="ubicacion">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
<div className="space-y-8">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-slate-100">Ubicación del proyecto</h2>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-xl flex items-center justify-center border shrink-0 mt-0.5 bg-slate-950 border-slate-800">
<iconify-icon className="text-cyan-300" icon="solar:map-point-linear" style={{strokeWidth: '1.5px'}} width="24"></iconify-icon>
</div>
<p className="text-lg font-light leading-snug text-slate-300">Nuestro EcoBarrio esta ubicado en la ciudad de Sapucai, a 2 horas de Asunción.</p>
</div>
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-xl flex items-center justify-center border shrink-0 mt-0.5 bg-slate-950 border-slate-800">
<iconify-icon className="text-cyan-300" icon="solar:routing-2-linear" style={{strokeWidth: '1.5px'}} width="24"></iconify-icon>
</div>
<p className="text-lg font-light leading-snug text-slate-300">Viniendo desde Paraguarí, queda a 30 minutos por la ruta Paraguarí-Villarica. Pasas primero Paraguarí, despues Escobar y la siguiente ciudad sería Sapucai.</p>
</div>
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-xl flex items-center justify-center border shrink-0 mt-0.5 bg-slate-950 border-slate-800">
<iconify-icon className="text-cyan-300" icon="solar:leaf-linear" style={{strokeWidth: '1.5px'}} width="24"></iconify-icon>
</div>
<p className="text-lg font-light leading-snug text-slate-300">Como apuntamos a desarrollar un barrio de desconexión, nuestro proyecto no está ubicado sobre ruta.</p>
</div>
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-xl flex items-center justify-center border shrink-0 mt-0.5 bg-slate-950 border-slate-800">
<iconify-icon className="text-cyan-300" icon="solar:bus-linear" style={{strokeWidth: '1.5px'}} width="24"></iconify-icon>
</div>
<p className="text-lg font-light leading-snug text-slate-300">Del centro mismo de la ciudad estamos a 7 minutos, ni antes ni después, desde ahí tomamos el desvío al loteamiento. El camino es todo de empedrado y llega cualquier coche. Son 2.9km más o menos.</p>
</div>
</div>
</div>
<div className="w-full h-[400px] lg:h-[550px] rounded-[2rem] overflow-hidden border shadow-xl relative border-slate-800 bg-black">
<iframe allowfullscreen="" className="absolute inset-0 w-full h-full" height="100%" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/d/embed?mid=1rr8jP3h6YyOKAatPin-CDGmh8f2LO3M" style={{border: '0'}} width="100%"></iframe>
</div>
</div>
</div>
</section>
<section className="bg-slate-950 border-slate-800 border-t py-16 md:py-20 px-6">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-12">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-slate-100">Financiación accesible y sin vueltas</h2>
<p className="text-lg md:text-xl font-light text-slate-400 mt-4 max-w-2xl mx-auto leading-snug">Pensamos un modelo de pago directo para que puedas invertir en tu terreno de forma segura y sin descapitalizarte.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="bg-slate-900 border border-slate-800 rounded-[2rem] p-8 hover:bg-slate-800/80 transition-colors shadow-lg relative overflow-hidden">
<div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-cyan-950/50 border border-cyan-900/50 text-cyan-300 mb-6 relative z-10">
<iconify-icon icon="solar:calendar-linear" style={{strokeWidth: '1.5px'}} width="28"></iconify-icon>
</div>
<h3 className="text-2xl font-normal text-slate-100 mb-2 tracking-tight relative z-10">Cuotas hasta 130 meses</h3>
<p className="text-slate-400 font-light text-base md:text-lg leading-snug relative z-10">Sin entrega inicial ni refuerzos sorpresas. El trato y la financiación es directo con la inmobiliaria.</p>
</div>
<div className="bg-slate-900 border border-slate-800 rounded-[2rem] p-8 hover:bg-slate-800/80 transition-colors shadow-lg relative overflow-hidden">
<div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-cyan-950/50 border border-cyan-900/50 text-cyan-300 mb-6 relative z-10">
<iconify-icon icon="solar:wallet-linear" style={{strokeWidth: '1.5px'}} width="28"></iconify-icon>
</div>
<h3 className="text-2xl font-normal text-slate-100 mb-2 tracking-tight relative z-10">Desde 325.000 Gs</h3>
<p className="text-slate-400 font-light text-base md:text-lg leading-snug relative z-10">Últimos lotes en fase de preventa. Rango general de 325.000 a 555.000 Gs al mes según el lote de tu elección.</p>
</div>
<div className="bg-slate-900 border border-slate-800 rounded-[2rem] p-8 hover:bg-slate-800/80 transition-colors shadow-lg relative overflow-hidden">
<div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-cyan-950/50 border border-cyan-900/50 text-cyan-300 mb-6 relative z-10">
<iconify-icon icon="solar:documents-linear" style={{strokeWidth: '1.5px'}} width="28"></iconify-icon>
</div>
<h3 className="text-2xl font-normal text-slate-100 mb-2 tracking-tight relative z-10">Requisitos mínimos</h3>
<p className="text-slate-400 font-light text-base md:text-lg leading-snug relative z-10">Ser mayor de edad, tener cédula vigente y abonar la cuota 1 para tomar posesión inmediata de tu terreno.</p>
</div>
</div>
</div>
</section>
<section className="bg-slate-900 border-slate-800 border-t py-16 px-6">
<div className="max-w-5xl mx-auto text-center border border-slate-800 rounded-[2rem] p-10 md:p-14 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-950/40 via-black to-black relative overflow-hidden shadow-2xl">
<div className="relative z-10 flex flex-col items-center">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-slate-100 mb-4">¿Listo para dar el siguiente paso?</h2>
<p className="text-lg md:text-xl font-light text-slate-400 mb-8 max-w-2xl text-balance leading-snug">Hablemos sin compromiso. Estamos para resolver tus dudas y ayudarte a elegir el terreno que mejor se adapte a tus proyectos.</p>
<a className="inline-flex items-center gap-3 rounded-full pl-8 pr-6 py-4 text-lg font-normal transition-all bg-cyan-200 text-black hover:bg-cyan-100 hover:scale-105 shadow-[0_0_20px_rgba(34,211,238,0.3)]" href="#contacto">
                    Quiero conocer el proyecto
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-black/10 text-black">
<iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5px'}} width="20"></iconify-icon>
</span>
</a>
</div>
</div>
</section>
<section className="bg-slate-950 border-slate-800 border-t py-16 md:py-20 px-6">
<div className="max-w-6xl mx-auto">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-center mb-12 text-slate-100">¿Estás en Paraguay o en el extranjero?</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="border rounded-[2rem] p-8 md:p-10 transition-colors duration-300 border-slate-800 bg-slate-900 hover:bg-slate-800/80">
<div className="w-14 h-14 rounded-2xl flex items-center justify-center border mb-6 bg-cyan-950/50 border-cyan-900/50 text-cyan-300">
<iconify-icon icon="solar:map-point-linear" style={{strokeWidth: '1.5px'}} width="32"></iconify-icon>
</div>
<h3 className="text-2xl font-medium tracking-tight mb-3 text-slate-100">Resido en Paraguay</h3>
<p className="text-base md:text-lg font-light mb-6 text-slate-400 leading-snug">Si vives cerca, nada mejor que conocer tu futura inversión en persona. Ven a caminar por el barrio y elegir el lote que más te guste.</p>
<ul className="space-y-4">
<li className="flex items-start gap-4 text-base md:text-lg font-light text-slate-300">
<iconify-icon className="shrink-0 text-cyan-400 mt-0.5" icon="solar:check-read-linear" style={{strokeWidth: '1.5px'}} width="24"></iconify-icon> Visitas guiadas todos los fines de semana.
                        </li>
<li className="flex items-start gap-4 text-base md:text-lg font-light text-slate-300">
<iconify-icon className="shrink-0 text-cyan-400 mt-0.5" icon="solar:check-read-linear" style={{strokeWidth: '1.5px'}} width="24"></iconify-icon> Asesoramiento en el lugar sobre planos.
                        </li>
<li className="flex items-start gap-4 text-base md:text-lg font-light text-slate-300">
<iconify-icon className="shrink-0 text-cyan-400 mt-0.5" icon="solar:check-read-linear" style={{strokeWidth: '1.5px'}} width="24"></iconify-icon> Reserva en el sitio con seña mínima.
                        </li>
</ul>
</div>
<div className="border rounded-[2rem] p-8 md:p-10 transition-colors duration-300 border-slate-800 bg-slate-900 hover:bg-slate-800/80 relative overflow-hidden">
<div className="absolute top-0 right-0 p-4">
<div className="inline-flex items-center gap-2 rounded-full px-4 py-1 text-sm font-medium border bg-slate-950 border-slate-800 text-slate-300">
<span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span> Proceso 100% Online
                        </div>
</div>
<div className="w-14 h-14 rounded-2xl flex items-center justify-center border mb-6 bg-cyan-950/50 border-cyan-900/50 text-cyan-300">
<iconify-icon icon="solar:global-linear" style={{strokeWidth: '1.5px'}} width="32"></iconify-icon>
</div>
<h3 className="text-2xl font-medium tracking-tight mb-3 text-slate-100">Resido en el extranjero</h3>
<p className="text-base md:text-lg font-light mb-6 text-slate-400 leading-snug">Adaptamos todo el proceso para que la distancia no sea un impedimento. Transparente, rápido y completamente digital.</p>
<ul className="space-y-4">
<li className="flex items-start gap-4 text-base md:text-lg font-light text-slate-300">
<iconify-icon className="shrink-0 text-cyan-400 mt-0.5" icon="solar:check-read-linear" style={{strokeWidth: '1.5px'}} width="24"></iconify-icon> Atención personalizada por videollamada.
                        </li>
<li className="flex items-start gap-4 text-base md:text-lg font-light text-slate-300">
<iconify-icon className="shrink-0 text-cyan-400 mt-0.5" icon="solar:check-read-linear" style={{strokeWidth: '1.5px'}} width="24"></iconify-icon> Recorrido virtual y material fotográfico del lote.
                        </li>
<li className="flex items-start gap-4 text-base md:text-lg font-light text-slate-300">
<iconify-icon className="shrink-0 text-cyan-400 mt-0.5" icon="solar:check-read-linear" style={{strokeWidth: '1.5px'}} width="24"></iconify-icon> Envío de documentos de forma electrónica y segura.
                        </li>
</ul>
</div>
</div>
</div>
</section>
<section className="bg-slate-900 border-slate-800 border-t py-16 md:py-20 px-6" id="precios">
<div className="max-w-7xl mx-auto flex flex-col items-center">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-center mb-4 text-slate-100">Precios de los terrenos</h2>
<div className="flex items-center p-1.5 rounded-full border mb-12 mt-6 bg-slate-950 border-slate-800">
<button className="px-8 py-2.5 rounded-full text-base font-normal transition-colors shadow-sm bg-cyan-200 text-black" id="btn-mensual" type="button">Pago mensual</button>
<button className="px-8 py-2.5 rounded-full text-base font-normal transition-colors text-slate-400 hover:text-slate-100 bg-transparent" id="btn-contado" type="button">Pago único</button>
</div>
<div className="flex flex-col lg:grid lg:grid-cols-3 gap-6 items-stretch w-full">
<div className="flex flex-col rounded-[2rem] border p-8 w-full transition-colors duration-300 shadow-sm border-slate-800 bg-slate-950 hover:border-slate-700">
<div className="flex items-center gap-4 mb-6">
<div className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 text-cyan-300">
<iconify-icon icon="solar:map-linear" style={{strokeWidth: '1.5px'}} width="24"></iconify-icon>
</div>
<h3 className="text-xl font-normal tracking-tight text-slate-100">Lote Inversión</h3>
</div>
<div className="mb-6 flex items-baseline gap-2">
<span className="text-4xl md:text-5xl font-medium tracking-tight price-val text-slate-100" data-contado="21.125.000" data-mensual="325.000">325.000</span>
<span className="text-base text-slate-500 font-light price-period">Gs / mes</span>
</div>
<div className="w-full h-px mb-8 bg-slate-800"></div>
<ul className="flex-1 space-y-4 mb-10">
<li className="financing-item flex items-start gap-4 text-base md:text-lg font-light text-slate-300">
<iconify-icon className="shrink-0 mt-0.5 text-cyan-400" icon="solar:check-read-linear" style={{strokeWidth: '1.5px'}} width="24"></iconify-icon> Cuotas accesibles, ideal para invertir.
                        </li>
</ul>
<a className="w-full py-4 px-6 rounded-2xl border text-center text-lg font-normal transition-colors mt-auto block bg-slate-900 border-slate-800 text-slate-200 hover:bg-slate-800" href="#contacto">Invertir ahora</a>
</div>
<div className="relative flex flex-col rounded-[2rem] border p-8 shadow-2xl lg:-translate-y-4 z-10 w-full backdrop-blur-xl border-cyan-900 bg-slate-950">
<div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full px-5 py-1.5 text-sm font-medium shadow-lg whitespace-nowrap tracking-wide uppercase bg-cyan-200 text-black">Opción Destacada</div>
<div className="flex items-center gap-4 mb-6 mt-2">
<div className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-900 bg-cyan-950/50 text-cyan-300">
<iconify-icon icon="solar:stars-linear" style={{strokeWidth: '1.5px'}} width="24"></iconify-icon>
</div>
<h3 className="text-xl font-normal tracking-tight text-slate-100">Lote Experiencia</h3>
</div>
<div className="mb-6 flex items-baseline gap-2">
<span className="text-4xl md:text-5xl font-medium tracking-tight price-val text-slate-100" data-contado="26.000.000" data-mensual="400.000">400.000</span>
<span className="text-base font-light price-period text-slate-500">Gs / mes</span>
</div>
<div className="w-full h-px mb-8 bg-slate-800"></div>
<ul className="flex-1 space-y-4 mb-10">
<li className="flex items-start gap-4 text-base md:text-lg font-light text-slate-200">
<iconify-icon className="shrink-0 mt-0.5 text-cyan-400" icon="solar:check-read-linear" style={{strokeWidth: '1.5px'}} width="24"></iconify-icon> Mejores ubicados, zona alta que los lotes inversión.
                        </li>
</ul>
<a className="w-full py-4 px-6 rounded-2xl text-center text-lg font-normal transition-colors mt-auto block shadow-xl bg-cyan-200 text-black hover:bg-cyan-100" href="#contacto">Elegir este lote</a>
</div>
<div className="flex flex-col rounded-[2rem] border p-8 w-full transition-colors duration-300 shadow-sm border-slate-800 bg-slate-950 hover:border-slate-700">
<div className="flex items-center gap-4 mb-6">
<div className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 text-cyan-300">
<iconify-icon icon="solar:crown-linear" style={{strokeWidth: '1.5px'}} width="24"></iconify-icon>
</div>
<h3 className="text-xl font-normal tracking-tight text-slate-100">Lote Premium</h3>
</div>
<div className="mb-6 flex items-baseline gap-2">
<span className="text-4xl md:text-5xl font-medium tracking-tight price-val text-slate-100" data-contado="31.200.000" data-mensual="480.000">480.000</span>
<span className="text-base text-slate-500 font-light price-period">Gs / mes</span>
</div>
<div className="w-full h-px mb-8 bg-slate-800"></div>
<ul className="flex-1 space-y-4 mb-10">
<li className="flex items-start gap-4 text-base md:text-lg font-light text-slate-300">
<iconify-icon className="shrink-0 mt-0.5 text-cyan-400" icon="solar:check-read-linear" style={{strokeWidth: '1.5px'}} width="24"></iconify-icon> Las mejores ubicaciones dentro del proyecto.
                        </li>
</ul>
<a className="w-full py-4 px-6 rounded-2xl border text-center text-lg font-normal transition-colors mt-auto block bg-slate-900 border-slate-800 text-slate-200 hover:bg-slate-800" href="#contacto">Ver lotes premium</a>
</div>
</div>
</div>
</section>
<section className="md:py-20 bg-slate-950 border-slate-800 border-t py-16 px-6">
<div className="max-w-6xl mx-auto">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-center mb-12 text-slate-100">Lo que dicen nuestros clientes</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="border border-slate-800 bg-slate-900 rounded-3xl p-8 shadow-sm flex flex-col">
<div className="flex text-cyan-400 mb-5 gap-1">
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon><iconify-icon icon="solar:star-bold" width="20"></iconify-icon><iconify-icon icon="solar:star-bold" width="20"></iconify-icon><iconify-icon icon="solar:star-bold" width="20"></iconify-icon><iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
</div>
<p className="text-base md:text-lg font-light text-slate-300 mb-8 flex-grow leading-snug">"Increíble oportunidad. Compré desde España sin ningún problema. Todo el proceso fue transparente y muy bien explicado. Tener un terreno en Paraguay ahora es una realidad para mi familia."</p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-slate-950 rounded-full flex items-center justify-center text-slate-400 font-medium border border-slate-800">CR</div>
<div>
<p className="text-slate-100 font-normal">Carlos R.</p>
<p className="text-slate-500 font-light text-sm">Residente en España</p>
</div>
</div>
</div>
<div className="border border-slate-800 bg-slate-900 rounded-3xl p-8 shadow-sm flex flex-col">
<div className="flex text-cyan-400 mb-5 gap-1">
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon><iconify-icon icon="solar:star-bold" width="20"></iconify-icon><iconify-icon icon="solar:star-bold" width="20"></iconify-icon><iconify-icon icon="solar:star-bold" width="20"></iconify-icon><iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
</div>
<p className="md:text-lg flex-grow leading-snug text-base font-light text-slate-300 mb-8">"Fui a visitar el lugar un fin de semana con mi familia y quedamos encantados. La naturaleza y la paz que se respira es única. Elegimos el lote cerca al mirador para construir nuestra futura casa de descanso."</p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-slate-950 rounded-full flex items-center justify-center text-slate-400 font-medium border border-slate-800">ML</div>
<div>
<p className="text-slate-100 font-normal">María L.</p>
<p className="text-slate-500 font-light text-sm">Asunción, Py</p>
</div>
</div>
</div>
<div className="border border-slate-800 bg-slate-900 rounded-3xl p-8 shadow-sm flex flex-col">
<div className="flex text-cyan-400 mb-5 gap-1">
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon><iconify-icon icon="solar:star-bold" width="20"></iconify-icon><iconify-icon icon="solar:star-bold" width="20"></iconify-icon><iconify-icon icon="solar:star-bold" width="20"></iconify-icon><iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
</div>
<p className="text-base md:text-lg font-light text-slate-300 mb-8 flex-grow leading-snug">"La facilidad de pago me convenció por completo. No tener que dar una entrega enorme me permitió invertir sin descapitalizarme. Los asesores siempre estuvieron atentos a mis consultas."</p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-slate-950 rounded-full flex items-center justify-center text-slate-400 font-medium border border-slate-800">DM</div>
<div>
<p className="text-slate-100 font-normal">Diego M.</p>
<p className="text-slate-500 font-light text-sm">San Lorenzo, Py</p>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="bg-slate-950 border-slate-800 border-t py-16 md:py-24 px-6" id="paso-a-paso">
<div className="max-w-4xl mx-auto">
<div className="text-center mb-16">
<div className="inline-flex rounded-full backdrop-blur-md border shadow-sm bg-cyan-100/5 border-cyan-100/10 px-4 py-1.5 mb-4 relative">
<span className="text-sm font-medium tracking-wide text-cyan-200">Paso a paso</span>
</div>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-slate-100 mb-4">El proceso de compra</h2>
<p className="text-lg md:text-xl font-light text-slate-400 leading-snug">Un camino simple, transparente y seguro hacia tu nuevo terreno.</p>
</div>
<div className="relative border-l border-slate-800 ml-5 md:ml-8 space-y-12 pb-4">
<div className="relative pl-8 md:pl-12">
<div className="absolute -left-[1.25rem] w-10 h-10 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-cyan-300 shadow-sm font-medium text-lg">1</div>
<div className="flex items-center gap-3 mb-2">
<iconify-icon className="text-slate-500" icon="solar:pen-linear" style={{strokeWidth: '1.5px'}} width="24"></iconify-icon>
<h3 className="text-xl md:text-2xl font-normal text-slate-100 tracking-tight">¡Da el primer paso!</h3>
</div>
<p className="text-base md:text-lg font-light text-slate-400 leading-snug">Completá el formulario de esta página contándonos qué tipo de lote te interesa y cuál es tu gran objetivo de compra (inversión, vivienda, casa de fin de semana, etc.).</p>
</div>
<div className="relative pl-8 md:pl-12">
<div className="absolute -left-[1.25rem] w-10 h-10 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-cyan-300 shadow-sm font-medium text-lg">2</div>
<div className="flex items-center gap-3 mb-2">
<iconify-icon className="text-slate-500" icon="solar:smartphone-linear" style={{strokeWidth: '1.5px'}} width="24"></iconify-icon>
<h3 className="text-xl md:text-2xl font-normal text-slate-100 tracking-tight">Conexión directa</h3>
</div>
<p className="text-base md:text-lg font-light text-slate-400 leading-snug">¡Nos ponemos en contacto con vos rápidamente por WhatsApp para brindarte atención personalizada!</p>
</div>
<div className="relative pl-8 md:pl-12">
<div className="absolute -left-[1.25rem] w-10 h-10 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-cyan-300 shadow-sm font-medium text-lg">3</div>
<div className="flex items-center gap-3 mb-2">
<iconify-icon className="text-slate-500" icon="solar:map-point-linear" style={{strokeWidth: '1.5px'}} width="24"></iconify-icon>
<h3 className="text-xl md:text-2xl font-normal text-slate-100 tracking-tight">Conocé tu futuro terreno</h3>
</div>
<div className="space-y-4 mt-4">
<div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-5">
<div className="flex items-start gap-3">
<iconify-icon className="text-cyan-400 shrink-0 mt-0.5" icon="solar:point-on-map-linear" style={{strokeWidth: '1.5px'}} width="24"></iconify-icon>
<div>
<span className="text-slate-200 font-medium block mb-1">Si estás en Paraguay</span>
<span className="text-base font-light text-slate-400 leading-snug">Coordinamos una visita presencial para que recorras el proyecto, respires el aire del lugar y elijas tu lote ideal.</span>
</div>
</div>
</div>
<div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-5">
<div className="flex items-start gap-3">
<iconify-icon className="text-cyan-400 shrink-0 mt-0.5" icon="solar:plane-linear" style={{strokeWidth: '1.5px'}} width="24"></iconify-icon>
<div>
<span className="text-slate-200 font-medium block mb-1">Si estás en el extranjero</span>
<span className="text-base font-light text-slate-400 leading-snug">¡La distancia no es un problema! Te asesoramos con videos detallados y recorridos virtuales para acompañarte a tomar la mejor decisión.</span>
</div>
</div>
</div>
</div>
</div>
<div className="relative pl-8 md:pl-12">
<div className="absolute -left-[1.25rem] w-10 h-10 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-cyan-300 shadow-sm font-medium text-lg">4</div>
<div className="flex items-center gap-3 mb-2">
<iconify-icon className="text-slate-500" icon="solar:rocket-linear" style={{strokeWidth: '1.5px'}} width="24"></iconify-icon>
<h3 className="text-xl md:text-2xl font-normal text-slate-100 tracking-tight">¡Asegurá tu lugar y tomá posesión inmediata!</h3>
</div>
<p className="text-base md:text-lg font-light text-slate-400 leading-snug">Una vez que te enamores de un lote, pagás la primera cuota (por transferencia bancaria a la empresa o en efectivo). En ese instante sacamos el terreno del sistema de disponibles. <span className="text-cyan-300 font-normal">¡Al pagar la primera cuota, el lote ya es tuyo!</span></p>
</div>
<div className="relative pl-8 md:pl-12">
<div className="absolute -left-[1.25rem] w-10 h-10 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-cyan-300 shadow-sm font-medium text-lg">5</div>
<div className="flex items-center gap-3 mb-2">
<iconify-icon className="text-slate-500" icon="solar:pen-new-square-linear" style={{strokeWidth: '1.5px'}} width="24"></iconify-icon>
<h3 className="text-xl md:text-2xl font-normal text-slate-100 tracking-tight">Firma de documentos, fácil y rápido</h3>
</div>
<p className="text-base md:text-lg font-light text-slate-400 leading-snug">Preparamos todo el papeleo para formalizar tu compra. Lo podés firmar en el acto en nuestras oficinas, te lo enviamos por encomienda a tu ciudad, o lo hacemos de manera 100% digital si te encontrás en el exterior.</p>
</div>
<div className="relative pl-8 md:pl-12">
<div className="absolute -left-[1.25rem] w-10 h-10 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-cyan-300 shadow-sm font-medium text-lg">6</div>
<div className="flex items-center gap-3 mb-2">
<iconify-icon className="text-slate-500" icon="solar:home-angle-linear" style={{strokeWidth: '1.5px'}} width="24"></iconify-icon>
<h3 className="text-xl md:text-2xl font-normal text-slate-100 tracking-tight">¡Empezá a disfrutar tu inversión!</h3>
</div>
<p className="text-base md:text-lg font-light text-slate-400 leading-snug">El proceso inicial está terminado. Ahora solo queda abonar tu cuota mes a mes y disfrutar de tu nueva adquisición. Como ya tenés la posesión inmediata, ¡ya podés cercarlo, plantar los árboles que quieras o empezar a construir!</p>
</div>
<div className="relative pl-8 md:pl-12">
<div className="absolute -left-[1.25rem] w-10 h-10 rounded-full bg-cyan-950/80 border border-cyan-400/30 flex items-center justify-center text-cyan-300 shadow-[0_0_15px_rgba(34,211,238,0.2)] font-medium text-lg">7</div>
<div className="flex items-center gap-3 mb-2">
<iconify-icon className="text-cyan-400" icon="solar:diploma-linear" style={{strokeWidth: '1.5px'}} width="24"></iconify-icon>
<h3 className="text-xl md:text-2xl font-normal text-slate-100 tracking-tight">El camino hacia tu Título de Propiedad</h3>
</div>
<p className="text-base md:text-lg font-light text-slate-400 leading-snug">Durante el financiamiento, solo te encargarás de abonar anualmente el impuesto inmobiliario de tu lote. En 130 meses, una vez cancelada la totalidad de tu plan con la inmobiliaria... <span className="text-slate-200 font-normal">¡llegó el gran momento!</span> Iniciarás la gestión para obtener el título definitivo a tu nombre.</p>
</div>
<div className="absolute -left-[0.35rem] -bottom-2 w-3 h-3 rounded-full bg-slate-800"></div>
</div>
</div>
</section>
<section className="bg-slate-900 border-slate-800 border-t py-16 md:py-20 px-6" id="faq">
<div className="max-w-4xl mx-auto">
<div className="text-center mb-12">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-4 text-slate-100">Preguntas frecuentes</h2>
<p className="text-lg md:text-xl font-light text-slate-400 leading-snug">Todo lo que necesitas saber antes de asegurar tu terreno.</p>
</div>
<div className="space-y-4">
<div className="faq-item border rounded-2xl overflow-hidden transition-colors bg-slate-950 border-slate-800 hover:bg-black">
<button className="faq-button flex gap-6 focus:outline-none text-left w-full px-6 py-5 items-center justify-between" type="button">
<span className="text-lg md:text-xl font-normal text-slate-100 tracking-tight">¿Como es la financiación? Hay entrega o refuerzos a parte de la cuota?</span>
<div className="faq-icon transition-transform duration-300 shrink-0 text-slate-500"><iconify-icon icon="solar:alt-arrow-down-linear" width="24"></iconify-icon></div>
</button>
<div className="faq-answer grid transition-all duration-300 ease-in-out" style={{gridTemplateRows: '0fr'}}>
<div className="overflow-hidden"><p className="px-6 pb-5 text-base md:text-lg font-light leading-snug text-slate-400">La financiación es directo con la inmobiliaria y son cuotas corridas. No tenemos entrega ni refuerzos. Nuestra financiación es a 130 meses corridos y la cuota es de acuerdo al lote de elección.</p></div>
</div>
</div>
<div className="faq-item border rounded-2xl overflow-hidden transition-colors bg-slate-950 border-slate-800 hover:bg-black">
<button className="faq-button w-full px-6 py-5 text-left flex items-center justify-between gap-6 focus:outline-none" type="button">
<span className="text-lg md:text-xl font-normal tracking-tight text-slate-100">¿Cuales son los requisitos para comprar un terreno?</span>
<div className="faq-icon transition-transform duration-300 shrink-0 text-slate-500"><iconify-icon icon="solar:alt-arrow-down-linear" width="24"></iconify-icon></div>
</button>
<div className="faq-answer grid transition-all duration-300 ease-in-out" style={{gridTemplateRows: '0fr'}}>
<div className="overflow-hidden"><p className="px-6 pb-5 text-base md:text-lg font-light leading-snug text-slate-400">Comprar un terreno con nosotros es super facil, solo tener que contar mayoria de edad, cedula vigente y pagar la primera cuota del terreno de tu interes para tomar posesión inmediata de tu lote.</p></div>
</div>
</div>
<div className="faq-item border rounded-2xl overflow-hidden transition-colors bg-slate-950 border-slate-800 hover:bg-black">
<button className="faq-button w-full px-6 py-5 text-left flex items-center justify-between gap-6 focus:outline-none" type="button">
<span className="text-lg md:text-xl font-normal tracking-tight text-slate-100">¿Puedo comprar desde el extranjero?</span>
<div className="faq-icon transition-transform duration-300 shrink-0 text-slate-500"><iconify-icon icon="solar:alt-arrow-down-linear" width="24"></iconify-icon></div>
</button>
<div className="faq-answer grid transition-all duration-300 ease-in-out" style={{gridTemplateRows: '0fr'}}>
<div className="overflow-hidden"><p className="px-6 pb-5 text-base md:text-lg font-light leading-snug text-slate-400">Claro, tenemos la compra digital para eso. Solo tenes que ponerte en contacto con nuestros asesores y ellos te van a ayudar a elegir el mejor lote en base a las caracteristicas o presupuesto que le indiques.</p></div>
</div>
</div>
<div className="faq-item border rounded-2xl overflow-hidden transition-colors bg-slate-950 border-slate-800 hover:bg-black">
<button className="faq-button w-full px-6 py-5 text-left flex items-center justify-between gap-6 focus:outline-none" type="button">
<span className="text-lg md:text-xl font-normal tracking-tight text-slate-100">¿Como hago para conocer el loteamiento?</span>
<div className="faq-icon transition-transform duration-300 shrink-0 text-slate-500"><iconify-icon icon="solar:alt-arrow-down-linear" width="24"></iconify-icon></div>
</button>
<div className="faq-answer grid transition-all duration-300 ease-in-out" style={{gridTemplateRows: '0fr'}}>
<div className="overflow-hidden"><p className="px-6 pb-5 text-base md:text-lg font-light leading-snug text-slate-400">Podes agendar una visita con nuestros asesores completa el formulario de contacto de esta pagina. Estamos todos los fines de semana (sábado y domingo) hasta agotar los lotes.</p></div>
</div>
</div>
<div className="faq-item border rounded-2xl overflow-hidden transition-colors bg-slate-950 border-slate-800 hover:bg-black">
<button className="faq-button w-full px-6 py-5 text-left flex items-center justify-between gap-6 focus:outline-none" type="button">
<span className="text-lg md:text-xl font-normal tracking-tight text-slate-100">¿Ademas de mi cuota, hay algo más que debo pagar?</span>
<div className="faq-icon transition-transform duration-300 shrink-0 text-slate-500"><iconify-icon icon="solar:alt-arrow-down-linear" width="24"></iconify-icon></div>
</button>
<div className="faq-answer grid transition-all duration-300 ease-in-out" style={{gridTemplateRows: '0fr'}}>
<div className="overflow-hidden">
<div className="px-6 pb-5 space-y-3">
<p className="text-base md:text-lg font-light leading-snug text-slate-400">Ademas de la cuota la inmobiliaria cobra el servicio de limpieza, que sería Gs. 30.000 adicional a tu cuota para mantener tu terreno limpio hasta que cerques o empieces tu construcción.</p>
<p className="text-base md:text-lg font-light leading-snug text-slate-400">Y una vez al año debes acercarte a la municipalidad de Sapucai para pagar el impuesto inmobilairio. A partir del año siguiente ya es responsabilidad tuya pagar el impuesto.</p>
</div>
</div>
</div>
</div>
<div className="faq-item border rounded-2xl overflow-hidden transition-colors bg-slate-950 border-slate-800 hover:bg-black">
<button className="faq-button w-full px-6 py-5 text-left flex items-center justify-between gap-6 focus:outline-none" type="button">
<span className="text-lg md:text-xl font-normal tracking-tight text-slate-100">¿El titulo cuando me entregan? Tiene un costo a parte esto?</span>
<div className="faq-icon transition-transform duration-300 shrink-0 text-slate-500"><iconify-icon icon="solar:alt-arrow-down-linear" width="24"></iconify-icon></div>
</button>
<div className="faq-answer grid transition-all duration-300 ease-in-out" style={{gridTemplateRows: '0fr'}}>
<div className="overflow-hidden">
<div className="px-6 pb-5 space-y-3">
<p className="text-base md:text-lg font-light leading-snug text-slate-400">El título podes solicitar una vez canceles la totalidad de la deuda que sería al abonar la cuota número 130. Por el momento tenes la posesión del inmueble pero no así la titularidad.</p>
<p className="text-base md:text-lg font-light leading-snug text-slate-400">Nuestra cuota no incluye el título, eso una vez llegue el momento de escriturar el escribano encargado te preparara un presupuesto por el trabajo.</p>
</div>
</div>
</div>
</div>
<div className="faq-item border rounded-2xl overflow-hidden transition-colors bg-slate-950 border-slate-800 hover:bg-black">
<button className="faq-button w-full px-6 py-5 text-left flex items-center justify-between gap-6 focus:outline-none" type="button">
<span className="text-lg md:text-xl font-normal tracking-tight text-slate-100">¿Los servicios básicos, ya estan instalados?</span>
<div className="faq-icon transition-transform duration-300 shrink-0 text-slate-500"><iconify-icon icon="solar:alt-arrow-down-linear" width="24"></iconify-icon></div>
</button>
<div className="faq-answer grid transition-all duration-300 ease-in-out" style={{gridTemplateRows: '0fr'}}>
<div className="overflow-hidden"><p className="px-6 pb-5 text-base md:text-lg font-light leading-snug text-slate-400">Como estamos en etapa de preventa, lanzamos la venta en plena apertura de calles. Todavía seguimos trabajando para dejar optimas las calles y las areas comunes. Normalmente colocamos el tendido electrico 3 meses despúes de iniciar la preventa y el agua (aguatería o pozo propio) 10 meses despúes. En menos de un año ya vas a tener los servicios básicos a tu disposisión.</p></div>
</div>
</div>
</div>
</div>
</section>
<section className="md:py-24 bg-slate-950 border-slate-800 border-t py-16 px-6" id="contacto">
<div className="max-w-4xl mx-auto">
<div className="w-full rounded-[2rem] overflow-hidden border border-slate-800 bg-black min-h-[600px] shadow-xl relative">
<div data-tf-live="01KPW1HJZ9D0SY4M7PF61M1FQD"></div>
</div>
</div>
</section>
<footer className="border-t py-12 px-6 border-slate-800 bg-slate-900">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center">
<img alt="Lotes a Cuotas Real Estate" className="h-8 w-auto object-contain" decoding="async" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1987990b-9faf-4b90-bdb5-551a78aa6114_800w.png"/>
</div>
<div className="text-sm md:text-base text-slate-500 font-light text-center md:text-left">
                © 2024 EcoBarrio Rieles de Sapucai. Todos los derechos reservados.
            </div>
</div>
</footer>






    </>
  );
}
