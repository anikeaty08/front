import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            const navbar = document.getElementById('navbar');
            window.addEventListener('scroll', () => {
                if (window.scrollY > 20) {
                    navbar.classList.add('bg-white/80', 'backdrop-blur-lg', 'border-slate-200/50');
                    navbar.classList.remove('border-transparent');
                } else {
                    navbar.classList.remove('bg-white/80', 'backdrop-blur-lg', 'border-slate-200/50');
                    navbar.classList.add('border-transparent');
                }
            });

            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.observe-section').forEach(section => {
                observer.observe(section);
            });
            
            setTimeout(() => {
                document.querySelectorAll('.observe-section').forEach(section => {
                    const rect = section.getBoundingClientRect();
                    if(rect.top < window.innerHeight) {
                        section.classList.add('is-visible');
                    }
                });
            }, 50);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<nav className="fixed z-50 transition-all duration-300 w-full border-b pt-4 pb-4 top-0" id="navbar">
<div className="lg:px-12 flex max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<a className="flex flex-col items-start" href="#">
<span className="font-normal text-2xl tracking-tighter text-slate-900 leading-none">VINIMAX</span>
<span className="font-light text-xs tracking-widest text-sky-600 uppercase mt-1">PISCINAS</span>
</a>
<div className="hidden md:flex items-center gap-10">
<a className="text-sm font-normal text-slate-500 hover:text-slate-900 transition-colors" href="#por-que">Diferenciais</a>
<a className="text-sm font-normal text-slate-500 hover:text-slate-900 transition-colors" href="#servicos">Serviços</a>
<a className="text-sm font-normal text-slate-500 hover:text-slate-900 transition-colors" href="#processo">Processo</a>
<a className="text-sm font-normal text-slate-500 hover:text-slate-900 transition-colors" href="#galeria">Obras</a>
</div>
<a className="hover:bg-slate-800 transition-all duration-300 flex items-center gap-2 text-sm font-normal text-white bg-slate-900 rounded-full pt-2.5 pr-5 pb-2.5 pl-5 shadow-sm" href="#cta">
<span className="">Orçamento</span>
</a>
</div>
</nav>
<header className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-20 px-6 overflow-hidden">
<div className="absolute inset-0 z-0">
<img alt="Piscina" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/70 to-slate-900/95"></div>
</div>
<div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center observe-section reveal-up">
<span className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-normal tracking-widest text-slate-300 uppercase mb-8 backdrop-blur-md">
                Ribeirão Preto e Região
            </span>
<h1 className="font-normal text-5xl md:text-6xl lg:text-7xl text-white leading-tight tracking-tighter mb-6">
                Construímos piscinas.<br/>
<span className="text-sky-400">Entregamos tranquilidade.</span>
</h1>
<p className="font-light text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl mb-10">
                Sem terceirização, sem surpresas. Uma equipe local especializada cuidando de cada detalhe, do projeto estrutural à primeira braçada.
            </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
<a className="w-full sm:w-auto bg-sky-500 hover:bg-sky-400 text-white px-7 py-3.5 rounded-full font-normal text-base transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(14,165,233,0.2)]" href="#cta">
                    Falar com Especialista
                    <iconify-icon className="text-xl" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</header>
<section className="py-24 lg:py-32 observe-section bg-[#faf9f6]" id="por-que">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="text-center max-w-2xl mx-auto mb-20 reveal-up">
<h2 className="font-normal text-3xl md:text-4xl lg:text-5xl text-slate-900 tracking-tight leading-tight mb-5">A base da nossa confiança.</h2>
<p className="font-light text-lg text-slate-500 leading-relaxed">Construímos uma estrutura sólida em nosso atendimento para que você não precise se preocupar com a da sua casa.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
<div className="bg-white rounded-3xl p-8 lg:p-10 shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-slate-200/60 hover:border-slate-300/80 transition-all duration-500 reveal-up delay-100 group">
<div className="w-12 h-12 rounded-2xl bg-sky-50/50 flex items-center justify-center text-sky-600 mb-8 border border-sky-100 group-hover:scale-105 transition-transform duration-500">
<iconify-icon className="text-2xl" icon="solar:users-group-rounded-linear"></iconify-icon>
</div>
<h3 className="font-normal text-2xl text-slate-900 tracking-tight mb-3">Equipe Própria</h3>
<p className="font-light text-base text-slate-500 leading-relaxed">Não terceirizamos. Quem entra na sua casa é treinado pela Vinimax. Segurança e padrão mantidos rigorosamente.</p>
</div>
<div className="bg-white rounded-3xl p-8 lg:p-10 shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-slate-200/60 hover:border-slate-300/80 transition-all duration-500 reveal-up delay-200 group">
<div className="w-12 h-12 rounded-2xl bg-sky-50/50 flex items-center justify-center text-sky-600 mb-8 border border-sky-100 group-hover:scale-105 transition-transform duration-500">
<iconify-icon className="text-2xl" icon="solar:shield-check-linear"></iconify-icon>
</div>
<h3 className="font-normal text-2xl text-slate-900 tracking-tight mb-3">Garantia Real</h3>
<p className="font-light text-base text-slate-500 leading-relaxed">Nossa responsabilidade continua. Oferecemos garantia documentada de estrutura com assistência ágil sempre que precisar.</p>
</div>
<div className="bg-white rounded-3xl p-8 lg:p-10 shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-slate-200/60 hover:border-slate-300/80 transition-all duration-500 reveal-up delay-300 group">
<div className="w-12 h-12 rounded-2xl bg-sky-50/50 flex items-center justify-center text-sky-600 mb-8 border border-sky-100 group-hover:scale-105 transition-transform duration-500">
<iconify-icon className="text-2xl" icon="solar:map-point-linear"></iconify-icon>
</div>
<h3 className="font-normal text-2xl text-slate-900 tracking-tight mb-3">Presença Local</h3>
<p className="font-light text-base text-slate-500 leading-relaxed">Somos de Ribeirão Preto. Ter um endereço físico e conhecer a região significa que você sempre sabe onde nos encontrar.</p>
</div>
</div>
</div>
</section>
<section className="bg-white py-24 lg:py-32 border-y border-slate-200/50 observe-section" id="servicos">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="text-center mb-20 reveal-up">
<h2 className="font-normal text-4xl lg:text-5xl text-slate-900 tracking-tight leading-tight">O que fazemos <span className="text-slate-400">de melhor.</span></h2>
<p className="font-light text-lg text-slate-500 mt-5 max-w-2xl mx-auto">Soluções definitivas executadas com precisão para garantir o seu lazer sem dores de cabeça.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
<div className="md:col-span-2 bg-[#faf9f6] rounded-[2rem] p-8 lg:p-12 overflow-hidden relative group reveal-scale flex flex-col md:flex-row items-center gap-10 border border-slate-200/60">
<div className="w-full md:w-1/2 z-10">
<span className="inline-block px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-normal tracking-widest text-slate-500 uppercase mb-6">Especialidade</span>
<h3 className="font-normal text-3xl lg:text-4xl text-slate-900 tracking-tight mb-5">Construção Completa.</h3>
<p className="font-light text-base lg:text-lg text-slate-500 leading-relaxed mb-8">Do projeto à primeira braçada. Executamos obras em alvenaria e vinil com <span className="text-slate-800 font-normal">fundação robusta e filtragem superdimensionada</span> para evitar problemas futuros.</p>
<ul className="flex flex-col gap-3 font-light text-base text-slate-500">
<li className="flex items-center gap-3"><iconify-icon className="text-xl text-sky-500 shrink-0" icon="solar:check-circle-linear"></iconify-icon> Fundação e concretagem rigorosa</li>
<li className="flex items-center gap-3"><iconify-icon className="text-xl text-sky-500 shrink-0" icon="solar:check-circle-linear"></iconify-icon> Impermeabilização certificada</li>
<li className="flex items-center gap-3"><iconify-icon className="text-xl text-sky-500 shrink-0" icon="solar:check-circle-linear"></iconify-icon> Casa de máquinas padrão ABNT</li>
</ul>
</div>
<div className="w-full md:w-1/2 h-[300px] md:h-[400px] relative rounded-2xl overflow-hidden bg-slate-100">
<img alt="Estrutura de Piscina" className="object-cover w-full h-full transition-transform duration-1000 group-hover:scale-105 opacity-90" src="https://images.unsplash.com/photo-1572331165267-854da2b10ccc?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<div className="bg-white rounded-[2rem] p-8 lg:p-12 overflow-hidden relative reveal-scale delay-100 flex flex-col border border-slate-200/60 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
<div className="mb-6 z-10">
<div className="w-12 h-12 rounded-xl bg-[#faf9f6] flex items-center justify-center border border-slate-200 text-slate-700 mb-6">
<iconify-icon className="text-2xl" icon="solar:layers-minimalistic-linear"></iconify-icon>
</div>
<h3 className="font-normal text-2xl lg:text-3xl text-slate-900 tracking-tight mb-4">Troca de Bolsão.</h3>
<p className="font-light text-base text-slate-500 leading-relaxed">Renovamos sua piscina rapidamente. Mantas espessas e estampas modernas, devolvendo o visual sem quebra-quebra longo.</p>
</div>
</div>
<div className="bg-white rounded-[2rem] p-8 lg:p-12 overflow-hidden relative reveal-scale delay-200 flex flex-col border border-slate-200/60 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
<div className="mb-6 z-10">
<div className="w-12 h-12 rounded-xl bg-[#faf9f6] flex items-center justify-center border border-slate-200 text-slate-700 mb-6">
<iconify-icon className="text-2xl" icon="solar:ruler-pen-linear"></iconify-icon>
</div>
<h3 className="font-normal text-2xl lg:text-3xl text-slate-900 tracking-tight mb-4">Reforma Estrutural.</h3>
<p className="font-light text-base text-slate-500 leading-relaxed">Corrigimos vazamentos, modernizamos equipamentos e redesenhamos áreas antigas com precisão técnica.</p>
</div>
</div>
</div>
</div>
</section>
<section className="bg-slate-900 py-24 lg:py-32 observe-section relative overflow-hidden" id="processo">
<div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
<div className="text-center mb-20 reveal-up">
<h2 className="font-normal text-3xl md:text-4xl lg:text-5xl text-white tracking-tight leading-tight mb-4">Nosso Processo</h2>
<p className="font-light text-lg text-slate-400">Transparência técnica do início ao fim.</p>
</div>
<div className="relative flex flex-col md:flex-row items-start md:items-center justify-between w-full max-w-4xl mx-auto gap-12 md:gap-0 reveal-up delay-100">
<div className="hidden md:block absolute left-[10%] right-[10%] top-8 h-[1px] bg-slate-800 z-0"></div>
<div className="md:hidden absolute left-8 top-8 bottom-8 w-[1px] bg-slate-800 z-0"></div>
<div className="relative z-10 flex flex-row md:flex-col items-center gap-6 md:gap-5 w-full md:w-40 text-left md:text-center group">
<div className="w-16 h-16 shrink-0 rounded-full border border-slate-700 bg-slate-900 flex items-center justify-center transition-colors duration-300 group-hover:border-slate-500">
<div className="w-2 h-2 bg-slate-300 rounded-full"></div>
</div>
<div>
<span className="text-xs font-normal text-slate-300 tracking-widest uppercase block mb-1">Vistoria</span>
<p className="text-sm font-light text-slate-500 leading-snug md:hidden">Avaliação técnica no local.</p>
</div>
</div>
<div className="relative z-10 flex flex-row md:flex-col items-center gap-6 md:gap-5 w-full md:w-40 text-left md:text-center group">
<div className="w-16 h-16 shrink-0 rounded-full border border-slate-700 bg-slate-900 flex items-center justify-center transition-colors duration-300 group-hover:border-slate-500">
<iconify-icon className="text-slate-400 text-2xl" icon="solar:document-text-linear"></iconify-icon>
</div>
<div>
<span className="text-xs font-normal text-slate-300 tracking-widest uppercase block mb-1">Projeto</span>
<p className="text-sm font-light text-slate-500 leading-snug md:hidden">Apresentação de orçamento.</p>
</div>
</div>
<div className="relative z-10 flex flex-row md:flex-col items-center gap-6 md:gap-5 w-full md:w-40 text-left md:text-center group">
<div className="w-16 h-16 shrink-0 rounded-full border border-slate-700 bg-slate-900 flex items-center justify-center transition-colors duration-300 group-hover:border-slate-500">
<iconify-icon className="text-slate-400 text-2xl" icon="solar:ruler-pen-linear"></iconify-icon>
</div>
<div>
<span className="text-xs font-normal text-slate-300 tracking-widest uppercase block mb-1">Obra</span>
<p className="text-sm font-light text-slate-500 leading-snug md:hidden">Execução limpa e técnica.</p>
</div>
</div>
<div className="relative z-10 flex flex-row md:flex-col items-center gap-6 md:gap-5 w-full md:w-40 text-left md:text-center">
<div className="w-16 h-16 shrink-0 rounded-full bg-sky-500 flex items-center justify-center shadow-[0_0_15px_rgba(14,165,233,0.3)]">
<iconify-icon className="text-white text-3xl" icon="solar:check-read-linear"></iconify-icon>
</div>
<div>
<span className="text-xs font-normal text-white tracking-widest uppercase block mb-1">Entrega</span>
<p className="text-sm font-light text-slate-400 leading-snug md:hidden">Piscina testada e limpa.</p>
</div>
</div>
</div>
</div>
</section>
<section className="lg:py-32 observe-section bg-[#faf9f6] pt-24 pb-24" id="galeria">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="mb-16 reveal-up">
<h2 className="font-normal text-4xl lg:text-5xl text-slate-900 tracking-tight leading-tight mb-4">Obras que falam <span className="text-slate-400">por nós.</span></h2>
<p className="font-light text-lg text-slate-500 max-w-2xl">Atenção aos mínimos detalhes em cada entrega.</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
<div className="lg:col-span-7 h-[450px] lg:h-[600px] rounded-3xl overflow-hidden relative group reveal-scale cursor-pointer bg-slate-200">
<img alt="Obra Jd Botânico" className="object-cover w-full h-full transition-transform duration-1000 group-hover:scale-105" src="https://images.unsplash.com/photo-1583316174775-bd6dc0e9f298?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-0 right-0 bottom-0 left-0 overflow-hidden">
<img alt="Piscina construída em alvenaria" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://images.unsplash.com/photo-1629946832022-c327f74956e0?w=2160&amp;q=80"/>
<div className="group-hover:opacity-90 transition-opacity duration-500 bg-gradient-to-t from-slate-900/80 via-slate-900/10 to-transparent opacity-80 absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="absolute bottom-0 left-0 p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
<span className="text-slate-300 text-xs font-normal uppercase tracking-widest mb-2 block">Construção em Alvenaria</span>
<h4 className="font-normal text-2xl lg:text-3xl text-white tracking-tight">Jd. Botânico, Ribeirão Preto</h4>
</div>
</div>
<div className="lg:col-span-5 grid grid-cols-2 gap-5">
<div className="h-[215px] lg:h-[290px] rounded-3xl overflow-hidden relative group reveal-scale delay-100 cursor-pointer bg-slate-200">
<img alt="Obra Cravinhos" className="object-cover w-full h-full transition-transform duration-1000 group-hover:scale-105" src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>
<div className="absolute bottom-0 left-0 p-5">
<h4 className="font-normal text-lg text-white tracking-tight mb-1">Troca de Vinil</h4>
<p className="text-xs text-slate-300 uppercase tracking-widest">Cravinhos/SP</p>
</div>
</div>
<div className="h-[215px] lg:h-[290px] rounded-3xl overflow-hidden relative group reveal-scale delay-200 cursor-pointer bg-slate-200">
<img alt="Obra Bonfim" className="object-cover w-full h-full transition-transform duration-1000 group-hover:scale-105" src="https://images.unsplash.com/photo-1628624747186-a941c476b7ef?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>
<div className="absolute bottom-0 left-0 p-5">
<h4 className="font-normal text-lg text-white tracking-tight mb-1">Reforma Estrutural</h4>
<p className="text-xs text-slate-300 uppercase tracking-widest">Bonfim Pta.</p>
</div>
</div>
<div className="h-[215px] lg:h-[290px] rounded-3xl overflow-hidden relative group reveal-scale delay-300 cursor-pointer bg-slate-200">
<img alt="Obra Sertãozinho" className="object-cover w-full h-full transition-transform duration-1000 group-hover:scale-105" src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>
<div className="absolute bottom-0 left-0 p-5">
<h4 className="font-normal text-lg text-white tracking-tight mb-1">Iluminação</h4>
<p className="text-xs text-slate-300 uppercase tracking-widest">Sertãozinho</p>
</div>
</div>
<div className="h-[215px] lg:h-[290px] rounded-3xl overflow-hidden relative group reveal-scale delay-400 cursor-pointer bg-white flex items-center justify-center border border-slate-200/60 hover:border-slate-300 transition-colors">
<div className="text-center p-5">
<div className="w-10 h-10 bg-[#faf9f6] rounded-full flex items-center justify-center mx-auto mb-3 text-slate-500 border border-slate-200 group-hover:text-slate-900 transition-colors">
<iconify-icon className="text-xl" icon="solar:gallery-linear"></iconify-icon>
</div>
<h4 className="font-normal text-base text-slate-900 tracking-tight mb-1">Ver portfólio</h4>
<p className="text-xs text-slate-400 uppercase tracking-widest">Instagram</p>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="bg-white py-32 border-y border-slate-200/50 observe-section">
<div className="max-w-4xl mx-auto px-6 lg:px-12 flex flex-col items-center text-center">
<div className="w-full mb-10 reveal-up">
<iconify-icon className="text-slate-200 text-5xl mb-8 mx-auto" icon="solar:chat-square-quote-linear"></iconify-icon>
<blockquote className="font-normal text-2xl md:text-3xl text-slate-800 tracking-tight leading-relaxed mb-8">
                    "Tivemos um problema com outra equipe e a Vinimax assumiu o projeto. Refizeram a estrutura com maestria e entregaram antes do prazo final. Profissionalismo ímpar."
                </blockquote>
<div className="flex flex-col items-center">
<span className="font-normal text-sm text-slate-900">Carlos E. Nogueira</span>
<span className="font-light text-xs text-slate-500 mt-1 uppercase tracking-widest">Condomínio Ipê Branco</span>
</div>
</div>
</div>
</section>
<section className="bg-slate-900 py-32 observe-section relative overflow-hidden" id="cta">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800 to-slate-900"></div>
<div className="max-w-3xl mx-auto px-6 text-center reveal-scale relative z-10">
<h2 className="font-normal text-4xl md:text-5xl lg:text-6xl text-white tracking-tighter leading-tight mb-6">
                Sua piscina começa com uma conversa.
            </h2>
<p className="font-light text-lg text-slate-400 mb-10 max-w-xl mx-auto leading-relaxed">
                Agende uma vistoria técnica. Vamos avaliar seu espaço e montar um orçamento detalhado e transparente.
            </p>
<a className="inline-flex bg-white text-slate-900 px-8 py-3.5 rounded-full font-normal text-sm transition-all duration-300 hover:bg-slate-100 items-center gap-2" href="#">
                Falar pelo WhatsApp
                <iconify-icon className="text-lg" icon="solar:chat-round-line-linear"></iconify-icon>
</a>
</div>
</section>
<footer className="bg-white text-slate-500 py-12">
<div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex flex-col items-center md:items-start">
<span className="font-normal text-xl tracking-tighter text-slate-900 leading-none">VINIMAX</span>
<span className="font-light text-xs tracking-widest text-sky-600 uppercase mt-1">PISCINAS</span>
</div>
<p className="font-light text-xs text-center md:text-left text-slate-400">
                © 2024 Vinimax Piscinas. CNPJ: 00.000.000/0000-00.<br/>Ribeirão Preto, SP. Todos os direitos reservados.
            </p>
<div className="flex items-center gap-5">
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:camera-minimalistic-linear"></iconify-icon></a>
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:global-linear"></iconify-icon></a>
</div>
</div>
</footer>


    </>
  );
}
