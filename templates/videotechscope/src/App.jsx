import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        function selectLanguage(lang) {
            // Fade out selector
            const selector = document.getElementById('lang-selector');
            selector.classList.add('fade-out');
            
            // Wait for transition then remove selector and show content
            setTimeout(() => {
                selector.style.display = 'none';
                
                // Show main container
                const main = document.getElementById('main-content');
                main.classList.remove('hidden-content');
                main.classList.add('reveal');

                // Show specific language content
                document.getElementById('content-' + lang).classList.remove('hidden');
                document.getElementById('content-' + lang).classList.add('reveal');
                
                // Scroll to top
                window.scrollTo(0,0);
            }, 500);
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-50 flex items-center justify-center bg-black transition-opacity duration-500" id="lang-selector">
<div className="text-center space-y-8 p-6 max-w-md w-full">
<div className="text-2xl font-semibold tracking-tight text-white uppercase" style={{letterSpacing: '-0.05em'}}>BRIEF</div>
<p className="text-sm text-zinc-500">Select your language</p>
<div className="flex flex-col gap-3">
<button className="group w-full py-3 px-4 glass-panel rounded hover:bg-white/5 transition-all text-sm font-medium text-zinc-300 hover:text-white flex items-center justify-between" onclick="selectLanguage('en')">
<span>English</span>
<iconify-icon className="opacity-0 group-hover:opacity-100 transition-opacity" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<button className="group w-full py-3 px-4 glass-panel rounded hover:bg-white/5 transition-all text-sm font-medium text-zinc-300 hover:text-white flex items-center justify-between" onclick="selectLanguage('es')">
<span>Español</span>
<iconify-icon className="opacity-0 group-hover:opacity-100 transition-opacity" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<button className="group w-full py-3 px-4 glass-panel rounded hover:bg-white/5 transition-all text-sm font-medium text-zinc-300 hover:text-white flex items-center justify-between" onclick="selectLanguage('ru')">
<span>Русский</span>
<iconify-icon className="opacity-0 group-hover:opacity-100 transition-opacity" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>

<main className="min-h-screen hidden-content relative pb-24" id="main-content">

<header className="border-b border-white/10 sticky top-0 z-30 bg-black/80 backdrop-blur-md">
<div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-4">
<span className="text-lg font-semibold tracking-tighter text-white">GD</span>
<span className="h-4 w-px bg-white/10"></span>
<span className="text-xs font-medium text-zinc-500 uppercase tracking-widest">Technical Assignment</span>
</div>
<button className="text-xs text-zinc-500 hover:text-white transition-colors" onclick="location.reload()">
<iconify-icon className="text-lg align-middle" icon="solar:restart-linear"></iconify-icon>
</button>
</div>
</header>
<div className="max-w-4xl mx-auto px-6 pt-12 space-y-16">

<div className="space-y-12 hidden" id="content-en">

<div className="space-y-6">
<div>
<h1 className="text-3xl font-semibold text-white tracking-tight mb-2">Production Guidelines</h1>
<p className="text-sm text-zinc-500">Core technical requirements for video and audio.</p>
</div>
<div className="glass-panel-info p-5 rounded-lg">
<div className="flex gap-4">
<iconify-icon className="text-indigo-400 text-xl shrink-0 mt-0.5" icon="solar:smart-home-angle-linear"></iconify-icon>
<div className="space-y-2">
<h3 className="text-white text-sm font-medium">Important Context: AI &amp; Editing</h3>
<p className="text-xs text-zinc-300 leading-relaxed opacity-80">
                                    We will use this content for both traditional video editing and <strong>AI video generation</strong>. 
                                    This is why you will find specific points regarding AI compatibility (silhouettes, fluid dynamics, contrast) in this brief. 
                                    The "AI Purpose" notes explain how the Neural Networks will interpret your footage.
                                </p>
</div>
</div>
</div>
</div>

<section className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="glass-panel p-6 rounded-lg space-y-3">
<div className="flex items-center gap-2 text-white text-sm font-medium">
<iconify-icon className="text-lg" icon="solar:microphone-3-linear"></iconify-icon>
<h3>Audio (Foley)</h3>
</div>
<p className="text-xs leading-relaxed">
<span className="text-white">Real Bar Sounds:</span> At the end of the shoot, record specific sounds using a professional shotgun mic: ice cracking, pouring, cans opening.
                        </p>
</div>
<div className="glass-panel p-6 rounded-lg space-y-3">
<div className="flex items-center gap-2 text-white text-sm font-medium">
<iconify-icon className="text-lg" icon="solar:lightbulb-linear"></iconify-icon>
<h3>Lighting Control</h3>
</div>
<p className="text-xs leading-relaxed">
<span className="text-white">Consistency is key.</span> Shoot only with controlled artificial lighting. Avoid natural light fluctuations.
                        </p>
</div>
<div className="glass-panel p-6 rounded-lg space-y-3">
<div className="flex items-center gap-2 text-white text-sm font-medium">
<iconify-icon className="text-lg" icon="solar:videocamera-record-linear"></iconify-icon>
<h3>120 FPS</h3>
</div>
<p className="text-xs leading-relaxed">
                            Use a camera capable of <span className="text-white">120 fps</span> for high-detail shots: pouring drinks, falling ice, mixing.
                        </p>
</div>
<div className="glass-panel p-6 rounded-lg space-y-3">
<div className="flex items-center gap-2 text-white text-sm font-medium">
<iconify-icon className="text-lg" icon="solar:clapperboard-edit-linear"></iconify-icon>
<h3>Camera Movement</h3>
</div>
<p className="text-xs leading-relaxed">
                            Watch your "ins" and "outs". Camera must move in a logical direction for editing flow. B-roll transitions.
                        </p>
</div>
</section>

<section className="space-y-6">
<div className="flex items-center justify-between border-b border-white/10 pb-4">
<h2 className="text-xl font-medium text-white tracking-tight">Core Scenes</h2>
</div>
<div className="grid gap-6">

<div className="group">
<div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
<div className="space-y-2">
<span className="text-xs font-mono text-zinc-500 uppercase">Scene 01</span>
<h3 className="text-white font-medium">Visual Reference</h3>
<a className="inline-flex items-center gap-2 text-xs text-blue-400 hover:text-blue-300" href="https://www.youtube.com/watch?v=q0jAC3h_4IE" target="_blank">
<span>Watch Reference</span>
<iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
</div>
</div>

<div className="space-y-2">
<span className="text-xs font-mono text-zinc-500 uppercase">Scene 02</span>
<h3 className="text-white font-medium">Branding &amp; Alcohol</h3>
<ul className="space-y-2 text-sm list-none mt-2">
<li className="flex gap-3"><iconify-icon className="mt-1 text-zinc-600" icon="solar:record-linear"></iconify-icon> Signs, entrance group, logos, and brand elements. Various angles, close-ups.</li>
<li className="flex gap-3"><iconify-icon className="mt-1 text-zinc-600" icon="solar:record-linear"></iconify-icon> Premium alcohol shots. With ice bucket, without ice bucket.</li>
<li className="flex gap-3"><iconify-icon className="mt-1 text-zinc-600" icon="solar:record-linear"></iconify-icon> Close-up of everything happening at the bar regarding cocktail preparation.</li>
</ul>
</div>

<div className="space-y-2">
<span className="text-xs font-mono text-zinc-500 uppercase">Scene 03</span>
<h3 className="text-white font-medium">Rotation / Spin</h3>
<p className="text-sm">Shoot with rotation movements.</p>
<a className="inline-flex items-center gap-2 text-xs text-blue-400 hover:text-blue-300" href="https://www.youtube.com/watch?v=eFci6pKdVDQ" target="_blank">
<span>Watch Reference</span>
<iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="space-y-8">
<h2 className="text-xl font-medium text-white tracking-tight border-b border-white/10 pb-4">Detailed Content Blocks</h2>

<div className="glass-panel rounded-lg p-6 relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-10"><iconify-icon className="text-6xl text-white" icon="solar:wineglass-linear"></iconify-icon></div>
<h3 className="text-lg text-white font-medium mb-1">BLOCK A: Cocktails &amp; Details</h3>
<p className="text-xs text-blue-400 mb-6 font-mono">PRIORITY #1 • 120 FPS • MACRO</p>
<div className="grid md:grid-cols-2 gap-8 text-sm">
<div className="space-y-2">
<strong className="text-white block">Smoke Bubble Pop</strong>
<p>Close-up of cocktail with smoke bubble. Capture the moment it pops by finger and smoke spreads properly.</p>
<p className="text-xs text-zinc-500 italic">AI Purpose: Bubble transforms into energy sphere, smoke into magic dust.</p>
</div>
<div className="space-y-2">
<strong className="text-white block">Ice Pour</strong>
<p>Macro shot of liquid hitting large ice chunk. Backlight is critical for droplets to shine.</p>
<p className="text-xs text-zinc-500 italic">AI Purpose: Liquid transforms into liquid metal or lava.</p>
</div>
<div className="space-y-2">
<strong className="text-white block">Texture &amp; Garnish</strong>
<p>Macro of misty glass, fruit texture, rising bubbles. Static camera or very slow motion.</p>
</div>
<div className="space-y-2">
<strong className="text-white block">The Spin</strong>
<p>Glass on bar (reflective surface preferred). Bartender spins it. Shoot dead center.</p>
<p className="text-xs text-zinc-500 italic">AI Purpose: Perfect looped videos.</p>
</div>
</div>
</div>

<div className="glass-panel rounded-lg p-6 relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-10"><iconify-icon className="text-6xl text-white" icon="solar:armchair-2-linear"></iconify-icon></div>
<h3 className="text-lg text-white font-medium mb-1">BLOCK B: Interior &amp; Atmosphere</h3>
<p className="text-xs text-zinc-400 mb-6 font-mono">60 FPS • GEOMETRY</p>
<div className="grid md:grid-cols-2 gap-8 text-sm">
<div className="space-y-2">
<strong className="text-white block">Neon Dolly-In/Out</strong>
<p>Smooth movement towards/away from neon signs or decor. Keep neon in focus, bokeh background.</p>
</div>
<div className="space-y-2">
<strong className="text-white block">Surface Tracking</strong>
<p>Camera glides low along marble bar or velvet sofa back. Focus on material texture.</p>
</div>
<div className="col-span-1 md:col-span-2 space-y-2">
<strong className="text-white block">DJ Zone Reflections</strong>
<p>If DJ booth has lights/bulbs — shoot close, out of focus, or reflected in a glass. Great abstract background for AI.</p>
</div>
</div>
</div>

<div className="glass-panel rounded-lg p-6 relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-10"><iconify-icon className="text-6xl text-white" icon="solar:users-group-two-rounded-linear"></iconify-icon></div>
<h3 className="text-lg text-white font-medium mb-1">BLOCK C: People &amp; Action</h3>
<p className="text-xs text-zinc-400 mb-6 font-mono">60/120 FPS • SILHOUETTES</p>
<div className="grid md:grid-cols-2 gap-8 text-sm">
<div className="col-span-1 md:col-span-2">
<p className="text-zinc-500 mb-4 bg-white/5 p-3 rounded border border-white/5">⚠️ Avoid clear faces (AI distorts them). Focus on silhouettes and hands.</p>
</div>
<div className="space-y-2">
<strong className="text-white block">Hookah Silhouette</strong>
<p>Person exhaling smoke against bright neon. Face in shadow, outline and dense smoke visible (120 fps).</p>
<p className="text-xs text-zinc-500 italic">AI Purpose: Smoke is best for mystical effects.</p>
</div>
<div className="space-y-2">
<strong className="text-white block">Bartender Hands</strong>
<p>Close-up of hands shaking or using tongs (no face). Focus on motion and metal shine.</p>
</div>
<div className="col-span-1 md:col-span-2 space-y-2">
<strong className="text-white block">Toast (Clinking)</strong>
<p>Close-up of two glasses touching. Shoot against bright light source to see liquid splash (120 fps).</p>
</div>
</div>
</div>
</section>

<section className="space-y-6">
<h2 className="text-xl font-medium text-white tracking-tight border-b border-white/10 pb-4">Required Deliverables</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-8">

<div className="flex items-start gap-3">
<iconify-icon className="text-zinc-600 mt-0.5 text-lg" icon="solar:check-square-linear"></iconify-icon>
<span className="text-sm">Photo of entrance</span>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-zinc-600 mt-0.5 text-lg" icon="solar:check-square-linear"></iconify-icon>
<span className="text-sm">Fly-in to entrance (smooth approach)</span>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-zinc-600 mt-0.5 text-lg" icon="solar:check-square-linear"></iconify-icon>
<span className="text-sm">Close-up photo of GD sign</span>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-zinc-600 mt-0.5 text-lg" icon="solar:check-square-linear"></iconify-icon>
<span className="text-sm">Fly-in to GD sign</span>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-zinc-600 mt-0.5 text-lg" icon="solar:check-square-linear"></iconify-icon>
<span className="text-sm">Hookah master preparing hookah</span>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-zinc-600 mt-0.5 text-lg" icon="solar:check-square-linear"></iconify-icon>
<span className="text-sm">Close-up: Bartender pouring from shaker (focus on cocktail)</span>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-zinc-600 mt-0.5 text-lg" icon="solar:check-square-linear"></iconify-icon>
<span className="text-sm">Setting fire to cocktail or shot</span>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-zinc-600 mt-0.5 text-lg" icon="solar:check-square-linear"></iconify-icon>
<span className="text-sm">Photo of empty seating areas</span>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-zinc-600 mt-0.5 text-lg" icon="solar:check-square-linear"></iconify-icon>
<span className="text-sm">Photo of bar, stage, people</span>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-zinc-600 mt-0.5 text-lg" icon="solar:check-square-linear"></iconify-icon>
<span className="text-sm">Close-up of alcohol bottles</span>
</div>
</div>
</section>
</div>

<div className="space-y-12 hidden" id="content-es">

<div className="space-y-6">
<div>
<h1 className="text-3xl font-semibold text-white tracking-tight mb-2">Guía de Producción</h1>
<p className="text-sm text-zinc-500">Requisitos técnicos principales para video y audio.</p>
</div>
<div className="glass-panel-info p-5 rounded-lg">
<div className="flex gap-4">
<iconify-icon className="text-indigo-400 text-xl shrink-0 mt-0.5" icon="solar:smart-home-angle-linear"></iconify-icon>
<div className="space-y-2">
<h3 className="text-white text-sm font-medium">Contexto Importante: IA y Edición</h3>
<p className="text-xs text-zinc-300 leading-relaxed opacity-80">
                                    Utilizaremos este material tanto para la edición de video tradicional como para la <strong>generación de video con IA</strong>.
                                    Por ello, encontrará puntos específicos sobre compatibilidad con IA (siluetas, dinámica de fluidos, contraste) en este informe.
                                </p>
</div>
</div>
</div>
</div>
<section className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="glass-panel p-6 rounded-lg space-y-3">
<div className="flex items-center gap-2 text-white text-sm font-medium">
<iconify-icon className="text-lg" icon="solar:microphone-3-linear"></iconify-icon>
<h3>Audio (Foley)</h3>
</div>
<p className="text-xs leading-relaxed">
<span className="text-white">Sonidos Reales:</span> Al final del rodaje, grabar sonidos con micro shotgun profesional: hielo rompiéndose, servido, latas abriéndose.
                        </p>
</div>
<div className="glass-panel p-6 rounded-lg space-y-3">
<div className="flex items-center gap-2 text-white text-sm font-medium">
<iconify-icon className="text-lg" icon="solar:lightbulb-linear"></iconify-icon>
<h3>Control de Iluminación</h3>
</div>
<p className="text-xs leading-relaxed">
<span className="text-white">La consistencia es clave.</span> Grabar solo con luz artificial controlada.
                        </p>
</div>
<div className="glass-panel p-6 rounded-lg space-y-3">
<div className="flex items-center gap-2 text-white text-sm font-medium">
<iconify-icon className="text-lg" icon="solar:videocamera-record-linear"></iconify-icon>
<h3>120 FPS</h3>
</div>
<p className="text-xs leading-relaxed">
                            Usar cámara capaz de <span className="text-white">120 fps</span> para detalles: servido de bebidas, caída de hielo, mezclado.
                        </p>
</div>
<div className="glass-panel p-6 rounded-lg space-y-3">
<div className="flex items-center gap-2 text-white text-sm font-medium">
<iconify-icon className="text-lg" icon="solar:clapperboard-edit-linear"></iconify-icon>
<h3>Movimiento de Cámara</h3>
</div>
<p className="text-xs leading-relaxed">
                            Cuidar las "entradas" y "salidas". La cámara debe moverse en dirección lógica para el montaje. Transiciones B-roll.
                        </p>
</div>
</section>
<section className="space-y-6">
<div className="flex items-center justify-between border-b border-white/10 pb-4">
<h2 className="text-xl font-medium text-white tracking-tight">Escenas Principales</h2>
</div>
<div className="grid gap-6">
<div className="group">
<div className="space-y-2">
<span className="text-xs font-mono text-zinc-500 uppercase">Escena 01</span>
<h3 className="text-white font-medium">Referencia Visual</h3>
<a className="inline-flex items-center gap-2 text-xs text-blue-400 hover:text-blue-300" href="https://www.youtube.com/watch?v=q0jAC3h_4IE" target="_blank">
<span>Ver Referencia</span> <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
</div>
<div className="space-y-2">
<span className="text-xs font-mono text-zinc-500 uppercase">Escena 02</span>
<h3 className="text-white font-medium">Marca y Alcohol</h3>
<ul className="space-y-2 text-sm list-none mt-2">
<li className="flex gap-3"><iconify-icon className="mt-1 text-zinc-600" icon="solar:record-linear"></iconify-icon> Letreros, entrada, logotipos. Varios ángulos, primeros planos.</li>
<li className="flex gap-3"><iconify-icon className="mt-1 text-zinc-600" icon="solar:record-linear"></iconify-icon> Alcohol premium. Con hielera, sin hielera.</li>
<li className="flex gap-3"><iconify-icon className="mt-1 text-zinc-600" icon="solar:record-linear"></iconify-icon> Close-up de preparación de cócteles en barra.</li>
</ul>
</div>
<div className="space-y-2">
<span className="text-xs font-mono text-zinc-500 uppercase">Escena 03</span>
<h3 className="text-white font-medium">Rotación</h3>
<p className="text-sm">Grabar con movimientos de rotación.</p>
<a className="inline-flex items-center gap-2 text-xs text-blue-400 hover:text-blue-300" href="https://www.youtube.com/watch?v=eFci6pKdVDQ" target="_blank">
<span>Ver Referencia</span> <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
</div>
</section>
<section className="space-y-8">
<h2 className="text-xl font-medium text-white tracking-tight border-b border-white/10 pb-4">Bloques Detallados</h2>
<div className="glass-panel rounded-lg p-6 relative overflow-hidden">
<h3 className="text-lg text-white font-medium mb-1">BLOQUE A: Cócteles y Detalles</h3>
<p className="text-xs text-blue-400 mb-6 font-mono">PRIORIDAD #1 • 120 FPS • MACRO</p>
<div className="grid md:grid-cols-2 gap-8 text-sm">
<div className="space-y-2">
<strong className="text-white block">Burbuja de Humo (Pop)</strong>
<p>Close-up cóctel con burbuja. Momento en que se rompe y el humo se esparce.</p>
<p className="text-xs text-zinc-500 italic">IA: Burbuja se transforma en esfera de energía.</p>
</div>
<div className="space-y-2">
<strong className="text-white block">Ice Pour (Vertido)</strong>
<p>Macro de líquido golpeando hielo grande. Contraluz crítico.</p>
<p className="text-xs text-zinc-500 italic">IA: Líquido se vuelve metal líquido o lava.</p>
</div>
<div className="space-y-2">
<strong className="text-white block">Textura y Decoración</strong>
<p>Macro de vaso empañado, textura de frutas, burbujas subiendo.</p>
</div>
<div className="space-y-2">
<strong className="text-white block">El Giro (The Spin)</strong>
<p>Vaso en barra. Bartender lo gira. Grabar centrado.</p>
<p className="text-xs text-zinc-500 italic">IA: Videos en bucle perfectos.</p>
</div>
</div>
</div>
<div className="glass-panel rounded-lg p-6 relative overflow-hidden">
<h3 className="text-lg text-white font-medium mb-1">BLOQUE B: Interior y Atmósfera</h3>
<p className="text-xs text-zinc-400 mb-6 font-mono">60 FPS • GEOMETRÍA</p>
<div className="grid md:grid-cols-2 gap-8 text-sm">
<div className="space-y-2">
<strong className="text-white block">Neón Dolly-In/Out</strong>
<p>Movimiento suave hacia/desde letreros neón. Neón en foco, bokeh en fondo.</p>
</div>
<div className="space-y-2">
<strong className="text-white block">Tracking de Superficie</strong>
<p>Cámara se desliza bajo a lo largo de barra de mármol o sofá.</p>
</div>
<div className="col-span-1 md:col-span-2 space-y-2">
<strong className="text-white block">Reflejos DJ</strong>
<p>Luces de cabina DJ desenfocadas o reflejadas en copa. Fondo abstracto para IA.</p>
</div>
</div>
</div>
<div className="glass-panel rounded-lg p-6 relative overflow-hidden">
<h3 className="text-lg text-white font-medium mb-1">BLOQUE C: Personas y Acción</h3>
<p className="text-xs text-zinc-400 mb-6 font-mono">60/120 FPS • SILUETAS</p>
<div className="grid md:grid-cols-2 gap-8 text-sm">
<div className="col-span-1 md:col-span-2">
<p className="text-zinc-500 mb-4 bg-white/5 p-3 rounded border border-white/5">⚠️ Evitar caras claras. Enfocar en siluetas y manos.</p>
</div>
<div className="space-y-2">
<strong className="text-white block">Silueta con Narguile</strong>
<p>Exhalando humo contra neón brillante. Cara en sombra (120 fps).</p>
</div>
<div className="space-y-2">
<strong className="text-white block">Manos Bartender</strong>
<p>Close-up de manos con shaker o pinzas (sin cara).</p>
</div>
<div className="col-span-1 md:col-span-2 space-y-2">
<strong className="text-white block">Brindis</strong>
<p>Dos copas chocando. Contraluz para ver salpicadura (120 fps).</p>
</div>
</div>
</div>
</section>
<section className="space-y-6">
<h2 className="text-xl font-medium text-white tracking-tight border-b border-white/10 pb-4">Entregables Requeridos</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-8">
<div className="flex items-start gap-3"><iconify-icon className="text-zinc-600 mt-0.5 text-lg" icon="solar:check-square-linear"></iconify-icon><span className="text-sm">Foto de entrada</span></div>
<div className="flex items-start gap-3"><iconify-icon className="text-zinc-600 mt-0.5 text-lg" icon="solar:check-square-linear"></iconify-icon><span className="text-sm">Vuelo hacia entrada (aproximación suave)</span></div>
<div className="flex items-start gap-3"><iconify-icon className="text-zinc-600 mt-0.5 text-lg" icon="solar:check-square-linear"></iconify-icon><span className="text-sm">Foto primer plano letrero GD</span></div>
<div className="flex items-start gap-3"><iconify-icon className="text-zinc-600 mt-0.5 text-lg" icon="solar:check-square-linear"></iconify-icon><span className="text-sm">Vuelo hacia letrero GD</span></div>
<div className="flex items-start gap-3"><iconify-icon className="text-zinc-600 mt-0.5 text-lg" icon="solar:check-square-linear"></iconify-icon><span className="text-sm">Preparación de narguile</span></div>
<div className="flex items-start gap-3"><iconify-icon className="text-zinc-600 mt-0.5 text-lg" icon="solar:check-square-linear"></iconify-icon><span className="text-sm">Close-up: Bartender sirviendo desde shaker</span></div>
<div className="flex items-start gap-3"><iconify-icon className="text-zinc-600 mt-0.5 text-lg" icon="solar:check-square-linear"></iconify-icon><span className="text-sm">Encendido de cóctel o shot</span></div>
<div className="flex items-start gap-3"><iconify-icon className="text-zinc-600 mt-0.5 text-lg" icon="solar:check-square-linear"></iconify-icon><span className="text-sm">Foto de asientos vacíos</span></div>
<div className="flex items-start gap-3"><iconify-icon className="text-zinc-600 mt-0.5 text-lg" icon="solar:check-square-linear"></iconify-icon><span className="text-sm">Foto de barra, escenario, gente</span></div>
<div className="flex items-start gap-3"><iconify-icon className="text-zinc-600 mt-0.5 text-lg" icon="solar:check-square-linear"></iconify-icon><span className="text-sm">Close-up botellas alcohol</span></div>
</div>
</section>
</div>

<div className="space-y-12 hidden" id="content-ru">

<div className="space-y-6">
<div>
<h1 className="text-3xl font-semibold text-white tracking-tight mb-2">Техническое Задание</h1>
<p className="text-sm text-zinc-500">Основные требования к видео и звуку.</p>
</div>
<div className="glass-panel-info p-5 rounded-lg">
<div className="flex gap-4">
<iconify-icon className="text-indigo-400 text-xl shrink-0 mt-0.5" icon="solar:smart-home-angle-linear"></iconify-icon>
<div className="space-y-2">
<h3 className="text-white text-sm font-medium">Важный контекст: ИИ и Монтаж</h3>
<p className="text-xs text-zinc-300 leading-relaxed opacity-80">
                                    Этот материал будет использоваться для двух целей: традиционного видеомонтажа и <strong>генерации видео с помощью ИИ</strong>. 
                                    Именно поэтому в ТЗ включены специфические пункты про ИИ-совместимость (контраст, силуэты, динамика жидкостей).
                                </p>
</div>
</div>
</div>
</div>
<section className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="glass-panel p-6 rounded-lg space-y-3">
<div className="flex items-center gap-2 text-white text-sm font-medium">
<iconify-icon className="text-lg" icon="solar:microphone-3-linear"></iconify-icon>
<h3>Запись звука (Foley)</h3>
</div>
<p className="text-xs leading-relaxed">
<span className="text-white">Настоящие звуки бара:</span> В конце съемки записать на микрофон-пушку: лед, наливание, открытие банок.
                        </p>
</div>
<div className="glass-panel p-6 rounded-lg space-y-3">
<div className="flex items-center gap-2 text-white text-sm font-medium">
<iconify-icon className="text-lg" icon="solar:lightbulb-linear"></iconify-icon>
<h3>Контроль освещения</h3>
</div>
<p className="text-xs leading-relaxed">
<span className="text-white">Постоянство — залог успеха.</span> Снимайте только с контролируемым искусственным светом.
                        </p>
</div>
<div className="glass-panel p-6 rounded-lg space-y-3">
<div className="flex items-center gap-2 text-white text-sm font-medium">
<iconify-icon className="text-lg" icon="solar:videocamera-record-linear"></iconify-icon>
<h3>120 FPS</h3>
</div>
<p className="text-xs leading-relaxed">
                            Камера должна снимать в <span className="text-white">120 fps</span> для кадров с наливанием, льдом и перемешиванием.
                        </p>
</div>
<div className="glass-panel p-6 rounded-lg space-y-3">
<div className="flex items-center gap-2 text-white text-sm font-medium">
<iconify-icon className="text-lg" icon="solar:clapperboard-edit-linear"></iconify-icon>
<h3>Движение камеры</h3>
</div>
<p className="text-xs leading-relaxed">
                            Следи за «входами» и «выходами» — камера должна двигаться в логичном направлении для монтажа. B-roll переходы.
                        </p>
</div>
</section>
<section className="space-y-6">
<div className="flex items-center justify-between border-b border-white/10 pb-4">
<h2 className="text-xl font-medium text-white tracking-tight">Основные Сцены</h2>
</div>
<div className="grid gap-6">
<div className="group">
<div className="space-y-2">
<span className="text-xs font-mono text-zinc-500 uppercase">Ролик 01</span>
<h3 className="text-white font-medium">Референс Визуала</h3>
<a className="inline-flex items-center gap-2 text-xs text-blue-400 hover:text-blue-300" href="https://www.youtube.com/watch?v=q0jAC3h_4IE" target="_blank">
<span>Смотреть референс</span> <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
</div>
<div className="space-y-2">
<span className="text-xs font-mono text-zinc-500 uppercase">Ролик 02</span>
<h3 className="text-white font-medium">Бренд и Алкоголь</h3>
<ul className="space-y-2 text-sm list-none mt-2">
<li className="flex gap-3"><iconify-icon className="mt-1 text-zinc-600" icon="solar:record-linear"></iconify-icon> Вывески, входная группа, логотипы. Разные ракурсы.</li>
<li className="flex gap-3"><iconify-icon className="mt-1 text-zinc-600" icon="solar:record-linear"></iconify-icon> Дорогой алкоголь. С ведром, без ведра.</li>
<li className="flex gap-3"><iconify-icon className="mt-1 text-zinc-600" icon="solar:record-linear"></iconify-icon> Close-up приготовления коктейлей на баре.</li>
</ul>
</div>
<div className="space-y-2">
<span className="text-xs font-mono text-zinc-500 uppercase">Ролик 03</span>
<h3 className="text-white font-medium">Вращения</h3>
<p className="text-sm">Снимать с вращениями.</p>
<a className="inline-flex items-center gap-2 text-xs text-blue-400 hover:text-blue-300" href="https://www.youtube.com/watch?v=eFci6pKdVDQ" target="_blank">
<span>Смотреть референс</span> <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
</div>
</section>
<section className="space-y-8">
<h2 className="text-xl font-medium text-white tracking-tight border-b border-white/10 pb-4">Детальные Блоки</h2>
<div className="glass-panel rounded-lg p-6 relative overflow-hidden">
<h3 className="text-lg text-white font-medium mb-1">БЛОК А: Коктейли и Детали</h3>
<p className="text-xs text-blue-400 mb-6 font-mono">ПРИОРИТЕТ #1 • 120 FPS • МАКРО</p>
<div className="grid md:grid-cols-2 gap-8 text-sm">
<div className="space-y-2">
<strong className="text-white block">Дымный пузырь (Pop)</strong>
<p>Крупный план коктейля с пузырем. Момент, когда лопается пальцем и дым растекается.</p>
<p className="text-xs text-zinc-500 italic">ИИ: Пузырь -&gt; сфера энергии, дым -&gt; магическая пыль.</p>
</div>
<div className="space-y-2">
<strong className="text-white block">Налив на лед (Ice Pour)</strong>
<p>Макро: жидкость ударяется о лед. Контровой свет обязателен.</p>
<p className="text-xs text-zinc-500 italic">ИИ: Жидкость -&gt; жидкий металл или лава.</p>
</div>
<div className="space-y-2">
<strong className="text-white block">Текстура и Гарнир</strong>
<p>Макро запотевшего стекла, текстуры фрукта, пузырьков. Статика или медленное движение.</p>
</div>
<div className="space-y-2">
<strong className="text-white block">Вращение (The Spin)</strong>
<p>Бокал на стойке. Бармен закручивает. Снимать строго по центру.</p>
<p className="text-xs text-zinc-500 italic">ИИ: Идеальные зацикленные видео.</p>
</div>
</div>
</div>
<div className="glass-panel rounded-lg p-6 relative overflow-hidden">
<h3 className="text-lg text-white font-medium mb-1">БЛОК Б: Интерьер и Атмосфера</h3>
<p className="text-xs text-zinc-400 mb-6 font-mono">60 FPS • ГЕОМЕТРИЯ</p>
<div className="grid md:grid-cols-2 gap-8 text-sm">
<div className="space-y-2">
<strong className="text-white block">Неоновые проходки</strong>
<p>Плавное движение к/от вывески. Неон в фокусе, остальное боке.</p>
</div>
<div className="space-y-2">
<strong className="text-white block">Скольжение по поверхностям</strong>
<p>Камера низко вдоль стойки или дивана. Акцент на текстуре.</p>
</div>
<div className="col-span-1 md:col-span-2 space-y-2">
<strong className="text-white block">Отражения в DJ-зоне</strong>
<p>Лампочки пульта крупно в расфокусе или отражении. Абстрактный фон для ИИ.</p>
</div>
</div>
</div>
<div className="glass-panel rounded-lg p-6 relative overflow-hidden">
<h3 className="text-lg text-white font-medium mb-1">БЛОК В: Люди и Действие</h3>
<p className="text-xs text-zinc-400 mb-6 font-mono">60/120 FPS • СИЛУЭТЫ</p>
<div className="grid md:grid-cols-2 gap-8 text-sm">
<div className="col-span-1 md:col-span-2">
<p className="text-zinc-500 mb-4 bg-white/5 p-3 rounded border border-white/5">⚠️ Избегайте четких лиц (ИИ их искажает). Фокус на силуэтах и руках.</p>
</div>
<div className="space-y-2">
<strong className="text-white block">Силуэт с кальяном</strong>
<p>Выдох дыма на фоне неона. Лицо в тени, контур виден (120 fps).</p>
</div>
<div className="space-y-2">
<strong className="text-white block">Руки бармена</strong>
<p>Крупно руки с шейкером или щипцами. Блеск металла.</p>
</div>
<div className="col-span-1 md:col-span-2 space-y-2">
<strong className="text-white block">Чоканье бокалами</strong>
<p>Крупный план. Фон яркий, чтобы виден всплеск (120 fps).</p>
</div>
</div>
</div>
</section>
<section className="space-y-6">
<h2 className="text-xl font-medium text-white tracking-tight border-b border-white/10 pb-4">Необходимые Материалы</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-8">
<div className="flex items-start gap-3"><iconify-icon className="text-zinc-600 mt-0.5 text-lg" icon="solar:check-square-linear"></iconify-icon><span className="text-sm">Фотография входа</span></div>
<div className="flex items-start gap-3"><iconify-icon className="text-zinc-600 mt-0.5 text-lg" icon="solar:check-square-linear"></iconify-icon><span className="text-sm">Подлет к входу (плавное приближение)</span></div>
<div className="flex items-start gap-3"><iconify-icon className="text-zinc-600 mt-0.5 text-lg" icon="solar:check-square-linear"></iconify-icon><span className="text-sm">Крупная фотография вывески GD</span></div>
<div className="flex items-start gap-3"><iconify-icon className="text-zinc-600 mt-0.5 text-lg" icon="solar:check-square-linear"></iconify-icon><span className="text-sm">Подлет к вывеске GD</span></div>
<div className="flex items-start gap-3"><iconify-icon className="text-zinc-600 mt-0.5 text-lg" icon="solar:check-square-linear"></iconify-icon><span className="text-sm">Кальянщик раскуривает кальян</span></div>
<div className="flex items-start gap-3"><iconify-icon className="text-zinc-600 mt-0.5 text-lg" icon="solar:check-square-linear"></iconify-icon><span className="text-sm">Крупно: бармен наливает из шейкера</span></div>
<div className="flex items-start gap-3"><iconify-icon className="text-zinc-600 mt-0.5 text-lg" icon="solar:check-square-linear"></iconify-icon><span className="text-sm">Поджигание коктейля или шота</span></div>
<div className="flex items-start gap-3"><iconify-icon className="text-zinc-600 mt-0.5 text-lg" icon="solar:check-square-linear"></iconify-icon><span className="text-sm">Фото пустых посадочных мест</span></div>
<div className="flex items-start gap-3"><iconify-icon className="text-zinc-600 mt-0.5 text-lg" icon="solar:check-square-linear"></iconify-icon><span className="text-sm">Фото бара, сцены, людей</span></div>
<div className="flex items-start gap-3"><iconify-icon className="text-zinc-600 mt-0.5 text-lg" icon="solar:check-square-linear"></iconify-icon><span className="text-sm">Крупным планом бутылки</span></div>
</div>
</section>
</div>

<section className="border-t border-white/10 pt-10">
<h2 className="text-sm font-semibold text-white uppercase tracking-widest mb-6">Social References</h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<a className="glass-panel p-4 rounded flex flex-col items-center justify-center gap-2 hover:bg-white/5 transition-colors group" href="https://www.instagram.com/reel/Cx8rqOAhZjD/?igsh=ZHN6aHV6dzFqbWRh" target="_blank">
<iconify-icon className="text-2xl text-white" icon="solar:instagram-linear"></iconify-icon>
<span className="text-xs text-zinc-500 group-hover:text-zinc-300">Ref 01</span>
</a>
<a className="glass-panel p-4 rounded flex flex-col items-center justify-center gap-2 hover:bg-white/5 transition-colors group" href="https://www.instagram.com/reel/DImmI7xyUoQ/?igsh=MTFqd2FoZnpnY2x1OA==" target="_blank">
<iconify-icon className="text-2xl text-white" icon="solar:instagram-linear"></iconify-icon>
<span className="text-xs text-zinc-500 group-hover:text-zinc-300">Ref 02</span>
</a>
<a className="glass-panel p-4 rounded flex flex-col items-center justify-center gap-2 hover:bg-white/5 transition-colors group" href="https://www.instagram.com/reel/DFn4OENyx2M/?igsh=MWViNnRiMG12bHBrNg==" target="_blank">
<iconify-icon className="text-2xl text-white" icon="solar:instagram-linear"></iconify-icon>
<span className="text-xs text-zinc-500 group-hover:text-zinc-300">Ref 03</span>
</a>
<a className="glass-panel p-4 rounded flex flex-col items-center justify-center gap-2 hover:bg-white/5 transition-colors group" href="https://www.instagram.com/reel/CzHFG2nrfsj/?igsh=a3EzaXFuOTN0cnZs" target="_blank">
<iconify-icon className="text-2xl text-white" icon="solar:instagram-linear"></iconify-icon>
<span className="text-xs text-zinc-500 group-hover:text-zinc-300">Ref 04</span>
</a>
<a className="glass-panel p-4 rounded flex flex-col items-center justify-center gap-2 hover:bg-white/5 transition-colors group" href="https://www.instagram.com/reel/DTC5PgojSyJ/?igsh=MW04aDBpcjdueWVpYw==" target="_blank">
<iconify-icon className="text-2xl text-white" icon="solar:instagram-linear"></iconify-icon>
<span className="text-xs text-zinc-500 group-hover:text-zinc-300">Ref 05</span>
</a>
<a className="glass-panel p-4 rounded flex flex-col items-center justify-center gap-2 hover:bg-white/5 transition-colors group" href="https://www.instagram.com/reel/DF5NJKiNbig/?igsh=MXNqNHFkcnBtY2c4" target="_blank">
<iconify-icon className="text-2xl text-white" icon="solar:instagram-linear"></iconify-icon>
<span className="text-xs text-zinc-500 group-hover:text-zinc-300">Ref 06</span>
</a>
<a className="glass-panel p-4 rounded flex flex-col items-center justify-center gap-2 hover:bg-white/5 transition-colors group" href="https://www.instagram.com/reel/DQY7glnjGDS/?igsh=MXJweGVhM3I3M3ZpYg==" target="_blank">
<iconify-icon className="text-2xl text-white" icon="solar:instagram-linear"></iconify-icon>
<span className="text-xs text-zinc-500 group-hover:text-zinc-300">Ref 07</span>
</a>
</div>
</section>
</div>
</main>


    </>
  );
}
