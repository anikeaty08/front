import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      const form = document.getElementById('callForm');
      const phoneInput = document.getElementById('phone');
      const callButton = document.getElementById('callButton');
      const buttonText = document.getElementById('buttonText');
      const statusText = document.getElementById('statusText');

      async function handleCall(event) {
        event.preventDefault();

        const phone = phoneInput.value.trim();

        if (!phone) {
          statusText.textContent = 'Wpisz numer telefonu, aby kontynuować.';
          statusText.className = 'text-center text-xs text-rose-300';
          phoneInput.focus();
          return;
        }

        callButton.disabled = true;
        buttonText.textContent = 'Łączenie...';
        statusText.textContent = 'Trwa wysyłanie zgłoszenia.';
        statusText.className = 'text-center text-xs text-cyan-200/80';

        try {
          await fetch('https://hooks.zapier.com/hooks/catch/19140629/u77cwmj/', {
            method: 'POST',
            body: JSON.stringify({ phone: phone })
          });

          buttonText.textContent = 'Dzwonimy!';
          statusText.textContent = 'Połączenie zostało uruchomione! Odbierz telefon.';
          statusText.className = 'text-center text-xs text-emerald-300';
        } catch (error) {
          console.error(error);
          buttonText.textContent = 'Spróbuj ponownie';
          statusText.textContent = 'Wystąpił problem z połączeniem. Spróbuj jeszcze raz.';
          statusText.className = 'text-center text-xs text-rose-300';
          callButton.disabled = false;
          return;
        }

        setTimeout(() => {
          callButton.disabled = false;
          buttonText.textContent = 'Zadzwoń ponownie';
          statusText.textContent = 'Agent jest gotowy na kolejne połączenie.';
          statusText.className = 'text-center text-xs text-white/55';
          phoneInput.value = '';
        }, 8000);
      }

      form.addEventListener('submit', handleCall);
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<main className="relative overflow-hidden">
<div className="absolute inset-0">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.16),transparent_28%),radial-gradient(circle_at_80%_18%,rgba(168,85,247,0.18),transparent_30%),radial-gradient(circle_at_50%_75%,rgba(59,130,246,0.12),transparent_32%),linear-gradient(180deg,#020617_0%,#0b1020_45%,#09090f_100%)]"></div>
<div className="absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl"></div>
<div className="absolute right-16 top-16 h-64 w-64 rounded-full bg-violet-500/10 blur-3xl"></div>
<div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl"></div>
<div className="absolute inset-0 bg-white/[0.02]" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,0.035) 0.0625rem, transparent 0.0625rem), linear-gradient(90deg, rgba(255,255,255,0.035) 0.0625rem, transparent 0.0625rem)', backgroundSize: '2.5rem 2.5rem'}}></div>
</div>
<section className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col justify-center px-6 py-12 sm:px-8 lg:px-12">
<div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
<div className="mx-auto max-w-2xl text-center lg:mx-0 lg:text-left">
<div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-white/80 backdrop-blur">
<span className="inline-block h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_1rem_rgba(74,222,128,0.8)]"></span>
              Agent głosowy AI dostępny 24/7
            </div>
<h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Pozwól AI zadzwonić do Twoich klientów
              <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-violet-400 bg-clip-text text-transparent">
                w kilka sekund
              </span>
</h1>
<p className="mt-6 max-w-xl text-sm leading-7 text-white/70 sm:text-base">
              Nowoczesny agent głosowy, który automatyzuje kontakt telefoniczny,
              obsługuje leady i uruchamia rozmowę natychmiast po podaniu numeru.
            </p>
<div className="mt-8 flex flex-col items-center gap-3 text-xs text-white/55 sm:flex-row lg:items-start">
<div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 backdrop-blur">
<iconify-icon height="18" icon="solar:shield-check-linear" style={{color: 'rgba(125,211,252,0.95)'}} width="18"></iconify-icon>
                Bezpieczne połączenie
              </div>
<div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 backdrop-blur">
<iconify-icon height="18" icon="solar:bolt-linear" style={{color: 'rgba(196,181,253,0.95)'}} width="18"></iconify-icon>
                Połączenie w około 5 sekund
              </div>
</div>
</div>
<div className="relative flex items-center justify-center">
<div className="absolute h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl"></div>
<div className="absolute h-[32rem] w-[32rem] rounded-full bg-violet-500/10 blur-3xl"></div>
<div className="relative">
<div className="absolute inset-0 scale-110 rounded-[3rem] bg-gradient-to-b from-cyan-400/20 via-violet-400/10 to-blue-500/20 blur-2xl"></div>
<div className="relative mx-auto w-72 rounded-[3rem] border border-white/10 bg-black/50 p-2 shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_2rem_5rem_rgba(0,0,0,0.55)] backdrop-blur-xl sm:w-80">
<div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[linear-gradient(180deg,rgba(15,23,42,0.98)_0%,rgba(8,15,32,0.98)_48%,rgba(10,10,18,0.98)_100%)]">
<div className="absolute left-1/2 top-3 z-20 h-7 w-32 -translate-x-1/2 rounded-full bg-black/90 shadow-inner"></div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(56,189,248,0.14),transparent_30%),radial-gradient(circle_at_100%_30%,rgba(168,85,247,0.14),transparent_30%),radial-gradient(circle_at_0%_100%,rgba(59,130,246,0.1),transparent_25%)]"></div>
<div className="relative flex min-h-[36rem] flex-col justify-between px-5 pb-6 pt-14 sm:min-h-[38rem]">
<div>
<div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 shadow-[0_0_2rem_rgba(56,189,248,0.15)] backdrop-blur">
<iconify-icon height="26" icon="solar:phone-calling-rounded-linear" style={{color: 'rgba(125,211,252,0.98)'}} width="26"></iconify-icon>
</div>
<div className="text-center">
<p className="text-xs font-medium uppercase tracking-[0.18em] text-cyan-200/70">
                          Fonio AI
                        </p>
<h2 className="mt-2 text-2xl font-semibold tracking-tight text-white">
                          Oddzwonimy za Ciebie
                        </h2>
<p className="mt-2 text-xs leading-6 text-white/60">
                          Wpisz numer telefonu i uruchom połączenie natychmiast.
                        </p>
</div>
<form className="mt-8 space-y-4" id="callForm">
<label className="block text-left text-xs font-medium text-white/70" htmlFor="phone">
                          Numer telefonu
                        </label>
<div className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur transition duration-300 focus-within:border-cyan-300/50 focus-within:bg-white/[0.07]">
<iconify-icon height="20" icon="solar:phone-linear" style={{color: 'rgba(255,255,255,0.6)'}} width="20"></iconify-icon>
<input autocomplete="tel" className="w-full bg-transparent text-sm text-white placeholder:text-white/35 focus:outline-none" id="phone" inputmode="tel" name="phone" placeholder="+48 123 456 789" required="" type="tel"/>
</div>
<button className="relative w-full overflow-hidden rounded-2xl bg-gradient-to-r from-cyan-400 via-sky-500 to-violet-500 px-4 py-4 text-sm font-semibold text-slate-950 shadow-[0_0_2.5rem_rgba(56,189,248,0.35)] transition duration-300 hover:scale-[1.01] hover:shadow-[0_0_3rem_rgba(96,165,250,0.45)] disabled:cursor-not-allowed disabled:opacity-80" id="callButton" style={{animation: 'pulseGlow 2s infinite'}} type="submit">
<span className="relative z-10 flex items-center justify-center gap-2">
<iconify-icon height="20" icon="solar:phone-calling-linear" style={{color: 'rgba(2,6,23,0.92)'}} width="20"></iconify-icon>
<span id="buttonText">Zadzwoń</span>
</span>
<span className="absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.35),transparent)]" style={{animation: 'shimmer 2.8s linear infinite'}}></span>
</button>
<p className="text-center text-xs text-white/55" id="statusText">
                          Agent Fonio AI zadzwoni do Ciebie w 5 sekund
                        </p>
</form>
</div>
<div className="mt-8 grid grid-cols-3 gap-3 text-center">
<div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-3 backdrop-blur">
<div className="text-sm font-semibold text-white">24/7</div>
<div className="mt-1 text-xs text-white/45">Dostępność</div>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-3 backdrop-blur">
<div className="text-sm font-semibold text-white">
                          &lt;5s
                        </div>
<div className="mt-1 text-xs text-white/45">
                          Czas startu
                        </div>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-3 backdrop-blur">
<div className="text-sm font-semibold text-white">AI</div>
<div className="mt-1 text-xs text-white/45">
                          Automatyzacja
                        </div>
</div>
</div>
</div>
<div className="pointer-events-none absolute inset-x-0 bottom-2 flex justify-center">
<div className="h-1.5 w-24 rounded-full bg-white/15"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
</main>

<style>
      @keyframes pulseGlow {
        0%, 100% {
          transform: scale(1);
          box-shadow: 0 0 0 0 rgba(56, 189, 248, 0.28), 0 0 2.5rem rgba(56, 189, 248, 0.22);
        }
        50% {
          transform: scale(1.015);
          box-shadow: 0 0 0 0.75rem rgba(56, 189, 248, 0), 0 0 3rem rgba(139, 92, 246, 0.22);
        }
      }

      @keyframes shimmer {
        0% {
          transform: translateX(-120%);
        }
        100% {
          transform: translateX(120%);
        }
      }
    </style>

    </>
  );
}
