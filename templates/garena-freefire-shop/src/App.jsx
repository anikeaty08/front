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
      

<div className="fixed inset-0 z-0 pointer-events-none bg-grid-red"></div>

<header className="sticky top-0 z-50 w-full border-b border-red-900/20 bg-[#050505]/95 backdrop-blur-md">
<div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">

<div className="flex items-center gap-3">
<div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-b from-red-600 to-red-900 shadow-lg shadow-red-900/40 border border-red-500/30">

<svg className="h-6 w-6 text-white transform scale-110" fill="currentColor" viewbox="0 0 24 24">
<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path>

<path d="M11.5,22C5.5,21.5,1,16.5,1,10.5C1,5,5,1,11,1h1c6,0.5,10.5,5,10.5,10.5h-2c0-4.5-3.5-8.5-8.5-8.5 s-9,3.5-9,8s4,8.5,8.5,8.5c2,0,4-1,5-2.5l1.5,1.5C17.5,21,14.5,22.5,11.5,22z" fill="white"></path>
</svg>
</div>
<span className="text-sm font-medium tracking-wide text-neutral-200 uppercase hidden xs:block">GARENA SHOP</span>
</div>

<div className="flex items-center gap-3">

<button className="flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-800 bg-neutral-900/50 text-neutral-400 transition-colors hover:border-red-600/50 hover:text-white">
<i className="h-5 w-5" data-lucide="search"></i>
</button>

<button className="relative flex h-10 w-10 items-center justify-center rounded-lg bg-red-600 text-white shadow-lg shadow-red-900/20 transition-transform active:scale-95">
<i className="h-5 w-5" data-lucide="shopping-bag"></i>

<div className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-neutral-900 text-[10px] font-bold text-white border border-red-500">1</div>
</button>

<button className="h-10 rounded-lg border border-neutral-800 bg-neutral-900/80 px-4 text-sm font-medium text-neutral-300 transition-colors hover:bg-neutral-800 hover:text-white">
                    Entrar
                </button>
</div>
</div>
</header>

<div className="relative z-10 w-full overflow-hidden border-b border-red-900/30 bg-black">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&amp;w=2670&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-transparent to-transparent"></div>
<div className="relative mx-auto flex max-w-7xl flex-col items-center justify-center px-4 py-12 text-center">

<div className="relative mb-2">
<h1 className="font-banner text-5xl italic tracking-tighter text-white sm:text-7xl md:text-8xl lg:text-9xl drop-shadow-[0_4px_4px_rgba(220,38,38,0.5)]">
<span className="block text-2xl sm:text-4xl text-white/90 mb-[-5px] sm:mb-[-10px] not-italic font-sans font-bold uppercase tracking-widest">Loja Oficial</span>
<span className="bg-gradient-to-b from-red-500 to-red-700 bg-clip-text text-transparent">GARENA</span>
</h1>

<div className="absolute -right-4 top-1/2 -z-10 h-32 w-32 -translate-y-1/2 rounded-full bg-red-600/20 blur-3xl"></div>
<div className="absolute -left-4 top-1/2 -z-10 h-32 w-32 -translate-y-1/2 rounded-full bg-red-600/20 blur-3xl"></div>
</div>
</div>
</div>

<main className="relative z-10 flex-1 px-3 py-6 md:px-6">
<div className="mx-auto max-w-7xl">

<div className="mb-6 flex items-center justify-between">
<h2 className="text-sm font-medium uppercase tracking-wider text-neutral-400">
                    Contas Free Fire
                </h2>
<div className="h-[1px] w-1/3 bg-gradient-to-r from-red-900/50 to-transparent"></div>
</div>

<div className="grid grid-cols-2 gap-3 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">

<div className="group relative flex flex-col overflow-hidden rounded-xl border border-red-900/40 bg-neutral-900/40 transition-all hover:border-red-600/50">

<div className="relative aspect-video w-full overflow-hidden bg-neutral-800">
<img alt="FF Account" className="h-full w-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/de54db78-28bf-49fa-b3ea-9d7ab78b08f9_800w.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

</div>

<div className="flex flex-1 flex-col p-2.5 sm:p-4">
<h3 className="mb-2 line-clamp-1 text-[11px] font-medium uppercase tracking-tight text-neutral-300 sm:text-sm">CONTA FREE FIRE GEMADA</h3>
<div className="mt-auto">

<div className="mb-3 flex items-center justify-between">
<div>
<div className="text-base font-bold text-white sm:text-lg">R$ 35,00</div>
<div className="text-[10px] text-neutral-500">À vista no PIX</div>
</div>
<div className="flex h-6 w-6 items-center justify-center rounded-full bg-red-500/10 shadow-[0_0_10px_rgba(220,38,38,0.3)]">
<i className="h-3 w-3 fill-red-500 text-red-500" data-lucide="zap"></i>
</div>
</div>

<div className="flex gap-2">
<button className="flex-1 rounded-md bg-red-600 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-red-700 sm:text-sm">
                                    Comprar
                                </button>
<button className="flex w-9 items-center justify-center rounded-md border border-red-600 bg-red-600/10 text-red-500 transition-colors hover:bg-red-600 hover:text-white">
<i className="h-4 w-4" data-lucide="shopping-bag"></i>
</button>
</div>
</div>
</div>
</div>

<div className="group relative flex flex-col overflow-hidden rounded-xl border border-red-900/40 bg-neutral-900/40 transition-all hover:border-red-600/50">
<div className="relative aspect-video w-full overflow-hidden bg-neutral-800">
<img alt="FF Account" className="h-full w-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ded76523-3af0-4253-9b54-c87e08ee220e_800w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
</div>
<div className="flex flex-1 flex-col p-2.5 sm:p-4">
<h3 className="mb-2 line-clamp-1 text-[11px] font-medium uppercase tracking-tight text-neutral-300 sm:text-sm">CONTA FREE FIRE GEMADA</h3>
<div className="mt-auto">
<div className="mb-3 flex items-center justify-between">
<div>
<div className="text-base font-bold text-white sm:text-lg">R$ 50,00</div>
<div className="text-[10px] text-neutral-500">À vista no PIX</div>
</div>
<div className="flex h-6 w-6 items-center justify-center rounded-full bg-red-500/10 shadow-[0_0_10px_rgba(220,38,38,0.3)]">
<i className="h-3 w-3 fill-red-500 text-red-500" data-lucide="zap"></i>
</div>
</div>
<div className="flex gap-2">
<button className="flex-1 rounded-md bg-red-600 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-red-700 sm:text-sm">
                                    Comprar
                                </button>
<button className="flex w-9 items-center justify-center rounded-md border border-red-600 bg-red-600/10 text-red-500 transition-colors hover:bg-red-600 hover:text-white">
<i className="h-4 w-4" data-lucide="shopping-bag"></i>
</button>
</div>
</div>
</div>
</div>

<div className="group relative flex flex-col overflow-hidden rounded-xl border border-red-900/40 bg-neutral-900/40 transition-all hover:border-red-600/50">
<div className="relative aspect-video w-full overflow-hidden bg-neutral-800">
<img alt="FF Account" className="h-full w-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ad53e970-c43f-4ac8-9318-cfe4a1ed0e2d_800w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
</div>
<div className="flex flex-1 flex-col p-2.5 sm:p-4">
<h3 className="mb-2 line-clamp-1 text-[11px] font-medium uppercase tracking-tight text-neutral-300 sm:text-sm">CONTA FREE FIRE GEMADA</h3>
<div className="mt-auto">
<div className="mb-3 flex items-center justify-between">
<div>
<div className="text-base font-bold text-white sm:text-lg">R$ 47,00</div>
<div className="text-[10px] text-neutral-500">À vista no PIX</div>
</div>
<div className="flex h-6 w-6 items-center justify-center rounded-full bg-red-500/10 shadow-[0_0_10px_rgba(220,38,38,0.3)]">
<i className="h-3 w-3 fill-red-500 text-red-500" data-lucide="zap"></i>
</div>
</div>
<div className="flex gap-2">
<button className="flex-1 rounded-md bg-red-600 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-red-700 sm:text-sm">
                                    Comprar
                                </button>
<button className="flex w-9 items-center justify-center rounded-md border border-red-600 bg-red-600/10 text-red-500 transition-colors hover:bg-red-600 hover:text-white">
<i className="h-4 w-4" data-lucide="shopping-bag"></i>
</button>
</div>
</div>
</div>
</div>

<div className="group relative flex flex-col overflow-hidden rounded-xl border border-red-900/40 bg-neutral-900/40 transition-all hover:border-red-600/50">
<div className="relative aspect-video w-full overflow-hidden bg-neutral-800">
<img alt="FF Account" className="h-full w-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/aeb18370-2765-478e-9158-34c2c5c54a3d_800w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
</div>
<div className="flex flex-1 flex-col p-2.5 sm:p-4">
<h3 className="mb-2 line-clamp-1 text-[11px] font-medium uppercase tracking-tight text-neutral-300 sm:text-sm">CONTA FREE FIRE GEMADA</h3>
<div className="mt-auto">
<div className="mb-3 flex items-center justify-between">
<div>
<div className="text-base font-bold text-white sm:text-lg">R$ 45,00</div>
<div className="text-[10px] text-neutral-500">À vista no PIX</div>
</div>
<div className="flex h-6 w-6 items-center justify-center rounded-full bg-red-500/10 shadow-[0_0_10px_rgba(220,38,38,0.3)]">
<i className="h-3 w-3 fill-red-500 text-red-500" data-lucide="zap"></i>
</div>
</div>
<div className="flex gap-2">
<button className="flex-1 rounded-md bg-red-600 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-red-700 sm:text-sm">
                                    Comprar
                                </button>
<button className="flex w-9 items-center justify-center rounded-md border border-red-600 bg-red-600/10 text-red-500 transition-colors hover:bg-red-600 hover:text-white">
<i className="h-4 w-4" data-lucide="shopping-bag"></i>
</button>
</div>
</div>
</div>
</div>

<div className="group relative flex flex-col overflow-hidden rounded-xl border border-red-900/40 bg-neutral-900/40 transition-all hover:border-red-600/50">
<div className="relative aspect-video w-full overflow-hidden bg-neutral-800">
<img alt="FF Account" className="h-full w-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6c958f1b-011d-494d-88bd-26850dddf888_800w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
</div>
<div className="flex flex-1 flex-col p-2.5 sm:p-4">
<h3 className="mb-2 line-clamp-1 text-[11px] font-medium uppercase tracking-tight text-neutral-300 sm:text-sm">CONTA FREE FIRE GEMADA</h3>
<div className="mt-auto">
<div className="mb-3 flex items-center justify-between">
<div>
<div className="text-base font-bold text-white sm:text-lg">R$ 120,00</div>
<div className="text-[10px] text-neutral-500">À vista no PIX</div>
</div>
<div className="flex h-6 w-6 items-center justify-center rounded-full bg-red-500/10 shadow-[0_0_10px_rgba(220,38,38,0.3)]">
<i className="h-3 w-3 fill-red-500 text-red-500" data-lucide="zap"></i>
</div>
</div>
<div className="flex gap-2">
<button className="flex-1 rounded-md bg-red-600 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-red-700 sm:text-sm">
                                    Comprar
                                </button>
<button className="flex w-9 items-center justify-center rounded-md border border-red-600 bg-red-600/10 text-red-500 transition-colors hover:bg-red-600 hover:text-white">
<i className="h-4 w-4" data-lucide="shopping-bag"></i>
</button>
</div>
</div>
</div>
</div>

<div className="group relative flex flex-col overflow-hidden rounded-xl border border-red-900/40 bg-neutral-900/40 transition-all hover:border-red-600/50">
<div className="relative aspect-video w-full overflow-hidden bg-neutral-800">
<img alt="FF Account" className="h-full w-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/28460089-2d4e-4c9c-ad7d-c49da903986e_800w.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
</div>
<div className="flex flex-1 flex-col p-2.5 sm:p-4">
<h3 className="mb-2 line-clamp-1 text-[11px] font-medium uppercase tracking-tight text-neutral-300 sm:text-sm">CONTA FREE FIRE GEMADA</h3>
<div className="mt-auto">
<div className="mb-3 flex items-center justify-between">
<div>
<div className="text-base font-bold text-white sm:text-lg">R$ 30,00</div>
<div className="text-[10px] text-neutral-500">À vista no PIX</div>
</div>
<div className="flex h-6 w-6 items-center justify-center rounded-full bg-red-500/10 shadow-[0_0_10px_rgba(220,38,38,0.3)]">
<i className="h-3 w-3 fill-red-500 text-red-500" data-lucide="zap"></i>
</div>
</div>
<div className="flex gap-2">
<button className="flex-1 rounded-md bg-red-600 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-red-700 sm:text-sm">
                                    Comprar
                                </button>
<button className="flex w-9 items-center justify-center rounded-md border border-red-600 bg-red-600/10 text-red-500 transition-colors hover:bg-red-600 hover:text-white">
<i className="h-4 w-4" data-lucide="shopping-bag"></i>
</button>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

<footer className="relative z-10 border-t border-red-900/20 bg-black/80 py-12 backdrop-blur-md">
<div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-6 md:flex-row">
<div className="flex items-center gap-3">
<div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-red-600 to-red-800 shadow-lg shadow-red-900/50">
<i className="h-6 w-6 text-white" data-lucide="flame"></i>
</div>
<div>
<span className="block text-base font-semibold tracking-tight text-white">GARENA SHOP</span>
<span className="text-xs text-neutral-500">A melhor loja de contas.</span>
</div>
</div>
<div className="grid grid-cols-2 gap-12 sm:grid-cols-3">
<div className="flex flex-col gap-3">
<h4 className="text-sm font-medium text-white">Políticas</h4>
<a className="text-sm text-neutral-400 hover:text-red-500" href="#">Termos de Uso</a>
<a className="text-sm text-neutral-400 hover:text-red-500" href="#">Privacidade</a>
<a className="text-sm text-neutral-400 hover:text-red-500" href="#">Reembolso</a>
</div>
<div className="flex flex-col gap-3">
<h4 className="text-sm font-medium text-white">Suporte</h4>
<a className="text-sm text-neutral-400 hover:text-red-500" href="#">FAQ</a>
<a className="text-sm text-neutral-400 hover:text-red-500" href="#">Contato</a>
<a className="text-sm text-neutral-400 hover:text-red-500" href="#">Discord</a>
</div>
</div>
</div>
<div className="mt-12 text-center text-xs text-neutral-600">
            © 2024 Garena Shop. Todos os direitos reservados.
        </div>
</footer>


    </>
  );
}
