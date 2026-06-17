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



{
"@context": "https://schema.org",
"@type": "Locksmith",
"name": "Marcos Chaveiro",
"image": "https://images.unsplash.com/photo-1583020613271-9dfc1c676388",
"telephone": "5551987654321",
"url": "https://marcoschaveiro.com.br",
"address": {
"@type": "PostalAddress",
"streetAddress": "Rua Central, 123",
"addressLocality": "Taquara",
"addressRegion": "RS",
"postalCode": "95600-000",
"addressCountry": "BR"
},
"geo": {
"@type": "GeoCoordinates",
"latitude": -29.6508,
"longitude": -50.7794
},
"openingHoursSpecification": {
"@type": "OpeningHoursSpecification",
"dayOfWeek": [
"Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
],
"opens": "00:00",
"closes": "23:59"
},
"priceRange": "R$"
}



        // Init Icons
        lucide.createIcons();

        // Mobile Menu Toggle
        const btn = document.getElementById('mobile-menu-btn');
        const menu = document.getElementById('mobile-menu');

        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });

        // Close menu when clicking a link
        menu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.add('hidden');
            });
        });

        // Lightbox Logic
        const lightbox = document.getElementById('lightbox');
        const lightboxImg = document.getElementById('lightbox-img');

        function openLightbox(element) {
            const imgParams = element.querySelector('img').src;
            // Get higher res image if utilizing unspash logic, for now use same
            lightboxImg.src = imgParams;
            lightbox.classList.remove('hidden');
            // Small delay to allow display block to render before opacity transition
            setTimeout(() => {
                lightbox.classList.remove('opacity-0');
                lightboxImg.classList.remove('scale-95');
                lightboxImg.classList.add('scale-100');
            }, 10);
            document.body.style.overflow = 'hidden';
        }

        function closeLightbox() {
            lightbox.classList.add('opacity-0');
            lightboxImg.classList.remove('scale-100');
            lightboxImg.classList.add('scale-95');
            setTimeout(() => {
                lightbox.classList.add('hidden');
                document.body.style.overflow = 'auto';
            }, 300);
        }

        // Close on escape key
        document.addEventListener('keydown', function(event) {
            if (event.key === "Escape") {
                closeLightbox();
            }
        });

        // Close on outside click
        lightbox.addEventListener('click', function(event) {
            if (event.target === lightbox) {
                closeLightbox();
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
      <div className="fixed top-0 w-full h-screen -z-10 bg-cover bg-center" data-alpha-mask="80" style={{backgroundImage: 'url("https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f6dade2d-171e-445a-b71c-9fb732c0f564_3840w.webp?w=800&amp', maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}></div>


<header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-blue-100" style={{}}>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">

<div className="flex-shrink-0 flex items-center gap-2">
<div className="p-1.5 rounded-lg bg-cyan-500">
<svg className="lucide lucide-key w-5 h-5 text-white" data-lucide="key" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4"></path><path d="m21 2-9.6 9.6"></path><circle cx="7.5" cy="15.5" r="5.5"></circle></svg>
</div>
<span className="text-lg font-semibold tracking-tight text-neutral-900">Marcos<span className="text-cyan-500">Chaveiro</span></span>
</div>

<nav className="hidden md:flex gap-8">
<a className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors" href="#servicos">Serviços</a>
<a className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors" href="#galeria">Galeria</a>
<a className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors" href="#depoimentos">Depoimentos</a>
<a className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors" href="#contato">Localização</a>
</nav>

<div className="hidden md:flex items-center gap-4">
<a className="flex items-center gap-2 text-sm font-medium text-neutral-600 hover:text-neutral-900" href="tel:5551987654321">
<svg className="lucide lucide-phone w-4 h-4" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
                        (51) 98765-4321
                    </a>
<a className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-neutral-900 hover:bg-neutral-800 transition-all shadow-sm" href="https://wa.me/5551998765432?text=Ol%C3%A1%20Marcos!%20Preciso%20de%20um%20chaveiro.">
                        Chamar 24h
                    </a>
</div>

<div className="md:hidden flex items-center">
<button className="p-2 rounded-md text-neutral-500 hover:text-neutral-900 hover:bg-blue-100 focus:outline-none" id="mobile-menu-btn" style={{}}>
<svg className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</div>
</div>

<div className="hidden md:hidden absolute top-16 left-0 w-full bg-white border-b border-blue-100 shadow-lg animate-in slide-in-from-top-5 duration-200" id="mobile-menu" style={{}}>
<div className="px-4 pt-2 pb-6 space-y-2">
<a className="block px-3 py-3 rounded-md text-base font-medium text-neutral-700 hover:bg-blue-50" href="#servicos" style={{}}>Serviços</a>
<a className="block px-3 py-3 rounded-md text-base font-medium text-neutral-700 hover:bg-blue-50" href="#galeria" style={{}}>Trabalhos Realizados</a>
<a className="block px-3 py-3 rounded-md text-base font-medium text-neutral-700 hover:bg-blue-50" href="#depoimentos" style={{}}>Avaliações</a>
<a className="block px-3 py-3 rounded-md text-base font-medium text-neutral-700 hover:bg-blue-50" href="#contato" style={{}}>Contato</a>
<div className="pt-4 border-t border-blue-100 mt-4" style={{}}>
<a className="flex items-center justify-center gap-2 w-full px-4 py-3 font-semibold rounded-md mb-2 bg-cyan-50 text-cyan-700" href="tel:5551987654321">
<svg className="lucide lucide-phone w-4 h-4" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
                        Ligar Agora
                    </a>
</div>
</div>
</div>
</header>
<main className="">

<section className="lg:pt-40 lg:pb-28 overflow-hidden bg-white pt-32 pb-20 relative">
<div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
<div className="sm:px-6 lg:px-8 text-center max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium mb-8 border-cyan-200 bg-cyan-50 text-cyan-800">
<span className="flex h-2 w-2 rounded-full mr-2 animate-pulse bg-cyan-600"></span>
                    Plantão 24h em Taquara e Região
                </div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-neutral-900 mb-6 max-w-4xl mx-auto">
                    Chaveiro Profissional <br className="hidden sm:block"/>
<span className="text-neutral-500">Rápido, Seguro e Perto de Você.</span>
</h1>
<p className="text-lg text-neutral-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                    Trancado para fora? Precisa trocar o segredo? Há mais de 15 anos resolvendo problemas de fechaduras residenciais e automotivas em Taquara com preço justo.
                </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
<a className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-base font-medium rounded-lg text-white transition-all shadow-sm hover:shadow-md active:scale-95 bg-cyan-600 hover:bg-cyan-700" href="tel:5551987654321">
<svg className="lucide lucide-phone w-5 h-5 mr-2" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
                        Ligar Agora
                    </a>
<a className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 border border-blue-200 text-base font-medium rounded-lg text-neutral-700 bg-white hover:bg-blue-50 transition-all shadow-sm hover:shadow-md active:scale-95" href="https://wa.me/5551998765432" style={{}}>
<svg className="lucide lucide-message-circle w-5 h-5 mr-2 text-cyan-600" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>
                        Enviar WhatsApp
                    </a>
</div>

<div className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm text-neutral-500">
<div className="flex items-center gap-1.5">
<svg className="lucide lucide-check-circle-2 w-4 h-4 text-neutral-400" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
                        Chegada em 30 min
                    </div>
<div className="flex items-center gap-1.5">
<svg className="lucide lucide-shield-check w-4 h-4 text-neutral-400" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
                        Profissional Certificado
                    </div>
<div className="flex items-center gap-1.5">
<svg className="lucide lucide-star w-4 h-4 text-blue-400 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
                        4.8/5 (127 Avaliações)
                    </div>
</div>
</div>
</section>

<section className="py-20 bg-blue-50 border-t border-blue-200" id="servicos" style={{}}>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl mb-4">Serviços Especializados</h2>
<p className="text-neutral-500 max-w-2xl mx-auto">Soluções completas para sua casa, empresa ou veículo. Equipamentos modernos para abertura sem danos.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-white rounded-xl p-8 shadow-sm border border-blue-100 hover:shadow-md transition-shadow group" style={{}}>
<div className="w-12 h-12 rounded-lg flex items-center justify-center mb-6 transition-colors bg-cyan-50 group-hover:bg-cyan-100">
<svg className="lucide lucide-lock w-6 h-6 text-cyan-600" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
</div>
<h3 className="text-xl font-semibold text-neutral-900 mb-3 tracking-tight">Aberturas de Emergência</h3>
<p className="text-neutral-500 text-sm leading-relaxed mb-4">Trancou a chave dentro? Realizamos aberturas de portas, portões e carros sem danificar a fechadura. Disponível 24h.</p>
<ul className="text-sm text-neutral-600 space-y-2">
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-3 h-3 text-cyan-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Residencial</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-3 h-3 text-cyan-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Automotivo</li>
</ul>
</div>

<div className="bg-white rounded-xl p-8 shadow-sm border border-blue-100 hover:shadow-md transition-shadow group" style={{}}>
<div className="flex group-hover:bg-blue-100 transition-colors bg-blue-50 w-12 h-12 rounded-lg mb-6 items-center justify-center">
<svg className="lucide lucide-key-round w-6 h-6 text-blue-600" data-lucide="key-round" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path><circle cx="16.5" cy="7.5" fill="currentColor" r=".5"></circle></svg>
</div>
<h3 className="text-xl font-semibold text-neutral-900 mb-3 tracking-tight">Troca de Segredos</h3>
<p className="text-neutral-500 text-sm leading-relaxed mb-4">Mudou de casa ou perdeu as chaves? Trocamos o cilindro ou o segredo da fechadura para sua segurança imediata.</p>
<ul className="text-sm text-neutral-600 space-y-2">
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-3 h-3 text-blue-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Fechaduras Tetra</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-3 h-3 text-blue-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Multiponto</li>
</ul>
</div>

<div className="bg-white rounded-xl p-8 shadow-sm border border-blue-100 hover:shadow-md transition-shadow group" style={{}}>
<div className="w-12 h-12 bg-cyan-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-cyan-100 transition-colors">
<svg className="lucide lucide-car w-6 h-6 text-cyan-600" data-lucide="car" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path><circle cx="7" cy="17" r="2"></circle><path d="M9 17h6"></path><circle cx="17" cy="17" r="2"></circle></svg>
</div>
<h3 className="text-xl font-semibold text-neutral-900 mb-3 tracking-tight">Chaves Codificadas</h3>
<p className="text-neutral-500 text-sm leading-relaxed mb-4">Cópia de chaves automotivas com transponder (chip). Recuperação de chaves perdidas e programação na hora.</p>
<ul className="text-sm text-neutral-600 space-y-2">
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-3 h-3 text-cyan-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Nacionais</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-3 h-3 text-cyan-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Importados</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="space-y-8">
<h2 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">Por que escolher o Marcos Chaveiro?</h2>
<div className="space-y-6">
<div className="flex gap-4">
<div className="flex-shrink-0 mt-1">
<div className="w-8 h-8 rounded-full flex items-center justify-center bg-cyan-100">
<span className="font-bold text-sm text-cyan-700">1</span>
</div>
</div>
<div className="">
<h4 className="text-lg font-medium text-neutral-900">Atendimento Humanizado</h4>
<p className="text-neutral-500 text-sm mt-1">Você fala diretamente com o Marcos. Sem atendentes eletrônicos ou espera desnecessária.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 mt-1">
<div className="w-8 h-8 rounded-full flex items-center justify-center bg-cyan-100">
<span className="font-bold text-sm text-cyan-700">2</span>
</div>
</div>
<div>
<h4 className="text-lg font-medium text-neutral-900">Preço Transparente</h4>
<p className="text-neutral-500 text-sm mt-1">Orçamento claro antes de começar o serviço. Aceitamos Pix e Cartões.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 mt-1">
<div className="w-8 h-8 rounded-full flex items-center justify-center bg-cyan-100">
<span className="font-bold text-sm text-cyan-700">3</span>
</div>
</div>
<div className="">
<h4 className="text-lg font-medium text-neutral-900">Garantia do Serviço</h4>
<p className="text-neutral-500 text-sm mt-1">Todos os serviços possuem garantia de funcionamento. Sua segurança é prioridade.</p>
</div>
</div>
</div>
<div className="pt-4">
<a className="font-medium inline-flex items-center gap-1 text-sm text-cyan-600 hover:text-cyan-700" href="#contato">
                                Ver área de cobertura <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
<div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg bg-blue-100" style={{}}>

<img alt="Chaveiro profissional trabalhando" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-8">
<div className="text-white font-medium text-lg">"15 anos de experiência em Taquara"</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-neutral-50 border-t border-blue-200" id="galeria" style={{}}>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
<div className="">
<h2 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl mb-4">Trabalhos Realizados</h2>
<p className="text-neutral-500">Confira a qualidade do nosso acabamento e ferramentas.</p>
</div>
<a className="text-sm font-medium text-neutral-600 transition-colors hover:text-cyan-600" href="https://wa.me/5551998765432">
                        Solicitar orçamento pelo WhatsApp →
                    </a>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">

<div className="group relative aspect-square overflow-hidden rounded-lg bg-blue-200 cursor-pointer" onclick="openLightbox(this)" style={{}}>
<img alt="Troca de fechadura residencial" className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110" src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&amp;fit=crop&amp;q=80"/>
<div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
<svg className="lucide lucide-zoom-in text-white w-8 h-8" data-lucide="zoom-in" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8"></circle><line x1="21" x2="16.65" y1="21" y2="16.65"></line><line x1="11" x2="11" y1="8" y2="14"></line><line x1="8" x2="14" y1="11" y2="11"></line></svg>
</div>
</div>

<div className="group relative aspect-square overflow-hidden rounded-lg bg-blue-200 cursor-pointer" onclick="openLightbox(this)" style={{}}>
<img alt="Cópia de chave automotiva" className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
<svg className="lucide lucide-zoom-in text-white w-8 h-8" data-lucide="zoom-in" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8"></circle><line x1="21" x2="16.65" y1="21" y2="16.65"></line><line x1="11" x2="11" y1="8" y2="14"></line><line x1="8" x2="14" y1="11" y2="11"></line></svg>
</div>
</div>

<div className="group relative aspect-square overflow-hidden rounded-lg bg-blue-200 cursor-pointer" onclick="openLightbox(this)" style={{}}>
<img alt="Cofre aberto" className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
<svg className="lucide lucide-zoom-in text-white w-8 h-8" data-lucide="zoom-in" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8"></circle><line x1="21" x2="16.65" y1="21" y2="16.65"></line><line x1="11" x2="11" y1="8" y2="14"></line><line x1="8" x2="14" y1="11" y2="11"></line></svg>
</div>
</div>

<div className="group relative aspect-square overflow-hidden rounded-lg bg-blue-200 cursor-pointer" onclick="openLightbox(this)" style={{}}>
<img alt="Chaves tetra" className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
<svg className="lucide lucide-zoom-in text-white w-8 h-8" data-lucide="zoom-in" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8"></circle><line x1="21" x2="16.65" y1="21" y2="16.65"></line><line x1="11" x2="11" y1="8" y2="14"></line><line x1="8" x2="14" y1="11" y2="11"></line></svg>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white" id="depoimentos">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">O que dizem em Taquara</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-blue-50 rounded-xl p-6 border border-blue-100" style={{}}>
<div className="flex gap-1 mb-4 text-cyan-400">
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-neutral-600 text-sm mb-6">"Quebrei a chave na porta de casa num domingo à noite. O Marcos chegou em 20 minutos e resolveu sem estragar a fechadura. Recomendo muito!"</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-neutral-200 flex items-center justify-center text-neutral-500 font-bold text-xs">RS</div>
<div>
<div className="font-medium text-neutral-900 text-sm">Ricardo Silva</div>
<div className="text-xs text-neutral-500">Morador do Centro</div>
</div>
</div>
</div>

<div className="bg-blue-50 rounded-xl p-6 border border-blue-100" style={{}}>
<div className="flex gap-1 mb-4 text-cyan-400">
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-neutral-600 text-sm mb-6">"Excelente profissional. Fez a cópia da chave canivete do meu carro pela metade do preço da concessionária. Funciona perfeitamente."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-neutral-200 flex items-center justify-center text-neutral-500 font-bold text-xs">AM</div>
<div className="">
<div className="font-medium text-neutral-900 text-sm">Ana Maria</div>
<div className="text-xs text-neutral-500">Empresária</div>
</div>
</div>
</div>

<div className="bg-blue-50 rounded-xl p-6 border border-blue-100" style={{}}>
<div className="flex gap-1 mb-4 text-cyan-400">
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-neutral-600 text-sm mb-6">"Preço justo e honestidade. Tinha chamado outro que queria trocar tudo, o Marcos apenas consertou o segredo. Ganhou um cliente fiel."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-neutral-200 flex items-center justify-center text-neutral-500 font-bold text-xs">JL</div>
<div>
<div className="font-medium text-neutral-900 text-sm">Jorge Luis</div>
<div className="text-xs text-neutral-500">Aposentado</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-neutral-900 text-white" id="contato">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
<div className="space-y-8">
<div>
<h2 className="text-3xl font-semibold tracking-tight mb-2">Onde Estamos</h2>
<p className="text-neutral-400">Atendemos em toda Taquara e cidades vizinhas.</p>
</div>
<div className="space-y-6">
<div className="flex items-start gap-4">
<svg className="lucide lucide-map-pin w-6 h-6 mt-1 text-cyan-500" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<div>
<h4 className="font-medium text-white">Endereço</h4>
<p className="text-neutral-400 text-sm mt-1">Rua Central, 123<br/>Taquara - RS, 95600-000</p>
</div>
</div>
<div className="flex items-start gap-4">
<svg className="lucide lucide-phone w-6 h-6 mt-1 text-cyan-500" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
<div>
<h4 className="font-medium text-white">Telefone / WhatsApp</h4>
<p className="text-neutral-400 text-sm mt-1 mb-2">(51) 98765-4321</p>
<a className="text-sm underline text-cyan-400 hover:text-cyan-300" href="https://wa.me/5551998765432">Iniciar conversa</a>
</div>
</div>
<div className="flex items-start gap-4">
<svg className="lucide lucide-clock w-6 h-6 mt-1 text-cyan-500" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
<div>
<h4 className="font-medium text-white">Horário</h4>
<p className="text-neutral-400 text-sm mt-1">Segunda a Domingo: 06h - 22h<br/><span className="text-cyan-400">Emergências 24h</span></p>
</div>
</div>
</div>
</div>
<div className="h-[400px] w-full bg-neutral-800 rounded-2xl overflow-hidden relative">

<iframe allowfullscreen="" className="" height="100%" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27774.22572528704!2d-50.796464500000004!3d-29.6517179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951910a30140228b%3A0xe5492d2716182c6c!2sTaquara%2C%20RS!5e0!3m2!1spt-BR!2sbr!4v1698765432100!5m2!1spt-BR!2sbr" style={{border: '0', filter: 'grayscale(100%) invert(92%) contrast(83%)'}} title="Mapa de Localização Marcos Chaveiro" width="100%">
</iframe>
</div>
</div>
</div>
</section>

<section className="py-16 bg-cyan-600">
<div className="max-w-4xl mx-auto px-4 text-center">
<h2 className="text-2xl md:text-3xl font-semibold text-white mb-6 tracking-tight">Problemas com a fechadura? Não force, chame o Marcos.</h2>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<a className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg bg-white transition-all shadow-md text-cyan-700 hover:bg-cyan-50" href="tel:5551987654321">
                        Ligar Agora (51) 98765-4321
                    </a>
</div>
</div>
</section>
</main>

<footer className="bg-neutral-950 border-t border-neutral-900 pt-12 pb-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<svg className="lucide lucide-key w-5 h-5 text-cyan-500" data-lucide="key" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4"></path><path d="m21 2-9.6 9.6"></path><circle cx="7.5" cy="15.5" r="5.5"></circle></svg>
<span className="text-white font-semibold">Marcos Chaveiro</span>
</div>
<div className="text-neutral-500 text-sm">
                    © 2024 Marcos Chaveiro. Todos os direitos reservados.
                </div>
<div className="flex gap-4">
<a aria-label="Facebook" className="text-neutral-500 hover:text-white transition-colors" href="#">
<svg className="lucide lucide-facebook w-5 h-5" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
</a>
<a aria-label="Instagram" className="text-neutral-500 hover:text-white transition-colors" href="#">
<svg className="lucide lucide-instagram w-5 h-5" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
</div>
</div>
</div>
</footer>

<a aria-label="Falar no WhatsApp" className="fixed bottom-6 right-6 z-40 bg-cyan-500 text-white p-3.5 rounded-full shadow-lg hover:bg-cyan-600 transition-all hover:scale-110 hover:shadow-xl group flex items-center gap-2" href="https://wa.me/5551998765432?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20preciso%20de%20ajuda.">
<span className="hidden group-hover:block text-sm font-medium pr-1">Atendimento Rápido</span>
<svg className="lucide lucide-message-circle w-6 h-6 fill-current" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>
</a>

<div className="fixed inset-0 z-[60] bg-black/90 hidden flex items-center justify-center p-4 opacity-0 transition-opacity duration-300" id="lightbox">
<button className="absolute top-6 right-6 text-white hover:text-blue-300 p-2" onclick="closeLightbox()" style={{}}>
<svg className="lucide lucide-x w-8 h-8" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
<img alt="Zoom" className="max-h-[90vh] max-w-full rounded-md shadow-2xl transform scale-95 transition-transform duration-300" id="lightbox-img" src=""/>
</div>


    </>
  );
}
