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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener("DOMContentLoaded", () => {
            const header = document.getElementById('site-header');
            const sections = document.querySelectorAll('[data-theme]');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const theme = entry.target.getAttribute('data-theme');
                        if (theme === 'dark') {
                            header.classList.remove('bg-white/90', 'text-gray-900', 'border-gray-200', 'shadow-sm');
                            header.classList.add('bg-white/5', 'text-white', 'border-white/10');
                        } else {
                            header.classList.remove('bg-white/5', 'text-white', 'border-white/10');
                            header.classList.add('bg-white/90', 'text-gray-900', 'border-gray-200', 'shadow-sm');
                        }
                    }
                });
            }, {
                rootMargin: "-20px 0px -95% 0px" 
            });

            sections.forEach(section => observer.observe(section));
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
      

<header className="fixed z-50 transition-all duration-500 w-full border-b top-0 left-0 backdrop-blur-md" id="site-header">
<div className="flex h-20 max-w-7xl mr-auto ml-auto pr-4 pl-4 items-center justify-between md:pl-0 md:pr-0">

<a className="flex items-center gap-2 z-10 group relative" href="#">
<iconify-icon className="group-hover:scale-110 transition-transform text-sky-400" icon="solar:shield-check-linear" width="24"></iconify-icon>
<span className="font-manrope font-normal tracking-tight text-xl">CF</span>
</a>

<nav className="hidden lg:flex items-center gap-8 h-full">

<div className="relative group h-full flex items-center dropdown-trigger cursor-pointer">
<span className="text-base font-normal font-sans flex items-center gap-1 opacity-90 group-hover:opacity-100 transition-opacity">
                        Quem somos
                        <iconify-icon className="" icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</span>

<div className="absolute top-[calc(100%-8px)] left-1/2 -translate-x-1/2 w-64 bg-white rounded-[20px] shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-gray-100 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 p-2 text-gray-900 flex flex-col">
<a className="px-4 py-2.5 hover:bg-gray-50 rounded-xl text-base font-sans transition-colors" href="#">Quem somos</a>
<a className="px-4 py-2.5 hover:bg-gray-50 rounded-xl text-base font-sans transition-colors" href="#">Rede de ONGs e líderes</a>
<a className="px-4 py-2.5 hover:bg-gray-50 rounded-xl text-base font-sans transition-colors" href="#">Transparência</a>
<a className="px-4 py-2.5 hover:bg-gray-50 rounded-xl text-base font-sans transition-colors" href="#">FAQ</a>
</div>
</div>

<a className="text-base font-normal font-sans opacity-90 hover:opacity-100 transition-opacity" href="#o-que-fazemos">
                    O que fazemos
                </a>

<a className="text-base font-normal font-sans opacity-90 hover:opacity-100 transition-opacity" href="#como-ajudar">
                    Como ajudar
                </a>

<div className="relative group h-full flex items-center dropdown-trigger cursor-pointer">
<span className="text-base font-normal font-sans flex items-center gap-1 opacity-90 group-hover:opacity-100 transition-opacity">
                        Fale conosco
                        <iconify-icon icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</span>

<div className="absolute top-[calc(100%-8px)] left-1/2 -translate-x-1/2 w-56 bg-white rounded-[20px] shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-gray-100 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 p-2 text-gray-900 flex flex-col">
<a className="px-4 py-2.5 hover:bg-gray-50 rounded-xl text-base font-sans transition-colors" href="#">Ética e Integridade</a>
<a className="px-4 py-2.5 hover:bg-gray-50 rounded-xl text-base font-sans transition-colors" href="#">Imprensa</a>
<a className="px-4 py-2.5 hover:bg-gray-50 rounded-xl text-base font-sans transition-colors" href="#">Trabalhe conosco</a>
<a className="px-4 py-2.5 hover:bg-gray-50 rounded-xl text-base font-sans transition-colors" href="#">Voluntariado</a>
</div>
</div>
</nav>

<a className="hidden md:flex text-white px-5 py-2.5 rounded-full text-base font-normal hover:-translate-y-0.5 shadow-lg transition-all duration-300 items-center gap-2 bg-sky-500 hover:bg-sky-600 shadow-sky-500/20" href="#como-ajudar">
                Doe agora
                <iconify-icon icon="solar:heart-linear" width="16"></iconify-icon>
</a>

<button className="lg:hidden opacity-90">
<iconify-icon icon="solar:hamburger-menu-linear" width="28"></iconify-icon>
</button>
</div>
</header>

<section className="lg:h-[110vh] overflow-hidden bg-[#0f1115] w-full h-[100vh] relative" data-theme="dark" id="hero-section">

<div className="absolute top-0 right-0 bottom-0 left-0">
<video autoplay="" className="opacity-60 w-full h-full object-cover scale-105" loop="" muted="" playsinline="">
<source className="" src="https://videos.pexels.com/video-files/3196291/3196291-uhd_2560_1440_25fps.mp4" type="video/mp4"/>
</video>
</div>

<div className="bg-gradient-to-b from-[#0f1115]/50 via-[#0f1115]/30 to-[#0f1115] absolute top-0 right-0 bottom-0 left-0"></div>

<div className="absolute top-[25%] left-[5%] lg:left-[10%] hidden lg:block z-10 animate-[fadeIn_1s_ease-out_0.5s_both]">
<div className="transform hover:-translate-y-2 transition-transform duration-500 bg-white/10 max-w-xs border-white/10 border rounded-[20px] pt-4 pr-4 pb-4 pl-4 shadow-2xl backdrop-blur-md -translate-x-16 -translate-y-16" style={{maskImage: 'linear-gradient(200deg, transparent, black 0%, black 100%, transparent)'}}>
<div className="relative rounded-[12px] overflow-hidden mb-4 h-40 w-full group">
<img alt="Artes Marciais" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-10 h-10 bg-white/20 backdrop-blur rounded-full flex items-center justify-center cursor-pointer hover:bg-white/40 transition-colors">
<iconify-icon className="text-white" icon="solar:play-circle-bold-duotone" width="20"></iconify-icon>
</div>
</div>
</div>
<div className="flex items-start justify-between">
<div className="">
<p className="text-sm text-white/60 uppercase tracking-widest mb-1 font-sans">Nossos Projetos</p>
<p className="text-white font-manrope font-normal text-xl tracking-tight leading-tight">Transformação pelo Esporte</p>
</div>
</div>
</div>
</div>

<div className="absolute bottom-24 lg:bottom-32 left-0 w-full px-6 z-20">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
<div className="lg:col-span-8">
<h1 className="leading-[0.9] animate-[fadeIn_1s_ease-out_0.1s_both] md:text-8xl lg:text-8xl text-6xl font-normal text-white tracking-tight font-manrope max-w-xl mb-0">Construindo o Futuro</h1>
</div>
<div className="lg:col-span-4 lg:mb-4 animate-[fadeIn_1s_ease-out_0.3s_both]">
<p className="text-white/80 text-lg leading-relaxed mb-8 max-w-md font-sans">
                        O esporte como ferramenta real de transformação social. Nascemos do compromisso com crianças e jovens que precisam de oportunidades reais.
                    </p>
<div className="flex flex-wrap gap-4">
<a className="text-white px-8 py-4 rounded-full text-base font-normal transition-colors flex items-center gap-2 font-sans shadow-lg bg-sky-500 hover:bg-sky-600 shadow-sky-500/20" href="#como-ajudar">
                            Doe Agora
                            <iconify-icon icon="solar:heart-bold-duotone" width="18"></iconify-icon>
</a>
<a className="bg-white/10 backdrop-blur-md border border-white/10 px-8 py-4 rounded-full text-white text-base font-normal hover:bg-white/20 transition-colors font-sans" href="#o-que-fazemos">
                            O que fazemos
                        </a>
</div>
</div>
</div>
</div>
</section>

<div className="mx-auto max-w-7xl border-l border-r border-dashed border-gray-200 min-h-screen relative">

<div className="absolute inset-0 pointer-events-none flex justify-between px-4 opacity-40 z-0">
<div className="w-px h-full bg-gray-200"></div>
<div className="w-px h-full bg-gray-200"></div>
<div className="w-px h-full bg-gray-200"></div>
</div>
<main className="z-10 md:p-6 lg:p-8 pt-4 pr-4 pb-4 pl-4 relative space-y-6">

<section className="pt-24 pb-12" data-theme="light">
<div className="text-center max-w-3xl mx-auto mb-20">
<div className="inline-flex items-center rounded-full border border-gray-200 bg-white px-3 py-1 text-sm text-gray-500 mb-6 shadow-sm font-sans uppercase tracking-wider">
                        Missão
                    </div>
<h2 className="text-4xl lg:text-5xl text-gray-900 leading-tight mb-6 font-manrope font-normal tracking-tight">
                        Transformar realidades começa com <br/>
<span className="text-gray-400">propósito, método e ação.</span>
</h2>
<p className="text-lg text-gray-500 leading-relaxed font-sans max-w-2xl mx-auto">
                        Nossa missão é promover o desenvolvimento integral de crianças e jovens, utilizando o esporte como instrumento de inclusão social, fortalecimento emocional e construção de valores.
                    </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-3">
<div className="group bg-white rounded-[20px] p-10 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgb(0,0,0,0.06)] transition-all duration-300 flex flex-col h-full cursor-pointer">
<div className="w-14 h-14 rounded-[16px] flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 bg-sky-50 text-sky-500">
<iconify-icon icon="solar:heart-pulse-linear" width="28"></iconify-icon>
</div>
<h3 className="text-3xl font-manrope font-normal tracking-tight text-gray-900 mb-4">Desenvolvimento físico e emocional</h3>
<p className="text-base text-gray-500 font-sans leading-relaxed mt-auto">Construímos a base para um crescimento saudável, trabalhando o corpo e a mente em conjunto para gerar autoconfiança.</p>
</div>
<div className="group bg-white rounded-[20px] p-10 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgb(0,0,0,0.06)] transition-all duration-300 flex flex-col h-full cursor-pointer">
<div className="w-14 h-14 rounded-[16px] flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 bg-sky-50 text-sky-500">
<iconify-icon icon="solar:target-linear" width="28"></iconify-icon>
</div>
<h3 className="text-3xl font-manrope font-normal tracking-tight text-gray-900 mb-4">Disciplina, foco e responsabilidade</h3>
<p className="text-base text-gray-500 font-sans leading-relaxed mt-auto">Através da rotina esportiva, ensinamos o valor do esforço contínuo e do respeito às regras para alcançar objetivos.</p>
</div>
<div className="group bg-white rounded-[20px] p-10 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgb(0,0,0,0.06)] transition-all duration-300 flex flex-col h-full cursor-pointer">
<div className="w-14 h-14 rounded-[16px] flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 bg-sky-50 text-sky-500">
<iconify-icon icon="solar:users-group-rounded-linear" width="28"></iconify-icon>
</div>
<h3 className="text-3xl font-manrope font-normal tracking-tight text-gray-900 mb-4">Inclusão e fortalecimento</h3>
<p className="text-base text-gray-500 font-sans leading-relaxed mt-auto">Criamos um ambiente seguro e acolhedor onde todos pertencem, fortalecendo os laços com as famílias e a comunidade.</p>
</div>
</div>
</section>

<section className="mt-12 mb-12 pt-24 pb-24 relative" data-theme="light">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16 gap-x-3 gap-y-3">
<div className="lg:col-span-4 flex flex-col justify-between">
<div className="flex items-center gap-2 text-gray-500 text-base font-sans">
<span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
                            Impacto real e contínuo
                        </div>
<div className="hidden lg:flex items-center gap-6 mt-32">
<p className="text-lg font-normal text-gray-900 tracking-tight leading-snug font-sans max-w-[180px]">
                                "Um processo de transformação do início ao fim. Profissionais exemplares!"
                            </p>
<div className="w-px h-16 bg-gray-200 shrink-0"></div>
<div className="flex items-center gap-4">
<img alt="Carlos Santos" className="w-12 h-12 rounded-full object-cover grayscale" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&amp;w=150&amp;auto=format&amp;fit=crop"/>
<div className="">
<h4 className="text-lg font-normal text-gray-900 tracking-tight font-sans">Carlos S.</h4>
<p className="text-base text-gray-500 font-sans">Pai de aluno</p>
</div>
</div>
</div>
</div>
<div className="lg:col-span-8 max-w-3xl max-h-80 gap-x-y-0 gap-y-0">
<h2 className="lg:text-6xl leading-[1.05] text-5xl font-normal text-gray-900 tracking-tight font-manrope mb-12">
                            Entregamos projetos esportivos e educacionais focados na qualidade.
                            <span className="text-gray-400">Nosso trabalho mistura esporte com cidadania.</span>
</h2>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-3">
<div className="bg-white rounded-[20px] p-10 shadow-[0_2px_20px_rgb(0,0,0,0.03)] border border-gray-100 flex flex-col min-h-[280px]">
<span className="text-lg text-gray-400 font-sans mb-12">/01</span>
<div className="mt-auto">
<h3 className="text-7xl lg:text-8xl font-manrope font-normal tracking-tight text-gray-900 mb-4">400+</h3>
<p className="text-base text-gray-500 font-sans leading-relaxed">Crianças e jovens atendidos por ano</p>
</div>
</div>
<div className="flex flex-col min-h-[280px] bg-white border-gray-100 border rounded-[20px] pt-10 pr-10 pb-10 pl-10 shadow-[0_2px_20px_rgb(0,0,0,0.03)]">
<span className="text-lg text-gray-400 font-sans mb-12">/02</span>
<div className="mt-auto">
<h3 className="text-7xl lg:text-8xl font-manrope font-normal tracking-tight text-gray-900 mb-4">25+</h3>
<p className="text-base text-gray-500 font-sans leading-relaxed">Turmas esportivas ativas atualmente</p>
</div>
</div>
<div className="bg-white rounded-[20px] p-10 shadow-[0_2px_20px_rgb(0,0,0,0.03)] border border-gray-100 flex flex-col min-h-[280px]">
<span className="text-lg text-gray-400 font-sans mb-12">/03</span>
<div className="mt-auto">
<h3 className="text-7xl lg:text-8xl font-manrope font-normal tracking-tight text-gray-900 mb-4">10+</h3>
<p className="text-base text-gray-500 font-sans leading-relaxed">Anos de atuação social contínua</p>
</div>
</div>
</div>
</section>

<section className="pt-24 pb-24" data-theme="light" id="o-que-fazemos">
<div className="mb-12">
<h2 className="text-4xl md:text-5xl text-gray-900 mb-4 font-manrope font-normal tracking-tight">
                        Esporte, educação e convivência <br/><span className="text-gray-400">como base para o futuro</span>
</h2>
<p className="text-lg text-gray-500 font-sans">Modalidades esportivas oferecidas:</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="relative rounded-[20px] overflow-hidden group h-[500px] lg:h-[600px] flex flex-col justify-between p-8 cursor-pointer">
<img alt="Treino de Jiu-Jitsu" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out z-0" src="https://images.unsplash.com/photo-1720730790947-b18c74a2b83e?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-transparent z-10 transition-opacity duration-500"></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/90 via-[#0a0a0a]/40 to-transparent z-10 transition-opacity duration-500"></div>
<div className="relative z-20 max-w-[90%]">
<p className="leading-snug text-base font-normal text-gray-50 tracking-wide font-sans drop-shadow-sm">Aulas focadas em técnica, respeito mútuo e autoconfiança no tatame e na vida.</p>
</div>
<div className="relative z-20 flex items-end justify-between w-full mt-auto">
<div className="flex flex-col items-start">
<h3 className="text-4xl text-white font-normal tracking-tight mb-6 font-manrope">Jiu-Jitsu</h3>
<button className="inline-flex items-center gap-2 bg-white/[0.15] hover:bg-white/[0.25] backdrop-blur-md text-white px-6 py-2.5 rounded-full text-base font-normal transition-all duration-300 border border-white/10 font-sans">
                                    Explorar <span className="text-xl font-light leading-none mt-0.5">+</span>
</button>
</div>
</div>
</div>

<div className="relative rounded-[20px] overflow-hidden group h-[500px] lg:h-[600px] flex flex-col justify-between p-8 cursor-pointer">
<img alt="Treino de Muay Thai" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out z-0" src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-transparent z-10 transition-opacity duration-500"></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/90 via-[#0a0a0a]/40 to-transparent z-10 transition-opacity duration-500"></div>
<div className="relative z-20 max-w-[90%]">
<p className="text-base leading-snug font-sans font-normal tracking-wide drop-shadow-sm text-gray-50">Desenvolvimento de condicionamento físico, foco extremo e controle emocional.</p>
</div>
<div className="relative z-20 flex items-end justify-between w-full mt-auto">
<div className="flex flex-col items-start">
<h3 className="text-4xl text-white font-normal tracking-tight mb-6 font-manrope">Muay Thai</h3>
<button className="inline-flex items-center gap-2 bg-white/[0.15] hover:bg-white/[0.25] backdrop-blur-md text-white px-6 py-2.5 rounded-full text-base font-normal transition-all duration-300 border border-white/10 font-sans">
                                    Explorar <span className="text-xl font-light leading-none mt-0.5">+</span>
</button>
</div>
</div>
</div>

<div className="relative rounded-[20px] overflow-hidden group h-[500px] lg:h-[600px] flex flex-col justify-between p-8 cursor-pointer">
<img alt="Treino de Boxe" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out z-0" src="https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-transparent z-10 transition-opacity duration-500"></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/90 via-[#0a0a0a]/40 to-transparent z-10 transition-opacity duration-500"></div>
<div className="relative z-20 max-w-[90%]">
<p className="text-base leading-snug font-sans font-normal tracking-wide drop-shadow-sm text-gray-50">Trabalho de agilidade, estratégia e superação de limites em um ambiente guiado.</p>
</div>
<div className="relative z-20 flex items-end justify-between w-full mt-auto">
<div className="flex flex-col items-start">
<h3 className="text-4xl text-white font-normal tracking-tight mb-6 font-manrope">Boxe</h3>
<button className="inline-flex items-center gap-2 bg-white/[0.15] hover:bg-white/[0.25] backdrop-blur-md text-white px-6 py-2.5 rounded-full text-base font-normal transition-all duration-300 border border-white/10 font-sans">
                                    Explorar <span className="text-xl font-light leading-none mt-0.5">+</span>
</button>
</div>
</div>
</div>

<div className="relative rounded-[20px] overflow-hidden group h-[500px] lg:h-[600px] flex flex-col justify-between p-8 cursor-pointer">
<img alt="Jogo de Handebol" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out z-0" src="https://images.unsplash.com/photo-1526232761682-d26e03ac148e?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-transparent z-10 transition-opacity duration-500"></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/90 via-[#0a0a0a]/40 to-transparent z-10 transition-opacity duration-500"></div>
<div className="relative z-20 max-w-[90%]">
<p className="leading-snug text-base font-normal text-gray-50 tracking-wide font-sans drop-shadow-sm">Esporte coletivo que estimula o trabalho em equipe, comunicação e velocidade.</p>
</div>
<div className="relative z-20 flex items-end justify-between w-full mt-auto">
<div className="flex flex-col items-start">
<h3 className="text-4xl text-white font-normal tracking-tight mb-6 font-manrope">Handebol</h3>
<button className="inline-flex items-center gap-2 bg-white/[0.15] hover:bg-white/[0.25] backdrop-blur-md text-white px-6 py-2.5 rounded-full text-base font-normal transition-all duration-300 border border-white/10 font-sans">
                                    Explorar <span className="text-xl font-light leading-none mt-0.5">+</span>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white rounded-[20px] px-6 lg:px-12 border border-gray-100 shadow-sm" data-theme="light">
<div className="max-w-3xl mx-auto text-center mb-20">
<h2 className="text-4xl md:text-5xl text-gray-900 mb-6 font-manrope font-normal tracking-tight leading-[1.1]">
                        Muito além do esporte: <br className="hidden md:block"/> construímos oportunidades
                    </h2>
<p className="text-lg text-gray-500 font-sans leading-relaxed">
                        A Construindo o Futuro acredita que o verdadeiro impacto acontece quando a criança é vista de forma completa.
                    </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-4xl mx-auto">
<div className="bg-gray-50 p-8 rounded-[20px] border border-gray-100 flex items-center gap-6 transition-colors hover:bg-gray-100/80">
<div className="w-14 h-14 rounded-[16px] bg-white shadow-sm border border-gray-200 flex items-center justify-center shrink-0">
<iconify-icon className="text-sky-500" icon="solar:star-linear" width="24"></iconify-icon>
</div>
<p className="text-base font-normal tracking-tight font-sans text-gray-900">Fortalecer a autoestima e a confiança</p>
</div>
<div className="bg-gray-50 p-8 rounded-[20px] border border-gray-100 flex items-center gap-6 transition-colors hover:bg-gray-100/80">
<div className="w-14 h-14 rounded-[16px] bg-white shadow-sm border border-gray-200 flex items-center justify-center shrink-0">
<iconify-icon className="text-sky-500" icon="solar:link-linear" width="24"></iconify-icon>
</div>
<p className="text-base font-normal tracking-tight font-sans text-gray-900">Criar referências positivas de convivência</p>
</div>
<div className="bg-gray-50 p-8 rounded-[20px] border border-gray-100 flex items-center gap-6 transition-colors hover:bg-gray-100/80">
<div className="w-14 h-14 rounded-[16px] bg-white shadow-sm border border-gray-200 flex items-center justify-center shrink-0">
<iconify-icon className="text-sky-500" icon="solar:book-2-linear" width="24"></iconify-icon>
</div>
<p className="text-base font-normal tracking-tight font-sans text-gray-900">Reduzir a evasão escolar</p>
</div>
<div className="bg-gray-50 p-8 rounded-[20px] border border-gray-100 flex items-center gap-6 transition-colors hover:bg-gray-100/80">
<div className="w-14 h-14 rounded-[16px] bg-white shadow-sm border border-gray-200 flex items-center justify-center shrink-0">
<iconify-icon className="text-sky-500" icon="solar:rocket-linear" width="24"></iconify-icon>
</div>
<p className="text-base font-normal tracking-tight font-sans text-gray-900">Estimular sonhos e projetos de vida</p>
</div>
</div>
</section>

<section className="overflow-hidden -mx-4 md:-mx-6 lg:-mx-8 pt-24 pb-24" data-theme="light">
<div className="text-center max-w-4xl mx-auto mb-16 px-4">
<h2 className="md:text-5xl lg:text-6xl text-4xl font-normal text-gray-900 tracking-tight font-manrope">Cada treino, cada sorriso, cada 
conquista importa</h2>
</div>
<div className="relative w-full">
<div className="mx-auto w-full overflow-hidden" style={{maskImage: 'linear-gradient(to right, transparent, black 12%, black 88%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 12%, black 88%, transparent)'}}>
<div className="flex w-max" style={{animation: 'marquee-left 60s linear infinite', willChange: 'transform'}}>

<div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3 sm:gap-4 flex-shrink-0 pr-3 sm:pr-4">
<div className="rounded-[20px] overflow-hidden border border-gray-100 bg-white"><img alt="Workout" className="w-40 sm:w-48 lg:w-56 h-32 sm:h-40 lg:h-48 object-cover" src="https://images.unsplash.com/photo-1526232761682-d26e03ac148e?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/></div>
<div className="rounded-[20px] overflow-hidden border border-gray-100 bg-white"><img alt="Smile" className="w-40 sm:w-48 lg:w-56 h-32 sm:h-40 lg:h-48 object-cover" src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/></div>
<div className="rounded-[20px] overflow-hidden border border-gray-100 bg-white"><img alt="Achievement" className="w-40 sm:w-48 lg:w-56 h-32 sm:h-40 lg:h-48 object-cover" src="https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/></div>
<div className="rounded-[20px] overflow-hidden border border-gray-100 bg-white"><img alt="Workout" className="w-40 sm:w-48 lg:w-56 h-32 sm:h-40 lg:h-48 object-cover" src="https://images.unsplash.com/photo-1720730790947-b18c74a2b83e?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/></div>
<div className="rounded-[20px] overflow-hidden border border-gray-100 bg-white"><img alt="Smile" className="w-40 sm:w-48 lg:w-56 h-32 sm:h-40 lg:h-48 object-cover" src="https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/></div>
<div className="rounded-[20px] overflow-hidden border border-gray-100 bg-white"><img alt="Achievement" className="w-40 sm:w-48 lg:w-56 h-32 sm:h-40 lg:h-48 object-cover" src="https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/></div>
<div className="rounded-[20px] overflow-hidden border border-gray-100 bg-white"><img alt="Workout" className="w-40 sm:w-48 lg:w-56 h-32 sm:h-40 lg:h-48 object-cover" src="https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/></div>
<div className="rounded-[20px] overflow-hidden border border-gray-100 bg-white"><img alt="Smile" className="w-40 sm:w-48 lg:w-56 h-32 sm:h-40 lg:h-48 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/></div>
<div className="rounded-[20px] overflow-hidden border border-gray-100 bg-white"><img alt="Achievement" className="w-40 sm:w-48 lg:w-56 h-32 sm:h-40 lg:h-48 object-cover" src="https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/></div>
<div className="rounded-[20px] overflow-hidden border border-gray-100 bg-white"><img alt="Workout" className="w-40 sm:w-48 lg:w-56 h-32 sm:h-40 lg:h-48 object-cover" src="https://images.unsplash.com/photo-1504450758481-7338eba7524a?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/></div>
<div className="rounded-[20px] overflow-hidden border border-gray-100 bg-white"><img alt="Smile" className="w-40 sm:w-48 lg:w-56 h-32 sm:h-40 lg:h-48 object-cover" src="https://images.unsplash.com/photo-1515523110800-9415d13b84a8?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/></div>
<div className="rounded-[20px] overflow-hidden border border-gray-100 bg-white"><img alt="Achievement" className="w-40 sm:w-48 lg:w-56 h-32 sm:h-40 lg:h-48 object-cover" src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/></div>
<div className="rounded-[20px] overflow-hidden border border-gray-100 bg-white"><img alt="Workout" className="w-40 sm:w-48 lg:w-56 h-32 sm:h-40 lg:h-48 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/></div>
<div className="rounded-[20px] overflow-hidden border border-gray-100 bg-white"><img alt="Smile" className="w-40 sm:w-48 lg:w-56 h-32 sm:h-40 lg:h-48 object-cover" src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/></div>
<div className="rounded-[20px] overflow-hidden border border-gray-100 bg-white"><img alt="Achievement" className="w-40 sm:w-48 lg:w-56 h-32 sm:h-40 lg:h-48 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/></div>
<div className="rounded-[20px] overflow-hidden border border-gray-100 bg-white"><img alt="Workout" className="w-40 sm:w-48 lg:w-56 h-32 sm:h-40 lg:h-48 object-cover" src="https://images.unsplash.com/photo-1526232761682-d26e03ac148e?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/></div>
</div>

<div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3 sm:gap-4 flex-shrink-0 pr-3 sm:pr-4">
<div className="rounded-[20px] overflow-hidden border border-gray-100 bg-white"><img alt="Workout" className="w-40 sm:w-48 lg:w-56 h-32 sm:h-40 lg:h-48 object-cover" src="https://images.unsplash.com/photo-1526232761682-d26e03ac148e?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/></div>
<div className="rounded-[20px] overflow-hidden border border-gray-100 bg-white"><img alt="Smile" className="w-40 sm:w-48 lg:w-56 h-32 sm:h-40 lg:h-48 object-cover" src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/></div>
<div className="rounded-[20px] overflow-hidden border border-gray-100 bg-white"><img alt="Achievement" className="w-40 sm:w-48 lg:w-56 h-32 sm:h-40 lg:h-48 object-cover" src="https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/></div>
<div className="rounded-[20px] overflow-hidden border border-gray-100 bg-white"><img alt="Workout" className="w-40 sm:w-48 lg:w-56 h-32 sm:h-40 lg:h-48 object-cover" src="https://images.unsplash.com/photo-1720730790947-b18c74a2b83e?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/></div>
<div className="rounded-[20px] overflow-hidden border border-gray-100 bg-white"><img alt="Smile" className="w-40 sm:w-48 lg:w-56 h-32 sm:h-40 lg:h-48 object-cover" src="https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/></div>
<div className="rounded-[20px] overflow-hidden border border-gray-100 bg-white"><img alt="Achievement" className="w-40 sm:w-48 lg:w-56 h-32 sm:h-40 lg:h-48 object-cover" src="https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/></div>
<div className="rounded-[20px] overflow-hidden border border-gray-100 bg-white"><img alt="Workout" className="w-40 sm:w-48 lg:w-56 h-32 sm:h-40 lg:h-48 object-cover" src="https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/></div>
<div className="rounded-[20px] overflow-hidden border border-gray-100 bg-white"><img alt="Smile" className="w-40 sm:w-48 lg:w-56 h-32 sm:h-40 lg:h-48 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/></div>
<div className="rounded-[20px] overflow-hidden border border-gray-100 bg-white"><img alt="Achievement" className="w-40 sm:w-48 lg:w-56 h-32 sm:h-40 lg:h-48 object-cover" src="https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/></div>
<div className="rounded-[20px] overflow-hidden border border-gray-100 bg-white"><img alt="Workout" className="w-40 sm:w-48 lg:w-56 h-32 sm:h-40 lg:h-48 object-cover" src="https://images.unsplash.com/photo-1504450758481-7338eba7524a?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/></div>
<div className="rounded-[20px] overflow-hidden border border-gray-100 bg-white"><img alt="Smile" className="w-40 sm:w-48 lg:w-56 h-32 sm:h-40 lg:h-48 object-cover" src="https://images.unsplash.com/photo-1515523110800-9415d13b84a8?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/></div>
<div className="rounded-[20px] overflow-hidden border border-gray-100 bg-white"><img alt="Achievement" className="w-40 sm:w-48 lg:w-56 h-32 sm:h-40 lg:h-48 object-cover" src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/></div>
<div className="rounded-[20px] overflow-hidden border border-gray-100 bg-white"><img alt="Workout" className="w-40 sm:w-48 lg:w-56 h-32 sm:h-40 lg:h-48 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/></div>
<div className="rounded-[20px] overflow-hidden border border-gray-100 bg-white"><img alt="Smile" className="w-40 sm:w-48 lg:w-56 h-32 sm:h-40 lg:h-48 object-cover" src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/></div>
<div className="rounded-[20px] overflow-hidden border border-gray-100 bg-white"><img alt="Achievement" className="w-40 sm:w-48 lg:w-56 h-32 sm:h-40 lg:h-48 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/></div>
<div className="rounded-[20px] overflow-hidden border border-gray-100 bg-white"><img alt="Workout" className="w-40 sm:w-48 lg:w-56 h-32 sm:h-40 lg:h-48 object-cover" src="https://images.unsplash.com/photo-1526232761682-d26e03ac148e?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/></div>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden lg:p-20 bg-blue-600 rounded-[20px] mt-16 pt-8 pr-8 pb-8 pl-8 relative shadow-2xl" data-theme="dark" id="como-ajudar">
<div className="relative z-10 flex flex-col items-center text-center max-w-2xl mx-auto mb-20 pt-8">
<h2 className="text-5xl md:text-6xl text-white mb-6 font-manrope font-normal tracking-tight">
                        Juntos, o impacto <br/> vai mais longe
                    </h2>
<p className="leading-relaxed text-lg text-blue-200 font-sans">
                        A ONG Construindo o Futuro depende do apoio de pessoas e instituições que acreditam no poder do esporte. Você pode contribuir de diferentes formas:
                    </p>
</div>
<div className="z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 relative gap-x-3 gap-y-3">
<div className="group flex flex-col hover:-translate-y-1.5 hover:bg-white/[0.06] hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] transition-all duration-300 bg-blue-500 h-full border-white/10 border rounded-[20px] pt-10 pr-10 pb-10 pl-10">
<div className="h-16 w-16 rounded-[16px] bg-white/5 flex items-center justify-center border border-white/10 mb-8 group-hover:scale-110 transition-all duration-300 text-white group-hover:bg-sky-500/10 group-hover:text-sky-400 group-hover:border-sky-500/20">
<iconify-icon icon="solar:wad-of-money-linear" width="32"></iconify-icon>
</div>
<h3 className="text-3xl text-white font-manrope font-normal tracking-tight mt-auto">Doações financeiras</h3>
</div>
<div className="group flex flex-col hover:-translate-y-1.5 hover:bg-white/[0.06] hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] transition-all duration-300 bg-blue-500 h-full border-white/10 border rounded-[20px] pt-10 pr-10 pb-10 pl-10">
<div className="h-16 w-16 rounded-[16px] bg-white/5 flex items-center justify-center border border-white/10 mb-8 group-hover:scale-110 transition-all duration-300 text-white group-hover:bg-sky-500/10 group-hover:text-sky-400 group-hover:border-sky-500/20">
<iconify-icon className="" icon="solar:buildings-2-linear" width="32"></iconify-icon>
</div>
<h3 className="text-3xl text-white font-manrope font-normal tracking-tight mt-auto">Parcerias institucionais</h3>
</div>
<div className="group flex flex-col hover:-translate-y-1.5 hover:bg-white/[0.06] hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] transition-all duration-300 bg-blue-500 h-full border-white/10 border rounded-[20px] px-10 py-10">
<div className="h-16 w-16 rounded-[16px] bg-white/5 flex items-center justify-center border border-white/10 mb-8 group-hover:scale-110 transition-all duration-300 text-white group-hover:bg-sky-500/10 group-hover:text-sky-400 group-hover:border-sky-500/20">
<iconify-icon className="" icon="solar:box-linear" width="32"></iconify-icon>
</div>
<h3 className="text-3xl text-white font-manrope font-normal tracking-tight mt-auto">Materiais esportivos</h3>
</div>
<div className="group flex flex-col hover:-translate-y-1.5 hover:bg-white/[0.06] hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] transition-all duration-300 bg-blue-500 h-full border-white/10 border rounded-[20px] px-10 py-10">
<div className="h-16 w-16 rounded-[16px] bg-white/5 flex items-center justify-center border border-white/10 mb-8 group-hover:scale-110 transition-all duration-300 text-white group-hover:bg-sky-500/10 group-hover:text-sky-400 group-hover:border-sky-500/20">
<iconify-icon className="" icon="solar:hand-shake-linear" width="32"></iconify-icon>
</div>
<h3 className="text-3xl text-white font-manrope font-normal tracking-tight mt-auto">Voluntariado</h3>
</div>
</div>
</section>

<section className="pt-32 pr-4 pb-32 pl-4" data-theme="light">
<div className="max-w-4xl mx-auto">
<div className="text-center mb-20">
<span className="text-base text-gray-500 mb-6 block font-sans uppercase tracking-widest">Governança</span>
<h2 className="text-4xl md:text-5xl text-gray-900 font-manrope font-normal tracking-tight mb-6">
                            Transparência como compromisso com a sociedade
                        </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
<div className="flex items-center gap-6">
<div className="w-16 h-16 bg-white border border-gray-200 rounded-[16px] shadow-sm flex items-center justify-center shrink-0">
<iconify-icon className="text-gray-900" icon="solar:document-text-linear" width="28"></iconify-icon>
</div>
<p className="text-lg text-gray-900 font-normal tracking-tight font-sans">Relatórios periódicos de impacto</p>
</div>
<div className="flex items-center gap-6">
<div className="w-16 h-16 bg-white border border-gray-200 rounded-[16px] shadow-sm flex items-center justify-center shrink-0">
<iconify-icon className="text-gray-900" icon="solar:calculator-linear" width="28"></iconify-icon>
</div>
<p className="text-lg text-gray-900 font-normal tracking-tight font-sans">Prestação de contas financeiras</p>
</div>
<div className="flex items-center gap-6">
<div className="w-16 h-16 bg-white border border-gray-200 rounded-[16px] shadow-sm flex items-center justify-center shrink-0">
<iconify-icon className="text-gray-900" icon="solar:hand-shake-linear" width="28"></iconify-icon>
</div>
<p className="text-lg text-gray-900 font-normal tracking-tight font-sans">Divulgação de parceiros</p>
</div>
<div className="flex items-center gap-6">
<div className="w-16 h-16 bg-white border border-gray-200 rounded-[16px] shadow-sm flex items-center justify-center shrink-0">
<iconify-icon className="text-gray-900" icon="solar:chat-round-line-linear" width="28"></iconify-icon>
</div>
<p className="text-lg text-gray-900 font-normal tracking-tight font-sans">Comunicação aberta e direta</p>
</div>
</div>
</div>
</section>
</main>
</div>

<footer className="w-full bg-[#050505] text-white border-t border-white/10 pt-24 pb-12" data-theme="dark">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6 md:pl-0 md:pr-0">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-20 gap-x-12 gap-y-12">
<div className="space-y-6">
<a className="flex items-center gap-2" href="#">
<iconify-icon className="text-sky-500" icon="solar:shield-check-linear" width="28"></iconify-icon>
<span className="font-manrope font-normal tracking-tight text-3xl">Construindo o Futuro</span>
</a>
<p className="text-gray-400 text-lg leading-relaxed font-sans pr-4">
                        O esporte como ferramenta real de transformação social, disciplina e inclusão para jovens e crianças.
                    </p>
</div>
<div className="lg:pl-8 pl-0 space-y-6">
<h4 className="text-xl font-normal font-manrope tracking-tight text-white">Quem somos</h4>
<ul className="space-y-4">
<li className=""><a className="text-lg text-gray-400 transition-colors font-sans block hover:text-sky-400" href="#">Nossa história</a></li>
<li className=""><a className="text-lg text-gray-400 transition-colors font-sans block hover:text-sky-400" href="#">Rede de líderes sociais</a></li>
<li className=""><a className="text-lg text-gray-400 transition-colors font-sans block hover:text-sky-400" href="#">Transparência</a></li>
<li className=""><a className="text-lg text-gray-400 transition-colors font-sans block hover:text-sky-400" href="#">FAQ</a></li>
</ul>
</div>
<div className="space-y-6">
<h4 className="text-xl font-normal font-manrope tracking-tight text-white">Fale conosco</h4>
<ul className="space-y-4">
<li className=""><a className="text-lg text-gray-400 transition-colors font-sans block hover:text-sky-400" href="#">Ética e Integridade</a></li>
<li className=""><a className="text-lg text-gray-400 transition-colors font-sans block hover:text-sky-400" href="#">Imprensa</a></li>
<li className=""><a className="text-lg text-gray-400 transition-colors font-sans block hover:text-sky-400" href="#">Trabalhe conosco</a></li>
<li className=""><a className="text-lg text-gray-400 transition-colors font-sans block hover:text-sky-400" href="#">Voluntariado</a></li>
</ul>
</div>
<div className="space-y-6">
<h4 className="text-xl font-normal font-manrope tracking-tight text-white">Contato</h4>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-gray-400">
<iconify-icon className="shrink-0" icon="solar:letter-linear" width="20"></iconify-icon>
<a className="text-lg transition-colors font-sans hover:text-sky-400" href="mailto:contato@construindoofuturo.org">contato@ong.org</a>
</li>
<li className="flex items-center gap-3 text-gray-400">
<iconify-icon className="shrink-0" icon="solar:phone-linear" width="20"></iconify-icon>
<a className="text-lg transition-colors font-sans hover:text-sky-400" href="tel:+5511999999999">(11) 99999-9999</a>
</li>
<li className="flex items-center gap-3 text-gray-400">
<iconify-icon className="shrink-0" icon="solar:map-point-linear" width="20"></iconify-icon>
<span className="text-lg font-sans">Suzano, SP - Brasil</span>
</li>
</ul>
</div>
</div>
<div className="h-px w-full bg-white/10 mb-8"></div>
<div className="flex flex-col md:flex-row items-center justify-between gap-6">
<p className="text-gray-500 text-lg font-sans">
                    © 2024 Construindo o Futuro. Todos os direitos reservados.
                </p>
<div className="flex items-center gap-4">
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:-translate-y-1 transition-all duration-300 text-gray-400 hover:text-white border border-white/10 hover:bg-sky-500" href="#">
<iconify-icon icon="solar:camera-linear" width="20"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:-translate-y-1 transition-all duration-300 text-gray-400 hover:text-white border border-white/10 hover:bg-sky-500" href="#">
<iconify-icon icon="solar:earth-linear" width="20"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:-translate-y-1 transition-all duration-300 text-gray-400 hover:text-white border border-white/10 hover:bg-sky-500" href="#">
<iconify-icon icon="solar:play-circle-linear" width="20"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:-translate-y-1 transition-all duration-300 text-gray-400 hover:text-white border border-white/10 hover:bg-sky-500" href="#">
<iconify-icon icon="solar:link-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
