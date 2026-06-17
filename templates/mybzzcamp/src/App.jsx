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



    (function() {
      const tiers = [
        { d: "2026-01-18T23:59:00+01:00" },
        { d: "2026-02-01T23:59:00+01:00" },
        { d: "2026-02-15T23:59:00+01:00" },
        { d: "2026-03-01T23:59:00+01:00" },
        { d: "2026-03-03T23:59:00+01:00" }
      ];
      const el = document.getElementById('promo-status-text-updated');
      function tick() {
        if (!el) return;
        const now = Date.now();
        let active = null;
        for (const t of tiers) {
          if (now <= Date.parse(t.d)) {
            active = t;
            break;
          }
        }
        if (active) {
          const dObj = new Date(active.d);
          const ds = String(dObj.getDate()).padStart(2,'0') + "." + String(dObj.getMonth()+1).padStart(2,'0') + "." + dObj.getFullYear();
          el.textContent = "Cena obowiązuje do: " + ds + ", 23:59 (CET)";
          el.className = "text-xs text-[#01aae9] font-medium bg-[#01aae9]/10 px-4 py-2 rounded-full border border-[#01aae9]/20 inline-block backdrop-blur-md";
        } else {
          el.textContent = "Promocja zakończona";
          el.className = "text-xs text-zinc-500 font-medium bg-zinc-800/50 px-4 py-2 rounded-full border border-white/5 inline-block backdrop-blur-md";
        }
      }
      setInterval(tick, 1000);
      tick();
    })();
  


      lucide.createIcons();
    


      (function() {
        const tiers = [
          { d: "2026-01-18T23:59:00+01:00", c: "WRGVF5", p: "2 549", s: "1 450" },
          { d: "2026-02-01T23:59:00+01:00", c: "FFGTT7", p: "2 749", s: "1 250" },
          { d: "2026-02-15T23:59:00+01:00", c: "THDFH5", p: "2 949", s: "1 050" },
          { d: "2026-03-01T23:59:00+01:00", c: "FFERTR6", p: "3 149", s: "850" },
          { d: "2026-03-03T23:59:00+01:00", c: "GDFGU7", p: "3 349", s: "650" }
        ];
        const els = {
          reg: document.getElementById('regular-price'),
          curr: document.getElementById('current-price'),
          save: document.getElementById('savings-info'),
          btn: document.getElementById('stripe-buy-btn'),
          status: document.getElementById('promo-status-text'),
          days: document.querySelector('#countdown-timer [data-unit="days"]'),
          hours: document.querySelector('#countdown-timer [data-unit="hours"]'),
          mins: document.querySelector('#countdown-timer [data-unit="minutes"]'),
          secs: document.querySelector('#countdown-timer [data-unit="seconds"]')
        };
        const base = "https://buy.stripe.com/dRm00i8hA1FMc9ccd50x203";

        function tick() {
          const now = Date.now();
          let active = null;
          let end = null;

          for (const t of tiers) {
            const e = Date.parse(t.d);
            if (now <= e) {
              active = t;
              end = e;
              break;
            }
          }

          if (active) {
            if (els.reg) els.reg.textContent = "Cena regularna: 3 999 zł";
            if (els.curr) els.curr.textContent = active.p + " zł";
            if (els.save) {
              els.save.style.display = "inline-block";
              els.save.textContent = "Oszczędzasz: " + active.s + " zł";
            }
            if (els.btn) els.btn.href = base + "?prefilled_promo_code=" + active.c;

            const dObj = new Date(active.d);
            const ds = String(dObj.getDate()).padStart(2,'0') + "." + String(dObj.getMonth()+1).padStart(2,'0') + "." + dObj.getFullYear();
            if (els.status) {
                els.status.textContent = "Kod aktywny do: " + ds + ", 23:59 (CET)";
                // Updated class names here as well to match #01aae9
                els.status.className = "text-xs text-[#01aae9] font-medium bg-[#01aae9]/10 px-4 py-2 rounded-full border border-[#01aae9]/20 inline-block backdrop-blur-md";
            }

            const diff = end - now;
            if (diff > 0) {
              const dd = Math.floor(diff / (1000*60*60*24));
              const hh = Math.floor((diff % (1000*60*60*24)) / (1000*60*60));
              const mm = Math.floor((diff % (1000*60*60)) / (1000*60));
              const ss = Math.floor((diff % (1000*60)) / 1000);
              if(els.days) els.days.textContent = String(dd).padStart(2,'0');
              if(els.hours) els.hours.textContent = String(hh).padStart(2,'0');
              if(els.mins) els.mins.textContent = String(mm).padStart(2,'0');
              if(els.secs) els.secs.textContent = String(ss).padStart(2,'0');
            } else {
              if(els.days) els.days.textContent = "00";
              if(els.hours) els.hours.textContent = "00";
              if(els.mins) els.mins.textContent = "00";
              if(els.secs) els.secs.textContent = "00";
            }
          } else {
            if (els.reg) els.reg.textContent = "Cena: 3 999 zł";
            if (els.curr) els.curr.textContent = "3 999 zł";
            if (els.save) els.save.style.display = "none";
            if (els.btn) els.btn.href = base;
            if (els.status) {
                els.status.textContent = "Promocja zakończona";
                els.status.className = "text-xs text-zinc-500 font-medium bg-zinc-800/50 px-4 py-2 rounded-full border border-white/5 inline-block backdrop-blur-md";
            }
            if(els.days) els.days.textContent = "00";
            if(els.hours) els.hours.textContent = "00";
            if(els.mins) els.mins.textContent = "00";
            if(els.secs) els.secs.textContent = "00";
          }
        }
        setInterval(tick, 1000);
        tick();
      })();
    
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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-xl">
<div className="flex h-16 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<div className="flex items-center gap-2">
<span className="text-2xl font-semibold text-white tracking-tight">
            MYBZZ
            <span className="text-sky-500">CAMP</span>
</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="hover:text-white transition-colors" href="#dlaczego">
            Dlaczego warto?
          </a>
<a className="hover:text-white transition-colors" href="#organizatorzy">
            Organizatorzy
          </a>
<a className="hover:text-white transition-colors" href="#agenda">
            Agenda
          </a>
<a className="hover:text-white transition-colors" href="#miejsce">
            Lokalizacja
          </a>
</div>
<a className="hidden md:flex items-center gap-2 hover:bg-[#01aae9] hover:text-white transition-colors text-xs font-medium text-black bg-white rounded-full pt-2 pr-4 pb-2 pl-4" href="#bilety">
          Dołącz do Campa
          <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</nav>

<section className="overflow-hidden md:pb-20 md:pt-38 pt-32 pb-24 relative">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#01aae9]/10 blur-[120px] rounded-full pointer-events-none"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-bold text-[#ffcc00]/[0.05] tracking-tighter select-none pointer-events-none whitespace-nowrap">
        CAMP 2026
      </div>
<div className="z-10 text-center max-w-6xl mr-auto ml-auto pr-6 pl-6 relative">

<div className="inline-flex text-xs font-medium text-[#01aae9] bg-[#01aae9]/5 border-[#01aae9]/20 border rounded-full mb-8 pt-1.5 pr-4 pb-1.5 pl-4 backdrop-blur-sm gap-x-2 gap-y-2 items-center">MYBZZ CAMP - 6. EDYCJA CAMPA</div>

<h1 className="md:text-7xl lg:text-8xl leading-[1] text-5xl font-semibold text-white tracking-tight mb-8">
          Wyjazd, który
          <br className="hidden md:block"/>
          zmieni Twój
          <span className="bg-clip-text text-transparent bg-sky-500">
            biznes.
          </span>
</h1>

<p className="md:text-xl leading-relaxed text-lg font-light text-zinc-400 max-w-2xl mr-auto mb-12 ml-auto">Oderwij się od rutyny. Spędź 3 dni w luksusowej willi na Mazurach. <span className="text-zinc-200 font-medium">
            Networking, Mastermind i Relaks
          </span> w gronie ambitnych przedsiębiorców.</p>

<div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12 border-y border-white/5 py-8 bg-black/20 backdrop-blur-sm">
<div className="flex flex-col items-center gap-2">
<svg className="lucide lucide-map-pin w-6 h-6 text-[#01aae9]" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<span className="text-sm font-medium text-white">Mazury, Mrągowo</span>
<span className="text-xs text-zinc-500">Prywatna linia brzegowa</span>
</div>
<div className="flex flex-col items-center gap-2">
<svg className="lucide lucide-calendar-days w-6 h-6 text-[#01aae9]" data-lucide="calendar-days" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path><path d="M8 14h.01"></path><path d="M12 14h.01"></path><path d="M16 14h.01"></path><path d="M8 18h.01"></path><path d="M12 18h.01"></path><path d="M16 18h.01"></path></svg>
<span className="text-sm font-medium text-white">5-8 Marca 2026</span>
<span className="text-xs text-zinc-500">Czwartek - Niedziela</span>
</div>
<div className="flex flex-col items-center gap-2">
<svg className="lucide lucide-users w-6 h-6 text-[#01aae9]" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<span className="text-sm font-medium text-white">Networking</span>
<span className="text-xs text-zinc-500">Tylko 20 miejsc</span>
</div>
<div className="flex flex-col items-center gap-2">
<svg className="lucide lucide-waves w-6 h-6 text-[#01aae9]" data-lucide="waves" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path><path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path><path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path></svg>
<span className="text-sm font-medium text-white">Strefa SPA</span>
<span className="text-xs text-zinc-500">Basen, Sauna, Jacuzzi</span>
</div>
</div>

<div className="flex flex-col md:flex-row items-center justify-center gap-4">
<a className="w-full md:w-auto px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.2)]" href="#bilety">
            Rezerwuję miejsce na Campie
            <svg className="lucide lucide-arrow-down-right w-4 h-4" data-lucide="arrow-down-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m7 7 10 10"></path><path d="M17 7v10H7"></path></svg>
</a>
<a className="hover:bg-white/5 transition-colors flex items-center justify-center gap-2 md:w-auto font-medium text-slate-50 w-full border-zinc-800 border rounded-full ring-1 pt-4 pr-8 pb-4 pl-8" href="#video-relacje">Zobacz relacje z Campów</a>
</div>
</div>
</section>

<section className="border-y border-white/5 bg-zinc-900/20">
</section>

<section className="overflow-hidden pt-16 pb-24 relative" id="dlaczego">

<div className="absolute inset-0 bg-grid opacity-20 pointer-events-none"></div>
<div className="absolute top-1/2 left-0 w-96 h-96 bg-[#01aae9]/10 blur-[100px] rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
<div className="max-w-7xl z-10 mr-auto ml-auto pr-6 pl-6 relative">
<div className="text-center mb-16 max-w-3xl mx-auto">
<h2 className="md:text-5xl text-4xl font-semibold text-white tracking-tight mb-6">Dlaczego warto pojechać na <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-500">MYBZZ CAMP</span></h2>
<p className="text-lg text-zinc-400">
            Jako przedsiębiorcze kobiety wiemy, że biznes to nie tylko liczby, ale przede wszystkim ludzie. Poznaj ewolucję naszej wizji – od aplikacji globalnej do elitarnych spotkań.
          </p>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">

<div className="lg:col-span-5 group relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/50 p-8 hover:bg-zinc-900/80 transition-all duration-500">
<div className="absolute top-0 right-0 p-3 opacity-20 group-hover:opacity-40 transition-opacity">
<svg className="text-white" fill="none" height="120" stroke="currentColor" strokeWidth="0.5" viewbox="0 0 24 24" width="120"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"></path></svg>
</div>
<div className="relative z-10 flex flex-col h-full justify-between">
<div className="">
<div className="flex items-center gap-3 mb-6">
<img alt="MYBZZ Logo" className="h-8 w-auto opacity-90" onerror="this.onerror=null; this.src='https://placehold.co/100x28/18181b/ffffff?text=MYBZZ&amp;font=montserrat';" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5b2ba015-f358-4a93-a0fb-6ecb32452086_320w.png"/>
<span className="px-2 py-1 rounded-md bg-zinc-800 text-[10px] font-mono text-zinc-400 border border-white/5">EST. 2022</span>
</div>
<h3 className="text-xl font-semibold text-white mb-3">Globalny Networking</h3>
<p className="text-sm text-zinc-400 leading-relaxed mb-6">
                  Stworzyłyśmy aplikację MYBZZ, by ułatwić nawiązywanie kontaktów biznesowych. Narzędzie, które działa globalnie i od ponad 3 lat łączy ludzi w App Store i Google Play.
                </p>
</div>

<div className="flex flex-wrap gap-2 mt-auto gap-x-2 gap-y-2">
<a className="flex items-center gap-2 hover:border-white/30 transition-colors bg-black border-white/10 border rounded-lg pt-2 pr-3 pb-2 pl-3" href="https://apps.apple.com/pl/app/mybzz-meet-business-people/id1610722580">
<svg className="fill-current w-[24px] h-[24px]" data-icon-replaced="true" strokeWidth="2" style={{width: '24px', height: '24px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24"><path className="" d="M17.4 12.6c-.1-1.9 1.5-2.8 1.6-2.9-0.9-1.2-2.3-1.4-2.8-1.4-1.2-0.1-2.3 0.7-2.9 0.7-0.6 0-1.5-0.7-2.5-0.7-1.3 0-2.5 0.8-3.1 1.9-1.3 2.3-0.3 5.7 0.9 7.5 0.6 0.9 1.3 1.9 2.2 1.9 0.9 0 1.2-0.6 2.3-0.6 1.1 0 1.4 0.6 2.3 0.6 0.9 0 1.6-0.9 2.2-1.9 0.7-1 1-2 1-2.1-0.1 0-1.9-0.7-1.9-2.8z M12.9 7.4c0.5-0.7 0.9-1.6 0.8-2.5-0.8 0-1.7 0.5-2.3 1.1-0.5 0.6-0.9 1.5-0.8 2.3 0.8 0.1 1.7-0.3 2.3-0.9z"></path></svg>
<span className="text-base font-medium text-zinc-300">App Store</span>
</a>
<a className="flex items-center gap-2 hover:border-white/30 transition-colors bg-black border-white/10 border rounded-lg pt-2 pr-3 pb-2 pl-3" href="https://play.google.com/store/apps/details?id=com.mybzz.mybzz&amp;hl=pl">
<svg className="w-4 h-4 text-white fill-current" viewbox="0 0 24 24"><path className="" d="M5 3.12v17.76c0 .32.36.53.63.36l14.43-8.88c.25-.15.25-.57 0-.72L5.63 2.76c-.27-.17-.63.04-.63.36z"></path></svg>
<span className="text-base font-medium text-zinc-300">Google Play</span>
</a>
</div>
</div>
</div>

<div className="lg:col-span-7 group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-900 to-black p-8 hover:border-[#01aae9]/30 transition-all duration-500">

<div className="absolute -right-20 -top-20 w-64 h-64 bg-[#01aae9]/20 blur-[80px] rounded-full group-hover:bg-[#01aae9]/30 transition-all duration-700"></div>
<div className="relative z-10 flex flex-col justify-between h-full">
<div className="flex justify-between items-start mb-6">
<h3 className="text-2xl font-semibold text-white">
                   Potrzeba spotkań <span className="text-[#01aae9]">Offline</span>
</h3>
<span className="inline-flex items-center px-3 py-1 rounded-full border border-[#01aae9]/30 bg-[#01aae9]/10 text-[#01aae9] text-xs font-semibold tracking-wide">
                   6. EDYCJA
                 </span>
</div>
<p className="text-zinc-300 leading-relaxed mb-8 max-w-lg">
                 Technologia to początek, ale prawdziwa magia dzieje się twarzą w twarz. Odpowiadając na Wasze potrzeby, stworzyłyśmy . To nie jest zwykłe szkolenie – to wyjazd, który ładuje baterie na cały rok i buduje relacje silniejsze niż tysiąc wiadomości na LinkedIn.
               </p>
<div className="grid grid-cols-2 gap-4 mt-auto">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 text-[#01aae9]">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
</div>
<div className="flex flex-col">
<span className="text-white font-medium text-sm">Ludzie</span>
<span className="text-zinc-500 text-xs">Wyselekcjonowana grupa</span>
</div>
</div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 text-[#01aae9]">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
</div>
<div className="flex flex-col">
<span className="text-white font-medium text-sm">Rozwój</span>
<span className="text-zinc-500 text-xs">Praktyczna wiedza</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group p-6 rounded-3xl border border-white/10 bg-zinc-900/30 hover:bg-zinc-900/60 transition-all duration-300 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-[#01aae9]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<svg className="text-white mb-4 group-hover:scale-110 transition-transform duration-300" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path className="" d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<h4 className="text-lg font-semibold text-white mb-2 relative z-10">Networking 3.0</h4>
<p className="text-sm text-zinc-400 leading-relaxed relative z-10">
               Rozmowy przy kominku czy w saunie często przynoszą lepsze efekty niż oficjalne spotkania w biurze. Budujesz zaufanie w naturalnej atmosferze.
             </p>
</div>

<div className="group p-6 rounded-3xl border border-white/10 bg-zinc-900/30 hover:bg-zinc-900/60 transition-all duration-300 relative overflow-hidden">
<div className="group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-amber-500/10 via-transparent to-transparent opacity-0 absolute top-0 right-0 bottom-0 left-0"></div>
<svg className="text-white mb-4 group-hover:scale-110 transition-transform duration-300" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
<h4 className="text-lg font-semibold text-white mb-2 relative z-10">Zastrzyk Energii</h4>
<p className="text-sm text-zinc-400 leading-relaxed relative z-10">
               Mega dawka pozytywnej energii niezbędnej do kreatywnego działania. Wracasz z głową pełną pomysłów i gotowością do wdrażania zmian.
             </p>
</div>

<div className="group p-6 rounded-3xl border border-white/10 bg-zinc-900/30 hover:bg-zinc-900/60 transition-all duration-300 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<svg className="text-white mb-4 group-hover:scale-110 transition-transform duration-300" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M9 13a4.5 4.5 0 0 0 3-4"></path><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path><path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path><path d="M6 18a4 4 0 0 1-1.967-.516"></path><path d="M12 13h4"></path><path d="M12 18h6a2 2 0 0 1 2 2v1"></path><path d="M12 8h8"></path><path d="M16 8V5a2 2 0 0 1 2-2"></path><circle cx="16" cy="13" r=".5"></circle><circle cx="18" cy="3" r=".5"></circle><circle cx="20" cy="21" r=".5"></circle><circle cx="20" cy="8" r=".5"></circle></svg>
<h4 className="text-lg font-semibold text-white mb-2 relative z-10">Efekt Mastermind</h4>
<p className="text-sm text-zinc-400 leading-relaxed relative z-10">
               Korzystasz z "inteligencji zbiorowej" grupy. Spojrzysz na swoje wyzwania biznesowe z innej perspektywy i znajdziesz gotowe rozwiązania.
             </p>
</div>
</div>
</div>
</section>

<section className="border-y bg-zinc-950 border-white/5 pt-16 pb-24" id="video-relacje">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12">
<div className="">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-2">Zobacz relacje uczestników poprzednich edycji</h2>
<p className="text-zinc-500">Sprawdź co działo się na naszych Campach</p>
</div>
</div>
<div className="grid md:grid-cols-3 gap-6 gap-x-6 gap-y-6">
<div className="aspect-video bg-zinc-900 rounded-xl border border-white/10 overflow-hidden relative">
<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="" className="w-full h-full" frameborder="0" src="https://www.youtube.com/embed/TAfUlqVXH2M" title="Relacja z Campa"></iframe>
</div>
<div className="aspect-video bg-zinc-900 rounded-xl border border-white/10 overflow-hidden relative">
<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="" className="w-full h-full" frameborder="0" src="https://www.youtube.com/embed/NtKGP-4_YE4" title="Relacja z Campa"></iframe>
</div>
<div className="aspect-video bg-zinc-900 rounded-xl border border-white/10 overflow-hidden relative">
<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="" className="w-full h-full" frameborder="0" src="https://www.youtube.com/embed/gCE0UDsVkL0" title="Relacja z Campa"></iframe>
</div>
<div className="aspect-video bg-zinc-900 rounded-xl border border-white/10 overflow-hidden relative">
<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="" className="w-full h-full" frameborder="0" src="https://www.youtube.com/embed/KrZRbQiyvak" title="Relacja z Campa"></iframe>
</div>
<div className="aspect-video bg-zinc-900 rounded-xl border border-white/10 overflow-hidden relative">
<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="" className="w-full h-full" frameborder="0" src="https://www.youtube.com/embed/EYWQ-AlzBx0" title="Relacja z Campa"></iframe>
</div>
<div className="aspect-video bg-zinc-900 rounded-xl border border-white/10 overflow-hidden relative">
<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="" className="w-full h-full" frameborder="0" src="https://www.youtube.com/embed/y3VesdA8dR4" title="Relacja z Campa"></iframe>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mr-auto ml-auto pt-16 pr-6 pb-24 pl-6" id="organizatorzy">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">
          Organizatorzy i Prowadząca
        </h2>
<p className="text-zinc-400">Poznaj osoby, które stoją za sukcesem Campa.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">

<div className="group">
<div className="bg-zinc-900 rounded-2xl mb-6 overflow-hidden border border-white/10 relative aspect-square">
<img alt="Katarzyna Górecka" className="group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out grayscale-[20%] group-hover:grayscale-0 bg-center opacity-90 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/403063b0-edfc-48c3-a80b-1d9ce64641a0_800w.jpg"/>
<div className="bg-gradient-to-t from-black via-black/80 to-transparent pt-8 pr-8 pb-2 pl-8 absolute right-0 bottom-0 left-0">
<h3 className="text-xl font-medium text-white mb-1">
                Katarzyna Górecka
              </h3>
<p className="text-[#01aae9] text-sm font-medium tracking-wide">
                Organizator • MYBZZ Co-Founder &amp; CEO
              </p>
</div>
</div>
<p className="leading-relaxed text-base text-zinc-400 pr-2 pl-2">15 letnie doświadczenie przedsiębiorcy traktuje jako drogę nieustającego rozwoju. Wizjonerka, która wyznaje zasadę "Sky is not the limit". W każdej ze swoich firm zarządzała działem marketingu oraz sprzedażą online.</p>
</div>

<div className="group">
<div className="bg-zinc-900 rounded-2xl mb-6 overflow-hidden border border-white/10 relative aspect-square">
<img alt="Małgorzata Dąbrowska" className="group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out grayscale-[20%] group-hover:grayscale-0 opacity-90 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d1b6eb30-ecfd-418c-9595-97782c039b3a_800w.jpg"/>
<div className="bg-gradient-to-t from-black via-black/80 to-transparent pt-8 pr-8 pb-2 pl-8 absolute right-0 bottom-0 left-0">
<h3 className="text-xl font-medium text-white mb-1">
                Małgorzata Dąbrowska
              </h3>
<p className="text-sm font-medium text-[#01aae9] tracking-wide">Organizator &amp; Prowadząca • MYBZZ Co-Founder</p>
</div>
</div>
<p className="leading-relaxed text-base text-zinc-400 pr-2 pl-2">MYBZZ to fundament jej biznesowej drogi i przestrzeń, w której od 4 lat wspiera przedsiębiorców w rozwoju, skalowaniu projektów i łączeniu się z ludźmi, którzy realnie wznoszą ich biznes na wyższy poziom.</p>
</div>

<div className="group">
<div className="bg-zinc-900 rounded-2xl mb-6 overflow-hidden border border-white/10 relative aspect-square">
<img alt="Dorota Golańska" className="group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out grayscale-[20%] group-hover:grayscale-0 opacity-90 w-full h-full object-cover bg-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/26bca4cf-441f-4344-81ff-60aaafc8e985_800w.jpg"/>
<div className="bg-gradient-to-t from-black via-black/80 to-transparent pt-8 pr-8 pb-2 pl-8 absolute right-0 bottom-0 left-0">
<h3 className="text-xl font-medium text-white mb-1">
                Dorota Golańska
              </h3>
<p className="text-sm font-medium text-[#01aae9] tracking-wide">Prowadząca • Life &amp; Business Coach, Terapeuta</p>
</div>
</div>
<p className="leading-relaxed text-base text-zinc-400 pr-2 pl-2">Działa systemowo. Wspiera przedsiębiorczych ludzi w przemodelowaniu blokujących schematów, uwalnianiu wrodzonego potencjału i kreowaniu osobistej marki opartej na wiarygodności. Na MYBZZ Camp poprowadzi mastermind, dzięki któremu spojrzysz na biznesowe wyzwania z innej perspektywy.</p>
</div>
</div>
</section>

<section className="border-y overflow-hidden bg-zinc-900/30 border-white/5 pt-16 pb-24 relative" id="miejsce">

<div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-[#01aae9]/5 blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">

<div className="grid lg:grid-cols-2 gap-12 items-end mb-16">
<div className="space-y-6">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#01aae9]/10 text-[#01aae9] text-xs font-medium border border-[#01aae9]/20">
<svg className="lucide lucide-home" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
<path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
</svg>
              Luksusowa Willa
            </div>
<h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight">
              Gdzie się spotykamy?
            </h2>
<p className="text-zinc-400 text-lg leading-relaxed max-w-xl">
              Kilkanaście kilometrów od Mrągowa - mazurska wieś przy jeziorze
              Dłużec. Przestronny dom z własną linią brzegową, zaprojektowany
              tak, by sprzyjać integracji i relaksowi.
            </p>
</div>
<div className="bg-black/40 backdrop-blur-sm p-8 rounded-3xl border border-white/5">
<ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
<li className="flex items-center gap-3 text-zinc-300">
<svg className="text-[#01aae9]" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
<path d="m9 11 3 3L22 4"></path>
</svg>
                Własny pomost i linia brzegowa
              </li>
<li className="flex items-center gap-3 text-zinc-300">
<svg className="text-[#01aae9]" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
<path d="m9 11 3 3L22 4"></path>
</svg>
                Podgrzewany basen
              </li>
<li className="flex items-center gap-3 text-zinc-300">
<svg className="text-[#01aae9]" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
<path d="m9 11 3 3L22 4"></path>
</svg>
                Sauna wewnętrzna
              </li>
<li className="flex items-center gap-3 text-zinc-300">
<svg className="text-[#01aae9]" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
<path d="m9 11 3 3L22 4"></path>
</svg>
                Jacuzzi na tarasie
              </li>
<li className="flex items-center gap-3 text-zinc-300">
<svg className="text-[#01aae9]" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
<path d="m9 11 3 3L22 4"></path>
</svg>
                Sala kinowa i bilard
              </li>
<li className="flex items-center gap-3 text-zinc-300">
<svg className="text-[#01aae9]" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
<path d="m9 11 3 3L22 4"></path>
</svg>
                Miejsce na ognisko
              </li>
</ul>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[180px] md:auto-rows-[240px]">

<div className="group relative col-span-2 row-span-2 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">

<img alt="Nowoczesne wnętrze willi z widokiem na jezioro, wysokie okna i drewniane belki" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8e046984-5669-47e6-9b44-8f399e048b9f_1600w.jpg"/>
</div>

<div className="group relative col-span-1 row-span-1 rounded-3xl overflow-hidden border border-white/10">
<img alt="Wnętrze" className="transition-transform duration-700 group-hover:scale-110 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b2b6a2d5-018f-45c2-bd50-f5863225d7e8_800w.webp"/>
</div>

<div className="group relative col-span-1 row-span-1 rounded-3xl overflow-hidden border border-white/10">
<img alt="Relaks" className="transition-transform duration-700 group-hover:scale-110 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8e808a93-310f-4fb1-a8e9-771849245afc_800w.jpg"/>
</div>

<div className="group relative col-span-2 row-span-1 rounded-3xl overflow-hidden border border-white/10">
<img alt="Okolica" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6522a566-d9f7-4a95-8782-d77fa89f157e_1600w.jpg"/>
</div>

<div className="group relative col-span-1 row-span-1 rounded-3xl overflow-hidden border border-white/10">
<img alt="Szczegóły" className="transition-transform duration-700 group-hover:scale-110 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/20d0e0e5-4301-49d8-8ceb-d4db11679c75_800w.jpg"/>
</div>

<div className="group relative col-span-1 row-span-1 rounded-3xl overflow-hidden border border-white/10">
<img alt="Atmosfera" className="transition-transform duration-700 group-hover:scale-110 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f3b8d63b-4a91-4823-9e30-2db79c1e533c_800w.jpg"/>
</div>

<div className="group relative col-span-1 row-span-1 rounded-3xl overflow-hidden border border-white/10">
<img alt="Natura" className="transition-transform duration-700 group-hover:scale-110 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3703b468-71c7-4b5c-92e9-b68a8aecbb67_800w.webp"/>
</div>

<div className="group relative col-span-1 row-span-1 rounded-3xl overflow-hidden border border-white/10">
<img alt="Widok" className="transition-transform duration-700 group-hover:scale-110 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3bee326b-b391-4536-9337-de86c5106670_800w.jpg"/>
</div>

<div className="group relative col-span-2 row-span-1 rounded-3xl overflow-hidden border border-white/10">
<img alt="Taras" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/23e593c9-ba7e-4095-b078-09315b322d43_1600w.jpg"/>
</div>

<div className="group relative col-span-2 md:col-span-2 row-span-1 rounded-3xl overflow-hidden border border-white/10">
<img alt="Wieczór" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover bg-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f59293c7-92e2-4505-a34b-07d832435d6c_1600w.jpg"/>
</div>
</div>
</div>
</section>

<section className="max-w-5xl mr-auto ml-auto pt-16 pr-6 pb-24 pl-6" id="agenda">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">
          Plan Wyjazdu
        </h2>
<p className="text-zinc-400">
          Balans między pracą nad biznesem a integracją.
        </p>
</div>
<div className="md:ml-0 border-zinc-800 border-l ml-4 relative space-y-12">

<div className="relative pl-8 md:pl-12">
<span className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-[#01aae9] ring-4 ring-black"></span>
<h3 className="text-xl font-semibold text-white mb-4">
            CZWARTEK, 5.03.2026
          </h3>
<div className="space-y-4">
<div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8 bg-zinc-900/30 p-4 rounded-lg border border-white/5">
<span className="text-[#01aae9] font-mono text-sm w-28 shrink-0">17:00 - 19:00</span>
<span className="text-zinc-300 text-sm">Przyjazd i zakwaterowanie</span>
</div>
<div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8 bg-zinc-900/30 p-4 rounded-lg border border-white/5">
<span className="text-[#01aae9] font-mono text-sm w-28 shrink-0">19:00 - 20:00</span>
<span className="text-zinc-300 text-sm">Kolacja</span>
</div>
<div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8 bg-zinc-900/30 p-4 rounded-lg border border-white/5">
<span className="text-[#01aae9] font-mono text-sm w-28 shrink-0">20:00 - 21:30</span>
<span className="text-zinc-300 text-sm">Rozpoczęcie MYBZZ CAMP - wystąpienia uczestników</span>
</div>
<div className="flex flex-col md:flex-row md:items-start gap-2 md:gap-8 bg-gradient-to-r from-purple-900/20 to-zinc-900/30 p-4 rounded-lg border border-purple-500/20">
<span className="text-purple-400 font-mono text-sm w-28 shrink-0 pt-0.5">21:30</span>
<div className="flex flex-col">
<span className="text-white text-sm font-medium">WIECZÓR ZAPOZNAWCZY sauna/basen/bilard/jacuzzi</span>
<span className="text-zinc-400 text-xs mt-1">rozmowy do białego rana</span>
</div>
</div>
</div>
</div>

<div className="relative pl-8 md:pl-12">
<span className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-zinc-700 ring-4 ring-black"></span>
<h3 className="text-xl font-semibold text-white mb-4">
            PIĄTEK, 6.03.2026
          </h3>
<div className="space-y-4">
<div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8 bg-zinc-900/30 p-4 rounded-lg border border-white/5">
<span className="text-[#01aae9] font-mono text-sm w-28 shrink-0">8:30 - 10:00</span>
<span className="text-zinc-300 text-sm">Śniadanie</span>
</div>
<div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8 bg-zinc-900/30 p-4 rounded-lg border border-white/5">
<span className="text-[#01aae9] font-mono text-sm w-28 shrink-0">10:00 - 12:30</span>
<span className="text-zinc-300 text-sm">Mastermind biznesowy - dzień 1</span>
</div>
<div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8 bg-zinc-900/30 p-4 rounded-lg border border-white/5">
<span className="text-[#01aae9] font-mono text-sm w-28 shrink-0">12:30 - 13:00</span>
<span className="text-zinc-300 text-sm">Przerwa na ciacho i kawkę, czy co tam chcesz</span>
</div>
<div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8 bg-zinc-900/30 p-4 rounded-lg border border-white/5">
<span className="text-[#01aae9] font-mono text-sm w-28 shrink-0">13:00 - 15:00</span>
<span className="text-zinc-300 text-sm">Mastermind biznesowy - dzień 1</span>
</div>
<div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8 bg-zinc-900/30 p-4 rounded-lg border border-white/5">
<span className="text-[#01aae9] font-mono text-sm w-28 shrink-0">15:00 - 15:30</span>
<span className="text-zinc-300 text-sm">Przerwa na rozprostowanie kości</span>
</div>
<div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8 bg-zinc-900/30 p-4 rounded-lg border border-white/5">
<span className="text-[#01aae9] font-mono text-sm w-28 shrink-0">15:30 - 18:00</span>
<span className="text-zinc-300 text-sm">Mastermind biznesowy - dzień 1</span>
</div>
<div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8 bg-zinc-900/30 p-4 rounded-lg border border-white/5">
<span className="text-[#01aae9] font-mono text-sm w-28 shrink-0">18:00 - 19:00</span>
<span className="text-zinc-300 text-sm">Obiadokolacja</span>
</div>
<div className="flex flex-col md:flex-row md:items-start gap-2 md:gap-8 bg-gradient-to-r from-pink-900/20 to-zinc-900/30 p-4 rounded-lg border border-pink-500/20">
<span className="text-pink-400 font-mono text-sm w-28 shrink-0 pt-0.5">19:30</span>
<div className="flex flex-col">
<span className="text-white text-sm font-medium">WIECZÓR INTEGRACYJNY</span>
<span className="text-zinc-400 text-xs mt-1">Prywatka Prywaciarzy - tańce/hulanki/swawole Part I</span>
</div>
</div>
</div>
</div>

<div className="relative pl-8 md:pl-12">
<span className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-zinc-700 ring-4 ring-black"></span>
<h3 className="text-xl font-semibold text-white mb-4">
            SOBOTA, 7.03.2026
          </h3>
<div className="space-y-4">
<div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8 bg-zinc-900/30 p-4 rounded-lg border border-white/5">
<span className="text-[#01aae9] font-mono text-sm w-28 shrink-0">8:30 - 10:00</span>
<span className="text-zinc-300 text-sm">Śniadanie</span>
</div>
<div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8 bg-zinc-900/30 p-4 rounded-lg border border-white/5">
<span className="text-[#01aae9] font-mono text-sm w-28 shrink-0">10:00 - 13:30</span>
<span className="text-zinc-300 text-sm">Mastermind biznesowy - dzień 2</span>
</div>
<div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8 bg-zinc-900/30 p-4 rounded-lg border border-white/5">
<span className="text-[#01aae9] font-mono text-sm w-28 shrink-0">13:30 - 14:30</span>
<span className="text-zinc-300 text-sm">Przerwa na słodkie guilty pleasure i uzupełnienie płynów</span>
</div>
<div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8 bg-zinc-900/30 p-4 rounded-lg border border-white/5">
<span className="text-[#01aae9] font-mono text-sm w-28 shrink-0">14:30 - 18:00</span>
<span className="text-zinc-300 text-sm">Mastermind biznesowy - dzień 2</span>
</div>
<div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8 bg-zinc-900/30 p-4 rounded-lg border border-white/5">
<span className="text-[#01aae9] font-mono text-sm w-28 shrink-0">18:00 - 19:00</span>
<span className="text-zinc-300 text-sm">Obiadokolacja</span>
</div>
<div className="flex flex-col md:flex-row md:items-start gap-2 md:gap-8 bg-gradient-to-r from-pink-900/20 to-zinc-900/30 p-4 rounded-lg border border-pink-500/20">
<span className="text-pink-400 font-mono text-sm w-28 shrink-0 pt-0.5">19:30</span>
<div className="flex flex-col">
<span className="text-white text-sm font-medium">WIECZÓR INTEGRACYJNY</span>
<span className="text-zinc-400 text-xs mt-1">Prywatka Prywaciarzy - tańce/hulanki/swawole Part II</span>
</div>
</div>
<div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8 bg-gradient-to-r from-purple-900/20 to-zinc-900/30 p-4 rounded-lg border border-purple-500/20">
<span className="text-purple-400 font-mono text-sm w-28 shrink-0">21:30</span>
<span className="text-white text-sm font-medium">QUIZ z nagrodami #biznesisbiznes</span>
</div>
</div>
</div>

<div className="relative pl-8 md:pl-12">
<span className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-zinc-700 ring-4 ring-black"></span>
<h3 className="text-xl font-semibold text-white mb-4">
            NIEDZIELA, 8.03.2026
          </h3>
<div className="space-y-4">
<div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8 bg-zinc-900/30 p-4 rounded-lg border border-white/5">
<span className="text-[#01aae9] font-mono text-sm w-28 shrink-0">8:30 - 10:00</span>
<span className="text-zinc-300 text-sm">Śniadanie</span>
</div>
<div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8 bg-zinc-900/30 p-4 rounded-lg border border-white/5">
<span className="text-[#01aae9] font-mono text-sm w-28 shrink-0">10:00 - 11:00</span>
<span className="text-zinc-300 text-sm">POŻEGNANIE - wymiana kontaktów i zdjęcia grupowe</span>
</div>
<div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8 bg-zinc-900/30 p-4 rounded-lg border border-white/5">
<span className="text-[#01aae9] font-mono text-sm w-28 shrink-0">11:00</span>
<span className="text-zinc-300 text-sm">Zakończenie MYBZZ CAMP</span>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-4xl mr-auto ml-auto pt-16 pr-6 pb-24 pl-6" id="bilety">
<div className="overflow-hidden group md:pl-6 md:pr-6 md:pb-6 md:pt-6 text-center bg-zinc-900 border-white/10 border ring-white/5 ring-1 rounded-3xl pt-8 pr-8 pb-8 pl-8 relative">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-[#01aae9]/10 blur-[90px] rounded-full pointer-events-none group-hover:bg-[#01aae9]/15 transition-all duration-700"></div>
<div className="flex flex-col z-10 relative items-center">

<div className="mb-6 p-4 rounded-full bg-white/5 border border-white/10 shadow-xl">
<svg className="text-[#01aae9]" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
<path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path>
<path className="" d="M13 5v2"></path>
<path d="M13 17v2"></path>
<path d="M13 11v2"></path>
</svg>
</div>
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-3">
            Zainwestuj w siebie i swoją firmę
          </h2>
<p className="text-lg text-zinc-400 max-w-lg mr-auto mb-10 ml-auto">
            Ilość miejsc ściśle ograniczona.
          </p>

<div className="overflow-hidden transition-all duration-300 hover:border-white/20 hover:bg-white/10 bg-white/5 w-full max-w-md border-white/10 border rounded-2xl mb-8 pt-6 pr-8 pb-6 pl-8 relative backdrop-blur-sm">
<div className="flex flex-col items-center mb-8">
<span className="text-sm text-zinc-500 line-through mb-2" id="regular-price">Cena regularna: 3 999 zł</span>
<div className="flex flex-col items-center gap-2">
<span className="md:text-6xl text-5xl font-semibold text-white tracking-tight" id="current-price">2 549 zł</span>
<span className="text-[#01aae9] text-sm font-medium bg-[#01aae9]/10 px-3 py-1 rounded-full border border-[#01aae9]/20" id="savings-info" style={{display: 'inline-block'}}>Oszczędzasz: 1 450 zł</span>
</div>
</div>

<div className="border-t border-white/10 pt-6">
<p className="text-xs text-[#01aae9] font-medium uppercase tracking-wider mb-4">
                Cena wzrasta za:
              </p>
<div className="grid grid-cols-4 gap-3 text-center" id="countdown-timer">
<div className="bg-black/40 rounded-lg py-3 border border-white/5">
<span className="block text-2xl font-semibold text-white tracking-tight" data-unit="days">03</span>
<span className="text-[10px] text-zinc-500 uppercase font-medium">
                    Dni
                  </span>
</div>
<div className="bg-black/40 rounded-lg py-3 border border-white/5">
<span className="block text-2xl font-semibold text-white tracking-tight" data-unit="hours">03</span>
<span className="text-[10px] text-zinc-500 uppercase font-medium">
                    Godz
                  </span>
</div>
<div className="bg-black/40 rounded-lg py-3 border border-white/5">
<span className="block text-2xl font-semibold text-white tracking-tight" data-unit="minutes">04</span>
<span className="text-[10px] text-zinc-500 uppercase font-medium">
                    Min
                  </span>
</div>
<div className="bg-black/40 rounded-lg py-3 border border-white/5">
<span className="block text-2xl font-semibold text-white tracking-tight" data-unit="seconds">04</span>
<span className="text-[10px] text-zinc-500 uppercase font-medium">
                    Sek
                  </span>
</div>
</div>
</div>
</div>

<div className="w-full max-w-xs space-y-5">
<a className="group flex items-center justify-center hover:bg-cyan-50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(1,170,233,0.3)] hover:scale-[1.02] text-lg font-semibold text-black bg-white w-full rounded-xl pt-4 pb-4 relative shadow-[0_0_20px_rgba(255,255,255,0.15)]" href="https://buy.stripe.com/dRm00i8hA1FMc9ccd50x203?prefilled_promo_code=WRGVF5" id="stripe-buy-btn">
<span className="flex items-center gap-2">
                Kup teraz
                <svg className="transition-transform group-hover:translate-x-1" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M5 12h14"></path>
<path className="" d="m12 5 7 7-7 7"></path>
</svg>
</span>
</a>
<div className="space-y-3">
<div className="text-xs text-[#01aae9] font-medium bg-[#01aae9]/10 px-4 py-2 rounded-full border border-[#01aae9]/20 inline-block backdrop-blur-md" id="promo-status-text-updated">Cena obowiązuje do: 18.01.2026, 23:59 (CET)</div>

</div>
</div>
</div>
</div>
</section>

<section className="max-w-3xl border-white/5 border-t mx-auto pt-16 pr-6 pb-24 pl-6">
<h2 className="text-2xl font-semibold text-white mb-8 text-center">
        Częste pytania (FAQ)
      </h2>
<div className="space-y-2">
<details className="group bg-zinc-900/30 border border-white/5 rounded-lg open:bg-zinc-900/50 open:border-white/10 transition-colors">
<summary className="flex cursor-pointer items-center justify-between p-4 font-medium text-zinc-200">
<span>Co jest w cenie wyjazdu?</span>
<svg className="lucide lucide-chevron-down transition-transform group-open:rotate-180 w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(113, 113, 122)', width: '16px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<div className="p-4 pt-0 text-sm text-zinc-400 leading-relaxed">
            Zakwaterowanie (czw-nd), pełne wyżywienie (śniadania i
            obiadokolacje), udział w Mastermindach i warsztatach, dostęp do
            strefy SPA (basen, sauna, jacuzzi), wieczorne atrakcje i networking.
          </div>
</details>
<details className="group bg-zinc-900/30 border border-white/5 rounded-lg open:bg-zinc-900/50 open:border-white/10 transition-colors">
<summary className="flex cursor-pointer items-center justify-between p-4 font-medium text-zinc-200">
<span className="">Z kim będę w pokoju?</span>
<svg className="lucide lucide-chevron-down w-4 h-4 text-zinc-500 transition-transform group-open:rotate-180" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<div className="p-4 pt-0 text-sm text-zinc-400 leading-relaxed">
            Zakwaterowanie w pokojach 3-5 osobowych z łazienkami. Jeśli chcesz
            być z konkretną osobą, napisz do nas po zakupie biletu.
          </div>
</details>
<details className="group bg-zinc-900/30 border border-white/5 rounded-lg open:bg-zinc-900/50 open:border-white/10 transition-colors">
<summary className="flex cursor-pointer items-center justify-between p-4 font-medium text-zinc-200">
<span className="">Dla kogo jest ten wyjazd?</span>
<svg className="lucide lucide-chevron-down w-4 h-4 text-zinc-500 transition-transform group-open:rotate-180" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<div className="p-4 pt-0 text-sm text-zinc-400 leading-relaxed">
            Wydarzenie dla Przedsiębiorców prowadzących firmy w różnych branżach
            (nie dla osób działających wyłącznie w MLM), którzy chcą rozwijać
            swój biznes i sieć kontaktów.
          </div>
</details>
<details className="group bg-zinc-900/30 border border-white/5 rounded-lg open:bg-zinc-900/50 open:border-white/10 transition-colors">
<summary className="flex cursor-pointer items-center justify-between p-4 font-medium text-zinc-200">
<span className="">Co ze sobą zabrać?</span>
<svg className="lucide lucide-chevron-down w-4 h-4 text-zinc-500 transition-transform group-open:rotate-180" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<div className="p-4 pt-0 text-sm text-zinc-400 leading-relaxed">
            Przede wszystkim dobrą energię! Dodatkowo: notatnik, ręczniki
            (kąpielowy/basenowy), strój kąpielowy i klapki.
          </div>
</details>
</div>
</section>

<footer className="bg-black border-white/10 border-t pt-12 pb-12">
<div className="flex flex-col md:flex-row gap-6 max-w-7xl mr-auto ml-auto pr-6 pl-6 gap-x-6 gap-y-6 items-center justify-between">
<div className="text-center md:text-left">
<h4 className="text-white font-semibold mb-1">MyBzz Sp. z o.o.</h4>
<p className="text-xs text-zinc-500">
            ul. Nowogrodzka 31, 00-511 Warszawa
            <br/>
            NIP: 7011069967
          </p>
</div>
<div className="flex gap-6 text-sm">
<a className="hover:text-white transition-colors text-zinc-500" href="https://mybzzcampregulamin.gr8.com/" rel="noopener noreferrer" target="_blank">
            Regulamin
          </a>
<a className="hover:text-white transition-colors text-zinc-500" href="mailto:biuro@mybzz.pl">
            Kontakt
          </a>
</div>
</div>
<div className="text-center mt-8 text-xs text-zinc-700">
        © 2026 MYBZZ. All rights reserved.
      </div>
</footer>



    </>
  );
}
