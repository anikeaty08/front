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



        // Mock Data Initialization
        const defaultCollections = [
            { id: 1, name: 'Tabacos' },
            { id: 2, name: 'Sedas' },
            { id: 3, name: 'Acessórios' },
            { id: 4, name: 'Lifestyle' }
        ];

        const defaultProducts = [
            { id: 101, name: 'Tabaco Zion Gold 40g', price: 35.00, image: 'https://images.unsplash.com/photo-1527011046414-4781f1f94f8c?auto=format&fit=crop&q=80&w=600', collection: 'Tabacos', desc: 'Virgínia claro, corte fino orgânico.' },
            { id: 102, name: 'Seda Hemp King Size', price: 12.00, image: 'https://images.unsplash.com/photo-1598514936398-380eb7861c23?auto=format&fit=crop&q=80&w=600', collection: 'Sedas', desc: 'Papel 100% cânhamo natural.' },
            { id: 103, name: 'Kit Piteira de Vidro', price: 45.00, image: 'https://images.unsplash.com/photo-1550523419-e58bc6673059?auto=format&fit=crop&q=80&w=600', collection: 'Acessórios', desc: 'Vidro borossilicato reutilizável.' },
        ];

        // State Management
        let state = {
            products: JSON.parse(localStorage.getItem('zion_products')) || defaultProducts,
            collections: JSON.parse(localStorage.getItem('zion_collections')) || defaultCollections,
            cart: [],
            orders: JSON.parse(localStorage.getItem('zion_orders')) || [],
            view: 'store', 
            adminTab: 'products' 
        };

        // --- Core Functions ---

        function checkRoute() {
            // Check for ?admin query param or #admin hash to show admin panel
            const urlParams = new URLSearchParams(window.location.search);
            if (urlParams.has('admin') || window.location.hash === '#admin') {
                state.view = 'admin';
            } else {
                state.view = 'store';
            }
            render();
        }

        function saveState() {
            localStorage.setItem('zion_products', JSON.stringify(state.products));
            localStorage.setItem('zion_collections', JSON.stringify(state.collections));
            localStorage.setItem('zion_orders', JSON.stringify(state.orders));
            render();
        }

        function formatCurrency(value) {
            return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
        }

        // --- Store Logic ---

        function addToCart(productId) {
            const product = state.products.find(p => p.id === productId);
            if (product) {
                state.cart.push(product);
                renderCartBadge();
                renderCartDrawer();
                // Simple toast
                const toast = document.getElementById('toast');
                toast.classList.remove('translate-y-20', 'opacity-0');
                setTimeout(() => toast.classList.add('translate-y-20', 'opacity-0'), 2000);
            }
        }

        function removeFromCart(index) {
            state.cart.splice(index, 1);
            renderCartBadge();
            renderCartDrawer();
        }

        function toggleCart() {
            const drawer = document.getElementById('cart-drawer');
            const overlay = document.getElementById('cart-overlay');
            if (drawer.classList.contains('translate-x-full')) {
                drawer.classList.remove('translate-x-full');
                overlay.classList.remove('pointer-events-none', 'opacity-0');
            } else {
                drawer.classList.add('translate-x-full');
                overlay.classList.add('pointer-events-none', 'opacity-0');
            }
        }

        function checkout() {
            if (state.cart.length === 0) return;
            
            const newOrder = {
                id: 'ORD-' + Math.floor(Math.random() * 10000),
                date: new Date().toLocaleDateString(),
                customer: {
                    name: "Cliente Exemplo",
                    address: "Rua das Flores, 123, Bairro Jardins, São Paulo - SP, 01000-000",
                    email: "cliente@exemplo.com"
                },
                items: [...state.cart],
                total: state.cart.reduce((sum, item) => sum + item.price, 0),
                status: 'Pendente'
            };

            state.orders.unshift(newOrder); // Add to beginning
            state.cart = [];
            saveState();
            toggleCart();
            alert('Pedido realizado com sucesso! Em breve você receberá o rastreio.');
        }

        // --- Admin Logic ---

        function addProduct(e) {
            e.preventDefault();
            const form = e.target;
            const newProduct = {
                id: Date.now(),
                name: form.p_name.value,
                price: parseFloat(form.p_price.value),
                image: form.p_image.value || 'https://via.placeholder.com/400',
                collection: form.p_collection.value,
                desc: form.p_desc.value
            };
            state.products.push(newProduct);
            saveState();
            form.reset();
            alert('Produto adicionado!');
        }

        function deleteProduct(id) {
            if(confirm('Tem certeza?')) {
                state.products = state.products.filter(p => p.id !== id);
                saveState();
            }
        }

        function addCollection(e) {
            e.preventDefault();
            const val = e.target.c_name.value;
            if (val) {
                state.collections.push({ id: Date.now(), name: val });
                saveState();
                e.target.reset();
            }
        }

        function deleteCollection(id) {
            state.collections = state.collections.filter(c => c.id !== id);
            saveState();
        }

        function copyAddress(address) {
            navigator.clipboard.writeText(address).then(() => {
                alert('Endereço copiado para o fornecedor.');
            });
        }

        // --- Rendering ---

        function renderCartBadge() {
            const el = document.getElementById('cart-badge');
            el.innerText = state.cart.length;
            el.classList.toggle('hidden', state.cart.length === 0);
        }

        function renderCartDrawer() {
            const container = document.getElementById('cart-items');
            const totalEl = document.getElementById('cart-total');
            
            if (state.cart.length === 0) {
                container.innerHTML = '<div class="flex flex-col items-center justify-center h-64 text-neutral-400"><span class="iconify text-4xl mb-2" data-icon="lucide:shopping-cart"></span><p>Seu carrinho está vazio.</p></div>';
                totalEl.innerText = formatCurrency(0);
                return;
            }

            let html = '';
            let total = 0;
            state.cart.forEach((item, index) => {
                total += item.price;
                html += `
                    <div class="flex gap-4 py-4 border-b border-neutral-100 animate-fadeIn">
                        <img src="${item.image}" class="w-16 h-16 object-cover rounded bg-neutral-100">
                        <div class="flex-1">
                            <h4 class="font-medium text-sm text-neutral-900">${item.name}</h4>
                            <p class="text-xs text-neutral-500">${formatCurrency(item.price)}</p>
                        </div>
                        <button onclick="removeFromCart(${index})" class="text-red-500 hover:text-red-700 p-1">
                            <span class="iconify" data-icon="lucide:trash-2" data-width="16"></span>
                        </button>
                    </div>
                `;
            });
            container.innerHTML = html;
            totalEl.innerText = formatCurrency(total);
        }

        function renderStore() {
            // Render Collections Filter
            const filterContainer = document.getElementById('store-filters');
            if (filterContainer) {
                filterContainer.innerHTML = `<button class="px-4 py-2 text-sm font-medium rounded-full bg-neutral-900 text-white">Todos</button>` + 
                state.collections.map(c => `
                    <button class="px-4 py-2 text-sm font-medium rounded-full bg-neutral-100 text-neutral-600 hover:bg-neutral-200">${c.name}</button>
                `).join('');
            }

            // Render Products Grid
            const grid = document.getElementById('store-grid');
            if (grid) {
                grid.innerHTML = state.products.map(p => `
                    <div class="group flex flex-col">
                        <div class="relative w-full aspect-[4/5] bg-neutral-100 rounded-lg overflow-hidden mb-4 border border-neutral-100 shadow-sm group-hover:shadow-md transition-shadow">
                            <img src="${p.image}" alt="${p.name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                            <div class="absolute top-3 left-3 z-10">
                                <span class="bg-white/90 backdrop-blur-sm text-neutral-900 text-[10px] font-bold px-2 py-1 rounded tracking-wide uppercase border border-neutral-200">${p.collection}</span>
                            </div>
                            <button onclick="addToCart(${p.id})" class="absolute bottom-4 right-4 bg-white border border-neutral-200 p-3 rounded-full shadow hover:bg-neutral-900 hover:text-white transition-all opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0">
                                <span class="iconify block" data-icon="lucide:plus" data-width="18"></span>
                            </button>
                        </div>
                        <div>
                            <div class="flex justify-between items-start mb-1">
                                <h3 class="font-semibold text-lg tracking-tight text-neutral-900 line-clamp-1">${p.name}</h3>
                                <span class="font-medium text-neutral-900 whitespace-nowrap">${formatCurrency(p.price)}</span>
                            </div>
                            <p class="text-sm text-neutral-500 line-clamp-1">${p.desc}</p>
                        </div>
                    </div>
                `).join('');
            }
        }

        function renderAdmin() {
            // Populate Collection Select in Add Product Form
            const select = document.getElementById('p_collection');
            if(select) {
                select.innerHTML = state.collections.map(c => `<option value="${c.name}">${c.name}</option>`).join('');
            }

            // Render Product List in Admin
            const adminProdList = document.getElementById('admin-prod-list');
            if (adminProdList) {
                adminProdList.innerHTML = state.products.map(p => `
                    <tr class="border-b border-neutral-100 hover:bg-neutral-50">
                        <td class="py-3 px-4 flex items-center gap-3">
                            <img src="${p.image}" class="w-8 h-8 rounded object-cover">
                            <span class="text-sm font-medium">${p.name}</span>
                        </td>
                        <td class="py-3 px-4 text-sm text-neutral-500">${p.collection}</td>
                        <td class="py-3 px-4 text-sm text-neutral-900">${formatCurrency(p.price)}</td>
                        <td class="py-3 px-4 text-right">
                            <button onclick="deleteProduct(${p.id})" class="text-neutral-400 hover:text-red-600 transition-colors">
                                <span class="iconify" data-icon="lucide:trash-2" data-width="16"></span>
                            </button>
                        </td>
                    </tr>
                `).join('');
            }

            // Render Collections List
            const colList = document.getElementById('admin-col-list');
            if(colList) {
                colList.innerHTML = state.collections.map(c => `
                    <div class="flex items-center justify-between p-3 bg-neutral-50 rounded border border-neutral-200">
                        <span class="text-sm font-medium">${c.name}</span>
                        <button onclick="deleteCollection(${c.id})" class="text-neutral-400 hover:text-red-600"><span class="iconify" data-icon="lucide:x" data-width="16"></span></button>
                    </div>
                `).join('');
            }

            // Render Orders
            const orderList = document.getElementById('admin-order-list');
            if(orderList) {
                if (state.orders.length === 0) {
                    orderList.innerHTML = '<tr><td colspan="5" class="text-center py-8 text-neutral-500">Nenhum pedido recebido ainda.</td></tr>';
                } else {
                    orderList.innerHTML = state.orders.map(o => `
                        <tr class="border-b border-neutral-100 text-sm">
                            <td class="py-4 px-4 font-medium text-green-700">#${o.id}</td>
                            <td class="py-4 px-4">
                                <div class="font-medium text-neutral-900">${o.customer.name}</div>
                                <div class="text-xs text-neutral-500">${o.items.length} itens</div>
                            </td>
                            <td class="py-4 px-4 max-w-xs truncate text-neutral-500" title="${o.customer.address}">${o.customer.address}</td>
                            <td class="py-4 px-4 font-medium">${formatCurrency(o.total)}</td>
                            <td class="py-4 px-4">
                                <button onclick="copyAddress('${o.customer.address}')" class="flex items-center gap-1 bg-neutral-900 text-white px-2 py-1.5 rounded text-xs hover:bg-green-700 transition-colors">
                                    <span class="iconify" data-icon="lucide:copy" data-width="12"></span> Copiar Endereço
                                </button>
                            </td>
                        </tr>
                    `).join('');
                }
            }
        }

        function render() {
            // View Switching
            document.getElementById('view-store').style.display = state.view === 'store' ? 'block' : 'none';
            document.getElementById('view-admin').style.display = state.view === 'admin' ? 'block' : 'none';
            
            // Tab Switching in Admin
            if (state.view === 'admin') {
                ['products', 'orders', 'collections'].forEach(tab => {
                    const el = document.getElementById(`tab-${tab}`);
                    const btn = document.getElementById(`btn-tab-${tab}`);
                    if(el) el.style.display = state.adminTab === tab ? 'block' : 'none';
                    if(btn) {
                        if(state.adminTab === tab) {
                            btn.classList.add('text-green-700', 'border-green-700');
                            btn.classList.remove('text-neutral-500', 'border-transparent');
                        } else {
                            btn.classList.remove('text-green-700', 'border-green-700');
                            btn.classList.add('text-neutral-500', 'border-transparent');
                        }
                    }
                });
                renderAdmin();
            } else {
                renderStore();
            }
            renderCartBadge();
        }

        function switchAdminTab(tabName) {
            state.adminTab = tabName;
            render();
        }

        // Initialize on Load
        window.addEventListener('DOMContentLoaded', () => {
            checkRoute();
        });
        
        // Listen for hash changes
        window.addEventListener('hashchange', () => {
             checkRoute();
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
      



<nav className="fixed w-full z-40 top-0 bg-white/90 backdrop-blur-md border-b border-neutral-100">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<div className="flex items-center gap-6">
<a className="font-display font-extrabold text-2xl tracking-tighter flex items-center gap-1 hover:opacity-80 transition-opacity" href="#">
<span className="text-green-700">Z</span><span className="text-yellow-500">I</span><span className="text-red-600">O</span><span className="text-neutral-900">N</span>
</a>
</div>

<div className="flex items-center gap-4 md:gap-6">
<a className="text-sm font-medium hover:text-green-700 transition-colors hidden sm:block" href="#">Início</a>
<a className="text-sm font-medium hover:text-green-700 transition-colors hidden sm:block" href="#products-anchor">Loja</a>
<div className="w-px h-6 bg-neutral-200 hidden sm:block"></div>
<button className="relative p-2 hover:bg-neutral-50 rounded-full transition-colors group" onclick="toggleCart()">
<span className="iconify text-xl" data-icon="lucide:shopping-bag" data-strokeWidth="1.5"></span>
<span className="absolute top-0 right-0 hidden text-[10px] font-bold bg-neutral-900 text-white w-4 h-4 flex items-center justify-center rounded-full group-hover:bg-green-700 transition-colors" id="cart-badge">0</span>
</button>
</div>
</div>
</nav>

<div className="pt-20" id="view-store">

<header className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center bg-neutral-900 overflow-hidden">
<div className="absolute inset-0 w-full h-full opacity-50">
<img className="object-cover w-full h-full grayscale mix-blend-multiply" src="https://images.unsplash.com/photo-1608628906950-e766b1627932?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/40 to-transparent"></div>
<div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm mb-6">
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
<span className="text-xs font-medium text-white tracking-wider uppercase">Curadoria Exclusiva</span>
</div>
<h1 className="font-display text-5xl md:text-7xl font-bold text-white tracking-tight leading-[0.9] mb-6">
                    RITUAL <span className="text-transparent bg-clip-text rasta-gradient">NATURAL</span>
</h1>
<p className="text-neutral-300 text-lg max-w-lg mx-auto mb-8 font-light">
                    Produtos selecionados globalmente, entregues diretamente para você. Qualidade orgânica, essência verdadeira.
                </p>
<a className="inline-flex items-center gap-2 px-8 py-3 bg-white text-neutral-900 font-semibold text-sm rounded hover:bg-neutral-200 transition-colors" href="#products-anchor">
                    Ver Coleção <span className="iconify" data-icon="lucide:arrow-down"></span>
</a>
</div>
</header>

<div className="w-full bg-neutral-900 border-t border-neutral-800 overflow-hidden py-3 relative">
<div className="whitespace-nowrap animate-marquee flex items-center gap-8 text-neutral-500 font-display font-bold text-xs tracking-widest uppercase">
<span>TABACARIA PREMIUM</span> <span>●</span> <span>FOLHAS SELECIONADAS</span> <span>●</span> <span>RAÍZES ORGÂNICAS</span> <span>●</span> <span>ESSÊNCIA NATURAL</span> <span>●</span> <span>IMPORTAÇÃO DIRETA</span> <span>●</span> <span>TABACARIA PREMIUM</span> <span>●</span> <span>FOLHAS SELECIONADAS</span> <span>●</span> <span>RAÍZES ORGÂNICAS</span> <span>●</span> <span>ESSÊNCIA NATURAL</span> <span>●</span>
<span>TABACARIA PREMIUM</span> <span>●</span> <span>FOLHAS SELECIONADAS</span> <span>●</span> <span>RAÍZES ORGÂNICAS</span> <span>●</span> <span>ESSÊNCIA NATURAL</span> <span>●</span>
</div>
</div>

<section className="py-16 px-6 max-w-7xl mx-auto min-h-screen" id="products-anchor">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div>
<h2 className="font-display text-3xl font-bold tracking-tight mb-2">Coleção</h2>
<p className="text-neutral-500 text-sm">Explore nossa seleção exclusiva.</p>
</div>
<div className="flex flex-wrap gap-2" id="store-filters">

</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6" id="store-grid">

</div>
</section>

<section className="bg-neutral-50 py-20 px-6 border-t border-neutral-200">
<div className="max-w-4xl mx-auto text-center">
<h2 className="font-display text-3xl font-bold mb-6">Nossa Filosofia</h2>
<p className="text-neutral-600 leading-relaxed mb-8">
                    A ZION conecta produtores autênticos ao redor do mundo com apreciadores da cultura natural no Brasil. Operamos com um modelo logístico eficiente que garante produtos frescos, entregues diretamente da origem para sua casa. Respeitamos a natureza e o tempo das coisas.
                </p>
<div className="grid grid-cols-3 gap-8">
<div className="flex flex-col items-center">
<span className="iconify text-3xl text-green-600 mb-2" data-icon="lucide:globe"></span>
<span className="text-sm font-bold">Importado</span>
</div>
<div className="flex flex-col items-center">
<span className="iconify text-3xl text-yellow-500 mb-2" data-icon="lucide:leaf"></span>
<span className="text-sm font-bold">Orgânico</span>
</div>
<div className="flex flex-col items-center">
<span className="iconify text-3xl text-red-600 mb-2" data-icon="lucide:shield-check"></span>
<span className="text-sm font-bold">Seguro</span>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-neutral-100 py-12 px-6">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs text-neutral-400 gap-4">
<p>© 2023 Zion Tabacaria.</p>
<div className="flex gap-4">
<span className="iconify" data-icon="lucide:instagram"></span>
<span className="iconify" data-icon="lucide:twitter"></span>
</div>
</div>
</footer>
</div>

<div className="pt-20 hidden bg-neutral-50 min-h-screen" id="view-admin">
<div className="max-w-7xl mx-auto px-6 py-8">
<div className="bg-red-50 border border-red-100 text-red-800 px-4 py-2 rounded mb-6 text-xs flex items-center gap-2">
<span className="iconify" data-icon="lucide:lock"></span>
                Área Restrita - Modo Administrador
            </div>
<div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
<div>
<h1 className="font-display text-3xl font-bold text-neutral-900">Painel ZION</h1>
<p className="text-neutral-500 text-sm">Gerencie produtos e fornecedores.</p>
</div>
<div className="flex items-center gap-2 bg-white p-1 rounded-lg border border-neutral-200 shadow-sm">
<button className="px-4 py-2 text-sm font-medium border-b-2 text-green-700 border-green-700 transition-colors" id="btn-tab-products" onclick="switchAdminTab('products')">Produtos</button>
<button className="px-4 py-2 text-sm font-medium border-b-2 border-transparent text-neutral-500 hover:text-neutral-900 transition-colors" id="btn-tab-orders" onclick="switchAdminTab('orders')">Pedidos</button>
<button className="px-4 py-2 text-sm font-medium border-b-2 border-transparent text-neutral-500 hover:text-neutral-900 transition-colors" id="btn-tab-collections" onclick="switchAdminTab('collections')">Coleções</button>
</div>
</div>

<div id="tab-products">
<div className="grid lg:grid-cols-3 gap-8">

<div className="lg:col-span-1">
<div className="bg-white p-6 rounded-xl border border-neutral-200 shadow-sm sticky top-24">
<h3 className="font-bold text-lg mb-4 flex items-center gap-2">
<span className="iconify" data-icon="lucide:plus-circle"></span> Adicionar Produto
                            </h3>
<form className="space-y-4" onsubmit="addProduct(event)">
<div>
<label className="block text-xs font-medium text-neutral-500 mb-1">Nome do Produto</label>
<input className="w-full bg-neutral-50 border border-neutral-200 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-green-600 transition-all" name="p_name" required="" type="text"/>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-neutral-500 mb-1">Preço (R$)</label>
<input className="w-full bg-neutral-50 border border-neutral-200 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-green-600 transition-all" name="p_price" required="" step="0.01" type="number"/>
</div>
<div>
<label className="block text-xs font-medium text-neutral-500 mb-1">Coleção</label>
<select className="w-full bg-neutral-50 border border-neutral-200 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-green-600 transition-all" id="p_collection" name="p_collection">

</select>
</div>
</div>
<div>
<label className="block text-xs font-medium text-neutral-500 mb-1">URL da Imagem</label>
<input className="w-full bg-neutral-50 border border-neutral-200 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-green-600 transition-all" name="p_image" placeholder="https://..." type="url"/>
</div>
<div>
<label className="block text-xs font-medium text-neutral-500 mb-1">Descrição</label>
<textarea className="w-full bg-neutral-50 border border-neutral-200 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-green-600 transition-all" name="p_desc" rows="3"></textarea>
</div>
<button className="w-full bg-neutral-900 text-white font-medium text-sm py-2.5 rounded hover:bg-neutral-800 transition-colors shadow-lg shadow-neutral-200" type="submit">
                                    Salvar Produto
                                </button>
</form>
</div>
</div>

<div className="lg:col-span-2">
<div className="bg-white rounded-xl border border-neutral-200 shadow-sm overflow-hidden">
<table className="w-full text-left">
<thead className="bg-neutral-50 border-b border-neutral-200">
<tr>
<th className="py-3 px-4 text-xs font-semibold text-neutral-500 uppercase tracking-wider">Produto</th>
<th className="py-3 px-4 text-xs font-semibold text-neutral-500 uppercase tracking-wider">Coleção</th>
<th className="py-3 px-4 text-xs font-semibold text-neutral-500 uppercase tracking-wider">Preço</th>
<th className="py-3 px-4 text-right text-xs font-semibold text-neutral-500 uppercase tracking-wider">Ação</th>
</tr>
</thead>
<tbody id="admin-prod-list">

</tbody>
</table>
</div>
</div>
</div>
</div>

<div className="hidden" id="tab-orders">
<div className="bg-white rounded-xl border border-neutral-200 shadow-sm overflow-hidden">
<div className="p-4 border-b border-neutral-100 bg-neutral-50 flex justify-between items-center">
<h3 className="font-bold text-sm text-neutral-700">Pedidos Recentes</h3>
<span className="text-xs text-neutral-500 bg-white border border-neutral-200 px-2 py-1 rounded">Logística Direta</span>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left min-w-[600px]">
<thead className="bg-white border-b border-neutral-200">
<tr>
<th className="py-3 px-4 text-xs font-semibold text-neutral-500 uppercase">ID</th>
<th className="py-3 px-4 text-xs font-semibold text-neutral-500 uppercase">Cliente</th>
<th className="py-3 px-4 text-xs font-semibold text-neutral-500 uppercase w-1/3">Endereço de Entrega</th>
<th className="py-3 px-4 text-xs font-semibold text-neutral-500 uppercase">Total</th>
<th className="py-3 px-4 text-xs font-semibold text-neutral-500 uppercase">Fornecedor</th>
</tr>
</thead>
<tbody id="admin-order-list">

</tbody>
</table>
</div>
</div>
</div>

<div className="hidden" id="tab-collections">
<div className="max-w-2xl mx-auto">
<div className="bg-white p-6 rounded-xl border border-neutral-200 shadow-sm mb-6">
<h3 className="font-bold text-lg mb-4">Gerenciar Coleções</h3>
<form className="flex gap-3 mb-6" onsubmit="addCollection(event)">
<input className="flex-1 bg-neutral-50 border border-neutral-200 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-green-600" name="c_name" placeholder="Nova Coleção (ex: Vapes)" required="" type="text"/>
<button className="bg-neutral-900 text-white px-4 py-2 rounded text-sm font-medium hover:bg-neutral-800" type="submit">Criar</button>
</form>
<div className="space-y-2" id="admin-col-list">

</div>
</div>
</div>
</div>
</div>
</div>

<div className="fixed inset-0 bg-neutral-900/20 backdrop-blur-sm z-50 opacity-0 pointer-events-none transition-opacity duration-300" id="cart-overlay" onclick="toggleCart()"></div>
<div className="fixed top-0 right-0 h-full w-full max-w-sm bg-white shadow-2xl z-50 transform translate-x-full transition-transform duration-300 ease-in-out flex flex-col" id="cart-drawer">
<div className="p-5 border-b border-neutral-100 flex justify-between items-center">
<h2 className="font-display font-bold text-xl">Seu Carrinho</h2>
<button className="p-2 hover:bg-neutral-50 rounded-full text-neutral-500 transition-colors" onclick="toggleCart()">
<span className="iconify" data-icon="lucide:x" data-width="20"></span>
</button>
</div>
<div className="flex-1 overflow-y-auto p-5 space-y-4" id="cart-items">

</div>
<div className="p-5 border-t border-neutral-100 bg-neutral-50">
<div className="flex justify-between items-center mb-4">
<span className="text-neutral-500 text-sm">Total</span>
<span className="font-display font-bold text-xl text-neutral-900" id="cart-total">R$ 0,00</span>
</div>
<button className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white font-bold py-3.5 rounded-lg shadow-lg shadow-green-200 hover:shadow-xl hover:shadow-green-100 hover:-translate-y-0.5 transition-all" onclick="checkout()">
                Finalizar Compra
            </button>
<p className="text-center text-[10px] text-neutral-400 mt-3">Transação segura e criptografada.</p>
</div>
</div>

<div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-neutral-900 text-white px-6 py-3 rounded-full shadow-xl z-50 flex items-center gap-3 transition-all duration-300 translate-y-20 opacity-0" id="toast">
<span className="iconify text-green-400" data-icon="lucide:check-circle"></span>
<span className="text-sm font-medium">Adicionado ao carrinho</span>
</div>

    </>
  );
}
