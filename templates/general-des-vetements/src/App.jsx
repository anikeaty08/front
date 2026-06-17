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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        const ITEMS_PER_PAGE = 6;
        let currentPage = 1;

        function initPagination() {
            const allProducts = Array.from(document.querySelectorAll('.product-card'));
            const activeProducts = allProducts.filter(p => !p.classList.contains('search-hidden'));
            
            const totalPages = Math.ceil(activeProducts.length / ITEMS_PER_PAGE);
            
            activeProducts.forEach((p, index) => {
                if (index >= (currentPage - 1) * ITEMS_PER_PAGE && index < currentPage * ITEMS_PER_PAGE) {
                    p.style.display = 'flex';
                } else {
                    p.style.display = 'none';
                }
            });

            const paginationEl = document.getElementById('pagination');
            if (totalPages <= 1) {
                paginationEl.style.display = 'none';
            } else {
                paginationEl.style.display = 'flex';
                
                const pageNumbers = document.getElementById('page-numbers');
                pageNumbers.innerHTML = '';
                for(let i = 1; i <= totalPages; i++) {
                    const btn = document.createElement('button');
                    btn.className = `w-8 h-8 flex items-center justify-center rounded-lg text-xs font-medium transition-colors ${i === currentPage ? 'bg-zinc-900 text-white' : 'text-zinc-600 hover:bg-zinc-100'}`;
                    btn.innerText = i;
                    btn.onclick = () => {
                        currentPage = i;
                        initPagination();
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    };
                    pageNumbers.appendChild(btn);
                }
                
                const prevBtn = document.getElementById('prev-page');
                const nextBtn = document.getElementById('next-page');
                
                prevBtn.disabled = currentPage === 1;
                nextBtn.disabled = currentPage === totalPages;

                prevBtn.onclick = () => { if(currentPage > 1) { currentPage--; initPagination(); window.scrollTo({ top: 0, behavior: 'smooth' }); } };
                nextBtn.onclick = () => { if(currentPage < totalPages) { currentPage++; initPagination(); window.scrollTo({ top: 0, behavior: 'smooth' }); } };
            }
        }

        function nav(viewId) {
            // Hide all views
            const views = document.querySelectorAll('main > div[id^="view-"]');
            views.forEach(el => {
                el.classList.add('hidden');
                el.classList.remove('block');
            });
            
            // Reset state modifiers
            document.getElementById('empty-state').classList.add('hidden');
            if(viewId === 'home') {
                 const grid = document.getElementById('product-grid');
                 grid.classList.remove('hidden');
                 document.getElementById('searchInput').value = '';
                 
                 // Reset search filters
                 document.querySelectorAll('.product-card').forEach(p => p.classList.remove('search-hidden'));
                 currentPage = 1;
                 initPagination();
            }

            // Show target view
            const target = document.getElementById('view-' + viewId);
            if(target) {
                target.classList.remove('hidden');
                target.classList.add('block');
            }
            
            // Scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        function searchProducts(e) {
            const term = e.target.value.toLowerCase();
            const products = document.querySelectorAll('.product-card');
            
            if (term === '') {
                products.forEach(p => p.classList.remove('search-hidden'));
                currentPage = 1;
                initPagination();
                document.getElementById('empty-state').classList.add('hidden');
                document.getElementById('product-grid').classList.remove('hidden');
                return;
            }

            // Hide pagination when searching
            document.getElementById('pagination').style.display = 'none';
            let visibleCount = 0;

            products.forEach(p => {
                const title = p.querySelector('h3').innerText.toLowerCase();
                if (title.includes(term)) {
                    p.classList.remove('search-hidden');
                    p.style.display = 'flex';
                    visibleCount++;
                } else {
                    p.classList.add('search-hidden');
                    p.style.display = 'none';
                }
            });

            const emptyState = document.getElementById('empty-state');
            const grid = document.getElementById('product-grid');
            
            if (visibleCount === 0) {
                emptyState.classList.remove('hidden');
                grid.classList.add('hidden');
            } else {
                emptyState.classList.add('hidden');
                grid.classList.remove('hidden');
            }
        }

        function addToCart() {
            const badge = document.getElementById('cartBadge');
            let count = parseInt(badge.innerText);
            badge.innerText = count + 1;
            
            // Visual feedback
            const btn = event.currentTarget;
            const originalText = btn.innerHTML;
            btn.innerHTML = '<iconify-icon icon="solar:check-circle-linear" class="mr-2" width="18"></iconify-icon> Ajouté !';
            btn.classList.replace('bg-zinc-900', 'bg-emerald-600');
            btn.classList.replace('hover:bg-zinc-800', 'hover:bg-emerald-700');
            
            setTimeout(() => {
                btn.innerHTML = originalText;
                btn.classList.replace('bg-emerald-600', 'bg-zinc-900');
                btn.classList.replace('hover:bg-emerald-700', 'hover:bg-zinc-800');
                nav('cart');
            }, 800);
        }

        // Initialize pagination on load
        document.addEventListener('DOMContentLoaded', () => {
            initPagination();
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
      

<header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-200">
<div className="max-w-3xl mx-auto px-4 h-16 flex items-center justify-between">

<button className="text-base font-medium tracking-tight uppercase hover:opacity-70 transition-opacity" onclick="nav('home')">ViaDo Shop</button>

<div className="flex items-center space-x-5 text-zinc-500">
<button className="hover:text-zinc-900 transition-colors flex items-center" onclick="nav('home'); setTimeout(() =&gt; document.getElementById('searchInput').focus(), 100);">
<iconify-icon icon="solar:rounded-magnifer-linear" strokeWidth="1.5" width="22"></iconify-icon>
</button>
<button className="hover:text-zinc-900 transition-colors flex items-center" onclick="nav('info')">
<iconify-icon icon="solar:info-circle-linear" strokeWidth="1.5" width="22"></iconify-icon>
</button>
<button className="hover:text-zinc-900 transition-colors relative flex items-center" onclick="nav('cart')">
<iconify-icon icon="solar:cart-linear" strokeWidth="1.5" width="22"></iconify-icon>
<span className="absolute -top-1.5 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-zinc-900 text-xs font-medium text-white ring-2 ring-white scale-75 origin-center" id="cartBadge">2</span>
</button>
</div>
</div>
</header>

<main className="flex-grow w-full max-w-3xl mx-auto p-4 sm:p-6 lg:p-8">

<div className="space-y-6 block" id="view-home">

<div className="bg-white rounded-2xl border border-zinc-200 p-4 sm:p-5 shadow-sm space-y-4">
<div className="flex items-center gap-3 pb-4 border-b border-zinc-100">
<div className="h-10 w-10 bg-zinc-900 text-white rounded-xl flex items-center justify-center text-sm font-medium tracking-tight shadow-sm flex-shrink-0">
                        VD
                    </div>
<div>
<h2 className="text-sm font-medium text-zinc-900 tracking-tight">ViaDo Shop</h2>
<p className="text-xs text-emerald-600 flex items-center mt-0.5 font-medium">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1.5"></span> En ligne
                        </p>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4">
<div className="flex items-center text-xs text-zinc-600">
<iconify-icon className="mr-2 text-zinc-400" icon="solar:map-point-linear" strokeWidth="1.5" width="16"></iconify-icon>
<span>Localisation: <strong className="font-medium text-zinc-900">Paris</strong></span>
</div>
<div className="flex items-center text-xs text-zinc-600">
<iconify-icon className="mr-2 text-zinc-400" icon="solar:flag-linear" strokeWidth="1.5" width="16"></iconify-icon>
<span>Pays: <strong className="font-medium text-zinc-900">France</strong></span>
</div>
<div className="flex items-center text-xs text-zinc-600">
<iconify-icon className="mr-2 text-zinc-400" icon="solar:phone-linear" strokeWidth="1.5" width="16"></iconify-icon>
<span>WhatsApp: <strong className="font-medium text-zinc-900">+33 6 12 34 56 78</strong></span>
</div>
<div className="flex items-center text-xs text-zinc-600">
<iconify-icon className="mr-2 text-zinc-400" icon="solar:letter-linear" strokeWidth="1.5" width="16"></iconify-icon>
<span>Email: <strong className="font-medium text-zinc-900">contact@viadoshop.com</strong></span>
</div>
<div className="flex items-start text-xs text-zinc-600 sm:col-span-2">
<iconify-icon className="mr-2 text-zinc-400 mt-0.5" icon="solar:global-linear" strokeWidth="1.5" width="16"></iconify-icon>
<span>Livraison: <strong className="font-medium text-zinc-900">France, Belgique, Suisse, Sénégal, CI</strong></span>
</div>
</div>
<div className="pt-4 border-t border-zinc-100 flex flex-wrap items-center gap-2">
<span className="text-xs text-zinc-500 font-medium mr-1">Paiements :</span>
<span className="px-2 py-1 bg-zinc-50 border border-zinc-200 rounded text-xs font-medium tracking-tight text-zinc-700">VISA</span>
<span className="px-2 py-1 bg-zinc-50 border border-zinc-200 rounded text-xs font-medium tracking-tight text-zinc-700">MASTERCARD</span>
<span className="px-2 py-1 bg-zinc-50 border border-zinc-200 rounded text-xs font-medium tracking-tight text-zinc-700">AMEX</span>
<span className="px-2 py-1 bg-zinc-50 border border-zinc-200 rounded text-xs font-medium tracking-tight text-zinc-700 flex items-center gap-1">
<iconify-icon icon="solar:wallet-money-linear" strokeWidth="1.5" width="14"></iconify-icon> CASH
                    </span>
</div>
</div>

<div className="relative group">
<iconify-icon className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400 group-focus-within:text-zinc-900 transition-colors" icon="solar:rounded-magnifer-linear" strokeWidth="1.5" width="20"></iconify-icon>
<input className="w-full pl-11 pr-4 py-3 bg-white border border-zinc-200 rounded-xl text-sm placeholder:text-zinc-400 focus:outline-none focus:ring-4 focus:ring-zinc-900/5 focus:border-zinc-300 transition-all shadow-sm" id="searchInput" oninput="searchProducts(event)" placeholder="Rechercher un produit..." type="text"/>
</div>

<div className="hidden py-12 text-center text-sm text-zinc-500 flex flex-col items-center" id="empty-state">
<iconify-icon className="text-zinc-300 mb-3" icon="solar:box-minimalistic-linear" strokeWidth="1.5" width="48"></iconify-icon>
<p>Aucun produit trouvé</p>
</div>

<div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6" id="product-grid">

<div className="product-card group cursor-pointer flex flex-col bg-white rounded-2xl border border-zinc-200 overflow-hidden hover:shadow-md transition-all duration-300" onclick="nav('product')">
<div className="aspect-square bg-zinc-100 relative overflow-hidden">
<img alt="Montre Connectée" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
</div>
<div className="p-4 flex flex-col flex-grow">
<h3 className="text-sm font-medium text-zinc-900 line-clamp-1">Montre Connectée Pro</h3>
<p className="text-sm text-zinc-500 mt-1 flex-grow">149.00 €</p>
</div>
</div>

<div className="product-card group cursor-pointer flex flex-col bg-white rounded-2xl border border-zinc-200 overflow-hidden hover:shadow-md transition-all duration-300" onclick="nav('product')">
<div className="aspect-square bg-zinc-100 relative overflow-hidden">
<img alt="Écouteurs sans fil" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
</div>
<div className="p-4 flex flex-col flex-grow">
<h3 className="text-sm font-medium text-zinc-900 line-clamp-1">AirPods Pro Gen 2</h3>
<p className="text-sm text-zinc-500 mt-1 flex-grow">279.00 €</p>
</div>
</div>

<div className="product-card group cursor-pointer flex flex-col bg-white rounded-2xl border border-zinc-200 overflow-hidden hover:shadow-md transition-all duration-300" onclick="nav('product')">
<div className="aspect-square bg-zinc-100 relative overflow-hidden p-6 flex items-center justify-center">
<img alt="Sac Minimaliste" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 mix-blend-multiply" src="https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
</div>
<div className="p-4 flex flex-col flex-grow">
<h3 className="text-sm font-medium text-zinc-900 line-clamp-1">Sac Femme Élégance</h3>
<p className="text-sm text-zinc-500 mt-1 flex-grow">89.00 €</p>
</div>
</div>

<div className="product-card group cursor-pointer flex flex-col bg-white rounded-2xl border border-zinc-200 overflow-hidden hover:shadow-md transition-all duration-300" onclick="nav('product')">
<div className="aspect-square bg-zinc-100 relative overflow-hidden p-4 flex items-center justify-center">
<img alt="Casque Audio" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 mix-blend-multiply" src="https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
</div>
<div className="p-4 flex flex-col flex-grow">
<h3 className="text-sm font-medium text-zinc-900 line-clamp-1">Casque Audio Premium</h3>
<p className="text-sm text-zinc-500 mt-1 flex-grow">199.00 €</p>
</div>
</div>

<div className="product-card group cursor-pointer flex flex-col bg-white rounded-2xl border border-zinc-200 overflow-hidden hover:shadow-md transition-all duration-300" onclick="nav('product')">
<div className="aspect-square bg-zinc-100 relative overflow-hidden p-4 flex items-center justify-center">
<img alt="Lunettes de Soleil" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 mix-blend-multiply" src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
</div>
<div className="p-4 flex flex-col flex-grow">
<h3 className="text-sm font-medium text-zinc-900 line-clamp-1">Lunettes de Soleil</h3>
<p className="text-sm text-zinc-500 mt-1 flex-grow">129.00 €</p>
</div>
</div>

<div className="product-card group cursor-pointer flex flex-col bg-white rounded-2xl border border-zinc-200 overflow-hidden hover:shadow-md transition-all duration-300" onclick="nav('product')">
<div className="aspect-square bg-zinc-100 relative overflow-hidden p-4 flex items-center justify-center">
<img alt="Clavier Mécanique" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 mix-blend-multiply" src="https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
</div>
<div className="p-4 flex flex-col flex-grow">
<h3 className="text-sm font-medium text-zinc-900 line-clamp-1">Clavier Mécanique</h3>
<p className="text-sm text-zinc-500 mt-1 flex-grow">159.00 €</p>
</div>
</div>

<div className="product-card group cursor-pointer flex flex-col bg-white rounded-2xl border border-zinc-200 overflow-hidden hover:shadow-md transition-all duration-300" onclick="nav('product')">
<div className="aspect-square bg-zinc-100 relative overflow-hidden p-4 flex items-center justify-center">
<img alt="Souris Ergonomique" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 mix-blend-multiply" src="https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
</div>
<div className="p-4 flex flex-col flex-grow">
<h3 className="text-sm font-medium text-zinc-900 line-clamp-1">Souris Ergonomique</h3>
<p className="text-sm text-zinc-500 mt-1 flex-grow">79.00 €</p>
</div>
</div>

<div className="product-card group cursor-pointer flex flex-col bg-white rounded-2xl border border-zinc-200 overflow-hidden hover:shadow-md transition-all duration-300" onclick="nav('product')">
<div className="aspect-square bg-zinc-100 relative overflow-hidden p-4 flex items-center justify-center">
<img alt="Baskets Urban" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 mix-blend-multiply" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
</div>
<div className="p-4 flex flex-col flex-grow">
<h3 className="text-sm font-medium text-zinc-900 line-clamp-1">Baskets Urban</h3>
<p className="text-sm text-zinc-500 mt-1 flex-grow">119.00 €</p>
</div>
</div>

<div className="product-card group cursor-pointer flex flex-col bg-white rounded-2xl border border-zinc-200 overflow-hidden hover:shadow-md transition-all duration-300" onclick="nav('product')">
<div className="aspect-square bg-zinc-100 relative overflow-hidden p-4 flex items-center justify-center">
<img alt="Bouteille Isotherme" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 mix-blend-multiply" src="https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
</div>
<div className="p-4 flex flex-col flex-grow">
<h3 className="text-sm font-medium text-zinc-900 line-clamp-1">Bouteille Isotherme</h3>
<p className="text-sm text-zinc-500 mt-1 flex-grow">35.00 €</p>
</div>
</div>
</div>

<div className="flex items-center justify-center gap-2 pt-6 pb-2" id="pagination">
<button className="w-8 h-8 flex items-center justify-center rounded-lg border border-zinc-200 text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50 transition-colors disabled:opacity-50 disabled:pointer-events-none" id="prev-page">
<iconify-icon icon="solar:alt-arrow-left-linear" strokeWidth="1.5"></iconify-icon>
</button>
<div className="flex items-center gap-1" id="page-numbers">

</div>
<button className="w-8 h-8 flex items-center justify-center rounded-lg border border-zinc-200 text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50 transition-colors disabled:opacity-50 disabled:pointer-events-none" id="next-page">
<iconify-icon icon="solar:alt-arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>

<div className="hidden space-y-6 sm:space-y-8" id="view-product">
<button className="flex items-center text-sm text-zinc-500 hover:text-zinc-900 transition-colors w-max" onclick="nav('home')">
<iconify-icon className="mr-2" icon="solar:arrow-left-linear" strokeWidth="1.5" width="18"></iconify-icon> Retour à la boutique
            </button>
<div className="grid md:grid-cols-2 gap-6 sm:gap-10">

<div className="aspect-square bg-zinc-100 rounded-2xl sm:rounded-3xl overflow-hidden border border-zinc-200">
<img alt="Montre Connectée" className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>

<div className="flex flex-col pt-2 sm:pt-4">
<h1 className="text-2xl font-medium tracking-tight text-zinc-900 leading-tight">Montre Connectée Pro</h1>
<p className="text-lg font-medium text-zinc-500 mt-2">149.00 €</p>
<div className="mt-6 text-sm text-zinc-600 space-y-4">
<p>Découvrez notre nouvelle montre intelligente avec suivi de santé avancé. Conçue pour un style de vie actif sans compromis sur l'élégance.</p>
<div>
<span className="block font-medium text-zinc-900 mb-2">Caractéristiques :</span>
<ul className="space-y-1.5 list-inside text-zinc-500">
<li className="flex items-center"><iconify-icon className="mr-2 text-zinc-400" icon="solar:check-circle-linear" width="16"></iconify-icon> Écran AMOLED 1.4"</li>
<li className="flex items-center"><iconify-icon className="mr-2 text-zinc-400" icon="solar:check-circle-linear" width="16"></iconify-icon> Autonomie de 7 jours</li>
<li className="flex items-center"><iconify-icon className="mr-2 text-zinc-400" icon="solar:check-circle-linear" width="16"></iconify-icon> Étanche 5ATM (50m)</li>
<li className="flex items-center"><iconify-icon className="mr-2 text-zinc-400" icon="solar:check-circle-linear" width="16"></iconify-icon> Garantie 2 ans incluse</li>
</ul>
</div>
</div>
<div className="mt-8 pt-8 border-t border-zinc-100 space-y-5 mt-auto">

<div className="flex items-center justify-between">
<span className="text-sm font-medium text-zinc-900">Quantité</span>
<div className="flex items-center border border-zinc-200 rounded-xl bg-white shadow-sm p-0.5">
<button className="p-2 text-zinc-400 hover:text-zinc-900 hover:bg-zinc-50 rounded-lg transition-colors"><iconify-icon icon="solar:minus-linear" strokeWidth="2"></iconify-icon></button>
<span className="px-4 text-sm font-medium w-12 text-center">1</span>
<button className="p-2 text-zinc-400 hover:text-zinc-900 hover:bg-zinc-50 rounded-lg transition-colors"><iconify-icon icon="solar:add-linear" strokeWidth="2"></iconify-icon></button>
</div>
</div>

<button className="w-full py-3.5 bg-zinc-900 text-white text-sm font-medium rounded-xl hover:bg-zinc-800 transition-colors shadow-md flex justify-center items-center" onclick="addToCart()">
                            Commander <iconify-icon className="ml-2" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
</div>
</div>
</div>
</div>

<div className="hidden space-y-6" id="view-cart">
<div className="flex items-center justify-between">
<h2 className="text-xl font-medium tracking-tight text-zinc-900">Panier</h2>
<span className="text-xs font-medium px-2 py-1 bg-zinc-100 text-zinc-600 rounded-md">2 articles</span>
</div>
<div className="space-y-3">

<div className="flex items-center gap-4 bg-white p-3 sm:p-4 rounded-2xl border border-zinc-200 shadow-sm">
<div className="h-20 w-20 sm:h-24 sm:w-24 bg-zinc-50 rounded-xl overflow-hidden flex-shrink-0 border border-zinc-100">
<img alt="Montre" className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&amp;fit=crop&amp;q=80&amp;w=200"/>
</div>
<div className="flex-grow flex flex-col justify-between py-1 h-full">
<div className="flex justify-between items-start gap-2">
<h3 className="text-sm font-medium text-zinc-900 line-clamp-2">Montre Connectée Pro</h3>
<button className="text-zinc-400 hover:text-red-500 transition-colors p-1"><iconify-icon icon="solar:trash-bin-trash-linear" strokeWidth="1.5" width="18"></iconify-icon></button>
</div>
<div className="flex justify-between items-end mt-3">
<span className="text-sm font-medium text-zinc-600">149.00 €</span>
<div className="flex items-center border border-zinc-200 rounded-lg bg-zinc-50/50 p-0.5">
<button className="px-2 py-1 text-zinc-400 hover:text-zinc-900"><iconify-icon icon="solar:minus-linear" strokeWidth="2" width="14"></iconify-icon></button>
<span className="px-2 text-xs font-medium text-center">1</span>
<button className="px-2 py-1 text-zinc-400 hover:text-zinc-900"><iconify-icon icon="solar:add-linear" strokeWidth="2" width="14"></iconify-icon></button>
</div>
</div>
</div>
</div>

<div className="flex items-center gap-4 bg-white p-3 sm:p-4 rounded-2xl border border-zinc-200 shadow-sm">
<div className="h-20 w-20 sm:h-24 sm:w-24 bg-zinc-50 rounded-xl overflow-hidden flex-shrink-0 border border-zinc-100 p-2">
<img alt="Sac" className="object-cover w-full h-full mix-blend-multiply" src="https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&amp;fit=crop&amp;q=80&amp;w=200"/>
</div>
<div className="flex-grow flex flex-col justify-between py-1 h-full">
<div className="flex justify-between items-start gap-2">
<h3 className="text-sm font-medium text-zinc-900 line-clamp-2">Sac Femme Élégance</h3>
<button className="text-zinc-400 hover:text-red-500 transition-colors p-1"><iconify-icon icon="solar:trash-bin-trash-linear" strokeWidth="1.5" width="18"></iconify-icon></button>
</div>
<div className="flex justify-between items-end mt-3">
<span className="text-sm font-medium text-zinc-600">89.00 €</span>
<div className="flex items-center border border-zinc-200 rounded-lg bg-zinc-50/50 p-0.5">
<button className="px-2 py-1 text-zinc-400 hover:text-zinc-900"><iconify-icon icon="solar:minus-linear" strokeWidth="2" width="14"></iconify-icon></button>
<span className="px-2 text-xs font-medium text-center">1</span>
<button className="px-2 py-1 text-zinc-400 hover:text-zinc-900"><iconify-icon icon="solar:add-linear" strokeWidth="2" width="14"></iconify-icon></button>
</div>
</div>
</div>
</div>
</div>

<div className="bg-white p-5 sm:p-6 rounded-2xl border border-zinc-200 shadow-sm space-y-4">
<div className="space-y-2">
<div className="flex justify-between text-sm text-zinc-500">
<span>Sous-total</span>
<span className="text-zinc-900">238.00 €</span>
</div>
<div className="flex justify-between text-sm text-zinc-500">
<span>Frais de livraison</span>
<span className="text-zinc-900">Gratuit</span>
</div>
</div>
<div className="pt-4 border-t border-zinc-100 flex justify-between items-center">
<span className="text-base font-medium text-zinc-900">Total</span>
<span className="text-lg font-medium text-zinc-900">238.00 €</span>
</div>
<button className="w-full mt-2 py-3.5 bg-zinc-900 text-white text-sm font-medium rounded-xl hover:bg-zinc-800 transition-colors shadow-md" onclick="nav('checkout')">
                    Passer la commande
                </button>
</div>
</div>

<div className="hidden space-y-6" id="view-checkout">
<button className="flex items-center text-sm text-zinc-500 hover:text-zinc-900 transition-colors w-max" onclick="nav('cart')">
<iconify-icon className="mr-2" icon="solar:arrow-left-linear" strokeWidth="1.5" width="18"></iconify-icon> Retour au panier
            </button>
<div className="flex items-center justify-between border-b border-zinc-200 pb-4">
<h2 className="text-xl font-medium tracking-tight text-zinc-900">Livraison &amp; Paiement</h2>
<span className="text-sm font-medium text-zinc-500">238.00 €</span>
</div>
<form className="space-y-6" onsubmit="event.preventDefault(); nav('confirmation');">

<div className="bg-white p-5 sm:p-6 rounded-2xl border border-zinc-200 shadow-sm space-y-4">
<h3 className="text-sm font-medium text-zinc-900 mb-2">Informations de contact</h3>
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1.5">
<label className="text-xs font-medium text-zinc-600">Prénom</label>
<input className="w-full px-3.5 py-2.5 bg-zinc-50/50 border border-zinc-200 rounded-xl text-sm focus:outline-none focus:ring-4 focus:ring-zinc-900/5 focus:border-zinc-400 focus:bg-white transition-all" required="" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-zinc-600">Nom</label>
<input className="w-full px-3.5 py-2.5 bg-zinc-50/50 border border-zinc-200 rounded-xl text-sm focus:outline-none focus:ring-4 focus:ring-zinc-900/5 focus:border-zinc-400 focus:bg-white transition-all" required="" type="text"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-zinc-600">Téléphone (WhatsApp)</label>
<input className="w-full px-3.5 py-2.5 bg-zinc-50/50 border border-zinc-200 rounded-xl text-sm focus:outline-none focus:ring-4 focus:ring-zinc-900/5 focus:border-zinc-400 focus:bg-white transition-all" placeholder="+33 6 00 00 00 00" required="" type="tel"/>
</div>
</div>

<div className="bg-white p-5 sm:p-6 rounded-2xl border border-zinc-200 shadow-sm space-y-4">
<h3 className="text-sm font-medium text-zinc-900 mb-2">Adresse de livraison</h3>
<div className="space-y-1.5">
<label className="text-xs font-medium text-zinc-600">Adresse complète</label>
<input className="w-full px-3.5 py-2.5 bg-zinc-50/50 border border-zinc-200 rounded-xl text-sm focus:outline-none focus:ring-4 focus:ring-zinc-900/5 focus:border-zinc-400 focus:bg-white transition-all" placeholder="N° et nom de rue" required="" type="text"/>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1.5">
<label className="text-xs font-medium text-zinc-600">Ville</label>
<input className="w-full px-3.5 py-2.5 bg-zinc-50/50 border border-zinc-200 rounded-xl text-sm focus:outline-none focus:ring-4 focus:ring-zinc-900/5 focus:border-zinc-400 focus:bg-white transition-all" required="" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-zinc-600">Pays</label>
<div className="relative">
<select className="w-full px-3.5 py-2.5 bg-zinc-50/50 border border-zinc-200 rounded-xl text-sm appearance-none focus:outline-none focus:ring-4 focus:ring-zinc-900/5 focus:border-zinc-400 focus:bg-white transition-all" required="">
<option disabled="" selected="" value="">Sélectionner...</option>
<option>France</option>
<option>Belgique</option>
<option>Suisse</option>
<option>Sénégal</option>
<option>Côte d'Ivoire</option>
</select>
<iconify-icon className="absolute right-3.5 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none" icon="solar:alt-arrow-down-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-4 flex items-start space-x-3 text-sm">
<iconify-icon className="text-zinc-400 mt-0.5" icon="solar:wallet-money-linear" strokeWidth="1.5" width="20"></iconify-icon>
<p className="text-zinc-600">Paiement à la livraison. Vous paierez directement le livreur lors de la réception de votre commande.</p>
</div>
<button className="w-full py-3.5 bg-zinc-900 text-white text-sm font-medium rounded-xl hover:bg-zinc-800 transition-colors shadow-md" type="submit">
                    Confirmer la commande (238.00 €)
                </button>
</form>
</div>

<div className="hidden flex flex-col items-center justify-center text-center py-10 sm:py-16 space-y-5" id="view-confirmation">
<div className="h-20 w-20 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mb-2 shadow-sm border border-emerald-100/50 relative">
<div className="absolute inset-0 rounded-full border border-emerald-500 animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite] opacity-20"></div>
<iconify-icon icon="solar:check-circle-linear" strokeWidth="1.5" width="40"></iconify-icon>
</div>
<div className="space-y-2">
<h2 className="text-2xl font-medium tracking-tight text-zinc-900">Commande enregistrée !</h2>
<p className="text-sm text-zinc-500 max-w-sm mx-auto">
                    Merci pour votre achat. Votre numéro de commande est le <span className="font-medium text-zinc-900">#VD-7391</span>.
                </p>
</div>

<div className="w-full max-w-sm bg-white p-5 rounded-2xl border border-zinc-200 mt-8 text-left shadow-sm">
<h3 className="text-xs font-medium text-zinc-500 uppercase tracking-widest mb-4">Résumé</h3>
<div className="space-y-3 text-sm">
<div className="flex justify-between items-start">
<span className="text-zinc-600 pr-4">1x Montre Connectée Pro</span>
<span className="text-zinc-900 whitespace-nowrap">149.00 €</span>
</div>
<div className="flex justify-between items-start">
<span className="text-zinc-600 pr-4">1x Sac Femme Élégance</span>
<span className="text-zinc-900 whitespace-nowrap">89.00 €</span>
</div>
<div className="flex justify-between font-medium pt-3 border-t border-zinc-100 mt-2">
<span className="text-zinc-900">Total à payer</span>
<span className="text-zinc-900">238.00 €</span>
</div>
</div>
</div>
<div className="bg-zinc-50 rounded-xl p-4 max-w-sm w-full border border-zinc-200/60 mt-4 text-xs text-zinc-600 flex items-start text-left">
<iconify-icon className="mr-2 flex-shrink-0 mt-0.5 text-zinc-400" icon="solar:info-circle-linear" width="16"></iconify-icon>
<span>Notre équipe vous contactera sur WhatsApp dans les plus brefs délais pour organiser la livraison. Préparez la somme en espèces.</span>
</div>
<button className="mt-8 px-8 py-3 bg-white text-zinc-900 border border-zinc-200 text-sm font-medium rounded-xl hover:bg-zinc-50 transition-colors shadow-sm" onclick="nav('home')">
                Continuer mes achats
            </button>
</div>

<div className="hidden space-y-6" id="view-info">
<button className="flex items-center text-sm text-zinc-500 hover:text-zinc-900 transition-colors w-max" onclick="nav('home')">
<iconify-icon className="mr-2" icon="solar:arrow-left-linear" strokeWidth="1.5" width="18"></iconify-icon> Retour à la boutique
            </button>
<h2 className="text-xl font-medium tracking-tight text-zinc-900">Informations Vendeur</h2>
<div className="bg-white rounded-3xl border border-zinc-200 overflow-hidden shadow-sm">

<div className="p-6 sm:p-8 border-b border-zinc-100 bg-gradient-to-b from-zinc-50 to-white flex items-center space-x-5">
<div className="h-16 w-16 bg-zinc-900 text-white rounded-2xl flex items-center justify-center text-xl font-medium tracking-tight shadow-md">
                        VD
                    </div>
<div>
<h3 className="text-lg font-medium text-zinc-900 tracking-tight">ViaDo Shop</h3>
<p className="text-sm text-zinc-500 flex items-center mt-0.5">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-2"></span> En ligne
                        </p>
</div>
</div>

<div className="p-6 sm:p-8 space-y-5">
<div className="flex items-center space-x-4 text-sm">
<div className="h-10 w-10 rounded-full bg-zinc-50 flex items-center justify-center text-zinc-500 border border-zinc-200/60 flex-shrink-0">
<iconify-icon icon="solar:letter-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<p className="text-xs text-zinc-500 mb-0.5">Email professionnel</p>
<a className="text-zinc-900 font-medium hover:underline" href="#">contact@viadoshop.com</a>
</div>
</div>
<div className="flex items-center space-x-4 text-sm">
<div className="h-10 w-10 rounded-full bg-green-50 flex items-center justify-center text-green-600 border border-green-100 flex-shrink-0">
<iconify-icon icon="solar:phone-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<p className="text-xs text-zinc-500 mb-0.5">Assistance WhatsApp</p>
<a className="text-zinc-900 font-medium hover:underline" href="#">+33 6 12 34 56 78</a>
</div>
</div>
<div className="flex items-center space-x-4 text-sm">
<div className="h-10 w-10 rounded-full bg-zinc-50 flex items-center justify-center text-zinc-500 border border-zinc-200/60 flex-shrink-0">
<iconify-icon icon="solar:map-point-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<p className="text-xs text-zinc-500 mb-0.5">Localisation</p>
<span className="text-zinc-900 font-medium">Paris, France (Expédition Internationale)</span>
</div>
</div>
</div>
<div className="bg-zinc-50 p-6 sm:p-8 text-sm text-zinc-600 border-t border-zinc-100 leading-relaxed">
                    ViaDo Shop est votre boutique de confiance pour les accessoires tech et mode. Créé via PaymeBoutik, nous garantissons des produits de qualité et une livraison rapide avec paiement à la réception pour votre tranquillité d'esprit.
                </div>
</div>
</div>
</main>

<footer className="mt-auto py-8 text-center border-t border-zinc-200 bg-white">
<p className="text-xs text-zinc-400 font-medium">Créé avec <a className="text-zinc-900 hover:underline" href="#">PaymeBoutik</a></p>
</footer>



    </>
  );
}
