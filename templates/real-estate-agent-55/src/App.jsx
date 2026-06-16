import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Mobile Menu Toggle
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const mobileMenu = document.getElementById('mobileMenu');
        
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Filter Functionality
        const filterNegocio = document.getElementById('filterNegocio');
        const filterLocalizacao = document.getElementById('filterLocalizacao');
        const filterTipo = document.getElementById('filterTipo');
        const filterQuartos = document.getElementById('filterQuartos');
        const btnBuscar = document.getElementById('btnBuscar');
        const btnLimparFiltros = document.getElementById('btnLimparFiltros');
        const btnLimparFiltrosEmpty = document.getElementById('btnLimparFiltrosEmpty');
        const propertyGrid = document.getElementById('propertyGrid');
        const noResults = document.getElementById('noResults');
        const resultsCount = document.getElementById('resultsCount');
        const pagination = document.getElementById('pagination');

        const propertyCards = document.querySelectorAll('.property-card');
        let filteredCards = [...propertyCards];
        let currentPage = 1;
        const itemsPerPage = 3;

        function applyFilters() {
            const negocio = filterNegocio.value;
            const localizacao = filterLocalizacao.value;
            const tipo = filterTipo.value;
            const quartos = filterQuartos.value;

            filteredCards = [...propertyCards].filter(card => {
                const cardNegocio = card.dataset.negocio;
                const cardLocalizacao = card.dataset.localizacao;
                const cardTipo = card.dataset.tipo;
                const cardQuartos = parseInt(card.dataset.quartos);

                const matchNegocio = !negocio || cardNegocio === negocio;
                const matchLocalizacao = !localizacao || cardLocalizacao === localizacao;
                const matchTipo = !tipo || cardTipo === tipo;
                const matchQuartos = !quartos || cardQuartos >= parseInt(quartos);

                return matchNegocio && matchLocalizacao && matchTipo && matchQuartos;
            });

            currentPage = 1;
            renderProperties();
            updateUI();
        }

        function renderProperties() {
            // Hide all cards first
            propertyCards.forEach(card => {
                card.classList.add('hidden');
            });

            // Calculate pagination
            const startIndex = (currentPage - 1) * itemsPerPage;
            const endIndex = startIndex + itemsPerPage;
            const cardsToShow = filteredCards.slice(startIndex, endIndex);

            // Show filtered cards for current page
            cardsToShow.forEach(card => {
                card.classList.remove('hidden');
            });

            // Update results count
            resultsCount.textContent = filteredCards.length;

            // Show/hide no results message
            if (filteredCards.length === 0) {
                noResults.classList.remove('hidden');
                pagination.classList.add('hidden');
            } else {
                noResults.classList.add('hidden');
                pagination.classList.remove('hidden');
            }

            // Update pagination
            updatePagination();
        }

        function updatePagination() {
            const totalPages = Math.ceil(filteredCards.length / itemsPerPage);
            const pageNumbers = document.getElementById('pageNumbers');
            
            // Clear existing page buttons
            pageNumbers.innerHTML = '';

            // Create page buttons
            for (let i = 1; i <= totalPages; i++) {
                const btn = document.createElement('button');
                btn.className = `page-btn px-4 py-2 border-t border-b border-zinc-200 text-sm font-medium transition-colors ${
                    i === currentPage 
                        ? 'bg-zinc-900 text-white' 
                        : 'bg-white text-zinc-500 hover:bg-zinc-50'
                }`;
                if (i < totalPages) {
                    btn.classList.add('border-r');
                }
                btn.dataset.page = i;
                btn.textContent = i;
                btn.addEventListener('click', () => goToPage(i));
                pageNumbers.appendChild(btn);
            }

            // Update prev/next buttons
            const btnAnterior = document.getElementById('btnAnterior');
            const btnProximo = document.getElementById('btnProximo');

            btnAnterior.disabled = currentPage === 1;
            btnProximo.disabled = currentPage === totalPages || totalPages === 0;
        }

        function goToPage(page) {
            currentPage = page;
            renderProperties();
            
            // Scroll to properties section
            document.getElementById('imoveis').scrollIntoView({ behavior: 'smooth', block: 'start' });
        }

        function updateUI() {
            const hasFilters = filterNegocio.value || filterLocalizacao.value || filterTipo.value || filterQuartos.value;
            
            if (hasFilters) {
                btnLimparFiltros.classList.remove('hidden');
            } else {
                btnLimparFiltros.classList.add('hidden');
            }
        }

        function clearFilters() {
            filterNegocio.value = '';
            filterLocalizacao.value = '';
            filterTipo.value = '';
            filterQuartos.value = '';
            filteredCards = [...propertyCards];
            currentPage = 1;
            renderProperties();
            updateUI();
        }

        // Event Listeners
        btnBuscar.addEventListener('click', applyFilters);
        btnLimparFiltros.addEventListener('click', clearFilters);
        btnLimparFiltrosEmpty.addEventListener('click', clearFilters);

        document.getElementById('btnAnterior').addEventListener('click', () => {
            if (currentPage > 1) {
                goToPage(currentPage - 1);
            }
        });

        document.getElementById('btnProximo').addEventListener('click', () => {
            const totalPages = Math.ceil(filteredCards.length / itemsPerPage);
            if (currentPage < totalPages) {
                goToPage(currentPage + 1);
            }
        });

        // Also filter on Enter key in any filter
        [filterNegocio, filterLocalizacao, filterTipo, filterQuartos].forEach(filter => {
            filter.addEventListener('change', applyFilters);
        });

        // Initialize
        renderProperties();
        updateUI();

        // Contact form submission
        document.getElementById('contactForm').addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-zinc-200/60">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-lg font-medium tracking-tighter text-zinc-900 uppercase" href="#">
                Valquiria<span className="text-zinc-400">Oliver</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-600">
<a className="hover:text-zinc-900 transition-colors" href="#imoveis">Imóveis</a>
<a className="hover:text-zinc-900 transition-colors" href="#sobre">Sobre</a>
<a className="hover:text-zinc-900 transition-colors" href="#blog">Blog</a>
<a className="px-4 py-2 bg-zinc-900 text-white rounded-full hover:bg-zinc-800 transition-colors" href="#contato">
                    Fale com Valquíria
                </a>
</div>
<button className="md:hidden text-zinc-900" id="mobileMenuBtn">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>

<div className="hidden md:hidden bg-white border-t border-zinc-100 px-6 py-4" id="mobileMenu">
<div className="flex flex-col gap-4 text-sm font-medium text-zinc-600">
<a className="hover:text-zinc-900 transition-colors py-2" href="#imoveis">Imóveis</a>
<a className="hover:text-zinc-900 transition-colors py-2" href="#sobre">Sobre</a>
<a className="hover:text-zinc-900 transition-colors py-2" href="#blog">Blog</a>
<a className="px-4 py-2 bg-zinc-900 text-white rounded-full hover:bg-zinc-800 transition-colors text-center" href="#contato">
                    Fale com Valquíria
                </a>
</div>
</div>
</nav>

<header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 overflow-hidden">
<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
<div className="space-y-8 relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-xs font-medium text-zinc-600">
<span className="w-2 h-2 rounded-full bg-green-500"></span>
                    Especialista em Londrina, PR
                </div>
<h1 className="text-5xl lg:text-6xl font-medium tracking-tight text-zinc-900 leading-[1.1]">
                    Encontre o imóvel dos<br/>seus sonhos hoje.
                </h1>
<p className="text-lg text-zinc-500 max-w-md leading-relaxed">
                    Bem-vindo ao site de Valquíria Oliver. Transparência e confiança para você comprar, vender ou alugar em Londrina.
                </p>
<div className="flex flex-col sm:flex-row gap-4 pt-2">
<a className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-zinc-900 text-white font-medium rounded-lg hover:bg-zinc-800 transition-all hover:shadow-lg hover:shadow-zinc-200/50" href="#imoveis">
                        Encontre seu imóvel agora
                        <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
<a className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white border border-zinc-200 text-zinc-700 font-medium rounded-lg hover:bg-zinc-50 transition-colors" href="#contato">
                        Fale com Valquíria
                    </a>
</div>
</div>
<div className="relative">
<div className="absolute inset-0 bg-gradient-to-tr from-zinc-50 to-transparent z-10"></div>
<img alt="Interior moderno" className="rounded-2xl shadow-2xl shadow-zinc-200 grayscale-[20%] object-cover h-[500px] w-full" src="https://images.unsplash.com/photo-1600596542815-27bfef402399?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute -bottom-6 -left-6 z-20 bg-white p-4 rounded-xl shadow-xl border border-zinc-100 hidden md:block">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-900">
<iconify-icon icon="solar:home-smile-linear" width="24"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-zinc-900">Novos Imóveis</p>
<p className="text-xs text-zinc-500">+15 essa semana</p>
</div>
</div>
</div>
</div>
</div>
</header>

<section className="py-20 px-6 bg-white border-t border-zinc-200" id="imoveis">
<div className="max-w-7xl mx-auto space-y-12">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
<div>
<h2 className="text-3xl font-medium tracking-tight text-zinc-900">Imóveis em Destaque</h2>
<p className="mt-2 text-zinc-500">Selecione as melhores opções para você e sua família.</p>
</div>

<div className="w-full md:w-auto p-1.5 bg-zinc-50 border border-zinc-200 rounded-xl flex flex-col md:flex-row gap-2">
<div className="relative group">
<select className="appearance-none bg-white pl-4 pr-10 py-2.5 rounded-lg border border-zinc-200 text-sm focus:outline-none focus:border-zinc-400 w-full md:w-36 text-zinc-700 cursor-pointer" id="filterNegocio">
<option value="">Negócio</option>
<option value="venda">Venda</option>
<option value="aluguel">Aluguel</option>
</select>
<iconify-icon className="absolute right-3 top-3 text-zinc-400 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<div className="relative group">
<select className="appearance-none bg-white pl-4 pr-10 py-2.5 rounded-lg border border-zinc-200 text-sm focus:outline-none focus:border-zinc-400 w-full md:w-40 text-zinc-700 cursor-pointer" id="filterLocalizacao">
<option value="">Localização</option>
<option value="gleba-palhano">Gleba Palhano</option>
<option value="centro">Centro</option>
<option value="jardim-botanico">Jardim Botânico</option>
</select>
<iconify-icon className="absolute right-3 top-3 text-zinc-400 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<div className="relative group">
<select className="appearance-none bg-white pl-4 pr-10 py-2.5 rounded-lg border border-zinc-200 text-sm focus:outline-none focus:border-zinc-400 w-full md:w-40 text-zinc-700 cursor-pointer" id="filterTipo">
<option value="">Tipo</option>
<option value="apartamento">Apartamento</option>
<option value="casa">Casa</option>
<option value="terreno">Terreno</option>
</select>
<iconify-icon className="absolute right-3 top-3 text-zinc-400 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<div className="relative group">
<select className="appearance-none bg-white pl-4 pr-10 py-2.5 rounded-lg border border-zinc-200 text-sm focus:outline-none focus:border-zinc-400 w-full md:w-32 text-zinc-700 cursor-pointer" id="filterQuartos">
<option value="">Quartos</option>
<option value="2">2+</option>
<option value="3">3+</option>
<option value="4">4+</option>
</select>
<iconify-icon className="absolute right-3 top-3 text-zinc-400 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<button className="bg-zinc-900 hover:bg-zinc-800 text-white px-6 py-2.5 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2" id="btnBuscar">
<iconify-icon icon="solar:magnifer-linear" width="16"></iconify-icon>
                        Buscar
                    </button>
</div>
</div>

<div className="flex items-center justify-between" id="resultsInfo">
<p className="text-sm text-zinc-500"><span id="resultsCount">6</span> imóveis encontrados</p>
<button className="text-sm text-zinc-500 hover:text-zinc-900 flex items-center gap-1 hidden" id="btnLimparFiltros">
<iconify-icon icon="solar:close-circle-linear" width="16"></iconify-icon>
                    Limpar filtros
                </button>
</div>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" id="propertyGrid">

<article className="property-card group bg-white rounded-xl border border-zinc-200 overflow-hidden hover:shadow-lg hover:shadow-zinc-200/50 transition-all duration-300" data-localizacao="gleba-palhano" data-negocio="venda" data-quartos="3" data-tipo="apartamento">
<div className="relative aspect-[4/3] overflow-hidden bg-zinc-100">
<img alt="Casa Alto Padrão" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&amp;w=2053&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-md text-xs font-medium text-zinc-900 border border-white/20">Venda</div>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-4">
<div>
<h3 className="font-medium text-zinc-900 text-lg">Residencial Aurora</h3>
<p className="text-sm text-zinc-500">Gleba Palhano, Londrina</p>
</div>
<p className="font-semibold text-zinc-900">R$ 1.250.000</p>
</div>
<div className="flex items-center gap-4 py-4 border-t border-zinc-100 text-zinc-500 text-sm">
<div className="flex items-center gap-1.5">
<iconify-icon icon="solar:bed-linear"></iconify-icon> 3
                            </div>
<div className="flex items-center gap-1.5">
<iconify-icon icon="solar:bath-linear"></iconify-icon> 2
                            </div>
<div className="flex items-center gap-1.5">
<iconify-icon icon="solar:ruler-linear"></iconify-icon> 145m²
                            </div>
</div>
<a className="block w-full text-center py-2.5 rounded-lg border border-zinc-200 text-sm font-medium text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900 transition-colors mt-2" href="#detalhes">
                            Ver Detalhes
                        </a>
</div>
</article>

<article className="property-card group bg-white rounded-xl border border-zinc-200 overflow-hidden hover:shadow-lg hover:shadow-zinc-200/50 transition-all duration-300" data-localizacao="centro" data-negocio="venda" data-quartos="2" data-tipo="apartamento">
<div className="relative aspect-[4/3] overflow-hidden bg-zinc-100">
<img alt="Apartamento Moderno" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-md text-xs font-medium text-zinc-900 border border-white/20">Venda</div>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-4">
<div>
<h3 className="font-medium text-zinc-900 text-lg">Edifício Horizon</h3>
<p className="text-sm text-zinc-500">Centro, Londrina</p>
</div>
<p className="font-semibold text-zinc-900">R$ 890.000</p>
</div>
<div className="flex items-center gap-4 py-4 border-t border-zinc-100 text-zinc-500 text-sm">
<div className="flex items-center gap-1.5">
<iconify-icon icon="solar:bed-linear"></iconify-icon> 2
                            </div>
<div className="flex items-center gap-1.5">
<iconify-icon icon="solar:bath-linear"></iconify-icon> 2
                            </div>
<div className="flex items-center gap-1.5">
<iconify-icon icon="solar:ruler-linear"></iconify-icon> 98m²
                            </div>
</div>
<a className="block w-full text-center py-2.5 rounded-lg border border-zinc-200 text-sm font-medium text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900 transition-colors mt-2" href="#detalhes">
                            Ver Detalhes
                        </a>
</div>
</article>

<article className="property-card group bg-white rounded-xl border border-zinc-200 overflow-hidden hover:shadow-lg hover:shadow-zinc-200/50 transition-all duration-300" data-localizacao="jardim-botanico" data-negocio="aluguel" data-quartos="4" data-tipo="casa">
<div className="relative aspect-[4/3] overflow-hidden bg-zinc-100">
<img alt="Casa Jardim" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&amp;w=2071&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 bg-emerald-500/90 backdrop-blur px-3 py-1 rounded-md text-xs font-medium text-white border border-white/20">Aluguel</div>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-4">
<div>
<h3 className="font-medium text-zinc-900 text-lg">Casa Bella Vista</h3>
<p className="text-sm text-zinc-500">Jardim Botânico</p>
</div>
<p className="font-semibold text-zinc-900">R$ 4.500<span className="text-xs font-normal text-zinc-400">/mês</span></p>
</div>
<div className="flex items-center gap-4 py-4 border-t border-zinc-100 text-zinc-500 text-sm">
<div className="flex items-center gap-1.5">
<iconify-icon icon="solar:bed-linear"></iconify-icon> 4
                            </div>
<div className="flex items-center gap-1.5">
<iconify-icon icon="solar:bath-linear"></iconify-icon> 3
                            </div>
<div className="flex items-center gap-1.5">
<iconify-icon icon="solar:ruler-linear"></iconify-icon> 210m²
                            </div>
</div>
<a className="block w-full text-center py-2.5 rounded-lg border border-zinc-200 text-sm font-medium text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900 transition-colors mt-2" href="#detalhes">
                            Ver Detalhes
                        </a>
</div>
</article>

<article className="property-card group bg-white rounded-xl border border-zinc-200 overflow-hidden hover:shadow-lg hover:shadow-zinc-200/50 transition-all duration-300" data-localizacao="gleba-palhano" data-negocio="venda" data-quartos="4" data-tipo="casa">
<div className="relative aspect-[4/3] overflow-hidden bg-zinc-100">
<img alt="Casa Moderna" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-md text-xs font-medium text-zinc-900 border border-white/20">Venda</div>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-4">
<div>
<h3 className="font-medium text-zinc-900 text-lg">Villa Serena</h3>
<p className="text-sm text-zinc-500">Gleba Palhano, Londrina</p>
</div>
<p className="font-semibold text-zinc-900">R$ 2.100.000</p>
</div>
<div className="flex items-center gap-4 py-4 border-t border-zinc-100 text-zinc-500 text-sm">
<div className="flex items-center gap-1.5">
<iconify-icon icon="solar:bed-linear"></iconify-icon> 4
                            </div>
<div className="flex items-center gap-1.5">
<iconify-icon icon="solar:bath-linear"></iconify-icon> 4
                            </div>
<div className="flex items-center gap-1.5">
<iconify-icon icon="solar:ruler-linear"></iconify-icon> 320m²
                            </div>
</div>
<a className="block w-full text-center py-2.5 rounded-lg border border-zinc-200 text-sm font-medium text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900 transition-colors mt-2" href="#detalhes">
                            Ver Detalhes
                        </a>
</div>
</article>

<article className="property-card group bg-white rounded-xl border border-zinc-200 overflow-hidden hover:shadow-lg hover:shadow-zinc-200/50 transition-all duration-300" data-localizacao="centro" data-negocio="aluguel" data-quartos="3" data-tipo="apartamento">
<div className="relative aspect-[4/3] overflow-hidden bg-zinc-100">
<img alt="Apartamento Centro" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&amp;w=2080&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 bg-emerald-500/90 backdrop-blur px-3 py-1 rounded-md text-xs font-medium text-white border border-white/20">Aluguel</div>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-4">
<div>
<h3 className="font-medium text-zinc-900 text-lg">Flat Premium Centro</h3>
<p className="text-sm text-zinc-500">Centro, Londrina</p>
</div>
<p className="font-semibold text-zinc-900">R$ 3.200<span className="text-xs font-normal text-zinc-400">/mês</span></p>
</div>
<div className="flex items-center gap-4 py-4 border-t border-zinc-100 text-zinc-500 text-sm">
<div className="flex items-center gap-1.5">
<iconify-icon icon="solar:bed-linear"></iconify-icon> 3
                            </div>
<div className="flex items-center gap-1.5">
<iconify-icon icon="solar:bath-linear"></iconify-icon> 2
                            </div>
<div className="flex items-center gap-1.5">
<iconify-icon icon="solar:ruler-linear"></iconify-icon> 120m²
                            </div>
</div>
<a className="block w-full text-center py-2.5 rounded-lg border border-zinc-200 text-sm font-medium text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900 transition-colors mt-2" href="#detalhes">
                            Ver Detalhes
                        </a>
</div>
</article>

<article className="property-card group bg-white rounded-xl border border-zinc-200 overflow-hidden hover:shadow-lg hover:shadow-zinc-200/50 transition-all duration-300" data-localizacao="jardim-botanico" data-negocio="venda" data-quartos="0" data-tipo="terreno">
<div className="relative aspect-[4/3] overflow-hidden bg-zinc-100">
<img alt="Terreno" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&amp;w=2032&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-md text-xs font-medium text-zinc-900 border border-white/20">Venda</div>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-4">
<div>
<h3 className="font-medium text-zinc-900 text-lg">Terreno Jardim Botânico</h3>
<p className="text-sm text-zinc-500">Jardim Botânico</p>
</div>
<p className="font-semibold text-zinc-900">R$ 450.000</p>
</div>
<div className="flex items-center gap-4 py-4 border-t border-zinc-100 text-zinc-500 text-sm">
<div className="flex items-center gap-1.5">
<iconify-icon icon="solar:ruler-linear"></iconify-icon> 500m²
                            </div>
<div className="flex items-center gap-1.5">
<iconify-icon icon="solar:streets-map-point-linear"></iconify-icon> Esquina
                            </div>
</div>
<a className="block w-full text-center py-2.5 rounded-lg border border-zinc-200 text-sm font-medium text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900 transition-colors mt-2" href="#detalhes">
                            Ver Detalhes
                        </a>
</div>
</article>
</div>

<div className="hidden text-center py-16" id="noResults">
<iconify-icon className="text-zinc-300" icon="solar:home-smile-linear" width="64"></iconify-icon>
<h3 className="text-xl font-medium text-zinc-900 mt-4">Nenhum imóvel encontrado</h3>
<p className="text-zinc-500 mt-2">Tente ajustar os filtros para encontrar mais opções.</p>
<button className="mt-4 px-4 py-2 bg-zinc-900 text-white rounded-lg text-sm font-medium hover:bg-zinc-800 transition-colors" id="btnLimparFiltrosEmpty">
                    Limpar filtros
                </button>
</div>

<div className="flex justify-center pt-8" id="pagination">
<nav className="inline-flex rounded-md shadow-sm">
<button className="px-4 py-2 border border-zinc-200 rounded-l-lg bg-white text-sm font-medium text-zinc-500 hover:bg-zinc-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors" id="btnAnterior">Anterior</button>
<div className="flex" id="pageNumbers">
<button className="page-btn px-4 py-2 border-t border-b border-zinc-200 bg-zinc-900 text-sm font-medium text-white" data-page="1">1</button>
<button className="page-btn px-4 py-2 border-t border-b border-r border-zinc-200 bg-white text-sm font-medium text-zinc-500 hover:bg-zinc-50" data-page="2">2</button>
</div>
<button className="px-4 py-2 border border-zinc-200 rounded-r-lg bg-white text-sm font-medium text-zinc-500 hover:bg-zinc-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors" id="btnProximo">Próximo</button>
</nav>
</div>
</div>
</section>

<section className="py-20 px-6 bg-zinc-50" id="detalhes">
<div className="max-w-6xl mx-auto">
<div className="mb-8">
<div className="inline-flex items-center gap-2 text-sm text-zinc-400 mb-4">
<span>Imóveis</span>
<iconify-icon icon="solar:alt-arrow-right-linear" width="12"></iconify-icon>
<span>Venda</span>
<iconify-icon icon="solar:alt-arrow-right-linear" width="12"></iconify-icon>
<span className="text-zinc-900 font-medium">Residencial Aurora</span>
</div>
<div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
<div>
<h2 className="text-3xl font-medium tracking-tight text-zinc-900">Residencial Aurora - Cobertura</h2>
<p className="text-zinc-500 mt-1 flex items-center gap-1"><iconify-icon icon="solar:map-point-linear"></iconify-icon> Gleba Palhano, Londrina - PR</p>
</div>
<div className="text-left md:text-right">
<p className="text-3xl font-semibold text-zinc-900">R$ 1.250.000</p>
<span className="inline-block mt-1 px-2 py-0.5 bg-green-100 text-green-700 text-xs font-medium rounded-full">Disponível</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-[500px] mb-10">
<div className="md:col-span-2 md:row-span-2 rounded-xl overflow-hidden">
<img className="object-cover w-full h-full hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&amp;w=2053&amp;auto=format&amp;fit=crop"/>
</div>
<div className="rounded-xl overflow-hidden">
<img className="object-cover w-full h-full hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1584622050111-993a426fbf0a?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="rounded-xl overflow-hidden">
<img className="object-cover w-full h-full hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="rounded-xl overflow-hidden">
<img className="object-cover w-full h-full hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="rounded-xl overflow-hidden relative">
<img className="object-cover w-full h-full hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/50 flex items-center justify-center text-white font-medium cursor-pointer backdrop-blur-[1px] hover:backdrop-blur-none transition-all">
                        +8 Fotos
                    </div>
</div>
</div>
<div className="grid md:grid-cols-3 gap-12">
<div className="md:col-span-2 space-y-8">
<div>
<h3 className="text-xl font-medium text-zinc-900 mb-4">Sobre o imóvel</h3>
<p className="text-zinc-600 leading-relaxed">
                            Espetacular cobertura na região mais valorizada de Londrina. Com acabamentos de alto padrão, vista panorâmica da cidade e área de lazer privativa. O imóvel conta com ambientes integrados, excelente iluminação natural e móveis planejados em todos os cômodos. Ideal para quem busca conforto e sofisticação.
                        </p>
</div>
<div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
<div className="p-4 rounded-lg bg-white border border-zinc-200">
<iconify-icon className="text-zinc-900 mb-2" icon="solar:ruler-linear" width="24"></iconify-icon>
<p className="text-xs text-zinc-500">Área Total</p>
<p className="font-medium text-zinc-900">145m²</p>
</div>
<div className="p-4 rounded-lg bg-white border border-zinc-200">
<iconify-icon className="text-zinc-900 mb-2" icon="solar:bed-linear" width="24"></iconify-icon>
<p className="text-xs text-zinc-500">Quartos</p>
<p className="font-medium text-zinc-900">3 Suítes</p>
</div>
<div className="p-4 rounded-lg bg-white border border-zinc-200">
<iconify-icon className="text-zinc-900 mb-2" icon="solar:bath-linear" width="24"></iconify-icon>
<p className="text-xs text-zinc-500">Banheiros</p>
<p className="font-medium text-zinc-900">4</p>
</div>
<div className="p-4 rounded-lg bg-white border border-zinc-200">
<iconify-icon className="text-zinc-900 mb-2" icon="solar:garage-linear" width="24"></iconify-icon>
<p className="text-xs text-zinc-500">Vagas</p>
<p className="font-medium text-zinc-900">2 Cobertas</p>
</div>
</div>
</div>

<div className="md:col-span-1">
<div className="bg-white p-6 rounded-xl border border-zinc-200 sticky top-24">
<div className="flex items-center gap-4 mb-6">
<img alt="Valquíria Oliver" className="w-16 h-16 rounded-full object-cover border border-zinc-100" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&amp;w=1976&amp;auto=format&amp;fit=crop"/>
<div>
<p className="font-medium text-zinc-900">Valquíria Oliver</p>
<a className="text-sm text-zinc-500 hover:text-zinc-900" href="#">Ver perfil completo</a>
</div>
</div>
<div className="space-y-3">
<a className="flex items-center justify-center gap-2 w-full bg-zinc-900 text-white py-3 rounded-lg font-medium hover:bg-zinc-800 transition-colors" href="#contato">
                                Agendar Visita
                            </a>
<a className="flex items-center justify-center gap-2 w-full bg-white border border-zinc-200 text-zinc-700 py-3 rounded-lg font-medium hover:bg-zinc-50 transition-colors" href="#contato">
<iconify-icon icon="solar:chat-round-dots-linear"></iconify-icon>
                                Fale com Valquíria
                            </a>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white border-t border-zinc-200" id="sobre">
<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
<div className="relative order-2 lg:order-1">
<div className="absolute -top-4 -left-4 w-24 h-24 bg-zinc-100 rounded-full z-0"></div>
<img alt="Valquíria Oliver" className="relative z-10 rounded-2xl grayscale-[10%] object-cover h-[600px] w-full shadow-xl" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&amp;w=1976&amp;auto=format&amp;fit=crop"/>
</div>
<div className="order-1 lg:order-2 space-y-8">
<h2 className="text-4xl font-medium tracking-tight text-zinc-900">Experiência que gera confiança em Londrina.</h2>
<div className="space-y-4 text-zinc-600 leading-relaxed">
<p>
                        Valquíria Oliver é uma agente imobiliária com anos de experiência no mercado de Londrina. Seu compromisso é ajudar você a encontrar o imóvel perfeito para suas necessidades, com total transparência e segurança jurídica.
                    </p>
<p>
                        Especialista em negociações complexas e com um profundo conhecimento dos bairros da cidade, Valquíria transforma o processo de compra e venda em uma experiência tranquila e satisfatória.
                    </p>
</div>

<div className="pt-8 border-t border-zinc-100">
<h3 className="text-sm font-semibold text-zinc-900 uppercase tracking-wider mb-6">O que dizem os clientes</h3>
<div className="grid sm:grid-cols-2 gap-6">
<div className="bg-zinc-50 p-4 rounded-lg">
<p className="text-sm italic text-zinc-600 mb-3">"A Valquíria encontrou exatamente o que procurávamos na Gleba Palhano. Atendimento impecável."</p>
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-zinc-300 rounded-full overflow-hidden">
<img className="object-cover w-full h-full" src="https://randomuser.me/api/portraits/men/32.jpg"/>
</div>
<span className="text-xs font-medium text-zinc-900">Ricardo M.</span>
</div>
</div>
<div className="bg-zinc-50 p-4 rounded-lg">
<p className="text-sm italic text-zinc-600 mb-3">"Profissionalismo do início ao fim. Vendeu meu apartamento em tempo recorde."</p>
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-zinc-300 rounded-full overflow-hidden">
<img className="object-cover w-full h-full" src="https://randomuser.me/api/portraits/women/44.jpg"/>
</div>
<span className="text-xs font-medium text-zinc-900">Ana Paula S.</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 bg-zinc-50" id="blog">
<div className="max-w-7xl mx-auto">
<div className="flex justify-between items-end mb-10">
<h2 className="text-3xl font-medium tracking-tight text-zinc-900">Notícias do Mercado</h2>
<a className="text-sm font-medium text-zinc-900 hover:text-zinc-600 flex items-center gap-1" href="#">Ver todos <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></a>
</div>
<div className="grid md:grid-cols-3 gap-8">

<article className="bg-white rounded-xl border border-zinc-200 overflow-hidden group">
<div className="h-48 overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&amp;w=2073&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-6">
<span className="text-xs font-medium text-blue-600 mb-2 block">Mercado</span>
<h3 className="text-lg font-medium text-zinc-900 mb-2">Valorização imobiliária em Londrina em 2026</h3>
<p className="text-sm text-zinc-500 line-clamp-2 mb-4">Entenda os motivos que fazem da cidade um dos melhores investimentos do Paraná atualmente.</p>
<div className="flex items-center justify-between pt-4 border-t border-zinc-100">
<a className="text-sm font-medium text-zinc-900 hover:underline" href="#">Ler mais</a>
<button className="text-zinc-400 hover:text-zinc-900"><iconify-icon icon="solar:share-linear" width="18"></iconify-icon></button>
</div>
</div>
</article>

<article className="bg-white rounded-xl border border-zinc-200 overflow-hidden group">
<div className="h-48 overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&amp;w=2031&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-6">
<span className="text-xs font-medium text-blue-600 mb-2 block">Dicas</span>
<h3 className="text-lg font-medium text-zinc-900 mb-2">5 Dicas para financiar seu primeiro imóvel</h3>
<p className="text-sm text-zinc-500 line-clamp-2 mb-4">O passo a passo completo para conseguir as melhores taxas de juros no seu financiamento.</p>
<div className="flex items-center justify-between pt-4 border-t border-zinc-100">
<a className="text-sm font-medium text-zinc-900 hover:underline" href="#">Ler mais</a>
<button className="text-zinc-400 hover:text-zinc-900"><iconify-icon icon="solar:share-linear" width="18"></iconify-icon></button>
</div>
</div>
</article>

<article className="bg-white rounded-xl border border-zinc-200 overflow-hidden group">
<div className="h-48 overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-6">
<span className="text-xs font-medium text-blue-600 mb-2 block">Bairros</span>
<h3 className="text-lg font-medium text-zinc-900 mb-2">Por que morar na Gleba Palhano?</h3>
<p className="text-sm text-zinc-500 line-clamp-2 mb-4">Descubra as vantagens de viver no bairro mais moderno e desejado da cidade.</p>
<div className="flex items-center justify-between pt-4 border-t border-zinc-100">
<a className="text-sm font-medium text-zinc-900 hover:underline" href="#">Ler mais</a>
<button className="text-zinc-400 hover:text-zinc-900"><iconify-icon icon="solar:share-linear" width="18"></iconify-icon></button>
</div>
</div>
</article>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white border-t border-zinc-200" id="contato">
<div className="max-w-4xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl font-medium tracking-tight text-zinc-900">Vamos conversar?</h2>
<p className="text-zinc-500 mt-4">Entre em contato para agendar uma visita ou tirar suas dúvidas.</p>
</div>
<div className="grid md:grid-cols-2 gap-12">

<div className="space-y-8">
<div>
<h3 className="text-lg font-medium text-zinc-900 mb-4">Informações de Contato</h3>
<div className="space-y-4">
<div className="flex items-start gap-3">
<div className="w-10 h-10 rounded-full bg-zinc-50 flex items-center justify-center text-zinc-900 border border-zinc-200">
<iconify-icon icon="solar:map-point-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-zinc-900">Endereço</p>
<p className="text-sm text-zinc-500">Av. Ayrton Senna, 500<br/>Gleba Palhano, Londrina - PR</p>
</div>
</div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-zinc-50 flex items-center justify-center text-zinc-900 border border-zinc-200">
<iconify-icon icon="solar:phone-calling-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-zinc-900">Telefone</p>
<p className="text-sm text-zinc-500">(43) 99999-9999</p>
</div>
</div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-zinc-50 flex items-center justify-center text-zinc-900 border border-zinc-200">
<iconify-icon icon="solar:letter-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-zinc-900">Email</p>
<p className="text-sm text-zinc-500">contato@valquiriaoliver.com.br</p>
</div>
</div>
</div>
</div>
<div>
<h3 className="text-lg font-medium text-zinc-900 mb-4">Redes Sociais</h3>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-500 hover:text-zinc-900 hover:border-zinc-900 transition-colors" href="#">
<iconify-icon icon="logos:instagram-icon" style={{filter: 'grayscale(100%)'}} width="18"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-500 hover:text-zinc-900 hover:border-zinc-900 transition-colors" href="#">
<iconify-icon icon="logos:facebook" style={{filter: 'grayscale(100%)'}} width="18"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-500 hover:text-zinc-900 hover:border-zinc-900 transition-colors" href="#">
<iconify-icon icon="logos:linkedin-icon" style={{filter: 'grayscale(100%)'}} width="18"></iconify-icon>
</a>
</div>
</div>
</div>

<form className="space-y-4" id="contactForm">
<div className="space-y-1">
<label className="text-xs font-medium text-zinc-700">Nome</label>
<input className="w-full px-4 py-2.5 rounded-lg border border-zinc-200 text-sm focus:outline-none focus:border-zinc-400 focus:ring-1 focus:ring-zinc-200 transition-all bg-zinc-50/50" placeholder="Seu nome completo" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-zinc-700">Email</label>
<input className="w-full px-4 py-2.5 rounded-lg border border-zinc-200 text-sm focus:outline-none focus:border-zinc-400 focus:ring-1 focus:ring-zinc-200 transition-all bg-zinc-50/50" placeholder="seu@email.com" type="email"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-zinc-700">Telefone</label>
<input className="w-full px-4 py-2.5 rounded-lg border border-zinc-200 text-sm focus:outline-none focus:border-zinc-400 focus:ring-1 focus:ring-zinc-200 transition-all bg-zinc-50/50" placeholder="(43) 00000-0000" type="tel"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-zinc-700">Mensagem</label>
<textarea className="w-full px-4 py-2.5 rounded-lg border border-zinc-200 text-sm focus:outline-none focus:border-zinc-400 focus:ring-1 focus:ring-zinc-200 transition-all bg-zinc-50/50 resize-none" placeholder="Estou interessado no imóvel..." rows="4"></textarea>
</div>
<button className="w-full bg-zinc-900 text-white py-3 rounded-lg font-medium hover:bg-zinc-800 transition-all hover:shadow-lg hover:shadow-zinc-200/50 flex items-center justify-center gap-2 mt-2" type="submit">
                        Enviar Mensagem
                        <iconify-icon icon="solar:plain-linear" width="18"></iconify-icon>
</button>
</form>
</div>
</div>
</section>

<footer className="bg-white border-t border-zinc-200 py-12 px-6">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-center md:text-left">
<a className="text-lg font-medium tracking-tighter text-zinc-900 uppercase" href="#">
                    Valquiria<span className="text-zinc-400">Oliver</span>
</a>
<p className="text-xs text-zinc-400 mt-2">© 2026 ValquiriaOliver Imobiliária. CRECI 12345-PR.</p>
</div>
<div className="flex gap-6 text-sm text-zinc-500">
<a className="hover:text-zinc-900" href="#">Política de Privacidade</a>
<a className="hover:text-zinc-900" href="#">Termos de Uso</a>
</div>
</div>
</footer>


    </>
  );
}
