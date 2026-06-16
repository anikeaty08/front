import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        lucide.createIcons({
            strokeWidth: 1.5
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
<i className="text-yellow-400 w-5 h-5" data-lucide="bird"></i>
</div>
<span className="text-2xl font-semibold tracking-tight text-gray-900">Aveluz</span>
</a>

<nav className="hidden md:flex items-center gap-8">
<a className="text-base font-medium text-gray-600 hover:text-gray-900 transition-colors" href="#produtos">Produtos</a>
<a className="text-base font-medium text-gray-600 hover:text-gray-900 transition-colors" href="#qualidade">Qualidade</a>
<a className="text-base font-medium text-gray-600 hover:text-gray-900 transition-colors" href="#distribuicao">Distribuição</a>
</nav>

<div className="flex items-center gap-4">
<a className="hidden md:block text-base font-medium text-gray-600 hover:text-gray-900 transition-colors" href="#">Entrar</a>
<a className="bg-red-600 text-white px-5 py-2.5 rounded-full text-base font-medium hover:bg-red-700 transition-colors shadow-sm shadow-red-600/20" href="#encomendar">
                    Fazer Encomenda
                </a>
</div>
</div>
</header>
<main className="pt-20">

<section className="relative overflow-hidden pt-24 pb-32">

<div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3">
<div className="w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl"></div>
</div>
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-50 border border-red-100 text-red-700 text-sm font-medium mb-8">
<i className="w-4 h-4" data-lucide="map-pin"></i>
                            Feito em Angola
                        </div>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-gray-900 leading-[1.1] mb-6">
                            Sabor autêntico, direto do <span className="text-red-600">campo</span> para a mesa.
                        </h1>
<p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed">
                            Produzimos frango inteiro de qualidade premium, criado com rigor e dedicação para alimentar as famílias angolanas com o melhor que a nossa terra tem para oferecer.
                        </p>
<div className="flex flex-col sm:flex-row items-center gap-4">
<a className="w-full sm:w-auto bg-red-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-red-700 transition-all shadow-sm shadow-red-600/20 text-center" href="#produtos">
                                Ver Produtos
                            </a>
<a className="w-full sm:w-auto px-8 py-4 rounded-full text-lg font-medium text-gray-700 hover:bg-gray-50 border border-gray-200 transition-all text-center flex items-center justify-center gap-2" href="#contacto">
                                Falar com Vendas
                                <i className="w-5 h-5" data-lucide="arrow-right"></i>
</a>
</div>
</div>

<div className="relative lg:h-[600px] flex items-center justify-center">
<div className="absolute inset-0 bg-gradient-to-br from-red-50 to-yellow-50 rounded-3xl border border-gray-100 shadow-xl shadow-gray-200/50 transform rotate-2"></div>
<div className="relative w-full max-w-md aspect-[4/5] bg-white rounded-2xl shadow-sm border border-gray-100 p-8 flex flex-col items-center justify-center transform -rotate-2 hover:rotate-0 transition-transform duration-500">

<div className="w-48 h-64 bg-gray-50 rounded-[40px] border border-gray-200 relative overflow-hidden flex flex-col items-center pt-8">
<div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mb-4 z-10 shadow-md">
<i className="text-yellow-400 w-8 h-8" data-lucide="bird"></i>
</div>
<div className="text-center z-10 bg-white/80 w-full py-4 backdrop-blur-sm mt-auto border-t border-gray-100">
<h3 className="text-xl font-semibold tracking-tight text-gray-900">Frango Inteiro</h3>
<p className="text-3xl font-semibold tracking-tight text-gray-900 mt-1">1Kg</p>
</div>

<div className="absolute top-0 w-full h-24 bg-gradient-to-b from-gray-200/50 to-transparent rounded-t-[40px]"></div>
</div>
<div className="mt-8 flex items-center gap-2 text-red-600 bg-red-50 px-4 py-2 rounded-full">
<i className="w-5 h-5" data-lucide="check-circle-2"></i>
<span className="text-base font-medium">Qualidade Garantida</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-50 border-y border-gray-100" id="qualidade">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-4">O compromisso Aveluz</h2>
<p className="text-lg text-gray-600">Trabalhamos diariamente para garantir os mais altos padrões de qualidade desde a criação até à entrega.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
<div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 text-red-600">
<i className="w-6 h-6" data-lucide="shield-check"></i>
</div>
<h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-3">Qualidade Premium</h3>
<p className="text-base text-gray-600 leading-relaxed">Aves criadas com rigoroso controlo sanitário e alimentação equilibrada para garantir a melhor carne.</p>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
<div className="w-12 h-12 bg-yellow-50 rounded-xl flex items-center justify-center mb-6 text-yellow-600">
<i className="w-6 h-6" data-lucide="sun"></i>
</div>
<h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-3">Produção Nacional</h3>
<p className="text-base text-gray-600 leading-relaxed">Orgulhosamente feito em Angola. Apoiamos a economia local e garantimos frescura reduzindo distâncias.</p>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
<div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-6 text-red-600">
<i className="w-6 h-6" data-lucide="snowflake"></i>
</div>
<h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-3">Cadeia de Frio</h3>
<p className="text-base text-gray-600 leading-relaxed">Conservação ideal garantida em todas as etapas, para que o produto chegue impecável ao seu destino.</p>
</div>
</div>
</div>
</section>

<section className="py-32" id="produtos">
<div className="max-w-7xl mx-auto px-6">
<div className="bg-gray-900 rounded-[2.5rem] overflow-hidden shadow-2xl">
<div className="grid lg:grid-cols-2 items-center">
<div className="p-12 md:p-16 lg:p-24">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-400/10 border border-yellow-400/20 text-yellow-400 text-sm font-medium mb-6">
                                Produto Estrela
                            </div>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-6">Frango Inteiro 1Kg</h2>
<p className="text-lg text-gray-300 mb-8 leading-relaxed">
                                A escolha perfeita para as refeições da sua família. Frango selecionado, embalado com os mais rigorosos padrões de higiene, mantendo todo o sabor e textura.
                            </p>
<ul className="space-y-4 mb-10">
<li className="flex items-center gap-3 text-base text-gray-300">
<i className="w-5 h-5 text-red-500" data-lucide="check"></i>
                                    Peso calibrado de 1Kg
                                </li>
<li className="flex items-center gap-3 text-base text-gray-300">
<i className="w-5 h-5 text-red-500" data-lucide="check"></i>
                                    Embalagem resistente e segura
                                </li>
<li className="flex items-center gap-3 text-base text-gray-300">
<i className="w-5 h-5 text-red-500" data-lucide="check"></i>
                                    Rastreabilidade total
                                </li>
</ul>
<button className="bg-white text-gray-900 px-8 py-4 rounded-full text-base font-medium hover:bg-gray-50 transition-colors w-full sm:w-auto text-center">
                                Solicitar Tabela de Preços
                            </button>
</div>

<div className="relative h-full min-h-[400px] bg-gradient-to-br from-gray-800 to-gray-900 p-12 flex items-center justify-center">
<div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>

<div className="relative z-10 flex items-end justify-center">

<div className="w-32 h-48 bg-white/90 rounded-[30px] shadow-2xl transform -rotate-6 translate-x-8 translate-y-4 flex flex-col items-center justify-center border border-white/20 backdrop-blur-sm opacity-80">
<div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center mb-2"><i className="text-yellow-400 w-5 h-5" data-lucide="bird"></i></div>
<span className="font-semibold text-gray-900">Aveluz</span>
</div>

<div className="w-40 h-56 bg-white rounded-[32px] shadow-2xl z-20 flex flex-col items-center pt-8 border border-gray-100">
<div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mb-2"><i className="text-yellow-400 w-6 h-6" data-lucide="bird"></i></div>
<span className="font-semibold text-xl tracking-tight text-gray-900 mb-4">Aveluz</span>
<div className="w-full bg-gray-50 py-3 text-center border-t border-gray-100 mt-auto rounded-b-[32px]">
<p className="font-medium text-gray-600 text-sm">Frango Inteiro</p>
<p className="font-semibold text-2xl tracking-tight text-gray-900">1Kg</p>
</div>
</div>

<div className="w-32 h-48 bg-white/90 rounded-[30px] shadow-2xl transform rotate-6 -translate-x-8 translate-y-4 flex flex-col items-center justify-center border border-white/20 backdrop-blur-sm opacity-80">
<div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center mb-2"><i className="text-yellow-400 w-5 h-5" data-lucide="bird"></i></div>
<span className="font-semibold text-gray-900">Aveluz</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white overflow-hidden" id="distribuicao">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div className="order-2 lg:order-1 relative">
<div className="absolute inset-0 bg-yellow-400/10 rounded-[3rem] transform -rotate-3 scale-105"></div>
<div className="relative bg-gradient-to-br from-red-600 to-red-700 rounded-[2.5rem] p-8 md:p-12 shadow-xl aspect-[4/3] flex flex-col justify-center overflow-hidden">

<div className="absolute top-0 right-0 w-3/4 h-full bg-yellow-400 transform skew-x-12 translate-x-20"></div>
<div className="relative z-10 flex items-center gap-6">
<div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg">
<div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center">
<i className="text-yellow-400 w-10 h-10" data-lucide="bird"></i>
</div>
</div>
<div>
<h3 className="text-5xl font-semibold tracking-tight text-white drop-shadow-md">Aveluz</h3>
</div>
</div>

<div className="absolute bottom-0 left-12 w-20 h-10 bg-gray-900 rounded-t-full"></div>
<div className="absolute bottom-0 right-24 w-20 h-10 bg-gray-900 rounded-t-full"></div>
</div>
</div>
<div className="order-1 lg:order-2">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-6">Distribuição rápida e eficiente.</h2>
<p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            A nossa frota de carrinhas especializadas e devidamente identificadas percorre o país para garantir que o Frango Aveluz chega ao seu destino com a máxima frescura e segurança alimentar.
                        </p>
<div className="grid sm:grid-cols-2 gap-6">
<div className="border border-gray-100 rounded-xl p-6 bg-gray-50">
<i className="w-8 h-8 text-red-600 mb-4" data-lucide="truck"></i>
<h4 className="text-lg font-medium text-gray-900 mb-2">Frota Própria</h4>
<p className="text-base text-gray-600">Veículos equipados para transporte refrigerado de alta qualidade.</p>
</div>
<div className="border border-gray-100 rounded-xl p-6 bg-gray-50">
<i className="w-8 h-8 text-red-600 mb-4" data-lucide="clock"></i>
<h4 className="text-lg font-medium text-gray-900 mb-2">Entregas Pontuais</h4>
<p className="text-base text-gray-600">Logística otimizada para abastecer o seu negócio a tempo e horas.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-50 border-t border-gray-100">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-6">Pronto para encomendar?</h2>
<p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
                    Contacte a nossa equipa comercial para obter condições especiais para revenda ou abastecimento do seu estabelecimento.
                </p>
<form className="max-w-md mx-auto flex flex-col gap-4">
<input className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-600/20 focus:border-red-600 transition-all text-base placeholder:text-gray-400" placeholder="O seu endereço de email" type="email"/>
<button className="w-full bg-red-600 text-white px-5 py-3 rounded-xl text-base font-medium hover:bg-red-700 transition-colors shadow-sm shadow-red-600/20" type="button">
                        Pedir Contacto
                    </button>
</form>
</div>
</section>
</main>

<footer className="bg-white border-t border-gray-100 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
<div className="col-span-2 lg:col-span-2">
<a className="flex items-center gap-2 mb-6" href="#">
<div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
<i className="text-yellow-400 w-4 h-4" data-lucide="bird"></i>
</div>
<span className="text-xl font-semibold tracking-tight text-gray-900">Aveluz</span>
</a>
<p className="text-base text-gray-600 max-w-sm">
                        O melhor frango de Angola, criado com dedicação para a sua mesa. Qualidade e frescura garantidas.
                    </p>
</div>
<div>
<h4 className="font-semibold text-gray-900 mb-4">Empresa</h4>
<ul className="space-y-3">
<li><a className="text-base text-gray-600 hover:text-red-600 transition-colors" href="#">Sobre Nós</a></li>
<li><a className="text-base text-gray-600 hover:text-red-600 transition-colors" href="#">A Nossa Quinta</a></li>
<li><a className="text-base text-gray-600 hover:text-red-600 transition-colors" href="#">Carreiras</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-gray-900 mb-4">Produtos</h4>
<ul className="space-y-3">
<li><a className="text-base text-gray-600 hover:text-red-600 transition-colors" href="#">Frango Inteiro</a></li>
<li><a className="text-base text-gray-600 hover:text-red-600 transition-colors" href="#">Revenda</a></li>
<li><a className="text-base text-gray-600 hover:text-red-600 transition-colors" href="#">Qualidade</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-gray-900 mb-4">Contacto</h4>
<ul className="space-y-3">
<li className="flex items-center gap-2 text-base text-gray-600">
<i className="w-4 h-4" data-lucide="mail"></i>
                            geral@aveluz.co.ao
                        </li>
<li className="flex items-center gap-2 text-base text-gray-600">
<i className="w-4 h-4" data-lucide="phone"></i>
                            +244 900 000 000
                        </li>
</ul>
</div>
</div>
<div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-sm text-gray-500">
                    © 2024 Aveluz. Todos os direitos reservados. Feito em Angola.
                </p>
<div className="flex items-center gap-6">
<a className="text-gray-400 hover:text-gray-600 transition-colors" href="#">
<span className="sr-only">Facebook</span>
<i className="w-5 h-5" data-lucide="facebook"></i>
</a>
<a className="text-gray-400 hover:text-gray-600 transition-colors" href="#">
<span className="sr-only">Instagram</span>
<i className="w-5 h-5" data-lucide="instagram"></i>
</a>
</div>
</div>
</div>
</footer>




    </>
  );
}
