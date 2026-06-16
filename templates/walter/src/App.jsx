import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



  (function () {
    const toggleBtn = document.getElementById('mobile-menu-toggle');
    const menu = document.getElementById('mobile-menu');
    if (!toggleBtn || !menu) return;
    const icon = toggleBtn.querySelector('iconify-icon');
    function openMenu() {
      menu.classList.remove('opacity-0', 'pointer-events-none');
      menu.setAttribute('aria-hidden', 'false');
      if (icon) icon.setAttribute('icon', 'solar:close-circle-linear');
      document.body.style.overflow = 'hidden';
    }
    function closeMenu() {
      menu.classList.add('opacity-0', 'pointer-events-none');
      menu.setAttribute('aria-hidden', 'true');
      if (icon) icon.setAttribute('icon', 'solar:hamburger-menu-linear');
      document.body.style.overflow = '';
    }
    toggleBtn.addEventListener('click', () => menu.classList.contains('opacity-0') ? openMenu() : closeMenu());
    menu.querySelectorAll('a').forEach(l => l.addEventListener('click', closeMenu));
  })();



        // Simple Carousel Logic
        const cards = document.querySelectorAll('.slider-card');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        let currentIndex = 0;
        const totalCards = cards.length;

        function showCard(index) {
            cards.forEach((card, i) => {
                if (i === index) {
                    card.classList.remove('card-hidden');
                    card.classList.add('card-active');
                } else {
                    card.classList.add('card-hidden');
                    card.classList.remove('card-active');
                }
            });
        }

        function nextCard() {
            currentIndex = (currentIndex + 1) % totalCards;
            showCard(currentIndex);
        }

        function prevCard() {
            currentIndex = (currentIndex - 1 + totalCards) % totalCards;
            showCard(currentIndex);
        }

        nextBtn.addEventListener('click', () => {
            nextCard();
            resetInterval();
        });

        prevBtn.addEventListener('click', () => {
            prevCard();
            resetInterval();
        });

        let autoSlide = setInterval(nextCard, 4000);

        function resetInterval() {
            clearInterval(autoSlide);
            autoSlide = setInterval(nextCard, 4000);
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="bg-[#08080a] text-center py-3 px-4 relative z-[501]">
<p className="text-xs md:text-sm font-semibold text-white tracking-wide">
    📍 Apenas <span className="text-[#b8964e]">2 vagas</span> disponíveis para contratos mensais no Algarve — Março/Abril 2026
  </p>
</div>

<nav className="md:px-12 animate-enter w-full pt-6 pr-6 pb-6 pl-6 relative z-[500]">
<div className="flex max-w-7xl mr-auto ml-auto relative items-center justify-between">

<div className="flex items-center gap-2">
<div className="w-10 h-10 bg-[#08080a] rounded-lg flex items-center justify-center text-[#b8964e] font-serif text-xl italic">Ae</div>
<span className="font-medium text-lg tracking-tight">Anderson <span className="font-playfair italic">Emerick</span></span>
</div>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-gray-600 hover:text-black transition-colors" href="#autoridade">Portfólio</a>
<a className="text-sm font-medium text-gray-600 hover:text-black transition-colors" href="#precos">Pacotes</a>
<a className="text-sm font-medium text-gray-600 hover:text-black transition-colors" href="#sobre">Sobre</a>
</div>

<div className="flex items-center gap-3 z-[501] relative">
<a className="flex items-center gap-2 bg-[#08080a] text-white px-4 py-2 md:px-5 md:py-2.5 rounded-full text-xs md:text-sm font-medium hover:bg-[#b8964e] hover:text-black transition-all hover:pr-6 duration-300 group shadow-lg shadow-[#b8964e]/10" href="#contacto">
        Pedir Orçamento
        <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>

<button aria-label="Toggle Menu" className="md:hidden text-2xl flex items-center justify-center w-8 h-8 transition-colors" id="mobile-menu-toggle">
<iconify-icon icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</div>
</nav>

<div aria-hidden="true" className="fixed inset-0 z-[300] flex flex-col justify-center items-center gap-8 bg-[#f6f4ef] opacity-0 pointer-events-none transition-opacity duration-300 md:hidden" id="mobile-menu">
<a className="text-3xl font-medium tracking-tight text-gray-900 hover:text-[#b8964e] transition-colors" href="#autoridade">Portfólio</a>
<a className="text-3xl font-medium tracking-tight text-gray-900 hover:text-[#b8964e] transition-colors" href="#precos">Pacotes</a>
<a className="text-3xl font-medium tracking-tight text-gray-900 hover:text-[#b8964e] transition-colors" href="#sobre">Sobre</a>
<a className="text-3xl font-medium tracking-tight text-gray-900 hover:text-[#b8964e] transition-colors" href="#contacto">Contacto</a>
</div>


<main className="md:px-12 lg:py-20 max-w-7xl mr-auto ml-auto pt-12 pr-6 pb-12 pl-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

<div className="flex flex-col gap-8 max-w-xl relative z-10">

<div className="animate-enter delay-100 flex items-center gap-3">
<div className="relative flex items-center justify-center">
<span className="absolute w-3 h-3 bg-green-500 rounded-full animate-ping opacity-40"></span>
<span className="relative w-3 h-3 bg-green-500 rounded-full"></span>
</div>
<span className="text-sm font-medium text-gray-500 tracking-wide">Agenda Aberta em Portimão, Algarve</span>
</div>

<h1 className="animate-enter delay-200 md:text-5xl lg:text-6xl leading-[1.05] text-4xl font-semibold text-[#08080a] tracking-tight">Seu projecto e imagem através da lente que já capturou os <br className="hidden lg:block"/> <span className="font-playfair italic font-medium text-[#b8964e]">maiores palcos do empreendedorismo.</span></h1>

<p className="animate-enter delay-300 md:text-lg leading-relaxed text-base text-gray-500 max-w-lg">Mais de 500 eventos internacionais, fotografo das maiores Personalidades e empresarios, fotos em perfils de milhões de seguidores. Leilões, conferências, turnês, personal branding, de Nova York, São Paulo a Boston. Agora desfrutando do Algarve, e com agenda aberta em Portugal . <strong className="font-semibold text-gray-900">Apenas 2 vagas abertas.</strong></p>

<div className="animate-enter delay-400 flex flex-col sm:flex-row gap-4 items-start sm:items-center mt-2">
<a className="bg-[#08080a] text-white text-base px-8 py-4 rounded-full font-medium hover:bg-[#b8964e] hover:text-black transition-all hover:scale-105 active:scale-95 flex items-center gap-3 shadow-xl shadow-gray-200" href="#precos">
                        Ver Pacotes &amp; Preços
                        <iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>
<a className="px-6 py-4 text-gray-600 font-medium hover:text-black flex items-center gap-2 transition-colors" href="https://wa.me/351000000000?text=Olá Anderson, vi o seu portfólio e gostaria de falar sobre um projecto.">
<iconify-icon icon="solar:chat-round-dots-linear" width="24"></iconify-icon>
                        Falar no WhatsApp
                    </a>
</div>

<div className="animate-enter delay-500 mt-8 pt-8 border-t border-[#d4b978]/30 flex gap-8 md:gap-12">
<div className="">
<p className="md:text-3xl text-2xl font-bold tracking-tight">184.5K</p>
<p className="md:text-sm text-xs text-gray-500 mt-1">Fotos publicadas</p>
</div>
<div className="">
<p className="md:text-3xl text-2xl font-bold tracking-tight">927M</p>
<p className="md:text-sm text-xs text-gray-500 mt-1">Visualizações</p>
</div>
<div className="">
<p className="text-2xl md:text-3xl font-bold tracking-tight">500+</p>
<p className="text-xs md:text-sm text-gray-500 mt-1">Eventos Cobertos</p>
</div>
</div>
</div>

<div className="flex lg:justify-end animate-enter delay-300 relative justify-center">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-[#b8964e]/20 via-[#e8e4db]/30 to-transparent rounded-full blur-3xl pointer-events-none"></div>

<button className="absolute left-0 md:left-12 lg:-left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white rounded-full shadow-lg border border-gray-100 flex items-center justify-center text-gray-800 hover:scale-110 transition-transform cursor-pointer hover:text-[#b8964e]" id="prevBtn">
<iconify-icon icon="solar:arrow-left-linear" width="24"></iconify-icon>
</button>
<button className="absolute right-0 md:right-12 lg:-right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-[#08080a] text-white rounded-full shadow-lg border border-gray-900 flex items-center justify-center hover:scale-110 transition-transform cursor-pointer hover:bg-[#b8964e] hover:text-black" id="nextBtn">
<iconify-icon icon="solar:arrow-right-linear" width="24"></iconify-icon>
</button>

<div className="relative w-[300px] h-[600px] bg-white rounded-[2.5rem] shadow-2xl border-[8px] border-white ring-1 ring-gray-900/5 overflow-hidden transform rotate-0 hover:rotate-0 transition-transform duration-500 mr-auto ml-auto">

<div className="absolute top-0 left-1/2 -translate-x-1/2 h-6 w-28 bg-black rounded-b-xl z-30"></div>

<div className="absolute top-2 w-full px-5 flex justify-between text-[10px] font-semibold text-white/90 z-30 mix-blend-difference">
<span>9:41</span>
<div className="flex gap-1">
<iconify-icon icon="solar:signal-linear"></iconify-icon>
<iconify-icon icon="solar:wifi-linear"></iconify-icon>
<iconify-icon icon="solar:battery-full-linear"></iconify-icon>
</div>
</div>

<div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60 pointer-events-none z-20">
</div>

<div className="w-full h-full relative bg-gray-900" id="sliderContainer">

<div className="slider-card card-active w-full h-full absolute top-0 right-0 bottom-0 left-0">
<img alt="Ana Castela Tour" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-12 left-4 flex items-center gap-2 z-20">
<div className="w-8 h-8 rounded-full border-2 border-white overflow-hidden bg-black flex items-center justify-center text-white text-[10px] font-bold">AE</div>
<span className="text-white text-sm font-medium drop-shadow-md">andersonemeriick</span>
</div>
<div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-30 w-full text-center">
<div className="relative inline-block">
<div className="absolute inset-0 bg-white rounded-full sonar-ring opacity-50"></div>
<button className="relative bg-white text-black px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wide flex items-center gap-2 shadow-lg mx-auto whitespace-nowrap">
<iconify-icon icon="solar:music-note-bold" width="14"></iconify-icon>
                                🎤 Ana Castela · 2.694 likes
                            </button>
</div>
</div>
</div>

<div className="slider-card card-hidden absolute inset-0 w-full h-full">
<img alt="Thiago Nigro" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-12 left-4 flex items-center gap-2 z-20">
<div className="w-8 h-8 rounded-full border-2 border-white overflow-hidden bg-black flex items-center justify-center text-white text-[10px] font-bold">AE</div>
<span className="text-white text-sm font-medium drop-shadow-md">andersonemeriick</span>
</div>
<div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-30 w-full text-center">
<div className="relative inline-block">
<div className="absolute inset-0 bg-[#b8964e] rounded-full sonar-ring opacity-50"></div>
<button className="relative bg-[#b8964e] text-black px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wide flex items-center gap-2 shadow-lg mx-auto whitespace-nowrap">
<iconify-icon icon="solar:graph-up-bold" width="14"></iconify-icon>
                                💰 Thiago Nigro · Orlando
                            </button>
</div>
</div>
</div>

<div className="slider-card card-hidden absolute inset-0 w-full h-full">
<img alt="Algarve" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-12 left-4 flex items-center gap-2 z-20">
<div className="w-8 h-8 rounded-full border-2 border-white overflow-hidden bg-black flex items-center justify-center text-white text-[10px] font-bold">AE</div>
<span className="text-white text-sm font-medium drop-shadow-md">andersonemeriick</span>
</div>
<div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-30 w-full text-center">
<div className="relative inline-block">
<div className="absolute inset-0 bg-cyan-400 rounded-full sonar-ring opacity-50"></div>
<button className="relative bg-cyan-400 text-black px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wide flex items-center gap-2 shadow-lg mx-auto whitespace-nowrap">
<iconify-icon icon="solar:camera-bold" width="14"></iconify-icon>
                                🌊 Algarve Vibes · Portimão
                            </button>
</div>
</div>
</div>
</div>

<div className="absolute right-4 bottom-32 flex flex-col gap-4 z-20">
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white cursor-pointer hover:scale-110 transition-transform">
<iconify-icon className="" icon="solar:heart-bold" width="20"></iconify-icon>
</div>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white cursor-pointer hover:scale-110 transition-transform">
<iconify-icon icon="solar:chat-round-dots-linear" width="20"></iconify-icon>
</div>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white cursor-pointer hover:scale-110 transition-transform">
<iconify-icon icon="solar:share-linear" width="20"></iconify-icon>
</div>
</div>
</div>
</div>
</div>

<section className="lg:mt-32 animate-enter delay-500 w-full mt-24">
<div className="mx-auto max-w-4xl text-center mb-10 md:mb-14">
<span className="inline-flex items-center gap-2 rounded-full border border-[#b8964e]/30 bg-[#b8964e]/10 px-3 py-1.5 text-xs font-semibold text-[#b8964e] uppercase tracking-wider">
              Global Network
            </span>
<h2 className="mt-6 text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-[#08080a] leading-[0.95]">
              Anderson Emerick, já fotografou os <br className="hidden md:block"/>
<span className="font-playfair italic font-medium text-[#b8964e]">maiores eventos e empresários</span>
</h2>
</div>
<div className="relative w-full">
<div className="mx-auto max-w-full overflow-hidden mask-gradient-sides">
<div className="flex w-max animate-marquee-left hover:[animation-play-state:paused]">

<div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3 md:gap-4 flex-shrink-0 pr-3 md:pr-4">
<div className="rounded-xl overflow-hidden ring-1 ring-black/5 bg-gray-200"><img alt="Evento" className="sm:h-32 lg:h-36 hover:scale-105 transition-transform duration-500 w-full h-24 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bc819a3-7a42-4526-87e3-bac09aee5b03_800w.jpg"/></div>
<div className="rounded-xl overflow-hidden ring-1 ring-black/5 bg-gray-200"><img alt="Evento" className="sm:h-32 lg:h-36 hover:scale-105 transition-transform duration-500 w-full h-24 object-cover translate-y-8 scale-150" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0cf81421-a3b0-41cb-9af1-2b7ba975ee4e_800w.jpg"/></div>
<div className="rounded-xl overflow-hidden ring-1 ring-black/5 bg-gray-200"><img alt="Evento" className="sm:h-32 lg:h-36 hover:scale-105 transition-transform duration-500 w-full h-24 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/85763916-bde9-48d5-9780-25d2f318176b_800w.jpg"/></div>
<div className="rounded-xl overflow-hidden ring-1 ring-black/5 bg-gray-200"><img alt="Evento" className="sm:h-32 lg:h-36 hover:scale-105 transition-transform duration-500 w-full h-24 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9e8bd8b9-9ade-4d7c-b57e-2318e98baa5e_800w.jpg"/></div>
<div className="rounded-xl overflow-hidden ring-1 ring-black/5 bg-gray-200"><img alt="Evento" className="sm:h-32 lg:h-36 hover:scale-105 transition-transform duration-500 w-full h-24 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5182bfe8-3294-4cf8-b490-33859c516e9a_800w.jpg"/></div>
<div className="rounded-xl overflow-hidden ring-1 ring-black/5 bg-gray-200"><img alt="Evento" className="sm:h-32 lg:h-36 hover:scale-105 transition-transform duration-500 w-full h-24 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e5ba2d39-1252-4203-be16-abafeda0849b_800w.jpg"/></div>
<div className="rounded-xl overflow-hidden ring-1 ring-black/5 bg-gray-200"><img alt="Evento" className="w-full h-24 sm:h-32 lg:h-36 object-cover hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5989c16d-4aa3-4351-bfdb-fac959736459_800w.jpg"/></div>
<div className="rounded-xl overflow-hidden ring-1 ring-black/5 bg-gray-200"><img alt="Evento" className="w-full h-24 sm:h-32 lg:h-36 object-cover hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6c39c735-18f1-4b74-aa61-180fbb2b4770_800w.jpg"/></div>
<div className="overflow-hidden bg-gray-200 ring-black/5 ring-1 rounded-xl"><img alt="Evento" className="sm:h-32 lg:h-36 hover:scale-105 transition-transform duration-500 w-full h-24 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e5ba2ee9-1588-45f8-a9eb-f4b71e4b1acf_800w.jpg"/></div>
<div className="rounded-xl overflow-hidden ring-1 ring-black/5 bg-gray-200 relative"><img alt="Evento" className="sm:h-32 lg:h-36 hover:scale-105 transition-transform duration-500 w-full h-24 object-cover translate-y-8 scale-150" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/10ef31da-09fc-47f8-84d9-8dd388c22fb5_800w.jpg"/><div className="absolute inset-0 border-2 border-[#b8964e] rounded-xl pointer-events-none"></div></div>
<div className="rounded-xl overflow-hidden ring-1 ring-black/5 bg-gray-200"><img alt="Evento" className="sm:h-32 lg:h-36 hover:scale-105 transition-transform duration-500 w-full h-24 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1a740be9-c16d-491e-9e5a-1d561b44a935_800w.jpg"/></div>
<div className="rounded-xl overflow-hidden ring-1 ring-black/5 bg-gray-200"><img alt="Evento" className="sm:h-32 lg:h-36 hover:scale-105 transition-transform duration-500 w-full h-24 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fa6f3ca0-6e7a-44b6-9853-fd27ac4c04a0_800w.jpg"/></div>
<div className="rounded-xl overflow-hidden ring-1 ring-black/5 bg-gray-200"><img alt="Evento" className="sm:h-32 lg:h-36 hover:scale-105 transition-transform duration-500 w-full h-24 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/404f3bc2-3005-4b08-a9f2-99752d684961_800w.jpg"/></div>
<div className="rounded-xl overflow-hidden ring-1 ring-black/5 bg-gray-200"><img alt="Evento" className="sm:h-32 lg:h-36 hover:scale-105 transition-transform duration-500 w-full h-24 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/06687691-3a60-408a-8c5f-f696f7958a83_800w.png"/></div>
<div className="rounded-xl overflow-hidden ring-1 ring-black/5 bg-gray-200"><img alt="Evento" className="w-full h-24 sm:h-32 lg:h-36 object-cover hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/83ca20c0-64e5-412d-9c79-224a4ae90b74_800w.jpg"/></div>
<div className="rounded-xl overflow-hidden ring-1 ring-black/5 bg-gray-200"><img alt="Evento" className="w-full h-24 sm:h-32 lg:h-36 object-cover hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c920d31f-46c8-4f39-957b-9a8d8e511a1a_800w.jpg"/></div>
</div>

<div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3 md:gap-4 flex-shrink-0 pr-3 md:pr-4">
<div className="rounded-xl overflow-hidden ring-1 ring-black/5 bg-gray-200"><img alt="Evento" className="w-full h-24 sm:h-32 lg:h-36 object-cover hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2f563338-39fa-47ea-9761-658d4f3f84db_800w.jpg"/></div>
<div className="rounded-xl overflow-hidden ring-1 ring-black/5 bg-gray-200"><img alt="Evento" className="w-full h-24 sm:h-32 lg:h-36 object-cover hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/de692cd3-6ed5-40da-b589-663e89889a1c_800w.jpg"/></div>
<div className="rounded-xl overflow-hidden ring-1 ring-black/5 bg-gray-200"><img alt="Evento" className="w-full h-24 sm:h-32 lg:h-36 object-cover hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/42dfe760-aef6-44a2-bff9-70aa005c5961_800w.jpg"/></div>
<div className="rounded-xl overflow-hidden ring-1 ring-black/5 bg-gray-200"><img alt="Evento" className="w-full h-24 sm:h-32 lg:h-36 object-cover hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c18d9fac-84d4-4727-95df-38b04c62ac05_800w.jpg"/></div>
<div className="rounded-xl overflow-hidden ring-1 ring-black/5 bg-gray-200"><img alt="Evento" className="w-full h-24 sm:h-32 lg:h-36 object-cover hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c3e3fffd-33c5-442f-924a-7bc1032b2c0f_800w.jpg"/></div>
<div className="rounded-xl overflow-hidden ring-1 ring-black/5 bg-gray-200"><img alt="Evento" className="w-full h-24 sm:h-32 lg:h-36 object-cover hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9a421cf7-e975-430b-88c5-f554775493e1_800w.jpg"/></div>
<div className="rounded-xl overflow-hidden ring-1 ring-black/5 bg-gray-200"><img alt="Evento" className="w-full h-24 sm:h-32 lg:h-36 object-cover hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0c82a12e-5af1-47d3-963d-65c3987dd2be_800w.jpg"/></div>
<div className="rounded-xl overflow-hidden ring-1 ring-black/5 bg-gray-200"><img alt="Evento" className="w-full h-24 sm:h-32 lg:h-36 object-cover hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e63aa468-ae44-4756-84db-fcacd6cec9e2_800w.jpg"/></div>
<div className="rounded-xl overflow-hidden ring-1 ring-black/5 bg-gray-200"><img alt="Evento" className="w-full h-24 sm:h-32 lg:h-36 object-cover hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cf90a7bf-fee3-4a9d-887b-c46bfea61ba8_800w.jpg"/></div>
<div className="rounded-xl overflow-hidden ring-1 ring-black/5 bg-gray-200 relative"><img alt="Evento" className="w-full h-24 sm:h-32 lg:h-36 object-cover hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6209234e-73ff-4176-bf91-c05fa95cc596_800w.jpg"/><div className="absolute inset-0 border-2 border-[#b8964e] rounded-xl pointer-events-none"></div></div>
<div className="rounded-xl overflow-hidden ring-1 ring-black/5 bg-gray-200"><img alt="Evento" className="w-full h-24 sm:h-32 lg:h-36 object-cover hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3f4ec54c-12b4-4eb2-a0c3-1d78cb6c9e02_800w.jpg"/></div>
<div className="rounded-xl overflow-hidden ring-1 ring-black/5 bg-gray-200"><img alt="Evento" className="w-full h-24 sm:h-32 lg:h-36 object-cover hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8cfa0961-8c53-4d57-b87c-3b8eaffcd08b_800w.jpg"/></div>
<div className="rounded-xl overflow-hidden ring-1 ring-black/5 bg-gray-200"><img alt="Evento" className="w-full h-24 sm:h-32 lg:h-36 object-cover hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/42f0787e-2f7f-4ae7-9c64-3f1d597bf1b8_800w.jpg"/></div>
<div className="rounded-xl overflow-hidden ring-1 ring-black/5 bg-gray-200"><img alt="Evento" className="w-full h-24 sm:h-32 lg:h-36 object-cover hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a160135e-dfe8-4d26-b2e5-2915ebe6f3a2_800w.jpg"/></div>
<div className="rounded-xl overflow-hidden ring-1 ring-black/5 bg-gray-200"><img alt="Evento" className="w-full h-24 sm:h-32 lg:h-36 object-cover hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9a3ff98a-df58-478d-a4ae-f3c6d3f3ba61_800w.jpg"/></div>
<div className="rounded-xl overflow-hidden ring-1 ring-black/5 bg-gray-200"><img alt="Evento" className="w-full h-24 sm:h-32 lg:h-36 object-cover hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7063bc06-62fe-4811-b5fa-4b1e09b26a81_800w.jpg"/></div>
</div>
</div>
</div>
</div>
</section>
</main>

<section className="md:px-12 md:py-32 w-full max-w-7xl z-10 mr-auto ml-auto pt-24 pr-6 pb-24 pl-6 relative" id="autoridade">
<div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16 animate-enter">
<h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[#08080a] leading-[0.95]">
            Serviços de nível <br/>
<span className="font-playfair italic font-medium text-[#b8964e]">internacional.</span>
</h2>
<a className="group flex items-center gap-2 text-sm font-medium text-gray-900 border-b border-gray-900/20 pb-1 hover:border-[#b8964e] transition-colors" href="https://www.instagram.com/andersonemeriick/" target="_blank">
            Ver Instagram completo
            <iconify-icon className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 animate-enter delay-100">

<div className="group bg-white/60 backdrop-blur-sm border border-white/40 p-8 rounded-[2rem] hover:bg-white transition-colors duration-500 cursor-default shadow-sm hover:shadow-xl flex flex-col h-full">
<div className="w-12 h-12 bg-[#08080a] text-[#b8964e] rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-gray-900/10">
<iconify-icon icon="solar:user-circle-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-4">Personal Branding</h3>
<p className="text-gray-600 leading-relaxed text-sm mb-6 flex-grow">
                Fotos executivas para posicionamento, no seu ambiente de trabalho, em tempo real. Nada de estúdio genérico.<br/><br/>
                O meu estilo é colocar a câmera dentro da narrativa certa da sua função, do seu talento. Espontaneidade é o meu segredo. Fotos de estúdio não vendem, contexto vende !
            </p>
<div className="pt-6 border-t border-gray-100 mt-auto">
<p className="text-xs font-medium text-gray-400 tracking-wide">
                    LinkedIn &amp; Redes • Sites &amp; Portfolios • Press &amp; Media Kits
                </p>
</div>
</div>

<div className="group bg-white/60 backdrop-blur-sm border border-white/40 p-8 rounded-[2rem] hover:bg-white transition-colors duration-500 cursor-default shadow-sm hover:shadow-xl flex flex-col h-full">
<div className="w-12 h-12 bg-[#08080a] text-[#b8964e] rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-gray-900/10">
<iconify-icon icon="solar:videocamera-record-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-4">Produção de Vídeo &amp; Reels</h3>
<p className="text-gray-600 leading-relaxed text-sm mb-6 flex-grow">
                Criativos para redes sociais, vídeos para imobiliário, aftermovies cinematográficos, vídeos institucionais, tudo em 4K.<br/><br/>
                Captação, color grading, edição e entrega em 5 dias úteis. O mesmo pipeline que gerou 649K views num único vídeo.
            </p>
<div className="pt-6 border-t border-gray-100 mt-auto">
<p className="text-xs font-medium text-gray-400 tracking-wide">
                    Aftermovies • Reels &amp; Shorts • Imobiliário • Institucional
                </p>
</div>
</div>

<div className="group bg-white/60 backdrop-blur-sm border border-white/40 p-8 rounded-[2rem] hover:bg-white transition-colors duration-500 cursor-default shadow-sm hover:shadow-xl flex flex-col h-full">
<div className="w-12 h-12 bg-[#08080a] text-[#b8964e] rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-gray-900/10">
<iconify-icon icon="solar:camera-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-4">Fotografia de Evento &amp; Palco</h3>
<p className="text-gray-600 leading-relaxed text-sm mb-6 flex-grow">
                Conferências, workshops, retiros, lançamentos. O mesmo olhar que captou o Leilão da Fundação Neymar e 5 edições do Poder do Network.<br/><br/>
                Entrega em tempo real, as primeiras fotos editadas chegam ao seu WhatsApp e seu time enquanto o evento ainda está a decorrer. Zero espera !
            </p>
<div className="pt-6 border-t border-gray-100 mt-auto">
<p className="text-xs font-medium text-gray-400 tracking-wide">
                    Conferências • Workshops • Retiros • Lançamentos
                </p>
</div>
</div>
</div>
</section>

<section className="md:px-12 w-full max-w-7xl mr-auto ml-auto pr-6 pb-32 pl-6">

<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 animate-enter delay-200 mb-32 gap-x-12 gap-y-12 items-center">
<div className="order-2 lg:order-1 flex flex-col items-start">
<span className="inline-block uppercase text-xs font-semibold text-gray-900 tracking-wider bg-[#e8e4db] rounded-lg mb-8 pt-1.5 pr-3 pb-1.5 pl-3">O PODER DO NETWORK</span>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 leading-[0.95] mb-6">
                5 edições do maior evento de <span className="font-playfair italic font-medium text-[#b8964e]">networking</span> do mundo.
            </h2>
<p className="leading-relaxed text-lg text-gray-500 max-w-md mb-10">Fotógrafo oficial do "O Poder do Network" de Bruno Avelar, Nova York, Orlando, Miami. Há mais de 3 anos a trabalhar juntos, e a barra sobe a cada evento.</p>
<div className="grid grid-cols-2 gap-12 border-t border-gray-900/10 pt-8 w-full max-w-md">
<div>
<div className="text-4xl md:text-5xl font-medium tracking-tight text-gray-900 mb-1">5</div>
<div className="text-sm font-medium text-gray-900">Edições cobertas</div>
<div className="text-xs text-gray-500 mt-1">NYC, Orlando, Miami</div>
</div>
<div>
<div className="text-4xl md:text-5xl font-medium tracking-tight text-gray-900 mb-1">3+</div>
<div className="text-sm font-medium text-gray-900">Anos de parceria</div>
<div className="text-xs text-gray-500 mt-1">Com Bruno Avelar</div>
</div>
</div>
</div>
<div className="order-1 lg:order-2 relative group cursor-pointer">
<div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden relative shadow-2xl">
<img alt="O Poder do Network" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6fc14dc1-23b6-4439-a879-f485d9dc7531_1600w.jpg"/>
<div className="group-hover:bg-transparent transition-colors duration-500 bg-black/10 absolute top-0 right-0 bottom-0 left-0">
</div>
<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
<span className="text-white font-playfair text-5xl md:text-6xl italic tracking-tight opacity-90 drop-shadow-xl text-center">O Poder do<br/>Network</span>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center mb-32 animate-enter delay-300">
<div className="relative group cursor-pointer">
<div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden relative shadow-2xl">
<img alt="Flávio Augusto" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cca2f2b1-4d5d-43ab-9713-cafeb40a61b5_1600w.jpg"/>
<div className="group-hover:bg-transparent transition-colors duration-500 bg-black/10 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
<span className="text-white font-serif text-5xl md:text-6xl italic tracking-tighter opacity-90 drop-shadow-xl font-playfair text-center">Flávio<br/>Augusto</span>
</div>
</div>
</div>
<div className="flex flex-col items-start">
<span className="inline-block bg-[#e8e4db] text-gray-900 px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider mb-8">Evento Internacional</span>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 leading-[0.95] mb-6">
                O bilionário Flávio Augusto pelas lentes do <span className="font-playfair italic font-medium text-[#b8964e]">Anderson.</span>
</h2>
<p className="text-gray-500 text-lg leading-relaxed mb-10 max-w-md">
                Cobertura do Método Destiny em Boston, ao lado de Tiago Brunet. O fundador da Wise Up (vendida por R$877M), listado na Forbes e com 5 milhões de seguidores.
            </p>
<div className="grid grid-cols-2 gap-12 border-t border-gray-900/10 pt-8 w-full max-w-md">
<div className="">
<div className="md:text-5xl text-4xl font-medium text-gray-900 tracking-tight mb-1">Forbes</div>
<div className="text-sm font-medium text-gray-900">Lista Brasil</div>
<div className="text-xs text-gray-500 mt-1">@geracaodevalor</div>
</div>
<div className="">
<div className="text-4xl md:text-5xl font-medium tracking-tight text-gray-900 mb-1">5M</div>
<div className="text-sm font-medium text-gray-900">Seguidores IG</div>
<div className="text-xs text-gray-500 mt-1">Boston, USA</div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 animate-enter delay-300 gap-x-12 gap-y-12 items-center">
<div className="order-2 lg:order-1 flex flex-col items-start">
<span className="inline-block bg-[#e8e4db] text-gray-900 px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider mb-8">Evento Beneficente</span>
<h2 className="md:text-5xl leading-[0.95] text-4xl font-semibold text-gray-900 tracking-tight mb-6">Leilão Galáticos <span className="font-medium italic text-[#b8964e] font-playfair">Ronado Fenômeno</span></h2>
<p className="leading-relaxed text-lg text-gray-500 max-w-md mb-10">Um dos trabalhos mais importantes da minha carreira." Clube Atlético Monte Líbano, São Paulo, um dos maiores eventos beneficentes do Brasil captado frame a frame.</p>
<div className="grid grid-cols-2 gap-12 border-t border-gray-900/10 pt-8 w-full max-w-md">
<div className="">
<div className="md:text-5xl text-4xl font-medium text-gray-900 tracking-tight mb-1">345</div>
<div className="text-sm font-medium text-gray-900">Celebridas capturadas</div>
<div className="text-xs text-gray-500 mt-1">Cobertura exclusiva</div>
</div>
<div className="">
<div className="text-4xl md:text-5xl font-medium tracking-tight text-gray-900 mb-1">SP</div>
<div className="text-sm font-medium text-gray-900">Monte Líbano</div>
<div className="text-xs text-gray-500 mt-1">São Paulo, Brasil</div>
</div>
</div>
</div>
<div className="order-1 lg:order-2 relative group cursor-pointer">
<div className="aspect-[4/5] overflow-hidden rounded-[2.5rem] relative shadow-2xl">
<img alt="Leilão Neymar" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0bffc5a7-fef1-406a-8890-27f43a1ed851_1600w.jpg"/>
<div className="group-hover:bg-transparent transition-colors duration-500 bg-black/10 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="flex pointer-events-none absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<span className="md:text-6xl text-5xl italic text-white tracking-tighter font-serif text-center opacity-90 drop-shadow-xl translate-x-2 translate-y-16 scale-50" style={{maskImage: 'linear-gradient(160deg, transparent, black 0%, black 100%, transparent)', WebkitMaskImage: 'linear-gradient(160deg, transparent, black 0%, black 100%, transparent)'}}>Leilão Ronaldo</span>
</div>
</div>
</div>
</div>
</section>

<section className="w-full max-w-7xl mx-auto px-6 md:px-12 py-24 border-t border-gray-900/5">
<div className="flex flex-col items-center text-center mb-16 animate-enter">
<span className="bg-[#d1c8c0] text-gray-900 px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider mb-6">Currículo completo</span>
<h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900 leading-[0.95] max-w-3xl">
            Eventos e pessoas que passaram pelas <span className="font-playfair italic font-medium text-[#b8964e]">lentes dele.</span>
</h2>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 animate-enter delay-100">

<div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl shadow-gray-900/5 relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-[#b8964e]"></div>
<h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
<iconify-icon className="text-[#b8964e]" icon="solar:star-bold" width="24"></iconify-icon>
                Grandes Eventos
            </h3>
<ul className="space-y-5">
<li className="flex items-start gap-4 text-gray-900 text-sm md:text-base font-medium">
<iconify-icon className="mt-0.5 text-[#b8964e] flex-shrink-0" icon="solar:check-circle-bold" width="20"></iconify-icon>
<div><span className="font-bold">O Poder do Network</span> <span className="text-gray-500 font-normal">— 5 edições · NYC, Orlando, Miami</span></div>
</li>
<li className="flex items-start gap-4 text-gray-900 text-sm md:text-base font-medium">
<iconify-icon className="mt-0.5 text-[#b8964e] flex-shrink-0" icon="solar:check-circle-bold" width="20"></iconify-icon>
<div><span className="font-bold">Leilão Fundação Neymar</span> <span className="text-gray-500 font-normal">— Clube Monte Líbano, SP</span></div>
</li>
<li className="flex items-start gap-4 text-gray-900 text-sm md:text-base font-medium">
<iconify-icon className="mt-0.5 text-[#b8964e] flex-shrink-0" icon="solar:check-circle-bold" width="20"></iconify-icon>
<div className=""><span className="font-bold">Método Destiny</span> <span className="text-gray-500 font-normal">— Flávio Augusto (Forbes) &amp; Tiago Brunet</span></div>
</li>
<li className="flex items-start gap-4 text-gray-900 text-sm md:text-base font-medium">
<iconify-icon className="mt-0.5 text-[#b8964e] flex-shrink-0" icon="solar:check-circle-bold" width="20"></iconify-icon>
<div className=""><span className="font-bold">Conferência Princípios</span> <span className="text-gray-500 font-normal">— Alphaville, São Paulo</span></div>
</li>
<li className="flex items-start gap-4 text-gray-900 text-sm md:text-base font-medium">
<iconify-icon className="mt-0.5 text-[#b8964e] flex-shrink-0" icon="solar:check-circle-bold" width="20"></iconify-icon>
<div><span className="font-bold">Ana Castela Tour USA</span> <span className="text-gray-500 font-normal">— Elizabeth, NJ · 2.694 likes</span></div>
</li>
<li className="flex items-start gap-4 text-gray-900 text-sm md:text-base font-medium">
<iconify-icon className="mt-0.5 text-[#b8964e] flex-shrink-0" icon="solar:check-circle-bold" width="20"></iconify-icon>
<div className=""><span className="font-bold">Audaces Capital</span> <span className="font-normal text-gray-500">— Alphaville e Algarve </span></div>
</li>
</ul>
</div>

<div className="bg-gray-100/50 rounded-[2rem] p-8 md:p-12">
<h3 className="text-2xl font-semibold text-gray-400 mb-8 flex items-center gap-3">
<iconify-icon icon="solar:camera-bold" width="24"></iconify-icon>
                Personalidades
            </h3>
<ul className="space-y-5">
<li className="flex items-start gap-4 text-gray-700 text-sm md:text-base"><iconify-icon className="mt-0.5 text-gray-400 flex-shrink-0" icon="solar:camera-linear" width="20"></iconify-icon><div><span className="font-bold text-gray-900">Thiago Nigro</span> — 6x · 9M seguidores</div></li>
<li className="flex items-start gap-4 text-gray-700 text-sm md:text-base"><iconify-icon className="mt-0.5 text-gray-400 flex-shrink-0" icon="solar:camera-linear" width="20"></iconify-icon><div><span className="font-bold text-gray-900">Flávio Augusto</span> — Método Destiny · Boston</div></li>
<li className="flex items-start gap-4 text-gray-700 text-sm md:text-base"><iconify-icon className="mt-0.5 text-gray-400 flex-shrink-0" icon="solar:camera-linear" width="20"></iconify-icon><div><span className="font-bold text-gray-900">Joel Jota</span> — 3x · NYC &amp; Orlando · 6M seguidores</div></li>
<li className="flex items-start gap-4 text-gray-700 text-sm md:text-base"><iconify-icon className="mt-0.5 text-gray-400 flex-shrink-0" icon="solar:camera-linear" width="20"></iconify-icon><div className=""><span className="font-bold text-gray-900">Ana Castela</span> — Tour USA · 14M seguidores</div></li>
<li className="flex items-start gap-4 text-gray-700 text-sm md:text-base"><iconify-icon className="mt-0.5 text-gray-400 flex-shrink-0" icon="solar:camera-linear" width="20"></iconify-icon><div className=""><span className="font-bold text-gray-900">Gabi Martins</span> — Times Square · 14M seguidores</div></li>
<li className="flex items-start gap-4 text-gray-700 text-sm md:text-base"><iconify-icon className="mt-0.5 text-gray-400 flex-shrink-0" icon="solar:camera-linear" width="20"></iconify-icon><div className=""><span className="font-bold text-gray-900">DubDogz</span> — NYC · "De Minas para o Mundo"</div></li>
</ul>
</div>
</div>
</section>

<section className="md:pl-12 md:pr-12 md:pb-12 w-full max-w-7xl mx-auto pr-12 pb-32 pl-12">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-enter gap-x-8 gap-y-8 items-stretch">

<div className="md:p-16 flex flex-col overflow-hidden bg-[#efeae5] rounded-[2.5rem] pt-10 pr-10 pb-10 pl-10 relative justify-center">
<div className="flex overflow-hidden text-[#b8964e] bg-[#08080a] w-12 h-12 rounded-xl mb-10 items-center justify-center">
<img alt="O Poder do Network" className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity" src="channels4_profile.jpg"/>
</div>
<h3 className="md:text-4xl leading-tight z-10 text-3xl font-medium text-gray-900 tracking-tight mb-8 relative">
                Há mais de 3 anos com o Anderson e a barra sobe a cada evento, seja nos EUA, Brasil ou <span className="font-playfair italic font-medium text-[#b8964e]">Portugal.</span>
</h3>
<div className="flex items-center gap-3 mt-auto">
<div className="">
<p className="text-sm font-semibold text-gray-900 uppercase tracking-wide">Bruno Avelar</p>
<p className="text-sm text-gray-500">Idealizador — O Poder do Network (NYC, Orlando, Miami)</p>
</div>
</div>
</div>

<div className="overflow-hidden min-h-[400px] group rounded-[2.5rem] relative">
<img alt="Testimonial Visual" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0fe74d55-f61d-403e-850e-4dd4f09701d1_1600w.png"/>
<div className="group-hover:bg-transparent transition-colors duration-500 bg-black/10 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="flex pointer-events-none absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<span className="text-white font-playfair text-6xl italic tracking-tight opacity-90 drop-shadow-lg transform -rotate-6">Global</span>
</div>
</div>
</div>
</section>

<section className="md:px-12 w-full max-w-7xl mr-auto ml-auto pt-24 pr-6 pb-24 pl-6" id="precos">
<div className="flex flex-col items-center text-center mb-16 animate-enter">
<span className="bg-[#d1c8c0] text-gray-900 px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider mb-6">Investimento</span>
<h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900 leading-[0.95]">
            O nível que fotografa <br/>
<span className="font-playfair italic font-medium text-[#b8964e]">Thiago Nigro.</span>
</h2>
<p className="text-gray-500 mt-4 max-w-md">Pacotes claros, sem surpresas. Preços + IVA.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 animate-enter delay-100 gap-x-6 gap-y-6">

<div className="bg-white p-8 rounded-[2rem] border border-gray-200 flex flex-col hover:border-[#b8964e] transition-colors duration-300">
<div className="mb-4">
<h3 className="text-xl font-bold tracking-tight text-gray-900">Sessão Fotográfica</h3>
<p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mt-1">Essencial</p>
</div>
<div className="flex items-baseline gap-1 mb-2">
<span className="text-4xl font-serif text-[#08080a] font-medium">€350</span>
<span className="text-sm text-gray-500">+ IVA</span>
</div>
<p className="text-sm text-gray-500 mb-6">Por sessão</p>
<ul className="mb-8 space-y-3 flex-1">
<li className="text-sm text-gray-600 flex gap-2"><iconify-icon className="text-[#b8964e]" icon="solar:check-read-linear"></iconify-icon> Até 2 horas de captação</li>
<li className="text-sm text-gray-600 flex gap-2"><iconify-icon className="text-[#b8964e]" icon="solar:check-read-linear"></iconify-icon> 30 fotos editadas</li>
<li className="text-sm text-gray-600 flex gap-2"><iconify-icon className="text-[#b8964e]" icon="solar:check-read-linear"></iconify-icon> Entrega em 72h</li>
<li className="text-sm text-gray-600 flex gap-2"><iconify-icon className="text-[#b8964e]" icon="solar:check-read-linear"></iconify-icon> 1 Localização (Algarve)</li>
<li className="text-sm text-gray-600 flex gap-2"><iconify-icon className="text-[#b8964e]" icon="solar:check-read-linear"></iconify-icon> Direitos comerciais</li>
</ul>
<a className="w-full block text-center border border-black text-black text-sm font-bold px-6 py-3 rounded-full hover:bg-black hover:text-white transition-all" href="https://wa.me/351000000000">
                Pedir Orçamento
            </a>
</div>

<div className="bg-[#08080a] text-white p-8 rounded-[2rem] flex flex-col relative transform md:-translate-y-4 shadow-2xl shadow-[#b8964e]/20">
<div className="absolute top-4 right-6 bg-[#b8964e] text-black text-[10px] font-bold px-3 py-1 rounded-full uppercase">Mais Popular</div>
<div className="mb-4">
<h3 className="text-xl font-bold tracking-tight text-white">Foto + Vídeo Evento</h3>
<p className="text-xs font-semibold text-[#b8964e] uppercase tracking-wide mt-1">Profissional</p>
</div>
<div className="flex items-baseline gap-1 mb-2">
<span className="text-4xl font-medium text-[#b8964e] font-serif">€590</span>
<span className="text-sm text-gray-400">+ IVA</span>
</div>
<p className="text-sm text-gray-400 mb-6">Por dia de evento</p>
<ul className="mb-8 space-y-3 flex-1">
<li className="text-sm text-gray-300 flex gap-2"><iconify-icon className="text-[#b8964e]" icon="solar:check-read-linear"></iconify-icon> 8h de cobertura</li>
<li className="text-sm text-gray-300 flex gap-2"><iconify-icon className="text-[#b8964e]" icon="solar:check-read-linear"></iconify-icon> 80+ fotos editadas</li>
<li className="text-sm text-gray-300 flex gap-2"><iconify-icon className="text-[#b8964e]" icon="solar:check-read-linear"></iconify-icon> Aftermovie (90s)</li>
<li className="text-sm text-gray-300 flex gap-2"><iconify-icon className="text-[#b8964e]" icon="solar:check-read-linear"></iconify-icon> 3 Reels para redes</li>
<li className="text-sm text-gray-300 flex gap-2"><iconify-icon className="text-[#b8964e]" icon="solar:check-read-linear"></iconify-icon> Captação 4K</li>
</ul>
<a className="w-full block text-center bg-[#b8964e] text-black text-sm font-bold px-6 py-3 rounded-full hover:bg-white transition-all" href="https://wa.me/351000000000">
                Reservar Data
            </a>
</div>

<div className="bg-white p-8 rounded-[2rem] border border-gray-200 flex flex-col hover:border-[#b8964e] transition-colors duration-300">
<div className="mb-4">
<h3 className="text-xl font-bold tracking-tight text-gray-900">Pacote Mensal</h3>
<p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mt-1">Recorrente</p>
</div>
<div className="flex items-baseline gap-1 mb-2">
<span className="text-4xl font-medium text-[#08080a] font-serif">€1.300</span>
<span className="text-sm text-gray-500">+ IVA</span>
</div>
<p className="text-sm text-gray-500 mb-6">Por mês (2 vagas)</p>
<ul className="mb-8 space-y-3 flex-1">
<li className="text-sm text-gray-600 flex gap-2"><iconify-icon className="text-[#b8964e]" icon="solar:check-read-linear"></iconify-icon> 2 sessões mensais</li>
<li className="text-sm text-gray-600 flex gap-2"><iconify-icon className="text-[#b8964e]" icon="solar:check-read-linear"></iconify-icon> 8 Reels editados</li>
<li className="text-sm text-gray-600 flex gap-2"><iconify-icon className="text-[#b8964e]" icon="solar:check-read-linear"></iconify-icon> 60+ fotos para redes</li>
<li className="text-sm text-gray-600 flex gap-2"><iconify-icon className="text-[#b8964e]" icon="solar:check-read-linear"></iconify-icon> Estratégia Visual</li>
<li className="text-sm text-gray-600 flex gap-2"><iconify-icon className="text-[#b8964e]" icon="solar:check-read-linear"></iconify-icon> WhatsApp Direto</li>
</ul>
<a className="w-full block text-center border border-black text-black text-sm font-bold px-6 py-3 rounded-full hover:bg-black hover:text-white transition-all" href="https://wa.me/351000000000">
                Garantir Vaga
            </a>
</div>
</div>
</section>

<section className="md:px-12 w-full max-w-3xl mr-auto ml-auto pt-24 pr-6 pb-24 pl-6 relative">
<div className="absolute -top-12 right-0 md:-right-12 w-16 h-16 bg-[#b8964e] rounded-2xl flex items-center justify-center text-black rotate-12 shadow-xl z-10 hidden md:flex">
<iconify-icon icon="solar:chat-square-like-bold" width="32"></iconify-icon>
</div>
<div className="mb-16 animate-enter">
<span className="bg-[#d1c8c0] text-gray-900 px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider mb-6 inline-block">Dúvidas</span>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 leading-[0.95] mt-6">
            Perguntas 
            <span className="font-playfair italic font-medium text-[#b8964e]">Frequentes</span>
</h2>
</div>
<div className="flex flex-col gap-4 animate-enter delay-100">

<details className="group bg-[#efeae5] rounded-2xl overflow-hidden transition-all duration-300 open:pb-4">
<summary className="flex justify-between items-center p-6 cursor-pointer list-none font-medium text-gray-900 hover:text-black">
                O Anderson trabalha só no Algarve?
                <div className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center group-open:rotate-45 transition-transform duration-300">
<iconify-icon icon="solar:add-linear" width="20"></iconify-icon>
</div>
</summary>
<div className="px-6 text-sm text-gray-600 leading-relaxed max-w-xl">
                Está baseado em Portimão, mas realiza trabalhos em todo Portugal — Lisboa, Porto, ilhas. Já fotografou em 9 cidades em 3 países. Para eventos fora do Algarve, custos de deslocação são calculados caso a caso.
            </div>
</details>

<details className="group bg-[#efeae5] rounded-2xl overflow-hidden transition-all duration-300 open:pb-4">
<summary className="flex justify-between items-center p-6 cursor-pointer list-none font-medium text-gray-900 hover:text-black">
                Quanto tempo demora a receber as fotos e vídeos?
                <div className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center group-open:rotate-45 transition-transform duration-300">
<iconify-icon icon="solar:add-linear" width="20"></iconify-icon>
</div>
</summary>
<div className="px-6 text-sm text-gray-600 leading-relaxed max-w-xl">
                Fotografias: 72 horas. Vídeos e reels: 5 a 7 dias úteis. Existe opção de entrega express para urgências.
            </div>
</details>

<details className="group bg-[#efeae5] rounded-2xl overflow-hidden transition-all duration-300 open:pb-4">
<summary className="flex justify-between items-center p-6 cursor-pointer list-none font-medium text-gray-900 hover:text-black">
                Os preços incluem deslocação no Algarve?
                <div className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center group-open:rotate-45 transition-transform duration-300">
<iconify-icon icon="solar:add-linear" width="20"></iconify-icon>
</div>
</summary>
<div className="px-6 text-sm text-gray-600 leading-relaxed max-w-xl">
                Sim. De Faro a Lagos, deslocação incluída. Para outras regiões, o custo é acordado previamente.
            </div>
</details>

<details className="group bg-[#efeae5] rounded-2xl overflow-hidden transition-all duration-300 open:pb-4">
<summary className="flex justify-between items-center p-6 cursor-pointer list-none font-medium text-gray-900 hover:text-black">
                Emite factura portuguesa?
                <div className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center group-open:rotate-45 transition-transform duration-300">
<iconify-icon icon="solar:add-linear" width="20"></iconify-icon>
</div>
</summary>
<div className="px-6 text-sm text-gray-600 leading-relaxed max-w-xl">
                Sim. Todos os serviços são facturados legalmente em Portugal com NIF e recibo. Preços acrescidos de IVA.
            </div>
</details>

<details className="group bg-[#efeae5] rounded-2xl overflow-hidden transition-all duration-300 open:pb-4">
<summary className="flex justify-between items-center p-6 cursor-pointer list-none font-medium text-gray-900 hover:text-black">
                Qual a diferença para um fotógrafo local?
                <div className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center group-open:rotate-45 transition-transform duration-300">
<iconify-icon icon="solar:add-linear" width="20"></iconify-icon>
</div>
</summary>
<div className="px-6 text-sm text-gray-600 leading-relaxed max-w-xl">
                Experiência. +500 eventos, +50 personalidades, 780K+ views, 102K+ likes. Olhar cinematográfico e rede de contactos de nível internacional — raramente encontrado no Algarve.
            </div>
</details>
</div>
</section>

<footer className="w-full max-w-7xl mx-auto px-6 md:px-12 pb-12 pt-24" id="contacto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-24 animate-enter">

<div className="bg-[#efeae5] rounded-[2.5rem] p-12 md:p-20 flex flex-col justify-center items-start text-left relative overflow-hidden">

<div className="absolute top-12 left-12 w-16 h-16 bg-[#08080a] text-[#b8964e] rounded-2xl flex items-center justify-center mb-8 rotate-3">
<iconify-icon icon="solar:camera-bold" width="32"></iconify-icon>
</div>
<div className="mt-20">
<span className="bg-white/50 border border-white/50 text-gray-900 px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider mb-6 inline-block">Apenas 2 vagas</span>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 leading-[0.95] mb-8">
                    O fotógrafo de <span className="font-playfair italic font-medium text-[#b8964e]">Thiago Nigro</span> está a aceitar projectos no Algarve.
                </h2>
<p className="text-gray-500 mb-10 max-w-sm">Agende uma conversa de 15 minutos. Conte o seu projecto e receba uma proposta personalizada em 24h.</p>
<div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
<a className="bg-[#08080a] text-white px-8 py-4 rounded-full font-medium hover:bg-[#b8964e] hover:text-black transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-3 shadow-xl" href="https://wa.me/351000000000">
                        WhatsApp Direto
                    </a>
<a className="px-8 py-4 rounded-full font-medium border border-gray-400 hover:border-black transition-colors flex items-center justify-center gap-3" href="https://www.instagram.com/andersonemeriick/">
                        Instagram
                    </a>
</div>
</div>
</div>

<div className="bg-[#efeae5] rounded-[2.5rem] relative overflow-hidden flex items-center justify-center min-h-[500px] group" id="sobre">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/80 via-transparent to-transparent opacity-60"></div>
<div className="z-10 text-center pr-8 pl-8 relative">
<div className="flex bg-[#08080a] w-24 h-24 border-white border-4 rounded-full mr-auto mb-6 ml-auto shadow-xl items-center justify-center overflow-hidden">
<img alt="Anderson Emerick" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c5d50b2f-232d-4db9-92d4-881e32312c6f_320w.jpg"/>
</div>
<h3 className="text-2xl font-bold tracking-tight text-gray-900 mb-2">Anderson Emerick</h3>
<p className="text-sm text-gray-500 mb-4">Fotógrafo &amp; Videomaker · Portimão, Algarve</p>
<div className="flex justify-center gap-6 text-xs text-gray-400 font-semibold uppercase tracking-wider mb-6">
<span>🇧🇷 Brasil</span><span>🇺🇸 EUA</span><span>🇵🇹 Portugal</span>
</div>
<p className="text-gray-600 text-sm max-w-xs mx-auto leading-relaxed">
                  +7 anos · 9 cidades · 3 países · +50 personalidades · +500 eventos · De uma câmera na mão para 3 continentes.
                </p>
</div>
</div>
</div>

<div className="border-t border-gray-900/10 pt-16 flex flex-col md:flex-row justify-between gap-12 md:gap-24 animate-enter delay-200">
<div className="max-w-xs">
<div className="flex items-center gap-2 mb-6 cursor-pointer">
<div className="w-6 h-6 bg-[#08080a] rounded flex items-center justify-center text-[#b8964e] font-serif text-xs italic">
                    Ae
                </div>
<span className="font-bold text-lg tracking-tight">Anderson Emerick</span>
</div>
<h4 className="text-xl font-semibold tracking-tight text-gray-900 leading-tight mb-4">
                Fotografia &amp; vídeo que eleva a sua <span className="font-playfair italic font-medium text-[#b8964e]">marca.</span>
</h4>
<p className="text-xs text-gray-500 mb-6">Disponível no Algarve, Lisboa e todo Portugal.</p>
<div className="flex gap-3">
<a className="w-10 h-10 rounded-full bg-[#08080a] text-white flex items-center justify-center hover:bg-[#b8964e] hover:text-black transition-colors" href="#">
<iconify-icon icon="simple-icons:instagram" width="16"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-[#08080a] text-white flex items-center justify-center hover:bg-[#b8964e] hover:text-black transition-colors" href="#">
<iconify-icon icon="simple-icons:whatsapp" width="16"></iconify-icon>
</a>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-24 w-full md:w-auto">
<div className="flex flex-col gap-4">
<span className="text-xs font-bold text-gray-900 uppercase tracking-wider">Navegar</span>
<a className="text-sm text-gray-500 hover:text-black transition-colors" href="#autoridade">Portfólio</a>
<a className="text-sm text-gray-500 hover:text-black transition-colors" href="#precos">Pacotes</a>
<a className="text-sm text-gray-500 hover:text-black transition-colors" href="#sobre">Sobre</a>
</div>
<div className="flex flex-col gap-4">
<span className="text-xs font-bold text-gray-900 uppercase tracking-wider">Contacto</span>
<a className="text-sm text-gray-500 hover:text-black transition-colors" href="https://wa.me/351000000000">WhatsApp</a>
<a className="text-sm text-gray-500 hover:text-black transition-colors" href="https://www.instagram.com/andersonemeriick/">Instagram</a>
</div>
<div className="flex flex-col gap-4">
<span className="text-xs font-bold text-gray-900 uppercase tracking-wider">Legal</span>
<a className="text-sm text-gray-500 hover:text-black transition-colors" href="#">Privacidade</a>
<a className="text-sm text-gray-500 hover:text-black transition-colors" href="#">Termos</a>
</div>
</div>
</div>
<div className="mt-16 pt-8 border-t border-gray-900/5 flex justify-between text-[10px] text-gray-400 font-medium">
<span>© 2026 Anderson Emerick. Todos os direitos reservados.</span>
<span>Portimão, Algarve, Portugal.</span>
</div>
</footer>
    </>
  );
}
