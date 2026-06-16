import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Simple router to switch content
        function showPage(pageId) {
            // Hide all sections
            document.querySelectorAll('.page-section').forEach(el => {
                el.classList.remove('active');
            });
            // Show selected section
            const target = document.getElementById(pageId);
            if (target) {
                target.classList.add('active');
            }
            // Update active nav state
            document.querySelectorAll('.nav-link').forEach(btn => {
                if(btn.dataset.target === pageId) {
                    btn.classList.add('text-stone-900');
                    btn.classList.remove('text-stone-500');
                } else {
                    btn.classList.remove('text-stone-900');
                    btn.classList.add('text-stone-500');
                }
            });
            // Scroll to top
            window.scrollTo(0, 0);
        }

        function toggleMobileMenu() {
            const menu = document.getElementById('mobile-menu');
            menu.classList.toggle('hidden');
        }

        // Initialize Home active state visually
        document.addEventListener('DOMContentLoaded', () => {
            const homeBtn = document.querySelector('button[data-target="home"]');
            if(homeBtn) homeBtn.classList.add('text-stone-900');
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 bg-stone-50/90 backdrop-blur-md border-b border-stone-200">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-lg font-semibold tracking-tight text-stone-900 uppercase hover:opacity-70 transition-opacity" href="javascript:showPage('home')">
                O Sacristão
            </a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-500">
<button className="nav-link text-stone-900 hover:text-stone-900 transition-colors" data-target="home" onclick="showPage('home')">Início</button>
<button className="nav-link hover:text-stone-900 transition-colors" data-target="history" onclick="showPage('history')">A Nossa História</button>
<button className="nav-link hover:text-stone-900 transition-colors" data-target="menu" onclick="showPage('menu')">Ementa</button>
<button className="nav-link hover:text-stone-900 transition-colors" data-target="contact" onclick="showPage('contact')">Contactos</button>
<a className="bg-stone-900 text-white px-4 py-2 rounded-lg hover:bg-stone-800 transition-colors flex items-center gap-2" href="tel:+351232751457">
<iconify-icon icon="lucide:phone" strokeWidth="1.5" width="16"></iconify-icon>
                    Reservar
                </a>
</div>

<button className="md:hidden text-stone-900 p-2" onclick="toggleMobileMenu()">
<iconify-icon icon="lucide:menu" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>

<div className="hidden md:hidden bg-white border-b border-stone-200 absolute w-full left-0 top-16 px-6 py-4 flex flex-col gap-4 shadow-lg" id="mobile-menu">
<button className="text-left font-medium text-stone-600 py-2" onclick="showPage('home'); toggleMobileMenu()">Início</button>
<button className="text-left font-medium text-stone-600 py-2" onclick="showPage('history'); toggleMobileMenu()">A Nossa História</button>
<button className="text-left font-medium text-stone-600 py-2" onclick="showPage('menu'); toggleMobileMenu()">Ementa</button>
<button className="text-left font-medium text-stone-600 py-2" onclick="showPage('contact'); toggleMobileMenu()">Contactos</button>
</div>
</nav>

<main className="flex-grow pt-16">

<div className="page-section active" id="home">

<header className="relative py-24 md:py-32 px-6 border-b border-stone-200 bg-white">
<div className="max-w-4xl mx-auto text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-orange-800 text-xs font-medium mb-6">
<iconify-icon icon="lucide:award" width="14"></iconify-icon>
                        Referência em Vouzela desde 1944
                    </div>
<h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-stone-900 mb-6 leading-tight">
                        Cozinha de conforto <br/>no coração de Campia.
                    </h1>
<p className="text-lg text-stone-500 max-w-2xl mx-auto mb-10 leading-relaxed">
                        Onde a tradição da Beira Alta se senta à mesa. Especialistas em vitela, bacalhau e na arte de bem receber.
                    </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto px-8 py-3 bg-stone-900 text-white rounded-lg font-medium hover:bg-stone-800 transition-all flex items-center justify-center gap-2" onclick="showPage('menu')">
                            Ver a Ementa
                            <iconify-icon icon="lucide:utensils" width="16"></iconify-icon>
</button>
<button className="w-full sm:w-auto px-8 py-3 bg-white border border-stone-200 text-stone-700 rounded-lg font-medium hover:bg-stone-50 transition-all flex items-center justify-center gap-2" onclick="showPage('contact')">
                            Onde Estamos
                            <iconify-icon icon="lucide:map-pin" width="16"></iconify-icon>
</button>
</div>
</div>
</header>

<section className="py-16 px-6 border-b border-stone-200 bg-stone-50">
<div className="max-w-6xl mx-auto">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="flex flex-col items-center text-center p-4">
<div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-stone-800 shadow-sm border border-stone-200 mb-4">
<iconify-icon icon="lucide:flame" width="24"></iconify-icon>
</div>
<h3 className="font-medium text-stone-900 mb-1">Forno a Lenha</h3>
<p className="text-xs text-stone-500">O segredo do sabor dos nossos assados.</p>
</div>
<div className="flex flex-col items-center text-center p-4">
<div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-stone-800 shadow-sm border border-stone-200 mb-4">
<iconify-icon icon="lucide:wine" width="24"></iconify-icon>
</div>
<h3 className="font-medium text-stone-900 mb-1">Garrafeira</h3>
<p className="text-xs text-stone-500">Vinhos do Dão e regionais selecionados.</p>
</div>
<div className="flex flex-col items-center text-center p-4">
<div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-stone-800 shadow-sm border border-stone-200 mb-4">
<iconify-icon icon="lucide:car" width="24"></iconify-icon>
</div>
<h3 className="font-medium text-stone-900 mb-1">Estacionamento</h3>
<p className="text-xs text-stone-500">Parque privativo gratuito para clientes.</p>
</div>
<div className="flex flex-col items-center text-center p-4">
<div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-stone-800 shadow-sm border border-stone-200 mb-4">
<iconify-icon icon="lucide:shopping-bag" width="24"></iconify-icon>
</div>
<h3 className="font-medium text-stone-900 mb-1">Take-Away</h3>
<p className="text-xs text-stone-500">Leve o melhor da nossa cozinha para casa.</p>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 max-w-6xl mx-auto">
<div className="grid md:grid-cols-2 gap-12 items-center">
<div className="order-2 md:order-1 relative rounded-xl overflow-hidden aspect-video md:aspect-square group">
<img alt="Interior do Restaurante" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>
<div className="absolute inset-0 bg-stone-900/10"></div>
</div>
<div className="order-1 md:order-2">
<h2 className="text-3xl font-semibold tracking-tight text-stone-900 mb-6">Uma paragem obrigatória.</h2>
<p className="text-stone-600 mb-6 leading-relaxed">
                            Conhecido localmente como "Casa Duarte", O Sacristão é mais do que um restaurante; é um ponto de encontro de gerações. Seja para um almoço rápido durante a semana ou um jantar prolongado ao fim de semana, a nossa promessa é simples: comida honesta e saborosa.
                        </p>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3">
<iconify-icon className="text-orange-700 mt-1" icon="lucide:chef-hat"></iconify-icon>
<div>
<span className="block font-medium text-stone-900">Cozinha Regional</span>
<span className="text-sm text-stone-500">Pratos típicos de Lafões confecionados a preceito.</span>
</div>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-orange-700 mt-1" icon="lucide:users"></iconify-icon>
<div>
<span className="block font-medium text-stone-900">Ambiente Familiar</span>
<span className="text-sm text-stone-500">Um espaço acolhedor onde se sente em casa.</span>
</div>
</li>
</ul>
</div>
</div>
</section>

<section className="bg-stone-900 text-stone-100 py-20 px-6">
<div className="max-w-6xl mx-auto">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div>
<span className="text-orange-400 font-medium tracking-wide uppercase text-xs mb-4 block">A Nossa Especialidade</span>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6 text-white">Vitela de Lafões</h2>
<p className="text-stone-400 text-lg leading-relaxed mb-8">
                                A vitela certificada da região de Lafões é o ex-libris da nossa casa. Assada lentamente no forno a lenha, ganha uma textura tenra e suculenta, com a pele tostada no ponto certo.
                            </p>
<div className="flex flex-col sm:flex-row gap-8">
<div>
<span className="block text-2xl font-bold text-white mb-1">4h+</span>
<span className="text-stone-500 text-sm">Tempo de Forno</span>
</div>
<div>
<span className="block text-2xl font-bold text-white mb-1">100%</span>
<span className="text-stone-500 text-sm">Carne Regional</span>
</div>
<div>
<span className="block text-2xl font-bold text-white mb-1">1944</span>
<span className="text-stone-500 text-sm">Receita Original</span>
</div>
</div>
</div>
<div className="relative rounded-xl overflow-hidden aspect-[4/3] border border-stone-800 shadow-2xl">
<img alt="Vitela Assada" className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-stone-900 mb-4">O que dizem os nossos clientes</h2>
<p className="text-stone-500">Histórias partilhadas à mesa.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-stone-50 p-8 rounded-xl border border-stone-100">
<div className="flex text-orange-400 mb-4 gap-1">
<iconify-icon icon="lucide:star" width="16"></iconify-icon>
<iconify-icon icon="lucide:star" width="16"></iconify-icon>
<iconify-icon icon="lucide:star" width="16"></iconify-icon>
<iconify-icon icon="lucide:star" width="16"></iconify-icon>
<iconify-icon icon="lucide:star" width="16"></iconify-icon>
</div>
<p className="text-stone-600 mb-6 text-sm leading-relaxed">
                                "Paragem obrigatória sempre que passamos na A25. A vitela é divinal e o serviço é de uma simpatia que já se encontra pouco."
                            </p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-stone-200 flex items-center justify-center font-bold text-xs text-stone-500">MR</div>
<span className="text-sm font-medium text-stone-900">Manuel Rodrigues</span>
</div>
</div>

<div className="bg-stone-50 p-8 rounded-xl border border-stone-100">
<div className="flex text-orange-400 mb-4 gap-1">
<iconify-icon icon="lucide:star" width="16"></iconify-icon>
<iconify-icon icon="lucide:star" width="16"></iconify-icon>
<iconify-icon icon="lucide:star" width="16"></iconify-icon>
<iconify-icon icon="lucide:star" width="16"></iconify-icon>
<iconify-icon icon="lucide:star" width="16"></iconify-icon>
</div>
<p className="text-stone-600 mb-6 text-sm leading-relaxed">
                                "Restaurante muito acolhedor. Comida tradicional portuguesa muito bem confecionada. O bacalhau na brasa estava excelente."
                            </p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-stone-200 flex items-center justify-center font-bold text-xs text-stone-500">AC</div>
<span className="text-sm font-medium text-stone-900">Ana Costa</span>
</div>
</div>

<div className="bg-stone-50 p-8 rounded-xl border border-stone-100">
<div className="flex text-orange-400 mb-4 gap-1">
<iconify-icon icon="lucide:star" width="16"></iconify-icon>
<iconify-icon icon="lucide:star" width="16"></iconify-icon>
<iconify-icon icon="lucide:star" width="16"></iconify-icon>
<iconify-icon icon="lucide:star" width="16"></iconify-icon>
<iconify-icon icon="lucide:star" width="16"></iconify-icon>
</div>
<p className="text-stone-600 mb-6 text-sm leading-relaxed">
                                "Excelente relação qualidade-preço. O ambiente é familiar e sentimo-nos em casa. Recomendo vivamente a mousse de chocolate."
                            </p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-stone-200 flex items-center justify-center font-bold text-xs text-stone-500">PS</div>
<span className="text-sm font-medium text-stone-900">Paulo Silva</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-stone-200 bg-stone-50">
<div className="max-w-6xl mx-auto">
<div className="grid md:grid-cols-2 gap-12 items-start">

<div>
<h2 className="text-3xl font-semibold tracking-tight text-stone-900 mb-8">Horários &amp; Contactos</h2>
<div className="space-y-8">

<div className="flex gap-5">
<div className="w-10 h-10 rounded-lg bg-white border border-stone-200 flex items-center justify-center shrink-0 text-stone-600">
<iconify-icon icon="lucide:map-pin" width="18"></iconify-icon>
</div>
<div>
<h3 className="font-medium text-stone-900 mb-1">Localização</h3>
<p className="text-stone-600 text-sm leading-relaxed">
                                            Rua da Igreja n.º 50<br/>3670-056 Campia, Vouzela
                                        </p>
</div>
</div>

<div className="flex gap-5">
<div className="w-10 h-10 rounded-lg bg-white border border-stone-200 flex items-center justify-center shrink-0 text-stone-600">
<iconify-icon icon="lucide:clock" width="18"></iconify-icon>
</div>
<div className="w-full max-w-sm">
<h3 className="font-medium text-stone-900 mb-2">Horário de Funcionamento</h3>
<div className="text-stone-600 text-sm space-y-2">
<div className="flex justify-between border-b border-stone-200 pb-2">
<span>Segunda</span>
<span className="font-medium text-stone-900">10:00 - 14:00</span>
</div>
<div className="flex justify-between border-b border-stone-200 pb-2">
<span>Terça - Domingo</span>
<span className="font-medium text-stone-900">10:00 - 15:00 / 18:30 - 22:30</span>
</div>
</div>
</div>
</div>

<div className="flex gap-5">
<div className="w-10 h-10 rounded-lg bg-white border border-stone-200 flex items-center justify-center shrink-0 text-stone-600">
<iconify-icon icon="lucide:phone" width="18"></iconify-icon>
</div>
<div>
<h3 className="font-medium text-stone-900 mb-1">Reservas</h3>
<p className="text-stone-500 text-xs mb-2">Aconselhamos reserva ao fim de semana.</p>
<a className="text-lg font-semibold text-stone-900 hover:text-orange-700 transition-colors" href="tel:+351232751457">
                                            +351 232 751 457
                                        </a>
</div>
</div>
</div>
</div>

<div className="relative rounded-2xl overflow-hidden bg-stone-200 aspect-[4/3] group">
<img alt="Localização" className="absolute inset-0 w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" src="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
<div className="absolute inset-0 flex items-center justify-center">
<a className="bg-white/90 backdrop-blur px-6 py-3 rounded-lg shadow-xl text-stone-900 font-medium hover:bg-white transition-colors flex items-center gap-2 transform hover:scale-105 transition-all" href="https://maps.google.com/?q=Restaurante+O+Sacristão+Campia" target="_blank">
<iconify-icon icon="lucide:map" width="18"></iconify-icon>
                                    Abrir no Google Maps
                                </a>
</div>
</div>
</div>
</div>
</section>
</div>

<div className="page-section" id="history">
<div className="bg-stone-900 text-white py-20 px-6">
<div className="max-w-4xl mx-auto text-center">
<h1 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6">A Nossa História</h1>
<p className="text-stone-400 text-lg max-w-2xl mx-auto">
                        De uma pequena taberna em 1944 a um restaurante de referência na região de Vouzela.
                    </p>
</div>
</div>
<section className="max-w-4xl mx-auto px-6 py-16">
<div className="prose prose-stone prose-lg mx-auto text-stone-600">
<p className="mb-6 first-letter:text-5xl first-letter:font-bold first-letter:text-stone-900 first-letter:mr-2 float-left">
                        H
                    </p>
<p className="mb-8">
                        á mais de sete décadas, na pitoresca aldeia de Campia, nascia o que viria a ser um marco da gastronomia local. Fundado em 1944, o estabelecimento começou como uma modesta casa de pasto, servindo os locais e os viajantes que cruzavam a região de Lafões.
                    </p>
<div className="my-12 p-8 bg-stone-100 rounded-xl border-l-4 border-stone-800">
<p className="italic text-stone-800 font-medium text-xl">
                            "A alcunha 'O Sacristão' perdurou no tempo, uma homenagem às origens e à proximidade com a Igreja Paroquial, vizinha de sempre desta casa."
                        </p>
</div>
<h3 className="text-2xl font-semibold text-stone-900 mb-4 mt-12">A Casa Duarte</h3>
<p className="mb-6">
                        Ao longo dos anos, a gestão familiar manteve-se fiel aos princípios fundadores: qualidade no produto e honestidade no serviço. Muitos clientes ainda se referem ao espaço como "Casa Duarte", recordando os tempos em que o Sr. Duarte recebia cada cliente como um amigo à sua porta.
                    </p>
<p>
                        Hoje, continuamos a honrar esse legado. As receitas foram passadas de geração em geração, mantendo o tempero, o segredo dos assados e, acima de tudo, o respeito pelos ingredientes da terra.
                    </p>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
<img className="rounded-lg h-40 w-full object-cover grayscale hover:grayscale-0 transition-all" src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<img className="rounded-lg h-40 w-full object-cover grayscale hover:grayscale-0 transition-all" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<img className="rounded-lg h-40 w-full object-cover grayscale hover:grayscale-0 transition-all" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<img className="rounded-lg h-40 w-full object-cover grayscale hover:grayscale-0 transition-all" src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
</div>
</section>
</div>

<div className="page-section" id="menu">
<div className="bg-stone-100 py-16 px-6 border-b border-stone-200">
<div className="max-w-4xl mx-auto text-center">
<h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-stone-900 mb-4">Ementa</h1>
<p className="text-stone-500">Sabores autênticos, confecionados no momento.</p>
</div>
</div>
<div className="max-w-5xl mx-auto px-6 py-12">

<div className="mb-16">
<div className="flex items-center gap-4 mb-8">
<h2 className="text-2xl font-semibold text-stone-900 tracking-tight">Entradas &amp; Sopas</h2>
<div className="h-px bg-stone-200 flex-grow"></div>
</div>
<div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
<div className="flex justify-between items-baseline group">
<div>
<h3 className="font-medium text-stone-800 text-lg group-hover:text-orange-800 transition-colors">Sopa da Pedra (Regional)</h3>
<p className="text-sm text-stone-500 mt-1">Rica e reconfortante, receita tradicional.</p>
</div>
<span className="text-stone-900 font-medium ml-4">2.50€</span>
</div>
<div className="flex justify-between items-baseline group">
<div>
<h3 className="font-medium text-stone-800 text-lg group-hover:text-orange-800 transition-colors">Rissóis Caseiros</h3>
<p className="text-sm text-stone-500 mt-1">Carne ou Leitão. Unidade.</p>
</div>
<span className="text-stone-900 font-medium ml-4">1.20€</span>
</div>
<div className="flex justify-between items-baseline group">
<div>
<h3 className="font-medium text-stone-800 text-lg group-hover:text-orange-800 transition-colors">Presunto Serrano</h3>
<p className="text-sm text-stone-500 mt-1">Fatiado fino, cura longa.</p>
</div>
<span className="text-stone-900 font-medium ml-4">6.50€</span>
</div>
<div className="flex justify-between items-baseline group">
<div>
<h3 className="font-medium text-stone-800 text-lg group-hover:text-orange-800 transition-colors">Queijo da Serra</h3>
<p className="text-sm text-stone-500 mt-1">DOP, servido com tostas.</p>
</div>
<span className="text-stone-900 font-medium ml-4">5.00€</span>
</div>
</div>
</div>

<div className="mb-16">
<div className="flex items-center gap-4 mb-8">
<h2 className="text-2xl font-semibold text-stone-900 tracking-tight">Peixes</h2>
<div className="h-px bg-stone-200 flex-grow"></div>
</div>
<div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
<div className="group">
<div className="flex justify-between items-baseline mb-2">
<h3 className="font-semibold text-stone-800 text-xl group-hover:text-orange-800 transition-colors">Bacalhau na Brasa</h3>
<span className="text-stone-900 font-medium">14.50€</span>
</div>
<p className="text-stone-500 text-sm leading-relaxed">
                                Postas altas demolhadas a preceito, assadas na brasa com azeite virgem, alho picado e batata a murro.
                            </p>
</div>
<div className="group">
<div className="flex justify-between items-baseline mb-2">
<h3 className="font-semibold text-stone-800 text-xl group-hover:text-orange-800 transition-colors">Polvo à Lagareiro</h3>
<span className="text-stone-900 font-medium">16.00€</span>
</div>
<p className="text-stone-500 text-sm leading-relaxed">
                                Polvo tenro regado com azeite quente, acompanhado de grelos salteados e batata assada.
                            </p>
</div>
<div className="group">
<div className="flex justify-between items-baseline mb-2">
<h3 className="font-semibold text-stone-800 text-xl group-hover:text-orange-800 transition-colors">Filetes de Pescada</h3>
<span className="text-stone-900 font-medium">11.50€</span>
</div>
<p className="text-stone-500 text-sm leading-relaxed">
                                Panados no momento, servidos com arroz de feijão ou salada russa.
                            </p>
</div>
</div>
</div>

<div className="mb-16">
<div className="flex items-center gap-4 mb-8">
<h2 className="text-2xl font-semibold text-stone-900 tracking-tight">Carnes</h2>
<div className="h-px bg-stone-200 flex-grow"></div>
</div>
<div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
<div className="group border border-orange-100 bg-orange-50/50 p-6 rounded-xl -mx-6 md:mx-0">
<div className="flex justify-between items-baseline mb-2">
<h3 className="font-semibold text-stone-900 text-xl flex items-center gap-2">
                                    Nacos na Pedra
                                    <span className="text-[10px] uppercase font-bold bg-stone-900 text-white px-2 py-0.5 rounded">Especialidade</span>
</h3>
<span className="text-stone-900 font-medium">15.00€</span>
</div>
<p className="text-stone-600 text-sm leading-relaxed">
                                Lombinho de vitela suculento, fatiado cru para ser grelhado na pedra quente na mesa. Acompanha batata frita e 3 molhos.
                            </p>
</div>
<div className="group p-6 md:p-0">
<div className="flex justify-between items-baseline mb-2">
<h3 className="font-semibold text-stone-800 text-xl group-hover:text-orange-800 transition-colors">Vitela Assada à Lafões</h3>
<span className="text-stone-900 font-medium">13.50€</span>
</div>
<p className="text-stone-500 text-sm leading-relaxed">
                                A carne mais famosa da região, assada lentamente no forno a lenha até se desfazer. Acompanha batata assada e arroz de forno.
                            </p>
</div>
<div className="group px-6 md:px-0">
<div className="flex justify-between items-baseline mb-2">
<h3 className="font-semibold text-stone-800 text-xl group-hover:text-orange-800 transition-colors">Rojões à Moda da Beira</h3>
<span className="text-stone-900 font-medium">12.00€</span>
</div>
<p className="text-stone-500 text-sm leading-relaxed">
                                Carne de porco marinada em vinho e alho, frita com batata aos cubos e pickles.
                            </p>
</div>
<div className="group px-6 md:px-0">
<div className="flex justify-between items-baseline mb-2">
<h3 className="font-semibold text-stone-800 text-xl group-hover:text-orange-800 transition-colors">Grelhada Mista</h3>
<span className="text-stone-900 font-medium">12.50€</span>
</div>
<p className="text-stone-500 text-sm leading-relaxed">
                                Seleção variada de carnes grelhadas no carvão. Ideal para partilhar.
                            </p>
</div>
</div>
</div>

<div className="mb-8">
<div className="flex items-center gap-4 mb-8">
<h2 className="text-2xl font-semibold text-stone-900 tracking-tight">Sobremesas Caseiras</h2>
<div className="h-px bg-stone-200 flex-grow"></div>
</div>
<div className="grid md:grid-cols-3 gap-6 text-center">
<div className="bg-stone-50 p-6 rounded-lg border border-stone-100">
<h3 className="font-medium text-stone-900">Leite Creme Queimado</h3>
<p className="text-xs text-stone-400 mt-1">O favorito</p>
</div>
<div className="bg-stone-50 p-6 rounded-lg border border-stone-100">
<h3 className="font-medium text-stone-900">Mousse de Chocolate</h3>
<p className="text-xs text-stone-400 mt-1">Textura caseira</p>
</div>
<div className="bg-stone-50 p-6 rounded-lg border border-stone-100">
<h3 className="font-medium text-stone-900">Pudim de Ovos</h3>
<p className="text-xs text-stone-400 mt-1">Receita da Avó</p>
</div>
</div>
</div>
<p className="text-center text-xs text-stone-400 mt-12 italic">
                    IVA incluído à taxa legal em vigor. Se tiver alguma alergia alimentar, por favor informe o nosso staff.
                </p>
</div>
</div>

<div className="page-section" id="contact">
<div className="grid lg:grid-cols-2 min-h-[calc(100vh-64px)]">

<div className="bg-stone-50 p-8 lg:p-20 flex flex-col justify-center">
<h1 className="text-4xl font-semibold tracking-tight text-stone-900 mb-8">Contactos</h1>
<div className="space-y-10">

<div className="flex gap-6">
<div className="w-12 h-12 rounded-full bg-white border border-stone-200 flex items-center justify-center shrink-0 text-stone-900">
<iconify-icon icon="lucide:map-pin" width="20"></iconify-icon>
</div>
<div>
<h3 className="font-semibold text-stone-900 text-lg mb-1">Visite-nos</h3>
<p className="text-stone-600 leading-relaxed">
                                    Rua da Igreja n.º 50<br/>
                                    3670-056 Campia<br/>
                                    Vouzela, Portugal
                                </p>
<p className="text-stone-400 text-sm mt-2">Junto à Igreja Paroquial</p>
</div>
</div>

<div className="flex gap-6">
<div className="w-12 h-12 rounded-full bg-white border border-stone-200 flex items-center justify-center shrink-0 text-stone-900">
<iconify-icon icon="lucide:phone" width="20"></iconify-icon>
</div>
<div>
<h3 className="font-semibold text-stone-900 text-lg mb-1">Reservas</h3>
<p className="text-stone-600 mb-2">Aconselhamos reserva aos fins de semana.</p>
<a className="text-xl font-medium text-stone-900 border-b border-stone-300 hover:border-stone-900 transition-colors pb-0.5" href="tel:+351232751457">
                                    +351 232 751 457
                                </a>
</div>
</div>

<div className="flex gap-6">
<div className="w-12 h-12 rounded-full bg-white border border-stone-200 flex items-center justify-center shrink-0 text-stone-900">
<iconify-icon icon="lucide:clock" width="20"></iconify-icon>
</div>
<div>
<h3 className="font-semibold text-stone-900 text-lg mb-1">Horário</h3>
<div className="grid grid-cols-2 gap-x-8 gap-y-2 text-stone-600 text-sm">
<span className="font-medium">Segunda</span>
<span>10:00 - 14:00 (Apenas almoço)</span>
<span className="font-medium">Terça - Domingo</span>
<span>10:00 - 15:00 / 18:30 - 22:30</span>
</div>
</div>
</div>

<div className="flex gap-6">
<div className="w-12 h-12 rounded-full bg-white border border-stone-200 flex items-center justify-center shrink-0 text-stone-900">
<iconify-icon icon="lucide:mail" width="20"></iconify-icon>
</div>
<div>
<h3 className="font-semibold text-stone-900 text-lg mb-1">Email</h3>
<a className="text-stone-600 hover:text-stone-900 transition-colors" href="mailto:c.duarte.campia@sapo.pt">c.duarte.campia@sapo.pt</a>
</div>
</div>
</div>
</div>

<div className="bg-stone-200 relative h-64 lg:h-auto">

<img alt="Localização" className="absolute inset-0 w-full h-full object-cover grayscale opacity-60" src="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
<div className="absolute inset-0 flex items-center justify-center">
<a className="bg-white/90 backdrop-blur px-6 py-3 rounded-lg shadow-lg text-stone-900 font-medium hover:bg-white transition-colors flex items-center gap-2" href="https://maps.google.com/?q=Restaurante+O+Sacristão+Campia" target="_blank">
<iconify-icon icon="lucide:map" width="18"></iconify-icon>
                            Abrir no Google Maps
                        </a>
</div>
</div>
</div>
</div>
</main>

<footer className="bg-white border-t border-stone-200 py-8 px-6 mt-auto">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-stone-400">
<p>© 2024 Restaurante O Sacristão (Casa Duarte).</p>
<div className="flex gap-6">
<a className="hover:text-stone-900" href="#">Política de Privacidade</a>
<a className="hover:text-stone-900" href="#">Livro de Reclamações</a>
</div>
</div>
</footer>


    </>
  );
}
