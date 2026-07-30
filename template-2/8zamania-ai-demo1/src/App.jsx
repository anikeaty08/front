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



    !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
  


        // Modal Logic
        function openModal() {
            const input = document.getElementById('domainInput');
            const errorMsg = document.getElementById('errorMsg');
            const modal = document.getElementById('contactModal');
            const display = document.getElementById('modalDomainDisplay');
            
            if(input.value.trim() === "") {
                input.focus();
                errorMsg.style.opacity = '1';
                setTimeout(() => errorMsg.style.opacity = '0', 3000);
                return;
            }

            display.textContent = input.value;
            modal.classList.remove('hidden-modal');
            modal.classList.add('visible-modal');
        }

        function closeModal() {
            const modal = document.getElementById('contactModal');
            modal.classList.remove('visible-modal');
            modal.classList.add('hidden-modal');
            // Reset error message
            document.getElementById('submissionError').classList.add('hidden');
        }

        // Close on clicking outside
        document.getElementById('contactModal').addEventListener('click', function(e) {
            if (e.target === this) {
                closeModal();
            }
        });

        // Airtable Submission Logic
        async function submitToAirtable() {
            const btn = document.getElementById('submitBtn');
            const errorText = document.getElementById('submissionError');
            const originalText = btn.innerHTML;
            
            // Set Loading State
            btn.innerHTML = '<iconify-icon icon="solar:reorder-linear" class="animate-spin" width="16" height="16"></iconify-icon> Enviando...';
            btn.disabled = true;
            errorText.classList.add('hidden');

            const domain = document.getElementById('domainInput').value;
            const prenom = document.getElementById('prenomInput').value;
            const nom = document.getElementById('nomInput').value;
            const email = document.getElementById('emailInput').value;
            const telephone = document.getElementById('phoneInput').value;

            const airtableData = {
                fields: {
                    "domainInput": domain,
                    "Prenom": prenom,
                    "Nom": nom,
                    "Email": email,
                    "Telephone": telephone
                }
            };

            const apiKey = "patRzwc4kQyMwqThs.5d865d13182db20efbd98125bef8759a30ccba698cc93a53e38ed48fc27e8a55";
            const baseId = "appYNuXINBkKOs188";
            const tableId = "tbltdjM56rR2U0xQn";
            const url = `https://api.airtable.com/v0/${baseId}/${tableId}`;

            try {
                const response = await fetch(url, {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${apiKey}`,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ records: [airtableData] })
                });

                if (response.ok) {
                    btn.innerHTML = '<iconify-icon icon="solar:check-circle-linear" width="16" height="16"></iconify-icon> Recibido';
                    btn.classList.remove('bg-red-600', 'hover:bg-red-500');
                    btn.classList.add('bg-green-600', 'hover:bg-green-500');
                    
                    setTimeout(() => {
                        closeModal();
                        // Reset form
                        document.getElementById('prenomInput').value = '';
                        document.getElementById('nomInput').value = '';
                        document.getElementById('emailInput').value = '';
                        document.getElementById('phoneInput').value = '';
                        
                        // Reset button style
                        btn.innerHTML = originalText;
                        btn.disabled = false;
                        btn.classList.remove('bg-green-600', 'hover:bg-green-500');
                        btn.classList.add('bg-red-600', 'hover:bg-red-500');
                    }, 2000);
                } else {
                    throw new Error('Submission failed');
                }
            } catch (error) {
                console.error('Error submitting to Airtable:', error);
                btn.innerHTML = originalText;
                btn.disabled = false;
                errorText.classList.remove('hidden');
            }
        }

        // Scroll Reveal Animation Logic
        document.addEventListener('DOMContentLoaded', () => {
            const reveals = document.querySelectorAll('.reveal');

            const revealOnScroll = () => {
                const windowHeight = window.innerHeight;
                const elementVisible = 100;

                reveals.forEach((reveal) => {
                    const elementTop = reveal.getBoundingClientRect().top;
                    if (elementTop < windowHeight - elementVisible) {
                        reveal.classList.add('active');
                    }
                });
            };

            window.addEventListener('scroll', revealOnScroll);
            revealOnScroll(); // Trigger once on load
        });
    
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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: `linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)`, webkitMaskImage: `linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)`}}><div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="FixNvEwvWwbu3QX9qC3F"></div>

</div></div>

<nav className="fixed top-0 w-full z-40 border-b border-white/[0.06] bg-[#050505]/80 backdrop-blur-xl supports-[backdrop-filter]:bg-[#050505]/60">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="h-8 w-8 bg-white/5 border border-white/10 flex items-center justify-center rounded-lg group-hover:bg-white/10 transition-all duration-300 shadow-sm">
<iconify-icon className="text-white" height="20" icon="solar:code-square-linear" width="20"></iconify-icon>
</div>
<span className="text-lg font-semibold text-white tracking-tight">Zamania</span>
</a>
<div className="hidden md:flex items-center gap-8 text-xs font-medium text-slate-400">
<a className="hover:text-white transition-colors duration-300" href="#ventajas">Ventajas</a>
<a className="hover:text-white transition-colors duration-300" href="#proceso">Proceso</a>
<a className="hover:text-white transition-colors duration-300" href="#filosofia">Filosofía</a>
</div>
<div className="flex items-center gap-4">
<button className="hidden md:block hover:bg-white/5 hover:border-white/20 transition-all duration-300 cursor-pointer text-xs font-medium text-white border-white/10 border rounded-md pt-1.5 pr-3 pb-1.5 pl-3" onClick={(e) => { document.getElementById('domainInput').focus();window.location.href='https://8zamania.com' }} role="button">8Zamania</button>
</div>
</div>
</nav>

<header className="md:pt-48 md:pb-32 overflow-hidden pt-32 pb-20 relative">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-red-900/10 blur-[120px] rounded-full pointer-events-none opacity-40 mix-blend-screen"></div>
<div className="z-10 text-center max-w-4xl mr-auto ml-auto pr-6 pl-6 relative">

<div className="reveal delay-100 inline-flex gap-2 cursor-default active text-xs font-medium text-red-200 bg-red-500/5 border-red-500/20 border rounded-full mb-8 pt-1 pr-3 pb-1 pl-3 gap-x-2 gap-y-2 items-center">
                 Zamania AI
            </div>

<h1 className="reveal delay-200 md:text-7xl bg-clip-text leading-[1] active text-5xl font-semibold text-transparent tracking-tighter bg-gradient-to-b from-white via-white to-white/50 mb-8">
                Creamos sitios Web con AI
            </h1>

<p className="reveal delay-300 md:text-xl leading-relaxed active text-lg font-light text-slate-400 tracking-wide max-w-2xl mr-auto mb-12 ml-auto">
                Damos servicio a Negocios y Empresas de México y todo el Mundo. Velocidad, diseño y optimización en un solo lugar.
            </p>

<div className="reveal delay-300 max-w-md mx-auto relative group active">
<p className="-bottom-6 text-[10px] transition-opacity text-violet-500 text-center opacity-0 w-full absolute left-0 cursor-pointer" id="errorMsg" onClick={(e) => { window.location.href='https://8zamania.com' }} role="button">Visita 8Zamania, La Ciudad de los Robots AI</p>
</div>
</div>
</header>

<section className="py-24 border-y border-white/[0.06] bg-white/[0.01]" id="ventajas">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">

<div className="reveal delay-100 group p-8 rounded-2xl bg-[#080808] border border-white/[0.06] hover:border-white/[0.12] transition-colors relative overflow-hidden active">
<div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-[100px] -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
<div className="relative z-10">
<div className="h-10 w-10 flex items-center justify-center text-slate-200 mb-6 bg-white/[0.05] rounded-lg border border-white/[0.05]">
<iconify-icon height="24" icon="solar:rocket-2-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white tracking-tight mb-2">Desarrollo Acelerado con IA</h3>
<p className="text-sm text-slate-400 font-light leading-relaxed">
                            El código manual es lento. Usamos inteligencia artificial para construir infraestructuras web robustas en tiempo récord.
                        </p>
</div>
</div>

<div className="reveal delay-200 group p-8 rounded-2xl bg-[#080808] border border-white/[0.06] hover:border-white/[0.12] transition-colors relative overflow-hidden active">
<div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-[100px] -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
<div className="relative z-10">
<div className="h-10 w-10 flex items-center justify-center text-slate-200 mb-6 bg-white/[0.05] rounded-lg border border-white/[0.05]">
<iconify-icon height="24" icon="solar:palette-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white tracking-tight mb-2">Diseño de Clase Mundial</h3>
<p className="text-sm text-slate-400 font-light leading-relaxed">
                            No usamos plantillas genéricas. Creamos interfaces visuales impactantes que reflejan la identidad única de tu marca.
                        </p>
</div>
</div>

<div className="reveal delay-300 group p-8 rounded-2xl bg-[#080808] border border-white/[0.06] hover:border-white/[0.12] transition-colors relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-[100px] -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
<div className="relative z-10">
<div className="h-10 w-10 flex items-center justify-center text-slate-200 mb-6 bg-white/[0.05] rounded-lg border border-white/[0.05]">
<iconify-icon height="24" icon="solar:magnifer-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white tracking-tight mb-2">SEO Optimizado</h3>
<p className="text-sm text-slate-400 font-light leading-relaxed">
                            Estructura optimizada para motores de búsqueda desde la primera línea de código. Tu sitio nace listo para posicionarse.
                        </p>
</div>
</div>

<div className="reveal delay-300 group p-8 rounded-2xl bg-[#080808] border border-white/[0.06] hover:border-white/[0.12] transition-colors relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-[100px] -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
<div className="relative z-10">
<div className="h-10 w-10 flex items-center justify-center text-slate-200 mb-6 bg-white/[0.05] rounded-lg border border-white/[0.05]">
<iconify-icon height="24" icon="solar:smartphone-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white tracking-tight mb-2">Adaptabilidad Total</h3>
<p className="text-sm text-slate-400 font-light leading-relaxed">
                            Experiencia perfecta en móviles, tablets y escritorio. Rendimiento fluido sin importar el dispositivo.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative" id="proceso">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-20 md:mb-28 reveal">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-6">El Método Zamania.</h2>
<div className="max-w-3xl">
<p className="text-xl text-slate-300 font-light leading-relaxed mb-6">
                        No somos una agencia tradicional. Integramos herramientas de IA de vanguardia para reducir costos y tiempos de entrega, elevando la calidad final del producto.
                    </p>
<a className="inline-flex items-center gap-2 text-sm font-medium text-red-400 hover:text-red-300 transition-colors" href="#contact" onClick={(e) => { document.getElementById('domainInput').focus() }}>
                        Ver cómo funciona <iconify-icon height="16" icon="solar:arrow-down-linear" width="16"></iconify-icon>
</a>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="reveal delay-100 p-8 rounded-2xl border border-white/10 bg-[#0A0A0A] hover:border-white/20 transition-all">
<div className="text-xs font-mono text-red-500 mb-4">01</div>
<h3 className="text-xl font-medium text-white tracking-tight mb-4">DIAGNÓSTICO DIGITAL</h3>
<p className="text-sm text-slate-400 leading-relaxed mb-6 italic">Entendiendo tu negocio antes de escribir código</p>
<div className="text-sm text-slate-500 font-light leading-7 space-y-4">
<p className="">Analizamos tu presencia actual, competencia y objetivos comerciales. Definimos la arquitectura de información ideal.</p>
<ul className="list-disc pl-4 space-y-1 text-slate-400">
<li>Auditoría de UX/UI actual</li>
<li>Definición de objetivos de conversión</li>
<li>Selección de tecnología y stack</li>
</ul>
</div>
</div>

<div className="reveal delay-200 p-8 rounded-2xl border border-white/10 bg-[#0A0A0A] hover:border-white/20 transition-all">
<div className="text-xs font-mono text-red-500 mb-4">02</div>
<h3 className="text-xl font-medium text-white tracking-tight mb-4">DISEÑO Y PROTOTIPADO</h3>
<p className="text-sm text-slate-400 leading-relaxed mb-6 italic">Visualizando el éxito</p>
<div className="text-sm text-slate-500 font-light leading-7 space-y-4">
<p>Creamos prototipos de alta fidelidad. Aquí es donde la marca cobra vida visualmente antes del desarrollo.</p>
<ul className="list-disc pl-4 space-y-1 text-slate-400">
<li>Wireframes y flujos de usuario</li>
<li>Diseño de interfaz (UI) moderno</li>
<li>Aprobación visual del cliente</li>
</ul>
</div>
</div>

<div className="reveal delay-100 p-8 rounded-2xl border border-white/10 bg-[#0A0A0A] hover:border-white/20 transition-all">
<div className="text-xs font-mono text-red-500 mb-4">03</div>
<h3 className="text-xl font-medium text-white tracking-tight mb-4">DESARROLLO POTENCIADO CON IA</h3>
<p className="text-sm text-slate-400 leading-relaxed mb-6 italic">Velocidad de ejecución sin precedentes</p>
<div className="text-sm text-slate-500 font-light leading-7 space-y-4">
<p className="">Nuestros ingenieros utilizan asistentes de código IA para generar estructuras limpias, seguras y escalables.</p>
<ul className="list-disc pl-4 space-y-1 text-slate-400">
<li>Código limpio y mantenible</li>
<li>Integración de APIs y bases de datos</li>
<li>Optimización de velocidad de carga</li>
</ul>
</div>
</div>

<div className="reveal delay-200 p-8 rounded-2xl border border-white/10 bg-[#0A0A0A] hover:border-white/20 transition-all">
<div className="text-xs font-mono text-red-500 mb-4">04</div>
<h3 className="text-xl font-medium text-white tracking-tight mb-4">LANZAMIENTO Y ESCALA</h3>
<p className="text-sm text-slate-400 leading-relaxed mb-6 italic">Tu negocio, visible para el mundo</p>
<div className="text-sm text-slate-500 font-light leading-7 space-y-4">
<p>Despliegue en servidores de alto rendimiento, configuración de dominio y entrega final.</p>
<ul className="list-disc pl-4 space-y-1 text-slate-400">
<li>Pruebas de calidad (QA)</li>
<li>Configuración de Analytics</li>
<li>Soporte post-lanzamiento</li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/[0.06] bg-[#050505]" id="filosofia">
<div className="max-w-4xl mx-auto px-6 text-center">
<div className="reveal">
<div className="inline-block text-red-500 mb-8">
<iconify-icon height="40" icon="solar:quote-up-linear" width="40"></iconify-icon>
</div>
<p className="text-2xl md:text-3xl font-light text-white leading-relaxed mb-8">
                    "En la era digital, tu sitio web no es solo una tarjeta de presentación, es <span className="text-red-500 font-normal">tu mejor vendedor disponible 24/7.</span>"
                </p>
<div className="flex items-center justify-center gap-3">
<div className="h-px w-8 bg-white/20"></div>
<p className="text-xs font-mono text-slate-500 uppercase tracking-widest">Filosofía Zamania</p>
<div className="h-px w-8 bg-white/20"></div>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden border-t border-white/[0.06]">
<div className="absolute inset-0 bg-red-900/5 mix-blend-overlay"></div>
<div className="max-w-3xl mx-auto px-6 relative z-10 text-center">
<h2 className="reveal text-4xl md:text-6xl font-semibold text-white tracking-tighter mb-8 leading-tight">
                No te quedes atrás.
                <span className="text-slate-500">Digitaliza tu negocio.</span>
<span className="text-slate-600">Lidera tu mercado.</span>
</h2>
<button className="reveal delay-100 px-8 py-4 bg-white text-black text-sm font-semibold rounded hover:bg-slate-200 transition-all shadow-[0_0_30px_rgba(255,255,255,0.15)] inline-flex items-center gap-2" onClick={(e) => { document.getElementById('domainInput').focus() }}>
                Iniciar Proyecto Zamania
                <iconify-icon height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
</section>

<div className="hidden-modal fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/80 backdrop-blur-md" id="contactModal">
<div className="w-full max-w-md bg-[#0E0F14] border border-white/10 rounded-2xl shadow-2xl relative overflow-hidden">

<button className="absolute top-4 right-4 text-slate-500 hover:text-white transition-colors z-20" onClick={(e) => { closeModal() }}>
<iconify-icon height="24" icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
<div className="p-8 relative z-10">
<div className="mb-6">
<div className="text-xs font-mono text-red-500 mb-2">NUEVO PROYECTO</div>
<h3 className="text-xl font-semibold text-white">Déjanos tus datos</h3>
<p className="text-xs text-slate-400 mt-1">Interesado en: <span className="text-white font-mono" id="modalDomainDisplay"></span></p>
</div>
<form className="space-y-4" onSubmit={(e) => { event.preventDefault(); submitToAirtable(); }}>
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-[10px] font-semibold text-slate-500 uppercase">Nombre</label>
<input className="w-full bg-[#050505] border border-white/10 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-red-500/50 transition-colors" id="prenomInput" required type="text" />
</div>
<div className="space-y-1">
<label className="text-[10px] font-semibold text-slate-500 uppercase">Apellido</label>
<input className="w-full bg-[#050505] border border-white/10 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-red-500/50 transition-colors" id="nomInput" required type="text" />
</div>
</div>
<div className="space-y-1">
<label className="text-[10px] font-semibold text-slate-500 uppercase">Email</label>
<input className="w-full bg-[#050505] border border-white/10 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-red-500/50 transition-colors" id="emailInput" required type="email" />
</div>
<div className="space-y-1">
<label className="text-[10px] font-semibold text-slate-500 uppercase">Teléfono / WhatsApp</label>
<input className="w-full bg-[#050505] border border-white/10 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-red-500/50 transition-colors" id="phoneInput" required type="tel" />
</div>
<button className="w-full mt-4 bg-red-600 hover:bg-red-500 text-white font-medium py-3 rounded text-sm transition-all shadow-[0_0_20px_rgba(220,38,38,0.3)] flex items-center justify-center gap-2" id="submitBtn" type="submit">
                        Enviar Solicitud
                    </button>
<p className="text-center text-red-500 text-xs mt-2 hidden" id="submissionError">Error en el envío. Intenta de nuevo.</p>
</form>
</div>
</div>
</div>

<footer className="border-t border-white/[0.06] bg-[#050505] pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
<div>

<div className="flex items-center gap-2 mb-4 group">
<div className="h-6 w-6 bg-white/5 border border-white/10 flex items-center justify-center rounded group-hover:bg-white/10 transition-colors">
<iconify-icon className="text-white" height="16" icon="solar:code-square-linear" width="16"></iconify-icon>
</div>
<span className="text-white font-semibold text-md">Zamania</span>
</div>
<p className="text-xs text-slate-500 max-w-xs leading-relaxed font-light">
                        Creamos el futuro digital de las empresas con tecnología e inteligencia artificial.
                    </p>
</div>
<div className="flex gap-8 text-xs font-medium text-slate-500">
<a className="hover:text-white transition-colors" href="#">Ventajas</a>
<a className="hover:text-white transition-colors" href="#">Servicios</a>
<a className="hover:text-white transition-colors" href="#">Contacto</a>
</div>
</div>
<div className="border-t border-white/[0.06] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-[10px] text-slate-600 uppercase tracking-wider">© 2024 Zamania.</p>
<div className="flex gap-6">
<a className="text-slate-600 hover:text-white transition-colors" href="https://www.linkedin.com/in/sedky-gharbi/" rel="noopener noreferrer" target="_blank">
<iconify-icon height="16" icon="solar:link-circle-linear" width="16"></iconify-icon>
</a>
<a className="text-slate-600 hover:text-white transition-colors" href="https://x.com/gauchecouscous" rel="noopener noreferrer" target="_blank">
<iconify-icon height="16" icon="solar:hashtag-square-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
