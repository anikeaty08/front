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



        // Reveal Animations on Scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

        // Navbar Scroll Effect
        window.addEventListener('scroll', () => {
            const nav = document.getElementById('navbar');
            if (window.scrollY > 50) {
                nav.classList.add('shadow-sm', 'bg-white/95');
                nav.classList.remove('bg-white/80');
            } else {
                nav.classList.remove('shadow-sm', 'bg-white/95');
                nav.classList.add('bg-white/80');
            }
        });

        // Mobile Menu Toggle
        const menuBtn = document.getElementById('menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileLinks = document.querySelectorAll('.mobile-link');
        let isMenuOpen = false;

        menuBtn.addEventListener('click', () => {
            isMenuOpen = !isMenuOpen;
            if (isMenuOpen) {
                mobileMenu.classList.remove('opacity-0', 'pointer-events-none');
                mobileMenu.classList.add('opacity-100', 'pointer-events-auto');
                menuBtn.innerHTML = '<iconify-icon icon="lucide:x" width="24"></iconify-icon>';
            } else {
                mobileMenu.classList.add('opacity-0', 'pointer-events-none');
                mobileMenu.classList.remove('opacity-100', 'pointer-events-auto');
                menuBtn.innerHTML = '<iconify-icon icon="lucide:menu" width="24"></iconify-icon>';
            }
        });

        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                isMenuOpen = false;
                mobileMenu.classList.add('opacity-0', 'pointer-events-none');
                mobileMenu.classList.remove('opacity-100', 'pointer-events-auto');
                menuBtn.innerHTML = '<iconify-icon icon="lucide:menu" width="24"></iconify-icon>';
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
      

<div className="fixed inset-0 z-0 texture-overlay w-full h-full"></div>

<nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/80 border-b border-zinc-200 transition-all duration-300" id="navbar">
<div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
<a className="text-xl tracking-tighter font-semibold text-zinc-900 flex items-center gap-2 font-sans-display uppercase z-50" href="#">
<span className="bg-zinc-900 text-white w-8 h-8 flex items-center justify-center rounded-full text-xs font-bold">V</span>
                Dra. Viviane Lucas
            </a>

<div className="hidden lg:flex items-center gap-8 text-xs font-medium tracking-wide text-zinc-500">
<a className="hover:text-zinc-900 transition-colors" href="#inicio">INÍCIO</a>
<a className="hover:text-zinc-900 transition-colors" href="#tratamentos">TRATAMENTOS</a>
<a className="hover:text-zinc-900 transition-colors" href="#sobre">SOBRE</a>
<a className="hover:text-zinc-900 transition-colors" href="#depoimentos">DEPOIMENTOS</a>
<a className="hover:text-zinc-900 transition-colors" href="#localizacao">LOCALIZAÇÃO</a>
<a className="px-4 py-2 rounded-full border border-zinc-200 hover:bg-zinc-900 hover:text-white transition-all" href="#contato">
                    (21) 99904-0743
                </a>
</div>

<button className="lg:hidden z-50 text-zinc-900" id="menu-btn">
<iconify-icon icon="lucide:menu" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>

<div className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-8 opacity-0 pointer-events-none transition-opacity duration-300" id="mobile-menu">
<a className="text-2xl font-serif text-zinc-900 mobile-link" href="#inicio">INÍCIO</a>
<a className="text-2xl font-serif text-zinc-900 mobile-link" href="#tratamentos">TRATAMENTOS</a>
<a className="text-2xl font-serif text-zinc-900 mobile-link" href="#sobre">SOBRE</a>
<a className="text-2xl font-serif text-zinc-900 mobile-link" href="#contato">CONTATO</a>
<a className="text-lg text-rose-600 font-medium mt-4 mobile-link" href="tel:+5521999040743">(21) 99904-0743</a>
</div>
</nav>

<header className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden" id="inicio">

<div className="absolute inset-0 bg-gradient-to-b from-rose-50/50 via-white to-white z-0"></div>
<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-rose-200/20 rounded-full blur-3xl animate-pulse"></div>
<div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-50/30 rounded-full blur-3xl"></div>
<div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
<div className="reveal mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-zinc-200 shadow-sm">
<iconify-icon className="text-rose-400" icon="lucide:sparkles" strokeWidth="1.5" width="14"></iconify-icon>
<span className="text-xs font-medium text-zinc-500 uppercase tracking-wider">Mais de 25 anos de experiência</span>
</div>
<h1 className="reveal text-6xl md:text-8xl lg:text-9xl text-zinc-900 tracking-tighter leading-[0.9] mb-8 font-medium">
                Harmonização <br/> <span className="text-zinc-400 italic font-serif">Facial</span>
</h1>
<div className="reveal flex flex-col md:flex-row items-center justify-center gap-4 mt-10">
<a className="group relative px-8 py-4 bg-zinc-900 text-white rounded-full overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-1" href="http://wa.me/5521999030743">
<span className="relative z-10 flex items-center gap-2 text-sm font-medium tracking-wide">
                        Agende sua consulta
                        <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right" strokeWidth="1.5"></iconify-icon>
</span>
<div className="absolute inset-0 bg-zinc-800 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
</a>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
<span className="text-[10px] uppercase tracking-widest">Scroll</span>
<iconify-icon icon="lucide:chevron-down" width="16"></iconify-icon>
</div>
</header>

<section className="relative z-20 -mt-12 mb-20">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="reveal bg-white/60 backdrop-blur-md border border-white/40 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
<iconify-icon className="text-rose-400 mb-3" icon="lucide:award" strokeWidth="1.5" width="24"></iconify-icon>
<p className="text-sm font-semibold text-zinc-800">Especialista em Endodontia</p>
</div>

<div className="reveal bg-white/60 backdrop-blur-md border border-white/40 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all delay-100">
<iconify-icon className="text-rose-400 mb-3" icon="lucide:map-pin" strokeWidth="1.5" width="24"></iconify-icon>
<p className="text-sm font-semibold text-zinc-800">Barra da Tijuca - RJ</p>
</div>

<div className="reveal bg-white/60 backdrop-blur-md border border-white/40 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all delay-200">
<iconify-icon className="text-rose-400 mb-3" icon="lucide:hourglass" strokeWidth="1.5" width="24"></iconify-icon>
<p className="text-sm font-semibold text-zinc-800">Mais de 20 anos de experiência</p>
</div>

<div className="reveal bg-white/60 backdrop-blur-md border border-white/40 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all delay-300">
<iconify-icon className="text-rose-400 mb-3" icon="lucide:file-check" strokeWidth="1.5" width="24"></iconify-icon>
<p className="text-sm font-semibold text-zinc-800">CRO - RJ 22608</p>
</div>
</div>
</div>
</section>

<section className="py-24 relative bg-white" id="tratamentos">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 reveal">
<div>
<span className="text-xs font-semibold text-rose-500 tracking-widest uppercase mb-2 block">Nossos Serviços</span>
<h2 className="text-4xl md:text-5xl font-medium text-zinc-900 tracking-tight">Tratamentos <span className="italic text-zinc-400 font-serif">Exclusivos</span></h2>
</div>
<div className="hidden md:block w-32 h-[1px] bg-zinc-200 mb-4"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-100 border border-zinc-100">

<a className="reveal group relative bg-white p-10 hover:bg-zinc-50 transition-colors h-64 flex flex-col justify-between overflow-hidden" href="https://www.dravivianelucas.com.br/tratamento-de-canal">
<div>
<iconify-icon className="text-zinc-900 mb-4" icon="lucide:microscope" strokeWidth="1.5" width="28"></iconify-icon>
<h3 className="text-xl font-medium text-zinc-900 tracking-tight">Tratamento de Canal</h3>
</div>
<div className="flex items-center gap-2 text-sm font-medium text-zinc-400 group-hover:text-rose-500 transition-colors">
                        Saiba mais
                        <iconify-icon icon="lucide:arrow-up-right" strokeWidth="1.5" width="16"></iconify-icon>
</div>
</a>

<a className="reveal group relative bg-white p-10 hover:bg-zinc-50 transition-colors h-64 flex flex-col justify-between overflow-hidden delay-75" href="https://www.dravivianelucas.com.br/implante-dentario">
<div>
<iconify-icon className="text-zinc-900 mb-4" icon="lucide:anchor" strokeWidth="1.5" width="28"></iconify-icon>
<h3 className="text-xl font-medium text-zinc-900 tracking-tight">Implante Dentário</h3>
</div>
<div className="flex items-center gap-2 text-sm font-medium text-zinc-400 group-hover:text-rose-500 transition-colors">
                        Saiba mais
                        <iconify-icon icon="lucide:arrow-up-right" strokeWidth="1.5" width="16"></iconify-icon>
</div>
</a>

<a className="reveal group relative bg-white p-10 hover:bg-zinc-50 transition-colors h-64 flex flex-col justify-between overflow-hidden delay-100" href="https://www.dravivianelucas.com.br/harmonizacao-facial">
<div>
<iconify-icon className="text-zinc-900 mb-4" icon="lucide:sparkle" strokeWidth="1.5" width="28"></iconify-icon>
<h3 className="text-xl font-medium text-zinc-900 tracking-tight">Harmonização Facial</h3>
</div>
<div className="flex items-center gap-2 text-sm font-medium text-zinc-400 group-hover:text-rose-500 transition-colors">
                        Saiba mais
                        <iconify-icon icon="lucide:arrow-up-right" strokeWidth="1.5" width="16"></iconify-icon>
</div>
</a>

<a className="reveal group relative bg-white p-10 hover:bg-zinc-50 transition-colors h-64 flex flex-col justify-between overflow-hidden" href="https://www.dravivianelucas.com.br/clareamento-dental">
<div>
<iconify-icon className="text-zinc-900 mb-4" icon="lucide:sun" strokeWidth="1.5" width="28"></iconify-icon>
<h3 className="text-xl font-medium text-zinc-900 tracking-tight">Clareamento</h3>
</div>
<div className="flex items-center gap-2 text-sm font-medium text-zinc-400 group-hover:text-rose-500 transition-colors">
                        Saiba mais
                        <iconify-icon icon="lucide:arrow-up-right" strokeWidth="1.5" width="16"></iconify-icon>
</div>
</a>

<a className="reveal group relative bg-white p-10 hover:bg-zinc-50 transition-colors h-64 flex flex-col justify-between overflow-hidden delay-75" href="https://www.dravivianelucas.com.br/restauracao-e-resina">
<div>
<iconify-icon className="text-zinc-900 mb-4" icon="lucide:hammer" strokeWidth="1.5" width="28"></iconify-icon>
<h3 className="text-xl font-medium text-zinc-900 tracking-tight">Restauração</h3>
</div>
<div className="flex items-center gap-2 text-sm font-medium text-zinc-400 group-hover:text-rose-500 transition-colors">
                        Saiba mais
                        <iconify-icon icon="lucide:arrow-up-right" strokeWidth="1.5" width="16"></iconify-icon>
</div>
</a>

<a className="reveal group relative bg-white p-10 hover:bg-zinc-50 transition-colors h-64 flex flex-col justify-between overflow-hidden delay-100" href="https://www.dravivianelucas.com.br/limpeza-dental">
<div>
<iconify-icon className="text-zinc-900 mb-4" icon="lucide:droplets" strokeWidth="1.5" width="28"></iconify-icon>
<h3 className="text-xl font-medium text-zinc-900 tracking-tight">Limpeza</h3>
</div>
<div className="flex items-center gap-2 text-sm font-medium text-zinc-400 group-hover:text-rose-500 transition-colors">
                        Saiba mais
                        <iconify-icon icon="lucide:arrow-up-right" strokeWidth="1.5" width="16"></iconify-icon>
</div>
</a>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50 relative overflow-hidden" id="sobre">

<div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-rose-50 to-transparent"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

<div className="lg:col-span-7 space-y-8 reveal">
<div>
<h2 className="text-xs font-semibold text-rose-500 tracking-widest uppercase mb-2">Biografia</h2>
<h3 className="text-4xl md:text-5xl font-medium text-zinc-900 tracking-tight mb-6">SOBRE DRA. VIVIANE LUCAS</h3>
</div>
<div className="prose prose-zinc prose-lg text-zinc-600 font-light leading-relaxed">
<p className="mb-4">
                            Carioca de nascimento e de coração, especialista em endodontia pela Associação Brasileira de Odontologia – ABO, com mais de 20 anos de experiência, tendo prestado serviço como 1º Tenente Dentista por 9 anos na Força Aérea Brasileira – FAB.
                        </p>
<p className="mb-4">
                            Consultório próprio especializado em endodontia na Barra da Tijuca, Rio do Janeiro.
                        </p>
<p className="italic text-zinc-800 font-serif text-xl border-l-2 border-rose-300 pl-4 py-2 my-6">
                            "Não há segredo algum para tantos anos de profissão, a não ser muita dedicação e amor pelo que faz."
                        </p>
</div>
<div className="flex gap-4 pt-4">
<div className="w-12 h-12 rounded-full bg-zinc-200 flex items-center justify-center">
<iconify-icon className="text-zinc-500" icon="lucide:award"></iconify-icon>
</div>
<div className="w-12 h-12 rounded-full bg-zinc-200 flex items-center justify-center">
<iconify-icon className="text-zinc-500" icon="lucide:heart-handshake"></iconify-icon>
</div>
</div>
</div>

<div className="lg:col-span-5 reveal delay-200">
<div className="relative aspect-[4/5] rounded-none md:rounded-2xl overflow-hidden bg-zinc-200 shadow-2xl">
<div className="absolute inset-0 bg-gradient-to-br from-zinc-300 to-zinc-100 flex items-center justify-center">
<span className="text-9xl text-white opacity-50 font-serif font-italic">VL</span>
</div>

<div className="absolute inset-0 bg-rose-900/10 mix-blend-overlay"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-zinc-100" id="depoimentos">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="reveal text-xs font-semibold text-rose-500 tracking-widest uppercase mb-4">Depoimentos</h2>
<h3 className="reveal text-3xl md:text-4xl font-medium text-zinc-900 tracking-tight mb-8">O que dizem nossos pacientes:</h3>
<div className="reveal delay-100 p-8 md:p-12 bg-zinc-50 rounded-2xl border border-zinc-100 relative mt-8">
<iconify-icon className="text-rose-200 absolute top-8 left-8" icon="lucide:quote" width-48=""></iconify-icon>
<div className="relative z-10 space-y-6">
<div className="flex justify-center gap-1 text-yellow-500 mb-4">
<iconify-icon className="fill-current" icon="lucide:star"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star"></iconify-icon>
</div>
<p className="text-lg text-zinc-600 font-light">
                        "Excelente profissional. Atendimento humanizado e resultados incríveis."
                    </p>
</div>
</div>
<div className="reveal mt-10">
<a className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-900 hover:text-rose-500 transition-colors border-b border-zinc-300 hover:border-rose-500 pb-1" href="https://www.google.com/search?hl=pt-BR&amp;gl=us&amp;q=Dra.+Viviane+Lucas+-+Cirurgi%C3%A3+Dentista,+Endodontia,+Botox,+Harmoniza%C3%A7%C3%A3o+Facial,+Implantes+-+Barra+da+Tijuca,+Barra+Business+Center+-+Av.+das+Am%C3%A9ricas,+3301+-+Bloco+1+Sala+217+-+Barra+da+Tijuca,+Rio+de+Janeiro+-+RJ,+22631-003,+Brasil&amp;ludocid=4755083867854233222&amp;lsig=AB86z5VXU_ANcktX4NPQxMINC5gK#lrd=0x9bd188efecc883:0x41fd739594a45e86,3" target="_blank">
                    Escreva uma avaliação
                    <iconify-icon icon="lucide:pen-line" width="14"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="bg-zinc-900 text-zinc-50 py-24" id="contato">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24">

<div className="reveal space-y-8">
<h4 className="text-xl font-serif italic text-zinc-300">Contato</h4>
<div className="space-y-4">
<p className="text-sm font-medium tracking-wide text-rose-400 uppercase">Convênis Aceitos</p>
<p className="text-2xl font-light">Agende agora uma consulta</p>
<div className="pt-4 space-y-3">
<a className="flex items-center gap-3 text-zinc-300 hover:text-white transition-colors" href="tel:+5521999040743">
<iconify-icon icon="lucide:phone" width="18"></iconify-icon>
                                Ligue (21) 99904-0743
                            </a>
<a className="flex items-center gap-3 text-zinc-300 hover:text-white transition-colors" href="https://wa.me/+5521999030743">
<iconify-icon icon="lucide:message-circle" width="18"></iconify-icon>
                                Ou clique aqui para falar direto pelo Whatsapp
                            </a>
</div>
</div>
<div className="pt-8 border-t border-zinc-800">
<p className="text-sm text-zinc-500 mb-4">Redes Sociais</p>
<a className="flex items-center gap-2 text-zinc-300 hover:text-rose-400 transition-colors" href="https://www.instagram.com/dra.vivianelucas/">
<iconify-icon icon="lucide:instagram" width="18"></iconify-icon>
                            Visite nosso Instagram: dra.vivianelucas
                        </a>
</div>
</div>

<div className="reveal delay-100 space-y-12">

<div className="space-y-6">
<h4 className="text-xl font-serif italic text-zinc-300">Horário de Atendimento</h4>
<ul className="space-y-3 text-sm text-zinc-400">
<li className="flex justify-between border-b border-zinc-800 pb-2">
<span>Segunda a Quinta-Feira</span>
<span className="text-white">De 8h30 às 18h30</span>
</li>
<li className="flex justify-between border-b border-zinc-800 pb-2">
<span>Sexta-Feira</span>
<span className="text-white">De 8h30 às 15h30</span>
</li>
</ul>
</div>

<div className="space-y-6" id="localizacao">
<h4 className="text-xl font-serif italic text-zinc-300">Localização</h4>
<address className="not-italic text-zinc-400 space-y-1 text-sm leading-relaxed">
<p className="text-white">Av. das Américas, 3301 Bloco 1 Sala 217</p>
<p>Barra Business Center</p>
<p>Barra da Tijuca</p>
<p>Rio de Janeiro, RJ</p>
</address>
<div className="inline-block px-4 py-2 bg-zinc-800 rounded text-xs text-zinc-300">
<iconify-icon className="inline mr-1 relative -top-0.5" icon="lucide:map-pin"></iconify-icon>
                            Estacionamento no local
                        </div>
</div>
</div>

<div className="reveal delay-200 space-y-8">
<h4 className="text-xl font-serif italic text-zinc-300">Vibe</h4>
<p className="text-sm text-zinc-400">Ouça e siga nossas playlists no Spotify</p>
<div className="grid gap-4">
<a className="group flex items-center p-4 bg-zinc-800/50 rounded-lg hover:bg-zinc-800 transition-all border border-zinc-800 hover:border-green-500/30" href="https://open.spotify.com/playlist/0ir7qFnUbcq6sEeaxUqyId" target="_blank">
<div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-black shrink-0">
<iconify-icon className="ml-1" icon="lucide:play" width="16"></iconify-icon>
</div>
<div className="ml-4">
<p className="text-sm font-medium text-white group-hover:text-green-400 transition-colors">Dra Viviane Lucas - Relax</p>
<p className="text-xs text-zinc-500">Spotify Playlist</p>
</div>
</a>
<a className="group flex items-center p-4 bg-zinc-800/50 rounded-lg hover:bg-zinc-800 transition-all border border-zinc-800 hover:border-green-500/30" href="https://open.spotify.com/playlist/6ruceA747NtPPxYJXg4doc" target="_blank">
<div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-black shrink-0">
<iconify-icon icon="lucide:music" width="16"></iconify-icon>
</div>
<div className="ml-4">
<p className="text-sm font-medium text-white group-hover:text-green-400 transition-colors">Dra Viviane Lucas - Good Times</p>
<p className="text-xs text-zinc-500">Spotify Playlist</p>
</div>
</a>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-zinc-950 py-12 border-t border-zinc-900">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
<div className="text-white font-serif italic text-xl">
                Dra. Viviane Lucas
            </div>
<nav className="flex flex-wrap justify-center gap-6 text-[10px] uppercase tracking-widest text-zinc-500">
<a className="hover:text-white transition-colors" href="https://www.dravivianelucas.com.br">INÍCIO</a>
<a className="hover:text-white transition-colors" href="https://www.dravivianelucas.com.br">TRATAMENTOS</a>
<a className="hover:text-white transition-colors" href="https://www.dravivianelucas.com.br">CONTATO</a>
<a className="hover:text-white transition-colors" href="https://www.dravivianelucas.com.br">LOCALIZAÇÃO</a>
<a className="hover:text-white transition-colors" href="https://www.dravivianelucas.com.br">DEPOIMENTOS</a>
<a className="hover:text-white transition-colors" href="https://www.dravivianelucas.com.br">SOBRE DRA VIVIANE</a>
</nav>
<div className="text-zinc-500 text-sm">
                (21) 99904-0743
            </div>
</div>
<div className="max-w-7xl mx-auto px-6 mt-8 text-center text-[10px] text-zinc-800">
            © 2023 Dra Viviane Lucas. Todos os direitos reservados.
        </div>
</footer>



    </>
  );
}
