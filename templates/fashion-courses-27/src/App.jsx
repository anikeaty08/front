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
sans: ['Inter', 'sans-serif'],
},
colors: {
'fashion-green': '#1C3F3A',
'fashion-cream': '#EBE8D8',
},
fontSize: {
'10xl': '10rem',
}
}
}
}



        // Initialize Icons
        lucide.createIcons();

        // Simple scroll reveal
        document.addEventListener('scroll', function() {
            const reveals = document.querySelectorAll('section');
            for(let i = 0; i < reveals.length; i++) {
                let windowHeight = window.innerHeight;
                let elementTop = reveals[i].getBoundingClientRect().top;
                let elementVisible = 150;
                
                if (elementTop < windowHeight - elementVisible) {
                    reveals[i].classList.add('opacity-100', 'translate-y-0');
                    reveals[i].classList.remove('opacity-0', 'translate-y-10');
                }
            }
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
      

<nav className="fixed top-0 left-0 w-full z-50 border-b border-white/10 backdrop-blur-md bg-black/20 h-20 flex items-center transition-all duration-300">
<div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
<a className="text-xl font-semibold uppercase tracking-tight text-white" href="#">Arte Moldada</a>
<div className="hidden md:flex space-x-8">
<a className="text-sm uppercase tracking-widest font-medium text-white/80 hover:text-white transition-colors" href="#cursos">Cursos</a>
<a className="text-sm uppercase tracking-widest font-medium text-white/80 hover:text-white transition-colors" href="#quem-ensina">Quem Ensina</a>
<a className="text-sm uppercase tracking-widest font-medium text-white/80 hover:text-white transition-colors" href="#contato">Contato</a>
</div>
<a className="hidden md:flex items-center gap-2 text-sm uppercase tracking-widest font-medium border border-white px-5 py-2 hover:bg-white hover:text-black transition-all duration-300" href="#">
<span>WhatsApp</span>
<i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>

<button className="md:hidden text-white">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</nav>

<header className="relative w-full h-screen min-h-[800px] bg-black overflow-hidden flex items-center justify-center">

<div className="absolute inset-0 grid grid-cols-12 gap-0 w-full h-full opacity-60">

<div className="col-span-4 h-full relative overflow-hidden transform translate-y-12">
<img alt="Atelier" className="w-full h-full object-cover grayscale brightness-75 scale-105 hover:scale-100 transition-transform duration-[2s]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>

<div className="col-span-5 h-full relative overflow-hidden -translate-y-8 z-10">
<img alt="Hands sewing" className="w-full h-full object-cover grayscale brightness-90" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>

<div className="col-span-3 h-full relative overflow-hidden translate-y-24">
<img alt="Fashion details" className="w-full h-full object-cover grayscale brightness-75" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>

<div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80 z-10"></div>
</div>

<div className="relative z-20 container mx-auto px-4 text-center flex flex-col items-center">
<h1 className="text-6xl md:text-8xl lg:text-9xl font-semibold uppercase tracking-tighter leading-[0.9] text-white mix-blend-overlay mb-6">
                Arte<br/><span className="pl-12 md:pl-32">Moldada</span>
</h1>
<h2 className="text-2xl md:text-4xl lg:text-5xl font-medium uppercase tracking-tight text-white/90 mb-8 max-w-4xl">
                Cursos de moda online e presenciais
            </h2>
<p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
                Aprenda modelagem, moulage e costura com método prático e ensino aplicado focado no mercado real.
            </p>
<a className="group relative inline-flex items-center gap-3 px-8 py-4 border border-white text-white uppercase tracking-[0.15em] text-sm font-semibold hover:bg-white hover:text-black transition-all duration-300" href="#">
                Falar com a Arte Moldada
                <i className="w-4 h-4 transition-transform group-hover:translate-x-1" data-lucide="arrow-right"></i>
</a>
</div>
</header>

<section className="bg-white text-black py-24 md:py-32">
<div className="container mx-auto px-6 md:px-12 flex flex-col items-center">
<div className="w-full max-w-[1200px] aspect-video bg-neutral-100 relative overflow-hidden mb-16 shadow-2xl group cursor-pointer">
<img alt="Workshop interior" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1531123414780-f74242c2b052?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/20 transition-colors">
<div className="w-20 h-20 rounded-full border border-white/50 flex items-center justify-center backdrop-blur-sm">
<i className="w-8 h-8 text-white fill-white ml-1" data-lucide="play"></i>
</div>
</div>
</div>
<div className="max-w-3xl text-center space-y-8">
<p className="text-xl md:text-2xl leading-relaxed font-light text-neutral-800">
                    A Arte Moldada é uma escola de cursos de moda focada em técnica, prática e criação. Aqui o aprendizado acontece do molde à peça final, respeitando a identidade de cada criador.
                </p>
<a className="inline-block bg-black text-white px-8 py-4 uppercase tracking-widest text-sm font-medium hover:bg-neutral-800 transition-colors" href="#cursos">
                    Conhecer os cursos
                </a>
</div>
</div>
</section>

<section className="bg-black text-white py-24 md:py-32 overflow-hidden" id="quem-ensina">
<div className="container mx-auto px-6 md:px-12">
<div className="flex flex-col md:flex-row gap-12 md:gap-24 items-center">

<div className="w-full md:w-3/5 relative group">
<div className="aspect-[3/4] relative overflow-hidden">
<img alt="Rogério Pereira" className="w-full h-full object-cover grayscale contrast-125" src="https://images.unsplash.com/photo-1506634572416-48cdfe530110?q=80&amp;w=1885&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute bottom-6 left-6 md:bottom-12 md:left-12 bg-white/95 backdrop-blur text-black p-8 max-w-xs rounded-sm shadow-xl">
<p className="text-lg font-semibold leading-tight">
                            "Modelagem se aprende fazendo. O erro é parte do processo de descoberta."
                        </p>
</div>
</div>

<div className="w-full md:w-2/5 space-y-8">
<div>
<h3 className="text-4xl md:text-5xl font-semibold uppercase tracking-tight mb-2">Rogério Pereira</h3>
<p className="text-sm uppercase tracking-[0.2em] text-neutral-400">Professor e Modelista</p>
</div>
<p className="text-lg md:text-xl text-neutral-300 font-light leading-relaxed">
                        Com mais de 15 anos de experiência no mercado de luxo e fast fashion, Rogério traz um ensino direto, prático e sem complicação. Sua metodologia foca em desmistificar a modelagem plana e a moulage, respeitando o ritmo de cada aluno.
                    </p>
<a className="inline-flex items-center gap-3 border border-white/30 px-6 py-3 uppercase tracking-widest text-sm text-white hover:border-white transition-colors mt-4" href="#">
                        Quero aprender com ele
                        <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</div>
</section>

<section className="bg-white text-black py-24 md:py-32" id="cursos">
<div className="container mx-auto px-6 md:px-12">
<div className="text-center mb-16 md:mb-24">
<h2 className="text-4xl md:text-6xl font-semibold uppercase tracking-tighter">Cursos Arte Moldada</h2>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">

<div className="group relative aspect-[3/4] overflow-hidden bg-neutral-100 cursor-pointer">
<img alt="Modelagem Plana" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1520006403909-838d6b92c22e?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 z-20">
<span className="bg-fashion-green text-white text-xs uppercase font-bold px-3 py-1 tracking-wider">Matrículas abertas</span>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
<div className="absolute bottom-0 left-0 w-full p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform">
<h3 className="text-xl font-bold uppercase leading-tight mb-4">Modelagem Básica Plana</h3>
<div className="flex items-center gap-2 text-sm uppercase tracking-wide opacity-0 group-hover:opacity-100 transition-opacity delay-75">
<span>Falar no WhatsApp</span>
<i className="w-4 h-4" data-lucide="arrow-right"></i>
</div>
</div>
</div>

<div className="group relative aspect-[3/4] overflow-hidden bg-neutral-100 cursor-pointer">
<img alt="Moulage" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="absolute top-4 left-4 z-20">
<span className="bg-neutral-800 text-white text-xs uppercase font-bold px-3 py-1 tracking-wider">Em breve</span>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
<div className="absolute bottom-0 left-0 w-full p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform">
<h3 className="text-xl font-bold uppercase leading-tight mb-4">Moulage | Moda Noiva e Festa</h3>
</div>
</div>

<div className="group relative aspect-[3/4] overflow-hidden bg-neutral-100 cursor-pointer">
<img alt="Corte e Costura" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1574634534894-89d7576c8259?q=80&amp;w=1964&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 z-20">
<span className="bg-neutral-500 text-white text-xs uppercase font-bold px-3 py-1 tracking-wider">Lista de espera</span>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
<div className="absolute bottom-0 left-0 w-full p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform">
<h3 className="text-xl font-bold uppercase leading-tight mb-4">Corte e Costura</h3>
</div>
</div>

<div className="group relative aspect-[3/4] overflow-hidden bg-neutral-100 cursor-pointer">
<img alt="Workshops" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale" src="https://images.unsplash.com/photo-1605289982774-9a6fef564df8?q=80&amp;w=1964&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 z-20">
<span className="bg-neutral-400 text-white text-xs uppercase font-bold px-3 py-1 tracking-wider">Novidades</span>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
<div className="absolute bottom-0 left-0 w-full p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform">
<h3 className="text-xl font-bold uppercase leading-tight mb-4">Workshops e Cursos Especiais</h3>
</div>
</div>
</div>
<div className="mt-16 text-center">
<button className="border border-black px-8 py-3 uppercase tracking-widest text-sm font-medium hover:bg-black hover:text-white transition-all">
                    Carregar mais cursos
                </button>
</div>
</div>
</section>

<section className="bg-fashion-cream py-24 md:py-32 relative">

<div className="absolute inset-0 opacity-10 pointer-events-none" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg width=\\'60\\' height=\\'60\\' viewBox=\\'0 0 60 60\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%23000000\\' fillOpacity=\\'1\\'%3E%3Cpath d=\\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\')'}}></div>
<div className="container mx-auto px-6 md:px-12 relative z-10">
<div className="flex flex-col md:flex-row gap-16 md:gap-24 items-center">

<div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
<img alt="Tape measure" className="w-full aspect-[3/4] object-cover grayscale brightness-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
<img alt="Sketches" className="w-full aspect-[3/4] object-cover mt-12 grayscale brightness-95" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>

<div className="w-full md:w-1/2">
<h2 className="text-4xl font-semibold uppercase tracking-tight text-black mb-12">Para quem é a<br/>Arte Moldada</h2>
<ul className="space-y-6">
<li className="flex items-center gap-4 text-xl font-light text-neutral-800 border-b border-black/10 pb-4">
<i className="w-5 h-5 text-fashion-green" data-lucide="check"></i>
                            Iniciantes na moda
                        </li>
<li className="flex items-center gap-4 text-xl font-light text-neutral-800 border-b border-black/10 pb-4">
<i className="w-5 h-5 text-fashion-green" data-lucide="check"></i>
                            Quem já costura e quer evoluir
                        </li>
<li className="flex items-center gap-4 text-xl font-light text-neutral-800 border-b border-black/10 pb-4">
<i className="w-5 h-5 text-fashion-green" data-lucide="check"></i>
                            Quem busca profissionalização
                        </li>
<li className="flex items-center gap-4 text-xl font-light text-neutral-800 border-b border-black/10 pb-4">
<i className="w-5 h-5 text-fashion-green" data-lucide="check"></i>
                            Moda noiva e festa
                        </li>
<li className="flex items-center gap-4 text-xl font-light text-neutral-800">
<i className="w-5 h-5 text-fashion-green" data-lucide="check"></i>
                            Modalidades online ou presencial
                        </li>
</ul>
<div className="mt-12">
<a className="bg-black text-white px-8 py-4 uppercase tracking-widest text-sm font-medium hover:bg-neutral-800 transition-colors" href="#">
                            Descobrir meu caminho
                        </a>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white text-black py-24 md:py-32">
<div className="container mx-auto px-6 md:px-12 text-center">
<h2 className="text-3xl md:text-5xl font-semibold uppercase tracking-tight mb-6">Por que os alunos escolhem</h2>
<p className="text-xl md:text-2xl text-neutral-600 font-light max-w-2xl mx-auto mb-12">
                Ensino prático, acompanhamento próximo e foco em resultado real no desenvolvimento da sua carreira.
            </p>
<div className="flex flex-col items-center gap-6">
<div className="flex gap-2">
<i className="w-6 h-6 fill-black text-black" data-lucide="star"></i>
<i className="w-6 h-6 fill-black text-black" data-lucide="star"></i>
<i className="w-6 h-6 fill-black text-black" data-lucide="star"></i>
<i className="w-6 h-6 fill-black text-black" data-lucide="star"></i>
<i className="w-6 h-6 fill-black text-black" data-lucide="star"></i>
</div>
<div className="flex -space-x-4">
<img alt="Aluno 1" className="w-12 h-12 rounded-full border-2 border-white object-cover grayscale" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
<img alt="Aluno 2" className="w-12 h-12 rounded-full border-2 border-white object-cover grayscale" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
<img alt="Aluno 3" className="w-12 h-12 rounded-full border-2 border-white object-cover grayscale" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
</div>
<a className="mt-8 inline-flex items-center gap-2 bg-black text-white px-10 py-5 uppercase tracking-widest text-sm font-semibold hover:scale-[1.02] transition-transform" href="#">
<i className="w-5 h-5" data-lucide="message-circle"></i>
                    Ler depoimentos no WhatsApp
                </a>
</div>
</div>
</section>

<section className="bg-black text-white py-24 md:py-32 border-t border-white/10">
<div className="container mx-auto px-6 md:px-12">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-white/5 border border-white/10 p-8 hover:bg-white/10 transition-colors group">
<i className="w-8 h-8 text-white mb-6 stroke-[1.5]" data-lucide="check-circle"></i>
<h3 className="text-lg font-semibold uppercase tracking-wide mb-2">Ensino Prático</h3>
<p className="text-neutral-400 text-sm leading-relaxed">Metodologia "mão na massa" desde a primeira aula.</p>
</div>

<div className="bg-white/5 border border-white/10 p-8 hover:bg-white/10 transition-colors group">
<i className="w-8 h-8 text-white mb-6 stroke-[1.5]" data-lucide="target"></i>
<h3 className="text-lg font-semibold uppercase tracking-wide mb-2">Técnica Aplicada</h3>
<p className="text-neutral-400 text-sm leading-relaxed">Conceitos complexos simplificados para execução real.</p>
</div>

<div className="bg-white/5 border border-white/10 p-8 hover:bg-white/10 transition-colors group">
<i className="w-8 h-8 text-white mb-6 stroke-[1.5]" data-lucide="monitor-smartphone"></i>
<h3 className="text-lg font-semibold uppercase tracking-wide mb-2">Híbrido</h3>
<p className="text-neutral-400 text-sm leading-relaxed">Flexibilidade com cursos online e workshops presenciais.</p>
</div>

<div className="bg-white/5 border border-white/10 p-8 hover:bg-white/10 transition-colors group">
<i className="w-8 h-8 text-white mb-6 stroke-[1.5]" data-lucide="users"></i>
<h3 className="text-lg font-semibold uppercase tracking-wide mb-2">Acompanhamento</h3>
<p className="text-neutral-400 text-sm leading-relaxed">Suporte direto com o professor para tirar dúvidas.</p>
</div>
</div>
<div className="mt-16 text-center">
<a className="inline-flex items-center gap-3 border border-white text-white px-8 py-3 uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-all" href="#cursos">
                    Conhecer os cursos
                </a>
</div>
</div>
</section>

<section className="bg-white text-black py-24 md:py-32">
<div className="container mx-auto px-6 md:px-12 max-w-4xl">
<h2 className="text-3xl md:text-4xl font-semibold uppercase tracking-tight text-center mb-16">Perguntas Frequentes</h2>
<div className="space-y-4">

<details className="group border-b border-black/10 pb-4">
<summary className="flex justify-between items-center cursor-pointer py-4 text-xl font-medium uppercase tracking-wide hover:text-fashion-green transition-colors">
                        Preciso ter experiência prévia?
                        <i className="w-6 h-6 transition-transform group-open:rotate-180" data-lucide="chevron-down"></i>
</summary>
<div className="text-neutral-600 font-light text-lg py-4 leading-relaxed animate-fade-in">
                        Não. Temos cursos desenhados especificamente para iniciantes (Modelagem Básica) que começam do zero absoluto, ensinando desde como tirar medidas até a construção do molde.
                    </div>
</details>

<details className="group border-b border-black/10 pb-4">
<summary className="flex justify-between items-center cursor-pointer py-4 text-xl font-medium uppercase tracking-wide hover:text-fashion-green transition-colors">
                        Os cursos são online ou presenciais?
                        <i className="w-6 h-6 transition-transform group-open:rotate-180" data-lucide="chevron-down"></i>
</summary>
<div className="text-neutral-600 font-light text-lg py-4 leading-relaxed">
                        Oferecemos ambos os formatos. Nossos cursos online possuem aulas gravadas em alta definição com suporte via WhatsApp. Os presenciais acontecem em nosso ateliê em datas específicas.
                    </div>
</details>

<details className="group border-b border-black/10 pb-4">
<summary className="flex justify-between items-center cursor-pointer py-4 text-xl font-medium uppercase tracking-wide hover:text-fashion-green transition-colors">
                        Qual a duração dos cursos?
                        <i className="w-6 h-6 transition-transform group-open:rotate-180" data-lucide="chevron-down"></i>
</summary>
<div className="text-neutral-600 font-light text-lg py-4 leading-relaxed">
                        Varia de acordo com o módulo. Cursos livres online têm acesso por 1 ano. Workshops presenciais geralmente são intensivos de final de semana.
                    </div>
</details>

<details className="group border-b border-black/10 pb-4">
<summary className="flex justify-between items-center cursor-pointer py-4 text-xl font-medium uppercase tracking-wide hover:text-fashion-green transition-colors">
                        Emitem certificado?
                        <i className="w-6 h-6 transition-transform group-open:rotate-180" data-lucide="chevron-down"></i>
</summary>
<div className="text-neutral-600 font-light text-lg py-4 leading-relaxed">
                        Sim, todos os nossos cursos possuem certificado de conclusão emitido pela Arte Moldada após a entrega do projeto final.
                    </div>
</details>
</div>
<div className="mt-16 text-center">
<a className="inline-flex items-center gap-2 border border-black text-black px-6 py-3 uppercase tracking-widest text-sm hover:bg-black hover:text-white transition-colors" href="#">
                    Ainda com dúvidas? Falar no WhatsApp
                </a>
</div>
</div>
</section>

<section className="bg-fashion-green text-white py-32 md:py-40 text-center px-6">
<div className="container mx-auto max-w-5xl">
<h2 className="text-4xl md:text-7xl font-semibold uppercase tracking-tighter mb-8">
                Sua jornada na moda<br/>começa na Arte Moldada
            </h2>
<p className="text-xl md:text-2xl font-light opacity-90 mb-12 max-w-2xl mx-auto">
                Fale com a gente e receba orientação personalizada sobre qual o melhor curso para o seu momento profissional.
            </p>
<a className="inline-flex items-center gap-3 bg-white text-fashion-green px-12 py-6 uppercase tracking-widest font-bold text-sm md:text-base hover:scale-[1.03] transition-transform shadow-2xl" href="#">
<i className="w-5 h-5" data-lucide="message-circle"></i>
                Falar com a Arte Moldada no WhatsApp
            </a>
</div>
</section>

<footer className="bg-black text-white border-t border-white/10 pt-16 pb-12">
<div className="container mx-auto px-6 md:px-12">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">

<div className="text-center md:text-left">
<span className="text-2xl font-bold uppercase tracking-tight">Arte Moldada</span>
</div>

<div className="flex justify-center gap-8">
<a className="text-sm uppercase tracking-widest text-neutral-400 hover:text-white transition-colors" href="#">WhatsApp</a>
<a className="text-sm uppercase tracking-widest text-neutral-400 hover:text-white transition-colors" href="#">Instagram</a>
<a className="text-sm uppercase tracking-widest text-neutral-400 hover:text-white transition-colors" href="#">Email</a>
</div>

<div className="text-center md:text-right text-xs text-neutral-600 uppercase tracking-widest">
                    © 2024 Arte Moldada. All rights reserved.
                </div>
</div>
</div>
</footer>


    </>
  );
}
