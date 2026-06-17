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
fontFamily: {
heading: ['Montserrat', 'sans-serif'],
sans: ['Manrope', 'sans-serif'],
},
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        lucide.createIcons();
    
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
      

<div className="h-screen flex items-center justify-center">
<p className="text-slate-400">Conteúdo da página acima...</p>
</div>

<footer className="bg-slate-50 border-t border-slate-200">
<div className="container mx-auto px-4 md:px-6 py-12 lg:py-16">

<div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">

<div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left space-y-5">

<a className="inline-block" href="#">
<span className="font-heading text-xl font-bold tracking-tight text-slate-900">
                            Casa<span className="text-slate-400">Concreto</span>
</span>
</a>

<p className="text-slate-500 italic text-sm max-w-xs">
                        "Você sonha, nós concretizamos."
                    </p>

<span className="text-xs font-medium uppercase tracking-wide text-slate-400">
                        CAU/BR PJ609541
                    </span>

<div className="flex items-center gap-4 pt-2">
<a aria-label="Instagram" className="group flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 transition-all hover:border-amber-500 hover:bg-amber-50 hover:text-amber-600" href="#">
<i className="h-4 w-4" data-lucide="instagram"></i>
</a>
<a aria-label="LinkedIn" className="group flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 transition-all hover:border-amber-500 hover:bg-amber-50 hover:text-amber-600" href="#">
<i className="h-4 w-4" data-lucide="linkedin"></i>
</a>
<a aria-label="WhatsApp" className="group flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 transition-all hover:border-green-500 hover:bg-green-50 hover:text-green-600" href="https://wa.me/">
<i className="h-4 w-4" data-lucide="message-circle"></i>
</a>
</div>
</div>

<div className="lg:col-span-3 flex flex-col items-center lg:items-start text-center lg:text-left">
<h4 className="font-heading text-sm font-bold text-slate-900 mb-5">
                        Navegação
                    </h4>
<nav className="flex flex-col space-y-3">
<a className="text-sm text-slate-600 transition-colors hover:text-amber-600" href="#">
                            Início
                        </a>
<a className="text-sm text-slate-600 transition-colors hover:text-amber-600" href="#">
                            Construção Civil
                        </a>
<a className="text-sm text-slate-600 transition-colors hover:text-amber-600" href="#">
                            Projetos &amp; Legalização
                        </a>
<a className="text-sm text-slate-600 transition-colors hover:text-amber-600" href="#">
                            Financiamento
                        </a>
<a className="text-sm text-slate-600 transition-colors hover:text-amber-600 flex items-center gap-1.5 justify-center lg:justify-start" href="#">
                            Investimento
                            <span className="inline-flex items-center rounded-full bg-amber-100 px-1.5 py-0.5 text-[10px] font-semibold text-amber-700">
                                Novo
                            </span>
</a>
<a className="text-sm text-slate-600 transition-colors hover:text-amber-600" href="#">
                            Quem Somos
                        </a>
</nav>
</div>

<div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left">
<h4 className="font-heading text-sm font-bold text-slate-900 mb-5">
                        Fale Conosco
                    </h4>
<div className="space-y-4">

<a className="flex items-center gap-3 text-sm text-slate-600 transition-colors hover:text-amber-600 justify-center lg:justify-start" href="mailto:contato@casaconcreto.com.br">
<span className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100 text-slate-500">
<i className="h-4 w-4" data-lucide="mail"></i>
</span>
                            contato@casaconcreto.com.br
                        </a>

<a className="flex items-center gap-3 text-sm text-slate-600 transition-colors hover:text-amber-600 justify-center lg:justify-start" href="tel:+5511999999999">
<span className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100 text-slate-500">
<i className="h-4 w-4" data-lucide="phone"></i>
</span>
                            (11) 99999-9999
                        </a>

<div className="pt-3">
<a className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 shadow-sm transition-all hover:border-slate-400 hover:bg-slate-50 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2" href="#">
<i className="h-4 w-4" data-lucide="message-square"></i>
                                Iniciar Conversa
                            </a>
</div>
</div>
</div>
</div>
</div>

<div className="border-t border-slate-200">
<div className="container mx-auto px-4 md:px-6 py-6">
<div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
<p className="text-xs text-slate-500">
                        © 2024 Casa Concreto Engenharia. Todos os direitos reservados.
                    </p>
<p className="text-xs text-slate-400">
                        Desenvolvido com tecnologia <span className="font-medium text-slate-500">Aura</span>.
                    </p>
</div>
</div>
</div>
</footer>



    </>
  );
}
