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



        const WEBHOOK_URL = 'https://hook.eu1.make.com/TWOJ_WEBHOOK_ID_TUTAJ'; 
        const TIDYCAL_URL = 'https://tidycal.com/studioformy/trening-probny'; // Placeholder logic

        // Modal Control
        document.addEventListener('click', function(e) {
            if (e.target.closest('.open-popup')) {
                e.preventDefault();
                toggleModal(true);
            }
            if (e.target.id === 'lp-modal-overlay') {
                toggleModal(false);
            }
        });

        function toggleModal(show) {
            const modal = document.getElementById('lp-modal-overlay');
            if(show) {
                modal.classList.add('open');
            } else {
                modal.classList.remove('open');
                setTimeout(() => {
                    document.getElementById('lp-modal-step-1').style.display = 'block';
                    document.getElementById('tidycal-container').style.display = 'none';
                }, 300);
            }
        }
        window.toggleModal = toggleModal;

        // Form Logic
        document.addEventListener('DOMContentLoaded', () => {
            const form = document.getElementById('lp-lead-form');
            form.addEventListener('submit', async (e) => {
                e.preventDefault();
                const btn = form.querySelector('.lp-submit-btn');
                const btnText = btn.querySelector('.btn-text');
                const spinner = btn.querySelector('.spinner');
                
                // Loading State
                btn.disabled = true;
                btnText.style.display = 'none';
                spinner.style.display = 'block';

                const formData = new FormData(form);
                const data = Object.fromEntries(formData.entries());

                try {
                    // Simulate webhook delay if no URL provided
                    if(WEBHOOK_URL.includes('TWOJ_WEBHOOK')) {
                        console.log("Dane (symulacja):", data);
                        await new Promise(r => setTimeout(r, 800));
                    } else {
                        await fetch(WEBHOOK_URL, {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify(data)
                        });
                    }

                    // Show Calendar
                    document.getElementById('lp-modal-step-1').style.display = 'none';
                    document.getElementById('tidycal-container').style.display = 'block';
                    
                    const iframe = document.getElementById('tidycal-iframe');
                    if (!iframe.src) iframe.src = TIDYCAL_URL;

                } catch (err) {
                    alert('Błąd. Spróbuj ponownie.');
                } finally {
                    btn.disabled = false;
                    btnText.style.display = 'block';
                    spinner.style.display = 'none';
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
      

<section className="md:pt-24 md:pb-24 overflow-hidden pt-12 pr-6 pb-16 pl-6 relative">
<div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">

<div className="animate-fade-up order-2 md:order-1">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#003366] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#003366]"></span>
</span>
<span className="text-xs font-bold uppercase tracking-widest text-[#003366]">Program dla Mężczyzn 36+ z Dębicy</span>
</div>
<h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-[1.1] mb-6 text-[#1d1d1f]">
                    Wróć do formy w 8 tygodni.<br/>
<span className="text-[#86868b]">Bez chaosu. Bez niszczenia stawów.</span>
</h1>
<p className="text-lg md:text-xl font-medium text-[#424245] mb-8 tracking-tight leading-relaxed">
                    Treningi w Studio Formy, ul. Piekarska 10, Dębica.<br/>
                    Jasny plan. Realne efekty.
                </p>
<div className="flex flex-col sm:items-start items-center gap-3">
<button className="open-popup group w-full sm:w-auto bg-[#003366] text-white text-lg font-semibold py-4 px-8 rounded-full shadow-lg hover:bg-[#002a55] transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2">
                        Sprawdź dostępne terminy
                        <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
<span className="text-xs font-semibold text-red-600 uppercase tracking-wide">
<iconify-icon className="inline align-text-bottom mr-1" icon="solar:fire-bold"></iconify-icon>
                        Liczba miejsc ograniczona
                    </span>
</div>
</div>

<div className="relative animate-fade-up delay-200 order-1 md:order-2">
<div className="relative rounded-[32px] overflow-hidden shadow-2xl aspect-[4/5] bg-gray-100">
<img alt="Trening personalny Dębica" className="w-full h-full object-cover grayscale-[10%]" src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
<div className="absolute bottom-6 left-6 text-white">
<p className="font-bold text-lg">Konkretny trening.</p>
<p className="text-gray-300 text-sm">Zero zbędnego gadania.</p>
</div>
</div>
</div>
</div>
</section>

<section className="border-y bg-white border-gray-100 pt-16 pr-6 pb-16 pl-6">
<div className="max-w-3xl mx-auto text-center animate-fade-up">
<h2 className="text-2xl font-bold text-[#1d1d1f] tracking-tight mb-4 md:text-5xl">
                Czujesz, że forma już nie ta co kiedyś?
            </h2>
<p className="text-lg text-[#424245] leading-relaxed">
                Plecy sztywne, barki bolą, a każda próba powrotu do treningu kończy się zakwasami albo przerwą. 
                Ten program jest dla facetów, którzy chcą wrócić do formy <span className="font-bold text-[#003366]">mądrze i bezpiecznie.</span>
</p>
</div>
</section>

<section className="py-20 md:py-24 bg-[#f5f5f7] px-6">
<div className="max-w-5xl mx-auto">
<div className="text-center mb-12 animate-fade-up">
<h2 className="text-3xl font-bold tracking-tighter text-[#1d1d1f]">Sprawdź, czy to program dla Ciebie</h2>
</div>
<div className="grid md:grid-cols-2 gap-8">

<div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm animate-fade-up delay-100">
<div className="flex items-center gap-3 mb-6">
<iconify-icon className="text-green-600 text-3xl" icon="solar:check-circle-bold"></iconify-icon>
<h3 className="text-xl font-bold text-[#1d1d1f]">To jest DLA Ciebie, jeśli:</h3>
</div>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-[#424245] font-medium">
<iconify-icon className="text-green-600 mt-1 shrink-0" icon="solar:check-read-linear"></iconify-icon>
                            Mieszkasz w Dębicy lub okolicach
                        </li>
<li className="flex items-start gap-3 text-[#424245] font-medium">
<iconify-icon className="text-green-600 mt-1 shrink-0" icon="solar:check-read-linear"></iconify-icon>
                            Masz 36+ i czujesz, że forma spadła
                        </li>
<li className="flex items-start gap-3 text-[#424245] font-medium">
<iconify-icon className="text-green-600 mt-1 shrink-0" icon="solar:check-read-linear"></iconify-icon>
                            Chcesz konkretów, a nie fit-trendów
                        </li>
<li className="flex items-start gap-3 text-[#424245] font-medium">
<iconify-icon className="text-green-600 mt-1 shrink-0" icon="solar:check-read-linear"></iconify-icon>
                            Chcesz wrócić do formy bez niszczenia stawów
                        </li>
</ul>
</div>

<div className="bg-[#ebebf0] p-8 md:p-10 rounded-3xl animate-fade-up delay-200">
<div className="flex items-center gap-3 mb-6">
<iconify-icon className="text-red-600 text-3xl" icon="solar:close-circle-bold"></iconify-icon>
<h3 className="text-xl font-bold text-[#1d1d1f]">To NIE jest dla Ciebie, jeśli:</h3>
</div>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-[#6e6e73] font-medium">
<iconify-icon className="text-red-600 mt-1 shrink-0" icon="solar:close-square-linear"></iconify-icon>
                            Szukasz darmowych porad
                        </li>
<li className="flex items-start gap-3 text-[#6e6e73] font-medium">
<iconify-icon className="text-red-600 mt-1 shrink-0" icon="solar:close-square-linear"></iconify-icon>
                            Nie chcesz się angażować
                        </li>
<li className="flex items-start gap-3 text-[#6e6e73] font-medium">
<iconify-icon className="text-red-600 mt-1 shrink-0" icon="solar:close-square-linear"></iconify-icon>
                            Liczysz na efekt bez pracy
                        </li>
</ul>
</div>
</div>
<div className="text-center mt-10">
<button className="open-popup inline-flex items-center gap-2 text-[#003366] font-bold text-lg hover:underline transition-all">
                    Pasujemy do siebie? Sprawdź dostępne terminy
                    <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</section>

<section className="py-20 px-6 bg-white">
<div className="max-w-4xl mx-auto">
<h2 className="text-3xl font-bold tracking-tighter text-[#1d1d1f] text-center mb-12">Co zyskasz?</h2>
<div className="grid sm:grid-cols-2 gap-6">

<div className="p-6 rounded-2xl bg-[#f5f5f7] flex items-start gap-4 hover:bg-[#eff0f2] transition-colors">
<div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-[#003366] shadow-sm shrink-0">
<iconify-icon icon="solar:dumbbell-large-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-bold text-[#1d1d1f] mb-1">Więcej siły</h3>
<p className="text-sm text-[#86868b]">Żebyś mógł robić to, co chcesz.</p>
</div>
</div>

<div className="p-6 rounded-2xl bg-[#f5f5f7] flex items-start gap-4 hover:bg-[#eff0f2] transition-colors">
<div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-[#003366] shadow-sm shrink-0">
<iconify-icon icon="solar:heart-pulse-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-bold text-[#1d1d1f] mb-1">Lepszą kondycję</h3>
<p className="text-sm text-[#86868b]">Bez zadyszki na schodach.</p>
</div>
</div>

<div className="p-6 rounded-2xl bg-[#f5f5f7] flex items-start gap-4 hover:bg-[#eff0f2] transition-colors">
<div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-[#003366] shadow-sm shrink-0">
<iconify-icon icon="solar:bolt-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-bold text-[#1d1d1f] mb-1">Więcej energii</h3>
<p className="text-sm text-[#86868b]">Na co dzień, nie tylko od święta.</p>
</div>
</div>

<div className="p-6 rounded-2xl bg-[#f5f5f7] flex items-start gap-4 hover:bg-[#eff0f2] transition-colors">
<div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-[#003366] shadow-sm shrink-0">
<iconify-icon icon="solar:bone-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-bold text-[#1d1d1f] mb-1">Zdrowsze plecy</h3>
<p className="text-sm text-[#86868b]">Koniec ze sztywnością i bólem stawów.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#f5f5f7] px-6">
<div className="max-w-3xl mx-auto">
<h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-center mb-16 text-[#1d1d1f]">Jak wygląda program?</h2>
<div className="relative space-y-12">

<div className="absolute left-[20px] top-4 bottom-4 w-[2px] bg-[#e5e5ea]"></div>

<div className="relative pl-16 animate-fade-up">
<div className="absolute left-0 top-1 w-11 h-11 rounded-full bg-[#003366] text-white flex items-center justify-center z-10 shadow-lg font-bold text-base">1</div>
<h3 className="text-xl font-bold text-[#1d1d1f] mb-1">Start (Tydzień 1)</h3>
<p className="text-[#424245] font-medium leading-relaxed">Sprawdzamy Twoje ciało i zaczynamy trening. Tak, będą zakwasy.</p>
</div>

<div className="relative pl-16 animate-fade-up delay-100">
<div className="absolute left-0 top-1 w-11 h-11 rounded-full bg-white border-2 border-[#e5e5ea] text-[#1d1d1f] flex items-center justify-center z-10 font-bold text-base">2</div>
<h3 className="text-xl font-bold text-[#1d1d1f] mb-1">Fundament (Tygodnie 2–4)</h3>
<p className="text-[#424245] font-medium leading-relaxed">Budujesz podstawy. Z tygodnia na tydzień jest lżej i stabilniej.</p>
</div>

<div className="relative pl-16 animate-fade-up delay-200">
<div className="absolute left-0 top-1 w-11 h-11 rounded-full bg-white border-2 border-[#e5e5ea] text-[#1d1d1f] flex items-center justify-center z-10 font-bold text-base">3</div>
<h3 className="text-xl font-bold text-[#1d1d1f] mb-1">Forma (Tygodnie 5–7)</h3>
<p className="text-[#424245] font-medium leading-relaxed">Więcej siły, mniej sztywności, lepsza kondycja.</p>
</div>

<div className="relative pl-16 animate-fade-up delay-300">
<div className="absolute left-0 top-1 w-11 h-11 rounded-full bg-[#1d1d1f] text-white flex items-center justify-center z-10 shadow-lg font-bold text-base">4</div>
<h3 className="text-xl font-bold text-[#1d1d1f] mb-1">Nowy standard (Tydzień 8)</h3>
<p className="text-[#424245] font-medium leading-relaxed">Wiesz, jak trenować mądrze i utrzymać formę na dłużej.</p>
</div>
</div>
<div className="mt-12 bg-white p-6 rounded-2xl border border-blue-100 text-center animate-fade-up delay-300">
<p className="text-[#003366] font-semibold italic">"Na początku poczujesz mięśnie i zakwasy. Po kilku tygodniach poczujesz, że znowu masz kontrolę nad swoim ciałem."</p>
</div>
</div>
</section>

<section className="py-20 px-6 border-b border-gray-200">
<div className="max-w-4xl mx-auto">
<div className="text-center mb-10">
<p className="text-sm font-bold uppercase tracking-widest text-[#86868b] mb-2">Lokalizacja</p>
<h3 className="text-2xl font-bold text-[#1d1d1f]">Treningi w Studio Formy, ul. Piekarska 10 w Dębicy</h3>
</div>
<div className="grid md:grid-cols-3 gap-6">
<div className="bg-white border border-gray-100 p-6 rounded-2xl text-center shadow-sm">
<div className="text-[#003366] mb-2 flex justify-center"><iconify-icon icon="solar:star-bold" width="32"></iconify-icon></div>
<div className="font-bold text-3xl text-[#1d1d1f] mb-1">5.0</div>
<div className="text-xs font-semibold text-[#86868b]">Ocena w Google</div>
</div>
<div className="bg-white border border-gray-100 p-6 rounded-2xl text-center shadow-sm">
<div className="text-[#003366] mb-2 flex justify-center"><iconify-icon icon="solar:users-group-rounded-linear" width="32"></iconify-icon></div>
<div className="font-bold text-2xl text-[#1d1d1f] mb-1">Setki</div>
<div className="text-xs font-semibold text-[#86868b]">Mężczyzn z Dębicy wróciło do formy</div>
</div>
<div className="bg-white border border-gray-100 p-6 rounded-2xl text-center shadow-sm">
<div className="text-[#003366] mb-2 flex justify-center"><iconify-icon icon="solar:map-point-linear" width="32"></iconify-icon></div>
<div className="font-bold text-2xl text-[#1d1d1f] mb-1">Dębica</div>
<div className="text-xs font-semibold text-[#86868b]">ul. Piekarska 10</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#1d1d1f]">
<div className="max-w-3xl mx-auto text-center animate-fade-up">
<h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-6 text-white">
                Chcesz sprawdzić, czy to program dla Ciebie?
            </h2>
<p className="text-lg text-gray-400 font-medium mb-12">
                Zobacz dostępne terminy i umów się na trening próbny.
            </p>
<button className="open-popup bg-white text-[#1d1d1f] hover:bg-gray-100 transition-colors shadow-2xl flex gap-3 md:w-auto w-full rounded-full mx-auto py-5 px-10 items-center justify-center text-lg font-bold">
<iconify-icon icon="solar:calendar-linear" width="24"></iconify-icon>
                Sprawdź dostępne terminy
            </button>
<p className="mt-8 text-sm font-medium text-gray-500">
                Liczba miejsc ograniczona.
            </p>
</div>
</section>

<footer className="bg-[#1d1d1f] border-t border-gray-800 py-12 px-6">
<div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 font-medium text-center md:text-left">
<p className="mb-4 md:mb-0">© 2024 Studio Formy. Dębica, ul. Piekarska 10.</p>
<div className="flex gap-8 justify-center">
<a className="hover:text-white transition-colors" href="#">Prywatność</a>
<a className="hover:text-white transition-colors" href="#">Regulamin</a>
</div>
</div>
</footer>

<div id="lp-modal-overlay">
<div id="lp-modal-content">
<button className="lp-close-btn" onclick="window.toggleModal(false)">
<iconify-icon icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
<div id="lp-modal-step-1">
<h3 className="text-2xl font-bold text-[#1d1d1f] mb-2">Zarezerwuj trening próbny</h3>
<p className="text-[#86868b] text-sm mb-6">Wypełnij formularz, aby przejść do wyboru terminu.</p>
<form id="lp-lead-form">
<input className="lp-input" name="imie" placeholder="Imię" required="" type="text"/>
<input className="lp-input" name="nazwisko" placeholder="Nazwisko" required="" type="text"/>
<input className="lp-input" name="telefon" placeholder="Telefon (np. 123 456 789)" required="" type="tel"/>
<button className="lp-submit-btn" type="submit">
<span className="btn-text">Dalej: Wybierz termin</span>
<div className="spinner"></div>
</button>
</form>
<p className="text-xs text-[#86868b] mt-4 text-center">Twoje dane są bezpieczne.</p>
</div>
<div id="tidycal-container">
<h3 className="text-xl font-bold text-[#1d1d1f] mb-4 text-center">Wybierz dogodny termin</h3>
<iframe frameborder="0" id="tidycal-iframe" src=""></iframe>
</div>
</div>
</div>



    </>
  );
}
