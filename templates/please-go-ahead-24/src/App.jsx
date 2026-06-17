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
      
<div className="fixed inset-0 z-[-1]" style={{backgroundImage: 'url(&quot', data: 'image/svg+xml, %3Csvg viewBox=\'0 0 200 200\' xmlns=\'http: //www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' opacity=\'0.03\'/%3E%3C/svg%3E&quot', pointerEvents: 'none'}}></div>
<nav className="fixed top-0 w-full z-40 bg-[#111112]/75 backdrop-blur-lg border-b border-[#2E3038]">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
<div className="text-xl font-medium tracking-tighter text-[#FFFFFF]">REVPROCESS</div>
<button className="hidden md:flex text-sm text-[#0F0F11] bg-[#5BA992] hover:bg-[#6BC0A7] px-4 py-2 rounded-[4px] transition-all items-center gap-2">
                Agendar Llamada <iconify-icon icon="solar:calendar-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</nav>
<header className="relative pt-32 lg:pt-40 pb-24 lg:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center text-center overflow-hidden">
<div className="absolute top-0 inset-x-0 h-[500px] z-[-1]" style={{background: 'radial-gradient(circle at 50% 0%, rgba(46, 48, 56, 0.4) 0%, transparent 50%)'}}></div>
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#2E3038] bg-[#111112]/50 backdrop-blur-sm mb-8">
<span className="text-[#818EBC] text-xs font-medium tracking-wider uppercase">Para fundadores y responsables de ventas B2B en España</span>
</div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#FFFFFF] max-w-5xl mb-6 text-balance leading-tight">
            Deja de depender de los referidos. Consigue reuniones con decisores cualificados por 250 € por reunión celebrada.
        </h1>
<h2 className="text-lg sm:text-xl text-[#ABAEBB] max-w-3xl mb-12 text-pretty font-normal">
            Construimos y gestionamos una infraestructura de outbound escalada horizontalmente, basada en IA, para tu empresa — y solo pagas cuando un decisor cualificado se sienta frente a ti en una reunión.
        </h2>
<div className="w-full max-w-4xl aspect-video bg-[#111112] rounded-[14px] border border-[#2E3038] relative overflow-hidden mb-8 group cursor-pointer shadow-lg" id="vsl-player">
<div className="absolute inset-0 bg-[#0F0F11] flex flex-col items-center justify-center">
<div className="absolute inset-0 bg-gradient-to-t from-[#0F0F11] via-transparent to-transparent opacity-80 z-10"></div>
<button className="relative z-20 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#5BA992] flex items-center justify-center text-[#0F0F11] transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_40px_rgba(91,169,146,0.3)]">
<iconify-icon className="text-2xl sm:text-3xl ml-1" icon="solar:play-bold"></iconify-icon>
</button>
<p className="relative z-20 mt-6 text-[#FFFFFF] font-medium tracking-tight text-lg sm:text-xl">El Sistema Outbound de 250€/Reunión</p>
</div>
</div>
<button className="text-sm text-[#ABAEBB] hover:text-[#FFFFFF] transition-colors mb-12 flex items-center gap-1">
            Saltar el vídeo y leer los detalles <iconify-icon icon="solar:arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<div className="flex flex-col items-center" id="hero-cta">
<button className="bg-[#5BA992] text-[#0F0F11] px-6 py-4 sm:px-8 rounded-[4px] font-medium text-base sm:text-lg hover:bg-[#6BC0A7] hover:-translate-y-0.5 transition-all flex items-center gap-3">
                Reserva tu Llamada de Estrategia
                <iconify-icon className="text-xl" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-6 text-xs text-[#ABAEBB]">
<div className="flex items-center gap-1.5"><iconify-icon className="text-[#5BA992]" icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}}></iconify-icon> Cumplimiento RGPD</div>
<div className="flex items-center gap-1.5"><iconify-icon className="text-[#5BA992]" icon="solar:lock-keyhole-linear" style={{strokeWidth: '1.5'}}></iconify-icon> Protección de Dominio</div>
<div className="flex items-center gap-1.5"><iconify-icon className="text-[#5BA992]" icon="solar:wallet-money-linear" style={{strokeWidth: '1.5'}}></iconify-icon> Cero Riesgo de Retainer</div>
</div>
</div>
</header>
<section className="border-y border-[#2E3038] bg-[#111112] py-8 overflow-hidden">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<p className="text-center text-xs text-[#ABAEBB] mb-6 tracking-wide uppercase">Infraestructura diseñada para líderes en Ciberseguridad, SaaS y B2B</p>
<div className="flex overflow-hidden" style={{maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'}}>
<div className="flex min-w-full items-center justify-around gap-12 sm:gap-24 grayscale opacity-50">
<span className="text-xl font-medium tracking-tighter text-[#FFFFFF] flex items-center gap-2"><iconify-icon icon="solar:shield-network-linear" style={{strokeWidth: '1.5'}}></iconify-icon> CYBERSEC</span>
<span className="text-xl font-medium tracking-tighter text-[#FFFFFF] flex items-center gap-2"><iconify-icon icon="solar:server-square-linear" style={{strokeWidth: '1.5'}}></iconify-icon> DATACLOUD</span>
<span className="text-xl font-medium tracking-tighter text-[#FFFFFF] flex items-center gap-2"><iconify-icon icon="solar:cpu-linear" style={{strokeWidth: '1.5'}}></iconify-icon> AUTOMATEX</span>
<span className="text-xl font-medium tracking-tighter text-[#FFFFFF] flex items-center gap-2"><iconify-icon icon="solar:users-group-two-rounded-linear" style={{strokeWidth: '1.5'}}></iconify-icon> HR SYNC</span>
<span className="text-xl font-medium tracking-tighter text-[#FFFFFF] flex items-center gap-2"><iconify-icon icon="solar:chart-square-linear" style={{strokeWidth: '1.5'}}></iconify-icon> FINTECH OS</span>
</div>
</div>
</div>
</section>
<section className="py-24 lg:py-32 bg-[#111112]" id="content-start">
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
<h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-[#FFFFFF] mb-8">El problema de escalar ventas B2B de alto ticket en España.</h2>
<div className="space-y-6 text-base sm:text-lg text-[#ABAEBB] font-normal text-pretty leading-relaxed">
<p>Ya lo sabes. Depender del boca a boca, del inbound lento o de esperar al próximo evento para estrechar la mano de un prospecto es una forma muy arriesgada de gestionar el crecimiento de tu empresa. Genera un pipeline impredecible.</p>
<p>Tienes una oferta validada, un ticket alto y una buena tasa de cierre, pero te falta un mecanismo predecible y automatizado para poner esa oferta delante de los CEOs, CFOs y Directores adecuados cada día.</p>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
<div className="p-6 border border-[#2E3038] rounded-[14px] bg-[#0F0F11]">
<h3 className="text-[#E3E4E9] font-medium text-lg mb-2 flex items-center gap-2">
<iconify-icon className="text-[#BE98C7]" icon="solar:user-cross-linear" style={{strokeWidth: '1.5'}}></iconify-icon> Opción 1: SDR Interno
                        </h3>
<p className="text-sm text-[#ABAEBB]">Navegar por la legislación laboral, asumir 40k-60k€ en costes, y esperar 6 meses de ramp-up. Riesgo total.</p>
</div>
<div className="p-6 border border-[#2E3038] rounded-[14px] bg-[#0F0F11]">
<h3 className="text-[#E3E4E9] font-medium text-lg mb-2 flex items-center gap-2">
<iconify-icon className="text-[#BE98C7]" icon="solar:buildings-linear" style={{strokeWidth: '1.5'}}></iconify-icon> Opción 2: Agencia Tradicional
                        </h3>
<p className="text-sm text-[#ABAEBB]">Retainers fijos de 3k-7k€/mes pagando por "esfuerzo" y promesas, sin garantías de reuniones en tu calendario.</p>
</div>
</div>
<p className="text-[#E3E4E9] font-medium">Eres un fundador o director comercial, no un técnico de entregabilidad de correo electrónico. Tu tiempo debería estar en cerrar contratos, no en gestionar infraestructura.</p>
</div>
<div className="mt-12 pt-8 border-t border-[#2E3038]">
<p className="text-xs text-[#818EBC] uppercase tracking-wide mb-4 font-medium">Infraestructura especializada para nichos complejos:</p>
<div className="flex flex-wrap gap-3">
<span className="px-3 py-1.5 bg-[#0F0F11] border border-[#2E3038] rounded-[4px] text-xs text-[#E3E4E9]">Ciberseguridad (NIS2/DORA)</span>
<span className="px-3 py-1.5 bg-[#0F0F11] border border-[#2E3038] rounded-[4px] text-xs text-[#E3E4E9]">HR SaaS</span>
<span className="px-3 py-1.5 bg-[#0F0F11] border border-[#2E3038] rounded-[4px] text-xs text-[#E3E4E9]">Financiación I+D+i</span>
<span className="px-3 py-1.5 bg-[#0F0F11] border border-[#2E3038] rounded-[4px] text-xs text-[#E3E4E9]">Automatización Industrial</span>
</div>
</div>
</div>
</section>
<section className="py-24 lg:py-32 bg-[#0F0F11] relative">
<div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#2E3038] to-transparent"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-[#818EBC]/10 border border-[#818EBC]/20 text-[#818EBC] text-xs font-medium uppercase tracking-wider mb-4">
                    La Tercera Opción
                </div>
<h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#FFFFFF] max-w-3xl mx-auto">
                    Abstracción Técnica Total. Resultados Garantizados.
                </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="group bg-[#111112] border border-[#2E3038] rounded-[14px] p-8 relative overflow-hidden">
<div className="w-12 h-12 rounded-lg bg-[#0F0F11] border border-[#2E3038] flex items-center justify-center text-[#5BA992] mb-6">
<iconify-icon className="text-2xl" icon="solar:chart-square-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-2xl font-medium text-[#FFFFFF] tracking-tight mb-3">Reduce tu CAC hasta un 75%</h3>
<p className="text-[#ABAEBB] text-base leading-relaxed">El estándar europeo es de 500-1.000€ por reunión agendada. Entregamos decisores cualificados por solo <span className="text-[#E3E4E9] font-medium">250€ por reunión celebrada</span>. Eliminas retainers sin sacrificar calidad.</p>
</div>
<div className="group bg-[#111112] border border-[#2E3038] rounded-[14px] p-8 relative overflow-hidden">
<div className="w-12 h-12 rounded-lg bg-[#0F0F11] border border-[#2E3038] flex items-center justify-center text-[#BE98C7] mb-6">
<iconify-icon className="text-2xl" icon="solar:rocket-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-2xl font-medium text-[#FFFFFF] tracking-tight mb-3">Evita la Rigidez Laboral</h3>
<p className="text-[#ABAEBB] text-base leading-relaxed">Contratar un SDR implica +40.000€ y 6 meses de rampa. Conéctate a una máquina outbound completamente operativa en <span className="text-[#E3E4E9] font-medium">solo 14 días</span>, sin añadir nóminas ni riesgos.</p>
</div>
<div className="group bg-[#111112] border border-[#2E3038] rounded-[14px] p-8 relative overflow-hidden">
<div className="w-12 h-12 rounded-lg bg-[#0F0F11] border border-[#2E3038] flex items-center justify-center text-[#818EBC] mb-6">
<iconify-icon className="text-2xl" icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-2xl font-medium text-[#FFFFFF] tracking-tight mb-3">Protección de Reputación</h3>
<p className="text-[#ABAEBB] text-base leading-relaxed">IA para hiper-personalización. Rotación automatizada garantizando menos de 30 correos diarios por dominio para mantener <span className="text-[#E3E4E9] font-medium">tu marca intacta</span>.</p>
</div>
<div className="group bg-[#111112] border border-[#2E3038] rounded-[14px] p-8 relative overflow-hidden">
<div className="w-12 h-12 rounded-lg bg-[#0F0F11] border border-[#2E3038] flex items-center justify-center text-[#E3E4E9] mb-6">
<iconify-icon className="text-2xl" icon="solar:settings-minimalistic-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-2xl font-medium text-[#FFFFFF] tracking-tight mb-3">Abstracción Técnica Total</h3>
<p className="text-[#ABAEBB] text-base leading-relaxed">No configures SPF/DKIM/DMARC ni hagas scraping. Nosotros gestionamos el 100% de los inputs técnicos. Tú solo gestionas el output: <span className="text-[#E3E4E9] font-medium">las reuniones</span>.</p>
</div>
</div>
</div>
</section>
<section className="py-24 lg:py-32 bg-[#111112]">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-[#FFFFFF] mb-16 text-center">La Arquitectura del Sistema</h2>
<div className="space-y-0 relative before:absolute before:inset-0 before:ml-[23px] md:before:ml-[39px] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-px before:bg-gradient-to-b before:from-transparent before:via-[#2E3038] before:to-transparent">
<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group py-8">
<div className="flex items-center justify-center w-12 h-12 rounded-full border border-[#2E3038] bg-[#0F0F11] text-[#BE98C7] font-medium text-xl shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_0_8px_#111112] z-10">1</div>
<div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-6 bg-[#0F0F11] border border-[#2E3038] rounded-[14px]">
<h3 className="text-xl font-medium text-[#FFFFFF] tracking-tight mb-2">Segmentación IA</h3>
<p className="text-sm text-[#ABAEBB] mb-3"><span className="text-[#E3E4E9] font-medium text-xs uppercase tracking-wider block mb-1">Qué ocurre</span> Scraping del mercado para BD ultra-segmentadas de decisores con tasa de rebote &lt;1%.</p>
<p className="text-sm text-[#ABAEBB]"><span className="text-[#BE98C7] font-medium text-xs uppercase tracking-wider block mb-1">Por qué importa</span> Dejas de perder tiempo y llegas a quien firma cheques de +10k€.</p>
</div>
</div>
<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group py-8">
<div className="flex items-center justify-center w-12 h-12 rounded-full border border-[#2E3038] bg-[#0F0F11] text-[#BE98C7] font-medium text-xl shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_0_8px_#111112] z-10">2</div>
<div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-6 bg-[#0F0F11] border border-[#2E3038] rounded-[14px]">
<h3 className="text-xl font-medium text-[#FFFFFF] tracking-tight mb-2">Infraestructura Horizontal</h3>
<p className="text-sm text-[#ABAEBB] mb-3"><span className="text-[#E3E4E9] font-medium text-xs uppercase tracking-wider block mb-1">Qué ocurre</span> Compramos 10-20 dominios, configuramos 50-100 inboxes y ejecutamos warmup de 14 días.</p>
<p className="text-sm text-[#ABAEBB]"><span className="text-[#BE98C7] font-medium text-xs uppercase tracking-wider block mb-1">Por qué importa</span> Tus correos evitan el spam y aterrizan en la bandeja principal.</p>
</div>
</div>
<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group py-8">
<div className="flex items-center justify-center w-12 h-12 rounded-full border border-[#2E3038] bg-[#0F0F11] text-[#BE98C7] font-medium text-xl shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_0_8px_#111112] z-10">3</div>
<div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-6 bg-[#0F0F11] border border-[#2E3038] rounded-[14px]">
<h3 className="text-xl font-medium text-[#FFFFFF] tracking-tight mb-2">Mensajería IA &amp; Volumen</h3>
<p className="text-sm text-[#ABAEBB] mb-3"><span className="text-[#E3E4E9] font-medium text-xs uppercase tracking-wider block mb-1">Qué ocurre</span> 4-6 secuencias personalizadas por mes con rotación enviando hasta 200k correos en 60 días.</p>
<p className="text-sm text-[#ABAEBB]"><span className="text-[#BE98C7] font-medium text-xs uppercase tracking-wider block mb-1">Por qué importa</span> Alcance masivo sin perder el enfoque B2B de "tú a tú".</p>
</div>
</div>
<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group py-8">
<div className="flex items-center justify-center w-12 h-12 rounded-full border border-[#2E3038] bg-[#0F0F11] text-[#BE98C7] font-medium text-xl shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_0_8px_#111112] z-10">4</div>
<div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-6 border border-[#5BA992]/30 bg-[#5BA992]/5 rounded-[14px]">
<h3 className="text-xl font-medium text-[#FFFFFF] tracking-tight mb-2">Agendado Directo</h3>
<p className="text-sm text-[#ABAEBB] mb-3"><span className="text-[#E3E4E9] font-medium text-xs uppercase tracking-wider block mb-1">Qué ocurre</span> SDRs gestionan respuestas, cualifican y agendan en tu calendario.</p>
<p className="text-sm text-[#ABAEBB]"><span className="text-[#5BA992] font-medium text-xs uppercase tracking-wider block mb-1">Por qué importa</span> Cero fricción. Abres el calendario y cierras contratos.</p>
</div>
</div>
</div>
</div>
</section>
<section className="py-24 lg:py-32 bg-[#0F0F11]">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
<div>
<h2 className="text-3xl font-medium tracking-tight text-[#FFFFFF] mb-8">El Filtro Lógico</h2>
<div className="space-y-1">
<div className="border-b border-[#2E3038]">
<button className="w-full flex justify-between items-center py-5 text-left">
<span className="text-lg font-medium text-[#E3E4E9] pr-4">"Aunque ya hemos probado el cold email..."</span>
<iconify-icon className="text-2xl text-[#ABAEBB]" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
<div className="border-b border-[#2E3038]">
<button className="w-full flex justify-between items-center py-5 text-left">
<span className="text-lg font-medium text-[#E3E4E9] pr-4">"Sin pagar miles por adelantado..."</span>
<iconify-icon className="text-2xl text-[#ABAEBB]" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
<div className="border-b border-[#2E3038]">
<button className="w-full flex justify-between items-center py-5 text-left">
<span className="text-lg font-medium text-[#E3E4E9] pr-4">"Aunque nuestro sector sea muy técnico..."</span>
<iconify-icon className="text-2xl text-[#ABAEBB]" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
<div className="border-b border-[#2E3038]">
<button className="w-full flex justify-between items-center py-5 text-left">
<span className="text-lg font-medium text-[#E3E4E9] pr-4">"Y mi reputación de dominio principal..."</span>
<iconify-icon className="text-2xl text-[#ABAEBB]" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</div>
</div>
<div className="bg-[#111112] border border-[#2E3038] rounded-[14px] p-8 lg:p-10 shadow-2xl relative">
<div className="absolute top-0 left-10 w-20 h-px bg-[#5BA992]"></div>
<div className="text-xs text-[#818EBC] font-medium uppercase tracking-wider mb-2">Stack de Infraestructura</div>
<h3 className="text-2xl font-medium text-[#FFFFFF] tracking-tight mb-8">Outbound Enterprise Build</h3>
<ul className="space-y-4 mb-10">
<li className="flex items-start gap-3"><iconify-icon className="text-[#5BA992] text-xl shrink-0 mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon><span className="text-sm text-[#E3E4E9]"><strong className="font-medium">Ingeniería de Datos:</strong> BD verificada de decisores.</span></li>
<li className="flex items-start gap-3"><iconify-icon className="text-[#5BA992] text-xl shrink-0 mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon><span className="text-sm text-[#E3E4E9]"><strong className="font-medium">Infraestructura Enterprise:</strong> dominios, inboxes y autenticación.</span></li>
<li className="flex items-start gap-3"><iconify-icon className="text-[#5BA992] text-xl shrink-0 mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon><span className="text-sm text-[#E3E4E9]"><strong className="font-medium">Protección Automatizada:</strong> warmup y rotación diaria.</span></li>
<li className="flex items-start gap-3"><iconify-icon className="text-[#5BA992] text-xl shrink-0 mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon><span className="text-sm text-[#E3E4E9]"><strong className="font-medium">Copywriting IA:</strong> secuencias con testing continuo.</span></li>
<li className="flex items-start gap-3"><iconify-icon className="text-[#5BA992] text-xl shrink-0 mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon><span className="text-sm text-[#E3E4E9]"><strong className="font-medium">Gestión de Inbox:</strong> cualificación y respuesta.</span></li>
<li className="flex items-start gap-3"><iconify-icon className="text-[#5BA992] text-xl shrink-0 mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon><span className="text-sm text-[#E3E4E9]"><strong className="font-medium">Agendado Directo:</strong> fricción cero hacia tu calendario.</span></li>
</ul>
<button className="w-full bg-[#FFFFFF] text-[#0F0F11] font-medium py-3 rounded-[4px] hover:bg-[#E3E4E9] transition-colors text-sm">
                        Solicitar Análisis de Setup
                    </button>
</div>
</div>
</div>
</section>
<section className="py-16 lg:py-24 bg-[#0F0F11]">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<div className="inline-block border border-[#5BA992]/40 bg-[#111112] rounded-[14px] p-8 md:p-12 relative overflow-hidden" style={{boxShadow: '0 0 20px rgba(91, 169, 146, 0.15)'}}>
<div className="absolute inset-0 bg-gradient-to-b from-[#5BA992]/5 to-transparent pointer-events-none"></div>
<div className="flex justify-center mb-6">
<div className="w-16 h-16 bg-[#0F0F11] border border-[#5BA992]/30 rounded-full flex items-center justify-center text-[#5BA992]">
<iconify-icon className="text-3xl" icon="solar:shield-star-bold"></iconify-icon>
</div>
</div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-[#FFFFFF] mb-4">Garantía "Solo Pagas por Reuniones Celebradas"</h2>
<p className="text-base text-[#ABAEBB] leading-relaxed max-w-2xl mx-auto mb-2 text-pretty">
                    No pagas un retainer mensual. No pagas por "leads". No pagas siquiera por reuniones agendadas que no se presentan. Solo pagas una performance fee de <strong className="text-[#E3E4E9] font-medium">250 € por reunión con un decisor cualificado que efectivamente se celebra</strong>.
                </p>
<p className="text-sm text-[#ABAEBB] mb-0 max-w-2xl mx-auto">
                    Nosotros asumimos el riesgo operativo para que tú no tengas que hacerlo.
                </p>
<p className="text-xs text-[#2E3038] mt-6 italic">*Sujeto a estipulaciones de LTV mínimo y asistencia.</p>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-[#111112] border-y border-[#2E3038]">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-14">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#2E3038] bg-[#0F0F11] text-[#818EBC] text-xs font-medium uppercase tracking-wider mb-4">
<iconify-icon icon="solar:calculator-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                    Calculadora ROI
                </div>
<h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#FFFFFF] mb-4">Proyecta el retorno de tu sistema outbound</h2>
<p className="text-base sm:text-lg text-[#ABAEBB] max-w-3xl mx-auto">Una vista clara y profesional de resultados potenciales, adaptada a nuestro modelo de adquisición por reuniones celebradas.</p>
</div>
<div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

<div className="bg-[#0F0F11] border border-[#2E3038] rounded-[14px] p-6">
<div className="mb-6">
<h3 className="text-xl font-medium tracking-tight text-[#FFFFFF] flex items-center gap-2">
<iconify-icon className="text-[#5BA992]" icon="solar:settings-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                            Variables de campaña
                        </h3>
<p className="text-sm text-[#ABAEBB] mt-2">Configura el volumen de outreach y los supuestos principales.</p>
</div>
<div className="space-y-5">
<div>
<div className="flex items-center justify-between mb-2">
<label className="text-sm text-[#E3E4E9]">Plan</label>
<span className="text-xs text-[#ABAEBB]">Estándar</span>
</div>
<div className="relative">
<select className="w-full appearance-none bg-[#111112] border border-[#2E3038] rounded-[8px] text-sm text-[#E3E4E9] px-4 py-3 pr-10 focus:outline-none">
<option>Estándar — 5.000 emails/día</option>
<option>Mínimo — 2.500 emails/día</option>
<option>Elite — 12.000 emails/día</option>
</select>
<iconify-icon className="absolute right-3 top-1/2 -translate-y-1/2 text-[#ABAEBB]" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
<div>
<div className="flex items-center justify-between mb-2">
<label className="text-sm text-[#E3E4E9]">Emails por día</label>
<span className="text-sm text-[#FFFFFF] font-medium">5.000</span>
</div>
<div className="h-2 w-full rounded-full bg-[#1A1B1F] border border-[#2E3038] overflow-hidden">
<div className="h-full w-[38%] rounded-full bg-[#5BA992]"></div>
</div>
<p className="text-xs text-[#ABAEBB] mt-2">~105.000 contactos únicos | ~210.000 emails en 60 días</p>
</div>
<div className="border-t border-[#2E3038] pt-5">
<div className="flex items-center justify-between mb-2">
<label className="text-sm text-[#E3E4E9]">Tasa de respuesta</label>
<span className="text-xs text-[#818EBC]">Promedio cliente</span>
</div>
<div className="relative">
<select className="w-full appearance-none bg-[#111112] border border-[#2E3038] rounded-[8px] text-sm text-[#E3E4E9] px-4 py-3 pr-10 focus:outline-none">
<option>Promedio cliente (2,3%)</option>
<option>Top performer (3,2%)</option>
<option>Conservador (0,5%)</option>
<option>Personalizado</option>
</select>
<iconify-icon className="absolute right-3 top-1/2 -translate-y-1/2 text-[#ABAEBB]" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
<div>
<div className="flex items-center justify-between mb-2">
<label className="text-sm text-[#E3E4E9]">Tasa de respuesta positiva</label>
<span className="inline-flex items-center rounded-full border border-[#5BA992]/20 bg-[#5BA992]/10 px-2 py-1 text-xs text-[#5BA992]">Media real</span>
</div>
<div className="relative">
<select className="w-full appearance-none bg-[#111112] border border-[#2E3038] rounded-[8px] text-sm text-[#E3E4E9] px-4 py-3 pr-10 focus:outline-none">
<option>Promedio cliente (23,4%)</option>
<option>Top performer (42,1%)</option>
<option>Conservador (13%)</option>
</select>
<iconify-icon className="absolute right-3 top-1/2 -translate-y-1/2 text-[#ABAEBB]" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<p className="text-xs text-[#ABAEBB] mt-2">% de respuestas que terminan en lead interesado</p>
</div>
<div className="border-t border-[#2E3038] pt-5">
<div className="flex items-center justify-between mb-3">
<span className="text-sm text-[#E3E4E9]">Variables de oferta</span>
<button className="relative inline-flex h-6 w-11 items-center rounded-full border border-[#2E3038] bg-[#1A1B1F]">
<span className="inline-block h-4 w-4 translate-x-1 rounded-full bg-[#ABAEBB]"></span>
</button>
</div>
<p className="text-xs text-[#ABAEBB] mb-4">Activa esta opción para personalizar la calidad percibida de tu oferta.</p>
<div className="space-y-3 opacity-70">
<div className="flex items-center justify-between rounded-[8px] border border-[#2E3038] bg-[#111112] px-3 py-3">
<span className="text-sm text-[#E3E4E9]">Product-market fit claro <span className="text-[#5BA992]">(+7,5%)</span></span>
<button className="relative inline-flex h-5 w-9 items-center rounded-full border border-[#2E3038] bg-[#5BA992]/20">
<span className="inline-block h-3.5 w-3.5 translate-x-4 rounded-full bg-[#5BA992]"></span>
</button>
</div>
<div className="flex items-center justify-between rounded-[8px] border border-[#2E3038] bg-[#111112] px-3 py-3">
<span className="text-sm text-[#E3E4E9]">Claims específicos <span className="text-[#5BA992]">(+15%)</span></span>
<button className="relative inline-flex h-5 w-9 items-center rounded-full border border-[#2E3038] bg-[#5BA992]/20">
<span className="inline-block h-3.5 w-3.5 translate-x-4 rounded-full bg-[#5BA992]"></span>
</button>
</div>
<div className="flex items-center justify-between rounded-[8px] border border-[#2E3038] bg-[#111112] px-3 py-3">
<span className="text-sm text-[#E3E4E9]">Garantía o reversión de riesgo <span className="text-[#5BA992]">(+10%)</span></span>
<button className="relative inline-flex h-5 w-9 items-center rounded-full border border-[#2E3038] bg-[#1A1B1F]">
<span className="inline-block h-3.5 w-3.5 translate-x-1 rounded-full bg-[#ABAEBB]"></span>
</button>
</div>
</div>
</div>
</div>
</div>

<div className="bg-[#111112] border border-[#2E3038] rounded-[14px] p-6">
<div className="mb-6">
<h3 className="text-xl font-medium tracking-tight text-[#FFFFFF] flex items-center gap-2">
<iconify-icon className="text-[#818EBC]" icon="solar:chart-2-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                            Resultados proyectados
                        </h3>
<p className="text-sm text-[#ABAEBB] mt-2">Estimación visual del rendimiento durante 60 días de campaña.</p>
</div>
<div className="space-y-3 mb-6">
<div className="flex items-center justify-between rounded-[10px] border border-[#2E3038] bg-[#0F0F11] px-4 py-3">
<span className="text-sm text-[#ABAEBB]">Emails enviados (60 días)</span>
<span className="text-base font-medium text-[#FFFFFF]">210.000</span>
</div>
<div className="flex items-center justify-between rounded-[10px] border border-[#2E3038] bg-[#0F0F11] px-4 py-3">
<span className="text-sm text-[#ABAEBB]">Personas contactadas</span>
<span className="text-base font-medium text-[#FFFFFF]">105.000</span>
</div>
<div className="flex items-center justify-between rounded-[10px] border border-[#2E3038] bg-[#0F0F11] px-4 py-3">
<span className="text-sm text-[#ABAEBB]">Respuestas totales</span>
<span className="text-base font-medium text-[#FFFFFF]">2.415</span>
</div>
<div className="flex items-center justify-between rounded-[10px] border border-[#5BA992]/30 bg-[#5BA992]/5 px-4 py-3">
<span className="text-sm text-[#E3E4E9]">Leads interesados</span>
<span className="text-base font-medium text-[#FFFFFF]">565</span>
</div>
</div>
<div className="border-t border-[#2E3038] pt-6">
<div className="flex items-center gap-2 mb-4">
<iconify-icon className="text-[#BE98C7]" icon="solar:tuning-2-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm font-medium text-[#FFFFFF]">Performance del funnel</span>
</div>
<div className="space-y-5">
<div>
<div className="flex items-center justify-between mb-2">
<label className="text-sm text-[#E3E4E9]">Porcentaje de llamadas agendadas</label>
<span className="text-sm text-[#FFFFFF] font-medium">20%</span>
</div>
<div className="h-2 w-full rounded-full bg-[#1A1B1F] border border-[#2E3038] overflow-hidden">
<div className="h-full w-[20%] rounded-full bg-[#818EBC]"></div>
</div>
<p className="text-xs text-[#ABAEBB] mt-2">% de respuestas positivas que reservan llamada</p>
</div>
<div>
<div className="flex items-center justify-between mb-2">
<label className="text-sm text-[#E3E4E9]">Show rate</label>
<span className="text-sm text-[#FFFFFF] font-medium">80%</span>
</div>
<div className="h-2 w-full rounded-full bg-[#1A1B1F] border border-[#2E3038] overflow-hidden">
<div className="h-full w-[80%] rounded-full bg-[#BE98C7]"></div>
</div>
<p className="text-xs text-[#ABAEBB] mt-2">% de llamadas agendadas que se celebran</p>
</div>
<div>
<div className="flex items-center justify-between mb-2">
<label className="text-sm text-[#E3E4E9]">Tasa de cierre</label>
<span className="text-sm text-[#FFFFFF] font-medium">21%</span>
</div>
<div className="h-2 w-full rounded-full bg-[#1A1B1F] border border-[#2E3038] overflow-hidden">
<div className="h-full w-[21%] rounded-full bg-[#5BA992]"></div>
</div>
<p className="text-xs text-[#ABAEBB] mt-2">% de reuniones celebradas que terminan en cliente</p>
</div>
</div>
</div>
</div>

<div className="bg-[#0F0F11] border border-[#2E3038] rounded-[14px] p-6">
<div className="mb-6">
<h3 className="text-xl font-medium tracking-tight text-[#FFFFFF] flex items-center gap-2">
<iconify-icon className="text-[#5BA992]" icon="solar:wallet-money-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                            Economía y retorno
                        </h3>
<p className="text-sm text-[#ABAEBB] mt-2">Introduce tus variables económicas para estimar el impacto financiero.</p>
</div>
<div className="rounded-[12px] border border-[#2E3038] bg-[#111112] p-4 mb-6">
<div className="space-y-4">
<div>
<label className="block text-xs text-[#ABAEBB] mb-2">Frecuencia de facturación</label>
<div className="relative">
<select className="w-full appearance-none bg-[#0F0F11] border border-[#2E3038] rounded-[8px] text-sm text-[#E3E4E9] px-4 py-3 pr-10 focus:outline-none">
<option>Contrato anual</option>
<option>Mensual recurrente</option>
<option>Trimestral</option>
<option>Pago único</option>
</select>
<iconify-icon className="absolute right-3 top-1/2 -translate-y-1/2 text-[#ABAEBB]" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div>
<label className="block text-xs text-[#ABAEBB] mb-2">Ticket medio (€)</label>
<input className="w-full bg-[#0F0F11] border border-[#2E3038] rounded-[8px] text-sm text-[#E3E4E9] px-4 py-3 focus:outline-none" type="text" value="30.000"/>
</div>
<div>
<label className="block text-xs text-[#ABAEBB] mb-2">Retención media (meses)</label>
<input className="w-full bg-[#0F0F11] border border-[#2E3038] rounded-[8px] text-sm text-[#E3E4E9] px-4 py-3 focus:outline-none" type="text" value="12"/>
</div>
</div>
<div>
<label className="block text-xs text-[#ABAEBB] mb-2">Ciclo medio de venta</label>
<div className="relative">
<select className="w-full appearance-none bg-[#0F0F11] border border-[#2E3038] rounded-[8px] text-sm text-[#E3E4E9] px-4 py-3 pr-10 focus:outline-none">
<option>14 días</option>
<option>30 días</option>
<option>60 días</option>
<option>90 días</option>
</select>
<iconify-icon className="absolute right-3 top-1/2 -translate-y-1/2 text-[#ABAEBB]" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
<div className="flex items-center justify-between rounded-[8px] border border-[#2E3038] bg-[#0F0F11] px-4 py-3">
<span className="text-sm text-[#ABAEBB]">LTV calculado</span>
<span className="text-base font-medium text-[#FFFFFF]">30.000 €</span>
</div>
</div>
</div>
<div className="grid grid-cols-2 gap-3 mb-6">
<div className="rounded-[12px] border border-[#2E3038] bg-[#111112] p-4">
<div className="text-xs text-[#ABAEBB] uppercase tracking-wide mb-2">Reuniones</div>
<div className="text-2xl font-medium tracking-tight text-[#FFFFFF]">113</div>
</div>
<div className="rounded-[12px] border border-[#2E3038] bg-[#111112] p-4">
<div className="text-xs text-[#ABAEBB] uppercase tracking-wide mb-2">Asistidas</div>
<div className="text-2xl font-medium tracking-tight text-[#FFFFFF]">90</div>
</div>
<div className="rounded-[12px] border border-[#2E3038] bg-[#111112] p-4">
<div className="text-xs text-[#ABAEBB] uppercase tracking-wide mb-2">Clientes cerrados</div>
<div className="text-2xl font-medium tracking-tight text-[#FFFFFF]">19</div>
</div>
<div className="rounded-[12px] border border-[#2E3038] bg-[#111112] p-4">
<div className="text-xs text-[#ABAEBB] uppercase tracking-wide mb-2">CAC estimado</div>
<div className="text-2xl font-medium tracking-tight text-[#FFFFFF]">632 €</div>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
<div className="rounded-[12px] border border-[#2E3038] bg-[#111112] p-5">
<div className="text-xs text-[#ABAEBB] uppercase tracking-wide mb-2">Caja estimada en 60 días</div>
<div className="text-2xl font-medium tracking-tight text-[#5BA992]">570.000 €</div>
<p className="text-xs text-[#ABAEBB] mt-2">Basado en tu ciclo comercial</p>
</div>
<div className="rounded-[12px] border border-[#2E3038] bg-[#111112] p-5">
<div className="text-xs text-[#ABAEBB] uppercase tracking-wide mb-2">ROI estimado</div>
<div className="text-2xl font-medium tracking-tight text-[#5BA992]">47,5x</div>
<p className="text-xs text-[#ABAEBB] mt-2">Retorno inicial proyectado</p>
</div>
</div>
<div className="rounded-[14px] border border-[#5BA992]/30 bg-gradient-to-b from-[#5BA992]/8 to-transparent p-5">
<div className="flex items-center justify-between gap-4 mb-2">
<span className="text-sm font-medium text-[#FFFFFF]">Retorno estimado por cada 1 € invertido</span>
<span className="text-3xl font-medium tracking-tight text-[#FFFFFF]">47,5x</span>
</div>
<p className="text-sm text-[#ABAEBB]">Por cada <span className="text-[#E3E4E9]">1 €</span> invertido, la proyección indica un retorno de <span className="text-[#5BA992] font-medium">47,50 €</span>.</p>
</div>
</div>
</div>
</div>
</section>
<section className="py-24 lg:py-32 bg-[#111112]">
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="mb-24">
<h2 className="text-2xl font-medium tracking-tight text-[#FFFFFF] mb-8 text-center">Preguntas Frecuentes Técnicas</h2>
<div className="space-y-1">
<div className="border-b border-[#2E3038]">
<button className="w-full flex justify-between items-center py-4 text-left">
<span className="text-base font-medium text-[#E3E4E9] pr-4">¿Cuál es el coste total?</span>
<iconify-icon className="text-xl text-[#ABAEBB]" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
<div className="border-b border-[#2E3038]">
<button className="w-full flex justify-between items-center py-4 text-left">
<span className="text-base font-medium text-[#E3E4E9] pr-4">¿Qué es una "reunión celebrada"?</span>
<iconify-icon className="text-xl text-[#ABAEBB]" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
<div className="border-b border-[#2E3038]">
<button className="w-full flex justify-between items-center py-4 text-left">
<span className="text-base font-medium text-[#E3E4E9] pr-4">¿Requiere contrato a largo plazo?</span>
<iconify-icon className="text-xl text-[#ABAEBB]" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
<div className="border-b border-[#2E3038]">
<button className="w-full flex justify-between items-center py-4 text-left">
<span className="text-base font-medium text-[#E3E4E9] pr-4">¿Afectará al dominio de mi empresa?</span>
<iconify-icon className="text-xl text-[#ABAEBB]" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
<div className="border-b border-[#2E3038]">
<button className="w-full flex justify-between items-center py-4 text-left">
<span className="text-base font-medium text-[#E3E4E9] pr-4">¿Qué se requiere de mi parte?</span>
<iconify-icon className="text-xl text-[#ABAEBB]" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
<div className="border-b border-[#2E3038]">
<button className="w-full flex justify-between items-center py-4 text-left">
<span className="text-base font-medium text-[#E3E4E9] pr-4">¿Los correos se envían en español?</span>
<iconify-icon className="text-xl text-[#ABAEBB]" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</div>
</div>
<div className="text-center bg-[#0F0F11] border border-[#2E3038] rounded-[14px] p-8 sm:p-12">
<div className="flex justify-center mb-4">
<div className="px-3 py-1 bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-medium uppercase tracking-wider rounded">
                        Capacidad Limitada
                    </div>
</div>
<h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-[#FFFFFF] mb-4">Asegura tu Cuota Antes del Cierre Regulatorio</h2>
<p className="text-[#ABAEBB] text-sm sm:text-base leading-relaxed max-w-2xl mx-auto mb-8 text-balance">
                    Construir la máquina requiere 14 días estrictos de warmup técnico. Si operas en nichos como NIS2 o DORA, tus compradores deciden ahora. Solo incorporamos un <strong className="text-[#E3E4E9] font-medium">número limitado de clientes/mes</strong> para asegurar la calidad de gestión SDR.
                </p>
<button className="w-full sm:w-auto bg-[#5BA992] text-[#0F0F11] px-8 py-4 rounded-[4px] font-medium text-lg hover:bg-[#6BC0A7] hover:-translate-y-0.5 transition-all">
                    Reserva tu Slot de Construcción Hoy
                </button>
</div>
</div>
</section>
<footer className="bg-[#0F0F11] border-t border-[#2E3038] py-8 text-center text-xs text-[#ABAEBB]">
<div className="max-w-7xl mx-auto px-4">
<p>© 2024 RevProcess. Infraestructura Outbound B2B. </p></div></footer>
    </>
  );
}
