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



tailwind.config = {
theme: {
extend: {
fontFamily: {
heading: ['"Bebas Neue"', 'sans-serif'],
body: ['"Lato"', 'sans-serif'],
},
colors: {
brand: {
black: '#000000',
gold: '#C8A037',
magenta: '#FF00AA',
zinc: '#121212'
}
},
backgroundImage: {
'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
},
animation: {
'float': 'float 6s ease-in-out infinite',
'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' },
},
fadeInUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
}
}
}
}



        document.addEventListener('DOMContentLoaded', () => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                    }
                });
            }, { threshold: 0.1 });

            document.querySelectorAll('.reveal').forEach(el => {
                observer.observe(el);
            });
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
      

<div className="fixed inset-0 bg-grid-pattern pointer-events-none z-0"></div>
<div className="fixed top-0 right-0 w-[500px] h-[500px] bg-brand-gold/5 blur-[120px] rounded-full pointer-events-none z-0"></div>
<div className="fixed bottom-0 left-0 w-[500px] h-[500px] bg-brand-magenta/5 blur-[120px] rounded-full pointer-events-none z-0"></div>

<nav className="fixed transition-all duration-300 glass-dark z-50 border-white/5 border-b pt-4 pr-6 pb-4 pl-6 top-0 right-0 left-0">
<div className="flex max-w-7xl mr-auto ml-auto items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<span className="font-heading text-2xl tracking-wide text-white group-hover:text-brand-gold transition-colors">A TRÍADE</span>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-xs uppercase tracking-widest text-zinc-400 hover:text-white transition-colors" href="#metodo">O Método</a>
<a className="text-xs uppercase tracking-widest text-zinc-400 hover:text-white transition-colors" href="#problema">O Problema</a>
<a className="text-xs uppercase tracking-widest text-zinc-400 hover:text-white transition-colors" href="#pilares">Pilares</a>
<a className="text-xs uppercase tracking-widest text-zinc-400 hover:text-white transition-colors" href="#perfil">Perfil</a>
</div>

<a className="hidden sm:inline-flex items-center gap-2 px-6 py-2 bg-white/5 border border-white/10 hover:bg-brand-gold hover:text-black hover:border-brand-gold text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 rounded-sm" href="#acesso">
        Acessar Agora
    </a>
</div>
</nav>

<header className="min-h-screen flex flex-col z-10 pt-32 pr-6 pb-20 pl-6 relative justify-center">
<div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">

<div className="flex flex-col items-start reveal active">
<div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-brand-gold/20 bg-brand-gold/5">
<span className="w-1 h-1 rounded-full bg-brand-gold animate-pulse"></span>
<span className="text-xs font-bold text-brand-gold uppercase tracking-widest">Decisão Estratégica</span>
</div>
<h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl leading-[0.9] text-white mb-6 tracking-tight">
                    A Tríade não foi criado para te ensinar mais.<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-white">Foi criado para fazer você finalmente decidir certo.</span>
</h1>
<p className="text-lg text-zinc-400 max-w-lg mb-10 font-light leading-relaxed">
                    Se você já conhece o Método A Tríade, sabe que ele não é sobre conteúdo, hacks ou fórmulas rápidas. Ele existe para organizar sua tomada de decisão, eliminar dispersão e transformar conhecimento em resultado previsível.
                </p>
<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
<a className="inline-flex justify-center items-center gap-2 px-8 py-4 bg-white text-black text-xs font-bold uppercase tracking-wider hover:bg-brand-gold transition-colors" href="#acesso">
                        Acesse o Método
                        <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
<a className="inline-flex justify-center items-center gap-2 px-8 py-4 border border-zinc-700 text-white text-xs font-bold uppercase tracking-wider hover:border-white transition-colors" href="#metodo">
                        Entender a Lógica
                    </a>
</div>
</div>

<div className="relative h-[600px] w-full hidden lg:block reveal delay-200 active">

<div className="overflow-hidden bg-zinc-900 border-zinc-800 border rounded-lg absolute top-0 right-0 bottom-0 left-0">
<img alt="A Tríade Empresarial" className="w-full h-full object-contain z-10 pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 drop-shadow-2xl" src="https://www.aura.build/editor/ChatGPT%20Image%206%20de%20fev.%20de%202026,%2019_33_02.png"/><img alt="Abstract Structure" className="hover:scale-105 transition-transform duration-[2s] opacity-40 mix-blend-luminosity w-full h-full object-cover grayscale" src="https://images.unsplash.com/photo-1485365856461-a0e44534f321?q=80&amp;w=2788&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute top-16 -left-6 glass-card p-5 rounded min-w-[220px] animate-float border-l-2 border-l-brand-gold">
<div className="flex items-center gap-3 mb-2">
<iconify-icon className="text-brand-gold" icon="solar:tuning-linear" width="20"></iconify-icon>
<span className="font-heading text-xl tracking-wide text-white">Clareza</span>
</div>
<p className="text-xs text-zinc-400">Eliminação de ruído mental</p>
</div>

<div className="absolute bottom-32 -right-6 glass-card p-5 rounded min-w-[220px] animate-float" style={{animationDelay: '2s'}}>
<div className="flex items-center gap-3 mb-2">
<iconify-icon className="text-white" icon="solar:graph-up-linear" width="20"></iconify-icon>
<span className="font-heading text-xl tracking-wide text-white">Execução</span>
</div>
<div className="h-0.5 w-full bg-zinc-800 rounded-full overflow-hidden mt-1">
<div className="h-full bg-white w-full"></div>
</div>
<p className="text-[10px] text-zinc-500 mt-2 uppercase tracking-wider">Sustentabilidade: Alta</p>
</div>
</div>
</div>
</header>

<section className="py-24 px-6 relative z-10 border-t border-zinc-900" id="problema">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div className="reveal">
<h2 className="font-heading text-4xl lg:text-5xl text-white mb-6 tracking-tight">Você não está aqui porque falta informação.</h2>
<p className="text-zinc-400 text-lg font-light leading-relaxed mb-8">
                        Você está aqui porque, mesmo sabendo o que precisa ser feito, algo ainda trava a execução ou a conversão.
                    </p>
<div className="space-y-6">
<div className="flex gap-4 items-start group">
<div className="mt-1 text-zinc-600 group-hover:text-brand-gold transition-colors">
<iconify-icon icon="solar:danger-circle-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-white font-bold text-sm uppercase tracking-wide mb-1">Hesitação</h3>
<p className="text-zinc-500 text-sm">Você entende o método, mas hesita na hora de aplicar.</p>
</div>
</div>
<div className="flex gap-4 items-start group">
<div className="mt-1 text-zinc-600 group-hover:text-brand-gold transition-colors">
<iconify-icon icon="solar:route-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-white font-bold text-sm uppercase tracking-wide mb-1">Perda de Foco</h3>
<p className="text-zinc-500 text-sm">Você sabe o caminho, mas se perde nas escolhas.</p>
</div>
</div>
<div className="flex gap-4 items-start group">
<div className="mt-1 text-zinc-600 group-hover:text-brand-gold transition-colors">
<iconify-icon icon="solar:chart-2-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-white font-bold text-sm uppercase tracking-wide mb-1">Subutilização</h3>
<p className="text-zinc-500 text-sm">Você executa, mas sente que poderia estar extraindo muito mais.</p>
</div>
</div>
</div>
</div>
<div className="glass-card p-10 rounded-xl border border-zinc-800 bg-zinc-900/40 reveal delay-200">
<h3 className="font-heading text-2xl text-white mb-6">O que este método NÃO É</h3>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-zinc-400 text-sm">
<iconify-icon className="text-brand-magenta" icon="solar:close-circle-linear" width="20"></iconify-icon>
                            Um curso para iniciantes
                        </li>
<li className="flex items-center gap-3 text-zinc-400 text-sm">
<iconify-icon className="text-brand-magenta" icon="solar:close-circle-linear" width="20"></iconify-icon>
                            Compilado de conteúdos reaproveitados
                        </li>
<li className="flex items-center gap-3 text-zinc-400 text-sm">
<iconify-icon className="text-brand-magenta" icon="solar:close-circle-linear" width="20"></iconify-icon>
                            Metodologia baseada em "motivação"
                        </li>
<li className="flex items-center gap-3 text-zinc-400 text-sm">
<iconify-icon className="text-brand-magenta" icon="solar:close-circle-linear" width="20"></iconify-icon>
                            Algo que funciona só se você estiver "inspirado"
                        </li>
</ul>
<div className="mt-8 pt-6 border-t border-zinc-800">
<p className="text-white text-sm font-semibold italic">
                            "Ele é um modelo de estrutura mental e estratégica para quem já entendeu o jogo, mas quer jogar no nível certo."
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative z-10" id="pilares">
<div className="max-w-7xl mx-auto">
<div className="mb-16 reveal">
<h2 className="font-heading text-4xl text-white mb-2 tracking-tight">Os 3 Pilares da Tríade</h2>
<p className="text-zinc-500 max-w-sm">Separados, parecem simples. Juntos, criam a coerência necessária para decisões de alto nível.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="glass-card p-8 group reveal hover:bg-zinc-900/80">
<div className="mb-6 p-3 w-fit border border-zinc-700 rounded bg-zinc-900/50 text-white group-hover:border-brand-gold group-hover:text-brand-gold transition-colors">
<iconify-icon icon="solar:target-linear" width="24"></iconify-icon>
</div>
<h3 className="font-heading text-2xl text-white mb-4 tracking-wide">1. Marketing com Direção</h3>
<p className="text-zinc-400 text-sm leading-relaxed mb-6 font-light">
                        Você passa a enxergar com precisão onde está o gargalo real de aquisição e para de atacar sintomas de vaidade.
                    </p>
</div>

<div className="glass-card p-8 group reveal hover:bg-zinc-900/80 delay-100 border-t-2 border-t-brand-gold/50">
<div className="mb-6 p-3 w-fit border border-zinc-700 rounded bg-zinc-900/50 text-white group-hover:border-brand-gold group-hover:text-brand-gold transition-colors">
<iconify-icon icon="solar:chart-square-linear" width="24"></iconify-icon>
</div>
<h3 className="font-heading text-2xl text-white mb-4 tracking-wide">2. Finanças com Controle</h3>
<p className="text-zinc-400 text-sm leading-relaxed mb-6 font-light">
                        Você elimina ruído e incerteza do fluxo de caixa. O método não te dá mais planilhas — ele te dá previsibilidade real.
                    </p>
</div>

<div className="glass-card p-8 group reveal hover:bg-zinc-900/80 delay-200">
<div className="mb-6 p-3 w-fit border border-zinc-700 rounded bg-zinc-900/50 text-white group-hover:border-brand-gold group-hover:text-brand-gold transition-colors">
<iconify-icon icon="solar:flag-linear" width="24"></iconify-icon>
</div>
<h3 className="font-heading text-2xl text-white mb-4 tracking-wide">3. Estratégia com Ação</h3>
<p className="text-zinc-400 text-sm leading-relaxed mb-6 font-light">
                        A execução passa a ser consequência de uma estrutura validada, não de força de vontade ou motivação passageira.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative z-10 bg-zinc-900 border-y border-zinc-800">
<div className="max-w-7xl mx-auto text-center reveal">
<div className="mb-12">
<h2 className="font-heading text-4xl md:text-5xl text-white mb-4 tracking-tight">Por que funciona?</h2>
<p className="text-zinc-400 text-lg font-light">O Método A Tríade foi testado e aprovado em mais de 500 negócios de forma direta</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">

<div className="glass-card p-4 rounded-xl hover:border-zinc-600 transition-colors group">
<div className="h-48 w-full bg-zinc-800 rounded-lg overflow-hidden mb-4 relative">
<img alt="Business Meeting" className="w-full h-full object-cover grayscale opacity-60 group-hover:opacity-80 transition-opacity duration-500" src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&amp;w=2664&amp;auto=format&amp;fit=crop"/>
</div>
<div className="px-2">
<h4 className="text-white font-bold text-sm uppercase tracking-wide mb-1">Validação de Campo</h4>
<p className="text-zinc-500 text-xs leading-relaxed">
                            Métodos aplicados em cenários reais de alta pressão, não apenas teoria de palco.
                        </p>
</div>
</div>

<div className="glass-card p-4 rounded-xl hover:border-zinc-600 transition-colors group">
<div className="h-48 w-full bg-zinc-800 rounded-lg overflow-hidden mb-4 relative">
<img alt="Team Strategy" className="w-full h-full object-cover grayscale opacity-60 group-hover:opacity-80 transition-opacity duration-500" src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
</div>
<div className="px-2">
<h4 className="text-white font-bold text-sm uppercase tracking-wide mb-1">Escalabilidade</h4>
<p className="text-zinc-500 text-xs leading-relaxed">
                            Modelos que suportam o crescimento sem quebrar a operação ou o fundador.
                        </p>
</div>
</div>

<div className="glass-card p-4 rounded-xl hover:border-zinc-600 transition-colors group">
<div className="h-48 w-full bg-zinc-800 rounded-lg overflow-hidden mb-4 relative">
<img alt="Data Analysis" className="w-full h-full object-cover grayscale opacity-60 group-hover:opacity-80 transition-opacity duration-500" src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
</div>
<div className="px-2">
<h4 className="text-white font-bold text-sm uppercase tracking-wide mb-1">Consistência</h4>
<p className="text-zinc-500 text-xs leading-relaxed">
                            Resultados que se mantêm a longo prazo, independente das flutuações de mercado.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative z-10" id="perfil">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="glass-card p-8 md:p-10 rounded-xl reveal border-l-4 border-l-green-500/50">
<h3 className="font-heading text-3xl text-white mb-8">Este método é para você se:</h3>
<ul className="space-y-6">
<li className="flex gap-4">
<iconify-icon className="text-green-500 flex-shrink-0" icon="solar:check-circle-linear" width="24"></iconify-icon>
<span className="text-zinc-400 text-sm">Você já conhece o A Tríade, mas quer aprofundar e aplicar com mais precisão.</span>
</li>
<li className="flex gap-4">
<iconify-icon className="text-green-500 flex-shrink-0" icon="solar:check-circle-linear" width="24"></iconify-icon>
<span className="text-zinc-400 text-sm">Você sente que está perto do próximo nível, mas algo ainda não encaixou.</span>
</li>
<li className="flex gap-4">
<iconify-icon className="text-green-500 flex-shrink-0" icon="solar:check-circle-linear" width="24"></iconify-icon>
<span className="text-zinc-400 text-sm">Você quer parar de testar e começar a sustentar uma estratégia sólida.</span>
</li>
<li className="flex gap-4">
<iconify-icon className="text-green-500 flex-shrink-0" icon="solar:check-circle-linear" width="24"></iconify-icon>
<span className="text-zinc-400 text-sm">Você prefere estrutura previsível a promessas milagrosas.</span>
</li>
</ul>
</div>

<div className="glass-card p-8 md:p-10 rounded-xl reveal delay-100 border-l-4 border-l-brand-magenta/50">
<h3 className="font-heading text-3xl text-zinc-500 mb-8">NÃO é para você se:</h3>
<ul className="space-y-6">
<li className="flex gap-4">
<iconify-icon className="text-zinc-600 flex-shrink-0" icon="solar:close-circle-linear" width="24"></iconify-icon>
<span className="text-zinc-500 text-sm">Você ainda busca atalhos ou pílulas mágicas.</span>
</li>
<li className="flex gap-4">
<iconify-icon className="text-zinc-600 flex-shrink-0" icon="solar:close-circle-linear" width="24"></iconify-icon>
<span className="text-zinc-500 text-sm">Você quer ser "convencido" de que precisa agir.</span>
</li>
<li className="flex gap-4">
<iconify-icon className="text-zinc-600 flex-shrink-0" icon="solar:close-circle-linear" width="24"></iconify-icon>
<span className="text-zinc-500 text-sm">Você espera que alguém execute o trabalho duro por você.</span>
</li>
<li className="flex gap-4">
<iconify-icon className="text-zinc-600 flex-shrink-0" icon="solar:close-circle-linear" width="24"></iconify-icon>
<span className="text-zinc-500 text-sm">Você não está disposto a assumir responsabilidade total pelas decisões.</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 bg-black relative overflow-hidden" id="acesso">
<div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent pointer-events-none"></div>
<div className="max-w-2xl mx-auto relative z-10 text-center reveal">
<div className="mb-8">
<iconify-icon className="text-brand-gold" icon="solar:lock-unlocked-linear" width="48"></iconify-icon>
</div>
<h2 className="font-heading text-5xl md:text-6xl text-white mb-6 tracking-tight">Não é curiosidade.<br/>É reconhecimento.</h2>
<p className="text-zinc-400 text-lg font-light mb-10 max-w-xl mx-auto">
                Você já sabe que o Método A Tríade funciona. A única decisão agora é se você vai aplicá-lo com profundidade ou continuar no raso.
            </p>
<a className="group relative inline-flex justify-center items-center gap-3 px-10 py-5 bg-white text-black font-bold uppercase tracking-widest text-sm hover:bg-brand-gold transition-all duration-300 w-full sm:w-auto overflow-hidden" href="#">
<span className="relative z-10">Acessar o Método A Tríade</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform relative z-10" icon="solar:arrow-right-linear" width="20"></iconify-icon>
<div className="absolute inset-0 bg-brand-gold transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out z-0"></div>
</a>
<p className="mt-8 text-xs text-zinc-600 uppercase tracking-widest">
                Transforme entendimento em decisão sustentada
            </p>
</div>
</section>

<footer className="py-12 px-6 border-t border-zinc-900 bg-black">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<span className="font-heading text-xl text-white tracking-widest">A TRÍADE</span>
</div>
<p className="text-[10px] text-zinc-600 uppercase tracking-widest">
                Decisão. Estratégia. Execução.
            </p>
<div className="flex gap-6">
<a className="text-zinc-600 hover:text-white text-[10px] uppercase tracking-wider transition-colors" href="#">Termos</a>
<a className="text-zinc-600 hover:text-white text-[10px] uppercase tracking-wider transition-colors" href="#">Privacidade</a>
</div>
</div>
<div className="text-[10px] text-zinc-800 text-center mt-8">© 2024 Método A Tríade. Todos os direitos reservados.</div>
</footer>



    </>
  );
}
