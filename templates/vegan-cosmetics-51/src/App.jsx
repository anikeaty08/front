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



        document.addEventListener('DOMContentLoaded', () => {
            const heroSection = document.getElementById('hero-section');
            const heroTilt = document.getElementById('hero-tilt');
            const heroLight = document.getElementById('hero-light');

            let bounds;
            let mouseX = 0;
            let mouseY = 0;
            let currentX = 0;
            let currentY = 0;
            let isHovering = false;

            function updateBounds() {
                bounds = heroSection.getBoundingClientRect();
            }

            window.addEventListener('resize', updateBounds);
            updateBounds();

            heroSection.addEventListener('mousemove', (e) => {
                isHovering = true;
                mouseX = e.clientX - bounds.left;
                mouseY = e.clientY - bounds.top;
            });

            heroSection.addEventListener('mouseleave', () => {
                isHovering = false;
            });

            function animate() {
                if (isHovering) {
                    // Calculate target rotation (stronger multiplier = deeper tilt)
                    const targetRotX = ((mouseY / bounds.height) - 0.5) * -6;
                    const targetRotY = ((mouseX / bounds.width) - 0.5) * 6;
                    
                    // Smooth lerping for cinematic effect
                    currentX += (targetRotX - currentX) * 0.08;
                    currentY += (targetRotY - currentY) * 0.08;

                    heroTilt.style.transform = `perspective(1000px) rotateX(${currentX}deg) rotateY(${currentY}deg) scale(1.05)`;
                    heroLight.style.background = `radial-gradient(circle at ${mouseX}px ${mouseY}px, rgba(255,255,255,0.45) 0%, transparent 45%)`;
                } else {
                    // Return smoothly to center state
                    currentX += (0 - currentX) * 0.04;
                    currentY += (0 - currentY) * 0.04;
                    heroTilt.style.transform = `perspective(1000px) rotateX(${currentX}deg) rotateY(${currentY}deg) scale(1.05)`;
                    heroLight.style.background = `radial-gradient(circle at 50% 50%, rgba(255,255,255,0.2) 0%, transparent 60%)`;
                }
                requestAnimationFrame(animate);
            }
            
            animate();
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
      

<header className="sticky top-0 z-50 bg-[#FCFCFC]/80 backdrop-blur-md border-b border-stone-200/50">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<div className="md:hidden flex items-center">
<iconify-icon className="text-xl text-stone-700" icon="solar:hamburger-menu-linear"></iconify-icon>
</div>

<a className="text-xl font-semibold tracking-tighter text-stone-900" href="#">
                VGN.
            </a>

<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-stone-900" href="#">Início</a>
<a className="text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors" href="#">Skincare</a>
<a className="text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors" href="#">Corpo</a>
<a className="text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors" href="#">Sobre Nós</a>
</nav>

<div className="flex items-center gap-4 sm:gap-6 text-stone-700">
<button className="hover:text-stone-900 transition-colors hidden sm:block">
<iconify-icon className="text-xl" icon="solar:magnifer-linear"></iconify-icon>
</button>
<button className="hover:text-stone-900 transition-colors hidden sm:block">
<iconify-icon className="text-xl" icon="solar:user-linear"></iconify-icon>
</button>
<button className="hover:text-stone-900 transition-colors relative">
<iconify-icon className="text-xl" icon="solar:cart-large-minimalistic-linear"></iconify-icon>
<span className="absolute -top-1 -right-1.5 bg-stone-900 text-white text-[10px] font-medium h-4 w-4 rounded-full flex items-center justify-center">2</span>
</button>
</div>
</div>
</header>
<main>

<section className="relative w-full h-[85vh] min-h-[600px] overflow-hidden bg-stone-950 flex items-center cursor-crosshair" id="hero-section">

<div className="absolute inset-[-5%] w-[110%] h-[110%] will-change-transform origin-center flex items-center justify-center" id="hero-tilt">

<img alt="Moody Studio Portrait of Blonde Woman" className="absolute inset-0 w-full h-full object-cover object-[center_30%]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/21939e46-858c-4b79-86db-a837ba9475e6_1600w.png"/>

<img alt="" className="absolute inset-0 w-full h-full object-cover object-[center_30%] scale-105 blur-3xl opacity-40 mix-blend-screen pointer-events-none" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/21939e46-858c-4b79-86db-a837ba9475e6_1600w.png"/>

<div className="absolute inset-0 bg-stone-950/30 mix-blend-multiply pointer-events-none"></div>
<div className="absolute inset-0 bg-gradient-to-r from-stone-950/90 via-stone-950/40 to-transparent pointer-events-none"></div>

<div className="absolute inset-0 opacity-80 mix-blend-overlay pointer-events-none" id="hero-light" style={{background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.4) 0%, transparent 50%)'}}></div>
</div>

<div className="relative z-10 max-w-7xl mx-auto px-6 w-full pointer-events-none">
<div className="max-w-lg pointer-events-auto">
<span className="block text-xs font-medium tracking-[0.2em] text-stone-300 mb-6 uppercase drop-shadow-sm">
                        Coleção Origens
                    </span>
<h1 className="text-5xl md:text-6xl lg:text-[5rem] font-medium tracking-tighter text-white leading-[1.05] mb-8 drop-shadow-lg">
                        Beleza<br/>essencial.
                    </h1>
<p className="text-base text-stone-300 mb-10 leading-relaxed drop-shadow-md">
                        Retornamos à pureza. Fórmulas botânicas minimalistas que elevam o seu cuidado diário através do poder intrínseco da natureza.
                    </p>
<div className="flex items-center gap-8">
<a className="inline-flex justify-center items-center h-12 px-8 rounded-full bg-white text-stone-950 text-sm font-medium hover:bg-stone-200 transition-colors shadow-lg" href="#">
                            Explorar Coleção
                        </a>
<a className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-stone-300 transition-colors group drop-shadow-sm" href="#">
                            Descobrir
                            <iconify-icon className="text-lg transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="border-y border-stone-200/50 bg-[#FCFCFC] relative z-20">
<div className="max-w-7xl mx-auto px-6 py-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
<div className="flex flex-col items-center gap-2">
<iconify-icon className="text-2xl text-stone-400" icon="solar:leaf-linear"></iconify-icon>
<span className="text-xs font-medium text-stone-600">100% Natural</span>
</div>
<div className="flex flex-col items-center gap-2">
<iconify-icon className="text-2xl text-stone-400" icon="solar:shield-check-linear"></iconify-icon>
<span className="text-xs font-medium text-stone-600">Sem Crueldade</span>
</div>
<div className="flex flex-col items-center gap-2">
<iconify-icon className="text-2xl text-stone-400" icon="solar:box-minimalistic-linear"></iconify-icon>
<span className="text-xs font-medium text-stone-600">Embalagem Eco</span>
</div>
<div className="flex flex-col items-center gap-2">
<iconify-icon className="text-2xl text-stone-400" icon="solar:test-tube-linear"></iconify-icon>
<span className="text-xs font-medium text-stone-600">Dermatologicamente Testado</span>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-20 md:py-32">
<div className="flex items-end justify-between mb-10">
<div>
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-stone-900 mb-2">Mais Vendidos</h2>
<p className="text-sm text-stone-500">Os favoritos da nossa comunidade.</p>
</div>
<a className="hidden sm:inline-flex items-center gap-1 text-sm font-medium text-stone-900 hover:text-stone-600 transition-colors" href="#">
                    Ver todos <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">

<div className="group cursor-pointer">
<div className="relative aspect-[4/5] rounded-2xl bg-stone-100 overflow-hidden mb-4">
<img alt="Sérum Revitalizante" className="w-full h-full object-cover mix-blend-multiply transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-x-4 bottom-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
<button className="w-full bg-white/90 backdrop-blur-sm text-stone-900 text-sm font-medium py-3 rounded-xl shadow-sm hover:bg-white">
                                Adicionar
                            </button>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium text-stone-900">Sérum Revitalizante</h3>
<p className="text-xs text-stone-500 mt-1">Vitamina C + Ácido Hialurônico</p>
</div>
<span className="text-sm font-medium text-stone-900">R$ 129</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[4/5] rounded-2xl bg-stone-100 overflow-hidden mb-4">
<img alt="Creme Hidratante Diário" className="w-full h-full object-cover mix-blend-multiply transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-x-4 bottom-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
<button className="w-full bg-white/90 backdrop-blur-sm text-stone-900 text-sm font-medium py-3 rounded-xl shadow-sm hover:bg-white">
                                Adicionar
                            </button>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium text-stone-900">Hidratante Diário</h3>
<p className="text-xs text-stone-500 mt-1">Extrato de Camomila</p>
</div>
<span className="text-sm font-medium text-stone-900">R$ 89</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[4/5] rounded-2xl bg-stone-100 overflow-hidden mb-4">
<img alt="Óleo Corporal Iluminador" className="w-full h-full object-cover mix-blend-multiply transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-x-4 bottom-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
<button className="w-full bg-white/90 backdrop-blur-sm text-stone-900 text-sm font-medium py-3 rounded-xl shadow-sm hover:bg-white">
                                Adicionar
                            </button>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium text-stone-900">Óleo Iluminador</h3>
<p className="text-xs text-stone-500 mt-1">Amêndoas e Girassol</p>
</div>
<span className="text-sm font-medium text-stone-900">R$ 115</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[4/5] rounded-2xl bg-stone-100 overflow-hidden mb-4">
<div className="absolute top-3 left-3 bg-stone-900 text-white text-[10px] font-medium px-2 py-1 rounded-full z-10">Novo</div>
<img alt="Tônico Purificante" className="w-full h-full object-cover mix-blend-multiply transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1599305090598-fe179d501227?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-x-4 bottom-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
<button className="w-full bg-white/90 backdrop-blur-sm text-stone-900 text-sm font-medium py-3 rounded-xl shadow-sm hover:bg-white">
                                Adicionar
                            </button>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium text-stone-900">Tônico Purificante</h3>
<p className="text-xs text-stone-500 mt-1">Chá Verde e Aloe Vera</p>
</div>
<span className="text-sm font-medium text-stone-900">R$ 75</span>
</div>
</div>
</div>
<div className="mt-8 sm:hidden">
<a className="inline-flex w-full justify-center items-center h-12 px-8 rounded-full bg-stone-100 text-stone-900 text-sm font-medium hover:bg-stone-200 transition-colors" href="#">
                    Ver todos os produtos
                </a>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-20 md:py-32 border-t border-stone-200/50">
<div className="grid lg:grid-cols-2 gap-12 items-center">
<div className="order-2 lg:order-1 relative aspect-square lg:aspect-auto lg:h-[600px] rounded-3xl overflow-hidden bg-stone-100">
<img alt="Ingredientes naturais" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<div className="order-1 lg:order-2 lg:pl-12">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-stone-900 mb-6">
                        Da natureza para a sua pele, sem atalhos.
                    </h2>
<p className="text-base text-stone-500 mb-6 leading-relaxed">
                        Acreditamos que a verdadeira beleza não exige sacrifícios. Nossas fórmulas são criadas a partir de ingredientes botânicos rigorosamente selecionados, livres de toxinas, parabenos e qualquer tipo de crueldade animal.
                    </p>
<p className="text-base text-stone-500 mb-8 leading-relaxed">
                        Cada produto é um compromisso com a sua saúde e com o meio ambiente, embalado de forma sustentável para minimizar nosso impacto no planeta.
                    </p>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-sm font-medium text-stone-700">
<iconify-icon className="text-lg text-stone-400" icon="solar:check-circle-linear"></iconify-icon>
                            Ingredientes rastreáveis e éticos
                        </li>
<li className="flex items-center gap-3 text-sm font-medium text-stone-700">
<iconify-icon className="text-lg text-stone-400" icon="solar:check-circle-linear"></iconify-icon>
                            Fórmulas minimalistas e de alta performance
                        </li>
<li className="flex items-center gap-3 text-sm font-medium text-stone-700">
<iconify-icon className="text-lg text-stone-400" icon="solar:check-circle-linear"></iconify-icon>
                            Logística reversa de embalagens vazias
                        </li>
</ul>
<a className="inline-flex items-center gap-2 text-sm font-medium text-stone-900 hover:text-stone-600 transition-colors border-b border-stone-900 pb-0.5" href="#">
                        Leia nosso manifesto
                    </a>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24">
<div className="bg-stone-100 rounded-3xl p-8 md:p-16 text-center max-w-4xl mx-auto">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-stone-900 mb-4">Junte-se ao movimento VGN.</h2>
<p className="text-sm text-stone-500 mb-8 max-w-md mx-auto">
                    Receba 10% de desconto na sua primeira compra, além de dicas de autocuidado natural e novidades exclusivas.
                </p>
<form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
<input className="flex-1 h-12 px-4 rounded-xl border border-stone-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-stone-900/20 focus:border-stone-900 transition-all placeholder:text-stone-400" placeholder="Seu melhor e-mail" type="email"/>
<button className="h-12 px-6 rounded-xl bg-stone-900 text-white text-sm font-medium hover:bg-stone-800 transition-colors whitespace-nowrap" type="submit">
                        Inscrever-se
                    </button>
</form>
<p className="text-xs text-stone-400 mt-4">Você pode cancelar a inscrição a qualquer momento.</p>
</div>
</section>
</main>

<footer className="bg-white border-t border-stone-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
<div className="col-span-1 md:col-span-1">
<a className="text-xl font-semibold tracking-tighter text-stone-900 inline-block mb-4" href="#">
                        VGN.
                    </a>
<p className="text-xs text-stone-500 leading-relaxed max-w-xs">
                        Cosméticos de alta performance que respeitam sua pele e o planeta. Feito no Brasil com ingredientes globais sustentáveis.
                    </p>
</div>
<div>
<h4 className="text-sm font-medium text-stone-900 mb-4">Comprar</h4>
<ul className="space-y-3">
<li><a className="text-sm text-stone-500 hover:text-stone-900 transition-colors" href="#">Todos os Produtos</a></li>
<li><a className="text-sm text-stone-500 hover:text-stone-900 transition-colors" href="#">Skincare Facial</a></li>
<li><a className="text-sm text-stone-500 hover:text-stone-900 transition-colors" href="#">Cuidados com o Corpo</a></li>
<li><a className="text-sm text-stone-500 hover:text-stone-900 transition-colors" href="#">Kits Presente</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-stone-900 mb-4">Sobre</h4>
<ul className="space-y-3">
<li><a className="text-sm text-stone-500 hover:text-stone-900 transition-colors" href="#">Nossa História</a></li>
<li><a className="text-sm text-stone-500 hover:text-stone-900 transition-colors" href="#">Ingredientes</a></li>
<li><a className="text-sm text-stone-500 hover:text-stone-900 transition-colors" href="#">Sustentabilidade</a></li>
<li><a className="text-sm text-stone-500 hover:text-stone-900 transition-colors" href="#">Blog</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-stone-900 mb-4">Ajuda</h4>
<ul className="space-y-3">
<li><a className="text-sm text-stone-500 hover:text-stone-900 transition-colors" href="#">FAQ</a></li>
<li><a className="text-sm text-stone-500 hover:text-stone-900 transition-colors" href="#">Frete e Devoluções</a></li>
<li><a className="text-sm text-stone-500 hover:text-stone-900 transition-colors" href="#">Rastrear Pedido</a></li>
<li><a className="text-sm text-stone-500 hover:text-stone-900 transition-colors" href="#">Contato</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-stone-100">
<p className="text-xs text-stone-400 mb-4 md:mb-0">
                    © 2023 VGN. Cosméticos. Todos os direitos reservados.
                </p>
<div className="flex items-center gap-4 text-stone-400">
<a className="hover:text-stone-900 transition-colors" href="#">
<span className="sr-only">Instagram</span>
<svg aria-hidden="true" className="h-5 w-5" fill="currentColor" viewbox="0 0 24 24">
<path clip-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" fill-rule="evenodd"></path>
</svg>
</a>
<a className="hover:text-stone-900 transition-colors" href="#">
<span className="sr-only">Twitter</span>
<svg aria-hidden="true" className="h-5 w-5" fill="currentColor" viewbox="0 0 24 24">
<path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
</svg>
</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
