import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['"Plus Jakarta Sans"', 'sans-serif'],
},
colors: {
brand: {
orange: '#FF4D00',
black: '#0A0A0A',
cream: '#F9F9F7',
gray: '#888888'
}
},
animation: {
'spin-slow': 'spin 30s linear infinite',
'fade-in': 'fadeIn 0.5s ease-out forwards',
},
keyframes: {
fadeIn: {
'0%': { opacity: '0', transform: 'translateY(10px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
}
}
}
}



        // Data for the Symptoms Section
        const symptomData = [
            {
                title: "Flexibilidade Total",
                desc: "Ajustamos sua dieta baseada nos imprevistos do dia a dia, para você nunca mais abandonar o plano.",
                image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=1000",
                color: "text-white"
            },
            {
                title: "Metabolismo Estável",
                desc: "Chega de perder e ganhar. Criamos um déficit calórico inteligente que seu corpo aceita a longo prazo.",
                image: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&q=80&w=1000",
                color: "text-white"
            },
            {
                title: "Comer com Prazer",
                desc: "Nenhuma comida é proibida. Ensinamos como incluir chocolate e pizza na sua rotina sem estragar o progresso.",
                image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=1000",
                color: "text-white"
            },
            {
                title: "Energia o Dia Todo",
                desc: "Sincronizamos nutrientes com seus picos de trabalho para eliminar o sono depois do almoço.",
                image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&q=80&w=1000",
                color: "text-white"
            }
        ];

        // Symptoms Logic
        const symptomItems = document.querySelectorAll('.symptom-item');
        const symptomImg = document.getElementById('symptom-image');
        const symptomTitle = document.getElementById('symptom-title');
        const symptomDesc = document.getElementById('symptom-desc');

        symptomItems.forEach(item => {
            item.addEventListener('click', () => {
                // Reset styles
                symptomItems.forEach(i => {
                    i.classList.remove('bg-white', 'shadow-lg');
                    i.classList.add('hover:bg-white');
                    const icon = i.querySelector('iconify-icon:first-child');
                    const text = i.querySelector('span');
                    const arrow = i.querySelector('iconify-icon:last-child');
                    
                    if(icon) icon.className = "text-gray-400 group-hover:text-brand-orange";
                    if(text) {
                        text.classList.remove('text-gray-900');
                        text.classList.add('text-gray-400');
                    }
                    if(arrow) arrow.style.opacity = '0';
                });

                // Active style
                item.classList.add('bg-white', 'shadow-lg');
                item.classList.remove('hover:bg-white');
                
                const activeIcon = item.querySelector('iconify-icon:first-child');
                const activeText = item.querySelector('span');
                const activeArrow = item.querySelector('iconify-icon:last-child');

                if(activeIcon) activeIcon.className = "text-brand-orange";
                if(activeText) {
                    activeText.classList.remove('text-gray-400');
                    activeText.classList.add('text-gray-900');
                }
                if(activeArrow) {
                    activeArrow.style.opacity = '1';
                    activeArrow.className = "text-brand-orange";
                }

                // Update Content
                const index = item.getAttribute('data-index');
                const data = symptomData[index];
                
                symptomImg.style.opacity = '0';
                setTimeout(() => {
                    symptomImg.src = data.image;
                    symptomTitle.innerText = data.title;
                    symptomDesc.innerText = data.desc;
                    symptomImg.style.opacity = '1';
                }, 200);
            });
        });

        // FAQ Accordion Logic
        const faqBtns = document.querySelectorAll('.faq-btn');
        faqBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const content = btn.nextElementSibling;
                const icon = btn.querySelector('iconify-icon');
                
                // Toggle current
                if (content.classList.contains('hidden')) {
                    content.classList.remove('hidden');
                    icon.setAttribute('icon', 'solar:minus-circle-linear');
                    icon.classList.add('text-brand-orange');
                } else {
                    content.classList.add('hidden');
                    icon.setAttribute('icon', 'solar:add-circle-linear');
                    icon.classList.remove('text-brand-orange');
                }
            });
        });

        // Mobile Menu Logic
        const menuBtn = document.getElementById('mobile-menu-btn');
        const closeBtn = document.getElementById('close-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileLinks = document.querySelectorAll('.mobile-link');

        function toggleMenu() {
            mobileMenu.classList.toggle('translate-x-full');
            document.body.classList.toggle('overflow-hidden');
        }

        menuBtn.addEventListener('click', toggleMenu);
        closeBtn.addEventListener('click', toggleMenu);
        
        mobileLinks.forEach(link => {
            link.addEventListener('click', toggleMenu);
        });

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed w-full top-0 z-50 transition-all duration-300 pt-6 px-4 md:px-6">
<div className="max-w-[1400px] mx-auto bg-black/80 backdrop-blur-xl rounded-full px-6 py-3 md:py-4 flex items-center justify-between border border-white/10 shadow-2xl shadow-black/20">
<div className="flex items-center gap-8">
<a className="text-xl font-bold tracking-tighter text-white flex items-center gap-2" href="#">
<div className="w-6 h-6 bg-brand-orange rounded-full"></div>
                    soliv
                </a>
<div className="hidden md:flex items-center gap-6 text-sm font-medium text-white/70">
<a className="hover:text-white transition-colors" href="#como-funciona">Como funciona</a>
<a className="hover:text-white transition-colors" href="#sintomas">Sintomas</a>
<a className="hover:text-white transition-colors" href="#faq">FAQ</a>
</div>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:block text-sm font-medium text-white hover:text-white/80" href="#">Login</a>
<a className="bg-brand-orange text-white px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wide hover:bg-orange-600 transition-all" href="#">
                    Começar
                </a>

<button className="md:hidden text-white pt-1" id="mobile-menu-btn">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>

<div className="fixed inset-0 bg-black/95 backdrop-blur-xl z-40 transform translate-x-full transition-transform duration-300 flex flex-col items-center justify-center space-y-8" id="mobile-menu">
<button className="absolute top-8 right-8 text-white/50 hover:text-white" id="close-menu-btn">
<iconify-icon icon="solar:close-circle-linear" width="40"></iconify-icon>
</button>
<a className="text-2xl font-medium text-white mobile-link" href="#como-funciona">Como funciona</a>
<a className="text-2xl font-medium text-white mobile-link" href="#sintomas">Sintomas</a>
<a className="text-2xl font-medium text-white mobile-link" href="#faq">FAQ</a>
<a className="text-2xl font-medium text-brand-orange mobile-link" href="#">Entrar</a>
</div>
</nav>

<header className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-brand-black">

<div className="absolute inset-0 z-0">
<img alt="Woman portrait" className="w-full h-full object-cover opacity-50 scale-105" src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-brand-black"></div>
<div className="absolute inset-0 bg-orange-950/30 mix-blend-overlay"></div>
</div>
<div className="relative z-10 text-center px-6 max-w-5xl mx-auto mt-20">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-white/80 text-[10px] uppercase tracking-widest font-bold mb-6 hover:bg-white/10 transition-colors cursor-default">
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                Vagas abertas para Beta
            </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold text-white tracking-tighter leading-[0.9] mb-8">
                Inteligência para<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/50">seu bem-estar.</span>
</h1>
<p className="text-lg md:text-xl text-white/70 max-w-xl mx-auto mb-10 font-medium leading-relaxed">
                Consistência nasce da flexibilidade. O primeiro app que detecta sua rotina e adapta sua alimentação em tempo real.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-brand-orange text-white px-8 py-4 rounded-full font-bold hover:bg-orange-600 transition-all transform hover:scale-105 shadow-lg shadow-orange-900/50" href="#">
<span>Começar jornada</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>
<a className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-md text-white border border-white/10 px-8 py-4 rounded-full font-bold hover:bg-white/20 transition-all" href="#demo">
<iconify-icon icon="solar:play-circle-linear" width="20"></iconify-icon>
<span>Ver demo</span>
</a>
</div>
<div className="mt-12 flex items-center justify-center gap-6 text-xs font-medium text-white/40 uppercase tracking-widest border-t border-white/5 pt-8 max-w-lg mx-auto">
<div className="flex items-center gap-2">
<iconify-icon icon="solar:shield-check-linear" width="16"></iconify-icon>
<span>Nutricionistas</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon icon="solar:lock-keyhole-linear" width="16"></iconify-icon>
<span>Dados Seguros</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon icon="solar:refresh-circle-linear" width="16"></iconify-icon>
<span>IA Adaptativa</span>
</div>
</div>
</div>
</header>

<section className="py-32 bg-brand-cream relative overflow-hidden">
<div className="max-w-[1400px] mx-auto px-6 text-center">
<div className="relative max-w-3xl mx-auto h-[600px] flex items-center justify-center">

<div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
<svg className="w-[800px] h-[800px] animate-spin-slow" viewbox="0 0 100 100">
<circle cx="50" cy="50" fill="none" r="45" stroke="currentColor" stroke-dasharray="1 2" strokeWidth="0.2"></circle>
<circle cx="50" cy="50" fill="none" r="35" stroke="currentColor" stroke-dasharray="0.5 3" strokeWidth="0.2"></circle>
<circle cx="50" cy="50" fill="none" r="25" stroke="currentColor" strokeWidth="0.2"></circle>
</svg>
</div>

<div className="absolute top-10 left-0 md:left-10 bg-white/80 backdrop-blur p-4 rounded-2xl shadow-xl shadow-black/5 border border-black/5 animate-bounce" style={{animationDuration: '4s'}}>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-green-50 border border-green-100 flex items-center justify-center text-green-600">
<iconify-icon icon="solar:calendar-linear" width="20"></iconify-icon>
</div>
<div className="text-left">
<p className="text-[10px] uppercase tracking-wide text-gray-400 font-bold">Status</p>
<p className="text-sm font-bold text-gray-900">Agenda Sincronizada</p>
</div>
</div>
</div>
<div className="absolute bottom-20 right-0 md:right-10 bg-white/80 backdrop-blur p-4 rounded-2xl shadow-xl shadow-black/5 border border-black/5 animate-bounce" style={{animationDuration: '5s'}}>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
<iconify-icon icon="solar:chef-hat-linear" width="20"></iconify-icon>
</div>
<div className="text-left">
<p className="text-[10px] uppercase tracking-wide text-gray-400 font-bold">Sugestão</p>
<p className="text-sm font-bold text-gray-900">Jantar em 15min</p>
</div>
</div>
</div>
<div className="hidden md:block absolute top-1/3 right-0 bg-white/80 backdrop-blur p-4 rounded-2xl shadow-xl shadow-black/5 border border-black/5 animate-bounce" style={{animationDuration: '6s'}}>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-orange-50 border border-orange-100 flex items-center justify-center text-brand-orange">
<iconify-icon icon="solar:bolt-linear" width="20"></iconify-icon>
</div>
<div className="text-left">
<p className="text-[10px] uppercase tracking-wide text-gray-400 font-bold">Energia</p>
<p className="text-sm font-bold text-gray-900">Pico de foco</p>
</div>
</div>
</div>

<div className="relative z-10 glass-panel p-12 md:p-16 rounded-full shadow-2xl border border-white/50">
<h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
                        Começa com<br/>
<span className="text-brand-orange">adaptação</span> real.
                    </h2>
<p className="text-gray-500 text-sm font-medium mb-8 max-w-xs mx-auto leading-relaxed">
                        Do horário da reunião ao nível de energia, detectamos mais de 50 variáveis na sua rotina.
                    </p>
<a className="inline-flex items-center gap-2 bg-brand-black text-white px-6 py-3 rounded-full font-bold text-xs uppercase tracking-wider hover:bg-gray-800 transition-colors shadow-lg shadow-black/10" href="#como-funciona">
                        Como funciona <iconify-icon icon="solar:arrow-down-linear" width="14"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="como-funciona">
<div className="max-w-[1400px] mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div>
<p className="text-xs font-bold tracking-widest text-brand-orange uppercase mb-4 flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-brand-orange"></span>
                        A Ciência do Hábito
                    </p>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-gray-900 max-w-lg">
                        Saiba o que finalmente está acontecendo.
                    </h2>
</div>
<a className="group flex items-center gap-2 text-sm font-bold text-brand-black border-b border-brand-black/20 pb-1 hover:border-brand-black transition-all" href="#">
                    Criar meu plano personalizado <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative h-[520px] rounded-[2rem] overflow-hidden bg-gray-100 cursor-pointer">
<img alt="Yoga" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1544367563-12123d896889?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
<div className="absolute top-8 left-8 right-8">
<div className="flex justify-between items-start">
<span className="bg-white/10 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1 rounded-full border border-white/20 uppercase">Rotina</span>
<span className="text-white/50 font-mono text-xl">01</span>
</div>
</div>
<div className="absolute bottom-8 left-8 right-8">
<div className="bg-white/10 backdrop-blur-md border border-white/10 p-4 rounded-2xl mb-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
<div className="flex justify-between items-center mb-2">
<span className="text-[10px] text-white/70 uppercase font-bold">Detecção de Estresse</span>
<iconify-icon className="text-brand-orange" icon="solar:pulse-linear"></iconify-icon>
</div>
<div className="h-1 bg-white/20 rounded-full overflow-hidden">
<div className="h-full w-[80%] bg-brand-orange"></div>
</div>
</div>
<h3 className="text-2xl font-bold text-white mb-2">Sua rotina, quantificada</h3>
<p className="text-white/70 text-sm leading-relaxed">Entendemos seus picos de estresse e sugerimos pausas estratégicas.</p>
</div>
</div>

<div className="group relative h-[520px] rounded-[2rem] overflow-hidden bg-gray-100 cursor-pointer">
<img alt="Food" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
<div className="absolute top-8 left-8 right-8">
<div className="flex justify-between items-start">
<span className="bg-white/10 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1 rounded-full border border-white/20 uppercase">Nutrição</span>
<span className="text-white/50 font-mono text-xl">02</span>
</div>
</div>
<div className="absolute bottom-8 left-8 right-8">
<div className="bg-white/10 backdrop-blur-md border border-white/10 p-4 rounded-2xl mb-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
<div className="flex justify-between items-center text-white text-xs mb-1">
<span>Almoço</span>
<span className="text-brand-orange font-bold">Recalculado</span>
</div>
<p className="text-[10px] text-white/60">De: Lasanha → Para: Salada Proteica</p>
</div>
<h3 className="text-2xl font-bold text-white mb-2">Dieta flexível</h3>
<p className="text-white/70 text-sm leading-relaxed">Almoço pesado? O app recalcula o jantar automaticamente.</p>
</div>
</div>

<div className="group relative h-[520px] rounded-[2rem] overflow-hidden bg-gray-100 cursor-pointer">
<img alt="Coach" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
<div className="absolute top-8 left-8 right-8">
<div className="flex justify-between items-start">
<span className="bg-white/10 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1 rounded-full border border-white/20 uppercase">Mente</span>
<span className="text-white/50 font-mono text-xl">03</span>
</div>
</div>
<div className="absolute bottom-8 left-8 right-8">
<div className="bg-white/10 backdrop-blur-md border border-white/10 p-4 rounded-2xl mb-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-200">
<div className="flex items-center gap-3">
<div className="flex -space-x-2">
<img alt="u1" className="w-6 h-6 rounded-full border border-black" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&amp;fit=crop&amp;w=100"/>
<img alt="u2" className="w-6 h-6 rounded-full border border-black" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&amp;fit=crop&amp;w=100"/>
</div>
<span className="text-[10px] text-white/80">+200 pessoas online</span>
</div>
</div>
<h3 className="text-2xl font-bold text-white mb-2">Sem culpa</h3>
<p className="text-white/70 text-sm leading-relaxed">Celebramos o progresso. Pule um dia e volte sem julgamentos.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-brand-cream border-t border-brand-black/5" id="sintomas">
<div className="max-w-[1400px] mx-auto px-6">
<div className="mb-20">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-gray-900 text-center">
                    Seus problemas são sinais.<br/>
                    Nós decodificamos para você.
                </h2>
</div>
<div className="grid lg:grid-cols-2 gap-12 items-center">

<div className="space-y-2" id="symptoms-list">

<div className="symptom-item p-6 rounded-2xl cursor-pointer transition-all duration-300 flex items-center justify-between group bg-white shadow-lg shadow-black/5" data-index="0">
<div className="flex items-center gap-4">
<iconify-icon className="text-brand-orange" icon="solar:clock-circle-linear" width="24"></iconify-icon>
<span className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">Agenda Rígida</span>
</div>
<iconify-icon className="text-gray-300 group-hover:text-brand-orange transition-colors" icon="solar:arrow-right-linear"></iconify-icon>
</div>
<div className="symptom-item p-6 rounded-2xl cursor-pointer transition-all duration-300 flex items-center justify-between group hover:bg-white hover:shadow-lg hover:shadow-black/5" data-index="1">
<div className="flex items-center gap-4">
<iconify-icon className="text-gray-400 group-hover:text-brand-orange" icon="solar:graph-down-linear" width="24"></iconify-icon>
<span className="text-2xl md:text-3xl font-bold text-gray-400 group-hover:text-gray-900 transition-colors tracking-tight">Efeito Sanfona</span>
</div>
</div>
<div className="symptom-item p-6 rounded-2xl cursor-pointer transition-all duration-300 flex items-center justify-between group hover:bg-white hover:shadow-lg hover:shadow-black/5" data-index="2">
<div className="flex items-center gap-4">
<iconify-icon className="text-gray-400 group-hover:text-brand-orange" icon="solar:forbidden-circle-linear" width="24"></iconify-icon>
<span className="text-2xl md:text-3xl font-bold text-gray-400 group-hover:text-gray-900 transition-colors tracking-tight">Culpa ao comer</span>
</div>
</div>
<div className="symptom-item p-6 rounded-2xl cursor-pointer transition-all duration-300 flex items-center justify-between group hover:bg-white hover:shadow-lg hover:shadow-black/5" data-index="3">
<div className="flex items-center gap-4">
<iconify-icon className="text-gray-400 group-hover:text-brand-orange" icon="solar:battery-charge-minimalistic-linear" width="24"></iconify-icon>
<span className="text-2xl md:text-3xl font-bold text-gray-400 group-hover:text-gray-900 transition-colors tracking-tight">Baixa Energia</span>
</div>
</div>
</div>

<div className="relative h-[600px] rounded-[3rem] overflow-hidden shadow-2xl shadow-brand-orange/10 group">
<img alt="Visual" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" id="symptom-image" src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
<div className="absolute inset-0 bg-brand-orange/20 mix-blend-multiply"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

<div className="absolute bottom-12 left-12 right-12">
<div className="flex items-end justify-between">
<div>
<p className="text-brand-orange font-bold uppercase tracking-widest text-xs mb-2">Solução Soliv</p>
<h3 className="text-3xl font-bold text-white mb-4" id="symptom-title">Flexibilidade Total</h3>
<p className="text-white/80 text-sm leading-relaxed max-w-sm animate-fade-in" id="symptom-desc">
                                    Ajustamos sua dieta baseada nos imprevistos do dia a dia, para você nunca mais abandonar o plano.
                                </p>
</div>
<div className="bg-white/10 backdrop-blur-md border border-white/20 p-3 rounded-full">
<iconify-icon className="text-white" icon="solar:magic-stick-3-linear" width="32"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-gradient-to-b from-orange-50 to-white overflow-hidden">
<div className="max-w-[1400px] mx-auto px-6 text-center">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-brand-orange mb-4">
                Um assistente de saúde pessoal
            </h2>
<h3 className="text-4xl md:text-5xl font-semibold tracking-tighter text-gray-900 mb-16">
                no seu bolso.
            </h3>
<div className="relative max-w-sm mx-auto">

<div className="relative z-10 bg-black rounded-[3rem] p-3 shadow-2xl shadow-orange-500/20 border-[8px] border-black">
<div className="bg-white rounded-[2.2rem] overflow-hidden h-[700px] relative flex flex-col">

<div className="p-6 bg-gray-50 flex-1 overflow-hidden relative">

<div className="flex justify-between items-center mb-8">
<iconify-icon className="text-gray-800" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
<div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden border border-gray-100">
<img alt="User" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=crop&amp;w=100"/>
</div>
</div>

<div className="bg-white p-6 rounded-3xl shadow-sm mb-6 text-left border border-gray-100 relative">
<div className="absolute -top-3 -left-3 bg-brand-orange text-white text-[10px] font-bold px-2 py-1 rounded-lg shadow-sm">IA</div>
<p className="text-xs text-gray-400 font-bold uppercase mb-2 flex items-center gap-1">
<iconify-icon icon="solar:clock-circle-linear" width="10"></iconify-icon> 12:30
                                </p>
<h4 className="text-2xl font-bold text-gray-900 mb-2">Almoço rápido?</h4>
<p className="text-sm text-gray-500 mb-4 leading-relaxed">Vi que você tem reunião em 20 min. Que tal uma salada proteica para manter o foco?</p>
<button className="w-full bg-black text-white py-3 rounded-xl font-bold text-xs uppercase tracking-wide hover:bg-gray-800 transition-colors flex items-center justify-center gap-2">
<iconify-icon icon="solar:chef-hat-linear" width="16"></iconify-icon> Ver receita (15 min)
                                </button>
</div>

<div className="grid grid-cols-2 gap-4">
<div className="bg-orange-50 p-4 rounded-3xl text-left border border-orange-100">
<iconify-icon className="text-brand-orange mb-2" icon="solar:flame-linear" width="24"></iconify-icon>
<p className="text-2xl font-bold text-gray-900">420</p>
<p className="text-xs text-orange-700 font-bold uppercase">Kcal Almoço</p>
</div>
<div className="bg-blue-50 p-4 rounded-3xl text-left border border-blue-100">
<iconify-icon className="text-blue-500 mb-2" icon="solar:water-linear" width="24"></iconify-icon>
<p className="text-2xl font-bold text-gray-900">1.2L</p>
<p className="text-xs text-blue-700 font-bold uppercase">Hidratação</p>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-gray-50 to-transparent h-20"></div>
</div>

<div className="bg-white border-t border-gray-100 p-4 flex justify-around items-center text-gray-400">
<iconify-icon className="text-brand-orange" icon="solar:home-smile-linear" width="24"></iconify-icon>
<iconify-icon icon="solar:calendar-linear" width="24"></iconify-icon>
<div className="w-12 h-12 bg-black rounded-full text-white flex items-center justify-center -mt-8 border-4 border-white shadow-lg">
<iconify-icon icon="solar:add-circle-linear" width="24"></iconify-icon>
</div>
<iconify-icon icon="solar:graph-up-linear" width="24"></iconify-icon>
<iconify-icon icon="solar:user-circle-linear" width="24"></iconify-icon>
</div>
</div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-300/30 rounded-full blur-3xl -z-0"></div>
</div>
</div>
</section>

<section className="py-24 bg-brand-cream border-t border-gray-100">
<div className="max-w-[1400px] mx-auto px-6">
<div className="flex justify-between items-end mb-12">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-gray-900">
                    Quem usa, ama.
                </h2>
<div className="flex gap-2">
<button className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-all">
<iconify-icon icon="solar:arrow-left-linear" width="20"></iconify-icon>
</button>
<button className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-all">
<iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
</div>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
<div className="flex gap-1 text-brand-orange mb-4">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-gray-900 font-medium mb-6 leading-relaxed">"O único app que entendeu que minha vida não é perfeita. Se eu tenho uma reunião e como um lanche, ele ajusta o resto do dia. Genial."</p>
<div className="flex items-center gap-3">
<img alt="User" className="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=50"/>
<div>
<p className="text-sm font-bold text-gray-900">Mariana Costa</p>
<p className="text-xs text-gray-400">Designer de Produto</p>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
<div className="flex gap-1 text-brand-orange mb-4">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-gray-900 font-medium mb-6 leading-relaxed">"Integrou direto com meu Google Calendar. Ele sabe quando estou ocupado e sugere snacks fáceis. -4kg em um mês sem sentir."</p>
<div className="flex items-center gap-3">
<img alt="User" className="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=50"/>
<div>
<p className="text-sm font-bold text-gray-900">Carlos Mendes</p>
<p className="text-xs text-gray-400">Desenvolvedor Senior</p>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
<div className="flex gap-1 text-brand-orange mb-4">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-linear" width="16"></iconify-icon>
</div>
<p className="text-gray-900 font-medium mb-6 leading-relaxed">"A função de 'Sair da Dieta' sem culpa é libertadora. O app apenas recalcula e seguimos em frente. Saúde mental agradece."</p>
<div className="flex items-center gap-3">
<img alt="User" className="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&amp;fit=crop&amp;w=50"/>
<div>
<p className="text-sm font-bold text-gray-900">Ana Beatriz</p>
<p className="text-xs text-gray-400">Advogada</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="faq">
<div className="max-w-[800px] mx-auto px-6">
<h2 className="text-3xl font-semibold tracking-tighter text-gray-900 mb-12 text-center">Perguntas Frequentes</h2>
<div className="space-y-4" id="faq-container">

<div className="group border-b border-gray-100 pb-4">
<button className="w-full flex justify-between items-center text-left text-lg font-medium text-gray-900 py-2 focus:outline-none faq-btn">
<span>Como funciona a integração com a agenda?</span>
<iconify-icon className="text-gray-400 transition-transform duration-300" icon="solar:add-circle-linear" width="24"></iconify-icon>
</button>
<div className="hidden text-gray-500 leading-relaxed mt-2 faq-content">
                        Conectamos com Google Calendar e Outlook. O Soliv analisa seus blocos de tempo livre e sugere refeições que se encaixam naquele intervalo (ex: receita de 15min se você tem pouco tempo).
                    </div>
</div>

<div className="group border-b border-gray-100 pb-4">
<button className="w-full flex justify-between items-center text-left text-lg font-medium text-gray-900 py-2 focus:outline-none faq-btn">
<span>Posso usar se tiver restrições alimentares?</span>
<iconify-icon className="text-gray-400 transition-transform duration-300" icon="solar:add-circle-linear" width="24"></iconify-icon>
</button>
<div className="hidden text-gray-500 leading-relaxed mt-2 faq-content">
                        Sim! Vegano, sem glúten, sem lactose, low carb. Na configuração inicial você define tudo o que não come e a IA filtra as receitas e sugestões.
                    </div>
</div>

<div className="group border-b border-gray-100 pb-4">
<button className="w-full flex justify-between items-center text-left text-lg font-medium text-gray-900 py-2 focus:outline-none faq-btn">
<span>Tem período de teste gratuito?</span>
<iconify-icon className="text-gray-400 transition-transform duration-300" icon="solar:add-circle-linear" width="24"></iconify-icon>
</button>
<div className="hidden text-gray-500 leading-relaxed mt-2 faq-content">
                        Absolutamente. Oferecemos 14 dias de teste completo, sem necessidade de cartão de crédito para começar. Queremos que você sinta a diferença.
                    </div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-white">
<div className="max-w-5xl mx-auto px-6">
<div className="relative rounded-[3rem] overflow-hidden bg-brand-orange text-white p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 shadow-2xl shadow-orange-600/30">

<div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-red-600"></div>

<div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
<div className="relative z-10 md:w-1/2">
<div className="inline-block bg-white/20 backdrop-blur px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-white/20">Oferta Limitada</div>
<h2 className="text-5xl md:text-6xl font-bold tracking-tighter mb-6">Membro Soliv</h2>
<p className="text-white/80 mb-8 text-lg font-medium">Invista na sua saúde com a tecnologia mais avançada do mercado.</p>
<ul className="space-y-4 mb-8 text-white/90 font-medium">
<li className="flex items-center gap-3"><iconify-icon icon="solar:check-circle-bold" width="20"></iconify-icon> Adaptação automática de agenda</li>
<li className="flex items-center gap-3"><iconify-icon icon="solar:check-circle-bold" width="20"></iconify-icon> Plano alimentar flexível</li>
<li className="flex items-center gap-3"><iconify-icon icon="solar:check-circle-bold" width="20"></iconify-icon> Relatórios de evolução semanal</li>
</ul>
</div>
<div className="relative z-10 bg-white text-brand-black p-8 rounded-3xl w-full md:w-auto md:min-w-[320px] text-center shadow-2xl transform md:rotate-2 hover:rotate-0 transition-transform duration-300">
<p className="text-xs text-gray-400 font-bold uppercase mb-2 tracking-widest">Plano Anual</p>
<div className="flex items-start justify-center gap-1 mb-6 border-b border-gray-100 pb-6">
<span className="text-2xl font-bold mt-2 text-gray-400">R$</span>
<span className="text-7xl font-bold tracking-tighter text-brand-black">29</span>
<span className="text-gray-400 font-bold self-end mb-2">/mês</span>
</div>
<button className="w-full bg-brand-black text-white py-4 rounded-xl font-bold hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 group">
                        Assinar agora 
                        <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<p className="text-[10px] text-gray-400 mt-4 font-medium flex items-center justify-center gap-1">
<iconify-icon icon="solar:shield-check-linear"></iconify-icon> 14 dias de garantia
                    </p>
</div>
</div>
</div>
</section>

<footer className="bg-brand-black text-white pt-24 pb-12 overflow-hidden">
<div className="max-w-[1400px] mx-auto px-6">
<div className="grid md:grid-cols-2 gap-16 mb-24 relative z-10">
<div className="max-w-md">
<a className="text-2xl font-bold tracking-tighter text-white flex items-center gap-2 mb-8" href="#">
<div className="w-8 h-8 bg-brand-orange rounded-full"></div>
                        soliv
                    </a>
<p className="text-2xl md:text-3xl font-medium leading-tight mb-8 text-white/90">
                        É nossa crença que se você melhorar sua rotina, pode melhorar qualquer outro aspecto da sua vida.
                    </p>
<div className="mt-8 flex gap-4">
<a className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors" href="#">
<iconify-icon icon="solar:camera-linear" width="20"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors" href="#">
<iconify-icon icon="solar:letter-linear" width="20"></iconify-icon>
</a>
</div>
</div>
<div className="grid grid-cols-2 gap-8 text-sm text-gray-400">
<ul className="space-y-4">
<li><span className="text-white font-bold mb-4 block">Produto</span></li>
<li><a className="hover:text-white transition-colors" href="#">Como funciona</a></li>
<li><a className="hover:text-white transition-colors" href="#">Histórias</a></li>
<li><a className="hover:text-white transition-colors" href="#">Preços</a></li>
<li><a className="hover:text-white transition-colors" href="#">Download</a></li>
</ul>
<ul className="space-y-4">
<li><span className="text-white font-bold mb-4 block">Legal</span></li>
<li><a className="hover:text-white transition-colors" href="#">Termos</a></li>
<li><a className="hover:text-white transition-colors" href="#">Privacidade</a></li>
<li><a className="hover:text-white transition-colors" href="#">Cookies</a></li>
<li><a className="hover:text-white transition-colors" href="#">Suporte</a></li>
</ul>
</div>
</div>

<div className="relative border-t border-white/10 pt-12">
<h1 className="text-[21vw] leading-none font-bold tracking-tighter text-center text-white/5 select-none hover:text-white/10 transition-colors duration-700">
                    soliv
                </h1>
</div>
<div className="flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-600 mt-8 uppercase tracking-widest font-bold gap-4">
<p>© 2025 Soliv Inc. Todos os direitos reservados.</p>
<div className="flex gap-4">
<span>São Paulo</span>
<span>•</span>
<span>San Francisco</span>
</div>
</div>
</div>
</footer>



    </>
  );
}
