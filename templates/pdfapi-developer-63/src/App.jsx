import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        lucide.createIcons({
            attrs: {
                'stroke-width': 1.5
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-zinc-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 group cursor-pointer">
<div className="w-8 h-8 rounded bg-gradient-to-tr from-zinc-800 to-zinc-700 flex items-center justify-center border border-white/10 group-hover:border-indigo-500/50 transition-colors duration-300">
<span className="text-white font-semibold tracking-tighter text-sm">Pdf</span>
</div>
<span className="text-white font-medium tracking-tight text-sm">PDFAPI</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium hover:text-white transition-colors" href="#features">Características</a>
<a className="text-sm font-medium hover:text-white transition-colors" href="#docs">Documentación</a>
<a className="text-sm font-medium hover:text-white transition-colors" href="#pricing">Precios</a>
</div>
<div className="flex items-center gap-4">
<a className="text-sm font-medium hover:text-white hidden sm:block transition-colors" href="#">Login</a>
<a className="text-sm font-medium bg-white text-zinc-950 px-4 py-2 rounded-full hover:bg-zinc-200 transition-colors tracking-tight" href="#">
                    API Key
                </a>
</div>
</div>
</nav>

<header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] glow-bg pointer-events-none -z-10"></div>
<div className="max-w-7xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/20 bg-indigo-500/10 text-indigo-300 text-xs font-medium mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                v2.0 Ahora con soporte para firmas digitales
            </div>
<h1 className="text-5xl md:text-7xl font-medium text-white tracking-tight mb-6 max-w-4xl mx-auto leading-[1.1]">
                Generación programática de <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">PDFs</span> para desarrolladores.
            </h1>
<p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                Convierte HTML a PDF, fusiona documentos y gestiona facturas dinámicas con una API REST rápida, fiable y segura. Integración en minutos.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
<button className="h-12 px-8 rounded-full bg-white text-black font-medium hover:bg-zinc-200 transition-colors flex items-center gap-2">
                    Comenzar gratis <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
<button className="h-12 px-8 rounded-full glass-panel text-white font-medium hover:bg-white/5 transition-colors flex items-center gap-2">
<i className="w-4 h-4 text-zinc-400" data-lucide="book-open"></i> Leer documentación
                </button>
</div>

<div className="relative max-w-3xl mx-auto rounded-xl border border-white/10 bg-zinc-900/50 backdrop-blur-xl shadow-2xl overflow-hidden text-left group">
<div className="flex items-center px-4 py-3 border-b border-white/5 bg-zinc-900/80 gap-2">
<div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
<div className="ml-auto text-xs font-mono text-zinc-500">POST /v1/pdf/generate</div>
</div>
<div className="p-6 overflow-x-auto no-scrollbar font-mono text-sm leading-relaxed">
<pre><code><span className="code-syntax-keyword">const</span> response <span className="code-syntax-keyword">=</span> <span className="code-syntax-keyword">await</span> fetch(<span className="code-syntax-string">'https://api.pdfapi.com/v1/create'</span>, {
  <span className="text-zinc-300">method:</span> <span className="code-syntax-string">'POST'</span>,
  <span className="text-zinc-300">headers:</span> { 
    <span className="code-syntax-string">'Authorization'</span>: <span className="code-syntax-string">'Bearer sk_live_...'</span>,
    <span className="code-syntax-string">'Content-Type'</span>: <span className="code-syntax-string">'application/json'</span> 
  },
  <span className="text-zinc-300">body:</span> JSON.<span className="code-syntax-func">stringify</span>({
    <span className="text-zinc-300">template_id:</span> <span className="code-syntax-string">'invoice-001'</span>,
    <span className="text-zinc-300">data:</span> {
      <span className="text-zinc-300">customer:</span> <span className="code-syntax-string">'Acme Corp'</span>,
      <span className="text-zinc-300">total:</span> <span className="code-syntax-keyword">1250.00</span>
    }
  })
});

<span className="code-syntax-comment">// Returns a buffer or signed URL</span>
<span className="code-syntax-keyword">const</span> { url } <span className="code-syntax-keyword">=</span> <span className="code-syntax-keyword">await</span> response.<span className="code-syntax-func">json</span>();</code></pre>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950/20 to-transparent pointer-events-none"></div>
</div>
</div>
</header>

<section className="py-24 border-t border-white/5 bg-zinc-900/20" id="features">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl font-medium text-white tracking-tight mb-4">Todo lo que necesitas.</h2>
<p className="text-zinc-400 max-w-xl">Diseñado para escalar. Desde startups hasta empresas Fortune 500, nuestra infraestructura maneja millones de PDFs.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass-panel p-8 rounded-2xl hover:bg-white/5 transition-all duration-300 group">
<div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<i className="text-white" data-lucide="zap"></i>
</div>
<h3 className="text-lg font-medium text-white mb-2">Baja Latencia</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                        Renderizado distribuido en el borde. Generamos documentos en menos de 500ms promedio.
                    </p>
</div>

<div className="glass-panel p-8 rounded-2xl hover:bg-white/5 transition-all duration-300 group">
<div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<i className="text-white" data-lucide="layout-template"></i>
</div>
<h3 className="text-lg font-medium text-white mb-2">Editor Visual</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                        Crea templates con nuestro editor drag-and-drop o utiliza HTML/CSS puro si prefieres código.
                    </p>
</div>

<div className="glass-panel p-8 rounded-2xl hover:bg-white/5 transition-all duration-300 group">
<div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<i className="text-white" data-lucide="shield-check"></i>
</div>
<h3 className="text-lg font-medium text-white mb-2">Seguridad SOC2</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                        Encriptación AES-256 en reposo y TLS 1.3 en tránsito. Cumplimiento GDPR y HIPAA ready.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="docs">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col lg:flex-row gap-12">

<div className="lg:w-1/3">
<div className="flex items-center gap-2 text-indigo-400 mb-4">
<i className="w-4 h-4" data-lucide="code-2"></i>
<span className="text-xs font-medium uppercase tracking-wider">Documentación</span>
</div>
<h2 className="text-3xl font-medium text-white tracking-tight mb-6">Integración sencilla, potente resultado.</h2>
<p className="text-zinc-400 mb-8 leading-relaxed">
                        Nuestra API es predecible y orientada a recursos. Utiliza códigos de respuesta HTTP estándar, autenticación Bearer y acepta cuerpos de solicitud codificados en JSON.
                    </p>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-sm text-zinc-300">
<i className="w-4 h-4 text-indigo-500" data-lucide="check"></i> SDKs para Node, Python y Go
                        </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<i className="w-4 h-4 text-indigo-500" data-lucide="check"></i> Webhooks en tiempo real
                        </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<i className="w-4 h-4 text-indigo-500" data-lucide="check"></i> Logs detallados de cada petición
                        </li>
</ul>
<a className="text-white text-sm font-medium border-b border-white hover:border-transparent transition-all pb-0.5" href="#">Explorar la API Reference →</a>
</div>

<div className="lg:w-2/3">
<div className="glass-panel rounded-xl overflow-hidden border border-white/10 flex flex-col md:flex-row h-full min-h-[400px]">

<div className="w-full md:w-48 bg-zinc-900/50 border-r border-white/5 p-4 hidden md:block">
<div className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-4">Endpoints</div>
<div className="space-y-1">
<div className="text-xs text-indigo-400 bg-indigo-500/10 px-2 py-1.5 rounded cursor-pointer">POST /generate</div>
<div className="text-xs text-zinc-400 hover:text-white px-2 py-1.5 cursor-pointer">GET /templates</div>
<div className="text-xs text-zinc-400 hover:text-white px-2 py-1.5 cursor-pointer">GET /history</div>
<div className="text-xs text-zinc-400 hover:text-white px-2 py-1.5 cursor-pointer">DELETE /file</div>
</div>
</div>

<div className="flex-1 p-6">
<div className="flex items-center justify-between mb-4">
<span className="text-xs font-mono text-zinc-500">REQUEST BODY</span>
<span className="text-xs text-zinc-600">application/json</span>
</div>
<div className="font-mono text-xs text-zinc-300 leading-6">
<div className="pl-0">{</div>
<div className="pl-4"><span className="text-indigo-400">"html"</span>: <span className="text-green-400">"&lt;h1&gt;Hello World&lt;/h1&gt;"</span>,</div>
<div className="pl-4"><span className="text-indigo-400">"options"</span>: {</div>
<div className="pl-8"><span className="text-indigo-400">"format"</span>: <span className="text-green-400">"A4"</span>,</div>
<div className="pl-8"><span className="text-indigo-400">"margin"</span>: <span className="text-green-400">"20px"</span>,</div>
<div className="pl-8"><span className="text-indigo-400">"printBackground"</span>: <span className="text-purple-400">true</span></div>
<div className="pl-4">}</div>
<div className="pl-0">}</div>
</div>
<div className="h-px w-full bg-white/5 my-6"></div>
<div className="flex items-center justify-between mb-4">
<span className="text-xs font-mono text-zinc-500">RESPONSE</span>
<span className="text-xs text-green-500">200 OK</span>
</div>
<div className="font-mono text-xs text-zinc-300 leading-6">
<div className="pl-0">{</div>
<div className="pl-4"><span className="text-indigo-400">"id"</span>: <span className="text-green-400">"pdf_82jks92..."</span>,</div>
<div className="pl-4"><span className="text-indigo-400">"url"</span>: <span className="text-green-400">"https://cdn.pdfapi.com/..."</span>,</div>
<div className="pl-4"><span className="text-indigo-400">"size"</span>: <span className="text-purple-400">1024</span></div>
<div className="pl-0">}</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-zinc-950" id="pricing">
<div className="max-w-7xl mx-auto px-6 text-center">
<h2 className="text-3xl font-medium text-white tracking-tight mb-4">Precios simples y transparentes.</h2>
<p className="text-zinc-400 mb-12">Sin tarjetas de crédito para empezar. Paga solo cuando escales.</p>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">

<div className="border border-white/10 rounded-xl p-8 text-left hover:border-white/20 transition-colors">
<div className="text-sm font-medium text-zinc-400 mb-2">Developer</div>
<div className="text-3xl font-medium text-white tracking-tight mb-1">$0<span className="text-sm text-zinc-500 font-normal">/mes</span></div>
<p className="text-xs text-zinc-500 mb-6">Para proyectos personales y pruebas.</p>
<a className="block w-full py-2.5 rounded-lg border border-white/10 bg-white/5 text-center text-sm font-medium text-white hover:bg-white/10 transition-colors mb-8" href="#">
                        Empezar Gratis
                    </a>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-xs text-zinc-300">
<i className="w-3.5 h-3.5 text-zinc-500" data-lucide="check"></i> 100 Documentos/mes
                        </li>
<li className="flex items-center gap-3 text-xs text-zinc-300">
<i className="w-3.5 h-3.5 text-zinc-500" data-lucide="check"></i> Templates básicos
                        </li>
<li className="flex items-center gap-3 text-xs text-zinc-300">
<i className="w-3.5 h-3.5 text-zinc-500" data-lucide="check"></i> 1 usuario
                        </li>
</ul>
</div>

<div className="relative border border-indigo-500/50 bg-zinc-900/40 rounded-xl p-8 text-left shadow-[0_0_30px_-10px_rgba(99,102,241,0.3)]">
<div className="absolute top-0 right-0 -mt-3 mr-4 px-2 py-0.5 rounded-full bg-indigo-500 text-[10px] font-bold text-white tracking-wide uppercase">Popular</div>
<div className="text-sm font-medium text-indigo-400 mb-2">Startup</div>
<div className="text-3xl font-medium text-white tracking-tight mb-1">$29<span className="text-sm text-zinc-500 font-normal">/mes</span></div>
<p className="text-xs text-zinc-500 mb-6">Para aplicaciones en crecimiento.</p>
<a className="block w-full py-2.5 rounded-lg bg-white text-center text-sm font-medium text-zinc-950 hover:bg-zinc-200 transition-colors mb-8 shadow-lg shadow-indigo-500/20" href="#">
                        Suscribirse
                    </a>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-xs text-zinc-300">
<i className="w-3.5 h-3.5 text-indigo-400" data-lucide="check"></i> 10,000 Documentos/mes
                        </li>
<li className="flex items-center gap-3 text-xs text-zinc-300">
<i className="w-3.5 h-3.5 text-indigo-400" data-lucide="check"></i> Editor de Templates Pro
                        </li>
<li className="flex items-center gap-3 text-xs text-zinc-300">
<i className="w-3.5 h-3.5 text-indigo-400" data-lucide="check"></i> Soporte Prioritario
                        </li>
<li className="flex items-center gap-3 text-xs text-zinc-300">
<i className="w-3.5 h-3.5 text-indigo-400" data-lucide="check"></i> Retención 30 días
                        </li>
</ul>
</div>

<div className="border border-white/10 rounded-xl p-8 text-left hover:border-white/20 transition-colors">
<div className="text-sm font-medium text-zinc-400 mb-2">Enterprise</div>
<div className="text-3xl font-medium text-white tracking-tight mb-1">Custom</div>
<p className="text-xs text-zinc-500 mb-6">Volumen alto y SLAs garantizados.</p>
<a className="block w-full py-2.5 rounded-lg border border-white/10 bg-white/5 text-center text-sm font-medium text-white hover:bg-white/10 transition-colors mb-8" href="#">
                        Contactar Ventas
                    </a>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-xs text-zinc-300">
<i className="w-3.5 h-3.5 text-zinc-500" data-lucide="check"></i> Documentos ilimitados
                        </li>
<li className="flex items-center gap-3 text-xs text-zinc-300">
<i className="w-3.5 h-3.5 text-zinc-500" data-lucide="check"></i> SSO / SAML
                        </li>
<li className="flex items-center gap-3 text-xs text-zinc-300">
<i className="w-3.5 h-3.5 text-zinc-500" data-lucide="check"></i> 99.99% Uptime SLA
                        </li>
</ul>
</div>
</div>

<div className="mt-16 pt-16 border-t border-white/5 flex flex-col items-center">
<p className="text-xs text-zinc-600 uppercase tracking-widest mb-6">Pagos Seguros vía Stripe</p>
<div className="flex items-center gap-6 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
<div className="h-6 w-10 bg-zinc-800 rounded flex items-center justify-center border border-white/10"><span className="text-[8px] font-bold text-white">VISA</span></div>
<div className="h-6 w-10 bg-zinc-800 rounded flex items-center justify-center border border-white/10"><span className="text-[8px] font-bold text-white">AMEX</span></div>
<div className="h-6 w-10 bg-zinc-800 rounded flex items-center justify-center border border-white/10"><span className="text-[8px] font-bold text-white">MC</span></div>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/10 bg-zinc-950 pt-16 pb-12">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div>
<div className="flex items-center gap-2 mb-6">
<div className="w-6 h-6 rounded bg-zinc-800 flex items-center justify-center border border-white/10">
<span className="text-white font-semibold tracking-tighter text-xs">P</span>
</div>
<span className="text-white font-medium text-sm tracking-tight">PDFAPI</span>
</div>
</div>
<div>
<h4 className="text-white font-medium text-sm mb-4">Producto</h4>
<ul className="space-y-2 text-sm text-zinc-500">
<li><a className="hover:text-indigo-400 transition-colors" href="#">API</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Templates</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Integraciones</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Changelog</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium text-sm mb-4">Recursos</h4>
<ul className="space-y-2 text-sm text-zinc-500">
<li><a className="hover:text-indigo-400 transition-colors" href="#">Documentación</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Guías</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Status</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">GitHub</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium text-sm mb-4">Legal</h4>
<ul className="space-y-2 text-sm text-zinc-500">
<li><a className="hover:text-indigo-400 transition-colors" href="#">Privacidad</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Términos</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">DPA</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-zinc-600">© 2023 PDFAPI Inc. Todos los derechos reservados.</p>
<div className="flex items-center gap-4">
<a className="text-zinc-600 hover:text-white transition-colors" href="#"><i className="w-4 h-4" data-lucide="twitter"></i></a>
<a className="text-zinc-600 hover:text-white transition-colors" href="#"><i className="w-4 h-4" data-lucide="github"></i></a>
<a className="text-zinc-600 hover:text-white transition-colors" href="#"><i className="w-4 h-4" data-lucide="linkedin"></i></a>
</div>
</div>
</div>
</footer>


    </>
  );
}
