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



        // Initialize Icons
        lucide.createIcons({
            attrs: {
                'stroke-width': 1.5
            }
        });

        // Data for Fashion Products (Translated)
        const products = {
            'coat': {
                title: "Abrigo de Lana Oversize",
                price: "1.250,00 €",
                desc: "Una pieza clave para los meses más fríos. Este abrigo oversize está confeccionado en una mezcla de lana pesada en nuestro tono rojo característico. Presenta hombros caídos, solapas anchas y un cinturón para una silueta estructurada.",
                img: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=800&auto=format&fit=crop"
            },
            'dress': {
                title: "Vestido Lencero de Seda",
                price: "890,00 €",
                desc: "Fluidez en movimiento. Cortado en seda 100% mulberry, este vestido de noche cae sin esfuerzo sobre el cuerpo. El corte al bies asegura un ajuste favorecedor, mientras que el tono rojo profundo exige atención.",
                img: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=800&auto=format&fit=crop"
            },
            'shoes': {
                title: "Botines de Piel",
                price: "540,00 €",
                desc: "Elegancia utilitaria. Estos botines combinan cuero de becerro suave con una suela robusta pero refinada. Perfectos para transitar del día a la noche en la ciudad.",
                img: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=800&auto=format&fit=crop"
            },
            'glasses': {
                title: "Gafas de Sol Cat-Eye",
                price: "210,00 €",
                desc: "Un toque retro con acabado moderno. Montura de acetato negro pulido a mano con lentes tintadas de alta protección UV. El accesorio definitivo.",
                img: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=800&auto=format&fit=crop"
            },
            'bag': {
                title: "Tote Estructurado",
                price: "2.450,00 €",
                desc: "Lujo minimalista. Hecho a mano en Italia con cuero de grano completo. El tote estructurado presenta líneas limpias, herrajes dorados y un interior espacioso forrado en ante.",
                img: "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?q=80&w=800&auto=format&fit=crop"
            }
        };

        // Modal Logic
        const modal = document.getElementById('productModal');
        const modalImg = document.getElementById('modalImg');
        const modalTitle = document.getElementById('modalTitle');
        const modalPrice = document.getElementById('modalPrice');
        const modalDesc = document.getElementById('modalDesc');

        function openModal(productId) {
            const data = products[productId];
            if(!data) return;

            modalImg.src = data.img;
            modalTitle.innerText = data.title;
            modalPrice.innerText = data.price;
            modalDesc.innerText = data.desc;
            
            modal.classList.remove('hidden');
            lucide.createIcons();
        }

        function closeModal() {
            modal.classList.add('hidden');
        }

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') closeModal();
        });

        // Advanced Flipbook Logic
        // We have 2 flipping sheets (Page 1 & Page 2 divs)
        // page-1: Front=2, Back=3
        // page-2: Front=4, Back=5
        // Static Left = 1
        // Static Right = 6
        
        const pages = [
            document.getElementById('page-1'),
            document.getElementById('page-2')
        ];
        
        let currentPageIndex = 0; // 0 means showing Page 1 & 2(on flipper)

        function updateZIndexes() {
            // Pages on the right need decreasing z-index (top one is highest)
            // Pages on the left need increasing z-index (top one is highest)
            
            pages.forEach((page, index) => {
                if (page.classList.contains('flipped')) {
                    // It's on the left side
                    // The first page flipped (index 0) should be at bottom of left stack
                    // The last page flipped (index n) should be at top of left stack
                    page.style.zIndex = 10 + index; 
                } else {
                    // It's on the right side
                    // The first page (index 0) should be at top of right stack
                    // The last page (index n) should be at bottom of right stack
                    page.style.zIndex = 10 + (pages.length - index);
                }
            });
        }

        function flipNext() {
            // Find the first non-flipped page
            const pageToFlip = pages.find(p => !p.classList.contains('flipped'));
            
            if (pageToFlip) {
                pageToFlip.classList.add('flipped');
                updateZIndexes();
            }
        }

        function flipPrev() {
            // Find the last flipped page
            // We reverse the array to find the "topmost" flipped page
            const pageToUnflip = [...pages].reverse().find(p => p.classList.contains('flipped'));
            
            if (pageToUnflip) {
                pageToUnflip.classList.remove('flipped');
                updateZIndexes();
            }
        }

        function flipReset() {
            pages.forEach(p => p.classList.remove('flipped'));
            updateZIndexes();
        }

        // Initial setup
        updateZIndexes();

    
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
      

<header className="h-14 border-b border-neutral-800 bg-neutral-950 flex items-center justify-between px-4 lg:px-6 z-50 shrink-0 text-neutral-400">
<div className="flex items-center gap-6">
<button className="hover:text-white transition-colors"><i className="w-5 h-5" data-lucide="menu"></i></button>
<div className="font-bold text-white tracking-tighter text-lg">ROUGE<span className="text-red-600">.</span></div>
</div>
<div className="flex items-center gap-2 bg-neutral-900 rounded-sm px-3 py-1 text-xs font-medium text-neutral-300 border border-neutral-800">
<button className="hover:text-white"><i className="w-3 h-3" data-lucide="minus"></i></button>
<span className="tracking-wide text-neutral-500 uppercase">Catálogo 24</span>
<button className="hover:text-white"><i className="w-3 h-3" data-lucide="plus"></i></button>
</div>
<div className="flex items-center gap-5">
<button className="hover:text-white transition-colors"><i className="w-5 h-5" data-lucide="search"></i></button>
<button className="hover:text-white transition-colors relative">
<i className="w-5 h-5" data-lucide="shopping-bag"></i>
<span className="absolute -top-1 -right-1 w-2 h-2 bg-red-600 rounded-full"></span>
</button>
</div>
</header>

<main className="flex-1 relative w-full h-full flex items-center justify-center bg-neutral-900 overflow-y-auto md:overflow-hidden p-4 lg:p-8">

<button className="desktop-nav absolute left-4 lg:left-8 z-50 p-3 rounded-full border border-neutral-700 text-neutral-400 hover:bg-white hover:text-black hover:border-white transition-all group" onclick="flipPrev()">
<i className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" data-lucide="arrow-left"></i>
</button>
<button className="desktop-nav absolute right-4 lg:right-8 z-50 p-3 rounded-full border border-neutral-700 text-neutral-400 hover:bg-white hover:text-black hover:border-white transition-all group" onclick="flipNext()">
<i className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" data-lucide="arrow-right"></i>
</button>

<div className="scene w-full max-w-6xl aspect-[3/2] relative">
<div className="book-container w-full h-full relative shadow-2xl">

<div className="static-left absolute left-0 top-0 w-1/2 h-full bg-neutral-100 z-0 flex overflow-hidden rounded-l-sm">
<div className="w-full h-full relative flex flex-col">

<div className="absolute inset-0 z-0">
<img alt="Modelo Portada" className="w-full h-full object-cover grayscale opacity-90 contrast-125" src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-red-600/20 to-transparent mix-blend-multiply"></div>
</div>
<div className="absolute right-0 top-0 bottom-0 w-8 spine-shadow-left z-20 pointer-events-none"></div>

<div className="relative z-10 p-12 flex flex-col h-full justify-between">
<div className="flex justify-between items-start">
<div>
<h1 className="text-6xl font-bold tracking-tighter text-white drop-shadow-lg leading-none">LA<br/><span className="text-red-600">EDICIÓN</span><br/>ROJA</h1>
</div>
<div className="bg-white/10 backdrop-blur border border-white/20 p-2 rounded-full text-white">
<i className="w-5 h-5" data-lucide="globe"></i>
</div>
</div>
<div className="flex flex-col gap-4 items-start">
<div className="backdrop-blur-md bg-white/90 p-6 max-w-xs border-l-4 border-red-600 shadow-xl">
<p className="text-xs font-bold tracking-widest text-neutral-400 mb-2 uppercase">Selección del Editor</p>
<p className="text-sm font-medium text-neutral-900 leading-relaxed mb-4">
                                        Siluetas audaces y tonos impactantes. Descubre el abrigo que define la temporada.
                                    </p>
<button className="text-xs font-bold text-red-600 hover:text-red-700 uppercase tracking-wide flex items-center gap-1 group" onclick="openModal('coat')">
                                        Ver Look <i className="w-3 h-3 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</button>
</div>
</div>
<div className="flex justify-between items-end mt-4">
<div className="text-xs font-bold text-white tracking-widest">01</div>
<div className="text-xs font-bold text-white tracking-widest">ROUGE-MAG.COM</div>
</div>
</div>
</div>
</div>

<div className="page" id="page-1" style={{zIndex: '3'}}>

<div className="page-front">
<div className="absolute left-0 top-0 bottom-0 w-12 spine-shadow-right z-20 pointer-events-none"></div>
<div className="flex h-full">
<div className="w-1/3 p-10 border-r border-neutral-100 flex flex-col justify-center bg-neutral-50">
<div className="mb-auto pt-4 text-xs font-bold text-neutral-400 rotate-180" style={{writingMode: 'vertical-rl'}}>COLECCIÓN DE OTOÑO</div>
<div className="my-auto">
<h3 className="text-3xl font-bold tracking-tighter leading-none mb-4">SEDA<br/>NOCTURNA</h3>
<p className="text-xs text-neutral-500 leading-relaxed mb-6">Elegancia en movimiento. El vestido lencero de seda presenta un escote fluido y espalda abierta.</p>
<span className="inline-block px-3 py-1 bg-red-600 text-white text-xs font-bold">890,00 €</span>
</div>
</div>
<div className="w-2/3 relative group h-full">
<img alt="Vestido" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<button className="absolute top-1/3 right-1/3 w-10 h-10 bg-white/90 backdrop-blur rounded-full shadow-lg flex items-center justify-center cursor-pointer z-20 hover:scale-110 transition-transform duration-200 hotspot-ring text-red-600" onclick="openModal('dress')">
<i className="w-5 h-5" data-lucide="eye"></i>
</button>
<div className="absolute bottom-4 right-6 text-xs font-bold text-white drop-shadow-md z-30">02</div>
</div>
</div>
</div>

<div className="page-back">
<div className="absolute right-0 top-0 bottom-0 w-8 spine-shadow-left z-20 pointer-events-none"></div>
<div className="w-full h-full relative grid grid-rows-2">

<div className="bg-neutral-900 relative group overflow-hidden">
<img alt="Zapatos" className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity" src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8">
<h3 className="text-2xl font-bold tracking-tight mb-2">PASOS FIRMES</h3>
<button className="border border-white px-6 py-2 text-xs font-bold uppercase hover:bg-white hover:text-black transition-colors" onclick="openModal('shoes')">Ver Calzado</button>
</div>
</div>

<div className="bg-white p-12 flex flex-col justify-center items-start">
<span className="text-red-600 text-xs font-bold uppercase tracking-widest mb-3">Novedades</span>
<h2 className="text-3xl font-bold tracking-tighter mb-4">BOTINES DE PIEL</h2>
<p className="text-sm text-neutral-500 leading-relaxed max-w-md mb-6">
                                    Diseñados para la vida urbana. Nuestros nuevos botines de piel italiana combinan durabilidad con una silueta moderna y afilada.
                                </p>
<div className="flex items-center gap-4 w-full">
<span className="text-lg font-bold text-neutral-900">540,00 €</span>
<div className="h-px flex-1 bg-neutral-200"></div>
</div>
</div>
<div className="absolute bottom-8 left-8 text-xs font-bold text-neutral-300">03</div>
</div>
</div>
</div>

<div className="page" id="page-2" style={{zIndex: '2'}}>

<div className="page-front">
<div className="absolute left-0 top-0 bottom-0 w-12 spine-shadow-right z-20 pointer-events-none"></div>
<div className="w-full h-full bg-neutral-50 p-12 flex flex-col relative">
<div className="absolute top-0 right-0 w-2/3 h-full bg-white skew-x-12 translate-x-20 z-0 border-l border-neutral-100"></div>
<div className="relative z-10 flex flex-col h-full">
<div className="flex justify-between items-center mb-12">
<span className="text-xs font-bold tracking-widest uppercase text-neutral-400">Accesorios</span>
<i className="w-6 h-6 text-red-600" data-lucide="sun"></i>
</div>
<div className="flex-1 flex items-center justify-center relative">
<img alt="Gafas" className="w-64 h-64 object-cover rounded-full shadow-2xl z-10 grayscale hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute -bottom-4 -right-4 bg-neutral-900 text-white p-4 shadow-xl z-20 max-w-[140px]">
<p className="text-xs font-bold leading-tight">GAFAS DE SOL CAT-EYE</p>
<p className="text-xs text-neutral-400 mt-1">210,00 €</p>
<button className="mt-2 text-[10px] uppercase font-bold border-b border-white pb-0.5" onclick="openModal('glasses')">Comprar</button>
</div>
</div>
<div className="mt-12">
<h2 className="text-4xl font-bold tracking-tighter text-right">VISIÓN<br/>CLARA</h2>
</div>
</div>
<div className="absolute bottom-4 right-6 text-xs font-bold text-neutral-300 z-30">04</div>
</div>
</div>

<div className="page-back">
<div className="absolute right-0 top-0 bottom-0 w-8 spine-shadow-left z-20 pointer-events-none"></div>
<div className="w-full h-full relative bg-red-600 text-white p-12 flex flex-col justify-center items-center text-center">
<div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
<i className="w-12 h-12 mb-6 opacity-80" data-lucide="layers"></i>
<h2 className="text-5xl font-bold tracking-tighter mb-4 relative z-10">ARCHIVO</h2>
<p className="text-red-100 max-w-xs relative z-10 text-sm leading-relaxed">
                                ¿Te perdiste el lanzamiento de verano? Explora el catálogo anterior de nuestra colección de archivo.
                            </p>
<button className="mt-8 px-8 py-3 bg-white text-red-600 text-xs font-bold tracking-widest hover:bg-neutral-100 transition-colors relative z-10 uppercase" onclick="flipReset()">
                                Volver al Inicio
                            </button>
<div className="mt-auto w-full flex justify-between text-xs font-bold text-red-300/50 relative z-10">
<span>05</span>
<span>ROUGE ARCHIVO</span>
</div>
</div>
</div>
</div>

<div className="static-right absolute right-0 top-0 w-1/2 h-full bg-white z-0 overflow-hidden rounded-r-sm border-l border-neutral-100">
<div className="w-full h-full relative p-0 flex flex-col">
<div className="absolute left-0 top-0 bottom-0 w-8 spine-shadow-right z-20 pointer-events-none"></div>
<div className="h-1/2 relative bg-neutral-50 overflow-hidden group">
<img alt="Bolso" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1594223274512-ad4803739b7c?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
<button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center cursor-pointer z-20 hover:scale-110 transition-transform duration-200 hotspot-ring text-red-600" onclick="openModal('bag')">
<i className="w-5 h-5" data-lucide="eye"></i>
</button>
</div>
<div className="h-1/2 p-10 flex flex-col justify-center">
<span className="text-red-600 font-bold text-xs tracking-widest mb-3 uppercase">Básicos</span>
<h2 className="text-4xl font-bold tracking-tighter text-neutral-900 mb-4">PIEL<br/>ITALIANA.</h2>
<p className="text-neutral-500 text-sm leading-relaxed mb-6 max-w-xs">
                                El nuevo tote estructural está diseñado para el minimalista moderno.
                            </p>
<div className="flex items-center gap-4">
<span className="text-lg font-bold text-neutral-900">2.450 €</span>
<div className="h-px flex-1 bg-neutral-200"></div>
<button className="text-xs font-bold text-neutral-900 border-b border-black hover:text-red-600 hover:border-red-600 transition-colors uppercase" onclick="openModal('bag')">Vista Rápida</button>
</div>
</div>
<div className="absolute bottom-8 right-8 text-xs font-bold text-neutral-300">06</div>
</div>
</div>
</div>
</div>
</main>

<div aria-modal="true" className="fixed inset-0 z-[60] hidden" id="productModal" role="dialog">
<div className="absolute inset-0 bg-neutral-950/80 backdrop-blur-sm transition-opacity duration-300" onclick="closeModal()"></div>
<div className="relative w-full max-w-lg md:max-w-4xl bg-white shadow-2xl overflow-hidden m-4 md:m-auto top-1/2 -translate-y-1/2 animate-in fade-in zoom-in-95 duration-200 flex flex-col md:flex-row h-auto md:h-[600px]">
<button className="absolute top-4 right-4 z-20 p-2 bg-white/80 hover:bg-neutral-100 rounded-full text-neutral-500 transition-colors" onclick="closeModal()">
<i className="w-5 h-5" data-lucide="x"></i>
</button>
<div className="w-full md:w-1/2 h-64 md:h-full bg-neutral-100 relative group">
<img alt="Producto" className="w-full h-full object-cover" id="modalImg" src=""/>
<div className="absolute bottom-6 left-6 hidden md:block">
<span className="bg-white/90 backdrop-blur px-3 py-1 text-xs font-bold tracking-widest">OT/24</span>
</div>
</div>
<div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col h-full overflow-y-auto bg-white">
<div className="mb-2">
<span className="text-xs font-bold tracking-widest text-red-600 uppercase" id="modalBrand">Colección Rouge</span>
</div>
<h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-neutral-900 mb-4" id="modalTitle">Nombre del Producto</h2>
<div className="flex items-center gap-4 mb-6 text-sm">
<span className="text-xl font-bold text-neutral-900" id="modalPrice">0,00 €</span>
<span className="text-neutral-400">|</span>
<span className="text-green-600 font-medium text-xs bg-green-50 px-2 py-1 rounded-sm">En Stock</span>
</div>
<p className="text-sm text-neutral-600 mb-8 leading-7" id="modalDesc">
                    Descripción aquí.
                </p>
<div className="space-y-6 mb-8">
<div>
<div className="flex justify-between items-center mb-2">
<span className="text-xs font-bold text-neutral-900 uppercase tracking-widest">Talla</span>
<span className="text-xs text-neutral-400 underline cursor-pointer">Guía de Tallas</span>
</div>
<div className="grid grid-cols-4 gap-2">
<button className="border border-neutral-200 py-3 text-xs font-bold hover:border-black hover:bg-black hover:text-white transition-colors">XS</button>
<button className="border border-black bg-black text-white py-3 text-xs font-bold">S</button>
<button className="border border-neutral-200 py-3 text-xs font-bold hover:border-black hover:bg-black hover:text-white transition-colors">M</button>
<button className="border border-neutral-200 py-3 text-xs font-bold hover:border-black hover:bg-black hover:text-white transition-colors">L</button>
</div>
</div>
<div>
<span className="text-xs font-bold text-neutral-900 uppercase tracking-widest block mb-2">Color</span>
<div className="flex gap-3">
<button className="w-6 h-6 rounded-full bg-red-600 ring-2 ring-offset-2 ring-red-600"></button>
<button className="w-6 h-6 rounded-full bg-black ring-transparent hover:ring-2 ring-offset-2 ring-neutral-300 transition-all"></button>
<button className="w-6 h-6 rounded-full bg-neutral-200 ring-transparent hover:ring-2 ring-offset-2 ring-neutral-300 transition-all"></button>
</div>
</div>
</div>
<div className="mt-auto pt-6 border-t border-neutral-100 flex flex-col gap-3">
<button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold tracking-widest text-xs uppercase rounded-none py-4 transition-all">
                        Añadir a la Cesta
                    </button>
<p className="text-center text-xs text-neutral-400 mt-2">Envío gratuito en pedidos superiores a 500€</p>
</div>
</div>
</div>
</div>


    </>
  );
}
