import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
},
colors: {
brand: {
50: '#fffbeb',
100: '#fef3c7',
200: '#fde68a',
300: '#fcd34d',
400: '#fbbf24', // Amber base
500: '#f59e0b',
600: '#d97706',
900: '#78350f',
950: '#451a03',
},
ui: {
bg: '#0a0a0a',
card: '#121212',
accent: '#22c55e', // WhatsApp/Terminal Green
text: '#e5e5e5'
}
},
animation: {
'blob': 'blob 7s infinite',
'float': 'float 6s ease-in-out infinite',
},
keyframes: {
blob: {
'0%': { transform: 'translate(0px, 0px) scale(1)' },
'33%': { transform: 'translate(30px, -50px) scale(1.1)' },
'66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
'100%': { transform: 'translate(0px, 0px) scale(1)' },
},
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-20px)' },
}
}
}
}
}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div aria-hidden="true" className="fixed inset-0 z-0 pointer-events-none">
<div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-500/10 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob">
</div>
<div className="absolute top-0 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-2000">
</div>
<div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-brand-600/10 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-4000">
</div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-slate-950/80 backdrop-blur-md">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-xl tracking-tighter text-white font-semibold flex items-center gap-2" href="#">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center text-slate-950">
<iconify-icon icon="solar:chat-round-line-linear" width="20"></iconify-icon>
</div>
                TICHERCHAT
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
<a className="hover:text-white transition-colors" href="#problema">El Problema</a>
<a className="hover:text-white transition-colors" href="#solucion">Cómo funciona</a>
<a className="hover:text-white transition-colors" href="#beneficios">Beneficios</a>
</div>
<a className="bg-white text-slate-950 px-4 py-2 rounded-full text-sm font-medium hover:bg-slate-200 transition-colors" href="https://wa.me/529982350197?text=Hola%2C%20vi%20su%20p%C3%A1gina%20y%20quiero%20saber%20m%C3%A1s%20de%20TicherChat" target="_blank">
                Empieza hoy
            </a>
</div>
</nav>

<main className="relative z-10 pt-32 pb-20 px-6">
<div className="max-w-4xl mx-auto text-center mb-16">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-500/30 bg-brand-500/10 text-brand-400 text-xs font-medium mb-8">
<iconify-icon icon="solar:stars-minimalistic-linear"></iconify-icon>
<span>Tu salvavidas en el turno laboral</span>
</div>
<h1 className="text-5xl md:text-7xl font-semibold text-white tracking-tight leading-[1.1] mb-6">
                No necesitas un teacher. <br className="hidden md:block"/>
                Necesitas
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 to-brand-500">Ticher.</span>
</h1>
<p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                Las palabras correctas en el momento justo con <strong>pronunciación fácil</strong>. Un asistente diseñado para meseros y staff de
                servicio que quieren <span className="text-white font-medium">ganar más propinas</span>.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-3.5 bg-brand-500 hover:bg-brand-400 text-slate-950 font-medium rounded-full transition-all hover:scale-105 shadow-[0_0_20px_rgba(245,158,11,0.3)] flex items-center justify-center gap-2" href="https://wa.me/529982350197?text=Hola%2C%20vi%20su%20p%C3%A1gina%20y%20quiero%20saber%20m%C3%A1s%20de%20TicherChat" target="_blank">
<iconify-icon icon="solar:rocket-linear" width="20"></iconify-icon>
                    Quiero ganar más
                </a>
</div>
</div>

<div className="max-w-[360px] mx-auto relative animate-float">

<div aria-hidden="true" className="absolute -inset-4 bg-ui-accent/20 rounded-full blur-2xl opacity-50"></div>
<div className="relative bg-black rounded-[2.5rem] border-[6px] border-slate-900 shadow-2xl overflow-hidden ring-1 ring-white/10">

<div className="bg-black pt-4 px-5 pb-2 flex items-center justify-between z-20 relative">
<div className="flex items-center gap-3">
<iconify-icon className="text-white text-xl" icon="solar:arrow-left-linear"></iconify-icon>
<div className="flex items-center gap-2">
<iconify-icon className="text-ui-accent text-sm" icon="solar:volume-loud-linear"></iconify-icon>
<div>
<h3 className="text-white font-semibold text-sm leading-tight tracking-tight">Waiter</h3>
<p className="text-slate-500 text-[10px] font-medium leading-none">Mesero</p>
</div>
</div>
</div>
</div>

<div className="flex border-b border-white/10 bg-black mt-2">
<div className="flex-1 text-center py-2 border-b-2 border-ui-accent">
<span className="text-ui-accent text-xs font-semibold flex items-center justify-center gap-1.5">
<iconify-icon icon="solar:chat-round-line-linear"></iconify-icon>
                            Chat IA
                        </span>
</div>
<div className="flex-1 text-center py-2 border-b-2 border-transparent">
<span className="text-slate-500 text-xs font-medium flex items-center justify-center gap-1.5">
<iconify-icon icon="solar:book-bookmark-linear"></iconify-icon>
                            Lecciones
                        </span>
</div>
</div>

<div className="h-[520px] bg-black p-4 overflow-y-auto phone-scroll relative">
<div className="space-y-6 pb-20">

<div className="flex justify-end animate-[fadeIn_0.5s_ease-out]">
<div className="bg-ui-accent/10 border border-ui-accent/20 text-green-100 px-4 py-2.5 rounded-2xl rounded-tr-sm text-sm max-w-[85%]">
                                Un cliente quiere pedir la cuenta
                            </div>
</div>

<p className="text-slate-500 text-xs leading-relaxed animate-[fadeIn_0.5s_ease-out_0.2s_both]">
                            Aquí tienes algunas frases útiles para cuando un cliente pide la cuenta. ¡Sigue practicando!
                        </p>

<div className="bg-slate-900/50 rounded-2xl p-4 flex gap-3 border border-white/5 animate-[slideUp_0.5s_ease-out_0.3s_both]">
<button className="w-8 h-8 rounded-full border border-ui-accent/30 text-ui-accent flex items-center justify-center shrink-0 hover:bg-ui-accent/10 transition-colors mt-1">
<iconify-icon icon="solar:play-bold" width="12"></iconify-icon>
</button>
<div className="space-y-1">
<p className="text-white font-medium text-[15px]">Here is your bill.</p>
<p className="text-ui-accent font-mono text-[13px] tracking-wide">Jier is yur bil</p>
<p className="text-slate-500 text-[13px] italic">Aquí está su cuenta.</p>
<p className="text-slate-600 text-[10px] mt-1">Al entregar la cuenta al cliente.</p>
</div>
</div>

<div className="bg-slate-900 rounded-2xl p-4 flex gap-3 border-l-4 border-ui-accent shadow-lg shadow-green-900/10 relative overflow-hidden animate-[slideUp_0.5s_ease-out_0.4s_both]">

<div className="absolute inset-0 bg-gradient-to-r from-ui-accent/5 to-transparent pointer-events-none"></div>
<div className="flex flex-col items-center gap-2 shrink-0 mt-1">
<button className="w-8 h-8 rounded-full bg-ui-accent text-black flex items-center justify-center hover:scale-105 transition-transform">
<iconify-icon icon="solar:pause-bold" width="12"></iconify-icon>
</button>
</div>
<div className="space-y-1 w-full z-10">
<div className="flex justify-between items-start">
<p className="text-white font-medium text-[15px] leading-snug">Would you like to pay with cash or card?</p>

<div className="flex items-end gap-0.5 h-4 ml-2 pb-1">
<div className="w-0.5 bg-ui-accent h-2 animate-[pulse_0.5s_ease-in-out_infinite]"></div>
<div className="w-0.5 bg-ui-accent h-4 animate-[pulse_0.7s_ease-in-out_infinite]"></div>
<div className="w-0.5 bg-ui-accent h-3 animate-[pulse_0.6s_ease-in-out_infinite]"></div>
<div className="w-0.5 bg-ui-accent h-2 animate-[pulse_0.8s_ease-in-out_infinite]"></div>
</div>
</div>
<p className="text-ui-accent font-mono text-[13px] tracking-wide leading-snug">Wud yu laik tu pei wuit cash or card?</p>
<p className="text-slate-500 text-[13px] italic leading-snug">¿Le gustaría pagar con efectivo o tarjeta?</p>
<p className="text-slate-600 text-[10px] mt-1">Al ofrecer opciones de pago.</p>
</div>
</div>

<div className="bg-slate-900/50 rounded-2xl p-4 flex gap-3 border border-white/5 animate-[slideUp_0.5s_ease-out_0.5s_both]">
<button className="w-8 h-8 rounded-full border border-ui-accent/30 text-ui-accent flex items-center justify-center shrink-0 hover:bg-ui-accent/10 transition-colors mt-1">
<iconify-icon icon="solar:play-bold" width="12"></iconify-icon>
</button>
<div className="space-y-1">
<p className="text-white font-medium text-[15px]">Let me know if you need anything else.</p>
<p className="text-ui-accent font-mono text-[13px] tracking-wide leading-snug">Let mi nou if yu nid enithing els</p>
<p className="text-slate-500 text-[13px] italic">Avísame si necesitas algo más.</p>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
</div>

<div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-32 h-1 bg-slate-800 rounded-full"></div>
</div>
</div>
</main>

<section className="py-10 border-y border-white/5 bg-white/5">
<div className="max-w-6xl mx-auto px-6 text-center">
<p className="text-sm text-slate-500 mb-6">Ayudando a staff en los mejores destinos</p>
<div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
<span className="text-lg font-bold tracking-tight text-white">CANCÚN</span>
<span className="text-lg font-bold tracking-tight text-white">LOS CABOS</span>
<span className="text-lg font-bold tracking-tight text-white">COZUMEL</span>
<span className="text-lg font-bold tracking-tight text-white">CDMX</span>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="problema">
<div className="max-w-6xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-12 items-center">
<div>
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-6">
                        ¿Te ha pasado esto en tu turno?
                    </h2>
<p className="text-slate-400 text-lg mb-8">
                        Llega un cliente extranjero, te pregunta algo rápido y tú te quedas en blanco. Sabes que
                        perdiste una oportunidad de conectar.
                    </p>
<ul className="space-y-6">
<li className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-400 shrink-0 border border-red-500/20">
<iconify-icon icon="solar:emotion-unhappy-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-white font-medium">Miedo a equivocarte</h3>
<p className="text-slate-500 text-sm mt-1">Prefieres no hablar para no "regarla", y el
                                    servicio se siente frío.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-400 shrink-0 border border-orange-500/20">
<iconify-icon icon="solar:wallet-money-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-white font-medium">Pierdes propinas</h3>
<p className="text-slate-500 text-sm mt-1">Los clientes extranjeros pagan mejor cuando
                                    sienten una conexión personal.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 shrink-0 border border-blue-500/20">
<iconify-icon icon="solar:clock-circle-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-white font-medium">No tienes tiempo de estudiar</h3>
<p className="text-slate-500 text-sm mt-1">Trabajas turnos largos. No puedes ir a una
                                    escuela 2 horas al día.</p>
</div>
</li>
</ul>
</div>
<div className="relative">
<div aria-hidden="true" className="absolute inset-0 bg-brand-500/20 filter blur-[100px] rounded-full"></div>
<div className="glass-card rounded-2xl p-8 relative">
<div className="flex items-center justify-between mb-8 border-b border-white/5 pb-4">
<div className="text-slate-400">Situación Real</div>
<div className="text-red-400 flex items-center gap-1 text-sm">
<iconify-icon icon="solar:danger-triangle-linear"></iconify-icon>
                                Sin TicherChat
                            </div>
</div>
<div className="space-y-6">
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center shrink-0 text-xl">
                                    🇺🇸</div>
<div className="w-full">
<div className="bg-slate-800 p-3 rounded-lg rounded-tl-none text-slate-300 text-sm w-full mb-1">
                                        "Excuse me, does this dish have dairy? I'm severely allergic."
                                    </div>
<div className="flex items-center gap-1.5 text-brand-400 text-xs pl-1 opacity-90">
<iconify-icon icon="solar:volume-loud-linear"></iconify-icon>
<span className="italic">Pron: "Ekskiús mi, das dis dish jav déri? Aim sivírli aléryic"</span>
</div>
</div>
</div>
<div className="flex gap-4 flex-row-reverse">
<div className="w-10 h-10 rounded-full bg-slate-600 flex items-center justify-center shrink-0 text-xl">
                                    😫</div>
<div className="bg-slate-800/50 border border-slate-700 p-3 rounded-lg rounded-tr-none text-slate-400 text-sm w-full italic">
                                    (Pensando: ¿Dairy? ¿Qué es dairy? Ay no... solo sonreiré) "Ehh... yes? No? Sorry..."
                                </div>
</div>
<div className="mt-4 p-3 bg-red-900/20 border border-red-500/20 rounded text-red-200 text-xs text-center">
                                Resultado: Cliente inseguro = Mala propina.
                            </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900/30 border-y border-white/5" id="solucion">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-4">
                    Tu "Ticher" en el turno
                </h2>
<p className="text-slate-400 max-w-2xl mx-auto">
                    No es una app de gramática aburrida. Es una herramienta diseñada para darte la frase exacta que
                    necesitas para vender más y atender mejor.
                </p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="glass-card p-6 rounded-xl hover:border-brand-500/30 transition-colors group">
<div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center text-brand-400 mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:chat-square-like-linear" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Responde sin miedo</h3>
<p className="text-slate-400 text-sm leading-relaxed">
                        Ticher te dice exactamente qué decir con la pronunciación escrita tal como se lee en español.
                    </p>
</div>

<div className="glass-card p-6 rounded-xl hover:border-brand-500/30 transition-colors group">
<div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center text-brand-400 mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:hand-money-linear" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Aumenta tus propinas</h3>
<p className="text-slate-400 text-sm leading-relaxed">
                        Un cliente bien atendido en su idioma deja entre un 15% y 25% más de propina.
                    </p>
</div>

<div className="glass-card p-6 rounded-xl hover:border-brand-500/30 transition-colors group">
<div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center text-brand-400 mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:smartphone-2-linear" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Sin estudiar gramática</h3>
<p className="text-slate-400 text-sm leading-relaxed">
                        No necesitas saber qué es el "Present Perfect". Solo necesitas saber cómo vender el especial del
                        día.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6">
<div className="max-w-4xl mx-auto">
<h2 className="text-center text-3xl font-semibold text-white mb-12 tracking-tight">
                ¿Por qué TicherChat es diferente?
            </h2>
<div className="grid md:grid-cols-2 gap-8">

<div className="p-8 rounded-2xl border border-slate-800 bg-slate-900/50 opacity-75">
<div className="flex items-center gap-3 mb-6">
<iconify-icon className="text-slate-500" icon="solar:book-2-linear" width="24"></iconify-icon>
<h3 className="text-lg font-medium text-slate-300">Curso Tradicional</h3>
</div>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-slate-500 text-sm">
<iconify-icon className="text-red-900" icon="solar:close-circle-linear"></iconify-icon>
                            Símbolos raros de fonética (/ðə/)
                        </li>
<li className="flex items-center gap-3 text-slate-500 text-sm">
<iconify-icon className="text-red-900" icon="solar:close-circle-linear"></iconify-icon>
                            Te toma meses ver resultados
                        </li>
<li className="flex items-center gap-3 text-slate-500 text-sm">
<iconify-icon className="text-red-900" icon="solar:close-circle-linear"></iconify-icon>
                            Ejemplos de libros viejos
                        </li>
<li className="flex items-center gap-3 text-slate-500 text-sm">
<iconify-icon className="text-red-900" icon="solar:close-circle-linear"></iconify-icon>
                            Aburrido y académico
                        </li>
</ul>
</div>

<div className="p-8 rounded-2xl border border-brand-500/30 bg-gradient-to-b from-brand-900/10 to-slate-900 relative">
<div className="absolute top-0 right-0 bg-brand-500 text-slate-950 text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                        RECOMENDADO</div>
<div className="flex items-center gap-3 mb-6">
<iconify-icon className="text-brand-400" icon="solar:chat-round-check-linear" width="24"></iconify-icon>
<h3 className="text-lg font-medium text-white">TicherChat</h3>
</div>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-slate-200 text-sm">
<iconify-icon className="text-brand-500" icon="solar:check-circle-linear"></iconify-icon>
                            Pronunciación figurada (da)
                        </li>
<li className="flex items-center gap-3 text-slate-200 text-sm">
<iconify-icon className="text-brand-500" icon="solar:check-circle-linear"></iconify-icon>
                            Resultados inmediatos en tu turno
                        </li>
<li className="flex items-center gap-3 text-slate-200 text-sm">
<iconify-icon className="text-brand-500" icon="solar:check-circle-linear"></iconify-icon>
                            Situaciones reales de trabajo
                        </li>
<li className="flex items-center gap-3 text-slate-200 text-sm">
<iconify-icon className="text-brand-500" icon="solar:check-circle-linear"></iconify-icon>
                            Divertido, práctico y rápido
                        </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="pricing">
<div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-brand-900/20 via-slate-950 to-slate-950"></div>
<div className="max-w-3xl mx-auto px-6 relative z-10 text-center">
<h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-6">
                Invierte en ti. <br/> Recupera la inversión en un turno.
            </h2>
<p className="text-slate-400 text-lg mb-10">
                El precio de TicherChat es menos de lo que ganas en una buena propina de una mesa extranjera.
            </p>
<div className="glass-card p-1 rounded-2xl max-w-md mx-auto relative group">

<div aria-hidden="true" className="absolute -inset-0.5 bg-gradient-to-b from-brand-500 to-brand-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
<div className="bg-slate-950 rounded-xl p-8 relative">

<div className="flex justify-center mb-4">
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-950 border border-brand-500/30 text-brand-400 text-xs font-semibold tracking-wide uppercase">
<iconify-icon icon="solar:ticket-sale-linear"></iconify-icon>
                            Oferta de Lanzamiento
                        </span>
</div>

<div className="text-center mb-6">
<p className="text-slate-500 text-sm mb-1 font-medium">Precio normal: <span className="line-through decoration-slate-600">$250 MXN</span></p>
<div className="flex items-baseline justify-center gap-1">
<span className="text-5xl font-bold text-white tracking-tighter">$199</span>
<span className="text-slate-400 font-medium">MXN / mes</span>
</div>
</div>

<div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3 mb-8 flex items-start gap-3 text-left">
<div className="text-red-400 mt-0.5 animate-pulse shrink-0">
<iconify-icon icon="solar:fire-bold" width="16"></iconify-icon>
</div>
<div>
<p className="text-red-200 text-xs font-semibold">¡Cupo Limitado!</p>
<p className="text-red-200/70 text-[10px] leading-relaxed">
                                Esta oferta es exclusiva para los <strong className="text-red-100 font-medium">primeros 10 usuarios</strong>. Después regresará a su precio regular.
                            </p>
</div>
</div>
<ul className="space-y-3 mb-8 text-left max-w-xs mx-auto">
<li className="flex items-center gap-2 text-sm text-slate-300">
<iconify-icon className="text-brand-500" icon="solar:check-read-linear"></iconify-icon>
                            Acceso ilimitado al chat
                        </li>
<li className="flex items-center gap-2 text-sm text-slate-300">
<iconify-icon className="text-brand-500" icon="solar:check-read-linear"></iconify-icon>
                            Pronunciación simplificada
                        </li>
<li className="flex items-center gap-2 text-sm text-slate-300">
<iconify-icon className="text-brand-500" icon="solar:check-read-linear"></iconify-icon>
                            Acceso a Lecciones
                        </li>
</ul>
<a className="block w-full py-4 bg-brand-500 hover:bg-brand-400 text-slate-950 font-semibold rounded-xl transition-all hover:scale-[1.02] shadow-lg shadow-brand-500/20" href="https://wa.me/529982350197?text=Hola%2C%20vi%20su%20p%C3%A1gina%20y%20quiero%20saber%20m%C3%A1s%20de%20TicherChat" target="_blank">
                        Apartar mi lugar
                    </a>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-slate-950 py-12 px-6 text-sm">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2 text-slate-300 font-semibold">
<iconify-icon className="text-brand-500" icon="solar:chat-round-line-linear"></iconify-icon>
                TICHERCHAT
            </div>
<div className="flex gap-6 text-slate-500">
<a className="hover:text-white transition-colors" href="#">Términos</a>
<a className="hover:text-white transition-colors" href="#">Privacidad</a>
<a className="hover:text-white transition-colors" href="#">Soporte</a>
</div>
<div className="text-slate-600">
                © 2023 TicherChat. Hecho en México 🇲🇽
            </div>
</div>
</footer>

    </>
  );
}
