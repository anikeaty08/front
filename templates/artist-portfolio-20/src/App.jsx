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
      

<nav className="lg:hidden fixed top-0 w-full bg-[#FAFAFA]/90 backdrop-blur-md z-50 border-b border-neutral-200 px-6 py-4 flex justify-between items-center">
<a className="text-lg tracking-tight font-medium font-serif italic" href="index.html">M.V.</a>
<button className="text-neutral-600 hover:text-black transition-colors">
<span className="iconify" data-height="24" data-icon="lucide:menu" data-width="24" style={{strokeWidth: '1.5'}}></span>
</button>
</nav>
<div className="flex flex-col lg:flex-row min-h-screen">

<aside className="hidden lg:flex flex-col justify-between w-64 h-screen fixed left-0 top-0 border-r border-neutral-200/60 bg-[#FAFAFA] px-8 py-10 z-40">
<div>
<h1 className="text-3xl font-serif font-medium tracking-tight mb-1 italic">
<a href="index.html">Maria Vaz</a>
</h1>
<p className="text-xs text-neutral-500 tracking-wide uppercase mb-12">Artes Visuais</p>
<nav className="flex flex-col space-y-3">
<a className="text-sm font-medium text-black transition-colors" href="index.html#works">Obras Selecionadas</a>
<a className="text-sm text-neutral-400 hover:text-black transition-colors pl-2" href="#">— Esculturas</a>
<a className="text-sm text-neutral-400 hover:text-black transition-colors pl-2" href="#">— Pinturas</a>
<a className="text-sm text-neutral-400 hover:text-black transition-colors pl-2" href="#">— Fotografia</a>
<a className="text-sm text-neutral-600 hover:text-black transition-colors mt-4" href="#">Exposições</a>
<a className="text-sm text-neutral-600 hover:text-black transition-colors" href="#">Sobre</a>
<a className="text-sm text-neutral-600 hover:text-black transition-colors" href="#">Contato</a>
</nav>
</div>
<div className="flex gap-4">
<a className="text-neutral-400 hover:text-black transition-colors" href="#">
<span className="iconify" data-icon="lucide:instagram" data-width="18" style={{strokeWidth: '1.5'}}></span>
</a>
<a className="text-neutral-400 hover:text-black transition-colors" href="#">
<span className="iconify" data-icon="lucide:mail" data-width="18" style={{strokeWidth: '1.5'}}></span>
</a>
</div>
</aside>

<main className="w-full lg:ml-64 px-6 pt-24 lg:pt-10 lg:px-12 pb-20 animate-fade-in">

<div className="mb-8 lg:mb-12">
<a className="inline-flex items-center text-xs uppercase tracking-widest text-neutral-500 hover:text-black transition-colors group" href="index.html">
<span className="iconify mr-2 group-hover:-translate-x-1 transition-transform" data-icon="lucide:arrow-left" data-width="14" style={{strokeWidth: '1.5'}}></span>
                    Voltar para Obras
                </a>
</div>

<div className="w-full bg-neutral-100 aspect-[16/9] lg:aspect-[21/9] overflow-hidden mb-12">
<img alt="Forma Vazia III - Vista Principal" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20">

<div className="md:col-span-4 order-2 md:order-1">
<div className="sticky top-10 space-y-8">
<div>
<span className="block text-xs text-neutral-400 uppercase tracking-widest mb-2">Ano</span>
<span className="text-sm text-neutral-900">2023</span>
</div>
<div className="h-px bg-neutral-200 w-full"></div>
<div>
<span className="block text-xs text-neutral-400 uppercase tracking-widest mb-2">Materiais</span>
<span className="text-sm text-neutral-900 block">Argila refratária</span>
<span className="text-sm text-neutral-900 block">Bronze fundido</span>
<span className="text-sm text-neutral-900 block">Base de aço oxidado</span>
</div>
<div className="h-px bg-neutral-200 w-full"></div>
<div>
<span className="block text-xs text-neutral-400 uppercase tracking-widest mb-2">Dimensões</span>
<span className="text-sm text-neutral-900">45 x 32 x 28 cm</span>
</div>
<div className="h-px bg-neutral-200 w-full"></div>
<div>
<span className="block text-xs text-neutral-400 uppercase tracking-widest mb-2">Status</span>
<span className="text-sm text-neutral-900 flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                                Disponível
                            </span>
</div>
<div className="pt-8">
<button className="w-full py-3 border border-neutral-900 text-neutral-900 text-sm font-medium hover:bg-neutral-900 hover:text-white transition-colors">
                                Consultar Aquisição
                            </button>
</div>
</div>
</div>

<div className="md:col-span-8 order-1 md:order-2">
<h1 className="font-serif text-4xl lg:text-5xl font-normal text-neutral-900 mb-2 tracking-tight">Forma Vazia III</h1>
<p className="text-lg text-neutral-500 font-serif italic mb-10">Série: Estudos sobre o silêncio</p>
<div className="prose prose-neutral max-w-none text-neutral-600 font-light leading-relaxed space-y-6">
<p>
                            Em "Forma Vazia III", a investigação sobre o espaço negativo atinge seu ponto de tensão máxima. A obra não se define pelo que ocupa o espaço, mas pelo que ela emoldura: o vácuo central que sustenta a estrutura física.
                        </p>
<p>
                            O contraste entre a argila crua, texturizada manualmente para evocar erosão geológica, e o bronze polido, sugere um diálogo entre o efêmero e o permanente. O processo de criação envolveu a modelagem subtrativa, onde a matéria foi removida agressivamente até restar apenas o esqueleto necessário para a sustentação da forma.
                        </p>
<p>
                            Esta peça integra a série iniciada em 2022, após a residência artística no Vale do Jequitinhonha, onde a observação das formações rochosas e a escassez de água influenciaram diretamente a paleta de cores terrosas e a aridez das superfícies.
                        </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
<div className="space-y-2">
<img alt="Detalhe textura" className="w-full h-auto object-cover aspect-[4/5] grayscale hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1516961642265-531546e84af2?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<p className="text-xs text-neutral-400 italic font-serif">Detalhe da textura oxidada</p>
</div>
<div className="space-y-2 md:mt-12">
<img alt="Vista lateral" className="w-full h-auto object-cover aspect-[4/5] grayscale hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1549490349-8643362247b5?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<p className="text-xs text-neutral-400 italic font-serif">Vista lateral em estúdio</p>
</div>
</div>
</div>
</div>

<div className="border-t border-neutral-200 mt-24 pt-12 flex justify-between items-center group cursor-pointer">
<div>
<span className="text-xs text-neutral-400 uppercase tracking-widest mb-1 block">Próxima Obra</span>
<span className="font-serif text-2xl text-neutral-900 group-hover:text-neutral-500 transition-colors">Ecos Silenciosos</span>
</div>
<span className="iconify text-neutral-900 group-hover:translate-x-2 transition-transform" data-icon="lucide:arrow-right" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<footer className="mt-20 pt-8 border-t border-neutral-200 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-400">
<p>© 2024 Maria Vaz. Todos os direitos reservados.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-black transition-colors" href="#">Instagram</a>
<a className="hover:text-black transition-colors" href="#">Artsy</a>
</div>
</footer>
</main>
</div>

    </>
  );
}
