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



        // Simple Intersection Observer for scroll animations
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach(el => {
            observer.observe(el);
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
      

<nav className="fixed w-full z-50 glass-nav top-0">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-xl font-semibold tracking-tighter uppercase flex items-center gap-2 text-[#131d29]" href="/">
<iconify-icon className="text-[#131d29]" icon="solar:compass-linear" width="24"></iconify-icon>
                Nomad
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#131d29]/80">
<a className="hover:text-[#131d29] transition-colors" href="#destinos">Expedições</a>
<a className="hover:text-[#131d29] transition-colors" href="#sobre">Manifesto</a>
<a className="hover:text-[#131d29] transition-colors" href="/faq.html">Dúvidas</a>
</div>
<a className="hidden md:flex items-center gap-2 bg-[#131d29] text-white px-5 py-2 rounded-full text-xs font-medium tracking-wide hover:bg-[#131d29]/90 transition-all" href="#destinos">
                Próximas Saídas
                <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>

<button className="md:hidden text-[#131d29]">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</nav>

<header className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<div className="reveal">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-200 bg-gray-50 mb-6">
<span className="w-2 h-2 rounded-full bg-[#fcd300]"></span>
<span className="text-xs font-medium text-gray-500 uppercase tracking-wide">Expedições 2024/2025</span>
</div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tighter leading-[1.1] mb-6 text-[#131d29]">
                    O mundo não foi feito para ser <span className="italic font-light text-gray-400">visto</span>, mas vivido.
                </h1>
<p className="text-lg text-gray-500 max-w-md leading-relaxed mb-8 font-light">
                    Esqueça o turismo convencional. Criamos jornadas imersivas para os lugares mais remotos e autênticos do planeta.
                </p>
<div className="flex items-center gap-4">
<a className="bg-[#fcd300] text-[#131d29] px-8 py-3.5 rounded-full text-sm font-semibold tracking-tight hover:brightness-105 transition-all shadow-lg shadow-[#fcd300]/20 flex items-center gap-2" href="#destinos">
                        Explorar Destinos
                        <iconify-icon icon="solar:map-arrow-down-linear" width="18"></iconify-icon>
</a>
<a className="px-6 py-3.5 rounded-full text-sm font-medium text-[#131d29] border border-gray-200 hover:bg-gray-50 transition-all" href="#">
                        Ver vídeo manifesto
                    </a>
</div>
</div>
<div className="relative h-[500px] w-full hidden lg:block reveal delay-200">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#00feff]/10 rounded-full blur-3xl"></div>

<div className="absolute top-0 right-10 w-64 h-80 rounded-2xl overflow-hidden shadow-2xl rotate-3 z-10 border-4 border-white">
<img alt="Iceland" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute bottom-10 left-10 w-72 h-64 rounded-2xl overflow-hidden shadow-2xl -rotate-2 z-20 border-4 border-white">
<img alt="Lake" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute top-1/2 left-0 bg-white p-4 rounded-xl shadow-xl z-30 flex items-center gap-3 animate-bounce duration-[3000ms]">
<div className="w-10 h-10 bg-[#131d29] rounded-full flex items-center justify-center text-[#fcd300]">
<iconify-icon icon="solar:star-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-xs font-semibold text-[#131d29]">4.9/5 Avaliações</p>
<p className="text-[10px] text-gray-500">Viajantes Reais</p>
</div>
</div>
</div>
</div>
</header>

<section className="border-y border-gray-100 bg-gray-50/50 py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-between items-center gap-8 md:gap-0">
<div className="text-center md:text-left reveal">
<p className="text-3xl font-semibold tracking-tight text-[#131d29]">9+</p>
<p className="text-xs text-gray-500 uppercase tracking-wider mt-1">Destinos Exclusivos</p>
</div>
<div className="text-center md:text-left reveal delay-100">
<p className="text-3xl font-semibold tracking-tight text-[#131d29]">Small Groups</p>
<p className="text-xs text-gray-500 uppercase tracking-wider mt-1">Máximo 12 pessoas</p>
</div>
<div className="text-center md:text-left reveal delay-200">
<p className="text-3xl font-semibold tracking-tight text-[#131d29]">100%</p>
<p className="text-xs text-gray-500 uppercase tracking-wider mt-1">Curadoria Local</p>
</div>
<div className="text-center md:text-left reveal delay-300">
<p className="text-3xl font-semibold tracking-tight text-[#131d29]">24/7</p>
<p className="text-xs text-gray-500 uppercase tracking-wider mt-1">Suporte Global</p>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6" id="destinos">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 reveal">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#131d29] mb-4">Escolha sua próxima história</h2>
<p className="text-gray-500 font-light max-w-lg">Roteiros desenhados meticulosamente para quem busca mais do que apenas visitar, mas sentir cada destino.</p>
</div>
<div className="flex gap-2">
<button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#131d29] hover:text-white transition-colors">
<iconify-icon icon="solar:sort-horizontal-linear" width="20"></iconify-icon>
</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[420px]">

<a className="group relative rounded-3xl overflow-hidden card-hover-effect cursor-pointer bg-gray-100 reveal" href="/expedicao/islandia.html">
<div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-transparent to-[#131d29]/90"></div>
<img alt="Islandia" className="w-full h-full object-cover image-tilt" src="https://images.unsplash.com/photo-1531366936337-7c912a4589a7?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-6 right-6 z-20">
<span className="bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-medium px-3 py-1.5 rounded-full">Outubro 2024</span>
</div>
<div className="absolute bottom-0 left-0 p-8 z-20 w-full">
<div className="flex justify-between items-end">
<div>
<p className="text-[#00feff] text-xs font-medium uppercase tracking-wider mb-2">Aurora Boreal</p>
<h3 className="text-2xl font-semibold text-white tracking-tight mb-1">Islândia</h3>
<p className="text-gray-300 text-sm font-light line-clamp-2">Caçada às auroras, cavernas de gelo e vulcões ativos.</p>
</div>
<div className="w-10 h-10 rounded-full bg-white text-[#131d29] flex items-center justify-center translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
<iconify-icon icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
</div>
</div>
</div>
</a>

<a className="group relative rounded-3xl overflow-hidden card-hover-effect cursor-pointer bg-gray-100 reveal" href="/expedicao/japao.html">
<div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-transparent to-[#131d29]/90"></div>
<img alt="Japão" className="w-full h-full object-cover image-tilt" src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-6 right-6 z-20">
<span className="bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-medium px-3 py-1.5 rounded-full">Março 2025</span>
</div>
<div className="absolute bottom-0 left-0 p-8 z-20 w-full">
<div className="flex justify-between items-end">
<div>
<p className="text-[#00feff] text-xs font-medium uppercase tracking-wider mb-2">Cultura &amp; Futuro</p>
<h3 className="text-2xl font-semibold text-white tracking-tight mb-1">Japão</h3>
<p className="text-gray-300 text-sm font-light line-clamp-2">Terra do Sol Nascente: de templos milenares a neon.</p>
</div>
<div className="w-10 h-10 rounded-full bg-white text-[#131d29] flex items-center justify-center translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
<iconify-icon icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
</div>
</div>
</div>
</a>

<a className="group relative rounded-3xl overflow-hidden card-hover-effect cursor-pointer bg-gray-100 reveal lg:row-span-2" href="/expedicao/sudeste-asiatico.html">
<div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-transparent to-[#131d29]/90"></div>
<img alt="Tailandia" className="w-full h-full object-cover image-tilt" src="https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&amp;w=2039&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-6 right-6 z-20">
<span className="bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-medium px-3 py-1.5 rounded-full">Janeiro 2025</span>
</div>
<div className="absolute bottom-0 left-0 p-8 z-20 w-full">
<div className="flex justify-between items-end">
<div>
<p className="text-[#fcd300] text-xs font-medium uppercase tracking-wider mb-2">Multi-Destino</p>
<h3 className="text-3xl font-semibold text-white tracking-tight mb-1">Sudeste Asiático</h3>
<p className="text-gray-300 text-sm font-light line-clamp-3 mb-4">Filipinas, Indonésia e Singapura. Uma jornada épica pelas ilhas mais belas, cultura urbana vibrante e natureza intocada.</p>
</div>
<div className="w-10 h-10 rounded-full bg-white text-[#131d29] flex items-center justify-center translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
<iconify-icon icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
</div>
</div>
</div>
</a>

<a className="group relative rounded-3xl overflow-hidden card-hover-effect cursor-pointer bg-gray-100 reveal" href="/expedicao/egito.html">
<div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-transparent to-[#131d29]/90"></div>
<img alt="Egito" className="w-full h-full object-cover image-tilt" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute top-6 right-6 z-20">
<span className="bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-medium px-3 py-1.5 rounded-full">Novembro 2024</span>
</div>
<div className="absolute bottom-0 left-0 p-8 z-20 w-full">
<div className="flex justify-between items-end">
<div>
<p className="text-[#00feff] text-xs font-medium uppercase tracking-wider mb-2">História</p>
<h3 className="text-2xl font-semibold text-white tracking-tight mb-1">Egito</h3>
<p className="text-gray-300 text-sm font-light">Histórias Milenares do Nilo.</p>
</div>
<div className="w-10 h-10 rounded-full bg-white text-[#131d29] flex items-center justify-center translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
<iconify-icon icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
</div>
</div>
</div>
</a>

<a className="group relative rounded-3xl overflow-hidden card-hover-effect cursor-pointer bg-gray-100 reveal" href="/expedicao/atacama.html">
<div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-transparent to-[#131d29]/90"></div>
<img alt="Atacama" className="w-full h-full object-cover image-tilt" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute top-6 right-6 z-20">
<span className="bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-medium px-3 py-1.5 rounded-full">Abril 2025</span>
</div>
<div className="absolute bottom-0 left-0 p-8 z-20 w-full">
<div className="flex justify-between items-end">
<div>
<p className="text-[#00feff] text-xs font-medium uppercase tracking-wider mb-2">Aventura</p>
<h3 className="text-2xl font-semibold text-white tracking-tight mb-1">Atacama &amp; Uyuni</h3>
<p className="text-gray-300 text-sm font-light">Desertos, lagunas e o maior salar do mundo.</p>
</div>
<div className="w-10 h-10 rounded-full bg-white text-[#131d29] flex items-center justify-center translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
<iconify-icon icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
</div>
</div>
</div>
</a>

<a className="group relative rounded-3xl overflow-hidden card-hover-effect cursor-pointer bg-gray-100 reveal" href="/expedicao/havai.html">
<div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-transparent to-[#131d29]/90"></div>
<img alt="Havai" className="w-full h-full object-cover image-tilt" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute top-6 right-6 z-20">
<span className="bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-medium px-3 py-1.5 rounded-full">Agosto 2025</span>
</div>
<div className="absolute bottom-0 left-0 p-8 z-20 w-full">
<div className="flex justify-between items-end">
<div>
<p className="text-[#00feff] text-xs font-medium uppercase tracking-wider mb-2">Paraíso</p>
<h3 className="text-2xl font-semibold text-white tracking-tight mb-1">Havaí</h3>
<p className="text-gray-300 text-sm font-light">Vulcões e Águas Cristalinas.</p>
</div>
<div className="w-10 h-10 rounded-full bg-white text-[#131d29] flex items-center justify-center translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
<iconify-icon icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
</div>
</div>
</div>
</a>

<a className="group relative rounded-3xl overflow-hidden card-hover-effect cursor-pointer bg-gray-100 reveal" href="/expedicao/safari.html">
<div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-transparent to-[#131d29]/90"></div>
<img alt="Safari" className="w-full h-full object-cover image-tilt" src="https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&amp;w=2068&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-6 right-6 z-20">
<span className="bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-medium px-3 py-1.5 rounded-full">Junho 2025</span>
</div>
<div className="absolute bottom-0 left-0 p-8 z-20 w-full">
<div className="flex justify-between items-end">
<div>
<p className="text-[#00feff] text-xs font-medium uppercase tracking-wider mb-2">Vida Selvagem</p>
<h3 className="text-2xl font-semibold text-white tracking-tight mb-1">Safari &amp; Zanzibar</h3>
<p className="text-gray-300 text-sm font-light">A savana africana e o mar turquesa.</p>
</div>
<div className="w-10 h-10 rounded-full bg-white text-[#131d29] flex items-center justify-center translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
<iconify-icon icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
</div>
</div>
</div>
</a>

<a className="group relative rounded-3xl overflow-hidden card-hover-effect cursor-pointer bg-gray-100 reveal" href="/expedicao/tailandia.html">
<div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-transparent to-[#131d29]/90"></div>
<img alt="Tailandia" className="w-full h-full object-cover image-tilt" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="absolute top-6 right-6 z-20">
<span className="bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-medium px-3 py-1.5 rounded-full">Novembro 2024</span>
</div>
<div className="absolute bottom-0 left-0 p-8 z-20 w-full">
<div className="flex justify-between items-end">
<div>
<p className="text-[#00feff] text-xs font-medium uppercase tracking-wider mb-2">Festival</p>
<h3 className="text-2xl font-semibold text-white tracking-tight mb-1">Tailândia</h3>
<p className="text-gray-300 text-sm font-light">Festival das Lanternas em Chiang Mai.</p>
</div>
<div className="w-10 h-10 rounded-full bg-white text-[#131d29] flex items-center justify-center translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
<iconify-icon icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
</div>
</div>
</div>
</a>

<a className="group relative rounded-3xl overflow-hidden card-hover-effect cursor-pointer bg-gray-100 reveal" href="/expedicao/namibia.html">
<div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-transparent to-[#131d29]/90"></div>
<img alt="Namibia" className="w-full h-full object-cover image-tilt" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
<div className="absolute top-6 right-6 z-20">
<span className="bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-medium px-3 py-1.5 rounded-full">Maio 2025</span>
</div>
<div className="absolute bottom-0 left-0 p-8 z-20 w-full">
<div className="flex justify-between items-end">
<div>
<p className="text-[#00feff] text-xs font-medium uppercase tracking-wider mb-2">Exótico</p>
<h3 className="text-2xl font-semibold text-white tracking-tight mb-1">Namíbia</h3>
<p className="text-gray-300 text-sm font-light">Dunas milenares, savanas e vida selvagem.</p>
</div>
<div className="w-10 h-10 rounded-full bg-white text-[#131d29] flex items-center justify-center translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
<iconify-icon icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
</div>
</div>
</div>
</a>
</div>
</section>

<section className="bg-[#131d29] text-white py-24 relative overflow-hidden" id="sobre">

<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00feff]/5 rounded-full blur-[100px]"></div>
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
<div className="reveal">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-8 leading-tight">
                    Viajar não é sobre fuga,<br/>é sobre <span className="text-[#fcd300]">encontro</span>.
                </h2>
<div className="space-y-6 text-gray-400 font-light">
<p className="text-lg">
                        A Nomad Expeditions nasceu para aqueles que sentem que os pacotes turísticos tradicionais são artificiais. Nós buscamos o real, o cru, o magnífico.
                    </p>
<p>
                        Nossos roteiros são desenhados à mão, com curadoria de especialistas que conhecem cada beco de Tóquio e cada duna do Saara.
                    </p>
</div>
<div className="mt-10 grid grid-cols-2 gap-6">
<div className="flex flex-col gap-2">
<iconify-icon className="text-[#00feff]" icon="solar:users-group-rounded-linear" width="32"></iconify-icon>
<h4 className="text-white font-medium">Tribo Nomad</h4>
<p className="text-sm text-gray-500">Conecte-se com pessoas que vibram na mesma frequência.</p>
</div>
<div className="flex flex-col gap-2">
<iconify-icon className="text-[#00feff]" icon="solar:camera-linear" width="32"></iconify-icon>
<h4 className="text-white font-medium">Memórias Reais</h4>
<p className="text-sm text-gray-500">Experiências fotográficas e sensoriais únicas.</p>
</div>
</div>
</div>
<div className="relative h-[600px] rounded-3xl overflow-hidden reveal delay-200">
<img alt="Traveler" className="w-full h-full object-cover opacity-80" src="https://images.unsplash.com/photo-1528127269322-539801943592?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-10 left-10 right-10 p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10">
<p className="text-white text-lg font-medium italic">"A viagem para a Islândia mudou minha perspectiva sobre o planeta. A organização da Nomad foi impecável."</p>
<div className="flex items-center gap-3 mt-4">
<div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<p className="text-sm font-semibold text-white">Ana Souza</p>
<p className="text-xs text-[#00feff]">Expedição Aurora Boreal</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-4xl mx-auto px-6 text-center reveal">
<div className="bg-gray-50 rounded-[40px] p-12 border border-gray-100 shadow-sm relative overflow-hidden">
<div className="absolute -top-24 -left-24 w-64 h-64 bg-[#fcd300]/10 rounded-full blur-3xl"></div>
<div className="relative z-10">
<iconify-icon className="text-[#131d29] mb-6" icon="solar:letter-linear" width="48"></iconify-icon>
<h2 className="text-3xl font-semibold tracking-tight text-[#131d29] mb-4">O próximo destino na sua caixa de entrada</h2>
<p className="text-gray-500 mb-8 font-light">Receba roteiros exclusivos, dicas de fotografia e ofertas antecipadas para as próximas expedições.</p>
<form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
<input className="flex-1 px-6 py-3.5 rounded-full bg-white border border-gray-200 text-sm focus:outline-none focus:border-[#131d29] transition-colors text-[#131d29]" placeholder="Seu melhor e-mail" type="email"/>
<button className="bg-[#131d29] text-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-[#131d29]/90 transition-all shadow-lg shadow-[#131d29]/20" type="submit">
                        Inscrever-se
                    </button>
</form>
<p className="text-[10px] text-gray-400 mt-4">Sem spam. Apenas aventuras.</p>
</div>
</div>
</section>

<footer className="bg-white border-t border-gray-100 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-2 md:col-span-1">
<a className="text-lg font-semibold tracking-tighter uppercase flex items-center gap-2 text-[#131d29] mb-6" href="/">
<iconify-icon icon="solar:compass-linear" width="20"></iconify-icon>
                        Nomad
                    </a>
<p className="text-sm text-gray-500 font-light leading-relaxed">
                        Agência especializada em expedições de experiência e fotografia para os lugares mais incríveis do mundo.
                    </p>
</div>
<div>
<h4 className="font-medium text-[#131d29] mb-6">Explorar</h4>
<ul className="space-y-4 text-sm text-gray-500 font-light">
<li><a className="hover:text-[#131d29] transition-colors" href="#">Todas as Expedições</a></li>
<li><a className="hover:text-[#131d29] transition-colors" href="#">Calendário 2025</a></li>
<li><a className="hover:text-[#131d29] transition-colors" href="#">Estilo de Viagem</a></li>
<li><a className="hover:text-[#131d29] transition-colors" href="#">Blog</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-[#131d29] mb-6">Institucional</h4>
<ul className="space-y-4 text-sm text-gray-500 font-light">
<li><a className="hover:text-[#131d29] transition-colors" href="#">Sobre Nós</a></li>
<li><a className="hover:text-[#131d29] transition-colors" href="/faq.html">FAQ / Dúvidas</a></li>
<li><a className="hover:text-[#131d29] transition-colors" href="#">Política de Cancelamento</a></li>
<li><a className="hover:text-[#131d29] transition-colors" href="#">Contato</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-[#131d29] mb-6">Social</h4>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-[#131d29] hover:bg-[#131d29] hover:text-white transition-all" href="#">
<iconify-icon icon="solar:camera-linear" width="20"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-[#131d29] hover:bg-[#131d29] hover:text-white transition-all" href="#">
<iconify-icon icon="brandico:facebook" width="16"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-[#131d29] hover:bg-[#131d29] hover:text-white transition-all" href="#">
<iconify-icon icon="brandico:twitter-bird" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
<div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-gray-400">© 2024 Nomad Expeditions. Todos os direitos reservados.</p>
<div className="flex gap-6 text-xs text-gray-400">
<a className="hover:text-[#131d29]" href="#">Privacidade</a>
<a className="hover:text-[#131d29]" href="#">Termos</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
