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
darkMode: 'class',
theme: {
extend: {
colors: {
green: {
400: '#4ade80',
500: '#22c55e',
600: '#16a34a',
900: '#14532d',
}
}
}
}
}



        // Initialize Icons
        lucide.createIcons();

        // Modal Logic
        const modal = document.getElementById('modal');
        const backdrop = document.getElementById('modal-backdrop');
        const panel = document.getElementById('modal-panel');

        function openModal() {
            modal.classList.remove('hidden');
            // Tally embed script might need a moment to resize correctly inside a previously hidden div
            if (typeof Tally !== 'undefined') {
                Tally.resize();
            }
            
            setTimeout(() => {
                backdrop.classList.remove('opacity-0');
                panel.classList.remove('opacity-0', 'translate-y-4', 'scale-95');
                panel.classList.add('opacity-100', 'translate-y-0', 'scale-100');
            }, 10);
        }

        function closeModal() {
            backdrop.classList.add('opacity-0');
            panel.classList.remove('opacity-100', 'translate-y-0', 'scale-100');
            panel.classList.add('opacity-0', 'translate-y-4', 'scale-95');
            
            setTimeout(() => {
                modal.classList.add('hidden');
            }, 300);
        }

        backdrop.addEventListener('click', closeModal);
    
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
      

<div className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-20 overflow-hidden">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-96 bg-green-900/20 blur-[100px] rounded-full pointer-events-none"></div>
<div className="absolute inset-0 pointer-events-none opacity-20">
<div className="absolute top-1/3 left-0 w-1/3 h-[1px] bg-gradient-to-r from-transparent via-green-500 to-transparent"></div>
<div className="absolute top-1/3 right-0 w-1/3 h-[1px] bg-gradient-to-r from-transparent via-green-500 to-transparent"></div>
<div className="absolute bottom-1/3 left-1/4 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-green-500 to-transparent"></div>
</div>
<div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
<div className="inline-flex items-center justify-center px-4 py-1.5 mb-8 border border-gray-800 rounded-full bg-gray-900/50 backdrop-blur-sm">
<span className="text-xs font-medium text-gray-300 tracking-wide uppercase">Wyjątkowe 2-dniowe Seminarium</span>
</div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tighter leading-[1.1] mb-8 text-white">
                Jak wykorzystać <span className="text-green-500 glow-text">największy</span><br className="hidden md:block"/>
<span className="text-green-500 glow-text">przełom technologiczny</span> ostatniej<br className="hidden md:block"/>
                dekady i nauczyć się <span className="text-green-500 glow-text">wdrażać</span><br className="hidden md:block"/>
<span className="text-green-500 glow-text">Agentów AI</span> w biznesie
            </h1>
<p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
                Uzyskaj wejściówkę na 2-dniowe seminarium online z budowy Agentów AI. Praktyczne przykłady, które możesz wdrażać w firmach. Bez umiejętności programowania z pełnym wsparciem mojego zespołu i dostępem do zamkniętej platformy zrzeszającej nowoczesnych przedsiębiorców zajaranych automatyzacjami.
            </p>
<div className="flex flex-col items-center justify-center gap-6">
<button className="group relative px-8 py-4 bg-green-500 hover:bg-green-400 text-black font-semibold rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:shadow-[0_0_30px_rgba(34,197,94,0.5)] transform hover:-translate-y-0.5" onclick="openModal()">
<span className="text-lg">Zapisz się za darmo</span>
</button>
<div className="flex flex-col md:flex-row items-center gap-4 mt-8">
<div className="flex -space-x-3">
<img alt="User" className="w-10 h-10 rounded-full border-2 border-[#050505]" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="User" className="w-10 h-10 rounded-full border-2 border-[#050505]" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="User" className="w-10 h-10 rounded-full border-2 border-[#050505]" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<div className="w-10 h-10 rounded-full border-2 border-[#050505] bg-gray-800 flex items-center justify-center text-xs text-white font-medium">+2k</div>
</div>
<div className="text-left">
<div className="text-sm text-gray-300">
                            Dołącz do <span className="text-white font-medium">grona 10 000 uczestników</span>
</div>
<div className="flex items-center gap-1">
<span className="text-sm text-gray-300">naszych szkoleń,</span>
<span className="text-xs text-gray-500">aby zarabiać więcej</span>
</div>
<div className="flex items-center gap-1 mt-0.5">
<div className="flex text-green-500">
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
</div>
<span className="text-xs font-semibold text-green-500 ml-1">5/5</span>
<span className="text-xs text-gray-500 ml-1">i rozwijać swój biznes szybciej.</span>
</div>
</div>
</div>
<div className="flex flex-col items-center mt-6 gap-2">
<i className="w-5 h-5 text-green-500" data-lucide="briefcase"></i>
<p className="text-xs text-center text-gray-400 max-w-xs">
                        Szkolenie przeznaczone dla<br/>przedsiębiorców oraz specjalistów
                    </p>
</div>
</div>
</div>
</div>

<div className="bg-[#0a0a0a] py-24 border-t border-gray-900">
<div className="max-w-6xl mx-auto px-6">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-16 text-center">
                Czego się nauczysz w ciągu tych 2 dni?
            </h2>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
<div className="space-y-12">
<div className="flex gap-6">
<div className="flex-shrink-0 w-12 h-12 rounded-full border border-gray-800 bg-gray-900 flex items-center justify-center">
<i className="w-6 h-6 text-green-500" data-lucide="bot"></i>
</div>
<div>
<h3 className="text-xl font-medium text-white mb-2">Czym są agenci AI i jak wdrożyć ich w firmie</h3>
<p className="text-base text-gray-400 leading-relaxed">
                                Dołącz do przełomu technologicznego. Taka szansa dla biznesu wydarzyła się ostatnim razem przy powstaniu Bitcoina.
                            </p>
</div>
</div>
<div className="flex gap-6">
<div className="flex-shrink-0 w-12 h-12 rounded-full border border-gray-800 bg-gray-900 flex items-center justify-center">
<i className="w-6 h-6 text-green-500" data-lucide="trending-up"></i>
</div>
<div>
<h3 className="text-xl font-medium text-white mb-2">Najbardziej dochodowy skill na 2025 rok</h3>
<p className="text-base text-gray-400 leading-relaxed">
                                Naucz się umiejętności na które jest ogromne zapotrzebowanie, a specjalistów od realnych wdrożeń AI nadal jest bardzo mało.
                            </p>
</div>
</div>
<div className="flex gap-6">
<div className="flex-shrink-0 w-12 h-12 rounded-full border border-gray-800 bg-gray-900 flex items-center justify-center">
<i className="w-6 h-6 text-green-500" data-lucide="shield-check"></i>
</div>
<div>
<h3 className="text-xl font-medium text-white mb-2">Dowiesz się, jak obchodzić się ze sztuczną inteligencją, aby było bezpiecznie</h3>
<p className="text-base text-gray-400 leading-relaxed">
                                Dowiesz się jak automatyzować przy użyciu sztucznej inteligencji, aby zrobić to BEZPIECZNIE na własnym serwerze. Przy użyciu narzędzia N8N.
                            </p>
</div>
</div>
<div className="flex gap-6">
<div className="flex-shrink-0 w-12 h-12 rounded-full border border-gray-800 bg-gray-900 flex items-center justify-center">
<i className="w-6 h-6 text-green-500" data-lucide="users"></i>
</div>
<div>
<h3 className="text-xl font-medium text-white mb-2">Zyskasz możliwość dołączenia do zamkniętej społeczności</h3>
<p className="text-base text-gray-400 leading-relaxed">
                                Dowiesz się czym jest społeczność Automation Club, która zrzesza przedsiębiorców którzy interesują się nowymi technologiami, startupowców, no-code, programistów.
                            </p>
</div>
</div>
</div>
<div className="relative group">
<div className="absolute -inset-1 bg-gradient-to-b from-green-500/20 to-transparent rounded-2xl blur opacity-50 group-hover:opacity-75 transition duration-1000"></div>
<div className="relative bg-[#111] border border-gray-800 rounded-2xl overflow-hidden">
<div className="h-80 bg-gray-800 relative overflow-hidden">
<img alt="Professionals" className="w-full h-full object-cover opacity-80 mix-blend-overlay" src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#111] to-transparent"></div>
<img alt="Speakers" className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] object-contain drop-shadow-2xl" src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-8 text-center">
<h3 className="text-lg font-medium text-white mb-1">Dołącz do elitarnego grona ludzi</h3>
<p className="text-lg font-medium text-white mb-6">używających AI w swojej pracy</p>
<button className="w-full py-3 bg-green-500 hover:bg-green-400 text-black font-semibold rounded-full transition-colors" onclick="openModal()">
                                Zapisz się za darmo
                            </button>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="relative py-32 overflow-hidden flex flex-col items-center text-center px-6">
<div className="absolute inset-0 pointer-events-none opacity-10">
<div className="absolute top-1/2 left-0 w-full h-[1px] bg-green-500"></div>
<div className="absolute top-1/4 left-10 w-20 h-20 border border-green-500 rounded-full"></div>
<div className="absolute bottom-1/4 right-10 w-32 h-32 border border-green-500 rounded-full"></div>
</div>
<h2 className="relative z-10 text-3xl md:text-5xl font-semibold tracking-tight text-white mb-4">
            Czas ucieka! Na skrzynkę email<br/>otrzymasz unikalny bilet
        </h2>
<p className="relative z-10 text-gray-400 mb-10 font-medium">
            Wydarzenie odbędzie się<br/>
<span className="text-white">5-6 listopada o 20:00.</span>
</p>
<div className="relative z-10">
<button className="px-10 py-4 bg-green-500 hover:bg-green-400 text-black font-semibold rounded-full transition-all shadow-[0_0_20px_rgba(34,197,94,0.3)]" onclick="openModal()">
                Zapisz się za darmo
            </button>
</div>
<div className="relative z-10 flex items-center gap-4 mt-12 justify-center opacity-80 scale-90">
<div className="flex -space-x-3">
<img className="w-10 h-10 rounded-full border-2 border-[#050505]" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=64&amp;h=64" />
<img className="w-10 h-10 rounded-full border-2 border-[#050505]" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=64&amp;h=64" />
<img className="w-10 h-10 rounded-full border-2 border-[#050505]" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
</img></img></div>
<div className="text-left">
<div className="text-sm text-gray-300">
                    Dołącz do <span className="text-white font-medium">grona 10 000 uczestników</span>
</div>
<div className="flex text-green-500 text-xs mt-1">
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<span className="ml-1 font-semibold">5/5</span>
</div>
</div>
</div>
</div>

<div aria-labelledby="modal-title" aria-modal="true" className="fixed inset-0 z-50 hidden" id="modal" role="dialog">
<div className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity opacity-0" id="modal-backdrop"></div>
<div className="fixed inset-0 z-10 overflow-y-auto">
<div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">

<div className="relative transform overflow-hidden rounded-2xl bg-[#0F0F0F] border border-gray-800 text-left shadow-2xl transition-all sm:my-8 w-full max-w-lg opacity-0 translate-y-4 scale-95" id="modal-panel">

<div className="absolute right-4 top-4 z-20">
<button className="bg-[#0F0F0F] rounded-full p-1 text-gray-400 hover:text-white transition-colors" onclick="closeModal()">
<i className="w-6 h-6" data-lucide="x"></i>
</button>
</div>


<div className="w-full min-h-[550px] relative">
<iframe className="w-full h-full min-h-[550px]" data-tally-src="https://tally.so/r/mZpg9e?transparentBackground=1" frameborder="0" height="100%" marginheight="0" marginwidth="0" title="3 Video - Agencja AI" width="100%"></iframe>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
