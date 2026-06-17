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



      window.addEventListener('DOMContentLoaded', () => {
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });

        const btnQR = document.getElementById('btn-qr');
        const btnEmail = document.getElementById('btn-email');
        const panelQR = document.getElementById('panel-qr');
        const panelEmail = document.getElementById('panel-email');
        const linkEmail = document.getElementById('link-email');
        const linkQR = document.getElementById('link-qr');

        function activate(view) {
          const isQR = view === 'qr';
          panelQR.classList.toggle('hidden', !isQR);
          panelEmail.classList.toggle('hidden', isQR);

          // Styles for segmented control
          if (isQR) {
            btnQR.setAttribute('data-active', 'true');
            btnQR.classList.add('bg-[#00CB00]', 'text-black');
            btnEmail.classList.remove('bg-[#00CB00]', 'text-black');
            btnEmail.classList.add('text-white/70');
          } else {
            btnQR.removeAttribute('data-active');
            btnQR.classList.remove('bg-[#00CB00]', 'text-black');
            btnQR.classList.add('text-white/70');
            btnEmail.classList.add('bg-[#00CB00]', 'text-black');
          }
        }

        btnQR?.addEventListener('click', () => activate('qr'));
        btnEmail?.addEventListener('click', () => activate('email'));
        linkEmail?.addEventListener('click', () => activate('email'));
        linkQR?.addEventListener('click', () => activate('qr'));
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
      
<header className="relative overflow-hidden">

<div className="pointer-events-none absolute inset-0">

<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,203,0,0.30)_0%,rgba(0,203,0,0.10)_35%,transparent_70%)]"></div>

<div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[#00CB00]/20 blur-3xl"></div>
<div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-[#00CB00]/15 blur-3xl"></div>

<svg aria-hidden="true" className="absolute inset-0 h-full w-full" preserveaspectratio="xMidYMid slice" viewbox="0 0 1600 1000">
<defs>
<lineargradient id="g-line" x1="0" x2="1" y1="0" y2="1">
<stop offset="0%" stop-color="#00CB00" stop-opacity="0.6"></stop>
<stop offset="60%" stop-color="#00CB00" stop-opacity="0.45"></stop>
<stop offset="100%" stop-color="#00CB00" stop-opacity="0.30"></stop>
</lineargradient>
<lineargradient id="g-line-faint" x1="0" x2="1" y1="0" y2="1">
<stop offset="0%" stop-color="#00CB00" stop-opacity="0.18"></stop>
<stop offset="100%" stop-color="#00CB00" stop-opacity="0.08"></stop>
</lineargradient>
<filter height="140%" id="soft" width="140%" x="-20%" y="-20%">
<fegaussianblur in="SourceGraphic" stddeviation="1.2"></fegaussianblur>
</filter>
</defs>

<g filter="url(#soft)">
<path d="M1200 -60 C 1080 100, 980 280, 940 520 S 900 980, 780 1120" fill="none" stroke="url(#g-line)" strokeWidth="1.5"></path>
<path d="M1300 -80 C 1180 80, 1040 260, 980 520 S 930 980, 780 1150" fill="none" stroke="url(#g-line)" strokeWidth="1.2"></path>
<path d="M1380 -90 C 1240 60, 1100 250, 1020 520 S 960 980, 780 1180" fill="none" stroke="url(#g-line)" strokeWidth="1.1"></path>
<path d="M1460 -100 C 1300 40, 1160 240, 1060 520 S 990 980, 780 1200" fill="none" stroke="url(#g-line)" strokeWidth="1"></path>
<path d="M1520 -100 C 1360 30, 1210 230, 1100 520 S 1020 980, 780 1215" fill="none" stroke="url(#g-line-faint)" strokeWidth="1"></path>
<path d="M1580 -110 C 1410 20, 1260 220, 1140 520 S 1050 980, 780 1230" fill="none" stroke="url(#g-line-faint)" strokeWidth="0.9"></path>
</g>

<g filter="url(#soft)">
<path d="M-120 900 C 220 820, 540 760, 880 720 S 1500 660, 1780 720" fill="none" stroke="url(#g-line-faint)" strokeWidth="1"></path>
<path d="M-120 940 C 240 860, 560 800, 900 760 S 1500 700, 1780 760" fill="none" stroke="url(#g-line-faint)" strokeWidth="1"></path>
</g>
</svg>
</div>


<section className="z-10 sm:pt-16 md:pt-20 lg:pt-28 max-w-7xl mr-auto ml-auto pt-16 pr-6 pb-24 pl-6 relative">

<div className="mx-auto mt-10 max-w-xl">
<div className="rounded-2xl border border-white/12 bg-white/5 p-6 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.35)] ring-1 ring-white/5">

<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<svg className="lucide lucide-lock h-4 w-4 text-[#00CB00]" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
<h3 className="text-lg font-semibold tracking-tight text-white">Acessar conta</h3>
</div>
<span className="text-xs text-slate-400">Seguro e criptografado</span>
</div>
<div className="mt-4 grid grid-cols-2 gap-2 rounded-xl border border-white/10 bg-white/5 p-1">
<button className="group inline-flex hover:text-white hover:bg-white/[0.08] transition-colors data-[active=true]:bg-[#00CB00] data-[active=true]:text-black text-sm font-medium text-white/80 rounded-lg pt-2 pr-3 pb-2 pl-3 gap-x-2 gap-y-2 items-center justify-center" data-active="true" id="btn-qr">
<svg className="lucide lucide-qr-code h-4 w-4" data-lucide="qr-code" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="5" rx="1" width="5" x="3" y="3"></rect><rect height="5" rx="1" width="5" x="16" y="3"></rect><rect height="5" rx="1" width="5" x="3" y="16"></rect><path d="M21 16h-3a2 2 0 0 0-2 2v3"></path><path d="M21 21v.01"></path><path d="M12 7v3a2 2 0 0 1-2 2H7"></path><path d="M3 12h.01"></path><path d="M12 3h.01"></path><path d="M12 16v.01"></path><path d="M16 12h1"></path><path d="M21 12v.01"></path><path d="M12 21v-1"></path></svg>
                QR Code
              </button>
<button className="group inline-flex gap-2 hover:text-white hover:bg-white/[0.08] transition-colors text-sm font-medium text-white/70 rounded-lg pt-2 pr-3 pb-2 pl-3 gap-x-2 gap-y-2 items-center justify-center" id="btn-email">
<svg className="lucide lucide-mail h-4 w-4" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
                E-mail
              </button>
</div>

<div className="mt-5" id="panel-qr">
<div className="flex flex-col items-center justify-center gap-4 rounded-xl border border-white/10 bg-black/30 p-5">
<div className="rounded-xl border border-white/15 bg-white/5 p-3">
<img alt="QR Code para login" className="h-40 w-40" src="https://api.qrserver.com/v1/create-qr-code/?size=160x160&amp;data=fluxo-login"/>
</div>
<p className="text-sm text-slate-300 text-center">
                  Aponte a câmera do seu app para o QR Code para entrar com segurança.
                </p>
<div className="flex items-center gap-3">
<button className="inline-flex items-center gap-2 rounded-full bg-[#00CB00] px-4 py-2 text-sm font-medium text-black hover:bg-[#00b300] transition-colors">
<svg className="lucide lucide-refresh-cw h-4 w-4 text-black" data-lucide="refresh-cw" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path><path d="M21 3v5h-5"></path><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path><path d="M8 16H3v5"></path></svg>
                    Atualizar código
                  </button>
<button className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white/90 hover:bg-white/[0.08] hover:border-white/25 transition-colors" id="link-email">
<svg className="lucide lucide-keyboard h-4 w-4" data-lucide="keyboard" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 8h.01"></path><path d="M12 12h.01"></path><path d="M14 8h.01"></path><path d="M16 12h.01"></path><path d="M18 8h.01"></path><path d="M6 8h.01"></path><path d="M7 16h10"></path><path d="M8 12h.01"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
                    Usar e-mail
                  </button>
</div>
</div>
</div>

<div className="mt-5" id="panel-email">
<form className="space-y-4">
<div>
<label className="mb-1 block text-xs font-medium text-slate-300" htmlFor="email">E-mail</label>
<input className="w-full rounded-lg border border-white/12 bg-white/[0.06] px-3 py-2 text-sm text-white placeholder:text-slate-500 outline-none focus:border-[#00CB00]/60 focus:ring-2 focus:ring-[#00CB00]/20 transition" id="email" placeholder="voce@exemplo.com" type="email"/>
</div>
<div>
<label className="mb-1 block text-xs font-medium text-slate-300" htmlFor="senha">Senha</label>
<div className="relative">
<input className="w-full rounded-lg border border-white/12 bg-white/[0.06] px-3 py-2 pr-10 text-sm text-white placeholder:text-slate-500 outline-none focus:border-[#00CB00]/60 focus:ring-2 focus:ring-[#00CB00]/20 transition" id="senha" placeholder="••••••••" type="password"/>
<svg className="lucide lucide-eye pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
</div>
</div>
<div className="flex items-center justify-between">
<label className="inline-flex items-center gap-2 text-xs text-slate-300">
<input className="peer sr-only" type="checkbox"/>
<span className="relative inline-flex h-4 w-7 items-center rounded-full bg-white/10 transition peer-checked:bg-[#00CB00]/80">
<span className="absolute left-0.5 h-3 w-3 rounded-full bg-white shadow transition peer-checked:translate-x-3.5"></span>
</span>
                    Manter conectado
                  </label>
<a className="text-xs font-medium text-[#00CB00] hover:opacity-80 transition" href="#">Esqueci a senha</a>
</div>
<button className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#00CB00] px-4 py-2.5 text-sm font-medium text-black hover:bg-[#00b300] transition-colors" type="submit">
<svg className="lucide lucide-log-in h-4 w-4 text-black" data-lucide="log-in" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m10 17 5-5-5-5"></path><path d="M15 12H3"></path><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path></svg>
                  Entrar
                </button>
</form>
<div className="mt-3 text-center">
<button className="inline-flex items-center gap-2 text-xs font-medium text-slate-300 hover:text-white transition" id="link-qr">
<svg className="lucide lucide-qr-code h-3.5 w-3.5" data-lucide="qr-code" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="5" rx="1" width="5" x="3" y="3"></rect><rect height="5" rx="1" width="5" x="16" y="3"></rect><rect height="5" rx="1" width="5" x="3" y="16"></rect><path d="M21 16h-3a2 2 0 0 0-2 2v3"></path><path d="M21 21v.01"></path><path d="M12 7v3a2 2 0 0 1-2 2H7"></path><path d="M3 12h.01"></path><path d="M12 3h.01"></path><path d="M12 16v.01"></path><path d="M16 12h1"></path><path d="M21 12v.01"></path><path d="M12 21v-1"></path></svg>
                  Entrar com QR Code
                </button>
</div>
</div>
</div>
</div>

</section>
</header>

<section className="relative mx-auto max-w-7xl px-6 pb-20">
</section>
<footer className="relative border-t border-white/10 bg-black">
</footer>




    </>
  );
}
