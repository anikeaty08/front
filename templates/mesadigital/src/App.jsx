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



tailwind.config = {
theme: {
extend: {
colors: {
pridor: {
emerald: '#171717', // Soft Black for text & dark backgrounds
'emerald-light': '#262626',
gold: '#166534',    // Dark Green for buttons & accents
'gold-light': '#15803d',
beige: '#F9FAFB',   // Light gray for sections
surface: '#ffffff'
}
},
fontFamily: {
serif: ['Inter', 'sans-serif'], // Use Inter globally for clean, modern look
sans: ['Inter', 'sans-serif'],
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 inset-x-0 z-50 bg-white border-b border-gray-100 backdrop-blur-xl bg-opacity-95 transition-all duration-300">
<div className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
<button className="md:hidden text-pridor-emerald hover:text-pridor-gold transition-colors" onclick="document.getElementById('mobile-menu').classList.toggle('hidden'); document.getElementById('mobile-menu').classList.toggle('flex')">
<iconify-icon className="text-2xl" height="24" icon="solar:hamburger-menu-linear" style={{color: 'rgb(22, 101, 52)'}} width="24"></iconify-icon>
</button>
<a className="flex items-center gap-2 group" href="#">
<span className="font-sans text-pridor-emerald font-bold text-xl tracking-tight group-hover:scale-105 transition-transform">
            Mesa Digital
          </span>
</a>
<nav className="hidden md:flex gap-8 items-center text-sm font-medium text-pridor-emerald/80 tracking-wide absolute left-1/2 -translate-x-1/2">
<a className="hover:text-pridor-gold transition-colors" href="#servicos">
            Serviços
          </a>
<a className="hover:text-pridor-gold transition-colors" href="#como-funciona">
            Como Funciona
          </a>
<a className="hover:text-pridor-gold transition-colors" href="#sobre">
            Sobre Nós
          </a>
</nav>
<div className="flex gap-4 items-center">
<a className="hidden sm:flex items-center gap-2 text-sm font-medium text-white bg-pridor-emerald px-4 py-2 rounded-full hover:bg-black transition-colors" href="#contacto">
<iconify-icon className="text-lg" icon="solar:whatsapp-linear"></iconify-icon>
            Contacto
          </a>
</div>
</div>
<div className="hidden md:hidden bg-white border-t border-gray-100 absolute w-full left-0 top-20 flex-col shadow-lg z-50" id="mobile-menu">
<a className="px-6 py-4 text-base font-medium text-pridor-emerald/80 hover:text-pridor-gold hover:bg-gray-50 border-b border-gray-50" href="#servicos" onclick="document.getElementById('mobile-menu').classList.add('hidden'); document.getElementById('mobile-menu').classList.remove('flex')">
          Serviços
        </a>
<a className="px-6 py-4 text-base font-medium text-pridor-emerald/80 hover:text-pridor-gold hover:bg-gray-50 border-b border-gray-50" href="#como-funciona" onclick="document.getElementById('mobile-menu').classList.add('hidden'); document.getElementById('mobile-menu').classList.remove('flex')">
          Como Funciona
        </a>
<a className="px-6 py-4 text-base font-medium text-pridor-emerald/80 hover:text-pridor-gold hover:bg-gray-50" href="#sobre" onclick="document.getElementById('mobile-menu').classList.add('hidden'); document.getElementById('mobile-menu').classList.remove('flex')">
          Sobre Nós
        </a>
</div>
</header>
<main className="flex-grow">

<section className="relative bg-pridor-beige pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden flex items-center justify-center min-h-[85vh]">
<div className="absolute inset-0 z-0">
<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pridor-gold/5 rounded-full blur-[100px]"></div>
<div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-pridor-gold/5 rounded-full blur-[120px]"></div>
</div>
<div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
<span className="text-pridor-gold uppercase block text-xs font-bold tracking-[0.2em] mb-6">Especialistas de Sintra</span>
<h1 className="font-sans text-pridor-emerald text-4xl sm:text-5xl md:text-6xl tracking-tight font-bold leading-[1.1] mb-8">
            Websites profissionais para
            <br className="hidden sm:block"/>
<span className="text-pridor-gold">restaurantes locais.</span>
</h1>
<p className="font-sans text-pridor-emerald/70 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Ajudamos restaurantes, cafés e negócios locais a terem uma presença
            profissional online e a serem encontrados no Google pelos seus
            clientes.
          </p>
<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
<a className="group relative inline-flex items-center justify-center px-8 py-4 font-sans text-sm font-medium tracking-wide text-white bg-pridor-emerald rounded-full overflow-hidden transition-all hover:bg-black hover:scale-105 duration-300" href="#como-funciona">
              Pedir Demonstração
            </a>
<a className="group relative inline-flex items-center justify-center px-8 py-4 font-sans text-sm font-medium tracking-wide text-pridor-emerald bg-white border border-gray-200 rounded-full overflow-hidden transition-all hover:border-pridor-gold hover:text-pridor-gold hover:scale-105 duration-300 gap-2" href="#contacto">
<iconify-icon className="text-lg" icon="solar:whatsapp-linear"></iconify-icon>
              Falar no WhatsApp
            </a>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-4 max-w-7xl mx-auto" id="servicos">
<div className="text-center mb-16 md:mb-24">
<h2 className="font-sans text-pridor-emerald text-3xl md:text-5xl tracking-tight font-bold mb-4">
            O que incluímos
          </h2>
<div className="w-12 h-[2px] bg-pridor-gold mx-auto"></div>
<p className="mt-6 text-pridor-emerald/70 max-w-2xl mx-auto text-base">
            Tudo o que o seu espaço precisa para ter uma presença online forte,
            sem complicações técnicas.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[280px] gap-x-6 gap-y-6">
<div className="md:col-span-2 lg:col-span-2 bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-500 flex flex-col justify-end">
<iconify-icon className="text-4xl text-pridor-gold mb-6" icon="solar:devices-linear"></iconify-icon>
<h3 className="font-sans text-2xl md:text-3xl text-pridor-emerald tracking-tight mb-3 font-semibold">
              Websites Profissionais
            </h3>
<p className="text-sm text-gray-500 max-w-sm leading-relaxed">
              Design moderno focado em destacar o seu menu, as fotografias do
              espaço e o ambiente do seu restaurante.
            </p>
</div>
<div className="md:col-span-1 lg:col-span-2 bg-pridor-emerald rounded-3xl p-8 shadow-sm hover:shadow-md transition-all duration-500 flex flex-col justify-end text-white">
<iconify-icon className="text-4xl text-pridor-gold mb-6" icon="solar:smartphone-2-linear"></iconify-icon>
<h3 className="font-sans text-2xl md:text-3xl text-white tracking-tight mb-3 font-semibold">
              Versão Mobile Otimizada
            </h3>
<p className="text-sm text-white/70 max-w-sm leading-relaxed">
              Mais de 80% das pesquisas por restaurantes são no telemóvel. O seu
              site funcionará na perfeição.
            </p>
</div>
<div className="md:col-span-2 lg:col-span-2 bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-500 flex flex-col justify-end">
<iconify-icon className="text-4xl text-pridor-gold mb-6" icon="solar:map-point-search-linear"></iconify-icon>
<h3 className="font-sans text-2xl md:text-3xl text-pridor-emerald tracking-tight mb-3 font-semibold">
              Integração Google Maps
            </h3>
<p className="text-sm text-gray-500 max-w-sm leading-relaxed">
              Seja encontrado no Google por locais e turistas. Ligação direta
              aos mapas e redes sociais.
            </p>
</div>
<div className="md:col-span-1 lg:col-span-2 bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-500 flex flex-col justify-end">
<iconify-icon className="text-4xl text-pridor-gold mb-6" icon="solar:phone-calling-linear"></iconify-icon>
<h3 className="font-sans text-2xl md:text-3xl text-pridor-emerald tracking-tight mb-3 font-semibold">
              Suporte e WhatsApp
            </h3>
<p className="text-sm text-gray-500 max-w-sm leading-relaxed">
              Botão de WhatsApp integrado para facilitar reservas, e suporte
              técnico contínuo incluído.
            </p>
</div>
</div>
</section>

<section className="py-24 bg-pridor-beige border-y border-gray-100" id="sobre">
<div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
<div className="order-2 lg:order-1 aspect-square md:aspect-[4/3] lg:aspect-square bg-white rounded-[2.5rem] relative overflow-hidden flex flex-col items-center justify-center p-8 border border-gray-100 shadow-sm">
<div className="w-24 h-24 mx-auto mb-8 border border-gray-200 rounded-full flex items-center justify-center bg-gray-50">
<iconify-icon className="text-pridor-gold text-4xl" icon="solar:map-point-linear"></iconify-icon>
</div>
<h3 className="font-sans text-pridor-emerald text-2xl tracking-tight mb-2 font-bold">
              Mesa Digital
            </h3>
<p className="text-pridor-emerald/60 text-sm font-medium uppercase tracking-widest">
              Sintra, Portugal
            </p>
</div>
<div className="order-1 lg:order-2">
<span className="text-pridor-gold text-xs tracking-[0.2em] uppercase font-bold mb-4 block">
              A Nossa Missão
            </span>
<h2 className="font-sans text-pridor-emerald text-3xl md:text-5xl tracking-tight mb-8 leading-[1.1] font-bold">
              Mais do que redes sociais,
              <br/>
              uma presença sólida.
            </h2>
<div className="space-y-6 text-base text-gray-600 leading-relaxed">
<p className="">
                Muitos restaurantes dependem exclusivamente do Instagram ou
                Facebook. No entanto, quando um turista ou cliente local procura
                onde comer, pesquisa diretamente no Google.
              </p>
<p className="">
                Um website transmite mais confiança, mostra o seu menu de forma
                clara e profissionaliza o seu negócio.
              </p>
<p className="">
                A Mesa Digital nasceu em Sintra com o objetivo de ajudar
                pequenos negócios locais a terem essa presença online de forma
                simples, acessível e moderna, sem termos técnicos confusos.
              </p>
</div>
<div className="mt-10 flex items-center gap-6">
<div className="flex items-center gap-3 text-sm text-pridor-emerald font-semibold">
<div className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-gray-100 shadow-sm">
<iconify-icon className="text-pridor-gold text-lg" icon="solar:shield-check-linear"></iconify-icon>
</div>
                Confiança
              </div>
<div className="flex items-center gap-3 text-sm text-pridor-emerald font-semibold">
<div className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-gray-100 shadow-sm">
<iconify-icon className="text-pridor-gold text-lg" icon="solar:cup-hot-linear"></iconify-icon>
</div>
                Proximidade
              </div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-4 max-w-7xl mx-auto" id="como-funciona">
<div className="text-center mb-16 md:mb-24">
<h2 className="font-sans text-pridor-emerald text-3xl md:text-4xl tracking-tight font-bold mb-2">
            Como Funciona
          </h2>
<p className="text-sm text-gray-500">
            Um processo simples em 3 passos, sem dores de cabeça.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm text-center relative hover:shadow-md transition-shadow">
<div className="w-16 h-16 bg-pridor-beige rounded-full flex items-center justify-center mx-auto mb-6 text-pridor-gold text-2xl font-bold">
              1
            </div>
<h3 className="font-sans font-semibold text-pridor-emerald text-xl tracking-tight mb-3">
              Conversa Rápida
            </h3>
<p className="text-sm text-gray-500 leading-relaxed">
              Falamos via WhatsApp ou telefone para entender as necessidades do
              seu espaço e o que quer destacar.
            </p>
</div>
<div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm text-center relative hover:shadow-md transition-shadow">
<div className="w-16 h-16 bg-pridor-beige rounded-full flex items-center justify-center mx-auto mb-6 text-pridor-gold text-2xl font-bold">
              2
            </div>
<h3 className="font-sans font-semibold text-pridor-emerald text-xl tracking-tight mb-3">
              Criação da Demonstração
            </h3>
<p className="text-sm text-gray-500 leading-relaxed">
              Criamos um protótipo visual do seu futuro website para que possa
              aprovar o design sem qualquer compromisso.
            </p>
</div>
<div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm text-center relative hover:shadow-md transition-shadow">
<div className="w-16 h-16 bg-pridor-beige rounded-full flex items-center justify-center mx-auto mb-6 text-pridor-gold text-2xl font-bold">
              3
            </div>
<h3 className="font-sans font-semibold text-pridor-emerald text-xl tracking-tight mb-3">
              Publicação do Website
            </h3>
<p className="text-sm text-gray-500 leading-relaxed">
              Após a aprovação, tratamos de toda a parte técnica, domínio e
              publicação. O seu site fica logo online.
            </p>
</div>
</div>
</section>
</main>

<footer className="bg-pridor-emerald pt-24 pb-10 border-t border-pridor-emerald-light" id="contacto">
<div className="flex flex-col text-center max-w-4xl mr-auto mb-20 ml-auto pr-4 pl-4 items-center">
<h2 className="font-sans text-white text-3xl md:text-5xl tracking-tight font-bold mb-6 leading-tight">
          Vamos criar a presença online do seu restaurante.
        </h2>
<p className="text-white/70 text-lg mb-10">
          Envie-nos uma mensagem sem compromisso e descubra como podemos ajudar
          a atrair mais clientes para o seu espaço.
        </p>
<a className="inline-flex items-center justify-center transition-all hover:bg-green-600 hover:scale-105 duration-300 gap-2 shadow-pridor-gold/20 text-base font-medium text-white tracking-wide font-sans rounded-full pt-4 pr-8 pb-4 pl-8 shadow-lg" href="https://wa.me/351968854473">
<iconify-icon className="text-2xl" icon="solar:whatsapp-linear"></iconify-icon>
          Falar no WhatsApp
        </a>
</div>
<div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 pt-12 border-t border-white/10">
<div className="flex flex-col items-center md:items-start text-center md:text-left">
<span className="font-sans text-white font-bold text-2xl tracking-tight mb-4">
            Mesa Digital
          </span>
<p className="text-sm text-white/60 leading-relaxed max-w-xs">
            Websites profissionais para restaurantes e negócios locais. Simples,
            modernos e sem complicações.
          </p>
</div>
<div className="flex flex-col items-center md:items-start text-center md:text-left">
<h4 className="font-sans text-white text-lg font-semibold tracking-tight mb-4">
            Contacto
          </h4>
<div className="space-y-3 text-sm text-white/70">
<p className="flex items-center gap-2 justify-center md:justify-start">
<iconify-icon className="text-pridor-gold text-lg" icon="solar:letter-linear"></iconify-icon>
              mesadigital.sintra@gmail.com
            </p>
<p className="flex items-center gap-2 justify-center md:justify-start">
<iconify-icon className="text-pridor-gold text-lg" icon="solar:map-point-linear"></iconify-icon>
              Sintra, Portugal
            </p>
</div>
</div>
<div className="flex flex-col items-center md:items-start text-center md:text-left">
<h4 className="font-sans text-white text-lg font-semibold tracking-tight mb-4">
            Links
          </h4>
<ul className="space-y-3 text-sm text-white/70">
<li className="">
<a className="hover:text-pridor-gold transition-colors" href="#servicos">
                Serviços
              </a>
</li>
<li className="">
<a className="hover:text-pridor-gold transition-colors" href="#como-funciona">
                Como Funciona
              </a>
</li>
<li className="">
<a className="hover:text-pridor-gold transition-colors" href="#sobre">
                Sobre Nós
              </a>
</li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto px-4 pt-8 mt-12 border-t border-white/10 text-center">
<p className="text-xs text-white/40">
          © 2024 Mesa Digital. Todos os direitos reservados.
        </p>
</div>
</footer>
<style>
      /* Custom Keyframes for the shimmer effect in the storefront placeholder */
      @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
      }
    </style>

    </>
  );
}
