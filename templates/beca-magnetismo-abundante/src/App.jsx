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
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



!function (w, d, t) {
w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie","holdConsent","revokeConsent","grantConsent"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(
var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var r="https://analytics.tiktok.com/i18n/pixel/events.js",o=n&&n.partner;ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=r,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};n=document.createElement("script")
;n.type="text/javascript",n.async=!0,n.src=r+"?sdkid="+e+"&lib="+t;e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(n,e)};
ttq.load('D6HIRCJC77U0025UEKGG');
ttq.page();
}(window, document, 'ttq');



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        function toggleFaq(element) {
            document.querySelectorAll('.faq-item').forEach(item => { if (item !== element) item.classList.remove('active'); });
            element.classList.toggle('active');
        }
        const popup = document.getElementById('exit-popup');
        const popupContent = document.getElementById('popup-content');
        let popupShown = false;
        const showPopup = () => {
            if (popupShown) return;
            popupShown = true;
            popup.classList.remove('opacity-0', 'pointer-events-none');
            popupContent.classList.remove('scale-90');
            popupContent.classList.add('scale-100');
        };
        const closePopup = () => { popup.classList.add('opacity-0', 'pointer-events-none'); };
        document.addEventListener('mouseleave', (e) => { if (e.clientY < 0) showPopup(); });
        window.addEventListener('popstate', () => { if (!popupShown) showPopup(); });
    
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
      
<nav className="fixed top-0 w-full z-40 border-b border-white/5 bg-[#050505]/90 backdrop-blur-md">
<div className="flex h-14 max-w-6xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<div className="flex items-center gap-2 text-slate-100 tracking-tight font-medium">
<iconify-icon className="text-cyan-400" icon="solar:infinity-linear" width="20"></iconify-icon>
<span className="md:text-sm text-xs uppercase tracking-wider">Método Takashi Sato</span>
</div>
<div className="flex items-center gap-2">
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
<span className="text-[10px] font-medium text-green-400 uppercase tracking-wide">Beca de Acceso Disponible</span>
</div>
</div>
</nav>
<section className="overflow-hidden pt-24 pb-12 relative">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] mystic-gradient pointer-events-none opacity-60"></div>
<div className="z-10 text-center max-w-3xl mr-auto ml-auto pr-4 pl-4 relative">
<div className="mb-8 rounded-md shadow-[0_0_20px_rgba(245,158,11,0.3)]" style={{background: 'linear-gradient(90deg, #b45309 0%, #f59e0b 50%, #b45309 100%)', color: '#000', padding: '10px', textAlign: 'center', fontWeight: 'bold', fontSize: '13px', letterSpacing: '0.3px', width: '100%', lineHeight: '1.4'}}>
                ⚠️ ATENCIÓN: Solo se han liberado 100 cupos para la activación de frecuencia 2026.
                <span className="block text-[11px] font-medium mt-1 uppercase opacity-90">Verifica disponibilidad antes de que expire el video</span>
</div>
<h1 className="md:text-5xl text-3xl font-bold text-slate-50 tracking-tight mb-6 leading-[1.1]">
<span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-cyan-100 to-amber-200">¿Tus manos son una antena magnética apagada?</span>
</h1>
<p className="leading-relaxed md:text-lg text-base font-light text-slate-300 max-w-2xl mx-auto mb-8">
                Descubre cómo <span className="text-cyan-400 font-medium italic">Takashi Sato</span> utiliza la Bio-Acústica y el Magnetismo Manual para sintonizar con la abundancia que el 99% ignora.
            </p>
<div className="overflow-hidden shadow-cyan-900/20 aspect-video group bg-black w-full border-white/10 border rounded-xl mb-8 relative shadow-2xl">


<wistia-player aspect="1.7777777777777777" media-id="wt54hysgoj" unique-id="wistia-wt54hysgoj-98"></wistia-player>
</div>
<div className="max-w-md mx-auto">
<a className="block w-full py-5 bg-gradient-to-r from-cyan-600 to-cyan-400 hover:scale-105 text-white font-bold tracking-widest rounded-xl shadow-[0_0_35px_-5px_rgba(6,182,212,0.6)] transition-all text-center md:text-xl text-lg animate-pulse" href="https://pay.hotmart.com/D101836474N?checkoutMode=6&amp;off=whc7xvx1&amp;offDiscount=BECAREACTIVA2">
                    ACTIVAR MI ANTENA AHORA
                </a>
<p className="mt-4 text-[11px] text-slate-500 uppercase tracking-widest">Inversión única. Acceso inmediato de por vida.</p>
</div>
</div>
</section>
<section className="py-20 bg-[#080808] border-y border-white/5">
<div className="max-w-5xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-12 items-center">
<div className="glass-card p-8 rounded-3xl border-red-500/20">
<h3 className="text-red-400 text-xs font-bold uppercase tracking-widest mb-4">El camino del 99% (Frecuencia Muerta)</h3>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-sm text-slate-400">
<iconify-icon className="text-red-500" icon="solar:close-circle-bold"></iconify-icon> Trabajar más horas solo para pagar deudas.
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-400">
<iconify-icon className="text-red-500" icon="solar:close-circle-bold"></iconify-icon> El dinero "se escapa" por fugas energéticas.
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-400">
<iconify-icon className="text-red-500" icon="solar:close-circle-bold"></iconify-icon> Sentirse invisible para la prosperidad.
                        </li>
</ul>
</div>
<div className="glass-card p-8 rounded-3xl border-cyan-500/30 shadow-[0_0_40px_-10px_rgba(6,182,212,0.2)]">
<h3 className="text-cyan-400 text-xs font-bold uppercase tracking-widest mb-4">El Código Takashi Sato (Sintonía)</h3>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-sm text-slate-200 font-medium">
<iconify-icon className="text-cyan-400" icon="solar:check-circle-bold"></iconify-icon> Atraer oportunidades sin esfuerzo físico brutal.
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-200 font-medium">
<iconify-icon className="text-cyan-400" icon="solar:check-circle-bold"></iconify-icon> Manos que actúan como imanes de valor.
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-200 font-medium">
<iconify-icon className="text-cyan-400" icon="solar:check-circle-bold"></iconify-icon> Calma mental y claridad financiera total.
                        </li>
</ul>
</div>
</div>
</div>
</section>
<section className="py-20 bg-[#050505]">
<div className="max-w-4xl mx-auto px-6">
<div className="text-center mb-12">
<h2 className="text-3xl font-bold text-white mb-4 italic">"Mis manos nunca volvieron a estar frías..."</h2>
<p className="text-slate-400 font-light">Mira lo que sucede cuando activas el magnetismo somático:</p>
</div>
<div className="overflow-hidden rounded-2xl border border-white/10 shadow-2xl">

<wistia-player aspect="1.7777777777777777" media-id="b640tetbav"></wistia-player>
</div>
</div>
</section>
<section className="py-16 bg-[#050505] relative overflow-hidden">
<div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
<div>
<div className="inline-flex items-center gap-2 text-cyan-400 text-[10px] font-bold tracking-wide mb-4 border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 rounded-full uppercase">
                    Transparencia Total
                </div>
<h2 className="text-3xl font-bold text-white tracking-tight mb-4">Entra en el Templo Digital de Takashi</h2>
<p className="text-base font-light text-slate-300 mb-6 leading-relaxed">
                    Te mostramos la plataforma de entrenamiento diseñada por <span className="text-white font-semibold">Takashi Sato</span>. Contraste puro: mientras otros leen libros vacíos, tú activas frecuencias reales.
                </p>
<div className="space-y-4 mb-8">
<div className="flex items-start gap-3">
<div className="bg-cyan-900/30 p-2 rounded-lg text-cyan-400"><iconify-icon icon="solar:shield-up-linear"></iconify-icon></div>
<div>
<h4 className="text-base font-medium text-slate-100">Impacto Cerebral Profundo</h4>
<p className="text-xs text-slate-500 italic">Audios procesados en frecuencias Delta y Alpha para sellar el magnetismo.</p>
</div>
</div>
</div>
</div>
<div className="relative w-[280px] md:w-[320px] mx-auto aspect-[9/16] rounded-3xl overflow-hidden border-[6px] border-[#1a1a1a] shadow-2xl bg-black">

<wistia-player aspect="0.5625" media-id="xz7cmvadye"></wistia-player>
</div>
</div>
</section>
<section className="py-20 relative border-t border-white/5 bg-[#0A0A0A]">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-16">
<span className="text-amber-400 text-[10px] font-bold tracking-[0.2em] uppercase mb-4 block">La Ruta del Despertar</span>
<h2 className="text-3xl md:text-4xl font-bold text-white">Los 19 Días que lo Cambian Todo</h2>
</div>
<div className="grid md:grid-cols-3 gap-8">
<div className="glass-card rounded-3xl p-8 hover:border-cyan-500/50 transition-all duration-500">
<div className="text-4xl font-bold text-cyan-500/20 mb-4">01</div>
<h3 className="text-xl font-bold text-white mb-3">Eliminación de Estática</h3>
<p className="text-sm font-light text-slate-400 leading-relaxed italic">"Apaga el ruido mental que repele la abundancia."</p>
</div>
<div className="glass-card rounded-3xl p-8 border-cyan-500/40 transform md:-translate-y-4 shadow-xl">
<div className="text-4xl font-bold text-cyan-500/20 mb-4">02</div>
<h3 className="text-xl font-bold text-white mb-3">Configuración Manual</h3>
<p className="text-sm font-light text-slate-400 leading-relaxed italic">"Los mudras que Takashi usa para sintonizar."</p>
</div>
<div className="glass-card rounded-3xl p-8 hover:border-cyan-500/50 transition-all duration-500">
<div className="text-4xl font-bold text-cyan-500/20 mb-4">03</div>
<h3 className="text-xl font-bold text-white mb-3">Recepción de Señal</h3>
<p className="text-sm font-light text-slate-400 leading-relaxed italic">"Sella tu nuevo magnetismo de forma permanente."</p>
</div>
</div>
</div>
</section>
<section className="py-16 bg-[#080808] border-y border-white/5">
<div className="max-w-3xl mx-auto px-6 text-center">
<iconify-icon className="text-5xl text-amber-500 mb-6" icon="solar:verified-check-bold"></iconify-icon>
<h2 className="text-2xl font-bold text-white mb-4">Garantía Takashi Sato: Cero Riesgo</h2>
<p className="text-slate-400 font-light leading-relaxed">
                Si en los próximos **7 días** no sientes un cambio real en tu energía, te devolvemos cada centavo. En el Método Sato, el único riesgo es quedarte como estás ahora.
            </p>
</div>
</section>
<section className="py-24 bg-[#050505] relative" id="offer">
<div className="max-w-2xl mx-auto px-6 text-center">
<h2 className="text-3xl font-bold text-white mb-12">Empieza a Emitir Hoy</h2>
<div className="md:p-12 glass-card rounded-[3rem] border-cyan-500/30 relative overflow-hidden">
<div className="absolute top-0 left-0 w-full bg-cyan-500/10 py-3 text-center border-b border-cyan-500/20">
<span className="text-[10px] font-bold text-cyan-300 uppercase tracking-[0.3em]">Acceso de Por Vida - Pago Único</span>
</div>
<div className="mt-12 text-slate-500 line-through text-lg font-light">$39.99 USD</div>
<div className="flex items-center justify-center gap-4 mb-4">
<span className="md:text-7xl text-6xl font-black text-white">$14.99</span>
<div className="text-left">
<span className="text-lg font-bold text-cyan-400 block tracking-tight">SOLO HOY</span>
<span className="text-sm font-light text-slate-400">Dólares USD</span>
</div>
</div>
<p className="text-xs text-amber-400 mb-10 font-bold uppercase tracking-widest animate-bounce">¡Beca Reactivada por Alta Demanda!</p>
<a className="block w-full py-5 bg-gradient-to-r from-cyan-600 to-cyan-400 hover:scale-105 text-white font-bold tracking-widest rounded-xl shadow-[0_0_35px_-5px_rgba(6,182,212,0.6)] transition-all text-center md:text-xl text-lg animate-pulse" href="https://pay.hotmart.com/D101836474N?checkoutMode=6&amp;off=whc7xvx1&amp;offDiscount=BECAREACTIVA2">
                    QUIERO MI ACCESO AL MÉTODO SATO
                </a>
<div className="mt-8 flex justify-center gap-6 opacity-40 grayscale">
<img className="h-5" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/2560px-Stripe_Logo%2C_revised_2016.svg.png"/>
<img className="h-5" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/2560px-PayPal.svg.png"/>
</div>
</div>
</div>
</section>
<section className="py-20 bg-[#050505] border-t border-white/5">
<div className="max-w-2xl mx-auto px-6">
<h2 className="text-2xl font-bold text-white text-center mb-10">Dudas de Frecuencia</h2>
<div className="space-y-4">
<div className="faq-item glass-card rounded-2xl cursor-pointer" onclick="toggleFaq(this)">
<div className="p-5 flex items-center justify-between text-slate-100">
<span className="font-bold text-sm">¿Necesito experiencia previa en meditación?</span>
<iconify-icon className="faq-icon" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<div className="faq-content">
<div className="px-5 pb-5 text-sm font-light text-slate-400">
                            No. El Método Takashi Sato es un proceso bio-acústico y somático. No necesitas "poner la mente en blanco", los audios y las posiciones manuales hacen el trabajo por ti.
                        </div>
</div>
</div>
<div className="faq-item glass-card rounded-2xl cursor-pointer" onclick="toggleFaq(this)">
<div className="p-5 flex items-center justify-between text-slate-100">
<span className="font-bold text-sm">¿Cuánto tiempo al día debo dedicarle?</span>
<iconify-icon className="faq-icon" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<div className="faq-content">
<div className="px-5 pb-5 text-sm font-light text-slate-400">
                            Solo necesitas entre 10 y 15 minutos diarios durante 19 días consecutivos para completar la recalibración de tu antena magnética.
                        </div>
</div>
</div>
<div className="faq-item glass-card rounded-2xl cursor-pointer" onclick="toggleFaq(this)">
<div className="p-5 flex items-center justify-between text-slate-100">
<span className="font-bold text-sm">¿Cómo recibo el acceso?</span>
<iconify-icon className="faq-icon" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<div className="faq-content">
<div className="px-5 pb-5 text-sm font-light text-slate-400">
                            Inmediatamente después del pago, recibirás un correo electrónico con tus credenciales para entrar al Templo Digital (Hotmart) y comenzar hoy mismo.
                        </div>
</div>
</div>
<div className="faq-item glass-card rounded-2xl cursor-pointer" onclick="toggleFaq(this)">
<div className="p-5 flex items-center justify-between text-slate-100">
<span className="font-bold text-sm">¿Y si no siento el cambio magnético?</span>
<iconify-icon className="faq-icon" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<div className="faq-content">
<div className="px-5 pb-5 text-sm font-light text-slate-400">
                            Cuentas con una Garantía de 7 días. Si sientes que tu frecuencia no ha cambiado, solicitas el reembolso y se te devuelve el 100% de tu inversión.
                        </div>
</div>
</div>
</div>
</div>
</section>
<footer className="text-center py-12 border-t border-white/5">
<p className="text-[10px] uppercase tracking-widest font-bold text-neutral-600 italic">© 2026 Método Takashi Sato | Sabiduría Ancestral &amp; Bio-Acústica</p>
</footer>
<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md opacity-0 pointer-events-none transition-all duration-500 px-4" id="exit-popup">
<div className="relative w-full max-w-md glass-card rounded-[2.5rem] border-cyan-500 shadow-[0_0_80px_-10px_rgba(6,182,212,0.4)] p-10 text-center transform scale-90" id="popup-content">
<h2 className="text-3xl font-black text-white mb-4 uppercase tracking-tighter">¿Vas a dejar tu antena apagada?</h2>
<p className="text-slate-400 text-base mb-8 italic">"La oportunidad que dejas pasar hoy, otro con la antena activa la atraerá mañana."</p>
<a className="block w-full py-5 bg-gradient-to-r from-cyan-600 to-cyan-400 hover:scale-105 text-white font-bold tracking-widest rounded-xl shadow-[0_0_35px_-5px_rgba(6,182,212,0.6)] transition-all text-center text-lg animate-pulse mb-6" href="https://pay.hotmart.com/D101836474N?checkoutMode=6&amp;off=whc7xvx1&amp;offDiscount=BECAREACTIVA2">
                SÍ, QUIERO ACTIVARLA AHORA
            </a>
<button className="text-[10px] text-slate-600 uppercase tracking-widest font-bold hover:text-white transition-colors" onclick="closePopup()">Acepto seguir viviendo sin magnetismo</button>
</div>
</div>


    </>
  );
}
