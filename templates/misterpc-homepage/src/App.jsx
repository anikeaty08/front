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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      

<nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-xl border-b border-gray-200 transition-all">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">

<div className="flex-shrink-0 flex items-center">
<a className="text-xl font-semibold tracking-tighter text-gray-900" href="#">
                        misterPC
                    </a>
</div>

<div className="hidden md:flex items-center space-x-8">
<a className="text-sm font-medium text-blue-600 transition-colors" href="#">Portáteis</a>
<a className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors" href="#">Desktops</a>
<a className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors" href="#">Workstations</a>
<a className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors" href="#">Híbridos</a>
<a className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors" href="#">Gaming</a>
</div>

<div className="flex items-center space-x-5 text-gray-500">
<button className="hover:text-gray-900 transition-colors flex items-center">
<iconify-icon icon="solar:magnifer-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<button className="hover:text-gray-900 transition-colors flex items-center">
<iconify-icon icon="solar:user-rounded-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<button className="hover:text-gray-900 transition-colors flex items-center relative">
<iconify-icon icon="solar:cart-large-2-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="absolute -top-1.5 -right-1.5 bg-blue-600 text-white text-xs font-semibold rounded-full h-4 w-4 flex items-center justify-center" style={{fontSize: '0.65rem'}}>2</span>
</button>
</div>
</div>
</div>
</nav>

<section className="relative pt-24 pb-20 lg:pt-32 lg:pb-28 overflow-hidden bg-gray-50 flex flex-col items-center justify-center text-center px-4">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white via-gray-50 to-gray-100 opacity-80 pointer-events-none"></div>
<div className="relative z-10 max-w-5xl mx-auto space-y-8">
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900 leading-tight">
                Portugal's #1 loja de computadores semi-novos premium 
                <span className="text-gray-400 font-medium block mt-2 sm:inline sm:mt-0">— até 50% de poupança, 3 anos de garantia.</span>
</h1>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
<a className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-full bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-all shadow-sm hover:shadow-md" href="#">
                    Ver portáteis
                </a>
<a className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-full bg-white border border-gray-200 text-gray-900 text-sm font-medium hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm" href="#">
                    Ver todas as ofertas
                </a>
</div>
</div>
</section>

<section className="border-y border-gray-200 bg-white">
<div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 gap-y-10 divide-x-0 md:divide-x divide-gray-100">
<div className="flex flex-col items-center text-center px-4">
<div className="h-12 w-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 mb-3">
<iconify-icon height="24" icon="solar:tag-price-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-gray-900">Até 50% Poupança</h3>
<p className="text-xs text-gray-500 mt-1">Face ao preço de novo</p>
</div>
<div className="flex flex-col items-center text-center px-4">
<div className="h-12 w-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 mb-3">
<iconify-icon height="24" icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-gray-900">3 Anos de Garantia</h3>
<p className="text-xs text-gray-500 mt-1">Total tranquilidade</p>
</div>
<div className="flex flex-col items-center text-center px-4">
<div className="h-12 w-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 mb-3">
<iconify-icon height="24" icon="solar:lock-password-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-gray-900">Pagamentos Seguros</h3>
<p className="text-xs text-gray-500 mt-1">100% encriptados</p>
</div>
<div className="flex flex-col items-center text-center px-4">
<div className="h-12 w-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 mb-3">
<iconify-icon height="24" icon="solar:medal-star-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-gray-900">Satisfação Garantida</h3>
<p className="text-xs text-gray-500 mt-1">Equipamentos premium</p>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
<div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
<div>
<h2 className="text-2xl font-semibold tracking-tight text-gray-900">Em Destaque</h2>
<p className="text-sm text-gray-500 mt-1">As melhores oportunidades do momento.</p>
</div>
<a className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors group" href="#">
                Ver todos
                <iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group flex flex-col bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-gray-300 hover:shadow-sm transition-all duration-300 relative">
<div className="absolute top-3 left-3 bg-red-50 text-red-600 border border-red-100 text-xs font-semibold px-2.5 py-1 rounded-full z-10">
                    Poupa 50%
                </div>
<div className="relative aspect-[4/3] p-6 bg-gray-50/50 flex items-center justify-center overflow-hidden">
<img alt="Dell Latitude 5285" className="w-full h-full object-contain mix-blend-multiply absolute inset-0 p-6 transition-opacity duration-500 group-hover:opacity-0" src="https://loja.misterpc.pt/image/cache/wp/gj/DELL-5285-I5-8GB-SSD-W11%20(3)-256x282.webp"/>
<img alt="Dell Latitude 5285 Alt" className="w-full h-full object-contain mix-blend-multiply absolute inset-0 p-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100" src="https://loja.misterpc.pt/image/cache/wp/gj/portatil_pc-para-todos_Dell-Latitude-5285_2-256x282.webp"/>
</div>
<div className="p-5 flex flex-col flex-1 border-t border-gray-100">
<h3 className="text-base font-semibold tracking-tight text-gray-900 truncate">Dell Latitude 5285</h3>
<p className="text-xs text-gray-500 mt-1 truncate">i5-7300U · 8GB RAM · 256GB SSD · W11</p>
<div className="mt-4 mb-5 flex items-baseline gap-2">
<span className="text-lg font-semibold text-gray-900">299€</span>
<span className="text-sm text-gray-400 line-through">599€</span>
</div>
<a className="mt-auto w-full inline-flex justify-center items-center py-2.5 px-4 rounded-xl border border-gray-200 text-sm font-medium text-gray-900 bg-white hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm" href="#">
                        Ver produto
                    </a>
</div>
</div>

<div className="group flex flex-col bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-gray-300 hover:shadow-sm transition-all duration-300 relative">
<div className="absolute top-3 left-3 bg-red-50 text-red-600 border border-red-100 text-xs font-semibold px-2.5 py-1 rounded-full z-10">
                    Poupa 41%
                </div>
<div className="relative aspect-[4/3] p-6 bg-gray-50/50 flex items-center justify-center overflow-hidden">
<img alt="Dell Latitude 7420" className="w-full h-full object-contain mix-blend-multiply absolute inset-0 p-6 transition-opacity duration-500 group-hover:opacity-0" src="https://loja.misterpc.pt/image/cache/wp/gj/C%C3%B3pia%20de%20DELL-7420-I7-32GB-SSD-FULLHD-W11-AMENOS%20(3)-256x282.webp"/>
<img alt="Dell Latitude 7420 Alt" className="w-full h-full object-contain mix-blend-multiply absolute inset-0 p-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100" src="https://loja.misterpc.pt/image/cache/wp/gp/DELL_7420_1_EDIT-256x282.webp"/>
</div>
<div className="p-5 flex flex-col flex-1 border-t border-gray-100">
<h3 className="text-base font-semibold tracking-tight text-gray-900 truncate">Dell Latitude 7420</h3>
<p className="text-xs text-gray-500 mt-1 truncate">i7-1185G7 · 32GB RAM · 512GB SSD · W11</p>
<div className="mt-4 mb-5 flex items-baseline gap-2">
<span className="text-lg font-semibold text-gray-900">699€</span>
<span className="text-sm text-gray-400 line-through">1199€</span>
</div>
<a className="mt-auto w-full inline-flex justify-center items-center py-2.5 px-4 rounded-xl border border-gray-200 text-sm font-medium text-gray-900 bg-white hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm" href="#">
                        Ver produto
                    </a>
</div>
</div>

<div className="group flex flex-col bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-gray-300 hover:shadow-sm transition-all duration-300 relative">
<div className="absolute top-3 left-3 bg-red-50 text-red-600 border border-red-100 text-xs font-semibold px-2.5 py-1 rounded-full z-10">
                    Poupa 36%
                </div>
<div className="relative aspect-[4/3] p-6 bg-gray-50/50 flex items-center justify-center overflow-hidden">
<img alt="HP Elitebook 745 G6" className="w-full h-full object-contain mix-blend-multiply absolute inset-0 p-6 transition-opacity duration-500 group-hover:opacity-0" src="https://loja.misterpc.pt/image/cache/wp/gj/C%C3%B3pia%20de%20HP-745-G6-RYZEN-16GB-SSD-VEGA-8-W11-256x282.webp"/>
<img alt="HP Elitebook 745 G6 Alt" className="w-full h-full object-contain mix-blend-multiply absolute inset-0 p-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100" src="https://loja.misterpc.pt/image/cache/wp/gj/HP_745_G6_1-256x282.webp"/>
</div>
<div className="p-5 flex flex-col flex-1 border-t border-gray-100">
<h3 className="text-base font-semibold tracking-tight text-gray-900 truncate">HP Elitebook 745 G6</h3>
<p className="text-xs text-gray-500 mt-1 truncate">Ryzen 5 PRO · 16GB RAM · 256GB SSD</p>
<div className="mt-4 mb-5 flex items-baseline gap-2">
<span className="text-lg font-semibold text-gray-900">349€</span>
<span className="text-sm text-gray-400 line-through">549€</span>
</div>
<a className="mt-auto w-full inline-flex justify-center items-center py-2.5 px-4 rounded-xl border border-gray-200 text-sm font-medium text-gray-900 bg-white hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm" href="#">
                        Ver produto
                    </a>
</div>
</div>

<div className="group flex flex-col bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-gray-300 hover:shadow-sm transition-all duration-300 relative">
<div className="absolute top-3 left-3 bg-red-50 text-red-600 border border-red-100 text-xs font-semibold px-2.5 py-1 rounded-full z-10">
                    Poupa 20%
                </div>
<div className="relative aspect-[4/3] p-6 bg-gray-50/50 flex items-center justify-center overflow-hidden">
<img alt="Acer Aspire Go" className="w-full h-full object-contain mix-blend-multiply absolute inset-0 p-6 transition-opacity duration-500 group-hover:opacity-0" src="https://loja.misterpc.pt/image/cache/wp/gj/ACER-ASPIRE-GO-AG15-F_18523-RYZEN-16GB-SSD-FHD-W11jj-256x282.webp"/>
<img alt="Acer Aspire Go Alt" className="w-full h-full object-contain mix-blend-multiply absolute inset-0 p-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100" src="https://loja.misterpc.pt/image/cache/wp/gj/ACER_ASPIRE_GO_AG15_42P_R5CT_1-256x282.webp"/>
</div>
<div className="p-5 flex flex-col flex-1 border-t border-gray-100">
<h3 className="text-base font-semibold tracking-tight text-gray-900 truncate">Acer Aspire Go</h3>
<p className="text-xs text-gray-500 mt-1 truncate">Ryzen 3 · 16GB RAM · 256GB SSD · W11</p>
<div className="mt-4 mb-5 flex items-baseline gap-2">
<span className="text-lg font-semibold text-gray-900">399€</span>
<span className="text-sm text-gray-400 line-through">499€</span>
</div>
<a className="mt-auto w-full inline-flex justify-center items-center py-2.5 px-4 rounded-xl border border-gray-200 text-sm font-medium text-gray-900 bg-white hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm" href="#">
                        Ver produto
                    </a>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8 mb-16">
<div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
<div>
<h2 className="text-2xl font-semibold tracking-tight text-gray-900">Novidades</h2>
<p className="text-sm text-gray-500 mt-1">Últimas entradas em stock.</p>
</div>
<a className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors group" href="#">
                Ver todos
                <iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group flex flex-col bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-gray-300 hover:shadow-sm transition-all duration-300 relative">
<div className="absolute top-3 left-3 bg-blue-50 text-blue-600 border border-blue-100 text-xs font-semibold px-2.5 py-1 rounded-full z-10">
                    Novo Stock
                </div>
<div className="relative aspect-[4/3] p-6 bg-gray-50/50 flex items-center justify-center overflow-hidden">
<img alt="HP ZBook 15U" className="w-full h-full object-contain mix-blend-multiply absolute inset-0 p-6 transition-opacity duration-500 group-hover:opacity-0" src="https://loja.misterpc.pt/image/cache/wp/gj/C%C3%B3pia%20de%20HP-ZBOOK-15-G3-I7-16GB-SSD-NVIDIA-M1000M-FULLHD-BATERIA-NOVA-W11%20(3)-256x282.webp"/>
<img alt="HP ZBook 15U Alt" className="w-full h-full object-contain mix-blend-multiply absolute inset-0 p-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100" src="https://loja.misterpc.pt/image/cache/wp/gp/workstation-portatil-HP-ZBook-15u-g3-recondicionado-usado-256x282.webp"/>
</div>
<div className="p-5 flex flex-col flex-1 border-t border-gray-100">
<h3 className="text-base font-semibold tracking-tight text-gray-900 truncate">HP ZBook 15U G3</h3>
<p className="text-xs text-gray-500 mt-1 truncate">i7-6500U · 16GB RAM · 512GB SSD</p>
<div className="mt-4 mb-5 flex items-baseline gap-2">
<span className="text-lg font-semibold text-gray-900">429€</span>
<span className="text-sm text-gray-400 line-through">799€</span>
</div>
<a className="mt-auto w-full inline-flex justify-center items-center py-2.5 px-4 rounded-xl border border-gray-200 text-sm font-medium text-gray-900 bg-white hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm" href="#">
                        Ver produto
                    </a>
</div>
</div>

<div className="group flex flex-col bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-gray-300 hover:shadow-sm transition-all duration-300 relative">
<div className="absolute top-3 left-3 bg-blue-50 text-blue-600 border border-blue-100 text-xs font-semibold px-2.5 py-1 rounded-full z-10">
                    Novo Stock
                </div>
<div className="relative aspect-[4/3] p-6 bg-gray-50/50 flex items-center justify-center overflow-hidden">
<img alt="Dell Latitude 7420" className="w-full h-full object-contain mix-blend-multiply absolute inset-0 p-6 transition-opacity duration-500 group-hover:opacity-0" src="https://loja.misterpc.pt/image/cache/wp/gj/C%C3%B3pia%20de%20DELL-7420-I7-32GB-SSD-FULLHD-W11-AMENOS%20(3)-256x282.webp"/>
<img alt="Dell Latitude 7420 Alt" className="w-full h-full object-contain mix-blend-multiply absolute inset-0 p-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100" src="https://loja.misterpc.pt/image/cache/wp/gp/DELL_7420_1_EDIT-256x282.webp"/>
</div>
<div className="p-5 flex flex-col flex-1 border-t border-gray-100">
<h3 className="text-base font-semibold tracking-tight text-gray-900 truncate">Dell Latitude 7420</h3>
<p className="text-xs text-gray-500 mt-1 truncate">i7-1185G7 · 32GB RAM · 512GB SSD · W11</p>
<div className="mt-4 mb-5 flex items-baseline gap-2">
<span className="text-lg font-semibold text-gray-900">699€</span>
<span className="text-sm text-gray-400 line-through">1199€</span>
</div>
<a className="mt-auto w-full inline-flex justify-center items-center py-2.5 px-4 rounded-xl border border-gray-200 text-sm font-medium text-gray-900 bg-white hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm" href="#">
                        Ver produto
                    </a>
</div>
</div>

<div className="group flex flex-col bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-gray-300 hover:shadow-sm transition-all duration-300 relative">
<div className="absolute top-3 left-3 bg-blue-50 text-blue-600 border border-blue-100 text-xs font-semibold px-2.5 py-1 rounded-full z-10">
                    Novo Stock
                </div>
<div className="relative aspect-[4/3] p-6 bg-gray-50/50 flex items-center justify-center overflow-hidden">
<img alt="HP Elitebook 745 G6" className="w-full h-full object-contain mix-blend-multiply absolute inset-0 p-6 transition-opacity duration-500 group-hover:opacity-0" src="https://loja.misterpc.pt/image/cache/wp/gj/C%C3%B3pia%20de%20HP-745-G6-RYZEN-16GB-SSD-VEGA-8-W11-256x282.webp"/>
<img alt="HP Elitebook 745 G6 Alt" className="w-full h-full object-contain mix-blend-multiply absolute inset-0 p-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100" src="https://loja.misterpc.pt/image/cache/wp/gj/HP_745_G6_1-256x282.webp"/>
</div>
<div className="p-5 flex flex-col flex-1 border-t border-gray-100">
<h3 className="text-base font-semibold tracking-tight text-gray-900 truncate">HP Elitebook 745 G6</h3>
<p className="text-xs text-gray-500 mt-1 truncate">Ryzen 5 PRO · 16GB RAM · 256GB SSD</p>
<div className="mt-4 mb-5 flex items-baseline gap-2">
<span className="text-lg font-semibold text-gray-900">349€</span>
<span className="text-sm text-gray-400 line-through">549€</span>
</div>
<a className="mt-auto w-full inline-flex justify-center items-center py-2.5 px-4 rounded-xl border border-gray-200 text-sm font-medium text-gray-900 bg-white hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm" href="#">
                        Ver produto
                    </a>
</div>
</div>

<div className="group flex flex-col bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-gray-300 hover:shadow-sm transition-all duration-300 relative">
<div className="absolute top-3 left-3 bg-blue-50 text-blue-600 border border-blue-100 text-xs font-semibold px-2.5 py-1 rounded-full z-10">
                    Novo Stock
                </div>
<div className="relative aspect-[4/3] p-6 bg-gray-50/50 flex items-center justify-center overflow-hidden">
<img alt="Dell Latitude 5285" className="w-full h-full object-contain mix-blend-multiply absolute inset-0 p-6 transition-opacity duration-500 group-hover:opacity-0" src="https://loja.misterpc.pt/image/cache/wp/gj/DELL-5285-I5-8GB-SSD-W11%20(3)-256x282.webp"/>
<img alt="Dell Latitude 5285 Alt" className="w-full h-full object-contain mix-blend-multiply absolute inset-0 p-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100" src="https://loja.misterpc.pt/image/cache/wp/gj/portatil_pc-para-todos_Dell-Latitude-5285_2-256x282.webp"/>
</div>
<div className="p-5 flex flex-col flex-1 border-t border-gray-100">
<h3 className="text-base font-semibold tracking-tight text-gray-900 truncate">Dell Latitude 5285</h3>
<p className="text-xs text-gray-500 mt-1 truncate">i5-7300U · 8GB RAM · 256GB SSD · W11</p>
<div className="mt-4 mb-5 flex items-baseline gap-2">
<span className="text-lg font-semibold text-gray-900">299€</span>
<span className="text-sm text-gray-400 line-through">599€</span>
</div>
<a className="mt-auto w-full inline-flex justify-center items-center py-2.5 px-4 rounded-xl border border-gray-200 text-sm font-medium text-gray-900 bg-white hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm" href="#">
                        Ver produto
                    </a>
</div>
</div>
</div>
</section>

<footer className="bg-gray-50 border-t border-gray-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
<a className="text-xl font-semibold tracking-tighter text-gray-900 mb-6" href="#">misterPC</a>
<div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500 mb-8">
<a className="hover:text-gray-900 transition-colors" href="#">Sobre nós</a>
<a className="hover:text-gray-900 transition-colors" href="#">Contactos</a>
<a className="hover:text-gray-900 transition-colors" href="#">Termos e Condições</a>
<a className="hover:text-gray-900 transition-colors" href="#">Política de Privacidade</a>
</div>
<p className="text-xs text-gray-400">© 2024 misterPC. Todos os direitos reservados.</p>
</div>
</footer>

    </>
  );
}
