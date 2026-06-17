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
      

<nav className="fixed w-full z-50 glass-nav top-0">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-navy font-semibold text-lg tracking-tighter uppercase flex items-center gap-2" href="#">
<iconify-icon className="text-gold" icon="solar:snowflake-linear" width="20"></iconify-icon>
                MajaSKI
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-navy transition-colors" href="#o-nas">O nas</a>
<a className="hover:text-navy transition-colors" href="#oferta">Oferta</a>
<a className="hover:text-navy transition-colors" href="#instruktorzy">Instruktorzy</a>
<a className="px-4 py-2 bg-navy text-white rounded-md hover:bg-opacity-90 transition-all text-xs font-semibold tracking-wide" href="#kontakt">
                    Zarezerwuj
                </a>
</div>

<button className="md:hidden text-navy">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</nav>

<header className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Livigno Mountains" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e06d1f5b-697a-4ca8-9e9f-d8c7f9ee4e74_1600w.webp?w=800&amp;q=80"/>
<div className="cursor-pointer bg-gradient-to-b from-slate-900/30 via-slate-900/10 to-white absolute top-0 right-0 bottom-0 left-0" onclick="window.location.href='https://majaski.pl/wp-content/uploads/2024/11/Main-Page.png'" role="button"></div>
</div>
<div className="relative z-10 max-w-4xl mx-auto px-6 text-center animate-fade-up">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-medium mb-6">
<span className="w-2 h-2 rounded-full bg-green-400"></span>
                Sezon 2026 Otwarty
            </div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-white tracking-tight leading-[1.1] mb-6 drop-shadow-sm">
                Doświadcz magii gór <br/>w Livigno!
            </h1>
<p className="text-base md:text-lg text-slate-100 max-w-2xl mx-auto leading-relaxed font-light mb-10 drop-shadow-sm">
                Zarezerwuj indywidualne szkolenie narciarskie, snowboardowe lub telemarkowe. Skupimy się całkowicie na Twoich potrzebach, bezpieczeństwie i komforcie.
            </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<a className="px-8 py-3 bg-white text-navy rounded-lg font-semibold text-sm hover:bg-slate-50 transition-all shadow-lg shadow-black/5" href="#kontakt">
                    Zarezerwuj termin
                </a>
<a className="px-8 py-3 bg-navy/80 backdrop-blur-sm text-white border border-white/10 rounded-lg font-semibold text-sm hover:bg-navy transition-all" href="#oferta">
                    Zobacz ofertę
                </a>
</div>
</div>
</header>

<section className="py-24 bg-white relative" id="o-nas">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12">

<div className="group p-6 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-navy/5 text-navy flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:shield-check-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-navy tracking-tight mb-3">Odpowiedzialność</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Bezpieczeństwo jest naszym priorytetem. Każda lekcja jest prowadzona z najwyższą dbałością o Twoje zdrowie i komfort na stoku.
                    </p>
</div>

<div className="group p-6 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-navy/5 text-navy flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:diploma-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-navy tracking-tight mb-3">Profesjonalizm</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Nasi instruktorzy posiadają międzynarodowe uprawnienia ISIA oraz wieloletnie doświadczenie w nauczaniu na każdym poziomie.
                    </p>
</div>

<div className="group p-6 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-navy/5 text-navy flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:clock-circle-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-navy tracking-tight mb-3">Elastyczność</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Dostosowujemy program szkolenia do Twoich indywidualnych potrzeb, tempa nauki oraz warunków panujących na stoku.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-200/60" id="oferta">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-semibold text-navy tracking-tight mb-4">Wybierz swoją ścieżkę</h2>
<p className="text-slate-500 text-sm">Niezależnie od tego, czy dopiero zaczynasz, czy doskonalisz technikę.</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

<div className="bg-white rounded-2xl p-8 border border-slate-200 hover:border-navy/30 transition-colors shadow-sm relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-5">
<iconify-icon icon="solar:user-linear" width="120"></iconify-icon>
</div>
<div className="relative z-10">
<div className="flex items-center gap-3 mb-6">
<span className="p-2 bg-blue-50 text-navy rounded-lg">
<iconify-icon icon="solar:user-id-linear" width="24"></iconify-icon>
</span>
<h3 className="text-xl font-semibold text-navy tracking-tight">Szkolenie Indywidualne</h3>
</div>
<p className="text-sm text-slate-500 leading-relaxed mb-6">
                            Nauka skrojona na miarę – dostępna dla dzieci i dorosłych. Oferujemy szkolenie narciarskie, snowboardowe oraz telemarkowe.
                        </p>
<ul className="space-y-3 mb-8">
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-gold shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Pełne skupienie na Twoich celach</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-gold shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Możliwość stworzenia własnej grupy (do 6 osób)</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-gold shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Dla rodziny i przyjaciół</span>
</li>
</ul>
</div>
</div>

<div className="bg-white rounded-2xl p-8 border border-slate-200 hover:border-navy/30 transition-colors shadow-sm relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-5">
<iconify-icon icon="solar:users-group-rounded-linear" width="120"></iconify-icon>
</div>
<div className="relative z-10">
<div className="flex items-center gap-3 mb-6">
<span className="p-2 bg-orange-50 text-orange-600 rounded-lg">
<iconify-icon icon="solar:users-group-two-rounded-linear" width="24"></iconify-icon>
</span>
<h3 className="text-xl font-semibold text-navy tracking-tight">Szkolenie Grupowe</h3>
</div>
<p className="text-sm text-slate-500 leading-relaxed mb-6">
                            Organizowane we współpracy z lokalnymi szkołami w Livigno. Idealne dla osób lubiących naukę w towarzystwie i rywalizację.
                        </p>
<ul className="space-y-3 mb-8">
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-gold shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Zajęcia od niedzieli do piątku</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-gold shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Każdy poziom zaawansowania</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-gold shrink-0 mt-0.5" icon="solar:cup-star-linear"></iconify-icon>
<span>Finałowe zawody na koniec tygodnia</span>
</li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="instruktorzy">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-semibold text-navy tracking-tight mb-16 text-center">Poznaj instruktorów</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">

<div className="flex flex-col gap-6">
<div className="aspect-[4/5] w-full rounded-2xl overflow-hidden bg-slate-100 relative group">
<img alt="Maja Instruktor" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 filter grayscale hover:grayscale-0" src="https://images.unsplash.com/photo-1565992441121-4367c2967103?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-4 py-2 rounded-lg shadow-sm">
<p className="text-xs font-semibold text-navy tracking-wider">INSTRUKTOR ZAWODOWY</p>
</div>
</div>
<div>
<h3 className="text-2xl font-semibold text-navy mb-1">Maja</h3>
<p className="text-xs text-gold font-medium mb-4 tracking-wide">POL-SKI ISIA &amp; MAESTRO DI SCI</p>
<p className="text-sm text-slate-500 leading-relaxed mb-4">
                            Szkoli od 2011 roku. Pełna pasji i cierpliwości. Zawsze z uśmiechem prowadzi lekcje narciarstwa zjazdowego i telemarkowego. Kontakt z ludźmi i piękno natury są jej codzienną inspiracją.
                        </p>
</div>
</div>

<div className="flex flex-col gap-6">
<div className="aspect-[4/5] w-full rounded-2xl overflow-hidden bg-slate-100 relative group">
<img alt="Jacek Instruktor" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 filter grayscale hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-4 py-2 rounded-lg shadow-sm">
<p className="text-xs font-semibold text-navy tracking-wider">10+ LAT DOŚWIADCZENIA</p>
</div>
</div>
<div>
<h3 className="text-2xl font-semibold text-navy mb-1">Jacek</h3>
<p className="text-xs text-gold font-medium mb-4 tracking-wide">POL-SKI ISIA INSTRUKTOR</p>
<p className="text-sm text-slate-500 leading-relaxed mb-4">
                            Znany ze swobodnego podejścia i pozytywnej energii. Jacek prowadzi szkolenia narciarstwa i snowboardu dopasowane do każdego poziomu – zawsze cierpliwie i z humorem.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-navy py-20 text-white relative overflow-hidden" id="kontakt">

<div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
<div className="absolute -top-24 -right-24 w-96 h-96 bg-white rounded-full blur-3xl"></div>
<div className="absolute bottom-0 left-0 w-64 h-64 bg-[#20B2AA] rounded-full blur-3xl"></div>
</div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">Zarezerwuj swoją przygodę</h2>
<p className="text-slate-300 text-sm leading-relaxed mb-10 max-w-md">
                        Skontaktuj się z nami, aby ustalić szczegóły szkolenia. Jesteśmy dostępni przez cały sezon w Livigno.
                    </p>
<div className="space-y-6">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
<iconify-icon className="text-white" icon="solar:phone-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-xs text-slate-400 uppercase tracking-wider">Telefon</p>
<a className="hover:text-gold transition-colors" href="tel:+48000000000">+48 000 000 000</a>
</div>
</div>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
<iconify-icon className="text-white" icon="solar:letter-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-xs text-slate-400 uppercase tracking-wider">Email</p>
<a className="hover:text-gold transition-colors" href="mailto:kontakt@majaski.pl">kontakt@majaski.pl</a>
</div>
</div>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
<iconify-icon className="text-white" icon="solar:map-point-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-xs text-slate-400 uppercase tracking-wider">Lokalizacja</p>
<p>Livigno, Włochy</p>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-2xl p-8 text-slate-800 shadow-2xl">
<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-xs font-semibold text-slate-500">Imię</label>
<input className="custom-input w-full p-3 text-sm" placeholder="Jan" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs font-semibold text-slate-500">Nazwisko</label>
<input className="custom-input w-full p-3 text-sm" placeholder="Kowalski" type="text"/>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-semibold text-slate-500">Email</label>
<input className="custom-input w-full p-3 text-sm" placeholder="jan@example.com" type="email"/>
</div>
<div className="space-y-1">
<label className="text-xs font-semibold text-slate-500">Typ szkolenia</label>
<div className="relative">
<select className="custom-input w-full p-3 text-sm appearance-none cursor-pointer">
<option>Szkolenie indywidualne</option>
<option>Szkolenie grupowe</option>
<option>Telemark</option>
</select>
<iconify-icon className="absolute right-3 top-3.5 text-slate-400 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-semibold text-slate-500">Wiadomość</label>
<textarea className="custom-input w-full p-3 text-sm h-24 resize-none" placeholder="Dodatkowe informacje..."></textarea>
</div>
<button className="w-full bg-navy text-white py-3 rounded-lg font-semibold text-sm hover:bg-[#20B2AA] transition-colors flex items-center justify-center gap-2 mt-2" type="button">
<span>Wyślij wiadomość</span>
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</form>
</div>
</div>

<div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-slate-400">
<p>© 2026 MajaSKI Academy Livigno. Wszelkie prawa zastrzeżone.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-white transition-colors" href="#">Instagram</a>
<a className="hover:text-white transition-colors" href="#">Facebook</a>
<a className="hover:text-white transition-colors" href="#">Polityka Prywatności</a>
</div>
</div>
</div>
</section>

    </>
  );
}
