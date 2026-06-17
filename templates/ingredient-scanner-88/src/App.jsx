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
colors: {
esg: {
dark: '#163300', /* Using existing dark green for text/buttons */
light: '#E2F6D5', /* Using existing light pistachio for main background */
accent: '#77C744',
gray: '#F5F5F5',
}
},
fontFamily: {
sans: ['"Plus Jakarta Sans"', 'sans-serif'],
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
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      

<header className="w-full px-6 py-6 absolute top-0 left-0 z-50">
<nav className="max-w-7xl mx-auto flex justify-between items-center">

<div className="flex items-center gap-2 group cursor-pointer">

<iconify-icon className="group-hover:scale-110 transition-transform duration-300" icon="fluent-emoji-flat:avocado" width="28"></iconify-icon>
<span className="text-xl font-semibold tracking-tight text-esg-dark">Goodli</span>
</div>

<div className="flex items-center gap-4 md:gap-8">
<div className="text-sm font-medium flex gap-2">
<span className="text-esg-dark cursor-default">RU</span>
<span className="text-esg-dark/30">|</span>
<a className="text-esg-dark/60 hover:text-esg-dark transition-colors" href="#">EN</a>
</div>
<button className="hidden md:block bg-esg-dark text-esg-light px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-esg-dark/90 hover:shadow-lg hover:shadow-esg-dark/10 active:scale-95 transition-all duration-200">
                    Join waitlist
                </button>
</div>
</nav>
</header>
<main className="flex-grow flex flex-col">

<section className="flex-grow flex flex-col items-center justify-center pt-32 pb-24 px-6 text-center animate-fade-in relative z-10">

<div className="relative mb-10 group">
<div className="w-32 md:w-48 relative z-10 transition-transform duration-700 ease-out hover:-translate-y-2">
<iconify-icon height="100%" icon="fluent-emoji-flat:avocado" width="100%"></iconify-icon>
</div>

<div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[60%] h-6 bg-black/10 blur-xl rounded-[100%] transition-all duration-700 group-hover:w-[50%] group-hover:blur-lg group-hover:bg-black/15"></div>
</div>

<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-esg-dark max-w-4xl leading-[1.1] mb-6">
                Сканируй. Проверяй. Понимай состав еды, блюд и косметики.
            </h1>
<p className="text-lg md:text-xl font-medium text-esg-dark/80 max-w-2xl mb-12 leading-relaxed">
                Goodli помогает разбираться в составе продуктов, меню и косметики — в одном приложении.
            </p>

<form className="w-full max-w-md flex flex-col sm:flex-row gap-3 relative z-20" onsubmit="event.preventDefault();">
<input className="flex-1 bg-white border border-esg-dark/20 text-esg-dark px-5 py-4 rounded-2xl outline-none focus:border-esg-dark/40 focus:ring-4 focus:ring-esg-dark/5 transition-all font-medium placeholder:text-esg-dark/40 shadow-sm" placeholder="Введите email" required="" type="email"/>
<button className="bg-esg-dark text-white px-8 py-4 rounded-2xl font-semibold hover:bg-esg-dark/90 active:scale-[0.98] transition-all duration-200 shadow-md hover:shadow-xl hover:shadow-esg-dark/20 whitespace-nowrap" type="submit">
                    Join waitlist
                </button>
</form>
<p className="text-sm font-medium text-esg-dark/50 mt-5">
                Ранний доступ для первых пользователей.
            </p>
</section>

<section className="w-full bg-white py-24 md:py-32 px-6 rounded-t-[40px] md:rounded-t-[80px] shadow-[0_-10px_40px_rgba(0,0,0,0.02)] relative z-20">
<div className="max-w-7xl mx-auto">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-esg-dark text-center mb-16 md:mb-20">
                    Как работает Goodli
                </h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">

<div className="bg-esg-light border border-transparent hover:border-esg-dark/10 rounded-[32px] p-8 md:p-10 flex flex-col items-start transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-esg-dark/5 group">
<div className="w-14 h-14 rounded-2xl bg-esg-dark/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
<iconify-icon className="text-esg-dark" icon="solar:barcode-read-linear" style={{strokeWidth: '1.5'}} width="28"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-esg-dark mb-4">Сканируй штрихкод</h3>
<p className="text-base font-medium text-esg-dark/70 leading-relaxed">
                            Наведи камеру на продукт или этикетку косметики, чтобы мгновенно получить детализированную информацию.
                        </p>
</div>

<div className="bg-esg-light border border-transparent hover:border-esg-dark/10 rounded-[32px] p-8 md:p-10 flex flex-col items-start transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-esg-dark/5 group">
<div className="w-14 h-14 rounded-2xl bg-esg-dark/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
<iconify-icon className="text-esg-dark" icon="solar:document-text-linear" style={{strokeWidth: '1.5'}} width="28"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-esg-dark mb-4">Изучай состав</h3>
<p className="text-base font-medium text-esg-dark/70 leading-relaxed">
                            Узнай правду об ингредиентах простым языком: что безопасно, а чего действительно стоит избегать.
                        </p>
</div>

<div className="bg-esg-light border border-transparent hover:border-esg-dark/10 rounded-[32px] p-8 md:p-10 flex flex-col items-start transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-esg-dark/5 group">
<div className="w-14 h-14 rounded-2xl bg-esg-dark/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
<iconify-icon className="text-esg-dark" icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}} width="28"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-esg-dark mb-4">Делай выбор</h3>
<p className="text-base font-medium text-esg-dark/70 leading-relaxed">
                            Принимай осознанные и уверенные решения для своего здоровья и красоты каждый день.
                        </p>
</div>
</div>
</div>
</section>

<section className="w-full bg-esg-light py-24 md:py-32 px-6 flex flex-col items-center justify-center text-center relative z-10">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-esg-dark mb-10 max-w-2xl leading-tight">
                Стань одним из первых пользователей Goodli
            </h2>
<form className="w-full max-w-md flex flex-col sm:flex-row gap-3" onsubmit="event.preventDefault();">
<input className="flex-1 bg-white border border-esg-dark/20 text-esg-dark px-5 py-4 rounded-2xl outline-none focus:border-esg-dark/40 focus:ring-4 focus:ring-esg-dark/5 transition-all font-medium placeholder:text-esg-dark/40 shadow-sm" placeholder="Введите email" required="" type="email"/>
<button className="bg-esg-dark text-white px-8 py-4 rounded-2xl font-semibold hover:bg-esg-dark/90 active:scale-[0.98] transition-all duration-200 shadow-md hover:shadow-xl hover:shadow-esg-dark/20 whitespace-nowrap" type="submit">
                    Join waitlist
                </button>
</form>
</section>
</main>

<footer className="bg-esg-dark text-esg-light pt-16 pb-12 px-6 rounded-t-[40px] md:rounded-t-[60px] relative z-30">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">

<div className="flex items-center gap-2 opacity-90 hover:opacity-100 transition-opacity cursor-pointer">
<iconify-icon icon="fluent-emoji-flat:avocado" width="24"></iconify-icon>
<span className="text-xl font-semibold tracking-tight text-white">Goodli</span>
</div>

<div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 text-sm font-medium opacity-70">
<a className="hover:opacity-100 hover:text-white transition-all" href="#">Instagram</a>
<a className="hover:opacity-100 hover:text-white transition-all" href="#">Privacy</a>
<a className="hover:opacity-100 hover:text-white transition-all" href="#">Terms</a>
</div>

<a className="text-sm font-medium opacity-70 hover:opacity-100 hover:text-white transition-all" href="mailto:support@goodli.app">
                support@goodli.app
            </a>
</div>
</footer>

    </>
  );
}
