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
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            const fadeElements = document.querySelectorAll('.fade-up');
            fadeElements.forEach(el => observer.observe(el));
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed flex bg-amber-500/10 z-[60] border-amber-500/20 border-b pt-2.5 pr-4 pb-2.5 pl-4 top-0 right-0 left-0 backdrop-blur-md gap-x-2 gap-y-2 items-center justify-center">
<iconify-icon className="text-amber-500" height="18" icon="solar:danger-triangle-linear" width="18"></iconify-icon>
<span className="text-amber-500 text-xs font-medium uppercase tracking-widest">Website em construção</span>
</div>

<nav className="fixed flex z-50 pr-4 pl-4 top-14 right-0 left-0 justify-center">
<div className="backdrop-blur-md bg-black/80 border border-white/10 rounded-full px-6 py-3 flex items-center justify-between gap-12 shadow-2xl shadow-black/50 transition-all duration-300 hover:border-white/20">
<a className="uppercase flex items-center gap-1 text-lg font-bold text-white tracking-tighter" href="#">XCYTE</a>
<div className="hidden md:flex items-center gap-8 text-xs font-medium uppercase tracking-widest text-neutral-400">
<a className="hover:text-white transition-colors" href="#vision">Visão</a>
<a className="hover:text-white transition-colors" href="#services">Serviços</a>
<a className="hover:text-white transition-colors" href="#portfolio">Experiências</a>
<a className="hover:text-white transition-colors" href="#contact">Contato</a>
</div>
<a className="hidden md:flex items-center justify-center w-8 h-8 rounded-full bg-white text-black hover:bg-neutral-200 transition-transform hover:scale-110" href="#contact">
<iconify-icon height="16" icon="lucide:arrow-up-right" width="16"></iconify-icon>
</a>
<button className="md:hidden text-white flex items-center">
<iconify-icon className="" height="20" icon="lucide:menu" width="20"></iconify-icon>
</button>
</div>
</nav>

<header className="relative w-full h-[100vh] overflow-hidden flex flex-col items-center justify-center bg-black">

<div className="absolute inset-0 z-0">
<img alt="Atmospheric background" className="w-full h-full object-cover opacity-50 scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/23624896-39e4-44c4-b709-f05439e36458_1600w.jpg?w=800&amp;q=80"/>

<div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-black/40"></div>
<div className="absolute inset-0 bg-black/30"></div>
</div>
<div className="z-20 text-center max-w-5xl mt-10 mr-auto ml-auto pr-6 pl-6 relative">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8 fade-up visible">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-600 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
</span>
<span className="text-[10px] uppercase font-semibold text-neutral-300 tracking-[0.2em]">produção de emoções</span>
</div>
<h1 className="md:text-8xl lg:text-9xl leading-[0.9] fade-up text-6xl font-semibold text-white tracking-tighter mb-8 visible">Do ecrã para a <br/> <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-500">REALIDADE</span></h1>
<p className="md:text-xl leading-relaxed fade-up text-lg font-light text-neutral-400 max-w-2xl mr-auto mb-10 ml-auto visible">Transformamos ideias em mundos vivos, onde cada pessoa se torna o herói da sua própria aventura.</p>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
<div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-white to-transparent"></div>
</div>
</header>

<section className="pt-24 pb-24 relative" id="vision">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-12 gap-12 gap-x-12 gap-y-12 items-start">
<div className="lg:col-span-5 fade-up sticky top-32">
<span className="text-red-500 font-mono text-xs uppercase tracking-widest mb-4 block">01 / A Visão</span>
<h2 className="md:text-5xl leading-[1.1] text-4xl font-semibold text-white tracking-tighter mb-8">Não capturamos momentos. <br/><span className="text-neutral-500">Produzimos emoções ao VIVO.</span></h2>
<p className="leading-relaxed font-light text-neutral-400 mb-8">Cada cena é uma escolha. Na XCYTE, posicionamo-nos onde a emoção pura se cruza com o rigor visual. Criamos mundos feitos para ecoar na mente muito depois de a viagem terminar.</p>
<div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/10">
<div className="">
<span className="block text-3xl font-bold text-white mb-1">20+</span>
<span className="text-xs text-neutral-500 uppercase tracking-widest">Projetos Executados</span>
</div>
<div className="">
<span className="block text-3xl font-bold text-white mb-1">+5</span>
<span className="text-xs text-neutral-500 uppercase tracking-widest">Awards e Menções</span>
</div>
</div>
</div>
<div className="lg:col-span-7 grid gap-6 fade-up gap-x-6 gap-y-6">
<div className="relative aspect-video group overflow-hidden rounded-sm border border-white/5">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="transition-opacity duration-300 bg-gradient-to-t from-black/80 to-transparent opacity-100 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-6 left-6">
<h3 className="text-xl font-medium text-white tracking-tight">Storytelling Intenso</h3>
</div>
</div>
<div className="grid sm:grid-cols-2 gap-6">
<div className="relative aspect-[4/5] group overflow-hidden rounded-sm border border-white/5">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100 grayscale group-hover:grayscale-0" src="https://mycyberpunk.de/wp-content/uploads/2020/03/Cyberpunk-2077-Fan-Made-Film-7.jpg?w=800&amp;q=80"/>
<div className="absolute bottom-6 left-6">
<h3 className="text-xl font-medium text-white tracking-tight">Hiperealismo Imersivo</h3>
</div>
</div>
<div className="relative aspect-[4/5] group overflow-hidden rounded-sm border border-white/5">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=800&amp;q=80"/>
<div className="absolute bottom-6 left-6">
<h3 className="text-xl font-medium text-white tracking-tight">Impacto Viral</h3>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden pt-24 pb-24 relative bg-[#0a0a0a] border-t border-white/5" id="services">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-900/5 rounded-full blur-[80px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="mb-12 fade-up">
<span className="uppercase block text-xs text-red-500 tracking-widest font-mono mb-2">02 / Expertise</span>
<h2 className="text-4xl font-semibold tracking-tighter text-white">Serviços</h2>
</div>

<div className="grid md:grid-cols-3 gap-0 bg-[#0a0a0a] border-white/10 border gap-x-0 gap-y-0">

<div className="group hover-border-glow hover:bg-white/[0.02] transition-colors fade-up border-white/10 border-r border-b pt-10 pr-10 pb-10 pl-10">
<div className="flex group-hover:border-red-500/50 transition-colors bg-neutral-900 w-12 h-12 border-white/5 border rounded-sm mb-8 items-center justify-center">
<iconify-icon className="text-neutral-300 group-hover:text-red-500 transition-colors" height="24" icon="lucide:sparkles" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-3">Experiências Imersivas</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Criação de ambientes e eventos que transcendem o físico. Ativações de marca onde o público é protagonista.</p>
</div>

<div className="group hover-border-glow p-10 border-r border-b border-white/10 hover:bg-white/[0.02] transition-colors fade-up">
<div className="w-12 h-12 bg-neutral-900 rounded-sm flex items-center justify-center mb-8 border border-white/5 group-hover:border-red-500/50 transition-colors">
<iconify-icon className="text-neutral-300 group-hover:text-red-500 transition-colors" height="24" icon="lucide:video" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-3">Produção de Vídeo</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Cinematografia de alto nível. Do conceito à pós-produção, criamos narrativas visuais impactantes e memoráveis.</p>
</div>

<div className="group hover-border-glow hover:bg-white/[0.02] transition-colors fade-up border-white/10 border-b pt-10 pr-10 pb-10 pl-10">
<div className="w-12 h-12 bg-neutral-900 rounded-sm flex items-center justify-center mb-8 border border-white/5 group-hover:border-red-500/50 transition-colors">
<iconify-icon className="text-neutral-300 group-hover:text-red-500 transition-colors" height="24" icon="lucide:drama" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-3">Acting Especializado</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Atores treinados para interação e imersão. Stunts e Personagens de Terror prontos para a Acção.</p>
</div>

<div className="group hover-border-glow hover:bg-white/[0.02] transition-colors fade-up border-white/10 border-r border-b pt-10 pr-10 pb-10 pl-10">
<div className="w-12 h-12 bg-neutral-900 rounded-sm flex items-center justify-center mb-8 border border-white/5 group-hover:border-red-500/50 transition-colors">
<iconify-icon className="text-neutral-300 group-hover:text-red-500 transition-colors" height="24" icon="lucide:fingerprint" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-3">Branding Imersivo</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Identidade visual aplicada ao espaço e à experiência. A sua marca vivida, sentida de forma memorável.</p>
</div>

<div className="group hover-border-glow p-10 border-r border-b border-white/10 hover:bg-white/[0.02] transition-colors fade-up">
<div className="w-12 h-12 bg-neutral-900 rounded-sm flex items-center justify-center mb-8 border border-white/5 group-hover:border-red-500/50 transition-colors">
<iconify-icon className="text-neutral-300 group-hover:text-red-500 transition-colors" height="24" icon="lucide:megaphone" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-3">Publicidade</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Campanhas que cortam o ruído. Spots comerciais desenhados para conversão e impacto emocional.</p>
</div>

<div className="group hover-border-glow p-10 hover:bg-white/[0.02] transition-colors border-b border-white/10 fade-up">
<div className="w-12 h-12 bg-neutral-900 rounded-sm flex items-center justify-center mb-8 border border-white/5 group-hover:border-red-500/50 transition-colors">
<iconify-icon className="text-neutral-300 group-hover:text-red-500 transition-colors" height="24" icon="lucide:brain-circuit" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-3">AI e Virtual</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Integração de Inteligência Artificial e produção virtual. O futuro da criação de conteúdos, hoje.</p>
</div>

<div className="group hover-border-glow p-10 border-r border-white/10 hover:bg-white/[0.02] transition-colors fade-up">
<div className="w-12 h-12 bg-neutral-900 rounded-sm flex items-center justify-center mb-8 border border-white/5 group-hover:border-red-500/50 transition-colors">
<iconify-icon className="text-neutral-300 group-hover:text-red-500 transition-colors" height="24" icon="lucide:palette" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-3">Cenografia &amp; FX</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Construção de sets e efeitos práticos. Sangue, próteses em ambientes que respiram realismo.</p>
</div>

<div className="group hover-border-glow p-10 border-r border-white/10 hover:bg-white/[0.02] transition-colors fade-up">
<div className="w-12 h-12 bg-neutral-900 rounded-sm flex items-center justify-center mb-8 border border-white/5 group-hover:border-red-500/50 transition-colors">
<iconify-icon className="text-neutral-300 group-hover:text-red-500 transition-colors" height="24" icon="lucide:ghost" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-3">Consultoria Criativa</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Design e Implementação de projetos chave-na-mão. Nós vamos criando, voçê vai lucrando. </p>
</div>

<div className="group hover-border-glow p-10 hover:bg-white/[0.02] transition-colors fade-up">
<div className="w-12 h-12 bg-neutral-900 rounded-sm flex items-center justify-center mb-8 border border-white/5 group-hover:border-red-500/50 transition-colors">
<iconify-icon className="text-neutral-300 group-hover:text-red-500 transition-colors" height="24" icon="lucide:lock" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-3">Eventos Privados</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Festas exclusivas e team buildings. Mundos feito à medida para grupos fechados.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0a0a0a] border-t border-white/5" id="portfolio">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 fade-up">
<div className="">
<span className="text-red-500 font-mono text-xs uppercase tracking-widest mb-2 block">03 / Portfólio</span>
<h2 className="text-4xl font-semibold text-white tracking-tighter">Experiências</h2>
</div>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">

<div className="group relative aspect-[3/4] overflow-hidden cursor-pointer rounded-sm border border-white/5 fade-up">
<img alt="Biohazard" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-70 group-hover:opacity-100" src="https://images.unsplash.com/photo-1569242840510-9fe6f0112cee?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90 transition-opacity duration-500"></div>
<div className="flex flex-col pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 justify-between">
<div className="flex justify-between items-start opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-y-4 group-hover:translate-y-0">
<span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[10px] uppercase tracking-widest text-white border border-white/10">Archive</span>
<iconify-icon className="text-white rotate-45 group-hover:rotate-0 transition-transform duration-500" height="20" icon="lucide:arrow-up-right" width="20"></iconify-icon>
</div>
<div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<p className="text-red-500 text-xs font-mono uppercase tracking-widest mb-2">Eventos Airsoft de Terror</p>
<h3 className="text-2xl font-semibold text-white tracking-tight">Biohazard</h3>
</div>
</div>
</div>

<div className="group relative aspect-[3/4] overflow-hidden cursor-pointer rounded-sm border border-white/5 fade-up">
<img alt="Zombie Xperience" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-70 group-hover:opacity-100" src="https://images.unsplash.com/photo-1679590060902-3556e64a676f?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90 transition-opacity duration-500"></div>
<div className="absolute inset-0 p-8 flex flex-col justify-between">
<div className="flex justify-between items-start opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-y-4 group-hover:translate-y-0">
<span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[10px] uppercase tracking-widest text-white border border-white/10">Archive</span>
<iconify-icon className="text-white rotate-45 group-hover:rotate-0 transition-transform duration-500" height="20" icon="lucide:arrow-up-right" width="20"></iconify-icon>
</div>
<div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<p className="text-red-500 text-xs font-mono uppercase tracking-widest mb-2">1º Evento Terror Imersivo em Portugal</p>
<h3 className="text-2xl font-semibold text-white tracking-tight">Zombie Xperience</h3>
</div>
</div>
</div>

<div className="group relative aspect-[3/4] overflow-hidden cursor-pointer rounded-sm border border-white/5 fade-up">
<img alt="Casa do Medo" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-70 group-hover:opacity-100" src="https://images.unsplash.com/photo-1534283465444-a996fc1ce9ea?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90 transition-opacity duration-500"></div>
<div className="absolute inset-0 p-8 flex flex-col justify-between">
<div className="flex justify-between items-start opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-y-4 group-hover:translate-y-0">
<span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[10px] uppercase tracking-widest text-white border border-white/10">Archive</span>
<iconify-icon className="text-white rotate-45 group-hover:rotate-0 transition-transform duration-500" height="20" icon="lucide:arrow-up-right" width="20"></iconify-icon>
</div>
<div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<p className="text-red-500 text-xs font-mono uppercase tracking-widest mb-2">Terror cara-a-cara</p>
<h3 className="text-2xl font-semibold text-white tracking-tight">Casa do Medo</h3>
</div>
</div>
</div>

<div className="group relative aspect-[3/4] overflow-hidden cursor-pointer rounded-sm border border-white/5 fade-up">
<img alt="Metal Gear" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-70 group-hover:opacity-100" src="https://images.unsplash.com/photo-1569242840838-2a6bdd402fe4?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90 transition-opacity duration-500"></div>
<div className="flex flex-col pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 justify-between">
<div className="flex justify-between items-start opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-y-4 group-hover:translate-y-0">
<span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[10px] uppercase tracking-widest text-white border border-white/10">Archive</span>
<iconify-icon className="text-white rotate-45 group-hover:rotate-0 transition-transform duration-500" height="20" icon="lucide:arrow-up-right" width="20"></iconify-icon>
</div>
<div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<p className="text-red-500 text-xs font-mono uppercase tracking-widest mb-2">Videojogo na Vida Real</p>
<h3 className="text-2xl font-semibold text-white tracking-tight">Metal Gear Xperience</h3>
</div>
</div>
</div>

<div className="group relative aspect-[3/4] overflow-hidden cursor-pointer rounded-sm border border-white/5 fade-up">
<img alt="Noite dos Pesadelos" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-70 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90 transition-opacity duration-500"></div>
<div className="absolute inset-0 p-8 flex flex-col justify-between">
<div className="flex justify-between items-start opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-y-4 group-hover:translate-y-0">
<span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[10px] uppercase tracking-widest text-white border border-white/10">Archive</span>
<iconify-icon className="text-white rotate-45 group-hover:rotate-0 transition-transform duration-500" height="20" icon="lucide:arrow-up-right" width="20"></iconify-icon>
</div>
<div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<p className="text-red-500 text-xs font-mono uppercase tracking-widest mb-2">Do ecrã para a Noite</p>
<h3 className="text-2xl font-semibold text-white tracking-tight">Noite dos Pesadelos</h3>
</div>
</div>
</div>

<div className="group relative aspect-[3/4] overflow-hidden cursor-pointer rounded-sm border border-white/5 fade-up">
<img alt="Vultos" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-70 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90 transition-opacity duration-500"></div>
<div className="absolute inset-0 p-8 flex flex-col justify-between">
<div className="flex justify-between items-start opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-y-4 group-hover:translate-y-0">
<span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[10px] uppercase tracking-widest text-white border border-white/10">Archive</span>
<iconify-icon className="text-white rotate-45 group-hover:rotate-0 transition-transform duration-500" height="20" icon="lucide:arrow-up-right" width="20"></iconify-icon>
</div>
<div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<p className="text-red-500 text-xs font-mono uppercase tracking-widest mb-2">Paranormal Imersivo</p>
<h3 className="text-2xl font-semibold text-white tracking-tight">Vultos</h3>
</div>
</div>
</div>

<div className="group relative aspect-[3/4] overflow-hidden cursor-pointer rounded-sm border border-white/5 fade-up">
<img alt="Asilo" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-70 group-hover:opacity-100" src="https://images.unsplash.com/photo-1565667562916-fcac2e6818c0?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90 transition-opacity duration-500"></div>
<div className="absolute inset-0 p-8 flex flex-col justify-between">
<div className="flex justify-between items-start opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-y-4 group-hover:translate-y-0">
<span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[10px] uppercase tracking-widest text-white border border-white/10">Archive</span>
<iconify-icon className="text-white rotate-45 group-hover:rotate-0 transition-transform duration-500" height="20" icon="lucide:arrow-up-right" width="20"></iconify-icon>
</div>
<div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<p className="text-red-500 text-xs font-mono uppercase tracking-widest mb-2">Loucura Imersiva</p>
<h3 className="text-2xl font-semibold text-white tracking-tight">Asilo</h3>
</div>
</div>
</div>

<div className="group relative aspect-[3/4] overflow-hidden cursor-pointer rounded-sm border border-white/5 fade-up">
<img alt="Trauma" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-70 group-hover:opacity-100" src="https://images.unsplash.com/photo-1688692272470-f93d2e4235fc?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90 transition-opacity duration-500"></div>
<div className="flex flex-col pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 justify-between">
<div className="flex justify-between items-start opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-y-4 group-hover:translate-y-0">
<span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[10px] uppercase tracking-widest text-white border border-white/10">Archive</span>
<iconify-icon className="text-white rotate-45 group-hover:rotate-0 transition-transform duration-500" height="20" icon="lucide:arrow-up-right" width="20"></iconify-icon>
</div>
<div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<p className="text-red-500 text-xs font-mono uppercase tracking-widest mb-2">Psychological</p>
<h3 className="text-2xl font-semibold text-white tracking-tight">Trauma</h3>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative bg-neutral-950 border-t border-white/5 overflow-hidden" id="contact">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 relative z-10">
<div className="fade-up">
<h2 className="text-6xl md:text-7xl font-semibold tracking-tighter text-white mb-8">
                    Vamos criar <br/>
<span className="text-neutral-600">algo juntos.</span>
</h2>
<p className="text-neutral-400 text-lg font-light mb-12 max-w-md">
                    Novas Produções para Q4 2026
                </p>
<div className="space-y-8">
<a className="group flex items-center gap-6 text-white hover:text-red-500 transition-colors" href="mailto:hello@kabovelo.com">
<div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-red-500 transition-colors">
<iconify-icon height="20" icon="lucide:mail" width="20"></iconify-icon>
</div>
<div>
<span className="block text-xs text-neutral-500 uppercase tracking-widest mb-1">Dispare um e-mail</span>
<span className="text-xl font-medium">xcyte@prima-gov.pt</span>
</div>
</a>
<a className="group flex items-center gap-6 text-white hover:text-red-500 transition-colors" href="#">
<div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-red-500 transition-colors">
<iconify-icon height="20" icon="lucide:instagram" width="20"></iconify-icon>
</div>
<div>
<span className="block text-xs text-neutral-500 uppercase tracking-widest mb-1">Persiga-nos</span>
<span className="text-xl font-medium">XCYTE</span>
</div>
</a>
</div>
</div>
<div className="bg-neutral-900/30 p-10 border border-white/10 rounded-sm backdrop-blur-sm fade-up">
<form className="space-y-8">
<div className="grid md:grid-cols-2 gap-8">
<div className="group relative">
<input className="peer w-full bg-transparent border-b border-neutral-700 py-3 text-white focus:outline-none focus:border-red-500 transition-colors placeholder-transparent" id="name" placeholder="Name" type="text"/>
<label className="absolute left-0 -top-3.5 text-xs text-neutral-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-neutral-500 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-red-500" htmlFor="name">Nome</label>
</div>
<div className="group relative">
<input className="peer w-full bg-transparent border-b border-neutral-700 py-3 text-white focus:outline-none focus:border-red-500 transition-colors placeholder-transparent" id="email" placeholder="Email" type="email"/>
<label className="absolute left-0 -top-3.5 text-xs text-neutral-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-neutral-500 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-red-500" htmlFor="email">E-mail</label>
</div>
</div>
<div className="group relative">
<input className="peer w-full bg-transparent border-b border-neutral-700 py-3 text-white focus:outline-none focus:border-red-500 transition-colors placeholder-transparent" id="budget" placeholder="Budget" type="text"/>
<label className="absolute left-0 -top-3.5 text-xs text-neutral-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-neutral-500 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-red-500" htmlFor="budget">Orçamento Estimado</label>
</div>
<div className="group relative">
<textarea className="peer w-full bg-transparent border-b border-neutral-700 py-3 text-white focus:outline-none focus:border-red-500 transition-colors placeholder-transparent resize-none" id="message" placeholder="Message" rows="4"></textarea>
<label className="absolute left-0 -top-3.5 text-xs text-neutral-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-neutral-500 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-red-500" htmlFor="message">Resumo do projeto</label>
</div>
<button className="w-full py-5 bg-white text-black font-semibold uppercase tracking-widest hover:bg-neutral-200 transition-all flex items-center justify-center gap-3 group">
                        brevevemente
                        <iconify-icon className="group-hover:translate-x-1 transition-transform" height="18" icon="lucide:arrow-right" width="18"></iconify-icon>
</button>
</form>
</div>
</div>
</section>

<footer className="bg-black py-12 border-t border-white/5">
<div className="flex flex-col md:flex-row gap-6 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<a className="uppercase flex items-center gap-1 text-xl font-bold text-white tracking-tighter" href="#">
                XCYTE<span className="text-red-600">.</span>
</a>
<p className="text-neutral-600 text-xs">© XCYTE - 2026 - Todos os direitos reservados</p>
</div>
</footer>



    </>
  );
}
