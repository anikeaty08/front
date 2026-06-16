import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
stone: {
50: '#fafaf9',
100: '#f5f5f4', // Background
200: '#e7e5e4',
800: '#292524',
900: '#1c1917',
},
blue: {
500: '#3b82f6', // Accent
900: '#1e3a8a',
},
zinc: {
200: '#e4e4e7', // Border
}
},
fontFamily: {
serif: ['"Playfair Display"', 'serif'],
body: ['"Lora"', 'serif'],
},
animation: {
'sonar': 'sonar 2s infinite ease-in-out',
'fade-up': 'fadeUp 1s ease-out forwards',
},
keyframes: {
sonar: {
'0%': { transform: 'scale(1)', opacity: '0.6' },
'100%': { transform: 'scale(2)', opacity: '0' },
},
fadeUp: {
'0%': { opacity: '0', transform: 'translateY(20px)', filter: 'blur(5px)' },
'100%': { opacity: '1', transform: 'translateY(0)', filter: 'blur(0)' },
}
}
}
}
}



        lucide.createIcons();

        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.15
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            const elements = document.querySelectorAll('.reveal-on-scroll');
            elements.forEach(el => observer.observe(el));
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="relative w-full h-screen min-h-[600px] overflow-hidden flex items-center justify-center">

<div className="absolute inset-0 z-0">

<img alt="Mulheres nas dunas" className="w-full h-full object-cover opacity-90 fixed inset-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e8c40b10-bf8e-4e6d-9646-958bf8c2cf0a_3840w.jpg" style={{zIndex: '-1'}}/>
<div className="absolute inset-0 bg-stone-900/30 backdrop-blur-[2px]"></div>
<div className="bg-gradient-to-t from-stone-100 via-transparent to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="relative z-10 container mx-auto px-6 text-center text-stone-50">
<div className="relative flex items-center justify-center mb-8 reveal-on-scroll is-visible">
<div className="absolute w-16 h-16 bg-white/20 rounded-full animate-sonar"></div>
<div className="relative w-4 h-4 bg-white rounded-full shadow-[0_0_15px_rgba(255,255,255,0.8)]"></div>
</div>
<h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight mb-6 drop-shadow-lg reveal-on-scroll delay-100 is-visible">
                Serena Travessia
            </h1>
<p className="text-xl md:text-2xl font-light max-w-2xl mx-auto leading-relaxed drop-shadow-md reveal-on-scroll delay-200 is-visible">
                Experiências de bem-estar exclusivas para mulheres.
            </p>
<div className="mt-12 reveal-on-scroll delay-300 is-visible">
<a className="group inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 rounded-full hover:bg-white hover:text-stone-900 transition-all duration-500 ease-out shadow-lg" href="#proximos">
<span className="text-lg font-medium tracking-tight">Descobrir experiências</span>
<svg className="lucide lucide-arrow-down w-5 h-5 group-hover:translate-y-1 transition-transform" data-lucide="arrow-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14"></path><path d="m19 12-7 7-7-7"></path></svg>
</a>
</div>
</div>
</header>
<main className="z-20 bg-stone-100 pt-20 pb-20 relative space-y-32">

<section className="container mx-auto px-6 max-w-4xl">
<div className="space-y-8 text-center reveal-on-scroll">
<p className="text-2xl md:text-3xl font-serif text-stone-600 italic leading-relaxed">
                    "Criamos experiências presenciais que oferecem pausa real da rotina, cuidado com o corpo e espaço para reflexão, em diálogo com a natureza e o território."
                </p>
<div className="w-px h-20 bg-stone-300 mx-auto"></div>
<p className="text-xl font-light text-stone-500">
                    O Serena Travessia nasce do encontro entre turismo consciente, bem-estar e propósito.
                </p>
</div>
</section>

<section className="container mx-auto px-6 max-w-6xl">
<div className="mb-16 reveal-on-scroll text-center">
<h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight">Como o Serena se manifesta</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">

<div className="group bg-white border border-zinc-200 shadow-lg hover:shadow-xl transition-all duration-500 rounded-sm overflow-hidden reveal-on-scroll">

<div className="relative h-72 overflow-hidden">

<img alt="Imersão na natureza" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7a5aa5fa-f2c0-4846-a8aa-6341733fa19f_1600w.jpg"/>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-stone-900 px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-sm">
                            3 Dias
                        </div>
</div>
<div className="p-10">
<div className="mb-6 inline-flex p-3 bg-stone-50 rounded-full text-blue-500">
<svg className="lucide lucide-sun w-8 h-8" data-lucide="sun" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>
</div>
<h3 className="font-serif text-3xl font-medium mb-4 tracking-tight">Imersões</h3>
<p className="text-xl font-light text-stone-600 leading-relaxed mb-6">
                            Experiências profundas em destinos naturais no Nordeste. Práticas de bem-estar, convivência e passeios pelas dunas.
                        </p>
<a className="inline-flex items-center text-stone-900 border-b border-stone-300 hover:border-blue-500 hover:text-blue-500 transition-colors pb-1" href="javascript:void(0)">
                            Ver detalhes <svg className="lucide lucide-arrow-right w-4 h-4 ml-2" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>

<div className="group bg-white border border-zinc-200 shadow-lg hover:shadow-xl transition-all duration-500 rounded-sm overflow-hidden reveal-on-scroll delay-100">

<div className="relative h-72 overflow-hidden">

<img alt="Encontro de mulheres" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9e7b5371-dc1c-44cc-b9f8-7cfa8c767730_1600w.jpg"/>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-stone-900 px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-sm">
                            Curta Duração
                        </div>
</div>
<div className="p-10">
<div className="mb-6 inline-flex p-3 bg-stone-50 rounded-full text-blue-500">
<svg className="lucide lucide-users w-8 h-8" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<h3 className="font-serif text-3xl font-medium mb-4 tracking-tight">Encontros</h3>
<p className="text-xl font-light text-stone-600 leading-relaxed mb-6">
                            Vivências na vila de Maceió integrando práticas corporais, artesanais e sensoriais. Um espaço de troca e acolhimento.
                        </p>
<a className="inline-flex items-center text-stone-900 border-b border-stone-300 hover:border-blue-500 hover:text-blue-500 transition-colors pb-1" href="javascript:void(0)">
                            Ver detalhes <svg className="lucide lucide-arrow-right w-4 h-4 ml-2" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>
</section>

<section className="w-full bg-white py-12 border-y border-stone-200">
<div className="container mx-auto px-6 max-w-7xl">
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 reveal-on-scroll">

<div className="relative group overflow-hidden h-64 md:h-80 rounded-sm cursor-pointer">
<img alt="Detalhe Natureza" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e3d52282-21ad-4c68-85de-07da14f69e6b_800w.jpg" style={{}}/>
<div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/10 transition-colors"></div>
</div>

<div className="relative group overflow-hidden h-64 md:h-80 rounded-sm cursor-pointer md:mt-12">
<img alt="Meditação" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7d710da7-e8fb-4f16-968a-132a9b794e49_800w.jpg"/>
</div>

<div className="relative group overflow-hidden h-64 md:h-80 rounded-sm cursor-pointer">
<img alt="Mulher contemplando" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2e0af51e-b6cd-4d0f-9d68-878aa672837a_320w.jpg"/>
</div>

<div className="relative group overflow-hidden h-64 md:h-80 rounded-sm cursor-pointer md:mt-12">
<img alt="Textura Areia" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/08a72e1e-4e53-4893-9798-e41ff40df6d4_320w.jpg"/>
</div>
</div>
</div>
</section>

<section className="container mx-auto px-6 max-w-4xl text-center reveal-on-scroll">
<div className="mx-auto w-12 h-12 mb-8 text-blue-500">
<svg className="lucide lucide-heart-handshake w-full h-full" data-lucide="heart-handshake" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052 2.12 2.12 0 0 0-.004-3 2.124 2.124 0 1 0 3-3 2.124 2.124 0 0 0 3.004 0 2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0 2 2 0 0 1 0-2.828l2.823-2.762"></path></svg>
</div>
<h2 className="font-serif text-4xl font-medium tracking-tight mb-8">Impacto e território</h2>
<p className="text-xl md:text-2xl font-light text-stone-700 leading-relaxed">
                Acreditamos que um negócio deve cuidar do lugar que o acolhe. Parte dos recursos das experiências é destinada a ações de impacto local, como mutirões ambientais e oficinas comunitárias.
            </p>
</section>

<section className="container mx-auto px-6 max-w-4xl" id="proximos">
<div className="text-center mb-16 reveal-on-scroll">
<h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight mb-4">Próximos encontros</h2>
<div className="h-1 w-20 bg-blue-500 mx-auto rounded-full"></div>
</div>
<div className="space-y-6">

<div className="flex flex-col md:flex-row justify-between items-center bg-white p-8 border border-zinc-200 shadow-lg rounded-sm hover:border-blue-500/30 transition-colors reveal-on-scroll">
<div className="text-center md:text-left mb-6 md:mb-0">
<span className="block text-sm font-semibold uppercase tracking-widest text-blue-500 mb-2">Próxima Imersão</span>
<h3 className="font-serif text-3xl font-medium">Junho 2026</h3>
<p className="text-lg font-light text-stone-500 mt-1">Destino: Dunas do Nordeste</p>
</div>
<a className="px-8 py-3 bg-stone-900 text-stone-50 text-lg rounded-full hover:bg-blue-500 transition-colors duration-300" href="https://wa.me/558896481051?text=Oi,%20quero%20viver%20a%20experi%C3%AAncia%20do%20Serena%20Travessia%20e%20saber%20mais%20informa%C3%A7%C3%B5es%20" target="_blank">
                        Inscrever-se
                    </a>
</div>

<div className="flex flex-col md:flex-row justify-between items-center bg-white p-8 border border-zinc-200 shadow-lg rounded-sm hover:border-blue-500/30 transition-colors reveal-on-scroll delay-100">
<div className="text-center md:text-left mb-6 md:mb-0">
<span className="block text-sm font-semibold uppercase tracking-widest text-blue-500 mb-2">Recorrente</span>
<h3 className="font-serif text-3xl font-medium">Encontros Mensais</h3>
<p className="text-lg font-light text-stone-500 mt-1">Vila de Maceió</p>
</div>
<a className="px-8 py-3 bg-white border border-stone-300 text-stone-900 text-lg rounded-full hover:border-blue-500 hover:text-blue-500 transition-colors duration-300" href="javascript:void(0)">
                        Saber mais
                    </a>
</div>
</div>

<div className="mt-16 text-center reveal-on-scroll">
<p className="text-xl font-light text-stone-600 mb-6">Quer saber sobre as próximas experiências, datas e formatos?</p>
<a className="inline-flex items-center gap-3 hover:bg-green-600 transition-all hover:scale-105 text-white bg-green-600/90 rounded-full pt-4 pr-8 pb-4 pl-8 shadow-lg" href="https://wa.me/558896481051?text=Oi,%20quero%20viver%20a%20experi%C3%AAncia%20do%20Serena%20Travessia%20e%20saber%20mais%20informa%C3%A7%C3%B5es%20" target="_blank">
<svg className="lucide lucide-message-circle w-6 h-6" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>
<span className="cursor-pointer text-lg font-medium" onclick="window.location.href='https://wa.me/558896481051?text=Oi,%20quero%20viver%20a%20experi%C3%AAncia%20do%20Serena%20Travessia%20e%20saber%20mais%20informa%C3%A7%C3%B5es%20'" role="button">Quero receber informações</span>
</a>
</div>
</section>

<section className="w-full overflow-hidden py-10 bg-stone-100">
<div className="container mx-auto px-6 max-w-6xl">
<h3 className="font-serif text-3xl font-medium tracking-tight mb-12 text-center text-stone-400">Depoimentos</h3>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="bg-stone-50 p-8 border border-zinc-200/50 rounded-sm reveal-on-scroll">
<div className="flex text-blue-500 mb-4">
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-lg font-light italic text-stone-600 mb-6">"Uma pausa necessária. Me reconectei comigo mesma de uma forma que não imaginava ser possível."</p>
<p className="font-serif font-medium text-stone-900 text-sm">— Participante Imersão</p>
</div>
<div className="bg-stone-50 p-8 border border-zinc-200/50 rounded-sm reveal-on-scroll delay-100">
<div className="flex text-blue-500 mb-4">
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-lg font-light italic text-stone-600 mb-6">"A força do encontro entre mulheres é transformadora. Saí renovada e com novas amigas."</p>
<p className="font-serif font-medium text-stone-900 text-sm">— Participante Encontro</p>
</div>
<div className="bg-stone-50 p-8 border border-zinc-200/50 rounded-sm reveal-on-scroll delay-200">
<div className="flex text-blue-500 mb-4">
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-lg font-light italic text-stone-600 mb-6">"Lugar mágico, organização impecável e uma energia surreal. Recomendo a todas."</p>
<p className="font-serif font-medium text-stone-900 text-sm">— Participante Imersão</p>
</div>
</div>
</div>
</section>

<section className="container mx-auto px-6 max-w-3xl pb-20 pt-10">
<div className="bg-stone-900 text-stone-50 rounded-sm p-12 md:p-16 text-center shadow-2xl relative overflow-hidden reveal-on-scroll">
<div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-stone-800 via-stone-900 to-stone-900 z-0"></div>
<div className="relative z-10 space-y-8">
<p className="text-xl font-light text-stone-300">Autocuidado não é luxo, é necessidade.</p>
<h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight leading-tight">
                        Você sente que merece viver esse momento?
                    </h2>
<div className="pt-6 flex flex-col items-center gap-4">
<a className="w-full md:w-auto px-10 py-5 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-all shadow-lg text-lg font-medium tracking-wide" href="https://wa.me/558896481051?text=Oi,%20quero%20viver%20a%20experi%C3%AAncia%20do%20Serena%20Travessia%20e%20saber%20mais%20informa%C3%A7%C3%B5es%20" target="_blank">
                            Quero participar
                        </a>
<div className="flex gap-6 mt-6">
<a className="text-stone-400 hover:text-white transition-colors flex items-center gap-2" href="https://forms.gle/B9itGd6EaAWAcJbe6" target="_blank">
<svg className="lucide lucide-mail w-5 h-5" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
</a><a className="cursor-pointer" href="https://forms.gle/B9itGd6EaAWAcJbe6" rel="noopener noreferrer" target="_blank">Lista de Interesse</a>
<a className="text-stone-400 hover:text-white transition-colors flex items-center gap-2" href="javascript:void(0)">
<svg className="lucide lucide-instagram w-5 h-5" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
<span>Instagram</span>
</a>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-zinc-200 py-12 bg-white">
<div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-stone-500 font-light text-lg">
<p>© 2024 Serena Travessia.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-blue-500 transition-colors" href="javascript:void(0)">Contato</a>
<a className="hover:text-blue-500 transition-colors" href="javascript:void(0)">Política de Privacidade</a>
</div>
</div>
</footer>
</main>


    </>
  );
}
