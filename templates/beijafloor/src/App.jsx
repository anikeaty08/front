import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
(function() {
if (window.__auraPreviewPerformanceController) return;
const nativeRequestAnimationFrame = window.requestAnimationFrame
? window.requestAnimationFrame.bind(window)
: function(callback) { return window.setTimeout(function() { callback(Date.now()); }, 16); };
const nativeCancelAnimationFrame = window.cancelAnimationFrame
? window.cancelAnimationFrame.bind(window)
: window.clearTimeout.bind(window);
const nativeSetInterval = window.setInterval.bind(window);
let paused = false;
let nextFrameId = 1;
const frameRecords = new Map();
const pausedFrameCallbacks = new Map();
const style = document.createElement('style');
style.id = 'aura-preview-performance-style';
style.textContent = [
'html[data-aura-preview-paused="true"] *,',
'html[data-aura-preview-paused="true"] *::before,',
'html[data-aura-preview-paused="true"] *::after {',
'  animation-play-state: paused !important;',
'  transition-duration: 0s !important;',
'  scroll-behavior: auto !important;',
'}'
].join('\n');
document.head.appendChild(style);
window.requestAnimationFrame = function(callback) {
const frameId = nextFrameId++;
if (paused) {
pausedFrameCallbacks.set(frameId, callback);
frameRecords.set(frameId, { paused: true });
return frameId;
}
const nativeFrameId = nativeRequestAnimationFrame(function(timestamp) {
frameRecords.delete(frameId);
callback(timestamp);
});
frameRecords.set(frameId, { nativeFrameId: nativeFrameId });
return frameId;
};
window.cancelAnimationFrame = function(frameId) {
const record = frameRecords.get(frameId);
pausedFrameCallbacks.delete(frameId);
if (record && typeof record.nativeFrameId !== 'undefined') {
nativeCancelAnimationFrame(record.nativeFrameId);
}
frameRecords.delete(frameId);
};
window.setInterval = function(callback, delay) {
const args = Array.prototype.slice.call(arguments, 2);
return nativeSetInterval(function() {
if (paused) return;
callback.apply(this, args);
}, delay);
};
const flushPausedFrames = function() {
const callbacks = Array.from(pausedFrameCallbacks.entries());
pausedFrameCallbacks.clear();
callbacks.forEach(function(entry) {
const frameId = entry[0];
const callback = entry[1];
const nativeFrameId = nativeRequestAnimationFrame(function(timestamp) {
frameRecords.delete(frameId);
callback(timestamp);
});
frameRecords.set(frameId, { nativeFrameId: nativeFrameId });
});
};
const setPaused = function(nextPaused) {
const shouldPause = Boolean(nextPaused);
if (paused === shouldPause) return;
paused = shouldPause;
document.documentElement.toggleAttribute('data-aura-preview-paused', paused);
if (!paused) {
flushPausedFrames();
}
};
window.__auraPreviewPerformanceController = {
setPaused: setPaused,
get paused() {
return paused;
}
};
window.addEventListener('message', function(event) {
if (event.source !== window.parent) return;
if (!event.data || event.data.type !== 'aura-preview-performance-mode') return;
setPaused(event.data.paused);
});
})();



// Pre-reduced-motion guard
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (reduceMotion) {
document.documentElement.style.setProperty('--scroll-behavior', 'auto');
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



            function switchMenuTab(tabId, btnElement) {
              document.querySelectorAll('.menu-tab-content').forEach(el => {
                el.classList.add('hidden');
                el.classList.remove('active');
              });
              const targetTab = document.getElementById(tabId);
              if(targetTab) {
                targetTab.classList.remove('hidden');
                setTimeout(() => targetTab.classList.add('active'), 50);
              }
              document.querySelectorAll('.menu-tab-btn').forEach(el => {
                el.classList.remove('text-[#C05A46]', 'border-[#C05A46]');
                el.classList.add('text-stone-500', 'border-transparent');
              });
              btnElement.classList.remove('text-stone-500', 'border-transparent');
              btnElement.classList.add('text-[#C05A46]', 'border-[#C05A46]');
            }
          


      if (!reduceMotion && typeof IntersectionObserver !== 'undefined') {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('active');
              observer.unobserve(entry.target);
            }
          });
        }, {
          threshold: 0.1,
          rootMargin: "0px 0px -50px 0px"
        });

        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
      } else if (reduceMotion) {
        document.body.setAttribute('data-reduce-motion', 'true');
      }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed w-full top-0 z-50 transition-all duration-300 bg-stone-950/70 backdrop-blur-md border-b border-white/10" id="navbar">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="flex items-center" href="#">
<img alt="Beija Flor Restaurante" className="h-10 md:h-12 w-auto object-contain brightness-0 invert" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8e2301cb-a915-434f-ad8a-a0fbe87de4c9_320w.png"/>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-300">
<a className="hover:text-[#C05A46] transition-colors" href="#sobre">
            Sobre
          </a>
<a className="hover:text-[#C05A46] transition-colors" href="#cardapio">
            Cardápio
          </a>
<a className="hover:text-[#C05A46] transition-colors" href="#galeria">
            Galeria
          </a>
<a className="hover:text-[#C05A46] transition-colors" href="#depoimentos">
            Depoimentos
          </a>
<a className="hover:text-[#C05A46] transition-colors" href="#localizacao">
            Localização
          </a>
</div>
<div className="flex items-center gap-4">
<div className="hidden md:flex items-center gap-2 text-xs font-medium text-stone-400 border-r border-white/10 pr-4">
<button className="text-white">PT</button>
<span>/</span>
<button className="hover:text-white transition-colors">EN</button>
</div>
<a className="hidden md:inline-flex bg-white text-stone-950 px-5 py-2.5 rounded-full text-sm font-medium transition-all hover:bg-stone-200 hover:shadow-lg hover:-translate-y-0.5" href="#reservas">
            Reservar Mesa
          </a>
<button className="md:hidden text-2xl text-white">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</nav>

<section className="relative h-screen min-h-[40rem] flex items-center justify-center overflow-hidden bg-stone-950">
<div className="absolute inset-0 w-full h-full">
<img alt="Beijaflor Restaurant at Night" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2dd4d776-0d06-4190-b806-eedd0c4b8f9a_1600w.jpg"/>
<div className="absolute inset-0 bg-black/60"></div>
<div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent"></div>
</div>
<div className="relative z-10 text-center px-6 max-w-4xl mt-16 reveal active">
<img alt="Minimalist Hummingbird Illustration" className="w-24 md:w-32 mx-auto mb-6 object-contain drop-shadow-md brightness-0 invert opacity-90" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/df6cc0c0-a08c-4af1-944e-b4c0fe02adfc_320w.png"/>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white mb-6 font-display drop-shadow-sm leading-tight">
          Sabores do litoral,
          <br/>
          alma do Ceará.
        </h1>
<p className="text-lg md:text-xl text-stone-200 mb-10 max-w-2xl mx-auto font-light">
          A autêntica culinária litorânea encontra uma atmosfera sofisticada e
          acolhedora nas areias de Cumbuco.
        </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto bg-[#C05A46] text-white px-8 py-3.5 rounded-full text-sm font-medium transition-all hover:bg-[#a64a39] hover:shadow-lg" href="#cardapio">
            Ver Cardápio
          </a>
<a className="w-full sm:w-auto bg-white/10 backdrop-blur-md text-white border border-white/15 px-8 py-3.5 rounded-full text-sm font-medium transition-all hover:bg-white/15" href="#reservas">
            Reservar Mesa
          </a>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-stone-50" id="sobre">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="reveal">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-stone-900 font-display mb-6">
              Uma experiência
              <br/>
              de frente para os ventos.
            </h2>
<div className="space-y-6 text-stone-600 text-base leading-relaxed">
<p>
                Localizado no coração da Praia do Cumbuco, o Restaurante Beija
                Flor nasceu da paixão pela culinária cearense e pelo cenário
                vibrante da nossa costa. Criamos um espaço que une a rusticidade
                acolhedora da praia com um serviço impecável.
              </p>
<p>
                Trabalhamos com ingredientes locais, pescados frescos do dia e
                fornecedores da nossa comunidade. Seja para um almoço relaxante
                após uma sessão de kitesurf ou um jantar comemorativo, nosso
                ambiente foi pensado para celebrar bons momentos.
              </p>
</div>
<div className="mt-10 flex gap-12">
<div>
<div className="text-3xl font-display font-semibold text-[#C05A46]">
                  10+
                </div>
<div className="text-sm font-medium text-stone-500 mt-1 uppercase tracking-wider">
                  Anos de Tradição
                </div>
</div>
<div>
<div className="text-3xl font-display font-semibold text-[#C05A46]">
                  100%
                </div>
<div className="text-sm font-medium text-stone-500 mt-1 uppercase tracking-wider">
                  Ingredientes Locais
                </div>
</div>
</div>
</div>
<div className="grid grid-cols-2 gap-4 reveal" style={{transitionDelay: '200ms'}}>
<img alt="Praia de Cumbuco" className="rounded-2xl w-full h-[32rem] object-cover mt-16 shadow-sm" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a4195a81-30a1-41b3-9219-38f015ce1fbb_800w.webp"/>
<img alt="Prato Especial do Beija Flor" className="rounded-2xl w-full h-[32rem] object-cover shadow-sm" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/96740dfe-783d-41ca-ab4a-8339134813e6_800w.webp"/>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-900 border-white/10 border-t" id="cardapio">
<div className="max-w-5xl mx-auto px-6">
<div className="text-center mb-16 reveal">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white font-display mb-4">
            Nosso Cardápio
          </h2>
<p className="text-stone-300 text-base max-w-lg mx-auto">
            Pratos elaborados pelo nosso chef, combinando o frescor do mar com
            as raízes do nordeste.
          </p>
</div>
<div className="w-full">

<div className="flex flex-wrap justify-center gap-2 md:gap-8 border-b border-white/10 mb-12">
<button className="menu-tab-btn px-4 py-3 text-base md:text-lg font-display font-semibold border-b-2 text-[#C05A46] border-[#C05A46] transition-colors whitespace-nowrap" onclick="switchMenuTab('tab-entradas', this)" type="button">
              Entradas
            </button>
<button className="menu-tab-btn px-4 py-3 text-base md:text-lg font-display font-semibold border-b-2 text-stone-400 border-transparent transition-colors whitespace-nowrap" onclick="switchMenuTab('tab-principais', this)" type="button">
              Pratos Principais
            </button>
<button className="menu-tab-btn px-4 py-3 text-base md:text-lg font-display font-semibold border-b-2 text-stone-400 border-transparent transition-colors whitespace-nowrap" onclick="switchMenuTab('tab-sobremesas', this)" type="button">
              Sobremesas
            </button>
<button className="menu-tab-btn px-4 py-3 text-base md:text-lg font-display font-semibold border-b-2 text-stone-400 border-transparent transition-colors whitespace-nowrap" onclick="switchMenuTab('tab-bebidas', this)" type="button">
              Bebidas
            </button>
</div>
<div className="menu-tab-content reveal active grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12" id="tab-entradas">
<ul className="space-y-6">
<li>
<div className="flex items-baseline w-full">
<span className="text-base font-medium text-stone-100">
                    Dadinhos de Picanha Australiana
                  </span>
<div className="menu-leader"></div>
<span className="text-base font-medium text-white">
                    R$ 109,99
                  </span>
</div>
<p className="text-sm text-stone-400 mt-1 leading-relaxed">
                  Picanha bovina australiana 250g grelhado chimi-churri.
                  Acompanha farofa e vinagrete.
                </p>
</li>
<li>
<div className="flex items-baseline w-full">
<span className="text-base font-medium text-stone-100">
                    Dadinho de Bife Ancho
                  </span>
<div className="menu-leader"></div>
<span className="text-base font-medium text-white">R$ 79,99</span>
</div>
<p className="text-sm text-stone-400 mt-1 leading-relaxed">
                  250g de alta maciez e suculência, gordura marmorizada.
                  Acompanha farofa e vinagrete.
                </p>
</li>
<li>
<div className="flex items-baseline w-full">
<span className="text-base font-medium text-stone-100">
                    Dadinhos de Bife Chorizo
                  </span>
<div className="menu-leader"></div>
<span className="text-base font-medium text-white">R$ 69,99</span>
</div>
<p className="text-sm text-stone-500 mt-1 leading-relaxed">
                  Corte premium de contrafilé 250g, chimi-churri. Acompanha
                  farofa e vinagrete.
                </p>
</li>
<li>
<div className="flex items-baseline w-full">
<span className="text-base font-medium text-stone-100">
                    Vinagrete de Polvo
                  </span>
<div className="menu-leader"></div>
<span className="text-base font-medium text-white">R$ 59,99</span>
</div>
<p className="text-sm text-stone-500 mt-1 leading-relaxed">
                  Polvo em pedaços, vinagrete de manga, pão da casa crocante.
                </p>
</li>
<li>
<div className="flex items-baseline w-full">
<span className="text-base font-medium text-stone-100">
                    Filé Curado
                  </span>
<div className="menu-leader"></div>
<span className="text-base font-medium text-white">R$ 59,99</span>
</div>
<p className="text-sm text-stone-500 mt-1 leading-relaxed">
                  Filé mignon, molho mostarda, picles de cebola roxa.
                </p>
</li>
<li>
<div className="flex items-baseline w-full">
<span className="text-base font-medium text-stone-100">
                    Tartar Beija-Flor
                  </span>
<div className="menu-leader"></div>
<span className="text-base font-medium text-white">R$ 54,99</span>
</div>
<p className="text-sm text-stone-500 mt-1 leading-relaxed">
                  Atum em cubos ao molho ponzu, batidinha de ervas, baby cebola
                  crispy, chips de batata doce e mix de brotos.
                </p>
</li>
<li>
<div className="flex items-baseline w-full">
<span className="text-base font-medium text-stone-100">
                    Brócolis na Parrilla (Veg)
                  </span>
<div className="menu-leader"></div>
<span className="text-base font-medium text-white">R$ 49,99</span>
</div>
<p className="text-sm text-stone-500 mt-1 leading-relaxed">
                  Brócolis ramoso grelhado com chimi-churri, purê de feijão
                  branco, portobelo e farofa Dukkah.
                </p>
</li>
<li>
<div className="flex items-baseline w-full">
<span className="text-base font-medium text-stone-100">
                    Tulipa de Frango
                  </span>
<div className="menu-leader"></div>
<span className="text-base font-medium text-white">R$ 49,99</span>
</div>
<p className="text-sm text-stone-500 mt-1 leading-relaxed">
                  Tulipa crocante servida com molho de sweet chilli e maionese
                  de alho.
                </p>
</li>
</ul>
<ul className="space-y-6">
<li>
<div className="flex items-baseline w-full">
<span className="text-base font-medium text-stone-100">
                    Batata Beija Flor
                  </span>
<div className="menu-leader"></div>
<span className="text-base font-medium text-white">R$ 44,99</span>
</div>
<p className="text-sm text-stone-500 mt-1 leading-relaxed">
                  300g de batata frita com molho da casa.
                </p>
</li>
<li>
<div className="flex items-baseline w-full">
<span className="text-base font-medium text-stone-100">
                    Salada da Casa
                  </span>
<div className="menu-leader"></div>
<span className="text-base font-medium text-white">R$ 39,99</span>
</div>
<p className="text-sm text-stone-500 mt-1 leading-relaxed">
                  Mix de folhas orgânicas, tomates, cenoura, pepino, croutons,
                  ervas frescas ao molho de balsâmico e mel.
                </p>
</li>
<li>
<div className="flex items-baseline w-full">
<span className="text-base font-medium text-stone-100">
                    Berinjela Assada (Veg)
                  </span>
<div className="menu-leader"></div>
<span className="text-base font-medium text-white">R$ 39,99</span>
</div>
<p className="text-sm text-stone-500 mt-1 leading-relaxed">
                  Berinjela assada com ricota, semente de abóbora tostada,
                  hortelã fresca e redução de balsâmico.
                </p>
</li>
<li>
<div className="flex items-baseline w-full">
<span className="text-base font-medium text-stone-100">
                    Arancini Caprese
                  </span>
<div className="menu-leader"></div>
<span className="text-base font-medium text-white">R$ 39,99</span>
</div>
<p className="text-sm text-stone-500 mt-1 leading-relaxed">
                  Bolinhos de risoto frito, tomates, manjericão, muçarela e
                  aioli de alho assado.
                </p>
</li>
<li>
<div className="flex items-baseline w-full">
<span className="text-base font-medium text-stone-100">
                    Ostra Falsa de Salmão
                  </span>
<div className="menu-leader"></div>
<span className="text-base font-medium text-white">R$ 39,99</span>
</div>
<p className="text-sm text-stone-500 mt-1 leading-relaxed">
                  Folhas de arroz crocantes com tartar de salmão no molho ponzu
                  e maionese de limão.
                </p>
</li>
<li>
<div className="flex items-baseline w-full">
<span className="text-base font-medium text-stone-100">
                    Hommus Adama (Veg)
                  </span>
<div className="menu-leader"></div>
<span className="text-base font-medium text-white">R$ 34,99</span>
</div>
<p className="text-sm text-stone-500 mt-1 leading-relaxed">
                  Hommus de beterraba assada, falafel, molho tzatziki, sementes
                  de abóbora tostada e zaatar.
                </p>
</li>
<li>
<div className="flex items-baseline w-full">
<span className="text-base font-medium text-stone-100">
                    Cubos de Macaxeira
                  </span>
<div className="menu-leader"></div>
<span className="text-base font-medium text-white">R$ 28,99</span>
</div>
<p className="text-sm text-stone-500 mt-1 leading-relaxed">
                  Mandioca com cream cheese e parmesão em cubos, servida com
                  geleia de pimenta sabor tangerina.
                </p>
</li>
</ul>
</div>
<div className="menu-tab-content reveal hidden grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12" id="tab-principais">
<div className="flex flex-col space-y-10 w-full">
<div>
<h4 className="text-lg font-semibold tracking-tight text-[#C05A46] font-display mb-6 pb-2 border-b border-stone-100">
                  Do Mar &amp; Clássicos
                </h4>
<ul className="space-y-6">
<li>
<div className="flex items-baseline w-full">
<span className="text-base font-medium text-stone-100">
                        Surf and Turf
                      </span>
<div className="menu-leader"></div>
<span className="text-base font-medium text-white">
                        R$ 229,99
                      </span>
</div>
<p className="text-sm text-stone-500 mt-1 leading-relaxed">
                      Filet Mignon grelhado, 200g de camarão, batata bolinha
                      salteada com ervas frescas e molho de salsa trufada.
                    </p>
</li>
<li>
<div className="flex items-baseline w-full">
<span className="text-base font-medium text-stone-100">
                        Camarão Siciliano
                      </span>
<div className="menu-leader"></div>
<span className="text-base font-medium text-white">
                        R$ 119,99
                      </span>
</div>
<p className="text-sm text-stone-500 mt-1 leading-relaxed">
                      Camarão grelhado, tomatinhos confit e risoto de limão
                      siciliano.
                    </p>
</li>
<li>
<div className="flex items-baseline w-full">
<span className="text-base font-medium text-stone-100">
                        Salmão Holandese
                      </span>
<div className="menu-leader"></div>
<span className="text-base font-medium text-white">
                        R$ 114,99
                      </span>
</div>
<p className="text-sm text-stone-500 mt-1 leading-relaxed">
                      Salmão grelhado ao molho holandese com mix de legumes no
                      vapor e couve crispy.
                    </p>
</li>
<li>
<div className="flex items-baseline w-full">
<span className="text-base font-medium text-stone-100">
                        Filet de Baroa
                      </span>
<div className="menu-leader"></div>
<span className="text-base font-medium text-white">
                        R$ 99,99
                      </span>
</div>
<p className="text-sm text-stone-500 mt-1 leading-relaxed">
                      Medalhão de filet mignon grelhado, purê de mandioquinha e
                      molho Bordelais.
                    </p>
</li>
<li>
<div className="flex items-baseline w-full">
<span className="text-base font-medium text-stone-100">
                        Peixe Beija
                      </span>
<div className="menu-leader"></div>
<span className="text-base font-medium text-white">
                        R$ 99,99
                      </span>
</div>
<p className="text-sm text-stone-500 mt-1 leading-relaxed">
                      Peixe branco do dia grelhado, arroz de coco, banana
                      grelhada e farofinha de coco queimado.
                    </p>
</li>
<li>
<div className="flex items-baseline w-full">
<span className="text-base font-medium text-stone-100">
                        Pasta &amp; Basta
                      </span>
<div className="menu-leader"></div>
<span className="text-base font-medium text-white">
                        R$ 84,99
                      </span>
</div>
<p className="text-sm text-stone-500 mt-1 leading-relaxed">
                      Massa spaghetti, camarões salteados, tomate, rúcula e
                      limão siciliano.
                    </p>
</li>
<li>
<div className="flex items-baseline w-full">
<span className="text-base font-medium text-stone-100">
                        Bobó de Camarão
                      </span>
<div className="menu-leader"></div>
<span className="text-base font-medium text-white">
                        R$ 79,99
                      </span>
</div>
<p className="text-sm text-stone-500 mt-1 leading-relaxed">
                      Camarões grelhados no molho de moqueca, arroz verde,
                      farofa de dendê e espuma de coco.
                    </p>
</li>
</ul>
</div>
<div>
<h4 className="text-lg font-semibold tracking-tight text-[#C05A46] font-display mb-6 pb-2 border-b border-stone-100">
                  Burgers &amp; Especiais
                </h4>
<ul className="space-y-6">
<li>
<div className="flex items-baseline w-full">
<span className="text-base font-medium text-stone-100">
                        Hogo Fogo Burguer
                      </span>
<div className="menu-leader"></div>
<span className="text-base font-medium text-white">
                        R$ 79,99
                      </span>
</div>
<p className="text-sm text-stone-500 mt-1 leading-relaxed">
                      Blend grelhado com cheddar, cebola caramelizada, salada.
                      Acompanha batatas rústicas e aioli.
                    </p>
</li>
<li>
<div className="flex items-baseline w-full">
<span className="text-base font-medium text-stone-100">
                        Ancho à Moda Cearense
                      </span>
<div className="menu-leader"></div>
<span className="text-base font-medium text-white">
                        R$ 66,99
                      </span>
</div>
<p className="text-sm text-stone-500 mt-1 leading-relaxed">
                      Contrafilé macio, baião de dois, batatas salteadas, salada
                      verde, farofa e vinagrete.
                    </p>
</li>
</ul>
</div>
</div>
<div className="flex flex-col space-y-10 w-full">
<div>
<h4 className="text-lg font-semibold tracking-tight text-[#C05A46] font-display mb-6 pb-2 border-b border-stone-100">
                  Parrilla &amp; Compartilhar
                </h4>
<ul className="space-y-6">
<li>
<div className="flex items-baseline w-full">
<span className="text-base font-medium text-stone-100">
                        Parrilla do Mar
                      </span>
<div className="menu-leader"></div>
<span className="text-base font-medium text-white">
                        R$ 399,99
                      </span>
</div>
<p className="text-sm text-stone-500 mt-1 leading-relaxed">
                      Camarão, Mexilhão, Atum selado, Polvo, Peixe branco e
                      legumes grelhados.
                    </p>
</li>
<li>
<div className="flex items-baseline w-full">
<span className="text-base font-medium text-stone-100">
                        Parrilla Beija Flor (1kg)
                      </span>
<div className="menu-leader"></div>
<span className="text-base font-medium text-white">
                        R$ 299,99
                      </span>
</div>
<p className="text-sm text-stone-500 mt-1 leading-relaxed">
                      Combo de carnes nobres: Picanha Australiana (250g), Ancho
                      (250g), Chorizo (250g), Picanha Uruguaia (250g).
                    </p>
</li>
<li>
<div className="flex items-baseline w-full">
<span className="text-base font-medium text-stone-100">
                        Picanha Australiana (500g)
                      </span>
<div className="menu-leader"></div>
<span className="text-base font-medium text-white">
                        R$ 209,99
                      </span>
</div>
<p className="text-sm text-stone-500 mt-1 leading-relaxed">
                      Grelhada com flor de sal e chimi-churri.
                    </p>
</li>
<li>
<div className="flex items-baseline w-full">
<span className="text-base font-medium text-stone-100">
                        T-Bone Steak (500g)
                      </span>
<div className="menu-leader"></div>
<span className="text-base font-medium text-white">
                        R$ 169,99
                      </span>
</div>
<p className="text-sm text-stone-500 mt-1 leading-relaxed">
                      Corte nobre combinando filé mignon e contrafilé.
                    </p>
</li>
<li>
<div className="flex items-baseline w-full">
<span className="text-base font-medium text-stone-100">
                        Bife Ancho (500g)
                      </span>
<div className="menu-leader"></div>
<span className="text-base font-medium text-white">
                        R$ 159,99
                      </span>
</div>
<p className="text-sm text-stone-500 mt-1 leading-relaxed">
                      Destacado pela maciez e porcentagem de gordura
                      marmorizada.
                    </p>
</li>
<li>
<div className="flex items-baseline w-full">
<span className="text-base font-medium text-stone-100">
                        Polvo Grelhado (150g)
                      </span>
<div className="menu-leader"></div>
<span className="text-base font-medium text-white">
                        R$ 84,99
                      </span>
</div>
<p className="text-sm text-stone-500 mt-1 leading-relaxed">
                      Polvo grelhado, flor de sal, chimi-churri e tomatinhos.
                    </p>
</li>
</ul>
</div>
<div>
<h4 className="text-lg font-semibold tracking-tight text-[#C05A46] font-display mb-6 pb-2 border-b border-stone-100">
                  Acompanhamentos Extras
                </h4>
<ul className="space-y-6">
<li>
<div className="flex items-baseline w-full">
<span className="text-base font-medium text-stone-100">
                        Risotos Variados
                      </span>
<div className="menu-leader"></div>
<span className="text-base font-medium text-white">
                        R$ 46,99
                      </span>
</div>
<p className="text-sm text-stone-500 mt-1 leading-relaxed">
                      Opções de Limão Siciliano ou Queijo Parmesão.
                    </p>
</li>
<li>
<div className="flex items-baseline w-full">
<span className="text-base font-medium text-stone-100">
                        Arroz Biro-Biro
                      </span>
<div className="menu-leader"></div>
<span className="text-base font-medium text-white">
                        R$ 44,99
                      </span>
</div>
<p className="text-sm text-stone-500 mt-1 leading-relaxed">
                      Arroz branco, ovos, bacon, batata palha, coentro e
                      cebolinha.
                    </p>
</li>
<li>
<div className="flex items-baseline w-full">
<span className="text-base font-medium text-stone-100">
                        Legumes Grelhados
                      </span>
<div className="menu-leader"></div>
<span className="text-base font-medium text-white">
                        R$ 38,99
                      </span>
</div>
<p className="text-sm text-stone-500 mt-1 leading-relaxed">
                      Abobrinha, batata bolinha, brócolis, cenoura com
                      chimi-churri.
                    </p>
</li>
</ul>
</div>
</div>
</div>
<div className="menu-tab-content reveal hidden grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 w-full" id="tab-sobremesas">
<div className="md:col-span-2 w-full max-w-2xl mx-auto">
<ul className="space-y-6">
<li>
<div className="flex items-baseline w-full">
<span className="text-base font-medium text-stone-100">
                      Torta Chocolate Nemesis
                    </span>
<div className="menu-leader"></div>
<span className="text-base font-medium text-white">
                      R$ 39,99
                    </span>
</div>
<p className="text-sm text-stone-500 mt-1 leading-relaxed">
                    Inspirações Londrinas, torta de chocolate meio amarga, super
                    macia e decadente.
                  </p>
</li>
</ul>
</div>
</div>
<div className="menu-tab-content reveal hidden grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12" id="tab-bebidas">
<div className="flex flex-col space-y-10 w-full">
<div>
<h4 className="text-lg font-semibold tracking-tight text-[#C05A46] font-display mb-6 pb-2 border-b border-stone-100">
                  Drinks Clássicos
                </h4>
<ul className="space-y-6">
<li>
<div className="flex items-baseline w-full">
<span className="text-base font-medium text-stone-100">
                        Gin Tônica / Gin Tropical
                      </span>
<div className="menu-leader"></div>
<span className="text-base font-medium text-white">
                        R$ 42,99
                      </span>
</div>
<p className="text-sm text-stone-500 mt-1 leading-relaxed">
                      Clássico com limão ou variação tropical com Red Bull e
                      manjericão.
                    </p>
</li>
<li>
<div className="flex items-baseline w-full">
<span className="text-base font-medium text-stone-100">
                        Caipirinha &amp; Caipifruta
                      </span>
<div className="menu-leader"></div>
<span className="text-base font-medium text-white">
                        R$ 39,99
                      </span>
</div>
<p className="text-sm text-stone-500 mt-1 leading-relaxed">
                      Ypioca Espalhada ou Vodka com Limão, Morango, Maracujá ou
                      Abacaxi.
                    </p>
</li>
<li>
<div className="flex items-baseline w-full">
<span className="text-base font-medium text-stone-100">
                        Aperol Spritz
                      </span>
<div className="menu-leader"></div>
<span className="text-base font-medium text-white">
                        R$ 39,99
                      </span>
</div>
<p className="text-sm text-stone-500 mt-1 leading-relaxed">
                      Aperol, Prosecco e água com gás.
                    </p>
</li>
<li>
<div className="flex items-baseline w-full">
<span className="text-base font-medium text-stone-100">
                        Mojito / Moscow Mule
                      </span>
<div className="menu-leader"></div>
<span className="text-base font-medium text-white">
                        R$ 39,99
                      </span>
</div>
<p className="text-sm text-stone-500 mt-1 leading-relaxed">
                      Os refrescantes clássicos da coquetelaria mundial.
                    </p>
</li>
<li>
<div className="flex items-baseline w-full">
<span className="text-base font-medium text-stone-100">
                        Negroni / Margarita
                      </span>
<div className="menu-leader"></div>
<span className="text-base font-medium text-white">
                        R$ 34,99
                      </span>
</div>
<p className="text-sm text-stone-500 mt-1 leading-relaxed">
                      Coquetéis clássicos perfeitamente balanceados.
                    </p>
</li>
</ul>
</div>
</div>
<div className="flex flex-col space-y-10 w-full">
<div>
<h4 className="text-lg font-semibold tracking-tight text-[#C05A46] font-display mb-6 pb-2 border-b border-stone-100">
                  Bebidas &amp; Cervejas
                </h4>
<ul className="space-y-6">
<li>
<div className="flex items-baseline w-full">
<span className="text-base font-medium text-stone-100">
                        Refri Beija Flor (Autoral)
                      </span>
<div className="menu-leader"></div>
<span className="text-base font-medium text-white">
                        R$ 18,99
                      </span>
</div>
<p className="text-sm text-stone-500 mt-1 leading-relaxed">
                      Sumo de limão, xarope de gengibre, água com gás e espuma.
                    </p>
</li>
<li>
<div className="flex items-baseline w-full">
<span className="text-base font-medium text-stone-100">
                        Cervejas Long Neck
                      </span>
<div className="menu-leader"></div>
<span className="text-base font-medium text-white">
                        R$ 16,99
                      </span>
</div>
<p className="text-sm text-stone-500 mt-1 leading-relaxed">
                      Corona, Stella Artois, Heineken.
                    </p>
</li>
<li>
<div className="flex items-baseline w-full">
<span className="text-base font-medium text-stone-100">
                        Sucos Naturais
                      </span>
<div className="menu-leader"></div>
<span className="text-base font-medium text-white">
                        R$ 16,99
                      </span>
</div>
<p className="text-sm text-stone-500 mt-1 leading-relaxed">
                      Maracujá, Morango, Abacaxi (com hortelã), Cajá, Laranja.
                    </p>
</li>
<li>
<div className="flex items-baseline w-full">
<span className="text-base font-medium text-stone-100">
                        Refrigerantes em Lata
                      </span>
<div className="menu-leader"></div>
<span className="text-base font-medium text-white">
                        R$ 9,99
                      </span>
</div>
<p className="text-sm text-stone-500 mt-1 leading-relaxed">
                      Coca-Cola, Guaraná, Sprite, Fanta.
                    </p>
</li>
<li>
<div className="flex items-baseline w-full">
<span className="text-base font-medium text-stone-100">
                        Água e Café Espresso
                      </span>
<div className="menu-leader"></div>
<span className="text-base font-medium text-white">
                        R$ 9,99
                      </span>
</div>
<p className="text-sm text-stone-500 mt-1 leading-relaxed">
                      Água (com/sem gás) e café espresso premium.
                    </p>
</li>
</ul>
</div>
</div>
</div>
</div>
<div className="mt-16 text-center reveal">
<a className="inline-flex items-center gap-2 text-sm font-medium text-[#C05A46] hover:text-[#a64a39] transition-colors border-b border-[#C05A46]/30 hover:border-[#a64a39] pb-1" href="#">
            Baixar Cardápio Completo (PDF)
            <iconify-icon icon="solar:download-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>
</section>
<section className="py-24 bg-stone-50 border-b border-stone-200" id="galeria">
<div className="max-w-7xl mx-auto px-6">
<div className="text-stone-600 text-base max-w-lg mx-auto text-center mb-12 reveal">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-stone-900 font-display mb-4">
            Nossa Galeria
          </h2>
<p className="text-stone-600 text-base max-w-lg mx-auto">
            Um pouco da nossa essência, cores e sabores em imagens.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4" id="gallery-grid">
<div className="reveal group overflow-hidden rounded-2xl shadow-sm">
<img alt="Peixe Grelhado Gourmet com Batatas Rústicas" className="w-full h-80 md:h-[28rem] object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c6c7ea03-a616-469e-9e2d-22c0c3896b57_800w.webp"/>
</div>
<div className="reveal group overflow-hidden rounded-2xl shadow-sm" style={{transitionDelay: '100ms'}}>
<img alt="Camarões Empanados Crocantes" className="w-full h-80 md:h-[28rem] object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a5d5994a-a1d7-443d-aa39-cf8f361ce7bf_800w.webp"/>
</div>
<div className="reveal group overflow-hidden rounded-2xl shadow-sm" style={{transitionDelay: '200ms'}}>
<img alt="Polvo Grelhado Gourmet" className="w-full h-80 md:h-[28rem] object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cc8cd5cd-66ee-4f98-987b-4cdde53977b5_800w.webp"/>
</div>
<div className="reveal group overflow-hidden rounded-2xl shadow-sm" style={{transitionDelay: '300ms'}}>
<img alt="Falafel Gourmet com Homus de Beterraba" className="w-full h-80 md:h-[28rem] object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d005dca6-7bc9-4020-b9d7-5414f634b0d0_800w.webp"/>
</div>
<div className="reveal group overflow-hidden rounded-2xl shadow-sm" style={{transitionDelay: '400ms'}}>
<img alt="Espaguete com Camarões e Tomate Cereja" className="w-full h-80 md:h-[28rem] object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7ee8677e-8b1e-4072-a046-b15770057b28_800w.webp"/>
</div>
<div className="reveal group overflow-hidden rounded-2xl shadow-sm" style={{transitionDelay: '500ms'}}>
<img alt="Bowl Gourmet de Vegetais Assados e Grãos" className="w-full h-80 md:h-[28rem] object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c30baacf-7bb6-48f6-937f-d02757e27638_800w.webp"/>
</div>
<div className="reveal group overflow-hidden rounded-2xl shadow-sm" style={{transitionDelay: '600ms'}}>
<img alt="Gourmet Plated Entree on Stone Plate" className="w-full h-80 md:h-[28rem] object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a7ca273b-5a60-44bc-b78d-74f8c897d2c3_800w.webp"/>
</div>
<div className="reveal group overflow-hidden rounded-2xl shadow-sm" style={{transitionDelay: '700ms'}}>
<img alt="Gourmet Asian Appetizers on Rice Paper Crisps" className="w-full h-80 md:h-[28rem] object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f0dab07f-4a33-473c-a084-549186c916a7_800w.webp"/>
</div>
<div className="reveal group overflow-hidden rounded-2xl shadow-sm" style={{transitionDelay: '900ms'}}></div>
</div>
<div className="text-stone-600 text-base max-w-lg mx-auto text-center mt-24 mb-12 reveal">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-stone-900 font-display mb-4">
            Estrutura
          </h2>
<p className="text-stone-600 text-base max-w-lg mx-auto">
            Conheça nosso espaço pensado para o seu conforto, em harmonia com a
            natureza.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="reveal group overflow-hidden rounded-2xl shadow-sm">
<img alt="Rustic Tropical Restaurant Outdoor Seating at Night" className="w-full h-80 md:h-[28rem] object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f478aba8-02a1-4c38-96f3-7002dc7b8192_800w.webp"/>
</div>
<div className="reveal group overflow-hidden rounded-2xl shadow-sm" style={{transitionDelay: '100ms'}}>
<img alt="Beijaflor Restaurant Rustic Facade at Night" className="w-full h-80 md:h-[28rem] object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b89c6890-da74-44d7-83b7-905a8d892034_800w.webp"/>
</div>
<div className="reveal group overflow-hidden rounded-2xl shadow-sm" style={{transitionDelay: '200ms'}}>
<img alt="Rustic Modern Restaurant Interior" className="w-full h-80 md:h-[28rem] object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fbf82578-9aed-4469-a8cb-619331be1965_800w.webp"/>
</div>
<div className="reveal group overflow-hidden rounded-2xl shadow-sm" style={{transitionDelay: '300ms'}}>
<img alt="Rustic Outdoor Dining Patio at Night" className="w-full h-80 md:h-[28rem] object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f70c64a6-e63e-4c9a-94c7-4dfd8d0b2827_800w.webp"/>
</div>
<div className="reveal group overflow-hidden rounded-2xl shadow-sm" style={{transitionDelay: '400ms'}}>
<img alt="Romantic Sunset Kiss on Rooftop Terrace" className="w-full h-80 md:h-[28rem] object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7472560f-0f75-41d6-82be-3f007bad897a_800w.webp"/>
</div>
<div className="reveal group overflow-hidden rounded-2xl shadow-sm" style={{transitionDelay: '500ms'}}>
<img alt="Rustic Woven Interior Restaurant Decor" className="w-full h-80 md:h-[28rem] object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/352232ae-9182-44b2-9b01-d0dbaf2ea70b_800w.webp"/>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-950" id="depoimentos">
<div className="max-w-7xl mx-auto px-6">
<div className="text-stone-300 text-base max-w-lg mx-auto">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white font-display mb-4">
            Avaliações dos Clientes
          </h2>
<p className="text-stone-500 text-base max-w-lg mx-auto">
            Veja o que dizem aqueles que já vivenciaram os sabores e a brisa do
            Beija Flor.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="bg-stone-900/60 p-8 rounded-2xl shadow-sm border border-white/10 reveal">
<div className="flex items-center gap-1 text-[#C05A46] mb-4">
<iconify-icon className="text-xl" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xl" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xl" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xl" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xl" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-stone-600 mb-6 italic leading-relaxed">
              "Excellent food and a great view. The service was top notch and
              the seafood was extremely fresh. Highly recommend the dishes!"
            </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white font-semibold font-display">
                MS
              </div>
<div>
<h4 className="text-sm font-semibold text-stone-100">
                  Martin Stockl
                </h4>
<span className="text-xs text-stone-500">Avaliação do Google</span>
</div>
</div>
</div>
<div className="bg-stone-900/60 p-8 rounded-2xl shadow-sm border border-white/10 reveal" style={{transitionDelay: '100ms'}}>
<div className="flex items-center gap-1 text-[#C05A46] mb-4">
<iconify-icon className="text-xl" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xl" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xl" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xl" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xl" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-stone-600 mb-6 italic leading-relaxed">
              "Amazing experience right by the beach! The staff is very friendly
              and the atmosphere is perfect for a relaxing afternoon."
            </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white font-semibold font-display">
                AH
              </div>
<div className="">
<h4 className="text-sm font-semibold text-stone-100">
                  Alica Haľamová
                </h4>
<span className="text-xs text-stone-500">Avaliação do Google</span>
</div>
</div>
</div>
<div className="bg-stone-900/60 p-8 rounded-2xl shadow-sm border border-white/10 reveal" style={{transitionDelay: '200ms'}}>
<div className="flex items-center gap-1 text-[#C05A46] mb-4">
<iconify-icon className="text-xl" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xl" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xl" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xl" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xl" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-stone-600 mb-6 italic leading-relaxed">
              "Comida espetacular, peixe fresco e ambiente super agradável. Com
              certeza um dos melhores restaurantes do Ceará. Vista maravilhosa."
            </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white font-semibold font-display">
                ES
              </div>
<div>
<h4 className="text-sm font-semibold text-stone-100">
                  Eugenio Silveira
                </h4>
<span className="text-xs text-stone-500">Avaliação do Google</span>
</div>
</div>
</div>
<div className="bg-stone-900/60 p-8 rounded-2xl shadow-sm border border-white/10 reveal" style={{transitionDelay: '300ms'}}>
<div className="flex items-center gap-1 text-[#C05A46] mb-4">
<iconify-icon className="text-xl" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xl" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xl" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xl" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xl" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-stone-600 mb-6 italic leading-relaxed">
              "Lugar encantador! Fomos muito bem recebidos, os pratos são muito
              bem servidos e saborosos. O pudim de tapioca é divino."
            </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white font-semibold font-display">
                LL
              </div>
<div>
<h4 className="text-sm font-semibold text-stone-100">
                  Livia La Selva
                </h4>
<span className="text-xs text-stone-500">Avaliação do Google</span>
</div>
</div>
</div>
<div className="bg-stone-900/60 p-8 rounded-2xl shadow-sm border border-white/10 reveal" style={{transitionDelay: '400ms'}}>
<div className="flex items-center gap-1 text-[#C05A46] mb-4">
<iconify-icon className="text-xl" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xl" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xl" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xl" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xl" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-stone-600 mb-6 italic leading-relaxed">
              "Ótimo atendimento e localização privilegiada. Adoramos a moqueca,
              estava perfeita. O pôr do sol daqui não tem igual."
            </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white font-semibold font-display">
                EC
              </div>
<div className="">
<h4 className="text-sm font-semibold text-stone-100">
                  Eduarda Chaves
                </h4>
<span className="text-xs text-stone-500">Avaliação do Google</span>
</div>
</div>
</div>
<div className="bg-stone-900/60 p-8 rounded-2xl shadow-sm border border-white/10 reveal" style={{transitionDelay: '500ms'}}>
<div className="flex items-center gap-1 text-[#C05A46] mb-4">
<iconify-icon className="text-xl" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xl" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xl" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xl" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xl" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-stone-600 mb-6 italic leading-relaxed">
              "Maravilhoso! Tudo impecável, desde a caipirinha de siriguela até
              os pratos principais. Preço justo e qualidade excelente."
            </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white font-semibold font-display">
                LP
              </div>
<div>
<h4 className="text-sm font-semibold text-stone-100">
                  Lana Pereira
                </h4>
<span className="text-xs text-stone-500">Avaliação do Google</span>
</div>
</div>
</div>
</div>
<div className="mt-12 text-center reveal">
<a className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-[#C05A46] transition-colors border-b border-white/20 hover:border-[#C05A46] pb-1" href="https://www.google.com/search?sca_esv=ec2bff8bd1e2ef21&amp;rlz=1C5AJCO_enBR1202BR1202&amp;sxsrf=ANbL-n4fjX0wHvMU6pFqfiK9R4QaHwYQTQ:1781592012632&amp;q=restaurante+beija+flor+cumbuco&amp;si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOQYR3Ed1UHR7t8-rR7eXUYW5DxgnygH36KkNcuV_j9YxxMrMXK3iFHx01QxQYHqXTIR99Kjpd0bKxBC5DCl3sQvx_qd2sUjaDDHdoT-Jw44ZalC39Me1-7pysemhb8csrlYujo8%3D&amp;sa=X&amp;ved=2ahUKEwiCr7C4k4uVAxVqLLkGHZttDTYQrrQLegQIHhAA&amp;biw=1766&amp;bih=1024&amp;dpr=2" rel="noopener noreferrer" target="_blank">
            Ver mais avaliações no Google
            <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>
</section>
<section className="py-24 bg-stone-50" id="localizacao">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
<div className="order-2 lg:order-1 reveal">
<div className="aspect-[4/3] w-full rounded-2xl overflow-hidden bg-stone-200 border border-stone-300 shadow-sm relative group">
<iframe allowfullscreen="" className="absolute inset-0 w-full h-full filter grayscale-[0.3] contrast-[1.05] group-hover:grayscale-0 transition-all duration-700" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15926.832968369527!2d-38.7410052!3d-3.6264627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c73ff05c1d6837%3A0xc3c9a0afc3f91040!2sCumbuco%2C%20Caucaia%20-%20CE!5e0!3m2!1sen!2sbr!4v1700000000000!5m2!1sen!2sbr" style={{border: '0'}}></iframe>
</div>
</div>
<div className="order-1 lg:order-2 flex flex-col justify-center reveal">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-stone-900 font-display mb-8">
              Venha nos visitar
            </h2>
<div className="space-y-8">

<div className="flex items-start gap-4 text-base text-stone-600 leading-relaxed">
<div className="w-10 h-10 rounded-full bg-stone-200 flex items-center justify-center text-stone-900 shrink-0">
<iconify-icon className="text-xl" icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-stone-900 mb-1 uppercase tracking-wider">
                    Endereço
                  </h4>
<p className="text-base text-stone-600 leading-relaxed">
                    R. Almirante Tamandaré, 72
                    <br/>
                    Praia de Cumbuco, Caucaia - CE
                    <br/>
                    61627-140
                  </p>
</div>
</div>

<div className="flex items-start gap-4 text-base text-stone-600 space-y-1">
<div className="w-10 h-10 rounded-full bg-stone-200 flex items-center justify-center text-stone-900 shrink-0 mt-1">
<iconify-icon className="text-xl" icon="solar:clock-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-stone-900 mb-1 uppercase tracking-wider">
                    Horário de Funcionamento
                  </h4>
<ul className="text-base text-stone-600 space-y-1">
<li className="flex justify-between w-48">
<span>Terça a Sábado</span>
<span className="font-medium">11:30 - 22:30</span>
</li>
<li className="flex justify-between w-48">
<span>Domingo</span>
<span className="font-medium">11:30 - 18:00</span>
</li>
<li className="flex justify-between w-48 text-[#C05A46]">
<span>Segunda</span>
<span className="font-medium">Fechado</span>
</li>
</ul>
</div>
</div>

<div className="flex items-start gap-4 text-base text-stone-600 leading-relaxed">
<div className="w-10 h-10 rounded-full bg-stone-200 flex items-center justify-center text-stone-900 shrink-0">
<iconify-icon className="text-xl" icon="solar:phone-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-stone-900 mb-1 uppercase tracking-wider">
                    Contato
                  </h4>
<p className="text-base text-stone-600 leading-relaxed">
                    +55 85 99999-0000
                    <br/>
                    contato@beijaflorrestaurante.com.br
                  </p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#1F3E35] text-stone-300 py-24 relative overflow-hidden" id="reservas">

<div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'radial-gradient(#F9F6F0 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16">

<div className="reveal">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white font-display mb-4">
            Reserve sua mesa
          </h2>
<p className="text-base text-stone-400 mb-10 max-w-md leading-relaxed">
            Para garantir seu lugar no pôr do sol ou planejar comemorações
            especiais, entre em contato através do nosso WhatsApp ou formulário
            abaixo.
          </p>
<a className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-6 py-3.5 rounded-full text-sm font-medium transition-all hover:bg-[#1EBE5A] hover:shadow-[0_4px_14px_0_rgba(37,211,102,0.39)] w-full sm:w-auto mb-8" href="#">
<iconify-icon className="text-lg" icon="solar:phone-calling-linear" strokeWidth="1.5"></iconify-icon>
            Falar no WhatsApp
          </a>
<div className="flex items-center gap-4 text-stone-400">
<a className="hover:text-white transition-colors flex items-center justify-center w-10 h-10 rounded-full border border-stone-600 hover:border-white" href="#">
<iconify-icon className="text-xl" icon="solar:camera-linear" strokeWidth="1.5"></iconify-icon>
</a>
<span className="text-sm">
              Acompanhe nosso dia a dia no
              <a className="text-white hover:underline" href="#">
                @beijaflorcumbuco
              </a>
</span>
</div>
</div>

<div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm reveal" style={{transitionDelay: '150ms'}}>
<form className="space-y-6">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div className="space-y-1">
<label className="text-xs font-semibold uppercase tracking-wider text-stone-400">
                  Nome Completo
                </label>
<input className="w-full appearance-none bg-transparent border-b border-stone-600 focus:border-[#C05A46] outline-none py-2 text-sm text-white transition-colors" placeholder="João Silva" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs font-semibold uppercase tracking-wider text-stone-400">
                  Qtd. de Pessoas
                </label>
<select className="w-full appearance-none bg-transparent border-b border-stone-600 focus:border-[#C05A46] outline-none py-2 text-sm text-stone-300 transition-colors cursor-pointer">
<option className="bg-[#1F3E35]" value="2">2 Pessoas</option>
<option className="bg-[#1F3E35]" value="3">3 Pessoas</option>
<option className="bg-[#1F3E35]" value="4">4 Pessoas</option>
<option className="bg-[#1F3E35]" value="5">5 Pessoas</option>
<option className="bg-[#1F3E35]" value="6+">6+ Pessoas</option>
</select>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div className="space-y-1">
<label className="text-xs font-semibold uppercase tracking-wider text-stone-400">
                  Data
                </label>
<input className="w-full appearance-none bg-transparent border-b border-stone-600 focus:border-[#C05A46] outline-none py-2 text-sm text-stone-300 transition-colors [color-scheme:dark]" type="date"/>
</div>
<div className="space-y-1">
<label className="text-xs font-semibold uppercase tracking-wider text-stone-400">
                  Horário
                </label>
<input className="w-full appearance-none bg-transparent border-b border-stone-600 focus:border-[#C05A46] outline-none py-2 text-sm text-stone-300 transition-colors [color-scheme:dark]" type="time"/>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-semibold uppercase tracking-wider text-stone-400">
                Observações Especiais (Opcional)
              </label>
<textarea className="w-full appearance-none bg-transparent border-b border-stone-600 focus:border-[#C05A46] outline-none py-2 text-sm text-white transition-colors resize-none" placeholder="Aniversário, restrições alimentares..." rows="2"></textarea>
</div>
<button className="w-full bg-white text-[#1F3E35] px-6 py-3.5 rounded-full text-sm font-medium transition-all hover:bg-stone-200" type="button">
              Solicitar Reserva
            </button>
</form>
</div>
</div>

<div className="max-w-7xl mx-auto px-6 mt-24 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-stone-500">
<p>© 2026 Restaurante Beija Flor. Todos os direitos reservados.</p>
<div className="flex gap-6">
<a className="hover:text-stone-300 transition-colors" href="#">Termos</a>
<a className="hover:text-stone-300 transition-colors" href="#">
            Privacidade
          </a>
</div>
</div>
</section>



    </>
  );
}
