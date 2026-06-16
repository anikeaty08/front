import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



// ─── Clock ───────────────────────────────────────────────────
function updateClock() {
  const el = document.getElementById('clock');
  if (!el) return;
  el.textContent = new Date().toLocaleTimeString('pt-BR', {
    timeZone: 'America/Sao_Paulo',
    hour: '2-digit', minute: '2-digit', second: '2-digit'
  });
}
updateClock();
setInterval(updateClock, 1000);

// ─── Translations ─────────────────────────────────────────────
const T = {
  pt: {
    nav_arte:'A Arte', nav_galeria:'Galeria', nav_agendar:'Agendar',
    btn_agendar_agora:'Agendar Agora',
    badge_atelier:'Atelier Privado', badge_vagas:'Vagas limitadas',
    hero_titulo:'Sua história contada na', hero_pele:'pele.',
    hero_desc:'Não fazemos tatuagens. Criamos obras que carregam o que você não consegue colocar em palavras. Cada marca nasce de uma conversa, de uma escuta profunda, e fica com você para sempre.',
    btn_experiencia:'Quero Viver Essa Experiência', btn_portfolio:'Ver portfólio',
    stat1_label:'Atendimento', stat1_val:'Exclusivo',
    stat2_label:'Estilo', stat2_val:'100% Autoral',
    stat3_label:'Local', stat3_val:'Rio de Janeiro',
    agenda_aberta:'Agenda Aberta',
    dep1_cargo:'Campeão Mundial de Surf',
    dep1_texto:'"Uma obra que representa minha trajetória no mar e na vida. A precisão do traço do Rapha é incomparável."',
    dep2_cargo:'Músico',
    dep2_texto:'"O Rapha conseguiu traduzir a essência do rock e a minha história na pele de uma forma extremamente elegante."',
    dep3_cargo:'Apresentadora',
    dep3_texto:'"Muito mais que um traço, é uma experiência de conexão profunda. Cada detalhe faz sentido e conta uma parte de mim."',
    artista_titulo:'A arte da ', artista_subtitulo:'Escuta Profunda',
    artista_desc:'Mais de 10 anos de experiência. Cada tatuagem nasce de uma conversa real, decodificando o que você sente em símbolos únicos e permanentes.',
    ver_galeria:'Ver galeria autoral',
    card1_titulo:'Escuta Ativa', card1_desc:'A criação começa no diálogo. Entendemos sua essência antes de desenhar qualquer traço na pele.',
    btn_conversa:'Iniciar Conversa',
    card2_titulo:'Arte 100% Autoral', card2_desc:'Desenhamos de forma intuitiva. Não existem modelos prontos, cópias ou repetições. Apenas a sua história e a anatomia do seu corpo.',
    card3_titulo:'Traço & Precisão', card3_desc:'Domínio técnico em fine line e blackwork para criar contrastes que duram a vida toda.',
    card4_titulo:'Significado Oculto', card4_desc:'Decodificamos emoções complexas em símbolos, geometria e arte abstrata na sua pele.',
    inspiracao:'INSPIRAÇÃO',
    card5_titulo:'Experiência Premium', card5_desc:'Do primeiro rascunho aos cuidados pós-tatuagem, garantimos um processo seguro e inesquecível.',
    cuidado_total:'Cuidado Total',
    passo1:'Formulário: Você compartilha sua história, motivação e sentimentos de forma simples.',
    passo2:'Conversa: Entramos em contato para entender a fundo sua essência e o que a marca significa.',
    passo3:'Criação: O conceito nasce no momento presente, desenhado exclusivamente para o seu corpo.',
    passo4:'Vivência: A sessão acontece no nosso atelier privado, com total conforto e atenção.',
    cta_titulo:'Quando a vontade de marcar algo na pele aparece, ela não é à toa. Esse impulso carrega um chamado real. Se você sente que chegou o momento — esse é o primeiro passo.',
    btn_agendar_exp:'Agendar minha experiência',
    personalidades_label:'Obras na pele de personalidades',
    footer_tagline:'Mais que tinta na pele. Um capítulo da sua vida.—',
    footer_desc:'Atendendo em atelier privado no Rio de Janeiro. Criando arte autoral para clientes do mundo todo.',
    horario_local:'Horário Local (RJ)',
    footer_home:'Home', footer_arte:'A Arte', footer_galeria:'Galeria', footer_agendar:'Agendar',
    footer_contato:'Contato', footer_localizacao:'Localização',
    footer_copy:'© 2026 Rapha Lopes. Todos os direitos reservados.',
  },
  en: {
    nav_arte:'The Art', nav_galeria:'Gallery', nav_agendar:'Book',
    btn_agendar_agora:'Book Now',
    badge_atelier:'Private Atelier', badge_vagas:'Limited spots',
    hero_titulo:'Your story told on', hero_pele:'skin.',
    hero_desc:"We don't do tattoos. We create works that carry what you can't put into words. Each mark is born from a conversation, from deep listening, and stays with you forever.",
    btn_experiencia:'I Want to Live This Experience', btn_portfolio:'View portfolio',
    stat1_label:'Service', stat1_val:'Exclusive',
    stat2_label:'Style', stat2_val:'100% Original',
    stat3_label:'Location', stat3_val:'Rio de Janeiro',
    agenda_aberta:'Open Schedule',
    dep1_cargo:'World Surf Champion',
    dep1_texto:'"A work that represents my journey in the sea and in life. Rapha\'s precision is unmatched."',
    dep2_cargo:'Musician',
    dep2_texto:'"Rapha managed to translate the essence of rock and my story onto skin in an extremely elegant way."',
    dep3_cargo:'TV Host',
    dep3_texto:'"Far more than a line — it\'s an experience of deep connection. Every detail makes sense and tells a part of me."',
    artista_titulo:'The art of ', artista_subtitulo:'Deep Listening',
    artista_desc:'Over 10 years of experience. Each tattoo is born from a real conversation, decoding what you feel into unique, permanent symbols.',
    ver_galeria:'View original gallery',
    card1_titulo:'Active Listening', card1_desc:'Creation begins with dialogue. We understand your essence before drawing any line on your skin.',
    btn_conversa:'Start a Conversation',
    card2_titulo:'100% Original Art', card2_desc:"We draw intuitively. There are no ready-made templates, copies or repetitions. Only your story and your body's anatomy.",
    card3_titulo:'Line & Precision', card3_desc:'Technical mastery in fine line and blackwork to create contrasts that last a lifetime.',
    card4_titulo:'Hidden Meaning', card4_desc:'We decode complex emotions into symbols, geometry and abstract art on your skin.',
    inspiracao:'INSPIRATION',
    card5_titulo:'Premium Experience', card5_desc:'From the first sketch to aftercare, we ensure a safe and unforgettable process.',
    cuidado_total:'Full Care',
    passo1:'Form: You share your story, motivation and feelings in a simple way.',
    passo2:'Conversation: We reach out to deeply understand your essence and what the mark means.',
    passo3:'Creation: The concept is born in the present moment, designed exclusively for your body.',
    passo4:'Experience: The session takes place in our private atelier, with full comfort and attention.',
    cta_titulo:"When the urge to mark something on your skin appears, it's never random. That impulse carries a real calling. If you feel the moment has arrived — this is the first step.",
    btn_agendar_exp:'Book my experience',
    personalidades_label:'Works on the skin of personalities',
    footer_tagline:'More than ink on skin. A chapter of your life.—',
    footer_desc:'Serving at a private atelier in Rio de Janeiro. Creating original art for clients worldwide.',
    horario_local:'Local Time (RJ)',
    footer_home:'Home', footer_arte:'The Art', footer_galeria:'Gallery', footer_agendar:'Book',
    footer_contato:'Contact', footer_localizacao:'Location',
    footer_copy:'© 2026 Rapha Lopes. All rights reserved.',
  }
};

function setLang(lang) {
  document.getElementById('btn-pt').classList.toggle('active', lang === 'pt');
  document.getElementById('btn-en').classList.toggle('active', lang === 'en');
  const t = T[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.textContent = t[key];
  });
  document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<main className="glass-panel overflow-hidden flex flex-col xl:max-w-[1300px] z-10 xl:border-white/50 border-none xl:border xl:rounded-[2.5rem] md:pt-10 md:pr-10 md:pb-10 md:pl-10 xl:pt-12 xl:pr-12 xl:pb-12 xl:pl-12 xl:shadow-2xl min-h-screen xl:min-h-[700px] w-full rounded-none pt-6 pr-6 pb-6 pl-6 relative shadow-none">
<div className="absolute inset-0 flex justify-between pointer-events-none z-0 px-6 md:px-10 xl:px-12 w-full h-full">
<div className="h-full w-[1px] bg-zinc-950/5"></div>
<div className="h-full w-[1px] bg-zinc-950/5 hidden md:block"></div>
<div className="h-full w-[1px] bg-zinc-950/5 hidden lg:block"></div>
<div className="h-full w-[1px] bg-zinc-950/5 hidden xl:block"></div>
<div className="h-full w-[1px] bg-zinc-950/5"></div>
</div>

<header className="flex z-10 mb-12 relative gap-y-6 items-center justify-between gap-x-2 md:mb-16 md:gap-0">
<a className="flex items-center gap-2 text-zinc-900" href="#hero">
<div className="flex bg-center text-white w-14 h-14 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f42cad2c-9760-4938-8ba4-f7e63a1432c2_320w.webp)] bg-cover rounded-full items-center justify-center" onclick="window.location.href='https://www.instagram.com/raphafons/'" role="button" style={{position: 'relative', -BorderGradient: 'linear-gradient(180deg,rgba(0,0,0,0.1),rgba(0,0,0,0),rgba(0,0,0,0.1))', -BorderRadiusBefore: '9999px'}}>
<iconify-icon className="opacity-80" height="16" icon="solar:pen-new-round-bold-duotone" width="16"></iconify-icon>
</div>
<span className="text-sm font-medium tracking-tight cursor-pointer" onclick="window.location.href='https://www.instagram.com/raphafons/'" role="button">RAPHA<span className="text-zinc-400">LOPES</span></span>
</a>
<nav className="hidden md:flex uppercase text-xs font-medium text-zinc-500 tracking-widest bg-white/50 border-white/60 border rounded-full pt-2 pr-6 pb-2 pl-6 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] backdrop-blur-sm gap-x-8 items-center">
<a className="hover:text-zinc-900 transition-colors duration-300" data-i18n="nav_arte" href="#artista">A Arte</a>
<a className="hover:text-zinc-900 transition-colors duration-300" data-i18n="nav_galeria" href="#galeria">Galeria</a>
<a className="hover:text-zinc-900 transition-colors duration-300 hidden lg:block" data-i18n="nav_agendar" href="#agendar">Agendar</a>
</nav>
<div className="flex items-center gap-2">

<div className="flex items-center bg-white/70 border border-zinc-200/80 rounded-lg p-0.5 shadow-sm backdrop-blur-sm">
<button className="lang-btn active text-[11px] font-bold tracking-widest rounded-md px-2.5 py-1.5" id="btn-pt" onclick="setLang('pt')">PT</button>
<button className="lang-btn text-[11px] font-bold tracking-widest rounded-md px-2.5 py-1.5" id="btn-en" onclick="setLang('en')">EN</button>
</div>
<a className="flex items-center gap-2 group hover:bg-zinc-50 font-medium text-zinc-600 tracking-wide bg-gradient-to-b from-black/10 via-black/20 to-black/10 rounded-lg pt-2.5 pr-2 pb-2.5 pl-2" href="https://form.respondi.app/qGdQCgbL" style={{boxShadow: '0 18px 35px rgba(31,41,55,0.25),0 0 0 1px rgba(209,213,219,0.3)', color: '#e5e7eb', position: 'relative', -BorderGradient: 'linear-gradient(180deg, rgba(255, 255, 255, 0.8), rgba(0, 0, 0, 0.4), rgba(255, 255, 255, 0.8))', -BorderRadiusBefore: '8px'}}>
<span className="text-[11px] uppercase font-medium text-black/60 tracking-tight" data-i18n="btn_agendar_agora">Agendar Agora</span>
<svg className="group-hover:translate-x-1 transition-transform" height="14" style={{color: 'rgb(82,82,91)'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16m0 0l-6-6m6 6l-6 6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
</a>
</div>
</header>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 h-full flex-grow relative z-10 pb-8 lg:pb-0" id="hero">
<div className="lg:col-span-7 flex flex-col pt-4 relative justify-center">
<div className="inline-flex bg-white/60 w-max rounded-full mb-8 pt-1.5 pr-5 pb-1.5 pl-1.5 shadow-sm backdrop-blur-sm items-center" style={{position: 'relative', -BorderGradient: 'linear-gradient(180deg,rgba(0,0,0,0.05),rgba(0,0,0,0))', -BorderRadiusBefore: '9999px'}}>
<div className="flex -space-x-2 mr-3">
<img alt="User" className="w-6 h-6 rounded-full border-2 border-white object-cover grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2e6f8f69-ae4a-4ec4-a075-86ecb8dd741b_320w.webp"/>
<img alt="User" className="w-6 h-6 rounded-full border-2 border-white object-cover grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e59170a0-0f02-47d0-af6a-b2901fbd80eb_320w.webp"/>
<img alt="User" className="w-6 h-6 rounded-full border-2 border-white object-cover grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e136307d-fde6-4af4-b685-69fabb979a65_320w.webp"/>
<div className="w-6 h-6 rounded-full border-2 border-white bg-zinc-900 text-white flex items-center justify-center text-[9px] font-bold tracking-tighter">RJ</div>
</div>
<span className="text-xs font-medium text-zinc-600 tracking-wide">
<span className="text-zinc-900" data-i18n="badge_atelier">Atelier Privado</span> · <span data-i18n="badge_vagas">Vagas limitadas</span>
</span>
</div>
<h1 className="leading-[0.95] lg:text-[5rem] text-5xl font-medium text-zinc-900 tracking-tighter mb-8">
<span className="" data-i18n="hero_titulo">Sua história contada na</span>
<br/><span className="bg-clip-text font-light text-transparent bg-gradient-to-r from-zinc-400 to-zinc-200" data-i18n="hero_pele">pele.</span>
</h1>
<p className="leading-relaxed text-sm font-medium text-zinc-500 tracking-wide max-w-md border-zinc-200 border-l-2 mb-10 pl-6" data-i18n="hero_desc">
      Não fazemos tatuagens. Criamos obras que carregam o que você não consegue colocar em palavras. Cada marca nasce de uma conversa, de uma escuta profunda, e fica com você para sempre.
    </p>
<div className="flex flex-col sm:flex-row gap-3 lg:mb-24 mb-16">
<a className="hover:bg-black transition-all flex group hover:shadow-2xl hover:-translate-y-0.5 gap-x-3 items-center justify-between text-sm font-medium text-zinc-900 rounded-full pt-3 pr-6 pb-3 pl-6 shadow-xl" href="https://form.respondi.app/qGdQCgbL" style={{background: 'radial-gradient(circle at 10% 0%,#fed7aa 0%,#fb923c 100%)', boxShadow: '0 15px 25px -10px rgba(248,113,22,0.7),inset 0 4px 8px rgba(253,230,138,0.9),inset 0 -4px 8px rgba(249,115,22,0.9)'}}>
<span className="text-sm font-medium tracking-tight text-zinc-900" data-i18n="btn_experiencia">Quero Viver Essa Experiência</span>
</a>
<a className="hover:bg-zinc-50 hover:text-zinc-900 transition-all flex gap-x-2 items-center text-sm font-medium rounded-full pt-3 pr-6 pb-3 pl-6" href="#galeria" style={{boxShadow: '0 18px 35px rgba(31,41,55,0.25),0 0 0 1px rgba(209,213,219,0.3)', color: '#e5e7eb', position: 'relative', -BorderGradient: 'linear-gradient(180deg,rgba(255,255,255,0.8),rgba(0,0,0,0.4),rgba(255,255,255,0.8))', -BorderRadiusBefore: '9999px'}}>
<span className="text-sm font-medium text-black/60 tracking-tight" data-i18n="btn_portfolio">Ver portfólio</span>
<iconify-icon className="text-zinc-500" height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
<div className="flex flex-wrap gap-2 md:gap-6 mt-auto items-center">
<div className="flex items-center group cursor-default">
<div className="px-1 text-center">
<p className="text-[10px] font-semibold text-zinc-400 uppercase tracking-widest mb-1" data-i18n="stat1_label">Atendimento</p>
<p className="text-sm text-zinc-900 font-medium" data-i18n="stat1_val">Exclusivo</p>
</div>
<div className="curve-separator opacity-60 ml-4 md:ml-8"></div>
</div>
<div className="flex items-center group cursor-default">
<div className="px-1 text-center">
<p className="text-[10px] font-semibold text-zinc-400 uppercase tracking-widest mb-1" data-i18n="stat2_label">Estilo</p>
<p className="text-sm text-zinc-900 font-medium" data-i18n="stat2_val">100% Autoral</p>
</div>
<div className="curve-separator md:ml-8 opacity-60 ml-4"></div>
</div>
<div className="flex items-center group cursor-default">
<div className="px-1 text-center">
<p className="text-[10px] font-semibold text-zinc-400 uppercase tracking-widest mb-1" data-i18n="stat3_label">Local</p>
<p className="text-sm text-zinc-900 font-medium" data-i18n="stat3_val">Rio de Janeiro</p>
</div>
</div>
</div>
</div>
<div className="lg:col-span-5 h-full min-h-[400px] lg:min-h-0 relative group" id="depoimentos">
<div className="absolute inset-0 rounded-[2rem] overflow-hidden shadow-2xl shadow-zinc-900/20 border border-white/20">
<img alt="Tattoo Art" className="transition-transform duration-[2s] group-hover:scale-110 filter saturate-[0] contrast-125 opacity-90 w-full h-full object-cover absolute inset-0 grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b17e9a1a-b68a-4a33-ad5a-7f8afcf478f9_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 via-zinc-900/40 to-zinc-900/20"></div>
<div className="flex flex-col pt-8 pr-8 pb-8 pl-8 absolute inset-0 justify-between">
<div className="flex items-start justify-between">
<div className="flex bg-gradient-to-br from-[#a3a3a3]/75 to-[#303030]/25 rounded-full pt-1.5 pr-3 pb-1.5 pl-3 gap-x-2 items-center" style={{position: 'relative', -BorderGradient: 'linear-gradient(180deg,rgba(255,255,255,0.1),rgba(255,255,255,0))', -BorderRadiusBefore: '9999px'}}>
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-zinc-300 opacity-75"></span>
<span className="inline-flex bg-lime-500 w-2 h-2 rounded-full relative"></span>
</span>
<span className="text-[10px] uppercase font-semibold text-white tracking-wide" data-i18n="agenda_aberta">Agenda Aberta</span>
</div>
<a className="flex hover:bg-white/20 transition-colors text-white bg-gradient-to-b from-white/10 to-white/0 w-10 h-10 rounded-full items-center justify-center" href="#agendar" style={{position: 'relative', -BorderGradient: 'linear-gradient(180deg,rgba(255,255,255,0.1),rgba(255,255,255,0))', -BorderRadiusBefore: '9999px'}}>
<iconify-icon height="18" icon="solar:bell-linear" width="18"></iconify-icon>
</a>
</div>
<div className="overflow-hidden w-full h-[100px] border-white/10 rounded-xl border-t mt-auto pt-4 relative">
<div className="carousel-track flex flex-col h-[300px]">
<div className="flex flex-col h-[100px] justify-start">
<div className="flex gap-3 mb-2 items-center">
<img alt="Reviewer" className="w-8 h-8 object-cover border-white/20 border rounded-full grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/811fd093-65a8-4425-988e-c5eb09a77056_320w.jpg"/>
<div className="flex flex-col">
<span className="text-white text-xs font-semibold tracking-wide">Filipe Toledo</span>
<span className="text-white/50 text-[9px] uppercase tracking-wider" data-i18n="dep1_cargo">Campeão Mundial de Surf</span>
</div>
</div>
<p className="text-white/80 text-xs font-light leading-relaxed line-clamp-2" data-i18n="dep1_texto">"Uma obra que representa minha trajetória no mar e na vida. A precisão do traço do Rapha é incomparável."</p>
</div>
<div className="h-[100px] flex flex-col justify-start">
<div className="flex items-center gap-3 mb-2">
<img alt="Reviewer" className="w-8 h-8 rounded-full object-cover border border-white/20 grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b3f4a526-efbd-46f0-902f-682cc4bb45e8_800w.webp"/>
<div className="flex flex-col">
<span className="text-white text-xs font-semibold tracking-wide">Paulo Ricardo</span>
<span className="text-white/50 text-[9px] uppercase tracking-wider" data-i18n="dep2_cargo">Músico</span>
</div>
</div>
<p className="text-white/80 text-xs font-light leading-relaxed line-clamp-2" data-i18n="dep2_texto">"O Rapha conseguiu traduzir a essência do rock e a minha história na pele de uma forma extremamente elegante."</p>
</div>
<div className="h-[100px] flex flex-col justify-start">
<div className="flex items-center gap-3 mb-2">
<img alt="Reviewer" className="w-8 h-8 rounded-full object-cover border border-white/20 grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/71bbf055-a07f-48e1-829b-cea047d217d3_800w.webp"/>
<div className="flex flex-col">
<span className="text-white text-xs font-semibold tracking-wide">Fernanda Lima</span>
<span className="text-white/50 text-[9px] uppercase tracking-wider" data-i18n="dep3_cargo">Apresentadora</span>
</div>
</div>
<p className="text-white/80 text-xs font-light leading-relaxed line-clamp-2" data-i18n="dep3_texto">"Muito mais que um traço, é uma experiência de conexão profunda. Cada detalhe faz sentido e conta uma parte de mim."</p>
</div>
</div>
<div className="absolute top-0 left-0 w-full h-4 pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-zinc-900/50 to-transparent pointer-events-none"></div>
</div>
</div>
</div>
</div>
</div>
<div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent mt-16 lg:mt-24 mb-16 lg:mb-24 opacity-60"></div>

<div className="flex flex-col gap-10 z-10 w-full relative" id="artista">
<div className="flex flex-col md:flex-row md:items-end pr-1 pl-1 gap-x-6 gap-y-6 justify-between">
<div className="max-w-2xl">
<h2 className="md:text-5xl text-3xl font-medium text-zinc-900 tracking-tighter mb-4">
<span data-i18n="artista_titulo">A arte da </span><span className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-400 to-neutral-600" data-i18n="artista_subtitulo">Escuta Profunda</span>
</h2>
<p className="leading-relaxed text-base font-normal text-zinc-500" data-i18n="artista_desc">Mais de 10 anos de experiência. Cada tatuagem nasce de uma conversa real, decodificando o que você sente em símbolos únicos e permanentes.</p>
</div>
<a className="group flex items-center gap-2 hover:text-zinc-600 transition-colors text-sm font-normal text-zinc-900 pb-1" href="#galeria">
<span data-i18n="ver_galeria">Ver galeria autoral</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 overflow-hidden shadow-zinc-900/5 bg-zinc-200 rounded-[2rem] shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] gap-x-px gap-y-px">

<div className="group hover:bg-zinc-50 transition-colors flex flex-col min-h-[340px] bg-white h-full pt-8 pr-8 pb-8 pl-8 relative justify-between">
<div className="relative z-10">
<div className="flex items-center gap-2 mb-3 text-zinc-400"><iconify-icon height="24" icon="solar:microphone-2-bold-duotone" width="24"></iconify-icon></div>
<h3 className="text-lg font-semibold text-zinc-900 mb-2 tracking-tight" data-i18n="card1_titulo">Escuta Ativa</h3>
<p className="text-sm text-zinc-500 font-medium leading-relaxed" data-i18n="card1_desc">A criação começa no diálogo. Entendemos sua essência antes de desenhar qualquer traço na pele.</p>
</div>
<div className="flex flex-col flex-grow mt-8 pt-4 pb-4 relative items-center justify-center">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] w-32 h-12 border-b border-r border-l border-zinc-200 rounded-b-2xl pointer-events-none"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[20%] h-6 w-px bg-zinc-200 pointer-events-none"></div>
<div className="flex gap-4 mb-6 relative z-10">
<img alt="User" className="w-10 h-10 rounded-full border-2 border-white shadow-sm object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&amp;q=80"/>
<img alt="User" className="w-10 h-10 rounded-full border-2 border-white shadow-sm object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&amp;q=80"/>
<img alt="User" className="w-10 h-10 rounded-full border-2 border-white shadow-sm object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&amp;q=80"/>
</div>
<a className="flex text-[10px] uppercase shadow-zinc-900/20 group-hover:scale-105 transition-transform gap-x-2 items-center font-bold text-white tracking-wider bg-zinc-900 rounded-full mt-2 pt-2 pr-4 pb-2 pl-4 shadow-lg" href="https://form.respondi.app/qGdQCgbL">
<iconify-icon height="16" icon="solar:chat-round-check-bold-duotone" width="16"></iconify-icon>
<span data-i18n="btn_conversa">Iniciar Conversa</span>
</a>
</div>
</div>

<div className="group hover:bg-zinc-50 transition-colors flex flex-col min-h-[340px] md:col-span-2 overflow-hidden bg-white h-full pt-8 pr-8 pb-8 pl-8 relative justify-between">
<div className="relative z-10 max-w-md">
<div className="flex items-center gap-2 mb-3 text-zinc-400"><iconify-icon height="24" icon="solar:pen-new-round-bold-duotone" width="24"></iconify-icon></div>
<h3 className="text-lg font-semibold text-zinc-900 mb-2 tracking-tight" data-i18n="card2_titulo">Arte 100% Autoral</h3>
<p className="leading-relaxed text-sm font-medium text-zinc-500" data-i18n="card2_desc">Desenhamos de forma intuitiva. Não existem modelos prontos, cópias ou repetições. Apenas a sua história e a anatomia do seu corpo.</p>
</div>
<div className="md:w-2/3 w-full absolute top-0 right-0 bottom-0" style={{maskImage: 'linear-gradient(180deg, transparent, black 0%, black 35%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 0%, black 35%, transparent)'}}>
<div className="absolute inset-0 bg-gradient-to-l from-white via-white/80 to-transparent z-10"></div>
</div>
</div>

<div className="group relative bg-white hover:bg-zinc-50 transition-colors p-8 flex flex-col justify-between h-full min-h-[340px]">
<div className="relative z-10">
<div className="flex items-center gap-2 mb-3 text-zinc-400"><iconify-icon height="24" icon="solar:magic-stick-3-bold-duotone" width="24"></iconify-icon></div>
<h3 className="text-lg font-semibold text-zinc-900 mb-2 tracking-tight" data-i18n="card3_titulo">Traço &amp; Precisão</h3>
<p className="leading-relaxed text-sm font-medium text-zinc-500" data-i18n="card3_desc">Domínio técnico em fine line e blackwork para criar contrastes que duram a vida toda.</p>
</div>
<div className="mt-8 flex items-center justify-center py-4 relative flex-grow">
<div className="group-hover:opacity-100 transition-opacity opacity-80 w-48 h-32 relative">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-zinc-800 rounded-full flex items-center justify-center z-10 shadow-lg ring-4 ring-zinc-200"><iconify-icon className="text-zinc-300" height="20" icon="solar:pen-linear" width="20"></iconify-icon></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-8 bg-zinc-100 border border-zinc-300 shadow-sm rounded-full flex items-center justify-center"><div className="w-3 h-3 bg-zinc-400 rounded-full"></div></div>
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-8 bg-zinc-100 border border-zinc-300 shadow-sm rounded-full flex items-center justify-center"><div className="w-3 h-3 bg-zinc-500 rounded-full"></div></div>
<div className="absolute top-1/2 left-0 -translate-y-1/2 w-8 h-8 bg-zinc-100 border border-zinc-300 shadow-sm rounded-full flex items-center justify-center"><div className="w-3 h-3 bg-zinc-400 rounded-full"></div></div>
<div className="absolute top-1/2 right-0 -translate-y-1/2 w-8 h-8 bg-zinc-100 border border-zinc-300 shadow-sm rounded-full flex items-center justify-center"><div className="w-3 h-3 bg-zinc-500 rounded-full"></div></div>
<div className="absolute top-2 left-4 w-6 h-6 bg-zinc-200 border border-zinc-300 shadow-sm rounded-full flex items-center justify-center"><div className="w-2 h-2 bg-zinc-400 rounded-full"></div></div>
<div className="absolute top-2 right-4 w-6 h-6 bg-zinc-200 border border-zinc-300 shadow-sm rounded-full flex items-center justify-center"><div className="w-2 h-2 bg-zinc-400 rounded-full"></div></div>
<div className="absolute bottom-2 left-4 w-6 h-6 bg-zinc-200 border border-zinc-300 shadow-sm rounded-full flex items-center justify-center"><div className="w-2 h-2 bg-zinc-400 rounded-full"></div></div>
<div className="absolute bottom-2 right-4 w-6 h-6 bg-zinc-200 border border-zinc-300 shadow-sm rounded-full flex items-center justify-center"><div className="w-2 h-2 bg-zinc-400 rounded-full"></div></div>
<svg className="absolute inset-0 w-full h-full pointer-events-none text-zinc-300" style={{zIndex: '0'}}>
<line stroke="currentColor" strokeWidth="1.5" x1="96" x2="96" y1="64" y2="16"></line>
<line stroke="currentColor" strokeWidth="1.5" x1="96" x2="96" y1="64" y2="112"></line>
<line stroke="currentColor" strokeWidth="1.5" x1="96" x2="16" y1="64" y2="64"></line>
<line stroke="currentColor" strokeWidth="1.5" x1="96" x2="176" y1="64" y2="64"></line>
<line stroke="currentColor" strokeWidth="1" x1="96" x2="32" y1="64" y2="16"></line>
<line stroke="currentColor" strokeWidth="1" x1="96" x2="160" y1="64" y2="16"></line>
<line stroke="currentColor" strokeWidth="1" x1="96" x2="32" y1="64" y2="112"></line>
<line stroke="currentColor" strokeWidth="1" x1="96" x2="160" y1="64" y2="112"></line>
</svg>
</div>
</div>
</div>

<div className="group relative bg-white hover:bg-zinc-50 transition-colors p-8 flex flex-col justify-between h-full min-h-[340px] overflow-hidden">
<div className="relative z-10">
<div className="flex items-center gap-2 mb-3 text-zinc-400"><iconify-icon height="24" icon="solar:heart-angle-bold-duotone" width="24"></iconify-icon></div>
<h3 className="text-lg font-semibold text-zinc-900 mb-2 tracking-tight" data-i18n="card4_titulo">Significado Oculto</h3>
<p className="text-sm text-zinc-500 font-medium leading-relaxed" data-i18n="card4_desc">Decodificamos emoções complexas em símbolos, geometria e arte abstrata na sua pele.</p>
</div>
<div className="mt-8 relative flex flex-col items-center justify-center flex-grow">
<div className="w-full bg-zinc-50 border border-zinc-200 rounded-xl p-3 shadow-sm flex items-center gap-3 relative z-10 group-hover:shadow-md transition-all duration-300">
<iconify-icon className="text-zinc-400" height="20" icon="solar:magnifer-linear" width="20"></iconify-icon>
<div className="h-2 w-20 bg-zinc-200 rounded-full"></div>
<div className="ml-auto flex items-center gap-1.5">
<span className="text-[10px] font-bold text-zinc-600" data-i18n="inspiracao">INSPIRAÇÃO</span>
</div>
</div>
<div className="absolute -left-2 bottom-8 w-10 h-10 bg-zinc-900 rounded-lg flex items-center justify-center shadow-lg group-hover:rotate-12 transition-all duration-500 delay-100 z-20">
<iconify-icon className="text-white" height="20" icon="solar:album-bold-duotone" width="20"></iconify-icon>
</div>
</div>
</div>

<div className="group hover:bg-zinc-50 transition-colors flex flex-col min-h-[340px] bg-white h-full pt-8 pr-8 pb-8 pl-8 relative justify-between">
<div className="relative z-10">
<div className="flex items-center gap-2 mb-3 text-zinc-400"><iconify-icon height="24" icon="solar:shield-check-bold-duotone" width="24"></iconify-icon></div>
<h3 className="text-lg font-semibold text-zinc-900 mb-2 tracking-tight" data-i18n="card5_titulo">Experiência Premium</h3>
<p className="leading-relaxed text-sm font-medium text-zinc-500" data-i18n="card5_desc">Do primeiro rascunho aos cuidados pós-tatuagem, garantimos um processo seguro e inesquecível.</p>
</div>
<div className="mt-8 flex items-end justify-center relative flex-grow">
<div className="absolute top-0 right-4 flex items-center gap-1.5 bg-white border border-zinc-100 px-2 py-1 rounded-full shadow-sm">
<div className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-pulse"></div>
<span className="text-[9px] font-bold text-zinc-600 uppercase tracking-wide" data-i18n="cuidado_total">Cuidado Total</span>
</div>
</div>
</div>
</div>
</div>

<div className="w-full relative z-10 overflow-hidden mt-16 lg:mt-24" id="galeria">
<div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-[rgba(255,255,255,0.9)] to-transparent z-20 pointer-events-none"></div>
<div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-[rgba(255,255,255,0.9)] to-transparent z-20 pointer-events-none"></div>
<div className="carousel-track-horizontal gap-4 md:gap-6 pr-4 pl-4">
<img alt="G1" className="md:h-[350px] md:w-[280px] filter contrast-125 hover:grayscale-0 hover:opacity-100 transition-all duration-700 opacity-80 w-[200px] h-[250px] object-cover rounded-2xl grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0f0f2aa0-9d6c-4c10-803b-00a04e91570e_800w.webp"/>
<img alt="G2" className="md:h-[350px] md:w-[280px] filter contrast-125 hover:grayscale-0 hover:opacity-100 transition-all duration-700 opacity-80 w-[200px] h-[250px] object-cover rounded-2xl grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9bb877c8-5231-4940-9201-16dfa5c783d2_800w.webp"/>
<img alt="G3" className="md:h-[350px] md:w-[280px] filter contrast-125 hover:grayscale-0 hover:opacity-100 transition-all duration-700 opacity-80 w-[200px] h-[250px] object-cover rounded-2xl grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/aa213292-5443-4463-a995-0ca33820ef3f_800w.webp"/>
<img alt="G4" className="md:h-[350px] md:w-[280px] filter contrast-125 hover:grayscale-0 hover:opacity-100 transition-all duration-700 opacity-80 w-[200px] h-[250px] object-cover rounded-2xl grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f4aa7056-5eb0-4c15-b31f-1b59cf618c71_800w.webp"/>
<img alt="G5" className="h-[250px] md:h-[350px] w-[200px] md:w-[280px] object-cover rounded-2xl filter grayscale contrast-125 opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/947801f5-e494-4f7f-93ca-a57108c8e797_800w.webp"/>
<img alt="G6" className="h-[250px] md:h-[350px] w-[200px] md:w-[280px] object-cover rounded-2xl filter grayscale contrast-125 opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e1a0dea8-7fbc-42a8-9bfa-61421a521154_800w.webp"/>
<img alt="G7" className="h-[250px] md:h-[350px] w-[200px] md:w-[280px] object-cover rounded-2xl filter grayscale contrast-125 opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3d2ea26e-e9a8-418c-b475-f4bfad52f48b_800w.webp"/>
<img alt="G8" className="h-[250px] md:h-[350px] w-[200px] md:w-[280px] object-cover rounded-2xl filter grayscale contrast-125 opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d9103025-e60d-4bd1-ad04-0a7b4310a989_800w.webp"/>
<img alt="G9" className="h-[250px] md:h-[350px] w-[200px] md:w-[280px] object-cover rounded-2xl filter grayscale contrast-125 opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1bcddaf2-6b48-4864-b690-246fc640861d_800w.png"/>
<img alt="G10" className="h-[250px] md:h-[350px] w-[200px] md:w-[280px] object-cover rounded-2xl filter grayscale contrast-125 opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f486f2d7-8a7f-4eab-a43c-baa69d2a7e10_800w.png"/>
<img alt="G11" className="h-[250px] md:h-[350px] w-[200px] md:w-[280px] object-cover rounded-2xl filter grayscale contrast-125 opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/34b8e775-04f7-4eeb-9d7a-e8d9da645535_800w.png"/>
<img alt="G12" className="h-[250px] md:h-[350px] w-[200px] md:w-[280px] object-cover rounded-2xl filter grayscale contrast-125 opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4b81c574-033d-471f-b61f-742ee2b48b5a_800w.png"/>
<img alt="G13" className="h-[250px] md:h-[350px] w-[200px] md:w-[280px] object-cover rounded-2xl filter grayscale contrast-125 opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f768dfbe-545c-4384-8c0c-fa5e18546b74_800w.png"/>
<img alt="G14" className="h-[250px] md:h-[350px] w-[200px] md:w-[280px] object-cover rounded-2xl filter grayscale contrast-125 opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/46f06319-11d8-4b5b-abc6-b5f8e0b3b8ea_800w.png"/>
<img alt="G15" className="h-[250px] md:h-[350px] w-[200px] md:w-[280px] object-cover rounded-2xl filter grayscale contrast-125 opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d325153f-28be-4be1-b98f-564da93a6001_800w.png"/>
<img alt="G16" className="h-[250px] md:h-[350px] w-[200px] md:w-[280px] object-cover rounded-2xl filter grayscale contrast-125 opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1d79008f-90c3-4aa0-80cd-f865f7d9bb0c_800w.png"/>
</div>
</div>
<div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent mt-16 lg:mt-24 mb-16 lg:mb-24 opacity-60"></div>

<div className="flex flex-col gap-16 z-10 w-full relative" id="agendar">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
<div className="flex flex-col gap-4">
<div className="text-zinc-900"><iconify-icon height="28" icon="solar:clipboard-text-bold-duotone" width="28"></iconify-icon></div>
<p className="leading-relaxed text-base font-medium text-zinc-900 mx-4" data-i18n="passo1">Formulário: Você compartilha sua história, motivação e sentimentos de forma simples.</p>
</div>
<div className="flex flex-col gap-4">
<div className="text-zinc-900"><iconify-icon height="28" icon="solar:phone-calling-bold-duotone" width="28"></iconify-icon></div>
<p className="leading-relaxed text-base font-medium text-zinc-900 mx-3" data-i18n="passo2">Conversa: Entramos em contato para entender a fundo sua essência e o que a marca significa.</p>
</div>
<div className="flex flex-col gap-4">
<div className="text-zinc-900"><iconify-icon height="28" icon="solar:pen-new-round-bold-duotone" width="28"></iconify-icon></div>
<p className="leading-relaxed text-base font-medium text-zinc-900 ml-3" data-i18n="passo3">Criação: O conceito nasce no momento presente, desenhado exclusivamente para o seu corpo.</p>
</div>
<div className="flex flex-col gap-4">
<div className="text-zinc-900"><iconify-icon height="28" icon="solar:armchair-bold-duotone" width="28"></iconify-icon></div>
<p className="leading-relaxed text-base font-medium text-zinc-900 ml-3" data-i18n="passo4">Vivência: A sessão acontece no nosso atelier privado, com total conforto e atenção.</p>
</div>
</div>
<div className="overflow-hidden min-h-[500px] lg:min-h-[600px] shadow-zinc-900/30 bg-zinc-900 rounded-[2rem] relative shadow-2xl">
<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,.05) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.05) 1px,transparent 1px)', backgroundSize: '40px 40px'}}></div>
<div className="min-h-[500px] lg:min-h-[600px] h-full relative">
<div className="flex flex-col bg-center md:p-12 lg:p-16 bg-zinc-400/70 h-full pt-8 pr-8 pb-8 pl-8 saturate-0 space-y-16 justify-center">
<h2 className="leading-tight md:text-4xl lg:text-5xl text-3xl font-normal text-white tracking-tight" data-i18n="cta_titulo">
          Quando a vontade de marcar algo na pele aparece, ela não é à toa. Esse impulso carrega um chamado real. Se você sente que chegou o momento — esse é o primeiro passo.
        </h2>
<a className="group flex items-center gap-3 hover:bg-zinc-100 transition-all hover:shadow-xl hover:-translate-y-0.5 text-sm font-medium text-zinc-900 bg-white w-fit rounded-full pt-3 pr-6 pb-3 pl-6 shadow-lg" href="https://form.respondi.app/qGdQCgbL">
<span data-i18n="btn_agendar_exp">Agendar minha experiência</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
<div className="border-white/10 border-t mt-12 pt-8">
<p className="text-xs text-white/50 uppercase tracking-widest mb-4 font-medium" data-i18n="personalidades_label">Obras na pele de personalidades</p>
<div className="flex flex-wrap text-sm italic text-white font-serif opacity-60 gap-x-6 gap-y-6 items-center">
<span>Filipe Toledo</span><span className="text-white/30">•</span>
<span>Paulo Ricardo</span><span className="text-white/30">•</span>
<span>Rodrigo Hilbert</span><span className="text-white/30">•</span>
<span className="">Fernanda Lima</span>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent mt-16 lg:mt-24 mb-16 lg:mb-24 opacity-60"></div>

<footer className="z-10 w-full relative">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-16 lg:mb-20">
<div className="flex flex-col gap-6">
<h2 className="leading-none md:text-7xl lg:text-9xl text-6xl font-semibold text-neutral-800 tracking-tighter">Rapha Lopes</h2>
<p className="text-zinc-400 md:text-2xl text-xl font-light italic text-zinc-500" data-i18n="footer_tagline">Mais que tinta na pele. Um capítulo da sua vida.—</p>
</div>
<div className="flex flex-col gap-4 lg:items-end lg:text-right">
<div className="flex items-start gap-2">
<div className="w-2 h-2 bg-zinc-800 rounded-full mt-2 animate-pulse"></div>
<p className="leading-snug md:text-xl text-base font-light text-zinc-700 tracking-tight" data-i18n="footer_desc">Atendendo em atelier privado no Rio de Janeiro. Criando arte autoral para clientes do mundo todo.</p>
</div>
<div className="flex items-center gap-2 text-zinc-500">
<iconify-icon height="16" icon="solar:clock-circle-linear" width="16"></iconify-icon>
<span className="text-sm font-medium" data-i18n="horario_local">Horário Local (RJ)</span>
</div>
<p className="md:text-5xl text-4xl font-medium text-zinc-900 tracking-tighter font-mono" id="clock">14:42:05</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
<div className="flex flex-col gap-4">
<a className="hover:text-zinc-900 transition-colors text-base font-medium text-zinc-700 ml-3" data-i18n="footer_home" href="#hero">Home</a>
<a className="hover:text-zinc-900 transition-colors text-base font-medium text-zinc-700 ml-3" data-i18n="footer_arte" href="#artista">A Arte</a>
<a className="hover:text-zinc-900 transition-colors text-base font-medium text-zinc-700 ml-3" data-i18n="footer_galeria" href="#galeria">Galeria</a>
<a className="hover:text-zinc-900 transition-colors text-base font-medium text-zinc-700 ml-3" data-i18n="footer_agendar" href="#agendar">Agendar</a>
</div>
<div className=""></div>
<div className=""></div>
<div className="flex flex-col overflow-hidden bg-white border-zinc-100 border rounded-2xl ml-2 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
<a className="group flex items-center justify-between hover:bg-zinc-50 transition-colors border-zinc-100 border-b pt-4 pr-5 pb-4 pl-5" href="https://instagram.com/raphafons" target="_blank">
<div className="flex items-center gap-3">
<iconify-icon className="text-zinc-400 group-hover:text-zinc-900 transition-colors" height="20" icon="solar:gallery-bold-duotone" width="20"></iconify-icon>
<span className="text-base font-medium text-zinc-700 group-hover:text-zinc-900 transition-colors">Instagram</span>
</div>
<iconify-icon className="text-zinc-500 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
<a className="group flex items-center justify-between px-5 py-4 border-b border-zinc-100 hover:bg-zinc-50 transition-colors" href="mailto:contato@raphalopes.com">
<div className="flex items-center gap-3">
<iconify-icon className="text-zinc-400 group-hover:text-zinc-900 transition-colors" height="20" icon="solar:letter-bold-duotone" width="20"></iconify-icon>
<span className="text-base font-medium text-zinc-700 group-hover:text-zinc-900 transition-colors" data-i18n="footer_contato">Contato</span>
</div>
<iconify-icon className="text-zinc-500 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
<a className="group flex items-center justify-between px-5 py-4 hover:bg-zinc-50 transition-colors" href="#agendar">
<div className="flex items-center gap-3">
<iconify-icon className="text-zinc-400 group-hover:text-zinc-900 transition-colors" height="20" icon="solar:map-point-bold-duotone" width="20"></iconify-icon>
<span className="text-base font-medium text-zinc-700 group-hover:text-zinc-900 transition-colors" data-i18n="footer_localizacao">Localização</span>
</div>
<iconify-icon className="text-zinc-500 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>
<div className="flex flex-col md:flex-row border-zinc-100 border-t mt-12 pt-8 gap-x-4 gap-y-4 items-center justify-between">
<p className="text-sm font-normal text-zinc-400" data-i18n="footer_copy">© 2026 Rapha Lopes. Todos os direitos reservados.</p>
</div>
</footer>
</main>


    </>
  );
}
