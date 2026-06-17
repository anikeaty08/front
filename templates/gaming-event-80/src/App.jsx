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



        // Existing Logo Contact Modal
        function toggleModal(show) {
            const modal = document.getElementById('contactModal');
            if (show) {
                modal.style.display = 'flex';
                setTimeout(() => {
                    modal.classList.remove('opacity-0');
                    modal.querySelector('div').classList.remove('scale-95');
                    modal.querySelector('div').classList.add('scale-100');
                }, 10);
            } else {
                modal.classList.add('opacity-0');
                modal.querySelector('div').classList.remove('scale-100');
                modal.querySelector('div').classList.add('scale-95');
                setTimeout(() => {
                    modal.style.display = 'none';
                }, 300);
            }
        }

        // New Package Selection Modal
        function togglePackageModal(show) {
            const modal = document.getElementById('packageModal');
            if (show) {
                modal.style.display = 'flex';
                // Prevent body scroll
                document.body.style.overflow = 'hidden';
                setTimeout(() => {
                    modal.classList.remove('opacity-0');
                    modal.querySelector('div').classList.remove('scale-95');
                    modal.querySelector('div').classList.add('scale-100');
                }, 10);
            } else {
                modal.classList.add('opacity-0');
                modal.querySelector('div').classList.remove('scale-100');
                modal.querySelector('div').classList.add('scale-95');
                // Restore body scroll
                document.body.style.overflow = '';
                setTimeout(() => {
                    modal.style.display = 'none';
                }, 300);
            }
        }
    
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
      
<div className="bg-grain"></div>

<header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#050505]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
<a className="text-lg font-semibold tracking-tighter text-white uppercase flex items-center gap-2" href="#">
                GAME EVENTS
            </a>
<nav className="hidden md:flex gap-8 text-sm font-semibold text-neutral-400">
<a className="hover:text-white transition-colors" href="#wspolpraca">Dla Organizatorów</a>
<a className="hover:text-white transition-colors" href="#uslugi">Usługi</a>
</nav>
<button className="md:hidden text-white">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</header>
<main className="pt-16">

<section className="flex flex-col min-h-[85vh] text-center border-white/5 border-b pr-4 pl-4 relative items-center justify-center">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-900/40 via-[#050505] to-[#050505] -z-10"></div>

<div className="group relative cursor-pointer mt-8" onclick="toggleModal(true)">
<div className="absolute inset-0 bg-white/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
<img alt="Logo" className="relative w-[150px] mb-[15px] transition-all duration-500 group-hover:scale-105 group-hover:drop-shadow-[0_0_25px_rgba(255,255,255,0.4)] group-hover:brightness-110" src="https://i.postimg.cc/J7yFw2zN/Untitled-1.png"/>
<div className="absolute -bottom-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-[10px] uppercase tracking-wider text-neutral-500 bg-black/80 px-2 py-0.5 rounded border border-white/10 whitespace-nowrap">
                    Kliknij, aby się skontaktować
                </div>
</div>
<h1 className="sm:text-6xl md:text-7xl leading-[1.1] text-4xl font-semibold text-white tracking-tighter max-w-5xl mr-auto ml-auto mt-4 uppercase">
                POMOŻEMY WYPROMOWAĆ <br className="hidden sm:block"/> TWÓJ EVENT
            </h1>
<p className="mt-6 text-base sm:text-lg text-neutral-400 max-w-xl mx-auto font-medium leading-relaxed">
                Kompleksowa obsługa, marketing i design dla e-sportu. Sprawdź, co możemy zrobić dla Twojego wydarzenia.
            </p>
<div className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">

<a className="group inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold text-black bg-white rounded hover:bg-neutral-200 transition-all border border-transparent" href="#wspolpraca">
                    PROMUJ SWÓJ EVENT
                    <iconify-icon className="ml-2 group-hover:rotate-12 transition-transform" icon="solar:megaphone-linear" width="18"></iconify-icon>
</a>
</div>
</section>

<section className="py-24 px-4 bg-[#050505] border-b border-white/5" id="wspolpraca">
<div className="max-w-4xl mx-auto border border-white/10 bg-white/[0.02] p-8 sm:p-12 rounded-lg relative overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
<div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
<div>
<div className="inline-block px-3 py-1 mb-4 border border-white/30 text-white text-[10px] font-semibold rounded uppercase tracking-wider bg-white/10">
                            Dla Organizatorów
                        </div>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tighter text-white mb-3">
                            TWÓJ EVENT MOŻE TU BYĆ
                        </h2>
<p className="text-neutral-400 max-w-md font-medium">
                            Promujemy wydarzenia gamingowe od A do Z. Dotrzyj do tysięcy graczy, zwiększ frekwencję i zbuduj hype.
                        </p>
</div>
<a className="whitespace-nowrap inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-transparent border border-white rounded hover:bg-white hover:text-black transition-all" href="#uslugi">
                        SZCZEGÓŁY
                    </a>
</div>
</div>
</section>

<section className="py-24 bg-[#050505]" id="uslugi">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

<div className="mb-20">
<div className="flex items-center justify-between mb-6">
<h2 className="text-2xl font-bold text-white border-b-2 border-white inline-block pb-1 tracking-tight">
                            O FIRMIE
                        </h2>
<button className="text-xs font-bold text-white bg-white/10 hover:bg-white/20 border border-white/10 px-4 py-2 rounded transition-colors uppercase tracking-wide flex items-center gap-2" onclick="togglePackageModal(true)">
                            WYBIERZ PAKIET
                        </button>
</div>
<ul className="list-disc list-inside space-y-3 text-neutral-300 text-lg font-medium">
<li>Doświadczenie w branży gamingowej</li>
<li>Kreatywne podejście do designu</li>
<li>Skuteczny marketing cyfrowy</li>
</ul>
</div>

<div>
<h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-12 uppercase">
                        USŁUGI
                    </h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-10">

<div className="flex flex-col">
<h3 className="text-xl font-bold text-white mb-5 uppercase tracking-tight">Grafika eventowa</h3>
<div className="w-full aspect-[16/9] mb-5 rounded border border-white/10 bg-white/5 overflow-hidden">
<img alt="Grafika eventowa" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" src="https://i.postimg.cc/V6FZgxfn/grafika.png"/>
</div>
<p className="text-neutral-400 text-base font-medium leading-relaxed">
                                Key Visuale i Bannery, Grafiki na Social Media, Animacje i Layouty Streamowe
                            </p>
</div>

<div className="flex flex-col">
<h3 className="text-xl font-bold text-white mb-5 uppercase tracking-tight">Branding i Identyfikacja</h3>
<div className="w-full aspect-[16/9] mb-5 rounded border border-white/10 bg-white/5 overflow-hidden">
<img alt="Branding" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" src="https://i.postimg.cc/qMqDcD9Q/Branding.png"/>
</div>
<p className="text-neutral-400 text-base font-medium leading-relaxed">
                                Logo i Księga Znaku, Kolorystyka i Typografia, Tożsamość Eventu
                            </p>
</div>

<div className="flex flex-col">
<h3 className="text-xl font-bold text-white mb-5 uppercase tracking-tight">Marketing cyfrowy</h3>
<div className="w-full aspect-[16/9] mb-5 rounded border border-white/10 bg-white/5 overflow-hidden">
<img alt="Marketing" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" src="https://i.postimg.cc/436W4Dhw/marketing.png"/>
</div>
<p className="text-neutral-400 text-base font-medium leading-relaxed">
                                Social Media, Kampanie Online
                            </p>
</div>
</div>
</div>

<div className="mt-24 pt-12 border-t border-white/10 text-center">
<p className="text-white font-semibold text-lg md:text-xl tracking-tight cursor-pointer hover:text-neutral-300 transition-colors duration-300 hover:underline underline-offset-4 decoration-white/30" onclick="toggleModal(true)">
                        Jeśli jesteś zainteresowany zapraszam do kontaktu, tam prześlę szczegóły.
                    </p>
</div>
</div>
</section>
</main>
<footer className="border-t border-white/10 py-12 bg-[#050505]">
<div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2 text-neutral-500">
<iconify-icon icon="solar:gamepad-linear" width="16"></iconify-icon>
<span className="text-xs font-semibold">© 2024 GAME EVENTS</span>
</div>
<div className="flex gap-6">
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:brand-instagram-linear" width="20"></iconify-icon>
</a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:brand-twitter-linear" width="20"></iconify-icon>
</a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:brand-discord-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</footer>

<div className="fixed inset-0 z-[100] hidden items-center justify-center bg-black/80 backdrop-blur-sm p-4 transition-all duration-300 opacity-0" id="contactModal" style={{display: 'none'}}>
<div className="relative w-full max-w-sm transform overflow-hidden rounded-xl border border-white/10 bg-[#0a0a0a] p-10 text-center shadow-2xl shadow-black/50">
<h3 className="mb-8 text-2xl font-semibold text-white tracking-tight leading-snug">Skontaktuj się ze mną</h3>
<div className="space-y-6 flex flex-col items-center">
<a className="flex items-center gap-3 text-lg font-semibold text-neutral-300 hover:text-white transition-colors group" href="tel:+48572344187">
<div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 group-hover:bg-white/10 transition-colors">
<iconify-icon icon="solar:phone-calling-linear" width="20"></iconify-icon>
</div>
<span className="border-b border-transparent group-hover:border-white/50 transition-all">+48 572 344 187</span>
</a>
<a className="flex items-center gap-3 text-lg font-semibold text-neutral-300 hover:text-white transition-colors group" href="https://www.instagram.com/yyyasioo/" target="_blank">
<div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 group-hover:bg-white/10 transition-colors">
<iconify-icon icon="solar:brand-instagram-linear" width="20"></iconify-icon>
</div>
<span className="border-b border-transparent group-hover:border-white/50 transition-all">@yyyasioo</span>
</a>
</div>
<button className="mt-10 w-full rounded border border-white/10 bg-white text-black py-3 text-sm font-semibold hover:bg-neutral-200 transition-all tracking-wide" onclick="toggleModal(false)">
                ZAMKNIJ
            </button>
</div>
</div>

<div className="fixed inset-0 z-[100] hidden items-center justify-center bg-black/90 backdrop-blur-md p-4 transition-all duration-300 opacity-0" id="packageModal" style={{display: 'none'}}>
<div className="relative w-full max-w-xl transform overflow-hidden rounded-xl border border-white/10 bg-[#0a0a0a] shadow-2xl shadow-black/50 max-h-[90vh] flex flex-col">
<div className="p-6 overflow-y-auto no-scrollbar">
<div className="flex justify-between items-center mb-6">
<h3 className="text-2xl font-bold text-white tracking-tight">WYBIERZ PAKIET</h3>
<button className="text-neutral-500 hover:text-white transition-colors" onclick="togglePackageModal(false)">
<iconify-icon icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
</div>
<div className="space-y-4 text-sm font-semibold" style={{fontFamily: '\'Bookman\', serif'}}>

<div className="border border-white/10 rounded-lg p-4 hover:bg-white/5 transition-colors">
<div className="flex justify-between items-center mb-1">
<span className="text-white uppercase tracking-wide">Grafika Eventowa</span>
<span className="text-white">79,99 zł</span>
</div>
<p className="text-neutral-400 font-medium text-xs leading-relaxed">Key Visuale i Bannery, Grafiki na Social Media, Animacje i Layouty Streamowe.</p>
</div>

<div className="border border-white/10 rounded-lg p-4 hover:bg-white/5 transition-colors">
<div className="flex justify-between items-center mb-1">
<span className="text-white uppercase tracking-wide">Branding i Identyfikacja</span>
<span className="text-white">99,99 zł</span>
</div>
<p className="text-neutral-400 font-medium text-xs leading-relaxed">Logo i Księga Znaku, Kolorystyka i Typografia, Tożsamość Eventu.</p>
</div>

<div className="border border-white/10 rounded-lg p-4 hover:bg-white/5 transition-colors">
<div className="flex justify-between items-center mb-1">
<span className="text-white uppercase tracking-wide">Marketing Cyfrowy</span>
<span className="text-white">120,00 zł</span>
</div>
<p className="text-neutral-400 font-medium text-xs leading-relaxed">Social Media, Kampanie Online.</p>
</div>

<div className="border border-white/10 rounded-lg p-4 hover:bg-white/5 transition-colors">
<div className="flex justify-between items-center mb-1">
<span className="text-white uppercase tracking-wide">Grafika i Branding</span>
<span className="text-white">140,00 zł</span>
</div>
<p className="text-neutral-400 font-medium text-xs leading-relaxed">Zawiera elementy z pakietów Grafika i Branding.</p>
</div>

<div className="bg-white text-black rounded-lg p-5 shadow-[0_0_20px_rgba(255,255,255,0.1)] transform scale-[1.02]">
<div className="flex justify-between items-center mb-1">
<span className="font-bold uppercase tracking-wide">FULL PAKIET</span>
<span className="font-bold">249,99 zł</span>
</div>
<p className="text-neutral-600 font-semibold text-xs leading-relaxed">Wszystko powyższe (Grafika + Branding + Marketing).</p>
</div>
</div>

<div className="mt-8 pt-6 border-t border-white/10">
<p className="text-center text-neutral-400 text-xs font-semibold mb-4">W celu zamówienia skontaktuj się ze mną:</p>
<div className="flex flex-col sm:flex-row gap-3 justify-center">
<a className="flex items-center justify-center gap-2 px-4 py-2.5 rounded border border-white/20 bg-white/5 hover:bg-white hover:text-black hover:border-white transition-all text-xs font-bold text-white uppercase tracking-wide" href="tel:+48572344187">
<iconify-icon icon="solar:phone-calling-linear" width="16"></iconify-icon>
                            +48 572 344 187
                        </a>
<a className="flex items-center justify-center gap-2 px-4 py-2.5 rounded border border-white/20 bg-white/5 hover:bg-white hover:text-black hover:border-white transition-all text-xs font-bold text-white uppercase tracking-wide" href="https://www.instagram.com/yyyasioo/" target="_blank">
<iconify-icon icon="solar:brand-instagram-linear" width="16"></iconify-icon>
                            @yyyasioo
                        </a>
</div>
</div>
</div>
<div className="p-4 bg-white/[0.02] border-t border-white/10">
<button className="w-full rounded border border-white/10 bg-white/10 text-white py-3 text-sm font-semibold hover:bg-white hover:text-black transition-all tracking-wide uppercase" onclick="togglePackageModal(false)">
                    Zamknij
                </button>
</div>
</div>
</div>



    </>
  );
}
