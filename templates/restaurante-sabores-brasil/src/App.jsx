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



tailwind.config = {
theme: {
extend: {
animation: {
'pulse-slow': 'pulseBadge 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
},
keyframes: {
pulseBadge: {
'0%, 100%': { transform: 'scale(1)' },
'50%': { transform: 'scale(1.04)' },
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            const filterBtns = document.querySelectorAll('.filter-btn');
            const menuItems = document.querySelectorAll('.menu-item');

            filterBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    // Reset all buttons to inactive state
                    filterBtns.forEach(b => {
                        b.classList.remove('bg-[#3D1F0D]', 'text-[#F5EFE0]', 'font-medium', 'shadow-sm');
                        b.classList.add('text-[#6B4C2A]', 'hover:bg-[#A0522D]/10', 'hover:text-[#3D1F0D]', 'font-normal');
                    });

                    // Set clicked button to active state
                    btn.classList.remove('text-[#6B4C2A]', 'hover:bg-[#A0522D]/10', 'hover:text-[#3D1F0D]', 'font-normal');
                    btn.classList.add('bg-[#3D1F0D]', 'text-[#F5EFE0]', 'font-medium', 'shadow-sm');

                    const filterValue = btn.getAttribute('data-filter');

                    // Show or hide menu items based on region
                    menuItems.forEach(item => {
                        const itemRegion = item.getAttribute('data-region');
                        
                        if (filterValue === 'todos' || itemRegion === filterValue) {
                            item.style.display = 'flex';
                            setTimeout(() => {
                                item.style.opacity = '1';
                                item.style.transform = 'scale(1)';
                            }, 50);
                        } else {
                            item.style.opacity = '0';
                            item.style.transform = 'scale(0.95)';
                            setTimeout(() => {
                                item.style.display = 'none';
                            }, 300);
                        }
                    });
                });
            });
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
      

<header className="bg-[#3D1F0D] fixed w-full top-0 z-40 shadow-xl transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-3 group" href="#">
<div className="w-12 h-12 bg-[#3D1F0D] rounded-full flex items-center justify-center border border-[#C87A2E]/30 group-hover:border-[#E8A020] transition-colors relative">
<div className="absolute inset-[-2px] border border-dashed border-[#C87A2E]/20 rounded-full rotate-45"></div>
<iconify-icon className="text-[#C87A2E]" height="24" icon="solar:cup-hot-linear" width="24"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="font-['Great_Vibes'] text-[#F5EFE0] text-3xl leading-none -mb-1">Sabores do Brasil</span>
<span className="font-['DM_Sans'] text-[#A0522D] text-xs font-semibold uppercase tracking-widest ml-2">Restaurante</span>
</div>
</a>

<nav className="hidden md:flex items-center gap-8">
<a className="font-['DM_Sans'] font-normal text-sm uppercase tracking-widest text-[#F5EFE0] hover:text-[#E8A020] transition-colors" href="#proposta">A Proposta</a>
<a className="font-['DM_Sans'] font-normal text-sm uppercase tracking-widest text-[#F5EFE0] hover:text-[#E8A020] transition-colors" href="#estado-mes">Estado do Mês</a>
<a className="font-['DM_Sans'] font-normal text-sm uppercase tracking-widest text-[#F5EFE0] hover:text-[#E8A020] transition-colors" href="#cardapio">Cardápio</a>
<a className="font-['DM_Sans'] font-normal text-sm uppercase tracking-widest text-[#F5EFE0] hover:text-[#E8A020] transition-colors" href="#passaporte">Passaporte</a>
</nav>

<div className="hidden md:block">
<a className="inline-flex items-center justify-center bg-[#E8A020] text-[#2C1A0E] px-8 py-3 rounded-md font-['DM_Sans'] font-semibold uppercase tracking-wider text-xs shadow-lg hover:bg-[#C87A2E] hover:-translate-y-0.5 hover:shadow-xl transition-all duration-200" href="#reserva">
                    Reservar Mesa
                </a>
</div>

<button className="md:hidden text-[#F5EFE0] hover:text-[#E8A020] transition-colors">
<iconify-icon height="28" icon="solar:hamburger-menu-linear" width="28"></iconify-icon>
</button>
</div>
</header>

<section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-[#3D1F0D]">
<div className="absolute inset-0 z-0">
<img alt="Mesa farta rústica" className="w-full h-full object-cover opacity-40 mix-blend-overlay" src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-b from-[#3D1F0D]/80 via-[#3D1F0D]/60 to-[#3D1F0D]"></div>
</div>
<div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
<span className="font-['Great_Vibes'] text-5xl md:text-7xl text-[#E8A020] mb-6 drop-shadow-lg">
                Sabores que encantam, momentos que ficam.
            </span>
<h1 className="font-['Playfair_Display'] font-semibold text-5xl md:text-7xl text-[#F5EFE0] tracking-tight leading-tight mb-8">
                Uma viagem por estados.<br/>
<span className="text-[#C87A2E]">Um sabor por vez.</span>
</h1>
<p className="font-['Lora'] font-light italic text-xl md:text-2xl text-[#FAF6EE] mb-12 max-w-2xl mx-auto">
                Descubra a autenticidade da culinária regional brasileira em um ambiente que celebra nossas raízes, tradições e o calor da nossa terra.
            </p>
<div className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto">
<a className="inline-flex items-center justify-center bg-[#E8A020] text-[#2C1A0E] px-10 py-5 rounded-md font-['DM_Sans'] font-semibold uppercase tracking-wider text-sm shadow-xl hover:bg-[#C87A2E] hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 w-full sm:w-auto" href="#cardapio">
                    Conheça o Cardápio
                </a>
<a"#reserva" <="" a="" className="inline-flex items-center justify-center bg-transparent border-2 border-[#E8A020] text-[#E8A020] px-10 py-[18px] rounded-md font-['DM_Sans'] font-semibold uppercase tracking-wider text-sm hover:bg-[#E8A020] hover:text-[#2C1A0E] transition-all duration-300 w-full sm:w-auto" href="https://wa.me/5531982965524">&gt;
                    Reservar Experiência
                
</a"#reserva"></div>
</div>

<div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none text-[#F5EFE0] translate-y-[1px]">
<svg className="relative block w-full h-[40px] md:h-[60px]" data-name="Layer 1" preserveaspectratio="none" viewbox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C79.44,79.16,159.26,62.33,240.2,53.25,267.5,50.18,294.9,50.7,321.39,56.44Z" fill="currentColor"></path>
</svg>
</div>
</section>

<section className="bg-[#F5EFE0] py-24 px-6" id="proposta">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-20">
<span className="font-['DM_Sans'] text-sm font-semibold uppercase tracking-widest text-[#A0522D] block mb-4">Nossa Essência</span>
<h2 className="font-['Playfair_Display'] font-medium text-4xl md:text-5xl text-[#3D1F0D] tracking-tight">Cada visita é uma nova<br/>viagem gastronômica.</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">

<div className="flex flex-col items-center text-center group">
<div className="w-20 h-20 rounded-full border border-[#C87A2E]/30 flex items-center justify-center mb-6 bg-[#FAF6EE] group-hover:scale-110 transition-transform duration-500 shadow-sm">
<iconify-icon className="text-[#C87A2E]" height="40" icon="solar:map-point-linear" width="40"></iconify-icon>
</div>
<h3 className="font-['Lora'] font-medium text-2xl text-[#2C1A0E] tracking-tight mb-4">Rotatividade Cultural</h3>
<p className="font-['DM_Sans'] font-light text-lg text-[#6B4C2A] leading-relaxed">
                        A cada mês, transformamos nossa cozinha e ambiente para celebrar as raízes, ingredientes e histórias de um novo estado brasileiro.
                    </p>
</div>

<div className="flex flex-col items-center text-center group">
<div className="w-20 h-20 rounded-full border border-[#C87A2E]/30 flex items-center justify-center mb-6 bg-[#FAF6EE] group-hover:scale-110 transition-transform duration-500 shadow-sm">
<iconify-icon className="text-[#C87A2E]" height="40" icon="solar:fire-linear" width="40"></iconify-icon>
</div>
<h3 className="font-['Lora'] font-medium text-2xl text-[#2C1A0E] tracking-tight mb-4">Calor e Tradição</h3>
<p className="font-['DM_Sans'] font-light text-lg text-[#6B4C2A] leading-relaxed">
                        Panelas de barro, fogo vivo e receitas passadas de geração em geração. O preparo é um ritual de respeito à verdadeira comida de raiz.
                    </p>
</div>

<div className="flex flex-col items-center text-center group">
<div className="w-20 h-20 rounded-full border border-[#C87A2E]/30 flex items-center justify-center mb-6 bg-[#FAF6EE] group-hover:scale-110 transition-transform duration-500 shadow-sm">
<iconify-icon className="text-[#C87A2E]" height="40" icon="solar:chef-hat-linear" width="40"></iconify-icon>
</div>
<h3 className="font-['Lora'] font-medium text-2xl text-[#2C1A0E] tracking-tight mb-4">Ingredientes Nativos</h3>
<p className="font-['DM_Sans'] font-light text-lg text-[#6B4C2A] leading-relaxed">
                        Trabalhamos em parceria com pequenos produtores locais para garantir que a mandioca, a castanha e as especiarias sejam autênticas.
                    </p>
</div>
</div>
</div>
</section>

<section className="bg-[#3D1F0D] py-28 px-6 relative overflow-hidden" id="estado-mes">
<div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'radial-gradient(#F5EFE0 1px, transparent 1px)', backgroundSize: '32px 32px'}}></div>
<div className="max-w-7xl mx-auto relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="relative w-full aspect-[4/5] lg:aspect-square rounded-2xl overflow-hidden border-2 border-[#C87A2E]/20 shadow-2xl group">
<img alt="Moqueca Baiana" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1559847844-5315695dadae?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#3D1F0D] via-transparent to-transparent opacity-80"></div>
<div className="absolute bottom-8 left-8 right-8 flex items-end justify-between">
<div className="flex flex-col gap-1">
<span className="font-['Great_Vibes'] text-[#E8A020] text-4xl">Bahia</span>
<span className="font-['DM_Sans'] font-light text-[#F5EFE0] text-sm uppercase tracking-widest">Região Nordeste</span>
</div>
<div className="w-16 h-16 rounded-full bg-[#3D1F0D]/80 border border-[#E8A020] backdrop-blur-sm flex items-center justify-center">
<iconify-icon className="text-[#E8A020]" height="28" icon="solar:map-linear" width="28"></iconify-icon>
</div>
</div>
</div>

<div className="flex flex-col items-start">
<div className="inline-flex items-center gap-2 bg-[#E8A020] text-[#2C1A0E] px-5 py-2 rounded-full font-['DM_Sans'] font-semibold uppercase tracking-wider text-xs shadow-md animate-pulse-slow mb-8">
<iconify-icon className="text-[#2C1A0E]" height="16" icon="solar:star-linear" width="16"></iconify-icon>
                        Em Destaque este Mês
                    </div>
<h2 className="font-['Playfair_Display'] font-medium text-4xl lg:text-5xl text-[#F5EFE0] tracking-tight mb-6 leading-tight">
                        O Axé e o Sabor<br/>da Terra de Todos os Santos
                    </h2>
<p className="font-['Lora'] font-light italic text-xl text-[#C87A2E] mb-6 border-l-2 border-[#A0522D] pl-4">
                        "O azeite de dendê ferve na panela de barro, contando histórias de séculos em cada aroma."
                    </p>
<p className="font-['DM_Sans'] font-light text-lg text-[#FAF6EE]/80 mb-10 leading-relaxed">
                        Neste mês, nossa cozinha é tomada pelos sabores vibrantes da Bahia. Preparamos um menu especial que vai desde o acarajé crocante com vatapá fresquinho, até uma moqueca de peixe e camarão que ferve lentamente em nosso fogão a lenha, finalizada com coentro fresco e muito axé.
                    </p>
<div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
<a className="inline-flex items-center justify-center bg-[#E8A020] text-[#2C1A0E] px-8 py-4 rounded-md font-['DM_Sans'] font-semibold uppercase tracking-wider text-sm shadow-lg hover:bg-[#C87A2E] hover:-translate-y-0.5 transition-all duration-300" href="#reserva">
                            Provar o Menu Baiano
                        </a>
<a className="inline-flex items-center justify-center bg-transparent border-2 border-[#C87A2E] text-[#C87A2E] px-8 py-[14px] rounded-md font-['DM_Sans'] font-semibold uppercase tracking-wider text-sm hover:bg-[#C87A2E] hover:text-[#3D1F0D] transition-all duration-300" href="#cardapio">
                            Ver Menu Completo
                        </a>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#FAF6EE] pt-24 pr-6 pb-24 pl-6" id="cardapio">
<div className="max-w-7xl mr-auto ml-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
<div>
<span className="font-['DM_Sans'] text-sm font-semibold uppercase tracking-widest text-[#A0522D] block mb-4">Nossos Clássicos</span>
<h2 className="font-['Playfair_Display'] font-medium text-4xl lg:text-5xl text-[#3D1F0D] tracking-tight">Um ícone de cada<br/>região do Brasil.</h2>
</div>
<div className="flex items-center gap-2 bg-[#F5EFE0] p-1.5 rounded-lg border border-[#A0522D]/20 overflow-x-auto no-scrollbar max-w-full" id="filter-buttons">
<button className="filter-btn px-6 py-2.5 rounded-md bg-[#3D1F0D] text-[#F5EFE0] font-['DM_Sans'] font-medium text-sm whitespace-nowrap shadow-sm transition-colors" data-filter="todos">Todos</button>
<button className="filter-btn px-6 py-2.5 rounded-md text-[#6B4C2A] hover:bg-[#A0522D]/10 hover:text-[#3D1F0D] font-['DM_Sans'] font-normal text-sm whitespace-nowrap transition-colors" data-filter="norte">Norte</button>
<button className="filter-btn px-6 py-2.5 rounded-md text-[#6B4C2A] hover:bg-[#A0522D]/10 hover:text-[#3D1F0D] font-['DM_Sans'] font-normal text-sm whitespace-nowrap transition-colors" data-filter="nordeste">Nordeste</button>
<button className="filter-btn px-6 py-2.5 rounded-md text-[#6B4C2A] hover:bg-[#A0522D]/10 hover:text-[#3D1F0D] font-['DM_Sans'] font-normal text-sm whitespace-nowrap transition-colors" data-filter="centro-oeste">Centro-Oeste</button>
<button className="filter-btn px-6 py-2.5 rounded-md text-[#6B4C2A] hover:bg-[#A0522D]/10 hover:text-[#3D1F0D] font-['DM_Sans'] font-normal text-sm whitespace-nowrap transition-colors" data-filter="sudeste">Sudeste</button>
<button className="filter-btn px-6 py-2.5 rounded-md text-[#6B4C2A] hover:bg-[#A0522D]/10 hover:text-[#3D1F0D] font-['DM_Sans'] font-normal text-sm whitespace-nowrap transition-colors" data-filter="sul">Sul</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8" id="menu-grid">

<article className="menu-item bg-[#FAF6EE] border border-[#A0522D]/25 rounded-[14px] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group flex flex-col h-full" data-region="nordeste">
<div className="relative w-full aspect-[4/3] overflow-hidden rounded-t-[10px]">
<img alt="Moqueca Baiana" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1559847844-5315695dadae?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-[#3D1F0D]/10 group-hover:bg-transparent transition-colors duration-300"></div>
<div className="absolute top-4 right-4 bg-[#3D1F0D] text-[#E8A020] font-['DM_Sans'] font-semibold text-xs uppercase tracking-widest px-3 py-1.5 rounded shadow-md backdrop-blur-sm">
                            BA
                        </div>
</div>
<div className="p-8 flex flex-col flex-grow">
<h3 className="font-['Playfair_Display'] font-medium text-2xl text-[#2C1A0E] tracking-tight mb-3">Moqueca Baiana</h3>
<p className="font-['DM_Sans'] font-light text-base text-[#A0522D] leading-relaxed mb-6 flex-grow">
                            Peixe cozido em leite de coco, azeite de dendê, tomate, cebola e coentro — servida em panela de barro. Símbolo máximo da culinária afro-brasileira.
                        </p>
<div className="flex items-end justify-between pt-4 border-t border-[#A0522D]/15 mt-auto">
<span className="font-['DM_Sans'] font-semibold text-2xl text-[#C87A2E]">R$ 165</span>
<button className="w-10 h-10 rounded-full bg-[#F5EFE0] flex items-center justify-center text-[#3D1F0D] hover:bg-[#E8A020] transition-colors border border-[#A0522D]/20">
<iconify-icon height="24" icon="solar:add-circle-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</article>

<article className="menu-item bg-[#FAF6EE] border border-[#A0522D]/25 rounded-[14px] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group flex flex-col h-full" data-region="norte">
<div className="relative w-full aspect-[4/3] overflow-hidden rounded-t-[10px]">
<img alt="Tacacá" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1547592166-23ac45744acd?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-[#3D1F0D]/10 group-hover:bg-transparent transition-colors duration-300"></div>
<div className="absolute top-4 right-4 bg-[#3D1F0D] text-[#E8A020] font-['DM_Sans'] font-semibold text-xs uppercase tracking-widest px-3 py-1.5 rounded shadow-md backdrop-blur-sm">
                            PA
                        </div>
</div>
<div className="flex flex-col flex-grow pt-8 pr-8 pb-8 pl-8">
<h3 className="font-['Playfair_Display'] font-medium text-2xl text-[#2C1A0E] tracking-tight mb-3">Tacacá Autêntico</h3>
<p className="font-['DM_Sans'] font-light text-base text-[#A0522D] leading-relaxed mb-6 flex-grow">
                            Caldo quente à base de tucupi (suco da mandioca brava fermentado), goma de tapioca, jambu (erva que dá formigamento na boca) e camarão seco.
                        </p>
<div className="flex items-end justify-between pt-4 border-t border-[#A0522D]/15 mt-auto">
<span className="font-['DM_Sans'] font-semibold text-2xl text-[#C87A2E]">R$ 58</span>
<button className="w-10 h-10 rounded-full bg-[#F5EFE0] flex items-center justify-center text-[#3D1F0D] hover:bg-[#E8A020] transition-colors border border-[#A0522D]/20">
<iconify-icon className="" height="24" icon="solar:add-circle-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</article>

<article className="menu-item bg-[#FAF6EE] border border-[#A0522D]/25 rounded-[14px] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group flex flex-col h-full" data-region="sudeste">
<div className="relative w-full aspect-[4/3] overflow-hidden rounded-t-[10px]">
<img alt="Frango com Quiabo" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-[#3D1F0D]/10 group-hover:bg-transparent transition-colors duration-300"></div>
<div className="absolute top-4 right-4 bg-[#3D1F0D] text-[#E8A020] font-['DM_Sans'] font-semibold text-xs uppercase tracking-widest px-3 py-1.5 rounded shadow-md backdrop-blur-sm">
                            MG
                        </div>
</div>
<div className="p-8 flex flex-col flex-grow">
<h3 className="font-['Playfair_Display'] font-medium text-2xl text-[#2C1A0E] tracking-tight mb-3">Frango com Quiabo e Angu</h3>
<p className="font-['DM_Sans'] font-light text-base text-[#A0522D] leading-relaxed mb-6 flex-grow">
                            Frango caipira refogado com quiabo, acompanhado de angu cremoso de fubá. Prato raiz, de domingo, de avó — emociona até quem não é mineiro.
                        </p>
<div className="flex items-end justify-between pt-4 border-t border-[#A0522D]/15 mt-auto">
<span className="text-2xl font-semibold text-[#C87A2E] font-['DM_Sans']">R$ 75</span>
<button className="w-10 h-10 rounded-full bg-[#F5EFE0] flex items-center justify-center text-[#3D1F0D] hover:bg-[#E8A020] transition-colors border border-[#A0522D]/20">
<svg className="w-[24px] h-[24px]" data-icon-replaced="true" data-icon-set="solar" data-solar="add-circle-linear" height="24" strokeWidth="2" style={{color: 'rgb(61, 31, 13)', width: '24px', height: '24px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"></circle><path d="M15 12h-3m0 0H9m3 0V9m0 3v3" strokeLinecap="round"></path></g></svg>
</button>
</div>
</div>
</article>

<article className="menu-item hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden group flex flex-col bg-[#FAF6EE] h-full border-[#A0522D]/25 border rounded-[14px] relative shadow-sm" data-region="sul">
<div className="relative w-full aspect-[4/3] overflow-hidden rounded-t-[10px]">
<img alt="Churrasco Gaúcho" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="group-hover:bg-transparent transition-colors duration-300 bg-[#3D1F0D]/10 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute top-4 right-4 bg-[#3D1F0D] text-[#E8A020] font-['DM_Sans'] font-semibold text-xs uppercase tracking-widest px-3 py-1.5 rounded shadow-md backdrop-blur-sm">
                            RS
                        </div>
</div>
<div className="flex flex-col flex-grow -translate-x-1 text-[#A0522D] pt-8 pr-8 pb-8 pl-8 scale-100">
<div className="descricao-arroz">
<h3 className="text-2xl font-medium text-[#2C1A0E] tracking-tight font-['Playfair_Display'] mb-3">Churrasco Gaúcho</h3>
</div>

                            Carnes assadas lentamente no espeto, temperadas apenas com sal grosso. Mais do que um prato — é um ritual cultural do Sul do país.
                        <p></p>
<div className="flex items-end justify-between pt-4 border-t border-[#A0522D]/15 mt-auto">
<span className="font-['DM_Sans'] font-semibold text-2xl text-[#C87A2E]">R$ 145</span>
<button className="w-10 h-10 rounded-full bg-[#F5EFE0] flex items-center justify-center text-[#3D1F0D] hover:bg-[#E8A020] transition-colors border border-[#A0522D]/20 relative">
<iconify-icon className="" height="24" icon="solar:add-circle-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</article>


<article className="menu-item hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden group flex flex-col bg-[#FAF6EE] h-full border-[#A0522D]/25 border rounded-[14px] relative shadow-sm" data-region="centro-oeste">
<div className="relative w-full aspect-[4/3] overflow-hidden rounded-t-[10px]">
<img alt="Arroz com Pequi" className="group-hover:scale-105 transition-transform duration-500 w-full h-full object-cover" src="https://images.unsplash.com/photo-1564834724105-918b73d1b9e0?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute top-4 right-4 bg-[#3D1F0D] text-[#E8A020] font-['DM_Sans'] font-semibold text-xs uppercase tracking-widest px-3 py-1.5 rounded shadow-md backdrop-blur-sm">
                            MT
                        </div>
</div>
                        
                        &lt;<h3 className="text-2xl font-medium text-[#2C1A0E] tracking-tight font-['Playfair_Display'] mb-3 ml-7">Arroz Boliviano</h3><div className="descricao-arroz">
<p className="leading-relaxed flex-grow text-base font-light text-[#A0522D] font-['DM_Sans'] max-w-xs mb-6 ml-7">Um prato generoso que celebra a riqueza do centro oeste. Preparado com camadas de arroz, milho, ervilha e especiarias, finalizado com ovos cozidos e aquele toque especial de queijo dourado no forno</p>
</div>
<span className="text-2xl font-semibold text-[#C87A2E] font-['DM_Sans'] relative top-1 left-6">R$ 62</span>
<button className="flex hover:bg-[#E8A020] transition-colors text-[#3D1F0D] bg-[#F5EFE0] w-10 h-10 border-[#A0522D]/20 border rounded-full relative bottom-2 left-80 items-center justify-center">
<iconify-icon className="" height="24" icon="solar:add-circle-linear" style={{color: 'rgb(61, 31, 13)'}} width="24"></iconify-icon>
</button>
</article></div>
</div>
<div className="text-center mt-16">
<a className="inline-flex items-center justify-center bg-transparent border-2 border-[#3D1F0D] text-[#3D1F0D] px-10 py-4 rounded-md font-['DM_Sans'] font-semibold uppercase tracking-wider text-sm hover:bg-[#3D1F0D] hover:text-[#F5EFE0] transition-all duration-300" href="#">
                    Ver Carta de Bebidas
                </a>
</div>
</section>

<section className="border-y bg-[#F5EFE0] border-[#A0522D]/10 pt-24 pr-6 pb-24 pl-6 relative" id="passaporte">
<div className="text-center max-w-4xl mr-auto ml-auto">
<iconify-icon className="text-[#C87A2E] mx-auto mb-6" height="48" icon="solar:ticket-linear" width="48"></iconify-icon>
<h2 className="font-['Playfair_Display'] font-medium text-4xl lg:text-5xl text-[#3D1F0D] tracking-tight mb-6">Seu Passaporte Gastronômico</h2>
<p className="font-['DM_Sans'] font-light text-lg text-[#6B4C2A] leading-relaxed mb-12">
                Solicite seu passaporte na primeira visita. A cada "Estado do Mês" que você provar, ganhe um carimbo oficial. Complete regiões para desbloquear experiências e pratos exclusivos por nossa conta.
            </p>
<div className="bg-[#D9CFC0]/30 rounded-2xl p-8 md:p-12 border border-[#A0522D]/20 shadow-inner relative overflow-hidden flex flex-col items-center justify-center min-h-[300px] mb-12">
<div className="absolute inset-0 opacity-[0.04] flex items-center justify-center pointer-events-none">
<iconify-icon className="text-[#3D1F0D]" height="384" icon="solar:pot-linear" width="384"></iconify-icon>
</div>
<div className="flex flex-wrap justify-center gap-6 relative z-10">
<div className="w-24 h-24 rounded-full border-[3px] border-[#C87A2E] flex flex-col items-center justify-center rotate-[-12deg] opacity-90 shadow-sm bg-[#F5EFE0]/50 backdrop-blur-sm relative after:content-[''] after:absolute after:inset-1 after:border after:border-[#C87A2E]/50 after:rounded-full">
<span className="font-['DM_Sans'] font-semibold text-xs uppercase text-[#C87A2E] tracking-widest scale-75 block">Visitado</span>
<span className="font-['Playfair_Display'] font-semibold text-lg text-[#3D1F0D]">MG</span>
<span className="font-['DM_Sans'] font-light text-xs text-[#A0522D] mt-1 scale-75 block">12.OUT</span>
</div>
<div className="w-24 h-24 rounded-full border-[3px] border-[#C87A2E] flex flex-col items-center justify-center rotate-[8deg] opacity-90 shadow-sm bg-[#F5EFE0]/50 backdrop-blur-sm relative after:content-[''] after:absolute after:inset-1 after:border after:border-[#C87A2E]/50 after:rounded-full">
<span className="font-['DM_Sans'] font-semibold text-xs uppercase text-[#C87A2E] tracking-widest scale-75 block">Visitado</span>
<span className="font-['Playfair_Display'] font-semibold text-lg text-[#3D1F0D]">PA</span>
<span className="font-['DM_Sans'] font-light text-xs text-[#A0522D] mt-1 scale-75 block">05.NOV</span>
</div>
<div className="w-24 h-24 rounded-full border-[3px] border-[#E8A020] border-dashed flex flex-col items-center justify-center animate-pulse-slow bg-[#E8A020]/10">
<span className="font-['DM_Sans'] font-medium text-xs uppercase text-[#3D1F0D] tracking-widest text-center leading-tight scale-75 block">Mês Atual</span>
<span className="font-['Playfair_Display'] font-semibold text-xl text-[#E8A020] mt-1">BA</span>
</div>
<div className="w-24 h-24 rounded-full border-2 border-[#A0522D]/30 flex flex-col items-center justify-center bg-transparent">
<span className="font-['DM_Sans'] font-light text-xs uppercase text-[#A0522D]/50 tracking-widest scale-75 block">Destino</span>
<iconify-icon className="text-[#A0522D]/30 mt-1" height="16" icon="solar:lock-password-linear" width="16"></iconify-icon>
</div>
</div>
</div>
<p className="font-['Great_Vibes'] text-3xl text-[#A0522D]">Comece sua coleção de sabores hoje.</p>
</div>
</section>

<section className="bg-[#F5EFE0] py-24 px-6">
<div className="max-w-7xl mx-auto">
<h2 className="font-['Playfair_Display'] font-medium text-4xl lg:text-5xl text-[#3D1F0D] tracking-tight mb-16 text-center">Momentos que ficam.</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">

<div className="bg-[#FAF6EE] border border-[#A0522D]/10 border-l-4 border-l-[#E8A020] shadow-md p-8 relative rounded-r-xl">
<div className="absolute top-6 right-8 text-[#E8A020]/10">
<iconify-icon height="64" icon="solar:text-square-linear" width="64"></iconify-icon>
</div>
<p className="font-['Lora'] font-light italic text-lg text-[#2C1A0E] relative z-10 leading-relaxed mb-6">
                        "Sou baiana morando fora há 5 anos. Quando o estado do mês foi a Bahia, pedi a moqueca e literalmente chorei de saudade de casa. O tempero, o dendê na medida... é amor em forma de comida."
                    </p>
<div className="flex items-center gap-4 relative z-10">
<div className="w-12 h-12 bg-[#3D1F0D]/10 rounded-full flex items-center justify-center font-['DM_Sans'] font-semibold text-[#3D1F0D]">MS</div>
<div>
<p className="font-['DM_Sans'] font-medium text-sm text-[#3D1F0D]">Mariana Santos</p>
<p className="font-['DM_Sans'] text-xs text-[#A0522D]">Cliente Fiel</p>
</div>
</div>
</div>

<div className="bg-[#FAF6EE] border border-[#A0522D]/10 border-l-4 border-l-[#C87A2E] shadow-md p-8 relative rounded-r-xl">
<div className="absolute top-6 right-8 text-[#C87A2E]/10">
<iconify-icon height="64" icon="solar:text-square-linear" width="64"></iconify-icon>
</div>
<p className="font-['Lora'] font-light italic text-lg text-[#2C1A0E] relative z-10 leading-relaxed mb-6">
                        "O passaporte gastronômico é a ideia mais genial. Virou nosso encontro mensal de família descobrir qual é o estado da vez. O Frango com Quiabo também nunca erra!"
                    </p>
<div className="flex items-center gap-4 relative z-10">
<div className="w-12 h-12 bg-[#3D1F0D]/10 rounded-full flex items-center justify-center font-['DM_Sans'] font-semibold text-[#3D1F0D]">RO</div>
<div>
<p className="font-['DM_Sans'] font-medium text-sm text-[#3D1F0D]">Roberto Oliveira</p>
<p className="font-['DM_Sans'] text-xs text-[#A0522D]">3 Carimbos no Passaporte</p>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-[#3D1F0D] pt-20 pb-10 px-6 border-t-4 border-[#E8A020]">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-10 border-b border-[#F5EFE0]/10 pb-10 mb-10">
<div className="flex flex-col items-center md:items-start text-center md:text-left max-w-sm">
<a className="flex items-center gap-3 group mb-6" href="#">
<iconify-icon className="text-[#E8A020]" height="32" icon="solar:cup-hot-linear" width="32"></iconify-icon>
<div className="flex flex-col">
<span className="font-['Great_Vibes'] text-[#F5EFE0] text-3xl leading-none -mb-1">Sabores do Brasil</span>
</div>
</a>
<p className="font-['DM_Sans'] font-light text-sm text-[#FAF6EE]/70">
                    Celebrando a cultura e os ingredientes autênticos do nosso país em um ambiente que respira brasilidade.
                </p>
</div>
<div className="flex flex-col sm:flex-row gap-12 text-center sm:text-left">
<div className="flex flex-col gap-4">
<span className="font-['DM_Sans'] text-xs font-semibold uppercase tracking-widest text-[#E8A020]">Contato</span>
<a className="font-['DM_Sans'] font-light text-sm text-[#F5EFE0] hover:text-[#C87A2E] transition-colors" href="mailto:reservas@saboresdobrasil.com">reservas@saboresdobrasil.com</a>
<a className="font-['DM_Sans'] font-light text-sm text-[#F5EFE0] hover:text-[#C87A2E] transition-colors" href="https://wa.me/5531982965524" target="_blank">(31) 98296-5524</a>
</div>
<div className="flex flex-col gap-4">
<span className="font-['DM_Sans'] text-xs font-semibold uppercase tracking-widest text-[#E8A020]">Endereço</span>
<p className="font-['DM_Sans'] font-light text-sm text-[#F5EFE0]">Rua das Tradições, 1500</p>
<p className="font-['DM_Sans'] font-light text-sm text-[#F5EFE0]">Vila Madalena, São Paulo - SP</p>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
<p className="font-['DM_Sans'] font-light text-xs text-[#FAF6EE]/50">
                © 2023 Sabores do Brasil Restaurante. Todos os direitos reservados.
            </p>
</div>
</footer>

<a className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-lg hover:bg-[#1EBE5D] hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 group" href="https://wa.me/5531982965524" rel="noopener noreferrer" target="_blank">
<iconify-icon height="26" icon="solar:chat-round-dots-linear" width="26"></iconify-icon>
<span className="font-['DM_Sans'] font-medium text-sm hidden sm:block pr-2 whitespace-nowrap">Fale pelo WhatsApp</span>
</a>



    </>
  );
}
