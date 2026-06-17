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



        document.addEventListener('DOMContentLoaded', () => {
            lucide.createIcons({ strokeWidth: 1.5 });
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
      <div className="fixed top-0 w-full h-screen bg-cover bg-center -z-10" style={{backgroundImage: 'url("https://i.ibb.co/2YgCK9Jh/Chat-GPT-Image-8-de-set-de-2025-19-01-16.png?w=800&amp'}}></div>
<div className="" style={{height: '80px'}}></div> 
<main className="relative z-10 w-full">
<div className="flex items-center justify-center py-10 px-4">
<div className="w-full max-w-6xl bg-black/20 border border-white/10 rounded-3xl shadow-2xl shadow-black/40 backdrop-blur-xl animate-entry overflow-hidden">
<div className="grid grid-cols-1 md:grid-cols-2">

<section className="sm:p-10 pt-6 pr-6 pb-6 pl-6">
<div className="max-w-md mx-auto">
<div className="flex flex-col text-center mb-8 items-center">
<div className="flex justify-center mb-8 animate-entry delay-1">
<img alt="Trendly Logo" className="h-32 w-auto" src="https://i.ibb.co/DTdB4qn/Logo-Trendly-Redes-Sociais-18.png"/>
</div>
<h1 className="sm:text-4xl animate-entry delay-2 text-3xl text-white tracking-tight font-geist">E se você pudesse gerar milhares de visualizações por semana sem precisar ser criativo todos os dias?</h1>
<p className="leading-7 animate-entry delay-3 text-base text-white/70 font-geist mt-3">Este guia já soma mais de 500.000 visualizações orgânicas por mês para nossos clientes com apenas 1 hora de dedicação semanal.</p>
</div>
<form className="space-y-5">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-entry delay-4">
<div className="">
<label className="block text-sm font-medium text-white/80 font-geist" htmlFor="name">Nome</label>
<input className="form-input-glass mt-2 block w-full rounded-lg px-3.5 py-2.5 text-white placeholder:text-white/60" id="name" name="name" placeholder="Seu nome" required="" type="text"/>
</div>
<div className="">
<label className="block text-sm font-medium text-white/80 font-geist" htmlFor="lastname">Sobrenome</label>
<input className="form-input-glass mt-2 block w-full rounded-lg px-3.5 py-2.5 text-white placeholder:text-white/60" id="lastname" name="lastname" placeholder="Seu sobrenome" required="" type="text"/>
</div>
</div>
<div className="animate-entry delay-5">
<label className="block text-sm font-medium text-white/80 font-geist" htmlFor="email">E-mail</label>
<input className="form-input-glass mt-2 block w-full rounded-lg px-3.5 py-2.5 text-white placeholder:text-white/60" id="email" name="email" placeholder="seu.email@exemplo.com" required="" type="email"/>
</div>
<div className="animate-entry delay-6">
<label className="block text-sm font-medium text-white/80 font-geist" htmlFor="phone">Número de celular</label>
<input className="form-input-glass mt-2 block w-full rounded-lg px-3.5 py-2.5 text-white placeholder:text-white/60" id="phone" name="phone" placeholder="+55 (11) 99999-9999" required="" type="tel"/>
</div>
<div className="animate-entry delay-7">
<label className="flex items-start gap-3 mt-4">
<input className="mt-1 h-4 w-4 flex-shrink-0 rounded border-white/30 bg-transparent text-white accent-white focus:ring-white/50 focus:ring-offset-gray-950" required="" type="checkbox"/>
<span className="text-xs text-white/70 font-geist">Ao enviar, você concorda com nossa <a className="hover:text-white underline font-semibold" href="#">Política de Privacidade</a> e <a className="hover:text-white underline font-semibold" href="#">Termos de Serviço</a>.</span>
</label>
</div>
<div className="pt-4 animate-entry delay-8">
<button className="w-full liquid-glass-pill hover:bg-gray-200 active:scale-[0.98] text-base font-semibold text-gray-950 bg-white pt-3 pb-3" type="submit">Quero o Guia Agora</button>
</div>
<p className="flex items-center justify-center gap-2 text-xs text-white/60 font-geist pt-2 animate-entry delay-8">
<svg className="lucide lucide-lock w-3.5 h-3.5" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                                    Seus dados são criptografados e seguros.
                                </p>
</form>
</div>
</section>

<section className="relative rounded-2xl overflow-hidden h-96 md:h-auto card-glow">
<img alt="Visual abstrato com gradientes" className="absolute inset-0 h-full w-full object-cover" src="https://i.ibb.co/kgx4xjK6/Whats-App-Image-2025-09-08-at-19-13-07.jpg?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
<div className="relative h-full flex flex-col sm:p-10 pt-6 pr-6 pb-6 pl-6 justify-end">
</div>
</section>
</div>
</div>
</div>
</main>


    </>
  );
}
