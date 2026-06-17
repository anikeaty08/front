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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        const inputs = document.querySelectorAll('input[type="text"]');
        inputs.forEach((input, index) => {
            input.addEventListener('input', (e) => {
                if (e.target.value.length === 1 && index < inputs.length - 1) {
                    inputs[index + 1].focus();
                }
            });
            input.addEventListener('keydown', (e) => {
                if (e.key === 'Backspace' && e.target.value.length === 0 && index > 0) {
                    inputs[index - 1].focus();
                }
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
      

<div className="mb-8 font-medium tracking-tighter text-lg uppercase text-gray-900">
        Auth
    </div>

<div className="w-full max-w-[520px] rounded-2xl shadow-[0_1px_3px_0_rgba(0,0,0,0.02),0_4px_16px_0_rgba(0,0,0,0.03)] border p-6 sm:p-10 flex flex-col items-center bg-white border-gray-100">
<div className="w-12 h-12 rounded-full border flex items-center justify-center mb-6 bg-gray-50 border-gray-100">
<iconify-icon className="text-2xl text-gray-600" icon="solar:shield-keyhole-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h1 className="text-2xl font-semibold tracking-tight mb-2 text-center text-gray-900">
            Verificação de Segurança
        </h1>
<p className="text-sm text-gray-500 text-center mb-8 max-w-sm leading-relaxed">
            Insira o código de 10 dígitos que acabamos de enviar para o seu dispositivo para confirmar sua identidade.
        </p>

<form className="w-full flex flex-col items-center" onsubmit="event.preventDefault();">

<div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mb-8 w-full justify-center">

<div className="flex gap-1.5 sm:gap-2">
<input className="w-9 h-11 sm:w-10 sm:h-12 text-center text-base sm:text-lg font-medium border rounded-lg shadow-sm focus:bg-white focus:border-gray-900 focus:ring-1 focus:ring-gray-900 outline-none transition-all text-gray-900 bg-gray-50/50 border-gray-200" inputmode="numeric" maxlength="1" pattern="[0-9]*" type="text"/>
<input className="w-9 h-11 sm:w-10 sm:h-12 text-center text-base sm:text-lg font-medium border rounded-lg shadow-sm focus:bg-white focus:border-gray-900 focus:ring-1 focus:ring-gray-900 outline-none transition-all text-gray-900 bg-gray-50/50 border-gray-200" inputmode="numeric" maxlength="1" pattern="[0-9]*" type="text"/>
<input className="w-9 h-11 sm:w-10 sm:h-12 text-center text-base sm:text-lg font-medium border rounded-lg shadow-sm focus:bg-white focus:border-gray-900 focus:ring-1 focus:ring-gray-900 outline-none transition-all text-gray-900 bg-gray-50/50 border-gray-200" inputmode="numeric" maxlength="1" pattern="[0-9]*" type="text"/>
<input className="w-9 h-11 sm:w-10 sm:h-12 text-center text-base sm:text-lg font-medium border rounded-lg shadow-sm focus:bg-white focus:border-gray-900 focus:ring-1 focus:ring-gray-900 outline-none transition-all text-gray-900 bg-gray-50/50 border-gray-200" inputmode="numeric" maxlength="1" pattern="[0-9]*" type="text"/>
<input className="w-9 h-11 sm:w-10 sm:h-12 text-center text-base sm:text-lg font-medium border rounded-lg shadow-sm focus:bg-white focus:border-gray-900 focus:ring-1 focus:ring-gray-900 outline-none transition-all text-gray-900 bg-gray-50/50 border-gray-200" inputmode="numeric" maxlength="1" pattern="[0-9]*" type="text"/>
</div>

<div className="hidden sm:block w-3 h-[2px] rounded-full bg-gray-200"></div>

<div className="flex gap-1.5 sm:gap-2">
<input className="w-9 h-11 sm:w-10 sm:h-12 text-center text-base sm:text-lg font-medium border rounded-lg shadow-sm focus:bg-white focus:border-gray-900 focus:ring-1 focus:ring-gray-900 outline-none transition-all text-gray-900 bg-gray-50/50 border-gray-200" inputmode="numeric" maxlength="1" pattern="[0-9]*" type="text"/>
<input className="w-9 h-11 sm:w-10 sm:h-12 text-center text-base sm:text-lg font-medium border rounded-lg shadow-sm focus:bg-white focus:border-gray-900 focus:ring-1 focus:ring-gray-900 outline-none transition-all text-gray-900 bg-gray-50/50 border-gray-200" inputmode="numeric" maxlength="1" pattern="[0-9]*" type="text"/>
<input className="w-9 h-11 sm:w-10 sm:h-12 text-center text-base sm:text-lg font-medium border rounded-lg shadow-sm focus:bg-white focus:border-gray-900 focus:ring-1 focus:ring-gray-900 outline-none transition-all text-gray-900 bg-gray-50/50 border-gray-200" inputmode="numeric" maxlength="1" pattern="[0-9]*" type="text"/>
<input className="w-9 h-11 sm:w-10 sm:h-12 text-center text-base sm:text-lg font-medium border rounded-lg shadow-sm focus:bg-white focus:border-gray-900 focus:ring-1 focus:ring-gray-900 outline-none transition-all text-gray-900 bg-gray-50/50 border-gray-200" inputmode="numeric" maxlength="1" pattern="[0-9]*" type="text"/>
<input className="w-9 h-11 sm:w-10 sm:h-12 text-center text-base sm:text-lg font-medium border rounded-lg shadow-sm focus:bg-white focus:border-gray-900 focus:ring-1 focus:ring-gray-900 outline-none transition-all text-gray-900 bg-gray-50/50 border-gray-200" inputmode="numeric" maxlength="1" pattern="[0-9]*" type="text"/>
</div>
</div>

<button className="w-full rounded-lg py-2.5 px-4 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors flex items-center justify-center gap-2 bg-gray-900 text-white hover:bg-gray-800" type="submit">
                Verificar Código
                <iconify-icon className="text-base" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</form>
</div>

<div className="mt-8 flex flex-col items-center gap-4 text-sm">
<div className="text-gray-500">
            Não recebeu o código? 
            <button className="font-medium hover:underline ml-1 outline-none focus:underline transition-all text-gray-900">
                Reenviar agora
            </button>
</div>
<a className="flex items-center gap-1.5 transition-colors font-medium outline-none focus:text-gray-900 text-gray-400 hover:text-gray-900" href="#">
<iconify-icon className="text-base" icon="solar:alt-arrow-left-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
            Voltar para o login
        </a>
</div>



    </>
  );
}
